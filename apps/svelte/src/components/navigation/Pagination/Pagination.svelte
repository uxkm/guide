<!--
  Pagination 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';

// 속성을 계산된 Pagination 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 현재 페이지, 전체 수, 크기, 단순·최소·둥근 변형을 prop으로 받습니다.
let {
  current = 1,
  total = 1,
  pageSize = 10,
  simple = false,
  minimal = false,
  size = 'md',
  round = false,
  ariaLabel = '페이지 이동',
  onCurrent,
  onChange,
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
 // 페이지 변경을 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.

let totalPages = $derived(Math.max(1, Math.ceil(Math.max(0, total) / Math.max(1, pageSize))),
); // 계산된 전체 페이지 수입니다.
let active = $derived(Math.min(totalPages, Math.max(1, current))); // 범위 안으로 보정한 현재 페이지입니다.
let resolvedSize = $derived((['sm', 'md', 'lg'].includes(size) ? size : 'md')); // 검증된 크기입니다.

// 단순·최소·크기·둥근 변형 클래스를 조합합니다.
let classes = $derived([
    'pagination', // Pagination 레이아웃을 활성화하는 필수 클래스입니다.
    simple && 'pagination_simple', // 단순 텍스트형 변형입니다.
    minimal && 'pagination_minimal', // 최소형 변형입니다.
    resolvedSize !== 'md' && `pagination_${resolvedSize}`, // 기본 md가 아닐 때 크기 변형입니다.
    round && 'pagination_round', // 둥근 버튼 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 전체 페이지 수와 현재 페이지를 바탕으로 표시할 번호·말줄임 목록을 만듭니다.
let pages = $derived({
  const count = totalPages;
  const current = active;
  if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', count];
  if (current >= count - 3)
    return [1, 'ellipsis-start', count - 4, count - 3, count - 2, count - 1, count];
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', count];
});

// 범위 안의 페이지로만 이동하고 동일 페이지면 이벤트를 생략합니다.
function goTo(page) {
  const next = Math.min(totalPages, Math.max(1, page));
  if (next === active) return;
  onCurrent?.(next);
  onChange?.(next);
}
</script>

<!-- 단순형 또는 번호 목록형으로 페이지 이동 컨트롤을 렌더합니다. -->
  <nav
    {...rest}
    class={classes}
    aria-label={ariaLabel}
    data-component="Pagination"
    data-current={active}
    data-total-pages={totalPages}
  >
    {#if simple}<><Button
        variant="ghost"
        color="default"
        size="sm"
        icon-only
        ripple={false}
        class="pagination_btn pagination_prev"
        aria-label="이전 페이지"
        disabled={active <= 1}
        onclick={goTo(active - 1)}
        ><#icon-before
          ><Icon name="chevron-left" size="sm" class="pagination_icon" />
