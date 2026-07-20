import{a as ce,aD as fe,c as D,r as P,p as F,g as b,o as A,i as S,az as ge,aw as Pe,k as ie,l as de,a5 as I,aE as ve,f as R,h as z,w as L,d as B,t as $,_ as me,s as r,q as Be,ak as Ee,n as De,u as xe,a4 as we,af as ye,ax as ke,Z as _e,$ as he}from"./iframe-CAswI7Qe.js";import{w as d,s as Fe}from"./story-renders-DjeoaiCa.js";import{r as be}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const p=Object.assign({inheritAttrs:!1},{__name:"Collapse",props:{variant:{type:String,default:"bordered",validator:l=>["bordered","ghost","card"].includes(l)},size:{type:String,default:"md",validator:l=>["sm","md","lg"].includes(l)},accordion:Boolean,narrow:Boolean},setup(l){const e=l,c=ce(),C=S(null),n=new Map,u=ge([]),o=b(()=>["collapse_group",`collapse_${e.variant}`,e.size==="sm"?"collapse_sm":null,e.size==="lg"?"collapse_lg":null,e.narrow?"collapse_demo-narrow":null,c.class]),s=b(()=>{const{class:a,...t}=c;return t});function f(a){n.set(a.id,a),u.value=[...n.values()]}function g(a){n.delete(a),u.value=[...n.values()]}function i(a,t){const O=n.get(a);if(!O||O.disabled)return;const M=!t.value;if(e.accordion&&M)for(const[Ae,T]of n)Ae!==a&&!T.disabled&&(T.isOpen.value=!1);t.value=M}return Pe("collapse",{registerPanel:f,unregisterPanel:g,togglePanel:i}),fe(e,u,C,c),(a,t)=>(A(),D("div",F({ref_key:"rootRef",ref:C,class:o.value},s.value),[P(a.$slots,"default")],16))}}),Se={key:0,"data-demo-slot":"lead"},ze={class:"btn_label"},Le=["id","hidden"],Ie=Object.assign({inheritAttrs:!1},{__name:"CollapseExternal",props:{ripple:ie,triggerLabel:{type:String,required:!0},narrow:Boolean,boxed:{type:Boolean,default:!0},open:Boolean},setup(l){const e=l,{rippleAttrs:c}=de(e),C=ce(),n=S(null),u=I().replace(/:/g,""),o=S(e.open),s=b(()=>[e.narrow?"collapse_demo-narrow":null,C.class]),f=b(()=>e.boxed?{marginTop:"var(--space-sm)",padding:"var(--space-lg)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",background:"var(--color-surface-raised)"}:void 0),g=b(()=>{const{class:a,...t}=C;return t});function i(){o.value=!o.value}return ve(e,n,C,o),(a,t)=>(A(),D("div",F({ref_key:"rootRef",ref:n,class:s.value},g.value),[a.$slots.lead?(A(),D("div",Se,[P(a.$slots,"lead")])):R("",!0),z(Be,F({variant:"ghost",size:"sm",expanded:o.value,"aria-controls":r(u),onClick:i},r(c)),{"icon-after":L(()=>[z(me,{name:"chevron-down",size:"sm"})]),default:L(()=>[B("span",ze,$(l.triggerLabel),1)]),_:1},16,["expanded","aria-controls"]),B("div",{id:r(u),class:De(["collapse",{"is-open":o.value}]),"data-demo-slot":"default",style:Ee(f.value),hidden:!o.value||void 0},[P(a.$slots,"default")],14,Le)],16))}}),Re={class:"collapse_header"},$e={class:"collapse_label"},Oe={key:0,class:"collapse_extra"},Me=["id","aria-labelledby","hidden"],Te={class:"collapse_content"},Ge={key:0},m={__name:"CollapsePanel",props:{ripple:ie,label:{type:String,required:!0},content:String,open:Boolean,disabled:Boolean,extraCode:String},setup(l){const e=l,{rippleAttrs:c}=de(e),C=xe(),n=ke("collapse",null),u=I().replace(/:/g,""),o=I().replace(/:/g,""),s=S(e.open),f=b(()=>["collapse_panel",{"is-open":s.value,"is-disabled":e.disabled}]);function g(){e.disabled||!n||n.togglePanel(u,s)}return we(()=>{n&&n.registerPanel({id:u,label:e.label,content:e.content,open:e.open,disabled:e.disabled,hasExtra:!!C.extra,extraCode:e.extraCode,isOpen:s})}),ye(()=>{n==null||n.unregisterPanel(u)}),(i,a)=>(A(),D("div",{class:De(f.value)},[B("div",Re,[z(Be,F({id:r(u),variant:"text",class:"collapse_trigger",expanded:s.value,"aria-controls":r(o),disabled:l.disabled,onClick:g},r(c)),{"icon-after":L(()=>[z(me,{name:"chevron-down",class:"collapse_icon"})]),default:L(()=>[B("span",$e,$(l.label),1),i.$slots.extra?(A(),D("span",Oe,[P(i.$slots,"extra")])):R("",!0)]),_:3},16,["id","expanded","aria-controls","disabled"])]),B("div",{id:r(o),class:"collapse_body",role:"region","aria-labelledby":r(u),hidden:!s.value||void 0},[B("div",Te,[P(i.$slots,"default",{},()=>[l.content?(A(),D("p",Ge,$(l.content),1)):R("",!0)])])],8,Me)],2))}},He=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ve=[{name:"variant",type:"'bordered' | 'ghost' | 'card'",default:"bordered",description:"패널 그룹 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"accordion",type:"boolean",default:"false",description:"한 번에 하나의 패널만 열기 (아코디언 모드)"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (collapse_demo-narrow)"}],je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qe=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 패널 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},be],Ne=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Je=[{name:"trigger-label",type:"string",default:"—",description:"외부 트리거 버튼 텍스트"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한"},{name:"boxed",type:"boolean",default:"true",description:"접힘 영역에 테두리·배경 스타일 적용"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},be],G=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ue=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],Ze=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"default",description:"접히는 본문 영역"}],Ke=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Qe=[{name:"collapse",description:"독립 접힘 영역 (외부 트리거 대상)"},{name:"collapse_group",description:"패널 그룹 컨테이너"},{name:"collapse_panel · collapse_trigger · collapse_body",description:"패널 그룹 내부 파트"},{name:"collapse_label · collapse_extra · collapse_icon",description:"트리거 파트"},{name:"collapse_content",description:"패널 본문 래퍼"},{name:"collapse_bordered",description:"외곽 테두리 스킨 (기본)"},{name:"collapse_ghost",description:"배경 강조 고스트 스킨"},{name:"collapse_card",description:"패널별 카드 분리 스킨"},{name:"collapse_sm · collapse_lg",description:"크기 변형"},{name:"data-collapse",description:"HTML 패널 그룹 JS 초기화"},{name:"data-collapse-trigger",description:"HTML 외부 트리거 JS 초기화"},{name:"data-collapse-accordion",description:"HTML 단일 패널만 열기"},{name:"is-open · is-disabled",description:"상태 클래스"}],We=[{title:"API · CollapseExternal Props",tables:[{columns:Ne,rows:Je,codeColumn:"name"}]},{title:"API · CollapseExternal Slots",tables:[{columns:G,rows:Ze,codeColumn:"name"}]},{title:"API · Collapse Props",tables:[{columns:He,rows:Ve,codeColumn:"name"}]},{title:"API · CollapsePanel Props",tables:[{columns:je,rows:qe,codeColumn:"name"}]},{title:"API · CollapsePanel Slots",tables:[{columns:G,rows:Ue,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ke,rows:Qe,codeColumn:"name"}]}],an={title:"Components/기타/Collapse",id:"components-collapse",component:p,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","ghost","card"],type:{name:"enum",summary:"'bordered' | 'ghost' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},accordion:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:We}},v={parameters:{controls:{disable:!1}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:(l,e)=>({components:{Collapse:p,CollapsePanel:m},setup(){return{args:Fe(e)}},template:`<Collapse v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>`})},E={name:"외부 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md"},render:d(()=>({components:{CollapseExternal:Ie,List:he,ListItem:_e},template:`        <CollapseExternal trigger-label="주문 상세 보기" narrow>
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
        </CollapseExternal>`}))},x={name:"패널 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
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
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:d(()=>({components:{Collapse:p,CollapsePanel:m},template:`<Collapse narrow>
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
      </Collapse>`}))},w={name:"아코디언 모드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow accordion>
    <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
    <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:d(()=>({components:{Collapse:p,CollapsePanel:m},template:`<Collapse narrow accordion>
        <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
        <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Collapse>`}))},y={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"collapse_ghost · collapse_card로 외형을 조절합니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse variant="ghost" narrow>
    <CollapsePanel
    label="Ghost"
    open
    content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
    />
  </Collapse>
  <Collapse variant="card" narrow>
    <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
    <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:d(()=>({components:{Collapse:p,CollapsePanel:m},template:`<Collapse variant="ghost" narrow>
        <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>`}))},k={name:"보조 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
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
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:d(()=>({components:{Collapse:p,CollapsePanel:m},template:`        <Collapse narrow>
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
        </Collapse>`}))},_={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow>
    <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
    <CollapsePanel
    label="팀 전용 (권한 없음)"
    disabled
    content="팀 멤버만 접근할 수 있는 내부 문서입니다."
    />
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:d(()=>({components:{Collapse:p,CollapsePanel:m},template:`<Collapse narrow>
        <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Collapse>`}))},h={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse size="sm" narrow>
    <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
  </Collapse>
  <Collapse size="lg" narrow>
    <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:d(()=>({components:{Collapse:p,CollapsePanel:m},template:`<Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>`}))};var H,V,j;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: (_args, context) => ({
    components: {
      Collapse,
      CollapsePanel
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Collapse v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>\`
  })
}`,...(j=(V=v.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,N,J;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "외부 트리거",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    variant: "bordered",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      CollapseExternal,
      List,
      ListItem
    },
    template: \`        <CollapseExternal trigger-label="주문 상세 보기" narrow>
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
  }))
}`,...(J=(N=E.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var U,Z,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "패널 그룹",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse narrow>\\n    <CollapsePanel\\n    label=\\"배송 정보\\"\\n    open\\n    content=\\"평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.\\"\\n    />\\n    <CollapsePanel\\n    label=\\"결제 수단\\"\\n    content=\\"신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다.\\"\\n    />\\n    <CollapsePanel\\n    label=\\"교환·반품 안내\\"\\n    content=\\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.\\"\\n    />\\n  </Collapse>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel
    },
    template: \`<Collapse narrow>
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
      </Collapse>\`
  }))
}`,...(K=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,W,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "아코디언 모드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse narrow accordion>\\n    <CollapsePanel label=\\"알림 설정\\" open content=\\"이메일·푸시·SMS 알림 수신 여부를 설정합니다.\\" />\\n    <CollapsePanel label=\\"개인정보\\" content=\\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\\" />\\n    <CollapsePanel label=\\"보안\\" content=\\"비밀번호 변경과 2단계 인증을 설정합니다.\\" />\\n  </Collapse>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel
    },
    template: \`<Collapse narrow accordion>
        <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
        <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Collapse>\`
  }))
}`,...(X=(W=w.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,ne;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "스킨",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "collapse_ghost · collapse_card로 외형을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse variant=\\"ghost\\" narrow>\\n    <CollapsePanel\\n    label=\\"Ghost\\"\\n    open\\n    content=\\"배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다.\\"\\n    />\\n  </Collapse>\\n  <Collapse variant=\\"card\\" narrow>\\n    <CollapsePanel label=\\"Card\\" open content=\\"패널마다 카드 형태로 분리됩니다.\\" />\\n    <CollapsePanel label=\\"두 번째 패널\\" content=\\"카드 스킨의 두 번째 패널입니다.\\" />\\n  </Collapse>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel
    },
    template: \`<Collapse variant="ghost" narrow>
        <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>\`
  }))
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,le,ue;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "보조 텍스트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse narrow>\\n    <CollapsePanel label=\\"진행 중\\" open content=\\"현재 처리 중인 요청 3건입니다.\\" extra-code=\\"3건\\">\\n      <template #extra>3건</template>\\n    </CollapsePanel>\\n    <CollapsePanel\\n    label=\\"처리 완료\\"\\n    content=\\"최근 일주일간 완료된 요청 12건입니다.\\"\\n    extra-code=\\"지난 7일\\"\\n    >\\n    <template #extra>지난 7일</template>\\n  </CollapsePanel>\\n  </Collapse>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel
    },
    template: \`        <Collapse narrow>
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
        </Collapse>\`
  }))
}`,...(ue=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var oe,se,Ce;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse narrow>\\n    <CollapsePanel label=\\"공개 문서\\" open content=\\"누구나 열람할 수 있는 가이드 문서입니다.\\" />\\n    <CollapsePanel\\n    label=\\"팀 전용 (권한 없음)\\"\\n    disabled\\n    content=\\"팀 멤버만 접근할 수 있는 내부 문서입니다.\\"\\n    />\\n  </Collapse>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel
    },
    template: \`<Collapse narrow>
        <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Collapse>\`
  }))
}`,...(Ce=(se=_.parameters)==null?void 0:se.docs)==null?void 0:Ce.source}}};var te,re,pe;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
        story: "size prop으로 트리거와 본문 패딩을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse size=\\"sm\\" narrow>\\n    <CollapsePanel label=\\"Small\\" open content=\\"작은 콜랩스 — 좁은 패딩.\\" />\\n  </Collapse>\\n  <Collapse size=\\"lg\\" narrow>\\n    <CollapsePanel label=\\"Large\\" open content=\\"큰 콜랩스 — 넓은 패딩과 큰 글자.\\" />\\n  </Collapse>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel
    },
    template: \`<Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>\`
  }))
}`,...(pe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:pe.source}}};const ln=["Playground","Standalone","Basic","Accordion","Skin","Extra","Disabled","Size"];export{w as Accordion,x as Basic,_ as Disabled,k as Extra,v as Playground,h as Size,y as Skin,E as Standalone,ln as __namedExportsOrder,an as default};
