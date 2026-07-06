import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const tokensPath = path.join(ROOT, 'src/scss/_tokens.scss');
const utilitiesPath = path.join(ROOT, 'src/scss/_utilities.scss');
const componentsDir = path.join(ROOT, 'src/scss/components');

const content = fs.readFileSync(tokensPath, 'utf8');

// Parse sections by "// ----- ..." comments
const lines = content.split('\n');
const sections = [];
let current = null;

for (const line of lines) {
  const match = line.match(/^  \/\/ ----- (.+)$/);
  if (match) {
    if (current) sections.push(current);
    current = { title: match[1], lines: [line] };
  } else if (current) {
    current.lines.push(line);
  }
}
if (current) sections.push(current);

const COMMON_PREFIXES = [
  'Global — spacing',
  'Global — radius',
  'Global — motion',
  'Global — ripple',
  'Global — focus',
  'Global — layout',
  'Global — text size',
];

const UTILITY_PREFIXES = ['Container', 'Grid', 'Divider', 'Space'];

const SECTION_TO_FILE = {
  Button: 'button',
  Icon: 'icon',
  Input: 'input',
  Select: 'select',
  'Date Picker': 'date-picker',
  Textarea: 'textarea',
  'Form layout': 'form-layout',
  Checkbox: 'checkbox',
  Radio: 'radio',
  Switch: 'switch',
  Slider: 'slider',
  Rate: 'rate',
  'Typography — title': 'typography',
  'Typography — text': 'typography',
  Link: 'link',
  Navbar: 'navbar',
  Menu: 'menu',
  Dropdown: 'dropdown',
  'Popover — structure': 'popover',
  'Popover — size sm · lg': 'popover',
  'Tooltip — structure': 'tooltip',
  'Tooltip — size sm · lg': 'tooltip',
  'Tabs — structure': 'tabs',
  'Tabs — size sm · lg': 'tabs',
  'Accordion — structure': 'accordion',
  'Accordion — size sm · lg': 'accordion',
  'Collapse — structure': 'collapse',
  'Collapse — size sm · lg': 'collapse',
  Modal: 'modal',
  Drawer: 'drawer',
  Affix: 'affix',
  'Back Top': 'back-top',
  Avatar: 'avatar',
  'Badge — structure': 'badge',
  'Badge — size sm · lg': 'badge',
  'Badge — dot · count': 'badge',
  'Alert — structure': 'alert',
  'Alert — size sm · lg': 'alert',
  'Tag — structure': 'tag',
  'Tag — size sm · lg': 'tag',
  Breadcrumb: 'breadcrumb',
  Carousel: 'carousel',
  Pagination: 'pagination',
  Card: 'card',
  Table: 'table',
  List: 'list',
  Stat: 'stat',
  Calendar: 'calendar',
  'Calendar agenda': 'calendar',
  Timeline: 'timeline',
  Upload: 'upload',
  Steps: 'steps',
  'Steps size': 'steps',
  Progress: 'progress',
  Spin: 'spin',
  Skeleton: 'skeleton',
  Empty: 'empty',
  Tree: 'tree',
};

function matchSection(title) {
  if (COMMON_PREFIXES.some((p) => title.startsWith(p) || title === p)) return 'common';
  if (UTILITY_PREFIXES.includes(title)) return 'utility';
  for (const [key, file] of Object.entries(SECTION_TO_FILE)) {
    if (title === key || title.startsWith(key)) return file;
  }
  // Button sub-sections
  if (title.startsWith('Button')) return 'button';
  return null;
}

const commonLines = [];
const utilityLines = [];
const componentTokens = {};

for (const section of sections) {
  const target = matchSection(section.title);
  if (!target) {
    console.warn('Unmapped section:', section.title);
    continue;
  }
  const body = section.lines.join('\n');
  if (target === 'common') {
    commonLines.push(body);
  } else if (target === 'utility') {
    utilityLines.push(body);
  } else {
    if (!componentTokens[target]) componentTokens[target] = [];
    componentTokens[target].push(body);
  }
}

// Write new _tokens.scss
const newTokens = `// =============================================================================
// Design tokens — :root CSS 변수 (공통)
// =============================================================================
// 색상(테마) → _themes.scss · SCSS 전용(브레이크포인트 등) → _variables.scss
// 컴포넌트별 토큰 → components/_*.scss
// 유틸리티 레이아웃 토큰 → _utilities.scss
// =============================================================================

:root {
${commonLines.join('\n\n')}
}
`;

fs.writeFileSync(tokensPath, newTokens);

// Prepend tokens to component scss files
for (const [file, sectionBlocks] of Object.entries(componentTokens)) {
  const filePath = path.join(componentsDir, `_${file}.scss`);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing component file:', filePath);
    continue;
  }
  let scss = fs.readFileSync(filePath, 'utf8');
  // Remove existing :root block if re-running (@use must stay first)
  scss = scss.replace(/:root\s*\{[\s\S]*?\n\}\n?/g, '');
  scss = scss.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
  const tokenBlock = `:root {\n${sectionBlocks.join('\n\n')}\n}\n`;
  const lines = scss.split('\n');
  const useLines = [];
  let i = 0;
  while (i < lines.length && /^@use\s/.test(lines[i])) {
    useLines.push(lines[i]);
    i++;
  }
  const rest = lines.slice(i).join('\n').replace(/^\n+/, '');
  const result = useLines.length
    ? `${useLines.join('\n')}\n\n${tokenBlock}\n${rest}`
    : `${tokenBlock}\n${rest}`;
  fs.writeFileSync(filePath, result.endsWith('\n') ? result : result + '\n');
}

// Add utility tokens to _utilities.scss
let utilities = fs.readFileSync(utilitiesPath, 'utf8');
utilities = utilities.replace(/^:root\s*\{[\s\S]*?\}\n\n?/, '');
const utilityBlock = `:root {\n${utilityLines.join('\n\n')}\n}\n\n`;
const insertAfter = utilities.indexOf('// =============================================================================\n// Utilities');
if (insertAfter === -1) {
  fs.writeFileSync(utilitiesPath, utilityBlock + utilities);
} else {
  const headerEnd = utilities.indexOf('\n', utilities.indexOf('// =============================================================================', insertAfter + 10));
  const afterHeader = utilities.indexOf('\n\n', headerEnd);
  fs.writeFileSync(
    utilitiesPath,
    utilities.slice(0, afterHeader + 2) + utilityBlock + utilities.slice(afterHeader + 2)
  );
}

console.log('Done. Common sections:', commonLines.length);
console.log('Utility sections:', utilityLines.length);
console.log('Component files updated:', Object.keys(componentTokens).length);
