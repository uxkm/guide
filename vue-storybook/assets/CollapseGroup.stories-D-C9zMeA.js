import{b as me,c as b,r as v,m as h,f as P,o as E,a as S,K as ge,v as fe,y as $,q as O,h as I,j as z,e as p,k as A,A as ve,n as Be,t as M,u as Ge,C as xe,D as ye,x as we}from"./vue.esm-bundler-BaZlnz8B.js";import{w as ke,x as _e}from"./useDemoCode-B9b0dRAo.js";import{_ as de}from"./Button-C3SXv-sJ.js";import{_ as De}from"./Icon-D97OEunV.js";import{r as Ae,u as be}from"./useRipple-oORGvIsP.js";import{_ as B}from"./List-Dw1dV5h3.js";import{_ as d}from"./ListItem-BC0xRlNe.js";import{b as Pe}from"./ripple-api-C5ZjLJl-.js";const t=Object.assign({inheritAttrs:!1},{__name:"CollapseGroup",props:{variant:{type:String,default:"bordered",validator:u=>["bordered","ghost","card"].includes(u)},size:{type:String,default:"md",validator:u=>["sm","md","lg"].includes(u)},accordion:Boolean,narrow:Boolean},setup(u){const e=u,c=me(),s=S(null),n=new Map,o=ge([]),a=P(()=>["collapse_group",`collapse_${e.variant}`,e.size==="sm"?"collapse_sm":null,e.size==="lg"?"collapse_lg":null,e.narrow?"collapse_demo-narrow":null,c.class]),C=P(()=>{const{class:l,...r}=c;return r});function g(l){n.set(l.id,l),o.value=[...n.values()]}function f(l){n.delete(l),o.value=[...n.values()]}function m(l,r){const R=n.get(l);if(!R||R.disabled)return;const T=!r.value;if(e.accordion&&T)for(const[Ee,j]of n)Ee!==l&&!j.disabled&&(j.isOpen.value=!1);r.value=T}return fe("collapseGroup",{registerPanel:g,unregisterPanel:f,togglePanel:m}),ke(e,o,s,c),(l,r)=>(E(),b("div",h({ref_key:"rootRef",ref:s,class:a.value},C.value),[v(l.$slots,"default")],16))}}),Le={key:0,"data-demo-slot":"lead"},Fe={class:"btn_label"},he=["id","hidden"],D=Object.assign({inheritAttrs:!1},{__name:"CollapseExternal",props:{ripple:Ae,triggerLabel:{type:String,required:!0},narrow:Boolean,boxed:{type:Boolean,default:!0},open:Boolean},setup(u){const e=u,{rippleAttrs:c}=be(e),s=me(),n=S(null),o=$().replace(/:/g,""),a=S(e.open),C=P(()=>[e.narrow?"collapse_demo-narrow":null,s.class]),g=P(()=>e.boxed?{marginTop:"var(--space-sm)",padding:"var(--space-lg)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",background:"var(--color-surface-raised)"}:void 0),f=P(()=>{const{class:l,...r}=s;return r});function m(){a.value=!a.value}return _e(e,n,s,a),(l,r)=>(E(),b("div",h({ref_key:"rootRef",ref:n,class:C.value},f.value),[l.$slots.lead?(E(),b("div",Le,[v(l.$slots,"lead")])):O("",!0),I(de,h({variant:"ghost",size:"sm",expanded:a.value,"aria-controls":p(o),onClick:m},p(c)),{"icon-after":z(()=>[I(De,{name:"chevron-down",size:"sm"})]),default:z(()=>[A("span",Fe,M(u.triggerLabel),1)]),_:1},16,["expanded","aria-controls"]),A("div",{id:p(o),class:Be(["collapse",{"is-open":a.value}]),"data-demo-slot":"default",style:ve(g.value),hidden:!a.value||void 0},[v(l.$slots,"default")],14,he)],16))}}),Se={class:"collapse_header"},Ie={class:"collapse_label"},ze={key:0,class:"collapse_extra"},$e=["id","aria-labelledby","hidden"],Oe={class:"collapse_content"},Me={key:0},i={__name:"CollapsePanel",props:{ripple:Ae,label:{type:String,required:!0},content:String,open:Boolean,disabled:Boolean,extraCode:String},setup(u){const e=u,{rippleAttrs:c}=be(e),s=Ge(),n=we("collapseGroup",null),o=$().replace(/:/g,""),a=$().replace(/:/g,""),C=S(e.open),g=P(()=>["collapse_panel",{"is-open":C.value,"is-disabled":e.disabled}]);function f(){e.disabled||!n||n.togglePanel(o,C)}return xe(()=>{n&&n.registerPanel({id:o,label:e.label,content:e.content,open:e.open,disabled:e.disabled,hasExtra:!!s.extra,extraCode:e.extraCode,isOpen:C})}),ye(()=>{n==null||n.unregisterPanel(o)}),(m,l)=>(E(),b("div",{class:Be(g.value)},[A("div",Se,[I(de,h({id:p(o),variant:"text",class:"collapse_trigger",expanded:C.value,"aria-controls":p(a),disabled:u.disabled,onClick:f},p(c)),{"icon-after":z(()=>[I(De,{name:"chevron-down",class:"collapse_icon"})]),default:z(()=>[A("span",Ie,M(u.label),1),m.$slots.extra?(E(),b("span",ze,[v(m.$slots,"extra")])):O("",!0)]),_:3},16,["id","expanded","aria-controls","disabled"])]),A("div",{id:p(a),class:"collapse_body",role:"region","aria-labelledby":p(o),hidden:!C.value||void 0},[A("div",Oe,[v(m.$slots,"default",{},()=>[u.content?(E(),b("p",Me,M(u.content),1)):O("",!0)])])],8,$e)],2))}},Re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Te=[{name:"variant",type:"'bordered' | 'ghost' | 'card'",default:"bordered",description:"패널 그룹 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"accordion",type:"boolean",default:"false",description:"한 번에 하나의 패널만 열기 (아코디언 모드)"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (collapse_demo-narrow)"}],je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],He=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 패널 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},Pe],Ve=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qe=[{name:"trigger-label",type:"string",default:"—",description:"외부 트리거 버튼 텍스트"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한"},{name:"boxed",type:"boolean",default:"true",description:"접힘 영역에 테두리·배경 스타일 적용"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},Pe],H=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ne=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],Je=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"default",description:"접히는 본문 영역"}],Ke=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ue=[{name:"collapse",description:"독립 접힘 영역 (외부 트리거 대상)"},{name:"collapse_group",description:"패널 그룹 컨테이너"},{name:"collapse_panel · collapse_trigger · collapse_body",description:"패널 그룹 내부 파트"},{name:"collapse_label · collapse_extra · collapse_icon",description:"트리거 파트"},{name:"collapse_content",description:"패널 본문 래퍼"},{name:"collapse_bordered",description:"외곽 테두리 스킨 (기본)"},{name:"collapse_ghost",description:"배경 강조 고스트 스킨"},{name:"collapse_card",description:"패널별 카드 분리 스킨"},{name:"collapse_sm · collapse_lg",description:"크기 변형"},{name:"data-collapse",description:"HTML 패널 그룹 JS 초기화"},{name:"data-collapse-trigger",description:"HTML 외부 트리거 JS 초기화"},{name:"data-collapse-accordion",description:"HTML 단일 패널만 열기"},{name:"is-open · is-disabled",description:"상태 클래스"}],Qe=[{title:"API · CollapseExternal Props",tables:[{columns:Ve,rows:qe,codeColumn:"name"}]},{title:"API · CollapseExternal Slots",tables:[{columns:H,rows:Je,codeColumn:"name"}]},{title:"API · CollapseGroup Props",tables:[{columns:Re,rows:Te,codeColumn:"name"}]},{title:"API · CollapsePanel Props",tables:[{columns:je,rows:He,codeColumn:"name"}]},{title:"API · CollapsePanel Slots",tables:[{columns:H,rows:Ne,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ke,rows:Ue,codeColumn:"name"}]}],on={title:"Components/기타/CollapseGroup",id:"components-collapse-group",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","ghost","card"],type:{name:"enum",summary:"'bordered' | 'ghost' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},accordion:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:Qe}},G={args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:u=>({components:{CollapseGroup:t,CollapsePanel:i},setup(){return{args:u}},template:`<CollapseGroup v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </CollapseGroup>`})},x={name:"외부 트리거",parameters:{demoPreview:{stack:!1},docs:{description:{story:"CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."},source:{code:`<script setup>
import CollapseExternal from '@uxkm/ui/components/CollapseExternal.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseExternal trigger-label="주문 상세 보기" narrow>
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
    </CollapseExternal>`})},y={name:"패널 그룹",parameters:{demoPreview:{stack:!1},docs:{description:{story:"collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."},source:{code:`<script setup>
import CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <CollapseGroup narrow>
    <CollapsePanel
    label="배송 정보"
    open
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
  </CollapseGroup>
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseGroup narrow>
      <CollapsePanel
        label="배송 정보"
        open
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
    </CollapseGroup>`})},w={name:"아코디언 모드",parameters:{demoPreview:{stack:!1},docs:{description:{story:"accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."},source:{code:`<script setup>
import CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <CollapseGroup narrow accordion>
    <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
    <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </CollapseGroup>
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseGroup narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </CollapseGroup>`})},k={name:"스킨",parameters:{demoPreview:{stack:!0},docs:{description:{story:"collapse_ghost · collapse_card로 외형을 조절합니다."},source:{code:`<script setup>
import CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <CollapseGroup variant="ghost" narrow>
    <CollapsePanel
    label="Ghost"
    open
    content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
    />
  </CollapseGroup>
  <CollapseGroup variant="card" narrow>
    <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
    <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
  </CollapseGroup>
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseGroup variant="ghost" narrow>
      <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
      />
    </CollapseGroup>

    <CollapseGroup variant="card" narrow>
      <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
      <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
    </CollapseGroup>`})},_={name:"보조 텍스트",parameters:{demoPreview:{stack:!1},docs:{description:{story:"extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."},source:{code:`<script setup>
import CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <CollapseGroup narrow>
    <CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
      <template #extra>3건</template>
    </CollapsePanel>
    <CollapsePanel
    label="처리 완료"
    content="최근 일주일간 완료된 요청 12건입니다."
    extra-code="지난 7일"
    >
    <template #extra>지난 7일</template>
  </CollapsePanel>
  </CollapseGroup>
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseGroup narrow>
      <CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
        <template #extra>3건</template>
      </CollapsePanel>
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extra-code="지난 7일"
      >
        <template #extra>지난 7일</template>
      </CollapsePanel>
    </CollapseGroup>`})},L={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`<script setup>
import CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <CollapseGroup narrow>
    <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
    <CollapsePanel
    label="팀 전용 (권한 없음)"
    disabled
    content="팀 멤버만 접근할 수 있는 내부 문서입니다."
    />
  </CollapseGroup>
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseGroup narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </CollapseGroup>`})},F={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`<script setup>
import CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <CollapseGroup size="sm" narrow>
    <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
  </CollapseGroup>
  <CollapseGroup size="lg" narrow>
    <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
  </CollapseGroup>
</template>`,language:"vue"}}},render:()=>({components:{CollapseGroup:t,CollapseExternal:D,CollapsePanel:i,List:B,ListItem:d},template:`<CollapseGroup size="sm" narrow>
      <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
    </CollapseGroup>

    <CollapseGroup size="lg" narrow>
      <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
    </CollapseGroup>`})};var V,q,N;G.parameters={...G.parameters,docs:{...(V=G.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: args => ({
    components: {
      CollapseGroup,
      CollapsePanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<CollapseGroup v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </CollapseGroup>\`
  })
}`,...(N=(q=G.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var J,K,U;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "외부 트리거",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseExternal from '@uxkm/ui/components/CollapseExternal.vue';\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseExternal trigger-label=\\"주문 상세 보기\\" narrow>\\n    <template #lead>\\n      <p style=\\"margin: 0 0 var(--space-md)\\">\\n        주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.\\n      </p>\\n    </template>\\n    <List\\n    variant=\\"definition\\"\\n    layout=\\"inline\\"\\n    block\\n    size=\\"compact\\"\\n    inline-label-width=\\"auto\\"\\n    inline-gap=\\"1rem\\"\\n    >\\n    <ListItem title=\\"주문번호\\" description=\\"ORD-2024-0815\\" />\\n    <ListItem title=\\"결제금액\\" description=\\"₩42,000\\" />\\n    <ListItem title=\\"배송지\\" description=\\"서울특별시 강남구 테헤란로 123\\" />\\n  </List>\\n  </CollapseExternal>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseExternal trigger-label="주문 상세 보기" narrow>
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
    </CollapseExternal>\`
  })
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Q,W,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "패널 그룹",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseGroup narrow>\\n    <CollapsePanel\\n    label=\\"배송 정보\\"\\n    open\\n    content=\\"평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.\\"\\n    />\\n    <CollapsePanel\\n    label=\\"결제 수단\\"\\n    content=\\"신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다.\\"\\n    />\\n    <CollapsePanel\\n    label=\\"교환·반품 안내\\"\\n    content=\\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.\\"\\n    />\\n  </CollapseGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseGroup narrow>
      <CollapsePanel
        label="배송 정보"
        open
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
    </CollapseGroup>\`
  })
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "아코디언 모드",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseGroup narrow accordion>\\n    <CollapsePanel label=\\"알림 설정\\" open content=\\"이메일·푸시·SMS 알림 수신 여부를 설정합니다.\\" />\\n    <CollapsePanel label=\\"개인정보\\" content=\\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\\" />\\n    <CollapsePanel label=\\"보안\\" content=\\"비밀번호 변경과 2단계 인증을 설정합니다.\\" />\\n  </CollapseGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseGroup narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </CollapseGroup>\`
  })
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ue,le;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "스킨",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "collapse_ghost · collapse_card로 외형을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseGroup variant=\\"ghost\\" narrow>\\n    <CollapsePanel\\n    label=\\"Ghost\\"\\n    open\\n    content=\\"배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다.\\"\\n    />\\n  </CollapseGroup>\\n  <CollapseGroup variant=\\"card\\" narrow>\\n    <CollapsePanel label=\\"Card\\" open content=\\"패널마다 카드 형태로 분리됩니다.\\" />\\n    <CollapsePanel label=\\"두 번째 패널\\" content=\\"카드 스킨의 두 번째 패널입니다.\\" />\\n  </CollapseGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseGroup variant="ghost" narrow>
      <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
      />
    </CollapseGroup>

    <CollapseGroup variant="card" narrow>
      <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
      <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
    </CollapseGroup>\`
  })
}`,...(le=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var oe,ae,Ce;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "보조 텍스트",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseGroup narrow>\\n    <CollapsePanel label=\\"진행 중\\" open content=\\"현재 처리 중인 요청 3건입니다.\\" extra-code=\\"3건\\">\\n      <template #extra>3건</template>\\n    </CollapsePanel>\\n    <CollapsePanel\\n    label=\\"처리 완료\\"\\n    content=\\"최근 일주일간 완료된 요청 12건입니다.\\"\\n    extra-code=\\"지난 7일\\"\\n    >\\n    <template #extra>지난 7일</template>\\n  </CollapsePanel>\\n  </CollapseGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseGroup narrow>
      <CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extra-code="3건">
        <template #extra>3건</template>
      </CollapsePanel>
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extra-code="지난 7일"
      >
        <template #extra>지난 7일</template>
      </CollapsePanel>
    </CollapseGroup>\`
  })
}`,...(Ce=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:Ce.source}}};var te,se,re;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseGroup narrow>\\n    <CollapsePanel label=\\"공개 문서\\" open content=\\"누구나 열람할 수 있는 가이드 문서입니다.\\" />\\n    <CollapsePanel\\n    label=\\"팀 전용 (권한 없음)\\"\\n    disabled\\n    content=\\"팀 멤버만 접근할 수 있는 내부 문서입니다.\\"\\n    />\\n  </CollapseGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseGroup narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </CollapseGroup>\`
  })
}`,...(re=(se=L.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var pe,ie,ce;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "size prop으로 트리거와 본문 패딩을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport CollapseGroup from '@uxkm/ui/components/CollapseGroup.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <CollapseGroup size=\\"sm\\" narrow>\\n    <CollapsePanel label=\\"Small\\" open content=\\"작은 콜랩스 — 좁은 패딩.\\" />\\n  </CollapseGroup>\\n  <CollapseGroup size=\\"lg\\" narrow>\\n    <CollapsePanel label=\\"Large\\" open content=\\"큰 콜랩스 — 넓은 패딩과 큰 글자.\\" />\\n  </CollapseGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      CollapseGroup,
      CollapseExternal,
      CollapsePanel,
      List,
      ListItem
    },
    template: \`<CollapseGroup size="sm" narrow>
      <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
    </CollapseGroup>

    <CollapseGroup size="lg" narrow>
      <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
    </CollapseGroup>\`
  })
}`,...(ce=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const an=["Playground","Standalone","Basic","Accordion","Skin","Extra","Disabled","Size"];export{w as Accordion,y as Basic,L as Disabled,_ as Extra,G as Playground,F as Size,k as Skin,x as Standalone,an as __namedExportsOrder,on as default};
