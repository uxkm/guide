import{k as Ce,l as pe,u as be,a as me,b as we,o as g,c as S,r as A,f as D,t as y,g as E,d as u,p as v,s as F,h as Be,i as ge,j as x}from"./iframe-BHuoLYUS.js";import{w as a,s as Se}from"./story-renders-C_n8_MI3.js";import{_ as _e}from"./FormLayout-Dpm6QfjY.js";import{r as fe,a as ke}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Ae=["aria-label"],De={key:0,class:"switch_label"},ye={class:"switch_control"},Ee=["checked","disabled","aria-label"],ve={key:1,class:"switch_label"},e=Object.assign({inheritAttrs:!1},{__name:"Switch",props:{ripple:Ce,label:String,checked:Boolean,disabled:Boolean,labelEnd:Boolean,size:{type:String,default:"md",validator:l=>["sm","md","lg"].includes(l)},ariaLabel:String},setup(l){const n=l,{rippleAttrs:re}=pe(n),_=be(),c=me(),f=Be(null),de=ge("Switch",{defaults:{size:"md"},booleanProps:new Set(["checked","disabled","labelEnd","ripple"]),selfClosing:!1});we(de,n,_,f,c);const he=x(()=>{const s=["switch"];return n.labelEnd&&s.push("switch_label-end"),n.size==="sm"&&s.push("switch_sm"),n.size==="lg"&&s.push("switch_lg"),c.class&&s.push(c.class),s}),t=x(()=>!!(n.label||_.default));return(s,k)=>(g(),S("label",v({ref_key:"rootRef",ref:f},F(re),{class:he.value,"aria-label":t.value?void 0:l.ariaLabel}),[t.value&&l.labelEnd?(g(),S("span",De,[A(s.$slots,"default",{},()=>[D(y(l.label),1)])])):E("",!0),u("span",ye,[u("input",v({type:"checkbox",class:"switch_input",role:"switch",checked:l.checked,disabled:l.disabled,"aria-label":t.value?void 0:l.ariaLabel},F(c)),null,16,Ee),k[0]||(k[0]=u("span",{class:"switch_track","aria-hidden":"true"},[u("span",{class:"switch_thumb"})],-1))]),t.value&&!l.labelEnd?(g(),S("span",ve,[A(s.$slots,"default",{},()=>[D(y(l.label),1)])])):E("",!0)],16,Ae))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"label",type:{name:"string"}},{name:"checked",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"labelEnd",type:{name:"boolean"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"ariaLabel",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Switch.vue"]});const Fe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xe=[{name:"label",type:"string",default:"—",description:"라벨 텍스트. default 슬롯으로 대체"},{name:"checked",type:"boolean",default:"false",description:"켜짐 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"label-end",type:"boolean",default:"false",description:"라벨을 스위치 뒤에 배치"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"switch_sm · switch_lg"},{name:"aria-label",type:"string",default:"—",description:"라벨 없을 때 접근성 라벨"},fe],ze=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Le=[{name:"default",description:"라벨 텍스트 (label prop 대체)"}],Pe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Re=[{name:"switch",description:"스위치 루트 label"},{name:"switch_sm · switch_lg · switch_label-end",description:"크기·레이아웃"},{name:"switch_control · switch_input · switch_track · switch_thumb",description:"입력·트랙"},{name:"switch_label",description:"라벨"},{name:"switch_group",description:"여러 스위치 묶음"},...ke],We=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Me=[{name:"--switch-width · --switch-height",default:"2.75rem · 1.5rem",description:"트랙 크기 (md)"},{name:"--switch-width-sm · --switch-width-lg",default:"2.25rem · 3.25rem",description:"크기 변형"},{name:"--switch-gap · --switch-radius",default:"—",description:"라벨 간격·모서리"}],Te=[{title:"API · Props",tables:[{columns:Fe,rows:xe,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:ze,rows:Le,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Pe,rows:Re,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:We,rows:Me,codeColumn:"name"}]}],$e={title:"Components/폼/Switch",id:"components-switch",component:e,tags:["autodocs"],argTypes:{label:{control:"text",type:{name:"string",summary:"string"}},checked:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelEnd:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Te}},i={parameters:{controls:{disable:!1}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:(l,n)=>({components:{Switch:e},setup(){return{args:Se(n)}},template:'<Switch v-bind="args" />'})},o={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 `switch_control` → `switch_label` 순서입니다. `switch_label-end`는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch checked label="기본 — switch" />
  <Switch label-end checked label="레이블 뒤 — switch_label-end" />
</template>`,language:"vue"}}},args:{label:"라벨",size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch checked label="기본 — switch" />
      <Switch label-end checked label="레이블 뒤 — switch_label-end" />`}))},r={name:"레이블 뒤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`switch_label-end`는 `switch_label` → `switch_control` 순으로 마크업합니다. 전체 너비가 필요하면 `switch_block` 또는 `switch_group_block`을 추가합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch label-end checked label="푸시 알림 받기" />
  <Switch label-end>
    <span class="switch_content">
      <span class="switch_label">마케팅 정보 수신</span>
      <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Switch>
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
    <Switch label-end checked label="이메일 알림" />
    <Switch label-end checked label="푸시 알림" />
    <Switch label-end label="SMS 알림" />
  </fieldset>
  <Switch label-end size="sm" checked label="Small — switch_sm" />
  <Switch label-end size="lg" checked label="Large — switch_lg" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch label-end checked label="푸시 알림 받기" />
      <Switch label-end>
        <span class="switch_content">
          <span class="switch_label">마케팅 정보 수신</span>
          <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
        <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch label-end checked label="이메일 알림" />
        <Switch label-end checked label="푸시 알림" />
        <Switch label-end label="SMS 알림" />
      </fieldset>
      <Switch label-end size="sm" checked label="Small — switch_sm" />
      <Switch label-end size="lg" checked label="Large — switch_lg" />`}))},d={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch checked label="다크 모드" />
  <Switch label="자동 저장" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch checked label="다크 모드" />
      <Switch label="자동 저장" />`}))},h={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 스위치만 사용할 수 있습니다. `aria-label`로 접근 가능한 이름을 지정합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch aria-label="기능 켜기" />
  <Switch checked aria-label="기능 끄기" />
  <Switch disabled aria-label="비활성" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch aria-label="기능 켜기" />
      <Switch checked aria-label="기능 끄기" />
      <Switch disabled aria-label="비활성" />`}))},C={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch label-end size="sm" checked label="Small — switch_sm" />
  <Switch label-end checked label="Medium — 기본" />
  <Switch label-end size="lg" checked label="Large — switch_lg" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch label-end size="sm" checked label="Small — switch_sm" />
      <Switch label-end checked label="Medium — 기본" />
      <Switch label-end size="lg" checked label="Large — switch_lg" />`}))},p={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch label-end checked label="기본 — 인라인 너비" />
  <Switch label-end class="switch_block" checked label="switch_block — 전체 너비" />
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">switch_group_block</legend>
    <Switch label-end checked label="Wi-Fi" />
    <Switch label-end label="블루투스" />
  </fieldset>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch label-end checked label="기본 — 인라인 너비" />
      <Switch label-end class="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
        <legend class="switch_group-legend">switch_group_block</legend>
        <Switch label-end checked label="Wi-Fi" />
        <Switch label-end label="블루투스" />
      </fieldset>`}))},b={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch class="color_primary" label-end checked label="Primary" />
  <Switch class="color_success" label-end checked label="Success" />
  <Switch class="color_danger" label-end checked label="Danger" />
  <Switch class="color_warning" label-end checked label="Warning" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch class="color_primary" label-end checked label="Primary" />
      <Switch class="color_success" label-end checked label="Success" />
      <Switch class="color_danger" label-end checked label="Danger" />
      <Switch class="color_warning" label-end checked label="Warning" />`}))},m={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <Switch label-end label="꺼짐" />
  <Switch label-end checked label="켜짐" />
  <Switch label-end disabled label="비활성" />
  <Switch label-end checked disabled label="켜짐 (비활성)" />
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<Switch label-end label="꺼짐" />
      <Switch label-end checked label="켜짐" />
      <Switch label-end disabled label="비활성" />
      <Switch label-end checked disabled label="켜짐 (비활성)" />`}))},w={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다."},source:{code:`<script setup>
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">개인정보 설정</legend>
    <Switch label-end checked>
      <span class="switch_content">
        <span class="switch_label">프로필 공개</span>
        <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
      </span>
    </Switch>
    <Switch label-end>
      <span class="switch_content">
        <span class="switch_label">활동 기록 표시</span>
        <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
      </span>
    </Switch>
    <Switch label-end checked label="검색 허용" />
  </fieldset>
  <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
    <Switch label-end label="고대비 모드" />
    <Switch label-end label="애니메이션 줄이기" />
  </fieldset>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{Switch:e},template:`<fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
        <legend class="switch_group-legend">개인정보 설정</legend>
        <Switch label-end checked>
          <span class="switch_content">
            <span class="switch_label">프로필 공개</span>
            <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch label-end>
          <span class="switch_content">
            <span class="switch_label">활동 기록 표시</span>
            <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch label-end checked label="검색 허용" />
      </fieldset>
      <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
        <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch label-end label="고대비 모드" />
        <Switch label-end label="애니메이션 줄이기" />
      </fieldset>`}))},B={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Switch from '@uxkm/ui/components/Switch.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-vertical-label">알림</span>
      <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
        <Switch label-end checked label="이메일 알림" />
        <Switch label-end label="푸시 알림" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
      <Switch label-end checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
    </div>
  </FormLayout>
</template>`,language:"vue"}}},args:{label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},render:a(()=>({components:{FormLayout:_e,Switch:e},template:`<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="switch-form-vertical-label">알림</span>
          <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
            <Switch label-end checked label="이메일 알림" />
            <Switch label-end label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div class="form_field">
          <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
          <Switch label-end checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
        </div>
      </FormLayout>`}))};var z,L,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: (_args, context) => ({
    components: {
      Switch
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Switch v-bind="args" />'
  })
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var R,W,M;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본은 \`switch_control\` → \`switch_label\` 순서입니다. \`switch_label-end\`는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch checked label=\\"기본 — switch\\" />\\n  <Switch label-end checked label=\\"레이블 뒤 — switch_label-end\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch checked label="기본 — switch" />
      <Switch label-end checked label="레이블 뒤 — switch_label-end" />\`
  }))
}`,...(M=(W=o.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var T,N,O;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "레이블 뒤",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`switch_label-end\`는 \`switch_label\` → \`switch_control\` 순으로 마크업합니다. 전체 너비가 필요하면 \`switch_block\` 또는 \`switch_group_block\`을 추가합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch label-end checked label=\\"푸시 알림 받기\\" />\\n  <Switch label-end>\\n    <span class=\\"switch_content\\">\\n      <span class=\\"switch_label\\">마케팅 정보 수신</span>\\n      <span class=\\"switch_hint\\">이벤트·할인 소식을 이메일로 받습니다.</span>\\n    </span>\\n  </Switch>\\n  <fieldset class=\\"switch_group switch_group_block\\" style=\\"max-width: 360px; width: 100%;\\">\\n    <legend class=\\"switch_group-legend\\">알림 설정 — switch_group_block</legend>\\n    <Switch label-end checked label=\\"이메일 알림\\" />\\n    <Switch label-end checked label=\\"푸시 알림\\" />\\n    <Switch label-end label=\\"SMS 알림\\" />\\n  </fieldset>\\n  <Switch label-end size=\\"sm\\" checked label=\\"Small — switch_sm\\" />\\n  <Switch label-end size=\\"lg\\" checked label=\\"Large — switch_lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch label-end checked label="푸시 알림 받기" />
      <Switch label-end>
        <span class="switch_content">
          <span class="switch_label">마케팅 정보 수신</span>
          <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
        <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch label-end checked label="이메일 알림" />
        <Switch label-end checked label="푸시 알림" />
        <Switch label-end label="SMS 알림" />
      </fieldset>
      <Switch label-end size="sm" checked label="Small — switch_sm" />
      <Switch label-end size="lg" checked label="Large — switch_lg" />\`
  }))
}`,...(O=(N=r.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,j,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        story: "레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch checked label=\\"다크 모드\\" />\\n  <Switch label=\\"자동 저장\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch checked label="다크 모드" />
      <Switch label="자동 저장" />\`
  }))
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var $,G,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "단독 사용",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "레이블 없이 스위치만 사용할 수 있습니다. \`aria-label\`로 접근 가능한 이름을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch aria-label=\\"기능 켜기\\" />\\n  <Switch checked aria-label=\\"기능 끄기\\" />\\n  <Switch disabled aria-label=\\"비활성\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch aria-label="기능 켜기" />
      <Switch checked aria-label="기능 끄기" />
      <Switch disabled aria-label="비활성" />\`
  }))
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var U,q,J;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        story: "switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch label-end size=\\"sm\\" checked label=\\"Small — switch_sm\\" />\\n  <Switch label-end checked label=\\"Medium — 기본\\" />\\n  <Switch label-end size=\\"lg\\" checked label=\\"Large — switch_lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch label-end size="sm" checked label="Small — switch_sm" />
      <Switch label-end checked label="Medium — 기본" />
      <Switch label-end size="lg" checked label="Large — switch_lg" />\`
  }))
}`,...(J=(q=C.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch label-end checked label=\\"기본 — 인라인 너비\\" />\\n  <Switch label-end class=\\"switch_block\\" checked label=\\"switch_block — 전체 너비\\" />\\n  <fieldset class=\\"switch_group switch_group_block\\" style=\\"max-width: 360px; width: 100%;\\">\\n    <legend class=\\"switch_group-legend\\">switch_group_block</legend>\\n    <Switch label-end checked label=\\"Wi-Fi\\" />\\n    <Switch label-end label=\\"블루투스\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch label-end checked label="기본 — 인라인 너비" />
      <Switch label-end class="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
        <legend class="switch_group-legend">switch_group_block</legend>
        <Switch label-end checked label="Wi-Fi" />
        <Switch label-end label="블루투스" />
      </fieldset>\`
  }))
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch class=\\"color_primary\\" label-end checked label=\\"Primary\\" />\\n  <Switch class=\\"color_success\\" label-end checked label=\\"Success\\" />\\n  <Switch class=\\"color_danger\\" label-end checked label=\\"Danger\\" />\\n  <Switch class=\\"color_warning\\" label-end checked label=\\"Warning\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch class="color_primary" label-end checked label="Primary" />
      <Switch class="color_success" label-end checked label="Success" />
      <Switch class="color_danger" label-end checked label="Danger" />
      <Switch class="color_warning" label-end checked label="Warning" />\`
  }))
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,ne;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <Switch label-end label=\\"꺼짐\\" />\\n  <Switch label-end checked label=\\"켜짐\\" />\\n  <Switch label-end disabled label=\\"비활성\\" />\\n  <Switch label-end checked disabled label=\\"켜짐 (비활성)\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<Switch label-end label="꺼짐" />
      <Switch label-end checked label="켜짐" />
      <Switch label-end disabled label="비활성" />
      <Switch label-end checked disabled label="켜짐 (비활성)" />\`
  }))
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,ce,te;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다."
      },
      source: {
        code: "<script setup>\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <fieldset class=\\"switch_group switch_group_block\\" style=\\"max-width: 400px; width: 100%;\\">\\n    <legend class=\\"switch_group-legend\\">개인정보 설정</legend>\\n    <Switch label-end checked>\\n      <span class=\\"switch_content\\">\\n        <span class=\\"switch_label\\">프로필 공개</span>\\n        <span class=\\"switch_hint\\">다른 사용자가 내 프로필을 볼 수 있습니다.</span>\\n      </span>\\n    </Switch>\\n    <Switch label-end>\\n      <span class=\\"switch_content\\">\\n        <span class=\\"switch_label\\">활동 기록 표시</span>\\n        <span class=\\"switch_hint\\">최근 활동이 타임라인에 노출됩니다.</span>\\n      </span>\\n    </Switch>\\n    <Switch label-end checked label=\\"검색 허용\\" />\\n  </fieldset>\\n  <fieldset class=\\"switch_group switch_group_block switch_group_compact\\" style=\\"max-width: 400px; width: 100%;\\">\\n    <legend class=\\"switch_group-legend\\">접근성 — switch_group_compact</legend>\\n    <Switch label-end label=\\"고대비 모드\\" />\\n    <Switch label-end label=\\"애니메이션 줄이기\\" />\\n  </fieldset>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Switch
    },
    template: \`<fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
        <legend class="switch_group-legend">개인정보 설정</legend>
        <Switch label-end checked>
          <span class="switch_content">
            <span class="switch_label">프로필 공개</span>
            <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch label-end>
          <span class="switch_content">
            <span class="switch_label">활동 기록 표시</span>
            <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch label-end checked label="검색 허용" />
      </fieldset>
      <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
        <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch label-end label="고대비 모드" />
        <Switch label-end label="애니메이션 줄이기" />
      </fieldset>\`
  }))
}`,...(te=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var ue,ie,oe;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_vertical · form_horizontal과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Switch from '@uxkm/ui/components/Switch.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"switch-form-vertical-label\\">알림</span>\\n      <fieldset class=\\"switch_group switch_group_block\\" aria-labelledby=\\"switch-form-vertical-label\\">\\n        <Switch label-end checked label=\\"이메일 알림\\" />\\n        <Switch label-end label=\\"푸시 알림\\" />\\n      </fieldset>\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\" fit>\\n    <div class=\\"form_field\\">\\n      <span class=\\"form_field-label\\" id=\\"switch-form-horizontal-label\\">자동 저장</span>\\n      <Switch label-end checked label=\\"편집 내용 자동 저장\\" aria-labelledby=\\"switch-form-horizontal-label\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    label: "라벨",
    checked: false,
    disabled: false,
    labelEnd: false,
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      FormLayout,
      Switch
    },
    template: \`<FormLayout layout="vertical" fit>
        <div class="form_field">
          <span class="form_field-label" id="switch-form-vertical-label">알림</span>
          <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
            <Switch label-end checked label="이메일 알림" />
            <Switch label-end label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div class="form_field">
          <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
          <Switch label-end checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
        </div>
      </FormLayout>\`
  }))
}`,...(oe=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const Ge=["Playground","Type","LabelEnd","Basic","Standalone","Size","Width","Color","State","Group","Form"];export{d as Basic,b as Color,B as Form,w as Group,r as LabelEnd,i as Playground,C as Size,h as Standalone,m as State,o as Type,p as Width,Ge as __namedExportsOrder,$e as default};
