---
id: angular-template-syntax
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/template-syntax/
label: 핵심 기초
title: Angular 핵심 기초
eyebrow: Angular · Essentials
lead: interpolation과 binding으로 DOM 속성, 이벤트, 조건과 목록을 선언적으로 연결합니다.
order: 112
---

## Interpolation과 binding

```html
<h1>{{ title() }}</h1>
<button
  type="button"
  [class.is-active]="active()"
  [disabled]="loading()"
  (click)="toggle()"
>
  {{ active() ? '선택됨' : '선택' }}
</button>
```

텍스트는 `{{ 표현식 }}`, property는 `[property]`, event는 `(event)`로 연결합니다. template expression에는 상태를 변경하는 복잡한 로직 대신 계산된 값을 사용합니다.

## 조건부 렌더링

```html
@if (loading()) {
  <p role="status">불러오는 중입니다.</p>
} @else if (error()) {
  <p role="alert">오류가 발생했습니다.</p>
} @else {
  <ResultList [items]="items()" />
}
```

`@if`는 조건에 따라 node를 생성·제거합니다. 자주 토글하는 단순 UI는 CSS로 표시만 바꾸는 방식도 검토합니다.

## 목록 렌더링

```html
<ul>
  @for (item of items(); track item.id) {
    <li>{{ item.label }}</li>
  }
</ul>
```

`@for`에는 `track` expression을 지정합니다. key가 없으면 목록 순서 변경 시 DOM이 불필요하게 재생성될 수 있습니다.

## 이벤트와 폼 binding

```html
<input [(ngModel)]="keyword" type="search" aria-label="검색" />
<form (submit)="$event.preventDefault()">
  <button type="submit">검색</button>
</form>
```

Input은 `value`와 `valueChange` 또는 two-way binding API를 제공하면 Angular form과 연결합니다.

## 공식 문서

- [Angular Templates](https://angular.dev/guide/templates)
- [Angular Control flow](https://angular.dev/guide/templates/control-flow)
