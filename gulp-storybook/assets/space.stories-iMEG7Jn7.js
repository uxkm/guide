import{b as s,g as n,e as N,c as q}from"./gulp-demos-C1efgjoy.js";const M=`<!-- @meta
title: Space | HTML Components
activeNav: space
pageTitle: Space
-->
<div class="page_intro">
  <h1>Space</h1>
  <p class="lead">자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 유틸리티입니다. gap·방향·정렬·줄바꿈을 클래스로 조합합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="space">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="vertical-heading">
  <div class="demo_section-header">
    <h2 id="vertical-heading">세로</h2>
    <p>space_vertical로 세로 방향 배치를 지정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="space space_vertical">
      <div class="space_demo-box">항목 1</div>
      <div class="space_demo-box">항목 2</div>
      <div class="space_demo-box">항목 3</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="gap-heading">
  <div class="demo_section-header">
    <h2 id="gap-heading">간격</h2>
    <p>space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="space space_gap-xs">
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
      <div class="space_demo-box">xs</div>
    </div>
    <div class="space space_gap-sm">
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
      <div class="space_demo-box">sm</div>
    </div>
    <div class="space">
      <div class="space_demo-box">md (기본)</div>
      <div class="space_demo-box">md</div>
      <div class="space_demo-box">md</div>
    </div>
    <div class="space space_gap-lg">
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
      <div class="space_demo-box">lg</div>
    </div>
    <div class="space space_gap-xl">
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
      <div class="space_demo-box">xl</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="wrap-heading">
  <div class="demo_section-header">
    <h2 id="wrap-heading">줄바꿈</h2>
    <p>space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="space space_block space_wrap">
      <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
      <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="align-heading">
  <div class="demo_section-header">
    <h2 id="align-heading">정렬</h2>
    <p>space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="space space_block space_align-center" style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);">
      <div class="space_demo-box">align center</div>
      <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
      <div class="space_demo-box">align center</div>
    </div>
    <div class="space space_block space_justify-between" style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);">
      <div class="space_demo-box">justify between</div>
      <div class="space_demo-box">양 끝</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="combo-heading">
  <div class="demo_section-header">
    <h2 id="combo-heading">조합 예시</h2>
    <p>버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="space">
      <button type="button" class="btn btn_outlined">취소</button>
      <button type="button" class="btn btn_filled color_primary">저장</button>
      <span class="divider divider_vertical" aria-hidden="true"></span>
      <button type="button" class="btn btn_text">더보기</button>
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
            <td><code class="typo_code">space</code></td>
            <td>inline-flex 루트, 기본 가로 배치</td>
          </tr>
          <tr>
            <td><code class="typo_code">space_vertical</code></td>
            <td>세로 방향</td>
          </tr>
          <tr>
            <td><code class="typo_code">space_wrap</code></td>
            <td>줄바꿈</td>
          </tr>
          <tr>
            <td><code class="typo_code">space_block</code></td>
            <td>display flex + width 100%</td>
          </tr>
          <tr>
            <td><code class="typo_code">space_gap-xs</code> · <code class="typo_code">space_gap-sm</code> · <code class="typo_code">space_gap-lg</code> · <code class="typo_code">space_gap-xl</code></td>
            <td>간격 변형 (md는 기본)</td>
          </tr>
          <tr>
            <td><code class="typo_code">space_align-start</code> · <code class="typo_code">space_align-center</code> · <code class="typo_code">space_align-end</code> · <code class="typo_code">space_align-baseline</code> · <code class="typo_code">space_align-stretch</code></td>
            <td>교차축 정렬</td>
          </tr>
          <tr>
            <td><code class="typo_code">space_justify-start</code> · <code class="typo_code">space_justify-center</code> · <code class="typo_code">space_justify-end</code> · <code class="typo_code">space_justify-between</code></td>
            <td>주축 정렬</td>
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
            <td><code class="typo_code">--space-gap</code></td>
            <td><code class="typo_code">var(--space-md)</code></td>
            <td>기본 자식 간 간격 (gap md)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=N(M),F=q(M),G={title:"Components/레이아웃/Space",id:"components-space",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 유틸리티입니다. gap·방향·정렬·줄바꿈을 클래스로 조합합니다."}}}},d={name:"기본",render:()=>s(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},a={name:"세로",render:()=>s(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},c={name:"간격",render:()=>s(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},o={name:"줄바꿈",render:()=>s(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},t={name:"정렬",render:()=>s(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"조합 예시",render:()=>s(e[5]),parameters:{docs:{...n(e[5].previewHtml).docs,description:{story:e[5].description}}}},r={name:"클래스 · 속성",tags:["!dev"],render:()=>s(F[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스입니다."}}}},p={name:"디자인 토큰",tags:["!dev"],render:()=>s(F[1]),parameters:{docs:{source:{code:null},description:{story:"Space 자식 간격에 사용하는 CSS 변수입니다."}}}};var l,m,v;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(v=(m=d.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,_,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '세로',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var g,y,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '간격',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var C,x,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '줄바꿈',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var D,S,A;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '정렬',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(S=t.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var B,f,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var H,j,T;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(j=r.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,E,L;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Space 자식 간격에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const I=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","ApiClasses","ApiTokens"];export{r as ApiClasses,p as ApiTokens,d as Demo0,a as Demo1,c as Demo2,o as Demo3,t as Demo4,i as Demo5,I as __namedExportsOrder,G as default};
