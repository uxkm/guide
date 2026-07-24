import{j as e}from"./iframe-DbjMrqYU.js";import{D as r}from"./Divider-Drx50U2Y.js";import{w as i,b as _}from"./story-renders-CrEYzOkG.js";import"./preload-helper-DUxc-Dqw.js";const E=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],R=[{name:"dashed",type:"boolean",default:"false",description:"점선 스타일 (divider_dashed)"},{name:"plain",type:"boolean",default:"false",description:"레이블 보조 톤 (divider_plain)"},{name:"vertical",type:"boolean",default:"false",description:"세로 구분선 (divider_vertical)"},{name:"orient",type:"'left' | 'right'",default:"—",description:"레이블 정렬. 생략 시 가운데"},{name:"label",type:"string",default:"—",description:"가운데 레이블 텍스트. default 슬롯으로 대체 가능"},{name:"tag",type:"'auto' | 'hr' | 'div' | 'span'",default:"auto",description:"루트 태그. auto는 vertical·레이블 유무에 따라 hr · div · span 선택"}],S=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],A=[{name:"divider",description:"가로·세로 구분선 루트"},{name:"divider_dashed",description:"점선 스타일"},{name:"divider_plain",description:"보조 톤 레이블"},{name:"divider_vertical",description:"세로 구분선 (인라인·flex 행)"},{name:"divider_orient-left · divider_orient-right",description:"레이블 좌·우 정렬"}],B=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],T=[{name:"--divider-color",default:"var(--color-border-subtle)",description:"선 색상"},{name:"--divider-thickness",default:"1px",description:"선 두께"},{name:"--divider-margin-y",default:"var(--space-md)",description:"가로 구분선 상하 여백"},{name:"--divider-margin-x",default:"var(--space-sm)",description:"세로 구분선 좌우 여백"},{name:"--divider-text-gap",default:"var(--space-md)",description:"레이블·선 사이 간격"},{name:"--divider-orient-inset",default:"5%",description:"orient-left · orient-right 선 길이"}],O=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],V=[{name:"label",description:"레이블 텍스트. children으로 대체 가능"},{name:"children",description:"레이블 텍스트 (label prop 대체, Vue default 슬롯 대응)"}],F=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:E,rows:R,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React label·children prop입니다.",tables:[{columns:O,rows:V,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:S,rows:A,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:B,rows:T,codeColumn:"name"}]}],N={dashed:!1,plain:!1,vertical:!1,orient:"",label:"라벨",tag:"auto"},q={title:"Components/레이아웃/Divider",id:"components-divider",component:r,tags:["autodocs"],argTypes:{dashed:{control:"boolean",type:{name:"boolean",summary:"boolean"}},plain:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},orient:{control:"select",options:["","left","right"],labels:{"":"가운데",left:"left",right:"right"},description:"레이블 정렬. 가운데는 orient를 생략한 기본값입니다.",type:{name:"enum",summary:"'left' | 'right' (기본: 가운데)"}},label:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"select",options:["auto","hr","div","span"],type:{name:"enum",summary:"'auto' | 'hr' | 'div' | 'span'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:F,docs:{description:{component:"콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다."}}}},a={parameters:{controls:{disable:!1}},args:{...N},render:_(r)},n={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function BasicExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"위 콘텐츠"}),e.jsx(r,{}),e.jsx("p",{children:"아래 콘텐츠"})]}))},s={name:"점선",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider_dashed로 점선 스타일을 적용합니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function DashedExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"위 콘텐츠"}),e.jsx(r,{dashed:!0}),e.jsx("p",{children:"아래 콘텐츠"})]}))},t={name:"텍스트 레이블",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function TextExample() {
  return (
    <>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"섹션 제목"}),e.jsx(r,{plain:!0,label:"보조 설명"})]}))},o={name:"레이블 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function OrientExample() {
  return (
    <>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsx(r,{orient:"left",label:"왼쪽"}),e.jsx(r,{label:"가운데"}),e.jsx(r,{orient:"right",label:"오른쪽"})]}))},d={name:"세로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function VerticalExample() {
  return (
    <div className="space">
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </div>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"space",children:[e.jsx("span",{children:"항목 A"}),e.jsx(r,{vertical:!0}),e.jsx("span",{children:"항목 B"}),e.jsx(r,{vertical:!0,dashed:!0}),e.jsx("span",{children:"항목 C"})]}))};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(Divider)
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        story: 'divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다.'
      },
      source: {
        code: \`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function BasicExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>)
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '점선',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'divider_dashed로 점선 스타일을 적용합니다.'
      },
      source: {
        code: \`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function DashedExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>)
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,g,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '텍스트 레이블',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다.'
      },
      source: {
        code: \`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function TextExample() {
  return (
    <>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>)
}`,...(D=(g=t.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var y,k,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '레이블 정렬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다.'
      },
      source: {
        code: \`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function OrientExample() {
  return (
    <>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>)
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,w,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '세로',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다.'
      },
      source: {
        code: \`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function VerticalExample() {
  return (
    <div className="space">
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="space">
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </div>)
}`,...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const z=["Playground","Basic","Dashed","Text","Orient","Vertical"];export{n as Basic,s as Dashed,o as Orient,a as Playground,t as Text,d as Vertical,z as __namedExportsOrder,q as default};
