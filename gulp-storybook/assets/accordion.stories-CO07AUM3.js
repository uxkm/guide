import{b as e,c as W,g as o,e as X}from"./gulp-demos-C1efgjoy.js";const V=`<!-- @meta
title: Accordion | HTML Components
activeNav: accordion
pageTitle: Accordion
-->
<div class="page_intro">
  <h1>Accordion</h1>
  <p class="lead">여러 섹션을 접었다 펼 수 있는 아코디언 컴포넌트입니다. FAQ·설정·필터 패널 등에 사용하며, <code class="typo_code">aria-expanded</code> · <code class="typo_code">aria-controls</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>FAQ처럼 항목 사이 간격이 있는 <code class="typo_code">accordion_card</code> 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="accordion accordion_card accordion_demo-narrow" data-accordion>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-basic-1" aria-expanded="false" aria-controls="acc-basic-panel-1">
            <span class="accordion_label">배송은 얼마나 걸리나요?</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-basic-panel-1" role="region" aria-labelledby="acc-basic-1" hidden>
          <div class="accordion_content">
            <p>평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-basic-2" aria-expanded="true" aria-controls="acc-basic-panel-2">
            <span class="accordion_label">교환·반품은 어떻게 하나요?</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-basic-panel-2" role="region" aria-labelledby="acc-basic-2">
          <div class="accordion_content">
            <p>수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-basic-3" aria-expanded="false" aria-controls="acc-basic-panel-3">
            <span class="accordion_label">해외 배송이 가능한가요?</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-basic-panel-3" role="region" aria-labelledby="acc-basic-3" hidden>
          <div class="accordion_content">
            <p>현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="multiple-heading">
  <div class="demo_section-header">
    <h2 id="multiple-heading">다중 열기</h2>
    <p><code class="typo_code">data-accordion-multiple</code>을 지정하면 여러 패널을 동시에 펼칠 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="accordion accordion_bordered accordion_demo-narrow" data-accordion data-accordion-multiple>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-multi-1" aria-expanded="true" aria-controls="acc-multi-panel-1">
            <span class="accordion_label">알림</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-multi-panel-1" role="region" aria-labelledby="acc-multi-1">
          <div class="accordion_content">
            <p>이메일·푸시 알림 수신 여부를 설정합니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-multi-2" aria-expanded="true" aria-controls="acc-multi-panel-2">
            <span class="accordion_label">개인정보</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-multi-panel-2" role="region" aria-labelledby="acc-multi-2">
          <div class="accordion_content">
            <p>프로필 공개 범위와 데이터 다운로드를 관리합니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-multi-3" aria-expanded="false" aria-controls="acc-multi-panel-3">
            <span class="accordion_label">보안</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-multi-panel-3" role="region" aria-labelledby="acc-multi-3" hidden>
          <div class="accordion_content">
            <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="flush-heading">
  <div class="demo_section-header">
    <h2 id="flush-heading">플러시</h2>
    <p><code class="typo_code">accordion_flush</code>로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="accordion accordion_flush accordion_demo-narrow" data-accordion>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-flush-1" aria-expanded="true" aria-controls="acc-flush-panel-1">
            <span class="accordion_label">일반</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-flush-panel-1" role="region" aria-labelledby="acc-flush-1">
          <div class="accordion_content">
            <p>언어, 시간대, 테마 등 기본 환경 설정입니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-flush-2" aria-expanded="false" aria-controls="acc-flush-panel-2">
            <span class="accordion_label">접근성</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-flush-panel-2" role="region" aria-labelledby="acc-flush-2" hidden>
          <div class="accordion_content">
            <p>고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-flush-3" aria-expanded="false" aria-controls="acc-flush-panel-3">
            <span class="accordion_label">고급</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-flush-panel-3" role="region" aria-labelledby="acc-flush-3" hidden>
          <div class="accordion_content">
            <p>개발자 도구와 실험 기능을 켜거나 끕니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bordered-heading">
  <div class="demo_section-header">
    <h2 id="bordered-heading">보더</h2>
    <p><code class="typo_code">accordion_bordered</code>로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="accordion accordion_bordered accordion_demo-narrow" data-accordion>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-border-1" aria-expanded="true" aria-controls="acc-border-panel-1">
            <span class="accordion_label">알림</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-border-panel-1" role="region" aria-labelledby="acc-border-1">
          <div class="accordion_content">
            <p>이메일·푸시 알림 수신 여부를 설정합니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-border-2" aria-expanded="false" aria-controls="acc-border-panel-2">
            <span class="accordion_label">개인정보</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-border-panel-2" role="region" aria-labelledby="acc-border-2" hidden>
          <div class="accordion_content">
            <p>프로필 공개 범위와 데이터 다운로드를 관리합니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-border-3" aria-expanded="false" aria-controls="acc-border-panel-3">
            <span class="accordion_label">보안</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-border-panel-3" role="region" aria-labelledby="acc-border-3" hidden>
          <div class="accordion_content">
            <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="extra-heading">
  <div class="demo_section-header">
    <h2 id="extra-heading">보조 정보</h2>
    <p><code class="typo_code">accordion_extra</code>로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="accordion accordion_bordered accordion_demo-narrow" data-accordion>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-extra-1" aria-expanded="true" aria-controls="acc-extra-panel-1">
            <span class="accordion_label">미해결 문의</span>
            <span class="accordion_extra">
              <span class="badge badge_count color_danger badge_sm">3</span>
            </span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-extra-panel-1" role="region" aria-labelledby="acc-extra-1">
          <div class="accordion_content">
            <p>답변이 필요한 고객 문의 3건이 있습니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-extra-2" aria-expanded="false" aria-controls="acc-extra-panel-2">
            <span class="accordion_label">처리 완료</span>
            <span class="accordion_extra">지난 7일</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-extra-panel-2" role="region" aria-labelledby="acc-extra-2" hidden>
          <div class="accordion_content">
            <p>최근 일주일간 완료된 문의 12건입니다.</p>
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
    <div class="accordion accordion_bordered accordion_demo-narrow" data-accordion>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-dis-1" aria-expanded="true" aria-controls="acc-dis-panel-1">
            <span class="accordion_label">공개 문서</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-dis-panel-1" role="region" aria-labelledby="acc-dis-1">
          <div class="accordion_content">
            <p>누구나 열람할 수 있는 가이드 문서입니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item is-disabled">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-dis-2" aria-expanded="false" aria-controls="acc-dis-panel-2" disabled>
            <span class="accordion_label">팀 전용 (권한 없음)</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-dis-panel-2" role="region" aria-labelledby="acc-dis-2" hidden>
          <div class="accordion_content">
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
    <p><code class="typo_code">accordion_sm</code> · <code class="typo_code">accordion_lg</code>로 트리거와 본문 패딩을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="accordion accordion_bordered accordion_sm accordion_demo-narrow" data-accordion>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-sm-1" aria-expanded="true" aria-controls="acc-sm-panel-1">
            <span class="accordion_label">Small</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-sm-panel-1" role="region" aria-labelledby="acc-sm-1">
          <div class="accordion_content">
            <p>작은 아코디언 — 좁은 패딩.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion accordion_bordered accordion_lg accordion_demo-narrow" data-accordion>
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-lg-1" aria-expanded="true" aria-controls="acc-lg-panel-1">
            <span class="accordion_label">Large</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-lg-panel-1" role="region" aria-labelledby="acc-lg-1">
          <div class="accordion_content">
            <p>큰 아코디언 — 넓은 패딩과 큰 글자.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="slide-heading">
  <div class="demo_section-header">
    <h2 id="slide-heading">슬라이드</h2>
    <p><code class="typo_code">data-effect="slide"</code>로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 닫힌 패널은 <code class="typo_code">hidden</code>으로 숨기고, 토글 시에만 높이를 애니메이션합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="accordion accordion_card accordion_demo-narrow" data-accordion data-effect="slide">
      <div class="accordion_item is-open">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-slide-1" aria-expanded="true" aria-controls="acc-slide-panel-1">
            <span class="accordion_label">배송 안내</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-slide-panel-1" role="region" aria-labelledby="acc-slide-1">
          <div class="accordion_content">
            <p>평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-slide-2" aria-expanded="false" aria-controls="acc-slide-panel-2">
            <span class="accordion_label">교환·반품</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-slide-panel-2" role="region" aria-labelledby="acc-slide-2" hidden>
          <div class="accordion_content">
            <p>수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div class="accordion_item">
        <div class="accordion_heading" role="heading" aria-level="3">
          <button type="button" class="btn btn_text accordion_trigger" id="acc-slide-3" aria-expanded="false" aria-controls="acc-slide-panel-3">
            <span class="accordion_label">고객센터</span>
            <svg class="accordion_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="accordion_panel" id="acc-slide-panel-3" role="region" aria-labelledby="acc-slide-3" hidden>
          <div class="accordion_content">
            <p>1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>루트에 <code class="typo_code">data-accordion</code>을 지정하면 클릭·키보드 동작이 자동으로 연결됩니다. 헤딩은 <code class="typo_code">role="heading"</code> · <code class="typo_code">aria-level</code>을 사용합니다. 슬라이드 효과는 <code class="typo_code">data-effect="slide"</code>를 추가합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;div class="accordion accordion_bordered" data-accordion&gt;
  &lt;div class="accordion_item is-open"&gt;
    &lt;div class="accordion_heading" role="heading" aria-level="3"&gt;
      &lt;button type="button" class="btn btn_text accordion_trigger" id="acc-1"
        aria-expanded="true" aria-controls="acc-panel-1"&gt;
        &lt;span class="accordion_label"&gt;제목&lt;/span&gt;
        &lt;svg class="accordion_icon" …&gt;&lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="accordion_panel" id="acc-panel-1"
      role="region" aria-labelledby="acc-1"&gt;
      &lt;div class="accordion_content"&gt;&lt;p&gt;본문&lt;/p&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 여러 패널 동시 열기 --&gt;
&lt;div class="accordion accordion_bordered" data-accordion data-accordion-multiple&gt;…&lt;/div&gt;

&lt;!-- 슬라이드 효과 --&gt;
&lt;div class="accordion accordion_card" data-accordion data-effect="slide"&gt;…&lt;/div&gt;</code></pre>
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
          <tr><td><code class="typo_code">accordion</code></td><td>루트 구조 클래스</td></tr>
          <tr><td><code class="typo_code">accordion_bordered</code></td><td>외곽 테두리로 항목을 한 덩어리로 붙인 스킨</td></tr>
          <tr><td><code class="typo_code">accordion_flush</code></td><td>구분선만 있는 플러시 스킨</td></tr>
          <tr><td><code class="typo_code">accordion_card</code></td><td>항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)</td></tr>
          <tr><td><code class="typo_code">accordion_sm · accordion_lg</code></td><td>크기 변형</td></tr>
          <tr><td><code class="typo_code">accordion_item · accordion_trigger · accordion_panel</code></td><td>내부 파트</td></tr>
          <tr><td><code class="typo_code">accordion_heading</code></td><td>role="heading" aria-level="3" 헤딩 래퍼</td></tr>
          <tr><td><code class="typo_code">accordion_label · accordion_extra · accordion_icon</code></td><td>트리거 파트</td></tr>
          <tr><td><code class="typo_code">accordion_content</code></td><td>패널 본문 래퍼</td></tr>
          <tr><td><code class="typo_code">data-accordion</code></td><td>HTML 마크업 JS 초기화 대상</td></tr>
          <tr><td><code class="typo_code">data-accordion-multiple</code></td><td>HTML 마크업 다중 열기 허용</td></tr>
          <tr><td><code class="typo_code">data-effect="slide"</code></td><td>펼침·접힘 높이 슬라이드 애니메이션</td></tr>
          <tr><td><code class="typo_code">is-open · is-disabled</code></td><td>상태 클래스</td></tr>
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
          <tr><td><code class="typo_code">--accordion-font-size</code></td><td>var(--text-size-sm)</td><td>기본(md) 본문 크기</td></tr>
          <tr><td><code class="typo_code">--accordion-trigger-font-weight</code> · <code class="typo_code">--accordion-trigger-gap</code></td><td>600 · var(--space-sm)</td><td>트리거 타이포·간격</td></tr>
          <tr><td><code class="typo_code">--accordion-trigger-padding-y</code> · <code class="typo_code">--accordion-trigger-padding-x</code></td><td>0.875rem · var(--space-lg)</td><td>트리거 패딩(md)</td></tr>
          <tr><td><code class="typo_code">--accordion-content-font-size</code></td><td>var(--text-size-sm)</td><td>콘텐츠 글자 크기</td></tr>
          <tr><td><code class="typo_code">--accordion-content-padding-y</code> · <code class="typo_code">--accordion-content-padding-x</code></td><td>var(--space-lg)</td><td>콘텐츠 상하·좌우 패딩</td></tr>
          <tr><td><code class="typo_code">--accordion-icon-size</code></td><td>1rem</td><td>펼침 아이콘(md)</td></tr>
          <tr><td><code class="typo_code">--accordion-slide-duration</code> · <code class="typo_code">--accordion-slide-easing</code></td><td>0.28s · ease</td><td>슬라이드 전환</td></tr>
          <tr><td><code class="typo_code">--accordion-card-gap</code></td><td>0</td><td>카드형 아코디언 항목 간격</td></tr>
          <tr><td><code class="typo_code">--accordion-card-trigger-bg</code></td><td>var(--color-surface-raised)</td><td>카드형 트리거 배경</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,n=X(V),u=W(V),Z={title:"Components/기타/Accordion",id:"components-accordion",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"여러 섹션을 접었다 펼 수 있는 아코디언 컴포넌트입니다. FAQ·설정·필터 패널 등에 사용하며, aria-expanded · aria-controls로 접근성을 보장합니다."}}}},a={name:"기본",render:()=>e(n[0]),parameters:{docs:{...o(n[0].previewHtml).docs,description:{story:n[0].description}}}},c={name:"다중 열기",render:()=>e(n[1]),parameters:{docs:{...o(n[1].previewHtml).docs,description:{story:n[1].description}}}},d={name:"플러시",render:()=>e(n[2]),parameters:{docs:{...o(n[2].previewHtml).docs,description:{story:n[2].description}}}},i={name:"보더",render:()=>e(n[3]),parameters:{docs:{...o(n[3].previewHtml).docs,description:{story:n[3].description}}}},r={name:"보조 정보",render:()=>e(n[4]),parameters:{docs:{...o(n[4].previewHtml).docs,description:{story:n[4].description}}}},s={name:"비활성",render:()=>e(n[5]),parameters:{docs:{...o(n[5].previewHtml).docs,description:{story:n[5].description}}}},t={name:"크기",render:()=>e(n[6]),parameters:{docs:{...o(n[6].previewHtml).docs,description:{story:n[6].description}}}},l={name:"슬라이드",render:()=>e(n[7]),parameters:{docs:{...o(n[7].previewHtml).docs,description:{story:n[7].description}}}},p={name:"마크업",tags:["!dev"],render:()=>e(u[0]),parameters:{docs:{source:{code:null},description:{story:u[0].description}}}},v={name:"클래스 · 속성",tags:["!dev"],render:()=>e(u[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},_={name:"디자인 토큰",tags:["!dev"],render:()=>e(u[2]),parameters:{docs:{source:{code:null},description:{story:"Accordion 크기·간격·슬라이드에 사용하는 CSS 변수입니다."}}}};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,y,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '다중 열기',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,x,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '플러시',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,k,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '보더',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var A,S,M;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '보조 정보',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(M=(S=r.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var H,E,F;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,z,L;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,Q,I;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:I.source}}};var J,N,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(N=p.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var j,q,G;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,P,R;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Accordion 크기·간격·슬라이드에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(R=(P=_.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const $=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","ApiMarkup","ApiClasses","ApiTokens"];export{v as ApiClasses,p as ApiMarkup,_ as ApiTokens,a as Demo0,c as Demo1,d as Demo2,i as Demo3,r as Demo4,s as Demo5,t as Demo6,l as Demo7,$ as __namedExportsOrder,Z as default};
