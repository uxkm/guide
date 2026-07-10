import{u as Bn,b as yn,c as u,F as S,h as r,j as C,m as l,e as c,k as m,t as E,g as M,s as Dn,f as j,o as p,a as kn}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as P}from"./Button-C3SXv-sJ.js";import{_ as v}from"./Icon-D97OEunV.js";import{r as hn,u as xn}from"./useRipple-oORGvIsP.js";import{u as An,c as wn}from"./useDemoCode-B9b0dRAo.js";import{c as Sn,a as En}from"./ripple-api-C5ZjLJl-.js";const jn=["aria-label"],Fn={class:"pagination_simple-text"},Ln={class:"pagination_simple-current"},Tn={class:"pagination_simple-total"},Rn={key:1,class:"pagination_list"},Nn={class:"pagination_item"},Mn={key:0,class:"pagination_item"},$n={key:1,class:"pagination_item"},On={class:"pagination_item"},o=Object.assign({inheritAttrs:!1},{__name:"Pagination",props:{ripple:hn,current:{type:Number,default:1},total:{type:Number,default:1},pageSize:{type:Number,default:10},simple:Boolean,minimal:Boolean,size:{type:String,default:"md",validator:a=>["sm","md","lg"].includes(a)},round:Boolean,ariaLabel:{type:String,default:"페이지 이동"}},emits:["update:current","change"],setup(a,{emit:Pn}){const i=a,{rippleAttrs:vn,childRippleAttrs:g}=xn(i,{mode:"container"}),F=Pn,fn=Bn(),A=yn(),L=kn(null),_n=wn("Pagination",{defaults:{current:1,total:1,pageSize:10,ariaLabel:"페이지 이동",size:"md"},booleanProps:new Set(["simple","minimal","round","ripple"]),selfClosing:!1});An(_n,i,fn,L,A);const d=j(()=>Math.max(1,Math.ceil(i.total/i.pageSize))),bn=j(()=>{const n=["pagination"];return i.simple&&n.push("pagination_simple"),i.minimal&&n.push("pagination_minimal"),i.size==="sm"&&n.push("pagination_sm"),i.size==="lg"&&n.push("pagination_lg"),i.round&&n.push("pagination_round"),A.class&&n.push(A.class),n}),zn=j(()=>{const n=d.value,s=i.current;if(n<=7)return Array.from({length:n},(t,N)=>N+1);const e=[];if(s<=4){for(let t=1;t<=5;t+=1)e.push(t);e.push("ellipsis-end"),e.push(n)}else if(s>=n-3){e.push(1),e.push("ellipsis-start");for(let t=n-4;t<=n;t+=1)e.push(t)}else{e.push(1),e.push("ellipsis-start");for(let t=s-1;t<=s+1;t+=1)e.push(t);e.push("ellipsis-end"),e.push(n)}return e});function w(n){n<1||n>d.value||n===i.current||(F("update:current",n),F("change",n))}function T(){w(i.current-1)}function R(){w(i.current+1)}return(n,s)=>(p(),u("nav",l({ref_key:"rootRef",ref:L},c(vn),{class:bn.value,"aria-label":a.ariaLabel}),[a.simple?(p(),u(S,{key:0},[r(P,l(c(g),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_prev","aria-label":"이전 페이지",disabled:a.current<=1,onClick:T}),{"icon-before":C(()=>[r(v,{name:"chevron-left",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"]),m("span",Fn,[m("span",Ln,E(a.current),1),s[0]||(s[0]=M(" / ",-1)),m("span",Tn,E(d.value),1)]),r(P,l(c(g),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_next","aria-label":"다음 페이지",disabled:a.current>=d.value,onClick:R}),{"icon-before":C(()=>[r(v,{name:"chevron-right",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"])],64)):(p(),u("ul",Rn,[m("li",Nn,[r(P,l(c(g),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_prev","aria-label":"이전 페이지",disabled:a.current<=1,onClick:T}),{"icon-before":C(()=>[r(v,{name:"chevron-left",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"])]),(p(!0),u(S,null,Dn(zn.value,(e,t)=>(p(),u(S,{key:`${e}-${t}`},[typeof e=="string"?(p(),u("li",Mn,[...s[1]||(s[1]=[m("span",{class:"pagination_ellipsis","aria-hidden":"true"},"…",-1)])])):(p(),u("li",$n,[r(P,l({ref_for:!0},c(g),{variant:"text",class:["pagination_link",{"is-active":e===a.current}],"aria-current":e===a.current?"page":void 0,onClick:N=>w(e)}),{default:C(()=>[M(E(e),1)]),_:2},1040,["class","aria-current","onClick"])]))],64))),128)),m("li",On,[r(P,l(c(g),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_next","aria-label":"다음 페이지",disabled:a.current>=d.value,onClick:R}),{"icon-before":C(()=>[r(v,{name:"chevron-right",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"])])]))],16,jn))}}),Vn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],In=[{name:"current",type:"number",default:"1",description:"현재 페이지 (v-model:current)"},{name:"total",type:"number",default:"1",description:"전체 항목 수"},{name:"page-size",type:"number",default:"10",description:"페이지당 항목 수"},{name:"simple",type:"boolean",default:"false",description:"pagination_simple — 이전·다음+현재/전체"},{name:"minimal",type:"boolean",default:"false",description:"pagination_minimal — 테두리 없음"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"pagination_sm · pagination_lg"},{name:"round",type:"boolean",default:"false",description:"pagination_round — pill 버튼"},{name:"aria-label",type:"string",default:"페이지 이동",description:"nav aria-label"},Sn],Hn=[{key:"name",label:"이벤트"},{key:"payload",label:"페이로드"},{key:"description",label:"설명"}],qn=[{name:"update:current",payload:"number",description:"v-model:current — 페이지 변경"},{name:"change",payload:"number",description:"페이지 변경 시"}],Gn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Jn=[{name:"pagination · pagination_list · pagination_item",description:"루트·목록·항목"},{name:"pagination_link · pagination_prev · pagination_next",description:"페이지·이전·다음 버튼"},{name:"pagination_ellipsis",description:"생략 표시"},{name:"pagination_simple · pagination_minimal · pagination_round",description:"스타일 변형"},{name:"pagination_sm · pagination_lg",description:"크기"},{name:"pagination_align-center · pagination_align-end",description:"정렬"},{name:"pagination_wrap · pagination_total · pagination_jumper",description:"툴바 조합"},{name:"is-active · is-disabled",description:"현재·비활성 페이지"},{name:'aria-current="page"',description:"현재 페이지 표시"},...En],Kn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qn=[{name:"--pagination-gap · --pagination-item-size",default:"—",description:"간격·버튼 크기"},{name:"--pagination-font-size",default:"—",description:"글자 크기"}],Un=[{title:"API · Props",tables:[{columns:Vn,rows:In,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Hn,rows:qn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Gn,rows:Jn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Kn,rows:Qn,codeColumn:"name"}]}],ae={title:"Components/네비게이션/Pagination",id:"components-pagination",component:o,tags:["autodocs"],argTypes:{current:{control:"number",type:{name:"number",summary:"number"}},total:{control:"number",type:{name:"number",summary:"number"}},pageSize:{control:"number",type:{name:"number",summary:"number"}},simple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},minimal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:Un}},f={args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:a=>({components:{Pagination:o},setup(){return{args:a}},template:'<Pagination v-bind="args" />'})},_={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"이전·다음 버튼과 페이지 번호로 구성합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="50" :page-size="10" />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:'<Pagination :current="1" :total="50" :page-size="10" />'})},b={name:"미니멀",parameters:{demoPreview:{stack:!1},docs:{description:{story:"minimal로 테두리 없는 가벼운 스타일을 적용합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="4" :total="50" :page-size="10" minimal />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:'<Pagination :current="4" :total="50" :page-size="10" minimal />'})},z={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"size로 항목 스케일을 조절합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="20" :page-size="10" size="sm" />
  <Pagination :current="1" :total="20" :page-size="10" />
  <Pagination :current="1" :total="20" :page-size="10" size="lg" />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:`<Pagination :current="1" :total="20" :page-size="10" size="sm" />
    <Pagination :current="1" :total="20" :page-size="10" />
    <Pagination :current="1" :total="20" :page-size="10" size="lg" />`})},B={name:"둥근",parameters:{demoPreview:{stack:!1},docs:{description:{story:"round로 pill 형태의 페이지 버튼을 적용합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="7" :total="80" :page-size="10" round />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:'<Pagination :current="7" :total="80" :page-size="10" round />'})},y={name:"페이지 생략",parameters:{demoPreview:{stack:!1},docs:{description:{story:"페이지가 많을 때 중간 구간을 생략합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="10" :total="500" :page-size="10" />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:'<Pagination :current="10" :total="500" :page-size="10" />'})},D={name:"심플",parameters:{demoPreview:{stack:!0},docs:{description:{story:"simple로 이전·다음과 현재/전체 페이지만 표시합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination simple :current="3" :total="120" :page-size="10" />
  <Pagination simple minimal :current="1" :total="120" :page-size="10" />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:`<Pagination simple :current="3" :total="120" :page-size="10" />
    <Pagination simple minimal :current="1" :total="120" :page-size="10" />`})},k={name:"툴바 조합",parameters:{demoPreview:{stack:!1},docs:{description:{story:"pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <div class="pagination_wrap">
    <span class="pagination_total">총 128건</span>
    <div class="pagination_wrap-end">
      <Pagination :current="5" :total="128" :page-size="10" minimal />
      <label class="pagination_jumper">
        이동
        <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지" />
        페이지
      </label>
    </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:`<div class="pagination_wrap">
      <span class="pagination_total">총 128건</span>
      <div class="pagination_wrap-end">
        <Pagination :current="5" :total="128" :page-size="10" minimal />
        <label class="pagination_jumper">
          이동
          <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지" />
          페이지
        </label>
      </div>
    </div>`})},h={name:"정렬",parameters:{demoPreview:{stack:!0},docs:{description:{story:"pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="20" :page-size="10" />
  <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
  <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:`<Pagination :current="1" :total="20" :page-size="10" />
    <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
    <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />`})},x={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="30" :page-size="10" />
  <Pagination :current="10" :total="100" :page-size="10" />
</template>`,language:"vue"}}},render:()=>({components:{Pagination:o},template:`<Pagination :current="1" :total="30" :page-size="10" />
    <Pagination :current="10" :total="100" :page-size="10" />`})};var $,O,V;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 1,
    pageSize: 10,
    simple: false,
    minimal: false,
    size: "md",
    round: false,
    ariaLabel: "페이지 이동"
  },
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      return {
        args
      };
    },
    template: '<Pagination v-bind="args" />'
  })
}`,...(V=(O=f.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var I,H,q;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "이전·다음 버튼과 페이지 번호로 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"1\\" :total=\\"50\\" :page-size=\\"10\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="50" :page-size="10" />\`
  })
}`,...(q=(H=_.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "미니멀",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "minimal로 테두리 없는 가벼운 스타일을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"4\\" :total=\\"50\\" :page-size=\\"10\\" minimal />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="4" :total="50" :page-size="10" minimal />\`
  })
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "size로 항목 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"1\\" :total=\\"20\\" :page-size=\\"10\\" size=\\"sm\\" />\\n  <Pagination :current=\\"1\\" :total=\\"20\\" :page-size=\\"10\\" />\\n  <Pagination :current=\\"1\\" :total=\\"20\\" :page-size=\\"10\\" size=\\"lg\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="20" :page-size="10" size="sm" />
    <Pagination :current="1" :total="20" :page-size="10" />
    <Pagination :current="1" :total="20" :page-size="10" size="lg" />\`
  })
}`,...(W=(U=z.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "둥근",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "round로 pill 형태의 페이지 버튼을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"7\\" :total=\\"80\\" :page-size=\\"10\\" round />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="7" :total="80" :page-size="10" round />\`
  })
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,en,an;y.parameters={...y.parameters,docs:{...(nn=y.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  name: "페이지 생략",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "페이지가 많을 때 중간 구간을 생략합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"10\\" :total=\\"500\\" :page-size=\\"10\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="10" :total="500" :page-size="10" />\`
  })
}`,...(an=(en=y.parameters)==null?void 0:en.docs)==null?void 0:an.source}}};var tn,on,sn;D.parameters={...D.parameters,docs:{...(tn=D.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  name: "심플",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "simple로 이전·다음과 현재/전체 페이지만 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination simple :current=\\"3\\" :total=\\"120\\" :page-size=\\"10\\" />\\n  <Pagination simple minimal :current=\\"1\\" :total=\\"120\\" :page-size=\\"10\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination simple :current="3" :total="120" :page-size="10" />
    <Pagination simple minimal :current="1" :total="120" :page-size="10" />\`
  })
}`,...(sn=(on=D.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,un,pn;k.parameters={...k.parameters,docs:{...(rn=k.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  name: "툴바 조합",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"pagination_wrap\\">\\n    <span class=\\"pagination_total\\">총 128건</span>\\n    <div class=\\"pagination_wrap-end\\">\\n      <Pagination :current=\\"5\\" :total=\\"128\\" :page-size=\\"10\\" minimal />\\n      <label class=\\"pagination_jumper\\">\\n        이동\\n        <input type=\\"number\\" class=\\"pagination_jumper-input\\" value=\\"5\\" min=\\"1\\" max=\\"13\\" aria-label=\\"이동할 페이지\\" />\\n        페이지\\n      </label>\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<div class="pagination_wrap">
      <span class="pagination_total">총 128건</span>
      <div class="pagination_wrap-end">
        <Pagination :current="5" :total="128" :page-size="10" minimal />
        <label class="pagination_jumper">
          이동
          <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지" />
          페이지
        </label>
      </div>
    </div>\`
  })
}`,...(pn=(un=k.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var ln,cn,mn;h.parameters={...h.parameters,docs:{...(ln=h.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  name: "정렬",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"1\\" :total=\\"20\\" :page-size=\\"10\\" />\\n  <Pagination :current=\\"1\\" :total=\\"20\\" :page-size=\\"10\\" class=\\"pagination_align-center\\" />\\n  <Pagination :current=\\"1\\" :total=\\"20\\" :page-size=\\"10\\" class=\\"pagination_align-end\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="20" :page-size="10" />
    <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
    <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />\`
  })
}`,...(mn=(cn=h.parameters)==null?void 0:cn.docs)==null?void 0:mn.source}}};var gn,dn,Cn;x.parameters={...x.parameters,docs:{...(gn=x.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"1\\" :total=\\"30\\" :page-size=\\"10\\" />\\n  <Pagination :current=\\"10\\" :total=\\"100\\" :page-size=\\"10\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="30" :page-size="10" />
    <Pagination :current="10" :total="100" :page-size="10" />\`
  })
}`,...(Cn=(dn=x.parameters)==null?void 0:dn.docs)==null?void 0:Cn.source}}};const te=["Playground","Basic","Minimal","Size","Round","Ellipsis","Simple","Toolbar","Align","State"];export{h as Align,_ as Basic,y as Ellipsis,b as Minimal,f as Playground,B as Round,D as Simple,z as Size,x as State,k as Toolbar,te as __namedExportsOrder,ae as default};
