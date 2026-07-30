import{r as d,d as pa,Z as La,n as ua,j as a,B as m,I as A,a as P,$ as _a,a0 as Ca}from"./iframe-DS-82CEY.js";import{I as za}from"./Input-uQ67Uwxs.js";import{w as T}from"./story-renders-DjJEfxtm.js";import{g as Ba,r as Sa,a as wa}from"./ripple-api-CjGOCEZT.js";import"./preload-helper-DUxc-Dqw.js";const Pa=new Set(["sm","md","lg"]);function r({ripple:o,brand:i,size:c="md",borderless:t,dark:p,sticky:u,responsive:N,collapseId:b,brandContent:R,brandIcon:D,items:x,search:f,actions:I,children:M,className:E,...j}){const g=d.useRef(null),{rippleAttrs:l,childRippleAttrs:V}=pa({ripple:o},{mode:"container"}),fa=d.useId().replace(/:/g,""),F=b||`navbar-collapse-${fa}`,h=Pa.has(c)?c:"md";La({ripple:o,brand:i,size:h,borderless:t,dark:p,sticky:u,responsive:N,collapseId:b},g,{...j});const Ia=d.useMemo(()=>{const n=["navbar"];return h==="sm"&&n.push("navbar_sm"),h==="lg"&&n.push("navbar_lg"),t&&n.push("navbar_borderless"),p&&n.push("navbar_dark"),u&&n.push("navbar_sticky"),n},[h,t,p,u]),{class:Xa,...ja}=j,ga=ua(ja),ha=R??a.jsxs(a.Fragment,{children:[D,i]}),ka=x??(M?a.jsx("ul",{className:"navbar_list",children:M}):null),ya=n=>{n.preventDefault()};return a.jsx("header",{ref:g,className:P(Ia,E),"data-navbar":N||void 0,...l,...ga,children:a.jsxs("div",{className:"navbar_container",children:[a.jsx("a",{...V,href:"#",className:"navbar_brand",onClick:ya,children:ha}),N?a.jsx(m,{...V,variant:"ghost",iconOnly:!0,className:"navbar_toggle","data-navbar-toggle":"",expanded:!1,"aria-controls":F,ariaLabel:"메뉴 열기",iconBefore:a.jsxs(a.Fragment,{children:[a.jsx(A,{name:"menu",size:"sm",className:"navbar_toggle-icon-open"}),a.jsx(A,{name:"close",size:"sm",className:"navbar_toggle-icon-close"})]})}):null,a.jsxs("div",{className:"navbar_collapse",id:F,children:[a.jsx("nav",{className:"navbar_nav","aria-label":"주요 메뉴",children:ka}),f?a.jsx("div",{className:"navbar_search",children:f}):null,I?a.jsx("div",{className:"navbar_actions",children:I}):null]})]})})}r.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function e({ripple:o,label:i,href:c="#",active:t,badge:p,children:u,className:N,onClick:b,...R}){const{rippleAttrs:D}=pa({ripple:o}),x=d.useRef(null),f=u??i;_a({label:i,active:t},x);const I=d.useMemo(()=>{const l=["navbar_link"];return t&&l.push("is-active"),l},[t]),{class:M,...E}=R,j=ua(E),g=l=>{l.preventDefault(),b==null||b(l)};return a.jsx("li",{ref:x,className:P("navbar_item",N),...j,children:a.jsxs("a",{...D,href:c,className:P(I),"aria-current":t?"page":void 0,onClick:g,children:[f,p]})})}e.__docgenInfo={description:"",methods:[],displayName:"NavbarItem",props:{href:{defaultValue:{value:"'#'",computed:!1},required:!1}}};function s({children:o,className:i,...c}){const t=d.useRef(null);return Ca(t),a.jsx("ul",{ref:t,className:P("navbar_list",i),...c,children:o})}s.__docgenInfo={description:"",methods:[],displayName:"NavbarList"};const Na=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ra=[{name:"brand",type:"string",default:"—",description:"브랜드 텍스트. brand 슬롯으로 대체"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"navbar_sm · navbar_lg"},{name:"borderless",type:"boolean",default:"false",description:"하단 테두리 제거"},{name:"dark",type:"boolean",default:"false",description:"어두운 배경 (navbar_dark)"},{name:"sticky",type:"boolean",default:"false",description:"상단 고정 (navbar_sticky)"},{name:"responsive",type:"boolean",default:"false",description:"모바일 토글·data-navbar"},{name:"collapseId",type:"string",default:"—",description:"navbar_collapse id (토글 aria-controls)"},{name:"brandContent",type:"ReactNode",default:"—",description:"브랜드 영역 (brand prop 대체)"},{name:"brandIcon",type:"ReactNode",default:"—",description:"브랜드 아이콘"},{name:"items",type:"ReactNode",default:"—",description:"메뉴 목록 (NavbarList)"},{name:"search",type:"ReactNode",default:"—",description:"검색 필드 (navbar_search)"},{name:"actions",type:"ReactNode",default:"—",description:"우측 액션 (navbar_actions)"},{name:"className",type:"string",default:"—",description:"루트 요소 추가 클래스"},Ba],Da=Na,Ma=[{name:"label",type:"string",default:"—",description:"링크 텍스트. children으로 대체"},{name:"href",type:"string",default:"#",description:"링크 URL"},{name:"active",type:"boolean",default:"false",description:'is-active · aria-current="page"'},{name:"badge",type:"ReactNode",default:"—",description:"링크 옆 배지"},{name:"children",type:"ReactNode",default:"—",description:"링크 텍스트 (label 대체)"},{name:"className",type:"string",default:"—",description:"루트 요소 추가 클래스"},Sa],xa=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Ea=[{name:"brandContent",description:"브랜드 영역 (brand · brandIcon 대체)"},{name:"brandIcon",description:"브랜드 아이콘"},{name:"items",description:"메뉴 목록 (NavbarList)"},{name:"children",description:"items 대체 — NavbarItem 나열"},{name:"search",description:"검색 필드 (navbar_search)"},{name:"actions",description:"우측 액션 (navbar_actions)"}],Aa=xa,Ta=[{name:"children",description:"링크 텍스트 (label 대체)"},{name:"badge",description:"링크 옆 배지"}],Va=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Fa=[{name:"navbar · navbar_container · navbar_brand",description:"루트·컨테이너·브랜드"},{name:"navbar_toggle · navbar_collapse · navbar_nav · navbar_list",description:"토글·접힘 영역·내비"},{name:"navbar_item · navbar_link",description:"항목·링크 (is-active)"},{name:"navbar_search · navbar_actions",description:"검색·액션 영역"},{name:"navbar_sm · navbar_lg · navbar_sticky · navbar_borderless · navbar_dark",description:"크기·변형"},{name:"data-navbar · data-navbar-toggle",description:"반응형 JS 연동"},...wa],Ha=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ua=[{name:"--navbar-height · --navbar-height-sm · --navbar-height-lg",default:"—",description:"높이 변형"},{name:"--navbar-padding-x · --navbar-gap",default:"—",description:"패딩·간격"},{name:"--navbar-z-index",default:"—",description:"sticky 레이어"}],Ka=[{title:"API · Navbar Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 collapse-id · brand-icon 슬롯은 collapseId · brandIcon으로 다룹니다. Vue `#items` · `#search` · `#actions` · `#brand` 슬롯은 items · search · actions · brandContent prop입니다.",tables:[{columns:Na,rows:Ra,codeColumn:"name"}]},{title:"API · NavbarItem Props",tables:[{columns:Da,rows:Ma,codeColumn:"name"}]},{title:"API · Navbar Children",tables:[{columns:xa,rows:Ea,codeColumn:"name"}]},{title:"API · NavbarItem Children",tables:[{columns:Aa,rows:Ta,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Va,rows:Fa,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ha,rows:Ua,codeColumn:"name"}]}],Oa={brand:"브랜드",size:"md",borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:void 0};function v(o){return T(a.jsx("div",{className:"navbar_demo",children:o}))}const Ja={title:"Components/네비게이션/Navbar",id:"components-navbar",component:r,subcomponents:{NavbarItem:e,NavbarList:s},tags:["autodocs"],argTypes:{brand:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},borderless:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dark:{control:"boolean",type:{name:"boolean",summary:"boolean"}},sticky:{control:"boolean",type:{name:"boolean",summary:"boolean"}},responsive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},collapseId:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:Ka,docs:{description:{component:"사이트·앱 상단 내비게이션 Navbar 컴포넌트입니다."}}}},k={parameters:{controls:{disable:!1}},args:{...Oa},render:o=>a.jsx(r,{...o,brand:"브랜드",items:a.jsxs(s,{children:[a.jsx(e,{label:"메뉴 1",href:"#",active:!0}),a.jsx(e,{label:"메뉴 2",href:"#"})]})})},y={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다."},source:{code:`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BasicExample() {
  return (
    <Navbar
      brand="UXKM"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="컴포넌트" />
          <NavbarItem label="토큰" />
          <NavbarItem label="접근성" />
        </NavbarList>
      }
    />
  );
}`,language:"tsx"}}},render:v(a.jsx(r,{brand:"UXKM",items:a.jsxs(s,{children:[a.jsx(e,{label:"홈",active:!0}),a.jsx(e,{label:"컴포넌트"}),a.jsx(e,{label:"토큰"}),a.jsx(e,{label:"접근성"})]})}))},L={name:"브랜드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"brandIcon에 Icon 컴포넌트를 함께 배치할 수 있습니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BrandExample() {
  return (
    <Navbar
      brand="HTML Components"
      brandIcon={
        <Icon className="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </Icon>
      }
      items={
        <NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>
      }
    />
  );
}`,language:"tsx"}}},render:v(a.jsx(r,{brand:"HTML Components",brandIcon:a.jsxs(A,{className:"navbar_brand-icon",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.jsx("path",{d:"M9 3v18"})]}),items:a.jsxs(s,{children:[a.jsx(e,{label:"가이드",active:!0}),a.jsx(e,{label:"리소스"})]})}))},_={name:"액션 영역",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function ActionsExample() {
  return (
    <Navbar
      brand="Dashboard"
      items={
        <NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </>
      }
    />
  );
}`,language:"tsx"}}},render:v(a.jsx(r,{brand:"Dashboard",items:a.jsxs(s,{children:[a.jsx(e,{label:"개요",active:!0}),a.jsx(e,{label:"분석"}),a.jsx(e,{label:"설정"})]}),actions:a.jsxs(a.Fragment,{children:[a.jsx(m,{variant:"ghost",size:"sm",ariaLabel:"알림",iconBefore:a.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[a.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),a.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}),a.jsx(m,{variant:"outline",size:"sm",label:"로그인"}),a.jsx(m,{variant:"filled",color:"primary",size:"sm",label:"가입"})]})}))},C={name:"검색",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다."},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function SearchExample() {
  return (
    <Navbar
      brand="Docs"
      items={
        <NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>
      }
      search={
        <Input
          type="search"
          id="navbar-search-demo"
          size="sm"
          placeholder="문서 검색…"
          autoComplete="off"
          ariaLabel="문서 검색"
        />
      }
    />
  );
}`,language:"tsx"}}},render:v(a.jsx(r,{brand:"Docs",items:a.jsxs(s,{children:[a.jsx(e,{label:"시작하기"}),a.jsx(e,{label:"컴포넌트",active:!0}),a.jsx(e,{label:"패턴"})]}),search:a.jsx(za,{type:"search",id:"navbar-search-demo",size:"sm",placeholder:"문서 검색…",autoComplete:"off",ariaLabel:"문서 검색"}),actions:a.jsx(m,{variant:"filled",color:"primary",size:"sm",label:"GitHub"})}))},z={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_sm · navbar_lg로 높이를 조절합니다."},source:{code:`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function SizeExample() {
  return (
    <Navbar
      brand="Small"
      size="sm"
      items={
        <NavbarList>
          <NavbarItem label="메뉴" active />
        </NavbarList>
      }
    />
  );
}`,language:"tsx"}}},render:T(a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"navbar_demo",children:a.jsx(r,{brand:"Small",size:"sm",items:a.jsx(s,{children:a.jsx(e,{label:"메뉴",active:!0})})})}),a.jsx("div",{className:"navbar_demo",children:a.jsx(r,{brand:"Default",items:a.jsx(s,{children:a.jsx(e,{label:"메뉴",active:!0})})})}),a.jsx("div",{className:"navbar_demo",children:a.jsx(r,{brand:"Large",size:"lg",items:a.jsx(s,{children:a.jsx(e,{label:"메뉴",active:!0})})})})]}))},B={name:"스타일 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다."},source:{code:`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function VariantExample() {
  return (
    <Navbar
      brand="Borderless"
      borderless
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="소개" />
        </NavbarList>
      }
    />
  );
}`,language:"tsx"}}},render:T(a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"navbar_demo",children:a.jsx(r,{brand:"Borderless",borderless:!0,items:a.jsxs(s,{children:[a.jsx(e,{label:"홈",active:!0}),a.jsx(e,{label:"소개"})]})})}),a.jsx("div",{className:"navbar_demo",children:a.jsx(r,{brand:"Dark Surface",dark:!0,items:a.jsxs(s,{children:[a.jsx(e,{label:"홈",active:!0}),a.jsx(e,{label:"소개"})]})})}),a.jsxs("div",{className:"navbar_demo navbar_demo-scroll",children:[a.jsx(r,{brand:"Sticky",sticky:!0,items:a.jsx(s,{children:a.jsx(e,{label:"고정",active:!0})})}),a.jsxs("div",{style:{padding:"var(--space-xl)",color:"var(--color-text-muted)",fontSize:"var(--text-size-sm)"},children:[a.jsx("p",{style:{margin:"0 0 var(--space-md)"},children:"스크롤해 보세요. navbar_sticky는 상단에 고정됩니다."}),a.jsx("p",{style:{margin:0},children:"콘텐츠 영역 예시입니다."}),a.jsx("p",{style:{margin:"var(--space-md) 0 0"},children:"추가 콘텐츠…"}),a.jsx("p",{style:{margin:"var(--space-md) 0 0"},children:"추가 콘텐츠…"})]})]})]}))},S={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다."},source:{code:`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BadgeExample() {
  return (
    <Navbar
      brand="Inbox"
      items={
        <NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem
            label="알림"
            badge={<span className="badge color_danger">3</span>}
          />
          <NavbarItem label="보관함" />
        </NavbarList>
      }
    />
  );
}`,language:"tsx"}}},render:v(a.jsx(r,{brand:"Inbox",items:a.jsxs(s,{children:[a.jsx(e,{label:"받은편지함",active:!0}),a.jsx(e,{label:"알림",badge:a.jsx("span",{className:"badge color_danger",children:"3"})}),a.jsx(e,{label:"보관함"})]})}))},w={name:"반응형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function ResponsiveExample() {
  return (
    <Navbar
      brand="Mobile"
      responsive
      collapseId="navbar-responsive-demo"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </>
      }
    />
  );
}`,language:"tsx"}}},render:v(a.jsx(r,{brand:"Mobile",responsive:!0,collapseId:"navbar-responsive-demo",items:a.jsxs(s,{children:[a.jsx(e,{label:"홈",active:!0}),a.jsx(e,{label:"제품"}),a.jsx(e,{label:"가격"}),a.jsx(e,{label:"문의"})]}),actions:a.jsxs(a.Fragment,{children:[a.jsx(m,{variant:"outline",size:"sm",label:"로그인"}),a.jsx(m,{variant:"filled",color:"primary",size:"sm",label:"시작하기"})]})}))};var H,U,K;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Navbar {...args} brand="브랜드" items={<NavbarList>
          <NavbarItem label="메뉴 1" href="#" active />
          <NavbarItem label="메뉴 2" href="#" />
        </NavbarList>} />
}`,...(K=(U=k.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var O,X,q;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다.'
      },
      source: {
        code: \`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BasicExample() {
  return (
    <Navbar
      brand="UXKM"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="컴포넌트" />
          <NavbarItem label="토큰" />
          <NavbarItem label="접근성" />
        </NavbarList>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: demo(<Navbar brand="UXKM" items={<NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="컴포넌트" />
          <NavbarItem label="토큰" />
          <NavbarItem label="접근성" />
        </NavbarList>} />)
}`,...(q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var G,W,Z;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '브랜드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'brandIcon에 Icon 컴포넌트를 함께 배치할 수 있습니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BrandExample() {
  return (
    <Navbar
      brand="HTML Components"
      brandIcon={
        <Icon className="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </Icon>
      }
      items={
        <NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: demo(<Navbar brand="HTML Components" brandIcon={<Icon className="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </Icon>} items={<NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>} />)
}`,...(Z=(W=L.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var $,J,Q;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '액션 영역',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function ActionsExample() {
  return (
    <Navbar
      brand="Dashboard"
      items={
        <NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: demo(<Navbar brand="Dashboard" items={<NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>} actions={<>
          <Button variant="ghost" size="sm" ariaLabel="알림" iconBefore={<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>} />
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </>} />)
}`,...(Q=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,aa,ea;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '검색',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다.'
      },
      source: {
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function SearchExample() {
  return (
    <Navbar
      brand="Docs"
      items={
        <NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>
      }
      search={
        <Input
          type="search"
          id="navbar-search-demo"
          size="sm"
          placeholder="문서 검색…"
          autoComplete="off"
          ariaLabel="문서 검색"
        />
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: demo(<Navbar brand="Docs" items={<NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" ariaLabel="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} />)
}`,...(ea=(aa=C.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ra,sa,ta;z.parameters={...z.parameters,docs:{...(ra=z.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'navbar_sm · navbar_lg로 높이를 조절합니다.'
      },
      source: {
        code: \`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function SizeExample() {
  return (
    <Navbar
      brand="Small"
      size="sm"
      items={
        <NavbarList>
          <NavbarItem label="메뉴" active />
        </NavbarList>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="navbar_demo">
        <Navbar brand="Small" size="sm" items={<NavbarList>
              <NavbarItem label="메뉴" active />
            </NavbarList>} />
      </div>
      <div className="navbar_demo">
        <Navbar brand="Default" items={<NavbarList>
              <NavbarItem label="메뉴" active />
            </NavbarList>} />
      </div>
      <div className="navbar_demo">
        <Navbar brand="Large" size="lg" items={<NavbarList>
              <NavbarItem label="메뉴" active />
            </NavbarList>} />
      </div>
    </>)
}`,...(ta=(sa=z.parameters)==null?void 0:sa.docs)==null?void 0:ta.source}}};var oa,na,ia;B.parameters={...B.parameters,docs:{...(oa=B.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: '스타일 변형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다.'
      },
      source: {
        code: \`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function VariantExample() {
  return (
    <Navbar
      brand="Borderless"
      borderless
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="소개" />
        </NavbarList>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="navbar_demo">
        <Navbar brand="Borderless" borderless items={<NavbarList>
              <NavbarItem label="홈" active />
              <NavbarItem label="소개" />
            </NavbarList>} />
      </div>
      <div className="navbar_demo">
        <Navbar brand="Dark Surface" dark items={<NavbarList>
              <NavbarItem label="홈" active />
              <NavbarItem label="소개" />
            </NavbarList>} />
      </div>
      <div className="navbar_demo navbar_demo-scroll">
        <Navbar brand="Sticky" sticky items={<NavbarList>
              <NavbarItem label="고정" active />
            </NavbarList>} />
        <div style={{
        padding: 'var(--space-xl)',
        color: 'var(--color-text-muted)',
        fontSize: 'var(--text-size-sm)'
      }}>
          <p style={{
          margin: '0 0 var(--space-md)'
        }}>
            스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.
          </p>
          <p style={{
          margin: 0
        }}>콘텐츠 영역 예시입니다.</p>
          <p style={{
          margin: 'var(--space-md) 0 0'
        }}>추가 콘텐츠…</p>
          <p style={{
          margin: 'var(--space-md) 0 0'
        }}>추가 콘텐츠…</p>
        </div>
      </div>
    </>)
}`,...(ia=(na=B.parameters)==null?void 0:na.docs)==null?void 0:ia.source}}};var la,ma,ca;S.parameters={...S.parameters,docs:{...(la=S.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: '배지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function BadgeExample() {
  return (
    <Navbar
      brand="Inbox"
      items={
        <NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem
            label="알림"
            badge={<span className="badge color_danger">3</span>}
          />
          <NavbarItem label="보관함" />
        </NavbarList>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: demo(<Navbar brand="Inbox" items={<NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem label="알림" badge={<span className="badge color_danger">3</span>} />
          <NavbarItem label="보관함" />
        </NavbarList>} />)
}`,...(ca=(ma=S.parameters)==null?void 0:ma.docs)==null?void 0:ca.source}}};var ba,da,va;w.parameters={...w.parameters,docs:{...(ba=w.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: '반응형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Navbar from '@uxkm/ui-react/components/Navbar.jsx';
import NavbarItem from '@uxkm/ui-react/components/NavbarItem.jsx';
import NavbarList from '@uxkm/ui-react/components/NavbarList.jsx';

export function ResponsiveExample() {
  return (
    <Navbar
      brand="Mobile"
      responsive
      collapseId="navbar-responsive-demo"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: demo(<Navbar brand="Mobile" responsive collapseId="navbar-responsive-demo" items={<NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>} actions={<>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </>} />)
}`,...(va=(da=w.parameters)==null?void 0:da.docs)==null?void 0:va.source}}};const Qa=["Playground","Basic","Brand","Actions","Search","Size","Variant","BadgeDemo","Responsive"];export{_ as Actions,S as BadgeDemo,y as Basic,L as Brand,k as Playground,w as Responsive,C as Search,z as Size,B as Variant,Qa as __namedExportsOrder,Ja as default};
