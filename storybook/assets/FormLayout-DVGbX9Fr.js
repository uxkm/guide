import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as ee,n as te,o as ne,r as re,s as ie,t as a,u as ae}from"./FormLayout.stories-CSG1NQnU.js";import{i as o,r as s}from"./react-DPG3xyh1.js";import{c,r as l,u as oe}from"./blocks-BXsfpknd.js";import{i as se,n as ce,r as u,t as d}from"./ComponentApiDocs-BKc5okVC.js";function f(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>`${n}${e}`).join(`
`)}function le(e,t){let n=`import FormLayout, { FormActions, FormField } from '@uxkm/react/form-layout';\n\nexport function Example() {\n  return (\n${f(t.react,/^\s*<>/.test(t.react)?2:4)}\n  );\n}`,r=`<script setup>\nimport FormLayout, { FormActions, FormField } from '@uxkm/vue/form-layout';\n<\/script>\n\n<template>\n${f(t.vue,2)}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/FormLayout/FormLayout.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/FormLayout/form-layout.njk · ${e}`,code:`{# FormLayout · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/form-layout · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/form-layout · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/form-layout · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/form-layout · ${e}`,code:n}]}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{p=(e,t,n=``,r=``)=>`<div class="form_field">
  <label class="form_field-label" for="${e}">${t}</label>
  <div class="form_field-control"><input id="${e}" class="input" type="text"${r}></div>${n}
</div>`,m=(e,t,n=``,r=``)=>`<FormField label="${t}" htmlFor="${e}"${n}>
  <input id="${e}" className="input" type="text"${r} />
</FormField>`,h=(e,t,n=``,r=``)=>`<FormField label="${t}" for="${e}"${n}>
  <input id="${e}" class="input" type="text"${r}>
</FormField>`,g=e=>`${e}<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span>`,_=`<div class="form_actions"><button class="btn btn_filled color_primary" type="submit">저장</button><button class="btn btn_ghost" type="button">취소</button></div>`,v=`<FormActions><button className="btn btn_filled color_primary" type="submit">저장</button><button className="btn btn_ghost" type="button">취소</button></FormActions>`,y=`<FormActions><button class="btn btn_filled color_primary" type="submit">저장</button><button class="btn btn_ghost" type="button">취소</button></FormActions>`,b={vertical:{html:`<form class="form form_vertical form_fit">${p(`name`,g(`이름`),`
  <p class="form_field-hint">실명을 입력해 주세요.</p>`,` required`)}${p(`email`,`이메일`)}${_}</form>`,react:`<FormLayout fit>${m(`name`,`이름`,` required hint="실명을 입력해 주세요."`,` required`)}${m(`email`,`이메일`)}${v}</FormLayout>`,vue:`<FormLayout fit>${h(`name`,`이름`,` required hint="실명을 입력해 주세요."`,` required`)}${h(`email`,`이메일`)}${y}</FormLayout>`},horizontal:{html:`<form class="form form_horizontal">${p(`name`,g(`이름`),``,` required`)}${p(`email`,`이메일`)}${_}</form>`,react:`<FormLayout layout="horizontal">${m(`name`,`이름`,` required`,` required`)}${m(`email`,`이메일`)}${v}</FormLayout>`,vue:`<FormLayout layout="horizontal">${h(`name`,`이름`,` required`,` required`)}${h(`email`,`이메일`)}${y}</FormLayout>`},horizontalAlign:{html:`<div class="demo-stack"><form class="form form_horizontal form_label-width-sm form_label-align-start">${p(`city`,`도시`)}${p(`zip`,`우편번호`)}</form><form class="form form_horizontal form_label-width-lg">${p(`company`,`회사명`)}${p(`team`,`부서`)}</form></div>`,react:`<div className="demo-stack"><FormLayout layout="horizontal" labelWidth="sm" labelAlign="start">${m(`city`,`도시`)}${m(`zip`,`우편번호`)}</FormLayout><FormLayout layout="horizontal" labelWidth="lg">${m(`company`,`회사명`)}${m(`team`,`부서`)}</FormLayout></div>`,vue:`<div class="demo-stack"><FormLayout layout="horizontal" label-width="sm" label-align="start">${h(`city`,`도시`)}${h(`zip`,`우편번호`)}</FormLayout><FormLayout layout="horizontal" label-width="lg">${h(`company`,`회사명`)}${h(`team`,`부서`)}</FormLayout></div>`},inline:{html:`<form class="form form_inline">${p(`query`,`검색어`)}<div class="form_field"><label class="form_field-label" for="status">상태</label><div class="form_field-control"><select id="status" class="input"><option>전체</option><option>완료</option></select></div></div><div class="form_actions"><button class="btn btn_filled color_primary" type="submit">검색</button></div></form>`,react:`<FormLayout layout="inline">${m(`query`,`검색어`)}<FormField label="상태" htmlFor="status"><select id="status" className="input"><option>전체</option><option>완료</option></select></FormField><FormActions><button className="btn btn_filled color_primary" type="submit">검색</button></FormActions></FormLayout>`,vue:`<FormLayout layout="inline">${h(`query`,`검색어`)}<FormField label="상태" for="status"><select id="status" class="input"><option>전체</option><option>완료</option></select></FormField><FormActions><button class="btn btn_filled color_primary" type="submit">검색</button></FormActions></FormLayout>`},grid:{html:`<form class="form form_vertical"><div class="grid grid_cols-1 grid_cols-md-2">${p(`name`,`이름`)}${p(`team`,`부서`)}</div>${p(`email`,`이메일`)}${_}</form>`,react:`<FormLayout><div className="grid grid_cols-1 grid_cols-md-2">${m(`name`,`이름`)}${m(`team`,`부서`)}</div>${m(`email`,`이메일`)}${v}</FormLayout>`,vue:`<FormLayout><div class="grid grid_cols-1 grid_cols-md-2">${h(`name`,`이름`)}${h(`team`,`부서`)}</div>${h(`email`,`이메일`)}${y}</FormLayout>`},width:{html:`<div class="demo-stack"><form class="form form_vertical">${p(`width-default`,`기본 너비`)}</form><form class="form form_vertical form_fit">${p(`width-fit`,`제한 너비`)}</form><form class="form form_horizontal">${p(`width-horizontal`,`가로 레이아웃`)}</form></div>`,react:`<div className="demo-stack"><FormLayout>${m(`width-default`,`기본 너비`)}</FormLayout><FormLayout fit>${m(`width-fit`,`제한 너비`)}</FormLayout><FormLayout layout="horizontal">${m(`width-horizontal`,`가로 레이아웃`)}</FormLayout></div>`,vue:`<div class="demo-stack"><FormLayout>${h(`width-default`,`기본 너비`)}</FormLayout><FormLayout fit>${h(`width-fit`,`제한 너비`)}</FormLayout><FormLayout layout="horizontal">${h(`width-horizontal`,`가로 레이아웃`)}</FormLayout></div>`},actions:{html:`<div class="demo-stack"><form class="form form_vertical">${p(`actions-vertical`,`제목`)}${_}</form><form class="form form_horizontal">${p(`actions-horizontal`,`제목`)}${_}</form></div>`,react:`<div className="demo-stack"><FormLayout>${m(`actions-vertical`,`제목`)}${v}</FormLayout><FormLayout layout="horizontal">${m(`actions-horizontal`,`제목`)}${v}</FormLayout></div>`,vue:`<div class="demo-stack"><FormLayout>${h(`actions-vertical`,`제목`)}${y}</FormLayout><FormLayout layout="horizontal">${h(`actions-horizontal`,`제목`)}${y}</FormLayout></div>`},example:{html:`<form class="form form_vertical form_compact"><div class="grid grid_cols-1 grid_cols-md-2">${p(`example-id`,g(`아이디`),`
  <p class="form_field-hint">영문·숫자 4~16자</p>`,` required`)}${p(`example-password`,g(`비밀번호`),``,` required`)}${p(`example-name`,g(`이름`),``,` required`)}${p(`example-email`,`이메일`)}<div class="form_field grid_col-span-md-2"><label class="form_field-label" for="example-memo">메모</label><div class="form_field-control"><textarea id="example-memo" class="textarea" rows="3"></textarea></div></div></div>${_.replace(`저장`,`가입하기`)}</form>`,react:`<FormLayout compact><div className="grid grid_cols-1 grid_cols-md-2">${m(`example-id`,`아이디`,` required hint="영문·숫자 4~16자"`,` required`)}${m(`example-password`,`비밀번호`,` required`,` required`)}${m(`example-name`,`이름`,` required`,` required`)}${m(`example-email`,`이메일`)}<FormField className="grid_col-span-md-2" label="메모" htmlFor="example-memo"><textarea id="example-memo" className="textarea" rows={3} /></FormField></div>${v.replace(`저장`,`가입하기`)}</FormLayout>`,vue:`<FormLayout compact><div class="grid grid_cols-1 grid_cols-md-2">${h(`example-id`,`아이디`,` required hint="영문·숫자 4~16자"`,` required`)}${h(`example-password`,`비밀번호`,` required`,` required`)}${h(`example-name`,`이름`,` required`,` required`)}${h(`example-email`,`이메일`)}<FormField class="grid_col-span-md-2" label="메모" for="example-memo"><textarea id="example-memo" class="textarea" rows="3"></textarea></FormField></div>${y.replace(`저장`,`가입하기`)}</FormLayout>`}},x=Object.fromEntries(Object.entries(b).map(([e,t])=>[e,le(e,t)]))})))()}var C;function w(){return(w=e((()=>{C=`<!-- FormLayout 원본 구현: 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다. -->
<!-- form_vertical·form_fit으로 세로 배치와 입력 최대 너비를 적용합니다. -->
<form class="form form_vertical form_fit" data-component="FormLayout">
  <!-- 레이블, 입력 컨트롤, 상태 메시지는 하나의 form_field 블록으로 구성합니다. -->
  <div class="form_field">
    <label class="form_field-label" for="form-layout-name">
      이름
      <span class="form_field-required">
        <span aria-hidden="true">*</span>
        <span class="form_field-required-text">필수 항목</span>
      </span>
    </label>
    <div class="form_field-control">
      <input id="form-layout-name" class="input" type="text" required />
    </div>
    <p class="form_field-hint">실명을 입력해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="form-layout-email">이메일</label>
    <div class="form_field-control">
      <input id="form-layout-email" class="input" type="email" />
    </div>
  </div>
  <!-- form_actions는 제출·취소 버튼을 현재 레이아웃 규칙에 맞춰 정렬합니다. -->
  <div class="form_actions">
    <button class="btn btn_filled color_primary" type="submit">저장</button>
    <button class="btn btn_ghost" type="button">취소</button>
  </div>
</form>
`})))()}var T;function E(){return(E=e((()=>{T=`{# FormLayout 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# form_vertical·form_fit으로 세로 배치와 입력 최대 너비를 적용합니다. #}
<form class="form form_vertical form_fit" data-component="FormLayout">
  {# 레이블, 입력 컨트롤, 상태 메시지는 하나의 form_field 블록으로 구성합니다. #}
  <div class="form_field">
    <label class="form_field-label" for="form-layout-name">
      이름
      <span class="form_field-required">
        <span aria-hidden="true">*</span>
        <span class="form_field-required-text">필수 항목</span>
      </span>
    </label>
    <div class="form_field-control">
      <input id="form-layout-name" class="input" type="text" required />
    </div>
    <p class="form_field-hint">실명을 입력해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="form-layout-email">이메일</label>
    <div class="form_field-control">
      <input id="form-layout-email" class="input" type="email" />
    </div>
  </div>
  {# form_actions는 제출·취소 버튼을 현재 레이아웃 규칙에 맞춰 정렬합니다. #}
  <div class="form_actions">
    <button class="btn btn_filled color_primary" type="submit">저장</button>
    <button class="btn btn_ghost" type="button">취소</button>
  </div>
</form>
`})))()}var D;function O(){return(O=e((()=>{D=`/**
 * FormLayout 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const LAYOUTS = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 배치 방향입니다.
const LABEL_WIDTHS = new Set(['', 'sm', 'lg']); // 가로 레이아웃에서 허용하는 레이블 너비입니다.

export function FormLayout({
  as: Root = 'form', // FormLayout의 루트 요소 또는 컴포넌트를 지정합니다.
  layout = 'vertical', // 필드 배치 방향입니다.
  fit = false, // 입력 영역을 공통 최대 너비로 제한합니다.
  compact = false, // 필드 사이 간격을 줄입니다.
  labelAlign = 'end', // 가로 레이아웃의 레이블 정렬입니다.
  labelWidth = '', // 가로 레이아웃의 레이블 열 너비입니다.
  children, // 폼 필드와 액션 등 내부 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, onSubmit 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 지원하지 않는 layout 값은 기본 세로 배치로 안전하게 되돌립니다.
  const resolvedLayout = LAYOUTS.has(layout) ? layout : 'vertical';

  // 폼 단위 옵션을 공통 form_* 변형 클래스로 변환합니다.
  const classes = [
    'form', // 폼 레이아웃을 활성화하는 필수 클래스입니다.
    \`form_\${resolvedLayout}\`, // 세로·가로·인라인 배치 클래스입니다.
    fit && 'form_fit', // 입력 최대 너비 제한입니다.
    compact && 'form_compact', // 조밀한 간격 변형입니다.
    resolvedLayout === 'horizontal' && labelAlign === 'start' && 'form_label-align-start', // 가로 배치에서 레이블 시작 정렬입니다.
    resolvedLayout === 'horizontal' &&
      LABEL_WIDTHS.has(labelWidth) &&
      labelWidth &&
      \`form_label-width-\${labelWidth}\`, // 검증된 레이블 열 너비입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="FormLayout" {...props}>
      {children}
    </Root>
  );
}

export function FormField({
  as: Root = 'div', // FormField의 루트 요소 또는 컴포넌트를 지정합니다.
  label, // 필드 레이블입니다.
  htmlFor, // 레이블과 연결할 입력 id입니다.
  required = false, // 필수 항목 표시를 추가합니다.
  hint, // 오류가 없을 때 보여줄 보조 설명입니다.
  error, // 검증 오류 메시지입니다.
  success, // 성공 안내 메시지입니다.
  fit = false, // 필드 너비를 공통 최대 너비로 제한합니다.
  children, // 입력 컨트롤을 담는 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 개별 필드는 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
  const classes = [
    'form_field', // 필드 단위 레이아웃 클래스입니다.
    fit && 'form_field_fit', // 필드 너비 제한입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Root className={classes} {...props}>
      {/* label과 htmlFor를 연결하고 필수 상태는 시각·보조기술 텍스트를 모두 제공합니다. */}
      {label != null && (
        <label className="form_field-label" htmlFor={htmlFor}>
          {label}
          {required && (
            <span className="form_field-required">
              <span aria-hidden="true">*</span>
              <span className="form_field-required-text">필수 항목</span>
            </span>
          )}
        </label>
      )}
      {/* 입력 컴포넌트 종류와 관계없이 동일한 control 영역에 배치합니다. */}
      <div className="form_field-control">{children}</div>
      {/* 오류는 도움말보다 우선하며 즉시 읽히도록 alert 역할을 사용합니다. */}
      {error != null ? (
        <p className="form_field-error" role="alert">
          {error}
        </p>
      ) : hint != null ? (
        <p className="form_field-hint">{hint}</p>
      ) : null}
      {/* 성공 메시지는 도움말·오류와 독립적으로 필요한 경우 표시합니다. */}
      {success != null && <p className="form_field-success">{success}</p>}
    </Root>
  );
}

export function FormActions({
  as: Root = 'div', // FormActions의 루트 요소 또는 컴포넌트를 지정합니다.
  children, // 제출·취소 등 액션 버튼입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 제출·취소 등 폼 액션을 레이아웃에 맞는 공통 영역으로 묶습니다.
  return (
    <Root className={['form_actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Root>
  );
}

export default FormLayout;
`})))()}var k;function A(){return(A=e((()=>{k=`<!--
  FormLayout 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFormLayout', inheritAttrs: false });

// 루트 요소와 배치·간격·레이블 열 옵션을 하나의 FormLayout API로 제공합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'form' }, // FormLayout의 루트 요소 또는 컴포넌트를 지정합니다.
  layout: { type: String, default: 'vertical' }, // 필드 배치 방향입니다.
  fit: Boolean, // 입력 영역을 공통 최대 너비로 제한합니다.
  compact: Boolean, // 필드 사이 간격을 줄입니다.
  labelAlign: { type: String, default: 'end' }, // 가로 레이아웃의 레이블 정렬입니다.
  labelWidth: { type: String, default: '' }, // 가로 레이아웃의 레이블 열 너비입니다.
});
const attrs = useAttrs();
const layouts = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 배치 방향입니다.
const labelWidths = new Set(['', 'sm', 'lg']); // 가로 레이아웃에서 허용하는 레이블 너비입니다.

// 지원하지 않는 layout 값은 기본 세로 배치로 안전하게 되돌립니다.
const resolvedLayout = computed(() => (layouts.has(props.layout) ? props.layout : 'vertical'));

// 폼 단위 옵션과 사용자가 전달한 클래스를 공통 form_* 클래스로 변환합니다.
const classes = computed(() =>
  [
    'form', // 폼 레이아웃을 활성화하는 필수 클래스입니다.
    \`form_\${resolvedLayout.value}\`, // 세로·가로·인라인 배치 클래스입니다.
    props.fit && 'form_fit', // 입력 최대 너비 제한입니다.
    props.compact && 'form_compact', // 조밀한 간격 변형입니다.
    resolvedLayout.value === 'horizontal' &&
      props.labelAlign === 'start' &&
      'form_label-align-start', // 가로 배치에서 레이블 시작 정렬입니다.
    resolvedLayout.value === 'horizontal' &&
      labelWidths.has(props.labelWidth) &&
      props.labelWidth &&
      \`form_label-width-\${props.labelWidth}\`, // 검증된 레이블 열 너비입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
<\/script>

<template>
  <!-- as에 지정한 시맨틱 루트로 렌더링하고 나머지 form 속성을 그대로 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="FormLayout">
    <slot />
  </component>
</template>
`})))()}var j;function M(){return(M=e((()=>{j=`<!--
  FormActions 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFormActions', inheritAttrs: false });

// 필요하면 div 대신 다른 시맨틱 루트로 액션 그룹을 렌더링할 수 있습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // FormActions의 루트 요소 또는 컴포넌트를 지정합니다.
});
const attrs = useAttrs();

// 폼 레이아웃이 인식하는 액션 클래스와 외부 클래스를 함께 적용합니다.
const classes = computed(() =>
  [
    'form_actions', // 제출·취소 등 액션 영역 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
<\/script>

<template>
  <!-- 제출·취소 등 폼 액션을 하나의 레이아웃 영역으로 묶습니다. -->
  <component :is="as" v-bind="attrs" :class="classes">
    <slot />
  </component>
</template>
`})))()}var N;function P(){return(P=e((()=>{N=`<!--
  FormField 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFormField', inheritAttrs: false });

// 필드 루트, 레이블 연결, 필수 표시와 상태 메시지를 하나의 API로 제공합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // FormField의 루트 요소 또는 컴포넌트를 지정합니다.
  label: { type: String, default: '' }, // 필드 레이블입니다.
  for: { type: String, default: '' }, // 레이블과 연결할 입력 id입니다.
  required: Boolean, // 필수 항목 표시를 추가합니다.
  hint: { type: String, default: '' }, // 오류가 없을 때 보여줄 보조 설명입니다.
  error: { type: String, default: '' }, // 검증 오류 메시지입니다.
  success: { type: String, default: '' }, // 성공 안내 메시지입니다.
  fit: Boolean, // 필드 너비를 공통 최대 너비로 제한합니다.
});
const attrs = useAttrs();

// 개별 필드 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
const classes = computed(() =>
  [
    'form_field', // 필드 단위 레이아웃 클래스입니다.
    props.fit && 'form_field_fit', // 필드 너비 제한입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
<\/script>

<template>
  <component :is="as" v-bind="attrs" :class="classes">
    <!-- label과 for를 연결하고 필수 상태는 시각·보조기술 텍스트를 모두 제공합니다. -->
    <label v-if="label" class="form_field-label" :for="props.for">
      {{ label }}
      <span v-if="required" class="form_field-required">
        <span aria-hidden="true">*</span>
        <span class="form_field-required-text">필수 항목</span>
      </span>
    </label>
    <!-- 입력 컴포넌트 종류와 관계없이 동일한 control 영역에 배치합니다. -->
    <div class="form_field-control">
      <slot />
    </div>
    <!-- 오류는 도움말보다 우선하며 즉시 읽히도록 alert 역할을 사용합니다. -->
    <p v-if="error" class="form_field-error" role="alert">{{ error }}</p>
    <p v-else-if="hint" class="form_field-hint">{{ hint }}</p>
    <!-- 성공 메시지는 도움말·오류와 독립적으로 필요한 경우 표시합니다. -->
    <p v-if="success" class="form_field-success">{{ success }}</p>
  </component>
</template>
`})))()}function F(e,t,n={}){let r=n.required?`\n    <w2:group id="${e}Required" class="form_field-required" tagname="span">\n      <w2:textbox id="${e}RequiredMark" class="form_field-required-mark" label="*" aria-hidden="true"></w2:textbox>\n      <w2:textbox id="${e}RequiredText" class="form_field-required-text" label="필수 항목"></w2:textbox>\n    </w2:group>`:``,i=n.hint?`\n  <w2:textbox id="${e}Hint" class="form_field-hint" tagname="p" label="${n.hint}"></w2:textbox>`:``;return`<w2:group id="${e}Field" class="form_field">
  <w2:group id="${e}LabelGroup" class="form_field-label" tagname="label" for="${e}">
    <w2:textbox id="${e}Label" label="${t}"></w2:textbox>${r}
  </w2:group>
  <w2:group id="${e}Control" class="form_field-control">
    <xf:input id="${e}" class="input"${n.required?` mandatory="true"`:``}></xf:input>
  </w2:group>${i}
</w2:group>`}function I(e,t,n){return`<w2:group id="${e}" class="form ${t}" tagname="form">
${z(n)}
</w2:group>`}var L,R,z,B,V,H;function U(){return(U=e((()=>{S(),w(),E(),O(),A(),M(),P(),L=[k,`<!-- FormField.vue -->\n${N}`,`<!-- FormActions.vue -->\n${j}`].join(`

`),R=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/FormLayout/FormLayout.html`,code:C},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/FormLayout/form-layout.njk`,code:T},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/form/FormLayout/Form*.vue`,code:L},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/form-layout → Form*.vue`,code:L},{id:`react`,label:`React`,fileName:`apps/react/src/components/form/FormLayout/FormLayout.jsx`,code:D},{id:`next`,label:`Next`,fileName:`@uxkm/react/form-layout → FormLayout.jsx`,code:D}],z=(e,t=2)=>e.split(`
`).map(e=>`${` `.repeat(t)}${e}`).join(`
`),B=`<w2:group id="formActions" class="form_actions">
  <xf:trigger id="saveButton" type="submit" class="btn btn_filled color_primary" ev:onclick="scwin.form_save">
    <xf:label><![CDATA[저장]]></xf:label>
  </xf:trigger>
  <xf:trigger id="cancelButton" type="button" class="btn btn_ghost" ev:onclick="scwin.form_cancel">
    <xf:label><![CDATA[취소]]></xf:label>
  </xf:trigger>
</w2:group>`,V={vertical:I(`verticalForm`,`form_vertical form_fit`,`${F(`nameInput`,`이름`,{required:!0,hint:`실명을 입력해 주세요.`})}\n${F(`emailInput`,`이메일`)}\n${B}`),horizontal:I(`horizontalForm`,`form_horizontal`,`${F(`horizontalName`,`이름`,{required:!0})}\n${F(`horizontalEmail`,`이메일`)}\n${B}`),horizontalAlign:`${I(`smallLabelForm`,`form_horizontal form_label-width-sm form_label-align-start`,`${F(`cityInput`,`도시`)}\n${F(`zipInput`,`우편번호`)}`)}
${I(`largeLabelForm`,`form_horizontal form_label-width-lg`,`${F(`companyInput`,`회사명`)}\n${F(`teamInput`,`부서`)}`)}`,inline:I(`searchForm`,`form_inline`,`${F(`queryInput`,`검색어`)}\n<w2:group id="statusField" class="form_field">\n  <w2:textbox id="statusLabel" class="form_field-label" tagname="label" for="statusSelect" label="상태"></w2:textbox>\n  <w2:group id="statusControl" class="form_field-control">\n    <xf:select1 id="statusSelect" class="input" ref="data:status"></xf:select1>\n  </w2:group>\n</w2:group>\n${B.replace(`저장`,`검색`)}`),grid:I(`gridForm`,`form_vertical`,`<w2:group id="profileGrid" class="grid grid_cols-1 grid_cols-md-2">\n${z(F(`gridName`,`이름`))}\n${z(F(`gridTeam`,`부서`))}\n</w2:group>\n${F(`gridEmail`,`이메일`)}\n${B}`),width:`${I(`defaultWidthForm`,`form_vertical`,F(`defaultWidthInput`,`기본 너비`))}
${I(`fitWidthForm`,`form_vertical form_fit`,F(`fitWidthInput`,`제한 너비`))}
${I(`fillWidthForm`,`form_horizontal`,F(`fillWidthInput`,`가로 레이아웃`))}`,actions:`${I(`verticalActionForm`,`form_vertical`,`${F(`verticalTitle`,`제목`)}\n${B}`)}
${I(`horizontalActionForm`,`form_horizontal`,`${F(`horizontalTitle`,`제목`)}\n${B.replaceAll(`id="`,`id="horizontal`)}`)}`,example:I(`memberForm`,`form_vertical form_compact`,`<w2:group id="memberGrid" class="grid grid_cols-1 grid_cols-md-2">\n${z(F(`memberId`,`아이디`,{required:!0,hint:`영문·숫자 4~16자`}))}\n${z(F(`memberPassword`,`비밀번호`,{required:!0}))}\n${z(F(`memberName`,`이름`,{required:!0}))}\n${z(F(`memberEmail`,`이메일`))}\n</w2:group>\n${B.replace(`저장`,`가입하기`)}`)},H=Object.fromEntries(Object.entries(x).map(([e,t])=>[e,[...t,{id:`websquare`,label:`WebSquare`,fileName:`WebSquare 화면 XML · FormLayout · ${e}`,code:`<!-- 화면 XML 루트에 w2, xf, ev 네임스페이스를 선언합니다. -->\n${V[e]}`}]]))})))()}var W,G,K,q,J,Y;function X(){return(X=e((()=>{W=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],G=(e,t,n)=>({title:e,description:n,tables:[{columns:W,rows:t}]}),K=e=>e.map(e=>({...e,name:e.name.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)})),q=[{name:`as`,type:`string | component`,default:`'form'`,description:`렌더링할 루트 요소 또는 컴포넌트입니다.`},{name:`layout`,type:`'vertical' | 'horizontal' | 'inline'`,default:`'vertical'`,description:`필드 배치 방향입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`입력 영역을 공통 최대 너비로 제한합니다.`},{name:`compact`,type:`boolean`,default:`false`,description:`필드 사이 간격을 줄입니다.`},{name:`labelAlign`,type:`'end' | 'start'`,default:`'end'`,description:`가로 레이아웃의 레이블 정렬입니다.`},{name:`labelWidth`,type:`'' | 'sm' | 'lg'`,default:`''`,description:`가로 레이아웃의 레이블 열 너비입니다.`}],J=[{name:`as`,type:`string | component`,default:`'div'`,description:`FormField 루트 요소입니다.`},{name:`label`,type:`ReactNode | string`,default:`—`,description:`필드 레이블입니다.`},{name:`htmlFor / for`,type:`string`,default:`—`,description:`레이블과 컨트롤을 연결할 id입니다.`},{name:`required`,type:`boolean`,default:`false`,description:`시각적 별표와 스크린 리더용 “필수 항목” 텍스트를 추가합니다. 실제 컨트롤에도 required를 지정해야 합니다.`},{name:`hint · error · success`,type:`ReactNode | string`,default:`—`,description:`도움말, 오류, 성공 메시지입니다. 오류는 도움말보다 우선합니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`개별 필드 너비를 제한합니다.`}],Y=[G(`React · Next.js API · FormLayout Props`,[...q,{name:`children`,type:`ReactNode`,default:`—`,description:`FormField와 FormActions 콘텐츠입니다.`},{name:`className · ...props`,type:`string · form attributes`,default:`—`,description:`추가 클래스와 네이티브 form 속성입니다.`}],"Next.js는 `@uxkm/react/form-layout`을 재사용합니다."),G(`React · Next.js API · FormField / FormActions`,[...J,{name:`FormActions.as · children`,type:`string · ReactNode`,default:`'div' · —`,description:`제출·취소 같은 폼 액션 영역입니다.`}]),G(`Vue · Nuxt API · FormLayout Props`,K(q),"Nuxt는 `@uxkm/vue/form-layout`을 재사용합니다."),G(`Vue · Nuxt API · FormField / FormActions`,K(J)),G(`HTML · Gulp · 공통 클래스`,[{name:`form · form_vertical · form_horizontal · form_inline`,type:`class`,default:`—`,description:`폼 루트와 배치 방식입니다.`},{name:`form_fit · form_compact`,type:`class`,default:`—`,description:`최대 너비와 조밀한 간격 변형입니다.`},{name:`form_label-align-start · form_label-width-sm/lg`,type:`class`,default:`—`,description:`가로 레이블 정렬과 열 너비입니다.`},{name:`form_field · form_field-label · form_field-control`,type:`class`,default:`—`,description:`필드, 레이블, 컨트롤 구조입니다.`},{name:`form_field-required · form_field-required-text`,type:`class`,default:`—`,description:`시각적 별표와 보조기술용 필수 항목 텍스트입니다.`},{name:`form_field-hint · form_field-error · form_field-success`,type:`class`,default:`—`,description:`도움말과 상태 메시지입니다.`},{name:`form_actions`,type:`class`,default:`—`,description:`폼 하단 또는 인라인 액션 영역입니다.`}]),G(`공통 API · 디자인 토큰`,[{name:`--form-label-width · --form-label-width-sm · --form-label-width-lg`,type:`length`,default:`7.5rem · 5rem · 10rem`,description:`가로 레이아웃 레이블 열 너비입니다.`},{name:`--form-field-gap`,type:`length`,default:`var(--space-lg)`,description:`필드 사이 세로 간격입니다.`},{name:`--form-inline-field-min-width`,type:`length`,default:`8rem`,description:`인라인 입력의 최소 너비입니다.`},{name:`--form-actions-gap`,type:`length`,default:`var(--space-sm)`,description:`액션 버튼 사이 간격입니다.`},{name:`--input-max-width`,type:`length`,default:`320px`,description:`fit 변형에서 공유하는 입력 최대 너비입니다.`}]),G(`WebSquare API · XML`,[{name:`w2:group.form`,type:`XML element · class`,default:`—`,description:`FormLayout 루트입니다. tagname="form"과 form_vertical/horizontal/inline 클래스를 조합합니다.`},{name:`w2:group.form_field`,type:`XML element · class`,default:`—`,description:`레이블, 입력 컨트롤, 상태 메시지를 묶는 필드 블록입니다.`},{name:`w2:group.form_field-label`,type:`XML element · for`,default:`—`,description:`tagname="label"과 for로 입력 컴포넌트 id를 연결합니다.`},{name:`w2:group.form_field-control`,type:`XML element · class`,default:`—`,description:`xf:input, xf:select1 등 실제 WebSquare 입력 컴포넌트를 배치하고 필수 입력에는 mandatory를 설정합니다.`},{name:`w2:textbox.form_field-hint/error/success`,type:`XML element · class`,default:`—`,description:`도움말, 오류, 성공 상태 메시지를 표시합니다. 오류 메시지는 role="alert"를 함께 사용합니다.`},{name:`w2:group.form_actions`,type:`XML element · class`,default:`—`,description:`xf:trigger로 구성한 제출·취소 액션을 현재 폼 레이아웃에 맞춰 정렬합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`저장, 검색, 취소 같은 화면 스크립트 함수를 실행합니다.`},{name:`data:* · ref`,type:`DataCollection binding`,default:`—`,description:`입력값을 DataMap 또는 DataList 경로에 바인딩합니다.`}],`WebSquare는 화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment를 사용합니다.`)]})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(c,{of:re}),`
`,(0,Q.jsx)(t.h1,{id:`form-layout`,children:`Form Layout`}),`
`,(0,Q.jsx)(t.p,{children:`레이블, 입력 컨트롤, 상태 메시지와 액션을 일관된 간격과 정렬로 구성하는 폼 레이아웃 컴포넌트입니다.`}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/form-layout`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/form-layout`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`필수 필드는 별표와 함께 스크린 리더용 “필수 항목” 텍스트를 제공합니다. `,(0,Q.jsx)(t.code,{children:`FormField`}),`의 `,(0,Q.jsx)(t.code,{children:`required`}),` 표시는 안내용이므로 실제 입력 컨트롤에도 네이티브 `,(0,Q.jsx)(t.code,{children:`required`}),` 속성을 지정해야 합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 폼 루트와 필드 영역을 `,(0,Q.jsx)(t.code,{children:`w2:group`}),`, 입력 컨트롤을 `,(0,Q.jsx)(t.code,{children:`xf:input`}),`·`,(0,Q.jsx)(t.code,{children:`xf:select1`}),`, 액션을 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭의 코드는 화면 XML 루트에 `,(0,Q.jsx)(t.code,{children:`w2`}),`, `,(0,Q.jsx)(t.code,{children:`xf`}),`, `,(0,Q.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`FormLayout`}),`, `,(0,Q.jsx)(t.code,{children:`FormField`}),`, `,(0,Q.jsx)(t.code,{children:`FormActions`}),` 자체의 실제 원본 구현입니다. React와 Vue는 배치·너비 옵션을 공통 클래스에 연결하고 레이블, 입력 영역, 상태 메시지, 액션 영역의 접근성 구조를 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`layout`}),`은 `,(0,Q.jsx)(t.code,{children:`vertical`}),`, `,(0,Q.jsx)(t.code,{children:`horizontal`}),`, `,(0,Q.jsx)(t.code,{children:`inline`}),` 배치 클래스로 변환됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`fit`}),`·`,(0,Q.jsx)(t.code,{children:`compact`}),`는 폼 또는 개별 필드의 너비와 간격을 조절합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`labelAlign`}),`·`,(0,Q.jsx)(t.code,{children:`labelWidth`}),`는 가로 레이아웃의 레이블 열 정렬과 너비를 통일합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`FormField`}),`는 레이블과 입력 id를 연결하고 도움말보다 오류 메시지를 우선 표시합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`FormActions`}),`는 제출·취소 버튼을 세로·가로·인라인 레이아웃 규칙에 맞춰 배치합니다.`]}),`
`]}),`
`,(0,Q.jsx)(u,{examples:R,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[`Form Layout은 별도 WFrame을 불러오는 컴포넌트가 아니라 화면 XML에서 `,(0,Q.jsx)(t.code,{children:`w2:group`}),`에 `,(0,Q.jsx)(t.code,{children:`form`}),`과 배치 클래스를 적용하는 구조입니다. 각 `,(0,Q.jsx)(t.code,{children:`form_field`}),` 안에는 `,(0,Q.jsx)(t.code,{children:`tagname="label"`}),`을 사용하는 레이블 영역, `,(0,Q.jsx)(t.code,{children:`form_field-control`}),` 입력 영역, 필요한 상태 메시지를 순서대로 배치합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`레이블의 `,(0,Q.jsx)(t.code,{children:`for`}),`는 `,(0,Q.jsx)(t.code,{children:`xf:input`}),` 또는 `,(0,Q.jsx)(t.code,{children:`xf:select1`}),`의 id와 연결하고 실제 값은 `,(0,Q.jsx)(t.code,{children:`ref`}),`로 DataMap·DataList에 바인딩합니다. 시각적인 필수 표시에 더해 입력 컴포넌트의 필수 검증 설정도 함께 적용해야 합니다. 저장·검색·취소 동작은 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,Q.jsx)(t.code,{children:`ev:onclick`}),`으로 화면 스크립트와 연결합니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`세로`,children:`세로`}),`
`,(0,Q.jsxs)(t.p,{children:[`기본 레이아웃입니다. 레이블과 컨트롤을 위아래로 배치하며, `,(0,Q.jsx)(t.code,{children:`fit`}),`으로 입력 영역의 최대 너비를 제한할 수 있습니다.`]}),`
`,(0,Q.jsx)(l,{of:r,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.vertical}),`
`,(0,Q.jsx)(t.h2,{id:`가로`,children:`가로`}),`
`,(0,Q.jsx)(t.p,{children:`레이블 열과 컨트롤 열을 나란히 배치합니다. 레이블 너비와 정렬을 폼 단위로 통일할 수 있습니다.`}),`
`,(0,Q.jsx)(l,{of:n,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.horizontal}),`
`,(0,Q.jsx)(t.h2,{id:`가로--레이블-정렬너비`,children:`가로 — 레이블 정렬·너비`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`labelAlign="start"`}),`로 레이블을 왼쪽 정렬하고, `,(0,Q.jsx)(t.code,{children:`sm`}),`과 `,(0,Q.jsx)(t.code,{children:`lg`}),` 너비로 레이블 열의 시작 위치를 조절합니다.`]}),`
`,(0,Q.jsx)(l,{of:ne,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.horizontalAlign}),`
`,(0,Q.jsx)(t.h2,{id:`인라인`,children:`인라인`}),`
`,(0,Q.jsx)(t.p,{children:`검색이나 필터처럼 짧은 필드와 실행 버튼을 한 행에 배치하고, 공간이 부족하면 자연스럽게 줄바꿈합니다.`}),`
`,(0,Q.jsx)(l,{of:ie,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.inline}),`
`,(0,Q.jsx)(t.h2,{id:`그리드`,children:`그리드`}),`
`,(0,Q.jsx)(t.p,{children:`Grid 안의 필드는 자체 세로 마진을 제거하므로 여러 필드를 열 단위로 조합할 수 있습니다.`}),`
`,(0,Q.jsx)(l,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.grid}),`
`,(0,Q.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,Q.jsxs)(t.p,{children:[`기본 너비, `,(0,Q.jsx)(t.code,{children:`fit`}),`으로 제한한 너비, 가로 레이아웃의 남은 공간을 채우는 입력 너비를 비교합니다.`]}),`
`,(0,Q.jsx)(l,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.width}),`
`,(0,Q.jsx)(t.h2,{id:`액션-영역`,children:`액션 영역`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`FormActions`}),`로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열만큼 자동으로 들여씁니다.`]}),`
`,(0,Q.jsx)(l,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.actions}),`
`,(0,Q.jsx)(t.h2,{id:`전체-예시`,children:`전체 예시`}),`
`,(0,Q.jsx)(t.p,{children:`세로 레이아웃, 반응형 Grid, 컴팩트 간격, 필수 항목과 액션을 조합한 회원 정보 폼입니다.`}),`
`,(0,Q.jsx)(l,{of:te,sourceState:`none`}),`
`,(0,Q.jsx)(u,{examples:H.example}),`
`,(0,Q.jsx)(d,{sections:Y})]})}function ue(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),s(),oe(),se(),ce(),U(),X(),ae()})))()}$();export{ue as default};