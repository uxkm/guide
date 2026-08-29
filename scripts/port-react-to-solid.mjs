#!/usr/bin/env node
/**
 * Port apps/react component sources to apps/solid with Solid JSX conversions.
 */
import fs from 'node:fs';
import path from 'node:path';

const REACT_ROOT = path.resolve('apps/react/src/components');
const SOLID_ROOT = path.resolve('apps/solid/src/components');

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

function convertClassName(source) {
  const tokens = [];
  let protectedSource = source.replace(/\.className\s*=/g, () => {
    const token = `__DOM_CLS_${tokens.length}__`;
    tokens.push(token);
    return `.${token} =`;
  });
  protectedSource = protectedSource.replace(/\bclassName\b/g, 'class');
  for (const token of tokens) {
    protectedSource = protectedSource.replace(
      new RegExp(`\\.${token} =`, 'g'),
      '.className =',
    );
  }
  return protectedSource;
}

function convertUseRef(source) {
  const refVars = [];
  let result = source.replace(/const\s+(\w+)\s*=\s*useRef\(([^)]*)\);/g, (_, name, init) => {
    refVars.push(name);
    const trimmed = init.trim();
    return trimmed ? `let ${name} = ${trimmed};` : `let ${name};`;
  });
  for (const name of refVars) {
    result = result.replace(new RegExp(`\\b${name}\\.current\\b`, 'g'), name);
  }
  return result;
}

function convertUseCallback(source) {
  return source.replace(
    /useCallback\(\s*(\([^)]*\)|[a-zA-Z_$][\w$]*)\s*,\s*\[[^\]]*\]\s*\)/g,
    '$1',
  );
}

function convertUseMemo(source) {
  let result = source.replace(
    /const\s+(\w+)\s*=\s*useMemo\(\s*\(\)\s*=>\s*/g,
    'const $1 = createMemo(() => ',
  );
  result = result.replace(/useMemo\(\s*\(\)\s*=>\s*/g, 'createMemo(() => ');
  result = result.replace(/\),\s*\[[^\]]*\]\s*\)/g, ')');
  return result;
}

function convertUseId(source) {
  return source.replace(
    /const\s+(\w+)\s*=\s*useId\(\)(\.replaceAll\([^)]+\))?;/g,
    (_, name, chain) => `const ${name} = createUniqueId()${chain ?? ''};`,
  );
}

function convertUseState(source) {
  const signals = [];
  const result = source.replace(
    /const\s+\[(\w+),\s*(set\w+)\]\s*=\s*useState\(([\s\S]*?)\);/g,
    (_, name, setter, init) => {
      signals.push({ name, setter });
      return `const [${name}, ${setter}] = createSignal(${init});`;
    },
  );
  return { source: result, signals };
}

function convertUseEffect(source) {
  return source.replace(
    /useEffect\(\s*\(\)\s*=>\s*\{([\s\S]*?)\}(?:,\s*\[[^\]]*\])?\s*\);/g,
    'createEffect(() => {$1});',
  );
}

function addSignalAccessors(source, signals) {
  let result = source;
  for (const { name, setter } of signals) {
    const declRe = new RegExp(
      `const\\s+\\[${name},\\s*${setter}\\]\\s*=\\s*createSignal\\([^;]+\\);`,
    );
    const declMatch = result.match(declRe)?.[0];
    if (declMatch) {
      result = result.replace(declRe, `__DECL_${name}__`);
    }

    const setterToken = `__SET_${name}__`;
    result = result.replace(new RegExp(`\\b${setter}\\b`, 'g'), setterToken);

    result = result.replace(new RegExp(`(?<![\\w$.])${name}(?![\\w$.(])`, 'g'), `${name}()`);

    result = result.replace(new RegExp(setterToken, 'g'), setter);
    if (declMatch) {
      result = result.replace(`__DECL_${name}__`, declMatch);
    }
  }
  return result;
}

function convertChildrenApi(source) {
  return source
    .replace(/\bChildren\.toArray\(([^)]+)\)/g, 'toChildArray($1)')
    .replace(/\bisValidElement\b/g, 'isSolidChild')
    .replace(/\bcloneElement\(/g, 'mergeChildProps(');
}

function compatImportPath(sourceFile) {
  const rel = path.relative(path.dirname(sourceFile), path.resolve('apps/solid/src/utils'));
  const normalized = rel.split(path.sep).join('/');
  return normalized.startsWith('.') ? `${normalized}/solid-react-compat.jsx` : `./${normalized}/solid-react-compat.jsx`;
}

function addCompatImport(source, sourceFile) {
  if (
    !source.includes('toChildArray') &&
    !source.includes('isSolidChild') &&
    !source.includes('mergeChildProps')
  ) {
    return source;
  }
  if (source.includes('solid-react-compat')) return source;
  const importPath = compatImportPath(sourceFile);
  return `import { toChildArray, isSolidChild, mergeChildProps } from '${importPath}';\n${source}`;
}

function buildSolidImports(reactImports, source) {
  const solid = new Set();
  const solidWeb = new Set();

  if (reactImports.has('useState')) solid.add('createSignal');
  if (reactImports.has('useEffect')) solid.add('createEffect');
  if (reactImports.has('useMemo')) solid.add('createMemo');
  if (reactImports.has('useId')) solid.add('createUniqueId');
  if (reactImports.has('useContext') || reactImports.has('createContext')) {
    solid.add('useContext');
    solid.add('createContext');
  }
  if (reactImports.has('Fragment')) solid.add('Fragment');
  if (source.includes('createPortal')) solidWeb.add('Portal');

  const lines = [];
  if (solid.size) lines.push(`import { ${[...solid].sort().join(', ')} } from 'solid-js';`);
  if (solidWeb.size) lines.push(`import { ${[...solidWeb].sort().join(', ')} } from 'solid-js/web';`);
  return lines.length ? `${lines.join('\n')}\n` : '';
}

function convertFile(content, sourceFile) {
  const reactImports = collectReactImports(content);
  let source = content;

  if (reactImports.size > 0) {
    source = removeReactImports(source);
  }
  source = convertClassName(source);
  source = convertUseRef(source);
  source = convertUseCallback(source);
  source = convertUseMemo(source);
  source = convertUseId(source);

  const stateResult = convertUseState(source);
  source = stateResult.source;
  source = convertUseEffect(source);
  source = convertChildrenApi(source);
  source = addSignalAccessors(source, stateResult.signals);

  const solidImports = buildSolidImports(reactImports, source);
  source = addCompatImport(source, sourceFile);
  if (solidImports) {
    source = solidImports + source;
  }

  return source;
}

function copyAndConvert(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const created = [];

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      created.push(...copyAndConvert(srcPath, destPath));
    } else if (shouldSkip(entry.name)) {
      continue;
    } else if (entry.name.endsWith('.jsx')) {
      const content = fs.readFileSync(srcPath, 'utf8');
      fs.writeFileSync(destPath, convertFile(content, destPath));
      created.push(destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      created.push(destPath);
    }
  }

  return created;
}

if (fs.existsSync(SOLID_ROOT)) {
  fs.rmSync(SOLID_ROOT, { recursive: true, force: true });
}

const created = copyAndConvert(REACT_ROOT, SOLID_ROOT);
console.log(`Converted ${created.length} files`);
