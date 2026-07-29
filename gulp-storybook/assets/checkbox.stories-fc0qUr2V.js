import{b as c,g as n,e as de,c as te}from"./gulp-demos-C1efgjoy.js";const oe=`<!-- @meta
title: Checkbox | HTML Components
activeNav: checkbox
pageTitle: Checkbox
-->
<div class="page_intro">
  <h1>Checkbox</h1>
  <p class="lead">다중 선택을 위한 Checkbox 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, <strong>checkbox_block</strong> · <strong>checkbox_group_block</strong>으로 전체 너비를 사용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">유형</h2>
    <p>기본은 <code>span.checkbox_control</code> + <code>label.checkbox_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.checkbox_control</code>로 input을 암묵 연결합니다. <code>checkbox_label-end</code>는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-0" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-0">기본 — checkbox</label>
    </div>

    <div class="checkbox checkbox_label-end">
      <label class="checkbox_label" for="checkbox-auto-1">레이블 뒤 — checkbox_label-end</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-1" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">버튼형</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">UI</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">UX</span>
      </label>
    </fieldset>

    <div class="checkbox_card" style="max-width: 360px;">
      <article class="card card_compact">
        <div class="card_header">
          <div class="card_header-main">
            <h3 class="card_title" id="checkbox-type-card-title">카드형 — checkbox_card</h3>
          </div>
          <div class="card_extra">
            <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
          </div>
        </div>
        <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
      </article>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="label-end-heading">
  <div class="demo_section-header">
    <h2 id="label-end-heading">레이블 뒤</h2>
    <p><code>checkbox_label-end</code>는 <code>checkbox_label</code> → <code>checkbox_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>checkbox_block</code> 또는 <code>checkbox_group_block</code>을 추가합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="checkbox checkbox_label-end">
      <label class="checkbox_label" for="checkbox-label-end-push">푸시 알림 받기</label>
      <span class="checkbox_control">
        <input type="checkbox" class="checkbox_input" id="checkbox-label-end-push" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <div class="checkbox checkbox_label-end">
      <label class="checkbox_label" for="checkbox-label-end-marketing">
        <span class="checkbox_content">
          <span class="checkbox_label">마케팅 정보 수신</span>
          <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </label>
      <span class="checkbox_control">
        <input type="checkbox" class="checkbox_input" id="checkbox-label-end-marketing">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
      <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
      <div class="checkbox checkbox_label-end">
      <label class="checkbox_label" for="checkbox-auto-2">이메일 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-2" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
      <div class="checkbox checkbox_label-end">
      <label class="checkbox_label" for="checkbox-auto-3">푸시 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-3" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
      <div class="checkbox checkbox_label-end">
      <label class="checkbox_label" for="checkbox-auto-4">SMS 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-4" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
    </fieldset>

    <div class="checkbox checkbox_label-end checkbox_sm">
      <label class="checkbox_label" for="checkbox-auto-5">Small — checkbox_sm</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-5" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
    <div class="checkbox checkbox_label-end checkbox_lg">
      <label class="checkbox_label" for="checkbox-auto-6">Large — checkbox_lg</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-6" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field">
      <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
        <div class="checkbox">
          <span class="checkbox_control">
            <input type="checkbox" class="checkbox_input" id="checkbox-notify-email" checked>
            <span class="checkbox_box" aria-hidden="true"></span>
          </span>
          <label class="checkbox_label" for="checkbox-notify-email">
            <span class="checkbox_content">
              <span class="checkbox_label">이메일 알림</span>
              <span class="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <span class="checkbox_control">
            <input type="checkbox" class="checkbox_input" id="checkbox-notify-push">
            <span class="checkbox_box" aria-hidden="true"></span>
          </span>
          <label class="checkbox_label" for="checkbox-notify-push">
            <span class="checkbox_content">
              <span class="checkbox_label">푸시 알림</span>
              <span class="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
            </span>
          </label>
        </div>
      </fieldset>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="standalone-heading">
  <div class="demo_section-header">
    <h2 id="standalone-heading">단독 사용</h2>
    <p>레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <label class="checkbox_control"><input aria-label="항목 선택" type="checkbox" class="checkbox_input">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
    <label class="checkbox_control"><input type="checkbox" class="checkbox_input" checked aria-label="선택됨">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
    <label class="checkbox_control"><input type="checkbox" class="checkbox_input" disabled aria-label="비활성">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="checkbox checkbox_sm">
      <span class="checkbox_control">
        <input id="checkbox-auto-7" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-7">Small — checkbox_sm</label>
    </div>
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-8" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-8">Medium — 기본</label>
    </div>
    <div class="checkbox checkbox_lg">
      <span class="checkbox_control">
        <input id="checkbox-auto-9" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-9">Large — checkbox_lg</label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-10" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-10">기본 — 인라인 너비</label>
    </div>

    <div class="checkbox checkbox_block">
      <span class="checkbox_control">
        <input id="checkbox-auto-11" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-11">checkbox_block — 전체 너비</label>
    </div>

    <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
      <legend class="checkbox_group-legend">checkbox_group_block</legend>
      <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-12" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-12">항목 1</label>
    </div>
      <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-13" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-13">항목 2</label>
    </div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="checkbox color_primary">
      <span class="checkbox_control">
        <input id="checkbox-auto-14" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-14">Primary</label>
    </div>
    <div class="checkbox color_success">
      <span class="checkbox_control">
        <input id="checkbox-auto-15" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-15">Success</label>
    </div>
    <div class="checkbox color_danger">
      <span class="checkbox_control">
        <input id="checkbox-auto-16" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-16">Danger</label>
    </div>
    <div class="checkbox color_warning">
      <span class="checkbox_control">
        <input id="checkbox-auto-17" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-17">Warning</label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-18" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-18">미선택</label>
    </div>
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-19" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-19">선택됨</label>
    </div>
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-20" type="checkbox" class="checkbox_input" checked data-demo-indeterminate>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-20">불확정</label>
    </div>
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-21" type="checkbox" class="checkbox_input" disabled>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-21">비활성</label>
    </div>
    <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-22" type="checkbox" class="checkbox_input" checked disabled>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-22">선택됨 (비활성)</label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">그룹</h2>
    <p>checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
      <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-24" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-24">디자인</label>
    </div>
      <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-25" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-25">개발</label>
    </div>
      <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-26" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-26">기획</label>
    </div>
    </fieldset>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <legend class="checkbox_group-legend">언어 (가로)</legend>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">한국어</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">English</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">日本語</span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="button-type-heading">
  <div class="demo_section-header">
    <h2 id="button-type-heading">버튼형</h2>
    <p>checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">전체</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">진행 중</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">완료</span>
      </label>
      <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input" disabled>
        <span class="checkbox_label">보류 (비활성)</span>
      </label>
    </fieldset>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button checkbox_sm color_success">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Small</span>
      </label>
      <label class="checkbox checkbox_button color_success">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Medium</span>
      </label>
      <label class="checkbox checkbox_button checkbox_lg color_success">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Large</span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="card-type-heading">
  <div class="demo_section-header">
    <h2 id="card-type-heading">카드형</h2>
    <p><code>div.checkbox_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.checkbox_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.checkbox_card.checkbox_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">요금제 선택 (다중)</legend>
      <div class="card_deck card_deck-2">
        <div class="checkbox_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
          </article>
        </div>
        <div class="checkbox_card color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
          </article>
        </div>
        <div class="checkbox_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">권한 (가로)</legend>
      <div class="card_deck card_deck-3">
        <div class="checkbox_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-perm-read-title">읽기</h3>
              </div>
              <div class="card_extra">
                <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-perm-read-desc">조회 권한</div>
          </article>
        </div>
        <div class="checkbox_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-perm-write-title">쓰기</h3>
              </div>
              <div class="card_extra">
                <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-perm-write-desc">수정 권한</div>
          </article>
        </div>
        <div class="checkbox_card">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-perm-delete-title">삭제</h3>
              </div>
              <div class="card_extra">
                <label class="checkbox_control"><input type="checkbox" class="checkbox_input" id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-perm-delete-desc">삭제 권한</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)</legend>
      <div class="card_deck card_deck-2">
        <div class="checkbox_card checkbox_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-full-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
          </article>
        </div>
        <div class="checkbox_card checkbox_card-clickable color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-full-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-pro" name="plan-clickable" value="pro" aria-labelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
          </article>
        </div>
        <div class="checkbox_card checkbox_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-full-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="form-heading">
  <div class="demo_section-header">
    <h2 id="form-heading">폼 레이아웃</h2>
    <p>form_vertical · form_horizontal과 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
        <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
          <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-27" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-27">마케팅 정보 수신</label>
    </div>
          <div class="checkbox">
      <span class="checkbox_control">
        <input id="checkbox-auto-28" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-28">뉴스레터 구독</label>
    </div>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
        <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
          <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">조회</span>
          </label>
          <label class="checkbox checkbox_button">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">편집</span>
          </label>
        </fieldset>
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
            <td><code class="typo_code">checkbox</code></td>
            <td>체크박스 래퍼</td>
          </tr>
          <tr>
            <td><code class="typo_code">checkbox_control</code> · <code class="typo_code">checkbox_input</code> · <code class="typo_code">checkbox_box</code></td>
            <td>입력·커스텀 박스</td>
          </tr>
          <tr>
            <td><code class="typo_code">checkbox_label</code></td>
            <td>라벨</td>
          </tr>
          <tr>
            <td><code class="typo_code">checkbox_label-end</code> · <code class="typo_code">checkbox_button</code></td>
            <td>레이아웃 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">checkbox_group</code></td>
            <td>여러 체크박스 묶음</td>
          </tr>
          <tr>
            <td><code class="typo_code">checkbox_card</code> · <code class="typo_code">checkbox_card-clickable</code></td>
            <td>카드형 — clickable은 data-ripple + JS 위임</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-checked</code> · <code class="typo_code">is-disabled</code></td>
            <td>상태 (CSS·JS 토글)</td>
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
            <td><code class="typo_code">--checkbox-size</code> · <code class="typo_code">--checkbox-size-sm</code> · <code class="typo_code">--checkbox-size-lg</code></td>
            <td>1rem · 0.875rem · 1.125rem</td>
            <td>컨트롤 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-border-width</code> · <code class="typo_code">--checkbox-radius</code></td>
            <td>1px · 4px</td>
            <td>테두리·모서리</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-gap</code> · <code class="typo_code">--checkbox-gap-sm</code> · <code class="typo_code">--checkbox-gap-lg</code></td>
            <td>var(--space-sm) · 0.375rem · 0.625rem</td>
            <td>컨트롤·라벨 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-font-size</code> · <code class="typo_code">--checkbox-font-size-sm</code> · <code class="typo_code">--checkbox-font-size-lg</code></td>
            <td>var(--text-size-base) · sm · lg</td>
            <td>라벨 글자 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-line-height</code> · <code class="typo_code">--checkbox-label-weight</code></td>
            <td>1.5 · 400</td>
            <td>라벨 타이포</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-hint-size</code> · <code class="typo_code">--checkbox-control-offset</code></td>
            <td>var(--text-size-sm) · 0.125rem</td>
            <td>힌트·컨트롤 수직 보정</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-group-gap</code></td>
            <td>var(--space-sm)</td>
            <td>그룹 항목 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--checkbox-button-padding-y</code> · <code class="typo_code">--checkbox-button-padding-x</code></td>
            <td>0.35rem · 0.75rem</td>
            <td>버튼형 패딩</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

`,e=de(oe),le=te(oe),ie={title:"Components/폼/Checkbox",id:"components-checkbox",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"다중 선택을 위한 Checkbox 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다."}}}},a={name:"유형",render:()=>c(e[0]),parameters:{docs:{...n(e[0].previewHtml).docs,description:{story:e[0].description}}}},s={name:"레이블 뒤",render:()=>c(e[1]),parameters:{docs:{...n(e[1].previewHtml).docs,description:{story:e[1].description}}}},o={name:"기본",render:()=>c(e[2]),parameters:{docs:{...n(e[2].previewHtml).docs,description:{story:e[2].description}}}},l={name:"단독 사용",render:()=>c(e[3]),parameters:{docs:{...n(e[3].previewHtml).docs,description:{story:e[3].description}}}},d={name:"크기",render:()=>c(e[4]),parameters:{docs:{...n(e[4].previewHtml).docs,description:{story:e[4].description}}}},t={name:"너비",render:()=>c(e[5]),parameters:{docs:{...n(e[5].previewHtml).docs,description:{story:e[5].description}}}},r={name:"색상",render:()=>c(e[6]),parameters:{docs:{...n(e[6].previewHtml).docs,description:{story:e[6].description}}}},i={name:"상태",render:()=>c(e[7]),parameters:{docs:{...n(e[7].previewHtml).docs,description:{story:e[7].description}}}},b={name:"그룹",render:()=>c(e[8]),parameters:{docs:{...n(e[8].previewHtml).docs,description:{story:e[8].description}}}},p={name:"버튼형",render:()=>c(e[9]),parameters:{docs:{...n(e[9].previewHtml).docs,description:{story:e[9].description}}}},h={name:"카드형",render:()=>c(e[10]),parameters:{docs:{...n(e[10].previewHtml).docs,description:{story:e[10].description}}}},k={name:"폼 레이아웃",render:()=>c(e[11]),parameters:{docs:{...n(e[11].previewHtml).docs,description:{story:e[11].description}}}},x={name:"클래스 · 속성",tags:["!dev"],render:()=>c(le[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},_={name:"디자인 토큰",tags:["!dev"],render:()=>c(le[1]),parameters:{docs:{source:{code:null},description:{story:"Checkbox 크기·간격·타이포·버튼 패딩에 사용하는 CSS 변수입니다."}}}};var u,m,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "유형",
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "레이블 뒤",
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,w,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "기본",
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,B,H;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "단독 사용",
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var A,z,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "크기",
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var L,M,T;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "너비",
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(T=(M=t.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var O,F,J;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "색상",
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(J=(F=r.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var P,U,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "상태",
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(I=(U=i.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var N,W,X;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "그룹",
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var j,q,G;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "버튼형",
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,R;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "카드형",
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(R=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,Y,Z;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "폼 레이아웃",
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ce;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ce=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ce.source}}};var ne,ae,se;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Checkbox 크기·간격·타이포·버튼 패딩에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(se=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const be=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","ApiClasses","ApiTokens"];export{x as ApiClasses,_ as ApiTokens,a as Demo0,s as Demo1,h as Demo10,k as Demo11,o as Demo2,l as Demo3,d as Demo4,t as Demo5,r as Demo6,i as Demo7,b as Demo8,p as Demo9,be as __namedExportsOrder,ie as default};
