import{b as n,g as i,e as te,c as ae}from"./gulp-demos-C1efgjoy.js";const ne=`<!-- @meta
title: Input | HTML Components
activeNav: input
pageTitle: Input
-->
<div class="page_intro">
  <h1>Input</h1>
  <p class="lead">텍스트·숫자·날짜 등 단일 행 입력을 위한 Input 컴포넌트입니다. form_field · input_field · input_group · input_split · input_otp를 조합해 레이블, 힌트, 애드온, 분할·인증 입력을 구성합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>레이블과 힌트 텍스트가 포함된 폼 필드입니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="form_field">
      <label class="form_field-label" for="input-name">이름</label>
      <div class="input_clearable">
        <input type="text" class="input" id="input-name" placeholder="이름을 입력하세요">
        <button type="button" class="input_clear" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="standalone-heading">
  <div class="demo_section-header">
    <h2 id="standalone-heading">단독 사용</h2>
      </div>

  <div class="demo_section-preview">
    <div class="input_field">
      <label class="form_field-label" for="input-standalone-placeholder">검색어</label>
      <div class="input_clearable">
        <input type="text" class="input" id="input-standalone-placeholder" placeholder="플레이스홀더">
        <button type="button" class="input_clear" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="input_field">
      <label class="form_field-label" for="input-standalone-value">닉네임</label>
      <div class="input_clearable">
        <input type="text" class="input" id="input-standalone-value" value="입력된 값">
        <button type="button" class="input_clear" aria-label="입력 지우기">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="input_field">
      <label class="form_field-label" for="input-standalone-disabled">코드</label>
      <input type="text" class="input" id="input-standalone-disabled" placeholder="비활성" disabled>
    </div>

    <div class="input_group">
      <span class="input_group-addon" aria-hidden="true">
        <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </span>
      <input type="search" class="input" placeholder="검색어를 입력하세요" aria-label="검색">
    </div>
    <p class="form_field-hint">아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에 보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">입력 타입</h2>
    <p>HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class="input"은 모든 타입에 공통으로 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="input-type-text">텍스트</label>
      <input type="text" class="input" id="input-type-text" placeholder="일반 텍스트">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-password">비밀번호</label>
      <input type="password" class="input" id="input-type-password" placeholder="8자 이상" autocomplete="new-password">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-email">이메일</label>
      <input type="email" class="input" id="input-type-email" placeholder="name@example.com" autocomplete="email">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-tel">전화번호</label>
      <input type="tel" class="input" id="input-type-tel" placeholder="010-0000-0000" autocomplete="tel">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-url">URL</label>
      <input type="url" class="input" id="input-type-url" placeholder="https://example.com">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-search">검색</label>
      <input type="search" class="input" id="input-type-search" placeholder="키워드 검색">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-number">숫자</label>
      <input type="number" class="input" id="input-type-number" placeholder="0" min="0" max="100" step="1">
      <p class="form_field-hint">0~100 사이 정수</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-date">날짜</label>
      <input type="date" class="input" id="input-type-date">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-time">시간</label>
      <input type="time" class="input" id="input-type-time">
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="kind-heading">
  <div class="demo_section-header">
    <h2 id="kind-heading">입력 종류</h2>
    <p>결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="input-kind-card-1">카드번호</label>
      <div class="input_split" role="group" aria-labelledby="input-kind-card-1" data-input-split data-input-numeric>
        <input type="text" class="input" id="input-kind-card-1" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 1~4자리" placeholder="0000">
        <span class="input_split_sep" aria-hidden="true">-</span>
        <input type="text" class="input" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 5~8자리" placeholder="0000">
        <span class="input_split_sep" aria-hidden="true">-</span>
        <input type="password" class="input" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 9~12자리" placeholder="0000">
        <span class="input_split_sep" aria-hidden="true">-</span>
        <input type="password" class="input" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 13~16자리" placeholder="0000">
      </div>
      <p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
    </div>

    <div class="input_row">
      <div class="form_field">
        <label class="form_field-label" for="input-kind-exp-mm">유효기간</label>
        <div class="input_split" role="group" aria-label="카드 유효기간" data-input-split data-input-numeric>
          <input type="text" class="input" id="input-kind-exp-mm" inputmode="numeric" maxlength="2" autocomplete="cc-exp-month" aria-label="월(MM)" placeholder="MM">
          <span class="input_split_sep" aria-hidden="true">/</span>
          <input type="text" class="input" inputmode="numeric" maxlength="2" autocomplete="cc-exp-year" aria-label="년(YY)" placeholder="YY">
        </div>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="input-kind-cvc">CVC</label>
        <input type="password" class="input" id="input-kind-cvc" inputmode="numeric" maxlength="3" autocomplete="cc-csc" placeholder="000" aria-describedby="input-kind-cvc-hint">
        <p class="form_field-hint" id="input-kind-cvc-hint">카드 뒷면 3자리</p>
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" id="input-kind-otp-label">인증번호 (OTP)</label>
      <div class="input_otp" role="group" aria-labelledby="input-kind-otp-label" data-input-otp>
        <input type="text" class="input" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="인증번호 1자리">
        <input type="text" class="input" inputmode="numeric" maxlength="1" aria-label="인증번호 2자리">
        <input type="text" class="input" inputmode="numeric" maxlength="1" aria-label="인증번호 3자리">
        <input type="text" class="input" inputmode="numeric" maxlength="1" aria-label="인증번호 4자리">
        <input type="text" class="input" inputmode="numeric" maxlength="1" aria-label="인증번호 5자리">
        <input type="text" class="input" inputmode="numeric" maxlength="1" aria-label="인증번호 6자리">
      </div>
      <p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-phone">휴대폰 번호</label>
      <div class="input_group">
        <span class="input_group-addon">+82</span>
        <input type="tel" class="input" id="input-kind-phone" placeholder="10-0000-0000" autocomplete="tel">
        <button type="button" class="btn btn_outline color_primary btn_sm"><span class="btn_label">인증요청</span></button>
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-sms-code">휴대폰 인증번호</label>
      <div class="input_group">
        <input type="text" class="input" id="input-kind-sms-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="6자리 인증번호" aria-describedby="input-kind-sms-hint">
        <span class="input_group-addon" aria-hidden="true">03:00</span>
        <button type="button" class="btn btn_outline color_primary btn_sm"><span class="btn_label">확인</span></button>
      </div>
      <p class="form_field-hint" id="input-kind-sms-hint">인증번호가 오지 않으면 재요청해 주세요.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-rrn-1">주민등록번호</label>
      <div class="input_split" role="group" aria-labelledby="input-kind-rrn-1" data-input-split data-input-numeric>
        <input type="text" class="input" id="input-kind-rrn-1" inputmode="numeric" maxlength="6" aria-label="주민등록번호 앞 6자리" placeholder="000000">
        <span class="input_split_sep" aria-hidden="true">-</span>
        <input type="password" class="input" inputmode="numeric" maxlength="7" aria-label="주민등록번호 뒤 7자리" placeholder="0000000">
      </div>
      <p class="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-biz-1">사업자등록번호</label>
      <div class="input_split" role="group" aria-labelledby="input-kind-biz-1" data-input-split data-input-numeric>
        <input type="text" class="input" id="input-kind-biz-1" inputmode="numeric" maxlength="3" aria-label="사업자등록번호 앞 3자리" placeholder="000">
        <span class="input_split_sep" aria-hidden="true">-</span>
        <input type="text" class="input" inputmode="numeric" maxlength="2" aria-label="사업자등록번호 중간 2자리" placeholder="00">
        <span class="input_split_sep" aria-hidden="true">-</span>
        <input type="text" class="input" inputmode="numeric" maxlength="5" aria-label="사업자등록번호 뒤 5자리" placeholder="00000">
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-account-bank">계좌번호</label>
      <div class="input_group">
        <select class="input" id="input-kind-account-bank" aria-label="은행 선택">
          <option>은행 선택</option>
          <option>국민은행</option>
          <option>신한은행</option>
          <option>우리은행</option>
        </select>
        <input type="text" class="input" inputmode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호">
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-zip">우편번호</label>
      <div class="input_group">
        <input type="text" class="input" id="input-kind-zip" inputmode="numeric" maxlength="5" placeholder="00000" autocomplete="postal-code" aria-label="우편번호">
        <button type="button" class="btn btn_outline btn_sm"><span class="btn_label">주소 검색</span></button>
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-amount">결제 금액</label>
      <div class="input_group">
        <span class="input_group-addon">₩</span>
        <input type="text" class="input" id="input-kind-amount" inputmode="numeric" placeholder="0" aria-label="결제 금액">
        <span class="input_group-addon">원</span>
      </div>
      <p class="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="input-size-sm">Small</label>
      <input type="text" class="input input_sm" id="input-size-sm" placeholder="input_sm">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-size-md">Medium</label>
      <input type="text" class="input" id="input-size-md" placeholder="기본 크기">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-size-lg">Large</label>
      <input type="text" class="input input_lg" id="input-size-lg" placeholder="input_lg">
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="input-width-full-sm">전체 너비 — Small</label>
      <input type="text" class="input input_sm" id="input-width-full-sm" placeholder="width: 100%">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-width-full-md">전체 너비 — Medium</label>
      <input type="text" class="input" id="input-width-full-md" placeholder="width: 100%">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-width-full-lg">전체 너비 — Large</label>
      <input type="text" class="input input_lg" id="input-width-full-lg" placeholder="width: 100%">
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-width-fit-sm">제한 너비 — Small</label>
      <input type="text" class="input input_sm" id="input-width-fit-sm" placeholder="form_field_fit — 최대 320px">
    </div>
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-width-fit-md">제한 너비 — Medium</label>
      <input type="text" class="input" id="input-width-fit-md" placeholder="form_field_fit — 최대 320px">
    </div>
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-width-fit-lg">제한 너비 — Large</label>
      <input type="text" class="input input_lg" id="input-width-fit-lg" placeholder="form_field_fit — 최대 320px">
    </div>

    <div class="input_field input_field_fit">
      <label class="form_field-label" for="input-width-fit-standalone-sm">input_field_fit — Small</label>
      <input type="text" class="input input_sm" id="input-width-fit-standalone-sm" placeholder="최대 320px">
    </div>
    <div class="input_field input_field_fit">
      <label class="form_field-label" for="input-width-fit-standalone-md">input_field_fit — Medium</label>
      <input type="text" class="input" id="input-width-fit-standalone-md" placeholder="최대 320px">
    </div>
    <div class="input_field input_field_fit">
      <label class="form_field-label" for="input-width-fit-standalone-lg">input_field_fit — Large</label>
      <input type="text" class="input input_lg" id="input-width-fit-standalone-lg" placeholder="최대 320px">
    </div>

    <form class="form form_vertical form_fit" action="#" method="get">
      <div class="form_field">
        <label class="form_field-label" for="input-width-form-fit">form_fit</label>
        <input type="text" class="input" id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px">
      </div>
    </form>

    <div class="input_group input_fit">
      <span class="input_group-addon">@</span>
      <input type="text" class="input input_sm" placeholder="input_group input_fit — Small" aria-label="아이디">
    </div>
    <div class="input_group input_fit">
      <span class="input_group-addon">@</span>
      <input type="text" class="input" placeholder="input_group input_fit — Medium" aria-label="아이디">
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">Input Group</h2>
    <p>input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="input_group">
      <span class="input_group-addon">https://</span>
      <input type="text" class="input" placeholder="example.com" aria-label="도메인">
    </div>

    <div class="input_group">
      <span class="input_group-addon">@</span>
      <input type="text" class="input" placeholder="username" aria-label="사용자명">
    </div>

    <div class="input_group">
      <input type="number" class="input" placeholder="금액" aria-label="금액">
      <span class="input_group-addon">원</span>
    </div>

    <div class="input_group">
      <span class="input_group-addon">₩</span>
      <input type="number" class="input" placeholder="0" aria-label="결제 금액">
      <span class="input_group-addon">KRW</span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="required-heading">
  <div class="demo_section-header">
    <h2 id="required-heading">필수 필드</h2>
    <p>required 속성과 form_field-required로 필수 입력을 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="form_field">
      <label class="form_field-label" for="input-required-email">
        이메일<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <input type="email" class="input" id="input-required-email" placeholder="name@example.com" required aria-required="true">
      <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-required-name">
        이름<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <input type="text" class="input" id="input-required-name" placeholder="홍길동" required aria-required="true">
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="input-state-default">기본</label>
      <input type="text" class="input" id="input-state-default" placeholder="입력 가능">
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-state-disabled">비활성</label>
      <input type="text" class="input" id="input-state-disabled" value="수정할 수 없음" disabled>
      <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-state-error">에러</label>
      <input type="email" class="input is-error" id="input-state-error" value="invalid-email" aria-invalid="true" aria-describedby="input-state-error-msg">
      <p class="form_field-error" id="input-state-error-msg" role="alert">올바른 이메일 형식이 아닙니다.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="clearable-heading">
  <div class="demo_section-header">
    <h2 id="clearable-heading">입력 삭제</h2>
      </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-clear-text">텍스트</label>
      <div class="input_clearable">
        <input type="text" class="input" id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인">
        <button type="button" class="input_clear" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-clear-search">검색</label>
      <div class="input_group">
        <span class="input_group-addon" aria-hidden="true">
          <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </span>
        <span class="input_clearable">
          <input type="search" class="input" id="input-clear-search" placeholder="검색어 입력">
          <button type="button" class="input_clear" aria-label="입력 지우기" hidden>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </span>
      </div>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-clear-readonly">읽기 전용 (삭제 버튼 없음)</label>
      <div class="input_clearable">
        <input type="text" class="input" id="input-clear-readonly" value="수정 불가" readonly>
        <button type="button" class="input_clear" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="example-heading">
  <div class="demo_section-header">
    <h2 id="example-heading">조합 예시</h2>
    <p>유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role="alert" · role="status"로 스크린 리더에 피드백을 전달합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <form class="form form_vertical form_compact" action="#" method="get" novalidate aria-labelledby="example-heading">
      <div class="alert color_error" role="alert" id="input-ex-form-error">
        <svg class="alert_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
        </svg>
        <div class="alert_body">
          <div class="alert_title">입력 내용을 확인해 주세요</div>
          <p class="alert_desc">비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.</p>
        </div>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="input-ex-id">
          아이디<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <div class="input_group">
          <span class="input_group-addon" aria-hidden="true">@</span>
          <input type="text" class="input input_sm is-success" id="input-ex-id" value="uxkm_user" required aria-required="true" autocomplete="username" aria-invalid="false" aria-describedby="input-ex-id-hint input-ex-id-success">
        </div>
        <p class="form_field-hint" id="input-ex-id-hint">영문·숫자 4~16자</p>
        <p class="form_field-success" id="input-ex-id-success" role="status">사용 가능한 아이디입니다.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="input-ex-pw">
          비밀번호<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <input type="password" class="input input_sm input_masked is-error" id="input-ex-pw" value="1234" required aria-required="true" autocomplete="current-password" aria-invalid="true" aria-describedby="input-ex-pw-error">
        <p class="form_field-error" id="input-ex-pw-error" role="alert">8자 이상, 영문·숫자·특수문자를 포함해 주세요.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="input-ex-email">이메일</label>
        <input type="email" class="input input_sm is-error" id="input-ex-email" value="user@" aria-invalid="true" aria-describedby="input-ex-email-error" autocomplete="email">
        <p class="form_field-error" id="input-ex-email-error" role="alert">올바른 이메일 주소를 입력해 주세요. (예: name@example.com)</p>
      </div>

      <div class="form_actions">
        <button type="submit" class="btn btn_filled color_primary btn_sm"><span class="btn_label">로그인</span></button>
        <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>
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
          <tr><td><code class="typo_code">input</code></td><td>텍스트 입력 루트</td></tr>
          <tr><td><code class="typo_code">input_sm</code> · <code class="typo_code">input_lg</code> · <code class="typo_code">input_block</code></td><td>크기·너비</td></tr>
          <tr><td><code class="typo_code">input_masked</code></td><td>마스킹 입력값 표시 시 자동 적용 (type="password" + 값 있음)</td></tr>
          <tr><td><code class="typo_code">input_group</code> · <code class="typo_code">input_group-addon</code></td><td>애드온 묶음</td></tr>
          <tr><td><code class="typo_code">input_clearable</code> · <code class="typo_code">input_clear</code></td><td>지우기 버튼 — input_clear에 data-ripple="surface"</td></tr>
          <tr><td><code class="typo_code">is-error</code> · <code class="typo_code">is-disabled</code></td><td>상태</td></tr>
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
          <tr><td><code class="typo_code">--input-max-width</code></td><td>320px</td><td>데모·폼 최대 너비</td></tr>
          <tr><td><code class="typo_code">--input-clear-size</code> · <code class="typo_code">--input-clear-offset</code></td><td>—</td><td>클리어 버튼</td></tr>
          <tr><td><code class="typo_code">--input-font-masked</code> · <code class="typo_code">--input-masked-letter-spacing</code></td><td>—</td><td>마스킹 입력</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=te(ne),ie=ae(ne),le={title:"Components/폼/Input",id:"components-input",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"텍스트·숫자·날짜 등 단일 행 입력을 위한 Input 컴포넌트입니다. form_field · input_field · input_group · input_split · input_otp를 조합해 레이블, 힌트, 애드온, 분할·인증 입력을 구성합니다."}}}},t={name:"기본",render:()=>n(e[0]),parameters:{docs:{...i(e[0].previewHtml).docs,description:{story:e[0].description}}}},a={name:"단독 사용",render:()=>n(e[1]),parameters:{docs:{...i(e[1].previewHtml).docs,description:{story:e[1].description}}}},s={name:"입력 타입",render:()=>n(e[2]),parameters:{docs:{...i(e[2].previewHtml).docs,description:{story:e[2].description}}}},l={name:"입력 종류",render:()=>n(e[3]),parameters:{docs:{...i(e[3].previewHtml).docs,description:{story:e[3].description}}}},d={name:"크기",render:()=>n(e[4]),parameters:{docs:{...i(e[4].previewHtml).docs,description:{story:e[4].description}}}},r={name:"너비",render:()=>n(e[5]),parameters:{docs:{...i(e[5].previewHtml).docs,description:{story:e[5].description}}}},o={name:"Input Group",render:()=>n(e[6]),parameters:{docs:{...i(e[6].previewHtml).docs,description:{story:e[6].description}}}},p={name:"필수 필드",render:()=>n(e[7]),parameters:{docs:{...i(e[7].previewHtml).docs,description:{story:e[7].description}}}},c={name:"상태",render:()=>n(e[8]),parameters:{docs:{...i(e[8].previewHtml).docs,description:{story:e[8].description}}}},u={name:"입력 삭제",render:()=>n(e[9]),parameters:{docs:{...i(e[9].previewHtml).docs,description:{story:e[9].description}}}},m={name:"조합 예시",render:()=>n(e[10]),parameters:{docs:{...i(e[10].previewHtml).docs,description:{story:e[10].description}}}},f={name:"클래스 · 속성",tags:["!dev"],render:()=>n(ie[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},_={name:"디자인 토큰",tags:["!dev"],render:()=>n(ie[1]),parameters:{docs:{source:{code:null},description:{story:"Input 너비·클리어 버튼·마스킹 입력에 사용하는 CSS 변수입니다."}}}};var b,v,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,g,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '단독 사용',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,C,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '입력 타입',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,B,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '입력 종류',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var H,M,q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var A,z,I;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(z=r.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,E,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Input Group',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var O,Y,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '필수 필드',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var R,U,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(F=(U=c.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var K,N,P;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '입력 삭제',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var V,W,X;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var j,J,Q;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Input 너비·클리어 버튼·마스킹 입력에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(ee=($=_.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const de=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","ApiClasses","ApiTokens"];export{f as ApiClasses,_ as ApiTokens,t as Demo0,a as Demo1,m as Demo10,s as Demo2,l as Demo3,d as Demo4,r as Demo5,o as Demo6,p as Demo7,c as Demo8,u as Demo9,de as __namedExportsOrder,le as default};
