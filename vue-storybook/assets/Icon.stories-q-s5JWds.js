import{_ as e,V as d,W as Y}from"./iframe-3tmFy2e1.js";import{w as n,s as Z}from"./story-renders-ww3py-Dw.js";import{a as ee}from"./avatar-sample-Dq40Sw96.js";import{b as ne,a as oe}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const ae=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],se=[{name:"name",type:"string",default:"—",description:"common-icons 갤러리 키. path·image 슬롯이 없을 때 미리 정의된 stroke 경로를 렌더합니다"},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"아이콘 크기. md는 icon만, 나머지는 icon_sm · icon_lg · icon_xl"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스 (currentColor 상속)"},{name:"inline",type:"boolean",default:"false",description:"텍스트와 수직 정렬 (icon_inline)"},{name:"spin",type:"boolean",default:"false",description:"회전 애니메이션 (icon_spin)"},{name:"button",type:"boolean",default:"false",description:"클릭 가능한 아이콘 버튼 (icon_button + button 태그)"},{name:"circle",type:"boolean",default:"false",description:"원형 배경 (icon_circle)"},{name:"square",type:"boolean",default:"false",description:"사각 배경 (icon_square)"},{name:"pulse",type:"boolean",default:"false",description:"펄스 애니메이션 (icon_pulse, circle과 함께)"},{name:"aria-label",type:"string",default:"—",description:"button·의미 있는 아이콘 시 접근성 라벨"},ne],re=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ce=[{name:"default",description:"SVG path·circle 등 커스텀 도형 (#path와 동일, 하위 호환)"},{name:"path",description:"커스텀 SVG 도형 슬롯. name보다 우선합니다"},{name:"image",description:"img 등 이미지 슬롯. path·name보다 우선합니다"}],le=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],te=[{name:"icon",description:"SVG·이미지 루트 기본 크기"},{name:"icon_img",description:"image 슬롯 호스트 (내부 img object-fit)"},{name:"icon_sm · icon_lg · icon_xl",description:"크기 변형"},{name:"icon_inline",description:"텍스트 인라인 정렬"},{name:"icon_spin",description:"회전 애니메이션"},{name:"icon_button",description:"아이콘 버튼 래퍼"},{name:"icon_circle · icon_square",description:"배경 형태"},{name:"icon_circle-sm · icon_circle-lg",description:"원형 배경 크기"},{name:"icon_pulse",description:"펄스 강조"},{name:"icon_group",description:"여러 아이콘 가로 배치 컨테이너"},{name:"color_*",description:"공통 색상 유틸"},...oe],ue=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ie=[{name:"--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl",default:"1rem · 1.25rem · 1.5rem · 2rem",description:"아이콘 지름"},{name:"--icon-spin-duration",default:"0.8s",description:"회전 주기"},{name:"--icon-circle-size · --icon-circle-size-sm · --icon-circle-size-lg",default:"2.25rem · 1.75rem · 2.75rem",description:"원형 배경 크기"},{name:"--icon-pulse-duration",default:"1.5s",description:"펄스 애니메이션 주기"}],me=[{title:"API · Props",tables:[{columns:ae,rows:se,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:re,rows:ce,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:le,rows:te,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ue,rows:ie,codeColumn:"name"}]}],ge={title:"Components/기본 요소/Icon",id:"components-icon",component:e,tags:["autodocs"],argTypes:{name:{control:"select",options:["search","plus","minus","close","check","edit","trash","delete","copy","save","download","upload","share","link","external-link","filter","refresh","undo","redo","printer","paperclip","arrow-left","arrow-right","arrow-up","arrow-down","chevron-left","chevron-right","chevron-up","chevron-down","menu","more-vertical","more-horizontal","grid","list","home","settings","user","users","mail","phone","bell","message","send","info","help-circle","alert-circle","alert-triangle","check-circle","x-circle","star","heart","bookmark","thumb-up","eye","eye-off","lock","unlock","log-in","log-out","calendar","clock","folder","file","image","camera","map-pin","globe","cart","credit-card","tag","sun","moon","cloud","book","zoom-in","zoom-out","maximize","loader"],type:{name:"enum",summary:"common-icons 갤러리 키"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},spin:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},circle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},square:{control:"boolean",type:{name:"boolean",summary:"boolean"}},pulse:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:me}},o={parameters:{controls:{disable:!1}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:(pe,X)=>({components:{Icon:e},setup(){return{args:Z(X)}},template:'<Icon v-bind="args" />'})},a={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"name prop으로 common-icons 갤러리 키를 지정합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="search" />
  <Icon name="edit" />
  <Icon name="trash" />
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="search" />
      <Icon name="edit" />
      <Icon name="trash" />`}))},s={name:"커스텀 · 슬롯",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"우선순위는 #image > #path(또는 기본 슬롯) > name입니다. 갤러리에 없는 도형은 #path로, 이미지는 #image로 넣습니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Icon name="search" />
  <Icon>
    <template #path>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </template>
  </Icon>
  <Icon size="lg">
    <template #image>
      <img :src="avatarSample" alt="" />
    </template>
  </Icon>
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},setup(){return{avatarSample:ee}},template:`<Icon name="search" />
      <Icon>
        <template #path>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </template>
      </Icon>
      <Icon size="lg">
        <template #image>
          <img :src="avatarSample" alt="" />
        </template>
      </Icon>`}))},r={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="plus" size="sm" />
  <Icon name="plus" />
  <Icon name="plus" size="lg" />
  <Icon name="plus" size="xl" />
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="plus" size="sm" />
      <Icon name="plus" />
      <Icon name="plus" size="lg" />
      <Icon name="plus" size="xl" />`}))},c={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="star" color="default" />
  <Icon name="star" color="primary" />
  <Icon name="check-circle" color="success" />
  <Icon name="alert-triangle" color="warning" />
  <Icon name="x-circle" color="danger" />
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="star" color="default" />
      <Icon name="star" color="primary" />
      <Icon name="check-circle" color="success" />
      <Icon name="alert-triangle" color="warning" />
      <Icon name="x-circle" color="danger" />`}))},l={name:"텍스트와 함께",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <p>
    <Icon name="info" inline color="info" />
    <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
  </p>
  <p>
    <Icon name="check-circle" inline color="success" />
    <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
  </p>
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e,TypoText:d},template:`<p>
        <Icon name="info" inline color="info" />
        <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
      </p>
      <p>
        <Icon name="check-circle" inline color="success" />
        <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
      </p>`}))},t={name:"원형 · 사각 배경",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="plus" circle color="primary" size="sm" />
  <Icon name="check-circle" circle color="success" size="sm" />
  <Icon name="trash" circle color="danger" size="lg" />
  <Icon name="edit" square color="primary" size="sm" />
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="plus" circle color="primary" size="sm" />
      <Icon name="check-circle" circle color="success" size="sm" />
      <Icon name="trash" circle color="danger" size="lg" />
      <Icon name="edit" square color="primary" size="sm" />`}))},u={name:"아이콘 버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="search" button color="primary" aria-label="검색" />
  <Icon name="settings" button color="muted" aria-label="설정" />
  <Icon name="close" button color="danger" aria-label="삭제" />
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="search" button color="primary" aria-label="검색" />
      <Icon name="settings" button color="muted" aria-label="설정" />
      <Icon name="close" button color="danger" aria-label="삭제" />`}))},i={name:"펄스",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="bell" circle pulse color="primary" size="sm" />
  <Icon circle pulse color="danger" size="sm">
    <template #path>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </template>
  </Icon>
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="bell" circle pulse color="primary" size="sm" />
      <Icon circle pulse color="danger" size="sm">
        <template #path>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </template>
      </Icon>`}))},m={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"icon_group으로 여러 아이콘을 나란히 배치합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <div class="icon_group">
    <Icon name="upload" color="muted" />
    <Icon name="download" color="muted" />
    <Icon name="trash" color="muted" />
  </div>
  <p>
    <Icon name="user" circle color="primary" size="sm" />
    <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
  </p>
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e,TypoText:d},template:`<div class="icon_group">
        <Icon name="upload" color="muted" />
        <Icon name="download" color="muted" />
        <Icon name="trash" color="muted" />
      </div>
      <p>
        <Icon name="user" circle color="primary" size="sm" />
        <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
      </p>`}))},p={name:"로딩",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="loader" spin color="primary" />
  <Icon name="loader" spin size="lg" color="muted" />
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e},template:`<Icon name="loader" spin color="primary" />
      <Icon name="loader" spin size="lg" color="muted" />`}))},C={name:"아이콘 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';
<\/script>

<template>
  <div class="icon_grid">
    <div
    v-for="name in commonIconGallery"
    :key="name"
    class="icon_grid-item"
    >
    <Icon :name="name" class="icon_lg" />
    <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
  </div>
  </div>
</template>`,language:"vue"}}},args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:n(()=>({components:{Icon:e,TypoText:d},setup(){return{commonIconGallery:Y}},template:`<div class="icon_grid">
        <div
        v-for="name in commonIconGallery"
        :key="name"
        class="icon_grid-item"
        >
        <Icon :name="name" class="icon_lg" />
        <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
      </div>
      </div>`}))};var f,I,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: (_args, context) => ({
    components: {
      Icon
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Icon v-bind="args" />\`
  })
}`,...(B=(I=o.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        story: "name prop으로 common-icons 갤러리 키를 지정합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"search\\" />\\n  <Icon name=\\"edit\\" />\\n  <Icon name=\\"trash\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="search" />
      <Icon name="edit" />
      <Icon name="trash" />\`
  }))
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,x,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "커스텀 · 슬롯",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "우선순위는 #image > #path(또는 기본 슬롯) > name입니다. 갤러리에 없는 도형은 #path로, 이미지는 #image로 넣습니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport { avatarSample } from '@images';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"search\\" />\\n  <Icon>\\n    <template #path>\\n      <circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\" fill=\\"currentColor\\" stroke=\\"none\\" />\\n    </template>\\n  </Icon>\\n  <Icon size=\\"lg\\">\\n    <template #image>\\n      <img :src=\\"avatarSample\\" alt=\\"\\" />\\n    </template>\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    setup() {
      return {
        avatarSample
      };
    },
    template: \`<Icon name="search" />
      <Icon>
        <template #path>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </template>
      </Icon>
      <Icon size="lg">
        <template #image>
          <img :src="avatarSample" alt="" />
        </template>
      </Icon>\`
  }))
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var A,h,k;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        story: "기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"plus\\" size=\\"sm\\" />\\n  <Icon name=\\"plus\\" />\\n  <Icon name=\\"plus\\" size=\\"lg\\" />\\n  <Icon name=\\"plus\\" size=\\"xl\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="plus" size="sm" />
      <Icon name="plus" />
      <Icon name="plus" size="lg" />
      <Icon name="plus" size="xl" />\`
  }))
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var T,z,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        story: "공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"star\\" color=\\"default\\" />\\n  <Icon name=\\"star\\" color=\\"primary\\" />\\n  <Icon name=\\"check-circle\\" color=\\"success\\" />\\n  <Icon name=\\"alert-triangle\\" color=\\"warning\\" />\\n  <Icon name=\\"x-circle\\" color=\\"danger\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="star" color="default" />
      <Icon name="star" color="primary" />
      <Icon name="check-circle" color="success" />
      <Icon name="alert-triangle" color="warning" />
      <Icon name="x-circle" color="danger" />\`
  }))
}`,...(_=(z=c.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var w,E,F;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "텍스트와 함께",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    <Icon name=\\"info\\" inline color=\\"info\\" />\\n    <TypoText tag=\\"span\\" class=\\"ml_sm\\">변경 사항이 자동 저장됩니다.</TypoText>\\n  </p>\\n  <p>\\n    <Icon name=\\"check-circle\\" inline color=\\"success\\" />\\n    <TypoText tag=\\"span\\" class=\\"ml_sm\\">업로드가 완료되었습니다.</TypoText>\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      TypoText
    },
    template: \`<p>
        <Icon name="info" inline color="info" />
        <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
      </p>
      <p>
        <Icon name="check-circle" inline color="success" />
        <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
      </p>\`
  }))
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var S,P,q;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "원형 · 사각 배경",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"plus\\" circle color=\\"primary\\" size=\\"sm\\" />\\n  <Icon name=\\"check-circle\\" circle color=\\"success\\" size=\\"sm\\" />\\n  <Icon name=\\"trash\\" circle color=\\"danger\\" size=\\"lg\\" />\\n  <Icon name=\\"edit\\" square color=\\"primary\\" size=\\"sm\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="plus" circle color="primary" size="sm" />
      <Icon name="check-circle" circle color="success" size="sm" />
      <Icon name="trash" circle color="danger" size="lg" />
      <Icon name="edit" square color="primary" size="sm" />\`
  }))
}`,...(q=(P=t.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var L,G,R;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "아이콘 버튼",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"search\\" button color=\\"primary\\" aria-label=\\"검색\\" />\\n  <Icon name=\\"settings\\" button color=\\"muted\\" aria-label=\\"설정\\" />\\n  <Icon name=\\"close\\" button color=\\"danger\\" aria-label=\\"삭제\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="search" button color="primary" aria-label="검색" />
      <Icon name="settings" button color="muted" aria-label="설정" />
      <Icon name="close" button color="danger" aria-label="삭제" />\`
  }))
}`,...(R=(G=u.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var V,O,j;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "펄스",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"bell\\" circle pulse color=\\"primary\\" size=\\"sm\\" />\\n  <Icon circle pulse color=\\"danger\\" size=\\"sm\\">\\n    <template #path>\\n      <circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\" fill=\\"currentColor\\" stroke=\\"none\\" />\\n    </template>\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="bell" circle pulse color="primary" size="sm" />
      <Icon circle pulse color="danger" size="sm">
        <template #path>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </template>
      </Icon>\`
  }))
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var H,M,W;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        story: "icon_group으로 여러 아이콘을 나란히 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"icon_group\\">\\n    <Icon name=\\"upload\\" color=\\"muted\\" />\\n    <Icon name=\\"download\\" color=\\"muted\\" />\\n    <Icon name=\\"trash\\" color=\\"muted\\" />\\n  </div>\\n  <p>\\n    <Icon name=\\"user\\" circle color=\\"primary\\" size=\\"sm\\" />\\n    <TypoText tag=\\"span\\" color=\\"muted\\" size=\\"sm\\" class=\\"ml_sm\\">홍길동님이 댓글을 남겼습니다.</TypoText>\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      TypoText
    },
    template: \`<div class="icon_group">
        <Icon name="upload" color="muted" />
        <Icon name="download" color="muted" />
        <Icon name="trash" color="muted" />
      </div>
      <p>
        <Icon name="user" circle color="primary" size="sm" />
        <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
      </p>\`
  }))
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var $,J,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "로딩",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon name=\\"loader\\" spin color=\\"primary\\" />\\n  <Icon name=\\"loader\\" spin size=\\"lg\\" color=\\"muted\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon
    },
    template: \`<Icon name="loader" spin color="primary" />
      <Icon name="loader" spin size="lg" color="muted" />\`
  }))
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "아이콘 유형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\nimport { commonIconGallery } from '@uxkm/ui/data/common-icons';\\n<\/script>\\n\\n<template>\\n  <div class=\\"icon_grid\\">\\n    <div\\n    v-for=\\"name in commonIconGallery\\"\\n    :key=\\"name\\"\\n    class=\\"icon_grid-item\\"\\n    >\\n    <Icon :name=\\"name\\" class=\\"icon_lg\\" />\\n    <TypoText tag=\\"span\\" size=\\"sm\\" color=\\"muted\\">{{ name }}</TypoText>\\n  </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<div class="icon_grid">
        <div
        v-for="name in commonIconGallery"
        :key="name"
        class="icon_grid-item"
        >
        <Icon :name="name" class="icon_lg" />
        <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
      </div>
      </div>\`
  }))
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ye=["Playground","Basic","Custom","Size","Color","Inline","Circle","Button","Pulse","Group","Spin","Gallery"];export{a as Basic,u as Button,t as Circle,c as Color,s as Custom,C as Gallery,m as Group,l as Inline,o as Playground,i as Pulse,r as Size,p as Spin,ye as __namedExportsOrder,ge as default};
