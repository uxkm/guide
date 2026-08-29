---
id: angular-typescript
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/typescript/
label: TypeScript
title: Angular TypeScript
eyebrow: Angular · TypeScript
lead: standalone component와 signal input API로 package를 타입 안전하게 사용합니다.
order: 116
---

## Standalone component

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

Angular는 TypeScript를 기본으로 사용합니다. component는 `@uxkm/angular/button`처럼 subpath에서 default export로 가져옵니다.

## Input API

```typescript
import { Component, signal } from '@angular/core';
import Button from '@uxkm/angular/button';

type ButtonVariant = 'filled' | 'outline' | 'ghost' | 'text';

@Component({
  selector: 'app-save',
  standalone: true,
  imports: [Button],
  template: `<Button [variant]="variant()">저장</Button>`,
})
export class SaveComponent {
  readonly variant = signal<ButtonVariant>('filled');
}
```

variant literal union은 Storybook API와 동일한 값만 허용합니다.

## Strict template checking

`tsconfig.json`에서 `strictTemplates`를 활성화하면 template binding 오류를 compile 시점에 확인할 수 있습니다. component prop 이름과 event 이름이 API와 일치하는지 검증합니다.

## 공식 문서

- [Angular TypeScript configuration](https://angular.dev/tools/cli/typescript-configuration)
- [Angular Typed forms](https://angular.dev/guide/forms/typed-forms)
