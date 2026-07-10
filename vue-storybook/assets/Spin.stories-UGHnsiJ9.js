import{a as e,_ as n}from"./SpinWrap-5xOPIFR4.js";import{_ as a}from"./Button-C3SXv-sJ.js";import{_ as o}from"./Card-CnKjvY8r.js";import{_ as r}from"./CardBody-Qf4M-sZS.js";import{_ as u}from"./CardHeader-Chkk5for.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";const $=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],L=[{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"스피너 크기. sm·lg는 spin_sm · spin_lg 클래스"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"공통 color_* 클래스로 스피너 색상 지정"},{name:"tip",type:"string",default:"—",description:"스피너 아래 설명 텍스트 (spin_tip)"},{name:"inline",type:"boolean",default:"false",description:"스피너·텍스트 가로 배치 (spin_inline)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 안 가운데 정렬 (spin_block)"},{name:"overlay",type:"boolean",default:"false",description:"컨테이너 전체를 덮는 오버레이 레이어 (spin_overlay)"},{name:"aria-label",type:"string",default:"로딩 중",description:"스크린 리더용 로딩 설명"}],J=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],M=[{name:"loading",type:"boolean",default:"false",description:"true일 때 is-loading + 오버레이 Spin 표시"},{name:"block",type:"boolean",default:"false",description:"데모·빈 상태용 최소 높이 (spin_wrap-block)"},{name:"blur",type:"boolean",default:"false",description:"로딩 시 콘텐츠 블러 (spin_wrap-blur)"},{name:"tip",type:"string",default:"—",description:"오버레이 Spin에 전달할 설명 텍스트"},{name:"aria-label",type:"string",default:"로딩 중",description:"오버레이 Spin에 전달할 접근성 라벨"}],V=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],j=[{name:"default",description:"tip 외 추가 콘텐츠 (선택)"}],G=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],K=[{name:"default",description:"오버레이 아래 실제 콘텐츠 (spin_wrap-body)"}],N=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Q=[{name:"spin",description:"루트 래퍼 (인라인 flex)"},{name:"spin_indicator",description:"회전하는 원형 스피너"},{name:"spin_tip",description:"스피너 아래 설명 텍스트 (선택)"},{name:"spin_sm · spin_lg",description:"크기 변형"},{name:"spin_inline",description:"스피너·텍스트 가로 배치"},{name:"spin_block",description:"부모 너비 안 가운데 정렬"},{name:"spin_wrap",description:"오버레이용 상대 위치 컨테이너"},{name:"spin_wrap-body",description:"오버레이 아래 실제 콘텐츠"},{name:"spin_overlay",description:"컨테이너 전체를 덮는 스피너 레이어"},{name:"spin_wrap-block",description:"데모·빈 상태용 최소 높이"},{name:"spin_wrap-blur",description:"로딩 시 콘텐츠 블러"},{name:"is-loading",description:"spin_wrap에 지정 — 오버레이 표시"},{name:"color_primary · color_success · color_warning · color_danger",description:"공통 색상 변형"},{name:'role="status"',description:"로딩 상태 시맨틱 (권장)"},{name:'aria-busy="true"',description:"처리 중 표시"},{name:'aria-live="polite"',description:"스크린 리더에 상태 변경 알림"},{name:"aria-label",description:"접근 가능한 로딩 설명"}],R=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],U=[{name:"--spin-size",default:"2rem",description:"스피너 지름"},{name:"--spin-size-sm · --spin-size-lg",default:"1.25rem · 3rem",description:"크기 변형별 지름"},{name:"--spin-border",default:"3px",description:"스피너 테두리 두께"},{name:"--spin-border-sm · --spin-border-lg",default:"2px · 4px",description:"크기 변형별 테두리"},{name:"--spin-duration",default:"0.8s",description:"회전 애니메이션 주기"},{name:"--spin-gap",default:"var(--space-sm)",description:"스피너·텍스트 간격"},{name:"--spin-tip-size",default:"var(--text-size-sm)",description:"설명 텍스트 크기"},{name:"--spin-overlay-bg",default:"var(--color-overlay)",description:"오버레이 배경"},{name:"--spin-wrap-min-height",default:"8rem",description:"spin_wrap-block 최소 높이"},{name:"--spin-wrap-content-opacity",default:"0.45",description:"로딩 시 콘텐츠 불투명도"}],X=[{title:"API · Spin Props",tables:[{columns:$,rows:L,codeColumn:"name"}]},{title:"API · SpinWrap Props",tables:[{columns:J,rows:M,codeColumn:"name"}]},{title:"API · Spin Slots",tables:[{columns:V,rows:j,codeColumn:"name"}]},{title:"API · SpinWrap Slots",tables:[{columns:G,rows:K,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:N,rows:Q,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:R,rows:U,codeColumn:"name"}]}],pn={title:"Components/피드백/Spin",id:"components-spin",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tip:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},overlay:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:X}},i={args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:O=>({components:{Spin:n},setup(){return{args:O}},template:'<Spin v-bind="args" />'})},t={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>spin</code> · <code class=&quot;typo_code&quot;>spin_indicator</code>로 회전 스피너를 표시합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin />
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:"<Spin />"})},p={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>spin_sm</code> · <code class=&quot;typo_code&quot;>spin</code>(기본) · <code class=&quot;typo_code&quot;>spin_lg</code> 세 가지 크기를 지원합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin size="sm" />
  <Spin />
  <Spin size="lg" />
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:`<Spin size="sm" />
    <Spin />
    <Spin size="lg" />`})},s={name:"색상",parameters:{demoPreview:{stack:!1},docs:{description:{story:"공통 <code class=&quot;typo_code&quot;>color_*</code> 클래스로 의미를 표현합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin color="primary" aria-label="Primary 로딩" />
  <Spin color="success" aria-label="Success 로딩" />
  <Spin color="warning" aria-label="Warning 로딩" />
  <Spin color="danger" aria-label="Danger 로딩" />
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:`<Spin color="primary" aria-label="Primary 로딩" />
    <Spin color="success" aria-label="Success 로딩" />
    <Spin color="warning" aria-label="Warning 로딩" />
    <Spin color="danger" aria-label="Danger 로딩" />`})},l={name:"설명 텍스트",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>spin_tip</code>으로 스피너 아래에 로딩 메시지를 표시합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
  <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:`<Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
    <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />`})},d={name:"인라인",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>spin_inline</code>으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <p>
    <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
  </p>
  <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:`<p>
      <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
    </p>

    <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />`})},c={name:"블록 정렬",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>spin_block</code>은 부모 너비 안에서 스피너를 가운데 정렬합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:'<Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />'})},C={name:"컨테이너 오버레이",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>spin_wrap</code>에 <code class=&quot;typo_code&quot;>is-loading</code>을 지정하면 콘텐츠 위에 <code class=&quot;typo_code&quot;>spin_overlay</code>가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import SpinWrap from '@uxkm/ui/components/SpinWrap.vue';
<\/script>

<template>
  <SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
    <Card variant="shadow">
      <CardHeader title="대시보드" />
      <CardBody>
        <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
      </CardBody>
    </Card>
  </SpinWrap>
  <SpinWrap block blur loading aria-label="처리 중" style="max-width: var(--input-max-width); margin-top: var(--space-md);">
    <Card variant="shadow">
      <CardHeader title="블러 효과" />
      <CardBody>
        <p>
          <code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>
</template>`,language:"vue"}}},render:()=>({components:{Spin:n,Button:a,Card:o,CardBody:r,CardHeader:u,SpinWrap:e},template:`<SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
      <Card variant="shadow">
        <CardHeader title="대시보드" />
        <CardBody>
          <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>

    <SpinWrap block blur loading aria-label="처리 중" style="max-width: var(--input-max-width); margin-top: var(--space-md);">
      <Card variant="shadow">
        <CardHeader title="블러 효과" />
        <CardBody>
          <p><code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>`})};var m,B,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: args => ({
    components: {
      Spin
    },
    setup() {
      return {
        args
      };
    },
    template: '<Spin v-bind="args" />'
  })
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var S,b,g;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>spin</code> · <code class=&quot;typo_code&quot;>spin_indicator</code>로 회전 스피너를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<Spin />\`
  })
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var D,_,v;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>spin_sm</code> · <code class=&quot;typo_code&quot;>spin</code>(기본) · <code class=&quot;typo_code&quot;>spin_lg</code> 세 가지 크기를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin size=\\"sm\\" />\\n  <Spin />\\n  <Spin size=\\"lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<Spin size="sm" />
    <Spin />
    <Spin size="lg" />\`
  })
}`,...(v=(_=p.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var f,k,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "공통 <code class=&quot;typo_code&quot;>color_*</code> 클래스로 의미를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin color=\\"primary\\" aria-label=\\"Primary 로딩\\" />\\n  <Spin color=\\"success\\" aria-label=\\"Success 로딩\\" />\\n  <Spin color=\\"warning\\" aria-label=\\"Warning 로딩\\" />\\n  <Spin color=\\"danger\\" aria-label=\\"Danger 로딩\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<Spin color="primary" aria-label="Primary 로딩" />
    <Spin color="success" aria-label="Success 로딩" />
    <Spin color="warning" aria-label="Warning 로딩" />
    <Spin color="danger" aria-label="Danger 로딩" />\`
  })
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,E,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "설명 텍스트",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>spin_tip</code>으로 스피너 아래에 로딩 메시지를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin tip=\\"데이터를 불러오는 중…\\" aria-label=\\"데이터를 불러오는 중\\" />\\n  <Spin size=\\"lg\\" tip=\\"파일 업로드 중…\\" aria-label=\\"파일 업로드 중\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
    <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />\`
  })
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var q,W,P;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "인라인",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>spin_inline</code>으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    <Spin size=\\"sm\\" inline color=\\"primary\\" tip=\\"저장 중…\\" aria-label=\\"저장 중\\" />\\n  </p>\\n  <Button variant=\\"filled\\" color=\\"primary\\" loading disabled aria-busy=\\"true\\" label=\\"제출 중…\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<p>
      <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
    </p>

    <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />\`
  })
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,H,h;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "블록 정렬",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>spin_block</code>은 부모 너비 안에서 스피너를 가운데 정렬합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin block color=\\"primary\\" tip=\\"잠시만 기다려 주세요…\\" aria-label=\\"로딩 중\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />\`
  })
}`,...(h=(H=c.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var F,I,T;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "컨테이너 오버레이",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>spin_wrap</code>에 <code class=&quot;typo_code&quot;>is-loading</code>을 지정하면 콘텐츠 위에 <code class=&quot;typo_code&quot;>spin_overlay</code>가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\nimport SpinWrap from '@uxkm/ui/components/SpinWrap.vue';\\n<\/script>\\n\\n<template>\\n  <SpinWrap block loading tip=\\"데이터 로딩 중…\\" aria-label=\\"데이터 로딩 중\\" style=\\"max-width: var(--input-max-width);\\">\\n    <Card variant=\\"shadow\\">\\n      <CardHeader title=\\"대시보드\\" />\\n      <CardBody>\\n        <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>\\n      </CardBody>\\n    </Card>\\n  </SpinWrap>\\n  <SpinWrap block blur loading aria-label=\\"처리 중\\" style=\\"max-width: var(--input-max-width); margin-top: var(--space-md);\\">\\n    <Card variant=\\"shadow\\">\\n      <CardHeader title=\\"블러 효과\\" />\\n      <CardBody>\\n        <p>\\n          <code class=\\"typo_code\\">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>\\n        </CardBody>\\n      </Card>\\n    </SpinWrap>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Spin,
      Button,
      Card,
      CardBody,
      CardHeader,
      SpinWrap
    },
    template: \`<SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
      <Card variant="shadow">
        <CardHeader title="대시보드" />
        <CardBody>
          <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>

    <SpinWrap block blur loading aria-label="처리 중" style="max-width: var(--input-max-width); margin-top: var(--space-md);">
      <Card variant="shadow">
        <CardHeader title="블러 효과" />
        <CardBody>
          <p><code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
        </CardBody>
      </Card>
    </SpinWrap>\`
  })
}`,...(T=(I=C.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const sn=["Playground","Basic","Size","Color","Tip","Inline","Block","Overlay"];export{t as Basic,c as Block,s as Color,d as Inline,C as Overlay,i as Playground,p as Size,l as Tip,sn as __namedExportsOrder,pn as default};
