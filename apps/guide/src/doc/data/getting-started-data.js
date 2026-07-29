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
  { command: 'pnpm dev', description: '가이드 앱 (React + Vite) — 소개 페이지로 바로 진입' },
  { command: 'pnpm build', description: '가이드 프로덕션 빌드 → apps/guide/dist/' },
  { command: 'pnpm preview', description: '가이드 빌드 결과 로컬 미리보기' },
  { command: 'pnpm storybook', description: 'Storybook 개발 서버 (React)' },
  { command: 'pnpm build-storybook', description: 'Storybook 정적 빌드 → apps/storybook/storybook-static/' },
  { command: 'pnpm deploy:main', description: 'react-storybook 브랜치에서 main/react/ · main/react-storybook/로 배포' },
];

export const newComponentColumns = [
  { key: 'path', label: '파일' },
  { key: 'role', label: '역할' },
];

export const newComponentRows = [
  { path: 'packages/ui-react/src/components/{Name}.jsx', role: 'React 컴포넌트' },
  { path: 'packages/ui-react/src/components/{Name}.stories.jsx', role: 'Storybook CSF 스토리' },
  { path: 'apps/guide/src/doc/components/{name}.jsx', role: '가이드 문서 페이지 (docMeta export)' },
  { path: 'packages/ui/src/scss/components/_{name}.scss', role: '컴포넌트 스타일' },
  { path: 'packages/ui/src/data/navigation.js', role: '사이드바 메뉴 항목 추가' },
];

export const installCode = `# 저장소 클론
git clone <repository-url>
cd guide

# 의존성 설치
pnpm install`;

export const stylesCode = `// 가이드 · Storybook
import '@uxkm/ui/scss/main.scss';

// SCSS @use (빌드 파이프라인에 packages/ui 경로 alias 필요)
@use "main";

// 또는 필요한 컴포넌트만 선택
@use "tokens";
@use "themes";
@use "reset";
@use "components/button";
@use "components/input";
@use "components/alert";`;

export const markupCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function Example() {
  return (
    <>
      <Button variant="filled" color="primary" label="저장" />
      <Alert color="info" description="변경 사항이 저장되었습니다." />
    </>
  );
}`;

export const themeCode = `<!-- HTML 루트에 테마 지정 -->
<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">

// React — useTheme hook (apps/guide/src/hooks/useTheme.js)
import { useTheme } from '@/hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === 'dark' ? '라이트 모드' : '다크 모드'}
    </button>
  );
}`;
