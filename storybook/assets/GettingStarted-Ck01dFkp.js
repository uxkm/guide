import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DPG3xyh1.js";import{c as i,u as a}from"./blocks-BXsfpknd.js";import{n as o,t as s}from"./IntroductionCards-DatdkIgS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`설치 및 사용`}),`
`,(0,u.jsx)(t.h1,{id:`설치-및-사용`,children:`설치 및 사용`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`pnpm`}),` 워크스페이스에서 여섯 브라우저 앱, WebSquare XML 소스 앱과 Storybook을 함께 관리합니다. 패키지 구조와 소유권은 `,(0,u.jsx)(t.strong,{children:`아키텍처`}),`, 토큰·테마 값은 `,(0,u.jsx)(t.strong,{children:`디자인 토큰`}),`을 참고합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`사전-요구사항`,children:`사전 요구사항`}),`
`,(0,u.jsx)(s,{columns:[{label:`도구`},{label:`용도`}],rows:[[`Node.js`,`Vite, Storybook, Sass와 빌드 스크립트 실행`],[`pnpm 10`,`워크스페이스 의존성 설치 및 명령 실행`],[`Git`,`브랜치와 소스 관리`],[`WebSquare 개발 환경`,`WebSquare 예제의 실제 실행과 데이터 바인딩 검증 — 코드 열람에는 필요하지 않음`]]}),`
`,(0,u.jsx)(t.h2,{id:`설치`,children:`설치`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-bash`,children:`git clone <repository-url>
cd guide
pnpm install
`})}),`
`,(0,u.jsx)(t.h2,{id:`주요-명령`,children:`주요 명령`}),`
`,(0,u.jsx)(s,{columns:[{label:`명령`},{label:`설명`}],rows:[[`pnpm dev`,`전체 워크스페이스를 안내하는 로컬 대시보드 실행`],[`pnpm storybook`,`통합 Storybook 개발 서버 실행`],[`pnpm build:styles`,`공통 SCSS를 각 앱의 public/styles/uxkm.css로 빌드`],[`pnpm build:storybook`,`apps/storybook/storybook-static에 정적 문서 생성`],[`pnpm validate:structure`,`프레임워크별 컴포넌트 구조와 구현 누락 검사`],[`pnpm check:workspace`,`워크스페이스 패키지 구성 확인`]],codeColumns:[0]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-bash`,children:`# 통합 Storybook 개발
pnpm storybook

# 공통 스타일과 정적 Storybook 빌드
pnpm build:styles
pnpm build:storybook
`})}),`
`,(0,u.jsxs)(t.p,{children:[`문서 배포 파이프라인(`,(0,u.jsx)(t.code,{children:`build:guidebook`}),`, `,(0,u.jsx)(t.code,{children:`pnpm build`}),`)은 `,(0,u.jsx)(t.strong,{children:`아키텍처 › 문서 빌드와 배포`}),`를 참고합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-가져오기`,children:`컴포넌트 가져오기`}),`
`,(0,u.jsx)(t.p,{children:`Vue와 React 구현은 컴포넌트별 서브패스 export를 제공합니다. Nuxt는 Vue 패키지를, Next.js는 React 패키지를 같은 방식으로 가져오며 프레임워크 전용 컴포넌트만 해당 앱 내부에서 사용합니다.`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-vue`,children:`<script setup>
import Button from '@uxkm/vue/button';
import { Card, CardBody } from '@uxkm/vue/card';
<\/script>

<template>
  <Card>
    <CardBody>
      <Button variant="filled" color="primary" label="저장" />
    </CardBody>
  </Card>
</template>
`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-jsx`,children:`import Button from '@uxkm/react/button';
import { Card, CardBody } from '@uxkm/react/card';

export function SaveCard() {
  return (
    <Card>
      <CardBody>
        <Button variant="filled" color="primary" label="저장" />
      </CardBody>
    </Card>
  );
}
`})}),`
`,(0,u.jsx)(t.p,{children:`현재 패키지는 이 모노레포 안에서 사용하는 private workspace 패키지입니다. 외부 프로젝트에서 패키지 이름으로 설치하는 공개 배포 방식은 별도 패키징 이후에 적용합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`html-마크업으로-사용`,children:`HTML 마크업으로 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`공통 CSS를 연결하면 Vue나 React 없이도 같은 클래스와 시맨틱 마크업을 사용할 수 있습니다. 각 컴포넌트 문서의 HTML 탭을 기준으로 구조, 상태 클래스와 `,(0,u.jsx)(t.code,{children:`aria-*`}),` 속성을 함께 적용합니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<link rel="stylesheet" href="/styles/uxkm.css" />

<button type="button" class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>

<div class="alert color_info" role="alert">
  <div class="alert_body">
    <p class="alert_desc">변경 사항이 저장되었습니다.</p>
  </div>
</div>
`})}),`
`,(0,u.jsx)(t.p,{children:`Button처럼 네이티브 동작만 필요한 요소는 CSS와 마크업만으로 사용할 수 있습니다. Modal, Drawer, Accordion처럼 열림 상태·포커스 이동·키보드 조작이 필요한 컴포넌트는 해당 HTML/Gulp 스크립트 또는 Vue/React 구현도 함께 적용해야 합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`websquare-화면-xml에서-사용`,children:`WebSquare 화면 XML에서 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`각 컴포넌트 문서의 `,(0,u.jsx)(t.strong,{children:`Code → WebSquare`}),` 탭은 HTML 기준 마크업을 WebSquare 화면에서 쓸 수 있는 XML fragment로 제공합니다. 공통 클래스와 접근성 속성, 닫는 void 태그·값을 가진 XML 속성을 유지하며, 네임스페이스는 화면 XML 루트에서 상속받습니다. React·Vue처럼 별도 컴포넌트를 import하는 코드가 아닙니다.`]}),`
`,(0,u.jsxs)(t.p,{children:[`문서 경계와 소유권은 `,(0,u.jsx)(t.strong,{children:`아키텍처 › WebSquare 문서 경계`}),`를, 지원 범위는 `,(0,u.jsx)(t.strong,{children:`가이드라인 › Framework Support`}),`를 참고합니다. 아래는 화면에 붙이는 절차입니다.`]}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`화면`}),`은 페이지 단위 XML 문서이고, `,(0,u.jsx)(t.strong,{children:`scwin`}),`은 WebSquare가 그 화면에 만들어 주는 기본 스크립트 객체명입니다. 클릭·변경은 `,(0,u.jsx)(t.code,{children:`ev:onclick="scwin...."`}),`처럼 XML Events로 연결하고, 입력값은 `,(0,u.jsx)(t.code,{children:`ref="data:..."`}),`로 DataMap·DataList에 바인딩합니다. 객체명은 `,(0,u.jsx)(t.code,{children:`config.xml`}),`의 SPA `,(0,u.jsx)(t.code,{children:`variable`}),`에서 바꿀 수 있으므로 프로젝트가 다른 이름을 쓰면 예제의 `,(0,u.jsx)(t.code,{children:`scwin`}),`을 치환합니다. UXKM은 WebSquare 엔진·공통 화면 스크립트를 포함하지 않으므로 함수 이름과 데이터 경로 규칙은 프로젝트 표준을 따릅니다.`]}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsxs)(t.li,{children:[`화면이 로드하는 스타일에 `,(0,u.jsx)(t.code,{children:`uxkm.css`}),`를 연결합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Storybook WebSquare 탭에서 XML 조각을 복사해 화면에 배치합니다. 기존 화면에 붙일 때는 `,(0,u.jsx)(t.code,{children:`screenRoot`}),`나 네임스페이스 선언을 함께 복사하지 않습니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`정적 HTML 이벤트에 의존하는 컴포넌트는 `,(0,u.jsx)(t.code,{children:`ev:onclick`}),`, `,(0,u.jsx)(t.code,{children:`scwin`}),` 함수와 프로젝트 데이터 객체에 맞게 연결합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`실제 WebSquare 엔진에서 레이아웃, 포커스, 키보드와 데이터 바인딩을 검증합니다.`}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`xmlns`}),` 선언은 컴포넌트 속성이 아니라 문서 범위 선언입니다. 화면 루트에서 한 번만 두고 내부 fragment는 상속합니다. 별도 화면 XML이나 WFrame `,(0,u.jsx)(t.code,{children:`src`}),`처럼 독립 파싱되는 문서만 각 파일 루트에서 다시 선언하며, `,(0,u.jsx)(t.code,{children:`ev`}),`·`,(0,u.jsx)(t.code,{children:`xf`}),`는 해당 접두사를 쓰는 화면에 추가합니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-xml`,children:`<w2:group
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:w2="http://www.inswave.com/websquare"
  xmlns:xf="http://www.w3.org/2002/xforms"
  id="screenRoot">
  <w2:group id="saveActions" class="form_actions">
    <xf:trigger
      id="btnSave"
      type="button"
      class="btn btn_filled color_primary"
      ev:onclick="scwin.btnSave_onclick">
      <xf:label><![CDATA[저장]]></xf:label>
    </xf:trigger>
  </w2:group>
</w2:group>
`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-javascript`,children:`scwin.btnSave_onclick = function () {
  // 프로젝트의 submission 또는 저장 로직을 호출합니다.
};
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Container, Grid, Flex처럼 호출 위치의 자식을 감싸는 구조 컴포넌트는 WFrame으로 별도 XML을 부르지 않고 현재 화면의 `,(0,u.jsx)(t.code,{children:`w2:group`}),`에 공통 클래스를 직접 적용합니다. WFrame은 공통 메뉴처럼 완성된 별도 화면 XML을 `,(0,u.jsx)(t.code,{children:`src`}),`로 포함할 때 사용합니다.`]}),`
`,(0,u.jsxs)(t.p,{children:[`자동 변환으로 표현하기 어려운 컴포넌트는 Story에서 `,(0,u.jsx)(t.code,{children:`id: 'websquare'`}),` 전용 예제를 선언할 수 있습니다. `,(0,u.jsx)(t.code,{children:`w2:trigger`}),`, `,(0,u.jsx)(t.code,{children:`xf:input`}),`, DataList 바인딩이 필요한 화면은 이 마크업을 기준으로 프로젝트 표준에 맞게 치환합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`gulp--nunjucks-사용`,children:`Gulp / Nunjucks 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`Gulp 구현은 Nunjucks 템플릿을 작성한 뒤 정적 `,(0,u.jsx)(t.code,{children:`.html`}),`로 변환합니다. HTML과의 역할 차이는 `,(0,u.jsx)(t.strong,{children:`소개 › HTML과 Gulp/Nunjucks의 차이`}),`를 참고합니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`경로`},{label:`확장자`},{label:`역할`}],rows:[[`apps/gulp/src/templates/layouts`,`.njk`,`전체 HTML 골격과 페이지 block 정의`],[`apps/gulp/src/templates/partials`,`.njk`,`헤더·푸터·네비게이션 공통 조각`],[`apps/gulp/src/components`,`.njk`,`컴포넌트별 재사용 마크업`],[`apps/gulp/src/introduction`,`.njk`,`소개·설치·디자인 토큰 템플릿`],[`apps/gulp/src/pages`,`.njk`,`정적 페이지 진입 템플릿`],[`apps/gulp/dist`,`.html`,`Gulp/Nunjucks 처리 후 브라우저에 배포할 결과`]],codeColumns:[0,1]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-nunjucks`,children:`{% extends "layouts/default.njk" %}

{% block content %}
  <main>
    <h1>{{ pageTitle }}</h1>
    {% include "components/basic/Button/button.njk" %}
  </main>
{% endblock %}
`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-nunjucks`,children:`{% set actions = [
  { label: '저장', color: 'primary' },
  { label: '삭제', color: 'danger' }
] %}

{% for action in actions %}
  <button type="button" class="btn btn_filled color_{{ action.color }}">
    <span class="btn_label">{{ action.label }}</span>
  </button>
{% endfor %}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`현재 `,(0,u.jsx)(t.code,{children:`apps/gulp`}),`에는 52개 컴포넌트의 `,(0,u.jsx)(t.code,{children:`.njk`}),` 소스와 레이아웃 구조가 준비되어 있지만, `,(0,u.jsx)(t.code,{children:`gulpfile.js`}),`, 페이지 템플릿, 패키지 실행 스크립트는 아직 스캐폴드 상태입니다. 따라서 `,(0,u.jsx)(t.code,{children:`pnpm dev`}),`가 Gulp 변환을 실행하지 않으며, `,(0,u.jsx)(t.code,{children:`.njk → .html`}),` 빌드 명령은 Gulp 태스크가 연결된 뒤 이 문서의 주요 명령 표에 추가합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`vue-사용`,children:`Vue 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`Vue 구현은 `,(0,u.jsx)(t.code,{children:`.vue`}),` Single-File Component로 제공합니다. Nuxt와의 역할 차이는 `,(0,u.jsx)(t.strong,{children:`소개 › Vue와 Nuxt의 차이`}),`를 참고합니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`경로`},{label:`역할`}],rows:[[`apps/vue/src/components`,`재사용 Vue SFC와 컴포넌트별 index.js export`],[`apps/vue/src/main.js`,`공통 CSS와 리플 동작을 등록하는 Vue 앱 진입점`],[`@uxkm/vue/{component}`,`워크스페이스에서 사용하는 컴포넌트별 import 경로`],[`apps/nuxt`,`@uxkm/vue 컴포넌트를 재사용하고 Nuxt 전용 기능만 확장`]],codeColumns:[0]}),`
`,(0,u.jsxs)(t.p,{children:[`복합어 prop은 템플릿에서 kebab-case로 작성하고 이벤트는 `,(0,u.jsx)(t.code,{children:`@이벤트명`}),`으로 받습니다. 기본 콘텐츠는 default slot, 위치가 정해진 콘텐츠는 named slot을 사용합니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-vue`,children:`<script setup>
import { ref } from 'vue';
import Button from '@uxkm/vue/button';

const saving = ref(false);

function save() {
  saving.value = true;
}
<\/script>

<template>
  <Button
    variant="filled"
    color="primary"
    :loading="saving"
    aria-label="변경 사항 저장"
    @click="save"
  >
    저장
  </Button>
</template>
`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-vue`,children:`<Button label="추가">
  <template #icon-before>
    <span aria-hidden="true">+</span>
  </template>
</Button>
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Nuxt에서도 UI의 prop·이벤트·slot 사용법은 같습니다. 페이지 라우팅이나 `,(0,u.jsx)(t.code,{children:`NuxtLink`}),`, `,(0,u.jsx)(t.code,{children:`NuxtImg`}),`가 필요한 부분만 Nuxt 전용 구현을 선택합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`react-사용`,children:`React 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`React 구현은 `,(0,u.jsx)(t.code,{children:`.jsx`}),` 컴포넌트로 제공합니다. Next.js와의 역할 차이는 `,(0,u.jsx)(t.strong,{children:`소개 › React와 Next.js의 차이`}),`를 참고합니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`경로`},{label:`역할`}],rows:[[`apps/react/src/components`,`재사용 React JSX와 컴포넌트별 index.js export`],[`apps/react/src/main.jsx`,`공통 CSS와 리플 동작을 등록하는 React 앱 진입점`],[`@uxkm/react/{component}`,`워크스페이스에서 사용하는 컴포넌트별 import 경로`],[`apps/next`,`@uxkm/react 컴포넌트를 재사용하고 Next.js 전용 기능만 확장`]],codeColumns:[0]}),`
`,(0,u.jsxs)(t.p,{children:[`JSX에서는 `,(0,u.jsx)(t.code,{children:`ariaLabel`}),`, `,(0,u.jsx)(t.code,{children:`iconBefore`}),`, `,(0,u.jsx)(t.code,{children:`onClick`}),`처럼 camelCase prop을 사용합니다. 본문은 `,(0,u.jsx)(t.code,{children:`children`}),`, 위치가 정해진 콘텐츠는 해당 React node prop을 사용합니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-jsx`,children:`import { useState } from 'react';
import Button from '@uxkm/react/button';

export function SaveButton() {
  const [saving, setSaving] = useState(false);

  return (
    <Button
      variant="filled"
      color="primary"
      loading={saving}
      ariaLabel="변경 사항 저장"
      iconBefore={<span aria-hidden="true">✓</span>}
      onClick={() => setSaving(true)}
    >
      저장
    </Button>
  );
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Next.js에서도 공통 UI의 prop·이벤트·children 사용법은 같습니다. App Router의 서버 컴포넌트에서 상태나 이벤트를 쓰는 컴포넌트는 `,(0,u.jsx)(t.code,{children:`'use client'`}),` 경계 안에 두고, 경로 이동·이미지 최적화만 Next.js 전용 구현을 사용합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`프레임워크별-스타일-적용`,children:`프레임워크별 스타일 적용`}),`
`,(0,u.jsxs)(t.p,{children:[`스타일 원본은 `,(0,u.jsx)(t.code,{children:`packages/styles/index.scss`}),`입니다. `,(0,u.jsx)(t.code,{children:`pnpm build:styles`}),`로 같은 CSS가 모든 앱과 Storybook에 배포됩니다. 토큰 목록과 테마 동작은 `,(0,u.jsx)(t.strong,{children:`디자인 토큰`}),`을 참고합니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`프레임워크`},{label:`적용 위치`},{label:`적용 방식`}],rows:[[`HTML`,`소개·페이지 HTML의 head`,`link로 /styles/uxkm.css 등록`],[`Gulp / Nunjucks`,`src/templates/layouts/default.njk`,`공통 레이아웃에서 link 선언`],[`Vue`,`src/main.js`,`import '/styles/uxkm.css'`],[`React`,`src/main.jsx`,`import '/styles/uxkm.css'`],[`Nuxt`,`nuxt.config.ts`,`app.head.link에 스타일시트 등록`],[`Next.js`,`app/layout.jsx`,`루트 레이아웃의 head에 link 선언`],[`Storybook`,`.storybook/preview.ts`,`Preview 전역에서 생성 CSS import`]],codeColumns:[1]}),`
`,(0,u.jsxs)(t.p,{children:[`라이트/다크 전환은 루트 요소의 `,(0,u.jsx)(t.code,{children:`data-theme`}),`으로 설정합니다. Storybook 툴바도 같은 속성을 사용합니다. 값·미디어 쿼리·대비 기준은 `,(0,u.jsx)(t.strong,{children:`디자인 토큰 › 테마 동작`}),`을 참고합니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">
`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-js`,children:`document.documentElement.dataset.theme = 'dark';
`})})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};