import{w as U,I as o,j as e}from"./iframe-DbjMrqYU.js";import{w as c,b as W}from"./story-renders-CrEYzOkG.js";import{b as X,a as Y}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const Z=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],$=[{name:"name",type:"string",default:"—",description:"common-icons 갤러리 키. 지정 시 기본 슬롯 대신 미리 정의된 stroke 경로를 렌더합니다"},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"아이콘 크기. md는 icon만, 나머지는 icon_sm · icon_lg · icon_xl"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스 (currentColor 상속)"},{name:"inline",type:"boolean",default:"false",description:"텍스트와 수직 정렬 (icon_inline)"},{name:"spin",type:"boolean",default:"false",description:"회전 애니메이션 (icon_spin)"},{name:"button",type:"boolean",default:"false",description:"클릭 가능한 아이콘 버튼 (icon_button + button 태그)"},{name:"circle",type:"boolean",default:"false",description:"원형 배경 (icon_circle)"},{name:"square",type:"boolean",default:"false",description:"사각 배경 (icon_square)"},{name:"pulse",type:"boolean",default:"false",description:"펄스 애니메이션 (icon_pulse, circle과 함께)"},{name:"aria-label",type:"string",default:"—",description:"button·의미 있는 아이콘 시 접근성 라벨"},X],ee=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],oe=[{name:"icon",description:"SVG 루트 기본 크기"},{name:"icon_sm · icon_lg · icon_xl",description:"크기 변형"},{name:"icon_inline",description:"텍스트 인라인 정렬"},{name:"icon_spin",description:"회전 애니메이션"},{name:"icon_button",description:"아이콘 버튼 래퍼"},{name:"icon_circle · icon_square",description:"배경 형태"},{name:"icon_circle-sm · icon_circle-lg",description:"원형 배경 크기"},{name:"icon_pulse",description:"펄스 강조"},{name:"icon_group",description:"여러 아이콘 가로 배치 컨테이너"},{name:"color_*",description:"공통 색상 유틸"},...Y],ce=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],re=[{name:"--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl",default:"1rem · 1.25rem · 1.5rem · 2rem",description:"아이콘 지름"},{name:"--icon-spin-duration",default:"0.8s",description:"회전 주기"},{name:"--icon-circle-size · --icon-circle-size-sm · --icon-circle-size-lg",default:"2.25rem · 1.75rem · 2.75rem",description:"원형 배경 크기"},{name:"--icon-pulse-duration",default:"1.5s",description:"펄스 애니메이션 주기"}],ae=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ne=[{name:"children",description:"SVG path·circle 등 자식 요소. name prop이 있으면 children 대신 갤러리 경로를 사용"}],se=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: aria-label)와 동일한 의미입니다.",tables:[{columns:Z,rows:$,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:ae,rows:ne,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ee,rows:oe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ce,rows:re,codeColumn:"name"}]}],le={name:"search",color:"",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},de={title:"Components/기본 요소/Icon",id:"components-icon",component:o,tags:["autodocs"],argTypes:{name:{control:"select",options:U,type:{name:"enum",summary:"common-icons 갤러리 키"}},color:{control:"select",options:["","default","primary","success","warning","danger","info","muted"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},spin:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},circle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},square:{control:"boolean",type:{name:"boolean",summary:"boolean"}},pulse:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:se,docs:{description:{component:"SVG 인라인 아이콘의 크기, 색상, 정렬을 일관되게 적용하는 기본 요소입니다."}}}},r={parameters:{controls:{disable:!1}},args:{...le},render:W(o)},a={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function BasicExample() {
  return (
    <>
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
      <Icon>
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),e.jsxs(o,{children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),e.jsx(o,{children:e.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})})]}))},n={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본 크기는 icon 클래스만 사용합니다. icon_sm · md(기본) · icon_lg · icon_xl로 스케일을 조절합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function SizeExample() {
  return (
    <>
      <Icon size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="lg">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="xl">
        <path d="M12 5v14M5 12h14" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),e.jsx(o,{children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),e.jsx(o,{size:"lg",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),e.jsx(o,{size:"xl",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})]}))},s={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ColorExample() {
  return (
    <>
      <Icon color="default">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon color="warning">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </Icon>
      <Icon color="danger">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"default",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),e.jsx(o,{color:"primary",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),e.jsxs(o,{color:"success",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"M22 4 12 14.01l-3-3"})]}),e.jsx(o,{color:"warning",children:e.jsx("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"})}),e.jsxs(o,{color:"danger",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"m15 9-6 6M9 9l6 6"})]})]}))},l={name:"텍스트와 함께",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"inline prop으로 icon_inline 클래스를 적용해 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 ariaLabel을 지정합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Icon inline color="info">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        <span className="ml_sm">변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon inline color="success">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Icon>
        <span className="ml_sm">업로드가 완료되었습니다.</span>
      </p>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsxs(o,{inline:!0,color:"info",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("circle",{cx:"12",cy:"8",r:"1",fill:"currentColor",stroke:"none"})]}),e.jsx("span",{className:"ml_sm",children:"변경 사항이 자동 저장됩니다."})]}),e.jsxs("p",{children:[e.jsxs(o,{inline:!0,color:"success",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"M22 4 12 14.01l-3-3"})]}),e.jsx("span",{className:"ml_sm",children:"업로드가 완료되었습니다."})]})]}))},t={name:"원형 · 사각 배경",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"circle · square prop으로 icon_circle · icon_square 배경을 적용합니다. color로 색상을 지정합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function CircleExample() {
  return (
    <>
      <Icon circle color="primary" size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon circle color="success" size="sm">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon circle color="danger" size="lg">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
      <Icon square color="primary" size="sm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsx(o,{circle:!0,color:"primary",size:"sm",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),e.jsxs(o,{circle:!0,color:"success",size:"sm",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"M22 4 12 14.01l-3-3"})]}),e.jsx(o,{circle:!0,color:"danger",size:"lg",children:e.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})}),e.jsxs(o,{square:!0,color:"primary",size:"sm",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})]}))},i={name:"아이콘 버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"button prop으로 icon_button 클릭 가능한 아이콘 버튼을 만듭니다. ariaLabel을 반드시 지정합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function IconButtonExample() {
  return (
    <>
      <Icon button color="primary" ariaLabel="검색">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon button color="muted" ariaLabel="설정">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </Icon>
      <Icon button color="danger" ariaLabel="삭제">
        <path d="M18 6 6 18M6 6l12 12" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs(o,{button:!0,color:"primary",ariaLabel:"검색",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),e.jsxs(o,{button:!0,color:"muted",ariaLabel:"설정",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}),e.jsx(o,{button:!0,color:"danger",ariaLabel:"삭제",children:e.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})]}))},p={name:"펄스",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"pulse prop으로 icon_pulse 알림·상태 강조 애니메이션을 적용합니다. circle과 함께 사용합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function PulseExample() {
  return (
    <>
      <Icon circle pulse color="primary" size="sm">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Icon>
      <Icon circle pulse color="danger" size="sm">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs(o,{circle:!0,pulse:!0,color:"primary",size:"sm",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),e.jsx(o,{circle:!0,pulse:!0,color:"danger",size:"sm",children:e.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"currentColor",stroke:"none"})})]}))},m={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"icon_group으로 여러 아이콘을 나란히 배치합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function GroupExample() {
  return (
    <>
      <div className="icon_group">
        <Icon color="muted">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </Icon>
        <Icon color="muted">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        <Icon color="muted">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </Icon>
      </div>
      <p>
        <Icon circle color="primary" size="sm">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
        <span className="ml_sm color_muted">홍길동님이 댓글을 남겼습니다.</span>
      </p>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"icon_group",children:[e.jsxs(o,{color:"muted",children:[e.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),e.jsx("polyline",{points:"16 6 12 2 8 6"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]}),e.jsxs(o,{color:"muted",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),e.jsx(o,{color:"muted",children:e.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})})]}),e.jsxs("p",{children:[e.jsxs(o,{circle:!0,color:"primary",size:"sm",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),e.jsx("span",{className:"ml_sm color_muted",children:"홍길동님이 댓글을 남겼습니다."})]})]}))},d={name:"로딩",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"spin prop으로 icon_spin 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function SpinExample() {
  return (
    <>
      <Icon spin color="primary">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
      <Icon spin size="lg" color="muted">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsx(o,{spin:!0,color:"primary",children:e.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),e.jsx(o,{spin:!0,size:"lg",color:"muted",children:e.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})]}))},u={name:"아이콘 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';

export function GalleryExample() {
  return (
    <div className="icon_grid">
      {commonIconGallery.map((name) => (
        <div key={name} className="icon_grid-item">
          <Icon name={name} className="icon_lg" />
          <span className="color_muted">{name}</span>
        </div>
      ))}
    </div>
  );
}`,language:"tsx"}}},render:c(e.jsx("div",{className:"icon_grid",children:U.map(h=>e.jsxs("div",{className:"icon_grid-item",children:[e.jsx(o,{name:h,className:"icon_lg"}),e.jsx("span",{className:"color_muted",children:h})]},h))}))};var x,I,M;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(Icon)
}`,...(M=(I=r.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var y,v,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function BasicExample() {
  return (
    <>
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
      <Icon>
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
      <Icon>
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
    </>)
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,j,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '기본 크기는 icon 클래스만 사용합니다. icon_sm · md(기본) · icon_lg · icon_xl로 스케일을 조절합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function SizeExample() {
  return (
    <>
      <Icon size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="lg">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="xl">
        <path d="M12 5v14M5 12h14" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="lg">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="xl">
        <path d="M12 5v14M5 12h14" />
      </Icon>
    </>)
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var _,z,k;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '색상',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ColorExample() {
  return (
    <>
      <Icon color="default">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon color="warning">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </Icon>
      <Icon color="danger">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon color="default">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon color="warning">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </Icon>
      <Icon color="danger">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </Icon>
    </>)
}`,...(k=(z=s.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var L,C,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '텍스트와 함께',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'inline prop으로 icon_inline 클래스를 적용해 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 ariaLabel을 지정합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Icon inline color="info">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        <span className="ml_sm">변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon inline color="success">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Icon>
        <span className="ml_sm">업로드가 완료되었습니다.</span>
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <p>
        <Icon inline color="info">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        <span className="ml_sm">변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon inline color="success">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Icon>
        <span className="ml_sm">업로드가 완료되었습니다.</span>
      </p>
    </>)
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var V,P,N;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '원형 · 사각 배경',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'circle · square prop으로 icon_circle · icon_square 배경을 적용합니다. color로 색상을 지정합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function CircleExample() {
  return (
    <>
      <Icon circle color="primary" size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon circle color="success" size="sm">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon circle color="danger" size="lg">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
      <Icon square color="primary" size="sm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon circle color="primary" size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon circle color="success" size="sm">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon circle color="danger" size="lg">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
      <Icon square color="primary" size="sm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
    </>)
}`,...(N=(P=t.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var H,S,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'button prop으로 icon_button 클릭 가능한 아이콘 버튼을 만듭니다. ariaLabel을 반드시 지정합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function IconButtonExample() {
  return (
    <>
      <Icon button color="primary" ariaLabel="검색">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon button color="muted" ariaLabel="설정">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </Icon>
      <Icon button color="danger" ariaLabel="삭제">
        <path d="M18 6 6 18M6 6l12 12" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon button color="primary" ariaLabel="검색">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon button color="muted" ariaLabel="설정">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </Icon>
      <Icon button color="danger" ariaLabel="삭제">
        <path d="M18 6 6 18M6 6l12 12" />
      </Icon>
    </>)
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var G,R,q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '펄스',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'pulse prop으로 icon_pulse 알림·상태 강조 애니메이션을 적용합니다. circle과 함께 사용합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function PulseExample() {
  return (
    <>
      <Icon circle pulse color="primary" size="sm">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Icon>
      <Icon circle pulse color="danger" size="sm">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon circle pulse color="primary" size="sm">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Icon>
      <Icon circle pulse color="danger" size="sm">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </Icon>
    </>)
}`,...(q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,B,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'icon_group으로 여러 아이콘을 나란히 배치합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function GroupExample() {
  return (
    <>
      <div className="icon_group">
        <Icon color="muted">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </Icon>
        <Icon color="muted">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        <Icon color="muted">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </Icon>
      </div>
      <p>
        <Icon circle color="primary" size="sm">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
        <span className="ml_sm color_muted">홍길동님이 댓글을 남겼습니다.</span>
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="icon_group">
        <Icon color="muted">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </Icon>
        <Icon color="muted">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        <Icon color="muted">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </Icon>
      </div>
      <p>
        <Icon circle color="primary" size="sm">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
        <span className="ml_sm color_muted">홍길동님이 댓글을 남겼습니다.</span>
      </p>
    </>)
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var A,T,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '로딩',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'spin prop으로 icon_spin 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function SpinExample() {
  return (
    <>
      <Icon spin color="primary">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
      <Icon spin size="lg" color="muted">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Icon spin color="primary">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
      <Icon spin size="lg" color="muted">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
    </>)
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '아이콘 유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';

export function GalleryExample() {
  return (
    <div className="icon_grid">
      {commonIconGallery.map((name) => (
        <div key={name} className="icon_grid-item">
          <Icon name={name} className="icon_lg" />
          <span className="color_muted">{name}</span>
        </div>
      ))}
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="icon_grid">
      {commonIconGallery.map(name => <div key={name} className="icon_grid-item">
          <Icon name={name} className="icon_lg" />
          <span className="color_muted">{name}</span>
        </div>)}
    </div>)
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ue=["Playground","Basic","Size","Color","Inline","Circle","IconButton","Pulse","Group","Spin","Gallery"];export{a as Basic,t as Circle,s as Color,u as Gallery,m as Group,i as IconButton,l as Inline,r as Playground,p as Pulse,n as Size,d as Spin,ue as __namedExportsOrder,de as default};
