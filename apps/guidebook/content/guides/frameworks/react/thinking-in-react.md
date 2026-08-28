---
id: react-thinking
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/thinking-in-react/
label: React로 사고하기
title: React로 사고하기
eyebrow: React · Thinking in React
lead: 화면을 component hierarchy로 나누고 최소 state와 단방향 data 흐름을 설계합니다.
order: 58
---

## 1. 화면 분해

design의 시각적 묶음과 data model의 책임을 함께 보며 component boundary를 찾습니다. 한 component가 지나치게 많은 역할을 맡지 않도록 하되 단순 wrapper까지 모두 추상화하지 않습니다.

## 2. 정적 화면 만들기

먼저 data를 props로 전달해 interaction 없는 화면을 만듭니다. 이 단계에서 UXKM component를 선택하고 DOM, variant와 접근성 계약을 확인합니다.

## 3. 최소 State 찾기

시간에 따라 바뀌고 다른 값에서 계산할 수 없는 정보만 state입니다. 원본 목록에서 filter된 결과처럼 계산 가능한 값은 render 중에 구합니다.

## 4. State 위치 정하기

해당 값을 읽는 모든 component의 가장 가까운 공통 parent가 state를 소유합니다. server cache, URL state와 form state는 수명과 소유자가 다르므로 하나의 store에 섞지 않습니다.

## 5. 역방향 event 연결

data는 parent에서 child로 내려가고 user event는 callback을 통해 owner에게 올라갑니다. UXKM input의 `value`와 `onChange`, Vue의 `modelValue`와 `update:modelValue`도 같은 소유 원칙을 따릅니다.

## 검토 질문

- 같은 상태를 두 곳에 저장하고 있지 않은가?
- component 이름과 prop이 업무 의미를 드러내는가?
- loading, empty, error와 disabled 상태가 빠지지 않았는가?
- keyboard와 screen reader 흐름이 시각 순서와 일치하는가?

## 공식 문서

- [React로 사고하기](https://ko.react.dev/learn/thinking-in-react)
