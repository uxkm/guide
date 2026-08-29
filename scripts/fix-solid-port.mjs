#!/usr/bin/env node
/**
 * Post-process ported Solid components to fix conversion gaps.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('apps/solid/src/components');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.jsx')) files.push(full);
  }
  return files;
}

function fixFile(file) {
  let source = fs.readFileSync(file, 'utf8');
  const original = source;

  // Reserved `class` destructuring -> Solid alias
  source = source.replace(/\bclass\s*=\s*(''|""|[^,}\n]+)/g, (match, val, offset) => {
    const before = source.slice(Math.max(0, offset - 80), offset);
    if (/class\s*=\s*\{/.test(before + match)) return match;
    if (/\bfunction\s+\w+\s*\(\s*\{/.test(before) || /,\s*$/.test(before) || /\{\s*$/.test(before)) {
      return `class: className = ${val}`;
    }
    return match;
  });

  // class list references (not JSX attributes)
  source = source.replace(/(\[[\s\S]*?)\bclass\b(\s*,)/g, '$1className$2');
  source = source.replace(/,\s*\n\s*className\s*\n/g, ',\n    className\n');
  source = source.replace(/\.filter\(Boolean\)\s*\.join\(' '\);\s*\n\s*className,/g, (m) =>
    m.replace('className,', ''),
  );

  // Remaining hook conversions
  source = source.replace(/\buseCallback\(\s*/g, '(');
  source = source.replace(/,\s*\[[^\]]*\]\s*\)(\s*;)/g, ')$1');

  source = source.replace(/const\s+(\w+)\s*=\s*useRef\(([^)]*)\);/g, (_, name, init) => {
    const trimmed = init.trim();
    return trimmed ? `let ${name} = ${trimmed};` : `let ${name};`;
  });
  source = source.replace(/\b(\w+)Ref\.current\b/g, '$1Ref');
  source = source.replace(/\bitemsRef\.current\b/g, 'itemsRef');
  source = source.replace(/\bpanelsRef\.current\b/g, 'panelsRef');
  source = source.replace(/\bcreatedUrls\.current\b/g, 'createdUrls');
  source = source.replace(/\bpauseReasonsRef\.current\b/g, 'pauseReasonsRef');
  source = source.replace(/\bstateRef\.current\b/g, 'stateRef');
  source = source.replace(/\bdisabledRef\.current\b/g, 'disabledRef');
  source = source.replace(/\bmultipleRef\.current\b/g, 'multipleRef');

  source = source.replace(/useEffect\(\s*\(\)\s*=>\s*\(\)\s*=>\s*/g, 'onCleanup(() => ');
  source = source.replace(/useEffect\(\s*\(\)\s*=>\s*\{([\s\S]*?)\}(?:,\s*\[[^\]]*\])?\s*\);/g, 'createEffect(() => {$1});');
  source = source.replace(/useEffect\(\s*\(\)\s*=>\s*([^;{][^;]*);/g, 'createEffect(() => $1);');

  // Broken createMemo dependency arrays
  source = source.replace(/\),\s*\n\s*\[[^\]]*\],\s*\n\s*\);/g, '));');
  source = source.replace(/\),\s*\[[^\]]*\],\s*\);/g, '));');

  // Lazy createSignal initializer from useState(() => ...)
  source = source.replace(/createSignal\(\(\)\s*=>\s*([^)]+)\)/g, 'createSignal($1)');

  // Fix isOpen(): () => stateRef syntax errors from bad conversion
  source = source.replace(/isOpen\(\):\s*\(\)\s*=>\s*(\w+)/g, 'isOpen: () => $1');

  // Memo accessors used as objects
  source = source.replace(/\bsource\.find\b/g, 'source().find');
  source = source.replace(/\bsource\.some\b/g, 'source().some');
  source = source.replace(/\bsource\.map\b/g, 'source().map');
  source = source.replace(/\bsource\.length\b/g, 'source().length');
  source = source.replace(/\bchildItems\b(?!\()/g, (m, offset) => {
    const before = source.slice(offset - 20, offset);
    if (before.includes('const childItems')) return m;
    if (before.includes('childItems =')) return m;
    return 'childItems()';
  });

  // Add missing solid imports
  const needs = [];
  if (/\bonCleanup\b/.test(source) && !/onCleanup/.test(source.match(/from 'solid-js'/)?.[0] ?? '')) {
    needs.push('onCleanup');
  }
  if (/\bcreateEffect\b/.test(source) && !source.includes('createEffect')) needs.push('createEffect');
  if (needs.length) {
    const importMatch = source.match(/import\s*\{([^}]+)\}\s*from\s*'solid-js';/);
    if (importMatch) {
      const names = new Set(importMatch[1].split(',').map((s) => s.trim()).filter(Boolean));
      needs.forEach((n) => names.add(n));
      source = source.replace(
        /import\s*\{[^}]+\}\s*from\s*'solid-js';/,
        `import { ${[...names].sort().join(', ')} } from 'solid-js';`,
      );
    } else if (needs.length) {
      source = `import { ${needs.sort().join(', ')} } from 'solid-js';\n${source}`;
    }
  }

  if (source !== original) fs.writeFileSync(file, source);
}

for (const file of walk(ROOT)) fixFile(file);
console.log('Post-fix complete');
