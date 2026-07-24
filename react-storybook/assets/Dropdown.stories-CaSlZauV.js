import{r as g,L as we,N as S,n as he,j as e,a as A,v as r,I as y}from"./iframe-DbjMrqYU.js";import{A as je}from"./Avatar-DlUX8A5D.js";import{w as _e}from"./story-renders-CrEYzOkG.js";import"./preload-helper-DUxc-Dqw.js";const fe=new Set(["end","top"]);function n({open:a,disabled:l,placement:m,fit:u,maxVisibleItems:d,menuWidth:c,menuMinWidth:x,triggerContent:de,children:pe,className:B,...k}){const I=g.useRef(null),me=`dropdown-menu-${g.useId().replace(/:/g,"")}`,b=fe.has(m)?m:void 0;we({open:a,disabled:l,placement:b,fit:u,maxVisibleItems:d,menuWidth:c,menuMinWidth:x},I,{className:B,...k});const ue=g.useMemo(()=>{const s=["dropdown"];return a&&s.push("is-open"),l&&s.push("is-disabled"),b==="end"&&s.push("dropdown_placement-end"),b==="top"&&s.push("dropdown_placement-top"),u&&s.push("dropdown_fit"),s},[a,l,b,u]),ce=g.useMemo(()=>{const s=["dropdown_menu"];return d!=null&&s.push("dropdown_menu-scrollable"),s},[d]),xe=g.useMemo(()=>{const s={};return d!=null&&(s["--dropdown-max-visible-items"]=d),c!=null&&(s.width=S(c)),x!=null&&(s.minWidth=S(x)),s},[d,c,x]),{class:Ee,...ge}=k,be=he(ge);return e.jsxs("div",{ref:I,className:A(ue,B),"data-dropdown":"",...be,children:[e.jsx("div",{"data-demo-slot":"trigger",children:de}),e.jsx("div",{id:me,className:A(ce),style:xe,role:"menu","data-demo-slot":"default",children:pe})]})}n.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const ve=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],De=[{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"placement",type:"'end' | 'top'",default:"—",description:"dropdown_placement-end · dropdown_placement-top"},{name:"fit",type:"boolean",default:"false",description:"dropdown_fit — 트리거 너비 맞춤"},{name:"maxVisibleItems",type:"number",default:"—",description:"패널에 보이는 최대 항목 수. 초과 시 dropdown_menu-scrollable로 목록 스크롤"},{name:"menuWidth",type:"string | number",default:"—",description:"패널 가로 너비 (숫자는 rem)"},{name:"menuMinWidth",type:"string | number",default:"—",description:"패널 최소 가로 너비 (숫자는 rem)"}],Ne=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Me=[{name:"dropdown · dropdown_menu",description:"루트·메뉴 패널"},{name:"dropdown_placement-end · dropdown_placement-top · dropdown_fit",description:"배치·너비"},{name:"dropdown_menu-scrollable",description:"maxVisibleItems 지정 시 — menu_list 스크롤"},{name:"data-dropdown · data-dropdown-close-on-select",description:"JS 연동"},{name:"is-open · is-disabled",description:"상태"},{name:'role="menu"',description:"메뉴 시맨틱"}],Ce=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ye=[{name:"--dropdown-min-width · --dropdown-menu-width",default:"10rem · auto",description:"패널 최소·기본 너비"},{name:"--dropdown-offset",default:"—",description:"트리거와 패널 간격"},{name:"--dropdown-max-visible-items",default:"—",description:"maxVisibleItems prop으로 주입 — 스크롤 높이 계산"},{name:"--dropdown-item-line-height",default:"1.4",description:"항목 높이 계산용 줄 높이"},{name:"--z-dropdown",default:"100",description:"레이어 순서"}],Be=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ke=[{name:"triggerContent",description:"트리거 버튼·링크 (Vue #trigger 슬롯)"},{name:"children",description:"메뉴 패널 (dropdown_menu, 보통 Menu OOCSS)"}],Ie=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 max-visible-items · menu-width · menu-min-width는 maxVisibleItems · menuWidth · menuMinWidth로 다룹니다. Vue `#trigger` 슬롯은 triggerContent prop입니다.",tables:[{columns:ve,rows:De,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React prop·children입니다. Menu·MenuItem은 아직 React 미포팅이므로 스토리에서는 OOCSS 마크업을 사용합니다.",tables:[{columns:Be,rows:ke,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ne,rows:Me,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ce,rows:ye,codeColumn:"name"}]}];function Se(a){return e.jsx("div",{className:"dropdown_demo-stage",children:a})}function i(a){const l=()=>Se(a);return _e(l,l)}function t({ariaLabel:a,children:l}){return e.jsx("nav",{className:"menu menu_vertical menu_compact","aria-label":a,"data-menu-selectable":"",children:e.jsx("ul",{className:"menu_list",role:"none",children:l})})}function o({label:a,active:l,disabled:m,color:u,icon:d,extra:c}){const x=["menu_link",l&&"is-active",m&&"is-disabled",u&&`color_${u}`].filter(Boolean).join(" ");return e.jsx("li",{className:["menu_item",m&&"is-disabled"].filter(Boolean).join(" "),children:e.jsxs("button",{type:"button",className:x,"aria-current":l?"page":void 0,"aria-disabled":m?"true":void 0,disabled:m||void 0,children:[d,a!=null?e.jsx("span",{className:"menu_label",children:a}):null,c]})})}const p=e.jsx(y,{name:"chevron-down",className:"btn_select-caret","aria-hidden":"true"}),Ae=e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"}),e.jsx("circle",{cx:"5",cy:"12",r:"1"})]}),Pe={open:!0,disabled:!1,placement:void 0,fit:!1,maxVisibleItems:void 0},We={title:"Components/네비게이션/Dropdown",id:"components-dropdown",component:n,tags:["autodocs"],argTypes:{open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placement:{control:"select",options:["end","top"],type:{name:"enum",summary:"'end' | 'top'"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},maxVisibleItems:{control:"number",type:{name:"number",summary:"number"}},menuWidth:{control:"text",type:{name:"union",summary:"string | number"}},menuMinWidth:{control:"text",type:{name:"union",summary:"string | number"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ie,docs:{description:{component:"트리거와 메뉴 패널로 구성되는 Dropdown 컴포넌트입니다."}}}},w={parameters:{controls:{disable:!1}},args:{...Pe},render:a=>e.jsx("div",{className:"dropdown_demo-stage",children:e.jsx(n,{...a,triggerContent:e.jsx(r,{className:"dropdown_trigger",label:"드롭다운",variant:"outline",haspopup:"menu"}),children:e.jsxs(t,{ariaLabel:"드롭다운 메뉴",children:[e.jsx(o,{label:"항목 1"}),e.jsx(o,{label:"항목 2"}),e.jsx(o,{label:"항목 3"})]})})})},h={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function BasicExample() {
  return (
    <Dropdown
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />
      }
    >
      <nav className="menu menu_vertical menu_compact" aria-label="작업 메뉴">
        <ul className="menu_list">
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">복사</span></button></li>
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">이동</span></button></li>
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">공유</span></button></li>
        </ul>
      </nav>
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsx(n,{triggerContent:e.jsx(r,{variant:"outline",className:"dropdown_trigger",label:"작업",haspopup:"menu"}),children:e.jsxs(t,{ariaLabel:"작업 메뉴",children:[e.jsx(o,{label:"복사"}),e.jsx(o,{label:"이동"}),e.jsx(o,{label:"공유"})]})}))},j={name:"열린 상태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'is-open 클래스와 aria-expanded="true"로 패널이 열린 상태를 표현합니다.'},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function OpenExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button
          variant="filled"
          color="primary"
          className="dropdown_trigger"
          label="카테고리"
          haspopup="menu"
          expanded
        />
      }
    >
      {/* menu OOCSS */}
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsx(n,{open:!0,triggerContent:e.jsx(r,{variant:"filled",color:"primary",className:"dropdown_trigger",label:"카테고리",haspopup:"menu",expanded:!0}),children:e.jsxs(t,{ariaLabel:"카테고리",children:[e.jsx(o,{label:"전체",active:!0}),e.jsx(o,{label:"디자인"}),e.jsx(o,{label:"개발"}),e.jsx(o,{label:"마케팅"})]})}))},_={name:"트리거 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function TriggerExample() {
  return (
    <Dropdown
      triggerContent={
        <Button className="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"dropdown_row",children:[e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"filled",color:"primary",label:"Filled",haspopup:"menu"}),children:e.jsxs(t,{children:[e.jsx(o,{label:"항목 1"}),e.jsx(o,{label:"항목 2"})]})}),e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"outline",label:"Outline",haspopup:"menu"}),children:e.jsxs(t,{children:[e.jsx(o,{label:"항목 1"}),e.jsx(o,{label:"항목 2"})]})}),e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"ghost",label:"Ghost",haspopup:"menu"}),children:e.jsxs(t,{children:[e.jsx(o,{label:"항목 1"}),e.jsx(o,{label:"항목 2"})]})}),e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"text",color:"primary",label:"Text",haspopup:"menu",iconAfter:p}),children:e.jsxs(t,{children:[e.jsx(o,{label:"항목 1"}),e.jsx(o,{label:"항목 2"})]})}),e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"ghost",iconOnly:!0,ariaLabel:"더보기",haspopup:"menu",iconBefore:Ae}),children:e.jsxs(t,{ariaLabel:"더보기",children:[e.jsx(o,{label:"편집"}),e.jsx(o,{label:"복제"}),e.jsx(o,{label:"삭제",color:"danger"})]})})]}))},f={name:"셀렉트 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function SelectTriggerExample() {
  return (
    <Dropdown
      fit
      triggerContent={
        <Button className="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dropdown_row",children:[e.jsx(n,{fit:!0,triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"select",label:"서울특별시",haspopup:"listbox"}),children:e.jsxs(t,{ariaLabel:"지역 선택",children:[e.jsx(o,{label:"서울특별시",active:!0}),e.jsx(o,{label:"부산광역시"}),e.jsx(o,{label:"대구광역시"}),e.jsx(o,{label:"인천광역시"})]})}),e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"select",selectText:!0,label:"최신순",haspopup:"listbox"}),children:e.jsxs(t,{ariaLabel:"정렬",children:[e.jsx(o,{label:"최신순",active:!0}),e.jsx(o,{label:"인기순"}),e.jsx(o,{label:"가격 낮은순"}),e.jsx(o,{label:"가격 높은순"})]})})]}),e.jsx("p",{className:"form_field-hint",children:"btn_select 상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요."})]}))},v={name:"정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function PlacementExample() {
  return (
    <Dropdown
      placement="end"
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dropdown_row",style:{width:"100%",justifyContent:"space-between"},children:[e.jsx(n,{triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"outline",label:"왼쪽 정렬",haspopup:"menu",iconAfter:p}),children:e.jsxs(t,{children:[e.jsx(o,{label:"항목 A"}),e.jsx(o,{label:"항목 B"})]})}),e.jsx(n,{placement:"end",triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"outline",label:"오른쪽 정렬",haspopup:"menu",iconAfter:p}),children:e.jsxs(t,{children:[e.jsx(o,{label:"항목 A"}),e.jsx(o,{label:"항목 B"})]})})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:"6rem"},children:e.jsx(n,{placement:"top",triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"ghost",label:"위로 열기",haspopup:"menu",iconAfter:p}),children:e.jsxs(t,{children:[e.jsx(o,{label:"위쪽 패널"}),e.jsx(o,{label:"항목 2"})]})})})]}))},D={name:"메뉴 구성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function MenuDemoExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="계정" haspopup="menu" expanded />
      }
    >
      <nav className="menu menu_vertical menu_compact" aria-label="계정 메뉴">
        <ul className="menu_list" role="none">
          <li className="menu_group" role="presentation">
            <span className="menu_group-title">계정</span>
          </li>
          {/* MenuItem OOCSS … */}
        </ul>
      </nav>
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsx(n,{open:!0,triggerContent:e.jsx(r,{className:"dropdown_trigger",variant:"outline",label:"계정",haspopup:"menu",expanded:!0,iconAfter:p}),children:e.jsxs(t,{ariaLabel:"계정 메뉴",children:[e.jsx("li",{className:"menu_group",role:"presentation",children:e.jsx("span",{className:"menu_group-title",children:"계정"})}),e.jsx(o,{label:"프로필",icon:e.jsx(y,{name:"user"})}),e.jsx(o,{label:"보안",icon:e.jsxs("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsx("li",{className:"menu_divider",role:"separator"}),e.jsx("li",{className:"menu_group",role:"presentation",children:e.jsx("span",{className:"menu_group-title",children:"앱"})}),e.jsx(o,{label:"알림",icon:e.jsx("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"})}),extra:e.jsx("span",{className:"badge badge_count color_primary menu_extra","aria-hidden":"true",children:"3"})}),e.jsx(o,{label:"설정",icon:e.jsx(y,{name:"settings"})}),e.jsx("li",{className:"menu_divider",role:"separator"}),e.jsx(o,{label:"로그아웃",color:"danger"})]})}))},N={name:"스크롤 · 너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function ScrollExample() {
  return (
    <Dropdown
      open
      maxVisibleItems={4}
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="도시 선택" haspopup="listbox" expanded />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dropdown_row",children:[e.jsx(n,{open:!0,maxVisibleItems:4,triggerContent:e.jsx(r,{variant:"outline",className:"dropdown_trigger",label:"도시 선택",haspopup:"listbox",expanded:!0,iconAfter:p}),children:e.jsxs(t,{ariaLabel:"도시 목록",children:[e.jsx(o,{label:"서울특별시",active:!0}),e.jsx(o,{label:"부산광역시"}),e.jsx(o,{label:"대구광역시"}),e.jsx(o,{label:"인천광역시"}),e.jsx(o,{label:"광주광역시"}),e.jsx(o,{label:"대전광역시"}),e.jsx(o,{label:"울산광역시"}),e.jsx(o,{label:"세종특별자치시"})]})}),e.jsx(n,{open:!0,maxVisibleItems:4,menuWidth:18,triggerContent:e.jsx(r,{variant:"outline",className:"dropdown_trigger",label:"넓은 패널",haspopup:"menu",expanded:!0,iconAfter:p}),children:e.jsxs(t,{ariaLabel:"긴 라벨 메뉴",children:[e.jsx(o,{label:"프로젝트 대시보드"}),e.jsx(o,{label:"팀 협업 워크스페이스"}),e.jsx(o,{label:"문서 보관함 및 템플릿"}),e.jsx(o,{label:"알림 및 활동 기록"}),e.jsx(o,{label:"계정 및 보안 설정"}),e.jsx(o,{label:"결제 및 구독 관리"})]})})]}),e.jsxs("p",{className:"form_field-hint",children:["HTML 마크업에서는 ",e.jsx("code",{children:"dropdown_menu-scrollable"})," 클래스와"," ",e.jsx("code",{children:'style="--dropdown-max-visible-items: 4"'}),"로 동일하게 적용합니다."]})]}))},M={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function DisabledExample() {
  return (
    <Dropdown
      disabled
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"dropdown_row",children:[e.jsx(n,{disabled:!0,triggerContent:e.jsx(r,{variant:"outline",className:"dropdown_trigger",disabled:!0,label:"비활성 드롭다운",haspopup:"menu"}),children:e.jsx(t,{children:e.jsx(o,{label:"항목"})})}),e.jsx(n,{open:!0,triggerContent:e.jsx(r,{variant:"outline",className:"dropdown_trigger",label:"일부 비활성",haspopup:"menu",expanded:!0}),children:e.jsxs(t,{children:[e.jsx(o,{label:"조회"}),e.jsx(o,{label:"편집"}),e.jsx(o,{label:"삭제",disabled:!0}),e.jsx(o,{label:"관리자 설정",disabled:!0})]})})]}))},C={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. data-dropdown으로 클릭·Esc·외부 클릭 시 닫힙니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ExampleDemo() {
  return (
    <div className="dropdown_demo-toolbar">
      <Dropdown
        placement="end"
        data-dropdown-close-on-select=""
        triggerContent={
          <Button variant="ghost" size="sm" className="dropdown_trigger" haspopup="menu">
            <Avatar size="sm" color="primary" initials="김" ariaHidden />
            김가이드
          </Button>
        }
      >
        {/* menu */}
      </Dropdown>
    </div>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"dropdown_demo-toolbar",children:[e.jsxs(r,{variant:"ghost",size:"sm",iconBefore:e.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"})}),children:["알림",e.jsx("span",{className:"badge badge_count badge_sm color_danger","aria-label":"읽지 않은 알림 2건",children:"2"})]}),e.jsx(n,{placement:"end","data-dropdown-close-on-select":"",triggerContent:e.jsxs(r,{variant:"ghost",size:"sm",className:"dropdown_trigger",haspopup:"menu",iconAfter:p,children:[e.jsx(je,{size:"sm",color:"primary",initials:"김",ariaHidden:!0}),"김가이드"]}),children:e.jsxs(t,{ariaLabel:"사용자 메뉴",children:[e.jsx(o,{label:"내 프로필",icon:e.jsx(y,{name:"user"})}),e.jsx(o,{label:"내 문서",icon:e.jsxs("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("path",{d:"M14 2v6h6"})]})}),e.jsx("li",{className:"menu_divider",role:"separator"}),e.jsx(o,{label:"로그아웃",color:"danger"})]})})]}))};var P,L,E;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="dropdown_demo-stage">
      <Dropdown {...args} triggerContent={<Button className="dropdown_trigger" label="드롭다운" variant="outline" haspopup="menu" />}>
        <MenuShell ariaLabel="드롭다운 메뉴">
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
          <MenuItem label="항목 3" />
        </MenuShell>
      </Dropdown>
    </div>
}`,...(E=(L=w.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var O,V,T;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        story: 'dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function BasicExample() {
  return (
    <Dropdown
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />
      }
    >
      <nav className="menu menu_vertical menu_compact" aria-label="작업 메뉴">
        <ul className="menu_list">
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">복사</span></button></li>
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">이동</span></button></li>
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">공유</span></button></li>
        </ul>
      </nav>
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<Dropdown triggerContent={<Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />}>
      <MenuShell ariaLabel="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </MenuShell>
    </Dropdown>)
}`,...(T=(V=h.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var z,W,H;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '열린 상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'is-open 클래스와 aria-expanded="true"로 패널이 열린 상태를 표현합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function OpenExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button
          variant="filled"
          color="primary"
          className="dropdown_trigger"
          label="카테고리"
          haspopup="menu"
          expanded
        />
      }
    >
      {/* menu OOCSS */}
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<Dropdown open triggerContent={<Button variant="filled" color="primary" className="dropdown_trigger" label="카테고리" haspopup="menu" expanded />}>
      <MenuShell ariaLabel="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </MenuShell>
    </Dropdown>)
}`,...(H=(W=j.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var R,F,q;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '트리거 유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function TriggerExample() {
  return (
    <Dropdown
      triggerContent={
        <Button className="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<div className="dropdown_row">
      <Dropdown triggerContent={<Button className="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Button className="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Button className="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Button className="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" iconAfter={Caret} />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Button className="dropdown_trigger" variant="ghost" iconOnly ariaLabel="더보기" haspopup="menu" iconBefore={MoreIcon} />}>
        <MenuShell ariaLabel="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </MenuShell>
      </Dropdown>
    </div>)
}`,...(q=(F=_.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var G,$,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '셀렉트 트리거',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function SelectTriggerExample() {
  return (
    <Dropdown
      fit
      triggerContent={
        <Button className="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<>
      <div className="dropdown_row">
        <Dropdown fit triggerContent={<Button className="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />}>
          <MenuShell ariaLabel="지역 선택">
            <MenuItem label="서울특별시" active />
            <MenuItem label="부산광역시" />
            <MenuItem label="대구광역시" />
            <MenuItem label="인천광역시" />
          </MenuShell>
        </Dropdown>
        <Dropdown triggerContent={<Button className="dropdown_trigger" variant="select" selectText label="최신순" haspopup="listbox" />}>
          <MenuShell ariaLabel="정렬">
            <MenuItem label="최신순" active />
            <MenuItem label="인기순" />
            <MenuItem label="가격 낮은순" />
            <MenuItem label="가격 높은순" />
          </MenuShell>
        </Dropdown>
      </div>
      <p className="form_field-hint">
        btn_select 상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요.
      </p>
    </>)
}`,...(J=($=f.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        story: 'dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function PlacementExample() {
  return (
    <Dropdown
      placement="end"
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<>
      <div className="dropdown_row" style={{
      width: '100%',
      justifyContent: 'space-between'
    }}>
        <Dropdown triggerContent={<Button className="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" iconAfter={Caret} />}>
          <MenuShell>
            <MenuItem label="항목 A" />
            <MenuItem label="항목 B" />
          </MenuShell>
        </Dropdown>
        <Dropdown placement="end" triggerContent={<Button className="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" iconAfter={Caret} />}>
          <MenuShell>
            <MenuItem label="항목 A" />
            <MenuItem label="항목 B" />
          </MenuShell>
        </Dropdown>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '6rem'
    }}>
        <Dropdown placement="top" triggerContent={<Button className="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" iconAfter={Caret} />}>
          <MenuShell>
            <MenuItem label="위쪽 패널" />
            <MenuItem label="항목 2" />
          </MenuShell>
        </Dropdown>
      </div>
    </>)
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '메뉴 구성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function MenuDemoExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="계정" haspopup="menu" expanded />
      }
    >
      <nav className="menu menu_vertical menu_compact" aria-label="계정 메뉴">
        <ul className="menu_list" role="none">
          <li className="menu_group" role="presentation">
            <span className="menu_group-title">계정</span>
          </li>
          {/* MenuItem OOCSS … */}
        </ul>
      </nav>
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<Dropdown open triggerContent={<Button className="dropdown_trigger" variant="outline" label="계정" haspopup="menu" expanded iconAfter={Caret} />}>
      <MenuShell ariaLabel="계정 메뉴">
        <li className="menu_group" role="presentation">
          <span className="menu_group-title">계정</span>
        </li>
        <MenuItem label="프로필" icon={<Icon name="user" />} />
        <MenuItem label="보안" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>} />
        <li className="menu_divider" role="separator" />
        <li className="menu_group" role="presentation">
          <span className="menu_group-title">앱</span>
        </li>
        <MenuItem label="알림" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
            </svg>} extra={<span className="badge badge_count color_primary menu_extra" aria-hidden="true">
              3
            </span>} />
        <MenuItem label="설정" icon={<Icon name="settings" />} />
        <li className="menu_divider" role="separator" />
        <MenuItem label="로그아웃" color="danger" />
      </MenuShell>
    </Dropdown>)
}`,...(Z=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '스크롤 · 너비',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function ScrollExample() {
  return (
    <Dropdown
      open
      maxVisibleItems={4}
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="도시 선택" haspopup="listbox" expanded />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<>
      <div className="dropdown_row">
        <Dropdown open maxVisibleItems={4} triggerContent={<Button variant="outline" className="dropdown_trigger" label="도시 선택" haspopup="listbox" expanded iconAfter={Caret} />}>
          <MenuShell ariaLabel="도시 목록">
            <MenuItem label="서울특별시" active />
            <MenuItem label="부산광역시" />
            <MenuItem label="대구광역시" />
            <MenuItem label="인천광역시" />
            <MenuItem label="광주광역시" />
            <MenuItem label="대전광역시" />
            <MenuItem label="울산광역시" />
            <MenuItem label="세종특별자치시" />
          </MenuShell>
        </Dropdown>
        <Dropdown open maxVisibleItems={4} menuWidth={18} triggerContent={<Button variant="outline" className="dropdown_trigger" label="넓은 패널" haspopup="menu" expanded iconAfter={Caret} />}>
          <MenuShell ariaLabel="긴 라벨 메뉴">
            <MenuItem label="프로젝트 대시보드" />
            <MenuItem label="팀 협업 워크스페이스" />
            <MenuItem label="문서 보관함 및 템플릿" />
            <MenuItem label="알림 및 활동 기록" />
            <MenuItem label="계정 및 보안 설정" />
            <MenuItem label="결제 및 구독 관리" />
          </MenuShell>
        </Dropdown>
      </div>
      <p className="form_field-hint">
        HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와{' '}
        <code>style=&quot;--dropdown-max-visible-items: 4&quot;</code>로 동일하게 적용합니다.
      </p>
    </>)
}`,...(ne=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,te,ae;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function DisabledExample() {
  return (
    <Dropdown
      disabled
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<div className="dropdown_row">
      <Dropdown disabled triggerContent={<Button variant="outline" className="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />}>
        <MenuShell>
          <MenuItem label="항목" />
        </MenuShell>
      </Dropdown>
      <Dropdown open triggerContent={<Button variant="outline" className="dropdown_trigger" label="일부 비활성" haspopup="menu" expanded />}>
        <MenuShell>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </MenuShell>
      </Dropdown>
    </div>)
}`,...(ae=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,le,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
        story: '툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. data-dropdown으로 클릭·Esc·외부 클릭 시 닫힙니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ExampleDemo() {
  return (
    <div className="dropdown_demo-toolbar">
      <Dropdown
        placement="end"
        data-dropdown-close-on-select=""
        triggerContent={
          <Button variant="ghost" size="sm" className="dropdown_trigger" haspopup="menu">
            <Avatar size="sm" color="primary" initials="김" ariaHidden />
            김가이드
          </Button>
        }
      >
        {/* menu */}
      </Dropdown>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: dropdownDemo(<div className="dropdown_demo-toolbar">
      <Button variant="ghost" size="sm" iconBefore={<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
          </svg>}>
        알림
        <span className="badge badge_count badge_sm color_danger" aria-label="읽지 않은 알림 2건">
          2
        </span>
      </Button>
      <Dropdown placement="end" data-dropdown-close-on-select="" triggerContent={<Button variant="ghost" size="sm" className="dropdown_trigger" haspopup="menu" iconAfter={Caret}>
            <Avatar size="sm" color="primary" initials="김" ariaHidden />
            김가이드
          </Button>}>
        <MenuShell ariaLabel="사용자 메뉴">
          <MenuItem label="내 프로필" icon={<Icon name="user" />} />
          <MenuItem label="내 문서" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>} />
          <li className="menu_divider" role="separator" />
          <MenuItem label="로그아웃" color="danger" />
        </MenuShell>
      </Dropdown>
    </div>)
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const He=["Playground","Basic","Open","Trigger","SelectTrigger","Placement","MenuDemo","Scroll","Disabled","Example"];export{h as Basic,M as Disabled,C as Example,D as MenuDemo,j as Open,v as Placement,w as Playground,N as Scroll,f as SelectTrigger,_ as Trigger,He as __namedExportsOrder,We as default};
