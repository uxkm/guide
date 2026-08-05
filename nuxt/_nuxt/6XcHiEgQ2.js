import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,v as m,wt as h,xt as g,y as _}from"./CCnt5OSV.js";import{a as v}from"./jFoqhwDN.js";import{b as ee,l as y,t as b}from"./DkmWXf_S.js";import{n as x,t as S}from"./D01l-9yr.js";import{t as C}from"./D5AUKneU.js";import{t as w}from"./gHQDdAlU.js";import{t as T}from"./DD3RWXAt.js";import{l as E,t as D}from"./D6IbhUhQ.js";import{t as O}from"./BYqKyl8G2.js";var k=[`id`,`data-drawer-backdrop`,`data-drawer-open-on-load`,`data-drawer-draggable`,`aria-labelledby`,`hidden`],A={key:0,class:`drawer_handle`,"data-drawer-drag-handle":``,role:`presentation`,"aria-hidden":`true`},j={key:1,class:`drawer_header`,"data-demo-slot":`header`},M=[`id`],N={key:0,class:`drawer_extra`,"data-demo-slot":`extra`},P={class:`drawer_body`,"data-demo-slot":`default`},F=Object.assign({inheritAttrs:!1},{__name:`Drawer`,props:{ripple:S,id:{type:String,required:!0},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},placement:{type:String,default:`right`,validator:e=>[`left`,`right`,`top`,`bottom`].includes(e)},noBackdrop:Boolean,openOnLoad:Boolean,draggable:Boolean,title:String,open:Boolean,footerAlign:{type:String,default:`end`,validator:e=>[`start`,`center`,`end`,`between`,`even`].includes(e)},footerRatio:{type:String,default:`1-1`,validator:e=>[`1-1`,`1-2`,`2-1`].includes(e)},footerNoPadBottom:Boolean},setup(s){let m=new Set([`sm`,`md`,`lg`]),_=new Set([`left`,`right`,`top`,`bottom`]),v={left:`drawer_placement-left`,right:`drawer_placement-right`,top:`drawer_placement-top`,bottom:`drawer_placement-bottom`},y=s,{rippleAttrs:b}=x(y),S=t(),T=r(),E=u(null),D=p(()=>`${y.id}-title`),O=p(()=>m.has(y.size)?y.size:`md`),F=p(()=>_.has(y.placement)?y.placement:`right`),I=p(()=>y.draggable&&F.value===`bottom`);ee(()=>({...y,size:O.value,placement:F.value}),E,T);let L=p(()=>!!(S.header||y.title)),R=p(()=>typeof T.class==`string`&&T.class.includes(`drawer_demo-static`)),z=p(()=>v[F.value]),B=p(()=>{let e=[`drawer_panel`,z.value];return O.value===`sm`&&e.push(`drawer_sm`),O.value===`lg`&&e.push(`drawer_lg`),I.value&&e.push(`drawer_draggable`),e}),V=p(()=>{let e=[`drawer`];return y.open&&e.push(`is-open`),T.class&&e.push(T.class),e}),H=p(()=>{let e=[`drawer_footer`];return y.footerAlign&&y.footerAlign!==`end`&&e.push(`drawer_footer-${y.footerAlign}`),y.footerAlign===`even`&&y.footerRatio&&y.footerRatio!==`1-1`&&e.push(`drawer_footer-even-${y.footerRatio}`),y.footerNoPadBottom&&e.push(`drawer_footer-no-pad-b`),e}),U=p(()=>{let{class:e,...t}=T;return t});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:E,id:s.id,class:V.value,"data-drawer":``,"data-drawer-backdrop":s.noBackdrop?`false`:void 0,"data-drawer-open-on-load":s.openOnLoad?`true`:void 0,"data-drawer-draggable":I.value?`true`:void 0,role:`dialog`,"aria-modal":`true`,"aria-labelledby":D.value,tabindex:`-1`,hidden:R.value||s.open?void 0:!0},U.value),[r[1]||=o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`},null,-1),o(`div`,{class:g(B.value)},[I.value?(n(),l(`div`,A,[...r[0]||=[o(`span`,{class:`drawer_handle-bar`},null,-1)]])):d(``,!0),L.value?(n(),l(`div`,j,[e(t.$slots,`header`,{},()=>[o(`div`,{class:`drawer_title`,id:D.value,role:`heading`,"aria-level":`2`},h(s.title),9,M)]),t.$slots.extra?(n(),l(`div`,N,[e(t.$slots,`extra`)])):d(``,!0),a(w,c({variant:`ghost`,"icon-only":``,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},f(b)),{"icon-before":i(()=>[a(C,{name:`close`,size:`sm`,class:`drawer_close-icon`})]),_:1},16)])):d(``,!0),o(`div`,P,[e(t.$slots,`default`)]),t.$slots.footer?(n(),l(`div`,{key:2,class:g(H.value),"data-demo-slot":`footer`},[e(t.$slots,`footer`)],2)):d(``,!0)],2)],16,k))}}),I=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],L=[{name:`id`,type:`string`,default:`—`,description:`루트 id (필수)`},{name:`title`,type:`string`,default:`—`,description:`패널 제목 (drawer_title)`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`drawer_sm · drawer_lg`},{name:`placement`,type:`'left' | 'right' | 'top' | 'bottom'`,default:`right`,description:`drawer_placement-*`},{name:`no-backdrop`,type:`boolean`,default:`false`,description:`data-drawer-backdrop="false"`},{name:`open-on-load`,type:`boolean`,default:`false`,description:`data-drawer-open-on-load="true"`},{name:`draggable`,type:`boolean`,default:`false`,description:`하단 패널 핸들·헤더 드래그 펼침/접힘 (placement="bottom", data-drawer-draggable)`},{name:`open`,type:`boolean`,default:`false`,description:`열림 상태 (is-open)`},{name:`footer-align`,type:`'start' | 'center' | 'end' | 'between' | 'even'`,default:`end`,description:`푸터 정렬 (drawer_footer-start · center · between · even). between은 drawer_footer-group으로 좌·우 묶음`},{name:`footer-ratio`,type:`'1-1' | '1-2' | '2-1'`,default:`1-1`,description:`균등 정렬(even) 좌·우 비율 (drawer_footer-even-1-2 · even-2-1)`},{name:`footer-no-pad-bottom`,type:`boolean`,default:`false`,description:`푸터 하단 패딩 제거 (drawer_footer-no-pad-b). even과 함께 쓰면 좌우 패딩·간격도 제거`},E],R=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],z=[{name:`header`,description:`헤더 (title 대체)`},{name:`extra`,description:`헤더 보조 영역 (drawer_extra)`},{name:`default`,description:`본문 (drawer_body)`},{name:`footer`,description:`하단 액션 (drawer_footer)`}],B=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],V=[{name:`drawer · drawer_backdrop · drawer_panel`,description:`루트·백드롭·패널`},{name:`drawer_header · drawer_title · drawer_extra · drawer_close`,description:`헤더 파트`},{name:`drawer_body · drawer_footer`,description:`본문·푸터`},{name:`drawer_footer-start · drawer_footer-center · drawer_footer-end · drawer_footer-between · drawer_footer-even`,description:`푸터 정렬 (기본 end)`},{name:`drawer_footer-even-1-2 · drawer_footer-even-2-1`,description:`균등 정렬 좌·우 비율 (기본 1:1)`},{name:`drawer_footer-no-pad-b`,description:`푸터 하단 패딩 없음 (even 조합 시 좌우 패딩·간격 제거)`},{name:`drawer_footer-group`,description:`병합 정렬용 좌·우 버튼 묶음`},{name:`drawer_placement-left · drawer_placement-right · drawer_placement-top · drawer_placement-bottom`,description:`슬라이드 방향`},{name:`drawer_sm · drawer_lg`,description:`패널 크기`},{name:`drawer_handle · drawer_handle-bar · drawer_draggable`,description:`하단 드래그 핸들`},{name:`data-drawer · data-drawer-trigger · data-drawer-close`,description:`JS 연동 속성`},{name:`data-drawer-open-on-load`,description:`페이지 로드 후 자동 열기`},{name:`data-drawer-draggable · data-drawer-drag-handle`,description:`하단 드래그 펼침/접힘`},{name:`is-open · is-opening · is-closing · is-stack-covered · is-expanded · is-dragging · hidden`,description:`열림·닫힘·중첩 하위(백드롭 숨김)·드래그·애니메이션 상태`},...D],H=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`--drawer-z-index`,default:`250`,description:`레이어 순서`},{name:`--drawer-width · --drawer-width-sm · --drawer-width-lg`,default:`24rem · 18rem · 36rem`,description:`좌·우 패널 너비`},{name:`--drawer-height · --drawer-height-sm · --drawer-height-lg`,default:`18rem · 14rem · 26rem`,description:`상·하 패널 높이`},{name:`--drawer-height-expanded`,default:`90%`,description:`하단 드래그 펼침 높이`},{name:`--drawer-panel-duration-x · --drawer-panel-duration-y`,default:`0.32s · 0.36s`,description:`좌·우 / 상·하 슬라이드 시간`},{name:`--drawer-panel-easing-x · --drawer-panel-easing-y`,default:`cubic-bezier(0.32, 0.72, 0, 1) · cubic-bezier(0.33, 1, 0.68, 1)`,description:`방향별 이징`}],W=`<!-- 트리거 -->
<button type="button" data-drawer-trigger="#drawer-1"
  aria-controls="drawer-1" aria-expanded="false">
  Drawer 열기
</button>

<!-- Drawer -->
<div class="drawer" id="drawer-1" data-drawer
  role="dialog" aria-modal="true" aria-labelledby="drawer-1-title"
  tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-1-title">제목</h2>
      <div class="drawer_extra">…</div>
      <button type="button" class="drawer_close"
        data-drawer-close aria-label="닫기">…</button>
    </div>
    <div class="drawer_body">본문</div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_ghost" data-drawer-close>취소</button>
      <button type="button" class="btn btn_filled color_primary" data-drawer-close>저장</button>
    </div>
  </div>
</div>

<!-- 푸터 정렬: start · center · end · between · even -->
<!-- 균등 비율: drawer_footer-even · drawer_footer-even-1-2 · drawer_footer-even-2-1 -->
<!-- 하단 패딩 없음: drawer_footer-no-pad-b (+ even 권장) -->
<div class="drawer_footer drawer_footer-even drawer_footer-no-pad-b">
  <button type="button" class="btn btn_ghost" data-drawer-close>취소</button>
  <button type="button" class="btn btn_filled color_primary" data-drawer-close>확인</button>
</div>

<!-- 옵션: 백드롭 없음 -->
<div class="drawer" id="drawer-plain" data-drawer
  data-drawer-backdrop="false" …>…</div>

<!-- 옵션: 로드 시 자동 열기 -->
<div class="drawer" id="drawer-onboard" data-drawer
  data-drawer-open-on-load="true" …>…</div>

<!-- 옵션: 하단 드래그 시트 -->
<div class="drawer" id="drawer-sheet" data-drawer
  data-drawer-draggable="true" …>
  <div class="drawer_panel drawer_placement-bottom drawer_draggable">
    <div class="drawer_handle" data-drawer-drag-handle aria-hidden="true">
      <span class="drawer_handle-bar"></span>
    </div>
    …
  </div>
</div>`,G={class:`drawer_demo-row`},K={class:`drawer_demo-row`},q={class:`drawer_demo-stack`},J={class:`drawer_demo-frame drawer_demo-frame-compact`},Y={class:`drawer_demo-frame drawer_demo-frame-compact`},X={class:`drawer_demo-frame drawer_demo-frame-compact`},Z={class:`drawer_demo-frame drawer_demo-frame-compact`},te={class:`drawer_footer-group`},Q={class:`drawer_footer-group`},ne={class:`drawer_demo-frame drawer_demo-frame-compact`},re={class:`drawer_footer-group`},ie={class:`drawer_footer-group`},ae={class:`drawer_demo-frame drawer_demo-frame-compact`},oe={class:`drawer_demo-frame drawer_demo-frame-compact`},se={class:`drawer_demo-frame drawer_demo-frame-compact`},ce={class:`drawer_demo-frame drawer_demo-frame-compact`},le={class:`drawer`,id:`drawer-menu`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-menu-title`,tabindex:`-1`,hidden:``},ue={class:`drawer_panel drawer_placement-left`},de={class:`drawer_body`,style:{"padding-top":`0`}},fe={class:`menu menu_vertical menu_compact`,"aria-label":`앱 메뉴`},pe={class:`menu_list`},$={class:`menu_item`},me={class:`menu_item`},he={class:`menu_item`},ge={class:`menu_item`},_e={class:`section`,"aria-labelledby":`usage-heading`},ve={title:`Drawer | HTML Components`,activeNav:`drawer`,pageTitle:`Drawer`},ye={__name:`drawer`,setup(e){return(e,t)=>(n(),l(s,null,[t[31]||=m(`<div class="page_intro"><h1>Drawer</h1><p class="lead">화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세 보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는 오른쪽(<code class="typo_code">drawer_placement-right</code>)입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과 <code class="typo_code">role=&quot;dialog&quot;</code> · <code class="typo_code">aria-modal</code> 접근성을 제공합니다.</p></div>`,1),a(T,{"heading-id":`basic-heading`,title:`기본`,description:`data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
  <Drawer id="drawer-basic" title="기본 Drawer">
    <p>Drawer 패널 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`filled`,color:`primary`,label:`Drawer 열기`,"data-drawer-trigger":`#drawer-basic`,"aria-controls":`drawer-basic`})]),_:1}),a(T,{"heading-id":`placement-heading`,title:`위치`,description:`drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
    <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
    <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
    <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
  </div>
  <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
    <p>화면 왼쪽에서 슬라이드됩니다.</p>
  </Drawer>
  <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
    <p>기본 위치입니다.</p>
  </Drawer>
  <Drawer id="drawer-place-top" placement="top" title="상단 패널">
    <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
  </Drawer>
  <Drawer id="drawer-place-bottom" placement="bottom" title="하단 패널">
    <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
  </Drawer>
</template>`},{default:i(()=>[o(`div`,G,[a(w,{variant:`outline`,label:`왼쪽`,"data-drawer-trigger":`#drawer-place-left`,"aria-controls":`drawer-place-left`}),a(w,{variant:`outline`,label:`오른쪽`,"data-drawer-trigger":`#drawer-place-right`,"aria-controls":`drawer-place-right`}),a(w,{variant:`outline`,label:`위`,"data-drawer-trigger":`#drawer-place-top`,"aria-controls":`drawer-place-top`}),a(w,{variant:`outline`,label:`아래`,"data-drawer-trigger":`#drawer-place-bottom`,"aria-controls":`drawer-place-bottom`})])]),_:1}),a(T,{"heading-id":`size-heading`,title:`크기`,description:`drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
    <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
    <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
  </div>
</template>`},{default:i(()=>[o(`div`,K,[a(w,{variant:`outline`,size:`sm`,label:`Small`,"data-drawer-trigger":`#drawer-size-sm`,"aria-controls":`drawer-size-sm`}),a(w,{variant:`outline`,label:`Default`,"data-drawer-trigger":`#drawer-size-default`,"aria-controls":`drawer-size-default`}),a(w,{variant:`outline`,size:`lg`,label:`Large`,"data-drawer-trigger":`#drawer-size-lg`,"aria-controls":`drawer-size-lg`})])]),_:1}),a(T,{"heading-id":`footer-heading`,title:`헤더·푸터`,description:`drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
  <Drawer id="drawer-footer" title="항목 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="저장" data-drawer-close />
    </template>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`filled`,color:`primary`,label:`항목 편집`,"data-drawer-trigger":`#drawer-footer`,"aria-controls":`drawer-footer`})]),_:1}),a(T,{"heading-id":`footer-align-heading`,title:`푸터 정렬`,description:`footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <!-- 좌측 -->
  <Drawer id="drawer-footer-start" title="좌측 정렬" placement="bottom" footer-align="start">
    <p>footer-align="start"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 가운데 -->
  <Drawer id="drawer-footer-center" title="가운데 정렬" placement="bottom" footer-align="center">
    <p>footer-align="center"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 우측 (기본) -->
  <Drawer id="drawer-footer-end" title="우측 정렬" placement="bottom">
    <p>footer-align="end" (기본)</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 병합: 좌 1 / 우 2 -->
  <Drawer id="drawer-footer-between" title="병합 정렬" placement="bottom" footer-align="between">
    <p>footer-align="between" + drawer_footer-group</p>
    <template #footer>
      <div class="drawer_footer-group">
        <Button variant="ghost" color="danger" label="삭제" data-drawer-close />
      </div>
      <div class="drawer_footer-group">
        <Button variant="ghost" label="취소" data-drawer-close />
        <Button variant="filled" color="primary" label="확인" data-drawer-close />
      </div>
    </template>
  </Drawer>

  <!-- 균등 1:1 -->
  <Drawer id="drawer-footer-even" title="균등 1:1" placement="bottom" footer-align="even">
    <p>footer-align="even" · footer-ratio="1-1"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 균등 1:2 -->
  <Drawer id="drawer-footer-even-1-2" title="균등 1:2" placement="bottom" footer-align="even" footer-ratio="1-2">
    <p>footer-ratio="1-2" — 좌 1 / 우 2</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 균등 2:1 -->
  <Drawer id="drawer-footer-even-2-1" title="균등 2:1" placement="bottom" footer-align="even" footer-ratio="2-1">
    <p>footer-ratio="2-1" — 좌 2 / 우 1</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>

  <!-- 하단 패딩 없음 + 균등 -->
  <Drawer id="drawer-footer-no-pad" title="하단 패딩 없음" placement="bottom" footer-align="even" footer-no-pad-bottom>
    <p>footer-no-pad-bottom + even</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-drawer-close />
      <Button variant="filled" color="primary" label="확인" data-drawer-close />
    </template>
  </Drawer>
</template>`,stack:``},{default:i(()=>[o(`div`,q,[o(`div`,J,[a(F,{id:`drawer-footer-start`,title:`좌측 정렬`,placement:`bottom`,"footer-align":`start`,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[4]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-align="start"`)],-1)]),_:1})]),o(`div`,Y,[a(F,{id:`drawer-footer-center`,title:`가운데 정렬`,placement:`bottom`,"footer-align":`center`,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[5]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-align="center"`)],-1)]),_:1})]),o(`div`,X,[a(F,{id:`drawer-footer-end`,title:`우측 정렬`,placement:`bottom`,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[6]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-align="end"`),_(` (기본)`)],-1)]),_:1})]),o(`div`,Z,[a(F,{id:`drawer-footer-between`,title:`병합 정렬`,placement:`bottom`,"footer-align":`between`,class:`drawer_demo-static`},{footer:i(()=>[o(`div`,te,[a(w,{variant:`ghost`,color:`danger`,label:`삭제`,"data-drawer-close":``})]),o(`div`,Q,[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})])]),default:i(()=>[t[7]||=o(`p`,null,[o(`code`,{class:`typo_code`},`between`),_(` — 좌 1 / 우 2`)],-1)]),_:1})]),o(`div`,ne,[a(F,{id:`drawer-footer-between-2`,title:`병합 정렬`,placement:`bottom`,"footer-align":`between`,class:`drawer_demo-static`},{footer:i(()=>[o(`div`,re,[a(w,{variant:`ghost`,label:`도움말`,"data-drawer-close":``}),a(w,{variant:`ghost`,color:`danger`,label:`삭제`,"data-drawer-close":``})]),o(`div`,ie,[a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})])]),default:i(()=>[t[8]||=o(`p`,null,[o(`code`,{class:`typo_code`},`between`),_(` — 좌 2 / 우 1`)],-1)]),_:1})]),o(`div`,ae,[a(F,{id:`drawer-footer-even`,title:`균등 1:1`,placement:`bottom`,"footer-align":`even`,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[9]||=o(`p`,null,[o(`code`,{class:`typo_code`},`even`),_(` · `),o(`code`,{class:`typo_code`},`footer-ratio="1-1"`)],-1)]),_:1})]),o(`div`,oe,[a(F,{id:`drawer-footer-even-1-2`,title:`균등 1:2`,placement:`bottom`,"footer-align":`even`,"footer-ratio":`1-2`,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[10]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-ratio="1-2"`),_(` — 좌 1 / 우 2`)],-1)]),_:1})]),o(`div`,se,[a(F,{id:`drawer-footer-even-2-1`,title:`균등 2:1`,placement:`bottom`,"footer-align":`even`,"footer-ratio":`2-1`,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[11]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-ratio="2-1"`),_(` — 좌 2 / 우 1`)],-1)]),_:1})]),o(`div`,ce,[a(F,{id:`drawer-footer-no-pad`,title:`하단 패딩 없음`,placement:`bottom`,"footer-align":`even`,"footer-no-pad-bottom":``,class:`drawer_demo-static`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[12]||=o(`p`,null,[o(`code`,{class:`typo_code`},`footer-no-pad-bottom`),_(` + even`)],-1)]),_:1})])])]),_:1}),a(T,{"heading-id":`extra-heading`,title:`헤더 추가 영역`,description:`drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
  <Drawer id="drawer-extra" title="주문 #1042">
    <template #extra>
      <Tag variant="filled" color="success" label="완료" />
    </template>
    <p>상세 정보</p>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`outline`,label:`상세 보기`,"data-drawer-trigger":`#drawer-extra`,"aria-controls":`drawer-extra`})]),_:1}),a(T,{"heading-id":`menu-heading`,title:`메뉴`,description:`Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
    <template #icon-before>
      <Icon name="menu" />
    </template>
  </Button>
  <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
    <p>메뉴 본문</p>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`outline`,"icon-only":``,"aria-label":`메뉴 열기`,"data-drawer-trigger":`#drawer-menu`,"aria-controls":`drawer-menu`},{"icon-before":i(()=>[a(C,{name:`menu`})]),_:1})]),_:1}),a(T,{"heading-id":`open-on-load-heading`,title:`로드 시 자동 열기 (옵션)`,description:`data-drawer-open-on-load="true"를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다.`,code:`<script setup>
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션" open-on-load>
    <p>페이지 로드 후 자동으로 열립니다.</p>
  </Drawer>
</template>`},{default:i(()=>[...t[13]||=[o(`p`,{class:`form_field-hint`},`아래 예시는 옵션 동작 확인용입니다.`,-1)]]),_:1}),a(T,{"heading-id":`nested-heading`,title:`중첩 Drawer`,description:`열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
  <Drawer id="drawer-nested-1" title="1단계 Drawer">
    <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
  </Drawer>
  <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
    <p>중첩된 Drawer입니다.</p>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`ghost`,label:`중첩 예시 열기`,"data-drawer-trigger":`#drawer-nested-1`,"aria-controls":`drawer-nested-1`})]),_:1}),a(T,{"heading-id":`drag-sheet-heading`,title:`하단 드래그 시트`,description:`placement="bottom" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="드래그 시트 열기" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" />
  <Drawer id="drawer-drag" placement="bottom" draggable title="공유 · 액션">
    <p>상단 핸들이나 헤더를 위로 드래그하면 펼쳐지고, 아래로 드래그하면 접히거나 닫힙니다.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-drawer-close />
      <Button variant="filled" color="primary" label="공유" data-drawer-close />
    </template>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`filled`,color:`primary`,label:`드래그 시트 열기`,"data-drawer-trigger":`#drawer-drag`,"aria-controls":`drawer-drag`})]),_:1}),a(T,{"heading-id":`no-backdrop-heading`,title:`백드롭 없음`,description:`data-drawer-backdrop="false"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Drawer from '@/components/Drawer.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
  <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" no-backdrop>
    <p>본문을 가리지 않고 패널만 표시합니다.</p>
  </Drawer>
</template>`},{default:i(()=>[a(w,{variant:`ghost`,label:`백드롭 없이 열기`,"data-drawer-trigger":`#drawer-no-backdrop`,"aria-controls":`drawer-no-backdrop`})]),_:1}),a(F,{id:`drawer-basic`,title:`기본 Drawer`},{footer:i(()=>[a(w,{variant:`ghost`,label:`취소`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`확인`,"data-drawer-close":``})]),default:i(()=>[t[14]||=o(`p`,null,`Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.`,-1),t[15]||=o(`p`,null,[_(`백드롭을 클릭하거나 닫기 버튼, `),o(`kbd`,null,`Esc`),_(` 키로 패널을 닫을 수 있습니다.`)],-1)]),_:1}),t[32]||=o(`div`,{class:`drawer`,id:`drawer-place-left`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-place-left-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-left`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-place-left-title`},`왼쪽 패널`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,`화면 왼쪽에서 슬라이드됩니다.`)])])],-1),t[33]||=o(`div`,{class:`drawer`,id:`drawer-place-right`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-place-right-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-place-right-title`},`오른쪽 패널`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,`기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.`)])])],-1),t[34]||=o(`div`,{class:`drawer`,id:`drawer-place-top`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-place-top-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-top`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-place-top-title`},`상단 패널`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,`검색·필터 바 등 상단에서 내려오는 패널입니다.`)])])],-1),t[35]||=o(`div`,{class:`drawer`,id:`drawer-place-bottom`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-place-bottom-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-bottom`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-place-bottom-title`},`하단 패널`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,`모바일 액션 시트·공유 패널 등에 적합합니다.`)])])],-1),t[36]||=o(`div`,{class:`drawer`,id:`drawer-size-sm`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-size-sm-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right drawer_sm`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-size-sm-title`},`Small`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,[o(`code`,{class:`typo_code`},`drawer_sm`),_(` — 좁은 보조 패널`)])])])],-1),t[37]||=o(`div`,{class:`drawer`,id:`drawer-size-default`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-size-default-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-size-default-title`},`Default`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,`기본 너비 24rem`)])])],-1),t[38]||=o(`div`,{class:`drawer`,id:`drawer-size-lg`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-size-lg-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right drawer_lg`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-size-lg-title`},`Large`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,[o(`code`,{class:`typo_code`},`drawer_lg`),_(` — 넓은 상세·폼 패널`)])])])],-1),t[39]||=o(`div`,{class:`drawer`,id:`drawer-footer`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-footer-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-footer-title`},`항목 편집`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`div`,{class:`form_layout form_layout-vertical`},[o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`drawer-item-name`},`이름`),o(`input`,{class:`input`,type:`text`,id:`drawer-item-name`,placeholder:`항목 이름`})]),o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`drawer-item-desc`},`설명`),o(`textarea`,{class:`textarea`,id:`drawer-item-desc`,rows:`4`,placeholder:`간단한 설명`})]),o(`div`,{class:`form_field`},[o(`label`,{class:`form_field-label`,for:`drawer-item-status`},`상태`),o(`select`,{class:`input`,id:`drawer-item-status`},[o(`option`,null,`활성`),o(`option`,null,`비활성`),o(`option`,null,`보관`)])])])]),o(`div`,{class:`drawer_footer`},[o(`button`,{type:`button`,class:`btn btn_ghost`,"data-drawer-close":``},[o(`span`,{class:`btn_label`},`취소`)]),o(`button`,{type:`button`,class:`btn btn_filled color_primary`,"data-drawer-close":``},[o(`span`,{class:`btn_label`},`저장`)])])])],-1),t[40]||=o(`div`,{class:`drawer`,id:`drawer-extra`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-extra-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-extra-title`},`주문 #1042`),o(`div`,{class:`drawer_extra`},[o(`span`,{class:`tag tag_filled color_success`},`완료`)]),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`dl`,{class:`stat stat_horizontal`},[o(`div`,{class:`stat_item`},[o(`dt`,{class:`stat_label`},`주문일`),o(`dd`,{class:`stat_value`},`2026-06-26`)]),o(`div`,{class:`stat_item`},[o(`dt`,{class:`stat_label`},`금액`),o(`dd`,{class:`stat_value`},`₩128,000`)]),o(`div`,{class:`stat_item`},[o(`dt`,{class:`stat_label`},`결제`),o(`dd`,{class:`stat_value`},`카드`)])]),o(`p`,null,[_(`상세 정보·상태 뱃지 등을 헤더 `),o(`code`,{class:`typo_code`},`drawer_extra`),_(`에 배치할 수 있습니다.`)])])])],-1),o(`div`,le,[t[22]||=o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`},null,-1),o(`div`,ue,[t[21]||=m(`<div class="drawer_header"><h2 class="drawer_title" id="drawer-menu-title">앱 메뉴</h2><button type="button" class="drawer_close" data-drawer-close aria-label="닫기"><svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"></path></svg></button></div>`,1),o(`div`,de,[o(`nav`,fe,[o(`ul`,pe,[o(`li`,$,[o(`a`,{href:`#`,onClick:t[0]||=v(()=>{},[`prevent`]),class:`menu_link is-active`,"aria-current":`page`},[...t[16]||=[m(`<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg><span class="menu_label">대시보드</span>`,2)]])]),o(`li`,me,[o(`a`,{href:`#`,onClick:t[1]||=v(()=>{},[`prevent`]),class:`menu_link`},[...t[17]||=[o(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M3 3v18h18`}),o(`path`,{d:`M7 16l4-8 4 4 6-10`})],-1),o(`span`,{class:`menu_label`},`분석`,-1)]])]),o(`li`,he,[o(`a`,{href:`#`,onClick:t[2]||=v(()=>{},[`prevent`]),class:`menu_link`},[...t[18]||=[o(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`}),o(`circle`,{cx:`9`,cy:`7`,r:`4`})],-1),o(`span`,{class:`menu_label`},`사용자`,-1)]])]),t[20]||=o(`li`,{class:`menu_divider`,role:`separator`},null,-1),o(`li`,ge,[o(`a`,{href:`#`,onClick:t[3]||=v(()=>{},[`prevent`]),class:`menu_link`},[...t[19]||=[o(`svg`,{class:`menu_icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`circle`,{cx:`12`,cy:`12`,r:`3`}),o(`path`,{d:`M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42`})],-1),o(`span`,{class:`menu_label`},`설정`,-1)]])])])])])])]),a(F,{id:`drawer-open-on-load`,size:`sm`,title:`자동 열기 옵션`,"open-on-load":``},{default:i(()=>[...t[23]||=[o(`p`,null,[_(`이 패널은 `),o(`code`,{class:`typo_code`},`data-drawer-open-on-load="true"`),_(` 예시입니다.`)],-1),o(`p`,null,`실서비스에서는 온보딩, 공지, 필수 확인 패널 등에 선택적으로 사용할 수 있습니다.`,-1)]]),_:1}),t[41]||=o(`div`,{class:`drawer`,id:`drawer-nested-1`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-nested-1-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-nested-1-title`},`1단계 Drawer`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,`다음 단계 Drawer를 열어 중첩 동작을 확인하세요.`),o(`button`,{type:`button`,class:`btn btn_outline`,"data-drawer-trigger":`#drawer-nested-2`,"aria-controls":`drawer-nested-2`,"aria-expanded":`false`},[o(`span`,{class:`btn_label`},`2단계 열기`)])])])],-1),t[42]||=o(`div`,{class:`drawer`,id:`drawer-nested-2`,"data-drawer":``,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`drawer-nested-2-title`,tabindex:`-1`,hidden:``},[o(`div`,{class:`drawer_backdrop`,"data-drawer-close":``,"aria-hidden":`true`}),o(`div`,{class:`drawer_panel drawer_placement-right drawer_sm`},[o(`div`,{class:`drawer_header`},[o(`h2`,{class:`drawer_title`,id:`drawer-nested-2-title`},`2단계 Drawer`),o(`button`,{type:`button`,class:`drawer_close`,"data-drawer-close":``,"aria-label":`닫기`},[o(`svg`,{class:`drawer_close-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6 6 18M6 6l12 12`})])])]),o(`div`,{class:`drawer_body`},[o(`p`,null,[_(`중첩된 Drawer입니다. `),o(`kbd`,null,`Esc`),_(`를 누르면 이 패널부터 닫힙니다.`)])]),o(`div`,{class:`drawer_footer`},[o(`button`,{type:`button`,class:`btn btn_filled color_primary`,"data-drawer-close":``},[o(`span`,{class:`btn_label`},`완료`)])])])],-1),a(F,{id:`drawer-drag`,placement:`bottom`,draggable:``,title:`공유 · 액션`},{footer:i(()=>[a(w,{variant:`ghost`,label:`닫기`,"data-drawer-close":``}),a(w,{variant:`filled`,color:`primary`,label:`공유`,"data-drawer-close":``})]),default:i(()=>[t[24]||=o(`p`,null,[_(`상단 핸들이나 헤더를 `),o(`strong`,null,`위로`),_(` 드래그하면 시트가 펼쳐집니다.`)],-1),t[25]||=o(`p`,null,[o(`strong`,null,`아래로`),_(` 드래그하면 기본 높이로 접히고, 더 내리면 닫힙니다.`)],-1),t[26]||=o(`ul`,null,[o(`li`,null,`링크 복사`),o(`li`,null,`메시지 보내기`),o(`li`,null,`다른 앱으로 공유`)],-1)]),_:1}),a(F,{id:`drawer-no-backdrop`,size:`sm`,title:`백드롭 없음`,"no-backdrop":``},{default:i(()=>[...t[27]||=[o(`p`,null,[_(`본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 `),o(`kbd`,null,`Esc`),_(`로 닫으세요.`)],-1)]]),_:1}),o(`section`,_e,[t[28]||=o(`h2`,{id:`usage-heading`},`마크업`,-1),t[29]||=o(`p`,null,[_(`트리거 버튼과 Drawer 루트를 `),o(`code`,{class:`typo_code`},`id`),_(` · `),o(`code`,{class:`typo_code`},`aria-controls`),_(`로 연결합니다. 기본은 닫힌 상태(`),o(`code`,{class:`typo_code`},`hidden`),_(`)이며, 클릭 이벤트로 열립니다.`)],-1),a(O,null,{default:i(()=>[_(h(f(W)),1)]),_:1})]),a(y,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(b,{columns:f(I),rows:f(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(b,{columns:f(R),rows:f(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(b,{columns:f(B),rows:f(V),"code-column":`name`},null,8,[`columns`,`rows`]),t[30]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[_(` 닫기: 백드롭 · `),o(`code`,{class:`typo_code`},`data-drawer-close`),_(` · `),o(`kbd`,null,`Esc`),_(`. 열기·닫기 시 방향별 슬라이드와 백드롭 페이드가 적용됩니다. 중첩 시 `),o(`kbd`,null,`Esc`),_(`는 최상위 패널부터 닫습니다. `)],-1)]),_:1}),a(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(b,{columns:f(H),rows:f(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ye as default,ve as docMeta};