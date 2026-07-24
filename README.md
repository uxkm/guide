# guide

guide.uxkm.io

## HTML Components

순수 HTML/SCSS UI 컴포넌트 가이드입니다.

### 구조

- `src/` — HTML, SCSS, JS, 이미지 소스
- `html/` — Gulp 빌드 결과물 (배포용)
- `src/images/` — 이미지 추가 시 자동 압축 후 `html/images/`로 출력

### 개발

```bash
pnpm install
pnpm dev       # 빌드 + watch + 로컬 서버
pnpm build     # html/ 폴더에 결과물 생성
```
