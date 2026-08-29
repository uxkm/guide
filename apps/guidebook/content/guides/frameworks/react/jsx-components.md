---
id: react-jsx-components
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/jsx-components/
label: UI 표현
title: React UI 표현
eyebrow: React · Describing the UI
lead: JSX 규칙과 함수 컴포넌트, props와 children을 이용해 재사용 가능한 UI를 작성합니다.
order: 52
---

## JSX 기본 규칙

```jsx
export default function Welcome({ name = '사용자' }) {
  return (
    <section className="welcome">
      <h1>{name}님, 반갑습니다.</h1>
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" />
    </section>
  );
}
```

- Component 이름은 대문자로 시작합니다.
- `class` 대신 `className`, `for` 대신 `htmlFor`를 사용합니다.
- JavaScript 값은 `{}`로 넣고 모든 tag를 닫습니다.
- 여러 형제 node는 공통 부모나 Fragment(`<>…</>`)로 감쌉니다.

## Props와 children

```jsx
function GuideCard({ title, active = false, onSelect, children }) {
  return (
    <article className={active ? 'card is-active' : 'card'}>
      <h2>{title}</h2>
      <div>{children}</div>
      <button type="button" onClick={onSelect}>선택</button>
    </article>
  );
}
```

```jsx
<GuideCard title="React" active={true} onSelect={selectReact}>
  <p>JSX 기본 문법을 확인합니다.</p>
</GuideCard>
```

Props는 component가 받은 읽기 전용 입력입니다. 렌더링 중 prop을 바꾸지 않고, 사용자 동작은 callback prop으로 부모에 전달합니다. 중첩 JSX는 `children`으로 받습니다.

## 컴포넌트

```jsx
import Button from '@uxkm/react/button';

export default function Actions() {
  return (
    <Button variant="filled" color="primary" onClick={save}>
      저장
    </Button>
  );
}
```

DOM ref가 필요하면 해당 component가 ref를 노출하는지 API부터 확인하고 내부 DOM 구조에 직접 의존하지 않습니다.

## 공식 문서

- [첫 번째 컴포넌트](https://ko.react.dev/learn/your-first-component)
- [JSX로 마크업 작성하기](https://ko.react.dev/learn/writing-markup-with-jsx)
- [컴포넌트에 Props 전달하기](https://ko.react.dev/learn/passing-props-to-a-component)
