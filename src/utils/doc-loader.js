import * as introDoc from '@/doc/pages/intro.jsx';
import * as gettingStartedDoc from '@/doc/pages/getting-started.jsx';
import * as designTokensDoc from '@/doc/pages/design-tokens.jsx';
import * as accordionDoc from '@/doc/components/accordion.jsx';
import * as affixDoc from '@/doc/components/affix.jsx';
import * as alertDoc from '@/doc/components/alert.jsx';
import * as snackbarDoc from '@/doc/components/snackbar.jsx';
import * as avatarDoc from '@/doc/components/avatar.jsx';
import * as backTopDoc from '@/doc/components/back-top.jsx';
import * as badgeDoc from '@/doc/components/badge.jsx';
import * as breadcrumbDoc from '@/doc/components/breadcrumb.jsx';
import * as buttonDoc from '@/doc/components/button.jsx';
import * as calendarDoc from '@/doc/components/calendar.jsx';
import * as cardDoc from '@/doc/components/card.jsx';
import * as carouselDoc from '@/doc/components/carousel.jsx';
import * as checkboxDoc from '@/doc/components/checkbox.jsx';
import * as collapseDoc from '@/doc/components/collapse.jsx';
import * as containerDoc from '@/doc/components/container.jsx';
import * as datePickerDoc from '@/doc/components/date-picker.jsx';
import * as dividerDoc from '@/doc/components/divider.jsx';
import * as drawerDoc from '@/doc/components/drawer.jsx';
import * as dropdownDoc from '@/doc/components/dropdown.jsx';
import * as emptyDoc from '@/doc/components/empty.jsx';
import * as formLayoutDoc from '@/doc/components/form-layout.jsx';
import * as flexDoc from '@/doc/components/flex.jsx';
import * as gridDoc from '@/doc/components/grid.jsx';
import * as iconDoc from '@/doc/components/icon.jsx';
import * as inputDoc from '@/doc/components/input.jsx';
import * as linkDoc from '@/doc/components/link.jsx';
import * as listDoc from '@/doc/components/list.jsx';
import * as menuDoc from '@/doc/components/menu.jsx';
import * as modalDoc from '@/doc/components/modal.jsx';
import * as navbarDoc from '@/doc/components/navbar.jsx';
import * as paginationDoc from '@/doc/components/pagination.jsx';
import * as popoverDoc from '@/doc/components/popover.jsx';
import * as progressDoc from '@/doc/components/progress.jsx';
import * as radioDoc from '@/doc/components/radio.jsx';
import * as rateDoc from '@/doc/components/rate.jsx';
import * as selectDoc from '@/doc/components/select.jsx';
import * as skeletonDoc from '@/doc/components/skeleton.jsx';
import * as sliderDoc from '@/doc/components/slider.jsx';
import * as spaceDoc from '@/doc/components/space.jsx';
import * as spinDoc from '@/doc/components/spin.jsx';
import * as statDoc from '@/doc/components/stat.jsx';
import * as stepsDoc from '@/doc/components/steps.jsx';
import * as switchDoc from '@/doc/components/switch.jsx';
import * as tableDoc from '@/doc/components/table.jsx';
import * as tabsDoc from '@/doc/components/tabs.jsx';
import * as tagDoc from '@/doc/components/tag.jsx';
import * as textareaDoc from '@/doc/components/textarea.jsx';
import * as timelineDoc from '@/doc/components/timeline.jsx';
import * as tooltipDoc from '@/doc/components/tooltip.jsx';
import * as treeDoc from '@/doc/components/tree.jsx';
import * as typographyDoc from '@/doc/components/typography.jsx';
import * as uploadDoc from '@/doc/components/upload.jsx';

const pageDocs = {
  intro: introDoc,
  'getting-started': gettingStartedDoc,
  'design-tokens': designTokensDoc,
};

const componentDocs = {
  accordion: accordionDoc,
  affix: affixDoc,
  alert: alertDoc,
  snackbar: snackbarDoc,
  avatar: avatarDoc,
  'back-top': backTopDoc,
  badge: badgeDoc,
  breadcrumb: breadcrumbDoc,
  button: buttonDoc,
  calendar: calendarDoc,
  card: cardDoc,
  carousel: carouselDoc,
  checkbox: checkboxDoc,
  collapse: collapseDoc,
  container: containerDoc,
  'date-picker': datePickerDoc,
  divider: dividerDoc,
  drawer: drawerDoc,
  dropdown: dropdownDoc,
  empty: emptyDoc,
  'form-layout': formLayoutDoc,
  flex: flexDoc,
  grid: gridDoc,
  icon: iconDoc,
  input: inputDoc,
  link: linkDoc,
  list: listDoc,
  menu: menuDoc,
  modal: modalDoc,
  navbar: navbarDoc,
  pagination: paginationDoc,
  popover: popoverDoc,
  progress: progressDoc,
  radio: radioDoc,
  rate: rateDoc,
  select: selectDoc,
  skeleton: skeletonDoc,
  slider: sliderDoc,
  space: spaceDoc,
  spin: spinDoc,
  stat: statDoc,
  steps: stepsDoc,
  switch: switchDoc,
  table: tableDoc,
  tabs: tabsDoc,
  tag: tagDoc,
  textarea: textareaDoc,
  timeline: timelineDoc,
  tooltip: tooltipDoc,
  tree: treeDoc,
  typography: typographyDoc,
  upload: uploadDoc,
};

function getDocMeta(docModule) {
  return (
    docModule?.docMeta ?? {
      title: 'UXKM Guide',
      activeNav: '',
      pageTitle: '',
    }
  );
}

function resolveDoc(key) {
  if (pageDocs[key]) {
    return pageDocs[key].default;
  }

  if (componentDocs[key]) {
    return componentDocs[key].default;
  }

  return null;
}

export function getDocByKey(key) {
  const DocComponent = resolveDoc(key);
  if (!DocComponent) {
    return null;
  }

  const docModule = pageDocs[key] ?? componentDocs[key];

  return {
    meta: getDocMeta(docModule),
    component: DocComponent,
  };
}

export function getAllDocSlugs() {
  return Object.keys(componentDocs);
}
