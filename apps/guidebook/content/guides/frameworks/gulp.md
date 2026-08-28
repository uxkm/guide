---
id: framework-gulp
group: 프레임워크
path: guides/frameworks/gulp/
label: Gulp
title: Gulp · Nunjucks
eyebrow: Frameworks
lead: Gulp 5와 Nunjucks로 UXKM 정적 페이지를 구성하는 방법을 단계별로 확인합니다.
order: 14
---

이 저장소의 Gulp 구현은 Gulp 5로 빌드 작업을 구성하고 Nunjucks 템플릿을 HTML로 변환합니다. 루트에서 `pnpm dev:gulp`를 실행하면 공통 스타일과 자산을 준비한 뒤 6102 포트에 개발 서버를 엽니다.

## Gulp란?

Gulp는 Node.js 환경에서 반복되는 웹 개발 작업을 자동화하는 task runner입니다. source 파일을 stream으로 읽고 여러 변환 작업을 pipeline으로 연결해 HTML 생성, 스타일 처리, script와 asset 복사, 파일 감시와 browser reload를 수행할 수 있습니다.

Gulp 자체가 화면을 렌더링하는 UI framework는 아닙니다. 프로젝트에서 필요한 build 절차를 JavaScript 함수로 정의하고, 각 함수를 순차 또는 병렬로 조합하는 build 도구입니다.

## 주요 특징

- `src()`와 `dest()` 사이에 plugin을 연결하는 stream 기반 file 처리
- `series()`와 `parallel()`을 이용한 명시적인 작업 순서 구성
- `watch()`를 이용한 file 변경 감지와 반복 작업 자동화
- 일반 JavaScript 함수와 module export를 사용하는 유연한 gulpfile
- Nunjucks 같은 template engine, BrowserSync와 다양한 plugin 조합

## UXKM에서의 역할

UXKM Gulp 앱은 Nunjucks로 공통 layout과 component fragment를 조립해 정적 HTML을 만듭니다. `gulpfile.js`는 page 변환, script와 public asset 복사를 담당하고 BrowserSync로 결과를 확인합니다. 생성 결과는 HTML 구현 및 Storybook Gulp 예제와 동일한 DOM·접근성 계약을 유지해야 합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [Gulp 시작](quick-start/index.html) | Gulp의 역할, 프로젝트 구조와 기본 build 실행 |
| [Gulp 기본 설정](setup/index.html) | Node.js, package.json, CLI와 gulpfile 준비 |
| [Gulp 기본 API](tasks/index.html) | `src`·`dest`, 공개 작업, `series`·`parallel`과 비동기 완료 |
| [HTML 편집 (Gulp NJK)](nunjucks/index.html) | 출력·조건·반복, 상속·include, macro와 escape |
| [Web Server & Watching Files](server-watch/index.html) | BrowserSync, watch와 reload 순서 |
| [Assets 세팅](assets/index.html) | SCSS, JavaScript와 image build pipeline |
| [배포 (Deploying)](deploy/index.html) | production build 검증과 정적 hosting |

## UXKM 구현 위치

```text
apps/gulp/
├── gulpfile.js
└── src/
    ├── components/
    ├── data/
    ├── pages/
    └── templates/
```

컴포넌트의 최종 HTML 구조와 접근성 계약은 Storybook Gulp 탭을 기준으로 비교합니다.

## 문서 안내

- [Nunjucks 시작하기](https://mozilla.github.io/nunjucks/getting-started.html)
- [UXKM Gulp 가이드](https://uxkm.io/buildSystem/gulp/01-gulp_start/01-intro)
