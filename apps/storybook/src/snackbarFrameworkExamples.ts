import type { FrameworkExample } from './FrameworkCode';

type Source = { html: string; react: string; vue: string };

const sources: Record<string, Source> = {
  basic: {
    html: `<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">새로운 업데이트가 있습니다.</span></div>
<div class="snackbar color_success snackbar_motion-none is-open" role="status"><span class="snackbar_message">변경 사항을 저장했습니다.</span></div>
<div class="snackbar color_warning snackbar_motion-none is-open" role="status"><span class="snackbar_message">세션이 곧 만료됩니다.</span></div>
<div class="snackbar color_error snackbar_motion-none is-open" role="alert"><span class="snackbar_message">저장하지 못했습니다.</span></div>`,
    react: `<><Snackbar color="info" message="새로운 업데이트가 있습니다." /><Snackbar color="success" message="변경 사항을 저장했습니다." /><Snackbar color="warning" message="세션이 곧 만료됩니다." /><Snackbar color="danger" role="alert" message="저장하지 못했습니다." /></>`,
    vue: `<Snackbar color="info" message="새로운 업데이트가 있습니다." />
<Snackbar color="success" message="변경 사항을 저장했습니다." />
<Snackbar color="warning" message="세션이 곧 만료됩니다." />
<Snackbar color="danger" role="alert" message="저장하지 못했습니다." />`,
  },
  simple: {
    html: '<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">인터넷 연결이 복구되었습니다.</span></div>',
    react: '<Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>',
    vue: '<Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>',
  },
  shape: {
    html: `<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">기본 스퀘어 라운드</span></div>
<div class="snackbar snackbar_round color_success snackbar_motion-none is-open" role="status"><span class="snackbar_message">비율형 캡슐 라운드</span></div>`,
    react: `<><Snackbar message="기본 스퀘어 라운드" /><Snackbar round color="success" message="비율형 캡슐 라운드" /></>`,
    vue: `<Snackbar message="기본 스퀘어 라운드" />
<Snackbar round color="success" message="비율형 캡슐 라운드" />`,
  },
  motion: {
    html: `<div class="snackbar color_info snackbar_motion-fade is-open" role="status"><span class="snackbar_message">Fade 효과</span></div>
<div class="snackbar color_success snackbar_motion-slide snackbar_placement-middle-end is-open" role="status"><span class="snackbar_message">우측 Slide 효과</span></div>
<div class="snackbar color_warning snackbar_motion-none is-open" role="status"><span class="snackbar_message">전환 효과 없음</span></div>`,
    react: `<><Snackbar motion="fade" message="Fade 효과" /><Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" /><Snackbar motion="none" message="전환 효과 없음" /></>`,
    vue: `<Snackbar motion="fade" message="Fade 효과" />
<Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
<Snackbar motion="none" message="전환 효과 없음" />`,
  },
  size: {
    html: `<div class="snackbar snackbar_sm color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">Small Snackbar</span></div>
<div class="snackbar color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">Medium Snackbar</span></div>
<div class="snackbar snackbar_lg color_info snackbar_motion-none is-open" role="status"><span class="snackbar_message">Large Snackbar</span></div>`,
    react: `<><Snackbar size="sm" message="Small Snackbar" /><Snackbar message="Medium Snackbar" /><Snackbar size="lg" message="Large Snackbar" /></>`,
    vue: `<Snackbar size="sm" message="Small Snackbar" />
<Snackbar message="Medium Snackbar" />
<Snackbar size="lg" message="Large Snackbar" />`,
  },
  action: {
    html: '<div class="snackbar color_success snackbar_motion-none is-open" role="status"><span class="snackbar_message">항목을 삭제했습니다.</span><span class="snackbar_action"><button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">실행 취소</span></button></span></div>',
    react: '<Snackbar color="success" message="항목을 삭제했습니다." action={({ close }) => <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />} />',
    vue: `<Snackbar color="success" message="항목을 삭제했습니다.">
  <template #action="{ close }"><Button variant="ghost" size="sm" label="실행 취소" @click="close" /></template>
</Snackbar>`,
  },
  closable: {
    html: '<div class="snackbar color_warning snackbar_motion-none is-open" role="status"><span class="snackbar_message">브라우저를 최신 버전으로 업데이트해 주세요.</span><button type="button" class="btn btn_ghost btn_icon-only snackbar_close" data-snackbar-close aria-label="알림 닫기">×</button></div>',
    react: '<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." onClose={(reason) => console.log(reason)} />',
    vue: '<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." @close="console.log" />',
  },
  duration: {
    html: '<div class="snackbar color_success snackbar_motion-fade" role="status" data-snackbar-duration="4000"><span class="snackbar_message">4초 후 자동으로 닫힙니다.</span></div>',
    react: '<Snackbar duration={4000} color="success" message="4초 후 자동으로 닫힙니다." />',
    vue: '<Snackbar :duration="4000" color="success" message="4초 후 자동으로 닫힙니다." />',
  },
  placement: {
    html: `<button type="button" class="btn btn_filled" data-snackbar-trigger="#saved-snackbar">Snackbar 호출</button>
<div class="snackbar_region snackbar_region-bottom-center"><div id="saved-snackbar" class="snackbar color_success snackbar_motion-slide snackbar_placement-bottom-center" role="status"><span class="snackbar_message">변경 사항을 저장했습니다.</span></div></div>`,
    react: `<SnackbarRegion placement="bottom-center"><Snackbar motion="slide" closable message="변경 사항을 저장했습니다." /></SnackbarRegion>`,
    vue: `<SnackbarRegion placement="bottom-center"><Snackbar motion="slide" closable message="변경 사항을 저장했습니다." /></SnackbarRegion>`,
  },
};

const indent = (value: string, spaces: number) => value.split('\n').map((line) => `${' '.repeat(spaces)}${line}`).join('\n');

function createExamples(key: string, source: Source): FrameworkExample[] {
  const needsButton = key === 'action';
  const needsRegion = key === 'placement';
  const reactImports = ["import Snackbar from '@uxkm/react/snackbar';", needsButton && "import Button from '@uxkm/react/button';", needsRegion && "import SnackbarRegion from '@uxkm/react/snackbar-region';"].filter(Boolean).join('\n');
  const vueImports = ["import Snackbar from '@uxkm/vue/snackbar';", needsButton && "import Button from '@uxkm/vue/button';", needsRegion && "import SnackbarRegion from '@uxkm/vue/snackbar-region';"].filter(Boolean).join('\n');
  const react = `${reactImports}\n\nexport function Example() {\n  return (\n${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}\n  );\n}`;
  const vue = `<script setup>\n${vueImports}\n</script>\n\n<template>\n${indent(source.vue, 2)}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `Snackbar.html · ${key}`, code: source.html },
    { id: 'gulp', label: 'Gulp', fileName: `snackbar.njk · ${key}`, code: source.html },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/snackbar · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/snackbar · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/snackbar · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/snackbar · ${key}`, code: react },
  ];
}

export const snackbarFrameworkExamples = Object.fromEntries(Object.entries(sources).map(([key, source]) => [key, createExamples(key, source)])) as Record<keyof typeof sources, FrameworkExample[]>;
