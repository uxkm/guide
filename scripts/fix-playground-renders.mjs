#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const storiesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../packages/ui/src/components');

const COMPLEX_RENDERS = {
  'Affix.stories.js': {
    components: ['Affix', 'Button'],
    template: `(args) => ({
    components: { Affix, Button },
    setup() { return { args }; },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-playground" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>스크롤하면 상단에 고정됩니다.</p>
          <Affix v-bind="args" target="#affix-scroll-playground" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024</span>
            <div class="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>추가 콘텐츠 — 스크롤해 보세요.</p>
          <p>배송지 · 결제 수단 · 상품 정보</p>
          <p>교환·반품 안내</p>
        </div>
      </div>
    </div>\`,
  })`,
  },
  'BackTop.stories.js': {
    components: ['BackTop'],
    template: `(args) => ({
    components: { BackTop },
    setup() { return { args }; },
    template: \`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-playground">
        <div class="back_top_demo-content">
          <p>아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
          <p>상품 설명 · 리뷰 · 배송 안내</p>
          <p>교환·반품 · 문의처</p>
        </div>
      </div>
      <BackTop v-bind="args" target="#back-top-scroll-playground" :visibility-height="80" />
    </div>\`,
  })`,
  },
  'Calendar.stories.js': {
    components: ['Calendar', 'CalendarHeader', 'CalendarMonth', 'CalendarWeekdays'],
    template: `(args) => ({
    components: { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays },
    setup() { return { args }; },
    template: \`<Calendar v-bind="args" aria-label="2024년 6월">
      <template #header>
        <CalendarHeader title="2024년 6월" />
      </template>
      <template #weekdays>
        <CalendarWeekdays />
      </template>
      <CalendarMonth />
    </Calendar>\`,
  })`,
  },
  'Container.stories.js': {
    components: ['Container'],
    template: `(args) => ({
    components: { Container },
    setup() { return { args }; },
    template: '<Container v-bind="args"><div class="container_demo-fill">container</div></Container>',
  })`,
  },
  'Grid.stories.js': {
    components: ['Grid'],
    template: `(args) => ({
    components: { Grid },
    setup() { return { args }; },
    template: \`<Grid v-bind="args">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">3</div>
    </Grid>\`,
  })`,
  },
  'Space.stories.js': {
    components: ['Space'],
    template: `(args) => ({
    components: { Space },
    setup() { return { args }; },
    template: \`<Space v-bind="args">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </Space>\`,
  })`,
  },
};

function getMainComponent(content) {
  const match = content.match(/^\s*component:\s*(\w+)/m);
  return match?.[1] ?? null;
}

function removeSubcomponents(content) {
  return content.replace(/\n\s*subcomponents:\s*\{[^}]+\},?/g, '');
}

function findPlaygroundBlock(content) {
  const start = content.indexOf('export const Playground = {');
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = start + 'export const Playground = '.length; i < content.length; i++) {
    const ch = content[i];
    if (inString) {
      if (ch === stringChar && content[i - 1] !== '\\') inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '{') depth += 1;
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        return { start, end: i + 1, block: content.slice(start, i + 1) };
      }
    }
  }
  return null;
}

function addRender(content, fileName, componentName) {
  const pg = findPlaygroundBlock(content);
  if (!pg) return { content, changed: false };
  if (pg.block.includes('render:')) return { content, changed: false };

  const complex = COMPLEX_RENDERS[fileName];
  const renderFn = complex
    ? `  render: ${complex.template},`
    : `  render: (args) => ({
    components: { ${componentName} },
    setup() {
      return { args };
    },
    template: '<${componentName} v-bind="args" />',
  }),`;

  const newBlock = pg.block.replace(/,?\s*\n\}$/, `,
${renderFn}
}`);
  return {
    content: content.slice(0, pg.start) + newBlock + content.slice(pg.end),
    changed: true,
  };
}

let subRemoved = 0;
let renderAdded = 0;

for (const file of readdirSync(storiesDir).filter((f) => f.endsWith('.stories.js'))) {
  const filePath = path.join(storiesDir, file);
  let content = readFileSync(filePath, 'utf8');
  const before = content;

  content = removeSubcomponents(content);
  if (content !== before) subRemoved += 1;

  const componentName = getMainComponent(content);
  if (!componentName) continue;

  const result = addRender(content, file, componentName);
  content = result.content;
  if (result.changed) renderAdded += 1;

  if (content !== before) {
    writeFileSync(filePath, content);
    console.log(`updated ${file}`);
  }
}

console.log(`\nRemoved subcomponents from ${subRemoved} files`);
console.log(`Added Playground render to ${renderAdded} files`);
