import{u as kt,a as At,an as Tt,o,c as r,d as vt,F as M,a6 as P,aj as m,g as W,r as R,n as w,s as wt,j as l,ao as xt,h as Et,ap as _t,aq as Ft,ar as St,as as Mt,at as Pt}from"./iframe-3tmFy2e1.js";import{w as n,s as Wt}from"./story-renders-ww3py-Dw.js";import{_ as x}from"./Badge-BEP7UIhp.js";import"./preload-helper-PMqzWbAN.js";const Rt={key:0},Lt={key:0},e=Object.assign({inheritAttrs:!1},{__name:"Table",props:{bordered:Boolean,striped:Boolean,compact:Boolean,hover:Boolean,wrap:{type:Boolean,default:!0},scroll:Boolean,scrollMaxHeight:String,stickyTop:Boolean,stickyLeft:Boolean,stickyCols:{type:Number,default:1,validator:s=>[1,2,3,4].includes(s)},stickyLeftOffsets:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]}},setup(s){const d=s,yt=kt(),c=At(),A=Et(null);Tt(d,yt,A,c);const T=l(()=>d.columns.length>0),E=l(()=>d.stickyLeft?`table_sticky-cols-${d.stickyCols||1}`:null),_=l(()=>{const t=["table"];return d.bordered&&t.push("table_bordered"),d.striped&&t.push("table_striped"),d.compact&&t.push("table_compact"),d.hover&&t.push("table_hover"),T.value&&t.push("table_columns"),d.stickyTop&&t.push("table_sticky-top"),d.stickyLeft&&t.push("table_sticky-left"),E.value&&t.push(E.value),t}),Dt=l(()=>{const t={};return Object.entries(d.stickyLeftOffsets||{}).forEach(([a,u])=>{u==null||u===""||(t[`--table-sticky-left-${a}`]=u)}),t}),F=l(()=>({..._t(d.columns),...Dt.value})),ft=l(()=>{const t=["table_wrap"];return d.scroll&&t.push("table_wrap-scroll"),c.class&&t.push(c.class),t}),gt=l(()=>{const t={};d.scrollMaxHeight!=null&&d.scrollMaxHeight!==""&&(t["--table-scroll-max-height"]=d.scrollMaxHeight);const a=c.style;return a&&typeof a=="object"&&!Array.isArray(a)&&Object.assign(t,a),t}),S=t=>xt(t);return(t,a)=>s.wrap?(o(),r("div",{key:0,ref_key:"rootRef",ref:A,class:w(ft.value),style:m(gt.value)},[vt("table",{class:w(_.value),style:m(F.value)},[T.value?(o(),r("colgroup",Rt,[(o(!0),r(M,null,P(s.columns,(u,v)=>(o(),r("col",{key:v,style:m(S(u))},null,4))),128))])):W("",!0),R(t.$slots,"default")],6)],6)):(o(),r("table",{key:1,ref_key:"rootRef",ref:A,class:w([..._.value,wt(c).class]),style:m(F.value)},[T.value?(o(),r("colgroup",Lt,[(o(!0),r(M,null,P(s.columns,(u,v)=>(o(),r("col",{key:v,style:m(S(u))},null,4))),128))])):W("",!0),R(t.$slots,"default")],6))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"bordered",type:{name:"boolean"}},{name:"striped",type:{name:"boolean"}},{name:"compact",type:{name:"boolean"}},{name:"hover",type:{name:"boolean"}},{name:"wrap",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"scroll",description:"sticky용 스크롤 컨테이너 (table_wrap-scroll)",type:{name:"boolean"}},{name:"scrollMaxHeight",description:"--table-scroll-max-height (예: '14rem' · 'none')",type:{name:"string"}},{name:"stickyTop",description:"thead 상단 고정 (table_sticky-top)",type:{name:"boolean"}},{name:"stickyLeft",description:"좌측 열 고정 (table_sticky-left)",type:{name:"boolean"}},{name:"stickyCols",description:"좌측 고정 열 개수 1–4 (table_sticky-cols-n)",type:{name:"number"},defaultValue:{func:!1,value:"1"},values:[1,2,3,4]},{name:"stickyLeftOffsets",description:"n번째 고정 열 left 오프셋 — { 2: '7rem' } → --table-sticky-left-2",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"columns",description:"열별 너비·패딩 — { width, minWidth, maxWidth, padding, nowrap }",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Table.vue"]});const ht=[{width:"7rem",minWidth:"5.5rem",nowrap:!0},{minWidth:"9rem"},{width:"6.5rem",minWidth:"5rem",nowrap:!0}],bt=[{width:"8rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"6.5rem",nowrap:!0},{width:"5rem",minWidth:"4rem",nowrap:!0}],Bt=[{width:"7rem",minWidth:"7rem",nowrap:!0},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"}],Ot=[{width:"7rem",minWidth:"7rem",nowrap:!0},{width:"6rem",minWidth:"6rem",nowrap:!0},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"},{width:"8rem",minWidth:"8rem"}],It=Ft,Vt=[{name:"bordered",type:"boolean",default:"false",description:"셀 테두리 (table_bordered)"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 행 (table_striped)"},{name:"compact",type:"boolean",default:"false",description:"좁은 패딩 (table_compact)"},{name:"hover",type:"boolean",default:"false",description:"행 호버 강조 (table_hover)"},{name:"wrap",type:"boolean",default:"true",description:"table_wrap 스크롤 래퍼 사용"},{name:"scroll",type:"boolean",default:"false",description:"sticky용 스크롤 컨테이너 (table_wrap-scroll)"},{name:"scroll-max-height",type:"string",default:"—",description:"--table-scroll-max-height (예: 14rem · none)"},{name:"sticky-top",type:"boolean",default:"false",description:"thead 상단 고정 (table_sticky-top)"},{name:"sticky-left",type:"boolean",default:"false",description:"좌측 열 고정 (table_sticky-left)"},{name:"sticky-cols",type:"1 | 2 | 3 | 4",default:"1",description:"좌측 고정 열 개수 (table_sticky-cols-n). sticky-left와 함께 사용"},{name:"sticky-left-offsets",type:"Record<number, string>",default:"{}",description:"n번째 고정 열 left 오프셋. { 2: '7rem' } → --table-sticky-left-2"},{name:"columns",type:"TableColumn[]",default:"[]",description:"열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용"}],jt=St,Ht=[{name:"default",description:"thead · tbody · tfoot 등 테이블 마크업"}],Qt=Mt,Nt=[{name:"table_wrap",description:"가로 스크롤 래퍼"},{name:"table_wrap-scroll",description:"sticky용 스크롤 컨테이너 (overflow · max-height)"},{name:"table",description:"테이블 루트"},{name:"table_columns",description:"columns prop 사용 시 고정 레이아웃·열별 패딩"},{name:"table_bordered · table_striped · table_compact · table_hover",description:"스타일 변형"},{name:"table_sticky-top",description:"thead 상단 고정"},{name:"table_sticky-left",description:"좌측 열 고정 (table_sticky-cols-n과 함께 사용)"},{name:"table_sticky-cols-1 … table_sticky-cols-4",description:"좌측 고정 열 개수. 2열 이상은 --table-sticky-left-n 필요"}],$t=Pt,zt=[{name:"--table-cell-padding-y · --table-cell-padding-x",default:"0.65rem · 1rem",description:"셀 패딩"},{name:"--table-cell-padding-y-compact · --table-cell-padding-x-compact",default:"0.4rem · 0.75rem",description:"compact 패딩"},{name:"--table-font-size · --table-header-font-weight",default:"var(--text-size-sm) · 600",description:"본문·헤더 타이포"},{name:"--table-scroll-max-height",default:"16rem",description:"table_wrap-scroll 최대 높이"},{name:"--table-sticky-left-n",default:"0 (1열)",description:"n번째 고정 열의 left 오프셋 (이전 열 너비 합)"},{name:"--table-sticky-shadow",default:"2px 0 4px -2px …",description:"좌측 고정 끝 열 그림자"}],qt=[{title:"API · Props",tables:[{columns:It,rows:Vt,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:jt,rows:Ht,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Qt,rows:Nt,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:$t,rows:zt,codeColumn:"name"}]}],Xt={title:"Components/데이터 표시/Table",id:"components-table",component:e,tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},hover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wrap:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scroll:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollMaxHeight:{control:"text",type:{name:"string",summary:"string"}},stickyTop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stickyLeft:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stickyCols:{control:"select",options:[1,2,3,4],type:{name:"enum",summary:"1 | 2 | 3 | 4"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:qt}},p={parameters:{controls:{disable:!1}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:(s,d)=>({components:{Table:e},setup(){return{args:Wt(d)}},template:`<Table v-bind="args" bordered striped hover>
      <thead><tr><th>이름</th><th>역할</th></tr></thead>
      <tbody><tr><td>홍길동</td><td>개발자</td></tr></tbody>
    </Table>`})},C={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{columns:[]},render:n(()=>({components:{Badge:x,Table:e},setup(){return{memberTableColumns:ht}},template:`<Table :columns="memberTableColumns">
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
      </Table>`}))},i={name:"줄무늬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"striped로 짝수 행에 배경색을 적용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:n(()=>({components:{Table:e},setup(){return{productTableColumns:bt}},template:`<Table striped :columns="productTableColumns">
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
      </Table>`}))},h={name:"테두리",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered로 모든 셀에 테두리를 적용합니다."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:n(()=>({components:{Table:e},template:`<Table bordered>
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
      </Table>`}))},b={name:"컴팩트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"compact로 셀 패딩을 줄여 밀도를 높입니다."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
import { productTableColumns } from '@uxkm/ui/data/table-demo';
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
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:n(()=>({components:{Table:e},setup(){return{productTableColumns:bt}},template:`<Table compact :columns="productTableColumns">
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
      </Table>`}))},B={name:"호버",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"hover로 행에 마우스를 올리면 배경이 강조됩니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import Table from '@uxkm/ui/components/Table.vue';
import { memberTableColumns } from '@uxkm/ui/data/table-demo';
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
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:n(()=>({components:{Badge:x,Table:e},setup(){return{memberTableColumns:ht}},template:`<Table hover :columns="memberTableColumns">
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
      </Table>`}))},y={name:"조합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered · compact · hover를 함께 조합할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,columns:[]},render:n(()=>({components:{Table:e},template:`<Table bordered compact hover>
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
      </Table>`}))},D={name:"상단 고정",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"scroll + sticky-top으로 헤더를 상단에 고정합니다. scroll-max-height로 스크롤 영역 높이를 조절합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import Table from '@uxkm/ui/components/Table.vue';
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
</template>`,language:"vue"}}},render:n(()=>({components:{Badge:x,Table:e},template:`<Table scroll scroll-max-height="14rem" sticky-top bordered compact>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">부서</th>
            <th scope="col">직급</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>프론트엔드</td><td>시니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>김철수</td><td>백엔드</td><td>리드</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>이영희</td><td>디자인</td><td>시니어</td><td><Badge dot color="warning" label="Away" /></td></tr>
          <tr><td>박민수</td><td>QA</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>최지우</td><td>프론트엔드</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>정수연</td><td>백엔드</td><td>시니어</td><td><Badge dot color="danger" label="Busy" /></td></tr>
          <tr><td>한도윤</td><td>인프라</td><td>리드</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>오세린</td><td>디자인</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
        </tbody>
      </Table>`}))},f={name:"좌측 고정",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"sticky-left + sticky-cols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';
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
</template>`,language:"vue"}}},render:n(()=>({components:{Table:e},setup(){return{stickyMonthColumns:Bt}},template:`<Table
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
      </Table>`}))},g={name:"좌측 고정 · 열 개수",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"sticky-cols로 고정할 열 개수를 지정합니다. 2열 이상은 sticky-left-offsets에 이전 열 너비 합을 넣습니다."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
import { stickyDeptMonthColumns } from '@uxkm/ui/data/table-demo';
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
</template>`,language:"vue"}}},render:n(()=>({components:{Table:e},setup(){return{stickyDeptMonthColumns:Ot}},template:`<Table
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
      </Table>`}))},k={name:"상단 · 좌측 고정",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"sticky-top과 sticky-left를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다."},source:{code:`<script setup>
import Table from '@uxkm/ui/components/Table.vue';
import { stickyMonthColumns } from '@uxkm/ui/data/table-demo';
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
</template>`,language:"vue"}}},render:n(()=>({components:{Table:e},setup(){return{stickyMonthColumns:Bt}},template:`<Table
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
      </Table>`}))};var L,O,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var V,j,H;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(j=C.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var Q,N,$;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(N=i.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var z,q,U;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "테두리",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "bordered로 모든 셀에 테두리를 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\n<\/script>\\n\\n<template>\\n  <Table bordered>\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">ID</th>\\n        <th scope=\\"col\\">항목</th>\\n        <th scope=\\"col\\">수량</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>001</td>\\n        <td>사과</td>\\n        <td>10</td>\\n      </tr>\\n      <tr>\\n        <td>002</td>\\n        <td>바나나</td>\\n        <td>25</td>\\n      </tr>\\n      <tr>\\n        <td>003</td>\\n        <td>오렌지</td>\\n        <td>8</td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
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
    template: \`<Table bordered>
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
}`,...(U=(q=h.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "컴팩트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "compact로 셀 패딩을 줄여 밀도를 높입니다."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { productTableColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table compact :columns=\\"productTableColumns\\">\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">제품</th>\\n        <th scope=\\"col\\">가격</th>\\n        <th scope=\\"col\\">재고</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>노트북</td>\\n        <td>1,200,000원</td>\\n        <td>24</td>\\n      </tr>\\n      <tr>\\n        <td>키보드</td>\\n        <td>89,000원</td>\\n        <td>156</td>\\n      </tr>\\n      <tr>\\n        <td>마우스</td>\\n        <td>45,000원</td>\\n        <td>89</td>\\n      </tr>\\n      <tr>\\n        <td>모니터</td>\\n        <td>350,000원</td>\\n        <td>12</td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
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
    template: \`<Table compact :columns="productTableColumns">
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "호버",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "hover로 행에 마우스를 올리면 배경이 강조됩니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { memberTableColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table hover :columns=\\"memberTableColumns\\">\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">이름</th>\\n        <th scope=\\"col\\">역할</th>\\n        <th scope=\\"col\\">상태</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>홍길동</td>\\n        <td>프론트엔드</td>\\n        <td>\\n          <Badge dot color=\\"success\\" label=\\"Active\\" />\\n        </td>\\n      </tr>\\n      <tr>\\n        <td>김철수</td>\\n        <td>백엔드</td>\\n        <td>\\n          <Badge dot color=\\"success\\" label=\\"Active\\" />\\n        </td>\\n      </tr>\\n      <tr>\\n        <td>이영희</td>\\n        <td>디자이너</td>\\n        <td>\\n          <Badge dot color=\\"warning\\" label=\\"Away\\" />\\n        </td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
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
      Badge,
      Table
    },
    setup() {
      return {
        memberTableColumns
      };
    },
    template: \`<Table hover :columns="memberTableColumns">
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
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,dt,et;y.parameters={...y.parameters,docs:{...(tt=y.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: "조합",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "bordered · compact · hover를 함께 조합할 수 있습니다."
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
}`,...(et=(dt=y.parameters)==null?void 0:dt.docs)==null?void 0:et.source}}};var nt,ot,rt;D.parameters={...D.parameters,docs:{...(nt=D.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: "상단 고정",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "scroll + sticky-top으로 헤더를 상단에 고정합니다. scroll-max-height로 스크롤 영역 높이를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport Table from '@uxkm/ui/components/Table.vue';\\n<\/script>\\n\\n<template>\\n  <Table scroll scroll-max-height=\\"14rem\\" sticky-top bordered compact>\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">이름</th>\\n        <th scope=\\"col\\">부서</th>\\n        <th scope=\\"col\\">직급</th>\\n        <th scope=\\"col\\">상태</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <td>홍길동</td>\\n        <td>프론트엔드</td>\\n        <td>시니어</td>\\n        <td><Badge dot color=\\"success\\" label=\\"Active\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>김철수</td>\\n        <td>백엔드</td>\\n        <td>리드</td>\\n        <td><Badge dot color=\\"success\\" label=\\"Active\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>이영희</td>\\n        <td>디자인</td>\\n        <td>시니어</td>\\n        <td><Badge dot color=\\"warning\\" label=\\"Away\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>박민수</td>\\n        <td>QA</td>\\n        <td>주니어</td>\\n        <td><Badge dot color=\\"success\\" label=\\"Active\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>최지우</td>\\n        <td>프론트엔드</td>\\n        <td>주니어</td>\\n        <td><Badge dot color=\\"success\\" label=\\"Active\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>정수연</td>\\n        <td>백엔드</td>\\n        <td>시니어</td>\\n        <td><Badge dot color=\\"danger\\" label=\\"Busy\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>한도윤</td>\\n        <td>인프라</td>\\n        <td>리드</td>\\n        <td><Badge dot color=\\"success\\" label=\\"Active\\" /></td>\\n      </tr>\\n      <tr>\\n        <td>오세린</td>\\n        <td>디자인</td>\\n        <td>주니어</td>\\n        <td><Badge dot color=\\"success\\" label=\\"Active\\" /></td>\\n      </tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge,
      Table
    },
    template: \`<Table scroll scroll-max-height="14rem" sticky-top bordered compact>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">부서</th>
            <th scope="col">직급</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>프론트엔드</td><td>시니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>김철수</td><td>백엔드</td><td>리드</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>이영희</td><td>디자인</td><td>시니어</td><td><Badge dot color="warning" label="Away" /></td></tr>
          <tr><td>박민수</td><td>QA</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>최지우</td><td>프론트엔드</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>정수연</td><td>백엔드</td><td>시니어</td><td><Badge dot color="danger" label="Busy" /></td></tr>
          <tr><td>한도윤</td><td>인프라</td><td>리드</td><td><Badge dot color="success" label="Active" /></td></tr>
          <tr><td>오세린</td><td>디자인</td><td>주니어</td><td><Badge dot color="success" label="Active" /></td></tr>
        </tbody>
      </Table>\`
  }))
}`,...(rt=(ot=D.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var st,at,ut;f.parameters={...f.parameters,docs:{...(st=f.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: "좌측 고정",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "sticky-left + sticky-cols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { stickyMonthColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table\\n    scroll\\n    scroll-max-height=\\"none\\"\\n    sticky-left\\n    :sticky-cols=\\"1\\"\\n    bordered\\n    compact\\n    :columns=\\"stickyMonthColumns\\"\\n  >\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">이름</th>\\n        <th scope=\\"col\\">1월</th>\\n        <th scope=\\"col\\">2월</th>\\n        <th scope=\\"col\\">3월</th>\\n        <th scope=\\"col\\">4월</th>\\n        <th scope=\\"col\\">5월</th>\\n        <th scope=\\"col\\">6월</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>\\n      <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>\\n      <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>\\n      <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Table
    },
    setup() {
      return {
        stickyMonthColumns
      };
    },
    template: \`<Table
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
      </Table>\`
  }))
}`,...(ut=(at=f.parameters)==null?void 0:at.docs)==null?void 0:ut.source}}};var lt,ct,mt;g.parameters={...g.parameters,docs:{...(lt=g.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: "좌측 고정 · 열 개수",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "sticky-cols로 고정할 열 개수를 지정합니다. 2열 이상은 sticky-left-offsets에 이전 열 너비 합을 넣습니다."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { stickyDeptMonthColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table\\n    scroll\\n    scroll-max-height=\\"none\\"\\n    sticky-left\\n    :sticky-cols=\\"2\\"\\n    :sticky-left-offsets=\\"{ 2: '7rem' }\\"\\n    bordered\\n    compact\\n    :columns=\\"stickyDeptMonthColumns\\"\\n  >\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">이름</th>\\n        <th scope=\\"col\\">부서</th>\\n        <th scope=\\"col\\">1월</th>\\n        <th scope=\\"col\\">2월</th>\\n        <th scope=\\"col\\">3월</th>\\n        <th scope=\\"col\\">4월</th>\\n        <th scope=\\"col\\">5월</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr><td>홍길동</td><td>프론트</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td></tr>\\n      <tr><td>김철수</td><td>백엔드</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td></tr>\\n      <tr><td>이영희</td><td>디자인</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td></tr>\\n      <tr><td>박민수</td><td>QA</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td></tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Table
    },
    setup() {
      return {
        stickyDeptMonthColumns
      };
    },
    template: \`<Table
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
      </Table>\`
  }))
}`,...(mt=(ct=g.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var pt,Ct,it;k.parameters={...k.parameters,docs:{...(pt=k.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  name: "상단 · 좌측 고정",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "sticky-top과 sticky-left를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다."
      },
      source: {
        code: "<script setup>\\nimport Table from '@uxkm/ui/components/Table.vue';\\nimport { stickyMonthColumns } from '@uxkm/ui/data/table-demo';\\n<\/script>\\n\\n<template>\\n  <Table\\n    scroll\\n    scroll-max-height=\\"14rem\\"\\n    sticky-top\\n    sticky-left\\n    :sticky-cols=\\"1\\"\\n    bordered\\n    compact\\n    :columns=\\"stickyMonthColumns\\"\\n  >\\n    <thead>\\n      <tr>\\n        <th scope=\\"col\\">이름</th>\\n        <th scope=\\"col\\">1월</th>\\n        <th scope=\\"col\\">2월</th>\\n        <th scope=\\"col\\">3월</th>\\n        <th scope=\\"col\\">4월</th>\\n        <th scope=\\"col\\">5월</th>\\n        <th scope=\\"col\\">6월</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>\\n      <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>\\n      <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>\\n      <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>\\n      <tr><td>최지우</td><td>180</td><td>162</td><td>171</td><td>144</td><td>210</td><td>250</td></tr>\\n      <tr><td>정수연</td><td>240</td><td>212</td><td>181</td><td>194</td><td>260</td><td>280</td></tr>\\n      <tr><td>한도윤</td><td>110</td><td>142</td><td>121</td><td>164</td><td>170</td><td>200</td></tr>\\n      <tr><td>오세린</td><td>200</td><td>192</td><td>211</td><td>184</td><td>230</td><td>310</td></tr>\\n    </tbody>\\n  </Table>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Table
    },
    setup() {
      return {
        stickyMonthColumns
      };
    },
    template: \`<Table
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
      </Table>\`
  }))
}`,...(it=(Ct=k.parameters)==null?void 0:Ct.docs)==null?void 0:it.source}}};const Yt=["Playground","Basic","Striped","Bordered","Compact","Hover","Variant","StickyTop","StickyLeft","StickyLeftCols","StickyBoth"];export{C as Basic,h as Bordered,b as Compact,B as Hover,p as Playground,k as StickyBoth,f as StickyLeft,g as StickyLeftCols,D as StickyTop,i as Striped,y as Variant,Yt as __namedExportsOrder,Xt as default};
