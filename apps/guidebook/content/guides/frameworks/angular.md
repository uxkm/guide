---
id: framework-angular
group: 프레임워크
path: guides/frameworks/angular/
label: Angular
title: Angular
eyebrow: Frameworks
lead: Angular 공식 학습 흐름에 따라 컴포넌트 구현 문법을 확인합니다.
order: 110
---

Angular는 TypeScript 기반의 component framework입니다. Angular CLI와 함께 사용하며, workspace root에서 `pnpm dev:angular`를 실행하면 공통 style과 asset을 준비한 뒤 개발 서버를 엽니다.

## Angular란?

Angular는 application을 component tree로 구성하고, template과 TypeScript class를 결합해 UI를 표현합니다. dependency injection, routing, form validation을 포함한 platform을 제공하며, standalone component를 기본 단위로 사용합니다.

## 주요 특징

- TypeScript와 decorator 기반 component class
- template syntax와 structural directive
- `@Input`, `@Output`, two-way binding
- signal 기반 reactivity와 `computed`
- Angular Router와 lazy-loaded route

## 역할

`@uxkm/angular`는 시각 token과 접근성 계약을 Angular component API로 제공합니다. `@Input`은 variant와 상태를 전달하고, `@Output`과 two-way binding은 입력 state를 연결하며, content projection은 icon이나 복합 콘텐츠를 합성합니다. SSR 환경에서는 server와 client가 만드는 초기 DOM이 일치하는지 함께 검증합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 실행과 component 연결 |
| [핵심 기초](template-syntax/index.html) | interpolation, property·event binding, 조건·목록 |
| [상태와 반응성](reactivity/index.html) | signal, `computed`, `effect`와 폼 state |
| [컴포넌트 심화](components/index.html) | `@Input`, `@Output`, two-way binding과 projection |
| [페이지와 라우팅](pages-routing/index.html) | Angular Router와 lazy route |
| [TypeScript](typescript/index.html) | standalone component type과 input API |
| [베스트 프랙티스](best-practices/index.html) | 배포, 성능, 접근성과 보안 |

## 사용 시작

```typescript
import { Component } from '@angular/core';
import Button from '@uxkm/angular/button';

@Component({
  selector: 'app-save',
  standalone: true,
  imports: [Button],
  template: `<Button variant="filled">저장</Button>`,
})
export class SaveComponent {}
```

`@uxkm/angular/*`는 Vue의 `@uxkm/vue/*`, React의 `@uxkm/react/*`와 같이 component 이름으로 import하고 template에서 PascalCase tag로 사용합니다.

## 공식 문서

- [Angular 문서](https://angular.dev/overview)
- [Angular Components](https://angular.dev/guide/components)
