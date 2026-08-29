---
id: angular-pages-routing
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/pages-routing/
label: 페이지와 라우팅
title: Angular 페이지 라우팅
eyebrow: Angular · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 만들고 Angular Router에 연결합니다.
order: 115
---

## 만들 경로

| UI 페이지 | Angular 경로 | 포함할 내용 |
| --- | --- | --- |
| 기본 요소 | `/components/basic` | Button, Icon, Link, Typography의 실제 조합과 상태 |
| 레이아웃 | `/components/layout` | Container, Divider, Flex, Grid, Space의 반응형 조합 |

page component는 Storybook story를 복사하는 파일이 아닙니다. package component를 import하고 heading, navigation, loading·empty 상태를 포함한 실제 화면 문맥을 구성합니다.

## 페이지 파일 생성

```text
apps/angular/src/app/
├── pages/
│   ├── basic-page.component.ts
│   └── layout-page.component.ts
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

`BasicPageComponent`와 `LayoutPageComponent`는 `@uxkm/angular/*`에서 필요한 component를 `imports`에 등록합니다. 페이지 최상위에는 `main`, 페이지 제목에는 `h1`을 사용합니다.

## Router 연결

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page.component';
import { LayoutPageComponent } from './pages/layout-page.component';

export const routes: Routes = [
  { path: 'components/basic', component: BasicPageComponent },
  { path: 'components/layout', component: LayoutPageComponent },
];
```

```typescript
// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
```

`app.component.ts`에는 `<router-outlet />`과 navigation link를 둡니다.

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav aria-label="컴포넌트 분류">
      <a routerLink="/components/basic" routerLinkActive="is-active" ariaCurrentWhenActive="page">
        기본 요소
      </a>
      <a routerLink="/components/layout" routerLinkActive="is-active" ariaCurrentWhenActive="page">
        레이아웃
      </a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {}
```

## Lazy loading

큰 feature page는 `loadComponent`로 lazy load할 수 있습니다.

```typescript
{
  path: 'components/basic',
  loadComponent: () =>
    import('./pages/basic-page.component').then((m) => m.BasicPageComponent),
}
```

## 확인 순서

1. 두 URL을 주소창에서 직접 열어 정상 응답을 확인합니다.
2. `routerLink` 이동 시 전체 새로고침 없이 page가 바뀌는지 확인합니다.
3. `aria-current="page"`가 현재 navigation 항목에 전달되는지 확인합니다.
4. route 이동 뒤 document title과 `h1` focus 정책을 검토합니다.
5. SSR을 사용하면 hydration 뒤 DOM이 같은지 확인합니다.

## 공식 문서

- [Angular Routing](https://angular.dev/guide/routing)
- [Angular Router reference](https://angular.dev/api/router/Router)
