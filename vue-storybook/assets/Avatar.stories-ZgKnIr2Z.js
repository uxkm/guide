import{_ as a}from"./Avatar-De5lKVUK.js";import{_ as n,a as z,b as q,c as M,d as F,e as H,f as I,g as L,h as T,i as W,j as O,k as j,l as V}from"./avatar-api-BKBIZqaG.js";import{a as r}from"./avatar-sample-Dq40Sw96.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";const $=[{title:"API · Avatar Props",tables:[{columns:q,rows:z,codeColumn:"name"}]},{title:"API · AvatarGroup Props",tables:[{columns:F,rows:M,codeColumn:"name"}]},{title:"API · Avatar Slots",tables:[{columns:I,rows:H,codeColumn:"name"}]},{title:"API · AvatarGroup Slots",tables:[{columns:T,rows:L,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:O,rows:W,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:V,rows:j,codeColumn:"name"}]}],U={title:"Components/데이터 표시/Avatar",id:"components-avatar",component:a,tags:["autodocs"],argTypes:{src:{control:"text",type:{name:"string",summary:"string"}},alt:{control:"text",type:{name:"string",summary:"string"}},initials:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},square:{control:"boolean",type:{name:"boolean",summary:"boolean"}},badgeColor:{control:"select",options:["success","warning","danger"],type:{name:"enum",summary:"'success' | 'warning' | 'danger'"}},badgeLabel:{control:"text",type:{name:"string",summary:"string"}},ariaHidden:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:$}},e={args:{src:r,alt:"홍길동",initials:"홍",color:"primary",size:"md",square:!1,badgeColor:"",badgeLabel:"온라인",ariaHidden:!1},render:P=>({components:{Avatar:a},setup(){return{args:P}},template:'<Avatar v-bind="args" />'})},t={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar :src="avatarSample" alt="홍길동" />
  <Avatar color="primary" initials="홍" aria-hidden />
  <Avatar color="default" aria-hidden>
    <template #icon>
      <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </template>
  </Avatar>
</template>`,language:"vue"}}},render:()=>({components:{Avatar:a,AvatarGroup:n},setup(){return{avatarSample:r}},template:`<Avatar :src="avatarSample" alt="홍길동" />
    <Avatar color="primary" initials="홍" aria-hidden />
    <Avatar color="default" aria-hidden>
      <template #icon>
        <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </template>
    </Avatar>`})},i={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
<\/script>

<template>
  <Avatar size="sm" color="primary" initials="A" aria-hidden />
  <Avatar color="primary" initials="B" aria-hidden />
  <Avatar size="lg" color="primary" initials="C" aria-hidden />
  <Avatar size="xl" color="primary" initials="D" aria-hidden />
</template>`,language:"vue"}}},render:()=>({components:{Avatar:a,AvatarGroup:n},setup(){return{avatarSample:r}},template:`<Avatar size="sm" color="primary" initials="A" aria-hidden />
    <Avatar color="primary" initials="B" aria-hidden />
    <Avatar size="lg" color="primary" initials="C" aria-hidden />
    <Avatar size="xl" color="primary" initials="D" aria-hidden />`})},o={name:"형태",parameters:{demoPreview:{stack:!1},docs:{description:{story:"기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar color="primary" initials="원" aria-hidden />
  <Avatar square color="primary" initials="각" aria-hidden />
  <Avatar square :src="avatarSample" alt="홍길동" />
</template>`,language:"vue"}}},render:()=>({components:{Avatar:a,AvatarGroup:n},setup(){return{avatarSample:r}},template:`<Avatar color="primary" initials="원" aria-hidden />
    <Avatar square color="primary" initials="각" aria-hidden />
    <Avatar square :src="avatarSample" alt="홍길동" />`})},s={name:"색상",parameters:{demoPreview:{stack:!1},docs:{description:{story:"이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
<\/script>

<template>
  <Avatar color="default" initials="D" aria-hidden />
  <Avatar color="primary" initials="P" aria-hidden />
  <Avatar color="success" initials="S" aria-hidden />
  <Avatar color="warning" initials="W" aria-hidden />
  <Avatar color="danger" initials="E" aria-hidden />
</template>`,language:"vue"}}},render:()=>({components:{Avatar:a,AvatarGroup:n},setup(){return{avatarSample:r}},template:`<Avatar color="default" initials="D" aria-hidden />
    <Avatar color="primary" initials="P" aria-hidden />
    <Avatar color="success" initials="S" aria-hidden />
    <Avatar color="warning" initials="W" aria-hidden />
    <Avatar color="danger" initials="E" aria-hidden />`})},l={name:"상태 배지",parameters:{demoPreview:{stack:!1},docs:{description:{story:"avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
<\/script>

<template>
  <Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
  <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
  <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />
</template>`,language:"vue"}}},render:()=>({components:{Avatar:a,AvatarGroup:n},setup(){return{avatarSample:r}},template:`<Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
    <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
    <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />`})},u={name:"그룹",parameters:{demoPreview:{stack:!0},docs:{description:{story:"avatar_group으로 여러 아바타를 겹쳐 표시합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import AvatarGroup from '@uxkm/ui/components/AvatarGroup.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <AvatarGroup aria-label="팀 멤버 4명">
    <Avatar color="primary" initials="김" aria-hidden />
    <Avatar color="success" initials="이" aria-hidden />
    <Avatar color="warning" initials="박" aria-hidden />
    <Avatar color="danger" initials="최" aria-hidden />
  </AvatarGroup>
  <AvatarGroup aria-label="팀 멤버 3명">
    <Avatar :src="avatarSample" alt="홍길동" />
    <Avatar color="primary" initials="홍" aria-hidden />
    <Avatar color="default" aria-hidden>
      <template #icon>
        <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </template>
    </Avatar>
  </AvatarGroup>
</template>`,language:"vue"}}},render:()=>({components:{Avatar:a,AvatarGroup:n},setup(){return{avatarSample:r}},template:`<AvatarGroup aria-label="팀 멤버 4명">
      <Avatar color="primary" initials="김" aria-hidden />
      <Avatar color="success" initials="이" aria-hidden />
      <Avatar color="warning" initials="박" aria-hidden />
      <Avatar color="danger" initials="최" aria-hidden />
    </AvatarGroup>

    <AvatarGroup aria-label="팀 멤버 3명">
      <Avatar :src="avatarSample" alt="홍길동" />
      <Avatar color="primary" initials="홍" aria-hidden />
      <Avatar color="default" aria-hidden>
        <template #icon>
          <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </template>
      </Avatar>
    </AvatarGroup>`})};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: avatarSample,
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    square: false,
    badgeColor: "",
    badgeLabel: "온라인",
    ariaHidden: false
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,v,A;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <Avatar :src=\\"avatarSample\\" alt=\\"홍길동\\" />\\n  <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n  <Avatar color=\\"default\\" aria-hidden>\\n    <template #icon>\\n      <svg class=\\"avatar_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n        <path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\" />\\n        <circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\" />\\n      </svg>\\n    </template>\\n  </Avatar>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Avatar :src="avatarSample" alt="홍길동" />
    <Avatar color="primary" initials="홍" aria-hidden />
    <Avatar color="default" aria-hidden>
      <template #icon>
        <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </template>
    </Avatar>\`
  })
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var C,g,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\n<\/script>\\n\\n<template>\\n  <Avatar size=\\"sm\\" color=\\"primary\\" initials=\\"A\\" aria-hidden />\\n  <Avatar color=\\"primary\\" initials=\\"B\\" aria-hidden />\\n  <Avatar size=\\"lg\\" color=\\"primary\\" initials=\\"C\\" aria-hidden />\\n  <Avatar size=\\"xl\\" color=\\"primary\\" initials=\\"D\\" aria-hidden />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Avatar size="sm" color="primary" initials="A" aria-hidden />
    <Avatar color="primary" initials="B" aria-hidden />
    <Avatar size="lg" color="primary" initials="C" aria-hidden />
    <Avatar size="xl" color="primary" initials="D" aria-hidden />\`
  })
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var B,D,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "형태",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <Avatar color=\\"primary\\" initials=\\"원\\" aria-hidden />\\n  <Avatar square color=\\"primary\\" initials=\\"각\\" aria-hidden />\\n  <Avatar square :src=\\"avatarSample\\" alt=\\"홍길동\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Avatar color="primary" initials="원" aria-hidden />
    <Avatar square color="primary" initials="각" aria-hidden />
    <Avatar square :src="avatarSample" alt="홍길동" />\`
  })
}`,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var f,b,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\n<\/script>\\n\\n<template>\\n  <Avatar color=\\"default\\" initials=\\"D\\" aria-hidden />\\n  <Avatar color=\\"primary\\" initials=\\"P\\" aria-hidden />\\n  <Avatar color=\\"success\\" initials=\\"S\\" aria-hidden />\\n  <Avatar color=\\"warning\\" initials=\\"W\\" aria-hidden />\\n  <Avatar color=\\"danger\\" initials=\\"E\\" aria-hidden />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Avatar color="default" initials="D" aria-hidden />
    <Avatar color="primary" initials="P" aria-hidden />
    <Avatar color="success" initials="S" aria-hidden />
    <Avatar color="warning" initials="W" aria-hidden />
    <Avatar color="danger" initials="E" aria-hidden />\`
  })
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,k,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "상태 배지",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\n<\/script>\\n\\n<template>\\n  <Avatar color=\\"primary\\" initials=\\"온\\" badge-color=\\"success\\" badge-label=\\"온라인\\" aria-hidden />\\n  <Avatar color=\\"default\\" initials=\\"대\\" badge-color=\\"warning\\" badge-label=\\"자리 비움\\" aria-hidden />\\n  <Avatar color=\\"default\\" initials=\\"오\\" badge-color=\\"danger\\" badge-label=\\"오프라인\\" aria-hidden />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
    <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
    <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />\`
  })
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var G,_,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "avatar_group으로 여러 아바타를 겹쳐 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport AvatarGroup from '@uxkm/ui/components/AvatarGroup.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <AvatarGroup aria-label=\\"팀 멤버 4명\\">\\n    <Avatar color=\\"primary\\" initials=\\"김\\" aria-hidden />\\n    <Avatar color=\\"success\\" initials=\\"이\\" aria-hidden />\\n    <Avatar color=\\"warning\\" initials=\\"박\\" aria-hidden />\\n    <Avatar color=\\"danger\\" initials=\\"최\\" aria-hidden />\\n  </AvatarGroup>\\n  <AvatarGroup aria-label=\\"팀 멤버 3명\\">\\n    <Avatar :src=\\"avatarSample\\" alt=\\"홍길동\\" />\\n    <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n    <Avatar color=\\"default\\" aria-hidden>\\n      <template #icon>\\n        <svg class=\\"avatar_icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n          <path d=\\"M12 5v14M5 12h14\\" />\\n        </svg>\\n      </template>\\n    </Avatar>\\n  </AvatarGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Avatar,
      AvatarGroup
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<AvatarGroup aria-label="팀 멤버 4명">
      <Avatar color="primary" initials="김" aria-hidden />
      <Avatar color="success" initials="이" aria-hidden />
      <Avatar color="warning" initials="박" aria-hidden />
      <Avatar color="danger" initials="최" aria-hidden />
    </AvatarGroup>

    <AvatarGroup aria-label="팀 멤버 3명">
      <Avatar :src="avatarSample" alt="홍길동" />
      <Avatar color="primary" initials="홍" aria-hidden />
      <Avatar color="default" aria-hidden>
        <template #icon>
          <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </template>
      </Avatar>
    </AvatarGroup>\`
  })
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const X=["Playground","Basic","Size","Shape","Color","Badge","Group"];export{l as Badge,t as Basic,s as Color,u as Group,e as Playground,o as Shape,i as Size,X as __namedExportsOrder,U as default};
