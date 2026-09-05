import type { FrameworkExample } from './FrameworkCode';
type Source = { html: string; react: string; vue: string };
const field = (id: string, label: string, control: string, message = '') => `<div class="form_field"><label class="form_field-label" for="${id}">${label}</label>${control}${message}</div>`;
const reactField = (id: string, label: string, control: string, message = '') => `<div className="form_field"><label className="form_field-label" htmlFor="${id}">${label}</label>${control}${message}</div>`;
const picker = (id: string, extra = '', value = '') => `<div class="date_picker${extra}" data-component="DatePicker"${value ? ` data-value="${value}"` : ''}><div class="date_picker_trigger"><input id="${id}" class="date_picker_input" placeholder="날짜를 선택하세요" readonly aria-haspopup="dialog"><button class="date_picker_btn" type="button" aria-label="달력 열기">달력</button></div><div class="date_picker_panel" role="dialog" aria-label="날짜 선택"></div></div>`;
const sources: Record<string, Source> = {
  basic: { html: field('date-basic', '예약일', picker('date-basic', ' date_picker_fit', '2024-06-15'), '<p class="form_field-hint">달력에서 날짜를 선택해 주세요.</p>'), react: reactField('date-basic', '예약일', '<DatePicker id="date-basic" fit defaultValue="2024-06-15" />', '<p className="form_field-hint">달력에서 날짜를 선택해 주세요.</p>'), vue: field('date-basic', '예약일', '<DatePicker id="date-basic" fit model-value="2024-06-15" />', '<p class="form_field-hint">달력에서 날짜를 선택해 주세요.</p>') },
  size: { html: ['sm', 'md', 'lg'].map((size) => field(`date-${size}`, size.toUpperCase(), picker(`date-${size}`, size === 'md' ? '' : ` date_picker_${size}`, '2024-06-15'))).join('\n'), react: `<>{['sm', 'md', 'lg'].map((size) => <DatePicker key={size} size={size} defaultValue="2024-06-15" />)}</>`, vue: `<DatePicker v-for="size in ['sm', 'md', 'lg']" :key="size" :size="size" model-value="2024-06-15" />` },
  width: { html: `${field('date-full', '전체 너비', picker('date-full', ' date_picker_block', '2024-06-15'))}${field('date-fit', '제한 너비', picker('date-fit', ' date_picker_fit', '2024-06-15'))}`, react: `<><DatePicker block defaultValue="2024-06-15" /><DatePicker fit defaultValue="2024-06-15" /></>`, vue: `<DatePicker block model-value="2024-06-15" />\n<DatePicker fit model-value="2024-06-15" />` },
  limits: { html: field('date-limits', '프로모션 기간', picker('date-limits', '', '2024-06-15').replace('data-value=', 'data-min="2024-06-10" data-max="2024-06-20" data-value=')), react: reactField('date-limits', '프로모션 기간', '<DatePicker id="date-limits" defaultValue="2024-06-15" min="2024-06-10" max="2024-06-20" />'), vue: field('date-limits', '프로모션 기간', '<DatePicker id="date-limits" model-value="2024-06-15" min="2024-06-10" max="2024-06-20" />') },
  state: { html: `${field('date-disabled', '비활성', picker('date-disabled', ' is-disabled', '2024-06-15').replace('<input ', '<input disabled '))}${field('date-error', '에러', picker('date-error', ' is-error'), '<p class="form_field-error" role="alert">날짜를 선택해 주세요.</p>')}`, react: `<><DatePicker disabled defaultValue="2024-06-15" /><DatePicker error aria-describedby="date-error" /><p id="date-error" className="form_field-error" role="alert">날짜를 선택해 주세요.</p></>`, vue: `<DatePicker disabled model-value="2024-06-15" />\n<DatePicker error aria-describedby="date-error" /><p id="date-error" class="form_field-error" role="alert">날짜를 선택해 주세요.</p>` },
  example: { html: `<form class="form form_vertical form_fit">${field('visit-date', '방문일', picker('visit-date', ' is-error'), '<p class="form_field-error" role="alert">방문일을 선택해 주세요.</p>')}</form>`, react: `<DatePicker id="visit-date" name="visitDate" value={date} onChange={setDate} required error={!date} />`, vue: `<DatePicker id="visit-date" name="visitDate" v-model="date" required :error="!date" />` }
};
const datePickerImport = `{% from "components/form/DatePicker/date-picker.njk" import datePicker, datePickerField %}`;
const datePickerGulpExamples: Record<string, string> = {
  basic: `${datePickerImport}

{% set reservationPicker %}{{ datePicker(id='date-basic', value='2024-06-15', fit=true) }}{% endset %}
{{ datePickerField(id='date-basic', label='예약일', control=reservationPicker, hint='달력에서 날짜를 선택해 주세요.') }}`,
  size: `${datePickerImport}

{% for size in ['sm', 'md', 'lg'] %}
  {% set sizePicker %}{{ datePicker(id='date-' + size, value='2024-06-15', size=size) }}{% endset %}
  {{ datePickerField(id='date-' + size, label=size | upper, control=sizePicker) }}
{% endfor %}`,
  width: `${datePickerImport}

{% set blockPicker %}{{ datePicker(id='date-full', value='2024-06-15', block=true) }}{% endset %}
{{ datePickerField(id='date-full', label='전체 너비', control=blockPicker) }}
{% set fitPicker %}{{ datePicker(id='date-fit', value='2024-06-15', fit=true) }}{% endset %}
{{ datePickerField(id='date-fit', label='제한 너비', control=fitPicker) }}`,
  limits: `${datePickerImport}

{% set promotionPicker %}{{ datePicker(id='date-limits', value='2024-06-15', min='2024-06-10', max='2024-06-20') }}{% endset %}
{{ datePickerField(id='date-limits', label='프로모션 기간', control=promotionPicker) }}`,
  state: `${datePickerImport}

{% set disabledPicker %}{{ datePicker(id='date-disabled', value='2024-06-15', disabled=true) }}{% endset %}
{{ datePickerField(id='date-disabled', label='비활성', control=disabledPicker) }}
{% set errorPicker %}{{ datePicker(id='date-error', error=true, ariaDescribedby='date-error-error') }}{% endset %}
{{ datePickerField(id='date-error', label='에러', control=errorPicker, errorMessage='날짜를 선택해 주세요.') }}`,
  example: `${datePickerImport}

<form class="form form_vertical form_fit">
  {% set visitPicker %}{{ datePicker(id='visit-date', name='visitDate', required=true, error=true, ariaDescribedby='visit-date-error') }}{% endset %}
  {{ datePickerField(id='visit-date', label='방문일', control=visitPicker, required=true, errorMessage='방문일을 선택해 주세요.') }}
</form>`
};
function indent(value: string, spaces: number) { const prefix = ' '.repeat(spaces); return value.split('\n').map((line) => `${prefix}${line}`).join('\n'); }
function examples(key: string, source: Source): FrameworkExample[] {
  const stateful = key === 'example';
  const react = `${stateful ? "import { useState } from 'react';\n" : ''}import DatePicker from '@uxkm/react/date-picker';\n\nexport function Example() {${stateful ? "\n  const [date, setDate] = useState('');" : ''}\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\n${stateful ? "import { ref } from 'vue';\n" : ''}import DatePicker from '@uxkm/vue/date-picker';${stateful ? "\nconst date = ref('');" : ''}\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `DatePicker.html · ${key}`, code: source.html }, { id: 'gulp', label: 'Gulp', fileName: `date-picker.njk · ${key}`, code: datePickerGulpExamples[key] }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/date-picker · ${key}`, code: vue }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/date-picker · ${key}`, code: vue }, { id: 'react', label: 'React', fileName: `@uxkm/react/date-picker · ${key}`, code: react }, { id: 'next', label: 'Next', fileName: `@uxkm/react/date-picker · ${key}`, code: react }];
}
export const datePickerFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
