---
id: angular-quick-start
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/quick-start/
label: 빠른 시작
title: Angular 빠른 시작
eyebrow: Angular · Quick Start
lead: Angular application을 실행하고 standalone component에서 component를 사용합니다.
order: 111
---

## 실행 환경

이 저장소의 Angular 앱은 Angular CLI를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:angular
```

새 Angular project를 시작할 때는 `ng new`로 standalone component와 routing 구성을 선택할 수 있습니다. 기존 workspace에서는 이미 정한 build 설정을 유지합니다.

## 첫 standalone component

```typescript
import { Component, signal } from '@angular/core';
import Button from '@uxkm/angular/button';

@Component({
  selector: 'app-save',
  standalone: true,
  imports: [Button],
  template: `
    <Button variant="filled" (click)="saved.set(true)">저장</Button>
    @if (saved()) {
      <p role="status">저장했습니다.</p>
    }
  `,
})
export class SaveComponent {
  readonly saved = signal(false);
}
```

standalone component는 `imports` 배열에 component class를 등록합니다. template에서는 `Button`, `Input`처럼 PascalCase tag로 사용합니다.

## 공통 자산 연결

```typescript
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { initInteractions } from '@uxkm/interactions';
import { AppComponent } from './app/app.component';

initInteractions();
bootstrapApplication(AppComponent);
```

`angular.json` 또는 `index.html`에서 `public/styles/uxkm.css`를 로드합니다. `pnpm build:shared`로 생성된 `uxkm.css`와 `images`가 `public`에 반영되어 있는지 확인합니다.

## 다음 단계

- template syntax가 낯설면 **핵심 기초**를 먼저 읽습니다.
- 입력 state를 다룰 때는 **상태와 반응성**을 확인합니다.
- parent·child 계약은 **컴포넌트 심화**에서 이어집니다.

## 공식 문서

- [Angular Essentials](https://angular.dev/essentials)
