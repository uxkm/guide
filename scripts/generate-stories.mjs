#!/usr/bin/env node
/**
 * packages/ui 컴포넌트용 Storybook 스토리 일괄 생성
 * 사용: node scripts/generate-stories.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getStoryTitle, getStoryId } from '../packages/ui/src/data/component-groups.js';
import { buildDocStorySource, loadAllDocDemos, buildStoryVueSourceCode } from './lib/extract-doc-demos.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(__dirname, '../packages/ui/src/components');
const docDir = path.resolve(__dirname, '../apps/guide/src/doc/components');
const docByComponent = loadAllDocDemos(docDir);

import { buildArgTypes, buildArgs, formatArgs, parseProps } from './lib/story-props.mjs';

/** 부모 컴포넌트 스토리에서만 다루는 자식 — 독립 스토리 생성 제외 */
const SKIP_STORIES = new Set([
  'CarouselSlide',
  'CollapsePanel',
  'CollapseExternal',
  'AccordionItem',
  // Typography 문서로 통합
  'TypoText',
  'TypoTitle',
  // Avatar 문서로 통합
  'AvatarGroup',
  // Badge 문서로 통합
  'BadgeWrap',
  // Card 문서로 통합
  'CardHeader',
  'CardBody',
  'CardFooter',
  // List 문서로 통합
  'ListItem',
  // Calendar 문서로 통합
  'CalendarDay',
  'CalendarFooter',
  'CalendarGrid',
  'CalendarGroup',
  'CalendarHeader',
  'CalendarMonth',
  'CalendarNav',
  'CalendarWeekdays',
  'CalendarWheel',
  'CalendarWheelColumn',
  // intro 전용 — 독립 스토리 제외
  'CategoryCard',
  // Tag 문서로 통합
  'TagGroup',
  // Timeline 문서로 통합
  'TimelineItem',
  // Tree 문서로 통합
  'TreeNode',
  // Navbar 문서로 통합
  'NavbarItem',
  'NavbarList',
  // Menu 문서로 통합
  'MenuItem',
  'MenuGroup',
  'MenuDivider',
  'MenuSubmenu',
  // Tabs 문서로 통합
  'TabsTab',
  'TabPanel',
  'TabMenu',
  // Breadcrumb 문서로 통합
  'BreadcrumbItem',
  // Steps 문서로 통합
  'StepsItem',
  // Progress 문서로 통합
  'ProgressCircle',
  // Spin 문서로 통합
  'SpinWrap',
]);

function walkVueFiles(dir, base = '') {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const rel = base ? `${base}/${entry}` : entry;
    if (statSync(full).isDirectory()) {
      files.push(...walkVueFiles(full, rel));
    } else if (entry.endsWith('.vue')) {
      files.push({ full, rel, name: entry.replace(/\.vue$/, '') });
    }
  }
  return files;
}

function pascalToTitle(name) {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2');
}

/** 컴포지션 컴포넌트 — render 템플릿 */
const CUSTOM_RENDER = {
  Accordion: {
    imports: ["import AccordionItem from './AccordionItem.vue';"],
    template: `
      <Accordion>
        <AccordionItem label="섹션 1" content="첫 번째 패널 내용" />
        <AccordionItem label="섹션 2" content="두 번째 패널 내용" />
      </Accordion>`,
    components: ['AccordionItem'],
  },
  Breadcrumb: {
    imports: ["import BreadcrumbItem from './BreadcrumbItem.vue';"],
    template: `
      <Breadcrumb>
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="컴포넌트" href="#" />
        <BreadcrumbItem label="현재" current />
      </Breadcrumb>`,
    components: ['BreadcrumbItem'],
  },
  Tabs: {
    imports: ["import TabPanel from './TabPanel.vue';"],
    template: `
      <Tabs>
        <TabPanel label="탭 1" active>첫 번째 탭 내용</TabPanel>
        <TabPanel label="탭 2">두 번째 탭 내용</TabPanel>
      </Tabs>`,
    components: ['TabPanel'],
  },
  Steps: {
    imports: ["import StepsItem from './StepsItem.vue';"],
    template: `
      <Steps :current="1">
        <StepsItem title="단계 1" description="설명" />
        <StepsItem title="단계 2" description="설명" />
        <StepsItem title="단계 3" description="설명" />
      </Steps>`,
    components: ['StepsItem'],
  },
  Menu: {
    imports: [
      "import MenuItem from './MenuItem.vue';",
      "import MenuDivider from './MenuDivider.vue';",
    ],
    template: `
      <Menu>
        <MenuItem label="항목 1" />
        <MenuItem label="항목 2" />
        <MenuDivider />
        <MenuItem label="항목 3" />
      </Menu>`,
    components: ['MenuItem', 'MenuDivider'],
  },
  Dropdown: {
    imports: ["import Button from './Button.vue';"],
    template: `
      <Dropdown open>
        <template #trigger><Button label="드롭다운" variant="outline" /></template>
        <a href="#" class="dropdown_item" role="menuitem">항목 1</a>
        <a href="#" class="dropdown_item" role="menuitem">항목 2</a>
        <a href="#" class="dropdown_item" role="menuitem">항목 3</a>
      </Dropdown>`,
    components: ['Button'],
  },
  Modal: {
    template: `
      <Modal id="story-modal" title="모달 제목" open>
        <p>모달 본문 내용입니다.</p>
      </Modal>`,
  },
  Drawer: {
    template: `
      <Drawer id="story-drawer" title="드로어" open placement="right">
        <p>드로어 내용입니다.</p>
      </Drawer>`,
  },
  Popover: {
    imports: ["import Button from './Button.vue';"],
    template: `
      <Popover open>
        <template #trigger><Button label="팝오버" variant="outline" /></template>
        <p>팝오버 내용입니다.</p>
      </Popover>`,
    components: ['Button'],
  },
  Tooltip: {
    imports: ["import Button from './Button.vue';"],
    template: `
      <Tooltip content="툴팁 텍스트" open>
        <template #trigger><Button label="툴팁" variant="outline" /></template>
      </Tooltip>`,
    components: ['Button'],
  },
  Tree: {
    imports: ["import TreeNode from './TreeNode.vue';"],
    template: `
      <Tree>
        <TreeNode label="루트" expanded>
          <TreeNode label="자식 1" />
          <TreeNode label="자식 2" />
        </TreeNode>
      </Tree>`,
    components: ['TreeNode'],
  },
  Table: {
    template: `
      <Table bordered striped hover>
        <thead>
          <tr><th>이름</th><th>역할</th><th>상태</th></tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>개발자</td><td>활성</td></tr>
          <tr><td>김철수</td><td>디자이너</td><td>활성</td></tr>
        </tbody>
      </Table>`,
  },
  Card: {
    imports: [
      "import CardHeader from './CardHeader.vue';",
      "import CardBody from './CardBody.vue';",
      "import CardFooter from './CardFooter.vue';",
      "import Button from './Button.vue';",
    ],
    template: `
      <Card title="카드 제목" subtitle="부제목">
        <CardBody>카드 본문 내용입니다.</CardBody>
        <CardFooter><Button label="확인" size="sm" /></CardFooter>
      </Card>`,
    components: ['CardHeader', 'CardBody', 'CardFooter', 'Button'],
  },
  Carousel: {
    imports: ["import CarouselSlide from './CarouselSlide.vue';"],
    template: `
      <Carousel>
        <CarouselSlide v-for="(slide, index) in ['슬라이드 1', '슬라이드 2']" :key="index">
          <div style="padding:48px;text-align:center;background:var(--color-fill-secondary,#f5f5f5)">{{ slide }}</div>
        </CarouselSlide>
      </Carousel>`,
    components: ['CarouselSlide'],
  },
  Collapse: {
    imports: ["import CollapsePanel from './CollapsePanel.vue';"],
    template: `
      <Collapse>
        <CollapsePanel label="패널 1" content="내용 1" />
        <CollapsePanel label="패널 2" content="내용 2" />
      </Collapse>`,
    components: ['CollapsePanel'],
  },
  Grid: {
    template: `
      <Grid gap="sm">
        <div class="grid_col-span-12"><div style="padding:16px;background:var(--color-fill-secondary,#f5f5f5)">12</div></div>
        <div class="grid_col-span-12"><div style="padding:16px;background:var(--color-fill-secondary,#f5f5f5)">12</div></div>
      </Grid>`,
    components: [],
  },
  FormLayout: {
    imports: ["import Input from './Input.vue';"],
    template: `
      <FormLayout label="이름" required>
        <Input placeholder="이름 입력" />
      </FormLayout>`,
    components: ['Input'],
  },
  Navbar: {
    imports: [
      "import NavbarItem from './NavbarItem.vue';",
      "import NavbarList from './NavbarList.vue';",
    ],
    template: `
      <Navbar brand="UXKM">
        <NavbarList>
          <NavbarItem label="홈" href="#" active />
          <NavbarItem label="가이드" href="#" />
        </NavbarList>
      </Navbar>`,
    components: ['NavbarItem', 'NavbarList'],
  },
  List: {
    imports: ["import ListItem from './ListItem.vue';"],
    template: `
      <List>
        <ListItem>항목 1</ListItem>
        <ListItem>항목 2</ListItem>
        <ListItem>항목 3</ListItem>
      </List>`,
    components: ['ListItem'],
  },
  Timeline: {
    imports: ["import TimelineItem from './TimelineItem.vue';"],
    template: `
      <Timeline>
        <TimelineItem title="이벤트 1" description="2024-01-01" />
        <TimelineItem title="이벤트 2" description="2024-02-01" />
      </Timeline>`,
    components: ['TimelineItem'],
  },
  Pagination: {
    template: `<Pagination :total="100" :current="1" :page-size="10" />`,
  },
  Select: {
    template: `
      <Select placeholder="선택하세요" open>
        <option value="1">옵션 1</option>
        <option value="2">옵션 2</option>
        <option value="3">옵션 3</option>
      </Select>`,
  },
  Upload: {
    imports: ["import Button from './Button.vue';"],
    template: `
      <Upload>
        <Button label="파일 선택" variant="outline" />
      </Upload>`,
    components: ['Button'],
  },
  Calendar: {
    template: `<Calendar title="2024년 1월" />`,
  },
  DatePicker: {
    template: `<DatePicker placeholder="날짜 선택" open />`,
  },
};

function buildFallbackSourceCode(name, args) {
  if (!Object.keys(args).length) {
    return `<${name} />`;
  }
  const attrs = Object.entries(args)
    .map(([key, value]) => {
      const attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      if (typeof value === 'boolean') return value ? attr : '';
      if (typeof value === 'number') return `:${attr}="${value}"`;
      return `${attr}="${String(value).replace(/"/g, '&quot;')}"`;
    })
    .filter(Boolean)
    .join(' ');
  return `<${name}${attrs ? ` ${attrs}` : ''} />`;
}

function getComponentDisplayPath(name, rel = '') {
  if (rel.startsWith('icons/')) {
    return `@uxkm/ui/components/icons/${name}.vue`;
  }
  if (rel) {
    return `@uxkm/ui/components/${rel.replace(/\.vue$/, '')}.vue`;
  }
  return `@uxkm/ui/components/${name}.vue`;
}

function buildDisplayComponentsMap(primaryName, extraNames = [], primaryRel = '') {
  const map = new Map();
  map.set(primaryName, { displayPath: getComponentDisplayPath(primaryName, primaryRel) });
  for (const extraName of extraNames) {
    map.set(extraName, { displayPath: getComponentDisplayPath(extraName) });
  }
  return map;
}

function buildDocsSourceBlock(sourceCode, { components } = {}) {
  const vueCode = buildStoryVueSourceCode(sourceCode, { components });
  return `  parameters: {
    docs: {
      source: {
        code: ${JSON.stringify(vueCode)},
        language: 'vue',
      },
    },
  },`;
}

function storyTitle(name) {
  return getStoryTitle(name);
}

function storyId(name) {
  return getStoryId(name);
}

function generateStory({ full, rel, name }) {
  const source = readFileSync(full, 'utf8');
  const importPath = `./${name}.vue`;
  const title = storyTitle(name);
  const custom = CUSTOM_RENDER[name];

  if (custom) {
    const extraImports = (custom.imports || []).join('\n');
    const allComponents = [name, ...(custom.components || [])];
    const componentsList = allComponents.join(', ');
    const renderBody = custom.useRender
      ? custom.useRender
      : `() => ({
    components: { ${componentsList} },
    template: \`${custom.template.trim()}\`,
  })`;
    const sourceBlock = custom.template?.trim()
      ? `\n${buildDocsSourceBlock(custom.template.trim(), {
          components: buildDisplayComponentsMap(name, custom.components, rel),
        })}`
      : '';
    return `import ${name} from '${importPath}';
${extraImports}

export default {
  title: '${title}',
  id: '${storyId(name)}',
  component: ${name},
  tags: ['autodocs'],
};

export const Default = {${sourceBlock}
  render: ${renderBody},
};
`;
  }

  const props = parseProps(source);
  const argTypes = buildArgTypes(props, name);
  const args = buildArgs(props, name);
  const argsBlock = Object.keys(args).length ? `\n  args: {\n${formatArgs(args)}\n  },` : '';
  const defaultRender =
    Object.keys(args).length > 0
      ? ''
      : `
  render: () => ({
    components: { ${name} },
    template: '<${name} />',
  }),`;
  const sourceBlock = `\n${buildDocsSourceBlock(buildFallbackSourceCode(name, args), {
    components: buildDisplayComponentsMap(name, [], rel),
  })}`;

  return `import ${name} from '${importPath}';

export default {
  title: '${title}',
  id: '${storyId(name)}',
  component: ${name},
  tags: ['autodocs'],${argTypes ? `\n  argTypes: {\n${argTypes}\n  },` : ''}
};

export const Default = {${sourceBlock}${argsBlock}${defaultRender}
};
`;
}

function main() {
  const files = walkVueFiles(componentsDir);
  let created = 0;
  let fromDoc = 0;
  const writtenFromDoc = new Set();

  // 가이드 문서 기반 스토리 (Typography처럼 Vue 파일명과 스토리명이 다를 수 있음)
  for (const [storyKey, doc] of docByComponent) {
    const storyFile = `${storyKey}.stories.js`;
    const storyPath = path.join(componentsDir, storyFile);
    const content = buildDocStorySource(doc, getStoryTitle, getStoryId);
    writeFileSync(storyPath, content, 'utf8');
    writtenFromDoc.add(doc.primaryComponent);
    for (const name of doc.explicitSubcomponents ?? []) {
      writtenFromDoc.add(name);
    }
    created++;
    fromDoc++;
    console.log(`✓ ${storyFile} (guide)`);
  }

  for (const file of files) {
    if (SKIP_STORIES.has(file.name)) continue;
    if (writtenFromDoc.has(file.name)) continue;
    if (docByComponent.has(file.name)) continue;

    const storyName = file.rel.replace(/\.vue$/, '.stories.js');
    const storyPath = path.join(componentsDir, storyName);

    const content = generateStory(file);
    if (!content) continue;

    writeFileSync(storyPath, content, 'utf8');
    created++;
    console.log(`✓ ${storyName}`);
  }

  console.log(`\n생성: ${created} (가이드 연동: ${fromDoc})`);
}

main();
