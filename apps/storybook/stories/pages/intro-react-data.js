/** Storybook React 소개 페이지 전용 데이터 (Vue intro-data와 분리) */

export const reactQuickstartCode = `# 의존성 설치
pnpm install

# Storybook (React) 개발 서버
pnpm storybook

# Storybook 정적 빌드
pnpm build-storybook`;

export const reactStructureCode = `packages/
├── ui/                       # SCSS · 디자인 토큰 · 공유 유틸
│   └── src/scss/
│       ├── _tokens.scss      # 디자인 토큰 (:root CSS 변수)
│       ├── _themes.scss      # 라이트/다크 테마
│       ├── components/       # 컴포넌트별 스타일
│       └── main.scss         # SCSS 진입점
└── ui-react/                 # React 컴포넌트
    └── src/
        ├── components/       # Button 등 React 컴포넌트
        ├── hooks/            # useRipple · useDemoCode
        ├── storybook/        # Docs · Canvas 렌더 헬퍼
        └── stories/          # 플레이스홀더 스토리

apps/
└── storybook/                # @storybook/react-vite
    ├── .storybook/           # main · preview · GuideDocsPage
    └── stories/              # 소개 · 설치 · 토큰 페이지`;

export const reactDocPageCode = `import Button from './Button.jsx';

/** @type { import('@storybook/react-vite').Meta<typeof Button> } */
export default {
  title: 'Components/기본 요소/Button',
  id: 'components-button',
  component: Button,
  tags: ['autodocs'],
};

export const Playground = {
  args: { variant: 'filled', color: 'primary', label: '라벨' },
};`;
