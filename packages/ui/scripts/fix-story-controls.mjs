/**
 * render: () => 정적 스토리에 args + withDocsCanvasRender 적용
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '../src/components');
const skipFiles = new Set(['Container.stories.js', 'Divider.stories.js']);

function parseArgsObject(argsSource) {
  const sanitized = argsSource.replace(/:\s*([a-zA-Z_$][\w$]*)\s*(,|\})/g, ': undefined$2');
  try {
    // eslint-disable-next-line no-new-func
    return Function(`return (${sanitized})`)();
  } catch {
    return null;
  }
}

function extractDefaultArgs(content) {
  const playgroundMatch = content.match(
    /export const Playground = \{[\s\S]*?args:\s*(\{[\s\S]*?\}),\s*\n\s*render:/,
  );
  if (playgroundMatch) {
    return parseArgsObject(playgroundMatch[1]);
  }

  const metaMatch = content.match(/export default \{[\s\S]*?\n\s*args:\s*(\{[\s\S]*?\}),/);
  if (metaMatch) {
    return parseArgsObject(metaMatch[1]);
  }

  return {};
}

function extractComponentName(content) {
  const metaMatch = content.match(/component:\s*(\w+)/);
  if (metaMatch) return metaMatch[1];

  const importMatch = content.match(/^import (\w+) from '\.\/(\w+)\.vue';/m);
  return importMatch?.[1] ?? null;
}

function transformFile(filePath) {
  const fileName = path.basename(filePath);
  if (skipFiles.has(fileName)) return { fileName, changed: false, reason: 'skipped' };

  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('render: () =>')) {
    return { fileName, changed: false, reason: 'no static render' };
  }

  const componentName = extractComponentName(content);
  if (!componentName) {
    return { fileName, changed: false, reason: 'no component import' };
  }

  const defaultArgs = extractDefaultArgs(content);

  if (!content.includes("from '@/storybook/story-renders.js'")) {
    const firstImportEnd = content.indexOf(';\n') + 2;
    content =
      content.slice(0, firstImportEnd) +
      "import { bindComponent, withDocsCanvasRender } from '@/storybook/story-renders.js';\n" +
      content.slice(firstImportEnd);
  }

  const argsStr = JSON.stringify(defaultArgs, null, 2).replace(/"([^"]+)":/g, '$1:');

  const storyStartRegex = /export const (?!Playground)(\w+) = \{/g;
  let replaced = 0;
  let match;

  while ((match = storyStartRegex.exec(content)) !== null) {
    const name = match[1];
    const storyStart = match.index;
    const bodyStart = match.index + match[0].length;

    const renderIdx = content.indexOf('  render: () => ({', bodyStart);
    if (renderIdx === -1) continue;

    const storyEnd = content.indexOf('\n};', renderIdx);
    if (storyEnd === -1) continue;

    const before = content.slice(bodyStart, renderIdx);
    if (before.includes('\n  args:')) continue;

    const renderOpen = renderIdx + '  render: () => ({'.length;
    let depth = 1;
    let i = renderOpen;
    let inString = false;
    let stringChar = '';

    for (; i < content.length; i += 1) {
      const ch = content[i];
      if (inString) {
        if (ch === '\\') {
          i += 1;
          continue;
        }
        if (ch === stringChar) inString = false;
        continue;
      }
      if (ch === '`' || ch === '"' || ch === "'") {
        inString = true;
        stringChar = ch;
        continue;
      }
      if (ch === '{') depth += 1;
      if (ch === '}') {
        depth -= 1;
        if (depth === 0) break;
      }
    }

    if (depth !== 0) continue;

    const renderBody = content.slice(renderOpen, i);
    const end = content.slice(i, storyEnd + 3);
    const replacement = `export const ${name} = {${before}  args: ${argsStr},
  render: withDocsCanvasRender(() => ({${renderBody}}), bindComponent(${componentName})),${end}`;

    content = content.slice(0, storyStart) + replacement + content.slice(storyEnd + 3);
    replaced += 1;
    storyStartRegex.lastIndex = storyStart + replacement.length;
  }

  if (replaced === 0) {
    return { fileName, changed: false, reason: 'no stories matched' };
  }

  fs.writeFileSync(filePath, content);
  return { fileName, changed: true, replaced };
}

const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.stories.js'));
const results = files.map((f) => transformFile(path.join(componentsDir, f)));

const changed = results.filter((r) => r.changed);
console.log(`Fixed: ${changed.length}`);
changed.forEach((r) => console.log(`  ✓ ${r.fileName} (${r.replaced} stories)`));

const remaining = files.filter((f) => {
  const c = fs.readFileSync(path.join(componentsDir, f), 'utf8');
  return c.includes('render: () =>');
});
if (remaining.length) {
  console.log(`Still static: ${remaining.length}`);
  remaining.forEach((f) => console.log(`  ! ${f}`));
} else {
  console.log('All stories updated.');
}
