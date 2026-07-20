#!/usr/bin/env node
/**
 * Playground·Canvas render — storyArgsRef(context) 바인딩으로 일괄 수정
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const storiesDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../packages/ui/src/components',
);

function ensureStoryArgsRefImport(content) {
  if (/import\s*\{[^}]*\bstoryArgsRef\b[^}]*\}\s*from\s*'@\/storybook\/story-renders\.js';/.test(content)) {
    return content;
  }

  const importMatch = content.match(
    /import\s*\{([^}]+)\}\s*from\s*'@\/storybook\/story-renders\.js';/,
  );
  if (importMatch) {
    const names = importMatch[1]
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean);
    if (!names.includes('storyArgsRef')) {
      names.push('storyArgsRef');
      const nextImport = `import { ${names.join(', ')} } from '@/storybook/story-renders.js';`;
      return content.replace(importMatch[0], nextImport);
    }
    return content;
  }

  const firstImport = content.indexOf('import ');
  if (firstImport === -1) {
    return `import { storyArgsRef } from '@/storybook/story-renders.js';\n${content}`;
  }
  return `${content.slice(0, firstImport)}import { storyArgsRef } from '@/storybook/story-renders.js';\n${content.slice(firstImport)}`;
}

function fixContent(content) {
  let next = content;

  next = next.replace(
    /return\s*\{\s*args:\s*context\.args\s*\};/g,
    'return { args: storyArgsRef(context) };',
  );

  next = next.replace(
    /return\s*\{\s*args:\s*context\.args,/g,
    'return { args: storyArgsRef(context),',
  );

  if (next.includes('storyArgsRef(context)')) {
    next = ensureStoryArgsRefImport(next);
  }

  return next;
}

let changed = 0;

for (const file of readdirSync(storiesDir).filter((f) => f.endsWith('.stories.js'))) {
  const filePath = path.join(storiesDir, file);
  const before = readFileSync(filePath, 'utf8');
  const after = fixContent(before);
  if (after !== before) {
    writeFileSync(filePath, after);
    changed += 1;
    console.log(`fixed ${file}`);
  }
}

console.log(`\nUpdated ${changed} story files`);
