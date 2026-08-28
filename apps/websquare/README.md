# UXKM WebSquare

WebSquare 화면에 붙여 사용하는 UXKM XML fragment의 원본 워크스페이스입니다. WebSquare Engine, Studio, 라이선스와 프로젝트별 공통 스크립트는 포함하지 않습니다.

## 디렉터리

```text
src/components/<category>/<Component>/<Component>.xml  # Storybook도 읽는 단일 원본
src/screens/catalog.xml                                # namespace와 이벤트를 포함한 화면 예제
WebContent/cm/css/uxkm.css                             # pnpm build:styles 생성물
WebContent/images/                                     # pnpm build:assets 생성물
```

`src/components` 파일은 기존 WebSquare 화면의 `<body>` 안에 배치하는 fragment입니다. `w2`, `xf`, `ev` namespace는 화면 XML 최상위 루트에서 한 번 선언합니다.

## 검증

```bash
pnpm --filter @uxkm/websquare validate
```

검증은 52개 컴포넌트 존재 여부, XML 태그 균형, ID 중복, namespace 경계와 공통 class를 확인하며 WebSquare Engine을 요구하지 않습니다.

## 로컬 WebSquare 프로젝트에 반영

먼저 공통 자산을 만든 뒤 라이선스가 있는 로컬 WebSquare 프로젝트 경로를 명시해 동기화합니다.

```bash
pnpm build:shared
pnpm sync:websquare -- --project /absolute/path/to/project
```

다음 전용 경로에만 파일을 복사합니다.

- `WebContent/uxkm/components`
- `WebContent/uxkm/screens`
- `WebContent/cm/css/uxkm.css`
- `WebContent/images`

Engine, `WEB-INF/lib`, WebSquare 설정과 `_wpack_` 결과는 복사하거나 저장소에 커밋하지 않습니다. 동기화 후 프로젝트의 Engine 버전과 Studio/W-Pack에서 최종 검증합니다.
