---
id: vue-reusability
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/reusability/
label: 재사용성
title: Vue 재사용성
eyebrow: Vue · Reusability
lead: composable, custom directive와 plugin의 책임을 구분해 공통 logic을 재사용합니다.
order: 36
---

## Composable

composable은 Vue Composition API를 사용해 상태가 있는 logic을 함수로 캡슐화합니다. 이름은 `use`로 시작하고 component의 setup scope에서 호출합니다.

```javascript
import { onMounted, onUnmounted, ref } from 'vue';

export function useMediaQuery(query) {
  const matches = ref(false);
  let media;
  const update = () => { matches.value = media.matches; };

  onMounted(() => {
    media = window.matchMedia(query);
    update();
    media.addEventListener('change', update);
  });
  onUnmounted(() => media?.removeEventListener('change', update));
  return { matches };
}
```

## Directive와 plugin

DOM에 직접 접근해야 하는 낮은 수준 동작만 custom directive로 만듭니다. tooltip, focus trap처럼 UI 구조와 상태 계약이 있는 기능은 UXKM component가 우선입니다. app 전체에 설치하는 기능과 의존성 주입은 plugin으로 구성하되 전역 property를 과도하게 늘리지 않습니다.

## 선택 기준

| 필요 | 선택 |
| --- | --- |
| 상태 logic 재사용 | composable |
| 특정 element의 DOM 처리 | custom directive |
| app 전체 기능 설치 | plugin |
| 시각·접근성 계약이 있는 UI | UXKM component |

## 공식 문서

- [Composables](https://ko.vuejs.org/guide/reusability/composables.html)
- [Custom Directives](https://ko.vuejs.org/guide/reusability/custom-directives.html)
- [Plugins](https://ko.vuejs.org/guide/reusability/plugins.html)
