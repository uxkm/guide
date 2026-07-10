import{u as le,b as ie,c as v,k as d,r as l,h as A,j as ce,m as _,e as pe,q as E,n as me,f as i,o as y,t as we,a as Be}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as t}from"./Button-C3SXv-sJ.js";import{_ as n}from"./Icon-D97OEunV.js";import{r as Ce,u as ge}from"./useRipple-oORGvIsP.js";import{k as fe}from"./useDemoCode-B9b0dRAo.js";import{r as be,a as De}from"./ripple-api-C5ZjLJl-.js";const ve=["id","data-drawer-backdrop","data-drawer-open-on-load","hidden"],ye={key:0,class:"drawer_header","data-demo-slot":"header"},ke={class:"drawer_body","data-demo-slot":"default"},he={key:1,class:"drawer_footer","data-demo-slot":"footer"},a=Object.assign({inheritAttrs:!1},{__name:"Drawer",props:{ripple:Ce,id:{type:String,required:!0},size:{type:String,default:"md",validator:r=>["sm","md","lg"].includes(r)},placement:{type:String,default:"right",validator:r=>["left","right","top","bottom"].includes(r)},noBackdrop:Boolean,openOnLoad:Boolean,title:String,open:Boolean},setup(r){const o=r,{rippleAttrs:ne}=ge(o);le();const u=ie(),k=Be(null),h=`${o.id}-title`;fe(o,k,u);const oe=i(()=>({left:"drawer_placement-left",right:"drawer_placement-right",top:"drawer_placement-top",bottom:"drawer_placement-bottom"})[o.placement]),ue=i(()=>{const e=["drawer_panel",oe.value];return o.size==="sm"&&e.push("drawer_sm"),o.size==="lg"&&e.push("drawer_lg"),e}),se=i(()=>{const e=["drawer"];return o.open&&e.push("is-open"),u.class&&e.push(u.class),e}),de=i(()=>{const{class:e,...s}=u;return s});return(e,s)=>(y(),v("div",_({ref_key:"rootRef",ref:k,id:r.id,class:se.value,"data-drawer":"","data-drawer-backdrop":r.noBackdrop?"false":void 0,"data-drawer-open-on-load":r.openOnLoad?"true":void 0,role:"dialog","aria-modal":"true","aria-labelledby":h,tabindex:"-1",hidden:!r.open||void 0},de.value),[s[0]||(s[0]=d("div",{class:"drawer_backdrop","data-drawer-close":"","aria-hidden":"true"},null,-1)),d("div",{class:me(ue.value)},[e.$slots.header||r.title?(y(),v("div",ye,[l(e.$slots,"header",{},()=>[d("h2",{class:"drawer_title",id:h},we(r.title),1)]),l(e.$slots,"extra"),A(t,_({variant:"ghost","icon-only":"",class:"drawer_close","data-drawer-close":"","aria-label":"닫기"},pe(ne)),{"icon-before":ce(()=>[A(n,{name:"close",size:"sm",class:"drawer_close-icon"})]),_:1},16)])):E("",!0),d("div",ke,[l(e.$slots,"default")]),e.$slots.footer?(y(),v("div",he,[l(e.$slots,"footer")])):E("",!0)],2)],16,ve))}}),Ae=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_e=[{name:"id",type:"string",default:"—",description:"루트 id (필수)"},{name:"title",type:"string",default:"—",description:"패널 제목 (drawer_title)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"drawer_sm · drawer_lg"},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",default:"right",description:"drawer_placement-*"},{name:"no-backdrop",type:"boolean",default:"false",description:'data-drawer-backdrop="false"'},{name:"open-on-load",type:"boolean",default:"false",description:'data-drawer-open-on-load="true"'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open)"},be],Ee=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],xe=[{name:"header",description:"헤더 (title 대체)"},{name:"extra",description:"헤더 보조 영역 (drawer_extra)"},{name:"default",description:"본문 (drawer_body)"},{name:"footer",description:"하단 액션 (drawer_footer)"}],ze=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Pe=[{name:"drawer · drawer_backdrop · drawer_panel",description:"루트·백드롭·패널"},{name:"drawer_header · drawer_title · drawer_extra · drawer_close",description:"헤더 파트"},{name:"drawer_body · drawer_footer",description:"본문·푸터"},{name:"drawer_placement-left · drawer_placement-right · drawer_placement-top · drawer_placement-bottom",description:"슬라이드 방향"},{name:"drawer_sm · drawer_lg",description:"패널 크기"},{name:"data-drawer · data-drawer-trigger · data-drawer-close",description:"JS 연동 속성"},{name:"data-drawer-open-on-load",description:"페이지 로드 후 자동 열기"},{name:"is-open · is-opening · is-closing · hidden",description:"열림·닫힘·애니메이션 상태"},...De],Fe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Se=[{name:"--drawer-z-index",default:"250",description:"레이어 순서"},{name:"--drawer-width · --drawer-width-sm · --drawer-width-lg",default:"24rem · 18rem · 36rem",description:"좌·우 패널 너비"},{name:"--drawer-height · --drawer-height-sm · --drawer-height-lg",default:"18rem · 14rem · 26rem",description:"상·하 패널 높이"},{name:"--drawer-panel-duration-x · --drawer-panel-duration-y",default:"0.32s · 0.36s",description:"좌·우 / 상·하 슬라이드 시간"},{name:"--drawer-panel-easing-x · --drawer-panel-easing-y",default:"cubic-bezier(0.32, 0.72, 0, 1) · cubic-bezier(0.33, 1, 0.68, 1)",description:"방향별 이징"}],Ie=[{title:"API · Props",tables:[{columns:Ae,rows:_e,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Ee,rows:xe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ze,rows:Pe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Fe,rows:Se,codeColumn:"name"}]}],Te={title:"Components/피드백/Drawer",id:"components-drawer",component:a,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},placement:{control:"select",options:["left","right","top","bottom"],type:{name:"enum",summary:"'left' | 'right' | 'top' | 'bottom'"}},noBackdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},openOnLoad:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:Ie}},c={args:{id:"story-drawer",size:"md",placement:"right",noBackdrop:!1,openOnLoad:!1,title:"제목",open:!0},render:r=>({components:{Drawer:a},setup(){return{args:r}},template:`<Drawer v-bind="args" id="story-drawer" title="드로어" open placement="right">
      <p>드로어 내용입니다.</p>
    </Drawer>`})},p={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:'<Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />'})},m={name:"위치",parameters:{demoPreview:{stack:!0},docs:{description:{story:"drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
    <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
    <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
    <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:`<div class="drawer_demo-row">
      <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
      <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
      <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
      <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
    </div>`})},w={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="drawer_demo-row">
    <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
    <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
    <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:`<div class="drawer_demo-row">
      <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
      <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
      <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
    </div>`})},B={name:"헤더·푸터",parameters:{demoPreview:{stack:!1},docs:{description:{story:"drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:'<Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />'})},C={name:"헤더 추가 영역",parameters:{demoPreview:{stack:!1},docs:{description:{story:"drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:'<Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />'})},g={name:"메뉴",parameters:{demoPreview:{stack:!1},docs:{description:{story:"Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
    <template #icon-before>
      <Icon name="menu" />
    </template>
  </Button>
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:`<Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
      <template #icon-before><Icon name="menu" /></template>
    </Button>`})},f={name:"로드 시 자동 열기 (옵션)",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-drawer-open-on-load=&quot;true&quot;를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다."},source:{code:`<template>
  <p class="form_field-hint">아래 예시는 옵션 동작 확인용입니다.</p>
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:'<p class="form_field-hint">아래 예시는 옵션 동작 확인용입니다.</p>'})},b={name:"중첩 Drawer",parameters:{demoPreview:{stack:!1},docs:{description:{story:"열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. Esc는 가장 위에 열린 패널부터 닫습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:'<Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />'})},D={name:"백드롭 없음",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
</template>`,language:"vue"}}},render:()=>({components:{Drawer:a,Button:t,Icon:n},template:'<Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />'})};var x,z,P;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "story-drawer",
    size: "md",
    placement: "right",
    noBackdrop: false,
    openOnLoad: false,
    title: "제목",
    open: true
  },
  render: args => ({
    components: {
      Drawer
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Drawer v-bind="args" id="story-drawer" title="드로어" open placement="right">
      <p>드로어 내용입니다.</p>
    </Drawer>\`
  })
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var F,S,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"Drawer 열기\\" data-drawer-trigger=\\"#drawer-basic\\" aria-controls=\\"drawer-basic\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />\`
  })
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var O,L,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "위치",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"drawer_demo-row\\">\\n    <Button variant=\\"outline\\" label=\\"왼쪽\\" data-drawer-trigger=\\"#drawer-place-left\\" aria-controls=\\"drawer-place-left\\" />\\n    <Button variant=\\"outline\\" label=\\"오른쪽\\" data-drawer-trigger=\\"#drawer-place-right\\" aria-controls=\\"drawer-place-right\\" />\\n    <Button variant=\\"outline\\" label=\\"위\\" data-drawer-trigger=\\"#drawer-place-top\\" aria-controls=\\"drawer-place-top\\" />\\n    <Button variant=\\"outline\\" label=\\"아래\\" data-drawer-trigger=\\"#drawer-place-bottom\\" aria-controls=\\"drawer-place-bottom\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<div class="drawer_demo-row">
      <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
      <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
      <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
      <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
    </div>\`
  })
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var $,N,M;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"drawer_demo-row\\">\\n    <Button variant=\\"outline\\" size=\\"sm\\" label=\\"Small\\" data-drawer-trigger=\\"#drawer-size-sm\\" aria-controls=\\"drawer-size-sm\\" />\\n    <Button variant=\\"outline\\" label=\\"Default\\" data-drawer-trigger=\\"#drawer-size-default\\" aria-controls=\\"drawer-size-default\\" />\\n    <Button variant=\\"outline\\" size=\\"lg\\" label=\\"Large\\" data-drawer-trigger=\\"#drawer-size-lg\\" aria-controls=\\"drawer-size-lg\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<div class="drawer_demo-row">
      <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
      <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
      <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
    </div>\`
  })
}`,...(M=(N=w.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var T,R,V;B.parameters={...B.parameters,docs:{...(T=B.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "헤더·푸터",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"항목 편집\\" data-drawer-trigger=\\"#drawer-footer\\" aria-controls=\\"drawer-footer\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />\`
  })
}`,...(V=(R=B.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,H,J;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "헤더 추가 영역",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"outline\\" label=\\"상세 보기\\" data-drawer-trigger=\\"#drawer-extra\\" aria-controls=\\"drawer-extra\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />\`
  })
}`,...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var G,K,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "메뉴",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"outline\\" icon-only aria-label=\\"메뉴 열기\\" data-drawer-trigger=\\"#drawer-menu\\" aria-controls=\\"drawer-menu\\">\\n    <template #icon-before>\\n      <Icon name=\\"menu\\" />\\n    </template>\\n  </Button>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<Button variant="outline" icon-only aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu">
      <template #icon-before><Icon name="menu" /></template>
    </Button>\`
  })
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "로드 시 자동 열기 (옵션)",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-drawer-open-on-load=&quot;true&quot;를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다."
      },
      source: {
        code: "<template>\\n  <p class=\\"form_field-hint\\">아래 예시는 옵션 동작 확인용입니다.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<p class="form_field-hint">아래 예시는 옵션 동작 확인용입니다.</p>\`
  })
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "중첩 Drawer",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. Esc는 가장 위에 열린 패널부터 닫습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"ghost\\" label=\\"중첩 예시 열기\\" data-drawer-trigger=\\"#drawer-nested-1\\" aria-controls=\\"drawer-nested-1\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />\`
  })
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "백드롭 없음",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"ghost\\" label=\\"백드롭 없이 열기\\" data-drawer-trigger=\\"#drawer-no-backdrop\\" aria-controls=\\"drawer-no-backdrop\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Drawer,
      Button,
      Icon
    },
    template: \`<Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />\`
  })
}`,...(te=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Re=["Playground","Basic","Placement","Size","Footer","Extra","Menu","OpenOnLoad","Nested","NoBackdrop"];export{p as Basic,C as Extra,B as Footer,g as Menu,b as Nested,D as NoBackdrop,f as OpenOnLoad,m as Placement,c as Playground,w as Size,Re as __namedExportsOrder,Te as default};
