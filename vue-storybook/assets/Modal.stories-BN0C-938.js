import{u as Y,b as Z,c as g,k as s,r as f,h as D,j as oo,m as k,e as ao,q as _,f as A,o as b,t as eo,a as to}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as n}from"./Button-C3SXv-sJ.js";import{_ as no}from"./Icon-D97OEunV.js";import{r as lo,u as ro}from"./useRipple-oORGvIsP.js";import{n as so}from"./useDemoCode-B9b0dRAo.js";import{r as uo,a as mo}from"./ripple-api-C5ZjLJl-.js";const io=["id","data-modal-backdrop","hidden"],co={class:"modal_dialog"},po={key:0,class:"modal_header","data-demo-slot":"header"},Bo={class:"modal_body","data-demo-slot":"default"},Co={key:1,class:"modal_footer","data-demo-slot":"footer"},e=Object.assign({inheritAttrs:!1},{__name:"Modal",props:{ripple:lo,id:{type:String,required:!0},size:{type:String,default:"md",validator:a=>["sm","md","lg","fullscreen"].includes(a)},scrollable:Boolean,backdrop:{type:Boolean,default:!0},title:String,open:Boolean},setup(a){const t=a,{rippleAttrs:U}=ro(t);Y();const l=Z(),v=to(null),y=`${t.id}-title`;so(t,v,l);const W=A(()=>{const o=["modal"];return t.size==="sm"&&o.push("modal_sm"),t.size==="lg"&&o.push("modal_lg"),t.size==="fullscreen"&&o.push("modal_fullscreen"),t.scrollable&&o.push("modal_scrollable"),t.open&&o.push("is-open"),l.class&&o.push(l.class),o}),X=A(()=>{const{class:o,...r}=l;return r});return(o,r)=>(b(),g("div",k({ref_key:"rootRef",ref:v,id:a.id,class:W.value,"data-modal":"","data-modal-backdrop":a.backdrop?void 0:"false",role:"dialog","aria-modal":"true","aria-labelledby":y,tabindex:"-1",hidden:!a.open||void 0},X.value),[r[0]||(r[0]=s("div",{class:"modal_backdrop","data-modal-close":"","aria-hidden":"true"},null,-1)),s("div",co,[o.$slots.header||a.title?(b(),g("div",po,[f(o.$slots,"header",{},()=>[s("h2",{class:"modal_title",id:y},eo(a.title),1)]),D(n,k({variant:"ghost","icon-only":"",class:"modal_close","data-modal-close":"","aria-label":"닫기"},ao(U)),{"icon-before":oo(()=>[D(no,{name:"close",size:"sm",class:"modal_close-icon"})]),_:1},16)])):_("",!0),s("div",Bo,[f(o.$slots,"default")]),o.$slots.footer?(b(),g("div",Co,[f(o.$slots,"footer")])):_("",!0)])],16,io))}}),go=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fo=[{name:"id",type:"string",default:"—",description:"루트 id (필수, data-modal-trigger 연결)"},{name:"title",type:"string",default:"—",description:"기본 헤더 제목 (modal_title)"},{name:"size",type:"'sm' | 'md' | 'lg' | 'fullscreen'",default:"md",description:"modal_sm · modal_lg · modal_fullscreen"},{name:"scrollable",type:"boolean",default:"false",description:"본문 스크롤 (modal_scrollable)"},{name:"backdrop",type:"boolean",default:"true",description:'백드롭 표시 (false → data-modal-backdrop="false")'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open, hidden 해제)"},uo],bo=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],vo=[{name:"header",description:"헤더 (title 대체)"},{name:"default",description:"본문 (modal_body)"},{name:"footer",description:"하단 액션 (modal_footer)"}],yo=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Do=[{name:"modal · modal_backdrop · modal_dialog",description:"루트·백드롭·대화상자"},{name:"modal_header · modal_title · modal_close · modal_body · modal_footer",description:"구조 파트"},{name:"modal_sm · modal_lg · modal_fullscreen · modal_scrollable",description:"크기·스크롤"},{name:"data-modal · data-modal-trigger · data-modal-close",description:"JS 연동 속성"},{name:"is-open · hidden",description:"열림·닫힘 상태"},{name:'role="dialog" · aria-modal="true"',description:"접근성 시맨틱"},...mo],ko=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_o=[{name:"--modal-z-index",default:"300",description:"레이어 순서"},{name:"--modal-width · --modal-width-sm · --modal-width-lg",default:"32rem · 24rem · 48rem",description:"대화상자 너비"},{name:"--modal-bg · --modal-radius · --modal-shadow",default:"—",description:"배경·모서리·그림자"}],Ao=[{title:"API · Props",tables:[{columns:go,rows:fo,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:bo,rows:vo,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:yo,rows:Do,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ko,rows:_o,codeColumn:"name"}]}],Fo={title:"Components/피드백/Modal",id:"components-modal",component:e,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg","fullscreen"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'fullscreen'"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},backdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:Ao}},u={args:{id:"story-modal",size:"md",scrollable:!1,backdrop:!0,title:"제목",open:!0},render:a=>({components:{Modal:e},setup(){return{args:a}},template:`<Modal v-bind="args" id="story-modal" title="모달 제목" open>
      <p>모달 본문입니다.</p>
    </Modal>`})},d={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:'<Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />'})},m={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="modal_demo-row">
    <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
    <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
    <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
    <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:`<div class="modal_demo-row">
      <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
      <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
      <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
      <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
    </div>`})},i={name:"헤더·푸터",parameters:{demoPreview:{stack:!1},docs:{description:{story:"modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:'<Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />'})},c={name:"확인 대화상자",parameters:{demoPreview:{stack:!1},docs:{description:{story:"삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:'<Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />'})},p={name:"폼",parameters:{demoPreview:{stack:!1},docs:{description:{story:"입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:'<Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />'})},B={name:"스크롤 본문",parameters:{demoPreview:{stack:!1},docs:{description:{story:"modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:'<Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />'})},C={name:"백드롭 없음",parameters:{demoPreview:{stack:!1},docs:{description:{story:":backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
</template>`,language:"vue"}}},render:()=>({components:{Modal:e,Button:n},template:'<Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />'})};var z,E,h;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "story-modal",
    size: "md",
    scrollable: false,
    backdrop: true,
    title: "제목",
    open: true
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Modal v-bind="args" id="story-modal" title="모달 제목" open>
      <p>모달 본문입니다.</p>
    </Modal>\`
  })
}`,...(h=(E=u.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var S,w,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"모달 열기\\" data-modal-trigger=\\"#modal-basic\\" aria-controls=\\"modal-basic\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />\`
  })
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var F,M,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"modal_demo-row\\">\\n    <Button variant=\\"outline\\" size=\\"sm\\" label=\\"Small\\" data-modal-trigger=\\"#modal-size-sm\\" aria-controls=\\"modal-size-sm\\" />\\n    <Button variant=\\"outline\\" label=\\"Default\\" data-modal-trigger=\\"#modal-size-default\\" aria-controls=\\"modal-size-default\\" />\\n    <Button variant=\\"outline\\" size=\\"lg\\" label=\\"Large\\" data-modal-trigger=\\"#modal-size-lg\\" aria-controls=\\"modal-size-lg\\" />\\n    <Button variant=\\"outline\\" label=\\"Fullscreen\\" data-modal-trigger=\\"#modal-size-fullscreen\\" aria-controls=\\"modal-size-fullscreen\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<div class="modal_demo-row">
      <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
      <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
      <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
      <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
    </div>\`
  })
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var $,L,q;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "헤더·푸터",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"새 항목 추가\\" data-modal-trigger=\\"#modal-footer\\" aria-controls=\\"modal-footer\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />\`
  })
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var I,N,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "확인 대화상자",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"danger\\" label=\\"삭제\\" data-modal-trigger=\\"#modal-confirm\\" aria-controls=\\"modal-confirm\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />\`
  })
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var O,R,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "폼",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"outline\\" label=\\"프로필 편집\\" data-modal-trigger=\\"#modal-form\\" aria-controls=\\"modal-form\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />\`
  })
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,H,J;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "스크롤 본문",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"ghost\\" label=\\"이용 약관 보기\\" data-modal-trigger=\\"#modal-scroll\\" aria-controls=\\"modal-scroll\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />\`
  })
}`,...(J=(H=B.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var G,K,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "백드롭 없음",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: ":backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"ghost\\" label=\\"백드롭 없이 열기\\" data-modal-trigger=\\"#modal-no-backdrop\\" aria-controls=\\"modal-no-backdrop\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Modal,
      Button
    },
    template: \`<Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />\`
  })
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Mo=["Playground","Basic","Size","Footer","Confirm","Form","Scroll","NoBackdrop"];export{d as Basic,c as Confirm,i as Footer,p as Form,C as NoBackdrop,u as Playground,B as Scroll,m as Size,Mo as __namedExportsOrder,Fo as default};
