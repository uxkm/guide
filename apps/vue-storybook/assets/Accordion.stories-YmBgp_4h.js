import{a as be,aA as ge,o as F,c as h,r as O,p as T,j as f,aB as Ie,h as $,aC as ve,ay as Ee,k as xe,l as we,u as ye,au as _e,a3 as L,x as ke,a4 as Fe,ae as he,d as b,e as M,w as V,t as U,g as j,_ as ze,s as D,q as Se,n as Pe}from"./iframe-BHuoLYUS.js";import{w as d,s as Re}from"./story-renders-C_n8_MI3.js";import{s as q}from"./slide-region-DbylTJ9B.js";import{r as Oe}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Te=["data-effect"],c=Object.assign({inheritAttrs:!1},{__name:"Accordion",props:{variant:{type:String,default:"bordered",validator:o=>["bordered","flush","card"].includes(o)},size:{type:String,default:"md",validator:o=>["sm","md","lg"].includes(o)},multiple:Boolean,narrow:Boolean,effect:{type:String,default:void 0,validator:o=>o==null||o===""||o==="slide"}},setup(o){const u=o,l=be(),m=$(null),n=new Map,a=ve([]),B=Ie(u,"effect"),C=f(()=>["accordion",`accordion_${u.variant}`,u.size==="sm"?"accordion_sm":null,u.size==="lg"?"accordion_lg":null,u.narrow?"accordion_demo-narrow":null,l.class]),p=f(()=>{const{class:e,...r}=l;return r});function A(e){n.set(e.id,e),a.value=[...n.values()]}function z(e){n.delete(e),a.value=[...n.values()]}function S(){return a.value.filter(e=>!e.disabled).map(e=>e.id)}function P(e){var r,i;(i=(r=m.value)==null?void 0:r.querySelector(`#${CSS.escape(e)}`))==null||i.focus()}function R(e,r){const i=n.get(e);if(!i||i.disabled)return;const s=!r.value;if(!u.multiple&&s)for(const[fe,N]of n)fe!==e&&!N.disabled&&(N.isOpen.value=!1);r.value=s}return Ee("accordion",{registerItem:A,unregisterItem:z,toggleItem:R,getTriggers:S,focusTrigger:P,effect:B}),ge(u,a,m,l),(e,r)=>(F(),h("div",T({ref_key:"rootRef",ref:m,class:C.value,"data-effect":B.value||void 0},p.value),[O(e.$slots,"default")],16,Te))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"variant",description:"아코디언 스킨. bordered · flush · card",type:{name:"string"},defaultValue:{func:!1,value:"'bordered'"},values:["bordered","flush","card"]},{name:"size",description:"트리거·본문 패딩 크기. sm · md · lg",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"multiple",description:"여러 패널 동시 열기 허용",type:{name:"boolean"}},{name:"narrow",description:"데모용 최대 너비 제한 (accordion_demo-narrow)",type:{name:"boolean"}},{name:"effect",description:"펼침·접힘 효과. slide — 높이 슬라이드",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Accordion.vue"]});const $e={class:"accordion_heading",role:"heading","aria-level":"3"},Ne={class:"accordion_label"},Le={key:0,class:"accordion_extra"},Me=["id","aria-labelledby"],Ve={class:"accordion_content"},Ue={key:0},t={__name:"AccordionItem",props:{ripple:xe,label:{type:String,required:!0},content:String,open:Boolean,disabled:Boolean,extraCode:String},setup(o){const u=o,{rippleAttrs:l}=we(u),m=ye(),n=_e("accordion",null),a=L().replace(/:/g,""),B=L().replace(/:/g,""),C=$(u.open),p=$(null),A=f(()=>{var e;return((e=n==null?void 0:n.effect)==null?void 0:e.value)==="slide"}),z=f(()=>["accordion_item",{"is-open":C.value,"is-disabled":u.disabled}]),S=f(()=>A.value?{}:{hidden:!C.value||void 0});function P(){u.disabled||!n||n.toggleItem(a,C)}function R(e){if(!n)return;const r=n.getTriggers(),i=r.indexOf(a);if(i===-1)return;let s=null;e.key==="ArrowDown"?s=(i+1)%r.length:e.key==="ArrowUp"?s=(i-1+r.length)%r.length:e.key==="Home"?s=0:e.key==="End"&&(s=r.length-1),s!==null&&(e.preventDefault(),n.focusTrigger(r[s]))}return ke(C,e=>{A.value&&q(p.value,e,!0)}),Fe(()=>{n&&(n.registerItem({id:a,label:u.label,content:u.content,open:u.open,disabled:u.disabled,hasExtra:!!m.extra,extraCode:u.extraCode,isOpen:C}),A.value&&q(p.value,C.value,!1))}),he(()=>{n==null||n.unregisterItem(a)}),(e,r)=>(F(),h("div",{class:Pe(z.value)},[b("div",$e,[M(Se,T({id:D(a),variant:"text",class:"accordion_trigger",expanded:C.value,"aria-controls":D(B),disabled:o.disabled,onClick:P,onKeydown:R},D(l)),{"icon-after":V(()=>[M(ze,{name:"chevron-down",class:"accordion_icon"})]),default:V(()=>[b("span",Ne,U(o.label),1),e.$slots.extra?(F(),h("span",Le,[O(e.$slots,"extra")])):j("",!0)]),_:3},16,["id","expanded","aria-controls","disabled"])]),b("div",T({id:D(B),ref_key:"panelRef",ref:p,class:"accordion_panel",role:"region","aria-labelledby":D(a)},S.value),[b("div",Ve,[O(e.$slots,"default",{},()=>[o.content?(F(),h("p",Ue,U(o.content),1)):j("",!0)])])],16,Me)],2))}};t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"label",description:"트리거에 표시할 제목",type:{name:"string"},required:!0},{name:"content",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능",type:{name:"string"}},{name:"open",description:"초기 열림 상태",type:{name:"boolean"}},{name:"disabled",description:"비활성 항목 (is-disabled + trigger disabled)",type:{name:"boolean"}},{name:"extraCode",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)",type:{name:"string"}}],slots:[{name:"extra"},{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/AccordionItem.vue"]});const je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qe=[{name:"variant",type:"'bordered' | 'flush' | 'card'",default:"bordered",description:"아코디언 스킨 — bordered(붙임) · flush · card(항목 간격, FAQ)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"multiple",type:"boolean",default:"false",description:"여러 패널 동시 열기 허용"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (accordion_demo-narrow)"},{name:"effect",type:"'slide'",default:"—",description:'펼침·접힘 효과 — slide면 data-effect="slide"로 높이 슬라이드'}],He=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 항목 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},Oe],Ke=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Je=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"}],Ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],We=[{name:"accordion",description:"루트 구조 클래스"},{name:"accordion_bordered",description:"외곽 테두리로 항목을 한 덩어리로 붙인 스킨"},{name:"accordion_flush",description:"구분선만 있는 플러시 스킨"},{name:"accordion_card",description:"항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)"},{name:"accordion_sm · accordion_lg",description:"크기 변형"},{name:"accordion_item · accordion_trigger · accordion_panel",description:"내부 파트"},{name:"accordion_heading",description:'role="heading" aria-level="3" 헤딩 래퍼'},{name:"accordion_label · accordion_extra · accordion_icon",description:"트리거 파트"},{name:"accordion_content",description:"패널 본문 래퍼"},{name:"data-accordion",description:"HTML 마크업 JS 초기화 대상"},{name:"data-accordion-multiple",description:"HTML 마크업 다중 열기 허용"},{name:'data-effect="slide"',description:"펼침·접힘 높이 슬라이드 애니메이션"},{name:"is-open · is-disabled",description:"상태 클래스"}],Xe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ye=[{name:"--accordion-font-size",default:"var(--text-size-sm)",description:"기본(md) 본문 크기"},{name:"--accordion-trigger-font-weight · --accordion-trigger-gap",default:"600 · var(--space-sm)",description:"트리거 타이포·간격"},{name:"--accordion-trigger-padding-y · --accordion-trigger-padding-x",default:"0.875rem · var(--space-lg)",description:"트리거 패딩(md)"},{name:"--accordion-content-font-size",default:"var(--text-size-sm)",description:"콘텐츠 글자 크기"},{name:"--accordion-content-padding-y · --accordion-content-padding-x",default:"var(--space-lg) · var(--space-lg)",description:"콘텐츠 상하·좌우 패딩(동일)"},{name:"--accordion-icon-size",default:"1rem",description:"펼침 아이콘(md)"},{name:"--accordion-slide-duration · --accordion-slide-easing",default:"0.28s · ease",description:"슬라이드 전환"},{name:"--accordion-card-gap",default:"0",description:"카드형 아코디언 항목 간격"},{name:"--accordion-card-trigger-bg",default:"var(--color-surface-raised)",description:"카드형 트리거 배경"},{name:"--accordion-font-size-sm · --accordion-trigger-padding-y-sm · --accordion-trigger-padding-x-sm",default:"var(--text-size-xs) · 0.625rem · var(--space-md)",description:"sm 크기"},{name:"--accordion-icon-size-sm",default:"0.875rem",description:"sm 아이콘"},{name:"--accordion-font-size-lg · --accordion-trigger-padding-y-lg · --accordion-trigger-padding-x-lg",default:"var(--text-size-base) · 1rem · var(--space-xl)",description:"lg 크기"},{name:"--accordion-icon-size-lg",default:"1.125rem",description:"lg 아이콘"}],Ze=[{title:"API · Accordion Props",tables:[{columns:je,rows:qe,codeColumn:"name"}]},{title:"API · AccordionItem Props",tables:[{columns:He,rows:Qe,codeColumn:"name"}]},{title:"API · AccordionItem Slots",tables:[{columns:Ke,rows:Je,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ge,rows:We,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Xe,rows:Ye,codeColumn:"name"}]}],cn={title:"Components/기타/Accordion",id:"components-accordion",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","flush","card"],type:{name:"enum",summary:"'bordered' | 'flush' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},effect:{control:"select",options:["slide"],type:{name:"enum",summary:"'slide'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ze}},g={parameters:{controls:{disable:!1}},args:{variant:"card",size:"md",multiple:!1,narrow:!1,effect:void 0},render:(o,u)=>({components:{Accordion:c,AccordionItem:t},setup(){return{args:Re(u)}},template:`<Accordion v-bind="args">
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>`})},I={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"card",size:"md"},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion variant="card" narrow>
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
      </Accordion>`}))},v={name:"다중 열기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion narrow multiple>
    <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion narrow multiple>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>`}))},E={name:"플러시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="flush" narrow>
    <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
    <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
    <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion variant="flush" narrow>
        <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
        <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
        <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
      </Accordion>`}))},x={name:"보더",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다."},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="bordered" narrow>
    <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
    <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion variant="bordered" narrow>
        <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
        <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Accordion>`}))},w={name:"보조 정보",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra 슬롯으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`        <Accordion narrow>
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
        </Accordion>`}))},y={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion narrow>
        <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Accordion>`}))},_={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",multiple:!1,narrow:!1},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>`}))},k={name:"슬라이드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 닫힌 패널은 hidden으로 숨기고, 토글 시에만 높이를 애니메이션합니다.'},source:{code:`<script setup>
import Accordion from '@uxkm/ui/components/Accordion.vue';
import AccordionItem from '@uxkm/ui/components/AccordionItem.vue';
<\/script>

<template>
  <Accordion variant="card" narrow effect="slide">
    <AccordionItem
    label="배송 안내"
    open
    content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."
    />
    <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
    <AccordionItem
    label="고객센터"
    content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."
    />
  </Accordion>
</template>`,language:"vue"}}},args:{variant:"card",size:"md",multiple:!1,narrow:!1,effect:"slide"},render:d(()=>({components:{Accordion:c,AccordionItem:t},template:`<Accordion variant="card" narrow effect="slide">
        <AccordionItem
        label="배송 안내"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."
        />
        <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
        <AccordionItem
        label="고객센터"
        content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."
        />
      </Accordion>`}))};var H,Q,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    variant: "card",
    size: "md",
    multiple: false,
    narrow: false,
    effect: undefined
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
}`,...(K=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var J,G,W;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(W=(G=I.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ue;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ue=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var oe,re,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var te,ae,Ce;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(Ce=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:Ce.source}}};var ie,se,de;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=y.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var le,me,Be;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(Be=(me=_.parameters)==null?void 0:me.docs)==null?void 0:Be.source}}};var pe,Ae,De;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "슬라이드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 닫힌 패널은 hidden으로 숨기고, 토글 시에만 높이를 애니메이션합니다.'
      },
      source: {
        code: "<script setup>\\nimport Accordion from '@uxkm/ui/components/Accordion.vue';\\nimport AccordionItem from '@uxkm/ui/components/AccordionItem.vue';\\n<\/script>\\n\\n<template>\\n  <Accordion variant=\\"card\\" narrow effect=\\"slide\\">\\n    <AccordionItem\\n    label=\\"배송 안내\\"\\n    open\\n    content=\\"평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.\\"\\n    />\\n    <AccordionItem label=\\"교환·반품\\" content=\\"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.\\" />\\n    <AccordionItem\\n    label=\\"고객센터\\"\\n    content=\\"1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.\\"\\n    />\\n  </Accordion>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "card",
    size: "md",
    multiple: false,
    narrow: false,
    effect: "slide"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Accordion,
      AccordionItem
    },
    template: \`<Accordion variant="card" narrow effect="slide">
        <AccordionItem
        label="배송 안내"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."
        />
        <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
        <AccordionItem
        label="고객센터"
        content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."
        />
      </Accordion>\`
  }))
}`,...(De=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};const tn=["Playground","Basic","Multiple","Flush","Bordered","Extra","Disabled","Size","Slide"];export{I as Basic,x as Bordered,y as Disabled,w as Extra,E as Flush,v as Multiple,g as Playground,_ as Size,k as Slide,tn as __namedExportsOrder,cn as default};
