import{u as L,a as N,ao as j,c as n,d as q,F as g,a7 as v,f as A,r as w,ak as s,n as B,s as H,g as l,o,i as M,ap as G,aq as J,ar as K,as as Q,at as U,au as X}from"./iframe-CAswI7Qe.js";import{w as f,s as Y}from"./story-renders-DjeoaiCa.js";import{_ as Z}from"./Badge-C0poPfcI.js";import"./preload-helper-PMqzWbAN.js";const tt={key:0},et={key:0},r=Object.assign({inheritAttrs:!1},{__name:"Table",props:{bordered:Boolean,striped:Boolean,compact:Boolean,hover:Boolean,wrap:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]}},setup(a){const e=a,O=L(),d=N(),b=M(null);j(e,O,b,d);const i=l(()=>e.columns.length>0),y=l(()=>{const t=["table"];return e.bordered&&t.push("table_bordered"),e.striped&&t.push("table_striped"),e.compact&&t.push("table_compact"),e.hover&&t.push("table_hover"),i.value&&t.push("table_columns"),t}),D=l(()=>J(e.columns)),$=l(()=>{const t=["table_wrap"];return d.class&&t.push(d.class),t}),T=t=>G(t);return(t,bt)=>a.wrap?(o(),n("div",{key:0,ref_key:"rootRef",ref:b,class:B($.value)},[q("table",{class:B(y.value),style:s(D.value)},[i.value?(o(),n("colgroup",tt,[(o(!0),n(g,null,v(a.columns,(C,h)=>(o(),n("col",{key:h,style:s(T(C))},null,4))),128))])):A("",!0),w(t.$slots,"default")],6)],2)):(o(),n("table",{key:1,ref_key:"rootRef",ref:b,class:B([...y.value,H(d).class]),style:s(D.value)},[i.value?(o(),n("colgroup",et,[(o(!0),n(g,null,v(a.columns,(C,h)=>(o(),n("col",{key:h,style:s(T(C))},null,4))),128))])):A("",!0),w(t.$slots,"default")],6))}}),nt=[{width:"7rem",minWidth:"5.5rem",nowrap:!0},{minWidth:"9rem"},{width:"6.5rem",minWidth:"5rem",nowrap:!0}],ot=[{width:"8rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"6.5rem",nowrap:!0},{width:"5rem",minWidth:"4rem",nowrap:!0}],at=K,rt=[{name:"bordered",type:"boolean",default:"false",description:"셀 테두리 (table_bordered)"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 행 (table_striped)"},{name:"compact",type:"boolean",default:"false",description:"좁은 패딩 (table_compact)"},{name:"hover",type:"boolean",default:"false",description:"행 호버 강조 (table_hover)"},{name:"wrap",type:"boolean",default:"true",description:"table_wrap 스크롤 래퍼 사용"},{name:"columns",type:"TableColumn[]",default:"[]",description:"열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용"}],dt=Q,st=[{name:"default",description:"thead · tbody · tfoot 등 테이블 마크업"}],lt=U,ut=[{name:"table_wrap",description:"가로 스크롤 래퍼"},{name:"table",description:"테이블 루트"},{name:"table_columns",description:"columns prop 사용 시 고정 레이아웃·열별 패딩"},{name:"table_bordered · table_striped · table_compact · table_hover",description:"스타일 변형"}],ct=X,mt=[{name:"--table-cell-padding-y · --table-cell-padding-x",default:"0.65rem · 1rem",description:"셀 패딩"},{name:"--table-cell-padding-y-compact · --table-cell-padding-x-compact",default:"0.4rem · 0.75rem",description:"compact 패딩"},{name:"--table-font-size · --table-header-font-weight",default:"var(--text-size-sm) · 600",description:"본문·헤더 타이포"}],pt=[{title:"API · Props",tables:[{columns:at,rows:rt,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:dt,rows:st,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:lt,rows:ut,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ct,rows:mt,codeColumn:"name"}]}],ft={title:"Components/데이터 표시/Table",id:"components-table",component:r,tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},hover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:pt}},u={parameters:{controls:{disable:!1}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:(a,e)=>({components:{Table:r},setup(){return{args:Y(e)}},template:`<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>`})},c={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import Table from '@uxkm/ui/components/Table.vue';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';
<\/script>

<template>
  <Table :columns="memberTableColumns">
    <thead>
      <tr>
        <th scope="col">이름</th>
        <th scope="col">역할</th>
        <th scope="col">상태</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>홍길동</td>
        <td>프론트엔드</td>
        <td>
          <Badge dot color="success" label="Active" />
        </td>
      </tr>
      <tr>
        <td>김철수</td>
        <td>백엔드</td>
        <td>
          <Badge dot color="success" label="Active" />
        </td>
      </tr>
      <tr>
        <td>이영희</td>
        <td>디자이너</td>
        <td>
          <Badge dot color="warning" label="Away" />
        </td>
      </tr>
    </tbody>
  </Table>
</template>`,language:"vue"}}},args:{columns:[]},render:f(()=>({components:{Badge:Z,Table:r},setup(){return{memberTableColumns:nt}},template:`<Table :columns="memberTableColumns">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">역할</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홍길동</td>
            <td>프론트엔드</td>
            <td>
              <Badge dot color="success" label="Active" />
            </td>
          </tr>
          <tr>
            <td>김철수</td>
            <td>백엔드</td>
            <td>
              <Badge dot color="success" label="Active" />
            </td>
          </tr>
          <tr>
            <td>이영희</td>
            <td>디자이너</td>
            <td>
              <Badge dot color="warning" label="Away" />
            </td>
          </tr>
        </tbody>
      </Table>`}))},m={name:"줄무늬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"striped로 짝수 행에 배경색을 적용합니다."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
import { productTableColumns } from '@uxkm/ui/data/table-demo';
<\/script>

<template>
  <Table striped :columns="productTableColumns">
    <thead>
      <tr>
        <th scope="col">제품</th>
        <th scope="col">가격</th>
        <th scope="col">재고</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>노트북</td>
        <td>1,200,000원</td>
        <td>24</td>
      </tr>
      <tr>
        <td>키보드</td>
        <td>89,000원</td>
        <td>156</td>
      </tr>
      <tr>
        <td>마우스</td>
        <td>45,000원</td>
        <td>89</td>
      </tr>
      <tr>
        <td>모니터</td>
        <td>350,000원</td>
        <td>12</td>
      </tr>
    </tbody>
  </Table>
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:f(()=>({components:{Table:r},setup(){return{productTableColumns:ot}},template:`<Table striped :columns="productTableColumns">
        <thead>
          <tr>
            <th scope="col">제품</th>
            <th scope="col">가격</th>
            <th scope="col">재고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>노트북</td>
            <td>1,200,000원</td>
            <td>24</td>
          </tr>
          <tr>
            <td>키보드</td>
            <td>89,000원</td>
            <td>156</td>
          </tr>
          <tr>
            <td>마우스</td>
            <td>45,000원</td>
            <td>89</td>
          </tr>
          <tr>
            <td>모니터</td>
            <td>350,000원</td>
            <td>12</td>
          </tr>
        </tbody>
      </Table>`}))},p={name:"변형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered · compact · hover를 조합할 수 있습니다."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
<\/script>

<template>
  <Table bordered compact hover>
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">항목</th>
        <th scope="col">수량</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>사과</td>
        <td>10</td>
      </tr>
      <tr>
        <td>002</td>
        <td>바나나</td>
        <td>25</td>
      </tr>
      <tr>
        <td>003</td>
        <td>오렌지</td>
        <td>8</td>
      </tr>
    </tbody>
  </Table>
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:f(()=>({components:{Table:r},template:`<Table bordered compact hover>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">항목</th>
            <th scope="col">수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>사과</td>
            <td>10</td>
          </tr>
          <tr>
            <td>002</td>
            <td>바나나</td>
            <td>25</td>
          </tr>
          <tr>
            <td>003</td>
            <td>오렌지</td>
            <td>8</td>
          </tr>
        </tbody>
      </Table>`}))};var k,_,x;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hover: false,
    wrap: true,
    columns: []
  },
  render: (_args, context) => ({
    components: {
      Table
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>\`
  })
}`,...(x=(_=u.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var S,E,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        story: "table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { memberTableColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table :columns=\\"memberTableColumns\\">\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">이름</th>\\n        <th scope=\\"col\\">역할</th>\\n        <th scope=\\"col\\">상태</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>홍길동</td>\\n        <td>프론트엔드</td>\\n        <td>\\n          <Badge dot color=\\"success\\" label=\\"Active\\" />\\n        </td>\\n      </tr>\\n      <tr>\\n        <td>김철수</td>\\n        <td>백엔드</td>\\n        <td>\\n          <Badge dot color=\\"success\\" label=\\"Active\\" />\\n        </td>\\n      </tr>\\n      <tr>\\n        <td>이영희</td>\\n        <td>디자이너</td>\\n        <td>\\n          <Badge dot color=\\"warning\\" label=\\"Away\\" />\\n        </td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    columns: []
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge,
      Table
    },
    setup() {
      return {
        memberTableColumns
      };
    },
    template: \`<Table :columns="memberTableColumns">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">역할</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홍길동</td>
            <td>프론트엔드</td>
            <td>
              <Badge dot color="success" label="Active" />
            </td>
          </tr>
          <tr>
            <td>김철수</td>
            <td>백엔드</td>
            <td>
              <Badge dot color="success" label="Active" />
            </td>
          </tr>
          <tr>
            <td>이영희</td>
            <td>디자이너</td>
            <td>
              <Badge dot color="warning" label="Away" />
            </td>
          </tr>
        </tbody>
      </Table>\`
  }))
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var R,F,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "줄무늬",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "striped로 짝수 행에 배경색을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { productTableColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table striped :columns=\\"productTableColumns\\">\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">제품</th>\\n        <th scope=\\"col\\">가격</th>\\n        <th scope=\\"col\\">재고</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>노트북</td>\\n        <td>1,200,000원</td>\\n        <td>24</td>\\n      </tr>\\n      <tr>\\n        <td>키보드</td>\\n        <td>89,000원</td>\\n        <td>156</td>\\n      </tr>\\n      <tr>\\n        <td>마우스</td>\\n        <td>45,000원</td>\\n        <td>89</td>\\n      </tr>\\n      <tr>\\n        <td>모니터</td>\\n        <td>350,000원</td>\\n        <td>12</td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hover: false,
    wrap: true,
    columns: []
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Table
    },
    setup() {
      return {
        productTableColumns
      };
    },
    template: \`<Table striped :columns="productTableColumns">
        <thead>
          <tr>
            <th scope="col">제품</th>
            <th scope="col">가격</th>
            <th scope="col">재고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>노트북</td>
            <td>1,200,000원</td>
            <td>24</td>
          </tr>
          <tr>
            <td>키보드</td>
            <td>89,000원</td>
            <td>156</td>
          </tr>
          <tr>
            <td>마우스</td>
            <td>45,000원</td>
            <td>89</td>
          </tr>
          <tr>
            <td>모니터</td>
            <td>350,000원</td>
            <td>12</td>
          </tr>
        </tbody>
      </Table>\`
  }))
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var I,V,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "변형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "bordered · compact · hover를 조합할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\n<\/script>\\n\\n<template>\\n  <Table bordered compact hover>\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">ID</th>\\n        <th scope=\\"col\\">항목</th>\\n        <th scope=\\"col\\">수량</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>001</td>\\n        <td>사과</td>\\n        <td>10</td>\\n      </tr>\\n      <tr>\\n        <td>002</td>\\n        <td>바나나</td>\\n        <td>25</td>\\n      </tr>\\n      <tr>\\n        <td>003</td>\\n        <td>오렌지</td>\\n        <td>8</td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hover: false,
    wrap: true,
    columns: []
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Table
    },
    template: \`<Table bordered compact hover>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">항목</th>
            <th scope="col">수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>사과</td>
            <td>10</td>
          </tr>
          <tr>
            <td>002</td>
            <td>바나나</td>
            <td>25</td>
          </tr>
          <tr>
            <td>003</td>
            <td>오렌지</td>
            <td>8</td>
          </tr>
        </tbody>
      </Table>\`
  }))
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const yt=["Playground","Basic","Striped","Variant"];export{c as Basic,u as Playground,m as Striped,p as Variant,yt as __namedExportsOrder,ft as default};
