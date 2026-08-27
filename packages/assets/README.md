# 공통 이미지 원본

모든 프레임워크가 같은 URL로 사용하는 정적 자산의 단일 원본입니다.

- 이미지는 용도별 하위 폴더에 저장합니다.
- 브랜드 이미지는 `public/images/brand`에 저장합니다.
- 문서·컴포넌트 예제 이미지는 `public/images/samples/<종류>`에 저장합니다.
- 앱에서는 `assetUrl('images/<분류>/<파일명>')`으로 참조합니다. 개발은 `/images/...`, 배포는 `VITE_ASSET_BASE` 또는 `VITE_SITE_URL`을 앞에 붙입니다.
- `pnpm build:assets`로 각 앱의 `public/images`에 배포합니다.

컴포넌트 전용 이미지는 이름 충돌을 막기 위해
`public/images/components/<component-name>` 아래에 둡니다.

```text
public/images/
├── brand/                # 로고와 브랜드 자산
├── meta/favicon/         # favicon, 앱 아이콘, web manifest
├── samples/              # 문서·Storybook 예제
│   └── avatar/
└── components/           # 특정 컴포넌트 전용 이미지
```

공통 favicon은 `assetUrl('images/meta/favicon/favicon.ico')`이며, 웹 앱 manifest는
`assetUrl('images/meta/favicon/site.webmanifest')`를 사용합니다.
