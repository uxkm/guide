import type { FrameworkExample } from './FrameworkCode';

import avatarHtml from '../../html/src/components/data-display/Avatar/Avatar.html?raw';
import avatarGulp from '../../gulp/src/components/data-display/Avatar/avatar.njk?raw';
import avatarReact from '../../react/src/components/data-display/Avatar/Avatar.jsx?raw';
import avatarVue from '../../vue/src/components/data-display/Avatar/Avatar.vue?raw';
import avatarGroupVue from '../../vue/src/components/data-display/Avatar/AvatarGroup.vue?raw';

const avatarVueComponents = `${avatarVue}\n\n<!-- AvatarGroup.vue -->\n${avatarGroupVue}`;

export const avatarComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/data-display/Avatar/Avatar.html', code: avatarHtml },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/data-display/Avatar/avatar.njk', code: avatarGulp },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/data-display/Avatar/Avatar.vue · AvatarGroup.vue', code: avatarVueComponents },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/avatar → Avatar.vue · AvatarGroup.vue', code: avatarVueComponents },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/data-display/Avatar/Avatar.jsx', code: avatarReact },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/avatar → Avatar.jsx', code: avatarReact },
];

const sample = '/images/samples/avatar/avatar-sample.svg';

type ExampleKey = 'basic' | 'sizes' | 'shapes' | 'colors' | 'badge' | 'group';

const bodies: Record<ExampleKey, string> = {
  basic: `<Avatar src="${sample}" alt="홍길동" />
<Avatar color="primary" initials="홍" ariaHidden />
<Avatar color="default" icon="user" ariaHidden />`,
  sizes: `<Avatar size="sm" color="primary" initials="A" ariaHidden />
<Avatar color="primary" initials="B" ariaHidden />
<Avatar size="lg" color="primary" initials="C" ariaHidden />
<Avatar size="xl" color="primary" initials="D" ariaHidden />`,
  shapes: `<Avatar color="primary" initials="원" ariaHidden />
<Avatar square color="primary" initials="각" ariaHidden />
<Avatar square src="${sample}" alt="홍길동" />`,
  colors: `<Avatar color="default" initials="D" ariaHidden />
<Avatar color="primary" initials="P" ariaHidden />
<Avatar color="success" initials="S" ariaHidden />
<Avatar color="warning" initials="W" ariaHidden />
<Avatar color="danger" initials="E" ariaHidden />`,
  badge: `<Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" />
<Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" />`,
  group: `<AvatarGroup ariaLabel="팀 멤버 4명">
  <Avatar color="primary" initials="김" ariaHidden />
  <Avatar color="success" initials="이" ariaHidden />
  <Avatar color="warning" initials="박" ariaHidden />
  <Avatar color="danger" initials="최" ariaHidden />
</AvatarGroup>`,
};

const booleanProps = new Set(['square', 'ariaHidden', 'aria-hidden']);

function parseAttrs(source: string) {
  const props: Record<string, string | true> = {};
  const token = /([\w-]+)(?:="([^"]*)")?/g;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) {
    const key = match[1];
    const value = match[2];
    props[key] = value == null ? true : value;
  }
  return props;
}

function htmlIcon(name: string) {
  return `<svg class="avatar_icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><!-- ${name} --></svg>`;
}

function htmlAvatar(source: string) {
  const props = parseAttrs(source);
  const size = String(props.size || 'md');
  const classes = [
    'avatar',
    props.color && `color_${props.color}`,
    size !== 'md' && `avatar_${size}`,
    props.square && 'avatar_square',
  ].filter(Boolean).join(' ');
  const attrs = [
    `class="${classes}"`,
    'data-component="Avatar"',
    (props.ariaHidden || props['aria-hidden']) && 'aria-hidden="true"',
  ].filter(Boolean).join(' ');

  let inner = '';
  if (props.src) {
    inner = `\n  <img class="avatar_image" src="${props.src}" alt="${props.alt || ''}">\n`;
  } else if (props.icon) {
    inner = `\n  ${htmlIcon(String(props.icon))}\n`;
  } else if (props.initials) {
    inner = props.badgeColor || props['badge-color']
      ? `\n  ${props.initials}\n`
      : String(props.initials);
  }

  const badgeColor = props.badgeColor || props['badge-color'];
  const badgeLabel = props.badgeLabel || props['badge-label'];
  const badge = badgeColor
    ? `  <span class="avatar_badge color_${badgeColor}" role="img"${badgeLabel ? ` aria-label="${badgeLabel}"` : ''}></span>\n`
    : '';

  if (props.src || props.icon || badge) {
    return `<span ${attrs}>${inner}${badge}</span>`;
  }
  return `<span ${attrs}>${inner}</span>`;
}

function toHtml(body: string) {
  return body
    .replace(/<AvatarGroup\s+([^>]*?)>/g, (_match, source: string) => {
      const props = parseAttrs(source);
      const label = props.ariaLabel || props['aria-label'] || '';
      return `<div class="avatar_group" data-component="AvatarGroup" role="group"${label ? ` aria-label="${label}"` : ''}>`;
    })
    .replace(/<\/AvatarGroup>/g, '</div>')
    .replace(/<Avatar\s+([^>]*?)\s*\/>/g, (_match, source: string) => htmlAvatar(source));
}

const ATTR_MAP: Record<string, string> = {
  'aria-hidden': 'ariaHidden',
  'aria-label': 'ariaLabel',
  'badge-color': 'badgeColor',
  'badge-label': 'badgeLabel',
};

function gulpArgs(source: string) {
  const props: string[] = [];
  const token = /([\w-]+)(?:="([^"]*)")?/g;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) {
    const raw = match[1];
    const value = match[2];
    const key = ATTR_MAP[raw] ?? raw;
    if (value == null) props.push(`${key}=true`);
    else if (/^-?\d+(\.\d+)?$/.test(value)) props.push(`${key}=${value}`);
    else props.push(`${key}='${value}'`);
  }
  return props.join(', ');
}

function toGulp(body: string) {
  let result = body
    .replace(/<AvatarGroup\s+([^>]*?)>/g, (_match, source: string) => {
      const args = gulpArgs(source.trim());
      return args ? `{% call avatarGroup(${args}) %}` : '{% call avatarGroup() %}';
    })
    .replace(/<\/AvatarGroup>/g, '{% endcall %}')
    .replace(/<Avatar\s+([^>]*?)\s*\/>/g, (_match, source: string) => {
      const args = gulpArgs(source.trim());
      return args ? `{{ avatar(${args}) }}` : '{{ avatar() }}';
    });

  result = result
    .replace(/\{\%\s*call\s+avatarGroup\([^)]*\)\s*\%\}\{\{/g, (match) => match.replace('{{', '\n  {{'))
    .replace(/\}\}\{\{/g, '}}\n  {{')
    .replace(/\}\}\s*\{\%\s*endcall\s*\%\}/g, '}}\n{% endcall %}');

  return `{% from "components/data-display/Avatar/avatar.njk" import avatar, avatarGroup %}\n\n${result.trim()}`;
}

function toReact(body: string) {
  return body
    .replace(/<Avatar\s+([^>]*?)\s*\/>/g, (_match, source: string) => {
      const props = parseAttrs(source);
      const attrs = Object.entries(props)
        .filter(([key]) => key !== 'icon')
        .map(([key, value]) => {
          const camel = key.replace(/-([a-z])/g, (_m, letter: string) => letter.toUpperCase());
          return value === true || booleanProps.has(key) && value === 'true' ? camel : `${camel}="${value}"`;
        });
      if (props.icon) attrs.push(`icon={<Icon name="${props.icon}" className="avatar_icon" />}`);
      return `<Avatar ${attrs.join(' ')} />`;
    });
}

function toVue(body: string) {
  return body
    .replace(/ariaHidden/g, 'aria-hidden')
    .replace(/ariaLabel=/g, 'aria-label=')
    .replace(/badgeColor=/g, 'badge-color=')
    .replace(/badgeLabel=/g, 'badge-label=')
    .replace(/<Avatar\s+([^>]*?)\s*\/>/g, (_match, source: string) => {
      const props = parseAttrs(
        source
          .replace(/ariaHidden/g, 'aria-hidden')
          .replace(/ariaLabel=/g, 'aria-label=')
          .replace(/badgeColor=/g, 'badge-color=')
          .replace(/badgeLabel=/g, 'badge-label=')
      );
      const before = props.icon;
      const attrs = Object.entries(props)
        .filter(([key]) => key !== 'icon')
        .map(([key, value]) => (value === true || booleanProps.has(key) && value === 'true' ? key : `${key}="${value}"`))
        .join(' ');
      if (!before) return `<Avatar ${attrs} />`;
      return `<Avatar ${attrs}>\n  <template #icon><Icon name="${before}" class="avatar_icon" /></template>\n</Avatar>`;
    });
}

const websquare: Record<ExampleKey, string> = {
  basic: `<!-- 이미지 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="avatarBasicExample" class="icon_group">
  <w2:group id="avatarBasicImage" class="avatar">
    <w2:image id="avatarBasicImageResource" class="avatar_image" src="${sample}" alt="홍길동"></w2:image>
  </w2:group>
  <w2:textbox id="avatarBasicInitials" tagname="span" class="avatar color_primary" label="홍" aria-hidden="true"></w2:textbox>
  <w2:group id="avatarBasicIcon" class="avatar color_default" aria-hidden="true">
    <w2:image id="avatarBasicIconResource" class="avatar_icon" src="/images/icons/user.svg" alt=""></w2:image>
  </w2:group>
</w2:group>`,
  sizes: `<w2:group id="avatarSizesExample" class="icon_group">
  <w2:textbox id="avatarSmall" tagname="span" class="avatar avatar_sm color_primary" label="A" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMedium" tagname="span" class="avatar color_primary" label="B" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarLarge" tagname="span" class="avatar avatar_lg color_primary" label="C" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarExtraLarge" tagname="span" class="avatar avatar_xl color_primary" label="D" aria-hidden="true"></w2:textbox>
</w2:group>`,
  shapes: `<w2:group id="avatarShapesExample" class="icon_group">
  <w2:textbox id="avatarCircle" tagname="span" class="avatar color_primary" label="원" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarSquare" tagname="span" class="avatar avatar_square color_primary" label="각" aria-hidden="true"></w2:textbox>
  <w2:group id="avatarSquareImage" class="avatar avatar_square">
    <w2:image id="avatarSquareImageResource" class="avatar_image" src="${sample}" alt="홍길동"></w2:image>
  </w2:group>
</w2:group>`,
  colors: `<!-- 반복 데이터라면 DataList와 w2:generator로 같은 구조를 생성할 수 있습니다. -->
<w2:group id="avatarColorsExample" class="icon_group">
  <w2:textbox id="avatarDefault" tagname="span" class="avatar color_default" label="D" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarPrimary" tagname="span" class="avatar color_primary" label="P" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarSuccess" tagname="span" class="avatar color_success" label="S" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarWarning" tagname="span" class="avatar color_warning" label="W" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarDanger" tagname="span" class="avatar color_danger" label="E" aria-hidden="true"></w2:textbox>
</w2:group>`,
  badge: `<w2:group id="avatarBadgeExample" class="icon_group">
  <w2:group id="avatarOnline" class="avatar color_primary">
    <w2:textbox id="avatarOnlineInitials" tagname="span" label="온"></w2:textbox>
    <w2:group id="avatarOnlineBadge" class="avatar_badge color_success" role="img" aria-label="온라인"></w2:group>
  </w2:group>
  <w2:group id="avatarAway" class="avatar color_default">
    <w2:textbox id="avatarAwayInitials" tagname="span" label="대"></w2:textbox>
    <w2:group id="avatarAwayBadge" class="avatar_badge color_warning" role="img" aria-label="자리 비움"></w2:group>
  </w2:group>
</w2:group>`,
  group: `<w2:group id="avatarGroupExample" class="avatar_group" role="group" aria-label="팀 멤버 4명">
  <w2:textbox id="avatarMember1" tagname="span" class="avatar color_primary" label="김" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember2" tagname="span" class="avatar color_success" label="이" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember3" tagname="span" class="avatar color_warning" label="박" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember4" tagname="span" class="avatar color_danger" label="최" aria-hidden="true"></w2:textbox>
</w2:group>`,
};

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = toHtml(body);
  const gulp = toGulp(body);
  const react = toReact(body);
  const vue = toVue(body);
  const needsIcon = body.includes('icon=');

  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Avatar/Avatar.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Avatar/avatar.njk · ${key}`, code: gulp },
    {
      id: 'vue',
      label: 'Vue',
      fileName: `@uxkm/vue/avatar → apps/vue/src/components/data-display/Avatar/Avatar.vue · ${key}`,
      code: `<script setup>\nimport { Avatar, AvatarGroup } from '@uxkm/vue/avatar';${needsIcon ? "\nimport Icon from '@uxkm/vue/icon';" : ''}\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`,
    },
    {
      id: 'nuxt',
      label: 'Nuxt',
      fileName: `@uxkm/vue/avatar → apps/vue/src/components/data-display/Avatar/Avatar.vue · ${key}`,
      code: `<script setup>\nimport { Avatar, AvatarGroup } from '@uxkm/vue/avatar';${needsIcon ? "\nimport Icon from '@uxkm/vue/icon';" : ''}\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`,
    },
    {
      id: 'react',
      label: 'React',
      fileName: `@uxkm/react/avatar → apps/react/src/components/data-display/Avatar/Avatar.jsx · ${key}`,
      code: `import { Avatar, AvatarGroup } from '@uxkm/react/avatar';${needsIcon ? "\nimport Icon from '@uxkm/react/icon';" : ''}\n\nexport function Example() {\n  return (\n  <>\n${react.split('\n').map((line) => (line.trim() ? `    ${line}` : '')).join('\n')}\n  </>\n  );\n}`,
    },
    {
      id: 'next',
      label: 'Next',
      fileName: `@uxkm/react/avatar → apps/react/src/components/data-display/Avatar/Avatar.jsx · ${key}`,
      code: `import { Avatar, AvatarGroup } from '@uxkm/react/avatar';${needsIcon ? "\nimport Icon from '@uxkm/react/icon';" : ''}\n\nexport function Example() {\n  return (\n  <>\n${react.split('\n').map((line) => (line.trim() ? `    ${line}` : '')).join('\n')}\n  </>\n  );\n}`,
    },
    { id: 'websquare', label: 'WebSquare', fileName: `Avatar.xml · ${key}`, code: websquare[key] },
  ];
}

export const avatarFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
