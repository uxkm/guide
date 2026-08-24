import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,st as d,u as f}from"./CCnt5OSV.js";import{F as p,l as m,t as h,v as g}from"./DkmWXf_S.js";import{t as _}from"./DD3RWXAt.js";import{t as v}from"./Kdlvr--h.js";import{t as y}from"./DOBgEly8.js";var b=[`aria-label`],x=Object.assign({inheritAttrs:!1,name:`AvatarGroup`},{__name:`AvatarGroup`,props:{ariaLabel:String},setup(i){let a=i,o=u(null),s=r(),m=t(),h=p(`AvatarGroup`,{selfClosing:!1});g(h,a,m,o,s);let _=f(()=>[`avatar_group`,s.class].filter(Boolean)),v=f(()=>{let{class:e,"aria-label":t,...n}=s;return n});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:o},v.value,{class:_.value,"aria-label":i.ariaLabel??d(s)[`aria-label`]}),[e(t.$slots,`default`)],16,b))}}),S=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],C=[{name:`as`,type:`string | Component`,default:`span`,description:`루트 요소 또는 커스텀 컴포넌트`},{name:`name`,type:`string`,default:`—`,description:`common-icons 키. avatar_icon으로 렌더합니다`},{name:`src`,type:`string | { src: string }`,default:`—`,description:`이미지 URL 또는 정적 이미지 객체 (avatar_image)`},{name:`alt`,type:`string`,default:`—`,description:`이미지 대체 텍스트`},{name:`initials`,type:`string`,default:`—`,description:`이니셜 텍스트 (이미지·아이콘 없을 때)`},{name:`color`,type:`string`,default:`—`,description:`이니셜·아이콘 배경 color_*`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'xl'`,default:`md`,description:`avatar_sm · avatar_lg · avatar_xl`},{name:`square`,type:`boolean`,default:`false`,description:`사각형 모서리 (avatar_square)`},{name:`badge-color`,type:`string`,default:`—`,description:`상태 점 색상 (avatar_badge)`},{name:`badge-label`,type:`string`,default:`—`,description:`상태 점 aria-label`},{name:`aria-hidden`,type:`boolean`,default:`false`,description:`그룹 내 장식용 아바타`},{name:`aria-label`,type:`string`,default:`—`,description:`아이콘·커스텀 아바타의 접근성 라벨`}],w=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],T=[{name:`aria-label`,type:`string`,default:`—`,description:`그룹 접근성 라벨 (권장)`}],E=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],D=[{name:`default`,description:`이미지·아이콘·컴포넌트 등 커스텀 콘텐츠`},{name:`icon`,description:`아이콘 슬롯 (avatar_icon)`}],O=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],k=[{name:`default`,description:`Avatar 자식 목록`}],A=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],j=[{name:`avatar`,description:`아바타 루트 (원형)`},{name:`avatar_image`,description:`프로필 이미지`},{name:`avatar_icon`,description:`아이콘 크기`},{name:`avatar_badge`,description:`상태 점`},{name:`avatar_sm · avatar_lg · avatar_xl`,description:`크기 변형`},{name:`avatar_square`,description:`사각형`},{name:`avatar_group`,description:`겹침 그룹 컨테이너`},{name:`color_*`,description:`공통 색상 유틸`}],M=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],N=[{name:`--avatar-size-sm · --avatar-size · --avatar-size-lg · --avatar-size-xl`,default:`1.5rem · 2rem · 2.5rem · 3.5rem`,description:`아바타 지름`},{name:`--avatar-group-overlap`,default:`-0.5rem`,description:`그룹 겹침 오프셋`},{name:`--avatar-badge-size · --avatar-badge-size-sm · --avatar-badge-size-lg`,default:`8px · 6px · 10px`,description:`상태 점 크기`}],P=[`src`],F={title:`Avatar | HTML Components`,activeNav:`avatar`,pageTitle:`Avatar`},I={__name:`avatar`,setup(e){return(e,t)=>(n(),l(s,null,[t[1]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Avatar`),o(`p`,{class:`lead`},`사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다.`)],-1),a(_,{"heading-id":`basic-heading`,title:`기본`,description:`이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar :src="avatarSample" alt="홍길동" />
  <Avatar color="primary" initials="홍" aria-hidden />
  <Avatar name="user" color="default" aria-hidden />
</template>`},{default:i(()=>[a(v,{src:d(y),alt:`홍길동`},null,8,[`src`]),a(v,{color:`primary`,initials:`홍`,"aria-hidden":``}),a(v,{name:`user`,color:`default`,"aria-hidden":``})]),_:1}),a(_,{"heading-id":`source-heading`,title:`이름 · 이미지 · 커스텀 요소`,description:`name으로 기본 아이콘을 사용하고, src 이미지 또는 as와 기본 슬롯을 조합해 커스텀 아바타를 구성합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar name="user" color="primary" aria-label="기본 사용자" />
  <Avatar as="button" aria-label="프로필 열기">
    <img class="avatar_image" :src="avatarSample" alt="" />
  </Avatar>
  <Avatar as="span" color="success" aria-label="온라인 사용자">
    <strong>ON</strong>
  </Avatar>
</template>`},{default:i(()=>[a(v,{name:`user`,color:`primary`,"aria-label":`기본 사용자`}),a(v,{as:`button`,"aria-label":`프로필 열기`},{default:i(()=>[o(`img`,{class:`avatar_image`,src:d(y),alt:``},null,8,P)]),_:1}),a(v,{as:`span`,color:`success`,"aria-label":`온라인 사용자`},{default:i(()=>[...t[0]||=[o(`strong`,null,`ON`,-1)]]),_:1})]),_:1}),a(_,{"heading-id":`size-heading`,title:`크기`,description:`avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
<\/script>

<template>
  <Avatar size="sm" color="primary" initials="A" aria-hidden />
  <Avatar color="primary" initials="B" aria-hidden />
  <Avatar size="lg" color="primary" initials="C" aria-hidden />
  <Avatar size="xl" color="primary" initials="D" aria-hidden />
</template>`},{default:i(()=>[a(v,{size:`sm`,color:`primary`,initials:`A`,"aria-hidden":``}),a(v,{color:`primary`,initials:`B`,"aria-hidden":``}),a(v,{size:`lg`,color:`primary`,initials:`C`,"aria-hidden":``}),a(v,{size:`xl`,color:`primary`,initials:`D`,"aria-hidden":``})]),_:1}),a(_,{"heading-id":`shape-heading`,title:`형태`,description:`기본은 원형이며, square prop으로 avatar_square(둥근 모서리)를 적용합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar color="primary" initials="원" aria-hidden />
  <Avatar square color="primary" initials="각" aria-hidden />
  <Avatar square :src="avatarSample" alt="홍길동" />
</template>`},{default:i(()=>[a(v,{color:`primary`,initials:`원`,"aria-hidden":``}),a(v,{square:``,color:`primary`,initials:`각`,"aria-hidden":``}),a(v,{square:``,src:d(y),alt:`홍길동`},null,8,[`src`])]),_:1}),a(_,{"heading-id":`color-heading`,title:`색상`,description:`이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
<\/script>

<template>
  <Avatar color="default" initials="D" aria-hidden />
  <Avatar color="primary" initials="P" aria-hidden />
  <Avatar color="success" initials="S" aria-hidden />
  <Avatar color="warning" initials="W" aria-hidden />
  <Avatar color="danger" initials="E" aria-hidden />
</template>`},{default:i(()=>[a(v,{color:`default`,initials:`D`,"aria-hidden":``}),a(v,{color:`primary`,initials:`P`,"aria-hidden":``}),a(v,{color:`success`,initials:`S`,"aria-hidden":``}),a(v,{color:`warning`,initials:`W`,"aria-hidden":``}),a(v,{color:`danger`,initials:`E`,"aria-hidden":``})]),_:1}),a(_,{"heading-id":`badge-heading`,title:`상태 배지`,description:`badge-color · badge-label prop으로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
<\/script>

<template>
  <Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
  <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
  <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />
</template>`},{default:i(()=>[a(v,{color:`primary`,initials:`온`,"badge-color":`success`,"badge-label":`온라인`,"aria-hidden":``}),a(v,{color:`default`,initials:`대`,"badge-color":`warning`,"badge-label":`자리 비움`,"aria-hidden":``}),a(v,{color:`default`,initials:`오`,"badge-color":`danger`,"badge-label":`오프라인`,"aria-hidden":``})]),_:1}),a(_,{"heading-id":`group-heading`,title:`그룹`,description:`AvatarGroup으로 여러 아바타를 겹쳐 표시합니다.`,stack:``,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import AvatarGroup from '@/components/AvatarGroup.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <AvatarGroup aria-label="팀 멤버 4명">
    <Avatar color="primary" initials="김" aria-hidden />
    <Avatar color="success" initials="이" aria-hidden />
    <Avatar color="warning" initials="박" aria-hidden />
    <Avatar color="danger" initials="최" aria-hidden />
  </AvatarGroup>
  <AvatarGroup aria-label="팀 멤버 3명">
    <Avatar :src="avatarSample" alt="홍길동" />
    <Avatar color="primary" initials="홍" aria-hidden />
    <Avatar name="plus" color="default" aria-hidden />
  </AvatarGroup>
</template>`},{default:i(()=>[a(x,{"aria-label":`팀 멤버 4명`},{default:i(()=>[a(v,{color:`primary`,initials:`김`,"aria-hidden":``}),a(v,{color:`success`,initials:`이`,"aria-hidden":``}),a(v,{color:`warning`,initials:`박`,"aria-hidden":``}),a(v,{color:`danger`,initials:`최`,"aria-hidden":``})]),_:1}),a(x,{"aria-label":`팀 멤버 3명`},{default:i(()=>[a(v,{src:d(y),alt:`홍길동`},null,8,[`src`]),a(v,{color:`primary`,initials:`홍`,"aria-hidden":``}),a(v,{name:`plus`,color:`default`,"aria-hidden":``})]),_:1})]),_:1}),a(m,{"heading-id":`api-props-heading`,title:`API · Avatar Props`},{default:i(()=>[a(h,{columns:d(S),rows:d(C),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`api-group-props-heading`,title:`API · AvatarGroup Props`},{default:i(()=>[a(h,{columns:d(w),rows:d(T),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`api-slots-heading`,title:`API · Avatar Slots`},{default:i(()=>[a(h,{columns:d(E),rows:d(D),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`api-group-slots-heading`,title:`API · AvatarGroup Slots`},{default:i(()=>[a(h,{columns:d(O),rows:d(k),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(h,{columns:d(A),rows:d(j),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(h,{columns:d(M),rows:d(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{I as default,F as docMeta};