import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Pagination', {
  defaults: { current: 1, total: 1, pageSize: 10, ariaLabel: '페이지 이동', size: 'md' },
  booleanProps: new Set(['simple', 'minimal', 'round', 'ripple']),
  selfClosing: false,
});

function buildPages(totalPages, current) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const result = [];
  if (current <= 4) {
    for (let i = 1; i <= 5; i += 1) result.push(i);
    result.push('ellipsis-end');
    result.push(totalPages);
  } else if (current >= totalPages - 3) {
    result.push(1);
    result.push('ellipsis-start');
    for (let i = totalPages - 4; i <= totalPages; i += 1) result.push(i);
  } else {
    result.push(1);
    result.push('ellipsis-start');
    for (let i = current - 1; i <= current + 1; i += 1) result.push(i);
    result.push('ellipsis-end');
    result.push(totalPages);
  }
  return result;
}

export default function Pagination({
  ripple,
  current = 1,
  total = 1,
  pageSize = 10,
  simple = false,
  minimal = false,
  size = 'md',
  round = false,
  ariaLabel = '페이지 이동',
  onUpdateCurrent,
  onChange,
  children,
  className,
  ...rest
}) {
  const props = { ripple, current, total, pageSize, simple, minimal, size, round, ariaLabel };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = buildPages(totalPages, current);

  const goTo = (page) => {
    if (page < 1 || page > totalPages || page === current) return;
    onUpdateCurrent?.(page);
    onChange?.(page);
  };

  const rootClass = cn(
    'pagination',
    simple && 'pagination_simple',
    minimal && 'pagination_minimal',
    size === 'sm' && 'pagination_sm',
    size === 'lg' && 'pagination_lg',
    round && 'pagination_round',
    className,
  );

  const prevBtn = (
    <Button
      {...childRippleAttrs}
      variant="ghost"
      size="sm"
      iconOnly
      className="pagination_btn pagination_prev"
      aria-label="이전 페이지"
      disabled={current <= 1}
      onClick={() => goTo(current - 1)}
      iconBefore={<Icon name="chevron-left" size="sm" className="pagination_icon" />}
    />
  );

  const nextBtn = (
    <Button
      {...childRippleAttrs}
      variant="ghost"
      size="sm"
      iconOnly
      className="pagination_btn pagination_next"
      aria-label="다음 페이지"
      disabled={current >= totalPages}
      onClick={() => goTo(current + 1)}
      iconBefore={<Icon name="chevron-right" size="sm" className="pagination_icon" />}
    />
  );

  return (
    <nav ref={rootRef} {...rippleAttrs} className={rootClass} aria-label={ariaLabel}>
      {simple ? (
        <>
          {prevBtn}
          <span className="pagination_simple-text">
            <span className="pagination_simple-current">{current}</span>/
            <span className="pagination_simple-total">{totalPages}</span>
          </span>
          {nextBtn}
        </>
      ) : (
        <ul className="pagination_list">
          <li className="pagination_item">{prevBtn}</li>
          {pages.map((page, index) =>
            typeof page === 'string' ? (
              <li key={`${page}-${index}`} className="pagination_item">
                <span className="pagination_ellipsis" aria-hidden="true">
                  …
                </span>
              </li>
            ) : (
              <li key={`${page}-${index}`} className="pagination_item">
                <Button
                  {...childRippleAttrs}
                  variant="text"
                  className={cn('pagination_link', page === current && 'is-active')}
                  aria-current={page === current ? 'page' : undefined}
                  onClick={() => goTo(page)}
                >
                  {page}
                </Button>
              </li>
            ),
          )}
          <li className="pagination_item">{nextBtn}</li>
        </ul>
      )}
    </nav>
  );
}
