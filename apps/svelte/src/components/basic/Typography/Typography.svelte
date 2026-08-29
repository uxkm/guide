<!--
  Typography 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script>
const VARIANTS = {
  text: { tag: 'p', className: '' },
  paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' },
  caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' },
  overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' },
  kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' },
  strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' },
  underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' },
  mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' },
  sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' },
  link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' },
};

let {
  variant = 'text',
  tag,
  color,
  size = '',
  ellipsis = undefined,
  href,
  htmlFor,
  cite,
  label,
  onClick,
  onclick,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();=> ['', 'xs', 'sm', 'lg', 'xl'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  ellipsis: { type: [Number, String], default: undefined }, // 말줄임 줄 수입니다.
  href: String, // link 변형의 주소입니다.
  htmlFor: String, // label 변형의 for입니다.
  cite: String, // blockquote 인용 출처입니다.
  label: String, // 기본 slot이 없을 때 표시할 텍스트입니다.
});


let config = $derived(VARIANTS[variant] ?? VARIANTS.text);
let rootTag = $derived(tag || config.tag);
let classes = $derived({
  const lines = Number(ellipsis);
  return [
    config.className,
    color && `color_${color}`,
    size && `size_${size}`,
    lines === 1 ? 'text_ellipsis' : [2, 3].includes(lines) ? `text_ellipsis-${lines}` : '',
  ].filter(Boolean);
});

function handleClick(event) {
  if (variant === 'link' && !href) event.preventDefault();
  onclick?.(event);
}
</script>

<svelte:element this={rootTag}
    class={classes}
    cite={variant === 'blockquote' ? cite : undefined}
    data-component="TypoText"
    for={variant === 'label' ? htmlFor : undefined}
    href={variant === 'link' ? href || '#' : undefined}
    onclick={handleClick}
  >
    {@render children?.() ?? label}
  </svelte:element>
