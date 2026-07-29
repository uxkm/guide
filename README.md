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
