import type { FrameworkExample } from './FrameworkCode';

type Source = {
  html: string;
  react: string;
  vue: string;
};

type AlertMarkupOptions = {
  color?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  description: string;
  size?: 'sm' | 'md' | 'lg';
  banner?: boolean;
  closable?: boolean;
  showIcon?: boolean;
  role?: 'alert' | 'status';
  actions?: string;
};

const iconContents = {
  info: `    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4M12 8h.01"></path>`,
  success: `    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="M22 4 12 14.01l-3-3"></path>`,
  warning: `    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <path d="M12 9v4M12 17h.01"></path>`,
  danger: `    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6M9 9l6 6"></path>`,
};

function alertMarkup({
  color = 'info',
  title,
  description,
  size = 'md',
  banner = false,
  closable = false,
  showIcon = true,
  role = 'alert',
  actions,
}: AlertMarkupOptions) {
  const colorClass = color === 'danger' ? 'color_error' : `color_${color}`;
  const sizeClass = size === 'md' ? '' : ` alert_${size}`;
  const bannerClass = banner ? ' alert_banner' : '';
  const titleMarkup = title ? `\n    <div class="alert_title">${title}</div>` : '';
  const actionsMarkup = actions
    ? `\n    <div class="alert_actions">\n      ${actions}\n    </div>`
    : '';
  const closeMarkup = closable
    ? `
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
  </button>`
    : '';

  const iconMarkup = showIcon ? `
  <svg
    class="alert_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
${iconContents[color]}
  </svg>` : '';

  return `<div class="alert ${colorClass}${sizeClass}${bannerClass}" data-component="Alert" role="${role}">${iconMarkup}
  <div class="alert_body">${titleMarkup}
    <p class="alert_desc">${description}</p>${actionsMarkup}
  </div>${closeMarkup}
</div>`;
}

const sources: Record<string, Source> = {
  basic: {
    html: [
      alertMarkup({ color: 'info', title: '정보', description: '변경 사항이 저장되었습니다.' }),
      alertMarkup({ color: 'success', title: '성공', description: '요청이 성공적으로 처리되었습니다.' }),
      alertMarkup({ color: 'warning', title: '주의', description: '세션이 곧 만료됩니다. 저장해 주세요.' }),
      alertMarkup({ color: 'danger', title: '오류', description: '네트워크 연결을 확인해 주세요.' }),
    ].join('\n\n'),
    react: `<>
  <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
  <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
  <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
  <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
</>`,
    vue: `<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
<Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
<Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
<Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />`,
  },
  descriptionOnly: {
    html: [
      alertMarkup({ description: '새 기능이 추가되었습니다. 설정에서 확인해 보세요.' }),
      alertMarkup({ color: 'success', description: '프로필이 업데이트되었습니다.', role: 'status' }),
    ].join('\n\n'),
    react: `<>
  <Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
  <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
</>`,
    vue: `<Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
<Alert color="success" role="status" description="프로필이 업데이트되었습니다." />`,
  },
  noIcon: {
    html: [
      alertMarkup({ showIcon: false, color: 'warning', title: '점검 안내', description: '오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.' }),
      alertMarkup({ showIcon: false, description: '이 페이지는 데모 목적으로만 사용됩니다.' }),
    ].join('\n\n'),
    react: `<>
  <Alert showIcon={false} color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
  <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
</>`,
    vue: `<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
<Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />`,
  },
  size: {
    html: [
      alertMarkup({ title: 'Small', description: '폼 필드 아래 등 좁은 영역에 사용합니다.', size: 'sm' }),
      alertMarkup({ title: 'Medium', description: '기본 크기입니다.' }),
      alertMarkup({ title: 'Large', description: '페이지 상단 등 눈에 띄는 안내에 사용합니다.', size: 'lg' }),
    ].join('\n\n'),
    react: `<>
  <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
  <Alert color="info" title="Medium" description="기본 크기입니다." />
  <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
</>`,
    vue: `<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
<Alert color="info" title="Medium" description="기본 크기입니다." />
<Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />`,
  },
  closable: {
    html: [
      alertMarkup({ title: '새 소식', description: '대시보드가 새롭게 개편되었습니다.', closable: true }),
      alertMarkup({ color: 'warning', description: '브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.', closable: true }),
    ].join('\n\n'),
    react: `<>
  <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
  <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
</>`,
    vue: `<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
<Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />`,
  },
  actions: {
    html: [
      alertMarkup({
        color: 'danger',
        title: '저장 실패',
        description: '변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.',
        actions: '<button type="button" class="btn btn_filled btn_sm color_danger"><span class="btn_label">다시 시도</span></button>\n      <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>',
      }),
      alertMarkup({
        title: '이용 약관 변경',
        description: '2026년 3월 1일부터 새 약관이 적용됩니다.',
        actions: '<a href="#" class="link color_primary size_sm">약관 보기</a>\n      <button type="button" class="btn btn_text btn_sm color_primary"><span class="btn_label">동의하기</span></button>',
      }),
    ].join('\n\n'),
    react: `<>
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
</>`,
    vue: `<Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
  <template #actions><div class="alert_actions"><Button variant="filled" color="danger" size="sm" label="다시 시도" /><Button variant="ghost" size="sm" label="취소" /></div></template>
</Alert>
<Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
  <template #actions><div class="alert_actions"><Link href="#" size="sm" label="약관 보기" /><Button variant="text" color="primary" size="sm" label="동의하기" /></div></template>
</Alert>`,
  },
  banner: {
    html: alertMarkup({ color: 'warning', description: '시스템 점검으로 일부 기능이 제한될 수 있습니다.', banner: true, closable: true }),
    react: '<Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />',
    vue: '<Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />',
  },
  context: {
    html: `${alertMarkup({ title: '업데이트 안내', description: '새 버전이 출시되었습니다. <a href="#" class="link color_primary size_sm">릴리스 노트 보기</a>' })}

<form class="form form_vertical form_fit" novalidate>
${alertMarkup({ color: 'danger', title: '입력 내용을 확인해 주세요', description: '이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.' })}
  <div class="form_field">
    <label class="form_field-label" for="alert-email">이메일</label>
    <input id="alert-email" class="input is-error" type="email" value="invalid-email" aria-invalid="true">
  </div>
</form>`,
    react: `<>
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
</>`,
    vue: `<Alert color="info" title="업데이트 안내">
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
</form>`,
  },
};

const indent = (value: string, spaces: number) => value
  .split('\n')
  .map((line) => `${' '.repeat(spaces)}${line}`)
  .join('\n');

function createExamples(key: string, source: Source): FrameworkExample[] {
  const usesButtonAndLink = key === 'actions';
  const usesLink = key === 'context';
  const reactImports = [
    "import Alert from '@uxkm/react/alert';",
    usesButtonAndLink && "import Button from '@uxkm/react/button';",
    (usesButtonAndLink || usesLink) && "import Link from '@uxkm/react/link';",
  ].filter(Boolean).join('\n');
  const vueImports = [
    "import Alert from '@uxkm/vue/alert';",
    usesButtonAndLink && "import Button from '@uxkm/vue/button';",
    (usesButtonAndLink || usesLink) && "import Link from '@uxkm/vue/link';",
  ].filter(Boolean).join('\n');
  const react = `${reactImports}

export function Example() {
  return (
${indent(source.react, /^\s*<>/.test(source.react) ? 2 : 4)}
  );
}`;
  const vue = `<script setup>
${vueImports}
</script>

<template>
${indent(source.vue, 2)}
</template>`;

  return [
    { id: 'html', label: 'HTML', fileName: `Alert.html · ${key}`, code: source.html },
    { id: 'gulp', label: 'Gulp', fileName: `alert.njk · ${key}`, code: source.html },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/alert · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/alert · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/alert · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/alert · ${key}`, code: react },
  ];
}

export const alertFrameworkExamples = Object.fromEntries(
  Object.entries(sources).map(([key, source]) => [key, createExamples(key, source)]),
) as Record<keyof typeof sources, FrameworkExample[]>;
