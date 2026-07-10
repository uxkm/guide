import{u as j,b as q,c as e,k as H,F as A,s as w,q as k,r as _,A as s,n as B,e as M,f as l,o as n,a as G}from"./vue.esm-bundler-BaZlnz8B.js";import{v as J}from"./useDemoCode-B9b0dRAo.js";import{c as K,a as Q}from"./table-column-sizing-DuAoVyeb.js";import{_ as y}from"./Badge-CcXPSX6F.js";import{a as U,b as X,c as Y,d as Z}from"./api-table-columns-B8HBif_8.js";const tt={key:0},et={key:0},r=Object.assign({inheritAttrs:!1},{__name:"Table",props:{bordered:Boolean,striped:Boolean,compact:Boolean,hover:Boolean,wrap:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]}},setup(d){const o=d,L=j(),a=q(),b=G(null);J(o,L,b,a);const i=l(()=>o.columns.length>0),f=l(()=>{const t=["table"];return o.bordered&&t.push("table_bordered"),o.striped&&t.push("table_striped"),o.compact&&t.push("table_compact"),o.hover&&t.push("table_hover"),i.value&&t.push("table_columns"),t}),g=l(()=>K(o.columns)),N=l(()=>{const t=["table_wrap"];return a.class&&t.push(a.class),t}),v=t=>Q(t);return(t,mt)=>d.wrap?(n(),e("div",{key:0,ref_key:"rootRef",ref:b,class:B(N.value)},[H("table",{class:B(f.value),style:s(g.value)},[i.value?(n(),e("colgroup",tt,[(n(!0),e(A,null,w(d.columns,(C,h)=>(n(),e("col",{key:h,style:s(v(C))},null,4))),128))])):k("",!0),_(t.$slots,"default")],6)],2)):(n(),e("table",{key:1,ref_key:"rootRef",ref:b,class:B([...f.value,M(a).class]),style:s(g.value)},[i.value?(n(),e("colgroup",et,[(n(!0),e(A,null,w(d.columns,(C,h)=>(n(),e("col",{key:h,style:s(v(C))},null,4))),128))])):k("",!0),_(t.$slots,"default")],6))}}),T=[{width:"7rem",minWidth:"5.5rem",nowrap:!0},{minWidth:"9rem"},{width:"6.5rem",minWidth:"5rem",nowrap:!0}],D=[{width:"8rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"6.5rem",nowrap:!0},{width:"5rem",minWidth:"4rem",nowrap:!0}],nt=U,ot=[{name:"bordered",type:"boolean",default:"false",description:"셀 테두리 (table_bordered)"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 행 (table_striped)"},{name:"compact",type:"boolean",default:"false",description:"좁은 패딩 (table_compact)"},{name:"hover",type:"boolean",default:"false",description:"행 호버 강조 (table_hover)"},{name:"wrap",type:"boolean",default:"true",description:"table_wrap 스크롤 래퍼 사용"},{name:"columns",type:"TableColumn[]",default:"[]",description:"열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용"}],dt=X,rt=[{name:"default",description:"thead · tbody · tfoot 등 테이블 마크업"}],at=Y,st=[{name:"table_wrap",description:"가로 스크롤 래퍼"},{name:"table",description:"테이블 루트"},{name:"table_columns",description:"columns prop 사용 시 고정 레이아웃·열별 패딩"},{name:"table_bordered · table_striped · table_compact · table_hover",description:"스타일 변형"}],lt=Z,ut=[{name:"--table-cell-padding-y · --table-cell-padding-x",default:"0.65rem · 1rem",description:"셀 패딩"},{name:"--table-cell-padding-y-compact · --table-cell-padding-x-compact",default:"0.4rem · 0.75rem",description:"compact 패딩"},{name:"--table-font-size · --table-header-font-weight",default:"var(--text-size-sm) · 600",description:"본문·헤더 타이포"}],ct=[{title:"API · Props",tables:[{columns:nt,rows:ot,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:dt,rows:rt,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:at,rows:st,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:lt,rows:ut,codeColumn:"name"}]}],Bt={title:"Components/데이터 표시/Table",id:"components-table",component:r,tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},hover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"fullscreen",apiSections:ct}},u={args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:d=>({components:{Table:r},setup(){return{args:d}},template:`<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>`})},c={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Table:r,Badge:y},setup(){return{memberTableColumns:T,productTableColumns:D}},template:`<Table :columns="memberTableColumns">
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
          <td><Badge dot color="success" label="Active" /></td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td><Badge dot color="success" label="Active" /></td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td><Badge dot color="warning" label="Away" /></td>
        </tr>
      </tbody>
    </Table>`})},m={name:"줄무늬",parameters:{demoPreview:{stack:!1},docs:{description:{story:"striped로 짝수 행에 배경색을 적용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Table:r,Badge:y},setup(){return{memberTableColumns:T,productTableColumns:D}},template:`<Table striped :columns="productTableColumns">
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
    </Table>`})},p={name:"변형",parameters:{demoPreview:{stack:!1},docs:{description:{story:"bordered · compact · hover를 조합할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Table:r,Badge:y},setup(){return{memberTableColumns:T,productTableColumns:D}},template:`<Table bordered compact hover>
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
    </Table>`})};var S,x,E;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    bordered: false,
    striped: false,
    compact: false,
    hover: false,
    wrap: true,
    columns: []
  },
  render: args => ({
    components: {
      Table
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>\`
  })
}`,...(E=(x=u.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var P,F,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
    components: {
      Table,
      Badge
    },
    setup() {
      return {
        memberTableColumns,
        productTableColumns
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
          <td><Badge dot color="success" label="Active" /></td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td><Badge dot color="success" label="Active" /></td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td><Badge dot color="warning" label="Away" /></td>
        </tr>
      </tbody>
    </Table>\`
  })
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var I,V,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "줄무늬",
  parameters: {
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
  render: () => ({
    components: {
      Table,
      Badge
    },
    setup() {
      return {
        memberTableColumns,
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
  })
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var O,R,$;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "변형",
  parameters: {
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
  render: () => ({
    components: {
      Table,
      Badge
    },
    setup() {
      return {
        memberTableColumns,
        productTableColumns
      };
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
  })
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const yt=["Playground","Basic","Striped","Variant"];export{c as Basic,u as Playground,m as Striped,p as Variant,yt as __namedExportsOrder,Bt as default};
