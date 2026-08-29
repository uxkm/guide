#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else if (filePath.endsWith('.tsx')) patch(filePath);
  }
}

function patch(filePath) {
  let source = fs.readFileSync(filePath, 'utf8');
  const original = source;

  source = source.replace(/\.value\.value/g, '.value');
  source = source.replace(/\.value\s*=\s*\((\w+)\s*=>\s*!?\1\)/g, '.value = !$1.value');
  source = source.replace(/\.value\s*=\s*\((\w+)\s*=>\s*([^)]+)\)/g, '.value = $2');
  source = source.replace(/const updateVisualState = useCallback\(\(\) => \{/g, 'const updateVisualState = () => {');
  source = source.replace(/\buseCallback\(\(/g, '(');
  source = source.replace(/\buseEffect\(\(\)\s*=>/g, 'useVisibleTask$(({ track }) =>');
  source = source.replace(/\buseMemo\(\s*\(\)\s*=>\s*/g, '(');
  source = source.replace(/,\s*\[[^\]]*\]\s*\)\s*;/g, ');');

  if (source !== original) fs.writeFileSync(filePath, source);
}

walk(path.resolve('apps/qwik/src/components'));
console.log('Applied Qwik signal and hook cleanups');
