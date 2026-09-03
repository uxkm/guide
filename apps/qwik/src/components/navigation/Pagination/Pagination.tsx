import { component$ } from '@builder.io/qwik';
/**
 * Pagination 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import Button from '../../basic/Button/Button.tsx';
import Icon from '../../basic/Icon/Icon.tsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 페이지네이션 크기입니다.

// 전체 페이지 수와 현재 페이지를 바탕으로 표시할 번호·말줄임 목록을 만듭니다.
export const buildPaginationPages = component$((totalPages, current) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', totalPages];
  if (current >= totalPages - 3)
    return [
      1,
      'ellipsis-start',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', totalPages];
});

export const Pagination = component$(({
  current = 1, // 현재 선택된 페이지 번호입니다.
  total = 1, // 전체 항목 수입니다.
  pageSize = 10, // 페이지당 항목 수입니다.
  simple = false, // 이전/다음과 현재/전체 텍스트만 표시할지 여부입니다.
  minimal = false, // 시각적으로 더 간결한 변형인지 여부입니다.
  size = 'md', // 컨트롤의 크기를 지정합니다.
  round = false, // 둥근 버튼 형태를 사용할지 여부입니다.
  ariaLabel = '페이지 이동', // 내비게이션의 접근 가능한 이름을 지정합니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 페이지가 바뀔 때 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 nav에 전달합니다.
}) {
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const totalPages = Math.max(1, Math.ceil(Math.max(0, total) / Math.max(1, pageSize))); // 계산된 전체 페이지 수입니다.
  const active = Math.min(totalPages, Math.max(1, current)); // 범위 안으로 보정한 현재 페이지입니다.
  const pages = buildPaginationPages(totalPages, active); // 표시할 페이지 토큰입니다.

  // 단순·최소·크기·둥근 변형 클래스를 조합합니다.
  const classes = [
    'pagination', // Pagination 레이아웃을 활성화하는 필수 클래스입니다.
    simple && 'pagination_simple', // 단순 텍스트형 변형입니다.
    minimal && 'pagination_minimal', // 최소형 변형입니다.
    resolvedSize !== 'md' && `pagination_${resolvedSize}`, // 기본 md가 아닐 때 크기 변형입니다.
    round && 'pagination_round', // 둥근 버튼 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 범위 안의 페이지로만 이동하고 동일 페이지면 콜백을 생략합니다.
  const goTo = (page) => {
    const next = Math.min(totalPages, Math.max(1, page));
    if (next !== active) onChange?.(next);
  };

  // 이전·다음 화살표 버튼을 공통으로 렌더합니다.
  const arrow = (direction) => (
    <Button
      variant="ghost"
      color="default"
      size="sm"
      iconOnly
      ripple={false}
      class={`pagination_btn pagination_${direction}`}
      ariaLabel={direction === 'prev' ? '이전 페이지' : '다음 페이지'}
      disabled={direction === 'prev' ? active <= 1 : active >= totalPages}
      iconBefore={
        <Icon
          name={direction === 'prev' ? 'chevron-left' : 'chevron-right'}
          size="sm"
          class="pagination_icon"
        />
      }
      onClick$={() => goTo(active + (direction === 'prev' ? -1 : 1))}
    />
  );

  return (
    <nav
      {...props}
      class={classes}
      aria-label={ariaLabel}
      data-component="Pagination"
      data-current={active}
      data-total-pages={totalPages}
    >
      {simple ? (
        <>
          {arrow('prev')}
          <span class="pagination_simple-text" aria-live="polite">
            <span class="pagination_simple-current">{active}</span>
            {' / '}
            <span class="pagination_simple-total">{totalPages}</span>
          </span>
          {arrow('next')}
        </>
      ) : (
        <ul class="pagination_list">
          <li class="pagination_item">{arrow('prev')}</li>
          {pages.map((page, index) =>
            typeof page === 'string' ? (
              <li key={`${page}-${index}`} class="pagination_item">
                <span class="pagination_ellipsis" aria-hidden="true">
                  …
                </span>
              </li>
            ) : (
              <li key={page} class="pagination_item">
                <button
                  type="button"
                  class={['pagination_link', page === active && 'is-active']
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={page === active ? 'page' : undefined}
                  aria-label={`${page}페이지${page === active ? ', 현재 페이지' : ''}`}
                  onClick$={() => goTo(page)}
                >
                  {page}
                </button>
              </li>
            ),
          )}
          <li class="pagination_item">{arrow('next')}</li>
        </ul>
      )}
    </nav>
  );
});

export default Pagination;
