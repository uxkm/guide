<!--
  Skeleton 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
// 선언하지 않은 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 애니메이션·형태·줄 수·접근성 이름을 prop으로 받습니다.
let {
  active = true,
  avatar = false,
  paragraph = false,
  round = false,
  ariaLabel = '콘텐츠 로딩 중',
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();

 // 선언하지 않은 HTML 속성입니다.

// paragraph prop을 실제 줄 수로 변환합니다.
let count = $derived(paragraph === true
    ? 3
    : typeof paragraph === 'number'
      ? Math.max(0, paragraph)
      : 0,
);
// 기본 형태에서 paragraph가 false여도 제목+3줄을 보여 줍니다.
let defaultCount = $derived((paragraph === false ? 3 : count));
// 그룹 루트 클래스와 정적(비활성) 상태를 조합합니다.
let groupClass = $derived(['skeleton_group', !active && 'skeleton_static'].filter(Boolean),
);
// 개별 플레이스홀더 항목 클래스입니다.
let itemClass = $derived(['skeleton', !active && 'skeleton_static'].filter(Boolean));
// 문단 줄별 기본 너비 변형 클래스입니다.
const widths = ['', 'skeleton_w-md', 'skeleton_w-sm'];
</script>

<!-- Skeleton 그룹 루트입니다. -->
  <div
    {...rest}
    class={groupClass}
    data-component="Skeleton"
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label={ariaLabel}
  >
    <!-- 아바타(원) + 본문 줄 행 레이아웃입니다. -->
    {#if avatar}<div class="skeleton_row">
      <span class={[...itemClass, 'skeleton_circle']} aria-hidden="true" />
      {#if count}<div class="skeleton_row-body">
        <span
          {#each count as index}
          key={index}
          class={[...itemClass, 'skeleton_text', widths[index - 1] || 'skeleton_w-lg']}
          aria-hidden="true"
        />
      </div>
    </div>
    <!-- 원형 플레이스홀더만 표시합니다. -->
    {:else if round}<span class={[...itemClass, 'skeleton_circle']} aria-hidden="true" />
    <!-- 제목 + 본문 줄 기본 형태입니다. -->
    {:else}<template>
      <span class={[...itemClass, 'skeleton_title']} aria-hidden="true" />
      <span
        {#each defaultCount as index}
        key={index}
        class={[...itemClass, 'skeleton_text', widths[index - 1]]}
        aria-hidden="true"
      />
