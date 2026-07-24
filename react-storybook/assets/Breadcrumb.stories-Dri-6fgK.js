import{d as ne,r as B,u as ee,c as re,n as ae,j as e,a as _,b as se}from"./iframe-ifEc15ad.js";import{w as i}from"./story-renders-Hdz_JUlO.js";import{r as ue,a as de}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const be=se("BreadcrumbItem",{booleanProps:new Set(["current","disabled","icon","ripple"]),labelProp:"label",selfClosing:!1});function r({ripple:l,label:p,href:d,current:t,disabled:o,icon:b,ariaLabel:f,children:x,className:n,onClick:c,...g}){const{rippleAttrs:S}=ne({ripple:l}),w=B.useRef(null),u=x??p;ee(be,{ripple:l,label:p,href:d,current:t,disabled:o,icon:b,ariaLabel:f},re({default:u}),w,{className:n,onClick:c,...g});const P=B.useMemo(()=>{const m=["breadcrumb_item"];return t&&m.push("is-current"),m},[t]),a=B.useMemo(()=>{const m=["breadcrumb_link"];return b&&m.push("breadcrumb_link-icon"),o&&m.push("is-disabled"),m},[b,o]),{class:z,...ce}=g,me=ae(ce),oe=m=>{m.preventDefault(),c==null||c(m)};let h=null;return d&&!t&&!o?h=e.jsx("a",{...S,className:_(a),href:d,"aria-label":f||void 0,onClick:oe,children:u}):o?h=e.jsx("span",{className:_(a),"aria-disabled":"true",children:u}):t?h=e.jsx("span",{className:"breadcrumb_current",children:u}):h=u,e.jsx("li",{ref:w,className:_(P,n),"aria-current":t?"page":void 0,...me,children:h})}r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};const ie=new Set(["chevron","slash","dot"]),pe=new Set(["sm","md","lg"]),fe=se("Breadcrumb",{defaults:{ariaLabel:"경로",separator:"chevron",size:"md"},skipProps:["items"],selfClosing:!1});function s({items:l=[],ariaLabel:p="경로",separator:d="chevron",size:t="md",children:o,className:b,...f}){const x=B.useRef(null),n=ie.has(d)?d:"chevron",c=pe.has(t)?t:"md",g=Array.isArray(l)&&l.length>0;ee(fe,{items:l,ariaLabel:p,separator:n,size:c},re({default:o}),x,{className:b,...f});const S=B.useMemo(()=>{const a=["breadcrumb"];return n==="slash"&&a.push("breadcrumb_sep-slash"),n==="dot"&&a.push("breadcrumb_sep-dot"),c==="sm"&&a.push("breadcrumb_sm"),c==="lg"&&a.push("breadcrumb_lg"),a},[n,c]),{class:w,...u}=f,P=ae(u);return e.jsx("nav",{ref:x,className:_(S,b),"aria-label":p,...P,children:e.jsx("ol",{className:"breadcrumb_list",children:g?l.map((a,z)=>e.jsx(r,{label:a.label,href:a.href,current:a.current??z===l.length-1,disabled:a.disabled,icon:a.icon,ariaLabel:a.ariaLabel},z)):o})})}s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'경로'",computed:!1},required:!1},separator:{defaultValue:{value:"'chevron'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const le=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],he=[{name:"items",type:"Array<{ label, href?, current?, disabled? }>",default:"[]",description:"경로 데이터. BreadcrumbItem 슬롯 대체"},{name:"aria-label",type:"string",default:"경로",description:"nav aria-label"},{name:"separator",type:"'chevron' | 'slash' | 'dot'",default:"chevron",description:"breadcrumb_sep-slash · breadcrumb_sep-dot"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"breadcrumb_sm · breadcrumb_lg"}],Be=le,xe=[{name:"label",type:"string",default:"—",description:"항목 텍스트"},{name:"href",type:"string",default:"—",description:"링크 URL"},{name:"current",type:"boolean",default:"false",description:'is-current · aria-current="page"'},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"icon",type:"boolean",default:"false",description:"breadcrumb_link-icon"},{name:"aria-label",type:"string",default:"—",description:"아이콘 전용 링크 라벨"},ue],ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ie=[{name:"breadcrumb · breadcrumb_list · breadcrumb_item",description:"루트·목록·항목"},{name:"breadcrumb_link · breadcrumb_sep",description:"링크·구분자"},{name:"breadcrumb_ellipsis",description:"생략 메뉴 버튼 — data-ripple"},{name:"breadcrumb_sep-slash · breadcrumb_sep-dot",description:"구분자 스타일"},{name:"breadcrumb_sm · breadcrumb_lg",description:"크기 변형"},{name:"is-current · is-disabled",description:"현재·비활성"},...de],je=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ve=[{name:"--breadcrumb-gap · --breadcrumb-font-size",default:"—",description:"간격·글자 크기"},{name:"--breadcrumb-sep-color",default:"—",description:"구분자 색"}],E=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Le=[{name:"children",description:"BreadcrumbItem 나열 (items prop 대체)"}],ye=[{name:"children",description:"링크 텍스트·아이콘 (label 대체)"}],ke=[{title:"API · Breadcrumb Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.",tables:[{columns:le,rows:he,codeColumn:"name"}]},{title:"API · BreadcrumbItem Props",tables:[{columns:Be,rows:xe,codeColumn:"name"}]},{title:"API · Breadcrumb Children",tables:[{columns:E,rows:Le,codeColumn:"name"}]},{title:"API · BreadcrumbItem Children",tables:[{columns:E,rows:ye,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ge,rows:Ie,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:je,rows:ve,codeColumn:"name"}]}],te=e.jsx("svg",{className:"breadcrumb_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"})}),Ce={items:[],ariaLabel:"경로",separator:"chevron",size:"md"},ze={title:"Components/네비게이션/Breadcrumb",id:"components-breadcrumb",component:s,subcomponents:{BreadcrumbItem:r},tags:["autodocs"],argTypes:{ariaLabel:{control:"text",type:{name:"string",summary:"string"}},separator:{control:"select",options:["chevron","slash","dot"],type:{name:"enum",summary:"'chevron' | 'slash' | 'dot'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ke,docs:{description:{component:"현재 위치까지의 경로를 표시하는 Breadcrumb 컴포넌트입니다."}}}},I={parameters:{controls:{disable:!1}},args:{...Ce},render:l=>e.jsxs(s,{...l,children:[e.jsx(r,{label:"홈",href:"#"}),e.jsx(r,{label:"컴포넌트",href:"#"}),e.jsx(r,{label:"현재",current:!0})]})},j={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다."},source:{code:`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function BasicExample() {
  return (
    <Breadcrumb
      items={[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]}
    />
  );
}`,language:"tsx"}}},render:i(e.jsx(s,{items:[{label:"홈",href:"#"},{label:"컴포넌트",href:"#"},{label:"Breadcrumb",current:!0}]}))},v={name:"구분자",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"separator로 구분자 스타일을 변경합니다."},source:{code:`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function SeparatorExample() {
  return (
    <>
      <Breadcrumb
        ariaLabel="경로 — chevron"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Chevron', current: true },
        ]}
      />
      <Breadcrumb
        separator="slash"
        ariaLabel="경로 — slash"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Slash', current: true },
        ]}
      />
      <Breadcrumb
        separator="dot"
        ariaLabel="경로 — dot"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Dot', current: true },
        ]}
      />
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsx(s,{ariaLabel:"경로 — chevron",items:[{label:"홈",href:"#"},{label:"가이드",href:"#"},{label:"Chevron",current:!0}]}),e.jsx(s,{separator:"slash",ariaLabel:"경로 — slash",items:[{label:"홈",href:"#"},{label:"가이드",href:"#"},{label:"Slash",current:!0}]}),e.jsx(s,{separator:"dot",ariaLabel:"경로 — dot",items:[{label:"홈",href:"#"},{label:"가이드",href:"#"},{label:"Dot",current:!0}]})]}))},L={name:"홈 아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"icon으로 아이콘만 있는 첫 항목을 표시합니다."},source:{code:`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function IconExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>
  );
}`,language:"tsx"}}},render:i(e.jsxs(s,{children:[e.jsx(r,{href:"#",icon:!0,ariaLabel:"홈",children:te}),e.jsx(r,{label:"설정",href:"#"}),e.jsx(r,{label:"계정",href:"#"}),e.jsx(r,{label:"프로필",current:!0})]}))},y={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size로 텍스트 크기를 조절합니다."},source:{code:`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function SizeExample() {
  return (
    <>
      <Breadcrumb
        size="sm"
        ariaLabel="경로 — small"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Small', current: true },
        ]}
      />
      <Breadcrumb
        ariaLabel="경로 — medium"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Medium', current: true },
        ]}
      />
      <Breadcrumb
        size="lg"
        ariaLabel="경로 — large"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Large', current: true },
        ]}
      />
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"sm",ariaLabel:"경로 — small",items:[{label:"홈",href:"#"},{label:"문서",href:"#"},{label:"Small",current:!0}]}),e.jsx(s,{ariaLabel:"경로 — medium",items:[{label:"홈",href:"#"},{label:"문서",href:"#"},{label:"Medium",current:!0}]}),e.jsx(s,{size:"lg",ariaLabel:"경로 — large",items:[{label:"홈",href:"#"},{label:"문서",href:"#"},{label:"Large",current:!0}]})]}))},k={name:"경로 생략",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다."},source:{code:`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function EllipsisExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {/* home icon */}
      </BreadcrumbItem>
      <li className="breadcrumb_item">
        <button
          type="button"
          className="breadcrumb_ellipsis"
          data-ripple=""
          aria-label="숨겨진 경로 보기"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          …
        </button>
      </li>
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="Breadcrumb" current />
    </Breadcrumb>
  );
}`,language:"tsx"}}},render:i(e.jsxs(s,{children:[e.jsx(r,{href:"#",icon:!0,ariaLabel:"홈",children:te}),e.jsx("li",{className:"breadcrumb_item",children:e.jsx("button",{type:"button",className:"breadcrumb_ellipsis","data-ripple":"","aria-label":"숨겨진 경로 보기","aria-haspopup":"menu","aria-expanded":"false",children:"…"})}),e.jsx(r,{label:"컴포넌트",href:"#"}),e.jsx(r,{label:"Breadcrumb",current:!0})]}))},C={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"비활성 링크는 disabled를 사용합니다."},source:{code:`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function StateExample() {
  return (
    <>
      <Breadcrumb ariaLabel="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(s,{ariaLabel:"경로 — 비활성",children:[e.jsx(r,{label:"홈",href:"#"}),e.jsx(r,{label:"삭제된 페이지",disabled:!0}),e.jsx(r,{label:"현재 페이지",current:!0})]}),e.jsxs(s,{separator:"slash",ariaLabel:"경로 — 긴 레이블",children:[e.jsx(r,{label:"홈",href:"#"}),e.jsx(r,{label:"프로젝트 관리 및 협업 도구 설정",href:"#"}),e.jsx(r,{label:"사용자 권한 및 역할 기반 접근 제어",current:!0})]})]}))};var R,D,N;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Breadcrumb {...args}>
      <BreadcrumbItem label="홈" href="#" />
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="현재" current />
    </Breadcrumb>
}`,...(N=(D=I.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var A,V,M;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        story: '이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다.'
      },
      source: {
        code: \`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function BasicExample() {
  return (
    <Breadcrumb
      items={[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Breadcrumb items={[{
    label: '홈',
    href: '#'
  }, {
    label: '컴포넌트',
    href: '#'
  }, {
    label: 'Breadcrumb',
    current: true
  }]} />)
}`,...(M=(V=j.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var H,F,T;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '구분자',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'separator로 구분자 스타일을 변경합니다.'
      },
      source: {
        code: \`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function SeparatorExample() {
  return (
    <>
      <Breadcrumb
        ariaLabel="경로 — chevron"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Chevron', current: true },
        ]}
      />
      <Breadcrumb
        separator="slash"
        ariaLabel="경로 — slash"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Slash', current: true },
        ]}
      />
      <Breadcrumb
        separator="dot"
        ariaLabel="경로 — dot"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Dot', current: true },
        ]}
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Breadcrumb ariaLabel="경로 — chevron" items={[{
      label: '홈',
      href: '#'
    }, {
      label: '가이드',
      href: '#'
    }, {
      label: 'Chevron',
      current: true
    }]} />
      <Breadcrumb separator="slash" ariaLabel="경로 — slash" items={[{
      label: '홈',
      href: '#'
    }, {
      label: '가이드',
      href: '#'
    }, {
      label: 'Slash',
      current: true
    }]} />
      <Breadcrumb separator="dot" ariaLabel="경로 — dot" items={[{
      label: '홈',
      href: '#'
    }, {
      label: '가이드',
      href: '#'
    }, {
      label: 'Dot',
      current: true
    }]} />
    </>)
}`,...(T=(F=v.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var q,O,W;L.parameters={...L.parameters,docs:{...(q=L.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '홈 아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'icon으로 아이콘만 있는 첫 항목을 표시합니다.'
      },
      source: {
        code: \`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function IconExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {HomeIcon}
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>)
}`,...(W=(O=L.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var U,Z,$;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        story: 'size로 텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';

export function SizeExample() {
  return (
    <>
      <Breadcrumb
        size="sm"
        ariaLabel="경로 — small"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Small', current: true },
        ]}
      />
      <Breadcrumb
        ariaLabel="경로 — medium"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Medium', current: true },
        ]}
      />
      <Breadcrumb
        size="lg"
        ariaLabel="경로 — large"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Large', current: true },
        ]}
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Breadcrumb size="sm" ariaLabel="경로 — small" items={[{
      label: '홈',
      href: '#'
    }, {
      label: '문서',
      href: '#'
    }, {
      label: 'Small',
      current: true
    }]} />
      <Breadcrumb ariaLabel="경로 — medium" items={[{
      label: '홈',
      href: '#'
    }, {
      label: '문서',
      href: '#'
    }, {
      label: 'Medium',
      current: true
    }]} />
      <Breadcrumb size="lg" ariaLabel="경로 — large" items={[{
      label: '홈',
      href: '#'
    }, {
      label: '문서',
      href: '#'
    }, {
      label: 'Large',
      current: true
    }]} />
    </>)
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var G,J,K;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '경로 생략',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다.'
      },
      source: {
        code: \`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function EllipsisExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {/* home icon */}
      </BreadcrumbItem>
      <li className="breadcrumb_item">
        <button
          type="button"
          className="breadcrumb_ellipsis"
          data-ripple=""
          aria-label="숨겨진 경로 보기"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          …
        </button>
      </li>
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="Breadcrumb" current />
    </Breadcrumb>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        {HomeIcon}
      </BreadcrumbItem>
      <li className="breadcrumb_item">
        <button type="button" className="breadcrumb_ellipsis" data-ripple="" aria-label="숨겨진 경로 보기" aria-haspopup="menu" aria-expanded="false">
          …
        </button>
      </li>
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="Breadcrumb" current />
    </Breadcrumb>)
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '비활성 링크는 disabled를 사용합니다.'
      },
      source: {
        code: \`import Breadcrumb from '@uxkm/ui-react/components/Breadcrumb.jsx';
import BreadcrumbItem from '@uxkm/ui-react/components/BreadcrumbItem.jsx';

export function StateExample() {
  return (
    <>
      <Breadcrumb ariaLabel="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Breadcrumb ariaLabel="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>
    </>)
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ee=["Playground","Basic","Separator","Icon","Size","Ellipsis","State"];export{j as Basic,k as Ellipsis,L as Icon,I as Playground,v as Separator,y as Size,C as State,Ee as __namedExportsOrder,ze as default};
