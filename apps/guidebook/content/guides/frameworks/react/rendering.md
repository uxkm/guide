---
id: react-rendering
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/rendering/
label: 조건과 목록
title: React 조건과 목록 렌더링
eyebrow: React · Describing the UI
lead: JavaScript 조건과 배열 메서드를 이용해 상태에 맞는 JSX와 목록을 렌더링합니다.
order: 53
---

## 조건부 반환

React는 별도 template directive 대신 JavaScript 조건을 사용합니다.

```jsx
function Result({ loading, error, items }) {
  if (loading) return <p role="status">불러오는 중입니다.</p>;
  if (error) return <p role="alert">오류가 발생했습니다.</p>;
  return <ResultList items={items} />;
}
```

## JSX 내부 조건

```jsx
<section>
  {selected ? <Detail item={selected} /> : <Empty />}
  {canEdit && <Button onClick={edit}>수정</Button>}
</section>
```

두 결과 중 하나는 삼항 연산자, 조건이 참일 때만 표시할 요소는 `&&`를 사용할 수 있습니다. 조건이 복잡하면 변수나 별도 component로 분리합니다.

## 목록과 key

```jsx
function FrameworkList({ items }) {
  return items.length > 0 ? (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  ) : (
    <p>항목이 없습니다.</p>
  );
}
```

`key`는 형제 사이에서 항목을 안정적으로 식별합니다. 목록 순서가 바뀌거나 항목이 추가·삭제될 수 있으면 index나 렌더링 중 생성한 값을 key로 사용하지 않습니다.

## 목록 변경

상태 배열을 `push`, `splice`로 직접 변경하지 않고 새 배열을 만듭니다.

```javascript
setItems((items) => [...items, newItem]);
setItems((items) => items.filter((item) => item.id !== targetId));
setItems((items) => items.map((item) =>
  item.id === changed.id ? changed : item,
));
```

## 공식 문서

- [조건부 렌더링](https://ko.react.dev/learn/conditional-rendering)
- [리스트 렌더링](https://ko.react.dev/learn/rendering-lists)
- [State 배열 업데이트하기](https://ko.react.dev/learn/updating-arrays-in-state)
