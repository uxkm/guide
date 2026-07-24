/** Storybook React 디자인 토큰 페이지 전용 데이터 */

export const reactFileStructureCode = `packages/ui/src/scss/
├── _tokens.scss      # :root CSS 변수 — 간격·타이포·컴포넌트 수치
├── _themes.scss      # 라이트/다크 색상 (data-theme)
├── _variables.scss   # SCSS 전용 — 브레이크포인트·폰트 스택
├── _mixins.scss      # color-token() 등 토큰 헬퍼
├── components/       # 컴포넌트별 스타일 (토큰 참조)
└── main.scss         # tokens → themes → … 순서로 @use

// Storybook preview.tsx
import '@uxkm/ui/src/scss/main.scss';`;

export const reactThemeUsageCode = `<!-- 테마 전환 — 색상 토큰이 함께 바뀝니다 -->
<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">

/* Storybook: preview.tsx가 localStorage storybook-theme 로 초기화 */
document.documentElement.setAttribute('data-theme', 'dark');

/* _themes.scss — 의미별 색상만 테마별로 정의 */
[data-theme="light"] { --color-accent: #3d66c4; }
[data-theme="dark"]  { --color-accent: #386bc0; }`;
