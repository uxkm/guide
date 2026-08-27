import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as ee,m as u,n as d,o as f,p as te,r as ne,s as p,t as re,u as m}from"./Typography.stories-C1x0ICGo.js";import{i as h,r as ie}from"./react-BBfuIdny.js";import{c as g,r as _,u as v}from"./blocks-DbhChoan.js";import{i as y,n as b,r as x,t as ae}from"./ComponentApiDocs-arf-yre-.js";var S;function C(){return(C=e((()=>{S=`<!-- Typography 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
<!-- 제목은 h1~h5와 typo_title-*를 같은 단계로 맞춥니다. -->
<h1 class="typo_title-1" data-component="TypoTitle">제목 레벨 1</h1>
<h3 class="typo_title-3" data-component="TypoTitle">제목 레벨 3</h3>

<!-- 본문·강조·보조 텍스트는 시맨틱 태그와 typo_* 클래스를 조합합니다. -->
<p data-component="TypoText">기본 본문 텍스트입니다.</p>
<p class="typo_paragraph" data-component="TypoText">단락 간격이 있는 본문입니다.</p>
<strong class="typo_strong" data-component="TypoText">강조 텍스트</strong>
<span class="color_muted" data-component="TypoText">보조 설명</span>

<!-- 말줄임은 text_ellipsis · text_ellipsis-2 · text_ellipsis-3를 사용합니다. -->
<p class="text_ellipsis" data-component="TypoText">한 줄로 말줄임되는 긴 본문입니다.</p>`})))()}var w;function T(){return(T=e((()=>{w=`{# Typography 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. #}
{# 제목은 h1~h5와 typo_title-*를 같은 단계로 맞춥니다. #}
<h1 class="typo_title-1" data-component="TypoTitle">제목 레벨 1</h1>
<h3 class="typo_title-3" data-component="TypoTitle">제목 레벨 3</h3>

{# 본문·강조·보조 텍스트는 시맨틱 태그와 typo_* 클래스를 조합합니다. #}
<p data-component="TypoText">기본 본문 텍스트입니다.</p>
<p class="typo_paragraph" data-component="TypoText">단락 간격이 있는 본문입니다.</p>
<strong class="typo_strong" data-component="TypoText">강조 텍스트</strong>
<span class="color_muted" data-component="TypoText">보조 설명</span>

{# 말줄임은 text_ellipsis · text_ellipsis-2 · text_ellipsis-3를 사용합니다. #}
<p class="text_ellipsis" data-component="TypoText">한 줄로 말줄임되는 긴 본문입니다.</p>`})))()}var E;function D(){return(D=e((()=>{E=`/**
 * Typography 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// TypoTitle이 허용하는 제목 단계입니다.
const TITLE_LEVELS = new Set([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']);

// variant별 기본 시맨틱 태그와 typo_* 클래스 매핑입니다.
const VARIANTS = {
  text: { tag: 'p', className: '' },
  paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' },
  caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' },
  overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' },
  kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' },
  strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' },
  underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' },
  mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' },
  sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' },
  link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' },
};

export function TypoTitle({
  level = 1, // 1~5 제목 단계입니다. 허용되지 않으면 1로 되돌립니다.
  color, // color_* 공통 색상 클래스입니다.
  label, // children이 없을 때 표시할 텍스트입니다.
  children, // 제목 콘텐츠입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const resolvedLevel = TITLE_LEVELS.has(level) ? Number(level) : 1;
  const Tag = \`h\${resolvedLevel}\`;
  const classes = [\`typo_title-\${resolvedLevel}\`, color && \`color_\${color}\`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag className={classes} data-component="TypoTitle" {...props}>
      {children ?? label}
    </Tag>
  );
}

export function TypoText({
  variant = 'text', // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  tag, // 기본 시맨틱 태그 대신 사용할 루트 태그입니다.
  color, // color_* 공통 색상 클래스입니다.
  size = '', // xs · sm · lg · xl 텍스트 크기입니다.
  ellipsis, // 1·2·3줄 말줄임 클래스를 적용합니다.
  href, // link 변형의 주소입니다.
  htmlFor, // label 변형의 for 연결입니다.
  cite, // blockquote 인용 출처입니다.
  label, // children이 없을 때 표시할 텍스트입니다.
  children, // 제목 또는 본문 콘텐츠입니다.
  className = '', // 추가 클래스입니다.
  onClick, // 클릭 핸들러입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const config = VARIANTS[variant] ?? VARIANTS.text;
  const Tag = tag || config.tag;
  const lines = Number(ellipsis);
  const ellipsisClass =
    lines === 1 ? 'text_ellipsis' : lines === 2 || lines === 3 ? \`text_ellipsis-\${lines}\` : '';
  const sizeClass = ['xs', 'sm', 'lg', 'xl'].includes(size) ? \`size_\${size}\` : '';
  const classes = [config.className, color && \`color_\${color}\`, sizeClass, ellipsisClass, className]
    .filter(Boolean)
    .join(' ');

  function handleClick(event) {
    if (variant === 'link' && !href) event.preventDefault();
    onClick?.(event);
  }

  return (
    <Tag
      className={classes || undefined}
      cite={variant === 'blockquote' ? cite : undefined}
      data-component="TypoText"
      href={variant === 'link' ? href || '#' : undefined}
      htmlFor={variant === 'label' ? htmlFor : undefined}
      onClick={variant === 'link' ? handleClick : onClick}
      {...props}
    >
      {children ?? label}
    </Tag>
  );
}

export const Typography = TypoText;
export default TypoText;
`})))()}var O;function k(){return(k=e((()=>{O=`<!--
  Typography 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmTypoText' });

const VARIANTS = {
  text: { tag: 'p', className: '' },
  paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' },
  caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' },
  overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' },
  kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' },
  strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' },
  underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' },
  mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' },
  sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' },
  link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' },
};

const props = defineProps({
  variant: { type: String, default: 'text' }, // 텍스트 변형 키입니다.
  tag: String, // 루트 태그입니다.
  color: String, // color_* 공통 색상 클래스입니다.
  size: { // 텍스트 크기입니다.
    type: String,
    default: '',
    validator: (value) => ['', 'xs', 'sm', 'lg', 'xl'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  ellipsis: { type: [Number, String], default: undefined }, // 말줄임 줄 수입니다.
  href: String, // link 변형의 주소입니다.
  htmlFor: String, // label 변형의 for입니다.
  cite: String, // blockquote 인용 출처입니다.
  label: String, // 기본 slot이 없을 때 표시할 텍스트입니다.
});

const emit = defineEmits(['click']);
const config = computed(() => VARIANTS[props.variant] ?? VARIANTS.text);
const rootTag = computed(() => props.tag || config.value.tag);
const classes = computed(() => {
  const lines = Number(props.ellipsis);
  return [
    config.value.className,
    props.color && \`color_\${props.color}\`,
    props.size && \`size_\${props.size}\`,
    lines === 1 ? 'text_ellipsis' : [2, 3].includes(lines) ? \`text_ellipsis-\${lines}\` : '',
  ].filter(Boolean);
});

function handleClick(event) {
  if (props.variant === 'link' && !props.href) event.preventDefault();
  emit('click', event);
}
<\/script>

<template>
  <component
    :is="rootTag"
    :class="classes"
    :cite="variant === 'blockquote' ? cite : undefined"
    data-component="TypoText"
    :for="variant === 'label' ? htmlFor : undefined"
    :href="variant === 'link' ? href || '#' : undefined"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
`})))()}function A(e){let t={};return e.replace(/([\w-]+)="([^"]*)"/g,(e,n,r)=>(t[n]=r,``)),t}function oe(e,t){let n=A(e),r=n.variant||`text`,i=F[r]||F.text,a=n.tag||i.tag,o=Number(n.ellipsis),s=[i.className,n.color&&`color_${n.color}`,n.size&&`size_${n.size}`,o===1?`text_ellipsis`:[2,3].includes(o)?`text_ellipsis-${o}`:``].filter(Boolean),c=[s.length?`class="${s.join(` `)}"`:``,r===`link`?`href="${n.href||`#`}"`:``,r===`label`&&n[`html-for`]?`for="${n[`html-for`]}"`:``,r===`blockquote`&&n.cite?`cite="${n.cite}"`:``].filter(Boolean).join(` `);return`<${a}${c?` ${c}`:``}>${t}</${a}>`}function se(e){let t=e.replace(/<TypoTitle\s*([^>]*)>([\s\S]*?)<\/TypoTitle>/g,(e,t,n)=>{let r=A(t),i=[1,2,3,4,5].includes(Number(r.level))?Number(r.level):1;return`<h${i} class="${[`typo_title-${i}`,r.color&&`color_${r.color}`].filter(Boolean).join(` `)}">${n}</h${i}>`});return t=t.replace(/<TypoText\s*([^>]*)>([\s\S]*?)<\/TypoText>/g,(e,t,n)=>oe(t,n)),t}function j(e){return`import { TypoText, TypoTitle } from '@uxkm/react/typography';\n\nexport function Example() {\n  return (\n  <>\n${e.replace(/class=/g,`className=`).replace(/html-for=/g,`htmlFor=`).replace(/style="max-width: 320px; width: 100%;"/g,`style={{ maxWidth: 320, width: '100%' }}`).split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`}function ce(e){return`<script setup>\nimport { TypoText, TypoTitle } from '@uxkm/vue/typography';\n<\/script>\n\n<template>\n${e.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`}function M(e){return e.replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[\da-f]+;)/gi,`&amp;`).replace(/"/g,`&quot;`)}function le(e,t){let n=`${t[0].toUpperCase()}${t.slice(1)}`,r=0,i=0;return`<w2:group
  id="typography${n}Example">
${e.split(`
`).map(e=>e.replace(RegExp(`^(\\s*)<(h[1-5]|p|span|strong|em|del|mark|sub|sup|small|code|kbd|pre|label|a)([^>]*)>([^<]*)</\\2>\\s*$`),(e,t,i,a,o)=>{let s=A(a),c=a.match(/\sclass="([^"]*)"/)?.[1]??``,l=`typo${n}${++r}`;return i===`a`?`<w2:anchor\n  id="${l}"\n  outerDiv="false"\n  href="${M(s.href||`#`)}"${c?`\n  class="${c}"`:``}>\n  <xf:label><![CDATA[${o}]]></xf:label>\n</w2:anchor>`.split(`
`).map(e=>`${t}${e}`).join(`
`):`<w2:textbox\n  ${[`id="${l}"`,`tagname="${i}"`,c?`class="${c}"`:``,i===`label`&&s.for?`for="${s.for}"`:``,`label="${M(o)}"`].filter(Boolean).join(`
  `)}></w2:textbox>`.split(`
`).map(e=>`${t}${e}`).join(`
`)})).join(`
`).replace(/<(\/)?div\b([^>]*)>/g,(e,t,r)=>{if(t)return`</w2:group>`;let a=r.match(/\sclass="([^"]*)"/)?.[1]??``,o=r.match(/\sstyle="([^"]*)"/)?.[1]??``;return`<w2:group\n  id="typo${n}Group${++i}"${a?`\n  class="${a}"`:``}${o?`\n  style="${o}"`:``}>`}).split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function ue(e){let t=P[e],n=se(t),r=j(t),i=ce(t);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Typography/Typography.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Typography/typography.njk · ${e}`,code:`{# Typography · ${e} #}\n${n}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/typography → apps/vue/src/components/basic/Typography · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/typography → apps/vue/src/components/basic/Typography · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/typography → apps/react/src/components/basic/Typography · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/typography → apps/react/src/components/basic/Typography · ${e}`,code:r},{id:`websquare`,label:`WebSquare`,fileName:`Typography.xml · ${e}`,code:le(n,e)}]}var N,P,F,I;function L(){return(L=e((()=>{C(),T(),D(),k(),N=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Typography/Typography.html`,code:S},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Typography/typography.njk`,code:w},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/basic/Typography/Typography.vue`,code:O},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/typography → Typography.vue`,code:O},{id:`react`,label:`React`,fileName:`apps/react/src/components/basic/Typography/Typography.jsx`,code:E},{id:`next`,label:`Next`,fileName:`@uxkm/react/typography → Typography.jsx`,code:E}],P={titles:`<div class="typo_stack-lg">
  <TypoTitle level="1">h1. 제목 레벨 1</TypoTitle>
  <TypoTitle level="2">h2. 제목 레벨 2</TypoTitle>
  <TypoTitle level="3">h3. 제목 레벨 3</TypoTitle>
  <TypoTitle level="4">h4. 제목 레벨 4</TypoTitle>
  <TypoTitle level="5">h5. 제목 레벨 5</TypoTitle>
</div>`,body:`<p>기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted">보조 설명</TypoText>을 함께 쓸 수 있습니다.</p>
<div>
  <TypoText variant="paragraph">typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.</TypoText>
  <TypoText variant="paragraph">두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.</TypoText>
</div>`,colors:`<div class="typo_stack">
  <TypoText color="default">기본 텍스트 (Default)</TypoText>
  <TypoText color="muted">보조 텍스트 (Muted)</TypoText>
  <TypoText color="success">성공 메시지 (Success)</TypoText>
  <TypoText color="warning">주의 메시지 (Warning)</TypoText>
  <TypoText color="danger">오류 메시지 (Danger)</TypoText>
  <TypoText color="primary">강조 텍스트 (Primary)</TypoText>
</div>`,sizes:`<div class="typo_stack">
  <TypoText size="xs">Extra Small — 0.75rem</TypoText>
  <TypoText size="sm">Small — 0.8125rem</TypoText>
  <TypoText>Base — 0.875rem (기본)</TypoText>
  <TypoText size="lg">Large — 1rem</TypoText>
  <TypoText size="xl">Extra Large — 1.125rem</TypoText>
</div>`,styles:`<p>
  <TypoText variant="strong">굵은 텍스트</TypoText>와
  <TypoText variant="italic">기울임 텍스트</TypoText>,
  <TypoText variant="underline">밑줄 텍스트</TypoText>,
  <TypoText variant="delete">취소선 텍스트</TypoText>를 함께 사용할 수 있습니다.
</p>
<p><TypoText variant="mark">형광펜 강조</TypoText>와 <TypoText variant="code">inline code</TypoText> 표현도 지원합니다.</p>`,subSup:`<p>화학식 H<TypoText variant="sub">2</TypoText>O, 수식 x<TypoText variant="sup">2</TypoText> + y<TypoText variant="sup">2</TypoText> = z<TypoText variant="sup">2</TypoText></p>
<p><TypoText variant="small">※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.</TypoText></p>`,ellipsis:`<div style="max-width: 320px; width: 100%;">
  <TypoText ellipsis="1">1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.</TypoText>
  <TypoText ellipsis="2">2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다.</TypoText>
  <TypoText ellipsis="3">3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지합니다.</TypoText>
</div>`,quote:`<TypoText variant="blockquote" color="muted" cite="https://example.com">좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.</TypoText>`,lists:`<ul class="typo_list">
  <li>디자인 토큰 정의</li><li>컴포넌트 문서화</li><li>접근성 검토</li>
</ul>
<ol class="typo_list-ordered">
  <li>요구사항 분석</li><li>와이어프레임 작성</li><li>프로토타입 검증</li>
</ol>`,links:`<p class="typo_paragraph">자세한 내용은 <TypoText variant="link" href="#">가이드 문서</TypoText>를 참고하세요. <TypoText tag="span" color="muted">또는</TypoText> <TypoText variant="link" href="#" size="sm">작은 링크</TypoText>로 이동할 수 있습니다.</p>`,supporting:`<div class="typo_stack-lg">
  <TypoText variant="overline">가이드 소개</TypoText>
  <TypoTitle level="3">UXKM Components</TypoTitle>
  <TypoText variant="lead">UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.</TypoText>
  <TypoText variant="caption">마지막 업데이트: 2026-08-11</TypoText>
  <TypoText variant="label" html-for="typography-email">이메일</TypoText>
  <input id="typography-email" class="input" type="email" placeholder="name@example.com" />
</div>`,titleColors:`<div class="typo_stack">
  <TypoTitle level="3" color="primary">Primary 제목</TypoTitle>
  <TypoTitle level="3" color="success">Success 제목</TypoTitle>
  <TypoTitle level="3" color="danger">Danger 제목</TypoTitle>
  <TypoTitle level="3" color="muted">Muted 제목</TypoTitle>
</div>`,keyboard:`<p>저장하려면 <TypoText variant="kbd">⌘</TypoText> + <TypoText variant="kbd">S</TypoText>를 누르세요. 검색은 <TypoText variant="kbd">Ctrl</TypoText> + <TypoText variant="kbd">K</TypoText>입니다.</p>
<TypoText variant="pre"><code>&lt;button class="btn btn_filled color_primary"&gt;저장&lt;/button&gt;</code></TypoText>`,nestedLists:`<ul class="typo_list">
  <li>레이아웃<ul class="typo_list"><li>Container</li><li>Grid</li></ul></li>
  <li>기본 요소<ul class="typo_list"><li>Button</li><li>Typography</li></ul></li>
</ul>`,stack:`<div class="typo_stack-lg">
  <TypoTitle level="3">섹션 제목</TypoTitle>
  <TypoText variant="paragraph">typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다.</TypoText>
  <TypoText color="muted" size="sm">마지막 업데이트: 2026-08-11</TypoText>
</div>
<div class="typo_stack">
  <TypoTitle level="4">작은 스택</TypoTitle>
  <TypoText color="muted">typo_stack은 좁은 간격으로 제목·설명을 묶습니다.</TypoText>
</div>`},F={text:{tag:`p`,className:``},paragraph:{tag:`p`,className:`typo_paragraph`},lead:{tag:`p`,className:`typo_lead`},caption:{tag:`p`,className:`typo_caption`},label:{tag:`label`,className:`typo_label`},overline:{tag:`p`,className:`typo_overline`},code:{tag:`code`,className:`typo_code`},kbd:{tag:`kbd`,className:`typo_kbd`},pre:{tag:`pre`,className:`typo_pre`},strong:{tag:`strong`,className:`typo_strong`},italic:{tag:`em`,className:`typo_italic`},underline:{tag:`span`,className:`typo_underline`},delete:{tag:`del`,className:`typo_delete`},mark:{tag:`mark`,className:`typo_mark`},sub:{tag:`sub`,className:`typo_sub`},sup:{tag:`sup`,className:`typo_sup`},small:{tag:`small`,className:`typo_small`},link:{tag:`a`,className:`typo_link`},blockquote:{tag:`blockquote`,className:`typo_blockquote`}},I=Object.fromEntries(Object.keys(P).map(e=>[e,ue(e)]))})))()}var R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{R=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],z=[{name:`level`,type:`1 | 2 | 3 | 4 | 5`,default:`1`,description:`제목 레벨. h1~h5 태그와 typo_title-* 클래스를 함께 결정합니다.`},{name:`color`,type:`string`,default:`—`,description:`공통 color_* 색상 클래스입니다.`},{name:`label`,type:`string`,default:`—`,description:`제목 텍스트. children 또는 기본 슬롯으로 대체할 수 있습니다.`},{name:`className`,type:`string`,default:`''`,description:`React 제목 루트에 추가할 클래스입니다.`}],B=[{name:`variant`,type:`'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'`,default:`text`,description:`텍스트 스타일과 기본 시맨틱 태그를 결정합니다.`},{name:`tag`,type:`string`,default:`—`,description:`variant의 기본 루트 HTML 태그를 대체합니다.`},{name:`color`,type:`string`,default:`—`,description:`공통 color_* 색상 클래스입니다.`},{name:`size`,type:`'xs' | 'sm' | 'lg' | 'xl'`,default:`—`,description:`공통 size_* 크기 클래스입니다.`},{name:`ellipsis`,type:`1 | 2 | 3`,default:`—`,description:`말줄임 줄 수. text_ellipsis 계열 클래스를 적용합니다.`},{name:`href`,type:`string`,default:`—`,description:`link variant의 이동 경로입니다.`},{name:`htmlFor`,type:`string`,default:`—`,description:`label variant의 for 속성입니다.`},{name:`cite`,type:`string`,default:`—`,description:`blockquote variant의 출처 URL입니다.`},{name:`label`,type:`string`,default:`—`,description:`텍스트 내용. children 또는 기본 슬롯으로 대체할 수 있습니다.`},{name:`className`,type:`string`,default:`''`,description:`React 텍스트 루트에 추가할 클래스입니다.`}],V=z.map(e=>e.name===`className`?{...e,name:`class`,description:`Vue 제목 루트에 추가할 클래스입니다.`}:e),H=B.map(e=>e.name===`htmlFor`?{...e,name:`html-for`}:e.name===`className`?{...e,name:`class`,description:`Vue 텍스트 루트에 추가할 클래스입니다.`}:e),U=[{name:`children / default`,type:`ReactNode / slot`,default:`label`,description:`제목 콘텐츠이며 label prop보다 우선합니다.`}],W=[{name:`children / default`,type:`ReactNode / slot`,default:`label`,description:`텍스트 콘텐츠이며 중첩 TypoText 등 복합 인라인 마크업에 사용할 수 있습니다.`}],G=[{name:`h1~h5`,type:`element`,default:`—`,description:`문서 구조에 맞는 시맨틱 제목 태그에 동일 레벨 typo_title-*를 적용합니다.`},{name:`p · strong · em · del · mark · sub · sup · small`,type:`element`,default:`—`,description:`표현 의도와 맞는 네이티브 태그를 사용합니다.`},{name:`href · for · cite`,type:`attribute`,default:`—`,description:`링크·레이블·인용문에 대응하는 네이티브 속성입니다.`}],K=[{name:`w2:textbox`,type:`component`,default:`—`,description:`자식 요소가 없는 제목·본문·인라인 텍스트를 표시합니다.`},{name:`label`,type:`string`,default:`—`,description:`고정 텍스트를 지정합니다. 동적 데이터는 ref 또는 setValue()로 연결합니다.`},{name:`tagname`,type:`HTML tag`,default:`div`,description:`h1~h5, p, span, strong, em, code, kbd 등 텍스트의 시맨틱 태그를 지정합니다.`},{name:`class`,type:`styleclass`,default:`—`,description:`공통 Typography·색상·크기 클래스를 적용합니다.`},{name:`for`,type:`string`,default:`—`,description:`레이블과 입력 컴포넌트를 연결하며 렌더링 태그를 label로 설정합니다.`},{name:`w2:group / XHTML`,type:`structure`,default:`—`,description:`Textbox가 자식을 가질 수 없으므로 인라인 혼합 콘텐츠와 중첩 목록은 group 또는 XML 호환 XHTML 구조로 작성합니다.`},{name:`w2:anchor + xf:label`,type:`component`,default:`—`,description:`Typography의 link variant를 WebSquare 링크 컴포넌트로 표현합니다.`},{name:`setValue(value)`,type:`method`,default:`—`,description:`실행 중 Textbox 표시 텍스트를 변경합니다.`}],q=[{name:`typo_title-1 ~ typo_title-5`,type:`class`,default:`—`,description:`제목 스케일`},{name:`typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline`,type:`class`,default:`—`,description:`본문·보조 텍스트`},{name:`typo_strong · typo_italic · typo_underline · typo_delete · typo_mark`,type:`class`,default:`—`,description:`인라인 강조`},{name:`typo_sub · typo_sup · typo_small`,type:`class`,default:`—`,description:`아래첨자·위첨자·보조 소문자`},{name:`typo_link`,type:`class`,default:`—`,description:`본문 안 인라인 링크`},{name:`typo_code · typo_kbd · typo_pre`,type:`class`,default:`—`,description:`인라인 코드·키보드 키·코드 블록`},{name:`typo_blockquote`,type:`class`,default:`—`,description:`인용 블록`},{name:`typo_list · typo_list-ordered`,type:`class`,default:`—`,description:`본문 prose 비순서·순서 목록`},{name:`typo_stack · typo_stack-lg`,type:`class`,default:`—`,description:`제목과 본문의 수직 간격`},{name:`text_ellipsis · text_ellipsis-2 · text_ellipsis-3`,type:`class`,default:`—`,description:`1~3줄 말줄임`},{name:`size_xs · size_sm · size_lg · size_xl`,type:`class`,default:`—`,description:`텍스트 크기`},{name:`color_*`,type:`class`,default:`—`,description:`공통 색상 유틸리티`}],J=[{name:`--typo-title-1-size · … · --typo-title-5-size`,type:`length`,default:`2.375rem · 1.875rem · 1.5rem · 1.25rem · 1rem`,description:`제목 레벨별 크기`},{name:`--typo-title-1-weight · … · --typo-title-5-weight`,type:`font-weight`,default:`700 · 700 · 600 · 600 · 600`,description:`제목 레벨별 굵기`},{name:`--typo-title-1-line-height · … · --typo-title-5-line-height`,type:`number`,default:`1.2 · 1.25 · 1.3 · 1.35 · 1.4`,description:`제목 레벨별 줄높이`},{name:`--typo-text-line-height`,type:`number`,default:`1.6`,description:`단락·목록·인용문 줄높이`},{name:`--typo-paragraph-gap · --typo-list-gap`,type:`length`,default:`var(--space-md) · var(--space-xs)`,description:`단락·목록 항목 간격`},{name:`--typo-mark-bg`,type:`color`,default:`rgba(250, 219, 20, 0.35)`,description:`형광펜 배경`},{name:`--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset`,type:`length`,default:`0.75em · -0.25em · -0.5em`,description:`아래·위첨자 크기와 오프셋`},{name:`--typo-lead-size · --typo-caption-size · --typo-label-size`,type:`length`,default:`var(--text-size-lg) · var(--text-size-xs) · var(--text-size-sm)`,description:`리드·캡션·레이블 크기`},{name:`--typo-kbd-padding-y · --typo-kbd-padding-x`,type:`length`,default:`0.15em · 0.4em`,description:`키보드 키 패딩`},{name:`--typo-pre-padding · --typo-pre-radius`,type:`length`,default:`var(--space-md) · var(--radius-md)`,description:`코드 블록 패딩과 모서리`}],Y=[{title:`React · Next.js API · TypoTitle Props`,description:"Next.js는 `@uxkm/react/typography`를 재사용합니다.",tables:[{columns:R,rows:z}]},{title:`React · Next.js API · TypoText Props`,tables:[{columns:R,rows:B}]},{title:`React · Next.js API · Children`,tables:[{columns:R,rows:[...U,...W]}]},{title:`Vue · Nuxt API · TypoTitle Props`,description:"Nuxt는 `@uxkm/vue/typography`를 재사용합니다.",tables:[{columns:R,rows:V}]},{title:`Vue · Nuxt API · TypoText Props`,tables:[{columns:R,rows:H}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:R,rows:[...U,...W]}]},{title:`HTML · Gulp API · Markup`,description:`HTML과 Gulp는 시맨틱 태그에 공통 OOCSS 클래스를 직접 적용합니다.`,tables:[{columns:R,rows:G}]},{title:`WebSquare API · XML`,description:`단일 텍스트는 w2:textbox와 tagname으로 시맨틱을 유지하고, 자식 구조가 필요한 콘텐츠는 w2:group 또는 XHTML을 사용합니다.`,tables:[{columns:R,rows:K}]},{title:`공통 API · 클래스`,tables:[{columns:R,rows:q}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:R,rows:J}]}]})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...h(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(g,{of:s}),`
`,(0,Q.jsx)(t.h1,{id:`typography`,children:`Typography`}),`
`,(0,Q.jsx)(t.p,{children:`제목, 본문, 강조, 말줄임 등 텍스트 표현에 일관된 위계와 시맨틱 태그를 적용하는 컴포넌트입니다.`}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/typography`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/typography`}),`의 `,(0,Q.jsx)(t.code,{children:`TypoTitle`}),`·`,(0,Q.jsx)(t.code,{children:`TypoText`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 자식 요소가 없는 제목과 텍스트를 `,(0,Q.jsx)(t.code,{children:`w2:textbox`}),`로 표현하고, `,(0,Q.jsx)(t.code,{children:`tagname`}),`에 `,(0,Q.jsx)(t.code,{children:`h1`}),`·`,(0,Q.jsx)(t.code,{children:`p`}),`·`,(0,Q.jsx)(t.code,{children:`span`}),`·`,(0,Q.jsx)(t.code,{children:`strong`}),` 등의 시맨틱 태그를 지정합니다. Textbox는 자식 컴포넌트를 가질 수 없으므로 인라인 혼합 콘텐츠와 중첩 목록은 `,(0,Q.jsx)(t.code,{children:`w2:group`}),` 또는 XML 호환 XHTML 구조를 유지합니다. 각 예시의 WebSquare 탭은 화면 루트의 공통 네임스페이스를 상속합니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`TypoTitle`}),`과 `,(0,Q.jsx)(t.code,{children:`TypoText`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 시맨틱 태그와 공통 CSS 클래스로 변환하고, HTML과 Gulp는 같은 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`TypoTitle`}),`의 `,(0,Q.jsx)(t.code,{children:`level`}),`은 1~5만 허용하며 `,(0,Q.jsx)(t.code,{children:`h1`}),`~`,(0,Q.jsx)(t.code,{children:`h5`}),`와 `,(0,Q.jsx)(t.code,{children:`typo_title-*`}),`를 같은 단계로 맞춥니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`TypoText`}),`의 `,(0,Q.jsx)(t.code,{children:`variant`}),`는 기본 태그와 `,(0,Q.jsx)(t.code,{children:`typo_*`}),` 클래스를 선택합니다. `,(0,Q.jsx)(t.code,{children:`tag`}),`로 루트 요소를 덮어쓸 수 있습니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`color`}),`·`,(0,Q.jsx)(t.code,{children:`size`}),`·`,(0,Q.jsx)(t.code,{children:`ellipsis`}),`는 공통 색상·크기·말줄임 클래스로 변환됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`link`}),`·`,(0,Q.jsx)(t.code,{children:`label`}),`·`,(0,Q.jsx)(t.code,{children:`blockquote`}),` variant는 각각 `,(0,Q.jsx)(t.code,{children:`href`}),`·`,(0,Q.jsx)(t.code,{children:`htmlFor`}),`·`,(0,Q.jsx)(t.code,{children:`cite`}),`를 루트에 전달합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[`React의 `,(0,Q.jsx)(t.code,{children:`children`}),` 또는 Vue의 기본 slot과 `,(0,Q.jsx)(t.code,{children:`label`}),`은 텍스트 콘텐츠로 사용됩니다.`]}),`
`]}),`
`,(0,Q.jsx)(x,{examples:N,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[`고정 문구는 `,(0,Q.jsx)(t.code,{children:`label`}),`, 동적 문구는 DataCollection `,(0,Q.jsx)(t.code,{children:`ref`}),` 또는 `,(0,Q.jsx)(t.code,{children:`setValue()`}),`로 연결합니다. 제목 단계는 화면의 시각적 크기가 아니라 문서 구조에 맞춰 `,(0,Q.jsx)(t.code,{children:`tagname="h1"`}),`부터 `,(0,Q.jsx)(t.code,{children:`h5`}),`까지 선택하고 같은 단계의 `,(0,Q.jsx)(t.code,{children:`typo_title-*`}),` 클래스를 적용합니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`제목`,children:`제목`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`typo_title-1`}),`부터 `,(0,Q.jsx)(t.code,{children:`typo_title-5`}),`까지 5단계 제목 스케일을 제공합니다. 문서 구조에 맞는 동일 레벨의 시맨틱 heading 태그를 사용합니다.`]}),`
`,(0,Q.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.titles}),`
`,(0,Q.jsx)(t.h2,{id:`본문`,children:`본문`}),`
`,(0,Q.jsxs)(t.p,{children:[`기본 본문은 별도 클래스 없이 `,(0,Q.jsx)(t.code,{children:`p`}),`를 사용합니다. 단락 사이의 간격이 필요하면 `,(0,Q.jsx)(t.code,{children:`typo_paragraph`}),`를 적용합니다.`]}),`
`,(0,Q.jsx)(_,{of:re,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.body}),`
`,(0,Q.jsx)(t.h2,{id:`색상-타입`,children:`색상 타입`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`color_muted`}),`, `,(0,Q.jsx)(t.code,{children:`color_success`}),` 등 공통 색상 클래스를 사용합니다. 다른 컴포넌트에서도 같은 색상 계약을 공유합니다.`]}),`
`,(0,Q.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.colors}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsxs)(t.p,{children:[`base는 별도 클래스 없이 적용되며 xs, sm, lg, xl은 각각 공통 `,(0,Q.jsx)(t.code,{children:`size_*`}),` 클래스를 사용합니다.`]}),`
`,(0,Q.jsx)(_,{of:m,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.sizes}),`
`,(0,Q.jsx)(t.h2,{id:`텍스트-스타일`,children:`텍스트 스타일`}),`
`,(0,Q.jsx)(t.p,{children:`강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 의미에 맞는 태그와 조합합니다.`}),`
`,(0,Q.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.styles}),`
`,(0,Q.jsx)(t.h2,{id:`아래첨자--위첨자--소문자`,children:`아래첨자 · 위첨자 · 소문자`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`sub`}),` · `,(0,Q.jsx)(t.code,{children:`sup`}),` · `,(0,Q.jsx)(t.code,{children:`small`}),` 시맨틱 태그에 `,(0,Q.jsx)(t.code,{children:`typo_sub`}),` · `,(0,Q.jsx)(t.code,{children:`typo_sup`}),` · `,(0,Q.jsx)(t.code,{children:`typo_small`}),`을 적용합니다.`]}),`
`,(0,Q.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.subSup}),`
`,(0,Q.jsx)(t.h2,{id:`말줄임`,children:`말줄임`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`text_ellipsis`}),`로 1줄, `,(0,Q.jsx)(t.code,{children:`text_ellipsis-2`}),`·`,(0,Q.jsx)(t.code,{children:`text_ellipsis-3`}),`으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다.`]}),`
`,(0,Q.jsx)(_,{of:ne,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.ellipsis}),`
`,(0,Q.jsx)(t.h2,{id:`인용`,children:`인용`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`blockquote`}),` 태그와 `,(0,Q.jsx)(t.code,{children:`typo_blockquote`}),`를 사용하고, 출처가 있다면 `,(0,Q.jsx)(t.code,{children:`cite`}),`에 URL을 지정합니다.`]}),`
`,(0,Q.jsx)(_,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.quote}),`
`,(0,Q.jsx)(t.h2,{id:`목록`,children:`목록`}),`
`,(0,Q.jsxs)(t.p,{children:[`본문 목록은 `,(0,Q.jsx)(t.code,{children:`ul`}),` · `,(0,Q.jsx)(t.code,{children:`ol`}),`에 `,(0,Q.jsx)(t.code,{children:`typo_list`}),` · `,(0,Q.jsx)(t.code,{children:`typo_list-ordered`}),`를 적용합니다. 인터랙티브 UI 목록에는 List 컴포넌트를 사용합니다.`]}),`
`,(0,Q.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.lists}),`
`,(0,Q.jsx)(t.h2,{id:`링크`,children:`링크`}),`
`,(0,Q.jsxs)(t.p,{children:[`본문 내 하이퍼링크에는 `,(0,Q.jsx)(t.code,{children:`typo_link`}),`를 사용하고 실제 이동할 `,(0,Q.jsx)(t.code,{children:`href`}),`를 함께 지정합니다.`]}),`
`,(0,Q.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.links}),`
`,(0,Q.jsx)(t.h2,{id:`리드--캡션--레이블`,children:`리드 · 캡션 · 레이블`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`typo_lead`}),` · `,(0,Q.jsx)(t.code,{children:`typo_caption`}),` · `,(0,Q.jsx)(t.code,{children:`typo_label`}),` · `,(0,Q.jsx)(t.code,{children:`typo_overline`}),`으로 보조 텍스트 위계를 표현합니다.`]}),`
`,(0,Q.jsx)(_,{of:te,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.supporting}),`
`,(0,Q.jsx)(t.h2,{id:`제목-색상`,children:`제목 색상`}),`
`,(0,Q.jsxs)(t.p,{children:[`제목에도 공통 `,(0,Q.jsx)(t.code,{children:`color_*`}),` 클래스를 조합할 수 있습니다.`]}),`
`,(0,Q.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.titleColors}),`
`,(0,Q.jsx)(t.h2,{id:`키보드--코드-블록`,children:`키보드 · 코드 블록`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`typo_kbd`}),` · `,(0,Q.jsx)(t.code,{children:`typo_pre`}),` · `,(0,Q.jsx)(t.code,{children:`typo_code`}),`로 단축키와 코드 콘텐츠를 표시합니다.`]}),`
`,(0,Q.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.keyboard}),`
`,(0,Q.jsx)(t.h2,{id:`중첩-목록`,children:`중첩 목록`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`typo_list`}),` · `,(0,Q.jsx)(t.code,{children:`typo_list-ordered`}),` 안에 하위 `,(0,Q.jsx)(t.code,{children:`ul`}),` · `,(0,Q.jsx)(t.code,{children:`ol`}),`을 중첩할 수 있습니다.`]}),`
`,(0,Q.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.nestedLists}),`
`,(0,Q.jsx)(t.h2,{id:`제목--본문-조합`,children:`제목 + 본문 조합`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`typo_stack`}),`, `,(0,Q.jsx)(t.code,{children:`typo_stack-lg`}),`로 제목과 본문을 묶어 일관된 수직 간격을 적용합니다.`]}),`
`,(0,Q.jsx)(_,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(x,{examples:I.stack}),`
`,(0,Q.jsx)(ae,{sections:Y})]})}function de(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),ie(),v(),y(),b(),L(),X(),n()})))()}$();export{de as default};