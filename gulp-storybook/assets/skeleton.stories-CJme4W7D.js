import{b as s,c as q,g as n,e as G}from"./gulp-demos-C1efgjoy.js";const j=`<!-- @meta
title: Skeleton | HTML Components
activeNav: skeleton
pageTitle: Skeleton
-->
<div class="page_intro">
  <h1>Skeleton</h1>
  <p class="lead">콘텐츠가 로드되기 전 레이아웃을 미리 보여 주는 Skeleton 컴포넌트입니다. 텍스트·아바타·이미지·버튼 형태와 조합 레이아웃을 지원하며 <code class="typo_code">role="status"</code> · <code class="typo_code">aria-busy</code> · <code class="typo_code">aria-label</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">skeleton</code>에 <code class="typo_code">skeleton_text</code> · <code class="typo_code">skeleton_title</code> 형태 클래스를 조합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div style="max-width: var(--input-max-width); width: 100%;">
      <div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
        <span class="skeleton skeleton_title" aria-hidden="true"></span>
        <span class="skeleton skeleton_text" aria-hidden="true"></span>
        <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
        <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="shape-heading">
  <div class="demo_section-header">
    <h2 id="shape-heading">형태</h2>
    <p>아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
      <div class="skeleton_row">
        <span class="skeleton skeleton_circle" aria-hidden="true"></span>
      </div>
    </div>

    <div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중" style="margin-top: var(--space-md);">
      <span class="skeleton skeleton_circle" aria-hidden="true"></span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">skeleton_sm</code> · <code class="typo_code">skeleton</code>(기본) · <code class="typo_code">skeleton_lg</code> 세 가지 스케일을 지원합니다. 그룹 루트에 지정하면 하위 형태에 일괄 적용됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div style="max-width: var(--input-max-width); width: 100%;">
      <div class="skeleton_group skeleton_sm" role="status" aria-live="polite" aria-busy="true" aria-label="Small 로딩">
        <span class="skeleton skeleton_title" aria-hidden="true"></span>
        <span class="skeleton skeleton_text" aria-hidden="true"></span>
      </div>

      <div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="기본 로딩" style="margin-top: var(--space-md);">
        <span class="skeleton skeleton_title" aria-hidden="true"></span>
        <span class="skeleton skeleton_text" aria-hidden="true"></span>
      </div>

      <div class="skeleton_group skeleton_lg" role="status" aria-live="polite" aria-busy="true" aria-label="Large 로딩" style="margin-top: var(--space-md);">
        <span class="skeleton skeleton_title" aria-hidden="true"></span>
        <span class="skeleton skeleton_text" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="row-heading">
  <div class="demo_section-header">
    <h2 id="row-heading">아바타 + 텍스트</h2>
    <p><code class="typo_code">skeleton_row</code> · <code class="typo_code">skeleton_row-body</code>로 목록·피드 항목 레이아웃을 구성합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div style="max-width: var(--input-max-width); width: 100%;">
      <div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="목록 로딩 중">
        <div class="skeleton_row">
          <span class="skeleton skeleton_circle" aria-hidden="true"></span>
          <div class="skeleton_row-body">
            <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
            <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
          </div>
        </div>
        <div class="skeleton_row">
          <span class="skeleton skeleton_circle" aria-hidden="true"></span>
          <div class="skeleton_row-body">
            <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
            <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
          </div>
        </div>
        <div class="skeleton_row">
          <span class="skeleton skeleton_circle" aria-hidden="true"></span>
          <div class="skeleton_row-body">
            <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
            <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="card-heading">
  <div class="demo_section-header">
    <h2 id="card-heading">카드</h2>
    <p>카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <article class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
      <div class="card_body">
        <div class="skeleton_group">
          <span class="skeleton skeleton_image" aria-hidden="true"></span>
          <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true"></span>
          <span class="skeleton skeleton_text" aria-hidden="true"></span>
          <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
          <div class="skeleton_row" style="margin-top: var(--space-xs);">
            <span class="skeleton skeleton_button" aria-hidden="true"></span>
            <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;"></span>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="static-heading">
  <div class="demo_section-header">
    <h2 id="static-heading">정적</h2>
    <p><code class="typo_code">skeleton_static</code>을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. <code class="typo_code">prefers-reduced-motion</code> 환경에서도 애니메이션이 비활성화됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div style="max-width: var(--input-max-width); width: 100%;">
      <div class="skeleton_group skeleton_static" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
        <span class="skeleton skeleton_static skeleton_title" aria-hidden="true"></span>
        <span class="skeleton skeleton_static skeleton_text" aria-hidden="true"></span>
        <span class="skeleton skeleton_static skeleton_text skeleton_w-md" aria-hidden="true"></span>
        <span class="skeleton skeleton_static skeleton_text skeleton_w-sm" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>스켈레톤 그룹에 <code class="typo_code">role="status"</code>와 <code class="typo_code">aria-busy="true"</code>를 지정하고, 장식용 막대에는 <code class="typo_code">aria-hidden="true"</code>를 추가합니다. 실제 콘텐츠가 로드되면 스켈레톤을 제거하고 <code class="typo_code">aria-busy="false"</code>로 변경합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;!-- 문단 --&gt;
&lt;div class="skeleton_group" role="status"
  aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중"&gt;
  &lt;span class="skeleton skeleton_title" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;span class="skeleton skeleton_text" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"&gt;&lt;/span&gt;
&lt;/div&gt;

&lt;!-- 아바타 + 텍스트 행 --&gt;
&lt;div class="skeleton_row"&gt;
  &lt;span class="skeleton skeleton_circle" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;div class="skeleton_row-body"&gt;
    &lt;span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="api-heading">
  <h2 id="api-heading">클래스 · 속성</h2>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code class="typo_code">skeleton · skeleton_text · skeleton_title · skeleton_circle</code></td><td>막대·제목·원형</td></tr>
          <tr><td><code class="typo_code">skeleton_button · skeleton_image · skeleton_block</code></td><td>버튼·이미지·블록 형태</td></tr>
          <tr><td><code class="typo_code">skeleton_w-sm · skeleton_w-md · skeleton_w-lg</code></td><td>줄 너비</td></tr>
          <tr><td><code class="typo_code">skeleton_group · skeleton_row · skeleton_row-body</code></td><td>레이아웃</td></tr>
          <tr><td><code class="typo_code">skeleton_static · skeleton_sm · skeleton_lg</code></td><td>애니메이션·크기</td></tr>
          <tr><td><code class="typo_code">role="status"</code> · <code class="typo_code">aria-busy</code> · <code class="typo_code">aria-label</code></td><td>접근성</td></tr>
        </tbody>
      </table>
    </div>

    <p class="form_field-hint" style="margin-top: var(--space-md);">전체 영역 스피너·오버레이는 <a href="spin.html">Spin</a> 컴포넌트를, 빈 상태 UI는 Empty 컴포넌트를 사용하세요. Skeleton은 실제 콘텐츠 레이아웃을 미리 보여 줄 때 적합합니다.</p>
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
          <tr><td><code class="typo_code">--skeleton-bg</code> · <code class="typo_code">--skeleton-shine</code></td><td>—</td><td>배경·쉬머</td></tr>
          <tr><td><code class="typo_code">--skeleton-text-height</code> · <code class="typo_code">--skeleton-title-height</code></td><td>0.875rem · 1.125rem</td><td>줄 높이</td></tr>
          <tr><td><code class="typo_code">--skeleton-avatar-size</code> · <code class="typo_code">--skeleton-gap</code> · <code class="typo_code">--skeleton-duration</code></td><td>—</td><td>아바타·간격·주기</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=G(j),u=q(j),K={title:"Components/피드백/Skeleton",id:"components-skeleton",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'콘텐츠가 로드되기 전 레이아웃을 미리 보여 주는 Skeleton 컴포넌트입니다. 텍스트·아바타·이미지·버튼 형태와 조합 레이아웃을 지원하며 role="status" · aria-busy · aria-label로 접근성을 보장합니다.'}}}},t={name:"기본",render:()=>s(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},o={name:"형태",render:()=>s(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},a={name:"크기",render:()=>s(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},d={name:"아바타 + 텍스트",render:()=>s(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"카드",render:()=>s(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"정적",render:()=>s(e[5]),parameters:{docs:{...n(e[5].previewHtml).docs,description:{story:e[5].description}}}},l={name:"마크업",tags:["!dev"],render:()=>s(u[0]),parameters:{docs:{source:{code:null},description:{story:u[0].description}}}},c={name:"클래스 · 속성",tags:["!dev"],render:()=>s(u[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},p={name:"디자인 토큰",tags:["!dev"],render:()=>s(u[2]),parameters:{docs:{source:{code:null},description:{story:"Skeleton 크기·간격·애니메이션에 사용하는 CSS 변수입니다."}}}};var m,_,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(_=t.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var v,h,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '형태',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,w,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,D,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '아바타 + 텍스트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(x=(D=d.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var S,B,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '카드',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(B=r.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var H,E,f;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '정적',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,M,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '마크업',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: apis[0].description
      }
    }
  }
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,z,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다.'
      }
    }
  }
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var I,N,U;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Skeleton 크기·간격·애니메이션에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(U=(N=p.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const P=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","ApiMarkup","ApiClasses","ApiTokens"];export{c as ApiClasses,l as ApiMarkup,p as ApiTokens,t as Demo0,o as Demo1,a as Demo2,d as Demo3,r as Demo4,i as Demo5,P as __namedExportsOrder,K as default};
