#!/usr/bin/env node
/**
 * Port apps/react component sources to apps/qwik with Qwik JSX conversions.
 */
import fs from 'node:fs';
import path from 'node:path';

const REACT_ROOT = path.resolve('apps/react/src/components');
const QWIK_ROOT = path.resolve('apps/qwik/src/components');

const EVENT_PROPS = [
  'onClick',
  'onChange',
  'onInput',
  'onKeyDown',
  'onKeyUp',
  'onFocus',
  'onBlur',
  'onSubmit',
  'onMouseEnter',
  'onMouseLeave',
  'onScroll',
];

function shouldSkip(file) {
  return file.endsWith('.test.jsx') || file.endsWith('.test.js');
}

function collectReactImports(source) {
  const imports = new Set();
  const importRe = /import\s*\{([^}]+)\}\s*from\s*['"]react(?:-dom)?['"]/g;
  let match;
  while ((match = importRe.exec(source)) !== null) {
    match[1]
      .split(',')
      .map((s) => s.trim().split(/\s+as\s+/)[0].trim())
      .filter(Boolean)
      .forEach((name) => imports.add(name));
  }
  return imports;
}

function removeReactImports(source) {
  return source
    .replace(/import\s*\{[^}]+\}\s*from\s*['"]react(?:-dom)?['"];\s*\n?/g, '')
    .replace(/import\s+React\s+from\s*['"]react['"];\s*\n?/g, '');
}

function convertImportPaths(source) {
  return source.replace(/from\s+(['"])([^'"]+)\.jsx\1/g, "from $1$2.tsx$1");
}

function convertClassName(source) {
  const domClassName = [];
  let idx = 0;
  let result = source.replace(/\.className\s*=/g, () => {
    const token = `__DOM_CLASSNAME_${idx++}__`;
    domClassName.push(token);
    return `.${token} =`;
  });

  result = result.replace(/\bclassName=/g, 'class=');
  result = result.replace(
    /(export (?:const \w+ = component\$\(|function \w+\()\s*\{)([\s\S]*?)(\}\)\s*(?:=>|\{))/g,
    (_, start, params, end) => `${start}${params.replace(/\bclassName(\s*[,=}])/g, 'class: className$1')}${end}`,
  );
  result = result.replace(/,\s*class: className/g, ', className');
  result = result.replace(/\[\s*class: className/g, '[className');

  domClassName.forEach((token) => {
    result = result.replace(new RegExp(`\\.${token} =`, 'g'), '.className =');
  });

  return result;
}

function convertHtmlFor(source) {
  return source.replace(/\bhtmlFor\b/g, 'for');
}

function convertEventHandlers(source) {
  let result = source;
  for (const prop of EVENT_PROPS) {
    result = result.replace(new RegExp(`\\b${prop}=\\{`, 'g'), `${prop}$={`);
  }
  return result;
}

function postProcess(source) {
  let result = source.replace(
    /on(Click|Change|Input|KeyDown|KeyUp|Focus|Blur|Submit|MouseEnter|MouseLeave|Scroll)\$2/g,
    'on$1',
  );
  result = result.replace(
    /return \(\s*\{ useContextProvider\(([^)]+)\); return \(/g,
    'useContextProvider($1);\n  return (',
  );
  result = result.replace(/\); \}\s*\n\s*\);/g, '\n  );');
  result = result.replace(/\); \}\s*\);/g, '\n  );');
  return result;
}

function convertUseRef(source) {
  const refVars = [];
  let result = source.replace(/const\s+(\w+)\s*=\s*useRef\(([^)]*)\);/g, (_, name) => {
    refVars.push(name);
    return `const ${name} = useSignal<HTMLElement | undefined>(undefined);`;
  });

  for (const name of refVars) {
    result = result.replace(new RegExp(`\\b${name}\\.current\\b`, 'g'), `${name}.value`);
    result = result.replace(new RegExp(`ref=\\{${name}\\}`, 'g'), `ref={${name}}`);
  }

  return { source: result, refVars };
}

function convertUseCallback(source) {
  return source.replace(
    /useCallback\(\s*(\([^)]*\)|[a-zA-Z_$][\w$]*)\s*,\s*\[[^\]]*\]\s*\)/g,
    '$1',
  );
}

function convertUseMemo(source) {
  return source
    .replace(
      /const\s+(\w+)\s*=\s*useMemo\(\s*\(\)\s*=>\s*([\s\S]*?),\s*\[[^\]]*\]\s*\);/g,
      'const $1 = $2;',
    )
    .replace(/useMemo\(\s*\(\)\s*=>\s*([\s\S]*?),\s*\[[^\]]*\]\s*\)/g, '$1');
}

function convertUseId(source) {
  return source.replace(
    /const\s+(\w+)\s*=\s*useId\(\)(\.replace(?:All)?\([^)]+\))?;/g,
    (_, name, chain) => `const ${name} = useId()${chain ?? ''};`,
  );
}

function convertUseState(source) {
  const signals = [];
  let result = source.replace(
    /const\s+\[(\w+),\s*(set\w+)\]\s*=\s*useState\(([\s\S]*?)\);/g,
    (_, name, setter, init) => {
      signals.push({ name, setter });
      return `const ${name} = useSignal(${init});`;
    },
  );
  return { source: result, signals };
}

function convertSignalAccessors(source, signals) {
  let result = source;
  for (const { name, setter } of signals) {
    result = result.replace(new RegExp(`\\b${setter}\\(([^)]+)\\)`, 'g'), `${name}.value = $1`);
    result = result.replace(new RegExp(`\\b${setter}\\b`, 'g'), `(v) => { ${name}.value = v; }`);

    const declRe = new RegExp(`const\\s+${name}\\s*=\\s*useSignal\\([^;]+\\);`);
    const declMatch = result.match(declRe);
    if (!declMatch) continue;
    const declToken = `__DECL_${name}__`;
    result = result.replace(declRe, declToken);

    const readRe = new RegExp(`(?<![\\w$.])${name}(?![\\w$])`, 'g');
    result = result.replace(readRe, `${name}.value`);

    result = result.replace(declToken, declMatch[0]);
  }
  return result;
}

function extractEffectDeps(depsArray) {
  if (!depsArray) return '';
  return depsArray
    .split(',')
    .map((dep) => dep.trim())
    .filter(Boolean)
    .map((dep) => `track(() => ${dep});`)
    .join('\n    ');
}

function convertUseEffect(source) {
  return source
    .replace(
      /useEffect\(\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*,\s*\[([^\]]*)\]\s*\);/g,
      (_, body, deps) => {
        const trackLines = extractEffectDeps(deps);
        const trackBlock = trackLines ? `\n    ${trackLines}\n` : '';
        return `useVisibleTask$(({ track, cleanup }) => {${trackBlock}${body}\n  });`;
      },
    )
    .replace(/useEffect\(\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*\);/g, (_, body) => {
      return `useVisibleTask$(({ cleanup }) => {\n    ${body}\n  });`;
    });
}

function convertCreateContext(source) {
  return source
    .replace(/export const (\w+) = createContext\(([^)]*)\);/g, 'export const $1 = createContextId($2);')
    .replace(/createContext\(([^)]*)\)/g, 'createContextId($1)');
}

function convertContextProvider(source) {
  if (!source.includes('.Provider')) return source;
  return source.replace(
    /<(\w+Context)\.Provider value=\{([\s\S]*?)\}>([\s\S]*?)<\/\1\.Provider>/g,
    (_, ctx, value, inner) => {
      return `useContextProvider(${ctx}, ${value});\n  return (\n    ${inner.trim()}\n  );`;
    },
  );
}

function convertChildrenApi(source) {
  return source
    .replace(/\bChildren\.toArray\(([^)]+)\)/g, 'toChildArray($1)')
    .replace(/\bisValidElement\b/g, 'isQwikElement')
    .replace(/\bcloneElement\(/g, 'mergeElementProps(');
}

function convertCreatePortal(source) {
  if (!source.includes('createPortal')) return source;
  return source.replace(/createPortal\(([\s\S]*?),\s*([\w.]+)\)/g, '<Portal mount={$2}>{$1}</Portal>');
}

function findParamClose(source, openParen) {
  let depth = 0;
  for (let i = openParen; i < source.length; i += 1) {
    const char = source[i];
    if (char === '(') depth += 1;
    else if (char === ')') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function looksLikeComponent(body) {
  return /return[\s\S]*</.test(body) || /=\s*\(\s*\n\s*</.test(body);
}

function wrapExportFunctions(source) {
  const exportNames = [];
  let result = source;
  const exportFnRe = /export function (\w+)\s*\(/g;
  const replacements = [];

  let match;
  while ((match = exportFnRe.exec(source)) !== null) {
    const name = match[1];
    const openParen = match.index + match[0].length - 1;
    const paramClose = findParamClose(source, openParen);
    if (paramClose === -1) continue;
    const openBrace = source.indexOf('{', paramClose);
    if (openBrace === -1) continue;
    const closeBrace = findMatchingBrace(source, openBrace);
    if (closeBrace === -1) continue;
    const body = source.slice(match.index, closeBrace + 1);
    if (!looksLikeComponent(body)) continue;
    exportNames.push(name);
    replacements.push({ start: match.index, end: closeBrace + 1, body });
  }

  for (let i = replacements.length - 1; i >= 0; i -= 1) {
    const { start, end, body } = replacements[i];
    const converted = body
      .replace(/^export function (\w+)\s*\(/, 'export const $1 = component$((')
      .replace(/\}$/, '});');
    result = result.slice(0, start) + converted + result.slice(end);
  }

  return { source: result, exportNames };
}

function buildQwikImports(reactImports, source) {
  const qwik = new Set(['component$']);

  if (reactImports.has('useState') || reactImports.has('useRef') || source.includes('useSignal(')) {
    qwik.add('useSignal');
  }
  if (reactImports.has('useEffect') || reactImports.has('useRef') || source.includes('useVisibleTask$')) {
    qwik.add('useVisibleTask$');
  }
  if (reactImports.has('useId')) qwik.add('useId');
  if (reactImports.has('useContext')) qwik.add('useContext');
  if (reactImports.has('createContext') || source.includes('useContextProvider(')) {
    qwik.add('createContextId');
    qwik.add('useContextProvider');
  }
  if (reactImports.has('Fragment')) qwik.add('Fragment');

  const lines = [`import { ${[...qwik].sort().join(', ')} } from '@builder.io/qwik';`];

  if (
    source.includes('toChildArray') ||
    source.includes('isQwikElement') ||
    source.includes('mergeElementProps') ||
    source.includes('<Portal')
  ) {
    const depth = (source.match(/from '\.\.\//g) || []).length;
    const prefix = '../'.repeat(Math.max(depth, 1));
    lines.push(
      `import { toChildArray, isQwikElement, mergeElementProps, Portal } from '${prefix}utils/qwik-react-compat.tsx';`,
    );
  }

  return `${lines.join('\n')}\n`;
}

function convertFile(content) {
  const reactImports = collectReactImports(content);
  let source = content;
  source = removeReactImports(source);
  source = convertImportPaths(source);
  source = convertClassName(source);
  source = convertHtmlFor(source);

  const refResult = convertUseRef(source);
  source = refResult.source;

  source = convertUseCallback(source);
  source = convertUseMemo(source);
  source = convertUseId(source);

  const stateResult = convertUseState(source);
  source = stateResult.source;
  source = convertUseEffect(source);
  source = convertCreateContext(source);
  source = convertContextProvider(source);
  source = convertChildrenApi(source);
  source = convertCreatePortal(source);
  source = convertSignalAccessors(source, stateResult.signals);
  source = convertEventHandlers(source);

  const firstWrap = wrapExportFunctions(source);
  const secondWrap = wrapExportFunctions(firstWrap.source);
  source = postProcess(secondWrap.source);
  const exportNames = [...firstWrap.exportNames, ...secondWrap.exportNames];

  if (reactImports.size > 0 || exportNames.length > 0 || source.includes('component$')) {
    source = buildQwikImports(reactImports, source) + source;
  }

  return source;
}

function fixIndexExports(content) {
  return content.replace(/\.jsx(['"])/g, '.tsx$1');
}

function copyAndConvert(srcDir, destDir) {
  fs.rmSync(destDir, { recursive: true, force: true });
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const created = [];

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destName = entry.name.endsWith('.jsx')
      ? entry.name.replace(/\.jsx$/, '.tsx')
      : entry.name;
    const destPath = path.join(destDir, destName);

    if (entry.isDirectory()) {
      created.push(...copyAndConvert(srcPath, destPath));
    } else if (shouldSkip(entry.name)) {
      continue;
    } else if (entry.name.endsWith('.jsx')) {
      const content = fs.readFileSync(srcPath, 'utf8');
      fs.writeFileSync(destPath, convertFile(content));
      created.push(destPath);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      if (entry.name.endsWith('.js')) content = fixIndexExports(content);
      fs.writeFileSync(destPath, content);
      created.push(destPath);
    }
  }

  return created;
}

const created = copyAndConvert(REACT_ROOT, QWIK_ROOT);
console.log(`Converted ${created.length} files to ${QWIK_ROOT}`);
