---
id: vue-scaling-up
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/scaling-up/
label: 확장하기
title: Vue application 확장하기
eyebrow: Vue · Scaling Up
lead: Router, 상태 관리, 테스트와 SSR을 기준으로 큰 Vue application을 구성합니다.
order: 38
---

## Single-File Component와 도구

규모가 커지면 `.vue` SFC를 기본 단위로 사용하고 Vite가 template, style과 asset을 처리하게 합니다. component는 화면 역할보다 재사용 계약을 기준으로 나누고 package source를 app 내부에 복사하지 않습니다.

## Routing과 상태 관리

page URL과 navigation history는 Vue Router가, 여러 화면이 공유하는 상태는 Pinia 같은 state store가 담당합니다. form local state나 일시적인 open 상태까지 전역 store로 옮기지 않습니다.

## Testing

- composable과 순수 logic은 unit test로 검증합니다.
- component는 사용자 관점의 query와 event로 검증합니다.
- route, data loading과 주요 업무 흐름은 end-to-end test를 둡니다.
- keyboard 조작과 accessible name을 assertion에 포함합니다.

## SSR

server가 만든 초기 HTML과 client의 첫 render 결과가 같아야 hydration warning이 발생하지 않습니다. browser API, 현재 시각과 random 값은 mount 이후에 처리하거나 명시적인 초기값을 전달합니다. Nuxt 앱은 `@uxkm/vue`를 재사용하면서 이 경계를 함께 검증합니다.

## 공식 문서

- [Scaling Up](https://ko.vuejs.org/guide/scaling-up/sfc.html)
- [Server-Side Rendering](https://ko.vuejs.org/guide/scaling-up/ssr.html)
