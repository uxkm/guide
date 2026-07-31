import { rippleClassRows, ripplePropTrigger } from '@/doc/data/ripple-api';

export const snackbarPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const snackbarProps = [
  { name: 'color', type: `'info' | 'success' | 'warning' | 'danger'`, default: 'info', description: '의미 색상. danger는 color_error' },
  { name: 'message', type: 'ReactNode', default: '—', description: '메시지. children이 있으면 대체됨' },
  { name: 'closable', type: 'boolean', default: 'false', description: '닫기 버튼과 내부 포커스 상태의 Escape 닫기 지원' },
  { name: 'closeLabel', type: 'string', default: '알림 닫기', description: '닫기 버튼의 접근성 라벨' },
  { name: 'showIcon', type: 'boolean', default: 'true', description: '의미 색상에 대응하는 기본 아이콘 표시' },
  { name: 'round', type: 'boolean', default: 'false', description: '높이 비율에 맞춘 캡슐형 모서리와 가로 패딩 적용' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'snackbar_sm · snackbar_lg' },
  { name: 'duration', type: 'number', default: '0', description: '자동 닫기 시간(ms). 0이면 유지하며, 호버·내부 포커스 중에는 타이머 일시정지' },
  { name: 'motion', type: `'fade' | 'slide' | 'none'`, default: 'fade', description: '호출·닫기 효과. slide는 placement 방향을 따름' },
  { name: 'placement', type: 'SnackbarPlacement', default: '상위 Region 값', description: 'Region 없이 사용하거나 Slide 방향을 직접 재정의할 때 지정' },
  { name: 'role', type: 'string', default: 'status', description: 'status는 polite, alert는 assertive 라이브 영역으로 설정' },
  { name: 'icon', type: 'ReactNode', default: '—', description: '기본 아이콘을 대체하는 콘텐츠' },
  { name: 'action', type: 'ReactNode | ({ close }) => ReactNode', default: '—', description: '후속 동작. render 함수의 close로 퇴장 효과 실행' },
  { name: 'className', type: 'string', default: '—', description: 'snackbar 루트에 추가 클래스' },
  ripplePropTrigger,
];

export const snackbarRegionProps = [
  {
    name: 'placement',
    type: `'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'`,
    default: 'bottom-center',
    description: '고정 위치. start와 end는 RTL에서도 논리 방향을 따름',
  },
  { name: 'label', type: 'string', default: '—', description: 'Snackbar 영역의 접근성 라벨' },
  { name: 'children', type: 'ReactNode', default: '—', description: '같은 위치에 세로로 쌓을 Snackbar 목록' },
  { name: 'className', type: 'string', default: '—', description: 'snackbar_region에 추가 클래스' },
];

export const snackbarChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const snackbarChildren = [
  { name: 'children', description: '메시지 콘텐츠 (message prop 대체)' },
  { name: 'icon', description: '커스텀 아이콘' },
  { name: 'action', description: '버튼·링크 등 후속 동작' },
];

export const snackbarEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const snackbarEvents = [
  { name: 'onClose(reason, event)', description: `퇴장 효과 후 호출. reason은 'close' · 'action' · 'timeout'` },
];

export const snackbarClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const snackbarClasses = [
  { name: 'snackbar', description: 'Snackbar 루트' },
  { name: 'snackbar_sm · snackbar_lg', description: '크기 변형' },
  { name: 'snackbar_round', description: '높이 비율에 맞춘 캡슐형 모서리' },
  { name: 'snackbar_motion-fade · snackbar_motion-slide', description: '호출·닫기 모션 유형' },
  { name: 'snackbar_placement-{placement}', description: 'Slide 진입·퇴장 방향' },
  { name: 'is-entering · is-open · is-leaving', description: 'Snackbar 모션 생명주기 상태' },
  { name: 'snackbar_icon-wrap · snackbar_icon', description: '아이콘 영역' },
  { name: 'snackbar_message', description: '메시지 영역' },
  { name: 'snackbar_action · snackbar_close', description: '액션·닫기 영역' },
  { name: 'snackbar_region', description: '고정 위치와 다중 Snackbar 스택 컨테이너' },
  { name: 'snackbar_region-{placement}', description: '상단·중간·하단의 8개 위치 변형' },
  { name: 'color_info · color_success · color_warning · color_error', description: '의미 색상' },
  { name: 'aria-live · aria-atomic · aria-relevant', description: '메시지 전체를 스크린 리더에 알리는 라이브 영역 속성' },
  ...rippleClassRows,
];

export const snackbarTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const snackbarTokens = [
  { name: '--color-snackbar-info-bg · --color-snackbar-success-bg', default: '테마별 불투명 색상', description: '정보·성공 Snackbar 불투명 배경' },
  { name: '--color-snackbar-warning-bg · --color-snackbar-error-bg', default: '테마별 불투명 색상', description: '경고·오류 Snackbar 불투명 배경' },
  { name: '--color-snackbar-*-border', default: '테마별 불투명 색상', description: '의미 색상별 불투명 테두리' },
  { name: '--snackbar-min-width · --snackbar-max-width', default: '18rem · 36rem', description: '기본 최소·최대 너비' },
  { name: '--snackbar-padding-y · --snackbar-padding-x', default: 'var(--space-sm) · var(--space-md)', description: '기본 패딩' },
  { name: '--snackbar-gap · --snackbar-action-gap', default: 'var(--space-sm)', description: '콘텐츠·액션 간격' },
  { name: '--snackbar-font-size · --snackbar-line-height', default: 'var(--text-size-base) · 1.5', description: '기본 타이포' },
  { name: '--snackbar-icon-size · --snackbar-close-size', default: '1.25rem · 2rem', description: '아이콘·닫기 버튼 크기' },
  { name: '--snackbar-round-padding-x', default: 'var(--space-lg)', description: '기본 round 유형 가로 패딩' },
  { name: '--snackbar-round-padding-x-sm · --snackbar-round-padding-x-lg', default: 'var(--space-md) · var(--space-xl)', description: 'sm·lg round 유형 가로 패딩' },
  { name: '--snackbar-motion-duration · --snackbar-motion-distance', default: '200ms · 1rem', description: 'Fade·Slide 시간과 이동 거리' },
  { name: '--snackbar-motion-easing', default: 'cubic-bezier(0.2, 0, 0, 1)', description: '호출·닫기 가속 곡선' },
  { name: '--snackbar-region-offset · --snackbar-region-gap', default: 'var(--space-md) · var(--space-sm)', description: '화면 가장자리 간격·Snackbar 사이 간격' },
  { name: '--snackbar-region-inset-block-start · --snackbar-region-inset-block-end', default: 'var(--snackbar-region-offset)', description: '상단·하단 안전 영역' },
  { name: '--snackbar-region-inset-inline-start · --snackbar-region-inset-inline-end', default: 'var(--snackbar-region-offset)', description: '좌측·우측 안전 영역' },
  { name: '--snackbar-region-z-index', default: '1200', description: '고정 Snackbar 스택 레이어' },
  { name: '--snackbar-padding-y-sm · --snackbar-padding-x-sm · --snackbar-font-size-sm', default: 'var(--space-xs) · var(--space-sm) · var(--text-size-sm)', description: 'sm 크기' },
  { name: '--snackbar-padding-y-lg · --snackbar-padding-x-lg · --snackbar-font-size-lg', default: 'var(--space-md) · var(--space-lg) · var(--text-size-lg)', description: 'lg 크기' },
];
