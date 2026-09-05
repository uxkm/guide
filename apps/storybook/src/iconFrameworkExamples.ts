import type { FrameworkExample } from './FrameworkCode';

import iconHtml from '../../html/src/components/basic/Icon/Icon.html?raw';
import iconGulp from '../../gulp/src/components/basic/Icon/icon.njk?raw';
import iconReact from '../../react/src/components/basic/Icon/Icon.jsx?raw';
import iconVue from '../../vue/src/components/basic/Icon/Icon.vue?raw';

const iconHtmlComponent = `<!-- 장식용 아이콘은 aria-hidden, 의미 있는 아이콘은 aria-label을 사용합니다. -->
<svg class="icon" data-component="Icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"></circle>
  <path d="m21 21-4.35-4.35"></path>
</svg>

<!-- 크기·색상은 icon_sm · icon_lg · color_primary 등으로 조합합니다. -->
<svg class="icon icon_lg color_primary" data-component="Icon" aria-label="검색" role="img" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <circle cx="11" cy="11" r="7"></circle>
  <path d="m20 20-4-4"></path>
</svg>

<!-- 원형·버튼형은 래퍼에 icon_circle · icon_button을 두고 내부 SVG는 aria-hidden입니다. -->
<span class="icon_circle color_primary" role="img" aria-label="확인">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path d="m5 12 4 4L19 6"></path>
  </svg>
</span>`;

const iconReactComponent = `// 아이콘 이름 → SVG path 맵입니다. 전체 목록은 소스의 paths를 참고합니다.
const paths = {
  plus: <><path d="M12 5v14M5 12h14" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />
  // … trash, download, chevron, settings 등 등록된 이름
};

export const iconNames = Object.keys(paths);

export function Icon({
  name = 'plus', // paths에 등록된 아이콘 이름입니다.
  children, // 커스텀 SVG 도형입니다. 있으면 name보다 우선합니다.
  className = '', // 추가 클래스입니다.
  title, // SVG title과 접근성 이름 후보입니다.
  ariaLabel, // 명시적 접근성 이름입니다.
  color, // color_* 공통 색상 클래스입니다.
  size = 'md', // sm · md · lg · xl 크기입니다. md는 기본이라 클래스를 붙이지 않습니다.
  inline = false, // 텍스트와 인라인 정렬합니다.
  spin = false, // 회전 애니메이션입니다.
  button = false, // button 래퍼로 감쌉니다.
  circle = false, // 원형 배경 래퍼로 감쌉니다.
  square = false, // 사각형 배경 래퍼로 감쌉니다.
  pulse = false, // circle과 함께 펄스 효과를 켭니다.
  ripple = true, // button일 때 리플 효과를 켭니다.
  ...props // 나머지 속성을 최외곽 요소에 전달합니다.
}) {
  const label = ariaLabel ?? props['aria-label'] ?? title;
  const sizeClass = size === 'md' ? '' : \`icon_\${size}\`;
  const svgClasses = ['icon', sizeClass, spin && 'icon_spin'];
  const outerClasses = [
    button ? 'icon_button' : circle ? 'icon_circle' : square ? 'icon_square' : '',
    color && \`color_\${color}\`, inline && 'icon_inline', pulse && circle && 'icon_pulse',
    circle && size === 'sm' && 'icon_circle-sm', circle && size === 'lg' && 'icon_circle-lg',
    className
  ].filter(Boolean).join(' ');
  const content = children ?? paths[name] ?? null;

  const svg = (
    <svg
      aria-hidden={button || circle || square ? true : (label ? undefined : true)}
      aria-label={!button ? label : undefined}
      className={button || circle || square ? svgClasses.filter(Boolean).join(' ') : [svgClasses, outerClasses].flat().filter(Boolean).join(' ')}
      data-component="Icon"
      fill="none"
      role={!button && label ? 'img' : undefined}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...(!button && !circle && !square ? props : {})}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  );

  if (button) return <button aria-label={label} className={outerClasses} data-ripple={ripple ? 'true' : 'false'} type="button" {...props}>{svg}</button>;
  if (circle || square) return <span aria-label={label} aria-hidden={label ? undefined : true} className={outerClasses} role={label ? 'img' : undefined} {...props}>{svg}</span>;
  return svg;
}

export default Icon;`;

const iconVueComponent = `<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 최외곽 요소에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmIcon', inheritAttrs: false });

const props = defineProps({
  name: { type: String, default: 'plus' }, // 등록된 아이콘 이름입니다. 기본 slot이 있으면 우선합니다.
  color: String, // color_* 공통 색상 클래스입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value) },
  inline: Boolean, // 텍스트와 인라인 정렬합니다.
  spin: Boolean, // 회전 애니메이션입니다.
  button: Boolean, // button 래퍼로 감쌉니다.
  circle: Boolean, // 원형 배경 래퍼로 감쌉니다.
  square: Boolean, // 사각형 배경 래퍼로 감쌉니다.
  pulse: Boolean, // circle과 함께 펄스 효과를 켭니다.
  ripple: { type: Boolean, default: true }, // button일 때 리플 효과를 켭니다.
  ariaLabel: String, // 명시적 접근성 이름입니다.
  title: String // SVG title과 접근성 이름 후보입니다.
});

const attrs = useAttrs();
const label = computed(() => props.ariaLabel || attrs['aria-label'] || props.title);

// 래퍼가 없을 때 SVG에 붙는 클래스입니다.
const svgClass = computed(() => [
  'icon', props.size !== 'md' && \`icon_\${props.size}\`, props.spin && 'icon_spin',
  !props.button && !props.circle && !props.square && props.color && \`color_\${props.color}\`,
  !props.button && !props.circle && !props.square && props.inline && 'icon_inline',
  !props.button && !props.circle && !props.square && attrs.class
].filter(Boolean));

// button · circle · square 래퍼에 붙는 클래스입니다.
const wrapperClass = computed(() => [
  props.button ? 'icon_button' : props.circle ? 'icon_circle' : 'icon_square',
  props.color && \`color_\${props.color}\`, props.inline && 'icon_inline',
  props.circle && props.pulse && 'icon_pulse', props.circle && props.size === 'sm' && 'icon_circle-sm',
  props.circle && props.size === 'lg' && 'icon_circle-lg', attrs.class
].filter(Boolean));
const wrapperTag = computed(() => props.button ? 'button' : 'span');
</script>

<template>
  <!-- button · circle · square는 래퍼를 두고 내부 SVG는 aria-hidden입니다. -->
  <component
    v-if="button || circle || square"
    :is="wrapperTag"
    v-bind="attrs"
    :class="wrapperClass"
    :type="button ? 'button' : undefined"
    :data-ripple="button ? (ripple ? 'true' : 'false') : undefined"
    :aria-label="label"
    :aria-hidden="!button && !label ? 'true' : undefined"
    :role="!button && label ? 'img' : undefined"
  >
    <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <slot>
        <!-- name별 path. 전체 목록은 Icon.vue 소스를 참고합니다. -->
        <path v-if="name === 'plus'" d="M12 5v14M5 12h14" />
        <path v-else-if="name === 'search'" d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
        <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
        <path v-else-if="name === 'close'" d="m6 6 12 12M18 6 6 18" />
        <path v-else d="M12 5v14M5 12h14" />
      </slot>
    </svg>
  </component>

  <!-- 기본은 SVG 루트에 클래스와 접근성 속성을 직접 적용합니다. -->
  <svg
    v-else
    v-bind="attrs"
    :class="svgClass"
    :aria-hidden="label ? undefined : 'true'"
    :aria-label="label"
    :role="label ? 'img' : undefined"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title v-if="title">{{ title }}</title>
    <slot>
      <path v-if="name === 'plus'" d="M12 5v14M5 12h14" />
      <path v-else-if="name === 'search'" d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
      <path v-else-if="name === 'close'" d="m6 6 12 12M18 6 6 18" />
      <path v-else d="M12 5v14M5 12h14" />
    </slot>
  </svg>
</template>`;

export const iconComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/basic/Icon/Icon.html', code: iconHtml },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/basic/Icon/icon.njk', code: iconGulp },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/basic/Icon/Icon.vue', code: iconVue },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/icon → Icon.vue', code: iconVue },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/basic/Icon/Icon.jsx', code: iconReact },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/icon → Icon.jsx', code: iconReact },
];

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
  return `import Icon${body.includes('iconNames.map') ? ', { iconNames }' : ''} from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n  <>\n${jsx.split('\n').map((line) => line.trim() ? `    ${line.trimStart()}` : '').join('\n')}\n  </>\n  );\n}`;
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
  return body
    .replace(/<Icon\s*([^>]*)>([\s\S]*?)<\/Icon>/g, (_, source: string, inner: string) => {
      const props = parseAttrs(source);
      const name = props.name ? String(props.name) : undefined;
      const svg = `<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${inner.trim()}</svg>`;
      if (props.circle || props.square) {
        const wrapper = [
          props.circle ? 'icon_circle' : 'icon_square',
          props.color && `color_${props.color}`,
          props.pulse && 'icon_pulse',
          props.circle && props.size === 'sm' && 'icon_circle-sm',
          props.circle && props.size === 'lg' && 'icon_circle-lg',
        ].filter(Boolean);
        return `<span class="${wrapper.join(' ')}" aria-hidden="true">${svg}</span>`;
      }
      return name ? htmlIcon(source) : svg;
    })
    .replace(/<Icon\s+([^>]*?)\s*\/>/g, (_, attrs: string) => htmlIcon(attrs));
}

const ICON_ATTR_MAP: Record<string, string> = {
  'aria-label': 'ariaLabel',
  class: 'className',
};

function gulpIconArgs(source: string) {
  const props: string[] = [];
  const token = /:([\w-]+)="([^"]*)"|([\w-]+)(?:="([^"]*)")?/g;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) {
    if (match[1]) {
      const key = ICON_ATTR_MAP[match[1]] ?? match[1];
      props.push(`${key}=${match[2]}`);
      continue;
    }
    const raw = match[3];
    const value = match[4];
    const key = ICON_ATTR_MAP[raw] ?? raw;
    if (value == null) props.push(`${key}=true`);
    else if (/^-?\d+(\.\d+)?$/.test(value)) props.push(`${key}=${value}`);
    else props.push(`${key}='${value}'`);
  }
  return props.join(', ');
}

function indentGulpLines(text: string, spaces: number) {
  const pad = ' '.repeat(spaces);
  return text.split('\n').map((line) => (line.trim() ? `${pad}${line}` : line)).join('\n');
}

/** Icon JSX-like body를 Nunjucks `icon` macro 호출로 변환합니다. */
function toGulp(key: ExampleKey, body: string) {
  if (key === 'gallery') {
    return `{% from "components/basic/Icon/icon.njk" import icon %}

{% set iconNames = ['search', 'plus', 'download', 'trash', 'check', 'edit', 'settings', 'user', 'star'] %}
<div class="icon_grid">
  {% for name in iconNames %}
    <div class="icon_grid-item">
      {{ icon(name=name, size='lg') }}
      <span>{{ name }}</span>
    </div>
  {% endfor %}
</div>`;
  }

  let result = body.replace(/\r\n?/g, '\n');
  result = result.replace(/<Icon\s+([^>]*?)\s*\/>/g, (_, source: string) => {
    const args = gulpIconArgs(source.trim());
    return args ? `{{ icon(${args}) }}` : '{{ icon() }}';
  });
  result = result.replace(/<Icon\s*([^>]*)>([\s\S]*?)<\/Icon>/g, (_, source: string, inner: string) => {
    const args = gulpIconArgs(source.trim());
    const content = indentGulpLines(inner.trim(), 2);
    return args
      ? `{% call icon(${args}) %}\n${content}\n{% endcall %}`
      : `{% call icon() %}\n${content}\n{% endcall %}`;
  });
  return `{% from "components/basic/Icon/icon.njk" import icon %}\n\n${result.trim()}`;
}

function webSquareIcon(source: string, id: string, customName = '') {
  const props = parseAttrs(source);
  const name = String(props.name ?? (customName || 'plus'));
  const src = `/images/icons/${name}.svg`;
  const sizeClass = props.size && props.size !== 'md' ? `icon_${props.size}` : '';
  const colorClass = props.color ? `color_${props.color}` : '';
  const imageClasses = ['icon', sizeClass, colorClass, props.inline && 'icon_inline', props.spin && 'icon_spin'].filter(Boolean).join(' ');
  const accessibleName = String(props['aria-label'] ?? name);

  if (props.button) {
    return `<xf:trigger
  type="button"
  id="${id}"
  class="icon_button ${colorClass}"
  title="${accessibleName}"
  tooltip="${accessibleName}"
  style="background-image: url('${src}'); background-position: center; background-repeat: no-repeat; background-size: 1.25rem;"
  ev:onclick="scwin.iconButton_onclick">
  <xf:label><![CDATA[]]></xf:label>
</xf:trigger>`;
  }

  const image = `<w2:image
  id="${id}Image"
  src="${src}"
  alt="${props['aria-label'] ?? ''}"
  class="${imageClasses}"></w2:image>`;
  if (!props.circle && !props.square) return image;

  const wrapperClasses = [
    props.circle ? 'icon_circle' : 'icon_square',
    colorClass,
    props.pulse && 'icon_pulse',
    props.circle && props.size === 'sm' && 'icon_circle-sm',
    props.circle && props.size === 'lg' && 'icon_circle-lg'
  ].filter(Boolean).join(' ');
  return `<w2:group
  id="${id}"
  class="${wrapperClasses}">
${image.split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

function webSquareCode(key: ExampleKey, body: string) {
  const name = `${key[0].toUpperCase()}${key.slice(1)}`;
  let iconSequence = 0;
  let groupSequence = 0;

  if (key === 'gallery') {
    const items = ['search', 'plus', 'download'].map((iconName, index) => `  <w2:group id="iconGalleryItem${index + 1}" class="icon_grid-item">
    <w2:image id="iconGalleryImage${index + 1}" src="/images/icons/${iconName}.svg" alt="" class="icon icon_lg"></w2:image>
    <w2:textbox id="iconGalleryLabel${index + 1}" tagname="span" label="${iconName}"></w2:textbox>
  </w2:group>`).join('\n');
    return `<!-- 아이콘 경로는 프로젝트 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="iconGalleryExample" class="icon_grid">
${items}
  <!-- DataList와 w2:generator로 전체 아이콘 목록을 반복할 수 있습니다. -->
</w2:group>`;
  }

  let markup = body.replace(/<Icon\s*([^>]*)>([\s\S]*?)<\/Icon>/g, (_, source: string) => {
    const id = `icon${name}${++iconSequence}`;
    return webSquareIcon(source, id, `custom-${iconSequence}`);
  });
  markup = markup.replace(/<Icon\s+([^>]*?)\s*\/>/g, (_, source: string) => {
    const id = `icon${name}${++iconSequence}`;
    return webSquareIcon(source, id);
  });
  markup = markup.replace(/<(\/)?div\b([^>]*)>/g, (_tag, closing: string, source: string) => {
    if (closing) return '</w2:group>';
    const className = source.match(/\sclass="([^"]*)"/)?.[1] ?? '';
    return `<w2:group\n  id="icon${name}Group${++groupSequence}"${className ? `\n  class="${className}"` : ''}>`;
  });

  return `<!-- 아이콘 경로는 프로젝트 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="icon${name}Example">
${markup.split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = htmlCode(key, body);
  const gulp = toGulp(key, body);
  const react = componentCode(body, 'react');
  const vue = componentCode(body, 'vue');
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/basic/Icon/Icon.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/basic/Icon/icon.njk · ${key}`, code: `{# Icon · ${key} #}\n${gulp}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${key}`, code: react },
    { id: 'websquare', label: 'WebSquare', fileName: `Icon.xml · ${key}`, code: webSquareCode(key, body) }
  ];
}

export const iconFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
