import{b as n,g as s,e as de,c as ce}from"./gulp-demos-C1efgjoy.js";const te=`<!-- @meta
title: Tag | HTML Components
activeNav: tag
pageTitle: Tag
-->
<div class="page_intro">
  <h1>Tag</h1>
  <p class="lead">카테고리, 필터, 선택 항목을 표시하는 태그 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본 (Filled)</h2>
    <p>연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tag color_default">Default</span>
    <span class="tag color_primary">Primary</span>
    <span class="tag color_success">Success</span>
    <span class="tag color_warning">Warning</span>
    <span class="tag color_danger">Danger</span>
    <span class="tag color_info">Info</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="solid-heading">
  <div class="demo_section-header">
    <h2 id="solid-heading">솔리드</h2>
    <p>tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tag tag_solid color_default">Default</span>
    <span class="tag tag_solid color_primary">Primary</span>
    <span class="tag tag_solid color_success">Success</span>
    <span class="tag tag_solid color_warning">Warning</span>
    <span class="tag tag_solid color_danger">Danger</span>
    <span class="tag tag_solid color_info">Info</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="outline-heading">
  <div class="demo_section-header">
    <h2 id="outline-heading">아웃라인</h2>
    <p>tag_outline으로 배경 없이 테두리만 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tag tag_outline color_default">Default</span>
    <span class="tag tag_outline color_primary">Primary</span>
    <span class="tag tag_outline color_success">Success</span>
    <span class="tag tag_outline color_warning">Warning</span>
    <span class="tag tag_outline color_danger">Danger</span>
    <span class="tag tag_outline color_info">Info</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="tag_group tag_group-tight" role="group">
      <span class="tag tag_sm color_primary">Small</span>
      <span class="tag color_primary">Medium</span>
      <span class="tag tag_lg color_primary">Large</span>
    </div>
    <div class="tag_group tag_group-tight" role="group">
      <span class="tag tag_sm tag_outline color_success">Small</span>
      <span class="tag tag_outline color_success">Medium</span>
      <span class="tag tag_lg tag_outline color_success">Large</span>
    </div>
    <div class="tag_group tag_group-tight" role="group">
      <span class="tag tag_sm tag_solid color_danger">Small</span>
      <span class="tag tag_solid color_danger">Medium</span>
      <span class="tag tag_lg tag_solid color_danger">Large</span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="round-heading">
  <div class="demo_section-header">
    <h2 id="round-heading">둥근</h2>
    <p>tag_round로 pill 형태의 모서리를 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tag tag_round color_primary">Filled</span>
    <span class="tag tag_round tag_outline color_primary">Outline</span>
    <span class="tag tag_round tag_solid color_primary">Solid</span>
    <span class="tag tag_round tag_borderless color_default">Borderless</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘</h2>
    <p>tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tag color_primary">
      <span class="tag_icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </span>
      Design
    </span>
    <span class="tag tag_outline color_success">
      <span class="tag_icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
        </svg>
      </span>
      Verified
    </span>
    <span class="tag tag_solid color_danger">
      <span class="tag_icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      </span>
      Error
    </span>
    <span class="tag tag_sm tag_round color_default">
      <span class="tag_icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      </span>
      User
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="close-heading">
  <div class="demo_section-header">
    <h2 id="close-heading">닫기 가능</h2>
    <p>tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="tag_group tag_group-tight" role="group">
      <span class="tag color_primary">
        React
        <button type="button" class="tag_close" aria-label="React 태그 제거">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </span>
      <span class="tag tag_outline color_default">
        Svelte
        <button type="button" class="tag_close" aria-label="Svelte 태그 제거">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </span>
      <span class="tag tag_solid color_danger">
        Deprecated
        <button type="button" class="tag_close" aria-label="Deprecated 태그 제거">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </span>
    </div>
    <div class="tag_group tag_group-tight" role="group">
      <span class="tag tag_round color_success">
        <span class="tag_icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          </svg>
        </span>
        Frontend
        <button type="button" class="tag_close" aria-label="Frontend 태그 제거">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="checkable-heading">
  <div class="demo_section-header">
    <h2 id="checkable-heading">선택 가능</h2>
    <p>tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="tag_group" role="group" aria-label="카테고리 필터">
      <button type="button" class="tag tag_checkable color_default is-selected" aria-pressed="true">전체</button>
      <button type="button" class="tag tag_checkable color_default" aria-pressed="false">UI</button>
      <button type="button" class="tag tag_checkable color_default" aria-pressed="false">UX</button>
      <button type="button" class="tag tag_checkable color_default" aria-pressed="false">개발</button>
    </div>

    <div class="tag_group" role="group" aria-label="상태 필터">
      <button type="button" class="tag tag_checkable tag_round color_primary is-selected" aria-pressed="true">진행 중</button>
      <button type="button" class="tag tag_checkable tag_round color_success is-selected" aria-pressed="true">완료</button>
      <button type="button" class="tag tag_checkable tag_round color_warning" aria-pressed="false">보류</button>
      <button type="button" class="tag tag_checkable tag_round color_danger" aria-pressed="false">취소</button>
    </div>

    <div class="tag_group tag_group-tight" role="group">
      <button type="button" class="tag tag_sm tag_checkable color_default is-selected" aria-pressed="true">S</button>
      <button type="button" class="tag tag_sm tag_checkable color_default" aria-pressed="false">M</button>
      <button type="button" class="tag tag_sm tag_checkable color_default" aria-pressed="false">L</button>
      <button type="button" class="tag tag_sm tag_checkable color_default" aria-pressed="false">XL</button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="add-heading">
  <div class="demo_section-header">
    <h2 id="add-heading">추가</h2>
    <p>tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="tag tag_add tag_round">
      <span class="tag_icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </span>
      태그 추가
    </button>
    <button type="button" class="tag tag_add tag_sm">+ New Tag</button>
    <button type="button" class="tag tag_add tag_lg tag_round">+ 카테고리 추가</button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="link-heading">
  <div class="demo_section-header">
    <h2 id="link-heading">링크</h2>
    <p>a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다.</p>
  </div>

  <div class="demo_section-preview">
    <a href="#" class="tag color_primary">문서 보기</a>
    <a href="#" class="tag tag_outline color_primary">가이드</a>
    <a href="#" class="tag tag_solid color_primary">바로가기</a>
    <a href="#" class="tag tag_round tag_outline color_success">
      <span class="tag_icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>
        </svg>
      </span>
      외부 링크
    </a>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p>is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tag color_primary is-disabled">Filled</span>
    <span class="tag tag_outline color_success is-disabled">Outline</span>
    <span class="tag tag_solid color_danger is-disabled">Solid</span>
    <button type="button" class="tag tag_checkable color_default is-selected is-disabled" disabled>선택됨 (비활성)</button>
    <button type="button" class="tag tag_add is-disabled" disabled>태그 추가 (비활성)</button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">그룹</h2>
    <p>tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="tag_group" role="group">
      <span class="tag color_primary">HTML</span>
      <span class="tag color_primary">CSS</span>
      <span class="tag color_primary">JavaScript</span>
      <span class="tag color_default">TypeScript</span>
      <span class="tag color_success">SCSS</span>
    </div>

    <div>
      <p class="color_muted size_sm" style="margin-bottom: 0.5rem;">선택된 기술 스택</p>
      <div class="tag_group tag_group-tight" role="group">
        <span class="tag tag_round color_primary">
          React
          <button type="button" class="tag_close" aria-label="React 태그 제거">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </span>
        <span class="tag tag_round color_primary">
          Next.js
          <button type="button" class="tag_close" aria-label="Next.js 태그 제거">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </span>
        <button type="button" class="tag tag_add tag_round tag_sm">+ 추가</button>
      </div>
    </div>
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
            <td><code class="typo_code">tag</code></td>
            <td>태그 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">tag_solid</code> · <code class="typo_code">tag_outline</code> · <code class="typo_code">tag_borderless</code></td>
            <td>스킨 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">tag_sm</code> · <code class="typo_code">tag_lg</code> · <code class="typo_code">tag_round</code></td>
            <td>크기·형태</td>
          </tr>
          <tr>
            <td><code class="typo_code">tag_checkable</code> · <code class="typo_code">tag_add</code></td>
            <td>인터랙션 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">tag_icon</code> · <code class="typo_code">tag_close</code></td>
            <td>내부 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">tag_group</code> · <code class="typo_code">tag_group-tight</code></td>
            <td>태그 묶음</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-selected</code> · <code class="typo_code">is-disabled</code></td>
            <td>상태 클래스</td>
          </tr>
          <tr>
            <td><code class="typo_code">color_*</code></td>
            <td>공통 색상 유틸</td>
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
            <td><code class="typo_code">--tag-font-size</code> · <code class="typo_code">--tag-padding-y</code> · <code class="typo_code">--tag-padding-x</code></td>
            <td>—</td>
            <td>기본 태그 타이포·패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--tag-gap</code></td>
            <td>var(--space-xs)</td>
            <td>아이콘·텍스트 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--tag-close-size</code></td>
            <td>0.875rem</td>
            <td>닫기 버튼 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--tag-add-border-style</code></td>
            <td>dashed</td>
            <td>추가 태그 테두리</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=de(te),re=ce(te),le={title:"Components/데이터 표시/Tag",id:"components-tag",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"카테고리, 필터, 선택 항목을 표시하는 태그 컴포넌트입니다."}}}},a={name:"기본 (Filled)",render:()=>n(e[0]),parameters:{docs:{...s(e[0].previewHtml).docs,description:{story:e[0].description}}}},o={name:"솔리드",render:()=>n(e[1]),parameters:{docs:{...s(e[1].previewHtml).docs,description:{story:e[1].description}}}},t={name:"아웃라인",render:()=>n(e[2]),parameters:{docs:{...s(e[2].previewHtml).docs,description:{story:e[2].description}}}},r={name:"크기",render:()=>n(e[3]),parameters:{docs:{...s(e[3].previewHtml).docs,description:{story:e[3].description}}}},d={name:"둥근",render:()=>n(e[4]),parameters:{docs:{...s(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"아이콘",render:()=>n(e[5]),parameters:{docs:{...s(e[5].previewHtml).docs,description:{story:e[5].description}}}},i={name:"닫기 가능",render:()=>n(e[6]),parameters:{docs:{...s(e[6].previewHtml).docs,description:{story:e[6].description}}}},l={name:"선택 가능",render:()=>n(e[7]),parameters:{docs:{...s(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"추가",render:()=>n(e[8]),parameters:{docs:{...s(e[8].previewHtml).docs,description:{story:e[8].description}}}},u={name:"링크",render:()=>n(e[9]),parameters:{docs:{...s(e[9].previewHtml).docs,description:{story:e[9].description}}}},g={name:"비활성",render:()=>n(e[10]),parameters:{docs:{...s(e[10].previewHtml).docs,description:{story:e[10].description}}}},m={name:"그룹",render:()=>n(e[11]),parameters:{docs:{...s(e[11].previewHtml).docs,description:{story:e[11].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>n(re[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>n(re[1]),parameters:{docs:{source:{code:null},description:{story:"Tag 타이포·패딩·닫기·추가 테두리에 사용하는 CSS 변수입니다."}}}};var b,h,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '기본 (Filled)',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,w,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '솔리드',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var f,S,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '아웃라인',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,x,H;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(x=r.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var M,A,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '둥근',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var T,F,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var O,z,V;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '닫기 가능',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var I,N,R;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '선택 가능',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var P,U,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '추가',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,X,J;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '링크',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(J=(X=u.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var q,G,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Y,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '그룹',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ne=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,ae,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Tag 타이포·패딩·닫기·추가 테두리에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(oe=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const pe=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","ApiClasses","ApiTokens"];export{_ as ApiClasses,v as ApiTokens,a as Demo0,o as Demo1,g as Demo10,m as Demo11,t as Demo2,r as Demo3,d as Demo4,c as Demo5,i as Demo6,l as Demo7,p as Demo8,u as Demo9,pe as __namedExportsOrder,le as default};
