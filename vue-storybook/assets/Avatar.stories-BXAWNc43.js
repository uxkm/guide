import{_ as a}from"./Avatar-DcDtevNq.js";import{w as r,s as O}from"./story-renders-ww3py-Dw.js";import{b as H,o as T,c as W,r as N,h as $,i as j,_ as q}from"./iframe-3tmFy2e1.js";import{a as c}from"./avatar-sample-Dq40Sw96.js";import"./preload-helper-PMqzWbAN.js";const U=["aria-label"],e=Object.assign({name:"AvatarGroup"},{__name:"AvatarGroup",props:{ariaLabel:String},setup(d){const m=d,p=$(null),F=j("AvatarGroup",{selfClosing:!1});return H(F,m,{},p,{}),(R,ia)=>(T(),W("div",{ref_key:"rootRef",ref:p,class:"avatar_group","aria-label":d.ariaLabel},[N(R.$slots,"default")],8,U))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{name:"AvatarGroup",exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"ariaLabel",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/AvatarGroup.vue"]});const M=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],V=[{name:"src",type:"string",default:"—",description:"이미지 URL (avatar_image)"},{name:"alt",type:"string",default:"—",description:"이미지 대체 텍스트"},{name:"initials",type:"string",default:"—",description:"이니셜 텍스트 (이미지·아이콘 없을 때)"},{name:"color",type:"string",default:"—",description:"이니셜·아이콘 배경 color_*"},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"avatar_sm · avatar_lg · avatar_xl"},{name:"square",type:"boolean",default:"false",description:"사각형 모서리 (avatar_square)"},{name:"badge-color",type:"string",default:"—",description:"상태 점 색상 (avatar_badge)"},{name:"badge-label",type:"string",default:"—",description:"상태 점 aria-label"},{name:"aria-hidden",type:"boolean",default:"false",description:"그룹 내 장식용 아바타"}],J=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],K=[{name:"aria-label",type:"string",default:"—",description:"그룹 접근성 라벨 (권장)"}],Q=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],X=[{name:"icon",description:"아이콘 슬롯 (avatar_icon)"}],Y=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Z=[{name:"default",description:"Avatar 자식 목록"}],aa=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ra=[{name:"avatar",description:"아바타 루트 (원형)"},{name:"avatar_image",description:"프로필 이미지"},{name:"avatar_icon",description:"아이콘 크기"},{name:"avatar_badge",description:"상태 점"},{name:"avatar_sm · avatar_lg · avatar_xl",description:"크기 변형"},{name:"avatar_square",description:"사각형"},{name:"avatar_group",description:"겹침 그룹 컨테이너"},{name:"color_*",description:"공통 색상 유틸"}],ea=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],na=[{name:"--avatar-size-sm · --avatar-size · --avatar-size-lg · --avatar-size-xl",default:"1.5rem · 2rem · 2.5rem · 3.5rem",description:"아바타 지름"},{name:"--avatar-group-overlap",default:"-0.5rem",description:"그룹 겹침 오프셋"},{name:"--avatar-badge-size · --avatar-badge-size-sm · --avatar-badge-size-lg",default:"8px · 6px · 10px",description:"상태 점 크기"}],ta=[{title:"API · Avatar Props",tables:[{columns:M,rows:V,codeColumn:"name"}]},{title:"API · AvatarGroup Props",tables:[{columns:J,rows:K,codeColumn:"name"}]},{title:"API · Avatar Slots",tables:[{columns:Q,rows:X,codeColumn:"name"}]},{title:"API · AvatarGroup Slots",tables:[{columns:Y,rows:Z,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:aa,rows:ra,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ea,rows:na,codeColumn:"name"}]}],da={title:"Components/데이터 표시/Avatar",id:"components-avatar",component:a,subcomponents:{AvatarGroup:e},tags:["autodocs"],argTypes:{src:{control:"text",type:{name:"string",summary:"string"}},alt:{control:"text",type:{name:"string",summary:"string"}},initials:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},square:{control:"boolean",type:{name:"boolean",summary:"boolean"}},badgeColor:{control:"select",options:["success","warning","danger"],type:{name:"enum",summary:"'success' | 'warning' | 'danger'"}},badgeLabel:{control:"text",type:{name:"string",summary:"string"}},ariaHidden:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ta}},n={parameters:{controls:{disable:!1}},args:{src:c,alt:"홍길동",initials:"홍",color:"primary",size:"md",square:!1,badgeColor:"",badgeLabel:"온라인",ariaHidden:!1},render:(d,m)=>({components:{Avatar:a},setup(){return{args:O(m)}},template:'<Avatar v-bind="args" />'})},t={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar :src="avatarSample" alt="홍길동" />
  <Avatar color="primary" initials="홍" aria-hidden />
  <Avatar color="default" aria-hidden>
    <template #icon>
      <Icon name="user" class="avatar_icon" />
    </template>
  </Avatar>
</template>`,language:"vue"}}},args:{alt:"홍길동",initials:"홍",color:"primary",size:"md",badgeColor:"",badgeLabel:"온라인"},render:r(()=>({components:{Avatar:a,Icon:q},setup(){return{avatarSample:c}},template:`<Avatar :src="avatarSample" alt="홍길동" />
      <Avatar color="primary" initials="홍" aria-hidden />
      <Avatar color="default" aria-hidden>
        <template #icon>
          <Icon name="user" class="avatar_icon" />
        </template>
      </Avatar>`}))},i={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
<\/script>

<template>
  <Avatar size="sm" color="primary" initials="A" aria-hidden />
  <Avatar color="primary" initials="B" aria-hidden />
  <Avatar size="lg" color="primary" initials="C" aria-hidden />
  <Avatar size="xl" color="primary" initials="D" aria-hidden />
</template>`,language:"vue"}}},args:{alt:"홍길동",initials:"홍",color:"primary",size:"md",badgeColor:"",badgeLabel:"온라인"},render:r(()=>({components:{Avatar:a},template:`<Avatar size="sm" color="primary" initials="A" aria-hidden />
      <Avatar color="primary" initials="B" aria-hidden />
      <Avatar size="lg" color="primary" initials="C" aria-hidden />
      <Avatar size="xl" color="primary" initials="D" aria-hidden />`}))},o={name:"형태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Avatar color="primary" initials="원" aria-hidden />
  <Avatar square color="primary" initials="각" aria-hidden />
  <Avatar square :src="avatarSample" alt="홍길동" />
</template>`,language:"vue"}}},args:{alt:"홍길동",initials:"홍",color:"primary",size:"md",badgeColor:"",badgeLabel:"온라인"},render:r(()=>({components:{Avatar:a},setup(){return{avatarSample:c}},template:`<Avatar color="primary" initials="원" aria-hidden />
      <Avatar square color="primary" initials="각" aria-hidden />
      <Avatar square :src="avatarSample" alt="홍길동" />`}))},s={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
<\/script>

<template>
  <Avatar color="default" initials="D" aria-hidden />
  <Avatar color="primary" initials="P" aria-hidden />
  <Avatar color="success" initials="S" aria-hidden />
  <Avatar color="warning" initials="W" aria-hidden />
  <Avatar color="danger" initials="E" aria-hidden />
</template>`,language:"vue"}}},args:{alt:"홍길동",initials:"홍",color:"primary",size:"md",badgeColor:"",badgeLabel:"온라인"},render:r(()=>({components:{Avatar:a},template:`<Avatar color="default" initials="D" aria-hidden />
      <Avatar color="primary" initials="P" aria-hidden />
      <Avatar color="success" initials="S" aria-hidden />
      <Avatar color="warning" initials="W" aria-hidden />
      <Avatar color="danger" initials="E" aria-hidden />`}))},l={name:"상태 배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
<\/script>

<template>
  <Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
  <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
  <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />
</template>`,language:"vue"}}},args:{alt:"홍길동",initials:"홍",color:"primary",size:"md",badgeColor:"",badgeLabel:"온라인"},render:r(()=>({components:{Avatar:a},template:`<Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
      <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
      <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />`}))},u={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"avatar_group으로 여러 아바타를 겹쳐 표시합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import AvatarGroup from '@uxkm/ui/components/AvatarGroup.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
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
        <Icon name="plus" class="avatar_icon" />
      </template>
    </Avatar>
  </AvatarGroup>
</template>`,language:"vue"}}},args:{alt:"홍길동",initials:"홍",color:"primary",size:"md",badgeColor:"",badgeLabel:"온라인"},render:r(()=>({components:{Avatar:a,AvatarGroup:e,Icon:q},setup(){return{avatarSample:c}},template:`<AvatarGroup aria-label="팀 멤버 4명">
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
            <Icon name="plus" class="avatar_icon" />
          </template>
        </Avatar>
      </AvatarGroup>`}))};var v,A,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
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
  render: (_args, context) => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        story: "이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <Avatar :src=\\"avatarSample\\" alt=\\"홍길동\\" />\\n  <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n  <Avatar color=\\"default\\" aria-hidden>\\n    <template #icon>\\n      <Icon name=\\"user\\" class=\\"avatar_icon\\" />\\n    </template>\\n  </Avatar>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    badgeColor: "",
    badgeLabel: "온라인"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar,
      Icon
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
          <Icon name="user" class="avatar_icon" />
        </template>
      </Avatar>\`
  }))
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var D,f,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        story: "avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\n<\/script>\\n\\n<template>\\n  <Avatar size=\\"sm\\" color=\\"primary\\" initials=\\"A\\" aria-hidden />\\n  <Avatar color=\\"primary\\" initials=\\"B\\" aria-hidden />\\n  <Avatar size=\\"lg\\" color=\\"primary\\" initials=\\"C\\" aria-hidden />\\n  <Avatar size=\\"xl\\" color=\\"primary\\" initials=\\"D\\" aria-hidden />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    badgeColor: "",
    badgeLabel: "온라인"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar
    },
    template: \`<Avatar size="sm" color="primary" initials="A" aria-hidden />
      <Avatar color="primary" initials="B" aria-hidden />
      <Avatar size="lg" color="primary" initials="C" aria-hidden />
      <Avatar size="xl" color="primary" initials="D" aria-hidden />\`
  }))
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var h,_,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "형태",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    badgeColor: "",
    badgeLabel: "온라인"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Avatar color="primary" initials="원" aria-hidden />
      <Avatar square color="primary" initials="각" aria-hidden />
      <Avatar square :src="avatarSample" alt="홍길동" />\`
  }))
}`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var S,x,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    badgeColor: "",
    badgeLabel: "온라인"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar
    },
    template: \`<Avatar color="default" initials="D" aria-hidden />
      <Avatar color="primary" initials="P" aria-hidden />
      <Avatar color="success" initials="S" aria-hidden />
      <Avatar color="warning" initials="W" aria-hidden />
      <Avatar color="danger" initials="E" aria-hidden />\`
  }))
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,G,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "상태 배지",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    badgeColor: "",
    badgeLabel: "온라인"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar
    },
    template: \`<Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" aria-hidden />
      <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" aria-hidden />
      <Avatar color="default" initials="오" badge-color="danger" badge-label="오프라인" aria-hidden />\`
  }))
}`,...(E=(G=l.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var P,I,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        story: "avatar_group으로 여러 아바타를 겹쳐 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport AvatarGroup from '@uxkm/ui/components/AvatarGroup.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <AvatarGroup aria-label=\\"팀 멤버 4명\\">\\n    <Avatar color=\\"primary\\" initials=\\"김\\" aria-hidden />\\n    <Avatar color=\\"success\\" initials=\\"이\\" aria-hidden />\\n    <Avatar color=\\"warning\\" initials=\\"박\\" aria-hidden />\\n    <Avatar color=\\"danger\\" initials=\\"최\\" aria-hidden />\\n  </AvatarGroup>\\n  <AvatarGroup aria-label=\\"팀 멤버 3명\\">\\n    <Avatar :src=\\"avatarSample\\" alt=\\"홍길동\\" />\\n    <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n    <Avatar color=\\"default\\" aria-hidden>\\n      <template #icon>\\n        <Icon name=\\"plus\\" class=\\"avatar_icon\\" />\\n      </template>\\n    </Avatar>\\n  </AvatarGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    alt: "홍길동",
    initials: "홍",
    color: "primary",
    size: "md",
    badgeColor: "",
    badgeLabel: "온라인"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar,
      AvatarGroup,
      Icon
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
            <Icon name="plus" class="avatar_icon" />
          </template>
        </Avatar>
      </AvatarGroup>\`
  }))
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const ma=["Playground","Basic","Size","Shape","Color","Badge","Group"];export{l as Badge,t as Basic,s as Color,u as Group,n as Playground,o as Shape,i as Size,ma as __namedExportsOrder,da as default};
