import{B as e,D as t,F as n,G as r,I as i,K as a,L as o,R as s,U as c,W as l,Y as u,b as d,d as f,i as p,it as m,k as h,m as g,nt as _,p as v,st as y,u as b,wt as x,y as S}from"./CCnt5OSV.js";import{f as C,l as w,t as T}from"./DkmWXf_S.js";import{n as E,t as D}from"./D01l-9yr.js";import{t as O}from"./D5AUKneU.js";import{t as k}from"./gHQDdAlU.js";import{t as A}from"./CLkCI1eE.js";import{t as j}from"./DD3RWXAt.js";import{s as M,t as N}from"./D6IbhUhQ.js";var P=[`data-effect`],F=Object.assign({inheritAttrs:!1},{__name:`Accordion`,props:{variant:{type:String,default:`bordered`,validator:e=>[`bordered`,`flush`,`card`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},multiple:Boolean,narrow:Boolean,effect:{type:String,default:void 0,validator:e=>e==null||e===``||e===`slide`}},setup(t){let n=new Set([`bordered`,`flush`,`card`]),r=new Set([`sm`,`md`,`lg`]),i=t,a=c(),l=_(null),u=new Map,d=m([]),f=b(()=>n.has(i.variant)?i.variant:`bordered`),p=b(()=>r.has(i.size)?i.size:`md`),v=b(()=>i.effect===`slide`?`slide`:void 0),y=b(()=>[`accordion`,`accordion_${f.value}`,p.value===`sm`?`accordion_sm`:null,p.value===`lg`?`accordion_lg`:null,i.narrow?`accordion_demo-narrow`:null,a.class]),x=b(()=>{let{class:e,...t}=a;return t});function S(e){u.set(e.id,e),d.value=[...u.values()]}function w(e){u.delete(e),d.value=[...u.values()]}function T(e,t){let n=u.get(e);n&&(Object.assign(n,t),d.value=[...u.values()])}function E(){return d.value.filter(e=>!e.disabled).map(e=>e.id)}function D(e){l.value?.querySelector(`#${CSS.escape(e)}`)?.focus()}function O(e){let t=u.get(e);if(!t||t.disabled)return;let n=!t.getIsOpen();if(!i.multiple&&n)for(let[t,n]of u)t!==e&&!n.disabled&&n.getIsOpen()&&n.setIsOpen(!1);t.setIsOpen(n),d.value=[...u.values()]}return s(`accordion`,{registerItem:S,unregisterItem:w,updateItemMeta:T,toggleItem:O,getTriggers:E,focusTrigger:D,effect:v}),C(()=>({...i,variant:f.value,size:p.value,effect:v.value}),d,l,a),(t,n)=>(o(),g(`div`,h({ref_key:`rootRef`,ref:l,class:y.value,"data-effect":v.value},x.value),[e(t.$slots,`default`)],16,P))}}),I={class:`accordion_heading`,role:`heading`,"aria-level":`3`},L={class:`accordion_label`},R={key:0,class:`accordion_extra`},z={class:`accordion_content`},B={key:0},V=Object.assign({inheritAttrs:!1},{__name:`AccordionItem`,props:{ripple:D,label:{type:String,required:!0},content:String,open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,extraCode:String},emits:[`update:open`,`open-change`],setup(s,{emit:p}){let m=s,S=p,{rippleAttrs:C}=E(m),w=c(),T=r(),D=t(`accordion`,null),j=l().replace(/:/g,``),M=`accordion-trigger-${j}`,N=`accordion-panel-${j}`,P=_(m.defaultOpen),F=_(null),V=b(()=>m.open!=null),H=b(()=>V.value?!!m.open:P.value),U=b(()=>D?.effect?.value===`slide`),W=b(()=>[`accordion_item`,{"is-open":H.value,"is-disabled":m.disabled}]),G=b(()=>{let{class:e,...t}=w;return t}),K=b(()=>U.value?{}:{hidden:!H.value||void 0});function q(){m.disabled||!D||D.toggleItem(M)}function J(e){e!==H.value&&(V.value||(P.value=e),S(`update:open`,e),S(`open-change`,e))}function Y(e){if(!D)return;let t=D.getTriggers(),n=t.indexOf(M);if(n===-1)return;let r=null;e.key===`ArrowDown`?r=(n+1)%t.length:e.key===`ArrowUp`?r=(n-1+t.length)%t.length:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r!==null&&(e.preventDefault(),D.focusTrigger(t[r]))}return a([U,H],([e,t],[n])=>{e&&A(F.value,t,!!n)},{flush:`post`}),a(()=>[m.label,m.content,m.open,m.defaultOpen,m.disabled,m.extraCode,!!T.extra],()=>{D?.updateItemMeta(M,{label:m.label,content:m.content,open:V.value?!!m.open:void 0,defaultOpen:!!m.defaultOpen,controlled:V.value,disabled:!!m.disabled,hasExtra:!!T.extra,extraCode:m.extraCode})}),n(()=>{D&&(D.registerItem({id:M,label:m.label,content:m.content,open:V.value?!!m.open:void 0,defaultOpen:!!m.defaultOpen,controlled:V.value,disabled:!!m.disabled,hasExtra:!!T.extra,extraCode:m.extraCode,getIsOpen:()=>H.value,setIsOpen:J}),U.value&&A(F.value,H.value,!1))}),i(()=>{D?.unregisterItem(M)}),(t,n)=>(o(),g(`div`,h({class:[W.value,y(w).class]},G.value),[f(`div`,I,[d(k,h({id:M,variant:`text`,class:`accordion_trigger`,expanded:H.value,"aria-controls":N,disabled:s.disabled,onClick:q,onKeydown:Y},y(C)),{"icon-after":u(()=>[d(O,{name:`chevron-down`,class:`accordion_icon`})]),default:u(()=>[f(`span`,L,x(s.label),1),t.$slots.extra?(o(),g(`span`,R,[e(t.$slots,`extra`)])):v(``,!0)]),_:3},16,[`expanded`,`disabled`])]),f(`div`,h({id:N,ref_key:`panelRef`,ref:F,class:`accordion_panel`,role:`region`,"aria-labelledby":M},K.value),[f(`div`,z,[e(t.$slots,`default`,{},()=>[s.content?(o(),g(`p`,B,x(s.content),1)):v(``,!0)])])],16)],16))}}),H=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`variant`,type:`'bordered' | 'flush' | 'card'`,default:`bordered`,description:`아코디언 스킨 — bordered(붙임) · flush · card(항목 간격, FAQ)`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`트리거·본문 패딩 크기`},{name:`multiple`,type:`boolean`,default:`false`,description:`여러 패널 동시 열기 허용`},{name:`narrow`,type:`boolean`,default:`false`,description:`데모용 최대 너비 제한 (accordion_demo-narrow)`},{name:`effect`,type:`'slide'`,default:`—`,description:`펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")`}],W=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],G=[{name:`label`,type:`string`,default:`—`,description:`트리거에 표시할 제목`},{name:`content`,type:`string`,default:`—`,description:`패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능`},{name:`open`,type:`boolean`,default:`—`,description:`열림 상태 (제어, v-model:open)`},{name:`default-open`,type:`boolean`,default:`false`,description:`초기 열림 상태 (비제어)`},{name:`@open-change`,type:`(open: boolean) => void`,default:`—`,description:`열림 상태 변경 이벤트`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 항목 (is-disabled + trigger disabled)`},{name:`extra-code`,type:`string`,default:`—`,description:`코드 예시용 extra 슬롯 마크업 (데모 코드 생성)`},M],K=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],q=[{name:`default`,description:`AccordionItem 나열`}],J=[{name:`default`,description:`패널 본문 (content prop 대체)`},{name:`extra`,description:`트리거 오른쪽 보조 정보 (배지·메타 텍스트)`}],Y=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],X=[{name:`accordion`,description:`루트 구조 클래스`},{name:`accordion_bordered`,description:`외곽 테두리로 항목을 한 덩어리로 붙인 스킨`},{name:`accordion_flush`,description:`구분선만 있는 플러시 스킨`},{name:`accordion_card`,description:`항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)`},{name:`accordion_sm · accordion_lg`,description:`크기 변형`},{name:`accordion_item · accordion_trigger · accordion_panel`,description:`내부 파트`},{name:`accordion_heading`,description:`role="heading" aria-level="3" 헤딩 래퍼`},{name:`accordion_label · accordion_extra · accordion_icon`,description:`트리거 파트`},{name:`accordion_content`,description:`패널 본문 래퍼`},{name:`data-accordion`,description:`HTML 마크업 JS 초기화 대상`},{name:`data-accordion-multiple`,description:`HTML 마크업 다중 열기 허용`},{name:`data-effect="slide"`,description:`펼침·접힘 높이 슬라이드 애니메이션`},{name:`is-open · is-disabled`,description:`상태 클래스`},...N],Z=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],Q=[{name:`--accordion-font-size`,default:`var(--text-size-sm)`,description:`기본(md) 본문 크기`},{name:`--accordion-trigger-font-weight · --accordion-trigger-gap`,default:`600 · var(--space-sm)`,description:`트리거 타이포·간격`},{name:`--accordion-trigger-padding-y · --accordion-trigger-padding-x`,default:`0.875rem · var(--space-lg)`,description:`트리거 패딩(md)`},{name:`--accordion-content-font-size`,default:`var(--text-size-sm)`,description:`콘텐츠 글자 크기`},{name:`--accordion-content-padding-y · --accordion-content-padding-x`,default:`var(--space-lg) · var(--space-lg)`,description:`콘텐츠 상하·좌우 패딩(동일)`},{name:`--accordion-icon-size`,default:`1rem`,description:`펼침 아이콘(md)`},{name:`--accordion-slide-duration · --accordion-slide-easing`,default:`0.28s · ease`,description:`슬라이드 전환`},{name:`--accordion-card-gap`,default:`0`,description:`카드형 아코디언 항목 간격`},{name:`--accordion-card-trigger-bg`,default:`var(--color-surface-raised)`,description:`카드형 트리거 배경`},{name:`--accordion-font-size-sm · --accordion-trigger-padding-y-sm · --accordion-trigger-padding-x-sm`,default:`var(--text-size-xs) · 0.625rem · var(--space-md)`,description:`sm 크기`},{name:`--accordion-icon-size-sm`,default:`0.875rem`,description:`sm 아이콘`},{name:`--accordion-font-size-lg · --accordion-trigger-padding-y-lg · --accordion-trigger-padding-x-lg`,default:`var(--text-size-base) · 1rem · var(--space-xl)`,description:`lg 크기`},{name:`--accordion-icon-size-lg`,default:`1.125rem`,description:`lg 아이콘`}],$={title:`Accordion | UXKM Guide`,activeNav:`accordion`,pageTitle:`Accordion`},ee={__name:`accordion`,setup(e){let t=_(!0);return(e,n)=>(o(),g(p,null,[n[3]||=f(`div`,{class:`page_intro`},[f(`h1`,null,`Accordion`),f(`p`,{class:`lead`},[S(` 여러 섹션을 접었다 펼 수 있는 Nuxt 아코디언 컴포넌트입니다. FAQ·설정·필터 패널 등에 사용하며, `),f(`code`,{class:`typo_code`},`aria-expanded`),S(` · `),f(`code`,{class:`typo_code`},`aria-controls`),S(`로 접근성을 보장합니다. `)])],-1),d(j,{"heading-id":`basic-heading`,title:`기본`,description:`FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다.`,code:`<script setup>
import { ref } from 'vue';
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';

const returnsOpen = ref(true);
<\/script>

<template>
  <Accordion variant="card" narrow>
    <AccordionItem
    label="배송은 얼마나 걸리나요?"
    content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
    />
    <AccordionItem
    label="교환·반품은 어떻게 하나요?"
    v-model:open="returnsOpen"
    content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
    />
    <AccordionItem
    label="해외 배송이 가능한가요?"
    content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
    />
  </Accordion>
</template>`},{default:u(()=>[d(F,{variant:`card`,narrow:``},{default:u(()=>[d(V,{label:`배송은 얼마나 걸리나요?`,content:`평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.`}),d(V,{label:`교환·반품은 어떻게 하나요?`,open:t.value,"onUpdate:open":n[0]||=e=>t.value=e,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.`},null,8,[`open`]),d(V,{label:`해외 배송이 가능한가요?`,content:`현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.`})]),_:1})]),_:1}),d(j,{"heading-id":`multiple-heading`,title:`다중 열기`,description:`multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow multiple>
    <AccordionItem label="알림" default-open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" default-open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`},{default:u(()=>[d(F,{narrow:``,multiple:``},{default:u(()=>[d(V,{label:`알림`,"default-open":``,content:`이메일·푸시 알림 수신 여부를 설정합니다.`}),d(V,{label:`개인정보`,"default-open":``,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`}),d(V,{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`})]),_:1})]),_:1}),d(j,{"heading-id":`flush-heading`,title:`플러시`,description:`accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="flush" narrow>
    <AccordionItem label="일반" default-open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
    <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
    <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
  </Accordion>
</template>`},{default:u(()=>[d(F,{variant:`flush`,narrow:``},{default:u(()=>[d(V,{label:`일반`,"default-open":``,content:`언어, 시간대, 테마 등 기본 환경 설정입니다.`}),d(V,{label:`접근성`,content:`고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.`}),d(V,{label:`고급`,content:`개발자 도구와 실험 기능을 켜거나 끕니다.`})]),_:1})]),_:1}),d(j,{"heading-id":`bordered-heading`,title:`보더`,description:`accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="bordered" narrow>
    <AccordionItem label="알림" default-open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`},{default:u(()=>[d(F,{variant:`bordered`,narrow:``},{default:u(()=>[d(V,{label:`알림`,"default-open":``,content:`이메일·푸시 알림 수신 여부를 설정합니다.`}),d(V,{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`}),d(V,{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`})]),_:1})]),_:1}),d(j,{"heading-id":`card-heading`,title:`카드`,description:`accordion_card로 각 항목을 독립 카드로 분리합니다. 대시보드·위젯 그룹에 사용합니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="card" narrow multiple>
    <AccordionItem
      label="프로젝트 개요"
      default-open
      content="목표, 일정, 이해관계자 정보를 요약합니다."
    />
    <AccordionItem label="최근 활동" content="커밋, 댓글, 파일 변경 이력을 표시합니다." />
  </Accordion>
</template>`},{default:u(()=>[d(F,{variant:`card`,narrow:``,multiple:``},{default:u(()=>[d(V,{label:`프로젝트 개요`,"default-open":``,content:`목표, 일정, 이해관계자 정보를 요약합니다.`}),d(V,{label:`최근 활동`,content:`커밋, 댓글, 파일 변경 이력을 표시합니다.`})]),_:1})]),_:1}),d(j,{"heading-id":`extra-heading`,title:`보조 정보`,description:`extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow>
    <AccordionItem
    label="미해결 문의"
    default-open
    content="답변이 필요한 고객 문의 3건이 있습니다."
    extra-code='<span class="badge badge_count color_danger badge_sm">3</span>'
    >
    <template #extra>
      <span class="badge badge_count color_danger badge_sm">3</span>
    </template>
  </AccordionItem>
  <AccordionItem
  label="처리 완료"
  content="최근 일주일간 완료된 문의 12건입니다."
  extra-code="지난 7일"
  >
  <template #extra>지난 7일</template>
  </AccordionItem>
  </Accordion>
</template>`},{default:u(()=>[d(F,{narrow:``},{default:u(()=>[d(V,{label:`미해결 문의`,"default-open":``,content:`답변이 필요한 고객 문의 3건이 있습니다.`,"extra-code":`<span class="badge badge_count color_danger badge_sm">3</span>`},{extra:u(()=>[...n[1]||=[f(`span`,{class:`badge badge_count color_danger badge_sm`},`3`,-1)]]),_:1}),d(V,{label:`처리 완료`,content:`최근 일주일간 완료된 문의 12건입니다.`,"extra-code":`지난 7일`},{extra:u(()=>[...n[2]||=[S(`지난 7일`,-1)]]),_:1})]),_:1})]),_:1}),d(j,{"heading-id":`disabled-heading`,title:`비활성`,description:`disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow>
    <AccordionItem label="공개 문서" default-open content="누구나 열람할 수 있는 가이드 문서입니다." />
    <AccordionItem
    label="팀 전용 (권한 없음)"
    disabled
    content="팀 멤버만 접근할 수 있는 내부 문서입니다."
    />
  </Accordion>
</template>`},{default:u(()=>[d(F,{narrow:``},{default:u(()=>[d(V,{label:`공개 문서`,"default-open":``,content:`누구나 열람할 수 있는 가이드 문서입니다.`}),d(V,{label:`팀 전용 (권한 없음)`,disabled:``,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`})]),_:1})]),_:1}),d(j,{"heading-id":`size-heading`,title:`크기`,description:`size prop으로 트리거와 본문 패딩을 조절합니다.`,stack:``,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion size="sm" narrow>
    <AccordionItem label="Small" default-open content="작은 아코디언 — 좁은 패딩." />
  </Accordion>
  <Accordion size="lg" narrow>
    <AccordionItem label="Large" default-open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
  </Accordion>
</template>`},{default:u(()=>[d(F,{size:`sm`,narrow:``},{default:u(()=>[d(V,{label:`Small`,"default-open":``,content:`작은 아코디언 — 좁은 패딩.`})]),_:1}),d(F,{size:`lg`,narrow:``},{default:u(()=>[d(V,{label:`Large`,"default-open":``,content:`큰 아코디언 — 넓은 패딩과 큰 글자.`})]),_:1})]),_:1}),d(j,{"heading-id":`slide-heading`,title:`슬라이드`,description:`effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 닫힌 패널은 hidden으로 숨기고, 토글 시에만 높이를 애니메이션합니다.`,code:`<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="card" narrow effect="slide">
    <AccordionItem
    label="배송 안내"
    default-open
    content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."
    />
    <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
    <AccordionItem
    label="고객센터"
    content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."
    />
  </Accordion>
</template>`},{default:u(()=>[d(F,{variant:`card`,narrow:``,effect:`slide`},{default:u(()=>[d(V,{label:`배송 안내`,"default-open":``,content:`평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.`}),d(V,{label:`교환·반품`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`}),d(V,{label:`고객센터`,content:`1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.`})]),_:1})]),_:1}),d(w,{"heading-id":`api-props-heading`,title:`API · Accordion Props`},{default:u(()=>[d(T,{columns:y(H),rows:y(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),d(w,{"heading-id":`api-item-props-heading`,title:`API · AccordionItem Props`},{default:u(()=>[d(T,{columns:y(W),rows:y(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),d(w,{"heading-id":`api-slots-heading`,title:`API · Accordion Slots`},{default:u(()=>[d(T,{columns:y(K),rows:y(q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),d(w,{"heading-id":`api-item-slots-heading`,title:`API · AccordionItem Slots`},{default:u(()=>[d(T,{columns:y(K),rows:y(J),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),d(w,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:u(()=>[d(T,{columns:y(Y),rows:y(X),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),d(w,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:u(()=>[d(T,{columns:y(Z),rows:y(Q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ee as default,$ as docMeta};