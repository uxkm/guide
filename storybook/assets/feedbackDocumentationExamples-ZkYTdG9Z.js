import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t({color:e=`info`,title:t,description:n,size:i=`md`,banner:a=!1,closable:o=!1,showIcon:s=!0,role:c=`alert`,actions:l}){let u=e===`danger`?`color_error`:`color_${e}`,d=i===`md`?``:` alert_${i}`,f=a?` alert_banner`:``,p=t?`\n    <div class="alert_title">${t}</div>`:``,m=l?`\n    <div class="alert_actions">\n      ${l}\n    </div>`:``,h=o?`
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
  </button>`:``;return`<div class="alert ${u}${d}${f}" data-component="Alert" role="${c}">${s?`
  <svg
    class="alert_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
${r[e]}
  </svg>`:``}
  <div class="alert_body">${p}
    <p class="alert_desc">${n}</p>${m}
  </div>${h}
</div>`}function n(e,t){let n=e===`actions`,r=e===`context`,i=[`import Alert from '@uxkm/react/alert';`,n&&`import Button from '@uxkm/react/button';`,(n||r)&&`import Link from '@uxkm/react/link';`].filter(Boolean).join(`
`),o=[`import Alert from '@uxkm/vue/alert';`,n&&`import Button from '@uxkm/vue/button';`,(n||r)&&`import Link from '@uxkm/vue/link';`].filter(Boolean).join(`
`),s=`${i}

export function Example() {
  return (
${a(t.react,/^\s*<>/.test(t.react)?2:4)}
  );
}`,c=`<script setup>
${o}
<\/script>

<template>
${a(t.vue,2)}
</template>`;return[{id:`html`,label:`HTML`,fileName:`Alert.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`alert.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/alert · ${e}`,code:c},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/alert · ${e}`,code:c},{id:`react`,label:`React`,fileName:`@uxkm/react/alert · ${e}`,code:s},{id:`next`,label:`Next`,fileName:`@uxkm/react/alert · ${e}`,code:s}]}var r,i,a,o;function s(){return(s=e((()=>{r={info:`    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>`,success:`    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M22 4 12 14.01l-3-3"></path>`,warning:`    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <path d="M12 9v4M12 17h.01"></path>`,danger:`    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6M9 9l6 6"></path>`},i={basic:{html:[t({color:`info`,title:`정보`,description:`변경 사항이 저장되었습니다.`}),t({color:`success`,title:`성공`,description:`요청이 성공적으로 처리되었습니다.`}),t({color:`warning`,title:`주의`,description:`세션이 곧 만료됩니다. 저장해 주세요.`}),t({color:`danger`,title:`오류`,description:`네트워크 연결을 확인해 주세요.`})].join(`

`),react:`<>
  <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
  <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
  <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
  <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
</>`,vue:`<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
<Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
<Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
<Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />`},descriptionOnly:{html:[t({description:`새 기능이 추가되었습니다. 설정에서 확인해 보세요.`}),t({color:`success`,description:`프로필이 업데이트되었습니다.`,role:`status`})].join(`

`),react:`<>
  <Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
  <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
</>`,vue:`<Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
<Alert color="success" role="status" description="프로필이 업데이트되었습니다." />`},noIcon:{html:[t({showIcon:!1,color:`warning`,title:`점검 안내`,description:`오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.`}),t({showIcon:!1,description:`이 페이지는 데모 목적으로만 사용됩니다.`})].join(`

`),react:`<>
  <Alert showIcon={false} color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
  <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
</>`,vue:`<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
<Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />`},size:{html:[t({title:`Small`,description:`폼 필드 아래 등 좁은 영역에 사용합니다.`,size:`sm`}),t({title:`Medium`,description:`기본 크기입니다.`}),t({title:`Large`,description:`페이지 상단 등 눈에 띄는 안내에 사용합니다.`,size:`lg`})].join(`

`),react:`<>
  <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
  <Alert color="info" title="Medium" description="기본 크기입니다." />
  <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
</>`,vue:`<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
<Alert color="info" title="Medium" description="기본 크기입니다." />
<Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />`},closable:{html:[t({title:`새 소식`,description:`대시보드가 새롭게 개편되었습니다.`,closable:!0}),t({color:`warning`,description:`브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.`,closable:!0})].join(`

`),react:`<>
  <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
  <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
</>`,vue:`<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
<Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />`},actions:{html:[t({color:`danger`,title:`저장 실패`,description:`변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.`,actions:`<button type="button" class="btn btn_filled btn_sm color_danger"><span class="btn_label">다시 시도</span></button>
      <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>`}),t({title:`이용 약관 변경`,description:`2026년 3월 1일부터 새 약관이 적용됩니다.`,actions:`<a href="#" class="link color_primary size_sm">약관 보기</a>
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
</Alert>`},banner:{html:t({color:`warning`,description:`시스템 점검으로 일부 기능이 제한될 수 있습니다.`,banner:!0,closable:!0}),react:`<Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />`,vue:`<Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />`},context:{html:`${t({title:`업데이트 안내`,description:`새 버전이 출시되었습니다. <a href="#" class="link color_primary size_sm">릴리스 노트 보기</a>`})}

<form class="form form_vertical form_fit" novalidate>
${t({color:`danger`,title:`입력 내용을 확인해 주세요`,description:`이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.`})}
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
</form>`}},a=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),o=Object.fromEntries(Object.entries(i).map(([e,t])=>[e,n(e,t)]))})))()}function c(e,t){let n=e===`action`,r=e===`placement`,i=[`import Snackbar from '@uxkm/react/snackbar';`,n&&`import Button from '@uxkm/react/button';`,r&&`import SnackbarRegion from '@uxkm/react/snackbar-region';`].filter(Boolean).join(`
`),a=[`import Snackbar from '@uxkm/vue/snackbar';`,n&&`import Button from '@uxkm/vue/button';`,r&&`import SnackbarRegion from '@uxkm/vue/snackbar-region';`].filter(Boolean).join(`
`),o=`${i}\n\nexport function Example() {\n  return (\n${u(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,s=`<script setup>\n${a}\n<\/script>\n\n<template>\n${u(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Snackbar.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`snackbar.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/snackbar · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/snackbar · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/snackbar · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/snackbar · ${e}`,code:o}]}var l,u,d;function f(){return(f=e((()=>{l={basic:{html:`<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">새로운 업데이트가 있습니다.</span></div>
<div class="snackbar color_success snackbar_motion-none is-open" role="status"><span class="snackbar_message">변경 사항을 저장했습니다.</span></div>
<div class="snackbar color_warning snackbar_motion-none is-open" role="status"><span class="snackbar_message">세션이 곧 만료됩니다.</span></div>
<div class="snackbar color_error snackbar_motion-none is-open" role="alert"><span class="snackbar_message">저장하지 못했습니다.</span></div>`,react:`<><Snackbar color="info" message="새로운 업데이트가 있습니다." /><Snackbar color="success" message="변경 사항을 저장했습니다." /><Snackbar color="warning" message="세션이 곧 만료됩니다." /><Snackbar color="danger" role="alert" message="저장하지 못했습니다." /></>`,vue:`<Snackbar color="info" message="새로운 업데이트가 있습니다." />
<Snackbar color="success" message="변경 사항을 저장했습니다." />
<Snackbar color="warning" message="세션이 곧 만료됩니다." />
<Snackbar color="danger" role="alert" message="저장하지 못했습니다." />`},simple:{html:`<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">인터넷 연결이 복구되었습니다.</span></div>`,react:`<Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>`,vue:`<Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>`},shape:{html:`<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">기본 스퀘어 라운드</span></div>
<div class="snackbar snackbar_round color_success snackbar_motion-none is-open" role="status"><span class="snackbar_message">비율형 캡슐 라운드</span></div>`,react:`<><Snackbar message="기본 스퀘어 라운드" /><Snackbar round color="success" message="비율형 캡슐 라운드" /></>`,vue:`<Snackbar message="기본 스퀘어 라운드" />
<Snackbar round color="success" message="비율형 캡슐 라운드" />`},motion:{html:`<div class="snackbar color_info snackbar_motion-fade is-open" role="status"><span class="snackbar_message">Fade 효과</span></div>
<div class="snackbar color_success snackbar_motion-slide snackbar_placement-middle-end is-open" role="status"><span class="snackbar_message">우측 Slide 효과</span></div>
<div class="snackbar color_warning snackbar_motion-none is-open" role="status"><span class="snackbar_message">전환 효과 없음</span></div>`,react:`<><Snackbar motion="fade" message="Fade 효과" /><Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" /><Snackbar motion="none" message="전환 효과 없음" /></>`,vue:`<Snackbar motion="fade" message="Fade 효과" />
<Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
<Snackbar motion="none" message="전환 효과 없음" />`},size:{html:`<div class="snackbar snackbar_sm color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">Small Snackbar</span></div>
<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">Medium Snackbar</span></div>
<div class="snackbar snackbar_lg color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">Large Snackbar</span></div>`,react:`<><Snackbar size="sm" message="Small Snackbar" /><Snackbar message="Medium Snackbar" /><Snackbar size="lg" message="Large Snackbar" /></>`,vue:`<Snackbar size="sm" message="Small Snackbar" />
<Snackbar message="Medium Snackbar" />
<Snackbar size="lg" message="Large Snackbar" />`},action:{html:`<div class="snackbar color_success snackbar_motion-none is-open" role="status"><span class="snackbar_message">항목을 삭제했습니다.</span><span class="snackbar_action"><button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">실행 취소</span></button></span></div>`,react:`<Snackbar color="success" message="항목을 삭제했습니다." action={({ close }) => <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />} />`,vue:`<Snackbar color="success" message="항목을 삭제했습니다.">
  <template #action="{ close }"><Button variant="ghost" size="sm" label="실행 취소" @click="close" /></template>
</Snackbar>`},closable:{html:`<div class="snackbar color_warning snackbar_motion-none is-open" role="status"><span class="snackbar_message">브라우저를 최신 버전으로 업데이트해 주세요.</span><button type="button" class="btn btn_ghost btn_icon-only snackbar_close" data-snackbar-close aria-label="알림 닫기">×</button></div>`,react:`<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." onClose={(reason) => console.log(reason)} />`,vue:`<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." @close="console.log" />`},duration:{html:`<div class="snackbar color_success snackbar_motion-fade" role="status" data-snackbar-duration="4000"><span class="snackbar_message">4초 후 자동으로 닫힙니다.</span></div>`,react:`<Snackbar duration={4000} color="success" message="4초 후 자동으로 닫힙니다." />`,vue:`<Snackbar :duration="4000" color="success" message="4초 후 자동으로 닫힙니다." />`},placement:{html:`<button type="button" class="btn btn_filled" data-snackbar-trigger="#saved-snackbar">Snackbar 호출</button>
<div class="snackbar_region snackbar_region-bottom-center"><div id="saved-snackbar" class="snackbar color_success snackbar_motion-slide snackbar_placement-bottom-center" role="status"><span class="snackbar_message">변경 사항을 저장했습니다.</span></div></div>`,react:`<SnackbarRegion placement="bottom-center"><Snackbar motion="slide" closable message="변경 사항을 저장했습니다." /></SnackbarRegion>`,vue:`<SnackbarRegion placement="bottom-center"><Snackbar motion="slide" closable message="변경 사항을 저장했습니다." /></SnackbarRegion>`}},u=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),d=Object.fromEntries(Object.entries(l).map(([e,t])=>[e,c(e,t)]))})))()}function p(e,t){let n=e===`footer`||e===`form`,r=e===`size`?`  const [size, setSize] = useState(null);`:e===`nested`?`  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);`:`  const [open, setOpen] = useState(${e===`open`?`true`:`false`});`,i=e===`size`?`const size = ref(null);`:e===`nested`?`const parentOpen = ref(false);
const childOpen = ref(false);`:`const open = ref(${e===`open`?`true`:`false`});`,a=`import { useState } from 'react';\nimport Modal from '@uxkm/react/modal';\nimport Button from '@uxkm/react/button';${n?`
import Input from '@uxkm/react/input';`:``}\n\nexport function Example() {\n${r}\n  return (\n${_(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,o=`<script setup>\nimport { ref } from 'vue';\nimport Modal from '@uxkm/vue/modal';\nimport Button from '@uxkm/vue/button';${n?`
import Input from '@uxkm/vue/input';`:``}\n${i}\n<\/script>\n\n<template>\n${_(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Modal.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`modal.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/modal · ${e}`,code:o},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/modal · ${e}`,code:o},{id:`react`,label:`React`,fileName:`@uxkm/react/modal · ${e}`,code:a},{id:`next`,label:`Next`,fileName:`@uxkm/react/modal · ${e}`,code:a}]}var m,h,g,_,ee;function te(){return(te=e((()=>{m=(e,t)=>`<button type="button" class="btn btn_filled color_primary" data-modal-trigger="#${e}" aria-controls="${e}">${t}</button>`,h=(e,t,n,r=``,i=``)=>`<div id="${e}" class="modal${r}" data-modal ${i} role="dialog" aria-modal="true" aria-labelledby="${e}-title" tabindex="-1" hidden>
  <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
  <div class="modal_dialog"><div class="modal_header"><h2 id="${e}-title" class="modal_title">${t}</h2><button type="button" class="modal_close" data-modal-close aria-label="닫기">×</button></div><div class="modal_body">${n}</div><div class="modal_footer"><button class="btn btn_ghost" data-modal-close>취소</button><button class="btn btn_filled color_primary" data-modal-close>확인</button></div></div>
</div>`,g={basic:{html:`${m(`modal-basic`,`모달 열기`)}\n${h(`modal-basic`,`알림`,`<p>Modal 대화상자 본문입니다.</p>`)}`,react:`<><Button label="모달 열기" onClick={() => setOpen(true)} /><Modal open={open} title="알림" onClose={() => setOpen(false)}><p>Modal 대화상자 본문입니다.</p></Modal></>`,vue:`<Button label="모달 열기" @click="open = true" /><Modal :open="open" title="알림" @close="open = false"><p>Modal 대화상자 본문입니다.</p></Modal>`},open:{html:h(`modal-open`,`알림`,`<p>로드 시 열린 상태로 표시되는 Modal입니다.</p>`,` is-open`).replace(` hidden`,``),react:`<Modal open={open} title="알림" onClose={() => setOpen(false)} footer={<><Button variant="ghost" label="취소" /><Button label="확인" /></>}><p>로드 시 열린 상태로 표시되는 Modal입니다.</p></Modal>`,vue:`<Modal :open="open" title="알림" @close="open = false"><p>로드 시 열린 상태로 표시되는 Modal입니다.</p><template #footer><Button variant="ghost" label="취소" /><Button label="확인" /></template></Modal>`},size:{html:`${m(`modal-size-sm`,`Small`)}\n${m(`modal-size-lg`,`Large`)}\n${h(`modal-size-sm`,`Small`,`<p>좁은 너비</p>`,` modal_sm`)}\n${h(`modal-size-lg`,`Large`,`<p>넓은 너비</p>`,` modal_lg`)}`,react:`<><Button label="Small" onClick={() => setSize('sm')} /><Button label="Large" onClick={() => setSize('lg')} /><Modal open={Boolean(size)} size={size} title="크기" onClose={() => setSize(null)} /></>`,vue:`<Button label="Small" @click="size = 'sm'" /><Button label="Large" @click="size = 'lg'" /><Modal :open="Boolean(size)" :size="size" title="크기" @close="size = null" />`},footer:{html:`${m(`modal-footer`,`새 항목 추가`)}\n${h(`modal-footer`,`새 항목 추가`,`<label>이름 <input class="input"></label>`)}`,react:`<Modal open={open} title="새 항목 추가" footer={<><Button variant="ghost" label="취소" /><Button label="저장" /></>}><Input label="이름" /></Modal>`,vue:`<Modal :open="open" title="새 항목 추가"><Input label="이름" /><template #footer><Button variant="ghost" label="취소" /><Button label="저장" /></template></Modal>`},footerAlign:{html:h(`modal-align`,`푸터 정렬`,`<p>균등 정렬</p>`).replace(`modal_footer"`,`modal_footer modal_footer-even"`),react:`<Modal open footerAlign="even" footer={<><Button label="취소" /><Button label="확인" /></>} />`,vue:`<Modal open footer-align="even"><template #footer><Button label="취소" /><Button label="확인" /></template></Modal>`},confirm:{html:`${m(`modal-confirm`,`삭제`)}\n${h(`modal-confirm`,`항목 삭제`,`<p>이 작업은 되돌릴 수 없습니다.</p>`,` modal_sm`)}`,react:`<Modal open={open} size="sm" title="항목 삭제" onClose={() => setOpen(false)}><p>이 작업은 되돌릴 수 없습니다.</p></Modal>`,vue:`<Modal :open="open" size="sm" title="항목 삭제" @close="open = false"><p>이 작업은 되돌릴 수 없습니다.</p></Modal>`},form:{html:`${m(`modal-form`,`프로필 편집`)}\n${h(`modal-form`,`프로필 편집`,`<label>이름 <input class="input" value="홍길동"></label>`)}`,react:`<Modal open={open} title="프로필 편집"><Input label="이름" defaultValue="홍길동" /></Modal>`,vue:`<Modal :open="open" title="프로필 편집"><Input label="이름" model-value="홍길동" /></Modal>`},scroll:{html:`${m(`modal-scroll`,`이용 약관 보기`)}\n${h(`modal-scroll`,`이용 약관`,`<p>긴 본문…</p>`,` modal_scrollable`)}`,react:`<Modal open={open} scrollable title="이용 약관"><p>긴 본문…</p></Modal>`,vue:`<Modal :open="open" scrollable title="이용 약관"><p>긴 본문…</p></Modal>`},nested:{html:`${m(`modal-parent`,`첫 번째 Modal 열기`)}\n${h(`modal-parent`,`첫 번째 Modal`,`<button data-modal-trigger="#modal-child">두 번째 Modal 열기</button>`)}\n${h(`modal-child`,`두 번째 Modal`,`<p>최상위 대화상자</p>`,` modal_sm`,`style="--modal-stack-level: 1"`)}`,react:`<><Modal open={parentOpen} title="첫 번째 Modal"><Button label="두 번째 Modal 열기" onClick={() => setChildOpen(true)} /></Modal><Modal open={childOpen} size="sm" title="두 번째 Modal" onClose={() => setChildOpen(false)} /></>`,vue:`<Modal :open="parentOpen" title="첫 번째 Modal"><Button label="두 번째 Modal 열기" @click="childOpen = true" /></Modal><Modal :open="childOpen" size="sm" title="두 번째 Modal" @close="childOpen = false" />`},noBackdrop:{html:`${m(`modal-plain`,`백드롭 없이 열기`)}\n${h(`modal-plain`,`백드롭 없음`,`<p>배경을 가리지 않습니다.</p>`,` modal_sm`,`data-modal-backdrop="false"`)}`,react:`<Modal open={open} backdrop={false} size="sm" title="백드롭 없음" onClose={() => setOpen(false)} />`,vue:`<Modal :open="open" :backdrop="false" size="sm" title="백드롭 없음" @close="open = false" />`}},_=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),ee=Object.fromEntries(Object.entries(g).map(([e,t])=>[e,p(e,t)]))})))()}function ne(e,t){let n=`import { useState } from 'react';\nimport Drawer from '@uxkm/react/drawer';\nimport Button from '@uxkm/react/button';\n\nexport function Example() {\n  const [open, setOpen] = useState(${e===`open`?`true`:`false`});\n  return (\n${x(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,r=`<script setup>\nimport { ref } from 'vue';\nimport Drawer from '@uxkm/vue/drawer';\nimport Button from '@uxkm/vue/button';\nconst open = ref(${e===`open`?`true`:`false`});\n<\/script>\n\n<template>\n${x(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Drawer.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`drawer.njk · ${e}`,code:t.html},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/drawer · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/drawer · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/drawer · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/drawer · ${e}`,code:n}]}var v,y,b,x,re;function ie(){return(ie=e((()=>{v=(e,t)=>`<button class="btn btn_filled color_primary" data-drawer-trigger="#${e}" aria-controls="${e}">${t}</button>`,y=(e,t,n,r=`drawer_placement-right`,i=``)=>`<div id="${e}" class="drawer" data-drawer ${i} role="dialog" aria-modal="true" aria-labelledby="${e}-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel ${r}"><div class="drawer_header"><h2 id="${e}-title" class="drawer_title">${t}</h2><button class="drawer_close" data-drawer-close aria-label="닫기">×</button></div><div class="drawer_body">${n}</div><div class="drawer_footer"><button class="btn btn_ghost" data-drawer-close>취소</button><button class="btn btn_filled color_primary" data-drawer-close>확인</button></div></div>
</div>`,b={basic:{html:`${v(`drawer-basic`,`Drawer 열기`)}\n${y(`drawer-basic`,`상세 정보`,`<p>Drawer 패널 본문입니다.</p>`)}`,react:`<><Button label="Drawer 열기" onClick={() => setOpen(true)} /><Drawer open={open} title="상세 정보" onClose={() => setOpen(false)}><p>Drawer 패널 본문입니다.</p></Drawer></>`,vue:`<Button label="Drawer 열기" @click="open = true" /><Drawer :open="open" title="상세 정보" @close="open = false"><p>Drawer 패널 본문입니다.</p></Drawer>`},open:{html:y(`drawer-open`,`알림`,`<p>로드 시 열린 Drawer입니다.</p>`).replace(`class="drawer"`,`class="drawer is-open"`).replace(` hidden`,``),react:`<Drawer defaultOpen title="알림"><p>로드 시 열린 Drawer입니다.</p></Drawer>`,vue:`<Drawer default-open title="알림"><p>로드 시 열린 Drawer입니다.</p></Drawer>`},placement:{html:`${v(`drawer-left`,`왼쪽`)}\n${y(`drawer-left`,`왼쪽 패널`,`<p>왼쪽에서 열립니다.</p>`,`drawer_placement-left`)}`,react:`<Drawer open={open} placement="left" title="왼쪽 패널" onClose={() => setOpen(false)} />`,vue:`<Drawer :open="open" placement="left" title="왼쪽 패널" @close="open = false" />`},size:{html:y(`drawer-lg`,`Large`,`<p>넓은 패널</p>`,`drawer_panel drawer_placement-right drawer_lg`).replace(`drawer_panel drawer_panel`,`drawer_panel`),react:`<Drawer open={open} size="lg" title="Large" />`,vue:`<Drawer :open="open" size="lg" title="Large" />`},footer:{html:`${v(`drawer-footer`,`항목 편집`)}\n${y(`drawer-footer`,`항목 편집`,`<label>이름 <input class="input"></label>`)}`,react:`<Drawer open={open} title="항목 편집" footer={<><Button variant="ghost" label="취소" /><Button label="저장" /></>} />`,vue:`<Drawer :open="open" title="항목 편집"><template #footer><Button variant="ghost" label="취소" /><Button label="저장" /></template></Drawer>`},footerAlign:{html:y(`drawer-align`,`푸터 정렬`,`<p>균등 정렬</p>`,`drawer_placement-bottom`).replace(`drawer_footer"`,`drawer_footer drawer_footer-even"`),react:`<Drawer open={open} placement="bottom" footerAlign="even" footer={<><Button label="취소" /><Button label="확인" /></>} />`,vue:`<Drawer :open="open" placement="bottom" footer-align="even"><template #footer><Button label="취소" /><Button label="확인" /></template></Drawer>`},extra:{html:y(`drawer-extra`,`주문 #1042`,`<p>주문 상세 정보</p>`).replace(`<button class="drawer_close"`,`<span class="tag">완료</span><button class="drawer_close"`),react:`<Drawer open title="주문 #1042" extra={<Tag>완료</Tag>} />`,vue:`<Drawer open title="주문 #1042"><template #extra><Tag>완료</Tag></template></Drawer>`},menu:{html:`${v(`drawer-menu`,`메뉴 열기`)}\n${y(`drawer-menu`,`앱 메뉴`,`<nav class="menu"><a class="menu_link" href="#dashboard">대시보드</a></nav>`,`drawer_placement-left`)}`,react:`<Drawer open={open} placement="left" title="앱 메뉴"><nav className="menu">대시보드 · 분석 · 설정</nav></Drawer>`,vue:`<Drawer :open="open" placement="left" title="앱 메뉴"><nav class="menu">대시보드 · 분석 · 설정</nav></Drawer>`},nested:{html:`${v(`drawer-parent`,`첫 번째 Drawer 열기`)}\n${y(`drawer-parent`,`첫 번째 Drawer`,`<button data-drawer-trigger="#drawer-child">두 번째 열기</button>`)}\n${y(`drawer-child`,`두 번째 Drawer`,`<p>최상위 패널</p>`,`drawer_placement-right drawer_sm`,`style="--drawer-stack-level: 1"`)}`,react:`<><Drawer open={parentOpen} title="첫 번째 Drawer" /><Drawer open={childOpen} size="sm" title="두 번째 Drawer" /></>`,vue:`<Drawer :open="parentOpen" title="첫 번째 Drawer" /><Drawer :open="childOpen" size="sm" title="두 번째 Drawer" />`},dragSheet:{html:`${v(`drawer-drag`,`드래그 시트 열기`)}\n${y(`drawer-drag`,`공유 · 액션`,`<p>하단 액션 시트입니다.</p>`,`drawer_placement-bottom drawer_draggable`,`data-drawer-draggable="true"`)}`,react:`<Drawer open={open} placement="bottom" draggable title="공유 · 액션"><p>하단 액션 시트입니다.</p></Drawer>`,vue:`<Drawer :open="open" placement="bottom" draggable title="공유 · 액션"><p>하단 액션 시트입니다.</p></Drawer>`},noBackdrop:{html:y(`drawer-plain`,`백드롭 없음`,`<p>패널만 표시합니다.</p>`,`drawer_placement-right drawer_sm`,`data-drawer-backdrop="false"`),react:`<Drawer open={open} noBackdrop size="sm" title="백드롭 없음" />`,vue:`<Drawer :open="open" no-backdrop size="sm" title="백드롭 없음" />`}},x=(e,t)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),re=Object.fromEntries(Object.entries(b).map(([e,t])=>[e,ne(e,t)]))})))()}function ae(e){let t=S[e];if(e===`hover`)return`import Popover from '@uxkm/react/popover';
import Link from '@uxkm/react/link';

export function HoverExample() {
  return (
    <p>결제 시 <Popover trigger="hover" panelLabel="에스크로 설명" triggerContent={<Link label="에스크로" />}>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Popover> 서비스를 이용할 수 있습니다.</p>
  );
}`;if(e===`form`)return`import Popover from '@uxkm/react/popover';
import Button from '@uxkm/react/button';
import Textarea from '@uxkm/react/textarea';

export function FormExample() {
  return (
    <Popover title="빠른 메모" triggerContent={<Button variant="outline" label="메모 추가" />} footer={<><Button variant="ghost" size="sm" label="취소" /><Button color="primary" size="sm" label="저장" /></>}>
      <div className="form_field"><label className="form_label" htmlFor="popover-memo-input">내용</label><Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" /></div>
    </Popover>
  );
}`;let n=t.props?.includes(`title=`)?``:t.heading?`panelLabel="${t.heading}" `:``,r=e===`footer`?` footer={<><Button variant="ghost" size="sm" label="취소" /><Button color="danger" size="sm" label="삭제" /></>}`:``;return`import Popover from '@uxkm/react/popover';\nimport Button from '@uxkm/react/button';\n\nexport function ${e[0].toUpperCase()+e.slice(1)}Example() {\n  return (\n    <Popover ${t.props?`${t.props} `:``}${n}triggerContent={<Button variant="outline" ${t.button||``} label="${t.label}" />}${r}>\n      <p>${t.body}</p>\n    </Popover>\n  );\n}`}function oe(e){let t=S[e];if(e===`hover`)return`<script setup>
import Popover from '@uxkm/vue/popover';
import Link from '@uxkm/vue/link';
<\/script>

<template>
  <p>결제 시 <Popover trigger="hover" panel-label="에스크로 설명"><template #trigger><Link label="에스크로" /></template>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Popover> 서비스를 이용할 수 있습니다.</p>
</template>`;if(e===`form`)return`<script setup>
import Popover from '@uxkm/vue/popover';
import Button from '@uxkm/vue/button';
import Textarea from '@uxkm/vue/textarea';
<\/script>

<template>
  <Popover title="빠른 메모">
    <template #trigger><Button variant="outline" label="메모 추가" /></template>
    <div class="form_field"><label class="form_label" for="popover-memo-input">내용</label><Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" /></div>
    <template #footer><Button variant="ghost" size="sm" label="취소" /><Button color="primary" size="sm" label="저장" /></template>
  </Popover>
</template>`;let n=(t.props||``).replace(`defaultOpen`,`default-open`).replace(`arrowAnchor`,`arrow-anchor`).replace(`noArrow`,`no-arrow`),r=n.includes(`title=`)?``:t.heading?`panel-label="${t.heading}" `:``,i=e===`footer`?`
    <template #footer><Button variant="ghost" size="sm" label="취소" /><Button color="danger" size="sm" label="삭제" /></template>`:``;return`<script setup>\nimport Popover from '@uxkm/vue/popover';\nimport Button from '@uxkm/vue/button';\n<\/script>\n\n<template>\n  <Popover ${n?`${n} `:``}${r.trim()}>\n    <template #trigger><Button variant="outline" ${t.button||``} label="${t.label}" /></template>\n    <p>${t.body}</p>${i}\n  </Popover>\n</template>`}function se(e){let t=S[e],n=[`popover`,e===`open`&&`is-open`,e===`size`&&`popover_sm`,e===`offset`&&`popover_offset-lg`,e===`placement`&&`popover_placement-top-center`,e===`arrowAnchor`&&`popover_arrow-anchor-target`,e===`noArrow`&&`popover_no-arrow`].filter(Boolean).join(` `),r=e===`footer`?`
    <div class="popover_footer"><button class="btn btn_ghost btn_sm">취소</button><button class="btn btn_filled color_danger btn_sm">삭제</button></div>`:e===`form`?`
    <div class="popover_footer"><button class="btn btn_ghost btn_sm">취소</button><button class="btn btn_filled color_primary btn_sm">저장</button></div>`:``,i=e===`form`?`<label class="form_label" for="popover-memo-input">내용</label><textarea id="popover-memo-input" class="textarea" rows="3" placeholder="메모를 입력하세요"></textarea>`:`<p>${t.body}</p>`;return`<div class="${n}" data-popover${e===`hover`?` data-popover-trigger="hover"`:``}>\n  <button class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="${e===`open`}">${t.label}</button>\n  <div class="popover_panel" role="dialog"${t.heading?` aria-label="${t.heading}"`:``}>\n    ${e===`noArrow`?``:`<span class="popover_arrow" aria-hidden="true"></span>`}\n    ${t.heading?`<div class="popover_title">${t.heading}</div>`:``}\n    <div class="popover_body">${i}</div>${r}\n  </div>\n</div>`}function ce(e){let t=se(e),n=oe(e),r=ae(e);return[{id:`html`,label:`HTML`,fileName:`Popover.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`popover.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/popover · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/popover · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/popover · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/popover · ${e}`,code:r}]}var le,S,ue;function de(){return(de=e((()=>{le=[`basic`,`noLabel`,`open`,`size`,`offset`,`title`,`footer`,`hover`,`trigger`,`placement`,`form`,`arrowAnchor`,`noArrow`],S={basic:{label:`Popover 열기`,heading:`안내`,body:`트리거를 클릭하면 이 패널이 표시됩니다.`},noLabel:{label:`라벨 없음`,body:`짧은 안내 문구만 필요할 때 사용합니다.`},open:{label:`열림`,heading:`열린 Popover`,body:`정적 데모용 열린 상태입니다.`,props:`open`,button:`variant="filled" color="primary"`},size:{label:`Small`,heading:`작은 Popover`,body:`작은 패널입니다.`,props:`size="sm"`,button:`size="sm"`},offset:{label:`lg`,heading:`lg`,body:`넓은 간격`,props:`offset="lg"`,button:`size="sm"`},title:{label:`도움말`,heading:`배송 안내`,body:`평일 오후 2시 이전 주문은 당일 출고됩니다.`,props:`title="배송 안내"`,button:`variant="ghost"`},footer:{label:`삭제 확인`,heading:`항목 삭제`,body:`이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`,props:`title="항목 삭제"`},hover:{label:`에스크로`,heading:`에스크로 설명`,body:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`,props:`trigger="hover"`},trigger:{label:`Button`,heading:`Button 트리거`,body:`버튼 트리거 예시입니다.`,button:`variant="filled" color="primary"`},placement:{label:`위`,heading:`위쪽 가운데 배치`,body:`트리거 위 · 가운데`,props:`placement="top-center"`,button:`size="sm"`},form:{label:`메모 추가`,heading:`빠른 메모`,body:`내용`,props:`title="빠른 메모"`},arrowAnchor:{label:`S`,heading:`target`,body:`화살표가 트리거 중앙을 가리킵니다.`,props:`arrowAnchor="target"`,button:`size="sm"`},noArrow:{label:`화살표 없음`,heading:`화살표 없는 Popover`,body:`화살표가 표시되지 않는 패널입니다.`,props:`noArrow`,button:`variant="ghost"`}},ue=Object.fromEntries(le.map(e=>[e,ce(e)]))})))()}function fe(e){let t=C[e];return e===`slot`?`import Tooltip from '@uxkm/react/tooltip';
import Button from '@uxkm/react/button';

export function SlotExample() {
  return <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>짧은 도움말 텍스트입니다.</Tooltip>;
}`:e===`inline`?`import Tooltip from '@uxkm/react/tooltip';\nimport Link from '@uxkm/react/link';\n\nexport function InlineExample() {\n  return <p>결제 시 <Tooltip content="${t.content}" triggerContent={<Link label="에스크로" />} /> 서비스를 이용할 수 있습니다.</p>;\n}`:e===`disabled`?`import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function DisabledExample() {\n  return <Tooltip content="${t.content}" triggerContent={<span tabIndex={0}><Button label="제출 불가" disabled /></span>} />;\n}`:`import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function ${e[0].toUpperCase()+e.slice(1)}Example() {\n  return <Tooltip ${t.props?`${t.props} `:``}content="${t.content}" triggerContent={<Button ${t.button||`variant="outline"`} label="${t.label}" />} />;\n}`}function pe(e){let t=C[e],n=(t.props||``).replace(`arrowAnchor`,`arrow-anchor`).replace(`noArrow`,`no-arrow`);return e===`slot`?`<script setup>
import Tooltip from '@uxkm/vue/tooltip';
import Button from '@uxkm/vue/button';
<\/script>
<template><Tooltip><template #trigger><Button variant="outline" label="슬롯 예시" /></template>짧은 도움말 텍스트입니다.</Tooltip></template>`:e===`inline`?`<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Link from '@uxkm/vue/link';\n<\/script>\n<template><p>결제 시 <Tooltip content="${t.content}"><template #trigger><Link label="에스크로" /></template></Tooltip> 서비스를 이용할 수 있습니다.</p></template>`:e===`disabled`?`<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n<\/script>\n<template><Tooltip content="${t.content}"><template #trigger><span tabindex="0"><Button variant="filled" color="primary" label="제출 불가" disabled /></span></template></Tooltip></template>`:`<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n<\/script>\n<template><Tooltip ${n?`${n} `:``}content="${t.content}"><template #trigger><Button ${t.button||`variant="outline"`} label="${t.label}" /></template></Tooltip></template>`}function me(e){let t=C[e];return`<span class="${[`tooltip`,e===`open`&&`is-open`,e===`size`&&`tooltip_sm`,e===`offset`&&`tooltip_offset-lg`,e===`placement`&&`tooltip_placement-top`,e===`inverse`&&`tooltip_inverse`,e===`arrowAnchor`&&`tooltip_arrow-anchor-target`,e===`noArrow`&&`tooltip_no-arrow`].filter(Boolean).join(` `)}" data-tooltip${e===`click`?` data-tooltip-trigger="click"`:``}>\n  <button class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-${e}">${t.label}</button>\n  <span class="tooltip_bubble" id="tooltip-${e}" role="tooltip" hidden>${e===`noArrow`?``:`<span class="tooltip_arrow" aria-hidden="true"></span>`}${t.content}</span>\n</span>`}function he(e){let t=me(e),n=pe(e),r=fe(e);return[{id:`html`,label:`HTML`,fileName:`Tooltip.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`tooltip.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/tooltip · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tooltip · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/tooltip · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/tooltip · ${e}`,code:r}]}var ge,C,_e;function ve(){return(ve=e((()=>{ge=[`basic`,`slot`,`open`,`size`,`offset`,`inline`,`trigger`,`click`,`placement`,`inverse`,`disabled`,`arrowAnchor`,`noArrow`],C={basic:{label:`마우스 오버`,content:`짧은 도움말 텍스트입니다.`},slot:{label:`슬롯 예시`,content:`짧은 도움말 텍스트입니다.`},open:{label:`열림`,content:`정적 데모용 열린 상태입니다.`,props:`open`,button:`variant="filled" color="primary"`},size:{label:`Small`,content:`작은 말풍선`,props:`size="sm"`,button:`variant="ghost" size="sm"`},offset:{label:`lg`,content:`넓은 간격`,props:`offset="lg"`,button:`variant="ghost" size="sm"`},inline:{label:`에스크로`,content:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`},trigger:{label:`Button`,content:`버튼 트리거 예시입니다.`,button:`variant="filled" color="primary"`},click:{label:`클릭하여 보기`,content:`클릭으로 열고 닫는 Tooltip입니다.`,props:`trigger="click"`},placement:{label:`위`,content:`트리거 위`,props:`placement="top"`,button:`size="sm"`},inverse:{label:`역색 Tooltip`,content:`어두운 배경의 말풍선입니다.`,props:`inverse`,button:`variant="ghost"`},disabled:{label:`제출 불가`,content:`필수 항목을 모두 입력해야 제출할 수 있습니다.`},arrowAnchor:{label:`S`,content:`화살표가 트리거 중앙을 가리킵니다.`,props:`arrowAnchor="target"`,button:`variant="ghost" size="sm"`},noArrow:{label:`화살표 없음`,content:`화살표가 표시되지 않는 말풍선입니다.`,props:`noArrow`,button:`variant="ghost"`}},_e=Object.fromEntries(ge.map(e=>[e,he(e)]))})))()}function ye(e){let t=(e,t=`progress_fit color_primary`,n=``,r=`진행률`)=>`<div class="progress ${t}" data-percent="${e}">${n}<div class="progress_track" role="progressbar"${t.includes(`is-indeterminate`)?` aria-busy="true"`:` aria-valuenow="${e}"`} aria-valuemin="0" aria-valuemax="100" aria-label="${r}"><span class="progress_bar" style="width: ${e}%">${t.includes(`progress_inside`)?`${e}%`:``}</span></div></div>`,n=(e,t)=>`<div class="progress_header"><span class="progress_label">${e}</span>${t===void 0?``:`<span class="progress_value">${t}%</span>`}</div>`,r=(e,t=`primary`,n=``)=>`<div class="progress progress_circle color_${t}${n?` progress_${n}`:``}" role="progressbar" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: ${e}"><svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true"><circle class="progress_circle-track" cx="50" cy="50" r="45"></circle><circle class="progress_circle-bar" cx="50" cy="50" r="45"></circle></svg><span class="progress_circle-value">${e}%</span></div>`;return{basic:[t(0),t(30),t(60),t(100,`progress_fit color_success`)],label:[t(42,`progress_fit color_primary`,n(`파일 업로드`,42),`파일 업로드 진행률`),t(67,`progress_fit color_primary`,n(`데이터 동기화`,67),`데이터 동기화 진행률`)],color:[t(50,`progress_fit color_primary`,``,`Primary 진행률`),t(100,`progress_fit color_success`,``,`Success 진행률`),t(75,`progress_fit color_warning`,``,`Warning 진행률`),t(35,`progress_fit color_danger`,``,`Danger 진행률`)],size:[t(40,`progress_fit progress_sm color_primary`),t(55),t(70,`progress_fit progress_lg color_primary`)],striped:[t(45,`progress_fit progress_striped color_primary`,``,`줄무늬 진행률`),t(65,`progress_fit progress_striped progress_animated color_primary`,``,`애니메이션 진행률`)],indeterminate:[t(0,`progress_fit color_primary is-indeterminate`,``,`처리 중`),t(0,`progress_fit color_success is-indeterminate`,n(`동기화 중…`),`동기화 중`)],inside:[t(25,`progress_fit progress_inside color_primary`),t(80,`progress_fit progress_inside progress_lg color_success`)],circle:[r(25),r(68,`success`),r(50,`warning`,`sm`),r(90,`danger`,`lg`)],width:[t(50,`progress_fit color_primary`,n(`progress_fit`,50)),t(72,`progress_block color_primary`,n(`progress_block — 전체 너비`,72))]}[e].join(`

`)}function be(e){let t=ye(e),n=e===`circle`?`ProgressCircle`:`Progress`,r=`import { ${n} } from '@uxkm/react/progress';\n\nexport function Example() {\n  return <>${T[e]}</>;\n}`,i=`<script setup>\nimport { ${n} } from '@uxkm/vue/progress';\n<\/script>\n<template>\n${D[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Progress.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`progress.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/progress · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/progress · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/progress · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/progress · ${e}`,code:r}]}var w,T,E,D,O;function k(){return(k=e((()=>{w=[`basic`,`label`,`color`,`size`,`striped`,`indeterminate`,`inside`,`circle`,`width`],T={basic:`<Progress percent={0} />
<Progress percent={30} />
<Progress percent={60} />
<Progress percent={100} status="success" />`,label:`<Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
<Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />`,color:`<Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
<Progress percent={100} color="success" ariaLabel="Success 진행률" />
<Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
<Progress percent={35} color="danger" ariaLabel="Danger 진행률" />`,size:`<Progress size="sm" percent={40} />
<Progress percent={55} />
<Progress size="lg" percent={70} />`,striped:`<Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
<Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />`,indeterminate:`<Progress indeterminate color="primary" ariaLabel="처리 중" />
<Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />`,inside:`<Progress percent={25} inside />
<Progress percent={80} inside size="lg" color="success" />`,circle:`<ProgressCircle percent={25} />
<ProgressCircle percent={68} color="success" />
<ProgressCircle percent={50} size="sm" color="warning" />
<ProgressCircle percent={90} size="lg" color="danger" />`,width:`<Progress percent={50} showInfo label="progress_fit" />
<Progress percent={72} block showInfo label="progress_block — 전체 너비" />`},E={...T,inside:`${T.inside}\n<Progress percent={100} inside />`},D=Object.fromEntries(Object.entries(E).map(([e,t])=>[e,t.replaceAll(`percent={`,`:percent="`).replaceAll(`} `,`" `).replaceAll(`} />`,`" />`).replaceAll(`showInfo`,`show-info`).replaceAll(`ariaLabel`,`aria-label`)])),O=Object.fromEntries(w.map(e=>[e,be(e)]))})))()}function A(e=`color_primary`,t=``,n=`로딩 중`){return`<div class="spin ${e}" role="status" aria-live="polite" aria-busy="true" aria-label="${n}"><span class="spin_indicator" aria-hidden="true"></span>${t?`<p class="spin_tip">${t}</p>`:``}</div>`}function xe(e){return{basic:[A()],size:[A(`spin_sm color_primary`),A(),A(`spin_lg color_primary`)],color:[A(`color_primary`,``,`Primary 로딩`),A(`color_success`,``,`Success 로딩`),A(`color_warning`,``,`Warning 로딩`),A(`color_danger`,``,`Danger 로딩`)],tip:[A(`color_primary`,`데이터를 불러오는 중…`,`데이터를 불러오는 중`),A(`spin_lg color_primary`,`파일 업로드 중…`,`파일 업로드 중`)],inline:[A(`spin_sm spin_inline color_primary`,`저장 중…`,`저장 중`),`<button class="btn btn_filled color_primary is-loading" disabled aria-busy="true">제출 중…</button>`],block:[A(`spin_block color_primary`,`잠시만 기다려 주세요…`)],overlay:[`<div class="spin_wrap spin_wrap-block is-loading" aria-busy="true"><div class="spin_wrap-body"><div class="card card_shadow"><div class="card_header"><h3 class="card_title">대시보드</h3></div><div class="card_body"><p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p></div></div></div>${A(`spin_overlay color_primary`,`데이터 로딩 중…`,`데이터 로딩 중`)}</div>`,`<div class="spin_wrap spin_wrap-block spin_wrap-blur is-loading" aria-busy="true"><div class="spin_wrap-body"><div class="card card_shadow"><div class="card_header"><h3 class="card_title">블러 효과</h3></div><div class="card_body"><p><code>spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p></div></div></div>${A(`spin_overlay color_primary`,``,`처리 중`)}</div>`]}[e].join(`

`)}function Se(e){let t=xe(e),n=e===`overlay`?`SpinWrap`:`Spin`,r=`import { ${n} } from '@uxkm/react/spin';${e===`inline`?`
import Button from '@uxkm/react/button';`:``}`,i=`import { ${n} } from '@uxkm/vue/spin';${e===`inline`?`
import Button from '@uxkm/vue/button';`:``}`,a=`${r}\n\nexport function Example() { return <>${M[e]}</>; }`,o=`<script setup>\n${i}\n<\/script>\n<template>\n${N[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Spin.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`spin.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/spin · ${e}`,code:o},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/spin · ${e}`,code:o},{id:`react`,label:`React`,fileName:`@uxkm/react/spin · ${e}`,code:a},{id:`next`,label:`Next`,fileName:`@uxkm/react/spin · ${e}`,code:a}]}var j,M,N,Ce;function we(){return(we=e((()=>{j=[`basic`,`size`,`color`,`tip`,`inline`,`block`,`overlay`],M={basic:`<Spin />`,size:`<Spin size="sm" />
<Spin />
<Spin size="lg" />`,color:`<Spin color="primary" ariaLabel="Primary 로딩" />
<Spin color="success" ariaLabel="Success 로딩" />
<Spin color="warning" ariaLabel="Warning 로딩" />
<Spin color="danger" ariaLabel="Danger 로딩" />`,tip:`<Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
<Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />`,inline:`<p><Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" /></p>
<Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />`,block:`<Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />`,overlay:`<SpinWrap block loading tip="데이터 로딩 중…" ariaLabel="데이터 로딩 중"><div className="card card_shadow"><div className="card_header"><h3 className="card_title">대시보드</h3></div><div className="card_body"><p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p></div></div></SpinWrap>
<SpinWrap block blur loading ariaLabel="처리 중"><div className="card card_shadow"><div className="card_header"><h3 className="card_title">블러 효과</h3></div><div className="card_body"><p><code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p></div></div></SpinWrap>`},N=Object.fromEntries(Object.entries(M).map(([e,t])=>[e,t.replaceAll(`ariaLabel`,`aria-label`).replaceAll(`className=`,`class=`)])),Ce=Object.fromEntries(j.map(e=>[e,Se(e)]))})))()}function Te(e){let t=`import Skeleton from '@uxkm/react/skeleton';\n\nexport function Example() { return <>${De[e]}</>; }`,n=`<script setup>\nimport Skeleton from '@uxkm/vue/skeleton';\n<\/script>\n<template>\n${Oe[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Skeleton.html · ${e}`,code:P[e]},{id:`gulp`,label:`Gulp`,fileName:`skeleton.njk · ${e}`,code:P[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/skeleton · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/skeleton · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/skeleton · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/skeleton · ${e}`,code:t}]}var Ee,De,Oe,P,ke;function Ae(){return(Ae=e((()=>{Ee=[`basic`,`shape`,`card`,`static`],De={basic:`<div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}><Skeleton paragraph={3} /></div>`,shape:`<Skeleton avatar paragraph={0} />
<Skeleton round style={{ marginTop: 'var(--space-md)' }} />`,card:`<div className="card card_shadow" style={{ maxWidth: 360, width: '100%' }} role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div className="card_body">
    <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
      <span className="skeleton skeleton_image" aria-hidden="true" />
      <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span className="skeleton skeleton_text" aria-hidden="true" />
      <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
        <span className="skeleton skeleton_button" aria-hidden="true" />
        <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
      </div>
    </Skeleton>
  </div>
</div>`,static:`<div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}><Skeleton active={false} paragraph={3} /></div>`},Oe={basic:`<div style="max-width: var(--input-max-width); width: 100%;"><Skeleton :paragraph="3" /></div>`,shape:`<Skeleton avatar :paragraph="0" />
<Skeleton round style="margin-top: var(--space-md);" />`,card:`<div class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div class="card_body">
    <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
      <span class="skeleton skeleton_image" aria-hidden="true" />
      <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span class="skeleton skeleton_text" aria-hidden="true" />
      <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div class="skeleton_row" style="margin-top: var(--space-xs);">
        <span class="skeleton skeleton_button" aria-hidden="true" />
        <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
      </div>
    </Skeleton>
  </div>
</div>`,static:`<div style="max-width: var(--input-max-width); width: 100%;"><Skeleton :active="false" :paragraph="3" /></div>`},P={basic:`<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title" aria-hidden="true"></span>
  <span class="skeleton skeleton_text" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
</div>`,shape:`<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="아바타 로딩 중">
  <div class="skeleton_row"><span class="skeleton skeleton_circle" aria-hidden="true"></span></div>
</div>
<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="원형 콘텐츠 로딩 중">
  <span class="skeleton skeleton_circle" aria-hidden="true"></span>
</div>`,card:`<div class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div class="card_body"><div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
    <span class="skeleton skeleton_image" aria-hidden="true"></span>
    <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true"></span>
    <span class="skeleton skeleton_text" aria-hidden="true"></span>
    <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
    <div class="skeleton_row" style="margin-top: var(--space-xs);"><span class="skeleton skeleton_button" aria-hidden="true"></span><span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;"></span></div>
  </div></div>
</div>`,static:`<div class="skeleton_group skeleton_static" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm skeleton_static" aria-hidden="true"></span>
</div>`},ke=Object.fromEntries(Ee.map(e=>[e,Te(e)]))})))()}function je(e){let t=e===`footer`?`
import Button from '@uxkm/react/button';`:``,n=e===`footer`?`
import Button from '@uxkm/vue/button';`:``,r=e===`custom`?`
import Icon from '@uxkm/react/icon';`:``,i=e===`custom`?`
import Icon from '@uxkm/vue/icon';`:``,a=e===`block`?`
import { Card, CardBody } from '@uxkm/react/card';`:``,o=e===`block`?`
import { Card, CardBody } from '@uxkm/vue/card';`:``,s=`import Empty from '@uxkm/react/empty';${t}${r}${a}\n\nexport function Example() { return <>${z[e]}</>; }`,c=`<script setup>\nimport Empty from '@uxkm/vue/empty';${n}${i}${o}\n<\/script>\n<template>\n${Ne[e]}\n</template>`,l=`{% from "../../basic/Icon/icon.njk" import icon %}\n${R[e].replaceAll(F,`<div class="empty_image" data-slot="icon" aria-hidden="true">{{ icon('inbox') }}</div>`).replaceAll(I,`<div class="empty_image" data-slot="icon" aria-hidden="true">{{ icon('search') }}</div>`)}`;return[{id:`html`,label:`HTML`,fileName:`Empty.html · ${e}`,code:R[e]},{id:`gulp`,label:`Gulp`,fileName:`empty.njk · ${e}`,code:l},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/empty · ${e}`,code:c},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/empty · ${e}`,code:c},{id:`react`,label:`React`,fileName:`@uxkm/react/empty · ${e}`,code:s},{id:`next`,label:`Next`,fileName:`@uxkm/react/empty · ${e}`,code:s}]}var Me,F,I,L,R,z,Ne,Pe;function Fe(){return(Fe=e((()=>{Me=[`basic`,`footer`,`custom`,`size`,`simple`,`block`],F=`<div class="empty_image" data-slot="icon" aria-hidden="true"><svg class="icon" data-component="Icon" data-icon="inbox" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5"></path></svg></div>`,I=`<div class="empty_image" data-slot="icon" aria-hidden="true"><svg class="icon" data-component="Icon" data-icon="search" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg></div>`,L=(e,t=``,n=``,r=F,i=`<p>${e}</p>`)=>`<div class="empty${t?` ${t}`:``}" role="status">${r?`\n  ${r}`:``}\n  <div class="empty_desc" data-slot="description">${i}</div>${n?`\n  <div class="empty_footer">${n}</div>`:``}\n</div>`,R={basic:L(`데이터가 없습니다`),footer:L(`등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.`,``,`<button type="button" class="btn btn_filled color_primary btn_sm">프로젝트 만들기</button>`),custom:L(`검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.`,``,``,I,`<strong>검색 결과가 없습니다</strong><span>다른 키워드로 다시 검색해 보세요.</span>`),size:[L(`Small`,`empty_sm`),L(`Medium (기본)`),L(`Large`,`empty_lg`)].join(`

`),simple:L(`일정 없음`,`empty_sm empty_simple`,``,``),block:`<article class="card card_shadow" data-component="Card" style="max-width: var(--input-max-width); width: 100%;"><div class="card_header"><div class="card_header-main"><h3 class="card_title">알림 목록</h3></div></div><div class="card_body">${L(`새 알림이 없습니다`,`empty_block`)}</div></article>
<div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);"><table class="table table_bordered"><thead><tr><th scope="col">이름</th><th scope="col">상태</th><th scope="col">날짜</th></tr></thead><tbody><tr><td colspan="3" style="padding: 0; border: none;">${L(`표시할 항목이 없습니다`,`empty_sm empty_simple empty_block`,``,``)}</td></tr></tbody></table></div>`},z={basic:`<Empty description="데이터가 없습니다" />`,footer:`<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요." footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />} />`,custom:`<Empty icon={<Icon name="search" />}><strong>검색 결과가 없습니다</strong><span>다른 키워드로 다시 검색해 보세요.</span></Empty>`,size:`<Empty size="sm" description="Small" />
<Empty description="Medium (기본)" />
<Empty size="lg" description="Large" />`,simple:`<Empty simple size="sm" description="일정 없음" />`,block:`<Card title="알림 목록" variant="shadow" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}><CardBody><Empty block description="새 알림이 없습니다" /></CardBody></Card>
<div className="table_wrap" style={{ maxWidth: 'var(--input-max-width)', width: '100%', marginTop: 'var(--space-md)' }}><table className="table table_bordered"><thead><tr><th scope="col">이름</th><th scope="col">상태</th><th scope="col">날짜</th></tr></thead><tbody><tr><td colSpan={3} style={{ padding: 0, border: 'none' }}><Empty block simple size="sm" description="표시할 항목이 없습니다" /></td></tr></tbody></table></div>`},Ne={basic:`<Empty description="데이터가 없습니다" />`,footer:`<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."><template #footer><Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" /></template></Empty>`,custom:`<Empty><template #icon><Icon name="search" /></template><template #description><strong>검색 결과가 없습니다</strong><span>다른 키워드로 다시 검색해 보세요.</span></template></Empty>`,size:`<Empty size="sm" description="Small" />
<Empty description="Medium (기본)" />
<Empty size="lg" description="Large" />`,simple:`<Empty simple size="sm" description="일정 없음" />`,block:z.block.replaceAll(`className=`,`class=`).replace(`colSpan={3}`,`colspan="3"`).replaceAll(`style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}`,`style="max-width: var(--input-max-width); width: 100%;"`).replace(`style={{ maxWidth: 'var(--input-max-width)', width: '100%', marginTop: 'var(--space-md)' }}`,`style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);"`).replace(`style={{ padding: 0, border: 'none' }}`,`style="padding: 0; border: none;"`)},Pe=Object.fromEntries(Me.map(e=>[e,je(e)]))})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`<!-- Alert 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- alert 루트에 의미 색상(color_*)과 크기·배너 변형 클래스를 함께 적용합니다. -->
<div class="alert color_info" data-component="Alert" role="alert">
  <!-- 상태 아이콘 영역입니다. -->
  <svg
    class="alert_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>
  </svg>

  <!-- 제목과 본문을 담는 본문 영역입니다. -->
  <div class="alert_body">
    <div class="alert_title">정보</div>
    <p class="alert_desc">변경 사항이 저장되었습니다.</p>
  </div>

  <!-- data-alert-close 등으로 닫기 동작을 연결할 수 있는 닫기 버튼입니다. -->
  <button type="button" class="alert_close" aria-label="알림 닫기">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  </button>
</div>
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`{# Alert 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# alert 루트에 의미 색상(color_*)과 크기·배너 변형 클래스를 함께 적용합니다. #}
{% set alertColor = color | default('info') %}
<div
  class="alert {{ 'color_error' if alertColor == 'danger' else 'color_' + alertColor }}{% if size and size != 'md' %} alert_{{ size }}{% endif %}{% if banner %} alert_banner{% endif %}"
  data-component="Alert"
  role="{{ role | default('alert') }}"
>
  {# 상태 아이콘 영역입니다. #}
  {% if showIcon != false %}
  <svg
    class="alert_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    {% if alertColor == 'success' %}
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M22 4 12 14.01l-3-3"></path>
    {% elseif alertColor == 'warning' %}
    <path
      d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    ></path>
    <path d="M12 9v4M12 17h.01"></path>
    {% elseif alertColor == 'danger' %}
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6M9 9l6 6"></path>
    {% else %}
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>
    {% endif %}
  </svg>
  {% endif %}

  {# 제목·본문·액션을 담는 본문 영역입니다. #}
  <div class="alert_body">
    {% if title %}
    <div class="alert_title">{{ title }}</div>
    {% endif %}
    <p class="alert_desc">{{ description | default('알림 메시지입니다.') }}</p>
    {% if actions %}
    <div class="alert_actions">{{ actions | safe }}</div>
    {% endif %}
  </div>

  {# closable일 때 닫기 버튼입니다. #}
  {% if closable %}
  <button type="button" class="alert_close" aria-label="알림 닫기">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  </button>
  {% endif %}
</div>
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`/**
 * Alert 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useState } from 'react';

// 의미 색상별 기본 SVG 아이콘 경로입니다.
const iconPaths = {
  info: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>
  ),
  success: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </>
  ),
  warning: (
    <>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  danger: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </>
  ),
};

export function Alert({
  color = 'info', // 의미 색상입니다. danger는 color_error를 사용합니다.
  title, // 알림 제목입니다.
  description, // 본문 설명입니다. children이 있으면 우선합니다.
  closable = false, // 닫기 버튼 표시 여부입니다.
  showIcon = true, // 상태 아이콘 표시 여부입니다.
  size = 'md', // 알림 크기입니다.
  banner = false, // 배너형(전체 너비) 변형입니다.
  role = 'alert', // 접근성 역할입니다.
  icon, // 기본 아이콘 대신 사용할 커스텀 아이콘입니다.
  actions, // 본문 아래 액션 영역입니다.
  children, // description 대신 사용할 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeLabel = '알림 닫기', // 닫기 버튼의 접근성 이름입니다.
  onClose, // 닫기 버튼 클릭 시 호출됩니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 닫기 전까지 알림을 화면에 유지합니다.
  const [visible, setVisible] = useState(true);

  // 닫힌 뒤에는 DOM에서 제거합니다.
  if (!visible) {
    return null;
  }

  // 지원하지 않는 색상은 info로 되돌립니다.
  const resolvedColor = ['info', 'success', 'warning', 'danger'].includes(color) ? color : 'info';
  // danger는 디자인 토큰의 color_error와 맞춥니다.
  const colorClass = resolvedColor === 'danger' ? 'color_error' : \`color_\${resolvedColor}\`;
  // 루트·색상·크기·배너·사용자 클래스를 조합합니다.
  const classes = [
    'alert', // Alert 루트 클래스입니다.
    colorClass, // 의미 색상 클래스입니다.
    size !== 'md' && \`alert_\${size}\`, // md가 아닐 때만 크기 변형입니다.
    banner && 'alert_banner', // 배너형 레이아웃입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  // children이 있으면 description보다 우선합니다.
  const content = children ?? description;

  // 내부 표시 상태를 끄고 외부 onClose를 알립니다.
  const handleClose = (event) => {
    setVisible(false);
    onClose?.(event);
  };

  return (
    <div className={classes} data-component="Alert" role={role} {...props}>
      {/* 아이콘 슬롯: 커스텀 icon이 없으면 색상별 기본 SVG를 사용합니다. */}
      {showIcon &&
        (icon ?? (
          <svg
            className="alert_icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {iconPaths[resolvedColor]}
          </svg>
        ))}

      {/* 제목·본문·액션을 담는 본문 영역입니다. */}
      <div className="alert_body">
        {title && <div className="alert_title">{title}</div>}
        {content && <p className="alert_desc">{content}</p>}
        {actions}
      </div>

      {/* closable일 때만 닫기 버튼을 렌더합니다. */}
      {closable && (
        <button type="button" className="alert_close" aria-label={closeLabel} onClick={handleClose}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`<!--
  Alert 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs } from 'vue';

// 선언하지 않은 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({
  name: 'UxkmAlert',
  inheritAttrs: false,
});

// 색상·콘텐츠·표시 옵션을 prop으로 받습니다.
const props = defineProps({
  color: { type: String, default: 'info' }, // 의미 색상입니다. danger는 color_error를 사용합니다.
  title: String, // 알림 제목입니다.
  description: String, // 본문 설명입니다. default 슬롯이 있으면 우선합니다.
  closable: Boolean, // 닫기 버튼 표시 여부입니다.
  showIcon: { type: Boolean, default: true }, // 상태 아이콘 표시 여부입니다.
  size: { type: String, default: 'md' }, // 알림 크기입니다.
  banner: Boolean, // 배너형(전체 너비) 변형입니다.
  role: { type: String, default: 'alert' }, // 접근성 역할입니다.
  closeLabel: { type: String, default: '알림 닫기' }, // 닫기 버튼의 접근성 이름입니다.
});

const emit = defineEmits(['close']); // 닫기 이벤트입니다.
const attrs = useAttrs(); // 선언하지 않은 HTML 속성입니다.
const visible = ref(true); // 닫기 전까지 알림을 화면에 유지합니다.

// 지원하지 않는 색상은 info로 되돌립니다.
const resolvedColor = computed(() =>
  ['info', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'info',
);

// 루트·색상·크기·배너·사용자 클래스를 조합합니다.
const classes = computed(() => {
  const colorClass =
    resolvedColor.value === 'danger' ? 'color_error' : \`color_\${resolvedColor.value}\`;

  return [
    'alert', // Alert 루트 클래스입니다.
    colorClass, // 의미 색상 클래스입니다.
    props.size !== 'md' && \`alert_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
    props.banner && 'alert_banner', // 배너형 레이아웃입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean);
});

// class는 classes에 합쳤으므로 나머지 속성만 바인딩합니다.
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

// 내부 표시 상태를 끄고 close 이벤트를 알립니다.
function handleClose(event) {
  visible.value = false;
  emit('close', event);
}
<\/script>

<template>
  <!-- 닫힌 뒤에는 DOM에서 제거합니다. -->
  <div v-if="visible" v-bind="restAttrs" :class="classes" data-component="Alert" :role="role">
    <!-- 아이콘 슬롯: 없으면 색상별 기본 SVG를 사용합니다. -->
    <slot v-if="showIcon" name="icon">
      <svg
        class="alert_icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <template v-if="resolvedColor === 'info'">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </template>
        <template v-else-if="resolvedColor === 'success'">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </template>
        <template v-else-if="resolvedColor === 'warning'">
          <path
            d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
          <path d="M12 9v4M12 17h.01" />
        </template>
        <template v-else>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6M9 9l6 6" />
        </template>
      </svg>
    </slot>

    <!-- 제목·본문·액션을 담는 본문 영역입니다. -->
    <div class="alert_body">
      <div v-if="title" class="alert_title">
        {{ title }}
      </div>
      <p v-if="$slots.default || description" class="alert_desc">
        <slot>{{ description }}</slot>
      </p>
      <slot name="actions" />
    </div>

    <!-- closable일 때만 닫기 버튼을 렌더합니다. -->
    <button
      v-if="closable"
      type="button"
      class="alert_close"
      :aria-label="closeLabel"
      @click="handleClose"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`<!-- Snackbar 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- snackbar 루트에 색상·모션·배치 클래스를 함께 적용합니다. -->
<div
  class="snackbar color_info snackbar_motion-fade snackbar_placement-bottom-center"
  data-component="Snackbar"
  role="status"
  aria-live="polite"
  aria-atomic="true"
  aria-relevant="additions text"
>
  <!-- 상태 아이콘 영역입니다. -->
  <svg
    class="snackbar_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>
  </svg>
  <!-- 메시지 텍스트 영역입니다. -->
  <span class="snackbar_message">새로운 업데이트가 있습니다.</span>
  <!-- data-snackbar-close로 닫기 동작을 연결합니다. -->
  <button
    type="button"
    class="btn btn_ghost btn_icon-only snackbar_close"
    data-snackbar-close
    aria-label="알림 닫기"
  >
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  </button>
</div>
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`{# Snackbar 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# snackbar 루트에 색상·모션·배치 클래스를 함께 적용합니다. #}
{% set snackbarColor = color | default('info') %}
<div
  class="snackbar {{ 'color_error' if snackbarColor == 'danger' else 'color_' + snackbarColor }}{% if size and size != 'md' %} snackbar_{{ size }}{% endif %}{% if round %} snackbar_round{% endif %} snackbar_motion-{{ motion | default('fade') }} snackbar_placement-{{ placement | default('bottom-center') }}"
  data-component="Snackbar"{% if duration %}
  data-snackbar-duration="{{ duration }}"{% endif %}
  role="{{ role | default('status') }}"
  aria-live="{{ 'assertive' if role == 'alert' else 'polite' }}"
  aria-atomic="true"
  aria-relevant="additions text"
>
  {# 상태 아이콘 영역입니다. #}
  {% if showIcon != false %}
  <svg
    class="snackbar_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    {% if snackbarColor == 'success' %}
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M22 4 12 14.01l-3-3"></path>
    {% elseif snackbarColor == 'warning' %}
    <path
      d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    ></path>
    <path d="M12 9v4M12 17h.01"></path>
    {% elseif snackbarColor == 'danger' %}
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6M9 9l6 6"></path>
    {% else %}
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>
    {% endif %}
  </svg>
  {% endif %}
  {# 메시지 텍스트 영역입니다. #}
  <span class="snackbar_message">{{ message | default('Snackbar') }}</span>
  {% if action %}<span class="snackbar_action">{{ action | safe }}</span
  >{% endif %}
  {# data-snackbar-close로 닫기 동작을 연결합니다. #}
  {% if closable %}<button
    type="button"
    class="btn btn_ghost btn_icon-only snackbar_close"
    data-snackbar-close
    aria-label="{{ closeLabel | default('알림 닫기') }}"
  >
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg></button
  >{% endif %}
</div>
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`/**
 * Snackbar 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { SnackbarPlacementContext, snackbarPlacements } from './SnackbarRegion.jsx';

const colors = ['info', 'success', 'warning', 'danger']; // 지원하는 의미 색상입니다.
const sizes = ['sm', 'md', 'lg']; // 지원하는 크기입니다.
const motions = ['fade', 'slide', 'none']; // 지원하는 등장·퇴장 효과입니다.
const placements = snackbarPlacements; // 지원하는 배치 위치입니다.
// 색상별 기본 아이콘 이름입니다.
const iconNames = {
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'x-circle',
};

export function Snackbar({
  children, // message보다 우선하는 메시지 콘텐츠입니다.
  message, // 기본 메시지입니다.
  color = 'info', // 의미 색상입니다.
  size = 'md', // Snackbar 크기입니다.
  motion = 'fade', // 등장·퇴장 효과입니다.
  placement, // 위치 및 Slide 방향입니다. 없으면 Region을 따릅니다.
  duration = 0, // 자동 닫기 시간(ms)입니다. 0이면 유지합니다.
  role = 'status', // 접근성 역할입니다. alert면 assertive입니다.
  closable = false, // 닫기 버튼 표시 여부입니다.
  closeLabel = '알림 닫기', // 닫기 버튼의 접근성 이름입니다.
  showIcon = true, // 상태 아이콘 표시 여부입니다.
  round = false, // 캡슐형 모서리입니다.
  icon, // 기본 아이콘 대신 사용할 커스텀 아이콘입니다.
  action, // 후속 액션 노드 또는 close를 받는 렌더 함수입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClose, // close · action · timeout 사유로 호출됩니다.
  onMouseEnter, // 호버 진입 시 외부 핸들러입니다.
  onMouseLeave, // 호버 이탈 시 외부 핸들러입니다.
  onFocusCapture, // 포커스 캡처 시 외부 핸들러입니다.
  onBlurCapture, // 블러 캡처 시 외부 핸들러입니다.
  onKeyDown, // 키 입력 시 외부 핸들러입니다.
  onAnimationEnd, // 애니메이션 종료 시 외부 핸들러입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // Region이 제공한 기본 placement입니다.
  const regionPlacement = useContext(SnackbarPlacementContext);
  const timerRef = useRef(null); // 자동 닫기 타이머 ID입니다.
  const startedAtRef = useRef(0); // 타이머 시작 시각입니다.
  const remainingRef = useRef(0); // 남은 자동 닫기 시간(ms)입니다.
  const closeRef = useRef(null); // 퇴장 완료 후 전달할 닫기 사유·이벤트입니다.
  const pauseReasonsRef = useRef({ hover: false, focus: false }); // hover·focus 등 일시정지 사유입니다.
  const [visible, setVisible] = useState(true); // DOM 유지 여부입니다.
  // none이면 바로 open, 그 외에는 entering부터 시작합니다.
  const [phase, setPhase] = useState(motion === 'none' ? 'open' : 'entering');
  const resolvedColor = colors.includes(color) ? color : 'info'; // 검증된 색상입니다.
  const resolvedSize = sizes.includes(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedMotion = motions.includes(motion) ? motion : 'fade'; // 검증된 모션입니다.
  // placement prop이 없으면 Region placement를 사용합니다.
  const resolvedPlacement = placements.includes(placement) ? placement : regionPlacement;
  // duration은 0 이상의 유한 숫자만 허용합니다.
  const resolvedDuration = Number.isFinite(Number(duration)) ? Math.max(0, Number(duration)) : 0;

  // 진행 중인 자동 닫기 타이머를 지웁니다.
  const clearTimer = () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };
  // 퇴장 후 DOM을 제거하고 onClose를 호출합니다.
  const finishClose = () => {
    clearTimer();
    setVisible(false);
    const payload = closeRef.current;
    closeRef.current = null;
    onClose?.(payload?.reason ?? 'close', payload?.event);
  };
  // 닫기 요청: none이면 즉시, 아니면 leaving 애니메이션을 시작합니다.
  const dismiss = (reason, event) => {
    if (!visible || phase === 'leaving') return;
    clearTimer();
    closeRef.current = { reason, event };
    if (resolvedMotion === 'none') finishClose();
    else setPhase('leaving');
  };
  // 일시정지 사유가 없을 때만 남은 시간으로 타이머를 재개합니다.
  const startTimer = () => {
    if (remainingRef.current <= 0 || timerRef.current !== null || pauseReasonsRef.current.hover || pauseReasonsRef.current.focus)
      return;
    startedAtRef.current = Date.now();
    timerRef.current = window.setTimeout(() => dismiss('timeout'), remainingRef.current);
  };
  // 호버·포커스 중에는 남은 시간을 줄이고 타이머를 멈춥니다.
  const pauseTimer = (reason) => {
    pauseReasonsRef.current[reason] = true;
    if (timerRef.current === null) return;
    remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAtRef.current));
    clearTimer();
  };
  // 일시정지 사유를 제거하고 타이머를 재개합니다.
  const resumeTimer = (reason) => {
    pauseReasonsRef.current[reason] = false;
    startTimer();
  };

  // entering 단계가 끝나면 open으로 전환합니다(애니메이션 미지원 대비).
  useEffect(() => {
    if (phase !== 'entering') return undefined;
    const id = window.setTimeout(() => setPhase('open'), 250);
    return () => window.clearTimeout(id);
  }, [phase]);
  // open이고 duration이 있으면 자동 닫기 타이머를 시작합니다.
  useEffect(() => {
    if (phase !== 'open' || resolvedDuration === 0) return undefined;
    remainingRef.current = resolvedDuration;
    pauseReasonsRef.current = { hover: false, focus: false };
    startTimer();
    return clearTimer;
  }, [phase, resolvedDuration]);
  // 언마운트 시 타이머를 정리합니다.
  useEffect(() => clearTimer, []);

  if (!visible) return null;

  // 색상·크기·모션·위치·단계 클래스를 조합합니다.
  const classes = [
    'snackbar', // Snackbar 루트 클래스입니다.
    resolvedColor === 'danger' ? 'color_error' : \`color_\${resolvedColor}\`, // 의미 색상입니다.
    resolvedSize !== 'md' && \`snackbar_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
    round && 'snackbar_round', // 캡슐형 모서리입니다.
    \`snackbar_motion-\${resolvedMotion}\`, // 등장·퇴장 모션입니다.
    \`snackbar_placement-\${resolvedPlacement}\`, // Slide 방향·배치입니다.
    \`is-\${phase}\`, // entering · open · leaving 단계입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  // action이 함수면 close 헬퍼를 넘겨 렌더합니다.
  const actionContent =
    typeof action === 'function' ? action({ close: (event) => dismiss('action', event) }) : action;

  return (
    <div
      {...props}
      className={classes}
      data-component="Snackbar"
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      aria-atomic="true"
      aria-relevant="additions text"
      onMouseEnter={(event) => {
        pauseTimer('hover');
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        resumeTimer('hover');
        onMouseLeave?.(event);
      }}
      onFocusCapture={(event) => {
        pauseTimer('focus');
        onFocusCapture?.(event);
      }}
      onBlurCapture={(event) => {
        // 포커스가 Snackbar 밖으로 나갔을 때만 재개합니다.
        if (!event.currentTarget.contains(event.relatedTarget)) resumeTimer('focus');
        onBlurCapture?.(event);
      }}
      onKeyDown={(event) => {
        if (closable && event.key === 'Escape') dismiss('close', event);
        onKeyDown?.(event);
      }}
      onAnimationEnd={(event) => {
        // 루트 애니메이션이 끝났을 때만 단계를 전환합니다.
        if (event.currentTarget === event.target) {
          if (phase === 'entering') setPhase('open');
          if (phase === 'leaving') finishClose();
        }
        onAnimationEnd?.(event);
      }}
    >
      {/* 상태 아이콘 영역입니다. */}
      {showIcon && (
        <span className="snackbar_icon-wrap" aria-hidden="true">
          {icon ?? <Icon name={iconNames[resolvedColor]} className="snackbar_icon" />}
        </span>
      )}
      <div className="snackbar_message">{children ?? message ?? 'Snackbar'}</div>
      {actionContent != null && <div className="snackbar_action">{actionContent}</div>}
      {closable && (
        <Button
          variant="ghost"
          iconOnly
          className="snackbar_close"
          ariaLabel={closeLabel}
          iconBefore={<Icon name="close" size="sm" />}
          onClick={(event) => dismiss('close', event)}
        />
      )}
    </div>
  );
}

export default Snackbar;
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`/**
 * SnackbarRegion 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { createContext } from 'react';
import { createPortal } from 'react-dom';

// 뷰포트 기준 8개 배치 위치입니다.
export const snackbarPlacements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
];

// 자식 Snackbar에 기본 placement를 전달하는 컨텍스트입니다.
export const SnackbarPlacementContext = createContext('bottom-center');

// iframe에서도 최상위 문서에 Snackbar를 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getSnackbarPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;

  let targetDocument = currentDocument;
  try {
    // 가능하면 최상위 프레임 문서를 사용합니다.
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
  }

  // 동일 문서면 body에 바로 붙입니다.
  if (targetDocument === currentDocument) return currentDocument.body;

  // 상위 문서에 UXKM 스타일이 없으면 연결합니다.
  const stylesheetId = 'uxkm-snackbar-portal-styles';
  if (!targetDocument.getElementById(stylesheetId)) {
    const stylesheet = targetDocument.createElement('link');
    stylesheet.id = stylesheetId;
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('styles/uxkm.css', targetDocument.baseURI).href;
    targetDocument.head.appendChild(stylesheet);
  }

  // 공유 포털 루트 노드를 재사용합니다.
  const rootId = 'uxkm-snackbar-portal-root';
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    targetDocument.body.appendChild(root);
  }
  // 현재 문서의 테마를 포털에도 맞춥니다.
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

export function SnackbarRegion({
  placement = 'bottom-center', // 뷰포트 기준 배치 위치입니다.
  label, // 영역 접근성 이름입니다.
  children, // 같은 위치에 쌓을 Snackbar들입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 지원하지 않는 placement는 bottom-center로 되돌립니다.
  const resolvedPlacement = snackbarPlacements.includes(placement) ? placement : 'bottom-center';
  const region = (
    <SnackbarPlacementContext.Provider value={resolvedPlacement}>
      <div
        {...props}
        className={['snackbar_region', \`snackbar_region-\${resolvedPlacement}\`, className]
          .filter(Boolean)
          .join(' ')}
        aria-label={label}
      >
        {children}
      </div>
    </SnackbarPlacementContext.Provider>
  );
  // 포털 루트가 있으면 포털로, 없으면 인라인으로 렌더합니다.
  const portalRoot = getSnackbarPortalRoot();
  return portalRoot ? createPortal(region, portalRoot) : region;
}

export default SnackbarRegion;
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`<!--
  Snackbar 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmSnackbar' });

// 메시지·색상·모션·자동 닫기 옵션을 prop으로 받습니다.
const props = defineProps({
  message: { type: String, default: 'Snackbar' }, // 기본 메시지입니다. default 슬롯이 우선합니다.
  color: { type: String, default: 'info' }, // 의미 색상입니다.
  size: { type: String, default: 'md' }, // Snackbar 크기입니다.
  motion: { type: String, default: 'fade' }, // 등장·퇴장 효과입니다.
  placement: String, // 위치 및 Slide 방향입니다. 없으면 Region을 따릅니다.
  duration: { type: Number, default: 0 }, // 자동 닫기 시간(ms)입니다. 0이면 유지합니다.
  role: { type: String, default: 'status' }, // 접근성 역할입니다. alert면 assertive입니다.
  closable: Boolean, // 닫기 버튼 표시 여부입니다.
  closeLabel: { type: String, default: '알림 닫기' }, // 닫기 버튼의 접근성 이름입니다.
  showIcon: { type: Boolean, default: true }, // 상태 아이콘 표시 여부입니다.
  round: Boolean, // 캡슐형 모서리입니다.
});

const emit = defineEmits(['close']); // close · action · timeout 사유로 호출됩니다.
// Region이 제공한 기본 placement입니다.
const regionPlacement = inject('snackbarPlacement', 'bottom-center');
const visible = ref(true); // DOM 유지 여부입니다.
// none이면 바로 open, 그 외에는 entering부터 시작합니다.
const phase = ref(props.motion === 'none' ? 'open' : 'entering');
let enterTimer; // entering·leaving 전환 타이머입니다.
let dismissTimer; // 자동 닫기 타이머입니다.
let startedAt = 0; // 타이머 시작 시각입니다.
let remaining = props.duration; // 남은 자동 닫기 시간(ms)입니다.
let pendingClose = { reason: 'close', event: undefined }; // 퇴장 완료 후 전달할 닫기 정보입니다.

// 색상별 기본 아이콘 이름입니다.
const iconName = computed(
  () =>
    ({ info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'x-circle' })[
      props.color
    ] || 'info',
);
// 색상·크기·모션·위치·단계 클래스를 조합합니다.
const classes = computed(() =>
  [
    'snackbar', // Snackbar 루트 클래스입니다.
    props.color === 'danger' ? 'color_error' : \`color_\${props.color}\`, // 의미 색상입니다.
    props.size !== 'md' && \`snackbar_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
    props.round && 'snackbar_round', // 캡슐형 모서리입니다.
    \`snackbar_motion-\${props.motion}\`, // 등장·퇴장 모션입니다.
    \`snackbar_placement-\${props.placement || regionPlacement}\`, // Slide 방향·배치입니다.
    \`is-\${phase.value}\`, // entering · open · leaving 단계입니다.
  ].filter(Boolean),
);

function clearDismissTimer() {
  window.clearTimeout(dismissTimer);
  dismissTimer = undefined;
}
// 남은 시간으로 자동 닫기 타이머를 시작합니다.
function startDismissTimer() {
  if (remaining <= 0 || dismissTimer) return;
  startedAt = Date.now();
  dismissTimer = window.setTimeout(() => close('timeout'), remaining);
}
// 호버·포커스 중에는 남은 시간을 줄이고 타이머를 멈춥니다.
function pauseDismissTimer() {
  if (!dismissTimer) return;
  remaining = Math.max(0, remaining - (Date.now() - startedAt));
  clearDismissTimer();
}
// DOM을 제거하고 close 이벤트를 알립니다.
function finish(reason = pendingClose.reason, event = pendingClose.event) {
  window.clearTimeout(enterTimer);
  if (!visible.value) return;
  visible.value = false;
  emit('close', reason, event);
}
// 닫기 요청: none이면 즉시, 아니면 leaving 애니메이션을 시작합니다.
function close(reason = 'close', event) {
  clearDismissTimer();
  pendingClose = { reason, event };
  if (props.motion === 'none') finish(reason, event);
  else {
    phase.value = 'leaving';
    enterTimer = window.setTimeout(() => finish(reason, event), 250);
  }
}
// 루트 애니메이션이 끝나면 단계를 전환합니다.
function animationEnd() {
  if (phase.value === 'entering') phase.value = 'open';
  else if (phase.value === 'leaving') finish();
}
onMounted(() => {
  if (phase.value === 'entering')
    enterTimer = window.setTimeout(() => {
      phase.value = 'open';
      startDismissTimer();
    }, 250);
  else startDismissTimer();
});
onBeforeUnmount(() => {
  window.clearTimeout(enterTimer);
  clearDismissTimer();
});
<\/script>

<template>
  <!-- 닫힌 뒤에는 DOM에서 제거합니다. -->
  <div
    v-if="visible"
    :class="classes"
    data-component="Snackbar"
    :role="role"
    :aria-live="role === 'alert' ? 'assertive' : 'polite'"
    aria-atomic="true"
    aria-relevant="additions text"
    @mouseenter="pauseDismissTimer"
    @mouseleave="startDismissTimer"
    @focusin="pauseDismissTimer"
    @focusout="startDismissTimer"
    @keydown.esc="closable && close('close', $event)"
    @animationend="animationEnd"
  >
    <!-- 상태 아이콘 영역입니다. -->
    <span v-if="showIcon" class="snackbar_icon-wrap" aria-hidden="true"
      ><slot name="icon"><Icon :name="iconName" class="snackbar_icon" /></slot
    ></span>
    <div class="snackbar_message">
      <slot>{{ message }}</slot>
    </div>
    <div v-if="$slots.action" class="snackbar_action">
      <slot name="action" :close="(event) => close('action', event)" />
    </div>
    <Button
      v-if="closable"
      variant="ghost"
      icon-only
      class="snackbar_close"
      :aria-label="closeLabel"
      @click="close('close', $event)"
      ><Icon name="close" size="sm"
    /></Button>
  </div>
</template>
`})))()}var et;function tt(){return(tt=e((()=>{et=`<!--
  SnackbarRegion 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, provide } from 'vue';

// 배치 위치와 영역 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  placement: { type: String, default: 'bottom-center' }, // 뷰포트 기준 배치 위치입니다.
  label: String, // 영역 접근성 이름입니다.
});

// 뷰포트 기준 8개 배치 위치입니다.
const placements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
];
// 지원하지 않는 placement는 bottom-center로 되돌립니다.
const resolvedPlacement = computed(() =>
  placements.includes(props.placement) ? props.placement : 'bottom-center',
);
// 자식 Snackbar에 기본 placement를 전달합니다.
provide('snackbarPlacement', resolvedPlacement.value);

// iframe에서도 최상위 문서에 Snackbar를 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;

  // 상위 문서에 UXKM 스타일이 없으면 연결합니다.
  if (!targetDocument.getElementById('uxkm-snackbar-portal-styles')) {
    const stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-snackbar-portal-styles';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('styles/uxkm.css', targetDocument.baseURI).href;
    targetDocument.head.appendChild(stylesheet);
  }
  // 공유 포털 루트 노드를 재사용합니다.
  let root = targetDocument.getElementById('uxkm-snackbar-portal-root');
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = 'uxkm-snackbar-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}

const portalTarget = getPortalTarget();
<\/script>

<template>
  <!-- 포털로 뷰포트 고정 영역을 올립니다. -->
  <Teleport :to="portalTarget">
    <div :class="['snackbar_region', \`snackbar_region-\${resolvedPlacement}\`]" :aria-label="label">
      <slot />
    </div>
  </Teleport>
</template>
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`<!-- Modal 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- data-modal-trigger로 대상 Modal을 엽니다. -->
<button
  type="button"
  class="btn btn_filled color_primary"
  data-modal-trigger="#modal-basic"
  aria-controls="modal-basic"
  aria-expanded="false"
>
  모달 열기
</button>
<!-- modal 루트에 is-open·크기·스크롤 변형 클래스를 함께 적용합니다. -->
<div
  class="modal"
  id="modal-basic"
  data-component="Modal"
  data-modal
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-basic-title"
  tabindex="-1"
  hidden
>
  <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
  <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
  <div class="modal_dialog">
    <!-- 제목과 닫기 버튼을 담는 헤더입니다. -->
    <div class="modal_header">
      <h2 class="modal_title" id="modal-basic-title">알림</h2>
      <button type="button" class="modal_close" data-modal-close aria-label="닫기">×</button>
    </div>
    <div class="modal_body"><p>Modal 대화상자 본문입니다.</p></div>
    <!-- 확인·취소 등 푸터 액션 영역입니다. -->
    <div class="modal_footer">
      <button type="button" class="btn btn_ghost" data-modal-close>취소</button
      ><button type="button" class="btn btn_filled color_primary" data-modal-close>확인</button>
    </div>
  </div>
</div>
`})))()}var it;function at(){return(at=e((()=>{it=`{# Modal 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# modal 루트에 is-open·크기·스크롤 변형 클래스를 함께 적용합니다. #}
{% set modalId = id | default('modal-basic') %}
<div
  class="modal{% if size and size != 'md' %} modal_{{ size }}{% endif %}{% if scrollable %} modal_scrollable{% endif %}{% if open %} is-open{% endif %}"
  id="{{ modalId }}"
  data-component="Modal"
  data-modal{% if backdrop == false %}
  data-modal-backdrop="false"{% endif %}
  role="dialog"
  aria-modal="true"
  aria-labelledby="{{ modalId }}-title"
  tabindex="-1"{% if not open %}
  hidden{% endif %}
>
  {# 백드롭 클릭으로 닫을 수 있습니다. #}
  <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
  <div class="modal_dialog">
    {# 제목과 닫기 버튼을 담는 헤더입니다. #}
    <div class="modal_header">
      <h2 class="modal_title" id="{{ modalId }}-title">{{ title | default('Modal') }}</h2>
      <button type="button" class="modal_close" data-modal-close aria-label="{{ closeLabel | default('닫기') }}">
        ×
      </button>
    </div>
    {# 대화상자 본문입니다. #}
    <div class="modal_body">{{ content | default('Modal 대화상자 본문입니다.') | safe }}</div>
    {# 확인·취소 등 푸터 액션 영역입니다. #}
    {% if footer %}
    <div
      class="modal_footer{% if footerAlign and footerAlign != 'end' %} modal_footer-{{ footerAlign }}{% endif %}{% if footerAlign == 'even' and footerRatio and footerRatio != '1-1' %} modal_footer-even-{{ footerRatio }}{% endif %}{% if footerNoPadBottom %} modal_footer-no-pad-b{% endif %}"
    >
      {{ footer | safe }}
    </div>
    {% endif %}
  </div>
</div>
`})))()}var ot;function st(){return(st=e((()=>{ot=`/**
 * Modal 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = ['sm', 'md', 'lg', 'fullscreen']; // 지원하는 대화상자 크기입니다.
// 문서별 열린 Modal 수를 추적해 body 스크롤 잠금을 공유합니다.
const documentModalCounts = new WeakMap();
// iframe 포털 루트를 인스턴스별로 구분하는 ID입니다.
const portalOwnerId = Math.random().toString(36).slice(2, 10);

// iframe에서도 최상위 문서에 Modal을 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getModalPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let targetDocument = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
  }
  if (targetDocument === currentDocument) return currentDocument.body;
  // 상위 문서에 UXKM 스타일을 버전 쿼리와 함께 연결합니다.
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'modal-contrast-20260819-2');
  let stylesheet = targetDocument.getElementById('uxkm-modal-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-modal-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;

  // 이전 공유 루트를 제거하고 소유자별 루트를 사용합니다.
  targetDocument.getElementById('uxkm-modal-portal-root')?.remove();
  const rootId = \`uxkm-modal-portal-root-\${portalOwnerId}\`;
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    root.className = 'uxkm-modal-portal-root';
    targetDocument.body.appendChild(root);
    currentWindow?.addEventListener('pagehide', () => root?.remove(), { once: true });
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

export function Modal({
  id, // 대화상자 DOM id입니다. 없으면 생성합니다.
  title, // 기본 헤더 제목입니다.
  size = 'md', // 대화상자 크기입니다.
  scrollable = false, // 본문만 스크롤하는 변형입니다.
  backdrop = true, // 백드롭 클릭으로 닫을지 여부입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  footerAlign = 'end', // 푸터 액션 정렬입니다.
  footerRatio = '1-1', // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom = false, // 푸터 하단 패딩 제거입니다.
  header, // title 대신 사용할 커스텀 헤더입니다.
  footer, // 푸터 액션 콘텐츠입니다.
  children = 'Modal', // 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  onClose, // close · backdrop · escape 사유로 호출됩니다.
  ...props // id 외 나머지 속성을 루트 요소에 전달합니다.
}) {
  const generatedId = useId().replace(/:/g, ''); // React id에서 콜론을 제거합니다.
  const modalId = id || \`modal-\${generatedId}\`; // 최종 루트 id입니다.
  const titleId = \`\${modalId}-title\`; // aria-labelledby에 연결할 제목 id입니다.
  const rootRef = useRef(null); // 포커스 트랩용 루트 참조입니다.
  const previousFocusRef = useRef(null); // 닫힌 뒤 복원할 이전 포커스입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen); // 비제어 열림 상태입니다.
  const visible = open ?? internalOpen; // 제어·비제어를 합친 최종 표시 상태입니다.
  const resolvedSize = sizes.includes(size) ? size : 'md'; // 검증된 크기입니다.
  const portalRoot = visible ? getModalPortalRoot() : null; // 열렸을 때만 포털 루트를 준비합니다.
  // 크기·스크롤·열림 상태 클래스를 조합합니다.
  const classes = useMemo(
    () =>
      [
        'modal', // Modal 루트 클래스입니다.
        resolvedSize !== 'md' && \`modal_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
        scrollable && 'modal_scrollable', // 본문 스크롤 변형입니다.
        visible && 'is-open', // 열림 상태 클래스입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' '),
    [className, resolvedSize, scrollable, visible],
  );
  // 푸터 정렬·비율·패딩 클래스를 조합합니다.
  const footerClasses = [
    'modal_footer', // 푸터 루트 클래스입니다.
    footerAlign !== 'end' && \`modal_footer-\${footerAlign}\`, // end가 아닐 때만 정렬 변형입니다.
    footerAlign === 'even' && footerRatio !== '1-1' && \`modal_footer-even-\${footerRatio}\`, // even 비율입니다.
    footerNoPadBottom && 'modal_footer-no-pad-b', // 하단 패딩 제거입니다.
  ]
    .filter(Boolean)
    .join(' ');

  // 비제어면 내부 상태를 끄고 onClose를 알립니다.
  const requestClose = (reason, event) => {
    if (open === undefined) setInternalOpen(false);
    onClose?.(reason, event);
  };

  // 열림 시 스크롤 잠금·포커스·Escape·Tab 트랩을 연결합니다.
  useEffect(() => {
    if (!visible || !portalRoot) return undefined;
    const targetDocument = portalRoot.ownerDocument;
    previousFocusRef.current = targetDocument.activeElement;
    documentModalCounts.set(targetDocument, (documentModalCounts.get(targetDocument) || 0) + 1);
    targetDocument.body.classList.add('is-modal-open');
    const focusId = targetDocument.defaultView?.requestAnimationFrame(() =>
      rootRef.current?.focus(),
    );
    const handleKeyDown = (event) => {
      // 가장 위(마지막) 열린 Modal만 키보드를 처리합니다.
      const openModals = portalRoot.querySelectorAll('.modal.is-open');
      if (openModals[openModals.length - 1] !== rootRef.current) return;
      if (event.key === 'Escape') requestClose('escape', event);
      if (event.key !== 'Tab' || !rootRef.current) return;
      const focusable = [
        ...rootRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => !element.disabled);
      if (!focusable.length) {
        event.preventDefault();
        rootRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      // Shift+Tab / Tab으로 포커스를 대화상자 안에 가둡니다.
      if (event.shiftKey && targetDocument.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && targetDocument.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    targetDocument.addEventListener('keydown', handleKeyDown);
    return () => {
      if (focusId) targetDocument.defaultView?.cancelAnimationFrame(focusId);
      targetDocument.removeEventListener('keydown', handleKeyDown);
      const remaining = Math.max(0, (documentModalCounts.get(targetDocument) || 1) - 1);
      documentModalCounts.set(targetDocument, remaining);
      // 마지막 Modal이 닫힐 때만 body 스크롤 잠금을 해제합니다.
      if (remaining === 0) targetDocument.body.classList.remove('is-modal-open');
      previousFocusRef.current?.focus?.();
    };
  }, [visible, portalRoot]);

  if (!visible || !portalRoot) return null;

  return createPortal(
    <div
      {...props}
      ref={rootRef}
      id={modalId}
      className={classes}
      data-component="Modal"
      data-modal=""
      data-modal-backdrop={backdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      tabIndex={-1}
    >
      {/* 백드롭 클릭으로 닫을 수 있습니다. */}
      <div
        className="modal_backdrop"
        aria-hidden="true"
        onClick={(event) => backdrop && requestClose('backdrop', event)}
      />
      <div className="modal_dialog">
        {/* 제목 또는 커스텀 헤더와 닫기 버튼입니다. */}
        {(title || header) && (
          <div className="modal_header">
            {header ?? (
              <h2 className="modal_title" id={titleId}>
                {title}
              </h2>
            )}
            <Button
              variant="ghost"
              iconOnly
              className="modal_close"
              ariaLabel={closeLabel}
              iconBefore={<Icon name="close" size="sm" className="modal_close-icon" />}
              onClick={(event) => requestClose('close', event)}
            />
          </div>
        )}
        <div className="modal_body">{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>,
    portalRoot,
  );
}

export default Modal;
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`<!--
  Modal 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmModal' });

// 열림 상태·크기·푸터 레이아웃 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 대화상자 DOM id입니다. 없으면 생성합니다.
  title: String, // 기본 헤더 제목입니다.
  size: { type: String, default: 'md' }, // 대화상자 크기입니다.
  scrollable: Boolean, // 본문만 스크롤하는 변형입니다.
  backdrop: { type: Boolean, default: true }, // 백드롭 클릭으로 닫을지 여부입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  footerAlign: { type: String, default: 'end' }, // 푸터 액션 정렬입니다.
  footerRatio: { type: String, default: '1-1' }, // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom: Boolean, // 푸터 하단 패딩 제거입니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
});

const emit = defineEmits(['close']); // close · backdrop · escape 사유로 호출됩니다.
const internalOpen = ref(props.defaultOpen); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const root = ref(null); // 포커스용 루트 참조입니다.
const modalId = props.id || \`modal-\${Math.random().toString(36).slice(2, 9)}\`; // 최종 루트 id입니다.
const titleId = \`\${modalId}-title\`; // aria-labelledby에 연결할 제목 id입니다.
let previousFocus; // 닫힌 뒤 복원할 이전 포커스입니다.

// iframe에서도 최상위 문서에 Modal을 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'modal-contrast-20260819-2');
  let stylesheet = targetDocument.getElementById('uxkm-modal-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-modal-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-modal-portal-root');
  if (!portal) {
    portal = targetDocument.createElement('div');
    portal.id = 'uxkm-modal-portal-root';
    portal.className = 'uxkm-modal-portal-root';
    targetDocument.body.appendChild(portal);
  }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();

// 크기·스크롤·열림 상태 클래스를 조합합니다.
const rootClasses = computed(() =>
  [
    'modal', // Modal 루트 클래스입니다.
    props.size !== 'md' && \`modal_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
    props.scrollable && 'modal_scrollable', // 본문 스크롤 변형입니다.
    visible.value && 'is-open', // 열림 상태 클래스입니다.
  ].filter(Boolean),
);
// 푸터 정렬·비율·패딩 클래스를 조합합니다.
const footerClasses = computed(() =>
  [
    'modal_footer', // 푸터 루트 클래스입니다.
    props.footerAlign !== 'end' && \`modal_footer-\${props.footerAlign}\`, // end가 아닐 때만 정렬 변형입니다.
    props.footerAlign === 'even' &&
      props.footerRatio !== '1-1' &&
      \`modal_footer-even-\${props.footerRatio}\`, // even 비율입니다.
    props.footerNoPadBottom && 'modal_footer-no-pad-b', // 하단 패딩 제거입니다.
  ].filter(Boolean),
);

// 비제어면 내부 상태를 끄고 close 이벤트를 알립니다.
function close(reason = 'close', event) {
  if (props.open === undefined) internalOpen.value = false;
  emit('close', reason, event);
}
function keydown(event) {
  if (event.key === 'Escape') close('escape', event);
}
// 열림 시 스크롤 잠금·Escape·포커스를 연결합니다.
watch(
  visible,
  async (isOpen) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (isOpen) {
      previousFocus = targetDocument.activeElement;
      targetDocument.body.classList.add('is-modal-open');
      targetDocument.addEventListener('keydown', keydown);
      await nextTick();
      root.value?.focus();
    } else {
      targetDocument.body.classList.remove('is-modal-open');
      targetDocument.removeEventListener('keydown', keydown);
      previousFocus?.focus?.();
    }
  },
  { immediate: true },
);
onBeforeUnmount(() =>
  (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown),
);
<\/script>

<template>
  <!-- 포털로 대화상자를 문서 최상위에 올립니다. -->
  <Teleport :to="portalTarget">
    <div
      v-if="visible"
      ref="root"
      :id="modalId"
      :class="rootClasses"
      data-component="Modal"
      data-modal
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title || $slots.header ? titleId : undefined"
      tabindex="-1"
    >
      <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
      <div
        v-if="backdrop"
        class="modal_backdrop"
        aria-hidden="true"
        @click="close('backdrop', $event)"
      />
      <div class="modal_dialog">
        <!-- 제목 또는 커스텀 헤더와 닫기 버튼입니다. -->
        <div v-if="title || $slots.header" class="modal_header">
          <slot name="header"
            ><h2 :id="titleId" class="modal_title">{{ title }}</h2></slot
          ><Button
            variant="ghost"
            icon-only
            class="modal_close"
            :aria-label="closeLabel"
            @click="close('close', $event)"
            ><Icon name="close" size="sm" class="modal_close-icon"
          /></Button>
        </div>
        <div class="modal_body"><slot>Modal</slot></div>
        <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" :close="close" /></div>
      </div>
    </div>
  </Teleport>
</template>
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`<!-- Drawer 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- data-drawer-trigger로 대상 Drawer를 엽니다. -->
<button
  type="button"
  class="btn btn_filled color_primary"
  data-drawer-trigger="#drawer-basic"
  aria-controls="drawer-basic"
  aria-expanded="false"
>
  Drawer 열기
</button>
<!-- drawer 루트에 is-open과 방향·크기 변형 클래스를 함께 적용합니다. -->
<div
  class="drawer"
  id="drawer-basic"
  data-component="Drawer"
  data-drawer
  role="dialog"
  aria-modal="true"
  aria-labelledby="drawer-basic-title"
  tabindex="-1"
  hidden
>
  <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <!-- drawer_placement-*로 패널이 열리는 방향을 지정합니다. -->
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-basic-title">상세 정보</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">×</button>
    </div>
    <div class="drawer_body"><p>Drawer 패널 본문입니다.</p></div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_ghost" data-drawer-close>취소</button
      ><button type="button" class="btn btn_filled color_primary" data-drawer-close>확인</button>
    </div>
  </div>
</div>
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`{# Drawer 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# drawer 루트에 is-open과 방향·크기 변형 클래스를 함께 적용합니다. #}
{% set drawerId = id | default('drawer-basic') %}
<div
  class="drawer{% if open %} is-open{% endif %}"
  id="{{ drawerId }}"
  data-component="Drawer"
  data-drawer{% if openOnLoad %}
  data-drawer-open-on-load="true"{% endif %}{% if backdrop == false %}
  data-drawer-backdrop="false"{% endif %}
  role="dialog"
  aria-modal="true"
  aria-labelledby="{{ drawerId }}-title"
  tabindex="-1"{% if not open %}
  hidden{% endif %}
>
  {# 백드롭 클릭으로 닫을 수 있습니다. #}
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  {# drawer_placement-*로 패널이 열리는 방향을 지정합니다. #}
  <div
    class="drawer_panel drawer_placement-{{ placement | default('right') }}{% if size and size != 'md' %} drawer_{{ size }}{% endif %}{% if draggable and placement == 'bottom' %} drawer_draggable{% endif %}"
  >
    {# 하단 시트용 드래그 핸들입니다. #}
    {% if draggable and placement == 'bottom' %}
    <div class="drawer_handle" aria-hidden="true"><span class="drawer_handle-bar"></span></div>
    {% endif %}
    {# 제목·추가 영역·닫기 버튼을 담는 헤더입니다. #}
    <div class="drawer_header">
      <h2 class="drawer_title" id="{{ drawerId }}-title">{{ title | default('Drawer') }}</h2>
      {% if extra %}
      <div class="drawer_extra">{{ extra | safe }}</div>
      {% endif %}<button
        type="button"
        class="drawer_close"
        data-drawer-close
        aria-label="{{ closeLabel | default('닫기') }}"
      >
        ×
      </button>
    </div>
    <div class="drawer_body">{{ content | default('Drawer 패널 본문입니다.') | safe }}</div>
    {% if footer %}
    <div
      class="drawer_footer{% if footerAlign and footerAlign != 'end' %} drawer_footer-{{ footerAlign }}{% endif %}{% if footerAlign == 'even' and footerRatio and footerRatio != '1-1' %} drawer_footer-even-{{ footerRatio }}{% endif %}{% if footerNoPadBottom %} drawer_footer-no-pad-b{% endif %}"
    >
      {{ footer | safe }}
    </div>
    {% endif %}
  </div>
</div>
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`/**
 * Drawer 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = ['sm', 'md', 'lg']; // 지원하는 패널 크기입니다.
const placements = ['left', 'right', 'top', 'bottom']; // 지원하는 열림 방향입니다.
const motions = ['slide', 'fade']; // 지원하는 열·닫힘 효과입니다.
const speeds = ['fast', 'normal', 'slow']; // 지원하는 전환 속도 프리셋입니다.
const speedScales = { fast: 0.65, normal: 1, slow: 1.5 };
const panelDurationBase = { x: 320, y: 360 };
const backdropCloseBase = 180;

function getCloseTiming(placement, speed) {
  const scale = speedScales[speeds.includes(speed) ? speed : 'normal'];
  const isVertical = placement === 'top' || placement === 'bottom';
  const panelMs = Math.round((isVertical ? panelDurationBase.y : panelDurationBase.x) * scale);
  const backdropMs = Math.round(backdropCloseBase * scale);
  return { panelMs, backdropMs, totalMs: backdropMs + panelMs };
}
// 문서별 열린 Drawer 수를 추적해 body 스크롤 잠금을 공유합니다.
const documentDrawerCounts = new WeakMap();
const portalOwnerId = Math.random().toString(36).slice(2, 10); // iframe 포털 소유자 ID입니다.

// iframe에서도 최상위 문서에 Drawer를 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getDrawerPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let targetDocument = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
  }
  if (targetDocument === currentDocument) return currentDocument.body;

  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'drawer-motion-20260903b');
  let stylesheet = targetDocument.getElementById('uxkm-drawer-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-drawer-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;

  targetDocument.getElementById('uxkm-drawer-portal-root')?.remove();
  const rootId = \`uxkm-drawer-portal-root-\${portalOwnerId}\`;
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    root.className = 'uxkm-drawer-portal-root';
    targetDocument.body.appendChild(root);
    currentWindow?.addEventListener('pagehide', () => root?.remove(), { once: true });
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

export function Drawer({
  id, // 패널 DOM id입니다. 없으면 생성합니다.
  title, // 기본 헤더 제목입니다.
  size = 'md', // 패널 크기입니다.
  placement = 'right', // 패널이 열리는 방향입니다.
  motion = 'slide', // 열·닫힘 효과(slide | fade)입니다.
  speed = 'normal', // 전환 속도 프리셋(fast | normal | slow)입니다.
  backdrop = true, // 백드롭 클릭으로 닫을지 여부입니다.
  noBackdrop = false, // 백드롭을 완전히 끄는 옵션입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  openOnLoad = false, // 마운트 시 자동으로 엽니다.
  draggable = false, // 하단 시트 드래그 핸들입니다.
  footerAlign = 'end', // 푸터 액션 정렬입니다.
  footerRatio = '1-1', // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom = false, // 푸터 하단 패딩 제거입니다.
  header, // title 대신 사용할 커스텀 헤더입니다.
  extra, // 헤더 오른쪽 추가 영역입니다.
  footer, // 푸터 액션 콘텐츠입니다.
  children = 'Drawer', // 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  style, // 루트 인라인 스타일입니다.
  onClose, // close · backdrop · escape · drag 사유로 호출됩니다.
  ...props // id 외 나머지 속성을 루트 요소에 전달합니다.
}) {
  const generatedId = useId().replace(/:/g, '');
  const drawerId = id || \`drawer-\${generatedId}\`; // 최종 루트 id입니다.
  const titleId = \`\${drawerId}-title\`; // aria-labelledby에 연결할 제목 id입니다.
  const rootRef = useRef(null); // 포커스 트랩용 루트 참조입니다.
  const panelRef = useRef(null); // 드래그 높이 조절용 패널 참조입니다.
  const dragRef = useRef(null); // 진행 중인 드래그 상태입니다.
  const closeTimerRef = useRef(null); // 닫힘 애니메이션 fallback 타이머입니다.
  const closeFinishedRef = useRef(false); // 닫힘 완료 중복 호출을 막습니다.
  const previousFocusRef = useRef(null); // 닫힌 뒤 복원할 이전 포커스입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen || openOnLoad);
  const visible = open ?? internalOpen; // 제어·비제어를 합친 최종 표시 상태입니다.
  const [present, setPresent] = useState(Boolean(visible));
  const isClosing = present && !visible;
  const resolvedSize = sizes.includes(size) ? size : 'md';
  const resolvedPlacement = placements.includes(placement) ? placement : 'right';
  const resolvedMotion = motions.includes(motion) ? motion : 'slide';
  const resolvedSpeed = speeds.includes(speed) ? speed : 'normal';
  const motionScale = speedScales[resolvedSpeed];
  // 드래그 핸들은 bottom placement에서만 활성화합니다.
  const showDragHandle = draggable && resolvedPlacement === 'bottom';
  const portalRoot = present ? getDrawerPortalRoot() : null;
  const rootClasses = useMemo(
    () =>
      [
        'drawer',
        \`drawer_motion-\${resolvedMotion}\`,
        (visible || isClosing) && 'is-open',
        isClosing && 'is-closing',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [className, visible, isClosing, resolvedMotion],
  );
  const rootStyle = useMemo(
    () => ({
      '--drawer-motion-scale': motionScale,
      ...style,
    }),
    [motionScale, style],
  );
  // 방향·크기·드래그 가능 패널 클래스를 조합합니다.
  const panelClasses = [
    'drawer_panel', // 패널 루트 클래스입니다.
    \`drawer_placement-\${resolvedPlacement}\`, // 열림 방향입니다.
    resolvedSize !== 'md' && \`drawer_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
    showDragHandle && 'drawer_draggable', // 드래그 시트 변형입니다.
  ]
    .filter(Boolean)
    .join(' ');
  const footerClasses = [
    'drawer_footer',
    footerAlign !== 'end' && \`drawer_footer-\${footerAlign}\`,
    footerAlign === 'even' && footerRatio !== '1-1' && \`drawer_footer-even-\${footerRatio}\`,
    footerNoPadBottom && 'drawer_footer-no-pad-b',
  ]
    .filter(Boolean)
    .join(' ');

  const requestClose = (reason, event) => {
    if (isClosing) return;
    if (open === undefined) setInternalOpen(false);
    onClose?.(reason, event);
  };

  const finishClose = () => {
    if (closeFinishedRef.current) return;
    closeFinishedRef.current = true;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    const root = rootRef.current;
    if (root) root.style.visibility = 'hidden';
    setPresent(false);
  };

  useEffect(() => {
    if (!visible) return;
    closeFinishedRef.current = false;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (rootRef.current) rootRef.current.style.removeProperty('visibility');
    setPresent(true);
  }, [visible]);

  // 닫힘 애니메이션 완료 후 포커스를 복원합니다.
  useEffect(() => {
    if (present) return;
    previousFocusRef.current?.focus?.();
  }, [present]);

  // 닫힘 슬라이드 — is-closing 동안 is-open을 유지해 패널이 열린 위치에서 slide-out 합니다.
  useEffect(() => {
    if (!isClosing) return undefined;
    const panel = panelRef.current;
    if (!panel) {
      finishClose();
      return undefined;
    }

    panel.classList.remove('is-expanded');
    panel.style.removeProperty('height');

    const view = panel.ownerDocument.defaultView;
    const reducedMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      finishClose();
      return undefined;
    }

    const { totalMs } = getCloseTiming(resolvedPlacement, resolvedSpeed);
    const handleAnimationEnd = (event) => {
      if (event.target !== panel) return;
      if (
        !event.animationName.startsWith('drawer-slide-out') &&
        !event.animationName.startsWith('drawer-fade-out')
      ) {
        return;
      }
      finishClose();
    };

    panel.addEventListener('animationend', handleAnimationEnd);
    closeTimerRef.current = view?.setTimeout(finishClose, totalMs + 80);

    return () => {
      panel.removeEventListener('animationend', handleAnimationEnd);
      if (closeTimerRef.current) {
        view?.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [isClosing, resolvedPlacement, resolvedSpeed]);

  // 하단 시트 드래그를 시작합니다.
  const startDrag = (event) => {
    if (!showDragHandle || (event.button != null && event.button !== 0)) return;
    if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
    const panel = panelRef.current;
    const collapsed = panel.classList.contains('is-expanded')
      ? Number.parseFloat(panel.dataset.collapsedHeight || '')
      : panel.getBoundingClientRect().height;
    const safeCollapsed = collapsed > 0 ? collapsed : panel.getBoundingClientRect().height;
    panel.dataset.collapsedHeight = String(safeCollapsed);
    const viewportHeight = panel.ownerDocument.defaultView?.innerHeight || safeCollapsed;
    dragRef.current = {
      pointerId: event.pointerId,
      target: event.currentTarget,
      startY: event.clientY,
      startHeight: panel.getBoundingClientRect().height,
      collapsed: safeCollapsed,
      expanded: Math.max(safeCollapsed + 48, viewportHeight * 0.9),
      deltaY: 0,
    };
    panel.classList.add('is-dragging');
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  };

  // 드래그 중 패널 높이를 갱신합니다.
  const moveDrag = (event) => {
    const state = dragRef.current;
    const panel = panelRef.current;
    if (!state || !panel || state.pointerId !== event.pointerId) return;
    const deltaY = state.startY - event.clientY;
    const nextHeight = Math.min(state.expanded, Math.max(0, state.startHeight + deltaY));
    state.deltaY = deltaY;
    panel.style.height = \`\${nextHeight}px\`;
    panel.style.transform = 'translateY(0)';
    event.preventDefault();
  };

  // 드래그 종료 시 닫기·확장·축소 중 하나로 스냅합니다.
  const endDrag = (event) => {
    const state = dragRef.current;
    const panel = panelRef.current;
    if (!state || !panel || state.pointerId !== event.pointerId) return;
    dragRef.current = null;
    panel.classList.remove('is-dragging');
    try {
      state.target?.releasePointerCapture?.(state.pointerId);
    } catch {
      /* pointer capture가 이미 해제된 경우 */
    }
    const currentHeight = panel.getBoundingClientRect().height;
    const closeThreshold = state.collapsed * 0.55;
    const expandThreshold = (state.collapsed + state.expanded) / 2;
    const startedExpanded = state.startHeight >= expandThreshold;
    panel.style.height = '';
    panel.style.transform = '';
    if (
      currentHeight < closeThreshold ||
      (!startedExpanded && state.deltaY < -state.collapsed * 0.4)
    ) {
      panel.classList.remove('is-expanded');
      requestClose('drag', event);
    } else if (currentHeight >= expandThreshold || (!startedExpanded && state.deltaY > 48)) {
      panel.classList.add('is-expanded');
    } else {
      panel.classList.remove('is-expanded');
    }
  };

  // 열림 시 스크롤 잠금·포커스·Escape·Tab 트랩을 연결합니다.
  useEffect(() => {
    if (!present || !portalRoot) return undefined;
    const targetDocument = portalRoot.ownerDocument;
    previousFocusRef.current = targetDocument.activeElement;
    documentDrawerCounts.set(targetDocument, (documentDrawerCounts.get(targetDocument) || 0) + 1);
    targetDocument.body.classList.add('is-drawer-open');
    const focusId = targetDocument.defaultView?.requestAnimationFrame(() =>
      rootRef.current?.focus(),
    );
    const handleKeyDown = (event) => {
      const openDrawers = portalRoot.querySelectorAll('.drawer.is-open');
      if (openDrawers[openDrawers.length - 1] !== rootRef.current) return;
      if (event.key === 'Escape' && visible && !isClosing) requestClose('escape', event);
      if (event.key !== 'Tab' || !rootRef.current) return;
      const focusable = [
        ...rootRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => !element.disabled);
      if (!focusable.length) {
        event.preventDefault();
        rootRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && targetDocument.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && targetDocument.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    targetDocument.addEventListener('keydown', handleKeyDown);
    return () => {
      if (focusId) targetDocument.defaultView?.cancelAnimationFrame(focusId);
      targetDocument.removeEventListener('keydown', handleKeyDown);
      const remaining = Math.max(0, (documentDrawerCounts.get(targetDocument) || 1) - 1);
      documentDrawerCounts.set(targetDocument, remaining);
      if (remaining === 0) targetDocument.body.classList.remove('is-drawer-open');
    };
  }, [present, portalRoot, visible, isClosing]);

  if (!present || !portalRoot) return null;
  return createPortal(
    <div
      {...props}
      ref={rootRef}
      id={drawerId}
      className={rootClasses}
      style={rootStyle}
      data-component="Drawer"
      data-drawer=""
      data-drawer-motion={resolvedMotion}
      data-drawer-speed={resolvedSpeed}
      data-drawer-draggable={showDragHandle ? 'true' : undefined}
      data-drawer-backdrop={backdrop && !noBackdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title || header ? titleId : undefined}
      tabIndex={-1}
    >
      {/* 백드롭 클릭으로 닫을 수 있습니다. */}
      <div
        className="drawer_backdrop"
        aria-hidden="true"
        onClick={(event) => backdrop && !noBackdrop && requestClose('backdrop', event)}
      />
      <div ref={panelRef} className={panelClasses}>
        {/* 하단 시트용 드래그 핸들입니다. */}
        {showDragHandle && (
          <div
            className="drawer_handle"
            data-drawer-drag-handle=""
            aria-hidden="true"
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <span className="drawer_handle-bar" />
          </div>
        )}
        {(title || header) && (
          <div
            className="drawer_header"
            onPointerDown={showDragHandle ? startDrag : undefined}
            onPointerMove={showDragHandle ? moveDrag : undefined}
            onPointerUp={showDragHandle ? endDrag : undefined}
            onPointerCancel={showDragHandle ? endDrag : undefined}
          >
            {header ?? (
              <h2 className="drawer_title" id={titleId}>
                {title}
              </h2>
            )}
            {extra && <div className="drawer_extra">{extra}</div>}
            <Button
              variant="ghost"
              iconOnly
              className="drawer_close"
              ariaLabel={closeLabel}
              iconBefore={<Icon name="close" size="sm" className="drawer_close-icon" />}
              onClick={(event) => requestClose('close', event)}
            />
          </div>
        )}
        <div className="drawer_body">{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>,
    portalRoot,
  );
}

export default Drawer;
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`<!--
  Drawer 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmDrawer' });
// 열림 상태·방향·크기·푸터 레이아웃 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 패널 DOM id입니다. 없으면 생성합니다.
  title: String, // 기본 헤더 제목입니다.
  size: { type: String, default: 'md' }, // 패널 크기입니다.
  placement: { type: String, default: 'right' }, // 패널이 열리는 방향입니다.
  backdrop: { type: Boolean, default: true }, // 백드롭 클릭으로 닫을지 여부입니다.
  noBackdrop: Boolean, // 백드롭을 완전히 끄는 옵션입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  openOnLoad: Boolean, // 마운트 시 자동으로 엽니다.
  draggable: Boolean, // 하단 시트 드래그 핸들입니다.
  footerAlign: { type: String, default: 'end' }, // 푸터 액션 정렬입니다.
  footerRatio: { type: String, default: '1-1' }, // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom: Boolean, // 푸터 하단 패딩 제거입니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
});
const emit = defineEmits(['close']); // close · backdrop · escape · drag 사유로 호출됩니다.
const internalOpen = ref(props.defaultOpen || props.openOnLoad); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const root = ref(null); // 포커스용 루트 참조입니다.
const panel = ref(null); // 드래그 높이 조절용 패널 참조입니다.
const drawerId = props.id || \`drawer-\${Math.random().toString(36).slice(2, 9)}\`; // 최종 루트 id입니다.
const titleId = \`\${drawerId}-title\`; // aria-labelledby에 연결할 제목 id입니다.
let previousFocus; // 닫힌 뒤 복원할 이전 포커스입니다.
let dragState; // 진행 중인 드래그 상태입니다.

// iframe에서도 최상위 문서에 Drawer를 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'drawer-contrast-20260819');
  let stylesheet = targetDocument.getElementById('uxkm-drawer-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-drawer-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-drawer-portal-root');
  if (!portal) {
    portal = targetDocument.createElement('div');
    portal.id = 'uxkm-drawer-portal-root';
    portal.className = 'uxkm-drawer-portal-root';
    targetDocument.body.appendChild(portal);
  }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();
const resolvedPlacement = computed(() =>
  ['left', 'right', 'top', 'bottom'].includes(props.placement) ? props.placement : 'right',
); // 검증된 열림 방향입니다.
const resolvedSize = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.
// 드래그 핸들은 bottom placement에서만 활성화합니다.
const showDragHandle = computed(() => props.draggable && resolvedPlacement.value === 'bottom');
const rootClasses = computed(() => ['drawer', visible.value && 'is-open'].filter(Boolean)); // 루트·열림 상태 클래스입니다.
// 방향·크기·드래그 가능 패널 클래스를 조합합니다.
const panelClasses = computed(() =>
  [
    'drawer_panel', // 패널 루트 클래스입니다.
    \`drawer_placement-\${resolvedPlacement.value}\`, // 열림 방향입니다.
    resolvedSize.value !== 'md' && \`drawer_\${resolvedSize.value}\`, // md가 아닐 때만 크기 변형입니다.
    showDragHandle.value && 'drawer_draggable', // 드래그 시트 변형입니다.
  ].filter(Boolean),
);
const footerClasses = computed(() =>
  [
    'drawer_footer', // 푸터 루트 클래스입니다.
    props.footerAlign !== 'end' && \`drawer_footer-\${props.footerAlign}\`, // 정렬 변형입니다.
    props.footerAlign === 'even' &&
      props.footerRatio !== '1-1' &&
      \`drawer_footer-even-\${props.footerRatio}\`, // even 비율입니다.
    props.footerNoPadBottom && 'drawer_footer-no-pad-b', // 하단 패딩 제거입니다.
  ].filter(Boolean),
);

// 비제어면 내부 상태를 끄고 close 이벤트를 알립니다.
function close(reason = 'close', event) {
  if (props.open === undefined) internalOpen.value = false;
  emit('close', reason, event);
}
function keydown(event) {
  if (event.key === 'Escape') close('escape', event);
}
// 하단 시트 드래그를 시작합니다.
function startDrag(event) {
  if (!showDragHandle.value || (event.button != null && event.button !== 0)) return;
  if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
  const element = panel.value;
  if (!element) return;
  const stored = Number.parseFloat(element.dataset.collapsedHeight || '');
  const collapsed =
    element.classList.contains('is-expanded') && stored > 0
      ? stored
      : element.getBoundingClientRect().height;
  element.dataset.collapsedHeight = String(collapsed);
  const viewportHeight = element.ownerDocument.defaultView?.innerHeight || collapsed;
  dragState = {
    pointerId: event.pointerId,
    target: event.currentTarget,
    startY: event.clientY,
    startHeight: element.getBoundingClientRect().height,
    collapsed,
    expanded: Math.max(collapsed + 48, viewportHeight * 0.9),
    deltaY: 0,
  };
  element.classList.add('is-dragging');
  event.currentTarget.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}
// 드래그 중 패널 높이를 갱신합니다.
function moveDrag(event) {
  const state = dragState;
  const element = panel.value;
  if (!state || !element || state.pointerId !== event.pointerId) return;
  const deltaY = state.startY - event.clientY;
  state.deltaY = deltaY;
  element.style.height = \`\${Math.min(state.expanded, Math.max(0, state.startHeight + deltaY))}px\`;
  element.style.transform = 'translateY(0)';
  event.preventDefault();
}
// 드래그 종료 시 닫기·확장·축소 중 하나로 스냅합니다.
function endDrag(event) {
  const state = dragState;
  const element = panel.value;
  if (!state || !element || state.pointerId !== event.pointerId) return;
  dragState = null;
  element.classList.remove('is-dragging');
  try {
    state.target?.releasePointerCapture?.(state.pointerId);
  } catch {
    /* pointer capture가 이미 해제된 경우 */
  }
  const currentHeight = element.getBoundingClientRect().height;
  const expandThreshold = (state.collapsed + state.expanded) / 2;
  const startedExpanded = state.startHeight >= expandThreshold;
  element.style.height = '';
  element.style.transform = '';
  if (
    currentHeight < state.collapsed * 0.55 ||
    (!startedExpanded && state.deltaY < -state.collapsed * 0.4)
  ) {
    element.classList.remove('is-expanded');
    close('drag', event);
  } else if (currentHeight >= expandThreshold || (!startedExpanded && state.deltaY > 48)) {
    element.classList.add('is-expanded');
  } else {
    element.classList.remove('is-expanded');
  }
}
// 열림 시 스크롤 잠금·Escape·포커스를 연결합니다.
watch(
  visible,
  async (isOpen) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (isOpen) {
      previousFocus = targetDocument.activeElement;
      targetDocument.body.classList.add('is-drawer-open');
      targetDocument.addEventListener('keydown', keydown);
      await nextTick();
      root.value?.focus();
    } else {
      targetDocument.body.classList.remove('is-drawer-open');
      targetDocument.removeEventListener('keydown', keydown);
      previousFocus?.focus?.();
    }
  },
  { immediate: true },
);
onBeforeUnmount(() =>
  (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown),
);
<\/script>

<template>
  <!-- 포털로 패널을 문서 최상위에 올립니다. -->
  <Teleport :to="portalTarget">
    <div
      v-if="visible"
      ref="root"
      :id="drawerId"
      :class="rootClasses"
      data-component="Drawer"
      data-drawer
      :data-drawer-draggable="showDragHandle ? 'true' : undefined"
      :data-drawer-backdrop="backdrop && !noBackdrop ? undefined : 'false'"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title || $slots.header ? titleId : undefined"
      tabindex="-1"
    >
      <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
      <div
        class="drawer_backdrop"
        aria-hidden="true"
        @click="backdrop && !noBackdrop && close('backdrop', $event)"
      />
      <div ref="panel" :class="panelClasses">
        <!-- 하단 시트용 드래그 핸들입니다. -->
        <div
          v-if="showDragHandle"
          class="drawer_handle"
          data-drawer-drag-handle
          aria-hidden="true"
          @pointerdown="startDrag"
          @pointermove="moveDrag"
          @pointerup="endDrag"
          @pointercancel="endDrag"
        >
          <span class="drawer_handle-bar" />
        </div>
        <div
          v-if="title || $slots.header"
          class="drawer_header"
          @pointerdown="showDragHandle && startDrag($event)"
          @pointermove="showDragHandle && moveDrag($event)"
          @pointerup="showDragHandle && endDrag($event)"
          @pointercancel="showDragHandle && endDrag($event)"
        >
          <slot name="header"
            ><h2 :id="titleId" class="drawer_title">{{ title }}</h2></slot
          >
          <div v-if="$slots.extra" class="drawer_extra"><slot name="extra" /></div>
          <Button
            variant="ghost"
            icon-only
            class="drawer_close"
            :aria-label="closeLabel"
            @click="close('close', $event)"
            ><Icon name="close" size="sm" class="drawer_close-icon"
          /></Button>
        </div>
        <div class="drawer_body"><slot>Drawer</slot></div>
        <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" :close="close" /></div>
      </div>
    </div>
  </Teleport>
</template>
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`<!-- Popover 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- popover 루트가 트리거와 패널을 묶습니다. -->
<div class="popover" data-component="Popover" data-popover>
  <!-- 클릭으로 패널을 여는 트리거입니다. -->
  <button
    type="button"
    class="btn btn_outline popover_trigger"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="popover-basic"
  >
    Popover 열기
  </button>
  <!-- 화살표·헤더·본문을 담는 패널입니다. -->
  <div
    class="popover_panel"
    id="popover-basic"
    role="dialog"
    aria-labelledby="popover-basic-title"
    hidden
  >
    <span class="popover_arrow" aria-hidden="true"></span>
    <div class="popover_header">
      <div class="popover_title" id="popover-basic-title">안내</div>
      <button type="button" class="popover_close" data-popover-close aria-label="닫기">×</button>
    </div>
    <div class="popover_body"><p>Popover 본문입니다.</p></div>
  </div>
</div>
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`{# Popover 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# popover 루트가 트리거와 패널을 묶습니다. #}
{% set popoverId = id | default('popover-basic') %}
<div
  class="popover{% if size and size != 'md' %} popover_{{ size }}{% endif %}{% if placement %} popover_placement-{{ placement }}{% endif %}{% if noArrow %} popover_no-arrow{% endif %}{% if open %} is-open{% endif %}"
  data-component="Popover"
  data-popover{% if trigger == 'hover' %}
  data-popover-trigger="hover"{% endif %}
>
  {# 클릭 또는 hover로 패널을 여는 트리거입니다. #}
  <button
    type="button"
    class="btn btn_outline popover_trigger"
    aria-haspopup="dialog"
    aria-expanded="{{ 'true' if open else 'false' }}"
    aria-controls="{{ popoverId }}"
  >
    {{ triggerLabel | default('Popover 열기') }}
  </button>
  {# 화살표·헤더·본문을 담는 패널입니다. #}
  <div
    class="popover_panel"
    id="{{ popoverId }}"
    role="dialog"
    aria-labelledby="{{ popoverId }}-title"{% if not open %}
    hidden{% endif %}
  >
    {% if not noArrow %}<span class="popover_arrow" aria-hidden="true"></span
    >{% endif %}
    {% if title %}
    <div class="popover_header">
      <div class="popover_title" id="{{ popoverId }}-title">{{ title }}</div>
      <button type="button" class="popover_close" data-popover-close aria-label="닫기">×</button>
    </div>
    {% endif %}
    <div class="popover_body">{{ content | default('Popover 본문입니다.') | safe }}</div>
    {% if footer %}
    <div class="popover_footer">{{ footer | safe }}</div>
    {% endif %}
  </div>
</div>
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`/**
 * Popover 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = [
  'top',
  'top-center',
  'bottom',
  'bottom-center',
  'left',
  'right',
  'end',
]; // 지원하는 트리거 기준 배치입니다.
const sizes = ['sm', 'md', 'lg']; // 지원하는 패널 크기입니다.
const portalOwnerId = Math.random().toString(36).slice(2, 10); // iframe 포털 소유자 ID입니다.

// iframe에서도 최상위 문서에 Popover를 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getPopoverPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let targetDocument = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    /* 현재 문서를 사용합니다. */
  }
  if (targetDocument !== currentDocument) {
    const url = new URL('styles/uxkm.css', targetDocument.baseURI);
    url.searchParams.set('v', 'popover-20260819');
    let link = targetDocument.getElementById('uxkm-popover-portal-styles');
    if (!link) {
      link = targetDocument.createElement('link');
      link.id = 'uxkm-popover-portal-styles';
      link.rel = 'stylesheet';
      targetDocument.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  const id = \`uxkm-popover-portal-root-\${portalOwnerId}\`;
  let root = targetDocument.getElementById(id);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = id;
    root.className = 'uxkm-popover-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

// 트리거 래퍼 안에서 실제 포커스 가능한 컨트롤을 찾습니다.
const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';

export function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}

// iframe이면 상위 뷰포트 좌표로 보정한 getBoundingClientRect입니다.
export function topViewportRect(element, currentWindow = window) {
  const rect = element.getBoundingClientRect();
  try {
    if (element.ownerDocument === currentWindow.top?.document) return rect;
    const frame = currentWindow.frameElement?.getBoundingClientRect();
    if (frame)
      return {
        top: frame.top + rect.top,
        left: frame.left + rect.left,
        width: rect.width,
        height: rect.height,
      };
  } catch {
    /* 현재 뷰포트 좌표를 사용합니다. */
  }
  return rect;
}

export function Popover({
  id, // 패널 DOM id입니다. 없으면 생성합니다.
  placement = 'bottom', // 트리거 기준 배치입니다.
  size = 'md', // 패널 크기입니다.
  offset = 'md', // 전체 방향 공통 간격입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  offsetTop, // 위쪽 간격 개별 지정입니다.
  offsetRight, // 오른쪽 간격 개별 지정입니다.
  offsetBottom, // 아래쪽 간격 개별 지정입니다.
  offsetLeft, // 왼쪽 간격 개별 지정입니다.
  trigger = 'click', // click 또는 hover 작동 방식입니다.
  triggerContent, // 트리거로 렌더할 콘텐츠입니다.
  title, // 패널 제목입니다.
  panelLabel, // 제목 없을 때 접근성 라벨입니다.
  footer, // 패널 푸터입니다.
  children = 'Popover', // 패널 본문입니다.
  noArrow = false, // 화살표를 숨깁니다.
  closable, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  disabled = false, // 열기·닫기를 비활성화합니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onOpenChange, // 열림 상태 변경 시 호출됩니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  panelAlign = 'start', // 패널 정렬 기준입니다.
  arrowAnchor = 'content', // 화살표 기준(content · target · mixed)입니다.
  arrowTargetAlign = 'center', // 타깃 기준 화살표 정렬입니다.
  ...props // 패널에 전달할 나머지 속성입니다.
}) {
  const generatedId = useId().replace(/:/g, '');
  const panelId = id || \`popover-\${generatedId}\`;
  const titleId = \`\${panelId}-title\`;
  const triggerRef = useRef(null); // 트리거 래퍼 참조입니다.
  const panelRef = useRef(null); // 패널 참조입니다.
  const hoverTimerRef = useRef(null); // hover 닫기 지연 타이머입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [anchor, setAnchor] = useState(null); // 트리거 뷰포트 좌표입니다.
  const [measuredArrowPosition, setMeasuredArrowPosition] = useState(null); // 측정된 화살표 위치입니다.
  const visible = open ?? internalOpen;
  const resolvedPlacement = placements.includes(placement) ? placement : 'bottom';
  const resolvedSize = sizes.includes(size) ? size : 'md';
  const portalRoot = visible ? getPopoverPortalRoot() : null;
  // closable 미지정 시 click 트리거면 닫기 버튼을 켭니다.
  const showClose = closable ?? trigger === 'click';

  // 제어·비제어 열림 상태를 갱신하고 onOpenChange를 알립니다.
  const setVisible = (next, reason, event) => {
    if (disabled) return;
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next, reason, event);
  };
  const openFromTrigger = (reason, event) => {
    updatePosition();
    setVisible(true, reason, event);
  };
  const cancelHoverClose = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  };
  // hover 이탈 후 잠시 뒤 닫아 패널 이동을 허용합니다.
  const scheduleHoverClose = (event) => {
    cancelHoverClose();
    hoverTimerRef.current = setTimeout(() => setVisible(false, 'hover', event), 100);
  };
  const updatePosition = () => {
    const element = resolveTriggerAnchor(triggerRef.current);
    if (element) setAnchor(topViewportRect(element));
  };
  // 열림 중 바깥 클릭·Escape·리사이즈·스크롤을 처리합니다.
  useEffect(() => {
    if (!visible) return undefined;
    updatePosition();
    const targetDocument = portalRoot?.ownerDocument || document;
    const closeOutside = (event) => {
      if (!triggerRef.current?.contains(event.target) && !panelRef.current?.contains(event.target))
        setVisible(false, 'outside', event);
    };
    const keydown = (event) => {
      if (event.key === 'Escape') setVisible(false, 'escape', event);
    };
    targetDocument.addEventListener('pointerdown', closeOutside);
    document.addEventListener('pointerdown', closeOutside);
    targetDocument.addEventListener('keydown', keydown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      targetDocument.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('pointerdown', closeOutside);
      targetDocument.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, portalRoot]);
  useEffect(() => () => cancelHoverClose(), []);
  // target·mixed 화살표 기준일 때 트리거 대비 화살표 위치를 측정합니다.
  useEffect(() => {
    if (!visible || !anchor || !panelRef.current || !['target', 'mixed'].includes(arrowAnchor))
      return;
    const panelRect = panelRef.current.getBoundingClientRect();
    const ratio = arrowTargetAlign === 'left' ? 0 : arrowTargetAlign === 'right' ? 1 : 0.5;
    const position = ['left', 'right'].includes(resolvedPlacement)
      ? anchor.top + anchor.height * ratio - panelRect.top
      : anchor.left + anchor.width * ratio - panelRect.left;
    setMeasuredArrowPosition(\`\${position}px\`);
  }, [anchor, arrowAnchor, arrowTargetAlign, panelAlign, resolvedPlacement, visible]);

  // 방향별 개별 offset 클래스를 만듭니다.
  const offsetClasses = [
    ['top', offsetTop],
    ['right', offsetRight],
    ['bottom', offsetBottom],
    ['left', offsetLeft],
  ]
    .filter(([, value]) => value && value !== 'md')
    .map(([side, value]) => \`popover_offset-\${side}-\${value}\`);
  const classes = useMemo(
    () =>
      [
        'popover', // Popover 루트 클래스입니다.
        'popover_portal', // 포털 배치 변형입니다.
        'is-open', // 열림 상태입니다.
        resolvedSize !== 'md' && \`popover_\${resolvedSize}\`, // 크기 변형입니다.
        \`popover_placement-\${resolvedPlacement}\`, // 배치 방향입니다.
        offset !== 'md' && \`popover_offset-\${offset}\`, // 공통 간격입니다.
        ...offsetClasses, // 방향별 간격입니다.
        panelAlign !== 'start' && \`popover_panel-align-\${panelAlign}\`, // 패널 정렬입니다.
        arrowAnchor !== 'content' && \`popover_arrow-anchor-\${arrowAnchor}\`, // 화살표 기준입니다.
        noArrow && 'popover_no-arrow', // 화살표 숨김입니다.
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [
      arrowAnchor,
      className,
      noArrow,
      offset,
      offsetTop,
      offsetRight,
      offsetBottom,
      offsetLeft,
      panelAlign,
      resolvedPlacement,
      resolvedSize,
    ],
  );
  const arrowPosition = measuredArrowPosition || \`\${(anchor?.width || 0) / 2}px\`;
  // 트리거에 확장·팝업 접근성 속성을 붙입니다.
  const accessibleTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, { 'aria-expanded': visible, 'aria-haspopup': 'dialog' })
    : triggerContent;
  // 열림·좌표·포털이 준비되면 패널을 포털로 렌더합니다.
  const panel =
    visible && portalRoot && anchor
      ? createPortal(
          <div
            className={classes}
            data-arrow-target-align={arrowTargetAlign !== 'center' ? arrowTargetAlign : undefined}
            data-theme={document.documentElement.dataset.theme || 'light'}
            style={{
              position: 'fixed',
              top: anchor.top,
              left: anchor.left,
              width: anchor.width,
              height: anchor.height,
              zIndex: 10000,
              pointerEvents: 'none',
              '--popover-arrow-position': arrowPosition,
            }}
          >
            <div
              {...props}
              ref={panelRef}
              id={panelId}
              className={[
                'popover_panel',
                showClose && !title && !panelLabel && 'popover_panel-closable',
              ]
                .filter(Boolean)
                .join(' ')}
              role="dialog"
              aria-label={title ? undefined : panelLabel}
              aria-labelledby={title ? titleId : undefined}
              style={{ zIndex: 10001, pointerEvents: 'auto' }}
              onMouseEnter={trigger === 'hover' ? cancelHoverClose : undefined}
              onMouseLeave={trigger === 'hover' ? scheduleHoverClose : undefined}
            >
              <span className="popover_arrow" aria-hidden="true" />
              {(title || panelLabel) && (
                <div className="popover_header">
                  <div id={titleId} className="popover_title">
                    {title || panelLabel}
                  </div>
                  {showClose && (
                    <Button
                      variant="ghost"
                      iconOnly
                      className="popover_close"
                      ariaLabel={closeLabel}
                      iconBefore={<Icon name="close" size="sm" />}
                      onClick={(event) => setVisible(false, 'close', event)}
                    />
                  )}
                </div>
              )}
              {/* 제목 없을 때 떠 있는 닫기 버튼입니다. */}
              {showClose && !title && !panelLabel && (
                <Button
                  variant="ghost"
                  iconOnly
                  className="popover_close popover_close-floating"
                  ariaLabel={closeLabel}
                  iconBefore={<Icon name="close" size="sm" />}
                  onClick={(event) => setVisible(false, 'close', event)}
                />
              )}
              <div className="popover_body">{children}</div>
              {footer && <div className="popover_footer">{footer}</div>}
            </div>
          </div>,
          portalRoot,
        )
      : null;

  return (
    <>
      {/* 트리거 래퍼: click·hover·focus로 패널을 엽니다. */}
      <span
        ref={triggerRef}
        className="popover_trigger"
        onClick={
          trigger === 'click'
            ? (event) =>
                visible ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event)
            : undefined
        }
        onMouseEnter={
          trigger === 'hover'
            ? (event) => {
                cancelHoverClose();
                openFromTrigger('hover', event);
              }
            : undefined
        }
        onMouseLeave={trigger === 'hover' ? scheduleHoverClose : undefined}
        onFocus={trigger === 'hover' ? (event) => openFromTrigger('focus', event) : undefined}
        onBlur={trigger === 'hover' ? scheduleHoverClose : undefined}
      >
        {accessibleTrigger}
      </span>
      {panel}
    </>
  );
}

export default Popover;
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`<!--
  Popover 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmPopover' });
// 배치·트리거·화살표·열림 상태 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 패널 DOM id입니다. 없으면 생성합니다.
  placement: { type: String, default: 'bottom' }, // 트리거 기준 배치입니다.
  size: { type: String, default: 'md' }, // 패널 크기입니다.
  offset: { type: String, default: 'md' }, // 전체 방향 공통 간격입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  offsetTop: String, // 위쪽 간격 개별 지정입니다.
  offsetRight: String, // 오른쪽 간격 개별 지정입니다.
  offsetBottom: String, // 아래쪽 간격 개별 지정입니다.
  offsetLeft: String, // 왼쪽 간격 개별 지정입니다.
  trigger: { type: String, default: 'click' }, // click 또는 hover 작동 방식입니다.
  title: String, // 패널 제목입니다.
  panelLabel: String, // 제목 없을 때 접근성 라벨입니다.
  noArrow: Boolean, // 화살표를 숨깁니다.
  closable: { type: Boolean, default: undefined }, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  disabled: Boolean, // 열기·닫기를 비활성화합니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
  panelAlign: { type: String, default: 'start' }, // 패널 정렬 기준입니다.
  arrowAnchor: { type: String, default: 'content' }, // 화살표 기준(content · target · mixed)입니다.
  arrowTargetAlign: { type: String, default: 'center' }, // 타깃 기준 화살표 정렬입니다.
});
const emit = defineEmits(['open-change']); // 열림 상태 변경 시 호출됩니다.
const internalOpen = ref(props.defaultOpen); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const triggerElement = ref(null); // 트리거 래퍼 참조입니다.
const panel = ref(null); // 패널 참조입니다.
const anchor = ref(null); // 트리거 뷰포트 좌표입니다.
const arrowPosition = ref('50%'); // 화살표 CSS 위치입니다.
const panelId = props.id || \`popover-\${Math.random().toString(36).slice(2, 9)}\`; // 최종 패널 id입니다.
const titleId = \`\${panelId}-title\`; // aria-labelledby에 연결할 제목 id입니다.
let hoverTimer; // hover 닫기 지연 타이머입니다.

// iframe에서도 최상위 문서에 Popover를 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument !== document) {
    const url = new URL('styles/uxkm.css', targetDocument.baseURI);
    url.searchParams.set('v', 'popover-20260819');
    let link = targetDocument.getElementById('uxkm-popover-portal-styles');
    if (!link) {
      link = targetDocument.createElement('link');
      link.id = 'uxkm-popover-portal-styles';
      link.rel = 'stylesheet';
      targetDocument.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  let root = targetDocument.getElementById('uxkm-popover-portal-root');
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = 'uxkm-popover-portal-root';
    root.className = 'uxkm-popover-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}
const portalTarget = getPortalTarget();
const portalTheme =
  typeof document === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light';
// closable 미지정 시 click 트리거면 닫기 버튼을 켭니다.
const showClose = computed(() => props.closable ?? props.trigger === 'click');
// 배치·크기·간격·화살표 클래스를 조합합니다.
const classes = computed(() =>
  [
    'popover',
    'popover_portal',
    'is-open',
    props.size !== 'md' && \`popover_\${props.size}\`,
    \`popover_placement-\${props.placement}\`,
    props.offset !== 'md' && \`popover_offset-\${props.offset}\`,
    ...[
      ['top', props.offsetTop],
      ['right', props.offsetRight],
      ['bottom', props.offsetBottom],
      ['left', props.offsetLeft],
    ]
      .filter(([, value]) => value && value !== 'md')
      .map(([side, value]) => \`popover_offset-\${side}-\${value}\`),
    props.panelAlign !== 'start' && \`popover_panel-align-\${props.panelAlign}\`,
    props.arrowAnchor !== 'content' && \`popover_arrow-anchor-\${props.arrowAnchor}\`,
    props.noArrow && 'popover_no-arrow',
  ].filter(Boolean),
);
function updateArrowPosition() {
  if (!anchor.value || !panel.value || !['target', 'mixed'].includes(props.arrowAnchor)) return;
  const rect = panel.value.getBoundingClientRect();
  const ratio =
    props.arrowTargetAlign === 'left' ? 0 : props.arrowTargetAlign === 'right' ? 1 : 0.5;
  const value = ['left', 'right'].includes(props.placement)
    ? anchor.value.top + anchor.value.height * ratio - rect.top
    : anchor.value.left + anchor.value.width * ratio - rect.left;
  arrowPosition.value = \`\${value}px\`;
}
// 제어·비제어 열림 상태를 갱신하고 open-change를 알립니다.
function setVisible(next, reason, event) {
  if (props.disabled) return;
  if (props.open === undefined) internalOpen.value = next;
  emit('open-change', next, reason, event);
}
const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}
// 트리거 좌표를 측정해 포털 패널 위치를 맞춥니다.
function updatePosition() {
  const element = resolveTriggerAnchor(triggerElement.value);
  if (!element) return;
  const rect = element.getBoundingClientRect();
  let frame = { top: 0, left: 0 };
  try {
    if (element.ownerDocument !== window.top?.document)
      frame = window.frameElement?.getBoundingClientRect() || frame;
  } catch {
    /* 현재 좌표 */
  }
  anchor.value = {
    top: frame.top + rect.top,
    left: frame.left + rect.left,
    width: rect.width,
    height: rect.height,
  };
  nextTick(updateArrowPosition);
}
// hover 이탈 후 잠시 뒤 닫아 패널 이동을 허용합니다.
function scheduleClose(event) {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => setVisible(false, 'hover', event), 100);
}
function cancelClose() {
  clearTimeout(hoverTimer);
}
function openFromTrigger(reason, event) {
  updatePosition();
  setVisible(true, reason, event);
}
function toggleClick(event) {
  if (visible.value) setVisible(false, 'trigger', event);
  else openFromTrigger('trigger', event);
}
function hoverEnter(event) {
  cancelClose();
  openFromTrigger('hover', event);
}
function outside(event) {
  if (!triggerElement.value?.contains(event.target) && !panel.value?.contains(event.target))
    setVisible(false, 'outside', event);
}
function keydown(event) {
  if (event.key === 'Escape') setVisible(false, 'escape', event);
}
watch(
  visible,
  async (value) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (value) {
      await nextTick();
      updatePosition();
      targetDocument.addEventListener('pointerdown', outside);
      document.addEventListener('pointerdown', outside);
      targetDocument.addEventListener('keydown', keydown);
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    } else {
      targetDocument.removeEventListener('pointerdown', outside);
      document.removeEventListener('pointerdown', outside);
      targetDocument.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    }
  },
  { immediate: true },
);
onBeforeUnmount(() => {
  clearTimeout(hoverTimer);
  const doc = portalTarget?.ownerDocument || document;
  doc.removeEventListener('pointerdown', outside);
  doc.removeEventListener('keydown', keydown);
});
<\/script>

<template>
  <!-- 트리거 래퍼와 포털 패널을 함께 렌더합니다. -->
  <span
    ref="triggerElement"
    class="popover_trigger"
    :aria-controls="panelId"
    :aria-expanded="visible"
    aria-haspopup="dialog"
    @click="trigger === 'click' && toggleClick($event)"
    @mouseenter="trigger === 'hover' && hoverEnter($event)"
    @mouseleave="trigger === 'hover' && scheduleClose($event)"
    @focusin="trigger === 'hover' && openFromTrigger('focus', $event)"
    ><slot name="trigger">Popover 열기</slot></span
  >
  <Teleport :to="portalTarget">
    <div
      v-if="visible && anchor"
      :class="classes"
      :data-arrow-target-align="arrowTargetAlign !== 'center' ? arrowTargetAlign : undefined"
      :data-theme="portalTheme"
      :style="{
        position: 'fixed',
        top: \`\${anchor.top}px\`,
        left: \`\${anchor.left}px\`,
        width: \`\${anchor.width}px\`,
        height: \`\${anchor.height}px\`,
        zIndex: 10000,
        pointerEvents: 'none',
        '--popover-arrow-position': arrowPosition,
      }"
    >
      <div
        ref="panel"
        :id="panelId"
        class="popover_panel"
        role="dialog"
        :aria-label="title ? undefined : panelLabel"
        :aria-labelledby="title ? titleId : undefined"
        style="z-index: 10001; pointer-events: auto"
        @mouseenter="trigger === 'hover' && cancelClose()"
        @mouseleave="trigger === 'hover' && scheduleClose($event)"
      >
        <span v-if="!noArrow" class="popover_arrow" aria-hidden="true" />
        <div v-if="title || panelLabel" class="popover_header">
          <div :id="titleId" class="popover_title">{{ title || panelLabel }}</div>
          <Button
            v-if="showClose"
            variant="ghost"
            icon-only
            class="popover_close"
            :aria-label="closeLabel"
            @click="setVisible(false, 'close', $event)"
            ><Icon name="close" size="sm"
          /></Button>
        </div>
        <div class="popover_body"><slot>Popover</slot></div>
        <div v-if="$slots.footer" class="popover_footer">
          <slot name="footer" :close="setVisible" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`<!-- Tooltip 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- tooltip 루트가 트리거와 말풍선을 묶습니다. -->
<span class="tooltip" data-component="Tooltip" data-tooltip>
  <!-- 호버·포커스로 말풍선을 여는 트리거입니다. -->
  <button type="button" class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-basic">
    마우스 오버
  </button>
  <!-- role=tooltip 말풍선과 화살표입니다. -->
  <span class="tooltip_bubble" id="tooltip-basic" role="tooltip" hidden>
    <span class="tooltip_arrow" aria-hidden="true"></span>
    짧은 도움말 텍스트입니다.
  </span>
</span>
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`{# Tooltip 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# tooltip 루트가 트리거와 말풍선을 묶습니다. #}
{% set tooltipId = id | default('tooltip-basic') %}
<span
  class="tooltip{% if size and size != 'md' %} tooltip_{{ size }}{% endif %}{% if placement %} tooltip_placement-{{ placement }}{% endif %}{% if offset and offset != 'md' %} tooltip_offset-{{ offset }}{% endif %}{% if offsetTop and offsetTop != 'md' %} tooltip_offset-top-{{ offsetTop }}{% endif %}{% if offsetRight and offsetRight != 'md' %} tooltip_offset-right-{{ offsetRight }}{% endif %}{% if offsetBottom and offsetBottom != 'md' %} tooltip_offset-bottom-{{ offsetBottom }}{% endif %}{% if offsetLeft and offsetLeft != 'md' %} tooltip_offset-left-{{ offsetLeft }}{% endif %}{% if inverse %} tooltip_inverse{% endif %}{% if noArrow %} tooltip_no-arrow{% endif %}{% if arrowAnchor and arrowAnchor != 'content' %} tooltip_arrow-anchor-{{ arrowAnchor }}{% endif %}{% if panelAlign and panelAlign != 'center' %} tooltip_panel-align-{{ panelAlign }}{% endif %}{% if open %} is-open{% endif %}{% if disabled %} is-disabled{% endif %}"
  data-component="Tooltip"
  data-tooltip{% if trigger == 'click' %}
  data-tooltip-trigger="click"{% endif %}{% if arrowTargetAlign and arrowTargetAlign != 'center' %}
  data-arrow-target-align="{{ arrowTargetAlign }}"{% endif %}
>
  {# 호버·클릭으로 말풍선을 여는 트리거입니다. #}
  <button
    type="button"
    class="btn btn_outline tooltip_trigger"
    aria-describedby="{{ tooltipId }}"{% if trigger == 'click' %}
    aria-expanded="{{ 'true' if open else 'false' }}"{% endif %}
  >
    {{ triggerLabel | default('마우스 오버') }}
  </button>
  {# role=tooltip 말풍선과 화살표입니다. #}
  <span
    class="tooltip_bubble{% if trigger == 'click' %} tooltip_bubble-closable{% endif %}"
    id="{{ tooltipId }}"
    role="tooltip"{% if not open %}
    hidden{% endif %}
  >
    {% if not noArrow %}<span class="tooltip_arrow" aria-hidden="true"></span
    >{% endif %}
    {% if trigger == 'click' %}<button
      type="button"
      class="tooltip_close tooltip_close-floating"
      data-tooltip-close
      aria-label="닫기"
    >
      ×</button
    >{% endif %}
    {{ content | default('짧은 도움말 텍스트입니다.') }}
  </span>
</span>
`})))()}var At;function jt(){return(jt=e((()=>{At=`/**
 * Tooltip 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = ['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end']; // 지원하는 배치입니다.
const sizes = ['sm', 'md', 'lg']; // 지원하는 말풍선 크기입니다.
const ownerId = Math.random().toString(36).slice(2, 10); // iframe 포털 소유자 ID입니다.

// iframe에서도 최상위 문서에 Tooltip을 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getTooltipPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let target = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) target = currentWindow.top.document;
  } catch {
    /* 현재 문서를 사용합니다. */
  }
  if (target !== currentDocument) {
    const url = new URL('styles/uxkm.css', target.baseURI);
    url.searchParams.set('v', 'tooltip-20260819');
    let link = target.getElementById('uxkm-tooltip-portal-styles');
    if (!link) {
      link = target.createElement('link');
      link.id = 'uxkm-tooltip-portal-styles';
      link.rel = 'stylesheet';
      target.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  const id = \`uxkm-tooltip-portal-root-\${ownerId}\`;
  let root = target.getElementById(id);
  if (!root) {
    root = target.createElement('div');
    root.id = id;
    root.className = 'uxkm-tooltip-portal-root';
    target.body.appendChild(root);
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';

// 트리거 래퍼 안에서 실제 포커스 가능한 컨트롤을 찾습니다.
export function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}

// iframe이면 상위 뷰포트 좌표로 보정한 getBoundingClientRect입니다.
export function viewportRect(element, currentWindow = window) {
  const rect = element.getBoundingClientRect();
  try {
    if (element.ownerDocument === currentWindow.top?.document) return rect;
    const frame = currentWindow.frameElement?.getBoundingClientRect();
    if (frame)
      return {
        top: frame.top + rect.top,
        left: frame.left + rect.left,
        width: rect.width,
        height: rect.height,
      };
  } catch {
    /* 현재 뷰포트 좌표를 사용합니다. */
  }
  return rect;
}

export function Tooltip({
  id, // 말풍선 DOM id입니다. 없으면 생성합니다.
  content, // children이 없을 때 쓸 말풍선 내용입니다.
  children, // 말풍선 내용입니다. content보다 우선합니다.
  placement, // 브라우저 뷰포트 기준 배치입니다.
  size = 'md', // 말풍선 크기입니다.
  offset = 'md', // 전체 방향 공통 간격입니다.
  offsetTop, // 위쪽 간격 개별 지정입니다.
  offsetRight, // 오른쪽 간격 개별 지정입니다.
  offsetBottom, // 아래쪽 간격 개별 지정입니다.
  offsetLeft, // 왼쪽 간격 개별 지정입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  inverse = false, // 역색(대비) 변형입니다.
  noArrow = false, // 화살표를 숨깁니다.
  arrowAnchor = 'content', // 화살표 기준(content · target · mixed)입니다.
  panelAlign = 'center', // 말풍선 정렬 기준입니다.
  arrowTargetAlign = 'center', // 타깃 기준 화살표 정렬입니다.
  disabled = false, // 열기·닫기를 비활성화합니다.
  trigger = 'hover', // hover 또는 click 작동 방식입니다.
  triggerContent, // 트리거로 렌더할 콘텐츠입니다.
  closable, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onOpenChange, // 열림 상태 변경 시 호출됩니다.
  ...props // 말풍선에 전달할 나머지 속성입니다.
}) {
  const generatedId = useId().replace(/:/g, '');
  const bubbleId = id || \`tooltip-\${generatedId}\`;
  const triggerRef = useRef(null);
  const bubbleRef = useRef(null);
  const hoverTimer = useRef(null); // hover 닫기 지연 타이머입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [anchor, setAnchor] = useState(null); // 트리거 뷰포트 좌표입니다.
  const [arrowPosition, setArrowPosition] = useState(null); // 측정된 화살표 위치입니다.
  const visible = open ?? internalOpen;
  const resolvedPlacement = placements.includes(placement) ? placement : '';
  const resolvedSize = sizes.includes(size) ? size : 'md';
  const root = visible ? getTooltipPortalRoot() : null;
  const showClose = closable ?? trigger === 'click';

  const setVisible = (next, reason, event) => {
    if (disabled) return;
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next, reason, event);
  };
  const updatePosition = () => {
    const element = resolveTriggerAnchor(triggerRef.current);
    if (element) setAnchor(viewportRect(element));
  };
  const cancelClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  const scheduleClose = (event) => {
    cancelClose();
    hoverTimer.current = setTimeout(() => setVisible(false, 'hover', event), 100);
  };
  const openFromTrigger = (reason, event) => {
    updatePosition();
    setVisible(true, reason, event);
  };

  // 열림 중 바깥 클릭·Escape·리사이즈·스크롤을 처리합니다.
  useEffect(() => {
    if (!visible) return undefined;
    updatePosition();
    const targetDocument = root?.ownerDocument || document;
    const outside = (event) => {
      if (!triggerRef.current?.contains(event.target) && !bubbleRef.current?.contains(event.target))
        setVisible(false, 'outside', event);
    };
    const keydown = (event) => {
      if (event.key === 'Escape') setVisible(false, 'escape', event);
    };
    targetDocument.addEventListener('pointerdown', outside);
    document.addEventListener('pointerdown', outside);
    targetDocument.addEventListener('keydown', keydown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      targetDocument.removeEventListener('pointerdown', outside);
      document.removeEventListener('pointerdown', outside);
      targetDocument.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, root]);
  useEffect(() => () => cancelClose(), []);
  // mixed/target 화살표 기준일 때 말풍선 위치와 화살표 좌표를 맞춥니다.
  useEffect(() => {
    if (!visible || !anchor || !bubbleRef.current || !['target', 'mixed'].includes(arrowAnchor))
      return;
    const bubbleElement = bubbleRef.current;
    ['top', 'right', 'bottom', 'left', 'transform'].forEach((name) => {
      bubbleElement.style[name] = '';
    });
    if (arrowAnchor === 'mixed') {
      const bubbleRect = bubbleElement.getBoundingClientRect();
      const side = resolvedPlacement.startsWith('top')
        ? 'top'
        : ['left', 'right'].includes(resolvedPlacement)
          ? resolvedPlacement
          : 'bottom';
      if (side === 'top' || side === 'bottom') {
        const left =
          panelAlign === 'start'
            ? 0
            : panelAlign === 'end'
              ? anchor.width - bubbleRect.width
              : (anchor.width - bubbleRect.width) / 2;
        bubbleElement.style.left = \`\${left}px\`;
        bubbleElement.style.right = 'auto';
        bubbleElement.style.transform = 'none';
        if (side === 'top') {
          bubbleElement.style.top = 'auto';
          bubbleElement.style.bottom = 'calc(100% + var(--tooltip-offset-top))';
        } else {
          bubbleElement.style.top = 'calc(100% + var(--tooltip-offset-bottom))';
          bubbleElement.style.bottom = 'auto';
        }
      } else {
        const top =
          panelAlign === 'start'
            ? 0
            : panelAlign === 'end'
              ? anchor.height - bubbleRect.height
              : (anchor.height - bubbleRect.height) / 2;
        bubbleElement.style.top = \`\${top}px\`;
        bubbleElement.style.bottom = 'auto';
        bubbleElement.style.transform = 'none';
        if (side === 'left') {
          bubbleElement.style.left = 'auto';
          bubbleElement.style.right = 'calc(100% + var(--tooltip-offset-left))';
        } else {
          bubbleElement.style.left = 'calc(100% + var(--tooltip-offset-right))';
          bubbleElement.style.right = 'auto';
        }
      }
    }
    const rect = bubbleElement.getBoundingClientRect();
    const ratio =
      arrowTargetAlign === 'left' || arrowTargetAlign === 'top'
        ? 0
        : arrowTargetAlign === 'right' || arrowTargetAlign === 'bottom'
          ? 1
          : 0.5;
    const value = ['left', 'right'].includes(resolvedPlacement)
      ? anchor.top + anchor.height * ratio - rect.top
      : anchor.left + anchor.width * ratio - rect.left;
    setArrowPosition(\`\${value}px\`);
  }, [anchor, arrowAnchor, arrowTargetAlign, panelAlign, resolvedPlacement, visible]);

  const sideOffsets = [
    ['top', offsetTop],
    ['right', offsetRight],
    ['bottom', offsetBottom],
    ['left', offsetLeft],
  ]
    .filter(([, value]) => value && value !== 'md')
    .map(([side, value]) => \`tooltip_offset-\${side}-\${value}\`);
  const classes = useMemo(
    () =>
      [
        'tooltip', // Tooltip 루트 클래스입니다.
        'tooltip_portal', // 포털 배치 변형입니다.
        'is-open', // 열림 상태입니다.
        resolvedSize !== 'md' && \`tooltip_\${resolvedSize}\`, // 크기 변형입니다.
        resolvedPlacement && \`tooltip_placement-\${resolvedPlacement}\`, // 배치 방향입니다.
        offset !== 'md' && \`tooltip_offset-\${offset}\`, // 공통 간격입니다.
        ...sideOffsets, // 방향별 간격입니다.
        panelAlign !== 'center' && \`tooltip_panel-align-\${panelAlign}\`, // 말풍선 정렬입니다.
        inverse && 'tooltip_inverse', // 역색 변형입니다.
        noArrow && 'tooltip_no-arrow', // 화살표 숨김입니다.
        arrowAnchor !== 'content' && \`tooltip_arrow-anchor-\${arrowAnchor}\`, // 화살표 기준입니다.
        disabled && 'is-disabled', // 비활성 상태입니다.
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [
      arrowAnchor,
      className,
      disabled,
      inverse,
      noArrow,
      offset,
      offsetTop,
      offsetRight,
      offsetBottom,
      offsetLeft,
      panelAlign,
      resolvedPlacement,
      resolvedSize,
    ],
  );
  // 열림·좌표·포털이 준비되면 말풍선을 포털로 렌더합니다.
  const bubble =
    visible && root && anchor
      ? createPortal(
          <span
            className={classes}
            data-theme={document.documentElement.dataset.theme || 'light'}
            style={{
              position: 'fixed',
              top: anchor.top,
              left: anchor.left,
              width: anchor.width,
              height: anchor.height,
              zIndex: 10020,
              pointerEvents: 'none',
              '--tooltip-arrow-position': arrowPosition || \`\${anchor.width / 2}px\`,
            }}
          >
            <span
              {...props}
              ref={bubbleRef}
              id={bubbleId}
              className={['tooltip_bubble', showClose && 'tooltip_bubble-closable']
                .filter(Boolean)
                .join(' ')}
              role="tooltip"
              style={{ zIndex: 10021, pointerEvents: trigger === 'click' ? 'auto' : undefined }}
              onMouseEnter={trigger === 'hover' ? cancelClose : undefined}
              onMouseLeave={trigger === 'hover' ? scheduleClose : undefined}
            >
              {!noArrow && <span className="tooltip_arrow" aria-hidden="true" />}
              {showClose && (
                <Button
                  variant="ghost"
                  iconOnly
                  className="tooltip_close tooltip_close-floating"
                  ariaLabel={closeLabel}
                  iconBefore={<Icon name="close" size="sm" className="tooltip_close-icon" />}
                  onClick={(event) => setVisible(false, 'close', event)}
                />
              )}
              {children ?? content}
            </span>
          </span>,
          root,
        )
      : null;
  // 트리거에 describedby·expanded 접근성 속성을 붙입니다.
  const accessibleTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, {
        'aria-describedby': visible ? bubbleId : undefined,
        'aria-expanded': trigger === 'click' ? visible : undefined,
      })
    : triggerContent;

  return (
    <>
      <span
        ref={triggerRef}
        className="tooltip_trigger"
        data-component="Tooltip"
        onClick={
          trigger === 'click'
            ? (event) =>
                visible ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event)
            : undefined
        }
        onMouseEnter={
          trigger === 'hover'
            ? (event) => {
                cancelClose();
                openFromTrigger('hover', event);
              }
            : undefined
        }
        onMouseLeave={trigger === 'hover' ? scheduleClose : undefined}
        onFocus={trigger === 'hover' ? (event) => openFromTrigger('focus', event) : undefined}
        onBlur={trigger === 'hover' ? scheduleClose : undefined}
      >
        {accessibleTrigger}
      </span>
      {bubble}
    </>
  );
}

export default Tooltip;
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`<!--
  Tooltip 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmTooltip' });
// 내용·배치·트리거·화살표·열림 상태 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 말풍선 DOM id입니다. 없으면 생성합니다.
  content: String, // default 슬롯이 없을 때 쓸 말풍선 내용입니다.
  placement: String, // 브라우저 뷰포트 기준 배치입니다.
  size: { type: String, default: 'md' }, // 말풍선 크기입니다.
  offset: { type: String, default: 'md' }, // 전체 방향 공통 간격입니다.
  offsetTop: String, // 위쪽 간격 개별 지정입니다.
  offsetRight: String, // 오른쪽 간격 개별 지정입니다.
  offsetBottom: String, // 아래쪽 간격 개별 지정입니다.
  offsetLeft: String, // 왼쪽 간격 개별 지정입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  inverse: Boolean, // 역색(대비) 변형입니다.
  noArrow: Boolean, // 화살표를 숨깁니다.
  arrowAnchor: { type: String, default: 'content' }, // 화살표 기준(content · target · mixed)입니다.
  panelAlign: { type: String, default: 'center' }, // 말풍선 정렬 기준입니다.
  arrowTargetAlign: { type: String, default: 'center' }, // 타깃 기준 화살표 정렬입니다.
  disabled: Boolean, // 열기·닫기를 비활성화합니다.
  trigger: { type: String, default: 'hover' }, // hover 또는 click 작동 방식입니다.
  closable: { type: Boolean, default: undefined }, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
});
const emit = defineEmits(['open-change']); // 열림 상태 변경 시 호출됩니다.
const internalOpen = ref(props.defaultOpen); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const triggerElement = ref(null); // 트리거 래퍼 참조입니다.
const bubble = ref(null); // 말풍선 참조입니다.
const anchor = ref(null); // 트리거 뷰포트 좌표입니다.
const arrowPosition = ref('50%'); // 화살표 CSS 위치입니다.
const bubbleId = props.id || \`tooltip-\${Math.random().toString(36).slice(2, 9)}\`; // 최종 말풍선 id입니다.
let hoverTimer; // hover 닫기 지연 타이머입니다.

// iframe에서도 최상위 문서에 Tooltip을 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let target = document;
  try {
    if (window.top?.document?.body) target = window.top.document;
  } catch {
    return document.body;
  }
  if (target !== document) {
    const url = new URL('styles/uxkm.css', target.baseURI);
    url.searchParams.set('v', 'tooltip-20260819');
    let link = target.getElementById('uxkm-tooltip-portal-styles');
    if (!link) {
      link = target.createElement('link');
      link.id = 'uxkm-tooltip-portal-styles';
      link.rel = 'stylesheet';
      target.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  let root = target.getElementById('uxkm-tooltip-portal-root');
  if (!root) {
    root = target.createElement('div');
    root.id = 'uxkm-tooltip-portal-root';
    root.className = 'uxkm-tooltip-portal-root';
    target.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}
const portalTarget = getPortalTarget();
const portalTheme =
  typeof document === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light';
// closable 미지정 시 click 트리거면 닫기 버튼을 켭니다.
const showClose = computed(() => props.closable ?? props.trigger === 'click');
// 배치·크기·간격·역색·화살표 클래스를 조합합니다.
const classes = computed(() =>
  [
    'tooltip',
    'tooltip_portal',
    'is-open',
    props.size !== 'md' && \`tooltip_\${props.size}\`,
    props.placement && \`tooltip_placement-\${props.placement}\`,
    props.offset !== 'md' && \`tooltip_offset-\${props.offset}\`,
    ...[
      ['top', props.offsetTop],
      ['right', props.offsetRight],
      ['bottom', props.offsetBottom],
      ['left', props.offsetLeft],
    ]
      .filter(([, value]) => value && value !== 'md')
      .map(([side, value]) => \`tooltip_offset-\${side}-\${value}\`),
    props.panelAlign !== 'center' && \`tooltip_panel-align-\${props.panelAlign}\`,
    props.inverse && 'tooltip_inverse',
    props.noArrow && 'tooltip_no-arrow',
    props.arrowAnchor !== 'content' && \`tooltip_arrow-anchor-\${props.arrowAnchor}\`,
    props.disabled && 'is-disabled',
  ].filter(Boolean),
);

// 제어·비제어 열림 상태를 갱신하고 open-change를 알립니다.
function setVisible(next, reason, event) {
  if (props.disabled) return;
  if (props.open === undefined) internalOpen.value = next;
  emit('open-change', next, reason, event);
}
function cancelClose() {
  clearTimeout(hoverTimer);
}
// hover 이탈 후 잠시 뒤 닫아 말풍선 이동을 허용합니다.
function scheduleClose(event) {
  cancelClose();
  hoverTimer = setTimeout(() => setVisible(false, 'hover', event), 100);
}
function updateArrowPosition() {
  if (!anchor.value || !bubble.value || !['target', 'mixed'].includes(props.arrowAnchor)) return;
  const element = bubble.value;
  ['top', 'right', 'bottom', 'left', 'transform'].forEach((name) => {
    element.style[name] = '';
  });
  if (props.arrowAnchor === 'mixed') {
    const initialRect = element.getBoundingClientRect();
    const side = props.placement?.startsWith('top')
      ? 'top'
      : ['left', 'right'].includes(props.placement)
        ? props.placement
        : 'bottom';
    if (side === 'top' || side === 'bottom') {
      const left =
        props.panelAlign === 'start'
          ? 0
          : props.panelAlign === 'end'
            ? anchor.value.width - initialRect.width
            : (anchor.value.width - initialRect.width) / 2;
      element.style.left = \`\${left}px\`;
      element.style.right = 'auto';
      element.style.transform = 'none';
      if (side === 'top') {
        element.style.top = 'auto';
        element.style.bottom = 'calc(100% + var(--tooltip-offset-top))';
      } else {
        element.style.top = 'calc(100% + var(--tooltip-offset-bottom))';
        element.style.bottom = 'auto';
      }
    } else {
      const top =
        props.panelAlign === 'start'
          ? 0
          : props.panelAlign === 'end'
            ? anchor.value.height - initialRect.height
            : (anchor.value.height - initialRect.height) / 2;
      element.style.top = \`\${top}px\`;
      element.style.bottom = 'auto';
      element.style.transform = 'none';
      if (side === 'left') {
        element.style.left = 'auto';
        element.style.right = 'calc(100% + var(--tooltip-offset-left))';
      } else {
        element.style.left = 'calc(100% + var(--tooltip-offset-right))';
        element.style.right = 'auto';
      }
    }
  }
  const rect = element.getBoundingClientRect();
  const ratio = ['left', 'top'].includes(props.arrowTargetAlign)
    ? 0
    : ['right', 'bottom'].includes(props.arrowTargetAlign)
      ? 1
      : 0.5;
  const value = ['left', 'right'].includes(props.placement)
    ? anchor.value.top + anchor.value.height * ratio - rect.top
    : anchor.value.left + anchor.value.width * ratio - rect.left;
  arrowPosition.value = \`\${value}px\`;
}
const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}
// 트리거 좌표를 측정해 포털 말풍선 위치를 맞춥니다.
function updatePosition() {
  const element = resolveTriggerAnchor(triggerElement.value);
  if (!element) return;
  const rect = element.getBoundingClientRect();
  let frame = { top: 0, left: 0 };
  try {
    if (element.ownerDocument !== window.top?.document)
      frame = window.frameElement?.getBoundingClientRect() || frame;
  } catch {
    /* 현재 좌표 */
  }
  anchor.value = {
    top: frame.top + rect.top,
    left: frame.left + rect.left,
    width: rect.width,
    height: rect.height,
  };
  nextTick(updateArrowPosition);
}
function openFromTrigger(reason, event) {
  cancelClose();
  updatePosition();
  setVisible(true, reason, event);
}
function toggle(event) {
  visible.value ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event);
}
function outside(event) {
  if (!triggerElement.value?.contains(event.target) && !bubble.value?.contains(event.target))
    setVisible(false, 'outside', event);
}
function keydown(event) {
  if (event.key === 'Escape') setVisible(false, 'escape', event);
}
watch(
  visible,
  async (value) => {
    const doc = portalTarget?.ownerDocument || document;
    if (value) {
      await nextTick();
      updatePosition();
      doc.addEventListener('pointerdown', outside);
      document.addEventListener('pointerdown', outside);
      doc.addEventListener('keydown', keydown);
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    } else {
      doc.removeEventListener('pointerdown', outside);
      document.removeEventListener('pointerdown', outside);
      doc.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    }
  },
  { immediate: true },
);
onBeforeUnmount(() => {
  clearTimeout(hoverTimer);
  const doc = portalTarget?.ownerDocument || document;
  doc.removeEventListener('pointerdown', outside);
  document.removeEventListener('pointerdown', outside);
  doc.removeEventListener('keydown', keydown);
  window.removeEventListener('resize', updatePosition);
  window.removeEventListener('scroll', updatePosition, true);
});
<\/script>

<template>
  <!-- 트리거 래퍼와 포털 말풍선을 함께 렌더합니다. -->
  <span
    ref="triggerElement"
    class="tooltip_trigger"
    data-component="Tooltip"
    :aria-describedby="bubbleId"
    :aria-expanded="trigger === 'click' ? visible : undefined"
    @click="trigger === 'click' && toggle($event)"
    @mouseenter="trigger === 'hover' && openFromTrigger('hover', $event)"
    @mouseleave="trigger === 'hover' && scheduleClose($event)"
    @focusin="trigger === 'hover' && openFromTrigger('focus', $event)"
    @focusout="trigger === 'hover' && scheduleClose($event)"
    ><slot name="trigger">툴팁</slot></span
  >
  <Teleport :to="portalTarget">
    <span
      v-if="visible && anchor"
      :class="classes"
      :data-theme="portalTheme"
      :style="{
        position: 'fixed',
        top: \`\${anchor.top}px\`,
        left: \`\${anchor.left}px\`,
        width: \`\${anchor.width}px\`,
        height: \`\${anchor.height}px\`,
        zIndex: 10020,
        pointerEvents: 'none',
        '--tooltip-arrow-position': arrowPosition,
      }"
    >
      <span
        ref="bubble"
        :id="bubbleId"
        class="tooltip_bubble"
        :class="{ 'tooltip_bubble-closable': showClose }"
        role="tooltip"
        :style="{ zIndex: 10021, pointerEvents: trigger === 'click' ? 'auto' : undefined }"
        @mouseenter="trigger === 'hover' && cancelClose()"
        @mouseleave="trigger === 'hover' && scheduleClose($event)"
      >
        <span v-if="!noArrow" class="tooltip_arrow" aria-hidden="true" />
        <Button
          v-if="showClose"
          variant="ghost"
          icon-only
          class="tooltip_close tooltip_close-floating"
          :aria-label="closeLabel"
          @click="setVisible(false, 'close', $event)"
          ><Icon name="close" size="sm" class="tooltip_close-icon"
        /></Button>
        <slot>{{ content }}</slot>
      </span>
    </span>
  </Teleport>
</template>
`})))()}var Pt;function Ft(){return(Ft=e((()=>{Pt=`<!-- Progress 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- progress 루트에 fit/block·색상·패턴 변형 클래스를 함께 적용합니다. -->
<div class="progress progress_fit color_primary" data-component="Progress" data-percent="60">
  <!-- 트랙이 progressbar 역할을 담당합니다. -->
  <div
    class="progress_track"
    role="progressbar"
    aria-valuenow="60"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="진행률"
  >
    <!-- 채움 막대 너비는 진행률(%)과 같습니다. -->
    <span class="progress_bar" style="width: 60%"></span>
  </div>
</div>
`})))()}var It;function Lt(){return(Lt=e((()=>{It=`{# Progress 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# circle이면 원형, 아니면 선형 진행률을 렌더합니다. #}
{% set value = percent | default(0) %}
{% set progressColor = 'success' if status == 'success' else ('danger' if status == 'exception' else color | default('primary')) %}
{% if circle %}
{# 원형 진행률: --progress-percent로 stroke를 제어합니다. #}
<div
  class="progress progress_circle color_{{ progressColor }}{% if size and size != 'md' %} progress_{{ size }}{% endif %}"
  data-component="ProgressCircle"
  data-percent="{{ value }}"
  role="progressbar"
  aria-valuenow="{{ value }}"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="{{ ariaLabel | default('진행률') }}"
  style="--progress-percent: {{ value }}"
>
  <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="progress_circle-track" cx="50" cy="50" r="45"></circle>
    <circle class="progress_circle-bar" cx="50" cy="50" r="45"></circle></svg
  ><span class="progress_circle-value">{{ value }}%</span>
</div>
{% else %}
{# 선형 진행률: 트랙이 progressbar 역할을 담당합니다. #}
<div
  class="progress {{ 'progress_block' if block else 'progress_fit' }} color_{{ progressColor }}{% if size and size != 'md' %} progress_{{ size }}{% endif %}{% if striped %} progress_striped{% endif %}{% if animated %} progress_animated{% endif %}{% if indeterminate %} is-indeterminate{% endif %}{% if inside %} progress_inside{% endif %}"
  data-component="Progress"
  data-percent="{{ value }}"
>
  {% if showInfo or label %}
  <div class="progress_header">
    {% if label %}<span class="progress_label">{{ label }}</span
    >{% endif %}{% if showInfo %}<span class="progress_value"
      >{{ value }}%</span
    >{% endif %}
  </div>
  {% endif %}
  {# 트랙과 채움 막대입니다. #}
  <div
    class="progress_track"
    role="progressbar"{% if not indeterminate %}
    aria-valuenow="{{ value }}"{% endif %}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="{{ ariaLabel | default('진행률') }}"{% if indeterminate %}
    aria-busy="true"{% endif %}
  >
    <span class="progress_bar" style="width: {{ value }}%"
      >{% if inside %}{{ value }}%{% endif %}</span
    >
  </div>
</div>
{% endif %}
`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=`/**
 * Progress 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useMemo } from 'react';

const statuses = new Set(['', 'success', 'exception']); // 지원하는 상태 이름입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 크기입니다.
const colors = new Set(['primary', 'success', 'warning', 'danger']); // 지원하는 의미 색상입니다.
// 진행률을 0~100 범위로 제한합니다.
const normalizePercent = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export function Progress({
  percent = 0, // 0~100 진행률입니다.
  status = '', // 완료·예외 상태 색상입니다.
  size = 'md', // 트랙 높이 크기입니다.
  showInfo = false, // 상단 퍼센트 값 표시 여부입니다.
  label, // 상단 레이블 텍스트입니다.
  color = 'primary', // status가 없을 때 사용하는 의미 색상입니다.
  striped = false, // 줄무늬 패턴입니다.
  animated = false, // 줄무늬 이동 애니메이션입니다.
  indeterminate = false, // 값을 알 수 없는 불확정 진행입니다.
  inside = false, // 바 안에 퍼센트 텍스트를 넣습니다.
  block = false, // 전체 너비 배치입니다. false면 fit입니다.
  ariaLabel = '진행률', // progressbar의 접근성 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const value = normalizePercent(percent); // 클램프된 최종 진행률입니다.
  const resolvedStatus = statuses.has(status) ? status : ''; // 검증된 상태입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedColor = colors.has(color) ? color : 'primary'; // 검증된 색상입니다.
  // status가 있으면 상태 색상을, 없으면 color prop을 사용합니다.
  const colorClass =
    resolvedStatus === 'success'
      ? 'color_success'
      : resolvedStatus === 'exception'
        ? 'color_danger'
        : \`color_\${resolvedColor}\`;
  // 상태·크기·패턴·레이아웃 클래스를 조합합니다.
  const classes = useMemo(
    () =>
      [
        'progress', // Progress 루트 클래스입니다.
        colorClass, // 의미·상태 색상 클래스입니다.
        block ? 'progress_block' : 'progress_fit', // 전체 너비 또는 콘텐츠 너비입니다.
        resolvedSize !== 'md' && \`progress_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
        striped && 'progress_striped', // 줄무늬 패턴입니다.
        animated && 'progress_animated', // 줄무늬 애니메이션입니다.
        indeterminate && 'is-indeterminate', // 불확정 진행 상태입니다.
        inside && 'progress_inside', // 바 안 텍스트 변형입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' '), // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
    [animated, block, className, colorClass, indeterminate, inside, resolvedSize, striped],
  );
  const displayValue = \`\${value}%\`; // 화면에 표시할 퍼센트 문자열입니다.
  return (
    <div {...props} className={classes} data-component="Progress">
      {/* 레이블·값 헤더는 showInfo 또는 label이 있을 때만 렌더합니다. */}
      {(showInfo || label) && (
        <div className="progress_header">
          {label && <span className="progress_label">{label}</span>}
          {showInfo && <span className="progress_value">{displayValue}</span>}
        </div>
      )}
      {/* 트랙이 실제 progressbar 역할을 담당합니다. */}
      <div
        className="progress_track"
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        aria-busy={indeterminate || undefined}
        style={inside ? { background: 'var(--color-border-subtle)' } : undefined}
      >
        {/* 채움 막대 너비는 진행률(%)과 같습니다. */}
        <span className="progress_bar" style={{ width: \`\${value}%\` }}>
          {inside ? displayValue : null}
        </span>
      </div>
    </div>
  );
}

export default Progress;
`})))()}var Bt;function Vt(){return(Vt=e((()=>{Bt=`/**
 * ProgressCircle 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 원형 크기입니다.
const colors = new Set(['primary', 'success', 'warning', 'danger']); // 지원하는 의미 색상입니다.
// 진행률을 0~100 범위로 제한합니다.
const normalizePercent = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export function ProgressCircle({
  percent = 0, // 0~100 진행률입니다.
  color = 'primary', // 원형 막대 의미 색상입니다.
  size = 'md', // 원형 크기입니다.
  ariaLabel = '진행률', // progressbar의 접근성 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  style, // --progress-percent와 병합할 인라인 스타일입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const value = normalizePercent(percent); // 클램프된 최종 진행률입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedColor = colors.has(color) ? color : 'primary'; // 검증된 색상입니다.
  // 원형 Progress 클래스와 색상·크기를 조합합니다.
  const classes = [
    'progress', // Progress 공통 루트 클래스입니다.
    'progress_circle', // 원형 변형입니다.
    \`color_\${resolvedColor}\`, // 의미 색상 클래스입니다.
    resolvedSize !== 'md' && \`progress_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  return (
    <div
      {...props}
      className={classes}
      data-component="ProgressCircle"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      // CSS stroke-dashoffset 계산에 쓰이는 커스텀 속성입니다.
      style={{ '--progress-percent': value, ...style }}
    >
      {/* 트랙·채움 원호를 그리는 SVG입니다. */}
      <svg className="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="progress_circle-track" cx="50" cy="50" r="45" />
        <circle className="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      {/* 원 중앙에 퍼센트 텍스트를 표시합니다. */}
      <span className="progress_circle-value">{value}%</span>
    </div>
  );
}

export default ProgressCircle;
`})))()}var Ht;function Ut(){return(Ut=e((()=>{Ht=`<!--
  Progress 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmProgress' });

// 진행률·상태·표현 옵션을 prop으로 받습니다.
const props = defineProps({
  percent: { type: Number, default: 0 }, // 0~100 진행률입니다.
  status: { type: String, default: '' }, // 완료·예외 상태 색상입니다.
  size: { type: String, default: 'md' }, // 트랙 높이 크기입니다.
  showInfo: Boolean, // 상단 퍼센트 값 표시 여부입니다.
  label: String, // 상단 레이블 텍스트입니다.
  color: { type: String, default: 'primary' }, // status가 없을 때 사용하는 의미 색상입니다.
  striped: Boolean, // 줄무늬 패턴입니다.
  animated: Boolean, // 줄무늬 이동 애니메이션입니다.
  indeterminate: Boolean, // 값을 알 수 없는 불확정 진행입니다.
  inside: Boolean, // 바 안에 퍼센트 텍스트를 넣습니다.
  block: Boolean, // 전체 너비 배치입니다. false면 fit입니다.
  ariaLabel: { type: String, default: '진행률' }, // progressbar의 접근성 이름입니다.
});

// 진행률을 0~100 범위로 제한합니다.
const value = computed(() => Math.min(100, Math.max(0, Number(props.percent) || 0)));
// status가 있으면 상태 색상을, 없으면 color prop을 사용합니다.
const colorClass = computed(() =>
  props.status === 'success'
    ? 'color_success'
    : props.status === 'exception'
      ? 'color_danger'
      : \`color_\${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}\`,
);
// 상태·크기·패턴·레이아웃 클래스를 조합합니다.
const classes = computed(() =>
  [
    'progress', // Progress 루트 클래스입니다.
    colorClass.value, // 의미·상태 색상 클래스입니다.
    props.block ? 'progress_block' : 'progress_fit', // 전체 너비 또는 콘텐츠 너비입니다.
    props.size !== 'md' && \`progress_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
    props.striped && 'progress_striped', // 줄무늬 패턴입니다.
    props.animated && 'progress_animated', // 줄무늬 애니메이션입니다.
    props.indeterminate && 'is-indeterminate', // 불확정 진행 상태입니다.
    props.inside && 'progress_inside', // 바 안 텍스트 변형입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
<\/script>

<template>
  <!-- 선형 진행률 루트입니다. -->
  <div :class="classes" data-component="Progress">
    <!-- 레이블·값 헤더는 showInfo 또는 label이 있을 때만 렌더합니다. -->
    <div v-if="showInfo || label" class="progress_header">
      <span v-if="label" class="progress_label">{{ label }}</span
      ><span v-if="showInfo" class="progress_value">{{ value }}%</span>
    </div>
    <!-- 트랙이 실제 progressbar 역할을 담당합니다. -->
    <div
      class="progress_track"
      role="progressbar"
      :aria-valuenow="indeterminate ? undefined : value"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="ariaLabel"
      :aria-busy="indeterminate || undefined"
      :style="inside ? { background: 'var(--color-border-subtle)' } : undefined"
    >
      <!-- 채움 막대 너비는 진행률(%)과 같습니다. -->
      <span class="progress_bar" :style="{ width: \`\${value}%\` }">{{
        inside ? \`\${value}%\` : ''
      }}</span>
    </div>
  </div>
</template>
`})))()}var Wt;function Gt(){return(Gt=e((()=>{Wt=`<!--
  ProgressCircle 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmProgressCircle' });

// 원형 진행률 값과 표현 옵션을 prop으로 받습니다.
const props = defineProps({
  percent: { type: Number, default: 0 }, // 0~100 진행률입니다.
  color: { type: String, default: 'primary' }, // 원형 막대 의미 색상입니다.
  size: { type: String, default: 'md' }, // 원형 크기입니다.
  ariaLabel: { type: String, default: '진행률' }, // progressbar의 접근성 이름입니다.
});

// 진행률을 0~100 범위로 제한합니다.
const value = computed(() => Math.min(100, Math.max(0, Number(props.percent) || 0)));
// 원형 Progress 클래스와 색상·크기를 조합합니다.
const classes = computed(() =>
  [
    'progress', // Progress 공통 루트 클래스입니다.
    'progress_circle', // 원형 변형입니다.
    \`color_\${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}\`, // 의미 색상입니다.
    props.size !== 'md' && \`progress_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
<\/script>

<template>
  <!-- CSS 변수 --progress-percent로 stroke를 제어합니다. -->
  <div
    :class="classes"
    data-component="ProgressCircle"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="ariaLabel"
    :style="{ '--progress-percent': value }"
  >
    <!-- 트랙·채움 원호를 그리는 SVG입니다. -->
    <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="progress_circle-track" cx="50" cy="50" r="45" />
      <circle class="progress_circle-bar" cx="50" cy="50" r="45" /></svg
    ><span class="progress_circle-value">{{ value }}%</span>
  </div>
</template>
`})))()}var Kt;function qt(){return(qt=e((()=>{Kt=`<!-- Spin 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- spin 루트에 색상·크기·인라인/블록/오버레이 변형 클래스를 함께 적용합니다. -->
<div
  class="spin color_primary"
  data-component="Spin"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="로딩 중"
>
  <!-- 회전하는 시각 표시기입니다. -->
  <span class="spin_indicator" aria-hidden="true"></span>
</div>
`})))()}var Jt;function Yt(){return(Yt=e((()=>{Jt=`{# Spin 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# wrap이면 SpinWrap 오버레이, 아니면 단독 Spin을 렌더합니다. #}
{% if wrap %}
{# 콘텐츠 위 오버레이 래퍼입니다. #}
<div
  class="spin_wrap{% if block %} spin_wrap-block{% endif %}{% if blur %} spin_wrap-blur{% endif %}{% if loading %} is-loading{% endif %}"
  data-component="SpinWrap"
  data-loading="{{ 'true' if loading else 'false' }}"{% if loading %}
  aria-busy="true"{% endif %}
>
  {# 로딩 대상 콘텐츠 영역입니다. #}
  <div class="spin_wrap-body">{{ content | safe }}</div>
  {% if loading %}
  <div
    class="spin color_primary spin_overlay"
    data-component="Spin"
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label="{{ ariaLabel | default('로딩 중') }}"
  >
    {# 회전하는 시각 표시기입니다. #}
  <span class="spin_indicator" aria-hidden="true"></span
    >{% if tip %}
    <p class="spin_tip">{{ tip }}</p>
    {% endif %}
  </div>
  {% endif %}
</div>
{% else %}
{# 단독 스피너 루트입니다. #}
<div
  class="spin color_{{ color | default('primary') }}{% if size and size != 'md' %} spin_{{ size }}{% endif %}{% if inline %} spin_inline{% endif %}{% if block %} spin_block{% endif %}{% if overlay %} spin_overlay{% endif %}"
  data-component="Spin"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="{{ ariaLabel | default('로딩 중') }}"
>
  <span class="spin_indicator" aria-hidden="true"></span
  >{% if tip %}
  <p class="spin_tip">{{ tip }}</p>
  {% endif %}
</div>
{% endif %}
`})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=`/**
 * Spin 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
const sizes = ['sm', 'md', 'lg']; // 지원하는 스피너 크기입니다.
const colors = ['primary', 'success', 'warning', 'danger']; // 지원하는 의미 색상입니다.

export function Spin({
  size = 'md', // 스피너 크기입니다.
  tip, // 표시기 아래 설명 문구입니다.
  color = 'primary', // 의미 색상입니다.
  inline = false, // 인라인 배치입니다.
  block = false, // 전체 너비 배치입니다.
  overlay = false, // SpinWrap 등에서 쓰는 오버레이 배치입니다.
  ariaLabel = '로딩 중', // status 영역의 접근성 이름입니다.
  children, // 스피너와 함께 렌더할 추가 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const resolvedSize = sizes.includes(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedColor = colors.includes(color) ? color : 'primary'; // 검증된 색상입니다.
  // 색상·크기·배치 클래스를 조합합니다.
  const classes = [
    'spin', // Spin 루트 클래스입니다.
    \`color_\${resolvedColor}\`, // 의미 색상 클래스입니다.
    resolvedSize !== 'md' && \`spin_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
    inline && 'spin_inline', // 인라인 배치입니다.
    block && 'spin_block', // 전체 너비 배치입니다.
    overlay && 'spin_overlay', // 오버레이 배치입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  return (
    <div
      {...props}
      className={classes}
      data-component="Spin"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      {/* 회전하는 시각 표시기입니다. */}
      <span className="spin_indicator" aria-hidden="true" />
      {tip && <p className="spin_tip">{tip}</p>}
      {children}
    </div>
  );
}

export default Spin;
`})))()}var Qt;function $t(){return($t=e((()=>{Qt=`/**
 * SpinWrap 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Spin from './Spin.jsx';

export function SpinWrap({
  loading = false, // 로딩 오버레이 표시 여부입니다.
  block = false, // 최소 높이를 확보하는 블록 래퍼입니다.
  blur = false, // 로딩 중 본문 블러 효과입니다.
  tip, // 오버레이 Spin에 전달할 설명 문구입니다.
  ariaLabel = '로딩 중', // 오버레이 Spin의 접근성 이름입니다.
  children, // 로딩 대상이 되는 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 래퍼·블록·블러·로딩 상태 클래스를 조합합니다.
  const classes = [
    'spin_wrap', // SpinWrap 루트 클래스입니다.
    block && 'spin_wrap-block', // 블록형 최소 높이입니다.
    blur && 'spin_wrap-blur', // 본문 블러 변형입니다.
    loading && 'is-loading', // 로딩 활성 상태입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  return (
    <div {...props} className={classes} data-component="SpinWrap" aria-busy={loading || undefined}>
      {/* 로딩 대상 콘텐츠 영역입니다. */}
      <div className="spin_wrap-body">{children}</div>
      {/* loading일 때만 오버레이 Spin을 올립니다. */}
      {loading && <Spin overlay tip={tip} ariaLabel={ariaLabel} />}
    </div>
  );
}

export default SpinWrap;
`})))()}var en;function tn(){return(tn=e((()=>{en=`<!--
  Spin 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmSpin' });

// 크기·색상·배치와 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  size: { type: String, default: 'md' }, // 스피너 크기입니다.
  tip: String, // 표시기 아래 설명 문구입니다.
  color: { type: String, default: 'primary' }, // 의미 색상입니다.
  inline: Boolean, // 인라인 배치입니다.
  block: Boolean, // 전체 너비 배치입니다.
  overlay: Boolean, // SpinWrap 등에서 쓰는 오버레이 배치입니다.
  ariaLabel: { type: String, default: '로딩 중' }, // status 영역의 접근성 이름입니다.
});

// 색상·크기·배치 클래스를 조합합니다.
const classes = computed(() =>
  [
    'spin', // Spin 루트 클래스입니다.
    \`color_\${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}\`, // 의미 색상입니다.
    props.size !== 'md' && \`spin_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
    props.inline && 'spin_inline', // 인라인 배치입니다.
    props.block && 'spin_block', // 전체 너비 배치입니다.
    props.overlay && 'spin_overlay', // 오버레이 배치입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
<\/script>

<template>
  <!-- 로딩 status 루트입니다. -->
  <div
    :class="classes"
    data-component="Spin"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
  >
    <!-- 회전하는 시각 표시기입니다. -->
    <span class="spin_indicator" aria-hidden="true" />
    <p v-if="tip" class="spin_tip">{{ tip }}</p>
    <slot />
  </div>
</template>
`})))()}var nn;function rn(){return(rn=e((()=>{nn=`<!--
  SpinWrap 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed } from 'vue';
import Spin from './Spin.vue';

defineOptions({ name: 'UxkmSpinWrap' });

// 로딩 오버레이와 래퍼 표현 옵션을 prop으로 받습니다.
const props = defineProps({
  loading: Boolean, // 로딩 오버레이 표시 여부입니다.
  block: Boolean, // 최소 높이를 확보하는 블록 래퍼입니다.
  blur: Boolean, // 로딩 중 본문 블러 효과입니다.
  tip: String, // 오버레이 Spin에 전달할 설명 문구입니다.
  ariaLabel: { type: String, default: '로딩 중' }, // 오버레이 Spin의 접근성 이름입니다.
});

// 래퍼·블록·블러·로딩 상태 클래스를 조합합니다.
const classes = computed(() =>
  [
    'spin_wrap', // SpinWrap 루트 클래스입니다.
    props.block && 'spin_wrap-block', // 블록형 최소 높이입니다.
    props.blur && 'spin_wrap-blur', // 본문 블러 변형입니다.
    props.loading && 'is-loading', // 로딩 활성 상태입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
<\/script>

<template>
  <!-- 콘텐츠 위 오버레이 래퍼입니다. -->
  <div :class="classes" data-component="SpinWrap" :aria-busy="loading || undefined">
    <!-- 로딩 대상 콘텐츠 영역입니다. -->
    <div class="spin_wrap-body"><slot /></div>
    <!-- loading일 때만 오버레이 Spin을 올립니다. -->
    <Spin v-if="loading" overlay :tip="tip" :aria-label="ariaLabel" />
  </div>
</template>
`})))()}var an;function on(){return(on=e((()=>{an=`<!-- Skeleton 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- skeleton_group이 제목·본문 줄 플레이스홀더를 세로로 묶습니다. -->
<div
  class="skeleton_group"
  data-component="Skeleton"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="콘텐츠 로딩 중"
>
  <!-- 제목 플레이스홀더입니다. -->
  <span class="skeleton skeleton_title" aria-hidden="true"></span>
  <!-- 본문 줄 플레이스홀더입니다. skeleton_w-*로 너비를 조절합니다. -->
  <span class="skeleton skeleton_text" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
</div>
`})))()}var sn;function cn(){return(cn=e((()=>{sn=`{# Skeleton 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# skeleton_group이 제목·본문 줄 플레이스홀더를 세로로 묶습니다. #}
<div
  class="skeleton_group{% if active == false %} skeleton_static{% endif %}"
  data-component="Skeleton"
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label="{{ ariaLabel | default('콘텐츠 로딩 중') }}"
>
  {# 아바타 행 또는 원형·제목+본문 기본 형태입니다. #}
  {% if avatar %}
  <div class="skeleton_row">
    <span
      class="skeleton skeleton_circle{% if active == false %} skeleton_static{% endif %}"
      aria-hidden="true"
    ></span>
    {% if paragraph %}
    <div class="skeleton_row-body">
      {% for width in ['', 'skeleton_w-md', 'skeleton_w-sm'] %}<span
        class="skeleton skeleton_text {{ width }}{% if active == false %} skeleton_static{% endif %}"
        aria-hidden="true"
      ></span
      >{% endfor %}
    </div>
    {% endif %}
  </div>
  {% elif round %}
  <span
    class="skeleton skeleton_circle{% if active == false %} skeleton_static{% endif %}"
    aria-hidden="true"
  ></span>
  {% else %}
  <span
    class="skeleton skeleton_title{% if active == false %} skeleton_static{% endif %}"
    aria-hidden="true"
  ></span>
  <span
    class="skeleton skeleton_text{% if active == false %} skeleton_static{% endif %}"
    aria-hidden="true"
  ></span>
  <span
    class="skeleton skeleton_text skeleton_w-md{% if active == false %} skeleton_static{% endif %}"
    aria-hidden="true"
  ></span>
  <span
    class="skeleton skeleton_text skeleton_w-sm{% if active == false %} skeleton_static{% endif %}"
    aria-hidden="true"
  ></span>
  {% endif %}
</div>
`})))()}var ln;function un(){return(un=e((()=>{ln=`/**
 * Skeleton 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useMemo } from 'react';

// 문단 줄별 기본 너비 변형 클래스입니다.
const paragraphWidths = ['', 'skeleton_w-md', 'skeleton_w-sm'];

// paragraph prop을 실제 줄 수로 변환합니다.
function paragraphCount(paragraph) {
  if (paragraph === true) return 3;
  return typeof paragraph === 'number' ? Math.max(0, paragraph) : 0;
}

export function Skeleton({
  active = true, // 쉬머 애니메이션 활성 여부입니다.
  avatar = false, // 아바타 행 레이아웃 표시 여부입니다.
  paragraph = false, // 본문 줄 수입니다. true면 3줄입니다.
  round = false, // 원형 플레이스홀더만 표시합니다.
  ariaLabel = '콘텐츠 로딩 중', // 로딩 영역의 접근성 이름입니다.
  children, // 카드처럼 직접 구성하는 추가 플레이스홀더입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const count = paragraphCount(paragraph); // avatar 행에서 쓸 본문 줄 수입니다.
  // 기본 형태에서 paragraph가 false여도 제목+3줄을 보여 줍니다.
  const defaultCount = paragraph === false ? 3 : count;
  // 그룹 루트 클래스와 정적(비활성) 상태를 조합합니다.
  const groupClass = useMemo(
    () => ['skeleton_group', !active && 'skeleton_static', className].filter(Boolean).join(' '),
    [active, className],
  );
  // 개별 플레이스홀더 항목 클래스입니다.
  const itemClass = ['skeleton', !active && 'skeleton_static'].filter(Boolean).join(' ');

  return (
    <div
      {...props}
      className={groupClass}
      data-component="Skeleton"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      {avatar ? (
        // 아바타(원) + 본문 줄 행 레이아웃입니다.
        <div className="skeleton_row">
          <span className={\`\${itemClass} skeleton_circle\`} aria-hidden="true" />
          {count > 0 && (
            <div className="skeleton_row-body">
              {Array.from({ length: count }, (_, index) => (
                <span
                  key={index}
                  className={[itemClass, 'skeleton_text', paragraphWidths[index] || 'skeleton_w-lg']
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>
      ) : round ? (
        // 원형 플레이스홀더만 표시합니다.
        <span className={\`\${itemClass} skeleton_circle\`} aria-hidden="true" />
      ) : (
        // 제목 + 본문 줄 기본 형태입니다.
        <>
          <span className={\`\${itemClass} skeleton_title\`} aria-hidden="true" />
          {Array.from({ length: defaultCount }, (_, index) => (
            <span
              key={index}
              className={[itemClass, 'skeleton_text', paragraphWidths[index]]
                .filter(Boolean)
                .join(' ')}
              aria-hidden="true"
            />
          ))}
        </>
      )}
      {children}
    </div>
  );
}

export default Skeleton;
`})))()}var dn;function fn(){return(fn=e((()=>{dn=`<!--
  Skeleton 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 선언하지 않은 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSkeleton', inheritAttrs: false });

// 애니메이션·형태·줄 수·접근성 이름을 prop으로 받습니다.
const props = defineProps({
  active: { type: Boolean, default: true }, // 쉬머 애니메이션 활성 여부입니다.
  avatar: Boolean, // 아바타 행 레이아웃 표시 여부입니다.
  paragraph: { type: [Boolean, Number], default: false }, // 본문 줄 수입니다. true면 3줄입니다.
  round: Boolean, // 원형 플레이스홀더만 표시합니다.
  ariaLabel: { type: String, default: '콘텐츠 로딩 중' }, // 로딩 영역의 접근성 이름입니다.
});

const attrs = useAttrs(); // 선언하지 않은 HTML 속성입니다.

// paragraph prop을 실제 줄 수로 변환합니다.
const count = computed(() =>
  props.paragraph === true
    ? 3
    : typeof props.paragraph === 'number'
      ? Math.max(0, props.paragraph)
      : 0,
);
// 기본 형태에서 paragraph가 false여도 제목+3줄을 보여 줍니다.
const defaultCount = computed(() => (props.paragraph === false ? 3 : count.value));
// 그룹 루트 클래스와 정적(비활성) 상태를 조합합니다.
const groupClass = computed(() =>
  ['skeleton_group', !props.active && 'skeleton_static'].filter(Boolean),
);
// 개별 플레이스홀더 항목 클래스입니다.
const itemClass = computed(() => ['skeleton', !props.active && 'skeleton_static'].filter(Boolean));
// 문단 줄별 기본 너비 변형 클래스입니다.
const widths = ['', 'skeleton_w-md', 'skeleton_w-sm'];
<\/script>

<template>
  <!-- Skeleton 그룹 루트입니다. -->
  <div
    v-bind="attrs"
    :class="groupClass"
    data-component="Skeleton"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
  >
    <!-- 아바타(원) + 본문 줄 행 레이아웃입니다. -->
    <div v-if="avatar" class="skeleton_row">
      <span :class="[...itemClass, 'skeleton_circle']" aria-hidden="true" />
      <div v-if="count" class="skeleton_row-body">
        <span
          v-for="index in count"
          :key="index"
          :class="[...itemClass, 'skeleton_text', widths[index - 1] || 'skeleton_w-lg']"
          aria-hidden="true"
        />
      </div>
    </div>
    <!-- 원형 플레이스홀더만 표시합니다. -->
    <span v-else-if="round" :class="[...itemClass, 'skeleton_circle']" aria-hidden="true" />
    <!-- 제목 + 본문 줄 기본 형태입니다. -->
    <template v-else>
      <span :class="[...itemClass, 'skeleton_title']" aria-hidden="true" />
      <span
        v-for="index in defaultCount"
        :key="index"
        :class="[...itemClass, 'skeleton_text', widths[index - 1]]"
        aria-hidden="true"
      />
    </template>
    <slot />
  </div>
</template>
`})))()}var pn;function mn(){return(mn=e((()=>{pn=`<!-- Empty 원본 구현: 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다. -->
<!-- empty 루트에 크기·간단형·블록 변형 클래스를 함께 적용합니다. -->
<div class="empty" data-component="Empty" role="status">
  <!-- 아이콘/이미지 영역입니다. -->
  <div class="empty_image" data-slot="icon" aria-hidden="true">
    <svg
      class="icon"
      data-component="Icon"
      data-icon="inbox"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5"></path>
    </svg>
  </div>
  <!-- 안내 문구 영역입니다. -->
  <div class="empty_desc" data-slot="description"><p>데이터가 없습니다</p></div>
</div>
`})))()}var hn;function gn(){return(gn=e((()=>{hn=`{# Empty 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# empty 루트에 크기·간단형·블록 변형 클래스를 함께 적용합니다. #}
{% from "../../basic/Icon/icon.njk" import icon %}
<div
  class="empty{% if size == 'sm' or size == 'lg' %} empty_{{ size }}{% endif %}{% if simple %} empty_simple{% endif %}{% if block %} empty_block{% endif %}"
  data-component="Empty"
  role="status"
>
  {# simple이 아닐 때만 아이콘 영역을 표시합니다. #}
  {% if not simple %}
  <div class="empty_image" data-slot="icon" aria-hidden="true">
    {% if iconSlot %}{{ iconSlot | safe }}{% elif image %}{{ image | safe }}{% else %}{{ icon(iconName | default('inbox')) }}{% endif %}
  </div>
  {% endif %}
  {# 안내 문구 영역입니다. #}
  {% if descriptionSlot or description %}
  <div class="empty_desc" data-slot="description">
    {% if descriptionSlot %}{{ descriptionSlot | safe }}{% else %}
    <p>{{ description }}</p>
    {% endif %}
  </div>
  {% endif %}
  {# 후속 액션 영역입니다. #}
  {% if footer %}
  <div class="empty_footer">{{ footer | safe }}</div>
  {% endif %}
</div>
`})))()}var _n;function vn(){return(vn=e((()=>{_n=`/**
 * Empty 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 빈 상태 크기입니다.

// 기본 빈 상태 아이콘입니다.
export function EmptyImage() {
  return <Icon name="inbox" />;
}

export function Empty({
  description, // 간단한 빈 상태 안내 문구입니다.
  size = 'md', // 아이콘과 여백 크기입니다.
  simple = false, // 아이콘 없는 설명 전용 변형입니다.
  block = false, // 전체 너비 배치입니다.
  icon, // 사용자가 교체할 수 있는 아이콘입니다.
  image, // icon의 이전 호환 이름입니다.
  footer, // 후속 액션 영역입니다.
  children, // description 대신 여러 노드로 구성할 설명입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  // 크기·간단형·블록 클래스를 조합합니다.
  const classes = [
    'empty', // Empty 루트 클래스입니다.
    resolvedSize !== 'md' && \`empty_\${resolvedSize}\`, // md가 아닐 때만 크기 변형입니다.
    simple && 'empty_simple', // 아이콘 없는 간단형입니다.
    block && 'empty_block', // 전체 너비 배치입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  // children이 있으면 description보다 우선합니다.
  const content = children ?? description;
  return (
    <div {...props} className={classes} data-component="Empty" role="status">
      {/* simple이 아닐 때만 아이콘/이미지 영역을 표시합니다. */}
      {!simple && (
        <div className="empty_image" data-slot="icon" aria-hidden="true">
          {icon ?? image ?? <EmptyImage />}
        </div>
      )}
      {/* 설명 영역: children이 있으면 그대로, 없으면 p로 description을 감쌉니다. */}
      {content != null && (
        <div className="empty_desc" data-slot="description">
          {children ?? <p>{description}</p>}
        </div>
      )}
      {footer != null && <div className="empty_footer">{footer}</div>}
    </div>
  );
}

export default Empty;
`})))()}var yn;function bn(){return(bn=e((()=>{yn=`<!--
  Empty 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';

// 선언하지 않은 class와 HTML 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmEmpty', inheritAttrs: false });

// 설명·크기·간단형·블록 옵션을 prop으로 받습니다.
const props = defineProps({
  description: String, // 간단한 빈 상태 안내 문구입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 아이콘과 여백 크기입니다.
  simple: Boolean, // 아이콘 없는 설명 전용 변형입니다.
  block: Boolean, // 전체 너비 배치입니다.
});

const attrs = useAttrs(); // 선언하지 않은 HTML 속성입니다.
const slots = useSlots(); // icon·description·footer 슬롯 존재 여부입니다.

// 크기·간단형·블록 클래스를 조합합니다.
const classes = computed(() =>
  [
    'empty', // Empty 루트 클래스입니다.
    props.size !== 'md' && \`empty_\${props.size}\`, // md가 아닐 때만 크기 변형입니다.
    props.simple && 'empty_simple', // 아이콘 없는 간단형입니다.
    props.block && 'empty_block', // 전체 너비 배치입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
<\/script>

<template>
  <!-- 빈 상태 status 루트입니다. -->
  <div v-bind="attrs" :class="classes" data-component="Empty" role="status">
    <!-- simple이 아닐 때만 아이콘/이미지 영역을 표시합니다. -->
    <div v-if="!simple" class="empty_image" data-slot="icon" aria-hidden="true">
      <slot name="icon"
        ><slot name="image"><Icon name="inbox" /></slot
      ></slot>
    </div>
    <!-- 설명 영역: description 슬롯 또는 기본 문구입니다. -->
    <div
      v-if="description || slots.default || slots.description"
      class="empty_desc"
      data-slot="description"
    >
      <slot name="description"
        ><slot
          ><p>{{ description }}</p></slot
        ></slot
      >
    </div>
    <!-- 후속 액션 영역입니다. -->
    <div v-if="slots.footer" class="empty_footer"><slot name="footer" /></div>
  </div>
</template>
`})))()}function B(e,t,n){return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/feedback/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/feedback/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/feedback/${e}/${e}.vue`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${e}.vue`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/feedback/${e}/${e}.jsx`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${e}.jsx`,code:n.react}]}function V(e,t,n){return Object.fromEntries(Object.entries(t).map(([t,r])=>[t,[...r,{id:`websquare`,label:`WebSquare`,fileName:`WebSquare 화면 XML · ${e} · ${t}`,code:`<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${n(t)}`}]]))}function H(e,t={}){let n=[`alert`,`color_${t.color??`info`}`,t.classes].filter(Boolean).join(` `),r=t.showIcon===!1?``:`<w2:textbox id="${e}Icon" class="alert_icon" aria-hidden="true" label="●"></w2:textbox>`,i=t.title?`<w2:textbox id="${e}Title" class="alert_title" label="${t.title}"></w2:textbox>`:``,a=t.description?`<w2:textbox id="${e}Desc" class="alert_desc" tagname="p" label="${t.description}"></w2:textbox>`:``,o=t.actions?`<w2:group id="${e}Actions" class="alert_actions">
  <xf:trigger id="${e}Action" type="button" class="btn btn_ghost btn_sm" ev:onclick="scwin.alert_action">
    <xf:label><![CDATA[자세히]]></xf:label>
  </xf:trigger>
</w2:group>`:``,s=t.closable?`<xf:trigger id="${e}Close" type="button" class="alert_close" ev:onclick="scwin.alert_close">
  <xf:label><![CDATA[알림 닫기]]></xf:label>
</xf:trigger>`:``;return`<w2:group id="${e}" class="${n}" role="alert">
  ${r}
  <w2:group id="${e}Body" class="alert_body">
    ${i}
    ${a}
    ${o?o.replaceAll(`
`,`
    `):``}
  </w2:group>
  ${s?s.replaceAll(`
`,`
  `):``}
</w2:group>`}function xn(e){switch(e){case`descriptionOnly`:return H(`descriptionOnly`,{color:`info`,description:`변경 사항이 저장되었습니다.`});case`noIcon`:return H(`noIcon`,{color:`success`,title:`완료`,description:`요청이 처리되었습니다.`,showIcon:!1});case`size`:return[H(`sizeSm`,{classes:`alert_sm`,title:`Small`,description:`작은 알림입니다.`}),H(`sizeMd`,{title:`Medium`,description:`기본 크기 알림입니다.`}),H(`sizeLg`,{classes:`alert_lg`,title:`Large`,description:`큰 알림입니다.`})].join(`

`);case`closable`:return H(`closable`,{color:`warning`,title:`주의`,description:`이 작업은 되돌릴 수 없습니다.`,closable:!0});case`actions`:return H(`actions`,{color:`info`,title:`업데이트 안내`,description:`새 버전이 준비되었습니다.`,actions:!0,closable:!0});case`banner`:return H(`banner`,{color:`warning`,classes:`alert_banner`,title:`시스템 점검`,description:`오늘 밤 점검이 예정되어 있습니다.`,closable:!0});case`context`:return`<w2:group id="contextForm" class="form form_vertical form_fit" tagname="form">
  ${H(`context`,{color:`error`,title:`입력 오류`,description:`필수 항목을 확인해 주세요.`}).replaceAll(`
`,`
  `)}
</w2:group>`;default:return[H(`basicInfo`,{color:`info`,title:`정보`,description:`변경 사항이 저장되었습니다.`}),H(`basicSuccess`,{color:`success`,title:`성공`,description:`요청이 완료되었습니다.`}),H(`basicWarning`,{color:`warning`,title:`경고`,description:`제한 시간을 확인해 주세요.`}),H(`basicError`,{color:`error`,title:`오류`,description:`다시 시도해 주세요.`})].join(`

`)}}function U(e,t,n={}){let r=[`snackbar`,`color_${n.color??`info`}`,n.classes].filter(Boolean).join(` `),i=n.showIcon===!1?``:`<w2:textbox id="${e}Icon" class="snackbar_icon" aria-hidden="true" label="●"></w2:textbox>`,a=n.action?`<xf:trigger id="${e}Action" type="button" class="snackbar_action btn btn_ghost btn_sm" ev:onclick="scwin.snackbar_action">
  <xf:label><![CDATA[실행 취소]]></xf:label>
</xf:trigger>`:``,o=n.closable?`<xf:trigger id="${e}Close" type="button" class="snackbar_close" data-snackbar-close="true" ev:onclick="scwin.snackbar_close">
  <xf:label><![CDATA[알림 닫기]]></xf:label>
</xf:trigger>`:``;return`<w2:group id="${e}" class="${r}" role="${n.role??`status`}">
  ${i}
  <w2:textbox id="${e}Message" class="snackbar_message" label="${t}"></w2:textbox>
  ${a?a.replaceAll(`
`,`
  `):``}
  ${o?o.replaceAll(`
`,`
  `):``}
</w2:group>`}function Sn(e){switch(e){case`simple`:return U(`simple`,`저장되었습니다.`,{showIcon:!1});case`shape`:return[U(`shapeDefault`,`기본 모서리`),U(`shapeRound`,`캡슐형`,{classes:`snackbar_round`})].join(`

`);case`motion`:return[U(`motionFade`,`Fade`,{classes:`snackbar_motion-fade`}),U(`motionSlide`,`Slide`,{classes:`snackbar_motion-slide`}),U(`motionNone`,`None`,{classes:`snackbar_motion-none`})].join(`

`);case`size`:return[U(`sizeSm`,`Small`,{classes:`snackbar_sm`}),U(`sizeMd`,`Medium`),U(`sizeLg`,`Large`,{classes:`snackbar_lg`})].join(`

`);case`action`:return U(`action`,`항목이 삭제되었습니다.`,{color:`success`,action:!0});case`closable`:return U(`closable`,`새 알림이 있습니다.`,{closable:!0});case`duration`:return`<w2:group id="durationRegion" class="snackbar_region snackbar_region-bottom-center">
  ${U(`duration`,`3초 후 자동으로 닫힙니다.`,{classes:`snackbar_motion-fade`}).replaceAll(`
`,`
  `)}
</w2:group>
<!-- data-snackbar-duration="3000" 과 scwin.snackbar_timeout으로 자동 닫기를 연결합니다. -->`;case`placement`:return`<w2:group id="placementRegion" class="snackbar_region snackbar_region-top-right">
  ${U(`placementA`,`첫 번째 알림`).replaceAll(`
`,`
  `)}
  ${U(`placementB`,`두 번째 알림`,{color:`success`}).replaceAll(`
`,`
  `)}
</w2:group>`;default:return[U(`basicInfo`,`정보가 업데이트되었습니다.`),U(`basicSuccess`,`저장이 완료되었습니다.`,{color:`success`}),U(`basicWarning`,`연결이 불안정합니다.`,{color:`warning`}),U(`basicError`,`요청에 실패했습니다.`,{color:`error`,role:`alert`})].join(`

`)}}function W(e,t,n,r={}){let i=r.open===!1?``:` is-open`,a=[`modal`,r.classes,i.trim()].filter(Boolean).join(` `),o=r.backdrop===!1?``:`<w2:group id="${e}Backdrop" class="modal_backdrop" ev:onclick="scwin.modal_close"></w2:group>`,s=r.footerAlign?` modal_footer-${r.footerAlign}`:``,c=r.footer?`<w2:group id="${e}Footer" class="modal_footer${s}">
  <xf:trigger id="${e}Cancel" type="button" class="btn btn_ghost" ev:onclick="scwin.modal_close">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
  <xf:trigger id="${e}Confirm" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.modal_confirm">
    <xf:label><![CDATA[확인]]></xf:label>
  </xf:trigger>
</w2:group>`:``,l=`<w2:group id="${e}" class="${a}" role="dialog" aria-modal="true" aria-labelledby="${e}Title">
  ${o}
  <w2:group id="${e}Dialog" class="modal_dialog">
    <w2:group id="${e}Header" class="modal_header">
      <w2:textbox id="${e}Title" class="modal_title" tagname="h2" label="${t}"></w2:textbox>
      <xf:trigger id="${e}Close" type="button" class="modal_close" ev:onclick="scwin.modal_close">
        <xf:label><![CDATA[닫기]]></xf:label>
      </xf:trigger>
    </w2:group>
    <w2:group id="${e}Body" class="modal_body">
      <w2:textbox id="${e}BodyText" tagname="p" label="${n}"></w2:textbox>
    </w2:group>
    ${c?c.replaceAll(`
`,`
    `):``}
  </w2:group>
</w2:group>`;return r.triggerLabel?`<xf:trigger id="${e}Trigger" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.modal_open">
  <xf:label><![CDATA[${r.triggerLabel}]]></xf:label>
</xf:trigger>
${l}`:l}function Cn(e){switch(e){case`open`:return W(`open`,`알림`,`로드 시 열린 상태로 표시되는 Modal입니다.`,{open:!0,footer:!0});case`size`:return[W(`sizeSm`,`Small`,`좁은 너비`,{classes:`modal_sm`,triggerLabel:`Small`}),W(`sizeLg`,`Large`,`넓은 너비`,{classes:`modal_lg`,triggerLabel:`Large`})].join(`

`);case`footer`:return W(`footer`,`새 항목 추가`,`이름 입력 필드를 배치합니다.`,{footer:!0,triggerLabel:`새 항목 추가`});case`footerAlign`:return W(`footerAlign`,`푸터 정렬`,`균등 정렬 예시입니다.`,{footer:!0,footerAlign:`even`,open:!0});case`confirm`:return W(`confirm`,`항목 삭제`,`이 작업은 되돌릴 수 없습니다.`,{classes:`modal_sm`,footer:!0,triggerLabel:`삭제`});case`form`:return W(`form`,`프로필 편집`,`이름 등 폼 필드를 배치합니다.`,{footer:!0,triggerLabel:`프로필 편집`});case`scroll`:return W(`scroll`,`이용 약관`,`긴 본문은 modal_body 안에서 스크롤합니다.`,{classes:`modal_scrollable`,triggerLabel:`이용 약관 보기`});case`nested`:return`${W(`nestedParent`,`첫 번째 Modal`,`두 번째 Modal을 엽니다.`,{footer:!0,triggerLabel:`첫 번째 Modal 열기`})}

${W(`nestedChild`,`두 번째 Modal`,`최상위 대화상자만 조작합니다.`,{classes:`modal_sm`,open:!0,footer:!0})}`;case`noBackdrop`:return W(`noBackdrop`,`백드롭 없음`,`배경을 가리지 않습니다.`,{classes:`modal_sm`,backdrop:!1,triggerLabel:`백드롭 없이 열기`});default:return W(`basic`,`알림`,`Modal 대화상자 본문입니다.`,{footer:!0,triggerLabel:`모달 열기`})}}function G(e,t,n,r={}){let i=r.placement??`right`,a=r.open===!1?``:` is-open`,o=[`drawer`,`drawer_placement-${i}`,r.classes,r.draggable&&`drawer_draggable`,a.trim()].filter(Boolean).join(` `),s=r.backdrop===!1?``:`<w2:group id="${e}Backdrop" class="drawer_backdrop" ev:onclick="scwin.drawer_close"></w2:group>`,c=r.draggable?`<w2:group id="${e}Handle" class="drawer_handle" aria-hidden="true"></w2:group>`:``,l=r.extra?`<w2:textbox id="${e}Extra" class="tag" label="${r.extra}"></w2:textbox>`:``,u=r.footerAlign?` drawer_footer-${r.footerAlign}`:``,d=r.footer?`<w2:group id="${e}Footer" class="drawer_footer${u}">
  <xf:trigger id="${e}Cancel" type="button" class="btn btn_ghost" ev:onclick="scwin.drawer_close">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
  <xf:trigger id="${e}Confirm" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.drawer_confirm">
    <xf:label><![CDATA[저장]]></xf:label>
  </xf:trigger>
</w2:group>`:``,f=`<w2:group id="${e}" class="${o}" role="dialog" aria-modal="true" aria-labelledby="${e}Title">
  ${s}
  <w2:group id="${e}Panel" class="drawer_panel">
    ${c}
    <w2:group id="${e}Header" class="drawer_header">
      <w2:textbox id="${e}Title" class="drawer_title" tagname="h2" label="${t}"></w2:textbox>
      ${l}
      <xf:trigger id="${e}Close" type="button" class="drawer_close" ev:onclick="scwin.drawer_close">
        <xf:label><![CDATA[닫기]]></xf:label>
      </xf:trigger>
    </w2:group>
    <w2:group id="${e}Body" class="drawer_body">
      <w2:textbox id="${e}BodyText" tagname="p" label="${n}"></w2:textbox>
    </w2:group>
    ${d?d.replaceAll(`
`,`
    `):``}
  </w2:group>
</w2:group>`;return r.triggerLabel?`<xf:trigger id="${e}Trigger" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.drawer_open">
  <xf:label><![CDATA[${r.triggerLabel}]]></xf:label>
</xf:trigger>
${f}`:f}function wn(e){switch(e){case`open`:return G(`open`,`알림`,`로드 시 열린 Drawer입니다.`,{open:!0});case`placement`:return G(`placement`,`왼쪽 패널`,`왼쪽에서 열립니다.`,{placement:`left`,triggerLabel:`왼쪽`});case`size`:return G(`size`,`Large`,`넓은 패널`,{classes:`drawer_lg`,triggerLabel:`Large`});case`footer`:return G(`footer`,`항목 편집`,`이름 입력 필드를 배치합니다.`,{footer:!0,triggerLabel:`항목 편집`});case`footerAlign`:return G(`footerAlign`,`푸터 정렬`,`균등 정렬 예시입니다.`,{placement:`bottom`,footer:!0,footerAlign:`even`,open:!0});case`extra`:return G(`extra`,`주문 #1042`,`주문 상세 정보`,{extra:`완료`,open:!0});case`menu`:return G(`menu`,`앱 메뉴`,`대시보드 · 분석 · 설정`,{placement:`left`,triggerLabel:`메뉴 열기`});case`nested`:return`${G(`nestedParent`,`첫 번째 Drawer`,`두 번째 Drawer를 엽니다.`,{triggerLabel:`첫 번째 Drawer 열기`})}

${G(`nestedChild`,`두 번째 Drawer`,`최상위 패널만 조작합니다.`,{classes:`drawer_sm`,open:!0})}`;case`dragSheet`:return G(`dragSheet`,`공유 · 액션`,`하단 액션 시트입니다.`,{placement:`bottom`,draggable:!0,triggerLabel:`드래그 시트 열기`});case`noBackdrop`:return G(`noBackdrop`,`백드롭 없음`,`패널만 표시합니다.`,{classes:`drawer_sm`,backdrop:!1,open:!0});default:return G(`basic`,`상세 정보`,`Drawer 패널 본문입니다.`,{footer:!0,triggerLabel:`Drawer 열기`})}}function K(e,t,n,r,i={}){let a=i.open?` is-open`:``,o=[`popover`,i.classes,a.trim()].filter(Boolean).join(` `),s=i.noArrow?``:`<w2:textbox id="${e}Arrow" class="popover_arrow" aria-hidden="true" label=""></w2:textbox>`,c=i.footer?`<w2:group id="${e}Footer" class="popover_footer">
  <xf:trigger id="${e}Cancel" type="button" class="btn btn_ghost btn_sm" data-popover-close="true" ev:onclick="scwin.popover_close">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
  <xf:trigger id="${e}Confirm" type="button" class="btn btn_filled btn_sm color_primary" ev:onclick="scwin.popover_confirm">
    <xf:label><![CDATA[확인]]></xf:label>
  </xf:trigger>
</w2:group>`:``;return`<w2:group id="${e}" class="${o}"${i.placement?` data-popover-placement="${i.placement}"`:``}>
  <xf:trigger id="${e}Trigger" type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="${i.open?`true`:`false`}" aria-controls="${e}Panel" ev:onclick="scwin.popover_toggle">
    <xf:label><![CDATA[${t}]]></xf:label>
  </xf:trigger>
  <w2:group id="${e}Panel" class="popover_panel" role="dialog" aria-labelledby="${e}Heading">
    ${s}
    <w2:textbox id="${e}Heading" class="popover_title" tagname="h3" label="${n}"></w2:textbox>
    <w2:textbox id="${e}Body" class="popover_body" tagname="p" label="${r}"></w2:textbox>
    ${c?c.replaceAll(`
`,`
    `):``}
  </w2:group>
</w2:group>`}function Tn(e){switch(e){case`noLabel`:return K(`noLabel`,`라벨 없음`,``,`짧은 안내 문구만 필요할 때 사용합니다.`);case`open`:return K(`open`,`열림`,`열린 Popover`,`정적 데모용 열린 상태입니다.`,{open:!0});case`size`:return K(`size`,`Small`,`작은 Popover`,`작은 패널입니다.`,{classes:`popover_sm`});case`offset`:return K(`offset`,`lg`,`lg`,`넓은 간격`,{classes:`popover_offset-lg`});case`title`:return K(`title`,`도움말`,`배송 안내`,`평일 오후 2시 이전 주문은 당일 출고됩니다.`);case`footer`:return K(`footer`,`삭제 확인`,`항목 삭제`,`이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`,{footer:!0});case`hover`:return K(`hover`,`에스크로`,`에스크로 설명`,`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`);case`trigger`:return K(`trigger`,`Button`,`Button 트리거`,`버튼 트리거 예시입니다.`);case`placement`:return K(`placement`,`위`,`위쪽 가운데 배치`,`트리거 위 · 가운데`,{placement:`top-center`});case`form`:return K(`form`,`메모 추가`,`빠른 메모`,`내용 입력 필드를 배치합니다.`,{footer:!0});case`arrowAnchor`:return K(`arrowAnchor`,`S`,`target`,`화살표가 트리거 중앙을 가리킵니다.`);case`noArrow`:return K(`noArrow`,`화살표 없음`,`화살표 없는 Popover`,`화살표가 표시되지 않는 패널입니다.`,{noArrow:!0});default:return K(`basic`,`Popover 열기`,`안내`,`트리거를 클릭하면 이 패널이 표시됩니다.`)}}function q(e,t,n,r={}){let i=r.open?` is-open`:``,a=[`tooltip`,r.inverse&&`tooltip_inverse`,r.classes,i.trim()].filter(Boolean).join(` `),o=r.noArrow?``:`<w2:textbox id="${e}Arrow" class="tooltip_arrow" aria-hidden="true" label=""></w2:textbox>`;return`<w2:group id="${e}" class="${a}"${r.placement?` data-tooltip-placement="${r.placement}"`:``}>
  <xf:trigger id="${e}Trigger" type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="${e}Bubble" ev:onmouseover="scwin.tooltip_open" ev:onmouseout="scwin.tooltip_close">
    <xf:label><![CDATA[${t}]]></xf:label>
  </xf:trigger>
  <w2:group id="${e}Bubble" class="tooltip_bubble" role="tooltip">
    ${o}
    <w2:textbox id="${e}Content" class="tooltip_content" label="${n}"></w2:textbox>
  </w2:group>
</w2:group>`}function En(e){switch(e){case`slot`:return q(`slot`,`슬롯 예시`,`짧은 도움말 텍스트입니다.`);case`open`:return q(`open`,`열림`,`정적 데모용 열린 상태입니다.`,{open:!0});case`size`:return q(`size`,`Small`,`작은 말풍선`,{classes:`tooltip_sm`});case`offset`:return q(`offset`,`lg`,`넓은 간격`,{classes:`tooltip_offset-lg`});case`inline`:return q(`inline`,`에스크로`,`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`,{classes:`tooltip_inline`});case`trigger`:return q(`trigger`,`Button`,`버튼 트리거 예시입니다.`);case`click`:return q(`click`,`클릭하여 보기`,`클릭으로 열고 닫는 Tooltip입니다.`);case`placement`:return q(`placement`,`위`,`트리거 위`,{placement:`top`});case`inverse`:return q(`inverse`,`역색 Tooltip`,`어두운 배경의 말풍선입니다.`,{inverse:!0});case`disabled`:return q(`disabled`,`제출 불가`,`필수 항목을 모두 입력해야 제출할 수 있습니다.`);case`arrowAnchor`:return q(`arrowAnchor`,`S`,`화살표가 트리거 중앙을 가리킵니다.`);case`noArrow`:return q(`noArrow`,`화살표 없음`,`화살표가 표시되지 않는 말풍선입니다.`,{noArrow:!0});default:return q(`basic`,`마우스 오버`,`짧은 도움말 텍스트입니다.`)}}function J(e,t,n={}){let r=n.ariaLabel??n.label??`진행률`;if(n.circle)return`<w2:group id="${e}" class="progress progress_circle${n.classes?` ${n.classes}`:``}" role="progressbar" aria-label="${r}" aria-valuenow="${t}" aria-valuemin="0" aria-valuemax="100">
  <w2:textbox id="${e}Value" class="progress_circle-value" label="${t}%"></w2:textbox>
</w2:group>`;let i=n.label?`<w2:group id="${e}Header" class="progress_header">
  <w2:textbox id="${e}Label" class="progress_label" label="${n.label}"></w2:textbox>
  <w2:textbox id="${e}Info" class="progress_info" label="${t}%"></w2:textbox>
</w2:group>`:``;return`<w2:group id="${e}" class="progress${n.classes?` ${n.classes}`:``}" role="progressbar" aria-label="${r}" aria-valuenow="${t}" aria-valuemin="0" aria-valuemax="100">
  ${i?i.replaceAll(`
`,`
  `):``}
  <w2:group id="${e}Track" class="progress_track">
    <w2:group id="${e}Bar" class="progress_bar" style="width:${t}%"></w2:group>
  </w2:group>
</w2:group>`}function Dn(e){switch(e){case`label`:return[J(`labelUpload`,42,{classes:`progress_fit color_primary`,label:`파일 업로드`}),J(`labelSync`,67,{classes:`progress_fit color_primary`,label:`데이터 동기화`})].join(`

`);case`color`:return[J(`colorPrimary`,50,{classes:`progress_fit color_primary`}),J(`colorSuccess`,100,{classes:`progress_fit color_success`})].join(`

`);case`size`:return[J(`sizeSm`,40,{classes:`progress_fit progress_sm color_primary`}),J(`sizeMd`,55,{classes:`progress_fit color_primary`}),J(`sizeLg`,70,{classes:`progress_fit progress_lg color_primary`})].join(`

`);case`striped`:return J(`striped`,45,{classes:`progress_fit progress_striped color_primary`});case`indeterminate`:return J(`indeterminate`,0,{classes:`progress_fit color_primary is-indeterminate`,ariaLabel:`처리 중`});case`inside`:return J(`inside`,80,{classes:`progress_fit progress_inside progress_lg color_success`});case`circle`:return[J(`circleA`,25,{circle:!0}),J(`circleB`,68,{circle:!0,classes:`color_success`})].join(`

`);case`width`:return[J(`widthFit`,50,{classes:`progress_fit color_primary`,label:`progress_fit`}),J(`widthBlock`,72,{classes:`progress_block color_primary`,label:`progress_block — 전체 너비`})].join(`

`);default:return[J(`basic0`,0,{classes:`progress_fit`}),J(`basic30`,30,{classes:`progress_fit`}),J(`basic60`,60,{classes:`progress_fit`}),J(`basic100`,100,{classes:`progress_fit color_success`})].join(`

`)}}function Y(e,t={}){let n=t.tip?`<w2:textbox id="${e}Tip" class="spin_tip" label="${t.tip}"></w2:textbox>`:``,r=`<w2:group id="${e}" class="spin${t.classes?` ${t.classes}`:``}" role="status" aria-live="polite" aria-busy="true" aria-label="${t.ariaLabel??t.tip??`로딩 중`}">
  <w2:textbox id="${e}Indicator" class="spin_indicator" aria-hidden="true" label=""></w2:textbox>
  ${n}
</w2:group>`;return t.overlay?`<w2:group id="${e}Wrap" class="spin_wrap spin_wrap-block is-loading" aria-busy="true">
  <w2:group id="${e}Body" class="spin_wrap-body">
    <w2:textbox id="${e}Content" tagname="p" label="콘텐츠 영역"></w2:textbox>
  </w2:group>
  ${r.replaceAll(`
`,`
  `)}
</w2:group>`:r}function On(e){switch(e){case`size`:return[Y(`sizeSm`,{classes:`spin_sm color_primary`}),Y(`sizeMd`,{classes:`color_primary`}),Y(`sizeLg`,{classes:`spin_lg color_primary`})].join(`

`);case`color`:return[Y(`colorPrimary`,{classes:`color_primary`,ariaLabel:`Primary 로딩`}),Y(`colorSuccess`,{classes:`color_success`,ariaLabel:`Success 로딩`})].join(`

`);case`tip`:return Y(`tip`,{classes:`color_primary`,tip:`데이터를 불러오는 중…`});case`inline`:return Y(`inline`,{classes:`spin_sm spin_inline color_primary`,tip:`저장 중…`});case`block`:return Y(`block`,{classes:`spin_block color_primary`,tip:`잠시만 기다려 주세요…`});case`overlay`:return Y(`overlay`,{classes:`spin_overlay color_primary`,tip:`데이터 로딩 중…`,overlay:!0});default:return Y(`basic`,{classes:`color_primary`})}}function X(e,t={}){let n=t.lines??3,r=t.staticMode?` skeleton_static`:``,i=t.avatar?`<w2:group id="${e}Row" class="skeleton_row">
  <w2:textbox id="${e}Avatar" class="skeleton_circle" aria-hidden="true" label=""></w2:textbox>
  <w2:group id="${e}Texts" class="skeleton_group">
    <w2:textbox id="${e}Title" class="skeleton_title" aria-hidden="true" label=""></w2:textbox>
  </w2:group>
</w2:group>`:``,a=Array.from({length:n},(t,n)=>`<w2:textbox id="${e}Line${n+1}" class="skeleton_text" aria-hidden="true" label=""></w2:textbox>`).join(`
`);return`<w2:group id="${e}" class="skeleton_group${r}${t.classes?` ${t.classes}`:``}" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  ${i?i.replaceAll(`
`,`
  `):``}
  ${a.replaceAll(`
`,`
  `)}
</w2:group>`}function kn(e){switch(e){case`shape`:return[X(`shapeAvatar`,{avatar:!0,lines:0}),X(`shapeRound`,{classes:`skeleton_circle`,lines:0})].join(`

`);case`card`:return`<w2:group id="cardRoot" class="card card_shadow" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  ${X(`card`,{avatar:!0,lines:2}).replaceAll(`
`,`
  `)}
</w2:group>`;case`static`:return X(`static`,{lines:3,staticMode:!0});default:return X(`basic`,{lines:3})}}function Z(e,t,n={}){let r=n.simple?``:`<w2:textbox id="${e}Image" class="empty_image" aria-hidden="true" label=""></w2:textbox>`,i=n.footer?`<w2:group id="${e}Footer" class="empty_footer">
  <xf:trigger id="${e}Action" type="button" class="btn btn_filled color_primary btn_sm" ev:onclick="scwin.empty_action">
    <xf:label><![CDATA[프로젝트 만들기]]></xf:label>
  </xf:trigger>
</w2:group>`:``;return`<w2:group id="${e}" class="empty${n.classes?` ${n.classes}`:``}" role="status">
  ${r}
  <w2:textbox id="${e}Desc" class="empty_desc" label="${t}"></w2:textbox>
  ${i?i.replaceAll(`
`,`
  `):``}
</w2:group>`}function An(e){switch(e){case`footer`:return Z(`footer`,`등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.`,{footer:!0});case`custom`:return Z(`custom`,`검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.`);case`size`:return[Z(`sizeSm`,`Small`,{classes:`empty_sm`}),Z(`sizeMd`,`Medium (기본)`),Z(`sizeLg`,`Large`,{classes:`empty_lg`})].join(`

`);case`simple`:return Z(`simple`,`일정 없음`,{classes:`empty_sm empty_simple`,simple:!0});case`block`:return`<w2:group id="blockCard" class="card card_shadow">
  <w2:textbox id="blockTitle" class="card_title" tagname="h3" label="알림 목록"></w2:textbox>
  ${Z(`block`,`새 알림이 없습니다`,{classes:`empty_block`}).replaceAll(`
`,`
  `)}
</w2:group>`;default:return Z(`basic`,`데이터가 없습니다`)}}var jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Q,Wn,Gn,Kn,qn,Jn,Yn;function $(){return($=e((()=>{s(),f(),te(),ie(),de(),ve(),k(),we(),Ae(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),Lt(),zt(),Vt(),Ut(),Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),jn=B(`Alert`,`alert`,{html:Ie,gulp:Re,react:Be,vue:He}),Mn=B(`Snackbar`,`snackbar`,{html:We,gulp:Ke,react:`${Je}\n\n<!-- SnackbarRegion.jsx -->\n${Xe}`,vue:`${Qe}\n\n<!-- SnackbarRegion.vue -->\n${et}`}),Nn=B(`Modal`,`modal`,{html:nt,gulp:it,react:ot,vue:ct}),Pn=B(`Drawer`,`drawer`,{html:ut,gulp:ft,react:mt,vue:gt}),Fn=B(`Popover`,`popover`,{html:vt,gulp:bt,react:St,vue:wt}),In=B(`Tooltip`,`tooltip`,{html:Et,gulp:Ot,react:At,vue:Mt}),Ln=B(`Progress`,`progress`,{html:Pt,gulp:It,react:`${Rt}\n\n<!-- ProgressCircle.jsx -->\n${Bt}`,vue:`${Ht}\n\n<!-- ProgressCircle.vue -->\n${Wt}`}),Rn=B(`Spin`,`spin`,{html:Kt,gulp:Jt,react:`${Xt}\n\n<!-- SpinWrap.jsx -->\n${Qt}`,vue:`${en}\n\n<!-- SpinWrap.vue -->\n${nn}`}),zn=B(`Skeleton`,`skeleton`,{html:an,gulp:sn,react:ln,vue:dn}),Bn=B(`Empty`,`empty`,{html:pn,gulp:hn,react:_n,vue:yn}),Vn=V(`Alert`,o,xn),Hn=V(`Snackbar`,d,Sn),Un=V(`Modal`,ee,Cn),Q=V(`Drawer`,re,wn),Wn=V(`Popover`,ue,Tn),Gn=V(`Tooltip`,_e,En),Kn=V(`Progress`,O,Dn),qn=V(`Spin`,Ce,On),Jn=V(`Skeleton`,ke,kn),Yn=V(`Empty`,Pe,An)})))()}export{Hn as _,Bn as a,In as b,Nn as c,Wn as d,Ln as f,Mn as g,Jn as h,Q as i,Un as l,zn as m,Vn as n,Yn as o,Kn as p,Pn as r,$ as s,jn as t,Fn as u,Rn as v,Gn as x,qn as y};