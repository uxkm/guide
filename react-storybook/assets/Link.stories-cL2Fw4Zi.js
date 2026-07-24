import{j as e,I as a}from"./iframe-ifEc15ad.js";import{L as n}from"./Link-D9Mr3lkf.js";import{w as o,b as Z}from"./story-renders-Hdz_JUlO.js";import{r as $,a as ee}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const ne=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ae=[{name:"color",type:"'primary' | 'muted' | 'success' | 'warning' | 'danger'",default:"primary",description:"공통 color_* 클래스"},{name:"size",type:"'sm' | 'lg' | 'xl'",default:"—",description:"공통 size_* 클래스"},{name:"underline",type:"boolean",default:"false",description:"항상 밑줄 (link_underline)"},{name:"no-underline",type:"boolean",default:"false",description:"밑줄 없음 (link_no-underline)"},{name:"standalone",type:"boolean",default:"false",description:"터치 영역 확대 (link_standalone)"},{name:"nav",type:"boolean",default:"false",description:"내비게이션 링크 스타일 (link_nav)"},{name:"block",type:"boolean",default:"false",description:"블록 링크 (link_block)"},{name:"back",type:"boolean",default:"false",description:"뒤로가기 링크 (link_back)"},{name:"icon-only",type:"boolean",default:"false",description:"아이콘만 표시 (link_icon-only)"},{name:"active",type:"boolean",default:"false",description:"현재 페이지·활성 상태 (is-active)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled, aria-disabled, tabindex -1)"},{name:"label",type:"string",default:"—",description:"링크 텍스트. default 슬롯으로 대체 가능"},{name:"href",type:"string",default:"#",description:"이동 URL"},{name:"target",type:"string",default:"—",description:"a target 속성 (예: _blank)"},{name:"rel",type:"string",default:"—",description:"a rel 속성 (예: noopener noreferrer)"},{name:"aria-label",type:"string",default:"—",description:"icon-only 등 텍스트 없을 때 접근성 라벨"},$],oe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],le=[{name:"link",description:"하이퍼링크 루트"},{name:"link_underline · link_no-underline · link_standalone",description:"밑줄·터치 영역"},{name:"link_nav · link_back · link_block · link_icon-only",description:"용도별 변형"},{name:"link_icon",description:"링크 내 아이콘"},{name:"link_row · link_group · link_group-inline",description:"링크 묶음 레이아웃"},{name:"is-active · is-disabled",description:"상태 클래스"},{name:"color_* · size_*",description:"공통 색상·크기 유틸"},...ee],re=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],se=[{name:"--link-gap",default:"var(--space-xs)",description:"아이콘·텍스트 간격"},{name:"--link-font-weight",default:"500",description:"링크 두께"},{name:"--link-underline-offset",default:"2px",description:"밑줄 오프셋"},{name:"--link-nav-padding-y · --link-nav-padding-x",default:"0.35rem · 0.5rem",description:"네비 링크 패딩"},{name:"--link-standalone-padding-y · --link-standalone-padding-x",default:"0.25rem · 0.15rem",description:"독립 링크 터치 영역"},{name:"--link-icon-only-size",default:"2rem",description:"아이콘만 링크 크기"}],ie=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ce=[{name:"label",description:"링크 텍스트. children으로 대체 가능"},{name:"children",description:"링크 텍스트 (label prop 대체). 아이콘·보조 텍스트를 함께 넣을 수 있음"},{name:"icon",description:"텍스트 앞 아이콘 (Vue #icon 슬롯 대응, link_icon 클래스)"}],te=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: no-underline, aria-label)와 동일한 의미입니다.",tables:[{columns:ne,rows:ae,codeColumn:"name"}]},{title:"API · Children",description:"Vue 슬롯(default · icon)에 대응하는 React prop·children입니다.",tables:[{columns:ie,rows:ce,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:oe,rows:le,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:re,rows:se,codeColumn:"name"}]}],me={color:"primary",size:"",underline:!1,noUnderline:!1,standalone:!1,nav:!1,block:!1,back:!1,iconOnly:!1,active:!1,disabled:!1,label:"라벨",href:"#",target:"",rel:"",ariaLabel:"접근성 라벨"},be={title:"Components/기본 요소/Link",id:"components-link",component:n,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","muted","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'muted' | 'success' | 'warning' | 'danger'"}},size:{control:"select",options:["","sm","lg","xl"],labels:{"":"기본",sm:"sm",lg:"lg",xl:"xl"},type:{name:"enum",summary:"'sm' | 'lg' | 'xl' (기본: base)"}},underline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noUnderline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},standalone:{control:"boolean",type:{name:"boolean",summary:"boolean"}},nav:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},back:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},active:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},href:{control:"text",type:{name:"string",summary:"string"}},target:{control:"text",type:{name:"string",summary:"string"}},rel:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:te,docs:{description:{component:"페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 typo_link를 사용합니다."}}}},l={parameters:{controls:{disable:!1}},args:{...me},render:Z(n)},r={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다."},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';

export function BasicExample() {
  return (
    <>
      <Link label="더 보기" />
      <Link label="가이드 문서" />
      <Link underline label="항상 밑줄" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"더 보기"}),e.jsx(n,{label:"가이드 문서"}),e.jsx(n,{underline:!0,label:"항상 밑줄"})]}))},s={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';

export function ColorExample() {
  return (
    <div className="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{className:"link_row",children:[e.jsx(n,{color:"primary",label:"Primary"}),e.jsx(n,{color:"muted",label:"Muted"}),e.jsx(n,{color:"success",label:"Success"}),e.jsx(n,{color:"warning",label:"Warning"}),e.jsx(n,{color:"danger",label:"Danger"})]}))},i={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 size_* 클래스로 텍스트 크기를 조절합니다."},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';

export function SizeExample() {
  return (
    <>
      <Link size="sm" label="Small" />
      <Link label="Base" />
      <Link size="lg" label="Large" />
      <Link size="xl" label="Extra Large" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",label:"Small"}),e.jsx(n,{label:"Base"}),e.jsx(n,{size:"lg",label:"Large"}),e.jsx(n,{size:"xl",label:"Extra Large"})]}))},c={name:"스타일",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"underline · noUnderline · standalone prop으로 밑줄과 터치 영역을 조절합니다."},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';

export function StyleExample() {
  return (
    <div className="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link noUnderline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{className:"link_row",children:[e.jsx(n,{label:"기본 (hover 밑줄)"}),e.jsx(n,{underline:!0,label:"항상 밑줄"}),e.jsx(n,{noUnderline:!0,label:"밑줄 없음"}),e.jsx(n,{standalone:!0,label:"터치 영역 확대"})]}))},t={name:"내비게이션",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"nav · active prop으로 link_nav · is-active 메뉴·탭 링크를 표현합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function NavExample() {
  return (
    <>
      <nav className="link_group-inline" aria-label="섹션 내비게이션">
        <Link nav active label="개요" />
        <Link nav label="컴포넌트" />
        <Link nav label="토큰" />
        <Link nav label="접근성" />
      </nav>
      <Link
        back
        label="이전 페이지"
        icon={
          <Icon className="link_icon">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
        }
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("nav",{className:"link_group-inline","aria-label":"섹션 내비게이션",children:[e.jsx(n,{nav:!0,active:!0,label:"개요"}),e.jsx(n,{nav:!0,label:"컴포넌트"}),e.jsx(n,{nav:!0,label:"토큰"}),e.jsx(n,{nav:!0,label:"접근성"})]}),e.jsx(n,{back:!0,label:"이전 페이지",icon:e.jsx(a,{className:"link_icon",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})})]}))},m={name:"블록 · 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"block prop · link_group으로 세로 링크 목록을 구성합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function BlockExample() {
  return (
    <div className="link_group" style={{ maxWidth: '280px', width: '100%' }}>
      <Link
        block
        label="시작하기"
        icon={
          <Icon className="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>
        }
      />
      <Link
        block
        label="컴포넌트"
        icon={
          <Icon className="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>
        }
      />
      <Link
        block
        color="muted"
        label="도움말"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>
        }
      />
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{className:"link_group",style:{maxWidth:"280px",width:"100%"},children:[e.jsx(n,{block:!0,label:"시작하기",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("path",{d:"M14 2v6h6"})]})}),e.jsx(n,{block:!0,label:"컴포넌트",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18M9 21V9"})]})}),e.jsx(n,{block:!0,color:"muted",label:"도움말",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("circle",{cx:"12",cy:"8",r:"1",fill:"currentColor",stroke:"none"})]})})]}))},d={name:"아이콘 전용",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"iconOnly prop으로 link_icon-only 텍스트 없는 링크 버튼을 만듭니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function IconOnlyExample() {
  return (
    <>
      <Link
        iconOnly
        ariaLabel="검색"
        icon={
          <Icon className="link_icon">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>
        }
      />
      <Link
        iconOnly
        ariaLabel="편집"
        icon={
          <Icon className="link_icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>
        }
      />
      <Link
        iconOnly
        color="muted"
        ariaLabel="더 보기"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </Icon>
        }
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(n,{iconOnly:!0,ariaLabel:"검색",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]})}),e.jsx(n,{iconOnly:!0,ariaLabel:"편집",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),e.jsx(n,{iconOnly:!0,color:"muted",ariaLabel:"더 보기",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"}),e.jsx("circle",{cx:"5",cy:"12",r:"1"})]})})]}))},p={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function IconDemoExample() {
  return (
    <div className="link_row">
      <Link
        label="외부 링크"
        icon={
          <Icon className="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>
        }
      />
      <Link>
        다운로드
        <Icon className="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>
      <Link
        label="다음 단계"
        icon={
          <Icon className="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        }
      />
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{className:"link_row",children:[e.jsx(n,{label:"외부 링크",icon:e.jsxs(a,{className:"link_icon",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})}),e.jsxs(n,{children:["다운로드",e.jsxs(a,{className:"link_icon",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})]}),e.jsx(n,{label:"다음 단계",icon:e.jsx(a,{className:"link_icon",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]}))},k={name:"새 창 열기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ExternalExample() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      공식 문서
      <span className="color_muted size_sm">(새 창)</span>
      <Icon className="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>
  );
}`,language:"tsx"}}},render:o(e.jsxs(n,{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:["공식 문서",e.jsx("span",{className:"color_muted size_sm",children:"(새 창)"}),e.jsxs(a,{className:"link_icon",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]}))},u={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';

export function DisabledExample() {
  return (
    <>
      <Link disabled label="비활성 링크" />
      <Link disabled label="비활성 (span)" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(n,{disabled:!0,label:"비활성 링크"}),e.jsx(n,{disabled:!0,label:"비활성 (span)"})]}))},x={name:"문맥 속 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다."},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';

export function ContextExample() {
  return (
    <>
      <div className="alert color_info" role="alert">
        <div className="alert_body">
          <div className="alert_title">업데이트 안내</div>
          <p className="alert_desc">
            새 버전이 출시되었습니다.
            <Link size="sm" label="릴리스 노트 보기" />
          </p>
        </div>
      </div>
      <p className="color_muted">
        계정이 없으신가요?
        <Link label="회원가입" />
      </p>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"alert color_info",role:"alert",children:e.jsxs("div",{className:"alert_body",children:[e.jsx("div",{className:"alert_title",children:"업데이트 안내"}),e.jsxs("p",{className:"alert_desc",children:["새 버전이 출시되었습니다.",e.jsx(n,{size:"sm",label:"릴리스 노트 보기"})]})]})}),e.jsxs("p",{className:"color_muted",children:["계정이 없으신가요?",e.jsx(n,{label:"회원가입"})]})]}))};var b,y,L;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(Link)
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var v,f,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        story: '기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';

export function BasicExample() {
  return (
    <>
      <Link label="더 보기" />
      <Link label="가이드 문서" />
      <Link underline label="항상 밑줄" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Link label="더 보기" />
      <Link label="가이드 문서" />
      <Link underline label="항상 밑줄" />
    </>)
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,_,j;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '색상',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';

export function ColorExample() {
  return (
    <div className="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>)
}`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var I,N,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: '공통 size_* 클래스로 텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';

export function SizeExample() {
  return (
    <>
      <Link size="sm" label="Small" />
      <Link label="Base" />
      <Link size="lg" label="Large" />
      <Link size="xl" label="Extra Large" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Link size="sm" label="Small" />
      <Link label="Base" />
      <Link size="lg" label="Large" />
      <Link size="xl" label="Extra Large" />
    </>)
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var M,C,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '스타일',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'underline · noUnderline · standalone prop으로 밑줄과 터치 영역을 조절합니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';

export function StyleExample() {
  return (
    <div className="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link noUnderline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link noUnderline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>)
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var P,E,S;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '내비게이션',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'nav · active prop으로 link_nav · is-active 메뉴·탭 링크를 표현합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function NavExample() {
  return (
    <>
      <nav className="link_group-inline" aria-label="섹션 내비게이션">
        <Link nav active label="개요" />
        <Link nav label="컴포넌트" />
        <Link nav label="토큰" />
        <Link nav label="접근성" />
      </nav>
      <Link
        back
        label="이전 페이지"
        icon={
          <Icon className="link_icon">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
        }
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <nav className="link_group-inline" aria-label="섹션 내비게이션">
        <Link nav active label="개요" />
        <Link nav label="컴포넌트" />
        <Link nav label="토큰" />
        <Link nav label="접근성" />
      </nav>
      <Link back label="이전 페이지" icon={<Icon className="link_icon">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>} />
    </>)
}`,...(S=(E=t.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var H,D,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '블록 · 그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'block prop · link_group으로 세로 링크 목록을 구성합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function BlockExample() {
  return (
    <div className="link_group" style={{ maxWidth: '280px', width: '100%' }}>
      <Link
        block
        label="시작하기"
        icon={
          <Icon className="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>
        }
      />
      <Link
        block
        label="컴포넌트"
        icon={
          <Icon className="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>
        }
      />
      <Link
        block
        color="muted"
        label="도움말"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>
        }
      />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="link_group" style={{
    maxWidth: '280px',
    width: '100%'
  }}>
      <Link block label="시작하기" icon={<Icon className="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>} />
      <Link block label="컴포넌트" icon={<Icon className="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>} />
      <Link block color="muted" label="도움말" icon={<Icon className="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>} />
    </div>)
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,R,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '아이콘 전용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'iconOnly prop으로 link_icon-only 텍스트 없는 링크 버튼을 만듭니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function IconOnlyExample() {
  return (
    <>
      <Link
        iconOnly
        ariaLabel="검색"
        icon={
          <Icon className="link_icon">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>
        }
      />
      <Link
        iconOnly
        ariaLabel="편집"
        icon={
          <Icon className="link_icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>
        }
      />
      <Link
        iconOnly
        color="muted"
        ariaLabel="더 보기"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </Icon>
        }
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Link iconOnly ariaLabel="검색" icon={<Icon className="link_icon">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>} />
      <Link iconOnly ariaLabel="편집" icon={<Icon className="link_icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>} />
      <Link iconOnly color="muted" ariaLabel="더 보기" icon={<Icon className="link_icon">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </Icon>} />
    </>)
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var U,W,F;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function IconDemoExample() {
  return (
    <div className="link_row">
      <Link
        label="외부 링크"
        icon={
          <Icon className="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>
        }
      />
      <Link>
        다운로드
        <Icon className="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>
      <Link
        label="다음 단계"
        icon={
          <Icon className="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        }
      />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="link_row">
      <Link label="외부 링크" icon={<Icon className="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>} />
      <Link>
        다운로드
        <Icon className="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>
      <Link label="다음 단계" icon={<Icon className="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>} />
    </div>)
}`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var T,A,q;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '새 창 열기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ExternalExample() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      공식 문서
      <span className="color_muted size_sm">(새 창)</span>
      <Icon className="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      공식 문서
      <span className="color_muted size_sm">(새 창)</span>
      <Icon className="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>)
}`,...(q=(A=k.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';

export function DisabledExample() {
  return (
    <>
      <Link disabled label="비활성 링크" />
      <Link disabled label="비활성 (span)" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Link disabled label="비활성 링크" />
      <Link disabled label="비활성 (span)" />
    </>)
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '문맥 속 사용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';

export function ContextExample() {
  return (
    <>
      <div className="alert color_info" role="alert">
        <div className="alert_body">
          <div className="alert_title">업데이트 안내</div>
          <p className="alert_desc">
            새 버전이 출시되었습니다.
            <Link size="sm" label="릴리스 노트 보기" />
          </p>
        </div>
      </div>
      <p className="color_muted">
        계정이 없으신가요?
        <Link label="회원가입" />
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="alert color_info" role="alert">
        <div className="alert_body">
          <div className="alert_title">업데이트 안내</div>
          <p className="alert_desc">
            새 버전이 출시되었습니다.
            <Link size="sm" label="릴리스 노트 보기" />
          </p>
        </div>
      </div>
      <p className="color_muted">
        계정이 없으신가요?
        <Link label="회원가입" />
      </p>
    </>)
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ye=["Playground","Basic","Color","Size","Style","Nav","Block","IconOnly","IconDemo","External","Disabled","Context"];export{r as Basic,m as Block,s as Color,x as Context,u as Disabled,k as External,p as IconDemo,d as IconOnly,t as Nav,l as Playground,i as Size,c as Style,ye as __namedExportsOrder,be as default};
