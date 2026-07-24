import{r as j,U as N,c as F,V as H,n as L,j as t,W as U,a as f,X,Y,Z,a0 as G}from"./iframe-ifEc15ad.js";import{B as y}from"./Badge-CkwN7aOo.js";import{w as g}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";function d({bordered:o,striped:i,compact:m,hover:p,wrap:T=!0,columns:r=[],children:h,className:u,...w}){const b=j.useRef(null),x=Array.isArray(r)&&r.length>0;N({bordered:o,striped:i,compact:m,hover:p,wrap:T,columns:r},F({default:h}),b,{className:u,...w});const C=j.useMemo(()=>{const e=["table"];return o&&e.push("table_bordered"),i&&e.push("table_striped"),m&&e.push("table_compact"),p&&e.push("table_hover"),x&&e.push("table_columns"),e},[o,i,m,p,x]),v=j.useMemo(()=>H(r),[r]),{class:lt,...O}=w,_=L(O),k=x?t.jsx("colgroup",{children:r.map((e,q)=>t.jsx("col",{style:U(e)},q))}):null;return T?t.jsx("div",{ref:b,className:f("table_wrap",u),..._,children:t.jsxs("table",{className:f(C),style:v,children:[k,h]})}):t.jsxs("table",{ref:b,className:f(C,u),style:v,..._,children:[k,h]})}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{wrap:{defaultValue:{value:"true",computed:!1},required:!1},columns:{defaultValue:{value:"[]",computed:!1},required:!1}}};const J=[{width:"7rem",minWidth:"5.5rem",nowrap:!0},{minWidth:"9rem"},{width:"6.5rem",minWidth:"5rem",nowrap:!0}],K=[{width:"8rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"6.5rem",nowrap:!0},{width:"5rem",minWidth:"4rem",nowrap:!0}],Q=X,$=[{name:"bordered",type:"boolean",default:"false",description:"셀 테두리 (table_bordered)"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 행 (table_striped)"},{name:"compact",type:"boolean",default:"false",description:"좁은 패딩 (table_compact)"},{name:"hover",type:"boolean",default:"false",description:"행 호버 강조 (table_hover)"},{name:"wrap",type:"boolean",default:"true",description:"table_wrap 스크롤 래퍼 사용"},{name:"columns",type:"TableColumn[]",default:"[]",description:"열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용"}],tt=Y,et=[{name:"default",description:"thead · tbody · tfoot 등 테이블 마크업"}],rt=Z,dt=[{name:"table_wrap",description:"가로 스크롤 래퍼"},{name:"table",description:"테이블 루트"},{name:"table_columns",description:"columns prop 사용 시 고정 레이아웃·열별 패딩"},{name:"table_bordered · table_striped · table_compact · table_hover",description:"스타일 변형"}],ot=G,st=[{name:"--table-cell-padding-y · --table-cell-padding-x",default:"0.65rem · 1rem",description:"셀 패딩"},{name:"--table-cell-padding-y-compact · --table-cell-padding-x-compact",default:"0.4rem · 0.75rem",description:"compact 패딩"},{name:"--table-font-size · --table-header-font-weight",default:"var(--text-size-sm) · 600",description:"본문·헤더 타이포"}],at=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:Q,rows:$,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue default 슬롯은 React children에 대응합니다. thead · tbody 등 네이티브 테이블 마크업을 넣습니다.",tables:[{columns:tt,rows:et,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:rt,rows:dt,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ot,rows:st,codeColumn:"name"}]}],n={bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},pt={title:"Components/데이터 표시/Table",id:"components-table",component:d,tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},hover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:at,docs:{description:{component:"데이터 목록을 표시하는 테이블 컴포넌트입니다."}}}},s={parameters:{controls:{disable:!1}},args:{...n},render:o=>t.jsxs(d,{...o,bordered:!0,striped:!0,hover:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"이름"}),t.jsx("th",{children:"역할"})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"개발자"})]})})]})},a={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';

export function BasicExample() {
  return (
    <Table columns={memberTableColumns}>
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
  );
}`,language:"tsx"}}},args:{...n},render:g(t.jsxs(d,{columns:J,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"역할"}),t.jsx("th",{scope:"col",children:"상태"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"프론트엔드"}),t.jsx("td",{children:t.jsx(y,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"백엔드"}),t.jsx("td",{children:t.jsx(y,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"디자이너"}),t.jsx("td",{children:t.jsx(y,{dot:!0,color:"warning",label:"Away"})})]})]})]}))},l={name:"줄무늬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"striped로 짝수 행에 배경색을 적용합니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';
import { productTableColumns } from '@uxkm/ui/data/table-demo';

export function StripedExample() {
  return (
    <Table striped columns={productTableColumns}>
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
  );
}`,language:"tsx"}}},args:{...n},render:g(t.jsxs(d,{striped:!0,columns:K,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"제품"}),t.jsx("th",{scope:"col",children:"가격"}),t.jsx("th",{scope:"col",children:"재고"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"노트북"}),t.jsx("td",{children:"1,200,000원"}),t.jsx("td",{children:"24"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"키보드"}),t.jsx("td",{children:"89,000원"}),t.jsx("td",{children:"156"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"마우스"}),t.jsx("td",{children:"45,000원"}),t.jsx("td",{children:"89"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"모니터"}),t.jsx("td",{children:"350,000원"}),t.jsx("td",{children:"12"})]})]})]}))},c={name:"변형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered · compact · hover를 조합할 수 있습니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';

export function VariantExample() {
  return (
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
  );
}`,language:"tsx"}}},args:{...n},render:g(t.jsxs(d,{bordered:!0,compact:!0,hover:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"ID"}),t.jsx("th",{scope:"col",children:"항목"}),t.jsx("th",{scope:"col",children:"수량"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"001"}),t.jsx("td",{children:"사과"}),t.jsx("td",{children:"10"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"002"}),t.jsx("td",{children:"바나나"}),t.jsx("td",{children:"25"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"003"}),t.jsx("td",{children:"오렌지"}),t.jsx("td",{children:"8"})]})]})]}))};var A,S,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Table {...args} bordered striped hover>
      <thead>
        <tr>
          <th>이름</th>
          <th>역할</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>개발자</td>
        </tr>
      </tbody>
    </Table>
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var P,D,R;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';

export function BasicExample() {
  return (
    <Table columns={memberTableColumns}>
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Table columns={memberTableColumns}>
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
    </Table>)
}`,...(R=(D=a.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,V,W;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '줄무늬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'striped로 짝수 행에 배경색을 적용합니다.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';
import { productTableColumns } from '@uxkm/ui/data/table-demo';

export function StripedExample() {
  return (
    <Table striped columns={productTableColumns}>
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Table striped columns={productTableColumns}>
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
    </Table>)
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var I,z,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '변형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'bordered · compact · hover를 조합할 수 있습니다.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';

export function VariantExample() {
  return (
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Table bordered compact hover>
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
    </Table>)
}`,...(M=(z=c.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const ht=["Playground","Basic","Striped","Variant"];export{a as Basic,s as Playground,l as Striped,c as Variant,ht as __namedExportsOrder,pt as default};
