import{B as e,Ct as t,D as n,F as r,G as i,I as a,K as o,L as s,R as c,U as l,W as u,Y as d,b as f,d as p,i as m,it as h,k as g,m as _,nt as v,p as y,st as b,u as x,wt as S,y as C}from"./CCnt5OSV.js";import{_ as w,g as T,l as E,t as D}from"./DkmWXf_S.js";import{n as O,t as k}from"./D01l-9yr.js";import{t as A}from"./D5AUKneU.js";import{t as j}from"./gHQDdAlU.js";import{t as M}from"./CLkCI1eE.js";import{t as N}from"./DD3RWXAt.js";import{s as P,t as F}from"./D6IbhUhQ.js";import{t as I}from"./COzQg8iZ.js";import{n as L,t as R}from"./B1RpTY2w2.js";var z={key:0,"data-demo-slot":`lead`},B={class:`btn_label`},V=[`data-effect`],H=Object.assign({inheritAttrs:!1},{__name:`CollapseExternal`,props:{ripple:k,triggerLabel:{type:String,required:!0},narrow:Boolean,boxed:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},defaultOpen:Boolean,effect:{type:String,default:void 0,validator:e=>e==null||e===``||e===`slide`}},emits:[`update:open`,`open-change`],setup(n,{emit:i}){let a=n,c=i,{rippleAttrs:m}=O(a),h=l(),C=v(null),T=v(null),E=u().replace(/:/g,``),D=`collapse-ext-trigger-${E}`,k=`collapse-ext-panel-${E}`,N=v(a.defaultOpen),P=x(()=>a.open!=null),F=x(()=>P.value?!!a.open:N.value),I=x(()=>a.effect===`slide`?`slide`:void 0),L=x(()=>I.value===`slide`),R=x(()=>[a.narrow?`collapse_demo-narrow`:null,h.class]),H=x(()=>a.boxed?{marginTop:`var(--space-sm)`}:void 0),U=x(()=>a.boxed?{padding:`var(--space-lg)`,border:`1px solid var(--color-border)`,borderRadius:`var(--radius-md)`,background:`var(--color-surface-raised)`}:void 0),W=x(()=>{let{class:e,...t}=h;return t}),G=x(()=>L.value?{}:{hidden:!F.value||void 0}),K=x(()=>L.value?void 0:{"is-open":F.value});function q(){let e=!F.value;P.value||(N.value=e),c(`update:open`,e),c(`open-change`,e)}return o([L,F],([e,t],[n])=>{e&&M(T.value,t,!!n)},{flush:`post`}),r(()=>{L.value&&M(T.value,F.value,!1)}),w(()=>({...a,open:P.value?!!a.open:void 0,defaultOpen:!!a.defaultOpen,controlled:P.value,effect:I.value}),C,h,F),(r,i)=>(s(),_(`div`,g({ref_key:`rootRef`,ref:C,class:R.value},W.value),[r.$slots.lead?(s(),_(`div`,z,[e(r.$slots,`lead`)])):y(``,!0),f(j,g({id:D,variant:`ghost`,size:`sm`,expanded:F.value,"aria-controls":k,onClick:q},b(m)),{"icon-after":d(()=>[f(A,{name:`chevron-down`,size:`sm`})]),default:d(()=>[p(`span`,B,S(n.triggerLabel),1)]),_:1},16,[`expanded`]),p(`div`,g({id:k,ref_key:`panelRef`,ref:T,class:[`collapse`,K.value],role:`region`,"aria-labelledby":D,"data-demo-slot":`default`,"data-effect":I.value,style:H.value},G.value),[p(`div`,{style:t(U.value)},[e(r.$slots,`default`)],4)],16,V)],16))}}),U=[`data-effect`],W=Object.assign({inheritAttrs:!1},{__name:`Collapse`,props:{variant:{type:String,default:`bordered`,validator:e=>[`bordered`,`ghost`,`card`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},accordion:Boolean,narrow:Boolean,effect:{type:String,default:void 0,validator:e=>e==null||e===``||e===`slide`}},setup(t){let n=new Set([`bordered`,`ghost`,`card`]),r=new Set([`sm`,`md`,`lg`]),i=t,a=l(),o=v(null),u=new Map,d=h([]),f=x(()=>n.has(i.variant)?i.variant:`bordered`),p=x(()=>r.has(i.size)?i.size:`md`),m=x(()=>i.effect===`slide`?`slide`:void 0),y=x(()=>[`collapse_group`,`collapse_${f.value}`,p.value===`sm`?`collapse_sm`:null,p.value===`lg`?`collapse_lg`:null,i.narrow?`collapse_demo-narrow`:null,a.class]),b=x(()=>{let{class:e,...t}=a;return t});function S(e){u.set(e.id,e),d.value=[...u.values()]}function C(e){u.delete(e),d.value=[...u.values()]}function w(e,t){let n=u.get(e);n&&(Object.assign(n,t),d.value=[...u.values()])}function E(e){let t=u.get(e);if(!t||t.disabled)return;let n=!t.getIsOpen();if(i.accordion&&n)for(let[t,n]of u)t!==e&&!n.disabled&&n.getIsOpen()&&n.setIsOpen(!1);t.setIsOpen(n),d.value=[...u.values()]}return c(`collapse`,{registerPanel:S,unregisterPanel:C,updatePanelMeta:w,togglePanel:E,effect:m}),T(()=>({...i,variant:f.value,size:p.value,effect:m.value}),d,o,a),(t,n)=>(s(),_(`div`,g({ref_key:`rootRef`,ref:o,class:y.value,"data-effect":m.value},b.value),[e(t.$slots,`default`)],16,U))}}),G={class:`collapse_header`},K={class:`collapse_label`},q={key:0,class:`collapse_extra`},ee={class:`collapse_content`},te={key:0},J=Object.assign({inheritAttrs:!1},{__name:`CollapsePanel`,props:{ripple:k,label:{type:String,required:!0},content:String,open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,extraCode:String},emits:[`update:open`,`open-change`],setup(t,{emit:c}){let m=t,h=c,{rippleAttrs:C}=O(m),w=l(),T=i(),E=n(`collapse`,null),D=u().replace(/:/g,``),k=`collapse-trigger-${D}`,N=`collapse-body-${D}`,P=v(m.defaultOpen),F=v(null),I=x(()=>m.open!=null),L=x(()=>I.value?!!m.open:P.value),R=x(()=>E?.effect?.value===`slide`),z=x(()=>[`collapse_panel`,{"is-open":L.value,"is-disabled":m.disabled}]),B=x(()=>{let{class:e,...t}=w;return t}),V=x(()=>R.value?{}:{hidden:!L.value||void 0});function H(){m.disabled||!E||E.togglePanel(k)}function U(e){e!==L.value&&(I.value||(P.value=e),h(`update:open`,e),h(`open-change`,e))}return o([R,L],([e,t],[n])=>{e&&M(F.value,t,!!n)},{flush:`post`}),o(()=>[m.label,m.content,m.open,m.defaultOpen,m.disabled,m.extraCode,!!T.extra],()=>{E?.updatePanelMeta(k,{label:m.label,content:m.content,open:I.value?!!m.open:void 0,defaultOpen:!!m.defaultOpen,controlled:I.value,disabled:!!m.disabled,hasExtra:!!T.extra,extraCode:m.extraCode})}),r(()=>{E&&(E.registerPanel({id:k,label:m.label,content:m.content,open:I.value?!!m.open:void 0,defaultOpen:!!m.defaultOpen,controlled:I.value,disabled:!!m.disabled,hasExtra:!!T.extra,extraCode:m.extraCode,getIsOpen:()=>L.value,setIsOpen:U}),R.value&&M(F.value,L.value,!1))}),a(()=>{E?.unregisterPanel(k)}),(n,r)=>(s(),_(`div`,g({class:[z.value,b(w).class]},B.value),[p(`div`,G,[f(j,g({id:k,variant:`text`,class:`collapse_trigger`,expanded:L.value,"aria-controls":N,disabled:t.disabled,onClick:H},b(C)),{"icon-after":d(()=>[f(A,{name:`chevron-down`,class:`collapse_icon`})]),default:d(()=>[p(`span`,K,S(t.label),1),n.$slots.extra?(s(),_(`span`,q,[e(n.$slots,`extra`)])):y(``,!0)]),_:3},16,[`expanded`,`disabled`])]),p(`div`,g({id:N,ref_key:`bodyRef`,ref:F,class:`collapse_body`,role:`region`,"aria-labelledby":k},V.value),[p(`div`,ee,[e(n.$slots,`default`,{},()=>[t.content?(s(),_(`p`,te,S(t.content),1)):y(``,!0)])])],16)],16))}}),Y=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],X=[{name:`variant`,type:`'bordered' | 'ghost' | 'card'`,default:`bordered`,description:`패널 그룹 스킨`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`트리거·본문 패딩 크기`},{name:`accordion`,type:`boolean`,default:`false`,description:`한 번에 하나의 패널만 열기 (아코디언 모드)`},{name:`narrow`,type:`boolean`,default:`false`,description:`데모용 최대 너비 제한 (collapse_demo-narrow)`},{name:`effect`,type:`'slide'`,default:`—`,description:`펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")`}],Z=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],ne=[{name:`label`,type:`string`,default:`—`,description:`트리거에 표시할 제목`},{name:`content`,type:`string`,default:`—`,description:`패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능`},{name:`open`,type:`boolean`,default:`—`,description:`열림 상태 (제어, v-model:open)`},{name:`default-open`,type:`boolean`,default:`false`,description:`초기 열림 상태 (비제어)`},{name:`@open-change`,type:`(open: boolean) => void`,default:`—`,description:`열림 상태 변경 이벤트`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 패널 (is-disabled + trigger disabled)`},{name:`extra-code`,type:`string`,default:`—`,description:`코드 예시용 extra 슬롯 마크업 (데모 코드 생성)`},P],re=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],ie=[{name:`trigger-label`,type:`string`,default:`—`,description:`외부 트리거 버튼 텍스트`},{name:`narrow`,type:`boolean`,default:`false`,description:`데모용 최대 너비 제한`},{name:`boxed`,type:`boolean`,default:`true`,description:`접힘 영역에 테두리·배경 스타일 적용`},{name:`open`,type:`boolean`,default:`—`,description:`열림 상태 (제어, v-model:open)`},{name:`default-open`,type:`boolean`,default:`false`,description:`초기 열림 상태 (비제어)`},{name:`@open-change`,type:`(open: boolean) => void`,default:`—`,description:`열림 상태 변경 이벤트`},{name:`effect`,type:`'slide'`,default:`—`,description:`펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")`},P],Q=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],ae=[{name:`default`,description:`CollapsePanel 나열`}],oe=[{name:`default`,description:`패널 본문 (content prop 대체)`},{name:`extra`,description:`트리거 오른쪽 보조 정보`}],se=[{name:`lead`,description:`트리거 위 안내 텍스트`},{name:`default`,description:`접히는 본문 영역`}],$=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],ce=[{name:`collapse`,description:`독립 접힘 영역 (외부 트리거 대상)`},{name:`collapse_group`,description:`패널 그룹 컨테이너`},{name:`collapse_panel · collapse_trigger · collapse_body`,description:`패널 그룹 내부 파트`},{name:`collapse_label · collapse_extra · collapse_icon`,description:`트리거 파트`},{name:`collapse_content`,description:`패널 본문 래퍼`},{name:`collapse_bordered`,description:`외곽 테두리 스킨 (기본)`},{name:`collapse_ghost`,description:`배경 강조 고스트 스킨`},{name:`collapse_card`,description:`패널별 카드 분리 스킨`},{name:`collapse_sm · collapse_lg`,description:`크기 변형`},{name:`data-collapse`,description:`HTML 패널 그룹 JS 초기화`},{name:`data-collapse-trigger`,description:`HTML 외부 트리거 JS 초기화`},{name:`data-collapse-accordion`,description:`HTML 단일 패널만 열기`},{name:`data-effect="slide"`,description:`펼침·접힘 높이 슬라이드 애니메이션`},{name:`is-open · is-disabled`,description:`상태 클래스`},...F],le=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],ue=[{name:`--collapse-font-size · --collapse-content-font-size`,default:`var(--text-size-sm)`,description:`트리거 그룹·본문 기본 글자 크기`},{name:`--collapse-trigger-font-weight · --collapse-trigger-gap`,default:`600 · var(--space-sm)`,description:`트리거 글자 두께·내부 간격`},{name:`--collapse-trigger-padding-y · --collapse-trigger-padding-x`,default:`0.875rem · var(--space-lg)`,description:`기본 트리거 패딩`},{name:`--collapse-content-padding-top · --collapse-content-padding-y · --collapse-content-padding-x`,default:`var(--space-md) · var(--space-lg) · var(--space-lg)`,description:`기본 본문 패딩`},{name:`--collapse-icon-size · --collapse-card-gap`,default:`1rem · var(--space-sm)`,description:`펼침 아이콘 크기·카드 사이 간격`},{name:`--collapse-font-size-sm · --collapse-trigger-padding-y-sm · --collapse-trigger-padding-x-sm · --collapse-content-padding-y-sm · --collapse-content-padding-x-sm · --collapse-content-padding-top-sm · --collapse-icon-size-sm`,default:`var(--text-size-xs) · 0.625rem · var(--space-md) · var(--space-md) · var(--space-md) · var(--space-sm) · 0.875rem`,description:`sm 크기의 글자·트리거·본문·아이콘 값`},{name:`--collapse-font-size-lg · --collapse-trigger-padding-y-lg · --collapse-trigger-padding-x-lg · --collapse-content-padding-y-lg · --collapse-content-padding-x-lg · --collapse-content-padding-top-lg · --collapse-icon-size-lg`,default:`var(--text-size-base) · 1rem · var(--space-xl) · var(--space-xl) · var(--space-xl) · var(--space-lg) · 1.125rem`,description:`lg 크기의 글자·트리거·본문·아이콘 값`},{name:`--collapse-slide-duration · --collapse-slide-easing`,default:`0.28s · ease`,description:`펼침·접힘 슬라이드 시간과 가속 곡선`}],de={style:{margin:`0`}},fe={class:`demo_preview-block`},pe={class:`demo_preview-block`},me={title:`Collapse | UXKM Guide`,activeNav:`collapse`,pageTitle:`Collapse`},he={__name:`collapse`,setup(e){let t=v(!0);return(e,n)=>(s(),_(m,null,[n[9]||=p(`div`,{class:`page_intro`},[p(`h1`,null,`Collapse`),p(`p`,{class:`lead`},[C(` 콘텐츠 영역을 접었다 펼 수 있는 Nuxt 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나, 패널 그룹으로 여러 섹션을 구성할 수 있습니다. `),p(`code`,{class:`typo_code`},`aria-expanded`),C(` · `),p(`code`,{class:`typo_code`},`aria-controls`),C(`로 접근성을 보장합니다. `)])],-1),f(N,{"heading-id":`standalone-heading`,title:`외부 트리거`,description:`CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다.`,code:`<script setup>
import CollapseExternal from '@/components/CollapseExternal.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <CollapseExternal trigger-label="주문 상세 보기" narrow>
    <template #lead>
      <p style="margin: 0 0 var(--space-md)">
        주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
      </p>
    </template>
    <List
    variant="definition"
    layout="inline"
    block
    size="compact"
    inline-label-width="auto"
    inline-gap="1rem"
    >
    <ListItem title="주문번호" description="ORD-2024-0815" />
    <ListItem title="결제금액" description="₩42,000" />
    <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
  </List>
  </CollapseExternal>
</template>`},{default:d(()=>[f(H,{"trigger-label":`주문 상세 보기`,narrow:``},{lead:d(()=>[...n[1]||=[p(`p`,{style:{margin:`0 0 var(--space-md)`}},` 주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다. `,-1)]]),default:d(()=>[f(L,{variant:`definition`,layout:`inline`,block:``,size:`compact`,"inline-label-width":`auto`,"inline-gap":`1rem`},{default:d(()=>[f(R,{title:`주문번호`,description:`ORD-2024-0815`}),f(R,{title:`결제금액`,description:`₩42,000`}),f(R,{title:`배송지`,description:`서울특별시 강남구 테헤란로 123`})]),_:1})]),_:1})]),_:1}),f(N,{"heading-id":`links-heading`,title:`패널 내 링크`,description:`패널 본문에 Link를 배치해 관련 문서로 이동할 수 있습니다.`,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="관련 가이드" default-open>
      <p style="margin: 0">
        <Link href="/getting-started" label="시작하기" />
        ·
        <Link href="/components/button" label="Button" />
      </p>
    </CollapsePanel>
    <CollapsePanel
      label="교환·반품 안내"
      content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다."
    />
  </Collapse>
</template>`},{default:d(()=>[f(W,{narrow:``},{default:d(()=>[f(J,{label:`관련 가이드`,"default-open":``},{default:d(()=>[p(`p`,de,[f(I,{href:`/getting-started`,label:`시작하기`}),n[2]||=C(` · `,-1),f(I,{href:`/components/button`,label:`Button`}),n[3]||=C(` · `,-1),f(I,{href:`/components/dropdown`,label:`Dropdown`})])]),_:1}),f(J,{label:`교환·반품 안내`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`})]),_:1})]),_:1}),f(N,{"heading-id":`basic-heading`,title:`패널 그룹`,description:`collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다.`,code:`<script setup>
import { ref } from 'vue';
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';

const shippingOpen = ref(true);
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel
    label="배송 정보"
    v-model:open="shippingOpen"
    content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
    />
    <CollapsePanel
    label="결제 수단"
    content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
    />
    <CollapsePanel
    label="교환·반품 안내"
    content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
    />
  </Collapse>
</template>`},{default:d(()=>[f(W,{narrow:``},{default:d(()=>[f(J,{label:`배송 정보`,open:t.value,"onUpdate:open":n[0]||=e=>t.value=e,content:`평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.`},null,8,[`open`]),f(J,{label:`결제 수단`,content:`신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다.`}),f(J,{label:`교환·반품 안내`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.`})]),_:1})]),_:1}),f(N,{"heading-id":`accordion-heading`,title:`아코디언 모드`,description:`accordion prop을 지정하면 한 번에 하나의 패널만 열립니다.`,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow accordion>
    <CollapsePanel label="알림 설정" default-open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
    <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Collapse>
</template>`},{default:d(()=>[f(W,{narrow:``,accordion:``},{default:d(()=>[f(J,{label:`알림 설정`,"default-open":``,content:`이메일·푸시·SMS 알림 수신 여부를 설정합니다.`}),f(J,{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`}),f(J,{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`})]),_:1})]),_:1}),f(N,{"heading-id":`skin-heading`,title:`스킨`,description:`collapse_ghost · collapse_card로 외형을 조절합니다.`,stack:``,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse variant="ghost" narrow>
    <CollapsePanel
    label="Ghost"
    default-open
    content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
    />
  </Collapse>
  <Collapse variant="card" narrow>
    <CollapsePanel label="Card" default-open content="패널마다 카드 형태로 분리됩니다." />
    <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
  </Collapse>
</template>`},{default:d(()=>[f(W,{variant:`ghost`,narrow:``},{default:d(()=>[f(J,{label:`Ghost`,"default-open":``,content:`배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다.`})]),_:1}),f(W,{variant:`card`,narrow:``},{default:d(()=>[f(J,{label:`Card`,"default-open":``,content:`패널마다 카드 형태로 분리됩니다.`}),f(J,{label:`두 번째 패널`,content:`카드 스킨의 두 번째 패널입니다.`})]),_:1})]),_:1}),f(N,{"heading-id":`extra-heading`,title:`보조 텍스트`,description:`extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다.`,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="진행 중" default-open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
      <template #extra>3건</template>
    </CollapsePanel>
    <CollapsePanel
    label="처리 완료"
    content="최근 일주일간 완료된 요청 12건입니다."
    extra-code="지난 7일"
    >
    <template #extra>지난 7일</template>
  </CollapsePanel>
  </Collapse>
</template>`},{default:d(()=>[f(W,{narrow:``},{default:d(()=>[f(J,{label:`진행 중`,"default-open":``,content:`현재 처리 중인 요청 3건입니다.`,"extra-code":`3건`},{extra:d(()=>[...n[4]||=[C(`3건`,-1)]]),_:1}),f(J,{label:`처리 완료`,content:`최근 일주일간 완료된 요청 12건입니다.`,"extra-code":`지난 7일`},{extra:d(()=>[...n[5]||=[C(`지난 7일`,-1)]]),_:1})]),_:1})]),_:1}),f(N,{"heading-id":`disabled-heading`,title:`비활성`,description:`disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다.`,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="공개 문서" default-open content="누구나 열람할 수 있는 가이드 문서입니다." />
    <CollapsePanel
    label="팀 전용 (권한 없음)"
    disabled
    content="팀 멤버만 접근할 수 있는 내부 문서입니다."
    />
  </Collapse>
</template>`},{default:d(()=>[f(W,{narrow:``},{default:d(()=>[f(J,{label:`공개 문서`,"default-open":``,content:`누구나 열람할 수 있는 가이드 문서입니다.`}),f(J,{label:`팀 전용 (권한 없음)`,disabled:``,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`})]),_:1})]),_:1}),f(N,{"heading-id":`size-heading`,title:`크기`,description:`size prop으로 트리거와 본문 패딩을 조절합니다.`,stack:``,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse size="sm" narrow>
    <CollapsePanel label="Small" default-open content="작은 콜랩스 — 좁은 패딩." />
  </Collapse>
  <Collapse size="lg" narrow>
    <CollapsePanel label="Large" default-open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
  </Collapse>
</template>`},{default:d(()=>[f(W,{size:`sm`,narrow:``},{default:d(()=>[f(J,{label:`Small`,"default-open":``,content:`작은 콜랩스 — 좁은 패딩.`})]),_:1}),f(W,{size:`lg`,narrow:``},{default:d(()=>[f(J,{label:`Large`,"default-open":``,content:`큰 콜랩스 — 넓은 패딩과 큰 글자.`})]),_:1})]),_:1}),f(N,{"heading-id":`slide-heading`,title:`슬라이드`,description:`effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.`,stack:``,code:`<script setup>
import Collapse from '@/components/Collapse.vue';
import CollapsePanel from '@/components/CollapsePanel.vue';
import CollapseExternal from '@/components/CollapseExternal.vue';
<\/script>

<template>
  <Collapse narrow effect="slide">
    <CollapsePanel
    label="배송 정보"
    default-open
    content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
    />
    <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
  </Collapse>
  <CollapseExternal trigger-label="상세 보기" narrow effect="slide">
    <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
  </CollapseExternal>
</template>`},{default:d(()=>[p(`div`,fe,[n[6]||=p(`h3`,{class:`typo_overline`},`패널 그룹`,-1),f(W,{narrow:``,effect:`slide`},{default:d(()=>[f(J,{label:`배송 정보`,"default-open":``,content:`평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다.`}),f(J,{label:`결제 수단`,content:`신용카드, 계좌이체, 간편결제를 지원합니다.`})]),_:1})]),p(`div`,pe,[n[8]||=p(`h3`,{class:`typo_overline`},`외부 트리거`,-1),f(H,{"trigger-label":`상세 보기`,narrow:``,effect:`slide`},{default:d(()=>[...n[7]||=[p(`p`,{style:{margin:`0`}},`외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.`,-1)]]),_:1})])]),_:1}),f(E,{"heading-id":`api-external-props-heading`,title:`API · CollapseExternal Props`},{default:d(()=>[f(D,{columns:b(re),rows:b(ie),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`api-external-slots-heading`,title:`API · CollapseExternal Slots`},{default:d(()=>[f(D,{columns:b(Q),rows:b(se),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`api-collapse-props-heading`,title:`API · Collapse Props`},{default:d(()=>[f(D,{columns:b(Y),rows:b(X),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`api-collapse-slots-heading`,title:`API · Collapse Slots`},{default:d(()=>[f(D,{columns:b(Q),rows:b(ae),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`api-panel-props-heading`,title:`API · CollapsePanel Props`},{default:d(()=>[f(D,{columns:b(Z),rows:b(ne),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`api-panel-slots-heading`,title:`API · CollapsePanel Slots`},{default:d(()=>[f(D,{columns:b(Q),rows:b(oe),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:d(()=>[f(D,{columns:b($),rows:b(ce),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),f(E,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:d(()=>[f(D,{columns:b(le),rows:b(ue),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{he as default,me as docMeta};