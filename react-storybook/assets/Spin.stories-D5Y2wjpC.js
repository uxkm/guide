import{r as C,u as ee,c as ae,n as re,j as e,a as se,b as ne,B as te}from"./iframe-ifEc15ad.js";import{w as n}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const le=new Set(["sm","md","lg"]),pe=new Set(["primary","success","warning","danger"]),ce=ne("Spin",{defaults:{size:"md",color:"primary"},booleanProps:new Set(["inline","block","overlay"]),selfClosing:!1});function a({size:r="md",tip:s,color:i="primary",inline:o,block:t,overlay:l,ariaLabel:m="로딩 중",children:u,className:b,style:f,...g}){const N=C.useRef(null),p=le.has(r)?r:"md",x=pe.has(i)?i:"primary";ee(ce,{size:p,tip:s,color:x,inline:o,block:t,overlay:l,ariaLabel:m},ae({default:u}),N,{className:b,style:f,...g});const c=C.useMemo(()=>{const d=["spin",`color_${x}`];return p==="sm"&&d.push("spin_sm"),p==="lg"&&d.push("spin_lg"),o&&d.push("spin_inline"),t&&d.push("spin_block"),l&&d.push("spin_overlay"),d},[x,p,o,t,l]),{class:ke,...ie}=g,oe=re(ie);return e.jsxs("div",{ref:N,className:se(c,b),style:f,role:"status","aria-live":"polite","aria-busy":"true","aria-label":m,...oe,children:[e.jsx("span",{className:"spin_indicator","aria-hidden":"true"}),s?e.jsx("p",{className:"spin_tip",children:s}):null,u]})}a.__docgenInfo={description:"",methods:[],displayName:"Spin",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'로딩 중'",computed:!1},required:!1}}};const de=ne("SpinWrap",{booleanProps:new Set(["loading","block","blur"]),selfClosing:!1});function L({loading:r,block:s,blur:i,tip:o,ariaLabel:t="로딩 중",children:l,className:m,style:u,...b}){const f=C.useRef(null);ee(de,{loading:r,block:s,blur:i,tip:o,ariaLabel:t},ae({default:l}),f,{className:m,style:u,...b});const g=C.useMemo(()=>{const c=["spin_wrap"];return s&&c.push("spin_wrap-block"),i&&c.push("spin_wrap-blur"),r&&c.push("is-loading"),c},[s,i,r]),{class:N,...p}=b,x=re(p);return e.jsxs("div",{ref:f,className:se(g,m),style:u,...x,children:[e.jsx("div",{className:"spin_wrap-body",children:l}),r?e.jsx(a,{overlay:!0,tip:o,ariaLabel:t}):null]})}L.__docgenInfo={description:"",methods:[],displayName:"SpinWrap",props:{ariaLabel:{defaultValue:{value:"'로딩 중'",computed:!1},required:!1}}};const me=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ue=[{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"스피너 크기. sm·lg는 spin_sm · spin_lg 클래스"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"공통 color_* 클래스로 스피너 색상 지정"},{name:"tip",type:"string",default:"—",description:"스피너 아래 설명 텍스트 (spin_tip)"},{name:"inline",type:"boolean",default:"false",description:"스피너·텍스트 가로 배치 (spin_inline)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 안 가운데 정렬 (spin_block)"},{name:"overlay",type:"boolean",default:"false",description:"컨테이너 전체를 덮는 오버레이 레이어 (spin_overlay)"},{name:"aria-label",type:"string",default:"로딩 중",description:"스크린 리더용 로딩 설명"}],be=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fe=[{name:"loading",type:"boolean",default:"false",description:"true일 때 is-loading + 오버레이 Spin 표시"},{name:"block",type:"boolean",default:"false",description:"데모·빈 상태용 최소 높이 (spin_wrap-block)"},{name:"blur",type:"boolean",default:"false",description:"로딩 시 콘텐츠 블러 (spin_wrap-blur)"},{name:"tip",type:"string",default:"—",description:"오버레이 Spin에 전달할 설명 텍스트"},{name:"aria-label",type:"string",default:"로딩 중",description:"오버레이 Spin에 전달할 접근성 라벨"}],xe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ge=[{name:"spin",description:"루트 래퍼 (인라인 flex)"},{name:"spin_indicator",description:"회전하는 원형 스피너"},{name:"spin_tip",description:"스피너 아래 설명 텍스트 (선택)"},{name:"spin_sm · spin_lg",description:"크기 변형"},{name:"spin_inline",description:"스피너·텍스트 가로 배치"},{name:"spin_block",description:"부모 너비 안 가운데 정렬"},{name:"spin_wrap",description:"오버레이용 상대 위치 컨테이너"},{name:"spin_wrap-body",description:"오버레이 아래 실제 콘텐츠"},{name:"spin_overlay",description:"컨테이너 전체를 덮는 스피너 레이어"},{name:"spin_wrap-block",description:"데모·빈 상태용 최소 높이"},{name:"spin_wrap-blur",description:"로딩 시 콘텐츠 블러"},{name:"is-loading",description:"spin_wrap에 지정 — 오버레이 표시"},{name:"color_primary · color_success · color_warning · color_danger",description:"공통 색상 변형"},{name:'role="status"',description:"로딩 상태 시맨틱 (권장)"},{name:'aria-busy="true"',description:"처리 중 표시"},{name:'aria-live="polite"',description:"스크린 리더에 상태 변경 알림"},{name:"aria-label",description:"접근 가능한 로딩 설명"}],ye=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Se=[{name:"--spin-size",default:"2rem",description:"스피너 지름"},{name:"--spin-size-sm · --spin-size-lg",default:"1.25rem · 3rem",description:"크기 변형별 지름"},{name:"--spin-border",default:"3px",description:"스피너 테두리 두께"},{name:"--spin-border-sm · --spin-border-lg",default:"2px · 4px",description:"크기 변형별 테두리"},{name:"--spin-duration",default:"0.8s",description:"회전 애니메이션 주기"},{name:"--spin-gap",default:"var(--space-sm)",description:"스피너·텍스트 간격"},{name:"--spin-tip-size",default:"var(--text-size-sm)",description:"설명 텍스트 크기"},{name:"--spin-overlay-bg",default:"rgba(15, 20, 25, 0.72)",description:"오버레이 배경 (tip 명도 대비용 불투명도)"},{name:"--spin-overlay-tip-color",default:"#ffffff",description:"오버레이 위 tip 텍스트 색"},{name:"--spin-wrap-min-height",default:"8rem",description:"spin_wrap-block 최소 높이"},{name:"--spin-wrap-content-opacity",default:"0.45",description:"로딩 시 콘텐츠 불투명도"}],W=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ve=[{name:"children",description:"추가 콘텐츠 (Vue default 슬롯)"}],_e=[{name:"children",description:"감싸는 콘텐츠 (Vue default 슬롯)"}],he=[{title:"API · Spin Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.",tables:[{columns:me,rows:ue,codeColumn:"name"}]},{title:"API · SpinWrap Props",tables:[{columns:be,rows:fe,codeColumn:"name"}]},{title:"API · Spin Children",tables:[{columns:W,rows:ve,codeColumn:"name"}]},{title:"API · SpinWrap Children",tables:[{columns:W,rows:_e,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:xe,rows:ge,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ye,rows:Se,codeColumn:"name"}]}],we={size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},Ne={title:"Components/피드백/Spin",id:"components-spin",component:a,subcomponents:{SpinWrap:L},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tip:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},overlay:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:he,docs:{description:{component:"로딩 상태를 표시하는 Spin · SpinWrap 컴포넌트입니다."}}}},y={parameters:{controls:{disable:!1}},args:{...we},render:r=>e.jsx(a,{...r})},S={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin` · `spin_indicator`로 회전 스피너를 표시합니다."},source:{code:`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function BasicExample() {
  return <Spin />;
}`,language:"tsx"}}},render:n(e.jsx(a,{}))},v={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin_sm` · `spin`(기본) · `spin_lg` 세 가지 크기를 지원합니다."},source:{code:`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function SizeExample() {
  return (
    <>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm"}),e.jsx(a,{}),e.jsx(a,{size:"lg"})]}))},_={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 `color_*` 클래스로 의미를 표현합니다."},source:{code:`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function ColorExample() {
  return (
    <>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"primary",ariaLabel:"Primary 로딩"}),e.jsx(a,{color:"success",ariaLabel:"Success 로딩"}),e.jsx(a,{color:"warning",ariaLabel:"Warning 로딩"}),e.jsx(a,{color:"danger",ariaLabel:"Danger 로딩"})]}))},h={name:"설명 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin_tip`으로 스피너 아래에 로딩 메시지를 표시합니다."},source:{code:`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function TipExample() {
  return (
    <>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(a,{tip:"데이터를 불러오는 중…",ariaLabel:"데이터를 불러오는 중"}),e.jsx(a,{size:"lg",tip:"파일 업로드 중…",ariaLabel:"파일 업로드 중"})]}))},w={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`spin_inline`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(a,{size:"sm",inline:!0,color:"primary",tip:"저장 중…",ariaLabel:"저장 중"})}),e.jsx(te,{variant:"filled",color:"primary",loading:!0,disabled:!0,"aria-busy":"true",label:"제출 중…"})]}))},k={name:"블록 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`spin_block`은 부모 너비 안에서 스피너를 가운데 정렬합니다."},source:{code:`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function BlockExample() {
  return (
    <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />
  );
}`,language:"tsx"}}},render:n(e.jsx(a,{block:!0,color:"primary",tip:"잠시만 기다려 주세요…",ariaLabel:"로딩 중"}))},j={name:"컨테이너 오버레이",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"`spin_wrap`에 `is-loading`을 지정하면 콘텐츠 위에 `spin_overlay`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."},source:{code:`import SpinWrap from '@uxkm/ui-react/components/SpinWrap.jsx';

export function OverlayExample() {
  return (
    <>
      <SpinWrap
        block
        loading
        tip="데이터 로딩 중…"
        ariaLabel="데이터 로딩 중"
        style={{ maxWidth: 'var(--input-max-width)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap
        block
        blur
        loading
        ariaLabel="처리 중"
        style={{ maxWidth: 'var(--input-max-width)', marginTop: 'var(--space-md)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(L,{block:!0,loading:!0,tip:"데이터 로딩 중…",ariaLabel:"데이터 로딩 중",style:{maxWidth:"var(--input-max-width)"},children:e.jsxs("div",{className:"card card_shadow",children:[e.jsx("div",{className:"card_header",children:e.jsx("h3",{className:"card_title",children:"대시보드"})}),e.jsx("div",{className:"card_body",children:e.jsx("p",{children:"차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다."})})]})}),e.jsx(L,{block:!0,blur:!0,loading:!0,ariaLabel:"처리 중",style:{maxWidth:"var(--input-max-width)",marginTop:"var(--space-md)"},children:e.jsxs("div",{className:"card card_shadow",children:[e.jsx("div",{className:"card_header",children:e.jsx("h3",{className:"card_title",children:"블러 효과"})}),e.jsx("div",{className:"card_body",children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"spin_wrap-blur"}),"를 함께 사용하면 콘텐츠에 블러가 적용됩니다."]})})]})})]}))};var P,z,D;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Spin {...args} />
}`,...(D=(z=y.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var E,R,B;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        story: '\`spin\` · \`spin_indicator\`로 회전 스피너를 표시합니다.'
      },
      source: {
        code: \`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function BasicExample() {
  return <Spin />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Spin />)
}`,...(B=(R=S.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var I,T,O;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: '\`spin_sm\` · \`spin\`(기본) · \`spin_lg\` 세 가지 크기를 지원합니다.'
      },
      source: {
        code: \`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function SizeExample() {
  return (
    <>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </>)
}`,...(O=(T=v.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var V,A,F;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        story: '공통 \`color_*\` 클래스로 의미를 표현합니다.'
      },
      source: {
        code: \`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function ColorExample() {
  return (
    <>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </>)
}`,...(F=(A=_.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var q,M,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '설명 텍스트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`spin_tip\`으로 스피너 아래에 로딩 메시지를 표시합니다.'
      },
      source: {
        code: \`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function TipExample() {
  return (
    <>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </>)
}`,...(J=(M=h.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var $,H,Z;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '인라인',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`spin_inline\`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <p>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </>)
}`,...(Z=(H=w.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var G,K,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '블록 정렬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`spin_block\`은 부모 너비 안에서 스피너를 가운데 정렬합니다.'
      },
      source: {
        code: \`import Spin from '@uxkm/ui-react/components/Spin.jsx';

export function BlockExample() {
  return (
    <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />)
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '컨테이너 오버레이',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`spin_wrap\`에 \`is-loading\`을 지정하면 콘텐츠 위에 \`spin_overlay\`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다.'
      },
      source: {
        code: \`import SpinWrap from '@uxkm/ui-react/components/SpinWrap.jsx';

export function OverlayExample() {
  return (
    <>
      <SpinWrap
        block
        loading
        tip="데이터 로딩 중…"
        ariaLabel="데이터 로딩 중"
        style={{ maxWidth: 'var(--input-max-width)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap
        block
        blur
        loading
        ariaLabel="처리 중"
        style={{ maxWidth: 'var(--input-max-width)', marginTop: 'var(--space-md)' }}
      >
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <SpinWrap block loading tip="데이터 로딩 중…" ariaLabel="데이터 로딩 중" style={{
      maxWidth: 'var(--input-max-width)'
    }}>
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">대시보드</h3>
          </div>
          <div className="card_body">
            <p>
              차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를
              덮습니다.
            </p>
          </div>
        </div>
      </SpinWrap>
      <SpinWrap block blur loading ariaLabel="처리 중" style={{
      maxWidth: 'var(--input-max-width)',
      marginTop: 'var(--space-md)'
    }}>
        <div className="card card_shadow">
          <div className="card_header">
            <h3 className="card_title">블러 효과</h3>
          </div>
          <div className="card_body">
            <p>
              <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가
              적용됩니다.
            </p>
          </div>
        </div>
      </SpinWrap>
    </>)
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const We=["Playground","Basic","Size","Color","Tip","Inline","Block","Overlay"];export{S as Basic,k as Block,_ as Color,w as Inline,j as Overlay,y as Playground,v as Size,h as Tip,We as __namedExportsOrder,Ne as default};
