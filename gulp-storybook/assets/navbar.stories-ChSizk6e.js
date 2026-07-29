import{b as n,c as V,g as e,e as W}from"./gulp-demos-C1efgjoy.js";const R=`<!-- @meta
title: Navbar | HTML Components
activeNav: navbar
pageTitle: Navbar
-->
<div class="page_intro">
  <h1>Navbar</h1>
  <p class="lead">사이트 상단 내비게이션 바입니다. 브랜드·메뉴·검색·액션 버튼을 한 줄에 배치하며, 좁은 화면에서는 토글로 메뉴를 접습니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">navbar_item</code> · <code class="typo_code">navbar_link</code>으로 메뉴를 구성합니다. <code class="typo_code">is-active</code>와 <code class="typo_code">aria-current="page"</code>로 현재 페이지를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">UXKM</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item">
                  <a href="#" class="navbar_link is-active" aria-current="page">홈</a>
                </li>
                <li class="navbar_item">
                  <a href="#" class="navbar_link">컴포넌트</a>
                </li>
                <li class="navbar_item">
                  <a href="#" class="navbar_link">토큰</a>
                </li>
                <li class="navbar_item">
                  <a href="#" class="navbar_link">접근성</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="brand-heading">
  <div class="demo_section-header">
    <h2 id="brand-heading">브랜드</h2>
    <p><code class="typo_code">navbar_brand</code>에 <code class="typo_code">navbar_brand-icon</code>을 함께 배치할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">
            <svg class="navbar_brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M9 3v18"/>
            </svg>
            HTML Components
          </a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">가이드</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">리소스</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="actions-heading">
  <div class="demo_section-header">
    <h2 id="actions-heading">액션 영역</h2>
    <p>navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Dashboard</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">개요</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">분석</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">설정</a></li>
              </ul>
            </nav>
            <div class="navbar_actions">
              <button type="button" class="btn btn_ghost btn_sm" aria-label="알림">
                <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </button>
              <button type="button" class="btn btn_outline btn_sm"><span class="btn_label">로그인</span></button>
              <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">가입</span></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="search-heading">
  <div class="demo_section-header">
    <h2 id="search-heading">검색</h2>
    <p>navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Docs</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link">시작하기</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">컴포넌트</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">패턴</a></li>
              </ul>
            </nav>
            <div class="navbar_search">
              <input type="search" id="navbar-search-demo" class="input input_sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색">
            </div>
            <div class="navbar_actions">
              <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">GitHub</span></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>navbar_sm · navbar_lg로 높이를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar navbar_sm">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Small</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">메뉴</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>

    <div class="navbar_demo">
      <header class="navbar">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Default</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">메뉴</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>

    <div class="navbar_demo">
      <header class="navbar navbar_lg">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Large</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">메뉴</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="variant-heading">
  <div class="demo_section-header">
    <h2 id="variant-heading">스타일 변형</h2>
    <p>navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar navbar_borderless">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Borderless</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">홈</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">소개</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>

    <div class="navbar_demo">
      <header class="navbar navbar_dark">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Dark Surface</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">홈</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">소개</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>

    <div class="navbar_demo navbar_demo-scroll">
      <header class="navbar navbar_sticky">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Sticky</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">고정</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div style="padding: var(--space-xl); color: var(--color-text-muted); font-size: var(--text-size-sm);">
        <p style="margin: 0 0 var(--space-md);">스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
        <p style="margin: 0;">콘텐츠 영역 예시입니다.</p>
        <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
        <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="badge-heading">
  <div class="demo_section-header">
    <h2 id="badge-heading">배지</h2>
    <p>메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar">
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Inbox</a>
          <div class="navbar_collapse">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item">
                  <a href="#" class="navbar_link is-active" aria-current="page">받은편지함</a>
                </li>
                <li class="navbar_item">
                  <a href="#" class="navbar_link">
                    알림
                    <span class="badge color_danger">3</span>
                  </a>
                </li>
                <li class="navbar_item">
                  <a href="#" class="navbar_link">보관함</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="responsive-heading">
  <div class="demo_section-header">
    <h2 id="responsive-heading">반응형</h2>
    <p>768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="navbar_demo">
      <header class="navbar" data-navbar>
        <div class="navbar_container">
          <a href="#" class="navbar_brand">Mobile</a>
          <button type="button" class="navbar_toggle" data-navbar-toggle aria-expanded="false" aria-controls="navbar-responsive-demo" aria-label="메뉴 열기">
            <svg class="navbar_toggle-icon-open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg class="navbar_toggle-icon-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          <div class="navbar_collapse" id="navbar-responsive-demo">
            <nav class="navbar_nav" aria-label="주요 메뉴">
              <ul class="navbar_list">
                <li class="navbar_item"><a href="#" class="navbar_link is-active" aria-current="page">홈</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">제품</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">가격</a></li>
                <li class="navbar_item"><a href="#" class="navbar_link">문의</a></li>
              </ul>
            </nav>
            <div class="navbar_actions">
              <button type="button" class="btn btn_outline btn_sm"><span class="btn_label">로그인</span></button>
              <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">시작하기</span></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>토글에는 <code class="typo_code">aria-expanded</code> · <code class="typo_code">aria-controls</code> · <code class="typo_code">aria-label</code>을 지정하고, 현재 페이지 링크에는 <code class="typo_code">is-active</code>와 <code class="typo_code">aria-current="page"</code>를 함께 사용합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;header class="navbar navbar_sticky" data-navbar&gt;
  &lt;div class="navbar_container"&gt;
    &lt;a href="#" class="navbar_brand"&gt;Brand&lt;/a&gt;
    &lt;button type="button" class="navbar_toggle" data-navbar-toggle
      aria-expanded="false" aria-controls="main-nav" aria-label="메뉴 열기"&gt;…&lt;/button&gt;
    &lt;div class="navbar_collapse" id="main-nav"&gt;
      &lt;nav class="navbar_nav" aria-label="주요 메뉴"&gt;
        &lt;ul class="navbar_list"&gt;
          &lt;li class="navbar_item"&gt;
            &lt;a href="#" class="navbar_link is-active" aria-current="page"&gt;홈&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
      &lt;div class="navbar_search"&gt;&lt;input class="input input_sm" type="search"&gt;&lt;/div&gt;
      &lt;div class="navbar_actions"&gt;…&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
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
          <tr><td><code class="typo_code">navbar · navbar_container · navbar_brand</code></td><td>루트·컨테이너·브랜드</td></tr>
          <tr><td><code class="typo_code">navbar_toggle · navbar_collapse · navbar_nav · navbar_list</code></td><td>토글·접힘 영역·내비</td></tr>
          <tr><td><code class="typo_code">navbar_item · navbar_link</code></td><td>항목·링크 (<code class="typo_code">is-active</code>)</td></tr>
          <tr><td><code class="typo_code">navbar_search · navbar_actions</code></td><td>검색·액션 영역</td></tr>
          <tr><td><code class="typo_code">navbar_sm · navbar_lg · navbar_sticky · navbar_borderless · navbar_dark</code></td><td>크기·변형</td></tr>
          <tr><td><code class="typo_code">data-navbar · data-navbar-toggle</code></td><td>반응형 JS 연동</td></tr>
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
          <tr><td><code class="typo_code">--navbar-height</code> · <code class="typo_code">--navbar-height-sm</code> · <code class="typo_code">--navbar-height-lg</code></td><td>—</td><td>높이 변형</td></tr>
          <tr><td><code class="typo_code">--navbar-padding-x</code> · <code class="typo_code">--navbar-gap</code></td><td>—</td><td>패딩·간격</td></tr>
          <tr><td><code class="typo_code">--navbar-z-index</code></td><td>—</td><td>sticky 레이어</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,a=W(R),m=V(R),Z={title:"Components/네비게이션/Navbar",id:"components-navbar",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"사이트 상단 내비게이션 바입니다. 브랜드·메뉴·검색·액션 버튼을 한 줄에 배치하며, 좁은 화면에서는 토글로 메뉴를 접습니다."}}}},s={name:"기본",render:()=>n(a[0]),parameters:{docs:{...e(a[0].previewHtml).docs,description:{story:a[0].description}}}},r={name:"브랜드",render:()=>n(a[1]),parameters:{docs:{...e(a[1].previewHtml).docs,description:{story:a[1].description}}}},i={name:"액션 영역",render:()=>n(a[2]),parameters:{docs:{...e(a[2].previewHtml).docs,description:{story:a[2].description}}}},t={name:"검색",render:()=>n(a[3]),parameters:{docs:{...e(a[3].previewHtml).docs,description:{story:a[3].description}}}},c={name:"크기",render:()=>n(a[4]),parameters:{docs:{...e(a[4].previewHtml).docs,description:{story:a[4].description}}}},o={name:"스타일 변형",render:()=>n(a[5]),parameters:{docs:{...e(a[5].previewHtml).docs,description:{story:a[5].description}}}},d={name:"배지",render:()=>n(a[6]),parameters:{docs:{...e(a[6].previewHtml).docs,description:{story:a[6].description}}}},l={name:"반응형",render:()=>n(a[7]),parameters:{docs:{...e(a[7].previewHtml).docs,description:{story:a[7].description}}}},v={name:"마크업",tags:["!dev"],render:()=>n(m[0]),parameters:{docs:{source:{code:null},description:{story:m[0].description}}}},b={name:"클래스 · 속성",tags:["!dev"],render:()=>n(m[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},p={name:"디자인 토큰",tags:["!dev"],render:()=>n(m[2]),parameters:{docs:{source:{code:null},description:{story:"Navbar 높이·패딩·브랜드에 사용하는 CSS 변수입니다."}}}};var _,u,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '브랜드',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,f,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '액션 영역',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var w,B,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '검색',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var x,H,A;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(H=c.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var M,E,N;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '스타일 변형',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var T,z,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '배지',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,F,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '반응형',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var I,J,K;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,X,j;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(X=b.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var q,P,Q;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Navbar 높이·패딩·브랜드에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const $=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","ApiMarkup","ApiClasses","ApiTokens"];export{b as ApiClasses,v as ApiMarkup,p as ApiTokens,s as Demo0,r as Demo1,i as Demo2,t as Demo3,c as Demo4,o as Demo5,d as Demo6,l as Demo7,$ as __namedExportsOrder,Z as default};
