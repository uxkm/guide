export const requirementColumns = [
  { key: 'tool', label: '도구' },
  { key: 'version', label: '버전' },
  { key: 'note', label: '비고' },
];

export const requirementRows = [
  { tool: 'Node.js', version: '20.9 이상', note: 'Next.js 16 실행 요구사항' },
  { tool: 'pnpm', version: '9.15.9', note: 'packageManager 필드에 명시된 버전' },
];

export const scriptColumns = [
  { key: 'command', label: '명령' },
  { key: 'description', label: '설명' },
];

export const scriptRows = [
  { command: 'pnpm dev', description: 'Turbopack 기반 Next.js 개발 서버 — http://localhost:3000' },
  { command: 'pnpm build', description: 'Turbopack 기반 Next.js 정적 export — out/ 생성' },
  { command: 'pnpm start', description: 'out/ 정적 빌드 결과를 로컬 서버로 실행' },
  { command: 'pnpm preview', description: 'out/ 정적 빌드 결과를 로컬 서버로 미리보기' },
  { command: 'pnpm deploy:main', description: '/react로 빌드한 뒤 main/react/에 커밋·푸시' },
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
  { path: 'src/data/doc-registry.js', role: '정적 경로·페이지 메타데이터 등록' },
  { path: 'src/utils/doc-loader.js', role: '문서 모듈 import 및 slug 매핑 등록' },
];

export const installCode = `# 저장소 클론
git clone <repository-url>
cd guide

# 의존성 설치
pnpm install`;

export const basePathCode = `# /react 하위 경로용 정적 사이트 생성
NEXT_PUBLIC_BASE_PATH=/react pnpm build`;

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
