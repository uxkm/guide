import type { FrameworkExample } from './FrameworkCode';
import { tagFrameworkExamples as baseExamples } from './dataDisplayFrameworkExamples';

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

const webSquareExamples: Record<keyof typeof baseExamples, string> = {
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
  Object.entries(baseExamples).map(([key, examples]) => [
    key,
    [
      ...examples,
      {
        id: 'websquare',
        label: 'WebSquare',
        fileName: `Tag.xml · ${key}`,
        code: webSquareExamples[key as keyof typeof webSquareExamples]
      }
    ]
  ])
) as typeof baseExamples;
