import{b as mn,c as x,r as h,m as dn,f as S,o as w,a as sn,K as Bn,v as An,u as pn,y as $,C as Dn,D as bn,k as p,h as T,j as L,e as B,n as gn,x as In,t as M,q as O}from"./vue.esm-bundler-BaZlnz8B.js";import{s as fn}from"./useDemoCode-B9b0dRAo.js";import{_ as En}from"./Button-C3SXv-sJ.js";import{_ as vn}from"./Icon-D97OEunV.js";import{r as _n,u as xn}from"./useRipple-oORGvIsP.js";import{b as wn}from"./ripple-api-C5ZjLJl-.js";const a=Object.assign({inheritAttrs:!1},{__name:"Accordion",props:{variant:{type:String,default:"bordered",validator:c=>["bordered","flush","card"].includes(c)},size:{type:String,default:"md",validator:c=>["sm","md","lg"].includes(c)},multiple:Boolean,narrow:Boolean},setup(c){const e=c,s=mn(),l=sn(null),u=new Map,r=Bn([]),A=S(()=>["accordion",`accordion_${e.variant}`,e.size==="sm"?"accordion_sm":null,e.size==="lg"?"accordion_lg":null,e.narrow?"accordion_demo-narrow":null,s.class]),d=S(()=>{const{class:n,...o}=s;return o});function y(n){u.set(n.id,n),r.value=[...u.values()]}function k(n){u.delete(n),r.value=[...u.values()]}function F(){return r.value.filter(n=>!n.disabled).map(n=>n.id)}function t(n){var o,m;(m=(o=l.value)==null?void 0:o.querySelector(`#${CSS.escape(n)}`))==null||m.focus()}function C(n,o){const m=u.get(n);if(!m||m.disabled)return;const P=!o.value;if(!e.multiple&&P)for(const[ln,z]of u)ln!==n&&!z.disabled&&(z.isOpen.value=!1);o.value=P}return An("accordion",{registerItem:y,unregisterItem:k,toggleItem:C,getTriggers:F,focusTrigger:t}),fn(e,r,l,s),(n,o)=>(w(),x("div",dn({ref_key:"rootRef",ref:l,class:A.value},d.value),[h(n.$slots,"default")],16))}}),yn={class:"accordion_heading"},kn={class:"accordion_label"},Fn={key:0,class:"accordion_extra"},hn=["id","aria-labelledby","hidden"],Sn={class:"accordion_content"},Pn={key:0},i={__name:"AccordionItem",props:{ripple:_n,label:{type:String,required:!0},content:String,open:Boolean,disabled:Boolean,extraCode:String},setup(c){const e=c,{rippleAttrs:s}=xn(e),l=pn(),u=In("accordion",null),r=$().replace(/:/g,""),A=$().replace(/:/g,""),d=sn(e.open),y=S(()=>["accordion_item",{"is-open":d.value,"is-disabled":e.disabled}]);function k(){e.disabled||!u||u.toggleItem(r,d)}function F(t){if(!u)return;const C=u.getTriggers(),n=C.indexOf(r);if(n===-1)return;let o=null;t.key==="ArrowDown"?o=(n+1)%C.length:t.key==="ArrowUp"?o=(n-1+C.length)%C.length:t.key==="Home"?o=0:t.key==="End"&&(o=C.length-1),o!==null&&(t.preventDefault(),u.focusTrigger(C[o]))}return Dn(()=>{u&&u.registerItem({id:r,label:e.label,content:e.content,open:e.open,disabled:e.disabled,hasExtra:!!l.extra,extraCode:e.extraCode,isOpen:d})}),bn(()=>{u==null||u.unregisterItem(r)}),(t,C)=>(w(),x("div",{class:gn(y.value)},[p("h3",yn,[T(En,dn({id:B(r),variant:"text",class:"accordion_trigger",expanded:d.value,"aria-controls":B(A),disabled:c.disabled,onClick:k,onKeydown:F},B(s)),{"icon-after":L(()=>[T(vn,{name:"chevron-down",class:"accordion_icon"})]),default:L(()=>[p("span",kn,M(c.label),1),t.$slots.extra?(w(),x("span",Fn,[h(t.$slots,"extra")])):O("",!0)]),_:3},16,["id","expanded","aria-controls","disabled"])]),p("div",{id:B(A),class:"accordion_panel",role:"region","aria-labelledby":B(r),hidden:!d.value||void 0},[p("div",Sn,[h(t.$slots,"default",{},()=>[c.content?(w(),x("p",Pn,M(c.content),1)):O("",!0)])])],8,hn)],2))}},zn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],$n=[{name:"variant",type:"'bordered' | 'flush' | 'card'",default:"bordered",description:"아코디언 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"multiple",type:"boolean",default:"false",description:"여러 패널 동시 열기 허용"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (accordion_demo-narrow)"}],Tn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ln=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 항목 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},wn],Mn=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],On=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"}],Hn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Vn=[{name:"accordion",description:"루트 구조 클래스"},{name:"accordion_bordered",description:"외곽 테두리 스킨 (기본)"},{name:"accordion_flush",description:"구분선만 있는 플러시 스킨"},{name:"accordion_card",description:"항목별 카드 분리 스킨"},{name:"accordion_sm · accordion_lg",description:"크기 변형"},{name:"accordion_item · accordion_trigger · accordion_panel",description:"내부 파트"},{name:"accordion_label · accordion_extra · accordion_icon",description:"트리거 파트"},{name:"accordion_content",description:"패널 본문 래퍼"},{name:"data-accordion",description:"HTML 마크업 JS 초기화 대상"},{name:"data-accordion-multiple",description:"HTML 마크업 다중 열기 허용"},{name:"is-open · is-disabled",description:"상태 클래스"}],jn=[{title:"API · Accordion Props",tables:[{columns:zn,rows:$n,codeColumn:"name"}]},{title:"API · AccordionItem Props",tables:[{columns:Tn,rows:Ln,codeColumn:"name"}]},{title:"API · AccordionItem Slots",tables:[{columns:Mn,rows:On,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Hn,rows:Vn,codeColumn:"name"}]}],Gn={title:"Components/기타/Accordion",id:"components-accordion",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","flush","card"],type:{name:"enum",summary:"'bordered' | 'flush' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:jn}},D={args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:c=>({components:{Accordion:a,AccordionItem:i},setup(){return{args:c}},template:`<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>`})},b={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"accordion_bordered가 기본 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow>
    <AccordionItem
    label="배송은 얼마나 걸리나요?"
    open
    content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
    />
    <AccordionItem
    label="교환·반품은 어떻게 하나요?"
    content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
    />
    <AccordionItem
    label="해외 배송이 가능한가요?"
    content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
    />
  </Accordion>
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        open
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>`})},g={name:"다중 열기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow multiple>
    <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>`})},I={name:"플러시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="flush" narrow>
    <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
    <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
    <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
  </Accordion>
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>`})},f={name:"카드",parameters:{demoPreview:{stack:!1},docs:{description:{story:"accordion_card로 각 항목을 독립 카드로 분리합니다. 대시보드·위젯 그룹에 사용합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="card" narrow multiple>
    <AccordionItem label="프로젝트 개요" open content="목표, 일정, 이해관계자 정보를 요약합니다." />
    <AccordionItem label="최근 활동" content="커밋, 댓글, 파일 변경 이력을 표시합니다." />
  </Accordion>
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion variant="card" narrow multiple>
      <AccordionItem label="프로젝트 개요" open content="목표, 일정, 이해관계자 정보를 요약합니다." />
      <AccordionItem label="최근 활동" content="커밋, 댓글, 파일 변경 이력을 표시합니다." />
    </Accordion>`})},E={name:"보조 정보",parameters:{demoPreview:{stack:!1},docs:{description:{story:"extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow>
    <AccordionItem
    label="미해결 문의"
    open
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
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
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
    </Accordion>`})},v={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow>
    <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
    <AccordionItem
    label="팀 전용 (권한 없음)"
    disabled
    content="팀 멤버만 접근할 수 있는 내부 문서입니다."
    />
  </Accordion>
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>`})},_={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion size="sm" narrow>
    <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
  </Accordion>
  <Accordion size="lg" narrow>
    <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
  </Accordion>
</template>`,language:"vue"}}},render:()=>({components:{Accordion:a,AccordionItem:i},template:`<Accordion size="sm" narrow>
      <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
    </Accordion>

    <Accordion size="lg" narrow>
      <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
    </Accordion>`})};var H,V,j;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: args => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>\`
  })
}`,...(j=(V=D.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,K,N;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "accordion_bordered가 기본 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion narrow>\\n    <AccordionItem\\n    label=\\"배송은 얼마나 걸리나요?\\"\\n    open\\n    content=\\"평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.\\"\\n    />\\n    <AccordionItem\\n    label=\\"교환·반품은 어떻게 하나요?\\"\\n    content=\\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.\\"\\n    />\\n    <AccordionItem\\n    label=\\"해외 배송이 가능한가요?\\"\\n    content=\\"현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.\\"\\n    />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        open
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>\`
  })
}`,...(N=(K=b.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var R,U,J;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "다중 열기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion narrow multiple>\\n    <AccordionItem label=\\"알림\\" open content=\\"이메일·푸시 알림 수신 여부를 설정합니다.\\" />\\n    <AccordionItem label=\\"개인정보\\" open content=\\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\\" />\\n    <AccordionItem label=\\"보안\\" content=\\"비밀번호 변경과 2단계 인증을 설정합니다.\\" />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>\`
  })
}`,...(J=(U=g.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var G,Q,W;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "플러시",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion variant=\\"flush\\" narrow>\\n    <AccordionItem label=\\"일반\\" open content=\\"언어, 시간대, 테마 등 기본 환경 설정입니다.\\" />\\n    <AccordionItem label=\\"접근성\\" content=\\"고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.\\" />\\n    <AccordionItem label=\\"고급\\" content=\\"개발자 도구와 실험 기능을 켜거나 끕니다.\\" />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>\`
  })
}`,...(W=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "카드",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "accordion_card로 각 항목을 독립 카드로 분리합니다. 대시보드·위젯 그룹에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion variant=\\"card\\" narrow multiple>\\n    <AccordionItem label=\\"프로젝트 개요\\" open content=\\"목표, 일정, 이해관계자 정보를 요약합니다.\\" />\\n    <AccordionItem label=\\"최근 활동\\" content=\\"커밋, 댓글, 파일 변경 이력을 표시합니다.\\" />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion variant="card" narrow multiple>
      <AccordionItem label="프로젝트 개요" open content="목표, 일정, 이해관계자 정보를 요약합니다." />
      <AccordionItem label="최근 활동" content="커밋, 댓글, 파일 변경 이력을 표시합니다." />
    </Accordion>\`
  })
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,un,en;E.parameters={...E.parameters,docs:{...(nn=E.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  name: "보조 정보",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion narrow>\\n    <AccordionItem\\n    label=\\"미해결 문의\\"\\n    open\\n    content=\\"답변이 필요한 고객 문의 3건이 있습니다.\\"\\n    extra-code='<span class=\\"badge badge_count color_danger badge_sm\\">3</span>'\\n    >\\n    <template #extra>\\n      <span class=\\"badge badge_count color_danger badge_sm\\">3</span>\\n    </template>\\n  </AccordionItem>\\n  <AccordionItem\\n  label=\\"처리 완료\\"\\n  content=\\"최근 일주일간 완료된 문의 12건입니다.\\"\\n  extra-code=\\"지난 7일\\"\\n  >\\n  <template #extra>지난 7일</template>\\n  </AccordionItem>\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
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
    </Accordion>\`
  })
}`,...(en=(un=E.parameters)==null?void 0:un.docs)==null?void 0:en.source}}};var on,cn,rn;v.parameters={...v.parameters,docs:{...(on=v.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion narrow>\\n    <AccordionItem label=\\"공개 문서\\" open content=\\"누구나 열람할 수 있는 가이드 문서입니다.\\" />\\n    <AccordionItem\\n    label=\\"팀 전용 (권한 없음)\\"\\n    disabled\\n    content=\\"팀 멤버만 접근할 수 있는 내부 문서입니다.\\"\\n    />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>\`
  })
}`,...(rn=(cn=v.parameters)==null?void 0:cn.docs)==null?void 0:rn.source}}};var tn,Cn,an;_.parameters={..._.parameters,docs:{...(tn=_.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion size=\\"sm\\" narrow>\\n    <AccordionItem label=\\"Small\\" open content=\\"작은 아코디언 — 좁은 패딩.\\" />\\n  </Accordion>\\n  <Accordion size=\\"lg\\" narrow>\\n    <AccordionItem label=\\"Large\\" open content=\\"큰 아코디언 — 넓은 패딩과 큰 글자.\\" />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion size="sm" narrow>
      <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
    </Accordion>

    <Accordion size="lg" narrow>
      <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
    </Accordion>\`
  })
}`,...(an=(Cn=_.parameters)==null?void 0:Cn.docs)==null?void 0:an.source}}};const Qn=["Playground","Basic","Multiple","Flush","Card","Extra","Disabled","Size"];export{b as Basic,f as Card,v as Disabled,E as Extra,I as Flush,g as Multiple,D as Playground,_ as Size,Qn as __namedExportsOrder,Gn as default};
