/** Storybook React 설치 및 사용 페이지 전용 데이터 */

export const reactInstallCode = `# 저장소 클론
git clone <repository-url>
cd guide

# 의존성 설치
pnpm install`;

export const reactScriptRows = [
  {
    command: 'pnpm storybook',
    description: 'Storybook 개발 서버 (React) — 소개 페이지로 진입',
  },
  {
    command: 'pnpm build-storybook',
    description: 'Storybook 정적 빌드 → apps/storybook/storybook-static/',
  },
  {
    command: 'pnpm preview-storybook',
    description: '빌드 결과 로컬 미리보기',
  },
  {
    command: 'pnpm dev:all',
    description: 'Vue 가이드 앱 + Storybook 동시 실행',
  },
];

export const reactNewComponentRows = [
  {
    path: 'packages/ui-react/src/components/{Name}.jsx',
    role: 'React 컴포넌트',
  },
  {
    path: 'packages/ui-react/src/components/{Name}.stories.jsx',
    role: 'Storybook CSF 스토리',
  },
  {
    path: 'packages/ui/src/scss/components/_{name}.scss',
    role: '컴포넌트 스타일 (Vue·React 공유)',
  },
  {
    path: 'packages/ui/src/data/component-groups.js',
    role: 'STORY_GROUPS 분류 추가',
  },
  {
    path: 'packages/ui/src/data/navigation.js',
    role: '사이드바 메뉴 항목 추가',
  },
];

export const reactStylesCode = `// Storybook preview.tsx
import '@uxkm/ui/src/scss/main.scss';

// 다른 React 프로젝트 (Vite)
import '@uxkm/ui/src/scss/main.scss';

// SCSS @use (빌드 파이프라인에 packages/ui 경로 alias 필요)
@use "main";`;

export const reactMarkupCode = `<!-- Button 예시 -->
<button type="button" class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>

<!-- Alert 예시 -->
<div class="alert color_info" role="alert">
  <div class="alert_body">
    <p class="alert_desc">변경 사항이 저장되었습니다.</p>
  </div>
</div>`;

export const reactThemeCode = `<!-- HTML 루트에 테마 지정 -->
<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">

<!-- JS로 전환 (Storybook: localStorage storybook-theme) -->
document.documentElement.setAttribute('data-theme', 'dark');`;
