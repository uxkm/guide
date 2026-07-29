import{b as a,c as n,e as W,d as X}from"./gulp-demos-uIKTVH8x.js";const Q=`<!-- @meta
title: Stat | HTML Components
activeNav: stat
pageTitle: Stat
-->
<div class="page_intro">
  <h1>Stat</h1>
  <p class="lead">핵심 수치와 지표를 강조하여 표시하는 통계 컴포넌트입니다. 대시보드·요약 카드·KPI 영역에 사용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>title · value · description으로 지표를 구성합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="stat">
      <span class="stat_label">총 사용자</span>
      <span class="stat_value">12,345</span>
      <span class="stat_desc color_success">+12.5% 지난 달 대비</span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="prefix-heading">
  <div class="demo_section-header">
    <h2 id="prefix-heading">접두 · 접미</h2>
    <p>prefix · suffix로 통화·단위를 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="stat">
      <span class="stat_label">총 매출</span>
      <div class="stat_value-row">
        <span class="stat_prefix">₩</span>
        <span class="stat_value">4,280,000</span>
      </div>
      <span class="stat_desc color_success">+8.2%</span>
    </div>

    <div class="stat">
      <span class="stat_label">전환율</span>
      <div class="stat_value-row">
        <span class="stat_value">3.6</span>
        <span class="stat_suffix">%</span>
      </div>
      <span class="stat_desc color_danger">-0.4%p</span>
    </div>

    <div class="stat">
      <span class="stat_label">평균 응답 시간</span>
      <div class="stat_value-row">
        <span class="stat_value">128</span>
        <span class="stat_suffix">ms</span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="trend-heading">
  <div class="demo_section-header">
    <h2 id="trend-heading">추세</h2>
    <p>trend로 증감 방향을 아이콘과 함께 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="stat stat_card stat_shadow">
      <div class="stat_header">
        <span class="stat_label">월간 매출</span>
        <span class="stat_trend color_success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m18 15-6-6-6 6"/>
          </svg>
          +8.2%
        </span>
      </div>
      <div class="stat_value-row">
        <span class="stat_prefix">₩</span>
        <span class="stat_value">4.2M</span>
      </div>
      <span class="stat_desc color_muted">전월 대비</span>
    </div>

    <div class="stat stat_card stat_shadow">
      <div class="stat_header">
        <span class="stat_label">이탈률</span>
        <span class="stat_trend color_danger">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m6 9 6 6 6-6"/>
          </svg>
          +0.3%p
        </span>
      </div>
      <div class="stat_value-row">
        <span class="stat_value">2.4</span>
        <span class="stat_suffix">%</span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>size로 수치 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="stat stat_sm stat_card">
      <span class="stat_label">Small</span>
      <span class="stat_value">1,024</span>
    </div>
    <div class="stat stat_card">
      <span class="stat_label">Medium</span>
      <span class="stat_value">8,192</span>
    </div>
    <div class="stat stat_lg stat_card">
      <span class="stat_label">Large</span>
      <span class="stat_value">64K</span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="layout-heading">
  <div class="demo_section-header">
    <h2 id="layout-heading">레이아웃</h2>
    <p>stat_horizontal · stat_inline · stat_row로 배치를 변경합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="stat stat_horizontal stat_card">
      <span class="stat_label">활성 세션</span>
      <span class="stat_value">342</span>
    </div>

    <div class="stat stat_inline stat_card">
      <span class="stat_label">CPU 사용률</span>
      <span class="stat_value">68</span>
      <span class="stat_suffix">%</span>
    </div>

    <div class="stat stat_row stat_card stat_shadow">
      <span class="stat_icon-wrap color_primary" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">팀 멤버</span>
        <span class="stat_value">48</span>
        <span class="stat_desc color_success">4명 신규 합류</span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘</h2>
    <p>stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="stat stat_card">
      <span class="stat_icon color_primary">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </span>
      <span class="stat_label">다운로드</span>
      <span class="stat_value">2,847</span>
      <span class="stat_desc color_success">+24%</span>
    </div>

    <div class="stat stat_row stat_card">
      <span class="stat_icon-wrap color_success" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">완료율</span>
        <div class="stat_value-row">
          <span class="stat_value">94</span>
          <span class="stat_suffix">%</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="skin-heading">
  <div class="demo_section-header">
    <h2 id="skin-heading">스킨</h2>
    <p>card · shadow · stat_borderless · stat_accent로 외형을 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="stat_group stat_group-2">
      <div class="stat stat_card">
        <span class="stat_label">기본 카드</span>
        <span class="stat_value">1,200</span>
      </div>
      <div class="stat stat_card stat_shadow">
        <span class="stat_label">Shadow</span>
        <span class="stat_value">980</span>
      </div>
      <div class="stat stat_card stat_borderless">
        <span class="stat_label">Borderless</span>
        <span class="stat_value">456</span>
      </div>
      <div class="stat stat_card stat_accent color_primary">
        <span class="stat_label">Accent</span>
        <span class="stat_value">789</span>
        <span class="stat_desc color_primary">강조 지표</span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">그룹</h2>
    <p>stat_group으로 여러 지표를 그리드로 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="stat_group">
      <div class="stat stat_card stat_shadow">
        <span class="stat_label">총 매출</span>
        <div class="stat_value-row">
          <span class="stat_prefix">₩</span>
          <span class="stat_value">4.2M</span>
        </div>
        <span class="stat_desc color_success">+8.2%</span>
      </div>
      <div class="stat stat_card stat_shadow">
        <span class="stat_label">신규 가입</span>
        <span class="stat_value">1,234</span>
        <span class="stat_desc color_success">+15.3%</span>
      </div>
      <div class="stat stat_card stat_shadow">
        <span class="stat_label">이탈률</span>
        <div class="stat_value-row">
          <span class="stat_value">2.4</span>
          <span class="stat_suffix">%</span>
        </div>
        <span class="stat_desc color_danger">+0.3%p</span>
      </div>
      <div class="stat stat_card stat_shadow">
        <span class="stat_label">활성 사용자</span>
        <span class="stat_value">8,901</span>
        <span class="stat_desc color_muted">변동 없음</span>
      </div>
    </div>

    <div class="stat_group stat_group-4 stat_group-divider stat_card stat_shadow" style="padding: var(--space-lg);">
      <div class="stat">
        <span class="stat_label">방문</span>
        <span class="stat_value">24.5K</span>
      </div>
      <div class="stat">
        <span class="stat_label">페이지뷰</span>
        <span class="stat_value">89.2K</span>
      </div>
      <div class="stat">
        <span class="stat_label">전환</span>
        <span class="stat_value">1,842</span>
      </div>
      <div class="stat">
        <span class="stat_label">매출</span>
        <span class="stat_value">₩12M</span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="context-heading">
  <div class="demo_section-header">
    <h2 id="context-heading">카드 혼합</h2>
    <p>card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card card_shadow">
      <div class="card_header">
        <div class="card_header-main">
          <h3 class="card_title">이번 달 요약</h3>
          <p class="card_subtitle">2024년 6월</p>
        </div>
      </div>
      <div class="card_body">
        <div class="stat_group stat_group-3">
          <div class="stat">
            <span class="stat_label">매출</span>
            <div class="stat_value-row">
              <span class="stat_prefix">₩</span>
              <span class="stat_value">12M</span>
            </div>
            <span class="stat_trend color_success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="m18 15-6-6-6 6"/>
              </svg>
              +18%
            </span>
          </div>
          <div class="stat">
            <span class="stat_label">주문</span>
            <span class="stat_value">3,456</span>
            <span class="stat_desc color_success">+9.1%</span>
          </div>
          <div class="stat">
            <span class="stat_label">환불</span>
            <span class="stat_value">42</span>
            <span class="stat_desc color_danger">+3건</span>
          </div>
        </div>
      </div>
      <div class="card_footer card_footer-between">
        <span class="color_muted size_sm">실시간 갱신</span>
        <a href="#" class="link color_primary size_sm">상세 보기</a>
      </div>
    </article>
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
            <td><code class="typo_code">stat</code></td>
            <td>지표 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">stat_sm</code> · <code class="typo_code">stat_lg</code></td>
            <td>크기 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">stat_card</code> · <code class="typo_code">stat_shadow</code> · <code class="typo_code">stat_borderless</code> · <code class="typo_code">stat_accent</code></td>
            <td>카드·그림자·스킨</td>
          </tr>
          <tr>
            <td><code class="typo_code">stat_header</code> · <code class="typo_code">stat_label</code> · <code class="typo_code">stat_value-row</code></td>
            <td>레이아웃 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">stat_value</code> · <code class="typo_code">stat_prefix</code> · <code class="typo_code">stat_suffix</code> · <code class="typo_code">stat_desc</code> · <code class="typo_code">stat_trend</code></td>
            <td>값·설명 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">stat_group</code> · <code class="typo_code">stat_group-2</code> · <code class="typo_code">stat_group-3</code> · <code class="typo_code">stat_group-4</code></td>
            <td>지표 그리드</td>
          </tr>
          <tr>
            <td><code class="typo_code">stat_horizontal</code></td>
            <td>아이콘+값 가로 배치</td>
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
            <td><code class="typo_code">--stat-value-size</code> · <code class="typo_code">--stat-value-size-sm</code> · <code class="typo_code">--stat-value-size-lg</code></td>
            <td>1.75rem · 1.25rem · 2.25rem</td>
            <td>수치 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--stat-label-size</code> · <code class="typo_code">--stat-desc-size</code></td>
            <td>var(--text-size-sm)</td>
            <td>라벨·설명 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--stat-group-gap</code> · <code class="typo_code">--stat-card-padding</code></td>
            <td>var(--space-lg) · var(--space-lg)</td>
            <td>그룹 간격·카드 패딩</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,s=W(Q),R=X(Q),Z={title:"Components/데이터 표시/Stat",id:"components-stat",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"핵심 수치와 지표를 강조하여 표시하는 통계 컴포넌트입니다. 대시보드·요약 카드·KPI 영역에 사용합니다."}}}},e={name:"기본",render:()=>a(s[0]),parameters:{docs:{...n(s[0].previewHtml).docs,description:{story:s[0].description}}}},t={name:"접두 · 접미",render:()=>a(s[1]),parameters:{docs:{...n(s[1].previewHtml).docs,description:{story:s[1].description}}}},c={name:"추세",render:()=>a(s[2]),parameters:{docs:{...n(s[2].previewHtml).docs,description:{story:s[2].description}}}},d={name:"크기",render:()=>a(s[3]),parameters:{docs:{...n(s[3].previewHtml).docs,description:{story:s[3].description}}}},o={name:"레이아웃",render:()=>a(s[4]),parameters:{docs:{...n(s[4].previewHtml).docs,description:{story:s[4].description}}}},r={name:"아이콘",render:()=>a(s[5]),parameters:{docs:{...n(s[5].previewHtml).docs,description:{story:s[5].description}}}},i={name:"스킨",render:()=>a(s[6]),parameters:{docs:{...n(s[6].previewHtml).docs,description:{story:s[6].description}}}},l={name:"그룹",render:()=>a(s[7]),parameters:{docs:{...n(s[7].previewHtml).docs,description:{story:s[7].description}}}},p={name:"카드 혼합",render:()=>a(s[8]),parameters:{docs:{...n(s[8].previewHtml).docs,description:{story:s[8].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>a(R[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>a(R[1]),parameters:{docs:{source:{code:null},description:{story:"Stat 수치·라벨·그룹 간격에 사용하는 CSS 변수입니다."}}}};var u,m,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '접두 · 접미',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,C,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '추세',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,x,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,A,H;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '레이아웃',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var k,z,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(M=(z=r.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var E,F,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '스킨',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var K,O,L;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '그룹',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var P,I,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '카드 혼합',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var U,V,j;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(V=_.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,G,J;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Stat 수치·라벨·그룹 간격에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const $=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","ApiClasses","ApiTokens"];export{_ as ApiClasses,v as ApiTokens,e as Demo0,t as Demo1,c as Demo2,d as Demo3,o as Demo4,r as Demo5,i as Demo6,l as Demo7,p as Demo8,$ as __namedExportsOrder,Z as default};
