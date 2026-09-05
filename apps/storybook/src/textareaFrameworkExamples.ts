import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };

const closeIconHtml = `<svg class="icon" data-component="Icon" data-icon="close" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"></path></svg>`;
const textareaImport = `{% from "components/form/Textarea/textarea.njk" import textarea, textareaField %}`;
const fieldHtml = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const fieldReact = (id: string, label: string, control: string, message = '') => `<div className="form_field"><label className="form_field-label" htmlFor="${id}">${label}</label>${control}${message}</div>`;
const fieldVue = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const htmlCount = (id: string, options: { value?: string; max?: number; size?: string; rows?: number; error?: boolean; resize?: string } = {}) => {
  const value = options.value ?? '';
  const max = options.max ?? 200;
  const classes = ['textarea', options.size && options.size !== 'md' && `textarea_${options.size}`, options.resize && `textarea_resize_${options.resize}`, options.error && 'is-error'].filter(Boolean).join(' ');
  return `<div class="textarea_wrap textarea_show-count"><textarea id="${id}" class="${classes}" rows="${options.rows ?? 4}" maxlength="${max}" aria-describedby="${id}-count"${options.error ? ' aria-invalid="true"' : ''}>${value}</textarea><span id="${id}-count" class="textarea_count" role="status" aria-live="polite" aria-atomic="true"><span class="textarea_count_visual" aria-hidden="true">${value.length}/${max}</span><span class="textarea_count_announcer">${value.length}자 입력, 최대 ${max}자</span></span></div>`;
};

const textareaGulpExamples: Record<string, string> = {
  basic: `{% set control %}{{ textarea(id='textarea-message', rows=4, placeholder='메시지를 입력하세요') }}{% endset %}
{{ textareaField(id='textarea-message', label='메시지', control=control, hint='문의 내용을 자세히 작성해 주세요.') }}`,
  standalone: `{% set note %}{{ textarea(id='textarea-note', rows=3, placeholder='메모를 입력하세요') }}{% endset %}
{{ textareaField(id='textarea-note', label='메모', control=note, fit=true) }}

{% set request %}{{ textarea(id='textarea-request', rows=3, placeholder='추가 요청사항') }}{% endset %}
{{ textareaField(id='textarea-request', ariaLabel='추가 요청사항', control=request) }}`,
  size: `{% set sizes = ['sm', 'md', 'lg'] %}
{% for size in sizes %}
  {% set id = 'textarea-' + size %}
  {% set control %}{{ textarea(id=id, size=size, rows=3) }}{% endset %}
  {{ textareaField(id=id, label=size | upper, control=control) }}
{% endfor %}`,
  width: `{% set full %}{{ textarea(id='textarea-full', rows=3) }}{% endset %}
{{ textareaField(id='textarea-full', label='전체 너비', control=full) }}

{% set limited %}{{ textarea(id='textarea-fit', rows=3, fit=true) }}{% endset %}
{{ textareaField(id='textarea-fit', label='제한 너비', control=limited, fit=true) }}`,
  resize: `{% set directions = ['none', 'vertical', 'horizontal', 'both'] %}
{% for direction in directions %}
  {% set id = 'textarea-resize-' + direction %}
  {% set control %}{{ textarea(id=id, resize=direction, rows=3) }}{% endset %}
  {{ textareaField(id=id, label=direction, control=control) }}
{% endfor %}`,
  required: `{% set control %}{{ textarea(id='textarea-required', rows=4, required=true) }}{% endset %}
{{ textareaField(
  id='textarea-required',
  label='문의 내용',
  control=control,
  required=true,
  fit=true,
  hint='답변에 필요한 내용을 작성해 주세요.'
) }}`,
  state: `{% set states = [
  { id: 'textarea-disabled', label: '비활성', value: '수정할 수 없음', disabled: true, readonly: false, error: false, message: '' },
  { id: 'textarea-readonly', label: '읽기 전용', value: '읽기만 가능', disabled: false, readonly: true, error: false, message: '' },
  { id: 'textarea-error', label: '에러', value: '너무 짧은 내용', disabled: false, readonly: false, error: true, message: '10자 이상 입력해 주세요.' }
] %}
{% for state in states %}
  {% set control %}{{ textarea(id=state.id, rows=3, value=state.value, disabled=state.disabled, readonly=state.readonly, error=state.error, ariaDescribedby=state.id + '-error' if state.error else '') }}{% endset %}
  {{ textareaField(id=state.id, label=state.label, control=control, errorMessage=state.message) }}
{% endfor %}`,
  count: `{% set control %}{{ textarea(id='textarea-count', rows=5, maxLength=200, showCount=true, ariaDescribedby='textarea-count-hint') }}{% endset %}
{{ textareaField(id='textarea-count', label='자기소개', control=control, hint='200자 이내로 작성해 주세요.') }}`,
  clearable: `{% set fields = [
  { id: 'textarea-clear', label: '메모', value: '지울 수 있는 내용', rows: 4, maxLength: '', showCount: false, readonly: false },
  { id: 'textarea-clear-count', label: '자기소개', value: '글자 수와 지우기를 함께 사용합니다.', rows: 4, maxLength: 200, showCount: true, readonly: false },
  { id: 'textarea-clear-readonly', label: '읽기 전용', value: '수정 불가', rows: 3, maxLength: '', showCount: false, readonly: true }
] %}
{% for field in fields %}
  {% set control %}{{ textarea(id=field.id, rows=field.rows, value=field.value, maxLength=field.maxLength, showCount=field.showCount, clearable=true, readonly=field.readonly) }}{% endset %}
  {{ textareaField(id=field.id, label=field.label, control=control) }}
{% endfor %}`,
  example: `{% from "components/basic/Button/button.njk" import button %}
<form class="form form_vertical form_fit form_compact">
  {% set review %}{{ textarea(id='review', rows=6, value='좋아요', maxLength=300, showCount=true, error=true, required=true, ariaDescribedby='review-error') }}{% endset %}
  {{ textareaField(id='review', label='후기', control=review, errorMessage='후기를 10자 이상 작성해 주세요.') }}
  <div class="form_actions">
    {{ button(type='submit', variant='filled', color='primary', label='등록') }}
    {{ button(variant='ghost', label='취소') }}
  </div>
</form>`
};
const htmlClearable = (id: string, options: { value?: string; max?: number; rows?: number; inactive?: boolean } = {}) => {
  const value = options.value ?? '';
  const filled = value && !options.inactive ? ' is-filled' : '';
  const max = options.max;
  const count = max != null
    ? `<span id="${id}-count" class="textarea_count" role="status" aria-live="polite" aria-atomic="true"><span class="textarea_count_visual" aria-hidden="true">${value.length}/${max}</span><span class="textarea_count_announcer">${value.length}자 입력, 최대 ${max}자</span></span>`
    : '';
  const wrap = ['textarea_wrap', 'textarea_clearable', max != null && 'textarea_show-count', filled].filter(Boolean).join(' ');
  const described = max != null ? ` aria-describedby="${id}-count"` : '';
  const hidden = value && !options.inactive ? '' : ' hidden';
  return `<div class="${wrap}"><textarea id="${id}" class="textarea" rows="${options.rows ?? 4}"${max != null ? ` maxlength="${max}"` : ''}${described}${options.inactive ? ' readonly' : ''}>${value}</textarea><button type="button" class="textarea_clear" data-ripple="surface" aria-label="입력 지우기"${hidden}>${closeIconHtml}</button>${count}</div>`;
};

const sources: Record<string, Source> = {
  basic: {
    html: fieldHtml('textarea-message', '메시지', '<textarea id="textarea-message" class="textarea textarea_resize_none" rows="4" placeholder="메시지를 입력하세요"></textarea>', '<p class="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>'),
    react: fieldReact('textarea-message', '메시지', '<Textarea id="textarea-message" rows={4} placeholder="메시지를 입력하세요" />', '<p className="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>'),
    vue: fieldVue('textarea-message', '메시지', '<Textarea id="textarea-message" :rows="4" placeholder="메시지를 입력하세요" />', '<p class="form_field-hint">문의 내용을 자세히 작성해 주세요.</p>')
  },
  standalone: {
    html: `<div class="input_field input_field_fit"><label class="form_field-label" for="textarea-note">메모</label><textarea id="textarea-note" class="textarea" rows="3" placeholder="메모를 입력하세요"></textarea></div>
<label class="display_contents"><span class="input_group-label_hidden">추가 요청사항</span><textarea class="textarea" rows="3" placeholder="추가 요청사항"></textarea></label>`,
    react: `<><div className="input_field input_field_fit"><label className="form_field-label" htmlFor="textarea-note">메모</label><Textarea id="textarea-note" rows={3} placeholder="메모를 입력하세요" /></div><ImplicitTextarea label="추가 요청사항" rows={3} placeholder="추가 요청사항" /></>`,
    vue: `<div class="input_field input_field_fit"><label class="form_field-label" for="textarea-note">메모</label><Textarea id="textarea-note" :rows="3" placeholder="메모를 입력하세요" /></div>
<label class="display_contents"><span class="input_group-label_hidden">추가 요청사항</span><Textarea :rows="3" placeholder="추가 요청사항" /></label>`
  },
  size: {
    html: ['sm', 'md', 'lg'].map((size) => fieldHtml(`textarea-${size}`, size.toUpperCase(), `<textarea id="textarea-${size}" class="textarea${size === 'md' ? '' : ` textarea_${size}`}" rows="3"></textarea>`)).join('\n'),
    react: `<>{['sm', 'md', 'lg'].map((size) => <div className="form_field" key={size}><label className="form_field-label" htmlFor={\`textarea-\${size}\`}>{size.toUpperCase()}</label><Textarea id={\`textarea-\${size}\`} size={size} rows={3} /></div>)}</>`,
    vue: `<div v-for="size in ['sm', 'md', 'lg']" :key="size" class="form_field"><label class="form_field-label" :for="\`textarea-\${size}\`">{{ size.toUpperCase() }}</label><Textarea :id="\`textarea-\${size}\`" :size="size" :rows="3" /></div>`
  },
  width: {
    html: `${fieldHtml('textarea-full', '전체 너비', '<textarea id="textarea-full" class="textarea" rows="3"></textarea>')}<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-fit">제한 너비</label><textarea id="textarea-fit" class="textarea" rows="3"></textarea></div>`,
    react: `<>
  ${fieldReact('textarea-full', '전체 너비', '<Textarea id="textarea-full" rows={3} />')}
  <div className="form_field form_field_fit"><label className="form_field-label" htmlFor="textarea-fit">제한 너비</label><Textarea id="textarea-fit" rows={3} /></div>
</>`,
    vue: `${fieldVue('textarea-full', '전체 너비', '<Textarea id="textarea-full" :rows="3" />')}<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-fit">제한 너비</label><Textarea id="textarea-fit" :rows="3" /></div>`
  },
  resize: {
    html: ['none', 'vertical', 'horizontal', 'both'].map((resize) => fieldHtml(`textarea-resize-${resize}`, resize, `<textarea id="textarea-resize-${resize}" class="textarea textarea_resize_${resize}" rows="3"></textarea>`)).join('\n'),
    react: `<>{['none', 'vertical', 'horizontal', 'both'].map((resize) => <div className="form_field" key={resize}><label className="form_field-label" htmlFor={\`textarea-resize-\${resize}\`}>{resize}</label><Textarea id={\`textarea-resize-\${resize}\`} resize={resize} rows={3} /></div>)}</>`,
    vue: `<div v-for="resize in ['none', 'vertical', 'horizontal', 'both']" :key="resize" class="form_field"><label class="form_field-label" :for="\`textarea-resize-\${resize}\`">{{ resize }}</label><Textarea :id="\`textarea-resize-\${resize}\`" :resize="resize" :rows="3" /></div>`
  },
  required: {
    html: `<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-required">문의 내용<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><textarea id="textarea-required" class="textarea" rows="4" required aria-required="true"></textarea><p class="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div>`,
    react: `<div className="form_field form_field_fit"><label className="form_field-label" htmlFor="textarea-required">문의 내용<span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span></label><Textarea id="textarea-required" rows={4} required aria-required="true" /><p className="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div>`,
    vue: `<div class="form_field form_field_fit"><label class="form_field-label" for="textarea-required">문의 내용<span class="form_field-required"><span aria-hidden="true">*</span><span class="form_field-required-text">필수 항목</span></span></label><Textarea id="textarea-required" :rows="4" required aria-required="true" /><p class="form_field-hint">답변에 필요한 내용을 작성해 주세요.</p></div>`
  },
  state: {
    html: `${fieldHtml('textarea-disabled', '비활성', '<textarea id="textarea-disabled" class="textarea" rows="3" disabled>수정할 수 없음</textarea>')}${fieldHtml('textarea-readonly', '읽기 전용', '<textarea id="textarea-readonly" class="textarea" rows="3" readonly>읽기만 가능</textarea>')}${fieldHtml('textarea-error', '에러', '<textarea id="textarea-error" class="textarea is-error" rows="3" aria-invalid="true" aria-describedby="textarea-error-message">너무 짧은 내용</textarea>', '<p id="textarea-error-message" class="form_field-error" role="alert">10자 이상 입력해 주세요.</p>')}`,
    react: `<>
  ${fieldReact('textarea-disabled', '비활성', '<Textarea id="textarea-disabled" rows={3} defaultValue="수정할 수 없음" disabled />')}
  ${fieldReact('textarea-readonly', '읽기 전용', '<Textarea id="textarea-readonly" rows={3} defaultValue="읽기만 가능" readOnly />')}
  ${fieldReact('textarea-error', '에러', '<Textarea id="textarea-error" rows={3} error defaultValue="너무 짧은 내용" aria-describedby="textarea-error-message" />', '<p id="textarea-error-message" className="form_field-error" role="alert">10자 이상 입력해 주세요.</p>')}
</>`,
    vue: `${fieldVue('textarea-disabled', '비활성', '<Textarea id="textarea-disabled" :rows="3" model-value="수정할 수 없음" disabled />')}${fieldVue('textarea-readonly', '읽기 전용', '<Textarea id="textarea-readonly" :rows="3" model-value="읽기만 가능" readonly />')}${fieldVue('textarea-error', '에러', '<Textarea id="textarea-error" :rows="3" error model-value="너무 짧은 내용" aria-describedby="textarea-error-message" />', '<p id="textarea-error-message" class="form_field-error" role="alert">10자 이상 입력해 주세요.</p>')}`
  },
  count: {
    html: fieldHtml('textarea-count', '자기소개', htmlCount('textarea-count', { rows: 5 }), '<p class="form_field-hint">200자 이내로 작성해 주세요.</p>'),
    react: fieldReact('textarea-count', '자기소개', '<Textarea id="textarea-count" rows={5} maxLength={200} showCount />', '<p className="form_field-hint">200자 이내로 작성해 주세요.</p>'),
    vue: fieldVue('textarea-count', '자기소개', '<Textarea id="textarea-count" :rows="5" :max-length="200" show-count />', '<p class="form_field-hint">200자 이내로 작성해 주세요.</p>')
  },
  clearable: {
    html: `${fieldHtml('textarea-clear', '메모', htmlClearable('textarea-clear', { value: '지울 수 있는 내용' }))}${fieldHtml('textarea-clear-count', '자기소개', htmlClearable('textarea-clear-count', { value: '글자 수와 지우기를 함께 사용합니다.', max: 200 }))}${fieldHtml('textarea-clear-readonly', '읽기 전용', htmlClearable('textarea-clear-readonly', { value: '수정 불가', inactive: true, rows: 3 }))}`,
    react: `<>
  ${fieldReact('textarea-clear', '메모', '<Textarea id="textarea-clear" rows={4} clearable defaultValue="지울 수 있는 내용" />')}
  ${fieldReact('textarea-clear-count', '자기소개', '<Textarea id="textarea-clear-count" rows={4} clearable showCount maxLength={200} defaultValue="글자 수와 지우기를 함께 사용합니다." />')}
  ${fieldReact('textarea-clear-readonly', '읽기 전용', '<Textarea id="textarea-clear-readonly" rows={3} clearable readOnly defaultValue="수정 불가" />')}
</>`,
    vue: `${fieldVue('textarea-clear', '메모', '<Textarea id="textarea-clear" :rows="4" clearable model-value="지울 수 있는 내용" />')}${fieldVue('textarea-clear-count', '자기소개', '<Textarea id="textarea-clear-count" :rows="4" clearable show-count :max-length="200" model-value="글자 수와 지우기를 함께 사용합니다." />')}${fieldVue('textarea-clear-readonly', '읽기 전용', '<Textarea id="textarea-clear-readonly" :rows="3" clearable model-value="수정 불가" readonly />')}`
  },
  example: {
    html: `<form class="form form_vertical form_fit form_compact">${fieldHtml('review', '후기', htmlCount('review', { value: '좋아요', max: 300, rows: 6, error: true }).replace('aria-describedby="review-count"', 'aria-describedby="review-error review-count"'), '<p id="review-error" class="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p>')}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">등록</span></button><button class="btn btn_ghost" type="button"><span class="btn_label">취소</span></button></div></form>`,
    react: `<form className="form form_vertical form_fit form_compact" onSubmit={(event) => event.preventDefault()}>${fieldReact('review', '후기', '<Textarea id="review" rows={6} showCount maxLength={300} error defaultValue="좋아요" required aria-describedby="review-error" />', '<p id="review-error" className="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p>')}<div className="form_actions"><button className="btn btn_filled color_primary" type="submit"><span className="btn_label">등록</span></button></div></form>`,
    vue: `<form class="form form_vertical form_fit form_compact" @submit.prevent>${fieldVue('review', '후기', '<Textarea id="review" :rows="6" show-count :max-length="300" error model-value="좋아요" required aria-describedby="review-error" />', '<p id="review-error" class="form_field-error" role="alert">후기를 10자 이상 작성해 주세요.</p>')}<div class="form_actions"><button class="btn btn_filled color_primary" type="submit"><span class="btn_label">등록</span></button></div></form>`
  }
};

function indent(value: string, spaces: number) { const prefix = ' '.repeat(spaces); return value.split('\n').map((line) => `${prefix}${line}`).join('\n'); }
function examples(key: string, source: Source): FrameworkExample[] {
  const usesImplicitTextarea = source.react.includes('<ImplicitTextarea');
  const implicitTextareaHelper = `function ImplicitTextarea({ label, ...props }) {\n  return <label className="display_contents"><span className="input_group-label_hidden">{label}</span><Textarea {...props} /></label>;\n}`;
  const react = `import Textarea from '@uxkm/react/textarea';${usesImplicitTextarea ? `\n\n${implicitTextareaHelper}` : ''}\n\nexport function Example() {\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\nimport Textarea from '@uxkm/vue/textarea';\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  const html = source.html.replace(/<textarea(?![^>]*data-component=)/g, '<textarea data-component="Textarea"');
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/form/Textarea/Textarea.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/form/Textarea/textarea.njk · ${key}`, code: `${textareaImport}\n\n${textareaGulpExamples[key]}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/textarea · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/textarea · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/textarea · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/textarea · ${key}`, code: react }
  ];
}

export const textareaFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
