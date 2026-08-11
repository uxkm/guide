import type { FrameworkExample } from './FrameworkCode';

const bodies = {
  basic: `<div class="icon_group">
  <Icon name="search" />
  <Icon name="edit" />
  <Icon name="trash" />
</div>`,
  custom: `<div class="icon_group">
  <Icon>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </Icon>
  <Icon>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
  </Icon>
</div>`,
  sizes: `<div class="icon_group">
  <Icon name="plus" size="sm" />
  <Icon name="plus" />
  <Icon name="plus" size="lg" />
  <Icon name="plus" size="xl" />
</div>`,
  colors: `<div class="icon_group">
  <Icon name="star" color="default" />
  <Icon name="star" color="primary" />
  <Icon name="check-circle" color="success" />
  <Icon name="alert-triangle" color="warning" />
  <Icon name="x-circle" color="danger" />
</div>`,
  inline: `<p><Icon name="info" inline color="info" aria-label="안내" /> 변경 사항이 자동 저장됩니다.</p>
<p><Icon name="check-circle" inline color="success" aria-label="완료" /> 업로드가 완료되었습니다.</p>`,
  background: `<div class="icon_group">
  <Icon name="plus" circle color="primary" size="sm" />
  <Icon name="check-circle" circle color="success" size="sm" />
  <Icon name="trash" circle color="danger" size="lg" />
  <Icon name="edit" square color="primary" />
</div>`,
  button: `<div class="icon_group">
  <Icon name="search" button color="primary" aria-label="검색" />
  <Icon name="settings" button color="muted" aria-label="설정" />
  <Icon name="close" button color="danger" aria-label="삭제" />
</div>`,
  pulse: `<div class="icon_group">
  <Icon name="bell" circle pulse color="primary" size="sm" />
  <Icon circle pulse color="danger" size="sm"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></Icon>
</div>`,
  group: `<div class="icon_group">
  <Icon name="upload" color="muted" />
  <Icon name="download" color="muted" />
  <Icon name="trash" color="muted" />
</div>
<p><Icon name="user" circle color="primary" size="sm" /> 홍길동님이 댓글을 남겼습니다.</p>`,
  spin: `<div class="icon_group">
  <Icon name="loader" spin color="primary" />
  <Icon name="loader" spin size="lg" color="muted" />
</div>`,
  gallery: `<div class="icon_grid">
  {iconNames.map((name) => (
    <div class="icon_grid-item" key={name}>
      <Icon name={name} size="lg" />
      <span>{name}</span>
    </div>
  ))}
</div>`
} as const;

type ExampleKey = keyof typeof bodies;

function componentCode(body: string, framework: 'react' | 'vue') {
  if (framework === 'vue') {
    if (body.includes('iconNames.map')) return `<script setup>\nimport Icon from '@uxkm/vue/icon';\n\nconst iconNames = ['search', 'plus', 'download', 'trash', 'check', 'edit', 'settings', 'user', 'star'];\n</script>\n\n<template>\n  <div class="icon_grid">\n    <div v-for="name in iconNames" :key="name" class="icon_grid-item">\n      <Icon :name="name" size="lg" />\n      <span>{{ name }}</span>\n    </div>\n  </div>\n</template>`;
    return `<script setup>\nimport Icon from '@uxkm/vue/icon';\n</script>\n\n<template>\n${body.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`;
  }
  const jsx = body
    .replace(/class=/g, 'className=')
    .replace(/aria-label=/g, 'ariaLabel=')
    .replace(/<Icon name=\{name\}/g, '<Icon name={name}');
  return `import Icon${body.includes('iconNames.map') ? ', { iconNames }' : ''} from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${jsx.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}`;
}

const htmlPaths: Record<string, string> = {
  search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>',
  trash: '<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>',
  'check-circle': '<circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path>',
  'alert-triangle': '<path d="M12 3 2.5 20h19L12 3Z"></path><path d="M12 9v4m0 3h.01"></path>',
  'x-circle': '<circle cx="12" cy="12" r="9"></circle><path d="m9 9 6 6m0-6-6 6"></path>',
  info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 11v6m0-10h.01"></path>',
  settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0Z"></path>',
  close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>',
  upload: '<path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4"></path>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  loader: '<path d="M21 12a9 9 0 1 1-6.2-8.6"></path>'
};

function parseAttrs(source: string) {
  const attrs: Record<string, string | boolean> = {};
  source.replace(/([\w-]+)(?:="([^"]*)")?/g, (_, key: string, value: string | undefined) => {
    attrs[key] = value ?? true;
    return '';
  });
  return attrs;
}

function htmlIcon(source: string) {
  const props = parseAttrs(source);
  const name = String(props.name ?? 'plus');
  const svgClasses = ['icon', props.size && props.size !== 'md' && `icon_${props.size}`, props.spin && 'icon_spin'];
  const commonClasses = [props.color && `color_${props.color}`, props.inline && 'icon_inline'];
  const svg = `<svg class="${svgClasses.filter(Boolean).join(' ')}" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${htmlPaths[name] ?? htmlPaths.plus}</svg>`;
  if (props.button) return `<button class="icon_button ${commonClasses.filter(Boolean).join(' ')}" type="button" aria-label="${props['aria-label'] ?? name}">${svg}</button>`;
  if (props.circle || props.square) {
    const wrapper = [props.circle ? 'icon_circle' : 'icon_square', ...commonClasses, props.pulse && 'icon_pulse', props.circle && props.size === 'sm' && 'icon_circle-sm', props.circle && props.size === 'lg' && 'icon_circle-lg'];
    return `<span class="${wrapper.filter(Boolean).join(' ')}" aria-hidden="true">${svg}</span>`;
  }
  const label = props['aria-label'];
  const commonClassName = commonClasses.filter(Boolean).join(' ');
  const standaloneSvg = commonClassName ? svg.replace('class="', `class="${commonClassName} `) : svg;
  return standaloneSvg.replace('aria-hidden="true"', label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"');
}

function htmlCode(key: ExampleKey, body: string) {
  if (key === 'custom') return `<div class="icon_group">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"></path>
  </svg>
</div>`;
  if (key === 'gallery') return `<!-- common-icons 목록을 순회해 같은 구조를 반복합니다. -->\n<div class="icon_grid">\n  <div class="icon_grid-item">${htmlIcon('name="search" size="lg"')}<span>search</span></div>\n  <!-- ... -->\n</div>`;
  return body.replace(/<Icon\s+([^>]*?)\s*\/>/g, (_, attrs: string) => htmlIcon(attrs));
}

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = htmlCode(key, body);
  const react = componentCode(body, 'react');
  const vue = componentCode(body, 'vue');
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/basic/Icon/Icon.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/basic/Icon/icon.njk · ${key}`, code: `{# Icon · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${key}`, code: react }
  ];
}

export const iconFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
