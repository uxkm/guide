/** Storybook·가이드 공통 컴포넌트 그룹 (navigation.js NAV_GROUPS와 동일 분류) */
export const STORY_GROUP_ORDER = [
  '레이아웃',
  '기본 요소',
  '데이터 표시',
  '폼',
  '피드백',
  '네비게이션',
  '기타',
];

export const STORY_GROUPS = {
  레이아웃: ['Container', 'Grid', 'Divider', 'Space'],
  '기본 요소': ['Button', 'Typography', 'Icon', 'Link'],
  '데이터 표시': [
    'Avatar',
    'Badge',
    'Tag',
    'Card',
    'Table',
    'List',
    'Stat',
    'Calendar',
    'Timeline',
    'Tree',
  ],
  폼: [
    'FormLayout',
    'Input',
    'Textarea',
    'Select',
    'Checkbox',
    'Radio',
    'Switch',
    'Slider',
    'Rate',
    'DatePicker',
    'Upload',
  ],
  피드백: [
    'Alert',
    'Modal',
    'Drawer',
    'Popover',
    'Tooltip',
    'Progress',
    'Spin',
    'Skeleton',
    'Empty',
  ],
  네비게이션: [
    'Navbar',
    'Menu',
    'Tabs',
    'Breadcrumb',
    'Pagination',
    'Steps',
    'Dropdown',
  ],
  기타: [
    'Accordion',
    'Collapse',
    'Carousel',
    'Affix',
    'BackTop',
  ],
};

const componentGroupMap = Object.fromEntries(
  Object.entries(STORY_GROUPS).flatMap(([group, names]) => names.map((name) => [name, group])),
);

/** @param {string} componentName PascalCase 컴포넌트명 */
export function getStoryGroup(componentName) {
  return componentGroupMap[componentName] ?? '기타';
}

/** @param {string} componentName */
export function getStoryTitle(componentName) {
  return `Components/${getStoryGroup(componentName)}/${componentName}`;
}

/** @param {string} componentName — Storybook id (ASCII, URL 안정) */
export function getStoryId(componentName) {
  const nameSlug = componentName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
  return `components-${nameSlug}`;
}
