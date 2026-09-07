import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as ee,u as p}from"./Icon.stories-DWFOomBi.js";import{i as m,r as h}from"./react-DL__92zz.js";import{c as te,r as g,u as ne}from"./blocks-Cy0HofPr.js";import{i as re,n as ie,r as _,t as ae}from"./ComponentApiDocs-Ci2QMeRq.js";var v;function y(){return(y=e((()=>{v=`<!-- Icon 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
<!-- 장식용 아이콘은 aria-hidden, 의미 있는 아이콘은 aria-label을 사용합니다. -->
<svg class="icon" data-component="Icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"></circle>
  <path d="m21 21-4.35-4.35"></path>
</svg>

<!-- 크기·색상은 icon_sm · icon_lg · color_primary 등으로 조합합니다. -->
<svg class="icon icon_lg color_primary" data-component="Icon" aria-label="검색" role="img" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <circle cx="11" cy="11" r="7"></circle>
  <path d="m20 20-4-4"></path>
</svg>

<!-- 원형·버튼형은 래퍼에 icon_circle · icon_button을 두고 내부 SVG는 aria-hidden입니다. -->
<span class="icon_circle color_primary" role="img" aria-label="확인">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path d="m5 12 4 4L19 6"></path>
  </svg>
</span>`})))()}var b;function x(){return(x=e((()=>{b=`{# Icon 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 접근성 의미를 연결합니다. #}
{# icon macro로 이름·크기·색상·래퍼·상태를 조합합니다. #}

{% macro icon(
  name = 'plus',
  size = 'md',
  color = '',
  inline = false,
  spin = false,
  button = false,
  circle = false,
  square = false,
  pulse = false,
  ripple = true,
  ariaLabel = '',
  title = '',
  className = ''
) %}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = '' -%}
{%- endif -%}
{%- set label = ariaLabel if ariaLabel else title -%}
{%- set wrapped = button or circle or square -%}
{%- set sizeClass = ('icon_' + size) if size and size != 'md' else '' -%}
{%- set svgClasses =
  'icon'
  + ((' ' + sizeClass) if sizeClass and not wrapped else '')
  + (' icon_spin' if spin else '')
-%}
{%- if not wrapped -%}
  {%- set svgClasses =
    svgClasses
    + ((' color_' + color) if color else '')
    + (' icon_inline' if inline else '')
    + ((' ' + className) if className else '')
  -%}
{%- elif sizeClass -%}
  {%- set svgClasses = svgClasses + ' ' + sizeClass -%}
{%- endif -%}
{%- set outerClasses =
  ('icon_button' if button else ('icon_circle' if circle else ('icon_square' if square else '')))
  + ((' color_' + color) if color else '')
  + (' icon_inline' if inline else '')
  + (' icon_pulse' if pulse and circle else '')
  + (' icon_circle-sm' if circle and size == 'sm' else '')
  + (' icon_circle-lg' if circle and size == 'lg' else '')
  + ((' ' + className) if className else '')
-%}
{%- if button -%}
<button
  class="{{ outerClasses | trim }}"
  type="button"
  data-ripple="{{ 'true' if ripple else 'false' }}"
  {% if label %}aria-label="{{ label }}"{% endif %}
>
  <svg
    class="{{ svgClasses | trim }}"
    data-component="Icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    {% if title %}<title>{{ title }}</title>{% endif %}
    {%- if content -%}{{ content | safe }}{%- else -%}{% include "components/basic/Icon/_paths.njk" %}{%- endif -%}
  </svg>
</button>
{%- elif circle or square -%}
<span
  class="{{ outerClasses | trim }}"
  {% if label %}role="img" aria-label="{{ label }}"{% else %}aria-hidden="true"{% endif %}
>
  <svg
    class="{{ svgClasses | trim }}"
    data-component="Icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    {% if title %}<title>{{ title }}</title>{% endif %}
    {%- if content -%}{{ content | safe }}{%- else -%}{% include "components/basic/Icon/_paths.njk" %}{%- endif -%}
  </svg>
</span>
{%- else -%}
<svg
  class="{{ svgClasses | trim }}"
  data-component="Icon"
  {% if name and not content %}data-icon="{{ name }}"{% endif %}
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  {% if label %}role="img" aria-label="{{ label }}"{% else %}aria-hidden="true"{% endif %}
>
  {% if title %}<title>{{ title }}</title>{% endif %}
  {%- if content -%}{{ content | safe }}{%- else -%}{% include "components/basic/Icon/_paths.njk" %}{%- endif -%}
</svg>
{%- endif -%}
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ icon(name='search') }}
{{ icon(name='check', color='success', size='lg') }}
{{ icon(name='plus', circle=true, color='primary', size='sm') }}
`})))()}var S;function C(){return(C=e((()=>{S=`/**
 * Icon 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// 아이콘 이름 → SVG path 맵입니다.
const paths = {
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  warning: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v4m0 3h.01" />
    </>
  ),
  chevron: <path d="m9 6 6 6-6 6" />,
  'chevron-left': <path d="m15 6-6 6 6 6" />,
  'chevron-right': <path d="m9 6 6 6-6 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 5h16l2 9v5H2v-5l2-9Z" />
      <path d="M2 14h5l2 3h6l2-3h5" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  edit: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M10 21v-7h4v7" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2 11h10l3-8H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13v7H4V6h7" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5" />
      <path d="M19 12a7 7 0 1 0-2 5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a3 3 0 0 1 3-2h5v18H7a3 3 0 0 0-3 2V5Z" />
      <path d="M20 5a3 3 0 0 0-3-2h-5v18h5a3 3 0 0 1 3 2V5Z" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  upload: (
    <>
      <path d="M5 16v5h14v-5" />
      <path d="M12 17V3m0 0-4 4m4-4 4 4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6m0-10h.01" />
    </>
  ),
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  'alert-triangle': (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v4m0 3h.01" />
    </>
  ),
  'x-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M14 21h-4" />
    </>
  ),
  loader: <path d="M21 12a9 9 0 1 1-6.2-8.6" />,
  heart: (
    <path d="M20.8 5a5.5 5.5 0 0 0-7.8 0L12 6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.2A5.5 5.5 0 0 0 20.8 5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-2 2" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l2-2" />
    </>
  ),
  'arrow-left': <path d="M19 12H5m7 7-7-7 7-7" />,
};

export const iconNames = Object.keys(paths);

export function Icon({
  name = 'plus', // paths에 등록된 아이콘 이름입니다.
  children, // 커스텀 SVG 도형입니다. 있으면 name보다 우선합니다.
  className = '', // 추가 클래스입니다.
  title, // SVG title과 접근성 이름 후보입니다.
  ariaLabel, // 명시적 접근성 이름입니다.
  color, // color_* 공통 색상 클래스입니다.
  size = 'md', // sm · md · lg · xl 크기입니다. md는 기본이라 클래스를 붙이지 않습니다.
  inline = false, // 텍스트와 인라인 정렬합니다.
  spin = false, // 회전 애니메이션입니다.
  button = false, // button 래퍼로 감쌉니다.
  circle = false, // 원형 배경 래퍼로 감쌉니다.
  square = false, // 사각형 배경 래퍼로 감쌉니다.
  pulse = false, // circle과 함께 펄스 효과를 켭니다.
  ripple = true, // button일 때 리플 효과를 켭니다.
  ...props // 나머지 속성을 최외곽 요소에 전달합니다.
}) {
  const label = ariaLabel ?? props['aria-label'] ?? title;
  const sizeClass = size === 'md' ? '' : \`icon_\${size}\`;
  const svgClasses = ['icon', sizeClass, spin && 'icon_spin'];
  const outerClasses = [
    button ? 'icon_button' : circle ? 'icon_circle' : square ? 'icon_square' : '',
    color && \`color_\${color}\`,
    inline && 'icon_inline',
    pulse && circle && 'icon_pulse',
    circle && size === 'sm' && 'icon_circle-sm',
    circle && size === 'lg' && 'icon_circle-lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const content = children ?? paths[name] ?? null;
  const svg = (
    <svg
      aria-hidden={button || circle || square ? true : label ? undefined : true}
      aria-label={!button ? label : undefined}
      className={
        button || circle || square
          ? svgClasses.filter(Boolean).join(' ')
          : [svgClasses, outerClasses].flat().filter(Boolean).join(' ')
      }
      data-component="Icon"
      fill="none"
      role={!button && label ? 'img' : undefined}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...(!button && !circle && !square ? props : {})}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  );

  if (button)
    return (
      <button
        aria-label={label}
        className={outerClasses}
        data-ripple={ripple ? 'true' : 'false'}
        type="button"
        {...props}
      >
        {svg}
      </button>
    );
  if (circle || square)
    return (
      <span
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={outerClasses}
        role={label ? 'img' : undefined}
        {...props}
      >
        {svg}
      </span>
    );
  return svg;
}

export default Icon;
`})))()}var w;function T(){return(T=e((()=>{w=`<!--
  Icon 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 최외곽 요소에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmIcon', inheritAttrs: false });

const props = defineProps({
  name: { type: String, default: 'plus' }, // paths에 등록된 아이콘 이름입니다.
  color: String, // color_* 공통 색상 클래스입니다.
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  }, // sm · md · lg · xl 크기입니다.
  inline: Boolean, // 텍스트와 인라인 정렬합니다.
  spin: Boolean, // 회전 애니메이션입니다.
  button: Boolean, // button 래퍼로 감쌉니다.
  circle: Boolean, // 원형 배경 래퍼로 감쌉니다.
  square: Boolean, // 사각형 배경 래퍼로 감쌉니다.
  pulse: Boolean, // circle과 함께 펄스 효과를 켭니다.
  ripple: { type: Boolean, default: true }, // button일 때 리플 효과를 켭니다.
  ariaLabel: String, // 명시적 접근성 이름입니다.
  title: String, // SVG title과 접근성 이름 후보입니다.
});

const attrs = useAttrs();
const label = computed(() => props.ariaLabel || attrs['aria-label'] || props.title);
// 래퍼가 없을 때 SVG에 붙는 클래스입니다.
const svgClass = computed(() =>
  [
    'icon',
    props.size !== 'md' && \`icon_\${props.size}\`,
    props.spin && 'icon_spin',
    !props.button && !props.circle && !props.square && props.color && \`color_\${props.color}\`,
    !props.button && !props.circle && !props.square && props.inline && 'icon_inline',
    !props.button && !props.circle && !props.square && attrs.class,
  ].filter(Boolean),
);
// button · circle · square 래퍼에 붙는 클래스입니다.
const wrapperClass = computed(() =>
  [
    props.button ? 'icon_button' : props.circle ? 'icon_circle' : 'icon_square',
    props.color && \`color_\${props.color}\`,
    props.inline && 'icon_inline',
    props.circle && props.pulse && 'icon_pulse',
    props.circle && props.size === 'sm' && 'icon_circle-sm',
    props.circle && props.size === 'lg' && 'icon_circle-lg',
    attrs.class,
  ].filter(Boolean),
);
const wrapperTag = computed(() => (props.button ? 'button' : 'span'));
<\/script>

<template>
  <!-- button · circle · square는 래퍼를 두고 내부 SVG는 aria-hidden입니다. -->
  <component
    v-if="button || circle || square"
    :is="wrapperTag"
    v-bind="attrs"
    :class="wrapperClass"
    :type="button ? 'button' : undefined"
    :data-ripple="button ? (ripple ? 'true' : 'false') : undefined"
    :aria-label="label"
    :aria-hidden="!button && !label ? 'true' : undefined"
    :role="!button && label ? 'img' : undefined"
  >
    <svg
      class="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <slot>
        <path v-if="name === 'plus'" d="M12 5v14M5 12h14" />
        <path v-else-if="name === 'minus'" d="M5 12h14" />
        <path v-else-if="name === 'download'" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
        <path v-else-if="name === 'upload'" d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" />
        <path v-else-if="name === 'trash'" d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" />
        <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
        <path
          v-else-if="name === 'warning' || name === 'alert-triangle'"
          d="M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01"
        />
        <path v-else-if="name === 'chevron' || name === 'chevron-right'" d="m9 6 6 6-6 6" />
        <path v-else-if="name === 'chevron-left'" d="m15 6-6 6 6 6" />
        <path v-else-if="name === 'chevron-down'" d="m6 9 6 6 6-6" />
        <path v-else-if="name === 'search'" d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
        <path v-else-if="name === 'inbox'" d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5" />
        <path v-else-if="name === 'menu'" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else-if="name === 'edit'" d="M4 20h4L19 9l-4-4L4 16v4Zm9.5-13.5 4 4" />
        <path v-else-if="name === 'close'" d="m6 6 12 12M18 6 6 18" />
        <path v-else-if="name === 'home'" d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" />
        <path
          v-else-if="name === 'user'"
          d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0"
        />
        <path
          v-else-if="name === 'star'"
          d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
        />
        <path
          v-else-if="name === 'info'"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 11v6m0-10h.01"
        />
        <path
          v-else-if="name === 'check-circle'"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-13 0 3 3 5-6"
        />
        <path
          v-else-if="name === 'x-circle'"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-12-3 6 6m0-6-6 6"
        />
        <path
          v-else-if="name === 'bell'"
          d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4"
        />
        <path v-else-if="name === 'loader'" d="M21 12a9 9 0 1 1-6.2-8.6" />
        <path v-else-if="name === 'arrow-left'" d="M19 12H5m7 7-7-7 7-7" />
        <path v-else d="M12 5v14M5 12h14" />
      </slot>
    </svg>
  </component>

  <svg
    v-else
    v-bind="attrs"
    :class="svgClass"
    :aria-hidden="label ? undefined : 'true'"
    :aria-label="label"
    :role="label ? 'img' : undefined"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title v-if="title">{{ title }}</title>
    <slot>
      <path v-if="name === 'plus'" d="M12 5v14M5 12h14" />
      <path v-else-if="name === 'minus'" d="M5 12h14" />
      <path v-else-if="name === 'download'" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
      <path v-else-if="name === 'upload'" d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" />
      <path v-else-if="name === 'trash'" d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" />
      <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
      <path
        v-else-if="name === 'warning' || name === 'alert-triangle'"
        d="M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01"
      />
      <path v-else-if="name === 'search'" d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path v-else-if="name === 'chevron-down'" d="m6 9 6 6 6-6" />
      <path v-else-if="name === 'chevron' || name === 'chevron-right'" d="m9 6 6 6-6 6" />
      <path v-else-if="name === 'chevron-left'" d="m15 6-6 6 6 6" />
      <path v-else-if="name === 'inbox'" d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5" />
      <path v-else-if="name === 'menu'" d="M4 6h16M4 12h16M4 18h16" />
      <path v-else-if="name === 'edit'" d="M4 20h4L19 9l-4-4L4 16v4Zm9.5-13.5 4 4" />
      <path v-else-if="name === 'close'" d="m6 6 12 12M18 6 6 18" />
      <path
        v-else-if="name === 'star'"
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
      />
      <path
        v-else-if="name === 'info'"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 11v6m0-10h.01"
      />
      <path
        v-else-if="name === 'check-circle'"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-13 0 3 3 5-6"
      />
      <path
        v-else-if="name === 'x-circle'"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-12-3 6 6m0-6-6 6"
      />
      <path v-else-if="name === 'bell'" d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4" />
      <path v-else-if="name === 'loader'" d="M21 12a9 9 0 1 1-6.2-8.6" />
      <path v-else-if="name === 'arrow-left'" d="M19 12H5m7 7-7-7 7-7" />
      <path v-else d="M12 5v14M5 12h14" />
    </slot>
  </svg>
</template>
`})))()}function E(e,t){if(t===`vue`)return e.includes(`iconNames.map`)?`<script setup>
import Icon from '@uxkm/vue/icon';

const iconNames = ['search', 'plus', 'download', 'trash', 'check', 'edit', 'settings', 'user', 'star'];
<\/script>

<template>
  <div class="icon_grid">
    <div v-for="name in iconNames" :key="name" class="icon_grid-item">
      <Icon :name="name" size="lg" />
      <span>{{ name }}</span>
    </div>
  </div>
</template>`:`<script setup>\nimport Icon from '@uxkm/vue/icon';\n<\/script>\n\n<template>\n${e.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`;let n=e.replace(/class=/g,`className=`).replace(/aria-label=/g,`ariaLabel=`).replace(/<Icon name=\{name\}/g,`<Icon name={name}`);return`import Icon${e.includes(`iconNames.map`)?`, { iconNames }`:``} from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n  <>\n${n.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`}function D(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function O(e){let t=D(e),n=String(t.name??`plus`),r=[`icon`,t.size&&t.size!==`md`&&`icon_${t.size}`,t.spin&&`icon_spin`],i=[t.color&&`color_${t.color}`,t.inline&&`icon_inline`],a=`<svg class="${r.filter(Boolean).join(` `)}" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]??I.plus}</svg>`;if(t.button)return`<button class="icon_button ${i.filter(Boolean).join(` `)}" type="button" aria-label="${t[`aria-label`]??n}">${a}</button>`;if(t.circle||t.square)return`<span class="${[t.circle?`icon_circle`:`icon_square`,...i,t.pulse&&`icon_pulse`,t.circle&&t.size===`sm`&&`icon_circle-sm`,t.circle&&t.size===`lg`&&`icon_circle-lg`].filter(Boolean).join(` `)}" aria-hidden="true">${a}</span>`;let o=t[`aria-label`],s=i.filter(Boolean).join(` `);return(s?a.replace(`class="`,`class="${s} `):a).replace(`aria-hidden="true"`,o?`role="img" aria-label="${o}"`:`aria-hidden="true"`)}function oe(e,t){return e===`custom`?`<div class="icon_group">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"></path>
  </svg>
</div>`:e===`gallery`?`<!-- common-icons 목록을 순회해 같은 구조를 반복합니다. -->\n<div class="icon_grid">\n  <div class="icon_grid-item">${O(`name="search" size="lg"`)}<span>search</span></div>\n  <!-- ... -->\n</div>`:t.replace(/<Icon\s*([^>]*)>([\s\S]*?)<\/Icon>/g,(e,t,n)=>{let r=D(t),i=r.name?String(r.name):void 0,a=`<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${n.trim()}</svg>`;return r.circle||r.square?`<span class="${[r.circle?`icon_circle`:`icon_square`,r.color&&`color_${r.color}`,r.pulse&&`icon_pulse`,r.circle&&r.size===`sm`&&`icon_circle-sm`,r.circle&&r.size===`lg`&&`icon_circle-lg`].filter(Boolean).join(` `)}" aria-hidden="true">${a}</span>`:i?O(t):a}).replace(/<Icon\s+([^>]*?)\s*\/>/g,(e,t)=>O(t))}function k(e){let t=[],n=/:([\w-]+)="([^"]*)"|([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);){if(r[1]){let e=L[r[1]]??r[1];t.push(`${e}=${r[2]}`);continue}let e=r[3],n=r[4],i=L[e]??e;n==null?t.push(`${i}=true`):/^-?\d+(\.\d+)?$/.test(n)?t.push(`${i}=${n}`):t.push(`${i}='${n}'`)}return t.join(`, `)}function A(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>e.trim()?`${n}${e}`:e).join(`
`)}function j(e,t){if(e===`gallery`)return`{% from "components/basic/Icon/icon.njk" import icon %}

{% set iconNames = ['search', 'plus', 'download', 'trash', 'check', 'edit', 'settings', 'user', 'star'] %}
<div class="icon_grid">
  {% for name in iconNames %}
    <div class="icon_grid-item">
      {{ icon(name=name, size='lg') }}
      <span>{{ name }}</span>
    </div>
  {% endfor %}
</div>`;let n=t.replace(/\r\n?/g,`
`);return n=n.replace(/<Icon\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=k(t.trim());return n?`{{ icon(${n}) }}`:`{{ icon() }}`}),n=n.replace(/<Icon\s*([^>]*)>([\s\S]*?)<\/Icon>/g,(e,t,n)=>{let r=k(t.trim()),i=A(n.trim(),2);return r?`{% call icon(${r}) %}\n${i}\n{% endcall %}`:`{% call icon() %}\n${i}\n{% endcall %}`}),`{% from "components/basic/Icon/icon.njk" import icon %}\n\n${n.trim()}`}function M(e,t,n=``){let r=D(e),i=String(r.name??(n||`plus`)),a=`/images/icons/${i}.svg`,o=r.size&&r.size!==`md`?`icon_${r.size}`:``,s=r.color?`color_${r.color}`:``,c=[`icon`,o,s,r.inline&&`icon_inline`,r.spin&&`icon_spin`].filter(Boolean).join(` `),l=String(r[`aria-label`]??i);if(r.button)return`<xf:trigger
  type="button"
  id="${t}"
  class="icon_button ${s}"
  title="${l}"
  tooltip="${l}"
  style="background-image: url('${a}'); background-position: center; background-repeat: no-repeat; background-size: 1.25rem;"
  ev:onclick="scwin.iconButton_onclick">
  <xf:label><![CDATA[]]></xf:label>
</xf:trigger>`;let u=`<w2:image
  id="${t}Image"
  src="${a}"
  alt="${r[`aria-label`]??``}"
  class="${c}"></w2:image>`;return!r.circle&&!r.square?u:`<w2:group
  id="${t}"
  class="${[r.circle?`icon_circle`:`icon_square`,s,r.pulse&&`icon_pulse`,r.circle&&r.size===`sm`&&`icon_circle-sm`,r.circle&&r.size===`lg`&&`icon_circle-lg`].filter(Boolean).join(` `)}">
${u.split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function N(e,t){let n=`${e[0].toUpperCase()}${e.slice(1)}`,r=0,i=0;if(e===`gallery`)return`<!-- 아이콘 경로는 프로젝트 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="iconGalleryExample" class="icon_grid">
${[`search`,`plus`,`download`].map((e,t)=>`  <w2:group id="iconGalleryItem${t+1}" class="icon_grid-item">
    <w2:image id="iconGalleryImage${t+1}" src="/images/icons/${e}.svg" alt="" class="icon icon_lg"></w2:image>
    <w2:textbox id="iconGalleryLabel${t+1}" tagname="span" label="${e}"></w2:textbox>
  </w2:group>`).join(`
`)}
  <!-- DataList와 w2:generator로 전체 아이콘 목록을 반복할 수 있습니다. -->
</w2:group>`;let a=t.replace(/<Icon\s*([^>]*)>([\s\S]*?)<\/Icon>/g,(e,t)=>M(t,`icon${n}${++r}`,`custom-${r}`));return a=a.replace(/<Icon\s+([^>]*?)\s*\/>/g,(e,t)=>M(t,`icon${n}${++r}`)),a=a.replace(/<(\/)?div\b([^>]*)>/g,(e,t,r)=>{if(t)return`</w2:group>`;let a=r.match(/\sclass="([^"]*)"/)?.[1]??``;return`<w2:group\n  id="icon${n}Group${++i}"${a?`\n  class="${a}"`:``}>`}),`<!-- 아이콘 경로는 프로젝트 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="icon${n}Example">
${a.split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function se(e){let t=F[e],n=oe(e,t),r=j(e,t),i=E(t,`react`),a=E(t,`vue`);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Icon/Icon.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Icon/icon.njk · ${e}`,code:`{# Icon · ${e} #}\n${r}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${e}`,code:a},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${e}`,code:a},{id:`react`,label:`React`,fileName:`@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${e}`,code:i},{id:`next`,label:`Next`,fileName:`@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${e}`,code:i},{id:`websquare`,label:`WebSquare`,fileName:`Icon.xml · ${e}`,code:N(e,t)}]}var P,F,I,L,R;function z(){return(z=e((()=>{y(),x(),C(),T(),P=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Icon/Icon.html`,code:v},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Icon/icon.njk`,code:b},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/basic/Icon/Icon.vue`,code:w},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/icon → Icon.vue`,code:w},{id:`react`,label:`React`,fileName:`apps/react/src/components/basic/Icon/Icon.jsx`,code:S},{id:`next`,label:`Next`,fileName:`@uxkm/react/icon → Icon.jsx`,code:S}],F={basic:`<div class="icon_group">
  <Icon name="search" />
  <Icon name="edit" />
  <Icon name="trash" />
</div>`,custom:`<div class="icon_group">
  <Icon>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </Icon>
  <Icon>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
  </Icon>
</div>`,sizes:`<div class="icon_group">
  <Icon name="plus" size="sm" />
  <Icon name="plus" />
  <Icon name="plus" size="lg" />
  <Icon name="plus" size="xl" />
</div>`,colors:`<div class="icon_group">
  <Icon name="star" color="default" />
  <Icon name="star" color="primary" />
  <Icon name="check-circle" color="success" />
  <Icon name="alert-triangle" color="warning" />
  <Icon name="x-circle" color="danger" />
</div>`,inline:`<p><Icon name="info" inline color="info" aria-label="안내" /> 변경 사항이 자동 저장됩니다.</p>
<p><Icon name="check-circle" inline color="success" aria-label="완료" /> 업로드가 완료되었습니다.</p>`,background:`<div class="icon_group">
  <Icon name="plus" circle color="primary" size="sm" />
  <Icon name="check-circle" circle color="success" size="sm" />
  <Icon name="trash" circle color="danger" size="lg" />
  <Icon name="edit" square color="primary" />
</div>`,button:`<div class="icon_group">
  <Icon name="search" button color="primary" aria-label="검색" />
  <Icon name="settings" button color="muted" aria-label="설정" />
  <Icon name="close" button color="danger" aria-label="삭제" />
</div>`,pulse:`<div class="icon_group">
  <Icon name="bell" circle pulse color="primary" size="sm" />
  <Icon circle pulse color="danger" size="sm"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></Icon>
</div>`,group:`<div class="icon_group">
  <Icon name="upload" color="muted" />
  <Icon name="download" color="muted" />
  <Icon name="trash" color="muted" />
</div>
<p><Icon name="user" circle color="primary" size="sm" /> 홍길동님이 댓글을 남겼습니다.</p>`,spin:`<div class="icon_group">
  <Icon name="loader" spin color="primary" />
  <Icon name="loader" spin size="lg" color="muted" />
</div>`,gallery:`<div class="icon_grid">
  {iconNames.map((name) => (
    <div class="icon_grid-item" key={name}>
      <Icon name={name} size="lg" />
      <span>{name}</span>
    </div>
  ))}
</div>`},I={search:`<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>`,edit:`<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>`,trash:`<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14"></path>`,plus:`<path d="M12 5v14M5 12h14"></path>`,star:`<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>`,"check-circle":`<circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path>`,"alert-triangle":`<path d="M12 3 2.5 20h19L12 3Z"></path><path d="M12 9v4m0 3h.01"></path>`,"x-circle":`<circle cx="12" cy="12" r="9"></circle><path d="m9 9 6 6m0-6-6 6"></path>`,info:`<circle cx="12" cy="12" r="9"></circle><path d="M12 11v6m0-10h.01"></path>`,settings:`<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0Z"></path>`,close:`<path d="m6 6 12 12M18 6 6 18"></path>`,bell:`<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>`,upload:`<path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4"></path>`,download:`<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>`,user:`<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>`,loader:`<path d="M21 12a9 9 0 1 1-6.2-8.6"></path>`},L={"aria-label":`ariaLabel`,class:`className`},R=Object.fromEntries(Object.keys(F).map(e=>[e,se(e)]))})))()}var B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{B=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],V=[{name:`name`,type:`string`,default:`plus`,description:`제공 아이콘 이름. 커스텀 SVG 자식이 있으면 자식이 우선합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'xl'`,default:`md`,description:`아이콘 크기입니다.`},{name:`color`,type:`'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'`,default:`—`,description:`currentColor에 적용할 공통 색상입니다.`},{name:`inline`,type:`boolean`,default:`false`,description:`텍스트 기준선에 맞춰 수직 정렬합니다.`},{name:`spin`,type:`boolean`,default:`false`,description:`회전 애니메이션을 적용합니다.`},{name:`button`,type:`boolean`,default:`false`,description:`button 루트의 클릭 가능한 아이콘으로 렌더합니다.`},{name:`circle`,type:`boolean`,default:`false`,description:`원형 배경 래퍼를 적용합니다.`},{name:`square`,type:`boolean`,default:`false`,description:`사각 배경 래퍼를 적용합니다.`},{name:`pulse`,type:`boolean`,default:`false`,description:`circle과 함께 펄스 강조 애니메이션을 적용합니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`button 유형의 클릭 파장 효과를 설정합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`React 접근성 이름. 의미 있는 아이콘과 아이콘 버튼에 지정합니다.`},{name:`title`,type:`string`,default:`—`,description:`React SVG title과 접근성 이름을 함께 제공합니다.`},{name:`className`,type:`string`,default:`''`,description:`React 루트에 추가할 클래스입니다.`}],H=V.map(e=>e.name===`ariaLabel`?{...e,name:`aria-label`,description:`Vue 접근성 이름. 의미 있는 아이콘과 아이콘 버튼에 지정합니다.`}:e.name===`className`?{...e,name:`class`,description:`Vue 루트에 추가할 클래스입니다.`}:e),U=[{name:`default`,type:`SVGElement`,default:`—`,description:`path, circle 등 커스텀 SVG 도형입니다. name보다 우선합니다.`}],W=[{name:`aria-hidden`,type:`'true'`,default:`—`,description:`장식용 SVG를 접근성 트리에서 숨깁니다.`},{name:`aria-label`,type:`string`,default:`—`,description:`의미 있는 SVG 또는 아이콘 버튼의 접근성 이름입니다.`},{name:`viewBox`,type:`string`,default:`0 0 24 24`,description:`공통 아이콘 좌표계입니다.`},{name:`stroke`,type:`string`,default:`currentColor`,description:`부모의 텍스트 색상을 상속합니다.`},{name:`data-ripple`,type:`'true' | 'false'`,default:`true`,description:`icon_button 클릭 파장 효과입니다.`}],G=[{name:`icon`,type:`macro`,default:`—`,description:'`{% from "components/basic/Icon/icon.njk" import icon %}`로 import한 뒤 `{{ icon(...) }}` 또는 `{% call %}`로 인스턴스를 만듭니다.'},{name:`name`,type:`string`,default:`'plus'`,description:"등록된 아이콘 이름입니다. `{% call %}` 본문이 있으면 커스텀 SVG가 우선합니다."},{name:`size · color`,type:`string`,default:`'md' · ''`,description:`크기·색상입니다. md는 크기 클래스를 생략합니다.`},{name:`inline · spin`,type:`boolean`,default:`false`,description:`텍스트 인라인 정렬과 회전 애니메이션입니다.`},{name:`button · circle · square · pulse`,type:`boolean`,default:`false`,description:`버튼·원형·사각 래퍼와 펄스입니다. pulse는 circle과 함께 씁니다.`},{name:`ripple · ariaLabel · title · className`,type:`mixed`,default:`true · '' · '' · ''`,description:`버튼 파장·접근성 이름·SVG title·추가 클래스입니다.`}],K=[{name:`w2:image`,type:`component`,default:`—`,description:`프로젝트에 등록한 SVG·PNG 아이콘 파일을 표시합니다.`},{name:`src`,type:`URL`,default:`—`,description:`WebSquare 프로젝트의 정적 아이콘 리소스 경로입니다.`},{name:`alt`,type:`string`,default:`''`,description:`장식용 아이콘은 빈 문자열, 의미 있는 이미지에는 대체 텍스트를 지정합니다.`},{name:`class`,type:`styleclass`,default:`icon`,description:`크기·색상·회전·인라인 정렬 클래스를 적용합니다.`},{name:`w2:group`,type:`component`,default:`—`,description:`원형·사각형 배경과 여러 아이콘 묶음의 래퍼입니다.`},{name:`xf:trigger`,type:`component`,default:`—`,description:`클릭 가능한 아이콘 버튼에 사용하며 배경 이미지와 ev:onclick을 연결합니다.`},{name:`title · tooltip`,type:`string`,default:`—`,description:`텍스트가 없는 아이콘 버튼의 기능을 설명합니다.`},{name:`w2:generator`,type:`component`,default:`—`,description:`DataList 기반 아이콘 갤러리처럼 동일 구조를 반복할 때 선택적으로 사용합니다.`}],q=[{name:`icon`,type:`class`,default:`—`,description:`SVG 루트 기본 구조와 중간 크기`},{name:`icon_sm · icon_lg · icon_xl`,type:`class`,default:`—`,description:`크기 변형`},{name:`icon_inline`,type:`class`,default:`—`,description:`텍스트 인라인 정렬`},{name:`icon_spin`,type:`class`,default:`—`,description:`회전 애니메이션`},{name:`icon_button`,type:`class`,default:`—`,description:`아이콘 버튼 래퍼`},{name:`icon_circle · icon_square`,type:`class`,default:`—`,description:`원형·사각형 배경 래퍼`},{name:`icon_circle-sm · icon_circle-lg`,type:`class`,default:`—`,description:`원형 배경 크기`},{name:`icon_pulse`,type:`class`,default:`—`,description:`펄스 강조 애니메이션`},{name:`icon_group`,type:`class`,default:`—`,description:`여러 아이콘을 가로로 배치하는 컨테이너`},{name:`icon_grid · icon_grid-item`,type:`class`,default:`—`,description:`아이콘 갤러리 그리드와 항목`},{name:`color_*`,type:`class`,default:`—`,description:`공통 색상 유틸리티`}],J=[{name:`--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl`,type:`length`,default:`1rem · 1.25rem · 1.5rem · 2rem`,description:`아이콘 크기`},{name:`--icon-circle-size-sm · --icon-circle-size · --icon-circle-size-lg`,type:`length`,default:`1.75rem · 2.25rem · 2.75rem`,description:`배경형 아이콘 크기`},{name:`--icon-spin-duration`,type:`time`,default:`0.8s`,description:`회전 주기`},{name:`--icon-pulse-duration`,type:`time`,default:`1.5s`,description:`펄스 주기`}],Y=[{title:`React · Next.js API · Props`,description:"Next.js는 `@uxkm/react/icon`을 재사용합니다.",tables:[{columns:B,rows:V}]},{title:`React · Next.js API · Children`,tables:[{columns:B,rows:[{name:`children`,type:`ReactNode`,default:`—`,description:`path, circle 등 커스텀 SVG 도형입니다. name보다 우선합니다.`}]}]},{title:`Vue · Nuxt API · Props`,description:"Nuxt는 `@uxkm/vue/icon`을 재사용합니다.",tables:[{columns:B,rows:H}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:B,rows:U}]},{title:`HTML API · Markup`,description:`HTML은 SVG와 래퍼에 네이티브 속성과 공통 클래스를 직접 적용합니다.`,tables:[{columns:B,rows:W}]},{title:`Gulp API · Nunjucks`,description:"`icon` macro를 import하고 `{{ icon(...) }}`로 조합합니다. 커스텀 path는 `{% call icon(...) %}` 본문에 둡니다.",tables:[{columns:B,rows:G}]},{title:`WebSquare API · XML`,description:`WebSquare에서는 w2:image로 프로젝트 정적 아이콘 리소스를 표시하고, 클릭 가능한 아이콘은 xf:trigger로 구성합니다.`,tables:[{columns:B,rows:K}]},{title:`공통 API · 클래스`,tables:[{columns:B,rows:q}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:B,rows:J}]}]})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...m(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(te,{of:r}),`
`,(0,Q.jsx)(t.h1,{id:`icon`,children:`Icon`}),`
`,(0,Q.jsxs)(t.p,{children:[`SVG 아이콘의 이름·크기·색상·정렬·상태를 일관된 규칙으로 제공하는 기본 요소입니다. stroke 아이콘은 `,(0,Q.jsx)(t.code,{children:`currentColor`}),`로 부모 색상을 상속합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/icon`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/icon`}),`으로 제공합니다. Nuxt와 Next.js 예시는 같은 구현을 재사용하므로 코드 탭의 경로도 실제 공통 소스를 가리킵니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 프로젝트에 등록한 SVG·PNG 파일을 `,(0,Q.jsx)(t.code,{children:`w2:image`}),`의 `,(0,Q.jsx)(t.code,{children:`src`}),`로 연결합니다. 원형·사각형 배경은 `,(0,Q.jsx)(t.code,{children:`w2:group`}),`, 클릭 가능한 아이콘은 배경 이미지를 적용한 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`를 사용합니다. 각 WebSquare 코드의 `,(0,Q.jsx)(t.code,{children:`/images/icons/*.svg`}),` 경로는 실제 프로젝트의 정적 리소스 위치에 맞게 변경해야 합니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`Icon`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 공통 CSS 클래스와 접근성 속성으로 변환하고, HTML은 같은 클래스를 마크업에 직접 적용하며, Gulp는 `,(0,Q.jsx)(t.code,{children:`icon`}),` Nunjucks macro로 동일한 계약을 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`name`}),`은 등록된 아이콘 path를 선택합니다. React·Vue의 자식(또는 기본 slot) SVG 도형과 Gulp `,(0,Q.jsx)(t.code,{children:`{% call %}`}),` 본문이 있으면 `,(0,Q.jsx)(t.code,{children:`name`}),`보다 우선합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`size`}),`·`,(0,Q.jsx)(t.code,{children:`color`}),`·`,(0,Q.jsx)(t.code,{children:`inline`}),`·`,(0,Q.jsx)(t.code,{children:`spin`}),`은 `,(0,Q.jsx)(t.code,{children:`icon_*`}),`·`,(0,Q.jsx)(t.code,{children:`color_*`}),` 클래스로 변환됩니다. `,(0,Q.jsx)(t.code,{children:`md`}),` 크기는 기본값이라 별도 클래스를 붙이지 않습니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`button`}),`·`,(0,Q.jsx)(t.code,{children:`circle`}),`·`,(0,Q.jsx)(t.code,{children:`square`}),`는 래퍼를 두고 내부 SVG는 `,(0,Q.jsx)(t.code,{children:`aria-hidden`}),`으로 숨깁니다. 접근성 이름은 래퍼의 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`에 둡니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[`장식용은 `,(0,Q.jsx)(t.code,{children:`aria-hidden`}),`, 의미 있는 아이콘은 `,(0,Q.jsx)(t.code,{children:`aria-label`}),` 또는 `,(0,Q.jsx)(t.code,{children:`title`}),`로 이름을 제공합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[`stroke는 `,(0,Q.jsx)(t.code,{children:`currentColor`}),`를 사용하므로 부모 또는 `,(0,Q.jsx)(t.code,{children:`color_*`}),` 클래스가 색상을 결정합니다.`]}),`
`]}),`
`,(0,Q.jsx)(_,{examples:P,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[`장식용 아이콘은 빈 `,(0,Q.jsx)(t.code,{children:`alt`}),`를 사용하고, 의미 있는 이미지에는 대체 텍스트를 지정합니다. React·Vue의 커스텀 SVG 자식은 WebSquare에서 별도 SVG 파일로 등록합니다. 외부 SVG를 `,(0,Q.jsx)(t.code,{children:`w2:image`}),`로 표시하면 `,(0,Q.jsx)(t.code,{children:`currentColor`}),`가 상속되지 않으므로 색상별 파일을 제공하거나 프로젝트의 CSS mask 규칙으로 색상을 제어합니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`name`}),`에 제공 아이콘 이름을 지정합니다. 별도 색상을 지정하지 않으면 주변 텍스트의 색상을 상속합니다.`]}),`
`,(0,Q.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.basic}),`
`,(0,Q.jsx)(t.h2,{id:`커스텀-svg`,children:`커스텀 SVG`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`path`}),`, `,(0,Q.jsx)(t.code,{children:`circle`}),` 등 SVG 도형을 자식으로 전달할 수 있습니다. 커스텀 도형은 `,(0,Q.jsx)(t.code,{children:`name`}),`보다 우선합니다.`]}),`
`,(0,Q.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.custom}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsxs)(t.p,{children:[`small, medium, large, extra large 네 가지 크기를 제공합니다. medium은 기본 `,(0,Q.jsx)(t.code,{children:`icon`}),`, 나머지는 `,(0,Q.jsx)(t.code,{children:`icon_sm`}),` · `,(0,Q.jsx)(t.code,{children:`icon_lg`}),` · `,(0,Q.jsx)(t.code,{children:`icon_xl`}),` 클래스를 사용합니다.`]}),`
`,(0,Q.jsx)(g,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.sizes}),`
`,(0,Q.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,Q.jsxs)(t.p,{children:[`공통 `,(0,Q.jsx)(t.code,{children:`color_*`}),` 유틸리티로 default, primary, success, warning, danger, info, muted 색상을 적용합니다.`]}),`
`,(0,Q.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.colors}),`
`,(0,Q.jsx)(t.h2,{id:`텍스트-인라인`,children:`텍스트 인라인`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`inline`}),` 또는 `,(0,Q.jsx)(t.code,{children:`icon_inline`}),`으로 텍스트 기준선에 맞춥니다. 의미가 있는 아이콘에는 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`을 지정합니다.`]}),`
`,(0,Q.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.inline}),`
`,(0,Q.jsx)(t.h2,{id:`원형--사각형-배경`,children:`원형 · 사각형 배경`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`circle`}),` · `,(0,Q.jsx)(t.code,{children:`square`}),` 또는 `,(0,Q.jsx)(t.code,{children:`icon_circle`}),` · `,(0,Q.jsx)(t.code,{children:`icon_square`}),`로 배경형 아이콘을 만듭니다. circle은 small, medium, large 크기를 지원합니다.`]}),`
`,(0,Q.jsx)(g,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.background}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-버튼`,children:`아이콘 버튼`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`button`}),` 또는 `,(0,Q.jsx)(t.code,{children:`icon_button`}),`으로 클릭 가능한 아이콘 버튼을 만듭니다. 접근성을 위해 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`을 반드시 지정합니다.`]}),`
`,(0,Q.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.button}),`
`,(0,Q.jsx)(t.h2,{id:`펄스`,children:`펄스`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`circle`}),`과 `,(0,Q.jsx)(t.code,{children:`pulse`}),`를 조합해 알림 등 주의가 필요한 상태를 반복 강조합니다.`]}),`
`,(0,Q.jsx)(g,{of:p,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.pulse}),`
`,(0,Q.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`icon_group`}),`으로 여러 아이콘을 같은 간격으로 나란히 배치합니다.`]}),`
`,(0,Q.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.group}),`
`,(0,Q.jsx)(t.h2,{id:`회전`,children:`회전`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`spin`}),` 또는 `,(0,Q.jsx)(t.code,{children:`icon_spin`}),`으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다.`]}),`
`,(0,Q.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.spin}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-유형`,children:`아이콘 유형`}),`
`,(0,Q.jsxs)(t.p,{children:[`현재 공통 구현에서 제공하는 stroke SVG 아이콘입니다. 기본 좌표계는 `,(0,Q.jsx)(t.code,{children:`viewBox="0 0 24 24"`}),`, 선 굵기는 `,(0,Q.jsx)(t.code,{children:`stroke-width="2"`}),`입니다.`]}),`
`,(0,Q.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,Q.jsx)(_,{examples:R.gallery}),`
`,(0,Q.jsx)(ae,{sections:Y})]})}function ce(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),h(),ne(),re(),ie(),z(),X(),u()})))()}$();export{ce as default};