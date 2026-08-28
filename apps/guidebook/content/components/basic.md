---
id: components-basic
group: 컴포넌트
path: components/basic/
label: 기본 요소
title: 기본 요소
eyebrow: Components · 4
storybookCategory: 기본-요소
lead: 다른 컴포넌트와 패턴의 기반이 되는 가장 작은 표현 및 인터랙션 단위입니다.
order: 4
---

기본 요소는 화면의 의미와 상호작용을 만드는 최소 단위입니다. 단순해 보여도 HTML 요소, 접근 가능한 이름, 상태 표현이 잘못되면 다른 모든 조합 컴포넌트의 품질에 영향을 줍니다.

## 컴포넌트 목록

| 컴포넌트 | 사용 목적 | 사용 시점과 주의사항 |
| --- | --- | --- |
| Button | 저장, 삭제, 제출처럼 현재 화면에서 동작 실행 | 동사형 레이블을 사용하고 로딩 중 중복 실행을 방지합니다. 이동 용도로 사용하지 않습니다. |
| Icon | 기능, 상태, 콘텐츠 종류를 시각적으로 보조 | 텍스트와 함께 사용하며 아이콘 단독 제어에는 `aria-label`을 제공합니다. 장식용 아이콘은 보조기술에서 숨깁니다. |
| Link | 다른 페이지, 문서 위치 또는 외부 리소스로 이동 | 목적지를 예측할 수 있는 링크 텍스트를 사용합니다. 새 창을 열 때는 시각적·접근성 안내를 함께 제공합니다. |
| Typography | 제목, 본문, 캡션 등 정보 위계 표현 | 시각적 크기만이 아니라 올바른 제목 순서와 의미 구조를 유지합니다. 임의의 글꼴 값을 추가하지 않습니다. |

## 선택 기준

페이지나 URL이 바뀌면 Link, 현재 맥락에서 데이터나 상태가 바뀌면 Button을 사용합니다. 클릭 모양이 같다는 이유로 `div`나 `span`에 동작을 추가하지 않습니다. 제목은 Typography 스타일과 별개로 `h1`부터 `h6`까지 문서 구조가 건너뛰지 않도록 선택합니다.

## 상태와 접근성

- Button은 기본, hover, focus, disabled, loading 상태를 구분하고 focus 표시를 제거하지 않습니다.
- Link는 방문 여부보다 현재 위치와 외부 이동 여부를 명확히 전달합니다.
- Icon의 색상만으로 성공·경고·오류를 구분하지 않고 텍스트나 접근 가능한 이름을 제공합니다.
- Typography는 확대와 반응형 환경에서도 내용이 잘리거나 겹치지 않는지 확인합니다.

## 실제 UI 페이지 만들기

컴포넌트 하나를 확인하는 Storybook 예제와 실제 application page는 목적이 다릅니다. 실제 페이지에는 제목 구조, 본문 폭, 이동 링크와 여러 컴포넌트의 상태를 함께 배치합니다. 예를 들어 `/components/basic` 화면은 다음 구조로 만듭니다.

```jsx
import Button from '@uxkm/react/button';
import Link from '@uxkm/react/link';
import { TypoTitle } from '@uxkm/react/typography';

export default function BasicPage() {
  return (
    <main className="guide_content">
      <TypoTitle level={1}>기본 요소</TypoTitle>
      <p>Button, Icon, Link와 Typography의 실제 조합을 확인합니다.</p>
      <div className="flex flex_gap-lg">
        <Button variant="filled">저장</Button>
        <Button variant="outlined" disabled>처리 중</Button>
        <Link href="/components/layout">레이아웃 보기</Link>
      </div>
    </main>
  );
}
```

Vue에서는 같은 구조를 `<script setup>`의 `@uxkm/vue/*` import와 `<template>`으로 작성합니다. HTML·Gulp는 공통 class와 semantic element를 직접 사용하고, WebSquare는 화면 XML fragment에 같은 class와 event를 연결합니다.

## 페이지 경로 연결

| 환경 | 페이지 파일 | 결과 경로 | 연결 방식 |
| --- | --- | --- | --- |
| HTML | `src/pages/components/basic.html` | `/src/pages/components/basic.html` | HTML 파일 경로 |
| Gulp | `src/pages/components/basic.njk` | `/components/basic.html` | glob build가 자동 출력 |
| Vue | `src/pages/BasicPage.vue` | `/components/basic` | Vue Router에 route 등록 |
| Nuxt | `app/pages/components/basic.vue` | `/components/basic` | 파일 기반 route 자동 생성 |
| React | `src/pages/BasicPage.jsx` | `/components/basic` | React Router에 route 등록 |
| Next.js | `app/components/basic/page.jsx` | `/components/basic` | App Router가 자동 생성 |
| WebSquare | 프로젝트의 `basic.xml` | 프로젝트 화면 URL | 화면 등록·이동 API는 프로젝트 규칙 적용 |

Vue·Nuxt의 전체 예제는 [Vue 페이지와 라우팅](../../guides/frameworks/vue/pages-routing/index.html), React·Next.js는 [React 페이지와 라우팅](../../guides/frameworks/react/pages-routing/index.html)에서 확인합니다.
