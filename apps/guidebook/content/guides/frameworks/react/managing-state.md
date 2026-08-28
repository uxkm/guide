---
id: react-managing-state
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/managing-state/
label: State 관리
title: React State 관리
eyebrow: React · Managing State
lead: state 구조, component 간 공유, reducer와 context를 사용해 예측 가능한 UI를 만듭니다.
order: 56
---

## State 구조 선택

서로 항상 같이 바뀌는 값은 하나로 묶고, props나 다른 state에서 계산할 수 있는 값은 중복 저장하지 않습니다. 동일한 정보가 여러 위치에 있으면 update 순서에 따라 화면이 어긋납니다.

## State 끌어올리기

두 component가 같은 값을 공유하면 가장 가까운 공통 parent로 state를 옮기고 props와 callback으로 연결합니다. UXKM controlled component는 값과 변경 callback을 parent가 소유합니다.

```jsx
function SearchPanel() {
  const [keyword, setKeyword] = useState('');
  return (
    <SearchInput value={keyword} onChange={setKeyword} />
  );
}
```

## Reducer와 Context

여러 event가 복잡한 state 전이를 만들면 `useReducer`로 update logic을 모읍니다. 깊은 tree에서 같은 상태와 dispatch가 필요하면 Context를 결합합니다. 단순 local state까지 전역 context로 만들지는 않습니다.

## State 보존과 초기화

React는 tree의 같은 위치에 같은 component가 있으면 state를 보존합니다. 다른 항목으로 명확히 초기화해야 하면 안정적인 identity를 나타내는 `key`를 사용합니다. 배열 index key로 이 동작을 우연히 제어하지 않습니다.

## 공식 문서

- [State 관리하기](https://ko.react.dev/learn/managing-state)
