# guide

guide.uxkm.io — Vue 3 + Vite UI 컴포넌트 가이드

## 구조

- `index.html` — Vite 엔트리
- `src/` — Vue 앱, SCSS 디자인 시스템, HTML 문서 소스
- `src/doc/` — 컴포넌트·페이지 HTML 문서 (Vue에서 렌더)
- `src/scss/` — 디자인 토큰·컴포넌트 스타일
- `dist/` — 프로덕션 빌드 결과

## 개발

```bash
pnpm install
pnpm dev       # http://localhost:5173 — 소개 페이지로 바로 진입
pnpm build     # dist/ 생성
pnpm preview   # 빌드 결과 미리보기
```

## 배포

`pnpm deploy:main` — min 브랜치에서 빌드 후 main에 정적 파일 배포
