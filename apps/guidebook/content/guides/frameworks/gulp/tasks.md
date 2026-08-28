---
id: gulp-tasks
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/tasks/
label: Gulp 기본 API
title: Gulp 기본 API와 작업 구성
eyebrow: Gulp · Tasks
lead: 작업을 export하고 순차·병렬로 조합하며 완료 시점과 파일 감시를 처리합니다.
order: 17
---

## 공개 작업과 비공개 작업

export한 함수는 CLI에서 실행할 수 있는 공개 작업입니다. export하지 않은 함수는 다른 작업을 구성하는 내부 작업으로 사용합니다.

```javascript
function clean() {
  return deleteAsync(['dist']);
}

export function styles() {
  return src('src/styles/**/*.css').pipe(dest('dist/styles'));
}
```

## series와 parallel

`series()`는 앞 작업이 완료된 뒤 다음 작업을 실행하고, `parallel()`은 서로 독립적인 작업을 함께 실행합니다.

```javascript
const { parallel, series } = gulp;

export const build = series(
  clean,
  parallel(pages, styles, scripts, publicFiles),
);
```

작업을 조합할 때 `series(pages())`처럼 호출 결과를 넘기지 않고 `series(pages)`처럼 함수 자체를 전달합니다. 같은 선행 작업을 여러 분기에 중복 배치하지 않습니다.

## 비동기 완료

작업은 stream, Promise, event emitter, child process 또는 observable을 반환하거나 error-first callback을 호출해야 합니다.

```javascript
function streamTask() {
  return src('public/**/*', { encoding: false }).pipe(dest('dist'));
}

async function promiseTask() {
  await prepareManifest();
}

function callbackTask(done) {
  browserSync.reload();
  done();
}
```

반환이나 callback이 없으면 Gulp가 완료 시점을 알 수 없습니다.

## 파일 감시

```javascript
function serve(done) {
  watch('src/**/*.njk', series(pages, reload));
  watch('src/scripts/**/*.js', series(scripts, reload));
  done();
}

export const dev = series(build, serve);
```

watch 대상과 해당 작업의 입력 glob을 일치시키고, 변경된 파일이 빌드된 후 reload되도록 `series`로 묶습니다.

## 문서 안내

- [Nunjucks 시작하기](https://mozilla.github.io/nunjucks/getting-started.html)
- [UXKM Gulp 가이드](https://uxkm.io/buildSystem/gulp/01-gulp_start/01-intro)
