import{b as t,d as N,c as n,e as Q}from"./gulp-demos-uIKTVH8x.js";const J=`<!-- @meta
title: Back Top | HTML Components
activeNav: back-top
pageTitle: Back Top
-->
<div class="page_intro">
  <h1>Back Top</h1>
  <p class="lead">긴 콘텐츠를 스크롤한 뒤 페이지(또는 지정 영역) 맨 위로 빠르게 이동하는 플로팅 버튼입니다. <code class="typo_code">data-target</code>으로 스크롤 컨테이너를 지정하고, <code class="typo_code">data-visibility-height</code>으로 표시 임계값을 조절할 수 있습니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">data-back-top</code>과 <code class="typo_code">data-target</code>으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-basic">
        <div class="back_top_demo-content">
          <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
          <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>
          <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>
          <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>
          <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>
          <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>
          <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
        </div>
      </div>

      <div class="back_top" data-back-top data-target="#back-top-scroll-basic" data-visibility-height="80">
        <button type="button" class="back_top_btn" aria-label="맨 위로">
          <svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="visibility-heading">
  <div class="demo_section-header">
    <h2 id="visibility-heading">표시 임계값</h2>
    <p><code class="typo_code">data-visibility-height</code>으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div class="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
          <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>
          <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>
          <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>
          <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>
          <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>
          <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>
          <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>
        </div>
      </div>

      <div class="back_top back_top_primary" data-back-top data-target="#back-top-scroll-visibility" data-visibility-height="200">
        <button type="button" class="back_top_btn" aria-label="맨 위로">
          <svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">back_top_sm</code> · <code class="typo_code">back_top_lg</code> 클래스로 버튼 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-sm">
        <div class="back_top_demo-content">
          <p>Small 크기 예시입니다. 스크롤해 보세요.</p>
          <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>
          <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>
          <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>
          <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
        </div>
      </div>

      <div class="back_top back_top_sm" data-back-top data-target="#back-top-scroll-sm" data-visibility-height="60">
        <button type="button" class="back_top_btn" aria-label="맨 위로">
          <svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-lg">
        <div class="back_top_demo-content">
          <p>Large 크기 예시입니다. 스크롤해 보세요.</p>
          <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>
          <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>
          <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>
          <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
        </div>
      </div>

      <div class="back_top back_top_lg back_top_ghost" data-back-top data-target="#back-top-scroll-lg" data-visibility-height="60">
        <button type="button" class="back_top_btn" aria-label="맨 위로">
          <svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="custom-heading">
  <div class="demo_section-header">
    <h2 id="custom-heading">커스텀 콘텐츠</h2>
    <p>버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-custom">
        <div class="back_top_demo-content">
          <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>
          <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>
          <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>
          <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>
          <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>
          <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>
          <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>
          <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>
        </div>
      </div>

      <div
        class="back_top back_top_primary"
        data-back-top
        data-target="#back-top-scroll-custom"
        data-visibility-height="100"
        style="--back-top-offset-bottom: var(--space-md); --back-top-offset-right: var(--space-md);"
      >
        <button type="button" class="back_top_btn" aria-label="맨 위로">
          <svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          <span class="back_top_label">TOP</span>
        </button>
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
    <div class="back_top_demo-wrap">
      <div class="back_top_demo-page" id="back-top-scroll-page">
        <div class="back_top_demo-content">
          <p>이 영역은 실제 페이지처럼 길게 스크롤됩니다. 아래로 스크롤하면 우측 하단에 Back Top 버튼이 나타납니다.</p>
          <p>실제 서비스에서는 <code class="typo_code">data-target</code>을 생략해 window 스크롤에 연결합니다.</p>
          <p>스크롤을 계속하면 버튼이 유지되고, 클릭 시 이 영역의 맨 위로 부드럽게 이동합니다.</p>
          <p>긴 문서·설정·피드 화면에서 자주 쓰는 패턴입니다.</p>
          <p>임계값(<code class="typo_code">data-visibility-height</code>)은 이 예시에서 100px입니다.</p>
          <p>충분히 내려간 뒤 버튼을 눌러 맨 위로 돌아가는지 확인하세요.</p>
        </div>
      </div>
      <div
        class="back_top back_top_primary"
        data-back-top
        data-target="#back-top-scroll-page"
        data-visibility-height="100"
      >
        <button type="button" class="back_top_btn" aria-label="맨 위로">
          <svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>루트에 <code class="typo_code">data-back-top</code>을 두고, 버튼은 <code class="typo_code">back_top_btn</code>으로 둡니다. 스크롤 컨테이너는 <code class="typo_code">data-target</code>으로 연결합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;div class="back_top" data-back-top data-target="#scroll-area" data-visibility-height="200"&gt;
  &lt;button type="button" class="back_top_btn" aria-label="맨 위로"&gt;
    &lt;svg class="back_top_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"&gt;
      &lt;path d="M12 19V5M5 12l7-7 7 7"/&gt;
    &lt;/svg&gt;
  &lt;/button&gt;
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
          <tr><td><code class="typo_code">data-back-top</code></td><td>Back Top 활성화. 루트 .back_top 요소에 지정</td></tr>
          <tr><td><code class="typo_code">data-target</code></td><td>스크롤 컨테이너 CSS 선택자. 생략 시 window</td></tr>
          <tr><td><code class="typo_code">data-visibility-height</code></td><td>버튼 표시 임계 스크롤(px). 기본 400</td></tr>
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
          <tr><td><code class="typo_code">back_top · back_top_btn · back_top_icon · back_top_label</code></td><td>루트·버튼·아이콘·텍스트</td></tr>
          <tr><td><code class="typo_code">back_top_sm · back_top_lg</code></td><td>크기</td></tr>
          <tr><td><code class="typo_code">back_top_primary · back_top_ghost</code></td><td>색상 스킨</td></tr>
          <tr><td><code class="typo_code">is-visible</code></td><td>스크롤 임계 초과 시 표시 (JS가 자동 추가)</td></tr>
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
          <tr><td><code class="typo_code">--back-top-z-index</code></td><td>20</td><td>레이어 순서</td></tr>
          <tr><td><code class="typo_code">--back-top-size</code> · <code class="typo_code">--back-top-size-sm</code> · <code class="typo_code">--back-top-size-lg</code></td><td>2.5rem · 2rem · 3rem</td><td>버튼 크기</td></tr>
          <tr><td><code class="typo_code">--back-top-icon-size</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td><td>1.25rem · 1rem · 1.5rem</td><td>아이콘 크기</td></tr>
          <tr><td><code class="typo_code">--back-top-offset-bottom</code> · <code class="typo_code">--back-top-offset-right</code></td><td>var(--space-lg)</td><td>플로팅 위치</td></tr>
          <tr><td><code class="typo_code">--back-top-bg</code> · <code class="typo_code">--back-top-bg-hover</code></td><td>surface · surface-raised</td><td>배경</td></tr>
          <tr><td><code class="typo_code">--back-top-border</code> · <code class="typo_code">--back-top-border-hover</code></td><td>border-subtle · accent</td><td>테두리</td></tr>
          <tr><td><code class="typo_code">--back-top-shadow</code> · <code class="typo_code">--back-top-shadow-hover</code></td><td>—</td><td>그림자</td></tr>
          <tr><td><code class="typo_code">--back-top-color</code> · <code class="typo_code">--back-top-color-hover</code></td><td>text · accent-text-hover</td><td>아이콘·텍스트 색</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=Q(J),o=N(J),j={title:"Components/기타/BackTop",id:"components-back-top",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"긴 콘텐츠를 스크롤한 뒤 페이지(또는 지정 영역) 맨 위로 빠르게 이동하는 플로팅 버튼입니다. data-target으로 스크롤 컨테이너를 지정하고, data-visibility-height으로 표시 임계값을 조절할 수 있습니다."}}}},a={name:"기본",render:()=>t(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},s={name:"표시 임계값",render:()=>t(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},c={name:"크기",render:()=>t(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},d={name:"커스텀 콘텐츠",render:()=>t(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"페이지 스크롤",render:()=>t(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"마크업",tags:["!dev"],render:()=>t(o[0]),parameters:{docs:{source:{code:null},description:{story:o[0].description}}}},p={name:"데이터 속성",tags:["!dev"],render:()=>t(o[1]),parameters:{docs:{source:{code:null},description:{story:"BackTop 동작(스크롤 컨테이너·표시 임계값)을 제어하는 data-* 속성입니다."}}}},l={name:"클래스 · 스킨",tags:["!dev"],render:()=>t(o[2]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·스킨입니다."}}}},b={name:"디자인 토큰",tags:["!dev"],render:()=>t(o[3]),parameters:{docs:{source:{code:null},description:{story:"BackTop 위치·크기·표면에 사용하는 CSS 변수입니다."}}}};var m,u,_;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(u=a.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var v,k,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '표시 임계값',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var g,y,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,D,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '커스텀 콘텐츠',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var A,S,x;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,M,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var E,H,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '데이터 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'BackTop 동작(스크롤 컨테이너·표시 임계값)을 제어하는 data-* 속성입니다.'
      }
    }
  }
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var V,O,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var P,F,I;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[3]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'BackTop 위치·크기·표면에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const q=["Demo0","Demo1","Demo2","Demo3","Demo4","ApiMarkup","ApiData","ApiClasses","ApiTokens"];export{l as ApiClasses,p as ApiData,i as ApiMarkup,b as ApiTokens,a as Demo0,s as Demo1,c as Demo2,d as Demo3,r as Demo4,q as __namedExportsOrder,j as default};
