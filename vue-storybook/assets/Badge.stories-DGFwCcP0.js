import{_ as e}from"./Badge-BFsRdINT.js";import{w as n,s as I}from"./story-renders-BkwSCuFa.js";import{_ as O}from"./Avatar-x7DOTvdN.js";import{b as L,o as E,c as F,r as R,h as M,i as N,_ as H,q as V}from"./iframe-_Cy3TTd_.js";import"./preload-helper-PMqzWbAN.js";const a={__name:"BadgeWrap",props:{ariaLabel:String},setup(u){const c=u,i=M(null),S=N("BadgeWrap",{selfClosing:!1});return L(S,c,{},i,{}),(h,ae)=>(E(),F("span",{ref_key:"rootRef",ref:i,class:"badge_wrap"},[R(h.$slots,"default")],512))}};a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"BadgeWrap",description:"",tags:{},props:[{name:"ariaLabel",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/BadgeWrap.vue"]});const $=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],T=[{name:"color",type:"string",default:"primary",description:"공통 color_* 클래스"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"badge_sm · badge_lg"},{name:"dot",type:"boolean",default:"false",description:"텍스트 앞 점 표시 (badge_dot)"},{name:"count",type:"boolean",default:"false",description:"숫자 카운트 형태 (badge_count)"},{name:"dot-only",type:"boolean",default:"false",description:"점만 표시 (badge_dot-only)"},{name:"label",type:"string",default:"—",description:"배지 텍스트. default 슬롯으로 대체 가능"},{name:"aria-label",type:"string",default:"—",description:"dot-only·카운트 등 접근성 라벨"}],j=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],q=[{name:"aria-label",type:"string",default:"—",description:"래퍼 접근성 라벨 (선택)"}],U=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],G=[{name:"default",description:"배지 텍스트 (label prop 대체)"}],J=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],K=[{name:"default",description:"기준 요소 + Badge 자식"}],Q=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],X=[{name:"badge",description:"배지 루트"},{name:"badge_sm · badge_lg",description:"크기 변형"},{name:"badge_dot · badge_count · badge_dot-only",description:"형태 변형"},{name:"badge_wrap",description:"겹침 배치 컨테이너"},{name:"color_*",description:"공통 색상 유틸"}],Y=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Z=[{name:"--badge-font-size · --badge-padding-y · --badge-padding-x",default:"—",description:"기본 배지 타이포·패딩"},{name:"--badge-dot-size · --badge-dot-size-sm · --badge-dot-size-lg",default:"6px · 5px · 7px",description:"점 크기"},{name:"--badge-count-min-width",default:"1.25rem",description:"카운트 최소 너비"},{name:"--badge-overlay-border",default:"2px",description:"겹침 시 테두리"}],ee=[{title:"API · Badge Props",tables:[{columns:$,rows:T,codeColumn:"name"}]},{title:"API · BadgeWrap Props",tables:[{columns:j,rows:q,codeColumn:"name"}]},{title:"API · Badge Slots",tables:[{columns:U,rows:G,codeColumn:"name"}]},{title:"API · BadgeWrap Slots",tables:[{columns:J,rows:K,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Q,rows:X,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Y,rows:Z,codeColumn:"name"}]}],se={title:"Components/데이터 표시/Badge",id:"components-badge",component:e,subcomponents:{BadgeWrap:a},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},dot:{control:"boolean",type:{name:"boolean",summary:"boolean"}},count:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dotOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ee}},o={parameters:{controls:{disable:!1}},args:{color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},render:(u,c)=>({components:{Badge:e},setup(){return{args:I(c)}},template:'<Badge v-bind="args" />'})},r={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 color_* 클래스로 의미에 따른 색상을 적용합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge color="default" label="Default" />
  <Badge color="primary" label="Primary" />
  <Badge color="success" label="Success" />
  <Badge color="warning" label="Warning" />
  <Badge color="danger" label="Danger" />
  <Badge color="info" label="Info" />
</template>`,language:"vue"}}},args:{color:"primary",size:"md",label:"라벨",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Badge:e},template:`<Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />`}))},l={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_sm · badge_lg로 스케일을 조절합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge size="sm" color="primary" label="Small" />
  <Badge color="primary" label="Medium" />
  <Badge size="lg" color="primary" label="Large" />
</template>`,language:"vue"}}},args:{color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Badge:e},template:`<Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />`}))},t={name:"Dot 배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge dot color="primary" label="Online" />
  <Badge dot color="success" label="Active" />
  <Badge dot color="warning" label="Away" />
  <Badge dot color="danger" label="Offline" />
</template>`,language:"vue"}}},args:{color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Badge:e},template:`<Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />`}))},s={name:"카운트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge count color="danger" label="3" />
  <Badge count color="primary" label="12" />
  <Badge count color="success" label="99+" />
  <Badge count size="sm" color="danger" label="5" />
  <Badge count size="lg" color="primary" label="New" />
</template>`,language:"vue"}}},args:{color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Badge:e},template:`<Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />`}))},d={name:"겹침 표시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Badge from '@uxkm/ui/components/Badge.vue';
import BadgeWrap from '@uxkm/ui/components/BadgeWrap.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <BadgeWrap>
    <Button variant="filled" color="primary" label="알림" />
    <Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" />
  </BadgeWrap>
  <BadgeWrap>
    <Button variant="ghost" icon-only aria-label="메시지">
      <template #icon-before>
        <Icon>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Icon>
      </template>
    </Button>
    <Badge count color="danger" aria-label="새 메시지 12건" label="12" />
  </BadgeWrap>
  <BadgeWrap>
    <Avatar color="primary" initials="홍" aria-hidden />
    <Badge dot-only color="success" aria-label="온라인" />
  </BadgeWrap>
</template>`,language:"vue"}}},args:{color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Avatar:O,Badge:e,BadgeWrap:a,Button:V,Icon:H},template:`        <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" />
        </BadgeWrap>
        <BadgeWrap>
        <Button variant="ghost" icon-only aria-label="메시지">
        <template #icon-before>
        <Icon>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Icon>
        </template>
        </Button>
        <Badge count color="danger" aria-label="새 메시지 12건" label="12" />
        </BadgeWrap>
        <BadgeWrap>
        <Avatar color="primary" initials="홍" aria-hidden />
        <Badge dot-only color="success" aria-label="온라인" />
        </BadgeWrap>`}))};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: (_args, context) => ({
    components: {
      Badge
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Badge v-bind="args" />'
  })
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var B,b,C;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        story: "공통 color_* 클래스로 의미에 따른 색상을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\n<\/script>\\n\\n<template>\\n  <Badge color=\\"default\\" label=\\"Default\\" />\\n  <Badge color=\\"primary\\" label=\\"Primary\\" />\\n  <Badge color=\\"success\\" label=\\"Success\\" />\\n  <Badge color=\\"warning\\" label=\\"Warning\\" />\\n  <Badge color=\\"danger\\" label=\\"Danger\\" />\\n  <Badge color=\\"info\\" label=\\"Info\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    color: "primary",
    size: "md",
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge
    },
    template: \`<Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />\`
  }))
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,y,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        story: "badge_sm · badge_lg로 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\n<\/script>\\n\\n<template>\\n  <Badge size=\\"sm\\" color=\\"primary\\" label=\\"Small\\" />\\n  <Badge color=\\"primary\\" label=\\"Medium\\" />\\n  <Badge size=\\"lg\\" color=\\"primary\\" label=\\"Large\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge
    },
    template: \`<Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />\`
  }))
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,D,k;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Dot 배지",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\n<\/script>\\n\\n<template>\\n  <Badge dot color=\\"primary\\" label=\\"Online\\" />\\n  <Badge dot color=\\"success\\" label=\\"Active\\" />\\n  <Badge dot color=\\"warning\\" label=\\"Away\\" />\\n  <Badge dot color=\\"danger\\" label=\\"Offline\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge
    },
    template: \`<Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />\`
  }))
}`,...(k=(D=t.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var _,W,w;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "카운트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\n<\/script>\\n\\n<template>\\n  <Badge count color=\\"danger\\" label=\\"3\\" />\\n  <Badge count color=\\"primary\\" label=\\"12\\" />\\n  <Badge count color=\\"success\\" label=\\"99+\\" />\\n  <Badge count size=\\"sm\\" color=\\"danger\\" label=\\"5\\" />\\n  <Badge count size=\\"lg\\" color=\\"primary\\" label=\\"New\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge
    },
    template: \`<Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />\`
  }))
}`,...(w=(W=s.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var z,x,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "겹침 표시",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport BadgeWrap from '@uxkm/ui/components/BadgeWrap.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <BadgeWrap>\\n    <Button variant=\\"filled\\" color=\\"primary\\" label=\\"알림\\" />\\n    <Badge count color=\\"danger\\" aria-label=\\"읽지 않은 알림 5건\\" label=\\"5\\" />\\n  </BadgeWrap>\\n  <BadgeWrap>\\n    <Button variant=\\"ghost\\" icon-only aria-label=\\"메시지\\">\\n      <template #icon-before>\\n        <Icon>\\n          <path d=\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\" />\\n        </Icon>\\n      </template>\\n    </Button>\\n    <Badge count color=\\"danger\\" aria-label=\\"새 메시지 12건\\" label=\\"12\\" />\\n  </BadgeWrap>\\n  <BadgeWrap>\\n    <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n    <Badge dot-only color=\\"success\\" aria-label=\\"온라인\\" />\\n  </BadgeWrap>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar,
      Badge,
      BadgeWrap,
      Button,
      Icon
    },
    template: \`        <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" aria-label="읽지 않은 알림 5건" label="5" />
        </BadgeWrap>
        <BadgeWrap>
        <Button variant="ghost" icon-only aria-label="메시지">
        <template #icon-before>
        <Icon>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Icon>
        </template>
        </Button>
        <Badge count color="danger" aria-label="새 메시지 12건" label="12" />
        </BadgeWrap>
        <BadgeWrap>
        <Avatar color="primary" initials="홍" aria-hidden />
        <Badge dot-only color="success" aria-label="온라인" />
        </BadgeWrap>\`
  }))
}`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const de=["Playground","Basic","Size","Dot","Count","Wrap"];export{r as Basic,s as Count,t as Dot,o as Playground,l as Size,d as Wrap,de as __namedExportsOrder,se as default};
