import{_ as e}from"./Badge-CcXPSX6F.js";import{_ as a}from"./Avatar-De5lKVUK.js";import{_ as n}from"./BadgeWrap-DSINzXts.js";import{_ as o}from"./Button-C3SXv-sJ.js";import{_ as r}from"./Icon-D97OEunV.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";const P=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],S=[{name:"color",type:"string",default:"primary",description:"공통 color_* 클래스"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"badge_sm · badge_lg"},{name:"dot",type:"boolean",default:"false",description:"텍스트 앞 점 표시 (badge_dot)"},{name:"count",type:"boolean",default:"false",description:"숫자 카운트 형태 (badge_count)"},{name:"dot-only",type:"boolean",default:"false",description:"점만 표시 (badge_dot-only)"},{name:"label",type:"string",default:"—",description:"배지 텍스트. default 슬롯으로 대체 가능"},{name:"aria-label",type:"string",default:"—",description:"dot-only·카운트 등 접근성 라벨"}],h=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],E=[{name:"aria-label",type:"string",default:"—",description:"래퍼 접근성 라벨 (선택)"}],O=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],M=[{name:"default",description:"배지 텍스트 (label prop 대체)"}],L=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],F=[{name:"default",description:"기준 요소 + Badge 자식"}],H=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],V=[{name:"badge",description:"배지 루트"},{name:"badge_sm · badge_lg",description:"크기 변형"},{name:"badge_dot · badge_count · badge_dot-only",description:"형태 변형"},{name:"badge_wrap",description:"겹침 배치 컨테이너"},{name:"color_*",description:"공통 색상 유틸"}],N=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],T=[{name:"--badge-font-size · --badge-padding-y · --badge-padding-x",default:"—",description:"기본 배지 타이포·패딩"},{name:"--badge-dot-size · --badge-dot-size-sm · --badge-dot-size-lg",default:"6px · 5px · 7px",description:"점 크기"},{name:"--badge-count-min-width",default:"1.25rem",description:"카운트 최소 너비"},{name:"--badge-overlay-border",default:"2px",description:"겹침 시 테두리"}],$=[{title:"API · Badge Props",tables:[{columns:P,rows:S,codeColumn:"name"}]},{title:"API · BadgeWrap Props",tables:[{columns:h,rows:E,codeColumn:"name"}]},{title:"API · Badge Slots",tables:[{columns:O,rows:M,codeColumn:"name"}]},{title:"API · BadgeWrap Slots",tables:[{columns:L,rows:F,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:H,rows:V,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:N,rows:T,codeColumn:"name"}]}],X={title:"Components/데이터 표시/Badge",id:"components-badge",component:e,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},dot:{control:"boolean",type:{name:"boolean",summary:"boolean"}},count:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dotOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:$}},l={args:{color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},render:I=>({components:{Badge:e},setup(){return{args:I}},template:'<Badge v-bind="args" />'})},t={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"공통 color_* 클래스로 의미에 따른 색상을 적용합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge color="default" label="Default" />
  <Badge color="primary" label="Primary" />
  <Badge color="success" label="Success" />
  <Badge color="warning" label="Warning" />
  <Badge color="danger" label="Danger" />
  <Badge color="info" label="Info" />
</template>`,language:"vue"}}},render:()=>({components:{Badge:e,Avatar:a,BadgeWrap:n,Button:o,Icon:r},template:`<Badge color="default" label="Default" />
    <Badge color="primary" label="Primary" />
    <Badge color="success" label="Success" />
    <Badge color="warning" label="Warning" />
    <Badge color="danger" label="Danger" />
    <Badge color="info" label="Info" />`})},d={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"badge_sm · badge_lg로 스케일을 조절합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge size="sm" color="primary" label="Small" />
  <Badge color="primary" label="Medium" />
  <Badge size="lg" color="primary" label="Large" />
</template>`,language:"vue"}}},render:()=>({components:{Badge:e,Avatar:a,BadgeWrap:n,Button:o,Icon:r},template:`<Badge size="sm" color="primary" label="Small" />
    <Badge color="primary" label="Medium" />
    <Badge size="lg" color="primary" label="Large" />`})},s={name:"Dot 배지",parameters:{demoPreview:{stack:!1},docs:{description:{story:"badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge dot color="primary" label="Online" />
  <Badge dot color="success" label="Active" />
  <Badge dot color="warning" label="Away" />
  <Badge dot color="danger" label="Offline" />
</template>`,language:"vue"}}},render:()=>({components:{Badge:e,Avatar:a,BadgeWrap:n,Button:o,Icon:r},template:`<Badge dot color="primary" label="Online" />
    <Badge dot color="success" label="Active" />
    <Badge dot color="warning" label="Away" />
    <Badge dot color="danger" label="Offline" />`})},c={name:"카운트",parameters:{demoPreview:{stack:!1},docs:{description:{story:"badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
<\/script>

<template>
  <Badge count color="danger" label="3" />
  <Badge count color="primary" label="12" />
  <Badge count color="success" label="99+" />
  <Badge count size="sm" color="danger" label="5" />
  <Badge count size="lg" color="primary" label="New" />
</template>`,language:"vue"}}},render:()=>({components:{Badge:e,Avatar:a,BadgeWrap:n,Button:o,Icon:r},template:`<Badge count color="danger" label="3" />
    <Badge count color="primary" label="12" />
    <Badge count color="success" label="99+" />
    <Badge count size="sm" color="danger" label="5" />
    <Badge count size="lg" color="primary" label="New" />`})},u={name:"겹침 표시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Badge:e,Avatar:a,BadgeWrap:n,Button:o,Icon:r},template:`<BadgeWrap>
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
    </BadgeWrap>`})};var i,m,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: "primary",
    size: "md",
    dot: false,
    count: false,
    dotOnly: false,
    label: "라벨",
    ariaLabel: "접근성 라벨"
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args" />'
  })
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,B,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
    components: {
      Badge,
      Avatar,
      BadgeWrap,
      Button,
      Icon
    },
    template: \`<Badge color="default" label="Default" />
    <Badge color="primary" label="Primary" />
    <Badge color="success" label="Success" />
    <Badge color="warning" label="Warning" />
    <Badge color="danger" label="Danger" />
    <Badge color="info" label="Info" />\`
  })
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var C,y,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
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
  render: () => ({
    components: {
      Badge,
      Avatar,
      BadgeWrap,
      Button,
      Icon
    },
    template: \`<Badge size="sm" color="primary" label="Small" />
    <Badge color="primary" label="Medium" />
    <Badge size="lg" color="primary" label="Large" />\`
  })
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,A,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Dot 배지",
  parameters: {
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
  render: () => ({
    components: {
      Badge,
      Avatar,
      BadgeWrap,
      Button,
      Icon
    },
    template: \`<Badge dot color="primary" label="Online" />
    <Badge dot color="success" label="Active" />
    <Badge dot color="warning" label="Away" />
    <Badge dot color="danger" label="Offline" />\`
  })
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,k,_;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "카운트",
  parameters: {
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
  render: () => ({
    components: {
      Badge,
      Avatar,
      BadgeWrap,
      Button,
      Icon
    },
    template: \`<Badge count color="danger" label="3" />
    <Badge count color="primary" label="12" />
    <Badge count color="success" label="99+" />
    <Badge count size="sm" color="danger" label="5" />
    <Badge count size="lg" color="primary" label="New" />\`
  })
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var w,x,z;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "겹침 표시",
  parameters: {
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
  render: () => ({
    components: {
      Badge,
      Avatar,
      BadgeWrap,
      Button,
      Icon
    },
    template: \`<BadgeWrap>
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
  })
}`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const Y=["Playground","Basic","Size","Dot","Count","Wrap"];export{t as Basic,c as Count,s as Dot,l as Playground,d as Size,u as Wrap,Y as __namedExportsOrder,X as default};
