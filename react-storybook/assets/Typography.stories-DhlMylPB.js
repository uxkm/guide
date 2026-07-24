import{r as x,u as Re,c as qe,n as We,j as e,a as Ie,b as He}from"./iframe-DbjMrqYU.js";import{w as o,b as Ue}from"./story-renders-CrEYzOkG.js";import"./preload-helper-DUxc-Dqw.js";const F={paragraph:{tag:"p",className:"typo_paragraph"},lead:{tag:"p",className:"typo_lead"},caption:{tag:"p",className:"typo_caption"},label:{tag:"label",className:"typo_label"},overline:{tag:"p",className:"typo_overline"},code:{tag:"code",className:"typo_code"},kbd:{tag:"kbd",className:"typo_kbd"},pre:{tag:"pre",className:"typo_pre"},strong:{tag:"span",className:"typo_strong"},italic:{tag:"span",className:"typo_italic"},underline:{tag:"span",className:"typo_underline"},delete:{tag:"span",className:"typo_delete"},mark:{tag:"span",className:"typo_mark"},sub:{tag:"sub",className:"typo_sub"},sup:{tag:"sup",className:"typo_sup"},small:{tag:"small",className:"typo_small"},link:{tag:"a",className:"typo_link"},blockquote:{tag:"blockquote",className:"typo_blockquote"},text:{tag:"p",className:""}},Ve=new Set(["","xs","sm","lg","xl"]),Oe=He("TypoText",{defaults:{variant:"text",ellipsis:0},skipProps:["tag"],selfClosing:!1});function t({variant:s="text",color:r,size:m="",ellipsis:i,href:c,htmlFor:u,cite:T,label:p,tag:b,children:W,className:v,onClick:n,...y}){const I=x.useRef(null),g=F[s]||F.text,d=Ve.has(m)?m:"",H=W??p;Re(Oe,{variant:s,color:r,size:d,ellipsis:i,href:c,htmlFor:u,cite:T,label:p},qe({default:H}),I,{className:v,onClick:n,...y});const h=x.useMemo(()=>{if(i==null||i==="")return 0;const a=Number(i);return a>=1&&a<=3?a:0},[i]),Fe=x.useMemo(()=>{const a=[];return g.className&&a.push(g.className),r&&a.push(`color_${r}`),d==="xs"&&a.push("size_xs"),d==="sm"&&a.push("size_sm"),d==="lg"&&a.push("size_lg"),d==="xl"&&a.push("size_xl"),h===1&&a.push("text_ellipsis"),h===2&&a.push("text_ellipsis-2"),h===3&&a.push("text_ellipsis-3"),a},[g.className,r,d,h]),Be=b||g.tag,Ke=We(y);function Ae(a){s==="link"&&!c&&a.preventDefault(),n==null||n(a)}return e.jsx(Be,{ref:I,className:Ie(Fe,v),href:s==="link"?c||"#":void 0,htmlFor:s==="label"?u:void 0,cite:s==="blockquote"?T:void 0,onClick:s==="link"?Ae:n,...Ke,children:H})}t.__docgenInfo={description:"",methods:[],displayName:"TypoText",props:{variant:{defaultValue:{value:"'text'",computed:!1},required:!1},size:{defaultValue:{value:"''",computed:!1},required:!1}}};const $e=new Set([1,2,3,4,5,"1","2","3","4","5"]),Ge=He("TypoTitle",{defaults:{level:1},selfClosing:!1});function l({level:s=1,color:r,label:m,children:i,className:c,...u}){const T=x.useRef(null),p=$e.has(s)?Number(s):1,b=i??m;Re(Ge,{level:p,color:r,label:m},qe({default:b}),T,{className:c,...u});const W=x.useMemo(()=>{const y=[`typo_title-${p}`];return r&&y.push(`color_${r}`),y},[p,r]),v=`h${p}`,n=We(u);return e.jsx(v,{ref:T,className:Ie(W,c),...n,children:b})}l.__docgenInfo={description:"",methods:[],displayName:"TypoTitle",props:{level:{defaultValue:{value:"1",computed:!1},required:!1}}};const Xe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ze=[{name:"level",type:"1 | 2 | 3 | 4 | 5",default:"1",description:"제목 레벨. h1~h5 태그와 typo_title-* 클래스"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스"},{name:"label",type:"string",default:"—",description:"제목 텍스트. default 슬롯으로 대체 가능"}],Je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"variant",type:"'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'",default:"text",description:"텍스트 스타일·시맨틱 태그 매핑"},{name:"tag",type:"string",default:"—",description:"루트 HTML 태그 수동 지정 (variant 기본 태그 대체)"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스"},{name:"size",type:"'xs' | 'sm' | 'lg' | 'xl'",default:"—",description:"공통 size_* 클래스"},{name:"ellipsis",type:"1 | 2 | 3",default:"—",description:"말줄임 줄 수. 미지정 시 말줄임 없음. 1~3은 text_ellipsis · text_ellipsis-2 · text_ellipsis-3"},{name:"href",type:"string",default:"—",description:'variant="link"일 때 href'},{name:"html-for",type:"string",default:"—",description:'variant="label"일 때 for 속성'},{name:"cite",type:"string",default:"—",description:'variant="blockquote"일 때 cite 속성'},{name:"label",type:"string",default:"—",description:"텍스트 내용. default 슬롯으로 대체 가능"}],Ye=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],et=[{name:"typo_title-1 ~ typo_title-5",description:"제목 스케일"},{name:"typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline",description:"본문·보조 텍스트"},{name:"typo_strong · typo_italic · typo_underline · typo_delete · typo_mark",description:"인라인 강조"},{name:"typo_sub · typo_sup · typo_small",description:"아래첨자 · 위첨자 · 보조 소문자 (sub · sup · small 태그)"},{name:"typo_link",description:"본문 안 인라인 링크"},{name:"typo_code · typo_kbd · typo_pre",description:"코드·키보드·코드 블록"},{name:"typo_blockquote",description:"인용 블록"},{name:"typo_list · typo_list-ordered",description:"본문 prose 목록 (ul · ol + li). UI 목록은 List 컴포넌트"},{name:"typo_stack · typo_stack-lg",description:"제목+본문 수직 간격"},{name:"text_ellipsis · text_ellipsis-2 · text_ellipsis-3",description:"말줄임"},{name:"size_xs · size_sm · size_lg · size_xl",description:"텍스트 크기"},{name:"color_*",description:"공통 색상 유틸"}],tt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],at=[{name:"--typo-title-*-size · weight · line-height",default:"—",description:"제목 레벨별 타이포"},{name:"--typo-text-size · --typo-text-line-height",default:"var(--text-size-base) · 1.6",description:"기본 본문"},{name:"--typo-paragraph-gap",default:"var(--space-md)",description:"단락 간격"},{name:"--typo-list-gap",default:"var(--space-xs)",description:"목록 항목 간격"},{name:"--typo-lead-size · --typo-caption-size · --typo-label-size",default:"—",description:"리드·캡션·라벨 크기"},{name:"--typo-mark-bg",default:"rgba(250, 219, 20, 0.35)",description:"형광펜 배경"},{name:"--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset",default:"0.75em · -0.25em · -0.5em",description:"아래·위첨자 크기·오프셋"},{name:"--typo-small-size",default:"var(--text-size-sm)",description:"small 태그 보조 텍스트 크기"},{name:"--typo-pre-padding · --typo-pre-radius",default:"var(--space-md) · var(--radius-md)",description:"코드 블록"}],lt=`<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>`,ot=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],st=[{name:"label",description:"제목 텍스트. children으로 대체 가능"},{name:"children",description:"제목 텍스트 (label prop 대체)"}],rt=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],it=[{name:"label",description:"텍스트 내용. children으로 대체 가능"},{name:"children",description:"텍스트 내용 (label prop 대체). 중첩 TypoText 등 복합 마크업·인라인 조합에 사용"}],pt=[{title:"API · TypoTitle Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case와 동일한 의미입니다.",tables:[{columns:Xe,rows:Ze,codeColumn:"name"}]},{title:"API · TypoText Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: html-for → htmlFor)와 동일한 의미입니다.",tables:[{columns:Je,rows:Qe,codeColumn:"name"}]},{title:"API · TypoTitle Children",description:"Vue default 슬롯에 대응하는 React label·children prop입니다.",tables:[{columns:ot,rows:st,codeColumn:"name"}]},{title:"API · TypoText Children",description:"Vue default 슬롯에 대응하는 React label·children prop입니다.",tables:[{columns:rt,rows:it,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ye,rows:et,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:tt,rows:at,codeColumn:"name"}]}],nt={level:1,color:"값",label:"라벨"},ut={title:"Components/기본 요소/Typography",id:"components-typography",component:l,subcomponents:{TypoText:t},tags:["autodocs"],argTypes:{level:{control:"select",options:["1","2","3","4","5"],type:{name:"enum",summary:"'1' | '2' | '3' | '4' | '5'"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},label:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:pt,docs:{description:{component:"제목, 본문, 강조, 말줄임 등 텍스트 표현을 위한 타이포그래피 컴포넌트입니다."}}}},f={parameters:{controls:{disable:!1}},args:{...nt},render:Ue(l)},k={name:"제목",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다."},source:{code:`import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function TitleExample() {
  return (
    <div className="typo_stack-lg">
      <TypoTitle level={1} label="h1. 제목 레벨 1" />
      <TypoTitle level={2} label="h2. 제목 레벨 2" />
      <TypoTitle level={3} label="h3. 제목 레벨 3" />
      <TypoTitle level={4} label="h4. 제목 레벨 4" />
      <TypoTitle level={5} label="h5. 제목 레벨 5" />
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{className:"typo_stack-lg",children:[e.jsx(l,{level:1,label:"h1. 제목 레벨 1"}),e.jsx(l,{level:2,label:"h2. 제목 레벨 2"}),e.jsx(l,{level:3,label:"h3. 제목 레벨 3"}),e.jsx(l,{level:4,label:"h4. 제목 레벨 4"}),e.jsx(l,{level:5,label:"h5. 제목 레벨 5"})]}))},_={name:"본문",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function TextExample() {
  return (
    <>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
      </p>
      <div>
        <TypoText
          variant="paragraph"
          label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다."
        />
        <TypoText
          variant="paragraph"
          label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다."
        />
      </div>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["기본 본문 텍스트입니다. 인라인으로"," ",e.jsx(t,{tag:"span",color:"muted",label:"보조 설명"}),"을 함께 쓸 수 있습니다."]}),e.jsxs("div",{children:[e.jsx(t,{variant:"paragraph",label:"typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다."}),e.jsx(t,{variant:"paragraph",label:"두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다."})]})]}))},j={name:"색상 타입",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function ColorExample() {
  return (
    <>
      <TypoText color="default" label="기본 텍스트 (Default)" />
      <TypoText color="muted" label="보조 텍스트 (Muted)" />
      <TypoText color="success" label="성공 메시지 (Success)" />
      <TypoText color="warning" label="주의 메시지 (Warning)" />
      <TypoText color="danger" label="오류 메시지 (Danger)" />
      <TypoText color="primary" label="강조 텍스트 (Primary)" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"default",label:"기본 텍스트 (Default)"}),e.jsx(t,{color:"muted",label:"보조 텍스트 (Muted)"}),e.jsx(t,{color:"success",label:"성공 메시지 (Success)"}),e.jsx(t,{color:"warning",label:"주의 메시지 (Warning)"}),e.jsx(t,{color:"danger",label:"오류 메시지 (Danger)"}),e.jsx(t,{color:"primary",label:"강조 텍스트 (Primary)"})]}))},S={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function SizeExample() {
  return (
    <>
      <TypoText size="xs" label="Extra Small — 0.75rem" />
      <TypoText size="sm" label="Small — 0.8125rem" />
      <TypoText label="Base — 0.875rem (기본)" />
      <TypoText size="lg" label="Large — 1rem" />
      <TypoText size="xl" label="Extra Large — 1.125rem" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"xs",label:"Extra Small — 0.75rem"}),e.jsx(t,{size:"sm",label:"Small — 0.8125rem"}),e.jsx(t,{label:"Base — 0.875rem (기본)"}),e.jsx(t,{size:"lg",label:"Large — 1rem"}),e.jsx(t,{size:"xl",label:"Extra Large — 1.125rem"})]}))},N={name:"텍스트 스타일",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 조합합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function StyleExample() {
  return (
    <>
      <p>
        <TypoText variant="strong" label="굵은 텍스트" />와{' '}
        <TypoText variant="italic" label="기울임 텍스트" />,{' '}
        <TypoText variant="underline" label="밑줄 텍스트" />,{' '}
        <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
      </p>
      <p>
        <TypoText variant="mark" label="형광펜 강조" />와{' '}
        <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <TypoText variant="strong" color="danger" label="중요 경고" />,{' '}
        <TypoText variant="italic" color="primary" label="강조 설명" />,{' '}
        <TypoText variant="delete" color="muted" label="삭제된 항목" />
      </p>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx(t,{variant:"strong",label:"굵은 텍스트"}),"와"," ",e.jsx(t,{variant:"italic",label:"기울임 텍스트"}),","," ",e.jsx(t,{variant:"underline",label:"밑줄 텍스트"}),","," ",e.jsx(t,{variant:"delete",label:"취소선 텍스트"}),"를 함께 사용할 수 있습니다."]}),e.jsxs("p",{children:[e.jsx(t,{variant:"mark",label:"형광펜 강조"}),"와"," ",e.jsx(t,{variant:"code",label:"inline code"})," 표현도 지원합니다."]}),e.jsxs("p",{className:"color_muted",children:["조합 예시: ",e.jsx(t,{variant:"strong",color:"danger",label:"중요 경고"}),","," ",e.jsx(t,{variant:"italic",color:"primary",label:"강조 설명"}),","," ",e.jsx(t,{variant:"delete",color:"muted",label:"삭제된 항목"})]})]}))},C={name:"아래첨자 · 위첨자 · 소문자",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function SubSupSmallExample() {
  return (
    <>
      <p>
        화학식 H<TypoText variant="sub" label="2" />O, 수식 x<TypoText variant="sup" label="2" /> + y
        <TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼 아래·위첨자를
        표현합니다.
      </p>
      <p>
        각주<TypoText variant="sup" label="1" />나 제곱미터 m<TypoText variant="sup" label="2" /> 단위에도
        활용합니다.
      </p>
      <p>
        <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
      </p>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["화학식 H",e.jsx(t,{variant:"sub",label:"2"}),"O, 수식 x",e.jsx(t,{variant:"sup",label:"2"})," + y",e.jsx(t,{variant:"sup",label:"2"})," = z",e.jsx(t,{variant:"sup",label:"2"}),"처럼 아래·위첨자를 표현합니다."]}),e.jsxs("p",{children:["각주",e.jsx(t,{variant:"sup",label:"1"}),"나 제곱미터 m",e.jsx(t,{variant:"sup",label:"2"})," 단위에도 활용합니다."]}),e.jsx("p",{children:e.jsx(t,{variant:"small",label:"※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다."})})]}))},w={name:"말줄임",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"text_ellipsis로 1줄, text_ellipsis-2·3으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function EllipsisExample() {
  return (
    <div style={{ maxWidth: '320px', width: '100%' }}>
      <TypoText
        ellipsis={1}
        label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet."
      />
      <TypoText
        ellipsis={2}
        label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다."
      />
      <TypoText
        ellipsis={3}
        label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요."
      />
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{style:{maxWidth:"320px",width:"100%"},children:[e.jsx(t,{ellipsis:1,label:"1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet."}),e.jsx(t,{ellipsis:2,label:"2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다."}),e.jsx(t,{ellipsis:3,label:"3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요."})]}))},P={name:"인용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"blockquote 태그에 typo_blockquote 클래스를 적용합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function BlockquoteExample() {
  return (
    <TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />
  );
}`,language:"tsx"}}},render:o(e.jsx(t,{variant:"blockquote",color:"muted",cite:"https://example.com",label:"좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."}))},z={name:"목록",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요."},source:{code:`export function ListExample() {
  return (
    <>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
      <p className="form_field-hint">
        용어 설명·구조화된 목록은{' '}
        <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
      </p>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"typo_list",children:[e.jsx("li",{children:"디자인 토큰 정의"}),e.jsx("li",{children:"컴포넌트 문서화"}),e.jsx("li",{children:"접근성 검토"})]}),e.jsxs("ol",{className:"typo_list-ordered",children:[e.jsx("li",{children:"요구사항 분석"}),e.jsx("li",{children:"와이어프레임 작성"}),e.jsx("li",{children:"프로토타입 검증"})]}),e.jsxs("p",{className:"form_field-hint",children:["용어 설명·구조화된 목록은 ",e.jsx("a",{href:"list.html#definition-heading",children:"List — 정의 목록"}),"을 참고하세요."]})]}))},E={name:"링크",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"본문 내 하이퍼링크에 typo_link 클래스를 사용합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function TypoLinkExample() {
  return (
    <TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.{' '}
      <TypoText tag="span" color="muted" label="또는" />{' '}
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>
  );
}`,language:"tsx"}}},render:o(e.jsxs(t,{variant:"paragraph",children:["자세한 내용은 ",e.jsx(t,{tag:"a",variant:"link",href:"#",label:"가이드 문서"}),"를 참고하세요."," ",e.jsx(t,{tag:"span",color:"muted",label:"또는"})," ",e.jsx(t,{tag:"a",variant:"link",href:"#",size:"sm",label:"작은 링크"}),"로 이동할 수 있습니다."]}))},L={name:"리드 · 캡션 · 레이블",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';
import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function LeadExample() {
  return (
    <div style={{ maxWidth: '32rem', width: '100%' }}>
      <div className="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle level={3} label="HTML Components" />
        <TypoText
          variant="lead"
          label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다."
        />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div>
        <TypoText variant="label" htmlFor="demo-email" label="이메일" />
        <TypoText
          variant="caption"
          style={{ marginTop: '0.25rem' }}
          label="가입 시 사용한 이메일 주소를 입력하세요."
        />
      </div>
    </div>
  );
}`,language:"tsx"}}},render:o(e.jsxs("div",{style:{maxWidth:"32rem",width:"100%"},children:[e.jsxs("div",{className:"typo_stack-lg",children:[e.jsx(t,{variant:"overline",label:"가이드 소개"}),e.jsx(l,{level:3,label:"HTML Components"}),e.jsx(t,{variant:"lead",label:"순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다."}),e.jsx(t,{variant:"caption",label:"마지막 업데이트: 2026-06-24"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"label",htmlFor:"demo-email",label:"이메일"}),e.jsx(t,{variant:"caption",style:{marginTop:"0.25rem"},label:"가입 시 사용한 이메일 주소를 입력하세요."})]})]}))},D={name:"제목 색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"제목에도 공통 color_* 클래스를 조합할 수 있습니다."},source:{code:`import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function TitleColorExample() {
  return (
    <>
      <TypoTitle level={3} color="primary" label="Primary 제목" />
      <TypoTitle level={3} color="success" label="Success 제목" />
      <TypoTitle level={3} color="danger" label="Danger 제목" />
      <TypoTitle level={3} color="muted" label="Muted 제목" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(l,{level:3,color:"primary",label:"Primary 제목"}),e.jsx(l,{level:3,color:"success",label:"Success 제목"}),e.jsx(l,{level:3,color:"danger",label:"Danger 제목"}),e.jsx(l,{level:3,color:"muted",label:"Muted 제목"})]}))},M={name:"키보드 · 코드 블록",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

const buttonMarkupExample = \`<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>\`;

export function KbdExample() {
  return (
    <>
      <p>
        저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요. 검색은{' '}
        <TypoText tag="kbd" variant="kbd" label="Ctrl" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="K" />입니다.
      </p>
      <TypoText variant="pre">
        <code>{buttonMarkupExample}</code>
      </TypoText>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["저장하려면 ",e.jsx(t,{tag:"kbd",variant:"kbd",label:"⌘"})," +"," ",e.jsx(t,{tag:"kbd",variant:"kbd",label:"S"}),"를 누르세요. 검색은"," ",e.jsx(t,{tag:"kbd",variant:"kbd",label:"Ctrl"})," +"," ",e.jsx(t,{tag:"kbd",variant:"kbd",label:"K"}),"입니다."]}),e.jsx(t,{variant:"pre",children:e.jsx("code",{children:lt})})]}))},R={name:"중첩 목록",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다."},source:{code:`export function NestedListExample() {
  return (
    <ul className="typo_list">
      <li>
        레이아웃
        <ul className="typo_list">
          <li>Container</li>
          <li>Grid</li>
        </ul>
      </li>
      <li>
        기본 요소
        <ul className="typo_list">
          <li>Button</li>
          <li>Typography</li>
        </ul>
      </li>
    </ul>
  );
}`,language:"tsx"}}},render:o(e.jsxs("ul",{className:"typo_list",children:[e.jsxs("li",{children:["레이아웃",e.jsxs("ul",{className:"typo_list",children:[e.jsx("li",{children:"Container"}),e.jsx("li",{children:"Grid"})]})]}),e.jsxs("li",{children:["기본 요소",e.jsxs("ul",{className:"typo_list",children:[e.jsx("li",{children:"Button"}),e.jsx("li",{children:"Typography"})]})]})]}))},q={name:"제목 + 본문 조합",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다."},source:{code:`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';
import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function StackExample() {
  return (
    <>
      <div className="typo_stack-lg" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={3} label="섹션 제목" />
        <TypoText
          variant="paragraph"
          label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다."
        />
        <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div className="typo_stack" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={4} label="작은 스택" />
        <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
      </div>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"typo_stack-lg",style:{maxWidth:"28rem"},children:[e.jsx(l,{level:3,label:"섹션 제목"}),e.jsx(t,{variant:"paragraph",label:"typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다."}),e.jsx(t,{tag:"p",color:"muted",size:"sm",label:"마지막 업데이트: 2026-06-24"})]}),e.jsxs("div",{className:"typo_stack",style:{maxWidth:"28rem"},children:[e.jsx(l,{level:4,label:"작은 스택"}),e.jsx(t,{tag:"p",color:"muted",label:"typo_stack은 좁은 간격으로 제목·설명을 묶습니다."})]})]}))};var B,K,A;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(TypoTitle)
}`,...(A=(K=f.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var U,V,O;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '제목',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다.'
      },
      source: {
        code: \`import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function TitleExample() {
  return (
    <div className="typo_stack-lg">
      <TypoTitle level={1} label="h1. 제목 레벨 1" />
      <TypoTitle level={2} label="h2. 제목 레벨 2" />
      <TypoTitle level={3} label="h3. 제목 레벨 3" />
      <TypoTitle level={4} label="h4. 제목 레벨 4" />
      <TypoTitle level={5} label="h5. 제목 레벨 5" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="typo_stack-lg">
      <TypoTitle level={1} label="h1. 제목 레벨 1" />
      <TypoTitle level={2} label="h2. 제목 레벨 2" />
      <TypoTitle level={3} label="h3. 제목 레벨 3" />
      <TypoTitle level={4} label="h4. 제목 레벨 4" />
      <TypoTitle level={5} label="h5. 제목 레벨 5" />
    </div>)
}`,...(O=(V=k.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var $,G,X;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '본문',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function TextExample() {
  return (
    <>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
      </p>
      <div>
        <TypoText
          variant="paragraph"
          label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다."
        />
        <TypoText
          variant="paragraph"
          label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다."
        />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
      </p>
      <div>
        <TypoText variant="paragraph" label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다." />
        <TypoText variant="paragraph" label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다." />
      </div>
    </>)
}`,...(X=(G=_.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,J,Q;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '색상 타입',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function ColorExample() {
  return (
    <>
      <TypoText color="default" label="기본 텍스트 (Default)" />
      <TypoText color="muted" label="보조 텍스트 (Muted)" />
      <TypoText color="success" label="성공 메시지 (Success)" />
      <TypoText color="warning" label="주의 메시지 (Warning)" />
      <TypoText color="danger" label="오류 메시지 (Danger)" />
      <TypoText color="primary" label="강조 텍스트 (Primary)" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <TypoText color="default" label="기본 텍스트 (Default)" />
      <TypoText color="muted" label="보조 텍스트 (Muted)" />
      <TypoText color="success" label="성공 메시지 (Success)" />
      <TypoText color="warning" label="주의 메시지 (Warning)" />
      <TypoText color="danger" label="오류 메시지 (Danger)" />
      <TypoText color="primary" label="강조 텍스트 (Primary)" />
    </>)
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,ee,te;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        story: 'base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function SizeExample() {
  return (
    <>
      <TypoText size="xs" label="Extra Small — 0.75rem" />
      <TypoText size="sm" label="Small — 0.8125rem" />
      <TypoText label="Base — 0.875rem (기본)" />
      <TypoText size="lg" label="Large — 1rem" />
      <TypoText size="xl" label="Extra Large — 1.125rem" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <TypoText size="xs" label="Extra Small — 0.75rem" />
      <TypoText size="sm" label="Small — 0.8125rem" />
      <TypoText label="Base — 0.875rem (기본)" />
      <TypoText size="lg" label="Large — 1rem" />
      <TypoText size="xl" label="Extra Large — 1.125rem" />
    </>)
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,oe;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: '텍스트 스타일',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 조합합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function StyleExample() {
  return (
    <>
      <p>
        <TypoText variant="strong" label="굵은 텍스트" />와{' '}
        <TypoText variant="italic" label="기울임 텍스트" />,{' '}
        <TypoText variant="underline" label="밑줄 텍스트" />,{' '}
        <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
      </p>
      <p>
        <TypoText variant="mark" label="형광펜 강조" />와{' '}
        <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <TypoText variant="strong" color="danger" label="중요 경고" />,{' '}
        <TypoText variant="italic" color="primary" label="강조 설명" />,{' '}
        <TypoText variant="delete" color="muted" label="삭제된 항목" />
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
        <TypoText variant="strong" label="굵은 텍스트" />와{' '}
        <TypoText variant="italic" label="기울임 텍스트" />,{' '}
        <TypoText variant="underline" label="밑줄 텍스트" />,{' '}
        <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
      </p>
      <p>
        <TypoText variant="mark" label="형광펜 강조" />와{' '}
        <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <TypoText variant="strong" color="danger" label="중요 경고" />,{' '}
        <TypoText variant="italic" color="primary" label="강조 설명" />,{' '}
        <TypoText variant="delete" color="muted" label="삭제된 항목" />
      </p>
    </>)
}`,...(oe=(le=N.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var se,re,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '아래첨자 · 위첨자 · 소문자',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function SubSupSmallExample() {
  return (
    <>
      <p>
        화학식 H<TypoText variant="sub" label="2" />O, 수식 x<TypoText variant="sup" label="2" /> + y
        <TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼 아래·위첨자를
        표현합니다.
      </p>
      <p>
        각주<TypoText variant="sup" label="1" />나 제곱미터 m<TypoText variant="sup" label="2" /> 단위에도
        활용합니다.
      </p>
      <p>
        <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
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
        화학식 H<TypoText variant="sub" label="2" />O, 수식 x<TypoText variant="sup" label="2" /> + y
        <TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼 아래·위첨자를
        표현합니다.
      </p>
      <p>
        각주<TypoText variant="sup" label="1" />나 제곱미터 m<TypoText variant="sup" label="2" /> 단위에도
        활용합니다.
      </p>
      <p>
        <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
      </p>
    </>)
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var pe,ne,ce;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '말줄임',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'text_ellipsis로 1줄, text_ellipsis-2·3으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function EllipsisExample() {
  return (
    <div style={{ maxWidth: '320px', width: '100%' }}>
      <TypoText
        ellipsis={1}
        label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet."
      />
      <TypoText
        ellipsis={2}
        label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다."
      />
      <TypoText
        ellipsis={3}
        label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요."
      />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div style={{
    maxWidth: '320px',
    width: '100%'
  }}>
      <TypoText ellipsis={1} label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet." />
      <TypoText ellipsis={2} label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다." />
      <TypoText ellipsis={3} label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요." />
    </div>)
}`,...(ce=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,me,ue;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '인용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'blockquote 태그에 typo_blockquote 클래스를 적용합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function BlockquoteExample() {
  return (
    <TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<TypoText variant="blockquote" color="muted" cite="https://example.com" label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요." />)
}`,...(ue=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var Te,ye,xe;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '목록',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요.'
      },
      source: {
        code: \`export function ListExample() {
  return (
    <>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
      <p className="form_field-hint">
        용어 설명·구조화된 목록은{' '}
        <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
      <p className="form_field-hint">
        용어 설명·구조화된 목록은 <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
      </p>
    </>)
}`,...(xe=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var be,ve,ge;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '링크',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '본문 내 하이퍼링크에 typo_link 클래스를 사용합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function TypoLinkExample() {
  return (
    <TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.{' '}
      <TypoText tag="span" color="muted" label="또는" />{' '}
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.{' '}
      <TypoText tag="span" color="muted" label="또는" />{' '}
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>)
}`,...(ge=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,fe,ke;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: '리드 · 캡션 · 레이블',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';
import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function LeadExample() {
  return (
    <div style={{ maxWidth: '32rem', width: '100%' }}>
      <div className="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle level={3} label="HTML Components" />
        <TypoText
          variant="lead"
          label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다."
        />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div>
        <TypoText variant="label" htmlFor="demo-email" label="이메일" />
        <TypoText
          variant="caption"
          style={{ marginTop: '0.25rem' }}
          label="가입 시 사용한 이메일 주소를 입력하세요."
        />
      </div>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div style={{
    maxWidth: '32rem',
    width: '100%'
  }}>
      <div className="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle level={3} label="HTML Components" />
        <TypoText variant="lead" label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다." />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div>
        <TypoText variant="label" htmlFor="demo-email" label="이메일" />
        <TypoText variant="caption" style={{
        marginTop: '0.25rem'
      }} label="가입 시 사용한 이메일 주소를 입력하세요." />
      </div>
    </div>)
}`,...(ke=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var _e,je,Se;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: '제목 색상',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '제목에도 공통 color_* 클래스를 조합할 수 있습니다.'
      },
      source: {
        code: \`import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function TitleColorExample() {
  return (
    <>
      <TypoTitle level={3} color="primary" label="Primary 제목" />
      <TypoTitle level={3} color="success" label="Success 제목" />
      <TypoTitle level={3} color="danger" label="Danger 제목" />
      <TypoTitle level={3} color="muted" label="Muted 제목" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <TypoTitle level={3} color="primary" label="Primary 제목" />
      <TypoTitle level={3} color="success" label="Success 제목" />
      <TypoTitle level={3} color="danger" label="Danger 제목" />
      <TypoTitle level={3} color="muted" label="Muted 제목" />
    </>)
}`,...(Se=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Ne,Ce,we;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: '키보드 · 코드 블록',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

const buttonMarkupExample = \\\`<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>\\\`;

export function KbdExample() {
  return (
    <>
      <p>
        저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요. 검색은{' '}
        <TypoText tag="kbd" variant="kbd" label="Ctrl" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="K" />입니다.
      </p>
      <TypoText variant="pre">
        <code>{buttonMarkupExample}</code>
      </TypoText>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <p>
        저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요. 검색은{' '}
        <TypoText tag="kbd" variant="kbd" label="Ctrl" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="K" />입니다.
      </p>
      <TypoText variant="pre">
        <code>{buttonMarkupExample}</code>
      </TypoText>
    </>)
}`,...(we=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Pe,ze,Ee;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: '중첩 목록',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다.'
      },
      source: {
        code: \`export function NestedListExample() {
  return (
    <ul className="typo_list">
      <li>
        레이아웃
        <ul className="typo_list">
          <li>Container</li>
          <li>Grid</li>
        </ul>
      </li>
      <li>
        기본 요소
        <ul className="typo_list">
          <li>Button</li>
          <li>Typography</li>
        </ul>
      </li>
    </ul>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<ul className="typo_list">
      <li>
        레이아웃
        <ul className="typo_list">
          <li>Container</li>
          <li>Grid</li>
        </ul>
      </li>
      <li>
        기본 요소
        <ul className="typo_list">
          <li>Button</li>
          <li>Typography</li>
        </ul>
      </li>
    </ul>)
}`,...(Ee=(ze=R.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var Le,De,Me;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: '제목 + 본문 조합',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다.'
      },
      source: {
        code: \`import TypoText from '@uxkm/ui-react/components/TypoText.jsx';
import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function StackExample() {
  return (
    <>
      <div className="typo_stack-lg" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={3} label="섹션 제목" />
        <TypoText
          variant="paragraph"
          label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다."
        />
        <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div className="typo_stack" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={4} label="작은 스택" />
        <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="typo_stack-lg" style={{
      maxWidth: '28rem'
    }}>
        <TypoTitle level={3} label="섹션 제목" />
        <TypoText variant="paragraph" label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다." />
        <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div className="typo_stack" style={{
      maxWidth: '28rem'
    }}>
        <TypoTitle level={4} label="작은 스택" />
        <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
      </div>
    </>)
}`,...(Me=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};const Tt=["Playground","Title","Text","Color","Size","Style","SubSupSmall","Ellipsis","Blockquote","List","TypoLink","Lead","TitleColor","Kbd","NestedList","Stack"];export{P as Blockquote,j as Color,w as Ellipsis,M as Kbd,L as Lead,z as List,R as NestedList,f as Playground,S as Size,q as Stack,N as Style,C as SubSupSmall,_ as Text,k as Title,D as TitleColor,E as TypoLink,Tt as __namedExportsOrder,ut as default};
