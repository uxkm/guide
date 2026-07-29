import{b as s,d as K,c as n,e as Q}from"./gulp-demos-uIKTVH8x.js";const I=`<!-- @meta
title: Spin | HTML Components
activeNav: spin
pageTitle: Spin
-->
<div class="page_intro">
  <h1>Spin</h1>
  <p class="lead">로딩·처리 중 상태를 표시하는 Spin 컴포넌트입니다. 인라인 스피너, 설명 텍스트, 컨테이너 오버레이를 지원하며 <code class="typo_code">role="status"</code> · <code class="typo_code">aria-busy</code> · <code class="typo_code">aria-label</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">spin</code> · <code class="typo_code">spin_indicator</code>로 회전 스피너를 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="spin color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="로딩 중">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">spin_sm</code> · <code class="typo_code">spin</code>(기본) · <code class="typo_code">spin_lg</code> 세 가지 크기를 지원합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="spin spin_sm color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="로딩 중">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>

    <div class="spin color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="로딩 중">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>

    <div class="spin spin_lg color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="로딩 중">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>공통 <code class="typo_code">color_*</code> 클래스로 의미를 표현합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="spin color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="Primary 로딩">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>

    <div class="spin color_success" role="status" aria-live="polite" aria-busy="true" aria-label="Success 로딩">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>

    <div class="spin color_warning" role="status" aria-live="polite" aria-busy="true" aria-label="Warning 로딩">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>

    <div class="spin color_danger" role="status" aria-live="polite" aria-busy="true" aria-label="Danger 로딩">
      <span class="spin_indicator" aria-hidden="true"></span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="tip-heading">
  <div class="demo_section-header">
    <h2 id="tip-heading">설명 텍스트</h2>
    <p><code class="typo_code">spin_tip</code>으로 스피너 아래에 로딩 메시지를 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="spin color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="데이터를 불러오는 중">
      <span class="spin_indicator" aria-hidden="true"></span>
      <p class="spin_tip">데이터를 불러오는 중…</p>
    </div>

    <div class="spin spin_lg color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="파일 업로드 중">
      <span class="spin_indicator" aria-hidden="true"></span>
      <p class="spin_tip">파일 업로드 중…</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="inline-heading">
  <div class="demo_section-header">
    <h2 id="inline-heading">인라인</h2>
    <p><code class="typo_code">spin_inline</code>으로 스피너와 텍스트를 가로로 배치합니다. 버튼·문단 안에 삽입할 때 유용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p>
      <span class="spin spin_sm spin_inline color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="저장 중">
        <span class="spin_indicator" aria-hidden="true"></span>
        <span class="spin_tip">저장 중…</span>
      </span>
    </p>

    <button type="button" class="btn btn_filled color_primary is-loading" disabled aria-busy="true">
      <span class="btn_spinner" aria-hidden="true"></span>
      <span class="btn_label">제출 중…</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="block-heading">
  <div class="demo_section-header">
    <h2 id="block-heading">블록 정렬</h2>
    <p><code class="typo_code">spin_block</code>은 부모 너비 안에서 스피너를 가운데 정렬합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="spin spin_block color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="로딩 중">
      <span class="spin_indicator" aria-hidden="true"></span>
      <p class="spin_tip">잠시만 기다려 주세요…</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="overlay-heading">
  <div class="demo_section-header">
    <h2 id="overlay-heading">컨테이너 오버레이</h2>
    <p><code class="typo_code">spin_wrap</code>에 <code class="typo_code">is-loading</code>을 지정하면 콘텐츠 위에 <code class="typo_code">spin_overlay</code>가 표시됩니다. JS로 클래스를 토글해 로딩 상태를 제어합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="spin_wrap spin_wrap-block is-loading" style="max-width: var(--input-max-width);">
      <div class="spin_wrap-body">
        <article class="card card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title">대시보드</h3>
            </div>
          </div>
          <div class="card_body">
            <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
          </div>
        </article>
      </div>
      <div class="spin spin_overlay color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="데이터 로딩 중">
        <span class="spin_indicator" aria-hidden="true"></span>
        <p class="spin_tip">데이터 로딩 중…</p>
      </div>
    </div>

    <div class="spin_wrap spin_wrap-block spin_wrap-blur is-loading" style="max-width: var(--input-max-width);">
      <div class="spin_wrap-body">
        <article class="card card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title">블러 효과</h3>
            </div>
          </div>
          <div class="card_body">
            <p><code class="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p>
          </div>
        </article>
      </div>
      <div class="spin spin_overlay color_primary" role="status" aria-live="polite" aria-busy="true" aria-label="처리 중">
        <span class="spin_indicator" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>독립 스피너는 <code class="typo_code">role="status"</code>와 <code class="typo_code">aria-busy="true"</code>를 지정합니다. 오버레이는 <code class="typo_code">spin_wrap</code>에 <code class="typo_code">is-loading</code>을 토글합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- 인라인 스피너 --&gt;
&lt;div class="spin color_primary" role="status"
  aria-live="polite" aria-busy="true" aria-label="로딩 중"&gt;
  &lt;span class="spin_indicator" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;p class="spin_tip"&gt;로딩 중…&lt;/p&gt;
&lt;/div&gt;

&lt;!-- 컨테이너 오버레이 --&gt;
&lt;div class="spin_wrap is-loading"&gt;
  &lt;div class="spin_wrap-body"&gt;
    &lt;!-- 콘텐츠 --&gt;
  &lt;/div&gt;
  &lt;div class="spin spin_overlay color_primary" role="status"
    aria-live="polite" aria-busy="true" aria-label="로딩 중"&gt;
    &lt;span class="spin_indicator" aria-hidden="true"&gt;&lt;/span&gt;
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
          <tr><td><code class="typo_code">spin</code></td><td>루트 래퍼 (인라인 flex)</td></tr>
          <tr><td><code class="typo_code">spin_indicator</code></td><td>회전하는 원형 스피너</td></tr>
          <tr><td><code class="typo_code">spin_tip</code></td><td>스피너 아래 설명 텍스트 (선택)</td></tr>
          <tr><td><code class="typo_code">spin_sm</code> · <code class="typo_code">spin_lg</code></td><td>크기 변형</td></tr>
          <tr><td><code class="typo_code">spin_inline</code></td><td>스피너·텍스트 가로 배치</td></tr>
          <tr><td><code class="typo_code">spin_block</code></td><td>부모 너비 안 가운데 정렬</td></tr>
          <tr><td><code class="typo_code">spin_wrap</code></td><td>오버레이용 상대 위치 컨테이너</td></tr>
          <tr><td><code class="typo_code">spin_wrap-body</code></td><td>오버레이 아래 실제 콘텐츠</td></tr>
          <tr><td><code class="typo_code">spin_overlay</code></td><td>컨테이너 전체를 덮는 스피너 레이어</td></tr>
          <tr><td><code class="typo_code">spin_wrap-block</code></td><td>데모·빈 상태용 최소 높이</td></tr>
          <tr><td><code class="typo_code">spin_wrap-blur</code></td><td>로딩 시 콘텐츠 블러</td></tr>
          <tr><td><code class="typo_code">is-loading</code></td><td><code class="typo_code">spin_wrap</code>에 지정 — 오버레이 표시</td></tr>
          <tr><td><code class="typo_code">color_primary</code> · <code class="typo_code">color_success</code> · <code class="typo_code">color_warning</code> · <code class="typo_code">color_danger</code></td><td>공통 색상 변형</td></tr>
          <tr><td><code class="typo_code">role="status"</code></td><td>로딩 상태 시맨틱 (권장)</td></tr>
          <tr><td><code class="typo_code">aria-busy="true"</code></td><td>처리 중 표시</td></tr>
          <tr><td><code class="typo_code">aria-live="polite"</code></td><td>스크린 리더에 상태 변경 알림</td></tr>
          <tr><td><code class="typo_code">aria-label</code></td><td>접근 가능한 로딩 설명</td></tr>
        </tbody>
      </table>
    </div>

    <p class="form_field-hint" style="margin-top: var(--space-md);">버튼 내부 로딩은 <code class="typo_code">.btn.is-loading</code> + <code class="typo_code">.btn_spinner</code>를 사용합니다. 독립 스피너·영역 오버레이는 이 Spin 컴포넌트를 사용하세요.</p>
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
          <tr><td><code class="typo_code">--spin-size</code></td><td>2rem</td><td>스피너 지름</td></tr>
          <tr><td><code class="typo_code">--spin-size-sm</code> · <code class="typo_code">--spin-size-lg</code></td><td>1.25rem · 3rem</td><td>크기 변형별 지름</td></tr>
          <tr><td><code class="typo_code">--spin-border</code></td><td>3px</td><td>스피너 테두리 두께</td></tr>
          <tr><td><code class="typo_code">--spin-border-sm</code> · <code class="typo_code">--spin-border-lg</code></td><td>2px · 4px</td><td>크기 변형별 테두리</td></tr>
          <tr><td><code class="typo_code">--spin-duration</code></td><td>0.8s</td><td>회전 애니메이션 주기</td></tr>
          <tr><td><code class="typo_code">--spin-gap</code></td><td><code class="typo_code">var(--space-sm)</code></td><td>스피너·텍스트 간격</td></tr>
          <tr><td><code class="typo_code">--spin-tip-size</code></td><td><code class="typo_code">var(--text-size-sm)</code></td><td>설명 텍스트 크기</td></tr>
          <tr><td><code class="typo_code">--spin-overlay-bg</code></td><td>rgba(15, 20, 25, 0.72)</td><td>오버레이 배경 (tip 명도 대비용 불투명도)</td></tr>
          <tr><td><code class="typo_code">--spin-overlay-tip-color</code></td><td>#ffffff</td><td>오버레이 위 tip 텍스트 색</td></tr>
          <tr><td><code class="typo_code">--spin-wrap-min-height</code></td><td>8rem</td><td><code class="typo_code">spin_wrap-block</code> 최소 높이</td></tr>
          <tr><td><code class="typo_code">--spin-wrap-content-opacity</code></td><td>0.45</td><td>로딩 시 콘텐츠 불투명도</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=Q(I),m=K(I),U={title:"Components/피드백/Spin",id:"components-spin",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'로딩·처리 중 상태를 표시하는 Spin 컴포넌트입니다. 인라인 스피너, 설명 텍스트, 컨테이너 오버레이를 지원하며 role="status" · aria-busy · aria-label로 접근성을 보장합니다.'}}}},d={name:"기본",render:()=>s(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},a={name:"크기",render:()=>s(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},o={name:"색상",render:()=>s(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},t={name:"설명 텍스트",render:()=>s(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"인라인",render:()=>s(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"블록 정렬",render:()=>s(e[5]),parameters:{docs:{...n(e[5].previewHtml).docs,description:{story:e[5].description}}}},c={name:"컨테이너 오버레이",render:()=>s(e[6]),parameters:{docs:{...n(e[6].previewHtml).docs,description:{story:e[6].description}}}},p={name:"마크업",tags:["!dev"],render:()=>s(m[0]),parameters:{docs:{source:{code:null},description:{story:m[0].description}}}},l={name:"클래스 · 속성",tags:["!dev"],render:()=>s(m[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},u={name:"디자인 토큰",tags:["!dev"],render:()=>s(m[2]),parameters:{docs:{source:{code:null},description:{story:"Spin 크기·간격·오버레이에 사용하는 CSS 변수입니다."}}}};var _,v,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,h,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,w,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '색상',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,B,A;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '설명 텍스트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(A=(B=t.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var k,x,H;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '인라인',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(H=(x=r.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var f,E,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '블록 정렬',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(z=(E=i.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var T,M,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '컨테이너 오버레이',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,F,J;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(J=(F=p.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var N,P,W;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,q,G;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Spin 크기·간격·오버레이에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const V=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","ApiMarkup","ApiClasses","ApiTokens"];export{l as ApiClasses,p as ApiMarkup,u as ApiTokens,d as Demo0,a as Demo1,o as Demo2,t as Demo3,r as Demo4,i as Demo5,c as Demo6,V as __namedExportsOrder,U as default};
