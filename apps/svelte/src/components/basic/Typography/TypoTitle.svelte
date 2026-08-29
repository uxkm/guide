<!--
  TypoTitle 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script>
let {
  level = 1,
  color,
  label,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();=> [1, 2, 3, 4, 5, '1', '2', '3', '4', '5'].includes(value),
  }, // 1~5 제목 단계입니다. 허용되지 않으면 1로 되돌립니다.
  color: String, // color_* 공통 색상 클래스입니다.
  label: String, // 기본 slot이 없을 때 표시할 텍스트입니다.
});

let resolvedLevel = $derived([1, 2, 3, 4, 5].includes(Number(level)) ? Number(level) : 1,
);
let rootTag = $derived(`h${resolvedLevel}`);
let classes = $derived([`typo_title-${resolvedLevel}`, color && `color_${color}`].filter(Boolean),
);
</script>

<svelte:element this={rootTag} class={classes} data-component="TypoTitle"
    >{@render children?.() ?? label}</component
  >
