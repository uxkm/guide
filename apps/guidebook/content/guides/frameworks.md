---
id: framework-implementation
group: 프레임워크
path: guides/frameworks/
label: 프레임워크 구현
title: 프레임워크 구현
eyebrow: Frameworks
lead: 동일한 컴포넌트를 HTML, 템플릿, Vue, React, Svelte, SolidJS, Qwik, Remix, Angular, Astro, WebSquare 환경에서 일관되게 구현합니다.
order: 13
---

컴포넌트는 프레임워크별 문법을 통일하는 것이 아니라 사용자에게 전달되는 의미와 동작을 통일합니다. 구현체가 달라도 최종 DOM 구조, CSS 토큰, 상태 이름, 키보드 동작과 접근 가능한 이름은 같은 계약을 따라야 합니다.

## 구현 범위

| 환경 | 역할 | 구현 시 확인할 내용 |
| --- | --- | --- |
| HTML · JavaScript | 시맨틱 마크업과 동작의 기준 구현 | 기본 HTML 동작, 이벤트 등록·해제, DOM 변경 후 포커스와 상태 속성 |
| [Gulp · Nunjucks](gulp/index.html) | 정적 템플릿 재사용과 빌드 자동화 | 매크로 인자와 기본값, escape 정책, include 경로와 빌드 결과 HTML |
| [Vue · Nuxt](vue/index.html) | 선언형 템플릿과 반응형 상태 구현 | props·emits 계약, `v-model` 규칙, slot 구조와 SSR hydration 일치 |
| [React · Next.js](react/index.html) | 컴포넌트 합성과 상태 기반 구현 | controlled·uncontrolled 정책, ref 전달, 합성 이벤트와 Server/Client 경계 |
| [Svelte · SvelteKit](svelte/index.html) | 컴파일 기반 반응형 markup 구현 | runes, `bind:`, snippet과 SSR hydration 일치 |
| [SolidJS · SolidStart](solid/index.html) | signal 기반 fine-grained reactivity 구현 | getter props, memo·effect, JSX 합성과 SSR hydration |
| [Qwik · Qwik City](qwik/index.html) | resumability 기반 lazy hydration 구현 | `component$`, signal·store, loader와 interaction 초기화 시점 |
| [Remix](remix/index.html) | React component와 route data API 통합 | `@uxkm/react` 재사용, loader·action, form mutation |
| [Angular](angular/index.html) | TypeScript component와 template 기반 구현 | `@Input`·`@Output`, signal, two-way binding과 SSR |
| [Astro](astro/index.html) | 정적 site와 island 기반 통합 | `@uxkm/react`·`@uxkm/vue` 재사용, `client:*` hydration |
| [WebSquare XML](websquare/index.html) | 공통 HTML·CSS를 화면 XML에서 재사용 | 화면 루트 네임스페이스, `scwin` 이벤트, DataMap·DataList 바인딩 |

## 공통 계약

- 같은 variant와 size는 모든 구현에서 같은 시각 결과와 의미를 가집니다.
- disabled, readonly, loading, error 같은 상태 이름과 우선순위를 통일합니다.
- 이벤트는 프레임워크 문법에 맞추되 발생 시점과 전달 데이터는 동일하게 유지합니다.
- 프레임워크가 자동으로 접근성을 제공한다고 가정하지 않고 최종 렌더링된 HTML을 기준으로 검수합니다.
- 공통 스타일과 이미지 자산은 packages의 원본을 사용해 구현체별 복제를 줄입니다.

## 구현 절차

1. Storybook의 기본 예제와 상태 명세에서 필요한 DOM·API 계약을 확인합니다.
2. 가장 단순한 상태부터 구현하고 디자인 토큰과 공통 클래스를 연결합니다.
3. 키보드 입력, 포커스 이동, 오류와 로딩 상태를 프레임워크의 상태 모델에 연결합니다.
4. 서버 렌더링 환경은 hydration 전후의 마크업과 ID가 일치하는지 확인합니다.
5. Storybook의 프레임워크별 코드 탭과 실제 앱에서 동일한 입력으로 결과를 비교합니다.

## 컴포넌트에서 실제 UI 페이지로

Storybook 예제를 구현한 뒤에는 component를 page 문맥에 배치합니다. `기본 요소`와 `레이아웃` 분류를 예로 들면 모든 환경에서 같은 URL 의미를 사용하되 page를 발견하는 방식은 framework에 맞춥니다.

| 환경 | 기본 요소 page | 레이아웃 page | Route 생성 방식 |
| --- | --- | --- | --- |
| HTML | `src/pages/components/basic.html` | `src/pages/components/layout.html` | 파일 주소를 직접 사용 |
| Gulp | `src/pages/components/basic.njk` | `src/pages/components/layout.njk` | `src/pages/**/*.njk`가 `dist` HTML로 build |
| Vue Vite | `src/pages/BasicPage.vue` | `src/pages/LayoutPage.vue` | Vue Router route 배열에 직접 등록 |
| Nuxt 4 | `app/pages/components/basic.vue` | `app/pages/components/layout.vue` | `app/pages` 구조로 자동 생성 |
| React Vite | `src/pages/BasicPage.jsx` | `src/pages/LayoutPage.jsx` | React Router route element로 직접 등록 |
| Next.js | `app/components/basic/page.jsx` | `app/components/layout/page.jsx` | App Router folder 구조로 자동 생성 |
| SvelteKit | `src/routes/components/basic/+page.svelte` | `src/routes/components/layout/+page.svelte` | `src/routes` 구조로 자동 생성 |
| SolidStart | `src/routes/components/basic.tsx` | `src/routes/components/layout.tsx` | `src/routes` 구조로 자동 생성 |
| Qwik City | `src/routes/components/basic/index.tsx` | `src/routes/components/layout/index.tsx` | `src/routes` 구조로 자동 생성 |
| Remix | `app/routes/components/basic.jsx` | `app/routes/components/layout.jsx` | `app/routes` 파일 규칙으로 생성 |
| Angular | `src/app/pages/basic-page.component.ts` | `src/app/pages/layout-page.component.ts` | `app.routes.ts`에 route 등록 |
| Astro | `src/pages/components/basic.astro` | `src/pages/components/layout.astro` | `src/pages` 구조로 자동 생성 |
| WebSquare | project의 `basic.xml` | project의 `layout.xml` | project menu·화면 이동 규칙에 등록 |

Vue와 React는 Vite 자체가 application route를 만들어 주지 않습니다. 사용하는 client router에 URL과 page component를 명시적으로 연결하고, route 출력 위치도 `RouterView` 또는 `Routes`로 제공합니다. 반대로 Nuxt와 Next.js는 정해진 directory·file naming 규칙을 읽어 route를 생성하므로 같은 경로를 별도 설정 파일에 중복 선언하지 않습니다.

- [기본 요소 실제 UI page](../../components/basic/index.html)
- [레이아웃 실제 UI page](../../components/layout/index.html)
- [Vue·Nuxt 페이지와 라우팅](vue/pages-routing/index.html)
- [React·Next.js 페이지와 라우팅](react/pages-routing/index.html)
- [Svelte·SvelteKit 페이지와 라우팅](svelte/pages-routing/index.html)
- [SolidJS·SolidStart 페이지와 라우팅](solid/pages-routing/index.html)
- [Qwik City 페이지와 라우팅](qwik/pages-routing/index.html)
- [Remix 페이지와 라우팅](remix/pages-routing/index.html)
- [Angular 페이지와 라우팅](angular/pages-routing/index.html)
- [Astro 페이지와 라우팅](astro/pages-routing/index.html)

page를 추가한 뒤에는 navigation link, 직접 URL 접근, 새로고침, 404, document title, route 이동 후 focus와 SSR hydration까지 확인합니다. component가 보이는 것과 page route가 운영 환경에서 정상 동작하는 것은 별도 완료 조건입니다.

## WebSquare 화면 구현

WebSquare는 Vue·React처럼 컴포넌트를 import하는 앱이 아닙니다. **화면**은 페이지 단위 XML 문서이고, **scwin**은 WebSquare가 그 화면에 만들어 주는 기본 스크립트 객체명입니다. 이름은 `config.xml`의 SPA `variable`에서 바꿀 수 있습니다. Storybook WebSquare 탭의 fragment를 화면 XML에 배치한 뒤, 이벤트와 데이터는 프로젝트 화면 규칙에 맞게 연결합니다.

- **화면 XML:** 최상위 루트에서 XHTML, `w2`, `xf`, `ev` 네임스페이스를 한 번 선언합니다. 같은 문서 안의 컴포넌트 fragment는 이 선언을 상속하므로 반복하지 않습니다.
- **화면 스크립트 이벤트:** `xf:trigger`의 `ev:onclick`, `xf:input`의 `ev:onchange`처럼 XML Events를 화면 스크립트 함수에 연결합니다. 예제는 WebSquare 기본값인 `scwin`과 Studio 관례인 `{컴포넌트ID}_{이벤트명}`을 사용합니다. 프로젝트에서 객체명을 바꿨다면 `scwin`을 그 이름으로 치환합니다.
- **데이터 바인딩:** 입력·선택 값은 `ref="data:..."`로 DataMap 또는 DataList 경로에 연결합니다. 반복 목록은 DataList와 `w2:generator`를 사용할 수 있습니다.
- **구조 컴포넌트:** Container, Grid, Flex, Space는 현재 화면의 `w2:group`에 공통 클래스를 적용하며 `scwin`이나 DataList가 필요하지 않습니다. 완성된 별도 화면 XML을 포함할 때만 WFrame의 `src`를 사용합니다.

```xml
<xf:input id="userName" class="input" ref="data:user.name"></xf:input>
<xf:trigger id="btnSave" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.btnSave_onclick">
  <xf:label><![CDATA[저장]]></xf:label>
</xf:trigger>
```

```javascript
scwin.btnSave_onclick = function () {
  // 프로젝트의 submission 또는 저장 로직을 호출합니다.
};
```

이 저장소는 WebSquare 런타임, 라이선스, 공통 화면 스크립트를 포함하지 않습니다. 레이아웃·포커스·키보드·데이터 바인딩은 실제 WebSquare 엔진과 프로젝트 화면에서 검증합니다.

## 완료 기준

정상 화면이 보이는 것만으로 구현이 완료되지는 않습니다. 대표 상태, 키보드와 스크린 리더 동작, 긴 콘텐츠와 작은 화면, 이벤트 정리, 빌드 결과까지 확인해야 합니다. 공통 계약과 다르게 구현해야 한다면 프레임워크의 제약과 대체 동작을 문서에 남깁니다.
