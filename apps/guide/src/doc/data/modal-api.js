import { ripplePropTrigger, rippleClassRows } from '@/doc/data/ripple-api';
export const modalPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const modalProps = [
  { name: 'id', type: 'string', default: '—', description: '루트 id (필수, data-modal-trigger 연결)' },
  { name: 'title', type: 'string', default: '—', description: '기본 헤더 제목 (modal_title)' },
  { name: 'size', type: `'sm' | 'md' | 'lg' | 'fullscreen'`, default: 'md', description: 'modal_sm · modal_lg · modal_fullscreen' },
  { name: 'scrollable', type: 'boolean', default: 'false', description: '본문 스크롤 (modal_scrollable)' },
  { name: 'backdrop', type: 'boolean', default: 'true', description: '백드롭 표시 (false → data-modal-backdrop="false")' },
  { name: 'open', type: 'boolean', default: 'false', description: '열림 상태 (is-open, hidden 해제)' },
  {
    name: 'footerAlign',
    type: `'start' | 'center' | 'end' | 'between' | 'even'`,
    default: 'end',
    description: '푸터 정렬 (modal_footer-start · center · between · even). between은 modal_footer-group으로 좌·우 묶음',
  },
  {
    name: 'footerRatio',
    type: `'1-1' | '1-2' | '2-1'`,
    default: '1-1',
    description: '균등 정렬(even) 좌·우 비율 (modal_footer-even-1-2 · even-2-1)',
  },
  {
    name: 'footerNoPadBottom',
    type: 'boolean',
    default: 'false',
    description: '푸터 하단 패딩 제거 (modal_footer-no-pad-b). even과 함께 쓰면 좌우 패딩·간격도 제거',
  },
  { name: 'header', type: 'ReactNode', default: '—', description: '커스텀 헤더 (title 대체)' },
  { name: 'footer', type: 'ReactNode', default: '—', description: '하단 액션 영역 (modal_footer)' },
  { name: 'className', type: 'string', default: '—', description: 'modal 루트에 추가 클래스' },
  ripplePropTrigger,
];

export const modalChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const modalChildren = [
  { name: 'header', description: '헤더 (title 대체)' },
  { name: 'children', description: '본문 (modal_body, Vue default 슬롯 대응)' },
  { name: 'footer', description: '하단 액션 (modal_footer)' },
];

/** @deprecated 가이드·Storybook은 modalChildColumns · modalChildren 사용 */
export const modalSlotColumns = modalChildColumns;

/** @deprecated */
export const modalSlots = modalChildren;

export const modalClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const modalClasses = [
  { name: 'modal · modal_backdrop · modal_dialog', description: '루트·백드롭·대화상자' },
  { name: 'modal_header · modal_title · modal_close · modal_body · modal_footer', description: '구조 파트' },
  {
    name: 'modal_footer-start · modal_footer-center · modal_footer-end · modal_footer-between · modal_footer-even',
    description: '푸터 정렬 (기본 end)',
  },
  {
    name: 'modal_footer-even-1-2 · modal_footer-even-2-1',
    description: '균등 정렬 좌·우 비율 (기본 1:1)',
  },
  {
    name: 'modal_footer-no-pad-b',
    description: '푸터 하단 패딩 없음 (even 조합 시 좌우 패딩·간격 제거)',
  },
  { name: 'modal_footer-group', description: '병합 정렬용 좌·우 버튼 묶음' },
  { name: 'modal_sm · modal_lg · modal_fullscreen · modal_scrollable', description: '크기·스크롤' },
  { name: 'data-modal · data-modal-trigger · data-modal-close', description: 'JS 연동 속성' },
  { name: 'is-open · is-stack-covered · hidden', description: '열림·중첩 하위(백드롭 숨김)·닫힘 상태' },
  { name: 'role="dialog" · aria-modal="true"', description: '접근성 시맨틱' },
  ...rippleClassRows,
];

export const modalTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const modalTokens = [
  { name: '--modal-z-index', default: '300', description: '레이어 순서' },
  { name: '--modal-width · --modal-width-sm · --modal-width-lg', default: '32rem · 24rem · 48rem', description: '대화상자 너비' },
  { name: '--modal-bg · --modal-radius · --modal-shadow', default: '—', description: '배경·모서리·그림자' },
];

export const markupCode = `<!-- 트리거 -->
<button type="button" data-modal-trigger="#modal-1"
  aria-controls="modal-1" aria-expanded="false">
  모달 열기
</button>

<!-- Modal -->
<div class="modal" id="modal-1" data-modal
  role="dialog" aria-modal="true" aria-labelledby="modal-1-title"
  tabindex="-1" hidden>
  <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
  <div class="modal_dialog">
    <div class="modal_header">
      <h2 class="modal_title" id="modal-1-title">제목</h2>
      <button type="button" class="modal_close"
        data-modal-close aria-label="닫기">…</button>
    </div>
    <div class="modal_body">본문</div>
    <div class="modal_footer">
      <button type="button" class="btn btn_ghost" data-modal-close>취소</button>
      <button type="button" class="btn btn_filled color_primary" data-modal-close>확인</button>
    </div>
  </div>
</div>

<!-- 푸터 정렬: start · center · end · between · even -->
<!-- 균등 비율: modal_footer-even · modal_footer-even-1-2 · modal_footer-even-2-1 -->
<!-- 하단 패딩 없음: modal_footer-no-pad-b (+ even 권장) -->
<div class="modal_footer modal_footer-even modal_footer-no-pad-b">
  <button type="button" class="btn btn_ghost" data-modal-close>취소</button>
  <button type="button" class="btn btn_filled color_primary" data-modal-close>확인</button>
</div>

<!-- 옵션: 백드롭 없음 (React) -->
<Modal id="modal-plain" backdrop={false} …>…</Modal>

<!-- 옵션: 백드롭 없음 (HTML) -->
<div class="modal" id="modal-plain" data-modal
  data-modal-backdrop="false" …>…</div>

<!-- 옵션: 스크롤 본문 -->
<div class="modal modal_scrollable" id="modal-long" data-modal …>…</div>`;
