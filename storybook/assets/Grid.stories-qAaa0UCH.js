import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r,o as i}from"./iframe-BkSPibU3.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o(e){if(u.includes(e))return{className:e?`grid_gap-${e}`:``,style:void 0};if(e===``||e==null)return{className:``,style:void 0};let t=typeof e==`number`&&Number.isFinite(e)&&e>=0?`${e}rem`:String(e).trim();return t?{className:``,style:{"--grid-current-gap":t}}:{className:``,style:void 0}}function s({as:e=`div`,cols:t,colsMd:n,colsLg:r,columns:i,columnsMd:a,columnsLg:s,gap:u=``,ratio:p=``,align:m=``,itemSpan:h,itemSpanMd:g,itemSpanLg:_,autoFit:v=!1,autoFill:y=!1,equalColumns:b=!1,children:x=`Grid`,className:S=``,style:C,...w}){let T=t??i,E=n??a,D=r??s,O=o(u),k=[`grid`,l(T)&&`grid_cols-${l(T)}`,l(E)&&`grid_cols-md-${l(E)}`,l(D)&&`grid_cols-lg-${l(D)}`,O.className,d.includes(p)&&p&&`grid_ratio-${p}`,l(h)&&`grid_item-span-${l(h)}`,l(g)&&`grid_item-span-md-${l(g)}`,l(_)&&`grid_item-span-lg-${l(_)}`,v&&`grid_auto-fit`,y&&`grid_auto-fill`,b&&`grid_equal-columns`,f.includes(m)&&m&&`grid_align-${m}`,S].filter(Boolean).join(` `),A=O.style||C?{...C,...O.style}:void 0;return(0,c.jsx)(e,{className:k,"data-component":`Grid`,style:A,...w,children:x})}var c,l,u,d,f;function p(){return(p=e((()=>{c=a(),l=e=>Number.isInteger(Number(e))&&Number(e)>=1&&Number(e)<=12?Number(e):``,u=[``,`sm`,`lg`,`none`],d=[``,`1-1`,`2-1`,`1-2`,`3-1`,`1-1-1`,`1-2-1`],f=[``,`center`,`end`],s.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{as:{defaultValue:{value:`'div'`,computed:!1},required:!1},gap:{defaultValue:{value:`''`,computed:!1},required:!1},ratio:{defaultValue:{value:`''`,computed:!1},required:!1},align:{defaultValue:{value:`''`,computed:!1},required:!1},autoFit:{defaultValue:{value:`false`,computed:!1},required:!1},autoFill:{defaultValue:{value:`false`,computed:!1},required:!1},equalColumns:{defaultValue:{value:`false`,computed:!1},required:!1},children:{defaultValue:{value:`'Grid'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}function m({as:e=`div`,span:t,spanMd:n,spanLg:r,children:i,className:a=``,...o}){let s=[g(t)&&`grid_col-span-${g(t)}`,g(n)&&`grid_col-span-md-${g(n)}`,g(r)&&`grid_col-span-lg-${g(r)}`,a].filter(Boolean).join(` `);return(0,h.jsx)(e,{className:s,"data-component":`GridCol`,...o,children:i})}var h,g;function _(){return(_=e((()=>{h=a(),g=e=>Number.isInteger(Number(e))&&Number(e)>=1&&Number(e)<=12?Number(e):``,m.__docgenInfo={description:``,methods:[],displayName:`GridCol`,props:{as:{defaultValue:{value:`'div'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var v=t({Auto:()=>z,BasicLayout:()=>k,Child:()=>I,ContentLayout:()=>A,Equal:()=>N,Gap:()=>L,ItemSpan:()=>F,Parent:()=>M,Playground:()=>O,Ratio:()=>P,Responsive:()=>R,TwelveColumns:()=>j,__namedExportsOrder:()=>B,default:()=>T});function y(e){return typeof e==`number`&&e>=1&&e<=12?e:void 0}function b(e){let t=typeof e.gapRem==`number`&&e.gapRem>0?e.gapRem:0;return t>0?t:e.gap}function x(e){let t=y(e.cols),n=y(e.colsMd),r=y(e.colsLg),i=y(e.itemSpan),a=y(e.itemSpanMd),o=y(e.itemSpanLg);return{as:typeof e.as==`string`&&e.as?e.as:`div`,gap:b(e),ratio:e.ratio,align:e.align,autoFit:e.autoFit===!0,autoFill:e.autoFill===!0,equalColumns:e.equalColumns===!0,...t==null?{}:{cols:t},...n==null?{}:{colsMd:n},...r==null?{}:{colsLg:r},...i==null?{}:{itemSpan:i},...a==null?{}:{itemSpanMd:a},...o==null?{}:{itemSpanLg:o}}}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{p(),_(),n(),S=a(),C=s,w=m,T={title:`레이아웃/Grid`,component:C,parameters:{layout:`fullscreen`,controls:{include:[`as`,`cols`,`colsMd`,`colsLg`,`gap`,`gapRem`,`ratio`,`align`,`itemSpan`,`itemSpanMd`,`itemSpanLg`,`autoFit`,`autoFill`,`equalColumns`]},docs:{extractArgTypes:()=>({})}},args:{as:`div`,cols:3,colsMd:0,colsLg:0,gap:`sm`,gapRem:0,ratio:``,align:``,itemSpan:0,itemSpanMd:0,itemSpanLg:0,autoFit:!1,autoFill:!1,equalColumns:!1},argTypes:{...r,as:{control:`select`,options:[`div`,`section`,`main`,`article`,`aside`,`header`,`footer`,`nav`],type:`string`,description:`루트 요소`},cols:{control:{type:`number`,min:0,max:12},type:`number`,description:`균등 열 수 (1~12). 0이면 미적용`},colsMd:{control:{type:`number`,min:0,max:12},type:`number`,description:`md 이상 균등 열 수. 0이면 미적용`},colsLg:{control:{type:`number`,min:0,max:12},type:`number`,description:`lg 이상 균등 열 수. 0이면 미적용`},gap:{control:`select`,options:[``,`sm`,`lg`,`none`],labels:{"":`기본(md)`,sm:`sm`,lg:`lg`,none:`없음`},type:`string`,description:`간격 프리셋 (gapRem이 0일 때)`},gapRem:{control:{type:`number`,min:0,max:8,step:.25},type:`number`,description:`간격 (rem). 0보다 크면 프리셋 대신 사용`},ratio:{control:`select`,options:[``,`1-1`,`2-1`,`1-2`,`3-1`,`1-1-1`,`1-2-1`],labels:{"":`없음`},type:`string`,description:`열 너비 비율`},align:{control:`select`,options:[``,`center`,`end`],labels:{"":`기본(stretch)`},type:`string`,description:`교차축 정렬`},itemSpan:{control:{type:`number`,min:0,max:12},type:`number`,description:`모든 직계 자식의 기본 span. 0이면 미적용`},itemSpanMd:{control:{type:`number`,min:0,max:12},type:`number`,description:`md 이상 모든 직계 자식 span. 0이면 미적용`},itemSpanLg:{control:{type:`number`,min:0,max:12},type:`number`,description:`lg 이상 모든 직계 자식 span. 0이면 미적용`},autoFit:{...i,description:`빈 트랙을 접으며 자동 열 배치`},autoFill:{...i,description:`빈 트랙을 유지하며 자동 열 생성`},equalColumns:{...i,description:`자식 수만큼 동일 너비 열 생성`}}},E=({children:e})=>(0,S.jsx)(`div`,{className:`btn-demo`,children:e}),D=(e,t=e=>String(e+1))=>Array.from({length:e},(e,n)=>(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:typeof t==`function`?t(n):t},n)),O={name:`Playground`,render:e=>{let t=x(e),n=t.cols??(t.ratio?String(t.ratio).split(`-`).length:3);return(0,S.jsx)(E,{children:(0,S.jsx)(C,{...t,children:D(n)})})}},k={name:`기본 페이지 레이아웃`,render:()=>(0,S.jsx)(E,{children:(0,S.jsxs)(C,{gap:`sm`,children:[(0,S.jsx)(w,{as:`header`,span:12,className:`grid_demo-cell`,children:`Header`}),(0,S.jsx)(w,{as:`aside`,span:12,spanMd:3,className:`grid_demo-cell`,children:`Sidebar`}),(0,S.jsx)(w,{as:`main`,span:12,spanMd:9,className:`grid_demo-cell`,children:`Main content`}),(0,S.jsx)(w,{as:`footer`,span:12,className:`grid_demo-cell`,children:`Footer`})]})})},A={name:`콘텐츠가 있는 페이지 레이아웃`,render:()=>(0,S.jsx)(E,{children:(0,S.jsxs)(C,{gap:`sm`,children:[(0,S.jsx)(w,{as:`header`,span:12,className:`grid_demo-cell`,children:`Header`}),(0,S.jsx)(w,{as:`aside`,span:12,spanMd:3,className:`grid_demo-cell`,children:`Sidebar`}),(0,S.jsxs)(w,{as:`main`,span:12,spanMd:9,className:`grid_demo-cell`,children:[(0,S.jsx)(`h3`,{children:`Main content`}),(0,S.jsx)(`p`,{children:`페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.`}),(0,S.jsxs)(C,{cols:1,colsLg:2,gap:`sm`,children:[(0,S.jsx)(`article`,{className:`component_stub`,children:`Content section`}),(0,S.jsx)(`article`,{className:`component_stub`,children:`Content section`})]})]}),(0,S.jsx)(w,{as:`footer`,span:12,className:`grid_demo-cell`,children:`Footer`})]})})},j={name:`12열 전체 활용`,render:()=>(0,S.jsx)(E,{children:(0,S.jsx)(C,{itemSpan:1,gap:`sm`,children:D(12)})})},M={name:`부모 클래스로 제어`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsx)(C,{cols:3,children:D(3,`grid_cols-3`)}),(0,S.jsx)(C,{ratio:`2-1`,children:D(2,`grid_ratio-2-1`)}),(0,S.jsx)(C,{itemSpan:4,children:D(6,e=>e===0?`grid_item-span-4 (12열 기준 3개/행)`:`grid_item-span-4`)})]})},N={name:`균등 열`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsx)(C,{cols:2,children:D(2,`cols 2`)}),(0,S.jsx)(C,{cols:4,children:D(4,`cols 4`)})]})},P={name:`비율 열`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsxs)(C,{ratio:`1-2`,children:[(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`1 : 2`}),(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`1 : 2`})]}),(0,S.jsxs)(C,{ratio:`1-2-1`,children:[(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`1`}),(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`2`}),(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`1`})]})]})},F={name:`자식 일괄 span (12열)`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsx)(C,{itemSpan:6,children:D(4,`span 6`)}),(0,S.jsx)(C,{itemSpan:3,children:D(4,`span 3`)})]})},I={name:`자식별 span (혼합 레이아웃)`,render:()=>(0,S.jsx)(E,{children:(0,S.jsxs)(C,{children:[(0,S.jsx)(w,{span:8,children:(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`span 8`})}),(0,S.jsx)(w,{span:4,children:(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`span 4`})}),Array.from({length:3},(e,t)=>(0,S.jsx)(w,{span:4,children:(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`span 4`})},t))]})})},L={name:`간격`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsx)(C,{cols:3,gap:`sm`,children:D(3,`gap sm`)}),(0,S.jsx)(C,{cols:3,gap:`lg`,children:D(3,`gap lg`)}),(0,S.jsx)(C,{cols:3,gap:1.5,children:D(3,`gap 1.5rem`)})]})},R={name:`반응형 (부모)`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsx)(C,{cols:1,colsMd:2,colsLg:3,children:D(3,`1 → md 2 → lg 3열`)}),(0,S.jsx)(C,{itemSpan:12,itemSpanMd:6,itemSpanLg:4,children:D(3,`span 12 → md 6 → lg 4`)}),(0,S.jsxs)(C,{children:[(0,S.jsx)(w,{span:12,spanMd:8,spanLg:9,children:(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`개별 span 12 → md 8 → lg 9`})}),(0,S.jsx)(w,{span:12,spanMd:4,spanLg:3,children:(0,S.jsx)(`div`,{className:`grid_demo-cell`,children:`개별 span 12 → md 4 → lg 3`})})]})]})},z={name:`자동 배치`,render:()=>(0,S.jsxs)(E,{children:[(0,S.jsx)(C,{autoFit:!0,children:D(6,`auto-fit`)}),(0,S.jsx)(C,{autoFill:!0,children:D(3,`auto-fill`)}),(0,S.jsx)(C,{equalColumns:!0,children:D(3,`equal`)})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const props = gridPropsFromArgs(args);
    const count = props.cols ?? (props.ratio ? String(props.ratio).split('-').length : 3);
    return <Demo>
        <Grid {...props}>{cells(count)}</Grid>
      </Demo>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '기본 페이지 레이아웃',
  render: () => <Demo>
      <Grid gap="sm">
        <GridCol as="header" span={12} className="grid_demo-cell">
          Header
        </GridCol>
        <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
          Sidebar
        </GridCol>
        <GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">
          Main content
        </GridCol>
        <GridCol as="footer" span={12} className="grid_demo-cell">
          Footer
        </GridCol>
      </Grid>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '콘텐츠가 있는 페이지 레이아웃',
  render: () => <Demo>
      <Grid gap="sm">
        <GridCol as="header" span={12} className="grid_demo-cell">
          Header
        </GridCol>
        <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">
          Sidebar
        </GridCol>
        <GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">
          <h3>Main content</h3>
          <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
          <Grid cols={1} colsLg={2} gap="sm">
            <article className="component_stub">Content section</article>
            <article className="component_stub">Content section</article>
          </Grid>
        </GridCol>
        <GridCol as="footer" span={12} className="grid_demo-cell">
          Footer
        </GridCol>
      </Grid>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '12열 전체 활용',
  render: () => <Demo>
      <Grid itemSpan={1} gap="sm">
        {cells(12)}
      </Grid>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '부모 클래스로 제어',
  render: () => <Demo>
      <Grid cols={3}>{cells(3, 'grid_cols-3')}</Grid>
      <Grid ratio="2-1">{cells(2, 'grid_ratio-2-1')}</Grid>
      <Grid itemSpan={4}>
        {cells(6, index => index === 0 ? 'grid_item-span-4 (12열 기준 3개/행)' : 'grid_item-span-4')}
      </Grid>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '균등 열',
  render: () => <Demo>
      <Grid cols={2}>{cells(2, 'cols 2')}</Grid>
      <Grid cols={4}>{cells(4, 'cols 4')}</Grid>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '비율 열',
  render: () => <Demo>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </Demo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '자식 일괄 span (12열)',
  render: () => <Demo>
      <Grid itemSpan={6}>{cells(4, 'span 6')}</Grid>
      <Grid itemSpan={3}>{cells(4, 'span 3')}</Grid>
    </Demo>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '자식별 span (혼합 레이아웃)',
  render: () => <Demo>
      <Grid>
        <GridCol span={8}>
          <div className="grid_demo-cell">span 8</div>
        </GridCol>
        <GridCol span={4}>
          <div className="grid_demo-cell">span 4</div>
        </GridCol>
        {Array.from({
        length: 3
      }, (_, index) => <GridCol span={4} key={index}>
            <div className="grid_demo-cell">span 4</div>
          </GridCol>)}
      </Grid>
    </Demo>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <Demo>
      <Grid cols={3} gap="sm">
        {cells(3, 'gap sm')}
      </Grid>
      <Grid cols={3} gap="lg">
        {cells(3, 'gap lg')}
      </Grid>
      <Grid cols={3} gap={1.5}>
        {cells(3, 'gap 1.5rem')}
      </Grid>
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '반응형 (부모)',
  render: () => <Demo>
      <Grid cols={1} colsMd={2} colsLg={3}>
        {cells(3, '1 → md 2 → lg 3열')}
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        {cells(3, 'span 12 → md 6 → lg 4')}
      </Grid>
      <Grid>
        <GridCol span={12} spanMd={8} spanLg={9}>
          <div className="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
        </GridCol>
        <GridCol span={12} spanMd={4} spanLg={3}>
          <div className="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
        </GridCol>
      </Grid>
    </Demo>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '자동 배치',
  render: () => <Demo>
      <Grid autoFit>{cells(6, 'auto-fit')}</Grid>
      <Grid autoFill>{cells(3, 'auto-fill')}</Grid>
      <Grid equalColumns>{cells(3, 'equal')}</Grid>
    </Demo>
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`BasicLayout`,`ContentLayout`,`TwelveColumns`,`Parent`,`Equal`,`Ratio`,`ItemSpan`,`Child`,`Gap`,`Responsive`,`Auto`]})))()}export{N as a,F as c,P as d,R as f,A as i,M as l,V as m,k as n,L as o,j as p,I as r,v as s,z as t,O as u};