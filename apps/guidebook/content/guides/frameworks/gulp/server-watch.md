---
id: gulp-server-watch
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/server-watch/
label: Web Server & Watching Files
title: Gulp Web Server와 파일 감시
eyebrow: Gulp · Development Server
lead: BrowserSync 개발 서버를 열고 변경된 파일만 다시 빌드한 뒤 화면을 갱신합니다.
order: 19
---

## 개발 서버

BrowserSync는 `dist`를 정적 root로 제공하고 여러 browser의 scroll과 form 동작을 동기화할 수 있습니다.

```javascript
import browserSyncPackage from 'browser-sync';

const browserSync = browserSyncPackage.create();

function server(done) {
  browserSync.init({ server: { baseDir: 'dist' }, open: false });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}
```

## Watching Files

```javascript
function watcher() {
  watch('src/**/*.njk', series(pages, reload));
  watch('src/scripts/**/*.js', series(scripts, reload));
  watch('public/**/*', series(publicFiles, reload));
}

export const dev = series(build, parallel(server, watcher));
```

watch glob은 실제 task 입력과 일치시킵니다. build가 끝나기 전에 reload되지 않도록 `series()`로 순서를 보장하고, 새 파일과 삭제된 파일도 결과에 반영되는지 확인합니다.

## UXKM 확인 항목

- 공통 style과 asset build 후 server를 시작합니다.
- port 충돌 시 root 개발 명령의 안내를 따릅니다.
- template 오류는 빈 페이지로 숨기지 않고 terminal에 표시합니다.
- 배포 build는 개발 server와 watch 작업을 포함하지 않습니다.

## 원문 문서

- [Web Server](https://uxkm.io/buildSystem/gulp/05-ws_watch/01-webserver)
- [Watching Files](https://uxkm.io/buildSystem/gulp/05-ws_watch/02-watch)
