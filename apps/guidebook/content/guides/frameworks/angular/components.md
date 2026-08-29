---
id: angular-components
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/components/
label: 컴포넌트 심화
title: Angular 컴포넌트 심화
eyebrow: Angular · Components
lead: Input, Output, two-way binding과 content projection으로 component 계약을 구성합니다.
order: 114
---

## Input과 Output

```typescript
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  template: `
    <button type="button" [disabled]="disabled()" (click)="activate.emit()">
      {{ label() }}
    </button>
  `,
})
export class ActionButtonComponent {
  readonly label = input.required<string>();
  readonly disabled = input(false);
  readonly activate = output<void>();
}
```

Input은 부모에서 자식으로 내려오는 읽기 전용 값입니다. Output은 `EventEmitter` 대신 `output()` 함수를 사용할 수 있습니다.

## Two-way binding

Input이 `value` input과 `valueChange` output을 제공하면 다음처럼 연결합니다.

```typescript
import { Component, signal } from '@angular/core';
import Input from '@uxkm/angular/input';

@Component({
  selector: 'app-email-field',
  standalone: true,
  imports: [Input],
  template: `
    <label for="email">이메일</label>
    <Input
      id="email"
      type="email"
      [value]="email()"
      (valueChange)="email.set($event)"
      clearable
    />
  `,
})
export class EmailFieldComponent {
  readonly email = signal('');
}
```

`[(value)]` 형태의 model binding API를 제공하는 component는 문서의 bindable property를 따릅니다.

## Content projection

```html
<Button variant="filled">
  <ng-container ngProjectAs="[icon-before]">
    <app-save-icon />
  </ng-container>
  저장
</Button>
```

named projection slot은 component가 정의한 selector contract에 맞춰 전달합니다. 최종 DOM의 시맨틱 구조는 렌더링 결과를 기준으로 확인합니다.

## 폼 예제

```typescript
import { Component, signal } from '@angular/core';
import Button from '@uxkm/angular/button';
import Input from '@uxkm/angular/input';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [Button, Input],
  template: `
    <form (submit)="submit($event)">
      <Input [value]="email()" (valueChange)="email.set($event)" type="email" required />
      <Button type="submit">저장</Button>
    </form>
  `,
})
export class EmailFormComponent {
  readonly email = signal('');

  submit(event: Event) {
    event.preventDefault();
  }
}
```

## 공식 문서

- [Angular Inputs](https://angular.dev/guide/components/inputs)
- [Angular Outputs](https://angular.dev/guide/components/outputs)
- [Angular Content projection](https://angular.dev/guide/components/content-projection)
