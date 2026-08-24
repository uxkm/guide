import{b as s,c as e,e as W,d as X}from"./gulp-demos-uIKTVH8x.js";const U=`<!-- @meta
title: Rate | HTML Components
activeNav: rate
pageTitle: Rate
-->
<div class="page_intro">
  <h1>Rate</h1>
  <p class="lead">별점·만족도를 선택하는 Rate 컴포넌트입니다. <code>fieldset</code>과 <code>input type="radio"</code>로 폼 값을 전달하며, <strong>rate_allow-half</strong>로 반별, <strong>rate_clearable</strong>로 선택 해제를 지원합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">유형</h2>
    <p>접근 가능한 이름 지정 방식별 예시입니다. <code>legend</code> · <code>aria-labelledby</code> · <code>aria-label</code>을 상황에 맞게 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <fieldset class="rate">
      <legend class="rate_legend">legend — 상품 만족도</legend>
      <div class="rate_control">
        <div class="rate_stars">
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-legend" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-legend" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-legend" value="3" checked>
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-legend" value="4">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-legend" value="5">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">5점</span>
          </label>
        </div>
        <output class="rate_value" data-rate-output>3점</output>
      </div>
    </fieldset>

    <div class="rate" role="group" aria-labelledby="rate-type-labelledby-label">
      <span class="rate_legend" id="rate-type-labelledby-label">aria-labelledby — 서비스 평가</span>
      <div class="rate_control">
        <div class="rate_stars">
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="3">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="4" checked>
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="5">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">5점</span>
          </label>
        </div>
        <output class="rate_value" data-rate-output>4점</output>
      </div>
    </div>

    <fieldset class="rate">
      <legend class="rate_legend">aria-label — 단독</legend>
      <div class="rate_control">
        <div class="rate_stars" aria-label="별점 5점 만점">
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-aria" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-aria" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-aria" value="3">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-aria" value="4">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-type-aria" value="5">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">5점</span>
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.</p>
  </div>

  <div class="demo_section-preview">
    <fieldset class="rate">
      <legend class="rate_legend">배송 속도</legend>
      <div class="rate_control">
        <div class="rate_stars">
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-basic" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-basic" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-basic" value="3" checked>
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-basic" value="4">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star">
            <input type="radio" class="rate_input" name="rate-basic" value="5">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">5점</span>
          </label>
        </div>
        <output class="rate_value" data-rate-output>3점</output>
      </div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <fieldset class="rate rate_sm">
      <legend class="rate_legend">Small — rate_sm</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-sm" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-sm" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-sm" value="3" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-sm" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-sm" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate">
      <legend class="rate_legend">Medium — 기본</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-md" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-md" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-md" value="3" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-md" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-md" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate rate_lg">
      <legend class="rate_legend">Large — rate_lg</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-lg" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-lg" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-lg" value="3" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-lg" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-size-lg" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <fieldset class="rate color_primary">
      <legend class="rate_legend">Primary</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-primary" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-primary" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-primary" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-primary" value="4" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-primary" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate color_success">
      <legend class="rate_legend">Success</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-success" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-success" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-success" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-success" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-success" value="5" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate color_danger">
      <legend class="rate_legend">Danger</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-danger" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-danger" value="2" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-danger" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-danger" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-color-danger" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="half-heading">
  <div class="demo_section-header">
    <h2 id="half-heading">반별</h2>
    <p><code>rate_allow-half</code>를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 <code>rate_input-half</code>와 <code>rate_star-half</code> 버튼을 배치합니다.</p>
  </div>

  <div class="demo_section-preview">
    <fieldset class="rate rate_allow-half">
      <legend class="rate_legend">정밀 평가 — rate_allow-half</legend>
      <div class="rate_control">
        <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-half" value="1"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="0.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-half" value="2"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="1.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-half" value="3"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="2.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-half" value="4"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="3.5" checked><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-half" value="5"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="4.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">5점</span></label></div>
        <output class="rate_value" data-rate-output>3.5점</output>
      </div>
      <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="clear-heading">
  <div class="demo_section-header">
    <h2 id="clear-heading">선택 해제</h2>
    <p><code>rate_clearable</code>을 추가하면 선택된 별을 다시 클릭하거나 초기화 버튼으로 값을 지울 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <fieldset class="rate rate_clearable">
      <legend class="rate_legend">만족도 — rate_clearable</legend>
      <div class="rate_control">
        <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-clear" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-clear" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-clear" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-clear" value="4" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-clear" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
        <button type="button" class="rate_clear" aria-label="별점 초기화" title="초기화">
          <svg class="rate_clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <output class="rate_value" data-rate-output>4점</output>
      </div>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="readonly-heading">
  <div class="demo_section-header">
    <h2 id="readonly-heading">읽기 전용</h2>
      </div>

  <div class="demo_section-preview">
    <div class="rate is-readonly" role="img" aria-label="5점 만점 중 4.5점">
      <div class="rate_stars">
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-half"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span></span>
      </div>
      <span class="rate_value">4.5</span>
    </div>

    <div class="rate is-readonly rate_sm" role="img" aria-label="5점 만점 중 2점">
      <div class="rate_stars">
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>비활성·오류(is-error) 상태를 지원합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="rate" disabled>
      <legend class="rate_legend">비활성</legend>
      <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-disabled" value="1" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-disabled" value="2" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-disabled" value="3" checked disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-disabled" value="4" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-disabled" value="5" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate is-error">
      <legend class="rate_legend">오류 — is-error</legend>
      <div class="rate_control">
        <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-error" value="1" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-error" value="2" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-error" value="3" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-error" value="4" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-state-error" value="5" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
        <output class="rate_value" data-rate-output></output>
      </div>
      <p class="form_field-error">별점을 선택해 주세요.</p>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="form-heading">
  <div class="demo_section-header">
    <h2 id="form-heading">폼 레이아웃</h2>
    <p>form_field · form_vertical과 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="rate-form-label">상품 만족도</span>
        <fieldset class="rate" aria-labelledby="rate-form-label">
          <div class="rate_control">
            <div class="rate_stars"><label class="rate_star"><input type="radio" class="rate_input" name="rate-form" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-form" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-form" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-form" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star"><input type="radio" class="rate_input" name="rate-form" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
            <output class="rate_value" data-rate-output></output>
          </div>
        </fieldset>
        <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
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
          <tr><th scope="col">클래스</th><th scope="col">설명</th></tr>
        </thead>
        <tbody>
          <tr><td><code class="typo_code">rate</code></td><td>별점 루트</td></tr>
          <tr><td><code class="typo_code">rate_sm</code> · <code class="typo_code">rate_lg</code> · <code class="typo_code">rate_allow-half</code> · <code class="typo_code">rate_clearable</code></td><td>크기·기능</td></tr>
          <tr><td><code class="typo_code">rate_stars</code> · <code class="typo_code">rate_star</code> · <code class="typo_code">rate_star-graphic</code></td><td>별 아이콘</td></tr>
          <tr><td><code class="typo_code">rate_input</code> · <code class="typo_code">rate_star-label</code> · <code class="typo_code">rate_value</code> · <code class="typo_code">rate_clear</code></td><td>입력·값·초기화</td></tr>
          <tr><td><code class="typo_code">rate_legend</code> · <code class="typo_code">rate_control</code></td><td>fieldset 구조</td></tr>
          <tr><td><code class="typo_code">is-readonly</code> · <code class="typo_code">is-filled</code> · <code class="typo_code">is-half</code></td><td>상태</td></tr>
          <tr><td><code class="typo_code">data-ripple</code></td><td>클릭 파장 활성. data-ripple="surface"는 절대 위치 보조 버튼용</td></tr>
          <tr><td><code class="typo_code">data-ripple="false"</code></td><td>해당 요소 ripple 비활성</td></tr>
          <tr><td><code class="typo_code">data-no-ripple</code></td><td>하위 전체 ripple 비활성</td></tr>
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
          <tr><th scope="col">토큰</th><th scope="col">기본값</th><th scope="col">설명</th></tr>
        </thead>
        <tbody>
          <tr><td><code class="typo_code">--rate-star-size</code> · <code class="typo_code">--rate-star-size-sm</code> · <code class="typo_code">--rate-star-size-lg</code></td><td>1.25rem · 1rem · 1.5rem</td><td>별 크기</td></tr>
          <tr><td><code class="typo_code">--rate-star-gap</code> · <code class="typo_code">--rate-clear-size</code></td><td>0.125rem · 1.5rem</td><td>별 간격·초기화 버튼</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,a=W(U),V=X(U),Z={title:"Components/폼/Rate",id:"components-rate",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'별점·만족도를 선택하는 Rate 컴포넌트입니다. fieldset과 input type="radio"로 폼 값을 전달하며, rate_allow-half로 반별, rate_clearable로 선택 해제를 지원합니다.'}}}},l={name:"유형",render:()=>s(a[0]),parameters:{docs:{...e(a[0].previewHtml).docs,description:{story:a[0].description}}}},r={name:"기본",render:()=>s(a[1]),parameters:{docs:{...e(a[1].previewHtml).docs,description:{story:a[1].description}}}},t={name:"크기",render:()=>s(a[2]),parameters:{docs:{...e(a[2].previewHtml).docs,description:{story:a[2].description}}}},n={name:"색상",render:()=>s(a[3]),parameters:{docs:{...e(a[3].previewHtml).docs,description:{story:a[3].description}}}},i={name:"반별",render:()=>s(a[4]),parameters:{docs:{...e(a[4].previewHtml).docs,description:{story:a[4].description}}}},c={name:"선택 해제",render:()=>s(a[5]),parameters:{docs:{...e(a[5].previewHtml).docs,description:{story:a[5].description}}}},o={name:"읽기 전용",render:()=>s(a[6]),parameters:{docs:{...e(a[6].previewHtml).docs,description:{story:a[6].description}}}},d={name:"상태",render:()=>s(a[7]),parameters:{docs:{...e(a[7].previewHtml).docs,description:{story:a[7].description}}}},p={name:"폼 레이아웃",render:()=>s(a[8]),parameters:{docs:{...e(a[8].previewHtml).docs,description:{story:a[8].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>s(V[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>s(V[1]),parameters:{docs:{source:{code:null},description:{story:"Rate 별 크기·간격·초기화 버튼에 사용하는 CSS 변수입니다."}}}};var u,L,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(L=l.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var h,f,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var m,C,w;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var y,B,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '색상',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(z=(B=n.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var x,M,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '반별',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var S,A,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '선택 해제',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var k,E,R;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '읽기 전용',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(R=(E=o.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var T,O,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var N,P,j;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '폼 레이아웃',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var q,G,I;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(G=_.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Rate 별 크기·간격·초기화 버튼에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const $=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","ApiClasses","ApiTokens"];export{_ as ApiClasses,v as ApiTokens,l as Demo0,r as Demo1,t as Demo2,n as Demo3,i as Demo4,c as Demo5,o as Demo6,d as Demo7,p as Demo8,$ as __namedExportsOrder,Z as default};
