import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,v as m,wt as h,y as g}from"./CCnt5OSV.js";import{S as _,l as v,t as y}from"./DkmWXf_S.js";import{t as b}from"./gHQDdAlU.js";import{t as x}from"./DD3RWXAt.js";import{t as S}from"./Bal4U0O22.js";import{t as C}from"./BYqKyl8G2.js";var w={key:0,class:`empty_image`,"aria-hidden":`true`,"data-demo-slot":`image`},T={key:1,class:`empty_desc`},E={key:2,class:`empty_footer`,"data-demo-slot":`footer`},D=Object.assign({inheritAttrs:!1},{__name:`Empty`,props:{description:String,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},simple:Boolean,block:Boolean},setup(i){let a=new Set([`sm`,`md`,`lg`]),o=i,s=t(),v=r(),y=u(null),b=p(()=>a.has(o.size)?o.size:`md`);_(()=>({...o,size:b.value}),y,v);let x=p(()=>{let e=[`empty`];return b.value===`sm`&&e.push(`empty_sm`),b.value===`lg`&&e.push(`empty_lg`),o.simple&&e.push(`empty_simple`),o.block&&e.push(`empty_block`),v.class&&e.push(v.class),e}),S=p(()=>!o.simple),C=p(()=>!!s.footer),D=p(()=>{let{class:e,...t}=v;return t});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:y,class:x.value,role:`status`},D.value),[S.value?(n(),l(`div`,w,[e(t.$slots,`image`,{},()=>[r[0]||=m(`<svg viewBox="0 0 64 41" fill="none" aria-hidden="true"><ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"></ellipse><path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`,1)])])):d(``,!0),i.description||f(s).description?(n(),l(`p`,T,[e(t.$slots,`description`,{},()=>[g(h(i.description),1)])])):d(``,!0),C.value?(n(),l(`div`,E,[e(t.$slots,`footer`)])):d(``,!0)],16))}}),O=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],k=[{name:`description`,type:`string`,default:`—`,description:`설명 텍스트. description 슬롯으로 대체`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`empty_sm · empty_lg`},{name:`simple`,type:`boolean`,default:`false`,description:`아이콘 숨김 (empty_simple)`},{name:`block`,type:`boolean`,default:`false`,description:`가운데 블록 정렬 (empty_block)`}],A=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],j=[{name:`image`,description:`일러스트·아이콘 (empty_image)`},{name:`description`,description:`설명 (description prop 대체)`},{name:`footer`,description:`액션 버튼·링크 (empty_footer)`}],M=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],N=[{name:`empty · empty_image · empty_desc · empty_footer`,description:`루트·이미지·설명·푸터`},{name:`empty_sm · empty_lg · empty_simple · empty_block`,description:`크기·변형`},{name:`role="status"`,description:`빈 상태 시맨틱`}],P=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`--empty-gap · --empty-padding-y · --empty-padding-x`,default:`—`,description:`간격·패딩`},{name:`--empty-image-size · --empty-image-size-sm · --empty-image-size-lg`,default:`4rem · 3rem · 5rem`,description:`아이콘 크기`},{name:`--empty-desc-size · --empty-desc-max-width`,default:`var(--text-size-sm) · 20rem`,description:`설명 타이포`}],I=`<!-- 기본 -->
<div class="empty" role="status">
  <div class="empty_image" aria-hidden="true">
    <!-- SVG 또는 img -->
  </div>
  <p class="empty_desc">데이터가 없습니다</p>
</div>

<!-- 액션 버튼 -->
<div class="empty" role="status">
  <div class="empty_image" aria-hidden="true">…</div>
  <p class="empty_desc">등록된 프로젝트가 없습니다.</p>
  <div class="empty_footer">
    <button type="button"
      class="btn btn_filled color_primary btn_sm">
      <span class="btn_label">프로젝트 만들기</span>
    </button>
  </div>
</div>

<!-- 테이블·목록 셀 — 아이콘 생략 -->
<div class="empty empty_simple empty_sm empty_block" role="status">
  <p class="empty_desc">항목 없음</p>
</div>`,L={class:`card_body`},R={class:`table_wrap`,style:{"max-width":`var(--input-max-width)`,width:`100%`,"margin-top":`var(--space-md)`}},z={class:`table table_bordered`},B={colspan:`3`,style:{padding:`0`,border:`none`}},V={class:`section`,"aria-labelledby":`usage-heading`},H={title:`Empty | HTML Components`,activeNav:`empty`,pageTitle:`Empty`},U={__name:`empty`,setup(e){return(e,t)=>(n(),l(s,null,[t[5]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Empty`),o(`p`,{class:`lead`},[g(`데이터가 없거나 검색 결과가 없을 때 빈 상태를 안내하는 Empty 컴포넌트입니다. 기본 아이콘·설명·액션 버튼 조합을 지원하며 `),o(`code`,{class:`typo_code`},`role="status"`),g(`로 접근성을 보장합니다.`)])],-1),a(x,{"heading-id":`basic-heading`,title:`기본`,description:`<code class="typo_code">empty_image</code> · <code class="typo_code">empty_desc</code>로 아이콘과 설명을 표시합니다.`,code:`<script setup>
import Empty from '@/components/Empty.vue';
<\/script>

<template>
  <Empty description="데이터가 없습니다" />
</template>`},{default:i(()=>[a(D,{description:`데이터가 없습니다`})]),_:1}),a(x,{"heading-id":`footer-heading`,title:`액션`,description:`<code class="typo_code">empty_footer</code>에 버튼·링크를 배치해 다음 행동을 유도합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Empty from '@/components/Empty.vue';
<\/script>

<template>
  <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
    <template #footer>
      <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
    </template>
  </Empty>
</template>`},{default:i(()=>[a(D,{description:`등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.`},{footer:i(()=>[a(b,{variant:`filled`,color:`primary`,size:`sm`,label:`프로젝트 만들기`})]),_:1})]),_:1}),a(x,{"heading-id":`custom-heading`,title:`커스텀 이미지`,description:`<code class="typo_code">empty_image</code>에 SVG·img를 자유롭게 넣을 수 있습니다.`,code:`<script setup>
import Empty from '@/components/Empty.vue';
<\/script>

<template>
  <Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
    <template #image>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
        <path d="M8 11h6" />
      </svg>
    </template>
  </Empty>
</template>`},{default:i(()=>[a(D,{description:`검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.`},{image:i(()=>[...t[0]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"aria-hidden":`true`},[o(`circle`,{cx:`11`,cy:`11`,r:`7`}),o(`path`,{d:`m20 20-3.5-3.5`}),o(`path`,{d:`M8 11h6`})],-1)]]),_:1})]),_:1}),a(x,{"heading-id":`size-heading`,title:`크기`,description:`<code class="typo_code">empty_sm</code> · <code class="typo_code">empty</code>(기본) · <code class="typo_code">empty_lg</code> 세 가지 스케일을 지원합니다.`,code:`<script setup>
import Empty from '@/components/Empty.vue';
<\/script>

<template>
  <Empty size="sm" description="Small" />
  <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
  <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />
</template>`},{default:i(()=>[a(D,{size:`sm`,description:`Small`}),a(D,{description:`Medium (기본)`,style:{"margin-top":`var(--space-md)`}}),a(D,{size:`lg`,description:`Large`,style:{"margin-top":`var(--space-md)`}})]),_:1}),a(x,{"heading-id":`simple-heading`,title:`설명만`,description:`<code class="typo_code">empty_simple</code>은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다.`,code:`<script setup>
import Empty from '@/components/Empty.vue';
<\/script>

<template>
  <Empty simple size="sm" description="일정 없음" />
</template>`},{default:i(()=>[a(D,{simple:``,size:`sm`,description:`일정 없음`})]),_:1}),a(x,{"heading-id":`block-heading`,title:`블록 · 컨테이너`,description:`<code class="typo_code">empty_block</code>은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import Empty from '@/components/Empty.vue';
<\/script>

<template>
  <Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
    <div class="card_header">
      <h3 class="card_title">알림 목록</h3>
    </div>
    <div class="card_body">
      <Empty block description="새 알림이 없습니다" />
    </div>
  </Card>
  <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
    <table class="table table_bordered">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">상태</th>
          <th scope="col">날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3" style="padding: 0; border: none;">
            <Empty block simple size="sm" description="표시할 항목이 없습니다" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>`},{default:i(()=>[a(S,{variant:`shadow`,style:{"max-width":`var(--input-max-width)`,width:`100%`}},{default:i(()=>[t[1]||=o(`div`,{class:`card_header`},[o(`h3`,{class:`card_title`},`알림 목록`)],-1),o(`div`,L,[a(D,{block:``,description:`새 알림이 없습니다`})])]),_:1}),o(`div`,R,[o(`table`,z,[t[2]||=o(`thead`,null,[o(`tr`,null,[o(`th`,{scope:`col`},`이름`),o(`th`,{scope:`col`},`상태`),o(`th`,{scope:`col`},`날짜`)])],-1),o(`tbody`,null,[o(`tr`,null,[o(`td`,B,[a(D,{block:``,simple:``,size:`sm`,description:`표시할 항목이 없습니다`})])])])])])]),_:1}),o(`section`,V,[t[3]||=o(`h2`,{id:`usage-heading`},`마크업`,-1),t[4]||=o(`p`,null,[g(`빈 상태 영역에 `),o(`code`,{class:`typo_code`},`role="status"`),g(`를 지정하고, 장식용 아이콘에는 `),o(`code`,{class:`typo_code`},`aria-hidden="true"`),g(`를 사용합니다.`)],-1),a(C,null,{default:i(()=>[g(h(f(I)),1)]),_:1})]),a(v,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(y,{columns:f(O),rows:f(k),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(v,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(y,{columns:f(A),rows:f(j),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(v,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(y,{columns:f(M),rows:f(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(v,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(y,{columns:f(P),rows:f(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{U as default,H as docMeta};