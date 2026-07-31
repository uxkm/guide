# guide

guide.uxkm.io — Next.js 기반 UXKM UI 컴포넌트 가이드

## 구조

- `app/` — Next.js App Router 레이아웃·문서 경로·메타데이터
- `src/next/` — 문서 데모 상호작용을 담당하는 클라이언트 경계
- `src/` — React UI, SCSS 디자인 시스템, 문서 소스
- `src/doc/` — 컴포넌트·페이지 JSX 문서
- `src/scss/` — 디자인 토큰·컴포넌트 스타일
- `out/` — Next.js 정적 export 결과

## 개발

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # out/ 정적 사이트 생성
pnpm preview   # out/ 빌드 결과 미리보기
```

`NEXT_PUBLIC_BASE_PATH=/react pnpm build`처럼 환경 변수를 지정하면 하위 경로 배포용으로 빌드됩니다.

## 배포

`pnpm deploy:main` — `next` 브랜치에서 `/react` basePath로 정적 빌드한 뒤 `main/react/`에 배포합니다.
