---
id: websquare-screen-events
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/screen-events/
label: 화면과 이벤트
title: WebSquare 화면과 이벤트
eyebrow: WebSquare · Screen
lead: WebSquare 화면 XML의 namespace와 컴포넌트를 구성하고 scwin 이벤트를 연결합니다.
order: 62
---

## 화면 XML

화면의 최상위 root에서 XHTML, WebSquare, XForms와 XML Events namespace를 선언합니다. 같은 문서의 fragment는 이 선언을 상속합니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:ev="http://www.w3.org/2001/xml-events"
      xmlns:w2="http://www.inswave.com/websquare"
      xmlns:xf="http://www.w3.org/2002/xforms">
  <head>
    <script type="javascript"><![CDATA[
      scwin.btnSave_onclick = function () {
        // 저장 로직
      };
    ]]></script>
  </head>
  <body>
    <xf:trigger id="btnSave" type="button"
                class="btn btn_filled color_primary"
                ev:onclick="scwin.btnSave_onclick">
      <xf:label><![CDATA[저장]]></xf:label>
    </xf:trigger>
  </body>
</html>
```

## 이벤트 규칙

Studio에서 event를 추가하면 기본 관례인 `scwin.컴포넌트ID_이벤트명` 함수가 생성됩니다. XML의 `ev:onclick`, `ev:onchange`에 이 함수를 연결합니다.

```javascript
scwin.btnSave_onclick = function (event) {
  var value = inputName.getValue();
  outputName.setValue(value);
};
```

`scwin`은 page scope의 기본 변수명이며 프로젝트의 `client.config.xml` 설정에 따라 다를 수 있습니다. 프로젝트가 다른 이름을 사용하면 예제의 `scwin`을 해당 scope 변수로 바꿉니다.

## WFrame scope

WFrame 화면은 고유 scope 안에서 component ID와 script를 관리합니다. 별도 완성 화면을 포함할 때 WFrame의 `src`를 사용하고, 단순 UXKM layout fragment를 배치할 때는 현재 화면의 `w2:group`과 공통 class를 사용합니다.

## 확인 기준

- 공개 API와 event만 사용합니다.
- event 함수와 화면 전용 변수는 page scope 아래에 둡니다.
- button label, focus 순서와 keyboard 동작을 실제 엔진에서 검증합니다.

## 공식 문서

- [WebSquare 화면 그리기](https://docs1.inswave.com/sp5_user_guide/740ba8f1ef906f13)
- [컴포넌트와 이벤트 그리기](https://docs1.inswave.com/sp5_user_guide/4c4960bc7e1f2bf6)
- [WFrame Scope](https://docs1.inswave.com/sp5_user_guide/4b5b013547991bdf)
