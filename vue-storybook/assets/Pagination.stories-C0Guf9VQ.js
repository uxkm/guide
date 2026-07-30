import{k as yn,l as Dn,u as kn,a as hn,b as Sn,o as u,c as p,F as L,e as r,w as f,_ as b,p as m,s as c,q as P,d as g,t as R,f as O,a6 as wn,h as xn,i as An,j}from"./iframe-3tmFy2e1.js";import{w as l,s as En}from"./story-renders-ww3py-Dw.js";import{h as Ln,a as Rn}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const jn=["aria-label"],Fn={class:"pagination_simple-text"},Nn={class:"pagination_simple-current"},Vn={class:"pagination_simple-total"},Tn={key:1,class:"pagination_list"},Mn={class:"pagination_item"},On={key:0,class:"pagination_item"},$n={key:1,class:"pagination_item"},In={class:"pagination_item"},t=Object.assign({inheritAttrs:!1},{__name:"Pagination",props:{ripple:yn,current:{type:Number,default:1},total:{type:Number,default:1},pageSize:{type:Number,default:10},simple:Boolean,minimal:Boolean,size:{type:String,default:"md",validator:i=>["sm","md","lg"].includes(i)},round:Boolean,ariaLabel:{type:String,default:"페이지 이동"}},emits:["update:current","change"],setup(i,{emit:x}){const s=i,{rippleAttrs:bn,childRippleAttrs:d}=Dn(s,{mode:"container"}),F=x,zn=kn(),A=hn(),N=xn(null),vn=An("Pagination",{defaults:{current:1,total:1,pageSize:10,ariaLabel:"페이지 이동",size:"md"},booleanProps:new Set(["simple","minimal","round","ripple"]),selfClosing:!1});Sn(vn,s,zn,N,A);const C=j(()=>Math.max(1,Math.ceil(s.total/s.pageSize))),_n=j(()=>{const n=["pagination"];return s.simple&&n.push("pagination_simple"),s.minimal&&n.push("pagination_minimal"),s.size==="sm"&&n.push("pagination_sm"),s.size==="lg"&&n.push("pagination_lg"),s.round&&n.push("pagination_round"),A.class&&n.push(A.class),n}),Bn=j(()=>{const n=C.value,o=s.current;if(n<=7)return Array.from({length:n},(a,M)=>M+1);const e=[];if(o<=4){for(let a=1;a<=5;a+=1)e.push(a);e.push("ellipsis-end"),e.push(n)}else if(o>=n-3){e.push(1),e.push("ellipsis-start");for(let a=n-4;a<=n;a+=1)e.push(a)}else{e.push(1),e.push("ellipsis-start");for(let a=o-1;a<=o+1;a+=1)e.push(a);e.push("ellipsis-end"),e.push(n)}return e});function E(n){n<1||n>C.value||n===s.current||(F("update:current",n),F("change",n))}function V(){E(s.current-1)}function T(){E(s.current+1)}return(n,o)=>(u(),p("nav",m({ref_key:"rootRef",ref:N},c(bn),{class:_n.value,"aria-label":i.ariaLabel}),[i.simple?(u(),p(L,{key:0},[r(P,m(c(d),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_prev","aria-label":"이전 페이지",disabled:i.current<=1,onClick:V}),{"icon-before":f(()=>[r(b,{name:"chevron-left",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"]),g("span",Fn,[g("span",Nn,R(i.current),1),o[0]||(o[0]=O(" / ",-1)),g("span",Vn,R(C.value),1)]),r(P,m(c(d),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_next","aria-label":"다음 페이지",disabled:i.current>=C.value,onClick:T}),{"icon-before":f(()=>[r(b,{name:"chevron-right",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"])],64)):(u(),p("ul",Tn,[g("li",Mn,[r(P,m(c(d),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_prev","aria-label":"이전 페이지",disabled:i.current<=1,onClick:V}),{"icon-before":f(()=>[r(b,{name:"chevron-left",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"])]),(u(!0),p(L,null,wn(Bn.value,(e,a)=>(u(),p(L,{key:`${e}-${a}`},[typeof e=="string"?(u(),p("li",On,[...o[1]||(o[1]=[g("span",{class:"pagination_ellipsis","aria-hidden":"true"},"…",-1)])])):(u(),p("li",$n,[r(P,m({ref_for:!0},c(d),{variant:"text",class:["pagination_link",{"is-active":e===i.current}],"aria-current":e===i.current?"page":void 0,onClick:M=>E(e)}),{default:f(()=>[O(R(e),1)]),_:2},1040,["class","aria-current","onClick"])]))],64))),128)),g("li",In,[r(P,m(c(d),{variant:"ghost",size:"sm","icon-only":"",class:"pagination_btn pagination_next","aria-label":"다음 페이지",disabled:i.current>=C.value,onClick:T}),{"icon-before":f(()=>[r(b,{name:"chevron-right",size:"sm",class:"pagination_icon"})]),_:1},16,["disabled"])])]))],16,jn))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"current",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"total",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"pageSize",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"simple",type:{name:"boolean"}},{name:"minimal",type:{name:"boolean"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"round",type:{name:"boolean"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'페이지 이동'"}}],events:[{name:"update:current"},{name:"change"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Pagination.vue"]});const qn=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Hn=[{name:"current",type:"number",default:"1",description:"현재 페이지 (v-model:current)"},{name:"total",type:"number",default:"1",description:"전체 항목 수"},{name:"page-size",type:"number",default:"10",description:"페이지당 항목 수"},{name:"simple",type:"boolean",default:"false",description:"pagination_simple — 이전·다음+현재/전체"},{name:"minimal",type:"boolean",default:"false",description:"pagination_minimal — 테두리 없음"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"pagination_sm · pagination_lg"},{name:"round",type:"boolean",default:"false",description:"pagination_round — pill 버튼"},{name:"aria-label",type:"string",default:"페이지 이동",description:"nav aria-label"},Ln],Un=[{key:"name",label:"이벤트"},{key:"payload",label:"페이로드"},{key:"description",label:"설명"}],Gn=[{name:"update:current",payload:"number",description:"v-model:current — 페이지 변경"},{name:"change",payload:"number",description:"페이지 변경 시"}],Jn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Kn=[{name:"pagination · pagination_list · pagination_item",description:"루트·목록·항목"},{name:"pagination_link · pagination_prev · pagination_next",description:"페이지·이전·다음 버튼"},{name:"pagination_ellipsis",description:"생략 표시"},{name:"pagination_simple · pagination_minimal · pagination_round",description:"스타일 변형"},{name:"pagination_sm · pagination_lg",description:"크기"},{name:"pagination_align-center · pagination_align-end",description:"정렬"},{name:"pagination_wrap · pagination_total · pagination_jumper",description:"툴바 조합"},{name:"is-active · is-disabled",description:"현재·비활성 페이지"},{name:'aria-current="page"',description:"현재 페이지 표시"},...Rn],Qn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Wn=[{name:"--pagination-gap · --pagination-item-size",default:"—",description:"간격·버튼 크기"},{name:"--pagination-font-size",default:"—",description:"글자 크기"}],Xn=[{title:"API · Props",tables:[{columns:qn,rows:Hn,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Un,rows:Gn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Jn,rows:Kn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Qn,rows:Wn,codeColumn:"name"}]}],ae={title:"Components/네비게이션/Pagination",id:"components-pagination",component:t,tags:["autodocs"],argTypes:{current:{control:"number",type:{name:"number",summary:"number"}},total:{control:"number",type:{name:"number",summary:"number"}},pageSize:{control:"number",type:{name:"number",summary:"number"}},simple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},minimal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Xn}},z={parameters:{controls:{disable:!1}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:(i,x)=>({components:{Pagination:t},setup(){return{args:En(x)}},template:'<Pagination v-bind="args" />'})},v={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이전·다음 버튼과 페이지 번호로 구성합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="50" :page-size="10" />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,size:"md",ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:'<Pagination :current="1" :total="50" :page-size="10" />'}))},_={name:"미니멀",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"minimal로 테두리 없는 가벼운 스타일을 적용합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="4" :total="50" :page-size="10" minimal />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:'<Pagination :current="4" :total="50" :page-size="10" minimal />'}))},B={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size로 항목 스케일을 조절합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="20" :page-size="10" size="sm" />
  <Pagination :current="1" :total="20" :page-size="10" />
  <Pagination :current="1" :total="20" :page-size="10" size="lg" />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:`<Pagination :current="1" :total="20" :page-size="10" size="sm" />
      <Pagination :current="1" :total="20" :page-size="10" />
      <Pagination :current="1" :total="20" :page-size="10" size="lg" />`}))},y={name:"둥근",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"round로 pill 형태의 페이지 버튼을 적용합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="7" :total="80" :page-size="10" round />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:'<Pagination :current="7" :total="80" :page-size="10" round />'}))},D={name:"페이지 생략",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"페이지가 많을 때 중간 구간을 생략합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="10" :total="500" :page-size="10" />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:'<Pagination :current="10" :total="500" :page-size="10" />'}))},k={name:"심플",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"simple로 이전·다음과 현재/전체 페이지만 표시합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination simple :current="3" :total="120" :page-size="10" />
  <Pagination simple minimal :current="1" :total="120" :page-size="10" />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:`<Pagination simple :current="3" :total="120" :page-size="10" />
      <Pagination simple minimal :current="1" :total="120" :page-size="10" />`}))},h={name:"툴바 조합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:`<div class="pagination_wrap">
        <span class="pagination_total">총 128건</span>
        <div class="pagination_wrap-end">
          <Pagination :current="5" :total="128" :page-size="10" minimal />
          <label class="pagination_jumper">
            이동
            <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지" />
            페이지
          </label>
        </div>
      </div>`}))},S={name:"정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="20" :page-size="10" />
  <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
  <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:`<Pagination :current="1" :total="20" :page-size="10" />
      <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
      <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />`}))},w={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다."},source:{code:`<script setup>
import Pagination from '@uxkm/ui/components/Pagination.vue';
<\/script>

<template>
  <Pagination :current="1" :total="30" :page-size="10" />
  <Pagination :current="10" :total="100" :page-size="10" />
</template>`,language:"vue"}}},args:{current:1,total:1,pageSize:10,simple:!1,minimal:!1,size:"md",round:!1,ariaLabel:"페이지 이동"},render:l(()=>({components:{Pagination:t},template:`<Pagination :current="1" :total="30" :page-size="10" />
      <Pagination :current="10" :total="100" :page-size="10" />`}))};var $,I,q;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
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
  render: (_args, context) => ({
    components: {
      Pagination
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Pagination v-bind="args" />'
  })
}`,...(q=(I=z.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var H,U,G;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        story: "이전·다음 버튼과 페이지 번호로 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Pagination from '@uxkm/ui/components/Pagination.vue';\\n<\/script>\\n\\n<template>\\n  <Pagination :current=\\"1\\" :total=\\"50\\" :page-size=\\"10\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    current: 1,
    total: 1,
    pageSize: 10,
    size: "md",
    ariaLabel: "페이지 이동"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="50" :page-size="10" />\`
  }))
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "미니멀",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="4" :total="50" :page-size="10" minimal />\`
  }))
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="20" :page-size="10" size="sm" />
      <Pagination :current="1" :total="20" :page-size="10" />
      <Pagination :current="1" :total="20" :page-size="10" size="lg" />\`
  }))
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,nn,en;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "둥근",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="7" :total="80" :page-size="10" round />\`
  }))
}`,...(en=(nn=y.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,tn,sn;D.parameters={...D.parameters,docs:{...(an=D.parameters)==null?void 0:an.docs,source:{originalSource:`{
  name: "페이지 생략",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="10" :total="500" :page-size="10" />\`
  }))
}`,...(sn=(tn=D.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var on,rn,ln;k.parameters={...k.parameters,docs:{...(on=k.parameters)==null?void 0:on.docs,source:{originalSource:`{
  name: "심플",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination simple :current="3" :total="120" :page-size="10" />
      <Pagination simple minimal :current="1" :total="120" :page-size="10" />\`
  }))
}`,...(ln=(rn=k.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var un,pn,mn;h.parameters={...h.parameters,docs:{...(un=h.parameters)==null?void 0:un.docs,source:{originalSource:`{
  name: "툴바 조합",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
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
  }))
}`,...(mn=(pn=h.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var cn,gn,dn;S.parameters={...S.parameters,docs:{...(cn=S.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  name: "정렬",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="20" :page-size="10" />
      <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
      <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />\`
  }))
}`,...(dn=(gn=S.parameters)==null?void 0:gn.docs)==null?void 0:dn.source}}};var Cn,fn,Pn;w.parameters={...w.parameters,docs:{...(Cn=w.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    controls: {
      disable: false
    },
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
  render: withDocsCanvasRender(() => ({
    components: {
      Pagination
    },
    template: \`<Pagination :current="1" :total="30" :page-size="10" />
      <Pagination :current="10" :total="100" :page-size="10" />\`
  }))
}`,...(Pn=(fn=w.parameters)==null?void 0:fn.docs)==null?void 0:Pn.source}}};const te=["Playground","Basic","Minimal","Size","Round","Ellipsis","Simple","Toolbar","Align","State"];export{S as Align,v as Basic,D as Ellipsis,_ as Minimal,z as Playground,y as Round,k as Simple,B as Size,w as State,h as Toolbar,te as __namedExportsOrder,ae as default};
