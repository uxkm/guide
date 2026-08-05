import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,st as d,u as f,y as p}from"./CCnt5OSV.js";import{F as m,l as h,t as g,v as _}from"./DkmWXf_S.js";import{t as v}from"./D5AUKneU.js";import{t as y}from"./gHQDdAlU.js";import{t as b}from"./DD3RWXAt.js";import{t as x}from"./Kdlvr--h.js";import{t as S}from"./-gIuMC1U.js";var C=[`aria-label`],w=Object.assign({inheritAttrs:!1},{__name:`BadgeWrap`,props:{ariaLabel:String},setup(i){let a=i,o=u(null),s=r(),p=t(),h=m(`BadgeWrap`,{selfClosing:!1});_(h,a,p,o,s);let g=f(()=>[`badge_wrap`,s.class].filter(Boolean)),v=f(()=>{let{class:e,"aria-label":t,...n}=s;return n});return(t,r)=>(n(),l(`span`,c({ref_key:`rootRef`,ref:o},v.value,{class:g.value,"aria-label":i.ariaLabel??d(s)[`aria-label`]}),[e(t.$slots,`default`)],16,C))}}),T=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`as`,type:`string | Component`,default:`span`,description:`콘텐츠 의미에 맞는 루트 요소 또는 커스텀 컴포넌트`},{name:`color`,type:`string`,default:`primary`,description:`공통 color_* 클래스`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`badge_sm · badge_lg`},{name:`dot`,type:`boolean`,default:`false`,description:`텍스트 앞 점 표시 (badge_dot)`},{name:`count`,type:`boolean`,default:`false`,description:`숫자 카운트 형태 (badge_count)`},{name:`dot-only`,type:`boolean`,default:`false`,description:`점만 표시 (badge_dot-only)`},{name:`label`,type:`string`,default:`—`,description:`배지 텍스트. default 슬롯으로 대체 가능`},{name:`aria-label`,type:`string`,default:`—`,description:`dot-only·카운트 등 접근성 라벨`}],D=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],O=[{name:`aria-label`,type:`string`,default:`—`,description:`래퍼 접근성 라벨 (선택)`}],k=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],A=[{name:`default`,description:`배지 텍스트 (label prop 대체)`}],j=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],M=[{name:`default`,description:`기준 요소 + Badge 자식`}],N=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],P=[{name:`badge`,description:`배지 루트`},{name:`badge_sm · badge_lg`,description:`크기 변형`},{name:`badge_dot · badge_count · badge_dot-only`,description:`형태 변형`},{name:`badge_wrap`,description:`겹침 배치 컨테이너`},{name:`color_*`,description:`공통 색상 유틸`}],F=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],I=[{name:`--badge-font-size · --badge-padding-y · --badge-padding-x`,default:`—`,description:`기본 배지 타이포·패딩`},{name:`--badge-dot-size · --badge-dot-size-sm · --badge-dot-size-lg`,default:`6px · 5px · 7px`,description:`점 크기`},{name:`--badge-count-min-width`,default:`1.25rem`,description:`카운트 최소 너비`},{name:`--badge-overlay-border`,default:`2px`,description:`겹침 시 테두리`}],L={title:`Badge | HTML Components`,activeNav:`badge`,pageTitle:`Badge`},R={__name:`badge`,setup(e){return(e,t)=>(n(),l(s,null,[t[4]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Badge`),o(`p`,{class:`lead`},`상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다.`)],-1),a(b,{"heading-id":`basic-heading`,title:`기본`,description:`공통 color_* 클래스로 의미에 따른 색상을 적용합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
<\/script>

<template>
  <Badge color="default" label="Default" />
  <Badge color="primary" label="Primary" />
  <Badge color="success" label="Success" />
  <Badge color="warning" label="Warning" />
  <Badge color="danger" label="Danger" />
  <Badge color="info" label="Info" />
</template>`},{default:i(()=>[a(S,{color:`default`,label:`Default`}),a(S,{color:`primary`,label:`Primary`}),a(S,{color:`success`,label:`Success`}),a(S,{color:`warning`,label:`Warning`}),a(S,{color:`danger`,label:`Danger`}),a(S,{color:`info`,label:`Info`})]),_:1}),a(b,{"heading-id":`semantic-heading`,title:`시맨틱 요소`,description:`기본은 span이며, as prop으로 콘텐츠 의미에 맞는 HTML 요소 또는 커스텀 컴포넌트를 지정합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
<\/script>

<template>
  <p>
    처리 상태: <Badge as="strong" color="success" label="완료" />
  </p>
  <p>
    검색 결과 <Badge as="data" value="12" count color="primary" label="12" />건
  </p>
  <p>
    <Badge as="mark" color="warning" label="업데이트" /> 확인이 필요합니다.
  </p>
</template>`},{default:i(()=>[o(`p`,null,[t[0]||=p(` 처리 상태: `,-1),a(S,{as:`strong`,color:`success`,label:`완료`})]),o(`p`,null,[t[1]||=p(` 검색 결과 `,-1),a(S,{as:`data`,value:`12`,count:``,color:`primary`,label:`12`}),t[2]||=p(`건 `,-1)]),o(`p`,null,[a(S,{as:`mark`,color:`warning`,label:`업데이트`}),t[3]||=p(` 확인이 필요합니다. `,-1)])]),_:1}),a(b,{"heading-id":`size-heading`,title:`크기`,description:`size prop으로 badge_sm · badge_lg 스케일을 조절합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
<\/script>

<template>
  <Badge size="sm" color="primary" label="Small" />
  <Badge color="primary" label="Medium" />
  <Badge size="lg" color="primary" label="Large" />
</template>`},{default:i(()=>[a(S,{size:`sm`,color:`primary`,label:`Small`}),a(S,{color:`primary`,label:`Medium`}),a(S,{size:`lg`,color:`primary`,label:`Large`})]),_:1}),a(b,{"heading-id":`dot-heading`,title:`Dot 배지`,description:`dot prop으로 상태 표시용 점이 포함된 배지를 만듭니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
<\/script>

<template>
  <Badge dot color="primary" label="Online" />
  <Badge dot color="success" label="Active" />
  <Badge dot color="warning" label="Away" />
  <Badge dot color="danger" label="Offline" />
</template>`},{default:i(()=>[a(S,{dot:``,color:`primary`,label:`Online`}),a(S,{dot:``,color:`success`,label:`Active`}),a(S,{dot:``,color:`warning`,label:`Away`}),a(S,{dot:``,color:`danger`,label:`Offline`})]),_:1}),a(b,{"heading-id":`count-heading`,title:`카운트`,description:`count prop으로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
<\/script>

<template>
  <Badge count color="danger" label="3" />
  <Badge count color="primary" label="12" />
  <Badge count color="success" label="99+" />
  <Badge count size="sm" color="danger" label="5" />
  <Badge count size="lg" color="primary" label="New" />
</template>`},{default:i(()=>[a(S,{count:``,color:`danger`,label:`3`}),a(S,{count:``,color:`primary`,label:`12`}),a(S,{count:``,color:`success`,label:`99+`}),a(S,{count:``,size:`sm`,color:`danger`,label:`5`}),a(S,{count:``,size:`lg`,color:`primary`,label:`New`})]),_:1}),a(b,{"heading-id":`wrap-heading`,title:`겹침 표시`,description:`BadgeWrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import Badge from '@/components/Badge.vue';
import BadgeWrap from '@/components/BadgeWrap.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <BadgeWrap>
    <Button variant="filled" color="primary" label="알림" />
    <Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" />
  </BadgeWrap>
  <BadgeWrap>
    <Button variant="ghost" icon-only aria-label="메시지">
      <template #icon-before>
        <Icon name="message" />
      </template>
    </Button>
    <Badge count color="danger" aria-label="새 메시지 12건" label="12" />
  </BadgeWrap>
  <BadgeWrap>
    <Avatar color="primary" initials="홍" aria-hidden />
    <Badge dot-only color="success" aria-label="온라인" />
  </BadgeWrap>
</template>`},{default:i(()=>[a(w,null,{default:i(()=>[a(y,{variant:`filled`,color:`primary`,label:`알림`}),a(S,{count:``,color:`danger`,"aria-label":`읽지 않은 알림 5건`,label:`5`})]),_:1}),a(w,null,{default:i(()=>[a(y,{variant:`ghost`,"icon-only":``,"aria-label":`메시지`},{"icon-before":i(()=>[a(v,{name:`message`})]),_:1}),a(S,{count:``,color:`danger`,"aria-label":`새 메시지 12건`,label:`12`})]),_:1}),a(w,null,{default:i(()=>[a(x,{color:`primary`,initials:`홍`,"aria-hidden":``}),a(S,{"dot-only":``,color:`success`,"aria-label":`온라인`})]),_:1})]),_:1}),a(h,{"heading-id":`api-props-heading`,title:`API · Badge Props`},{default:i(()=>[a(g,{columns:d(T),rows:d(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-wrap-props-heading`,title:`API · BadgeWrap Props`},{default:i(()=>[a(g,{columns:d(D),rows:d(O),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-slots-heading`,title:`API · Badge Slots`},{default:i(()=>[a(g,{columns:d(k),rows:d(A),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-wrap-slots-heading`,title:`API · BadgeWrap Slots`},{default:i(()=>[a(g,{columns:d(j),rows:d(M),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(g,{columns:d(N),rows:d(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(g,{columns:d(F),rows:d(I),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{R as default,L as docMeta};