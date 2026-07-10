import{u as J,b as Z,c as r,r as B,q as E,e as K,n as Q,f as v,o as u,J as U,g as W,t as X,a as Y}from"./vue.esm-bundler-BaZlnz8B.js";import{m as ee}from"./useDemoCode-B9b0dRAo.js";import{_ as s}from"./Button-C3SXv-sJ.js";import{_ as a}from"./Card-CnKjvY8r.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";const te={key:0,class:"empty_image","aria-hidden":"true","data-demo-slot":"image"},ne={key:1,class:"empty_desc"},oe={key:2,class:"empty_footer","data-demo-slot":"footer"},t=Object.assign({inheritAttrs:!1},{__name:"Empty",props:{description:String,size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},simple:Boolean,block:Boolean},setup(n){const o=n,g=J(),y=Z(),h=Y(null);ee(o,h,y);const G=v(()=>{const e=["empty"];return o.size==="sm"&&e.push("empty_sm"),o.size==="lg"&&e.push("empty_lg"),o.simple&&e.push("empty_simple"),o.block&&e.push("empty_block"),y.class&&e.push(y.class),e}),H=v(()=>!o.simple),R=v(()=>!!g.footer);return(e,b)=>(u(),r("div",{ref_key:"rootRef",ref:h,class:Q(G.value),role:"status"},[H.value?(u(),r("div",te,[B(e.$slots,"image",{},()=>[b[0]||(b[0]=U('<svg viewBox="0 0 64 41" fill="none" aria-hidden="true"><ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"></ellipse><path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>',1))])])):E("",!0),n.description||K(g).description?(u(),r("p",ne,[B(e.$slots,"description",{},()=>[W(X(n.description),1)])])):E("",!0),R.value?(u(),r("div",oe,[B(e.$slots,"footer")])):E("",!0)],2))}}),se=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ae=[{name:"description",type:"string",default:"—",description:"설명 텍스트. description 슬롯으로 대체"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"empty_sm · empty_lg"},{name:"simple",type:"boolean",default:"false",description:"아이콘 숨김 (empty_simple)"},{name:"block",type:"boolean",default:"false",description:"가운데 블록 정렬 (empty_block)"}],re=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ue=[{name:"image",description:"일러스트·아이콘 (empty_image)"},{name:"description",description:"설명 (description prop 대체)"},{name:"footer",description:"액션 버튼·링크 (empty_footer)"}],pe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],me=[{name:"empty · empty_image · empty_desc · empty_footer",description:"루트·이미지·설명·푸터"},{name:"empty_sm · empty_lg · empty_simple · empty_block",description:"크기·변형"},{name:'role="status"',description:"빈 상태 시맨틱"}],ie=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ce=[{name:"--empty-gap · --empty-padding-y · --empty-padding-x",default:"—",description:"간격·패딩"},{name:"--empty-image-size · --empty-image-size-sm · --empty-image-size-lg",default:"4rem · 3rem · 5rem",description:"아이콘 크기"},{name:"--empty-desc-size · --empty-desc-max-width",default:"var(--text-size-sm) · 20rem",description:"설명 타이포"}],de=[{title:"API · Props",tables:[{columns:se,rows:ae,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:re,rows:ue,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:pe,rows:me,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ie,rows:ce,codeColumn:"name"}]}],ge={title:"Components/피드백/Empty",id:"components-empty",component:t,tags:["autodocs"],argTypes:{description:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},simple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:de}},p={args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:n=>({components:{Empty:t},setup(){return{args:n}},template:'<Empty v-bind="args" />'})},m={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>empty_image</code> · <code class=&quot;typo_code&quot;>empty_desc</code>로 아이콘과 설명을 표시합니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty description="데이터가 없습니다" />
</template>`,language:"vue"}}},render:()=>({components:{Empty:t,Button:s,Card:a},template:'<Empty description="데이터가 없습니다" />'})},i={name:"액션",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>empty_footer</code>에 버튼·링크를 배치해 다음 행동을 유도합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
    <template #footer>
      <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
    </template>
  </Empty>
</template>`,language:"vue"}}},render:()=>({components:{Empty:t,Button:s,Card:a},template:`<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
      <template #footer>
        <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
      </template>
    </Empty>`})},c={name:"커스텀 이미지",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>empty_image</code>에 SVG·img를 자유롭게 넣을 수 있습니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
    <template #image>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
        <path d="M8 11h6" />
      </svg>
    </template>
  </Empty>
</template>`,language:"vue"}}},render:()=>({components:{Empty:t,Button:s,Card:a},template:`<Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
      <template #image>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      </template>
    </Empty>`})},d={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>empty_sm</code> · <code class=&quot;typo_code&quot;>empty</code>(기본) · <code class=&quot;typo_code&quot;>empty_lg</code> 세 가지 스케일을 지원합니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty size="sm" description="Small" />
  <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
  <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />
</template>`,language:"vue"}}},render:()=>({components:{Empty:t,Button:s,Card:a},template:`<Empty size="sm" description="Small" />
    <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
    <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />`})},l={name:"설명만",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>empty_simple</code>은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty simple size="sm" description="일정 없음" />
</template>`,language:"vue"}}},render:()=>({components:{Empty:t,Button:s,Card:a},template:'<Empty simple size="sm" description="일정 없음" />'})},C={name:"블록 · 컨테이너",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>empty_block</code>은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
    <div class="card_header">
      <h3 class="card_title">알림 목록</h3>
    </div>
    <div class="card_body">
      <Empty block description="새 알림이 없습니다" />
    </div>
  </Card>
  <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
    <table class="table table_bordered">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">상태</th>
          <th scope="col">날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3" style="padding: 0; border: none;">
            <Empty block simple size="sm" description="표시할 항목이 없습니다" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Empty:t,Button:s,Card:a},template:`<Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
      <div class="card_header">
        <h3 class="card_title">알림 목록</h3>
      </div>
      <div class="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </Card>

    <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
      <table class="table table_bordered">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">상태</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="padding: 0; border: none;">
              <Empty block simple size="sm" description="표시할 항목이 없습니다" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>`})};var D,f,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: args => ({
    components: {
      Empty
    },
    setup() {
      return {
        args
      };
    },
    template: '<Empty v-bind="args" />'
  })
}`,...(_=(f=p.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,w,x;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>empty_image</code> · <code class=&quot;typo_code&quot;>empty_desc</code>로 아이콘과 설명을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty description=\\"데이터가 없습니다\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Empty,
      Button,
      Card
    },
    template: \`<Empty description="데이터가 없습니다" />\`
  })
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var A,q,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "액션",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>empty_footer</code>에 버튼·링크를 배치해 다음 행동을 유도합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty description=\\"등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.\\">\\n    <template #footer>\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"프로젝트 만들기\\" />\\n    </template>\\n  </Empty>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Empty,
      Button,
      Card
    },
    template: \`<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
      <template #footer>
        <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
      </template>
    </Empty>\`
  })
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var S,F,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "커스텀 이미지",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>empty_image</code>에 SVG·img를 자유롭게 넣을 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty description=\\"검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.\\">\\n    <template #image>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" aria-hidden=\\"true\\">\\n        <circle cx=\\"11\\" cy=\\"11\\" r=\\"7\\" />\\n        <path d=\\"m20 20-3.5-3.5\\" />\\n        <path d=\\"M8 11h6\\" />\\n      </svg>\\n    </template>\\n  </Empty>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Empty,
      Button,
      Card
    },
    template: \`<Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
      <template #image>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      </template>
    </Empty>\`
  })
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var M,V,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>empty_sm</code> · <code class=&quot;typo_code&quot;>empty</code>(기본) · <code class=&quot;typo_code&quot;>empty_lg</code> 세 가지 스케일을 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty size=\\"sm\\" description=\\"Small\\" />\\n  <Empty description=\\"Medium (기본)\\" style=\\"margin-top: var(--space-md);\\" />\\n  <Empty size=\\"lg\\" description=\\"Large\\" style=\\"margin-top: var(--space-md);\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Empty,
      Button,
      Card
    },
    template: \`<Empty size="sm" description="Small" />
    <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
    <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />\`
  })
}`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var T,$,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "설명만",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>empty_simple</code>은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty simple size=\\"sm\\" description=\\"일정 없음\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Empty,
      Button,
      Card
    },
    template: \`<Empty simple size="sm" description="일정 없음" />\`
  })
}`,...(O=($=l.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var j,I,N;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "블록 · 컨테이너",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>empty_block</code>은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Card variant=\\"shadow\\" style=\\"max-width: var(--input-max-width); width: 100%;\\">\\n    <div class=\\"card_header\\">\\n      <h3 class=\\"card_title\\">알림 목록</h3>\\n    </div>\\n    <div class=\\"card_body\\">\\n      <Empty block description=\\"새 알림이 없습니다\\" />\\n    </div>\\n  </Card>\\n  <div class=\\"table_wrap\\" style=\\"max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);\\">\\n    <table class=\\"table table_bordered\\">\\n      <thead>\\n        <tr>\\n          <th scope=\\"col\\">이름</th>\\n          <th scope=\\"col\\">상태</th>\\n          <th scope=\\"col\\">날짜</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n        <tr>\\n          <td colspan=\\"3\\" style=\\"padding: 0; border: none;\\">\\n            <Empty block simple size=\\"sm\\" description=\\"표시할 항목이 없습니다\\" />\\n          </td>\\n        </tr>\\n      </tbody>\\n    </table>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Empty,
      Button,
      Card
    },
    template: \`<Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
      <div class="card_header">
        <h3 class="card_title">알림 목록</h3>
      </div>
      <div class="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </Card>

    <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
      <table class="table table_bordered">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">상태</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="padding: 0; border: none;">
              <Empty block simple size="sm" description="표시할 항목이 없습니다" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>\`
  })
}`,...(N=(I=C.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const he=["Playground","Basic","Footer","Custom","Size","Simple","Block"];export{m as Basic,C as Block,c as Custom,i as Footer,p as Playground,l as Simple,d as Size,he as __namedExportsOrder,ge as default};
