import{b as d,g as n,e as L,c as M}from"./gulp-demos-C1efgjoy.js";const T=`<!-- @meta
title: Divider | HTML Components
activeNav: divider
pageTitle: Divider
-->
<div class="page_intro">
  <h1>Divider</h1>
  <p class="lead">콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p>위 콘텐츠</p>
    <hr class="divider" />
    <p>아래 콘텐츠</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="dashed-heading">
  <div class="demo_section-header">
    <h2 id="dashed-heading">점선</h2>
    <p>divider_dashed로 점선 스타일을 적용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p>위 콘텐츠</p>
    <hr class="divider divider_dashed" />
    <p>아래 콘텐츠</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="text-heading">
  <div class="demo_section-header">
    <h2 id="text-heading">텍스트 레이블</h2>
    <p>요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="divider">섹션 제목</div>
    <div class="divider divider_plain">보조 설명</div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="orient-heading">
  <div class="demo_section-header">
    <h2 id="orient-heading">레이블 정렬</h2>
    <p>divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="divider divider_orient-left">왼쪽</div>
    <div class="divider">가운데</div>
    <div class="divider divider_orient-right">오른쪽</div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="vertical-heading">
  <div class="demo_section-header">
    <h2 id="vertical-heading">세로</h2>
    <p>divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="space">
      <span>항목 A</span>
      <span class="divider divider_vertical" aria-hidden="true"></span>
      <span>항목 B</span>
      <span class="divider divider_vertical divider_dashed" aria-hidden="true"></span>
      <span>항목 C</span>
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
            <td><code class="typo_code">divider</code></td>
            <td>가로·세로 구분선 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">divider_dashed</code></td>
            <td>점선 스타일</td>
          </tr>
          <tr>
            <td><code class="typo_code">divider_plain</code></td>
            <td>보조 톤 레이블</td>
          </tr>
          <tr>
            <td><code class="typo_code">divider_vertical</code></td>
            <td>세로 구분선 (인라인·flex 행)</td>
          </tr>
          <tr>
            <td><code class="typo_code">divider_orient-left</code> · <code class="typo_code">divider_orient-right</code></td>
            <td>레이블 좌·우 정렬</td>
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
            <td><code class="typo_code">--divider-color</code></td>
            <td><code class="typo_code">var(--color-border-subtle)</code></td>
            <td>선 색상</td>
          </tr>
          <tr>
            <td><code class="typo_code">--divider-thickness</code></td>
            <td>1px</td>
            <td>선 두께</td>
          </tr>
          <tr>
            <td><code class="typo_code">--divider-margin-y</code></td>
            <td><code class="typo_code">var(--space-md)</code></td>
            <td>가로 구분선 상하 여백</td>
          </tr>
          <tr>
            <td><code class="typo_code">--divider-margin-x</code></td>
            <td><code class="typo_code">var(--space-sm)</code></td>
            <td>세로 구분선 좌우 여백</td>
          </tr>
          <tr>
            <td><code class="typo_code">--divider-text-gap</code></td>
            <td><code class="typo_code">var(--space-md)</code></td>
            <td>레이블·선 사이 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--divider-orient-inset</code></td>
            <td>5%</td>
            <td>orient-left · orient-right 선 길이</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=L(T),O=M(T),N={title:"Components/레이아웃/Divider",id:"components-divider",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다."}}}},s={name:"기본",render:()=>d(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},r={name:"점선",render:()=>d(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},o={name:"텍스트 레이블",render:()=>d(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},t={name:"레이블 정렬",render:()=>d(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},i={name:"세로",render:()=>d(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"클래스 · 속성",tags:["!dev"],render:()=>d(O[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스입니다."}}}},a={name:"디자인 토큰",tags:["!dev"],render:()=>d(O[1]),parameters:{docs:{source:{code:null},description:{story:"Divider 선·여백에 사용하는 CSS 변수입니다."}}}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var v,u,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '점선',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var _,C,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '텍스트 레이블',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var g,D,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '레이블 정렬',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(b=(D=t.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,B,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '세로',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var A,x,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(x=c.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var k,f,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Divider 선·여백에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(E=(f=a.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};const j=["Demo0","Demo1","Demo2","Demo3","Demo4","ApiClasses","ApiTokens"];export{c as ApiClasses,a as ApiTokens,s as Demo0,r as Demo1,o as Demo2,t as Demo3,i as Demo4,j as __namedExportsOrder,N as default};
