import{_ as n}from"./Link-BBBlqIKe.js";import{_ as e}from"./Alert-Da87oqmP.js";import{_ as a}from"./Icon-D97OEunV.js";import{b as Y,a as Z}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";import"./Button-C3SXv-sJ.js";const nn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],en=[{name:"color",type:"'primary' | 'muted' | 'success' | 'warning' | 'danger'",default:"primary",description:"공통 color_* 클래스"},{name:"size",type:"'sm' | 'lg' | 'xl'",default:"—",description:"공통 size_* 클래스"},{name:"underline",type:"boolean",default:"false",description:"항상 밑줄 (link_underline)"},{name:"no-underline",type:"boolean",default:"false",description:"밑줄 없음 (link_no-underline)"},{name:"standalone",type:"boolean",default:"false",description:"터치 영역 확대 (link_standalone)"},{name:"nav",type:"boolean",default:"false",description:"내비게이션 링크 스타일 (link_nav)"},{name:"block",type:"boolean",default:"false",description:"블록 링크 (link_block)"},{name:"back",type:"boolean",default:"false",description:"뒤로가기 링크 (link_back)"},{name:"icon-only",type:"boolean",default:"false",description:"아이콘만 표시 (link_icon-only)"},{name:"active",type:"boolean",default:"false",description:"현재 페이지·활성 상태 (is-active)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled, aria-disabled, tabindex -1)"},{name:"label",type:"string",default:"—",description:"링크 텍스트. default 슬롯으로 대체 가능"},{name:"href",type:"string",default:"#",description:"이동 URL"},{name:"target",type:"string",default:"—",description:"a target 속성 (예: _blank)"},{name:"rel",type:"string",default:"—",description:"a rel 속성 (예: noopener noreferrer)"},{name:"aria-label",type:"string",default:"—",description:"icon-only 등 텍스트 없을 때 접근성 라벨"},Y],an=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ln=[{name:"default",description:"링크 텍스트 (label prop 대체)"},{name:"icon",description:"텍스트 앞 아이콘 (link_icon)"}],on=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],tn=[{name:"link",description:"하이퍼링크 루트"},{name:"link_underline · link_no-underline · link_standalone",description:"밑줄·터치 영역"},{name:"link_nav · link_back · link_block · link_icon-only",description:"용도별 변형"},{name:"link_icon",description:"링크 내 아이콘"},{name:"link_row · link_group · link_group-inline",description:"링크 묶음 레이아웃"},{name:"is-active · is-disabled",description:"상태 클래스"},{name:"color_* · size_*",description:"공통 색상·크기 유틸"},...Z],rn=[{title:"API · Props",tables:[{columns:nn,rows:en,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:an,rows:ln,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:on,rows:tn,codeColumn:"name"}]}],Ln={title:"Components/기본 요소/Link",id:"components-link",component:n,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","muted","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'muted' | 'success' | 'warning' | 'danger'"}},size:{control:"select",options:["sm","lg","xl"],type:{name:"enum",summary:"'sm' | 'lg' | 'xl'"}},underline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noUnderline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},standalone:{control:"boolean",type:{name:"boolean",summary:"boolean"}},nav:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},back:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},active:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},href:{control:"text",type:{name:"string",summary:"string"}},target:{control:"text",type:{name:"string",summary:"string"}},rel:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:rn}},l={args:{color:"primary",size:"sm",underline:!1,noUnderline:!1,standalone:!1,nav:!1,block:!1,back:!1,iconOnly:!1,active:!1,disabled:!1,label:"라벨",href:"#",target:"값",rel:"값",ariaLabel:"접근성 라벨"},render:X=>({components:{Link:n},setup(){return{args:X}},template:'<Link v-bind="args" />'})},o={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Link label="더 보기" />
  <Link label="가이드 문서" />
  <Link underline label="항상 밑줄" />
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<Link label="더 보기" />
    <Link label="가이드 문서" />
    <Link underline label="항상 밑줄" />`})},i={name:"색상",parameters:{demoPreview:{stack:!0},docs:{description:{story:"공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link color="primary" label="Primary" />
    <Link color="muted" label="Muted" />
    <Link color="success" label="Success" />
    <Link color="warning" label="Warning" />
    <Link color="danger" label="Danger" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<div class="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>`})},t={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"공통 size_* 클래스로 텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Link size="sm" label="Small" />
  <Link label="Base" />
  <Link size="lg" label="Large" />
  <Link size="xl" label="Extra Large" />
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<Link size="sm" label="Small" />
    <Link label="Base" />
    <Link size="lg" label="Large" />
    <Link size="xl" label="Extra Large" />`})},r={name:"스타일",parameters:{demoPreview:{stack:!0},docs:{description:{story:"link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다."},source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link label="기본 (hover 밑줄)" />
    <Link underline label="항상 밑줄" />
    <Link no-underline label="밑줄 없음" />
    <Link standalone label="터치 영역 확대" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<div class="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link no-underline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>`})},c={name:"내비게이션",parameters:{demoPreview:{stack:!0},docs:{description:{story:"link_nav · is-active로 메뉴·탭 링크를 표현합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <nav class="link_group-inline" aria-label="섹션 내비게이션">
    <Link nav active label="개요" />
    <Link nav label="컴포넌트" />
    <Link nav label="토큰" />
    <Link nav label="접근성" />
  </nav>
  <Link back label="이전 페이지">
  <template #icon>
    <Icon class="link_icon">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </Icon>
  </template>
  </Link>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<nav class="link_group-inline" aria-label="섹션 내비게이션">
      <Link nav active label="개요" />
      <Link nav label="컴포넌트" />
      <Link nav label="토큰" />
      <Link nav label="접근성" />
    </nav>

    <Link back label="이전 페이지">
      <template #icon>
        <Icon class="link_icon">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </Icon>
      </template>
    </Link>`})},u={name:"블록 · 그룹",parameters:{demoPreview:{stack:!1},docs:{description:{story:"link_block · link_group으로 세로 링크 목록을 구성합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <div class="link_group" style="max-width: 280px; width: 100%;">
    <Link block label="시작하기">
    <template #icon>
      <Icon class="link_icon">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </Icon>
    </template>
  </Link>
  <Link block label="컴포넌트">
  <template #icon>
    <Icon class="link_icon">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </Icon>
  </template>
  </Link>
  <Link block color="muted" label="도움말">
  <template #icon>
    <Icon class="link_icon">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
    </Icon>
  </template>
  </Link>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<div class="link_group" style="max-width: 280px; width: 100%;">
      <Link block label="시작하기">
        <template #icon>
          <Icon class="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>
        </template>
      </Link>
      <Link block label="컴포넌트">
        <template #icon>
          <Icon class="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>
        </template>
      </Link>
      <Link block color="muted" label="도움말">
        <template #icon>
          <Icon class="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>
        </template>
      </Link>
    </div>`})},s={name:"아이콘 전용",parameters:{demoPreview:{stack:!1},docs:{description:{story:"link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Link icon-only aria-label="검색">
  <template #icon>
    <Icon class="link_icon">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
  </template>
  </Link>
  <Link icon-only aria-label="편집">
  <template #icon>
    <Icon class="link_icon">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>
  </template>
  </Link>
  <Link icon-only color="muted" aria-label="더 보기">
  <template #icon>
    <Icon class="link_icon">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </Icon>
  </template>
  </Link>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<Link icon-only aria-label="검색">
      <template #icon>
        <Icon class="link_icon">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </Icon>
      </template>
    </Link>
    <Link icon-only aria-label="편집">
      <template #icon>
        <Icon class="link_icon">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </Icon>
      </template>
    </Link>
    <Link icon-only color="muted" aria-label="더 보기">
      <template #icon>
        <Icon class="link_icon">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </Icon>
      </template>
    </Link>`})},p={name:"아이콘",parameters:{demoPreview:{stack:!0},docs:{source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link label="외부 링크">
    <template #icon>
      <Icon class="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </template>
  </Link>
  <Link>
  다운로드
  <Icon class="link_icon">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </Icon>
  </Link>
  <Link label="다음 단계">
  <template #icon>
    <Icon class="link_icon">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Icon>
  </template>
  </Link>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<div class="link_row">
      <Link label="외부 링크">
        <template #icon>
          <Icon class="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>
        </template>
      </Link>

      <Link>
        다운로드
        <Icon class="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>

      <Link label="다음 단계">
        <template #icon>
          <Icon class="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        </template>
      </Link>
    </div>`})},m={name:"새 창 열기",parameters:{demoPreview:{stack:!1},docs:{source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  >
  공식 문서
  <span class="color_muted size_sm">(새 창)</span>
  <Icon class="link_icon">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </Icon>
  </Link>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<Link
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      공식 문서
      <span class="color_muted size_sm">(새 창)</span>
      <Icon class="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>`})},k={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{source:{code:`<script setup>
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Link disabled label="비활성 링크" />
  <Link disabled label="비활성 (span)" />
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<Link disabled label="비활성 링크" />
    <Link disabled label="비활성 (span)" />`})},C={name:"문맥 속 사용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Alert title="업데이트 안내">
    새 버전이 출시되었습니다.
    <Link size="sm" label="릴리스 노트 보기" />
  </Alert>
  <p class="color_muted">
    계정이 없으신가요?
    <Link label="회원가입" />
  </p>
</template>`,language:"vue"}}},render:()=>({components:{Link:n,Alert:e,Icon:a},template:`<Alert title="업데이트 안내">
      새 버전이 출시되었습니다.
      <Link size="sm" label="릴리스 노트 보기" />
    </Alert>

    <p class="color_muted">
      계정이 없으신가요?
      <Link label="회원가입" />
    </p>`})};var d,L,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: "primary",
    size: "sm",
    underline: false,
    noUnderline: false,
    standalone: false,
    nav: false,
    block: false,
    back: false,
    iconOnly: false,
    active: false,
    disabled: false,
    label: "라벨",
    href: "#",
    target: "값",
    rel: "값",
    ariaLabel: "접근성 라벨"
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: '<Link v-bind="args" />'
  })
}`,...(b=(L=l.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var B,v,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다."
      },
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Link label=\\"더 보기\\" />\\n  <Link label=\\"가이드 문서\\" />\\n  <Link underline label=\\"항상 밑줄\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<Link label="더 보기" />
    <Link label="가이드 문서" />
    <Link underline label="항상 밑줄" />\`
  })
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,D,I;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"link_row\\">\\n    <Link color=\\"primary\\" label=\\"Primary\\" />\\n    <Link color=\\"muted\\" label=\\"Muted\\" />\\n    <Link color=\\"success\\" label=\\"Success\\" />\\n    <Link color=\\"warning\\" label=\\"Warning\\" />\\n    <Link color=\\"danger\\" label=\\"Danger\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<div class="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>\`
  })
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var x,_,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "공통 size_* 클래스로 텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Link size=\\"sm\\" label=\\"Small\\" />\\n  <Link label=\\"Base\\" />\\n  <Link size=\\"lg\\" label=\\"Large\\" />\\n  <Link size=\\"xl\\" label=\\"Extra Large\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<Link size="sm" label="Small" />
    <Link label="Base" />
    <Link size="lg" label="Large" />
    <Link size="xl" label="Extra Large" />\`
  })
}`,...(f=(_=t.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var h,A,E;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "스타일",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"link_row\\">\\n    <Link label=\\"기본 (hover 밑줄)\\" />\\n    <Link underline label=\\"항상 밑줄\\" />\\n    <Link no-underline label=\\"밑줄 없음\\" />\\n    <Link standalone label=\\"터치 영역 확대\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<div class="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link no-underline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>\`
  })
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,w,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "내비게이션",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "link_nav · is-active로 메뉴·탭 링크를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <nav class=\\"link_group-inline\\" aria-label=\\"섹션 내비게이션\\">\\n    <Link nav active label=\\"개요\\" />\\n    <Link nav label=\\"컴포넌트\\" />\\n    <Link nav label=\\"토큰\\" />\\n    <Link nav label=\\"접근성\\" />\\n  </nav>\\n  <Link back label=\\"이전 페이지\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <path d=\\"M19 12H5M12 19l-7-7 7-7\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<nav class="link_group-inline" aria-label="섹션 내비게이션">
      <Link nav active label="개요" />
      <Link nav label="컴포넌트" />
      <Link nav label="토큰" />
      <Link nav label="접근성" />
    </nav>

    <Link back label="이전 페이지">
      <template #icon>
        <Icon class="link_icon">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </Icon>
      </template>
    </Link>\`
  })
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var P,F,S;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "블록 · 그룹",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "link_block · link_group으로 세로 링크 목록을 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"link_group\\" style=\\"max-width: 280px; width: 100%;\\">\\n    <Link block label=\\"시작하기\\">\\n    <template #icon>\\n      <Icon class=\\"link_icon\\">\\n        <path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\" />\\n        <path d=\\"M14 2v6h6\\" />\\n      </Icon>\\n    </template>\\n  </Link>\\n  <Link block label=\\"컴포넌트\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" />\\n      <path d=\\"M3 9h18M9 21V9\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n  <Link block color=\\"muted\\" label=\\"도움말\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" />\\n      <path d=\\"M12 16v-4\\" />\\n      <circle cx=\\"12\\" cy=\\"8\\" r=\\"1\\" fill=\\"currentColor\\" stroke=\\"none\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<div class="link_group" style="max-width: 280px; width: 100%;">
      <Link block label="시작하기">
        <template #icon>
          <Icon class="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>
        </template>
      </Link>
      <Link block label="컴포넌트">
        <template #icon>
          <Icon class="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>
        </template>
      </Link>
      <Link block color="muted" label="도움말">
        <template #icon>
          <Icon class="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>
        </template>
      </Link>
    </div>\`
  })
}`,...(S=(F=u.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var H,V,O;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "아이콘 전용",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Link icon-only aria-label=\\"검색\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\" />\\n      <path d=\\"m21 21-4.35-4.35\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n  <Link icon-only aria-label=\\"편집\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\" />\\n      <path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n  <Link icon-only color=\\"muted\\" aria-label=\\"더 보기\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\" />\\n      <circle cx=\\"19\\" cy=\\"12\\" r=\\"1\\" />\\n      <circle cx=\\"5\\" cy=\\"12\\" r=\\"1\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<Link icon-only aria-label="검색">
      <template #icon>
        <Icon class="link_icon">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </Icon>
      </template>
    </Link>
    <Link icon-only aria-label="편집">
      <template #icon>
        <Icon class="link_icon">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </Icon>
      </template>
    </Link>
    <Link icon-only color="muted" aria-label="더 보기">
      <template #icon>
        <Icon class="link_icon">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </Icon>
      </template>
    </Link>\`
  })
}`,...(O=(V=s.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var U,W,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"link_row\\">\\n    <Link label=\\"외부 링크\\">\\n    <template #icon>\\n      <Icon class=\\"link_icon\\">\\n        <path d=\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\" />\\n        <polyline points=\\"15 3 21 3 21 9\\" />\\n        <line x1=\\"10\\" y1=\\"14\\" x2=\\"21\\" y2=\\"3\\" />\\n      </Icon>\\n    </template>\\n  </Link>\\n  <Link>\\n  다운로드\\n  <Icon class=\\"link_icon\\">\\n    <path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\" />\\n    <polyline points=\\"7 10 12 15 17 10\\" />\\n    <line x1=\\"12\\" y1=\\"15\\" x2=\\"12\\" y2=\\"3\\" />\\n  </Icon>\\n  </Link>\\n  <Link label=\\"다음 단계\\">\\n  <template #icon>\\n    <Icon class=\\"link_icon\\">\\n      <path d=\\"M5 12h14M12 5l7 7-7 7\\" />\\n    </Icon>\\n  </template>\\n  </Link>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<div class="link_row">
      <Link label="외부 링크">
        <template #icon>
          <Icon class="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>
        </template>
      </Link>

      <Link>
        다운로드
        <Icon class="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>

      <Link label="다음 단계">
        <template #icon>
          <Icon class="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        </template>
      </Link>
    </div>\`
  })
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var R,T,$;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "새 창 열기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Link\\n  href=\\"https://example.com\\"\\n  target=\\"_blank\\"\\n  rel=\\"noopener noreferrer\\"\\n  >\\n  공식 문서\\n  <span class=\\"color_muted size_sm\\">(새 창)</span>\\n  <Icon class=\\"link_icon\\">\\n    <path d=\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\" />\\n    <polyline points=\\"15 3 21 3 21 9\\" />\\n    <line x1=\\"10\\" y1=\\"14\\" x2=\\"21\\" y2=\\"3\\" />\\n  </Icon>\\n  </Link>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<Link
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      공식 문서
      <span class="color_muted size_sm">(새 창)</span>
      <Icon class="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>\`
  })
}`,...($=(T=m.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var j,q,G;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      source: {
        code: "<script setup>\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Link disabled label=\\"비활성 링크\\" />\\n  <Link disabled label=\\"비활성 (span)\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<Link disabled label="비활성 링크" />
    <Link disabled label="비활성 (span)" />\`
  })
}`,...(G=(q=k.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "문맥 속 사용",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Alert title=\\"업데이트 안내\\">\\n    새 버전이 출시되었습니다.\\n    <Link size=\\"sm\\" label=\\"릴리스 노트 보기\\" />\\n  </Alert>\\n  <p class=\\"color_muted\\">\\n    계정이 없으신가요?\\n    <Link label=\\"회원가입\\" />\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Link,
      Alert,
      Icon
    },
    template: \`<Alert title="업데이트 안내">
      새 버전이 출시되었습니다.
      <Link size="sm" label="릴리스 노트 보기" />
    </Alert>

    <p class="color_muted">
      계정이 없으신가요?
      <Link label="회원가입" />
    </p>\`
  })
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const bn=["Playground","Basic","Color","Size","Style","Nav","Block","IconOnly","IconDemo","External","Disabled","Context"];export{o as Basic,u as Block,i as Color,C as Context,k as Disabled,m as External,p as IconDemo,s as IconOnly,c as Nav,l as Playground,t as Size,r as Style,bn as __namedExportsOrder,Ln as default};
