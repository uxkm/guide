import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

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
  simple,
  minimal,
  size = 'md',
  round,
  ariaLabel = '페이지 이동',
  className,
  onChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = useMemo(() => buildPages(totalPages, current), [totalPages, current]);

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      current,
      total,
      pageSize,
      simple,
      minimal,
      size: resolvedSize,
      round,
      ariaLabel,
    },
    createDemoSlots({}),
    rootRef,
    { className, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['pagination'];
    if (simple) classes.push('pagination_simple');
    if (minimal) classes.push('pagination_minimal');
    if (resolvedSize === 'sm') classes.push('pagination_sm');
    if (resolvedSize === 'lg') classes.push('pagination_lg');
    if (round) classes.push('pagination_round');
    return classes;
  }, [simple, minimal, resolvedSize, round]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  function goTo(page) {
    if (page < 1 || page > totalPages || page === current) return;
    onChange?.(page);
  }

  function prev() {
    goTo(current - 1);
  }

  function next() {
    goTo(current + 1);
  }

  const prevButton = (
    <Button
      {...childRippleAttrs}
      variant="ghost"
      size="sm"
      iconOnly
      className="pagination_btn pagination_prev"
      ariaLabel="이전 페이지"
      disabled={current <= 1}
      onClick={prev}
      iconBefore={<Icon name="chevron-left" size="sm" className="pagination_icon" />}
    />
  );

  const nextButton = (
    <Button
      {...childRippleAttrs}
      variant="ghost"
      size="sm"
      iconOnly
      className="pagination_btn pagination_next"
      ariaLabel="다음 페이지"
      disabled={current >= totalPages}
      onClick={next}
      iconBefore={<Icon name="chevron-right" size="sm" className="pagination_icon" />}
    />
  );

  return (
    <nav
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-label={ariaLabel}
      {...rippleAttrs}
      {...domRest}
    >
      {simple ? (
        <>
          {prevButton}
          <span className="pagination_simple-text">
            <span className="pagination_simple-current">{current}</span>
            {' / '}
            <span className="pagination_simple-total">{totalPages}</span>
          </span>
          {nextButton}
        </>
      ) : (
        <ul className="pagination_list">
          <li className="pagination_item">{prevButton}</li>
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
          <li className="pagination_item">{nextButton}</li>
        </ul>
      )}
    </nav>
  );
}
