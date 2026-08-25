import type { FrameworkExample } from './FrameworkCode';

const bodies = {
  basic: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="Filled Primary" />
  <Button variant="filled" color="default" label="Filled Default" />
  <Button variant="outline" color="primary" label="Outline" />
  <Button variant="ghost" label="Ghost" />
  <Button variant="text" color="primary" label="Text" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="text" color="muted" label="Text Muted" />
  <Button variant="text" color="danger" label="Text Danger" />
</div>`,
  select: `<div class="btn_row btn_row-wrap">
  <Button variant="select" label="서울특별시" haspopup="listbox" />
  <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
  <Button variant="select" open label="카테고리" haspopup="listbox" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="select" size="sm" label="Small" />
  <Button variant="select" label="Medium" />
  <Button variant="select" size="lg" label="Large" />
  <Button variant="select" disabled label="비활성" />
  <Button variant="select" error invalid label="필수 선택" />
</div>
<Button variant="select" block label="전체 너비 셀렉트 트리거" />
<div class="btn_row btn_row-wrap">
  <Button variant="select" select-text label="최신순" />
  <Button variant="select" select-text placeholder label="정렬 기준" />
  <Button variant="select" select-text open label="필터" />
  <Button variant="select" select-text size="sm" label="Small" />
  <Button variant="select" select-text disabled label="비활성" />
</div>`,
  text: `<div class="btn_row btn_row-wrap">
  <Button variant="text" color="primary" label="Primary" />
  <Button variant="text" color="muted" label="Muted" />
  <Button variant="text" color="danger" label="Danger" />
  <Button variant="text" color="success" label="Success" />
  <Button variant="text" color="warning" label="Warning" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" color="danger" label="삭제" icon-before="trash" />
  <Button variant="text" color="success" label="완료" icon-before="check" />
  <Button variant="text" color="warning" label="주의" icon-after="warning" />
  <Button variant="text" color="muted" label="자세히" icon-after="chevron" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" label="더 보기" />
  <Button variant="text" label="링크 복사" />
  <Button variant="text" label="취소" />
  <Button variant="text" label="건너뛰기" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" label="추가" icon-before="plus" />
  <Button variant="text" label="다운로드" icon-before="download" />
  <Button variant="text" label="링크 열기" icon-before="external" />
  <Button variant="text" label="설정" icon-before="settings" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" label="다음" icon-after="chevron" />
  <Button variant="text" label="전체 보기" icon-after="chevron" />
  <Button variant="text" label="삭제" icon-after="trash" />
  <Button variant="text" label="새로고침" icon-after="refresh" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" size="sm" label="Small" />
  <Button variant="text" label="Medium" />
  <Button variant="text" size="lg" label="Large" />
  <Button variant="text" size="sm" label="추가" icon-before="plus" />
  <Button variant="text" size="lg" label="다음" icon-after="chevron" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="text" icon-only aria-label="검색" icon-before="search" />
  <Button variant="text" icon-only aria-label="편집" icon-before="edit" />
  <Button variant="text" icon-only size="sm" aria-label="닫기" icon-before="close" />
  <Button variant="text" disabled label="비활성" />
  <Button variant="text" aria-disabled label="is-disabled" icon-after="chevron" />
</div>
<Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />`,
  iconText: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="추가" icon-before="plus" />
  <Button variant="filled" color="default" label="다운로드" icon-before="download" />
  <Button variant="outline" color="primary" label="새 항목" icon-before="plus" />
</div>`,
  vertical: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" vertical label="홈" icon-before="home" />
  <Button variant="filled" color="default" vertical label="검색" icon-before="search" />
  <Button variant="ghost" vertical label="마이" icon-before="user" />
  <Button variant="text" color="primary" vertical label="추가" icon-before="plus" />
  <Button variant="outline" color="primary" vertical label="다운로드" icon-before="download" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" vertical size="sm" label="추가" icon-before="plus" />
  <Button variant="filled" color="primary" vertical label="추가" icon-before="plus" />
  <Button variant="filled" color="primary" vertical size="lg" label="추가" icon-before="plus" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" vertical round label="가이드" icon-before="book" />
  <Button variant="filled" color="primary" vertical round label="즐겨찾기" icon-before="star" />
  <Button variant="ghost" vertical disabled label="삭제" icon-before="trash" />
  <Button variant="filled" color="primary" vertical loading label="저장 중" />
</div>`,
  verticalEqual: `<div class="btn_row-equal">
  <Button variant="text" color="primary" vertical label="홈" icon-before="home" />
  <Button variant="text" color="primary" vertical label="카테고리" icon-before="grid" />
  <Button variant="filled" color="primary" vertical label="장바구니" icon-before="cart" />
  <Button variant="text" color="primary" vertical label="마이" icon-before="user" />
</div>`,
  textIcon: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="다음" icon-after="chevron" />
  <Button variant="filled" color="default" label="자세히 보기" icon-after="external" />
  <Button variant="text" color="primary" label="링크 이동" icon-after="chevron" />
</div>`,
  iconOnly: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" icon-only aria-label="추가" icon-before="plus" />
  <Button variant="filled" color="default" icon-only aria-label="설정" icon-before="settings" />
  <Button variant="ghost" icon-only aria-label="검색" icon-before="search" />
  <Button variant="outline" color="primary" icon-only aria-label="편집" icon-before="edit" />
  <Button variant="filled" color="danger" icon-only aria-label="삭제" icon-before="trash" />
  <Button variant="filled" color="primary" icon-only disabled aria-label="추가" icon-before="plus" />
</div>`,
  iconSize: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)" icon-before="plus" />
  <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)" icon-before="plus" />
  <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)" icon-before="plus" />
  <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)" icon-before="download" />
  <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)" icon-before="download" />
  <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)" icon-before="download" />
</div>`,
  colors: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="outline" color="primary" label="Outline" />
</div>`,
  sizes: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" size="sm" label="Small" />
  <Button variant="filled" color="primary" label="Medium" />
  <Button variant="filled" color="primary" size="lg" label="Large" />
</div>`,
  round: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round label="Primary" />
  <Button variant="filled" color="default" round label="Default" />
  <Button variant="ghost" round label="Ghost" />
  <Button variant="outline" color="primary" round label="Outline" />
  <Button variant="filled" color="success" round label="Success" />
  <Button variant="filled" color="danger" round label="Danger" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round size="sm" label="Small" />
  <Button variant="filled" color="primary" round label="Medium" />
  <Button variant="filled" color="primary" round size="lg" label="Large" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round label="추가" icon-before="plus" />
  <Button variant="filled" color="default" round label="다음" icon-after="chevron" />
  <Button variant="text" color="primary" round label="더 보기" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" round icon-only aria-label="추가" icon-before="plus" />
  <Button variant="filled" color="default" round icon-only aria-label="설정" icon-before="settings" />
  <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색" icon-before="search" />
  <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제" icon-before="trash" />
</div>
<div class="btn_group btn_group-round btn_group-fit">
  <Button variant="filled" color="default" label="일" />
  <Button variant="filled" color="default" label="주" />
  <Button variant="filled" color="primary" label="월" />
  <Button variant="filled" color="default" label="년" />
</div>`,
  width: `<Button variant="filled" color="primary" block label="전체 너비 버튼" />
<div class="btn_row-equal">
  <Button variant="filled" color="default" label="취소" />
  <Button variant="filled" color="primary" label="확인" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow label="취소" />
  <Button variant="filled" color="primary" grow label="확인" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow label="옵션 A" />
  <Button variant="filled" color="default" grow label="옵션 B" />
  <Button variant="filled" color="primary" grow label="옵션 C" />
</div>
<div class="btn_row btn_row-wrap btn_row-start">
  <Button variant="ghost" fit label="뒤로" />
  <Button variant="filled" color="default" fit label="취소" />
  <Button variant="filled" color="primary" fit label="저장" />
</div>
<div class="btn_row btn_row-wrap btn_row-end">
  <Button variant="ghost" fit label="뒤로" />
  <Button variant="filled" color="default" fit label="취소" />
  <Button variant="filled" color="primary" fit label="저장" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="ghost" fit label="뒤로" />
  <Button variant="filled" color="default" grow label="임시 저장" />
  <Button variant="filled" color="primary" grow label="제출" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow label="본문 영역" />
  <Button variant="filled" color="primary" fit label="확인" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="default" grow="2" label="2배 너비" />
  <Button variant="filled" color="primary" grow label="1배 너비" />
</div>
<Button variant="filled" color="primary" block label="전체 너비 다운로드" icon-before="download" />`,
  states: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" disabled label="Primary" />
  <Button variant="filled" color="default" disabled label="Default" />
  <Button variant="outline" color="primary" disabled label="Outline" />
  <Button variant="ghost" disabled label="Ghost" />
  <Button variant="text" color="primary" disabled label="Text" />
  <Button variant="filled" color="danger" disabled label="Danger" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
  <Button variant="filled" color="default" aria-disabled label="is-disabled" />
  <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
</div>
<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" loading label="저장 중" />
  <Button variant="filled" color="default" loading label="처리 중" />
  <Button variant="outline" color="primary" loading label="업로드 중" />
  <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
</div>
<Button variant="filled" color="primary" block loading label="전체 너비 로딩" />`,
  groups: `<div class="btn_group btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" size="sm" label="Left" />
  <Button variant="filled" color="default" size="sm" label="Middle" />
  <Button variant="filled" color="default" size="sm" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="default" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" size="lg" label="Left" />
  <Button variant="filled" color="default" size="lg" label="Middle" />
  <Button variant="filled" color="default" size="lg" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-center">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="default" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-fit btn_group-align-end">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="default" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-block">
  <Button variant="filled" color="default" label="Left" />
  <Button variant="filled" color="primary" label="Middle" />
  <Button variant="filled" color="default" label="Right" />
</div>
<div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_group btn_group-vertical btn_group-block">
  <Button variant="filled" color="default" label="상단" />
  <Button variant="filled" color="default" label="중간" />
  <Button variant="filled" color="default" label="하단" />
</div>
<div class="btn_stack">
  <Button variant="filled" color="primary" block label="로그인" />
  <Button variant="filled" color="default" block label="회원가입" />
</div>
<div class="btn_stack">
  <Button variant="filled" color="primary" block label="결제하기" />
  <Button variant="text" color="primary" label="쿠폰 적용" />
</div>
<div class="btn_stack">
  <Button variant="filled" color="primary" block label="다운로드" icon-before="download" />
  <p class="btn_stack-text">최신 버전 v2.0 · <a href="#release">릴리스 노트</a></p>
</div>`,
  tags: `<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="button" />
  <Button tag="a" href="#" variant="outline" color="primary" label="a + href" />
  <Button tag="div" variant="ghost" label="div → role=button" />
  <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
</div>`
} as const;

type ExampleKey = keyof typeof bodies;

const booleanAttrs = new Set(['round', 'vertical', 'icon-only', 'block', 'grow', 'fit', 'disabled', 'loading', 'open', 'error', 'invalid', 'placeholder', 'select-text', 'aria-disabled']);

function parseAttrs(source: string) {
  const attrs: Record<string, string | boolean> = {};
  source.replace(/([\w-]+)(?:="([^"]*)")?/g, (_, key: string, value: string | undefined) => {
    attrs[key] = value ?? true;
    return '';
  });
  return attrs;
}

const iconPaths: Record<string, string> = {
  plus: '<path d="M12 5v14M5 12h14"></path>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>',
  trash: '<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6"></path>',
  check: '<path d="m5 12 4 4L19 6"></path>',
  warning: '<path d="M12 3 2.5 20h19L12 3Z"></path><path d="M12 9v4m0 3h.01"></path>',
  chevron: '<path d="m9 6 6 6-6 6"></path>',
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path><path d="m13.5 6.5 4 4"></path>',
  close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z"></path>',
  home: '<path d="m3 11 9-8 9 8"></path><path d="M5 10v11h14V10M10 21v-7h4v7"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  grid: '<rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect>',
  cart: '<path d="M3 4h2l2 11h10l3-8H6"></path><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>',
  external: '<path d="M14 4h6v6M20 4l-9 9"></path><path d="M18 13v7H4V6h7"></path>',
  refresh: '<path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 0-2 5"></path>',
  book: '<path d="M4 5a3 3 0 0 1 3-2h5v18H7a3 3 0 0 0-3 2V5Z"></path><path d="M20 5a3 3 0 0 0-3-2h-5v18h5a3 3 0 0 1 3 2V5Z"></path>'
};

function htmlIcon(name: string) {
  const paths = (iconPaths[name] ?? iconPaths.plus)
    .replace(/></g, '>\n<')
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');
  return `<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
${paths}
</svg>`;
}

function buttonClasses(props: Record<string, string | boolean>) {
  const variant = String(props.variant ?? 'filled');
  const color = String(props.color ?? 'primary');
  const classes = ['btn', `btn_${variant}`];
  if (variant !== 'ghost') classes.push(`color_${color}`);
  for (const [prop, className] of [['size', `btn_${props.size}`], ['select-text', 'btn_select-text'], ['placeholder', 'btn_select-placeholder'], ['round', 'btn_round'], ['vertical', 'btn_vertical'], ['icon-only', 'btn_icon-only'], ['block', 'btn_block'], ['grow', props.grow === '2' ? 'btn_grow-2' : 'btn_grow'], ['fit', 'btn_fit'], ['aria-disabled', 'is-disabled'], ['loading', 'is-loading'], ['open', 'is-open'], ['error', 'is-error']] as const) {
    if (props[prop]) classes.push(className);
  }
  return classes;
}

function htmlButton(source: string) {
  const props = parseAttrs(source);
  const variant = String(props.variant ?? 'filled');
  const classes = buttonClasses(props);
  const tag = String(props.tag ?? 'button');
  const label = props['icon-only'] ? '' : `<span class="btn_label">${String(props.label ?? '')}</span>`;
  const before = props['icon-before'] ? htmlIcon(String(props['icon-before'])) : '';
  const after = props['icon-after'] ? htmlIcon(String(props['icon-after'])) : '';
  const spinner = props.loading ? '<span class="btn_spinner" aria-hidden="true"></span>' : '';
  const caret = variant === 'select' ? htmlIcon('chevron') : '';
  const inactive = Boolean(props.disabled || props['aria-disabled'] || props.loading);
  const needsButtonRole = tag === 'div' || (tag === 'a' && !props.href);
  const attrs = [
    `class="${classes.join(' ')}"`,
    'data-ripple="true"',
    tag === 'button' ? 'type="button"' : '',
    props.href ? `href="${props.href}"` : '',
    props.role ? `role="${props.role}"` : needsButtonRole ? 'role="button"' : '',
    needsButtonRole ? `tabindex="${inactive ? -1 : 0}"` : '',
    props['aria-label'] ? `aria-label="${props['aria-label']}"` : '',
    props.haspopup ? `aria-haspopup="${props.haspopup}"` : '',
    props.open ? 'aria-expanded="true"' : '',
    props.error || props.invalid ? 'aria-invalid="true"' : '',
    props.loading ? 'aria-busy="true"' : '',
    props['aria-disabled'] || (tag !== 'button' && props.disabled) ? 'aria-disabled="true"' : '',
    tag === 'button' && props.disabled ? 'disabled' : ''
  ].filter(Boolean).join(' ');
  const children = [spinner, before, label, after, caret]
    .filter(Boolean)
    .flatMap((child) => child.split('\n'))
    .map((line) => `  ${line}`)
    .join('\n');
  return `<${tag} ${attrs}>
${children}
</${tag}>`;
}

function toHtml(body: string) {
  return body.replace(/^([ \t]*)<Button\s+([^>]*?)\s*\/>/gm, (_, indent: string, attrs: string) => (
    htmlButton(attrs)
      .split('\n')
      .map((line) => `${indent}${line}`)
      .join('\n')
  ));
}

function toReact(body: string) {
  return body
    .replace(/class=/g, 'className=')
    .replace(/([\w-]+)="([^"]*)"/g, (full, key: string, value: string) => {
      if (key === 'icon-before') return `iconBefore={<Icon name="${value}" />}`;
      if (key === 'icon-after') return `iconAfter={<Icon name="${value}" />}`;
      if (key === 'aria-label') return `ariaLabel="${value}"`;
      const camel = key.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
      return `${camel}="${value}"`;
    })
    .replace(/\b(icon-only|select-text|aria-disabled)\b/g, (key) => key.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase()));
}

function toVue(body: string) {
  return body.replace(/<Button\s+([^>]*?)\s*\/>/g, (_, source: string) => {
    const props = parseAttrs(source);
    const before = props['icon-before'];
    const after = props['icon-after'];
    const attrText = Object.entries(props)
      .filter(([key]) => key !== 'icon-before' && key !== 'icon-after')
      .map(([key, value]) => value === true || booleanAttrs.has(key) && value === 'true' ? key : `${key}="${value}"`)
      .join(' ');
    if (!before && !after) return `<Button ${attrText} />`;
    return [`<Button ${attrText}>`, before ? `  <template #icon-before><Icon name="${before}" /></template>` : '', after ? `  <template #icon-after><Icon name="${after}" /></template>` : '', '</Button>'].filter(Boolean).join('\n');
  });
}

function webSquareBody(body: string, key: ExampleKey) {
  const name = `${key[0].toUpperCase()}${key.slice(1)}`;
  let triggerSequence = 0;
  let groupSequence = 0;

  const triggers = body.replace(/<Button\s+([^>]*?)\s*\/>/g, (_, source: string) => {
    const props = parseAttrs(source);
    const inactive = Boolean(props.disabled || props['aria-disabled'] || props.loading);
    const iconOnly = Boolean(props['icon-only']);
    const label = String(props.label ?? props['aria-label'] ?? 'Button');
    const id = `btn${name}${++triggerSequence}`;
    const classes = buttonClasses(props).join(' ');
    const iconName = props['icon-before'] ?? props['icon-after'];
    const notes = [
      iconName ? `아이콘 ${iconName}: 프로젝트 이미지 또는 CSS background-image 리소스에 연결` : '',
      props.loading ? '로딩 표시: 프로젝트 Trigger 로딩 이미지 또는 CSS 상태 스타일에 연결' : ''
    ].filter(Boolean);
    const note = notes.length ? `<!-- ${notes.join(' · ')} -->\n` : '';

    if (props.tag === 'a' && typeof props.href === 'string') {
      return `${note}<a id="${id}" href="${props.href}" class="${classes}">${label}</a>`;
    }

    const type = props.tag === 'a' ? 'anchor' : 'button';
    const attributes = [
      `type="${type}"`,
      `id="${id}"`,
      `class="${classes}"`,
      iconOnly && props['aria-label'] ? `tooltip="${props['aria-label']}"` : '',
      inactive ? 'disabled="true"' : '',
      inactive ? '' : 'ev:onclick="scwin.button_onclick"'
    ].filter(Boolean).join('\n  ');

    return `${note}<xf:trigger\n  ${attributes}>\n  <xf:label><![CDATA[${label}]]></xf:label>\n</xf:trigger>`;
  });

  const groups = triggers.replace(/<(\/)?div\b([^>]*)>/g, (tag, closing: string, source: string) => {
    if (closing) return '</w2:group>';
    const className = source.match(/\sclass="([^"]*)"/)?.[1] ?? '';
    return `<w2:group\n  id="btn${name}Group${++groupSequence}"${className ? `\n  class="${className}"` : ''}>`;
  });

  return `<w2:group
  id="button${name}Example"
  class="btn-demo">
${groups.split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

const vueHelpers = `<script setup>
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
</script>`;

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = toHtml(body);
  const vue = toVue(body);
  const react = toReact(body);
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/basic/Button/Button.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/basic/Button/button.njk · ${key}`, code: `{# Button · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/button → apps/vue/src/components/basic/Button/Button.vue · ${key}`, code: `${vueHelpers}\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>` },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/button → apps/vue/src/components/basic/Button/Button.vue · ${key}`, code: `${vueHelpers}\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>` },
    { id: 'react', label: 'React', fileName: `@uxkm/react/button → apps/react/src/components/basic/Button/Button.jsx · ${key}`, code: `import Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${react.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}` },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/button → apps/react/src/components/basic/Button/Button.jsx · ${key}`, code: `import Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${react.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}` },
    { id: 'websquare', label: 'WebSquare', fileName: `Button.xml · ${key}`, code: webSquareBody(body, key) }
  ];
}

export const buttonFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
