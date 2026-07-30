import{r as i,U as _t,c as Mt,V as Lt,n as Dt,j as t,W as Pt,a as W}from"./iframe-DS-82CEY.js";import{B as e}from"./Badge-Bc3a3L-7.js";import{w as s}from"./story-renders-DjJEfxtm.js";import"./preload-helper-DUxc-Dqw.js";const Et=new Set([1,2,3,4]);function r({bordered:a,striped:T,compact:w,hover:C,wrap:H=!0,scroll:R,scrollMaxHeight:n,stickyTop:v,stickyLeft:A,stickyCols:O=1,stickyLeftOffsets:B={},columns:c=[],children:S,className:_,style:l,...I}){const M=i.useRef(null),L=Array.isArray(c)&&c.length>0,D=Et.has(O)?O:1;_t({bordered:a,striped:T,compact:w,hover:C,wrap:H,scroll:R,scrollMaxHeight:n,stickyTop:v,stickyLeft:A,stickyCols:D,stickyLeftOffsets:B,columns:c},Mt({default:S}),M,{className:_,style:l,...I});const V=i.useMemo(()=>{const d=["table"];return a&&d.push("table_bordered"),T&&d.push("table_striped"),w&&d.push("table_compact"),C&&d.push("table_hover"),L&&d.push("table_columns"),v&&d.push("table_sticky-top"),A&&(d.push("table_sticky-left"),d.push(`table_sticky-cols-${D}`)),d},[a,T,w,C,L,v,A,D]),Q=i.useMemo(()=>{const d={};return Object.entries(B||{}).forEach(([P,E])=>{E==null||E===""||(d[`--table-sticky-left-${P}`]=E)}),d},[B]),q=i.useMemo(()=>({...Lt(c),...Q}),[c,Q]),z=i.useMemo(()=>{const d={};return n!=null&&n!==""&&(d["--table-scroll-max-height"]=n),l&&typeof l=="object"&&!Array.isArray(l)&&Object.assign(d,l),Object.keys(d).length?d:void 0},[n,l]),{class:$t,...St}=I,N=Dt(St),$=L?t.jsx("colgroup",{children:c.map((d,P)=>t.jsx("col",{style:Pt(d)},P))}):null;return H?t.jsx("div",{ref:M,className:W("table_wrap",R&&"table_wrap-scroll",_),style:z,...N,children:t.jsxs("table",{className:W(V),style:q,children:[$,S]})}):t.jsxs("table",{ref:M,className:W(V,_),style:{...q,...z},...N,children:[$,S]})}r.__docgenInfo={description:"",methods:[],displayName:"Table",props:{wrap:{defaultValue:{value:"true",computed:!1},required:!1},stickyCols:{defaultValue:{value:"1",computed:!1},required:!1},stickyLeftOffsets:{defaultValue:{value:"{}",computed:!1},required:!1},columns:{defaultValue:{value:"[]",computed:!1},required:!1}}};const vt=[{width:"7rem",minWidth:"5.5rem",nowrap:!0},{minWidth:"9rem"},{width:"6.5rem",minWidth:"5rem",nowrap:!0}],At=[{width:"8rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"6.5rem",nowrap:!0},{width:"5rem",minWidth:"4rem",nowrap:!0}],Bt=[{width:"7rem",minWidth:"7rem",nowrap:!0},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"}],Wt=[{width:"7rem",minWidth:"7rem",nowrap:!0},{width:"6rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"}],Ht=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Rt=[{name:"bordered",type:"boolean",default:"false",description:"셀 테두리 (table_bordered)"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 행 (table_striped)"},{name:"compact",type:"boolean",default:"false",description:"좁은 패딩 (table_compact)"},{name:"hover",type:"boolean",default:"false",description:"행 호버 강조 (table_hover)"},{name:"wrap",type:"boolean",default:"true",description:"table_wrap 스크롤 래퍼 사용"},{name:"scroll",type:"boolean",default:"false",description:"sticky용 스크롤 컨테이너 (table_wrap-scroll)"},{name:"scrollMaxHeight",type:"string",default:"—",description:"--table-scroll-max-height (예: 14rem · none)"},{name:"stickyTop",type:"boolean",default:"false",description:"thead 상단 고정 (table_sticky-top)"},{name:"stickyLeft",type:"boolean",default:"false",description:"좌측 열 고정 (table_sticky-left)"},{name:"stickyCols",type:"1 | 2 | 3 | 4",default:"1",description:"좌측 고정 열 개수 (table_sticky-cols-n). stickyLeft와 함께 사용"},{name:"stickyLeftOffsets",type:"Record<number, string>",default:"{}",description:"n번째 고정 열 left 오프셋. { 2: '7rem' } → --table-sticky-left-2"},{name:"columns",type:"TableColumn[]",default:"[]",description:"열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용"},{name:"className",type:"string",default:"—",description:"table_wrap(또는 table) 루트에 추가 클래스"}],Ot=[{key:"name",label:"Children"},{key:"description",label:"설명"}],It=[{name:"children",description:"thead · tbody · tfoot 등 테이블 마크업 (Vue default 슬롯 대응)"}],Vt=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Qt=[{name:"table_wrap",description:"가로 스크롤 래퍼"},{name:"table_wrap-scroll",description:"sticky용 스크롤 컨테이너 (overflow · max-height)"},{name:"table",description:"테이블 루트"},{name:"table_columns",description:"columns prop 사용 시 고정 레이아웃·열별 패딩"},{name:"table_bordered · table_striped · table_compact · table_hover",description:"스타일 변형"},{name:"table_sticky-top",description:"thead 상단 고정"},{name:"table_sticky-left",description:"좌측 열 고정 (table_sticky-cols-n과 함께 사용)"},{name:"table_sticky-cols-1 … table_sticky-cols-4",description:"좌측 고정 열 개수. 2열 이상은 --table-sticky-left-n 필요"}],qt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],zt=[{name:"--table-cell-padding-y · --table-cell-padding-x",default:"0.65rem · 1rem",description:"셀 패딩"},{name:"--table-cell-padding-y-compact · --table-cell-padding-x-compact",default:"0.4rem · 0.75rem",description:"compact 패딩"},{name:"--table-font-size · --table-header-font-weight",default:"var(--text-size-sm) · 600",description:"본문·헤더 타이포"},{name:"--table-scroll-max-height",default:"16rem",description:"table_wrap-scroll 최대 높이"},{name:"--table-sticky-left-n",default:"0 (1열)",description:"n번째 고정 열의 left 오프셋 (이전 열 너비 합)"},{name:"--table-sticky-shadow",default:"2px 0 4px -2px …",description:"좌측 고정 끝 열 그림자"}],Nt=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:Ht,rows:Rt,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯은 React children에 대응합니다. thead · tbody 등 네이티브 테이블 마크업을 넣습니다.",tables:[{columns:Ot,rows:It,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Vt,rows:Qt,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:qt,rows:zt,codeColumn:"name"}]}],o={bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,scroll:!1,stickyTop:!1,stickyLeft:!1,stickyCols:1,columns:[]},Gt={title:"Components/데이터 표시/Table",id:"components-table",component:r,tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},hover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scroll:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollMaxHeight:{control:"text",type:{name:"string",summary:"string"}},stickyTop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stickyLeft:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stickyCols:{control:"select",options:[1,2,3,4],type:{name:"enum",summary:"1 | 2 | 3 | 4"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:Nt,docs:{description:{component:"데이터 목록을 표시하는 테이블 컴포넌트입니다."}}}},h={parameters:{controls:{disable:!1}},args:{...o},render:a=>t.jsxs(r,{...a,bordered:!0,striped:!0,hover:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"이름"}),t.jsx("th",{children:"역할"})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"개발자"})]})})]})},m={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';
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
}`,language:"tsx"}}},args:{...o},render:s(t.jsxs(r,{columns:vt,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"역할"}),t.jsx("th",{scope:"col",children:"상태"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"프론트엔드"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"백엔드"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"디자이너"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"warning",label:"Away"})})]})]})]}))},p={name:"줄무늬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"striped로 짝수 행에 배경색을 적용합니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';
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
}`,language:"tsx"}}},args:{...o},render:s(t.jsxs(r,{striped:!0,columns:At,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"제품"}),t.jsx("th",{scope:"col",children:"가격"}),t.jsx("th",{scope:"col",children:"재고"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"노트북"}),t.jsx("td",{children:"1,200,000원"}),t.jsx("td",{children:"24"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"키보드"}),t.jsx("td",{children:"89,000원"}),t.jsx("td",{children:"156"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"마우스"}),t.jsx("td",{children:"45,000원"}),t.jsx("td",{children:"89"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"모니터"}),t.jsx("td",{children:"350,000원"}),t.jsx("td",{children:"12"})]})]})]}))},x={name:"테두리",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered로 모든 셀에 테두리를 적용합니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';

export function BorderedExample() {
  return (
    <Table bordered>
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
}`,language:"tsx"}}},args:{...o},render:s(t.jsxs(r,{bordered:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"ID"}),t.jsx("th",{scope:"col",children:"항목"}),t.jsx("th",{scope:"col",children:"수량"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"001"}),t.jsx("td",{children:"사과"}),t.jsx("td",{children:"10"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"002"}),t.jsx("td",{children:"바나나"}),t.jsx("td",{children:"25"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"003"}),t.jsx("td",{children:"오렌지"}),t.jsx("td",{children:"8"})]})]})]}))},u={name:"컴팩트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"compact로 셀 패딩을 줄여 밀도를 높입니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';
import { productTableColumns } from '@uxkm/ui/data/table-demo';

export function CompactExample() {
  return (
    <Table compact columns={productTableColumns}>
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
}`,language:"tsx"}}},args:{...o},render:s(t.jsxs(r,{compact:!0,columns:At,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"제품"}),t.jsx("th",{scope:"col",children:"가격"}),t.jsx("th",{scope:"col",children:"재고"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"노트북"}),t.jsx("td",{children:"1,200,000원"}),t.jsx("td",{children:"24"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"키보드"}),t.jsx("td",{children:"89,000원"}),t.jsx("td",{children:"156"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"마우스"}),t.jsx("td",{children:"45,000원"}),t.jsx("td",{children:"89"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"모니터"}),t.jsx("td",{children:"350,000원"}),t.jsx("td",{children:"12"})]})]})]}))},b={name:"호버",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"hover로 행에 마우스를 올리면 배경이 강조됩니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';

export function HoverExample() {
  return (
    <Table hover columns={memberTableColumns}>
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
}`,language:"tsx"}}},args:{...o},render:s(t.jsxs(r,{hover:!0,columns:vt,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"역할"}),t.jsx("th",{scope:"col",children:"상태"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"프론트엔드"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"백엔드"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"디자이너"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"warning",label:"Away"})})]})]})]}))},j={name:"조합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered · compact · hover를 함께 조합할 수 있습니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';

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
}`,language:"tsx"}}},args:{...o},render:s(t.jsxs(r,{bordered:!0,compact:!0,hover:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"ID"}),t.jsx("th",{scope:"col",children:"항목"}),t.jsx("th",{scope:"col",children:"수량"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"001"}),t.jsx("td",{children:"사과"}),t.jsx("td",{children:"10"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"002"}),t.jsx("td",{children:"바나나"}),t.jsx("td",{children:"25"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"003"}),t.jsx("td",{children:"오렌지"}),t.jsx("td",{children:"8"})]})]})]}))},y={name:"상단 고정",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"scroll + stickyTop으로 헤더를 상단에 고정합니다. scrollMaxHeight로 스크롤 영역 높이를 조절합니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';

export function StickyTopExample() {
  return (
    <Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직급</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>시니어</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>프론트엔드</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>백엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="danger" label="Busy" />
          </td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>인프라</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>디자인</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`,language:"tsx"}}},render:s(t.jsxs(r,{scroll:!0,scrollMaxHeight:"14rem",stickyTop:!0,bordered:!0,compact:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"부서"}),t.jsx("th",{scope:"col",children:"직급"}),t.jsx("th",{scope:"col",children:"상태"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"프론트엔드"}),t.jsx("td",{children:"시니어"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"백엔드"}),t.jsx("td",{children:"리드"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"디자인"}),t.jsx("td",{children:"시니어"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"warning",label:"Away"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"박민수"}),t.jsx("td",{children:"QA"}),t.jsx("td",{children:"주니어"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"최지우"}),t.jsx("td",{children:"프론트엔드"}),t.jsx("td",{children:"주니어"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"정수연"}),t.jsx("td",{children:"백엔드"}),t.jsx("td",{children:"시니어"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"danger",label:"Busy"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"한도윤"}),t.jsx("td",{children:"인프라"}),t.jsx("td",{children:"리드"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"오세린"}),t.jsx("td",{children:"디자인"}),t.jsx("td",{children:"주니어"}),t.jsx("td",{children:t.jsx(e,{dot:!0,color:"success",label:"Active"})})]})]})]}))},f={name:"좌측 고정",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"stickyLeft + stickyCols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyLeftExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
      </tbody>
    </Table>
  );
}`,language:"tsx"}}},render:s(t.jsxs(r,{scroll:!0,scrollMaxHeight:"none",stickyLeft:!0,stickyCols:1,bordered:!0,compact:!0,columns:Bt,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"1월"}),t.jsx("th",{scope:"col",children:"2월"}),t.jsx("th",{scope:"col",children:"3월"}),t.jsx("th",{scope:"col",children:"4월"}),t.jsx("th",{scope:"col",children:"5월"}),t.jsx("th",{scope:"col",children:"6월"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"120"}),t.jsx("td",{children:"132"}),t.jsx("td",{children:"101"}),t.jsx("td",{children:"134"}),t.jsx("td",{children:"90"}),t.jsx("td",{children:"230"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"220"}),t.jsx("td",{children:"182"}),t.jsx("td",{children:"191"}),t.jsx("td",{children:"234"}),t.jsx("td",{children:"290"}),t.jsx("td",{children:"330"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"150"}),t.jsx("td",{children:"232"}),t.jsx("td",{children:"201"}),t.jsx("td",{children:"154"}),t.jsx("td",{children:"190"}),t.jsx("td",{children:"330"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"박민수"}),t.jsx("td",{children:"320"}),t.jsx("td",{children:"132"}),t.jsx("td",{children:"151"}),t.jsx("td",{children:"134"}),t.jsx("td",{children:"110"}),t.jsx("td",{children:"130"})]})]})]}))},g={name:"좌측 고정 · 열 개수",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"stickyCols로 고정할 열 개수를 지정합니다. 2열 이상은 stickyLeftOffsets에 이전 열 너비 합을 넣습니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyDeptMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyLeftColsExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={2}
      stickyLeftOffsets={{ 2: '7rem' }}
      bordered
      compact
      columns={stickyDeptMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
        </tr>
      </tbody>
    </Table>
  );
}`,language:"tsx"}}},render:s(t.jsxs(r,{scroll:!0,scrollMaxHeight:"none",stickyLeft:!0,stickyCols:2,stickyLeftOffsets:{2:"7rem"},bordered:!0,compact:!0,columns:Wt,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"부서"}),t.jsx("th",{scope:"col",children:"1월"}),t.jsx("th",{scope:"col",children:"2월"}),t.jsx("th",{scope:"col",children:"3월"}),t.jsx("th",{scope:"col",children:"4월"}),t.jsx("th",{scope:"col",children:"5월"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"프론트"}),t.jsx("td",{children:"120"}),t.jsx("td",{children:"132"}),t.jsx("td",{children:"101"}),t.jsx("td",{children:"134"}),t.jsx("td",{children:"90"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"백엔드"}),t.jsx("td",{children:"220"}),t.jsx("td",{children:"182"}),t.jsx("td",{children:"191"}),t.jsx("td",{children:"234"}),t.jsx("td",{children:"290"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"디자인"}),t.jsx("td",{children:"150"}),t.jsx("td",{children:"232"}),t.jsx("td",{children:"201"}),t.jsx("td",{children:"154"}),t.jsx("td",{children:"190"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"박민수"}),t.jsx("td",{children:"QA"}),t.jsx("td",{children:"320"}),t.jsx("td",{children:"132"}),t.jsx("td",{children:"151"}),t.jsx("td",{children:"134"}),t.jsx("td",{children:"110"})]})]})]}))},k={name:"상단 · 좌측 고정",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"stickyTop과 stickyLeft를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다."},source:{code:`import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyBothExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="14rem"
      stickyTop
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>180</td>
          <td>162</td>
          <td>171</td>
          <td>144</td>
          <td>210</td>
          <td>250</td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>240</td>
          <td>212</td>
          <td>181</td>
          <td>194</td>
          <td>260</td>
          <td>280</td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>110</td>
          <td>142</td>
          <td>121</td>
          <td>164</td>
          <td>170</td>
          <td>200</td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>200</td>
          <td>192</td>
          <td>211</td>
          <td>184</td>
          <td>230</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>
  );
}`,language:"tsx"}}},render:s(t.jsxs(r,{scroll:!0,scrollMaxHeight:"14rem",stickyTop:!0,stickyLeft:!0,stickyCols:1,bordered:!0,compact:!0,columns:Bt,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"이름"}),t.jsx("th",{scope:"col",children:"1월"}),t.jsx("th",{scope:"col",children:"2월"}),t.jsx("th",{scope:"col",children:"3월"}),t.jsx("th",{scope:"col",children:"4월"}),t.jsx("th",{scope:"col",children:"5월"}),t.jsx("th",{scope:"col",children:"6월"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"홍길동"}),t.jsx("td",{children:"120"}),t.jsx("td",{children:"132"}),t.jsx("td",{children:"101"}),t.jsx("td",{children:"134"}),t.jsx("td",{children:"90"}),t.jsx("td",{children:"230"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"김철수"}),t.jsx("td",{children:"220"}),t.jsx("td",{children:"182"}),t.jsx("td",{children:"191"}),t.jsx("td",{children:"234"}),t.jsx("td",{children:"290"}),t.jsx("td",{children:"330"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"이영희"}),t.jsx("td",{children:"150"}),t.jsx("td",{children:"232"}),t.jsx("td",{children:"201"}),t.jsx("td",{children:"154"}),t.jsx("td",{children:"190"}),t.jsx("td",{children:"330"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"박민수"}),t.jsx("td",{children:"320"}),t.jsx("td",{children:"132"}),t.jsx("td",{children:"151"}),t.jsx("td",{children:"134"}),t.jsx("td",{children:"110"}),t.jsx("td",{children:"130"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"최지우"}),t.jsx("td",{children:"180"}),t.jsx("td",{children:"162"}),t.jsx("td",{children:"171"}),t.jsx("td",{children:"144"}),t.jsx("td",{children:"210"}),t.jsx("td",{children:"250"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"정수연"}),t.jsx("td",{children:"240"}),t.jsx("td",{children:"212"}),t.jsx("td",{children:"181"}),t.jsx("td",{children:"194"}),t.jsx("td",{children:"260"}),t.jsx("td",{children:"280"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"한도윤"}),t.jsx("td",{children:"110"}),t.jsx("td",{children:"142"}),t.jsx("td",{children:"121"}),t.jsx("td",{children:"164"}),t.jsx("td",{children:"170"}),t.jsx("td",{children:"200"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"오세린"}),t.jsx("td",{children:"200"}),t.jsx("td",{children:"192"}),t.jsx("td",{children:"211"}),t.jsx("td",{children:"184"}),t.jsx("td",{children:"230"}),t.jsx("td",{children:"310"})]})]})]}))};var F,K,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(K=h.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,G,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Z,tt;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(tt=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var dt,et,rt;x.parameters={...x.parameters,docs:{...(dt=x.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  name: '테두리',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'bordered로 모든 셀에 테두리를 적용합니다.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';

export function BorderedExample() {
  return (
    <Table bordered>
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
  render: withDocsCanvasRender(<Table bordered>
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
}`,...(rt=(et=x.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var st,ot,ct;u.parameters={...u.parameters,docs:{...(st=u.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: '컴팩트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'compact로 셀 패딩을 줄여 밀도를 높입니다.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';
import { productTableColumns } from '@uxkm/ui/data/table-demo';

export function CompactExample() {
  return (
    <Table compact columns={productTableColumns}>
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
  render: withDocsCanvasRender(<Table compact columns={productTableColumns}>
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
}`,...(ct=(ot=u.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var lt,at,nt;b.parameters={...b.parameters,docs:{...(lt=b.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: '호버',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'hover로 행에 마우스를 올리면 배경이 강조됩니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';

export function HoverExample() {
  return (
    <Table hover columns={memberTableColumns}>
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
  render: withDocsCanvasRender(<Table hover columns={memberTableColumns}>
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
}`,...(nt=(at=b.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var it,ht,mt;j.parameters={...j.parameters,docs:{...(it=j.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: '조합',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'bordered · compact · hover를 함께 조합할 수 있습니다.'
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
}`,...(mt=(ht=j.parameters)==null?void 0:ht.docs)==null?void 0:mt.source}}};var pt,xt,ut;y.parameters={...y.parameters,docs:{...(pt=y.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  name: '상단 고정',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'scroll + stickyTop으로 헤더를 상단에 고정합니다. scrollMaxHeight로 스크롤 영역 높이를 조절합니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';
import Table from '@uxkm/ui-react/components/Table.jsx';

export function StickyTopExample() {
  return (
    <Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직급</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>시니어</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>프론트엔드</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>백엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="danger" label="Busy" />
          </td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>인프라</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>디자인</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
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
  render: withDocsCanvasRender(<Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직급</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>시니어</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>프론트엔드</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>백엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="danger" label="Busy" />
          </td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>인프라</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>디자인</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
      </tbody>
    </Table>)
}`,...(ut=(xt=y.parameters)==null?void 0:xt.docs)==null?void 0:ut.source}}};var bt,jt,yt;f.parameters={...f.parameters,docs:{...(bt=f.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  name: '좌측 고정',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'stickyLeft + stickyCols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyLeftExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
      </tbody>
    </Table>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Table scroll scrollMaxHeight="none" stickyLeft stickyCols={1} bordered compact columns={stickyMonthColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
      </tbody>
    </Table>)
}`,...(yt=(jt=f.parameters)==null?void 0:jt.docs)==null?void 0:yt.source}}};var ft,gt,kt;g.parameters={...g.parameters,docs:{...(ft=g.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  name: '좌측 고정 · 열 개수',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'stickyCols로 고정할 열 개수를 지정합니다. 2열 이상은 stickyLeftOffsets에 이전 열 너비 합을 넣습니다.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyDeptMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyLeftColsExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={2}
      stickyLeftOffsets={{ 2: '7rem' }}
      bordered
      compact
      columns={stickyDeptMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
        </tr>
      </tbody>
    </Table>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Table scroll scrollMaxHeight="none" stickyLeft stickyCols={2} stickyLeftOffsets={{
    2: '7rem'
  }} bordered compact columns={stickyDeptMonthColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
        </tr>
      </tbody>
    </Table>)
}`,...(kt=(gt=g.parameters)==null?void 0:gt.docs)==null?void 0:kt.source}}};var Tt,wt,Ct;k.parameters={...k.parameters,docs:{...(Tt=k.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  name: '상단 · 좌측 고정',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'stickyTop과 stickyLeft를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다.'
      },
      source: {
        code: \`import Table from '@uxkm/ui-react/components/Table.jsx';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';

export function StickyBothExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="14rem"
      stickyTop
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>180</td>
          <td>162</td>
          <td>171</td>
          <td>144</td>
          <td>210</td>
          <td>250</td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>240</td>
          <td>212</td>
          <td>181</td>
          <td>194</td>
          <td>260</td>
          <td>280</td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>110</td>
          <td>142</td>
          <td>121</td>
          <td>164</td>
          <td>170</td>
          <td>200</td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>200</td>
          <td>192</td>
          <td>211</td>
          <td>184</td>
          <td>230</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Table scroll scrollMaxHeight="14rem" stickyTop stickyLeft stickyCols={1} bordered compact columns={stickyMonthColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>180</td>
          <td>162</td>
          <td>171</td>
          <td>144</td>
          <td>210</td>
          <td>250</td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>240</td>
          <td>212</td>
          <td>181</td>
          <td>194</td>
          <td>260</td>
          <td>280</td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>110</td>
          <td>142</td>
          <td>121</td>
          <td>164</td>
          <td>170</td>
          <td>200</td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>200</td>
          <td>192</td>
          <td>211</td>
          <td>184</td>
          <td>230</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>)
}`,...(Ct=(wt=k.parameters)==null?void 0:wt.docs)==null?void 0:Ct.source}}};const Jt=["Playground","Basic","Striped","Bordered","Compact","Hover","Variant","StickyTop","StickyLeft","StickyLeftCols","StickyBoth"];export{m as Basic,x as Bordered,u as Compact,b as Hover,h as Playground,k as StickyBoth,f as StickyLeft,g as StickyLeftCols,y as StickyTop,p as Striped,j as Variant,Jt as __namedExportsOrder,Gt as default};
