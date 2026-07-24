import{r as k,d as _e,u as ye,c as je,n as ve,j as e,v as w,I as M,a as T,b as he}from"./iframe-DbjMrqYU.js";import{w as s}from"./story-renders-CrEYzOkG.js";import{d as ke,a as we}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const Ne=new Set(["sm","md","lg"]),Ce=he("Pagination",{defaults:{current:1,total:1,pageSize:10,ariaLabel:"페이지 이동",size:"md"},booleanProps:new Set(["simple","minimal","round","ripple"]),selfClosing:!1});function Ee(r,n){if(r<=7)return Array.from({length:r},(o,l)=>l+1);const i=[];if(n<=4){for(let o=1;o<=5;o+=1)i.push(o);i.push("ellipsis-end"),i.push(r)}else if(n>=r-3){i.push(1),i.push("ellipsis-start");for(let o=r-4;o<=r;o+=1)i.push(o)}else{i.push(1),i.push("ellipsis-start");for(let o=n-1;o<=n+1;o+=1)i.push(o);i.push("ellipsis-end"),i.push(r)}return i}function t({ripple:r,current:n=1,total:i=1,pageSize:o=10,simple:l,minimal:y,size:N="md",round:j,ariaLabel:C="페이지 이동",className:E,onChange:c,...R}){const D=k.useRef(null),{rippleAttrs:de,childRippleAttrs:v}=_e({ripple:r},{mode:"container"}),m=Ne.has(N)?N:"md",p=Math.max(1,Math.ceil(i/o)),xe=k.useMemo(()=>Ee(p,n),[p,n]);ye(Ce,{ripple:r,current:n,total:i,pageSize:o,simple:l,minimal:y,size:m,round:j,ariaLabel:C},je({}),D,{className:E,onChange:c,...R});const fe=k.useMemo(()=>{const a=["pagination"];return l&&a.push("pagination_simple"),y&&a.push("pagination_minimal"),m==="sm"&&a.push("pagination_sm"),m==="lg"&&a.push("pagination_lg"),j&&a.push("pagination_round"),a},[l,y,m,j]),{class:qe,...Pe}=R,be=ve(Pe);function h(a){a<1||a>p||a===n||c==null||c(a)}function Se(){h(n-1)}function ze(){h(n+1)}const A=e.jsx(w,{...v,variant:"ghost",size:"sm",iconOnly:!0,className:"pagination_btn pagination_prev",ariaLabel:"이전 페이지",disabled:n<=1,onClick:Se,iconBefore:e.jsx(M,{name:"chevron-left",size:"sm",className:"pagination_icon"})}),V=e.jsx(w,{...v,variant:"ghost",size:"sm",iconOnly:!0,className:"pagination_btn pagination_next",ariaLabel:"다음 페이지",disabled:n>=p,onClick:ze,iconBefore:e.jsx(M,{name:"chevron-right",size:"sm",className:"pagination_icon"})});return e.jsx("nav",{ref:D,className:T(fe,E),"aria-label":C,...de,...be,children:l?e.jsxs(e.Fragment,{children:[A,e.jsxs("span",{className:"pagination_simple-text",children:[e.jsx("span",{className:"pagination_simple-current",children:n})," / ",e.jsx("span",{className:"pagination_simple-total",children:p})]}),V]}):e.jsxs("ul",{className:"pagination_list",children:[e.jsx("li",{className:"pagination_item",children:A}),xe.map((a,B)=>typeof a=="string"?e.jsx("li",{className:"pagination_item",children:e.jsx("span",{className:"pagination_ellipsis","aria-hidden":"true",children:"…"})},`${a}-${B}`):e.jsx("li",{className:"pagination_item",children:e.jsx(w,{...v,variant:"text",className:T("pagination_link",a===n&&"is-active"),"aria-current":a===n?"page":void 0,onClick:()=>h(a),children:a})},`${a}-${B}`)),e.jsx("li",{className:"pagination_item",children:V})]})})}t.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{current:{defaultValue:{value:"1",computed:!1},required:!1},total:{defaultValue:{value:"1",computed:!1},required:!1},pageSize:{defaultValue:{value:"10",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'페이지 이동'",computed:!1},required:!1}}};const Re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],De=[{name:"current",type:"number",default:"1",description:"현재 페이지 (v-model:current)"},{name:"total",type:"number",default:"1",description:"전체 항목 수"},{name:"page-size",type:"number",default:"10",description:"페이지당 항목 수"},{name:"simple",type:"boolean",default:"false",description:"pagination_simple — 이전·다음+현재/전체"},{name:"minimal",type:"boolean",default:"false",description:"pagination_minimal — 테두리 없음"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"pagination_sm · pagination_lg"},{name:"round",type:"boolean",default:"false",description:"pagination_round — pill 버튼"},{name:"aria-label",type:"string",default:"페이지 이동",description:"nav aria-label"},ke],Ae=[{key:"name",label:"이벤트"},{key:"payload",label:"페이로드"},{key:"description",label:"설명"}],Ve=[{name:"update:current",payload:"number",description:"v-model:current — 페이지 변경"},{name:"change",payload:"number",description:"페이지 변경 시"}],Be=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Me=[{name:"pagination · pagination_list · pagination_item",description:"루트·목록·항목"},{name:"pagination_link · pagination_prev · pagination_next",description:"페이지·이전·다음 버튼"},{name:"pagination_ellipsis",description:"생략 표시"},{name:"pagination_simple · pagination_minimal · pagination_round",description:"스타일 변형"},{name:"pagination_sm · pagination_lg",description:"크기"},{name:"pagination_align-center · pagination_align-end",description:"정렬"},{name:"pagination_wrap · pagination_total · pagination_jumper",description:"툴바 조합"},{name:"is-active · is-disabled",description:"현재·비활성 페이지"},{name:'aria-current="page"',description:"현재 페이지 표시"},...we],Te=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Le=[{name:"--pagination-gap · --pagination-item-size",default:"—",description:"간격·버튼 크기"},{name:"--pagination-font-size",default:"—",description:"글자 크기"}],Fe=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 page-size · aria-label · v-model:current는 pageSize · ariaLabel · current + onChange로 다룹니다.",tables:[{columns:Re,rows:De,codeColumn:"name"}]},{title:"API · Events",description:"Vue update:current · change는 React onChange에 대응합니다.",tables:[{columns:Ae,rows:Ve,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Be,rows:Me,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Te,rows:Le,codeColumn:"name"}]}],Ie={current:1,total:50,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},Ge={title:"Components/네비게이션/Pagination",id:"components-pagination",component:t,tags:["autodocs"],argTypes:{current:{control:"number",type:{name:"number",summary:"number"}},total:{control:"number",type:{name:"number",summary:"number"}},pageSize:{control:"number",type:{name:"number",summary:"number"}},simple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},minimal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Fe,docs:{description:{component:"목록·테이블 등에서 페이지를 이동하는 Pagination 컴포넌트입니다."}}}},u={parameters:{controls:{disable:!1}},args:{...Ie},render:(r,{updateArgs:n})=>e.jsx(t,{...r,onChange:i=>n({current:i})})},g={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이전·다음 버튼과 페이지 번호로 구성합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function BasicExample() {
  return <Pagination current={1} total={50} pageSize={10} />;
}`,language:"tsx"}}},render:s(e.jsx(t,{current:1,total:50,pageSize:10}))},d={name:"미니멀",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"minimal로 테두리 없는 가벼운 스타일을 적용합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function MinimalExample() {
  return <Pagination current={4} total={50} pageSize={10} minimal />;
}`,language:"tsx"}}},render:s(e.jsx(t,{current:4,total:50,pageSize:10,minimal:!0}))},x={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size로 항목 스케일을 조절합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function SizeExample() {
  return (
    <>
      <Pagination current={1} total={20} pageSize={10} size="sm" />
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} size="lg" />
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{current:1,total:20,pageSize:10,size:"sm"}),e.jsx(t,{current:1,total:20,pageSize:10}),e.jsx(t,{current:1,total:20,pageSize:10,size:"lg"})]}))},f={name:"둥근",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"round로 pill 형태의 페이지 버튼을 적용합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function RoundExample() {
  return <Pagination current={7} total={80} pageSize={10} round />;
}`,language:"tsx"}}},render:s(e.jsx(t,{current:7,total:80,pageSize:10,round:!0}))},P={name:"페이지 생략",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"페이지가 많을 때 중간 구간을 생략합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function EllipsisExample() {
  return <Pagination current={10} total={500} pageSize={10} />;
}`,language:"tsx"}}},render:s(e.jsx(t,{current:10,total:500,pageSize:10}))},b={name:"심플",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"simple로 이전·다음과 현재/전체 페이지만 표시합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function SimpleExample() {
  return (
    <>
      <Pagination simple current={3} total={120} pageSize={10} />
      <Pagination simple minimal current={1} total={120} pageSize={10} />
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{simple:!0,current:3,total:120,pageSize:10}),e.jsx(t,{simple:!0,minimal:!0,current:1,total:120,pageSize:10})]}))},S={name:"툴바 조합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function ToolbarExample() {
  return (
    <div className="pagination_wrap">
      <span className="pagination_total">총 128건</span>
      <div className="pagination_wrap-end">
        <Pagination current={5} total={128} pageSize={10} minimal />
        <label className="pagination_jumper">
          이동
          <input
            type="number"
            className="pagination_jumper-input"
            defaultValue={5}
            min={1}
            max={13}
            aria-label="이동할 페이지"
          />
          페이지
        </label>
      </div>
    </div>
  );
}`,language:"tsx"}}},render:s(e.jsxs("div",{className:"pagination_wrap",children:[e.jsx("span",{className:"pagination_total",children:"총 128건"}),e.jsxs("div",{className:"pagination_wrap-end",children:[e.jsx(t,{current:5,total:128,pageSize:10,minimal:!0}),e.jsxs("label",{className:"pagination_jumper",children:["이동",e.jsx("input",{type:"number",className:"pagination_jumper-input",defaultValue:5,min:1,max:13,"aria-label":"이동할 페이지"}),"페이지"]})]})]}))},z={name:"정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function AlignExample() {
  return (
    <>
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-center" />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-end" />
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{current:1,total:20,pageSize:10}),e.jsx(t,{current:1,total:20,pageSize:10,className:"pagination_align-center"}),e.jsx(t,{current:1,total:20,pageSize:10,className:"pagination_align-end"})]}))},_={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다."},source:{code:`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function StateExample() {
  return (
    <>
      <Pagination current={1} total={30} pageSize={10} />
      <Pagination current={10} total={100} pageSize={10} />
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{current:1,total:30,pageSize:10}),e.jsx(t,{current:10,total:100,pageSize:10})]}))};var L,F,I;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: (args, {
    updateArgs
  }) => <Pagination {...args} onChange={next => updateArgs({
    current: next
  })} />
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var q,O,$;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        story: '이전·다음 버튼과 페이지 번호로 구성합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function BasicExample() {
  return <Pagination current={1} total={50} pageSize={10} />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Pagination current={1} total={50} pageSize={10} />)
}`,...($=(O=g.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var H,Z,G;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '미니멀',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'minimal로 테두리 없는 가벼운 스타일을 적용합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function MinimalExample() {
  return <Pagination current={4} total={50} pageSize={10} minimal />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Pagination current={4} total={50} pageSize={10} minimal />)
}`,...(G=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        story: 'size로 항목 스케일을 조절합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function SizeExample() {
  return (
    <>
      <Pagination current={1} total={20} pageSize={10} size="sm" />
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} size="lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Pagination current={1} total={20} pageSize={10} size="sm" />
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} size="lg" />
    </>)
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '둥근',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'round로 pill 형태의 페이지 버튼을 적용합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function RoundExample() {
  return <Pagination current={7} total={80} pageSize={10} round />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Pagination current={7} total={80} pageSize={10} round />)
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,ae;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '페이지 생략',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '페이지가 많을 때 중간 구간을 생략합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function EllipsisExample() {
  return <Pagination current={10} total={500} pageSize={10} />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Pagination current={10} total={500} pageSize={10} />)
}`,...(ae=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '심플',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'simple로 이전·다음과 현재/전체 페이지만 표시합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function SimpleExample() {
  return (
    <>
      <Pagination simple current={3} total={120} pageSize={10} />
      <Pagination simple minimal current={1} total={120} pageSize={10} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Pagination simple current={3} total={120} pageSize={10} />
      <Pagination simple minimal current={1} total={120} pageSize={10} />
    </>)
}`,...(ie=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var oe,re,se;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '툴바 조합',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function ToolbarExample() {
  return (
    <div className="pagination_wrap">
      <span className="pagination_total">총 128건</span>
      <div className="pagination_wrap-end">
        <Pagination current={5} total={128} pageSize={10} minimal />
        <label className="pagination_jumper">
          이동
          <input
            type="number"
            className="pagination_jumper-input"
            defaultValue={5}
            min={1}
            max={13}
            aria-label="이동할 페이지"
          />
          페이지
        </label>
      </div>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="pagination_wrap">
      <span className="pagination_total">총 128건</span>
      <div className="pagination_wrap-end">
        <Pagination current={5} total={128} pageSize={10} minimal />
        <label className="pagination_jumper">
          이동
          <input type="number" className="pagination_jumper-input" defaultValue={5} min={1} max={13} aria-label="이동할 페이지" />
          페이지
        </label>
      </div>
    </div>)
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,pe,ce;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
        story: 'pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function AlignExample() {
  return (
    <>
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-center" />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-end" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-center" />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-end" />
    </>)
}`,...(ce=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var me,ue,ge;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
        story: '첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다.'
      },
      source: {
        code: \`import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function StateExample() {
  return (
    <>
      <Pagination current={1} total={30} pageSize={10} />
      <Pagination current={10} total={100} pageSize={10} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Pagination current={1} total={30} pageSize={10} />
      <Pagination current={10} total={100} pageSize={10} />
    </>)
}`,...(ge=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const Je=["Playground","Basic","Minimal","Size","Round","Ellipsis","Simple","Toolbar","Align","State"];export{z as Align,g as Basic,P as Ellipsis,d as Minimal,u as Playground,f as Round,b as Simple,x as Size,_ as State,S as Toolbar,Je as __namedExportsOrder,Ge as default};
