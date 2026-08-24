import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Alert.stories-BvLIwKZQ.js";import{i as f,r as p}from"./react-DSvVgjCn.js";import{c as m,r as h,u as g}from"./blocks-CkHyEh4O.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-D9Q6nkXJ.js";function x({color:e=`info`,title:t,description:n,size:r=`md`,banner:i=!1,closable:a=!1,showIcon:o=!0,role:s=`alert`,actions:c}){let l=e===`danger`?`color_error`:`color_${e}`,u=r===`md`?``:` alert_${r}`,d=i?` alert_banner`:``,f=t?`\n    <div class="alert_title">${t}</div>`:``,p=c?`\n    <div class="alert_actions">\n      ${c}\n    </div>`:``,m=a?`
  <button type="button" class="alert_close" aria-label="알림 닫기">
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  </button>`:``;return`<div class="alert ${l}${u}${d}" data-component="Alert" role="${s}">${o?`
  <svg
    class="alert_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
${C[e]}
  </svg>`:``}
  <div class="alert_body">${f}
    <p class="alert_desc">${n}</p>${p}
  </div>${m}
</div>`}function S(e,t){let n=e===`actions`,r=e===`context`,i=[`import Alert from '@uxkm/react/alert';`,n&&`import Button from '@uxkm/react/button';`,(n||r)&&`import Link from '@uxkm/react/link';`].filter(Boolean).join(`
`),a=[`import Alert from '@uxkm/vue/alert';`,n&&`import Button from '@uxkm/vue/button';`,(n||r)&&`import Link from '@uxkm/vue/link';`].filter(Boolean).join(`
`),o=`${i}

export function Example() {
  return (
${T(t.react,4)}
  );
}`,s=`<script setup>
${a}
<\/script>

<template>
${T(t.vue,2)}
</template>`;return[{id:`html`,label:`HTML`,fileName:`Alert.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`alert.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/alert · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/alert · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/alert · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/alert · ${e}`,code:o}]}var C,w,T,E;function D(){return(D=e((()=>{C={info:`    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>`,success:`    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M22 4 12 14.01l-3-3"></path>`,warning:`    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <path d="M12 9v4M12 17h.01"></path>`,danger:`    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6M9 9l6 6"></path>`},w={basic:{html:[x({color:`info`,title:`정보`,description:`변경 사항이 저장되었습니다.`}),x({color:`success`,title:`성공`,description:`요청이 성공적으로 처리되었습니다.`}),x({color:`warning`,title:`주의`,description:`세션이 곧 만료됩니다. 저장해 주세요.`}),x({color:`danger`,title:`오류`,description:`네트워크 연결을 확인해 주세요.`})].join(`

`),react:`<>
  <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
  <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
  <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
  <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
</>`,vue:`<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
<Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
<Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
<Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />`},descriptionOnly:{html:[x({description:`새 기능이 추가되었습니다. 설정에서 확인해 보세요.`}),x({color:`success`,description:`프로필이 업데이트되었습니다.`,role:`status`})].join(`

`),react:`<>
  <Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
  <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
</>`,vue:`<Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
<Alert color="success" role="status" description="프로필이 업데이트되었습니다." />`},noIcon:{html:[x({showIcon:!1,color:`warning`,title:`점검 안내`,description:`오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.`}),x({showIcon:!1,description:`이 페이지는 데모 목적으로만 사용됩니다.`})].join(`

`),react:`<>
  <Alert showIcon={false} color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
  <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
</>`,vue:`<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
<Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />`},size:{html:[x({title:`Small`,description:`폼 필드 아래 등 좁은 영역에 사용합니다.`,size:`sm`}),x({title:`Medium`,description:`기본 크기입니다.`}),x({title:`Large`,description:`페이지 상단 등 눈에 띄는 안내에 사용합니다.`,size:`lg`})].join(`

`),react:`<>
  <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
  <Alert color="info" title="Medium" description="기본 크기입니다." />
  <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
</>`,vue:`<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
<Alert color="info" title="Medium" description="기본 크기입니다." />
<Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />`},closable:{html:[x({title:`새 소식`,description:`대시보드가 새롭게 개편되었습니다.`,closable:!0}),x({color:`warning`,description:`브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.`,closable:!0})].join(`

`),react:`<>
  <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
  <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
</>`,vue:`<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
<Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />`},actions:{html:[x({color:`danger`,title:`저장 실패`,description:`변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.`,actions:`<button type="button" class="btn btn_filled btn_sm color_danger"><span class="btn_label">다시 시도</span></button>
      <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>`}),x({title:`이용 약관 변경`,description:`2026년 3월 1일부터 새 약관이 적용됩니다.`,actions:`<a href="#" class="link color_primary size_sm">약관 보기</a>
      <button type="button" class="btn btn_text btn_sm color_primary"><span class="btn_label">동의하기</span></button>`})].join(`

`),react:`<>
  <Alert
    color="danger"
    title="저장 실패"
    description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요."
    actions={<div className="alert_actions"><Button variant="filled" color="danger" size="sm" label="다시 시도" /><Button variant="ghost" size="sm" label="취소" /></div>}
  />
  <Alert
    color="info"
    title="이용 약관 변경"
    description="2026년 3월 1일부터 새 약관이 적용됩니다."
    actions={<div className="alert_actions"><Link href="#" size="sm" label="약관 보기" /><Button variant="text" color="primary" size="sm" label="동의하기" /></div>}
  />
</>`,vue:`<Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
  <template #actions><div class="alert_actions"><Button variant="filled" color="danger" size="sm" label="다시 시도" /><Button variant="ghost" size="sm" label="취소" /></div></template>
</Alert>
<Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
  <template #actions><div class="alert_actions"><Link href="#" size="sm" label="약관 보기" /><Button variant="text" color="primary" size="sm" label="동의하기" /></div></template>
</Alert>`},banner:{html:x({color:`warning`,description:`시스템 점검으로 일부 기능이 제한될 수 있습니다.`,banner:!0,closable:!0}),react:`<Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />`,vue:`<Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />`},context:{html:`${x({title:`업데이트 안내`,description:`새 버전이 출시되었습니다. <a href="#" class="link color_primary size_sm">릴리스 노트 보기</a>`})}

<form class="form form_vertical form_fit" novalidate>
${x({color:`danger`,title:`입력 내용을 확인해 주세요`,description:`이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.`})}
  <div class="form_field">
    <label class="form_field-label" for="alert-email">이메일</label>
    <input id="alert-email" class="input is-error" type="email" value="invalid-email" aria-invalid="true">
  </div>
</form>`,react:`<>
  <Alert color="info" title="업데이트 안내">
    새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
  </Alert>
  <form className="form form_vertical form_fit" noValidate>
  <Alert
    color="danger"
    title="입력 내용을 확인해 주세요"
    description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
  />
    <div className="form_field">
      <label className="form_field-label" htmlFor="alert-email">이메일</label>
      <input id="alert-email" className="input is-error" type="email" defaultValue="invalid-email" aria-invalid="true" />
    </div>
  </form>
</>`,vue:`<Alert color="info" title="업데이트 안내">
  새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
</Alert>
<form class="form form_vertical form_fit" novalidate>
  <Alert
    color="danger"
    title="입력 내용을 확인해 주세요"
    description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
  />
  <div class="form_field">
    <label class="form_field-label" for="alert-email">이메일</label>
    <input id="alert-email" class="input is-error" type="email" value="invalid-email" aria-invalid="true">
  </div>
</form>`}},T=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),E=Object.fromEntries(Object.entries(w).map(([e,t])=>[e,S(e,t)]))})))()}var O,k,A;function j(){return(j=e((()=>{O=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],k=(e,t,n)=>({title:e,description:n,tables:[{columns:O,rows:t}]}),A=[k(`React · Next.js API`,[{name:`color`,type:`'info' | 'success' | 'warning' | 'danger'`,default:`'info'`,description:`의미 색상입니다. danger는 color_error를 사용합니다.`},{name:`title · description`,type:`ReactNode`,default:`—`,description:`제목과 본문입니다.`},{name:`closable · showIcon · banner`,type:`boolean`,default:`false · true · false`,description:`닫기, 아이콘, 배너 변형입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`알림 크기입니다.`},{name:`icon · actions · children`,type:`ReactNode`,default:`—`,description:`커스텀 아이콘, 액션, 본문입니다.`},{name:`onClose`,type:`event handler`,default:`—`,description:`닫기 버튼 클릭 시 호출됩니다.`}],`Next.js는 @uxkm/react/alert를 재사용합니다.`),k(`Vue · Nuxt API`,[{name:`color · size · role`,type:`string`,default:`'info' · 'md' · 'alert'`,description:`색상, 크기, 접근성 역할입니다.`},{name:`closable · show-icon · banner`,type:`boolean`,default:`false · true · false`,description:`표시 옵션입니다.`},{name:`icon · actions · default`,type:`slot`,default:`—`,description:`커스텀 콘텐츠 슬롯입니다.`},{name:`@close`,type:`event`,default:`—`,description:`닫기 이벤트입니다.`}],`Nuxt는 @uxkm/vue/alert를 재사용합니다.`),k(`HTML · Gulp`,[{name:`alert · alert_sm · alert_lg · alert_banner`,type:`class`,default:`—`,description:`루트, 크기, 배너 클래스입니다.`},{name:`color_info · color_success · color_warning · color_error`,type:`class`,default:`—`,description:`의미 색상입니다.`},{name:`alert_icon · alert_body · alert_title · alert_desc`,type:`class`,default:`—`,description:`구조 파트입니다.`},{name:`close`,type:`CustomEvent`,default:`—`,description:`닫힌 뒤 발생합니다.`}]),k(`디자인 토큰`,[{name:`--alert-padding-* · --alert-gap`,type:`length`,default:`크기별 값`,description:`패딩과 간격입니다.`},{name:`--alert-icon-size · --alert-close-size`,type:`length`,default:`1.25rem`,description:`아이콘과 닫기 버튼 크기입니다.`},{name:`--alert-title-weight · --alert-desc-opacity`,type:`number`,default:`600 · 0.85`,description:`제목과 설명 표현입니다.`}])]})))()}function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...f(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m,{of:o}),`
`,(0,P.jsx)(t.h1,{id:`alert`,children:`Alert`}),`
`,(0,P.jsx)(t.p,{children:`정보·성공·경고·오류 메시지를 전달하는 알림 컴포넌트입니다.`}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.basic}),`
`,(0,P.jsx)(t.h2,{id:`설명만`,children:`설명만`}),`
`,(0,P.jsx)(h,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.descriptionOnly}),`
`,(0,P.jsx)(t.h2,{id:`아이콘-없음`,children:`아이콘 없음`}),`
`,(0,P.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.noIcon}),`
`,(0,P.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,P.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.size}),`
`,(0,P.jsx)(t.h2,{id:`닫기-가능`,children:`닫기 가능`}),`
`,(0,P.jsxs)(t.p,{children:[`닫기 버튼은 알림을 제거하고 `,(0,P.jsx)(t.code,{children:`close`}),`/`,(0,P.jsx)(t.code,{children:`onClose`}),` 이벤트를 발생시킵니다.`]}),`
`,(0,P.jsx)(h,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.closable}),`
`,(0,P.jsx)(t.h2,{id:`액션`,children:`액션`}),`
`,(0,P.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.actions}),`
`,(0,P.jsx)(t.h2,{id:`배너`,children:`배너`}),`
`,(0,P.jsx)(h,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.banner}),`
`,(0,P.jsx)(t.h2,{id:`문맥-속-사용`,children:`문맥 속 사용`}),`
`,(0,P.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(y,{examples:E.context}),`
`,(0,P.jsx)(b,{sections:A})]})}function N(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),p(),g(),_(),v(),D(),j(),d()})))()}F();export{N as default};