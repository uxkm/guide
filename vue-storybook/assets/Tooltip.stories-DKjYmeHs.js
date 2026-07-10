import{b as bt,y as wt,c as xt,k as w,r as E,e as z,l as yt,j as kt,q as Et,n as zt,m as St,f as u,o as S,h as Lt,g as Ft,t as It,a as Pt}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as o}from"./Button-C3SXv-sJ.js";import{_ as l}from"./Icon-D97OEunV.js";import{q as Ot}from"./useDemoCode-B9b0dRAo.js";import{a as qt,p as Jt,o as r,u as Nt,b as jt,c as Mt}from"./overlay-panel-align-BADFAcFV.js";import{_ as a}from"./Link-BBBlqIKe.js";import"./useRipple-oORGvIsP.js";const $t=["aria-describedby"],Vt=["id","hidden"],n=Object.assign({inheritAttrs:!1},{__name:"Tooltip",props:{content:String,placement:String,size:{type:String,default:"md",validator:i=>["sm","md","lg"].includes(i)},offset:{type:String,default:"md",validator:r.validator},offsetTop:r,offsetRight:r,offsetBottom:r,offsetLeft:r,open:Boolean,inverse:Boolean,noArrow:Boolean,arrowAnchor:{type:String,default:"content",validator:i=>["content","target","mixed"].includes(i)},panelAlign:{type:String,default:"center",validator:Jt.validator},arrowTargetAlign:qt,disabled:Boolean,trigger:{type:String,default:"hover",validator:i=>["hover","click"].includes(i)},interactive:{type:Boolean,default:!0},closable:{type:Boolean,default:void 0},closeLabel:{type:String,default:"닫기"}},setup(i){const Tt=new Set(["top","top-start","top-end","left","right","start","end"]),t=i,h=bt(),b=Pt(null),x=wt().replace(/:/g,"");Ot(t,b,h),Nt(b,t,"tooltip");const At=u(()=>{const e=["tooltip"];return t.size==="sm"&&e.push("tooltip_sm"),t.size==="lg"&&e.push("tooltip_lg"),e.push(...jt("tooltip",t)),e.push(...Mt("tooltip",t.panelAlign,"center")),t.inverse&&e.push("tooltip_inverse"),t.noArrow&&e.push("tooltip_no-arrow"),t.arrowAnchor==="target"&&e.push("tooltip_arrow-anchor-target"),t.arrowAnchor==="mixed"&&e.push("tooltip_arrow-anchor-mixed"),t.placement&&Tt.has(t.placement)&&e.push(`tooltip_placement-${t.placement}`),t.open&&e.push("is-open"),t.disabled&&e.push("is-disabled"),h.class&&e.push(h.class),e}),_t=u(()=>{const e={};return t.interactive&&(e["data-tooltip"]=""),t.trigger==="click"&&(e["data-tooltip-trigger"]="click"),(t.arrowAnchor==="mixed"||t.panelAlign!=="center")&&(e["data-panel-align"]=t.panelAlign),(t.arrowAnchor==="target"||t.arrowAnchor==="mixed")&&t.arrowTargetAlign!=="center"&&(e["data-arrow-target-align"]=t.arrowTargetAlign),e}),ht=u(()=>{if(!t.interactive)return!t.open||void 0}),y=u(()=>t.closable??t.trigger==="click");return(e,k)=>(S(),xt("span",St({ref_key:"rootRef",ref:b,class:At.value},_t.value),[w("span",{class:"tooltip_trigger","aria-describedby":z(x)},[E(e.$slots,"trigger")],8,$t),w("span",{id:z(x),class:zt(["tooltip_bubble",{"tooltip_bubble-closable":y.value}]),role:"tooltip",hidden:ht.value},[k[0]||(k[0]=w("span",{class:"tooltip_arrow","aria-hidden":"true"},null,-1)),y.value?(S(),yt(o,{key:0,variant:"ghost","icon-only":"",class:"tooltip_close tooltip_close-floating","data-tooltip-close":"","aria-label":i.closeLabel},{"icon-before":kt(()=>[Lt(l,{name:"close",size:"sm",class:"tooltip_close-icon"})]),_:1},8,["aria-label"])):Et("",!0),E(e.$slots,"default",{},()=>[Ft(It(i.content),1)])],10,Vt)],16))}}),Rt=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ht=[{name:"content",type:"string",default:"—",description:"말풍선 텍스트. default 슬롯으로 대체"},{name:"placement",type:"'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'",default:"—",description:"tooltip_placement-*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tooltip_sm · tooltip_lg"},{name:"offset",type:"'none' | 'sm' | 'md' | 'lg'",default:"md",description:"전 방향 동일 간격. tooltip_offset-* · --tooltip-offset"},{name:"offset-top · offset-right · offset-bottom · offset-left",type:"'none' | 'sm' | 'md' | 'lg'",default:"—",description:"방향별 간격. tooltip_offset-top-* 등 · --tooltip-offset-*"},{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"inverse",type:"boolean",default:"false",description:"어두운 배경 (tooltip_inverse)"},{name:"no-arrow",type:"boolean",default:"false",description:"화살표 숨김"},{name:"arrow-anchor",type:"'content' | 'target' | 'mixed'",default:"content",description:"화살표 기준. target=화살표만, mixed=말풍선·화살표 독립"},{name:"panel-align",type:"'start' | 'center' | 'end'",default:"center",description:"말풍선 교차축 정렬. tooltip_panel-align-* · data-panel-align"},{name:"arrow-target-align",type:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'",default:"center",description:"target·mixed 시 트리거 내 화살표 위치"},{name:"disabled",type:"boolean",default:"false",description:"트리거 비활성"},{name:"trigger",type:"'hover' | 'click'",default:"hover",description:'click 시 data-tooltip-trigger="click"'},{name:"interactive",type:"boolean",default:"true",description:"false면 data-tooltip 미부여"},{name:"closable",type:"boolean",default:"click 시 true",description:"말풍선 닫기 버튼. hover 트리거는 기본 false"},{name:"close-label",type:"string",default:"닫기",description:"닫기 버튼 aria-label"}],Gt=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Kt=[{name:"trigger",description:"트리거 요소"},{name:"default",description:"말풍선 텍스트 (content 대체)"}],Qt=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ut=[{name:"tooltip · tooltip_trigger · tooltip_bubble · tooltip_arrow · tooltip_close",description:"루트·트리거·말풍선"},{name:"tooltip_sm · tooltip_lg · tooltip_inverse · tooltip_no-arrow",description:"크기·스킨"},{name:"tooltip_panel-align-start · tooltip_panel-align-end",description:"말풍선 교차축 정렬"},{name:"tooltip_arrow-anchor-target · tooltip_arrow-anchor-mixed",description:"화살표·혼합 기준"},{name:"tooltip_offset-none · tooltip_offset-sm · tooltip_offset-lg",description:"전 방향 간격"},{name:"tooltip_offset-top-* · tooltip_offset-right-* · tooltip_offset-bottom-* · tooltip_offset-left-*",description:"방향별 간격"},{name:"tooltip_placement-*",description:"배치 변형"},{name:"data-tooltip · data-tooltip-trigger · data-tooltip-close · data-panel-align · data-arrow-target-align",description:"JS 연동"},{name:"is-open · is-disabled · hidden",description:"상태"},{name:'role="tooltip" · aria-describedby · aria-expanded',description:"접근성"}],Wt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xt=[{name:"--tooltip-max-width · --tooltip-max-width-sm · --tooltip-max-width-lg",default:"16rem · 12rem · 20rem",description:"말풍선 최대 너비"},{name:"--tooltip-padding-x · --tooltip-padding-y · --tooltip-font-size",default:"—",description:"패딩·글자"},{name:"--tooltip-offset · --tooltip-offset-sm · --tooltip-offset-md · --tooltip-offset-lg",default:"var(--space-xs) · …",description:"전 방향 간격 토큰"},{name:"--tooltip-offset-top · --tooltip-offset-right · --tooltip-offset-bottom · --tooltip-offset-left",default:"offset 상속",description:"방향별 간격 (배치에 따라 적용)"},{name:"--tooltip-arrow-size",default:"6px",description:"화살표 크기"},{name:"--tooltip-panel-radius · --tooltip-arrow-edge-inset",default:"6px · calc",description:"말풍선 라운드·화살표 가장자리 여백"},{name:"--tooltip-arrow-position",default:"—",description:"target 기준 시 트리거 중앙 위치(px)"},{name:"--tooltip-inverse-bg · --tooltip-inverse-text",default:"—",description:"inverse 스킨"}],Yt=[{title:"API · Props",tables:[{columns:Rt,rows:Ht,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Gt,rows:Kt,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Qt,rows:Ut,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Wt,rows:Xt,codeColumn:"name"}]}],ie={title:"Components/피드백/Tooltip",id:"components-tooltip",component:n,tags:["autodocs"],argTypes:{content:{control:"text",type:{name:"string",summary:"string"}},placement:{control:"select",options:["top","top-start","top-end","left","right","start","end"],type:{name:"enum",summary:"'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},offset:{control:"select",options:["none","sm","md","lg"],type:{name:"enum",summary:"'none' | 'sm' | 'md' | 'lg'"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inverse:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noArrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},arrowAnchor:{control:"select",options:["content","target","mixed"],type:{name:"enum",summary:"'content' | 'target' | 'mixed'"}},panelAlign:{control:"select",options:["start","center","end"],type:{name:"enum",summary:"'start' | 'center' | 'end'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},trigger:{control:"select",options:["hover","click"],type:{name:"enum",summary:"'hover' | 'click'"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:Yt}},p={args:{content:"값",placement:"bottom",size:"md",offset:"md",open:!0,inverse:!1,noArrow:!1,arrowAnchor:"content",panelAlign:"center",disabled:!1,trigger:"hover",interactive:!0,closable:!1,closeLabel:"닫기"},render:i=>({components:{Tooltip:n,Button:o},setup(){return{args:i}},template:`<Tooltip v-bind="args" content="툴팁 텍스트" open>
      <template #trigger><Button label="툴팁" variant="outline" /></template>
    </Tooltip>`})},s={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"Tooltip과 #trigger 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다. data-tooltip · aria-describedby로 JS·접근성을 연동합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip content="짧은 도움말 텍스트입니다.">
    <template #trigger>
      <Button class="tooltip_trigger" variant="outline" label="마우스 오버" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip content="짧은 도움말 텍스트입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="마우스 오버" />
      </template>
    </Tooltip>`})},m={name:"슬롯",parameters:{demoPreview:{stack:!1},docs:{description:{story:"content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다. tooltip_bubble 안에 직접 본문을 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip>
    <template #trigger>
      <Button class="tooltip_trigger" variant="outline" label="슬롯 예시" />
    </template>
    짧은 도움말 텍스트입니다.
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip>
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="슬롯 예시" />
      </template>
      짧은 도움말 텍스트입니다.
    </Tooltip>`})},c={name:"열린 상태",parameters:{demoPreview:{stack:!1},docs:{description:{story:"open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip open content="정적 데모용 열린 상태입니다.">
    <template #trigger>
      <Button class="tooltip_trigger" variant="filled" color="primary" label="열림" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip open content="정적 데모용 열린 상태입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="filled" color="primary" label="열림" />
      </template>
    </Tooltip>`})},g={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다. tooltip_sm · tooltip_lg 클래스와 대응됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip size="sm" open content="작은 말풍선">
    <template #trigger>
      <Button class="tooltip_trigger" variant="ghost" size="sm" label="Small" />
    </template>
  </Tooltip>
  <Tooltip open content="기본 크기 말풍선">
    <template #trigger>
      <Button class="tooltip_trigger" variant="ghost" label="Medium" />
    </template>
  </Tooltip>
  <Tooltip size="lg" open content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
    <template #trigger>
      <Button class="tooltip_trigger" variant="ghost" size="lg" label="Large" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip size="sm" open content="작은 말풍선">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="Small" />
      </template>
    </Tooltip>

    <Tooltip open content="기본 크기 말풍선">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="Medium" />
      </template>
    </Tooltip>

    <Tooltip size="lg" open content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="lg" label="Large" />
      </template>
    </Tooltip>`})},C={name:"간격",parameters:{demoPreview:{stack:!0},docs:{description:{story:"offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔말풍선 사이에 적용됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
  <div class="tooltip_row">
    <Tooltip offset="none" open content="간격 없음">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="none" />
      </template>
    </Tooltip>
    <Tooltip offset="sm" open content="좁은 간격">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="sm" />
      </template>
    </Tooltip>
    <Tooltip open content="기본 간격">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="md" />
      </template>
    </Tooltip>
    <Tooltip offset="lg" open content="넓은 간격">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="lg" />
      </template>
    </Tooltip>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
  <div class="tooltip_demo-placement" style="min-height: 12rem;">
    <div class="tooltip_demo-placement-cell-top">
      <Tooltip placement="top" offset-top="lg" open content="위쪽 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="위" />
        </template>
      </Tooltip>
    </div>
    <div class="tooltip_demo-placement-cell-left">
      <Tooltip placement="left" offset-left="lg" open content="왼쪽 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="왼쪽" />
        </template>
      </Tooltip>
    </div>
    <div class="tooltip_demo-placement-cell-center">
      <Tooltip offset-bottom="lg" open content="아래쪽 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="아래" />
        </template>
      </Tooltip>
    </div>
    <div class="tooltip_demo-placement-cell-right">
      <Tooltip placement="right" offset-right="lg" open content="오른쪽 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="오른쪽" />
        </template>
      </Tooltip>
    </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="tooltip_row">
      <Tooltip offset="none" open content="간격 없음">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="none" />
        </template>
      </Tooltip>

      <Tooltip offset="sm" open content="좁은 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="sm" />
        </template>
      </Tooltip>

      <Tooltip open content="기본 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="md" />
        </template>
      </Tooltip>

      <Tooltip offset="lg" open content="넓은 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="lg" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="tooltip_demo-placement" style="min-height: 12rem;">
      <div class="tooltip_demo-placement-cell-top">
        <Tooltip placement="top" offset-top="lg" open content="위쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="위" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-left">
        <Tooltip placement="left" offset-left="lg" open content="왼쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="왼쪽" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-center">
        <Tooltip offset-bottom="lg" open content="아래쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="아래" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-right">
        <Tooltip placement="right" offset-right="lg" open content="오른쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="오른쪽" />
          </template>
        </Tooltip>
      </div>
    </div>`})},B={name:"인라인",parameters:{demoPreview:{stack:!1},docs:{description:{story:"문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <p>
    결제 시
    <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
      <template #trigger>
        <Link class="tooltip_trigger" label="에스크로" />
      </template>
    </Tooltip>
    서비스를 이용할 수 있습니다.
  </p>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<p>
      결제 시
      <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
        <template #trigger>
          <Link class="tooltip_trigger" label="에스크로" />
        </template>
      </Tooltip>
      서비스를 이용할 수 있습니다.
    </p>`})},d={name:"트리거 유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <div class="tooltip_row">
    <Tooltip content="버튼 트리거 예시입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="filled" color="primary" label="Button" />
      </template>
    </Tooltip>
    <Tooltip content="링크 스타일 트리거입니다.">
      <template #trigger>
        <Link class="tooltip_trigger" label="Link 트리거" />
      </template>
    </Tooltip>
    <Tooltip content="아이콘 전용 트리거입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" icon-only aria-label="정보">
          <template #icon-before>
            <Icon name="info" />
          </template>
        </Button>
      </template>
    </Tooltip>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<div class="tooltip_row">
      <Tooltip content="버튼 트리거 예시입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="filled" color="primary" label="Button" />
        </template>
      </Tooltip>

      <Tooltip content="링크 스타일 트리거입니다.">
        <template #trigger>
          <Link class="tooltip_trigger" label="Link 트리거" />
        </template>
      </Tooltip>

      <Tooltip content="아이콘 전용 트리거입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" icon-only aria-label="정보">
            <template #icon-before>
              <Icon name="info" />
            </template>
          </Button>
        </template>
      </Tooltip>
    </div>`})},D={name:"클릭 트리거",parameters:{demoPreview:{stack:!1},docs:{description:{story:"trigger=&quot;click&quot;으로 클릭 시 말풍선을 토글합니다. data-tooltip-trigger=&quot;click&quot;과 동일하며, 접근성을 위해 tooltip_close 닫기 버튼이 기본 제공됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
    <template #trigger>
      <Button class="tooltip_trigger" variant="outline" label="클릭하여 보기" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="클릭하여 보기" />
      </template>
    </Tooltip>`})},v={name:"배치",parameters:{demoPreview:{stack:!0},docs:{description:{story:"placement prop(top · top-start · top-end · start · end · left · right)으로 말풍선 위치를 조정합니다. tooltip_placement-* 클래스와 대응되며, 기본은 트리거 아래·가운데 정렬입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <div class="tooltip_demo-placement">
    <div class="tooltip_demo-placement-cell-top">
      <Tooltip placement="top" content="트리거 위">
        <template #trigger>
          <Button class="tooltip_trigger" variant="outline" size="sm" label="위" />
        </template>
      </Tooltip>
    </div>
    <div class="tooltip_demo-placement-cell-left">
      <Tooltip placement="left" content="트리거 왼쪽">
        <template #trigger>
          <Button class="tooltip_trigger" variant="outline" size="sm" label="왼쪽" />
        </template>
      </Tooltip>
    </div>
    <div class="tooltip_demo-placement-cell-center">
      <Tooltip content="트리거 아래 · 가운데">
        <template #trigger>
          <Button class="tooltip_trigger" variant="outline" size="sm" label="아래" />
        </template>
      </Tooltip>
    </div>
    <div class="tooltip_demo-placement-cell-right">
      <Tooltip placement="right" content="트리거 오른쪽">
        <template #trigger>
          <Button class="tooltip_trigger" variant="outline" size="sm" label="오른쪽" />
        </template>
      </Tooltip>
    </div>
  </div>
  <div class="tooltip_row" style="width: 100%; justify-content: space-between;">
    <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="위 · 왼쪽" />
      </template>
    </Tooltip>
    <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="아래 · 왼쪽" />
      </template>
    </Tooltip>
    <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="아래 · 오른쪽" />
      </template>
    </Tooltip>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<div class="tooltip_demo-placement">
      <div class="tooltip_demo-placement-cell-top">
        <Tooltip placement="top" content="트리거 위">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="위" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-left">
        <Tooltip placement="left" content="트리거 왼쪽">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="왼쪽" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-center">
        <Tooltip content="트리거 아래 · 가운데">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="아래" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-right">
        <Tooltip placement="right" content="트리거 오른쪽">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="오른쪽" />
          </template>
        </Tooltip>
      </div>
    </div>

    <div class="tooltip_row" style="width: 100%; justify-content: space-between;">
      <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="위 · 왼쪽" />
        </template>
      </Tooltip>

      <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="아래 · 왼쪽" />
        </template>
      </Tooltip>

      <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="아래 · 오른쪽" />
        </template>
      </Tooltip>
    </div>`})},f={name:"역색",parameters:{demoPreview:{stack:!1},docs:{description:{story:"inverse prop으로 어두운 배경의 말풍선을 표시합니다. tooltip_inverse 클래스와 대응됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip inverse content="어두운 배경의 말풍선입니다.">
    <template #trigger>
      <Button class="tooltip_trigger" variant="ghost" label="역색 Tooltip" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip inverse content="어두운 배경의 말풍선입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="역색 Tooltip" />
      </template>
    </Tooltip>`})},T={name:"비활성 트리거",parameters:{demoPreview:{stack:!1},docs:{description:{story:"비활성 버튼은 tooltip_trigger span으로 감싸 pointer-events가 막힌 요소에도 설명을 제공합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
    <template #trigger>
      <span class="tooltip_trigger" tabindex="0">
        <Button variant="filled" color="primary" label="제출 불가" disabled />
      </span>
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
      <template #trigger>
        <span class="tooltip_trigger" tabindex="0">
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      </template>
    </Tooltip>`})},A={name:"화살표 기준",parameters:{demoPreview:{stack:!0},docs:{description:{story:"arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 말풍선·화살표를 독립 조합합니다. target은 말풍선 CSS·화살표 JS, mixed는 말풍선·화살표 모두 JS로 트리거 기준 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
  <div class="tooltip_row" style="align-items: flex-start;">
    <Tooltip open content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
  <div class="tooltip_row" style="align-items: flex-start;">
    <Tooltip open arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
  <div class="tooltip_row" style="align-items: center;">
    <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="top" content="트리거 위쪽을 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="트리거" />
      </template>
    </Tooltip>
    <Tooltip placement="left" open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="트리거" />
      </template>
    </Tooltip>
    <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="bottom" content="트리거 아래쪽을 가리킵니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="트리거" />
      </template>
    </Tooltip>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>
  <div class="tooltip_row" style="align-items: flex-start;">
    <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
  <div class="tooltip_row" style="align-items: flex-start;">
    <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="left" content="말풍선 왼쪽, 화살표 왼쪽.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="mixed" panel-align="start" content="말풍선 왼쪽, 화살표 가운데.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="right" content="말풍선 왼쪽, 화살표 오른쪽.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
  <div class="tooltip_row" style="align-items: flex-start;">
    <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" content="말풍선 오른쪽, 화살표 왼쪽.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="mixed" panel-align="end" content="말풍선 오른쪽, 화살표 가운데.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
    <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" content="말풍선 오른쪽, 화살표 오른쪽.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
      </template>
    </Tooltip>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="tooltip_row" style="align-items: center;">
      <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="top" content="트리거 위쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>

      <Tooltip placement="left" open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>

      <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="bottom" content="트리거 아래쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="left" content="말풍선 왼쪽, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="start" content="말풍선 왼쪽, 화살표 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="right" content="말풍선 왼쪽, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" content="말풍선 오른쪽, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="end" content="말풍선 오른쪽, 화살표 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" content="말풍선 오른쪽, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>`})},_={name:"화살표 없음",parameters:{demoPreview:{stack:!1},docs:{description:{story:"no-arrow prop으로 tooltip_arrow를 숨깁니다. tooltip_no-arrow 클래스와 대응됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
    <template #trigger>
      <Button class="tooltip_trigger" variant="ghost" label="화살표 없음" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},render:()=>({components:{Tooltip:n,Button:o,Icon:l,Link:a},template:`<Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="화살표 없음" />
      </template>
    </Tooltip>`})};var L,F,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    content: "값",
    placement: "bottom",
    size: "md",
    offset: "md",
    open: true,
    inverse: false,
    noArrow: false,
    arrowAnchor: "content",
    panelAlign: "center",
    disabled: false,
    trigger: "hover",
    interactive: true,
    closable: false,
    closeLabel: "닫기"
  },
  render: args => ({
    components: {
      Tooltip,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Tooltip v-bind="args" content="툴팁 텍스트" open>
      <template #trigger><Button label="툴팁" variant="outline" /></template>
    </Tooltip>\`
  })
}`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,O,q;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Tooltip과 #trigger 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다. data-tooltip · aria-describedby로 JS·접근성을 연동합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip content=\\"짧은 도움말 텍스트입니다.\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" label=\\"마우스 오버\\" />\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip content="짧은 도움말 텍스트입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="마우스 오버" />
      </template>
    </Tooltip>\`
  })
}`,...(q=(O=s.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,N,j;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "슬롯",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다. tooltip_bubble 안에 직접 본문을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip>\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" label=\\"슬롯 예시\\" />\\n    </template>\\n    짧은 도움말 텍스트입니다.\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip>
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="슬롯 예시" />
      </template>
      짧은 도움말 텍스트입니다.
    </Tooltip>\`
  })
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var M,$,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "열린 상태",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip open content=\\"정적 데모용 열린 상태입니다.\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"filled\\" color=\\"primary\\" label=\\"열림\\" />\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip open content="정적 데모용 열린 상태입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="filled" color="primary" label="열림" />
      </template>
    </Tooltip>\`
  })
}`,...(V=($=c.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var R,H,G;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다. tooltip_sm · tooltip_lg 클래스와 대응됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip size=\\"sm\\" open content=\\"작은 말풍선\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"Small\\" />\\n    </template>\\n  </Tooltip>\\n  <Tooltip open content=\\"기본 크기 말풍선\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"Medium\\" />\\n    </template>\\n  </Tooltip>\\n  <Tooltip size=\\"lg\\" open content=\\"큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"lg\\" label=\\"Large\\" />\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip size="sm" open content="작은 말풍선">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="sm" label="Small" />
      </template>
    </Tooltip>

    <Tooltip open content="기본 크기 말풍선">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="Medium" />
      </template>
    </Tooltip>

    <Tooltip size="lg" open content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" size="lg" label="Large" />
      </template>
    </Tooltip>\`
  })
}`,...(G=(H=g.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,Q,U;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "간격",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔말풍선 사이에 적용됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <p class=\\"form_field-hint\\" style=\\"margin-bottom: var(--space-md);\\">전 방향 동일</p>\\n  <div class=\\"tooltip_row\\">\\n    <Tooltip offset=\\"none\\" open content=\\"간격 없음\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"none\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip offset=\\"sm\\" open content=\\"좁은 간격\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"sm\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open content=\\"기본 간격\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"md\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip offset=\\"lg\\" open content=\\"넓은 간격\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"lg\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">방향별 (offset-* · placement)</p>\\n  <div class=\\"tooltip_demo-placement\\" style=\\"min-height: 12rem;\\">\\n    <div class=\\"tooltip_demo-placement-cell-top\\">\\n      <Tooltip placement=\\"top\\" offset-top=\\"lg\\" open content=\\"위쪽 간격\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"위\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n    <div class=\\"tooltip_demo-placement-cell-left\\">\\n      <Tooltip placement=\\"left\\" offset-left=\\"lg\\" open content=\\"왼쪽 간격\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"왼쪽\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n    <div class=\\"tooltip_demo-placement-cell-center\\">\\n      <Tooltip offset-bottom=\\"lg\\" open content=\\"아래쪽 간격\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"아래\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n    <div class=\\"tooltip_demo-placement-cell-right\\">\\n      <Tooltip placement=\\"right\\" offset-right=\\"lg\\" open content=\\"오른쪽 간격\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"오른쪽\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="tooltip_row">
      <Tooltip offset="none" open content="간격 없음">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="none" />
        </template>
      </Tooltip>

      <Tooltip offset="sm" open content="좁은 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="sm" />
        </template>
      </Tooltip>

      <Tooltip open content="기본 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="md" />
        </template>
      </Tooltip>

      <Tooltip offset="lg" open content="넓은 간격">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="lg" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="tooltip_demo-placement" style="min-height: 12rem;">
      <div class="tooltip_demo-placement-cell-top">
        <Tooltip placement="top" offset-top="lg" open content="위쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="위" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-left">
        <Tooltip placement="left" offset-left="lg" open content="왼쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="왼쪽" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-center">
        <Tooltip offset-bottom="lg" open content="아래쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="아래" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-right">
        <Tooltip placement="right" offset-right="lg" open content="오른쪽 간격">
          <template #trigger>
            <Button class="tooltip_trigger" variant="ghost" size="sm" label="오른쪽" />
          </template>
        </Tooltip>
      </div>
    </div>\`
  })
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "인라인",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    결제 시\\n    <Tooltip content=\\"구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.\\">\\n      <template #trigger>\\n        <Link class=\\"tooltip_trigger\\" label=\\"에스크로\\" />\\n      </template>\\n    </Tooltip>\\n    서비스를 이용할 수 있습니다.\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<p>
      결제 시
      <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
        <template #trigger>
          <Link class="tooltip_trigger" label="에스크로" />
        </template>
      </Tooltip>
      서비스를 이용할 수 있습니다.
    </p>\`
  })
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "트리거 유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"tooltip_row\\">\\n    <Tooltip content=\\"버튼 트리거 예시입니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"filled\\" color=\\"primary\\" label=\\"Button\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip content=\\"링크 스타일 트리거입니다.\\">\\n      <template #trigger>\\n        <Link class=\\"tooltip_trigger\\" label=\\"Link 트리거\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip content=\\"아이콘 전용 트리거입니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" icon-only aria-label=\\"정보\\">\\n          <template #icon-before>\\n            <Icon name=\\"info\\" />\\n          </template>\\n        </Button>\\n      </template>\\n    </Tooltip>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<div class="tooltip_row">
      <Tooltip content="버튼 트리거 예시입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="filled" color="primary" label="Button" />
        </template>
      </Tooltip>

      <Tooltip content="링크 스타일 트리거입니다.">
        <template #trigger>
          <Link class="tooltip_trigger" label="Link 트리거" />
        </template>
      </Tooltip>

      <Tooltip content="아이콘 전용 트리거입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" icon-only aria-label="정보">
            <template #icon-before>
              <Icon name="info" />
            </template>
          </Button>
        </template>
      </Tooltip>
    </div>\`
  })
}`,...(et=(tt=d.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var ot,nt,lt;D.parameters={...D.parameters,docs:{...(ot=D.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  name: "클릭 트리거",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "trigger=&quot;click&quot;으로 클릭 시 말풍선을 토글합니다. data-tooltip-trigger=&quot;click&quot;과 동일하며, 접근성을 위해 tooltip_close 닫기 버튼이 기본 제공됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip trigger=\\"click\\" content=\\"클릭으로 열고 닫는 Tooltip입니다.\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" label=\\"클릭하여 보기\\" />\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="outline" label="클릭하여 보기" />
      </template>
    </Tooltip>\`
  })
}`,...(lt=(nt=D.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var at,it,rt;v.parameters={...v.parameters,docs:{...(at=v.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: "배치",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "placement prop(top · top-start · top-end · start · end · left · right)으로 말풍선 위치를 조정합니다. tooltip_placement-* 클래스와 대응되며, 기본은 트리거 아래·가운데 정렬입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"tooltip_demo-placement\\">\\n    <div class=\\"tooltip_demo-placement-cell-top\\">\\n      <Tooltip placement=\\"top\\" content=\\"트리거 위\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"위\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n    <div class=\\"tooltip_demo-placement-cell-left\\">\\n      <Tooltip placement=\\"left\\" content=\\"트리거 왼쪽\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"왼쪽\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n    <div class=\\"tooltip_demo-placement-cell-center\\">\\n      <Tooltip content=\\"트리거 아래 · 가운데\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"아래\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n    <div class=\\"tooltip_demo-placement-cell-right\\">\\n      <Tooltip placement=\\"right\\" content=\\"트리거 오른쪽\\">\\n        <template #trigger>\\n          <Button class=\\"tooltip_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"오른쪽\\" />\\n        </template>\\n      </Tooltip>\\n    </div>\\n  </div>\\n  <div class=\\"tooltip_row\\" style=\\"width: 100%; justify-content: space-between;\\">\\n    <Tooltip placement=\\"top-start\\" content=\\"위쪽 왼쪽 정렬\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"위 · 왼쪽\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip placement=\\"start\\" content=\\"아래쪽 왼쪽 정렬\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"아래 · 왼쪽\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip placement=\\"end\\" content=\\"아래쪽 오른쪽 정렬\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"아래 · 오른쪽\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<div class="tooltip_demo-placement">
      <div class="tooltip_demo-placement-cell-top">
        <Tooltip placement="top" content="트리거 위">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="위" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-left">
        <Tooltip placement="left" content="트리거 왼쪽">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="왼쪽" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-center">
        <Tooltip content="트리거 아래 · 가운데">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="아래" />
          </template>
        </Tooltip>
      </div>

      <div class="tooltip_demo-placement-cell-right">
        <Tooltip placement="right" content="트리거 오른쪽">
          <template #trigger>
            <Button class="tooltip_trigger" variant="outline" size="sm" label="오른쪽" />
          </template>
        </Tooltip>
      </div>
    </div>

    <div class="tooltip_row" style="width: 100%; justify-content: space-between;">
      <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="위 · 왼쪽" />
        </template>
      </Tooltip>

      <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="아래 · 왼쪽" />
        </template>
      </Tooltip>

      <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="아래 · 오른쪽" />
        </template>
      </Tooltip>
    </div>\`
  })
}`,...(rt=(it=v.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ut,pt,st;f.parameters={...f.parameters,docs:{...(ut=f.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: "역색",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "inverse prop으로 어두운 배경의 말풍선을 표시합니다. tooltip_inverse 클래스와 대응됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip inverse content=\\"어두운 배경의 말풍선입니다.\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"역색 Tooltip\\" />\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip inverse content="어두운 배경의 말풍선입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="역색 Tooltip" />
      </template>
    </Tooltip>\`
  })
}`,...(st=(pt=f.parameters)==null?void 0:pt.docs)==null?void 0:st.source}}};var mt,ct,gt;T.parameters={...T.parameters,docs:{...(mt=T.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: "비활성 트리거",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "비활성 버튼은 tooltip_trigger span으로 감싸 pointer-events가 막힌 요소에도 설명을 제공합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip content=\\"필수 항목을 모두 입력해야 제출할 수 있습니다.\\">\\n    <template #trigger>\\n      <span class=\\"tooltip_trigger\\" tabindex=\\"0\\">\\n        <Button variant=\\"filled\\" color=\\"primary\\" label=\\"제출 불가\\" disabled />\\n      </span>\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
      <template #trigger>
        <span class="tooltip_trigger" tabindex="0">
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      </template>
    </Tooltip>\`
  })
}`,...(gt=(ct=T.parameters)==null?void 0:ct.docs)==null?void 0:gt.source}}};var Ct,Bt,dt;A.parameters={...A.parameters,docs:{...(Ct=A.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  name: "화살표 기준",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 말풍선·화살표를 독립 조합합니다. target은 말풍선 CSS·화살표 JS, mixed는 말풍선·화살표 모두 JS로 트리거 기준 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <p class=\\"form_field-hint\\" style=\\"margin-bottom: var(--space-md);\\">기준 비교</p>\\n  <div class=\\"tooltip_row\\" style=\\"align-items: flex-start;\\">\\n    <Tooltip open content=\\"패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"target\\" content=\\"패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">target — 좌 · 가운데 · 우 (아래 배치)</p>\\n  <div class=\\"tooltip_row\\" style=\\"align-items: flex-start;\\">\\n    <Tooltip open arrow-anchor=\\"target\\" arrow-target-align=\\"left\\" content=\\"트리거 왼쪽을 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"target\\" content=\\"트리거 가운데를 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"target\\" arrow-target-align=\\"right\\" content=\\"트리거 오른쪽을 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>\\n  <div class=\\"tooltip_row\\" style=\\"align-items: center;\\">\\n    <Tooltip placement=\\"left\\" open arrow-anchor=\\"target\\" arrow-target-align=\\"top\\" content=\\"트리거 위쪽을 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"트리거\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip placement=\\"left\\" open arrow-anchor=\\"target\\" content=\\"트리거 가운데를 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"트리거\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip placement=\\"left\\" open arrow-anchor=\\"target\\" arrow-target-align=\\"bottom\\" content=\\"트리거 아래쪽을 가리킵니다.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"트리거\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>\\n  <div class=\\"tooltip_row\\" style=\\"align-items: flex-start;\\">\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"center\\" arrow-target-align=\\"left\\" content=\\"말풍선 가운데, 화살표 왼쪽.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"center\\" content=\\"말풍선·화살표 모두 가운데.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"center\\" arrow-target-align=\\"right\\" content=\\"말풍선 가운데, 화살표 오른쪽.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">mixed — 말풍선 왼쪽 · 화살표 조합</p>\\n  <div class=\\"tooltip_row\\" style=\\"align-items: flex-start;\\">\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"start\\" arrow-target-align=\\"left\\" content=\\"말풍선 왼쪽, 화살표 왼쪽.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"start\\" content=\\"말풍선 왼쪽, 화살표 가운데.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"start\\" arrow-target-align=\\"right\\" content=\\"말풍선 왼쪽, 화살표 오른쪽.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">mixed — 말풍선 오른쪽 · 화살표 조합</p>\\n  <div class=\\"tooltip_row\\" style=\\"align-items: flex-start;\\">\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"end\\" arrow-target-align=\\"left\\" content=\\"말풍선 오른쪽, 화살표 왼쪽.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"end\\" content=\\"말풍선 오른쪽, 화살표 가운데.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n    <Tooltip open arrow-anchor=\\"mixed\\" panel-align=\\"end\\" arrow-target-align=\\"right\\" content=\\"말풍선 오른쪽, 화살표 오른쪽.\\">\\n      <template #trigger>\\n        <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" size=\\"sm\\" label=\\"S\\" />\\n      </template>\\n    </Tooltip>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>

      <Tooltip open arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="tooltip_row" style="align-items: center;">
      <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="top" content="트리거 위쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>

      <Tooltip placement="left" open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>

      <Tooltip placement="left" open arrow-anchor="target" arrow-target-align="bottom" content="트리거 아래쪽을 가리킵니다.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" label="트리거" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="left" content="말풍선 왼쪽, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="start" content="말풍선 왼쪽, 화살표 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="start" arrow-target-align="right" content="말풍선 왼쪽, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
      <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" content="말풍선 오른쪽, 화살표 왼쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="end" content="말풍선 오른쪽, 화살표 가운데.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
      <Tooltip open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" content="말풍선 오른쪽, 화살표 오른쪽.">
        <template #trigger>
          <Button class="tooltip_trigger" variant="ghost" size="sm" label="S" />
        </template>
      </Tooltip>
    </div>\`
  })
}`,...(dt=(Bt=A.parameters)==null?void 0:Bt.docs)==null?void 0:dt.source}}};var Dt,vt,ft;_.parameters={..._.parameters,docs:{...(Dt=_.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  name: "화살표 없음",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "no-arrow prop으로 tooltip_arrow를 숨깁니다. tooltip_no-arrow 클래스와 대응됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Tooltip from '@uxkm/ui/components/Tooltip.vue';\\n<\/script>\\n\\n<template>\\n  <Tooltip no-arrow content=\\"화살표가 표시되지 않는 말풍선입니다.\\">\\n    <template #trigger>\\n      <Button class=\\"tooltip_trigger\\" variant=\\"ghost\\" label=\\"화살표 없음\\" />\\n    </template>\\n  </Tooltip>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tooltip,
      Button,
      Icon,
      Link
    },
    template: \`<Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
      <template #trigger>
        <Button class="tooltip_trigger" variant="ghost" label="화살표 없음" />
      </template>
    </Tooltip>\`
  })
}`,...(ft=(vt=_.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};const re=["Playground","Basic","Slot","Open","Size","Offset","Inline","Trigger","Click","Placement","Inverse","Disabled","ArrowAnchor","NoArrow"];export{A as ArrowAnchor,s as Basic,D as Click,T as Disabled,B as Inline,f as Inverse,_ as NoArrow,C as Offset,c as Open,v as Placement,p as Playground,g as Size,m as Slot,d as Trigger,re as __namedExportsOrder,ie as default};
