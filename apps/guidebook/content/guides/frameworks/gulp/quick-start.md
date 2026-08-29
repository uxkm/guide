---
id: gulp-quick-start
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/quick-start/
label: Gulp 시작
title: Gulp 빠른 시작
eyebrow: Gulp · Getting Started
lead: Gulp CLI와 gulpfile의 기본 구조를 만들고 정적 페이지를 빌드합니다.
order: 15
---

## 실행

이 저장소는 필요한 패키지와 명령을 이미 선언하고 있습니다.

```bash
pnpm install
pnpm dev:gulp
```

개별 앱 디렉터리에서는 `pnpm dev`를 실행할 수 있습니다. 결과 HTML은 `apps/gulp/dist`에 생성됩니다.

## 기본 gulpfile

Gulp는 `gulpfile.js`에서 export한 함수를 작업으로 인식합니다. `src()`로 파일을 읽고 plugin을 pipe로 연결한 다음 `dest()`로 출력합니다.

```javascript
import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';

const { dest, src } = gulp;

export function pages() {
  return src('src/pages/**/*.njk')
    .pipe(nunjucksRender({ path: ['src'] }))
    .pipe(dest('dist'));
}

export default pages;
```

```bash
gulp pages
gulp
```

`gulp pages`는 이름이 있는 작업을, 인자 없는 `gulp`는 default export를 실행합니다.

## 경로 기준

- `src/pages/**/*.njk`: 최종 HTML로 출력할 페이지 진입점
- `src/templates`: 공통 layout과 partial
- `src/components`: 컴포넌트 fragment
- `public`: 스타일, 이미지처럼 변환 없이 복사할 파일

상대 경로는 명령을 실행한 현재 디렉터리를 기준으로 해석됩니다. 루트 script를 사용하면 workspace 위치를 자동으로 맞춥니다.

## 문서 안내

- [Nunjucks 시작하기](https://mozilla.github.io/nunjucks/getting-started.html)
- [Gulp 가이드](https://uxkm.io/buildSystem/gulp/01-gulp_start/01-intro)
