import type { FrameworkExample } from './FrameworkCode';

type Codes = { html: string; react: string; vue: string };

function makeExamples(component: string, slug: string, key: string, codes: Codes): FrameworkExample[] {
  const react = `import { ${component}${component === 'Badge' ? ', BadgeWrap' : ', TagGroup'} } from '@uxkm/react/${slug}';\n\nexport function Example() {\n  return (\n${codes.react}\n  );\n}`;
  const vue = `<script setup>\nimport { ${component}${component === 'Badge' ? ', BadgeWrap' : ', TagGroup'} } from '@uxkm/vue/${slug}';\n</script>\n\n<template>\n${codes.vue}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/${component}/${component}.html · ${key}`, code: codes.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/${component}/${slug}.njk · ${key}`, code: `{# ${component} · ${key} #}\n${codes.html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/${slug} · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/${slug} · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/${slug} · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/${slug} · ${key}`, code: react }
  ];
}

const badge = (key: string, html: string, react: string, vue: string) => makeExamples('Badge', 'badge', key, { html, react, vue });
const tag = (key: string, html: string, react: string, vue: string) => makeExamples('Tag', 'tag', key, { html, react, vue });

export const badgeFrameworkExamples = {
  basic: badge('basic', `<span class="badge color_default">Default</span>\n<span class="badge color_primary">Primary</span>\n<span class="badge color_success">Success</span>\n<span class="badge color_warning">Warning</span>\n<span class="badge color_danger">Danger</span>`, `    <>\n      {['default', 'primary', 'success', 'warning', 'danger'].map((color) => <Badge key={color} color={color} label={color} />)}\n    </>`, `  <Badge v-for="color in ['default', 'primary', 'success', 'warning', 'danger']" :key="color" :color="color" :label="color" />`),
  sizes: badge('sizes', `<span class="badge badge_sm color_primary">Small</span>\n<span class="badge color_primary">Medium</span>\n<span class="badge badge_lg color_primary">Large</span>`, `    <>\n      <Badge size="sm" label="Small" /><Badge label="Medium" /><Badge size="lg" label="Large" />\n    </>`, `  <Badge size="sm" label="Small" /><Badge label="Medium" /><Badge size="lg" label="Large" />`),
  dot: badge('dot', `<span class="badge badge_dot color_success">Active</span>\n<span class="badge badge_dot color_warning">Away</span>\n<span class="badge badge_dot color_danger">Offline</span>`, `    <>\n      <Badge dot color="success" label="Active" /><Badge dot color="warning" label="Away" /><Badge dot color="danger" label="Offline" />\n    </>`, `  <Badge dot color="success" label="Active" /><Badge dot color="warning" label="Away" /><Badge dot color="danger" label="Offline" />`),
  count: badge('count', `<span class="badge badge_count color_danger">3</span>\n<span class="badge badge_count color_primary">12</span>\n<span class="badge badge_count color_success">99+</span>`, `    <>\n      <Badge count color="danger" label="3" /><Badge count label="12" /><Badge count color="success" label="99+" />\n    </>`, `  <Badge count color="danger" label="3" /><Badge count label="12" /><Badge count color="success" label="99+" />`),
  overlay: badge('overlay', `<span class="badge_wrap">\n  <button class="btn btn_filled color_primary" type="button"><span class="btn_label">알림</span></button>\n  <span class="badge badge_count color_danger" aria-label="읽지 않은 알림 5건">5</span>\n</span>\n<span class="badge_wrap">\n  <span class="avatar color_primary" aria-hidden="true">홍</span>\n  <span class="badge_dot-only color_success" role="status" aria-label="온라인"></span>\n</span>`, `    <>\n      <BadgeWrap><button className="btn btn_filled color_primary">알림</button><Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" /></BadgeWrap>\n      <BadgeWrap><span className="avatar color_primary">홍</span><Badge dotOnly color="success" ariaLabel="온라인" /></BadgeWrap>\n    </>`, `  <BadgeWrap><button class="btn btn_filled color_primary">알림</button><Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" /></BadgeWrap>\n  <BadgeWrap><span class="avatar color_primary">홍</span><Badge dot-only color="success" aria-label="온라인" /></BadgeWrap>`)
};

const tagColorHtml = (variant = '') => ['default', 'primary', 'success', 'warning', 'danger', 'info'].map((color) => `<span class="tag${variant ? ` tag_${variant}` : ''} color_${color}">${color}</span>`).join('\n');
const tagColorReact = (variant = 'filled') => `    <>\n      {['default', 'primary', 'success', 'warning', 'danger', 'info'].map((color) => <Tag key={color} variant="${variant}" color={color} label={color} />)}\n    </>`;
const tagColorVue = (variant = 'filled') => `  <Tag v-for="color in ['default', 'primary', 'success', 'warning', 'danger', 'info']" :key="color" variant="${variant}" :color="color" :label="color" />`;

export const tagFrameworkExamples = {
  basic: tag('basic', tagColorHtml(), tagColorReact(), tagColorVue()),
  solid: tag('solid', tagColorHtml('solid'), tagColorReact('solid'), tagColorVue('solid')),
  outline: tag('outline', tagColorHtml('outline'), tagColorReact('outline'), tagColorVue('outline')),
  sizes: tag('sizes', `<div class="tag_group tag_group-tight" role="group"><span class="tag tag_sm color_primary">Small</span><span class="tag color_primary">Medium</span><span class="tag tag_lg color_primary">Large</span></div>`, `    <TagGroup tight><Tag size="sm" label="Small" /><Tag label="Medium" /><Tag size="lg" label="Large" /></TagGroup>`, `  <TagGroup tight><Tag size="sm" label="Small" /><Tag label="Medium" /><Tag size="lg" label="Large" /></TagGroup>`),
  round: tag('round', `<span class="tag tag_round color_primary">Filled</span>\n<span class="tag tag_round tag_outline color_primary">Outline</span>\n<span class="tag tag_round tag_solid color_primary">Solid</span>`, `    <>\n      <Tag round label="Filled" /><Tag round variant="outline" label="Outline" /><Tag round variant="solid" label="Solid" />\n    </>`, `  <Tag round label="Filled" /><Tag round variant="outline" label="Outline" /><Tag round variant="solid" label="Solid" />`),
  icon: tag('icon', `<span class="tag color_primary"><span class="tag_icon" aria-hidden="true">★</span>Design</span>`, `    <Tag label="Design" icon={<span>★</span>} />`, `  <Tag label="Design"><template #icon>★</template></Tag>`),
  closable: tag('closable', `<span class="tag color_primary">React<button class="tag_close" type="button" aria-label="React 태그 제거">×</button></span>`, `    <Tag closable label="React" closeLabel="React 태그 제거" />`, `  <Tag closable label="React" close-label="React 태그 제거" />`),
  checkable: tag('checkable', `<div class="tag_group" role="group" aria-label="카테고리 필터"><button class="tag tag_checkable color_default is-selected" type="button" aria-pressed="true">전체</button><button class="tag tag_checkable color_default" type="button" aria-pressed="false">UI</button></div>`, `    <TagGroup ariaLabel="카테고리 필터"><Tag checkable selected color="default" label="전체" /><Tag checkable color="default" label="UI" /></TagGroup>`, `  <TagGroup aria-label="카테고리 필터"><Tag checkable selected color="default" label="전체" /><Tag checkable color="default" label="UI" /></TagGroup>`),
  add: tag('add', `<button class="tag tag_add tag_round" type="button" data-ripple="true">+ 태그 추가</button>`, `    <Tag add round label="+ 태그 추가" />`, `  <Tag add round label="+ 태그 추가" />`),
  link: tag('link', `<a class="tag tag_outline color_primary" href="#">가이드</a>`, `    <Tag href="#" variant="outline" label="가이드" />`, `  <Tag href="#" variant="outline" label="가이드" />`),
  disabled: tag('disabled', `<span class="tag color_primary is-disabled" aria-disabled="true">Filled</span>\n<button class="tag tag_checkable color_default is-selected is-disabled" type="button" disabled>선택됨</button>`, `    <>\n      <Tag disabled label="Filled" /><Tag checkable selected disabled color="default" label="선택됨" />\n    </>`, `  <Tag disabled label="Filled" /><Tag checkable selected disabled color="default" label="선택됨" />`),
  group: tag('group', `<div class="tag_group" role="group"><span class="tag color_primary">HTML</span><span class="tag color_primary">CSS</span><span class="tag color_success">SCSS</span></div>`, `    <TagGroup><Tag label="HTML" /><Tag label="CSS" /><Tag color="success" label="SCSS" /></TagGroup>`, `  <TagGroup><Tag label="HTML" /><Tag label="CSS" /><Tag color="success" label="SCSS" /></TagGroup>`)
};
