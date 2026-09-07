import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as ee,p as te,r as ne,s as re,t as ie,u as ae,v as oe}from"./Button.stories-BPFdp42Z.js";import{i as p,r as m}from"./react-DjocYnkp.js";import{c as h,r as g,u as se}from"./blocks-DVNybNyg.js";import{i as ce,n as _,r as v,t as le}from"./ComponentApiDocs-DNrMftDA.js";var y;function b(){return(b=e((()=>{y=`<!-- Button 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다. -->
<!-- btn과 스킨·색상 클래스를 조합합니다. 텍스트는 btn_label로 감쌉니다. -->
<button class="btn btn_filled color_primary" data-component="Button" data-ripple="true" type="button">
  <span class="btn_label">Filled Primary</span>
</button>

<!-- 아이콘만 표시할 때는 btn_icon-only와 aria-label을 함께 지정합니다. -->
<button class="btn btn_ghost btn_icon-only" data-component="Button" data-ripple="true" type="button" aria-label="검색">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="7"></circle>
    <path d="m20 20-4-4"></path>
  </svg>
</button>

<!-- 셀렉트 트리거는 btn_select와 aria-haspopup을 사용합니다. -->
<button class="btn btn_select color_primary" data-component="Button" type="button" aria-haspopup="listbox" aria-expanded="false">
  <span class="btn_label">옵션 선택</span>
</button>
`})))()}var x;function S(){return(S=e((()=>{x=`{# Button 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다. #}
{# button macro로 스킨·색상·크기·아이콘·상태를 조합합니다. #}
{# import는 from과 달리 같은 파일의 macro 안에서도 Icon.icon을 호출할 수 있습니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro button(
  tag = 'button',
  type = 'button',
  href = '',
  variant = 'filled',
  color = 'primary',
  size = 'md',
  label = 'Button',
  ripple = true,
  iconBefore = '',
  iconAfter = '',
  iconBeforeSlot = '',
  iconAfterSlot = '',
  iconOnly = false,
  vertical = false,
  round = false,
  block = false,
  grow = false,
  fit = false,
  loading = false,
  open = false,
  error = false,
  placeholder = false,
  selectText = false,
  selectCaret = false,
  hidden = false,
  disabled = false,
  ariaDisabled = false,
  ariaLabel = '',
  labelClassName = '',
  dataAttributes = false,
  haspopup = '',
  expanded = '',
  invalid = false,
  role = '',
  tabIndex = '',
  className = ''
) %}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = label -%}
{%- endif -%}
{%- set root = tag if tag else 'button' -%}
{%- set isButton = root == 'button' -%}
{%- set isLink = root == 'a' -%}
{%- set inactive = disabled or ariaDisabled or loading -%}
{%- set needsButtonSemantics = root == 'div' or (isLink and not href) -%}
{%- set skinClass = 'btn_select' if variant == 'select' else ('btn_' + variant) -%}
{%- set growClass = 'btn_grow-2' if grow == 2 or grow == '2' else ('btn_grow' if grow else '') -%}
{%- set classes =
  'btn'
  + ' ' + skinClass
  + ((' color_' + color) if variant != 'ghost' and color else '')
  + ((' btn_' + size) if size and size != 'md' else '')
  + (' btn_select-text' if selectText else '')
  + (' btn_select-placeholder' if placeholder else '')
  + (' btn_icon-only' if iconOnly else '')
  + (' btn_vertical' if vertical else '')
  + (' btn_round' if round else '')
  + (' btn_block' if block else '')
  + ((' ' + growClass) if growClass else '')
  + (' btn_fit' if fit else '')
  + (' is-disabled' if ariaDisabled else '')
  + (' is-loading' if loading else '')
  + (' is-open' if open else '')
  + (' is-error' if error else '')
  + ((' ' + className) if className else '')
-%}
{%- set resolvedRole = role if role else ('button' if needsButtonSemantics else '') -%}
{%- set resolvedTabIndex = tabIndex if tabIndex != '' else ((-1) if (not isButton and inactive) else (0 if needsButtonSemantics else '')) -%}
{%- set resolvedExpanded = expanded if expanded != '' else (true if open else '') -%}
{%- set showCaret = variant == 'select' or selectCaret -%}
<{{ root }}
  class="{{ classes }}"
  data-component="Button"
  data-ripple="{{ 'surface' if ripple == 'surface' else ('true' if ripple else 'false') }}"
  {% if isButton %}type="{{ type }}"{% endif %}
  {% if isLink and href %}href="{{ href }}"{% endif %}
  {% if isButton and disabled %}disabled{% endif %}
  {% if hidden %}hidden{% endif %}
  {% if resolvedRole %}role="{{ resolvedRole }}"{% endif %}
  {% if resolvedTabIndex != '' %}tabindex="{{ resolvedTabIndex }}"{% endif %}
  {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}
  {% for attribute, attributeValue in dataAttributes %}{{ attribute }}{% if attributeValue != true %}="{{ attributeValue }}"{% endif %} {% endfor %}
  {% if haspopup %}aria-haspopup="{{ haspopup }}"{% endif %}
  {% if resolvedExpanded != '' %}aria-expanded="{{ 'true' if resolvedExpanded else 'false' }}"{% endif %}
  {% if invalid or error %}aria-invalid="true"{% endif %}
  {% if loading %}aria-busy="true"{% endif %}
  {% if ariaDisabled or (not isButton and disabled) %}aria-disabled="true"{% endif %}
>
  {%- if loading -%}
  <span class="btn_spinner" aria-hidden="true"></span>
  {%- endif -%}
  {%- if iconBeforeSlot -%}
  {{ iconBeforeSlot | safe }}
  {%- elif iconBefore -%}
  {{ Icon.icon(iconBefore) }}
  {%- endif -%}
  {%- if iconOnly -%}
  {%- if caller -%}{{ content | safe }}{%- endif -%}
  {%- else -%}
  <span class="btn_label{{ (' ' + labelClassName) if labelClassName else '' }}">{{ content }}</span>
  {%- endif -%}
  {%- if iconAfterSlot -%}
  {{ iconAfterSlot | safe }}
  {%- elif iconAfter -%}
  {{ Icon.icon(iconAfter) }}
  {%- endif -%}
  {%- if showCaret -%}
  {{ Icon.icon('chevron') }}
  {%- endif -%}
</{{ root }}>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ button(variant='filled', color='primary', label='Filled Primary') }}
{{ button(variant='ghost', iconOnly=true, iconBefore='search', ariaLabel='검색') }}
{{ button(variant='select', label='옵션 선택', haspopup='listbox') }}
`})))()}var C;function w(){return(w=e((()=>{C=`/**
 * Button 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// 셀렉트형 트리거에 붙는 캐럿 아이콘입니다.
const SelectCaret = () => (
  <svg
    aria-hidden="true"
    className="icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export function Button({
  children, // 기본 슬롯 콘텐츠입니다. 없으면 label을 사용합니다.
  label = 'Button', // children 대신 표시할 텍스트입니다.
  ripple = true, // 클릭 리플 효과를 켭니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  variant = 'filled', // filled · outline · ghost · text · select 스킨입니다.
  color = 'primary', // ghost가 아닐 때 color_* 클래스로 적용됩니다.
  size = 'md', // sm · md · lg 크기입니다. md는 기본이라 클래스를 붙이지 않습니다.
  iconBefore, // 텍스트 앞에 렌더링할 아이콘입니다.
  iconAfter, // 텍스트 뒤에 렌더링할 아이콘입니다.
  iconOnly = false, // 텍스트 없이 아이콘만 표시합니다.
  vertical = false, // 아이콘 위·텍스트 아래 세로 배치입니다.
  round = false, // pill 형태 둥근 모서리입니다.
  block = false, // 부모 너비를 채웁니다.
  grow = false, // true면 btn_grow, '2'면 btn_grow-2입니다.
  fit = false, // 콘텐츠 너비를 유지합니다.
  loading = false, // 로딩 스피너를 표시하고 입력을 막습니다.
  open = false, // 셀렉트·팝오버 열림 상태입니다.
  error = false, // 오류 상태 클래스를 적용합니다.
  placeholder = false, // 셀렉트 플레이스홀더 스타일입니다.
  selectText = false, // 배경·테두리 없는 셀렉트 텍스트형입니다.
  selectCaret = false, // select가 아니어도 캐럿을 강제 표시합니다.
  disabled = false, // 네이티브 disabled입니다.
  ariaDisabled = false, // is-disabled와 aria-disabled만 적용합니다.
  ariaLabel, // 아이콘 전용 버튼 등의 접근성 이름입니다.
  haspopup, // aria-haspopup 값입니다.
  expanded, // aria-expanded 값입니다. 없으면 open을 사용합니다.
  invalid = false, // aria-invalid를 켭니다.
  tag: Tag = 'button', // button · a · div 루트 태그입니다.
  href, // tag가 a일 때 링크 주소입니다.
  role, // 명시적 role이 있으면 우선합니다.
  tabIndex, // 명시적 tabindex가 있으면 우선합니다.
  type = 'button', // button 루트의 type입니다.
  onClick, // 클릭 핸들러입니다.
  onKeyDown, // 키다운 핸들러입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  // disabled · aria-disabled · loading이면 상호작용을 막습니다.
  const inactive = disabled || ariaDisabled || loading;
  const isButton = Tag === 'button';
  const isLink = Tag === 'a';
  // div이거나 href 없는 a는 버튼 역할과 키보드 조작이 필요합니다.
  const needsButtonSemantics = Tag === 'div' || (isLink && !href);
  // 스킨·색상·크기·레이아웃·상태 클래스를 조합합니다.
  const classes = [
    'btn',
    variant === 'select' ? 'btn_select' : \`btn_\${variant}\`,
    variant !== 'ghost' ? \`color_\${color}\` : '',
    size !== 'md' ? \`btn_\${size}\` : '',
    selectText ? 'btn_select-text' : '',
    placeholder ? 'btn_select-placeholder' : '',
    iconOnly ? 'btn_icon-only' : '',
    vertical ? 'btn_vertical' : '',
    round ? 'btn_round' : '',
    block ? 'btn_block' : '',
    grow === true ? 'btn_grow' : '',
    grow === '2' ? 'btn_grow-2' : '',
    fit ? 'btn_fit' : '',
    ariaDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    open ? 'is-open' : '',
    error ? 'is-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  function handleClick(event) {
    if (inactive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  function handleKeyDown(event) {
    if (inactive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    // 시맨틱이 필요한 루트에서는 Enter·Space로 클릭을 흉내 냅니다.
    if (needsButtonSemantics && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  }

  return (
    <Tag
      {...props}
      aria-busy={loading || undefined}
      aria-disabled={ariaDisabled || (!isButton && disabled) || undefined}
      aria-expanded={expanded ?? (open || undefined)}
      aria-haspopup={haspopup}
      aria-invalid={invalid || error || undefined}
      aria-label={ariaLabel}
      className={classes}
      data-component="Button"
      data-ripple={ripple ? 'true' : 'false'}
      disabled={isButton ? disabled : undefined}
      href={isLink ? href : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role ?? (needsButtonSemantics ? 'button' : undefined)}
      tabIndex={inactive && !isButton ? -1 : (tabIndex ?? (needsButtonSemantics ? 0 : undefined))}
      type={isButton ? type : undefined}
    >
      {loading ? <span aria-hidden="true" className="btn_spinner" /> : null}
      {iconBefore}
      {!iconOnly ? <span className="btn_label">{children ?? label}</span> : children}
      {iconAfter}
      {variant === 'select' || selectCaret ? <SelectCaret /> : null}
    </Tag>
  );
}

export default Button;
`})))()}var T;function E(){return(E=e((()=>{T=`<!--
  Button 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmButton' });

// 스킨·색상·크기·레이아웃·상태와 루트 태그를 prop으로 받습니다.
const props = defineProps({
  label: { type: String, default: 'Button' }, // 기본 slot이 없을 때 표시할 텍스트입니다.
  ripple: { type: Boolean, default: true }, // 클릭 리플 효과를 켭니다.
  color: { type: String, default: 'primary' }, // ghost가 아닐 때 color_* 클래스로 적용됩니다.
  disabled: { type: Boolean, default: false }, // 네이티브 disabled입니다.
  variant: { type: String, default: 'filled' }, // filled · outline · ghost · text · select 스킨입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  iconOnly: { type: Boolean, default: false }, // 텍스트 없이 아이콘만 표시합니다.
  vertical: { type: Boolean, default: false }, // 아이콘 위·텍스트 아래 세로 배치입니다.
  round: { type: Boolean, default: false }, // pill 형태 둥근 모서리입니다.
  block: { type: Boolean, default: false }, // 부모 너비를 채웁니다.
  grow: { type: [Boolean, String], default: false }, // true면 btn_grow, '2'면 btn_grow-2입니다.
  fit: { type: Boolean, default: false }, // 콘텐츠 너비를 유지합니다.
  loading: { type: Boolean, default: false }, // 로딩 스피너를 표시하고 입력을 막습니다.
  open: { type: Boolean, default: false }, // 셀렉트·팝오버 열림 상태입니다.
  error: { type: Boolean, default: false }, // 오류 상태 클래스를 적용합니다.
  placeholder: { type: Boolean, default: false }, // 셀렉트 플레이스홀더 스타일입니다.
  selectText: { type: Boolean, default: false }, // 배경·테두리 없는 셀렉트 텍스트형입니다.
  selectCaret: { type: Boolean, default: false }, // select가 아니어도 캐럿을 강제 표시합니다.
  ariaDisabled: { type: Boolean, default: false }, // is-disabled와 aria-disabled만 적용합니다.
  ariaLabel: { type: String, default: undefined }, // 아이콘 전용 버튼 등의 접근성 이름입니다.
  haspopup: { type: [Boolean, String], default: undefined }, // aria-haspopup 값입니다.
  expanded: { type: Boolean, default: undefined }, // aria-expanded 값입니다.
  invalid: { type: Boolean, default: false }, // aria-invalid를 켭니다.
  tag: { type: String, default: 'button' }, // button · a · div 루트 태그입니다.
  href: { type: String, default: undefined }, // tag가 a일 때 링크 주소입니다.
  role: { type: String, default: undefined }, // 명시적 role이 있으면 우선합니다.
  tabindex: { type: [Number, String], default: undefined }, // 명시적 tabindex가 있으면 우선합니다.
  type: { type: String, default: 'button' }, // button 루트의 type입니다.
});

const emit = defineEmits(['click', 'keydown']);
// disabled · aria-disabled · loading이면 상호작용을 막습니다.
const inactive = computed(() => props.disabled || props.ariaDisabled || props.loading);
// div이거나 href 없는 a는 버튼 역할과 키보드 조작이 필요합니다.
const needsButtonSemantics = computed(
  () => props.tag === 'div' || (props.tag === 'a' && !props.href),
);
// 스킨·색상·크기·레이아웃·상태 클래스를 조합합니다.
const classes = computed(() =>
  [
    'btn',
    props.variant === 'select' ? 'btn_select' : \`btn_\${props.variant}\`,
    props.variant !== 'ghost' ? \`color_\${props.color}\` : '',
    props.size !== 'md' ? \`btn_\${props.size}\` : '',
    props.selectText ? 'btn_select-text' : '',
    props.placeholder ? 'btn_select-placeholder' : '',
    props.iconOnly ? 'btn_icon-only' : '',
    props.vertical ? 'btn_vertical' : '',
    props.round ? 'btn_round' : '',
    props.block ? 'btn_block' : '',
    props.grow === true ? 'btn_grow' : '',
    props.grow === '2' ? 'btn_grow-2' : '',
    props.fit ? 'btn_fit' : '',
    props.ariaDisabled ? 'is-disabled' : '',
    props.loading ? 'is-loading' : '',
    props.open ? 'is-open' : '',
    props.error ? 'is-error' : '',
  ].filter(Boolean),
);

function handleClick(event) {
  if (inactive.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}

function handleKeydown(event) {
  if (inactive.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (needsButtonSemantics.value && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    event.currentTarget.click();
  }
  emit('keydown', event);
}
<\/script>

<template>
  <component
    :is="tag"
    :aria-busy="loading || undefined"
    :aria-disabled="ariaDisabled || (tag !== 'button' && disabled) || undefined"
    :aria-expanded="expanded ?? (open || undefined)"
    :aria-haspopup="haspopup"
    :aria-invalid="invalid || error || undefined"
    :aria-label="ariaLabel"
    :class="classes"
    data-component="Button"
    :data-ripple="ripple ? 'true' : 'false'"
    :disabled="tag === 'button' ? disabled : undefined"
    :href="tag === 'a' ? href : undefined"
    :role="role ?? (needsButtonSemantics ? 'button' : undefined)"
    :tabindex="
      inactive && tag !== 'button' ? -1 : (tabindex ?? (needsButtonSemantics ? 0 : undefined))
    "
    :type="tag === 'button' ? type : undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="loading" class="btn_spinner" aria-hidden="true" />
    <slot name="icon-before" />
    <template v-if="!iconOnly"
      ><span class="btn_label"
        ><slot>{{ label }}</slot></span
      ></template
    >
    <slot v-else />
    <slot name="icon-after" />
    <svg
      v-if="variant === 'select' || selectCaret"
      class="icon"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.8"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  </component>
</template>
`})))()}function D(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function O(e){return`<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
${(N[e]??N.plus).replace(/></g,`>
<`).split(`
`).map(e=>`  ${e}`).join(`
`)}
</svg>`}function k(e){let t=String(e.variant??`filled`),n=String(e.color??`primary`),r=[`btn`,`btn_${t}`];t!==`ghost`&&r.push(`color_${n}`);for(let[t,n]of[[`size`,`btn_${e.size}`],[`select-text`,`btn_select-text`],[`placeholder`,`btn_select-placeholder`],[`round`,`btn_round`],[`vertical`,`btn_vertical`],[`icon-only`,`btn_icon-only`],[`block`,`btn_block`],[`grow`,e.grow===`2`?`btn_grow-2`:`btn_grow`],[`fit`,`btn_fit`],[`aria-disabled`,`is-disabled`],[`loading`,`is-loading`],[`open`,`is-open`],[`error`,`is-error`]])e[t]&&r.push(n);return r}function ue(e){let t=D(e),n=String(t.variant??`filled`),r=k(t),i=String(t.tag??`button`),a=t[`icon-only`]?``:`<span class="btn_label">${String(t.label??``)}</span>`,o=t[`icon-before`]?O(String(t[`icon-before`])):``,s=t[`icon-after`]?O(String(t[`icon-after`])):``,c=t.loading?`<span class="btn_spinner" aria-hidden="true"></span>`:``,l=n===`select`?O(`chevron`):``,u=!!(t.disabled||t[`aria-disabled`]||t.loading),d=i===`div`||i===`a`&&!t.href;return`<${i} ${[`class="${r.join(` `)}"`,`data-ripple="true"`,i===`button`?`type="button"`:``,t.href?`href="${t.href}"`:``,t.role?`role="${t.role}"`:d?`role="button"`:``,d?`tabindex="${u?-1:0}"`:``,t[`aria-label`]?`aria-label="${t[`aria-label`]}"`:``,t.haspopup?`aria-haspopup="${t.haspopup}"`:``,t.open?`aria-expanded="true"`:``,t.error||t.invalid?`aria-invalid="true"`:``,t.loading?`aria-busy="true"`:``,t[`aria-disabled`]||i!==`button`&&t.disabled?`aria-disabled="true"`:``,i===`button`&&t.disabled?`disabled`:``].filter(Boolean).join(` `)}>
${[c,o,a,s,l].filter(Boolean).flatMap(e=>e.split(`
`)).map(e=>`  ${e}`).join(`
`)}
</${i}>`}function de(e){return e.replace(/^([ \t]*)<Button\s+([^>]*?)\s*\/>/gm,(e,t,n)=>ue(n).split(`
`).map(e=>`${t}${e}`).join(`
`))}function fe(e){let t=[],n=/:([\w-]+)="([^"]*)"|([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);){if(r[1]){let e=P[r[1]]??r[1];t.push(`${e}=${r[2]}`);continue}let e=r[3],n=r[4],i=P[e]??e;n==null?t.push(`${i}=true`):/^-?\d+(\.\d+)?$/.test(n)?t.push(`${i}=${n}`):t.push(`${i}='${n}'`)}return t.join(`, `)}function pe(e){return`{% from "components/basic/Button/button.njk" import button %}\n\n${e.replace(/^([ \t]*)<Button\s+([^>]*?)\s*\/>/gm,(e,t,n)=>{let r=fe(n.trim());return r?`${t}{{ button(${r}) }}`:`${t}{{ button() }}`}).trim()}`}function me(e){return e.replace(/class=/g,`className=`).replace(/([\w-]+)="([^"]*)"/g,(e,t,n)=>t===`icon-before`?`iconBefore={<Icon name="${n}" />}`:t===`icon-after`?`iconAfter={<Icon name="${n}" />}`:t===`aria-label`?`ariaLabel="${n}"`:`${t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}="${n}"`).replace(/\b(icon-only|select-text|aria-disabled)\b/g,e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()))}function he(e){return e.replace(/<Button\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=D(t),r=n[`icon-before`],i=n[`icon-after`],a=Object.entries(n).filter(([e])=>e!==`icon-before`&&e!==`icon-after`).map(([e,t])=>t===!0||M.has(e)&&t===`true`?e:`${e}="${t}"`).join(` `);return!r&&!i?`<Button ${a} />`:[`<Button ${a}>`,r?`  <template #icon-before><Icon name="${r}" /></template>`:``,i?`  <template #icon-after><Icon name="${i}" /></template>`:``,`</Button>`].filter(Boolean).join(`
`)})}function ge(e,t){let n=`${t[0].toUpperCase()}${t.slice(1)}`,r=0,i=0;return`<w2:group
  id="button${n}Example"
  class="btn-demo">
${e.replace(/<Button\s+([^>]*?)\s*\/>/g,(e,t)=>{let i=D(t),a=!!(i.disabled||i[`aria-disabled`]||i.loading),o=!!i[`icon-only`],s=String(i.label??i[`aria-label`]??`Button`),c=`btn${n}${++r}`,l=k(i).join(` `),u=i[`icon-before`]??i[`icon-after`],d=[u?`아이콘 ${u}: 프로젝트 이미지 또는 CSS background-image 리소스에 연결`:``,i.loading?`로딩 표시: 프로젝트 Trigger 로딩 이미지 또는 CSS 상태 스타일에 연결`:``].filter(Boolean),f=d.length?`<!-- ${d.join(` · `)} -->\n`:``;return i.tag===`a`&&typeof i.href==`string`?`${f}<a id="${c}" href="${i.href}" class="${l}">${s}</a>`:`${f}<xf:trigger\n  ${[`type="${i.tag===`a`?`anchor`:`button`}"`,`id="${c}"`,`class="${l}"`,o&&i[`aria-label`]?`tooltip="${i[`aria-label`]}"`:``,a?`disabled="true"`:``,a?``:`ev:onclick="scwin.button_onclick"`].filter(Boolean).join(`
  `)}>\n  <xf:label><![CDATA[${s}]]></xf:label>\n</xf:trigger>`}).replace(/<(\/)?div\b([^>]*)>/g,(e,t,r)=>{if(t)return`</w2:group>`;let a=r.match(/\sclass="([^"]*)"/)?.[1]??``;return`<w2:group\n  id="btn${n}Group${++i}"${a?`\n  class="${a}"`:``}>`}).split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function _e(e){let t=j[e],n=de(t),r=pe(t),i=he(t),a=me(t);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Button/Button.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Button/button.njk · ${e}`,code:`{# Button · ${e} #}\n${r}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/button → apps/vue/src/components/basic/Button/Button.vue · ${e}`,code:`${F}\n\n<template>\n${i.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/button → apps/vue/src/components/basic/Button/Button.vue · ${e}`,code:`${F}\n\n<template>\n${i.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/button → apps/react/src/components/basic/Button/Button.jsx · ${e}`,code:`import Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n  <>\n${a.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`next`,label:`Next`,fileName:`@uxkm/react/button → apps/react/src/components/basic/Button/Button.jsx · ${e}`,code:`import Button from '@uxkm/react/button';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n  <>\n${a.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`websquare`,label:`WebSquare`,fileName:`Button.xml · ${e}`,code:ge(t,e)}]}var A,j,M,N,P,F,I;function L(){return(L=e((()=>{b(),S(),w(),E(),A=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Button/Button.html`,code:y},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Button/button.njk`,code:x},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/basic/Button/Button.vue`,code:T},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/button → Button.vue`,code:T},{id:`react`,label:`React`,fileName:`apps/react/src/components/basic/Button/Button.jsx`,code:C},{id:`next`,label:`Next`,fileName:`@uxkm/react/button → Button.jsx`,code:C}],j={basic:`<div class="btn_row btn_row-wrap">
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
</div>`,select:`<div class="btn_row btn_row-wrap">
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
</div>`,text:`<div class="btn_row btn_row-wrap">
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
<Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />`,iconText:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="추가" icon-before="plus" />
  <Button variant="filled" color="default" label="다운로드" icon-before="download" />
  <Button variant="outline" color="primary" label="새 항목" icon-before="plus" />
</div>`,vertical:`<div class="btn_row btn_row-wrap">
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
</div>`,verticalEqual:`<div class="btn_row-equal">
  <Button variant="text" color="primary" vertical label="홈" icon-before="home" />
  <Button variant="text" color="primary" vertical label="카테고리" icon-before="grid" />
  <Button variant="filled" color="primary" vertical label="장바구니" icon-before="cart" />
  <Button variant="text" color="primary" vertical label="마이" icon-before="user" />
</div>`,textIcon:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="다음" icon-after="chevron" />
  <Button variant="filled" color="default" label="자세히 보기" icon-after="external" />
  <Button variant="text" color="primary" label="링크 이동" icon-after="chevron" />
</div>`,iconOnly:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" icon-only aria-label="추가" icon-before="plus" />
  <Button variant="filled" color="default" icon-only aria-label="설정" icon-before="settings" />
  <Button variant="ghost" icon-only aria-label="검색" icon-before="search" />
  <Button variant="outline" color="primary" icon-only aria-label="편집" icon-before="edit" />
  <Button variant="filled" color="danger" icon-only aria-label="삭제" icon-before="trash" />
  <Button variant="filled" color="primary" icon-only disabled aria-label="추가" icon-before="plus" />
</div>`,iconSize:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)" icon-before="plus" />
  <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)" icon-before="plus" />
  <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)" icon-before="plus" />
  <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)" icon-before="download" />
  <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)" icon-before="download" />
  <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)" icon-before="download" />
</div>`,colors:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="outline" color="primary" label="Outline" />
</div>`,sizes:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" size="sm" label="Small" />
  <Button variant="filled" color="primary" label="Medium" />
  <Button variant="filled" color="primary" size="lg" label="Large" />
</div>`,round:`<div class="btn_row btn_row-wrap">
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
</div>`,width:`<Button variant="filled" color="primary" block label="전체 너비 버튼" />
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
<Button variant="filled" color="primary" block label="전체 너비 다운로드" icon-before="download" />`,states:`<div class="btn_row btn_row-wrap">
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
<Button variant="filled" color="primary" block loading label="전체 너비 로딩" />`,groups:`<div class="btn_group btn_group-fit btn_group-align-start">
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
</div>`,tags:`<div class="btn_row btn_row-wrap">
  <Button variant="filled" color="primary" label="button" />
  <Button tag="a" href="#" variant="outline" color="primary" label="a + href" />
  <Button tag="div" variant="ghost" label="div → role=button" />
  <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
</div>`},M=new Set([`round`,`vertical`,`icon-only`,`block`,`grow`,`fit`,`disabled`,`loading`,`open`,`error`,`invalid`,`placeholder`,`select-text`,`aria-disabled`]),N={plus:`<path d="M12 5v14M5 12h14"></path>`,download:`<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>`,trash:`<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6"></path>`,check:`<path d="m5 12 4 4L19 6"></path>`,warning:`<path d="M12 3 2.5 20h19L12 3Z"></path><path d="M12 9v4m0 3h.01"></path>`,chevron:`<path d="m9 6 6 6-6 6"></path>`,search:`<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>`,edit:`<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path><path d="m13.5 6.5 4 4"></path>`,close:`<path d="m6 6 12 12M18 6 6 18"></path>`,settings:`<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z"></path>`,home:`<path d="m3 11 9-8 9 8"></path><path d="M5 10v11h14V10M10 21v-7h4v7"></path>`,user:`<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>`,grid:`<rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect>`,cart:`<path d="M3 4h2l2 11h10l3-8H6"></path><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle>`,star:`<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>`,external:`<path d="M14 4h6v6M20 4l-9 9"></path><path d="M18 13v7H4V6h7"></path>`,refresh:`<path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 0-2 5"></path>`,book:`<path d="M4 5a3 3 0 0 1 3-2h5v18H7a3 3 0 0 0-3 2V5Z"></path><path d="M20 5a3 3 0 0 0-3-2h-5v18h5a3 3 0 0 1 3 2V5Z"></path>`},P={"icon-before":`iconBefore`,"icon-after":`iconAfter`,"icon-only":`iconOnly`,"select-text":`selectText`,"select-caret":`selectCaret`,"aria-disabled":`ariaDisabled`,"aria-label":`ariaLabel`,class:`className`},F=`<script setup>
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
<\/script>`,I=Object.fromEntries(Object.keys(j).map(e=>[e,_e(e)]))})))()}var R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{R=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],z=[{name:`variant`,type:`'filled' | 'outline' | 'ghost' | 'text' | 'select'`,default:`filled`,description:`버튼 스킨. select는 셀렉트 박스형 트리거입니다.`},{name:`color`,type:`'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'`,default:`primary`,description:`색상 변형. text 스킨에서는 텍스트 톤으로 사용합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`버튼 크기입니다.`},{name:`label`,type:`string`,default:`Button`,description:`버튼 텍스트. children 또는 default 슬롯이 있으면 해당 콘텐츠가 우선합니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`클릭 위치에서 시작하는 파장 효과를 활성화합니다. false이면 data-ripple="false"를 렌더링합니다.`},{name:`round`,type:`boolean`,default:`false`,description:`pill(캡슐) 형태의 모서리를 적용합니다.`},{name:`vertical`,type:`boolean`,default:`false`,description:`아이콘 위·텍스트 아래의 세로 배치를 적용합니다.`},{name:`iconOnly`,vueName:`icon-only`,type:`boolean`,default:`false`,description:`아이콘만 표시합니다. aria-label을 함께 지정해야 합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100%로 확장합니다.`},{name:`grow`,type:`boolean | '2'`,default:`false`,description:`flex 비율로 분배합니다. 2는 다른 grow 버튼의 두 배 너비입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비를 유지합니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`네이티브 disabled를 적용하거나 비활성 상호작용을 차단합니다.`},{name:`ariaDisabled`,vueName:`aria-disabled`,type:`boolean`,default:`false`,description:`is-disabled와 aria-disabled를 적용하고 상호작용을 차단합니다.`},{name:`loading`,type:`boolean`,default:`false`,description:`스피너와 aria-busy를 표시하고 중복 상호작용을 차단합니다.`},{name:`open`,type:`boolean`,default:`false`,description:`셀렉트·팝오버 트리거의 열림 상태를 표시합니다.`},{name:`error`,type:`boolean`,default:`false`,description:`오류 상태 클래스와 aria-invalid를 적용합니다.`},{name:`placeholder`,type:`boolean`,default:`false`,description:`셀렉트 미선택 placeholder 스타일을 적용합니다.`},{name:`selectText`,vueName:`select-text`,type:`boolean`,default:`false`,description:`배경과 테두리가 없는 셀렉트 텍스트 형태를 사용합니다.`},{name:`selectCaret`,vueName:`select-caret`,type:`boolean`,default:`false`,description:`select 이외의 스킨에도 드롭다운 캐럿을 표시합니다.`},{name:`type`,type:`'button' | 'submit' | 'reset'`,default:`button`,description:`button 루트의 네이티브 type 속성입니다.`},{name:`tag`,type:`'button' | 'a' | 'div'`,default:`button`,description:`렌더링할 루트 HTML 태그입니다.`},{name:`href`,type:`string`,default:`—`,description:`tag가 a일 때 사용할 링크 주소입니다.`},{name:`role`,type:`string`,default:`자동`,description:`루트의 접근성 역할. href 없는 a와 div에는 button이 자동 적용됩니다.`},{name:`tabIndex`,vueName:`tabindex`,type:`number | string`,default:`자동`,description:`수동 Tab 순서. 비활성인 비-button 루트에는 -1이 적용됩니다.`},{name:`ariaLabel`,vueName:`aria-label`,type:`string`,default:`—`,description:`접근성 라벨. iconOnly 사용 시 필수입니다.`},{name:`haspopup`,type:`boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`,default:`—`,description:`aria-haspopup으로 전달할 팝업 유형입니다.`},{name:`expanded`,type:`boolean`,default:`open 값`,description:`aria-expanded를 직접 지정합니다. 생략하면 open 값을 사용합니다.`},{name:`invalid`,type:`boolean`,default:`false`,description:`폼 오류의 aria-invalid를 적용합니다.`}],B=[...z.map(({vueName:e,...t})=>t),{name:`children`,type:`ReactNode`,default:`—`,description:`label을 대체하는 콘텐츠. iconOnly일 때 아이콘 콘텐츠로도 사용합니다.`},{name:`iconBefore`,type:`ReactNode`,default:`—`,description:`텍스트 앞에 렌더링할 아이콘입니다.`},{name:`iconAfter`,type:`ReactNode`,default:`—`,description:`텍스트 뒤에 렌더링할 아이콘입니다.`},{name:`className`,type:`string`,default:`''`,description:`루트 요소에 추가할 클래스 이름입니다.`},{name:`onClick`,type:`(event) => void`,default:`—`,description:`활성 상태에서 전달되는 클릭 이벤트 핸들러입니다.`},{name:`onKeyDown`,type:`(event) => void`,default:`—`,description:`활성 상태에서 전달되는 키보드 이벤트 핸들러입니다.`}],V=z.map(({vueName:e,...t})=>({...t,name:e??t.name})),H=[{name:`default`,type:`slot`,default:`label`,description:`label을 대체하는 콘텐츠. icon-only일 때 아이콘 콘텐츠로도 사용합니다.`},{name:`icon-before`,type:`named slot`,default:`—`,description:`텍스트 앞에 렌더링할 아이콘입니다.`},{name:`icon-after`,type:`named slot`,default:`—`,description:`텍스트 뒤에 렌더링할 아이콘입니다.`}],U=[{name:`click`,type:`MouseEvent`,default:`—`,description:`활성 상태에서 발생합니다.`},{name:`keydown`,type:`KeyboardEvent`,default:`—`,description:`활성 상태에서 발생합니다. button 의미를 보완하는 루트에서는 Enter와 Space도 처리합니다.`}],W=[{name:`class`,type:`string`,default:`—`,description:`btn과 스킨·색상·크기·상태 클래스를 직접 조합합니다.`},{name:`data-ripple`,type:`'true' | 'false'`,default:`true 권장`,description:`클릭 파장 효과를 활성화하거나 비활성화합니다.`},{name:`data-no-ripple`,type:`boolean attribute`,default:`—`,description:`지정한 컨테이너 아래의 ripple 효과를 모두 비활성화합니다.`},{name:`type`,type:`'button' | 'submit' | 'reset'`,default:`button 권장`,description:`button 요소의 동작을 지정합니다.`},{name:`disabled`,type:`boolean attribute`,default:`—`,description:`button 요소를 네이티브 방식으로 비활성화합니다.`},{name:`href`,type:`URL`,default:`—`,description:`a 요소를 버튼 스타일 링크로 사용할 때 지정합니다.`},{name:`role`,type:`'button' | 'link'`,default:`네이티브 의미`,description:`div 또는 href 없는 a를 사용할 때 의미를 명시합니다.`},{name:`tabindex`,type:`number`,default:`네이티브 순서`,description:`비네이티브 인터랙션 요소의 키보드 포커스를 관리합니다.`},{name:`aria-label`,type:`string`,default:`—`,description:`아이콘만 있는 버튼의 접근 가능한 이름입니다.`},{name:`aria-disabled`,type:`'true' | 'false'`,default:`false`,description:`disabled를 사용할 수 없는 루트의 비활성 상태입니다. 이벤트 차단도 직접 구현해야 합니다.`},{name:`aria-busy`,type:`'true' | 'false'`,default:`false`,description:`로딩 처리 중임을 보조 기술에 전달합니다.`},{name:`aria-haspopup`,type:`'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`,default:`—`,description:`버튼이 여는 팝업 유형입니다.`},{name:`aria-expanded`,type:`'true' | 'false'`,default:`—`,description:`팝업의 열림 상태입니다.`},{name:`aria-invalid`,type:`'true' | 'false'`,default:`false`,description:`폼 트리거의 오류 상태입니다.`}],G=[{name:`button`,type:`macro`,default:`—`,description:'`{% from "components/basic/Button/button.njk" import button %}`로 import한 뒤 `{{ button(...) }}` 또는 `{% call %}`로 인스턴스를 만듭니다.'},{name:`tag · type · href`,type:`string`,default:`'button' · 'button' · ''`,description:`루트 태그와 button type, a일 때 href입니다.`},{name:`variant · color · size`,type:`string`,default:`'filled' · 'primary' · 'md'`,description:`스킨·색상·크기입니다. ghost는 color 클래스를 붙이지 않고, md는 크기 클래스를 생략합니다.`},{name:`label`,type:`string`,default:`'Button'`,description:"버튼 텍스트입니다. `{% call %}` 본문이 있으면 본문이 우선합니다."},{name:`iconBefore · iconAfter`,type:`string`,default:`''`,description:`Icon macro에 전달할 아이콘 이름입니다.`},{name:`iconOnly · vertical · round · block · fit`,type:`boolean`,default:`false`,description:`아이콘 전용·세로·라운드·블록·핏 레이아웃입니다.`},{name:`grow`,type:`boolean | 2`,default:`false`,description:`flex grow입니다. 2는 btn_grow-2입니다.`},{name:`loading · open · error · placeholder · selectText · selectCaret`,type:`boolean`,default:`false`,description:`상태·셀렉트 변형 플래그입니다. select 스킨은 캐럿을 자동 표시합니다.`},{name:`disabled · ariaDisabled · ariaLabel · haspopup · expanded · invalid`,type:`mixed`,default:`—`,description:`비활성·접근성·팝업 속성입니다.`},{name:`ripple · className · role · tabIndex`,type:`mixed`,default:`true · '' · 자동 · 자동`,description:`파장·추가 클래스·역할·탭 순서입니다.`}],K=[{name:`xf:trigger`,type:`component`,default:`type="button"`,description:`Button의 WebSquare 루트입니다. 기본 키보드 활성화와 클릭 이벤트를 제공하는 Trigger를 사용합니다.`},{name:`xf:label`,type:`child`,default:`—`,description:`Trigger에 표시할 텍스트입니다. 특수문자를 안전하게 유지하려면 CDATA로 작성합니다.`},{name:`id`,type:`string`,default:`자동 생성`,description:`화면 또는 WFrame Scope 안에서 중복되지 않는 컴포넌트 ID입니다.`},{name:`type`,type:`'button' | 'image' | 'anchor'`,default:`button`,description:`Trigger 렌더링 유형입니다. 일반 액션은 button, 이벤트 기반 링크 표현은 anchor를 사용합니다.`},{name:`class`,type:`styleclass`,default:`—`,description:`btn과 스킨·색상·크기·상태 클래스를 공백으로 구분해 적용합니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`입력, 포커스와 이벤트를 비활성화합니다. 동적 변경은 setDisabled()를 사용합니다.`},{name:`tooltip`,type:`string`,default:`—`,description:`아이콘 버튼 등 시각적 텍스트가 부족한 경우 기능 설명을 제공합니다.`},{name:`tabIndex`,type:`number`,default:`자동`,description:`Tab 키 포커스 순서를 지정합니다. 기본 순서를 우선 사용합니다.`},{name:`ev:onclick`,type:`event`,default:`—`,description:`scwin 클릭 핸들러를 연결합니다. 비활성 Trigger에서는 발생하지 않습니다.`},{name:`a[href]`,type:`XHTML`,default:`—`,description:`URL로 직접 이동하는 링크형 Button은 화면의 기본 XHTML 네임스페이스를 상속한 a 요소를 사용합니다.`},{name:`setLabel(label)`,type:`method`,default:`—`,description:`실행 중 Trigger 텍스트를 변경합니다.`},{name:`setDisabled(disabled)`,type:`method`,default:`—`,description:`실행 중 비활성 상태를 변경합니다.`},{name:`addClass() · removeClass() · toggleClass()`,type:`method`,default:`—`,description:`열림·오류·로딩 같은 상태 클래스를 실행 중 갱신합니다.`}],q=[{name:`btn`,description:`루트 구조 클래스`},{name:`btn_filled · btn_outline · btn_ghost · btn_text`,description:`버튼 스킨`},{name:`btn_select · btn_select-text`,description:`셀렉트 박스형·텍스트형 트리거`},{name:`btn_sm · btn_lg`,description:`크기 변형`},{name:`btn_round · btn_vertical · btn_icon-only`,description:`모양과 콘텐츠 배치`},{name:`btn_block · btn_grow · btn_grow-2 · btn_fit`,description:`너비 레이아웃`},{name:`icon · btn_label · btn_spinner`,description:`내부 파트`},{name:`btn_row · btn_group · btn_stack`,description:`버튼 묶음 컨테이너`},{name:`is-disabled · is-loading · is-open · is-error`,description:`상태 클래스`},{name:`data-ripple · data-ripple="false" · data-no-ripple`,description:`클릭 파장 활성·개별 비활성·하위 전체 비활성`},{name:`color_primary · color_danger …`,description:`스킨과 조합하는 색상 유틸리티`}],J=[{name:`--btn-padding-y · --btn-padding-x · --btn-font-size`,default:`0.5rem · 1rem · var(--text-size-base)`,description:`기본(md) 패딩·타이포`},{name:`--btn-padding-y-sm · --btn-padding-x-sm · --btn-font-size-sm`,default:`0.3rem · 0.75rem · var(--text-size-sm)`,description:`sm 크기`},{name:`--btn-padding-y-lg · --btn-padding-x-lg · --btn-font-size-lg`,default:`0.65rem · 1.25rem · var(--text-size-lg)`,description:`lg 크기`},{name:`--btn-font-weight · --btn-line-height`,default:`600 · 1.4`,description:`타이포 두께·줄높이`},{name:`--btn-border-width · --btn-gap`,default:`1px · var(--space-sm)`,description:`테두리·내부 간격`},{name:`--btn-icon-size · --btn-icon-size-lg`,default:`1em · 1.25em`,description:`아이콘 크기`},{name:`--btn-icon-only-padding · --btn-icon-only-padding-sm · --btn-icon-only-padding-lg`,default:`0.5rem · 0.35rem · 0.65rem`,description:`아이콘 버튼 패딩`},{name:`--btn-vertical-min-width`,default:`4.5rem`,description:`세로 배치 최소 너비`},{name:`--btn-select-min-width · --btn-select-max-width`,default:`10rem · 320px`,description:`셀렉트 트리거 너비`},{name:`--btn-spinner-size · --btn-spinner-duration`,default:`1em · 0.6s`,description:`로딩 스피너`},{name:`--btn-group-overlap`,default:`-1px`,description:`그룹 버튼 테두리 겹침`}],Y=[{title:`React · Next.js API · Props`,description:"Next.js는 `@uxkm/react/button`을 재사용합니다. React JSX에서는 camelCase prop과 children을 사용합니다.",tables:[{columns:R,rows:B}]},{title:`Vue · Nuxt API · Props`,description:"Nuxt는 `@uxkm/vue/button`을 재사용합니다. Vue 템플릿에서는 복합어 prop을 kebab-case로 작성합니다.",tables:[{columns:R,rows:V}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:R,rows:H}]},{title:`Vue · Nuxt API · Events`,tables:[{columns:R,rows:U}]},{title:`HTML API · Markup`,description:`HTML은 별도 Button props API를 제공하지 않습니다. 아래 네이티브 속성과 공통 OOCSS 클래스를 마크업에 직접 적용하고, 비네이티브 루트의 키보드·비활성 동작은 사용하는 쪽에서 구현합니다.`,tables:[{columns:R,rows:W}]},{title:`Gulp API · Nunjucks`,description:"`button` macro를 import하고 `{{ button(...) }}` 또는 `{% call button(...) %}`로 인스턴스를 만듭니다. 아이콘은 `iconBefore`·`iconAfter` 이름 문자열로 `Icon` macro를 호출합니다.",tables:[{columns:R,rows:G}]},{title:`WebSquare API · XML`,description:`WebSquare는 네이티브 button 마크업 대신 xf:trigger와 xf:label을 사용하고, 공통 Button 클래스와 scwin 이벤트를 연결합니다.`,tables:[{columns:R,rows:K}]},{title:`공통 API · 클래스`,description:`모든 프레임워크가 동일한 OOCSS 클래스 계약을 사용합니다.`,tables:[{columns:R,rows:q}]},{title:`공통 API · 디자인 토큰`,description:`모든 프레임워크에서 같은 CSS 변수로 Button 스타일을 조정합니다.`,tables:[{columns:R,rows:J}]}]})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...p(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(h,{of:f}),`
`,(0,Q.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,Q.jsx)(t.p,{children:`클릭·키보드 입력으로 사용자 액션이나 링크 이동을 실행하는 컴포넌트입니다. 스킨·색상·크기·아이콘·상태를 props와 유틸리티 클래스로 조합합니다.`}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/button`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/button`}),`으로 제공합니다. Nuxt와 Next.js 예시는 같은 구현을 재사용하므로 코드 탭의 경로도 실제 공통 소스를 가리킵니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`와 `,(0,Q.jsx)(t.code,{children:`xf:label`}),`을 Button 구조로 사용하고 공통 `,(0,Q.jsx)(t.code,{children:`btn`}),` 클래스를 적용합니다. 각 예시의 WebSquare 탭은 화면 XML 루트에서 `,(0,Q.jsx)(t.code,{children:`ev`}),`, `,(0,Q.jsx)(t.code,{children:`w2`}),`, `,(0,Q.jsx)(t.code,{children:`xf`}),` 네임스페이스가 공통 선언되어 있다는 전제의 XML 조각입니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`Button`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 공통 CSS 클래스와 ARIA 속성으로 변환하고, HTML은 같은 클래스를 마크업에 직접 적용하며, Gulp는 `,(0,Q.jsx)(t.code,{children:`button`}),` Nunjucks macro로 동일한 계약을 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`variant`}),`는 `,(0,Q.jsx)(t.code,{children:`btn_filled`}),`·`,(0,Q.jsx)(t.code,{children:`btn_outline`}),`·`,(0,Q.jsx)(t.code,{children:`btn_ghost`}),`·`,(0,Q.jsx)(t.code,{children:`btn_text`}),`·`,(0,Q.jsx)(t.code,{children:`btn_select`}),` 스킨으로 변환됩니다. `,(0,Q.jsx)(t.code,{children:`ghost`}),`를 제외하면 `,(0,Q.jsx)(t.code,{children:`color_*`}),`가 함께 적용됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`size`}),`·`,(0,Q.jsx)(t.code,{children:`iconOnly`}),`·`,(0,Q.jsx)(t.code,{children:`vertical`}),`·`,(0,Q.jsx)(t.code,{children:`round`}),`·`,(0,Q.jsx)(t.code,{children:`block`}),`·`,(0,Q.jsx)(t.code,{children:`grow`}),`·`,(0,Q.jsx)(t.code,{children:`fit`}),`은 레이아웃·형태 클래스로 변환됩니다. `,(0,Q.jsx)(t.code,{children:`md`}),` 크기는 기본값이라 별도 클래스를 붙이지 않습니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`loading`}),`·`,(0,Q.jsx)(t.code,{children:`open`}),`·`,(0,Q.jsx)(t.code,{children:`error`}),`·`,(0,Q.jsx)(t.code,{children:`ariaDisabled`}),`는 `,(0,Q.jsx)(t.code,{children:`is-*`}),` 상태 클래스와 대응 ARIA를 설정합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`tag`}),`로 `,(0,Q.jsx)(t.code,{children:`button`}),`·`,(0,Q.jsx)(t.code,{children:`a`}),`·`,(0,Q.jsx)(t.code,{children:`div`}),`를 선택합니다. `,(0,Q.jsx)(t.code,{children:`div`}),`와 `,(0,Q.jsx)(t.code,{children:`href`}),` 없는 `,(0,Q.jsx)(t.code,{children:`a`}),`에는 `,(0,Q.jsx)(t.code,{children:`role="button"`}),`과 `,(0,Q.jsx)(t.code,{children:`tabindex="0"`}),`을 자동 적용하고 Enter·Space로 클릭을 흉내 냅니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[`텍스트는 `,(0,Q.jsx)(t.code,{children:`btn_label`}),`로 감싸며, React는 `,(0,Q.jsx)(t.code,{children:`iconBefore`}),`·`,(0,Q.jsx)(t.code,{children:`iconAfter`}),`, Vue는 `,(0,Q.jsx)(t.code,{children:`icon-before`}),`·`,(0,Q.jsx)(t.code,{children:`icon-after`}),` 슬롯, Gulp는 `,(0,Q.jsx)(t.code,{children:`iconBefore`}),`·`,(0,Q.jsx)(t.code,{children:`iconAfter`}),` 이름 문자열로 Icon macro를 호출합니다.`]}),`
`]}),`
`,(0,Q.jsx)(v,{examples:A,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[`일반 액션은 `,(0,Q.jsx)(t.code,{children:`type="button"`}),`, 이벤트 기반 링크 표현은 `,(0,Q.jsx)(t.code,{children:`type="anchor"`}),`를 사용합니다. URL로 직접 이동할 때는 화면의 기본 XHTML 네임스페이스를 상속한 `,(0,Q.jsx)(t.code,{children:`a[href]`}),`를 사용합니다. 클릭 로직은 `,(0,Q.jsx)(t.code,{children:`ev:onclick`}),`으로 `,(0,Q.jsx)(t.code,{children:`scwin`}),` 함수에 연결하고, 비활성 상태는 `,(0,Q.jsx)(t.code,{children:`disabled="true"`}),` 또는 `,(0,Q.jsx)(t.code,{children:`setDisabled()`}),`로 제어합니다. Trigger의 렌더링 구조는 HTML Button과 다르므로 아이콘은 프로젝트의 이미지·CSS 리소스 기준으로 연결하고, 텍스트 대체 설명은 `,(0,Q.jsx)(t.code,{children:`xf:label`}),`과 `,(0,Q.jsx)(t.code,{children:`tooltip`}),`에 유지합니다.`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-javascript`,children:`scwin.button_onclick = function () {
  // 프로젝트의 submission, 화면 이동 또는 상태 변경 로직을 호출합니다.
};
`})}),`
`,(0,Q.jsx)(t.h2,{id:`기본-유형`,children:`기본 유형`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_filled`}),` · `,(0,Q.jsx)(t.code,{children:`btn_outline`}),` · `,(0,Q.jsx)(t.code,{children:`btn_ghost`}),` · `,(0,Q.jsx)(t.code,{children:`btn_text`}),` 네 가지 기본 스킨을 제공합니다.`]}),`
`,(0,Q.jsx)(g,{of:ie,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.basic}),`
`,(0,Q.jsx)(t.h2,{id:`셀렉트-박스형`,children:`셀렉트 박스형`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_select`}),` 클래스로 셀렉트 박스처럼 표시합니다. `,(0,Q.jsx)(t.code,{children:`btn_select-text`}),`는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 `,(0,Q.jsx)(t.code,{children:`aria-haspopup`}),`과 `,(0,Q.jsx)(t.code,{children:`aria-expanded`}),`를 지정합니다.`]}),`
`,(0,Q.jsx)(g,{of:ae,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.select}),`
`,(0,Q.jsx)(t.h2,{id:`텍스트-버튼`,children:`텍스트 버튼`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_text`}),` 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다.`]}),`
`,(0,Q.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.text}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--텍스트`,children:`아이콘 + 텍스트`}),`
`,(0,Q.jsxs)(t.p,{children:[`아이콘과 함께 사용하는 텍스트도 `,(0,Q.jsx)(t.code,{children:`btn_label`}),` 클래스로 감쌉니다.`]}),`
`,(0,Q.jsx)(g,{of:re,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.iconText}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--텍스트-세로`,children:`아이콘 + 텍스트 (세로)`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_vertical`}),` 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다.`]}),`
`,(0,Q.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.vertical}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘--텍스트-세로--균등-배분`,children:`아이콘 + 텍스트 (세로) · 균등 배분`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_vertical`}),`과 `,(0,Q.jsx)(t.code,{children:`btn_row-equal`}),`을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다.`]}),`
`,(0,Q.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.verticalEqual}),`
`,(0,Q.jsx)(t.h2,{id:`텍스트--아이콘`,children:`텍스트 + 아이콘`}),`
`,(0,Q.jsxs)(t.p,{children:[`텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 `,(0,Q.jsx)(t.code,{children:`btn_label`}),`로 감쌉니다.`]}),`
`,(0,Q.jsx)(g,{of:te,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.textIcon}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-버튼`,children:`아이콘 버튼`}),`
`,(0,Q.jsxs)(t.p,{children:[`텍스트 없이 아이콘만 표시합니다. `,(0,Q.jsx)(t.code,{children:`btn_icon-only`}),`와 함께 사용하며, 접근성을 위해 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`을 반드시 지정합니다.`]}),`
`,(0,Q.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.iconOnly}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-버튼-크기`,children:`아이콘 버튼 크기`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_sm`}),`, medium, `,(0,Q.jsx)(t.code,{children:`btn_lg`}),` 세 가지 크기를 지원합니다.`]}),`
`,(0,Q.jsx)(g,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.iconSize}),`
`,(0,Q.jsx)(t.h2,{id:`색상-변형`,children:`색상 변형`}),`
`,(0,Q.jsx)(t.p,{children:`상황에 맞는 색상 변형을 사용합니다.`}),`
`,(0,Q.jsx)(g,{of:ne,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.colors}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 지원합니다.`}),`
`,(0,Q.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.sizes}),`
`,(0,Q.jsx)(t.h2,{id:`라운드`,children:`라운드`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`btn_round`}),` 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. `,(0,Q.jsx)(t.code,{children:`btn_icon-only`}),`와 조합하면 원형 아이콘 버튼이 됩니다.`]}),`
`,(0,Q.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.round}),`
`,(0,Q.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,Q.jsxs)(t.p,{children:[`부모 영역 기준으로 너비를 조절합니다. `,(0,Q.jsx)(t.code,{children:`btn_block`}),`은 가로 전체, `,(0,Q.jsx)(t.code,{children:`btn_row-equal`}),`은 부모 100% 너비에서 버튼을 균등 분배, `,(0,Q.jsx)(t.code,{children:`btn_grow`}),`는 비율 분배, `,(0,Q.jsx)(t.code,{children:`btn_fit`}),`은 콘텐츠 너비를 유지합니다.`]}),`
`,(0,Q.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.width}),`
`,(0,Q.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,Q.jsxs)(t.p,{children:[`disabled, `,(0,Q.jsx)(t.code,{children:`is-disabled`}),`, `,(0,Q.jsx)(t.code,{children:`is-loading`}),` 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다.`]}),`
`,(0,Q.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.states}),`
`,(0,Q.jsx)(t.h2,{id:`버튼-그룹`,children:`버튼 그룹`}),`
`,(0,Q.jsxs)(t.p,{children:[`가로·세로 방향으로 버튼을 묶습니다. `,(0,Q.jsx)(t.code,{children:`btn_group-fit`}),`은 콘텐츠 크기 맞춤, `,(0,Q.jsx)(t.code,{children:`btn_group-block`}),`은 전체 너비 균등 분배, `,(0,Q.jsx)(t.code,{children:`btn_group-align-start`}),`·`,(0,Q.jsx)(t.code,{children:`center`}),`·`,(0,Q.jsx)(t.code,{children:`end`}),`로 그룹 정렬을 지정합니다.`]}),`
`,(0,Q.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.groups}),`
`,(0,Q.jsx)(t.h2,{id:`루트-태그`,children:`루트 태그`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`tag`}),` prop으로 `,(0,Q.jsx)(t.code,{children:`button`}),` · `,(0,Q.jsx)(t.code,{children:`a`}),` · `,(0,Q.jsx)(t.code,{children:`div`}),`를 선택합니다. `,(0,Q.jsx)(t.code,{children:`div`}),`와 `,(0,Q.jsx)(t.code,{children:`href`}),` 없는 `,(0,Q.jsx)(t.code,{children:`a`}),`에는 키보드 접근을 위해 `,(0,Q.jsx)(t.code,{children:`role`}),`과 `,(0,Q.jsx)(t.code,{children:`tabindex=0`}),`을 자동 적용합니다.`]}),`
`,(0,Q.jsx)(g,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(v,{examples:I.tags}),`
`,(0,Q.jsx)(le,{sections:Y})]})}function ve(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),m(),se(),ce(),_(),L(),X(),oe()})))()}$();export{ve as default};