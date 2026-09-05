import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };
const trigger = (id: string, label: string) => `<button type="button" class="btn btn_filled color_primary" data-modal-trigger="#${id}" aria-controls="${id}">${label}</button>`;
const modal = (id: string, title: string, body: string, classes = '', attrs = '') => `<div id="${id}" class="modal${classes}" data-modal ${attrs} role="dialog" aria-modal="true" aria-labelledby="${id}-title" tabindex="-1" hidden>
  <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
  <div class="modal_dialog"><div class="modal_header"><h2 id="${id}-title" class="modal_title">${title}</h2><button type="button" class="modal_close" data-modal-close aria-label="닫기">×</button></div><div class="modal_body">${body}</div><div class="modal_footer"><button class="btn btn_ghost" data-modal-close>취소</button><button class="btn btn_filled color_primary" data-modal-close>확인</button></div></div>
</div>`;

const gulpImports = `{% from "components/feedback/Modal/modal.njk" import modal %}
{% from "components/basic/Button/button.njk" import button %}`;
const gulpInputImports = `{% from "components/form/Input/input.njk" import input, inputField %}`;
const gulpTrigger = (id: string, label: string) => `{{ button(
  label='${label}',
  dataAttributes={
    'data-modal-trigger': '#${id}',
    'aria-controls': '${id}',
    'aria-expanded': 'false'
  }
) }}`;
const gulpFooter = (primaryLabel = '확인') => `{% set footer %}
  {{ button(
    variant='ghost',
    color='',
    label='취소',
    dataAttributes={'data-modal-close': true}
  ) }}
  {{ button(
    label='${primaryLabel}',
    dataAttributes={'data-modal-close': true}
  ) }}
{% endset %}`;
const gulpModal = (id: string, title: string, body: string, options = '') => `{% call modal(id='${id}', title='${title}'${options}) %}
  ${body}
{% endcall %}`;

function gulpExample(key: string): string {
  switch (key) {
    case 'basic':
      return `${gulpImports}

${gulpTrigger('modal-basic', '모달 열기')}

${gulpFooter()}
${gulpModal('modal-basic', '알림', '<p>Modal 대화상자 본문입니다.</p>', ', footer=footer')}`;
    case 'open':
      return `${gulpImports}

${gulpFooter()}
${gulpModal('modal-open', '알림', '<p>로드 시 열린 상태로 표시되는 Modal입니다.</p>', ', open=true, footer=footer')}`;
    case 'size':
      return `${gulpImports}

${gulpTrigger('modal-size-sm', 'Small')}
${gulpTrigger('modal-size-lg', 'Large')}

${gulpModal('modal-size-sm', 'Small', '<p>좁은 너비</p>', ", size='sm'")}

${gulpModal('modal-size-lg', 'Large', '<p>넓은 너비</p>', ", size='lg'")}`;
    case 'footer':
      return `${gulpImports}
${gulpInputImports}

${gulpTrigger('modal-footer', '새 항목 추가')}

{% set nameInput %}
  {{ input(id='modal-footer-name', name='name') }}
{% endset %}
${gulpFooter('저장')}
{% call modal(id='modal-footer', title='새 항목 추가', footer=footer) %}
  {{ inputField(id='modal-footer-name', label='이름', control=nameInput) }}
{% endcall %}`;
    case 'footerAlign':
      return `${gulpImports}

${gulpFooter()}
${gulpModal('modal-align', '푸터 정렬', '<p>균등 정렬</p>', ", open=true, footer=footer, footerAlign='even'")}`;
    case 'confirm':
      return `${gulpImports}

${gulpTrigger('modal-confirm', '삭제')}

${gulpFooter('삭제')}
${gulpModal('modal-confirm', '항목 삭제', '<p>이 작업은 되돌릴 수 없습니다.</p>', ", size='sm', footer=footer")}`;
    case 'form':
      return `${gulpImports}
${gulpInputImports}

${gulpTrigger('modal-form', '프로필 편집')}

{% set nameInput %}
  {{ input(id='modal-form-name', name='name', value='홍길동') }}
{% endset %}
${gulpFooter('저장')}
{% call modal(id='modal-form', title='프로필 편집', footer=footer) %}
  {{ inputField(id='modal-form-name', label='이름', control=nameInput) }}
{% endcall %}`;
    case 'scroll':
      return `${gulpImports}

${gulpTrigger('modal-scroll', '이용 약관 보기')}

${gulpModal('modal-scroll', '이용 약관', '<p>긴 본문…</p>', ', scrollable=true')}`;
    case 'nested':
      return `${gulpImports}

${gulpTrigger('modal-parent', '첫 번째 Modal 열기')}

{% call modal(id='modal-parent', title='첫 번째 Modal') %}
  {{ button(
    label='두 번째 Modal 열기',
    dataAttributes={
      'data-modal-trigger': '#modal-child',
      'aria-controls': 'modal-child',
      'aria-expanded': 'false'
    }
  ) }}
{% endcall %}

${gulpModal('modal-child', '두 번째 Modal', '<p>최상위 대화상자</p>', ", size='sm', style='--modal-stack-level: 1'")}`;
    case 'noBackdrop':
      return `${gulpImports}

${gulpTrigger('modal-plain', '백드롭 없이 열기')}

${gulpModal('modal-plain', '백드롭 없음', '<p>배경을 가리지 않습니다.</p>', ", size='sm', backdrop=false")}`;
    default:
      return gulpImports;
  }
}

const sources: Record<string, Source> = {
  basic: { html: `${trigger('modal-basic', '모달 열기')}\n${modal('modal-basic', '알림', '<p>Modal 대화상자 본문입니다.</p>')}`, react: `<><Button label="모달 열기" onClick={() => setOpen(true)} /><Modal open={open} title="알림" onClose={() => setOpen(false)}><p>Modal 대화상자 본문입니다.</p></Modal></>`, vue: `<Button label="모달 열기" @click="open = true" /><Modal :open="open" title="알림" @close="open = false"><p>Modal 대화상자 본문입니다.</p></Modal>` },
  open: { html: modal('modal-open', '알림', '<p>로드 시 열린 상태로 표시되는 Modal입니다.</p>', ' is-open').replace(' hidden', ''), react: '<Modal open={open} title="알림" onClose={() => setOpen(false)} footer={<><Button variant="ghost" label="취소" /><Button label="확인" /></>}><p>로드 시 열린 상태로 표시되는 Modal입니다.</p></Modal>', vue: '<Modal :open="open" title="알림" @close="open = false"><p>로드 시 열린 상태로 표시되는 Modal입니다.</p><template #footer><Button variant="ghost" label="취소" /><Button label="확인" /></template></Modal>' },
  size: { html: `${trigger('modal-size-sm', 'Small')}\n${trigger('modal-size-lg', 'Large')}\n${modal('modal-size-sm', 'Small', '<p>좁은 너비</p>', ' modal_sm')}\n${modal('modal-size-lg', 'Large', '<p>넓은 너비</p>', ' modal_lg')}`, react: `<><Button label="Small" onClick={() => setSize('sm')} /><Button label="Large" onClick={() => setSize('lg')} /><Modal open={Boolean(size)} size={size} title="크기" onClose={() => setSize(null)} /></>`, vue: `<Button label="Small" @click="size = 'sm'" /><Button label="Large" @click="size = 'lg'" /><Modal :open="Boolean(size)" :size="size" title="크기" @close="size = null" />` },
  footer: { html: `${trigger('modal-footer', '새 항목 추가')}\n${modal('modal-footer', '새 항목 추가', '<label>이름 <input class="input"></label>')}`, react: '<Modal open={open} title="새 항목 추가" footer={<><Button variant="ghost" label="취소" /><Button label="저장" /></>}><Input label="이름" /></Modal>', vue: '<Modal :open="open" title="새 항목 추가"><Input label="이름" /><template #footer><Button variant="ghost" label="취소" /><Button label="저장" /></template></Modal>' },
  footerAlign: { html: modal('modal-align', '푸터 정렬', '<p>균등 정렬</p>').replace('modal_footer"', 'modal_footer modal_footer-even"'), react: '<Modal open footerAlign="even" footer={<><Button label="취소" /><Button label="확인" /></>} />', vue: '<Modal open footer-align="even"><template #footer><Button label="취소" /><Button label="확인" /></template></Modal>' },
  confirm: { html: `${trigger('modal-confirm', '삭제')}\n${modal('modal-confirm', '항목 삭제', '<p>이 작업은 되돌릴 수 없습니다.</p>', ' modal_sm')}`, react: '<Modal open={open} size="sm" title="항목 삭제" onClose={() => setOpen(false)}><p>이 작업은 되돌릴 수 없습니다.</p></Modal>', vue: '<Modal :open="open" size="sm" title="항목 삭제" @close="open = false"><p>이 작업은 되돌릴 수 없습니다.</p></Modal>' },
  form: { html: `${trigger('modal-form', '프로필 편집')}\n${modal('modal-form', '프로필 편집', '<label>이름 <input class="input" value="홍길동"></label>')}`, react: '<Modal open={open} title="프로필 편집"><Input label="이름" defaultValue="홍길동" /></Modal>', vue: '<Modal :open="open" title="프로필 편집"><Input label="이름" model-value="홍길동" /></Modal>' },
  scroll: { html: `${trigger('modal-scroll', '이용 약관 보기')}\n${modal('modal-scroll', '이용 약관', '<p>긴 본문…</p>', ' modal_scrollable')}`, react: '<Modal open={open} scrollable title="이용 약관"><p>긴 본문…</p></Modal>', vue: '<Modal :open="open" scrollable title="이용 약관"><p>긴 본문…</p></Modal>' },
  nested: { html: `${trigger('modal-parent', '첫 번째 Modal 열기')}\n${modal('modal-parent', '첫 번째 Modal', '<button data-modal-trigger="#modal-child">두 번째 Modal 열기</button>')}\n${modal('modal-child', '두 번째 Modal', '<p>최상위 대화상자</p>', ' modal_sm', 'style="--modal-stack-level: 1"')}`, react: '<><Modal open={parentOpen} title="첫 번째 Modal"><Button label="두 번째 Modal 열기" onClick={() => setChildOpen(true)} /></Modal><Modal open={childOpen} size="sm" title="두 번째 Modal" onClose={() => setChildOpen(false)} /></>', vue: '<Modal :open="parentOpen" title="첫 번째 Modal"><Button label="두 번째 Modal 열기" @click="childOpen = true" /></Modal><Modal :open="childOpen" size="sm" title="두 번째 Modal" @close="childOpen = false" />' },
  noBackdrop: { html: `${trigger('modal-plain', '백드롭 없이 열기')}\n${modal('modal-plain', '백드롭 없음', '<p>배경을 가리지 않습니다.</p>', ' modal_sm', 'data-modal-backdrop="false"')}`, react: '<Modal open={open} backdrop={false} size="sm" title="백드롭 없음" onClose={() => setOpen(false)} />', vue: '<Modal :open="open" :backdrop="false" size="sm" title="백드롭 없음" @close="open = false" />' },
};

const indent = (value: string, spaces: number) => value.split('\n').map((line) => `${' '.repeat(spaces)}${line}`).join('\n');
function examples(key: string, source: Source): FrameworkExample[] {
  const usesInput = key === 'footer' || key === 'form';
  const reactState = key === 'size' ? '  const [size, setSize] = useState(null);' : key === 'nested' ? '  const [parentOpen, setParentOpen] = useState(false);\n  const [childOpen, setChildOpen] = useState(false);' : `  const [open, setOpen] = useState(${key === 'open' ? 'true' : 'false'});`;
  const vueState = key === 'size' ? "const size = ref(null);" : key === 'nested' ? 'const parentOpen = ref(false);\nconst childOpen = ref(false);' : `const open = ref(${key === 'open' ? 'true' : 'false'});`;
  const react = `import { useState } from 'react';\nimport Modal from '@uxkm/react/modal';\nimport Button from '@uxkm/react/button';${usesInput ? "\nimport Input from '@uxkm/react/input';" : ''}\n\nexport function Example() {\n${reactState}\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\nimport { ref } from 'vue';\nimport Modal from '@uxkm/vue/modal';\nimport Button from '@uxkm/vue/button';${usesInput ? "\nimport Input from '@uxkm/vue/input';" : ''}\n${vueState}\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `Modal.html · ${key}`, code: source.html },
    { id: 'gulp', label: 'Gulp', fileName: `modal.njk · ${key}`, code: gulpExample(key) },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/modal · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/modal · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/modal · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/modal · ${key}`, code: react },
  ];
}
export const modalFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, examples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
