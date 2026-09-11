import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i}from"./blocks-DKrjMPN_.js";import{n as a,t as o}from"./FrameworkTabs-duseEU1T.js";import{a as s,c,d as l,f as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as ee,t as v,u as y}from"./Tag.stories-DEmIGYNK.js";import{i as b,r as x}from"./react-CQ14Jk9E.js";import{n as te,t as ne}from"./ComponentApiDocs-C9VNL7Yh.js";import{i as S,r as C}from"./dataDisplayApiSections-w1k9tZfi.js";var w;function T(){return(T=e((()=>{w=`<!-- Tag 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- 기본 · 스킨 · 크기 -->
<span class="tag color_primary" data-component="Tag">Primary</span>
<span class="tag tag_outline color_success" data-component="Tag">Outline</span>
<span class="tag tag_sm color_primary" data-component="Tag">Small</span>

<!-- 선택 · 추가 -->
<button class="tag tag_checkable color_default is-selected" data-component="Tag" data-ripple="true" type="button" aria-pressed="true">전체</button>
<button class="tag tag_add tag_round color_primary" data-component="Tag" data-ripple="true" type="button">+ 태그 추가</button>

<!-- 링크 · 닫기 -->
<a class="tag tag_outline color_primary" data-component="Tag" href="#">가이드</a>
<span class="tag color_primary" data-component="Tag">
  React
  <button class="tag_close" type="button" aria-label="React 태그 제거">
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path d="m6 6 12 12M18 6 6 18"></path>
    </svg>
  </button>
</span>

<!-- 그룹 -->
<div class="tag_group" data-component="TagGroup" role="group" aria-label="카테고리 필터">
  <button class="tag tag_checkable color_default is-selected" data-component="Tag" data-ripple="true" type="button" aria-pressed="true">전체</button>
  <button class="tag tag_checkable color_default" data-component="Tag" data-ripple="true" type="button" aria-pressed="false">UI</button>
</div>
`})))()}var E;function D(){return(D=e((()=>{E=`{# Tag 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 접근성 의미를 연결합니다. #}
{# tag · tagGroup macro로 스킨·상태·닫기·선택·링크·그룹을 조합합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro tag(
  label = '',
  icon = '',
  color = 'primary',
  variant = 'filled',
  size = 'md',
  round = false,
  checkable = false,
  add = false,
  closable = false,
  selected = false,
  disabled = false,
  href = '',
  ripple = '',
  closeLabel = '',
  className = ''
) %}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = label -%}
{%- endif -%}
{%- set resolvedVariant = variant if variant in ['filled', 'solid', 'outline', 'borderless'] else 'filled' -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
{%- set interactive = checkable or add or href -%}
{%- set splitControl = closable and interactive -%}
{%- set classes =
  'tag'
  + ' color_' + color
  + ((' tag_' + resolvedVariant) if resolvedVariant != 'filled' else '')
  + ((' tag_' + resolvedSize) if resolvedSize != 'md' else '')
  + (' tag_round' if round else '')
  + (' tag_checkable' if checkable else '')
  + (' tag_add' if add else '')
  + (' is-selected' if selected else '')
  + (' is-disabled' if disabled else '')
  + ((' ' + className) if className else '')
-%}
{%- set rippleValue = 'false' if ripple == false else ('true' if ripple == true or interactive else '') -%}
{%- set closeText = closeLabel if closeLabel else ((label + ' 태그 제거') if label else '태그 제거') -%}
{%- if splitControl -%}
<span class="{{ classes }}" data-component="Tag" {% if disabled %}aria-disabled="true"{% endif %}>
  <{{ 'button' if checkable or add else 'a' }}
    class="tag_control"
    {% if rippleValue %}data-ripple="{{ rippleValue }}"{% endif %}
    {% if checkable %}aria-pressed="{{ 'true' if selected else 'false' }}"{% endif %}
    {% if checkable or add %}type="button"{% endif %}
    {% if checkable or add %}{% if disabled %}disabled{% endif %}{% else %}href="{{ href if href and not disabled else '#' }}"{% if disabled %} aria-disabled="true" tabindex="-1"{% endif %}{% endif %}
  >
    {%- if icon -%}<span class="tag_icon" aria-hidden="true">{{ Icon.icon(name=icon) }}</span>{%- endif -%}
    {{ content | safe }}
  </{{ 'button' if checkable or add else 'a' }}>
  <button class="tag_close" type="button" aria-label="{{ closeText }}" {% if disabled %}disabled{% endif %}>
    {{ Icon.icon(name='close') }}
  </button>
</span>
{%- else -%}
<{{ 'button' if checkable or add else ('a' if href else 'span') }}
  class="{{ classes }}"
  data-component="Tag"
  {% if rippleValue %}data-ripple="{{ rippleValue }}"{% endif %}
  {% if checkable %}aria-pressed="{{ 'true' if selected else 'false' }}"{% endif %}
  {% if checkable or add %}type="button"{% endif %}
  {% if checkable or add %}{% if disabled %}disabled{% endif %}{% endif %}
  {% if href and not (checkable or add) %}href="{{ href if not disabled else '#' }}"{% endif %}
  {% if href and disabled and not (checkable or add) %}aria-disabled="true" tabindex="-1"{% endif %}
  {% if not (checkable or add) and disabled and not href %}aria-disabled="true"{% endif %}
>
  {%- if icon -%}<span class="tag_icon" aria-hidden="true">{{ Icon.icon(name=icon) }}</span>{%- endif -%}
  {{ content | safe }}
  {%- if closable -%}
  <button class="tag_close" type="button" aria-label="{{ closeText }}" {% if disabled %}disabled{% endif %}>
    {{ Icon.icon(name='close') }}
  </button>
  {%- endif -%}
</{{ 'button' if checkable or add else ('a' if href else 'span') }}>
{%- endif -%}
{% endmacro %}

{% macro tagGroup(tight = false, ariaLabel = '', className = '') %}
{%- set content = caller() if caller else '' -%}
{%- set classes = 'tag_group' + (' tag_group-tight' if tight else '') + ((' ' + className) if className else '') -%}
<div class="{{ classes }}" data-component="TagGroup" role="group" {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}>
  {{ content | safe }}
</div>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call tagGroup(ariaLabel='카테고리 필터') %}
  {{ tag(checkable=true, selected=true, color='default', label='전체') }}
  {{ tag(checkable=true, color='default', label='UI') }}
  {{ tag(closable=true, label='React', closeLabel='React 태그 제거') }}
{% endcall %}
`})))()}var O;function k(){return(k=e((()=>{O=`/**
 * Tag 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 variant와 size는 각각 filled와 md로 정규화합니다.
const VALID_VARIANTS = ['filled', 'solid', 'outline', 'borderless'];
const VALID_SIZES = ['sm', 'md', 'lg'];

const CloseIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

// 외형, 상호작용, 상태, 접근성 값을 하나의 Tag API로 조합합니다.
export function Tag({
  children, // 태그 텍스트입니다. 없으면 label을 사용합니다.
  label, // children 대신 표시할 텍스트입니다.
  icon, // 텍스트 앞 아이콘입니다.
  color = 'primary', // color_* 공통 색상 클래스입니다.
  variant = 'filled', // filled · solid · outline · borderless 스킨입니다.
  size = 'md', // sm · md · lg 크기입니다.
  round = false, // 둥근 pill 형태입니다.
  checkable = false, // 선택 가능한 태그입니다.
  add = false, // 추가(+) 트리거 태그입니다.
  closable = false, // 닫기 버튼 표시 여부입니다.
  selected = false, // 선택된 상태입니다.
  disabled = false, // 비활성 상태입니다.
  ripple, // 리플 효과입니다. 상호작용 태그에서 기본 켜짐입니다.
  href, // 링크형 태그의 주소입니다.
  closeLabel, // 닫기 버튼 접근성 이름입니다.
  className = '', // 추가 클래스입니다.
  onClick, // 클릭 핸들러입니다.
  onClose, // 닫기 버튼 클릭 핸들러입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // prop에 따라 루트 의미와 닫기 버튼 분리 여부를 결정합니다.
  const resolvedVariant = VALID_VARIANTS.includes(variant) ? variant : 'filled';
  const resolvedSize = VALID_SIZES.includes(size) ? size : 'md';
  const interactive = checkable || add || Boolean(href);
  const splitControl = closable && interactive;
  // 외형과 상태를 tag_* · color_* · is-* 공통 클래스로 변환합니다.
  const classes = [
    'tag',
    \`color_\${color}\`,
    resolvedVariant !== 'filled' && \`tag_\${resolvedVariant}\`,
    resolvedSize !== 'md' && \`tag_\${resolvedSize}\`,
    round && 'tag_round',
    checkable && 'tag_checkable',
    add && 'tag_add',
    selected && 'is-selected',
    disabled && 'is-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  // 클릭 가능한 Tag에만 기본 리플 효과를 적용합니다.
  const rippleProps =
    ripple === false
      ? { 'data-ripple': 'false' }
      : ripple === true || interactive
        ? { 'data-ripple': 'true' }
        : {};
  const content = (
    <>
      {icon ? (
        <span className="tag_icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children ?? label}
    </>
  );
  // 닫기는 독립 버튼이며 부모 Tag의 클릭 이벤트 전파를 막습니다.
  const closeButton = closable ? (
    <button
      className="tag_close"
      type="button"
      aria-label={
        closeLabel ||
        (typeof (label ?? children) === 'string' ? \`\${label ?? children} 태그 제거\` : '태그 제거')
      }
      disabled={disabled || undefined}
      onClick={(event) => {
        event.stopPropagation();
        onClose?.(event);
      }}
    >
      <CloseIcon />
    </button>
  ) : null;

  // 비활성 Tag는 기본 동작과 사용자 이벤트를 모두 차단합니다.
  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  // 클릭 가능한 본문과 닫기 버튼이 함께 있으면 인터랙티브 요소를 형제로 분리합니다.
  if (splitControl) {
    const Control = checkable || add ? 'button' : 'a';
    return (
      <span
        {...props}
        className={classes}
        data-component="Tag"
        aria-disabled={disabled || undefined}
      >
        <Control
          className="tag_control"
          {...rippleProps}
          type={Control === 'button' ? 'button' : undefined}
          href={Control === 'a' && !disabled ? href : undefined}
          disabled={Control === 'button' ? disabled : undefined}
          aria-disabled={Control === 'a' && disabled ? true : undefined}
          aria-pressed={checkable ? selected : undefined}
          tabIndex={Control === 'a' && disabled ? -1 : undefined}
          onClick={handleClick}
        >
          {content}
        </Control>
        {closeButton}
      </span>
    );
  }

  // 선택·추가는 button, URL 이동은 a, 정적 Tag는 span을 사용합니다.
  const Root = checkable || add ? 'button' : href ? 'a' : 'span';
  return (
    <Root
      {...props}
      {...rippleProps}
      aria-disabled={Root !== 'button' && disabled ? true : undefined}
      aria-pressed={checkable ? selected : undefined}
      className={classes}
      data-component="Tag"
      disabled={Root === 'button' ? disabled : undefined}
      href={Root === 'a' && !disabled ? href : undefined}
      onClick={handleClick}
      tabIndex={Root === 'a' && disabled ? -1 : undefined}
      type={Root === 'button' ? 'button' : undefined}
    >
      {content}
      {closeButton}
    </Root>
  );
}

export function TagGroup({
  children, // 그룹에 배치할 Tag들입니다.
  tight = false, // 좁은 간격 변형 여부입니다.
  ariaLabel, // 그룹의 접근 가능한 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 관련 Tag를 접근 가능한 그룹으로 묶고 tight 간격을 선택적으로 적용합니다.
  const classes = ['tag_group', tight && 'tag_group-tight', className].filter(Boolean).join(' ');
  return (
    <div
      {...props}
      aria-label={ariaLabel}
      className={classes}
      data-component="TagGroup"
      role="group"
    >
      {children}
    </div>
  );
}

export default Tag;
`})))()}var A;function j(){return(j=e((()=>{A=`<!--
  Tag 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// class를 포함한 전달 속성을 최외곽 요소에 직접 적용합니다.
defineOptions({ name: 'UxkmTag', inheritAttrs: false });

// 외형, 상호작용, 상태와 접근성 값을 prop으로 받습니다.
const props = defineProps({
  label: String, // children 대신 표시할 텍스트입니다.
  color: { type: String, default: 'primary' }, // color_* 공통 색상 클래스입니다.
  variant: { // filled · solid · outline · borderless 스킨입니다.
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'solid', 'outline', 'borderless'].includes(value),
  }, // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  round: Boolean, // 둥근 pill 형태입니다.
  checkable: Boolean, // 선택 가능한 태그입니다.
  add: Boolean, // 추가(+) 트리거 태그입니다.
  closable: Boolean, // 닫기 버튼을 표시합니다.
  selected: Boolean, // 선택된 상태입니다.
  disabled: Boolean, // 비활성 상태입니다.
  ripple: { type: Boolean, default: undefined }, // 리플 효과입니다. 상호작용 태그에서 기본 켜짐입니다.
  href: String, // 링크형 태그의 주소입니다.
  closeLabel: String, // 닫기 버튼 접근성 이름입니다.
});

const attrs = useAttrs();
const emit = defineEmits(['click', 'close']);
// prop에 따라 루트 태그와 닫기 버튼 분리 여부를 계산합니다.
const interactive = computed(() => props.checkable || props.add || Boolean(props.href));
const splitControl = computed(() => props.closable && interactive.value);
const rootTag = computed(() =>
  splitControl.value ? 'span' : props.checkable || props.add ? 'button' : props.href ? 'a' : 'span',
);
const controlTag = computed(() => (props.checkable || props.add ? 'button' : 'a'));
// prop을 tag_* · color_* · is-* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'tag',
    \`color_\${props.color}\`,
    props.variant !== 'filled' && \`tag_\${props.variant}\`,
    props.size !== 'md' && \`tag_\${props.size}\`,
    props.round && 'tag_round',
    props.checkable && 'tag_checkable',
    props.add && 'tag_add',
    props.selected && 'is-selected',
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);
// 클릭 가능한 Tag에만 기본 리플 효과를 적용합니다.
const rippleAttrs = computed(() =>
  props.ripple === false
    ? { 'data-ripple': 'false' }
    : props.ripple === true || interactive.value
      ? { 'data-ripple': 'true' }
      : {},
);
const rootAttrs = computed(() => ({ ...attrs, ...(splitControl.value ? {} : rippleAttrs.value) }));

// 비활성 상태에서는 기본 동작과 사용자 이벤트를 차단합니다.
function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}

// 닫기 이벤트는 Tag 본문 클릭으로 전파하지 않습니다.
function handleClose(event) {
  event.stopPropagation();
  emit('close', event);
}
<\/script>

<template>
  <!-- 정적·버튼·링크 의미에 맞는 동적 루트와 접근성 상태를 렌더링합니다. -->
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Tag"
    :type="rootTag === 'button' ? 'button' : undefined"
    :href="rootTag === 'a' && !disabled ? href : undefined"
    :disabled="rootTag === 'button' ? disabled : undefined"
    :aria-disabled="rootTag !== 'button' && disabled ? 'true' : undefined"
    :aria-pressed="checkable && !splitControl ? String(selected) : undefined"
    :tabindex="rootTag === 'a' && disabled ? -1 : undefined"
    @click="splitControl || handleClick($event)"
  >
    <!-- 닫기 가능한 인터랙티브 Tag는 본문 컨트롤과 닫기 버튼을 분리합니다. -->
    <component
      :is="controlTag"
      v-if="splitControl"
      class="tag_control"
      v-bind="rippleAttrs"
      :type="controlTag === 'button' ? 'button' : undefined"
      :href="controlTag === 'a' && !disabled ? href : undefined"
      :disabled="controlTag === 'button' ? disabled : undefined"
      :aria-disabled="controlTag === 'a' && disabled ? 'true' : undefined"
      :aria-pressed="checkable ? String(selected) : undefined"
      :tabindex="controlTag === 'a' && disabled ? -1 : undefined"
      @click="handleClick"
    >
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true"><slot name="icon" /></span>
      <slot>{{ label }}</slot>
    </component>
    <template v-else>
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true"><slot name="icon" /></span>
      <slot>{{ label }}</slot>
    </template>
    <button
      v-if="closable"
      class="tag_close"
      type="button"
      :aria-label="closeLabel || \`\${label || ''} 태그 제거\`"
      :disabled="disabled || undefined"
      @click="handleClose"
    >
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    </button>
  </component>
</template>
`})))()}var M;function N(){return(N=e((()=>{M=`<!--
  TagGroup 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmTagGroup', inheritAttrs: false });
const props = defineProps({
  tight: Boolean, // 태그 간격을 좁힙니다.
  ariaLabel: String, // 그룹의 접근성 이름입니다.
});
const attrs = useAttrs();
// tight과 사용자 정의 class를 그룹 클래스에 합칩니다.
const classes = computed(() =>
  ['tag_group', props.tight && 'tag_group-tight', attrs.class].filter(Boolean),
);
<\/script>

<template>
  <!-- 관련 Tag를 하나의 접근 가능한 그룹으로 묶습니다. -->
  <div
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    data-component="TagGroup"
    role="group"
  >
    <slot />
  </div>
</template>
`})))()}function P(e){let t={},n=/([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2]==null||r[2];return t}function F(e){let t=P(e),n=t.checkable||t.add?`button`:t.href?`a`:`span`,r=[`tag`,`color_${t.color||`primary`}`,t.variant&&t.variant!==`filled`&&`tag_${t.variant}`,t.size&&t.size!==`md`&&`tag_${t.size}`,t.round&&`tag_round`,t.checkable&&`tag_checkable`,t.add&&`tag_add`,t.selected&&`is-selected`,t.disabled&&`is-disabled`].filter(Boolean).join(` `),i=t.label?String(t.label):``,a=t.icon?`\n  <span class="tag_icon" aria-hidden="true">${String(t.icon)}</span>`:``,o=t.closeLabel?String(t.closeLabel):`${i||`태그`} 태그 제거`,s=t.closable?`\n  <button class="tag_close" type="button" aria-label="${o}">×</button>`:``;return`<${n} class="${r}" data-component="Tag"${t.href&&n===`a`?` href="${t.href}"`:``}${t.checkable?` type="button" aria-pressed="${t.selected?`true`:`false`}"`:``}${t.add?` type="button"`:``}${t.disabled&&n===`button`?` disabled`:``}${t.disabled&&n!==`button`?` aria-disabled="true"`:``}>${a}${a||s?`\n  ${i}`:i}${s}${a||s?`
`:``}</${n}>`}function I(e){return e.replace(/<TagGroup\s*([^>]*)>/g,(e,t)=>{let n=P(t);return`<div class="tag_group${n.tight?` tag_group-tight`:``}" data-component="TagGroup" role="group"${n.ariaLabel?` aria-label="${n.ariaLabel}"`:``}>`}).replace(/<\/TagGroup>/g,`</div>`).replace(/<Tag\s+([^>]*?)\s*\/>/g,(e,t)=>F(t))}function L(e){let t={closeLabel:`closeLabel`,ariaLabel:`ariaLabel`};function n(e){let n=[],r=P(e);return Object.entries(r).forEach(([e,r])=>{let i=t[e]??e;r===!0?n.push(`${i}=true`):n.push(`${i}='${String(r)}'`)}),n.join(`, `)}let r=e.replace(/<TagGroup\s*([^>]*)>/g,(e,t)=>`{% call tagGroup(${n(t)}) %}`).replace(/<\/TagGroup>/g,`{% endcall %}`).replace(/<Tag\s+([^>]*?)\s*\/>/g,(e,t)=>`{{ tag(${n(t)}) }}`);return r=r.replace(/\{\% call tagGroup\((.*?)\) \%\}\s*\{\{/g,`{% call tagGroup($1) %}
  {{`).replace(/\}\}\s*\{\% endcall \%\}/g,`}}
{% endcall %}`),`{% from "components/data-display/Tag/tag.njk" import tag, tagGroup %}\n\n${r.trim()}`}function R(e){return e.replace(/<Tag\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=P(t),r=Object.entries(n).filter(([e])=>e!==`icon`).map(([e,t])=>t===!0||G.has(e)&&t===`true`?e:`${e}="${t}"`);return n.icon&&r.push(`icon={<Icon name="${n.icon}" />}`),`<Tag ${r.join(` `)} />`})}function z(e){return e.replace(/ariaLabel=/g,`aria-label=`).replace(/closeLabel=/g,`close-label=`).replace(/<Tag\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=P(t.replace(/ariaLabel=/g,`aria-label=`).replace(/closeLabel=/g,`close-label=`)),r=Object.entries(n).filter(([e])=>e!==`icon`).map(([e,t])=>t===!0||G.has(e)&&t===`true`?e:`${e}="${t}"`).join(` `);return n.icon?`<Tag ${r}>\n  <template #icon><Icon name="${n.icon}" /></template>\n</Tag>`:`<Tag ${r} />`})}function B(e,t,n={}){let r=[`tag`,`color_${n.color??`primary`}`,n.variant&&n.variant!==`filled`&&`tag_${n.variant}`,n.size&&n.size!==`md`&&`tag_${n.size}`,n.round&&`tag_round`,n.checkable&&`tag_checkable`,n.add&&`tag_add`,n.selected&&`is-selected`,n.disabled&&`is-disabled`].filter(Boolean).join(` `),i=n.icon?`  <!-- ${n.icon} 아이콘은 프로젝트 이미지 또는 CSS background-image 리소스에 연결합니다. -->\n`:``;return n.closable?`<w2:group id="${e}" class="${r}">
${i}  <w2:textbox id="${e}Label" tagname="span"${n.icon?` class="tag_icon-label"`:``} label="${t}"></w2:textbox>
  <xf:trigger id="${e}Close" type="button" class="tag_close" tooltip="${t} 태그 제거"${n.disabled?` disabled="true"`:` ev:onclick="scwin.tagClose_onclick"`}>
    <xf:label><![CDATA[×]]></xf:label>
  </xf:trigger>
</w2:group>`:n.checkable||n.add?`${i}<xf:trigger
  id="${e}"
  type="button"
  class="${r}"
  data-ripple="true"${n.checkable?`
  aria-pressed="${n.selected?`true`:`false`}"`:``}${n.disabled?`
  disabled="true"`:`
  ev:onclick="scwin.tag_onclick"`}>
  <xf:label><![CDATA[${t}]]></xf:label>
</xf:trigger>`:n.href?`${i}<w2:anchor id="${e}" class="${r}" href="${n.href}">
  <xf:label><![CDATA[${t}]]></xf:label>
</w2:anchor>`:`${i}<w2:textbox id="${e}" tagname="span" class="${r}" label="${t}"${n.disabled?` aria-disabled="true"`:``}></w2:textbox>`}function V(e,t,n=!1,r){return`<w2:group id="${e}" class="tag_group${n?` tag_group-tight`:``}" role="group"${r?` aria-label="${r}"`:``}>
${t.join(`
`).split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}var H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{T(),D(),k(),j(),N(),H=`${A}\n\n<!-- TagGroup.vue -->\n${M}`,U=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Tag/Tag.html`,code:w},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Tag/tag.njk`,code:E},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Tag/Tag.vue · TagGroup.vue`,code:H},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tag → Tag.vue · TagGroup.vue`,code:H},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Tag/Tag.jsx`,code:O},{id:`next`,label:`Next`,fileName:`@uxkm/react/tag → Tag.jsx`,code:O}],W={basic:`<Tag color="default" label="Default" />
<Tag color="primary" label="Primary" />
<Tag color="success" label="Success" />
<Tag color="warning" label="Warning" />
<Tag color="danger" label="Danger" />`,solid:`<Tag variant="solid" color="default" label="Default" />
<Tag variant="solid" color="primary" label="Primary" />
<Tag variant="solid" color="success" label="Success" />
<Tag variant="solid" color="warning" label="Warning" />
<Tag variant="solid" color="danger" label="Danger" />`,outline:`<Tag variant="outline" color="default" label="Default" />
<Tag variant="outline" color="primary" label="Primary" />
<Tag variant="outline" color="success" label="Success" />
<Tag variant="outline" color="warning" label="Warning" />
<Tag variant="outline" color="danger" label="Danger" />`,sizes:`<TagGroup tight>
  <Tag size="sm" label="Small" />
  <Tag label="Medium" />
  <Tag size="lg" label="Large" />
</TagGroup>`,round:`<Tag round label="Filled" />
<Tag round variant="outline" label="Outline" />
<Tag round variant="solid" label="Solid" />
<Tag round variant="borderless" color="default" label="Borderless" />`,icon:`<Tag label="Design" icon="star" />
<Tag variant="outline" color="success" label="Verified" icon="check" />
<Tag variant="solid" color="danger" label="Error" icon="close" />`,closable:`<Tag closable label="React" closeLabel="React 태그 제거" />
<Tag closable variant="outline" color="default" label="Svelte" />
<Tag closable variant="solid" color="danger" label="Deprecated" />`,checkable:`<TagGroup ariaLabel="카테고리 필터">
  <Tag checkable selected color="default" label="전체" />
  <Tag checkable color="default" label="UI" />
  <Tag checkable color="default" label="UX" />
</TagGroup>`,add:`<Tag add round label="태그 추가" icon="plus" />
<Tag add size="sm" label="+ New Tag" />
<Tag add size="lg" round label="+ 카테고리 추가" />`,link:`<Tag href="#" label="문서 보기" />
<Tag href="#" variant="outline" label="가이드" />
<Tag href="#" round variant="outline" color="success" label="외부 링크" icon="external" />`,disabled:`<Tag disabled label="Filled" />
<Tag disabled variant="outline" color="success" label="Outline" />
<Tag disabled checkable selected color="default" label="선택됨 (비활성)" />`,group:`<TagGroup>
  <Tag label="HTML" />
  <Tag label="CSS" />
  <Tag color="success" label="SCSS" />
</TagGroup>`},G=new Set([`round`,`checkable`,`add`,`closable`,`selected`,`disabled`,`tight`]),K=[`default`,`primary`,`success`,`warning`,`danger`,`info`],q=(e=`filled`)=>V(`tag${e[0].toUpperCase()}${e.slice(1)}Example`,K.map(t=>B(`tag${e}${t}`,t,{color:t,variant:e}))),J={basic:q(),solid:q(`solid`),outline:q(`outline`),sizes:V(`tagSizesExample`,[B(`tagSmall`,`Small`,{size:`sm`}),B(`tagMedium`,`Medium`),B(`tagLarge`,`Large`,{size:`lg`})],!0),round:V(`tagRoundExample`,[B(`tagRoundFilled`,`Filled`,{round:!0}),B(`tagRoundOutline`,`Outline`,{round:!0,variant:`outline`}),B(`tagRoundSolid`,`Solid`,{round:!0,variant:`solid`})]),icon:V(`tagIconExample`,[B(`tagDesign`,`Design`,{icon:`star`})]),closable:V(`tagClosableExample`,[B(`tagReact`,`React`,{closable:!0})],!0),checkable:V(`tagCheckableExample`,[B(`tagAll`,`전체`,{checkable:!0,color:`default`,selected:!0}),B(`tagUi`,`UI`,{checkable:!0,color:`default`})],!1,`카테고리 필터`),add:V(`tagAddExample`,[B(`tagAdd`,`+ 태그 추가`,{add:!0,round:!0})]),link:V(`tagLinkExample`,[B(`tagGuide`,`가이드`,{href:`#`,variant:`outline`})]),disabled:V(`tagDisabledExample`,[B(`tagDisabledStatic`,`Filled`,{disabled:!0}),B(`tagDisabledCheckable`,`선택됨`,{checkable:!0,color:`default`,disabled:!0,selected:!0})]),group:V(`tagGroupExample`,[B(`tagHtml`,`HTML`),B(`tagCss`,`CSS`),B(`tagScss`,`SCSS`,{color:`success`})])},Y=Object.fromEntries(Object.keys(W).map(e=>{let t=W[e],n=R(t),r=z(t),i=t.includes(`icon=`);return[e,[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Tag/Tag.html · ${e}`,code:I(t)},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Tag/tag.njk · ${e}`,code:L(t)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/tag → apps/vue/src/components/data-display/Tag/Tag.vue · ${e}`,code:`<script setup>\nimport { Tag, TagGroup } from '@uxkm/vue/tag';${i?`
import Icon from '@uxkm/vue/icon';`:``}\n<\/script>\n\n<template>\n${r.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tag → apps/vue/src/components/data-display/Tag/Tag.vue · ${e}`,code:`<script setup>\nimport { Tag, TagGroup } from '@uxkm/vue/tag';${i?`
import Icon from '@uxkm/vue/icon';`:``}\n<\/script>\n\n<template>\n${r.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/tag → apps/react/src/components/data-display/Tag/Tag.jsx · ${e}`,code:`import { Tag, TagGroup } from '@uxkm/react/tag';${i?`
import Icon from '@uxkm/react/icon';`:``}\n\nexport function Example() {\n  return (\n  <>\n${n.split(`
`).map(e=>e.trim()?`    ${e}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`next`,label:`Next`,fileName:`@uxkm/react/tag → apps/react/src/components/data-display/Tag/Tag.jsx · ${e}`,code:`import { Tag, TagGroup } from '@uxkm/react/tag';${i?`
import Icon from '@uxkm/react/icon';`:``}\n\nexport function Example() {\n  return (\n  <>\n${n.split(`
`).map(e=>e.trim()?`    ${e}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`websquare`,label:`WebSquare`,fileName:`Tag.xml · ${e}`,code:J[e]}]]}))})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...b(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(i,{of:u}),`
`,(0,Q.jsx)(t.h1,{id:`tag`,children:`Tag`}),`
`,(0,Q.jsx)(t.p,{children:`카테고리, 필터, 선택 항목을 표시합니다. 스킨·크기·아이콘·닫기·선택·추가·링크·비활성 상태를 하나의 공통 API로 제공합니다.`}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/tag`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/tag`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 정적 Tag에 `,(0,Q.jsx)(t.code,{children:`w2:textbox`}),`, 선택·추가 Tag에 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`, 링크 Tag에 `,(0,Q.jsx)(t.code,{children:`w2:anchor`}),`를 사용합니다. 각 WebSquare 탭의 코드는 화면 XML 루트에서 `,(0,Q.jsx)(t.code,{children:`w2`}),`, `,(0,Q.jsx)(t.code,{children:`xf`}),`, `,(0,Q.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`Tag`}),`와 `,(0,Q.jsx)(t.code,{children:`TagGroup`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 prop에 따라 루트 요소·상태·공통 클래스를 선택하고, HTML은 같은 구조를 마크업에 직접 적용하며, Gulp는 `,(0,Q.jsx)(t.code,{children:`tag`}),` · `,(0,Q.jsx)(t.code,{children:`tagGroup`}),` Nunjucks macro로 동일한 계약을 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`variant`}),`·`,(0,Q.jsx)(t.code,{children:`color`}),`·`,(0,Q.jsx)(t.code,{children:`size`}),`·`,(0,Q.jsx)(t.code,{children:`round`}),`는 `,(0,Q.jsx)(t.code,{children:`tag_*`}),`·`,(0,Q.jsx)(t.code,{children:`color_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`checkable`}),`·`,(0,Q.jsx)(t.code,{children:`add`}),`는 button, `,(0,Q.jsx)(t.code,{children:`href`}),`는 anchor, 나머지는 정적 span 의미를 사용합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`selected`}),`는 `,(0,Q.jsx)(t.code,{children:`is-selected`}),`와 `,(0,Q.jsx)(t.code,{children:`aria-pressed`}),`, `,(0,Q.jsx)(t.code,{children:`disabled`}),`는 네이티브 `,(0,Q.jsx)(t.code,{children:`disabled`}),` 또는 `,(0,Q.jsx)(t.code,{children:`aria-disabled`}),`를 적용합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`closable`}),`은 독립된 `,(0,Q.jsx)(t.code,{children:`tag_close`}),` 버튼을 만들며, 링크·선택·추가 Tag와 조합하면 인터랙티브 요소가 중첩되지 않도록 `,(0,Q.jsx)(t.code,{children:`tag_control`}),`을 분리합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`TagGroup`}),`은 관련 Tag를 `,(0,Q.jsx)(t.code,{children:`role="group"`}),`으로 묶고 `,(0,Q.jsx)(t.code,{children:`tight`}),`으로 간격을 줄입니다.`]}),`
`]}),`
`,(0,Q.jsx)(o,{examples:U,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[`정적 레이블은 `,(0,Q.jsx)(t.code,{children:`w2:textbox`}),`, 선택·추가 동작은 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`, URL 이동은 `,(0,Q.jsx)(t.code,{children:`w2:anchor`}),`로 의미를 구분합니다. 선택 가능한 Tag는 `,(0,Q.jsx)(t.code,{children:`aria-pressed`}),`를 화면 상태와 함께 갱신하고, `,(0,Q.jsx)(t.code,{children:`ev:onclick`}),`에서 선택 데이터와 `,(0,Q.jsx)(t.code,{children:`is-selected`}),` 클래스를 동기화합니다. 닫기 버튼은 별도의 `,(0,Q.jsx)(t.code,{children:`xf:trigger.tag_close`}),`로 만들고 태그 제거 로직에 연결합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`아이콘은 프로젝트의 정적 이미지나 CSS 배경 리소스에 연결합니다. 반복되는 Tag 목록은 DataList와 `,(0,Q.jsx)(t.code,{children:`w2:generator`}),`를 사용할 수 있으며, 비활성 Trigger에는 이벤트를 연결하지 않습니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`기본-filled`,children:`기본 (Filled)`}),`
`,(0,Q.jsx)(t.p,{children:`연한 배경의 기본 태그입니다.`}),`
`,(0,Q.jsx)(r,{of:m,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.basic}),`
`,(0,Q.jsx)(t.h2,{id:`솔리드`,children:`솔리드`}),`
`,(0,Q.jsx)(t.p,{children:`강조가 필요한 레이블에 대비가 높은 채움 스킨을 사용합니다.`}),`
`,(0,Q.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.solid}),`
`,(0,Q.jsx)(t.h2,{id:`아웃라인`,children:`아웃라인`}),`
`,(0,Q.jsx)(t.p,{children:`배경 없이 테두리로 구분합니다.`}),`
`,(0,Q.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.outline}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 모든 스킨에 적용할 수 있습니다.`}),`
`,(0,Q.jsx)(r,{of:y,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.sizes}),`
`,(0,Q.jsx)(t.h2,{id:`둥근`,children:`둥근`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`round`}),` 또는 `,(0,Q.jsx)(t.code,{children:`tag_round`}),`로 pill 형태를 적용합니다.`]}),`
`,(0,Q.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.round}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`icon`}),` prop 또는 슬롯과 `,(0,Q.jsx)(t.code,{children:`tag_icon`}),`으로 앞 아이콘을 배치합니다.`]}),`
`,(0,Q.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.icon}),`
`,(0,Q.jsx)(t.h2,{id:`닫기-가능`,children:`닫기 가능`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`closable`}),`은 독립적인 닫기 버튼을 제공합니다. 선택·추가·링크와 조합할 때 인터랙티브 요소가 중첩되지 않도록 본문 컨트롤을 분리합니다.`]}),`
`,(0,Q.jsx)(r,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.closable}),`
`,(0,Q.jsx)(t.h2,{id:`선택-가능`,children:`선택 가능`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`checkable`}),` 태그는 button과 `,(0,Q.jsx)(t.code,{children:`aria-pressed`}),`로 현재 선택 상태를 전달합니다.`]}),`
`,(0,Q.jsx)(r,{of:_,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.checkable}),`
`,(0,Q.jsx)(t.h2,{id:`추가`,children:`추가`}),`
`,(0,Q.jsx)(t.p,{children:`새 항목을 만드는 태그형 버튼입니다.`}),`
`,(0,Q.jsx)(r,{of:v,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.add}),`
`,(0,Q.jsx)(t.h2,{id:`링크`,children:`링크`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`href`}),`가 있으면 링크 의미와 키보드 동작을 유지합니다.`]}),`
`,(0,Q.jsx)(r,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.link}),`
`,(0,Q.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,Q.jsxs)(t.p,{children:[`button에는 네이티브 `,(0,Q.jsx)(t.code,{children:`disabled`}),`, 링크·정적 요소에는 `,(0,Q.jsx)(t.code,{children:`aria-disabled`}),`와 상태 클래스를 적용합니다.`]}),`
`,(0,Q.jsx)(r,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.disabled}),`
`,(0,Q.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`TagGroup`}),`으로 관련 태그를 묶고 `,(0,Q.jsx)(t.code,{children:`tight`}),`으로 간격을 줄입니다.`]}),`
`,(0,Q.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:Y.group}),`
`,(0,Q.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`checkable`}),`·`,(0,Q.jsx)(t.code,{children:`add`}),`는 button, `,(0,Q.jsx)(t.code,{children:`href`}),`는 anchor, 그 외는 정적 요소로 의미를 구분합니다. 선택 상태는 `,(0,Q.jsx)(t.code,{children:`aria-pressed`}),`, 비활성은 네이티브 `,(0,Q.jsx)(t.code,{children:`disabled`}),` 또는 `,(0,Q.jsx)(t.code,{children:`aria-disabled`}),`를 사용합니다. `,(0,Q.jsx)(t.code,{children:`closable`}),`의 닫기 버튼은 독립 컨트롤로 분리하고, `,(0,Q.jsx)(t.code,{children:`TagGroup`}),`은 `,(0,Q.jsx)(t.code,{children:`role="group"`}),`으로 묶습니다.`]}),`
`,(0,Q.jsx)(ne,{sections:S})]})}function re(e={}){let{wrapper:t}={...b(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),x(),n(),a(),te(),X(),C(),p()})))()}$();export{re as default};