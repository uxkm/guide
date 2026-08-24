import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./Input.stories-D1ZfPljb.js";import{i as h,r as g}from"./react-DSvVgjCn.js";import{c as _,r as v,u as y}from"./blocks-CkHyEh4O.js";import{i as b,n as x,r as S,t as C}from"./ComponentApiDocs-D9Q6nkXJ.js";function w(e,t={}){let n=t.value&&!t.inactive?` is-filled`:``,r=t.fit?` input_fit`:``,i=`<button class="btn btn_text color_muted btn_icon-only input_clear" type="button" data-component="Button" data-ripple="false" aria-label="입력 지우기"${t.value&&!t.inactive?``:` hidden`}>${D}</button>`,a=`<span class="input_clearable${n}${t.prefix||t.suffix?``:r}">${e}${i}</span>`;return!t.prefix&&!t.suffix?a:`<div class="input_group${r}">${t.prefix?`<span class="input_group-addon" aria-hidden="true">${t.prefix}</span>`:``}${a}${t.suffix?`<span class="input_group-addon">${t.suffix}</span>`:``}</div>`}function T(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>`${n}${e}`).join(`
`)}function E(e,t){let n=t.react.includes(`<ButtonClearable`),r=t.react.includes(`<ImplicitInput`),i=t.react.includes(`<Button`)||n,a=t.react.includes(`<Icon`)||n,o=[n?`import { useId, useRef, useState } from 'react';`:``,`import Input from '@uxkm/react/input';`,i?`import Button from '@uxkm/react/button';`:``,a?`import Icon from '@uxkm/react/icon';`:``].filter(Boolean).join(`
`),s=[`import Input from '@uxkm/vue/input';`,t.vue.includes(`<Button`)?`import Button from '@uxkm/vue/button';`:``,t.vue.includes(`<Icon`)?`import Icon from '@uxkm/vue/icon';`:``].filter(Boolean).join(`
`),c=[n?P:``,r?F:``].filter(Boolean).join(`

`),l=`${o}${c?`\n\n${c}`:``}\n\nexport function Example() {\n  return (\n${T(t.react,4)}\n  );\n}`,u=`<script setup>\n${s}\n<\/script>\n\n<template>\n${T(t.vue,2)}\n</template>`,d=t.html.replace(/<input(?![^>]*data-component=)/g,`<input data-component="Input"`),f=`{% from "../../basic/Icon/icon.njk" import icon %}\n${d.replaceAll(D,`{{ icon('close') }}`).replaceAll(O,`{{ icon('search') }}`)}`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Input/Input.html · ${e}`,code:d},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Input/input.njk · ${e}`,code:f},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/input · ${e}`,code:u},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/input · ${e}`,code:u},{id:`react`,label:`React`,fileName:`@uxkm/react/input · ${e}`,code:l},{id:`next`,label:`Next`,fileName:`@uxkm/react/input · ${e}`,code:l}]}var D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{D=`<svg class="icon" data-component="Icon" data-icon="close" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"></path></svg>`,O=`<svg class="icon" data-component="Icon" data-icon="search" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>`,k=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,A=(e,t,n,r=``)=>`<div className="form_field"><label className="form_field-label" htmlFor="${e}">${t}</label>${n}${r}</div>`,j=(e,t,n,r=``)=>`<div class="form_field"><label class="form_field-label" for="${e}">${t}</label>${n}${r}</div>`,M=(e,t)=>`<label class="input_group-label_hidden" for="${e}">${t}</label>`,N={basic:{html:k(`input-name`,`이름`,w(`<input id="input-name" class="input" type="text" placeholder="이름을 입력하세요">`),`<p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>`),react:A(`input-name`,`이름`,`<ButtonClearable id="input-name" placeholder="이름을 입력하세요" />`,`<p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>`),vue:j(`input-name`,`이름`,`<Input id="input-name" clearable placeholder="이름을 입력하세요" />`,`<p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>`)},standalone:{html:`<div class="input_field input_field_fit"><label class="form_field-label" for="input-search">검색어</label>${w(`<input id="input-search" class="input" type="text" placeholder="플레이스홀더">`)}</div>
<div class="input_field input_field_fit"><label class="form_field-label" for="input-nickname">닉네임</label>${w(`<input id="input-nickname" class="input" type="text" value="입력된 값">`,{value:`입력된 값`})}</div>
${M(`standalone-search`,`검색`)}${w(`<input id="standalone-search" class="input" type="search" placeholder="검색어를 입력하세요">`,{prefix:O})}`,react:`<>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-search">검색어</label><ButtonClearable id="input-search" placeholder="플레이스홀더" /></div>
  <div className="input_field input_field_fit"><label className="form_field-label" htmlFor="input-nickname">닉네임</label><ButtonClearable id="input-nickname" defaultValue="입력된 값" /></div>
  <ButtonClearable type="search" label="검색" placeholder="검색어를 입력하세요" prefix={<Icon name="search" />} />
</>`,vue:`<div class="input_field input_field_fit"><label class="form_field-label" for="input-search">검색어</label><Input id="input-search" clearable placeholder="플레이스홀더" /></div>
<div class="input_field input_field_fit"><label class="form_field-label" for="input-nickname">닉네임</label><Input id="input-nickname" clearable model-value="입력된 값" /></div>
${M(`standalone-search`,`검색`)}<Input id="standalone-search" type="search" clearable placeholder="검색어를 입력하세요"><template #prefix><Icon name="search" /></template></Input>`},type:{html:[k(`input-type-text`,`텍스트`,w(`<input id="input-type-text" class="input" type="text" placeholder="텍스트">`)),k(`input-type-password`,`비밀번호`,w(`<input id="input-type-password" class="input" type="password" placeholder="비밀번호">`)),k(`input-type-email`,`이메일`,w(`<input id="input-type-email" class="input" type="email" placeholder="name@example.com">`)),k(`input-type-tel`,`전화번호`,w(`<input id="input-type-tel" class="input" type="tel" placeholder="전화번호">`)),k(`input-type-url`,`URL`,w(`<input id="input-type-url" class="input" type="url" placeholder="URL">`)),k(`input-type-search`,`검색`,w(`<input id="input-type-search" class="input" type="search" placeholder="검색">`)),k(`input-type-number`,`숫자`,`<input id="input-type-number" class="input" type="number" placeholder="숫자">`),k(`input-type-date`,`날짜`,`<input id="input-type-date" class="input" type="date" placeholder="날짜">`),k(`input-type-time`,`시간`,`<input id="input-type-time" class="input" type="time" placeholder="시간">`)].join(`
`),react:`<>
  ${A(`input-type-text`,`텍스트`,`<ButtonClearable id="input-type-text" type="text" placeholder="텍스트" />`)}
  ${A(`input-type-password`,`비밀번호`,`<ButtonClearable id="input-type-password" type="password" placeholder="비밀번호" />`)}
  ${A(`input-type-email`,`이메일`,`<ButtonClearable id="input-type-email" type="email" placeholder="name@example.com" />`)}
  ${A(`input-type-tel`,`전화번호`,`<ButtonClearable id="input-type-tel" type="tel" placeholder="전화번호" />`)}
  ${A(`input-type-url`,`URL`,`<ButtonClearable id="input-type-url" type="url" placeholder="URL" />`)}
  ${A(`input-type-search`,`검색`,`<ButtonClearable id="input-type-search" type="search" placeholder="검색" />`)}
  ${A(`input-type-number`,`숫자`,`<Input id="input-type-number" type="number" placeholder="숫자" />`)}
  ${A(`input-type-date`,`날짜`,`<Input id="input-type-date" type="date" placeholder="날짜" />`)}
  ${A(`input-type-time`,`시간`,`<Input id="input-type-time" type="time" placeholder="시간" />`)}
</>`,vue:`${j(`input-type-text`,`텍스트`,`<Input id="input-type-text" type="text" clearable placeholder="텍스트" />`)}
${j(`input-type-password`,`비밀번호`,`<Input id="input-type-password" type="password" clearable placeholder="비밀번호" />`)}
${j(`input-type-email`,`이메일`,`<Input id="input-type-email" type="email" clearable placeholder="name@example.com" />`)}
${j(`input-type-tel`,`전화번호`,`<Input id="input-type-tel" type="tel" clearable placeholder="전화번호" />`)}
${j(`input-type-url`,`URL`,`<Input id="input-type-url" type="url" clearable placeholder="URL" />`)}
${j(`input-type-search`,`검색`,`<Input id="input-type-search" type="search" clearable placeholder="검색" />`)}
${j(`input-type-number`,`숫자`,`<Input id="input-type-number" type="number" placeholder="숫자" />`)}
${j(`input-type-date`,`날짜`,`<Input id="input-type-date" type="date" placeholder="날짜" />`)}
${j(`input-type-time`,`시간`,`<Input id="input-type-time" type="time" placeholder="시간" />`)}`},kind:{html:`<div class="form_field"><p class="form_field-label" id="card-label">카드번호</p><div class="input_split" role="group" aria-labelledby="card-label">${[1,2,3,4].map(e=>`${e>1?`<span class="input_split_sep" aria-hidden="true">-</span>`:``}<label class="display_contents"><span class="input_group-label_hidden">카드번호 ${e}번째 묶음</span><input class="input" type="${e>2?`password`:`text`}" inputmode="numeric" maxlength="4" placeholder="0000"></label>`).join(``)}</div><p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
<div class="form_field"><p class="form_field-label" id="otp-label">인증번호 (OTP)</p><div class="input_otp" role="group" aria-labelledby="otp-label">${[1,2,3,4,5,6].map(e=>`<label class="display_contents"><span class="input_group-label_hidden">인증번호 ${e}자리</span><input class="input" type="text" inputmode="numeric" maxlength="1"></label>`).join(``)}</div><p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
${k(`phone`,`휴대폰 번호`,`<div class="input_group"><span class="input_group-addon">+82</span><input id="phone" class="input" type="tel" placeholder="10-0000-0000"><button class="btn btn_outline color_primary btn_sm" type="button"><span class="btn_label">인증요청</span></button></div>`)}
${k(`amount`,`결제 금액`,w(`<input id="amount" class="input" type="text" inputmode="numeric" placeholder="0">`,{prefix:`₩`,suffix:`원`}))}`,react:`<>
  <div className="form_field"><p className="form_field-label" id="card-label">카드번호</p><div className="input_split" role="group" aria-labelledby="card-label">${[1,2,3,4].map(e=>`${e>1?`<span className="input_split_sep" aria-hidden="true">-</span>`:``}<ImplicitInput label="카드번호 ${e}번째 묶음"${e>2?` type="password"`:``} inputMode="numeric" maxLength={4} placeholder="0000" />`).join(``)}</div><p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
  <div className="form_field"><p className="form_field-label" id="otp-label">인증번호 (OTP)</p><div className="input_otp" role="group" aria-labelledby="otp-label">${[1,2,3,4,5,6].map(e=>`<ImplicitInput label="인증번호 ${e}자리" inputMode="numeric" maxLength={1} />`).join(``)}</div><p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
  ${A(`phone`,`휴대폰 번호`,`<div className="input_group"><span className="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div>`)}
  ${A(`amount`,`결제 금액`,`<ButtonClearable id="amount" inputMode="numeric" placeholder="0" prefix="₩" suffix="원" />`)}
</>`,vue:`<div class="form_field"><p class="form_field-label" id="card-label">카드번호</p><div class="input_split" role="group" aria-labelledby="card-label">${[1,2,3,4].map(e=>`${e>1?`<span class="input_split_sep" aria-hidden="true">-</span>`:``}<label class="display_contents"><span class="input_group-label_hidden">카드번호 ${e}번째 묶음</span><Input${e>2?` type="password"`:``} inputmode="numeric" maxlength="4" placeholder="0000" /></label>`).join(``)}</div><p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p></div>
<div class="form_field"><p class="form_field-label" id="otp-label">인증번호 (OTP)</p><div class="input_otp" role="group" aria-labelledby="otp-label">${[1,2,3,4,5,6].map(e=>`<label class="display_contents"><span class="input_group-label_hidden">인증번호 ${e}자리</span><Input inputmode="numeric" maxlength="1" /></label>`).join(``)}</div><p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p></div>
${j(`phone`,`휴대폰 번호`,`<div class="input_group"><span class="input_group-addon">+82</span><Input id="phone" type="tel" placeholder="10-0000-0000" /><Button variant="outline" size="sm" label="인증요청" /></div>`)}
${j(`amount`,`결제 금액`,`<Input id="amount" inputmode="numeric" clearable placeholder="0"><template #prefix>₩</template><template #suffix>원</template></Input>`)}`},size:{html:`${k(`input-sm`,`SM`,w(`<input id="input-sm" class="input input_sm" type="text" placeholder="input_sm">`))}
${k(`input-md`,`MD`,w(`<input id="input-md" class="input" type="text" placeholder="기본 크기">`))}
${k(`input-lg`,`LG`,w(`<input id="input-lg" class="input input_lg" type="text" placeholder="input_lg">`))}`,react:`<>
  ${A(`input-sm`,`SM`,`<ButtonClearable id="input-sm" size="sm" placeholder="input_sm" />`)}
  ${A(`input-md`,`MD`,`<ButtonClearable id="input-md" size="md" placeholder="기본 크기" />`)}
  ${A(`input-lg`,`LG`,`<ButtonClearable id="input-lg" size="lg" placeholder="input_lg" />`)}
</>`,vue:`${j(`input-sm`,`SM`,`<Input id="input-sm" size="sm" clearable placeholder="input_sm" />`)}
${j(`input-md`,`MD`,`<Input id="input-md" size="md" clearable placeholder="기본 크기" />`)}
${j(`input-lg`,`LG`,`<Input id="input-lg" size="lg" clearable placeholder="input_lg" />`)}`},width:{html:`${k(`input-full`,`전체 너비`,w(`<input id="input-full" class="input" type="text" placeholder="width: 100%">`))}
<div class="form_field form_field_fit"><label class="form_field-label" for="input-fit">제한 너비</label>${w(`<input id="input-fit" class="input" type="text" placeholder="최대 320px">`)}</div>
${M(`width-addon`,`아이디`)}${w(`<input id="width-addon" class="input" type="text" placeholder="애드온 그룹 최대 320px">`,{prefix:`@`,fit:!0})}`,react:`<>
  ${A(`input-full`,`전체 너비`,`<ButtonClearable id="input-full" placeholder="width: 100%" />`)}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="input-fit">제한 너비</label><ButtonClearable id="input-fit" placeholder="최대 320px" /></div>
  <ButtonClearable wrapperClassName="input_fit" label="아이디" placeholder="애드온 그룹 최대 320px" prefix="@" />
</>`,vue:`${j(`input-full`,`전체 너비`,`<Input id="input-full" clearable placeholder="width: 100%" />`)}
<div class="form_field form_field_fit"><label class="form_field-label" for="input-fit">제한 너비</label><Input id="input-fit" clearable placeholder="최대 320px" /></div>
${M(`width-addon`,`아이디`)}<Input id="width-addon" class="input_fit" clearable placeholder="애드온 그룹 최대 320px"><template #prefix>@</template></Input>`},group:{html:`${M(`group-domain`,`도메인`)}${w(`<input id="group-domain" class="input" type="text" placeholder="example.com">`,{prefix:`https://`})}
${M(`group-user`,`사용자명`)}${w(`<input id="group-user" class="input" type="text" placeholder="username">`,{prefix:`@`})}
${M(`group-amount`,`결제 금액`)}${w(`<input id="group-amount" class="input" type="text" inputmode="numeric" placeholder="0">`,{prefix:`₩`,suffix:`KRW`})}`,react:`<>
  <ButtonClearable label="도메인" placeholder="example.com" prefix="https://" />
  <ButtonClearable label="사용자명" placeholder="username" prefix="@" />
  <ButtonClearable label="결제 금액" inputMode="numeric" placeholder="0" prefix="₩" suffix="KRW" />
</>`,vue:`${M(`group-domain`,`도메인`)}<Input id="group-domain" clearable placeholder="example.com"><template #prefix>https://</template></Input>
${M(`group-user`,`사용자명`)}<Input id="group-user" clearable placeholder="username"><template #prefix>@</template></Input>
${M(`group-amount`,`결제 금액`)}<Input id="group-amount" clearable inputmode="numeric" placeholder="0"><template #prefix>₩</template><template #suffix>KRW</template></Input>`},required:{html:`<div class="form_field form_field_fit"><label class="form_field-label" for="required-email">이메일<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label>${w(`<input id="required-email" class="input" type="email" placeholder="name@example.com" required aria-required="true">`)}<p class="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`,react:`<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="required-email">이메일<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><ButtonClearable id="required-email" type="email" placeholder="name@example.com" required aria-required="true" /><p className="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`,vue:`<div class="form_field form_field_fit"><label class="form_field-label" for="required-email">이메일<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Input id="required-email" type="email" clearable placeholder="name@example.com" required aria-required="true" /><p class="form_field-hint">업무용 이메일을 입력해 주세요.</p></div>`},state:{html:`${k(`state-default`,`기본`,w(`<input id="state-default" class="input" type="text" placeholder="입력 가능">`))}
${k(`state-disabled`,`비활성`,w(`<input id="state-disabled" class="input" type="text" value="수정할 수 없음" disabled>`,{value:`수정할 수 없음`,inactive:!0}))}
${k(`state-readonly`,`읽기 전용`,w(`<input id="state-readonly" class="input" type="text" value="읽기만 가능" readonly>`,{value:`읽기만 가능`,inactive:!0}))}
${k(`state-error`,`에러`,w(`<input id="state-error" class="input is-error" type="text" value="invalid-email" aria-invalid="true" aria-describedby="state-error-message">`,{value:`invalid-email`}),`<p class="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>`)}
${k(`state-success`,`성공`,w(`<input id="state-success" class="input is-success" type="text" value="uxkm_user" aria-describedby="state-success-message">`,{value:`uxkm_user`}),`<p class="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>`)}`,react:`<>
  ${A(`state-default`,`기본`,`<ButtonClearable id="state-default" placeholder="입력 가능" />`)}
  ${A(`state-disabled`,`비활성`,`<ButtonClearable id="state-disabled" defaultValue="수정할 수 없음" disabled />`)}
  ${A(`state-readonly`,`읽기 전용`,`<ButtonClearable id="state-readonly" defaultValue="읽기만 가능" readOnly />`)}
  ${A(`state-error`,`에러`,`<ButtonClearable id="state-error" error defaultValue="invalid-email" aria-describedby="state-error-message" />`,`<p className="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>`)}
  ${A(`state-success`,`성공`,`<ButtonClearable id="state-success" className="is-success" defaultValue="uxkm_user" aria-describedby="state-success-message" />`,`<p className="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>`)}
</>`,vue:`${j(`state-default`,`기본`,`<Input id="state-default" clearable placeholder="입력 가능" />`)}
${j(`state-disabled`,`비활성`,`<Input id="state-disabled" clearable model-value="수정할 수 없음" disabled />`)}
${j(`state-readonly`,`읽기 전용`,`<Input id="state-readonly" clearable model-value="읽기만 가능" readonly />`)}
${j(`state-error`,`에러`,`<Input id="state-error" clearable error model-value="invalid-email" aria-describedby="state-error-message" />`,`<p class="form_field-error" id="state-error-message" role="alert">올바른 이메일 형식이 아닙니다.</p>`)}
${j(`state-success`,`성공`,`<Input id="state-success" clearable class="is-success" model-value="uxkm_user" aria-describedby="state-success-message" />`,`<p class="form_field-success" id="state-success-message" role="status">사용 가능한 아이디입니다.</p>`)}`},clearable:{html:`${M(`clear-text`,`텍스트`)}${w(`<input id="clear-text" class="input" type="text" value="지울 수 있는 값">`,{value:`지울 수 있는 값`})}
${M(`clear-search`,`검색`)}${w(`<input id="clear-search" class="input" type="search" value="검색어">`,{value:`검색어`,prefix:O})}
${M(`clear-readonly`,`읽기 전용`)}${w(`<input id="clear-readonly" class="input" type="text" value="수정 불가" readonly>`,{value:`수정 불가`,inactive:!0})}`,react:`<>
  <ButtonClearable label="텍스트" defaultValue="지울 수 있는 값" />
  <ButtonClearable label="검색" type="search" defaultValue="검색어" prefix={<Icon name="search" />} />
  <ButtonClearable label="읽기 전용" defaultValue="수정 불가" readOnly />
</>`,vue:`${M(`clear-text`,`텍스트`)}<Input id="clear-text" clearable model-value="지울 수 있는 값" />
${M(`clear-search`,`검색`)}<Input id="clear-search" type="search" clearable model-value="검색어"><template #prefix><Icon name="search" /></template></Input>
${M(`clear-readonly`,`읽기 전용`)}<Input id="clear-readonly" clearable model-value="수정 불가" readonly />`},example:{html:`<form class="form form_vertical form_fit form_compact"><div class="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>${k(`login-id`,`아이디`,w(`<input id="login-id" class="input is-success" type="text" value="uxkm_user" aria-invalid="false" aria-describedby="login-id-success">`,{value:`uxkm_user`}),`<p id="login-id-success" class="form_field-success" role="status">사용 가능한 아이디입니다.</p>`)}${k(`login-password`,`비밀번호`,w(`<input id="login-password" class="input is-error input_masked" type="password" value="1234" aria-invalid="true" aria-describedby="login-password-error">`,{value:`1234`}),`<p id="login-password-error" class="form_field-error" role="alert">8자 이상 입력해 주세요.</p>`)}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">로그인</span></button><button class="btn btn_ghost" type="button"><span class="btn_label">취소</span></button></div></form>`,react:`<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>
  <div className="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>
  ${A(`login-id`,`아이디`,`<ButtonClearable id="login-id" className="is-success" defaultValue="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" />`,`<p id="login-id-success" className="form_field-success" role="status">사용 가능한 아이디입니다.</p>`)}
  ${A(`login-password`,`비밀번호`,`<ButtonClearable id="login-password" type="password" error defaultValue="1234" aria-describedby="login-password-error" />`,`<p id="login-password-error" className="form_field-error" role="alert">8자 이상 입력해 주세요.</p>`)}
  <div className="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div>
</form>`,vue:`<form class="form form_vertical form_fit form_compact" @submit.prevent>
  <div class="alert color_danger" role="alert"><strong>입력 내용을 확인해 주세요</strong></div>
  ${j(`login-id`,`아이디`,`<Input id="login-id" clearable class="is-success" model-value="uxkm_user" aria-invalid="false" aria-describedby="login-id-success" />`,`<p id="login-id-success" class="form_field-success" role="status">사용 가능한 아이디입니다.</p>`)}
  ${j(`login-password`,`비밀번호`,`<Input id="login-password" type="password" clearable error model-value="1234" aria-describedby="login-password-error" />`,`<p id="login-password-error" class="form_field-error" role="alert">8자 이상 입력해 주세요.</p>`)}
  <div class="form_actions"><Button type="submit" label="로그인" /><Button variant="ghost" label="취소" /></div>
</form>`}},P=`function ButtonClearable({ defaultValue = '', prefix, suffix, wrapperClassName = '', label, ...props }) {
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
}`,F=`function ImplicitInput({ label, ...props }) {
  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Input {...props} /></label>;
}`,I=Object.fromEntries(Object.entries(N).map(([e,t])=>[e,E(e,t)]))})))()}var R,z,B,V;function H(){return(H=e((()=>{R=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],z=(e,t,n)=>({title:e,description:n,tables:[{columns:R,rows:t}]}),B=[{name:`value · defaultValue`,type:`string | number`,default:`— · ''`,description:`제어 값과 비제어 초기 값입니다.`},{name:`type`,type:`HTML input type`,default:`'text'`,description:`텍스트, 이메일, 비밀번호, 숫자, 검색 등의 입력 타입입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`입력 높이와 글자 크기입니다.`},{name:`placeholder`,type:`string`,default:`—`,description:`값이 없을 때 표시할 안내입니다.`},{name:`disabled · readOnly`,type:`boolean`,default:`false`,description:`비활성 및 읽기 전용 상태입니다.`},{name:`error`,type:`boolean`,default:`false`,description:`is-error와 aria-invalid를 적용합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`input_block 클래스를 적용합니다.`},{name:`clearable`,type:`boolean`,default:`false`,description:`값이 있을 때 접근 가능한 지우기 버튼을 표시합니다.`},{name:`prefix · suffix`,type:`ReactNode`,default:`—`,description:`앞뒤 input_group-addon 콘텐츠입니다.`},{name:`className · ...props`,type:`string · input attributes`,default:`—`,description:`추가 클래스와 네이티브 input 속성입니다.`}],V=[z(`React · Next.js API · Props`,B,`Next.js는 @uxkm/react/input을 재사용합니다.`),z(`React · Next.js API · Events`,[{name:`onChange · onPaste · onClear`,type:`event handler`,default:`—`,description:`값 변경, 붙여넣기, 지우기 콜백입니다.`}]),z(`Vue · Nuxt API`,[{name:`v-model / model-value`,type:`string | number`,default:`''`,description:`입력 값과 update:modelValue 이벤트입니다.`},{name:`size · type · placeholder`,type:`string`,default:`'md' · 'text' · —`,description:`크기, 타입, 안내 문구입니다.`},{name:`disabled · error · block · clearable`,type:`boolean`,default:`false`,description:`상태와 표시 옵션입니다.`},{name:`#prefix · #suffix`,type:`slot`,default:`—`,description:`앞뒤 애드온 슬롯입니다.`},{name:`@clear`,type:`event`,default:`—`,description:`지우기 버튼을 누를 때 발생합니다.`}],`Nuxt는 @uxkm/vue/input을 재사용합니다.`),z(`HTML · Gulp · 클래스`,[{name:`input · input_sm · input_lg · input_fit`,type:`class`,default:`—`,description:`입력 루트, 크기, 최대 너비입니다.`},{name:`display_contents · input_group-label_hidden`,type:`class`,default:`—`,description:`암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.`},{name:`input_group · input_group-addon`,type:`class`,default:`—`,description:`앞뒤 애드온 그룹입니다.`},{name:`input_clearable · input_clear`,type:`class`,default:`—`,description:`입력 지우기 래퍼와 버튼입니다.`},{name:`input_split · input_otp · input_row`,type:`class`,default:`—`,description:`분할 입력, OTP, 복합 행 패턴입니다.`},{name:`is-error · is-success · input_masked`,type:`class`,default:`—`,description:`검증 및 마스킹 상태입니다.`}]),z(`디자인 토큰`,[{name:`--input-max-width`,type:`length`,default:`320px`,description:`fit 변형의 최대 너비입니다.`},{name:`--input-clear-size · --input-clear-offset`,type:`length`,default:`1.25rem · .75rem`,description:`지우기 버튼 크기와 위치입니다.`},{name:`--input-font-masked · --input-masked-letter-spacing`,type:`font · length`,default:`'pass' · .08em`,description:`비밀번호 마스킹 표시입니다.`}])]})))()}function U(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...h(),...e.components};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(_,{of:n}),`
`,(0,G.jsx)(t.h1,{id:`input`,children:`Input`}),`
`,(0,G.jsx)(t.p,{children:`텍스트·숫자·검색 등 한 줄 입력을 위한 필드 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,G.jsxs)(t.p,{children:[`모든 input에는 연결된 label을 제공합니다. 일반 필드는 `,(0,G.jsx)(t.code,{children:`label[for]`}),`와 `,(0,G.jsx)(t.code,{children:`id`}),`를 연결하고, 카드번호·OTP처럼 여러 input이 하나의 그룹을 이루는 경우에는 그룹명을 `,(0,G.jsx)(t.code,{children:`aria-labelledby`}),`로 연결한 뒤 각 input을 `,(0,G.jsx)(t.code,{children:`display_contents`}),` label로 감싸 암묵적으로 연결합니다. 화면에 레이블을 표시하지 않는 검색·애드온 입력은 `,(0,G.jsx)(t.code,{children:`input_group-label_hidden`}),` 레이블을 사용합니다. 클리어 버튼이 있는 입력은 label 안에 다른 버튼을 중첩하지 않도록 숨김 label과 input을 명시적으로 연결합니다.`]}),`
`,(0,G.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,G.jsx)(t.p,{children:`레이블과 힌트 텍스트가 포함된 기본 폼 필드입니다.`}),`
`,(0,G.jsx)(v,{of:p,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.basic}),`
`,(0,G.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,G.jsxs)(t.p,{children:[(0,G.jsx)(t.code,{children:`form_field`}),` 없이 `,(0,G.jsx)(t.code,{children:`input_field`}),`로 레이블과 input을 묶을 수 있습니다. 보이는 레이블 또는 `,(0,G.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,G.jsx)(v,{of:s,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.standalone}),`
`,(0,G.jsx)(t.h2,{id:`입력-타입`,children:`입력 타입`}),`
`,(0,G.jsxs)(t.p,{children:[`HTML input type에 따라 브라우저 기본 UI가 적용되며 `,(0,G.jsx)(t.code,{children:`input`}),` 클래스는 모든 타입에 공통으로 사용합니다.`]}),`
`,(0,G.jsx)(v,{of:i,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.type}),`
`,(0,G.jsx)(t.h2,{id:`입력-종류`,children:`입력 종류`}),`
`,(0,G.jsxs)(t.p,{children:[`결제·본인인증 등 도메인 입력은 `,(0,G.jsx)(t.code,{children:`input_split`}),`, `,(0,G.jsx)(t.code,{children:`input_otp`}),`, `,(0,G.jsx)(t.code,{children:`input_group`}),`, `,(0,G.jsx)(t.code,{children:`input_row`}),`를 조합합니다. `,(0,G.jsx)(t.code,{children:`inputMode="numeric"`}),` 입력은 숫자만 허용합니다.`]}),`
`,(0,G.jsx)(v,{of:l,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.kind}),`
`,(0,G.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,G.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,G.jsx)(v,{of:r,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.size}),`
`,(0,G.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,G.jsxs)(t.p,{children:[`기본은 부모 너비 100%이며 `,(0,G.jsx)(t.code,{children:`input_fit`}),`, `,(0,G.jsx)(t.code,{children:`input_field_fit`}),`, `,(0,G.jsx)(t.code,{children:`form_field_fit`}),`, `,(0,G.jsx)(t.code,{children:`form_fit`}),`으로 최대 320px까지 제한합니다.`]}),`
`,(0,G.jsx)(v,{of:a,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.width}),`
`,(0,G.jsx)(t.h2,{id:`input-group`,children:`Input Group`}),`
`,(0,G.jsx)(t.p,{children:`앞뒤에 텍스트나 아이콘 애드온을 붙일 수 있습니다.`}),`
`,(0,G.jsx)(v,{of:o,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.group}),`
`,(0,G.jsx)(t.h2,{id:`필수-필드`,children:`필수 필드`}),`
`,(0,G.jsxs)(t.p,{children:[(0,G.jsx)(t.code,{children:`required`}),` 속성과 `,(0,G.jsx)(t.code,{children:`form_field-required`}),`로 필수 입력을 표시합니다.`]}),`
`,(0,G.jsx)(v,{of:f,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.required}),`
`,(0,G.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,G.jsx)(t.p,{children:`disabled, readonly, error, success 상태를 텍스트 메시지와 적절한 aria 속성으로 함께 전달합니다.`}),`
`,(0,G.jsx)(v,{of:m,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.state}),`
`,(0,G.jsx)(t.h2,{id:`입력-삭제`,children:`입력 삭제`}),`
`,(0,G.jsxs)(t.p,{children:[(0,G.jsx)(t.code,{children:`clearable`}),`은 값이 있을 때 지우기 버튼을 표시하고, readonly와 disabled에서는 숨깁니다. 지운 뒤 입력으로 포커스를 돌려줍니다.`]}),`
`,(0,G.jsx)(v,{of:c,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.clearable}),`
`,(0,G.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,G.jsxs)(t.p,{children:[`유효성 검사 결과는 색상만으로 전달하지 않고 `,(0,G.jsx)(t.code,{children:`aria-invalid`}),`, `,(0,G.jsx)(t.code,{children:`aria-describedby`}),`, `,(0,G.jsx)(t.code,{children:`role="alert"`}),`, `,(0,G.jsx)(t.code,{children:`role="status"`}),`를 함께 사용합니다.`]}),`
`,(0,G.jsx)(v,{of:d,sourceState:`none`}),`
`,(0,G.jsx)(S,{examples:I.example}),`
`,(0,G.jsx)(C,{sections:V})]})}function W(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,G.jsx)(t,{...e,children:(0,G.jsx)(U,{...e})}):U(e)}var G;function K(){return(K=e((()=>{G=t(),g(),y(),b(),x(),L(),H(),u()})))()}K();export{W as default};