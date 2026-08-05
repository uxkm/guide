export const requirementColumns = [
  { key: 'tool', label: '도구' },
  { key: 'version', label: '버전' },
  { key: 'note', label: '비고' },
];

export const requirementRows = [
  { tool: 'Node.js', version: '22.19+ / 24.11+', note: 'Nuxt 4.5.1이 지원하는 LTS 버전 사용' },
  { tool: 'pnpm', version: '9.15.9', note: 'package.json의 packageManager 필드 기준' },
];

export const scriptColumns = [
  { key: 'command', label: '명령' },
  { key: 'description', label: '설명' },
];

export const scriptRows = [
  { command: 'pnpm dev', description: 'Nuxt 개발 서버 실행 (기본 주소: http://localhost:3000)' },
  { command: 'pnpm build', description: 'Nitro 프로덕션 서버 빌드' },
  { command: 'pnpm generate', description: '정적 사이트 생성 (.output/public/)' },
  { command: 'pnpm preview', description: 'build 또는 generate 결과를 로컬에서 미리보기' },
  { command: 'pnpm deploy:main', description: 'nuxt 브랜치의 정적 결과물을 main/nuxt/에 배포' },
];

export const newComponentColumns = [
  { key: 'path', label: '파일' },
  { key: 'role', label: '역할' },
];

export const newComponentRows = [
  { path: 'src/doc/components/{name}.vue', role: '컴포넌트 문서 페이지' },
  { path: 'src/components/{Name}.vue', role: '재사용 UI 컴포넌트 (Vue SFC)' },
  { path: 'src/scss/components/_{name}.scss', role: '컴포넌트 스타일' },
  { path: 'src/scss/components/_index.scss', role: '@use "{name}" 등록' },
  { path: 'src/data/navigation.js', role: '사이드바 메뉴 항목 추가' },
  { path: 'src/pages/components/[slug].vue', role: 'Nuxt 동적 문서 라우트' },
];

export const installCode = `# 저장소 클론
git clone git@github.com:uxkm/guide.git
cd guide

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev`;

export const buildCode = `# Nitro 서버용 빌드
pnpm build

# 또는 정적 사이트 생성
pnpm generate

# 생성 결과 확인
pnpm preview`;

export const stylesCode = `// 전체 스타일 — Vite의 SCSS loadPaths에 src/scss를 등록한 경우
@use "main";

// 또는 필요한 컴포넌트만 선택
@use "tokens";
@use "themes";
@use "reset";
@use "components/button";
@use "components/input";
@use "components/alert";`;

export const markupCode = `<!-- Button 예시 -->
<button type="button" class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>

<!-- Alert 예시 -->
<div class="alert color_info" role="alert">
  <div class="alert_body">
    <p class="alert_desc">변경 사항이 저장되었습니다.</p>
  </div>
</div>`;

export const themeCode = `<!-- HTML 루트에 테마 지정 -->
<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">

<!-- JS로 전환 -->
document.documentElement.setAttribute("data-theme", "dark");`;
