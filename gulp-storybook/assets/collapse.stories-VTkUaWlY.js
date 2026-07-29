import{b as s,c as P,g as o,e as Q}from"./gulp-demos-C1efgjoy.js";const K=`<!-- @meta
title: Collapse | HTML Components
activeNav: collapse
pageTitle: Collapse
-->
<div class="page_intro">
  <h1>Collapse</h1>
  <p class="lead">콘텐츠 영역을 접었다 펼 수 있는 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나, 패널 그룹으로 여러 섹션을 구성할 수 있습니다. <code class="typo_code">aria-expanded</code> · <code class="typo_code">aria-controls</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="standalone-heading">
  <div class="demo_section-header">
    <h2 id="standalone-heading">외부 트리거</h2>
    <p><code class="typo_code">data-collapse-trigger</code>로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="collapse_demo-narrow">
      <p style="margin: 0 0 var(--space-md)">주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.</p>
      <button type="button" class="btn btn_ghost btn_sm" data-collapse-trigger aria-expanded="false" aria-controls="collapse-standalone">
        <span class="btn_label">주문 상세 보기</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div
        class="collapse"
        id="collapse-standalone"
        hidden
        style="margin-top: var(--space-sm); padding: var(--space-lg); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface-raised);"
      >
        <dl class="list list_definition list_inline list_block list_compact" style="--list-inline-label-width: auto; --list-inline-gap: 1rem; margin: 0;">
          <dt class="list_title">주문번호</dt>
          <dd class="list_desc">ORD-2024-0815</dd>
          <dt class="list_title">결제금액</dt>
          <dd class="list_desc">₩42,000</dd>
          <dt class="list_title">배송지</dt>
          <dd class="list_desc">서울특별시 강남구 테헤란로 123</dd>
        </dl>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">패널 그룹</h2>
    <p><code class="typo_code">collapse_bordered</code>가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="collapse_group collapse_bordered collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-basic-1" aria-expanded="true" aria-controls="col-basic-body-1">
            <span class="collapse_label">배송 정보</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-basic-body-1" role="region" aria-labelledby="col-basic-1">
          <div class="collapse_content">
            <p>평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-basic-2" aria-expanded="false" aria-controls="col-basic-body-2">
            <span class="collapse_label">결제 수단</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-basic-body-2" role="region" aria-labelledby="col-basic-2" hidden>
          <div class="collapse_content">
            <p>신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-basic-3" aria-expanded="false" aria-controls="col-basic-body-3">
            <span class="collapse_label">교환·반품 안내</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-basic-body-3" role="region" aria-labelledby="col-basic-3" hidden>
          <div class="collapse_content">
            <p>수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="accordion-heading">
  <div class="demo_section-header">
    <h2 id="accordion-heading">아코디언 모드</h2>
    <p><code class="typo_code">data-collapse-accordion</code>을 지정하면 한 번에 하나의 패널만 열립니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="collapse_group collapse_bordered collapse_demo-narrow" data-collapse data-collapse-accordion>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-acc-1" aria-expanded="true" aria-controls="col-acc-body-1">
            <span class="collapse_label">알림 설정</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-acc-body-1" role="region" aria-labelledby="col-acc-1">
          <div class="collapse_content">
            <p>이메일·푸시·SMS 알림 수신 여부를 설정합니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-acc-2" aria-expanded="false" aria-controls="col-acc-body-2">
            <span class="collapse_label">개인정보</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-acc-body-2" role="region" aria-labelledby="col-acc-2" hidden>
          <div class="collapse_content">
            <p>프로필 공개 범위와 데이터 다운로드를 관리합니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-acc-3" aria-expanded="false" aria-controls="col-acc-body-3">
            <span class="collapse_label">보안</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-acc-body-3" role="region" aria-labelledby="col-acc-3" hidden>
          <div class="collapse_content">
            <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="skin-heading">
  <div class="demo_section-header">
    <h2 id="skin-heading">스킨</h2>
    <p><code class="typo_code">collapse_ghost</code> · <code class="typo_code">collapse_card</code>로 외형을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="collapse_group collapse_ghost collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-ghost-1" aria-expanded="true" aria-controls="col-ghost-body-1">
            <span class="collapse_label">Ghost</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-ghost-body-1" role="region" aria-labelledby="col-ghost-1">
          <div class="collapse_content">
            <p>배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="collapse_group collapse_card collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-card-1" aria-expanded="true" aria-controls="col-card-body-1">
            <span class="collapse_label">Card</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-card-body-1" role="region" aria-labelledby="col-card-1">
          <div class="collapse_content">
            <p>패널마다 카드 형태로 분리됩니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-card-2" aria-expanded="false" aria-controls="col-card-body-2">
            <span class="collapse_label">두 번째 패널</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-card-body-2" role="region" aria-labelledby="col-card-2" hidden>
          <div class="collapse_content">
            <p>카드 스킨의 두 번째 패널입니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="extra-heading">
  <div class="demo_section-header">
    <h2 id="extra-heading">보조 텍스트</h2>
    <p><code class="typo_code">collapse_extra</code>로 트리거 오른쪽에 메타 정보를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="collapse_group collapse_bordered collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-extra-1" aria-expanded="true" aria-controls="col-extra-body-1">
            <span class="collapse_label">진행 중</span>
            <span class="collapse_extra">3건</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-extra-body-1" role="region" aria-labelledby="col-extra-1">
          <div class="collapse_content">
            <p>현재 처리 중인 요청 3건입니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-extra-2" aria-expanded="false" aria-controls="col-extra-body-2">
            <span class="collapse_label">처리 완료</span>
            <span class="collapse_extra">지난 7일</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-extra-body-2" role="region" aria-labelledby="col-extra-2" hidden>
          <div class="collapse_content">
            <p>최근 일주일간 완료된 요청 12건입니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p><code class="typo_code">is-disabled</code> 클래스와 함께 트리거가 비활성화됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="collapse_group collapse_bordered collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-dis-1" aria-expanded="true" aria-controls="col-dis-body-1">
            <span class="collapse_label">공개 문서</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-dis-body-1" role="region" aria-labelledby="col-dis-1">
          <div class="collapse_content">
            <p>누구나 열람할 수 있는 가이드 문서입니다.</p>
          </div>
        </div>
      </div>
      <div class="collapse_panel is-disabled">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-dis-2" aria-expanded="false" aria-controls="col-dis-body-2" disabled>
            <span class="collapse_label">팀 전용 (권한 없음)</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-dis-body-2" role="region" aria-labelledby="col-dis-2" hidden>
          <div class="collapse_content">
            <p>팀 멤버만 접근할 수 있는 내부 문서입니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">collapse_sm</code> · <code class="typo_code">collapse_lg</code>로 트리거와 본문 패딩을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="collapse_group collapse_bordered collapse_sm collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-sm-1" aria-expanded="true" aria-controls="col-sm-body-1">
            <span class="collapse_label">Small</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-sm-body-1" role="region" aria-labelledby="col-sm-1">
          <div class="collapse_content">
            <p>작은 콜랩스 — 좁은 패딩.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="collapse_group collapse_bordered collapse_lg collapse_demo-narrow" data-collapse>
      <div class="collapse_panel is-open">
        <div class="collapse_header">
          <button type="button" class="btn btn_text collapse_trigger" id="col-lg-1" aria-expanded="true" aria-controls="col-lg-body-1">
            <span class="collapse_label">Large</span>
            <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="collapse_body" id="col-lg-body-1" role="region" aria-labelledby="col-lg-1">
          <div class="collapse_content">
            <p>큰 콜랩스 — 넓은 패딩과 큰 글자.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="slide-heading">
  <div class="demo_section-header">
    <h2 id="slide-heading">슬라이드</h2>
    <p><code class="typo_code">data-effect="slide"</code>로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="demo_preview-block">
      <h3 class="typo_overline">패널 그룹</h3>
      <div class="collapse_group collapse_bordered collapse_demo-narrow" data-collapse data-effect="slide">
        <div class="collapse_panel is-open">
          <div class="collapse_header">
            <button type="button" class="btn btn_text collapse_trigger" id="col-slide-1" aria-expanded="true" aria-controls="col-slide-body-1">
              <span class="collapse_label">배송 정보</span>
              <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
          <div class="collapse_body" id="col-slide-body-1" role="region" aria-labelledby="col-slide-1">
            <div class="collapse_content">
              <p>평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다.</p>
            </div>
          </div>
        </div>
        <div class="collapse_panel">
          <div class="collapse_header">
            <button type="button" class="btn btn_text collapse_trigger" id="col-slide-2" aria-expanded="false" aria-controls="col-slide-body-2">
              <span class="collapse_label">결제 수단</span>
              <svg class="collapse_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
          <div class="collapse_body" id="col-slide-body-2" role="region" aria-labelledby="col-slide-2" hidden>
            <div class="collapse_content">
              <p>신용카드, 계좌이체, 간편결제를 지원합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">외부 트리거</h3>
      <div class="collapse_demo-narrow">
        <button type="button" class="btn btn_ghost btn_sm" data-collapse-trigger aria-expanded="false" aria-controls="collapse-slide-standalone">
          <span class="btn_label">상세 보기</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div
          class="collapse"
          id="collapse-slide-standalone"
          data-effect="slide"
          hidden
          style="margin-top: var(--space-sm)"
        >
          <div style="padding: var(--space-lg); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface-raised);">
            <p style="margin: 0">외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>패널 그룹에는 <code class="typo_code">data-collapse</code>을, 외부 트리거에는 <code class="typo_code">data-collapse-trigger</code>을 지정하면 클릭 동작이 자동으로 연결됩니다. 슬라이드는 <code class="typo_code">data-effect="slide"</code>를 루트(그룹 또는 <code class="typo_code">.collapse</code>)에 둡니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;!-- 외부 트리거 --&gt;
&lt;button type="button" class="btn btn_ghost btn_sm" data-collapse-trigger
  aria-expanded="false" aria-controls="collapse-1"&gt;펼치기&lt;/button&gt;
&lt;div class="collapse" id="collapse-1" hidden&gt;…&lt;/div&gt;

&lt;!-- 패널 그룹 --&gt;
&lt;div class="collapse_group collapse_bordered" data-collapse&gt;
  &lt;div class="collapse_panel is-open"&gt;
    &lt;div class="collapse_header"&gt;
      &lt;button type="button" class="btn btn_text collapse_trigger" id="col-1"
        aria-expanded="true" aria-controls="col-body-1"&gt;
        &lt;span class="collapse_label"&gt;제목&lt;/span&gt;
        &lt;svg class="collapse_icon" …&gt;&lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="collapse_body" id="col-body-1"
      role="region" aria-labelledby="col-1"&gt;
      &lt;div class="collapse_content"&gt;&lt;p&gt;본문&lt;/p&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 슬라이드 효과 --&gt;
&lt;div class="collapse_group collapse_bordered" data-collapse data-effect="slide"&gt;…&lt;/div&gt;

&lt;!-- 한 번에 하나만 열기 --&gt;
&lt;div class="collapse_group collapse_bordered" data-collapse data-collapse-accordion&gt;…&lt;/div&gt;</code></pre>
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
          <tr><td><code class="typo_code">collapse</code></td><td>독립 접힘 영역 (외부 트리거 대상)</td></tr>
          <tr><td><code class="typo_code">collapse_group</code></td><td>패널 그룹 컨테이너</td></tr>
          <tr><td><code class="typo_code">collapse_panel · collapse_trigger · collapse_body</code></td><td>패널 그룹 내부 파트</td></tr>
          <tr><td><code class="typo_code">collapse_label · collapse_extra · collapse_icon</code></td><td>트리거 파트</td></tr>
          <tr><td><code class="typo_code">collapse_content</code></td><td>패널 본문 래퍼</td></tr>
          <tr><td><code class="typo_code">collapse_bordered</code></td><td>외곽 테두리 스킨 (기본)</td></tr>
          <tr><td><code class="typo_code">collapse_ghost</code></td><td>배경 강조 고스트 스킨</td></tr>
          <tr><td><code class="typo_code">collapse_card</code></td><td>패널별 카드 분리 스킨</td></tr>
          <tr><td><code class="typo_code">collapse_sm · collapse_lg</code></td><td>크기 변형</td></tr>
          <tr><td><code class="typo_code">data-collapse</code></td><td>HTML 패널 그룹 JS 초기화</td></tr>
          <tr><td><code class="typo_code">data-collapse-trigger</code></td><td>HTML 외부 트리거 JS 초기화</td></tr>
          <tr><td><code class="typo_code">data-collapse-accordion</code></td><td>HTML 단일 패널만 열기</td></tr>
          <tr><td><code class="typo_code">data-effect="slide"</code></td><td>펼침·접힘 높이 슬라이드 애니메이션</td></tr>
          <tr><td><code class="typo_code">is-open · is-disabled</code></td><td>상태 클래스</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=Q(K),_=P(K),V={title:"Components/기타/Collapse",id:"components-collapse",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"콘텐츠 영역을 접었다 펼 수 있는 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나, 패널 그룹으로 여러 섹션을 구성할 수 있습니다. aria-expanded · aria-controls로 접근성을 보장합니다."}}}},n={name:"외부 트리거",render:()=>s(e[0]),parameters:{docs:{...o(e[0].previewHtml).docs,description:{story:e[0].description}}}},a={name:"패널 그룹",render:()=>s(e[1]),parameters:{docs:{...o(e[1].previewHtml).docs,description:{story:e[1].description}}}},l={name:"아코디언 모드",render:()=>s(e[2]),parameters:{docs:{...o(e[2].previewHtml).docs,description:{story:e[2].description}}}},d={name:"스킨",render:()=>s(e[3]),parameters:{docs:{...o(e[3].previewHtml).docs,description:{story:e[3].description}}}},c={name:"보조 텍스트",render:()=>s(e[4]),parameters:{docs:{...o(e[4].previewHtml).docs,description:{story:e[4].description}}}},t={name:"비활성",render:()=>s(e[5]),parameters:{docs:{...o(e[5].previewHtml).docs,description:{story:e[5].description}}}},r={name:"크기",render:()=>s(e[6]),parameters:{docs:{...o(e[6].previewHtml).docs,description:{story:e[6].description}}}},i={name:"슬라이드",render:()=>s(e[7]),parameters:{docs:{...o(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"마크업",tags:["!dev"],render:()=>s(_[0]),parameters:{docs:{source:{code:null},description:{story:_[0].description}}}},v={name:"클래스 · 속성",tags:["!dev"],render:()=>s(_[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}};var b,u,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '외부 트리거',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '패널 그룹',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var w,x,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '아코디언 모드',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,D,f;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '스킨',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(f=(D=d.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var B,S,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '보조 텍스트',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(M=(S=c.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var H,A,L;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(L=(A=t.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var T,O,E;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(E=(O=r.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,z,J;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '슬라이드',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(J=(z=i.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var G,N,R;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var j,q,I;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(q=v.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const W=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","ApiMarkup","ApiClasses"];export{v as ApiClasses,p as ApiMarkup,n as Demo0,a as Demo1,l as Demo2,d as Demo3,c as Demo4,t as Demo5,r as Demo6,i as Demo7,W as __namedExportsOrder,V as default};
