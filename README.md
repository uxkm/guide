# guide

guide.uxkm.io — HTML 가이드(gulp) + Storybook

## 구조

```
├── src/                 # 가이드 소스 (HTML, SCSS, JS) — SSOT
├── html/                # gulp 빌드 결과
├── gulpfile.js
├── .storybook/          # @storybook/html-vite
├── stories/             # Storybook 스토리 (gulp HTML 마크업 표시)
└── package.json
```

가이드는 gulp로 빌드하고, Storybook은 같은 `src/components`의 `.demo_section-preview` HTML을 렌더·Show code에 사용합니다.

## 프레임워크 동기화 원칙

컴포넌트를 추가하거나 유형·스타일·API를 변경할 때는 HTML만 단독으로 확장하지 않습니다. 기존 Vue·React·Next 구현과 예시 유형을 먼저 비교하고 아래 브랜치를 같은 작업 범위로 확인합니다.

- `gulp-storybook`: HTML · SCSS · Storybook
- `vue-storybook`: Vue 가이드 · Vue Storybook
- `react-storybook`: React 가이드 · React Storybook
- `next`: Next.js 가이드

의미 색상, 크기, 형태, 위치, 모션, 액션, 닫기, 자동 닫기와 같은 공통 API는 프레임워크 간 이름과 동작을 일치시킵니다.

## 개발

```bash
pnpm install
pnpm dev                # gulp 가이드 (browser-sync)
pnpm build              # html/ 생성
pnpm storybook          # http://localhost:6008
pnpm build-storybook    # storybook-static/ 생성
```

## 배포

`pnpm deploy:main` — Storybook만 `main/gulp-storybook/`에 배포  
(HTML 가이드 `main/html/`은 `gulp` 브랜치에서 배포)
