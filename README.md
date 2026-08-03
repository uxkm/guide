# guide

guide.uxkm.io — Nuxt 4 + Vue 3 UI 컴포넌트 가이드

## 구조

- `nuxt.config.js` — Nuxt 앱·정적 배포 설정
- `src/` — Vue 앱, SCSS 디자인 시스템, 문서 소스
- `src/pages/` — Nuxt 파일 기반 라우트
- `src/layouts/` — Nuxt 공통 레이아웃
- `src/doc/` — 컴포넌트·페이지 문서 (Vue에서 렌더)
- `src/scss/` — 디자인 토큰·컴포넌트 스타일
- `.output/` — Nuxt 빌드·정적 생성 결과

## 개발

```bash
pnpm install
pnpm dev       # http://localhost:3000 — 소개 페이지로 바로 진입
pnpm build     # Nitro 서버 빌드
pnpm generate  # .output/public/ 정적 사이트 생성
pnpm preview   # 빌드 결과 미리보기
```

## 배포

`pnpm deploy:main` — nuxt 브랜치에서 정적 생성 후 main/nuxt/에 배포 (다른 프레임워크 결과물 유지)
