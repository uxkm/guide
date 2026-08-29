---
id: angular-reactivity
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/reactivity/
label: 상태와 반응성
title: Angular 반응형 상태
eyebrow: Angular · Signals
lead: signal과 computed를 중심으로 화면 state를 선언하고 effect로 외부 동작을 연결합니다.
order: 113
---

## signal

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button type="button" (click)="increment()">{{ count() }}회</button>
  `,
})
export class CounterComponent {
  readonly count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }
}
```

signal은 template에서 `count()`처럼 함수 호출로 읽습니다.

## computed

파생 값은 별도 signal로 중복 저장하지 않고 `computed`로 계산합니다.

```typescript
import { computed, signal } from '@angular/core';

const keyword = signal('');
const items = signal([{ id: 1, label: 'Angular' }]);
const filteredItems = computed(() =>
  items().filter((item) => item.label.includes(keyword())),
);
```

computed getter는 side effect 없이 값을 반환해야 합니다.

## effect

`effect`는 signal 변경에 따라 logging, 저장, 비동기 요청처럼 Angular 바깥의 side effect를 실행할 때 사용합니다.

```typescript
import { effect, inject, DestroyRef, signal } from '@angular/core';

const keyword = signal('');

effect((onCleanup) => {
  const controller = new AbortController();
  search(keyword(), { signal: controller.signal });
  onCleanup(() => controller.abort());
});
```

template에 표시할 파생 값을 만들기 위해 effect를 사용하지 않습니다. 그 경우에는 computed가 적합합니다.

## 폼 state

Input은 controlled value와 change event를 제공합니다. signal setter 또는 two-way binding과 연결해 단방향 data flow를 유지합니다.

## 공식 문서

- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Computed](https://angular.dev/guide/signals#computed-signals)
