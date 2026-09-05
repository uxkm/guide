import type { FrameworkExample } from './FrameworkCode';

const gulpImport = `{% from "components/data-display/Card/card.njk" import card, cardHeader, cardBody, cardFooter, cardDeck %}`;
const gulpButtonImport = `{% from "components/basic/Button/button.njk" import button %}`;
const gulpAvatarImport = `{% from "components/data-display/Avatar/avatar.njk" import avatar %}`;
const gulpTagImport = `{% from "components/data-display/Tag/tag.njk" import tag, tagGroup %}`;

function attribute(source: string, name: string) {
  return source.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? '';
}

function quote(value: string) {
  return `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
}

function cardGulpArgs(tag: string, source: string, classes: string[]) {
  const args: string[] = [];
  const remaining = new Set(classes.filter((className) => className !== 'card'));
  const take = (className: string) => remaining.delete(className);

  if (take('card_shadow')) args.push("variant='shadow'");
  else if (take('card_elevated')) args.push("variant='elevated'");
  else if (take('card_ghost')) args.push("variant='flat'");
  else if (take('card_borderless')) args.push("variant='borderless'");

  for (const size of ['sm', 'lg', 'compact']) {
    if (take(`card_${size}`)) args.push(`size='${size}'`);
  }
  if (take('card_horizontal')) args.push('horizontal=true');
  if (take('card_hover')) args.push('hoverable=true');
  if (take('card_accent')) args.push('accent=true');
  if (take('is-disabled')) args.push('disabled=true');

  const colorClass = [...remaining].find((className) => className.startsWith('color_'));
  if (colorClass) {
    remaining.delete(colorClass);
    args.push(`color='${colorClass.slice('color_'.length)}'`);
  }

  const href = attribute(source, 'href');
  const role = attribute(source, 'role');
  const tabIndex = attribute(source, 'tabindex');
  const style = attribute(source, 'style');
  if (tag === 'a' && !href) args.push("tag='a'");
  if (href) args.push(`href=${quote(href)}`);
  if (role) args.push(`role=${quote(role)}`);
  if (tabIndex) args.push(`tabIndex=${quote(tabIndex)}`);
  if (style) args.push(`style=${quote(style)}`);

  // card_clickable은 링크·role에서 자동 생성되므로 그 외의 경우에만 사용자 클래스로 남깁니다.
  if ((href || role === 'link' || role === 'button') && remaining.has('card_clickable')) {
    remaining.delete('card_clickable');
  }
  if (remaining.size) args.push(`className=${quote([...remaining].join(' '))}`);
  return args.join(', ');
}

function buttonGulpArgs(source: string, label = '') {
  const args: string[] = [];
  const remaining = new Set(attribute(source, 'class').split(/\s+/).filter(Boolean));
  remaining.delete('btn');

  const variant = ['filled', 'outline', 'ghost', 'text', 'select'].find((name) => remaining.delete(`btn_${name}`));
  const colorClass = [...remaining].find((className) => className.startsWith('color_'));
  const size = ['sm', 'lg'].find((name) => remaining.delete(`btn_${name}`));
  if (variant) args.push(`variant='${variant}'`);
  if (colorClass) {
    remaining.delete(colorClass);
    args.push(`color='${colorClass.slice('color_'.length)}'`);
  }
  if (size) args.push(`size='${size}'`);

  const booleanClasses: Record<string, string> = {
    'btn_icon-only': 'iconOnly',
    btn_round: 'round',
    btn_block: 'block',
    btn_fit: 'fit'
  };
  for (const [className, argument] of Object.entries(booleanClasses)) {
    if (remaining.delete(className)) args.push(`${argument}=true`);
  }

  const ariaLabel = attribute(source, 'aria-label');
  if (ariaLabel) args.push(`ariaLabel=${quote(ariaLabel)}`);
  if (/\bdisabled(?:\s|$)/.test(source)) args.push('disabled=true');
  if (remaining.size) args.push(`className=${quote([...remaining].join(' '))}`);
  if (label) args.push(`label=${quote(label)}`);
  return args.join(', ');
}

function convertButtons(source: string) {
  return source
    .replace(
      /<button\b([^>]*)>\s*<span class="btn_label">([^<]*)<\/span>\s*<\/button>/g,
      (_match, attrs: string, label: string) => `{{ button(${buttonGulpArgs(attrs, label)}) }}`
    )
    .replace(/<button\b([^>]*)>([\s\S]*?)<\/button>/g, (_match, attrs: string, content: string) => {
      const args = buttonGulpArgs(attrs);
      if (/<circle cx="12" cy="12" r="1"\/>/.test(content) && /<circle cx="19" cy="12" r="1"\/>/.test(content)) {
        return `{{ button(${args}${args ? ', ' : ''}iconBefore='more') }}`;
      }
      return `{% call button(${args}) %}${content.trim()}{% endcall %}`;
    });
}

function matchingDivEnd(source: string, start: number) {
  const tags = /<\/?div\b[^>]*>/g;
  tags.lastIndex = start;
  let depth = 0;
  let match: RegExpExecArray | null;
  while ((match = tags.exec(source))) {
    depth += match[0].startsWith('</div') ? -1 : 1;
    if (depth === 0) return tags.lastIndex;
  }
  return -1;
}

function convertProfileHeader(source: string) {
  const headerOpen = '<div class="card_header">';
  const mainOpen = '<div class="card_header-main">';
  const extraOpen = '<div class="card_extra">';
  const headerStart = source.indexOf(headerOpen);
  if (headerStart < 0) return source;
  const headerEnd = matchingDivEnd(source, headerStart);
  if (headerEnd < 0) return source;
  const header = source.slice(headerStart, headerEnd);
  if (!header.includes('class="avatar ')) return source;

  const mainStart = header.indexOf(mainOpen);
  const mainEnd = matchingDivEnd(header, mainStart);
  const extraStart = header.indexOf(extraOpen, mainEnd);
  const extraEnd = matchingDivEnd(header, extraStart);
  if (mainStart < 0 || mainEnd < 0 || extraStart < 0 || extraEnd < 0) return source;

  const mainContent = header.slice(mainStart + mainOpen.length, mainEnd - '</div>'.length);
  const extraContent = header.slice(extraStart + extraOpen.length, extraEnd - '</div>'.length);
  const replacement = `{% set cardHeaderExtra %}${extraContent}{% endset %}{% call cardHeader(extra=cardHeaderExtra) %}${mainContent}{% endcall %}`;
  return source.slice(0, headerStart) + replacement + source.slice(headerEnd);
}

function convertProfileComponents(source: string) {
  return source
    .replace(
      /<span class="avatar(?:\s+color_(\w+))?"(?:\s+aria-hidden="true")?>([^<]*)<\/span>/g,
      (_match, color: string | undefined, initials: string) =>
        `{{ avatar(${color ? `color='${color}', ` : ''}initials=${quote(initials)}, ariaHidden=true) }}`
    )
    .replace(
      /<span class="tag(?:\s+tag_(sm|lg))?(?:\s+color_(\w+))?">([^<]*)<\/span>/g,
      (_match, size: string | undefined, color: string | undefined, label: string) => {
        const args = [size ? `size='${size}'` : '', color ? `color='${color}'` : '', `label=${quote(label)}`].filter(Boolean);
        return `{{ tag(${args.join(', ')}) }}`;
      }
    );
}

function formatGulpBlocks(source: string) {
  const lines = source
    .replace(/\s*(\{%\s*call\b[^%]*%\})\s*/g, '\n$1\n')
    .replace(/\s*(\{%\s*endcall\s*%\})\s*/g, '\n$1\n')
    .replace(/\s*(\{%\s*set\s+\w+\s*%\})\s*/g, '\n$1\n')
    .replace(/\s*(\{%\s*endset\s*%\})\s*/g, '\n$1\n')
    .replace(/\s*(\{\{\s*(?:cardHeader|button|avatar|tag)\([^)]*\)\s*\}\})\s*/g, '\n$1\n')
    .replace(/>\s*</g, '>\n<')
    .replace(/(<\/[A-Za-z][\w:-]*>)\s*(?=[^<{\s])/g, '$1\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const formatted: string[] = [];
  let depth = 0;

  for (const line of lines) {
    const closesCall = /^\{%\s*endcall\s*%\}$/.test(line);
    const closesSet = /^\{%\s*endset\s*%\}$/.test(line);
    const closesTag = /^<\//.test(line);
    if (closesCall || closesSet || closesTag) depth = Math.max(0, depth - 1);

    formatted.push(`${'  '.repeat(depth)}${line}`);

    if (/^\{%\s*(?:call\b|set\s+\w+\s*%\})/.test(line)) {
      depth += 1;
      continue;
    }
    const tagName = line.match(/^<([A-Za-z][\w:-]*)\b/)?.[1]?.toLowerCase();
    const voidTag = tagName && ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'].includes(tagName);
    const inlinePair = /^<([A-Za-z][\w:-]*)\b[^>]*>.*<\/\1>$/.test(line);
    if (tagName && !voidTag && !inlinePair && !/\/>$/.test(line)) depth += 1;
  }

  return formatted.join('\n');
}

function toGulp(html: string) {
  const stack: Array<{ tag: string; macro: boolean }> = [];
  const withSimpleHeaders = convertProfileComponents(convertProfileHeader(convertButtons(html)))
    .replace(
      /<div class="card_header"><div class="card_header-main"><h3 class="card_title">([^<]*)<\/h3>(?:<p class="card_subtitle">([^<]*)<\/p>)?<\/div><\/div>/g,
      (_source, title: string, subtitle: string | undefined) =>
        `{{ cardHeader(title=${quote(title)}${subtitle ? `, subtitle=${quote(subtitle)}` : ''}) }}`
    )
    .replace(
      /<div class="card_header"><h3 class="card_title">([^<]*)<\/h3><\/div>/g,
      (_source, title: string) => `{{ cardHeader(title=${quote(title)}) }}`
    );
  const converted = withSimpleHeaders.replace(/<(\/)?(article|a|div)\b([^>]*)>/g, (source, closing: string, tag: string, attrs: string) => {
    if (closing) {
      const opened = stack.pop();
      return opened?.macro ? '{% endcall %}' : source;
    }

    const classes = attribute(attrs, 'class').split(/\s+/).filter(Boolean);
    if (classes.includes('card') && (tag === 'article' || tag === 'a')) {
      const args = cardGulpArgs(tag, attrs, classes);
      stack.push({ tag, macro: true });
      return `{% call card(${args}) %}`;
    }
    if (tag === 'div' && classes.includes('card_deck')) {
      const columnsClass = classes.find((className) => /^card_deck-[23]$/.test(className));
      const args = columnsClass ? `columns=${columnsClass.slice(-1)}` : '';
      stack.push({ tag, macro: true });
      return `{% call cardDeck(${args}) %}`;
    }
    if (tag === 'div' && classes.length === 1 && classes[0] === 'card_body') {
      stack.push({ tag, macro: true });
      return '{% call cardBody() %}';
    }
    if (tag === 'div' && classes.includes('card_footer')) {
      const between = classes.includes('card_footer-between');
      stack.push({ tag, macro: true });
      return `{% call cardFooter(${between ? 'between=true' : ''}) %}`;
    }
    if (tag === 'div' && classes.includes('tag_group')) {
      const tight = classes.includes('tag_group-tight');
      stack.push({ tag, macro: true });
      return `{% call tagGroup(${tight ? 'tight=true' : ''}) %}`;
    }

    stack.push({ tag, macro: false });
    return source;
  });

  const imports = [
    gulpImport,
    converted.includes('button(') ? gulpButtonImport : '',
    converted.includes('avatar(') ? gulpAvatarImport : '',
    converted.includes('tag(') || converted.includes('tagGroup(') ? gulpTagImport : ''
  ].filter(Boolean);
  return `${imports.join('\n')}\n\n${formatGulpBlocks(converted)}`;
}

function cardExample(key: string, html: string, reactBody: string, vueBody: string): FrameworkExample[] {
  const react = `import { Card, CardBody, CardFooter, CardHeader } from '@uxkm/react/card';\nimport Avatar from '@uxkm/react/avatar';\nimport Button from '@uxkm/react/button';\nimport Stat from '@uxkm/react/stat';\nimport { Tag, TagGroup } from '@uxkm/react/tag';\n\nexport function Example() {\n  return (\n${reactBody}\n  );\n}`;
  const vue = `<script setup>\nimport { Card, CardBody, CardFooter, CardHeader } from '@uxkm/vue/card';\nimport Avatar from '@uxkm/vue/avatar';\nimport Button from '@uxkm/vue/button';\nimport Stat from '@uxkm/vue/stat';\nimport { Tag, TagGroup } from '@uxkm/vue/tag';\n</script>\n\n<template>\n${vueBody}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Card/Card.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Card/card.njk · ${key}`, code: toGulp(html) },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/card · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/card · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/card · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/card · ${key}`, code: react }
  ];
}

const imageIconHtml = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
const docIconHtml = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`;
const boltIconHtml = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;
const shieldIconHtml = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
const moreIconHtml = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

export const cardFrameworkExamples = {
  basic: cardExample('basic', `<article class="card" style="max-width: 360px; width: 100%;">\n  <div class="card_header"><div class="card_header-main"><h3 class="card_title">카드 제목</h3><p class="card_subtitle">부제목 또는 메타 정보</p></div></div>\n  <div class="card_body">카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</div>\n  <div class="card_footer"><button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">확인</span></button><button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button></div>\n</article>`, `    <Card style={{ maxWidth: 360, width: '100%' }}>\n      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />\n      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>\n      <CardFooter><Button variant="filled" color="primary" size="sm" label="확인" /><Button variant="ghost" size="sm" label="취소" /></CardFooter>\n    </Card>`, `  <Card style="max-width: 360px; width: 100%;">\n    <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />\n    <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>\n    <CardFooter><Button variant="filled" color="primary" size="sm" label="확인" /><Button variant="ghost" size="sm" label="취소" /></CardFooter>\n  </Card>`),

  simple: cardExample('simple', `<article class="card card_shadow card_compact" style="max-width: 280px; width: 100%;"><div class="card_body"><p class="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</div></article>\n<article class="card card_compact" style="max-width: 280px; width: 100%;"><div class="card_body">컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</div></article>`, `    <>\n      <Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}><CardBody><p className="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</CardBody></Card>\n      <Card size="compact" style={{ maxWidth: 280, width: '100%' }}><CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody></Card>\n    </>`, `  <Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;"><CardBody><p class="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</CardBody></Card>\n  <Card size="compact" style="max-width: 280px; width: 100%;"><CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody></Card>`),

  skin: cardExample('skin', `<div class="card_deck card_deck-2">\n  <article class="card"><div class="card_body">기본 — 테두리 · 그림자</div></article>\n  <article class="card card_shadow"><div class="card_body">Shadow — 그림자</div></article>\n  <article class="card card_elevated"><div class="card_body">Elevated — 강한 그림자</div></article>\n  <article class="card card_ghost"><div class="card_body">Ghost — 투명 배경</div></article>\n</div>`, `    <div className="card_deck card_deck-2">\n      <Card><CardBody>기본 — 테두리 · 그림자</CardBody></Card>\n      <Card variant="shadow"><CardBody>Shadow — 그림자</CardBody></Card>\n      <Card className="card_elevated"><CardBody>Elevated — 강한 그림자</CardBody></Card>\n      <Card variant="flat"><CardBody>Ghost — 투명 배경</CardBody></Card>\n    </div>`, `  <div class="card_deck card_deck-2">\n    <Card><CardBody>기본 — 테두리 · 그림자</CardBody></Card>\n    <Card variant="shadow"><CardBody>Shadow — 그림자</CardBody></Card>\n    <Card class="card_elevated"><CardBody>Elevated — 강한 그림자</CardBody></Card>\n    <Card variant="flat"><CardBody>Ghost — 투명 배경</CardBody></Card>\n  </div>`),

  size: cardExample('size', `<div class="card_deck card_deck-2">\n  <article class="card card_sm"><div class="card_header"><h3 class="card_title">Small</h3></div><div class="card_body">작은 카드 — 좁은 패딩과 작은 제목.</div></article>\n  <article class="card"><div class="card_header"><h3 class="card_title">Medium</h3></div><div class="card_body">기본 크기 카드입니다.</div></article>\n  <article class="card card_lg"><div class="card_header"><h3 class="card_title">Large</h3></div><div class="card_body">큰 카드 — 넓은 패딩과 큰 제목.</div></article>\n</div>`, `    <div className="card_deck card_deck-2">\n      <Card size="sm"><CardHeader title="Small" /><CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody></Card>\n      <Card><CardHeader title="Medium" /><CardBody>기본 크기 카드입니다.</CardBody></Card>\n      <Card size="lg"><CardHeader title="Large" /><CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody></Card>\n    </div>`, `  <div class="card_deck card_deck-2">\n    <Card size="sm"><CardHeader title="Small" /><CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody></Card>\n    <Card><CardHeader title="Medium" /><CardBody>기본 크기 카드입니다.</CardBody></Card>\n    <Card size="lg"><CardHeader title="Large" /><CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody></Card>\n  </div>`),

  accent: cardExample('accent', `<div class="card_deck card_deck-2">\n  <article class="card card_accent color_primary"><div class="card_body"><p class="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</div></article>\n  <article class="card card_accent color_success"><div class="card_body"><p class="card_title">성공</p>작업이 정상적으로 완료되었습니다.</div></article>\n  <article class="card card_accent color_warning"><div class="card_body"><p class="card_title">주의</p>저장 공간이 부족합니다.</div></article>\n  <article class="card card_accent color_danger"><div class="card_body"><p class="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</div></article>\n</div>`, `    <div className="card_deck card_deck-2">\n      <Card className="card_accent color_primary"><CardBody><p className="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</CardBody></Card>\n      <Card className="card_accent color_success"><CardBody><p className="card_title">성공</p>작업이 정상적으로 완료되었습니다.</CardBody></Card>\n      <Card className="card_accent color_warning"><CardBody><p className="card_title">주의</p>저장 공간이 부족합니다.</CardBody></Card>\n      <Card className="card_accent color_danger"><CardBody><p className="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</CardBody></Card>\n    </div>`, `  <div class="card_deck card_deck-2">\n    <Card class="card_accent color_primary"><CardBody><p class="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</CardBody></Card>\n    <Card class="card_accent color_success"><CardBody><p class="card_title">성공</p>작업이 정상적으로 완료되었습니다.</CardBody></Card>\n    <Card class="card_accent color_warning"><CardBody><p class="card_title">주의</p>저장 공간이 부족합니다.</CardBody></Card>\n    <Card class="card_accent color_danger"><CardBody><p class="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</CardBody></Card>\n  </div>`),

  media: cardExample('media', `<article class="card card_hover card_shadow" style="max-width: 320px; width: 100%;">\n  <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">${imageIconHtml}</div>\n  <div class="card_header"><div class="card_header-main"><div class="card_header-row"><h3 class="card_title">프로젝트 Alpha</h3><span class="tag tag_sm color_primary">진행 중</span></div><p class="card_subtitle">업데이트 · 2일 전</p></div></div>\n  <div class="card_body">디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</div>\n  <div class="card_footer card_footer-between"><span class="color_muted size_sm">3명 참여</span><button type="button" class="btn btn_text color_primary btn_sm"><span class="btn_label">자세히</span></button></div>\n</article>`, `    <Card hoverable variant="shadow" style={{ maxWidth: 320, width: '100%' }} media={<div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">${imageIconHtml.replaceAll('class=', 'className=').replace('stroke-width=', 'strokeWidth=')}</div>}>\n      <CardHeader><div className="card_header-row"><h3 className="card_title">프로젝트 Alpha</h3><Tag size="sm" color="primary" label="진행 중" /></div><p className="card_subtitle">업데이트 · 2일 전</p></CardHeader>\n      <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>\n      <CardFooter between><span className="color_muted size_sm">3명 참여</span><Button variant="text" color="primary" size="sm" label="자세히" /></CardFooter>\n    </Card>`, `  <Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">\n    <template #media><div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">${imageIconHtml}</div></template>\n    <CardHeader><div class="card_header-row"><h3 class="card_title">프로젝트 Alpha</h3><Tag size="sm" color="primary" label="진행 중" /></div><p class="card_subtitle">업데이트 · 2일 전</p></CardHeader>\n    <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>\n    <CardFooter between><span class="color_muted size_sm">3명 참여</span><Button variant="text" color="primary" size="sm" label="자세히" /></CardFooter>\n  </Card>`),

  horizontal: cardExample('horizontal', `<article class="card card_horizontal card_shadow" style="max-width: 480px; width: 100%;">\n  <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">${docIconHtml}</div>\n  <div class="card_inner"><div class="card_header"><h3 class="card_title">가이드 문서</h3></div><div class="card_body">HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</div><div class="card_footer"><a href="#" class="link color_primary size_sm">문서 보기</a></div></div>\n</article>`, `    <Card className="card_horizontal" variant="shadow" style={{ maxWidth: 480, width: '100%' }} media={<div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">${docIconHtml.replaceAll('class=', 'className=').replace('stroke-width=', 'strokeWidth=')}</div>}>\n      <div className="card_inner"><CardHeader title="가이드 문서" /><CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody><CardFooter><a href="#" className="link color_primary size_sm" onClick={(event) => event.preventDefault()}>문서 보기</a></CardFooter></div>\n    </Card>`, `  <Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">\n    <template #media><div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">${docIconHtml}</div></template>\n    <div class="card_inner"><CardHeader title="가이드 문서" /><CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody><CardFooter><a href="#" class="link color_primary size_sm" @click.prevent>문서 보기</a></CardFooter></div>\n  </Card>`),

  iconStat: cardExample('iconStat', `<div class="card_deck">\n  <article class="card card_shadow card_hover"><div class="card_body"><span class="card_icon color_primary" aria-hidden="true">${boltIconHtml}</span><h3 class="card_title">빠른 성능</h3><p class="card_subtitle">가벼운 번들, 빠른 로딩</p></div></article>\n  <article class="card card_shadow card_hover"><div class="card_body"><span class="card_icon color_success" aria-hidden="true">${shieldIconHtml}</span><h3 class="card_title">접근성</h3><p class="card_subtitle">WCAG 2.2 AA 기준</p></div></article>\n  <article class="card card_shadow"><div class="card_body"><div class="stat"><span class="stat_label">월간 활성 사용자</span><span class="stat_value">24.5K</span><span class="stat_desc color_success">+18.2%</span></div></div></article>\n</div>`, `    <div className="card_deck">\n      <Card variant="shadow" hoverable><CardBody><span className="card_icon color_primary" aria-hidden="true">${boltIconHtml.replaceAll('class=', 'className=').replace('stroke-width=', 'strokeWidth=')}</span><h3 className="card_title">빠른 성능</h3><p className="card_subtitle">가벼운 번들, 빠른 로딩</p></CardBody></Card>\n      <Card variant="shadow" hoverable><CardBody><span className="card_icon color_success" aria-hidden="true">${shieldIconHtml.replaceAll('class=', 'className=').replace('stroke-width=', 'strokeWidth=')}</span><h3 className="card_title">접근성</h3><p className="card_subtitle">WCAG 2.2 AA 기준</p></CardBody></Card>\n      <Card variant="shadow"><CardBody><Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trendColor="success" /></CardBody></Card>\n    </div>`, `  <div class="card_deck">\n    <Card variant="shadow" hoverable><CardBody><span class="card_icon color_primary" aria-hidden="true">${boltIconHtml}</span><h3 class="card_title">빠른 성능</h3><p class="card_subtitle">가벼운 번들, 빠른 로딩</p></CardBody></Card>\n    <Card variant="shadow" hoverable><CardBody><span class="card_icon color_success" aria-hidden="true">${shieldIconHtml}</span><h3 class="card_title">접근성</h3><p class="card_subtitle">WCAG 2.2 AA 기준</p></CardBody></Card>\n    <Card variant="shadow"><CardBody><Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trend-color="success" /></CardBody></Card>\n  </div>`),

  profile: cardExample('profile', `<article class="card card_shadow" style="max-width: 320px; width: 100%;">\n  <div class="card_header"><div class="card_header-main"><div class="card_header-row"><span class="avatar color_primary" aria-hidden="true">홍</span><div><h3 class="card_title">홍길동</h3><p class="card_subtitle">프론트엔드 개발자</p></div></div></div><div class="card_extra"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="더 보기">${moreIconHtml}</button></div></div>\n  <div class="card_body"><div class="tag_group tag_group-tight"><span class="tag tag_sm color_primary">React</span><span class="tag tag_sm color_primary">TypeScript</span><span class="tag tag_sm color_default">SCSS</span></div></div>\n  <div class="card_footer card_footer-between"><span class="color_muted size_sm">서울 · 온라인</span><button type="button" class="btn btn_outline color_primary btn_sm"><span class="btn_label">팔로우</span></button></div>\n</article>`, `    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>\n      <CardHeader extra={<Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={${moreIconHtml.replaceAll('class=', 'className=').replace('stroke-width=', 'strokeWidth=')}} />}><div className="card_header-row"><Avatar color="primary" initials="홍" ariaHidden /><div><h3 className="card_title">홍길동</h3><p className="card_subtitle">프론트엔드 개발자</p></div></div></CardHeader>\n      <CardBody><TagGroup tight><Tag size="sm" color="primary" label="React" /><Tag size="sm" color="primary" label="TypeScript" /><Tag size="sm" color="default" label="SCSS" /></TagGroup></CardBody>\n      <CardFooter between><span className="color_muted size_sm">서울 · 온라인</span><Button variant="outline" color="primary" size="sm" label="팔로우" /></CardFooter>\n    </Card>`, `  <Card variant="shadow" style="max-width: 320px; width: 100%;">\n    <CardHeader><template #extra><Button variant="ghost" size="sm" icon-only aria-label="더 보기">${moreIconHtml}</Button></template><div class="card_header-row"><Avatar color="primary" initials="홍" aria-hidden /><div><h3 class="card_title">홍길동</h3><p class="card_subtitle">프론트엔드 개발자</p></div></div></CardHeader>\n    <CardBody><TagGroup tight><Tag size="sm" color="primary" label="React" /><Tag size="sm" color="primary" label="TypeScript" /><Tag size="sm" color="default" label="SCSS" /></TagGroup></CardBody>\n    <CardFooter between><span class="color_muted size_sm">서울 · 온라인</span><Button variant="outline" color="primary" size="sm" label="팔로우" /></CardFooter>\n  </Card>`),

  clickable: cardExample('clickable', `<div class="card_deck card_deck-2">\n  <a href="#" class="card card_clickable card_hover"><div class="card_body"><h3 class="card_title">링크 카드</h3><p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></div></a>\n  <article class="card card_clickable card_hover card_shadow" tabindex="0" role="link"><div class="card_body"><h3 class="card_title">인터랙티브 카드</h3><p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></div></article>\n</div>`, `    <div className="card_deck card_deck-2">\n      <Card tag="a" href="#" hoverable className="card_clickable" onClick={(event) => event.preventDefault()}><CardBody><h3 className="card_title">링크 카드</h3><p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></CardBody></Card>\n      <Card hoverable variant="shadow" className="card_clickable" tabIndex={0} role="link"><CardBody><h3 className="card_title">인터랙티브 카드</h3><p className="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></CardBody></Card>\n    </div>`, `  <div class="card_deck card_deck-2">\n    <Card tag="a" href="#" hoverable class="card_clickable" @click.prevent><CardBody><h3 class="card_title">링크 카드</h3><p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></CardBody></Card>\n    <Card hoverable variant="shadow" class="card_clickable" tabindex="0" role="link"><CardBody><h3 class="card_title">인터랙티브 카드</h3><p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></CardBody></Card>\n  </div>`),

  disabled: cardExample('disabled', `<article class="card is-disabled" style="max-width: 280px; width: 100%;"><div class="card_body"><h3 class="card_title">비활성 카드</h3><p class="card_subtitle">현재 이용할 수 없습니다.</p></div></article>`, `    <Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}><CardBody><h3 className="card_title">비활성 카드</h3><p className="card_subtitle">현재 이용할 수 없습니다.</p></CardBody></Card>`, `  <Card class="is-disabled" style="max-width: 280px; width: 100%;"><CardBody><h3 class="card_title">비활성 카드</h3><p class="card_subtitle">현재 이용할 수 없습니다.</p></CardBody></Card>`),

  grid: cardExample('grid', `<div class="card_deck">\n  <article class="card card_hover"><div class="card_header"><h3 class="card_title">Feature A</h3></div><div class="card_body">빠른 성능과 가벼운 번들 크기.</div></article>\n  <article class="card card_hover"><div class="card_header"><h3 class="card_title">Feature B</h3></div><div class="card_body">접근성을 고려한 마크업 구조.</div></article>\n  <article class="card card_hover"><div class="card_header"><h3 class="card_title">Feature C</h3></div><div class="card_body">Pure SCSS로 커스터마이즈 가능.</div></article>\n</div>`, `    <div className="card_deck">\n      <Card hoverable><CardHeader title="Feature A" /><CardBody>빠른 성능과 가벼운 번들 크기.</CardBody></Card>\n      <Card hoverable><CardHeader title="Feature B" /><CardBody>접근성을 고려한 마크업 구조.</CardBody></Card>\n      <Card hoverable><CardHeader title="Feature C" /><CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody></Card>\n    </div>`, `  <div class="card_deck">\n    <Card hoverable><CardHeader title="Feature A" /><CardBody>빠른 성능과 가벼운 번들 크기.</CardBody></Card>\n    <Card hoverable><CardHeader title="Feature B" /><CardBody>접근성을 고려한 마크업 구조.</CardBody></Card>\n    <Card hoverable><CardHeader title="Feature C" /><CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody></Card>\n  </div>`)
};
