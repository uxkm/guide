import{b as r,c as G,g as a,e as I}from"./gulp-demos-C1efgjoy.js";const q=`<!-- @meta
title: Breadcrumb | HTML Components
activeNav: breadcrumb
pageTitle: Breadcrumb
-->
<div class="page_intro">
  <h1>Breadcrumb</h1>
  <p class="lead">현재 페이지의 위치를 계층 경로로 표시하는 내비게이션 컴포넌트입니다. <code class="typo_code">nav</code> · <code class="typo_code">ol</code> 시맨틱 구조와 <code class="typo_code">aria-current="page"</code>로 접근성을 지원합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="breadcrumb" aria-label="경로">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">컴포넌트</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Breadcrumb</span>
        </li>
      </ol>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="separator-heading">
  <div class="demo_section-header">
    <h2 id="separator-heading">구분자</h2>
    <p><code class="typo_code">breadcrumb_sep-slash</code> · <code class="typo_code">breadcrumb_sep-dot</code>으로 구분자 스타일을 변경합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="breadcrumb" aria-label="경로 — chevron">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">가이드</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Chevron</span>
        </li>
      </ol>
    </nav>

    <nav class="breadcrumb breadcrumb_sep-slash" aria-label="경로 — slash">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">가이드</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Slash</span>
        </li>
      </ol>
    </nav>

    <nav class="breadcrumb breadcrumb_sep-dot" aria-label="경로 — dot">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">가이드</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Dot</span>
        </li>
      </ol>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">홈 아이콘</h2>
    <p><code class="typo_code">breadcrumb_link-icon</code>으로 아이콘만 있는 첫 항목을 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="breadcrumb" aria-label="경로">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link breadcrumb_link-icon" aria-label="홈">
            <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/>
            </svg>
          </a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">설정</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">계정</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">프로필</span>
        </li>
      </ol>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">breadcrumb_sm</code> · <code class="typo_code">breadcrumb_lg</code>로 텍스트 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="breadcrumb breadcrumb_sm" aria-label="경로 — small">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">문서</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Small</span>
        </li>
      </ol>
    </nav>

    <nav class="breadcrumb" aria-label="경로 — medium">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">문서</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Medium</span>
        </li>
      </ol>
    </nav>

    <nav class="breadcrumb breadcrumb_lg" aria-label="경로 — large">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">문서</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Large</span>
        </li>
      </ol>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="ellipsis-heading">
  <div class="demo_section-header">
    <h2 id="ellipsis-heading">경로 생략</h2>
    <p>긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="breadcrumb" aria-label="경로">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link breadcrumb_link-icon" aria-label="홈">
            <svg class="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/>
            </svg>
          </a>
        </li>
        <li class="breadcrumb_item">
          <button type="button" class="breadcrumb_ellipsis" aria-label="숨겨진 경로 보기" aria-haspopup="menu" aria-expanded="false">…</button>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">컴포넌트</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">Breadcrumb</span>
        </li>
      </ol>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>비활성 링크는 <code class="typo_code">is-disabled</code>를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="breadcrumb" aria-label="경로 — 비활성">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <span class="breadcrumb_link is-disabled" aria-disabled="true">삭제된 페이지</span>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">현재 페이지</span>
        </li>
      </ol>
    </nav>

    <nav class="breadcrumb breadcrumb_sep-slash" aria-label="경로 — 긴 레이블">
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">홈</a>
        </li>
        <li class="breadcrumb_item">
          <a href="#" class="breadcrumb_link">프로젝트 관리 및 협업 도구 설정</a>
        </li>
        <li class="breadcrumb_item is-current" aria-current="page">
          <span class="breadcrumb_current">사용자 권한 및 역할 기반 접근 제어</span>
        </li>
      </ol>
    </nav>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>현재 페이지 항목에는 <code class="typo_code">is-current</code>와 <code class="typo_code">aria-current="page"</code>를 함께 지정합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;nav class="breadcrumb" aria-label="경로"&gt;
  &lt;ol class="breadcrumb_list"&gt;
    &lt;li class="breadcrumb_item"&gt;
      &lt;a href="#" class="breadcrumb_link"&gt;홈&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="breadcrumb_item"&gt;
      &lt;a href="#" class="breadcrumb_link"&gt;컴포넌트&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="breadcrumb_item is-current" aria-current="page"&gt;
      &lt;span class="breadcrumb_current"&gt;Breadcrumb&lt;/span&gt;
    &lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>
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
          <tr><td><code class="typo_code">breadcrumb · breadcrumb_list · breadcrumb_item</code></td><td>루트·목록·항목</td></tr>
          <tr><td><code class="typo_code">breadcrumb_link · breadcrumb_current · breadcrumb_sep</code></td><td>링크·현재·구분자</td></tr>
          <tr><td><code class="typo_code">breadcrumb_link-icon · breadcrumb_icon · breadcrumb_ellipsis</code></td><td>아이콘·생략 버튼</td></tr>
          <tr><td><code class="typo_code">breadcrumb_sep-slash · breadcrumb_sep-dot</code></td><td>구분자 스타일</td></tr>
          <tr><td><code class="typo_code">breadcrumb_sm · breadcrumb_lg</code></td><td>크기 변형</td></tr>
          <tr><td><code class="typo_code">is-current · is-disabled</code></td><td>현재·비활성</td></tr>
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
          <tr><td><code class="typo_code">--breadcrumb-gap</code> · <code class="typo_code">--breadcrumb-font-size</code></td><td>—</td><td>간격·글자 크기</td></tr>
          <tr><td><code class="typo_code">--breadcrumb-separator-color</code></td><td>—</td><td>구분자 색</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=I(q),b=G(q),K={title:"Components/네비게이션/Breadcrumb",id:"components-breadcrumb",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'현재 페이지의 위치를 계층 경로로 표시하는 내비게이션 컴포넌트입니다. nav · ol 시맨틱 구조와 aria-current="page"로 접근성을 지원합니다.'}}}},n={name:"기본",render:()=>r(e[0]),parameters:{docs:{...a(e[0].previewHtml).docs,description:{story:e[0].description}}}},s={name:"구분자",render:()=>r(e[1]),parameters:{docs:{...a(e[1].previewHtml).docs,description:{story:e[1].description}}}},c={name:"홈 아이콘",render:()=>r(e[2]),parameters:{docs:{...a(e[2].previewHtml).docs,description:{story:e[2].description}}}},d={name:"크기",render:()=>r(e[3]),parameters:{docs:{...a(e[3].previewHtml).docs,description:{story:e[3].description}}}},i={name:"경로 생략",render:()=>r(e[4]),parameters:{docs:{...a(e[4].previewHtml).docs,description:{story:e[4].description}}}},t={name:"상태",render:()=>r(e[5]),parameters:{docs:{...a(e[5].previewHtml).docs,description:{story:e[5].description}}}},o={name:"마크업",tags:["!dev"],render:()=>r(b[0]),parameters:{docs:{source:{code:null},description:{story:b[0].description}}}},l={name:"클래스 · 속성",tags:["!dev"],render:()=>r(b[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},m={name:"디자인 토큰",tags:["!dev"],render:()=>r(b[2]),parameters:{docs:{source:{code:null},description:{story:"Breadcrumb 간격·구분자·타이포에 사용하는 CSS 변수입니다."}}}};var u,p,_;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(p=n.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var v,h,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '구분자',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,y,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '홈 아이콘',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var k,B,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(B=d.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var f,S,A;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '경로 생략',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var H,x,M;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(M=(x=t.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,L,T;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var z,O,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var F,N,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Breadcrumb 간격·구분자·타이포에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const P=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","ApiMarkup","ApiClasses","ApiTokens"];export{l as ApiClasses,o as ApiMarkup,m as ApiTokens,n as Demo0,s as Demo1,c as Demo2,d as Demo3,i as Demo4,t as Demo5,P as __namedExportsOrder,K as default};
