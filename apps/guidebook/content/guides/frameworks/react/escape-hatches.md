---
id: react-escape-hatches
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/escape-hatches/
label: 탈출구
title: React 탈출구
eyebrow: React · Escape Hatches
lead: ref와 Effect를 필요한 경계에서만 사용해 DOM과 외부 시스템을 React에 연결합니다.
order: 57
---

## Ref

ref는 render에 필요하지 않지만 render 사이에 유지할 값 또는 DOM node를 가리킵니다. ref 값을 바꿔도 다시 render되지 않으므로 화면에 표시되는 값은 state를 사용합니다.

```jsx
const inputRef = useRef(null);

function focusSearch() {
  inputRef.current?.focus();
}

return <input ref={inputRef} aria-label="검색" />;
```

UXKM component가 ref를 공개하면 focus 같은 명확한 imperative 작업에만 사용합니다. 내부 DOM 구조에 의존하는 selector를 app에서 만들지 않습니다.

## Effect

Effect는 React가 아닌 외부 시스템과 component를 동기화할 때 사용합니다. event에 대한 계산, props에서 파생되는 값과 state reset은 대부분 Effect 없이 처리할 수 있습니다.

```jsx
useEffect(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => setReducedMotion(media.matches);
  update();
  media.addEventListener('change', update);
  return () => media.removeEventListener('change', update);
}, []);
```

dependency는 Effect가 읽는 reactive 값을 모두 포함하고 cleanup에서 subscription과 timer를 해제합니다.

## 공식 문서

- [탈출구](https://ko.react.dev/learn/escape-hatches)
