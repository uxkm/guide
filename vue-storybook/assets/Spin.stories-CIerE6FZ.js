import{u as nn,a as en,b as q,c as f,d as M,t as an,f as G,r as K,n as Q,g as U,o as b,i as X,j as Y,m as rn,q as on}from"./iframe-CAswI7Qe.js";import{w as i,s as sn}from"./story-renders-DjeoaiCa.js";import{_ as un}from"./Card-BLbeiOTl.js";import{_ as tn}from"./CardBody-CJBLPEWW.js";import{_ as pn}from"./CardHeader-CxyaXSBf.js";import"./preload-helper-PMqzWbAN.js";const ln=["aria-label"],cn={key:0,class:"spin_tip"},r=Object.assign({inheritAttrs:!1},{__name:"Spin",props:{size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},tip:String,color:{type:String,default:"primary"},inline:Boolean,block:Boolean,overlay:Boolean,ariaLabel:{type:String,default:"로딩 중"}},setup(n){const e=n,s=nn(),o=en(),u=X(null),y=Y("Spin",{defaults:{size:"md",color:"primary"},booleanProps:new Set(["inline","block","overlay"]),selfClosing:!1});q(y,e,s,u,o);const S=U(()=>{const a=["spin",`color_${e.color}`];return e.size==="sm"&&a.push("spin_sm"),e.size==="lg"&&a.push("spin_lg"),e.inline&&a.push("spin_inline"),e.block&&a.push("spin_block"),e.overlay&&a.push("spin_overlay"),o.class&&a.push(o.class),a});return(a,g)=>(b(),f("div",{ref_key:"rootRef",ref:u,class:Q(S.value),role:"status","aria-live":"polite","aria-busy":"true","aria-label":n.ariaLabel},[g[0]||(g[0]=M("span",{class:"spin_indicator","aria-hidden":"true"},null,-1)),n.tip?(b(),f("p",cn,an(n.tip),1)):G("",!0),K(a.$slots,"default")],10,ln))}}),mn={class:"spin_wrap-body"},Z={__name:"SpinWrap",props:{loading:Boolean,block:Boolean,blur:Boolean,tip:String,ariaLabel:{type:String,default:"로딩 중"}},setup(n){const e=n,s=X(null),o=Y("SpinWrap",{booleanProps:new Set(["loading","block","blur"]),selfClosing:!1});q(o,e,{},s,{});const u=U(()=>["spin_wrap",{"spin_wrap-block":e.block,"spin_wrap-blur":e.blur,"is-loading":e.loading}]);return(y,S)=>(b(),f("div",{ref_key:"rootRef",ref:s,class:Q(u.value)},[M("div",mn,[K(y.$slots,"default")]),n.loading?(b(),rn(r,{key:0,overlay:"",tip:n.tip,"aria-label":n.ariaLabel},null,8,["tip","aria-label"])):G("",!0)],2))}},Cn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],dn=[{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"스피너 크기. sm·lg는 spin_sm · spin_lg 클래스"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"공통 color_* 클래스로 스피너 색상 지정"},{name:"tip",type:"string",default:"—",description:"스피너 아래 설명 텍스트 (spin_tip)"},{name:"inline",type:"boolean",default:"false",description:"스피너·텍스트 가로 배치 (spin_inline)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 안 가운데 정렬 (spin_block)"},{name:"overlay",type:"boolean",default:"false",description:"컨테이너 전체를 덮는 오버레이 레이어 (spin_overlay)"},{name:"aria-label",type:"string",default:"로딩 중",description:"스크린 리더용 로딩 설명"}],Bn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],bn=[{name:"loading",type:"boolean",default:"false",description:"true일 때 is-loading + 오버레이 Spin 표시"},{name:"block",type:"boolean",default:"false",description:"데모·빈 상태용 최소 높이 (spin_wrap-block)"},{name:"blur",type:"boolean",default:"false",description:"로딩 시 콘텐츠 블러 (spin_wrap-blur)"},{name:"tip",type:"string",default:"—",description:"오버레이 Spin에 전달할 설명 텍스트"},{name:"aria-label",type:"string",default:"로딩 중",description:"오버레이 Spin에 전달할 접근성 라벨"}],yn=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],fn=[{name:"default",description:"tip 외 추가 콘텐츠 (선택)"}],Sn=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],gn=[{name:"default",description:"오버레이 아래 실제 콘텐츠 (spin_wrap-body)"}],Dn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],vn=[{name:"spin",description:"루트 래퍼 (인라인 flex)"},{name:"spin_indicator",description:"회전하는 원형 스피너"},{name:"spin_tip",description:"스피너 아래 설명 텍스트 (선택)"},{name:"spin_sm · spin_lg",description:"크기 변형"},{name:"spin_inline",description:"스피너·텍스트 가로 배치"},{name:"spin_block",description:"부모 너비 안 가운데 정렬"},{name:"spin_wrap",description:"오버레이용 상대 위치 컨테이너"},{name:"spin_wrap-body",description:"오버레이 아래 실제 콘텐츠"},{name:"spin_overlay",description:"컨테이너 전체를 덮는 스피너 레이어"},{name:"spin_wrap-block",description:"데모·빈 상태용 최소 높이"},{name:"spin_wrap-blur",description:"로딩 시 콘텐츠 블러"},{name:"is-loading",description:"spin_wrap에 지정 — 오버레이 표시"},{name:"color_primary · color_success · color_warning · color_danger",description:"공통 색상 변형"},{name:'role="status"',description:"로딩 상태 시맨틱 (권장)"},{name:'aria-busy="true"',description:"처리 중 표시"},{name:'aria-live="polite"',description:"스크린 리더에 상태 변경 알림"},{name:"aria-label",description:"접근 가능한 로딩 설명"}],kn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_n=[{name:"--spin-size",default:"2rem",description:"스피너 지름"},{name:"--spin-size-sm · --spin-size-lg",default:"1.25rem · 3rem",description:"크기 변형별 지름"},{name:"--spin-border",default:"3px",description:"스피너 테두리 두께"},{name:"--spin-border-sm · --spin-border-lg",default:"2px · 4px",description:"크기 변형별 테두리"},{name:"--spin-duration",default:"0.8s",description:"회전 애니메이션 주기"},{name:"--spin-gap",default:"var(--space-sm)",description:"스피너·텍스트 간격"},{name:"--spin-tip-size",default:"var(--text-size-sm)",description:"설명 텍스트 크기"},{name:"--spin-overlay-bg",default:"rgba(15, 20, 25, 0.72)",description:"오버레이 배경 (tip 명도 대비용 불투명도)"},{name:"--spin-overlay-tip-color",default:"#ffffff",description:"오버레이 위 tip 텍스트 색"},{name:"--spin-wrap-min-height",default:"8rem",description:"spin_wrap-block 최소 높이"},{name:"--spin-wrap-content-opacity",default:"0.45",description:"로딩 시 콘텐츠 불투명도"}],wn=[{title:"API · Spin Props",tables:[{columns:Cn,rows:dn,codeColumn:"name"}]},{title:"API · SpinWrap Props",tables:[{columns:Bn,rows:bn,codeColumn:"name"}]},{title:"API · Spin Slots",tables:[{columns:yn,rows:fn,codeColumn:"name"}]},{title:"API · SpinWrap Slots",tables:[{columns:Sn,rows:gn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Dn,rows:vn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:kn,rows:_n,codeColumn:"name"}]}],Pn={title:"Components/피드백/Spin",id:"components-spin",component:r,subcomponents:{SpinWrap:Z},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tip:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},overlay:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:wn}},t={parameters:{controls:{disable:!1}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:(n,e)=>({components:{Spin:r},setup(){return{args:sn(e)}},template:'<Spin v-bind="args" />'})},p={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin` · `spin_indicator`로 회전 스피너를 표시합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:r},template:"<Spin />"}))},l={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin_sm` · `spin`(기본) · `spin_lg` 세 가지 크기를 지원합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin size="sm" />
  <Spin />
  <Spin size="lg" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:r},template:`<Spin size="sm" />
      <Spin />
      <Spin size="lg" />`}))},c={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 `color_*` 클래스로 의미를 표현합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin color="primary" aria-label="Primary 로딩" />
  <Spin color="success" aria-label="Success 로딩" />
  <Spin color="warning" aria-label="Warning 로딩" />
  <Spin color="danger" aria-label="Danger 로딩" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:r},template:`<Spin color="primary" aria-label="Primary 로딩" />
      <Spin color="success" aria-label="Success 로딩" />
      <Spin color="warning" aria-label="Warning 로딩" />
      <Spin color="danger" aria-label="Danger 로딩" />`}))},m={name:"설명 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin_tip`으로 스피너 아래에 로딩 메시지를 표시합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
  <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:r},template:`<Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />`}))},C={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`spin_inline`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <p>
    <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
  </p>
  <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Button:on,Spin:r},template:`<p>
        <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />`}))},d={name:"블록 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`spin_block`은 부모 너비 안에서 스피너를 가운데 정렬합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:r},template:'<Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />'}))},B={name:"컨테이너 오버레이",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"`spin_wrap`에 `is-loading`을 지정하면 콘텐츠 위에 `spin_overlay`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:(()=>{const n=()=>({components:{Card:un,CardBody:tn,CardHeader:pn,SpinWrap:Z},template:`<SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
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
        </SpinWrap>`});return i(n,n)})()};var D,v,k;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: (_args, context) => ({
    components: {
      Spin
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Spin v-bind="args" />'
  })
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var _,w,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        story: "\`spin\` · \`spin_indicator\`로 회전 스피너를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    ariaLabel: "로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Spin
    },
    template: \`<Spin />\`
  }))
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,x,h;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        story: "\`spin_sm\` · \`spin\`(기본) · \`spin_lg\` 세 가지 크기를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin size=\\"sm\\" />\\n  <Spin />\\n  <Spin size=\\"lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Spin
    },
    template: \`<Spin size="sm" />
      <Spin />
      <Spin size="lg" />\`
  }))
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var z,W,P;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        story: "공통 \`color_*\` 클래스로 의미를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin color=\\"primary\\" aria-label=\\"Primary 로딩\\" />\\n  <Spin color=\\"success\\" aria-label=\\"Success 로딩\\" />\\n  <Spin color=\\"warning\\" aria-label=\\"Warning 로딩\\" />\\n  <Spin color=\\"danger\\" aria-label=\\"Danger 로딩\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Spin
    },
    template: \`<Spin color="primary" aria-label="Primary 로딩" />
      <Spin color="success" aria-label="Success 로딩" />
      <Spin color="warning" aria-label="Warning 로딩" />
      <Spin color="danger" aria-label="Danger 로딩" />\`
  }))
}`,...(P=(W=c.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var L,F,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "설명 텍스트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`spin_tip\`으로 스피너 아래에 로딩 메시지를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin tip=\\"데이터를 불러오는 중…\\" aria-label=\\"데이터를 불러오는 중\\" />\\n  <Spin size=\\"lg\\" tip=\\"파일 업로드 중…\\" aria-label=\\"파일 업로드 중\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Spin
    },
    template: \`<Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />\`
  }))
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var R,$,I;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "인라인",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`spin_inline\`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    <Spin size=\\"sm\\" inline color=\\"primary\\" tip=\\"저장 중…\\" aria-label=\\"저장 중\\" />\\n  </p>\\n  <Button variant=\\"filled\\" color=\\"primary\\" loading disabled aria-busy=\\"true\\" label=\\"제출 중…\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Spin
    },
    template: \`<p>
        <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />\`
  }))
}`,...(I=($=C.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var O,T,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "블록 정렬",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`spin_block\`은 부모 너비 안에서 스피너를 가운데 정렬합니다."
      },
      source: {
        code: "<script setup>\\nimport Spin from '@uxkm/ui/components/Spin.vue';\\n<\/script>\\n\\n<template>\\n  <Spin block color=\\"primary\\" tip=\\"잠시만 기다려 주세요…\\" aria-label=\\"로딩 중\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    tip: "값",
    color: "primary",
    inline: false,
    block: false,
    overlay: false,
    ariaLabel: "로딩 중"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Spin
    },
    template: \`<Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />\`
  }))
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var j,J,N;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "컨테이너 오버레이",
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "\`spin_wrap\`에 \`is-loading\`을 지정하면 콘텐츠 위에 \`spin_overlay\`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\nimport SpinWrap from '@uxkm/ui/components/SpinWrap.vue';\\n<\/script>\\n\\n<template>\\n  <SpinWrap block loading tip=\\"데이터 로딩 중…\\" aria-label=\\"데이터 로딩 중\\" style=\\"max-width: var(--input-max-width);\\">\\n    <Card variant=\\"shadow\\">\\n      <CardHeader title=\\"대시보드\\" />\\n      <CardBody>\\n        <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>\\n      </CardBody>\\n    </Card>\\n  </SpinWrap>\\n  <SpinWrap block blur loading aria-label=\\"처리 중\\" style=\\"max-width: var(--input-max-width); margin-top: var(--space-md);\\">\\n    <Card variant=\\"shadow\\">\\n      <CardHeader title=\\"블러 효과\\" />\\n      <CardBody>\\n        <p>\\n          <code class=\\"typo_code\\">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>\\n        </CardBody>\\n      </Card>\\n    </SpinWrap>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: (() => {
    const demo = () => ({
      components: {
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
            <p>
              <code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
            </CardBody>
          </Card>
        </SpinWrap>\`
    });
    return withDocsCanvasRender(demo, demo);
  })()
}`,...(N=(J=B.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const Ln=["Playground","Basic","Size","Color","Tip","Inline","Block","Overlay"];export{p as Basic,d as Block,c as Color,C as Inline,B as Overlay,t as Playground,l as Size,m as Tip,Ln as __namedExportsOrder,Pn as default};
