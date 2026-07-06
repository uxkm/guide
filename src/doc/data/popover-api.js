export const popoverPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const popoverProps = [
  { name: 'placement', type: `'top' | 'top-center' | 'bottom-center' | 'left' | 'right' | 'end'`, default: '—', description: 'popover_placement-*' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'popover_sm · popover_lg' },
  { name: 'offset', type: `'none' | 'sm' | 'md' | 'lg'`, default: 'md', description: '전 방향 동일 간격. popover_offset-* · --popover-offset' },
  { name: 'offset-top · offset-right · offset-bottom · offset-left', type: `'none' | 'sm' | 'md' | 'lg'`, default: '—', description: '방향별 간격. popover_offset-top-* 등 · --popover-offset-*' },
  { name: 'open', type: 'boolean', default: 'false', description: '열림 (is-open)' },
  { name: 'no-arrow', type: 'boolean', default: 'false', description: '화살표 숨김' },
  { name: 'arrow-anchor', type: `'content' | 'target' | 'mixed'`, default: 'content', description: '화살표 기준. target=화살표만, mixed=패널·화살표 독립' },
  { name: 'panel-align', type: `'start' | 'center' | 'end'`, default: 'start', description: '패널 교차축 정렬. popover_panel-align-* · data-panel-align' },
  { name: 'arrow-target-align', type: `'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'`, default: 'center', description: 'target·mixed 시 트리거 내 화살표 위치' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '트리거 비활성 (is-disabled)' },
  { name: 'trigger', type: `'click' | 'hover'`, default: 'click', description: 'hover 시 data-popover-trigger="hover"' },
  { name: 'closable', type: 'boolean', default: 'click 시 true', description: '패널 닫기 버튼. hover 트리거는 기본 false' },
  { name: 'close-label', type: 'string', default: '닫기', description: '닫기 버튼 aria-label' },
  { name: 'title', type: 'string', default: '—', description: '패널 제목' },
  { name: 'panel-label', type: 'string', default: '—', description: '패널 aria-label. 클릭 트리거 시 헤더에 제목으로 표시' },
  { name: 'interactive', type: 'boolean', default: 'true', description: 'false면 data-popover 미부여 (정적 데모)' },
];

export const popoverSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const popoverSlots = [
  { name: 'trigger', description: '트리거 버튼·링크' },
  { name: 'title', description: '제목 (title prop 대체)' },
  { name: 'default', description: '패널 본문' },
  { name: 'footer', description: '하단 액션' },
];

export const popoverClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const popoverClasses = [
  { name: 'popover · popover_panel · popover_arrow', description: '루트·패널·화살표' },
  { name: 'popover_header · popover_title · popover_close · popover_body · popover_footer', description: '패널 파트' },
  { name: 'popover_sm · popover_lg · popover_no-arrow', description: '크기·화살표' },
  { name: 'popover_panel-align-center · popover_panel-align-end', description: '패널 교차축 정렬' },
  { name: 'popover_arrow-anchor-target · popover_arrow-anchor-mixed', description: '화살표·혼합 기준' },
  { name: 'popover_offset-none · popover_offset-sm · popover_offset-lg', description: '전 방향 간격' },
  { name: 'popover_offset-top-* · popover_offset-right-* · popover_offset-bottom-* · popover_offset-left-*', description: '방향별 간격' },
  { name: 'popover_placement-*', description: '배치 변형' },
  { name: 'data-popover · data-popover-trigger · data-popover-close · data-panel-align · data-arrow-target-align', description: 'JS 연동' },
  { name: 'is-open · is-disabled · hidden', description: '상태' },
];

export const popoverTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const popoverTokens = [
  { name: '--popover-min-width · --popover-max-width', default: '10rem · 20rem', description: '패널 너비' },
  { name: '--popover-padding-x · --popover-padding-y', default: 'var(--space-md)', description: '패널 패딩' },
  { name: '--popover-offset · --popover-offset-sm · --popover-offset-md · --popover-offset-lg', default: 'var(--space-sm) · …', description: '전 방향 간격 토큰' },
  { name: '--popover-offset-top · --popover-offset-right · --popover-offset-bottom · --popover-offset-left', default: 'offset 상속', description: '방향별 간격 (배치에 따라 적용)' },
  { name: '--popover-arrow-size', default: '8px', description: '화살표 크기' },
  { name: '--popover-panel-radius · --popover-arrow-edge-inset', default: '12px · calc', description: '패널 라운드·화살표 가장자리 여백' },
  { name: '--popover-arrow-position', default: '—', description: 'target 기준 시 트리거 중앙 위치(px)' },
];

export const markupCode = `<!-- 기본 — panel-label 있음 -->
<Popover panel-label="안내">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
  </template>
  <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
</Popover>

<!-- panel-label 없음 -->
<Popover>
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
  </template>
  <p>짧은 안내 문구만 필요할 때 사용합니다.</p>
</Popover>

<!-- 제목 · 푸터 -->
<Popover title="항목 삭제">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
  </template>
  <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
  <template #footer>
    <Button variant="ghost" size="sm" label="취소" data-popover-close />
    <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
  </template>
</Popover>

<!-- 호버 트리거 -->
<Popover trigger="hover" panel-label="에스크로 설명">
  <template #trigger>
    <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
  </template>
  구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
</Popover>

<!-- 배치 · 크기 · 간격 -->
<Popover placement="top-center" size="lg" offset="lg" panel-label="큰 Popover">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="위 · 가운데" aria-haspopup="dialog" />
  </template>
  <p>큰 패널입니다.</p>
</Popover>

<!-- 간격 — 방향별 -->
<Popover placement="left" offset-left="lg" panel-label="왼쪽 간격 lg">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="offset-left" aria-haspopup="dialog" />
  </template>
  <p>트리거 왼쪽 배치 시 offset-left가 적용됩니다.</p>
</Popover>

<!-- 혼합 — 패널 가운데 · 화살표 왼쪽 -->
<Popover arrow-anchor="mixed" panel-align="center" arrow-target-align="left" open panel-label="혼합">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
  </template>
  <p>패널은 가운데, 화살표는 트리거 왼쪽을 가리킵니다.</p>
</Popover>`;
