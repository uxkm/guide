import{a as Bn,ay as pn,c as _,r as z,p as dn,g as S,o as y,i as ln,az as An,aw as Dn,k as bn,l as gn,u as fn,a5 as T,a4 as In,af as vn,d as D,h as $,w as L,s as p,q as En,n as wn,ax as xn,t as M,f as O,_ as _n}from"./iframe-CAswI7Qe.js";import{w as d,s as yn}from"./story-renders-DjeoaiCa.js";import{r as kn}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const C=Object.assign({inheritAttrs:!1},{__name:"Accordion",props:{variant:{type:String,default:"bordered",validator:r=>["bordered","flush","card"].includes(r)},size:{type:String,default:"md",validator:r=>["sm","md","lg"].includes(r)},multiple:Boolean,narrow:Boolean},setup(r){const e=r,l=Bn(),m=ln(null),o=new Map,c=An([]),A=S(()=>["accordion",`accordion_${e.variant}`,e.size==="sm"?"accordion_sm":null,e.size==="lg"?"accordion_lg":null,e.narrow?"accordion_demo-narrow":null,l.class]),s=S(()=>{const{class:n,...u}=l;return u});function k(n){o.set(n.id,n),c.value=[...o.values()]}function F(n){o.delete(n),c.value=[...o.values()]}function h(){return c.value.filter(n=>!n.disabled).map(n=>n.id)}function t(n){var u,B;(B=(u=m.value)==null?void 0:u.querySelector(`#${CSS.escape(n)}`))==null||B.focus()}function a(n,u){const B=o.get(n);if(!B||B.disabled)return;const P=!u.value;if(!e.multiple&&P)for(const[mn,R]of o)mn!==n&&!R.disabled&&(R.isOpen.value=!1);u.value=P}return Dn("accordion",{registerItem:k,unregisterItem:F,toggleItem:a,getTriggers:h,focusTrigger:t}),pn(e,c,m,l),(n,u)=>(y(),_("div",dn({ref_key:"rootRef",ref:m,class:A.value},s.value),[z(n.$slots,"default")],16))}}),Fn={class:"accordion_heading",role:"heading","aria-level":"3"},hn={class:"accordion_label"},zn={key:0,class:"accordion_extra"},Sn=["id","aria-labelledby","hidden"],Pn={class:"accordion_content"},Rn={key:0},i={__name:"AccordionItem",props:{ripple:bn,label:{type:String,required:!0},content:String,open:Boolean,disabled:Boolean,extraCode:String},setup(r){const e=r,{rippleAttrs:l}=gn(e),m=fn(),o=xn("accordion",null),c=T().replace(/:/g,""),A=T().replace(/:/g,""),s=ln(e.open),k=S(()=>["accordion_item",{"is-open":s.value,"is-disabled":e.disabled}]);function F(){e.disabled||!o||o.toggleItem(c,s)}function h(t){if(!o)return;const a=o.getTriggers(),n=a.indexOf(c);if(n===-1)return;let u=null;t.key==="ArrowDown"?u=(n+1)%a.length:t.key==="ArrowUp"?u=(n-1+a.length)%a.length:t.key==="Home"?u=0:t.key==="End"&&(u=a.length-1),u!==null&&(t.preventDefault(),o.focusTrigger(a[u]))}return In(()=>{o&&o.registerItem({id:c,label:e.label,content:e.content,open:e.open,disabled:e.disabled,hasExtra:!!m.extra,extraCode:e.extraCode,isOpen:s})}),vn(()=>{o==null||o.unregisterItem(c)}),(t,a)=>(y(),_("div",{class:wn(k.value)},[D("div",Fn,[$(En,dn({id:p(c),variant:"text",class:"accordion_trigger",expanded:s.value,"aria-controls":p(A),disabled:r.disabled,onClick:F,onKeydown:h},p(l)),{"icon-after":L(()=>[$(_n,{name:"chevron-down",class:"accordion_icon"})]),default:L(()=>[D("span",hn,M(r.label),1),t.$slots.extra?(y(),_("span",zn,[z(t.$slots,"extra")])):O("",!0)]),_:3},16,["id","expanded","aria-controls","disabled"])]),D("div",{id:p(A),class:"accordion_panel",role:"region","aria-labelledby":p(c),hidden:!s.value||void 0},[D("div",Pn,[z(t.$slots,"default",{},()=>[r.content?(y(),_("p",Rn,M(r.content),1)):O("",!0)])])],8,Sn)],2))}},Tn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],$n=[{name:"variant",type:"'bordered' | 'flush' | 'card'",default:"bordered",description:"아코디언 스킨 — bordered(붙임) · flush · card(항목 간격, FAQ)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"multiple",type:"boolean",default:"false",description:"여러 패널 동시 열기 허용"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (accordion_demo-narrow)"}],Ln=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Mn=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 항목 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},kn],On=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Hn=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"}],Qn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Un=[{name:"accordion",description:"루트 구조 클래스"},{name:"accordion_bordered",description:"외곽 테두리로 항목을 한 덩어리로 붙인 스킨"},{name:"accordion_flush",description:"구분선만 있는 플러시 스킨"},{name:"accordion_card",description:"항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)"},{name:"accordion_sm · accordion_lg",description:"크기 변형"},{name:"accordion_item · accordion_trigger · accordion_panel",description:"내부 파트"},{name:"accordion_heading",description:'role="heading" aria-level="3" 헤딩 래퍼'},{name:"accordion_label · accordion_extra · accordion_icon",description:"트리거 파트"},{name:"accordion_content",description:"패널 본문 래퍼"},{name:"data-accordion",description:"HTML 마크업 JS 초기화 대상"},{name:"data-accordion-multiple",description:"HTML 마크업 다중 열기 허용"},{name:"is-open · is-disabled",description:"상태 클래스"}],Vn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qn=[{name:"--accordion-font-size",default:"var(--text-size-sm)",description:"기본(md) 본문 크기"},{name:"--accordion-trigger-font-weight · --accordion-trigger-gap",default:"600 · var(--space-sm)",description:"트리거 타이포·간격"},{name:"--accordion-trigger-padding-y · --accordion-trigger-padding-x",default:"0.875rem · var(--space-lg)",description:"트리거 패딩(md)"},{name:"--accordion-content-font-size",default:"var(--text-size-sm)",description:"콘텐츠 글자 크기"},{name:"--accordion-content-padding-y · --accordion-content-padding-x",default:"var(--space-lg) · var(--space-lg)",description:"콘텐츠 상하·좌우 패딩(동일)"},{name:"--accordion-icon-size",default:"1rem",description:"펼침 아이콘(md)"},{name:"--accordion-card-gap",default:"0",description:"카드형 아코디언 항목 간격"},{name:"--accordion-card-trigger-bg",default:"var(--color-surface-raised)",description:"카드형 트리거 배경"},{name:"--accordion-font-size-sm · --accordion-trigger-padding-y-sm · --accordion-trigger-padding-x-sm",default:"var(--text-size-xs) · 0.625rem · var(--space-md)",description:"sm 크기"},{name:"--accordion-icon-size-sm",default:"0.875rem",description:"sm 아이콘"},{name:"--accordion-font-size-lg · --accordion-trigger-padding-y-lg · --accordion-trigger-padding-x-lg",default:"var(--text-size-base) · 1rem · var(--space-xl)",description:"lg 크기"},{name:"--accordion-icon-size-lg",default:"1.125rem",description:"lg 아이콘"}],Nn=[{title:"API · Accordion Props",tables:[{columns:Tn,rows:$n,codeColumn:"name"}]},{title:"API · AccordionItem Props",tables:[{columns:Ln,rows:Mn,codeColumn:"name"}]},{title:"API · AccordionItem Slots",tables:[{columns:On,rows:Hn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Qn,rows:Un,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Vn,rows:qn,codeColumn:"name"}]}],Wn={title:"Components/기타/Accordion",id:"components-accordion",component:C,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","flush","card"],type:{name:"enum",summary:"'bordered' | 'flush' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Nn}},b={parameters:{controls:{disable:!1}},args:{variant:"card",size:"md",multiple:!1,narrow:!1},render:(r,e)=>({components:{Accordion:C,AccordionItem:i},setup(){return{args:yn(e)}},template:`<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>`})},g={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="card" narrow>
    <AccordionItem
    label="배송은 얼마나 걸리나요?"
    content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
    />
    <AccordionItem
    label="교환·반품은 어떻게 하나요?"
    open
    content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
    />
    <AccordionItem
    label="해외 배송이 가능한가요?"
    content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
    />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"card",size:"md"},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`<Accordion variant="card" narrow>
        <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
        />
        <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
        />
        <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
        />
      </Accordion>`}))},f={name:"다중 열기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow multiple>
    <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`<Accordion narrow multiple>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>`}))},I={name:"플러시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="flush" narrow>
    <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
    <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
    <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`<Accordion variant="flush" narrow>
        <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
        <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
        <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
      </Accordion>`}))},v={name:"보더",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="bordered" narrow>
    <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`<Accordion variant="bordered" narrow>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>`}))},E={name:"보조 정보",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`        <Accordion narrow>
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
        </Accordion>`}))},w={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`<Accordion narrow>
        <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Accordion>`}))},x={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:C,AccordionItem:i},template:`<Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>`}))};var H,Q,U;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    variant: "card",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: (_args, context) => ({
    components: {
      Accordion,
      AccordionItem
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>\`
  })
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,q,N;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        story: "FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion variant=\\"card\\" narrow>\\n    <AccordionItem\\n    label=\\"배송은 얼마나 걸리나요?\\"\\n    content=\\"평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.\\"\\n    />\\n    <AccordionItem\\n    label=\\"교환·반품은 어떻게 하나요?\\"\\n    open\\n    content=\\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.\\"\\n    />\\n    <AccordionItem\\n    label=\\"해외 배송이 가능한가요?\\"\\n    content=\\"현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.\\"\\n    />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "card",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion variant="card" narrow>
        <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
        />
        <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
        />
        <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
        />
      </Accordion>\`
  }))
}`,...(N=(q=g.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var j,K,J;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "다중 열기",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion narrow multiple>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>\`
  }))
}`,...(J=(K=f.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var G,W,X;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "플러시",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion variant="flush" narrow>
        <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
        <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
        <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
      </Accordion>\`
  }))
}`,...(X=(W=I.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,nn;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "보더",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion variant=\\"bordered\\" narrow>\\n    <AccordionItem label=\\"알림\\" open content=\\"이메일·푸시 알림 수신 여부를 설정합니다.\\" />\\n    <AccordionItem label=\\"개인정보\\" content=\\"프로필 공개 범위와 데이터 다운로드를 관리합니다.\\" />\\n    <AccordionItem label=\\"보안\\" content=\\"비밀번호 변경과 2단계 인증을 설정합니다.\\" />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion variant="bordered" narrow>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>\`
  }))
}`,...(nn=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var en,on,un;E.parameters={...E.parameters,docs:{...(en=E.parameters)==null?void 0:en.docs,source:{originalSource:`{
  name: "보조 정보",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`        <Accordion narrow>
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
  }))
}`,...(un=(on=E.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var rn,cn,tn;w.parameters={...w.parameters,docs:{...(rn=w.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion narrow>\\n    <AccordionItem label=\\"공개 문서\\" open content=\\"누구나 열람할 수 있는 가이드 문서입니다.\\" />\\n    <AccordionItem\\n    label=\\"팀 전용 (권한 없음)\\"\\n    disabled\\n    content=\\"팀 멤버만 접근할 수 있는 내부 문서입니다.\\"\\n    />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(tn=(cn=w.parameters)==null?void 0:cn.docs)==null?void 0:tn.source}}};var an,Cn,sn;x.parameters={...x.parameters,docs:{...(an=x.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion size=\\"sm\\" narrow>\\n    <AccordionItem label=\\"Small\\" open content=\\"작은 아코디언 — 좁은 패딩.\\" />\\n  </Accordion>\\n  <Accordion size=\\"lg\\" narrow>\\n    <AccordionItem label=\\"Large\\" open content=\\"큰 아코디언 — 넓은 패딩과 큰 글자.\\" />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    multiple: false,
    narrow: false
  },
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(sn=(Cn=x.parameters)==null?void 0:Cn.docs)==null?void 0:sn.source}}};const Xn=["Playground","Basic","Multiple","Flush","Bordered","Extra","Disabled","Size"];export{g as Basic,v as Bordered,w as Disabled,E as Extra,I as Flush,f as Multiple,b as Playground,x as Size,Xn as __namedExportsOrder,Wn as default};
