export const emptyPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const emptyProps = [
  { name: 'description', type: 'ReactNode', default: '—', description: '설명 콘텐츠. children이 있으면 children 우선' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'empty_sm · empty_lg' },
  { name: 'simple', type: 'boolean', default: 'false', description: '아이콘 숨김 (empty_simple)' },
  { name: 'block', type: 'boolean', default: 'false', description: '가운데 블록 정렬 (empty_block)' },
  { name: 'image', type: 'ReactNode', default: '—', description: '커스텀 이미지·아이콘 (empty_image)' },
  { name: 'footer', type: 'ReactNode', default: '—', description: '하단 액션 영역 (empty_footer)' },
  { name: 'className', type: 'string', default: '—', description: 'empty 루트에 추가 클래스' },
];

export const emptyChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const emptyChildren = [
  { name: 'image', description: 'empty_image에 렌더링하는 일러스트·아이콘 React 노드' },
  { name: 'children', description: 'description 대신 표시하는 React children' },
  { name: 'footer', description: 'empty_footer에 렌더링하는 액션 버튼·링크 React 노드' },
];

/** @deprecated 가이드·Storybook은 emptyChildColumns · emptyChildren 사용 */
export const emptySlotColumns = emptyChildColumns;

/** @deprecated */
export const emptySlots = emptyChildren;

export const emptyClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const emptyClasses = [
  { name: 'empty · empty_image · empty_desc · empty_footer', description: '루트·이미지·설명·푸터' },
  { name: 'empty_sm · empty_lg · empty_simple · empty_block', description: '크기·변형' },
  { name: 'role="status"', description: '빈 상태 시맨틱' },
];

export const emptyTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const emptyTokens = [
  { name: '--empty-gap · --empty-padding-y · --empty-padding-x', default: '—', description: '간격·패딩' },
  { name: '--empty-image-size · --empty-image-size-sm · --empty-image-size-lg', default: '4rem · 3rem · 5rem', description: '아이콘 크기' },
  { name: '--empty-desc-size · --empty-desc-max-width', default: 'var(--text-size-sm) · 20rem', description: '설명 타이포' },
];

export const markupCode = `<!-- 기본 -->
<div class="empty" role="status">
  <div class="empty_image" aria-hidden="true">
    <!-- SVG 또는 img -->
  </div>
  <p class="empty_desc">데이터가 없습니다</p>
</div>

<!-- 액션 버튼 -->
<div class="empty" role="status">
  <div class="empty_image" aria-hidden="true">…</div>
  <p class="empty_desc">등록된 프로젝트가 없습니다.</p>
  <div class="empty_footer">
    <button type="button"
      class="btn btn_filled color_primary btn_sm">
      <span class="btn_label">프로젝트 만들기</span>
    </button>
  </div>
</div>

<!-- 테이블·목록 셀 — 아이콘 생략 -->
<div class="empty empty_simple empty_sm empty_block" role="status">
  <p class="empty_desc">항목 없음</p>
</div>`;
