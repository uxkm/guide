import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t={}){let n=t.value&&!t.inactive?` is-filled`:``,r=t.fit?` input_fit`:``,a=`<button class="btn btn_text color_muted btn_icon-only input_clear" type="button" data-component="Button" data-ripple="false" aria-label="입력 지우기"${t.value&&!t.inactive?``:` hidden`}>${i}</button>`,o=`<span class="input_clearable${n}${t.prefix||t.suffix?``:r}">${e}${a}</span>`;return!t.prefix&&!t.suffix?o:`<div class="input_group${r}">${t.prefix?`<span class="input_group-addon" aria-hidden="true">${t.prefix}</span>`:``}${o}${t.suffix?`<span class="input_group-addon">${t.suffix}</span>`:``}</div>`}function n(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>`${n}${e}`).join(`
`)}function r(e,t){let r=t.react.includes(`<ButtonClearable`),o=t.react.includes(`<ImplicitInput`),s=t.react.includes(`<Button`)||r,c=t.react.includes(`<Icon`)||r,l=[r?`import { useId, useRef, useState } from 'react';`:``,`import Input from '@uxkm/react/input';`,s?`import Button from '@uxkm/react/button';`:``,c?`import Icon from '@uxkm/react/icon';`:``].filter(Boolean).join(`
`),u=[`import Input from '@uxkm/vue/input';`,t.vue.includes(`<Button`)?`import Button from '@uxkm/vue/button';`:``,t.vue.includes(`<Icon`)?`import Icon from '@uxkm/vue/icon';`:``].filter(Boolean).join(`
`),d=[r?ee:``,o?te:``].filter(Boolean).join(`

`),f=`${l}${d?`\n\n${d}`:``}\n\nexport function Example() {\n  return (\n${n(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,p=`<script setup>\n${u}\n<\/script>\n\n<template>\n${n(t.vue,2)}\n</template>`,m=t.html.replace(/<input(?![^>]*data-component=)/g,`<input data-component="Input"`),h=`{% from "../../basic/Icon/icon.njk" import icon %}\n${m.replaceAll(i,`{{ icon('close') }}`).replaceAll(a,`{{ icon('search') }}`)}`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Input/Input.html · ${e}`,code:m},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Input/input.njk · ${e}`,code:h},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/input · ${e}`,code:p},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/input · ${e}`,code:p},{id:`react`,label:`React`,fileName:`@uxkm/react/input · ${e}`,code:f},{id:`next`,label:`Next`,fileName:`@uxkm/react/input · ${e}`,code:f}]}var i,a,o,s,c,l,u,ee,te,d;function f(){return(f=e((()=>{i=`<svg class="icon" data-component="Icon" data-icon="close" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"></path></svg>`,a=`<svg class="icon" data-component="Icon" data-icon="search" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>`,o=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,s=(e,t,n,r=``)=>`<div className="form_field"><label className="form_field-label" htmlFor="${e}">${t}</label>${n}${r}</div>`,c=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,l=(e,t)=>`<label class="input_group-label_hidden" for="${e}">${t}</label>`,u={basic:{html:o(`input-name`,`이름`,t(`<input id="input-name" class="input" type="text" placeholder="이름을 입력하세요">`),`<p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>`),react:s(`input-name`,`이름`,`<ButtonClearable id="input-name" placeholder="이름을 입력하세요" />`,`<p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>`),vue:c(`input-name`,`이름`,`<Input id="input-name" clearable placeholder="이름을 입력하세요" />`,`<p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>`)},standalone:{html:`<div class="input_field input_field_fit"><label class="form_field-label" for="input-search">검색어</label>${t(`<input id="input-search" class="input" type="text" placeholder="플레이스홀더">`)}</div>
<div class="input_field input_field_fit"><label class="form_field-label" for="input-nickname">닉네임</label>${t(`<input id="input-nickname" class="input" type="text" value="입력된 값">`,{value:`입력된 값`})}</div>
${l(`standalone-search`,`검색`)}${t(`<input id="standalone-search" class="input" type="search" placeholder="검색어를 입력하세요">`,{prefix:a})}`,react:`<>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-search">검색어</label><ButtonClearable id="input-search" placeholder="플레이스홀더" /></div>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-nickname">닉네임</label><ButtonClearable id="input-nickname" defaultValue="입력된 값" /></div>
  <ButtonClearable type="search" label="검색" placeholder="검색어를 입력하세요" prefix={<Icon name="search" />} />
</>`,vue:`<div class="input_field input_field_fit"><label class="form_field-label" for="input-search">검색어</label><Input id="input-search" clearable placeholder="플레이스홀더" /></div>
<div class="input_field input_field_fit"><label class="form_field-label" for="input-nickname">닉네임</label><Input id="input-nickname" clearable model-value="입력된 값" /></div>
${l(`standalone-search`,`검색`)}<Input id="standalone-search" type="search" clearable placeholder="검색어를 입력하세요"><template #prefix><Icon name="search" /></template></Input>`},type:{html:[o(`input-type-text`,`텍스트`,t(`<input id="input-type-text" class="input" type="text" placeholder="텍스트">`)),o(`input-type-password`,`비밀번호`,t(`<input id="input-type-password" class="input" type="password" placeholder="비밀번호">`)),o(`input-type-email`,`이메일`,t(`<input id="input-type-email" class="input" type="email" placeholder="name@example.com">`)),o(`input-type-tel`,`전화번호`,t(`<input id="input-type-tel" class="input" type="tel" placeholder="전화번호">`)),o(`input-type-url`,`URL`,t(`<input id="input-type-url" class="input" type="url" placeholder="URL">`)),o(`input-type-search`,`검색`,t(`<input id="input-type-search" class="input" type="search" placeholder="검색">`)),o(`input-type-number`,`숫자`,`<input id="input-type-number" class="input" type="number" placeholder="숫자">`),o(`input-type-date`,`날짜`,`<input id="input-type-date" class="input" type="date" placeholder="날짜">`),o(`input-type-time`,`시간`,`<input id="input-type-time" class="input" type="time" placeholder="시간">`)].join(`
`),react:`<>
  ${s(`input-type-text`,`텍스트`,`<ButtonClearable id="input-type-text" type="text" placeholder="텍스트" />`)}
  ${s(`input-type-password`,`비밀번호`,`<ButtonClearable id="input-type-password" type="password" placeholder="비밀번호" />`)}
  ${s(`input-type-email`,`이메일`,`<ButtonClearable id="input-type-email" type="email" placeholder="name@example.com" />`)}
  ${s(`input-type-tel`,`전화번호`,`<ButtonClearable id="input-type-tel" type="tel" placeholder="전화번호" />`)}
  ${s(`input-type-url`,`URL`,`<ButtonClearable id="input-type-url" type="url" placeholder="URL" />`)}
  ${s(`input-type-search`,`검색`,`<ButtonClearable id="input-type-search" type="search" placeholder="검색" />`)}
  ${s(`input-type-number`,`숫자`,`<Input id="input-type-number" type="number" placeholder="숫자" />`)}
  ${s(`input-type-date`,`날짜`,`<Input id="input-type-date" type="date" placeholder="날짜" />`)}
  ${s(`input-type-time`,`시간`,`<Input id="input-type-time" type="time" placeholder="시간" />`)}
</>`,vue:`${c(`input-type-text`,`텍스트`,`<Input id="input-type-text" type="text" clearable placeholder="텍스트" />`)}
${c(`input-type-password`,`비밀번호`,`<Input id="input-type-password" type="password" clearable placeholder="비밀번호" />`)}
${c(`input-type-email`,`이메일`,`<Input id="input-type-email" type="email" clearable placeholder="name@example.com" />`)}
${c(`input-type-tel`,`전화번호`,`<Input id="input-type-tel" type="tel" clearable placeholder="전화번호" />`)}
${c(`input-type-url`,`URL`,`<Input id="input-type-url" type="url" clearable placeholder="URL" />`)}
${c(`input-type-search`,`검색`,`<Input id="input-type-search" type="search" clearable placeholder="검색" />`)}
${c(`input-type-number`,`숫자`,`<Input id="input-type-number" type="number" placeholder="숫자" />`)}
${c(`input-type-date`,`날짜`,`<Input id="input-type-date" type="date" placeholder="날짜" />`)}
${c(`input-type-time`,`시간`,`<Input id="input-type-time" type="time" placeholder="시간" />`)}`},kind:{html:`<div class="form_field"><p class="form_field-label" id="card-label">카드번호</p><div class="input_split" role="group" aria-labelledby="card-label">${[1,2,3,4].map(e=>`${e>1?`<span class="input_split_sep" aria-hidden="true">-</span>`:``}<label class="display_contents"><span class="input_group-label_hidden">카드번호 ${e}번째 묶음</span><input class="input" type="${e>2?`password`:`text`}" inputmode="numeric" maxlength="4" placeholder="0000"></label>`).join(``)}</div><p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
<div class="form_field"><p class="form_field-label" id="otp-label">인증번호 (OTP)</p><div class="input_otp" role="group" aria-labelledby="otp-label">${[1,2,3,4,5,6].map(e=>`<label class="display_contents"><span class="input_group-label_hidden">인증번호 ${e}자리</span><input class="input" type="text" inputmode="numeric" maxlength="1"></label>`).join(``)}</div><p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
${o(`phone`,`휴대폰 번호`,`<div class="input_group"><span class="input_group-addon">+82</span><input id="phone" class="input" type="tel" placeholder="10-0000-0000"><button class="btn btn_outline color_primary btn_sm" type="button"><span class="btn_label">인증요청</span></button></div>`)}
${o(`amount`,`결제 금액`,t(`<input id="amount" class="input" type="text" inputmode="numeric" placeholder="0">`,{prefix:`₩`,suffix:`원`}))}`,react:`<>
  <div className="form_field"><p className="form_field-label" id="card-label">카드번호</p><div className="input_split" role="group" aria-labelledby="card-label">${[1,2,3,4].map(e=>`${e>1?`<span className="input_split_sep" aria-hidden="true">-</span>`:``}<ImplicitInput label="카드번호 ${e}번째 묶음"${e>2?` type="password"`:``} inputMode="numeric" maxLength={4} placeholder="0000" />`).join(``)}</div><p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
  <div className="form_field"><p className="form_field-label" id="otp-label">인증번호 (OTP)</p><div className="input_otp" role="group" aria-labelledby="otp-label">${[1,2,3,4,5,6].map(e=>`<ImplicitInput label="인증번호 ${e}자리" inputMode="numeric" maxLength={1} />`).join(``)}</div><p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
  ${s(`phone`,`휴대폰 번호`,`<div className="input_group"><span className="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div>`)}
  ${s(`amount`,`결제 금액`,`<ButtonClearable id="amount" inputMode="numeric" placeholder="0" prefix="₩" suffix="원" />`)}
</>`,vue:`<div class="form_field"><p class="form_field-label" id="card-label">카드번호</p><div class="input_split" role="group" aria-labelledby="card-label">${[1,2,3,4].map(e=>`${e>1?`<span class="input_split_sep" aria-hidden="true">-</span>`:``}<label class="display_contents"><span class="input_group-label_hidden">카드번호 ${e}번째 묶음</span><Input${e>2?` type="password"`:``} inputmode="numeric" maxlength="4" placeholder="0000" /></label>`).join(``)}</div><p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
<div class="form_field"><p class="form_field-label" id="otp-label">인증번호 (OTP)</p><div class="input_otp" role="group" aria-labelledby="otp-label">${[1,2,3,4,5,6].map(e=>`<label class="display_contents"><span class="input_group-label_hidden">인증번호 ${e}자리</span><Input inputmode="numeric" maxlength="1" /></label>`).join(``)}</div><p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
${c(`phone`,`휴대폰 번호`,`<div class="input_group"><span class="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div>`)}
${c(`amount`,`결제 금액`,`<Input id="amount" inputmode="numeric" clearable placeholder="0"><template #prefix>₩</template><template #suffix>원</template></Input>`)}`},size:{html:`${o(`input-sm`,`SM`,t(`<input id="input-sm" class="input input_sm" type="text" placeholder="input_sm">`))}
${o(`input-md`,`MD`,t(`<input id="input-md" class="input" type="text" placeholder="기본 크기">`))}
${o(`input-lg`,`LG`,t(`<input id="input-lg" class="input input_lg" type="text" placeholder="input_lg">`))}`,react:`<>
  ${s(`input-sm`,`SM`,`<ButtonClearable id="input-sm" size="sm" placeholder="input_sm" />`)}
  ${s(`input-md`,`MD`,`<ButtonClearable id="input-md" size="md" placeholder="기본 크기" />`)}
  ${s(`input-lg`,`LG`,`<ButtonClearable id="input-lg" size="lg" placeholder="input_lg" />`)}
</>`,vue:`${c(`input-sm`,`SM`,`<Input id="input-sm" size="sm" clearable placeholder="input_sm" />`)}
${c(`input-md`,`MD`,`<Input id="input-md" size="md" clearable placeholder="기본 크기" />`)}
${c(`input-lg`,`LG`,`<Input id="input-lg" size="lg" clearable placeholder="input_lg" />`)}`},width:{html:`${o(`input-full`,`전체 너비`,t(`<input id="input-full" class="input" type="text" placeholder="width: 100%">`))}
<div class="form_field form_field_fit"><label class="form_field-label" for="input-fit">제한 너비</label>${t(`<input id="input-fit" class="input" type="text" placeholder="최대 320px">`)}</div>
${l(`width-addon`,`아이디`)}${t(`<input id="width-addon" class="input" type="text" placeholder="애드온 그룹 최대 320px">`,{prefix:`@`,fit:!0})}`,react:`<>
  ${s(`input-full`,`전체 너비`,`<ButtonClearable id="input-full" placeholder="width: 100%" />`)}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="input-fit">제한 너비</label><ButtonClearable id="input-fit" placeholder="최대 320px" /></div>
  <ButtonClearable wrapperClassName="input_fit" label="아이디" placeholder="애드온 그룹 최대 320px" prefix="@" />
</>`,vue:`${c(`input-full`,`전체 너비`,`<Input id="input-full" clearable placeholder="width: 100%" />`)}
<div class="form_field form_field_fit"><label class="form_field-label" for="input-fit">제한 너비</label><Input id="input-fit" clearable placeholder="최대 320px" /></div>
${l(`width-addon`,`아이디`)}<Input id="width-addon" class="input_fit" clearable placeholder="애드온 그룹 최대 320px"><template #prefix>@</template></Input>`},group:{html:`${l(`group-domain`,`도메인`)}${t(`<input id="group-domain" class="input" type="text" placeholder="example.com">`,{prefix:`https://`})}
${l(`group-user`,`사용자명`)}${t(`<input id="group-user" class="input" type="text" placeholder="username">`,{prefix:`@`})}
${l(`group-amount`,`결제 금액`)}${t(`<input id="group-amount" class="input" type="text" inputmode="numeric" placeholder="0">`,{prefix:`₩`,suffix:`KRW`})}`,react:`<>
  <ButtonClearable label="도메인" placeholder="example.com" prefix="https://" />
  <ButtonClearable label="사용자명" placeholder="username" prefix="@" />
  <ButtonClearable label="결제 금액" inputMode="numeric" placeholder="0" prefix="₩" suffix="KRW" />
</>`,vue:`${l(`group-domain`,`도메인`)}<Input id="group-domain" clearable placeholder="example.com"><template #prefix>https://</template></Input>
${l(`group-user`,`사용자명`)}<Input id="group-user" clearable placeholder="username"><template #prefix>@</template></Input>
${l(`group-amount`,`결제 금액`)}<Input id="group-amount" clearable inputmode="numeric" placeholder="0"><template #prefix>₩</template><template #suffix>KRW</template></Input>`},required:{html:`<div class="form_field form_field_fit"><label class="form_field-label" for="required-email">이메일<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label>${t(`<input id="required-email" class="input" type="email" placeholder="name@example.com" required aria-required="true">`)}<p class="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`,react:`<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="required-email">이메일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><ButtonClearable id="required-email" type="email" placeholder="name@example.com" required aria-required="true" /><p className="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`,vue:`<div class="form_field form_field_fit"><label class="form_field-label" for="required-email">이메일<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Input id="required-email" type="email" clearable placeholder="name@example.com" required aria-required="true" /><p class="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`},state:{html:`${o(`state-default`,`기본`,t(`<input id="state-default" class="input" type="text" placeholder="입력 가능">`))}
${o(`state-disabled`,`비활성`,t(`<input id="state-disabled" class="input" type="text" value="수정할 수 없음" disabled>`,{value:`수정할 수 없음`,inactive:!0}))}
${o(`state-readonly`,`읽기 전용`,t(`<input id="state-readonly" class="input" type="text" value="읽기만 가능" readonly>`,{value:`읽기만 가능`,inactive:!0}))}
${o(`state-error`,`에러`,t(`<input id="state-error" class="input is-error" type="text" value="invalid-email" aria-invalid="true" aria-describedby="state-error-message">`,{value:`invalid-email`}),`<p class="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>`)}
${o(`state-success`,`성공`,t(`<input id="state-success" class="input is-success" type="text" value="uxkm_user" aria-describedby="state-success-message">`,{value:`uxkm_user`}),`<p class="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>`)}`,react:`<>
  ${s(`state-default`,`기본`,`<ButtonClearable id="state-default" placeholder="입력 가능" />`)}
  ${s(`state-disabled`,`비활성`,`<ButtonClearable id="state-disabled" defaultValue="수정할 수 없음" disabled />`)}
  ${s(`state-readonly`,`읽기 전용`,`<ButtonClearable id="state-readonly" defaultValue="읽기만 가능" readOnly />`)}
  ${s(`state-error`,`에러`,`<ButtonClearable id="state-error" error defaultValue="invalid-email" aria-describedby="state-error-message" />`,`<p className="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>`)}
  ${s(`state-success`,`성공`,`<ButtonClearable id="state-success" className="is-success" defaultValue="uxkm_user" aria-describedby="state-success-message" />`,`<p className="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>`)}
</>`,vue:`${c(`state-default`,`기본`,`<Input id="state-default" clearable placeholder="입력 가능" />`)}
${c(`state-disabled`,`비활성`,`<Input id="state-disabled" clearable model-value="수정할 수 없음" disabled />`)}
${c(`state-readonly`,`읽기 전용`,`<Input id="state-readonly" clearable model-value="읽기만 가능" readonly />`)}
${c(`state-error`,`에러`,`<Input id="state-error" clearable error model-value="invalid-email" aria-describedby="state-error-message" />`,`<p class="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>`)}
${c(`state-success`,`성공`,`<Input id="state-success" clearable class="is-success" model-value="uxkm_user" aria-describedby="state-success-message" />`,`<p class="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>`)}`},clearable:{html:`${l(`clear-text`,`텍스트`)}${t(`<input id="clear-text" class="input" type="text" value="지울 수 있는 값">`,{value:`지울 수 있는 값`})}
${l(`clear-search`,`검색`)}${t(`<input id="clear-search" class="input" type="search" value="검색어">`,{value:`검색어`,prefix:a})}
${l(`clear-readonly`,`읽기 전용`)}${t(`<input id="clear-readonly" class="input" type="text" value="수정 불가" readonly>`,{value:`수정 불가`,inactive:!0})}`,react:`<>
  <ButtonClearable label="텍스트" defaultValue="지울 수 있는 값" />
  <ButtonClearable label="검색" type="search" defaultValue="검색어" prefix={<Icon name="search" />} />
  <ButtonClearable label="읽기 전용" defaultValue="수정 불가" readOnly />
</>`,vue:`${l(`clear-text`,`텍스트`)}<Input id="clear-text" clearable model-value="지울 수 있는 값" />
${l(`clear-search`,`검색`)}<Input id="clear-search" type="search" clearable model-value="검색어"><template #prefix><Icon name="search" /></template></Input>
${l(`clear-readonly`,`읽기 전용`)}<Input id="clear-readonly" clearable model-value="수정 불가" readonly />`},example:{html:`<form class="form form_vertical form_fit form_compact"><div class="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>${o(`login-id`,`아이디`,t(`<input id="login-id" class="input is-success" type="text" value="uxkm_user" aria-invalid="false" aria-describedby="login-id-success">`,{value:`uxkm_user`}),`<p id="login-id-success" class="form_field-success" role="status">사용 가능한 아이디입니다.</p>`)}${o(`login-password`,`비밀번호`,t(`<input id="login-password" class="input is-error input_masked" type="password" value="1234" aria-invalid="true" aria-describedby="login-password-error">`,{value:`1234`}),`<p id="login-password-error" class="form_field-error" role="alert">8자 이상 입력해 주세요.</p>`)}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">로그인</span></button><button class="btn btn_ghost" type="button"><span class="btn_label">취소</span></button></div></form>`,react:`<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>
  <div className="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>
  ${s(`login-id`,`아이디`,`<ButtonClearable id="login-id" className="is-success" defaultValue="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" />`,`<p id="login-id-success" className="form_field-success" role="status">사용 가능한 아이디입니다.</p>`)}
  ${s(`login-password`,`비밀번호`,`<ButtonClearable id="login-password" type="password" error defaultValue="1234" aria-describedby="login-password-error" />`,`<p id="login-password-error" className="form_field-error" role="alert">8자 이상 입력해 주세요.</p>`)}
  <div className="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div>
</form>`,vue:`<form class="form form_vertical form_fit form_compact" @submit.prevent>
  <div class="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>
  ${c(`login-id`,`아이디`,`<Input id="login-id" clearable class="is-success" model-value="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" />`,`<p id="login-id-success" class="form_field-success" role="status">사용 가능한 아이디입니다.</p>`)}
  ${c(`login-password`,`비밀번호`,`<Input id="login-password" type="password" clearable error model-value="1234" aria-describedby="login-password-error" />`,`<p id="login-password-error" class="form_field-error" role="alert">8자 이상 입력해 주세요.</p>`)}
  <div class="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div>
</form>`}},ee=`function ButtonClearable({ defaultValue = '', prefix, suffix, wrapperClassName = '', label, ...props }) {
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
}`,te=`function ImplicitInput({ label, ...props }) {
  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Input {...props} /></label>;
}`,d=Object.fromEntries(Object.entries(u).map(([e,t])=>[e,r(e,t)]))})))()}function p(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>`${n}${e}`).join(`
`)}function m(e,t){let n=t.react.includes(`<ImplicitSelect`),r=t.react.includes(`setRegion`),i=`${r?`import { useState } from 'react';
`:``}import Select from '@uxkm/react/select';${n?`

function ImplicitSelect({ label, ...props }) {
  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Select {...props} /></label>;
}`:``}\n\nexport function Example() {${r?`
  const [region, setRegion] = useState('');`:``}\n  return (\n${p(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,a=`<script setup>\n${t.vue.includes(`v-model`)?`import { ref } from 'vue';
`:``}import Select from '@uxkm/vue/select';${t.vue.includes(`v-model`)?`
const region = ref('');`:``}\n<\/script>\n\n<template>\n${p(t.vue,2)}\n</template>`,o=t.html.replace(/<select(?![^>]*data-component=)/g,`<select data-component="Select"`);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Select/Select.html · ${e}`,code:o},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Select/select.njk · ${e}`,code:o},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/select · ${e}`,code:a},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/select · ${e}`,code:a},{id:`react`,label:`React`,fileName:`@uxkm/react/select · ${e}`,code:i},{id:`next`,label:`Next`,fileName:`@uxkm/react/select · ${e}`,code:i}]}var h,g,_,v,y,ne,re;function b(){return(b=e((()=>{h=`<option value="seoul">서울</option><option value="busan">부산</option><option value="jeju">제주</option>`,g=`<option value="seoul">서울</option><option value="busan">부산</option><option value="jeju">제주</option>`,_=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,v=(e,t,n,r=``)=>`<div className="form_field"><label className="form_field-label" htmlFor="${e}">${t}</label>${n}${r}</div>`,y=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,ne={basic:{html:_(`select-region`,`지역`,`<select id="select-region" class="input input_fit" required><option value="" disabled selected>지역을 선택하세요</option>${h}</select>`,`<p class="form_field-hint">거주 지역을 선택해 주세요.</p>`),react:v(`select-region`,`지역`,`<Select id="select-region" fit required placeholder="지역을 선택하세요">${g}</Select>`,`<p className="form_field-hint">거주 지역을 선택해 주세요.</p>`),vue:y(`select-region`,`지역`,`<Select id="select-region" fit required placeholder="지역을 선택하세요">${h}</Select>`,`<p class="form_field-hint">거주 지역을 선택해 주세요.</p>`)},standalone:{html:`<div class="input_field input_field_fit"><label class="form_field-label" for="select-language">언어</label><select id="select-language" class="input"><option value="ko">한국어</option><option value="en">English</option></select></div>
<label class="display_contents"><span class="input_group-label_hidden">정렬 기준</span><select class="input input_fit"><option value="latest">최신순</option><option value="popular">인기순</option></select></label>`,react:`<><div className="input_field input_field_fit"><label className="form_field-label" htmlFor="select-language">언어</label><Select id="select-language" defaultValue="ko"><option value="ko">한국어</option><option value="en">English</option></Select></div><ImplicitSelect label="정렬 기준" fit defaultValue="latest"><option value="latest">최신순</option><option value="popular">인기순</option></ImplicitSelect></>`,vue:`<div class="input_field input_field_fit"><label class="form_field-label" for="select-language">언어</label><Select id="select-language" model-value="ko"><option value="ko">한국어</option><option value="en">English</option></Select></div>
<label class="display_contents"><span class="input_group-label_hidden">정렬 기준</span><Select fit model-value="latest"><option value="latest">최신순</option><option value="popular">인기순</option></Select></label>`},size:{html:[`sm`,`md`,`lg`].map(e=>_(`select-${e}`,e.toUpperCase(),`<select id="select-${e}" class="input${e===`md`?``:` input_${e}`}">${h}</select>`)).join(`
`),react:`<>{['sm', 'md', 'lg'].map((size) => <div className="form_field" key={size}><label className="form_field-label" htmlFor={\`select-\${size}\`}>{size.toUpperCase()}</label><Select id={\`select-\${size}\`} size={size} defaultValue="seoul">${g}</Select></div>)}</>`,vue:`<div v-for="size in ['sm', 'md', 'lg']" :key="size" class="form_field"><label class="form_field-label" :for="\`select-\${size}\`">{{ size.toUpperCase() }}</label><Select :id="\`select-\${size}\`" :size="size" model-value="seoul">${h}</Select></div>`},width:{html:`${_(`select-full`,`전체 너비`,`<select id="select-full" class="input">${h}</select>`)}<div class="form_field form_field_fit"><label class="form_field-label" for="select-fit">제한 너비</label><select id="select-fit" class="input">${h}</select></div>`,react:`<>
  ${v(`select-full`,`전체 너비`,`<Select id="select-full" defaultValue="seoul">${g}</Select>`)}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="select-fit">제한 너비</label><Select id="select-fit" defaultValue="busan">${g}</Select></div>
</>`,vue:`${y(`select-full`,`전체 너비`,`<Select id="select-full" model-value="seoul">${h}</Select>`)}<div class="form_field form_field_fit"><label class="form_field-label" for="select-fit">제한 너비</label><Select id="select-fit" model-value="busan">${h}</Select></div>`},group:{html:_(`select-team`,`소속 팀`,`<select id="select-team" class="input"><option value="" disabled selected>팀을 선택하세요</option><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></select>`),react:v(`select-team`,`소속 팀`,`<Select id="select-team" placeholder="팀을 선택하세요"><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></Select>`),vue:y(`select-team`,`소속 팀`,`<Select id="select-team" placeholder="팀을 선택하세요"><optgroup label="제품"><option value="design">디자인</option><option value="development">개발</option></optgroup><optgroup label="비즈니스"><option value="marketing">마케팅</option><option value="sales">영업</option></optgroup></Select>`)},multiple:{html:_(`select-skills`,`관심 분야`,`<select id="select-skills" class="input" multiple size="4"><option value="design" selected>UI 디자인</option><option value="frontend" selected>프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></select>`,`<p class="form_field-hint">여러 항목을 선택할 수 있습니다.</p>`),react:v(`select-skills`,`관심 분야`,`<Select id="select-skills" multiple nativeSize={4} defaultValue={['design', 'frontend']}><option value="design">UI 디자인</option><option value="frontend">프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></Select>`,`<p className="form_field-hint">여러 항목을 선택할 수 있습니다.</p>`),vue:y(`select-skills`,`관심 분야`,`<Select id="select-skills" multiple :native-size="4" :model-value="['design', 'frontend']"><option value="design">UI 디자인</option><option value="frontend">프론트엔드</option><option value="backend">백엔드</option><option value="data">데이터</option></Select>`,`<p class="form_field-hint">여러 항목을 선택할 수 있습니다.</p>`)},required:{html:`<div class="form_field form_field_fit"><label class="form_field-label" for="select-required">문의 유형<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><select id="select-required" class="input" required><option value="" disabled selected>문의 유형을 선택하세요</option><option value="product">제품 문의</option><option value="account">계정 문의</option></select></div>`,react:`<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="select-required">문의 유형<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Select id="select-required" required placeholder="문의 유형을 선택하세요"><option value="product">제품 문의</option><option value="account">계정 문의</option></Select></div>`,vue:`<div class="form_field form_field_fit"><label class="form_field-label" for="select-required">문의 유형<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Select id="select-required" required placeholder="문의 유형을 선택하세요"><option value="product">제품 문의</option><option value="account">계정 문의</option></Select></div>`},state:{html:`${_(`select-disabled`,`비활성`,`<select id="select-disabled" class="input" disabled>${h}</select>`)}${_(`select-error`,`에러`,`<select id="select-error" class="input is-error" required aria-invalid="true" aria-describedby="select-error-message"><option value="" disabled selected>지역을 선택하세요</option>${h}</select>`,`<p id="select-error-message" class="form_field-error" role="alert">지역을 선택해 주세요.</p>`)}`,react:`<>
  ${v(`select-disabled`,`비활성`,`<Select id="select-disabled" defaultValue="busan" disabled>${g}</Select>`)}
  ${v(`select-error`,`에러`,`<Select id="select-error" error required placeholder="지역을 선택하세요" aria-describedby="select-error-message">${g}</Select>`,`<p id="select-error-message" className="form_field-error" role="alert">지역을 선택해 주세요.</p>`)}
</>`,vue:`${y(`select-disabled`,`비활성`,`<Select id="select-disabled" model-value="busan" disabled>${h}</Select>`)}${y(`select-error`,`에러`,`<Select id="select-error" error required placeholder="지역을 선택하세요" aria-describedby="select-error-message">${h}</Select>`,`<p id="select-error-message" class="form_field-error" role="alert">지역을 선택해 주세요.</p>`)}`},example:{html:`<form class="form form_vertical form_fit form_compact">${_(`delivery-region`,`배송 지역`,`<select id="delivery-region" class="input is-error" required aria-invalid="true" aria-describedby="delivery-region-error"><option value="" disabled selected>지역을 선택하세요</option>${h}</select>`,`<p id="delivery-region-error" class="form_field-error" role="alert">배송 지역을 선택해 주세요.</p>`)}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">저장</span></button></div></form>`,react:`<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>${v(`delivery-region`,`배송 지역`,`<Select id="delivery-region" value={region} onChange={(event) => setRegion(event.target.value)} required error={!region} placeholder="지역을 선택하세요" aria-describedby={!region ? 'delivery-region-error' : undefined}>${g}</Select>`,`{!region && <p id="delivery-region-error" className="form_field-error" role="alert">배송 지역을 선택해 주세요.</p>}`)}<div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">저장</span></button></div></form>`,vue:`<form class="form form_vertical form_fit form_compact" @submit.prevent>${y(`delivery-region`,`배송 지역`,`<Select id="delivery-region" v-model="region" required :error="!region" placeholder="지역을 선택하세요" :aria-describedby="!region ? 'delivery-region-error' : undefined">${h}</Select>`,`<p v-if="!region" id="delivery-region-error" class="form_field-error" role="alert">배송 지역을 선택해 주세요.</p>`)}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">저장</span></button></div></form>`}},re=Object.fromEntries(Object.entries(ne).map(([e,t])=>[e,m(e,t)]))})))()}function x(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>`${n}${e}`).join(`
`)}function ie(e,t){let n=`import Textarea from '@uxkm/react/textarea';${t.react.includes(`<ImplicitTextarea`)?`

function ImplicitTextarea({ label, ...props }) {
  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Textarea {...props} /></label>;
}`:``}\n\nexport function Example() {\n  return (\n${x(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,r=`<script setup>\nimport Textarea from '@uxkm/vue/textarea';\n<\/script>\n\n<template>\n${x(t.vue,2)}\n</template>`,i=t.html.replace(/<textarea(?![^>]*data-component=)/g,`<textarea data-component="Textarea"`);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Textarea/Textarea.html · ${e}`,code:i},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Textarea/textarea.njk · ${e}`,code:i},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/textarea · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/textarea · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/textarea · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/textarea · ${e}`,code:n}]}var S,C,w,T,ae,oe;function se(){return(se=e((()=>{S=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,C=(e,t,n,r=``)=>`<div className="form_field"><label className="form_field-label" htmlFor="${e}">${t}</label>${n}${r}</div>`,w=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,T=(e,t={})=>{let n=t.value??``,r=t.max??200;return`<div class="textarea_wrap textarea_show-count"><textarea id="${e}" class="${[`textarea`,t.size&&t.size!==`md`&&`textarea_${t.size}`,t.resize&&`textarea_resize_${t.resize}`,t.error&&`is-error`].filter(Boolean).join(` `)}" rows="${t.rows??4}" maxlength="${r}" aria-describedby="${e}-count"${t.error?` aria-invalid="true"`:``}>${n}</textarea><span id="${e}-count" class="textarea_count" role="status" aria-live="polite" aria-atomic="true"><span class="textarea_count_visual" aria-hidden="true">${n.length}/${r}</span><span class="textarea_count_announcer">${n.length}자 입력, 최대 ${r}자</span></span></div>`},ae={basic:{html:S(`textarea-message`,`메시지`,`<textarea id="textarea-message" class="textarea textarea_resize_none" rows="4" placeholder="메시지를 입력하세요"></textarea>`,`<p class="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>`),react:C(`textarea-message`,`메시지`,`<Textarea id="textarea-message" rows={4} placeholder="메시지를 입력하세요" />`,`<p className="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>`),vue:w(`textarea-message`,`메시지`,`<Textarea id="textarea-message" :rows="4" placeholder="메시지를 입력하세요" />`,`<p class="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>`)},standalone:{html:`<div class="input_field input_field_fit"><label class="form_field-label" for="textarea-note">메모</label><textarea id="textarea-note" class="textarea" rows="3" placeholder="메모를 입력하세요"></textarea></div>
<label class="display_contents"><span class="input_group-label_hidden">추가 요청사항</span><textarea class="textarea" rows="3" placeholder="추가 요청사항"></textarea></label>`,react:`<><div className="input_field input_field_fit"><label className="form_field-label" htmlFor="textarea-note">메모</label><Textarea id="textarea-note" rows={3} placeholder="메모를 입력하세요" /></div><ImplicitTextarea label="추가 요청사항" rows={3} placeholder="추가 요청사항" /></>`,vue:`<div class="input_field input_field_fit"><label class="form_field-label" for="textarea-note">메모</label><Textarea id="textarea-note" :rows="3" placeholder="메모를 입력하세요" /></div>
<label class="display_contents"><span class="input_group-label_hidden">추가 요청사항</span><Textarea :rows="3" placeholder="추가 요청사항" /></label>`},size:{html:[`sm`,`md`,`lg`].map(e=>S(`textarea-${e}`,e.toUpperCase(),`<textarea id="textarea-${e}" class="textarea${e===`md`?``:` textarea_${e}`}" rows="3"></textarea>`)).join(`
`),react:"<>{['sm', 'md', 'lg'].map((size) => <div className=\"form_field\" key={size}><label className=\"form_field-label\" htmlFor={`textarea-${size}`}>{size.toUpperCase()}</label><Textarea id={`textarea-${size}`} size={size} rows={3} /></div>)}</>",vue:`<div v-for="size in ['sm', 'md', 'lg']" :key="size" class="form_field"><label class="form_field-label" :for="\`textarea-\${size}\`">{{ size.toUpperCase() }}</label><Textarea :id="\`textarea-\${size}\`" :size="size" :rows="3" /></div>`},width:{html:`${S(`textarea-full`,`전체 너비`,`<textarea id="textarea-full" class="textarea" rows="3"></textarea>`)}<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-fit">제한 너비</label><textarea id="textarea-fit" class="textarea" rows="3"></textarea></div>`,react:`<>
  ${C(`textarea-full`,`전체 너비`,`<Textarea id="textarea-full" rows={3} />`)}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="textarea-fit">제한 너비</label><Textarea id="textarea-fit" rows={3} /></div>
</>`,vue:`${w(`textarea-full`,`전체 너비`,`<Textarea id="textarea-full" :rows="3" />`)}<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-fit">제한 너비</label><Textarea id="textarea-fit" :rows="3" /></div>`},resize:{html:[`none`,`vertical`,`horizontal`,`both`].map(e=>S(`textarea-resize-${e}`,e,`<textarea id="textarea-resize-${e}" class="textarea textarea_resize_${e}" rows="3"></textarea>`)).join(`
`),react:"<>{['none', 'vertical', 'horizontal', 'both'].map((resize) => <div className=\"form_field\" key={resize}><label className=\"form_field-label\" htmlFor={`textarea-resize-${resize}`}>{resize}</label><Textarea id={`textarea-resize-${resize}`} resize={resize} rows={3} /></div>)}</>",vue:`<div v-for="resize in ['none', 'vertical', 'horizontal', 'both']" :key="resize" class="form_field"><label class="form_field-label" :for="\`textarea-resize-\${resize}\`">{{ resize }}</label><Textarea :id="\`textarea-resize-\${resize}\`" :resize="resize" :rows="3" /></div>`},required:{html:`<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-required">문의 내용<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><textarea id="textarea-required" class="textarea" rows="4" required aria-required="true"></textarea><p class="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div>`,react:`<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="textarea-required">문의 내용<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Textarea id="textarea-required" rows={4} required aria-required="true" /><p className="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div>`,vue:`<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-required">문의 내용<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Textarea id="textarea-required" :rows="4" required aria-required="true" /><p class="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div>`},state:{html:`${S(`textarea-disabled`,`비활성`,`<textarea id="textarea-disabled" class="textarea" rows="3" disabled>수정할 수 없음</textarea>`)}${S(`textarea-readonly`,`읽기 전용`,`<textarea id="textarea-readonly" class="textarea" rows="3" readonly>읽기만 가능</textarea>`)}${S(`textarea-error`,`에러`,`<textarea id="textarea-error" class="textarea is-error" rows="3" aria-invalid="true" aria-describedby="textarea-error-message">너무 짧은 내용</textarea>`,`<p id="textarea-error-message" class="form_field-error" role="alert">10자 이상 입력해 주세요.</p>`)}`,react:`<>
  ${C(`textarea-disabled`,`비활성`,`<Textarea id="textarea-disabled" rows={3} defaultValue="수정할 수 없음" disabled />`)}
  ${C(`textarea-readonly`,`읽기 전용`,`<Textarea id="textarea-readonly" rows={3} defaultValue="읽기만 가능" readOnly />`)}
  ${C(`textarea-error`,`에러`,`<Textarea id="textarea-error" rows={3} error defaultValue="너무 짧은 내용" aria-describedby="textarea-error-message" />`,`<p id="textarea-error-message" className="form_field-error" role="alert">10자 이상 입력해 주세요.</p>`)}
</>`,vue:`${w(`textarea-disabled`,`비활성`,`<Textarea id="textarea-disabled" :rows="3" model-value="수정할 수 없음" disabled />`)}${w(`textarea-readonly`,`읽기 전용`,`<Textarea id="textarea-readonly" :rows="3" model-value="읽기만 가능" readonly />`)}${w(`textarea-error`,`에러`,`<Textarea id="textarea-error" :rows="3" error model-value="너무 짧은 내용" aria-describedby="textarea-error-message" />`,`<p id="textarea-error-message" class="form_field-error" role="alert">10자 이상 입력해 주세요.</p>`)}`},count:{html:S(`textarea-count`,`자기소개`,T(`textarea-count`,{rows:5}),`<p class="form_field-hint">200자 이내로 작성해 주세요.</p>`),react:C(`textarea-count`,`자기소개`,`<Textarea id="textarea-count" rows={5} maxLength={200} showCount />`,`<p className="form_field-hint">200자 이내로 작성해 주세요.</p>`),vue:w(`textarea-count`,`자기소개`,`<Textarea id="textarea-count" :rows="5" :max-length="200" show-count />`,`<p class="form_field-hint">200자 이내로 작성해 주세요.</p>`)},example:{html:`<form class="form form_vertical form_fit form_compact">${S(`review`,`후기`,T(`review`,{value:`좋아요`,max:300,rows:6,error:!0}).replace(`aria-describedby="review-count"`,`aria-describedby="review-error review-count"`),`<p id="review-error" class="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p>`)}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">등록</span></button><button class="btn btn_ghost" type="button"><span class="btn_label">취소</span></button></div></form>`,react:`<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>${C(`review`,`후기`,`<Textarea id="review" rows={6} showCount maxLength={300} error defaultValue="좋아요" required aria-describedby="review-error" />`,`<p id="review-error" className="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p>`)}<div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">등록</span></button></div></form>`,vue:`<form class="form form_vertical form_fit form_compact" @submit.prevent>${w(`review`,`후기`,`<Textarea id="review" :rows="6" show-count :max-length="300" error model-value="좋아요" required aria-describedby="review-error" />`,`<p id="review-error" class="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p>`)}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">등록</span></button></div></form>`}},oe=Object.fromEntries(Object.entries(ae).map(([e,t])=>[e,ie(e,t)]))})))()}function ce(e,t){return[{id:`html`,label:`HTML`,fileName:"apps/html/src/components/form/Checkbox/Checkbox.html · ${key}",code:t.html},{id:`gulp`,label:`Gulp`,fileName:"apps/gulp/src/components/form/Checkbox/checkbox.njk · ${key}",code:"{# apps/gulp/src/components/form/Checkbox/checkbox.njk #}\\n${source.html}"},{id:`vue`,label:`Vue`,fileName:"@uxkm/vue/checkbox · ${key}",code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:"@uxkm/vue/checkbox · ${key}",code:t.vue},{id:`react`,label:`React`,fileName:"@uxkm/react/checkbox · ${key}",code:t.react},{id:`next`,label:`Next`,fileName:"@uxkm/react/checkbox · ${key}",code:t.react}]}var le,ue;function de(){return(de=e((()=>{le={type:{html:`<div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-0" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-0">기본 — checkbox</label>
    </div>

    <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-1">레이블 뒤 — checkbox_label-end</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-1" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">버튼형</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">UI</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
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
            <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
          </div>
        </div>
        <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
      </article>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function TypeExample() {
  return (
    <>
      <Checkbox checked label="기본 — checkbox" />
      <Checkbox labelEnd label="레이블 뒤 — checkbox_label-end" />
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
        <Checkbox button label="UI" />
        <Checkbox button label="UX" />
      </fieldset>
      <div className="checkbox_card" style={{ maxWidth: 360 }}>
        <article className="card card_compact">
          <div className="card_header">
            <div className="card_header-main">
              <h3 className="card_title" id="checkbox-type-card-title">
                카드형 — checkbox_card
              </h3>
            </div>
            <div className="card_extra">
              <Checkbox
                id="checkbox-type-card"
                checked
                aria-labelledby="checkbox-type-card-title checkbox-type-card-desc"
              />
            </div>
          </div>
          <div className="card_body" id="checkbox-type-card-desc">
            card 컴포넌트와 조합해 제목·설명을 표시합니다.
          </div>
        </article>
      </div>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox checked label="기본 — checkbox" />
  <Checkbox label-end label="레이블 뒤 — checkbox_label-end" />
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button checked label="버튼형" />
    <Checkbox button label="UI" />
    <Checkbox button label="UX" />
  </fieldset>
  <div class="checkbox_card" style="max-width: 360px;">
    <article class="card card_compact">
      <div class="card_header">
        <div class="card_header-main">
          <h3 class="card_title" id="checkbox-type-card-title">카드형 — checkbox_card</h3>
        </div>
        <div class="card_extra">
          <Checkbox id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
        </div>
      </div>
      <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
    </article>
  </div>
</template>`},labelEnd:{html:`<div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-label-end-push">푸시 알림 받기</label>
      <span class="checkbox_control">
        <input type="checkbox" class="checkbox_input" id="checkbox-label-end-push" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <div class="checkbox checkbox_label-end" data-ripple="true">
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
      <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-2">이메일 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-2" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
      <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-3">푸시 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-3" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
      <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-4">SMS 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-4" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
    </fieldset>

    <div class="checkbox checkbox_label-end checkbox_sm" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-5">Small — checkbox_sm</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-5" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
    <div class="checkbox checkbox_label-end checkbox_lg" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-6">Large — checkbox_lg</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-6" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function LabelEndExample() {
  return (
    <>
      <Checkbox labelEnd checked label="푸시 알림 받기" />
      <Checkbox labelEnd>
        <span className="checkbox_content">
          <span className="checkbox_label">마케팅 정보 수신</span>
          <span className="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox labelEnd checked label="이메일 알림" />
        <Checkbox labelEnd checked label="푸시 알림" />
        <Checkbox labelEnd label="SMS 알림" />
      </fieldset>
      <Checkbox className="checkbox_sm" labelEnd checked label="Small — checkbox_sm" />
      <Checkbox className="checkbox_lg" labelEnd checked label="Large — checkbox_lg" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox label-end checked label="푸시 알림 받기" />
  <Checkbox label-end>
    <span class="checkbox_content">
      <span class="checkbox_label">마케팅 정보 수신</span>
      <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Checkbox>
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
    <Checkbox label-end checked label="이메일 알림" />
    <Checkbox label-end checked label="푸시 알림" />
    <Checkbox label-end label="SMS 알림" />
  </fieldset>
  <Checkbox class="checkbox_sm" label-end checked label="Small — checkbox_sm" />
  <Checkbox class="checkbox_lg" label-end checked label="Large — checkbox_lg" />
</template>`},basic:{html:`<div class="form_field">
      <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
        <div class="checkbox" data-ripple="true">
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
        <div class="checkbox" data-ripple="true">
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
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="checkbox-notify-label">
        알림 설정
      </span>
      <fieldset className="checkbox_group" aria-labelledby="checkbox-notify-label">
        <Checkbox checked>
          <span className="checkbox_content">
            <span className="checkbox_label">이메일 알림</span>
            <span className="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
          </span>
        </Checkbox>
        <Checkbox>
          <span className="checkbox_content">
            <span className="checkbox_label">푸시 알림</span>
            <span className="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
          </span>
        </Checkbox>
      </fieldset>
    </div>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
    <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
      <Checkbox checked>
        <span class="checkbox_content">
          <span class="checkbox_label">이메일 알림</span>
          <span class="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
        </span>
      </Checkbox>
      <Checkbox>
        <span class="checkbox_content">
          <span class="checkbox_label">푸시 알림</span>
          <span class="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
        </span>
      </Checkbox>
    </fieldset>
  </div>
</template>`},standalone:{html:`<label class="checkbox_control" data-ripple="true"><input aria-label="항목 선택" type="checkbox" class="checkbox_input">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
    <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" checked aria-label="선택됨">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
    <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" disabled aria-label="비활성">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function StandaloneExample() {
  return (
    <>
      <Checkbox ariaLabel="항목 선택" />
      <Checkbox checked ariaLabel="선택됨" />
      <Checkbox disabled ariaLabel="비활성" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox aria-label="항목 선택" />
  <Checkbox checked aria-label="선택됨" />
  <Checkbox disabled aria-label="비활성" />
</template>`},size:{html:`<div class="checkbox checkbox_sm" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-7" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-7">Small — checkbox_sm</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-8" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-8">Medium — 기본</label>
    </div>
    <div class="checkbox checkbox_lg" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-9" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-9">Large — checkbox_lg</label>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function SizeExample() {
  return (
    <>
      <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox class="checkbox_sm" checked label="Small — checkbox_sm" />
  <Checkbox checked label="Medium — 기본" />
  <Checkbox class="checkbox_lg" checked label="Large — checkbox_lg" />
</template>`},width:{html:`<div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-10" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-10">기본 — 인라인 너비</label>
    </div>

    <div class="checkbox checkbox_block" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-11" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-11">checkbox_block — 전체 너비</label>
    </div>

    <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
      <legend class="checkbox_group-legend">checkbox_group_block</legend>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-12" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-12">항목 1</label>
    </div>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-13" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-13">항목 2</label>
    </div>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function WidthExample() {
  return (
    <>
      <Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox className="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox checked label="기본 — 인라인 너비" />
  <Checkbox class="checkbox_block" checked label="checkbox_block — 전체 너비" />
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">checkbox_group_block</legend>
    <Checkbox checked label="항목 1" />
    <Checkbox label="항목 2" />
  </fieldset>
</template>`},color:{html:`<div class="checkbox color_primary" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-14" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-14">Primary</label>
    </div>
    <div class="checkbox color_success" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-15" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-15">Success</label>
    </div>
    <div class="checkbox color_danger" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-16" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-16">Danger</label>
    </div>
    <div class="checkbox color_warning" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-17" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-17">Warning</label>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function ColorExample() {
  return (
    <>
      <Checkbox className="color_primary" checked label="Primary" />
      <Checkbox className="color_success" checked label="Success" />
      <Checkbox className="color_danger" checked label="Danger" />
      <Checkbox className="color_warning" checked label="Warning" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox class="color_primary" checked label="Primary" />
  <Checkbox class="color_success" checked label="Success" />
  <Checkbox class="color_danger" checked label="Danger" />
  <Checkbox class="color_warning" checked label="Warning" />
</template>`},state:{html:`<div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-18" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-18">미선택</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-19" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-19">선택됨</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-20" type="checkbox" class="checkbox_input" checked data-demo-indeterminate>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-20">불확정</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-21" type="checkbox" class="checkbox_input" disabled>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-21">비활성</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-22" type="checkbox" class="checkbox_input" checked disabled>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-22">선택됨 (비활성)</label>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function StateExample() {
  return (
    <>
      <Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox label="미선택" />
  <Checkbox checked label="선택됨" />
  <Checkbox checked indeterminate label="불확정" />
  <Checkbox disabled label="비활성" />
  <Checkbox checked disabled label="선택됨 (비활성)" />
</template>`},group:{html:`<fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-24" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-24">디자인</label>
    </div>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-25" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-25">개발</label>
    </div>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-26" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-26">기획</label>
    </div>
    </fieldset>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <legend class="checkbox_group-legend">언어 (가로)</legend>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">한국어</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">English</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">日本語</span>
      </label>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function GroupExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <legend className="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
    <Checkbox checked label="디자인" />
    <Checkbox label="개발" />
    <Checkbox label="기획" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <legend class="checkbox_group-legend">언어 (가로)</legend>
    <Checkbox button checked label="한국어" />
    <Checkbox button checked label="English" />
    <Checkbox button label="日本語" />
  </fieldset>
</template>`},buttonType:{html:`<fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">전체</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">진행 중</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">완료</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" disabled>
        <span class="checkbox_label">보류 (비활성)</span>
      </label>
    </fieldset>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button checkbox_sm color_success" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Small</span>
      </label>
      <label class="checkbox checkbox_button color_success" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Medium</span>
      </label>
      <label class="checkbox checkbox_button checkbox_lg color_success" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Large</span>
      </label>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function ButtonTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button className="checkbox_sm color_success" checked label="Small" />
        <Checkbox button className="color_success" checked label="Medium" />
        <Checkbox button className="checkbox_lg color_success" checked label="Large" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button checked label="전체" />
    <Checkbox button label="진행 중" />
    <Checkbox button label="완료" />
    <Checkbox button disabled label="보류 (비활성)" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button class="checkbox_sm color_success" checked label="Small" />
    <Checkbox button class="color_success" checked label="Medium" />
    <Checkbox button class="checkbox_lg color_success" checked label="Large" />
  </fieldset>
</template>`},cardType:{html:`<fieldset class="checkbox_group">
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
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc">
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
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc">
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
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc">
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
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc">
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
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc">
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
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc">
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
                <label class="checkbox_control" data-ripple="true">
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
                <label class="checkbox_control" data-ripple="true">
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
                <label class="checkbox_control" data-ripple="true">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function CardTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">요금제 선택 (다중)</legend>
        <div className="card_deck card_deck-2">
          <div className="checkbox_card">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox
                    id="checkbox-plan-basic"
                    name="plan"
                    value="basic"
                    checked
                    aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc"
                  />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-basic-desc">
                개인 프로젝트에 적합합니다.
              </div>
            </article>
          </div>
          {/* … Pro · Enterprise · 권한 · clickable 카드 … */}
        </div>
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
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
              <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
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
              <Checkbox id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc" />
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
              <Checkbox id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc" />
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
              <Checkbox id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
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
              <Checkbox id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
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
              <Checkbox id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc" />
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
      <div class="checkbox_card checkbox_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
        </article>
      </div>
      <div class="checkbox_card checkbox_card-clickable color_primary" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-pro" name="plan-clickable" value="pro" aria-labelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
        </article>
      </div>
      <div class="checkbox_card checkbox_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
        <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
          <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-27" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-27">마케팅 정보 수신</label>
    </div>
          <div class="checkbox" data-ripple="true">
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
          <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">조회</span>
          </label>
          <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">편집</span>
          </label>
        </fieldset>
      </div>
    </form>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function FormExample() {
  return (
    <>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-vertical-label">
            수신 동의
          </span>
          <fieldset className="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </form>
      <form className="form form_horizontal form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-horizontal-label">
            권한
          </span>
          <fieldset
            className="checkbox_group checkbox_group_horizontal"
            aria-labelledby="checkbox-form-horizontal-label"
          >
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </form>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
import FormLayout from '@uxkm/vue/form-layout';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
        <Checkbox checked label="마케팅 정보 수신" />
        <Checkbox label="뉴스레터 구독" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
      <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
        <Checkbox button checked label="조회" />
        <Checkbox button label="편집" />
      </fieldset>
    </div>
  </FormLayout>
</template>`}},ue=Object.fromEntries(Object.entries(le).map(([e,t])=>[e,ce(e,t)]))})))()}function fe(e,t){return[{id:`html`,label:`HTML`,fileName:"apps/html/src/components/form/Radio/Radio.html · ${key}",code:t.html},{id:`gulp`,label:`Gulp`,fileName:"apps/gulp/src/components/form/Radio/radio.njk · ${key}",code:"{# apps/gulp/src/components/form/Radio/radio.njk #}\\n${source.html}"},{id:`vue`,label:`Vue`,fileName:"@uxkm/vue/radio · ${key}",code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:"@uxkm/vue/radio · ${key}",code:t.vue},{id:`react`,label:`React`,fileName:"@uxkm/react/radio · ${key}",code:t.react},{id:`next`,label:`Next`,fileName:"@uxkm/react/radio · ${key}",code:t.react}]}var pe,me;function he(){return(he=e((()=>{pe={type:{html:`<div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-0" type="radio" class="radio_input" name="radio-type-basic" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-0">기본 — radio</label>
    </div>

    <div class="radio radio_label-end" data-ripple="true">
      <label class="radio_label" for="radio-auto-1">레이블 뒤 — radio_label-end</label>
      <span class="radio_control">
        <input id="radio-auto-1" type="radio" class="radio_input" name="radio-type-label-end">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-type-btn" value="a" checked>
        <span class="radio_label">버튼형</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-type-btn" value="b">
        <span class="radio_label">UI</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-type-btn" value="c">
        <span class="radio_label">UX</span>
      </label>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function TypeExample() {
  return (
    <>
      <Radio name="radio-type-basic" checked label="기본 — radio" />
      <Radio name="radio-type-label-end" labelEnd label="레이블 뒤 — radio_label-end" />
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
        <Radio button name="radio-type-btn" value="b" label="UI" />
        <Radio button name="radio-type-btn" value="c" label="UX" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-type-basic" checked label="기본 — radio" />
  <Radio name="radio-type-label-end" label-end label="레이블 뒤 — radio_label-end" />
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
    <Radio button name="radio-type-btn" value="b" label="UI" />
    <Radio button name="radio-type-btn" value="c" label="UX" />
  </fieldset>
</template>`},labelEnd:{html:`<div class="radio radio_label-end" data-ripple="true">
      <label class="radio_label" for="radio-label-end-basic">신용카드</label>
      <span class="radio_control">
        <input type="radio" class="radio_input" id="radio-label-end-basic" name="radio-label-end-pay" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <div class="radio radio_label-end" data-ripple="true">
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
      <div class="radio radio_label-end" data-ripple="true">
        <label class="radio_label" for="radio-auto-2">일반 배송</label>
        <span class="radio_control">
          <input id="radio-auto-2" type="radio" class="radio_input" name="radio-label-end-ship" value="standard" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
      </div>
      <div class="radio radio_label-end" data-ripple="true">
        <label class="radio_label" for="radio-auto-3">빠른 배송</label>
        <span class="radio_control">
          <input id="radio-auto-3" type="radio" class="radio_input" name="radio-label-end-ship" value="express">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
      </div>
    </fieldset>

    <div class="radio radio_label-end radio_sm" data-ripple="true">
      <label class="radio_label" for="radio-auto-5">Small — radio_sm</label>
      <span class="radio_control">
        <input id="radio-auto-5" type="radio" class="radio_input" name="radio-label-end-size" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>
    <div class="radio radio_label-end radio_lg" data-ripple="true">
      <label class="radio_label" for="radio-auto-6">Large — radio_lg</label>
      <span class="radio_control">
        <input id="radio-auto-6" type="radio" class="radio_input" name="radio-label-end-size2" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function LabelEndExample() {
  return (
    <>
      <Radio name="radio-label-end-pay" labelEnd checked label="신용카드" />
      <Radio name="radio-label-end-pay2" labelEnd>
        <span className="radio_content">
          <span className="radio_label">계좌이체</span>
          <span className="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-label-end-pay" label-end checked label="신용카드" />
  <Radio name="radio-label-end-pay2" label-end>
    <span class="radio_content">
      <span class="radio_label">계좌이체</span>
      <span class="radio_hint">등록된 계좌로 결제합니다.</span>
    </span>
  </Radio>
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
    <Radio name="radio-label-end-ship" label-end checked value="standard" label="일반 배송" />
    <Radio name="radio-label-end-ship" label-end value="express" label="빠른 배송" />
  </fieldset>
  <Radio class="radio_sm" name="radio-label-end-size" label-end checked label="Small — radio_sm" />
  <Radio class="radio_lg" name="radio-label-end-size2" label-end checked label="Large — radio_lg" />
</template>`},basic:{html:`<div class="form_field">
      <span class="form_field-label" id="radio-pay-label">결제 수단</span>
      <fieldset class="radio_group" aria-labelledby="radio-pay-label">
        <div class="radio" data-ripple="true">
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
        <div class="radio" data-ripple="true">
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
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="radio-pay-label">
        결제 수단
      </span>
      <fieldset className="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
          <span className="radio_content">
            <span className="radio_label">신용카드</span>
            <span className="radio_hint">Visa · Mastercard · 국내 카드</span>
          </span>
        </Radio>
        <Radio name="radio-pay" value="bank">
          <span className="radio_content">
            <span className="radio_label">계좌이체</span>
            <span className="radio_hint">등록된 계좌로 결제합니다.</span>
          </span>
        </Radio>
      </fieldset>
    </div>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="radio-pay-label">결제 수단</span>
    <fieldset class="radio_group" aria-labelledby="radio-pay-label">
      <Radio name="radio-pay" checked value="card">
        <span class="radio_content">
          <span class="radio_label">신용카드</span>
          <span class="radio_hint">Visa · Mastercard · 국내 카드</span>
        </span>
      </Radio>
      <Radio name="radio-pay" value="bank">
        <span class="radio_content">
          <span class="radio_label">계좌이체</span>
          <span class="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </fieldset>
  </div>
</template>`},standalone:{html:`<div class="radio_group radio_group_horizontal">
      <label class="radio_control" data-ripple="true"><input aria-label="항목 선택" type="radio" class="radio_input" name="radio-standalone">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
      <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" name="radio-standalone" checked aria-label="선택됨">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
      <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" name="radio-standalone-disabled" disabled aria-label="비활성">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function StandaloneExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" ariaLabel="항목 선택" />
      <Radio name="radio-standalone" checked ariaLabel="선택됨" />
      <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
    </div>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio name="radio-standalone" aria-label="항목 선택" />
    <Radio name="radio-standalone" checked aria-label="선택됨" />
    <Radio name="radio-standalone-disabled" disabled aria-label="비활성" />
  </div>
</template>`},size:{html:`<div class="radio_group radio_group_horizontal">
      <div class="radio radio_sm" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-7" type="radio" class="radio_input" name="radio-size" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-7">Small — radio_sm</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-8" type="radio" class="radio_input" name="radio-size">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-8">Medium — 기본</label>
      </div>
      <div class="radio radio_lg" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-9" type="radio" class="radio_input" name="radio-size">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-9">Large — radio_lg</label>
      </div>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function SizeExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio class="radio_sm" name="radio-size" checked label="Small — radio_sm" />
    <Radio name="radio-size" label="Medium — 기본" />
    <Radio class="radio_lg" name="radio-size" label="Large — radio_lg" />
  </div>
</template>`},width:{html:`<div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-10" type="radio" class="radio_input" name="radio-width-inline" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-10">기본 — 인라인 너비</label>
    </div>

    <div class="radio radio_block" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-11" type="radio" class="radio_input" name="radio-width-block" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-11">radio_block — 전체 너비</label>
    </div>

    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">radio_group_block</legend>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-12" type="radio" class="radio_input" name="radio-width-g1" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-12">항목 1</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-13" type="radio" class="radio_input" name="radio-width-g1">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-13">항목 2</label>
      </div>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function WidthExample() {
  return (
    <>
      <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
      <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
  <Radio name="radio-width-block" class="radio_block" checked label="radio_block — 전체 너비" />
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">radio_group_block</legend>
    <Radio name="radio-width-g1" checked label="항목 1" />
    <Radio name="radio-width-g1" label="항목 2" />
  </fieldset>
</template>`},color:{html:`<div class="radio color_primary" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-14" type="radio" class="radio_input" name="radio-color-primary" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-14">Primary</label>
    </div>
    <div class="radio color_success" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-15" type="radio" class="radio_input" name="radio-color-success" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-15">Success</label>
    </div>
    <div class="radio color_danger" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-16" type="radio" class="radio_input" name="radio-color-danger" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-16">Danger</label>
    </div>
    <div class="radio color_warning" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-17" type="radio" class="radio_input" name="radio-color-warning" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-17">Warning</label>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function ColorExample() {
  return (
    <>
      <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
      <Radio className="color_success" name="radio-color-success" checked label="Success" />
      <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
      <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio class="color_primary" name="radio-color-primary" checked label="Primary" />
  <Radio class="color_success" name="radio-color-success" checked label="Success" />
  <Radio class="color_danger" name="radio-color-danger" checked label="Danger" />
  <Radio class="color_warning" name="radio-color-warning" checked label="Warning" />
</template>`},state:{html:`<div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-18" type="radio" class="radio_input" name="radio-state">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-18">미선택</label>
    </div>
    <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-19" type="radio" class="radio_input" name="radio-state" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-19">선택됨</label>
    </div>
    <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-20" type="radio" class="radio_input" name="radio-state-disabled" disabled>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-20">비활성</label>
    </div>
    <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-21" type="radio" class="radio_input" name="radio-state-disabled" checked disabled>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-21">선택됨 (비활성)</label>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function StateExample() {
  return (
    <>
      <Radio name="radio-state" label="미선택" />
      <Radio name="radio-state" checked label="선택됨" />
      <Radio name="radio-state-disabled" disabled label="비활성" />
      <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-state" label="미선택" />
  <Radio name="radio-state" checked label="선택됨" />
  <Radio name="radio-state-disabled" disabled label="비활성" />
  <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
</template>`},group:{html:`<fieldset class="radio_group">
      <legend class="radio_group-legend">배송 방법 (세로)</legend>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-23" type="radio" class="radio_input" name="radio-group-ship" value="standard" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-23">일반 배송</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-24" type="radio" class="radio_input" name="radio-group-ship" value="express">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-24">빠른 배송</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-25" type="radio" class="radio_input" name="radio-group-ship" value="pickup">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-25">매장 픽업</label>
      </div>
    </fieldset>

    <fieldset class="radio_group radio_group_horizontal">
      <legend class="radio_group-legend">크기 (가로)</legend>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-group-size" value="s" checked>
        <span class="radio_label">S</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-group-size" value="m">
        <span class="radio_label">M</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-group-size" value="l">
        <span class="radio_label">L</span>
      </label>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function GroupExample() {
  return (
    <>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">배송 방법 (세로)</legend>
        <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
        <Radio name="radio-group-ship" value="express" label="빠른 배송" />
        <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
      </fieldset>
      <fieldset className="radio_group radio_group_horizontal">
        <legend className="radio_group-legend">크기 (가로)</legend>
        <Radio button name="radio-group-size" checked value="s" label="S" />
        <Radio button name="radio-group-size" value="m" label="M" />
        <Radio button name="radio-group-size" value="l" label="L" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">배송 방법 (세로)</legend>
    <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
    <Radio name="radio-group-ship" value="express" label="빠른 배송" />
    <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <legend class="radio_group-legend">크기 (가로)</legend>
    <Radio button name="radio-group-size" checked value="s" label="S" />
    <Radio button name="radio-group-size" value="m" label="M" />
    <Radio button name="radio-group-size" value="l" label="L" />
  </fieldset>
</template>`},buttonType:{html:`<fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="all" checked>
        <span class="radio_label">전체</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="active">
        <span class="radio_label">진행 중</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="done">
        <span class="radio_label">완료</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="hold" disabled>
        <span class="radio_label">보류 (비활성)</span>
      </label>
    </fieldset>

    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button radio_sm color_success" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-size" value="sm" checked>
        <span class="radio_label">Small</span>
      </label>
      <label class="radio radio_button color_success" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-size" value="md" checked>
        <span class="radio_label">Medium</span>
      </label>
      <label class="radio radio_button radio_lg color_success" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-size" value="lg" checked>
        <span class="radio_label">Large</span>
      </label>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function ButtonTypeExample() {
  return (
    <fieldset className="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-btn-filter" checked value="all" label="전체" />
    <Radio button name="radio-btn-filter" value="active" label="진행 중" />
    <Radio button name="radio-btn-filter" value="done" label="완료" />
    <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button class="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
    <Radio button class="color_success" name="radio-btn-size" checked value="md" label="Medium" />
    <Radio button class="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
  </fieldset>
</template>`},cardType:{html:`<fieldset class="radio_group">
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
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc">
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
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-plan-pro" name="radio-plan" value="pro" aria-labelledby="radio-plan-pro-title radio-plan-pro-desc">
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
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled aria-labelledby="radio-plan-enterprise-title radio-plan-enterprise-desc">
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
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc">
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
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc">
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
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc">
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
                <label class="radio_control" data-ripple="true">
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
                <label class="radio_control" data-ripple="true">
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
                <label class="radio_control" data-ripple="true">
                  <input type="radio" class="radio_input" id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

function PlanCard({
  id,
  titleId,
  descId,
  title,
  subtitle,
  desc,
  value,
  checked,
  disabled,
  colorClass,
  name = 'radio-plan',
}) {
  return (
    <div className={cnCard(colorClass)}>
      <article className="card card_compact card_shadow">
        <div className="card_header">
          <div className="card_header-main">
            <h3 className="card_title" id={titleId}>
              {title}
            </h3>
            <p className="card_subtitle">{subtitle}</p>
          </div>
          <div className="card_extra">
            <Radio
              id={id}
              name={name}
              value={value}
              checked={checked}
              disabled={disabled}
              aria-labelledby={\`\${titleId} \${descId}\`}
            />
          </div>
        </div>
        <div className="card_body" id={descId}>
          {desc}
        </div>
      </article>
    </div>
  );
}

function cnCard(colorClass, clickable) {
  return ['radio_card', colorClass, clickable && 'radio_card-clickable'].filter(Boolean).join(' ');
}

export function CardTypeExample() {
  return (
    <>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">요금제 선택</legend>
            <div className="card_deck card_deck-2">
              <PlanCard
                id="radio-plan-basic"
                titleId="radio-plan-basic-title"
                descId="radio-plan-basic-desc"
                title="Basic"
                subtitle="월 9,000원"
                desc="개인 프로젝트에 적합합니다."
                value="basic"
                checked
              />
              <PlanCard
                id="radio-plan-pro"
                titleId="radio-plan-pro-title"
                descId="radio-plan-pro-desc"
                title="Pro"
                subtitle="월 29,000원"
                desc="팀 협업과 고급 기능을 제공합니다."
                value="pro"
                colorClass="color_primary"
              />
              <PlanCard
                id="radio-plan-enterprise"
                titleId="radio-plan-enterprise-title"
                descId="radio-plan-enterprise-desc"
                title="Enterprise"
                subtitle="별도 문의"
                desc="대규모 조직용 맞춤 플랜입니다. (비활성)"
                value="enterprise"
                disabled
              />
            </div>
          </fieldset>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">기본 권한 (가로)</legend>
            <div className="card_deck card_deck-3">
              <div className="radio_card color_success">
                <article className="card card_compact">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-role-read-title">
                        읽기
                      </h3>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-role-read"
                        name="radio-role"
                        value="read"
                        checked
                        aria-labelledby="radio-role-read-title radio-role-read-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-role-read-desc">
                    조회 권한
                  </div>
                </article>
              </div>
              <div className="radio_card color_success">
                <article className="card card_compact">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-role-write-title">
                        쓰기
                      </h3>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-role-write"
                        name="radio-role"
                        value="write"
                        aria-labelledby="radio-role-write-title radio-role-write-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-role-write-desc">
                    수정 권한
                  </div>
                </article>
              </div>
              <div className="radio_card">
                <article className="card card_compact">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-role-admin-title">
                        관리
                      </h3>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-role-admin"
                        name="radio-role"
                        value="admin"
                        aria-labelledby="radio-role-admin-title radio-role-admin-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-role-admin-desc">
                    전체 관리 권한
                  </div>
                </article>
              </div>
            </div>
          </fieldset>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">
              요금제 선택 — 카드 전체 클릭 (radio_card-clickable)
            </legend>
            <div className="card_deck card_deck-2">
              <div className="radio_card radio_card-clickable" data-ripple="">
                <article className="card card_compact card_shadow">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-plan-full-basic-title">
                        Basic
                      </h3>
                      <p className="card_subtitle">월 9,000원</p>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-plan-full-basic"
                        name="radio-plan-clickable"
                        value="basic"
                        checked
                        aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-basic-desc">
                    카드 어디를 눌러도 선택됩니다.
                  </div>
                </article>
              </div>
              <div className="radio_card radio_card-clickable color_primary" data-ripple="">
                <article className="card card_compact card_shadow">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-plan-full-pro-title">
                        Pro
                      </h3>
                      <p className="card_subtitle">월 29,000원</p>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-plan-full-pro"
                        name="radio-plan-clickable"
                        value="pro"
                        aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-pro-desc">
                    제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.
                  </div>
                </article>
              </div>
              <div className="radio_card radio_card-clickable" data-ripple="">
                <article className="card card_compact card_shadow">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-plan-full-enterprise-title">
                        Enterprise
                      </h3>
                      <p className="card_subtitle">별도 문의</p>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-plan-full-enterprise"
                        name="radio-plan-clickable"
                        value="enterprise"
                        disabled
                        aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-enterprise-desc">
                    대규모 조직용 맞춤 플랜입니다. (비활성)
                  </div>
                </article>
              </div>
            </div>
          </fieldset>
        </>,
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
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
              <Radio id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc"  />
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
              <Radio id="radio-plan-pro" name="radio-plan" value="pro" aria-labelledby="radio-plan-pro-title radio-plan-pro-desc"  />
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
              <Radio id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled aria-labelledby="radio-plan-enterprise-title radio-plan-enterprise-desc"  />
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
              <Radio id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc"  />
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
              <Radio id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc"  />
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
              <Radio id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc"  />
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
      <div class="radio_card radio_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
        </article>
      </div>
      <div class="radio_card radio_card-clickable color_primary" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
        </article>
      </div>
      <div class="radio_card radio_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
        <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
          <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-26" type="radio" class="radio_input" name="radio-form-channel" value="email" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-26">이메일</label>
    </div>
          <div class="radio" data-ripple="true">
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
          <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-form-role" value="viewer" checked>
        <span class="radio_label">뷰어</span>
          </label>
          <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-form-role" value="editor">
        <span class="radio_label">편집자</span>
          </label>
        </fieldset>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Radio from '@uxkm/react/radio';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-vertical-label">
            수신 채널
          </span>
          <fieldset className="radio_group" aria-labelledby="radio-form-vertical-label">
            <Radio name="radio-form-channel" checked value="email" label="이메일" />
            <Radio name="radio-form-channel" value="sms" label="SMS" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-horizontal-label">
            역할
          </span>
          <fieldset
            className="radio_group radio_group_horizontal"
            aria-labelledby="radio-form-horizontal-label"
          >
            <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
            <Radio button name="radio-form-role" value="editor" label="편집자" />
          </fieldset>
        </div>
      </FormLayout>
    </>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
      <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
        <Radio name="radio-form-channel" checked value="email" label="이메일" />
        <Radio name="radio-form-channel" value="sms" label="SMS" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
      <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
        <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
        <Radio button name="radio-form-role" value="editor" label="편집자" />
      </fieldset>
    </div>
  </FormLayout>
</template>`}},me=Object.fromEntries(Object.entries(pe).map(([e,t])=>[e,fe(e,t)]))})))()}function ge(e,t){return[{id:`html`,label:`HTML`,fileName:"apps/html/src/components/form/Switch/Switch.html · ${key}",code:t.html},{id:`gulp`,label:`Gulp`,fileName:"apps/gulp/src/components/form/Switch/switch.njk · ${key}",code:"{# apps/gulp/src/components/form/Switch/switch.njk #}\\n${source.html}"},{id:`vue`,label:`Vue`,fileName:"@uxkm/vue/switch · ${key}",code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:"@uxkm/vue/switch · ${key}",code:t.vue},{id:`react`,label:`React`,fileName:"@uxkm/react/switch · ${key}",code:t.react},{id:`next`,label:`Next`,fileName:"@uxkm/react/switch · ${key}",code:t.react}]}var E,D;function O(){return(O=e((()=>{E={type:{html:`<label class="switch" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">기본 — switch</span>
    </label>

    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">레이블 뒤 — switch_label-end</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function TypeExample() {
  return (
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch checked label="기본 — switch" />
  <Switch label-end checked label="레이블 뒤 — switch_label-end" />
</template>`},labelEnd:{html:`<label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">푸시 알림 받기</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-label-end-push" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_content">
        <span class="switch_label">마케팅 정보 수신</span>
        <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
      </span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-label-end-marketing">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
      <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">이메일 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">푸시 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">SMS 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>

    <label class="switch switch_label-end switch_sm" data-ripple="true">
      <span class="switch_label">Small — switch_sm</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end switch_lg" data-ripple="true">
      <span class="switch_label">Large — switch_lg</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function LabelEndExample() {
  return (
    <>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end checked label="푸시 알림 받기" />
  <Switch label-end>
    <span class="switch_content">
      <span class="switch_label">마케팅 정보 수신</span>
      <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Switch>
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
    <Switch label-end checked label="이메일 알림" />
    <Switch label-end checked label="푸시 알림" />
    <Switch label-end label="SMS 알림" />
  </fieldset>
  <Switch label-end size="sm" checked label="Small — switch_sm" />
  <Switch label-end size="lg" checked label="Large — switch_lg" />
</template>`},basic:{html:`<label class="switch" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-basic-dark" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">다크 모드</span>
    </label>

    <label class="switch" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-basic-auto">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">자동 저장</span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function BasicExample() {
  return (
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch checked label="다크 모드" />
  <Switch label="자동 저장" />
</template>`},standalone:{html:`<label class="switch" aria-label="기능 켜기" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch" aria-label="기능 끄기" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch" aria-label="비활성" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function StandaloneExample() {
  return (
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch aria-label="기능 켜기" />
  <Switch checked aria-label="기능 끄기" />
  <Switch disabled aria-label="비활성" />
</template>`},size:{html:`<label class="switch switch_sm switch_label-end" data-ripple="true">
      <span class="switch_label">Small — switch_sm</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">Medium — 기본</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_lg switch_label-end" data-ripple="true">
      <span class="switch_label">Large — switch_lg</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function SizeExample() {
  return (
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end size="sm" checked label="Small — switch_sm" />
  <Switch label-end checked label="Medium — 기본" />
  <Switch label-end size="lg" checked label="Large — switch_lg" />
</template>`},width:{html:`<label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">기본 — 인라인 너비</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <label class="switch switch_label-end switch_block" data-ripple="true">
      <span class="switch_label">switch_block — 전체 너비</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
      <legend class="switch_group-legend">switch_group_block</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">Wi-Fi</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">블루투스</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>`,react:`import Switch from '@uxkm/react/switch';

export function WidthExample() {
  return (
    <>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end checked label="기본 — 인라인 너비" />
  <Switch label-end class="switch_block" checked label="switch_block — 전체 너비" />
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">switch_group_block</legend>
    <Switch label-end checked label="Wi-Fi" />
    <Switch label-end label="블루투스" />
  </fieldset>
</template>`},color:{html:`<label class="switch color_primary switch_label-end" data-ripple="true">
      <span class="switch_label">Primary</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_success switch_label-end" data-ripple="true">
      <span class="switch_label">Success</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_danger switch_label-end" data-ripple="true">
      <span class="switch_label">Danger</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_warning switch_label-end" data-ripple="true">
      <span class="switch_label">Warning</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function ColorExample() {
  return (
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch class="color_primary" label-end checked label="Primary" />
  <Switch class="color_success" label-end checked label="Success" />
  <Switch class="color_danger" label-end checked label="Danger" />
  <Switch class="color_warning" label-end checked label="Warning" />
</template>`},state:{html:`<label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">꺼짐</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">켜짐</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">비활성</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">켜짐 (비활성)</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function StateExample() {
  return (
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end label="꺼짐" />
  <Switch label-end checked label="켜짐" />
  <Switch label-end disabled label="비활성" />
  <Switch label-end checked disabled label="켜짐 (비활성)" />
</template>`},group:{html:`<fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
      <legend class="switch_group-legend">개인정보 설정</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_content">
          <span class="switch_label">프로필 공개</span>
          <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
        </span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_content">
          <span class="switch_label">활동 기록 표시</span>
          <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
        </span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">검색 허용</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>

    <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
      <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">고대비 모드</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">애니메이션 줄이기</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>`,react:`import Switch from '@uxkm/react/switch';

export function GroupExample() {
  return (
    <>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset
        className="switch_group switch_group_block switch_group_compact"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">개인정보 설정</legend>
    <Switch label-end checked>
      <span class="switch_content">
        <span class="switch_label">프로필 공개</span>
        <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
      </span>
    </Switch>
    <Switch label-end>
      <span class="switch_content">
        <span class="switch_label">활동 기록 표시</span>
        <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
      </span>
    </Switch>
    <Switch label-end checked label="검색 허용" />
  </fieldset>
  <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
    <Switch label-end label="고대비 모드" />
    <Switch label-end label="애니메이션 줄이기" />
  </fieldset>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="switch-form-vertical-label">알림</span>
        <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
          <label class="switch switch_label-end" data-ripple="true">
            <span class="switch_label">이메일 알림</span>
            <span class="switch_control">
              <input type="checkbox" class="switch_input" role="switch" checked>
              <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
            </span>
          </label>
          <label class="switch switch_label-end" data-ripple="true">
            <span class="switch_label">푸시 알림</span>
            <span class="switch_control">
              <input type="checkbox" class="switch_input" role="switch">
              <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
            </span>
          </label>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
        <label class="switch switch_label-end" aria-labelledby="switch-form-horizontal-label" data-ripple="true">
          <span class="switch_label">편집 내용 자동 저장</span>
          <span class="switch_control">
            <input type="checkbox" class="switch_input" role="switch" checked>
            <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
          </span>
        </label>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Switch from '@uxkm/react/switch';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset
            className="switch_group switch_group_block"
            aria-labelledby="switch-form-vertical-label"
          >
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch
            labelEnd
            checked
            label="편집 내용 자동 저장"
            aria-labelledby="switch-form-horizontal-label"
          />
        </div>
      </FormLayout>
    </>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-vertical-label">알림</span>
      <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
        <Switch label-end checked label="이메일 알림" />
        <Switch label-end label="푸시 알림" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
      <Switch label-end checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
    </div>
  </FormLayout>
</template>`}},D=Object.fromEntries(Object.entries(E).map(([e,t])=>[e,ge(e,t)]))})))()}function _e(e,t){let n=`{# apps/gulp/src/components/form/Slider/slider.njk #}\n${t.html}`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Slider/Slider.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Slider/slider.njk · ${e}`,code:n},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/slider · ${e}`,code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/slider · ${e}`,code:t.vue},{id:`react`,label:`React`,fileName:`@uxkm/react/slider · ${e}`,code:t.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/slider · ${e}`,code:t.react}]}var k,A;function j(){return(j=e((()=>{k={type:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-type-label">label + for — 기본</label>
        <output class="slider_value" for="slider-type-label">40</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-label" min="0" max="100" value="40">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <input type="range" class="slider_input" min="0" max="100" value="55" aria-label="단독 슬라이더 — aria-label">
      <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
    </div>

    <div class="slider slider_fit" role="group" aria-labelledby="slider-type-labelledby-label">
      <div class="slider_header">
        <span class="slider_label" id="slider-type-labelledby-label">aria-labelledby — 외부 레이블</span>
        <output class="slider_value" for="slider-type-labelledby">16</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-labelledby" min="12" max="24" step="1" value="16" aria-labelledby="slider-type-labelledby-label" aria-describedby="slider-type-labelledby-hint" data-slider-valuetext-suffix="픽셀">
      <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-type-describedby">aria-describedby — 보조 설명</label>
        <output class="slider_value" for="slider-type-describedby">70%</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-describedby" min="0" max="100" value="70" aria-describedby="slider-type-describedby-hint" data-slider-suffix="%" data-slider-valuetext-suffix="퍼센트">
      <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-type-valuetext">aria-valuetext — 읽기 쉬운 값</label>
        <output class="slider_value" for="slider-type-valuetext" aria-hidden="true">3단계</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-valuetext" min="1" max="5" step="1" value="3" data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음">
      <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function TypeExample() {
  return (
    <>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        value={40}
        showValue
      />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        value={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        value={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        value={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다.
      </p>
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider
  id="slider-type-label"
  class="slider_fit"
  label="label + for — 기본"
  :value="40"
  show-value
  />
  <Slider
  class="slider_fit"
  :value="55"
  aria-label="단독 슬라이더 — aria-label"
  />
  <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
  <Slider
  id="slider-type-labelledby"
  class="slider_fit"
  label="aria-labelledby — 외부 레이블"
  :value="16"
  :min="12"
  :max="24"
  :step="1"
  aria-describedby="slider-type-labelledby-hint"
  data-slider-valuetext-suffix="픽셀"
  show-value
  />
  <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
  <Slider
  id="slider-type-describedby"
  class="slider_fit"
  label="aria-describedby — 보조 설명"
  :value="70"
  aria-describedby="slider-type-describedby-hint"
  data-slider-suffix="%"
  data-slider-valuetext-suffix="퍼센트"
  show-value
  />
  <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
  <Slider
  id="slider-type-valuetext"
  class="slider_fit"
  label="aria-valuetext — 읽기 쉬운 값"
  :value="3"
  :min="1"
  :max="5"
  :step="1"
  data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
  show-value
  />
  <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
</template>`},basic:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <input type="range" class="slider_input" min="0" max="100" value="30" aria-label="기본 슬라이더">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />
</template>`},label:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-volume">볼륨</label>
        <output class="slider_value" for="slider-volume">60</output>
      </div>
      <input type="range" class="slider_input" id="slider-volume" min="0" max="100" value="60">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-brightness">밝기</label>
        <output class="slider_value" for="slider-brightness">40%</output>
      </div>
      <input type="range" class="slider_input" id="slider-brightness" min="0" max="100" value="40" data-slider-suffix="%">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function LabelExample() {
  return (
    <>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        value={40}
        data-slider-suffix="%"
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
  <Slider
  id="slider-brightness"
  class="slider_fit"
  label="밝기"
  :value="40"
  data-slider-suffix="%"
  show-value
  />
</template>`},size:{html:`<div class="slider slider_sm slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-size-sm">Small — slider_sm</label>
        <output class="slider_value" for="slider-size-sm">30</output>
      </div>
      <input type="range" class="slider_input" id="slider-size-sm" min="0" max="100" value="30">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-size-md">Medium — 기본</label>
        <output class="slider_value" for="slider-size-md">50</output>
      </div>
      <input type="range" class="slider_input" id="slider-size-md" min="0" max="100" value="50">
    </div>

    <div class="slider slider_lg slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-size-lg">Large — slider_lg</label>
        <output class="slider_value" for="slider-size-lg">70</output>
      </div>
      <input type="range" class="slider_input" id="slider-size-lg" min="0" max="100" value="70">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function SizeExample() {
  return (
    <>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        value={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        value={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        value={70}
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
  <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
  <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />
</template>`},width:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-width-fit">slider_fit — 최대 320px</label>
        <output class="slider_value" for="slider-width-fit">45</output>
      </div>
      <input type="range" class="slider_input" id="slider-width-fit" min="0" max="100" value="45">
    </div>

    <div class="slider slider_block" style="max-width: 480px;">
      <div class="slider_header">
        <label class="slider_label" for="slider-width-block">slider_block — 전체 너비</label>
        <output class="slider_value" for="slider-width-block">65</output>
      </div>
      <input type="range" class="slider_input" id="slider-width-block" min="0" max="100" value="65">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function WidthExample() {
  return (
    <>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        value={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        value={65}
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
  <Slider
  id="slider-width-block"
  class="slider_block"
  style="max-width: 480px;"
  label="slider_block — 전체 너비"
  :value="65"
  show-value
  />
</template>`},step:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-step-10">step=10</label>
        <output class="slider_value" for="slider-step-10">50</output>
      </div>
      <input type="range" class="slider_input" id="slider-step-10" min="0" max="100" step="10" value="50">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />
</template>`},stepper:{html:`<div class="slider slider_stepper slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-stepper-volume">볼륨 — slider_stepper</label>
        <output class="slider_value" for="slider-stepper-volume">60</output>
      </div>
      <div class="slider_control">
        <button type="button" class="slider_step slider_step-decrease" data-ripple="true" aria-label="볼륨 줄이기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <input type="range" class="slider_input" id="slider-stepper-volume" min="0" max="100" value="60">
        <button type="button" class="slider_step slider_step-increase" data-ripple="true" aria-label="볼륨 늘리기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
      <p class="slider_hint">모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요.</p>
    </div>

    <div class="slider slider_stepper slider_stepper_always slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-stepper-always">밝기 — slider_stepper_always</label>
        <output class="slider_value" for="slider-stepper-always">40%</output>
      </div>
      <div class="slider_control">
        <button type="button" class="slider_step slider_step-decrease" data-ripple="true" aria-label="밝기 줄이기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <input type="range" class="slider_input" id="slider-stepper-always" min="0" max="100" step="5" value="40" data-slider-suffix="%" data-slider-valuetext-suffix="퍼센트">
        <button type="button" class="slider_step slider_step-increase" data-ripple="true" aria-label="밝기 늘리기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
      <p class="slider_hint">모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다.</p>
    </div>

    <div class="slider slider_stepper slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-stepper-disabled">비활성</label>
        <output class="slider_value" for="slider-stepper-disabled">30</output>
      </div>
      <div class="slider_control">
        <button type="button" class="slider_step slider_step-decrease" data-ripple="true" aria-label="값 줄이기" disabled>
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <input type="range" class="slider_input" id="slider-stepper-disabled" min="0" max="100" value="30" disabled>
        <button type="button" class="slider_step slider_step-increase" data-ripple="true" aria-label="값 늘리기" disabled>
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function StepperExample() {
  return (
    <>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        value={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        value={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        value={30}
        showValue
        disabled
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider
  class="slider_fit"
  stepper
  label="볼륨 — slider_stepper"
  :value="60"
  show-value
  decrease-label="볼륨 줄이기"
  increase-label="볼륨 늘리기"
  hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
  />
  <Slider
  class="slider_fit"
  stepper
  stepper-always
  label="밝기 — slider_stepper_always"
  :value="40"
  :step="5"
  value-suffix="%"
  show-value
  decrease-label="밝기 줄이기"
  increase-label="밝기 늘리기"
  hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
  />
  <Slider
  class="slider_fit"
  stepper
  label="비활성"
  :value="30"
  show-value
  disabled
  />
</template>`},color:{html:`<div class="slider color_primary slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-primary">Primary</label>
        <output class="slider_value" for="slider-color-primary">60</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-primary" min="0" max="100" value="60">
    </div>

    <div class="slider color_success slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-success">Success</label>
        <output class="slider_value" for="slider-color-success">70</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-success" min="0" max="100" value="70">
    </div>

    <div class="slider color_danger slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-danger">Danger</label>
        <output class="slider_value" for="slider-color-danger">40</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-danger" min="0" max="100" value="40">
    </div>

    <div class="slider color_warning slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-warning">Warning</label>
        <output class="slider_value" for="slider-color-warning">80</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-warning" min="0" max="100" value="80">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function ColorExample() {
  return (
    <>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        value={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        value={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        value={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        value={80}
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
  <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
  <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
  <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />
</template>`},state:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-state-default">기본</label>
        <output class="slider_value" for="slider-state-default">50</output>
      </div>
      <input type="range" class="slider_input" id="slider-state-default" min="0" max="100" value="50">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-state-disabled">비활성</label>
        <output class="slider_value" for="slider-state-disabled">30</output>
      </div>
      <input type="range" class="slider_input" id="slider-state-disabled" min="0" max="100" value="30" disabled>
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider class="slider_fit" label="기본" :value="50" show-value />
  <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <label class="form_field-label" for="slider-form-opacity">불투명도</label>
        <div class="slider" data-component="Slider" data-ripple="true">
          <input type="range" class="slider_input" id="slider-form-opacity" min="0" max="100" value="85" data-slider-suffix="%">
        </div>
        <p class="form_field-hint">0~100% 사이 값</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
        <div class="slider" data-component="Slider" data-ripple="true">
          <div class="slider_header">
            <span class="slider_label">현재 값</span>
            <output class="slider_value" for="slider-form-zoom">125%</output>
          </div>
          <input type="range" class="slider_input" id="slider-form-zoom" min="50" max="200" step="25" value="125" data-slider-suffix="%">
        </div>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
        <div class="slider" data-component="Slider" data-ripple="true">
          <input type="range" class="slider_input" id="slider-form-horizontal" min="1" max="10" value="3">
        </div>
        <p class="form_field-hint">1~10px</p>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Slider from '@uxkm/react/slider';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            value={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-opacity">불투명도</label>
      <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
      <p class="form_field-hint">0~100% 사이 값</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
      <Slider
      id="slider-form-zoom"
      label="현재 값"
      :value="125"
      :min="50"
      :max="200"
      :step="25"
      data-slider-suffix="%"
      show-value
      />
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
      <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
      <p class="form_field-hint">1~10px</p>
    </div>
  </FormLayout>
</template>`}},A=Object.fromEntries(Object.entries(k).map(([e,t])=>[e,_e(e,t)]))})))()}function ve(e,t){let n=`{# apps/gulp/src/components/form/Rate/rate.njk #}\n${t.html}`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Rate/Rate.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Rate/rate.njk · ${e}`,code:n},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/rate · ${e}`,code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/rate · ${e}`,code:t.vue},{id:`react`,label:`React`,fileName:`@uxkm/react/rate · ${e}`,code:t.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/rate · ${e}`,code:t.react}]}var M,N;function P(){return(P=e((()=>{M={type:{html:`<fieldset class="rate" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">legend — 상품 만족도</legend>
      <div class="rate_control">
        <div class="rate_stars">
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-legend" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-legend" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-legend" value="3" checked>
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-legend" value="4">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star" data-ripple="true">
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

    <div class="rate" role="group" aria-labelledby="rate-type-labelledby-label" data-component="Rate" data-ripple="true">
      <span class="rate_legend" id="rate-type-labelledby-label">aria-labelledby — 서비스 평가</span>
      <div class="rate_control">
        <div class="rate_stars">
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="3">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-labelledby" value="4" checked>
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star" data-ripple="true">
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

    <fieldset class="rate" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">aria-label — 단독</legend>
      <div class="rate_control">
        <div class="rate_stars" aria-label="별점 5점 만점">
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-aria" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-aria" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-aria" value="3">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-aria" value="4">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-type-aria" value="5">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">5점</span>
          </label>
        </div>
      </div>
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function TypeExample() {
  return (
    <>
      <Rate legend="legend — 상품 만족도" value={3} name="rate-type-legend" />
      <Rate value={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate
        legend="aria-label — 단독"
        name="rate-type-aria"
        aria-label="별점 5점 만점"
      />
    </>
  );
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate legend="legend — 상품 만족도" :value="3" name="rate-type-legend" />
  <Rate :value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
  <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
</template>`},basic:{html:`<fieldset class="rate" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">배송 속도</legend>
      <div class="rate_control">
        <div class="rate_stars">
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-basic" value="1">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">1점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-basic" value="2">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">2점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-basic" value="3" checked>
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">3점</span>
          </label>
          <label class="rate_star" data-ripple="true">
            <input type="radio" class="rate_input" name="rate-basic" value="4">
            <span class="rate_star-graphic" aria-hidden="true">
              <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            <span class="rate_star-label">4점</span>
          </label>
          <label class="rate_star" data-ripple="true">
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
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate legend="배송 속도" :value="3" name="rate-basic" />
</template>`},size:{html:`<fieldset class="rate rate_sm" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">Small — rate_sm</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-sm" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-sm" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-sm" value="3" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-sm" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-sm" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">Medium — 기본</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-md" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-md" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-md" value="3" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-md" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-md" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate rate_lg" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">Large — rate_lg</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-lg" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-lg" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-lg" value="3" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-lg" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-size-lg" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>
  );
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate size="sm" legend="Small — rate_sm" :value="3" name="rate-size-sm" />
  <Rate legend="Medium — 기본" :value="3" name="rate-size-md" />
  <Rate size="lg" legend="Large — rate_lg" :value="3" name="rate-size-lg" />
</template>`},color:{html:`<fieldset class="rate color_primary" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">Primary</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-primary" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-primary" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-primary" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-primary" value="4" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-primary" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate color_success" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">Success</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-success" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-success" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-success" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-success" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-success" value="5" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate color_danger" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">Danger</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-danger" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-danger" value="2" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-danger" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-danger" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-color-danger" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>
  );
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate class="color_primary" legend="Primary" :value="4" name="rate-color-primary" />
  <Rate class="color_success" legend="Success" :value="5" name="rate-color-success" />
  <Rate class="color_danger" legend="Danger" :value="2" name="rate-color-danger" />
</template>`},half:{html:`<fieldset class="rate rate_allow-half" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">정밀 평가 — rate_allow-half</legend>
      <div class="rate_control">
        <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-half" value="1"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="0.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-half" value="2"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="1.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-half" value="3"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="2.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-half" value="4"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="3.5" checked><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-half" value="5"><input type="radio" class="rate_input rate_input-half" name="rate-half" value="4.5"><button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true"></button><button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true"></button><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span><span class="rate_star-label">5점</span></label></div>
        <output class="rate_value" data-rate-output>3.5점</output>
      </div>
      <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
  );
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate allow-half legend="정밀 평가 — rate_allow-half" :value="3.5" name="rate-half" />
  <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
</template>`},clear:{html:`<fieldset class="rate rate_clearable" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">만족도 — rate_clearable</legend>
      <div class="rate_control">
        <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-clear" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-clear" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-clear" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-clear" value="4" checked><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-clear" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
        <button type="button" class="rate_clear" aria-label="별점 초기화" title="초기화" data-ripple="true">
          <svg class="rate_clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <output class="rate_value" data-rate-output>4점</output>
      </div>
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate clearable legend="만족도 — rate_clearable" :value="4" name="rate-clear" />
</template>`},readonly:{html:`<div class="rate is-readonly" role="img" aria-label="5점 만점 중 4.5점" data-component="Rate">
      <div class="rate_stars">
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-half"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span></span>
      </div>
      <span class="rate_value">4.5</span>
    </div>

    <div class="rate is-readonly rate_sm" role="img" aria-label="5점 만점 중 2점" data-component="Rate">
      <div class="rate_stars">
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly is-filled"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
        <span class="rate_star-readonly"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span></span>
      </div>
    </div>`,react:`import Rate from '@uxkm/react/rate';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate readonly allow-half :value="4.5" />
  <Rate readonly size="sm" :value="2" />
</template>`},state:{html:`<fieldset class="rate" disabled data-component="Rate" data-ripple="true">
      <legend class="rate_legend">비활성</legend>
      <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-disabled" value="1" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-disabled" value="2" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-disabled" value="3" checked disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-disabled" value="4" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-disabled" value="5" disabled><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
    </fieldset>

    <fieldset class="rate is-error" data-component="Rate" data-ripple="true">
      <legend class="rate_legend">오류 — is-error</legend>
      <div class="rate_control">
        <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-error" value="1" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-error" value="2" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-error" value="3" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-error" value="4" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-state-error" value="5" aria-invalid="true"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
        <output class="rate_value" data-rate-output></output>
      </div>
      <p class="form_field-error">별점을 선택해 주세요.</p>
    </fieldset>`,react:`import Rate from '@uxkm/react/rate';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}`,vue:`<script setup>
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <Rate disabled legend="비활성" :value="3" name="rate-state-disabled" />
  <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
  <p class="form_field-error">별점을 선택해 주세요.</p>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="rate-form-label">상품 만족도</span>
        <fieldset class="rate" aria-labelledby="rate-form-label" data-component="Rate" data-ripple="true">
          <div class="rate_control">
            <div class="rate_stars"><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-form" value="1"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">1점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-form" value="2"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">2점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-form" value="3"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">3점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-form" value="4"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">4점</span></label><label class="rate_star" data-ripple="true"><input type="radio" class="rate_input" name="rate-form" value="5"><span class="rate_star-graphic" aria-hidden="true"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span><span class="rate_star-label">5점</span></label></div>
            <output class="rate_value" data-rate-output></output>
          </div>
        </fieldset>
        <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Rate from '@uxkm/react/rate';

export function FormExample() {
  return (
    <FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Rate from '@uxkm/vue/rate';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="rate-form-label">상품 만족도</span>
      <Rate name="rate-form" aria-labelledby="rate-form-label" />
      <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
    </div>
  </FormLayout>
</template>`}},N=Object.fromEntries(Object.entries(M).map(([e,t])=>[e,ve(e,t)]))})))()}function ye(e,t){let n=e===`example`,r=`${n?`import { useState } from 'react';
`:``}import Upload from '@uxkm/react/upload';\n\nexport function Example() {${n?`
  const [files, setFiles] = useState([]);`:``}\n  return (\n${L(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,i=`<script setup>\n${n?`import { ref } from 'vue';
`:``}import Upload from '@uxkm/vue/upload';${n?`
const files = ref([]);`:``}\n<\/script>\n\n<template>\n${L(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Upload.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`upload.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/upload · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/upload · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/upload · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/upload · ${e}`,code:r}]}var F,I,L,be;function xe(){return(xe=e((()=>{F=(e,t=``)=>`<input id="${e}" class="upload_input" type="file" tabindex="-1"${t}>`,I={basic:{html:`<div class="upload" data-component="Upload"><label class="upload_trigger" for="upload-basic" tabindex="0">${F(`upload-basic`)}<span class="btn btn_filled color_primary"><span class="btn_label">파일 선택</span></span></label><p class="upload_hint">PDF 또는 문서 파일을 첨부해 주세요.</p><ul class="upload_list" data-upload-list></ul></div>`,react:`<Upload buttonLabel="파일 선택" hint="PDF 또는 문서 파일을 첨부해 주세요." />`,vue:`<Upload button-label="파일 선택" hint="PDF 또는 문서 파일을 첨부해 주세요." />`},dropzone:{html:`<div class="upload upload_fit" data-component="Upload" data-max-size="5242880" data-max-files="3"><label class="upload_dropzone" for="upload-drop" tabindex="0">${F(`upload-drop`,` accept="image/png,image/jpeg,.pdf" multiple`)}<span class="upload_dropzone-title">파일을 끌어다 놓거나 선택하세요</span><span class="upload_dropzone-desc">PNG, JPG, PDF · 파일당 최대 5MB</span></label><p class="form_field-error" data-upload-error hidden></p><ul class="upload_list" data-upload-list></ul></div>`,react:`<Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" maxSize={5 * 1024 * 1024} maxFiles={3} />`,vue:`<Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" :max-size="5 * 1024 * 1024" :max-files="3" />`},list:{html:`<div class="upload upload_fit" data-component="Upload"><ul class="upload_list"><li class="upload_item is-uploading"><span class="upload_item-body"><span class="upload_item-name">프로젝트_제안서_v2.pdf</span><span class="upload_progress" role="progressbar" aria-valuenow="60"><span class="upload_progress-bar" style="width:60%"></span></span><span class="upload_item-meta">2.4 MB · 60%</span></span></li><li class="upload_item is-done">업로드 완료</li><li class="upload_item is-error">업로드 오류</li></ul></div>`,react:`<Upload variant="list" defaultFiles={[{ name: '제안서.pdf', size: 2516582, status: 'uploading', progress: 60 }]} />`,vue:`<Upload variant="list" :default-files="[{ name: '제안서.pdf', size: 2516582, status: 'uploading', progress: 60 }]" />`},cards:{html:`<div class="upload" data-component="Upload"><div class="upload_cards"><div class="upload_card"><img class="upload_card-image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 미리보기 1"><div class="upload_card-actions"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="프로필 미리보기 1 삭제"><svg class="btn_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div><div class="upload_card"><img class="upload_card-image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 미리보기 2"><div class="upload_card-actions"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="프로필 미리보기 2 삭제"><svg class="btn_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div><label class="upload_card upload_card-trigger" for="upload-cards" tabindex="0">${F(`upload-cards`,` accept="image/*" multiple`)}<svg class="icon icon_lg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg><span>업로드</span></label></div></div>`,react:`<Upload
  variant="picture-card"
  multiple
  accept="image/*"
  maxFiles={5}
  buttonLabel="업로드"
  defaultFiles={[
    { name: '프로필-1.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
    { name: '프로필-2.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
  ]}
/>`,vue:`<Upload
  variant="picture-card"
  multiple
  accept="image/*"
  :max-files="5"
  button-label="업로드"
  :default-files="[
    { name: '프로필-1.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
    { name: '프로필-2.svg', size: 245760, type: 'image/svg+xml', status: 'done', url: '/images/samples/avatar/avatar-sample.svg' },
  ]"
/>`},avatar:{html:`<div class="upload" data-component="Upload"><label class="upload_avatar" for="upload-avatar">${F(`upload-avatar`,` accept="image/*"`)}<span class="avatar avatar_xl"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="프로필 사진"></span><span class="upload_avatar-overlay" aria-hidden="true"><svg class="icon icon_lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="m16 6-4-4-4 4M12 2v13"></path></svg></span></label></div>`,react:`<Upload variant="avatar" accept="image/*" avatarSrc="/images/samples/avatar/avatar-sample.svg" avatarAlt="프로필 사진" />`,vue:`<Upload variant="avatar" accept="image/*" avatar-src="/images/samples/avatar/avatar-sample.svg" avatar-alt="프로필 사진" />`},size:{html:[`sm`,`md`,`lg`].map(e=>`<div class="upload${e===`md`?``:` upload_${e}`}" data-component="Upload"><label class="upload_dropzone" for="upload-${e}">${F(`upload-${e}`)}<span class="upload_dropzone-title">${e.toUpperCase()} 업로드</span></label></div>`).join(`
`),react:`<>{['sm', 'md', 'lg'].map((size) => <Upload key={size} variant="drag" size={size} />)}</>`,vue:`<Upload v-for="size in ['sm', 'md', 'lg']" :key="size" variant="drag" :size="size" />`},width:{html:`<div class="upload" data-component="Upload">
  <label class="upload_dropzone" for="upload-default-width" tabindex="0">
    <input id="upload-default-width" class="upload_input" type="file" tabindex="-1">
    <span class="upload_dropzone-title">기본 너비 업로드</span>
    <span class="upload_dropzone-desc">파일을 끌어다 놓거나 선택하세요.</span>
  </label>
  <ul class="upload_list" data-upload-list></ul>
</div>

<div class="upload upload_fit" data-component="Upload">
  <label class="upload_dropzone" for="upload-fit-width" tabindex="0">
    <input id="upload-fit-width" class="upload_input" type="file" tabindex="-1">
    <span class="upload_dropzone-title">전체 너비 업로드</span>
    <span class="upload_dropzone-desc">파일을 끌어다 놓거나 선택하세요.</span>
  </label>
  <ul class="upload_list" data-upload-list></ul>
</div>`,react:`<>
  <Upload variant="drag" title="기본 너비 업로드" />
  <Upload variant="drag" fit title="전체 너비 업로드" />
</>`,vue:`<Upload variant="drag" title="기본 너비 업로드" />
<Upload variant="drag" fit title="전체 너비 업로드" />`},state:{html:`<div class="upload is-disabled" data-component="Upload"><label class="upload_trigger">${F(`upload-disabled`,` disabled`)}<span class="btn">파일 선택</span></label></div>\n<div class="upload" data-component="Upload"><label class="upload_dropzone is-error">업로드 오류</label></div>`,react:`<><Upload disabled /><Upload variant="drag" error title="업로드 오류" /></>`,vue:`<Upload disabled />
<Upload variant="drag" error title="업로드 오류" />`},example:{html:`<form class="form form_vertical form_fit"><div class="form_field"><p class="form_field-label">첨부 파일</p><div class="upload" data-component="Upload" data-max-size="10485760" data-max-files="3">${F(`attachments`,` accept=".pdf,.doc,.docx" multiple`)}<ul class="upload_list" data-upload-list></ul></div></div></form>`,react:`<Upload files={files} onChange={setFiles} multiple accept=".pdf,.doc,.docx" maxSize={10 * 1024 * 1024} maxFiles={3} />`,vue:`<Upload v-model="files" multiple accept=".pdf,.doc,.docx" :max-size="10 * 1024 * 1024" :max-files="3" />`}},L=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),be=Object.fromEntries(Object.entries(I).map(([e,t])=>[e,ye(e,t)]))})))()}function Se(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>`${n}${e}`).join(`
`)}function Ce(e,t){let n=e===`example`,r=`${n?`import { useState } from 'react';
`:``}import DatePicker from '@uxkm/react/date-picker';\n\nexport function Example() {${n?`
  const [date, setDate] = useState('');`:``}\n  return (\n${Se(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,i=`<script setup>\n${n?`import { ref } from 'vue';
`:``}import DatePicker from '@uxkm/vue/date-picker';${n?`
const date = ref('');`:``}\n<\/script>\n\n<template>\n${Se(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`DatePicker.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`date-picker.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/date-picker · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/date-picker · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/date-picker · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/date-picker · ${e}`,code:r}]}var R,z,B,we,Te;function Ee(){return(Ee=e((()=>{R=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,z=(e,t,n,r=``)=>`<div className="form_field"><label className="form_field-label" htmlFor="${e}">${t}</label>${n}${r}</div>`,B=(e,t=``,n=``)=>`<div class="date_picker${t}" data-component="DatePicker"${n?` data-value="${n}"`:``}><div class="date_picker_trigger"><input id="${e}" class="date_picker_input" placeholder="날짜를 선택하세요" readonly aria-haspopup="dialog"><button class="date_picker_btn" type="button" aria-label="달력 열기">달력</button></div><div class="date_picker_panel" role="dialog" aria-label="날짜 선택"></div></div>`,we={basic:{html:R(`date-basic`,`예약일`,B(`date-basic`,` date_picker_fit`,`2024-06-15`),`<p class="form_field-hint">달력에서 날짜를 선택해 주세요.</p>`),react:z(`date-basic`,`예약일`,`<DatePicker id="date-basic" fit defaultValue="2024-06-15" />`,`<p className="form_field-hint">달력에서 날짜를 선택해 주세요.</p>`),vue:R(`date-basic`,`예약일`,`<DatePicker id="date-basic" fit model-value="2024-06-15" />`,`<p class="form_field-hint">달력에서 날짜를 선택해 주세요.</p>`)},size:{html:[`sm`,`md`,`lg`].map(e=>R(`date-${e}`,e.toUpperCase(),B(`date-${e}`,e===`md`?``:` date_picker_${e}`,`2024-06-15`))).join(`
`),react:`<>{['sm', 'md', 'lg'].map((size) => <DatePicker key={size} size={size} defaultValue="2024-06-15" />)}</>`,vue:`<DatePicker v-for="size in ['sm', 'md', 'lg']" :key="size" :size="size" model-value="2024-06-15" />`},width:{html:`${R(`date-full`,`전체 너비`,B(`date-full`,` date_picker_block`,`2024-06-15`))}${R(`date-fit`,`제한 너비`,B(`date-fit`,` date_picker_fit`,`2024-06-15`))}`,react:`<><DatePicker block defaultValue="2024-06-15" /><DatePicker fit defaultValue="2024-06-15" /></>`,vue:`<DatePicker block model-value="2024-06-15" />
<DatePicker fit model-value="2024-06-15" />`},limits:{html:R(`date-limits`,`프로모션 기간`,B(`date-limits`,``,`2024-06-15`).replace(`data-value=`,`data-min="2024-06-10" data-max="2024-06-20" data-value=`)),react:z(`date-limits`,`프로모션 기간`,`<DatePicker id="date-limits" defaultValue="2024-06-15" min="2024-06-10" max="2024-06-20" />`),vue:R(`date-limits`,`프로모션 기간`,`<DatePicker id="date-limits" model-value="2024-06-15" min="2024-06-10" max="2024-06-20" />`)},state:{html:`${R(`date-disabled`,`비활성`,B(`date-disabled`,` is-disabled`,`2024-06-15`).replace(`<input `,`<input disabled `))}${R(`date-error`,`에러`,B(`date-error`,` is-error`),`<p class="form_field-error" role="alert">날짜를 선택해 주세요.</p>`)}`,react:`<><DatePicker disabled defaultValue="2024-06-15" /><DatePicker error aria-describedby="date-error" /><p id="date-error" className="form_field-error" role="alert">날짜를 선택해 주세요.</p></>`,vue:`<DatePicker disabled model-value="2024-06-15" />
<DatePicker error aria-describedby="date-error" /><p id="date-error" class="form_field-error" role="alert">날짜를 선택해 주세요.</p>`},example:{html:`<form class="form form_vertical form_fit">${R(`visit-date`,`방문일`,B(`visit-date`,` is-error`),`<p class="form_field-error" role="alert">방문일을 선택해 주세요.</p>`)}</form>`,react:`<DatePicker id="visit-date" name="visitDate" value={date} onChange={setDate} required error={!date} />`,vue:`<DatePicker id="visit-date" name="visitDate" v-model="date" required :error="!date" />`}},Te=Object.fromEntries(Object.entries(we).map(([e,t])=>[e,Ce(e,t)]))})))()}var De;function Oe(){return(Oe=e((()=>{De=`<!-- Input 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- form_field_fit 안에서 레이블·입력·도움말을 하나의 필드로 구성합니다. -->
<div class="form_field form_field_fit">
  <!-- label과 input id를 연결하고 입력·지우기 버튼을 하나의 clearable 영역으로 묶습니다. -->
  <label class="form_field-label" for="input-example">이름</label>
  <span class="input_clearable">
    <input
      id="input-example"
      class="input"
      type="text"
      placeholder="이름을 입력하세요"
      data-component="Input"
    />
    <button class="input_clear" type="button" data-ripple="surface" aria-label="입력 지우기" hidden>
      <svg
        class="icon"
        data-component="Icon"
        data-icon="close"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
  </span>
  <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
</div>

<label class="input_group-label_hidden" for="input-domain">도메인</label>
<!-- prefix·suffix 애드온은 input_group 안에서 실제 입력과 함께 배치합니다. -->
<div class="input_group input_fit" data-component="InputGroup">
  <span class="input_group-addon" aria-hidden="true">https://</span>
  <input
    id="input-domain"
    class="input"
    type="url"
    placeholder="example.com"
    data-component="Input"
  />
</div>
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`{# Input 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# form_field 안에서 레이블·입력·애드온·상태 메시지를 하나의 필드로 구성합니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
{% set inputId = inputId | default('input-example') %}
{% set inputType = inputType | default('text') %}
{% set inputSize = inputSize | default('md') %}
{% set inputClass = 'input' + (' input_' + inputSize if inputSize != 'md' else '') + (' is-error' if error else '') %}
<div class="form_field{% if fit %} form_field_fit{% endif %}">
  {# 보이는 레이블이 있으면 input id와 연결하고, 없으면 접근 가능한 숨김 레이블을 제공합니다. #}
  {% if label %}
  <label class="form_field-label" for="{{ inputId }}">
    {{ label }}
    {% if required %}
    <span class="form_field-required">
      <span aria-hidden="true">*</span>
      <span class="form_field-required-text">필수 항목</span>
    </span>
    {% endif %}
  </label>
  {% else %}
  <label class="input_group-label_hidden" for="{{ inputId }}">
    {{ ariaLabel | default('입력') }}
  </label>
  {% endif %}
  {# prefix·suffix가 있으면 입력과 애드온을 하나의 InputGroup으로 묶습니다. #}
  {% if prefix or suffix %}
  <div class="input_group" data-component="InputGroup">
  {% endif %}
  {% if prefix %}
  <span class="input_group-addon" aria-hidden="true">{{ prefix }}</span>
  {% endif %}
  {% if clearable %}
  <span class="input_clearable">
  {% endif %}
    <input
      id="{{ inputId }}"
      class="{{ inputClass }}"
      type="{{ inputType }}"{% if placeholder %}
      placeholder="{{ placeholder }}"{% endif %}{% if disabled %}
      disabled{% endif %}{% if readonly %}
      readonly{% endif %}{% if required %}
      required{% endif %}{% if error %}
      aria-invalid="true"{% endif %}
      data-component="Input"
    />
    {% if clearable %}
    <button
        class="input_clear"
        type="button"
        data-ripple="surface"
        aria-label="입력 지우기"
        hidden
      >
        {{ icon('close') }}
    </button>
  </span>
  {% endif %}
  {% if suffix %}
  <span class="input_group-addon">{{ suffix }}</span>
  {% endif %}
  {% if prefix or suffix %}
  </div>
  {% endif %}
  {% if errorMessage %}
  <p class="form_field-error" role="alert">{{ errorMessage }}</p>
  {% elseif hint %}
  <p class="form_field-hint">{{ hint }}</p>
  {% endif %}
</div>
`})))()}var je;function Me(){return(Me=e((()=>{je=`/**
 * Input 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../../basic/Icon/Icon.jsx';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.

export function Input({
  size = 'md', // 입력 높이와 글자 크기입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  error = false, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  placeholder, // 값이 없을 때 표시할 안내입니다.
  type = 'text', // 텍스트·이메일·비밀번호 등 네이티브 입력 타입입니다.
  block = false, // 부모 너비에 맞게 전체 너비로 확장합니다.
  clearable = false, // 값이 있을 때 지우기 버튼을 표시합니다.
  value, // 제어 컴포넌트의 현재 값입니다.
  defaultValue = '', // 비제어 컴포넌트의 초기 값입니다.
  prefix, // 입력 앞에 붙는 애드온 콘텐츠입니다.
  suffix, // 입력 뒤에 붙는 애드온 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 값 변경 콜백입니다.
  onPaste, // 붙여넣기 이벤트 콜백입니다.
  onClear, // 지우기 버튼 클릭 콜백입니다.
  readOnly, // 읽기 전용으로 만들어 편집을 막습니다.
  ...props // id, name, maxLength 등 나머지 네이티브 input 속성을 전달합니다.
}) {
  const inputRef = useRef(null);

  // 크기와 제어 여부를 정규화하고 화면에 표시할 현재 값을 하나로 계산합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const controlled = value !== undefined; // 외부 value로 제어되는지 여부입니다.
  const [innerValue, setInnerValue] = useState(() => value ?? defaultValue ?? '');
  const currentValue = controlled ? (value ?? '') : innerValue; // 화면에 표시할 최종 값입니다.
  const hasAddon = prefix != null || suffix != null; // InputGroup이 필요한지 여부입니다.

  useEffect(() => {
    // 제어 컴포넌트의 외부 값이 바뀌면 내부 표시값도 동기화합니다.
    if (controlled) setInnerValue(value ?? '');
  }, [controlled, value]);

  // 크기·너비·오류·마스킹 상태를 공통 input 클래스로 변환합니다.
  const inputClasses = useMemo(
    () =>
      [
        'input', // 입력 필드 필수 클래스입니다.
        resolvedSize === 'sm' && 'input_sm', // 작은 크기 변형입니다.
        resolvedSize === 'lg' && 'input_lg', // 큰 크기 변형입니다.
        block && 'input_block', // 전체 너비 변형입니다.
        error && 'is-error', // 오류 상태 클래스입니다.
        type === 'password' && String(currentValue).length > 0 && 'input_masked', // 비밀번호 마스킹 표시입니다.
        !hasAddon && !clearable && className, // 단독 입력일 때만 루트에 사용자 클래스를 붙입니다.
      ]
        .filter(Boolean)
        .join(' '),
    [resolvedSize, block, error, type, currentValue, hasAddon, clearable, className],
  );

  const numericOnly = props.inputMode === 'numeric' || props.inputmode === 'numeric'; // 숫자만 허용하는지 여부입니다.
  const maxLength = Number(props.maxLength ?? props.maxlength ?? 0); // 최대 입력 길이입니다.

  // 숫자 전용·number 입력은 키보드와 붙여넣기 모두 동일한 정제 규칙을 사용합니다.
  function sanitize(next) {
    if (numericOnly) {
      const digits = String(next).replace(/\\D/g, '');
      return maxLength > 0 ? digits.slice(0, maxLength) : digits;
    }
    if (type === 'number') return String(next).replace(/[a-zA-ZeE+\\-]/g, '');
    return next;
  }

  function applyValue(event, next) {
    // DOM 값, 비제어 상태, 외부 onChange를 한 순서로 갱신합니다.
    if (next !== event.target.value) event.target.value = next;
    if (!controlled) setInnerValue(next);
    onChange?.(event);
  }

  function handleChange(event) {
    applyValue(event, sanitize(event.target.value));
  }

  function handlePaste(event) {
    onPaste?.(event);
    if (event.defaultPrevented || !numericOnly) return;
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\\D/g, '');
    if (!pasted) return;
    const input = event.currentTarget;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    applyValue(event, sanitize(\`\${input.value.slice(0, start)}\${pasted}\${input.value.slice(end)}\`));
  }

  function handleClear() {
    // 네이티브 setter와 input/change 이벤트를 사용해 폼 라이브러리에도 삭제를 알립니다.
    if (disabled || readOnly) return;
    const input = inputRef.current;
    const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    descriptor?.set?.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    if (!controlled) setInnerValue('');
    onClear?.();
    input.focus();
  }

  // 공통 네이티브 input을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      ref={inputRef}
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={currentValue}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      data-component="Input"
      onChange={handleChange}
      onPaste={handlePaste}
    />
  );

  // 지우기 버튼이 있으면 입력과 버튼을 clearable 래퍼로 묶습니다.
  const control = clearable ? (
    <span
      className={[
        'input_clearable',
        String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {input}
      <button
        type="button"
        className="input_clear"
        data-ripple="surface"
        aria-label="입력 지우기"
        hidden={String(currentValue).length === 0 || disabled || readOnly}
        onClick={handleClear}
      >
        <Icon name="close" />
      </button>
    </span>
  ) : (
    input
  );

  // 애드온이 없으면 clearable 래퍼 또는 단독 입력을 바로 반환합니다.
  if (!hasAddon)
    return clearable ? (
      <span
        className={[
          'input_clearable',
          String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {input}
        <button
          type="button"
          className="input_clear"
          data-ripple="surface"
          aria-label="입력 지우기"
          hidden={String(currentValue).length === 0 || disabled || readOnly}
          onClick={handleClear}
        >
          <Icon name="close" />
        </button>
      </span>
    ) : (
      input
    );

  // prefix·suffix가 있으면 입력과 애드온을 하나의 InputGroup으로 묶습니다.
  return (
    <div
      className={['input_group', className].filter(Boolean).join(' ')}
      data-component="InputGroup"
    >
      {prefix != null && (
        <span className="input_group-addon" aria-hidden="true">
          {prefix}
        </span>
      )}
      {control}
      {suffix != null && <span className="input_group-addon">{suffix}</span>}
    </div>
  );
}

export default Input;
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`<!--
  Input 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 입력에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmInput', inheritAttrs: false });

// 크기, 입력 타입, 상태, 지우기와 애드온 옵션을 하나의 Input API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 입력 높이와 글자 크기입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  error: Boolean, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  placeholder: String, // 값이 없을 때 표시할 안내입니다.
  type: { type: String, default: 'text' }, // 텍스트·이메일·비밀번호 등 네이티브 입력 타입입니다.
  block: Boolean, // 부모 너비에 맞게 전체 너비로 확장합니다.
  clearable: Boolean, // 값이 있을 때 지우기 버튼을 표시합니다.
  modelValue: { type: [String, Number], default: '' }, // v-model 현재 값입니다.
});
const emit = defineEmits(['update:modelValue', 'clear']);
const attrs = useAttrs();
const slots = useSlots();
const inputElement = ref(null);
const inputValue = ref(props.modelValue ?? '');

// 외부 v-model 값이 바뀌면 내부 표시값을 동기화합니다.
watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value ?? '';
  },
);

const hasAddon = computed(() => Boolean(slots.prefix || slots.suffix)); // InputGroup이 필요한지 여부입니다.

// readonly는 속성 표기 방식과 관계없이 동일한 boolean 상태로 계산합니다.
const readonly = computed(
  () =>
    ('readonly' in attrs || 'readOnly' in attrs) && (attrs.readonly ?? attrs.readOnly) !== false,
);
const showClear = computed(
  () =>
    props.clearable && !props.disabled && !readonly.value && String(inputValue.value).length > 0,
); // 지우기 버튼을 보일지 여부입니다.

// 크기·너비·오류·마스킹 상태를 공통 input 클래스로 변환합니다.
const inputClasses = computed(() =>
  [
    'input', // 입력 필드 필수 클래스입니다.
    props.size === 'sm' && 'input_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'input_lg', // 큰 크기 변형입니다.
    props.block && 'input_block', // 전체 너비 변형입니다.
    props.error && 'is-error', // 오류 상태 클래스입니다.
    props.type === 'password' && String(inputValue.value).length > 0 && 'input_masked', // 비밀번호 마스킹 표시입니다.
    !hasAddon.value && !props.clearable && attrs.class, // 단독 입력일 때만 루트에 사용자 클래스를 붙입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const numericOnly = computed(() => attrs.inputmode === 'numeric' || attrs.inputMode === 'numeric'); // 숫자만 허용하는지 여부입니다.

// 숫자 전용·number 입력은 키보드와 붙여넣기 모두 동일한 정제 규칙을 사용합니다.
function sanitize(value) {
  if (numericOnly.value) {
    const digits = String(value).replace(/\\D/g, '');
    const max = Number(attrs.maxlength ?? attrs.maxLength ?? 0);
    return max > 0 ? digits.slice(0, max) : digits;
  }
  if (props.type === 'number') return String(value).replace(/[a-zA-ZeE+\\-]/g, '');
  return value;
}
function applyValue(event, value) {
  if (value !== event.target.value) event.target.value = value;
  inputValue.value = value;
  emit('update:modelValue', value);
}
function handleInput(event) {
  applyValue(event, sanitize(event.target.value));
}
function handlePaste(event) {
  if (!numericOnly.value) return;
  event.preventDefault();
  const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\\D/g, '');
  if (!pasted) return;
  const start = event.target.selectionStart ?? event.target.value.length;
  const end = event.target.selectionEnd ?? event.target.value.length;
  applyValue(
    event,
    sanitize(\`\${event.target.value.slice(0, start)}\${pasted}\${event.target.value.slice(end)}\`),
  );
}
function clear() {
  // 값을 비우고 clear 이벤트를 전달한 뒤 입력으로 포커스를 복원합니다.
  if (props.disabled || readonly.value) return;
  inputValue.value = '';
  emit('update:modelValue', '');
  emit('clear');
  inputElement.value?.focus();
}
<\/script>

<template>
  <!-- prefix·suffix가 있으면 입력과 애드온을 하나의 InputGroup으로 묶습니다. -->
  <div v-if="hasAddon" class="input_group" :class="attrs.class" data-component="InputGroup">
    <span v-if="$slots.prefix" class="input_group-addon" aria-hidden="true">
      <slot name="prefix" />
    </span>
    <span v-if="clearable" class="input_clearable" :class="{ 'is-filled': showClear }">
      <input
        ref="inputElement"
        v-bind="inputAttrs"
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="inputValue"
        :aria-invalid="error ? 'true' : attrs['aria-invalid']"
        data-component="Input"
        @input="handleInput"
        @paste="handlePaste"
      />
      <button
        type="button"
        class="input_clear"
        data-ripple="surface"
        aria-label="입력 지우기"
        :hidden="!showClear"
        @click="clear"
      >
        <Icon name="close" />
      </button>
    </span>
    <input
      v-else
      ref="inputElement"
      v-bind="inputAttrs"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      data-component="Input"
      @input="handleInput"
      @paste="handlePaste"
    />
    <span v-if="$slots.suffix" class="input_group-addon">
      <slot name="suffix" />
    </span>
  </div>
  <!-- 애드온이 없고 clearable이면 입력과 지우기 버튼만 동일한 wrapper에 둡니다. -->
  <span
    v-else-if="clearable"
    class="input_clearable"
    :class="[attrs.class, { 'is-filled': showClear }]"
  >
    <input
      ref="inputElement"
      v-bind="inputAttrs"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      data-component="Input"
      @input="handleInput"
      @paste="handlePaste"
    />
    <button
      type="button"
      class="input_clear"
      data-ripple="surface"
      aria-label="입력 지우기"
      :hidden="!showClear"
      @click="clear"
    >
      <Icon name="close" />
    </button>
  </span>
  <input
    v-else
    ref="inputElement"
    v-bind="inputAttrs"
    :type="type"
    :class="inputClasses"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="inputValue"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Input"
    @input="handleInput"
    @paste="handlePaste"
  />
</template>
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`<!-- Textarea 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- 기본 여러 줄 입력과 글자 수 카운터 변형 예시를 함께 제공합니다. -->
<div class="form_field">
  <!-- label, 여러 줄 입력, 도움말을 하나의 form_field 블록으로 구성합니다. -->
  <label class="form_field-label" for="textarea-message">메시지</label>
  <textarea
    id="textarea-message"
    class="textarea textarea_resize_none"
    rows="4"
    placeholder="메시지를 입력하세요"
    data-component="Textarea"
  ></textarea>
  <p class="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>
</div>

<div class="form_field form_field_fit">
  <!-- 글자 수 카운터는 textarea의 aria-describedby와 연결하고 상태 변경을 알립니다. -->
  <label class="form_field-label" for="textarea-introduction">자기소개</label>
  <div class="textarea_wrap textarea_show-count">
    <textarea
      id="textarea-introduction"
      class="textarea"
      rows="5"
      maxlength="200"
      aria-describedby="textarea-introduction-hint textarea-introduction-count"
      data-component="Textarea"
    ></textarea>
    <span
      id="textarea-introduction-count"
      class="textarea_count"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span class="textarea_count_visual" aria-hidden="true">0/200</span>
      <span class="textarea_count_announcer">0자 입력, 최대 200자</span>
    </span>
  </div>
  <p id="textarea-introduction-hint" class="form_field-hint">200자 이내로 작성해 주세요.</p>
</div>
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`{# Textarea 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# form_field 안에서 레이블·여러 줄 입력·글자 수·상태 메시지를 구성합니다. #}
{% set textareaId = textareaId | default('textarea-example') %}
{% set textareaSize = textareaSize | default('md') %}
{% set textareaResize = textareaResize | default('none') %}
{% set textareaClass = 'textarea' + (' textarea_' + textareaSize if textareaSize != 'md' else '') + ' textarea_resize_' + textareaResize + (' is-error' if error else '') %}
{% set countId = textareaId + '-count' %}
{% set hintId = textareaId + '-hint' %}
{% set textareaValue = value | default('') %}
<div class="form_field{% if fit %} form_field_fit{% endif %}">
  {# 보이는 레이블이 있으면 textarea id와 연결하고, 없으면 접근 가능한 숨김 레이블을 제공합니다. #}
  {% if label %}
  <label class="form_field-label" for="{{ textareaId }}">
    {{ label }}
    {% if required %}
    <span class="form_field-required">
      <span aria-hidden="true">*</span>
      <span class="form_field-required-text">필수 항목</span>
    </span>
    {% endif %}
  </label>
  {% else %}
  <label class="input_group-label_hidden" for="{{ textareaId }}">
    {{ ariaLabel | default('여러 줄 입력') }}
  </label>
  {% endif %}
  {# 글자 수가 필요할 때만 textarea와 접근 가능한 카운터를 wrapper로 묶습니다. #}
  {% if showCount %}
  <div class="textarea_wrap textarea_show-count">
  {% endif %}
  <textarea
    id="{{ textareaId }}"
    class="{{ textareaClass }}"{% if rows %}
    rows="{{ rows }}"{% endif %}{% if maxlength %}
    maxlength="{{ maxlength }}"{% endif %}{% if placeholder %}
    placeholder="{{ placeholder }}"{% endif %}{% if disabled %}
    disabled{% endif %}{% if readonly %}
    readonly{% endif %}{% if required %}
    required{% endif %}{% if error %}
    aria-invalid="true"{% endif %}{% if hint or errorMessage or showCount %}
    aria-describedby="{% if errorMessage or hint %}{{ hintId }}{% endif %}{% if showCount %}{% if errorMessage or hint %} {% endif %}{{ countId }}{% endif %}"{% endif %}
    data-component="Textarea"
  >{{ textareaValue }}</textarea>
  {% if showCount %}
  <span
      id="{{ countId }}"
      class="textarea_count"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
    <span class="textarea_count_visual" aria-hidden="true">
      {{ textareaValue | length }}{% if maxlength %}/{{ maxlength }}{% endif %}
    </span>
    <span class="textarea_count_announcer">
      {{ textareaValue | length }}자 입력{% if maxlength %}, 최대 {{ maxlength }}자{% endif %}
    </span>
  </span>
  </div>
  {% endif %}
  {% if errorMessage %}
  <p id="{{ hintId }}" class="form_field-error" role="alert">{{ errorMessage }}</p>
  {% elseif hint %}
  <p id="{{ hintId }}" class="form_field-hint">{{ hint }}</p>
  {% endif %}
</div>
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`/**
 * Textarea 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.
const VALID_RESIZE = new Set(['none', 'vertical', 'horizontal', 'both']); // 지원하는 크기 조절 방향입니다.

export function Textarea({
  size = 'md', // 텍스트 영역 높이와 글자 크기입니다.
  resize = 'none', // 사용자가 조절할 수 있는 방향입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  error = false, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  showCount = false, // 글자 수 카운터를 표시합니다.
  value, // 제어 컴포넌트의 현재 값입니다.
  defaultValue = '', // 비제어 컴포넌트의 초기 값입니다.
  className = '', // textarea에 적용할 사용자 정의 클래스입니다.
  wrapperClassName = '', // 카운터 래퍼에 적용할 사용자 정의 클래스입니다.
  onChange, // 값 변경 콜백입니다.
  maxLength, // 최대 입력 글자 수입니다.
  readOnly, // 읽기 전용으로 만들어 편집을 막습니다.
  ...props // id, name, rows 등 나머지 네이티브 textarea 속성을 전달합니다.
}) {
  // 고유 카운터 id와 제어·비제어 현재 값을 계산합니다.
  const generatedId = useId().replace(/:/g, '');
  const controlled = value !== undefined; // 외부 value로 제어되는지 여부입니다.
  const [innerValue, setInnerValue] = useState(() => value ?? defaultValue ?? '');
  const currentValue = controlled ? (value ?? '') : innerValue; // 화면에 표시할 최종 값입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const resolvedResize = VALID_RESIZE.has(resize) ? resize : 'none'; // 지원 범위로 보정한 resize입니다.
  const countId = \`\${props.id || \`textarea-\${generatedId}\`}-count\`; // 카운터 요소 id입니다.
  const describedBy =
    [props['aria-describedby'], showCount && countId].filter(Boolean).join(' ') || undefined; // 카운터를 보조 설명으로 연결합니다.
  const count = String(currentValue).length; // 현재 글자 수입니다.
  const hasLimit = Number.isFinite(Number(maxLength)) && Number(maxLength) >= 0; // 최대 길이 제한이 있는지 여부입니다.

  // 크기, resize 방향, 제한 너비와 오류 상태를 공통 클래스로 변환합니다.
  const classes = useMemo(
    () =>
      [
        'textarea', // 텍스트 영역 필수 클래스입니다.
        resolvedSize === 'sm' && 'textarea_sm', // 작은 크기 변형입니다.
        resolvedSize === 'lg' && 'textarea_lg', // 큰 크기 변형입니다.
        \`textarea_resize_\${resolvedResize}\`, // 크기 조절 방향 클래스입니다.
        !showCount && fit && 'textarea_fit', // 카운터 없이 fit일 때 너비 제한입니다.
        error && 'is-error', // 오류 상태 클래스입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' '),
    [resolvedSize, resolvedResize, showCount, fit, error, className],
  );

  function handleChange(event) {
    // 비제어 상태를 갱신한 뒤 외부 change 핸들러를 호출합니다.
    if (!controlled) setInnerValue(event.target.value);
    onChange?.(event);
  }

  // 공통 네이티브 textarea를 한 곳에서 정의합니다.
  const control = (
    <textarea
      {...props}
      className={classes}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxLength}
      value={currentValue}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      aria-describedby={describedBy}
      data-component="Textarea"
      onChange={handleChange}
    />
  );

  // 카운터가 필요 없으면 불필요한 wrapper 없이 textarea를 직접 반환합니다.
  if (!showCount) return control;

  return (
    <div
      className={[
        'textarea_wrap', // 카운터와 함께 묶는 래퍼입니다.
        'textarea_show-count', // 카운터 표시 모드입니다.
        fit && 'textarea_wrap_fit', // 래퍼 단위 너비 제한입니다.
        wrapperClassName, // 호출 위치에서 전달한 래퍼 클래스입니다.
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {control}
      <span
        id={countId}
        className={['textarea_count', hasLimit && count >= Number(maxLength) && 'is-limit']
          .filter(Boolean)
          .join(' ')}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* 시각용 축약 표기와 스크린 리더용 자연어 상태 문구를 분리합니다. */}
        <span className="textarea_count_visual" aria-hidden="true">
          {count}
          {hasLimit ? \`/\${maxLength}\` : ''}
        </span>
        <span className="textarea_count_announcer">
          {count}자 입력{hasLimit ? \`, 최대 \${maxLength}자\` : ''}
        </span>
      </span>
    </div>
  );
}

export default Textarea;
`})))()}var Ve;function He(){return(He=e((()=>{Ve=`<!--
  Textarea 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, useId, watch } from 'vue';

// 속성을 계산된 textarea에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmTextarea', inheritAttrs: false });

// 크기, resize, 상태와 글자 수 옵션을 하나의 Textarea API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 텍스트 영역 높이와 글자 크기입니다.
  resize: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'vertical', 'horizontal', 'both'].includes(value),
  }, // 사용자가 조절할 수 있는 방향입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  error: Boolean, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  showCount: Boolean, // 글자 수 카운터를 표시합니다.
  modelValue: { type: [String, Number], default: '' }, // v-model 현재 값입니다.
  maxLength: { type: [String, Number], default: undefined }, // 최대 입력 글자 수입니다.
  wrapperClass: { type: String, default: '' }, // 카운터 래퍼에 적용할 사용자 정의 클래스입니다.
});
const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();
const inputValue = ref(props.modelValue ?? '');

// 외부 v-model 값이 바뀌면 내부 표시값을 동기화합니다.
watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value ?? '';
  },
);

const generatedId = useId();
// 기존 설명 id를 유지하면서 접근 가능한 카운터 id를 추가합니다.
const textareaId = computed(() => attrs.id || \`textarea-\${generatedId.replace(/:/g, '')}\`);
const countId = computed(() => \`\${textareaId.value}-count\`); // 카운터 요소 id입니다.
const describedBy = computed(
  () =>
    [attrs['aria-describedby'], props.showCount && countId.value].filter(Boolean).join(' ') ||
    undefined,
); // 카운터를 보조 설명으로 연결합니다.
const count = computed(() => String(inputValue.value).length); // 현재 글자 수입니다.
const hasLimit = computed(
  () =>
    props.maxLength !== undefined &&
    Number.isFinite(Number(props.maxLength)) &&
    Number(props.maxLength) >= 0,
); // 최대 길이 제한이 있는지 여부입니다.

// 크기, resize 방향, 제한 너비와 오류 상태를 공통 클래스로 변환합니다.
const textareaClasses = computed(() =>
  [
    'textarea', // 텍스트 영역 필수 클래스입니다.
    props.size === 'sm' && 'textarea_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'textarea_lg', // 큰 크기 변형입니다.
    \`textarea_resize_\${props.resize}\`, // 크기 조절 방향 클래스입니다.
    !props.showCount && props.fit && 'textarea_fit', // 카운터 없이 fit일 때 너비 제한입니다.
    props.error && 'is-error', // 오류 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 textarea로 전달합니다.
const textareaAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function handleInput(event) {
  // 입력값을 내부 상태와 v-model에 같은 순서로 반영합니다.
  inputValue.value = event.target.value;
  emit('update:modelValue', event.target.value);
}
<\/script>

<template>
  <!-- showCount일 때만 textarea와 접근 가능한 카운터를 wrapper로 묶습니다. -->
  <div
    v-if="showCount"
    class="textarea_wrap textarea_show-count"
    :class="[fit && 'textarea_wrap_fit', wrapperClass]"
  >
    <textarea
      v-bind="textareaAttrs"
      :id="textareaId"
      :class="textareaClasses"
      :disabled="disabled"
      :maxlength="maxLength"
      :value="inputValue"
      :aria-invalid="error ? 'true' : attrs['aria-invalid']"
      :aria-describedby="describedBy"
      data-component="Textarea"
      @input="handleInput"
    />
    <span
      :id="countId"
      class="textarea_count"
      :class="{ 'is-limit': hasLimit && count >= Number(maxLength) }"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span class="textarea_count_visual" aria-hidden="true">
        {{ count }}{{ hasLimit ? \`/\${maxLength}\` : '' }}
      </span>
      <span class="textarea_count_announcer">
        {{ count }}자 입력{{ hasLimit ? \`, 최대 \${maxLength}자\` : '' }}
      </span>
    </span>
  </div>
  <!-- 카운터가 없으면 불필요한 wrapper 없이 textarea를 직접 반환합니다. -->
  <textarea
    v-else
    v-bind="textareaAttrs"
    :class="textareaClasses"
    :disabled="disabled"
    :maxlength="maxLength"
    :value="inputValue"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Textarea"
    @input="handleInput"
  />
</template>
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`<!-- Select 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- form_field_fit 안에서 label·select·도움말을 하나의 필드로 구성합니다. -->
<div class="form_field form_field_fit">
  <!-- label과 select id를 연결하고 placeholder는 비활성 빈 option으로 제공합니다. -->
  <label class="form_field-label" for="select-region">지역</label>
  <select id="select-region" class="input" required data-component="Select">
    <option value="" disabled selected>지역을 선택하세요</option>
    <option value="seoul">서울</option>
    <option value="busan">부산</option>
    <option value="jeju">제주</option>
  </select>
  <p class="form_field-hint">거주 지역을 선택해 주세요.</p>
</div>

<label class="display_contents">
  <!-- 보이는 label이 없는 단독 선택도 숨김 텍스트로 접근 가능한 이름을 제공합니다. -->
  <span class="input_group-label_hidden">언어</span>
  <select class="input input_fit" data-component="Select">
    <option value="ko">한국어</option>
    <option value="en">English</option>
  </select>
</label>
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`{# Select 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# form_field 안에서 레이블·select·상태 메시지를 하나의 필드로 구성합니다. #}
{% set selectId = selectId | default('select-example') %}
{% set selectSize = selectSize | default('md') %}
{% set selectClass = 'input' + (' input_' + selectSize if selectSize != 'md' else '') + (' input_fit' if fit else '') + (' is-error' if error else '') %}
<div class="form_field{% if fit %} form_field_fit{% endif %}">
  {# 보이는 레이블이 있으면 select id와 연결하고, 없으면 접근 가능한 숨김 레이블을 제공합니다. #}
  {% if label %}
  <label class="form_field-label" for="{{ selectId }}">
    {{ label }}
    {% if required %}
    <span class="form_field-required">
      <span aria-hidden="true">*</span>
      <span class="form_field-required-text">필수 항목</span>
    </span>
    {% endif %}
  </label>
  {% else %}
  <label class="input_group-label_hidden" for="{{ selectId }}">
    {{ ariaLabel | default('선택') }}
  </label>
  {% endif %}
  {# 선택값, placeholder, 다중 선택과 상태 속성을 네이티브 select에 전달합니다. #}
  <select
    id="{{ selectId }}"
    class="{{ selectClass }}"{% if multiple %}
    multiple{% endif %}{% if size %}
    size="{{ size }}"{% endif %}{% if disabled %}
    disabled{% endif %}{% if required %}
    required{% endif %}{% if error %}
    aria-invalid="true"{% endif %}{% if hint or errorMessage %}
    aria-describedby="{{ selectId }}-message"{% endif %}
    data-component="Select"
  >
    {% if placeholder %}
    <option value="" disabled{% if not value %} selected{% endif %}>
      {{ placeholder }}
    </option>
    {% endif %}
    {% for option in options %}
    <option
      value="{{ option.value }}"{% if option.value == value or option.selected %}
      selected{% endif %}{% if option.disabled %}
      disabled{% endif %}
    >
      {{ option.label }}
    </option>
    {% endfor %}
  </select>
  {% if errorMessage %}
  <p id="{{ selectId }}-message" class="form_field-error" role="alert">
    {{ errorMessage }}
  </p>
  {% elseif hint %}
  <p id="{{ selectId }}-message" class="form_field-hint">{{ hint }}</p>
  {% endif %}
</div>
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`/**
 * Select 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.

export function Select({
  size = 'md', // 선택 상자 높이와 글자 크기입니다.
  nativeSize, // 네이티브 select의 size 속성입니다.
  disabled = false, // 선택을 비활성으로 만들어 조작을 막습니다.
  error = false, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  placeholder, // 값이 없을 때 표시할 안내 option입니다.
  value, // 제어 컴포넌트의 선택 값입니다.
  defaultValue, // 비제어 컴포넌트의 초기 선택 값입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children, // option 목록을 구성하는 자식입니다.
  onChange, // 선택 값 변경 콜백입니다.
  ...props // id, name 등 나머지 네이티브 select 속성을 전달합니다.
}) {
  // 크기·너비·오류 상태를 네이티브 select에 적용할 공통 클래스로 변환합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const classes = [
    'input', // Select도 Input과 동일한 입력 계열 클래스를 사용합니다.
    resolvedSize === 'sm' && 'input_sm', // 작은 크기 변형입니다.
    resolvedSize === 'lg' && 'input_lg', // 큰 크기 변형입니다.
    fit && 'input_fit', // 제한 너비 변형입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 제어 값이 없으면 placeholder를 위한 빈 기본값을 둡니다.
  const valueProps =
    value !== undefined
      ? { value }
      : { defaultValue: defaultValue ?? (placeholder ? '' : undefined) };

  return (
    <select
      {...props}
      {...valueProps}
      className={classes}
      size={nativeSize}
      disabled={disabled}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      data-component="Select"
      onChange={onChange}
    >
      {/* placeholder는 실제 값이 없는 비활성 option으로 제공합니다. */}
      {placeholder != null && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}

export default Select;
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`<!--
  Select 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 select에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSelect', inheritAttrs: false });

// 크기, placeholder, 다중 선택과 상태 옵션을 하나의 Select API로 제공합니다.
const props = defineProps({
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 선택 상자 높이와 글자 크기입니다.
  nativeSize: { type: [String, Number], default: undefined }, // 네이티브 select의 size 속성입니다.
  disabled: Boolean, // 선택을 비활성으로 만들어 조작을 막습니다.
  error: Boolean, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  placeholder: String, // 값이 없을 때 표시할 안내 option입니다.
  multiple: Boolean, // 여러 항목 선택을 허용합니다.
  modelValue: { type: [String, Number, Array], default: undefined }, // v-model 선택 값입니다.
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();

// 크기·너비·오류 상태와 외부 클래스를 네이티브 select에 함께 적용합니다.
const selectClasses = computed(() =>
  [
    'input', // Select도 Input과 동일한 입력 계열 클래스를 사용합니다.
    props.size === 'sm' && 'input_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'input_lg', // 큰 크기 변형입니다.
    props.fit && 'input_fit', // 제한 너비 변형입니다.
    props.error && 'is-error', // 오류 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 select로 전달합니다.
const selectAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const selectedValue = computed({
  // placeholder가 있으면 빈 값을 기본 선택값으로 사용하고 setter로 v-model을 갱신합니다.
  get: () => props.modelValue ?? (props.placeholder ? '' : undefined),
  set: (value) => emit('update:modelValue', value),
});

function handleChange(event) {
  // v-model 갱신과 별개로 네이티브 change 이벤트도 외부에 전달합니다.
  emit('change', event);
}
<\/script>

<template>
  <select
    v-model="selectedValue"
    v-bind="selectAttrs"
    :class="selectClasses"
    :disabled="disabled"
    :multiple="multiple"
    :size="nativeSize"
    :aria-invalid="error ? 'true' : attrs['aria-invalid']"
    data-component="Select"
    @change="handleChange"
  >
    <!-- placeholder는 실제 값이 없는 비활성 option으로 제공합니다. -->
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <slot />
  </select>
</template>
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`<!-- Checkbox 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- checkbox 루트에 파장 효과를 켜고 컨트롤과 레이블을 나란히 배치합니다. -->
<div class="checkbox" data-ripple="true">
  <!-- 숨김 checkbox_input과 시각용 checkbox_box를 하나의 컨트롤로 묶습니다. -->
  <span class="checkbox_control">
    <input id="checkbox-example" class="checkbox_input" type="checkbox" data-component="Checkbox" />
    <span class="checkbox_box" aria-hidden="true"></span>
  </span>
  <!-- label의 for로 입력 id를 연결합니다. -->
  <label class="checkbox_label" for="checkbox-example">체크박스</label>
</div>
`})))()}var $e;function et(){return(et=e((()=>{$e=`{# Checkbox 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# button이면 버튼형 label, 아니면 컨트롤·레이블을 나란히 배치합니다. #}
{% set checkboxId = checkboxId | default('checkbox-example') %}
{% if button %}
{# 버튼형은 숨김 input과 레이블을 하나의 label로 감쌉니다. #}
<label class="checkbox checkbox_button" data-ripple="{{ 'false' if ripple == false else 'true' }}"
  ><input
    id="{{ checkboxId }}"
    class="checkbox_input"
    type="checkbox"{% if checked %}
    checked{% endif %}{% if disabled %}
    disabled{% endif %}
    data-component="Checkbox"
  /><span class="checkbox_label">{{ label | default('체크박스') }}</span></label
>
{% else %}
{# 기본형은 checkbox_control과 checkbox_label을 배치 옵션에 맞게 둡니다. #}
<div
  class="checkbox{% if labelEnd %} checkbox_label-end{% endif %}"
  data-ripple="{{ 'false' if ripple == false else 'true' }}"
>
  {% if labelEnd %}<label class="checkbox_label" for="{{ checkboxId }}"
    >{{ label | default('체크박스') }}</label
  >{% endif %}
  <span class="checkbox_control"
    ><input
      id="{{ checkboxId }}"
      class="checkbox_input"
      type="checkbox"{% if checked %}
      checked{% endif %}{% if disabled %}
      disabled{% endif %}
      data-component="Checkbox" /><span class="checkbox_box" aria-hidden="true"></span
  ></span>
  {% if not labelEnd %}<label class="checkbox_label" for="{{ checkboxId }}"
    >{{ label | default('체크박스') }}</label
  >{% endif %}
</div>
{% endif %}
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`/**
 * Checkbox 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useRef } from 'react';

export function Checkbox({
  label, // 보이는 레이블 텍스트입니다.
  checked, // 제어 컴포넌트의 체크 상태입니다.
  defaultChecked, // 비제어 컴포넌트의 초기 체크 상태입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  indeterminate = false, // 부분 선택 상태를 네이티브 indeterminate로 반영합니다.
  labelEnd = false, // 레이블을 입력보다 앞에 배치합니다.
  button = false, // 버튼형 체크박스 변형을 사용합니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
  children, // label 대신 사용할 사용자 정의 레이블 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 체크 상태 변경 콜백입니다.
  id, // 네이티브 input에 연결할 id입니다.
  ...props // 나머지 네이티브 checkbox 속성을 입력에 전달합니다.
}) {
  // 레이블 연결과 입력 참조에 필요한 식별자와 ref를 준비합니다.
  const generatedId = useId();
  const inputRef = useRef(null);
  const inputId = id ?? generatedId;
  const content = children ?? label; // 표시할 최종 레이블 콘텐츠입니다.
  const standalone = content == null || content === ''; // 레이블 없는 단독 체크박스인지 여부입니다.

  // 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
  const classes = [
    'checkbox', // 체크박스 루트 필수 클래스입니다.
    labelEnd && 'checkbox_label-end', // 레이블 우선 배치 변형입니다.
    button && 'checkbox_button', // 버튼형 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // onChange 유무에 따라 제어·비제어 체크 props를 구성합니다.
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };

  // 공통 네이티브 checkbox 입력을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      ref={inputRef}
      id={standalone ? id : inputId}
      type="checkbox"
      className="checkbox_input"
      disabled={disabled}
      {...checkedProps}
      data-component="Checkbox"
    />
  );
  const rippleAttrs = { 'data-ripple': ripple ? 'true' : 'false' }; // 파장 효과 데이터 속성입니다.

  // indeterminate는 React prop이 아니므로 DOM에 직접 동기화합니다.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = Boolean(indeterminate);
  }, [indeterminate]);

  // 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다.
  if (standalone)
    return (
      <label
        className={['checkbox_control', className].filter(Boolean).join(' ')}
        aria-label={ariaLabel}
        {...rippleAttrs}
      >
        {input}
        <span className="checkbox_box" aria-hidden="true" />
      </label>
    );

  // 버튼형은 입력과 레이블을 하나의 label로 감쌉니다.
  if (button)
    return (
      <label className={classes} {...rippleAttrs}>
        {input}
        <span className="checkbox_label">{content}</span>
      </label>
    );

  // 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다.
  return (
    <div className={classes} {...rippleAttrs}>
      {labelEnd && (
        <label className="checkbox_label" htmlFor={inputId}>
          {content}
        </label>
      )}
      <span className="checkbox_control">
        {input}
        <span className="checkbox_box" aria-hidden="true" />
      </span>
      {!labelEnd && (
        <label className="checkbox_label" htmlFor={inputId}>
          {content}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
`})))()}var rt;function it(){return(it=e((()=>{rt=`<!--
  Checkbox 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, onMounted, ref, useAttrs, useId, useSlots, watch } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmCheckbox', inheritAttrs: false });

// 체크 상태, 레이블 배치, 버튼형과 접근성 옵션을 prop으로 받습니다.
const props = defineProps({
  label: String, // 보이는 레이블 텍스트입니다.
  checked: Boolean, // 제어 컴포넌트의 체크 상태입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  indeterminate: Boolean, // 부분 선택 상태를 네이티브 indeterminate로 반영합니다.
  labelEnd: Boolean, // 레이블을 입력보다 앞에 배치합니다.
  button: Boolean, // 버튼형 체크박스 변형을 사용합니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();
const inputRef = ref(null);
const inputId = useId();
const hasLabel = computed(() => Boolean(props.label || slots.default)); // 보이는 레이블이 있는지 여부입니다.

// 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
const rootClass = computed(() =>
  [
    'checkbox', // 체크박스 루트 필수 클래스입니다.
    props.labelEnd && 'checkbox_label-end', // 레이블 우선 배치 변형입니다.
    props.button && 'checkbox_button', // 버튼형 변형입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

// indeterminate는 Vue prop이 아니므로 DOM에 직접 동기화합니다.
function syncIndeterminate() {
  if (inputRef.value) inputRef.value.indeterminate = props.indeterminate;
}
onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);
<\/script>

<template>
  <!-- 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다. -->
  <label
    v-if="!hasLabel"
    class="checkbox_control"
    :class="attrs.class"
    :aria-label="ariaLabel"
    :data-ripple="ripple ? 'true' : 'false'"
  >
    <input
      ref="inputRef"
      v-bind="inputAttrs"
      type="checkbox"
      class="checkbox_input"
      :checked="checked"
      :disabled="disabled"
      data-component="Checkbox"
    />
    <span class="checkbox_box" aria-hidden="true" />
  </label>
  <!-- 버튼형은 입력과 레이블을 하나의 label로 감쌉니다. -->
  <label v-else-if="button" :class="rootClass" :data-ripple="ripple ? 'true' : 'false'">
    <input
      :id="inputId"
      ref="inputRef"
      v-bind="inputAttrs"
      type="checkbox"
      class="checkbox_input"
      :checked="checked"
      :disabled="disabled"
      data-component="Checkbox"
    />
    <span class="checkbox_label"
      ><slot>{{ label }}</slot></span
    >
  </label>
  <!-- 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다. -->
  <div v-else :class="rootClass" :data-ripple="ripple ? 'true' : 'false'">
    <label v-if="labelEnd" class="checkbox_label" :for="inputId"
      ><slot>{{ label }}</slot></label
    >
    <span class="checkbox_control">
      <input
        :id="inputId"
        ref="inputRef"
        v-bind="inputAttrs"
        type="checkbox"
        class="checkbox_input"
        :checked="checked"
        :disabled="disabled"
        data-component="Checkbox"
      />
      <span class="checkbox_box" aria-hidden="true" />
    </span>
    <label v-if="!labelEnd" class="checkbox_label" :for="inputId"
      ><slot>{{ label }}</slot></label
    >
  </div>
</template>
`})))()}var at;function ot(){return(ot=e((()=>{at=`<!-- Radio 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- radio 루트 label이 입력·커스텀 원·텍스트 레이블을 한 클릭 영역으로 묶습니다. -->
<label class="radio" data-ripple="true">
  <!-- 숨김 radio_input과 시각용 radio_box를 하나의 컨트롤로 묶습니다. -->
  <span class="radio_control">
    <input
      class="radio_input"
      type="radio"
      name="radio-example"
      value="option"
      data-component="Radio"
    />
    <span class="radio_box" aria-hidden="true"></span>
  </span>
  <!-- 같은 name으로 그룹을 만들고 value는 제출 값입니다. -->
  <span class="radio_label">라디오</span>
</label>
`})))()}var st;function ct(){return(ct=e((()=>{st=`{# Radio 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# radio 루트 label이 입력·커스텀 원·텍스트 레이블을 한 클릭 영역으로 묶습니다. #}
<label
  class="radio{% if labelEnd %} radio_label-end{% endif %}{% if button %} radio_button{% endif %}"
  data-ripple="{{ 'false' if ripple == false else 'true' }}"
>
  {% if button %}
  {# 버튼형은 숨김 radio와 레이블만 사용합니다. #}
  <input
    class="radio_input"
    type="radio"
    name="{{ name | default('radio-example') }}"{% if value %}
    value="{{ value }}"{% endif %}{% if checked %}
    checked{% endif %}{% if disabled %}
    disabled{% endif %}
    data-component="Radio"
  /><span class="radio_label">{{ label | default('라디오') }}</span>
  {% else %}
  {# 기본형은 radio_control과 radio_label을 배치 옵션에 맞게 둡니다. #}
  {% if labelEnd %}<span class="radio_label">{{ label | default('라디오') }}</span
  >{% endif %}
  <span class="radio_control"
    ><input
      class="radio_input"
      type="radio"
      name="{{ name | default('radio-example') }}"{% if value %}
      value="{{ value }}"{% endif %}{% if checked %}
      checked{% endif %}{% if disabled %}
      disabled{% endif %}
      data-component="Radio" /><span class="radio_box" aria-hidden="true"></span
  ></span>
  {% if not labelEnd %}<span class="radio_label">{{ label | default('라디오') }}</span
  >{% endif %}
  {% endif %}
</label>
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`/**
 * Radio 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
export function Radio({
  label, // 보이는 레이블 텍스트입니다.
  name, // 같은 그룹으로 묶을 라디오 name입니다.
  value, // 폼 제출 시 전달할 값입니다.
  checked, // 제어 컴포넌트의 선택 상태입니다.
  defaultChecked, // 비제어 컴포넌트의 초기 선택 상태입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd = false, // 레이블을 입력보다 앞에 배치합니다.
  button = false, // 버튼형 라디오 변형을 사용합니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
  children, // label 대신 사용할 사용자 정의 레이블 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 선택 상태 변경 콜백입니다.
  id, // 네이티브 input에 연결할 id입니다.
  ...props // 나머지 네이티브 radio 속성을 입력에 전달합니다.
}) {
  // 표시 콘텐츠와 단독 여부, 변형 클래스를 계산합니다.
  const content = children ?? label; // 표시할 최종 레이블 콘텐츠입니다.
  const standalone = content == null || content === ''; // 레이블 없는 단독 라디오인지 여부입니다.
  const classes = [
    'radio', // 라디오 루트 필수 클래스입니다.
    labelEnd && 'radio_label-end', // 레이블 우선 배치 변형입니다.
    button && 'radio_button', // 버튼형 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // onChange 유무에 따라 제어·비제어 선택 props를 구성합니다.
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };

  // 공통 네이티브 radio 입력을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      id={id}
      type="radio"
      className="radio_input"
      name={name}
      value={value}
      disabled={disabled}
      {...checkedProps}
      data-component="Radio"
    />
  );
  const rippleAttrs = { 'data-ripple': ripple ? 'true' : 'false' }; // 파장 효과 데이터 속성입니다.

  // 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다.
  if (standalone)
    return (
      <label
        className={['radio_control', className].filter(Boolean).join(' ')}
        aria-label={ariaLabel}
        {...rippleAttrs}
      >
        {input}
        <span className="radio_box" aria-hidden="true" />
      </label>
    );

  // 버튼형은 입력과 레이블을 하나의 label로 감쌉니다.
  if (button)
    return (
      <label className={classes} {...rippleAttrs}>
        {input}
        <span className="radio_label">{content}</span>
      </label>
    );

  // 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다.
  return (
    <label className={classes} {...rippleAttrs}>
      {labelEnd && <span className="radio_label">{content}</span>}
      <span className="radio_control">
        {input}
        <span className="radio_box" aria-hidden="true" />
      </span>
      {!labelEnd && <span className="radio_label">{content}</span>}
    </label>
  );
}

export default Radio;
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`<!--
  Radio 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmRadio', inheritAttrs: false });

// 그룹 이름, 제출 값, 선택 상태와 레이블 배치를 prop으로 받습니다.
const props = defineProps({
  label: String, // 보이는 레이블 텍스트입니다.
  name: String, // 같은 그룹으로 묶을 라디오 name입니다.
  value: String, // 폼 제출 시 전달할 값입니다.
  checked: Boolean, // 제어 컴포넌트의 선택 상태입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd: Boolean, // 레이블을 입력보다 앞에 배치합니다.
  button: Boolean, // 버튼형 라디오 변형을 사용합니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => Boolean(props.label || slots.default)); // 보이는 레이블이 있는지 여부입니다.

// 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
const rootClass = computed(() =>
  [
    'radio', // 라디오 루트 필수 클래스입니다.
    props.labelEnd && 'radio_label-end', // 레이블 우선 배치 변형입니다.
    props.button && 'radio_button', // 버튼형 변형입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다. -->
  <label
    v-if="!hasLabel"
    class="radio_control"
    :class="attrs.class"
    :aria-label="ariaLabel"
    :data-ripple="ripple ? 'true' : 'false'"
  >
    <input
      v-bind="inputAttrs"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      data-component="Radio"
    />
    <span class="radio_box" aria-hidden="true" />
  </label>
  <!-- 레이블이 있으면 버튼형·기본형을 하나의 label로 구성합니다. -->
  <label v-else :class="rootClass" :data-ripple="ripple ? 'true' : 'false'">
    <input
      v-if="button"
      v-bind="inputAttrs"
      type="radio"
      class="radio_input"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      data-component="Radio"
    />
    <span v-if="labelEnd && !button" class="radio_label"
      ><slot>{{ label }}</slot></span
    >
    <span v-if="!button" class="radio_control">
      <input
        v-bind="inputAttrs"
        type="radio"
        class="radio_input"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        data-component="Radio"
      />
      <span class="radio_box" aria-hidden="true" />
    </span>
    <span v-if="button || !labelEnd" class="radio_label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`<!-- Switch 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- switch 루트 label에 role="switch" 입력과 트랙·손잡이·레이블을 함께 둡니다. -->
<label class="switch" data-ripple="true">
  <!-- checkbox 입력을 스위치 역할로 쓰고 트랙·thumb는 장식용입니다. -->
  <span class="switch_control">
    <input class="switch_input" type="checkbox" role="switch" data-component="Switch" />
    <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
  </span>
  <span class="switch_label">스위치</span>
</label>
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`{# Switch 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# switch 루트 label에 role="switch" 입력과 트랙·손잡이·레이블을 함께 둡니다. #}
<label
  class="switch{% if labelEnd %} switch_label-end{% endif %}{% if size and size != 'md' %} switch_{{ size }}{% endif %}"
  data-ripple="{{ 'false' if ripple == false else 'true' }}"
>
  {% if labelEnd %}<span class="switch_label">{{ label | default('스위치') }}</span
  >{% endif %}
  {# checkbox 입력을 스위치 역할로 쓰고 트랙·thumb는 장식용입니다. #}
  <span class="switch_control"
    ><input
      class="switch_input"
      type="checkbox"
      role="switch"{% if checked %}
      checked{% endif %}{% if disabled %}
      disabled{% endif %}
      data-component="Switch" /><span class="switch_track" aria-hidden="true"
      ><span class="switch_thumb"></span></span
  ></span>
  {% if not labelEnd %}<span class="switch_label">{{ label | default('스위치') }}</span
  >{% endif %}
</label>
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`/**
 * Switch 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.

export function Switch({
  label, // 보이는 레이블 텍스트입니다.
  checked, // 제어 컴포넌트의 켜짐 상태입니다.
  defaultChecked, // 비제어 컴포넌트의 초기 켜짐 상태입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd = false, // 레이블을 스위치보다 앞에 배치합니다.
  size = 'md', // 트랙과 레이블 크기입니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
  children, // label 대신 사용할 사용자 정의 레이블 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 켜짐 상태 변경 콜백입니다.
  id, // 네이티브 input에 연결할 id입니다.
  name, // 폼 제출에 사용할 name입니다.
  value, // 폼 제출에 사용할 value입니다.
  ...props // 나머지 네이티브 checkbox 속성을 입력에 전달합니다.
}) {
  // 레이블 유무와 크기를 정규화한 뒤 공통 클래스를 조합합니다.
  const content = children ?? label; // 표시할 최종 레이블 콘텐츠입니다.
  const hasLabel = content != null && content !== ''; // 보이는 레이블이 있는지 여부입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const classes = [
    'switch', // 스위치 루트 필수 클래스입니다.
    labelEnd && 'switch_label-end', // 레이블 우선 배치 변형입니다.
    resolvedSize === 'sm' && 'switch_sm', // 작은 크기 변형입니다.
    resolvedSize === 'lg' && 'switch_lg', // 큰 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // onChange 유무에 따라 제어·비제어 체크 props를 구성합니다.
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };

  // 레이블·트랙·손잡이를 하나의 label로 묶어 스위치 UI를 구성합니다.
  return (
    <label
      className={classes}
      aria-label={!hasLabel ? ariaLabel : undefined}
      data-ripple={ripple ? 'true' : 'false'}
    >
      {hasLabel && labelEnd && <span className="switch_label">{content}</span>}
      <span className="switch_control">
        <input
          {...props}
          id={id}
          type="checkbox"
          className="switch_input"
          role="switch"
          name={name}
          value={value}
          disabled={disabled}
          aria-label={!hasLabel ? ariaLabel : undefined}
          {...checkedProps}
          data-component="Switch"
        />
        <span className="switch_track" aria-hidden="true">
          <span className="switch_thumb" />
        </span>
      </span>
      {hasLabel && !labelEnd && <span className="switch_label">{content}</span>}
    </label>
  );
}

export default Switch;
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`<!--
  Switch 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSwitch', inheritAttrs: false });

// 켜짐 상태, 크기, 레이블 배치와 접근성 옵션을 prop으로 받습니다.
const props = defineProps({
  label: String, // 보이는 레이블 텍스트입니다.
  checked: Boolean, // 제어 컴포넌트의 켜짐 상태입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd: Boolean, // 레이블을 스위치보다 앞에 배치합니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 트랙과 레이블 크기입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => Boolean(props.label || slots.default)); // 보이는 레이블이 있는지 여부입니다.

// 크기·레이블 배치와 사용자 클래스를 조합합니다.
const rootClass = computed(() =>
  [
    'switch', // 스위치 루트 필수 클래스입니다.
    props.labelEnd && 'switch_label-end', // 레이블 우선 배치 변형입니다.
    props.size === 'sm' && 'switch_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'switch_lg', // 큰 크기 변형입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- 레이블·트랙·손잡이를 하나의 label로 묶어 스위치 UI를 구성합니다. -->
  <label
    :class="rootClass"
    :aria-label="!hasLabel ? ariaLabel : undefined"
    :data-ripple="ripple ? 'true' : 'false'"
  >
    <span v-if="hasLabel && labelEnd" class="switch_label"
      ><slot>{{ label }}</slot></span
    >
    <span class="switch_control">
      <input
        v-bind="inputAttrs"
        type="checkbox"
        class="switch_input"
        role="switch"
        :checked="checked"
        :disabled="disabled"
        :aria-label="!hasLabel ? ariaLabel : undefined"
        data-component="Switch"
      />
      <span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span>
    </span>
    <span v-if="hasLabel && !labelEnd" class="switch_label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>
`})))()}var xt;function St(){return(St=e((()=>{xt=`<!-- Slider 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- slider_fit·slider_stepper로 너비 제한과 증감 버튼 모드를 켭니다. -->
<div class="slider slider_fit slider_stepper" data-component="Slider" data-ripple="true">
  <!-- 레이블과 현재 값을 헤더에 배치합니다. -->
  <div class="slider_header">
    <label class="slider_label" for="slider-example">볼륨</label>
    <output class="slider_value" for="slider-example">50%</output>
  </div>
  <!-- 감소 버튼, 네이티브 range, 증가 버튼을 하나의 컨트롤로 묶습니다. -->
  <div class="slider_control">
    <button
      class="slider_step slider_step-decrease"
      type="button"
      data-ripple="true"
      aria-label="값 줄이기"
    >
      <svg
        class="slider_step-icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 12h14" />
      </svg>
    </button>
    <input
      id="slider-example"
      class="slider_input"
      type="range"
      min="0"
      max="100"
      step="1"
      value="50"
      data-slider-suffix="%"
    />
    <button
      class="slider_step slider_step-increase"
      type="button"
      data-ripple="true"
      aria-label="값 늘리기"
    >
      <svg
        class="slider_step-icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </button>
  </div>
</div>
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`{# Slider 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# 크기·fit·스테퍼 클래스를 조합하고 헤더·range·증감 버튼을 구성합니다. #}
{% set sliderId = sliderId | default('slider-example') %}
{% set sliderValue = sliderValue | default(50) %}
{% set sliderMin = sliderMin | default(0) %}
{% set sliderMax = sliderMax | default(100) %}
{% set sliderStep = sliderStep | default(1) %}
<div
  class="slider{% if size and size != 'md' %} slider_{{ size }}{% endif %}{% if fit %} slider_fit{% endif %}{% if block %} slider_block{% endif %}{% if stepper %} slider_stepper{% endif %}{% if stepperAlways %} slider_stepper_always{% endif %}{% if color %} color_{{ color }}{% endif %}"
  data-component="Slider"
  data-ripple="true"
>
  {# 레이블과 현재 값을 헤더에 배치합니다. #}
  {% if label or showValue %}
  <div class="slider_header">
    {% if label %}<label class="slider_label" for="{{ sliderId }}"
      >{{ label }}</label
    >{% endif %}{% if showValue %}<output
      class="slider_value"
      for="{{ sliderId }}"
      >{{ sliderValue }}{{ valueSuffix | default('') }}</output
    >{% endif %}
  </div>
  {% endif %}
  {# 스테퍼가 있으면 감소·range·증가 버튼을 한 컨트롤로 묶습니다. #}
  {% if stepper %}
  <div class="slider_control">
    <button
      class="slider_step slider_step-decrease"
      type="button"
      data-ripple="true"
      aria-label="{{ decreaseLabel | default('값 줄이기') }}"
    >
      −</button
    >{% endif %}
    <input
      id="{{ sliderId }}"
      class="slider_input"
      type="range"
      min="{{ sliderMin }}"
      max="{{ sliderMax }}"
      step="{{ sliderStep }}"
      value="{{ sliderValue }}"{% if valueSuffix %}
      data-slider-suffix="{{ valueSuffix }}"{% endif %}{% if disabled %}
      disabled{% endif %}{% if ariaLabel %}
      aria-label="{{ ariaLabel }}"{% endif %}
    />
    {% if stepper %}<button
      class="slider_step slider_step-increase"
      type="button"
      data-ripple="true"
      aria-label="{{ increaseLabel | default('값 늘리기') }}"
    >
      +
    </button>
  </div>
  {% endif %}
  {% if hint %}
  <p class="slider_hint">{{ hint }}</p>
  {% endif %}
</div>
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`/**
 * Slider 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.
const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value))); // 값을 min~max 범위로 제한합니다.

function StepIcon({ increase }) {
  // 증감 버튼에 사용하는 +/- 아이콘입니다.
  return (
    <svg
      className="slider_step-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      {increase && <path d="M12 5v14" />}
    </svg>
  );
}

export function Slider({
  min = 0, // 선택 가능한 최솟값입니다.
  max = 100, // 선택 가능한 최댓값입니다.
  value, // 제어 컴포넌트의 현재 값입니다.
  defaultValue = 50, // 비제어 컴포넌트의 초기 값입니다.
  step = 1, // 값의 증감 단위입니다.
  disabled = false, // 슬라이더를 비활성으로 만들어 조작을 막습니다.
  vertical = false, // 세로 방향 슬라이더로 표시합니다.
  label, // 슬라이더 위에 표시할 레이블입니다.
  showValue = false, // 현재 값을 헤더에 표시합니다.
  stepper = false, // 모바일에서 증감 버튼을 표시합니다.
  stepperAlways = false, // 증감 버튼을 항상 표시합니다.
  valueSuffix = '', // 현재 값 뒤에 붙는 단위입니다.
  hint, // 하단에 표시할 보조 설명입니다.
  decreaseLabel = '값 줄이기', // 감소 버튼의 접근 가능한 이름입니다.
  increaseLabel = '값 늘리기', // 증가 버튼의 접근 가능한 이름입니다.
  size = 'md', // 트랙·썸·값 텍스트 크기입니다.
  id, // range 입력에 연결할 id입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children, // 눈금 등 추가 콘텐츠입니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  onChange, // 값 변경 콜백입니다.
  style, // CSS 변수 등을 포함한 인라인 스타일입니다.
  ...props // aria-valuetext 등 나머지 range 속성을 전달합니다.
}) {
  // 식별자, 범위, 제어 상태와 진행률을 계산합니다.
  const generatedId = useId();
  const inputId = id || generatedId;
  const numericMin = Number(min);
  const numericMax = Number(max);
  const [innerValue, setInnerValue] = useState(() =>
    clamp(value ?? defaultValue, numericMin, numericMax),
  );
  const currentValue = clamp(innerValue, numericMin, numericMax); // 화면에 표시할 최종 값입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const progress =
    numericMax === numericMin ? 0 : ((currentValue - numericMin) / (numericMax - numericMin)) * 100; // 트랙 채움 비율입니다.

  // 외부 value가 바뀌면 내부 상태를 범위 안으로 동기화합니다.
  useEffect(() => {
    if (value !== undefined) setInnerValue(clamp(value, numericMin, numericMax));
  }, [value, numericMin, numericMax]);

  // 크기·방향·스테퍼 변형을 공통 클래스로 변환합니다.
  const classes = useMemo(
    () =>
      [
        'slider', // 슬라이더 루트 필수 클래스입니다.
        resolvedSize === 'sm' && 'slider_sm', // 작은 크기 변형입니다.
        resolvedSize === 'lg' && 'slider_lg', // 큰 크기 변형입니다.
        vertical && 'slider_vertical', // 세로 방향 변형입니다.
        stepper && 'slider_stepper', // 증감 버튼 표시 모드입니다.
        stepperAlways && 'slider_stepper_always', // 증감 버튼 상시 표시입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' '),
    [resolvedSize, vertical, stepper, stepperAlways, className],
  );

  // data 속성으로 전달된 값→문구 매핑을 파싱합니다.
  const valueMap = String(props['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((map, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) map[item.slice(0, separator)] = item.slice(separator + 1);
      return map;
    }, {});
  const valueText =
    valueMap[String(currentValue)] ??
    (props['data-slider-valuetext-suffix']
      ? \`\${currentValue} \${props['data-slider-valuetext-suffix']}\`
      : props['aria-valuetext']); // 스크린 리더용 값 설명입니다.

  function update(next) {
    // 범위를 보정한 뒤 내부 상태와 외부 콜백을 갱신합니다.
    const normalized = clamp(next, numericMin, numericMax);
    setInnerValue(normalized);
    onChange?.(normalized);
  }

  // 공통 네이티브 range 입력을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      id={inputId}
      type="range"
      className="slider_input"
      min={numericMin}
      max={numericMax}
      step={step}
      value={currentValue}
      disabled={disabled}
      aria-valuetext={valueText || undefined}
      onChange={(event) => update(event.target.value)}
    />
  );

  return (
    <div
      className={classes}
      data-component="Slider"
      data-ripple={ripple ? 'true' : undefined}
      style={{ '--slider-progress': \`\${progress}%\`, ...style }}
    >
      {/* 레이블과 현재 값을 헤더에 배치합니다. */}
      {(label || showValue) && (
        <div className="slider_header">
          {label && (
            <label className="slider_label" htmlFor={inputId}>
              {label}
            </label>
          )}
          {showValue && (
            <output className="slider_value" htmlFor={inputId}>
              {currentValue}
              {valueSuffix || props['data-slider-suffix'] || ''}
            </output>
          )}
        </div>
      )}
      {/* 스테퍼가 있으면 감소·range·증가 버튼을 한 컨트롤로 묶습니다. */}
      {stepper ? (
        <div className="slider_control">
          <button
            type="button"
            className="slider_step slider_step-decrease"
            data-ripple="true"
            aria-label={decreaseLabel}
            disabled={disabled || currentValue <= numericMin}
            onClick={() => update(currentValue - Number(step || 1))}
          >
            <StepIcon />
          </button>
          {input}
          <button
            type="button"
            className="slider_step slider_step-increase"
            data-ripple="true"
            aria-label={increaseLabel}
            disabled={disabled || currentValue >= numericMax}
            onClick={() => update(currentValue + Number(step || 1))}
          >
            <StepIcon increase />
          </button>
        </div>
      ) : (
        input
      )}
      {hint && <p className="slider_hint">{hint}</p>}
      {children}
    </div>
  );
}

export default Slider;
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`<!--
  Slider 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSlider', inheritAttrs: false });

// 범위, 스테퍼, 레이블과 크기 옵션을 하나의 Slider API로 제공합니다.
const props = defineProps({
  min: { type: Number, default: 0 }, // 선택 가능한 최솟값입니다.
  max: { type: Number, default: 100 }, // 선택 가능한 최댓값입니다.
  step: { type: Number, default: 1 }, // 값의 증감 단위입니다.
  modelValue: { type: Number, default: 50 }, // v-model 현재 값입니다.
  value: Number, // modelValue의 이전 호환 이름입니다.
  disabled: Boolean, // 슬라이더를 비활성으로 만들어 조작을 막습니다.
  vertical: Boolean, // 세로 방향 슬라이더로 표시합니다.
  label: String, // 슬라이더 위에 표시할 레이블입니다.
  showValue: Boolean, // 현재 값을 헤더에 표시합니다.
  stepper: Boolean, // 모바일에서 증감 버튼을 표시합니다.
  stepperAlways: Boolean, // 증감 버튼을 항상 표시합니다.
  valueSuffix: { type: String, default: '' }, // 현재 값 뒤에 붙는 단위입니다.
  hint: String, // 하단에 표시할 보조 설명입니다.
  decreaseLabel: { type: String, default: '값 줄이기' }, // 감소 버튼의 접근 가능한 이름입니다.
  increaseLabel: { type: String, default: '값 늘리기' }, // 증가 버튼의 접근 가능한 이름입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 트랙·썸·값 텍스트 크기입니다.
  id: String, // range 입력에 연결할 id입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const generatedId = \`slider-\${Math.random().toString(36).slice(2, 9)}\`;
const inputId = computed(() => props.id || generatedId);

// 제어 값과 진행률을 계산합니다.
const innerValue = ref(props.value ?? props.modelValue);
watch(
  () => [props.value, props.modelValue],
  ([value, modelValue]) => {
    innerValue.value = value ?? modelValue;
  },
);
const currentValue = computed(() =>
  Math.min(props.max, Math.max(props.min, Number(innerValue.value))),
); // 화면에 표시할 최종 값입니다.
const progress = computed(() =>
  props.max === props.min ? 0 : ((currentValue.value - props.min) / (props.max - props.min)) * 100,
); // 트랙 채움 비율입니다.

// 크기·방향·스테퍼 변형을 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'slider', // 슬라이더 루트 필수 클래스입니다.
    props.size === 'sm' && 'slider_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'slider_lg', // 큰 크기 변형입니다.
    props.vertical && 'slider_vertical', // 세로 방향 변형입니다.
    props.stepper && 'slider_stepper', // 증감 버튼 표시 모드입니다.
    props.stepperAlways && 'slider_stepper_always', // 증감 버튼 상시 표시입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class·style은 루트에만 두고 나머지 속성은 range로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

// data 속성으로 전달된 값→문구 매핑을 파싱합니다.
const valueText = computed(() => {
  const map = String(attrs['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((result, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) result[item.slice(0, separator)] = item.slice(separator + 1);
      return result;
    }, {});
  return (
    map[String(currentValue.value)] ??
    (attrs['data-slider-valuetext-suffix']
      ? \`\${currentValue.value} \${attrs['data-slider-valuetext-suffix']}\`
      : attrs['aria-valuetext'])
  );
});

function update(next) {
  // 범위를 보정한 뒤 v-model과 change 이벤트를 갱신합니다.
  innerValue.value = Math.min(props.max, Math.max(props.min, Number(next)));
  emit('update:modelValue', innerValue.value);
  emit('change', innerValue.value);
}
<\/script>

<template>
  <div
    :class="classes"
    data-component="Slider"
    :data-ripple="ripple ? 'true' : undefined"
    :style="[{ '--slider-progress': \`\${progress}%\` }, attrs.style]"
  >
    <!-- 레이블과 현재 값을 헤더에 배치합니다. -->
    <div v-if="label || showValue" class="slider_header">
      <label v-if="label" class="slider_label" :for="inputId">{{ label }}</label>
      <output v-if="showValue" class="slider_value" :for="inputId"
        >{{ currentValue }}{{ valueSuffix || attrs['data-slider-suffix'] || '' }}</output
      >
    </div>
    <!-- 스테퍼가 있으면 감소·range·증가 버튼을 한 컨트롤로 묶습니다. -->
    <div v-if="stepper" class="slider_control">
      <button
        type="button"
        class="slider_step slider_step-decrease"
        data-ripple="true"
        :aria-label="decreaseLabel"
        :disabled="disabled || currentValue <= min"
        @click="update(currentValue - step)"
      >
        <svg
          class="slider_step-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14" />
        </svg>
      </button>
      <input
        v-bind="inputAttrs"
        :id="inputId"
        type="range"
        class="slider_input"
        :min="min"
        :max="max"
        :step="step"
        :value="currentValue"
        :disabled="disabled"
        :aria-valuetext="valueText || undefined"
        @input="update($event.target.value)"
      />
      <button
        type="button"
        class="slider_step slider_step-increase"
        data-ripple="true"
        :aria-label="increaseLabel"
        :disabled="disabled || currentValue >= max"
        @click="update(currentValue + step)"
      >
        <svg
          class="slider_step-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </div>
    <input
      v-else
      v-bind="inputAttrs"
      :id="inputId"
      type="range"
      class="slider_input"
      :min="min"
      :max="max"
      :step="step"
      :value="currentValue"
      :disabled="disabled"
      :aria-valuetext="valueText || undefined"
      @input="update($event.target.value)"
    />
    <p v-if="hint" class="slider_hint">{{ hint }}</p>
    <slot />
  </div>
</template>
`})))()}var kt;function At(){return(At=e((()=>{kt=`<!-- Rate 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- rate_clearable fieldset에 범례·별 radio 그룹·초기화 버튼을 함께 둡니다. -->
<fieldset class="rate rate_clearable" data-component="Rate" data-ripple="true">
  <legend class="rate_legend">상품 만족도</legend>
  <!-- 같은 name의 radio로 1~5점을 선택하고 별 그래픽은 장식용입니다. -->
  <div class="rate_control">
    <div class="rate_stars">
      <label class="rate_star" data-ripple="true"
        ><input class="rate_input" type="radio" name="rate-example" value="1" /><span
          class="rate_star-graphic"
          aria-hidden="true"
          ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          ><svg
            class="rate_star-icon rate_star-icon-filled"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg></span
        ><span class="rate_star-label">1점</span></label
      >
      <label class="rate_star" data-ripple="true"
        ><input class="rate_input" type="radio" name="rate-example" value="2" /><span
          class="rate_star-graphic"
          aria-hidden="true"
          ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          ><svg
            class="rate_star-icon rate_star-icon-filled"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg></span
        ><span class="rate_star-label">2점</span></label
      >
      <label class="rate_star" data-ripple="true"
        ><input class="rate_input" type="radio" name="rate-example" value="3" checked /><span
          class="rate_star-graphic"
          aria-hidden="true"
          ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          ><svg
            class="rate_star-icon rate_star-icon-filled"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg></span
        ><span class="rate_star-label">3점</span></label
      >
      <label class="rate_star" data-ripple="true"
        ><input class="rate_input" type="radio" name="rate-example" value="4" /><span
          class="rate_star-graphic"
          aria-hidden="true"
          ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          ><svg
            class="rate_star-icon rate_star-icon-filled"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg></span
        ><span class="rate_star-label">4점</span></label
      >
      <label class="rate_star" data-ripple="true"
        ><input class="rate_input" type="radio" name="rate-example" value="5" /><span
          class="rate_star-graphic"
          aria-hidden="true"
          ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          ><svg
            class="rate_star-icon rate_star-icon-filled"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg></span
        ><span class="rate_star-label">5점</span></label
      >
    </div>
    <button class="rate_clear" type="button" data-ripple="true" aria-label="별점 초기화">
      <svg
        class="rate_clear-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
    <output class="rate_value">3점</output>
  </div>
</fieldset>
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`{# Rate 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# 크기·반별·초기화 클래스와 radio 별 그룹을 fieldset으로 구성합니다. #}
{% set rateCount = count | default(5) %}
{% set rateName = name | default('rate-example') %}
<fieldset
  class="rate{% if size and size != 'md' %} rate_{{ size }}{% endif %}{% if allowHalf %} rate_allow-half{% endif %}{% if clearable %} rate_clearable{% endif %}{% if color %} color_{{ color }}{% endif %}"
  data-component="Rate"
  data-ripple="true"{% if disabled %}
  disabled{% endif %}
>
  {% if legend %}
  <legend class="rate_legend">{{ legend }}</legend>
  {% endif %}
  {# 같은 name의 radio로 점수를 선택하고 별 그래픽은 장식용입니다. #}
  <div class="rate_control">
    <div class="rate_stars">
      {% for star in range(1, rateCount + 1) %}<label class="rate_star" data-ripple="true"
        >{% if allowHalf %}<input
          class="rate_input rate_input-half"
          type="radio"
          name="{{ rateName }}"
          value="{{ star - 0.5 }}"{% if value == star - 0.5 %}
          checked{% endif %}
        />{% endif %}<input
          class="rate_input"
          type="radio"
          name="{{ rateName }}"
          value="{{ star }}"{% if value == star %}
          checked{% endif %}
        /><span class="rate_star-graphic" aria-hidden="true"
          ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          ><svg
            class="rate_star-icon rate_star-icon-filled"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            /></svg
          >{% if allowHalf %}<span class="rate_star-icon-half"
            ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              /></svg></span
          >{% endif %}</span
        ><span class="rate_star-label">{{ star }}점</span></label
      >{% endfor %}
    </div>
    {% if clearable %}<button
      class="rate_clear"
      type="button"
      data-ripple="true"
      aria-label="별점 초기화"
    >
      ×</button
    >{% endif %}{% if value %}<output class="rate_value"
      >{{ value }}점</output
    >{% endif %}
  </div>
</fieldset>
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`/**
 * Rate 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.
const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'; // 별 아이콘 path입니다.

function StarGraphic({ half = false }) {
  // 빈 별·채움 별·반별 오버레이를 하나의 그래픽으로 구성합니다.
  return (
    <span className="rate_star-graphic" aria-hidden="true">
      <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      <svg className="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      {half && (
        <span className="rate_star-icon-half">
          <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d={STAR_PATH} />
          </svg>
        </span>
      )}
    </span>
  );
}

export function Rate({
  value, // 제어 컴포넌트의 현재 별점입니다.
  defaultValue, // 비제어 컴포넌트의 초기 별점입니다.
  count = 5, // 표시할 별의 개수입니다.
  allowHalf = false, // 0.5점 단위 선택을 허용합니다.
  clearable = false, // 선택 초기화 버튼을 표시합니다.
  readOnly = false, // 읽기 전용 표시 모드입니다.
  readonly = false, // readOnly의 이전 호환 이름입니다.
  disabled = false, // 선택을 비활성으로 만들어 조작을 막습니다.
  size = 'md', // 별과 값 텍스트 크기입니다.
  legend, // fieldset 범례 텍스트입니다.
  name, // radio 그룹 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  onChange, // 별점 선택 또는 초기화 콜백입니다.
  ...props // aria-label 등 나머지 루트 속성을 전달합니다.
}) {
  // 그룹 이름, 별 개수, 크기, 읽기 전용 여부와 현재 값을 준비합니다.
  const generatedName = useId();
  const groupName = name || generatedName;
  const resolvedCount = Number(count) > 0 ? Number(count) : 5; // 유효한 별 개수입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const isReadonly = readOnly || readonly; // 최종 읽기 전용 여부입니다.
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);
  const stars = useMemo(
    () => Array.from({ length: resolvedCount }, (_, index) => index + 1),
    [resolvedCount],
  );

  // 외부 value가 바뀌면 내부 선택 값을 동기화합니다.
  useEffect(() => {
    if (value !== undefined) setCurrentValue(value);
  }, [value]);

  // 크기·반별·초기화·읽기 전용 상태를 공통 클래스로 변환합니다.
  const classes = [
    'rate', // 별점 루트 필수 클래스입니다.
    resolvedSize === 'sm' && 'rate_sm', // 작은 크기 변형입니다.
    resolvedSize === 'lg' && 'rate_lg', // 큰 크기 변형입니다.
    allowHalf && 'rate_allow-half', // 반별 선택 변형입니다.
    clearable && 'rate_clearable', // 초기화 버튼 표시 모드입니다.
    isReadonly && 'is-readonly', // 읽기 전용 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' ');

  function update(next) {
    // 내부 상태와 외부 콜백을 함께 갱신합니다.
    setCurrentValue(next);
    onChange?.(next);
  }

  // 읽기 전용은 radio 없이 채움·반별 상태로만 표시합니다.
  if (isReadonly)
    return (
      <div
        {...props}
        className={classes}
        data-component="Rate"
        role="img"
        aria-label={props['aria-label'] || \`\${resolvedCount}점 만점 중 \${currentValue ?? 0}점\`}
      >
        <div className="rate_stars">
          {stars.map((star) => {
            const state =
              (currentValue ?? 0) >= star
                ? 'is-filled'
                : allowHalf && (currentValue ?? 0) >= star - 0.5
                  ? 'is-half'
                  : '';
            return (
              <span key={star} className={['rate_star-readonly', state].filter(Boolean).join(' ')}>
                <StarGraphic half={state === 'is-half'} />
              </span>
            );
          })}
        </div>
        {currentValue != null && <span className="rate_value">{currentValue}</span>}
      </div>
    );

  // 편집 가능 모드는 fieldset과 radio로 별점을 선택합니다.
  return (
    <fieldset
      {...props}
      className={classes}
      data-component="Rate"
      data-ripple={ripple ? 'true' : undefined}
      disabled={disabled}
    >
      {legend && <legend className="rate_legend">{legend}</legend>}
      <div className="rate_control">
        <div className="rate_stars">
          {stars.map((star) => (
            <label key={star} className="rate_star" data-ripple={ripple ? 'true' : undefined}>
              {/* 반별 허용 시 0.5점용 숨김 radio를 함께 둡니다. */}
              {allowHalf && (
                <input
                  type="radio"
                  className="rate_input rate_input-half"
                  name={groupName}
                  value={star - 0.5}
                  checked={currentValue === star - 0.5}
                  disabled={disabled}
                  onChange={() => update(star - 0.5)}
                />
              )}
              <input
                type="radio"
                className="rate_input"
                name={groupName}
                value={star}
                checked={currentValue === star}
                disabled={disabled}
                onChange={() => update(star)}
              />
              {/* 포인터로 왼쪽·오른쪽 반을 직접 고를 수 있는 히트 영역입니다. */}
              {allowHalf && (
                <>
                  <button
                    type="button"
                    className="rate_star-half rate_star-half-left"
                    tabIndex={-1}
                    aria-hidden="true"
                    disabled={disabled}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      update(star - 0.5);
                    }}
                  />
                  <button
                    type="button"
                    className="rate_star-half rate_star-half-right"
                    tabIndex={-1}
                    aria-hidden="true"
                    disabled={disabled}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      update(star);
                    }}
                  />
                </>
              )}
              <StarGraphic half={allowHalf} />
              <span className="rate_star-label">{star}점</span>
            </label>
          ))}
        </div>
        {clearable && (
          <button
            type="button"
            className="rate_clear"
            data-ripple={ripple ? 'true' : undefined}
            aria-label="별점 초기화"
            title="초기화"
            onClick={() => update(undefined)}
          >
            <svg
              className="rate_clear-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
        {currentValue != null && <output className="rate_value">{currentValue}점</output>}
      </div>
    </fieldset>
  );
}

export default Rate;
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`<!--
  Rate 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmRate', inheritAttrs: false });

// 별점 값, 개수, 반별·초기화·읽기 전용 옵션을 하나의 Rate API로 제공합니다.
const props = defineProps({
  modelValue: Number, // v-model 현재 별점입니다.
  value: Number, // modelValue의 이전 호환 이름입니다.
  count: { type: Number, default: 5 }, // 표시할 별의 개수입니다.
  allowHalf: Boolean, // 0.5점 단위 선택을 허용합니다.
  clearable: Boolean, // 선택 초기화 버튼을 표시합니다.
  readonly: Boolean, // 읽기 전용 표시 모드입니다.
  disabled: Boolean, // 선택을 비활성으로 만들어 조작을 막습니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 별과 값 텍스트 크기입니다.
  legend: String, // fieldset 범례 텍스트입니다.
  name: String, // radio 그룹 이름입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const groupName = props.name || \`rate-\${Math.random().toString(36).slice(2, 9)}\`;
const currentValue = ref(props.modelValue ?? props.value);

// 외부 값이 바뀌면 내부 선택 값을 동기화합니다.
watch(
  () => [props.modelValue, props.value],
  ([modelValue, value]) => {
    if (modelValue !== undefined || value !== undefined) currentValue.value = modelValue ?? value;
  },
);
const stars = computed(() =>
  Array.from({ length: Math.max(1, Number(props.count)) }, (_, index) => index + 1),
);

// 크기·반별·초기화·읽기 전용 상태를 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'rate', // 별점 루트 필수 클래스입니다.
    props.size === 'sm' && 'rate_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'rate_lg', // 큰 크기 변형입니다.
    props.allowHalf && 'rate_allow-half', // 반별 선택 변형입니다.
    props.clearable && 'rate_clearable', // 초기화 버튼 표시 모드입니다.
    props.readonly && 'is-readonly', // 읽기 전용 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 fieldset/div로 전달합니다.
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const starPath =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'; // 별 아이콘 path입니다.

function update(next) {
  // 내부 상태와 v-model·change 이벤트를 함께 갱신합니다.
  currentValue.value = next;
  emit('update:modelValue', next);
  emit('change', next);
}
function readonlyState(star) {
  // 읽기 전용 별의 채움·반별 상태를 계산합니다.
  return (currentValue.value ?? 0) >= star
    ? 'is-filled'
    : props.allowHalf && (currentValue.value ?? 0) >= star - 0.5
      ? 'is-half'
      : '';
}
<\/script>

<template>
  <!-- 읽기 전용은 radio 없이 채움·반별 상태로만 표시합니다. -->
  <div
    v-if="readonly"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Rate"
    role="img"
    :aria-label="attrs['aria-label'] || \`\${count}점 만점 중 \${currentValue ?? 0}점\`"
  >
    <div class="rate_stars">
      <span
        v-for="star in stars"
        :key="star"
        class="rate_star-readonly"
        :class="readonlyState(star)"
      >
        <span class="rate_star-graphic" aria-hidden="true">
          <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path :d="starPath" />
          </svg>
          <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
            <path :d="starPath" />
          </svg>
          <span v-if="readonlyState(star) === 'is-half'" class="rate_star-icon-half"
            ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" /></svg
          ></span>
        </span>
      </span>
    </div>
    <span v-if="currentValue != null" class="rate_value">{{ currentValue }}</span>
  </div>
  <!-- 편집 가능 모드는 fieldset과 radio로 별점을 선택합니다. -->
  <fieldset
    v-else
    v-bind="rootAttrs"
    :class="classes"
    data-component="Rate"
    :data-ripple="ripple ? 'true' : undefined"
    :disabled="disabled"
  >
    <legend v-if="legend" class="rate_legend">{{ legend }}</legend>
    <div class="rate_control">
      <div class="rate_stars">
        <label
          v-for="star in stars"
          :key="star"
          class="rate_star"
          :data-ripple="ripple ? 'true' : undefined"
        >
          <input
            v-if="allowHalf"
            type="radio"
            class="rate_input rate_input-half"
            :name="groupName"
            :value="star - 0.5"
            :checked="currentValue === star - 0.5"
            :disabled="disabled"
            @change="update(star - 0.5)"
          />
          <input
            type="radio"
            class="rate_input"
            :name="groupName"
            :value="star"
            :checked="currentValue === star"
            :disabled="disabled"
            @change="update(star)"
          />
          <template v-if="allowHalf">
            <button
              type="button"
              class="rate_star-half rate_star-half-left"
              tabindex="-1"
              aria-hidden="true"
              :disabled="disabled"
              @click.prevent.stop="update(star - 0.5)"
            />
            <button
              type="button"
              class="rate_star-half rate_star-half-right"
              tabindex="-1"
              aria-hidden="true"
              :disabled="disabled"
              @click.prevent.stop="update(star)"
            />
          </template>
          <span class="rate_star-graphic" aria-hidden="true">
            <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" />
            </svg>
            <svg
              class="rate_star-icon rate_star-icon-filled"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="starPath" />
            </svg>
            <span v-if="allowHalf" class="rate_star-icon-half"
              ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path :d="starPath" /></svg
            ></span>
          </span>
          <span class="rate_star-label">{{ star }}점</span>
        </label>
      </div>
      <button
        v-if="clearable"
        type="button"
        class="rate_clear"
        :data-ripple="ripple ? 'true' : undefined"
        aria-label="별점 초기화"
        title="초기화"
        @click="update(undefined)"
      >
        <svg
          class="rate_clear-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <output v-if="currentValue != null" class="rate_value">{{ currentValue }}점</output>
    </div>
  </fieldset>
</template>
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`<!-- Upload 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- data-max-size·data-max-files로 크기·개수 제한을 스크립트에 전달합니다. -->
<div class="upload upload_fit" data-component="Upload" data-max-size="5242880" data-max-files="3">
  <!-- 드롭존 label이 숨김 file input과 안내 문구를 연결합니다. -->
  <label class="upload_dropzone" for="upload-example" tabindex="0">
    <input
      id="upload-example"
      class="upload_input"
      type="file"
      tabindex="-1"
      accept="image/png,image/jpeg,.pdf"
      multiple
    />
    <span class="upload_dropzone-icon"
      ><svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4"></path></svg
    ></span>
    <span class="upload_dropzone-title">파일을 끌어다 놓거나 선택하세요</span>
    <span class="upload_dropzone-desc">PNG, JPG, PDF · 파일당 최대 5MB</span>
  </label>
  <p class="upload_hint">최대 3개까지 첨부할 수 있습니다.</p>
  <!-- 검증 오류와 선택 파일 목록을 위한 영역입니다. -->
  <p class="form_field-error" data-upload-error role="alert" hidden></p>
  <ul class="upload_list" data-upload-list></ul>
</div>
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`{# Upload 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# data-max-size·data-max-files와 변형별 트리거 UI를 구성합니다. #}
{% set uploadId = uploadId | default('upload-example') %}
{% set uploadVariant = variant | default('button') %}
<div
  class="upload{% if fit %} upload_fit{% endif %}{% if size and size != 'md' %} upload_{{ size }}{% endif %}{% if disabled %} is-disabled{% endif %}"
  data-component="Upload"{% if maxSize %}
  data-max-size="{{ maxSize }}"{% endif %}{% if maxFiles %}
  data-max-files="{{ maxFiles }}"{% endif %}
>
  {% if uploadVariant == 'drag' or uploadVariant == 'dropzone' %}
  {# 드롭존 label이 숨김 file input과 안내 문구를 연결합니다. #}
  <label
    class="upload_dropzone{% if error %} is-error{% endif %}"
    for="{{ uploadId }}"{% if not disabled %}
    tabindex="0"{% endif %}
    ><input
      id="{{ uploadId }}"
      class="upload_input"
      type="file"
      tabindex="-1"{% if accept %}
      accept="{{ accept }}"{% endif %}{% if multiple %}
      multiple{% endif %}{% if disabled %}
      disabled{% endif %}
    /><span class="upload_dropzone-icon"
      ><svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4"></path></svg></span
    ><span class="upload_dropzone-title">{{ title | default('파일을 끌어다 놓거나 선택하세요') }}</span
    >{% if description %}<span class="upload_dropzone-desc"
      >{{ description }}</span
    >{% endif %}</label
  >
  {% elseif uploadVariant == 'picture-card' or uploadVariant == 'cards' %}
  {# 사진 카드형 트리거와 추가 카드 영역을 구성합니다. #}
  <div class="upload_cards">
    <label
      class="upload_card upload_card-trigger"
      for="{{ uploadId }}"{% if not disabled %}
      tabindex="0"{% endif %}
      ><input
        id="{{ uploadId }}"
        class="upload_input"
        type="file"
        tabindex="-1"
        accept="{{ accept | default('image/*') }}"{% if multiple %}
        multiple{% endif %}{% if disabled %}
        disabled{% endif %}
      /><svg
        class="icon icon_lg"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M12 5v14M5 12h14"></path></svg
      ><span>{{ buttonLabel | default('업로드') }}</span></label
    >
  </div>
  {% elseif uploadVariant == 'avatar' %}
  <label
    class="upload_avatar"
    for="{{ uploadId }}"{% if not disabled %}
    tabindex="0"{% endif %}
    ><input
      id="{{ uploadId }}"
      class="upload_input"
      type="file"
      tabindex="-1"
      accept="{{ accept | default('image/*') }}"{% if disabled %}
      disabled{% endif %} /><span class="avatar avatar_xl"
      >{% if avatarSrc %}<img
        class="avatar_image"
        src="{{ avatarSrc }}"
        alt="{{ avatarAlt | default('프로필 사진') }}"
      />{% else %}<svg
        class="avatar_icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M4 21a8 8 0 0 1 16 0"></path></svg
      >{% endif %}</span
    ><span class="upload_avatar-overlay" aria-hidden="true"
      ><svg
        class="icon icon_lg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
        <path d="m16 6-4-4-4 4M12 2v13"></path></svg></span
  ></label>
  {% elseif uploadVariant != 'list' %}
  <label
    class="upload_trigger"
    for="{{ uploadId }}"{% if not disabled %}
    tabindex="0"{% endif %}
    ><input
      id="{{ uploadId }}"
      class="upload_input"
      type="file"
      tabindex="-1"{% if accept %}
      accept="{{ accept }}"{% endif %}{% if multiple %}
      multiple{% endif %}{% if disabled %}
      disabled{% endif %}
    /><span class="btn btn_filled color_primary"
      ><span class="btn_label">{{ buttonLabel | default('파일 선택') }}</span></span
    ></label
  >
  {% endif %}
  {% if hint %}
  <p class="upload_hint">{{ hint }}</p>
  {% endif %}
  <p class="form_field-error" data-upload-error role="alert" hidden></p>
  <ul class="upload_list" data-upload-list></ul>
</div>
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`/**
 * Upload 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useRef, useState } from 'react';

const cx = (...values) => values.filter(Boolean).join(' '); // 조건 클래스를 문자열로 합칩니다.
const formatSize = (bytes = 0) =>
  bytes < 1024
    ? \`\${bytes} B\`
    : bytes < 1048576
      ? \`\${(bytes / 1024).toFixed(1)} KB\`
      : \`\${(bytes / 1048576).toFixed(1)} MB\`; // 파일 크기를 읽기 쉬운 단위로 표시합니다.
const uploadIcon = (
  <svg
    className="icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" />
  </svg>
);
const fileIcon = (
  <svg
    className="icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2h8l4 4v16H6zM14 2v5h5" />
  </svg>
);
const plusIcon = (
  <svg
    className="icon icon_lg"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const userIcon = (
  <svg
    className="avatar_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);
const accepts = (file, accept) =>
  !accept ||
  accept.split(',').some((rule) => {
    // 확장자·MIME 와일드카드·정확한 MIME을 순서대로 검사합니다.
    const value = rule.trim();
    return value.startsWith('.')
      ? file.name.toLowerCase().endsWith(value.toLowerCase())
      : value.endsWith('/*')
        ? file.type.startsWith(value.slice(0, -1))
        : file.type === value;
  });
export const revokeUploadObjectUrls = (urls) => urls.forEach((url) => URL.revokeObjectURL(url)); // 생성한 object URL을 해제합니다.

export function Upload({
  id, // 루트 또는 입력에 사용할 id입니다.
  inputId, // 숨김 file input에 연결할 id입니다.
  variant = 'button', // button·drag·list·picture-card·avatar UI 유형입니다.
  size = 'md', // 업로드 영역 크기입니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  disabled = false, // 파일 선택을 비활성으로 만듭니다.
  error = false, // 검증 오류 상태를 표시합니다.
  dragover = false, // 드롭존의 드래그 오버 상태를 강제로 표시합니다.
  multiple = false, // 여러 파일 선택을 허용합니다.
  accept, // 허용할 파일 형식입니다.
  maxSize, // 바이트 단위 파일 크기 제한입니다.
  maxFiles, // 선택할 수 있는 최대 파일 개수입니다.
  files: controlledFiles, // 제어 컴포넌트의 파일 목록입니다.
  defaultFiles = [], // 비제어 컴포넌트의 초기 파일 목록입니다.
  onChange, // 선택 또는 삭제 후 호출되는 콜백입니다.
  onError, // 파일 검증 실패 시 호출되는 콜백입니다.
  buttonLabel = '파일 선택', // 기본 트리거 버튼 문구입니다.
  title = '파일을 끌어다 놓거나 선택하세요', // 드롭존 제목입니다.
  description, // 드롭존 보조 설명입니다.
  hint, // 버튼·드롭존 아래 도움말입니다.
  removeLabel = '파일 삭제', // 삭제 버튼의 접근 가능한 이름 접미사입니다.
  trigger, // 기본 트리거 대신 사용할 사용자 정의 콘텐츠입니다.
  cards, // picture-card 변형의 추가 카드 콘텐츠입니다.
  avatarSrc, // avatar 변형의 미리보기 이미지 주소입니다.
  avatarAlt = '프로필 사진', // avatar 이미지 대체 텍스트입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children, // 목록 앞·사이에 넣을 추가 콘텐츠입니다.
  ...props // 나머지 속성을 숨김 file input에 전달합니다.
}) {
  // 입력 id, 변형 별칭, 파일 상태와 object URL을 준비합니다.
  const generatedId = useId().replace(/:/g, '');
  const resolvedInputId = inputId || id || \`upload-\${generatedId}\`;
  const resolvedVariant = { dropzone: 'drag', cards: 'picture-card' }[variant] || variant; // 이전 별칭을 정규화합니다.
  const inputRef = useRef(null);
  const createdUrls = useRef(new Set());
  const [innerFiles, setInnerFiles] = useState(defaultFiles);
  const [message, setMessage] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const files = controlledFiles ?? innerFiles; // 최종 파일 목록입니다.

  // 언마운트 시 생성한 미리보기 URL을 모두 해제합니다.
  useEffect(() => () => revokeUploadObjectUrls(createdUrls.current), []);

  const update = (next) => {
    // 제어·비제어에 맞게 목록을 갱신하고 File 배열을 onChange로 전달합니다.
    if (controlledFiles === undefined) setInnerFiles(next);
    onChange?.(next.map((item) => item.file ?? item));
  };

  const addFiles = (list) => {
    // 형식·크기·개수를 검증한 뒤 미리보기 URL과 함께 목록에 추가합니다.
    if (disabled) return;
    const incoming = Array.from(list || []);
    const invalid = incoming.find(
      (file) => !accepts(file, accept) || (maxSize && file.size > maxSize),
    );
    if (invalid) {
      const nextMessage = !accepts(invalid, accept)
        ? \`\${invalid.name}: 허용되지 않는 파일 형식입니다.\`
        : \`\${invalid.name}: 파일 크기 제한을 초과했습니다.\`;
      setMessage(nextMessage);
      onError?.(nextMessage);
      return;
    }
    const limit = multiple ? maxFiles || Infinity : 1;
    const available = Math.max(0, limit - (multiple ? files.length : 0));
    if (!available || incoming.length > available) {
      const nextMessage = \`파일은 최대 \${limit}개까지 선택할 수 있습니다.\`;
      setMessage(nextMessage);
      onError?.(nextMessage);
      return;
    }
    const added = incoming.slice(0, available).map((file) => {
      const preview = file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
      if (preview) createdUrls.current.add(preview);
      return {
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        url: preview,
        status: 'done',
      };
    });
    setMessage('');
    update(multiple ? [...files, ...added] : added);
    if (inputRef.current) inputRef.current.value = '';
  };

  const remove = (index) => {
    // 해당 항목의 object URL을 정리한 뒤 목록에서 제거합니다.
    const item = files[index];
    if (item?.url && createdUrls.current.has(item.url)) {
      URL.revokeObjectURL(item.url);
      createdUrls.current.delete(item.url);
    }
    update(files.filter((_, itemIndex) => itemIndex !== index));
  };

  const openWithKeyboard = (event) => {
    // Enter·Space로 숨김 file input을 엽니다.
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      inputRef.current?.click();
    }
  };

  // 공통 숨김 file input을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      ref={inputRef}
      id={resolvedInputId}
      className="upload_input"
      type="file"
      tabIndex={-1}
      disabled={disabled}
      multiple={multiple}
      accept={accept}
      aria-invalid={error || undefined}
      onChange={(event) => addFiles(event.target.files)}
    />
  );

  // 너비·크기·비활성 클래스를 조합합니다.
  const classes = cx(
    'upload', // 업로드 루트 필수 클래스입니다.
    fit && 'upload_fit', // 제한 너비 변형입니다.
    size !== 'md' && \`upload_\${size}\`, // sm·lg 크기 변형입니다.
    disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  );

  // 변형별 트리거 UI를 구성합니다.
  const triggerNode =
    resolvedVariant === 'list' ? null : resolvedVariant === 'drag' ? (
      <label
        className={cx(
          'upload_dropzone',
          (dragover || dragActive) && 'is-dragover',
          (error || message) && 'is-error',
        )}
        htmlFor={resolvedInputId}
        tabIndex={disabled ? undefined : 0}
        onKeyDown={openWithKeyboard}
        onDragEnter={(event) => {
          event.preventDefault();
          if (!disabled) setDragActive(true);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setDragActive(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragActive(false);
          addFiles(event.dataTransfer.files);
        }}
      >
        {input}
        {trigger ?? (
          <>
            <span className="upload_dropzone-icon">{uploadIcon}</span>
            <span className="upload_dropzone-title">{title}</span>
            {description && <span className="upload_dropzone-desc">{description}</span>}
          </>
        )}
      </label>
    ) : resolvedVariant === 'picture-card' ? (
      <div className="upload_cards">
        {cards}
        {files.map((item, index) => (
          <div className="upload_card" key={\`\${item.name}-\${index}\`}>
            {item.url ? (
              <img className="upload_card-image" src={item.url} alt={item.name} />
            ) : (
              <span className="upload_item-icon">{fileIcon}</span>
            )}
            <div className="upload_card-actions">
              <button
                type="button"
                className="btn btn_ghost btn_icon-only btn_sm"
                aria-label={\`\${item.name} \${removeLabel}\`}
                onClick={() => remove(index)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
        <label
          className="upload_card upload_card-trigger"
          htmlFor={resolvedInputId}
          tabIndex={disabled ? undefined : 0}
          onKeyDown={openWithKeyboard}
        >
          {input}
          {trigger ?? (
            <>
              {plusIcon}
              <span>{buttonLabel}</span>
            </>
          )}
        </label>
      </div>
    ) : resolvedVariant === 'avatar' ? (
      <label
        className="upload_avatar"
        htmlFor={resolvedInputId}
        tabIndex={disabled ? undefined : 0}
        onKeyDown={openWithKeyboard}
      >
        {input}
        {trigger ?? (
          <span className="avatar avatar_xl">
            {avatarSrc ? (
              <img className="avatar_image" src={avatarSrc} alt={avatarAlt} />
            ) : (
              userIcon
            )}
          </span>
        )}
        <span className="upload_avatar-overlay" aria-hidden="true">
          {uploadIcon}
        </span>
      </label>
    ) : (
      <label
        className="upload_trigger"
        htmlFor={resolvedInputId}
        tabIndex={disabled ? undefined : 0}
        onKeyDown={openWithKeyboard}
      >
        {input}
        {trigger ?? (
          <span className="btn btn_filled color_primary">
            <span className="btn_label">{buttonLabel}</span>
          </span>
        )}
      </label>
    );

  // picture-card·avatar를 제외한 변형은 선택 파일 목록을 따로 표시합니다.
  const listNode =
    files.length > 0 && resolvedVariant !== 'picture-card' && resolvedVariant !== 'avatar' ? (
      <ul className="upload_list">
        {files.map((item, index) => (
          <li
            className={cx(
              'upload_item',
              item.status === 'error' && 'is-error',
              item.status !== 'uploading' && 'is-done',
            )}
            key={\`\${item.name}-\${index}\`}
          >
            <span className="upload_item-icon">{fileIcon}</span>
            <span className="upload_item-body">
              <span className="upload_item-name">{item.name}</span>
              <span className="upload_item-meta">
                {item.status === 'error'
                  ? item.error || '업로드 실패'
                  : \`\${formatSize(item.size)} · 선택 완료\`}
              </span>
              {item.status === 'uploading' && (
                <span
                  className="upload_progress"
                  role="progressbar"
                  aria-valuenow={item.progress || 0}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={\`\${item.name} 업로드 진행률\`}
                >
                  <span
                    className="upload_progress-bar"
                    style={{ width: \`\${item.progress || 0}%\` }}
                  />
                </span>
              )}
            </span>
            <button
              type="button"
              className="upload_item-action btn btn_ghost btn_icon-only btn_sm"
              aria-label={\`\${item.name} \${removeLabel}\`}
              onClick={() => remove(index)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <div className={classes} data-component="Upload">
      {triggerNode}
      {(resolvedVariant === 'button' || resolvedVariant === 'drag') && hint && (
        <p className="upload_hint">{hint}</p>
      )}
      {message && (
        <p className="form_field-error" role="alert">
          {message}
        </p>
      )}
      {children}
      {listNode}
    </div>
  );
}

export default Upload;
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`<!--
  Upload 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, onBeforeUnmount, ref, useAttrs, useId } from 'vue';
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmUpload', inheritAttrs: false });

// 변형, 파일 목록, 검증과 트리거 문구를 하나의 Upload API로 제공합니다.
const props = defineProps({
  modelValue: { type: Array, default: undefined }, // v-model 파일 목록입니다.
  defaultFiles: { type: Array, default: () => [] }, // 비제어 초기 파일 목록입니다.
  variant: { type: String, default: 'button' }, // button·drag·list·picture-card·avatar UI 유형입니다.
  size: { type: String, default: 'md' }, // 업로드 영역 크기입니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  disabled: Boolean, // 파일 선택을 비활성으로 만듭니다.
  error: Boolean, // 검증 오류 상태를 표시합니다.
  dragover: Boolean, // 드롭존의 드래그 오버 상태를 강제로 표시합니다.
  multiple: Boolean, // 여러 파일 선택을 허용합니다.
  accept: String, // 허용할 파일 형식입니다.
  maxSize: Number, // 바이트 단위 파일 크기 제한입니다.
  maxFiles: Number, // 선택할 수 있는 최대 파일 개수입니다.
  inputId: String, // 숨김 file input에 연결할 id입니다.
  buttonLabel: { type: String, default: '파일 선택' }, // 기본 트리거 버튼 문구입니다.
  title: { type: String, default: '파일을 끌어다 놓거나 선택하세요' }, // 드롭존 제목입니다.
  description: String, // 드롭존 보조 설명입니다.
  hint: String, // 버튼·드롭존 아래 도움말입니다.
  removeLabel: { type: String, default: '파일 삭제' }, // 삭제 버튼의 접근 가능한 이름 접미사입니다.
  avatarSrc: String, // avatar 변형의 미리보기 이미지 주소입니다.
  avatarAlt: { type: String, default: '프로필 사진' }, // avatar 이미지 대체 텍스트입니다.
});
const emit = defineEmits(['update:modelValue', 'change', 'error']);
const attrs = useAttrs();
const input = ref(null);
const innerFiles = ref([...props.defaultFiles]);
const message = ref('');
const dragActive = ref(false);
const urls = new Set(); // 생성한 미리보기 object URL입니다.
const generatedId = useId().replace(/:/g, '');
const resolvedInputId = computed(() => props.inputId || attrs.id || \`upload-\${generatedId}\`);
const resolvedVariant = computed(
  () => ({ dropzone: 'drag', cards: 'picture-card' })[props.variant] || props.variant,
); // 이전 별칭을 정규화합니다.
const items = computed(() => props.modelValue ?? innerFiles.value); // 최종 파일 목록입니다.

// 너비·크기·비활성 클래스를 조합합니다.
const classes = computed(() =>
  [
    'upload', // 업로드 루트 필수 클래스입니다.
    props.fit && 'upload_fit', // 제한 너비 변형입니다.
    props.size !== 'md' && \`upload_\${props.size}\`, // sm·lg 크기 변형입니다.
    props.disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// id·class는 루트/입력에만 쓰고 나머지 속성은 file input으로 전달합니다.
const inputAttrs = computed(() => {
  const { id: _id, class: _class, ...rest } = attrs;
  return rest;
});
const formatSize = (bytes = 0) =>
  bytes < 1024
    ? \`\${bytes} B\`
    : bytes < 1048576
      ? \`\${(bytes / 1024).toFixed(1)} KB\`
      : \`\${(bytes / 1048576).toFixed(1)} MB\`; // 파일 크기를 읽기 쉬운 단위로 표시합니다.
const accepts = (file) =>
  !props.accept ||
  props.accept.split(',').some((rule) => {
    // 확장자·MIME 와일드카드·정확한 MIME을 순서대로 검사합니다.
    const value = rule.trim();
    return value.startsWith('.')
      ? file.name.toLowerCase().endsWith(value.toLowerCase())
      : value.endsWith('/*')
        ? file.type.startsWith(value.slice(0, -1))
        : file.type === value;
  });

function update(next) {
  // 제어·비제어에 맞게 목록을 갱신하고 File 배열을 change로 전달합니다.
  if (props.modelValue === undefined) innerFiles.value = next;
  emit('update:modelValue', next);
  emit(
    'change',
    next.map((item) => item.file ?? item),
  );
}
function fail(text) {
  message.value = text;
  emit('error', text);
}
function addFiles(list) {
  // 형식·크기·개수를 검증한 뒤 미리보기 URL과 함께 목록에 추가합니다.
  if (props.disabled) return;
  const incoming = Array.from(list || []);
  const invalid = incoming.find(
    (file) => !accepts(file) || (props.maxSize && file.size > props.maxSize),
  );
  if (invalid) {
    fail(
      !accepts(invalid)
        ? \`\${invalid.name}: 허용되지 않는 파일 형식입니다.\`
        : \`\${invalid.name}: 파일 크기 제한을 초과했습니다.\`,
    );
    return;
  }
  const limit = props.multiple ? props.maxFiles || Infinity : 1;
  const available = Math.max(0, limit - (props.multiple ? items.value.length : 0));
  if (!available || incoming.length > available) {
    fail(\`파일은 최대 \${limit}개까지 선택할 수 있습니다.\`);
    return;
  }
  const added = incoming.slice(0, available).map((file) => {
    const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
    if (url) urls.add(url);
    return { file, name: file.name, size: file.size, type: file.type, url, status: 'done' };
  });
  message.value = '';
  update(props.multiple ? [...items.value, ...added] : added);
  if (input.value) input.value.value = '';
}
function remove(index) {
  // 해당 항목의 object URL을 정리한 뒤 목록에서 제거합니다.
  const item = items.value[index];
  if (item?.url && urls.has(item.url)) {
    URL.revokeObjectURL(item.url);
    urls.delete(item.url);
  }
  update(items.value.filter((_, itemIndex) => itemIndex !== index));
}
function leave(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) dragActive.value = false;
}
function openWithKeyboard(event) {
  // Enter·Space로 숨김 file input을 엽니다.
  if (!props.disabled && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    input.value?.click();
  }
}
onBeforeUnmount(() => urls.forEach((url) => URL.revokeObjectURL(url)));
<\/script>

<template>
  <div :class="classes" data-component="Upload">
    <!-- 변형별 트리거: drag 드롭존 -->
    <label
      v-if="resolvedVariant === 'drag'"
      class="upload_dropzone"
      :class="{ 'is-dragover': dragover || dragActive, 'is-error': error || message }"
      :for="resolvedInputId"
      :tabindex="disabled ? undefined : 0"
      @keydown="openWithKeyboard"
      @dragenter.prevent="!disabled && (dragActive = true)"
      @dragover.prevent
      @dragleave="leave"
      @drop.prevent="
        dragActive = false;
        addFiles($event.dataTransfer.files);
      "
    >
      <input
        v-bind="inputAttrs"
        :id="resolvedInputId"
        ref="input"
        class="upload_input"
        type="file"
        tabindex="-1"
        :disabled="disabled"
        :multiple="multiple"
        :accept="accept"
        :aria-invalid="error || undefined"
        @change="addFiles($event.target.files)"
      />
      <slot name="trigger"
        ><span class="upload_dropzone-icon"
          ><svg
            class="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" /></svg></span
        ><span class="upload_dropzone-title">{{ title }}</span
        ><span v-if="description" class="upload_dropzone-desc">{{ description }}</span></slot
      >
    </label>
    <div v-else-if="resolvedVariant === 'picture-card'" class="upload_cards">
      <slot name="cards" />
      <div v-for="(item, index) in items" :key="\`\${item.name}-\${index}\`" class="upload_card">
        <img v-if="item.url" class="upload_card-image" :src="item.url" :alt="item.name" /><span
          v-else
          class="upload_item-icon"
          >파일</span
        >
        <div class="upload_card-actions">
          <button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            :aria-label="\`\${item.name} \${removeLabel}\`"
            @click="remove(index)"
          >
            ×
          </button>
        </div>
      </div>
      <label
        class="upload_card upload_card-trigger"
        :for="resolvedInputId"
        :tabindex="disabled ? undefined : 0"
        @keydown="openWithKeyboard"
        ><input
          v-bind="inputAttrs"
          :id="resolvedInputId"
          ref="input"
          class="upload_input"
          type="file"
          tabindex="-1"
          :disabled="disabled"
          :multiple="multiple"
          :accept="accept"
          :aria-invalid="error || undefined"
          @change="addFiles($event.target.files)"
        /><slot name="trigger"
          ><svg
            class="icon icon_lg"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 5v14M5 12h14" /></svg
          ><span>{{ buttonLabel }}</span></slot
        ></label
      >
    </div>
    <label
      v-else-if="resolvedVariant === 'avatar'"
      class="upload_avatar"
      :for="resolvedInputId"
      :tabindex="disabled ? undefined : 0"
      @keydown="openWithKeyboard"
      ><input
        v-bind="inputAttrs"
        :id="resolvedInputId"
        ref="input"
        class="upload_input"
        type="file"
        tabindex="-1"
        :disabled="disabled"
        :accept="accept || 'image/*'"
        :aria-invalid="error || undefined"
        @change="addFiles($event.target.files)" /><slot name="trigger"
        ><span class="avatar avatar_xl"
          ><img v-if="avatarSrc" class="avatar_image" :src="avatarSrc" :alt="avatarAlt" /><svg
            v-else
            class="avatar_icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" /></svg></span></slot
      ><span class="upload_avatar-overlay" aria-hidden="true"
        ><svg
          class="icon icon_lg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="m16 6-4-4-4 4M12 2v13" /></svg></span
    ></label>
    <label
      v-else-if="resolvedVariant !== 'list'"
      class="upload_trigger"
      :for="resolvedInputId"
      :tabindex="disabled ? undefined : 0"
      @keydown="openWithKeyboard"
      ><input
        v-bind="inputAttrs"
        :id="resolvedInputId"
        ref="input"
        class="upload_input"
        type="file"
        tabindex="-1"
        :disabled="disabled"
        :multiple="multiple"
        :accept="accept"
        :aria-invalid="error || undefined"
        @change="addFiles($event.target.files)"
      /><slot name="trigger"
        ><span class="btn btn_filled color_primary"
          ><span class="btn_label">{{ buttonLabel }}</span></span
        ></slot
      ></label
    >
    <p
      v-if="(resolvedVariant === 'button' || resolvedVariant === 'drag') && hint"
      class="upload_hint"
    >
      {{ hint }}
    </p>
    <p v-if="message" class="form_field-error" role="alert">{{ message }}</p>
    <slot />
    <ul
      v-if="resolvedVariant !== 'picture-card' && resolvedVariant !== 'avatar' && items.length"
      class="upload_list"
    >
      <li
        v-for="(item, index) in items"
        :key="\`\${item.name}-\${index}\`"
        class="upload_item"
        :class="{ 'is-error': item.status === 'error', 'is-done': item.status !== 'uploading' }"
      >
        <span class="upload_item-icon">파일</span
        ><span class="upload_item-body"
          ><span class="upload_item-name">{{ item.name }}</span
          ><span class="upload_item-meta">{{
            item.status === 'error'
              ? item.error || '업로드 실패'
              : \`\${formatSize(item.size)} · 선택 완료\`
          }}</span
          ><span
            v-if="item.status === 'uploading'"
            class="upload_progress"
            role="progressbar"
            :aria-valuenow="item.progress || 0"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="\`\${item.name} 업로드 진행률\`"
            ><span
              class="upload_progress-bar"
              :style="{ width: \`\${item.progress || 0}%\` }" /></span></span
        ><button
          type="button"
          class="upload_item-action btn btn_ghost btn_icon-only btn_sm"
          :aria-label="\`\${item.name} \${removeLabel}\`"
          @click="remove(index)"
        >
          ×
        </button>
      </li>
    </ul>
  </div>
</template>
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`<!-- DatePicker 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- data-value로 초기 YYYY-MM-DD를 두고 fit 너비 변형을 적용합니다. -->
<div class="date_picker date_picker_fit" data-component="DatePicker" data-value="2024-06-15">
  <!-- 읽기 전용 트리거 입력과 지우기·달력 버튼을 묶습니다. -->
  <div class="date_picker_trigger">
    <input
      id="date-picker-example"
      class="date_picker_input"
      value="2024. 06. 15."
      placeholder="날짜를 선택하세요"
      readonly
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="date-picker-example-panel"
    />
    <button class="date_picker_clear" type="button" aria-label="날짜 지우기">
      <svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18"></path>
      </svg>
    </button>
    <button
      class="date_picker_btn"
      type="button"
      aria-label="달력 열기"
      aria-controls="date-picker-example-panel"
      aria-expanded="false"
    >
      <svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
        <path d="M16 3v4M8 3v4M3 10h18"></path>
      </svg>
    </button>
  </div>
  <!-- 달력 패널은 dialog 역할로 열리며 스크립트가 내용을 채웁니다. -->
  <div
    id="date-picker-example-panel"
    class="date_picker_panel"
    role="dialog"
    aria-modal="false"
    aria-label="날짜 선택"
    hidden
  ></div>
</div>
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`{# DatePicker 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# data-value·min·max와 크기·상태 클래스를 루트에 두고 트리거·패널을 구성합니다. #}
{% set datePickerId = datePickerId | default('date-picker-example') %}
<div
  class="date_picker{% if size and size != 'md' %} date_picker_{{ size }}{% endif %}{% if fit %} date_picker_fit{% endif %}{% if block %} date_picker_block{% endif %}{% if disabled %} is-disabled{% endif %}{% if error %} is-error{% endif %}{% if success %} is-success{% endif %}"
  data-component="DatePicker"{% if value %}
  data-value="{{ value }}"{% endif %}{% if min %}
  data-min="{{ min }}"{% endif %}{% if max %}
  data-max="{{ max }}"{% endif %}
>
  {# 읽기 전용 트리거 입력과 지우기·달력 버튼을 묶습니다. #}
  <div class="date_picker_trigger">
    <input
      id="{{ datePickerId }}"
      class="date_picker_input"
      placeholder="{{ placeholder | default('날짜를 선택하세요') }}"
      readonly
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="{{ datePickerId }}-panel"{% if disabled %}
      disabled{% endif %}{% if required %}
      required{% endif %}{% if error %}
      aria-invalid="true"{% endif %}
    />
    {% if clearable != false %}<button
      class="date_picker_clear"
      type="button"
      aria-label="날짜 지우기"{% if not value %}
      hidden{% endif %}
    >
      <svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18"></path>
      </svg></button
    >{% endif %}
    <button
      class="date_picker_btn"
      type="button"
      aria-label="달력 열기"
      aria-controls="{{ datePickerId }}-panel"
      aria-expanded="false"{% if disabled %}
      disabled{% endif %}
    >
      <svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
        <path d="M16 3v4M8 3v4M3 10h18"></path>
      </svg>
    </button>
  </div>
  {# 달력 패널은 dialog 역할로 열리며 스크립트가 내용을 채웁니다. #}
  <div
    id="{{ datePickerId }}-panel"
    class="date_picker_panel{% if panelAlign == 'end' %} date_picker_panel-end{% endif %}"
    role="dialog"
    aria-modal="false"
    aria-label="날짜 선택"
    hidden
  ></div>
</div>
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`/**
 * DatePicker 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']; // 달력 요일 헤더입니다.
const cx = (...values) => values.filter(Boolean).join(' '); // 조건 클래스를 문자열로 합칩니다.
const pad = (value) => String(value).padStart(2, '0'); // 월·일을 두 자리로 맞춥니다.
const toValue = (date) =>
  date ? \`\${date.getFullYear()}-\${pad(date.getMonth() + 1)}-\${pad(date.getDate())}\` : ''; // Date를 YYYY-MM-DD로 변환합니다.
const parseValue = (value) =>
  /^\\d{4}-\\d{2}-\\d{2}$/.test(value || '') ? new Date(\`\${value}T00:00:00\`) : null; // 문자열 값을 Date로 파싱합니다.
const formatValue = (value, locale) => {
  // 로케일에 맞는 표시용 날짜 문자열을 만듭니다.
  const date = parseValue(value);
  return date
    ? new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(
        date,
      )
    : '';
};
function getCells(month) {
  // 해당 월 달력에 표시할 42칸(6주) 셀을 생성합니다.
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, value: toValue(date), other: date.getMonth() !== month.getMonth() };
  });
}

export function DatePicker({
  id, // 트리거 입력에 연결할 id입니다.
  value, // 제어 컴포넌트의 YYYY-MM-DD 값입니다.
  defaultValue = '', // 비제어 컴포넌트의 초기 값입니다.
  onChange, // 날짜 값이 바뀔 때 호출되는 콜백입니다.
  placeholder = '날짜를 선택하세요', // 값이 없을 때 표시할 안내입니다.
  locale = 'ko-KR', // 표시용 날짜 포맷 로케일입니다.
  size = 'md', // 트리거 높이와 글자 크기입니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  block = false, // 부모 너비에 맞게 전체 너비로 확장합니다.
  disabled = false, // 날짜 선택을 비활성으로 만듭니다.
  error = false, // 검증 오류 상태를 표시합니다.
  success = false, // 성공 상태를 표시합니다.
  clearable = true, // 선택한 날짜를 지우는 동작을 표시합니다.
  min, // 선택할 수 있는 최소 YYYY-MM-DD입니다.
  max, // 선택할 수 있는 최대 YYYY-MM-DD입니다.
  name, // 폼 제출용 hidden input의 name입니다.
  required, // 필수 입력 여부를 네이티브에 전달합니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  panelAlign = 'start', // 달력 패널의 정렬 방향입니다.
  ariaLabel = '날짜 선택', // 트리거와 패널의 접근 가능한 이름입니다.
  ...props // 나머지 속성을 트리거 입력에 전달합니다.
}) {
  // 식별자, 제어 상태, 패널 열림과 표시 월을 준비합니다.
  const generatedId = useId().replace(/:/g, '');
  const inputId = id || \`date-picker-\${generatedId}\`;
  const panelId = \`\${inputId}-panel\`;
  const controlled = value !== undefined; // 외부 value로 제어되는지 여부입니다.
  const [innerValue, setInnerValue] = useState(defaultValue);
  const selectedValue = controlled ? value : innerValue; // 최종 선택 값입니다.
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => parseValue(selectedValue) || new Date());
  const rootRef = useRef(null);
  const cells = useMemo(() => getCells(month), [month]);
  const today = toValue(new Date());

  // 선택 값이 바뀌면 달력 표시 월을 맞춥니다.
  useEffect(() => {
    const date = parseValue(selectedValue);
    if (date) setMonth(date);
  }, [selectedValue]);

  // 바깥 클릭 시 패널을 닫습니다.
  useEffect(() => {
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  // 패널이 열리면 선택일 또는 첫 가능 날짜로 포커스를 이동합니다.
  useEffect(() => {
    if (open)
      requestAnimationFrame(() =>
        rootRef.current
          ?.querySelector('.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)')
          ?.focus(),
      );
  }, [open]);

  const commit = (next) => {
    // 제어·비제어 상태에 맞게 값을 확정하고 콜백을 호출합니다.
    if (!controlled) setInnerValue(next);
    onChange?.(next);
  };
  const select = (next) => {
    // 날짜를 선택한 뒤 패널을 닫고 트리거로 포커스를 되돌립니다.
    commit(next);
    setOpen(false);
    requestAnimationFrame(() => rootRef.current?.querySelector('.date_picker_input')?.focus());
  };
  const moveMonth = (offset) =>
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));

  // 크기·너비·상태·열림 클래스를 조합합니다.
  const classes = cx(
    'date_picker', // 날짜 선택기 루트 필수 클래스입니다.
    size !== 'md' && \`date_picker_\${size}\`, // sm·lg 크기 변형입니다.
    fit && 'date_picker_fit', // 제한 너비 변형입니다.
    block && 'date_picker_block', // 전체 너비 변형입니다.
    disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    success && 'is-success', // 성공 상태 클래스입니다.
    open && 'is-open', // 패널 열림 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  );

  return (
    <div
      ref={rootRef}
      className={classes}
      data-component="DatePicker"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false);
      }}
    >
      {/* 읽기 전용 트리거 입력과 지우기·달력 버튼을 묶습니다. */}
      <div className="date_picker_trigger">
        <input
          {...props}
          id={inputId}
          className="date_picker_input"
          role="combobox"
          value={formatValue(selectedValue, locale)}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          required={required}
          aria-label={props['aria-label'] || ariaLabel}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={panelId}
          aria-invalid={error || undefined}
          onClick={() => !disabled && setOpen(true)}
        />
        {name ? <input type="hidden" name={name} value={selectedValue} /> : null}
        {clearable && selectedValue && !disabled ? (
          <button
            className="date_picker_clear"
            type="button"
            aria-label="날짜 지우기"
            onClick={() => commit('')}
          >
            <svg
              className="icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        ) : null}
        <button
          className="date_picker_btn"
          type="button"
          disabled={disabled}
          aria-label="달력 열기"
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <svg
            className="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
        </button>
      </div>
      {/* 달력 패널: 월 이동, 요일, 날짜 그리드, 오늘·초기화 액션입니다. */}
      <div
        id={panelId}
        className={cx('date_picker_panel', panelAlign === 'end' && 'date_picker_panel-end')}
        role="dialog"
        aria-modal="false"
        aria-label={ariaLabel}
        hidden={!open}
      >
        <div className="calendar calendar_borderless">
          <div className="calendar_header">
            <button
              type="button"
              className="btn btn_ghost btn_icon-only btn_sm"
              aria-label="이전 달"
              onClick={() => moveMonth(-1)}
            >
              ‹
            </button>
            <span className="calendar_title" aria-live="polite">
              {month.getFullYear()}년 {month.getMonth() + 1}월
            </span>
            <button
              type="button"
              className="btn btn_ghost btn_icon-only btn_sm"
              aria-label="다음 달"
              onClick={() => moveMonth(1)}
            >
              ›
            </button>
          </div>
          <div className="calendar_weekdays" aria-hidden="true">
            {WEEKDAYS.map((day) => (
              <span key={day} className="calendar_weekday">
                {day}
              </span>
            ))}
          </div>
          <div className="calendar_grid">
            {cells.map((cell) => {
              const unavailable = (min && cell.value < min) || (max && cell.value > max);
              return (
                <button
                  key={cell.value}
                  type="button"
                  className={cx(
                    'calendar_day',
                    cell.other && 'is-other-month',
                    cell.value === today && 'is-today',
                    cell.value === selectedValue && 'is-selected',
                  )}
                  disabled={unavailable}
                  aria-current={cell.value === today ? 'date' : undefined}
                  aria-pressed={cell.value === selectedValue || undefined}
                  aria-label={formatValue(cell.value, locale)}
                  onClick={() => select(cell.value)}
                >
                  {cell.date.getDate()}
                </button>
              );
            })}
          </div>
          <div className="calendar_footer">
            <button
              type="button"
              className="btn btn_text color_primary btn_sm"
              onClick={() => select(today)}
            >
              오늘
            </button>
            {clearable ? (
              <div className="calendar_footer-actions">
                <button type="button" className="btn btn_ghost btn_sm" onClick={() => commit('')}>
                  초기화
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`<!--
  DatePicker 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, useId, watch } from 'vue';
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDatePicker', inheritAttrs: false });

// 날짜 값, 크기, 범위, 상태와 패널 정렬을 하나의 DatePicker API로 제공합니다.
const props = defineProps({
  modelValue: { type: String, default: '' }, // v-model YYYY-MM-DD 값입니다.
  placeholder: { type: String, default: '날짜를 선택하세요' }, // 값이 없을 때 표시할 안내입니다.
  locale: { type: String, default: 'ko-KR' }, // 표시용 날짜 포맷 로케일입니다.
  size: { type: String, default: 'md' }, // 트리거 높이와 글자 크기입니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  block: Boolean, // 부모 너비에 맞게 전체 너비로 확장합니다.
  disabled: Boolean, // 날짜 선택을 비활성으로 만듭니다.
  error: Boolean, // 검증 오류 상태를 표시합니다.
  success: Boolean, // 성공 상태를 표시합니다.
  clearable: { type: Boolean, default: true }, // 선택한 날짜를 지우는 동작을 표시합니다.
  min: String, // 선택할 수 있는 최소 YYYY-MM-DD입니다.
  max: String, // 선택할 수 있는 최대 YYYY-MM-DD입니다.
  name: String, // 폼 제출용 hidden input의 name입니다.
  required: Boolean, // 필수 입력 여부를 네이티브에 전달합니다.
  panelAlign: { type: String, default: 'start' }, // 달력 패널의 정렬 방향입니다.
  ariaLabel: { type: String, default: '날짜 선택' }, // 트리거와 패널의 접근 가능한 이름입니다.
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const root = ref(null);
const open = ref(false);
const month = ref(new Date());
const weekdays = ['일', '월', '화', '수', '목', '금', '토']; // 달력 요일 헤더입니다.
const pad = (value) => String(value).padStart(2, '0'); // 월·일을 두 자리로 맞춥니다.
const toValue = (date) =>
  \`\${date.getFullYear()}-\${pad(date.getMonth() + 1)}-\${pad(date.getDate())}\`; // Date를 YYYY-MM-DD로 변환합니다.
const parseValue = (value) =>
  /^\\d{4}-\\d{2}-\\d{2}$/.test(value || '') ? new Date(\`\${value}T00:00:00\`) : null; // 문자열 값을 Date로 파싱합니다.
const formatValue = (value) => {
  // 로케일에 맞는 표시용 날짜 문자열을 만듭니다.
  const date = parseValue(value);
  return date
    ? new Intl.DateTimeFormat(props.locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(date)
    : '';
};
const generatedId = useId().replace(/:/g, '');
const inputId = computed(() => attrs.id || \`date-picker-\${generatedId}\`);
const panelId = computed(() => \`\${inputId.value}-panel\`);

// 크기·너비·상태·열림 클래스를 조합합니다.
const classes = computed(() =>
  [
    'date_picker', // 날짜 선택기 루트 필수 클래스입니다.
    props.size !== 'md' && \`date_picker_\${props.size}\`, // sm·lg 크기 변형입니다.
    props.fit && 'date_picker_fit', // 제한 너비 변형입니다.
    props.block && 'date_picker_block', // 전체 너비 변형입니다.
    props.disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    props.error && 'is-error', // 오류 상태 클래스입니다.
    props.success && 'is-success', // 성공 상태 클래스입니다.
    open.value && 'is-open', // 패널 열림 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// id·class는 루트/입력에만 쓰고 나머지 속성은 트리거 입력으로 전달합니다.
const inputAttrs = computed(() => {
  const { id: _id, class: _class, ...rest } = attrs;
  return rest;
});
const title = computed(() => \`\${month.value.getFullYear()}년 \${month.value.getMonth() + 1}월\`);
const today = toValue(new Date());

// 해당 월 달력에 표시할 42칸(6주) 셀을 생성합니다.
const cells = computed(() => {
  const first = new Date(month.value.getFullYear(), month.value.getMonth(), 1);
  const start = new Date(month.value.getFullYear(), month.value.getMonth(), 1 - first.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, value: toValue(date), other: date.getMonth() !== month.value.getMonth() };
  });
});

// 선택 값이 바뀌면 달력 표시 월을 맞춥니다.
watch(
  () => props.modelValue,
  (value) => {
    const date = parseValue(value);
    if (date) month.value = date;
  },
  { immediate: true },
);

// 패널이 열리면 선택일 또는 첫 가능 날짜로 포커스를 이동합니다.
watch(open, (isOpen) => {
  if (isOpen)
    nextTick(() =>
      root.value
        ?.querySelector('.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)')
        ?.focus(),
    );
});

function commit(value) {
  // v-model과 change 이벤트로 값을 확정합니다.
  emit('update:modelValue', value);
  emit('change', value);
}
function select(value) {
  // 날짜를 선택한 뒤 패널을 닫고 트리거로 포커스를 되돌립니다.
  commit(value);
  open.value = false;
  requestAnimationFrame(() => root.value?.querySelector('.date_picker_input')?.focus());
}
function moveMonth(offset) {
  month.value = new Date(month.value.getFullYear(), month.value.getMonth() + offset, 1);
}
function outside(event) {
  // 바깥 클릭 시 패널을 닫습니다.
  if (!root.value?.contains(event.target)) open.value = false;
}
onMounted(() => document.addEventListener('pointerdown', outside));
onBeforeUnmount(() => document.removeEventListener('pointerdown', outside));
<\/script>

<template>
  <div ref="root" :class="classes" data-component="DatePicker" @keydown.esc="open = false">
    <!-- 읽기 전용 트리거 입력과 지우기·달력 버튼을 묶습니다. -->
    <div class="date_picker_trigger">
      <input
        v-bind="inputAttrs"
        :id="inputId"
        class="date_picker_input"
        :value="formatValue(modelValue)"
        :placeholder="placeholder"
        readonly
        :disabled="disabled"
        :required="required"
        :aria-label="attrs['aria-label'] || ariaLabel"
        aria-haspopup="dialog"
        :aria-expanded="open"
        :aria-controls="panelId"
        :aria-invalid="error || undefined"
        @click="!disabled && (open = true)"
      />
      <input v-if="name" type="hidden" :name="name" :value="modelValue" />
      <button
        v-if="clearable && modelValue && !disabled"
        class="date_picker_clear"
        type="button"
        aria-label="날짜 지우기"
        @click="commit('')"
      >
        <svg
          class="icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      <button
        class="date_picker_btn"
        type="button"
        :disabled="disabled"
        aria-label="달력 열기"
        :aria-controls="panelId"
        :aria-expanded="open"
        @click="open = !open"
      >
        <svg
          class="icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      </button>
    </div>
    <!-- 달력 패널: 월 이동, 요일, 날짜 그리드, 오늘·초기화 액션입니다. -->
    <div
      v-show="open"
      :id="panelId"
      class="date_picker_panel"
      :class="panelAlign === 'end' && 'date_picker_panel-end'"
      role="dialog"
      aria-modal="false"
      :aria-label="ariaLabel"
    >
      <div class="calendar calendar_borderless">
        <div class="calendar_header">
          <button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            aria-label="이전 달"
            @click="moveMonth(-1)"
          >
            ‹</button
          ><span class="calendar_title" aria-live="polite">{{ title }}</span
          ><button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            aria-label="다음 달"
            @click="moveMonth(1)"
          >
            ›
          </button>
        </div>
        <div class="calendar_weekdays" aria-hidden="true">
          <span v-for="day in weekdays" :key="day" class="calendar_weekday">{{ day }}</span>
        </div>
        <div class="calendar_grid">
          <button
            v-for="cell in cells"
            :key="cell.value"
            type="button"
            class="calendar_day"
            :class="{
              'is-other-month': cell.other,
              'is-today': cell.value === today,
              'is-selected': cell.value === modelValue,
            }"
            :disabled="(min && cell.value < min) || (max && cell.value > max)"
            :aria-current="cell.value === today ? 'date' : undefined"
            :aria-selected="cell.value === modelValue || undefined"
            :aria-label="formatValue(cell.value)"
            @click="select(cell.value)"
          >
            {{ cell.date.getDate() }}
          </button>
        </div>
        <div class="calendar_footer">
          <button type="button" class="btn btn_text color_primary btn_sm" @click="select(today)">
            오늘
          </button>
          <div v-if="clearable" class="calendar_footer-actions">
            <button type="button" class="btn btn_ghost btn_sm" @click="commit('')">초기화</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`})))()}function V(e,t,n){return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/form/${e}/${e}.vue`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${e}.vue`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/form/${e}/${e}.jsx`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${e}.jsx`,code:n.react}]}function $t(e){let t=Z[e]??Z.basic,n=`<xf:input id="${e}Input" class="input${t.classes?` ${t.classes}`:``}" type="${t.type??`text`}" ref="data:${e}Value"${t.attributes?` ${t.attributes}`:``}></xf:input>`,r=e===`group`?`<w2:group id="${e}Group" class="input_group input_fit">
  <w2:textbox id="${e}Prefix" class="input_group-addon" label="https://" aria-hidden="true"></w2:textbox>
  ${n}
</w2:group>`:e===`clearable`?`<w2:group id="${e}Clearable" class="input_clearable is-filled">
  ${n}
  <xf:trigger id="${e}Clear" type="button" class="input_clear" ev:onclick="scwin.input_clear">
    <xf:label><![CDATA[입력 지우기]]></xf:label>
  </xf:trigger>
</w2:group>`:n;return`<w2:group id="${e}Field" class="form_field form_field_fit">
  <w2:textbox id="${e}Label" class="form_field-label" tagname="label" for="${e}Input" label="${t.label}"></w2:textbox>
  <w2:group id="${e}Control" class="form_field-control">
    ${r.replaceAll(`
`,`
    `)}
  </w2:group>
  <w2:textbox id="${e}Hint" class="form_field-hint" tagname="p" label="입력값을 확인해 주세요."></w2:textbox>
</w2:group>`}function en(e){let t=Q[e]??Q.basic,n=`<xf:textarea id="${e}Textarea" class="textarea${t.classes?` ${t.classes}`:``}" ref="data:${e}Value"${t.attributes?` ${t.attributes}`:``}></xf:textarea>`,r=e===`count`||e===`example`?`<w2:group id="${e}Wrap" class="textarea_wrap textarea_show-count">
  ${n}
  <w2:textbox id="${e}Count" class="textarea_count" role="status" aria-live="polite" label="0/${e===`count`?`200`:`500`}"></w2:textbox>
</w2:group>`:n;return`<w2:group id="${e}Field" class="form_field form_field_fit">
  <w2:textbox id="${e}Label" class="form_field-label" tagname="label" for="${e}Textarea" label="${t.label}"></w2:textbox>
  <w2:group id="${e}Control" class="form_field-control">
    ${r.replaceAll(`
`,`
    `)}
  </w2:group>
  <w2:textbox id="${e}Hint" class="form_field-hint" tagname="p" label="여러 줄 입력 내용을 확인해 주세요."></w2:textbox>
</w2:group>`}function tn(e){let t=$[e]??$.basic;return`<w2:group id="${e}Field" class="form_field form_field_fit">
  <w2:textbox id="${e}Label" class="form_field-label" tagname="label" for="${e}Select" label="${t.label}"></w2:textbox>
  <w2:group id="${e}Control" class="form_field-control">
    <xf:select1 id="${e}Select" class="input${t.classes?` ${t.classes}`:``}" ref="data:${e}Value"${t.attributes?` ${t.attributes}`:``} ev:onchange="scwin.select_onchange">
      <w2:itemset nodeset="data:${e}Options">
        <w2:label ref="label"></w2:label>
        <w2:value ref="value"></w2:value>
      </w2:itemset>
    </xf:select1>
  </w2:group>
  <w2:textbox id="${e}Hint" class="form_field-hint" tagname="p" label="선택값을 확인해 주세요."></w2:textbox>
</w2:group>`}function H(e,t,n){return Object.fromEntries(Object.entries(e).map(([e,r])=>[e,[...r,{id:`websquare`,label:`WebSquare`,fileName:`WebSquare 화면 XML · ${t} · ${e}`,code:`<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${n(e)}`}]]))}function U(e,t,n={}){let r=[`checkbox`,n.labelEnd&&`checkbox_label-end`,n.button&&`checkbox_button`,n.classes].filter(Boolean).join(` `),i=`<xf:checkbox id="${e}Input" class="checkbox_input" ref="data:${e}Value" trueValue="Y" falseValue="N"${n.attributes?` ${n.attributes}`:``}></xf:checkbox>`,a=`<w2:group id="${e}Control" class="checkbox_control">
  ${i}
  ${`<w2:textbox id="${e}Box" class="checkbox_box" aria-hidden="true" label=""></w2:textbox>`}
</w2:group>`,o=`<w2:textbox id="${e}Label" class="checkbox_label" tagname="label" for="${e}Input" label="${t}"></w2:textbox>`;return n.button?`<w2:group id="${e}" class="${r}" tagname="label">
  ${i}
  ${o}
</w2:group>`:n.labelEnd?`<w2:group id="${e}" class="${r}">
  ${o}
  ${a.replaceAll(`
`,`
  `)}
</w2:group>`:`<w2:group id="${e}" class="${r}">
  ${a.replaceAll(`
`,`
  `)}
  ${o}
</w2:group>`}function nn(e){switch(e){case`standalone`:return`<w2:group id="standaloneControl" class="checkbox_control" tagname="label" aria-label="항목 선택">
  <xf:checkbox id="standaloneInput" class="checkbox_input" ref="data:standaloneValue" trueValue="Y" falseValue="N"></xf:checkbox>
  <w2:textbox id="standaloneBox" class="checkbox_box" aria-hidden="true" label=""></w2:textbox>
</w2:group>`;case`labelEnd`:return U(`labelEnd`,`푸시 알림 받기`,{labelEnd:!0,attributes:`checked="true"`});case`size`:return[U(`sizeSm`,`Small — checkbox_sm`,{classes:`checkbox_sm`,attributes:`checked="true"`}),U(`sizeMd`,`Medium — 기본`,{attributes:`checked="true"`}),U(`sizeLg`,`Large — checkbox_lg`,{classes:`checkbox_lg`,attributes:`checked="true"`})].join(`

`);case`width`:return[U(`widthInline`,`기본 — 인라인 너비`,{attributes:`checked="true"`}),U(`widthBlock`,`checkbox_block — 전체 너비`,{classes:`checkbox_block`,attributes:`checked="true"`})].join(`

`);case`color`:return[U(`colorPrimary`,`Primary`,{classes:`color_primary`,attributes:`checked="true"`}),U(`colorSuccess`,`Success`,{classes:`color_success`,attributes:`checked="true"`})].join(`

`);case`state`:return[U(`stateOff`,`미선택`),U(`stateOn`,`선택됨`,{attributes:`checked="true"`}),U(`stateDisabled`,`비활성`,{attributes:`disabled="true"`})].join(`

`);case`group`:case`buttonType`:return`<w2:group id="${e}Group" class="checkbox_group checkbox_group_horizontal" tagname="fieldset">
  <w2:textbox id="${e}Legend" class="checkbox_group-legend" tagname="legend" label="관심 분야"></w2:textbox>
  ${U(`${e}A`,`디자인`,{button:e===`buttonType`,attributes:`checked="true"`}).replaceAll(`
`,`
  `)}
  ${U(`${e}B`,`개발`,{button:e===`buttonType`}).replaceAll(`
`,`
  `)}
</w2:group>`;case`cardType`:return`<w2:group id="cardTypeGroup" class="checkbox_group" tagname="fieldset">
  <w2:textbox id="cardTypeLegend" class="checkbox_group-legend" tagname="legend" label="요금제 선택 (다중)"></w2:textbox>
  <w2:group id="cardTypeCard" class="checkbox_card">
    <w2:group id="cardTypeHeader" class="card_header">
      <w2:textbox id="cardTypeTitle" class="card_title" tagname="h3" label="Basic"></w2:textbox>
      <w2:group id="cardTypeExtra" class="card_extra">
        <w2:group id="cardTypeControl" class="checkbox_control" tagname="label">
          <xf:checkbox id="cardTypeInput" class="checkbox_input" ref="data:cardTypeValue" trueValue="Y" falseValue="N" checked="true"></xf:checkbox>
          <w2:textbox id="cardTypeBox" class="checkbox_box" aria-hidden="true" label=""></w2:textbox>
        </w2:group>
      </w2:group>
    </w2:group>
    <w2:textbox id="cardTypeBody" class="card_body" label="개인 프로젝트에 적합합니다."></w2:textbox>
  </w2:group>
</w2:group>`;case`form`:return`<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    <w2:textbox id="formLabel" class="form_field-label" label="수신 동의"></w2:textbox>
    <w2:group id="formGroup" class="checkbox_group" tagname="fieldset">
      ${U(`formMarketing`,`마케팅 정보 수신`,{attributes:`checked="true"`}).replaceAll(`
`,`
      `)}
      ${U(`formNews`,`뉴스레터 구독`).replaceAll(`
`,`
      `)}
    </w2:group>
  </w2:group>
</w2:group>`;case`type`:return[U(`typeBasic`,`기본 — checkbox`,{attributes:`checked="true"`}),U(`typeLabelEnd`,`레이블 뒤 — checkbox_label-end`,{labelEnd:!0}),U(`typeButton`,`버튼형`,{button:!0,attributes:`checked="true"`})].join(`

`);default:return`<w2:group id="basicField" class="form_field">
  <w2:textbox id="basicFieldLabel" class="form_field-label" label="알림 설정"></w2:textbox>
  <w2:group id="basicGroup" class="checkbox_group" tagname="fieldset">
    ${U(`basicEmail`,`이메일 알림`,{attributes:`checked="true"`}).replaceAll(`
`,`
    `)}
    ${U(`basicPush`,`푸시 알림`).replaceAll(`
`,`
    `)}
  </w2:group>
</w2:group>`}}function W(e,t,n={}){let r=[`radio`,n.labelEnd&&`radio_label-end`,n.button&&`radio_button`,n.classes].filter(Boolean).join(` `),i=n.name??`${e}Name`,a=`<xf:input id="${e}Input" class="radio_input" type="radio" name="${i}" ref="data:${i}" value="${n.value??e}"${n.attributes?` ${n.attributes}`:``}></xf:input>`,o=`<w2:group id="${e}Control" class="radio_control">
  ${a}
  ${`<w2:textbox id="${e}Box" class="radio_box" aria-hidden="true" label=""></w2:textbox>`}
</w2:group>`,s=`<w2:textbox id="${e}Label" class="radio_label" tagname="label" for="${e}Input" label="${t}"></w2:textbox>`;return n.button?`<w2:group id="${e}" class="${r}" tagname="label">
  ${a}
  ${s}
</w2:group>`:n.labelEnd?`<w2:group id="${e}" class="${r}">
  ${s}
  ${o.replaceAll(`
`,`
  `)}
</w2:group>`:`<w2:group id="${e}" class="${r}">
  ${o.replaceAll(`
`,`
  `)}
  ${s}
</w2:group>`}function rn(e){switch(e){case`standalone`:return`<w2:group id="standaloneGroup" class="radio_group radio_group_horizontal">
  <w2:group id="standaloneA" class="radio_control" tagname="label" aria-label="항목 선택">
    <xf:input id="standaloneAInput" class="radio_input" type="radio" name="standalone" ref="data:standaloneValue" value="a"></xf:input>
    <w2:textbox id="standaloneABox" class="radio_box" aria-hidden="true" label=""></w2:textbox>
  </w2:group>
  <w2:group id="standaloneB" class="radio_control" tagname="label" aria-label="선택됨">
    <xf:input id="standaloneBInput" class="radio_input" type="radio" name="standalone" ref="data:standaloneValue" value="b" checked="true"></xf:input>
    <w2:textbox id="standaloneBBox" class="radio_box" aria-hidden="true" label=""></w2:textbox>
  </w2:group>
</w2:group>`;case`labelEnd`:return W(`labelEnd`,`신용카드`,{labelEnd:!0,name:`labelEndPay`,value:`card`,attributes:`checked="true"`});case`size`:return`<w2:group id="sizeGroup" class="radio_group radio_group_horizontal">
  ${W(`sizeSm`,`Small — radio_sm`,{classes:`radio_sm`,name:`size`,value:`sm`,attributes:`checked="true"`}).replaceAll(`
`,`
  `)}
  ${W(`sizeMd`,`Medium — 기본`,{name:`size`,value:`md`}).replaceAll(`
`,`
  `)}
  ${W(`sizeLg`,`Large — radio_lg`,{classes:`radio_lg`,name:`size`,value:`lg`}).replaceAll(`
`,`
  `)}
</w2:group>`;case`width`:return[W(`widthInline`,`기본 — 인라인 너비`,{name:`widthInline`,attributes:`checked="true"`}),W(`widthBlock`,`radio_block — 전체 너비`,{classes:`radio_block`,name:`widthBlock`,attributes:`checked="true"`})].join(`

`);case`color`:return W(`colorPrimary`,`Primary`,{classes:`color_primary`,name:`colorPrimary`,attributes:`checked="true"`});case`state`:return[W(`stateOff`,`미선택`,{name:`state`,value:`off`}),W(`stateOn`,`선택됨`,{name:`state`,value:`on`,attributes:`checked="true"`}),W(`stateDisabled`,`비활성`,{name:`stateDisabled`,attributes:`disabled="true"`})].join(`

`);case`group`:case`buttonType`:return`<w2:group id="${e}Group" class="radio_group${e===`buttonType`?` radio_group_horizontal`:``}" tagname="fieldset">
  <w2:textbox id="${e}Legend" class="radio_group-legend" tagname="legend" label="${e===`buttonType`?`필터`:`배송 방법`}"></w2:textbox>
  ${W(`${e}A`,e===`buttonType`?`전체`:`일반 배송`,{button:e===`buttonType`,name:e,value:`a`,attributes:`checked="true"`}).replaceAll(`
`,`
  `)}
  ${W(`${e}B`,e===`buttonType`?`진행 중`:`빠른 배송`,{button:e===`buttonType`,name:e,value:`b`}).replaceAll(`
`,`
  `)}
</w2:group>`;case`cardType`:return`<w2:group id="cardTypeGroup" class="radio_group" tagname="fieldset">
  <w2:textbox id="cardTypeLegend" class="radio_group-legend" tagname="legend" label="요금제 선택"></w2:textbox>
  <w2:group id="cardTypeCard" class="radio_card">
    <w2:textbox id="cardTypeTitle" class="card_title" tagname="h3" label="Basic"></w2:textbox>
    <w2:group id="cardTypeControl" class="radio_control" tagname="label">
      <xf:input id="cardTypeInput" class="radio_input" type="radio" name="cardType" ref="data:cardTypeValue" value="basic" checked="true"></xf:input>
      <w2:textbox id="cardTypeBox" class="radio_box" aria-hidden="true" label=""></w2:textbox>
    </w2:group>
    <w2:textbox id="cardTypeBody" class="card_body" label="개인 프로젝트에 적합합니다."></w2:textbox>
  </w2:group>
</w2:group>`;case`form`:return`<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    <w2:textbox id="formLabel" class="form_field-label" label="수신 채널"></w2:textbox>
    <w2:group id="formGroup" class="radio_group" tagname="fieldset">
      ${W(`formEmail`,`이메일`,{name:`formChannel`,value:`email`,attributes:`checked="true"`}).replaceAll(`
`,`
      `)}
      ${W(`formSms`,`SMS`,{name:`formChannel`,value:`sms`}).replaceAll(`
`,`
      `)}
    </w2:group>
  </w2:group>
</w2:group>`;case`type`:return[W(`typeBasic`,`기본 — radio`,{name:`typeBasic`,attributes:`checked="true"`}),W(`typeLabelEnd`,`레이블 뒤 — radio_label-end`,{labelEnd:!0,name:`typeLabelEnd`}),W(`typeButton`,`버튼형`,{button:!0,name:`typeButton`,attributes:`checked="true"`})].join(`

`);default:return`<w2:group id="basicField" class="form_field">
  <w2:textbox id="basicFieldLabel" class="form_field-label" label="결제 수단"></w2:textbox>
  <w2:group id="basicGroup" class="radio_group" tagname="fieldset">
    ${W(`basicCard`,`신용카드`,{name:`basicPay`,value:`card`,attributes:`checked="true"`}).replaceAll(`
`,`
    `)}
    ${W(`basicBank`,`계좌이체`,{name:`basicPay`,value:`bank`}).replaceAll(`
`,`
    `)}
  </w2:group>
</w2:group>`}}function G(e,t,n={}){let r=[`switch`,n.labelEnd&&`switch_label-end`,n.classes].filter(Boolean).join(` `),i=`<w2:group id="${e}Control" class="switch_control">
  ${`<xf:checkbox id="${e}Input" class="switch_input" ref="data:${e}Value" trueValue="Y" falseValue="N" role="switch"${n.attributes?` ${n.attributes}`:``}></xf:checkbox>`}
  ${`<w2:group id="${e}Track" class="switch_track" aria-hidden="true">
  <w2:textbox id="${e}Thumb" class="switch_thumb" label=""></w2:textbox>
</w2:group>`.replaceAll(`
`,`
  `)}
</w2:group>`,a=t?`<w2:textbox id="${e}Label" class="switch_label" label="${t}"></w2:textbox>`:``,o=n.ariaLabel?` aria-label="${n.ariaLabel}"`:``;return t?n.labelEnd?`<w2:group id="${e}" class="${r}" tagname="label"${o}>
  ${a}
  ${i.replaceAll(`
`,`
  `)}
</w2:group>`:`<w2:group id="${e}" class="${r}" tagname="label"${o}>
  ${i.replaceAll(`
`,`
  `)}
  ${a}
</w2:group>`:`<w2:group id="${e}" class="${r}" tagname="label"${o}>
  ${i.replaceAll(`
`,`
  `)}
</w2:group>`}function an(e){switch(e){case`standalone`:return[G(`standaloneOff`,``,{ariaLabel:`기능 켜기`}),G(`standaloneOn`,``,{ariaLabel:`기능 끄기`,attributes:`checked="true"`})].join(`

`);case`labelEnd`:return G(`labelEnd`,`푸시 알림 받기`,{labelEnd:!0,attributes:`checked="true"`});case`size`:return[G(`sizeSm`,`Small — switch_sm`,{labelEnd:!0,classes:`switch_sm`,attributes:`checked="true"`}),G(`sizeMd`,`Medium — 기본`,{labelEnd:!0,attributes:`checked="true"`}),G(`sizeLg`,`Large — switch_lg`,{labelEnd:!0,classes:`switch_lg`,attributes:`checked="true"`})].join(`

`);case`width`:return[G(`widthInline`,`기본 — 인라인 너비`,{labelEnd:!0,attributes:`checked="true"`}),G(`widthBlock`,`switch_block — 전체 너비`,{labelEnd:!0,classes:`switch_block`,attributes:`checked="true"`})].join(`

`);case`color`:return G(`colorPrimary`,`Primary`,{labelEnd:!0,classes:`color_primary`,attributes:`checked="true"`});case`state`:return[G(`stateOff`,`꺼짐`,{labelEnd:!0}),G(`stateOn`,`켜짐`,{labelEnd:!0,attributes:`checked="true"`}),G(`stateDisabled`,`비활성`,{labelEnd:!0,attributes:`disabled="true"`})].join(`

`);case`group`:return`<w2:group id="groupRoot" class="switch_group switch_group_block" tagname="fieldset">
  <w2:textbox id="groupLegend" class="switch_group-legend" tagname="legend" label="개인정보 설정"></w2:textbox>
  ${G(`groupProfile`,`프로필 공개`,{labelEnd:!0,attributes:`checked="true"`}).replaceAll(`
`,`
  `)}
  ${G(`groupActivity`,`활동 기록 표시`,{labelEnd:!0}).replaceAll(`
`,`
  `)}
</w2:group>`;case`form`:return`<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    <w2:textbox id="formLabel" class="form_field-label" label="알림"></w2:textbox>
    <w2:group id="formGroup" class="switch_group switch_group_block" tagname="fieldset">
      ${G(`formEmail`,`이메일 알림`,{labelEnd:!0,attributes:`checked="true"`}).replaceAll(`
`,`
      `)}
      ${G(`formPush`,`푸시 알림`,{labelEnd:!0}).replaceAll(`
`,`
      `)}
    </w2:group>
  </w2:group>
</w2:group>`;case`type`:return[G(`typeBasic`,`기본 — switch`,{attributes:`checked="true"`}),G(`typeLabelEnd`,`레이블 뒤 — switch_label-end`,{labelEnd:!0,attributes:`checked="true"`})].join(`

`);default:return[G(`basicDark`,`다크 모드`,{attributes:`checked="true"`}),G(`basicAuto`,`자동 저장`)].join(`

`)}}function K(e,t,n={}){let r=n.value??`50`,i=[`slider`,n.classes].filter(Boolean).join(` `),a=`<w2:group id="${e}Header" class="slider_header">
  <w2:textbox id="${e}Label" class="slider_label" tagname="label" for="${e}Input" label="${t}"></w2:textbox>
  ${n.showValue===!1?``:`<w2:textbox id="${e}Value" class="slider_value" label="${r}"></w2:textbox>`}
</w2:group>`,o=`<xf:input id="${e}Input" class="slider_input" type="range" ref="data:${e}Value" min="0" max="100" step="1" value="${r}"${n.attributes?` ${n.attributes}`:``} ev:onchange="scwin.slider_onchange"></xf:input>`,s=n.stepper?`<w2:group id="${e}Control" class="slider_control slider_stepper">
  <xf:trigger id="${e}Decrease" type="button" class="slider_step" ev:onclick="scwin.slider_decrease">
    <xf:label><![CDATA[값 줄이기]]></xf:label>
  </xf:trigger>
  ${o}
  <xf:trigger id="${e}Increase" type="button" class="slider_step" ev:onclick="scwin.slider_increase">
    <xf:label><![CDATA[값 늘리기]]></xf:label>
  </xf:trigger>
</w2:group>`:`<w2:group id="${e}Control" class="slider_control">
  ${o}
</w2:group>`,c=n.hint?`\n  <w2:textbox id="${e}Hint" class="slider_hint" tagname="p" label="${n.hint}"></w2:textbox>`:``;return`<w2:group id="${e}" class="${i}">
  ${a.replaceAll(`
`,`
  `)}
  ${s.replaceAll(`
`,`
  `)}${c}
</w2:group>`}function on(e){switch(e){case`type`:return[K(`typeBasic`,`기본 — slider`,{value:`40`}),K(`typeStepper`,`스텝 버튼 — slider_stepper`,{value:`40`,stepper:!0,classes:`slider_fit`})].join(`

`);case`label`:return K(`labelShow`,`볼륨`,{value:`70`,hint:`현재 값과 단위를 함께 표시합니다.`});case`size`:return[K(`sizeSm`,`Small`,{classes:`slider_sm`,value:`30`}),K(`sizeMd`,`Medium`,{value:`50`}),K(`sizeLg`,`Large`,{classes:`slider_lg`,value:`70`})].join(`

`);case`width`:return[K(`widthFit`,`제한 너비`,{classes:`slider_fit`,value:`45`}),K(`widthBlock`,`전체 너비`,{classes:`slider_block`,value:`45`})].join(`

`);case`step`:return K(`stepTicks`,`간격 · 눈금`,{value:`40`,attributes:`step="10"`,hint:`step과 눈금으로 선택 단위를 안내합니다.`});case`stepper`:return K(`stepperAlways`,`스텝 버튼`,{value:`55`,stepper:!0,classes:`slider_stepper_always slider_fit`});case`color`:return K(`colorPrimary`,`Primary`,{classes:`color_primary slider_fit`,value:`60`});case`state`:return[K(`stateDefault`,`기본`,{value:`50`}),K(`stateDisabled`,`비활성`,{value:`50`,attributes:`disabled="true"`,classes:`is-disabled`})].join(`

`);case`form`:return`<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    ${K(`formVolume`,`음량`,{value:`65`,classes:`slider_fit`}).replaceAll(`
`,`
    `)}
  </w2:group>
</w2:group>`;default:return K(`basic`,`밝기`,{value:`50`,classes:`slider_fit`,hint:`0에서 100까지 조절합니다.`})}}function q(e,t,n={}){let r=n.count??5,i=n.value??``,a=[`rate`,n.clearable&&`rate_clearable`,n.classes].filter(Boolean).join(` `),o=Array.from({length:r},(t,r)=>{let a=r+1,o=i&&Number(i)>=a?` checked="true"`:``;return`<w2:group id="${e}Star${a}" class="rate_star${Number(i)>=a?` is-filled`:``}" tagname="label">
  <xf:input id="${e}Input${a}" class="rate_input" type="radio" name="${e}" ref="data:${e}Value" value="${a}"${o}${n.attributes?` ${n.attributes}`:``}></xf:input>
  <w2:textbox id="${e}Graphic${a}" class="rate_star-graphic" aria-hidden="true" label="★"></w2:textbox>
  <w2:textbox id="${e}Label${a}" class="rate_star-label" label="${a}점"></w2:textbox>
</w2:group>`}).join(`
`),s=n.clearable?`\n  <xf:trigger id="${e}Clear" type="button" class="rate_clear" ev:onclick="scwin.rate_clear">
    <xf:label><![CDATA[선택 초기화]]></xf:label>
  </xf:trigger>`:``;return`<w2:group id="${e}" class="${a}" tagname="fieldset">
  <w2:textbox id="${e}Legend" class="rate_legend" tagname="legend" label="${t}"></w2:textbox>
  <w2:group id="${e}Control" class="rate_control">
    <w2:group id="${e}Stars" class="rate_stars">
      ${o.replaceAll(`
`,`
      `)}
    </w2:group>${s}
  </w2:group>
</w2:group>`}function sn(e){switch(e){case`type`:return[q(`typeBasic`,`기본 — rate`,{value:`3`}),q(`typeHalf`,`반점 — rate_allow-half`,{value:`3.5`,classes:`rate_allow-half`})].join(`

`);case`size`:return[q(`sizeSm`,`Small`,{classes:`rate_sm`,value:`4`}),q(`sizeMd`,`Medium`,{value:`4`}),q(`sizeLg`,`Large`,{classes:`rate_lg`,value:`4`})].join(`

`);case`color`:return q(`colorWarning`,`만족도`,{classes:`color_warning`,value:`4`});case`half`:return q(`half`,`반점 선택`,{classes:`rate_allow-half`,value:`3.5`});case`clear`:return q(`clear`,`선택 해제`,{value:`3`,clearable:!0});case`readonly`:return q(`readonly`,`평균 평점`,{value:`4`,classes:`is-readonly`,attributes:`disabled="true"`});case`state`:return[q(`stateDefault`,`기본`,{value:`3`}),q(`stateDisabled`,`비활성`,{value:`3`,attributes:`disabled="true"`,classes:`is-disabled`})].join(`

`);case`form`:return`<w2:group id="formRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="formField" class="form_field">
    ${q(`formRate`,`서비스 만족도`,{value:`4`}).replaceAll(`
`,`
    `)}
  </w2:group>
</w2:group>`;default:return q(`basic`,`별점`,{value:`3`})}}function J(e,t={}){let n=t.variant??`button`,r=[`upload`,t.classes].filter(Boolean).join(` `),i=`<xf:input id="${e}Input" class="upload_input" type="file" ref="data:${e}Files"${t.attributes?` ${t.attributes}`:``}></xf:input>`;return n===`drag`?`<w2:group id="${e}" class="${r}">
  <w2:group id="${e}Dropzone" class="upload_dropzone" tagname="label" for="${e}Input">
    ${i}
    <w2:textbox id="${e}Title" class="upload_dropzone-title" label="${t.title??`파일을 끌어다 놓거나 선택하세요`}"></w2:textbox>
    <w2:textbox id="${e}Desc" class="upload_dropzone-desc" label="${t.desc??`PNG, JPG, PDF`}"></w2:textbox>
  </w2:group>
  <w2:group id="${e}List" class="upload_list" tagname="ul"></w2:group>
</w2:group>`:n===`list`?`<w2:group id="${e}" class="${r}">
  <w2:group id="${e}List" class="upload_list" tagname="ul">
    <w2:textbox id="${e}Item" class="upload_item is-uploading" tagname="li" label="프로젝트_제안서_v2.pdf · 60%"></w2:textbox>
  </w2:group>
</w2:group>`:n===`picture-card`?`<w2:group id="${e}" class="${r}">
  <w2:group id="${e}Cards" class="upload_cards">
    <w2:group id="${e}Trigger" class="upload_card upload_card-trigger" tagname="label" for="${e}Input">
      ${i}
      <w2:textbox id="${e}Label" label="업로드"></w2:textbox>
    </w2:group>
  </w2:group>
</w2:group>`:n===`avatar`?`<w2:group id="${e}" class="${r}">
  <w2:group id="${e}Avatar" class="upload_avatar" tagname="label" for="${e}Input">
    ${i}
    <w2:textbox id="${e}Preview" class="avatar avatar_xl" label="프로필"></w2:textbox>
  </w2:group>
</w2:group>`:`<w2:group id="${e}" class="${r}">
  <w2:group id="${e}Trigger" class="upload_trigger" tagname="label" for="${e}Input">
    ${i}
    <xf:trigger id="${e}Button" type="button" class="btn btn_filled color_primary">
      <xf:label><![CDATA[파일 선택]]></xf:label>
    </xf:trigger>
  </w2:group>
  <w2:textbox id="${e}Hint" class="upload_hint" tagname="p" label="${t.hint??`PDF 또는 문서 파일을 첨부해 주세요.`}"></w2:textbox>
  <w2:group id="${e}List" class="upload_list" tagname="ul"></w2:group>
</w2:group>`}function cn(e){switch(e){case`dropzone`:return J(`dropzone`,{variant:`drag`,classes:`upload_fit`,attributes:`accept="image/png,image/jpeg,.pdf" multiple="true"`,desc:`PNG, JPG, PDF · 파일당 최대 5MB`});case`list`:return J(`list`,{variant:`list`,classes:`upload_fit`});case`cards`:return J(`cards`,{variant:`picture-card`,attributes:`accept="image/*" multiple="true"`});case`avatar`:return J(`avatar`,{variant:`avatar`,attributes:`accept="image/*"`});case`size`:return[J(`sizeSm`,{variant:`drag`,classes:`upload_sm`,title:`SM 업로드`}),J(`sizeMd`,{variant:`drag`,title:`MD 업로드`}),J(`sizeLg`,{variant:`drag`,classes:`upload_lg`,title:`LG 업로드`})].join(`

`);case`width`:return[J(`widthDefault`,{variant:`drag`,title:`기본 너비 업로드`}),J(`widthFit`,{variant:`drag`,classes:`upload_fit`,title:`제한 너비 업로드`})].join(`

`);case`state`:return[J(`stateDisabled`,{classes:`is-disabled`,attributes:`disabled="true"`}),J(`stateError`,{variant:`drag`,classes:`is-error`,title:`업로드 오류`})].join(`

`);case`example`:return`<w2:group id="exampleRoot" class="form form_vertical form_fit" tagname="form">
  <w2:group id="exampleField" class="form_field">
    <w2:textbox id="exampleLabel" class="form_field-label" label="첨부 파일"></w2:textbox>
    ${J(`example`,{attributes:`accept=".pdf,.doc,.docx" multiple="true"`,hint:`PDF·DOC · 최대 3개 · 10MB`}).replaceAll(`
`,`
    `)}
  </w2:group>
</w2:group>`;default:return J(`basic`)}}function Y(e,t,n={}){let r=`<w2:group id="${e}" class="${[`date_picker`,n.classes].filter(Boolean).join(` `)}">
  <w2:group id="${e}Trigger" class="date_picker_trigger">
    <w2:inputCalendar id="${e}Input" class="date_picker_input" ref="data:${e}Value" placeholder="날짜를 선택하세요"${n.value?` value="${n.value}"`:``}${n.attributes?` ${n.attributes}`:``} calendarValueType="yearMonthDate"></w2:inputCalendar>
    <xf:trigger id="${e}Btn" type="button" class="date_picker_btn" ev:onclick="scwin.datePicker_open">
      <xf:label><![CDATA[달력 열기]]></xf:label>
    </xf:trigger>
  </w2:group>
</w2:group>`,i=n.error?`<w2:textbox id="${e}Error" class="form_field-error" tagname="p" role="alert" label="${n.error}"></w2:textbox>`:n.hint?`<w2:textbox id="${e}Hint" class="form_field-hint" tagname="p" label="${n.hint}"></w2:textbox>`:``;return`<w2:group id="${e}Field" class="form_field">
  <w2:textbox id="${e}Label" class="form_field-label" tagname="label" for="${e}Input" label="${t}"></w2:textbox>
  ${r.replaceAll(`
`,`
  `)}
  ${i}
</w2:group>`}function ln(e){switch(e){case`size`:return[Y(`sizeSm`,`Small`,{classes:`date_picker_sm`,value:`2024-06-15`}),Y(`sizeMd`,`Medium`,{value:`2024-06-15`}),Y(`sizeLg`,`Large`,{classes:`date_picker_lg`,value:`2024-06-15`})].join(`

`);case`width`:return[Y(`widthBlock`,`전체 너비`,{classes:`date_picker_block`,value:`2024-06-15`}),Y(`widthFit`,`제한 너비`,{classes:`date_picker_fit`,value:`2024-06-15`})].join(`

`);case`limits`:return Y(`limits`,`프로모션 기간`,{value:`2024-06-15`,attributes:`minYear="2024" maxYear="2024"`,hint:`2024-06-10 ~ 2024-06-20`});case`state`:return[Y(`stateDisabled`,`비활성`,{classes:`is-disabled`,value:`2024-06-15`,attributes:`disabled="true"`}),Y(`stateError`,`에러`,{classes:`is-error`,error:`날짜를 선택해 주세요.`})].join(`

`);case`example`:return`<w2:group id="exampleRoot" class="form form_vertical form_fit" tagname="form">
  ${Y(`visit`,`방문일`,{classes:`is-error`,error:`방문일을 선택해 주세요.`}).replaceAll(`
`,`
  `)}
</w2:group>`;default:return Y(`basic`,`예약일`,{classes:`date_picker_fit`,value:`2024-06-15`,hint:`달력에서 날짜를 선택해 주세요.`})}}var un,dn,fn,pn,mn,hn,gn,_n,X,vn,Z,Q,$,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On;function kn(){return(kn=e((()=>{f(),b(),se(),de(),he(),O(),j(),P(),xe(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),un=V(`Input`,`input`,{html:De,gulp:ke,react:je,vue:Ne}),dn=V(`Textarea`,`textarea`,{html:Fe,gulp:Le,react:ze,vue:Ve}),fn=V(`Select`,`select`,{html:Ue,gulp:Ge,react:qe,vue:Ye}),pn=V(`Checkbox`,`checkbox`,{html:Ze,gulp:$e,react:tt,vue:rt}),mn=V(`Radio`,`radio`,{html:at,gulp:st,react:lt,vue:dt}),hn=V(`Switch`,`switch`,{html:pt,gulp:ht,react:_t,vue:yt}),gn=V(`Slider`,`slider`,{html:xt,gulp:Ct,react:Tt,vue:Dt}),_n=V(`Rate`,`rate`,{html:kt,gulp:jt,react:Nt,vue:Ft}),X=V(`Upload`,`upload`,{html:Lt,gulp:zt,react:Vt,vue:Ut}),vn=V(`DatePicker`,`date-picker`,{html:Gt,gulp:qt,react:Yt,vue:Zt}),Z={basic:{label:`이름`,attributes:`placeholder="이름을 입력하세요"`},standalone:{label:`검색어`,type:`search`,classes:`input_fit`,attributes:`placeholder="검색어를 입력하세요"`},type:{label:`이메일`,type:`email`,attributes:`placeholder="name@example.com"`},kind:{label:`인증번호`,classes:`input_otp`,attributes:`displayFormat="####" maxlength="4"`},size:{label:`Large`,classes:`input_lg`},width:{label:`제한 너비`,classes:`input_fit`},group:{label:`도메인`,type:`url`,classes:`input_fit`,attributes:`placeholder="example.com"`},required:{label:`이메일`,type:`email`,attributes:`mandatory="true" aria-required="true"`},state:{label:`오류 입력`,attributes:`aria-invalid="true" aria-describedby="inputError"`},clearable:{label:`검색어`,type:`search`,attributes:`placeholder="검색어를 입력하세요"`},example:{label:`사용자 이름`,attributes:`mandatory="true" aria-describedby="inputExampleHint"`}},Q={basic:{label:`메시지`,classes:`textarea_resize_none`,attributes:`rows="4" placeholder="메시지를 입력하세요"`},standalone:{label:`자기소개`,classes:`textarea_fit`,attributes:`rows="4"`},size:{label:`Large`,classes:`textarea_lg textarea_resize_none`,attributes:`rows="5"`},width:{label:`제한 너비`,classes:`textarea_fit textarea_resize_none`,attributes:`rows="4"`},resize:{label:`세로 크기 조절`,classes:`textarea_resize_vertical`,attributes:`rows="5"`},required:{label:`문의 내용`,classes:`textarea_resize_none`,attributes:`rows="4" mandatory="true"`},state:{label:`오류 내용`,classes:`textarea_resize_none is-error`,attributes:`rows="4" aria-invalid="true"`},count:{label:`자기소개`,classes:`textarea_resize_none`,attributes:`rows="5" maxlength="200"`},example:{label:`문의 내용`,classes:`textarea_resize_none is-error`,attributes:`rows="5" maxlength="500" mandatory="true"`}},$={basic:{label:`지역`,classes:`input_fit`,attributes:`chooseOption="true"`},standalone:{label:`언어`,classes:`input_fit`},size:{label:`Large`,classes:`input_lg`},width:{label:`제한 너비`,classes:`input_fit`},group:{label:`소속 팀`,attributes:`chooseOption="true"`},multiple:{label:`관심 분야`,attributes:`appearance="minimal" multiple="true"`},required:{label:`문의 유형`,attributes:`mandatory="true" chooseOption="true"`},state:{label:`오류 선택`,classes:`is-error`,attributes:`aria-invalid="true"`},example:{label:`배송 지역`,classes:`input_fit is-error`,attributes:`mandatory="true" chooseOption="true"`}},yn=H(d,`Input`,$t),bn=H(oe,`Textarea`,en),xn=H(re,`Select`,tn),Sn=H(ue,`Checkbox`,nn),Cn=H(me,`Radio`,rn),wn=H(D,`Switch`,an),Tn=H(A,`Slider`,on),En=H(N,`Rate`,sn),Dn=H(be,`Upload`,cn),On=H(Te,`DatePicker`,ln)})))()}export{wn as _,kn as a,X as b,mn as c,En as d,fn as f,hn as g,Tn as h,On as i,Cn as l,gn as m,Sn as n,un as o,xn as p,vn as r,yn as s,pn as t,_n as u,dn as v,Dn as x,bn as y};