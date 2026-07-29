import{b as d,c as s,e as Q,d as R}from"./gulp-demos-uIKTVH8x.js";const K=`<!-- @meta
title: Grid | HTML Components
activeNav: grid
pageTitle: Grid
-->
<div class="page_intro">
  <h1>Grid</h1>
  <p class="lead">12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 <strong>부모 .grid</strong>에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다.</p>
</div>

<section class="section demo_section" aria-labelledby="parent-heading">
  <div class="demo_section-header">
    <h2 id="parent-heading">부모 클래스로 제어</h2>
    <p>열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_cols-3">
      <div class="grid_demo-cell">grid_cols-3</div>
      <div class="grid_demo-cell">grid_cols-3</div>
      <div class="grid_demo-cell">grid_cols-3</div>
    </div>
    <div class="grid grid_ratio-2-1">
      <div class="grid_demo-cell">grid_ratio-2-1</div>
      <div class="grid_demo-cell">grid_ratio-2-1</div>
    </div>
    <div class="grid grid_item-span-4">
      <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
      <div class="grid_demo-cell">grid_item-span-4</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="equal-heading">
  <div class="demo_section-header">
    <h2 id="equal-heading">균등 열</h2>
    <p>grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_cols-2">
      <div class="grid_demo-cell">cols 2</div>
      <div class="grid_demo-cell">cols 2</div>
    </div>
    <div class="grid grid_cols-4">
      <div class="grid_demo-cell">cols 4</div>
      <div class="grid_demo-cell">cols 4</div>
      <div class="grid_demo-cell">cols 4</div>
      <div class="grid_demo-cell">cols 4</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="ratio-heading">
  <div class="demo_section-header">
    <h2 id="ratio-heading">비율 열</h2>
    <p>grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_ratio-1-2">
      <div class="grid_demo-cell">1 : 2</div>
      <div class="grid_demo-cell">1 : 2</div>
    </div>
    <div class="grid grid_ratio-1-2-1">
      <div class="grid_demo-cell">1</div>
      <div class="grid_demo-cell">2</div>
      <div class="grid_demo-cell">1</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="item-span-heading">
  <div class="demo_section-header">
    <h2 id="item-span-heading">자식 일괄 span (12열)</h2>
    <p>모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_item-span-6">
      <div class="grid_demo-cell">span 6</div>
      <div class="grid_demo-cell">span 6</div>
      <div class="grid_demo-cell">span 6</div>
      <div class="grid_demo-cell">span 6</div>
    </div>
    <div class="grid grid_item-span-3">
      <div class="grid_demo-cell">span 3</div>
      <div class="grid_demo-cell">span 3</div>
      <div class="grid_demo-cell">span 3</div>
      <div class="grid_demo-cell">span 3</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="child-heading">
  <div class="demo_section-header">
    <h2 id="child-heading">자식별 span (혼합 레이아웃)</h2>
    <p>행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid">
      <div class="grid_col-span-8"><div class="grid_demo-cell">span 8</div></div>
      <div class="grid_col-span-4"><div class="grid_demo-cell">span 4</div></div>
      <div class="grid_col-span-4"><div class="grid_demo-cell">span 4</div></div>
      <div class="grid_col-span-4"><div class="grid_demo-cell">span 4</div></div>
      <div class="grid_col-span-4"><div class="grid_demo-cell">span 4</div></div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="gap-heading">
  <div class="demo_section-header">
    <h2 id="gap-heading">간격</h2>
    <p>grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_cols-3 grid_gap-sm">
      <div class="grid_demo-cell">gap sm</div>
      <div class="grid_demo-cell">gap sm</div>
      <div class="grid_demo-cell">gap sm</div>
    </div>
    <div class="grid grid_cols-3 grid_gap-lg">
      <div class="grid_demo-cell">gap lg</div>
      <div class="grid_demo-cell">gap lg</div>
      <div class="grid_demo-cell">gap lg</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="responsive-heading">
  <div class="demo_section-header">
    <h2 id="responsive-heading">반응형 (부모)</h2>
    <p>grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_cols-1 grid_cols-md-2 grid_cols-lg-3">
      <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
      <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    </div>
    <div class="grid grid_item-span-12 grid_item-span-md-6 grid_item-span-lg-4">
      <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
      <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="auto-heading">
  <div class="demo_section-header">
    <h2 id="auto-heading">자동 배치</h2>
    <p>grid_auto-fit · grid_auto-fill은 부모에 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="grid grid_auto-fit">
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
      <div class="grid_demo-cell">auto-fit</div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="api-heading">
  <h2 id="api-heading">클래스 · 속성</h2>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">클래스</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="typo_code">grid</code></td>
            <td>12열 CSS Grid 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_cols-*</code> · <code class="typo_code">grid_cols-md-*</code> · <code class="typo_code">grid_cols-lg-*</code></td>
            <td>균등 열 수</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_ratio-*</code></td>
            <td>비율 열 (2-1, 1-2-1 등)</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_item-span-*</code> · <code class="typo_code">grid_item-span-md-*</code> · <code class="typo_code">grid_item-span-lg-*</code></td>
            <td>자식 일괄 span</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_col-span-*</code> · <code class="typo_code">grid_col-span-md-*</code> · <code class="typo_code">grid_col-span-lg-*</code></td>
            <td>자식별 개별 span (혼합 레이아웃)</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_gap-sm</code> · <code class="typo_code">grid_gap-lg</code> · <code class="typo_code">grid_gap-none</code></td>
            <td>간격 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_auto-fit</code> · <code class="typo_code">grid_auto-fill</code></td>
            <td>자동 반복 열</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_equal-columns</code></td>
            <td>균등 열 자동 흐름</td>
          </tr>
          <tr>
            <td><code class="typo_code">grid_align-center</code> · <code class="typo_code">grid_align-end</code></td>
            <td>교차축 정렬</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="tokens-heading">
  <h2 id="tokens-heading">디자인 토큰</h2>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">토큰</th>
            <th scope="col">기본값</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="typo_code">--grid-columns</code></td>
            <td>12</td>
            <td>기본 열 수</td>
          </tr>
          <tr>
            <td><code class="typo_code">--grid-gap</code></td>
            <td><code class="typo_code">var(--space-md)</code></td>
            <td>기본 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--grid-gap-sm</code> · <code class="typo_code">--grid-gap-lg</code></td>
            <td><code class="typo_code">var(--space-sm)</code> · <code class="typo_code">var(--space-lg)</code></td>
            <td>간격 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">--grid-auto-min</code></td>
            <td>10rem</td>
            <td>auto-fit · auto-fill 최소 열 너비</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=Q(K),P=R(K),V={title:"Components/레이아웃/Grid",id:"components-grid",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 .grid에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다."}}}},n={name:"부모 클래스로 제어",render:()=>d(e[0]),parameters:{docs:{...s(e[0].previewHtml).docs,description:{story:e[0].description}}}},i={name:"균등 열",render:()=>d(e[1]),parameters:{docs:{...s(e[1].previewHtml).docs,description:{story:e[1].description}}}},o={name:"비율 열",render:()=>d(e[2]),parameters:{docs:{...s(e[2].previewHtml).docs,description:{story:e[2].description}}}},r={name:"자식 일괄 span (12열)",render:()=>d(e[3]),parameters:{docs:{...s(e[3].previewHtml).docs,description:{story:e[3].description}}}},c={name:"자식별 span (혼합 레이아웃)",render:()=>d(e[4]),parameters:{docs:{...s(e[4].previewHtml).docs,description:{story:e[4].description}}}},a={name:"간격",render:()=>d(e[5]),parameters:{docs:{...s(e[5].previewHtml).docs,description:{story:e[5].description}}}},t={name:"반응형 (부모)",render:()=>d(e[6]),parameters:{docs:{...s(e[6].previewHtml).docs,description:{story:e[6].description}}}},l={name:"자동 배치",render:()=>d(e[7]),parameters:{docs:{...s(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"클래스 · 속성",tags:["!dev"],render:()=>d(P[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스입니다."}}}},m={name:"디자인 토큰",tags:["!dev"],render:()=>d(P[1]),parameters:{docs:{source:{code:null},description:{story:"Grid 열·간격에 사용하는 CSS 변수입니다."}}}};var g,v,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '부모 클래스로 제어',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var u,C,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '균등 열',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(h=(C=i.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var y,D,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '비율 열',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,S,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '자식 일괄 span (12열)',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,H,f;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '자식별 span (혼합 레이아웃)',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(f=(H=c.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var k,G,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '간격',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(x=(G=a.parameters)==null?void 0:G.docs)==null?void 0:x.source}}};var E,T,F;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '반응형 (부모)',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(F=(T=t.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var O,q,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '자동 배치',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(L=(q=l.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var M,N,j;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스입니다.'
      }
    }
  }
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,I,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Grid 열·간격에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const W=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","ApiClasses","ApiTokens"];export{p as ApiClasses,m as ApiTokens,n as Demo0,i as Demo1,o as Demo2,r as Demo3,c as Demo4,a as Demo5,t as Demo6,l as Demo7,W as __namedExportsOrder,V as default};
