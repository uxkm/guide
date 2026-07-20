import{u as q,a as Z,aa as J,c as a,r as y,f as B,s as K,n as Q,g as E,o as r,ab as U,e as W,t as X,i as Y,q as ee}from"./iframe-CAswI7Qe.js";import{w as o,s as te}from"./story-renders-DjeoaiCa.js";import{_ as ne}from"./Card-BLbeiOTl.js";import"./preload-helper-PMqzWbAN.js";const se={key:0,class:"empty_image","aria-hidden":"true","data-demo-slot":"image"},oe={key:1,class:"empty_desc"},ae={key:2,class:"empty_footer","data-demo-slot":"footer"},n=Object.assign({inheritAttrs:!1},{__name:"Empty",props:{description:String,size:{type:String,default:"md",validator:s=>["sm","md","lg"].includes(s)},simple:Boolean,block:Boolean},setup(s){const t=s,g=q(),C=Z(),v=Y(null);J(t,v,C);const N=E(()=>{const e=["empty"];return t.size==="sm"&&e.push("empty_sm"),t.size==="lg"&&e.push("empty_lg"),t.simple&&e.push("empty_simple"),t.block&&e.push("empty_block"),C.class&&e.push(C.class),e}),G=E(()=>!t.simple),H=E(()=>!!g.footer);return(e,f)=>(r(),a("div",{ref_key:"rootRef",ref:v,class:Q(N.value),role:"status"},[G.value?(r(),a("div",se,[y(e.$slots,"image",{},()=>[f[0]||(f[0]=U('<svg viewBox="0 0 64 41" fill="none" aria-hidden="true"><ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"></ellipse><path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>',1))])])):B("",!0),s.description||K(g).description?(r(),a("p",oe,[y(e.$slots,"description",{},()=>[W(X(s.description),1)])])):B("",!0),H.value?(r(),a("div",ae,[y(e.$slots,"footer")])):B("",!0)],2))}}),re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ue=[{name:"description",type:"string",default:"—",description:"설명 텍스트. description 슬롯으로 대체"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"empty_sm · empty_lg"},{name:"simple",type:"boolean",default:"false",description:"아이콘 숨김 (empty_simple)"},{name:"block",type:"boolean",default:"false",description:"가운데 블록 정렬 (empty_block)"}],me=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ie=[{name:"image",description:"일러스트·아이콘 (empty_image)"},{name:"description",description:"설명 (description prop 대체)"},{name:"footer",description:"액션 버튼·링크 (empty_footer)"}],pe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],le=[{name:"empty · empty_image · empty_desc · empty_footer",description:"루트·이미지·설명·푸터"},{name:"empty_sm · empty_lg · empty_simple · empty_block",description:"크기·변형"},{name:'role="status"',description:"빈 상태 시맨틱"}],ce=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],de=[{name:"--empty-gap · --empty-padding-y · --empty-padding-x",default:"—",description:"간격·패딩"},{name:"--empty-image-size · --empty-image-size-sm · --empty-image-size-lg",default:"4rem · 3rem · 5rem",description:"아이콘 크기"},{name:"--empty-desc-size · --empty-desc-max-width",default:"var(--text-size-sm) · 20rem",description:"설명 타이포"}],Ce=[{title:"API · Props",tables:[{columns:re,rows:ue,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:me,rows:ie,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:pe,rows:le,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ce,rows:de,codeColumn:"name"}]}],ve={title:"Components/피드백/Empty",id:"components-empty",component:n,tags:["autodocs"],argTypes:{description:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},simple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ce}},u={parameters:{controls:{disable:!1}},args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:(s,t)=>({components:{Empty:n},setup(){return{args:te(t)}},template:'<Empty v-bind="args" />'})},m={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_image` · `empty_desc`로 아이콘과 설명을 표시합니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty description="데이터가 없습니다" />
</template>`,language:"vue"}}},args:{description:"설명 텍스트입니다.",size:"md"},render:o(()=>({components:{Empty:n},template:'<Empty description="데이터가 없습니다" />'}))},i={name:"액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_footer`에 버튼·링크를 배치해 다음 행동을 유도합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
    <template #footer>
      <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
    </template>
  </Empty>
</template>`,language:"vue"}}},args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:o(()=>({components:{Button:ee,Empty:n},template:`        <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
        <template #footer>
        <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
        </template>
        </Empty>`}))},p={name:"커스텀 이미지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_image`에 SVG·img를 자유롭게 넣을 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:o(()=>({components:{Empty:n},template:`        <Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
        <template #image>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
        <path d="M8 11h6" />
        </svg>
        </template>
        </Empty>`}))},l={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_sm` · `empty`(기본) · `empty_lg` 세 가지 스케일을 지원합니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty size="sm" description="Small" />
  <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
  <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />
</template>`,language:"vue"}}},args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:o(()=>({components:{Empty:n},template:`<Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
      <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />`}))},c={name:"설명만",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_simple`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."},source:{code:`<script setup>
import Empty from '@uxkm/ui/components/Empty.vue';
<\/script>

<template>
  <Empty simple size="sm" description="일정 없음" />
</template>`,language:"vue"}}},args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:o(()=>({components:{Empty:n},template:'<Empty simple size="sm" description="일정 없음" />'}))},d={name:"블록 · 컨테이너",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`empty_block`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{description:"설명 텍스트입니다.",size:"md",simple:!1,block:!1},render:o(()=>({components:{Card:ne,Empty:n},template:`<Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
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
      </div>`}))};var h,b,D;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: (_args, context) => ({
    components: {
      Empty
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Empty v-bind="args" />'
  })
}`,...(D=(b=u.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var k,_,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        story: "\`empty_image\` · \`empty_desc\`로 아이콘과 설명을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty description=\\"데이터가 없습니다\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Empty
    },
    template: \`<Empty description="데이터가 없습니다" />\`
  }))
}`,...(w=(_=m.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var A,x,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "액션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`empty_footer\`에 버튼·링크를 배치해 다음 행동을 유도합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty description=\\"등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.\\">\\n    <template #footer>\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"프로젝트 만들기\\" />\\n    </template>\\n  </Empty>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Empty
    },
    template: \`        <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
        <template #footer>
        <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
        </template>
        </Empty>\`
  }))
}`,...(z=(x=i.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,F,P;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "커스텀 이미지",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`empty_image\`에 SVG·img를 자유롭게 넣을 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty description=\\"검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.\\">\\n    <template #image>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" aria-hidden=\\"true\\">\\n        <circle cx=\\"11\\" cy=\\"11\\" r=\\"7\\" />\\n        <path d=\\"m20 20-3.5-3.5\\" />\\n        <path d=\\"M8 11h6\\" />\\n      </svg>\\n    </template>\\n  </Empty>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Empty
    },
    template: \`        <Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
        <template #image>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
        <path d="M8 11h6" />
        </svg>
        </template>
        </Empty>\`
  }))
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var M,R,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        story: "\`empty_sm\` · \`empty\`(기본) · \`empty_lg\` 세 가지 스케일을 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty size=\\"sm\\" description=\\"Small\\" />\\n  <Empty description=\\"Medium (기본)\\" style=\\"margin-top: var(--space-md);\\" />\\n  <Empty size=\\"lg\\" description=\\"Large\\" style=\\"margin-top: var(--space-md);\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Empty
    },
    template: \`<Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
      <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />\`
  }))
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var L,T,$;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "설명만",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`empty_simple\`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Empty simple size=\\"sm\\" description=\\"일정 없음\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Empty
    },
    template: \`<Empty simple size="sm" description="일정 없음" />\`
  }))
}`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var O,j,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "블록 · 컨테이너",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "\`empty_block\`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport Empty from '@uxkm/ui/components/Empty.vue';\\n<\/script>\\n\\n<template>\\n  <Card variant=\\"shadow\\" style=\\"max-width: var(--input-max-width); width: 100%;\\">\\n    <div class=\\"card_header\\">\\n      <h3 class=\\"card_title\\">알림 목록</h3>\\n    </div>\\n    <div class=\\"card_body\\">\\n      <Empty block description=\\"새 알림이 없습니다\\" />\\n    </div>\\n  </Card>\\n  <div class=\\"table_wrap\\" style=\\"max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);\\">\\n    <table class=\\"table table_bordered\\">\\n      <thead>\\n        <tr>\\n          <th scope=\\"col\\">이름</th>\\n          <th scope=\\"col\\">상태</th>\\n          <th scope=\\"col\\">날짜</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n        <tr>\\n          <td colspan=\\"3\\" style=\\"padding: 0; border: none;\\">\\n            <Empty block simple size=\\"sm\\" description=\\"표시할 항목이 없습니다\\" />\\n          </td>\\n        </tr>\\n      </tbody>\\n    </table>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    description: "설명 텍스트입니다.",
    size: "md",
    simple: false,
    block: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Card,
      Empty
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
  }))
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const fe=["Playground","Basic","Footer","Custom","Size","Simple","Block"];export{m as Basic,d as Block,p as Custom,i as Footer,u as Playground,c as Simple,l as Size,fe as __namedExportsOrder,ve as default};
