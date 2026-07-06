<script>
export const docMeta = {
  title: 'Input | HTML Components',
  activeNav: 'input',
  pageTitle: 'Input',
};
</script>

<script setup>
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
import Select from '@/components/Select.vue';
import {
  inputClassColumns,
  inputClasses,
  inputEventColumns,
  inputEvents,
  inputPropColumns,
  inputProps,
  inputSlotColumns,
  inputSlots,
  inputTokenColumns,
  inputTokens,
} from '@/doc/data/input-api';
</script>

<template>
  <div class="page_intro">
  <h1>Input</h1>
  <p class="lead">텍스트·숫자·날짜 등 단일 행 입력을 위한 Input 컴포넌트입니다. form_field · input_field · input_group · input_split · input_otp를 조합해 레이블, 힌트, 애드온, 분할·인증 입력을 구성합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="레이블과 힌트 텍스트가 포함된 폼 필드입니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="input-name">이름</label>
      <div class="input_clearable">
        <Input id="input-name" placeholder="이름을 입력하세요" />
        <button type="button" class="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="standalone-heading"
    title="단독 사용"
    description="form_field 래퍼 없이 <code>input_field</code>로 레이블과 input을 묶을 수 있습니다. 접근 가능한 이름은 반드시 지정합니다. 보이는 레이블이 있으면 <code>label.form_field-label</code> + <code>for</code>를, 아이콘만 있는 검색창·툴바 등에는 <code>label.input_group</code>으로 input을 감싸고 <code>input_group-label_hidden</code>으로 이름을 제공합니다."
    stack
  >
    <div class="input_field">
      <label class="form_field-label" for="input-standalone-placeholder">검색어</label>
      <div class="input_clearable">
        <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
        <button type="button" class="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="input_field">
      <label class="form_field-label" for="input-standalone-value">닉네임</label>
      <div class="input_clearable">
        <Input id="input-standalone-value" model-value="입력된 값" />
        <button type="button" class="input_clear" data-ripple="surface" aria-label="입력 지우기">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="input_field">
      <label class="form_field-label" for="input-standalone-disabled">코드</label>
      <Input id="input-standalone-disabled" placeholder="비활성" disabled />
    </div>

    <Input type="search" placeholder="검색어를 입력하세요" aria-label="검색">
      <template #prefix>
        <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </template>
    </Input>
    <p class="form_field-hint">아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에 보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.</p>
  </DemoSection>

  <DemoSection
    heading-id="type-heading"
    title="입력 타입"
    description="HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class=&quot;input&quot;은 모든 타입에 공통으로 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="input-type-text">텍스트</label>
      <Input id="input-type-text" placeholder="일반 텍스트" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-password">비밀번호</label>
      <Input id="input-type-password" type="password" placeholder="8자 이상" autocomplete="new-password" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-email">이메일</label>
      <Input id="input-type-email" type="email" placeholder="name@example.com" autocomplete="email" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-tel">전화번호</label>
      <Input id="input-type-tel" type="tel" placeholder="010-0000-0000" autocomplete="tel" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-url">URL</label>
      <Input id="input-type-url" type="url" placeholder="https://example.com" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-search">검색</label>
      <Input id="input-type-search" type="search" placeholder="키워드 검색" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-number">숫자</label>
      <Input id="input-type-number" type="number" placeholder="0" min="0" max="100" step="1" />
      <p class="form_field-hint">0~100 사이 정수</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-date">날짜</label>
      <Input id="input-type-date" type="date" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-type-time">시간</label>
      <Input id="input-type-time" type="time" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="kind-heading"
    title="입력 종류"
    description="결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="input-kind-card-1">카드번호</label>
      <div class="input_split" role="group" aria-labelledby="input-kind-card-1" data-input-split data-input-numeric>
        <Input id="input-kind-card-1" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 1~4자리" placeholder="0000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 5~8자리" placeholder="0000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input type="password" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 9~12자리" placeholder="0000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input type="password" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 13~16자리" placeholder="0000" />
      </div>
      <p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
    </div>

    <div class="input_row">
      <div class="form_field">
        <label class="form_field-label" for="input-kind-exp-mm">유효기간</label>
        <div class="input_split" role="group" aria-label="카드 유효기간" data-input-split data-input-numeric>
          <Input id="input-kind-exp-mm" inputmode="numeric" maxlength="2" autocomplete="cc-exp-month" aria-label="월(MM)" placeholder="MM" />
          <span class="input_split_sep" aria-hidden="true">/</span>
          <Input inputmode="numeric" maxlength="2" autocomplete="cc-exp-year" aria-label="년(YY)" placeholder="YY" />
        </div>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="input-kind-cvc">CVC</label>
        <Input id="input-kind-cvc" type="password" inputmode="numeric" maxlength="3" autocomplete="cc-csc" placeholder="000" aria-describedby="input-kind-cvc-hint" />
        <p class="form_field-hint" id="input-kind-cvc-hint">카드 뒷면 3자리</p>
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" id="input-kind-otp-label">인증번호 (OTP)</label>
      <div class="input_otp" role="group" aria-labelledby="input-kind-otp-label" data-input-otp>
        <Input inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="인증번호 1자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 2자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 3자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 4자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 5자리" />
        <Input inputmode="numeric" maxlength="1" aria-label="인증번호 6자리" />
      </div>
      <p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-phone">휴대폰 번호</label>
      <div class="input_group">
        <span class="input_group-addon">+82</span>
        <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autocomplete="tel" />
        <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-sms-code">휴대폰 인증번호</label>
      <div class="input_group">
        <Input id="input-kind-sms-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="6자리 인증번호" aria-describedby="input-kind-sms-hint" />
        <span class="input_group-addon" aria-hidden="true">03:00</span>
        <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
      </div>
      <p class="form_field-hint" id="input-kind-sms-hint">인증번호가 오지 않으면 재요청해 주세요.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-rrn-1">주민등록번호</label>
      <div class="input_split" role="group" aria-labelledby="input-kind-rrn-1" data-input-split data-input-numeric>
        <Input id="input-kind-rrn-1" inputmode="numeric" maxlength="6" aria-label="주민등록번호 앞 6자리" placeholder="000000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input type="password" inputmode="numeric" maxlength="7" aria-label="주민등록번호 뒤 7자리" placeholder="0000000" />
      </div>
      <p class="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-biz-1">사업자등록번호</label>
      <div class="input_split" role="group" aria-labelledby="input-kind-biz-1" data-input-split data-input-numeric>
        <Input id="input-kind-biz-1" inputmode="numeric" maxlength="3" aria-label="사업자등록번호 앞 3자리" placeholder="000" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input inputmode="numeric" maxlength="2" aria-label="사업자등록번호 중간 2자리" placeholder="00" />
        <span class="input_split_sep" aria-hidden="true">-</span>
        <Input inputmode="numeric" maxlength="5" aria-label="사업자등록번호 뒤 5자리" placeholder="00000" />
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-account-bank">계좌번호</label>
      <div class="input_group">
        <Select id="input-kind-account-bank" aria-label="은행 선택">
          <option>은행 선택</option>
          <option>국민은행</option>
          <option>신한은행</option>
          <option>우리은행</option>
        </Select>
        <Input inputmode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-zip">우편번호</label>
      <div class="input_group">
        <Input id="input-kind-zip" inputmode="numeric" maxlength="5" placeholder="00000" autocomplete="postal-code" aria-label="우편번호" />
        <Button variant="outline" size="sm" type="button" label="주소 검색" />
      </div>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="input-kind-amount">결제 금액</label>
      <Input id="input-kind-amount" inputmode="numeric" placeholder="0" aria-label="결제 금액">
        <template #prefix>₩</template>
        <template #suffix>원</template>
      </Input>
      <p class="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="input-size-sm">Small</label>
      <Input id="input-size-sm" size="sm" placeholder="input_sm" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-size-md">Medium</label>
      <Input id="input-size-md" placeholder="기본 크기" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-size-lg">Large</label>
      <Input id="input-size-lg" size="lg" placeholder="input_lg" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="width-heading"
    title="너비"
    description="크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="input-width-full-sm">전체 너비 — Small</label>
      <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-width-full-md">전체 너비 — Medium</label>
      <Input id="input-width-full-md" placeholder="width: 100%" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-width-full-lg">전체 너비 — Large</label>
      <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-width-fit-sm">제한 너비 — Small</label>
      <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
    </div>
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-width-fit-md">제한 너비 — Medium</label>
      <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
    </div>
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-width-fit-lg">제한 너비 — Large</label>
      <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
    </div>

    <div class="input_field input_field_fit">
      <label class="form_field-label" for="input-width-fit-standalone-sm">input_field_fit — Small</label>
      <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
    </div>
    <div class="input_field input_field_fit">
      <label class="form_field-label" for="input-width-fit-standalone-md">input_field_fit — Medium</label>
      <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
    </div>
    <div class="input_field input_field_fit">
      <label class="form_field-label" for="input-width-fit-standalone-lg">input_field_fit — Large</label>
      <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
    </div>

    <FormLayout layout="vertical" fit>
      <div class="form_field">
        <label class="form_field-label" for="input-width-form-fit">form_fit</label>
        <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
      </div>
    </FormLayout>

    <Input class="input_fit" size="sm" placeholder="input_group input_fit — Small" aria-label="아이디">
      <template #prefix>@</template>
    </Input>
    <Input class="input_fit" placeholder="input_group input_fit — Medium" aria-label="아이디">
      <template #prefix>@</template>
    </Input>
  </DemoSection>

  <DemoSection
    heading-id="group-heading"
    title="Input Group"
    description="input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다."
    stack
  >
    <Input placeholder="example.com" aria-label="도메인">
      <template #prefix>https://</template>
    </Input>
    <Input placeholder="username" aria-label="사용자명">
      <template #prefix>@</template>
    </Input>
    <Input type="number" placeholder="금액" aria-label="금액">
      <template #suffix>원</template>
    </Input>
    <Input type="number" placeholder="0" aria-label="결제 금액">
      <template #prefix>₩</template>
      <template #suffix>KRW</template>
    </Input>
  </DemoSection>

  <DemoSection
    heading-id="required-heading"
    title="필수 필드"
    description="required 속성과 form_field-required로 필수 입력을 표시합니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="input-required-email">
        이메일<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <Input id="input-required-email" type="email" placeholder="name@example.com" required aria-required="true" />
      <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-required-name">
        이름<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="input-state-default">기본</label>
      <Input id="input-state-default" placeholder="입력 가능" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-state-disabled">비활성</label>
      <Input id="input-state-disabled" model-value="수정할 수 없음" disabled />
      <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-state-error">에러</label>
      <Input id="input-state-error" type="email" error model-value="invalid-email" aria-describedby="input-state-error-msg" />
      <p class="form_field-error" id="input-state-error-msg" role="alert">올바른 이메일 형식이 아닙니다.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="clearable-heading"
    title="입력 삭제"
    description="<code>input_clearable</code> 래퍼로 값이 있을 때 우측에 지우기 버튼을 표시합니다. <code>readonly</code> · <code>disabled</code> 상태에서는 버튼이 나타나지 않습니다."
    stack
  >
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="input-clear-text">텍스트</label>
      <div class="input_clearable">
        <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
        <button type="button" class="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden>
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
          <Input id="input-clear-search" type="search" placeholder="검색어 입력" />
          <button type="button" class="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden>
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
        <Input id="input-clear-readonly" model-value="수정 불가" readonly />
        <button type="button" class="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="example-heading"
    title="조합 예시"
    description="유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role=&quot;alert&quot; · role=&quot;status&quot;로 스크린 리더에 피드백을 전달합니다."
    stack
  >
    <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
      <Alert
        id="input-ex-form-error"
        color="danger"
        title="입력 내용을 확인해 주세요"
        description="비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요."
      />

      <div class="form_field">
        <label class="form_field-label" for="input-ex-id">
          아이디<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input
          id="input-ex-id"
          size="sm"
          class="is-success"
          model-value="uxkm_user"
          required
          aria-required="true"
          autocomplete="username"
          aria-invalid="false"
          aria-describedby="input-ex-id-hint input-ex-id-success"
        >
          <template #prefix>@</template>
        </Input>
        <p class="form_field-hint" id="input-ex-id-hint">영문·숫자 4~16자</p>
        <p class="form_field-success" id="input-ex-id-success" role="status">사용 가능한 아이디입니다.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="input-ex-pw">
          비밀번호<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input
          id="input-ex-pw"
          type="password"
          size="sm"
          error
          model-value="1234"
          required
          aria-required="true"
          autocomplete="current-password"
          aria-invalid="true"
          aria-describedby="input-ex-pw-error"
        />
        <p class="form_field-error" id="input-ex-pw-error" role="alert">8자 이상, 영문·숫자·특수문자를 포함해 주세요.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="input-ex-email">이메일</label>
        <Input
          id="input-ex-email"
          type="email"
          size="sm"
          error
          model-value="user@"
          aria-invalid="true"
          aria-describedby="input-ex-email-error"
          autocomplete="email"
        />
        <p class="form_field-error" id="input-ex-email-error" role="alert">올바른 이메일 주소를 입력해 주세요. (예: name@example.com)</p>
      </div>

      <div class="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="inputPropColumns" :rows="inputProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      선언되지 않은 HTML 속성·이벤트(<code class="typo_code">id</code>,
      <code class="typo_code">autocomplete</code>, <code class="typo_code">@blur</code> 등)는
      루트 <code class="typo_code">input</code> 요소에 그대로 전달됩니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="inputSlotColumns" :rows="inputSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="inputEventColumns" :rows="inputEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="inputClassColumns" :rows="inputClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="inputTokenColumns" :rows="inputTokens" code-column="name" />
  </ApiSection>
</template>
