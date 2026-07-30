import{a as Ae,aD as ke,o as A,c as g,r as k,p as v,j as t,ay as _e,h as E,az as Fe,av as he,k as ge,l as ve,a3 as j,x as Ee,a4 as Pe,aE as Se,g as T,e as N,w as M,d as b,t as q,_ as xe,s as m,q as ye,u as ze,aw as Le,ae as Ie,n as Re,Z as $e,$ as Oe}from"./iframe-3tmFy2e1.js";import{w as B,s as Ne}from"./story-renders-ww3py-Dw.js";import{s as V}from"./slide-region-DbylTJ9B.js";import{r as we}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Me=["data-effect"],C=Object.assign({inheritAttrs:!1},{__name:"Collapse",props:{variant:{type:String,default:"bordered",validator:e=>["bordered","ghost","card"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},accordion:Boolean,narrow:Boolean,effect:{type:String,default:void 0,validator:e=>e==null||e===""||e==="slide"}},setup(e){const n=e,f=Ae(),c=E(null),a=new Map,s=Fe([]),d=_e(n,"effect"),l=t(()=>["collapse_group",`collapse_${n.variant}`,n.size==="sm"?"collapse_sm":null,n.size==="lg"?"collapse_lg":null,n.narrow?"collapse_demo-narrow":null,f.class]),p=t(()=>{const{class:o,...u}=f;return u});function D(o){a.set(o.id,o),s.value=[...a.values()]}function P(o){a.delete(o),s.value=[...a.values()]}function x(o,u){const y=a.get(o);if(!y||y.disabled)return;const i=!u.value;if(n.accordion&&i)for(const[_,G]of a)_!==o&&!G.disabled&&(G.isOpen.value=!1);u.value=i}return he("collapse",{registerPanel:D,unregisterPanel:P,togglePanel:x,effect:d}),ke(n,s,c,f),(o,u)=>(A(),g("div",v({ref_key:"rootRef",ref:c,class:l.value,"data-effect":d.value||void 0},p.value),[k(o.$slots,"default")],16,Me))}});C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"Collapse",description:"",tags:{},props:[{name:"variant",description:"패널 그룹 스킨. bordered · ghost · card",type:{name:"string"},defaultValue:{func:!1,value:"'bordered'"},values:["bordered","ghost","card"]},{name:"size",description:"트리거·본문 패딩 크기. sm · md · lg",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"accordion",description:"한 번에 하나의 패널만 열기 (아코디언 모드)",type:{name:"boolean"}},{name:"narrow",description:"데모용 최대 너비 제한 (collapse_demo-narrow)",type:{name:"boolean"}},{name:"effect",description:"펼침·접힘 효과. slide — 높이 슬라이드",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Collapse.vue"]});const Ve={key:0,"data-demo-slot":"lead"},je={class:"btn_label"},Te=["id","data-effect"],w=Object.assign({inheritAttrs:!1},{__name:"CollapseExternal",props:{ripple:ge,triggerLabel:{type:String,required:!0},narrow:Boolean,boxed:{type:Boolean,default:!0},open:Boolean,effect:{type:String,default:void 0,validator:e=>e==null||e===""||e==="slide"}},setup(e){const n=e,{rippleAttrs:f}=ve(n),c=Ae(),a=E(null),s=E(null),d=j().replace(/:/g,""),l=E(n.open),p=t(()=>n.effect==="slide"),D=t(()=>[n.narrow?"collapse_demo-narrow":null,c.class]),P=t(()=>n.boxed?{marginTop:"var(--space-sm)",padding:"var(--space-lg)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",background:"var(--color-surface-raised)"}:void 0),x=t(()=>{const{class:i,..._}=c;return _}),o=t(()=>p.value?{}:{hidden:!l.value||void 0}),u=t(()=>p.value?void 0:{"is-open":l.value});function y(){l.value=!l.value}return Ee(l,i=>{p.value&&V(s.value,i,!0)}),Pe(()=>{p.value&&V(s.value,l.value,!1)}),Se(n,a,c,l),(i,_)=>(A(),g("div",v({ref_key:"rootRef",ref:a,class:D.value},x.value),[i.$slots.lead?(A(),g("div",Ve,[k(i.$slots,"lead")])):T("",!0),N(ye,v({variant:"ghost",size:"sm",expanded:l.value,"aria-controls":m(d),onClick:y},m(f)),{"icon-after":M(()=>[N(xe,{name:"chevron-down",size:"sm"})]),default:M(()=>[b("span",je,q(e.triggerLabel),1)]),_:1},16,["expanded","aria-controls"]),b("div",v({id:m(d),ref_key:"panelRef",ref:s,class:["collapse",u.value],"data-demo-slot":"default","data-effect":e.effect||void 0,style:P.value},o.value),[k(i.$slots,"default")],16,Te)],16))}});w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"CollapseExternal",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"triggerLabel",description:"외부 트리거 버튼 텍스트",type:{name:"string"},required:!0},{name:"narrow",description:"데모용 최대 너비 제한",type:{name:"boolean"}},{name:"boxed",description:"접힘 영역에 테두리·배경 스타일 적용",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"open",description:"초기 열림 상태",type:{name:"boolean"}},{name:"effect",description:"펼침·접힘 효과. slide — 높이 슬라이드",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"lead"},{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/CollapseExternal.vue"]});const qe={class:"collapse_header"},Ge={class:"collapse_label"},He={key:0,class:"collapse_extra"},Ue=["id","aria-labelledby"],Je={class:"collapse_content"},Ze={key:0},r={__name:"CollapsePanel",props:{ripple:ge,label:{type:String,required:!0},content:String,open:Boolean,disabled:Boolean,extraCode:String},setup(e){const n=e,{rippleAttrs:f}=ve(n),c=ze(),a=Le("collapse",null),s=j().replace(/:/g,""),d=j().replace(/:/g,""),l=E(n.open),p=E(null),D=t(()=>{var u;return((u=a==null?void 0:a.effect)==null?void 0:u.value)==="slide"}),P=t(()=>["collapse_panel",{"is-open":l.value,"is-disabled":n.disabled}]),x=t(()=>D.value?{}:{hidden:!l.value||void 0});function o(){n.disabled||!a||a.togglePanel(s,l)}return Ee(l,u=>{D.value&&V(p.value,u,!0)}),Pe(()=>{a&&(a.registerPanel({id:s,label:n.label,content:n.content,open:n.open,disabled:n.disabled,hasExtra:!!c.extra,extraCode:n.extraCode,isOpen:l}),D.value&&V(p.value,l.value,!1))}),Ie(()=>{a==null||a.unregisterPanel(s)}),(u,y)=>(A(),g("div",{class:Re(P.value)},[b("div",qe,[N(ye,v({id:m(s),variant:"text",class:"collapse_trigger",expanded:l.value,"aria-controls":m(d),disabled:e.disabled,onClick:o},m(f)),{"icon-after":M(()=>[N(xe,{name:"chevron-down",class:"collapse_icon"})]),default:M(()=>[b("span",Ge,q(e.label),1),u.$slots.extra?(A(),g("span",He,[k(u.$slots,"extra")])):T("",!0)]),_:3},16,["id","expanded","aria-controls","disabled"])]),b("div",v({id:m(d),ref_key:"bodyRef",ref:p,class:"collapse_body",role:"region","aria-labelledby":m(s)},x.value),[b("div",Je,[k(u.$slots,"default",{},()=>[e.content?(A(),g("p",Ze,q(e.content),1)):T("",!0)])])],16,Ue)],2))}};r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"CollapsePanel",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"label",description:"트리거에 표시할 제목",type:{name:"string"},required:!0},{name:"content",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능",type:{name:"string"}},{name:"open",description:"초기 열림 상태",type:{name:"boolean"}},{name:"disabled",description:"비활성 패널 (is-disabled + trigger disabled)",type:{name:"boolean"}},{name:"extraCode",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)",type:{name:"string"}}],slots:[{name:"extra"},{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/CollapsePanel.vue"]});const Ke=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"variant",type:"'bordered' | 'ghost' | 'card'",default:"bordered",description:"패널 그룹 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"accordion",type:"boolean",default:"false",description:"한 번에 하나의 패널만 열기 (아코디언 모드)"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (collapse_demo-narrow)"},{name:"effect",type:"'slide'",default:"—",description:'펼침·접힘 효과 — slide면 data-effect="slide"로 높이 슬라이드'}],We=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xe=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 패널 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},we],Ye=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],en=[{name:"trigger-label",type:"string",default:"—",description:"외부 트리거 버튼 텍스트"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한"},{name:"boxed",type:"boolean",default:"true",description:"접힘 영역에 테두리·배경 스타일 적용"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"effect",type:"'slide'",default:"—",description:'펼침·접힘 효과 — slide면 data-effect="slide"로 높이 슬라이드'},we],H=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],nn=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],an=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"default",description:"접히는 본문 영역"}],ln=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],un=[{name:"collapse",description:"독립 접힘 영역 (외부 트리거 대상)"},{name:"collapse_group",description:"패널 그룹 컨테이너"},{name:"collapse_panel · collapse_trigger · collapse_body",description:"패널 그룹 내부 파트"},{name:"collapse_label · collapse_extra · collapse_icon",description:"트리거 파트"},{name:"collapse_content",description:"패널 본문 래퍼"},{name:"collapse_bordered",description:"외곽 테두리 스킨 (기본)"},{name:"collapse_ghost",description:"배경 강조 고스트 스킨"},{name:"collapse_card",description:"패널별 카드 분리 스킨"},{name:"collapse_sm · collapse_lg",description:"크기 변형"},{name:"data-collapse",description:"HTML 패널 그룹 JS 초기화"},{name:"data-collapse-trigger",description:"HTML 외부 트리거 JS 초기화"},{name:"data-collapse-accordion",description:"HTML 단일 패널만 열기"},{name:'data-effect="slide"',description:"펼침·접힘 높이 슬라이드 애니메이션"},{name:"is-open · is-disabled",description:"상태 클래스"}],on=[{title:"API · CollapseExternal Props",tables:[{columns:Ye,rows:en,codeColumn:"name"}]},{title:"API · CollapseExternal Slots",tables:[{columns:H,rows:an,codeColumn:"name"}]},{title:"API · Collapse Props",tables:[{columns:Ke,rows:Qe,codeColumn:"name"}]},{title:"API · CollapsePanel Props",tables:[{columns:We,rows:Xe,codeColumn:"name"}]},{title:"API · CollapsePanel Slots",tables:[{columns:H,rows:nn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ln,rows:un,codeColumn:"name"}]}],cn={title:"Components/기타/Collapse",id:"components-collapse",component:C,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","ghost","card"],type:{name:"enum",summary:"'bordered' | 'ghost' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},accordion:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},effect:{control:"select",options:["slide"],type:{name:"enum",summary:"'slide'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:on}},F={parameters:{controls:{disable:!1}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1,effect:void 0},render:(e,n)=>({components:{Collapse:C,CollapsePanel:r},setup(){return{args:Ne(n)}},template:`<Collapse v-bind="args">
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>`})},h={name:"외부 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md"},render:B(()=>({components:{CollapseExternal:w,List:Oe,ListItem:$e},template:`        <CollapseExternal trigger-label="주문 상세 보기" narrow>
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
        </CollapseExternal>`}))},S={name:"패널 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:B(()=>({components:{Collapse:C,CollapsePanel:r},template:`<Collapse narrow>
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
      </Collapse>`}))},z={name:"아코디언 모드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
<\/script>

<template>
  <Collapse narrow accordion>
    <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
    <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
    <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
  </Collapse>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:B(()=>({components:{Collapse:C,CollapsePanel:r},template:`<Collapse narrow accordion>
        <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
        <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
        <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
      </Collapse>`}))},L={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"collapse_ghost · collapse_card로 외형을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:B(()=>({components:{Collapse:C,CollapsePanel:r},template:`<Collapse variant="ghost" narrow>
        <CollapsePanel
        label="Ghost"
        open
        content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>`}))},I={name:"보조 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra 슬롯으로 트리거 오른쪽에 메타 정보를 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:B(()=>({components:{Collapse:C,CollapsePanel:r},template:`        <Collapse narrow>
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
        </Collapse>`}))},R={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:B(()=>({components:{Collapse:C,CollapsePanel:r},template:`<Collapse narrow>
        <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
        <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
        />
      </Collapse>`}))},$={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1},render:B(()=>({components:{Collapse:C,CollapsePanel:r},template:`<Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>`}))},O={name:"슬라이드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.'},source:{code:`<script setup>
import Collapse from '@uxkm/ui/components/Collapse.vue';
import CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';
import CollapseExternal from '@uxkm/ui/components/CollapseExternal.vue';
<\/script>

<template>
  <Collapse narrow effect="slide">
    <CollapsePanel
    label="배송 정보"
    open
    content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
    />
    <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
  </Collapse>
  <CollapseExternal trigger-label="상세 보기" narrow effect="slide" :boxed="false">
    <div style="margin-top: var(--space-sm); padding: var(--space-lg); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface-raised);">
      <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
    </div>
  </CollapseExternal>
</template>`,language:"vue"}}},args:{variant:"bordered",size:"md",accordion:!1,narrow:!1,effect:"slide"},render:B(()=>({components:{Collapse:C,CollapsePanel:r,CollapseExternal:w},template:`<div class="demo_preview-block">
        <h3 class="typo_overline">패널 그룹</h3>
        <Collapse narrow effect="slide">
        <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
        />
        <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
        </Collapse>
      </div>
      <div class="demo_preview-block">
        <h3 class="typo_overline">외부 트리거</h3>
        <CollapseExternal trigger-label="상세 보기" narrow effect="slide" :boxed="false">
        <div
        style="
        margin-top: var(--space-sm);
        padding: var(--space-lg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-surface-raised);
        "
        >
        <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
        </div>
        </CollapseExternal>
      </div>`}))};var U,J,Z;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false,
    effect: undefined
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
}`,...(Z=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var K,Q,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,ae,le;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ue,oe,se;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(se=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var Ce,te,re;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var pe,ie,ce;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,me,Be;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(Be=(me=$.parameters)==null?void 0:me.docs)==null?void 0:Be.source}}};var fe,De,be;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "슬라이드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.'
      },
      source: {
        code: "<script setup>\\nimport Collapse from '@uxkm/ui/components/Collapse.vue';\\nimport CollapsePanel from '@uxkm/ui/components/CollapsePanel.vue';\\nimport CollapseExternal from '@uxkm/ui/components/CollapseExternal.vue';\\n<\/script>\\n\\n<template>\\n  <Collapse narrow effect=\\"slide\\">\\n    <CollapsePanel\\n    label=\\"배송 정보\\"\\n    open\\n    content=\\"평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다.\\"\\n    />\\n    <CollapsePanel label=\\"결제 수단\\" content=\\"신용카드, 계좌이체, 간편결제를 지원합니다.\\" />\\n  </Collapse>\\n  <CollapseExternal trigger-label=\\"상세 보기\\" narrow effect=\\"slide\\" :boxed=\\"false\\">\\n    <div style=\\"margin-top: var(--space-sm); padding: var(--space-lg); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface-raised);\\">\\n      <p style=\\"margin: 0\\">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>\\n    </div>\\n  </CollapseExternal>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    variant: "bordered",
    size: "md",
    accordion: false,
    narrow: false,
    effect: "slide"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Collapse,
      CollapsePanel,
      CollapseExternal
    },
    template: \`<div class="demo_preview-block">
        <h3 class="typo_overline">패널 그룹</h3>
        <Collapse narrow effect="slide">
        <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
        />
        <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
        </Collapse>
      </div>
      <div class="demo_preview-block">
        <h3 class="typo_overline">외부 트리거</h3>
        <CollapseExternal trigger-label="상세 보기" narrow effect="slide" :boxed="false">
        <div
        style="
        margin-top: var(--space-sm);
        padding: var(--space-lg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-surface-raised);
        "
        >
        <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
        </div>
        </CollapseExternal>
      </div>\`
  }))
}`,...(be=(De=O.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};const dn=["Playground","Standalone","Basic","Accordion","Skin","Extra","Disabled","Size","Slide"];export{z as Accordion,S as Basic,R as Disabled,I as Extra,F as Playground,$ as Size,L as Skin,O as Slide,h as Standalone,dn as __namedExportsOrder,cn as default};
