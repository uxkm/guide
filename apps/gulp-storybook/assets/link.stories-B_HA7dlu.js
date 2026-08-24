import{b as n,c as o,e as re,d as se}from"./gulp-demos-uIKTVH8x.js";const ne=`<!-- @meta
title: Link | HTML Components
activeNav: link
pageTitle: Link
-->
<div class="page_intro">
  <h1>Link</h1>
  <p class="lead">페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 <code class="typo_code">typo_link</code>를 사용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다.</p>
  </div>

  <div class="demo_section-preview">
    <a href="#" class="link color_primary">더 보기</a>
    <a href="#" class="link color_primary">가이드 문서</a>
    <a href="#" class="link color_primary link_underline">항상 밑줄</a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="link_row">
      <a href="#" class="link color_primary">Primary</a>
      <a href="#" class="link color_muted">Muted</a>
      <a href="#" class="link color_success">Success</a>
      <a href="#" class="link color_warning">Warning</a>
      <a href="#" class="link color_danger">Danger</a>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>공통 size_* 클래스로 텍스트 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <a href="#" class="link color_primary size_sm">Small</a>
    <a href="#" class="link color_primary">Base</a>
    <a href="#" class="link color_primary size_lg">Large</a>
    <a href="#" class="link color_primary size_xl">Extra Large</a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="style-heading">
  <div class="demo_section-header">
    <h2 id="style-heading">스타일</h2>
    <p>link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="link_row">
      <a href="#" class="link color_primary">기본 (hover 밑줄)</a>
      <a href="#" class="link color_primary link_underline">항상 밑줄</a>
      <a href="#" class="link color_primary link_no-underline">밑줄 없음</a>
      <a href="#" class="link color_primary link_standalone">터치 영역 확대</a>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="nav-heading">
  <div class="demo_section-header">
    <h2 id="nav-heading">내비게이션</h2>
    <p>link_nav · is-active로 메뉴·탭 링크를 표현합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="link_group-inline" aria-label="섹션 내비게이션">
      <a href="#" class="link link_nav color_primary is-active" aria-current="page">개요</a>
      <a href="#" class="link link_nav color_primary">컴포넌트</a>
      <a href="#" class="link link_nav color_primary">토큰</a>
      <a href="#" class="link link_nav color_primary">접근성</a>
    </nav>

    <a href="#" class="link link_back color_primary">
      <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      이전 페이지
    </a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="block-heading">
  <div class="demo_section-header">
    <h2 id="block-heading">블록 · 그룹</h2>
    <p>link_block · link_group으로 세로 링크 목록을 구성합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="link_group" style="max-width: 280px; width: 100%;">
      <a href="#" class="link link_block color_primary">
        <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
        </svg>
        시작하기
      </a>
      <a href="#" class="link link_block color_primary">
        <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        컴포넌트
      </a>
      <a href="#" class="link link_block color_muted">
        <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
        </svg>
        도움말
      </a>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-only-heading">
  <div class="demo_section-header">
    <h2 id="icon-only-heading">아이콘 전용</h2>
    <p>link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다.</p>
  </div>

  <div class="demo_section-preview">
    <a href="#" class="link link_icon-only color_primary" aria-label="검색">
      <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    </a>
    <a href="#" class="link link_icon-only color_primary" aria-label="편집">
      <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    </a>
    <a href="#" class="link link_icon-only color_muted" aria-label="더 보기">
      <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
    </a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘</h2>
    <p>link_icon으로 텍스트 앞·뒤에 아이콘을 배치합니다. 장식용 아이콘은 aria-hidden="true"를 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="link_row">
      <a href="#" class="link color_primary">
        <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        외부 링크
      </a>

      <a href="#" class="link color_primary">
        다운로드
        <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </a>

      <a href="#" class="link color_primary">
        <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        다음 단계
      </a>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="external-heading">
  <div class="demo_section-header">
    <h2 id="external-heading">새 창 열기</h2>
    <p>target="_blank"과 rel="noopener noreferrer"를 함께 지정합니다. 스크린 리더용 안내 문구를 링크 텍스트에 포함합니다.</p>
  </div>

  <div class="demo_section-preview">
    <a href="https://example.com" class="link color_primary" target="_blank" rel="noopener noreferrer">
      공식 문서
      <span class="color_muted size_sm">(새 창)</span>
      <svg class="link_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p>aria-disabled="true"와 tabindex="-1"로 비활성 링크를 표현합니다. 클릭 불가 시 href를 제거하거나 span으로 대체할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <a href="#" class="link color_primary is-disabled" aria-disabled="true" tabindex="-1">비활성 링크</a>
    <a href="#" class="link color_primary is-disabled" aria-disabled="true" tabindex="-1">비활성 (span)</a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="context-heading">
  <div class="demo_section-header">
    <h2 id="context-heading">문맥 속 사용</h2>
    <p>알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">업데이트 안내</div>
        <p class="alert_desc">
          새 버전이 출시되었습니다.
          <a href="#" class="link color_primary size_sm">릴리스 노트 보기</a>
        </p>
      </div>
    </div>

    <p class="color_muted">
      계정이 없으신가요?
      <a href="#" class="link color_primary">회원가입</a>
    </p>
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
            <td><code class="typo_code">link</code></td>
            <td>하이퍼링크 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">link_underline</code> · <code class="typo_code">link_no-underline</code> · <code class="typo_code">link_standalone</code></td>
            <td>밑줄·터치 영역</td>
          </tr>
          <tr>
            <td><code class="typo_code">link_nav</code> · <code class="typo_code">link_back</code> · <code class="typo_code">link_block</code> · <code class="typo_code">link_icon-only</code></td>
            <td>용도별 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">link_icon</code></td>
            <td>링크 내 아이콘</td>
          </tr>
          <tr>
            <td><code class="typo_code">link_row</code> · <code class="typo_code">link_group</code> · <code class="typo_code">link_group-inline</code></td>
            <td>링크 묶음 레이아웃</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-active</code> · <code class="typo_code">is-disabled</code></td>
            <td>상태 클래스</td>
          </tr>
          <tr>
            <td><code class="typo_code">color_*</code> · <code class="typo_code">size_*</code></td>
            <td>공통 색상·크기 유틸</td>
          </tr>
          <tr>
            <td><code class="typo_code">data-ripple</code></td>
            <td>클릭 파장 활성. data-ripple="surface"는 절대 위치 보조 버튼용</td>
          </tr>
          <tr>
            <td><code class="typo_code">data-ripple="false"</code></td>
            <td>해당 요소 ripple 비활성</td>
          </tr>
          <tr>
            <td><code class="typo_code">data-no-ripple</code></td>
            <td>하위 전체 ripple 비활성</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      본문 안 인라인 링크는 Typography의 <code class="typo_code">typo_link</code>를 사용합니다.
      이 Link는 독립 액션·내비게이션 링크용입니다.
    </p>
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
            <td><code class="typo_code">--link-gap</code></td>
            <td>var(--space-xs)</td>
            <td>아이콘·텍스트 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--link-font-weight</code></td>
            <td>500</td>
            <td>기본 글자 두께</td>
          </tr>
          <tr>
            <td><code class="typo_code">--link-underline-offset</code></td>
            <td>2px</td>
            <td>밑줄 오프셋</td>
          </tr>
          <tr>
            <td><code class="typo_code">--link-nav-padding-y</code> · <code class="typo_code">--link-nav-padding-x</code></td>
            <td>0.35rem · 0.5rem</td>
            <td>내비게이션 링크 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--link-standalone-padding-y</code> · <code class="typo_code">--link-standalone-padding-x</code></td>
            <td>0.25rem · 0.15rem</td>
            <td>터치 영역 확대 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--link-icon-only-size</code></td>
            <td>2rem</td>
            <td>아이콘 전용 링크 크기</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=re(ne),oe=se(ne),ie={title:"Components/기본 요소/Link",id:"components-link",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 typo_link를 사용합니다."}}}},r={name:"기본",render:()=>n(e[0]),parameters:{docs:{...o(e[0].previewHtml).docs,description:{story:e[0].description}}}},s={name:"색상",render:()=>n(e[1]),parameters:{docs:{...o(e[1].previewHtml).docs,description:{story:e[1].description}}}},a={name:"크기",render:()=>n(e[2]),parameters:{docs:{...o(e[2].previewHtml).docs,description:{story:e[2].description}}}},i={name:"스타일",render:()=>n(e[3]),parameters:{docs:{...o(e[3].previewHtml).docs,description:{story:e[3].description}}}},d={name:"내비게이션",render:()=>n(e[4]),parameters:{docs:{...o(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"블록 · 그룹",render:()=>n(e[5]),parameters:{docs:{...o(e[5].previewHtml).docs,description:{story:e[5].description}}}},t={name:"아이콘 전용",render:()=>n(e[6]),parameters:{docs:{...o(e[6].previewHtml).docs,description:{story:e[6].description}}}},l={name:"아이콘",render:()=>n(e[7]),parameters:{docs:{...o(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"새 창 열기",render:()=>n(e[8]),parameters:{docs:{...o(e[8].previewHtml).docs,description:{story:e[8].description}}}},m={name:"비활성",render:()=>n(e[9]),parameters:{docs:{...o(e[9].previewHtml).docs,description:{story:e[9].description}}}},u={name:"문맥 속 사용",render:()=>n(e[10]),parameters:{docs:{...o(e[10].previewHtml).docs,description:{story:e[10].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>n(oe[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>n(oe[1]),parameters:{docs:{source:{code:null},description:{story:"Link 간격·패딩·크기에 사용하는 CSS 변수입니다."}}}};var h,k,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var g,C,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '색상',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var b,f,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,B,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '스타일',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var H,A,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '내비게이션',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var L,z,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '블록 · 그룹',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var T,F,O;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '아이콘 전용',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(O=(F=t.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var V,N,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var W,j,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '새 창 열기',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,I,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,R;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '문맥 속 사용',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,X,Y;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
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
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Link 간격·패딩·크기에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const de=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","ApiClasses","ApiTokens"];export{_ as ApiClasses,v as ApiTokens,r as Demo0,s as Demo1,u as Demo10,a as Demo2,i as Demo3,d as Demo4,c as Demo5,t as Demo6,l as Demo7,p as Demo8,m as Demo9,de as __namedExportsOrder,ie as default};
