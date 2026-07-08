export const tokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'usage', label: '사용' },
];

export const spacingTokens = [
  { name: '--space-xs', default: '0.25rem', usage: '아이콘·배지 간 최소 간격, .space_gap-xs' },
  { name: '--space-sm', default: '0.5rem', usage: '버튼 내부 gap, .ml_sm · .p_sm · .space_gap-sm' },
  { name: '--space-md', default: '1rem', usage: '폼·카드 패딩, 그리드 gap, 기본 간격' },
  { name: '--space-lg', default: '1.5rem', usage: '섹션·모달 패딩, 폼 필드 간격' },
  { name: '--space-xl', default: '2rem', usage: '컨테이너 좌우 패딩, 빈 상태 여백' },
  { name: '--space-2xl', default: '3rem', usage: '페이지 섹션 상하 여백' },
];

export const radiusTokens = [
  { name: '--radius-sm', default: '6px', usage: '입력 필드, 페이지네이션, 스켈레톤' },
  { name: '--radius-md', default: '10px', usage: '코드 블록, 프리 영역' },
  { name: '--radius-lg', default: '12px', usage: '카드, 모달, 캐러셀' },
  { name: '--radius-pill', default: '9999px', usage: '배지, 태그, 스위치, 프로그레스' },
];

export const textSizeTokens = [
  { name: '--text-size-xs', default: '0.75rem', usage: '캡션, 배지, 툴팁, .size_xs' },
  { name: '--text-size-sm', default: '0.8125rem', usage: '보조 텍스트, 메뉴, 탭, .size_sm' },
  { name: '--text-size-base', default: '0.875rem', usage: '본문·버튼 기본, .size_base' },
  { name: '--text-size-lg', default: '1rem', usage: '강조 본문, 모달 제목, .size_lg' },
  { name: '--text-size-xl', default: '1.125rem', usage: '리드 문단, 큰 라벨, .size_xl' },
];

export const motionTokens = [
  { name: '--transition-fast', default: '0.15s ease', usage: '호버·포커스 색상 전환' },
  { name: '--transition-base', default: '0.2s ease', usage: '패널·드로어 열림, 레이아웃 변화' },
];

export const layoutTokens = [
  { name: '--sidebar-width', default: '280px', usage: '가이드 사이드바 너비' },
  { name: '--header-height', default: '56px', usage: '헤더·네비바 높이' },
  { name: '--focus-outline-width', default: '2px', usage: '키보드 포커스 링 두께' },
  { name: '--focus-outline-offset', default: '2px', usage: '포커스 링과 요소 사이 간격' },
];

export const colorTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'role', label: '역할' },
  { key: 'usage', label: '사용' },
];

export const surfaceColorTokens = [
  { name: '--color-bg', role: '페이지 배경', usage: 'body, 가이드 레이아웃 배경' },
  { name: '--color-surface', role: '카드·패널 배경', usage: '카드, 모달, 입력 필드 배경' },
  { name: '--color-surface-raised', role: '들어 올린 표면', usage: '헤더 영역, 호버 배경, 스켈레톤' },
  { name: '--color-border', role: '기본 테두리', usage: '입력·버튼 outline, 구분선' },
  { name: '--color-border-subtle', role: '보조 테두리', usage: '카드·디바이더, 약한 구분' },
  { name: '--color-text', role: '본문 텍스트', usage: '제목·본문 기본 색' },
  { name: '--color-text-muted', role: '보조 텍스트', usage: '설명, 메타, placeholder 톤' },
  { name: '--color-text-disabled', role: '비활성 텍스트', usage: 'disabled · is-disabled 레이블·본문 (4.5:1)' },
  { name: '--color-border-disabled', role: '비활성 테두리', usage: '비활성 입력·버튼·컨트롤 테두리 (3:1)' },
  { name: '--color-surface-disabled', role: '비활성 배경', usage: '비활성 입력·카드·드롭존 배경' },
  { name: '--color-control-disabled', role: '비활성 컨트롤', usage: '스위치·슬라이더 트랙 등' },
];

export const semanticColorTokens = [
  { name: '--color-accent', role: 'Primary · 채움', usage: '.color_primary 채움 버튼, 활성 탭' },
  { name: '--color-accent-text', role: 'Primary · 텍스트', usage: '링크, 고스트 버튼, 강조 텍스트' },
  { name: '--color-on-accent', role: 'Primary · 채움 위 텍스트', usage: 'filled primary 버튼 레이블' },
  { name: '--color-success', role: 'Success · 채움', usage: '.color_success 채움, 성공 상태' },
  { name: '--color-success-text', role: 'Success · 텍스트', usage: '성공 메시지, 체크 아이콘' },
  { name: '--color-danger', role: 'Danger · 채움', usage: '.color_danger 삭제·오류 강조' },
  { name: '--color-danger-text', role: 'Danger · 텍스트', usage: '오류 메시지, 위험 링크' },
  { name: '--color-warning', role: 'Warning · 채움', usage: '.color_warning 경고 배지·버튼' },
  { name: '--color-warning-text', role: 'Warning · 텍스트', usage: '경고 설명, 주의 문구' },
  { name: '--color-accent-disabled', role: 'Primary · 비활성 채움', usage: 'filled primary · 체크박스 비활성 선택 배경' },
  { name: '--color-on-accent-disabled', role: 'Primary · 비활성 채움 위 텍스트', usage: '비활성 filled primary 레이블·체크' },
  { name: '--color-success-disabled', role: 'Success · 비활성 채움', usage: 'filled success 비활성 배경' },
  { name: '--color-on-success-disabled', role: 'Success · 비활성 채움 위 텍스트', usage: '비활성 success 레이블' },
  { name: '--color-danger-disabled', role: 'Danger · 비활성 채움', usage: 'filled danger 비활성 배경' },
  { name: '--color-on-danger-disabled', role: 'Danger · 비활성 채움 위 텍스트', usage: '비활성 danger 레이블' },
  { name: '--color-warning-disabled', role: 'Warning · 비활성 채움', usage: 'filled warning 비활성 배경' },
  { name: '--color-on-warning-disabled', role: 'Warning · 비활성 채움 위 텍스트', usage: '비활성 warning 레이블' },
];

export const fileStructureCode = `src/scss/
├── _tokens.scss      # :root CSS 변수 — 간격·타이포·컴포넌트 수치
├── _themes.scss      # 라이트/다크 색상 (data-theme)
├── _variables.scss   # SCSS 전용 — 브레이크포인트·폰트 스택
├── _mixins.scss      # color-token() 등 토큰 헬퍼
├── components/       # 컴포넌트별 스타일 (토큰 참조)
└── main.scss         # tokens → themes → … 순서로 @use`;

export const scssUsageCode = `// 컴포넌트 SCSS에서 토큰 참조
@use "../variables" as *;

.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  font-size: var(--text-size-sm);
  transition: box-shadow var(--transition-fast);
}`;

export const cssUsageCode = `/* HTML·인라인 스타일 */
<section style="padding: var(--space-xl); gap: var(--space-md);">
  …
</section>

/* 컴포넌트 범위에서 토큰 재정의 */
.my-panel {
  --icon-size: 1.5rem;
  --btn-padding-y: 0.75rem;
}`;

export const themeUsageCode = `<!-- 테마 전환 — 색상 토큰이 함께 바뀝니다 -->
<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">

/* _themes.scss — 의미별 색상만 테마별로 정의 */
[data-theme="light"] { --color-accent: #3d66c4; }
[data-theme="dark"]  { --color-accent: #386bc0; }

// React — src/hooks/useTheme.js
const { theme, toggleTheme } = useTheme();
// document.documentElement.setAttribute('data-theme', theme)`;

export const componentTokenNote =
  '버튼·아이콘·입력 등 컴포넌트 전용 토큰(--btn-*, --icon-*, --input-* 등)은 각 컴포넌트 문서 하단의 「디자인 토큰」 표에서 기본값과 사용처를 확인할 수 있습니다.';
