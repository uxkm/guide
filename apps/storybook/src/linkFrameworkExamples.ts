import type { FrameworkExample } from './FrameworkCode';

const avatar = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%228%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2212%22%20r%3D%225%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M7%2029a9%209%200%200%201%2018%200%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E';

const bodies = {
  basic: `<div class="link_row"><Link label="더 보기" /><Link label="가이드 문서" /><Link underline label="항상 밑줄" /></div>`,
  source: `<div class="link_row">
  <Link icon="user" label="프로필" />
  <a class="link color_primary" href="#"><img class="link_media" src="${avatar}" alt="" /> 사용자 정보</a>
  <Link as="button" icon="settings" label="설정 열기" />
</div>`,
  colors: `<div class="link_row"><Link color="primary" label="Primary" /><Link color="muted" label="Muted" /><Link color="success" label="Success" /><Link color="warning" label="Warning" /><Link color="danger" label="Danger" /><Link color="info" label="Info" /></div>`,
  sizes: `<div class="link_row"><Link size="sm" label="Small" /><Link label="Base" /><Link size="lg" label="Large" /><Link size="xl" label="Extra Large" /></div>`,
  styles: `<div class="link_row"><Link label="기본 (hover 밑줄)" /><Link underline label="항상 밑줄" /><Link no-underline label="밑줄 없음" /><Link standalone label="터치 영역 확대" /></div>`,
  navigation: `<nav class="link_group-inline" aria-label="섹션 내비게이션"><Link nav active label="개요" /><Link nav label="컴포넌트" /><Link nav label="토큰" /><Link nav label="접근성" /></nav>
<Link back icon="arrow-left" label="목록으로 돌아가기" />`,
  block: `<div class="link_group"><Link block icon="book" label="가이드 시작하기" /><Link block icon="download" label="파일 다운로드" /><Link block color="muted" icon="settings" label="환경 설정" /></div>`,
  iconOnly: `<div class="link_row"><Link icon-only icon="search" aria-label="검색" /><Link icon-only icon="edit" aria-label="편집" /><Link icon-only color="muted" icon="settings" aria-label="더 보기" /></div>`,
  icons: `<div class="link_row"><Link icon="download" label="다운로드" /><Link icon-after="external" label="외부 링크" /><Link back icon="arrow-left" label="이전 페이지" /></div>`,
  external: `<Link href="https://example.com" target="_blank" rel="noopener noreferrer" icon-after="external" label="외부 사이트 열기 (새 창)" />`,
  disabled: `<div class="link_row"><Link disabled label="비활성 링크" /><Link as="button" disabled label="비활성 버튼형 링크" /></div>`,
  context: `<div class="alert color_info" role="status"><strong>업데이트 안내</strong><p>새 버전의 변경 사항을 확인하세요.</p><Link size="sm" label="릴리스 노트 보기" /></div>
<p>아직 계정이 없나요? <Link label="회원가입" /></p>`
} as const;

type ExampleKey = keyof typeof bodies;
const booleanProps = new Set(['underline', 'no-underline', 'standalone', 'nav', 'block', 'back', 'icon-only', 'active', 'disabled']);

function parseAttrs(source: string) {
  const attrs: Record<string, string | boolean> = {};
  source.replace(/([\w-]+)(?:="([^"]*)")?/g, (_, key: string, value: string | undefined) => {
    attrs[key] = value ?? true;
    return '';
  });
  return attrs;
}

const iconPaths: Record<string, string> = {
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0Z"></path>',
  'arrow-left': '<path d="M19 12H5m7 7-7-7 7-7"></path>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 0 0-5H20"></path>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>',
  search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 13v7H4V6h7"></path>'
};

function htmlIcon(name: string) {
  return `<svg class="link_icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${iconPaths[name] || iconPaths.external}</svg>`;
}

function linkClasses(props: Record<string, string | boolean>) {
  return [
    'link', `color_${props.color || 'primary'}`, props.size && `size_${props.size}`,
    props.underline && 'link_underline', props['no-underline'] && 'link_no-underline',
    props.standalone && 'link_standalone', props.nav && 'link_nav', props.block && 'link_block',
    props.back && 'link_back', props['icon-only'] && 'link_icon-only', props.active && 'is-active',
    props.disabled && 'is-disabled'
  ].filter(Boolean).join(' ');
}

function htmlLink(source: string) {
  const props = parseAttrs(source);
  const tag = String(props.as || 'a');
  const classes = linkClasses(props);
  const label = props['icon-only'] ? '' : String(props.label || '');
  const before = props.icon ? htmlIcon(String(props.icon)) : '';
  const after = props['icon-after'] ? htmlIcon(String(props['icon-after'])) : '';
  const attrs = [
    `class="${classes}"`, 'data-ripple="true"', tag === 'a' ? `href="${props.href || '#'}"` : 'type="button"',
    props.target ? `target="${props.target}"` : '', props.rel ? `rel="${props.rel}"` : '',
    props['aria-label'] ? `aria-label="${props['aria-label']}"` : '', props.active ? 'aria-current="page"' : '',
    props.disabled ? 'aria-disabled="true" tabindex="-1"' : '', tag === 'button' && props.disabled ? 'disabled' : ''
  ].filter(Boolean).join(' ');
  return `<${tag} ${attrs}>${before}${label}${after}</${tag}>`;
}

function toHtml(body: string) {
  return body.replace(/<Link\s+([^>]*?)\s*\/>/g, (_, source: string) => htmlLink(source));
}

function toReact(body: string) {
  return body
    .replace(/class=/g, 'className=')
    .replace(/<Link\s+([^>]*?)\s*\/>/g, (_, source: string) => {
      const props = parseAttrs(source);
      const attrs = Object.entries(props).filter(([key]) => key !== 'icon' && key !== 'icon-after').map(([key, value]) => {
        const camel = key.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());
        return value === true || booleanProps.has(key) && value === 'true' ? camel : `${camel}="${value}"`;
      });
      if (props.icon) attrs.push(`icon={<Icon className="link_icon" name="${props.icon}" />}`);
      if (props['icon-after']) attrs.push(`iconAfter={<Icon className="link_icon" name="${props['icon-after']}" />}`);
      return `<Link ${attrs.join(' ')} />`;
    });
}

function toVue(body: string) {
  return body.replace(/<Link\s+([^>]*?)\s*\/>/g, (_, source: string) => {
    const props = parseAttrs(source);
    const before = props.icon;
    const after = props['icon-after'];
    const attrs = Object.entries(props).filter(([key]) => key !== 'icon' && key !== 'icon-after').map(([key, value]) => value === true || booleanProps.has(key) && value === 'true' ? key : `${key}="${value}"`).join(' ');
    if (!before && !after) return `<Link ${attrs} />`;
    return [`<Link ${attrs}>`, before ? `  <template #icon><Icon class="link_icon" name="${before}" /></template>` : '', after ? `  <template #icon-after><Icon class="link_icon" name="${after}" /></template>` : '', '</Link>'].filter(Boolean).join('\n');
  });
}

function webSquareCode(body: string, key: ExampleKey) {
  const name = `${key[0].toUpperCase()}${key.slice(1)}`;
  let linkSequence = 0;
  let groupSequence = 0;

  let markup = body.replace(/<Link\s+([^>]*?)\s*\/>/g, (_, source: string) => {
    const props = parseAttrs(source);
    const id = `link${name}${++linkSequence}`;
    const classes = linkClasses(props);
    const label = String(props.label ?? props['aria-label'] ?? '링크');
    const iconName = props.icon ?? props['icon-after'];
    const iconNote = iconName
      ? `<!-- 아이콘 ${iconName}: 프로젝트 이미지 또는 CSS 리소스에 연결 -->\n`
      : '';

    if (props.as === 'button') {
      return `${iconNote}<xf:trigger\n  type="button"\n  id="${id}"\n  class="${classes}"${props.disabled ? '\n  disabled="true"' : '\n  ev:onclick="scwin.linkAction_onclick"'}>\n  <xf:label><![CDATA[${label}]]></xf:label>\n</xf:trigger>`;
    }

    const attributes = [
      `id="${id}"`,
      'outerDiv="false"',
      `href="${props.href || '#'}"`,
      props.target ? `target="${props.target}"` : '',
      `class="${classes}"`,
      props.disabled ? 'disabled="true"' : '',
      props['aria-label'] ? `title="${props['aria-label']}"` : ''
    ].filter(Boolean).join('\n  ');
    const securityNote = props.target === '_blank' && props.rel
      ? '<!-- 새 창 opener 정책은 WebSquare 프로젝트의 공통 보안 설정을 확인합니다. -->\n'
      : '';
    return `${iconNote}${securityNote}<w2:anchor\n  ${attributes}>\n  <xf:label><![CDATA[${label}]]></xf:label>\n</w2:anchor>`;
  });

  markup = markup.replace(/<(\/)?div\b([^>]*)>/g, (_tag, closing: string, source: string) => {
    if (closing) return '</w2:group>';
    const className = source.match(/\sclass="([^"]*)"/)?.[1] ?? '';
    return `<w2:group\n  id="link${name}Group${++groupSequence}"${className ? `\n  class="${className}"` : ''}>`;
  });

  return `<w2:group id="link${name}Example">
${markup.split('\n').map((line) => `  ${line}`).join('\n')}
</w2:group>`;
}

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = toHtml(body);
  const react = toReact(body);
  const vue = toVue(body);
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/basic/Link/Link.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/basic/Link/link.njk · ${key}`, code: `{# Link · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/link → apps/vue/src/components/basic/Link/Link.vue · ${key}`, code: `<script setup>\nimport Link from '@uxkm/vue/link';\nimport Icon from '@uxkm/vue/icon';\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>` },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/link → apps/vue/src/components/basic/Link/Link.vue · ${key}`, code: `<script setup>\nimport Link from '@uxkm/vue/link';\nimport Icon from '@uxkm/vue/icon';\n</script>\n\n<template>\n${vue.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>` },
    { id: 'react', label: 'React', fileName: `@uxkm/react/link → apps/react/src/components/basic/Link/Link.jsx · ${key}`, code: `import Link from '@uxkm/react/link';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${react.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}` },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/link → apps/react/src/components/basic/Link/Link.jsx · ${key}`, code: `import Link from '@uxkm/react/link';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${react.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}` },
    { id: 'websquare', label: 'WebSquare', fileName: `Link.xml · ${key}`, code: webSquareCode(body, key) }
  ];
}

export const linkFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;
