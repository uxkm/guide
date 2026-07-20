import{u as fe,a as Ie,b as Ae,c as C,r as ve,p as ge,g as c,o as n,i as U,j as be,aw as ye,k as Ee,l as we,a5 as ke,a4 as _e,af as ze,s as xe,d as o,m as g,t as D,f as b,n as Fe,ax as Pe,_ as h}from"./iframe-CAswI7Qe.js";import{w as r,s as Le}from"./story-renders-DjeoaiCa.js";import{r as Re,a as Ne}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Oe=["aria-label"],i=Object.assign({inheritAttrs:!1},{__name:"Steps",props:{current:Number,direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},dot:Boolean,iconStyle:Boolean,navigable:Boolean,align:{type:String,default:"",validator:e=>["","center"].includes(e)},ariaLabel:String},setup(e){const s=e,N=fe(),m=Ie(),f=U(null),p=new Map,d=U([]),u=be("Steps",{defaults:{direction:"horizontal",size:"md"},booleanProps:new Set(["dot","iconStyle","navigable"]),selfClosing:!1});Ae(u,s,N,f,m);const S=c(()=>{const t=["steps"];return s.direction==="vertical"&&t.push("steps_vertical"),s.size==="sm"&&t.push("steps_sm"),s.size==="lg"&&t.push("steps_lg"),s.dot&&t.push("steps_dot"),s.iconStyle&&t.push("steps_icon-style"),s.navigable&&t.push("steps_navigable"),s.align==="center"&&t.push("steps_align-center"),m.class&&t.push(m.class),t}),I=c(()=>{const{class:t,...l}=m;return l});function O(t,l){p.set(t,l),d.value=[...p.keys()]}function A(t){p.delete(t),d.value=[...p.keys()]}function v(t){const l=d.value;return l.indexOf(t)===l.length-1}function B(t){return d.value.indexOf(t)+1}return ye("steps",{registerItem:O,unregisterItem:A,isLastItem:v,getItemIndex:B,navigable:c(()=>s.navigable)}),(t,l)=>(n(),C("ol",ge({ref_key:"rootRef",ref:f,class:S.value,"aria-label":e.ariaLabel},I.value),[ve(t.$slots,"default")],16,Oe))}}),Ue=["aria-current"],$e=["disabled","aria-current"],Ve={class:"steps_head"},Ge={class:"steps_indicator","aria-hidden":"true"},Qe={key:2,class:"steps_index"},Te={key:0,class:"steps_tail","aria-hidden":"true"},je={class:"steps_content"},Me={class:"steps_title"},qe={key:0,class:"steps_desc"},He={class:"steps_head"},Je={class:"steps_indicator","aria-hidden":"true"},Ke={key:2,class:"steps_index"},We={key:0,class:"steps_tail","aria-hidden":"true"},Xe={class:"steps_content"},Ye={class:"steps_title"},Ze={key:0,class:"steps_desc"},a={__name:"StepsItem",props:{ripple:Ee,title:{type:String,required:!0},description:String,status:{type:String,default:"wait",validator:e=>["finished","active","wait","error"].includes(e)},index:Number},setup(e){const s=e,{rippleAttrs:N}=we(s),m=Ie(),f=fe(),p=U(null),d=be("StepsItem",{defaults:{status:"wait"},booleanProps:new Set(["ripple"]),skipProps:["index"],labelProp:"title",selfClosing:!0});Ae(d,s,f,p,m);const u=Pe("steps",null),S=ke().replace(/:/g,""),I=c(()=>{var B;return((B=u==null?void 0:u.navigable)==null?void 0:B.value)??!1}),O=c(()=>["steps_item",`is-${s.status}`]),A=c(()=>(u==null?void 0:u.isLastItem(S))??!1),v=c(()=>s.index??(u==null?void 0:u.getItemIndex(S))??0);return _e(()=>{u==null||u.registerItem(S,s)}),ze(()=>{u==null||u.unregisterItem(S)}),(B,t)=>(n(),C("li",{ref_key:"rootRef",ref:p,class:Fe(O.value),"aria-current":!I.value&&e.status==="active"?"step":void 0},[I.value?(n(),C("button",ge({key:0,type:"button",class:"steps_trigger",disabled:e.status==="wait","aria-current":e.status==="active"?"step":void 0},xe(N)),[o("span",Ve,[o("span",Ge,[e.status==="finished"?(n(),g(h,{key:0,name:"check",class:"steps_icon"})):e.status==="error"?(n(),g(h,{key:1,name:"close",class:"steps_icon"})):(n(),C("span",Qe,D(v.value),1))]),A.value?b("",!0):(n(),C("span",Te))]),o("span",je,[o("span",Me,D(e.title),1),e.description?(n(),C("span",qe,D(e.description),1)):b("",!0)])],16,$e)):ve(B.$slots,"default",{key:1},()=>[o("div",He,[o("span",Je,[e.status==="finished"?(n(),g(h,{key:0,name:"check",class:"steps_icon"})):e.status==="error"?(n(),g(h,{key:1,name:"close",class:"steps_icon"})):(n(),C("span",Ke,D(v.value),1))]),A.value?b("",!0):(n(),C("span",We))]),o("div",Xe,[o("p",Ye,D(e.title),1),e.description?(n(),C("p",Ze,D(e.description),1)):b("",!0)])])],10,Ue))}},he=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],et=[{name:"current",type:"number",default:"—",description:"현재 단계 인덱스 (0-based, 선택)"},{name:"direction",type:"'horizontal' | 'vertical'",default:"horizontal",description:"steps_vertical"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"steps_sm · steps_lg"},{name:"dot",type:"boolean",default:"false",description:"steps_dot — 원형 마커"},{name:"icon-style",type:"boolean",default:"false",description:"steps_icon-style"},{name:"navigable",type:"boolean",default:"false",description:"steps_navigable — 완료 단계 클릭"},{name:"align",type:"'' | 'center'",default:"—",description:"steps_align-center"},{name:"aria-label",type:"string",default:"—",description:"ol aria-label"}],tt=he,st=[{name:"title",type:"string",default:"—",description:"단계 제목 (필수)"},{name:"description",type:"string",default:"—",description:"단계 설명"},{name:"status",type:"'finished' | 'active' | 'wait' | 'error'",default:"wait",description:"is-finished · is-active · is-wait · is-error"},{name:"index",type:"number",default:"—",description:"단계 번호 (자동 할당)"},Re],ut=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],nt=[{name:"default",description:"StepsItem 나열"}],it=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],at=[{name:"steps · steps_item · steps_head · steps_indicator",description:"루트·항목·헤드·인디케이터"},{name:"steps_title · steps_desc · steps_tail",description:"제목·설명·연결선"},{name:"steps_trigger",description:"navigable 모드 클릭 버튼"},{name:"steps_vertical · steps_dot · steps_icon-style · steps_navigable",description:"레이아웃·스타일"},{name:"steps_sm · steps_lg · steps_align-center",description:"크기·정렬"},{name:"is-finished · is-active · is-wait · is-error",description:"단계 상태"},{name:'aria-current="step"',description:"현재 단계"},...Ne],rt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ct=[{name:"--steps-indicator-size · --steps-gap",default:"—",description:"인디케이터·간격"},{name:"--steps-title-size · --steps-desc-size",default:"—",description:"타이포"},{name:"--steps-tail-color",default:"—",description:"연결선 색"},{name:"--steps-pulse-duration",default:"1.5s",description:"is-active 인디케이터 파장 애니메이션"}],ot=[{title:"API · Steps Props",tables:[{columns:he,rows:et,codeColumn:"name"}]},{title:"API · StepsItem Props",tables:[{columns:tt,rows:st,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ut,rows:nt,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:it,rows:at,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:rt,rows:Ct,codeColumn:"name"}]}],dt={title:"Components/네비게이션/Steps",id:"components-steps",component:i,subcomponents:{StepsItem:a},tags:["autodocs"],argTypes:{current:{control:"number",type:{name:"number",summary:"number"}},direction:{control:"select",options:["horizontal","vertical"],type:{name:"enum",summary:"'horizontal' | 'vertical'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},dot:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconStyle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},navigable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},align:{control:"select",options:["center"],type:{name:"enum",summary:"'center'"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ot}},y={parameters:{controls:{disable:!1}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:(e,s)=>({components:{Steps:i,StepsItem:a},setup(){return{args:Le(s)}},template:`<Steps v-bind="args" :current="1">
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>`})},E={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="주문 진행 단계">
    <StepsItem title="장바구니" description="상품 확인" status="finished" />
    <StepsItem title="배송 정보" description="주소 입력" status="finished" />
    <StepsItem title="결제" description="결제 수단 선택" status="active" />
    <StepsItem title="완료" description="주문 확인" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps aria-label="주문 진행 단계">
        <StepsItem title="장바구니" description="상품 확인" status="finished" />
        <StepsItem title="배송 정보" description="주소 입력" status="finished" />
        <StepsItem title="결제" description="결제 수단 선택" status="active" />
        <StepsItem title="완료" description="주문 확인" status="wait" />
      </Steps>`}))},w={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="회원가입 단계">
    <StepsItem title="이메일 인증" status="finished" />
    <StepsItem title="프로필 설정" status="active" />
    <StepsItem title="완료" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps aria-label="회원가입 단계">
        <StepsItem title="이메일 인증" status="finished" />
        <StepsItem title="프로필 설정" status="active" />
        <StepsItem title="완료" status="wait" />
      </Steps>`}))},k={name:"세로형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
    <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
    <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
    <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
    <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
        <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
        <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
        <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
        <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
      </Steps>`}))},_={name:"도트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps dot aria-label="배송 추적 단계">
    <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
    <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
    <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
    <StepsItem title="배송 완료" description="대기 중" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps dot aria-label="배송 추적 단계">
        <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
        <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
        <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
        <StepsItem title="배송 완료" description="대기 중" status="wait" />
      </Steps>`}))},z={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps icon-style aria-label="온보딩 단계">
    <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
    <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
    <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps icon-style aria-label="온보딩 단계">
        <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
        <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
        <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
      </Steps>`}))},x={name:"탐색 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps navigable aria-label="설정 마법사 — 탐색 가능">
    <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
    <StepsItem title="알림" description="수신 채널 설정" status="active" />
    <StepsItem title="확인" description="설정 검토" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps navigable aria-label="설정 마법사 — 탐색 가능">
        <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
        <StepsItem title="알림" description="수신 채널 설정" status="active" />
        <StepsItem title="확인" description="설정 검토" status="wait" />
      </Steps>`}))},F={name:"오류",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="결제 단계 — 오류">
    <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
    <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
    <StepsItem title="완료" description="주문 접수" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps aria-label="결제 단계 — 오류">
        <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
        <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
        <StepsItem title="완료" description="주문 접수" status="wait" />
      </Steps>`}))},P={name:"가운데 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps align="center" aria-label="출시 단계">
    <StepsItem title="기획" description="요구사항 정의" status="finished" />
    <StepsItem title="개발" description="기능 구현" status="finished" />
    <StepsItem title="QA" description="품질 검증" status="active" />
    <StepsItem title="출시" description="프로덕션 배포" status="wait" />
  </Steps>
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps align="center" aria-label="출시 단계">
        <StepsItem title="기획" description="요구사항 정의" status="finished" />
        <StepsItem title="개발" description="기능 구현" status="finished" />
        <StepsItem title="QA" description="품질 검증" status="active" />
        <StepsItem title="출시" description="프로덕션 배포" status="wait" />
      </Steps>`}))},L={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
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
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps size="sm" aria-label="Small 단계">
        <StepsItem title="1단계" status="finished" />
        <StepsItem title="2단계" status="active" />
        <StepsItem title="3단계" status="wait" />
      </Steps>
      <Steps size="lg" aria-label="Large 단계">
        <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
        <StepsItem title="디자인" description="UI 키트 제작" status="active" />
        <StepsItem title="개발" description="구현 및 테스트" status="wait" />
      </Steps>`}))},R={name:"상태 요약",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'각 상태 클래스의 시각적 의미입니다. 현재 단계에는 `aria-current="step"`을 함께 지정합니다.'},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
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
</template>`,language:"vue"}}},args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:r(()=>({components:{Steps:i,StepsItem:a},template:`<Steps aria-label="상태 예시 — 완료">
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
      </Steps>`}))};var $,V,G;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: (_args, context) => ({
    components: {
      Steps,
      StepsItem
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Steps v-bind="args" :current="1">
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>\`
  })
}`,...(G=(V=y.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var Q,T,j;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps aria-label=\\"주문 진행 단계\\">\\n    <StepsItem title=\\"장바구니\\" description=\\"상품 확인\\" status=\\"finished\\" />\\n    <StepsItem title=\\"배송 정보\\" description=\\"주소 입력\\" status=\\"finished\\" />\\n    <StepsItem title=\\"결제\\" description=\\"결제 수단 선택\\" status=\\"active\\" />\\n    <StepsItem title=\\"완료\\" description=\\"주문 확인\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps aria-label="주문 진행 단계">
        <StepsItem title="장바구니" description="상품 확인" status="finished" />
        <StepsItem title="배송 정보" description="주소 입력" status="finished" />
        <StepsItem title="결제" description="결제 수단 선택" status="active" />
        <StepsItem title="완료" description="주문 확인" status="wait" />
      </Steps>\`
  }))
}`,...(j=(T=E.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var M,q,H;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "간단",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps aria-label=\\"회원가입 단계\\">\\n    <StepsItem title=\\"이메일 인증\\" status=\\"finished\\" />\\n    <StepsItem title=\\"프로필 설정\\" status=\\"active\\" />\\n    <StepsItem title=\\"완료\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps aria-label="회원가입 단계">
        <StepsItem title="이메일 인증" status="finished" />
        <StepsItem title="프로필 설정" status="active" />
        <StepsItem title="완료" status="wait" />
      </Steps>\`
  }))
}`,...(H=(q=w.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,W;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "세로형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps direction=\\"vertical\\" class=\\"steps_demo-narrow\\" aria-label=\\"프로젝트 생성 단계\\">\\n    <StepsItem title=\\"기본 정보\\" description=\\"프로젝트 이름과 설명을 입력합니다.\\" status=\\"finished\\" />\\n    <StepsItem title=\\"팀 구성\\" description=\\"멤버를 초대하고 역할을 지정합니다.\\" status=\\"active\\" />\\n    <StepsItem title=\\"저장소 연결\\" description=\\"Git 저장소를 연동합니다.\\" status=\\"wait\\" />\\n    <StepsItem title=\\"검토 및 생성\\" description=\\"설정을 확인하고 프로젝트를 만듭니다.\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
        <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
        <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
        <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
        <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
      </Steps>\`
  }))
}`,...(W=(K=k.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var X,Y,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "도트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps dot aria-label=\\"배송 추적 단계\\">\\n    <StepsItem title=\\"주문 접수\\" description=\\"6월 20일 09:12\\" status=\\"finished\\" />\\n    <StepsItem title=\\"배송 준비\\" description=\\"6월 20일 14:30\\" status=\\"finished\\" />\\n    <StepsItem title=\\"배송 중\\" description=\\"예상 도착 6월 21일\\" status=\\"active\\" />\\n    <StepsItem title=\\"배송 완료\\" description=\\"대기 중\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps dot aria-label="배송 추적 단계">
        <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
        <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
        <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
        <StepsItem title="배송 완료" description="대기 중" status="wait" />
      </Steps>\`
  }))
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps icon-style aria-label=\\"온보딩 단계\\">\\n    <StepsItem title=\\"계정 생성\\" description=\\"이메일 인증 완료\\" status=\\"finished\\" />\\n    <StepsItem title=\\"팀 초대\\" description=\\"동료를 초대하세요\\" status=\\"active\\" />\\n    <StepsItem title=\\"첫 프로젝트\\" description=\\"프로젝트를 만드세요\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps icon-style aria-label="온보딩 단계">
        <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
        <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
        <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
      </Steps>\`
  }))
}`,...(se=(te=z.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ue,ne,ie;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "탐색 가능",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps navigable aria-label=\\"설정 마법사 — 탐색 가능\\">\\n    <StepsItem title=\\"환경\\" description=\\"개발 · 스테이징\\" status=\\"finished\\" />\\n    <StepsItem title=\\"알림\\" description=\\"수신 채널 설정\\" status=\\"active\\" />\\n    <StepsItem title=\\"확인\\" description=\\"설정 검토\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps navigable aria-label="설정 마법사 — 탐색 가능">
        <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
        <StepsItem title="알림" description="수신 채널 설정" status="active" />
        <StepsItem title="확인" description="설정 검토" status="wait" />
      </Steps>\`
  }))
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ae,re,Ce;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "오류",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps aria-label=\\"결제 단계 — 오류\\">\\n    <StepsItem title=\\"주문 확인\\" description=\\"상품 및 수량 확인\\" status=\\"finished\\" />\\n    <StepsItem title=\\"결제 실패\\" description=\\"카드 승인이 거절되었습니다\\" status=\\"error\\" />\\n    <StepsItem title=\\"완료\\" description=\\"주문 접수\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps aria-label="결제 단계 — 오류">
        <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
        <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
        <StepsItem title="완료" description="주문 접수" status="wait" />
      </Steps>\`
  }))
}`,...(Ce=(re=F.parameters)==null?void 0:re.docs)==null?void 0:Ce.source}}};var oe,pe,le;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "가운데 정렬",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps align=\\"center\\" aria-label=\\"출시 단계\\">\\n    <StepsItem title=\\"기획\\" description=\\"요구사항 정의\\" status=\\"finished\\" />\\n    <StepsItem title=\\"개발\\" description=\\"기능 구현\\" status=\\"finished\\" />\\n    <StepsItem title=\\"QA\\" description=\\"품질 검증\\" status=\\"active\\" />\\n    <StepsItem title=\\"출시\\" description=\\"프로덕션 배포\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps align="center" aria-label="출시 단계">
        <StepsItem title="기획" description="요구사항 정의" status="finished" />
        <StepsItem title="개발" description="기능 구현" status="finished" />
        <StepsItem title="QA" description="품질 검증" status="active" />
        <StepsItem title="출시" description="프로덕션 배포" status="wait" />
      </Steps>\`
  }))
}`,...(le=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ce,me,de;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps size=\\"sm\\" aria-label=\\"Small 단계\\">\\n    <StepsItem title=\\"1단계\\" status=\\"finished\\" />\\n    <StepsItem title=\\"2단계\\" status=\\"active\\" />\\n    <StepsItem title=\\"3단계\\" status=\\"wait\\" />\\n  </Steps>\\n  <Steps size=\\"lg\\" aria-label=\\"Large 단계\\">\\n    <StepsItem title=\\"요구사항\\" description=\\"범위 및 일정 확정\\" status=\\"finished\\" />\\n    <StepsItem title=\\"디자인\\" description=\\"UI 키트 제작\\" status=\\"active\\" />\\n    <StepsItem title=\\"개발\\" description=\\"구현 및 테스트\\" status=\\"wait\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps size="sm" aria-label="Small 단계">
        <StepsItem title="1단계" status="finished" />
        <StepsItem title="2단계" status="active" />
        <StepsItem title="3단계" status="wait" />
      </Steps>
      <Steps size="lg" aria-label="Large 단계">
        <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
        <StepsItem title="디자인" description="UI 키트 제작" status="active" />
        <StepsItem title="개발" description="구현 및 테스트" status="wait" />
      </Steps>\`
  }))
}`,...(de=(me=L.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var Se,Be,De;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "상태 요약",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "각 상태 클래스의 시각적 의미입니다. 현재 단계에는 \`aria-current=\\"step\\"\`을 함께 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps aria-label=\\"상태 예시 — 완료\\">\\n    <StepsItem title=\\"is-finished\\" description=\\"완료된 단계\\" status=\\"finished\\" />\\n  </Steps>\\n  <Steps aria-label=\\"상태 예시 — 진행 중\\">\\n    <StepsItem title=\\"is-active\\" description=\\"현재 진행 단계\\" status=\\"active\\" />\\n  </Steps>\\n  <Steps aria-label=\\"상태 예시 — 대기\\">\\n    <StepsItem title=\\"is-wait\\" description=\\"아직 도달하지 않은 단계\\" status=\\"wait\\" />\\n  </Steps>\\n  <Steps aria-label=\\"상태 예시 — 오류\\">\\n    <StepsItem title=\\"is-error\\" description=\\"오류가 발생한 단계\\" status=\\"error\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    direction: "horizontal",
    size: "md",
    dot: false,
    iconStyle: false,
    navigable: false,
    align: "center",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps aria-label="상태 예시 — 완료">
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
      </Steps>\`
  }))
}`,...(De=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};const St=["Playground","Basic","Simple","Vertical","Dot","Icon","Navigable","Error","Align","Size","State"];export{P as Align,E as Basic,_ as Dot,F as Error,z as Icon,x as Navigable,y as Playground,w as Simple,L as Size,R as State,k as Vertical,St as __namedExportsOrder,dt as default};
