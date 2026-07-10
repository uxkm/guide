import{_ as e}from"./Menu-DBYlTFC4.js";import{_ as t}from"./Badge-CcXPSX6F.js";import{_ as n}from"./MenuDivider-BOpgaBsN.js";import{_ as a}from"./MenuGroup-DJS_jMhD.js";import{_ as u}from"./MenuItem-DlfmWCz0.js";import{_ as m}from"./MenuSubmenu-wUtT3vW1.js";import{_ as o}from"./Icon-D97OEunV.js";import{b as Z,a as ne}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";import"./Button-C3SXv-sJ.js";const I=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ue=[{name:"mode",type:"'vertical' | 'horizontal' | 'inline'",default:"vertical",description:"menu_vertical · menu_horizontal · menu_inline"},{name:"bordered",type:"boolean",default:"false",description:"menu_bordered"},{name:"compact",type:"boolean",default:"false",description:"menu_compact"},{name:"dark",type:"boolean",default:"false",description:"menu_dark"},{name:"aria-label",type:"string",default:"—",description:"nav aria-label"}],te=I,ae=[{name:"label",type:"string",default:"—",description:"항목 텍스트"},{name:"href",type:"string",default:"—",description:"링크 URL (a 태그)"},{name:"active",type:"boolean",default:"false",description:"is-active · aria-current"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"color",type:"string",default:"—",description:"color_* (예: danger)"},Z],me=I,oe=[{name:"label",type:"string",default:"—",description:"서브메뉴 제목"},{name:"expanded",type:"boolean",default:"false",description:"펼침 (aria-expanded)"},{name:"submenu-id",type:"string",default:"—",description:"menu_submenu id (aria-controls)"},Z],le=I,re=[{name:"title",type:"string",default:"—",description:"그룹 제목 (menu_group-title, 필수)"}],v=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ie=[{name:"default",description:"MenuItem · MenuSubmenu 등"}],se=v,ce=[{name:"icon",description:"menu_icon"},{name:"extra",description:"menu_extra (배지 등)"}],de=v,pe=[{name:"icon",description:"menu_icon"},{name:"default",description:"하위 MenuItem"}],Me=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ce=[{name:"menu · menu_list · menu_item · menu_link",description:"루트·목록·항목·링크"},{name:"menu_vertical · menu_horizontal · menu_inline",description:"배치 모드"},{name:"menu_icon · menu_label · menu_extra · menu_arrow",description:"항목 파트"},{name:"menu_item-submenu · menu_submenu",description:"서브메뉴"},{name:"menu_group · menu_group-title · menu_divider",description:"그룹·구분선"},{name:"menu_bordered · menu_compact · menu_dark",description:"스타일 변형"},{name:"is-active · is-disabled",description:"상태"},{name:"data-menu-selectable",description:"선택 가능 메뉴 JS"},...ne],be=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Be=[{name:"--menu-item-height · --menu-item-padding-x",default:"—",description:"항목 크기·패딩"},{name:"--menu-gap · --menu-radius",default:"—",description:"간격·모서리"},{name:"--menu-sub-indent",default:"—",description:"서브메뉴 들여쓰기"}],Ie=[{title:"API · Menu Props",tables:[{columns:I,rows:ue,codeColumn:"name"}]},{title:"API · MenuItem Props",tables:[{columns:te,rows:ae,codeColumn:"name"}]},{title:"API · MenuSubmenu Props",tables:[{columns:me,rows:oe,codeColumn:"name"}]},{title:"API · MenuGroup Props",tables:[{columns:le,rows:re,codeColumn:"name"}]},{title:"API · Menu Slots",tables:[{columns:v,rows:ie,codeColumn:"name"}]},{title:"API · MenuItem · MenuSubmenu Slots",tables:[{columns:se,rows:ce,codeColumn:"name"},{columns:de,rows:pe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Me,rows:Ce,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:be,rows:Be,codeColumn:"name"}]}],Ee={title:"Components/네비게이션/Menu",id:"components-menu",component:e,tags:["autodocs"],argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"],type:{name:"enum",summary:"'vertical' | 'horizontal' | 'inline'"}},bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dark:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"fullscreen",apiSections:Ie}},l={args:{mode:"vertical",bordered:!1,compact:!1,dark:!1,ariaLabel:"접근성 라벨"},render:ee=>({components:{Menu:e,MenuItem:u,MenuDivider:n},setup(){return{args:ee}},template:`<Menu v-bind="args">
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>`})},r={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current=&quot;page&quot;로 선택 항목을 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered aria-label="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>`})},i={name:"수평",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="horizontal" bordered aria-label="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>`})},s={name:"아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_icon으로 항목 앞에 아이콘을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered aria-label="앱 메뉴">
      <MenuItem label="대시보드" active>
        <template #icon><Icon name="grid" /></template>
      </MenuItem>
      <MenuItem label="사용자">
        <template #icon><Icon name="user" /></template>
      </MenuItem>
      <MenuItem label="문서">
        <template #icon><Icon name="book" /></template>
      </MenuItem>
      <MenuItem label="설정">
        <template #icon><Icon name="settings" /></template>
      </MenuItem>
    </Menu>`})},c={name:"서브메뉴",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered aria-label="컴포넌트 메뉴">
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
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
        </template>
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
      <MenuSubmenu label="패턴" :expanded="false" submenu-id="menu-sub-patterns">
        <template #icon>
          <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
          </svg>
        </template>
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
      </MenuSubmenu>
    </Menu>`})},d={name:"구분선 · 그룹",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered aria-label="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>`})},p={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered aria-label="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>`})},M={name:"배지",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered aria-label="알림 메뉴">
      <MenuItem label="받은편지함" active>
        <template #icon>
          <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
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
    </Menu>`})},C={name:"수평 · 서브메뉴",parameters:{demoPreview:{stack:!1},docs:{description:{story:"menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="horizontal" bordered aria-label="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" :expanded="false" submenu-id="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>`})},b={name:"사이드바 레이아웃",parameters:{demoPreview:{stack:!1},docs:{description:{story:"수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<div class="menu_demo-row">
      <div class="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact aria-label="앱 사이드바">
          <MenuItem label="개요" active>
            <template #icon><Icon name="grid" /></template>
          </MenuItem>
          <MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
              </svg>
            </template>
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정">
            <template #icon><Icon name="settings" /></template>
          </MenuItem>
        </Menu>
      </div>
      <div class="menu_demo-content">
        <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
      </div>
    </div>`})},B={name:"변형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"menu_compact · menu_dark로 밀도와 배경을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Menu:e,Badge:t,MenuDivider:n,MenuGroup:a,MenuItem:u,MenuSubmenu:m,Icon:o},template:`<Menu mode="vertical" bordered compact aria-label="컴팩트 메뉴">
      <MenuItem label="항목 A" active />
      <MenuItem label="항목 B" />
      <MenuItem label="항목 C" />
    </Menu>

    <Menu mode="vertical" bordered dark aria-label="다크 서피스 메뉴">
      <MenuItem label="항목 A" active />
      <MenuItem label="항목 B" />
      <MenuItem label="항목 C" />
    </Menu>`})};var D,g,h;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    mode: "vertical",
    bordered: false,
    compact: false,
    dark: false,
    ariaLabel: "접근성 라벨"
  },
  render: args => ({
    components: {
      Menu,
      MenuItem,
      MenuDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Menu v-bind="args">
      <MenuItem label="항목 1" />
      <MenuItem label="항목 2" />
      <MenuDivider />
      <MenuItem label="항목 3" />
    </Menu>\`
  })
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,k,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered aria-label="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>\`
  })
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,_,w;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "수평",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="horizontal" bordered aria-label="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>\`
  })
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var y,S,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered aria-label="앱 메뉴">
      <MenuItem label="대시보드" active>
        <template #icon><Icon name="grid" /></template>
      </MenuItem>
      <MenuItem label="사용자">
        <template #icon><Icon name="user" /></template>
      </MenuItem>
      <MenuItem label="문서">
        <template #icon><Icon name="book" /></template>
      </MenuItem>
      <MenuItem label="설정">
        <template #icon><Icon name="settings" /></template>
      </MenuItem>
    </Menu>\`
  })
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var P,z,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "서브메뉴",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered aria-label="컴포넌트 메뉴">
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
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
        </template>
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
      <MenuSubmenu label="패턴" :expanded="false" submenu-id="menu-sub-patterns">
        <template #icon>
          <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
          </svg>
        </template>
        <MenuItem label="폼 레이아웃" />
        <MenuItem label="데이터 테이블" />
      </MenuSubmenu>
    </Menu>\`
  })
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,H,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "구분선 · 그룹",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered aria-label="설정 메뉴">
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
  })
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var L,$,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered aria-label="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>\`
  })
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var T,O,R;M.parameters={...M.parameters,docs:{...(T=M.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "배지",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered aria-label="알림 메뉴">
      <MenuItem label="받은편지함" active>
        <template #icon>
          <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
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
  })
}`,...(R=(O=M.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var J,U,j;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "수평 · 서브메뉴",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="horizontal" bordered aria-label="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" :expanded="false" submenu-id="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>\`
  })
}`,...(j=(U=C.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var K,N,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "사이드바 레이아웃",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<div class="menu_demo-row">
      <div class="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact aria-label="앱 사이드바">
          <MenuItem label="개요" active>
            <template #icon><Icon name="grid" /></template>
          </MenuItem>
          <MenuSubmenu label="문서" expanded submenu-id="menu-sub-sidebar">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
              </svg>
            </template>
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정">
            <template #icon><Icon name="settings" /></template>
          </MenuItem>
        </Menu>
      </div>
      <div class="menu_demo-content">
        <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
      </div>
    </div>\`
  })
}`,...(Q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "변형",
  parameters: {
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
  render: () => ({
    components: {
      Menu,
      Badge,
      MenuDivider,
      MenuGroup,
      MenuItem,
      MenuSubmenu,
      Icon
    },
    template: \`<Menu mode="vertical" bordered compact aria-label="컴팩트 메뉴">
      <MenuItem label="항목 A" active />
      <MenuItem label="항목 B" />
      <MenuItem label="항목 C" />
    </Menu>

    <Menu mode="vertical" bordered dark aria-label="다크 서피스 메뉴">
      <MenuItem label="항목 A" active />
      <MenuItem label="항목 B" />
      <MenuItem label="항목 C" />
    </Menu>\`
  })
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Pe=["Playground","Basic","Horizontal","IconDemo","Submenu","Group","Disabled","BadgeDemo","HorizontalSubmenu","Layout","Variant"];export{M as BadgeDemo,r as Basic,p as Disabled,d as Group,i as Horizontal,C as HorizontalSubmenu,s as IconDemo,b as Layout,l as Playground,c as Submenu,B as Variant,Pe as __namedExportsOrder,Ee as default};
