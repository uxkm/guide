import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };

const fieldHtml = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const fieldReact = (id: string, label: string, control: string, message = '') => `<div className="form_field"><label className="form_field-label" htmlFor="${id}">${label}</label>${control}${message}</div>`;
const fieldVue = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const htmlCount = (id: string, options: { value?: string; max?: number; size?: string; rows?: number; error?: boolean; resize?: string } = {}) => {
  const value = options.value ?? '';
  const max = options.max ?? 200;
  const classes = ['textarea', options.size && options.size !== 'md' && `textarea_${options.size}`, options.resize && `textarea_resize_${options.resize}`, options.error && 'is-error'].filter(Boolean).join(' ');
  return `<div class="textarea_wrap textarea_show-count"><textarea id="${id}" class="${classes}" rows="${options.rows ?? 4}" maxlength="${max}" aria-describedby="${id}-count"${options.error ? ' aria-invalid="true"' : ''}>${value}</textarea><span id="${id}-count" class="textarea_count" role="status" aria-live="polite" aria-atomic="true"><span class="textarea_count_visual" aria-hidden="true">${value.length}/${max}</span><span class="textarea_count_announcer">${value.length}자 입력, 최대 ${max}자</span></span></div>`;
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
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/form/Textarea/textarea.njk · ${key}`, code: html },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/textarea · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/textarea · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/textarea · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/textarea · ${key}`, code: react }
  ];
}

export const textareaFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
