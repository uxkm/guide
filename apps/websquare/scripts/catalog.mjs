export const catalog = {
  layout: ['Container', 'Grid', 'Flex', 'Divider', 'Space'],
  basic: ['Button', 'Typography', 'Icon', 'Link'],
  'data-display': ['Avatar', 'Badge', 'Tag', 'Card', 'Table', 'List', 'Stat', 'Calendar', 'Timeline', 'Tree'],
  form: ['FormLayout', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch', 'Slider', 'Rate', 'DatePicker', 'Upload'],
  feedback: ['Alert', 'Snackbar', 'Modal', 'Drawer', 'Popover', 'Tooltip', 'Progress', 'Spin', 'Skeleton', 'Empty'],
  navigation: ['Navbar', 'Menu', 'Tabs', 'Breadcrumb', 'Pagination', 'Steps', 'Dropdown'],
  miscellaneous: ['Accordion', 'Collapse', 'Carousel', 'Affix', 'BackTop']
};

export const components = Object.entries(catalog).flatMap(([category, names]) =>
  names.map((name) => ({ category, name }))
);
