import{B as e,Ct as t,G as n,K as r,L as i,U as a,W as o,Y as s,b as c,d as l,i as u,k as d,l as f,m as p,nt as m,r as h,st as g,u as _,xt as v,y}from"./CCnt5OSV.js";import{i as b,l as x,t as S,x as C}from"./DkmWXf_S.js";import{t as w}from"./D5AUKneU.js";import{t as T}from"./gHQDdAlU.js";import{t as E}from"./DD3RWXAt.js";import{t as D}from"./Kdlvr--h.js";import{t as O}from"./-gIuMC1U.js";import{n as k,r as A,t as j}from"./BqPht_QJ2.js";var M={"data-demo-slot":`trigger`},N=[`aria-hidden`],P=`.menu_link:not(.is-disabled):not([aria-disabled="true"]), [role="menuitem"]:not(.is-disabled):not([aria-disabled="true"]), [role="option"]:not(.is-disabled):not([aria-disabled="true"])`,F=Object.assign({inheritAttrs:!1},{__name:`Dropdown`,props:{open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,placement:String,fit:Boolean,closeOnSelect:Boolean,maxVisibleItems:Number,menuWidth:[String,Number],menuMinWidth:[String,Number]},emits:[`update:open`,`open-change`],setup(s,{emit:u}){let g=new Set([`end`,`top`]),y=s,x=u,S=a(),w=n(),T=m(null),E=m(y.defaultOpen),D=`dropdown-menu-${o().replace(/:/g,``)}`,O=_(()=>g.has(y.placement)?y.placement:void 0),k=_(()=>y.open!=null),A=_(()=>k.value?!!y.open:E.value);C(()=>({...y,open:A.value,placement:O.value}),T,S);let j=_(()=>{let e=[`dropdown`];return A.value&&e.push(`is-open`),y.disabled&&e.push(`is-disabled`),O.value===`end`&&e.push(`dropdown_placement-end`),O.value===`top`&&e.push(`dropdown_placement-top`),y.fit&&e.push(`dropdown_fit`),S.class&&e.push(S.class),e}),F=_(()=>{let{class:e,...t}=S;return t}),I=_(()=>{let e=[`dropdown_menu`];return y.maxVisibleItems!=null&&e.push(`dropdown_menu-scrollable`),e}),L=_(()=>{let e={};return y.maxVisibleItems!=null&&(e[`--dropdown-max-visible-items`]=y.maxVisibleItems),y.menuWidth!=null&&(e.width=b(y.menuWidth)),y.menuMinWidth!=null&&(e.minWidth=b(y.menuMinWidth)),e});function R(e){y.disabled||e===A.value||(k.value||(E.value=e),x(`update:open`,e),x(`open-change`,e))}function z(e=`active`){requestAnimationFrame(()=>{let t=Array.from(T.value?.querySelectorAll(P)??[]),n=t.find(e=>e.classList.contains(`is-active`)||e.getAttribute(`aria-selected`)===`true`||e.getAttribute(`aria-current`)===`page`);(e===`last`?t.at(-1):n||t[0])?.focus()})}function B(){T.value?.querySelector(`.dropdown_trigger`)?.focus()}function V(e){let t=e.currentTarget;if(e.defaultPrevented||y.disabled||t.disabled||t.getAttribute(`aria-disabled`)===`true`){y.disabled&&e.preventDefault();return}R(!A.value)}function H(e){e.defaultPrevented||y.disabled||(e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),A.value||R(!0),z(e.key===`ArrowUp`?`last`:`active`)):e.key===`Escape`&&A.value&&(e.preventDefault(),R(!1)))}function U(e){let t=e.target instanceof Element?e.target.closest(P):null;!t||!e.currentTarget.contains(t)||y.closeOnSelect&&(R(!1),B())}function W(e){let t=Array.from(e.currentTarget.querySelectorAll(P)),n=t.indexOf(document.activeElement),r=null;if(e.key===`ArrowDown`)r=t[Math.min(n+1,t.length-1)]||t[0];else if(e.key===`ArrowUp`)r=t[Math.max(n-1,0)]||t.at(-1);else if(e.key===`Home`)r=t[0];else if(e.key===`End`)r=t.at(-1);else if(e.key===`Escape`){e.preventDefault(),R(!1),B();return}r&&(e.preventDefault(),r.focus())}let G=()=>{let e=w.trigger?.({open:A.value,menuId:D,disabled:y.disabled})??[],t=!1;return e.map(e=>{if(t||e.type===h)return e;t=!0;let n=y.disabled||!!e.props?.disabled;return f(e,{class:`dropdown_trigger`,expanded:typeof e.type==`string`?void 0:A.value,"aria-expanded":String(A.value),"aria-controls":D,disabled:n,onClick:V,onKeydown:H},!0)})};return r(A,(e,t,n)=>{if(!e||typeof document>`u`)return;let r=e=>{T.value?.contains(e.target)||R(!1)};document.addEventListener(`pointerdown`,r),n(()=>document.removeEventListener(`pointerdown`,r))},{immediate:!0}),(n,r)=>(i(),p(`div`,d({ref_key:`rootRef`,ref:T,class:j.value,"data-dropdown":``},F.value),[l(`div`,M,[c(G)]),l(`div`,{id:D,class:v(I.value),style:t(L.value),role:`menu`,"aria-hidden":!A.value,"data-demo-slot":`default`,onClick:U,onKeydown:W},[e(n.$slots,`default`)],46,N)],16))}}),I=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],L=[{name:`open`,type:`boolean`,default:`—`,description:`열림 상태 (제어, v-model:open)`},{name:`default-open`,type:`boolean`,default:`false`,description:`초기 열림 상태 (비제어)`},{name:`@open-change`,type:`(open: boolean) => void`,default:`—`,description:`열림 상태 변경 이벤트`},{name:`disabled`,type:`boolean`,default:`false`,description:`is-disabled`},{name:`placement`,type:`'end' | 'top'`,default:`—`,description:`dropdown_placement-end · dropdown_placement-top`},{name:`fit`,type:`boolean`,default:`false`,description:`dropdown_fit — 트리거 너비 맞춤`},{name:`close-on-select`,type:`boolean`,default:`false`,description:`메뉴 항목 선택 후 패널 닫기`},{name:`max-visible-items`,type:`number`,default:`—`,description:`패널에 보이는 최대 항목 수. 초과 시 dropdown_menu-scrollable로 목록 스크롤`},{name:`menu-width`,type:`string | number`,default:`—`,description:`패널 가로 너비 (숫자는 rem)`},{name:`menu-min-width`,type:`string | number`,default:`—`,description:`패널 최소 가로 너비 (숫자는 rem)`}],R=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],z=[{name:`trigger`,description:`트리거 버튼·링크 (dropdown_trigger)`},{name:`default`,description:`메뉴 패널 (dropdown_menu, 보통 Menu)`}],B=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],V=[{name:`dropdown · dropdown_menu`,description:`루트·메뉴 패널`},{name:`dropdown_placement-end · dropdown_placement-top · dropdown_fit`,description:`배치·너비`},{name:`dropdown_menu-scrollable`,description:`max-visible-items 지정 시 — menu_list 스크롤`},{name:`data-dropdown`,description:`Vue Dropdown 식별자`},{name:`is-open · is-disabled`,description:`상태`},{name:`role="menu"`,description:`메뉴 시맨틱`}],H=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`--dropdown-min-width · --dropdown-menu-width`,default:`10rem · auto`,description:`패널 최소·기본 너비`},{name:`--dropdown-offset`,default:`—`,description:`트리거와 패널 간격`},{name:`--dropdown-max-visible-items`,default:`—`,description:`max-visible-items prop으로 주입 — 스크롤 높이 계산`},{name:`--dropdown-item-line-height`,default:`1.4`,description:`항목 높이 계산용 줄 높이`},{name:`--z-dropdown`,default:`100`,description:`레이어 순서`}],W={class:`dropdown_row`},G={class:`dropdown_row`},K={class:`dropdown_row`,style:{width:`100%`,"justify-content":`space-between`}},q={style:{display:`flex`,"justify-content":`center`,"padding-top":`6rem`}},J={class:`menu menu_vertical menu_compact`,"aria-label":`계정 메뉴`},Y={class:`menu_list`,role:`none`},X={class:`dropdown_row`},Z={class:`dropdown_row`},Q={class:`dropdown_demo-toolbar`},$={title:`Dropdown | UXKM Guide`,activeNav:`dropdown`,pageTitle:`Dropdown`},ee={__name:`dropdown`,setup(e){let t=m(!1);return(e,n)=>(i(),p(u,null,[n[16]||=l(`div`,{class:`page_intro`},[l(`h1`,null,`Dropdown`),l(`p`,{class:`lead`},`버튼·링크 등 트리거를 클릭하면 메뉴 패널이 표시되는 Nuxt 컴포넌트입니다. Menu 컴포넌트와 조합해 액션 목록·사용자 메뉴·필터 등에 사용합니다.`)],-1),c(E,{"heading-id":`basic-heading`,title:`기본`,description:`dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다.`,code:`<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';

const open = ref(false);
<\/script>

<template>
  <Dropdown v-model:open="open">
    <template #trigger>
      <Button variant="outline" class="dropdown_trigger" label="작업" haspopup="menu" />
    </template>
    <Menu mode="vertical" compact aria-label="작업 메뉴">
      <MenuItem label="복사" />
      <MenuItem label="이동" />
      <MenuItem label="공유" />
    </Menu>
  </Dropdown>
</template>`},{default:s(()=>[c(F,{open:t.value,"onUpdate:open":n[0]||=e=>t.value=e},{trigger:s(()=>[c(T,{variant:`outline`,class:`dropdown_trigger`,label:`작업`,haspopup:`menu`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`작업 메뉴`},{default:s(()=>[c(j,{label:`복사`}),c(j,{label:`이동`}),c(j,{label:`공유`})]),_:1})]),_:1},8,[`open`])]),_:1}),c(E,{"heading-id":`open-heading`,title:`열린 상태`,description:`is-open 클래스와 aria-expanded="true"로 패널이 열린 상태를 표현합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
<\/script>

<template>
  <Dropdown open>
    <template #trigger>
      <Button variant="filled" color="primary" class="dropdown_trigger" label="카테고리" haspopup="menu" />
    </template>
    <Menu mode="vertical" compact aria-label="카테고리">
      <MenuItem label="전체" active />
      <MenuItem label="디자인" />
      <MenuItem label="개발" />
      <MenuItem label="마케팅" />
    </Menu>
  </Dropdown>
</template>`},{default:s(()=>[c(F,{open:``},{trigger:s(()=>[c(T,{variant:`filled`,color:`primary`,class:`dropdown_trigger`,label:`카테고리`,haspopup:`menu`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`카테고리`},{default:s(()=>[c(j,{label:`전체`,active:``}),c(j,{label:`디자인`}),c(j,{label:`개발`}),c(j,{label:`마케팅`})]),_:1})]),_:1})]),_:1}),c(E,{"heading-id":`trigger-heading`,title:`트리거 유형`,description:`Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:s(()=>[l(`div`,W,[c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`filled`,color:`primary`,label:`Filled`,haspopup:`menu`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목 1`}),c(j,{label:`항목 2`})]),_:1})]),_:1}),c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`outline`,label:`Outline`,haspopup:`menu`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목 1`}),c(j,{label:`항목 2`})]),_:1})]),_:1}),c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`ghost`,label:`Ghost`,haspopup:`menu`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목 1`}),c(j,{label:`항목 2`})]),_:1})]),_:1}),c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`text`,color:`primary`,label:`Text`,haspopup:`menu`,"select-caret":``})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목 1`}),c(j,{label:`항목 2`})]),_:1})]),_:1}),c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`ghost`,"icon-only":``,"aria-label":`더보기`,haspopup:`menu`},{"icon-before":s(()=>[...n[1]||=[l(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[l(`circle`,{cx:`12`,cy:`12`,r:`1`}),l(`circle`,{cx:`19`,cy:`12`,r:`1`}),l(`circle`,{cx:`5`,cy:`12`,r:`1`})],-1)]]),_:1})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`더보기`},{default:s(()=>[c(j,{label:`편집`}),c(j,{label:`복제`}),c(j,{label:`삭제`,color:`danger`})]),_:1})]),_:1})])]),_:1}),c(E,{"heading-id":`select-trigger-heading`,title:`셀렉트 트리거`,description:`btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:s(()=>[l(`div`,G,[c(F,{fit:``},{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`select`,label:`서울특별시`,haspopup:`listbox`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`지역 선택`},{default:s(()=>[c(j,{label:`서울특별시`,active:``}),c(j,{label:`부산광역시`}),c(j,{label:`대구광역시`}),c(j,{label:`인천광역시`})]),_:1})]),_:1}),c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`select`,"select-text":``,label:`최신순`,haspopup:`listbox`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`정렬`},{default:s(()=>[c(j,{label:`최신순`,active:``}),c(j,{label:`인기순`}),c(j,{label:`가격 낮은순`}),c(j,{label:`가격 높은순`})]),_:1})]),_:1})]),n[2]||=l(`p`,{class:`form_field-hint`},[y(`btn_select 상세 변형은 `),l(`a`,{href:`button.html#type-select-heading`},`Button — 셀렉트 박스형`),y(` 섹션을 참고하세요.`)],-1)]),_:1}),c(E,{"heading-id":`placement-heading`,title:`정렬`,description:`dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:s(()=>[l(`div`,K,[c(F,null,{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`outline`,label:`왼쪽 정렬`,haspopup:`menu`,"select-caret":``})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목 A`}),c(j,{label:`항목 B`})]),_:1})]),_:1}),c(F,{placement:`end`},{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`outline`,label:`오른쪽 정렬`,haspopup:`menu`,"select-caret":``})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목 A`}),c(j,{label:`항목 B`})]),_:1})]),_:1})]),l(`div`,q,[c(F,{placement:`top`},{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`ghost`,label:`위로 열기`,haspopup:`menu`,"select-caret":``})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`위쪽 패널`}),c(j,{label:`항목 2`})]),_:1})]),_:1})])]),_:1}),c(E,{"heading-id":`menu-heading`,title:`메뉴 구성`,description:`Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import Dropdown from '@/components/Dropdown.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:s(()=>[c(F,{open:``},{trigger:s(()=>[c(T,{class:`dropdown_trigger`,variant:`outline`,label:`계정`,haspopup:`menu`,expanded:!0,"select-caret":``})]),default:s(()=>[l(`nav`,J,[l(`ul`,Y,[n[6]||=l(`li`,{class:`menu_group`,role:`presentation`},[l(`span`,{class:`menu_group-title`},`계정`)],-1),c(j,{label:`프로필`},{icon:s(()=>[c(w,{name:`user`})]),_:1}),c(j,{label:`보안`},{icon:s(()=>[...n[3]||=[l(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[l(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),l(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})],-1)]]),_:1}),n[7]||=l(`li`,{class:`menu_divider`,role:`separator`},null,-1),n[8]||=l(`li`,{class:`menu_group`,role:`presentation`},[l(`span`,{class:`menu_group-title`},`앱`)],-1),c(j,{label:`알림`},{icon:s(()=>[...n[4]||=[l(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[l(`path`,{d:`M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z`})],-1)]]),extra:s(()=>[c(O,{class:`menu_extra`,count:``,color:`primary`},{default:s(()=>[...n[5]||=[y(`3`,-1)]]),_:1})]),_:1}),c(j,{label:`설정`},{icon:s(()=>[c(w,{name:`settings`})]),_:1}),n[9]||=l(`li`,{class:`menu_divider`,role:`separator`},null,-1),c(j,{label:`로그아웃`,color:`danger`})])])]),_:1})]),_:1}),c(E,{"heading-id":`scroll-heading`,title:`스크롤 · 너비`,description:`maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:s(()=>[l(`div`,X,[c(F,{open:``,"max-visible-items":4},{trigger:s(()=>[c(T,{variant:`outline`,class:`dropdown_trigger`,label:`도시 선택`,haspopup:`listbox`,expanded:!0,"select-caret":``})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`도시 목록`},{default:s(()=>[c(j,{label:`서울특별시`,active:``}),c(j,{label:`부산광역시`}),c(j,{label:`대구광역시`}),c(j,{label:`인천광역시`}),c(j,{label:`광주광역시`}),c(j,{label:`대전광역시`}),c(j,{label:`울산광역시`}),c(j,{label:`세종특별자치시`})]),_:1})]),_:1}),c(F,{open:``,"max-visible-items":4,"menu-width":18},{trigger:s(()=>[c(T,{variant:`outline`,class:`dropdown_trigger`,label:`넓은 패널`,haspopup:`menu`,expanded:!0,"select-caret":``})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`긴 라벨 메뉴`},{default:s(()=>[c(j,{label:`프로젝트 대시보드`}),c(j,{label:`팀 협업 워크스페이스`}),c(j,{label:`문서 보관함 및 템플릿`}),c(j,{label:`알림 및 활동 기록`}),c(j,{label:`계정 및 보안 설정`}),c(j,{label:`결제 및 구독 관리`})]),_:1})]),_:1})]),n[10]||=l(`p`,{class:`form_field-hint`},[y(`HTML 마크업에서는 `),l(`code`,null,`dropdown_menu-scrollable`),y(` 클래스와 `),l(`code`,null,`style="--dropdown-max-visible-items: 4"`),y(`로 동일하게 적용합니다.`)],-1)]),_:1}),c(E,{"heading-id":`disabled-heading`,title:`비활성`,description:`dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:s(()=>[l(`div`,Z,[c(F,{disabled:``},{trigger:s(()=>[c(T,{variant:`outline`,class:`dropdown_trigger`,disabled:``,label:`비활성 드롭다운`,haspopup:`menu`})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`항목`})]),_:1})]),_:1}),c(F,{open:``},{trigger:s(()=>[c(T,{variant:`outline`,class:`dropdown_trigger`,label:`일부 비활성`,haspopup:`menu`,expanded:!0})]),default:s(()=>[c(A,{mode:`vertical`,compact:``},{default:s(()=>[c(j,{label:`조회`}),c(j,{label:`편집`}),c(j,{label:`삭제`,disabled:``}),c(j,{label:`관리자 설정`,disabled:``})]),_:1})]),_:1})])]),_:1}),c(E,{"heading-id":`example-heading`,title:`조합 예시`,description:`툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. close-on-select로 항목 선택 시 닫히며 Esc·외부 클릭도 지원합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import Badge from '@/components/Badge.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import Dropdown from '@/components/Dropdown.vue';
import Menu from '@/components/Menu.vue';
import MenuDivider from '@/components/MenuDivider.vue';
import MenuItem from '@/components/MenuItem.vue';
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
    <Dropdown placement="end" close-on-select>
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
</template>`},{default:s(()=>[l(`div`,Q,[c(T,{variant:`ghost`,size:`sm`},{"icon-before":s(()=>[...n[11]||=[l(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[l(`path`,{d:`M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z`})],-1)]]),default:s(()=>[n[13]||=y(` 알림 `,-1),c(O,{count:``,size:`sm`,color:`danger`,"aria-label":`읽지 않은 알림 2건`},{default:s(()=>[...n[12]||=[y(`2`,-1)]]),_:1})]),_:1}),c(F,{placement:`end`,"close-on-select":``},{trigger:s(()=>[c(T,{variant:`ghost`,size:`sm`,class:`dropdown_trigger`,haspopup:`menu`,"select-caret":``},{default:s(()=>[c(D,{size:`sm`,color:`primary`,initials:`김`,"aria-hidden":``}),n[14]||=y(` 김가이드 `,-1)]),_:1})]),default:s(()=>[c(A,{mode:`vertical`,compact:``,"aria-label":`사용자 메뉴`},{default:s(()=>[c(j,{label:`내 프로필`},{icon:s(()=>[c(w,{name:`user`})]),_:1}),c(j,{label:`내 문서`},{icon:s(()=>[...n[15]||=[l(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[l(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),l(`path`,{d:`M14 2v6h6`})],-1)]]),_:1}),c(k),c(j,{label:`로그아웃`,color:`danger`})]),_:1})]),_:1})])]),_:1}),c(x,{"heading-id":`api-props-heading`,title:`API · Props`},{default:s(()=>[c(S,{columns:g(I),rows:g(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(x,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:s(()=>[c(S,{columns:g(R),rows:g(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(x,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:s(()=>[c(S,{columns:g(B),rows:g(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),c(x,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:s(()=>[c(S,{columns:g(H),rows:g(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ee as default,$ as docMeta};