import type { FrameworkExample } from './FrameworkCode';

import badgeHtml from '../../html/src/components/data-display/Badge/Badge.html?raw';
import badgeGulp from '../../gulp/src/components/data-display/Badge/badge.njk?raw';
import badgeReact from '../../react/src/components/data-display/Badge/Badge.jsx?raw';
import badgeVue from '../../vue/src/components/data-display/Badge/Badge.vue?raw';
import badgeWrapVue from '../../vue/src/components/data-display/Badge/BadgeWrap.vue?raw';

const badgeVueComponents = `${badgeVue}\n\n<!-- BadgeWrap.vue -->\n${badgeWrapVue}`;

export const badgeComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/data-display/Badge/Badge.html', code: badgeHtml },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/data-display/Badge/badge.njk', code: badgeGulp },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/data-display/Badge/Badge.vue · BadgeWrap.vue', code: badgeVueComponents },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/badge → Badge.vue · BadgeWrap.vue', code: badgeVueComponents },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/data-display/Badge/Badge.jsx', code: badgeReact },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/badge → Badge.jsx', code: badgeReact },
];

type ExampleKey = 'basic' | 'sizes' | 'dot' | 'count' | 'overlay';

const bodies: Record<ExampleKey, string> = {
  basic: `<Badge color="default" label="Default" />
<Badge color="primary" label="Primary" />
<Badge color="success" label="Success" />
<Badge color="warning" label="Warning" />
<Badge color="danger" label="Danger" />`,
  sizes: `<Badge size="sm" label="Small" />
<Badge label="Medium" />
<Badge size="lg" label="Large" />`,
  dot: `<Badge dot color="success" label="Active" />
<Badge dot color="warning" label="Away" />
<Badge dot color="danger" label="Offline" />`,
  count: `<Badge count color="danger" label="3" ariaLabel="알림 3건" />
<Badge count label="12" ariaLabel="알림 12건" />
<Badge count color="success" label="99+" ariaLabel="알림 99건 이상" />`,
  overlay: `<BadgeWrap>
  <button class="btn btn_filled color_primary" type="button"><span class="btn_label">알림</span></button>
  <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
</BadgeWrap>
<BadgeWrap>
  <span class="avatar color_primary" aria-hidden="true">홍</span>
  <Badge dotOnly color="success" ariaLabel="온라인" />
</BadgeWrap>`,
};

const booleanProps = new Set(['dot', 'count', 'dotOnly', 'dot-only']);

function parseAttrs(source: string) {
  const props: Record<string, string | true> = {};
  const token = /([\w-]+)(?:="([^"]*)")?/g;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) {
    props[match[1]] = match[2] == null ? true : match[2];
  }
  return props;
}

function htmlBadge(source: string) {
  const props = parseAttrs(source);
  const size = String(props.size || 'md');
  const dotOnly = Boolean(props.dotOnly || props['dot-only']);
  const classes = [
    dotOnly ? 'badge_dot-only' : 'badge',
    `color_${props.color || 'primary'}`,
    size !== 'md' && `badge_${size}`,
    !dotOnly && props.dot && 'badge_dot',
    !dotOnly && props.count && 'badge_count',
  ].filter(Boolean).join(' ');
  const ariaLabel = props.ariaLabel || props['aria-label'];
  const attrs = [
    `class="${classes}"`,
    'data-component="Badge"',
    ariaLabel && `aria-label="${ariaLabel}"`,
    dotOnly && 'role="status"',
  ].filter(Boolean).join(' ');
  const label = dotOnly ? '' : String(props.label || '');
  return `<span ${attrs}>${label}</span>`;
}

function toHtml(body: string) {
  return body
    .replace(/<BadgeWrap([^>]*)>/g, (_match, source: string) => {
      const props = parseAttrs(source.trim());
      const label = props.ariaLabel || props['aria-label'] || '';
      return `<span class="badge_wrap" data-component="BadgeWrap"${label ? ` aria-label="${label}"` : ''}>`;
    })
    .replace(/<\/BadgeWrap>/g, '</span>')
    .replace(/<Badge\s+([^>]*?)\s*\/>/g, (_match, source: string) => htmlBadge(source))
    .replace(/className=/g, 'class=');
}

const ATTR_MAP: Record<string, string> = {
  'aria-label': 'ariaLabel',
  'dot-only': 'dotOnly',
};

function gulpArgs(source: string) {
  const props: string[] = [];
  const token = /([\w-]+)(?:="([^"]*)")?/g;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) {
    const raw = match[1];
    const value = match[2];
    const key = ATTR_MAP[raw] ?? raw;
    // label·ariaLabel 등은 숫자처럼 보여도 문자열로 유지합니다.
    if (value == null) props.push(`${key}=true`);
    else props.push(`${key}='${value}'`);
  }
  return props.join(', ');
}

function toGulp(body: string) {
  let result = body
    .replace(/<BadgeWrap([^>]*)>/g, (_match, source: string) => {
      const args = gulpArgs(source.trim());
      return args ? `{% call badgeWrap(${args}) %}` : '{% call badgeWrap() %}';
    })
    .replace(/<\/BadgeWrap>/g, '{% endcall %}')
    .replace(/<Badge\s+([^>]*?)\s*\/>/g, (_match, source: string) => {
      const args = gulpArgs(source.trim());
      return args ? `{{ badge(${args}) }}` : '{{ badge() }}';
    })
    .replace(/className=/g, 'class=');

  result = result
    .replace(/\{\%\s*call\s+badgeWrap\([^)]*\)\s*\%\}/g, (match) => `${match}\n  `)
    .replace(/\n\s*\n/g, '\n')
    .replace(/>\{\{/g, '>\n  {{')
    .replace(/\}\}</g, '}}\n')
    .replace(/\}\}\s*\{\%\s*endcall\s*\%\}/g, '}}\n{% endcall %}')
    .replace(/<\/button>\s*\{\{/g, '</button>\n  {{')
    .replace(/<\/span>\s*\{\{/g, '</span>\n  {{')
    .replace(/\}\}\s*<span/g, '}}\n  <span')
    .replace(/(aria-hidden="true">홍<\/span>)\s*\{\{/g, '$1\n  {{');

  return `{% from "components/data-display/Badge/badge.njk" import badge, badgeWrap %}\n\n${result.trim()}`;
}

function toReact(body: string) {
  return body
    .replace(/class=/g, 'className=')
    .replace(/<Badge\s+([^>]*?)\s*\/>/g, (_match, source: string) => {
      const props = parseAttrs(source);
      const attrs = Object.entries(props).map(([key, value]) => {
        const camel = key.replace(/-([a-z])/g, (_m, letter: string) => letter.toUpperCase());
        return value === true || booleanProps.has(key) && value === 'true' ? camel : `${camel}="${value}"`;
      });
      return `<Badge ${attrs.join(' ')} />`;
    });
}

function toVue(body: string) {
  return body
    .replace(/ariaLabel=/g, 'aria-label=')
    .replace(/dotOnly/g, 'dot-only')
    .replace(/<Badge\s+([^>]*?)\s*\/>/g, (_match, source: string) => {
      const normalized = source
        .replace(/ariaLabel=/g, 'aria-label=')
        .replace(/dotOnly/g, 'dot-only');
      const props = parseAttrs(normalized);
      const attrs = Object.entries(props)
        .map(([key, value]) => (value === true || booleanProps.has(key) && value === 'true' ? key : `${key}="${value}"`))
        .join(' ');
      return `<Badge ${attrs} />`;
    });
}

const websquare: Record<ExampleKey, string> = {
  basic: `<w2:group id="badgeBasicExample" class="icon_group">
  <w2:textbox id="badgeDefault" tagname="span" class="badge color_default" label="Default"></w2:textbox>
  <w2:textbox id="badgePrimary" tagname="span" class="badge color_primary" label="Primary"></w2:textbox>
  <w2:textbox id="badgeSuccess" tagname="span" class="badge color_success" label="Success"></w2:textbox>
  <w2:textbox id="badgeWarning" tagname="span" class="badge color_warning" label="Warning"></w2:textbox>
  <w2:textbox id="badgeDanger" tagname="span" class="badge color_danger" label="Danger"></w2:textbox>
</w2:group>`,
  sizes: `<w2:group id="badgeSizesExample" class="icon_group">
  <w2:textbox id="badgeSmall" tagname="span" class="badge badge_sm color_primary" label="Small"></w2:textbox>
  <w2:textbox id="badgeMedium" tagname="span" class="badge color_primary" label="Medium"></w2:textbox>
  <w2:textbox id="badgeLarge" tagname="span" class="badge badge_lg color_primary" label="Large"></w2:textbox>
</w2:group>`,
  dot: `<w2:group id="badgeDotExample" class="icon_group">
  <w2:textbox id="badgeActive" tagname="span" class="badge badge_dot color_success" label="Active"></w2:textbox>
  <w2:textbox id="badgeAway" tagname="span" class="badge badge_dot color_warning" label="Away"></w2:textbox>
  <w2:textbox id="badgeOffline" tagname="span" class="badge badge_dot color_danger" label="Offline"></w2:textbox>
</w2:group>`,
  count: `<w2:group id="badgeCountExample" class="icon_group">
  <w2:textbox id="badgeCount3" tagname="span" class="badge badge_count color_danger" label="3" aria-label="알림 3건"></w2:textbox>
  <w2:textbox id="badgeCount12" tagname="span" class="badge badge_count color_primary" label="12" aria-label="알림 12건"></w2:textbox>
  <w2:textbox id="badgeCount99" tagname="span" class="badge badge_count color_success" label="99+" aria-label="알림 99건 이상"></w2:textbox>
</w2:group>`,
  overlay: `<w2:group id="badgeOverlayExample" class="icon_group">
  <w2:group id="badgeNotificationWrap" class="badge_wrap">
    <xf:trigger id="badgeNotificationButton" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.notification_onclick">
      <xf:label><![CDATA[알림]]></xf:label>
    </xf:trigger>
    <w2:textbox id="badgeNotificationCount" tagname="span" class="badge badge_count color_danger" label="5" aria-label="읽지 않은 알림 5건"></w2:textbox>
  </w2:group>
  <w2:group id="badgeAvatarWrap" class="badge_wrap">
    <w2:textbox id="badgeAvatar" tagname="span" class="avatar color_primary" label="홍" aria-hidden="true"></w2:textbox>
    <w2:group id="badgeOnlineStatus" class="badge_dot-only color_success" role="status" aria-label="온라인"></w2:group>
  </w2:group>
</w2:group>`,
};

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = toHtml(body);
  const gulp = toGulp(body);
  const react = toReact(body);
  const vue = toVue(body);

  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Badge/Badge.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Badge/badge.njk · ${key}`, code: gulp },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `@uxkm/vue/badge → apps/vue/src/components/data-display/Badge/Badge.vue · ${key}`,
      code: `<script setup>\nimport { Badge, BadgeWrap } from '@uxkm/vue/badge';\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`,
    },
    {
      id: 'nuxt',
      label: 'Nuxt',
      fileName: `@uxkm/vue/badge → apps/vue/src/components/data-display/Badge/Badge.vue · ${key}`,
      code: `<script setup>\nimport { Badge, BadgeWrap } from '@uxkm/vue/badge';\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`,
    },
    {
      id: 'react',
      label: 'React',
      fileName: `@uxkm/react/badge → apps/react/src/components/data-display/Badge/Badge.jsx · ${key}`,
      code: `import { Badge, BadgeWrap } from '@uxkm/react/badge';\n\nexport function Example() {\n  return (\n  <>\n${react.split('\n').map((line) => (line.trim() ? `    ${line}` : '')).join('\n')}\n  </>\n  );\n}`,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/badge → apps/react/src/components/data-display/Badge/Badge.jsx · ${key}`,
      code: `import { Badge, BadgeWrap } from '@uxkm/react/badge';\n\nexport function Example() {\n  return (\n  <>\n${react.split('\n').map((line) => (line.trim() ? `    ${line}` : '')).join('\n')}\n  </>\n  );\n}`,
    },
    { id: 'websquare', label: 'WebSquare', fileName: `Badge.xml · ${key}`, code: websquare[key] },
  ];
}

export const badgeFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
