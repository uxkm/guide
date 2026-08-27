/**
 * Pagination 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initPagination(root = document) {
  const groups = [...root.querySelectorAll('[data-pagination]')];
  groups.forEach((pagination) => {
    if (pagination.dataset.paginationReady === 'true') return;
    pagination.dataset.paginationReady = 'true';
    const totalPages = Math.max(
      1,
      Math.ceil(
        Math.max(0, Number(pagination.dataset.total) || 0) /
          Math.max(1, Number(pagination.dataset.pageSize) || 10),
      ),
    );
    let current = Math.min(totalPages, Math.max(1, Number(pagination.dataset.current) || 1));
    const list = pagination.querySelector('[data-pagination-list]');
    const prev = pagination.querySelector('[data-pagination-prev]');
    const next = pagination.querySelector('[data-pagination-next]');
    const buildPages = () =>
      totalPages <= 7
        ? Array.from({ length: totalPages }, (_, index) => index + 1)
        : current <= 4
          ? [1, 2, 3, 4, 5, 'ellipsis-end', totalPages]
          : current >= totalPages - 3
            ? [
                1,
                'ellipsis-start',
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
              ]
            : [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', totalPages];
    function render() {
      pagination.dataset.current = String(current);
      if (prev) prev.disabled = current <= 1;
      if (next) next.disabled = current >= totalPages;
      const simpleCurrent = pagination.querySelector('.pagination_simple-current');
      const simpleTotal = pagination.querySelector('.pagination_simple-total');
      if (simpleCurrent) simpleCurrent.textContent = String(current);
      if (simpleTotal) simpleTotal.textContent = String(totalPages);
      if (!list) return;
      list.querySelectorAll('[data-pagination-page-item]').forEach((item) => item.remove());
      const nextItem = list.querySelector('[data-pagination-next-item]');
      buildPages().forEach((page) => {
        const item = document.createElement('li');
        item.className = 'pagination_item';
        item.dataset.paginationPageItem = '';
        if (typeof page === 'string')
          item.innerHTML = '<span class="pagination_ellipsis" aria-hidden="true">…</span>';
        else {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = `btn btn_text color_default pagination_link${page === current ? ' is-active' : ''}`;
          button.dataset.page = String(page);
          button.setAttribute(
            'aria-label',
            `${page}페이지${page === current ? ', 현재 페이지' : ''}`,
          );
          if (page === current) button.setAttribute('aria-current', 'page');
          button.innerHTML = `<span class="btn_label">${page}</span>`;
          item.append(button);
        }
        list.insertBefore(item, nextItem);
      });
    }
    function goTo(page) {
      const target = Math.min(totalPages, Math.max(1, page));
      if (target === current) return;
      current = target;
      render();
      pagination.dispatchEvent(
        new CustomEvent('pagination:change', { bubbles: true, detail: { current, totalPages } }),
      );
    }
    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));
    list?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-page]');
      if (button) goTo(Number(button.dataset.page));
    });
    render();
  });
  return groups;
}
