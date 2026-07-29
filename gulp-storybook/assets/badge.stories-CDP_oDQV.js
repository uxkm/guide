import{b as n,g as s,e as T,c as M}from"./gulp-demos-C1efgjoy.js";const O=`<!-- @meta
title: Badge | HTML Components
activeNav: badge
pageTitle: Badge
-->
<div class="page_intro">
  <h1>Badge</h1>
  <p class="lead">상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>공통 color_* 클래스로 의미에 따른 색상을 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="badge color_default">Default</span>
    <span class="badge color_primary">Primary</span>
    <span class="badge color_success">Success</span>
    <span class="badge color_warning">Warning</span>
    <span class="badge color_danger">Danger</span>
    <span class="badge color_info">Info</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>badge_sm · badge_lg로 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="badge badge_sm color_primary">Small</span>
    <span class="badge color_primary">Medium</span>
    <span class="badge badge_lg color_primary">Large</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="dot-heading">
  <div class="demo_section-header">
    <h2 id="dot-heading">Dot 배지</h2>
    <p>badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="badge color_primary badge_dot">Online</span>
    <span class="badge color_success badge_dot">Active</span>
    <span class="badge color_warning badge_dot">Away</span>
    <span class="badge color_danger badge_dot">Offline</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="count-heading">
  <div class="demo_section-header">
    <h2 id="count-heading">카운트</h2>
    <p>badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="badge badge_count color_danger">3</span>
    <span class="badge badge_count color_primary">12</span>
    <span class="badge badge_count color_success">99+</span>
    <span class="badge badge_count badge_sm color_danger">5</span>
    <span class="badge badge_count badge_lg color_primary">New</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="wrap-heading">
  <div class="demo_section-header">
    <h2 id="wrap-heading">겹침 표시</h2>
    <p>badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="badge_wrap">
      <button type="button" class="btn btn_filled color_primary">
        <span class="btn_label">알림</span>
      </button>
      <span class="badge badge_count color_danger" aria-label="읽지 않은 알림 5건">5</span>
    </span>

    <span class="badge_wrap">
      <button type="button" class="btn btn_ghost btn_icon-only" aria-label="메시지">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
      <span class="badge badge_count color_danger" aria-label="새 메시지 12건">12</span>
    </span>

    <span class="badge_wrap">
      <span class="avatar color_primary" aria-hidden="true">홍</span>
      <span class="badge_dot-only color_success" role="status" aria-label="온라인"></span>
    </span>
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
            <td><code class="typo_code">badge</code></td>
            <td>배지 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">badge_sm</code> · <code class="typo_code">badge_lg</code></td>
            <td>크기 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">badge_dot</code> · <code class="typo_code">badge_count</code> · <code class="typo_code">badge_dot-only</code></td>
            <td>형태 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">badge_wrap</code></td>
            <td>겹침 배치 컨테이너</td>
          </tr>
          <tr>
            <td><code class="typo_code">color_*</code></td>
            <td>공통 색상 유틸</td>
          </tr>
          <tr>
            <td><code class="typo_code">aria-label</code></td>
            <td>카운트·점만 표시 등 접근성 라벨</td>
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
            <td><code class="typo_code">--badge-font-size</code> · <code class="typo_code">--badge-padding-y</code> · <code class="typo_code">--badge-padding-x</code></td>
            <td>—</td>
            <td>기본 배지 타이포·패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--badge-dot-size</code> · <code class="typo_code">--badge-dot-size-sm</code> · <code class="typo_code">--badge-dot-size-lg</code></td>
            <td>6px · 5px · 7px</td>
            <td>점 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--badge-count-min-width</code></td>
            <td>1.25rem</td>
            <td>카운트 최소 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--badge-overlay-border</code></td>
            <td>2px</td>
            <td>겹침 시 테두리</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=T(O),k=M(O),N={title:"Components/데이터 표시/Badge",id:"components-badge",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다."}}}},a={name:"기본",render:()=>n(e[0]),parameters:{docs:{...s(e[0].previewHtml).docs,description:{story:e[0].description}}}},o={name:"크기",render:()=>n(e[1]),parameters:{docs:{...s(e[1].previewHtml).docs,description:{story:e[1].description}}}},d={name:"Dot 배지",render:()=>n(e[2]),parameters:{docs:{...s(e[2].previewHtml).docs,description:{story:e[2].description}}}},t={name:"카운트",render:()=>n(e[3]),parameters:{docs:{...s(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"겹침 표시",render:()=>n(e[4]),parameters:{docs:{...s(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"클래스 · 속성",tags:["!dev"],render:()=>n(k[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},i={name:"디자인 토큰",tags:["!dev"],render:()=>n(k[1]),parameters:{docs:{source:{code:null},description:{story:"Badge 타이포·점·카운트·겹침에 사용하는 CSS 변수입니다."}}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var _,C,v;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Dot 배지',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var y,h,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '카운트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var w,B,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '겹침 표시',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(S=(B=r.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var A,x,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(x=c.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var f,E,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Badge 타이포·점·카운트·겹침에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(z=(E=i.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const F=["Demo0","Demo1","Demo2","Demo3","Demo4","ApiClasses","ApiTokens"];export{c as ApiClasses,i as ApiTokens,a as Demo0,o as Demo1,d as Demo2,t as Demo3,r as Demo4,F as __namedExportsOrder,N as default};
