import{ac as wt,a as kt,a3 as _t,ah as Et,o as z,c as zt,d as w,r as S,s as P,m as St,w as Pt,e as Ft,_ as At,q as a,g as Lt,f as jt,t as It,n as Ot,p as Vt,j as i,h as Nt,X as bt}from"./iframe-3tmFy2e1.js";import{p as $t,o as r,u as Rt,a as Mt,b as Ht}from"./overlay-panel-align-46z6j7Ud.js";import{s as qt,w as Jt}from"./story-renders-ww3py-Dw.js";import"./preload-helper-PMqzWbAN.js";const Ut=["aria-describedby"],Xt=["id","hidden"],o=Object.assign({inheritAttrs:!1},{__name:"Tooltip",props:{content:String,placement:String,size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},offset:{type:String,default:"md",validator:r.validator},offsetTop:r,offsetRight:r,offsetBottom:r,offsetLeft:r,open:Boolean,inverse:Boolean,noArrow:Boolean,arrowAnchor:{type:String,default:"content",validator:n=>["content","target","mixed"].includes(n)},panelAlign:{type:String,default:"center",validator:$t.validator},arrowTargetAlign:wt,disabled:Boolean,trigger:{type:String,default:"hover",validator:n=>["hover","click"].includes(n)},interactive:{type:Boolean,default:!0},closable:{type:Boolean,default:void 0},closeLabel:{type:String,default:"닫기"}},setup(n){const y=new Set(["top","top-start","top-end","left","right","start","end"]),t=n,h=kt(),x=Nt(null),k=_t().replace(/:/g,"");Et(t,x,h),Rt(x,t,"tooltip");const yt=i(()=>{const e=["tooltip"];return t.size==="sm"&&e.push("tooltip_sm"),t.size==="lg"&&e.push("tooltip_lg"),e.push(...Mt("tooltip",t)),e.push(...Ht("tooltip",t.panelAlign,"center")),t.inverse&&e.push("tooltip_inverse"),t.noArrow&&e.push("tooltip_no-arrow"),t.arrowAnchor==="target"&&e.push("tooltip_arrow-anchor-target"),t.arrowAnchor==="mixed"&&e.push("tooltip_arrow-anchor-mixed"),t.placement&&y.has(t.placement)&&e.push(`tooltip_placement-${t.placement}`),t.open&&e.push("is-open"),t.disabled&&e.push("is-disabled"),h.class&&e.push(h.class),e}),ht=i(()=>{const e={};return t.interactive&&(e["data-tooltip"]=""),t.trigger==="click"&&(e["data-tooltip-trigger"]="click"),(t.arrowAnchor==="mixed"||t.panelAlign!=="center")&&(e["data-panel-align"]=t.panelAlign),(t.arrowAnchor==="target"||t.arrowAnchor==="mixed")&&t.arrowTargetAlign!=="center"&&(e["data-arrow-target-align"]=t.arrowTargetAlign),e}),xt=i(()=>{if(!t.interactive)return!t.open||void 0}),_=i(()=>t.closable??t.trigger==="click");return(e,E)=>(z(),zt("span",Vt({ref_key:"rootRef",ref:x,class:yt.value},ht.value),[w("span",{class:"tooltip_trigger","aria-describedby":P(k)},[S(e.$slots,"trigger")],8,Ut),w("span",{id:P(k),class:Ot(["tooltip_bubble",{"tooltip_bubble-closable":_.value}]),role:"tooltip",hidden:xt.value},[E[0]||(E[0]=w("span",{class:"tooltip_arrow","aria-hidden":"true"},null,-1)),_.value?(z(),St(a,{key:0,variant:"ghost","icon-only":"",class:"tooltip_close tooltip_close-floating","data-tooltip-close":"","aria-label":n.closeLabel},{"icon-before":Pt(()=>[Ft(At,{name:"close",size:"sm",class:"tooltip_close-icon"})]),_:1},8,["aria-label"])):Lt("",!0),S(e.$slots,"default",{},()=>[jt(It(n.content),1)])],10,Xt)],16))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"}},{name:"placement",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"offset",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"offsetTop",type:{name:"overlayOffsetProp"}},{name:"offsetRight",type:{name:"overlayOffsetProp"}},{name:"offsetBottom",type:{name:"overlayOffsetProp"}},{name:"offsetLeft",type:{name:"overlayOffsetProp"}},{name:"open",type:{name:"boolean"}},{name:"inverse",type:{name:"boolean"}},{name:"noArrow",type:{name:"boolean"}},{name:"arrowAnchor",type:{name:"string"},defaultValue:{func:!1,value:"'content'"},values:["content","target","mixed"]},{name:"panelAlign",type:{name:"string"},defaultValue:{func:!1,value:"'center'"}},{name:"arrowTargetAlign",type:{name:"arrowTargetAlignProp"}},{name:"disabled",type:{name:"boolean"}},{name:"trigger",type:{name:"string"},defaultValue:{func:!1,value:"'hover'"},values:["hover","click"]},{name:"interactive",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closable",description:"클릭 트리거 시 말풍선 닫기 버튼. 미지정이면 trigger가 click일 때 표시",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"closeLabel",type:{name:"string"},defaultValue:{func:!1,value:"'닫기'"}}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Tooltip.vue"]});const Gt=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Kt=[{name:"content",type:"string",default:"—",description:"말풍선 텍스트. default 슬롯으로 대체"},{name:"placement",type:"'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'",default:"—",description:"tooltip_placement-*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tooltip_sm · tooltip_lg"},{name:"offset",type:"'none' | 'sm' | 'md' | 'lg'",default:"md",description:"전 방향 동일 간격. tooltip_offset-* · --tooltip-offset"},{name:"offset-top · offset-right · offset-bottom · offset-left",type:"'none' | 'sm' | 'md' | 'lg'",default:"—",description:"방향별 간격. tooltip_offset-top-* 등 · --tooltip-offset-*"},{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"inverse",type:"boolean",default:"false",description:"어두운 배경 (tooltip_inverse)"},{name:"no-arrow",type:"boolean",default:"false",description:"화살표 숨김"},{name:"arrow-anchor",type:"'content' | 'target' | 'mixed'",default:"content",description:"화살표 기준. target=화살표만, mixed=말풍선·화살표 독립"},{name:"panel-align",type:"'start' | 'center' | 'end'",default:"center",description:"말풍선 교차축 정렬. tooltip_panel-align-* · data-panel-align"},{name:"arrow-target-align",type:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'",default:"center",description:"target·mixed 시 트리거 내 화살표 위치"},{name:"disabled",type:"boolean",default:"false",description:"트리거 비활성"},{name:"trigger",type:"'hover' | 'click'",default:"hover",description:'click 시 data-tooltip-trigger="click"'},{name:"interactive",type:"boolean",default:"true",description:"false면 data-tooltip 미부여"},{name:"closable",type:"boolean",default:"click 시 true",description:"말풍선 닫기 버튼. hover 트리거는 기본 false"},{name:"close-label",type:"string",default:"닫기",description:"닫기 버튼 aria-label"}],Qt=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Wt=[{name:"trigger",description:"트리거 요소"},{name:"default",description:"말풍선 텍스트 (content 대체)"}],Yt=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Zt=[{name:"tooltip · tooltip_trigger · tooltip_bubble · tooltip_arrow · tooltip_close",description:"루트·트리거·말풍선"},{name:"tooltip_sm · tooltip_lg · tooltip_inverse · tooltip_no-arrow",description:"크기·스킨"},{name:"tooltip_panel-align-start · tooltip_panel-align-end",description:"말풍선 교차축 정렬"},{name:"tooltip_arrow-anchor-target · tooltip_arrow-anchor-mixed",description:"화살표·혼합 기준"},{name:"tooltip_offset-none · tooltip_offset-sm · tooltip_offset-lg",description:"전 방향 간격"},{name:"tooltip_offset-top-* · tooltip_offset-right-* · tooltip_offset-bottom-* · tooltip_offset-left-*",description:"방향별 간격"},{name:"tooltip_placement-*",description:"배치 변형"},{name:"data-tooltip · data-tooltip-trigger · data-tooltip-close · data-panel-align · data-arrow-target-align",description:"JS 연동"},{name:"is-open · is-disabled · hidden",description:"상태"},{name:'role="tooltip" · aria-describedby · aria-expanded',description:"접근성"}],te=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ee=[{name:"--tooltip-max-width · --tooltip-max-width-sm · --tooltip-max-width-lg",default:"16rem · 12rem · 20rem",description:"말풍선 최대 너비"},{name:"--tooltip-padding-x · --tooltip-padding-y · --tooltip-font-size",default:"—",description:"패딩·글자"},{name:"--tooltip-offset · --tooltip-offset-sm · --tooltip-offset-md · --tooltip-offset-lg",default:"var(--space-xs) · …",description:"전 방향 간격 토큰"},{name:"--tooltip-offset-top · --tooltip-offset-right · --tooltip-offset-bottom · --tooltip-offset-left",default:"offset 상속",description:"방향별 간격 (배치에 따라 적용)"},{name:"--tooltip-arrow-size",default:"6px",description:"화살표 크기"},{name:"--tooltip-panel-radius · --tooltip-arrow-edge-inset",default:"6px · calc",description:"말풍선 라운드·화살표 가장자리 여백"},{name:"--tooltip-arrow-position",default:"—",description:"target 기준 시 트리거 중앙 위치(px)"},{name:"--tooltip-inverse-bg · --tooltip-inverse-text",default:"—",description:"inverse 스킨"}],oe=[{title:"API · Props",tables:[{columns:Gt,rows:Kt,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Qt,rows:Wt,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Yt,rows:Zt,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:te,rows:ee,codeColumn:"name"}]}];function l(n){return Jt(n,n)}function u(n){return`
    <div class="tooltip_demo-stage">
      ${n}
    </div>
  `}const re={title:"Components/피드백/Tooltip",id:"components-tooltip",component:o,tags:["autodocs"],argTypes:{content:{control:"text",type:{name:"string",summary:"string"}},placement:{control:"select",options:["top","top-start","top-end","left","right","start","end"],type:{name:"enum",summary:"'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},offset:{control:"select",options:["none","sm","md","lg"],type:{name:"enum",summary:"'none' | 'sm' | 'md' | 'lg'"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inverse:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noArrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},arrowAnchor:{control:"select",options:["content","target","mixed"],type:{name:"enum",summary:"'content' | 'target' | 'mixed'"}},panelAlign:{control:"select",options:["start","center","end"],type:{name:"enum",summary:"'start' | 'center' | 'end'"}},arrowTargetAlign:{control:"select",options:["center","left","right","top","bottom"],type:{name:"enum",summary:"'center' | 'left' | 'right' | 'top' | 'bottom'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},trigger:{control:"select",options:["hover","click"],type:{name:"enum",summary:"'hover' | 'click'"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:oe}},s={parameters:{controls:{disable:!1}},args:{content:"툴팁 텍스트",size:"md",offset:"md",open:!0,inverse:!1,noArrow:!1,arrowAnchor:"content",panelAlign:"center",arrowTargetAlign:"center",disabled:!1,trigger:"hover",interactive:!0,closable:!1,closeLabel:"닫기"},render:(n,y)=>({components:{Tooltip:o,Button:a},setup(){return{args:qt(y)}},template:`
      <div class="tooltip_demo-stage">
        <Tooltip v-bind="args">
          <template #trigger>
            <Button label="툴팁" variant="outline" />
          </template>
        </Tooltip>
      </div>
    `})},p={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Tooltip과 `#trigger` 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip content="짧은 도움말 텍스트입니다.">
    <template #trigger>
      <Button variant="outline" label="마우스 오버" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{content:"짧은 도움말 텍스트입니다.",trigger:"hover"},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip content="짧은 도움말 텍스트입니다.">
        <template #trigger>
          <Button variant="outline" label="마우스 오버" />
        </template>
      </Tooltip>
    `)}))},m={name:"슬롯",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip>
    <template #trigger>
      <Button variant="outline" label="슬롯 예시" />
    </template>
    짧은 도움말 텍스트입니다.
  </Tooltip>
</template>`,language:"vue"}}},args:{trigger:"hover"},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip>
        <template #trigger>
          <Button variant="outline" label="슬롯 예시" />
        </template>
        짧은 도움말 텍스트입니다.
      </Tooltip>
    `)}))},c={name:"열린 상태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip open content="정적 데모용 열린 상태입니다.">
    <template #trigger>
      <Button variant="filled" color="primary" label="열림" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{open:!0,content:"정적 데모용 열린 상태입니다."},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip open content="정적 데모용 열린 상태입니다.">
        <template #trigger>
          <Button variant="filled" color="primary" label="열림" />
        </template>
      </Tooltip>
    `)}))},C={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip size="sm" content="작은 말풍선">
    <template #trigger>
      <Button variant="ghost" size="sm" label="Small" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{open:!1,size:"md"},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <div class="tooltip_row" style="align-items: flex-start;">
        <Tooltip size="sm" content="작은 말풍선">
          <template #trigger>
            <Button variant="ghost" size="sm" label="Small" />
          </template>
        </Tooltip>
        <Tooltip content="기본 크기 말풍선">
          <template #trigger>
            <Button variant="ghost" label="Medium" />
          </template>
        </Tooltip>
        <Tooltip size="lg" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
          <template #trigger>
            <Button variant="ghost" size="lg" label="Large" />
          </template>
        </Tooltip>
      </div>
    `)}))},g={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-*로 방향별 간격을 조절합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip offset="lg" content="넓은 간격">
    <template #trigger>
      <Button variant="ghost" size="sm" label="lg" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{open:!1,offset:"md"},render:l(()=>({components:{Button:a,Tooltip:o},template:`
      <div class="tooltip_demo-stage">
        <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip offset="none" content="간격 없음">
            <template #trigger>
              <Button variant="ghost" size="sm" label="none" />
            </template>
          </Tooltip>
          <Tooltip offset="sm" content="좁은 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="sm" />
            </template>
          </Tooltip>
          <Tooltip content="기본 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="md" />
            </template>
          </Tooltip>
          <Tooltip offset="lg" content="넓은 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="lg" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
        <div class="tooltip_demo-placement" style="min-height: 12rem; padding: 0; border: none; background: transparent;">
          <div class="tooltip_demo-placement-cell-top">
            <Tooltip placement="top" offset-top="lg" content="위쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="위" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-left">
            <Tooltip placement="left" offset-left="lg" content="왼쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="왼쪽" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-center">
            <Tooltip offset-bottom="lg" content="아래쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="아래" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-right">
            <Tooltip placement="right" offset-right="lg" content="오른쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="오른쪽" />
              </template>
            </Tooltip>
          </div>
        </div>
      </div>
    `}))},B={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <p>
    결제 시
    <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
      <template #trigger>
        <Link label="에스크로" />
      </template>
    </Tooltip>
    서비스를 이용할 수 있습니다.
  </p>
</template>`,language:"vue"}}},args:{trigger:"hover"},render:l(()=>({components:{Link:bt,Tooltip:o},template:u(`
      <p>
        결제 시
        <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
          <template #trigger>
            <Link label="에스크로" />
          </template>
        </Tooltip>
        서비스를 이용할 수 있습니다.
      </p>
    `)}))},d={name:"트리거 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <div class="tooltip_row">
    <Tooltip content="버튼 트리거 예시입니다.">
      <template #trigger>
        <Button variant="filled" color="primary" label="Button" />
      </template>
    </Tooltip>
  </div>
</template>`,language:"vue"}}},args:{trigger:"hover"},render:l(()=>({components:{Button:a,Icon:At,Link:bt,Tooltip:o},template:u(`
      <div class="tooltip_row">
        <Tooltip content="버튼 트리거 예시입니다.">
          <template #trigger>
            <Button variant="filled" color="primary" label="Button" />
          </template>
        </Tooltip>
        <Tooltip content="링크 스타일 트리거입니다.">
          <template #trigger>
            <Link label="Link 트리거" />
          </template>
        </Tooltip>
        <Tooltip content="아이콘 전용 트리거입니다.">
          <template #trigger>
            <Button variant="ghost" icon-only aria-label="정보">
              <template #icon-before>
                <Icon name="info" />
              </template>
            </Button>
          </template>
        </Tooltip>
      </div>
    `)}))},f={name:"클릭 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'trigger="click"으로 클릭 시 말풍선을 토글합니다. 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.'},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
    <template #trigger>
      <Button variant="outline" label="클릭하여 보기" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{trigger:"click",content:"클릭으로 열고 닫는 Tooltip입니다."},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
        <template #trigger>
          <Button variant="outline" label="클릭하여 보기" />
        </template>
      </Tooltip>
    `)}))},v={name:"배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"placement prop으로 말풍선 위치를 조정합니다. 기본은 트리거 아래·가운데 정렬입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip placement="top" content="트리거 위">
    <template #trigger>
      <Button variant="outline" size="sm" label="위" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{trigger:"hover"},render:l(()=>({components:{Button:a,Tooltip:o},template:`
      <div class="tooltip_demo-stage">
        <div class="tooltip_demo-placement">
          <div class="tooltip_demo-placement-cell-top">
            <Tooltip placement="top" content="트리거 위">
              <template #trigger>
                <Button variant="outline" size="sm" label="위" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-left">
            <Tooltip placement="left" content="트리거 왼쪽">
              <template #trigger>
                <Button variant="outline" size="sm" label="왼쪽" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-center">
            <Tooltip content="트리거 아래 · 가운데">
              <template #trigger>
                <Button variant="outline" size="sm" label="아래" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-right">
            <Tooltip placement="right" content="트리거 오른쪽">
              <template #trigger>
                <Button variant="outline" size="sm" label="오른쪽" />
              </template>
            </Tooltip>
          </div>
        </div>
        <div class="tooltip_row" style="width: 100%; justify-content: space-between; margin-top: var(--space-xl);">
          <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="위 · 왼쪽" />
            </template>
          </Tooltip>
          <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="아래 · 왼쪽" />
            </template>
          </Tooltip>
          <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="아래 · 오른쪽" />
            </template>
          </Tooltip>
        </div>
      </div>
    `}))},D={name:"역색",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"inverse prop으로 어두운 배경의 말풍선을 표시합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip inverse content="어두운 배경의 말풍선입니다.">
    <template #trigger>
      <Button variant="ghost" label="역색 Tooltip" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{inverse:!0,content:"어두운 배경의 말풍선입니다."},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip inverse content="어두운 배경의 말풍선입니다.">
        <template #trigger>
          <Button variant="ghost" label="역색 Tooltip" />
        </template>
      </Tooltip>
    `)}))},T={name:"비활성 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"비활성 버튼은 래퍼에 tabindex를 주어 pointer-events가 막힌 요소에도 설명을 제공합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
    <template #trigger>
      <span tabindex="0">
        <Button variant="filled" color="primary" label="제출 불가" disabled />
      </span>
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{content:"필수 항목을 모두 입력해야 제출할 수 있습니다."},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
        <template #trigger>
          <span tabindex="0">
            <Button variant="filled" color="primary" label="제출 불가" disabled />
          </span>
        </template>
      </Tooltip>
    `)}))},A={name:"화살표 기준",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"arrow-anchor(content · target · mixed)와 panel-align, arrow-target-align으로 말풍선·화살표를 독립 조합합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip arrow-anchor="target" content="화살표가 트리거 중앙을 가리킵니다.">
    <template #trigger>
      <Button variant="ghost" size="sm" label="S" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{open:!1,arrowAnchor:"target"},render:l(()=>({components:{Button:a,Tooltip:o},template:`
      <div class="tooltip_demo-stage">
        <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start; display: grid; grid-template-columns: repeat(3, minmax(10rem, 1fr)); gap: var(--space-xl);">
          <div style="display: flex; justify-content: center;">
            <Tooltip arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: center;">
            <Tooltip arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: center;">
            <Tooltip arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start; display: grid; grid-template-columns: repeat(3, minmax(10rem, 1fr)); gap: var(--space-xl);">
          <div>
            <Tooltip arrow-anchor="mixed" panel-align="start" arrow-target-align="left" content="말풍선 왼쪽, 화살표 왼쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div>
            <Tooltip arrow-anchor="mixed" panel-align="start" content="말풍선 왼쪽, 화살표 가운데.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div>
            <Tooltip arrow-anchor="mixed" panel-align="start" arrow-target-align="right" content="말풍선 왼쪽, 화살표 오른쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start; display: grid; grid-template-columns: repeat(3, minmax(10rem, 1fr)); gap: var(--space-xl);">
          <div style="display: flex; justify-content: flex-end;">
            <Tooltip arrow-anchor="mixed" panel-align="end" arrow-target-align="left" content="말풍선 오른쪽, 화살표 왼쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: flex-end;">
            <Tooltip arrow-anchor="mixed" panel-align="end" content="말풍선 오른쪽, 화살표 가운데.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: flex-end;">
            <Tooltip arrow-anchor="mixed" panel-align="end" arrow-target-align="right" content="말풍선 오른쪽, 화살표 오른쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
        </div>
      </div>
    `}))},b={name:"화살표 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"no-arrow prop으로 tooltip_arrow를 숨깁니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
    <template #trigger>
      <Button variant="ghost" label="화살표 없음" />
    </template>
  </Tooltip>
</template>`,language:"vue"}}},args:{noArrow:!0,content:"화살표가 표시되지 않는 말풍선입니다."},render:l(()=>({components:{Button:a,Tooltip:o},template:u(`
      <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
        <template #trigger>
          <Button variant="ghost" label="화살표 없음" />
        </template>
      </Tooltip>
    `)}))};var F,L,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    content: "툴팁 텍스트",
    size: "md",
    offset: "md",
    open: true,
    inverse: false,
    noArrow: false,
    arrowAnchor: "content",
    panelAlign: "center",
    arrowTargetAlign: "center",
    disabled: false,
    trigger: "hover",
    interactive: true,
    closable: false,
    closeLabel: "닫기"
  },
  render: (_args, context) => ({
    components: {
      Tooltip,
      Button
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`
      <div class="tooltip_demo-stage">
        <Tooltip v-bind="args">
          <template #trigger>
            <Button label="툴팁" variant="outline" />
          </template>
        </Tooltip>
      </div>
    \`
  })
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var I,O,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: "Tooltip과 \`#trigger\` 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip content="짧은 도움말 텍스트입니다.">
    <template #trigger>
      <Button variant="outline" label="마우스 오버" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    content: "짧은 도움말 텍스트입니다.",
    trigger: "hover"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip content="짧은 도움말 텍스트입니다.">
        <template #trigger>
          <Button variant="outline" label="마우스 오버" />
        </template>
      </Tooltip>
    \`)
  }))
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var N,$,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "슬롯",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip>
    <template #trigger>
      <Button variant="outline" label="슬롯 예시" />
    </template>
    짧은 도움말 텍스트입니다.
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    trigger: "hover"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip>
        <template #trigger>
          <Button variant="outline" label="슬롯 예시" />
        </template>
        짧은 도움말 텍스트입니다.
      </Tooltip>
    \`)
  }))
}`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var M,H,q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "열린 상태",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip open content="정적 데모용 열린 상태입니다.">
    <template #trigger>
      <Button variant="filled" color="primary" label="열림" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    open: true,
    content: "정적 데모용 열린 상태입니다."
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip open content="정적 데모용 열린 상태입니다.">
        <template #trigger>
          <Button variant="filled" color="primary" label="열림" />
        </template>
      </Tooltip>
    \`)
  }))
}`,...(q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var J,U,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip size="sm" content="작은 말풍선">
    <template #trigger>
      <Button variant="ghost" size="sm" label="Small" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    open: false,
    size: "md"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <div class="tooltip_row" style="align-items: flex-start;">
        <Tooltip size="sm" content="작은 말풍선">
          <template #trigger>
            <Button variant="ghost" size="sm" label="Small" />
          </template>
        </Tooltip>
        <Tooltip content="기본 크기 말풍선">
          <template #trigger>
            <Button variant="ghost" label="Medium" />
          </template>
        </Tooltip>
        <Tooltip size="lg" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
          <template #trigger>
            <Button variant="ghost" size="lg" label="Large" />
          </template>
        </Tooltip>
      </div>
    \`)
  }))
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,K,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "간격",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-*로 방향별 간격을 조절합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip offset="lg" content="넓은 간격">
    <template #trigger>
      <Button variant="ghost" size="sm" label="lg" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    open: false,
    offset: "md"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: \`
      <div class="tooltip_demo-stage">
        <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip offset="none" content="간격 없음">
            <template #trigger>
              <Button variant="ghost" size="sm" label="none" />
            </template>
          </Tooltip>
          <Tooltip offset="sm" content="좁은 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="sm" />
            </template>
          </Tooltip>
          <Tooltip content="기본 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="md" />
            </template>
          </Tooltip>
          <Tooltip offset="lg" content="넓은 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="lg" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
        <div class="tooltip_demo-placement" style="min-height: 12rem; padding: 0; border: none; background: transparent;">
          <div class="tooltip_demo-placement-cell-top">
            <Tooltip placement="top" offset-top="lg" content="위쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="위" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-left">
            <Tooltip placement="left" offset-left="lg" content="왼쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="왼쪽" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-center">
            <Tooltip offset-bottom="lg" content="아래쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="아래" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-right">
            <Tooltip placement="right" offset-right="lg" content="오른쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="오른쪽" />
              </template>
            </Tooltip>
          </div>
        </div>
      </div>
    \`
  }))
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,Y,Z;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "인라인",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."
      },
      source: {
        code: \`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <p>
    결제 시
    <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
      <template #trigger>
        <Link label="에스크로" />
      </template>
    </Tooltip>
    서비스를 이용할 수 있습니다.
  </p>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    trigger: "hover"
  },
  render: tooltipDemo(() => ({
    components: {
      Link,
      Tooltip
    },
    template: stageDemo(\`
      <p>
        결제 시
        <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
          <template #trigger>
            <Link label="에스크로" />
          </template>
        </Tooltip>
        서비스를 이용할 수 있습니다.
      </p>
    \`)
  }))
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,ot;d.parameters={...d.parameters,docs:{...(tt=d.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: "트리거 유형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <div class="tooltip_row">
    <Tooltip content="버튼 트리거 예시입니다.">
      <template #trigger>
        <Button variant="filled" color="primary" label="Button" />
      </template>
    </Tooltip>
  </div>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    trigger: "hover"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Icon,
      Link,
      Tooltip
    },
    template: stageDemo(\`
      <div class="tooltip_row">
        <Tooltip content="버튼 트리거 예시입니다.">
          <template #trigger>
            <Button variant="filled" color="primary" label="Button" />
          </template>
        </Tooltip>
        <Tooltip content="링크 스타일 트리거입니다.">
          <template #trigger>
            <Link label="Link 트리거" />
          </template>
        </Tooltip>
        <Tooltip content="아이콘 전용 트리거입니다.">
          <template #trigger>
            <Button variant="ghost" icon-only aria-label="정보">
              <template #icon-before>
                <Icon name="info" />
              </template>
            </Button>
          </template>
        </Tooltip>
      </div>
    \`)
  }))
}`,...(ot=(et=d.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var nt,at,lt;f.parameters={...f.parameters,docs:{...(nt=f.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: "클릭 트리거",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "trigger=\\"click\\"으로 클릭 시 말풍선을 토글합니다. 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
    <template #trigger>
      <Button variant="outline" label="클릭하여 보기" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    trigger: "click",
    content: "클릭으로 열고 닫는 Tooltip입니다."
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
        <template #trigger>
          <Button variant="outline" label="클릭하여 보기" />
        </template>
      </Tooltip>
    \`)
  }))
}`,...(lt=(at=f.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ut,rt,it;v.parameters={...v.parameters,docs:{...(ut=v.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: "배치",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "placement prop으로 말풍선 위치를 조정합니다. 기본은 트리거 아래·가운데 정렬입니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip placement="top" content="트리거 위">
    <template #trigger>
      <Button variant="outline" size="sm" label="위" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    trigger: "hover"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: \`
      <div class="tooltip_demo-stage">
        <div class="tooltip_demo-placement">
          <div class="tooltip_demo-placement-cell-top">
            <Tooltip placement="top" content="트리거 위">
              <template #trigger>
                <Button variant="outline" size="sm" label="위" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-left">
            <Tooltip placement="left" content="트리거 왼쪽">
              <template #trigger>
                <Button variant="outline" size="sm" label="왼쪽" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-center">
            <Tooltip content="트리거 아래 · 가운데">
              <template #trigger>
                <Button variant="outline" size="sm" label="아래" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-right">
            <Tooltip placement="right" content="트리거 오른쪽">
              <template #trigger>
                <Button variant="outline" size="sm" label="오른쪽" />
              </template>
            </Tooltip>
          </div>
        </div>
        <div class="tooltip_row" style="width: 100%; justify-content: space-between; margin-top: var(--space-xl);">
          <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="위 · 왼쪽" />
            </template>
          </Tooltip>
          <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="아래 · 왼쪽" />
            </template>
          </Tooltip>
          <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="아래 · 오른쪽" />
            </template>
          </Tooltip>
        </div>
      </div>
    \`
  }))
}`,...(it=(rt=v.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var st,pt,mt;D.parameters={...D.parameters,docs:{...(st=D.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: "역색",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "inverse prop으로 어두운 배경의 말풍선을 표시합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip inverse content="어두운 배경의 말풍선입니다.">
    <template #trigger>
      <Button variant="ghost" label="역색 Tooltip" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    inverse: true,
    content: "어두운 배경의 말풍선입니다."
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip inverse content="어두운 배경의 말풍선입니다.">
        <template #trigger>
          <Button variant="ghost" label="역색 Tooltip" />
        </template>
      </Tooltip>
    \`)
  }))
}`,...(mt=(pt=D.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ct,Ct,gt;T.parameters={...T.parameters,docs:{...(ct=T.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  name: "비활성 트리거",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "비활성 버튼은 래퍼에 tabindex를 주어 pointer-events가 막힌 요소에도 설명을 제공합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
    <template #trigger>
      <span tabindex="0">
        <Button variant="filled" color="primary" label="제출 불가" disabled />
      </span>
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    content: "필수 항목을 모두 입력해야 제출할 수 있습니다."
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
        <template #trigger>
          <span tabindex="0">
            <Button variant="filled" color="primary" label="제출 불가" disabled />
          </span>
        </template>
      </Tooltip>
    \`)
  }))
}`,...(gt=(Ct=T.parameters)==null?void 0:Ct.docs)==null?void 0:gt.source}}};var Bt,dt,ft;A.parameters={...A.parameters,docs:{...(Bt=A.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  name: "화살표 기준",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "arrow-anchor(content · target · mixed)와 panel-align, arrow-target-align으로 말풍선·화살표를 독립 조합합니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip arrow-anchor="target" content="화살표가 트리거 중앙을 가리킵니다.">
    <template #trigger>
      <Button variant="ghost" size="sm" label="S" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    open: false,
    arrowAnchor: "target"
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: \`
      <div class="tooltip_demo-stage">
        <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start; display: grid; grid-template-columns: repeat(3, minmax(10rem, 1fr)); gap: var(--space-xl);">
          <div style="display: flex; justify-content: center;">
            <Tooltip arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: center;">
            <Tooltip arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: center;">
            <Tooltip arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start; display: grid; grid-template-columns: repeat(3, minmax(10rem, 1fr)); gap: var(--space-xl);">
          <div>
            <Tooltip arrow-anchor="mixed" panel-align="start" arrow-target-align="left" content="말풍선 왼쪽, 화살표 왼쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div>
            <Tooltip arrow-anchor="mixed" panel-align="start" content="말풍선 왼쪽, 화살표 가운데.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div>
            <Tooltip arrow-anchor="mixed" panel-align="start" arrow-target-align="right" content="말풍선 왼쪽, 화살표 오른쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start; display: grid; grid-template-columns: repeat(3, minmax(10rem, 1fr)); gap: var(--space-xl);">
          <div style="display: flex; justify-content: flex-end;">
            <Tooltip arrow-anchor="mixed" panel-align="end" arrow-target-align="left" content="말풍선 오른쪽, 화살표 왼쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: flex-end;">
            <Tooltip arrow-anchor="mixed" panel-align="end" content="말풍선 오른쪽, 화살표 가운데.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
          <div style="display: flex; justify-content: flex-end;">
            <Tooltip arrow-anchor="mixed" panel-align="end" arrow-target-align="right" content="말풍선 오른쪽, 화살표 오른쪽.">
              <template #trigger>
                <Button variant="ghost" size="sm" label="S" />
              </template>
            </Tooltip>
          </div>
        </div>
      </div>
    \`
  }))
}`,...(ft=(dt=A.parameters)==null?void 0:dt.docs)==null?void 0:ft.source}}};var vt,Dt,Tt;b.parameters={...b.parameters,docs:{...(vt=b.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  name: "화살표 없음",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "no-arrow prop으로 tooltip_arrow를 숨깁니다."
      },
      source: {
        code: \`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
<\/script>

<template>
  <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
    <template #trigger>
      <Button variant="ghost" label="화살표 없음" />
    </template>
  </Tooltip>
</template>\`,
        language: 'vue'
      }
    }
  },
  args: {
    noArrow: true,
    content: "화살표가 표시되지 않는 말풍선입니다."
  },
  render: tooltipDemo(() => ({
    components: {
      Button,
      Tooltip
    },
    template: stageDemo(\`
      <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
        <template #trigger>
          <Button variant="ghost" label="화살표 없음" />
        </template>
      </Tooltip>
    \`)
  }))
}`,...(Tt=(Dt=b.parameters)==null?void 0:Dt.docs)==null?void 0:Tt.source}}};const ie=["Playground","Basic","Slot","Open","Size","Offset","Inline","Trigger","Click","Placement","Inverse","Disabled","ArrowAnchor","NoArrow"];export{A as ArrowAnchor,p as Basic,f as Click,T as Disabled,B as Inline,D as Inverse,b as NoArrow,g as Offset,c as Open,v as Placement,s as Playground,C as Size,m as Slot,d as Trigger,ie as __namedExportsOrder,re as default};
