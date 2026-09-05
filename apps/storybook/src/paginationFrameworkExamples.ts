import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'minimal', 'size', 'round', 'ellipsis', 'simple', 'toolbar', 'align', 'state'] as const;
type Name = (typeof names)[number];

const icon = (direction: 'left' | 'right') => `<svg class="icon icon_sm pagination_icon" data-component="Icon" data-icon="chevron-${direction}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${direction === 'left' ? 'm15 6-6 6 6 6' : 'm9 6 6 6-6 6'}"></path></svg>`;
const htmlPagination = (current: number, total: number, pageSize: number, classes = '') => `<nav class="pagination${classes}" aria-label="페이지 이동" data-component="Pagination" data-pagination data-current="${current}" data-total="${total}" data-page-size="${pageSize}"><ul class="pagination_list" data-pagination-list><li class="pagination_item"><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev" data-pagination-prev aria-label="이전 페이지">${icon('left')}</button></li><li class="pagination_item" data-pagination-next-item><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next" data-pagination-next aria-label="다음 페이지">${icon('right')}</button></li></ul></nav>`;
const htmlSimple = (current: number, total: number, pageSize: number, classes = '') => `<nav class="pagination pagination_simple${classes}" aria-label="페이지 이동" data-component="Pagination" data-pagination data-current="${current}" data-total="${total}" data-page-size="${pageSize}"><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_prev" data-pagination-prev aria-label="이전 페이지">${icon('left')}</button><span class="pagination_simple-text" aria-live="polite"><span class="pagination_simple-current">${current}</span> / <span class="pagination_simple-total">${Math.ceil(total / pageSize)}</span></span><button type="button" class="btn btn_ghost color_default btn_sm btn_icon-only pagination_btn pagination_next" data-pagination-next aria-label="다음 페이지">${icon('right')}</button></nav>`;
const html: Record<Name, string> = {
  basic: htmlPagination(1, 50, 10), minimal: htmlPagination(4, 50, 10, ' pagination_minimal'),
  size: [htmlPagination(1, 20, 10, ' pagination_sm'), htmlPagination(1, 20, 10), htmlPagination(1, 20, 10, ' pagination_lg')].join('\n\n'),
  round: htmlPagination(7, 80, 10, ' pagination_round'), ellipsis: htmlPagination(10, 500, 10),
  simple: [htmlSimple(3, 120, 10), htmlSimple(1, 120, 10, ' pagination_minimal')].join('\n\n'),
  toolbar: `<div class="pagination_wrap"><span class="pagination_total">총 128건</span><div class="pagination_wrap-end">${htmlPagination(5, 128, 10, ' pagination_minimal')}<label class="pagination_jumper">이동<input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지">페이지</label></div></div>`,
  align: [htmlPagination(1, 20, 10), htmlPagination(1, 20, 10, ' pagination_align-center'), htmlPagination(1, 20, 10, ' pagination_align-end')].join('\n\n'),
  state: [htmlPagination(1, 30, 10), htmlPagination(10, 100, 10)].join('\n\n'),
};

const gulpImport = `{% from "components/navigation/Pagination/pagination.njk" import pagination, paginationJumper, paginationToolbar %}`;
const gulp: Record<Name, string> = {
  basic: `${gulpImport}\n\n{{ pagination(current=1, total=50, pageSize=10) }}`,
  minimal: `${gulpImport}\n\n{{ pagination(current=4, total=50, pageSize=10, minimal=true) }}`,
  size: `${gulpImport}\n\n{{ pagination(current=1, total=20, pageSize=10, size='sm') }}\n\n{{ pagination(current=1, total=20, pageSize=10) }}\n\n{{ pagination(current=1, total=20, pageSize=10, size='lg') }}`,
  round: `${gulpImport}\n\n{{ pagination(current=7, total=80, pageSize=10, round=true) }}`,
  ellipsis: `${gulpImport}\n\n{{ pagination(current=10, total=500, pageSize=10) }}`,
  simple: `${gulpImport}\n\n{{ pagination(current=3, total=120, pageSize=10, simple=true) }}\n\n{{ pagination(current=1, total=120, pageSize=10, simple=true, minimal=true) }}`,
  toolbar: `${gulpImport}

{% call paginationToolbar(totalLabel='총 128건') %}
  {{ pagination(current=5, total=128, pageSize=10, minimal=true) }}
  {{ paginationJumper(current=5, total=128, pageSize=10) }}
{% endcall %}`,
  align: `${gulpImport}\n\n{{ pagination(current=1, total=20, pageSize=10) }}\n\n{{ pagination(current=1, total=20, pageSize=10, align='center') }}\n\n{{ pagination(current=1, total=20, pageSize=10, align='end') }}`,
  state: `${gulpImport}\n\n{{ pagination(current=1, total=30, pageSize=10) }}\n\n{{ pagination(current=10, total=100, pageSize=10) }}`,
};

const react: Record<Name, string> = {
  basic: `<Pagination current={current} total={50} pageSize={10} onChange={setCurrent} />`, minimal: `<Pagination current={current} total={50} pageSize={10} minimal onChange={setCurrent} />`,
  size: `<Pagination current={small} total={20} pageSize={10} size="sm" onChange={setSmall} />\n<Pagination current={medium} total={20} pageSize={10} onChange={setMedium} />\n<Pagination current={large} total={20} pageSize={10} size="lg" onChange={setLarge} />`,
  round: `<Pagination current={current} total={80} pageSize={10} round onChange={setCurrent} />`, ellipsis: `<Pagination current={current} total={500} pageSize={10} onChange={setCurrent} />`,
  simple: `<Pagination simple current={current} total={120} pageSize={10} onChange={setCurrent} />\n<Pagination simple minimal current={minimal} total={120} pageSize={10} onChange={setMinimal} />`,
  toolbar: `<div className="pagination_wrap"><span className="pagination_total">총 128건</span><div className="pagination_wrap-end"><Pagination current={current} total={128} pageSize={10} minimal onChange={setCurrent} /><label className="pagination_jumper">이동<input type="number" className="pagination_jumper-input" value={current} min={1} max={13} aria-label="이동할 페이지" onChange={(event) => setCurrent(Math.min(13, Math.max(1, Number(event.target.value))))} />페이지</label></div></div>`,
  align: `<Pagination current={start} total={20} pageSize={10} onChange={setStart} />\n<Pagination current={center} total={20} pageSize={10} className="pagination_align-center" onChange={setCenter} />\n<Pagination current={end} total={20} pageSize={10} className="pagination_align-end" onChange={setEnd} />`,
  state: `<Pagination current={first} total={30} pageSize={10} onChange={setFirst} />\n<Pagination current={last} total={100} pageSize={10} onChange={setLast} />`,
};
const initial: Record<Name, string> = { basic: '1', minimal: '4', size: '1', round: '7', ellipsis: '10', simple: '3', toolbar: '5', align: '1', state: '1' };
const reactState = (key: Name) => key === 'size' ? `const [small, setSmall] = useState(1); const [medium, setMedium] = useState(1); const [large, setLarge] = useState(1);` : key === 'simple' ? `const [current, setCurrent] = useState(3); const [minimal, setMinimal] = useState(1);` : key === 'align' ? `const [start, setStart] = useState(1); const [center, setCenter] = useState(1); const [end, setEnd] = useState(1);` : key === 'state' ? `const [first, setFirst] = useState(1); const [last, setLast] = useState(10);` : `const [current, setCurrent] = useState(${initial[key]});`;
const vue: Record<Name, string> = {
  basic: `<Pagination v-model:current="current" :total="50" :page-size="10" />`,
  minimal: `<Pagination v-model:current="current" :total="50" :page-size="10" minimal />`,
  size: `<Pagination v-model:current="small" :total="20" :page-size="10" size="sm" />\n<Pagination v-model:current="medium" :total="20" :page-size="10" />\n<Pagination v-model:current="large" :total="20" :page-size="10" size="lg" />`,
  round: `<Pagination v-model:current="current" :total="80" :page-size="10" round />`,
  ellipsis: `<Pagination v-model:current="current" :total="500" :page-size="10" />`,
  simple: `<Pagination v-model:current="current" simple :total="120" :page-size="10" />\n<Pagination v-model:current="minimalPage" simple minimal :total="120" :page-size="10" />`,
  toolbar: `<div class="pagination_wrap"><span class="pagination_total">총 128건</span><div class="pagination_wrap-end"><Pagination v-model:current="current" :total="128" :page-size="10" minimal /><label class="pagination_jumper">이동<input v-model.number="current" type="number" class="pagination_jumper-input" min="1" max="13" aria-label="이동할 페이지" />페이지</label></div></div>`,
  align: `<Pagination v-model:current="start" :total="20" :page-size="10" />\n<Pagination v-model:current="center" :total="20" :page-size="10" class="pagination_align-center" />\n<Pagination v-model:current="end" :total="20" :page-size="10" class="pagination_align-end" />`,
  state: `<Pagination v-model:current="first" :total="30" :page-size="10" />\n<Pagination v-model:current="last" :total="100" :page-size="10" />`,
};
const vueState = (key: Name) => key === 'size' ? `const small = ref(1); const medium = ref(1); const large = ref(1);` : key === 'simple' ? `const current = ref(3); const minimalPage = ref(1);` : key === 'align' ? `const start = ref(1); const center = ref(1); const end = ref(1);` : key === 'state' ? `const first = ref(1); const last = ref(10);` : `const current = ref(${initial[key]});`;

function examples(key: Name): FrameworkExample[] {
  const reactCode = `import { useState } from 'react';\nimport Pagination from '@uxkm/react/pagination';\n\nexport function Example() { ${reactState(key)} return <>${react[key]}</>; }`;
  const vueCode = `<script setup>\nimport { ref } from 'vue';\nimport Pagination from '@uxkm/vue/pagination';\n${vueState(key)}\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Pagination.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `pagination.njk · ${key}`, code: gulp[key] }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/pagination · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/pagination · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/pagination · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/pagination · ${key}`, code: reactCode }];
}
export const paginationFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;
