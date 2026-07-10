import{b as pe,c as ie,k as f,r as _,A as se,n as de,m as ce,f as s,o as Ce,a as Be}from"./vue.esm-bundler-BaZlnz8B.js";import{l as De}from"./useDemoCode-B9b0dRAo.js";import{t as x}from"./table-column-sizing-DuAoVyeb.js";import{_ as o}from"./Avatar-De5lKVUK.js";import{_ as a}from"./Badge-CcXPSX6F.js";import{_ as u}from"./Button-C3SXv-sJ.js";import{_ as r}from"./Icon-D97OEunV.js";import{_ as l}from"./Menu-DBYlTFC4.js";import{_ as m}from"./MenuDivider-BOpgaBsN.js";import{_ as p}from"./MenuItem-DlfmWCz0.js";import"./useRipple-oORGvIsP.js";const Me={"data-demo-slot":"trigger"},t=Object.assign({inheritAttrs:!1},{__name:"Dropdown",props:{open:Boolean,disabled:Boolean,placement:String,fit:Boolean,maxVisibleItems:Number,menuWidth:[String,Number],menuMinWidth:[String,Number]},setup(I){const n=I,i=pe(),A=Be(null),oe=`dropdown-menu-${Math.random().toString(36).slice(2,9)}`;De(n,A,i);const ae=s(()=>{const e=["dropdown"];return n.open&&e.push("is-open"),n.disabled&&e.push("is-disabled"),n.placement==="end"&&e.push("dropdown_placement-end"),n.placement==="top"&&e.push("dropdown_placement-top"),n.fit&&e.push("dropdown_fit"),i.class&&e.push(i.class),e}),re=s(()=>{const{class:e,...h}=i;return h}),le=s(()=>{const e=["dropdown_menu"];return n.maxVisibleItems!=null&&e.push("dropdown_menu-scrollable"),e}),me=s(()=>{const e={};return n.maxVisibleItems!=null&&(e["--dropdown-max-visible-items"]=n.maxVisibleItems),n.menuWidth!=null&&(e.width=x(n.menuWidth)),n.menuMinWidth!=null&&(e.minWidth=x(n.menuMinWidth)),e});return(e,h)=>(Ce(),ie("div",ce({ref_key:"rootRef",ref:A,class:ae.value,"data-dropdown":""},re.value),[f("div",Me,[_(e.$slots,"trigger")]),f("div",{id:oe,class:de(le.value),style:se(me.value),role:"menu","data-demo-slot":"default"},[_(e.$slots,"default")],6)],16))}}),ge=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ve=[{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"placement",type:"'end' | 'top'",default:"—",description:"dropdown_placement-end · dropdown_placement-top"},{name:"fit",type:"boolean",default:"false",description:"dropdown_fit — 트리거 너비 맞춤"},{name:"maxVisibleItems",type:"number",default:"—",description:"패널에 보이는 최대 항목 수. 초과 시 dropdown_menu-scrollable로 목록 스크롤"},{name:"menuWidth",type:"string | number",default:"—",description:"패널 가로 너비 (숫자는 rem)"},{name:"menuMinWidth",type:"string | number",default:"—",description:"패널 최소 가로 너비 (숫자는 rem)"}],be=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],we=[{name:"trigger",description:"트리거 버튼·링크 (dropdown_trigger)"},{name:"default",description:"메뉴 패널 (dropdown_menu, 보통 Menu)"}],Ie=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ae=[{name:"dropdown · dropdown_menu",description:"루트·메뉴 패널"},{name:"dropdown_placement-end · dropdown_placement-top · dropdown_fit",description:"배치·너비"},{name:"dropdown_menu-scrollable",description:"maxVisibleItems 지정 시 — menu_list 스크롤"},{name:"data-dropdown · data-dropdown-close-on-select",description:"JS 연동"},{name:"is-open · is-disabled",description:"상태"},{name:'role="menu"',description:"메뉴 시맨틱"}],he=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fe=[{name:"--dropdown-min-width · --dropdown-menu-width",default:"10rem · auto",description:"패널 최소·기본 너비"},{name:"--dropdown-offset",default:"—",description:"트리거와 패널 간격"},{name:"--dropdown-max-visible-items",default:"—",description:"maxVisibleItems prop으로 주입 — 스크롤 높이 계산"},{name:"--dropdown-item-line-height",default:"1.4",description:"항목 높이 계산용 줄 높이"},{name:"--z-dropdown",default:"100",description:"레이어 순서"}],_e=[{title:"API · Props",tables:[{columns:ge,rows:ve,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:be,rows:we,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ie,rows:Ae,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:he,rows:fe,codeColumn:"name"}]}],We={title:"Components/네비게이션/Dropdown",id:"components-dropdown",component:t,tags:["autodocs"],argTypes:{open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placement:{control:"select",options:["end","top"],type:{name:"enum",summary:"'end' | 'top'"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},maxVisibleItems:{control:"number",type:{name:"number",summary:"number"}}},parameters:{layout:"padded",apiSections:_e}},d={args:{open:!0,disabled:!1,placement:"bottom",fit:!1,maxVisibleItems:1},render:I=>({components:{Dropdown:t,Button:u},setup(){return{args:I}},template:`<Dropdown v-bind="args" open>
      <template #trigger><Button label="드롭다운" variant="outline" /></template>
      <a href="#" class="dropdown_item" role="menuitem">항목 1</a>
      <a href="#" class="dropdown_item" role="menuitem">항목 2</a>
    </Dropdown>`})},c={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Dropdown>
    <template #trigger>
      <Button variant="outline" class="dropdown_trigger" label="작업" aria-haspopup="menu" />
    </template>
    <Menu mode="vertical" compact aria-label="작업 메뉴">
      <MenuItem label="복사" />
      <MenuItem label="이동" />
      <MenuItem label="공유" />
    </Menu>
  </Dropdown>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<Dropdown>
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" label="작업" aria-haspopup="menu" />
      </template>
      <Menu mode="vertical" compact aria-label="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </Menu>
    </Dropdown>`})},C={name:"열린 상태",parameters:{demoPreview:{stack:!1},docs:{description:{story:"is-open 클래스와 aria-expanded=&quot;true&quot;로 패널이 열린 상태를 표현합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Dropdown open>
    <template #trigger>
      <Button variant="filled" color="primary" class="dropdown_trigger" label="카테고리" aria-haspopup="menu" aria-expanded="true" />
    </template>
    <Menu mode="vertical" compact aria-label="카테고리">
      <MenuItem label="전체" active />
      <MenuItem label="디자인" />
      <MenuItem label="개발" />
      <MenuItem label="마케팅" />
    </Menu>
  </Dropdown>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<Dropdown open>
      <template #trigger>
        <Button variant="filled" color="primary" class="dropdown_trigger" label="카테고리" aria-haspopup="menu" aria-expanded="true" />
      </template>
      <Menu mode="vertical" compact aria-label="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </Menu>
    </Dropdown>`})},B={name:"트리거 유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <div class="dropdown_row">
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목 1" />
        <MenuItem label="항목 2" />
      </Menu>
    </Dropdown>
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목 1" />
        <MenuItem label="항목 2" />
      </Menu>
    </Dropdown>
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목 1" />
        <MenuItem label="항목 2" />
      </Menu>
    </Dropdown>
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" select-caret />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목 1" />
        <MenuItem label="항목 2" />
      </Menu>
    </Dropdown>
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="ghost" icon-only aria-label="더보기" haspopup="menu">
          <template #icon-before>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
            </svg>
          </template>
        </Button>
      </template>
      <Menu mode="vertical" compact aria-label="더보기">
        <MenuItem label="편집" />
        <MenuItem label="복제" />
        <MenuItem label="삭제" color="danger" />
      </Menu>
    </Dropdown>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<div class="dropdown_row">
      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" icon-only aria-label="더보기" haspopup="menu">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
              </svg>
            </template>
          </Button>
        </template>
        <Menu mode="vertical" compact aria-label="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </Menu>
      </Dropdown>
    </div>`})},D={name:"셀렉트 트리거",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <div class="dropdown_row">
    <Dropdown fit>
      <template #trigger>
        <Button class="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
      </template>
      <Menu mode="vertical" compact aria-label="지역 선택">
        <MenuItem label="서울특별시" active />
        <MenuItem label="부산광역시" />
        <MenuItem label="대구광역시" />
        <MenuItem label="인천광역시" />
      </Menu>
    </Dropdown>
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="select" select-text label="최신순" haspopup="listbox" />
      </template>
      <Menu mode="vertical" compact aria-label="정렬">
        <MenuItem label="최신순" active />
        <MenuItem label="인기순" />
        <MenuItem label="가격 낮은순" />
        <MenuItem label="가격 높은순" />
      </Menu>
    </Dropdown>
  </div>
  <p class="form_field-hint">btn_select 상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<div class="dropdown_row">
      <Dropdown fit>
        <template #trigger>
          <Button class="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
        </template>
        <Menu mode="vertical" compact aria-label="지역 선택">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="select" select-text label="최신순" haspopup="listbox" />
        </template>
        <Menu mode="vertical" compact aria-label="정렬">
          <MenuItem label="최신순" active />
          <MenuItem label="인기순" />
          <MenuItem label="가격 낮은순" />
          <MenuItem label="가격 높은순" />
        </Menu>
      </Dropdown>
    </div>

    <p class="form_field-hint">btn_select 상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>`})},M={name:"정렬",parameters:{demoPreview:{stack:!0},docs:{description:{story:"dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <div class="dropdown_row" style="width: 100%; justify-content: space-between;">
    <Dropdown>
      <template #trigger>
        <Button class="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" select-caret />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목 A" />
        <MenuItem label="항목 B" />
      </Menu>
    </Dropdown>
    <Dropdown placement="end">
      <template #trigger>
        <Button class="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" select-caret />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목 A" />
        <MenuItem label="항목 B" />
      </Menu>
    </Dropdown>
  </div>
  <div style="display: flex; justify-content: center; padding-top: 6rem;">
    <Dropdown placement="top">
      <template #trigger>
        <Button class="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" select-caret />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="위쪽 패널" />
        <MenuItem label="항목 2" />
      </Menu>
    </Dropdown>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<div class="dropdown_row" style="width: 100%; justify-content: space-between;">
      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>

      <Dropdown placement="end">
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>
    </div>

    <div style="display: flex; justify-content: center; padding-top: 6rem;">
      <Dropdown placement="top">
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="위쪽 패널" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
    </div>`})},g={name:"메뉴 구성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <Dropdown open>
    <template #trigger>
      <Button class="dropdown_trigger" variant="outline" label="계정" haspopup="menu" :expanded="true" select-caret />
    </template>
    <nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴">
      <ul class="menu_list" role="none">
        <li class="menu_group" role="presentation">
          <span class="menu_group-title">계정</span>
        </li>
        <MenuItem label="프로필">
          <template #icon>
            <Icon name="user" />
          </template>
        </MenuItem>
        <MenuItem label="보안">
          <template #icon>
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </template>
        </MenuItem>
        <li class="menu_divider" role="separator" />
        <li class="menu_group" role="presentation">
          <span class="menu_group-title">앱</span>
        </li>
        <MenuItem label="알림">
          <template #icon>
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
            </svg>
          </template>
          <template #extra>
            <Badge class="menu_extra" count color="primary">3</Badge>
          </template>
        </MenuItem>
        <MenuItem label="설정">
          <template #icon>
            <Icon name="settings" />
          </template>
        </MenuItem>
        <li class="menu_divider" role="separator" />
        <MenuItem label="로그아웃" color="danger" />
      </ul>
    </nav>
  </Dropdown>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<Dropdown open>
      <template #trigger>
        <Button class="dropdown_trigger" variant="outline" label="계정" haspopup="menu" :expanded="true" select-caret />
      </template>
      <nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴">
        <ul class="menu_list" role="none">
          <li class="menu_group" role="presentation">
            <span class="menu_group-title">계정</span>
          </li>
          <MenuItem label="프로필">
            <template #icon><Icon name="user" /></template>
          </MenuItem>
          <MenuItem label="보안">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </template>
          </MenuItem>
          <li class="menu_divider" role="separator" />
          <li class="menu_group" role="presentation">
            <span class="menu_group-title">앱</span>
          </li>
          <MenuItem label="알림">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
              </svg>
            </template>
            <template #extra>
              <Badge class="menu_extra" count color="primary">3</Badge>
            </template>
          </MenuItem>
          <MenuItem label="설정">
            <template #icon><Icon name="settings" /></template>
          </MenuItem>
          <li class="menu_divider" role="separator" />
          <MenuItem label="로그아웃" color="danger" />
        </ul>
      </nav>
    </Dropdown>`})},v={name:"스크롤 · 너비",parameters:{demoPreview:{stack:!0},docs:{description:{story:"maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <div class="dropdown_row">
    <Dropdown open :max-visible-items="4">
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" label="도시 선택" haspopup="listbox" :expanded="true" select-caret />
      </template>
      <Menu mode="vertical" compact aria-label="도시 목록">
        <MenuItem label="서울특별시" active />
        <MenuItem label="부산광역시" />
        <MenuItem label="대구광역시" />
        <MenuItem label="인천광역시" />
        <MenuItem label="광주광역시" />
        <MenuItem label="대전광역시" />
        <MenuItem label="울산광역시" />
        <MenuItem label="세종특별자치시" />
      </Menu>
    </Dropdown>
    <Dropdown open :max-visible-items="4" :menu-width="18">
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" label="넓은 패널" haspopup="menu" :expanded="true" select-caret />
      </template>
      <Menu mode="vertical" compact aria-label="긴 라벨 메뉴">
        <MenuItem label="프로젝트 대시보드" />
        <MenuItem label="팀 협업 워크스페이스" />
        <MenuItem label="문서 보관함 및 템플릿" />
        <MenuItem label="알림 및 활동 기록" />
        <MenuItem label="계정 및 보안 설정" />
        <MenuItem label="결제 및 구독 관리" />
      </Menu>
    </Dropdown>
  </div>
  <p class="form_field-hint">HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와 <code>style="--dropdown-max-visible-items: 4"</code>로 동일하게 적용합니다.</p>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<div class="dropdown_row">
      <Dropdown open :max-visible-items="4">
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="도시 선택" haspopup="listbox" :expanded="true" select-caret />
        </template>
        <Menu mode="vertical" compact aria-label="도시 목록">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
          <MenuItem label="광주광역시" />
          <MenuItem label="대전광역시" />
          <MenuItem label="울산광역시" />
          <MenuItem label="세종특별자치시" />
        </Menu>
      </Dropdown>

      <Dropdown open :max-visible-items="4" :menu-width="18">
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="넓은 패널" haspopup="menu" :expanded="true" select-caret />
        </template>
        <Menu mode="vertical" compact aria-label="긴 라벨 메뉴">
          <MenuItem label="프로젝트 대시보드" />
          <MenuItem label="팀 협업 워크스페이스" />
          <MenuItem label="문서 보관함 및 템플릿" />
          <MenuItem label="알림 및 활동 기록" />
          <MenuItem label="계정 및 보안 설정" />
          <MenuItem label="결제 및 구독 관리" />
        </Menu>
      </Dropdown>
    </div>

    <p class="form_field-hint">HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와 <code>style="--dropdown-max-visible-items: 4"</code>로 동일하게 적용합니다.</p>`})},b={name:"비활성",parameters:{demoPreview:{stack:!0},docs:{description:{story:"dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <div class="dropdown_row">
    <Dropdown disabled>
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="항목" />
      </Menu>
    </Dropdown>
    <Dropdown open>
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" label="일부 비활성" haspopup="menu" :expanded="true" />
      </template>
      <Menu mode="vertical" compact>
        <MenuItem label="조회" />
        <MenuItem label="편집" />
        <MenuItem label="삭제" disabled />
        <MenuItem label="관리자 설정" disabled />
      </Menu>
    </Dropdown>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<div class="dropdown_row">
      <Dropdown disabled>
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목" />
        </Menu>
      </Dropdown>

      <Dropdown open>
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="일부 비활성" haspopup="menu" :expanded="true" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </Menu>
      </Dropdown>
    </div>`})},w={name:"조합 예시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. data-dropdown으로 클릭·Esc·외부 클릭 시 닫힙니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuDivider from '@uxkm/ui/components/MenuDivider.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
<\/script>

<template>
  <div class="dropdown_demo-toolbar">
    <Button variant="ghost" size="sm">
      <template #icon-before>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
        </svg>
      </template>
      알림
      <Badge count size="sm" color="danger" aria-label="읽지 않은 알림 2건">2</Badge>
    </Button>
    <Dropdown placement="end" data-dropdown-close-on-select>
      <template #trigger>
        <Button variant="ghost" size="sm" class="dropdown_trigger" haspopup="menu" select-caret>
          <Avatar size="sm" color="primary" initials="김" aria-hidden />
          김가이드
        </Button>
      </template>
      <Menu mode="vertical" compact aria-label="사용자 메뉴">
        <MenuItem label="내 프로필">
          <template #icon>
            <Icon name="user" />
          </template>
        </MenuItem>
        <MenuItem label="내 문서">
          <template #icon>
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6"/>
            </svg>
          </template>
        </MenuItem>
        <MenuDivider />
        <MenuItem label="로그아웃" color="danger" />
      </Menu>
    </Dropdown>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Dropdown:t,Avatar:o,Badge:a,Button:u,Icon:r,Menu:l,MenuDivider:m,MenuItem:p},template:`<div class="dropdown_demo-toolbar">
      <Button variant="ghost" size="sm">
        <template #icon-before>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
          </svg>
        </template>
        알림
        <Badge count size="sm" color="danger" aria-label="읽지 않은 알림 2건">2</Badge>
      </Button>

      <Dropdown placement="end" data-dropdown-close-on-select>
        <template #trigger>
          <Button variant="ghost" size="sm" class="dropdown_trigger" haspopup="menu" select-caret>
            <Avatar size="sm" color="primary" initials="김" aria-hidden />
            김가이드
          </Button>
        </template>
        <Menu mode="vertical" compact aria-label="사용자 메뉴">
          <MenuItem label="내 프로필">
            <template #icon><Icon name="user" /></template>
          </MenuItem>
          <MenuItem label="내 문서">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
              </svg>
            </template>
          </MenuItem>
          <MenuDivider />
          <MenuItem label="로그아웃" color="danger" />
        </Menu>
      </Dropdown>
    </div>`})};var k,y,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    open: true,
    disabled: false,
    placement: "bottom",
    fit: false,
    maxVisibleItems: 1
  },
  render: args => ({
    components: {
      Dropdown,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Dropdown v-bind="args" open>
      <template #trigger><Button label="드롭다운" variant="outline" /></template>
      <a href="#" class="dropdown_item" role="menuitem">항목 1</a>
      <a href="#" class="dropdown_item" role="menuitem">항목 2</a>
    </Dropdown>\`
  })
}`,...(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var F,z,S;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Dropdown>\\n    <template #trigger>\\n      <Button variant=\\"outline\\" class=\\"dropdown_trigger\\" label=\\"작업\\" aria-haspopup=\\"menu\\" />\\n    </template>\\n    <Menu mode=\\"vertical\\" compact aria-label=\\"작업 메뉴\\">\\n      <MenuItem label=\\"복사\\" />\\n      <MenuItem label=\\"이동\\" />\\n      <MenuItem label=\\"공유\\" />\\n    </Menu>\\n  </Dropdown>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<Dropdown>
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" label="작업" aria-haspopup="menu" />
      </template>
      <Menu mode="vertical" compact aria-label="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </Menu>
    </Dropdown>\`
  })
}`,...(S=(z=c.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var V,P,H;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "열린 상태",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "is-open 클래스와 aria-expanded=&quot;true&quot;로 패널이 열린 상태를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Dropdown open>\\n    <template #trigger>\\n      <Button variant=\\"filled\\" color=\\"primary\\" class=\\"dropdown_trigger\\" label=\\"카테고리\\" aria-haspopup=\\"menu\\" aria-expanded=\\"true\\" />\\n    </template>\\n    <Menu mode=\\"vertical\\" compact aria-label=\\"카테고리\\">\\n      <MenuItem label=\\"전체\\" active />\\n      <MenuItem label=\\"디자인\\" />\\n      <MenuItem label=\\"개발\\" />\\n      <MenuItem label=\\"마케팅\\" />\\n    </Menu>\\n  </Dropdown>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<Dropdown open>
      <template #trigger>
        <Button variant="filled" color="primary" class="dropdown_trigger" label="카테고리" aria-haspopup="menu" aria-expanded="true" />
      </template>
      <Menu mode="vertical" compact aria-label="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </Menu>
    </Dropdown>\`
  })
}`,...(H=(P=C.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var T,W,O;B.parameters={...B.parameters,docs:{...(T=B.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "트리거 유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"dropdown_row\\">\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"filled\\" color=\\"primary\\" label=\\"Filled\\" haspopup=\\"menu\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목 1\\" />\\n        <MenuItem label=\\"항목 2\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"outline\\" label=\\"Outline\\" haspopup=\\"menu\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목 1\\" />\\n        <MenuItem label=\\"항목 2\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"ghost\\" label=\\"Ghost\\" haspopup=\\"menu\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목 1\\" />\\n        <MenuItem label=\\"항목 2\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"text\\" color=\\"primary\\" label=\\"Text\\" haspopup=\\"menu\\" select-caret />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목 1\\" />\\n        <MenuItem label=\\"항목 2\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"ghost\\" icon-only aria-label=\\"더보기\\" haspopup=\\"menu\\">\\n          <template #icon-before>\\n            <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/>\\n              <circle cx=\\"19\\" cy=\\"12\\" r=\\"1\\"/>\\n              <circle cx=\\"5\\" cy=\\"12\\" r=\\"1\\"/>\\n            </svg>\\n          </template>\\n        </Button>\\n      </template>\\n      <Menu mode=\\"vertical\\" compact aria-label=\\"더보기\\">\\n        <MenuItem label=\\"편집\\" />\\n        <MenuItem label=\\"복제\\" />\\n        <MenuItem label=\\"삭제\\" color=\\"danger\\" />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<div class="dropdown_row">
      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" icon-only aria-label="더보기" haspopup="menu">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
              </svg>
            </template>
          </Button>
        </template>
        <Menu mode="vertical" compact aria-label="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </Menu>
      </Dropdown>
    </div>\`
  })
}`,...(O=(W=B.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var $,j,L;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "셀렉트 트리거",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"dropdown_row\\">\\n    <Dropdown fit>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"select\\" label=\\"서울특별시\\" haspopup=\\"listbox\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact aria-label=\\"지역 선택\\">\\n        <MenuItem label=\\"서울특별시\\" active />\\n        <MenuItem label=\\"부산광역시\\" />\\n        <MenuItem label=\\"대구광역시\\" />\\n        <MenuItem label=\\"인천광역시\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"select\\" select-text label=\\"최신순\\" haspopup=\\"listbox\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact aria-label=\\"정렬\\">\\n        <MenuItem label=\\"최신순\\" active />\\n        <MenuItem label=\\"인기순\\" />\\n        <MenuItem label=\\"가격 낮은순\\" />\\n        <MenuItem label=\\"가격 높은순\\" />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n  <p class=\\"form_field-hint\\">btn_select 상세 변형은 <a href=\\"button.html#type-select-heading\\">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<div class="dropdown_row">
      <Dropdown fit>
        <template #trigger>
          <Button class="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
        </template>
        <Menu mode="vertical" compact aria-label="지역 선택">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="select" select-text label="최신순" haspopup="listbox" />
        </template>
        <Menu mode="vertical" compact aria-label="정렬">
          <MenuItem label="최신순" active />
          <MenuItem label="인기순" />
          <MenuItem label="가격 낮은순" />
          <MenuItem label="가격 높은순" />
        </Menu>
      </Dropdown>
    </div>

    <p class="form_field-hint">btn_select 상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>\`
  })
}`,...(L=(j=D.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var q,G,N;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "정렬",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"dropdown_row\\" style=\\"width: 100%; justify-content: space-between;\\">\\n    <Dropdown>\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"outline\\" label=\\"왼쪽 정렬\\" haspopup=\\"menu\\" select-caret />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목 A\\" />\\n        <MenuItem label=\\"항목 B\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown placement=\\"end\\">\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"outline\\" label=\\"오른쪽 정렬\\" haspopup=\\"menu\\" select-caret />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목 A\\" />\\n        <MenuItem label=\\"항목 B\\" />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n  <div style=\\"display: flex; justify-content: center; padding-top: 6rem;\\">\\n    <Dropdown placement=\\"top\\">\\n      <template #trigger>\\n        <Button class=\\"dropdown_trigger\\" variant=\\"ghost\\" label=\\"위로 열기\\" haspopup=\\"menu\\" select-caret />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"위쪽 패널\\" />\\n        <MenuItem label=\\"항목 2\\" />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<div class="dropdown_row" style="width: 100%; justify-content: space-between;">
      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>

      <Dropdown placement="end">
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>
    </div>

    <div style="display: flex; justify-content: center; padding-top: 6rem;">
      <Dropdown placement="top">
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="위쪽 패널" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
    </div>\`
  })
}`,...(N=(G=M.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var R,J,K;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "메뉴 구성",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <Dropdown open>\\n    <template #trigger>\\n      <Button class=\\"dropdown_trigger\\" variant=\\"outline\\" label=\\"계정\\" haspopup=\\"menu\\" :expanded=\\"true\\" select-caret />\\n    </template>\\n    <nav class=\\"menu menu_vertical menu_compact\\" aria-label=\\"계정 메뉴\\">\\n      <ul class=\\"menu_list\\" role=\\"none\\">\\n        <li class=\\"menu_group\\" role=\\"presentation\\">\\n          <span class=\\"menu_group-title\\">계정</span>\\n        </li>\\n        <MenuItem label=\\"프로필\\">\\n          <template #icon>\\n            <Icon name=\\"user\\" />\\n          </template>\\n        </MenuItem>\\n        <MenuItem label=\\"보안\\">\\n          <template #icon>\\n            <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <rect x=\\"3\\" y=\\"11\\" width=\\"18\\" height=\\"11\\" rx=\\"2\\" ry=\\"2\\"/>\\n              <path d=\\"M7 11V7a5 5 0 0 1 10 0v4\\"/>\\n            </svg>\\n          </template>\\n        </MenuItem>\\n        <li class=\\"menu_divider\\" role=\\"separator\\" />\\n        <li class=\\"menu_group\\" role=\\"presentation\\">\\n          <span class=\\"menu_group-title\\">앱</span>\\n        </li>\\n        <MenuItem label=\\"알림\\">\\n          <template #icon>\\n            <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <path d=\\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z\\"/>\\n            </svg>\\n          </template>\\n          <template #extra>\\n            <Badge class=\\"menu_extra\\" count color=\\"primary\\">3</Badge>\\n          </template>\\n        </MenuItem>\\n        <MenuItem label=\\"설정\\">\\n          <template #icon>\\n            <Icon name=\\"settings\\" />\\n          </template>\\n        </MenuItem>\\n        <li class=\\"menu_divider\\" role=\\"separator\\" />\\n        <MenuItem label=\\"로그아웃\\" color=\\"danger\\" />\\n      </ul>\\n    </nav>\\n  </Dropdown>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<Dropdown open>
      <template #trigger>
        <Button class="dropdown_trigger" variant="outline" label="계정" haspopup="menu" :expanded="true" select-caret />
      </template>
      <nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴">
        <ul class="menu_list" role="none">
          <li class="menu_group" role="presentation">
            <span class="menu_group-title">계정</span>
          </li>
          <MenuItem label="프로필">
            <template #icon><Icon name="user" /></template>
          </MenuItem>
          <MenuItem label="보안">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </template>
          </MenuItem>
          <li class="menu_divider" role="separator" />
          <li class="menu_group" role="presentation">
            <span class="menu_group-title">앱</span>
          </li>
          <MenuItem label="알림">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
              </svg>
            </template>
            <template #extra>
              <Badge class="menu_extra" count color="primary">3</Badge>
            </template>
          </MenuItem>
          <MenuItem label="설정">
            <template #icon><Icon name="settings" /></template>
          </MenuItem>
          <li class="menu_divider" role="separator" />
          <MenuItem label="로그아웃" color="danger" />
        </ul>
      </nav>
    </Dropdown>\`
  })
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "스크롤 · 너비",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"dropdown_row\\">\\n    <Dropdown open :max-visible-items=\\"4\\">\\n      <template #trigger>\\n        <Button variant=\\"outline\\" class=\\"dropdown_trigger\\" label=\\"도시 선택\\" haspopup=\\"listbox\\" :expanded=\\"true\\" select-caret />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact aria-label=\\"도시 목록\\">\\n        <MenuItem label=\\"서울특별시\\" active />\\n        <MenuItem label=\\"부산광역시\\" />\\n        <MenuItem label=\\"대구광역시\\" />\\n        <MenuItem label=\\"인천광역시\\" />\\n        <MenuItem label=\\"광주광역시\\" />\\n        <MenuItem label=\\"대전광역시\\" />\\n        <MenuItem label=\\"울산광역시\\" />\\n        <MenuItem label=\\"세종특별자치시\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown open :max-visible-items=\\"4\\" :menu-width=\\"18\\">\\n      <template #trigger>\\n        <Button variant=\\"outline\\" class=\\"dropdown_trigger\\" label=\\"넓은 패널\\" haspopup=\\"menu\\" :expanded=\\"true\\" select-caret />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact aria-label=\\"긴 라벨 메뉴\\">\\n        <MenuItem label=\\"프로젝트 대시보드\\" />\\n        <MenuItem label=\\"팀 협업 워크스페이스\\" />\\n        <MenuItem label=\\"문서 보관함 및 템플릿\\" />\\n        <MenuItem label=\\"알림 및 활동 기록\\" />\\n        <MenuItem label=\\"계정 및 보안 설정\\" />\\n        <MenuItem label=\\"결제 및 구독 관리\\" />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n  <p class=\\"form_field-hint\\">HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와 <code>style=\\"--dropdown-max-visible-items: 4\\"</code>로 동일하게 적용합니다.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<div class="dropdown_row">
      <Dropdown open :max-visible-items="4">
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="도시 선택" haspopup="listbox" :expanded="true" select-caret />
        </template>
        <Menu mode="vertical" compact aria-label="도시 목록">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
          <MenuItem label="광주광역시" />
          <MenuItem label="대전광역시" />
          <MenuItem label="울산광역시" />
          <MenuItem label="세종특별자치시" />
        </Menu>
      </Dropdown>

      <Dropdown open :max-visible-items="4" :menu-width="18">
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="넓은 패널" haspopup="menu" :expanded="true" select-caret />
        </template>
        <Menu mode="vertical" compact aria-label="긴 라벨 메뉴">
          <MenuItem label="프로젝트 대시보드" />
          <MenuItem label="팀 협업 워크스페이스" />
          <MenuItem label="문서 보관함 및 템플릿" />
          <MenuItem label="알림 및 활동 기록" />
          <MenuItem label="계정 및 보안 설정" />
          <MenuItem label="결제 및 구독 관리" />
        </Menu>
      </Dropdown>
    </div>

    <p class="form_field-hint">HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와 <code>style="--dropdown-max-visible-items: 4"</code>로 동일하게 적용합니다.</p>\`
  })
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"dropdown_row\\">\\n    <Dropdown disabled>\\n      <template #trigger>\\n        <Button variant=\\"outline\\" class=\\"dropdown_trigger\\" disabled label=\\"비활성 드롭다운\\" haspopup=\\"menu\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"항목\\" />\\n      </Menu>\\n    </Dropdown>\\n    <Dropdown open>\\n      <template #trigger>\\n        <Button variant=\\"outline\\" class=\\"dropdown_trigger\\" label=\\"일부 비활성\\" haspopup=\\"menu\\" :expanded=\\"true\\" />\\n      </template>\\n      <Menu mode=\\"vertical\\" compact>\\n        <MenuItem label=\\"조회\\" />\\n        <MenuItem label=\\"편집\\" />\\n        <MenuItem label=\\"삭제\\" disabled />\\n        <MenuItem label=\\"관리자 설정\\" disabled />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<div class="dropdown_row">
      <Dropdown disabled>
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목" />
        </Menu>
      </Dropdown>

      <Dropdown open>
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="일부 비활성" haspopup="menu" :expanded="true" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </Menu>
      </Dropdown>
    </div>\`
  })
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ue;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "조합 예시",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. data-dropdown으로 클릭·Esc·외부 클릭 시 닫힙니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Dropdown from '@uxkm/ui/components/Dropdown.vue';\\nimport Menu from '@uxkm/ui/components/Menu.vue';\\nimport MenuDivider from '@uxkm/ui/components/MenuDivider.vue';\\nimport MenuItem from '@uxkm/ui/components/MenuItem.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"dropdown_demo-toolbar\\">\\n    <Button variant=\\"ghost\\" size=\\"sm\\">\\n      <template #icon-before>\\n        <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <path d=\\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z\\"/>\\n        </svg>\\n      </template>\\n      알림\\n      <Badge count size=\\"sm\\" color=\\"danger\\" aria-label=\\"읽지 않은 알림 2건\\">2</Badge>\\n    </Button>\\n    <Dropdown placement=\\"end\\" data-dropdown-close-on-select>\\n      <template #trigger>\\n        <Button variant=\\"ghost\\" size=\\"sm\\" class=\\"dropdown_trigger\\" haspopup=\\"menu\\" select-caret>\\n          <Avatar size=\\"sm\\" color=\\"primary\\" initials=\\"김\\" aria-hidden />\\n          김가이드\\n        </Button>\\n      </template>\\n      <Menu mode=\\"vertical\\" compact aria-label=\\"사용자 메뉴\\">\\n        <MenuItem label=\\"내 프로필\\">\\n          <template #icon>\\n            <Icon name=\\"user\\" />\\n          </template>\\n        </MenuItem>\\n        <MenuItem label=\\"내 문서\\">\\n          <template #icon>\\n            <svg class=\\"menu_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/>\\n              <path d=\\"M14 2v6h6\\"/>\\n            </svg>\\n          </template>\\n        </MenuItem>\\n        <MenuDivider />\\n        <MenuItem label=\\"로그아웃\\" color=\\"danger\\" />\\n      </Menu>\\n    </Dropdown>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Dropdown,
      Avatar,
      Badge,
      Button,
      Icon,
      Menu,
      MenuDivider,
      MenuItem
    },
    template: \`<div class="dropdown_demo-toolbar">
      <Button variant="ghost" size="sm">
        <template #icon-before>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
          </svg>
        </template>
        알림
        <Badge count size="sm" color="danger" aria-label="읽지 않은 알림 2건">2</Badge>
      </Button>

      <Dropdown placement="end" data-dropdown-close-on-select>
        <template #trigger>
          <Button variant="ghost" size="sm" class="dropdown_trigger" haspopup="menu" select-caret>
            <Avatar size="sm" color="primary" initials="김" aria-hidden />
            김가이드
          </Button>
        </template>
        <Menu mode="vertical" compact aria-label="사용자 메뉴">
          <MenuItem label="내 프로필">
            <template #icon><Icon name="user" /></template>
          </MenuItem>
          <MenuItem label="내 문서">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
              </svg>
            </template>
          </MenuItem>
          <MenuDivider />
          <MenuItem label="로그아웃" color="danger" />
        </Menu>
      </Dropdown>
    </div>\`
  })
}`,...(ue=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};const Oe=["Playground","Basic","Open","Trigger","SelectTrigger","Placement","MenuDemo","Scroll","Disabled","Example"];export{c as Basic,b as Disabled,w as Example,g as MenuDemo,C as Open,M as Placement,d as Playground,v as Scroll,D as SelectTrigger,B as Trigger,Oe as __namedExportsOrder,We as default};
