import { commonIconGallery } from '../../packages/ui/src/data/common-icons.js';

const PROP_SAMPLES = {
  label: '라벨',
  title: '제목',
  subtitle: '부제목',
  description: '설명 텍스트입니다.',
  placeholder: '입력하세요',
  href: '#',
  name: 'search',
  text: '텍스트',
  value: '1',
  key: 'tab1',
  panelKey: 'tab1',
  header: '헤더',
  footer: '푸터',
  ariaLabel: '접근성 라벨',
  modelValue: '',
  total: 100,
  page: 1,
  pageSize: 10,
  count: 5,
  max: 100,
  min: 0,
  step: 1,
  rows: 4,
  cols: 40,
  tag: 'span',
  type: 'text',
  role: 'button',
  placement: 'bottom',
  variant: null,
  color: null,
  size: null,
};

const SKIP_PROPS = new Set(['ripple', 'rippleAttrs', 'class', 'style']);

/** 컴포넌트별 Controls 오버라이드 */
const COMPONENT_ARG_OVERRIDES = {
  Icon: {
    name: {
      control: 'select',
      options: commonIconGallery,
      type: {
        name: 'enum',
        summary: 'common-icons 갤러리 키',
      },
    },
  },
};

/** 자식 컴포넌트가 필요한 플레이그라운드 렌더 템플릿 */
export const PLAYGROUND_RENDER = {
  Icon: {
    components: [],
    template: `<Icon v-bind="args" />`,
  },
  Accordion: {
    components: ['AccordionItem'],
    template: `<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>`,
  },
  Breadcrumb: {
    components: ['BreadcrumbItem'],
    template: `<Breadcrumb v-bind="args">
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>`,
  },
  Tabs: {
    components: ['TabPanel'],
    template: `<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>`,
  },
  Steps: {
    components: ['StepsItem'],
    template: `<Steps v-bind="args" :current="1">
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>`,
  },
  Menu: {
    components: ['MenuItem', 'MenuDivider'],
    template: `<Menu v-bind="args">
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>`,
  },
  Dropdown: {
    components: ['Button'],
    template: `<Dropdown v-bind="args" open>
      <template #trigger><Button label="드롭다운" variant="outline" /></template>
      <a href="#" class="dropdown_item" role="menuitem">항목 1</a>
      <a href="#" class="dropdown_item" role="menuitem">항목 2</a>
    </Dropdown>`,
  },
  Modal: {
    components: [],
    template: `<Modal v-bind="args" id="story-modal" title="모달 제목" open>
      <p>모달 본문입니다.</p>
    </Modal>`,
  },
  Drawer: {
    components: [],
    template: `<Drawer v-bind="args" id="story-drawer" title="드로어" open placement="right">
      <p>드로어 내용입니다.</p>
    </Drawer>`,
  },
  Popover: {
    components: ['Button'],
    template: `<Popover v-bind="args" open>
      <template #trigger><Button label="팝오버" variant="outline" /></template>
      <p>팝오버 내용입니다.</p>
    </Popover>`,
  },
  Tooltip: {
    components: ['Button'],
    template: `<Tooltip v-bind="args" content="툴팁 텍스트" open>
      <template #trigger><Button label="툴팁" variant="outline" /></template>
    </Tooltip>`,
  },
  Tree: {
    components: ['TreeNode'],
    template: `<Tree v-bind="args">
      <TreeNode label="루트" expanded>
        <TreeNode label="자식 1" />
        <TreeNode label="자식 2" />
      </TreeNode>
    </Tree>`,
  },
  Table: {
    components: [],
    template: `<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>`,
  },
  Card: {
    components: ['CardHeader', 'CardBody', 'Button'],
    template: `<Card v-bind="args">
      <CardHeader title="카드 제목" />
      <CardBody><p>카드 본문입니다.</p></CardBody>
    </Card>`,
  },
  Carousel: {
    components: ['CarouselSlide'],
    template: `<Carousel v-bind="args">
      <CarouselSlide v-for="(slide, index) in ['슬라이드 1', '슬라이드 2']" :key="index">
        {{ slide }}
      </CarouselSlide>
    </Carousel>`,
  },
  Collapse: {
    components: ['CollapsePanel'],
    template: `<Collapse v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>`,
  },
  Upload: {
    components: ['Button'],
    template: `<Upload v-bind="args">
      <Button label="파일 선택" variant="outline" />
    </Upload>`,
  },
  Select: {
    components: [],
    template: `<Select v-bind="args" placeholder="선택하세요" open>
      <option value="1">옵션 1</option>
      <option value="2">옵션 2</option>
    </Select>`,
  },
  Navbar: {
    components: ['NavbarItem', 'NavbarList'],
    template: `<Navbar v-bind="args" brand="브랜드">
      <NavbarList>
        <NavbarItem label="메뉴 1" href="#" active />
        <NavbarItem label="메뉴 2" href="#" />
      </NavbarList>
    </Navbar>`,
  },
  List: {
    components: ['ListItem'],
    template: `<List v-bind="args">
      <ListItem title="항목 1" description="설명" />
      <ListItem title="항목 2" description="설명" />
    </List>`,
  },
  Timeline: {
    components: ['TimelineItem'],
    template: `<Timeline v-bind="args">
      <TimelineItem title="이벤트 1" time="09:00" />
      <TimelineItem title="이벤트 2" time="10:30" />
    </Timeline>`,
  },
  FormLayout: {
    components: ['Input', 'Button'],
    template: `<FormLayout v-bind="args" novalidate>
      <div class="form_field">
        <label class="form_field-label" for="pg-input">이름</label>
        <Input id="pg-input" placeholder="입력" />
      </div>
      <div class="form_actions">
        <Button type="submit" variant="filled" color="primary" label="제출" />
      </div>
    </FormLayout>`,
  },
  SpinWrap: {
    components: ['Spin'],
    template: `<SpinWrap v-bind="args" loading style="max-width: 320px;">
      <div style="padding: 32px;">로딩 중인 콘텐츠</div>
    </SpinWrap>`,
  },
};

function extractPropsBlock(source) {
  const start = source.indexOf('defineProps');
  if (start === -1) return '';
  const braceStart = source.indexOf('{', start);
  if (braceStart === -1) return '';
  let depth = 0;
  for (let i = braceStart; i < source.length; i++) {
    if (source[i] === '{') depth++;
    if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(braceStart + 1, i);
    }
  }
  return '';
}

export function parseProps(source) {
  const block = extractPropsBlock(source);
  if (!block) return [];

  const props = [];
  const lines = block.split('\n');
  let current = null;

  for (const line of lines) {
    const shortMatch = line.match(/^\s*(\w+)\s*,?\s*$/);
    const typedMatch = line.match(/^\s*(\w+)\s*:\s*(String|Number|Boolean|Array),?\s*$/);
    const startMatch = line.match(/^\s*(\w+)\s*:\s*\{/);
    if (shortMatch && !line.includes('//') && !current) {
      props.push({
        name: shortMatch[1],
        type: 'Boolean',
        options: null,
        defaultValue: undefined,
        required: false,
      });
      continue;
    }
    if (typedMatch && !line.includes('//') && !current) {
      props.push({
        name: typedMatch[1],
        type: typedMatch[2],
        options: null,
        defaultValue: undefined,
        required: false,
      });
      continue;
    }
    if (startMatch) {
      current = {
        name: startMatch[1],
        type: 'Unknown',
        options: null,
        defaultValue: undefined,
        required: false,
      };
      props.push(current);
      continue;
    }
    if (/^\s*\},?\s*(?:\/\/.*)?$/.test(line)) {
      current = null;
      continue;
    }
    if (!current) continue;
    if (/^\s*type:\s*(String|Number|Boolean|Array)/.test(line)) {
      const typeMatch = line.match(/type:\s*(String|Number|Boolean|Array)/);
      if (typeMatch) current.type = typeMatch[1];
      continue;
    }
    if (line.includes('required: true')) current.required = true;
    const defaultStr = line.match(/default:\s*'([^']*)'/);
    const defaultNum = line.match(/default:\s*(\d+)/);
    const defaultBool = line.match(/default:\s*(true|false)/);
    if (defaultStr) current.defaultValue = defaultStr[1];
    if (defaultNum) current.defaultValue = Number(defaultNum[1]);
    if (defaultBool) current.defaultValue = defaultBool[1] === 'true';
    const validator = line.match(/\[([^\]]+)\]\.includes/);
    if (validator) {
      current.options = validator[1]
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    }
  }
  return props.filter((p) => !SKIP_PROPS.has(p.name));
}

function inferArgValue(prop, componentName) {
  if (prop.defaultValue !== undefined && prop.defaultValue !== '') return prop.defaultValue;
  if (prop.options?.length) return prop.options.includes('md') ? 'md' : prop.options[0];
  if (prop.type === 'Boolean') return prop.name === 'open' || prop.name === 'visible';

  const sample = PROP_SAMPLES[prop.name];
  if (sample !== undefined && sample !== null) {
    // value:'1' · modelValue:'' 등은 String용 — Number prop에는 타입 맞는 값만 사용
    if (prop.type === 'Number') {
      if (typeof sample === 'number') return sample;
    } else {
      return sample;
    }
  }

  if (prop.type === 'Number') {
    // 선택적 v-model은 value 등과 충돌하지 않도록 args에서 생략
    if (prop.name === 'modelValue') return undefined;
    return 1;
  }
  if (prop.type === 'Array') return [];
  if (prop.name === 'id') return `story-${componentName.toLowerCase()}`;
  if (prop.required || prop.type === 'String') {
    if (prop.name.endsWith('Label')) return '라벨';
    if (prop.name.includes('title') || prop.name.includes('Title')) return '제목';
    return '값';
  }
  return undefined;
}

function buildTypeSummary(prop) {
  if (prop.options?.length) {
    return prop.options.map((option) => `'${option}'`).join(' | ');
  }
  if (prop.type === 'Boolean') return 'boolean';
  if (prop.type === 'Number') return 'number';
  if (prop.type === 'String') return 'string';
  if (prop.type === 'Array') return 'array';
  return 'unknown';
}

function buildTypeField(prop) {
  const summary = buildTypeSummary(prop);
  const name =
    prop.options?.length ? 'enum' : prop.type === 'Boolean' ? 'boolean' : prop.type === 'Number' ? 'number' : prop.type === 'Array' ? 'array' : 'string';
  return `type: { name: '${name}', summary: ${JSON.stringify(summary)} }`;
}

function formatArgTypeLine(propName, { control, options, type }) {
  const typeField = type
    ? `type: { name: '${type.name}', summary: ${JSON.stringify(type.summary)} }`
    : '';
  if (control === 'select' && options?.length) {
    return `    ${propName}: { control: 'select', options: ${JSON.stringify(options)}, ${typeField} },`;
  }
  if (control === 'boolean') {
    return `    ${propName}: { control: 'boolean', ${typeField} },`;
  }
  if (control === 'number') {
    return `    ${propName}: { control: 'number', ${typeField} },`;
  }
  return `    ${propName}: { control: 'text', ${typeField} },`;
}

export function buildArgTypes(props, componentName) {
  const lines = [];
  const overrides = COMPONENT_ARG_OVERRIDES[componentName] ?? {};

  for (const prop of props) {
    if (overrides[prop.name]) {
      lines.push(formatArgTypeLine(prop.name, overrides[prop.name]));
      continue;
    }

    const typeField = buildTypeField(prop);
    if (prop.type === 'Boolean') {
      lines.push(`    ${prop.name}: { control: 'boolean', ${typeField} },`);
    } else if (prop.options?.length) {
      const options = [...new Set(prop.options)];
      lines.push(
        `    ${prop.name}: { control: 'select', options: ${JSON.stringify(options)}, ${typeField} },`,
      );
    } else if (prop.type === 'Number') {
      lines.push(`    ${prop.name}: { control: 'number', ${typeField} },`);
    } else if (prop.type === 'String') {
      lines.push(`    ${prop.name}: { control: 'text', ${typeField} },`);
    }
  }
  return lines.join('\n');
}

export function buildArgs(props, componentName) {
  const args = {};
  for (const prop of props) {
    const value = inferArgValue(prop, componentName);
    if (value !== undefined) args[prop.name] = value;
  }
  return args;
}

export function formatArgs(args) {
  return Object.entries(args)
    .map(([k, v]) => {
      if (typeof v === 'string') return `    ${k}: ${JSON.stringify(v)},`;
      if (typeof v === 'boolean' || typeof v === 'number') return `    ${k}: ${v},`;
      if (Array.isArray(v)) return `    ${k}: [],`;
      return `    ${k}: ${JSON.stringify(v)},`;
    })
    .join('\n');
}

export function buildPlaygroundStory(primaryComponent, props) {
  const args = buildArgs(props, primaryComponent);
  const argsBlock = Object.keys(args).length ? `\n  args: {\n${formatArgs(args)}\n  },` : '';
  const playground = PLAYGROUND_RENDER[primaryComponent];

  if (playground) {
    const components = [...new Set([primaryComponent, ...playground.components])];
    return `export const Playground = {${argsBlock}
  render: (_args, context) => ({
    components: { ${components.join(', ')} },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: \`${playground.template.trim()}\`,
  }),
};`;
  }

  return `export const Playground = {${argsBlock}
};`;
}
