import{r as m,u as Je,c as Ke,n as et,j as e,a as Z,Q as tt,T as at}from"./iframe-ifEc15ad.js";import{A as v}from"./Avatar-DMEKGziK.js";import{w as l}from"./story-renders-Hdz_JUlO.js";import{a as rt}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const st=m.createContext({tag:"ul",variant:"default"}),lt={default:"ul",bullet:"ul",ordered:"ol",definition:"dl"},ot={bullet:"list_bullet",ordered:"list_ordered",definition:"list_definition"},nt=new Set(["md","compact"]),ct=new Set(["default","bullet","ordered","definition"]),dt=new Set(["ul","ol","dl","div"]),mt=new Set(["block","inline"]),pt=new Set(["left","right"]);function s({bordered:i,split:o,block:p,size:k="md",variant:y="default",tag:u,layout:h="block",inlineLabelWidth:L,inlineGap:x,descAlign:_="left",children:A,className:f,style:n,role:c,...g}){const D=m.useRef(null),C=nt.has(k)?k:"md",d=ct.has(y)?y:"default",j=u!=null&&dt.has(u)?u:lt[d]??"ul",b=mt.has(h)?h:"block",S=pt.has(_)?_:"left",w=m.useMemo(()=>{const a=["list"],P=ot[d];return P&&a.push(P),i&&a.push("list_bordered"),o&&a.push("list_divider"),p&&a.push("list_block"),C==="compact"&&a.push("list_compact"),b==="inline"&&a.push("list_inline"),d==="definition"&&S==="right"&&a.push("list_desc-right"),a},[d,i,o,p,C,b,S]);function $(a,P,se){return tt("List",a,P,{...se,class:Z(w,se.class)},{defaults:{size:"md",variant:"default",layout:"block",descAlign:"left"},booleanProps:new Set(["bordered","split","block"]),selfClosing:!1})}Je($,{bordered:i,split:o,block:p,size:C,variant:d,tag:u,layout:b,inlineLabelWidth:L,inlineGap:x,descAlign:S},Ke({default:A}),D,{className:f,style:n,role:c,...g});const N=m.useMemo(()=>{const a={};return b==="inline"&&(L&&(a["--list-inline-label-width"]=L),x&&(a["--list-inline-gap"]=x)),n&&typeof n=="object"&&!Array.isArray(n)&&Object.assign(a,n),Object.keys(a).length?a:void 0},[b,L,x,n]),I=c!==void 0?c:j==="div"?"list":void 0,J=m.useMemo(()=>({tag:j,variant:d}),[j,d]),{class:te,...K}=g,ee=et(K),B=j;return e.jsx(st.Provider,{value:J,children:e.jsx(B,{ref:D,className:Z(w,f),style:N,role:I,...ee,children:A})})}s.__docgenInfo={description:"",methods:[],displayName:"List",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},layout:{defaultValue:{value:"'block'",computed:!1},required:!1},descAlign:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const ut=new Set(["auto","li","dt","dd"]);function t({title:i,description:o,meta:p,tag:k="auto",prefix:y,extra:u,actions:h,children:L,className:x,role:_,...A}){const f=m.useRef(null),n=m.useContext(st)??{tag:"ul"},c=ut.has(k)?k:"auto",g=c==="auto"&&n.tag==="dl"&&!!(i&&o),D=m.useMemo(()=>{if(g)return null;if(c!=="auto")return c;if(n.tag==="dl"){if(i&&!o)return"dt";if(o&&!i)return"dd"}return n.tag==="div"?"div":"li"},[g,c,n.tag,i,o]),C=_!==void 0?_:n.tag==="div"?"listitem":void 0;function d(N,I,J){var B;const te=at(I),K=!!((B=I.prefix)!=null&&B.call(I)),ee=N.tag==="auto"&&n.tag==="dl"&&N.title&&N.description;return tt("ListItem",N,I,J,{labelProp:"title",defaults:{tag:"auto"},selfClosing:ee||!K&&!te})}Je(d,{title:i,description:o,meta:p,tag:c},Ke({default:L,prefix:y,extra:u,actions:h}),f,{className:x,role:_,...A});const j=!!(i||o||p||L),{class:b,...S}=A,w=et(S);if(g)return e.jsxs(m.Fragment,{children:[e.jsx("dt",{ref:f,className:Z("list_title",x),...w,children:i}),e.jsx("dd",{className:"list_desc","data-demo-fragment-part":!0,children:o})]});const $=D||"li";return e.jsxs($,{ref:f,className:Z("list_item",x),role:C,...w,children:[y,j?e.jsx("div",{className:"list_content",children:L??e.jsxs(e.Fragment,{children:[i?e.jsx("span",{className:"list_title",children:i}):null,p?e.jsx("span",{className:"list_meta",children:p}):null,o?e.jsx("span",{className:"list_desc",children:o}):null]})}):null,u?e.jsx("span",{className:"list_extra",children:u}):null,h?e.jsx("span",{className:"list_action",children:h}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{tag:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};const it=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Lt=[{name:"bordered",type:"boolean",default:"false",description:"테두리 (list_bordered)"},{name:"split",type:"boolean",default:"false",description:"항목 구분선 (list_divider)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% (list_block, inline 레이아웃에서 auto 너비 덮어씀)"},{name:"size",type:"'md' | 'compact'",default:"md",description:"compact는 list_compact"},{name:"variant",type:"'default' | 'bullet' | 'ordered' | 'definition'",default:"default",description:"목록 유형 — bullet · ordered · definition 스킨 클래스 자동 적용"},{name:"tag",type:"'ul' | 'ol' | 'dl' | 'div'",default:"variant 기준",description:'루트 태그 — 미지정 시 variant에 따라 ul · ol · dl 결정, div는 role="list"'},{name:"layout",type:"'block' | 'inline'",default:"block",description:"block은 전체 너비 세로 배치, inline은 너비 auto + 제목·내용 가로 배치 (list_inline)"},{name:"inlineLabelWidth",type:"string",default:"—",description:'인라인 정의 목록 dt 열 너비 (layout="inline"일 때, --list-inline-label-width)'},{name:"inlineGap",type:"string",default:"—",description:'인라인 정의 목록 dt · dd 열 간격 (layout="inline"일 때, --list-inline-gap)'},{name:"descAlign",type:"'left' | 'right'",default:"left",description:'정의 목록 dd 텍스트 정렬 (variant="definition"일 때, right는 list_desc-right)'}],xt=it,It=[{name:"title",type:"string",default:"—",description:"항목 제목 (list_title)"},{name:"description",type:"string",default:"—",description:"설명 (list_desc)"},{name:"meta",type:"string",default:"—",description:"보조 메타 (list_meta)"},{name:"tag",type:"'auto' | 'li' | 'dt' | 'dd'",default:"auto",description:"항목 태그 — auto는 ul/ol→li, div→div+role=listitem, dl+title·description→dt·dd"}],ie=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ht=[{name:"default",description:"ListItem 자식"}],_t=[{name:"prefix",description:"앞쪽 아바타·아이콘 등"},{name:"default",description:"본문 (title·description 대체)"},{name:"extra",description:"우측 보조 텍스트 (list_extra)"},{name:"actions",description:"우측 액션 (list_action)"}],ft=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],gt=[{name:"list",description:"리스트 루트"},{name:"list_bordered · list_divider · list_compact",description:"스타일 변형"},{name:"list_bullet · list_bullet-circle · list_bullet-square",description:"불릿 목록 (ul)"},{name:"list_ordered · list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman",description:"번호 목록 (ol) — 소문자·대문자 알파벳·로마 숫자"},{name:"list_ordered-outline · list_ordered-dash",description:"계층 번호 — 뎁스별 1.1 · 1-1 형식 (중첩 ol에 동일 클래스 적용)"},{name:"list_ordered-depth",description:"뎁스별 번호 형식 자동 전환 (1 → a → i → 1 …)"},{name:"list_definition",description:"정의 목록 (dl) — dt · dd 용어-설명 쌍"},{name:"list_inline",description:'인라인 배치 — width auto, 제목·내용 가로 (layout="inline")'},{name:"list_block",description:"부모 너비 100% (block prop)"},{name:"list_desc-right",description:'정의 목록 dd 우측 정렬 (descAlign="right")'},{name:"list_item",description:"항목 (li · div[role=listitem])"},{name:"list_content · list_title · list_desc · list_meta",description:"항목 콘텐츠 파트"},{name:"list_extra · list_action",description:"우측 영역"},{name:"list_interactive",description:"클릭 가능 항목"},{name:"list_link",description:"항목 링크·버튼 — data-ripple 로 파장"},...rt],jt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],bt=[{name:"--list-gap",default:"var(--space-xs)",description:"항목 간격"},{name:"--list-item-padding-y · --list-item-padding-x",default:"0.65rem · 1rem",description:"항목 패딩"},{name:"--list-title-size · --list-desc-size · --list-meta-size",default:"—",description:"텍스트 크기"},{name:"--list-inline-label-width · --list-inline-gap",default:"8rem · var(--space-md)",description:"인라인 정의 목록 열 너비 · 열 간격"}],Nt=e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("path",{d:"M21 15l-5-5L5 21"})]}),vt=[{title:"API · List Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 inline-label-width · desc-align은 inlineLabelWidth · descAlign로 다룹니다.",tables:[{columns:it,rows:Lt,codeColumn:"name"}]},{title:"API · ListItem Props",tables:[{columns:xt,rows:It,codeColumn:"name"}]},{title:"API · List Children / Slots",description:"Vue default 슬롯은 React children에 대응합니다.",tables:[{columns:ie,rows:ht,codeColumn:"name"}]},{title:"API · ListItem Children / Slots",description:"Vue prefix · extra · actions · default 슬롯은 React prefix · extra · actions · children에 대응합니다.",tables:[{columns:ie,rows:_t,codeColumn:"name"}]},{title:"클래스 · 속성",description:"List · ListItem이 렌더하는 OOCSS 클래스입니다. className으로 스킨 클래스를 조합합니다.",tables:[{columns:ft,rows:gt,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:jt,rows:bt,codeColumn:"name"}]}],r={bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",descAlign:"left"},wt={title:"Components/데이터 표시/List",id:"components-list",component:s,subcomponents:{ListItem:t},tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},split:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["md","compact"],type:{name:"enum",summary:"'md' | 'compact'"}},variant:{control:"select",options:["default","bullet","ordered","definition"],type:{name:"enum",summary:"'default' | 'bullet' | 'ordered' | 'definition'"}},tag:{control:"select",options:["ul","ol","dl","div"],type:{name:"enum",summary:"'ul' | 'ol' | 'dl' | 'div'"}},layout:{control:"select",options:["block","inline"],type:{name:"enum",summary:"'block' | 'inline'"}},inlineLabelWidth:{control:"text",type:{name:"string",summary:"string"}},inlineGap:{control:"text",type:{name:"string",summary:"string"}},descAlign:{control:"select",options:["left","right"],type:{name:"enum",summary:"'left' | 'right'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:vt,docs:{description:{component:"목록·정의 목록·네비게이션 리스트를 구성하는 컴포넌트입니다."}}}},O={parameters:{controls:{disable:!1}},args:{...r},render:i=>e.jsxs(s,{...i,children:[e.jsx(t,{title:"항목 1",description:"설명"}),e.jsx(t,{title:"항목 2",description:"설명"})]})},R={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"list_title · list_meta · list_desc로 항목 내용을 구성합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BasicExample() {
  return (
    <List>
      <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
      <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
      <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{children:[e.jsx(t,{title:"홍길동",meta:"프론트엔드 개발자",prefix:e.jsx(v,{color:"primary",initials:"홍",ariaHidden:!0})}),e.jsx(t,{title:"김철수",meta:"백엔드 개발자",prefix:e.jsx(v,{color:"success",initials:"김",ariaHidden:!0})}),e.jsx(t,{title:"이영희",meta:"UI/UX 디자이너",prefix:e.jsx(v,{color:"warning",initials:"이",ariaHidden:!0})})]}))},E={name:"불릿",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"className에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletExample() {
  return (
    <List className="list_bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{className:"list_bullet",children:[e.jsx(t,{children:"디자인 토큰 정의"}),e.jsx(t,{children:"컴포넌트 문서화"}),e.jsx(t,{children:"접근성 검토"})]}))},T={name:"불릿 · 본문",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"title · description prop으로 제목·설명을 함께 표시합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletRichExample() {
  return (
    <List className="list_bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{className:"list_bullet",children:[e.jsx(t,{title:"HTML 마크업",description:"시맨틱 태그와 ARIA 속성을 사용합니다."}),e.jsx(t,{title:"SCSS 스타일",description:"OOCSS 패턴으로 구조와 스킨을 분리합니다."}),e.jsx(t,{title:"접근성",description:"WCAG 2.2 AA 기준을 준수합니다."})]}))},H={name:"불릿 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"circle · square 마커와 중첩 목록을 지원합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletVariantExample() {
  return (
    <>
      <List className="list_bullet list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List className="list_bullet list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(s,{className:"list_bullet list_bullet-circle",children:[e.jsx(t,{children:"원형 마커 항목 A"}),e.jsx(t,{children:"원형 마커 항목 B"})]}),e.jsxs(s,{className:"list_bullet list_bullet-square",children:[e.jsx(t,{children:"사각 마커 항목 A"}),e.jsx(t,{children:"사각 마커 항목 B"})]}),e.jsxs(s,{className:"list_bullet",children:[e.jsxs(t,{children:["레이아웃",e.jsxs(s,{className:"list_bullet",children:[e.jsx(t,{children:"Container"}),e.jsx(t,{children:"Grid"})]})]}),e.jsxs(t,{children:["기본 요소",e.jsxs(s,{className:"list_bullet",children:[e.jsx(t,{children:"Button"}),e.jsx(t,{children:"Typography"})]})]})]})]}))},V={name:"번호",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'tag="ol"과 list_ordered 클래스로 순서 목록을 만듭니다.'},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function OrderedExample() {
  return (
    <List tag="ol" className="list_ordered">
      <ListItem>요구사항 분석</ListItem>
      <ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{tag:"ol",className:"list_ordered",children:[e.jsx(t,{children:"요구사항 분석"}),e.jsx(t,{children:"와이어프레임 작성"}),e.jsx(t,{children:"프로토타입 검증"}),e.jsx(t,{children:"개발 및 배포"})]}))},G={name:"번호 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function OrderedVariantExample() {
  return (
    <List tag="ol" className="list_ordered list_ordered-alpha">
      <ListItem>첫 번째 옵션</ListItem>
      <ListItem>두 번째 옵션</ListItem>
      <ListItem>세 번째 옵션</ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-alpha",children:[e.jsx(t,{children:"첫 번째 옵션"}),e.jsx(t,{children:"두 번째 옵션"}),e.jsx(t,{children:"세 번째 옵션"})]}),e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-roman",children:[e.jsx(t,{children:"서론"}),e.jsx(t,{children:"본론"}),e.jsx(t,{children:"결론"})]}),e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-upper-alpha",children:[e.jsx(t,{children:"항목 A"}),e.jsx(t,{children:"항목 B"})]}),e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-upper-roman",children:[e.jsx(t,{children:"Chapter I"}),e.jsx(t,{children:"Chapter II"})]}),e.jsxs(s,{tag:"ol",className:"list_ordered",children:[e.jsx(t,{title:"프로젝트 설정",description:"저장소 클론 및 의존성 설치"}),e.jsx(t,{title:"개발 서버 실행",description:"pnpm dev로 로컬 미리보기",children:e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-alpha",children:[e.jsx(t,{children:"터미널에서 프로젝트 폴더 이동"}),e.jsx(t,{children:"pnpm install 실행"}),e.jsx(t,{children:"pnpm dev 실행"})]})}),e.jsx(t,{title:"빌드",description:"pnpm build로 html/ 출력"})]})]}))},W={name:"번호 · 계층",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function OrderedHierarchicalExample() {
  return (
    <List tag="ol" className="list_ordered list_ordered-outline">
      <ListItem>1단계 — 요구사항 정의</ListItem>
      <ListItem>
        설계
        <List tag="ol" className="list_ordered list_ordered-outline">
          <ListItem>정보 구조</ListItem>
          <ListItem>UI 설계</ListItem>
        </List>
      </ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-outline",children:[e.jsx(t,{children:"1단계 — 요구사항 정의"}),e.jsxs(t,{children:["설계",e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-outline",children:[e.jsx(t,{children:"정보 구조"}),e.jsxs(t,{children:["UI 설계",e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-outline",children:[e.jsx(t,{children:"와이어프레임"}),e.jsx(t,{children:"프로토타입"})]})]})]})]}),e.jsx(t,{children:"개발 및 배포"})]}),e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-dash",children:[e.jsx(t,{children:"1단계 — 환경 구성"}),e.jsxs(t,{children:["개발",e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-dash",children:[e.jsx(t,{children:"컴포넌트 구현"}),e.jsxs(t,{children:["문서화",e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-dash",children:[e.jsx(t,{children:"API 표"}),e.jsx(t,{children:"데모 예제"})]})]})]})]}),e.jsx(t,{children:"QA 및 릴리스"})]}),e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-depth",children:[e.jsx(t,{children:"레이아웃"}),e.jsxs(t,{children:["기본 요소",e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-depth",children:[e.jsx(t,{children:"Button"}),e.jsxs(t,{children:["Form",e.jsxs(s,{tag:"ol",className:"list_ordered list_ordered-depth",children:[e.jsx(t,{children:"Input"}),e.jsx(t,{children:"Select"})]})]})]})]}),e.jsx(t,{children:"피드백"})]})]}))},z={name:"불릿 · 링크",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"불릿 목록에서도 li 안에 a.list_link를 사용합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletLinkExample() {
  return (
    <List className="list_bullet">
      <ListItem>
        <a href="components/button.html" className="list_link" data-ripple="">
          <span className="list_title">Button</span>
        </a>
      </ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{className:"list_bullet",children:[e.jsx(t,{children:e.jsx("a",{href:"components/button.html",className:"list_link","data-ripple":"",children:e.jsx("span",{className:"list_title",children:"Button"})})}),e.jsx(t,{children:e.jsx("a",{href:"components/typography.html",className:"list_link","data-ripple":"",children:e.jsx("span",{className:"list_title",children:"Typography"})})}),e.jsx(t,{children:e.jsx("a",{href:"components/icon.html",className:"list_link","data-ripple":"",children:e.jsx("span",{className:"list_title",children:"Icon"})})})]}))},U={name:"테두리",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered prop으로 각 항목에 테두리를 적용합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BorderedExample() {
  return (
    <List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{bordered:!0,children:[e.jsx(t,{title:"알림 설정",description:"이메일 및 푸시 알림을 관리합니다."}),e.jsx(t,{title:"프로필 편집",description:"이름, 사진, 소개를 변경합니다."}),e.jsx(t,{title:"보안",description:"비밀번호 및 2단계 인증을 설정합니다."})]}))},q={name:"링크",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function LinkExample() {
  return (
    <List split>
      <ListItem>
        <a href="components/button.html" className="list_link" data-ripple="">
          <div className="list_content">
            <span className="list_title">대시보드</span>
          </div>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </a>
      </ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{split:!0,children:[e.jsx(t,{children:e.jsxs("a",{href:"components/button.html",className:"list_link","data-ripple":"",children:[e.jsx("div",{className:"list_content",children:e.jsx("span",{className:"list_title",children:"대시보드"})}),e.jsx("span",{className:"list_action color_muted","aria-hidden":"true",children:"›"})]})}),e.jsx(t,{children:e.jsxs("a",{href:"components/card.html",className:"list_link","data-ripple":"",children:[e.jsx("div",{className:"list_content",children:e.jsx("span",{className:"list_title",children:"프로젝트"})}),e.jsx("span",{className:"list_action color_muted","aria-hidden":"true",children:"›"})]})}),e.jsx(t,{children:e.jsxs("a",{href:"getting-started.html",className:"list_link","data-ripple":"",children:[e.jsx("div",{className:"list_content",children:e.jsx("span",{className:"list_title",children:"설정"})}),e.jsx("span",{className:"list_action color_muted","aria-hidden":"true",children:"›"})]})})]}))},M={name:"버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function ButtonExample() {
  return (
    <List bordered>
      <ListItem>
        <button type="button" className="list_link" data-ripple="">
          <Avatar color="primary" initials="홍" ariaHidden />
          <span className="list_content">
            <span className="list_title">홍길동</span>
            <span className="list_meta">메시지 보내기</span>
          </span>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </button>
      </ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{bordered:!0,children:[e.jsx(t,{children:e.jsxs("button",{type:"button",className:"list_link","data-ripple":"",children:[e.jsx(v,{color:"primary",initials:"홍",ariaHidden:!0}),e.jsxs("span",{className:"list_content",children:[e.jsx("span",{className:"list_title",children:"홍길동"}),e.jsx("span",{className:"list_meta",children:"메시지 보내기"})]}),e.jsx("span",{className:"list_action color_muted","aria-hidden":"true",children:"›"})]})}),e.jsx(t,{children:e.jsxs("button",{type:"button",className:"list_link","data-ripple":"",children:[e.jsx(v,{color:"success",initials:"김",ariaHidden:!0}),e.jsxs("span",{className:"list_content",children:[e.jsx("span",{className:"list_title",children:"김철수"}),e.jsx("span",{className:"list_meta",children:"메시지 보내기"})]}),e.jsx("span",{className:"list_action color_muted","aria-hidden":"true",children:"›"})]})})]}))},F={name:"카드 혼합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"list_cards 클래스로 li 안에 card를 배치합니다."},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function CardExample() {
  return (
    <List className="list_cards">
      <ListItem>
        <a href="components/card.html" className="card card_shadow card_clickable card_horizontal">
          ...
        </a>
      </ListItem>
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{className:"list_cards",children:[e.jsx(t,{children:e.jsxs("a",{href:"components/card.html",className:"card card_shadow card_clickable card_horizontal",children:[e.jsx("div",{className:"card_media card_media-placeholder",role:"img","aria-label":"프로젝트 썸네일",children:Nt}),e.jsxs("div",{className:"card_inner",children:[e.jsx("div",{className:"card_header",children:e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",children:"프로젝트 Alpha"}),e.jsx("p",{className:"card_subtitle",children:"진행 중 · 2일 전"})]})}),e.jsx("div",{className:"card_body",children:"디자인 시스템 구축 및 컴포넌트 라이브러리 개발"})]})]})}),e.jsx(t,{children:e.jsxs("article",{className:"card card_shadow",children:[e.jsx("div",{className:"card_header",children:e.jsx("div",{className:"card_header-main",children:e.jsxs("div",{className:"card_header-row",children:[e.jsx(v,{color:"warning",initials:"이",ariaHidden:!0}),e.jsxs("div",{children:[e.jsx("h3",{className:"card_title",children:"이영희"}),e.jsx("p",{className:"card_subtitle",children:"UI/UX 디자이너"})]})]})})}),e.jsx("div",{className:"card_body",children:e.jsx("p",{className:"list_desc",children:"새 디자인 시안을 공유했습니다."})}),e.jsxs("div",{className:"card_footer card_footer-between",children:[e.jsx("span",{className:"color_muted size_sm",children:"10분 전"}),e.jsx("a",{href:"#",className:"link color_primary size_sm",onClick:i=>i.preventDefault(),children:"보기"})]})]})}),e.jsx(t,{children:e.jsx("a",{href:"components/list.html",className:"card card_accent color_primary card_clickable",children:e.jsxs("div",{className:"card_body",children:[e.jsx("p",{className:"card_title",style:{marginBottom:"0.25rem"},children:"알림"}),e.jsx("p",{className:"list_desc",children:"리스트와 카드를 함께 사용하는 패턴입니다."})]})})})]}))},X={name:"정의 목록",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'variant="definition"으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다.'},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function DefinitionExample() {
  return (
    <List variant="definition" style={{ maxWidth: '28rem', width: '100%' }}>
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{variant:"definition",style:{maxWidth:"28rem",width:"100%"},children:[e.jsx(t,{title:"OOCSS",description:"구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다."}),e.jsx(t,{title:"Design Token",description:"색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다."}),e.jsx(t,{title:"WCAG",description:"웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다."})]}))},Q={name:"정의 목록 · 인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'layout="inline"으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다.'},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function DefinitionInlineExample() {
  return (
    <List
      variant="definition"
      layout="inline"
      inlineLabelWidth="auto"
      inlineGap="var(--space-md)"
    >
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{variant:"definition",layout:"inline",inlineLabelWidth:"auto",inlineGap:"var(--space-md)",children:[e.jsx(t,{title:"OOCSS",description:"구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다."}),e.jsx(t,{title:"Design Token",description:"색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다."}),e.jsx(t,{title:"WCAG",description:"웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다."})]}))},Y={name:"정의 목록 · 값 우측 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'descAlign="right"로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다.'},source:{code:`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function DefinitionDescAlignExample() {
  return (
    <List
      variant="definition"
      layout="inline"
      block
      size="compact"
      descAlign="right"
      inlineLabelWidth="auto"
      inlineGap="1rem"
    >
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
    </List>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(s,{variant:"definition",layout:"inline",block:!0,size:"compact",descAlign:"right",inlineLabelWidth:"auto",inlineGap:"1rem",children:[e.jsx(t,{title:"주문번호",description:"ORD-2024-0815"}),e.jsx(t,{title:"결제금액",description:"₩42,000"}),e.jsx(t,{title:"배송지",description:"서울특별시 강남구 테헤란로 123"})]}))};var ae,re,le;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <List {...args}>
      <ListItem title="항목 1" description="설명" />
      <ListItem title="항목 2" description="설명" />
    </List>
}`,...(le=(re=O.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,ne,ce;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        story: 'list_title · list_meta · list_desc로 항목 내용을 구성합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BasicExample() {
  return (
    <List>
      <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
      <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
      <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List>
      <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
      <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
      <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
    </List>)
}`,...(ce=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,me,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '불릿',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'className에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletExample() {
  return (
    <List className="list_bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List className="list_bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>)
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,Le,xe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: '불릿 · 본문',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'title · description prop으로 제목·설명을 함께 표시합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletRichExample() {
  return (
    <List className="list_bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List className="list_bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>)
}`,...(xe=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:xe.source}}};var Ie,he,_e;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '불릿 변형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'circle · square 마커와 중첩 목록을 지원합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletVariantExample() {
  return (
    <>
      <List className="list_bullet list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List className="list_bullet list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<>
      <List className="list_bullet list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List className="list_bullet list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
      <List className="list_bullet">
        <ListItem>
          레이아웃
          <List className="list_bullet">
            <ListItem>Container</ListItem>
            <ListItem>Grid</ListItem>
          </List>
        </ListItem>
        <ListItem>
          기본 요소
          <List className="list_bullet">
            <ListItem>Button</ListItem>
            <ListItem>Typography</ListItem>
          </List>
        </ListItem>
      </List>
    </>)
}`,...(_e=(he=H.parameters)==null?void 0:he.docs)==null?void 0:_e.source}}};var fe,ge,je;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: '번호',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tag="ol"과 list_ordered 클래스로 순서 목록을 만듭니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function OrderedExample() {
  return (
    <List tag="ol" className="list_ordered">
      <ListItem>요구사항 분석</ListItem>
      <ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List tag="ol" className="list_ordered">
      <ListItem>요구사항 분석</ListItem>
      <ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>)
}`,...(je=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:je.source}}};var be,Ne,ve;G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '번호 변형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function OrderedVariantExample() {
  return (
    <List tag="ol" className="list_ordered list_ordered-alpha">
      <ListItem>첫 번째 옵션</ListItem>
      <ListItem>두 번째 옵션</ListItem>
      <ListItem>세 번째 옵션</ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<>
      <List tag="ol" className="list_ordered list_ordered-alpha">
        <ListItem>첫 번째 옵션</ListItem>
        <ListItem>두 번째 옵션</ListItem>
        <ListItem>세 번째 옵션</ListItem>
      </List>
      <List tag="ol" className="list_ordered list_ordered-roman">
        <ListItem>서론</ListItem>
        <ListItem>본론</ListItem>
        <ListItem>결론</ListItem>
      </List>
      <List tag="ol" className="list_ordered list_ordered-upper-alpha">
        <ListItem>항목 A</ListItem>
        <ListItem>항목 B</ListItem>
      </List>
      <List tag="ol" className="list_ordered list_ordered-upper-roman">
        <ListItem>Chapter I</ListItem>
        <ListItem>Chapter II</ListItem>
      </List>
      <List tag="ol" className="list_ordered">
        <ListItem title="프로젝트 설정" description="저장소 클론 및 의존성 설치" />
        <ListItem title="개발 서버 실행" description="pnpm dev로 로컬 미리보기">
          <List tag="ol" className="list_ordered list_ordered-alpha">
            <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>
            <ListItem>pnpm install 실행</ListItem>
            <ListItem>pnpm dev 실행</ListItem>
          </List>
        </ListItem>
        <ListItem title="빌드" description="pnpm build로 html/ 출력" />
      </List>
    </>)
}`,...(ve=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:ve.source}}};var ke,ye,Ae;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: '번호 · 계층',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function OrderedHierarchicalExample() {
  return (
    <List tag="ol" className="list_ordered list_ordered-outline">
      <ListItem>1단계 — 요구사항 정의</ListItem>
      <ListItem>
        설계
        <List tag="ol" className="list_ordered list_ordered-outline">
          <ListItem>정보 구조</ListItem>
          <ListItem>UI 설계</ListItem>
        </List>
      </ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<>
      <List tag="ol" className="list_ordered list_ordered-outline">
        <ListItem>1단계 — 요구사항 정의</ListItem>
        <ListItem>
          설계
          <List tag="ol" className="list_ordered list_ordered-outline">
            <ListItem>정보 구조</ListItem>
            <ListItem>
              UI 설계
              <List tag="ol" className="list_ordered list_ordered-outline">
                <ListItem>와이어프레임</ListItem>
                <ListItem>프로토타입</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
      <List tag="ol" className="list_ordered list_ordered-dash">
        <ListItem>1단계 — 환경 구성</ListItem>
        <ListItem>
          개발
          <List tag="ol" className="list_ordered list_ordered-dash">
            <ListItem>컴포넌트 구현</ListItem>
            <ListItem>
              문서화
              <List tag="ol" className="list_ordered list_ordered-dash">
                <ListItem>API 표</ListItem>
                <ListItem>데모 예제</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>QA 및 릴리스</ListItem>
      </List>
      <List tag="ol" className="list_ordered list_ordered-depth">
        <ListItem>레이아웃</ListItem>
        <ListItem>
          기본 요소
          <List tag="ol" className="list_ordered list_ordered-depth">
            <ListItem>Button</ListItem>
            <ListItem>
              Form
              <List tag="ol" className="list_ordered list_ordered-depth">
                <ListItem>Input</ListItem>
                <ListItem>Select</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>피드백</ListItem>
      </List>
    </>)
}`,...(Ae=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};var Ce,Se,we;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: '불릿 · 링크',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '불릿 목록에서도 li 안에 a.list_link를 사용합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BulletLinkExample() {
  return (
    <List className="list_bullet">
      <ListItem>
        <a href="components/button.html" className="list_link" data-ripple="">
          <span className="list_title">Button</span>
        </a>
      </ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List className="list_bullet">
      <ListItem>
        <a href="components/button.html" className="list_link" data-ripple="">
          <span className="list_title">Button</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="components/typography.html" className="list_link" data-ripple="">
          <span className="list_title">Typography</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="components/icon.html" className="list_link" data-ripple="">
          <span className="list_title">Icon</span>
        </a>
      </ListItem>
    </List>)
}`,...(we=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var De,Be,Pe;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: '테두리',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'bordered prop으로 각 항목에 테두리를 적용합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function BorderedExample() {
  return (
    <List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>)
}`,...(Pe=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Oe,Re,Ee;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: '링크',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function LinkExample() {
  return (
    <List split>
      <ListItem>
        <a href="components/button.html" className="list_link" data-ripple="">
          <div className="list_content">
            <span className="list_title">대시보드</span>
          </div>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </a>
      </ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List split>
      <ListItem>
        <a href="components/button.html" className="list_link" data-ripple="">
          <div className="list_content">
            <span className="list_title">대시보드</span>
          </div>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </a>
      </ListItem>
      <ListItem>
        <a href="components/card.html" className="list_link" data-ripple="">
          <div className="list_content">
            <span className="list_title">프로젝트</span>
          </div>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </a>
      </ListItem>
      <ListItem>
        <a href="getting-started.html" className="list_link" data-ripple="">
          <div className="list_content">
            <span className="list_title">설정</span>
          </div>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </a>
      </ListItem>
    </List>)
}`,...(Ee=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Te,He,Ve;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '버튼',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function ButtonExample() {
  return (
    <List bordered>
      <ListItem>
        <button type="button" className="list_link" data-ripple="">
          <Avatar color="primary" initials="홍" ariaHidden />
          <span className="list_content">
            <span className="list_title">홍길동</span>
            <span className="list_meta">메시지 보내기</span>
          </span>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </button>
      </ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List bordered>
      <ListItem>
        <button type="button" className="list_link" data-ripple="">
          <Avatar color="primary" initials="홍" ariaHidden />
          <span className="list_content">
            <span className="list_title">홍길동</span>
            <span className="list_meta">메시지 보내기</span>
          </span>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </button>
      </ListItem>
      <ListItem>
        <button type="button" className="list_link" data-ripple="">
          <Avatar color="success" initials="김" ariaHidden />
          <span className="list_content">
            <span className="list_title">김철수</span>
            <span className="list_meta">메시지 보내기</span>
          </span>
          <span className="list_action color_muted" aria-hidden="true">
            ›
          </span>
        </button>
      </ListItem>
    </List>)
}`,...(Ve=(He=M.parameters)==null?void 0:He.docs)==null?void 0:Ve.source}}};var Ge,We,ze;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: '카드 혼합',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'list_cards 클래스로 li 안에 card를 배치합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function CardExample() {
  return (
    <List className="list_cards">
      <ListItem>
        <a href="components/card.html" className="card card_shadow card_clickable card_horizontal">
          ...
        </a>
      </ListItem>
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List className="list_cards">
      <ListItem>
        <a href="components/card.html" className="card card_shadow card_clickable card_horizontal">
          <div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
            {MediaIcon}
          </div>
          <div className="card_inner">
            <div className="card_header">
              <div className="card_header-main">
                <h3 className="card_title">프로젝트 Alpha</h3>
                <p className="card_subtitle">진행 중 · 2일 전</p>
              </div>
            </div>
            <div className="card_body">디자인 시스템 구축 및 컴포넌트 라이브러리 개발</div>
          </div>
        </a>
      </ListItem>
      <ListItem>
        <article className="card card_shadow">
          <div className="card_header">
            <div className="card_header-main">
              <div className="card_header-row">
                <Avatar color="warning" initials="이" ariaHidden />
                <div>
                  <h3 className="card_title">이영희</h3>
                  <p className="card_subtitle">UI/UX 디자이너</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card_body">
            <p className="list_desc">새 디자인 시안을 공유했습니다.</p>
          </div>
          <div className="card_footer card_footer-between">
            <span className="color_muted size_sm">10분 전</span>
            <a href="#" className="link color_primary size_sm" onClick={e => e.preventDefault()}>
              보기
            </a>
          </div>
        </article>
      </ListItem>
      <ListItem>
        <a href="components/list.html" className="card card_accent color_primary card_clickable">
          <div className="card_body">
            <p className="card_title" style={{
            marginBottom: '0.25rem'
          }}>
              알림
            </p>
            <p className="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
          </div>
        </a>
      </ListItem>
    </List>)
}`,...(ze=(We=F.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ue,qe,Me;X.parameters={...X.parameters,docs:{...(Ue=X.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: '정의 목록',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'variant="definition"으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function DefinitionExample() {
  return (
    <List variant="definition" style={{ maxWidth: '28rem', width: '100%' }}>
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List variant="definition" style={{
    maxWidth: '28rem',
    width: '100%'
  }}>
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>)
}`,...(Me=(qe=X.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Fe,Xe,Qe;Q.parameters={...Q.parameters,docs:{...(Fe=Q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: '정의 목록 · 인라인',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'layout="inline"으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function DefinitionInlineExample() {
  return (
    <List
      variant="definition"
      layout="inline"
      inlineLabelWidth="auto"
      inlineGap="var(--space-md)"
    >
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List variant="definition" layout="inline" inlineLabelWidth="auto" inlineGap="var(--space-md)">
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>)
}`,...(Qe=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Ye,Ze,$e;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: '정의 목록 · 값 우측 정렬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'descAlign="right"로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다.'
      },
      source: {
        code: \`import List from '@uxkm/ui-react/components/List.jsx';
import ListItem from '@uxkm/ui-react/components/ListItem.jsx';

export function DefinitionDescAlignExample() {
  return (
    <List
      variant="definition"
      layout="inline"
      block
      size="compact"
      descAlign="right"
      inlineLabelWidth="auto"
      inlineGap="1rem"
    >
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
    </List>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<List variant="definition" layout="inline" block size="compact" descAlign="right" inlineLabelWidth="auto" inlineGap="1rem">
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
    </List>)
}`,...($e=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};const Dt=["Playground","Basic","Bullet","BulletRich","BulletVariant","Ordered","OrderedVariant","OrderedHierarchical","BulletLink","Bordered","Link","Button","Card","Definition","DefinitionInline","DefinitionDescAlign"];export{R as Basic,U as Bordered,E as Bullet,z as BulletLink,T as BulletRich,H as BulletVariant,M as Button,F as Card,X as Definition,Y as DefinitionDescAlign,Q as DefinitionInline,q as Link,V as Ordered,W as OrderedHierarchical,G as OrderedVariant,O as Playground,Dt as __namedExportsOrder,wt as default};
