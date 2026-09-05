import type { FrameworkExample } from './FrameworkCode';

import tagHtmlComponent from '../../html/src/components/data-display/Tag/Tag.html?raw';
import tagGulpComponent from '../../gulp/src/components/data-display/Tag/tag.njk?raw';
import tagReactComponent from '../../react/src/components/data-display/Tag/Tag.jsx?raw';
import tagVueComponent from '../../vue/src/components/data-display/Tag/Tag.vue?raw';
import tagGroupVueComponent from '../../vue/src/components/data-display/Tag/TagGroup.vue?raw';

const tagVueComponents = `${tagVueComponent}\n\n<!-- TagGroup.vue -->\n${tagGroupVueComponent}`;

export const tagComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/data-display/Tag/Tag.html', code: tagHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/data-display/Tag/tag.njk', code: tagGulpComponent },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/data-display/Tag/Tag.vue · TagGroup.vue', code: tagVueComponents },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/tag → Tag.vue · TagGroup.vue', code: tagVueComponents },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/data-display/Tag/Tag.jsx', code: tagReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/tag → Tag.jsx', code: tagReactComponent }
];

type ExampleKey =
  | 'basic'
  | 'solid'
  | 'outline'
  | 'sizes'
  | 'round'
  | 'icon'
  | 'closable'
  | 'checkable'
  | 'add'
  | 'link'
  | 'disabled'
  | 'group';

const bodies: Record<ExampleKey, string> = {
  basic: `<Tag color="default" label="Default" />
<Tag color="primary" label="Primary" />
<Tag color="success" label="Success" />
<Tag color="warning" label="Warning" />
<Tag color="danger" label="Danger" />`,
  solid: `<Tag variant="solid" color="default" label="Default" />
<Tag variant="solid" color="primary" label="Primary" />
<Tag variant="solid" color="success" label="Success" />
<Tag variant="solid" color="warning" label="Warning" />
<Tag variant="solid" color="danger" label="Danger" />`,
  outline: `<Tag variant="outline" color="default" label="Default" />
<Tag variant="outline" color="primary" label="Primary" />
<Tag variant="outline" color="success" label="Success" />
<Tag variant="outline" color="warning" label="Warning" />
<Tag variant="outline" color="danger" label="Danger" />`,
  sizes: `<TagGroup tight>
  <Tag size="sm" label="Small" />
  <Tag label="Medium" />
  <Tag size="lg" label="Large" />
</TagGroup>`,
  round: `<Tag round label="Filled" />
<Tag round variant="outline" label="Outline" />
<Tag round variant="solid" label="Solid" />
<Tag round variant="borderless" color="default" label="Borderless" />`,
  icon: `<Tag label="Design" icon="star" />
<Tag variant="outline" color="success" label="Verified" icon="check" />
<Tag variant="solid" color="danger" label="Error" icon="close" />`,
  closable: `<Tag closable label="React" closeLabel="React 태그 제거" />
<Tag closable variant="outline" color="default" label="Svelte" />
<Tag closable variant="solid" color="danger" label="Deprecated" />`,
  checkable: `<TagGroup ariaLabel="카테고리 필터">
  <Tag checkable selected color="default" label="전체" />
  <Tag checkable color="default" label="UI" />
  <Tag checkable color="default" label="UX" />
</TagGroup>`,
  add: `<Tag add round label="태그 추가" icon="plus" />
<Tag add size="sm" label="+ New Tag" />
<Tag add size="lg" round label="+ 카테고리 추가" />`,
  link: `<Tag href="#" label="문서 보기" />
<Tag href="#" variant="outline" label="가이드" />
<Tag href="#" round variant="outline" color="success" label="외부 링크" icon="external" />`,
  disabled: `<Tag disabled label="Filled" />
<Tag disabled variant="outline" color="success" label="Outline" />
<Tag disabled checkable selected color="default" label="선택됨 (비활성)" />`,
  group: `<TagGroup>
  <Tag label="HTML" />
  <Tag label="CSS" />
  <Tag color="success" label="SCSS" />
</TagGroup>`
};

const booleanProps = new Set(['round', 'checkable', 'add', 'closable', 'selected', 'disabled', 'tight']);

function parseAttrs(source: string) {
  const props: Record<string, string | true> = {};
  const token = /([\w-]+)(?:="([^"]*)")?/g;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) props[match[1]] = match[2] == null ? true : match[2];
  return props;
}

function htmlTag(source: string) {
  const props = parseAttrs(source);
  const tagName = props.checkable || props.add ? 'button' : props.href ? 'a' : 'span';
  const classes = [
    'tag',
    `color_${props.color || 'primary'}`,
    props.variant && props.variant !== 'filled' && `tag_${props.variant}`,
    props.size && props.size !== 'md' && `tag_${props.size}`,
    props.round && 'tag_round',
    props.checkable && 'tag_checkable',
    props.add && 'tag_add',
    props.selected && 'is-selected',
    props.disabled && 'is-disabled'
  ].filter(Boolean).join(' ');
  const content = props.label ? String(props.label) : '';
  const icon = props.icon ? `\n  <span class="tag_icon" aria-hidden="true">${String(props.icon)}</span>` : '';
  const closeLabel = props.closeLabel ? String(props.closeLabel) : `${content || '태그'} 태그 제거`;
  const close = props.closable
    ? `\n  <button class="tag_close" type="button" aria-label="${closeLabel}">×</button>`
    : '';
  return `<${tagName} class="${classes}" data-component="Tag"${props.href && tagName === 'a' ? ` href="${props.href}"` : ''}${props.checkable ? ` type="button" aria-pressed="${props.selected ? 'true' : 'false'}"` : ''}${props.add ? ' type="button"' : ''}${props.disabled && tagName === 'button' ? ' disabled' : ''}${props.disabled && tagName !== 'button' ? ' aria-disabled="true"' : ''}>${icon}${icon || close ? `\n  ${content}` : content}${close}${icon || close ? '\n' : ''}</${tagName}>`;
}

function toHtml(body: string) {
  return body
    .replace(/<TagGroup\s*([^>]*)>/g, (_m, source: string) => {
      const props = parseAttrs(source);
      return `<div class="tag_group${props.tight ? ' tag_group-tight' : ''}" data-component="TagGroup" role="group"${props.ariaLabel ? ` aria-label="${props.ariaLabel}"` : ''}>`;
    })
    .replace(/<\/TagGroup>/g, '</div>')
    .replace(/<Tag\s+([^>]*?)\s*\/>/g, (_m, source: string) => htmlTag(source));
}

function toGulp(body: string) {
  const map: Record<string, string> = { closeLabel: 'closeLabel', ariaLabel: 'ariaLabel' };
  function args(source: string) {
    const props: string[] = [];
    const parsed = parseAttrs(source);
    Object.entries(parsed).forEach(([key, value]) => {
      const name = map[key] ?? key;
      if (value === true) props.push(`${name}=true`);
      else props.push(`${name}='${String(value)}'`);
    });
    return props.join(', ');
  }
  let out = body
    .replace(/<TagGroup\s*([^>]*)>/g, (_m, source: string) => `{% call tagGroup(${args(source)}) %}`)
    .replace(/<\/TagGroup>/g, '{% endcall %}')
    .replace(/<Tag\s+([^>]*?)\s*\/>/g, (_m, source: string) => `{{ tag(${args(source)}) }}`);
  out = out.replace(/\{\% call tagGroup\((.*?)\) \%\}\s*\{\{/g, '{% call tagGroup($1) %}\n  {{').replace(/\}\}\s*\{\% endcall \%\}/g, '}}\n{% endcall %}');
  return `{% from "components/data-display/Tag/tag.njk" import tag, tagGroup %}\n\n${out.trim()}`;
}

function toReact(body: string) {
  return body.replace(/<Tag\s+([^>]*?)\s*\/>/g, (_m, source: string) => {
    const props = parseAttrs(source);
    const attrs = Object.entries(props).filter(([key]) => key !== 'icon').map(([key, value]) => (value === true || (booleanProps.has(key) && value === 'true') ? key : `${key}="${value}"`));
    if (props.icon) attrs.push(`icon={<Icon name="${props.icon}" />}`);
    return `<Tag ${attrs.join(' ')} />`;
  });
}

function toVue(body: string) {
  return body
    .replace(/ariaLabel=/g, 'aria-label=')
    .replace(/closeLabel=/g, 'close-label=')
    .replace(/<Tag\s+([^>]*?)\s*\/>/g, (_m, source: string) => {
      const normalized = source.replace(/ariaLabel=/g, 'aria-label=').replace(/closeLabel=/g, 'close-label=');
      const props = parseAttrs(normalized);
      const attrs = Object.entries(props).filter(([key]) => key !== 'icon').map(([key, value]) => (value === true || (booleanProps.has(key) && value === 'true') ? key : `${key}="${value}"`)).join(' ');
      if (!props.icon) return `<Tag ${attrs} />`;
      return `<Tag ${attrs}>\n  <template #icon><Icon name="${props.icon}" /></template>\n</Tag>`;
    });
}

type WebSquareTagOptions = {
  add?: boolean;
  checkable?: boolean;
  closable?: boolean;
  color?: string;
  disabled?: boolean;
  href?: string;
  icon?: string;
  round?: boolean;
  selected?: boolean;
  size?: string;
  variant?: string;
};

function webSquareTag(id: string, label: string, options: WebSquareTagOptions = {}) {
  const classes = [
    'tag', `color_${options.color ?? 'primary'}`,
    options.variant && options.variant !== 'filled' && `tag_${options.variant}`,
    options.size && options.size !== 'md' && `tag_${options.size}`,
    options.round && 'tag_round', options.checkable && 'tag_checkable', options.add && 'tag_add',
    options.selected && 'is-selected', options.disabled && 'is-disabled'
  ].filter(Boolean).join(' ');
  const iconNote = options.icon
    ? `  <!-- ${options.icon} 아이콘은 프로젝트 이미지 또는 CSS background-image 리소스에 연결합니다. -->\n`
    : '';

  if (options.closable) {
    return `<w2:group id="${id}" class="${classes}">
${iconNote}  <w2:textbox id="${id}Label" tagname="span"${options.icon ? ' class="tag_icon-label"' : ''} label="${label}"></w2:textbox>
  <xf:trigger id="${id}Close" type="button" class="tag_close" tooltip="${label} 태그 제거"${options.disabled ? ' disabled="true"' : ` ev:onclick="scwin.tagClose_onclick"`}>
    <xf:label><![CDATA[×]]></xf:label>
  </xf:trigger>
</w2:group>`;
  }

  if (options.checkable || options.add) {
    return `${iconNote}<xf:trigger
  id="${id}"
  type="button"
  class="${classes}"
  data-ripple="true"${options.checkable ? `
  aria-pressed="${options.selected ? 'true' : 'false'}"` : ''}${options.disabled ? `
  disabled="true"` : `
  ev:onclick="scwin.tag_onclick"`}>
  <xf:label><![CDATA[${label}]]></xf:label>
</xf:trigger>`;
  }

  if (options.href) {
    return `${iconNote}<w2:anchor id="${id}" class="${classes}" href="${options.href}">
  <xf:label><![CDATA[${label}]]></xf:label>
</w2:anchor>`;
  }

  return `${iconNote}<w2:textbox id="${id}" tagname="span" class="${classes}" label="${label}"${options.disabled ? ' aria-disabled="true"' : ''}></w2:textbox>`;
}

function webSquareGroup(id: string, tags: string[], tight = false, ariaLabel?: string) {
  return `<w2:group id="${id}" class="tag_group${tight ? ' tag_group-tight' : ''}" role="group"${ariaLabel ? ` aria-label="${ariaLabel}"` : ''}>
${tags.join('\n').split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

const colors = ['default', 'primary', 'success', 'warning', 'danger', 'info'];
const colorExample = (variant = 'filled') => webSquareGroup(
  `tag${variant[0].toUpperCase()}${variant.slice(1)}Example`,
  colors.map((color) => webSquareTag(`tag${variant}${color}`, color, { color, variant }))
);

const webSquareExamples: Record<ExampleKey, string> = {
  basic: colorExample(),
  solid: colorExample('solid'),
  outline: colorExample('outline'),
  sizes: webSquareGroup('tagSizesExample', [
    webSquareTag('tagSmall', 'Small', { size: 'sm' }),
    webSquareTag('tagMedium', 'Medium'),
    webSquareTag('tagLarge', 'Large', { size: 'lg' })
  ], true),
  round: webSquareGroup('tagRoundExample', [
    webSquareTag('tagRoundFilled', 'Filled', { round: true }),
    webSquareTag('tagRoundOutline', 'Outline', { round: true, variant: 'outline' }),
    webSquareTag('tagRoundSolid', 'Solid', { round: true, variant: 'solid' })
  ]),
  icon: webSquareGroup('tagIconExample', [webSquareTag('tagDesign', 'Design', { icon: 'star' })]),
  closable: webSquareGroup('tagClosableExample', [webSquareTag('tagReact', 'React', { closable: true })], true),
  checkable: webSquareGroup('tagCheckableExample', [
    webSquareTag('tagAll', '전체', { checkable: true, color: 'default', selected: true }),
    webSquareTag('tagUi', 'UI', { checkable: true, color: 'default' })
  ], false, '카테고리 필터'),
  add: webSquareGroup('tagAddExample', [webSquareTag('tagAdd', '+ 태그 추가', { add: true, round: true })]),
  link: webSquareGroup('tagLinkExample', [webSquareTag('tagGuide', '가이드', { href: '#', variant: 'outline' })]),
  disabled: webSquareGroup('tagDisabledExample', [
    webSquareTag('tagDisabledStatic', 'Filled', { disabled: true }),
    webSquareTag('tagDisabledCheckable', '선택됨', { checkable: true, color: 'default', disabled: true, selected: true })
  ]),
  group: webSquareGroup('tagGroupExample', [
    webSquareTag('tagHtml', 'HTML'),
    webSquareTag('tagCss', 'CSS'),
    webSquareTag('tagScss', 'SCSS', { color: 'success' })
  ])
};

export const tagFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => {
    const body = bodies[key];
    const react = toReact(body);
    const vue = toVue(body);
    const needsIcon = body.includes('icon=');
    return [key, [
      { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Tag/Tag.html · ${key}`, code: toHtml(body) },
      { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Tag/tag.njk · ${key}`, code: toGulp(body) },
      { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/tag → apps/vue/src/components/data-display/Tag/Tag.vue · ${key}`, code: `<script setup>\nimport { Tag, TagGroup } from '@uxkm/vue/tag';${needsIcon ? "\nimport Icon from '@uxkm/vue/icon';" : ''}\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>` },
      { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/tag → apps/vue/src/components/data-display/Tag/Tag.vue · ${key}`, code: `<script setup>\nimport { Tag, TagGroup } from '@uxkm/vue/tag';${needsIcon ? "\nimport Icon from '@uxkm/vue/icon';" : ''}\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>` },
      { id: 'react', label: 'React', fileName: `@uxkm/react/tag → apps/react/src/components/data-display/Tag/Tag.jsx · ${key}`, code: `import { Tag, TagGroup } from '@uxkm/react/tag';${needsIcon ? "\nimport Icon from '@uxkm/react/icon';" : ''}\n\nexport function Example() {\n  return (\n  <>\n${react.split('\n').map((line) => line.trim() ? `    ${line}` : '').join('\n')}\n  </>\n  );\n}` },
      { id: 'next', label: 'Next', fileName: `@uxkm/react/tag → apps/react/src/components/data-display/Tag/Tag.jsx · ${key}`, code: `import { Tag, TagGroup } from '@uxkm/react/tag';${needsIcon ? "\nimport Icon from '@uxkm/react/icon';" : ''}\n\nexport function Example() {\n  return (\n  <>\n${react.split('\n').map((line) => line.trim() ? `    ${line}` : '').join('\n')}\n  </>\n  );\n}` },
      { id: 'websquare', label: 'WebSquare', fileName: `Tag.xml · ${key}`, code: webSquareExamples[key] }
    ]];
  })
) as Record<ExampleKey, FrameworkExample[]>;
