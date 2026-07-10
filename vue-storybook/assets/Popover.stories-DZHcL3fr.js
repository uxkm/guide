import{b as $e,u as qe,y as Ne,c as C,r as m,k as B,e as L,F as je,g as F,t as T,h as I,j as H,q as O,l as Me,n as He,m as Je,f as l,o as i,a as Ve}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as a}from"./Button-C3SXv-sJ.js";import{_ as t}from"./Icon-D97OEunV.js";import{p as Re}from"./useDemoCode-B9b0dRAo.js";import{a as Ue,p as We,o as g,u as Ge,b as Ke,c as Qe}from"./overlay-panel-align-BADFAcFV.js";import{_ as p}from"./Link-BBBlqIKe.js";import{_ as u}from"./Textarea-BQDkYif5.js";import"./useRipple-oORGvIsP.js";const Xe=["id","aria-label","aria-labelledby","hidden"],Ye={key:0,class:"popover_header"},Ze=["id"],eo=["id"],oo={class:"popover_body"},ao={key:3,class:"popover_footer"},r=Object.assign({inheritAttrs:!1},{__name:"Popover",props:{placement:String,size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},offset:{type:String,default:"md",validator:g.validator},offsetTop:g,offsetRight:g,offsetBottom:g,offsetLeft:g,open:Boolean,noArrow:Boolean,arrowAnchor:{type:String,default:"content",validator:n=>["content","target","mixed"].includes(n)},panelAlign:We,arrowTargetAlign:Ue,disabled:Boolean,trigger:{type:String,default:"click",validator:n=>["click","hover"].includes(n)},title:String,panelLabel:String,interactive:{type:Boolean,default:!0},closable:{type:Boolean,default:void 0},closeLabel:{type:String,default:"닫기"}},setup(n){const Se=new Set(["top","top-center","bottom-center","left","right","end"]),e=n,z=$e(),Le=qe(),S=Ve(null),v=Ne().replace(/:/g,"");Re(e,S,z),Ge(S,e,"popover");const Fe=l(()=>{const o=["popover"];return e.size==="sm"&&o.push("popover_sm"),e.size==="lg"&&o.push("popover_lg"),o.push(...Ke("popover",e)),o.push(...Qe("popover",e.panelAlign,"start")),e.noArrow&&o.push("popover_no-arrow"),e.arrowAnchor==="target"&&o.push("popover_arrow-anchor-target"),e.arrowAnchor==="mixed"&&o.push("popover_arrow-anchor-mixed"),e.placement&&Se.has(e.placement)&&o.push(`popover_placement-${e.placement}`),e.open&&o.push("is-open"),e.disabled&&o.push("is-disabled"),z.class&&o.push(z.class),o}),Te=l(()=>{const o={};return e.interactive&&(o["data-popover"]=""),e.trigger==="hover"&&(o["data-popover-trigger"]="hover"),(e.arrowAnchor==="mixed"||e.panelAlign!=="start")&&(o["data-panel-align"]=e.panelAlign),(e.arrowAnchor==="target"||e.arrowAnchor==="mixed")&&e.arrowTargetAlign!=="center"&&(o["data-arrow-target-align"]=e.arrowTargetAlign),o}),Ie=l(()=>{if(!e.interactive)return!e.open||void 0}),$=l(()=>e.closable??e.trigger==="click"),s=l(()=>!!(e.title||Le.title)),q=l(()=>$.value&&(s.value||!!e.panelLabel)),N=l(()=>$.value&&!s.value&&!e.panelLabel),j=l(()=>{if(s.value||q.value)return`${v}-title`}),Oe=l(()=>{if(!j.value)return e.panelLabel||void 0});return(o,M)=>(i(),C("div",Je({ref_key:"rootRef",ref:S,class:Fe.value},Te.value),[m(o.$slots,"trigger"),B("div",{id:L(v),class:He(["popover_panel",{"popover_panel-closable":N.value}]),role:"dialog","aria-label":Oe.value,"aria-labelledby":j.value,hidden:Ie.value},[M[0]||(M[0]=B("span",{class:"popover_arrow","aria-hidden":"true"},null,-1)),q.value?(i(),C("div",Ye,[B("div",{id:`${L(v)}-title`,class:"popover_title"},[s.value?m(o.$slots,"title",{key:0},()=>[F(T(n.title),1)]):(i(),C(je,{key:1},[F(T(n.panelLabel),1)],64))],8,Ze),I(a,{variant:"ghost","icon-only":"",class:"popover_close","data-popover-close":"","aria-label":n.closeLabel},{"icon-before":H(()=>[I(t,{name:"close",size:"sm",class:"popover_close-icon"})]),_:1},8,["aria-label"])])):s.value?(i(),C("div",{key:1,id:`${L(v)}-title`,class:"popover_title"},[m(o.$slots,"title",{},()=>[F(T(n.title),1)])],8,eo)):O("",!0),N.value?(i(),Me(a,{key:2,variant:"ghost","icon-only":"",class:"popover_close popover_close-floating","data-popover-close":"","aria-label":n.closeLabel},{"icon-before":H(()=>[I(t,{name:"close",size:"sm",class:"popover_close-icon"})]),_:1},8,["aria-label"])):O("",!0),B("div",oo,[m(o.$slots,"default")]),o.$slots.footer?(i(),C("div",ao,[m(o.$slots,"footer")])):O("",!0)],10,Xe)],16))}}),to=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ro=[{name:"placement",type:"'top' | 'top-center' | 'bottom-center' | 'left' | 'right' | 'end'",default:"—",description:"popover_placement-*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"popover_sm · popover_lg"},{name:"offset",type:"'none' | 'sm' | 'md' | 'lg'",default:"md",description:"전 방향 동일 간격. popover_offset-* · --popover-offset"},{name:"offset-top · offset-right · offset-bottom · offset-left",type:"'none' | 'sm' | 'md' | 'lg'",default:"—",description:"방향별 간격. popover_offset-top-* 등 · --popover-offset-*"},{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"no-arrow",type:"boolean",default:"false",description:"화살표 숨김"},{name:"arrow-anchor",type:"'content' | 'target' | 'mixed'",default:"content",description:"화살표 기준. target=화살표만, mixed=패널·화살표 독립"},{name:"panel-align",type:"'start' | 'center' | 'end'",default:"start",description:"패널 교차축 정렬. popover_panel-align-* · data-panel-align"},{name:"arrow-target-align",type:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'",default:"center",description:"target·mixed 시 트리거 내 화살표 위치"},{name:"disabled",type:"boolean",default:"false",description:"트리거 비활성 (is-disabled)"},{name:"trigger",type:"'click' | 'hover'",default:"click",description:'hover 시 data-popover-trigger="hover"'},{name:"closable",type:"boolean",default:"click 시 true",description:"패널 닫기 버튼. hover 트리거는 기본 false"},{name:"close-label",type:"string",default:"닫기",description:"닫기 버튼 aria-label"},{name:"title",type:"string",default:"—",description:"패널 제목"},{name:"panel-label",type:"string",default:"—",description:"패널 aria-label. 클릭 트리거 시 헤더에 제목으로 표시"},{name:"interactive",type:"boolean",default:"true",description:"false면 data-popover 미부여 (정적 데모)"}],no=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],po=[{name:"trigger",description:"트리거 버튼·링크"},{name:"title",description:"제목 (title prop 대체)"},{name:"default",description:"패널 본문"},{name:"footer",description:"하단 액션"}],uo=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],lo=[{name:"popover · popover_panel · popover_arrow",description:"루트·패널·화살표"},{name:"popover_header · popover_title · popover_close · popover_body · popover_footer",description:"패널 파트"},{name:"popover_sm · popover_lg · popover_no-arrow",description:"크기·화살표"},{name:"popover_panel-align-center · popover_panel-align-end",description:"패널 교차축 정렬"},{name:"popover_arrow-anchor-target · popover_arrow-anchor-mixed",description:"화살표·혼합 기준"},{name:"popover_offset-none · popover_offset-sm · popover_offset-lg",description:"전 방향 간격"},{name:"popover_offset-top-* · popover_offset-right-* · popover_offset-bottom-* · popover_offset-left-*",description:"방향별 간격"},{name:"popover_placement-*",description:"배치 변형"},{name:"data-popover · data-popover-trigger · data-popover-close · data-panel-align · data-arrow-target-align",description:"JS 연동"},{name:"is-open · is-disabled · hidden",description:"상태"}],io=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],so=[{name:"--popover-min-width · --popover-max-width",default:"10rem · 20rem",description:"패널 너비"},{name:"--popover-padding-x · --popover-padding-y",default:"var(--space-md)",description:"패널 패딩"},{name:"--popover-offset · --popover-offset-sm · --popover-offset-md · --popover-offset-lg",default:"var(--space-sm) · …",description:"전 방향 간격 토큰"},{name:"--popover-offset-top · --popover-offset-right · --popover-offset-bottom · --popover-offset-left",default:"offset 상속",description:"방향별 간격 (배치에 따라 적용)"},{name:"--popover-arrow-size",default:"8px",description:"화살표 크기"},{name:"--popover-panel-radius · --popover-arrow-edge-inset",default:"12px · calc",description:"패널 라운드·화살표 가장자리 여백"},{name:"--popover-arrow-position",default:"—",description:"target 기준 시 트리거 중앙 위치(px)"}],Co=[{title:"API · Props",tables:[{columns:to,rows:ro,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:no,rows:po,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:uo,rows:lo,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:io,rows:so,codeColumn:"name"}]}],bo={title:"Components/피드백/Popover",id:"components-popover",component:r,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","top-center","bottom-center","left","right","end"],type:{name:"enum",summary:"'top' | 'top-center' | 'bottom-center' | 'left' | 'right' | 'end'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},offset:{control:"select",options:["none","sm","md","lg"],type:{name:"enum",summary:"'none' | 'sm' | 'md' | 'lg'"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noArrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},arrowAnchor:{control:"select",options:["content","target","mixed"],type:{name:"enum",summary:"'content' | 'target' | 'mixed'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},trigger:{control:"select",options:["click","hover"],type:{name:"enum",summary:"'click' | 'hover'"}},title:{control:"text",type:{name:"string",summary:"string"}},panelLabel:{control:"text",type:{name:"string",summary:"string"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:Co}},c={args:{placement:"bottom",size:"md",offset:"md",open:!0,noArrow:!1,arrowAnchor:"content",disabled:!1,trigger:"click",title:"제목",panelLabel:"라벨",interactive:!0,closable:!1,closeLabel:"닫기"},render:n=>({components:{Popover:r,Button:a},setup(){return{args:n}},template:`<Popover v-bind="args" open>
      <template #trigger><Button label="팝오버" variant="outline" /></template>
      <p>팝오버 내용입니다.</p>
    </Popover>`})},d={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"Popover와 #trigger 슬롯으로 트리거와 패널을 구성합니다. panel-label을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover panel-label="안내">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
    </template>
    <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover panel-label="안내">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
      </template>
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>`})},A={name:"라벨 없음",parameters:{demoPreview:{stack:!1},docs:{description:{story:"panel-label을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover>
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
    </template>
    <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover>
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
      </template>
      <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
    </Popover>`})},f={name:"열린 상태",parameters:{demoPreview:{stack:!1},docs:{description:{story:"open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded=&quot;true&quot;를 함께 지정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover open panel-label="열린 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="filled" color="primary" label="열림" aria-haspopup="dialog" aria-expanded="true" />
    </template>
    <p>정적 데모용 열린 상태입니다.</p>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover open panel-label="열린 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="filled" color="primary" label="열림" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>`})},D={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover size="sm" open panel-label="작은 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />
    </template>
    <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
  </Popover>
  <Popover open panel-label="기본 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="Medium" aria-haspopup="dialog" aria-expanded="true" />
    </template>
    <p>기본 크기 패널입니다.</p>
  </Popover>
  <Popover size="lg" open panel-label="큰 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" size="lg" label="Large" aria-haspopup="dialog" aria-expanded="true" />
    </template>
    <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover size="sm" open panel-label="작은 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
    </Popover>

    <Popover open panel-label="기본 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="Medium" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>기본 크기 패널입니다.</p>
    </Popover>

    <Popover size="lg" open panel-label="큰 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="lg" label="Large" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
    </Popover>`})},b={name:"간격",parameters:{demoPreview:{stack:!0},docs:{description:{story:"offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔패널 사이에 적용됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
  <div class="popover_row">
    <Popover offset="none" open panel-label="none">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="none" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>간격 없음</p>
    </Popover>
    <Popover offset="sm" open panel-label="sm">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="sm" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>좁은 간격</p>
    </Popover>
    <Popover open panel-label="md">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="md" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>기본 간격</p>
    </Popover>
    <Popover offset="lg" open panel-label="lg">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>넓은 간격</p>
    </Popover>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
  <div class="popover_demo-placement" style="min-height: 12rem;">
    <div class="popover_demo-placement-cell-top">
      <Popover placement="top-center" offset-top="lg" open panel-label="offset-top lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>위쪽 간격</p>
      </Popover>
    </div>
    <div class="popover_demo-placement-cell-left">
      <Popover placement="left" offset-left="lg" open panel-label="offset-left lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>왼쪽 간격</p>
      </Popover>
    </div>
    <div class="popover_demo-placement-cell-center">
      <Popover offset-bottom="lg" open panel-label="offset-bottom lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>아래쪽 간격</p>
      </Popover>
    </div>
    <div class="popover_demo-placement-cell-right">
      <Popover placement="right" offset-right="lg" open panel-label="offset-right lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>오른쪽 간격</p>
      </Popover>
    </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="popover_row">
      <Popover offset="none" open panel-label="none">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="none" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>간격 없음</p>
      </Popover>

      <Popover offset="sm" open panel-label="sm">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="sm" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>좁은 간격</p>
      </Popover>

      <Popover open panel-label="md">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="md" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>기본 간격</p>
      </Popover>

      <Popover offset="lg" open panel-label="lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>넓은 간격</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="popover_demo-placement" style="min-height: 12rem;">
      <div class="popover_demo-placement-cell-top">
        <Popover placement="top-center" offset-top="lg" open panel-label="offset-top lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>위쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-left">
        <Popover placement="left" offset-left="lg" open panel-label="offset-left lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>왼쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-center">
        <Popover offset-bottom="lg" open panel-label="offset-bottom lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>아래쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-right">
        <Popover placement="right" offset-right="lg" open panel-label="offset-right lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>오른쪽 간격</p>
        </Popover>
      </div>
    </div>`})},P={name:"제목",parameters:{demoPreview:{stack:!1},docs:{description:{story:"title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover title="배송 안내">
    <template #trigger>
      <Button class="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
    </template>
    <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover title="배송 안내">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
      </template>
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
    </Popover>`})},h={name:"푸터",parameters:{demoPreview:{stack:!1},docs:{description:{story:"#footer 슬롯·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover title="항목 삭제">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
    </template>
    <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" size="sm" label="취소" data-popover-close />
      <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
    </template>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover title="항목 삭제">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
      </template>
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" data-popover-close />
        <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
      </template>
    </Popover>`})},_={name:"호버 트리거",parameters:{demoPreview:{stack:!1},docs:{description:{story:"trigger=&quot;hover&quot;로 마우스 오버·포커스 시 패널을 표시합니다. data-popover-trigger=&quot;hover&quot;와 동일하며, 짧은 설명·용어 정의에 적합합니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <p>
    결제 시
    <Popover trigger="hover" panel-label="에스크로 설명">
      <template #trigger>
        <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
      </template>
      구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
    </Popover>
    서비스를 이용할 수 있습니다.
  </p>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<p>
      결제 시
      <Popover trigger="hover" panel-label="에스크로 설명">
        <template #trigger>
          <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
        </template>
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Popover>
      서비스를 이용할 수 있습니다.
    </p>`})},x={name:"트리거 유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <div class="popover_row">
    <Popover panel-label="Button 트리거">
      <template #trigger>
        <Button class="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
      </template>
      <p>버튼 트리거 예시입니다.</p>
    </Popover>
    <Popover panel-label="Link 트리거">
      <template #trigger>
        <Link class="popover_trigger" label="Link 트리거" aria-haspopup="dialog" />
      </template>
      <p>링크 스타일 트리거입니다.</p>
    </Popover>
    <Popover panel-label="추가 정보">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" icon-only aria-label="정보" aria-haspopup="dialog">
          <template #icon-before>
            <Icon name="info" />
          </template>
        </Button>
      </template>
      <p>아이콘 전용 트리거입니다.</p>
    </Popover>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<div class="popover_row">
      <Popover panel-label="Button 트리거">
        <template #trigger>
          <Button class="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
        </template>
        <p>버튼 트리거 예시입니다.</p>
      </Popover>

      <Popover panel-label="Link 트리거">
        <template #trigger>
          <Link class="popover_trigger" label="Link 트리거" aria-haspopup="dialog" />
        </template>
        <p>링크 스타일 트리거입니다.</p>
      </Popover>

      <Popover panel-label="추가 정보">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" icon-only aria-label="정보" aria-haspopup="dialog">
            <template #icon-before>
              <Icon name="info" />
            </template>
          </Button>
        </template>
        <p>아이콘 전용 트리거입니다.</p>
      </Popover>
    </div>`})},w={name:"배치",parameters:{demoPreview:{stack:!0},docs:{description:{story:"placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. popover_placement-* 클래스와 대응되며, 기본은 트리거 아래·왼쪽 정렬입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <div class="popover_demo-placement">
    <div class="popover_demo-placement-cell-top">
      <Popover placement="top-center" panel-label="위쪽 가운데 배치">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
        </template>
        <p>트리거 위 · 가운데</p>
      </Popover>
    </div>
    <div class="popover_demo-placement-cell-left">
      <Popover placement="left" panel-label="왼쪽 배치">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" />
        </template>
        <p>트리거 왼쪽</p>
      </Popover>
    </div>
    <div class="popover_demo-placement-cell-center">
      <Popover placement="bottom-center" panel-label="아래쪽 가운데 배치">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" />
        </template>
        <p>트리거 아래 · 가운데</p>
      </Popover>
    </div>
    <div class="popover_demo-placement-cell-right">
      <Popover placement="right" panel-label="오른쪽 배치">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" />
        </template>
        <p>트리거 오른쪽</p>
      </Popover>
    </div>
  </div>
  <div class="popover_row" style="width: 100%; justify-content: space-between;">
    <Popover placement="top" panel-label="위쪽 왼쪽 정렬">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="위 · 왼쪽 정렬" aria-haspopup="dialog" />
      </template>
      <p>패널 왼쪽 정렬</p>
    </Popover>
    <Popover panel-label="아래쪽 왼쪽 정렬">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="아래 · 왼쪽 정렬" aria-haspopup="dialog" />
      </template>
      <p>기본 배치</p>
    </Popover>
    <Popover placement="end" panel-label="오른쪽 정렬">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="아래 · 오른쪽 정렬" aria-haspopup="dialog" />
      </template>
      <p>패널 오른쪽 정렬</p>
    </Popover>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<div class="popover_demo-placement">
      <div class="popover_demo-placement-cell-top">
        <Popover placement="top-center" panel-label="위쪽 가운데 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
          </template>
          <p>트리거 위 · 가운데</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-left">
        <Popover placement="left" panel-label="왼쪽 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" />
          </template>
          <p>트리거 왼쪽</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-center">
        <Popover placement="bottom-center" panel-label="아래쪽 가운데 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" />
          </template>
          <p>트리거 아래 · 가운데</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-right">
        <Popover placement="right" panel-label="오른쪽 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" />
          </template>
          <p>트리거 오른쪽</p>
        </Popover>
      </div>
    </div>

    <div class="popover_row" style="width: 100%; justify-content: space-between;">
      <Popover placement="top" panel-label="위쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="위 · 왼쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>패널 왼쪽 정렬</p>
      </Popover>

      <Popover panel-label="아래쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="아래 · 왼쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>기본 배치</p>
      </Popover>

      <Popover placement="end" panel-label="오른쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="아래 · 오른쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>패널 오른쪽 정렬</p>
      </Popover>
    </div>`})},y={name:"폼",parameters:{demoPreview:{stack:!1},docs:{description:{story:"Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
import Textarea from '@uxkm/ui/components/Textarea.vue';
<\/script>

<template>
  <Popover title="빠른 메모">
    <template #trigger>
      <Button class="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
    </template>
    <div class="form_field">
      <label class="form_label" for="popover-memo-input">내용</label>
      <Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" />
    </div>
    <template #footer>
      <Button variant="ghost" size="sm" label="취소" data-popover-close />
      <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close />
    </template>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover title="빠른 메모">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
      </template>
      <div class="form_field">
        <label class="form_label" for="popover-memo-input">내용</label>
        <Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" />
      </div>
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" data-popover-close />
        <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close />
      </template>
    </Popover>`})},E={name:"화살표 기준",parameters:{demoPreview:{stack:!0},docs:{description:{story:"arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 패널·화살표를 독립 조합합니다. target은 패널 CSS·화살표 JS, mixed는 패널·화살표 모두 JS로 트리거 기준 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
  <div class="popover_row" style="align-items: flex-start;">
    <Popover open panel-label="content">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
    </Popover>
    <Popover open arrow-anchor="target" panel-label="target">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
    </Popover>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
  <div class="popover_row" style="align-items: flex-start;">
    <Popover open arrow-anchor="target" arrow-target-align="left" panel-label="left">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>트리거 왼쪽을 가리킵니다.</p>
    </Popover>
    <Popover open arrow-anchor="target" panel-label="center">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>트리거 가운데를 가리킵니다.</p>
    </Popover>
    <Popover open arrow-anchor="target" arrow-target-align="right" panel-label="right">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>트리거 오른쪽을 가리킵니다.</p>
    </Popover>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
  <div class="popover_row" style="align-items: center;">
    <Popover placement="left" open arrow-anchor="target" arrow-target-align="top" panel-label="top">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>트리거 위쪽을 가리킵니다.</p>
    </Popover>
    <Popover placement="left" open arrow-anchor="target" panel-label="center">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>트리거 가운데를 가리킵니다.</p>
    </Popover>
    <Popover placement="left" open arrow-anchor="target" arrow-target-align="bottom" panel-label="bottom">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>트리거 아래쪽을 가리킵니다.</p>
    </Popover>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우</p>
  <div class="popover_row" style="align-items: flex-start;">
    <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" panel-label="가운데 · ←">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 가운데, 화살표 트리거 왼쪽.</p>
    </Popover>
    <Popover open arrow-anchor="mixed" panel-align="center" panel-label="가운데 · ●">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널·화살표 모두 트리거 가운데.</p>
    </Popover>
    <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" panel-label="가운데 · →">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 가운데, 화살표 트리거 오른쪽.</p>
    </Popover>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 왼쪽 · 화살표 조합</p>
  <div class="popover_row" style="align-items: flex-start;">
    <Popover open arrow-anchor="mixed" arrow-target-align="left" panel-label="왼쪽 · ←">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 왼쪽 정렬, 화살표 왼쪽.</p>
    </Popover>
    <Popover open arrow-anchor="mixed" panel-label="왼쪽 · ●">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 왼쪽, 화살표 가운데.</p>
    </Popover>
    <Popover open arrow-anchor="mixed" arrow-target-align="right" panel-label="왼쪽 · →">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 왼쪽, 화살표 오른쪽.</p>
    </Popover>
  </div>
  <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 오른쪽 · 화살표 조합</p>
  <div class="popover_row" style="align-items: flex-start;">
    <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" panel-label="오른쪽 · ←">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 오른쪽 정렬, 화살표 왼쪽.</p>
    </Popover>
    <Popover open arrow-anchor="mixed" panel-align="end" panel-label="오른쪽 · ●">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 오른쪽, 화살표 가운데.</p>
    </Popover>
    <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" panel-label="오른쪽 · →">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>패널 오른쪽, 화살표 오른쪽.</p>
    </Popover>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open panel-label="content">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" panel-label="target">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="target" arrow-target-align="left" panel-label="left">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 왼쪽을 가리킵니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" panel-label="center">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 가운데를 가리킵니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" arrow-target-align="right" panel-label="right">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 오른쪽을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="popover_row" style="align-items: center;">
      <Popover placement="left" open arrow-anchor="target" arrow-target-align="top" panel-label="top">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 위쪽을 가리킵니다.</p>
      </Popover>

      <Popover placement="left" open arrow-anchor="target" panel-label="center">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 가운데를 가리킵니다.</p>
      </Popover>

      <Popover placement="left" open arrow-anchor="target" arrow-target-align="bottom" panel-label="bottom">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 아래쪽을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" panel-label="가운데 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 가운데, 화살표 트리거 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="center" panel-label="가운데 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널·화살표 모두 트리거 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" panel-label="가운데 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 가운데, 화살표 트리거 오른쪽.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 왼쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" arrow-target-align="left" panel-label="왼쪽 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽 정렬, 화살표 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-label="왼쪽 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽, 화살표 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" arrow-target-align="right" panel-label="왼쪽 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽, 화살표 오른쪽.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 오른쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" panel-label="오른쪽 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽 정렬, 화살표 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="end" panel-label="오른쪽 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽, 화살표 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" panel-label="오른쪽 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽, 화살표 오른쪽.</p>
      </Popover>
    </div>`})},k={name:"화살표 없음",parameters:{demoPreview:{stack:!1},docs:{description:{story:"no-arrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Popover from '@uxkm/ui/components/Popover.vue';
<\/script>

<template>
  <Popover no-arrow panel-label="화살표 없는 Popover">
    <template #trigger>
      <Button class="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
    </template>
    <p>화살표가 표시되지 않는 패널입니다.</p>
  </Popover>
</template>`,language:"vue"}}},render:()=>({components:{Popover:r,Button:a,Icon:t,Link:p,Textarea:u},template:`<Popover no-arrow panel-label="화살표 없는 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
      </template>
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>`})};var J,V,R;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    placement: "bottom",
    size: "md",
    offset: "md",
    open: true,
    noArrow: false,
    arrowAnchor: "content",
    disabled: false,
    trigger: "click",
    title: "제목",
    panelLabel: "라벨",
    interactive: true,
    closable: false,
    closeLabel: "닫기"
  },
  render: args => ({
    components: {
      Popover,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Popover v-bind="args" open>
      <template #trigger><Button label="팝오버" variant="outline" /></template>
      <p>팝오버 내용입니다.</p>
    </Popover>\`
  })
}`,...(R=(V=c.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var U,W,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Popover와 #trigger 슬롯으로 트리거와 패널을 구성합니다. panel-label을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover panel-label=\\"안내\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"Popover 열기\\" aria-haspopup=\\"dialog\\" />\\n    </template>\\n    <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover panel-label="안내">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
      </template>
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>\`
  })
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var K,Q,X;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "라벨 없음",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "panel-label을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover>\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"라벨 없음\\" aria-haspopup=\\"dialog\\" />\\n    </template>\\n    <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover>
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
      </template>
      <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
    </Popover>\`
  })
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "열린 상태",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded=&quot;true&quot;를 함께 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover open panel-label=\\"열린 Popover\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"filled\\" color=\\"primary\\" label=\\"열림\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n    </template>\\n    <p>정적 데모용 열린 상태입니다.</p>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover open panel-label="열린 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="filled" color="primary" label="열림" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>\`
  })
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,ae,te;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover size=\\"sm\\" open panel-label=\\"작은 Popover\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"Small\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n    </template>\\n    <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>\\n  </Popover>\\n  <Popover open panel-label=\\"기본 Popover\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"Medium\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n    </template>\\n    <p>기본 크기 패널입니다.</p>\\n  </Popover>\\n  <Popover size=\\"lg\\" open panel-label=\\"큰 Popover\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"lg\\" label=\\"Large\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n    </template>\\n    <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover size="sm" open panel-label="작은 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
    </Popover>

    <Popover open panel-label="기본 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="Medium" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>기본 크기 패널입니다.</p>
    </Popover>

    <Popover size="lg" open panel-label="큰 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" size="lg" label="Large" aria-haspopup="dialog" aria-expanded="true" />
      </template>
      <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
    </Popover>\`
  })
}`,...(te=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,pe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "간격",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔패널 사이에 적용됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <p class=\\"form_field-hint\\" style=\\"margin-bottom: var(--space-md);\\">전 방향 동일</p>\\n  <div class=\\"popover_row\\">\\n    <Popover offset=\\"none\\" open panel-label=\\"none\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"none\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>간격 없음</p>\\n    </Popover>\\n    <Popover offset=\\"sm\\" open panel-label=\\"sm\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"sm\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>좁은 간격</p>\\n    </Popover>\\n    <Popover open panel-label=\\"md\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"md\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>기본 간격</p>\\n    </Popover>\\n    <Popover offset=\\"lg\\" open panel-label=\\"lg\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"lg\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>넓은 간격</p>\\n    </Popover>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">방향별 (offset-* · placement)</p>\\n  <div class=\\"popover_demo-placement\\" style=\\"min-height: 12rem;\\">\\n    <div class=\\"popover_demo-placement-cell-top\\">\\n      <Popover placement=\\"top-center\\" offset-top=\\"lg\\" open panel-label=\\"offset-top lg\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"위\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n        </template>\\n        <p>위쪽 간격</p>\\n      </Popover>\\n    </div>\\n    <div class=\\"popover_demo-placement-cell-left\\">\\n      <Popover placement=\\"left\\" offset-left=\\"lg\\" open panel-label=\\"offset-left lg\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"왼쪽\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n        </template>\\n        <p>왼쪽 간격</p>\\n      </Popover>\\n    </div>\\n    <div class=\\"popover_demo-placement-cell-center\\">\\n      <Popover offset-bottom=\\"lg\\" open panel-label=\\"offset-bottom lg\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"아래\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n        </template>\\n        <p>아래쪽 간격</p>\\n      </Popover>\\n    </div>\\n    <div class=\\"popover_demo-placement-cell-right\\">\\n      <Popover placement=\\"right\\" offset-right=\\"lg\\" open panel-label=\\"offset-right lg\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"오른쪽\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n        </template>\\n        <p>오른쪽 간격</p>\\n      </Popover>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="popover_row">
      <Popover offset="none" open panel-label="none">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="none" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>간격 없음</p>
      </Popover>

      <Popover offset="sm" open panel-label="sm">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="sm" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>좁은 간격</p>
      </Popover>

      <Popover open panel-label="md">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="md" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>기본 간격</p>
      </Popover>

      <Popover offset="lg" open panel-label="lg">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>넓은 간격</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="popover_demo-placement" style="min-height: 12rem;">
      <div class="popover_demo-placement-cell-top">
        <Popover placement="top-center" offset-top="lg" open panel-label="offset-top lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>위쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-left">
        <Popover placement="left" offset-left="lg" open panel-label="offset-left lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>왼쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-center">
        <Popover offset-bottom="lg" open panel-label="offset-bottom lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>아래쪽 간격</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-right">
        <Popover placement="right" offset-right="lg" open panel-label="offset-right lg">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" aria-expanded="true" />
          </template>
          <p>오른쪽 간격</p>
        </Popover>
      </div>
    </div>\`
  })
}`,...(pe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};var ue,le,ie;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "제목",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover title=\\"배송 안내\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"ghost\\" label=\\"도움말\\" aria-haspopup=\\"dialog\\" />\\n    </template>\\n    <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover title="배송 안내">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
      </template>
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
    </Popover>\`
  })
}`,...(ie=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,Ce,me;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "푸터",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "#footer 슬롯·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover title=\\"항목 삭제\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"삭제 확인\\" aria-haspopup=\\"dialog\\" />\\n    </template>\\n    <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>\\n    <template #footer>\\n      <Button variant=\\"ghost\\" size=\\"sm\\" label=\\"취소\\" data-popover-close />\\n      <Button variant=\\"filled\\" color=\\"danger\\" size=\\"sm\\" label=\\"삭제\\" data-popover-close />\\n    </template>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover title="항목 삭제">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
      </template>
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" data-popover-close />
        <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close />
      </template>
    </Popover>\`
  })
}`,...(me=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:me.source}}};var ge,ve,Be;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "호버 트리거",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "trigger=&quot;hover&quot;로 마우스 오버·포커스 시 패널을 표시합니다. data-popover-trigger=&quot;hover&quot;와 동일하며, 짧은 설명·용어 정의에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    결제 시\\n    <Popover trigger=\\"hover\\" panel-label=\\"에스크로 설명\\">\\n      <template #trigger>\\n        <Link class=\\"popover_trigger\\" label=\\"에스크로\\" aria-haspopup=\\"dialog\\" />\\n      </template>\\n      구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.\\n    </Popover>\\n    서비스를 이용할 수 있습니다.\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<p>
      결제 시
      <Popover trigger="hover" panel-label="에스크로 설명">
        <template #trigger>
          <Link class="popover_trigger" label="에스크로" aria-haspopup="dialog" />
        </template>
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Popover>
      서비스를 이용할 수 있습니다.
    </p>\`
  })
}`,...(Be=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var ce,de,Ae;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"popover_row\\">\\n    <Popover panel-label=\\"Button 트리거\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"filled\\" color=\\"primary\\" label=\\"Button\\" aria-haspopup=\\"dialog\\" />\\n      </template>\\n      <p>버튼 트리거 예시입니다.</p>\\n    </Popover>\\n    <Popover panel-label=\\"Link 트리거\\">\\n      <template #trigger>\\n        <Link class=\\"popover_trigger\\" label=\\"Link 트리거\\" aria-haspopup=\\"dialog\\" />\\n      </template>\\n      <p>링크 스타일 트리거입니다.</p>\\n    </Popover>\\n    <Popover panel-label=\\"추가 정보\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"ghost\\" icon-only aria-label=\\"정보\\" aria-haspopup=\\"dialog\\">\\n          <template #icon-before>\\n            <Icon name=\\"info\\" />\\n          </template>\\n        </Button>\\n      </template>\\n      <p>아이콘 전용 트리거입니다.</p>\\n    </Popover>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<div class="popover_row">
      <Popover panel-label="Button 트리거">
        <template #trigger>
          <Button class="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
        </template>
        <p>버튼 트리거 예시입니다.</p>
      </Popover>

      <Popover panel-label="Link 트리거">
        <template #trigger>
          <Link class="popover_trigger" label="Link 트리거" aria-haspopup="dialog" />
        </template>
        <p>링크 스타일 트리거입니다.</p>
      </Popover>

      <Popover panel-label="추가 정보">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" icon-only aria-label="정보" aria-haspopup="dialog">
            <template #icon-before>
              <Icon name="info" />
            </template>
          </Button>
        </template>
        <p>아이콘 전용 트리거입니다.</p>
      </Popover>
    </div>\`
  })
}`,...(Ae=(de=x.parameters)==null?void 0:de.docs)==null?void 0:Ae.source}}};var fe,De,be;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "배치",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. popover_placement-* 클래스와 대응되며, 기본은 트리거 아래·왼쪽 정렬입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"popover_demo-placement\\">\\n    <div class=\\"popover_demo-placement-cell-top\\">\\n      <Popover placement=\\"top-center\\" panel-label=\\"위쪽 가운데 배치\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"위\\" aria-haspopup=\\"dialog\\" />\\n        </template>\\n        <p>트리거 위 · 가운데</p>\\n      </Popover>\\n    </div>\\n    <div class=\\"popover_demo-placement-cell-left\\">\\n      <Popover placement=\\"left\\" panel-label=\\"왼쪽 배치\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"왼쪽\\" aria-haspopup=\\"dialog\\" />\\n        </template>\\n        <p>트리거 왼쪽</p>\\n      </Popover>\\n    </div>\\n    <div class=\\"popover_demo-placement-cell-center\\">\\n      <Popover placement=\\"bottom-center\\" panel-label=\\"아래쪽 가운데 배치\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"아래\\" aria-haspopup=\\"dialog\\" />\\n        </template>\\n        <p>트리거 아래 · 가운데</p>\\n      </Popover>\\n    </div>\\n    <div class=\\"popover_demo-placement-cell-right\\">\\n      <Popover placement=\\"right\\" panel-label=\\"오른쪽 배치\\">\\n        <template #trigger>\\n          <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"오른쪽\\" aria-haspopup=\\"dialog\\" />\\n        </template>\\n        <p>트리거 오른쪽</p>\\n      </Popover>\\n    </div>\\n  </div>\\n  <div class=\\"popover_row\\" style=\\"width: 100%; justify-content: space-between;\\">\\n    <Popover placement=\\"top\\" panel-label=\\"위쪽 왼쪽 정렬\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"ghost\\" label=\\"위 · 왼쪽 정렬\\" aria-haspopup=\\"dialog\\" />\\n      </template>\\n      <p>패널 왼쪽 정렬</p>\\n    </Popover>\\n    <Popover panel-label=\\"아래쪽 왼쪽 정렬\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"ghost\\" label=\\"아래 · 왼쪽 정렬\\" aria-haspopup=\\"dialog\\" />\\n      </template>\\n      <p>기본 배치</p>\\n    </Popover>\\n    <Popover placement=\\"end\\" panel-label=\\"오른쪽 정렬\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"ghost\\" label=\\"아래 · 오른쪽 정렬\\" aria-haspopup=\\"dialog\\" />\\n      </template>\\n      <p>패널 오른쪽 정렬</p>\\n    </Popover>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<div class="popover_demo-placement">
      <div class="popover_demo-placement-cell-top">
        <Popover placement="top-center" panel-label="위쪽 가운데 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
          </template>
          <p>트리거 위 · 가운데</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-left">
        <Popover placement="left" panel-label="왼쪽 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" />
          </template>
          <p>트리거 왼쪽</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-center">
        <Popover placement="bottom-center" panel-label="아래쪽 가운데 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" />
          </template>
          <p>트리거 아래 · 가운데</p>
        </Popover>
      </div>

      <div class="popover_demo-placement-cell-right">
        <Popover placement="right" panel-label="오른쪽 배치">
          <template #trigger>
            <Button class="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" />
          </template>
          <p>트리거 오른쪽</p>
        </Popover>
      </div>
    </div>

    <div class="popover_row" style="width: 100%; justify-content: space-between;">
      <Popover placement="top" panel-label="위쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="위 · 왼쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>패널 왼쪽 정렬</p>
      </Popover>

      <Popover panel-label="아래쪽 왼쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="아래 · 왼쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>기본 배치</p>
      </Popover>

      <Popover placement="end" panel-label="오른쪽 정렬">
        <template #trigger>
          <Button class="popover_trigger" variant="ghost" label="아래 · 오른쪽 정렬" aria-haspopup="dialog" />
        </template>
        <p>패널 오른쪽 정렬</p>
      </Popover>
    </div>\`
  })
}`,...(be=(De=w.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var Pe,he,_e;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "폼",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\\n<\/script>\\n\\n<template>\\n  <Popover title=\\"빠른 메모\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"메모 추가\\" aria-haspopup=\\"dialog\\" />\\n    </template>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_label\\" for=\\"popover-memo-input\\">내용</label>\\n      <Textarea id=\\"popover-memo-input\\" :rows=\\"3\\" placeholder=\\"메모를 입력하세요\\" />\\n    </div>\\n    <template #footer>\\n      <Button variant=\\"ghost\\" size=\\"sm\\" label=\\"취소\\" data-popover-close />\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"저장\\" data-popover-close />\\n    </template>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover title="빠른 메모">
      <template #trigger>
        <Button class="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
      </template>
      <div class="form_field">
        <label class="form_label" for="popover-memo-input">내용</label>
        <Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" />
      </div>
      <template #footer>
        <Button variant="ghost" size="sm" label="취소" data-popover-close />
        <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close />
      </template>
    </Popover>\`
  })
}`,...(_e=(he=y.parameters)==null?void 0:he.docs)==null?void 0:_e.source}}};var xe,we,ye;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "화살표 기준",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 패널·화살표를 독립 조합합니다. target은 패널 CSS·화살표 JS, mixed는 패널·화살표 모두 JS로 트리거 기준 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <p class=\\"form_field-hint\\" style=\\"margin-bottom: var(--space-md);\\">기준 비교</p>\\n  <div class=\\"popover_row\\" style=\\"align-items: flex-start;\\">\\n    <Popover open panel-label=\\"content\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"target\\" panel-label=\\"target\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>\\n    </Popover>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">target — 좌 · 가운데 · 우 (아래 배치)</p>\\n  <div class=\\"popover_row\\" style=\\"align-items: flex-start;\\">\\n    <Popover open arrow-anchor=\\"target\\" arrow-target-align=\\"left\\" panel-label=\\"left\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>트리거 왼쪽을 가리킵니다.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"target\\" panel-label=\\"center\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>트리거 가운데를 가리킵니다.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"target\\" arrow-target-align=\\"right\\" panel-label=\\"right\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>트리거 오른쪽을 가리킵니다.</p>\\n    </Popover>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>\\n  <div class=\\"popover_row\\" style=\\"align-items: center;\\">\\n    <Popover placement=\\"left\\" open arrow-anchor=\\"target\\" arrow-target-align=\\"top\\" panel-label=\\"top\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"트리거\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>트리거 위쪽을 가리킵니다.</p>\\n    </Popover>\\n    <Popover placement=\\"left\\" open arrow-anchor=\\"target\\" panel-label=\\"center\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"트리거\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>트리거 가운데를 가리킵니다.</p>\\n    </Popover>\\n    <Popover placement=\\"left\\" open arrow-anchor=\\"target\\" arrow-target-align=\\"bottom\\" panel-label=\\"bottom\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" label=\\"트리거\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>트리거 아래쪽을 가리킵니다.</p>\\n    </Popover>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우</p>\\n  <div class=\\"popover_row\\" style=\\"align-items: flex-start;\\">\\n    <Popover open arrow-anchor=\\"mixed\\" panel-align=\\"center\\" arrow-target-align=\\"left\\" panel-label=\\"가운데 · ←\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 가운데, 화살표 트리거 왼쪽.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"mixed\\" panel-align=\\"center\\" panel-label=\\"가운데 · ●\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널·화살표 모두 트리거 가운데.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"mixed\\" panel-align=\\"center\\" arrow-target-align=\\"right\\" panel-label=\\"가운데 · →\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 가운데, 화살표 트리거 오른쪽.</p>\\n    </Popover>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">mixed — 패널 왼쪽 · 화살표 조합</p>\\n  <div class=\\"popover_row\\" style=\\"align-items: flex-start;\\">\\n    <Popover open arrow-anchor=\\"mixed\\" arrow-target-align=\\"left\\" panel-label=\\"왼쪽 · ←\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 왼쪽 정렬, 화살표 왼쪽.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"mixed\\" panel-label=\\"왼쪽 · ●\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 왼쪽, 화살표 가운데.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"mixed\\" arrow-target-align=\\"right\\" panel-label=\\"왼쪽 · →\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 왼쪽, 화살표 오른쪽.</p>\\n    </Popover>\\n  </div>\\n  <p class=\\"form_field-hint\\" style=\\"margin: var(--space-lg) 0 var(--space-md);\\">mixed — 패널 오른쪽 · 화살표 조합</p>\\n  <div class=\\"popover_row\\" style=\\"align-items: flex-start;\\">\\n    <Popover open arrow-anchor=\\"mixed\\" panel-align=\\"end\\" arrow-target-align=\\"left\\" panel-label=\\"오른쪽 · ←\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 오른쪽 정렬, 화살표 왼쪽.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"mixed\\" panel-align=\\"end\\" panel-label=\\"오른쪽 · ●\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 오른쪽, 화살표 가운데.</p>\\n    </Popover>\\n    <Popover open arrow-anchor=\\"mixed\\" panel-align=\\"end\\" arrow-target-align=\\"right\\" panel-label=\\"오른쪽 · →\\">\\n      <template #trigger>\\n        <Button class=\\"popover_trigger\\" variant=\\"outline\\" size=\\"sm\\" label=\\"S\\" aria-haspopup=\\"dialog\\" aria-expanded=\\"true\\" />\\n      </template>\\n      <p>패널 오른쪽, 화살표 오른쪽.</p>\\n    </Popover>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open panel-label="content">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" panel-label="target">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="target" arrow-target-align="left" panel-label="left">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 왼쪽을 가리킵니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" panel-label="center">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 가운데를 가리킵니다.</p>
      </Popover>

      <Popover open arrow-anchor="target" arrow-target-align="right" panel-label="right">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 오른쪽을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="popover_row" style="align-items: center;">
      <Popover placement="left" open arrow-anchor="target" arrow-target-align="top" panel-label="top">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 위쪽을 가리킵니다.</p>
      </Popover>

      <Popover placement="left" open arrow-anchor="target" panel-label="center">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 가운데를 가리킵니다.</p>
      </Popover>

      <Popover placement="left" open arrow-anchor="target" arrow-target-align="bottom" panel-label="bottom">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" label="트리거" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>트리거 아래쪽을 가리킵니다.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" panel-label="가운데 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 가운데, 화살표 트리거 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="center" panel-label="가운데 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널·화살표 모두 트리거 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" panel-label="가운데 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 가운데, 화살표 트리거 오른쪽.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 왼쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" arrow-target-align="left" panel-label="왼쪽 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽 정렬, 화살표 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-label="왼쪽 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽, 화살표 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" arrow-target-align="right" panel-label="왼쪽 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 왼쪽, 화살표 오른쪽.</p>
      </Popover>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 오른쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
      <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="left" panel-label="오른쪽 · ←">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽 정렬, 화살표 왼쪽.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="end" panel-label="오른쪽 · ●">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽, 화살표 가운데.</p>
      </Popover>
      <Popover open arrow-anchor="mixed" panel-align="end" arrow-target-align="right" panel-label="오른쪽 · →">
        <template #trigger>
          <Button class="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
        </template>
        <p>패널 오른쪽, 화살표 오른쪽.</p>
      </Popover>
    </div>\`
  })
}`,...(ye=(we=E.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ee,ke,ze;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "화살표 없음",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "no-arrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Popover from '@uxkm/ui/components/Popover.vue';\\n<\/script>\\n\\n<template>\\n  <Popover no-arrow panel-label=\\"화살표 없는 Popover\\">\\n    <template #trigger>\\n      <Button class=\\"popover_trigger\\" variant=\\"ghost\\" label=\\"화살표 없음\\" aria-haspopup=\\"dialog\\" />\\n    </template>\\n    <p>화살표가 표시되지 않는 패널입니다.</p>\\n  </Popover>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Popover,
      Button,
      Icon,
      Link,
      Textarea
    },
    template: \`<Popover no-arrow panel-label="화살표 없는 Popover">
      <template #trigger>
        <Button class="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
      </template>
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>\`
  })
}`,...(ze=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};const Po=["Playground","Basic","NoLabel","Open","Size","Offset","Title","Footer","Hover","Trigger","Placement","Form","ArrowAnchor","NoArrow"];export{E as ArrowAnchor,d as Basic,h as Footer,y as Form,_ as Hover,k as NoArrow,A as NoLabel,b as Offset,f as Open,w as Placement,c as Playground,D as Size,P as Title,x as Trigger,Po as __namedExportsOrder,bo as default};
