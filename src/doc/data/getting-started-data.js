export const requirementColumns = [
  { key: 'tool', label: '도구' },
  { key: 'version', label: '버전' },
  { key: 'note', label: '비고' },
];

export const requirementRows = [
  { tool: 'Node.js', version: '18 이상 권장', note: 'LTS 버전 사용' },
  { tool: 'pnpm', version: '9.x', note: 'packageManager 필드에 명시된 버전' },
];

export const scriptColumns = [
  { key: 'command', label: '명령' },
  { key: 'description', label: '설명' },
];

export const scriptRows = [
  { command: 'pnpm dev', description: 'Vite 개발 서버 — 소개 페이지로 바로 진입' },
  { command: 'pnpm build', description: '프로덕션 빌드 → dist/ 생성' },
  { command: 'pnpm preview', description: '빌드 결과 로컬 미리보기' },
  { command: 'pnpm deploy:main', description: 'react 브랜치에서 main/react/로 정적 배포' },
];

export const newComponentColumns = [
  { key: 'path', label: '파일' },
  { key: 'role', label: '역할' },
];

export const newComponentRows = [
  { path: 'src/doc/components/{name}.jsx', role: '컴포넌트 문서 페이지 (docMeta export)' },
  { path: 'src/components/{Name}.jsx', role: '재사용 UI 컴포넌트 (React)' },
  { path: 'src/scss/components/_{name}.scss', role: '컴포넌트 스타일' },
  { path: 'src/scss/components/_index.scss', role: '@use "{name}" 등록' },
  { path: 'src/data/navigation.js', role: '사이드바 메뉴 항목 추가' },
  { path: 'src/router/index.jsx', role: '라우트 등록 (handle.docKey)' },
];

export const installCode = `# 저장소 클론
git clone <repository-url>
cd guide

# 의존성 설치
pnpm install`;

export const stylesCode = `// 전체 스타일
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

// React — useTheme hook (src/hooks/useTheme.js)
import { useTheme } from '@/hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === 'dark' ? '라이트 모드' : '다크 모드'}
    </button>
  );
}`;
