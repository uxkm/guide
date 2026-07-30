import{j as e}from"./iframe-DS-82CEY.js";import{D as r,S as _}from"./Space-BPzvzPn2.js";import{w as n,b as P}from"./story-renders-DjJEfxtm.js";import"./preload-helper-DUxc-Dqw.js";const E=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],R=[{name:"dashed",type:"boolean",default:"false",description:"점선 스타일 (divider_dashed)"},{name:"plain",type:"boolean",default:"false",description:"레이블 보조 톤 (divider_plain)"},{name:"vertical",type:"boolean",default:"false",description:"세로 구분선 (divider_vertical)"},{name:"orient",type:"'left' | 'right'",default:"—",description:"레이블 정렬. 생략 시 가운데"},{name:"label",type:"string",default:"—",description:"가운데 레이블 텍스트. children으로 대체 가능"},{name:"tag",type:"'auto' | 'hr' | 'div' | 'span'",default:"auto",description:"루트 태그. auto는 vertical·레이블 유무에 따라 hr · div · span 선택"}],A=[{key:"name",label:"Children"},{key:"description",label:"설명"}],B=[{name:"children",description:"레이블 텍스트 (label prop 대체, Vue default 슬롯 대응)"}],T=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],O=[{name:"divider",description:"가로·세로 구분선 루트"},{name:"divider_dashed",description:"점선 스타일"},{name:"divider_plain",description:"보조 톤 레이블"},{name:"divider_vertical",description:"세로 구분선 (인라인·flex 행)"},{name:"divider_orient-left · divider_orient-right",description:"레이블 좌·우 정렬"}],V=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],F=[{name:"--divider-color",default:"var(--color-border-subtle)",description:"선 색상"},{name:"--divider-thickness",default:"1px",description:"선 두께"},{name:"--divider-margin-y",default:"var(--space-md)",description:"가로 구분선 상하 여백"},{name:"--divider-margin-x",default:"var(--space-sm)",description:"세로 구분선 좌우 여백"},{name:"--divider-text-gap",default:"var(--space-md)",description:"레이블·선 사이 간격"},{name:"--divider-orient-inset",default:"5%",description:"orient-left · orient-right 선 길이"}],I=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:E,rows:R,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다. label prop으로도 동일 콘텐츠를 넣을 수 있습니다.",tables:[{columns:A,rows:B,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:T,rows:O,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:V,rows:F,codeColumn:"name"}]}],H={dashed:!1,plain:!1,vertical:!1,orient:"",label:"라벨",tag:"auto"},G={title:"Components/레이아웃/Divider",id:"components-divider",component:r,tags:["autodocs"],argTypes:{dashed:{control:"boolean",type:{name:"boolean",summary:"boolean"}},plain:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},orient:{control:"select",options:["","left","right"],labels:{"":"가운데",left:"left",right:"right"},description:"레이블 정렬. 가운데는 orient를 생략한 기본값입니다.",type:{name:"enum",summary:"'left' | 'right' (기본: 가운데)"}},label:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"select",options:["auto","hr","div","span"],type:{name:"enum",summary:"'auto' | 'hr' | 'div' | 'span'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:I,docs:{description:{component:"콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다."}}}},i={parameters:{controls:{disable:!1}},args:{...H},render:P(r)},a={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function BasicExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"위 콘텐츠"}),e.jsx(r,{}),e.jsx("p",{children:"아래 콘텐츠"})]}))},s={name:"점선",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider_dashed로 점선 스타일을 적용합니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function DashedExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"위 콘텐츠"}),e.jsx(r,{dashed:!0}),e.jsx("p",{children:"아래 콘텐츠"})]}))},t={name:"텍스트 레이블",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function TextExample() {
  return (
    <>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"섹션 제목"}),e.jsx(r,{plain:!0,label:"보조 설명"})]}))},o={name:"레이블 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';

export function OrientExample() {
  return (
    <>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{orient:"left",label:"왼쪽"}),e.jsx(r,{label:"가운데"}),e.jsx(r,{orient:"right",label:"오른쪽"})]}))},d={name:"세로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다."},source:{code:`import Divider from '@uxkm/ui-react/components/Divider.jsx';
import Space from '@uxkm/ui-react/components/Space.jsx';

export function VerticalExample() {
  return (
    <Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>
  );
}`,language:"tsx"}}},render:n(e.jsxs(_,{children:[e.jsx("span",{children:"항목 A"}),e.jsx(r,{vertical:!0}),e.jsx("span",{children:"항목 B"}),e.jsx(r,{vertical:!0,dashed:!0}),e.jsx("span",{children:"항목 C"})]}))};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(Divider)
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,h,D;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var y,k,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,S,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
import Space from '@uxkm/ui-react/components/Space.jsx';

export function VerticalExample() {
  return (
    <Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>)
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const J=["Playground","Basic","Dashed","Text","Orient","Vertical"];export{a as Basic,s as Dashed,o as Orient,i as Playground,t as Text,d as Vertical,J as __namedExportsOrder,G as default};
