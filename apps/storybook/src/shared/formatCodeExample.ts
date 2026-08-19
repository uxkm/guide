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

function formatReactExample(code: string) {
  return code.replace(
    /export function Example\(\)\s*\{\s*([\s\S]*?)\breturn\s*<>([\s\S]*?)<\/>;\s*\}/g,
    (_match, setup: string, markup: string) => {
      const statements = setup
        .trim()
        .replace(/;\s+(?=(?:const|let|var)\b)/g, ';\n');
      const setupBlock = statements ? `${indentLines(statements, 2)}\n` : '';

      return `export function Example() {\n${setupBlock}  return (\n    <>\n${indentLines(markup.trim(), 6)}\n    </>\n  );\n}`;
    }
  );
}

export function formatCodeExample(code: string, frameworkId = '') {
  const normalizedCode = frameworkId === 'react' || frameworkId === 'next'
    ? formatReactExample(code)
    : code;

  return normalizedCode
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .flatMap(expandsInlineMarkup)
    .join('\n')
    .trim();
}
