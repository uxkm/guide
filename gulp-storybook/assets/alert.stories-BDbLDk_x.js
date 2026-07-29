import{b as n,c as s,e as P,d as Q}from"./gulp-demos-uIKTVH8x.js";const J=`<!-- @meta
title: Alert | HTML Components
activeNav: alert
pageTitle: Alert
-->
<div class="page_intro">
  <h1>Alert</h1>
  <p class="lead">중요한 정보나 피드백을 사용자에게 전달하는 알림 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">정보</div>
        <p class="alert_desc">변경 사항이 저장되었습니다.</p>
      </div>
    </div>

    <div class="alert color_success" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">성공</div>
        <p class="alert_desc">요청이 성공적으로 처리되었습니다.</p>
      </div>
    </div>

    <div class="alert color_warning" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">주의</div>
        <p class="alert_desc">세션이 곧 만료됩니다. 저장해 주세요.</p>
      </div>
    </div>

    <div class="alert color_error" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">오류</div>
        <p class="alert_desc">네트워크 연결을 확인해 주세요.</p>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="desc-only-heading">
  <div class="demo_section-header">
    <h2 id="desc-only-heading">설명만</h2>
    <p>제목 없이 alert_desc만으로 짧은 메시지를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <p class="alert_desc">새 기능이 추가되었습니다. 설정에서 확인해 보세요.</p>
      </div>
    </div>

    <div class="alert color_success" role="status">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
      </svg>
      <div class="alert_body">
        <p class="alert_desc">프로필이 업데이트되었습니다.</p>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="no-icon-heading">
  <div class="demo_section-header">
    <h2 id="no-icon-heading">아이콘 없음</h2>
    <p>alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert color_warning" role="alert">
      <div class="alert_body">
        <div class="alert_title">점검 안내</div>
        <p class="alert_desc">오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.</p>
      </div>
    </div>

    <div class="alert color_info" role="alert">
      <div class="alert_body">
        <p class="alert_desc">이 페이지는 데모 목적으로만 사용됩니다.</p>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>alert_sm · alert_lg로 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert alert_sm color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">Small</div>
        <p class="alert_desc">폼 필드 아래 등 좁은 영역에 사용합니다.</p>
      </div>
    </div>

    <div class="alert color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">Medium</div>
        <p class="alert_desc">기본 크기입니다.</p>
      </div>
    </div>

    <div class="alert alert_lg color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">Large</div>
        <p class="alert_desc">페이지 상단 등 눈에 띄는 안내에 사용합니다.</p>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="close-heading">
  <div class="demo_section-header">
    <h2 id="close-heading">닫기 가능</h2>
    <p>alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">새 소식</div>
        <p class="alert_desc">대시보드가 새롭게 개편되었습니다.</p>
      </div>
      <button type="button" class="alert_close" aria-label="알림 닫기">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="alert color_warning" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>
      </svg>
      <div class="alert_body">
        <p class="alert_desc">브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.</p>
      </div>
      <button type="button" class="alert_close" aria-label="알림 닫기">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="actions-heading">
  <div class="demo_section-header">
    <h2 id="actions-heading">액션</h2>
    <p>alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert color_error" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">저장 실패</div>
        <p class="alert_desc">변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.</p>
        <div class="alert_actions">
          <button type="button" class="btn btn_filled btn_sm color_danger"><span class="btn_label">다시 시도</span></button>
          <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>
        </div>
      </div>
    </div>

    <div class="alert color_info" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
      <div class="alert_body">
        <div class="alert_title">이용 약관 변경</div>
        <p class="alert_desc">2026년 3월 1일부터 새 약관이 적용됩니다.</p>
        <div class="alert_actions">
          <a href="#" class="link color_primary size_sm">약관 보기</a>
          <button type="button" class="btn btn_text btn_sm color_primary"><span class="btn_label">동의하기</span></button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="banner-heading">
  <div class="demo_section-header">
    <h2 id="banner-heading">배너</h2>
    <p>alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="alert alert_banner color_warning" role="alert">
      <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>
      </svg>
      <div class="alert_body">
        <p class="alert_desc">시스템 점검으로 일부 기능이 제한될 수 있습니다.</p>
      </div>
      <button type="button" class="alert_close" aria-label="알림 닫기">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="context-heading">
  <div class="demo_section-header">
    <h2 id="context-heading">문맥 속 사용</h2>
    <p>폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다.</p>
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

    <form class="form_layout" novalidate>
      <div class="alert color_error" role="alert">
        <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
        </svg>
        <div class="alert_body">
          <div class="alert_title">입력 내용을 확인해 주세요</div>
          <p class="alert_desc">이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.</p>
        </div>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="alert-ex-email">이메일</label>
        <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true">
      </div>
    </form>
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
            <td><code class="typo_code">alert</code></td>
            <td>알림 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">alert_sm</code> · <code class="typo_code">alert_lg</code></td>
            <td>크기 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">alert_banner</code></td>
            <td>전체 너비 배너 (좌우 테두리·모서리 반경 제거)</td>
          </tr>
          <tr>
            <td><code class="typo_code">alert_icon</code> · <code class="typo_code">alert_body</code> · <code class="typo_code">alert_title</code> · <code class="typo_code">alert_desc</code></td>
            <td>아이콘·본문·제목·설명</td>
          </tr>
          <tr>
            <td><code class="typo_code">alert_actions</code> · <code class="typo_code">alert_close</code></td>
            <td>후속 액션 · 닫기 버튼</td>
          </tr>
          <tr>
            <td><code class="typo_code">color_*</code></td>
            <td>공통 색상 유틸 (info · success · warning · error)</td>
          </tr>
          <tr>
            <td><code class="typo_code">role="alert"</code> · <code class="typo_code">role="status"</code></td>
            <td>긴급·상태 안내 시맨틱</td>
          </tr>
          <tr>
            <td><code class="typo_code">aria-label</code> · <code class="typo_code">aria-hidden</code></td>
            <td>닫기 버튼 라벨 · 장식 아이콘 숨김</td>
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
            <td><code class="typo_code">--alert-padding-y</code> · <code class="typo_code">--alert-padding-x</code> · <code class="typo_code">--alert-gap</code></td>
            <td><code class="typo_code">var(--space-md)</code> · <code class="typo_code">var(--space-lg)</code> · <code class="typo_code">var(--space-md)</code></td>
            <td>기본 패딩·간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--alert-font-size</code> · <code class="typo_code">--alert-line-height</code></td>
            <td><code class="typo_code">var(--text-size-base)</code> · 1.5</td>
            <td>기본 타이포</td>
          </tr>
          <tr>
            <td><code class="typo_code">--alert-title-weight</code> · <code class="typo_code">--alert-title-gap</code> · <code class="typo_code">--alert-desc-opacity</code></td>
            <td>600 · <code class="typo_code">var(--space-xs)</code> · 0.85</td>
            <td>제목·설명</td>
          </tr>
          <tr>
            <td><code class="typo_code">--alert-icon-size</code> · <code class="typo_code">--alert-icon-offset</code> · <code class="typo_code">--alert-close-size</code></td>
            <td>1.25rem · 0.1rem · 1.25rem</td>
            <td>아이콘·닫기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--alert-actions-gap</code> · <code class="typo_code">--alert-actions-margin-top</code></td>
            <td><code class="typo_code">var(--space-sm)</code></td>
            <td>액션 영역</td>
          </tr>
          <tr>
            <td><code class="typo_code">--alert-padding-y-sm</code> · <code class="typo_code">--alert-padding-x-sm</code> · <code class="typo_code">--alert-font-size-sm</code></td>
            <td><code class="typo_code">var(--space-sm)</code> · <code class="typo_code">var(--space-md)</code> · <code class="typo_code">var(--text-size-sm)</code></td>
            <td>sm 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--alert-padding-y-lg</code> · <code class="typo_code">--alert-padding-x-lg</code> · <code class="typo_code">--alert-font-size-lg</code></td>
            <td><code class="typo_code">var(--space-lg)</code> · <code class="typo_code">var(--space-xl)</code> · <code class="typo_code">var(--text-size-base)</code></td>
            <td>lg 크기</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=P(J),K=Q(J),U={title:"Components/피드백/Alert",id:"components-alert",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"중요한 정보나 피드백을 사용자에게 전달하는 알림 컴포넌트입니다."}}}},o={name:"기본",render:()=>n(e[0]),parameters:{docs:{...s(e[0].previewHtml).docs,description:{story:e[0].description}}}},t={name:"설명만",render:()=>n(e[1]),parameters:{docs:{...s(e[1].previewHtml).docs,description:{story:e[1].description}}}},r={name:"아이콘 없음",render:()=>n(e[2]),parameters:{docs:{...s(e[2].previewHtml).docs,description:{story:e[2].description}}}},a={name:"크기",render:()=>n(e[3]),parameters:{docs:{...s(e[3].previewHtml).docs,description:{story:e[3].description}}}},d={name:"닫기 가능",render:()=>n(e[4]),parameters:{docs:{...s(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"액션",render:()=>n(e[5]),parameters:{docs:{...s(e[5].previewHtml).docs,description:{story:e[5].description}}}},l={name:"배너",render:()=>n(e[6]),parameters:{docs:{...s(e[6].previewHtml).docs,description:{story:e[6].description}}}},i={name:"문맥 속 사용",render:()=>n(e[7]),parameters:{docs:{...s(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"클래스 · 속성",tags:["!dev"],render:()=>n(K[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>n(K[1]),parameters:{docs:{source:{code:null},description:{story:"Alert 패딩·타이포·아이콘·액션에 사용하는 CSS 변수입니다."}}}};var m,_,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(_=o.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};var h,y,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '설명만',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,C,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '아이콘 없음',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,x,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,D,M;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '닫기 가능',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var S,A,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '액션',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var z,L,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '배너',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var T,O,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '문맥 속 사용',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(F=(O=i.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var V,N,j;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,G,I;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Alert 패딩·타이포·아이콘·액션에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(I=(G=v.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const W=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","ApiClasses","ApiTokens"];export{p as ApiClasses,v as ApiTokens,o as Demo0,t as Demo1,r as Demo2,a as Demo3,d as Demo4,c as Demo5,l as Demo6,i as Demo7,W as __namedExportsOrder,U as default};
