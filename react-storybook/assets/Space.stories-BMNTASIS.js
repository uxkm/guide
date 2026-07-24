import{r as j,u as K,c as Q,n as U,j as e,a as X,b as Y,v as _}from"./iframe-DbjMrqYU.js";import{D as Z}from"./Divider-Drx50U2Y.js";import{w as c}from"./story-renders-CrEYzOkG.js";import"./preload-helper-DUxc-Dqw.js";const ee=new Set(["xs","sm","md","lg","xl"]),ae=Y("Space",{defaults:{gap:"md"},booleanProps:new Set(["vertical","wrap","block"])});function a({vertical:r=!1,wrap:o=!1,block:b=!1,gap:f="md",align:i,justify:m,children:N,className:S,...y}){const h=j.useRef(null),d=ee.has(f)?f:"md";K(ae,{vertical:r,wrap:o,block:b,gap:d,align:i,justify:m},Q({default:N}),h,{className:S,...y});const z=j.useMemo(()=>{const s=["space"];return r&&s.push("space_vertical"),o&&s.push("space_wrap"),b&&s.push("space_block"),d&&d!=="md"&&s.push(`space_gap-${d}`),i&&s.push(`space_align-${i}`),m&&s.push(`space_justify-${m}`),s},[r,o,b,d,i,m]),J=U(y);return e.jsx("div",{ref:h,className:X(z,S),...J,children:N})}a.__docgenInfo={description:"",methods:[],displayName:"Space",props:{vertical:{defaultValue:{value:"false",computed:!1},required:!1},wrap:{defaultValue:{value:"false",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1},gap:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const se=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ce=[{name:"vertical",type:"boolean",default:"false",description:"세로 방향 배치 (space_vertical)"},{name:"wrap",type:"boolean",default:"false",description:"줄바꿈 허용 (space_wrap)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% flex (space_block)"},{name:"gap",type:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"자식 간 간격. md는 클래스 없이 --space-gap 사용"},{name:"align",type:"'start' | 'center' | 'end' | 'baseline' | 'stretch'",default:"—",description:"교차축 정렬 (space_align-*)"},{name:"justify",type:"'start' | 'center' | 'end' | 'between'",default:"—",description:"주축 정렬 (space_justify-*)"}],oe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],de=[{name:"space",description:"inline-flex 루트, 기본 가로 배치"},{name:"space_vertical",description:"세로 방향"},{name:"space_wrap",description:"줄바꿈"},{name:"space_block",description:"display flex + width 100%"},{name:"space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl",description:"간격 변형 (md는 기본)"},{name:"space_align-start · space_align-center · space_align-end · space_align-baseline · space_align-stretch",description:"교차축 정렬"},{name:"space_justify-start · space_justify-center · space_justify-end · space_justify-between",description:"주축 정렬"}],re=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ie=[{name:"--space-gap",default:"var(--space-md)",description:"기본 자식 간 간격 (gap md)"}],me=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],le=[{name:"children",description:"간격을 둘 자식 요소 (Vue default 슬롯 대응)"}],te=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:se,rows:ce,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:me,rows:le,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:oe,rows:de,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:re,rows:ie,codeColumn:"name"}]}],g=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"space_demo-box",children:"항목 1"}),e.jsx("div",{className:"space_demo-box",children:"항목 2"}),e.jsx("div",{className:"space_demo-box",children:"항목 3"})]});function pe(r,o){return e.jsx(a,{...o.args,children:g})}const ne={vertical:!1,wrap:!1,block:!1,gap:"md",align:"값",justify:"값"},_e={title:"Components/레이아웃/Space",id:"components-space",component:a,tags:["autodocs"],argTypes:{vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},gap:{control:"select",options:["xs","sm","md","lg","xl"],type:{name:"enum",summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"}},align:{control:"select",options:["start","center","end","baseline","stretch"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'baseline' | 'stretch'"}},justify:{control:"select",options:["start","center","end","between"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:te,docs:{description:{component:"자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 유틸리티입니다. gap·방향·정렬·줄바꿈을 클래스로 조합합니다."}}}},l={parameters:{controls:{disable:!1}},args:{...ne},render:pe},t={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다."},source:{code:`import Space from '@uxkm/ui-react/components/Space.jsx';

export function BasicExample() {
  return (
    <Space>
      <div className="space_demo-box">항목 1</div>
      <div className="space_demo-box">항목 2</div>
      <div className="space_demo-box">항목 3</div>
    </Space>
  );
}`,language:"tsx"}}},render:c(e.jsx(a,{children:g}))},p={name:"세로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"space_vertical로 세로 방향 배치를 지정합니다."},source:{code:`import Space from '@uxkm/ui-react/components/Space.jsx';

export function VerticalExample() {
  return (
    <Space vertical>
      <div className="space_demo-box">항목 1</div>
      <div className="space_demo-box">항목 2</div>
      <div className="space_demo-box">항목 3</div>
    </Space>
  );
}`,language:"tsx"}}},render:c(e.jsx(a,{vertical:!0,children:g}))},n={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다."},source:{code:`import Space from '@uxkm/ui-react/components/Space.jsx';

export function GapExample() {
  return (
    <>
      <Space gap="xs">
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
      </Space>
      <Space gap="sm">
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
      </Space>
      <Space>
        <div className="space_demo-box">md (기본)</div>
        <div className="space_demo-box">md</div>
        <div className="space_demo-box">md</div>
      </Space>
      <Space gap="lg">
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
      </Space>
      <Space gap="xl">
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
      </Space>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs(a,{gap:"xs",children:[e.jsx("div",{className:"space_demo-box",children:"xs"}),e.jsx("div",{className:"space_demo-box",children:"xs"}),e.jsx("div",{className:"space_demo-box",children:"xs"})]}),e.jsxs(a,{gap:"sm",children:[e.jsx("div",{className:"space_demo-box",children:"sm"}),e.jsx("div",{className:"space_demo-box",children:"sm"}),e.jsx("div",{className:"space_demo-box",children:"sm"})]}),e.jsxs(a,{children:[e.jsx("div",{className:"space_demo-box",children:"md (기본)"}),e.jsx("div",{className:"space_demo-box",children:"md"}),e.jsx("div",{className:"space_demo-box",children:"md"})]}),e.jsxs(a,{gap:"lg",children:[e.jsx("div",{className:"space_demo-box",children:"lg"}),e.jsx("div",{className:"space_demo-box",children:"lg"}),e.jsx("div",{className:"space_demo-box",children:"lg"})]}),e.jsxs(a,{gap:"xl",children:[e.jsx("div",{className:"space_demo-box",children:"xl"}),e.jsx("div",{className:"space_demo-box",children:"xl"}),e.jsx("div",{className:"space_demo-box",children:"xl"})]})]}))},x={name:"줄바꿈",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다."},source:{code:`import Space from '@uxkm/ui-react/components/Space.jsx';

export function WrapExample() {
  return (
    <Space block wrap>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 1</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 2</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 3</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 4</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 5</div>
    </Space>
  );
}`,language:"tsx"}}},render:c(e.jsxs(a,{block:!0,wrap:!0,children:[e.jsx("div",{className:"space_demo-box",style:{minWidth:"8rem"},children:"항목 1"}),e.jsx("div",{className:"space_demo-box",style:{minWidth:"8rem"},children:"항목 2"}),e.jsx("div",{className:"space_demo-box",style:{minWidth:"8rem"},children:"항목 3"}),e.jsx("div",{className:"space_demo-box",style:{minWidth:"8rem"},children:"항목 4"}),e.jsx("div",{className:"space_demo-box",style:{minWidth:"8rem"},children:"항목 5"})]}))},v={name:"정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다."},source:{code:`import Space from '@uxkm/ui-react/components/Space.jsx';

export function AlignExample() {
  return (
    <>
      <Space
        block
        align="center"
        style={{
          minHeight: '5rem',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">align center</div>
        <div className="space_demo-box" style={{ paddingBlock: 'var(--space-xl)' }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space
        block
        justify="between"
        style={{
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">justify between</div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </>
  );
}`,language:"tsx"}}},render:c(e.jsxs(e.Fragment,{children:[e.jsxs(a,{block:!0,align:"center",style:{minHeight:"5rem",background:"var(--color-surface-raised)",borderRadius:"var(--radius-sm)",padding:"var(--space-md)"},children:[e.jsx("div",{className:"space_demo-box",children:"align center"}),e.jsx("div",{className:"space_demo-box",style:{paddingBlock:"var(--space-xl)"},children:"높이 다름"}),e.jsx("div",{className:"space_demo-box",children:"align center"})]}),e.jsxs(a,{block:!0,justify:"between",style:{background:"var(--color-surface-raised)",borderRadius:"var(--radius-sm)",padding:"var(--space-md)"},children:[e.jsx("div",{className:"space_demo-box",children:"justify between"}),e.jsx("div",{className:"space_demo-box",children:"양 끝"})]})]}))},u={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Divider from '@uxkm/ui-react/components/Divider.jsx';
import Space from '@uxkm/ui-react/components/Space.jsx';

export function ComboExample() {
  return (
    <Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>
  );
}`,language:"tsx"}}},render:c(e.jsxs(a,{children:[e.jsx(_,{variant:"outline",label:"취소"}),e.jsx(_,{variant:"filled",color:"primary",label:"저장"}),e.jsx(Z,{vertical:!0}),e.jsx(_,{variant:"text",label:"더보기"})]}))};var k,w,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: renderSpaceWithDemoBoxes
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,W,D;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        story: 'space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다.'
      },
      source: {
        code: \`import Space from '@uxkm/ui-react/components/Space.jsx';

export function BasicExample() {
  return (
    <Space>
      <div className="space_demo-box">항목 1</div>
      <div className="space_demo-box">항목 2</div>
      <div className="space_demo-box">항목 3</div>
    </Space>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Space>{spaceDemoBoxes}</Space>)
}`,...(D=(W=t.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var P,R,E;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        story: 'space_vertical로 세로 방향 배치를 지정합니다.'
      },
      source: {
        code: \`import Space from '@uxkm/ui-react/components/Space.jsx';

export function VerticalExample() {
  return (
    <Space vertical>
      <div className="space_demo-box">항목 1</div>
      <div className="space_demo-box">항목 2</div>
      <div className="space_demo-box">항목 3</div>
    </Space>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Space vertical>{spaceDemoBoxes}</Space>)
}`,...(E=(R=p.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var V,A,G;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '간격',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다.'
      },
      source: {
        code: \`import Space from '@uxkm/ui-react/components/Space.jsx';

export function GapExample() {
  return (
    <>
      <Space gap="xs">
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
      </Space>
      <Space gap="sm">
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
      </Space>
      <Space>
        <div className="space_demo-box">md (기본)</div>
        <div className="space_demo-box">md</div>
        <div className="space_demo-box">md</div>
      </Space>
      <Space gap="lg">
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
      </Space>
      <Space gap="xl">
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
      </Space>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Space gap="xs">
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
        <div className="space_demo-box">xs</div>
      </Space>
      <Space gap="sm">
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
        <div className="space_demo-box">sm</div>
      </Space>
      <Space>
        <div className="space_demo-box">md (기본)</div>
        <div className="space_demo-box">md</div>
        <div className="space_demo-box">md</div>
      </Space>
      <Space gap="lg">
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
        <div className="space_demo-box">lg</div>
      </Space>
      <Space gap="xl">
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
        <div className="space_demo-box">xl</div>
      </Space>
    </>)
}`,...(G=(A=n.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,q,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '줄바꿈',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.'
      },
      source: {
        code: \`import Space from '@uxkm/ui-react/components/Space.jsx';

export function WrapExample() {
  return (
    <Space block wrap>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 1</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 2</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 3</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 4</div>
      <div className="space_demo-box" style={{ minWidth: '8rem' }}>항목 5</div>
    </Space>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Space block wrap>
      <div className="space_demo-box" style={{
      minWidth: '8rem'
    }}>
        항목 1
      </div>
      <div className="space_demo-box" style={{
      minWidth: '8rem'
    }}>
        항목 2
      </div>
      <div className="space_demo-box" style={{
      minWidth: '8rem'
    }}>
        항목 3
      </div>
      <div className="space_demo-box" style={{
      minWidth: '8rem'
    }}>
        항목 4
      </div>
      <div className="space_demo-box" style={{
      minWidth: '8rem'
    }}>
        항목 5
      </div>
    </Space>)
}`,...(F=(q=x.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var I,T,O;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '정렬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다.'
      },
      source: {
        code: \`import Space from '@uxkm/ui-react/components/Space.jsx';

export function AlignExample() {
  return (
    <>
      <Space
        block
        align="center"
        style={{
          minHeight: '5rem',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">align center</div>
        <div className="space_demo-box" style={{ paddingBlock: 'var(--space-xl)' }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space
        block
        justify="between"
        style={{
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">justify between</div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Space block align="center" style={{
      minHeight: '5rem',
      background: 'var(--color-surface-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md)'
    }}>
        <div className="space_demo-box">align center</div>
        <div className="space_demo-box" style={{
        paddingBlock: 'var(--space-xl)'
      }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space block justify="between" style={{
      background: 'var(--color-surface-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md)'
    }}>
        <div className="space_demo-box">justify between</div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </>)
}`,...(O=(T=v.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var $,L,M;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '조합 예시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Divider from '@uxkm/ui-react/components/Divider.jsx';
import Space from '@uxkm/ui-react/components/Space.jsx';

export function ComboExample() {
  return (
    <Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Space>
      <Button variant="outline" label="취소" />
      <Button variant="filled" color="primary" label="저장" />
      <Divider vertical />
      <Button variant="text" label="더보기" />
    </Space>)
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ge=["Playground","Basic","Vertical","Gap","Wrap","Align","Combo"];export{v as Align,t as Basic,u as Combo,n as Gap,l as Playground,p as Vertical,x as Wrap,ge as __namedExportsOrder,_e as default};
