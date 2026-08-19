import { useMemo } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']);
export function buildPaginationPages(totalPages, current) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', totalPages];
  if (current >= totalPages - 3) return [1, 'ellipsis-start', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', totalPages];
}

export function Pagination({ current = 1, total = 1, pageSize = 10, simple = false, minimal = false, size = 'md', round = false, ariaLabel = '페이지 이동', className = '', onChange, ...props }) {
  const resolvedSize = sizes.has(size) ? size : 'md';
  const totalPages = Math.max(1, Math.ceil(Math.max(0, total) / Math.max(1, pageSize)));
  const active = Math.min(totalPages, Math.max(1, current));
  const pages = useMemo(() => buildPaginationPages(totalPages, active), [active, totalPages]);
  const classes = ['pagination', simple && 'pagination_simple', minimal && 'pagination_minimal', resolvedSize !== 'md' && `pagination_${resolvedSize}`, round && 'pagination_round', className].filter(Boolean).join(' ');
  const goTo = (page) => { const next = Math.min(totalPages, Math.max(1, page)); if (next !== active) onChange?.(next); };
  const arrow = (direction) => <Button variant="ghost" color="default" size="sm" iconOnly ripple={false} className={`pagination_btn pagination_${direction}`} ariaLabel={direction === 'prev' ? '이전 페이지' : '다음 페이지'} disabled={direction === 'prev' ? active <= 1 : active >= totalPages} iconBefore={<Icon name={direction === 'prev' ? 'chevron-left' : 'chevron-right'} size="sm" className="pagination_icon" />} onClick={() => goTo(active + (direction === 'prev' ? -1 : 1))} />;
  return <nav {...props} className={classes} aria-label={ariaLabel} data-component="Pagination" data-current={active} data-total-pages={totalPages}>{simple ? <>{arrow('prev')}<span className="pagination_simple-text" aria-live="polite"><span className="pagination_simple-current">{active}</span>{' / '}<span className="pagination_simple-total">{totalPages}</span></span>{arrow('next')}</> : <ul className="pagination_list"><li className="pagination_item">{arrow('prev')}</li>{pages.map((page, index) => typeof page === 'string' ? <li key={`${page}-${index}`} className="pagination_item"><span className="pagination_ellipsis" aria-hidden="true">…</span></li> : <li key={page} className="pagination_item"><Button variant="text" color="default" ripple={false} className={['pagination_link', page === active && 'is-active'].filter(Boolean).join(' ')} aria-current={page === active ? 'page' : undefined} ariaLabel={`${page}페이지${page === active ? ', 현재 페이지' : ''}`} onClick={() => goTo(page)}>{page}</Button></li>) }<li className="pagination_item">{arrow('next')}</li></ul>}</nav>;
}

export default Pagination;
