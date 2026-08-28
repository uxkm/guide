---
id: websquare-studio
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/studio/
label: 스튜디오
title: WebSquare Studio
eyebrow: WebSquare · Studio
lead: Studio의 project 구성, 화면 작성, UDC와 debugging 흐름을 UXKM 적용 관점에서 정리합니다.
order: 61
---

## 개발 흐름

WebSquare Studio는 Design, Source와 Script view를 오가며 화면 XML과 event logic을 작성합니다. Design view의 결과만 믿지 않고 Source에서 namespace, id, binding과 class를 확인하고 실제 engine preview로 동작을 검증합니다.

## Project 구성

project에는 화면 XML, JavaScript, style, image와 설정 파일이 함께 존재합니다. UXKM 공통 CSS는 project asset 정책에 따라 한 번만 load하고 화면마다 중복 bundle하지 않습니다.

## 화면 그리기

1. page 또는 WFrame 화면을 만듭니다.
2. layout container와 업무 component를 배치합니다.
3. UXKM class와 variant를 적용합니다.
4. DataCollection과 `ref`를 연결합니다.
5. event handler를 page scope에 작성합니다.
6. preview에서 keyboard, focus와 data 흐름을 확인합니다.

## UDC와 JavaScript 전환

반복되는 업무 UI를 UDC로 만들 때 public property와 event 계약을 먼저 정의합니다. XML을 JavaScript 방식으로 전환할 경우 생성 순서와 scope가 달라질 수 있으므로 UXKM HTML fragment를 문자열로 복제하지 않습니다.

## Debugging

browser 개발자 도구와 Studio debugger에서 component ID, event 호출 순서, DataMap 값과 Submission response를 확인합니다. engine이 생성한 내부 DOM class나 비공개 method에 application code를 결합하지 않습니다.

## 공식 문서

- [WebSquare5 SP5 스튜디오](https://docs1.inswave.com/sp5_user_guide/)

