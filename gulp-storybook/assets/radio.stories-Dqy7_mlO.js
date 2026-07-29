import{b as n,g as e,e as ea,c as da}from"./gulp-demos-C1efgjoy.js";const na=`<!-- @meta
title: Radio | HTML Components
activeNav: radio
pageTitle: Radio
-->
<div class="page_intro">
  <h1>Radio</h1>
  <p class="lead">단일 선택을 위한 Radio 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, <strong>radio_block</strong> · <strong>radio_group_block</strong>으로 전체 너비를 사용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">유형</h2>
      </div>

  <div class="demo_section-preview">
    <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-0" type="radio" class="radio_input" name="radio-type-basic" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-0">기본 — radio</label>
    </div>

    <div class="radio radio_label-end">
      <label class="radio_label" for="radio-auto-1">레이블 뒤 — radio_label-end</label>
      <span class="radio_control">
        <input id="radio-auto-1" type="radio" class="radio_input" name="radio-type-label-end">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-type-btn" value="a" checked>
        <span class="radio_label">버튼형</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-type-btn" value="b">
        <span class="radio_label">UI</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-type-btn" value="c">
        <span class="radio_label">UX</span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="label-end-heading">
  <div class="demo_section-header">
    <h2 id="label-end-heading">레이블 뒤</h2>
      </div>

  <div class="demo_section-preview">
    <div class="radio radio_label-end">
      <label class="radio_label" for="radio-label-end-basic">신용카드</label>
      <span class="radio_control">
        <input type="radio" class="radio_input" id="radio-label-end-basic" name="radio-label-end-pay" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <div class="radio radio_label-end">
      <label class="radio_label" for="radio-label-end-dawn">
        <span class="radio_content">
          <span class="radio_label">계좌이체</span>
          <span class="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </label>
      <span class="radio_control">
        <input type="radio" class="radio_input" id="radio-label-end-dawn" name="radio-label-end-pay2">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
      <div class="radio radio_label-end">
        <label class="radio_label" for="radio-auto-2">일반 배송</label>
        <span class="radio_control">
          <input id="radio-auto-2" type="radio" class="radio_input" name="radio-label-end-ship" value="standard" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
      </div>
      <div class="radio radio_label-end">
        <label class="radio_label" for="radio-auto-3">빠른 배송</label>
        <span class="radio_control">
          <input id="radio-auto-3" type="radio" class="radio_input" name="radio-label-end-ship" value="express">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
      </div>
    </fieldset>

    <div class="radio radio_label-end radio_sm">
      <label class="radio_label" for="radio-auto-5">Small — radio_sm</label>
      <span class="radio_control">
        <input id="radio-auto-5" type="radio" class="radio_input" name="radio-label-end-size" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>
    <div class="radio radio_label-end radio_lg">
      <label class="radio_label" for="radio-auto-6">Large — radio_lg</label>
      <span class="radio_control">
        <input id="radio-auto-6" type="radio" class="radio_input" name="radio-label-end-size2" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="form_field">
      <span class="form_field-label" id="radio-pay-label">결제 수단</span>
      <fieldset class="radio_group" aria-labelledby="radio-pay-label">
        <div class="radio">
          <span class="radio_control">
            <input type="radio" class="radio_input" id="radio-pay-card" name="radio-pay" value="card" checked>
            <span class="radio_box" aria-hidden="true"></span>
          </span>
          <label class="radio_label" for="radio-pay-card">
            <span class="radio_content">
              <span class="radio_label">신용카드</span>
              <span class="radio_hint">Visa · Mastercard · 국내 카드</span>
            </span>
          </label>
        </div>
        <div class="radio">
          <span class="radio_control">
            <input type="radio" class="radio_input" id="radio-pay-bank" name="radio-pay" value="bank">
            <span class="radio_box" aria-hidden="true"></span>
          </span>
          <label class="radio_label" for="radio-pay-bank">
            <span class="radio_content">
              <span class="radio_label">계좌이체</span>
              <span class="radio_hint">등록된 계좌로 결제합니다.</span>
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
    <p>레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="radio_group radio_group_horizontal">
      <label class="radio_control"><input aria-label="항목 선택" type="radio" class="radio_input" name="radio-standalone">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
      <label class="radio_control"><input type="radio" class="radio_input" name="radio-standalone" checked aria-label="선택됨">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
      <label class="radio_control"><input type="radio" class="radio_input" name="radio-standalone-disabled" disabled aria-label="비활성">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="radio_group radio_group_horizontal">
      <div class="radio radio_sm">
        <span class="radio_control">
          <input id="radio-auto-7" type="radio" class="radio_input" name="radio-size" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-7">Small — radio_sm</label>
      </div>
      <div class="radio">
        <span class="radio_control">
          <input id="radio-auto-8" type="radio" class="radio_input" name="radio-size">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-8">Medium — 기본</label>
      </div>
      <div class="radio radio_lg">
        <span class="radio_control">
          <input id="radio-auto-9" type="radio" class="radio_input" name="radio-size">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-9">Large — radio_lg</label>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-10" type="radio" class="radio_input" name="radio-width-inline" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-10">기본 — 인라인 너비</label>
    </div>

    <div class="radio radio_block">
      <span class="radio_control">
        <input id="radio-auto-11" type="radio" class="radio_input" name="radio-width-block" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-11">radio_block — 전체 너비</label>
    </div>

    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">radio_group_block</legend>
      <div class="radio">
        <span class="radio_control">
          <input id="radio-auto-12" type="radio" class="radio_input" name="radio-width-g1" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-12">항목 1</label>
      </div>
      <div class="radio">
        <span class="radio_control">
          <input id="radio-auto-13" type="radio" class="radio_input" name="radio-width-g1">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-13">항목 2</label>
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
    <div class="radio color_primary">
      <span class="radio_control">
        <input id="radio-auto-14" type="radio" class="radio_input" name="radio-color-primary" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-14">Primary</label>
    </div>
    <div class="radio color_success">
      <span class="radio_control">
        <input id="radio-auto-15" type="radio" class="radio_input" name="radio-color-success" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-15">Success</label>
    </div>
    <div class="radio color_danger">
      <span class="radio_control">
        <input id="radio-auto-16" type="radio" class="radio_input" name="radio-color-danger" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-16">Danger</label>
    </div>
    <div class="radio color_warning">
      <span class="radio_control">
        <input id="radio-auto-17" type="radio" class="radio_input" name="radio-color-warning" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-17">Warning</label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>선택·미선택·비활성·오류(is-error) 상태를 지원합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-18" type="radio" class="radio_input" name="radio-state">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-18">미선택</label>
    </div>
    <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-19" type="radio" class="radio_input" name="radio-state" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-19">선택됨</label>
    </div>
    <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-20" type="radio" class="radio_input" name="radio-state-disabled" disabled>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-20">비활성</label>
    </div>
    <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-21" type="radio" class="radio_input" name="radio-state-disabled" checked disabled>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-21">선택됨 (비활성)</label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">그룹</h2>
    <p>radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="radio_group">
      <legend class="radio_group-legend">배송 방법 (세로)</legend>
      <div class="radio">
        <span class="radio_control">
          <input id="radio-auto-23" type="radio" class="radio_input" name="radio-group-ship" value="standard" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-23">일반 배송</label>
      </div>
      <div class="radio">
        <span class="radio_control">
          <input id="radio-auto-24" type="radio" class="radio_input" name="radio-group-ship" value="express">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-24">빠른 배송</label>
      </div>
      <div class="radio">
        <span class="radio_control">
          <input id="radio-auto-25" type="radio" class="radio_input" name="radio-group-ship" value="pickup">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-25">매장 픽업</label>
      </div>
    </fieldset>

    <fieldset class="radio_group radio_group_horizontal">
      <legend class="radio_group-legend">크기 (가로)</legend>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-group-size" value="s" checked>
        <span class="radio_label">S</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-group-size" value="m">
        <span class="radio_label">M</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-group-size" value="l">
        <span class="radio_label">L</span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="button-type-heading">
  <div class="demo_section-header">
    <h2 id="button-type-heading">버튼형</h2>
    <p>radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="all" checked>
        <span class="radio_label">전체</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="active">
        <span class="radio_label">진행 중</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="done">
        <span class="radio_label">완료</span>
      </label>
      <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="hold" disabled>
        <span class="radio_label">보류 (비활성)</span>
      </label>
    </fieldset>

    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button radio_sm color_success">
        <input type="radio" class="radio_input" name="radio-btn-size" value="sm" checked>
        <span class="radio_label">Small</span>
      </label>
      <label class="radio radio_button color_success">
        <input type="radio" class="radio_input" name="radio-btn-size" value="md" checked>
        <span class="radio_label">Medium</span>
      </label>
      <label class="radio radio_button radio_lg color_success">
        <input type="radio" class="radio_input" name="radio-btn-size" value="lg" checked>
        <span class="radio_label">Large</span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="card-type-heading">
  <div class="demo_section-header">
    <h2 id="card-type-heading">카드형</h2>
      </div>

  <div class="demo_section-preview">
    <fieldset class="radio_group">
      <legend class="radio_group-legend">요금제 선택</legend>
      <div class="card_deck card_deck-2">
        <div class="radio_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control"><input type="radio" class="radio_input" id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
          </article>
        </div>
        <div class="radio_card color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control"><input type="radio" class="radio_input" id="radio-plan-pro" name="radio-plan" value="pro" aria-labelledby="radio-plan-pro-title radio-plan-pro-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
          </article>
        </div>
        <div class="radio_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="radio_control"><input type="radio" class="radio_input" id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled aria-labelledby="radio-plan-enterprise-title radio-plan-enterprise-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="radio_group">
      <legend class="radio_group-legend">기본 권한 (가로)</legend>
      <div class="card_deck card_deck-3">
        <div class="radio_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-role-read-title">읽기</h3>
              </div>
              <div class="card_extra">
                <label class="radio_control"><input type="radio" class="radio_input" id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-role-read-desc">조회 권한</div>
          </article>
        </div>
        <div class="radio_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-role-write-title">쓰기</h3>
              </div>
              <div class="card_extra">
                <label class="radio_control"><input type="radio" class="radio_input" id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-role-write-desc">수정 권한</div>
          </article>
        </div>
        <div class="radio_card">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-role-admin-title">관리</h3>
              </div>
              <div class="card_extra">
                <label class="radio_control"><input type="radio" class="radio_input" id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-role-admin-desc">전체 관리 권한</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="radio_group">
      <legend class="radio_group-legend">요금제 선택 — 카드 전체 클릭 (radio_card-clickable)</legend>
      <div class="card_deck card_deck-2">
        <div class="radio_card radio_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-full-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control">
                  <input type="radio" class="radio_input" id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
          </article>
        </div>
        <div class="radio_card radio_card-clickable color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-full-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control">
                  <input type="radio" class="radio_input" id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
          </article>
        </div>
        <div class="radio_card radio_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-full-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="radio_control">
                  <input type="radio" class="radio_input" id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
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
        <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
        <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
          <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-26" type="radio" class="radio_input" name="radio-form-channel" value="email" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-26">이메일</label>
    </div>
          <div class="radio">
      <span class="radio_control">
        <input id="radio-auto-27" type="radio" class="radio_input" name="radio-form-channel" value="sms">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-27">SMS</label>
    </div>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
        <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
          <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-form-role" value="viewer" checked>
        <span class="radio_label">뷰어</span>
          </label>
          <label class="radio radio_button">
        <input type="radio" class="radio_input" name="radio-form-role" value="editor">
        <span class="radio_label">편집자</span>
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
            <td><code class="typo_code">radio</code></td>
            <td>라디오 래퍼</td>
          </tr>
          <tr>
            <td><code class="typo_code">radio_control</code> · <code class="typo_code">radio_input</code> · <code class="typo_code">radio_box</code></td>
            <td>입력·커스텀 원</td>
          </tr>
          <tr>
            <td><code class="typo_code">radio_label</code></td>
            <td>라벨</td>
          </tr>
          <tr>
            <td><code class="typo_code">radio_label-end</code> · <code class="typo_code">radio_button</code></td>
            <td>레이아웃 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">radio_group</code></td>
            <td>fieldset 그룹</td>
          </tr>
          <tr>
            <td><code class="typo_code">radio_card</code> · <code class="typo_code">radio_card-clickable</code></td>
            <td>카드형 — clickable은 data-ripple + JS 위임</td>
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
`,a=ea(na),ia=da(na),ra={title:"Components/폼/Radio",id:"components-radio",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"단일 선택을 위한 Radio 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, radio_block · radio_group_block으로 전체 너비를 사용합니다."}}}},d={name:"유형",render:()=>n(a[0]),parameters:{docs:{...e(a[0].previewHtml).docs,description:{story:a[0].description}}}},i={name:"레이블 뒤",render:()=>n(a[1]),parameters:{docs:{...e(a[1].previewHtml).docs,description:{story:a[1].description}}}},s={name:"기본",render:()=>n(a[2]),parameters:{docs:{...e(a[2].previewHtml).docs,description:{story:a[2].description}}}},r={name:"단독 사용",render:()=>n(a[3]),parameters:{docs:{...e(a[3].previewHtml).docs,description:{story:a[3].description}}}},o={name:"크기",render:()=>n(a[4]),parameters:{docs:{...e(a[4].previewHtml).docs,description:{story:a[4].description}}}},l={name:"너비",render:()=>n(a[5]),parameters:{docs:{...e(a[5].previewHtml).docs,description:{story:a[5].description}}}},c={name:"색상",render:()=>n(a[6]),parameters:{docs:{...e(a[6].previewHtml).docs,description:{story:a[6].description}}}},t={name:"상태",render:()=>n(a[7]),parameters:{docs:{...e(a[7].previewHtml).docs,description:{story:a[7].description}}}},p={name:"그룹",render:()=>n(a[8]),parameters:{docs:{...e(a[8].previewHtml).docs,description:{story:a[8].description}}}},_={name:"버튼형",render:()=>n(a[9]),parameters:{docs:{...e(a[9].previewHtml).docs,description:{story:a[9].description}}}},u={name:"카드형",render:()=>n(a[10]),parameters:{docs:{...e(a[10].previewHtml).docs,description:{story:a[10].description}}}},b={name:"폼 레이아웃",render:()=>n(a[11]),parameters:{docs:{...e(a[11].previewHtml).docs,description:{story:a[11].description}}}},m={name:"클래스 · 속성",tags:["!dev"],render:()=>n(ia[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}};var v,h,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '유형',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '레이블 뒤',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,x,D;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '기본',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var C,S,H;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '단독 사용',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(H=(S=r.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var z,B,A;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var E,M,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '너비',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(L=(M=l.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,O,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '색상',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var T,P,U;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(U=(P=t.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var I,J,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '그룹',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(N=(J=p.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var V,W,X;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '버튼형',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(X=(W=_.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var j,q,G;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '카드형',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '폼 레이아웃',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,aa;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(aa=($=m.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};const oa=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","ApiClasses"];export{m as ApiClasses,d as Demo0,i as Demo1,u as Demo10,b as Demo11,s as Demo2,r as Demo3,o as Demo4,l as Demo5,c as Demo6,t as Demo7,p as Demo8,_ as Demo9,oa as __namedExportsOrder,ra as default};
