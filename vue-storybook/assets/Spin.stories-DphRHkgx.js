import{u as nn,a as en,b as q,o as y,c as g,d as M,t as an,g as G,r as K,n as Q,h as X,i as Y,j as Z,m as rn,q as sn}from"./iframe-_Cy3TTd_.js";import{w as i,s as on}from"./story-renders-BkwSCuFa.js";import{_ as un}from"./Card-PBzOgZZn.js";import{_ as tn}from"./CardBody-QDksiqpL.js";import{_ as ln}from"./CardHeader-Cg9TqUQo.js";import"./preload-helper-PMqzWbAN.js";const pn=["aria-label"],cn={key:0,class:"spin_tip"},a=Object.assign({inheritAttrs:!1},{__name:"Spin",props:{size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},tip:String,color:{type:String,default:"primary"},inline:Boolean,block:Boolean,overlay:Boolean,ariaLabel:{type:String,default:"로딩 중"}},setup(n){const e=n,u=nn(),s=en(),t=X(null),f=Y("Spin",{defaults:{size:"md",color:"primary"},booleanProps:new Set(["inline","block","overlay"]),selfClosing:!1});q(f,e,u,t,s);const S=Z(()=>{const r=["spin",`color_${e.color}`];return e.size==="sm"&&r.push("spin_sm"),e.size==="lg"&&r.push("spin_lg"),e.inline&&r.push("spin_inline"),e.block&&r.push("spin_block"),e.overlay&&r.push("spin_overlay"),s.class&&r.push(s.class),r});return(r,v)=>(y(),g("div",{ref_key:"rootRef",ref:t,class:Q(S.value),role:"status","aria-live":"polite","aria-busy":"true","aria-label":n.ariaLabel},[v[0]||(v[0]=M("span",{class:"spin_indicator","aria-hidden":"true"},null,-1)),n.tip?(y(),g("p",cn,an(n.tip),1)):G("",!0),K(r.$slots,"default")],10,pn))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"Spin",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"tip",type:{name:"string"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"inline",type:{name:"boolean"}},{name:"block",type:{name:"boolean"}},{name:"overlay",type:{name:"boolean"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'로딩 중'"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Spin.vue"]});const mn={class:"spin_wrap-body"},o={__name:"SpinWrap",props:{loading:Boolean,block:Boolean,blur:Boolean,tip:String,ariaLabel:{type:String,default:"로딩 중"}},setup(n){const e=n,u=X(null),s=Y("SpinWrap",{booleanProps:new Set(["loading","block","blur"]),selfClosing:!1});q(s,e,{},u,{});const t=Z(()=>["spin_wrap",{"spin_wrap-block":e.block,"spin_wrap-blur":e.blur,"is-loading":e.loading}]);return(f,S)=>(y(),g("div",{ref_key:"rootRef",ref:u,class:Q(t.value)},[M("div",mn,[K(f.$slots,"default")]),n.loading?(y(),rn(a,{key:0,overlay:"",tip:n.tip,"aria-label":n.ariaLabel},null,8,["tip","aria-label"])):G("",!0)],2))}};o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"SpinWrap",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"}},{name:"block",type:{name:"boolean"}},{name:"blur",type:{name:"boolean"}},{name:"tip",type:{name:"string"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'로딩 중'"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/SpinWrap.vue"]});const dn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Cn=[{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"스피너 크기. sm·lg는 spin_sm · spin_lg 클래스"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"공통 color_* 클래스로 스피너 색상 지정"},{name:"tip",type:"string",default:"—",description:"스피너 아래 설명 텍스트 (spin_tip)"},{name:"inline",type:"boolean",default:"false",description:"스피너·텍스트 가로 배치 (spin_inline)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 안 가운데 정렬 (spin_block)"},{name:"overlay",type:"boolean",default:"false",description:"컨테이너 전체를 덮는 오버레이 레이어 (spin_overlay)"},{name:"aria-label",type:"string",default:"로딩 중",description:"스크린 리더용 로딩 설명"}],Bn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],bn=[{name:"loading",type:"boolean",default:"false",description:"true일 때 is-loading + 오버레이 Spin 표시"},{name:"block",type:"boolean",default:"false",description:"데모·빈 상태용 최소 높이 (spin_wrap-block)"},{name:"blur",type:"boolean",default:"false",description:"로딩 시 콘텐츠 블러 (spin_wrap-blur)"},{name:"tip",type:"string",default:"—",description:"오버레이 Spin에 전달할 설명 텍스트"},{name:"aria-label",type:"string",default:"로딩 중",description:"오버레이 Spin에 전달할 접근성 라벨"}],yn=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],fn=[{name:"default",description:"tip 외 추가 콘텐츠 (선택)"}],gn=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Sn=[{name:"default",description:"오버레이 아래 실제 콘텐츠 (spin_wrap-body)"}],vn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Dn=[{name:"spin",description:"루트 래퍼 (인라인 flex)"},{name:"spin_indicator",description:"회전하는 원형 스피너"},{name:"spin_tip",description:"스피너 아래 설명 텍스트 (선택)"},{name:"spin_sm · spin_lg",description:"크기 변형"},{name:"spin_inline",description:"스피너·텍스트 가로 배치"},{name:"spin_block",description:"부모 너비 안 가운데 정렬"},{name:"spin_wrap",description:"오버레이용 상대 위치 컨테이너"},{name:"spin_wrap-body",description:"오버레이 아래 실제 콘텐츠"},{name:"spin_overlay",description:"컨테이너 전체를 덮는 스피너 레이어"},{name:"spin_wrap-block",description:"데모·빈 상태용 최소 높이"},{name:"spin_wrap-blur",description:"로딩 시 콘텐츠 블러"},{name:"is-loading",description:"spin_wrap에 지정 — 오버레이 표시"},{name:"color_primary · color_success · color_warning · color_danger",description:"공통 색상 변형"},{name:'role="status"',description:"로딩 상태 시맨틱 (권장)"},{name:'aria-busy="true"',description:"처리 중 표시"},{name:'aria-live="polite"',description:"스크린 리더에 상태 변경 알림"},{name:"aria-label",description:"접근 가능한 로딩 설명"}],kn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_n=[{name:"--spin-size",default:"2rem",description:"스피너 지름"},{name:"--spin-size-sm · --spin-size-lg",default:"1.25rem · 3rem",description:"크기 변형별 지름"},{name:"--spin-border",default:"3px",description:"스피너 테두리 두께"},{name:"--spin-border-sm · --spin-border-lg",default:"2px · 4px",description:"크기 변형별 테두리"},{name:"--spin-duration",default:"0.8s",description:"회전 애니메이션 주기"},{name:"--spin-gap",default:"var(--space-sm)",description:"스피너·텍스트 간격"},{name:"--spin-tip-size",default:"var(--text-size-sm)",description:"설명 텍스트 크기"},{name:"--spin-overlay-bg",default:"rgba(15, 20, 25, 0.72)",description:"오버레이 배경 (tip 명도 대비용 불투명도)"},{name:"--spin-overlay-tip-color",default:"#ffffff",description:"오버레이 위 tip 텍스트 색"},{name:"--spin-wrap-min-height",default:"8rem",description:"spin_wrap-block 최소 높이"},{name:"--spin-wrap-content-opacity",default:"0.45",description:"로딩 시 콘텐츠 불투명도"}],wn=[{title:"API · Spin Props",tables:[{columns:dn,rows:Cn,codeColumn:"name"}]},{title:"API · SpinWrap Props",tables:[{columns:Bn,rows:bn,codeColumn:"name"}]},{title:"API · Spin Slots",tables:[{columns:yn,rows:fn,codeColumn:"name"}]},{title:"API · SpinWrap Slots",tables:[{columns:gn,rows:Sn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:vn,rows:Dn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:kn,rows:_n,codeColumn:"name"}]}],Pn={title:"Components/피드백/Spin",id:"components-spin",component:a,subcomponents:{SpinWrap:o},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tip:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},overlay:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:wn}},l={parameters:{controls:{disable:!1}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:(n,e)=>({components:{Spin:a},setup(){return{args:on(e)}},template:'<Spin v-bind="args" />'})},p={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin` · `spin_indicator`로 회전 스피너를 표시합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:a},template:"<Spin />"}))},c={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin_sm` · `spin`(기본) · `spin_lg` 세 가지 크기를 지원합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin size="sm" />
  <Spin />
  <Spin size="lg" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:a},template:`<Spin size="sm" />
      <Spin />
      <Spin size="lg" />`}))},m={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 `color_*` 클래스로 의미를 표현합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin color="primary" aria-label="Primary 로딩" />
  <Spin color="success" aria-label="Success 로딩" />
  <Spin color="warning" aria-label="Warning 로딩" />
  <Spin color="danger" aria-label="Danger 로딩" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:a},template:`<Spin color="primary" aria-label="Primary 로딩" />
      <Spin color="success" aria-label="Success 로딩" />
      <Spin color="warning" aria-label="Warning 로딩" />
      <Spin color="danger" aria-label="Danger 로딩" />`}))},d={name:"설명 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`spin_tip`으로 스피너 아래에 로딩 메시지를 표시합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
  <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:a},template:`<Spin tip="데이터를 불러오는 중…" aria-label="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" aria-label="파일 업로드 중" />`}))},C={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`spin_inline`으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <p>
    <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
  </p>
  <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Button:sn,Spin:a},template:`<p>
        <Spin size="sm" inline color="primary" tip="저장 중…" aria-label="저장 중" />
      </p>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />`}))},B={name:"블록 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`spin_block`은 부모 너비 안에서 스피너를 가운데 정렬합니다."},source:{code:`<script setup>
import Spin from '@uxkm/ui/components/Spin.vue';
<\/script>

<template>
  <Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />
</template>`,language:"vue"}}},args:{size:"md",tip:"값",color:"primary",inline:!1,block:!1,overlay:!1,ariaLabel:"로딩 중"},render:i(()=>({components:{Spin:a},template:'<Spin block color="primary" tip="잠시만 기다려 주세요…" aria-label="로딩 중" />'}))},b={name:"컨테이너 오버레이",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"`spin_wrap`에 `is-loading`을 지정하면 콘텐츠 위에 `spin_overlay`가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:(()=>{const n=()=>({components:{Card:un,CardBody:tn,CardHeader:ln,SpinWrap:o},template:`<SpinWrap block loading tip="데이터 로딩 중…" aria-label="데이터 로딩 중" style="max-width: var(--input-max-width);">
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
        </SpinWrap>`});return i(n,n)})()};var D,k,_;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var w,A,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(A=p.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var E,h,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(h=c.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var W,P,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(P=m.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var F,H,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var $,I,N;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(I=C.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var O,V,T;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(V=B.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var j,J,U;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(J=b.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const Ln=["Playground","Basic","Size","Color","Tip","Inline","Block","Overlay"];export{p as Basic,B as Block,m as Color,C as Inline,b as Overlay,l as Playground,c as Size,d as Tip,Ln as __namedExportsOrder,Pn as default};
