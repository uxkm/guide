import{u as mt,b as lt,c as ct,r as dt,m as St,f,o as Bt,a as g,v as Dt}from"./vue.esm-bundler-BaZlnz8B.js";import{u as It,c as At}from"./useDemoCode-B9b0dRAo.js";import{_ as s}from"./StepsItem-B0uzHP5o.js";import{b as ft,a as vt}from"./ripple-api-C5ZjLJl-.js";import"./Icon-D97OEunV.js";import"./useRipple-oORGvIsP.js";const gt=["aria-label"],e=Object.assign({inheritAttrs:!1},{__name:"Steps",props:{current:Number,direction:{type:String,default:"horizontal",validator:u=>["horizontal","vertical"].includes(u)},size:{type:String,default:"md",validator:u=>["sm","md","lg"].includes(u)},dot:Boolean,iconStyle:Boolean,navigable:Boolean,align:{type:String,default:"",validator:u=>["","center"].includes(u)},ariaLabel:String},setup(u){const n=u,ut=mt(),a=lt(),v=g(null),C=new Map,p=g([]),nt=At("Steps",{defaults:{direction:"horizontal",size:"md"},booleanProps:new Set(["dot","iconStyle","navigable"]),selfClosing:!1});It(nt,n,ut,v,a);const it=f(()=>{const t=["steps"];return n.direction==="vertical"&&t.push("steps_vertical"),n.size==="sm"&&t.push("steps_sm"),n.size==="lg"&&t.push("steps_lg"),n.dot&&t.push("steps_dot"),n.iconStyle&&t.push("steps_icon-style"),n.navigable&&t.push("steps_navigable"),n.align==="center"&&t.push("steps_align-center"),a.class&&t.push(a.class),t}),at=f(()=>{const{class:t,...i}=a;return i});function Ct(t,i){C.set(t,i),p.value=[...C.keys()]}function pt(t){C.delete(t),p.value=[...C.keys()]}function rt(t){const i=p.value;return i.indexOf(t)===i.length-1}function ot(t){return p.value.indexOf(t)+1}return Dt("steps",{registerItem:Ct,unregisterItem:pt,isLastItem:rt,getItemIndex:ot,navigable:f(()=>n.navigable)}),(t,i)=>(Bt(),ct("ol",St({ref_key:"rootRef",ref:v,class:it.value,"aria-label":u.ariaLabel},at.value),[dt(t.$slots,"default")],16,gt))}}),st=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],bt=[{name:"current",type:"number",default:"—",description:"현재 단계 인덱스 (0-based, 선택)"},{name:"direction",type:"'horizontal' | 'vertical'",default:"horizontal",description:"steps_vertical"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"steps_sm · steps_lg"},{name:"dot",type:"boolean",default:"false",description:"steps_dot — 원형 마커"},{name:"icon-style",type:"boolean",default:"false",description:"steps_icon-style"},{name:"navigable",type:"boolean",default:"false",description:"steps_navigable — 완료 단계 클릭"},{name:"align",type:"'' | 'center'",default:"—",description:"steps_align-center"},{name:"aria-label",type:"string",default:"—",description:"ol aria-label"}],Et=st,wt=[{name:"title",type:"string",default:"—",description:"단계 제목 (필수)"},{name:"description",type:"string",default:"—",description:"단계 설명"},{name:"status",type:"'finished' | 'active' | 'wait' | 'error'",default:"wait",description:"is-finished · is-active · is-wait · is-error"},{name:"index",type:"number",default:"—",description:"단계 번호 (자동 할당)"},ft],ht=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],yt=[{name:"default",description:"StepsItem 나열"}],kt=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],_t=[{name:"steps · steps_item · steps_head · steps_indicator",description:"루트·항목·헤드·인디케이터"},{name:"steps_title · steps_desc · steps_tail",description:"제목·설명·연결선"},{name:"steps_trigger",description:"navigable 모드 클릭 버튼"},{name:"steps_vertical · steps_dot · steps_icon-style · steps_navigable",description:"레이아웃·스타일"},{name:"steps_sm · steps_lg · steps_align-center",description:"크기·정렬"},{name:"is-finished · is-active · is-wait · is-error",description:"단계 상태"},{name:'aria-current="step"',description:"현재 단계"},...vt],xt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ft=[{name:"--steps-indicator-size · --steps-gap",default:"—",description:"인디케이터·간격"},{name:"--steps-title-size · --steps-desc-size",default:"—",description:"타이포"},{name:"--steps-tail-color",default:"—",description:"연결선 색"},{name:"--steps-pulse-duration",default:"1.5s",description:"is-active 인디케이터 파장 애니메이션"}],Pt=[{title:"API · Steps Props",tables:[{columns:st,rows:bt,codeColumn:"name"}]},{title:"API · StepsItem Props",tables:[{columns:Et,rows:wt,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ht,rows:yt,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:kt,rows:_t,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:xt,rows:Ft,codeColumn:"name"}]}],Qt={title:"Components/네비게이션/Steps",id:"components-steps",component:e,tags:["autodocs"],argTypes:{current:{control:"number",type:{name:"number",summary:"number"}},direction:{control:"select",options:["horizontal","vertical"],type:{name:"enum",summary:"'horizontal' | 'vertical'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},dot:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconStyle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},navigable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},align:{control:"select",options:["center"],type:{name:"enum",summary:"'center'"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:Pt}},r={args:{current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},render:u=>({components:{Steps:e,StepsItem:s},setup(){return{args:u}},template:`<Steps v-bind="args" :current="1">
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>`})},o={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps aria-label="주문 진행 단계">
      <StepsItem title="장바구니" description="상품 확인" status="finished" />
      <StepsItem title="배송 정보" description="주소 입력" status="finished" />
      <StepsItem title="결제" description="결제 수단 선택" status="active" />
      <StepsItem title="완료" description="주문 확인" status="wait" />
    </Steps>`})},m={name:"간단",parameters:{demoPreview:{stack:!1},docs:{description:{story:"제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="회원가입 단계">
    <StepsItem title="이메일 인증" status="finished" />
    <StepsItem title="프로필 설정" status="active" />
    <StepsItem title="완료" status="wait" />
  </Steps>
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps aria-label="회원가입 단계">
      <StepsItem title="이메일 인증" status="finished" />
      <StepsItem title="프로필 설정" status="active" />
      <StepsItem title="완료" status="wait" />
    </Steps>`})},l={name:"세로형",parameters:{demoPreview:{stack:!1},docs:{description:{story:"steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps direction="vertical" class="steps_demo-narrow" aria-label="프로젝트 생성 단계">
      <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
      <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
      <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
      <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
    </Steps>`})},c={name:"도트",parameters:{demoPreview:{stack:!1},docs:{description:{story:"steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps dot aria-label="배송 추적 단계">
      <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
      <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
      <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
      <StepsItem title="배송 완료" description="대기 중" status="wait" />
    </Steps>`})},d={name:"아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps icon-style aria-label="온보딩 단계">
    <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
    <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
    <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
  </Steps>
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps icon-style aria-label="온보딩 단계">
      <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
      <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
      <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
    </Steps>`})},S={name:"탐색 가능",parameters:{demoPreview:{stack:!1},docs:{description:{story:"steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps navigable aria-label="설정 마법사 — 탐색 가능">
    <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
    <StepsItem title="알림" description="수신 채널 설정" status="active" />
    <StepsItem title="확인" description="설정 검토" status="wait" />
  </Steps>
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps navigable aria-label="설정 마법사 — 탐색 가능">
      <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
      <StepsItem title="알림" description="수신 채널 설정" status="active" />
      <StepsItem title="확인" description="설정 검토" status="wait" />
    </Steps>`})},B={name:"오류",parameters:{demoPreview:{stack:!1},docs:{description:{story:"is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다."},source:{code:`<script setup>
import Steps from '@uxkm/ui/components/Steps.vue';
import StepsItem from '@uxkm/ui/components/StepsItem.vue';
<\/script>

<template>
  <Steps aria-label="결제 단계 — 오류">
    <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
    <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
    <StepsItem title="완료" description="주문 접수" status="wait" />
  </Steps>
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps aria-label="결제 단계 — 오류">
      <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
      <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
      <StepsItem title="완료" description="주문 접수" status="wait" />
    </Steps>`})},D={name:"가운데 정렬",parameters:{demoPreview:{stack:!1},docs:{description:{story:"steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps align="center" aria-label="출시 단계">
      <StepsItem title="기획" description="요구사항 정의" status="finished" />
      <StepsItem title="개발" description="기능 구현" status="finished" />
      <StepsItem title="QA" description="품질 검증" status="active" />
      <StepsItem title="출시" description="프로덕션 배포" status="wait" />
    </Steps>`})},I={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps size="sm" aria-label="Small 단계">
      <StepsItem title="1단계" status="finished" />
      <StepsItem title="2단계" status="active" />
      <StepsItem title="3단계" status="wait" />
    </Steps>

    <Steps size="lg" aria-label="Large 단계">
      <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
      <StepsItem title="디자인" description="UI 키트 제작" status="active" />
      <StepsItem title="개발" description="구현 및 테스트" status="wait" />
    </Steps>`})},A={name:"상태 요약",parameters:{demoPreview:{stack:!0},docs:{description:{story:"각 상태 클래스의 시각적 의미입니다. 현재 단계에는 <code class=&quot;typo_code&quot;>aria-current=&quot;step&quot;</code>을 함께 지정합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Steps:e,StepsItem:s},template:`<Steps aria-label="상태 예시 — 완료">
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
    </Steps>`})};var b,E,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      Steps,
      StepsItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Steps v-bind="args" :current="1">
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>\`
  })
}`,...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var h,y,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
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
  })
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,x,F;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "간단",
  parameters: {
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
  render: () => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps aria-label="회원가입 단계">
      <StepsItem title="이메일 인증" status="finished" />
      <StepsItem title="프로필 설정" status="active" />
      <StepsItem title="완료" status="wait" />
    </Steps>\`
  })
}`,...(F=(x=m.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var P,z,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "세로형",
  parameters: {
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
  render: () => ({
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
  })
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var q,O,U;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "도트",
  parameters: {
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
  render: () => ({
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
  })
}`,...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,Q,T;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
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
  render: () => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps icon-style aria-label="온보딩 단계">
      <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
      <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
      <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
    </Steps>\`
  })
}`,...(T=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var N,R,V;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "탐색 가능",
  parameters: {
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
  render: () => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps navigable aria-label="설정 마법사 — 탐색 가능">
      <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
      <StepsItem title="알림" description="수신 채널 설정" status="active" />
      <StepsItem title="확인" description="설정 검토" status="wait" />
    </Steps>\`
  })
}`,...(V=(R=S.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var M,$,j;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "오류",
  parameters: {
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
  render: () => ({
    components: {
      Steps,
      StepsItem
    },
    template: \`<Steps aria-label="결제 단계 — 오류">
      <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
      <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
      <StepsItem title="완료" description="주문 접수" status="wait" />
    </Steps>\`
  })
}`,...(j=($=B.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var H,J,K;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "가운데 정렬",
  parameters: {
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
  render: () => ({
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
  })
}`,...(K=(J=D.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,X,Y;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
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
  render: () => ({
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
  })
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "상태 요약",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "각 상태 클래스의 시각적 의미입니다. 현재 단계에는 <code class=&quot;typo_code&quot;>aria-current=&quot;step&quot;</code>을 함께 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Steps from '@uxkm/ui/components/Steps.vue';\\nimport StepsItem from '@uxkm/ui/components/StepsItem.vue';\\n<\/script>\\n\\n<template>\\n  <Steps aria-label=\\"상태 예시 — 완료\\">\\n    <StepsItem title=\\"is-finished\\" description=\\"완료된 단계\\" status=\\"finished\\" />\\n  </Steps>\\n  <Steps aria-label=\\"상태 예시 — 진행 중\\">\\n    <StepsItem title=\\"is-active\\" description=\\"현재 진행 단계\\" status=\\"active\\" />\\n  </Steps>\\n  <Steps aria-label=\\"상태 예시 — 대기\\">\\n    <StepsItem title=\\"is-wait\\" description=\\"아직 도달하지 않은 단계\\" status=\\"wait\\" />\\n  </Steps>\\n  <Steps aria-label=\\"상태 예시 — 오류\\">\\n    <StepsItem title=\\"is-error\\" description=\\"오류가 발생한 단계\\" status=\\"error\\" />\\n  </Steps>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
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
  })
}`,...(et=(tt=A.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};const Tt=["Playground","Basic","Simple","Vertical","Dot","Icon","Navigable","Error","Align","Size","State"];export{D as Align,o as Basic,c as Dot,B as Error,d as Icon,S as Navigable,r as Playground,m as Simple,I as Size,A as State,l as Vertical,Tt as __namedExportsOrder,Qt as default};
