# 공통 스타일 원본

공통 CSS의 단일 원본입니다. JavaScript 동작과 이미지는 이 패키지에 두지 않습니다.

```text
styles/
├── foundations/  # 토큰, 테마, 폰트, reset
├── layouts/      # 앱 셸, 사이드바, 콘텐츠 레이아웃
├── components/   # 컴포넌트별 스타일
├── behaviors/    # 공통 동작이 만드는 상태/효과의 CSS
├── shared/       # SCSS 변수, mixin, 에셋 경로 설정
├── utilities/    # 유틸리티 클래스
├── main.scss     # 계층 조합
└── index.scss    # 빌드 진입점
```

- DOM 동작 패키지: `@uxkm/interactions`
- 정적 이미지 원본: `packages/assets/public/images`
