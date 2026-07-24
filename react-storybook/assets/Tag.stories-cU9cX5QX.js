import{j as e}from"./iframe-ifEc15ad.js";import{T as a}from"./Tag-BEM9gEAf.js";import{T as o}from"./TagGroup-DBAM_37Q.js";import{w as l}from"./story-renders-Hdz_JUlO.js";import{d as oe,a as se}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const te=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ce=[{name:"color",type:"string",default:"primary",description:"공통 color_* 클래스"},{name:"variant",type:"'filled' | 'solid' | 'outline' | 'borderless'",default:"filled",description:"태그 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tag_sm · tag_lg"},{name:"round",type:"boolean",default:"false",description:"pill 형태 (tag_round)"},{name:"checkable",type:"boolean",default:"false",description:"토글 버튼 (tag_checkable)"},{name:"add",type:"boolean",default:"false",description:"추가 버튼 (tag_add)"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼 표시"},{name:"selected",type:"boolean",default:"false",description:"선택 상태 (is-selected)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"label",type:"string",default:"—",description:"태그 텍스트. default 슬롯으로 대체 가능"},{name:"href",type:"string",default:"—",description:"링크 태그일 때 href (a 태그)"},{name:"close-label",type:"string",default:"—",description:"닫기 버튼 aria-label"},oe],ne=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ie=[{name:"tight",type:"boolean",default:"false",description:"좁은 간격 (tag_group-tight)"},{name:"aria-label",type:"string",default:"—",description:"그룹 접근성 라벨"}],de=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ue=[{name:"default",description:"태그 텍스트 (label prop 대체)"},{name:"icon",description:"텍스트 앞 아이콘 (tag_icon)"}],ge=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],me=[{name:"default",description:"Tag 자식 목록"}],pe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],be=[{name:"tag",description:"태그 루트"},{name:"tag_solid · tag_outline · tag_borderless",description:"스킨 변형"},{name:"tag_sm · tag_lg · tag_round",description:"크기·형태"},{name:"tag_checkable · tag_add",description:"인터랙션 변형"},{name:"tag_icon · tag_close",description:"내부 파트"},{name:"tag_group · tag_group-tight",description:"태그 묶음"},{name:"is-selected · is-disabled",description:"상태 클래스"},{name:"color_*",description:"공통 색상 유틸"},...se],Te=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fe=[{name:"--tag-font-size · --tag-padding-y · --tag-padding-x",default:"—",description:"기본 태그 타이포·패딩"},{name:"--tag-gap",default:"var(--space-xs)",description:"아이콘·텍스트 간격"},{name:"--tag-close-size",default:"0.875rem",description:"닫기 버튼 크기"},{name:"--tag-add-border-style",default:"dashed",description:"추가 태그 테두리"}],xe=e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),e.jsx("circle",{cx:"7",cy:"7",r:"1",fill:"currentColor",stroke:"none"})]}),ye=e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"M22 4L12 14.01l-3-3"})]}),ve=e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),he=e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),je=e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"})}),ke=e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),Se=e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("path",{d:"M15 3h6v6"}),e.jsx("path",{d:"M10 14L21 3"})]}),Ge=[{title:"API · Tag Props",description:"React에서는 camelCase prop을 사용합니다. Vue close 이벤트는 onClose, close-label은 closeLabel로 다룹니다.",tables:[{columns:te,rows:ce,codeColumn:"name"}]},{title:"API · TagGroup Props",tables:[{columns:ne,rows:ie,codeColumn:"name"}]},{title:"API · Tag Children / Slots",description:"Vue icon · default 슬롯은 React icon prop · children에 대응합니다.",tables:[{columns:de,rows:ue,codeColumn:"name"}]},{title:"API · TagGroup Children / Slots",tables:[{columns:ge,rows:me,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:pe,rows:be,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Te,rows:fe,codeColumn:"name"}]}],r={color:"primary",variant:"filled",size:"md",round:!1,checkable:!1,add:!1,closable:!1,selected:!1,disabled:!1,label:"라벨",href:"#",closeLabel:"라벨"},Pe={title:"Components/데이터 표시/Tag",id:"components-tag",component:a,subcomponents:{TagGroup:o},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},variant:{control:"select",options:["filled","solid","outline","borderless"],type:{name:"enum",summary:"'filled' | 'solid' | 'outline' | 'borderless'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},checkable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},add:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},selected:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},href:{control:"text",type:{name:"string",summary:"string"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ge,docs:{description:{component:"상태·카테고리·필터에 쓰는 태그 컴포넌트입니다."}}}},s={parameters:{controls:{disable:!1}},args:{...r},render:le=>e.jsx(a,{...le})},t={name:"기본 (Filled)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function BasicExample() {
  return (
    <>
      <Tag color="default" label="Default" />
      <Tag color="primary" label="Primary" />
      <Tag color="success" label="Success" />
      <Tag color="warning" label="Warning" />
      <Tag color="danger" label="Danger" />
      <Tag color="info" label="Info" />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"default",label:"Default"}),e.jsx(a,{color:"primary",label:"Primary"}),e.jsx(a,{color:"success",label:"Success"}),e.jsx(a,{color:"warning",label:"Warning"}),e.jsx(a,{color:"danger",label:"Danger"}),e.jsx(a,{color:"info",label:"Info"})]}))},c={name:"솔리드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function SolidExample() {
  return (
    <>
      <Tag variant="solid" color="default" label="Default" />
      <Tag variant="solid" color="primary" label="Primary" />
      <Tag variant="solid" color="success" label="Success" />
      <Tag variant="solid" color="warning" label="Warning" />
      <Tag variant="solid" color="danger" label="Danger" />
      <Tag variant="solid" color="info" label="Info" />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"solid",color:"default",label:"Default"}),e.jsx(a,{variant:"solid",color:"primary",label:"Primary"}),e.jsx(a,{variant:"solid",color:"success",label:"Success"}),e.jsx(a,{variant:"solid",color:"warning",label:"Warning"}),e.jsx(a,{variant:"solid",color:"danger",label:"Danger"}),e.jsx(a,{variant:"solid",color:"info",label:"Info"})]}))},n={name:"아웃라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tag_outline으로 배경 없이 테두리만 표시합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function OutlineExample() {
  return (
    <>
      <Tag variant="outline" color="default" label="Default" />
      <Tag variant="outline" color="primary" label="Primary" />
      <Tag variant="outline" color="success" label="Success" />
      <Tag variant="outline" color="warning" label="Warning" />
      <Tag variant="outline" color="danger" label="Danger" />
      <Tag variant="outline" color="info" label="Info" />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",color:"default",label:"Default"}),e.jsx(a,{variant:"outline",color:"primary",label:"Primary"}),e.jsx(a,{variant:"outline",color:"success",label:"Success"}),e.jsx(a,{variant:"outline",color:"warning",label:"Warning"}),e.jsx(a,{variant:"outline",color:"danger",label:"Danger"}),e.jsx(a,{variant:"outline",color:"info",label:"Info"})]}))},i={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function SizeExample() {
  return (
    <>
      <TagGroup tight>
        <Tag size="sm" color="primary" label="Small" />
        <Tag color="primary" label="Medium" />
        <Tag size="lg" color="primary" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="outline" color="success" label="Small" />
        <Tag variant="outline" color="success" label="Medium" />
        <Tag size="lg" variant="outline" color="success" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="solid" color="danger" label="Small" />
        <Tag variant="solid" color="danger" label="Medium" />
        <Tag size="lg" variant="solid" color="danger" label="Large" />
      </TagGroup>
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(o,{tight:!0,children:[e.jsx(a,{size:"sm",color:"primary",label:"Small"}),e.jsx(a,{color:"primary",label:"Medium"}),e.jsx(a,{size:"lg",color:"primary",label:"Large"})]}),e.jsxs(o,{tight:!0,children:[e.jsx(a,{size:"sm",variant:"outline",color:"success",label:"Small"}),e.jsx(a,{variant:"outline",color:"success",label:"Medium"}),e.jsx(a,{size:"lg",variant:"outline",color:"success",label:"Large"})]}),e.jsxs(o,{tight:!0,children:[e.jsx(a,{size:"sm",variant:"solid",color:"danger",label:"Small"}),e.jsx(a,{variant:"solid",color:"danger",label:"Medium"}),e.jsx(a,{size:"lg",variant:"solid",color:"danger",label:"Large"})]})]}))},d={name:"둥근",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tag_round로 pill 형태의 모서리를 적용합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function RoundExample() {
  return (
    <>
      <Tag round color="primary" label="Filled" />
      <Tag round variant="outline" color="primary" label="Outline" />
      <Tag round variant="solid" color="primary" label="Solid" />
      <Tag round variant="borderless" color="default" label="Borderless" />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{round:!0,color:"primary",label:"Filled"}),e.jsx(a,{round:!0,variant:"outline",color:"primary",label:"Outline"}),e.jsx(a,{round:!0,variant:"solid",color:"primary",label:"Solid"}),e.jsx(a,{round:!0,variant:"borderless",color:"default",label:"Borderless"})]}))},u={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function IconExample() {
  return (
    <>
      <Tag color="primary" label="Design" icon={DesignIcon} />
      <Tag variant="outline" color="success" label="Verified" icon={VerifiedIcon} />
      <Tag variant="solid" color="danger" label="Error" icon={ErrorIcon} />
      <Tag size="sm" round color="default" label="User" icon={UserIcon} />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"primary",label:"Design",icon:xe}),e.jsx(a,{variant:"outline",color:"success",label:"Verified",icon:ye}),e.jsx(a,{variant:"solid",color:"danger",label:"Error",icon:ve}),e.jsx(a,{size:"sm",round:!0,color:"default",label:"User",icon:he})]}))},g={name:"닫기 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function CloseExample() {
  return (
    <>
      <TagGroup tight>
        <Tag closable color="primary" label="React" closeLabel="React 태그 제거" />
        <Tag closable variant="outline" color="default" label="Svelte" closeLabel="Svelte 태그 제거" />
        <Tag closable variant="solid" color="danger" label="Deprecated" closeLabel="Deprecated 태그 제거" />
      </TagGroup>
      <TagGroup tight>
        <Tag
          closable
          round
          color="success"
          label="Frontend"
          closeLabel="Frontend 태그 제거"
          icon={TagIcon}
        />
      </TagGroup>
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(o,{tight:!0,children:[e.jsx(a,{closable:!0,color:"primary",label:"React",closeLabel:"React 태그 제거"}),e.jsx(a,{closable:!0,variant:"outline",color:"default",label:"Svelte",closeLabel:"Svelte 태그 제거"}),e.jsx(a,{closable:!0,variant:"solid",color:"danger",label:"Deprecated",closeLabel:"Deprecated 태그 제거"})]}),e.jsx(o,{tight:!0,children:e.jsx(a,{closable:!0,round:!0,color:"success",label:"Frontend",closeLabel:"Frontend 태그 제거",icon:je})})]}))},m={name:"선택 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function CheckableExample() {
  return (
    <>
      <TagGroup ariaLabel="카테고리 필터">
        <Tag checkable selected color="default" label="전체" />
        <Tag checkable color="default" label="UI" />
        <Tag checkable color="default" label="UX" />
        <Tag checkable color="default" label="개발" />
      </TagGroup>
      <TagGroup ariaLabel="상태 필터">
        <Tag checkable round selected color="primary" label="진행 중" />
        <Tag checkable round selected color="success" label="완료" />
        <Tag checkable round color="warning" label="보류" />
        <Tag checkable round color="danger" label="취소" />
      </TagGroup>
      <TagGroup tight>
        <Tag checkable size="sm" selected color="default" label="S" />
        <Tag checkable size="sm" color="default" label="M" />
        <Tag checkable size="sm" color="default" label="L" />
        <Tag checkable size="sm" color="default" label="XL" />
      </TagGroup>
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(o,{ariaLabel:"카테고리 필터",children:[e.jsx(a,{checkable:!0,selected:!0,color:"default",label:"전체"}),e.jsx(a,{checkable:!0,color:"default",label:"UI"}),e.jsx(a,{checkable:!0,color:"default",label:"UX"}),e.jsx(a,{checkable:!0,color:"default",label:"개발"})]}),e.jsxs(o,{ariaLabel:"상태 필터",children:[e.jsx(a,{checkable:!0,round:!0,selected:!0,color:"primary",label:"진행 중"}),e.jsx(a,{checkable:!0,round:!0,selected:!0,color:"success",label:"완료"}),e.jsx(a,{checkable:!0,round:!0,color:"warning",label:"보류"}),e.jsx(a,{checkable:!0,round:!0,color:"danger",label:"취소"})]}),e.jsxs(o,{tight:!0,children:[e.jsx(a,{checkable:!0,size:"sm",selected:!0,color:"default",label:"S"}),e.jsx(a,{checkable:!0,size:"sm",color:"default",label:"M"}),e.jsx(a,{checkable:!0,size:"sm",color:"default",label:"L"}),e.jsx(a,{checkable:!0,size:"sm",color:"default",label:"XL"})]})]}))},p={name:"추가",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function AddExample() {
  return (
    <>
      <Tag add round label="태그 추가" icon={PlusIcon} />
      <Tag add size="sm" label="+ New Tag" />
      <Tag add size="lg" round label="+ 카테고리 추가" />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{add:!0,round:!0,label:"태그 추가",icon:ke}),e.jsx(a,{add:!0,size:"sm",label:"+ New Tag"}),e.jsx(a,{add:!0,size:"lg",round:!0,label:"+ 카테고리 추가"})]}))},b={name:"링크",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function LinkExample() {
  return (
    <>
      <Tag href="#" color="primary" label="문서 보기" />
      <Tag href="#" variant="outline" color="primary" label="가이드" />
      <Tag href="#" variant="solid" color="primary" label="바로가기" />
      <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={ExternalIcon} />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{href:"#",color:"primary",label:"문서 보기"}),e.jsx(a,{href:"#",variant:"outline",color:"primary",label:"가이드"}),e.jsx(a,{href:"#",variant:"solid",color:"primary",label:"바로가기"}),e.jsx(a,{href:"#",round:!0,variant:"outline",color:"success",label:"외부 링크",icon:Se})]}))},T={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function DisabledExample() {
  return (
    <>
      <Tag disabled color="primary" label="Filled" />
      <Tag disabled variant="outline" color="success" label="Outline" />
      <Tag disabled variant="solid" color="danger" label="Solid" />
      <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
      <Tag add disabled label="태그 추가 (비활성)" />
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{disabled:!0,color:"primary",label:"Filled"}),e.jsx(a,{disabled:!0,variant:"outline",color:"success",label:"Outline"}),e.jsx(a,{disabled:!0,variant:"solid",color:"danger",label:"Solid"}),e.jsx(a,{checkable:!0,selected:!0,disabled:!0,color:"default",label:"선택됨 (비활성)"}),e.jsx(a,{add:!0,disabled:!0,label:"태그 추가 (비활성)"})]}))},f={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function GroupExample() {
  return (
    <>
      <TagGroup>
        <Tag color="primary" label="HTML" />
        <Tag color="primary" label="CSS" />
        <Tag color="primary" label="JavaScript" />
        <Tag color="default" label="TypeScript" />
        <Tag color="success" label="SCSS" />
      </TagGroup>
      <div>
        <p className="color_muted size_sm" style={{ marginBottom: '0.5rem' }}>
          선택된 기술 스택
        </p>
        <TagGroup tight>
          <Tag closable round color="primary" label="React" closeLabel="React 태그 제거" />
          <Tag closable round color="primary" label="Next.js" closeLabel="Next.js 태그 제거" />
          <Tag add round size="sm" label="+ 추가" />
        </TagGroup>
      </div>
    </>
  );
}`,language:"tsx"}}},args:{...r},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(a,{color:"primary",label:"HTML"}),e.jsx(a,{color:"primary",label:"CSS"}),e.jsx(a,{color:"primary",label:"JavaScript"}),e.jsx(a,{color:"default",label:"TypeScript"}),e.jsx(a,{color:"success",label:"SCSS"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"color_muted size_sm",style:{marginBottom:"0.5rem"},children:"선택된 기술 스택"}),e.jsxs(o,{tight:!0,children:[e.jsx(a,{closable:!0,round:!0,color:"primary",label:"React",closeLabel:"React 태그 제거"}),e.jsx(a,{closable:!0,round:!0,color:"primary",label:"Next.js",closeLabel:"Next.js 태그 제거"}),e.jsx(a,{add:!0,round:!0,size:"sm",label:"+ 추가"})]})]})]}))};var x,y,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Tag {...args} />
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,j,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본 (Filled)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function BasicExample() {
  return (
    <>
      <Tag color="default" label="Default" />
      <Tag color="primary" label="Primary" />
      <Tag color="success" label="Success" />
      <Tag color="warning" label="Warning" />
      <Tag color="danger" label="Danger" />
      <Tag color="info" label="Info" />
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
      <Tag color="default" label="Default" />
      <Tag color="primary" label="Primary" />
      <Tag color="success" label="Success" />
      <Tag color="warning" label="Warning" />
      <Tag color="danger" label="Danger" />
      <Tag color="info" label="Info" />
    </>)
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,G,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '솔리드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function SolidExample() {
  return (
    <>
      <Tag variant="solid" color="default" label="Default" />
      <Tag variant="solid" color="primary" label="Primary" />
      <Tag variant="solid" color="success" label="Success" />
      <Tag variant="solid" color="warning" label="Warning" />
      <Tag variant="solid" color="danger" label="Danger" />
      <Tag variant="solid" color="info" label="Info" />
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
      <Tag variant="solid" color="default" label="Default" />
      <Tag variant="solid" color="primary" label="Primary" />
      <Tag variant="solid" color="success" label="Success" />
      <Tag variant="solid" color="warning" label="Warning" />
      <Tag variant="solid" color="danger" label="Danger" />
      <Tag variant="solid" color="info" label="Info" />
    </>)
}`,...(w=(G=c.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var z,L,C;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '아웃라인',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tag_outline으로 배경 없이 테두리만 표시합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function OutlineExample() {
  return (
    <>
      <Tag variant="outline" color="default" label="Default" />
      <Tag variant="outline" color="primary" label="Primary" />
      <Tag variant="outline" color="success" label="Success" />
      <Tag variant="outline" color="warning" label="Warning" />
      <Tag variant="outline" color="danger" label="Danger" />
      <Tag variant="outline" color="info" label="Info" />
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
      <Tag variant="outline" color="default" label="Default" />
      <Tag variant="outline" color="primary" label="Primary" />
      <Tag variant="outline" color="success" label="Success" />
      <Tag variant="outline" color="warning" label="Warning" />
      <Tag variant="outline" color="danger" label="Danger" />
      <Tag variant="outline" color="info" label="Info" />
    </>)
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var D,_,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        story: 'tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function SizeExample() {
  return (
    <>
      <TagGroup tight>
        <Tag size="sm" color="primary" label="Small" />
        <Tag color="primary" label="Medium" />
        <Tag size="lg" color="primary" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="outline" color="success" label="Small" />
        <Tag variant="outline" color="success" label="Medium" />
        <Tag size="lg" variant="outline" color="success" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="solid" color="danger" label="Small" />
        <Tag variant="solid" color="danger" label="Medium" />
        <Tag size="lg" variant="solid" color="danger" label="Large" />
      </TagGroup>
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
      <TagGroup tight>
        <Tag size="sm" color="primary" label="Small" />
        <Tag color="primary" label="Medium" />
        <Tag size="lg" color="primary" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="outline" color="success" label="Small" />
        <Tag variant="outline" color="success" label="Medium" />
        <Tag size="lg" variant="outline" color="success" label="Large" />
      </TagGroup>
      <TagGroup tight>
        <Tag size="sm" variant="solid" color="danger" label="Small" />
        <Tag variant="solid" color="danger" label="Medium" />
        <Tag size="lg" variant="solid" color="danger" label="Large" />
      </TagGroup>
    </>)
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var I,E,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: 'tag_round로 pill 형태의 모서리를 적용합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function RoundExample() {
  return (
    <>
      <Tag round color="primary" label="Filled" />
      <Tag round variant="outline" color="primary" label="Outline" />
      <Tag round variant="solid" color="primary" label="Solid" />
      <Tag round variant="borderless" color="default" label="Borderless" />
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
      <Tag round color="primary" label="Filled" />
      <Tag round variant="outline" color="primary" label="Outline" />
      <Tag round variant="solid" color="primary" label="Solid" />
      <Tag round variant="borderless" color="default" label="Borderless" />
    </>)
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var F,M,A;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function IconExample() {
  return (
    <>
      <Tag color="primary" label="Design" icon={DesignIcon} />
      <Tag variant="outline" color="success" label="Verified" icon={VerifiedIcon} />
      <Tag variant="solid" color="danger" label="Error" icon={ErrorIcon} />
      <Tag size="sm" round color="default" label="User" icon={UserIcon} />
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
      <Tag color="primary" label="Design" icon={DesignIcon} />
      <Tag variant="outline" color="success" label="Verified" icon={VerifiedIcon} />
      <Tag variant="solid" color="danger" label="Error" icon={ErrorIcon} />
      <Tag size="sm" round color="default" label="User" icon={UserIcon} />
    </>)
}`,...(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var B,O,W;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '닫기 가능',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function CloseExample() {
  return (
    <>
      <TagGroup tight>
        <Tag closable color="primary" label="React" closeLabel="React 태그 제거" />
        <Tag closable variant="outline" color="default" label="Svelte" closeLabel="Svelte 태그 제거" />
        <Tag closable variant="solid" color="danger" label="Deprecated" closeLabel="Deprecated 태그 제거" />
      </TagGroup>
      <TagGroup tight>
        <Tag
          closable
          round
          color="success"
          label="Frontend"
          closeLabel="Frontend 태그 제거"
          icon={TagIcon}
        />
      </TagGroup>
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
      <TagGroup tight>
        <Tag closable color="primary" label="React" closeLabel="React 태그 제거" />
        <Tag closable variant="outline" color="default" label="Svelte" closeLabel="Svelte 태그 제거" />
        <Tag closable variant="solid" color="danger" label="Deprecated" closeLabel="Deprecated 태그 제거" />
      </TagGroup>
      <TagGroup tight>
        <Tag closable round color="success" label="Frontend" closeLabel="Frontend 태그 제거" icon={TagIcon} />
      </TagGroup>
    </>)
}`,...(W=(O=g.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var N,U,V;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '선택 가능',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function CheckableExample() {
  return (
    <>
      <TagGroup ariaLabel="카테고리 필터">
        <Tag checkable selected color="default" label="전체" />
        <Tag checkable color="default" label="UI" />
        <Tag checkable color="default" label="UX" />
        <Tag checkable color="default" label="개발" />
      </TagGroup>
      <TagGroup ariaLabel="상태 필터">
        <Tag checkable round selected color="primary" label="진행 중" />
        <Tag checkable round selected color="success" label="완료" />
        <Tag checkable round color="warning" label="보류" />
        <Tag checkable round color="danger" label="취소" />
      </TagGroup>
      <TagGroup tight>
        <Tag checkable size="sm" selected color="default" label="S" />
        <Tag checkable size="sm" color="default" label="M" />
        <Tag checkable size="sm" color="default" label="L" />
        <Tag checkable size="sm" color="default" label="XL" />
      </TagGroup>
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
      <TagGroup ariaLabel="카테고리 필터">
        <Tag checkable selected color="default" label="전체" />
        <Tag checkable color="default" label="UI" />
        <Tag checkable color="default" label="UX" />
        <Tag checkable color="default" label="개발" />
      </TagGroup>
      <TagGroup ariaLabel="상태 필터">
        <Tag checkable round selected color="primary" label="진행 중" />
        <Tag checkable round selected color="success" label="완료" />
        <Tag checkable round color="warning" label="보류" />
        <Tag checkable round color="danger" label="취소" />
      </TagGroup>
      <TagGroup tight>
        <Tag checkable size="sm" selected color="default" label="S" />
        <Tag checkable size="sm" color="default" label="M" />
        <Tag checkable size="sm" color="default" label="L" />
        <Tag checkable size="sm" color="default" label="XL" />
      </TagGroup>
    </>)
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,H,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '추가',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function AddExample() {
  return (
    <>
      <Tag add round label="태그 추가" icon={PlusIcon} />
      <Tag add size="sm" label="+ New Tag" />
      <Tag add size="lg" round label="+ 카테고리 추가" />
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
      <Tag add round label="태그 추가" icon={PlusIcon} />
      <Tag add size="sm" label="+ New Tag" />
      <Tag add size="lg" round label="+ 카테고리 추가" />
    </>)
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var q,K,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        story: 'a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function LinkExample() {
  return (
    <>
      <Tag href="#" color="primary" label="문서 보기" />
      <Tag href="#" variant="outline" color="primary" label="가이드" />
      <Tag href="#" variant="solid" color="primary" label="바로가기" />
      <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={ExternalIcon} />
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
      <Tag href="#" color="primary" label="문서 보기" />
      <Tag href="#" variant="outline" color="primary" label="가이드" />
      <Tag href="#" variant="solid" color="primary" label="바로가기" />
      <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={ExternalIcon} />
    </>)
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function DisabledExample() {
  return (
    <>
      <Tag disabled color="primary" label="Filled" />
      <Tag disabled variant="outline" color="success" label="Outline" />
      <Tag disabled variant="solid" color="danger" label="Solid" />
      <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
      <Tag add disabled label="태그 추가 (비활성)" />
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
      <Tag disabled color="primary" label="Filled" />
      <Tag disabled variant="outline" color="success" label="Outline" />
      <Tag disabled variant="solid" color="danger" label="Solid" />
      <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
      <Tag add disabled label="태그 추가 (비활성)" />
    </>)
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import TagGroup from '@uxkm/ui-react/components/TagGroup.jsx';

export function GroupExample() {
  return (
    <>
      <TagGroup>
        <Tag color="primary" label="HTML" />
        <Tag color="primary" label="CSS" />
        <Tag color="primary" label="JavaScript" />
        <Tag color="default" label="TypeScript" />
        <Tag color="success" label="SCSS" />
      </TagGroup>
      <div>
        <p className="color_muted size_sm" style={{ marginBottom: '0.5rem' }}>
          선택된 기술 스택
        </p>
        <TagGroup tight>
          <Tag closable round color="primary" label="React" closeLabel="React 태그 제거" />
          <Tag closable round color="primary" label="Next.js" closeLabel="Next.js 태그 제거" />
          <Tag add round size="sm" label="+ 추가" />
        </TagGroup>
      </div>
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
      <TagGroup>
        <Tag color="primary" label="HTML" />
        <Tag color="primary" label="CSS" />
        <Tag color="primary" label="JavaScript" />
        <Tag color="default" label="TypeScript" />
        <Tag color="success" label="SCSS" />
      </TagGroup>
      <div>
        <p className="color_muted size_sm" style={{
        marginBottom: '0.5rem'
      }}>
          선택된 기술 스택
        </p>
        <TagGroup tight>
          <Tag closable round color="primary" label="React" closeLabel="React 태그 제거" />
          <Tag closable round color="primary" label="Next.js" closeLabel="Next.js 태그 제거" />
          <Tag add round size="sm" label="+ 추가" />
        </TagGroup>
      </div>
    </>)
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Ie=["Playground","Basic","Solid","Outline","Size","Round","Icon","Close","Checkable","Add","Link","Disabled","Group"];export{p as Add,t as Basic,m as Checkable,g as Close,T as Disabled,f as Group,u as Icon,b as Link,n as Outline,s as Playground,d as Round,i as Size,c as Solid,Ie as __namedExportsOrder,Pe as default};
