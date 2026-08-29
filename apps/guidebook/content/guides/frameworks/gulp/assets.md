---
id: gulp-assets
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/assets/
label: Assets 세팅
title: Gulp Assets 세팅
eyebrow: Gulp · Assets
lead: SCSS, JavaScript와 image를 일관된 build pipeline으로 처리합니다.
order: 20
---

## SCSS 컴파일

style task는 SCSS entry를 CSS로 변환하고 source map, prefix와 minify 정책을 환경에 맞게 적용합니다. 이 저장소에서는 공통 style package가 기준이므로 app 전용 SCSS가 공통 component 규칙을 덮어쓰지 않게 합니다.

```javascript
export function styles() {
  return src('src/styles/main.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/styles', { sourcemaps: '.' }));
}
```

## JavaScript

modern browser target과 legacy 지원 범위를 먼저 정합니다. Babel을 사용한다면 변환 대상과 polyfill 정책을 `browserslist` 기준으로 고정하고, 이미 build된 package를 다시 중복 변환하지 않습니다.

## Image

원본 image는 lossless·lossy 정책을 구분해 처리합니다. SVG logo처럼 원본 품질과 접근성 정보가 중요한 asset은 무조건 raster 변환하지 않습니다.

## Asset pipeline

이 repository의 공통 asset은 `packages/assets/public`에서 관리하고 app으로 복사합니다. URL은 배포 base path를 고려한 helper를 사용하며 HTML에 특정 host 주소를 직접 고정하지 않습니다.

## 원문 문서

- [SCSS 컴파일](https://uxkm.io/buildSystem/gulp/06-assets/01-scss_compilation)
- [JS - Babel Support](https://uxkm.io/buildSystem/gulp/06-assets/02-babel_support)
- [image 최적화](https://uxkm.io/buildSystem/gulp/06-assets/03-image_optimization)
