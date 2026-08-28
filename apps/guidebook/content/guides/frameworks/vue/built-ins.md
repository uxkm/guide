---
id: vue-built-ins
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/built-ins/
label: 내장 컴포넌트
title: Vue 내장 컴포넌트
eyebrow: Vue · Built-in Components
lead: Transition, KeepAlive, Teleport와 Suspense를 UXKM UI에 적용할 때의 기준을 정리합니다.
order: 37
---

## Transition과 TransitionGroup

`Transition`은 element나 component 하나의 진입·이탈 상태를, `TransitionGroup`은 keyed 목록의 변경을 연결합니다. `prefers-reduced-motion` 사용자는 과도한 이동 없이 상태 변화를 이해할 수 있어야 합니다.

## KeepAlive

동적 component를 전환할 때 instance state를 보존해야 하면 `KeepAlive`를 사용합니다. 보존된 화면이 다시 활성화될 때 stale data와 focus 위치를 점검합니다.

## Teleport

modal, popover처럼 stacking context에서 분리할 UI는 `Teleport`로 body 아래에 렌더링할 수 있습니다. DOM 위치가 바뀌어도 trigger와 dialog의 접근성 관계, focus 복귀와 scroll lock은 유지해야 합니다.

```vue
<Teleport to="body">
  <Modal v-model:open="open" title="삭제 확인">
    선택한 항목을 삭제할까요?
  </Modal>
</Teleport>
```

## Suspense

비동기 dependency가 있는 component tree의 pending·resolved 상태를 조정합니다. production 적용 전 현재 Vue version의 지원 상태를 확인하고, UXKM Skeleton이나 Spin으로 loading 상태를 명시합니다.

## 공식 문서

- [Built-in Components](https://ko.vuejs.org/api/built-in-components.html)
