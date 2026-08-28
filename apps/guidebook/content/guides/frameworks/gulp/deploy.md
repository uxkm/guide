---
id: gulp-deploy
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/deploy/
label: 배포 (Deploying)
title: Gulp 프로젝트 배포
eyebrow: Gulp · Deploying
lead: production build를 검증하고 원격 저장소와 정적 hosting에 안전하게 배포합니다.
order: 21
---

## Production build

배포 작업은 개발용 source map, server와 watch를 제외하고 HTML·CSS·JavaScript·asset을 완전한 `dist`로 생성해야 합니다.

```javascript
export const build = series(
  clean,
  parallel(pages, styles, scripts, publicFiles),
);
```

## 배포 전 확인

1. 깨끗한 환경에서 dependency를 설치하고 build합니다.
2. 내부 link, asset base URL과 새로고침 경로를 검증합니다.
3. 생성 HTML의 landmark, label과 keyboard 동작을 확인합니다.
4. secret과 개발 환경 파일이 `dist`에 포함되지 않았는지 확인합니다.

## 원격 저장소와 hosting

source와 생성물의 관리 정책을 먼저 정합니다. CI가 build하는 경우 일반적으로 source만 version control에 저장하고, workflow가 lockfile 기준으로 `dist`를 생성합니다. GitHub Pages처럼 별도 branch나 directory를 요구하면 build 결과만 해당 publish target으로 전달합니다.

UXKM main 배포는 root deployment script를 사용합니다. framework app의 개발 결과를 Guidebook 배포 경로와 혼합하지 않습니다.

## 원문 문서

- [원격 저장소 생성과 Push](https://uxkm.io/buildSystem/gulp/07-deploying/01-repository_push)
- [Github에 배포](https://uxkm.io/buildSystem/gulp/07-deploying/02-github_deploy)
