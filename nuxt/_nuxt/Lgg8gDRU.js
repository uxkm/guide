import{B as e,D as t,F as n,G as r,I as i,L as a,R as o,U as s,W as c,Y as l,b as u,d,f,i as p,k as m,m as h,nt as g,p as _,st as v,u as y,wt as b,y as x}from"./CCnt5OSV.js";import{F as S,l as C,t as w,v as T}from"./DkmWXf_S.js";import{n as E,t as D}from"./D01l-9yr.js";import{t as O}from"./D5AUKneU.js";import{t as k}from"./DD3RWXAt.js";import{s as A,t as j}from"./D6IbhUhQ.js";var M=[`aria-label`],N=Object.assign({inheritAttrs:!1},{__name:`Steps`,props:{current:Number,direction:{type:String,default:`horizontal`,validator:e=>[`horizontal`,`vertical`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},dot:Boolean,iconStyle:Boolean,navigable:Boolean,align:{type:String,default:``,validator:e=>[``,`center`].includes(e)},ariaLabel:String},setup(t){let n=new Set([`horizontal`,`vertical`]),i=new Set([`sm`,`md`,`lg`]),c=new Set([``,`center`]),l=t,u=r(),d=s(),f=g(null),p=new Map,_=g([]),v=y(()=>n.has(l.direction)?l.direction:`horizontal`),b=y(()=>i.has(l.size)?l.size:`md`),x=y(()=>c.has(l.align)?l.align:``),C=S(`Steps`,{defaults:{direction:`horizontal`,size:`md`},booleanProps:new Set([`dot`,`iconStyle`,`navigable`]),selfClosing:!1});T(C,()=>({...l,direction:v.value,size:b.value,align:x.value||void 0}),u,f,d);let w=y(()=>{let e=[`steps`];return v.value===`vertical`&&e.push(`steps_vertical`),b.value===`sm`&&e.push(`steps_sm`),b.value===`lg`&&e.push(`steps_lg`),l.dot&&e.push(`steps_dot`),l.iconStyle&&e.push(`steps_icon-style`),l.navigable&&e.push(`steps_navigable`),x.value===`center`&&e.push(`steps_align-center`),d.class&&e.push(d.class),e}),E=y(()=>{let{class:e,...t}=d;return t});function D(e,t){p.set(e,t),_.value=[...p.keys()]}function O(e){p.delete(e),_.value=[...p.keys()]}function k(e){let t=_.value;return t.indexOf(e)===t.length-1}function A(e){return _.value.indexOf(e)+1}function j(e){if(!Number.isInteger(l.current)||l.current<0)return;let t=_.value.indexOf(e);if(!(t<0))return t<l.current?`finished`:t===l.current?`active`:`wait`}return o(`steps`,{registerItem:D,unregisterItem:O,isLastItem:k,getItemIndex:A,getItemStatus:j,navigable:y(()=>l.navigable)}),(n,r)=>(a(),h(`ol`,m({ref_key:`rootRef`,ref:f,class:w.value,"aria-label":t.ariaLabel},E.value),[e(n.$slots,`default`)],16,M))}}),P=[`aria-current`],F=[`disabled`,`aria-current`],I={class:`steps_head`},L={class:`steps_indicator`,"aria-hidden":`true`},ee={key:2,class:`steps_index`},te={key:0,class:`steps_tail`,"aria-hidden":`true`},R={class:`steps_content`},z={class:`steps_title`},B={key:0,class:`steps_desc`},V={class:`steps_head`},H={class:`steps_indicator`,"aria-hidden":`true`},U={key:2,class:`steps_index`},W={key:0,class:`steps_tail`,"aria-hidden":`true`},G={class:`steps_content`},K={class:`steps_title`},q={key:0,class:`steps_desc`},J=Object.assign({inheritAttrs:!1},{__name:`StepsItem`,props:{ripple:D,title:{type:String,required:!0},description:String,status:{type:String,default:void 0,validator:e=>[`finished`,`active`,`wait`,`error`].includes(e)},index:Number},setup(o){let l=new Set([`finished`,`active`,`wait`,`error`]),u=o,{rippleAttrs:p}=E(u),x=s(),C=r(),w=g(null),D=t(`steps`,null),k=c().replace(/:/g,``),A=y(()=>D?.navigable?.value??!1),j=y(()=>u.status==null?D?.getItemStatus(k)??`wait`:l.has(u.status)?u.status:`wait`),M=S(`StepsItem`,{defaults:{status:`wait`},booleanProps:new Set([`ripple`]),skipProps:[`index`],labelProp:`title`,selfClosing:!0});T(M,()=>({...u,status:j.value}),C,w,x);let N=y(()=>[`steps_item`,`is-${j.value}`,x.class]),J=y(()=>D?.isLastItem(k)??!1),Y=y(()=>u.index??D?.getItemIndex(k)??0),X=y(()=>{let{class:e,onClick:t,...n}=x;return n});function Z(e,t){if(Array.isArray(e)){e.forEach(e=>e?.(t));return}e?.(t)}function Q(e){Z(x.onClick,e)}return n(()=>{D?.registerItem(k,u)}),i(()=>{D?.unregisterItem(k)}),(t,n)=>(a(),h(`li`,m({ref_key:`rootRef`,ref:w},X.value,{class:N.value,"aria-current":!A.value&&j.value===`active`?`step`:void 0}),[A.value?(a(),h(`button`,m({key:0,type:`button`,class:`steps_trigger`,disabled:j.value===`wait`,"aria-current":j.value===`active`?`step`:void 0},v(p),{onClick:Q}),[d(`span`,I,[d(`span`,L,[j.value===`finished`?(a(),f(O,{key:0,name:`check`,class:`steps_icon`})):j.value===`error`?(a(),f(O,{key:1,name:`close`,class:`steps_icon`})):(a(),h(`span`,ee,b(Y.value),1))]),J.value?_(``,!0):(a(),h(`span`,te))]),d(`span`,R,[d(`span`,z,b(o.title),1),o.description?(a(),h(`span`,B,b(o.description),1)):_(``,!0)])],16,F)):e(t.$slots,`default`,{},()=>[d(`div`,V,[d(`span`,H,[j.value===`finished`?(a(),f(O,{key:0,name:`check`,class:`steps_icon`})):j.value===`error`?(a(),f(O,{key:1,name:`close`,class:`steps_icon`})):(a(),h(`span`,U,b(Y.value),1))]),J.value?_(``,!0):(a(),h(`span`,W))]),d(`div`,G,[d(`p`,K,b(o.title),1),o.description?(a(),h(`p`,q,b(o.description),1)):_(``,!0)])],void 0,1)],16,P))}}),Y=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],X=[{name:`current`,type:`number`,default:`—`,description:`현재 단계 인덱스 (0-based, 선택)`},{name:`direction`,type:`'horizontal' | 'vertical'`,default:`horizontal`,description:`steps_vertical`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`steps_sm · steps_lg`},{name:`dot`,type:`boolean`,default:`false`,description:`steps_dot — 원형 마커`},{name:`icon-style`,type:`boolean`,default:`false`,description:`steps_icon-style`},{name:`navigable`,type:`boolean`,default:`false`,description:`steps_navigable — 완료 단계 클릭`},{name:`align`,type:`'' | 'center'`,default:`—`,description:`steps_align-center`},{name:`aria-label`,type:`string`,default:`—`,description:`ol aria-label`}],Z=Y,Q=[{name:`title`,type:`string`,default:`—`,description:`단계 제목 (필수)`},{name:`description`,type:`string`,default:`—`,description:`단계 설명`},{name:`status`,type:`'finished' | 'active' | 'wait' | 'error'`,default:`wait`,description:`is-finished · is-active · is-wait · is-error`},{name:`index`,type:`number`,default:`—`,description:`단계 번호 (자동 할당)`},A],ne=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],re=[{name:`default`,description:`StepsItem 나열`}],$=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],ie=[{name:`steps · steps_item · steps_head · steps_indicator`,description:`루트·항목·헤드·인디케이터`},{name:`steps_title · steps_desc · steps_tail`,description:`제목·설명·연결선`},{name:`steps_trigger`,description:`navigable 모드 클릭 버튼`},{name:`steps_vertical · steps_dot · steps_icon-style · steps_navigable`,description:`레이아웃·스타일`},{name:`steps_sm · steps_lg · steps_align-center`,description:`크기·정렬`},{name:`is-finished · is-active · is-wait · is-error`,description:`단계 상태`},{name:`aria-current="step"`,description:`현재 단계`},...j],ae=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],oe=[{name:`--steps-indicator-size · --steps-gap`,default:`—`,description:`인디케이터·간격`},{name:`--steps-title-size · --steps-desc-size`,default:`—`,description:`타이포`},{name:`--steps-tail-color`,default:`—`,description:`연결선 색`},{name:`--steps-pulse-duration`,default:`1.5s`,description:`is-active 인디케이터 파장 애니메이션`}],se={title:`Steps | UXKM Guide`,activeNav:`steps`,pageTitle:`Steps`},ce={__name:`steps`,setup(e){let t=g(1);return(e,n)=>(a(),h(p,null,[n[3]||=d(`div`,{class:`page_intro`},[d(`h1`,null,`Steps`),d(`p`,{class:`lead`},[x(`다단계 프로세스·마법사·주문 흐름을 단계별로 표시하는 컴포넌트입니다. `),d(`code`,{class:`typo_code`},`ol`),x(` 시맨틱 구조와 `),d(`code`,{class:`typo_code`},`aria-current="step"`),x(`으로 접근성을 지원합니다.`)])],-1),u(k,{"heading-id":`basic-heading`,title:`기본`,description:`가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="주문 진행 단계">
    <StepsItem title="장바구니" description="상품 확인" status="finished" />
    <StepsItem title="배송 정보" description="주소 입력" status="finished" />
    <StepsItem title="결제" description="결제 수단 선택" status="active" />
    <StepsItem title="완료" description="주문 확인" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{"aria-label":`주문 진행 단계`},{default:l(()=>[u(J,{title:`장바구니`,description:`상품 확인`,status:`finished`}),u(J,{title:`배송 정보`,description:`주소 입력`,status:`finished`}),u(J,{title:`결제`,description:`결제 수단 선택`,status:`active`}),u(J,{title:`완료`,description:`주문 확인`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`simple-heading`,title:`간단`,description:`제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="회원가입 단계">
    <StepsItem title="이메일 인증" status="finished" />
    <StepsItem title="프로필 설정" status="active" />
    <StepsItem title="완료" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{"aria-label":`회원가입 단계`},{default:l(()=>[u(J,{title:`이메일 인증`,status:`finished`}),u(J,{title:`프로필 설정`,status:`active`}),u(J,{title:`완료`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`vertical-heading`,title:`세로형`,description:`steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
    <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
    <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
    <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
    <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{direction:`vertical`,class:`steps_demo-narrow`,"aria-label":`프로젝트 생성 단계`},{default:l(()=>[u(J,{title:`기본 정보`,description:`프로젝트 이름과 설명을 입력합니다.`,status:`finished`}),u(J,{title:`팀 구성`,description:`멤버를 초대하고 역할을 지정합니다.`,status:`active`}),u(J,{title:`저장소 연결`,description:`Git 저장소를 연동합니다.`,status:`wait`}),u(J,{title:`검토 및 생성`,description:`설정을 확인하고 프로젝트를 만듭니다.`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`dot-heading`,title:`도트`,description:`steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps dot aria-label="배송 추적 단계">
    <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
    <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
    <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
    <StepsItem title="배송 완료" description="대기 중" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{dot:``,"aria-label":`배송 추적 단계`},{default:l(()=>[u(J,{title:`주문 접수`,description:`6월 20일 09:12`,status:`finished`}),u(J,{title:`배송 준비`,description:`6월 20일 14:30`,status:`finished`}),u(J,{title:`배송 중`,description:`예상 도착 6월 21일`,status:`active`}),u(J,{title:`배송 완료`,description:`대기 중`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`icon-heading`,title:`아이콘`,description:`steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps icon-style aria-label="온보딩 단계">
    <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
    <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
    <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{"icon-style":``,"aria-label":`온보딩 단계`},{default:l(()=>[u(J,{title:`계정 생성`,description:`이메일 인증 완료`,status:`finished`}),u(J,{title:`팀 초대`,description:`동료를 초대하세요`,status:`active`}),u(J,{title:`첫 프로젝트`,description:`프로젝트를 만드세요`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`navigable-heading`,title:`탐색 가능`,description:`steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다.`,code:`<script setup>
import { ref } from 'vue';
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';

const currentStep = ref(1);
<\/script>

<template>
  <Steps :current="currentStep" navigable aria-label="설정 마법사 — 탐색 가능">
    <StepsItem title="환경" description="개발 · 스테이징" @click="currentStep = 0" />
    <StepsItem title="알림" description="수신 채널 설정" @click="currentStep = 1" />
    <StepsItem title="확인" description="설정 검토" @click="currentStep = 2" />
  </Steps>
</template>`},{default:l(()=>[u(N,{current:t.value,navigable:``,"aria-label":`설정 마법사 — 탐색 가능`},{default:l(()=>[u(J,{title:`환경`,description:`개발 · 스테이징`,onClick:n[0]||=e=>t.value=0}),u(J,{title:`알림`,description:`수신 채널 설정`,onClick:n[1]||=e=>t.value=1}),u(J,{title:`확인`,description:`설정 검토`,onClick:n[2]||=e=>t.value=2})]),_:1},8,[`current`])]),_:1}),u(k,{"heading-id":`error-heading`,title:`오류`,description:`is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="결제 단계 — 오류">
    <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
    <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
    <StepsItem title="완료" description="주문 접수" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{"aria-label":`결제 단계 — 오류`},{default:l(()=>[u(J,{title:`주문 확인`,description:`상품 및 수량 확인`,status:`finished`}),u(J,{title:`결제 실패`,description:`카드 승인이 거절되었습니다`,status:`error`}),u(J,{title:`완료`,description:`주문 접수`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`align-heading`,title:`가운데 정렬`,description:`steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다.`,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps align="center" aria-label="출시 단계">
    <StepsItem title="기획" description="요구사항 정의" status="finished" />
    <StepsItem title="개발" description="기능 구현" status="finished" />
    <StepsItem title="QA" description="품질 검증" status="active" />
    <StepsItem title="출시" description="프로덕션 배포" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{align:`center`,"aria-label":`출시 단계`},{default:l(()=>[u(J,{title:`기획`,description:`요구사항 정의`,status:`finished`}),u(J,{title:`개발`,description:`기능 구현`,status:`finished`}),u(J,{title:`QA`,description:`품질 검증`,status:`active`}),u(J,{title:`출시`,description:`프로덕션 배포`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`size-heading`,title:`크기`,description:`steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다.`,stack:``,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps size="sm" aria-label="Small 단계">
    <StepsItem title="1단계" status="finished" />
    <StepsItem title="2단계" status="active" />
    <StepsItem title="3단계" status="wait" />
  </Steps>
  <Steps size="lg" aria-label="Large 단계">
    <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
    <StepsItem title="디자인" description="UI 키트 제작" status="active" />
    <StepsItem title="개발" description="구현 및 테스트" status="wait" />
  </Steps>
</template>`},{default:l(()=>[u(N,{size:`sm`,"aria-label":`Small 단계`},{default:l(()=>[u(J,{title:`1단계`,status:`finished`}),u(J,{title:`2단계`,status:`active`}),u(J,{title:`3단계`,status:`wait`})]),_:1}),u(N,{size:`lg`,"aria-label":`Large 단계`},{default:l(()=>[u(J,{title:`요구사항`,description:`범위 및 일정 확정`,status:`finished`}),u(J,{title:`디자인`,description:`UI 키트 제작`,status:`active`}),u(J,{title:`개발`,description:`구현 및 테스트`,status:`wait`})]),_:1})]),_:1}),u(k,{"heading-id":`state-heading`,title:`상태 요약`,description:`각 상태 클래스의 시각적 의미입니다. 현재 단계에는 <code class="typo_code">aria-current="step"</code>을 함께 지정합니다.`,stack:``,code:`<script setup>
import Steps from '@/components/Steps.vue';
import StepsItem from '@/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="상태 예시 — 완료">
    <StepsItem title="is-finished" description="완료된 단계" status="finished" />
  </Steps>
  <Steps aria-label="상태 예시 — 진행 중">
    <StepsItem title="is-active" description="현재 진행 단계" status="active" />
  </Steps>
  <Steps aria-label="상태 예시 — 대기">
    <StepsItem title="is-wait" description="아직 도달하지 않은 단계" status="wait" />
  </Steps>
  <Steps aria-label="상태 예시 — 오류">
    <StepsItem title="is-error" description="오류가 발생한 단계" status="error" />
  </Steps>
</template>`},{default:l(()=>[u(N,{"aria-label":`상태 예시 — 완료`},{default:l(()=>[u(J,{title:`is-finished`,description:`완료된 단계`,status:`finished`})]),_:1}),u(N,{"aria-label":`상태 예시 — 진행 중`},{default:l(()=>[u(J,{title:`is-active`,description:`현재 진행 단계`,status:`active`})]),_:1}),u(N,{"aria-label":`상태 예시 — 대기`},{default:l(()=>[u(J,{title:`is-wait`,description:`아직 도달하지 않은 단계`,status:`wait`})]),_:1}),u(N,{"aria-label":`상태 예시 — 오류`},{default:l(()=>[u(J,{title:`is-error`,description:`오류가 발생한 단계`,status:`error`})]),_:1})]),_:1}),u(C,{"heading-id":`api-props-heading`,title:`API · Steps Props`},{default:l(()=>[u(w,{columns:v(Y),rows:v(X),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),u(C,{"heading-id":`api-item-props-heading`,title:`API · StepsItem Props`},{default:l(()=>[u(w,{columns:v(Z),rows:v(Q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),u(C,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:l(()=>[u(w,{columns:v(ne),rows:v(re),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),u(C,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:l(()=>[u(w,{columns:v($),rows:v(ie),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),u(C,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:l(()=>[u(w,{columns:v(ae),rows:v(oe),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ce as default,se as docMeta};