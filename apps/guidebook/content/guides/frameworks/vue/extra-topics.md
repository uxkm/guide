---
id: vue-extra-topics
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/extra-topics/
label: 추가 주제
title: Vue 추가 주제
eyebrow: Vue · Extra Topics
lead: Vue 사용 방식, 반응성 내부 구조, render function과 Web Components 통합 지점을 살펴봅니다.
order: 41
---

## Vue를 적용하는 방식

Vue는 build 없이 기존 HTML 일부를 강화하거나 SPA, SSR·SSG application 전체를 구성할 수 있습니다. UXKM workspace는 build 기반 SFC를 기본으로 하고 Nuxt에서 SSR 통합을 검증합니다.

## 반응성과 rendering

Vue는 reactive dependency를 추적해 영향을 받는 component effect를 다시 실행합니다. DOM을 직접 바꾸기보다 state를 변경해 다음 render 결과를 만들고, 성능 문제를 분석할 때는 dependency 범위와 component update를 확인합니다.

## Render function과 JSX

template으로 표현하기 어려운 동적 구조는 `h()`와 JSX를 사용할 수 있습니다. 일반 component는 template을 우선해 선언 구조와 접근성 markup을 쉽게 검토할 수 있게 합니다.

## Web Components

Custom Element를 Vue app에서 사용할 때 property와 attribute 전달, event 이름과 SSR 동작을 확인합니다. UXKM Vue package와 HTML custom element를 같은 component로 오인하지 않습니다.

## 더 읽기

- [Vue 사용 방법](https://ko.vuejs.org/guide/extras/ways-of-using-vue.html)
- [반응성 심화](https://ko.vuejs.org/guide/extras/reactivity-in-depth.html)
- [렌더링 메커니즘](https://ko.vuejs.org/guide/extras/rendering-mechanism.html)
- [Vue와 Web Components](https://ko.vuejs.org/guide/extras/web-components.html)
