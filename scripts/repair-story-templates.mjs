#!/usr/bin/env node
/**
 * docs.source.code의 전체 마크업으로 잘린 render template 복구
 * (슬롯 <template> 포함 시 fix-story-controls 정규식 등으로 잘린 경우)
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { formatDemoHtml } from '../packages/ui/src/utils/format-demo-html.js';

const componentsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../packages/ui/src/components',
);

function escapeTemplate(content) {
  return content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function extractMarkupFromVueSource(vueSource) {
  const templateStart = vueSource.indexOf('<template>');
  const templateEnd = vueSource.lastIndexOf('</template>');
  if (templateStart === -1 || templateEnd === -1 || templateEnd <= templateStart) {
    return null;
  }
  return formatDemoHtml(vueSource.slice(templateStart + '<template>'.length, templateEnd).trim());
}

function formatRenderTemplate(markup) {
  return markup
    .split('\n')
    .map((line) => (line.trim() ? `        ${line.trim()}` : ''))
    .join('\n');
}

function isTruncated(template) {
  const openTemplate = (template.match(/<template\b/g) || []).length;
  const closeTemplate = (template.match(/<\/template>/g) || []).length;
  if (openTemplate > closeTemplate) return true;

  for (const tag of [
    'Button',
    'div',
    'MenuItem',
    'MenuSubmenu',
    'Input',
    'Tooltip',
    'Popover',
    'Dropdown',
    'Modal',
    'Drawer',
    'Link',
    'Icon',
    'Card',
    'NavbarItem',
    'NavbarList',
    'CollapsePanel',
    'AccordionItem',
    'ListItem',
    'TimelineItem',
    'TreeNode',
    'TabPanel',
    'CalendarHeader',
    'CalendarWeekdays',
  ]) {
    const open = (template.match(new RegExp(`<${tag}\\b`, 'g')) || []).length;
    const close = (template.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    const self = (template.match(new RegExp(`<${tag}\\b[^>]*/>`, 'g')) || []).length;
    if (open > close + self) return true;
  }

  return false;
}

function parseSourceCode(sourceRaw) {
  if (sourceRaw.startsWith('"') || sourceRaw.startsWith("'")) {
    return JSON.parse(sourceRaw.replace(/^'/, '"').replace(/'$/, '"'));
  }
  if (sourceRaw.startsWith('`')) {
    return sourceRaw.slice(1, -1).replace(/\\`/g, '`').replace(/\\\$\{/g, '${').replace(/\\\\/g, '\\');
  }
  return null;
}

function repairFile(filePath) {
  let content = readFileSync(filePath, 'utf8');
  let fixed = 0;

  // 고아 `;` 제거 (export 사이)
  const withoutLoneSemi = content.replace(/\n;\n+/g, '\n\n');
  if (withoutLoneSemi !== content) {
    content = withoutLoneSemi;
    fixed += 1;
  }

  const storyRegex = /export const (\w+) = \{([\s\S]*?)\n\};/g;

  content = content.replace(storyRegex, (fullMatch, exportName, storyBody) => {
    const sourceMatch = storyBody.match(
      /code:\s*(("(?:\\.|[^"\\])*")|(`(?:\\`|[^`])*`))/,
    );
    const templateMatch = storyBody.match(
      /render:\s*withDocsCanvasRender\(\(\)\s*=>\s*\(\{[\s\S]*?template:\s*`([\s\S]*?)`,\s*\n\s*\}\)\),/,
    );

    if (!sourceMatch || !templateMatch) return fullMatch;

    let sourceCode;
    try {
      sourceCode = parseSourceCode(sourceMatch[1]);
    } catch {
      return fullMatch;
    }
    if (!sourceCode) return fullMatch;

    const currentTemplate = templateMatch[1];
    if (!isTruncated(currentTemplate)) return fullMatch;

    const markup = extractMarkupFromVueSource(sourceCode);
    if (!markup) return fullMatch;

    const newTemplate = escapeTemplate(formatRenderTemplate(markup));
    const newStoryBody = storyBody.replace(
      /(render:\s*withDocsCanvasRender\(\(\)\s*=>\s*\(\{[\s\S]*?template:\s*)`[\s\S]*?`,(\s*\n\s*\}\)\),)/,
      `$1\`${newTemplate}\`,$2`,
    );

    if (newStoryBody === storyBody) return fullMatch;

    fixed += 1;
    return `export const ${exportName} = {${newStoryBody}\n};`;
  });

  if (fixed > 0) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${path.basename(filePath)} — ${fixed}건`);
  }

  return fixed;
}

const skip = new Set([
  // 이미 Popover/Modal/Drawer/Tooltip 패턴으로 수동 복구한 파일
  'Modal.stories.js',
  'Drawer.stories.js',
  'Popover.stories.js',
  'Tooltip.stories.js',
]);

const files = readdirSync(componentsDir)
  .filter((f) => f.endsWith('.stories.js') && !skip.has(f))
  .sort();

let total = 0;
for (const file of files) {
  total += repairFile(path.join(componentsDir, file));
}

console.log(total ? `\n총 ${total}건 복구 완료` : '\n복구할 항목 없음');
