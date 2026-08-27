import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };

const closeIconHtml = `<svg class="icon" data-component="Icon" data-icon="close" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"></path></svg>`;
const searchIconHtml = `<svg class="icon" data-component="Icon" data-icon="search" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>`;

function htmlClearable(input: string, options: { value?: string; inactive?: boolean; prefix?: string; suffix?: string; fit?: boolean } = {}) {
  const filled = options.value && !options.inactive ? ' is-filled' : '';
  const fit = options.fit ? ' input_fit' : '';
  const button = `<button class="btn btn_text color_muted btn_icon-only input_clear" type="button" data-component="Button" data-ripple="false" aria-label="입력 지우기"${options.value && !options.inactive ? '' : ' hidden'}>${closeIconHtml}</button>`;
  const control = `<span class="input_clearable${filled}${options.prefix || options.suffix ? '' : fit}">${input}${button}</span>`;
  if (!options.prefix && !options.suffix) return control;
  return `<div class="input_group${fit}">${options.prefix ? `<span class="input_group-addon" aria-hidden="true">${options.prefix}</span>` : ''}${control}${options.suffix ? `<span class="input_group-addon">${options.suffix}</span>` : ''}</div>`;
}

const fieldHtml = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const fieldReact = (id: string, label: string, control: string, message = '') => `<div className="form_field"><label className="form_field-label" htmlFor="${id}">${label}</label>${control}${message}</div>`;
const fieldVue = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const hiddenLabelHtml = (id: string, label: string) => `<label class="input_group-label_hidden" for="${id}">${label}</label>`;

const sources: Record<string, Source> = {
  basic: {
    html: fieldHtml('input-name', '이름', htmlClearable('<input id="input-name" class="input" type="text" placeholder="이름을 입력하세요">'), '<p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>'),
    react: fieldReact('input-name', '이름', '<ButtonClearable id="input-name" placeholder="이름을 입력하세요" />', '<p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>'),
    vue: fieldVue('input-name', '이름', '<Input id="input-name" clearable placeholder="이름을 입력하세요" />', '<p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>')
  },
  standalone: {
    html: `<div class="input_field input_field_fit"><label class="form_field-label" for="input-search">검색어</label>${htmlClearable('<input id="input-search" class="input" type="text" placeholder="플레이스홀더">')}</div>
<div class="input_field input_field_fit"><label class="form_field-label" for="input-nickname">닉네임</label>${htmlClearable('<input id="input-nickname" class="input" type="text" value="입력된 값">', { value: '입력된 값' })}</div>
${hiddenLabelHtml('standalone-search', '검색')}${htmlClearable('<input id="standalone-search" class="input" type="search" placeholder="검색어를 입력하세요">', { prefix: searchIconHtml })}`,
    react: `<>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-search">검색어</label><ButtonClearable id="input-search" placeholder="플레이스홀더" /></div>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-nickname">닉네임</label><ButtonClearable id="input-nickname" defaultValue="입력된 값" /></div>
  <ButtonClearable type="search" label="검색" placeholder="검색어를 입력하세요" prefix={<Icon name="search" />} />
</>`,
    vue: `<div class="input_field input_field_fit"><label class="form_field-label" for="input-search">검색어</label><Input id="input-search" clearable placeholder="플레이스홀더" /></div>
<div class="input_field input_field_fit"><label class="form_field-label" for="input-nickname">닉네임</label><Input id="input-nickname" clearable model-value="입력된 값" /></div>
${hiddenLabelHtml('standalone-search', '검색')}<Input id="standalone-search" type="search" clearable placeholder="검색어를 입력하세요"><template #prefix><Icon name="search" /></template></Input>`
  },
  type: {
    html: [
      fieldHtml('input-type-text', '텍스트', htmlClearable('<input id="input-type-text" class="input" type="text" placeholder="텍스트">')),
      fieldHtml('input-type-password', '비밀번호', htmlClearable('<input id="input-type-password" class="input" type="password" placeholder="비밀번호">')),
      fieldHtml('input-type-email', '이메일', htmlClearable('<input id="input-type-email" class="input" type="email" placeholder="name@example.com">')),
      fieldHtml('input-type-tel', '전화번호', htmlClearable('<input id="input-type-tel" class="input" type="tel" placeholder="전화번호">')),
      fieldHtml('input-type-url', 'URL', htmlClearable('<input id="input-type-url" class="input" type="url" placeholder="URL">')),
      fieldHtml('input-type-search', '검색', htmlClearable('<input id="input-type-search" class="input" type="search" placeholder="검색">')),
      fieldHtml('input-type-number', '숫자', '<input id="input-type-number" class="input" type="number" placeholder="숫자">'),
      fieldHtml('input-type-date', '날짜', '<input id="input-type-date" class="input" type="date" placeholder="날짜">'),
      fieldHtml('input-type-time', '시간', '<input id="input-type-time" class="input" type="time" placeholder="시간">')
    ].join('\n'),
    react: `<>
  ${fieldReact('input-type-text', '텍스트', '<ButtonClearable id="input-type-text" type="text" placeholder="텍스트" />')}
  ${fieldReact('input-type-password', '비밀번호', '<ButtonClearable id="input-type-password" type="password" placeholder="비밀번호" />')}
  ${fieldReact('input-type-email', '이메일', '<ButtonClearable id="input-type-email" type="email" placeholder="name@example.com" />')}
  ${fieldReact('input-type-tel', '전화번호', '<ButtonClearable id="input-type-tel" type="tel" placeholder="전화번호" />')}
  ${fieldReact('input-type-url', 'URL', '<ButtonClearable id="input-type-url" type="url" placeholder="URL" />')}
  ${fieldReact('input-type-search', '검색', '<ButtonClearable id="input-type-search" type="search" placeholder="검색" />')}
  ${fieldReact('input-type-number', '숫자', '<Input id="input-type-number" type="number" placeholder="숫자" />')}
  ${fieldReact('input-type-date', '날짜', '<Input id="input-type-date" type="date" placeholder="날짜" />')}
  ${fieldReact('input-type-time', '시간', '<Input id="input-type-time" type="time" placeholder="시간" />')}
</>`,
    vue: `${fieldVue('input-type-text', '텍스트', '<Input id="input-type-text" type="text" clearable placeholder="텍스트" />')}
${fieldVue('input-type-password', '비밀번호', '<Input id="input-type-password" type="password" clearable placeholder="비밀번호" />')}
${fieldVue('input-type-email', '이메일', '<Input id="input-type-email" type="email" clearable placeholder="name@example.com" />')}
${fieldVue('input-type-tel', '전화번호', '<Input id="input-type-tel" type="tel" clearable placeholder="전화번호" />')}
${fieldVue('input-type-url', 'URL', '<Input id="input-type-url" type="url" clearable placeholder="URL" />')}
${fieldVue('input-type-search', '검색', '<Input id="input-type-search" type="search" clearable placeholder="검색" />')}
${fieldVue('input-type-number', '숫자', '<Input id="input-type-number" type="number" placeholder="숫자" />')}
${fieldVue('input-type-date', '날짜', '<Input id="input-type-date" type="date" placeholder="날짜" />')}
${fieldVue('input-type-time', '시간', '<Input id="input-type-time" type="time" placeholder="시간" />')}`
  },
  kind: {
    html: `<div class="form_field"><p class="form_field-label" id="card-label">카드번호</p><div class="input_split" role="group" aria-labelledby="card-label">${[1, 2, 3, 4].map((part) => `${part > 1 ? '<span class="input_split_sep" aria-hidden="true">-</span>' : ''}<label class="display_contents"><span class="input_group-label_hidden">카드번호 ${part}번째 묶음</span><input class="input" type="${part > 2 ? 'password' : 'text'}" inputmode="numeric" maxlength="4" placeholder="0000"></label>`).join('')}</div><p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
<div class="form_field"><p class="form_field-label" id="otp-label">인증번호 (OTP)</p><div class="input_otp" role="group" aria-labelledby="otp-label">${[1, 2, 3, 4, 5, 6].map((part) => `<label class="display_contents"><span class="input_group-label_hidden">인증번호 ${part}자리</span><input class="input" type="text" inputmode="numeric" maxlength="1"></label>`).join('')}</div><p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
${fieldHtml('phone', '휴대폰 번호', '<div class="input_group"><span class="input_group-addon">+82</span><input id="phone" class="input" type="tel" placeholder="10-0000-0000"><button class="btn btn_outline color_primary btn_sm" type="button"><span class="btn_label">인증요청</span></button></div>')}
${fieldHtml('amount', '결제 금액', htmlClearable('<input id="amount" class="input" type="text" inputmode="numeric" placeholder="0">', { prefix: '₩', suffix: '원' }))}`,
    react: `<>
  <div className="form_field"><p className="form_field-label" id="card-label">카드번호</p><div className="input_split" role="group" aria-labelledby="card-label">${[1, 2, 3, 4].map((part) => `${part > 1 ? '<span className="input_split_sep" aria-hidden="true">-</span>' : ''}<ImplicitInput label="카드번호 ${part}번째 묶음"${part > 2 ? ' type="password"' : ''} inputMode="numeric" maxLength={4} placeholder="0000" />`).join('')}</div><p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
  <div className="form_field"><p className="form_field-label" id="otp-label">인증번호 (OTP)</p><div className="input_otp" role="group" aria-labelledby="otp-label">${[1, 2, 3, 4, 5, 6].map((part) => `<ImplicitInput label="인증번호 ${part}자리" inputMode="numeric" maxLength={1} />`).join('')}</div><p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
  ${fieldReact('phone', '휴대폰 번호', '<div className="input_group"><span className="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div>')}
  ${fieldReact('amount', '결제 금액', '<ButtonClearable id="amount" inputMode="numeric" placeholder="0" prefix="₩" suffix="원" />')}
</>`,
    vue: `<div class="form_field"><p class="form_field-label" id="card-label">카드번호</p><div class="input_split" role="group" aria-labelledby="card-label">${[1, 2, 3, 4].map((part) => `${part > 1 ? '<span class="input_split_sep" aria-hidden="true">-</span>' : ''}<label class="display_contents"><span class="input_group-label_hidden">카드번호 ${part}번째 묶음</span><Input${part > 2 ? ' type="password"' : ''} inputmode="numeric" maxlength="4" placeholder="0000" /></label>`).join('')}</div><p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
<div class="form_field"><p class="form_field-label" id="otp-label">인증번호 (OTP)</p><div class="input_otp" role="group" aria-labelledby="otp-label">${[1, 2, 3, 4, 5, 6].map((part) => `<label class="display_contents"><span class="input_group-label_hidden">인증번호 ${part}자리</span><Input inputmode="numeric" maxlength="1" /></label>`).join('')}</div><p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
${fieldVue('phone', '휴대폰 번호', '<div class="input_group"><span class="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div>')}
${fieldVue('amount', '결제 금액', '<Input id="amount" inputmode="numeric" clearable placeholder="0"><template #prefix>₩</template><template #suffix>원</template></Input>')}`
  },
  size: {
    html: `${fieldHtml('input-sm', 'SM', htmlClearable('<input id="input-sm" class="input input_sm" type="text" placeholder="input_sm">'))}
${fieldHtml('input-md', 'MD', htmlClearable('<input id="input-md" class="input" type="text" placeholder="기본 크기">'))}
${fieldHtml('input-lg', 'LG', htmlClearable('<input id="input-lg" class="input input_lg" type="text" placeholder="input_lg">'))}`,
    react: `<>
  ${fieldReact('input-sm', 'SM', '<ButtonClearable id="input-sm" size="sm" placeholder="input_sm" />')}
  ${fieldReact('input-md', 'MD', '<ButtonClearable id="input-md" size="md" placeholder="기본 크기" />')}
  ${fieldReact('input-lg', 'LG', '<ButtonClearable id="input-lg" size="lg" placeholder="input_lg" />')}
</>`,
    vue: `${fieldVue('input-sm', 'SM', '<Input id="input-sm" size="sm" clearable placeholder="input_sm" />')}
${fieldVue('input-md', 'MD', '<Input id="input-md" size="md" clearable placeholder="기본 크기" />')}
${fieldVue('input-lg', 'LG', '<Input id="input-lg" size="lg" clearable placeholder="input_lg" />')}`
  },
  width: {
    html: `${fieldHtml('input-full', '전체 너비', htmlClearable('<input id="input-full" class="input" type="text" placeholder="width: 100%">'))}
<div class="form_field form_field_fit"><label class="form_field-label" for="input-fit">제한 너비</label>${htmlClearable('<input id="input-fit" class="input" type="text" placeholder="최대 320px">')}</div>
${hiddenLabelHtml('width-addon', '아이디')}${htmlClearable('<input id="width-addon" class="input" type="text" placeholder="애드온 그룹 최대 320px">', { prefix: '@', fit: true })}`,
    react: `<>
  ${fieldReact('input-full', '전체 너비', '<ButtonClearable id="input-full" placeholder="width: 100%" />')}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="input-fit">제한 너비</label><ButtonClearable id="input-fit" placeholder="최대 320px" /></div>
  <ButtonClearable wrapperClassName="input_fit" label="아이디" placeholder="애드온 그룹 최대 320px" prefix="@" />
</>`,
    vue: `${fieldVue('input-full', '전체 너비', '<Input id="input-full" clearable placeholder="width: 100%" />')}
<div class="form_field form_field_fit"><label class="form_field-label" for="input-fit">제한 너비</label><Input id="input-fit" clearable placeholder="최대 320px" /></div>
${hiddenLabelHtml('width-addon', '아이디')}<Input id="width-addon" class="input_fit" clearable placeholder="애드온 그룹 최대 320px"><template #prefix>@</template></Input>`
  },
  group: {
    html: `${hiddenLabelHtml('group-domain', '도메인')}${htmlClearable('<input id="group-domain" class="input" type="text" placeholder="example.com">', { prefix: 'https://' })}
${hiddenLabelHtml('group-user', '사용자명')}${htmlClearable('<input id="group-user" class="input" type="text" placeholder="username">', { prefix: '@' })}
${hiddenLabelHtml('group-amount', '결제 금액')}${htmlClearable('<input id="group-amount" class="input" type="text" inputmode="numeric" placeholder="0">', { prefix: '₩', suffix: 'KRW' })}`,
    react: `<>
  <ButtonClearable label="도메인" placeholder="example.com" prefix="https://" />
  <ButtonClearable label="사용자명" placeholder="username" prefix="@" />
  <ButtonClearable label="결제 금액" inputMode="numeric" placeholder="0" prefix="₩" suffix="KRW" />
</>`,
    vue: `${hiddenLabelHtml('group-domain', '도메인')}<Input id="group-domain" clearable placeholder="example.com"><template #prefix>https://</template></Input>
${hiddenLabelHtml('group-user', '사용자명')}<Input id="group-user" clearable placeholder="username"><template #prefix>@</template></Input>
${hiddenLabelHtml('group-amount', '결제 금액')}<Input id="group-amount" clearable inputmode="numeric" placeholder="0"><template #prefix>₩</template><template #suffix>KRW</template></Input>`
  },
  required: {
    html: `<div class="form_field form_field_fit"><label class="form_field-label" for="required-email">이메일<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label>${htmlClearable('<input id="required-email" class="input" type="email" placeholder="name@example.com" required aria-required="true">')}<p class="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`,
    react: `<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="required-email">이메일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><ButtonClearable id="required-email" type="email" placeholder="name@example.com" required aria-required="true" /><p className="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`,
    vue: `<div class="form_field form_field_fit"><label class="form_field-label" for="required-email">이메일<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Input id="required-email" type="email" clearable placeholder="name@example.com" required aria-required="true" /><p class="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`
  },
  state: {
    html: `${fieldHtml('state-default', '기본', htmlClearable('<input id="state-default" class="input" type="text" placeholder="입력 가능">'))}
${fieldHtml('state-disabled', '비활성', htmlClearable('<input id="state-disabled" class="input" type="text" value="수정할 수 없음" disabled>', { value: '수정할 수 없음', inactive: true }))}
${fieldHtml('state-readonly', '읽기 전용', htmlClearable('<input id="state-readonly" class="input" type="text" value="읽기만 가능" readonly>', { value: '읽기만 가능', inactive: true }))}
${fieldHtml('state-error', '에러', htmlClearable('<input id="state-error" class="input is-error" type="text" value="invalid-email" aria-invalid="true" aria-describedby="state-error-message">', { value: 'invalid-email' }), '<p class="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>')}
${fieldHtml('state-success', '성공', htmlClearable('<input id="state-success" class="input is-success" type="text" value="uxkm_user" aria-describedby="state-success-message">', { value: 'uxkm_user' }), '<p class="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>')}`,
    react: `<>
  ${fieldReact('state-default', '기본', '<ButtonClearable id="state-default" placeholder="입력 가능" />')}
  ${fieldReact('state-disabled', '비활성', '<ButtonClearable id="state-disabled" defaultValue="수정할 수 없음" disabled />')}
  ${fieldReact('state-readonly', '읽기 전용', '<ButtonClearable id="state-readonly" defaultValue="읽기만 가능" readOnly />')}
  ${fieldReact('state-error', '에러', '<ButtonClearable id="state-error" error defaultValue="invalid-email" aria-describedby="state-error-message" />', '<p className="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>')}
  ${fieldReact('state-success', '성공', '<ButtonClearable id="state-success" className="is-success" defaultValue="uxkm_user" aria-describedby="state-success-message" />', '<p className="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>')}
</>`,
    vue: `${fieldVue('state-default', '기본', '<Input id="state-default" clearable placeholder="입력 가능" />')}
${fieldVue('state-disabled', '비활성', '<Input id="state-disabled" clearable model-value="수정할 수 없음" disabled />')}
${fieldVue('state-readonly', '읽기 전용', '<Input id="state-readonly" clearable model-value="읽기만 가능" readonly />')}
${fieldVue('state-error', '에러', '<Input id="state-error" clearable error model-value="invalid-email" aria-describedby="state-error-message" />', '<p class="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>')}
${fieldVue('state-success', '성공', '<Input id="state-success" clearable class="is-success" model-value="uxkm_user" aria-describedby="state-success-message" />', '<p class="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>')}`
  },
  clearable: {
    html: `${hiddenLabelHtml('clear-text', '텍스트')}${htmlClearable('<input id="clear-text" class="input" type="text" value="지울 수 있는 값">', { value: '지울 수 있는 값' })}
${hiddenLabelHtml('clear-search', '검색')}${htmlClearable('<input id="clear-search" class="input" type="search" value="검색어">', { value: '검색어', prefix: searchIconHtml })}
${hiddenLabelHtml('clear-readonly', '읽기 전용')}${htmlClearable('<input id="clear-readonly" class="input" type="text" value="수정 불가" readonly>', { value: '수정 불가', inactive: true })}`,
    react: `<>
  <ButtonClearable label="텍스트" defaultValue="지울 수 있는 값" />
  <ButtonClearable label="검색" type="search" defaultValue="검색어" prefix={<Icon name="search" />} />
  <ButtonClearable label="읽기 전용" defaultValue="수정 불가" readOnly />
</>`,
    vue: `${hiddenLabelHtml('clear-text', '텍스트')}<Input id="clear-text" clearable model-value="지울 수 있는 값" />
${hiddenLabelHtml('clear-search', '검색')}<Input id="clear-search" type="search" clearable model-value="검색어"><template #prefix><Icon name="search" /></template></Input>
${hiddenLabelHtml('clear-readonly', '읽기 전용')}<Input id="clear-readonly" clearable model-value="수정 불가" readonly />`
  },
  example: {
    html: `<form class="form form_vertical form_fit form_compact"><div class="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>${fieldHtml('login-id', '아이디', htmlClearable('<input id="login-id" class="input is-success" type="text" value="uxkm_user" aria-invalid="false" aria-describedby="login-id-success">', { value: 'uxkm_user' }), '<p id="login-id-success" class="form_field-success" role="status">사용 가능한 아이디입니다.</p>')}${fieldHtml('login-password', '비밀번호', htmlClearable('<input id="login-password" class="input is-error input_masked" type="password" value="1234" aria-invalid="true" aria-describedby="login-password-error">', { value: '1234' }), '<p id="login-password-error" class="form_field-error" role="alert">8자 이상 입력해 주세요.</p>')}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">로그인</span></button><button class="btn btn_ghost" type="button"><span class="btn_label">취소</span></button></div></form>`,
    react: `<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>
  <div className="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>
  ${fieldReact('login-id', '아이디', '<ButtonClearable id="login-id" className="is-success" defaultValue="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" />', '<p id="login-id-success" className="form_field-success" role="status">사용 가능한 아이디입니다.</p>')}
  ${fieldReact('login-password', '비밀번호', '<ButtonClearable id="login-password" type="password" error defaultValue="1234" aria-describedby="login-password-error" />', '<p id="login-password-error" className="form_field-error" role="alert">8자 이상 입력해 주세요.</p>')}
  <div className="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div>
</form>`,
    vue: `<form class="form form_vertical form_fit form_compact" @submit.prevent>
  <div class="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>
  ${fieldVue('login-id', '아이디', '<Input id="login-id" clearable class="is-success" model-value="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" />', '<p id="login-id-success" class="form_field-success" role="status">사용 가능한 아이디입니다.</p>')}
  ${fieldVue('login-password', '비밀번호', '<Input id="login-password" type="password" clearable error model-value="1234" aria-describedby="login-password-error" />', '<p id="login-password-error" class="form_field-error" role="alert">8자 이상 입력해 주세요.</p>')}
  <div class="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div>
</form>`
  }
};

const reactClearableHelper = `function ButtonClearable({ defaultValue = '', prefix, suffix, wrapperClassName = '', label, ...props }) {
  const [value, setValue] = useState(defaultValue);
  const rootRef = useRef(null);
  const generatedId = useId();
  const inputId = props.id ?? (label ? \`input-\${generatedId.replace(/:/g, '')}\` : undefined);
  const inactive = props.disabled || props.readOnly;
  const hasAddon = prefix != null || suffix != null;
  const control = (
    <span ref={!hasAddon ? rootRef : undefined} className={['input_clearable', value && !inactive && 'is-filled', !hasAddon && wrapperClassName].filter(Boolean).join(' ')}>
      <Input {...props} id={inputId} value={value} onChange={(event) => setValue(event.target.value)} />
      <Button className="input_clear" variant="text" color="muted" ripple={false} ariaLabel="입력 지우기" iconOnly hidden={!value || inactive} iconBefore={<Icon name="close" />} onClick={() => { if (inactive) return; setValue(''); requestAnimationFrame(() => rootRef.current?.querySelector('input')?.focus()); }} />
    </span>
  );
  const inputControl = !hasAddon ? control : <div ref={rootRef} className={['input_group', wrapperClassName].filter(Boolean).join(' ')}>{prefix != null && <span className="input_group-addon" aria-hidden="true">{prefix}</span>}{control}{suffix != null && <span className="input_group-addon">{suffix}</span>}</div>;
  return <>{label && <label className="input_group-label_hidden" htmlFor={inputId}>{label}</label>}{inputControl}</>;
}`;

const reactImplicitInputHelper = `function ImplicitInput({ label, ...props }) {
  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Input {...props} /></label>;
}`;

function indent(value: string, spaces: number) { const prefix = ' '.repeat(spaces); return value.split('\n').map((line) => `${prefix}${line}`).join('\n'); }
function examples(key: string, source: Source): FrameworkExample[] {
  const usesClearable = source.react.includes('<ButtonClearable');
  const usesImplicitInput = source.react.includes('<ImplicitInput');
  const usesButton = source.react.includes('<Button') || usesClearable;
  const usesIcon = source.react.includes('<Icon') || usesClearable;
  const reactImports = [
    usesClearable ? `import { useId, useRef, useState } from 'react';` : '',
    `import Input from '@uxkm/react/input';`,
    usesButton ? `import Button from '@uxkm/react/button';` : '',
    usesIcon ? `import Icon from '@uxkm/react/icon';` : ''
  ].filter(Boolean).join('\n');
  const vueImports = [
    `import Input from '@uxkm/vue/input';`,
    source.vue.includes('<Button') ? `import Button from '@uxkm/vue/button';` : '',
    source.vue.includes('<Icon') ? `import Icon from '@uxkm/vue/icon';` : ''
  ].filter(Boolean).join('\n');
  const reactHelpers = [usesClearable ? reactClearableHelper : '', usesImplicitInput ? reactImplicitInputHelper : ''].filter(Boolean).join('\n\n');
  const react = `${reactImports}${reactHelpers ? `\n\n${reactHelpers}` : ''}\n\nexport function Example() {\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\n${vueImports}\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  const html = source.html.replace(/<input(?![^>]*data-component=)/g, '<input data-component="Input"');
  const gulp = `{% from "../../basic/Icon/icon.njk" import icon %}\n${html.replaceAll(closeIconHtml, "{{ icon('close') }}").replaceAll(searchIconHtml, "{{ icon('search') }}")}`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/form/Input/Input.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/form/Input/input.njk · ${key}`, code: gulp },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/input · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/input · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/input · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/input · ${key}`, code: react }
  ];
}

export const inputFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
