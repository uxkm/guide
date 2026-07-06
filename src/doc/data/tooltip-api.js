export const tooltipPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tooltipProps = [
  { name: 'content', type: 'string', default: '—', description: '말풍선 텍스트. default 슬롯으로 대체' },
  { name: 'placement', type: `'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'`, default: '—', description: 'tooltip_placement-*' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'tooltip_sm · tooltip_lg' },
  { name: 'offset', type: `'none' | 'sm' | 'md' | 'lg'`, default: 'md', description: '전 방향 동일 간격. tooltip_offset-* · --tooltip-offset' },
  { name: 'offset-top · offset-right · offset-bottom · offset-left', type: `'none' | 'sm' | 'md' | 'lg'`, default: '—', description: '방향별 간격. tooltip_offset-top-* 등 · --tooltip-offset-*' },
  { name: 'open', type: 'boolean', default: 'false', description: '열림 (is-open)' },
  { name: 'inverse', type: 'boolean', default: 'false', description: '어두운 배경 (tooltip_inverse)' },
  { name: 'no-arrow', type: 'boolean', default: 'false', description: '화살표 숨김' },
  { name: 'arrow-anchor', type: `'content' | 'target' | 'mixed'`, default: 'content', description: '화살표 기준. target=화살표만, mixed=말풍선·화살표 독립' },
  { name: 'panel-align', type: `'start' | 'center' | 'end'`, default: 'center', description: '말풍선 교차축 정렬. tooltip_panel-align-* · data-panel-align' },
  { name: 'arrow-target-align', type: `'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'`, default: 'center', description: 'target·mixed 시 트리거 내 화살표 위치' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '트리거 비활성' },
  { name: 'trigger', type: `'hover' | 'click'`, default: 'hover', description: 'click 시 data-tooltip-trigger="click"' },
  { name: 'interactive', type: 'boolean', default: 'true', description: 'false면 data-tooltip 미부여' },
  { name: 'closable', type: 'boolean', default: 'click 시 true', description: '말풍선 닫기 버튼. hover 트리거는 기본 false' },
  { name: 'close-label', type: 'string', default: '닫기', description: '닫기 버튼 aria-label' },
];

export const tooltipSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const tooltipSlots = [
  { name: 'trigger', description: '트리거 요소' },
  { name: 'default', description: '말풍선 텍스트 (content 대체)' },
];

export const tooltipClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const tooltipClasses = [
  { name: 'tooltip · tooltip_trigger · tooltip_bubble · tooltip_arrow · tooltip_close', description: '루트·트리거·말풍선' },
  { name: 'tooltip_sm · tooltip_lg · tooltip_inverse · tooltip_no-arrow', description: '크기·스킨' },
  { name: 'tooltip_panel-align-start · tooltip_panel-align-end', description: '말풍선 교차축 정렬' },
  { name: 'tooltip_arrow-anchor-target · tooltip_arrow-anchor-mixed', description: '화살표·혼합 기준' },
  { name: 'tooltip_offset-none · tooltip_offset-sm · tooltip_offset-lg', description: '전 방향 간격' },
  { name: 'tooltip_offset-top-* · tooltip_offset-right-* · tooltip_offset-bottom-* · tooltip_offset-left-*', description: '방향별 간격' },
  { name: 'tooltip_placement-*', description: '배치 변형' },
  { name: 'data-tooltip · data-tooltip-trigger · data-tooltip-close · data-panel-align · data-arrow-target-align', description: 'JS 연동' },
  { name: 'is-open · is-disabled · hidden', description: '상태' },
  { name: 'role="tooltip" · aria-describedby · aria-expanded', description: '접근성' },
];

export const tooltipTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tooltipTokens = [
  { name: '--tooltip-max-width · --tooltip-max-width-sm · --tooltip-max-width-lg', default: '16rem · 12rem · 20rem', description: '말풍선 최대 너비' },
  { name: '--tooltip-padding-x · --tooltip-padding-y · --tooltip-font-size', default: '—', description: '패딩·글자' },
  { name: '--tooltip-offset · --tooltip-offset-sm · --tooltip-offset-md · --tooltip-offset-lg', default: 'var(--space-xs) · …', description: '전 방향 간격 토큰' },
  { name: '--tooltip-offset-top · --tooltip-offset-right · --tooltip-offset-bottom · --tooltip-offset-left', default: 'offset 상속', description: '방향별 간격 (배치에 따라 적용)' },
  { name: '--tooltip-arrow-size', default: '6px', description: '화살표 크기' },
  { name: '--tooltip-panel-radius · --tooltip-arrow-edge-inset', default: '6px · calc', description: '말풍선 라운드·화살표 가장자리 여백' },
  { name: '--tooltip-arrow-position', default: '—', description: 'target 기준 시 트리거 중앙 위치(px)' },
  { name: '--tooltip-inverse-bg · --tooltip-inverse-text', default: '—', description: 'inverse 스킨' },
];

export const markupCode = `<!-- 기본 — content prop -->
<Tooltip content="짧은 도움말 텍스트입니다.">
  <template #trigger>
    <Button class="tooltip_trigger" variant="outline" label="마우스 오버" />
  </template>
</Tooltip>

<!-- default 슬롯 -->
<Tooltip>
  <template #trigger>
    <Button class="tooltip_trigger" variant="outline" label="슬롯 예시" />
  </template>
  짧은 도움말 텍스트입니다.
</Tooltip>

<!-- 클릭 트리거 — tooltip_close 기본 제공 -->
<Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
  <template #trigger>
    <Button class="tooltip_trigger" variant="outline" label="클릭하여 보기" />
  </template>
</Tooltip>

<!-- 비활성 버튼 래핑 -->
<Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
  <template #trigger>
    <span class="tooltip_trigger" tabindex="0">
      <Button variant="filled" color="primary" label="제출 불가" disabled />
    </span>
  </template>
</Tooltip>

<!-- 배치 · 스킨 · 간격 -->
<Tooltip placement="top" inverse offset="lg" content="어두운 배경의 말풍선입니다.">
  <template #trigger>
    <Button class="tooltip_trigger" variant="ghost" label="역색 Tooltip" />
  </template>
</Tooltip>

<!-- 간격 — 방향별 -->
<Tooltip placement="right" offset-right="lg" content="트리거 오른쪽 배치 시 offset-right가 적용됩니다.">
  <template #trigger>
    <Button class="tooltip_trigger" variant="outline" label="offset-right" />
  </template>
</Tooltip>

<!-- 혼합 — 말풍선 가운데 · 화살표 오른쪽 -->
<Tooltip arrow-anchor="mixed" panel-align="center" arrow-target-align="right" open content="말풍선은 가운데, 화살표는 트리거 오른쪽입니다.">
  <template #trigger>
    <Button class="tooltip_trigger" variant="outline" size="sm" label="S" />
  </template>
</Tooltip>`;
