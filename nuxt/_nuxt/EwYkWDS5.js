import{B as e,G as t,L as n,U as r,W as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,p,st as m,u as h,v as g,wt as _,xt as v,y}from"./CCnt5OSV.js";import{k as ee,l as b,t as x}from"./DkmWXf_S.js";import{t as S}from"./D5AUKneU.js";import{t as C}from"./gHQDdAlU.js";import{t as w}from"./DD3RWXAt.js";import{t as T}from"./COzQg8iZ.js";import{t as E}from"./BYqKyl8G2.js";import{t as D}from"./C7HWqCQD.js";import{i as O}from"./B0jaduJq.js";import{a as k,i as A,n as j,r as M,t as N}from"./F_OByIiH.js";var P=[`aria-label`,`aria-labelledby`,`hidden`],F={key:0,class:`popover_header`},I=[`id`],L=[`id`],R={class:`popover_body`},z={key:3,class:`popover_footer`},B=Object.assign({inheritAttrs:!1},{__name:`Popover`,props:{placement:String,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},offset:{type:String,default:`md`,validator:A.validator},offsetTop:A,offsetRight:A,offsetBottom:A,offsetLeft:A,open:Boolean,noArrow:Boolean,arrowAnchor:{type:String,default:`content`,validator:e=>[`content`,`target`,`mixed`].includes(e)},panelAlign:j,arrowTargetAlign:O,disabled:Boolean,trigger:{type:String,default:`click`,validator:e=>[`click`,`hover`].includes(e)},title:String,panelLabel:String,interactive:{type:Boolean,default:!0},closable:{type:Boolean,default:void 0},closeLabel:{type:String,default:`닫기`}},setup(m){let g=new Set([`top`,`top-center`,`bottom-center`,`left`,`right`,`end`]),b=new Set([`sm`,`md`,`lg`]),x=new Set([`content`,`target`,`mixed`]),w=new Set([`click`,`hover`]),T=m,E=r(),D=t(),O=f(null),A=`popover-${i().replace(/:/g,``)}`,j=h(()=>b.has(T.size)?T.size:`md`),B=h(()=>x.has(T.arrowAnchor)?T.arrowAnchor:`content`),V=h(()=>w.has(T.trigger)?T.trigger:`click`);ee(()=>({...T,size:j.value,arrowAnchor:B.value,trigger:V.value}),O,E),k(O,{get noArrow(){return T.noArrow},get arrowAnchor(){return B.value},get panelAlign(){return T.panelAlign},get arrowTargetAlign(){return T.arrowTargetAlign},get open(){return T.open},get placement(){return T.placement}},`popover`);let H=h(()=>{let e=[`popover`];return j.value===`sm`&&e.push(`popover_sm`),j.value===`lg`&&e.push(`popover_lg`),e.push(...M(`popover`,T)),e.push(...N(`popover`,T.panelAlign,`start`)),T.noArrow&&e.push(`popover_no-arrow`),B.value===`target`&&e.push(`popover_arrow-anchor-target`),B.value===`mixed`&&e.push(`popover_arrow-anchor-mixed`),T.placement&&g.has(T.placement)&&e.push(`popover_placement-${T.placement}`),T.open&&e.push(`is-open`),T.disabled&&e.push(`is-disabled`),E.class&&e.push(E.class),e}),U=h(()=>{let e={};return T.interactive&&(e[`data-popover`]=``),V.value===`hover`&&(e[`data-popover-trigger`]=`hover`),(B.value===`mixed`||T.panelAlign!==`start`)&&(e[`data-panel-align`]=T.panelAlign),(B.value===`target`||B.value===`mixed`)&&T.arrowTargetAlign!==`center`&&(e[`data-arrow-target-align`]=T.arrowTargetAlign),e}),W=h(()=>{if(!T.interactive)return!T.open||void 0}),G=h(()=>T.closable??V.value===`click`),K=h(()=>!!(T.title||D.title)),q=h(()=>G.value&&(K.value||!!T.panelLabel)),J=h(()=>G.value&&!K.value&&!T.panelLabel),Y=h(()=>{if(K.value||q.value)return`${A}-title`}),X=h(()=>{if(!Y.value)return T.panelLabel||void 0}),Z=h(()=>{let{class:e,...t}=E;return t}),Q=h(()=>({...U.value,...Z.value}));return(t,r)=>(n(),d(`div`,u({ref_key:`rootRef`,ref:O,class:H.value},Q.value),[e(t.$slots,`trigger`),s(`div`,{id:A,class:v([`popover_panel`,{"popover_panel-closable":J.value}]),role:`dialog`,"aria-label":X.value,"aria-labelledby":Y.value,hidden:W.value},[r[0]||=s(`span`,{class:`popover_arrow`,"aria-hidden":`true`},null,-1),q.value?(n(),d(`div`,F,[s(`div`,{id:`${A}-title`,class:`popover_title`},[K.value?e(t.$slots,`title`,{},()=>[y(_(m.title),1)],void 0,0):(n(),d(l,{key:1},[y(_(m.panelLabel),1)],64))],8,I),o(C,{variant:`ghost`,"icon-only":``,class:`popover_close`,"data-popover-close":``,"aria-label":m.closeLabel},{"icon-before":a(()=>[o(S,{name:`close`,size:`sm`,class:`popover_close-icon`})]),_:1},8,[`aria-label`])])):K.value?(n(),d(`div`,{key:1,id:`${A}-title`,class:`popover_title`},[e(t.$slots,`title`,{},()=>[y(_(m.title),1)])],8,L)):p(``,!0),J.value?(n(),c(C,{key:2,variant:`ghost`,"icon-only":``,class:`popover_close popover_close-floating`,"data-popover-close":``,"aria-label":m.closeLabel},{"icon-before":a(()=>[o(S,{name:`close`,size:`sm`,class:`popover_close-icon`})]),_:1},8,[`aria-label`])):p(``,!0),s(`div`,R,[e(t.$slots,`default`)]),t.$slots.footer?(n(),d(`div`,z,[e(t.$slots,`footer`)])):p(``,!0)],10,P)],16))}}),V=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],H=[{name:`placement`,type:`'top' | 'top-center' | 'bottom-center' | 'left' | 'right' | 'end'`,default:`—`,description:`popover_placement-*`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`popover_sm · popover_lg`},{name:`offset`,type:`'none' | 'sm' | 'md' | 'lg'`,default:`md`,description:`전 방향 동일 간격. popover_offset-* · --popover-offset`},{name:`offset-top · offset-right · offset-bottom · offset-left`,type:`'none' | 'sm' | 'md' | 'lg'`,default:`—`,description:`방향별 간격. popover_offset-top-* 등 · --popover-offset-*`},{name:`open`,type:`boolean`,default:`false`,description:`열림 (is-open)`},{name:`no-arrow`,type:`boolean`,default:`false`,description:`화살표 숨김`},{name:`arrow-anchor`,type:`'content' | 'target' | 'mixed'`,default:`content`,description:`화살표 기준. target=화살표만, mixed=패널·화살표 독립`},{name:`panel-align`,type:`'start' | 'center' | 'end'`,default:`start`,description:`패널 교차축 정렬. popover_panel-align-* · data-panel-align`},{name:`arrow-target-align`,type:`'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'`,default:`center`,description:`target·mixed 시 트리거 내 화살표 위치`},{name:`disabled`,type:`boolean`,default:`false`,description:`트리거 비활성 (is-disabled)`},{name:`trigger`,type:`'click' | 'hover'`,default:`click`,description:`hover 시 data-popover-trigger="hover"`},{name:`closable`,type:`boolean`,default:`click 시 true`,description:`패널 닫기 버튼. hover 트리거는 기본 false`},{name:`close-label`,type:`string`,default:`닫기`,description:`닫기 버튼 aria-label`},{name:`title`,type:`string`,default:`—`,description:`패널 제목`},{name:`panel-label`,type:`string`,default:`—`,description:`패널 aria-label. 클릭 트리거 시 헤더에 제목으로 표시`},{name:`interactive`,type:`boolean`,default:`true`,description:`false면 data-popover 미부여 (정적 데모)`}],U=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],W=[{name:`trigger`,description:`트리거 버튼·링크`},{name:`title`,description:`제목 (title prop 대체)`},{name:`default`,description:`패널 본문`},{name:`footer`,description:`하단 액션`}],G=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],K=[{name:`popover · popover_panel · popover_arrow`,description:`루트·패널·화살표`},{name:`popover_header · popover_title · popover_close · popover_body · popover_footer`,description:`패널 파트`},{name:`popover_sm · popover_lg · popover_no-arrow`,description:`크기·화살표`},{name:`popover_panel-align-center · popover_panel-align-end`,description:`패널 교차축 정렬`},{name:`popover_arrow-anchor-target · popover_arrow-anchor-mixed`,description:`화살표·혼합 기준`},{name:`popover_offset-none · popover_offset-sm · popover_offset-lg`,description:`전 방향 간격`},{name:`popover_offset-top-* · popover_offset-right-* · popover_offset-bottom-* · popover_offset-left-*`,description:`방향별 간격`},{name:`popover_placement-*`,description:`배치 변형`},{name:`data-popover · data-popover-trigger · data-popover-close · data-panel-align · data-arrow-target-align`,description:`JS 연동`},{name:`is-open · is-disabled · hidden`,description:`상태`}],q=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],J=[{name:`--popover-min-width · --popover-max-width`,default:`10rem · 20rem`,description:`패널 너비`},{name:`--popover-padding-x · --popover-padding-y`,default:`var(--space-md)`,description:`패널 패딩`},{name:`--popover-offset · --popover-offset-sm · --popover-offset-md · --popover-offset-lg`,default:`var(--space-sm) · …`,description:`전 방향 간격 토큰`},{name:`--popover-offset-top · --popover-offset-right · --popover-offset-bottom · --popover-offset-left`,default:`offset 상속`,description:`방향별 간격 (배치에 따라 적용)`},{name:`--popover-arrow-size`,default:`8px`,description:`화살표 크기`},{name:`--popover-panel-radius · --popover-arrow-edge-inset`,default:`12px · calc`,description:`패널 라운드·화살표 가장자리 여백`},{name:`--popover-arrow-position`,default:`—`,description:`target 기준 시 트리거 중앙 위치(px)`}],Y=`<!-- 기본 — panel-label 있음 -->
<Popover panel-label="안내">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
  </template>
  <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
</Popover>

<!-- panel-label 없음 -->
<Popover>
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
  </template>
  <p>짧은 안내 문구만 필요할 때 사용합니다.</p>
</Popover>

<!-- 제목 · 푸터 -->
<Popover title="항목 삭제">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
  </template>
  <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
  <template #footer>
    <Button variant="ghost" size="sm" label="취소" data-popover-close />
    <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
  </template>
</Popover>

<!-- 호버 트리거 -->
<Popover trigger="hover" panel-label="에스크로 설명">
  <template #trigger>
    <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
  </template>
  구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
</Popover>

<!-- 배치 · 크기 · 간격 -->
<Popover placement="top-center" size="lg" offset="lg" panel-label="큰 Popover">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="위 · 가운데" aria-haspopup="dialog" />
  </template>
  <p>큰 패널입니다.</p>
</Popover>

<!-- 간격 — 방향별 -->
<Popover placement="left" offset-left="lg" panel-label="왼쪽 간격 lg">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" label="offset-left" aria-haspopup="dialog" />
  </template>
  <p>트리거 왼쪽 배치 시 offset-left가 적용됩니다.</p>
</Popover>

<!-- 혼합 — 패널 가운데 · 화살표 왼쪽 -->
<Popover arrow-anchor="mixed" panel-align="center" arrow-target-align="left" open panel-label="혼합">
  <template #trigger>
    <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
  </template>
  <p>패널은 가운데, 화살표는 트리거 왼쪽을 가리킵니다.</p>
</Popover>`,X={class:`popover_row`},Z={class:`popover_demo-placement`,style:{"min-height":`12rem`}},Q={class:`popover_demo-placement-cell-top`},$={class:`popover_demo-placement-cell-left`},te={class:`popover_demo-placement-cell-center`},ne={class:`popover_demo-placement-cell-right`},re={class:`popover_inline-sentence`},ie={class:`popover_row`},ae={class:`popover_demo-placement`},oe={class:`popover_demo-placement-cell-top`},se={class:`popover_demo-placement-cell-left`},ce={class:`popover_demo-placement-cell-center`},le={class:`popover_demo-placement-cell-right`},ue={class:`popover_row`,style:{width:`100%`,"justify-content":`space-between`}},de={class:`form_field`},fe={class:`popover_row`,style:{"align-items":`flex-start`}},pe={class:`popover_row`,style:{"align-items":`flex-start`}},me={class:`popover_row`,style:{"align-items":`center`}},he={class:`popover_row`,style:{"align-items":`flex-start`,display:`grid`,"grid-template-columns":`repeat(3, minmax(11rem, 1fr))`,gap:`var(--space-xl)`}},ge={style:{display:`flex`,"justify-content":`center`}},_e={style:{display:`flex`,"justify-content":`center`}},ve={style:{display:`flex`,"justify-content":`center`}},ye={class:`popover_row`,style:{"align-items":`flex-start`,display:`grid`,"grid-template-columns":`repeat(3, minmax(11rem, 1fr))`,gap:`var(--space-xl)`}},be={class:`popover_row`,style:{"align-items":`flex-start`,display:`grid`,"grid-template-columns":`repeat(3, minmax(11rem, 1fr))`,gap:`var(--space-xl)`}},xe={style:{display:`flex`,"justify-content":`flex-end`}},Se={style:{display:`flex`,"justify-content":`flex-end`}},Ce={style:{display:`flex`,"justify-content":`flex-end`}},we={class:`section`,"aria-labelledby":`usage-heading`},Te={title:`Popover | HTML Components`,activeNav:`popover`,pageTitle:`Popover`},Ee={__name:`popover`,setup(e){return(e,t)=>(n(),d(l,null,[t[58]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Popover`),s(`p`,{class:`lead`},[y(`클릭·호버로 트리거 옆에 떠 있는 정보 패널 컴포넌트입니다. 짧은 설명·확인·간단한 폼 등 Dropdown보다 풍부한 콘텐츠를 표시할 때 사용하며, `),s(`code`,{class:`typo_code`},`aria-haspopup="dialog"`),y(` · `),s(`code`,{class:`typo_code`},`role="dialog"`),y(`로 접근성을 보장합니다.`)])],-1),o(w,{"heading-id":`basic-heading`,title:`기본`,description:`Popover와 #trigger 슬롯으로 트리거와 패널을 구성합니다. panel-label을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover panel-label="안내">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
    </template>
    <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
  </Popover>
</template>`},{default:a(()=>[o(B,{"panel-label":`안내`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`Popover 열기`,"aria-haspopup":`dialog`})]),default:a(()=>[t[0]||=s(`p`,null,`트리거를 클릭하면 이 패널이 표시됩니다.`,-1)]),_:1})]),_:1}),o(w,{"heading-id":`no-label-heading`,title:`라벨 없음`,description:`panel-label을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover>
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
    </template>
    <p>짧은 안내 문구만 필요할 때 사용합니다.</p>
  </Popover>
</template>`},{default:a(()=>[o(B,null,{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`라벨 없음`,"aria-haspopup":`dialog`})]),default:a(()=>[t[1]||=s(`p`,null,`짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.`,-1)]),_:1})]),_:1}),o(w,{"heading-id":`open-heading`,title:`열린 상태`,description:`open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded="true"를 함께 지정합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover open :interactive="false" class="popover_demo-static" panel-label="열린 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="filled" color="primary" label="열림" haspopup="dialog" :expanded="true" />
    </template>
    <p>정적 데모용 열린 상태입니다.</p>
  </Popover>
</template>`},{default:a(()=>[o(B,{open:``,interactive:!1,class:`popover_demo-static`,"panel-label":`열린 Popover`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`filled`,color:`primary`,label:`열림`,haspopup:`dialog`,expanded:!0})]),default:a(()=>[t[2]||=s(`p`,null,`정적 데모용 열린 상태입니다.`,-1)]),_:1})]),_:1}),o(w,{"heading-id":`size-heading`,title:`크기`,description:`size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover size="sm" panel-label="작은 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" />
    </template>
    <p>작은 패널입니다.</p>
  </Popover>
</template>`},{default:a(()=>[o(B,{size:`sm`,"panel-label":`작은 Popover`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`Small`,"aria-haspopup":`dialog`})]),default:a(()=>[t[3]||=s(`p`,null,`작은 패널입니다. 짧은 안내에 적합합니다.`,-1)]),_:1}),o(B,{"panel-label":`기본 Popover`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`Medium`,"aria-haspopup":`dialog`})]),default:a(()=>[t[4]||=s(`p`,null,`기본 크기 패널입니다.`,-1)]),_:1}),o(B,{size:`lg`,"panel-label":`큰 Popover`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`lg`,label:`Large`,"aria-haspopup":`dialog`})]),default:a(()=>[t[5]||=s(`p`,null,`큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.`,-1)]),_:1})]),_:1}),o(w,{"heading-id":`offset-heading`,title:`간격`,description:`offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔패널 사이에 적용됩니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover offset="lg" panel-label="lg">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" />
    </template>
    <p>넓은 간격</p>
  </Popover>
</template>`},{default:a(()=>[t[14]||=s(`p`,{class:`form_field-hint`,style:{"margin-bottom":`var(--space-md)`}},`전 방향 동일`,-1),s(`div`,X,[o(B,{offset:`none`,"panel-label":`none`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`none`,"aria-haspopup":`dialog`})]),default:a(()=>[t[6]||=s(`p`,null,`간격 없음`,-1)]),_:1}),o(B,{offset:`sm`,"panel-label":`sm`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`sm`,"aria-haspopup":`dialog`})]),default:a(()=>[t[7]||=s(`p`,null,`좁은 간격`,-1)]),_:1}),o(B,{"panel-label":`md`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`md`,"aria-haspopup":`dialog`})]),default:a(()=>[t[8]||=s(`p`,null,`기본 간격`,-1)]),_:1}),o(B,{offset:`lg`,"panel-label":`lg`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`lg`,"aria-haspopup":`dialog`})]),default:a(()=>[t[9]||=s(`p`,null,`넓은 간격`,-1)]),_:1})]),t[15]||=s(`p`,{class:`form_field-hint`,style:{margin:`var(--space-lg) 0 var(--space-md)`}},`방향별 (offset-* · placement)`,-1),s(`div`,Z,[s(`div`,Q,[o(B,{placement:`top-center`,"offset-top":`lg`,"panel-label":`offset-top lg`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`위`,"aria-haspopup":`dialog`})]),default:a(()=>[t[10]||=s(`p`,null,`위쪽 간격`,-1)]),_:1})]),s(`div`,$,[o(B,{placement:`left`,"offset-left":`lg`,"panel-label":`offset-left lg`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`왼쪽`,"aria-haspopup":`dialog`})]),default:a(()=>[t[11]||=s(`p`,null,`왼쪽 간격`,-1)]),_:1})]),s(`div`,te,[o(B,{"offset-bottom":`lg`,"panel-label":`offset-bottom lg`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`아래`,"aria-haspopup":`dialog`})]),default:a(()=>[t[12]||=s(`p`,null,`아래쪽 간격`,-1)]),_:1})]),s(`div`,ne,[o(B,{placement:`right`,"offset-right":`lg`,"panel-label":`offset-right lg`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`오른쪽`,"aria-haspopup":`dialog`})]),default:a(()=>[t[13]||=s(`p`,null,`오른쪽 간격`,-1)]),_:1})])])]),_:1}),o(w,{"heading-id":`title-heading`,title:`제목`,description:`title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover title="배송 안내">
    <template #trigger>
      <Button class="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
    </template>
    <p>평일 오후 2시 이전 주문은 당일 출고됩니다.</p>
  </Popover>
</template>`},{default:a(()=>[o(B,{title:`배송 안내`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`ghost`,label:`도움말`,"aria-haspopup":`dialog`})]),default:a(()=>[t[16]||=s(`p`,null,`평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.`,-1)]),_:1})]),_:1}),o(w,{"heading-id":`footer-heading`,title:`푸터`,description:"`#footer` 슬롯·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다.",code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover title="항목 삭제">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
    </template>
    <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" size="sm" label="취소" data-popover-close />
      <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
    </template>
  </Popover>
</template>`},{default:a(()=>[o(B,{title:`항목 삭제`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`삭제 확인`,"aria-haspopup":`dialog`})]),footer:a(()=>[o(C,{variant:`ghost`,size:`sm`,label:`취소`,"data-popover-close":``}),o(C,{variant:`filled`,color:`danger`,size:`sm`,label:`삭제`,"data-popover-close":``})]),default:a(()=>[t[17]||=s(`p`,null,`이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`,-1)]),_:1})]),_:1}),o(w,{"heading-id":`hover-heading`,title:`호버 트리거`,description:`trigger="hover"로 마우스 오버·포커스 시 패널을 표시합니다. data-popover-trigger="hover"와 동일하며, 짧은 설명·용어 정의에 적합합니다.`,code:`<script setup>
import Link from '@/components/Link.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <div class="popover_inline-sentence">
    결제 시
    <Popover trigger="hover" panel-label="에스크로 설명">
      <template #trigger>
        <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
      </template>
      구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
    </Popover>
    서비스를 이용할 수 있습니다.
  </div>
</template>`},{default:a(()=>[s(`div`,re,[t[19]||=y(` 결제 시 `,-1),o(B,{trigger:`hover`,"panel-label":`에스크로 설명`},{trigger:a(()=>[o(T,{class:`popover_trigger`,label:`에스크로`,"aria-haspopup":`dialog`})]),default:a(()=>[t[18]||=y(` 구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다. `,-1)]),_:1}),t[20]||=y(` 서비스를 이용할 수 있습니다. `,-1)])]),_:1}),o(w,{"heading-id":`trigger-heading`,title:`트리거 유형`,description:`Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <div class="popover_row">
    <Popover panel-label="Button 트리거">
      <template #trigger>
        <Button class="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
      </template>
      <p>버튼 트리거 예시입니다.</p>
    </Popover>
  </div>
</template>`},{default:a(()=>[s(`div`,ie,[o(B,{"panel-label":`Button 트리거`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`filled`,color:`primary`,label:`Button`,"aria-haspopup":`dialog`})]),default:a(()=>[t[21]||=s(`p`,null,`버튼 트리거 예시입니다.`,-1)]),_:1}),o(B,{"panel-label":`Link 트리거`},{trigger:a(()=>[o(T,{class:`popover_trigger`,label:`Link 트리거`,"aria-haspopup":`dialog`})]),default:a(()=>[t[22]||=s(`p`,null,`링크 스타일 트리거입니다.`,-1)]),_:1}),o(B,{"panel-label":`추가 정보`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`ghost`,"icon-only":``,"aria-label":`정보`,"aria-haspopup":`dialog`},{"icon-before":a(()=>[o(S,{name:`info`})]),_:1})]),default:a(()=>[t[23]||=s(`p`,null,`아이콘 전용 트리거입니다.`,-1)]),_:1})])]),_:1}),o(w,{"heading-id":`placement-heading`,title:`배치`,description:`placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. popover_placement-* 클래스와 대응되며, 기본은 트리거 아래·왼쪽 정렬입니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover placement="top-center" panel-label="위쪽 가운데 배치">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
    </template>
    <p>트리거 위 · 가운데</p>
  </Popover>
</template>`},{default:a(()=>[s(`div`,ae,[s(`div`,oe,[o(B,{placement:`top-center`,"panel-label":`위쪽 가운데 배치`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`위`,"aria-haspopup":`dialog`})]),default:a(()=>[t[24]||=s(`p`,null,`트리거 위 · 가운데`,-1)]),_:1})]),s(`div`,se,[o(B,{placement:`left`,"panel-label":`왼쪽 배치`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`왼쪽`,"aria-haspopup":`dialog`})]),default:a(()=>[t[25]||=s(`p`,null,`트리거 왼쪽`,-1)]),_:1})]),s(`div`,ce,[o(B,{placement:`bottom-center`,"panel-label":`아래쪽 가운데 배치`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`아래`,"aria-haspopup":`dialog`})]),default:a(()=>[t[26]||=s(`p`,null,`트리거 아래 · 가운데`,-1)]),_:1})]),s(`div`,le,[o(B,{placement:`right`,"panel-label":`오른쪽 배치`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`오른쪽`,"aria-haspopup":`dialog`})]),default:a(()=>[t[27]||=s(`p`,null,`트리거 오른쪽`,-1)]),_:1})])]),s(`div`,ue,[o(B,{placement:`top`,"panel-label":`위쪽 왼쪽 정렬`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`ghost`,label:`위 · 왼쪽 정렬`,"aria-haspopup":`dialog`})]),default:a(()=>[t[28]||=s(`p`,null,`패널 왼쪽 정렬`,-1)]),_:1}),o(B,{"panel-label":`아래쪽 왼쪽 정렬`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`ghost`,label:`아래 · 왼쪽 정렬`,"aria-haspopup":`dialog`})]),default:a(()=>[t[29]||=s(`p`,null,`기본 배치`,-1)]),_:1}),o(B,{placement:`end`,"panel-label":`오른쪽 정렬`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`ghost`,label:`아래 · 오른쪽 정렬`,"aria-haspopup":`dialog`})]),default:a(()=>[t[30]||=s(`p`,null,`패널 오른쪽 정렬`,-1)]),_:1})])]),_:1}),o(w,{"heading-id":`form-heading`,title:`폼`,description:`Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <Popover title="빠른 메모">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
    </template>
    <div class="form_field">
      <label class="form_label" for="popover-memo-input">내용</label>
      <Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" />
    </div>
    <template #footer>
      <Button variant="ghost" size="sm" label="취소" data-popover-close />
      <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close />
    </template>
  </Popover>
</template>`},{default:a(()=>[o(B,{title:`빠른 메모`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`메모 추가`,"aria-haspopup":`dialog`})]),footer:a(()=>[o(C,{variant:`ghost`,size:`sm`,label:`취소`,"data-popover-close":``}),o(C,{variant:`filled`,color:`primary`,size:`sm`,label:`저장`,"data-popover-close":``})]),default:a(()=>[s(`div`,de,[t[31]||=s(`label`,{class:`form_label`,for:`popover-memo-input`},`내용`,-1),o(D,{id:`popover-memo-input`,rows:3,placeholder:`메모를 입력하세요`})])]),_:1})]),_:1}),o(w,{"heading-id":`arrow-anchor-heading`,title:`화살표 기준`,description:`arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 패널·화살표를 독립 조합합니다. target은 패널 CSS·화살표 JS, mixed는 패널·화살표 모두 JS로 트리거 기준 배치합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover arrow-anchor="target" panel-label="target">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" />
    </template>
    <p>화살표가 트리거 중앙을 가리킵니다.</p>
  </Popover>
</template>`},{default:a(()=>[t[49]||=s(`p`,{class:`form_field-hint`,style:{"margin-bottom":`var(--space-md)`}},`기준 비교`,-1),s(`div`,fe,[o(B,{"panel-label":`content`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[32]||=s(`p`,null,`패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.`,-1)]),_:1}),o(B,{"arrow-anchor":`target`,"panel-label":`target`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[33]||=s(`p`,null,`패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.`,-1)]),_:1})]),t[50]||=s(`p`,{class:`form_field-hint`,style:{margin:`var(--space-lg) 0 var(--space-md)`}},`target — 좌 · 가운데 · 우 (아래 배치)`,-1),s(`div`,pe,[o(B,{"arrow-anchor":`target`,"arrow-target-align":`left`,"panel-label":`left`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[34]||=s(`p`,null,`트리거 왼쪽을 가리킵니다.`,-1)]),_:1}),o(B,{"arrow-anchor":`target`,"panel-label":`center`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[35]||=s(`p`,null,`트리거 가운데를 가리킵니다.`,-1)]),_:1}),o(B,{"arrow-anchor":`target`,"arrow-target-align":`right`,"panel-label":`right`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[36]||=s(`p`,null,`트리거 오른쪽을 가리킵니다.`,-1)]),_:1})]),t[51]||=s(`p`,{class:`form_field-hint`,style:{margin:`var(--space-lg) 0 var(--space-md)`}},`target — 위 · 가운데 · 아래 (왼쪽 배치)`,-1),s(`div`,me,[o(B,{placement:`left`,"arrow-anchor":`target`,"arrow-target-align":`top`,"panel-label":`top`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`트리거`,"aria-haspopup":`dialog`})]),default:a(()=>[t[37]||=s(`p`,null,`트리거 위쪽을 가리킵니다.`,-1)]),_:1}),o(B,{placement:`left`,"arrow-anchor":`target`,"panel-label":`center`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`트리거`,"aria-haspopup":`dialog`})]),default:a(()=>[t[38]||=s(`p`,null,`트리거 가운데를 가리킵니다.`,-1)]),_:1}),o(B,{placement:`left`,"arrow-anchor":`target`,"arrow-target-align":`bottom`,"panel-label":`bottom`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,label:`트리거`,"aria-haspopup":`dialog`})]),default:a(()=>[t[39]||=s(`p`,null,`트리거 아래쪽을 가리킵니다.`,-1)]),_:1})]),t[52]||=s(`p`,{class:`form_field-hint`,style:{margin:`var(--space-lg) 0 var(--space-md)`}},`mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우`,-1),s(`div`,he,[s(`div`,ge,[o(B,{"arrow-anchor":`mixed`,"panel-align":`center`,"arrow-target-align":`left`,"panel-label":`가운데 · ←`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[40]||=s(`p`,null,`패널 가운데, 화살표 트리거 왼쪽.`,-1)]),_:1})]),s(`div`,_e,[o(B,{"arrow-anchor":`mixed`,"panel-align":`center`,"panel-label":`가운데 · ●`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[41]||=s(`p`,null,`패널·화살표 모두 트리거 가운데.`,-1)]),_:1})]),s(`div`,ve,[o(B,{"arrow-anchor":`mixed`,"panel-align":`center`,"arrow-target-align":`right`,"panel-label":`가운데 · →`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[42]||=s(`p`,null,`패널 가운데, 화살표 트리거 오른쪽.`,-1)]),_:1})])]),t[53]||=s(`p`,{class:`form_field-hint`,style:{margin:`var(--space-lg) 0 var(--space-md)`}},`mixed — 패널 왼쪽 · 화살표 조합`,-1),s(`div`,ye,[s(`div`,null,[o(B,{"arrow-anchor":`mixed`,"panel-align":`start`,"arrow-target-align":`left`,"panel-label":`왼쪽 · ←`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[43]||=s(`p`,null,`패널 왼쪽 정렬, 화살표 왼쪽.`,-1)]),_:1})]),s(`div`,null,[o(B,{"arrow-anchor":`mixed`,"panel-align":`start`,"panel-label":`왼쪽 · ●`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[44]||=s(`p`,null,`패널 왼쪽, 화살표 가운데.`,-1)]),_:1})]),s(`div`,null,[o(B,{"arrow-anchor":`mixed`,"panel-align":`start`,"arrow-target-align":`right`,"panel-label":`왼쪽 · →`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[45]||=s(`p`,null,`패널 왼쪽, 화살표 오른쪽.`,-1)]),_:1})])]),t[54]||=s(`p`,{class:`form_field-hint`,style:{margin:`var(--space-lg) 0 var(--space-md)`}},`mixed — 패널 오른쪽 · 화살표 조합`,-1),s(`div`,be,[s(`div`,xe,[o(B,{"arrow-anchor":`mixed`,"panel-align":`end`,"arrow-target-align":`left`,"panel-label":`오른쪽 · ←`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[46]||=s(`p`,null,`패널 오른쪽 정렬, 화살표 왼쪽.`,-1)]),_:1})]),s(`div`,Se,[o(B,{"arrow-anchor":`mixed`,"panel-align":`end`,"panel-label":`오른쪽 · ●`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[47]||=s(`p`,null,`패널 오른쪽, 화살표 가운데.`,-1)]),_:1})]),s(`div`,Ce,[o(B,{"arrow-anchor":`mixed`,"panel-align":`end`,"arrow-target-align":`right`,"panel-label":`오른쪽 · →`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`outline`,size:`sm`,label:`S`,"aria-haspopup":`dialog`})]),default:a(()=>[t[48]||=s(`p`,null,`패널 오른쪽, 화살표 오른쪽.`,-1)]),_:1})])])]),_:1}),o(w,{"heading-id":`no-arrow-heading`,title:`화살표 없음`,description:`no-arrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
<\/script>

<template>
  <Popover no-arrow panel-label="화살표 없는 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
    </template>
    <p>화살표가 표시되지 않는 패널입니다.</p>
  </Popover>
</template>`},{default:a(()=>[o(B,{"no-arrow":``,"panel-label":`화살표 없는 Popover`},{trigger:a(()=>[o(C,{class:`popover_trigger`,variant:`ghost`,label:`화살표 없음`,"aria-haspopup":`dialog`})]),default:a(()=>[t[55]||=s(`p`,null,`화살표가 표시되지 않는 패널입니다.`,-1)]),_:1})]),_:1}),s(`section`,we,[t[56]||=g(`<h2 id="usage-heading">마크업</h2><p><code class="typo_code">Popover</code> 컴포넌트로 트리거·패널·접근성 속성을 조합합니다. <code class="typo_code">trigger</code> · <code class="typo_code">placement</code> · <code class="typo_code">title</code> prop과 <code class="typo_code">#trigger</code> · <code class="typo_code">#footer</code> 슬롯으로 데모와 동일하게 구성할 수 있습니다.</p>`,2),o(E,null,{default:a(()=>[y(_(m(Y)),1)]),_:1})]),o(b,{"heading-id":`api-props-heading`,title:`API · Props`},{default:a(()=>[o(x,{columns:m(V),rows:m(H),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(b,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:a(()=>[o(x,{columns:m(U),rows:m(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(b,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(x,{columns:m(G),rows:m(K),"code-column":`name`},null,8,[`columns`,`rows`]),t[57]||=s(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[y(` 닫기: 닫기 버튼 · 바깥 클릭 · `),s(`code`,{class:`typo_code`},`data-popover-close`),y(` · `),s(`kbd`,null,`Esc`),y(`. 클릭 트리거는 패널 우측 상단에 닫기 버튼이 기본 제공됩니다. 열릴 때 다른 Popover는 자동으로 닫힙니다. `)],-1)]),_:1}),o(b,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(x,{columns:m(q),rows:m(J),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Ee as default,Te as docMeta};