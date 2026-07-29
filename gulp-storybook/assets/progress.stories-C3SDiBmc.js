import{b as e,c as $,g as r,e as ss}from"./gulp-demos-C1efgjoy.js";const Z=`<!-- @meta
title: Progress | HTML Components
activeNav: progress
pageTitle: Progress
-->
<div class="page_intro">
  <h1>Progress</h1>
  <p class="lead">작업 진행률을 시각적으로 표시하는 Progress 컴포넌트입니다. 선형·원형, 색상·크기 변형, 줄무늬·불확정 상태를 지원하며 <code class="typo_code">role="progressbar"</code> · <code class="typo_code">aria-valuenow</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">progress</code> · <code class="typo_code">progress_track</code> · <code class="typo_code">progress_bar</code>로 트랙과 채움 막대를 구성합니다. <code class="typo_code">progress_bar</code>의 <code class="typo_code">style="width: …"</code> 또는 CSS 변수로 진행률을 제어합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 0%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 30%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 60%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_success">
      <div class="progress_track" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 100%"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="label-heading">
  <div class="demo_section-header">
    <h2 id="label-heading">레이블 · 값</h2>
    <p><code class="typo_code">progress_header</code>에 <code class="typo_code">progress_label</code> · <code class="typo_code">progress_value</code>를 함께 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit color_primary">
      <div class="progress_header">
        <span class="progress_label">파일 업로드</span>
        <span class="progress_value">42%</span>
      </div>
      <div class="progress_track" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-label="파일 업로드 진행률">
        <span class="progress_bar" style="width: 42%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_primary">
      <div class="progress_header">
        <span class="progress_label">데이터 동기화</span>
        <span class="progress_value">67%</span>
      </div>
      <div class="progress_track" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" aria-label="데이터 동기화 진행률">
        <span class="progress_bar" style="width: 67%"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>공통 <code class="typo_code">color_*</code> 클래스로 의미를 표현합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="Primary 진행률">
        <span class="progress_bar" style="width: 50%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_success">
      <div class="progress_track" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Success 진행률">
        <span class="progress_bar" style="width: 100%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_warning">
      <div class="progress_track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Warning 진행률">
        <span class="progress_bar" style="width: 75%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_danger">
      <div class="progress_track" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" aria-label="Danger 진행률">
        <span class="progress_bar" style="width: 35%"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">progress_sm</code> · <code class="typo_code">progress</code>(기본) · <code class="typo_code">progress_lg</code> 세 가지 높이를 지원합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit progress_sm color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 40%"></span>
      </div>
    </div>

    <div class="progress progress_fit color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 55%"></span>
      </div>
    </div>

    <div class="progress progress_fit progress_lg color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 70%"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="striped-heading">
  <div class="demo_section-header">
    <h2 id="striped-heading">줄무늬 · 애니메이션</h2>
    <p><code class="typo_code">progress_striped</code>로 줄무늬 패턴을, <code class="typo_code">progress_animated</code>와 함께 사용하면 흐르는 애니메이션을 적용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit progress_striped color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="줄무늬 진행률">
        <span class="progress_bar" style="width: 45%"></span>
      </div>
    </div>

    <div class="progress progress_fit progress_striped progress_animated color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="애니메이션 진행률">
        <span class="progress_bar" style="width: 65%"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="indeterminate-heading">
  <div class="demo_section-header">
    <h2 id="indeterminate-heading">불확정</h2>
    <p>진행률을 알 수 없을 때 <code class="typo_code">is-indeterminate</code>를 사용합니다. <code class="typo_code">aria-valuenow</code>를 생략하거나 <code class="typo_code">aria-busy="true"</code>를 함께 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit is-indeterminate color_primary">
      <div class="progress_track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="처리 중" aria-busy="true">
        <span class="progress_bar"></span>
      </div>
    </div>

    <div class="progress progress_fit is-indeterminate color_success">
      <div class="progress_header">
        <span class="progress_label">동기화 중…</span>
      </div>
      <div class="progress_track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="동기화 중" aria-busy="true">
        <span class="progress_bar"></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="inside-heading">
  <div class="demo_section-header">
    <h2 id="inside-heading">바 안 텍스트</h2>
    <p><code class="typo_code">progress_inside</code>로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit progress_inside color_primary">
      <div class="progress_track" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 25%">25%</span>
      </div>
    </div>

    <div class="progress progress_fit progress_lg progress_inside color_success">
      <div class="progress_track" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 80%">80%</span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="circle-heading">
  <div class="demo_section-header">
    <h2 id="circle-heading">원형</h2>
    <p><code class="typo_code">progress_circle</code>로 원형 진행률을 표시합니다. <code class="typo_code">style="--progress-percent: …"</code>로 채움 비율을 지정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="progress progress_circle color_primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: 25">
      <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle class="progress_circle-track" cx="50" cy="50" r="45" />
        <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span class="progress_circle-value">25%</span>
    </div>

    <div class="progress progress_circle color_success" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: 68">
      <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle class="progress_circle-track" cx="50" cy="50" r="45" />
        <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span class="progress_circle-value">68%</span>
    </div>

    <div class="progress progress_circle progress_sm color_warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: 50">
      <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle class="progress_circle-track" cx="50" cy="50" r="45" />
        <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span class="progress_circle-value">50%</span>
    </div>

    <div class="progress progress_circle progress_lg color_danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: 90">
      <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle class="progress_circle-track" cx="50" cy="50" r="45" />
        <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span class="progress_circle-value">90%</span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p><code class="typo_code">progress_fit</code>은 최대 너비를 제한하고, <code class="typo_code">progress_block</code>은 부모 너비 전체를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="progress progress_fit color_primary">
      <div class="progress_header">
        <span class="progress_label">progress_fit</span>
        <span class="progress_value">50%</span>
      </div>
      <div class="progress_track" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 50%"></span>
      </div>
    </div>

    <div class="progress progress_block color_primary">
      <div class="progress_header">
        <span class="progress_label">progress_block — 전체 너비</span>
        <span class="progress_value">72%</span>
      </div>
      <div class="progress_track" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="진행률">
        <span class="progress_bar" style="width: 72%"></span>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>선형 Progress는 <code class="typo_code">progress_track</code>에 <code class="typo_code">role="progressbar"</code>를 지정하고, <code class="typo_code">progress_bar</code>의 <code class="typo_code">style="width: …"</code>로 진행률을 제어합니다. 원형은 <code class="typo_code">--progress-percent</code> CSS 변수를 사용합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- 선형 기본 --&gt;
&lt;div class="progress progress_fit color_primary"&gt;
  &lt;div class="progress_header"&gt;
    &lt;span class="progress_label"&gt;업로드 중&lt;/span&gt;
    &lt;span class="progress_value"&gt;60%&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="progress_track" role="progressbar"
    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
    aria-label="업로드 진행률"&gt;
    &lt;span class="progress_bar" style="width: 60%"&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 불확정 --&gt;
&lt;div class="progress progress_fit is-indeterminate color_primary"&gt;
  &lt;div class="progress_track" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" aria-label="처리 중" aria-busy="true"&gt;
    &lt;span class="progress_bar"&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 원형 --&gt;
&lt;div class="progress progress_circle color_primary" role="progressbar"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  aria-label="진행률" style="--progress-percent: 75"&gt;
  &lt;svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true"&gt;
    &lt;circle class="progress_circle-track" cx="50" cy="50" r="45" /&gt;
    &lt;circle class="progress_circle-bar" cx="50" cy="50" r="45" /&gt;
  &lt;/svg&gt;
  &lt;span class="progress_circle-value"&gt;75%&lt;/span&gt;
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
          <tr><td><code class="typo_code">progress · progress_track · progress_bar</code></td><td>선형 진행률</td></tr>
          <tr><td><code class="typo_code">progress_circle · progress_circle-svg · progress_circle-value</code></td><td>원형 진행률</td></tr>
          <tr><td><code class="typo_code">progress_header · progress_label · progress_value</code></td><td>헤더</td></tr>
          <tr><td><code class="typo_code">progress_sm · progress_lg · progress_fit · progress_block</code></td><td>크기·너비</td></tr>
          <tr><td><code class="typo_code">progress_striped · progress_animated · progress_inside</code></td><td>스타일</td></tr>
          <tr><td><code class="typo_code">is-indeterminate</code></td><td>불확정 상태</td></tr>
          <tr><td><code class="typo_code">color_primary · color_success · color_warning · color_danger</code></td><td>색상</td></tr>
          <tr><td><code class="typo_code">--progress-percent</code></td><td>원형 채움 비율 (0–100)</td></tr>
          <tr><td><code class="typo_code">role="progressbar"</code> · <code class="typo_code">aria-valuenow</code> · <code class="typo_code">aria-busy</code></td><td>접근성</td></tr>
        </tbody>
      </table>
    </div>

    <p class="form_field-hint" style="margin-top: var(--space-md);">진행률은 <code class="typo_code">progress_bar</code>의 <code class="typo_code">style="width: N%"</code> 또는 JS로 업데이트합니다. 시각적 <code class="typo_code">progress_value</code>와 <code class="typo_code">aria-valuenow</code>를 함께 맞춰 주세요.</p>
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
          <tr><td><code class="typo_code">--progress-height</code> · <code class="typo_code">--progress-height-sm</code> · <code class="typo_code">--progress-height-lg</code></td><td>8px · 4px · 12px</td><td>선형 트랙 높이</td></tr>
          <tr><td><code class="typo_code">--progress-inside-height</code> · <code class="typo_code">--progress-inside-height-sm</code> · <code class="typo_code">--progress-inside-height-lg</code></td><td>1.25rem · 1rem · 1.5rem</td><td>바 안 텍스트 높이</td></tr>
          <tr><td><code class="typo_code">--progress-max-width</code></td><td><code class="typo_code">var(--input-max-width)</code></td><td><code class="typo_code">progress_fit</code> 최대 너비</td></tr>
          <tr><td><code class="typo_code">--progress-circle-size</code> · <code class="typo_code">--progress-circle-stroke</code></td><td>7.5rem · 6</td><td>원형 크기·stroke</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,s=ss(Z),_=$(Z),rs={title:"Components/피드백/Progress",id:"components-progress",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'작업 진행률을 시각적으로 표시하는 Progress 컴포넌트입니다. 선형·원형, 색상·크기 변형, 줄무늬·불확정 상태를 지원하며 role="progressbar" · aria-valuenow로 접근성을 보장합니다.'}}}},a={name:"기본",render:()=>e(s[0]),parameters:{docs:{...r(s[0].previewHtml).docs,description:{story:s[0].description}}}},o={name:"레이블 · 값",render:()=>e(s[1]),parameters:{docs:{...r(s[1].previewHtml).docs,description:{story:s[1].description}}}},n={name:"색상",render:()=>e(s[2]),parameters:{docs:{...r(s[2].previewHtml).docs,description:{story:s[2].description}}}},c={name:"크기",render:()=>e(s[3]),parameters:{docs:{...r(s[3].previewHtml).docs,description:{story:s[3].description}}}},i={name:"줄무늬 · 애니메이션",render:()=>e(s[4]),parameters:{docs:{...r(s[4].previewHtml).docs,description:{story:s[4].description}}}},d={name:"불확정",render:()=>e(s[5]),parameters:{docs:{...r(s[5].previewHtml).docs,description:{story:s[5].description}}}},t={name:"바 안 텍스트",render:()=>e(s[6]),parameters:{docs:{...r(s[6].previewHtml).docs,description:{story:s[6].description}}}},l={name:"원형",render:()=>e(s[7]),parameters:{docs:{...r(s[7].previewHtml).docs,description:{story:s[7].description}}}},p={name:"너비",render:()=>e(s[8]),parameters:{docs:{...r(s[8].previewHtml).docs,description:{story:s[8].description}}}},g={name:"마크업",tags:["!dev"],render:()=>e(_[0]),parameters:{docs:{source:{code:null},description:{story:_[0].description}}}},v={name:"클래스 · 속성",tags:["!dev"],render:()=>e(_[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},m={name:"디자인 토큰",tags:["!dev"],render:()=>e(_[2]),parameters:{docs:{source:{code:null},description:{story:"Progress 높이·바 안 텍스트·원형·줄무늬에 사용하는 CSS 변수입니다."}}}};var u,y,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,w,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '레이블 · 값',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var x,D,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(D=n.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var B,S,f;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var A,H,P;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '줄무늬 · 애니메이션',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(P=(H=i.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,T,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '불확정',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(M=(T=d.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var O,z,L;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '바 안 텍스트',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var N,F,J;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '원형',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(J=(F=l.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var W,j,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '너비',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,I,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(I=g.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var Q,R,U;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Progress 높이·바 안 텍스트·원형·줄무늬에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const as=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","ApiMarkup","ApiClasses","ApiTokens"];export{v as ApiClasses,g as ApiMarkup,m as ApiTokens,a as Demo0,o as Demo1,n as Demo2,c as Demo3,i as Demo4,d as Demo5,t as Demo6,l as Demo7,p as Demo8,as as __namedExportsOrder,rs as default};
