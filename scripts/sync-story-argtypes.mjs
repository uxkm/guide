#!/usr/bin/env node
/**
 * Storybook stories argTypes 동기화
 * - API 문서의 union 타입
 * - Vue 컴포넌트 validator
 * - 공통 enum 프리셋
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const storiesDir = path.join(root, 'packages/ui/src/components');
const apiDir = path.join(root, 'apps/guide/src/doc/data');
const componentsDir = storiesDir;

const COLOR_SURFACE = ['default', 'primary', 'success', 'warning', 'danger', 'info'];
const COLOR_BUTTON = ['primary', 'default', 'success', 'warning', 'danger', 'muted'];
const COLOR_STATUS = ['success', 'warning', 'danger'];
const COLOR_LINK = ['primary', 'muted', 'success', 'warning', 'danger'];
const COLOR_ALERT = ['info', 'success', 'warning', 'danger'];
const COLOR_PROGRESS = ['primary', 'success', 'warning', 'danger'];
const COLOR_BACK_TOP = ['', 'primary', 'ghost'];
const PLACEMENT_POPOVER = ['top', 'top-center', 'bottom-center', 'left', 'right', 'end'];
const PLACEMENT_TOOLTIP = ['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end'];
const PLACEMENT_DROPDOWN = ['end', 'top'];
const OFFSET_SIZES = ['none', 'sm', 'md', 'lg'];
const PANEL_ALIGNS = ['start', 'center', 'end'];
const SPACE_ALIGNS = ['start', 'center', 'end', 'baseline', 'stretch'];
const SPACE_JUSTIFY = ['start', 'center', 'end', 'between'];
const INPUT_TYPES = ['text', 'email', 'password', 'number', 'tel', 'url', 'search'];
const TYPO_VARIANTS = [
  'text', 'paragraph', 'lead', 'caption', 'label', 'overline', 'code', 'kbd', 'pre',
  'strong', 'italic', 'underline', 'delete', 'mark', 'sub', 'sup', 'small', 'link', 'blockquote',
];
const GRID_RATIOS = ['1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'];
const CAROUSEL_EFFECTS = ['', 'fade'];
const FORM_TAGS = ['form', 'div'];
const CARD_TAGS = ['article', 'section', 'div'];
const TIMELINE_TAGS = ['ol', 'ul'];
const LIST_INLINE_GAPS = ['sm', 'md', 'lg'];
const LIST_INLINE_LABEL_WIDTHS = ['sm', 'md', 'lg', '8rem', '10rem', '12rem'];

const TEXT_PROPS = new Set([
  'src', 'alt', 'label', 'title', 'description', 'href', 'placeholder', 'arialabel',
  'id', 'name', 'value', 'content', 'legend', 'brand', 'target', 'role', 'haspopup',
  'inputid', 'panellabel', 'closelabel', 'sublabel', 'subtitle', 'meta', 'togglelabel',
  'prevlabel', 'nextlabel', 'cancellabel', 'confirmlabel', 'extracode', 'submenuid',
  'collapseid', 'modelvalue', 'valuesuffix', 'hint', 'decreaselabel', 'increaselabel',
  'cite', 'count', 'prefix', 'suffix', 'trend', 'datetime', 'time', 'labeldatetime',
]);

const COMPONENT_PRESETS = {
  Button: { color: COLOR_BUTTON, type: ['button', 'submit', 'reset'] },
  Link: { color: COLOR_LINK },
  Alert: { color: COLOR_ALERT },
  Progress: { color: COLOR_PROGRESS },
  ProgressCircle: { color: COLOR_PROGRESS },
  Spin: { color: COLOR_PROGRESS },
  BackTop: { color: COLOR_BACK_TOP },
  Popover: { placement: PLACEMENT_POPOVER, offset: OFFSET_SIZES, panelAlign: PANEL_ALIGNS },
  Tooltip: { placement: PLACEMENT_TOOLTIP, offset: OFFSET_SIZES, panelAlign: PANEL_ALIGNS },
  Dropdown: { placement: PLACEMENT_DROPDOWN },
  FormLayout: { tag: FORM_TAGS },
  Card: { tag: CARD_TAGS },
  Timeline: { tag: TIMELINE_TAGS },
  TypoText: { variant: TYPO_VARIANTS },
  Typography: { level: ['1', '2', '3', '4', '5'], color: COLOR_SURFACE },
  Space: { align: SPACE_ALIGNS, justify: SPACE_JUSTIFY },
  Grid: { ratio: GRID_RATIOS, gap: ['sm', 'lg', 'none'] },
  List: { inlineGap: LIST_INLINE_GAPS, inlineLabelWidth: LIST_INLINE_LABEL_WIDTHS },
  Carousel: { effect: CAROUSEL_EFFECTS },
  Input: { type: INPUT_TYPES },
  Avatar: { color: COLOR_SURFACE, badgeColor: COLOR_STATUS },
  Badge: { color: COLOR_SURFACE },
  Tag: { color: COLOR_SURFACE },
  Icon: { color: COLOR_SURFACE },
  Spin: { color: COLOR_PROGRESS },
  MenuItem: { color: COLOR_SURFACE },
  TimelineItem: { color: COLOR_SURFACE },
  Stat: { trendColor: COLOR_STATUS },
  TypoTitle: { color: COLOR_SURFACE },
};

function toKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function toCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function parseUnionType(type) {
  if (!type || typeof type !== 'string') return null;
  const trimmed = type.trim();
  if (['string', 'boolean', 'number'].includes(trimmed)) return null;

  const quoted = [...trimmed.matchAll(/'([^']*)'/g)].map((m) => m[1]);
  if (quoted.length >= 2) return [...new Set(quoted)];

  if (/^[\d\s|]+$/.test(trimmed)) {
    const nums = trimmed.split('|').map((s) => s.trim()).filter(Boolean);
    if (nums.length >= 2) return nums;
  }

  return null;
}

function enumSummary(options) {
  return options.map((o) => `'${o}'`).join(' | ');
}

function formatArgType(options, summary = enumSummary(options)) {
  const opts = JSON.stringify(options);
  return `{ control: 'select', options: ${opts}, type: { name: 'enum', summary: ${JSON.stringify(summary)} } }`;
}

function parseApiProps(apiContent) {
  const map = new Map();
  const propBlocks = apiContent.matchAll(
    /\{\s*name:\s*'([^']+)'[^}]*?type:\s*(`[^`]+`|'[^']*'|\d[^,}]*)/gs,
  );
  for (const match of propBlocks) {
    const name = toCamel(match[1]);
    let typeRaw = match[2].trim();
    if (typeRaw.startsWith('`')) typeRaw = typeRaw.slice(1, -1);
    if (typeRaw.startsWith("'") && typeRaw.endsWith("'")) typeRaw = typeRaw.slice(1, -1);
    const options = parseUnionType(typeRaw);
    if (options) map.set(name, options);
  }
  return map;
}

function loadAllApiProps() {
  const files = readdirSync(apiDir).filter((f) => f.endsWith('-api.js'));
  const byFile = new Map();
  for (const file of files) {
    const content = readFileSync(path.join(apiDir, file), 'utf8');
    byFile.set(file.replace('-api.js', ''), parseApiProps(content));
  }
  return byFile;
}

function parseVueValidators(componentName) {
  const vuePath = path.join(componentsDir, `${componentName}.vue`);
  if (!existsSync(vuePath)) return new Map();
  const content = readFileSync(vuePath, 'utf8');
  const map = new Map();
  const propBlocks = content.matchAll(
    /(\w+):\s*\{[^}]*?validator:\s*\([^)]*\)\s*=>\s*\[([^\]]+)\]/gs,
  );
  for (const [, prop, arr] of propBlocks) {
    const options = [...arr.matchAll(/'([^']*)'/g)].map((m) => m[1]);
    if (options.length >= 2) map.set(prop, options);
  }
  return map;
}

function resolveApiKey(componentName) {
  const base = componentName.replace(
    /(Item|Panel|Slide|Col|Node|Group|Wrap|External|Footer|Header|Body|Month|Day|Grid|Nav|Weekdays|Wheel|WheelColumn|Tab|Submenu|Divider)$/,
    '',
  );
  return [...new Set([toKebab(componentName), toKebab(base), base ? toKebab(base) : null].filter(Boolean))];
}

function getPropOptions(componentName, propName, apiMaps) {
  if (COMPONENT_PRESETS[componentName]?.[propName]) {
    return COMPONENT_PRESETS[componentName][propName];
  }

  const vueValidators = parseVueValidators(componentName);
  if (vueValidators.has(propName)) return vueValidators.get(propName);

  for (const key of resolveApiKey(componentName)) {
    const apiMap = apiMaps.get(key);
    if (apiMap?.has(propName)) return apiMap.get(propName);
  }

  if (propName === 'color' || propName === 'badgeColor' || propName === 'trendColor') {
    return COLOR_SURFACE;
  }
  if (propName === 'placement') return PLACEMENT_POPOVER;
  if (propName === 'offset') return OFFSET_SIZES;
  if (propName === 'panelAlign') return PANEL_ALIGNS;
  if (propName === 'align') return SPACE_ALIGNS;
  if (propName === 'justify') return SPACE_JUSTIFY;

  return null;
}

function updateArgTypeLine(line, componentName, apiMaps) {
  const match = line.match(/^(\s+)(\w+):\s*\{(.+)\},?\s*$/);
  if (!match) return { line, updated: false };

  const [, indent, propName, body] = match;
  const propKey = propName.toLowerCase();
  if (TEXT_PROPS.has(propKey)) return { line, updated: false };
  if (body.includes("control: 'select'")) return { line, updated: false };
  if (body.includes("control: 'boolean'")) return { line, updated: false };
  if (body.includes("control: 'number'")) return { line, updated: false };
  if (body.includes("control: 'range'")) return { line, updated: false };
  if (!body.includes("control: 'text'")) return { line, updated: false };

  const options = getPropOptions(componentName, propName, apiMaps);
  if (!options || options.length < 2) return { line, updated: false };

  return {
    line: `${indent}${propName}: ${formatArgType(options)},`,
    updated: true,
  };
}

function updateStoriesFile(filePath, apiMaps) {
  const fileName = path.basename(filePath);
  const componentName = fileName.replace('.stories.js', '');
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let inArgTypes = false;
  let updated = 0;

  const newLines = lines.map((line) => {
    if (/^\s+argTypes:\s*\{/.test(line)) {
      inArgTypes = true;
      return line;
    }
    if (inArgTypes && /^\s+\},/.test(line) && !line.includes('control:')) {
      inArgTypes = false;
      return line;
    }
    if (!inArgTypes) return line;

    const result = updateArgTypeLine(line, componentName, apiMaps);
    if (result.updated) updated += 1;
    return result.line;
  });

  if (updated > 0) {
    writeFileSync(filePath, newLines.join('\n'));
  }

  return { file: fileName, updated };
}

const apiMaps = loadAllApiProps();
const storyFiles = readdirSync(storiesDir).filter((f) => f.endsWith('.stories.js'));
const results = storyFiles.map((f) => updateStoriesFile(path.join(storiesDir, f), apiMaps));
const changed = results.filter((r) => r.updated > 0);

console.log(`Updated ${changed.length} files, ${changed.reduce((s, r) => s + r.updated, 0)} argTypes`);
for (const r of changed.sort((a, b) => b.updated - a.updated)) {
  console.log(`  ${r.file}: ${r.updated}`);
}
