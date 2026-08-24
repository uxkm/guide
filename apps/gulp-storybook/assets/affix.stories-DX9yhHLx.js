import{b as n,d as U,c as t,e as V}from"./gulp-demos-uIKTVH8x.js";const R=`<!-- @meta
title: Affix | HTML Components
activeNav: affix
pageTitle: Affix
-->
<div class="page_intro">
  <h1>Affix</h1>
  <p class="lead">스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바·앵커 내비게이션·액션 버튼 등에 사용하며, <code class="typo_code">data-target</code>으로 스크롤 컨테이너를 지정할 수 있습니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">data-affix</code>와 <code class="typo_code">data-target</code>으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 <code class="typo_code">.affix_target</code>이 상단에 고정됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="affix_demo-narrow">
      <div id="affix-scroll-basic" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
          <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>

          <div class="affix" data-affix data-target="#affix-scroll-basic">
            <div class="affix_placeholder" aria-hidden="true" hidden></div>
            <div class="affix_target affix_bar">
              <span class="affix_bar-label">주문 #ORD-2024-0815</span>
              <div class="affix_bar-actions">
                <button type="button" class="btn btn_outline btn_sm"><span class="btn_label">취소</span></button>
                <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">결제</span></button>
              </div>
            </div>
          </div>

          <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
          <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>
          <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>
          <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
          <p>주문 메모 · 선물 포장 · 세금계산서 요청</p>
          <p>관련 상품 · 최근 본 상품 · 위시리스트</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="offset-heading">
  <div class="demo_section-header">
    <h2 id="offset-heading">상단 오프셋</h2>
    <p><code class="typo_code">data-offset-top</code>으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="affix_demo-narrow">
      <div id="affix-scroll-offset" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
          <p>제목: 2024년 3분기 실적 보고서</p>
          <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>

          <div class="affix" data-affix data-target="#affix-scroll-offset" data-offset-top="12">
            <div class="affix_placeholder" aria-hidden="true" hidden></div>
            <div class="affix_target affix_bar">
              <button type="button" class="btn btn_ghost btn_sm btn_icon-only" aria-label="굵게">
                <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
                </svg>
              </button>
              <button type="button" class="btn btn_ghost btn_sm btn_icon-only" aria-label="기울임">
                <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M19 4h-9M14 20H5M15 4 9 20"/>
                </svg>
              </button>
              <button type="button" class="btn btn_ghost btn_sm btn_icon-only" aria-label="밑줄">
                <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 3v7a6 6 0 0 0 12 0V3"/>
                  <path d="M4 21h16"/>
                </svg>
              </button>
              <span class="affix_bar-label" style="font-weight: 400; color: var(--color-text-muted)">서식</span>
            </div>
          </div>

          <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>
          <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>
          <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>
          <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>
          <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>
          <p>6. 참고 — 내부 지표 정의와 집계 기준은 별도 문서를 따릅니다.</p>
          <p>7. 문의 — 지표 해석은 기획팀으로 연락해 주세요.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="anchor-heading">
  <div class="demo_section-header">
    <h2 id="anchor-heading">앵커 내비게이션</h2>
    <p><code class="typo_code">affix_anchor</code> 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="affix_demo-narrow">
      <div id="affix-scroll-anchor" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>

          <div class="affix" data-affix data-target="#affix-scroll-anchor">
            <div class="affix_placeholder" aria-hidden="true" hidden></div>
            <nav class="affix_target affix_anchor" aria-label="설정 섹션">
              <a href="#affix-sec-profile" class="link color_primary">프로필</a>
              <a href="#affix-sec-security" class="link">보안</a>
              <a href="#affix-sec-notify" class="link">알림</a>
              <a href="#affix-sec-billing" class="link">결제</a>
            </nav>
          </div>

          <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
          <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
          <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
          <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
          <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
          <p>연동 계정 · 로그인 기록 · 세션 관리</p>
          <p>데이터 내보내기 · 계정 삭제 요청</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bottom-heading">
  <div class="demo_section-header">
    <h2 id="bottom-heading">하단 고정</h2>
    <p><code class="typo_code">data-offset-bottom</code>을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="affix_demo-narrow">
      <div id="affix-scroll-bottom" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>
          <p>무선 이어폰 Pro × 1 — ₩39,000</p>
          <p>USB-C 케이블 × 2 — ₩12,000</p>
          <p>보조배터리 10,000mAh × 1 — ₩29,000</p>
          <p>배송비 — ₩3,000</p>
          <p>쿠폰 할인 — −₩5,000</p>
          <p>결제 수단은 다음 단계에서 선택합니다.</p>
          <p>적립 예정 포인트: 780P</p>
          <p>무료 배송 기준 · 오늘 도착 가능 여부</p>
          <p>장바구니에 담은 상품은 30일간 보관됩니다.</p>

          <div class="affix" data-affix data-target="#affix-scroll-bottom" data-offset-bottom="0">
            <div class="affix_placeholder" aria-hidden="true" hidden></div>
            <div class="affix_target affix_bar">
              <span class="affix_bar-label">합계 ₩78,000</span>
              <div class="affix_bar-actions">
                <button type="button" class="btn btn_filled color_primary btn_block" style="min-width: 7rem">
                  <span class="btn_label">결제하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="window-heading">
  <div class="demo_section-header">
    <h2 id="window-heading">페이지 스크롤</h2>
    <p><code class="typo_code">data-target</code>을 생략하면 window 스크롤을 기준으로 동작합니다. Docs·프리뷰에서는 페이지형 스크롤 영역으로 같은 동작을 확인합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="affix_demo-narrow">
      <div class="affix_demo-page" id="affix-scroll-page">
        <div class="affix_demo-content">
          <p>이 영역은 실제 페이지처럼 길게 스크롤됩니다. 배너가 상단(오프셋 12px)에 고정되는지 확인하세요.</p>

          <div
            class="affix"
            data-affix
            data-target="#affix-scroll-page"
            data-offset-top="12"
            style="--affix-bar-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))"
          >
            <div class="affix_placeholder" aria-hidden="true" hidden></div>
            <div class="affix_target affix_bar">
              <span class="affix_bar-label" style="color: var(--color-accent-text)">신규 컴포넌트 가이드가 업데이트되었습니다</span>
              <div class="affix_bar-actions">
                <a href="getting-started.html" class="btn btn_filled color_primary btn_sm"><span class="btn_label">시작하기</span></a>
              </div>
            </div>
          </div>

          <p>실제 서비스에서는 <code class="typo_code">data-target</code>을 생략해 window 스크롤에 연결합니다.</p>
          <p>스크롤을 계속하면 배너가 영역에 맞춰 고정·해제됩니다.</p>
          <p>긴 문서·대시보드 상단 툴바에서 자주 쓰는 패턴입니다.</p>
          <p>아래로 더 내려가며 고정이 유지되는지 확인하세요.</p>
          <p>영역 끝으로 가면 고정이 해제됩니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>루트에 <code class="typo_code">data-affix</code>를 두고, 고정 대상은 <code class="typo_code">affix_target</code>에 둡니다. 플레이스홀더는 JS가 레이아웃 점프를 막는 데 사용합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;div class="affix" data-affix data-target="#scroll-area" data-offset-top="0"&gt;
  &lt;div class="affix_placeholder" aria-hidden="true" hidden&gt;&lt;/div&gt;
  &lt;div class="affix_target affix_bar"&gt;
    &lt;span class="affix_bar-label"&gt;라벨&lt;/span&gt;
    &lt;div class="affix_bar-actions"&gt;…&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="api-attrs-heading">
  <h2 id="api-attrs-heading">데이터 속성</h2>

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
          <tr><td><code class="typo_code">data-affix</code></td><td>Affix 활성화. 루트 .affix 요소에 지정</td></tr>
          <tr><td><code class="typo_code">data-target</code></td><td>스크롤 컨테이너 CSS 선택자. 생략 시 window</td></tr>
          <tr><td><code class="typo_code">data-offset-top</code></td><td>상단 고정 시 상단 간격(px)</td></tr>
          <tr><td><code class="typo_code">data-offset-bottom</code></td><td>하단 고정 시 하단 간격(px). 지정 시 하단 고정 모드</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="api-heading">
  <h2 id="api-heading">클래스 · 스킨</h2>

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
          <tr><td><code class="typo_code">affix · affix_placeholder · affix_target</code></td><td>루트·플레이스홀더·고정 대상</td></tr>
          <tr><td><code class="typo_code">affix_bar · affix_bar-label · affix_bar-actions</code></td><td>액션 바 스킨</td></tr>
          <tr><td><code class="typo_code">affix_anchor</code></td><td>섹션 앵커 링크 내비게이션 스킨</td></tr>
          <tr><td><code class="typo_code">is-affixed · is-fixed</code></td><td>고정 상태 (JS가 자동 추가)</td></tr>
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
          <tr><td><code class="typo_code">--affix-z-index</code></td><td>10</td><td>고정 바 z-index</td></tr>
          <tr><td><code class="typo_code">--affix-bar-gap</code></td><td>var(--space-sm)</td><td>바 내부 간격</td></tr>
          <tr><td><code class="typo_code">--affix-bar-padding-y</code> · <code class="typo_code">--affix-bar-padding-x</code></td><td>var(--space-sm) · var(--space-md)</td><td>바 패딩</td></tr>
          <tr><td><code class="typo_code">--affix-bar-bg</code></td><td>var(--color-surface)</td><td>바 배경</td></tr>
          <tr><td><code class="typo_code">--affix-bar-border</code></td><td>var(--color-border-subtle)</td><td>바 테두리</td></tr>
          <tr><td><code class="typo_code">--affix-bar-shadow</code></td><td>0 1px 4px rgb(0 0 0 / 0.08)</td><td>바 그림자</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=V(R),a=U(R),q={title:"Components/기타/Affix",id:"components-affix",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바·앵커 내비게이션·액션 버튼 등에 사용하며, data-target으로 스크롤 컨테이너를 지정할 수 있습니다."}}}},s={name:"기본",render:()=>n(e[0]),parameters:{docs:{...t(e[0].previewHtml).docs,description:{story:e[0].description}}}},o={name:"상단 오프셋",render:()=>n(e[1]),parameters:{docs:{...t(e[1].previewHtml).docs,description:{story:e[1].description}}}},d={name:"앵커 내비게이션",render:()=>n(e[2]),parameters:{docs:{...t(e[2].previewHtml).docs,description:{story:e[2].description}}}},r={name:"하단 고정",render:()=>n(e[3]),parameters:{docs:{...t(e[3].previewHtml).docs,description:{story:e[3].description}}}},i={name:"페이지 스크롤",render:()=>n(e[4]),parameters:{docs:{...t(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"마크업",tags:["!dev"],render:()=>n(a[0]),parameters:{docs:{source:{code:null},description:{story:a[0].description}}}},p={name:"데이터 속성",tags:["!dev"],render:()=>n(a[1]),parameters:{docs:{source:{code:null},description:{story:"Affix 동작(스크롤 컨테이너·오프셋)을 제어하는 data-* 속성입니다."}}}},l={name:"클래스 · 스킨",tags:["!dev"],render:()=>n(a[2]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·스킨입니다."}}}},f={name:"디자인 토큰",tags:["!dev"],render:()=>n(a[3]),parameters:{docs:{source:{code:null},description:{story:"Affix 레이어·바 표면에 사용하는 CSS 변수입니다."}}}};var m,u,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,_,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '상단 오프셋',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var h,g,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '앵커 내비게이션',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(C=(g=d.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,w,D;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '하단 고정',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var B,A,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '페이지 스크롤',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var k,H,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var M,O,T;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '데이터 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Affix 동작(스크롤 컨테이너·오프셋)을 제어하는 data-* 속성입니다.'
      }
    }
  }
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var z,L,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '클래스 · 스킨',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·스킨입니다.'
      }
    }
  }
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var J,F,N;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[3]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Affix 레이어·바 표면에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(N=(F=f.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const G=["Demo0","Demo1","Demo2","Demo3","Demo4","ApiMarkup","ApiData","ApiClasses","ApiTokens"];export{l as ApiClasses,p as ApiData,c as ApiMarkup,f as ApiTokens,s as Demo0,o as Demo1,d as Demo2,r as Demo3,i as Demo4,G as __namedExportsOrder,q as default};
