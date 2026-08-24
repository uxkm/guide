import{b as d,c as s,e as oe,d as te}from"./gulp-demos-uIKTVH8x.js";const ce=`<!-- @meta
title: Card | HTML Components
activeNav: card
pageTitle: Card
-->
<div class="page_intro">
  <h1>Card</h1>
  <p class="lead">콘텐츠를 그룹화하여 표시하는 카드 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>card_header · card_body · card_footer 구조를 가집니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card" style="max-width: 360px; width: 100%;">
      <div class="card_header">
        <div class="card_header-main">
          <h3 class="card_title">카드 제목</h3>
          <p class="card_subtitle">부제목 또는 메타 정보</p>
        </div>
      </div>
      <div class="card_body">
        카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
      </div>
      <div class="card_footer">
        <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">확인</span></button>
        <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="simple-heading">
  <div class="demo_section-header">
    <h2 id="simple-heading">간단</h2>
    <p>header나 footer 없이 body만 사용하는 단순 카드입니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card card_shadow card_compact" style="max-width: 280px; width: 100%;">
      <div class="card_body">
        <p class="card_title">알림</p>
        새로운 메시지가 도착했습니다. 확인해 주세요.
      </div>
    </article>

    <article class="card card_compact" style="max-width: 280px; width: 100%;">
      <div class="card_body">
        컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="skin-heading">
  <div class="demo_section-header">
    <h2 id="skin-heading">스킨</h2>
    <p>기본은 테두리·그림자가 적용됩니다. card_shadow · card_ghost · card_elevated로 외형을 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="card_deck card_deck-2">
      <article class="card">
        <div class="card_body">기본 — 테두리 · 그림자</div>
      </article>
      <article class="card card_shadow">
        <div class="card_body">Shadow — 그림자</div>
      </article>
      <article class="card card_elevated">
        <div class="card_body">Elevated — 강한 그림자</div>
      </article>
      <article class="card card_ghost">
        <div class="card_body">Ghost — 투명 배경</div>
      </article>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>card_sm · card_lg · card_compact로 패딩과 제목 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="card_deck card_deck-2">
      <article class="card card_sm">
        <div class="card_header">
          <h3 class="card_title">Small</h3>
        </div>
        <div class="card_body">작은 카드 — 좁은 패딩과 작은 제목.</div>
      </article>
      <article class="card">
        <div class="card_header">
          <h3 class="card_title">Medium</h3>
        </div>
        <div class="card_body">기본 크기 카드입니다.</div>
      </article>
      <article class="card card_lg">
        <div class="card_header">
          <h3 class="card_title">Large</h3>
        </div>
        <div class="card_body">큰 카드 — 넓은 패딩과 큰 제목.</div>
      </article>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="accent-heading">
  <div class="demo_section-header">
    <h2 id="accent-heading">강조 테두리</h2>
    <p>card_accent와 color_*로 왼쪽 강조선을 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="card_deck card_deck-2">
      <article class="card card_accent color_primary">
        <div class="card_body">
          <p class="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </div>
      </article>
      <article class="card card_accent color_success">
        <div class="card_body">
          <p class="card_title">성공</p>
          작업이 정상적으로 완료되었습니다.
        </div>
      </article>
      <article class="card card_accent color_warning">
        <div class="card_body">
          <p class="card_title">주의</p>
          저장 공간이 부족합니다.
        </div>
      </article>
      <article class="card card_accent color_danger">
        <div class="card_body">
          <p class="card_title">오류</p>
          연결에 실패했습니다. 다시 시도해 주세요.
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="media-heading">
  <div class="demo_section-header">
    <h2 id="media-heading">미디어</h2>
    <p>card_media로 상단 이미지·썸네일 영역을 추가합니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card card_hover card_shadow" style="max-width: 320px; width: 100%;">
      <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
        </svg>
      </div>
      <div class="card_header">
        <div class="card_header-main">
          <div class="card_header-row">
            <h3 class="card_title">프로젝트 Alpha</h3>
            <span class="tag tag_sm color_primary">진행 중</span>
          </div>
          <p class="card_subtitle">업데이트 · 2일 전</p>
        </div>
      </div>
      <div class="card_body">
        디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.
      </div>
      <div class="card_footer card_footer-between">
        <span class="color_muted size_sm">3명 참여</span>
        <button type="button" class="btn btn_text color_primary btn_sm"><span class="btn_label">자세히</span></button>
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="horizontal-heading">
  <div class="demo_section-header">
    <h2 id="horizontal-heading">가로</h2>
    <p>card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card card_horizontal card_shadow" style="max-width: 480px; width: 100%;">
      <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
        </svg>
      </div>
      <div class="card_inner">
        <div class="card_header">
          <h3 class="card_title">가이드 문서</h3>
        </div>
        <div class="card_body">
          HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.
        </div>
        <div class="card_footer">
          <a href="#" class="link color_primary size_sm">문서 보기</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘 · 통계</h2>
    <p>card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="card_deck">
      <article class="card card_shadow card_hover">
        <div class="card_body">
          <span class="card_icon color_primary" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </span>
          <h3 class="card_title">빠른 성능</h3>
          <p class="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </div>
      </article>
      <article class="card card_shadow card_hover">
        <div class="card_body">
          <span class="card_icon color_success" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </span>
          <h3 class="card_title">접근성</h3>
          <p class="card_subtitle">WCAG 2.2 AA 기준</p>
        </div>
      </article>
      <article class="card card_shadow">
        <div class="card_body">
          <div class="stat">
            <span class="stat_label">월간 활성 사용자</span>
            <span class="stat_value">24.5K</span>
            <span class="stat_desc color_success">+18.2%</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="profile-heading">
  <div class="demo_section-header">
    <h2 id="profile-heading">프로필</h2>
    <p>card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card card_shadow" style="max-width: 320px; width: 100%;">
      <div class="card_header">
        <div class="card_header-main">
          <div class="card_header-row">
            <span class="avatar color_primary" aria-hidden="true">홍</span>
            <div>
              <h3 class="card_title">홍길동</h3>
              <p class="card_subtitle">프론트엔드 개발자</p>
            </div>
          </div>
        </div>
        <div class="card_extra">
          <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="더 보기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="card_body">
        <div class="tag_group tag_group-tight">
          <span class="tag tag_sm color_primary">React</span>
          <span class="tag tag_sm color_primary">TypeScript</span>
          <span class="tag tag_sm color_default">SCSS</span>
        </div>
      </div>
      <div class="card_footer card_footer-between">
        <span class="color_muted size_sm">서울 · 온라인</span>
        <button type="button" class="btn btn_outline color_primary btn_sm"><span class="btn_label">팔로우</span></button>
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="clickable-heading">
  <div class="demo_section-header">
    <h2 id="clickable-heading">클릭 가능</h2>
    <p>a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. card_hover와 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="card_deck card_deck-2">
      <a href="#" class="card card_clickable card_hover">
        <div class="card_body">
          <h3 class="card_title">링크 카드</h3>
          <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </div>
      </a>
      <article class="card card_clickable card_hover card_shadow" tabindex="0" role="link">
        <div class="card_body">
          <h3 class="card_title">인터랙티브 카드</h3>
          <p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p>is-disabled로 비활성 상태를 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <article class="card is-disabled" style="max-width: 280px; width: 100%;">
      <div class="card_body">
        <h3 class="card_title">비활성 카드</h3>
        <p class="card_subtitle">현재 이용할 수 없습니다.</p>
      </div>
    </article>
  </div>
</section>

<section class="section demo_section" aria-labelledby="grid-heading">
  <div class="demo_section-header">
    <h2 id="grid-heading">카드 그리드</h2>
    <p>card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="card_deck">
      <article class="card card_hover">
        <div class="card_header">
          <h3 class="card_title">Feature A</h3>
        </div>
        <div class="card_body">빠른 성능과 가벼운 번들 크기.</div>
      </article>
      <article class="card card_hover">
        <div class="card_header">
          <h3 class="card_title">Feature B</h3>
        </div>
        <div class="card_body">접근성을 고려한 마크업 구조.</div>
      </article>
      <article class="card card_hover">
        <div class="card_header">
          <h3 class="card_title">Feature C</h3>
        </div>
        <div class="card_body">Pure SCSS로 커스터마이즈 가능.</div>
      </article>
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
            <td><code class="typo_code">card</code></td>
            <td>카드 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_shadow</code> · <code class="typo_code">card_ghost</code> · <code class="typo_code">card_borderless</code> · <code class="typo_code">card_elevated</code></td>
            <td>스킨 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_sm</code> · <code class="typo_code">card_lg</code> · <code class="typo_code">card_compact</code></td>
            <td>크기·패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_hover</code> · <code class="typo_code">card_clickable</code> · <code class="typo_code">card_accent</code></td>
            <td>인터랙션·강조</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_header</code> · <code class="typo_code">card_body</code> · <code class="typo_code">card_footer</code> · <code class="typo_code">card_media</code></td>
            <td>구조 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_title</code> · <code class="typo_code">card_subtitle</code> · <code class="typo_code">card_extra</code></td>
            <td>헤더 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_footer-between</code></td>
            <td>푸터 양끝 정렬</td>
          </tr>
          <tr>
            <td><code class="typo_code">card_deck</code> · <code class="typo_code">card_deck-2</code> · <code class="typo_code">card_deck-3</code></td>
            <td>카드 그리드</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-disabled</code></td>
            <td>비활성 상태</td>
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
            <td><code class="typo_code">--card-padding</code> · <code class="typo_code">--card-padding-sm</code> · <code class="typo_code">--card-padding-lg</code></td>
            <td>—</td>
            <td>카드 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--card-radius</code> · <code class="typo_code">--card-border-color</code> · <code class="typo_code">--card-shadow</code></td>
            <td>—</td>
            <td>모서리·테두리·그림자</td>
          </tr>
          <tr>
            <td><code class="typo_code">--card-title-size</code> · <code class="typo_code">--card-subtitle-size</code></td>
            <td>—</td>
            <td>제목·부제 타이포</td>
          </tr>
          <tr>
            <td><code class="typo_code">--card-accent-width</code> · <code class="typo_code">--card-hover-translate</code></td>
            <td>3px · -2px</td>
            <td>강조선·호버 이동</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

`,e=oe(ce),re=te(ce),le={title:"Components/데이터 표시/Card",id:"components-card",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"콘텐츠를 그룹화하여 표시하는 카드 컴포넌트입니다."}}}},n={name:"기본",render:()=>d(e[0]),parameters:{docs:{...s(e[0].previewHtml).docs,description:{story:e[0].description}}}},a={name:"간단",render:()=>d(e[1]),parameters:{docs:{...s(e[1].previewHtml).docs,description:{story:e[1].description}}}},c={name:"스킨",render:()=>d(e[2]),parameters:{docs:{...s(e[2].previewHtml).docs,description:{story:e[2].description}}}},r={name:"크기",render:()=>d(e[3]),parameters:{docs:{...s(e[3].previewHtml).docs,description:{story:e[3].description}}}},o={name:"강조 테두리",render:()=>d(e[4]),parameters:{docs:{...s(e[4].previewHtml).docs,description:{story:e[4].description}}}},t={name:"미디어",render:()=>d(e[5]),parameters:{docs:{...s(e[5].previewHtml).docs,description:{story:e[5].description}}}},i={name:"가로",render:()=>d(e[6]),parameters:{docs:{...s(e[6].previewHtml).docs,description:{story:e[6].description}}}},l={name:"아이콘 · 통계",render:()=>d(e[7]),parameters:{docs:{...s(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"프로필",render:()=>d(e[8]),parameters:{docs:{...s(e[8].previewHtml).docs,description:{story:e[8].description}}}},m={name:"클릭 가능",render:()=>d(e[9]),parameters:{docs:{...s(e[9].previewHtml).docs,description:{story:e[9].description}}}},_={name:"비활성",render:()=>d(e[10]),parameters:{docs:{...s(e[10].previewHtml).docs,description:{story:e[10].description}}}},v={name:"카드 그리드",render:()=>d(e[11]),parameters:{docs:{...s(e[11].previewHtml).docs,description:{story:e[11].description}}}},u={name:"클래스 · 속성",tags:["!dev"],render:()=>d(re[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},h={name:"디자인 토큰",tags:["!dev"],render:()=>d(re[1]),parameters:{docs:{source:{code:null},description:{story:"Card 패딩·모서리·타이포·호버에 사용하는 CSS 변수입니다."}}}};var b,y,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var C,w,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '간단',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(D=(w=a.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var B,S,x;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '스킨',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var k,A,H;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(A=r.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var f,z,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '강조 테두리',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(E=(z=o.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,T,F;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '미디어',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(F=(T=t.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var L,O,G;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '가로',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(G=(O=i.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var V,K,N;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '아이콘 · 통계',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(N=(K=l.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,R,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '프로필',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,q,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '클릭 가능',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var J,Q,U;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '카드 그리드',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,de;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(de=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:de.source}}};var se,ne,ae;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Card 패딩·모서리·타이포·호버에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const pe=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","ApiClasses","ApiTokens"];export{u as ApiClasses,h as ApiTokens,n as Demo0,a as Demo1,_ as Demo10,v as Demo11,c as Demo2,r as Demo3,o as Demo4,t as Demo5,i as Demo6,l as Demo7,p as Demo8,m as Demo9,pe as __namedExportsOrder,le as default};
