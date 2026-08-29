---
id: gulp-setup
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/setup/
label: Gulp 기본 설정
title: Gulp 기본 설정
eyebrow: Gulp · Setup
lead: Node.js 프로젝트를 준비하고 package.json, Gulp CLI와 gulpfile을 구성합니다.
order: 16
---

## 프로젝트 준비

Gulp는 Node.js 위에서 실행됩니다. 새 프로젝트에서는 먼저 `package.json`을 만들고 프로젝트 의존성으로 Gulp를 설치합니다. workspace에서는 루트 의존성과 script가 이미 준비되어 있으므로 다시 설치하지 않습니다.

```bash
mkdir gulp-project
cd gulp-project
npm init -y
npm install --save-dev gulp
```

전역 CLI는 명령을 전달하는 역할만 하고 실제 Gulp version은 프로젝트가 관리합니다. 팀에서는 `package.json` script를 통해 같은 version과 명령을 사용합니다.

## 기본 파일

project root의 `gulpfile.js`가 작업 진입점입니다. ESM 문법을 사용하려면 `package.json`에 `"type": "module"`을 선언합니다.

```json
{
  "type": "module",
  "scripts": {
    "dev": "gulp dev",
    "build": "gulp build"
  },
  "devDependencies": {
    "gulp": "^5.0.0"
  }
}
```

## 기준

- source는 `src`, 생성물은 `dist`에 둡니다.
- page, template, component와 data를 역할별 directory로 나눕니다.
- 생성된 HTML을 직접 수정하지 않고 Nunjucks 원본을 변경합니다.
- dependency version은 lockfile과 workspace manifest에서 함께 관리합니다.

## 원문 목차

- [폴더 생성 및 터미널 활용](https://uxkm.io/buildSystem/gulp/02-scaffolding/01-folder_terminal)
- [Node.js와 NPM](https://uxkm.io/buildSystem/gulp/02-scaffolding/02-nodejs_npm)
