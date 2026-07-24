import{r as k,D as X,n as Y,j as e,a as $,B as ee}from"./iframe-ifEc15ad.js";import{w as t}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const se=new Set(["sm","md","lg"]);function te(){return e.jsxs("svg",{viewBox:"0 0 64 41",fill:"none","aria-hidden":"true",children:[e.jsx("ellipse",{cx:"32",cy:"34",rx:"30",ry:"5",fill:"currentColor",opacity:"0.12"}),e.jsx("path",{d:"M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e.jsx("path",{d:"M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function s({description:r,size:x="md",simple:a,block:y,image:H,footer:h,children:Z,className:g,style:f,...v}){const b=k.useRef(null),i=se.has(x)?x:"md",E=Z??r,q=!a,J=h!=null;X({description:typeof r=="string"?r:void 0,size:i,simple:a,block:y},b,{className:g,style:f,...v});const K=k.useMemo(()=>{const o=["empty"];return i==="sm"&&o.push("empty_sm"),i==="lg"&&o.push("empty_lg"),a&&o.push("empty_simple"),y&&o.push("empty_block"),o},[i,a,y]),{class:ue,...Q}=v,U=Y(Q);return e.jsxs("div",{ref:b,className:$(K,g),style:f,role:"status",...U,children:[q?e.jsx("div",{className:"empty_image","aria-hidden":"true","data-demo-slot":"image",children:H??e.jsx(te,{})}):null,E?e.jsx("p",{className:"empty_desc",children:E}):null,J?e.jsx("div",{className:"empty_footer","data-demo-slot":"footer",children:h}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],oe=[{name:"description",type:"string",default:"—",description:"설명 텍스트. description 슬롯으로 대체"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"empty_sm · empty_lg"},{name:"simple",type:"boolean",default:"false",description:"아이콘 숨김 (empty_simple)"},{name:"block",type:"boolean",default:"false",description:"가운데 블록 정렬 (empty_block)"}],ae=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ie=[{name:"empty · empty_image · empty_desc · empty_footer",description:"루트·이미지·설명·푸터"},{name:"empty_sm · empty_lg · empty_simple · empty_block",description:"크기·변형"},{name:'role="status"',description:"빈 상태 시맨틱"}],me=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ne=[{name:"--empty-gap · --empty-padding-y · --empty-padding-x",default:"—",description:"간격·패딩"},{name:"--empty-image-size · --empty-image-size-sm · --empty-image-size-lg",default:"4rem · 3rem · 5rem",description:"아이콘 크기"},{name:"--empty-desc-size · --empty-desc-max-width",default:"var(--text-size-sm) · 20rem",description:"설명 타이포"}],ce=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],pe=[{name:"image",description:"일러스트·아이콘 (empty_image)"},{name:"children",description:"설명 (description prop 대체, Vue description 슬롯)"},{name:"footer",description:"액션 버튼·링크 (empty_footer)"}],de=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:re,rows:oe,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:ce,rows:pe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ae,rows:ie,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:me,rows:ne,codeColumn:"name"}]}],le={description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},ge={title:"Components/피드백/Empty",id:"components-empty",component:s,tags:["autodocs"],argTypes:{description:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},simple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:de,docs:{description:{component:"데이터·결과가 없을 때 표시하는 Empty 상태 컴포넌트입니다."}}}},m={parameters:{controls:{disable:!1}},args:{...le},render:r=>e.jsx(s,{...r})},n={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_image` · `empty_desc`로 아이콘과 설명을 표시합니다."},source:{code:`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function BasicExample() {
  return <Empty description="데이터가 없습니다" />;
}`,language:"tsx"}}},render:t(e.jsx(s,{description:"데이터가 없습니다"}))},c={name:"액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_footer`에 버튼·링크를 배치해 다음 행동을 유도합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function FooterExample() {
  return (
    <Empty
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />
  );
}`,language:"tsx"}}},render:t(e.jsx(s,{description:"등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.",footer:e.jsx(ee,{variant:"filled",color:"primary",size:"sm",label:"프로젝트 만들기"})}))},p={name:"커스텀 이미지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_image`에 SVG·img를 자유롭게 넣을 수 있습니다."},source:{code:`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function CustomExample() {
  return (
    <Empty
      description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요."
      image={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      }
    />
  );
}`,language:"tsx"}}},render:t(e.jsx(s,{description:"검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.",image:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-3.5-3.5"}),e.jsx("path",{d:"M8 11h6"})]})}))},d={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_sm` · `empty`(기본) · `empty_lg` 세 가지 스케일을 지원합니다."},source:{code:`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function SizeExample() {
  return (
    <>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{ marginTop: 'var(--space-md)' }} />
      <Empty size="lg" description="Large" style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"sm",description:"Small"}),e.jsx(s,{description:"Medium (기본)",style:{marginTop:"var(--space-md)"}}),e.jsx(s,{size:"lg",description:"Large",style:{marginTop:"var(--space-md)"}})]}))},l={name:"설명만",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_simple`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."},source:{code:`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function SimpleExample() {
  return <Empty simple size="sm" description="일정 없음" />;
}`,language:"tsx"}}},render:t(e.jsx(s,{simple:!0,size:"sm",description:"일정 없음"}))},u={name:"블록 · 컨테이너",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_block`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."},source:{code:`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function BlockExample() {
  return (
    <div className="card card_shadow" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <div className="card_header">
        <h3 className="card_title">알림 목록</h3>
      </div>
      <div className="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </div>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card card_shadow",style:{maxWidth:"var(--input-max-width)",width:"100%"},children:[e.jsx("div",{className:"card_header",children:e.jsx("h3",{className:"card_title",children:"알림 목록"})}),e.jsx("div",{className:"card_body",children:e.jsx(s,{block:!0,description:"새 알림이 없습니다"})})]}),e.jsx("div",{className:"table_wrap",style:{maxWidth:"var(--input-max-width)",width:"100%",marginTop:"var(--space-md)"},children:e.jsxs("table",{className:"table table_bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"이름"}),e.jsx("th",{scope:"col",children:"상태"}),e.jsx("th",{scope:"col",children:"날짜"})]})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:3,style:{padding:0,border:"none"},children:e.jsx(s,{block:!0,simple:!0,size:"sm",description:"표시할 항목이 없습니다"})})})})]})})]}))};var _,j,w;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Empty {...args} />
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,z,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        story: '\`empty_image\` · \`empty_desc\`로 아이콘과 설명을 표시합니다.'
      },
      source: {
        code: \`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function BasicExample() {
  return <Empty description="데이터가 없습니다" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Empty description="데이터가 없습니다" />)
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var N,B,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '액션',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`empty_footer\`에 버튼·링크를 배치해 다음 행동을 유도합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function FooterExample() {
  return (
    <Empty
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요." footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />} />)
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var R,T,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '커스텀 이미지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`empty_image\`에 SVG·img를 자유롭게 넣을 수 있습니다.'
      },
      source: {
        code: \`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function CustomExample() {
  return (
    <Empty
      description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요."
      image={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요." image={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>} />)
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,W,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        story: '\`empty_sm\` · \`empty\`(기본) · \`empty_lg\` 세 가지 스케일을 지원합니다.'
      },
      source: {
        code: \`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function SizeExample() {
  return (
    <>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{ marginTop: 'var(--space-md)' }} />
      <Empty size="lg" description="Large" style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{
      marginTop: 'var(--space-md)'
    }} />
      <Empty size="lg" description="Large" style={{
      marginTop: 'var(--space-md)'
    }} />
    </>)
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var F,V,A;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '설명만',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`empty_simple\`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다.'
      },
      source: {
        code: \`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function SimpleExample() {
  return <Empty simple size="sm" description="일정 없음" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Empty simple size="sm" description="일정 없음" />)
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var I,O,G;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '블록 · 컨테이너',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`empty_block\`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다.'
      },
      source: {
        code: \`import Empty from '@uxkm/ui-react/components/Empty.jsx';

export function BlockExample() {
  return (
    <div className="card card_shadow" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <div className="card_header">
        <h3 className="card_title">알림 목록</h3>
      </div>
      <div className="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="card card_shadow" style={{
      maxWidth: 'var(--input-max-width)',
      width: '100%'
    }}>
        <div className="card_header">
          <h3 className="card_title">알림 목록</h3>
        </div>
        <div className="card_body">
          <Empty block description="새 알림이 없습니다" />
        </div>
      </div>
      <div className="table_wrap" style={{
      maxWidth: 'var(--input-max-width)',
      width: '100%',
      marginTop: 'var(--space-md)'
    }}>
        <table className="table table_bordered">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">상태</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} style={{
              padding: 0,
              border: 'none'
            }}>
                <Empty block simple size="sm" description="표시할 항목이 없습니다" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>)
}`,...(G=(O=u.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const fe=["Playground","Basic","Footer","Custom","Size","Simple","Block"];export{n as Basic,u as Block,p as Custom,c as Footer,m as Playground,l as Simple,d as Size,fe as __namedExportsOrder,ge as default};
