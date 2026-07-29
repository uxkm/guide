import{b as t,c as N,g as n,e as q}from"./gulp-demos-C1efgjoy.js";const G=`<!-- @meta
title: Empty | HTML Components
activeNav: empty
pageTitle: Empty
-->
<div class="page_intro">
  <h1>Empty</h1>
  <p class="lead">데이터가 없거나 검색 결과가 없을 때 빈 상태를 안내하는 Empty 컴포넌트입니다. 기본 아이콘·설명·액션 버튼 조합을 지원하며 <code class="typo_code">role="status"</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">empty_image</code> · <code class="typo_code">empty_desc</code>로 아이콘과 설명을 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="empty" role="status">
      <div class="empty_image" aria-hidden="true">
        <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"/>
          <path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="empty_desc">데이터가 없습니다</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="footer-heading">
  <div class="demo_section-header">
    <h2 id="footer-heading">액션</h2>
    <p><code class="typo_code">empty_footer</code>에 버튼·링크를 배치해 다음 행동을 유도합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="empty" role="status">
      <div class="empty_image" aria-hidden="true">
        <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"/>
          <path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="empty_desc">등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.</p>
      <div class="empty_footer">
        <button type="button" class="btn btn_filled color_primary btn_sm">
          <span class="btn_label">프로젝트 만들기</span>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="custom-heading">
  <div class="demo_section-header">
    <h2 id="custom-heading">커스텀 이미지</h2>
    <p><code class="typo_code">empty_image</code>에 SVG·img를 자유롭게 넣을 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="empty" role="status">
      <div class="empty_image" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7"/>
          <path d="m20 20-3.5-3.5"/>
          <path d="M8 11h6"/>
        </svg>
      </div>
      <p class="empty_desc">검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">empty_sm</code> · <code class="typo_code">empty</code>(기본) · <code class="typo_code">empty_lg</code> 세 가지 스케일을 지원합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="empty empty_sm" role="status">
      <div class="empty_image" aria-hidden="true">
        <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"/>
          <path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="empty_desc">Small</p>
    </div>

    <div class="empty" role="status" style="margin-top: var(--space-md);">
      <div class="empty_image" aria-hidden="true">
        <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"/>
          <path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="empty_desc">Medium (기본)</p>
    </div>

    <div class="empty empty_lg" role="status" style="margin-top: var(--space-md);">
      <div class="empty_image" aria-hidden="true">
        <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"/>
          <path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="empty_desc">Large</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="simple-heading">
  <div class="demo_section-header">
    <h2 id="simple-heading">설명만</h2>
    <p><code class="typo_code">empty_simple</code>은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="empty empty_simple empty_sm" role="status">
      <p class="empty_desc">일정 없음</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="block-heading">
  <div class="demo_section-header">
    <h2 id="block-heading">블록 · 컨테이너</h2>
    <p><code class="typo_code">empty_block</code>은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="card card_shadow" style="max-width: var(--input-max-width); width: 100%;">
      <div class="card_header">
        <h3 class="card_title">알림 목록</h3>
      </div>
      <div class="card_body">
        <div class="empty empty_block" role="status">
          <div class="empty_image" aria-hidden="true">
            <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
              <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12"/>
              <path d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="empty_desc">새 알림이 없습니다</p>
        </div>
      </div>
    </div>

    <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
      <table class="table table_bordered">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">상태</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="padding: 0; border: none;">
              <div class="empty empty_block empty_simple empty_sm" role="status">
                <p class="empty_desc">표시할 항목이 없습니다</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>빈 상태 영역에 <code class="typo_code">role="status"</code>를 지정하고, 장식용 아이콘에는 <code class="typo_code">aria-hidden="true"</code>를 사용합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;!-- 기본 --&gt;
&lt;div class="empty" role="status"&gt;
  &lt;div class="empty_image" aria-hidden="true"&gt;
    &lt;!-- SVG 또는 img --&gt;
  &lt;/div&gt;
  &lt;p class="empty_desc"&gt;데이터가 없습니다&lt;/p&gt;
&lt;/div&gt;

&lt;!-- 액션 버튼 --&gt;
&lt;div class="empty" role="status"&gt;
  &lt;div class="empty_image" aria-hidden="true"&gt;…&lt;/div&gt;
  &lt;p class="empty_desc"&gt;등록된 프로젝트가 없습니다.&lt;/p&gt;
  &lt;div class="empty_footer"&gt;
    &lt;button type="button"
      class="btn btn_filled color_primary btn_sm"&gt;
      &lt;span class="btn_label"&gt;프로젝트 만들기&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 테이블·목록 셀 — 아이콘 생략 --&gt;
&lt;div class="empty empty_simple empty_sm empty_block" role="status"&gt;
  &lt;p class="empty_desc"&gt;항목 없음&lt;/p&gt;
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
          <tr><td><code class="typo_code">empty · empty_image · empty_desc · empty_footer</code></td><td>루트·이미지·설명·푸터</td></tr>
          <tr><td><code class="typo_code">empty_sm · empty_lg · empty_simple · empty_block</code></td><td>크기·변형</td></tr>
          <tr><td><code class="typo_code">role="status"</code></td><td>빈 상태 시맨틱</td></tr>
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
          <tr><td><code class="typo_code">--empty-gap</code> · <code class="typo_code">--empty-padding-y</code> · <code class="typo_code">--empty-padding-x</code></td><td>—</td><td>간격·패딩</td></tr>
          <tr><td><code class="typo_code">--empty-image-size</code> · <code class="typo_code">--empty-image-size-sm</code> · <code class="typo_code">--empty-image-size-lg</code></td><td>4rem · 3rem · 5rem</td><td>아이콘 크기</td></tr>
          <tr><td><code class="typo_code">--empty-desc-size</code> · <code class="typo_code">--empty-desc-max-width</code></td><td><code class="typo_code">var(--text-size-sm)</code> · 20rem</td><td>설명 타이포</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=q(G),m=N(G),J={title:"Components/피드백/Empty",id:"components-empty",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'데이터가 없거나 검색 결과가 없을 때 빈 상태를 안내하는 Empty 컴포넌트입니다. 기본 아이콘·설명·액션 버튼 조합을 지원하며 role="status"로 접근성을 보장합니다.'}}}},s={name:"기본",render:()=>t(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},o={name:"액션",render:()=>t(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},r={name:"커스텀 이미지",render:()=>t(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},d={name:"크기",render:()=>t(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},c={name:"설명만",render:()=>t(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},a={name:"블록 · 컨테이너",render:()=>t(e[5]),parameters:{docs:{...n(e[5].previewHtml).docs,description:{story:e[5].description}}}},i={name:"마크업",tags:["!dev"],render:()=>t(m[0]),parameters:{docs:{source:{code:null},description:{story:m[0].description}}}},p={name:"클래스 · 속성",tags:["!dev"],render:()=>t(m[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},l={name:"디자인 토큰",tags:["!dev"],render:()=>t(m[2]),parameters:{docs:{source:{code:null},description:{story:"Empty 간격·아이콘·설명에 사용하는 CSS 변수입니다."}}}};var u,v,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,_,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '액션',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var C,b,k;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '커스텀 이미지',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,D,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(x=(D=d.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var B,A,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '설명만',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var M,f,H;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '블록 · 컨테이너',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(H=(f=a.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var E,V,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var L,z,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(z=p.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var Z,O,F;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Empty 간격·아이콘·설명에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(F=(O=l.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const K=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","ApiMarkup","ApiClasses","ApiTokens"];export{p as ApiClasses,i as ApiMarkup,l as ApiTokens,s as Demo0,o as Demo1,r as Demo2,d as Demo3,c as Demo4,a as Demo5,K as __namedExportsOrder,J as default};
