import { isReactFrameworkId } from './frameworkId';

const voidElements = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

function expandsInlineMarkup(line: string) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('<') || !/>\s*</.test(trimmed)) return [line];

  const baseIndent = line.match(/^[ \t]*/)?.[0] ?? '';
  const pieces = trimmed.replace(/>\s*</g, '>\n<').split('\n');
  let depth = 0;

  return pieces.map((piece) => {
    const isClosing = /^<\//.test(piece);
    if (isClosing) depth = Math.max(0, depth - 1);

    const formatted = `${baseIndent}${'  '.repeat(depth)}${piece}`;
    const tagName = piece.match(/^<([A-Za-z][\w:.-]*)\b/)?.[1]?.toLowerCase();
    const isFragment = piece === '<>';
    const isSelfClosing = /\/>$/.test(piece) || Boolean(tagName && voidElements.has(tagName));
    const isInlinePair = /^<([A-Za-z][\w:.-]*)\b[^>]*>.*<\/\1>$/.test(piece);
    const opensChildren = (isFragment || Boolean(tagName)) && !isSelfClosing && !isInlinePair;

    if (opensChildren) depth += 1;
    return formatted;
  });
}

function indentLines(value: string, spaces: number) {
  const indent = ' '.repeat(spaces);
  return value
    .split('\n')
    .map((line) => line.trim() ? `${indent}${line.trim()}` : '')
    .join('\n');
}

function lineIndentLength(line: string) {
  return line.match(/^[ \t]*/)?.[0].length ?? 0;
}

function shiftLineIndent(line: string, shift: number) {
  if (!line.trim()) return '';
  const next = Math.max(0, lineIndentLength(line) + shift);
  return `${' '.repeat(next)}${line.trimStart()}`;
}

/** `<>` / `</>` 정렬 + 직계 자식을 한 단계(2칸)만 들여 씁니다. */
function normalizeJsxFragmentBlocks(code: string) {
  const lines = code.split('\n');
  const formatted: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const openMatch = lines[index].match(/^([ \t]*)<>\s*$/);
    if (!openMatch) {
      formatted.push(lines[index]);
      continue;
    }

    const baseIndent = openMatch[1];
    const body: string[] = [];
    index += 1;

    while (index < lines.length && !/^[ \t]*<\/>\s*$/.test(lines[index])) {
      body.push(lines[index]);
      index += 1;
    }

    const nonEmpty = body.filter((line) => line.trim());
    const minIndent = nonEmpty.length
      ? Math.min(...nonEmpty.map(lineIndentLength))
      : baseIndent.length + 2;
    const shift = baseIndent.length + 2 - minIndent;

    formatted.push(`${baseIndent}<>`);
    formatted.push(...body.map((line) => shiftLineIndent(line, shift)));
    formatted.push(`${baseIndent}</>`);
  }

  return formatted.join('\n');
}

function formatJsxTree(body: string, baseIndent: number) {
  const root = ' '.repeat(baseIndent);
  const flattened = body
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .flatMap((line) => {
      const trimmed = line.trim();
      if (!trimmed) return [];
      if (!trimmed.startsWith('<') || !/>\s*</.test(trimmed)) return [trimmed];
      return trimmed
        .replace(/>\s*</g, '>\n<')
        .split('\n')
        .map((piece) => piece.trim())
        .filter(Boolean);
    });

  let depth = 0;
  const lines: string[] = [];

  for (const piece of flattened) {
    const isClosing = piece === '</>' || /^<\//.test(piece);
    if (isClosing) depth = Math.max(0, depth - 1);

    lines.push(`${root}${'  '.repeat(depth)}${piece}`);

    if (isClosing) continue;

    const isFragmentOpen = piece === '<>';
    const isSelfClosing = /\/>$/.test(piece);
    const isInlinePair = /^<[A-Za-z][\w:.-]*\b[^>]*>[\s\S]*<\/[A-Za-z][\w:.-]*>\s*$/.test(piece);
    const isOpenTag = /^<[A-Za-z][\w:.-]*\b/.test(piece) && !isSelfClosing && !isInlinePair;

    if (isFragmentOpen || isOpenTag) depth += 1;
  }

  return lines.join('\n');
}

/**
 * return ( … ); 블록에서 return과 );를 같은 들여쓰기로 맞추고,
 * JSX는 태그 깊이에 따라 들여 씁니다.
 */
function normalizeReturnParentheses(code: string) {
  return code.replace(
    /(^[ \t]*)return\s*\(\n([\s\S]*?)\n[ \t]*\);/gm,
    (match, fnIndent: string, body: string) => {
      if (!body.trim()) return match;

      const formattedBody = formatJsxTree(body, fnIndent.length + 2);
      return `${fnIndent}return (\n${formattedBody}\n${fnIndent});`;
    },
  );
}

function formatReactExample(code: string) {
  return code.replace(
    /export function Example\(\)\s*\{\s*([\s\S]*?)\breturn\s*<>([\s\S]*?)<\/>;\s*\}/g,
    (_match, setup: string, markup: string) => {
      const statements = setup
        .trim()
        .replace(/;\s+(?=(?:const|let|var)\b)/g, ';\n');
      const setupBlock = statements ? `${indentLines(statements, 2)}\n` : '';

      return `export function Example() {\n${setupBlock}  return (\n    <>\n${indentLines(markup.trim(), 6)}\n    </>\n  );\n}`;
    },
  );
}

function hasTagEnd(value: string) {
  let quote = '';

  for (const character of value) {
    if (quote) {
      if (character === quote) quote = '';
      continue;
    }

    if (character === '"' || character === "'") {
      quote = character;
    } else if (character === '>') {
      return true;
    }
  }

  return false;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function opensXmlChildren(value: string) {
  const openingTag = value.match(/^<([A-Za-z][\w:.-]*)\b/);
  if (!openingTag || /\/>\s*$/.test(value)) return false;

  return !new RegExp(`</${escapeRegExp(openingTag[1])}>\\s*$`).test(value);
}

function formatWebSquareExample(code: string) {
  const lines = code
    .replace(/\r\n?/g, '\n')
    .replace(/(?<!\]\])>\s*<(?!\!\[CDATA\[)/g, '>\n<')
    .trim()
    .split('\n');
  const formatted: string[] = [];
  let depth = 0;
  let multilineTag = '';

  for (const sourceLine of lines) {
    const line = sourceLine.trim();
    if (!line) {
      if (formatted.at(-1) !== '') formatted.push('');
      continue;
    }

    if (multilineTag) {
      formatted.push(`${'  '.repeat(depth + 1)}${line}`);
      multilineTag += ` ${line}`;

      if (hasTagEnd(multilineTag)) {
        if (opensXmlChildren(multilineTag)) depth += 1;
        multilineTag = '';
      }
      continue;
    }

    if (/^<\//.test(line)) depth = Math.max(0, depth - 1);
    formatted.push(`${'  '.repeat(depth)}${line}`);

    if (/^<[A-Za-z][\w:.-]*\b/.test(line) && !hasTagEnd(line)) {
      multilineTag = line;
    } else if (opensXmlChildren(line)) {
      depth += 1;
    }
  }

  return formatted.join('\n').trim();
}

export function formatCodeExample(code: string, frameworkId = '') {
  if (frameworkId === 'websquare') return formatWebSquareExample(code);

  if (isReactFrameworkId(frameworkId)) {
    const normalizedCode = normalizeReturnParentheses(formatReactExample(code));
    return normalizedCode.replace(/\r\n?/g, '\n').trim();
  }

  return code
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .flatMap(expandsInlineMarkup)
    .join('\n')
    .trim();
}
