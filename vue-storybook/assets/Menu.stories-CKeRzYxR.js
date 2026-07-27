import{_ as e,a as n}from"./MenuItem-dBBMDc2A.js";import{w as u,s as ve}from"./story-renders-BkwSCuFa.js";import{_ as Ie}from"./Badge-BFsRdINT.js";import{_ as A}from"./MenuDivider-BCkb6uVX.js";import{b as ce,o as h,c as x,d as de,t as pe,h as Ce,i as Me,k as De,l as fe,a3 as ge,e as S,au as ke,w as k,r as E,g as he,_,p as xe,s as Ae,q as _e,j as ye}from"./iframe-_Cy3TTd_.js";import{r as be,a as we}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Se={class:"menu_group-title"},l={__name:"MenuGroup",props:{title:{type:String,required:!0}},setup(t){const a=t,r=Ce(null),m=Me("MenuGroup",{selfClosing:!0});return ce(m,a,{},r,{}),(w,f)=>(h(),x("li",{ref_key:"rootRef",ref:r,class:"menu_group",role:"presentation"},[de("span",Se,pe(t.title),1)],512))}};l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/MenuGroup.vue"]});const Ee=["aria-expanded"],Fe={key:0,class:"menu_label"},Pe=["id"],o={__name:"MenuSubmenu",props:{ripple:De,label:String,expanded:Boolean,submenuId:String},setup(t){const a=t,{rippleAttrs:r}=fe(a),m=Ce(null),w=ge().replace(/:/g,""),f=ye(()=>a.submenuId||`menu-sub-${w}`),Be=Me("MenuSubmenu",{booleanProps:new Set(["expanded"]),selfClosing:!1});return ce(Be,a,{},m,{}),(g,Xe)=>(h(),x("li",{ref_key:"rootRef",ref:m,class:"menu_item menu_item-submenu","aria-expanded":t.expanded?"true":"false"},[S(_e,xe({variant:"text",class:"menu_link","aria-expanded":t.expanded?"true":"false","aria-controls":f.value},Ae(r)),ke({"icon-after":k(()=>[S(_,{name:"chevron-down",class:"menu_arrow"})]),default:k(()=>[t.label?(h(),x("span",Fe,pe(t.label),1)):he("",!0)]),_:2},[g.$slots.icon?{name:"icon-before",fn:k(()=>[E(g.$slots,"icon")]),key:"0"}:void 0]),1040,["aria-expanded","aria-controls"]),de("ul",{id:f.value,class:"menu_submenu"},[E(g.$slots,"default")],8,Pe)],8,Ee))}};o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"MenuSubmenu",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"label",type:{name:"string"}},{name:"expanded",type:{name:"boolean"}},{name:"submenuId",type:{name:"string"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/MenuSubmenu.vue"]});const D=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ze=[{name:"mode",type:"'vertical' | 'horizontal' | 'inline'",default:"vertical",description:"menu_vertical · menu_horizontal · menu_inline"},{name:"bordered",type:"boolean",default:"false",description:"menu_bordered"},{name:"compact",type:"boolean",default:"false",description:"menu_compact"},{name:"dark",type:"boolean",default:"false",description:"menu_dark"},{name:"aria-label",type:"string",default:"—",description:"nav aria-label"}],Le=D,He=[{name:"label",type:"string",default:"—",description:"항목 텍스트"},{name:"href",type:"string",default:"—",description:"링크 URL (a 태그)"},{name:"active",type:"boolean",default:"false",description:"is-active · aria-current"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"color",type:"string",default:"—",description:"color_* (예: danger)"},be],Ge=D,Ve=[{name:"label",type:"string",default:"—",description:"서브메뉴 제목"},{name:"expanded",type:"boolean",default:"false",description:"펼침 (aria-expanded)"},{name:"submenu-id",type:"string",default:"—",description:"menu_submenu id (aria-controls)"},be],Re=D,$e=[{name:"title",type:"string",default:"—",description:"그룹 제목 (menu_group-title, 필수)"}],y=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ne=[{name:"default",description:"MenuItem · MenuSubmenu 등"}],qe=y,Oe=[{name:"icon",description:"menu_icon"},{name:"extra",description:"menu_extra (배지 등)"}],Te=y,je=[{name:"icon",description:"menu_icon"},{name:"default",description:"하위 MenuItem"}],Ue=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Je=[{name:"menu · menu_list · menu_item · menu_link",description:"루트·목록·항목·링크"},{name:"menu_vertical · menu_horizontal · menu_inline",description:"배치 모드"},{name:"menu_icon · menu_label · menu_extra · menu_arrow",description:"항목 파트"},{name:"menu_item-submenu · menu_submenu",description:"서브메뉴"},{name:"menu_group · menu_group-title · menu_divider",description:"그룹·구분선"},{name:"menu_bordered · menu_compact · menu_dark",description:"스타일 변형"},{name:"is-active · is-disabled",description:"상태"},{name:"data-menu-selectable",description:"선택 가능 메뉴 JS"},...we],Ke=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"--menu-item-height · --menu-item-padding-x",default:"—",description:"항목 크기·패딩"},{name:"--menu-gap · --menu-radius",default:"—",description:"간격·모서리"},{name:"--menu-sub-indent",default:"—",description:"서브메뉴 들여쓰기"}],We=[{title:"API · Menu Props",tables:[{columns:D,rows:ze,codeColumn:"name"}]},{title:"API · MenuItem Props",tables:[{columns:Le,rows:He,codeColumn:"name"}]},{title:"API · MenuSubmenu Props",tables:[{columns:Ge,rows:Ve,codeColumn:"name"}]},{title:"API · MenuGroup Props",tables:[{columns:Re,rows:$e,codeColumn:"name"}]},{title:"API · Menu Slots",tables:[{columns:y,rows:Ne,codeColumn:"name"}]},{title:"API · MenuItem · MenuSubmenu Slots",tables:[{columns:qe,rows:Oe,codeColumn:"name"},{columns:Te,rows:je,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ue,rows:Je,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ke,rows:Qe,codeColumn:"name"}]}],on={title:"Components/네비게이션/Menu",id:"components-menu",component:n,subcomponents:{MenuItem:e,MenuGroup:l,MenuDivider:A,MenuSubmenu:o},tags:["autodocs"],argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"],type:{name:"enum",summary:"'vertical' | 'horizontal' | 'inline'"}},bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dark:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:We}},s={parameters:{controls:{disable:!1}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:(t,a)=>({components:{Menu:n,MenuItem:e,MenuDivider:A},setup(){return{args:ve(a)}},template:`<Menu v-bind="args">
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>`})},i={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current=&quot;page&quot;로 선택 항목을 표시합니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="주요 메뉴">
    <MenuItem label="대시보드" active />
    <MenuItem label="분석" />
    <MenuItem label="사용자" />
    <MenuItem label="설정" />
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuItem:e},template:`        <Menu mode="vertical" bordered aria-label="주요 메뉴">
        <MenuItem label="대시보드" active />
        <MenuItem label="분석" />
        <MenuItem label="사용자" />
        <MenuItem label="설정" />
        </Menu>`}))},c={name:"수평",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="horizontal" bordered aria-label="섹션 메뉴">
    <MenuItem label="개요" active />
    <MenuItem label="컴포넌트" />
    <MenuItem label="토큰" />
    <MenuItem label="접근성" />
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuItem:e},template:`        <Menu mode="horizontal" bordered aria-label="섹션 메뉴">
        <MenuItem label="개요" active />
        <MenuItem label="컴포넌트" />
        <MenuItem label="토큰" />
        <MenuItem label="접근성" />
        </Menu>`}))},d={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_icon으로 항목 앞에 아이콘을 배치합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="앱 메뉴">
    <MenuItem label="대시보드" active>
      <template #icon>
        <Icon name="grid" />
      </template>
    </MenuItem>
    <MenuItem label="사용자">
      <template #icon>
        <Icon name="user" />
      </template>
    </MenuItem>
    <MenuItem label="문서">
      <template #icon>
        <Icon name="book" />
      </template>
    </MenuItem>
    <MenuItem label="설정">
      <template #icon>
        <Icon name="settings" />
      </template>
    </MenuItem>
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Icon:_,Menu:n,MenuItem:e},template:`        <Menu mode="vertical" bordered aria-label="앱 메뉴">
        <MenuItem label="대시보드" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        </MenuItem>
        <MenuItem label="사용자">
        <template #icon>
        <Icon name="user" />
        </template>
        </MenuItem>
        <MenuItem label="문서">
        <template #icon>
        <Icon name="book" />
        </template>
        </MenuItem>
        <MenuItem label="설정">
        <template #icon>
        <Icon name="settings" />
        </template>
        </MenuItem>
        </Menu>`}))},p={name:"서브메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
import MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="컴포넌트 메뉴">
    <MenuItem label="홈" active>
      <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
      </template>
    </MenuItem>
    <MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components">
      <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      </template>
      <MenuItem label="Button" />
      <MenuItem label="Input" />
      <MenuItem label="Card" />
    </MenuSubmenu>
    <MenuSubmenu label="패턴" :expanded="false" submenu-id="menu-sub-patterns">
      <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      </template>
      <MenuItem label="폼 레이아웃" />
      <MenuItem label="데이터 테이블" />
    </MenuSubmenu>
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuItem:e,MenuSubmenu:o},template:`        <Menu mode="vertical" bordered aria-label="컴포넌트 메뉴">
        <MenuItem label="홈" active>
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
        </template>
        </MenuItem>
        <MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        </svg>
        </template>
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
        </MenuSubmenu>
        <MenuSubmenu label="패턴" :expanded="false" submenu-id="menu-sub-patterns">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
        </svg>
        </template>
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
        </MenuSubmenu>
        </Menu>`}))},C={name:"구분선 · 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuDivider from '@uxkm/ui/components/MenuDivider.vue';
import MenuGroup from '@uxkm/ui/components/MenuGroup.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="설정 메뉴">
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
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuDivider:A,MenuGroup:l,MenuItem:e},template:`        <Menu mode="vertical" bordered aria-label="설정 메뉴">
        <MenuGroup title="계정" />
        <MenuItem label="프로필" active />
        <MenuItem label="보안" />
        <MenuDivider />
        <MenuGroup title="앱" />
        <MenuItem label="알림" />
        <MenuItem label="언어" />
        <MenuDivider />
        <MenuItem label="로그아웃" />
        </Menu>`}))},M={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="권한 메뉴">
    <MenuItem label="조회" active />
    <MenuItem label="편집" />
    <MenuItem label="삭제" disabled />
    <MenuItem label="관리자 설정" disabled />
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuItem:e},template:`        <Menu mode="vertical" bordered aria-label="권한 메뉴">
        <MenuItem label="조회" active />
        <MenuItem label="편집" />
        <MenuItem label="삭제" disabled />
        <MenuItem label="관리자 설정" disabled />
        </Menu>`}))},b={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="알림 메뉴">
    <MenuItem label="받은편지함" active>
      <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </template>
      <template #extra>
        <Badge class="menu_extra" count color="primary">12</Badge>
      </template>
    </MenuItem>
    <MenuItem label="알림">
      <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
        </svg>
      </template>
      <template #extra>
        <Badge class="menu_extra" dot-only color="danger" aria-label="새 알림" />
      </template>
    </MenuItem>
    <MenuItem label="메시지">
      <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </template>
      <template #extra>
        <Badge class="menu_extra" color="default">Beta</Badge>
      </template>
    </MenuItem>
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Badge:Ie,Menu:n,MenuItem:e},template:`        <Menu mode="vertical" bordered aria-label="알림 메뉴">
        <MenuItem label="받은편지함" active>
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" count color="primary">12</Badge>
        </template>
        </MenuItem>
        <MenuItem label="알림">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" dot-only color="danger" aria-label="새 알림" />
        </template>
        </MenuItem>
        <MenuItem label="메시지">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" color="default">Beta</Badge>
        </template>
        </MenuItem>
        </Menu>`}))},B={name:"수평 · 서브메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
import MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';
<\/script>

<template>
  <Menu mode="horizontal" bordered aria-label="상단 메뉴">
    <MenuItem label="홈" active />
    <MenuSubmenu label="컴포넌트" :expanded="false" submenu-id="menu-sub-h-components">
      <MenuItem label="Button" />
      <MenuItem label="Input" />
      <MenuItem label="Select" />
    </MenuSubmenu>
    <MenuItem label="토큰" />
    <MenuItem label="접근성" />
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuItem:e,MenuSubmenu:o},template:`        <Menu mode="horizontal" bordered aria-label="상단 메뉴">
        <MenuItem label="홈" active />
        <MenuSubmenu label="컴포넌트" :expanded="false" submenu-id="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
        </MenuSubmenu>
        <MenuItem label="토큰" />
        <MenuItem label="접근성" />
        </Menu>`}))},v={name:"사이드바 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
import MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';
<\/script>

<template>
  <div class="menu_demo-row">
    <div class="menu_demo-sidebar">
      <Menu mode="vertical" bordered compact aria-label="앱 사이드바">
        <MenuItem label="개요" active>
          <template #icon>
            <Icon name="grid" />
          </template>
        </MenuItem>
        <MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar">
          <template #icon>
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6"/>
            </svg>
          </template>
          <MenuItem label="시작하기" />
          <MenuItem label="컴포넌트" />
        </MenuSubmenu>
        <MenuItem label="설정">
          <template #icon>
            <Icon name="settings" />
          </template>
        </MenuItem>
      </Menu>
    </div>
    <div class="menu_demo-content">
      <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
    </div>
  </div>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Icon:_,Menu:n,MenuItem:e,MenuSubmenu:o},template:`        <div class="menu_demo-row">
        <div class="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact aria-label="앱 사이드바">
        <MenuItem label="개요" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        </MenuItem>
        <MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        </svg>
        </template>
        <MenuItem label="시작하기" />
        <MenuItem label="컴포넌트" />
        </MenuSubmenu>
        <MenuItem label="설정">
        <template #icon>
        <Icon name="settings" />
        </template>
        </MenuItem>
        </Menu>
        </div>
        <div class="menu_demo-content">
        <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
        </div>
        </div>`}))},I={name:"변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"menu_compact · menu_dark로 밀도와 배경을 조절합니다."},source:{code:`<script setup>
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered compact aria-label="컴팩트 메뉴">
    <MenuItem label="항목 A" active />
    <MenuItem label="항목 B" />
    <MenuItem label="항목 C" />
  </Menu>
  <Menu mode="vertical" bordered dark aria-label="다크 서피스 메뉴">
    <MenuItem label="항목 A" active />
    <MenuItem label="항목 B" />
    <MenuItem label="항목 C" />
  </Menu>
</template>`,language:"vue"}}},args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:u(()=>({components:{Menu:n,MenuItem:e},template:`        <Menu mode="vertical" bordered compact aria-label="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
        </Menu>
        <Menu mode="vertical" bordered dark aria-label="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
        </Menu>`}))};var F,P,z;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: (_args, context) => ({
    components: {
      Menu,
      MenuItem,
      MenuDivider
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Menu v-bind="args">
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>\`
  })
}`,...(z=(P=s.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var L,H,G;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current=&quot;page&quot;로 선택 항목을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered aria-label=\\"주요 메뉴\\">\\n    <MenuItem label=\\"대시보드\\" active />\\n    <MenuItem label=\\"분석\\" />\\n    <MenuItem label=\\"사용자\\" />\\n    <MenuItem label=\\"설정\\" />\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuItem
    },
    template: \`        <Menu mode="vertical" bordered aria-label="주요 메뉴">
        <MenuItem label="대시보드" active />
        <MenuItem label="분석" />
        <MenuItem label="사용자" />
        <MenuItem label="설정" />
        </Menu>\`
  }))
}`,...(G=(H=i.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var V,R,$;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "수평",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"horizontal\\" bordered aria-label=\\"섹션 메뉴\\">\\n    <MenuItem label=\\"개요\\" active />\\n    <MenuItem label=\\"컴포넌트\\" />\\n    <MenuItem label=\\"토큰\\" />\\n    <MenuItem label=\\"접근성\\" />\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuItem
    },
    template: \`        <Menu mode="horizontal" bordered aria-label="섹션 메뉴">
        <MenuItem label="개요" active />
        <MenuItem label="컴포넌트" />
        <MenuItem label="토큰" />
        <MenuItem label="접근성" />
        </Menu>\`
  }))
}`,...($=(R=c.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var N,q,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_icon으로 항목 앞에 아이콘을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered aria-label=\\"앱 메뉴\\">\\n    <MenuItem label=\\"대시보드\\" active>\\n      <template #icon>\\n        <Icon name=\\"grid\\" />\\n      </template>\\n    </MenuItem>\\n    <MenuItem label=\\"사용자\\">\\n      <template #icon>\\n        <Icon name=\\"user\\" />\\n      </template>\\n    </MenuItem>\\n    <MenuItem label=\\"문서\\">\\n      <template #icon>\\n        <Icon name=\\"book\\" />\\n      </template>\\n    </MenuItem>\\n    <MenuItem label=\\"설정\\">\\n      <template #icon>\\n        <Icon name=\\"settings\\" />\\n      </template>\\n    </MenuItem>\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      Menu,
      MenuItem
    },
    template: \`        <Menu mode="vertical" bordered aria-label="앱 메뉴">
        <MenuItem label="대시보드" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        </MenuItem>
        <MenuItem label="사용자">
        <template #icon>
        <Icon name="user" />
        </template>
        </MenuItem>
        <MenuItem label="문서">
        <template #icon>
        <Icon name="book" />
        </template>
        </MenuItem>
        <MenuItem label="설정">
        <template #icon>
        <Icon name="settings" />
        </template>
        </MenuItem>
        </Menu>\`
  }))
}`,...(O=(q=d.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var T,j,U;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "서브메뉴",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\nimport MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered aria-label=\\"컴포넌트 메뉴\\">\\n    <MenuItem label=\\"홈\\" active>\\n      <template #icon>\\n        <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <path d=\\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\"/>\\n        </svg>\\n      </template>\\n    </MenuItem>\\n    <MenuSubmenu label=\\"컴포넌트\\" expanded submenu-id=\\"menu-sub-components\\">\\n      <template #icon>\\n        <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <rect x=\\"3\\" y=\\"3\\" width=\\"7\\" height=\\"7\\"/>\\n          <rect x=\\"14\\" y=\\"3\\" width=\\"7\\" height=\\"7\\"/>\\n          <rect x=\\"14\\" y=\\"14\\" width=\\"7\\" height=\\"7\\"/>\\n          <rect x=\\"3\\" y=\\"14\\" width=\\"7\\" height=\\"7\\"/>\\n        </svg>\\n      </template>\\n      <MenuItem label=\\"Button\\" />\\n      <MenuItem label=\\"Input\\" />\\n      <MenuItem label=\\"Card\\" />\\n    </MenuSubmenu>\\n    <MenuSubmenu label=\\"패턴\\" :expanded=\\"false\\" submenu-id=\\"menu-sub-patterns\\">\\n      <template #icon>\\n        <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <polygon points=\\"12 2 2 7 12 12 22 7 12 2\\"/>\\n          <polyline points=\\"2 17 12 22 22 17\\"/>\\n          <polyline points=\\"2 12 12 17 22 12\\"/>\\n        </svg>\\n      </template>\\n      <MenuItem label=\\"폼 레이아웃\\" />\\n      <MenuItem label=\\"데이터 테이블\\" />\\n    </MenuSubmenu>\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuItem,
      MenuSubmenu
    },
    template: \`        <Menu mode="vertical" bordered aria-label="컴포넌트 메뉴">
        <MenuItem label="홈" active>
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
        </template>
        </MenuItem>
        <MenuSubmenu label="컴포넌트" expanded submenu-id="menu-sub-components">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        </svg>
        </template>
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
        </MenuSubmenu>
        <MenuSubmenu label="패턴" :expanded="false" submenu-id="menu-sub-patterns">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
        </svg>
        </template>
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
        </MenuSubmenu>
        </Menu>\`
  }))
}`,...(U=(j=p.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "구분선 · 그룹",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuDivider from '@uxkm/ui/components/MenuDivider.vue';\\nimport MenuGroup from '@uxkm/ui/components/MenuGroup.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered aria-label=\\"설정 메뉴\\">\\n    <MenuGroup title=\\"계정\\" />\\n    <MenuItem label=\\"프로필\\" active />\\n    <MenuItem label=\\"보안\\" />\\n    <MenuDivider />\\n    <MenuGroup title=\\"앱\\" />\\n    <MenuItem label=\\"알림\\" />\\n    <MenuItem label=\\"언어\\" />\\n    <MenuDivider />\\n    <MenuItem label=\\"로그아웃\\" />\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuDivider,
      MenuGroup,
      MenuItem
    },
    template: \`        <Menu mode="vertical" bordered aria-label="설정 메뉴">
        <MenuGroup title="계정" />
        <MenuItem label="프로필" active />
        <MenuItem label="보안" />
        <MenuDivider />
        <MenuGroup title="앱" />
        <MenuItem label="알림" />
        <MenuItem label="언어" />
        <MenuDivider />
        <MenuItem label="로그아웃" />
        </Menu>\`
  }))
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Y;M.parameters={...M.parameters,docs:{...(W=M.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered aria-label=\\"권한 메뉴\\">\\n    <MenuItem label=\\"조회\\" active />\\n    <MenuItem label=\\"편집\\" />\\n    <MenuItem label=\\"삭제\\" disabled />\\n    <MenuItem label=\\"관리자 설정\\" disabled />\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuItem
    },
    template: \`        <Menu mode="vertical" bordered aria-label="권한 메뉴">
        <MenuItem label="조회" active />
        <MenuItem label="편집" />
        <MenuItem label="삭제" disabled />
        <MenuItem label="관리자 설정" disabled />
        </Menu>\`
  }))
}`,...(Y=(X=M.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "배지",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered aria-label=\\"알림 메뉴\\">\\n    <MenuItem label=\\"받은편지함\\" active>\\n      <template #icon>\\n        <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <path d=\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\"/>\\n          <polyline points=\\"22,6 12,13 2,6\\"/>\\n        </svg>\\n      </template>\\n      <template #extra>\\n        <Badge class=\\"menu_extra\\" count color=\\"primary\\">12</Badge>\\n      </template>\\n    </MenuItem>\\n    <MenuItem label=\\"알림\\">\\n      <template #icon>\\n        <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <path d=\\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z\\"/>\\n        </svg>\\n      </template>\\n      <template #extra>\\n        <Badge class=\\"menu_extra\\" dot-only color=\\"danger\\" aria-label=\\"새 알림\\" />\\n      </template>\\n    </MenuItem>\\n    <MenuItem label=\\"메시지\\">\\n      <template #icon>\\n        <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <path d=\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\"/>\\n        </svg>\\n      </template>\\n      <template #extra>\\n        <Badge class=\\"menu_extra\\" color=\\"default\\">Beta</Badge>\\n      </template>\\n    </MenuItem>\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge,
      Menu,
      MenuItem
    },
    template: \`        <Menu mode="vertical" bordered aria-label="알림 메뉴">
        <MenuItem label="받은편지함" active>
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" count color="primary">12</Badge>
        </template>
        </MenuItem>
        <MenuItem label="알림">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" dot-only color="danger" aria-label="새 알림" />
        </template>
        </MenuItem>
        <MenuItem label="메시지">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        </template>
        <template #extra>
        <Badge class="menu_extra" color="default">Beta</Badge>
        </template>
        </MenuItem>
        </Menu>\`
  }))
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ue,te,ae;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "수평 · 서브메뉴",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\nimport MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"horizontal\\" bordered aria-label=\\"상단 메뉴\\">\\n    <MenuItem label=\\"홈\\" active />\\n    <MenuSubmenu label=\\"컴포넌트\\" :expanded=\\"false\\" submenu-id=\\"menu-sub-h-components\\">\\n      <MenuItem label=\\"Button\\" />\\n      <MenuItem label=\\"Input\\" />\\n      <MenuItem label=\\"Select\\" />\\n    </MenuSubmenu>\\n    <MenuItem label=\\"토큰\\" />\\n    <MenuItem label=\\"접근성\\" />\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuItem,
      MenuSubmenu
    },
    template: \`        <Menu mode="horizontal" bordered aria-label="상단 메뉴">
        <MenuItem label="홈" active />
        <MenuSubmenu label="컴포넌트" :expanded="false" submenu-id="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
        </MenuSubmenu>
        <MenuItem label="토큰" />
        <MenuItem label="접근성" />
        </Menu>\`
  }))
}`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,le,re;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "사이드바 레이아웃",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\nimport MenuSubmenu from '@uxkm/ui/components/MenuSubmenu.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"menu_demo-row\\">\\n    <div class=\\"menu_demo-sidebar\\">\\n      <Menu mode=\\"vertical\\" bordered compact aria-label=\\"앱 사이드바\\">\\n        <MenuItem label=\\"개요\\" active>\\n          <template #icon>\\n            <Icon name=\\"grid\\" />\\n          </template>\\n        </MenuItem>\\n        <MenuSubmenu label=\\"문서\\" expanded submenu-id=\\"menu-sub-sidebar\\">\\n          <template #icon>\\n            <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/>\\n              <path d=\\"M14 2v6h6\\"/>\\n            </svg>\\n          </template>\\n          <MenuItem label=\\"시작하기\\" />\\n          <MenuItem label=\\"컴포넌트\\" />\\n        </MenuSubmenu>\\n        <MenuItem label=\\"설정\\">\\n          <template #icon>\\n            <Icon name=\\"settings\\" />\\n          </template>\\n        </MenuItem>\\n      </Menu>\\n    </div>\\n    <div class=\\"menu_demo-content\\">\\n      <p style=\\"margin: 0;\\">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      Menu,
      MenuItem,
      MenuSubmenu
    },
    template: \`        <div class="menu_demo-row">
        <div class="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact aria-label="앱 사이드바">
        <MenuItem label="개요" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        </MenuItem>
        <MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar">
        <template #icon>
        <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        </svg>
        </template>
        <MenuItem label="시작하기" />
        <MenuItem label="컴포넌트" />
        </MenuSubmenu>
        <MenuItem label="설정">
        <template #icon>
        <Icon name="settings" />
        </template>
        </MenuItem>
        </Menu>
        </div>
        <div class="menu_demo-content">
        <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
        </div>
        </div>\`
  }))
}`,...(re=(le=v.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var me,se,ie;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "변형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "menu_compact · menu_dark로 밀도와 배경을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Menu mode=\\"vertical\\" bordered compact aria-label=\\"컴팩트 메뉴\\">\\n    <MenuItem label=\\"항목 A\\" active />\\n    <MenuItem label=\\"항목 B\\" />\\n    <MenuItem label=\\"항목 C\\" />\\n  </Menu>\\n  <Menu mode=\\"vertical\\" bordered dark aria-label=\\"다크 서피스 메뉴\\">\\n    <MenuItem label=\\"항목 A\\" active />\\n    <MenuItem label=\\"항목 B\\" />\\n    <MenuItem label=\\"항목 C\\" />\\n  </Menu>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Menu,
      MenuItem
    },
    template: \`        <Menu mode="vertical" bordered compact aria-label="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
        </Menu>
        <Menu mode="vertical" bordered dark aria-label="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
        </Menu>\`
  }))
}`,...(ie=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const ln=["Playground","Basic","Horizontal","IconDemo","Submenu","Group","Disabled","BadgeDemo","HorizontalSubmenu","Layout","Variant"];export{b as BadgeDemo,i as Basic,M as Disabled,C as Group,c as Horizontal,B as HorizontalSubmenu,d as IconDemo,v as Layout,s as Playground,p as Submenu,I as Variant,ln as __namedExportsOrder,on as default};
