import{B as e,Ct as t,G as n,L as r,U as i,Y as a,b as o,d as s,i as c,k as l,m as u,nt as d,p as f,st as p,u as m,xt as h,z as g}from"./CCnt5OSV.js";import{A as _,a as v,c as y,l as b,n as x,o as S,r as C,s as w,t as T}from"./DkmWXf_S.js";import{t as E}from"./DD3RWXAt.js";import{t as D}from"./-gIuMC1U.js";var O={key:0},k={key:0},A=Object.assign({inheritAttrs:!1},{__name:`Table`,props:{bordered:Boolean,striped:Boolean,compact:Boolean,hover:Boolean,wrap:{type:Boolean,default:!0},scroll:Boolean,scrollMaxHeight:String,stickyTop:Boolean,stickyLeft:Boolean,stickyCols:{type:Number,default:1,validator:e=>[1,2,3,4].includes(e)},stickyLeftOffsets:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]}},setup(a){let o=new Set([1,2,3,4]),v=a,y=n(),b=i(),S=d(null),w=m(()=>Array.isArray(v.columns)&&v.columns.length>0),T=m(()=>o.has(v.stickyCols)?v.stickyCols:1);_(()=>({...v,stickyCols:T.value}),y,S,b);let E=m(()=>v.stickyLeft?`table_sticky-cols-${T.value}`:null),D=m(()=>{let e=[`table`];return v.bordered&&e.push(`table_bordered`),v.striped&&e.push(`table_striped`),v.compact&&e.push(`table_compact`),v.hover&&e.push(`table_hover`),w.value&&e.push(`table_columns`),v.stickyTop&&e.push(`table_sticky-top`),v.stickyLeft&&e.push(`table_sticky-left`),E.value&&e.push(E.value),e}),A=m(()=>{let e={};return Object.entries(v.stickyLeftOffsets||{}).forEach(([t,n])=>{n!=null&&n!==``&&(e[`--table-sticky-left-${t}`]=n)}),e}),j=m(()=>({...C(v.columns),...A.value})),M=m(()=>{let e=[`table_wrap`];return v.scroll&&e.push(`table_wrap-scroll`),b.class&&e.push(b.class),e}),N=m(()=>{let e={};v.scrollMaxHeight!=null&&v.scrollMaxHeight!==``&&(e[`--table-scroll-max-height`]=v.scrollMaxHeight);let t=b.style;return t&&typeof t==`object`&&!Array.isArray(t)&&Object.assign(e,t),e}),P=m(()=>({...j.value,...N.value})),F=m(()=>{let{class:e,style:t,...n}=b;return n}),I=e=>x(e);return(n,i)=>a.wrap?(r(),u(`div`,l({key:0,ref_key:`rootRef`,ref:S,class:M.value,style:N.value},F.value),[s(`table`,{class:h(D.value),style:t(j.value)},[w.value?(r(),u(`colgroup`,O,[(r(!0),u(c,null,g(a.columns,(e,n)=>(r(),u(`col`,{key:n,style:t(I(e))},null,4))),128))])):f(``,!0),e(n.$slots,`default`)],6)],16)):(r(),u(`table`,l({key:1,ref_key:`rootRef`,ref:S,class:[...D.value,p(b).class],style:P.value},F.value),[w.value?(r(),u(`colgroup`,k,[(r(!0),u(c,null,g(a.columns,(e,n)=>(r(),u(`col`,{key:n,style:t(I(e))},null,4))),128))])):f(``,!0),e(n.$slots,`default`)],16))}}),j=[{width:`7rem`,minWidth:`5.5rem`,nowrap:!0},{minWidth:`9rem`},{width:`6.5rem`,minWidth:`5rem`,nowrap:!0}],M=[{width:`8rem`,minWidth:`6rem`,nowrap:!0},{width:`8rem`,minWidth:`6.5rem`,nowrap:!0},{width:`5rem`,minWidth:`4rem`,nowrap:!0}],N=[{width:`7rem`,minWidth:`7rem`,nowrap:!0},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`}],P=[{width:`7rem`,minWidth:`7rem`,nowrap:!0},{width:`6rem`,minWidth:`6rem`,nowrap:!0},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`},{width:`8rem`,minWidth:`8rem`}],F=S,I=[{name:`bordered`,type:`boolean`,default:`false`,description:`셀 테두리 (table_bordered)`},{name:`striped`,type:`boolean`,default:`false`,description:`줄무늬 행 (table_striped)`},{name:`compact`,type:`boolean`,default:`false`,description:`좁은 패딩 (table_compact)`},{name:`hover`,type:`boolean`,default:`false`,description:`행 호버 강조 (table_hover)`},{name:`wrap`,type:`boolean`,default:`true`,description:`table_wrap 스크롤 래퍼 사용`},{name:`scroll`,type:`boolean`,default:`false`,description:`sticky용 스크롤 컨테이너 (table_wrap-scroll)`},{name:`scroll-max-height`,type:`string`,default:`—`,description:`--table-scroll-max-height (예: 14rem · none)`},{name:`sticky-top`,type:`boolean`,default:`false`,description:`thead 상단 고정 (table_sticky-top)`},{name:`sticky-left`,type:`boolean`,default:`false`,description:`좌측 열 고정 (table_sticky-left)`},{name:`sticky-cols`,type:`1 | 2 | 3 | 4`,default:`1`,description:`좌측 고정 열 개수 (table_sticky-cols-n). sticky-left와 함께 사용`},{name:`sticky-left-offsets`,type:`Record<number, string>`,default:`{}`,description:`n번째 고정 열 left 오프셋. { 2: '7rem' } → --table-sticky-left-2`},{name:`columns`,type:`TableColumn[]`,default:`[]`,description:`열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용`}],L=w,R=[{name:`default`,description:`thead · tbody · tfoot 등 테이블 마크업`}],z=v,B=[{name:`table_wrap`,description:`가로 스크롤 래퍼`},{name:`table_wrap-scroll`,description:`sticky용 스크롤 컨테이너 (overflow · max-height)`},{name:`table`,description:`테이블 루트`},{name:`table_columns`,description:`columns prop 사용 시 고정 레이아웃·열별 패딩`},{name:`table_bordered · table_striped · table_compact · table_hover`,description:`스타일 변형`},{name:`table_sticky-top`,description:`thead 상단 고정`},{name:`table_sticky-left`,description:`좌측 열 고정 (table_sticky-cols-n과 함께 사용)`},{name:`table_sticky-cols-1 … table_sticky-cols-4`,description:`좌측 고정 열 개수. 2열 이상은 --table-sticky-left-n 필요`}],V=y,H=[{name:`--table-cell-padding-y · --table-cell-padding-x`,default:`0.65rem · 1rem`,description:`셀 패딩`},{name:`--table-cell-padding-y-compact · --table-cell-padding-x-compact`,default:`0.4rem · 0.75rem`,description:`compact 패딩`},{name:`--table-font-size · --table-header-font-weight`,default:`var(--text-size-sm) · 600`,description:`본문·헤더 타이포`},{name:`--table-scroll-max-height`,default:`16rem`,description:`table_wrap-scroll 최대 높이`},{name:`--table-sticky-left-n`,default:`0 (1열)`,description:`n번째 고정 열의 left 오프셋 (이전 열 너비 합)`},{name:`--table-sticky-shadow`,default:`2px 0 4px -2px …`,description:`좌측 고정 끝 열 그림자`}],U={title:`Table | HTML Components`,activeNav:`table`,pageTitle:`Table`},W={__name:`table`,setup(e){return(e,t)=>(r(),u(c,null,[t[46]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Table`),s(`p`,{class:`lead`},`데이터를 행·열 구조로 표시하는 테이블 컴포넌트입니다.`)],-1),o(E,{"heading-id":`basic-heading`,title:`기본`,description:`table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
import Table from '@/components/Table.vue';
import { memberTableColumns } from '@/data/table-demo';
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
</template>`},{default:a(()=>[o(A,{columns:p(j)},{default:a(()=>[t[6]||=s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`이름`),s(`th`,{scope:`col`},`역할`),s(`th`,{scope:`col`},`상태`)])],-1),s(`tbody`,null,[s(`tr`,null,[t[0]||=s(`td`,null,`홍길동`,-1),t[1]||=s(`td`,null,`프론트엔드`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[2]||=s(`td`,null,`김철수`,-1),t[3]||=s(`td`,null,`백엔드`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[4]||=s(`td`,null,`이영희`,-1),t[5]||=s(`td`,null,`디자이너`,-1),s(`td`,null,[o(D,{dot:``,color:`warning`,label:`Away`})])])])]),_:1},8,[`columns`])]),_:1}),o(E,{"heading-id":`striped-heading`,title:`줄무늬`,description:`striped로 짝수 행에 배경색을 적용합니다.`,code:`<script setup>
import Table from '@/components/Table.vue';
import { productTableColumns } from '@/data/table-demo';
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
</template>`},{default:a(()=>[o(A,{striped:``,columns:p(M)},{default:a(()=>[...t[7]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`제품`),s(`th`,{scope:`col`},`가격`),s(`th`,{scope:`col`},`재고`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`노트북`),s(`td`,null,`1,200,000원`),s(`td`,null,`24`)]),s(`tr`,null,[s(`td`,null,`키보드`),s(`td`,null,`89,000원`),s(`td`,null,`156`)]),s(`tr`,null,[s(`td`,null,`마우스`),s(`td`,null,`45,000원`),s(`td`,null,`89`)]),s(`tr`,null,[s(`td`,null,`모니터`),s(`td`,null,`350,000원`),s(`td`,null,`12`)])],-1)]]),_:1},8,[`columns`])]),_:1}),o(E,{"heading-id":`bordered-heading`,title:`테두리`,description:`bordered로 모든 셀에 테두리를 적용합니다.`,code:`<script setup>
import Table from '@/components/Table.vue';
<\/script>

<template>
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
</template>`},{default:a(()=>[o(A,{bordered:``},{default:a(()=>[...t[8]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`ID`),s(`th`,{scope:`col`},`항목`),s(`th`,{scope:`col`},`수량`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`001`),s(`td`,null,`사과`),s(`td`,null,`10`)]),s(`tr`,null,[s(`td`,null,`002`),s(`td`,null,`바나나`),s(`td`,null,`25`)]),s(`tr`,null,[s(`td`,null,`003`),s(`td`,null,`오렌지`),s(`td`,null,`8`)])],-1)]]),_:1})]),_:1}),o(E,{"heading-id":`compact-heading`,title:`컴팩트`,description:`compact로 셀 패딩을 줄여 밀도를 높입니다.`,code:`<script setup>
import Table from '@/components/Table.vue';
import { productTableColumns } from '@/data/table-demo';
<\/script>

<template>
  <Table compact :columns="productTableColumns">
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
</template>`},{default:a(()=>[o(A,{compact:``,columns:p(M)},{default:a(()=>[...t[9]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`제품`),s(`th`,{scope:`col`},`가격`),s(`th`,{scope:`col`},`재고`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`노트북`),s(`td`,null,`1,200,000원`),s(`td`,null,`24`)]),s(`tr`,null,[s(`td`,null,`키보드`),s(`td`,null,`89,000원`),s(`td`,null,`156`)]),s(`tr`,null,[s(`td`,null,`마우스`),s(`td`,null,`45,000원`),s(`td`,null,`89`)]),s(`tr`,null,[s(`td`,null,`모니터`),s(`td`,null,`350,000원`),s(`td`,null,`12`)])],-1)]]),_:1},8,[`columns`])]),_:1}),o(E,{"heading-id":`hover-heading`,title:`호버`,description:`hover로 행에 마우스를 올리면 배경이 강조됩니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
import Table from '@/components/Table.vue';
import { memberTableColumns } from '@/data/table-demo';
<\/script>

<template>
  <Table hover :columns="memberTableColumns">
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
</template>`},{default:a(()=>[o(A,{hover:``,columns:p(j)},{default:a(()=>[t[16]||=s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`이름`),s(`th`,{scope:`col`},`역할`),s(`th`,{scope:`col`},`상태`)])],-1),s(`tbody`,null,[s(`tr`,null,[t[10]||=s(`td`,null,`홍길동`,-1),t[11]||=s(`td`,null,`프론트엔드`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[12]||=s(`td`,null,`김철수`,-1),t[13]||=s(`td`,null,`백엔드`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[14]||=s(`td`,null,`이영희`,-1),t[15]||=s(`td`,null,`디자이너`,-1),s(`td`,null,[o(D,{dot:``,color:`warning`,label:`Away`})])])])]),_:1},8,[`columns`])]),_:1}),o(E,{"heading-id":`variant-heading`,title:`조합`,description:`bordered · compact · hover를 함께 조합할 수 있습니다.`,code:`<script setup>
import Table from '@/components/Table.vue';
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
</template>`},{default:a(()=>[o(A,{bordered:``,compact:``,hover:``},{default:a(()=>[...t[17]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`ID`),s(`th`,{scope:`col`},`항목`),s(`th`,{scope:`col`},`수량`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`001`),s(`td`,null,`사과`),s(`td`,null,`10`)]),s(`tr`,null,[s(`td`,null,`002`),s(`td`,null,`바나나`),s(`td`,null,`25`)]),s(`tr`,null,[s(`td`,null,`003`),s(`td`,null,`오렌지`),s(`td`,null,`8`)])],-1)]]),_:1})]),_:1}),o(E,{"heading-id":`sticky-top-heading`,title:`상단 고정`,description:`scroll + sticky-top으로 헤더를 상단에 고정합니다. scroll-max-height로 스크롤 영역 높이를 조절합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
import Table from '@/components/Table.vue';
<\/script>

<template>
  <Table scroll scroll-max-height="14rem" sticky-top bordered compact>
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
        <td><Badge dot color="success" label="Active" /></td>
      </tr>
      <tr>
        <td>김철수</td>
        <td>백엔드</td>
        <td>리드</td>
        <td><Badge dot color="success" label="Active" /></td>
      </tr>
      <tr>
        <td>이영희</td>
        <td>디자인</td>
        <td>시니어</td>
        <td><Badge dot color="warning" label="Away" /></td>
      </tr>
      <tr>
        <td>박민수</td>
        <td>QA</td>
        <td>주니어</td>
        <td><Badge dot color="success" label="Active" /></td>
      </tr>
      <tr>
        <td>최지우</td>
        <td>프론트엔드</td>
        <td>주니어</td>
        <td><Badge dot color="success" label="Active" /></td>
      </tr>
      <tr>
        <td>정수연</td>
        <td>백엔드</td>
        <td>시니어</td>
        <td><Badge dot color="danger" label="Busy" /></td>
      </tr>
      <tr>
        <td>한도윤</td>
        <td>인프라</td>
        <td>리드</td>
        <td><Badge dot color="success" label="Active" /></td>
      </tr>
      <tr>
        <td>오세린</td>
        <td>디자인</td>
        <td>주니어</td>
        <td><Badge dot color="success" label="Active" /></td>
      </tr>
    </tbody>
  </Table>
</template>`},{default:a(()=>[o(A,{scroll:``,"scroll-max-height":`14rem`,"sticky-top":``,bordered:``,compact:``},{default:a(()=>[t[42]||=s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`이름`),s(`th`,{scope:`col`},`부서`),s(`th`,{scope:`col`},`직급`),s(`th`,{scope:`col`},`상태`)])],-1),s(`tbody`,null,[s(`tr`,null,[t[18]||=s(`td`,null,`홍길동`,-1),t[19]||=s(`td`,null,`프론트엔드`,-1),t[20]||=s(`td`,null,`시니어`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[21]||=s(`td`,null,`김철수`,-1),t[22]||=s(`td`,null,`백엔드`,-1),t[23]||=s(`td`,null,`리드`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[24]||=s(`td`,null,`이영희`,-1),t[25]||=s(`td`,null,`디자인`,-1),t[26]||=s(`td`,null,`시니어`,-1),s(`td`,null,[o(D,{dot:``,color:`warning`,label:`Away`})])]),s(`tr`,null,[t[27]||=s(`td`,null,`박민수`,-1),t[28]||=s(`td`,null,`QA`,-1),t[29]||=s(`td`,null,`주니어`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[30]||=s(`td`,null,`최지우`,-1),t[31]||=s(`td`,null,`프론트엔드`,-1),t[32]||=s(`td`,null,`주니어`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[33]||=s(`td`,null,`정수연`,-1),t[34]||=s(`td`,null,`백엔드`,-1),t[35]||=s(`td`,null,`시니어`,-1),s(`td`,null,[o(D,{dot:``,color:`danger`,label:`Busy`})])]),s(`tr`,null,[t[36]||=s(`td`,null,`한도윤`,-1),t[37]||=s(`td`,null,`인프라`,-1),t[38]||=s(`td`,null,`리드`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])]),s(`tr`,null,[t[39]||=s(`td`,null,`오세린`,-1),t[40]||=s(`td`,null,`디자인`,-1),t[41]||=s(`td`,null,`주니어`,-1),s(`td`,null,[o(D,{dot:``,color:`success`,label:`Active`})])])])]),_:1})]),_:1}),o(E,{"heading-id":`sticky-left-heading`,title:`좌측 고정`,description:`sticky-left + sticky-cols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요.`,code:`<script setup>
import Table from '@/components/Table.vue';
import { stickyMonthColumns } from '@/data/table-demo';
<\/script>

<template>
  <Table
    scroll
    scroll-max-height="none"
    sticky-left
    :sticky-cols="1"
    bordered
    compact
    :columns="stickyMonthColumns"
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
      <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>
      <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>
      <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>
      <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>
    </tbody>
  </Table>
</template>`},{default:a(()=>[o(A,{scroll:``,"scroll-max-height":`none`,"sticky-left":``,"sticky-cols":1,bordered:``,compact:``,columns:p(N)},{default:a(()=>[...t[43]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`이름`),s(`th`,{scope:`col`},`1월`),s(`th`,{scope:`col`},`2월`),s(`th`,{scope:`col`},`3월`),s(`th`,{scope:`col`},`4월`),s(`th`,{scope:`col`},`5월`),s(`th`,{scope:`col`},`6월`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`홍길동`),s(`td`,null,`120`),s(`td`,null,`132`),s(`td`,null,`101`),s(`td`,null,`134`),s(`td`,null,`90`),s(`td`,null,`230`)]),s(`tr`,null,[s(`td`,null,`김철수`),s(`td`,null,`220`),s(`td`,null,`182`),s(`td`,null,`191`),s(`td`,null,`234`),s(`td`,null,`290`),s(`td`,null,`330`)]),s(`tr`,null,[s(`td`,null,`이영희`),s(`td`,null,`150`),s(`td`,null,`232`),s(`td`,null,`201`),s(`td`,null,`154`),s(`td`,null,`190`),s(`td`,null,`330`)]),s(`tr`,null,[s(`td`,null,`박민수`),s(`td`,null,`320`),s(`td`,null,`132`),s(`td`,null,`151`),s(`td`,null,`134`),s(`td`,null,`110`),s(`td`,null,`130`)])],-1)]]),_:1},8,[`columns`])]),_:1}),o(E,{"heading-id":`sticky-left-cols-heading`,title:`좌측 고정 · 열 개수`,description:`sticky-cols로 고정할 열 개수를 지정합니다. 2열 이상은 sticky-left-offsets에 이전 열 너비 합을 넣습니다.`,code:`<script setup>
import Table from '@/components/Table.vue';
import { stickyDeptMonthColumns } from '@/data/table-demo';
<\/script>

<template>
  <Table
    scroll
    scroll-max-height="none"
    sticky-left
    :sticky-cols="2"
    :sticky-left-offsets="{ 2: '7rem' }"
    bordered
    compact
    :columns="stickyDeptMonthColumns"
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
      <tr><td>홍길동</td><td>프론트</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td></tr>
      <tr><td>김철수</td><td>백엔드</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td></tr>
      <tr><td>이영희</td><td>디자인</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td></tr>
      <tr><td>박민수</td><td>QA</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td></tr>
    </tbody>
  </Table>
</template>`},{default:a(()=>[o(A,{scroll:``,"scroll-max-height":`none`,"sticky-left":``,"sticky-cols":2,"sticky-left-offsets":{2:`7rem`},bordered:``,compact:``,columns:p(P)},{default:a(()=>[...t[44]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`이름`),s(`th`,{scope:`col`},`부서`),s(`th`,{scope:`col`},`1월`),s(`th`,{scope:`col`},`2월`),s(`th`,{scope:`col`},`3월`),s(`th`,{scope:`col`},`4월`),s(`th`,{scope:`col`},`5월`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`홍길동`),s(`td`,null,`프론트`),s(`td`,null,`120`),s(`td`,null,`132`),s(`td`,null,`101`),s(`td`,null,`134`),s(`td`,null,`90`)]),s(`tr`,null,[s(`td`,null,`김철수`),s(`td`,null,`백엔드`),s(`td`,null,`220`),s(`td`,null,`182`),s(`td`,null,`191`),s(`td`,null,`234`),s(`td`,null,`290`)]),s(`tr`,null,[s(`td`,null,`이영희`),s(`td`,null,`디자인`),s(`td`,null,`150`),s(`td`,null,`232`),s(`td`,null,`201`),s(`td`,null,`154`),s(`td`,null,`190`)]),s(`tr`,null,[s(`td`,null,`박민수`),s(`td`,null,`QA`),s(`td`,null,`320`),s(`td`,null,`132`),s(`td`,null,`151`),s(`td`,null,`134`),s(`td`,null,`110`)])],-1)]]),_:1},8,[`columns`])]),_:1}),o(E,{"heading-id":`sticky-both-heading`,title:`상단 · 좌측 고정`,description:`sticky-top과 sticky-left를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다.`,code:`<script setup>
import Table from '@/components/Table.vue';
import { stickyMonthColumns } from '@/data/table-demo';
<\/script>

<template>
  <Table
    scroll
    scroll-max-height="14rem"
    sticky-top
    sticky-left
    :sticky-cols="1"
    bordered
    compact
    :columns="stickyMonthColumns"
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
      <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>
      <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>
      <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>
      <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>
      <tr><td>최지우</td><td>180</td><td>162</td><td>171</td><td>144</td><td>210</td><td>250</td></tr>
      <tr><td>정수연</td><td>240</td><td>212</td><td>181</td><td>194</td><td>260</td><td>280</td></tr>
      <tr><td>한도윤</td><td>110</td><td>142</td><td>121</td><td>164</td><td>170</td><td>200</td></tr>
      <tr><td>오세린</td><td>200</td><td>192</td><td>211</td><td>184</td><td>230</td><td>310</td></tr>
    </tbody>
  </Table>
</template>`},{default:a(()=>[o(A,{scroll:``,"scroll-max-height":`14rem`,"sticky-top":``,"sticky-left":``,"sticky-cols":1,bordered:``,compact:``,columns:p(N)},{default:a(()=>[...t[45]||=[s(`thead`,null,[s(`tr`,null,[s(`th`,{scope:`col`},`이름`),s(`th`,{scope:`col`},`1월`),s(`th`,{scope:`col`},`2월`),s(`th`,{scope:`col`},`3월`),s(`th`,{scope:`col`},`4월`),s(`th`,{scope:`col`},`5월`),s(`th`,{scope:`col`},`6월`)])],-1),s(`tbody`,null,[s(`tr`,null,[s(`td`,null,`홍길동`),s(`td`,null,`120`),s(`td`,null,`132`),s(`td`,null,`101`),s(`td`,null,`134`),s(`td`,null,`90`),s(`td`,null,`230`)]),s(`tr`,null,[s(`td`,null,`김철수`),s(`td`,null,`220`),s(`td`,null,`182`),s(`td`,null,`191`),s(`td`,null,`234`),s(`td`,null,`290`),s(`td`,null,`330`)]),s(`tr`,null,[s(`td`,null,`이영희`),s(`td`,null,`150`),s(`td`,null,`232`),s(`td`,null,`201`),s(`td`,null,`154`),s(`td`,null,`190`),s(`td`,null,`330`)]),s(`tr`,null,[s(`td`,null,`박민수`),s(`td`,null,`320`),s(`td`,null,`132`),s(`td`,null,`151`),s(`td`,null,`134`),s(`td`,null,`110`),s(`td`,null,`130`)]),s(`tr`,null,[s(`td`,null,`최지우`),s(`td`,null,`180`),s(`td`,null,`162`),s(`td`,null,`171`),s(`td`,null,`144`),s(`td`,null,`210`),s(`td`,null,`250`)]),s(`tr`,null,[s(`td`,null,`정수연`),s(`td`,null,`240`),s(`td`,null,`212`),s(`td`,null,`181`),s(`td`,null,`194`),s(`td`,null,`260`),s(`td`,null,`280`)]),s(`tr`,null,[s(`td`,null,`한도윤`),s(`td`,null,`110`),s(`td`,null,`142`),s(`td`,null,`121`),s(`td`,null,`164`),s(`td`,null,`170`),s(`td`,null,`200`)]),s(`tr`,null,[s(`td`,null,`오세린`),s(`td`,null,`200`),s(`td`,null,`192`),s(`td`,null,`211`),s(`td`,null,`184`),s(`td`,null,`230`),s(`td`,null,`310`)])],-1)]]),_:1},8,[`columns`])]),_:1}),o(b,{"heading-id":`api-props-heading`,title:`API · Props`},{default:a(()=>[o(T,{columns:p(F),rows:p(I),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(b,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:a(()=>[o(T,{columns:p(L),rows:p(R),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(b,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(T,{columns:p(z),rows:p(B),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(b,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(T,{columns:p(V),rows:p(H),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{W as default,U as docMeta};