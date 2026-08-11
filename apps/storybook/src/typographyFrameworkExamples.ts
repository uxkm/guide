import type { FrameworkExample } from './FrameworkCode';

const bodies = {
  titles: `<div class="typo_stack-lg">
  <TypoTitle level="1">h1. 제목 레벨 1</TypoTitle>
  <TypoTitle level="2">h2. 제목 레벨 2</TypoTitle>
  <TypoTitle level="3">h3. 제목 레벨 3</TypoTitle>
  <TypoTitle level="4">h4. 제목 레벨 4</TypoTitle>
  <TypoTitle level="5">h5. 제목 레벨 5</TypoTitle>
</div>`,
  body: `<p>기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted">보조 설명</TypoText>을 함께 쓸 수 있습니다.</p>
<div>
  <TypoText variant="paragraph">typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.</TypoText>
  <TypoText variant="paragraph">두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.</TypoText>
</div>`,
  colors: `<div class="typo_stack">
  <TypoText color="default">기본 텍스트 (Default)</TypoText>
  <TypoText color="muted">보조 텍스트 (Muted)</TypoText>
  <TypoText color="success">성공 메시지 (Success)</TypoText>
  <TypoText color="warning">주의 메시지 (Warning)</TypoText>
  <TypoText color="danger">오류 메시지 (Danger)</TypoText>
  <TypoText color="primary">강조 텍스트 (Primary)</TypoText>
</div>`,
  sizes: `<div class="typo_stack">
  <TypoText size="xs">Extra Small — 0.75rem</TypoText>
  <TypoText size="sm">Small — 0.8125rem</TypoText>
  <TypoText>Base — 0.875rem (기본)</TypoText>
  <TypoText size="lg">Large — 1rem</TypoText>
  <TypoText size="xl">Extra Large — 1.125rem</TypoText>
</div>`,
  styles: `<p>
  <TypoText variant="strong">굵은 텍스트</TypoText>와
  <TypoText variant="italic">기울임 텍스트</TypoText>,
  <TypoText variant="underline">밑줄 텍스트</TypoText>,
  <TypoText variant="delete">취소선 텍스트</TypoText>를 함께 사용할 수 있습니다.
</p>
<p><TypoText variant="mark">형광펜 강조</TypoText>와 <TypoText variant="code">inline code</TypoText> 표현도 지원합니다.</p>`,
  subSup: `<p>화학식 H<TypoText variant="sub">2</TypoText>O, 수식 x<TypoText variant="sup">2</TypoText> + y<TypoText variant="sup">2</TypoText> = z<TypoText variant="sup">2</TypoText></p>
<p><TypoText variant="small">※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.</TypoText></p>`,
  ellipsis: `<div style="max-width: 320px; width: 100%;">
  <TypoText ellipsis="1">1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.</TypoText>
  <TypoText ellipsis="2">2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다.</TypoText>
  <TypoText ellipsis="3">3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지합니다.</TypoText>
</div>`,
  quote: `<TypoText variant="blockquote" color="muted" cite="https://example.com">좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.</TypoText>`,
  lists: `<ul class="typo_list">
  <li>디자인 토큰 정의</li><li>컴포넌트 문서화</li><li>접근성 검토</li>
</ul>
<ol class="typo_list-ordered">
  <li>요구사항 분석</li><li>와이어프레임 작성</li><li>프로토타입 검증</li>
</ol>`,
  links: `<p class="typo_paragraph">자세한 내용은 <TypoText variant="link" href="#">가이드 문서</TypoText>를 참고하세요. <TypoText tag="span" color="muted">또는</TypoText> <TypoText variant="link" href="#" size="sm">작은 링크</TypoText>로 이동할 수 있습니다.</p>`,
  supporting: `<div class="typo_stack-lg">
  <TypoText variant="overline">가이드 소개</TypoText>
  <TypoTitle level="3">UXKM Components</TypoTitle>
  <TypoText variant="lead">UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.</TypoText>
  <TypoText variant="caption">마지막 업데이트: 2026-08-11</TypoText>
  <TypoText variant="label" html-for="typography-email">이메일</TypoText>
  <input id="typography-email" class="input" type="email" placeholder="name@example.com" />
</div>`,
  titleColors: `<div class="typo_stack">
  <TypoTitle level="3" color="primary">Primary 제목</TypoTitle>
  <TypoTitle level="3" color="success">Success 제목</TypoTitle>
  <TypoTitle level="3" color="danger">Danger 제목</TypoTitle>
  <TypoTitle level="3" color="muted">Muted 제목</TypoTitle>
</div>`,
  keyboard: `<p>저장하려면 <TypoText variant="kbd">⌘</TypoText> + <TypoText variant="kbd">S</TypoText>를 누르세요. 검색은 <TypoText variant="kbd">Ctrl</TypoText> + <TypoText variant="kbd">K</TypoText>입니다.</p>
<TypoText variant="pre"><code>&lt;button class="btn btn_filled color_primary"&gt;저장&lt;/button&gt;</code></TypoText>`,
  nestedLists: `<ul class="typo_list">
  <li>레이아웃<ul class="typo_list"><li>Container</li><li>Grid</li></ul></li>
  <li>기본 요소<ul class="typo_list"><li>Button</li><li>Typography</li></ul></li>
</ul>`,
  stack: `<div class="typo_stack-lg">
  <TypoTitle level="3">섹션 제목</TypoTitle>
  <TypoText variant="paragraph">typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다.</TypoText>
  <TypoText color="muted" size="sm">마지막 업데이트: 2026-08-11</TypoText>
</div>
<div class="typo_stack">
  <TypoTitle level="4">작은 스택</TypoTitle>
  <TypoText color="muted">typo_stack은 좁은 간격으로 제목·설명을 묶습니다.</TypoText>
</div>`
} as const;

type ExampleKey = keyof typeof bodies;

const variantMap: Record<string, { tag: string; className: string }> = {
  text: { tag: 'p', className: '' }, paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' }, caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' }, overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' }, kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' }, strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' }, underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' }, mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' }, sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' }, link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' }
};

function parseAttrs(source: string) {
  const attrs: Record<string, string> = {};
  source.replace(/([\w-]+)="([^"]*)"/g, (_, key: string, value: string) => {
    attrs[key] = value;
    return '';
  });
  return attrs;
}

function textHtml(source: string, content: string) {
  const props = parseAttrs(source);
  const variant = props.variant || 'text';
  const config = variantMap[variant] || variantMap.text;
  const tag = props.tag || config.tag;
  const lines = Number(props.ellipsis);
  const classes = [config.className, props.color && `color_${props.color}`, props.size && `size_${props.size}`, lines === 1 ? 'text_ellipsis' : [2, 3].includes(lines) ? `text_ellipsis-${lines}` : ''].filter(Boolean);
  const attrs = [classes.length ? `class="${classes.join(' ')}"` : '', variant === 'link' ? `href="${props.href || '#'}"` : '', variant === 'label' && props['html-for'] ? `for="${props['html-for']}"` : '', variant === 'blockquote' && props.cite ? `cite="${props.cite}"` : ''].filter(Boolean).join(' ');
  return `<${tag}${attrs ? ` ${attrs}` : ''}>${content}</${tag}>`;
}

function toHtml(body: string) {
  let html = body.replace(/<TypoTitle\s*([^>]*)>([\s\S]*?)<\/TypoTitle>/g, (_, source: string, content: string) => {
    const props = parseAttrs(source);
    const level = [1, 2, 3, 4, 5].includes(Number(props.level)) ? Number(props.level) : 1;
    const classes = [`typo_title-${level}`, props.color && `color_${props.color}`].filter(Boolean).join(' ');
    return `<h${level} class="${classes}">${content}</h${level}>`;
  });
  html = html.replace(/<TypoText\s*([^>]*)>([\s\S]*?)<\/TypoText>/g, (_, source: string, content: string) => textHtml(source, content));
  return html;
}

function reactCode(body: string) {
  const jsx = body.replace(/class=/g, 'className=').replace(/html-for=/g, 'htmlFor=').replace(/style="max-width: 320px; width: 100%;"/g, "style={{ maxWidth: 320, width: '100%' }}");
  return `import { TypoText, TypoTitle } from '@uxkm/react/typography';\n\nexport function Example() {\n  return (\n    <>\n${jsx.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}`;
}

function vueCode(body: string) {
  return `<script setup>\nimport { TypoText, TypoTitle } from '@uxkm/vue/typography';\n</script>\n\n<template>\n${body.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`;
}

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = toHtml(body);
  const react = reactCode(body);
  const vue = vueCode(body);
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/basic/Typography/Typography.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/basic/Typography/typography.njk · ${key}`, code: `{# Typography · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/typography → apps/vue/src/components/basic/Typography · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/typography → apps/vue/src/components/basic/Typography · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/typography → apps/react/src/components/basic/Typography · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/typography → apps/react/src/components/basic/Typography · ${key}`, code: react }
  ];
}

export const typographyFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
