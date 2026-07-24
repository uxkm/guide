import{r as p,u as k,c as y,n as he,j as e,a as g,b as C,d as _e,v as Pe,I}from"./iframe-DbjMrqYU.js";import{w as i}from"./story-renders-CrEYzOkG.js";import{r as ke,a as Be}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const De=new Set(["vertical","horizontal","inline"]),ze=C("Menu",{defaults:{mode:"vertical"},booleanProps:new Set(["bordered","compact","dark"]),selfClosing:!1});function u({mode:o="vertical",bordered:r,compact:a,dark:s,ariaLabel:t,children:l,className:b,...M}){const f=p.useRef(null),c=De.has(o)?o:"vertical";k(ze,{mode:c,bordered:r,compact:a,dark:s,ariaLabel:t},y({default:l}),f,{className:b,...M});const x=p.useMemo(()=>{const d=["menu",`menu_${c}`];return r&&d.push("menu_bordered"),a&&d.push("menu_compact"),s&&d.push("menu_dark"),d},[c,r,a,s]),{class:v,...W}=M,w=he(W);return e.jsx("nav",{ref:f,className:g(x,b),"aria-label":t,"data-menu-selectable":"",...w,children:e.jsx("ul",{className:"menu_list",children:l})})}u.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{mode:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const Re=C("MenuDivider",{selfClosing:!0});function _({className:o,...r}){const a=p.useRef(null);return k(Re,{},y({}),a,{className:o,...r}),e.jsx("li",{ref:a,className:g("menu_divider",o),role:"separator",...r})}_.__docgenInfo={description:"",methods:[],displayName:"MenuDivider"};const Ee=C("MenuGroup",{selfClosing:!0});function H({title:o,className:r,...a}){const s=p.useRef(null);return k(Ee,{title:o},y({}),s,{className:r,...a}),e.jsx("li",{ref:s,className:g("menu_group",r),role:"presentation",...a,children:e.jsx("span",{className:"menu_group-title",children:o})})}H.__docgenInfo={description:"",methods:[],displayName:"MenuGroup"};const Ge=C("MenuItem",{booleanProps:new Set(["active","disabled","ripple"]),selfClosing:!1});function n({ripple:o,label:r,href:a,active:s,disabled:t,color:l,icon:b,extra:M,children:f,className:c,onClick:x,...v}){const{rippleAttrs:W}=_e({ripple:o}),w=p.useRef(null),d=f??r,ye=d!=null&&d!=="";k(Ge,{ripple:o,label:r,href:a,active:s,disabled:t,color:l},y({default:d,icon:b,extra:M}),w,{className:c,onClick:x,...v});const Ce=p.useMemo(()=>{const m=["menu_item"];return t&&m.push("is-disabled"),m},[t]),we=p.useMemo(()=>{const m=["menu_link"];return s&&m.push("is-active"),t&&m.push("is-disabled"),l&&m.push(`color_${l}`),m},[s,t,l]),j=a&&!t?"a":t?"span":"button",{class:nn,...Se}=v,Le=he(Se),Ne=m=>{j==="a"&&m.preventDefault(),x==null||x(m)};return e.jsx("li",{ref:w,className:g(Ce,c),...Le,children:e.jsxs(j,{...W,className:g(we),href:j==="a"?a||"#":void 0,type:j==="button"?"button":void 0,"aria-current":s?"page":void 0,"aria-disabled":t?"true":void 0,disabled:j==="button"?t:void 0,tabIndex:t&&j==="a"?-1:void 0,onClick:Ne,children:[b,ye?e.jsx("span",{className:"menu_label",children:d}):null,M]})})}n.__docgenInfo={description:"",methods:[],displayName:"MenuItem"};const Ae=C("MenuSubmenu",{booleanProps:new Set(["expanded"]),selfClosing:!1});function h({ripple:o,label:r,expanded:a,submenuId:s,icon:t,children:l,className:b,...M}){const{rippleAttrs:f}=_e({ripple:o}),c=p.useRef(null),x=p.useId().replace(/:/g,""),v=s||`menu-sub-${x}`;return k(Ae,{ripple:o,label:r,expanded:a,submenuId:s},y({default:l,icon:t}),c,{className:b,...M}),e.jsxs("li",{ref:c,className:g("menu_item","menu_item-submenu",b),"aria-expanded":a?"true":"false",...M,children:[e.jsx(Pe,{variant:"text",className:"menu_link",expanded:!!a,"aria-controls":v,iconBefore:t,iconAfter:e.jsx(I,{name:"chevron-down",className:"menu_arrow"}),...f,children:r?e.jsx("span",{className:"menu_label",children:r}):null}),e.jsx("ul",{id:v,className:"menu_submenu",children:l})]})}h.__docgenInfo={description:"",methods:[],displayName:"MenuSubmenu"};const V=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],He=[{name:"mode",type:"'vertical' | 'horizontal' | 'inline'",default:"vertical",description:"menu_vertical · menu_horizontal · menu_inline"},{name:"bordered",type:"boolean",default:"false",description:"menu_bordered"},{name:"compact",type:"boolean",default:"false",description:"menu_compact"},{name:"dark",type:"boolean",default:"false",description:"menu_dark"},{name:"aria-label",type:"string",default:"—",description:"nav aria-label"}],Ve=V,We=[{name:"label",type:"string",default:"—",description:"항목 텍스트"},{name:"href",type:"string",default:"—",description:"링크 URL (a 태그)"},{name:"active",type:"boolean",default:"false",description:"is-active · aria-current"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"color",type:"string",default:"—",description:"color_* (예: danger)"},ke],$e=V,Te=[{name:"label",type:"string",default:"—",description:"서브메뉴 제목"},{name:"expanded",type:"boolean",default:"false",description:"펼침 (aria-expanded)"},{name:"submenu-id",type:"string",default:"—",description:"menu_submenu id (aria-controls)"},ke],Fe=V,Oe=[{name:"title",type:"string",default:"—",description:"그룹 제목 (menu_group-title, 필수)"}],qe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Je=[{name:"menu · menu_list · menu_item · menu_link",description:"루트·목록·항목·링크"},{name:"menu_vertical · menu_horizontal · menu_inline",description:"배치 모드"},{name:"menu_icon · menu_label · menu_extra · menu_arrow",description:"항목 파트"},{name:"menu_item-submenu · menu_submenu",description:"서브메뉴"},{name:"menu_group · menu_group-title · menu_divider",description:"그룹·구분선"},{name:"menu_bordered · menu_compact · menu_dark",description:"스타일 변형"},{name:"is-active · is-disabled",description:"상태"},{name:"data-menu-selectable",description:"선택 가능 메뉴 JS"},...Be],Ue=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ke=[{name:"--menu-item-height · --menu-item-padding-x",default:"—",description:"항목 크기·패딩"},{name:"--menu-gap · --menu-radius",default:"—",description:"간격·모서리"},{name:"--menu-sub-indent",default:"—",description:"서브메뉴 들여쓰기"}],$=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Qe=[{name:"children",description:"MenuItem · MenuSubmenu 등"}],Xe=[{name:"icon",description:"menu_icon (prop)"},{name:"children",description:"항목 텍스트 (label 대체)"},{name:"extra",description:"menu_extra (배지 등)"}],Ye=[{name:"icon",description:"menu_icon (prop)"},{name:"children",description:"하위 MenuItem"}],Ze=[{title:"API · Menu Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label · submenu-id는 ariaLabel · submenuId로 다룹니다.",tables:[{columns:V,rows:He,codeColumn:"name"}]},{title:"API · MenuItem Props",tables:[{columns:Ve,rows:We,codeColumn:"name"}]},{title:"API · MenuSubmenu Props",tables:[{columns:$e,rows:Te,codeColumn:"name"}]},{title:"API · MenuGroup Props",tables:[{columns:Fe,rows:Oe,codeColumn:"name"}]},{title:"API · Children / Slots",tables:[{columns:$,rows:Qe,codeColumn:"name"},{columns:$,rows:Xe,codeColumn:"name"},{columns:$,rows:Ye,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:qe,rows:Je,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ue,rows:Ke,codeColumn:"name"}]}],en={mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},sn={title:"Components/네비게이션/Menu",id:"components-menu",component:u,subcomponents:{MenuItem:n,MenuGroup:H,MenuDivider:_,MenuSubmenu:h},tags:["autodocs"],argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"],type:{name:"enum",summary:"'vertical' | 'horizontal' | 'inline'"}},bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dark:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:Ze,docs:{description:{component:"내비게이션·사이드바·드롭다운에 쓰는 Menu 컴포넌트입니다."}}}},S={parameters:{controls:{disable:!1}},args:{...en},render:o=>e.jsxs(u,{...o,children:[e.jsx(n,{label:"항목 1"}),e.jsx(n,{label:"항목 2"}),e.jsx(_,{}),e.jsx(n,{label:"항목 3"})]})},L={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current="page"로 선택 항목을 표시합니다.'},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BasicExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"vertical",bordered:!0,ariaLabel:"주요 메뉴",children:[e.jsx(n,{label:"대시보드",active:!0}),e.jsx(n,{label:"분석"}),e.jsx(n,{label:"사용자"}),e.jsx(n,{label:"설정"})]}))},N={name:"수평",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function HorizontalExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"horizontal",bordered:!0,ariaLabel:"섹션 메뉴",children:[e.jsx(n,{label:"개요",active:!0}),e.jsx(n,{label:"컴포넌트"}),e.jsx(n,{label:"토큰"}),e.jsx(n,{label:"접근성"})]}))},P={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_icon으로 항목 앞에 아이콘을 배치합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function IconExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
      <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
      <MenuItem label="사용자" icon={<Icon name="user" />} />
      <MenuItem label="문서" icon={<Icon name="book" />} />
      <MenuItem label="설정" icon={<Icon name="settings" />} />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"vertical",bordered:!0,ariaLabel:"앱 메뉴",children:[e.jsx(n,{label:"대시보드",active:!0,icon:e.jsx(I,{name:"grid"})}),e.jsx(n,{label:"사용자",icon:e.jsx(I,{name:"user"})}),e.jsx(n,{label:"문서",icon:e.jsx(I,{name:"book"})}),e.jsx(n,{label:"설정",icon:e.jsx(I,{name:"settings"})})]}))},B={name:"서브메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function SubmenuExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"vertical",bordered:!0,ariaLabel:"컴포넌트 메뉴",children:[e.jsx(n,{label:"홈",active:!0,icon:e.jsx("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})})}),e.jsxs(h,{label:"컴포넌트",expanded:!0,submenuId:"menu-sub-components",icon:e.jsxs("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),children:[e.jsx(n,{label:"Button"}),e.jsx(n,{label:"Input"}),e.jsx(n,{label:"Card"})]}),e.jsxs(h,{label:"패턴",expanded:!1,submenuId:"menu-sub-patterns",icon:e.jsxs("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),e.jsx("polyline",{points:"2 17 12 22 22 17"}),e.jsx("polyline",{points:"2 12 12 17 22 12"})]}),children:[e.jsx(n,{label:"폼 레이아웃"}),e.jsx(n,{label:"데이터 테이블"})]})]}))},D={name:"구분선 · 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuDivider from '@uxkm/ui-react/components/MenuDivider.jsx';
import MenuGroup from '@uxkm/ui-react/components/MenuGroup.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function GroupExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"vertical",bordered:!0,ariaLabel:"설정 메뉴",children:[e.jsx(H,{title:"계정"}),e.jsx(n,{label:"프로필",active:!0}),e.jsx(n,{label:"보안"}),e.jsx(_,{}),e.jsx(H,{title:"앱"}),e.jsx(n,{label:"알림"}),e.jsx(n,{label:"언어"}),e.jsx(_,{}),e.jsx(n,{label:"로그아웃"})]}))},z={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function DisabledExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"vertical",bordered:!0,ariaLabel:"권한 메뉴",children:[e.jsx(n,{label:"조회",active:!0}),e.jsx(n,{label:"편집"}),e.jsx(n,{label:"삭제",disabled:!0}),e.jsx(n,{label:"관리자 설정",disabled:!0})]}))},R={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BadgeExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
      <MenuItem
        label="받은편지함"
        active
        extra={<span className="badge badge_count color_primary menu_extra">12</span>}
      />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"vertical",bordered:!0,ariaLabel:"알림 메뉴",children:[e.jsx(n,{label:"받은편지함",active:!0,icon:e.jsxs("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),extra:e.jsx("span",{className:"badge badge_count color_primary menu_extra","aria-hidden":"true",children:"12"})}),e.jsx(n,{label:"알림",icon:e.jsx("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"})}),extra:e.jsx("span",{className:"badge_dot-only color_danger menu_extra",role:"status","aria-label":"새 알림"})}),e.jsx(n,{label:"메시지",icon:e.jsx("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),extra:e.jsx("span",{className:"badge color_default menu_extra",children:"Beta"})})]}))},E={name:"수평 · 서브메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function HorizontalSubmenuExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}`,language:"tsx"}}},render:i(e.jsxs(u,{mode:"horizontal",bordered:!0,ariaLabel:"상단 메뉴",children:[e.jsx(n,{label:"홈",active:!0}),e.jsxs(h,{label:"컴포넌트",expanded:!1,submenuId:"menu-sub-h-components",children:[e.jsx(n,{label:"Button"}),e.jsx(n,{label:"Input"}),e.jsx(n,{label:"Select"})]}),e.jsx(n,{label:"토큰"}),e.jsx(n,{label:"접근성"})]}))},G={name:"사이드바 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function LayoutExample() {
  return (
    <div className="menu_demo-row">
      <div className="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
          <MenuItem label="개요" active icon={<Icon name="grid" />} />
          <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar">
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </div>
      <div className="menu_demo-content">
        <p style={{ margin: 0 }}>콘텐츠 영역</p>
      </div>
    </div>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"menu_demo-row",children:[e.jsx("div",{className:"menu_demo-sidebar",children:e.jsxs(u,{mode:"vertical",bordered:!0,compact:!0,ariaLabel:"앱 사이드바",children:[e.jsx(n,{label:"개요",active:!0,icon:e.jsx(I,{name:"grid"})}),e.jsxs(h,{label:"문서",expanded:!0,submenuId:"menu-sub-sidebar",icon:e.jsxs("svg",{className:"menu_icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("path",{d:"M14 2v6h6"})]}),children:[e.jsx(n,{label:"시작하기"}),e.jsx(n,{label:"컴포넌트"})]}),e.jsx(n,{label:"설정",icon:e.jsx(I,{name:"settings"})})]})}),e.jsx("div",{className:"menu_demo-content",children:e.jsx("p",{style:{margin:0},children:"선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다."})})]}))},A={name:"변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"menu_compact · menu_dark로 밀도와 배경을 조절합니다."},source:{code:`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function VariantExample() {
  return (
    <>
      <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
      <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(u,{mode:"vertical",bordered:!0,compact:!0,ariaLabel:"컴팩트 메뉴",children:[e.jsx(n,{label:"항목 A",active:!0}),e.jsx(n,{label:"항목 B"}),e.jsx(n,{label:"항목 C"})]}),e.jsxs(u,{mode:"vertical",bordered:!0,dark:!0,ariaLabel:"다크 서피스 메뉴",children:[e.jsx(n,{label:"항목 A",active:!0}),e.jsx(n,{label:"항목 B"}),e.jsx(n,{label:"항목 C"})]})]}))};var T,F,O;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Menu {...args}>
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>
}`,...(O=(F=S.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,J,U;L.parameters={...L.parameters,docs:{...(q=L.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        story: 'menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current="page"로 선택 항목을 표시합니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BasicExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="vertical" bordered ariaLabel="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>)
}`,...(U=(J=L.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var K,Q,X;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '수평',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function HorizontalExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>)
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        story: 'menu_icon으로 항목 앞에 아이콘을 배치합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function IconExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
      <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
      <MenuItem label="사용자" icon={<Icon name="user" />} />
      <MenuItem label="문서" icon={<Icon name="book" />} />
      <MenuItem label="설정" icon={<Icon name="settings" />} />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="vertical" bordered ariaLabel="앱 메뉴">
      <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
      <MenuItem label="사용자" icon={<Icon name="user" />} />
      <MenuItem label="문서" icon={<Icon name="book" />} />
      <MenuItem label="설정" icon={<Icon name="settings" />} />
    </Menu>)
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,oe;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '서브메뉴',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function SubmenuExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
      <MenuItem label="홈" active icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>} />
      <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>}>
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
      <MenuSubmenu label="패턴" expanded={false} submenuId="menu-sub-patterns" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>}>
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
      </MenuSubmenu>
    </Menu>)
}`,...(oe=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,te,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '구분선 · 그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuDivider from '@uxkm/ui-react/components/MenuDivider.jsx';
import MenuGroup from '@uxkm/ui-react/components/MenuGroup.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function GroupExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="vertical" bordered ariaLabel="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>)
}`,...(se=(te=D.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ue,le,me;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
        story: 'menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function DisabledExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="vertical" bordered ariaLabel="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>)
}`,...(me=(le=z.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ie,ce,de;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: '배지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BadgeExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
      <MenuItem
        label="받은편지함"
        active
        extra={<span className="badge badge_count color_primary menu_extra">12</span>}
      />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="vertical" bordered ariaLabel="알림 메뉴">
      <MenuItem label="받은편지함" active icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>} extra={<span className="badge badge_count color_primary menu_extra" aria-hidden="true">
            12
          </span>} />
      <MenuItem label="알림" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
          </svg>} extra={<span className="badge_dot-only color_danger menu_extra" role="status" aria-label="새 알림" />} />
      <MenuItem label="메시지" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>} extra={<span className="badge color_default menu_extra">Beta</span>} />
    </Menu>)
}`,...(de=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,be,Me;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '수평 · 서브메뉴',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function HorizontalSubmenuExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>)
}`,...(Me=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Me.source}}};var xe,Ie,fe;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: '사이드바 레이아웃',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function LayoutExample() {
  return (
    <div className="menu_demo-row">
      <div className="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
          <MenuItem label="개요" active icon={<Icon name="grid" />} />
          <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar">
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </div>
      <div className="menu_demo-content">
        <p style={{ margin: 0 }}>콘텐츠 영역</p>
      </div>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="menu_demo-row">
      <div className="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
          <MenuItem label="개요" active icon={<Icon name="grid" />} />
          <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar" icon={<svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>}>
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </div>
      <div className="menu_demo-content">
        <p style={{
        margin: 0
      }}>
          선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때
          사용합니다.
        </p>
      </div>
    </div>)
}`,...(fe=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var ve,je,ge;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: '변형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'menu_compact · menu_dark로 밀도와 배경을 조절합니다.'
      },
      source: {
        code: \`import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function VariantExample() {
  return (
    <>
      <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
      <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
      <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
    </>)
}`,...(ge=(je=A.parameters)==null?void 0:je.docs)==null?void 0:ge.source}}};const un=["Playground","Basic","Horizontal","IconDemo","Submenu","Group","Disabled","BadgeDemo","HorizontalSubmenu","Layout","Variant"];export{R as BadgeDemo,L as Basic,z as Disabled,D as Group,N as Horizontal,E as HorizontalSubmenu,P as IconDemo,G as Layout,S as Playground,B as Submenu,A as Variant,un as __namedExportsOrder,sn as default};
