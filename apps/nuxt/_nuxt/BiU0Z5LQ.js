import{B as e,G as t,L as n,U as r,W as i,Y as a,_ as o,b as s,d as c,i as l,k as u,m as d,nt as f,p,st as m,u as h,wt as g,y as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{n as S,t as C}from"./D01l-9yr.js";import{t as w}from"./D5AUKneU.js";import{t as T}from"./gHQDdAlU.js";import{t as E}from"./DD3RWXAt.js";import{s as D,t as O}from"./D6IbhUhQ.js";import{t as k}from"./-gIuMC1U.js";import{n as A,r as j,t as M}from"./BqPht_QJ2.js";var N={class:`menu_group-title`},P=Object.assign({inheritAttrs:!1},{__name:`MenuGroup`,props:{title:{type:String,required:!0}},setup(e){let t=e,i=f(null),a=r(),o=v(`MenuGroup`,{selfClosing:!0});x(o,t,{},i,a);let s=h(()=>{let{class:e,...t}=a;return t});return(t,r)=>(n(),d(`li`,u({ref_key:`rootRef`,ref:i},s.value,{class:[`menu_group`,m(a).class],role:`presentation`}),[c(`span`,N,g(e.title),1)],16))}}),ee=[`aria-expanded`],F={key:0,class:`menu_label`},I=[`id`],L=Object.assign({inheritAttrs:!1},{__name:`MenuSubmenu`,props:{ripple:C,label:String,expanded:Boolean,submenuId:String},emits:[`update:expanded`,`expanded-change`],setup(l,{emit:_}){let y=l,b=_,{rippleAttrs:C}=S(y),E=f(null),D=r(),O=t(),k=i().replace(/:/g,``),A=h(()=>y.submenuId||`menu-sub-${k}`),j=f(!!y.expanded),M=v(`MenuSubmenu`,{booleanProps:new Set([`expanded`]),selfClosing:!1});x(M,y,O,E,D);let N=h(()=>{let{class:e,...t}=D;return t});function P(){j.value=!j.value,b(`update:expanded`,j.value),b(`expanded-change`,j.value)}return(t,r)=>(n(),d(`li`,u({ref_key:`rootRef`,ref:E},N.value,{class:[`menu_item`,`menu_item-submenu`,m(D).class],"aria-expanded":j.value?`true`:`false`}),[s(T,u({variant:`text`,class:`menu_link`,expanded:j.value,"aria-controls":A.value},m(C),{onClick:P}),o({"icon-after":a(()=>[s(w,{name:`chevron-down`,class:`menu_arrow`})]),default:a(()=>[l.label?(n(),d(`span`,F,g(l.label),1)):p(``,!0)]),_:2},[t.$slots.icon?{name:`icon-before`,fn:a(()=>[e(t.$slots,`icon`)]),key:`0`}:void 0]),1040,[`expanded`,`aria-controls`]),c(`ul`,{id:A.value,class:`menu_submenu`},[e(t.$slots,`default`)],8,I)],16,ee))}}),R=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],z=[{name:`mode`,type:`'vertical' | 'horizontal' | 'inline'`,default:`vertical`,description:`menu_vertical · menu_horizontal · menu_inline`},{name:`bordered`,type:`boolean`,default:`false`,description:`menu_bordered`},{name:`compact`,type:`boolean`,default:`false`,description:`menu_compact`},{name:`dark`,type:`boolean`,default:`false`,description:`menu_dark`},{name:`aria-label`,type:`string`,default:`—`,description:`nav aria-label`}],B=R,V=[{name:`label`,type:`string`,default:`—`,description:`항목 텍스트`},{name:`href`,type:`string`,default:`—`,description:`링크 URL (a 태그)`},{name:`as`,type:`string | Component`,default:`a | button`,description:`항목 루트 요소. NuxtLink 같은 커스텀 링크 컴포넌트 지정`},{name:`active`,type:`boolean`,default:`false`,description:`is-active · aria-current`},{name:`disabled`,type:`boolean`,default:`false`,description:`is-disabled`},{name:`color`,type:`string`,default:`—`,description:`color_* (예: danger)`},D],H=R,U=[{name:`label`,type:`string`,default:`—`,description:`서브메뉴 제목`},{name:`expanded`,type:`boolean`,default:`false`,description:`펼침 (aria-expanded)`},{name:`submenu-id`,type:`string`,default:`—`,description:`menu_submenu id (aria-controls)`},{name:`@expanded-change`,type:`(expanded: boolean) => void`,default:`—`,description:`펼침 상태 변경 이벤트`},D],W=R,G=[{name:`title`,type:`string`,default:`—`,description:`그룹 제목 (menu_group-title, 필수)`}],K=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],q=[{name:`default`,description:`MenuItem · MenuSubmenu 등`}],J=K,Y=[{name:`icon`,description:`menu_icon`},{name:`extra`,description:`menu_extra (배지 등)`}],X=K,Z=[{name:`icon`,description:`menu_icon`},{name:`default`,description:`하위 MenuItem`}],Q=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],te=[{name:`menu · menu_list · menu_item · menu_link`,description:`루트·목록·항목·링크`},{name:`menu_vertical · menu_horizontal · menu_inline`,description:`배치 모드`},{name:`menu_icon · menu_label · menu_extra · menu_arrow`,description:`항목 파트`},{name:`menu_item-submenu · menu_submenu`,description:`서브메뉴`},{name:`menu_group · menu_group-title · menu_divider`,description:`그룹·구분선`},{name:`menu_bordered · menu_compact · menu_dark`,description:`스타일 변형`},{name:`is-active · is-disabled`,description:`상태`},{name:`data-vue-menu`,description:`Vue가 선택·서브메뉴 상태를 관리하는 메뉴`},...O],ne=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],$=[{name:`--menu-item-height · --menu-item-padding-x`,default:`—`,description:`항목 크기·패딩`},{name:`--menu-gap · --menu-radius`,default:`—`,description:`간격·모서리`},{name:`--menu-sub-indent`,default:`—`,description:`서브메뉴 들여쓰기`}],re={class:`menu_demo-row`},ie={class:`menu_demo-sidebar`},ae={title:`Menu | UXKM Guide`,activeNav:`menu`,pageTitle:`Menu`},oe={__name:`menu`,setup(e){return(e,t)=>(n(),d(l,null,[t[10]||=c(`div`,{class:`page_intro`},[c(`h1`,null,`Menu`),c(`p`,{class:`lead`},`앱 내비게이션·사이드바에 사용하는 메뉴 컴포넌트입니다. 수직·수평 배치, 아이콘, 서브메뉴, 구분선·그룹을 지원합니다.`)],-1),s(E,{"heading-id":`basic-heading`,title:`기본`,description:`menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current="page"로 선택 항목을 표시합니다.`,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="주요 메뉴">
    <MenuItem as="NuxtLink" href="/" label="홈" active />
    <MenuItem as="NuxtLink" href="/components/card" label="Card" />
    <MenuItem as="NuxtLink" href="/components/avatar" label="Avatar" />
    <MenuItem as="NuxtLink" href="/getting-started" label="시작하기" />
  </Menu>
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,"aria-label":`주요 메뉴`},{default:a(()=>[s(M,{as:`NuxtLink`,href:`/`,label:`홈`,active:``}),s(M,{as:`NuxtLink`,href:`/components/card`,label:`Card`}),s(M,{as:`NuxtLink`,href:`/components/avatar`,label:`Avatar`}),s(M,{as:`NuxtLink`,href:`/getting-started`,label:`시작하기`})]),_:1})]),_:1}),s(E,{"heading-id":`horizontal-heading`,title:`수평`,description:`menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다.`,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="horizontal" bordered aria-label="섹션 메뉴">
    <MenuItem label="개요" active />
    <MenuItem label="컴포넌트" />
    <MenuItem label="토큰" />
    <MenuItem label="접근성" />
  </Menu>
</template>`},{default:a(()=>[s(j,{mode:`horizontal`,bordered:``,"aria-label":`섹션 메뉴`},{default:a(()=>[s(M,{label:`개요`,active:``}),s(M,{label:`컴포넌트`}),s(M,{label:`토큰`}),s(M,{label:`접근성`})]),_:1})]),_:1}),s(E,{"heading-id":`icon-heading`,title:`아이콘`,description:`menu_icon으로 항목 앞에 아이콘을 배치합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,"aria-label":`앱 메뉴`},{default:a(()=>[s(M,{label:`대시보드`,active:``},{icon:a(()=>[s(w,{name:`grid`})]),_:1}),s(M,{label:`사용자`},{icon:a(()=>[s(w,{name:`user`})]),_:1}),s(M,{label:`문서`},{icon:a(()=>[s(w,{name:`book`})]),_:1}),s(M,{label:`설정`},{icon:a(()=>[s(w,{name:`settings`})]),_:1})]),_:1})]),_:1}),s(E,{"heading-id":`submenu-heading`,title:`서브메뉴`,description:`menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다.`,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import MenuSubmenu from '@/components/MenuSubmenu.vue';
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
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,"aria-label":`컴포넌트 메뉴`},{default:a(()=>[s(M,{label:`홈`,active:``},{icon:a(()=>[...t[0]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`path`,{d:`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`})],-1)]]),_:1}),s(L,{label:`컴포넌트`,expanded:``,"submenu-id":`menu-sub-components`},{icon:a(()=>[...t[1]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`}),c(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`}),c(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`}),c(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`})],-1)]]),default:a(()=>[s(M,{label:`Button`}),s(M,{label:`Input`}),s(M,{label:`Card`})]),_:1}),s(L,{label:`패턴`,expanded:!1,"submenu-id":`menu-sub-patterns`},{icon:a(()=>[...t[2]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`polygon`,{points:`12 2 2 7 12 12 22 7 12 2`}),c(`polyline`,{points:`2 17 12 22 22 17`}),c(`polyline`,{points:`2 12 12 17 22 12`})],-1)]]),default:a(()=>[s(M,{label:`폼 레이아웃`}),s(M,{label:`데이터 테이블`})]),_:1})]),_:1})]),_:1}),s(E,{"heading-id":`group-heading`,title:`구분선 · 그룹`,description:`menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다.`,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuDivider from '@/components/MenuDivider.vue';
import MenuGroup from '@/components/MenuGroup.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,"aria-label":`설정 메뉴`},{default:a(()=>[s(P,{title:`계정`}),s(M,{label:`프로필`,active:``}),s(M,{label:`보안`}),s(A),s(P,{title:`앱`}),s(M,{label:`알림`}),s(M,{label:`언어`}),s(A),s(M,{label:`로그아웃`})]),_:1})]),_:1}),s(E,{"heading-id":`disabled-heading`,title:`비활성`,description:`menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다.`,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
<\/script>

<template>
  <Menu mode="vertical" bordered aria-label="권한 메뉴">
    <MenuItem label="조회" active />
    <MenuItem label="편집" />
    <MenuItem label="삭제" disabled />
    <MenuItem label="관리자 설정" disabled />
  </Menu>
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,"aria-label":`권한 메뉴`},{default:a(()=>[s(M,{label:`조회`,active:``}),s(M,{label:`편집`}),s(M,{label:`삭제`,disabled:``}),s(M,{label:`관리자 설정`,disabled:``})]),_:1})]),_:1}),s(E,{"heading-id":`badge-heading`,title:`배지`,description:`menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,"aria-label":`알림 메뉴`},{default:a(()=>[s(M,{label:`받은편지함`,active:``},{icon:a(()=>[...t[3]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),c(`polyline`,{points:`22,6 12,13 2,6`})],-1)]]),extra:a(()=>[s(k,{class:`menu_extra`,count:``,color:`primary`},{default:a(()=>[...t[4]||=[_(`12`,-1)]]),_:1})]),_:1}),s(M,{label:`알림`},{icon:a(()=>[...t[5]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`path`,{d:`M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z`})],-1)]]),extra:a(()=>[s(k,{class:`menu_extra`,"dot-only":``,color:`danger`,"aria-label":`새 알림`})]),_:1}),s(M,{label:`메시지`},{icon:a(()=>[...t[6]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`path`,{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`})],-1)]]),extra:a(()=>[s(k,{class:`menu_extra`,color:`default`},{default:a(()=>[...t[7]||=[_(`Beta`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),s(E,{"heading-id":`horizontal-submenu-heading`,title:`수평 · 서브메뉴`,description:`menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다.`,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import MenuSubmenu from '@/components/MenuSubmenu.vue';
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
</template>`},{default:a(()=>[s(j,{mode:`horizontal`,bordered:``,"aria-label":`상단 메뉴`},{default:a(()=>[s(M,{label:`홈`,active:``}),s(L,{label:`컴포넌트`,expanded:!1,"submenu-id":`menu-sub-h-components`},{default:a(()=>[s(M,{label:`Button`}),s(M,{label:`Input`}),s(M,{label:`Select`})]),_:1}),s(M,{label:`토큰`}),s(M,{label:`접근성`})]),_:1})]),_:1}),s(E,{"heading-id":`layout-heading`,title:`사이드바 레이아웃`,description:`수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import MenuSubmenu from '@/components/MenuSubmenu.vue';
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
</template>`},{default:a(()=>[c(`div`,re,[c(`div`,ie,[s(j,{mode:`vertical`,bordered:``,compact:``,"aria-label":`앱 사이드바`},{default:a(()=>[s(M,{label:`개요`,active:``},{icon:a(()=>[s(w,{name:`grid`})]),_:1}),s(L,{label:`문서`,expanded:``,"submenu-id":`menu-sub-sidebar`},{icon:a(()=>[...t[8]||=[c(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[c(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),c(`path`,{d:`M14 2v6h6`})],-1)]]),default:a(()=>[s(M,{label:`시작하기`}),s(M,{label:`컴포넌트`})]),_:1}),s(M,{label:`설정`},{icon:a(()=>[s(w,{name:`settings`})]),_:1})]),_:1})]),t[9]||=c(`div`,{class:`menu_demo-content`},[c(`p`,{style:{margin:`0`}},`선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.`)],-1)])]),_:1}),s(E,{"heading-id":`variant-heading`,title:`변형`,description:`menu_compact · menu_dark로 밀도와 배경을 조절합니다.`,stack:``,code:`<script setup>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
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
</template>`},{default:a(()=>[s(j,{mode:`vertical`,bordered:``,compact:``,"aria-label":`컴팩트 메뉴`},{default:a(()=>[s(M,{label:`항목 A`,active:``}),s(M,{label:`항목 B`}),s(M,{label:`항목 C`})]),_:1}),s(j,{mode:`vertical`,bordered:``,dark:``,"aria-label":`다크 서피스 메뉴`},{default:a(()=>[s(M,{label:`항목 A`,active:``}),s(M,{label:`항목 B`}),s(M,{label:`항목 C`})]),_:1})]),_:1}),s(y,{"heading-id":`api-props-heading`,title:`API · Menu Props`},{default:a(()=>[s(b,{columns:m(R),rows:m(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-item-props-heading`,title:`API · MenuItem Props`},{default:a(()=>[s(b,{columns:m(B),rows:m(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-submenu-props-heading`,title:`API · MenuSubmenu Props`},{default:a(()=>[s(b,{columns:m(H),rows:m(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-group-props-heading`,title:`API · MenuGroup Props`},{default:a(()=>[s(b,{columns:m(W),rows:m(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-slots-heading`,title:`API · Menu Slots`},{default:a(()=>[s(b,{columns:m(K),rows:m(q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-item-slots-heading`,title:`API · MenuItem · MenuSubmenu Slots`},{default:a(()=>[s(b,{columns:m(J),rows:m(Y),"code-column":`name`},null,8,[`columns`,`rows`]),s(b,{columns:m(X),rows:m(Z),"code-column":`name`,style:{"margin-top":`var(--space-md)`}},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[s(b,{columns:m(Q),rows:m(te),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),s(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[s(b,{columns:m(ne),rows:m($),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{oe as default,ae as docMeta};