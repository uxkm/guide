import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r,o as i}from"./iframe-BkSPibU3.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o(e){if(d.includes(e))return{className:e?`flex_gap-${e}`:``,style:void 0};if(e===``||e==null)return{className:``,style:void 0};let t=typeof e==`number`&&Number.isFinite(e)&&e>=0?`${e}rem`:String(e).trim();return t?{className:``,style:{"--flex-current-gap":t}}:{className:``,style:void 0}}function s({as:e=`div`,direction:t=`row`,directionMd:n=``,directionLg:r=``,wrap:i=!1,cols:a,colsMd:s,colsLg:d,columns:h,columnsMd:g,columnsLg:_,gap:v=``,ratio:y=``,align:b=`stretch`,justify:x=``,itemSpan:S,itemSpanMd:C,itemSpanLg:w,equal:T=!1,autoFit:E=!1,children:D=`Flex`,className:O=``,style:k,...A}){let j=(e,t=``)=>e&&`flex_${e===`column`?`col`:e}${t}`,M=a??h,N=s??g,P=d??_,F=o(v),I=[`flex`,u.includes(t)&&j(t),u.includes(n)&&j(n,`-md`),u.includes(r)&&j(r,`-lg`),i&&`flex_wrap`,F.className,l(M)&&`flex_cols-${l(M)}`,l(N)&&`flex_cols-md-${l(N)}`,l(P)&&`flex_cols-lg-${l(P)}`,f.includes(y)&&y&&`flex_ratio-${y}`,l(S)&&`flex_items-span-${l(S)}`,l(C)&&`flex_items-span-md-${l(C)}`,l(w)&&`flex_items-span-lg-${l(w)}`,T&&`flex_equal`,E&&`flex_auto-fit`,p.includes(b)&&b&&`flex_align-${b}`,m.includes(x)&&x&&`flex_justify-${x}`,O].filter(Boolean).join(` `),L=F.style||k?{...k,...F.style}:void 0;return(0,c.jsx)(e,{className:I,"data-component":`Flex`,style:L,...A,children:D})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=a(),l=e=>Number.isInteger(Number(e))&&Number(e)>=1&&Number(e)<=12?Number(e):``,u=[``,`row`,`col`,`column`],d=[``,`sm`,`lg`,`none`],f=[``,`1-1`,`2-1`,`1-2`,`3-1`,`1-1-1`,`1-2-1`],p=[``,`start`,`center`,`end`,`stretch`,`baseline`],m=[``,`start`,`center`,`end`,`between`,`around`,`evenly`],s.__docgenInfo={description:``,methods:[],displayName:`Flex`,props:{as:{defaultValue:{value:`'div'`,computed:!1},required:!1},direction:{defaultValue:{value:`'row'`,computed:!1},required:!1},directionMd:{defaultValue:{value:`''`,computed:!1},required:!1},directionLg:{defaultValue:{value:`''`,computed:!1},required:!1},wrap:{defaultValue:{value:`false`,computed:!1},required:!1},gap:{defaultValue:{value:`''`,computed:!1},required:!1},ratio:{defaultValue:{value:`''`,computed:!1},required:!1},align:{defaultValue:{value:`'stretch'`,computed:!1},required:!1},justify:{defaultValue:{value:`''`,computed:!1},required:!1},equal:{defaultValue:{value:`false`,computed:!1},required:!1},autoFit:{defaultValue:{value:`false`,computed:!1},required:!1},children:{defaultValue:{value:`'Flex'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}function g({as:e=`div`,span:t,spanMd:n,spanLg:r,grow:i=!1,growFactor:a=1,fit:o=!1,align:s=``,order:c,children:l,className:u=``,...d}){let f=i&&Number(a)===2?`flex_grow-2`:i?`flex_grow`:``,p=[v(t)&&`flex_item-span-${v(t)}`,v(n)&&`flex_item-span-md-${v(n)}`,v(r)&&`flex_item-span-lg-${v(r)}`,f,o&&`flex_fit`,y.includes(s)&&s&&`flex_self-${s}`,v(c)&&`flex_order-${v(c)}`,u].filter(Boolean).join(` `);return(0,_.jsx)(e,{className:p,"data-component":`FlexItem`,...d,children:l})}var _,v,y;function b(){return(b=e((()=>{_=a(),v=e=>Number.isInteger(Number(e))&&Number(e)>=1&&Number(e)<=12?Number(e):``,y=[``,`auto`,`start`,`center`,`end`,`stretch`,`baseline`],g.__docgenInfo={description:``,methods:[],displayName:`FlexItem`,props:{as:{defaultValue:{value:`'div'`,computed:!1},required:!1},grow:{defaultValue:{value:`false`,computed:!1},required:!1},growFactor:{defaultValue:{value:`1`,computed:!1},required:!1},fit:{defaultValue:{value:`false`,computed:!1},required:!1},align:{defaultValue:{value:`''`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var x=t({AlignmentAndRatio:()=>W,Auto:()=>U,ChildSpan:()=>z,ContentLayout:()=>N,Equal:()=>I,Gap:()=>V,ItemSizing:()=>B,ItemSpan:()=>R,PageLayout:()=>M,Parent:()=>P,Playground:()=>j,Ratio:()=>L,Responsive:()=>H,TwelveColumns:()=>F,__namedExportsOrder:()=>G,default:()=>O});function S(e){return typeof e==`number`&&e>=1&&e<=12?e:void 0}function C(e){let t=typeof e.gapRem==`number`&&e.gapRem>0?e.gapRem:0;return t>0?t:e.gap}function w(e){let t=S(e.cols),n=S(e.colsMd),r=S(e.colsLg),i=S(e.itemSpan),a=S(e.itemSpanMd),o=S(e.itemSpanLg);return{as:typeof e.as==`string`&&e.as?e.as:`div`,direction:e.direction,directionMd:e.directionMd,directionLg:e.directionLg,wrap:e.wrap===!0,gap:C(e),ratio:e.ratio,align:e.align,justify:e.justify,equal:e.equal===!0,autoFit:e.autoFit===!0,...t==null?{}:{cols:t},...n==null?{}:{colsMd:n},...r==null?{}:{colsLg:r},...i==null?{}:{itemSpan:i},...a==null?{}:{itemSpanMd:a},...o==null?{}:{itemSpanLg:o}}}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{h(),b(),n(),T=a(),E=s,D=g,O={title:`레이아웃/Flex`,component:E,parameters:{layout:`fullscreen`,controls:{include:[`as`,`direction`,`directionMd`,`directionLg`,`wrap`,`cols`,`colsMd`,`colsLg`,`gap`,`gapRem`,`ratio`,`align`,`justify`,`itemSpan`,`itemSpanMd`,`itemSpanLg`,`equal`,`autoFit`]},docs:{extractArgTypes:()=>({})}},args:{as:`div`,direction:`row`,directionMd:``,directionLg:``,wrap:!1,cols:3,colsMd:0,colsLg:0,gap:`sm`,gapRem:0,ratio:``,align:`stretch`,justify:``,itemSpan:0,itemSpanMd:0,itemSpanLg:0,equal:!1,autoFit:!1},argTypes:{...r,as:{control:`select`,options:[`div`,`section`,`main`,`article`,`aside`,`header`,`footer`,`nav`],type:`string`,description:`루트 요소`},direction:{control:`select`,options:[``,`row`,`col`,`column`],labels:{"":`기본`},type:`string`,description:`기본 배치 방향`},directionMd:{control:`select`,options:[``,`row`,`col`,`column`],labels:{"":`미적용`},type:`string`,description:`md 이상 배치 방향`},directionLg:{control:`select`,options:[``,`row`,`col`,`column`],labels:{"":`미적용`},type:`string`,description:`lg 이상 배치 방향`},wrap:{...i,description:`줄바꿈 허용`},cols:{control:{type:`number`,min:0,max:12},type:`number`,description:`균등 항목 수 (1~12). 0이면 미적용`},colsMd:{control:{type:`number`,min:0,max:12},type:`number`,description:`md 이상 균등 항목 수. 0이면 미적용`},colsLg:{control:{type:`number`,min:0,max:12},type:`number`,description:`lg 이상 균등 항목 수. 0이면 미적용`},gap:{control:`select`,options:[``,`sm`,`lg`,`none`],labels:{"":`기본(md)`,sm:`sm`,lg:`lg`,none:`없음`},type:`string`,description:`간격 프리셋 (gapRem이 0일 때)`},gapRem:{control:{type:`number`,min:0,max:8,step:.25},type:`number`,description:`간격 (rem). 0보다 크면 프리셋 대신 사용`},ratio:{control:`select`,options:[``,`1-1`,`2-1`,`1-2`,`3-1`,`1-1-1`,`1-2-1`],labels:{"":`없음`},type:`string`,description:`항목 너비 비율`},align:{control:`select`,options:[``,`start`,`center`,`end`,`stretch`,`baseline`],labels:{"":`기본`},type:`string`,description:`교차축 정렬`},justify:{control:`select`,options:[``,`start`,`center`,`end`,`between`,`around`,`evenly`],labels:{"":`기본`},type:`string`,description:`주축 정렬`},itemSpan:{control:{type:`number`,min:0,max:12},type:`number`,description:`모든 직계 자식의 기본 span. 0이면 미적용`},itemSpanMd:{control:{type:`number`,min:0,max:12},type:`number`,description:`md 이상 모든 직계 자식 span. 0이면 미적용`},itemSpanLg:{control:{type:`number`,min:0,max:12},type:`number`,description:`lg 이상 모든 직계 자식 span. 0이면 미적용`},equal:{...i,description:`모든 직계 자식을 동일 너비로 확장`},autoFit:{...i,description:`최소 너비 기준 자동 배치`}}},k=({children:e})=>(0,T.jsx)(`div`,{className:`btn-demo`,children:e}),A=(e,t=e=>String(e+1))=>Array.from({length:e},(e,n)=>(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:typeof t==`function`?t(n):t},n)),j={name:`Playground`,render:e=>{let t=w(e),n=t.cols??(t.ratio?String(t.ratio).split(`-`).length:3);return(0,T.jsx)(k,{children:(0,T.jsx)(E,{...t,children:A(n)})})}},M={name:`기본 페이지 레이아웃`,render:()=>(0,T.jsx)(k,{children:(0,T.jsxs)(E,{wrap:!0,gap:`sm`,children:[(0,T.jsx)(D,{as:`header`,span:12,className:`flex_demo-cell`,children:`Header`}),(0,T.jsx)(D,{as:`aside`,span:12,spanMd:3,className:`flex_demo-cell`,children:`Sidebar`}),(0,T.jsx)(D,{as:`main`,span:12,spanMd:9,className:`flex_demo-cell`,children:`Main content`}),(0,T.jsx)(D,{as:`footer`,span:12,className:`flex_demo-cell`,children:`Footer`})]})})},N={name:`콘텐츠가 있는 페이지 레이아웃`,render:()=>(0,T.jsx)(k,{children:(0,T.jsxs)(E,{wrap:!0,gap:`sm`,align:`stretch`,children:[(0,T.jsx)(D,{as:`header`,span:12,className:`flex_demo-cell`,children:`Header`}),(0,T.jsx)(D,{as:`aside`,span:12,spanMd:3,className:`flex_demo-cell`,children:`Sidebar`}),(0,T.jsxs)(D,{as:`main`,span:12,spanMd:9,className:`flex_demo-cell`,children:[(0,T.jsx)(`h3`,{children:`Main content`}),(0,T.jsx)(`p`,{children:`페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.`}),(0,T.jsxs)(E,{cols:1,colsLg:2,gap:`sm`,children:[(0,T.jsx)(`article`,{className:`component_stub`,children:`Content section`}),(0,T.jsx)(`article`,{className:`component_stub`,children:`Content section`})]})]}),(0,T.jsx)(D,{as:`footer`,span:12,className:`flex_demo-cell`,children:`Footer`})]})})},P={name:`부모 클래스로 제어`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsx)(E,{cols:3,children:A(3,`flex_cols-3`)}),(0,T.jsx)(E,{ratio:`2-1`,children:A(2,`flex_ratio-2-1`)}),(0,T.jsx)(E,{itemSpan:4,children:A(6,`flex_items-span-4`)})]})},F={name:`12열 전체 활용`,render:()=>(0,T.jsx)(k,{children:(0,T.jsx)(E,{itemSpan:1,gap:`sm`,children:A(12)})})},I={name:`균등 항목`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsx)(E,{cols:2,children:A(2,`cols 2`)}),(0,T.jsx)(E,{cols:4,children:A(4,`cols 4`)})]})},L={name:`비율 항목`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsxs)(E,{ratio:`1-2`,children:[(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`1`}),(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`2`})]}),(0,T.jsxs)(E,{ratio:`1-2-1`,children:[(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`1`}),(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`2`}),(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`1`})]})]})},R={name:`자식 일괄 span (12단위)`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsx)(E,{itemSpan:6,children:A(4,`span 6`)}),(0,T.jsx)(E,{itemSpan:3,children:A(4,`span 3`)})]})},z={name:`자식별 span (혼합 레이아웃)`,render:()=>(0,T.jsx)(k,{children:(0,T.jsxs)(E,{wrap:!0,children:[(0,T.jsx)(D,{span:8,className:`flex_demo-cell`,children:`span 8`}),(0,T.jsx)(D,{span:4,className:`flex_demo-cell`,children:`span 4`}),Array.from({length:3},(e,t)=>(0,T.jsx)(D,{span:4,className:`flex_demo-cell`,children:`span 4`},t))]})})},B={name:`항목 확장과 고정`,render:()=>(0,T.jsx)(k,{children:(0,T.jsxs)(E,{gap:`sm`,children:[(0,T.jsx)(D,{fit:!0,className:`flex_demo-cell`,children:`fit`}),(0,T.jsx)(D,{grow:!0,className:`flex_demo-cell`,children:`grow 1`}),(0,T.jsx)(D,{grow:!0,growFactor:2,className:`flex_demo-cell`,children:`grow 2`})]})})},V={name:`간격`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsx)(E,{cols:3,gap:`sm`,children:A(3,`gap sm`)}),(0,T.jsx)(E,{cols:3,gap:`lg`,children:A(3,`gap lg`)}),(0,T.jsx)(E,{cols:3,gap:1.5,children:A(3,`gap 1.5rem`)})]})},H={name:`반응형`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsx)(E,{cols:1,colsMd:2,colsLg:3,gap:`sm`,children:A(3,`1 → md 2 → lg 3개`)}),(0,T.jsx)(E,{itemSpan:12,itemSpanMd:6,itemSpanLg:4,children:A(3,`span 12 → md 6 → lg 4`)}),(0,T.jsxs)(E,{wrap:!0,children:[(0,T.jsx)(D,{span:12,spanMd:8,spanLg:9,className:`flex_demo-cell`,children:`개별 span 12 → md 8 → lg 9`}),(0,T.jsx)(D,{span:12,spanMd:4,spanLg:3,className:`flex_demo-cell`,children:`개별 span 12 → md 4 → lg 3`})]})]})},U={name:`자동 배치`,render:()=>(0,T.jsx)(k,{children:(0,T.jsx)(E,{autoFit:!0,children:A(6,`auto-fit`)})})},W={name:`정렬과 비율`,render:()=>(0,T.jsxs)(k,{children:[(0,T.jsxs)(E,{justify:`between`,gap:`sm`,children:[(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`Start`}),(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`End`})]}),(0,T.jsxs)(E,{ratio:`2-1`,gap:`sm`,children:[(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`2`}),(0,T.jsx)(`div`,{className:`flex_demo-cell`,children:`1`})]})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const props = flexPropsFromArgs(args);
    const count = props.cols ?? (props.ratio ? String(props.ratio).split('-').length : 3);
    return <Demo>
        <Flex {...props}>{cells(count)}</Flex>
      </Demo>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '기본 페이지 레이아웃',
  render: () => <Demo>
      <Flex wrap gap="sm">
        <FlexItem as="header" span={12} className="flex_demo-cell">
          Header
        </FlexItem>
        <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">
          Sidebar
        </FlexItem>
        <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">
          Main content
        </FlexItem>
        <FlexItem as="footer" span={12} className="flex_demo-cell">
          Footer
        </FlexItem>
      </Flex>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '콘텐츠가 있는 페이지 레이아웃',
  render: () => <Demo>
      <Flex wrap gap="sm" align="stretch">
        <FlexItem as="header" span={12} className="flex_demo-cell">
          Header
        </FlexItem>
        <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">
          Sidebar
        </FlexItem>
        <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">
          <h3>Main content</h3>
          <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
          <Flex cols={1} colsLg={2} gap="sm">
            <article className="component_stub">Content section</article>
            <article className="component_stub">Content section</article>
          </Flex>
        </FlexItem>
        <FlexItem as="footer" span={12} className="flex_demo-cell">
          Footer
        </FlexItem>
      </Flex>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '부모 클래스로 제어',
  render: () => <Demo>
      <Flex cols={3}>{cells(3, 'flex_cols-3')}</Flex>
      <Flex ratio="2-1">{cells(2, 'flex_ratio-2-1')}</Flex>
      <Flex itemSpan={4}>{cells(6, 'flex_items-span-4')}</Flex>
    </Demo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '12열 전체 활용',
  render: () => <Demo>
      <Flex itemSpan={1} gap="sm">
        {cells(12)}
      </Flex>
    </Demo>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '균등 항목',
  render: () => <Demo>
      <Flex cols={2}>{cells(2, 'cols 2')}</Flex>
      <Flex cols={4}>{cells(4, 'cols 4')}</Flex>
    </Demo>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '비율 항목',
  render: () => <Demo>
      <Flex ratio="1-2">
        <div className="flex_demo-cell">1</div>
        <div className="flex_demo-cell">2</div>
      </Flex>
      <Flex ratio="1-2-1">
        <div className="flex_demo-cell">1</div>
        <div className="flex_demo-cell">2</div>
        <div className="flex_demo-cell">1</div>
      </Flex>
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '자식 일괄 span (12단위)',
  render: () => <Demo>
      <Flex itemSpan={6}>{cells(4, 'span 6')}</Flex>
      <Flex itemSpan={3}>{cells(4, 'span 3')}</Flex>
    </Demo>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '자식별 span (혼합 레이아웃)',
  render: () => <Demo>
      <Flex wrap>
        <FlexItem span={8} className="flex_demo-cell">
          span 8
        </FlexItem>
        <FlexItem span={4} className="flex_demo-cell">
          span 4
        </FlexItem>
        {Array.from({
        length: 3
      }, (_, index) => <FlexItem span={4} className="flex_demo-cell" key={index}>
            span 4
          </FlexItem>)}
      </Flex>
    </Demo>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '항목 확장과 고정',
  render: () => <Demo>
      <Flex gap="sm">
        <FlexItem fit className="flex_demo-cell">
          fit
        </FlexItem>
        <FlexItem grow className="flex_demo-cell">
          grow 1
        </FlexItem>
        <FlexItem grow growFactor={2} className="flex_demo-cell">
          grow 2
        </FlexItem>
      </Flex>
    </Demo>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <Demo>
      <Flex cols={3} gap="sm">
        {cells(3, 'gap sm')}
      </Flex>
      <Flex cols={3} gap="lg">
        {cells(3, 'gap lg')}
      </Flex>
      <Flex cols={3} gap={1.5}>
        {cells(3, 'gap 1.5rem')}
      </Flex>
    </Demo>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '반응형',
  render: () => <Demo>
      <Flex cols={1} colsMd={2} colsLg={3} gap="sm">
        {cells(3, '1 → md 2 → lg 3개')}
      </Flex>
      <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        {cells(3, 'span 12 → md 6 → lg 4')}
      </Flex>
      <Flex wrap>
        <FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">
          개별 span 12 → md 8 → lg 9
        </FlexItem>
        <FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">
          개별 span 12 → md 4 → lg 3
        </FlexItem>
      </Flex>
    </Demo>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '자동 배치',
  render: () => <Demo>
      <Flex autoFit>{cells(6, 'auto-fit')}</Flex>
    </Demo>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '정렬과 비율',
  render: () => <Demo>
      <Flex justify="between" gap="sm">
        <div className="flex_demo-cell">Start</div>
        <div className="flex_demo-cell">End</div>
      </Flex>
      <Flex ratio="2-1" gap="sm">
        <div className="flex_demo-cell">2</div>
        <div className="flex_demo-cell">1</div>
      </Flex>
    </Demo>
}`,...W.parameters?.docs?.source}}},G=[`Playground`,`PageLayout`,`ContentLayout`,`Parent`,`TwelveColumns`,`Equal`,`Ratio`,`ItemSpan`,`ChildSpan`,`ItemSizing`,`Gap`,`Responsive`,`Auto`,`AlignmentAndRatio`]})))()}export{I as a,B as c,P as d,j as f,K as g,F as h,N as i,R as l,H as m,U as n,x as o,L as p,z as r,V as s,W as t,M as u};