import { ripplePropTrigger, rippleClassRows } from '@/doc/data/ripple-api';
export const drawerPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const drawerProps = [
  { name: 'id', type: 'string', default: '—', description: '루트 id (필수)' },
  { name: 'title', type: 'string', default: '—', description: '패널 제목 (drawer_title)' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'drawer_sm · drawer_lg' },
  { name: 'placement', type: `'left' | 'right' | 'top' | 'bottom'`, default: 'right', description: 'drawer_placement-*' },
  { name: 'no-backdrop', type: 'boolean', default: 'false', description: 'data-drawer-backdrop="false"' },
  { name: 'open-on-load', type: 'boolean', default: 'false', description: 'data-drawer-open-on-load="true"' },
  { name: 'open', type: 'boolean', default: 'false', description: '열림 상태 (is-open)' },
  ripplePropTrigger,
];

export const drawerSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const drawerSlots = [
  { name: 'header', description: '헤더 (title 대체)' },
  { name: 'extra', description: '헤더 보조 영역 (drawer_extra)' },
  { name: 'default', description: '본문 (drawer_body)' },
  { name: 'footer', description: '하단 액션 (drawer_footer)' },
];

export const drawerClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const drawerClasses = [
  { name: 'drawer · drawer_backdrop · drawer_panel', description: '루트·백드롭·패널' },
  { name: 'drawer_header · drawer_title · drawer_extra · drawer_close', description: '헤더 파트' },
  { name: 'drawer_body · drawer_footer', description: '본문·푸터' },
  { name: 'drawer_placement-left · drawer_placement-right · drawer_placement-top · drawer_placement-bottom', description: '슬라이드 방향' },
  { name: 'drawer_sm · drawer_lg', description: '패널 크기' },
  { name: 'data-drawer · data-drawer-trigger · data-drawer-close', description: 'JS 연동 속성' },
  { name: 'data-drawer-open-on-load', description: '페이지 로드 후 자동 열기' },
  { name: 'is-open · is-opening · is-closing · hidden', description: '열림·닫힘·애니메이션 상태' },
  ...rippleClassRows,
];

export const drawerTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const drawerTokens = [
  { name: '--drawer-z-index', default: '250', description: '레이어 순서' },
  { name: '--drawer-width · --drawer-width-sm · --drawer-width-lg', default: '24rem · 18rem · 36rem', description: '좌·우 패널 너비' },
  { name: '--drawer-height · --drawer-height-sm · --drawer-height-lg', default: '18rem · 14rem · 26rem', description: '상·하 패널 높이' },
  { name: '--drawer-panel-duration-x · --drawer-panel-duration-y', default: '0.32s · 0.36s', description: '좌·우 / 상·하 슬라이드 시간' },
  { name: '--drawer-panel-easing-x · --drawer-panel-easing-y', default: 'cubic-bezier(0.32, 0.72, 0, 1) · cubic-bezier(0.33, 1, 0.68, 1)', description: '방향별 이징' },
];

export const markupCode = `<!-- 트리거 -->
<button type="button" data-drawer-trigger="#drawer-1"
  aria-controls="drawer-1" aria-expanded="false">
  Drawer 열기
</button>

<!-- Drawer -->
<div class="drawer" id="drawer-1" data-drawer
  role="dialog" aria-modal="true" aria-labelledby="drawer-1-title"
  tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-1-title">제목</h2>
      <div class="drawer_extra">…</div>
      <button type="button" class="drawer_close"
        data-drawer-close aria-label="닫기">…</button>
    </div>
    <div class="drawer_body">본문</div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_ghost" data-drawer-close>취소</button>
      <button type="button" class="btn btn_filled color_primary" data-drawer-close>저장</button>
    </div>
  </div>
</div>

<!-- 옵션: 백드롭 없음 -->
<div class="drawer" id="drawer-plain" data-drawer
  data-drawer-backdrop="false" …>…</div>

<!-- 옵션: 로드 시 자동 열기 -->
<div class="drawer" id="drawer-onboard" data-drawer
  data-drawer-open-on-load="true" …>…</div>`;
