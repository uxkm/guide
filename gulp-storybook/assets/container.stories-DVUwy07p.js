import{b as n,g as a,e as k,c as E}from"./gulp-demos-C1efgjoy.js";const A=`<!-- @meta
title: Container | HTML Components
activeNav: container
pageTitle: Container
-->
<div class="page_intro">
  <h1>Container</h1>
  <p class="lead">콘텐츠의 최대 너비와 좌우 여백을 일관되게 제한하는 레이아웃 컨테이너입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="container">
      <div class="container_demo-fill">container — 기본 최대 너비</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="fluid-heading">
  <div class="demo_section-header">
    <h2 id="fluid-heading">Fluid</h2>
    <p>container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="container container_fluid">
      <div class="container_demo-fill">container container_fluid — 전체 너비</div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="container_demo-sizes">
      <div class="container container_sm">
        <div class="container_demo-fill">container_sm (36rem)</div>
      </div>
      <div class="container container_md">
        <div class="container_demo-fill">container_md (48rem)</div>
      </div>
      <div class="container container_lg">
        <div class="container_demo-fill">container_lg (64rem)</div>
      </div>
      <div class="container container_xl">
        <div class="container_demo-fill">container_xl (80rem)</div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="nested-heading">
  <div class="demo_section-header">
    <h2 id="nested-heading">중첩 사용</h2>
    <p>페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="container container_fluid">
      <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
      <div class="container container_md">
        <div class="container_demo-fill">안쪽 — md</div>
      </div>
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
            <td><code class="typo_code">container</code></td>
            <td>중앙 정렬·기본 max-width·좌우 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">container_fluid</code></td>
            <td>max-width 제한 해제</td>
          </tr>
          <tr>
            <td><code class="typo_code">container_sm</code> · <code class="typo_code">container_md</code> · <code class="typo_code">container_lg</code> · <code class="typo_code">container_xl</code></td>
            <td>고정 최대 너비 변형 (36 · 48 · 64 · 80rem)</td>
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
            <td><code class="typo_code">--container-max-width</code></td>
            <td>72rem</td>
            <td>기본 최대 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--container-max-width-sm</code></td>
            <td>36rem</td>
            <td>container_sm</td>
          </tr>
          <tr>
            <td><code class="typo_code">--container-max-width-md</code></td>
            <td>48rem</td>
            <td>container_md</td>
          </tr>
          <tr>
            <td><code class="typo_code">--container-max-width-lg</code></td>
            <td>64rem</td>
            <td>container_lg</td>
          </tr>
          <tr>
            <td><code class="typo_code">--container-max-width-xl</code></td>
            <td>80rem</td>
            <td>container_xl</td>
          </tr>
          <tr>
            <td><code class="typo_code">--container-padding-x</code></td>
            <td><code class="typo_code">var(--space-xl)</code></td>
            <td>좌우 패딩</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=k(A),H=E(A),O={title:"Components/레이아웃/Container",id:"components-container",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"콘텐츠의 최대 너비와 좌우 여백을 일관되게 제한하는 레이아웃 컨테이너입니다."}}}},o={name:"기본",render:()=>n(e[0]),parameters:{docs:{...a(e[0].previewHtml).docs,description:{story:e[0].description}}}},t={name:"Fluid",render:()=>n(e[1]),parameters:{docs:{...a(e[1].previewHtml).docs,description:{story:e[1].description}}}},d={name:"크기",render:()=>n(e[2]),parameters:{docs:{...a(e[2].previewHtml).docs,description:{story:e[2].description}}}},s={name:"중첩 사용",render:()=>n(e[3]),parameters:{docs:{...a(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"클래스 · 속성",tags:["!dev"],render:()=>n(H[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스입니다."}}}},c={name:"디자인 토큰",tags:["!dev"],render:()=>n(H[1]),parameters:{docs:{source:{code:null},description:{story:"Container 너비·패딩에 사용하는 CSS 변수입니다."}}}};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Fluid',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var _,C,h;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(h=(C=d.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '중첩 사용',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,D,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(D=r.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var S,B,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Container 너비·패딩에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(f=(B=c.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const F=["Demo0","Demo1","Demo2","Demo3","ApiClasses","ApiTokens"];export{r as ApiClasses,c as ApiTokens,o as Demo0,t as Demo1,d as Demo2,s as Demo3,F as __namedExportsOrder,O as default};
