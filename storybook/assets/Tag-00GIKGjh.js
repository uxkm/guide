import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Tag.stories-BRIr6ExC.js";import{i as g,r as _}from"./react-CbOw9eUO.js";import{c as v,r as y,u as b}from"./blocks-BToPoJhg.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-DfTaPA3Z.js";import{i as T,r as E}from"./dataDisplayApiSections-C0EnwqfF.js";import{n as D,r as O}from"./dataDisplayFrameworkExamples-DxH6D_Y3.js";var k;function A(){return(A=e((()=>{k=`<!-- Tag 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Tag 루트에 공통 클래스를 적용합니다. -->
<div class="tag_group" data-component="TagGroup" role="group" aria-label="카테고리 필터">
  <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
  <button
    class="tag tag_checkable color_default is-selected"
    data-component="Tag"
    data-ripple="true"
    type="button"
    aria-pressed="true"
  >
    전체
  </button>
  <button
    class="tag tag_checkable color_default"
    data-component="Tag"
    data-ripple="true"
    type="button"
    aria-pressed="false"
  >
    UI
  </button>
  <span class="tag color_primary" data-component="Tag">
    React
    <button class="tag_close" type="button" aria-label="React 태그 제거">
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18"></path>
      </svg>
    </button>
  </span>
</div>
`})))()}var j;function M(){return(M=e((()=>{j=`{# Tag 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<div class="tag_group" {# Tag 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="TagGroup" role="group" aria-label="카테고리 필터">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
  <button
    class="tag tag_checkable color_default is-selected"
    data-component="Tag"
    data-ripple="true"
    type="button"
    aria-pressed="true"
  >
    전체
  </button>
  <button
    class="tag tag_checkable color_default"
    data-component="Tag"
    data-ripple="true"
    type="button"
    aria-pressed="false"
  >
    UI
  </button>
  <span class="tag color_primary" data-component="Tag">
    React
    <button class="tag_close" type="button" aria-label="React 태그 제거">
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18"></path>
      </svg>
    </button>
  </span>
</div>
`})))()}var N;function P(){return(P=e((()=>{N=`/**
 * Tag 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 variant와 size는 각각 filled와 md로 정규화합니다.
const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

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
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'filled';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
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
`})))()}var F;function I(){return(I=e((()=>{F=`<!--
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
`})))()}var L;function R(){return(R=e((()=>{L=`<!--
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
`})))()}function z(e,t,n={}){let r=[`tag`,`color_${n.color??`primary`}`,n.variant&&n.variant!==`filled`&&`tag_${n.variant}`,n.size&&n.size!==`md`&&`tag_${n.size}`,n.round&&`tag_round`,n.checkable&&`tag_checkable`,n.add&&`tag_add`,n.selected&&`is-selected`,n.disabled&&`is-disabled`].filter(Boolean).join(` `),i=n.icon?`  <!-- ${n.icon} 아이콘은 프로젝트 이미지 또는 CSS background-image 리소스에 연결합니다. -->\n`:``;return n.closable?`<w2:group id="${e}" class="${r}">
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
</w2:anchor>`:`${i}<w2:textbox id="${e}" tagname="span" class="${r}" label="${t}"${n.disabled?` aria-disabled="true"`:``}></w2:textbox>`}function B(e,t,n=!1,r){return`<w2:group id="${e}" class="tag_group${n?` tag_group-tight`:``}" role="group"${r?` aria-label="${r}"`:``}>
${t.join(`
`).split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}var V,H,U,W,G,K;function q(){return(q=e((()=>{D(),A(),M(),P(),I(),R(),V=`${F}\n\n<!-- TagGroup.vue -->\n${L}`,H=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Tag/Tag.html`,code:k},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Tag/tag.njk`,code:j},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Tag/Tag.vue · TagGroup.vue`,code:V},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tag → Tag.vue · TagGroup.vue`,code:V},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Tag/Tag.jsx`,code:N},{id:`next`,label:`Next`,fileName:`@uxkm/react/tag → Tag.jsx`,code:N}],U=[`default`,`primary`,`success`,`warning`,`danger`,`info`],W=(e=`filled`)=>B(`tag${e[0].toUpperCase()}${e.slice(1)}Example`,U.map(t=>z(`tag${e}${t}`,t,{color:t,variant:e}))),G={basic:W(),solid:W(`solid`),outline:W(`outline`),sizes:B(`tagSizesExample`,[z(`tagSmall`,`Small`,{size:`sm`}),z(`tagMedium`,`Medium`),z(`tagLarge`,`Large`,{size:`lg`})],!0),round:B(`tagRoundExample`,[z(`tagRoundFilled`,`Filled`,{round:!0}),z(`tagRoundOutline`,`Outline`,{round:!0,variant:`outline`}),z(`tagRoundSolid`,`Solid`,{round:!0,variant:`solid`})]),icon:B(`tagIconExample`,[z(`tagDesign`,`Design`,{icon:`star`})]),closable:B(`tagClosableExample`,[z(`tagReact`,`React`,{closable:!0})],!0),checkable:B(`tagCheckableExample`,[z(`tagAll`,`전체`,{checkable:!0,color:`default`,selected:!0}),z(`tagUi`,`UI`,{checkable:!0,color:`default`})],!1,`카테고리 필터`),add:B(`tagAddExample`,[z(`tagAdd`,`+ 태그 추가`,{add:!0,round:!0})]),link:B(`tagLinkExample`,[z(`tagGuide`,`가이드`,{href:`#`,variant:`outline`})]),disabled:B(`tagDisabledExample`,[z(`tagDisabledStatic`,`Filled`,{disabled:!0}),z(`tagDisabledCheckable`,`선택됨`,{checkable:!0,color:`default`,disabled:!0,selected:!0})]),group:B(`tagGroupExample`,[z(`tagHtml`,`HTML`),z(`tagCss`,`CSS`),z(`tagScss`,`SCSS`,{color:`success`})])},K=Object.fromEntries(Object.entries(O).map(([e,t])=>[e,[...t,{id:`websquare`,label:`WebSquare`,fileName:`Tag.xml · ${e}`,code:G[e]}]]))})))()}function J(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...g(),...e.components};return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(v,{of:a}),`
`,(0,X.jsx)(t.h1,{id:`tag`,children:`Tag`}),`
`,(0,X.jsx)(t.p,{children:`카테고리, 필터, 선택 항목을 표시합니다. 스킨·크기·아이콘·닫기·선택·추가·링크·비활성 상태를 하나의 공통 API로 제공합니다.`}),`
`,(0,X.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,X.jsx)(t.code,{children:`@uxkm/vue/tag`}),`, `,(0,X.jsx)(t.code,{children:`@uxkm/react/tag`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,X.jsxs)(t.p,{children:[`WebSquare는 정적 Tag에 `,(0,X.jsx)(t.code,{children:`w2:textbox`}),`, 선택·추가 Tag에 `,(0,X.jsx)(t.code,{children:`xf:trigger`}),`, 링크 Tag에 `,(0,X.jsx)(t.code,{children:`w2:anchor`}),`를 사용합니다. 각 WebSquare 탭의 코드는 화면 XML 루트에서 `,(0,X.jsx)(t.code,{children:`w2`}),`, `,(0,X.jsx)(t.code,{children:`xf`}),`, `,(0,X.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,X.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,X.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,X.jsx)(t.code,{children:`Tag`}),`와 `,(0,X.jsx)(t.code,{children:`TagGroup`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 prop에 따라 루트 요소·상태·공통 클래스를 선택하고, HTML과 Gulp는 같은 구조를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,X.jsxs)(t.ul,{children:[`
`,(0,X.jsxs)(t.li,{children:[(0,X.jsx)(t.code,{children:`variant`}),`·`,(0,X.jsx)(t.code,{children:`color`}),`·`,(0,X.jsx)(t.code,{children:`size`}),`·`,(0,X.jsx)(t.code,{children:`round`}),`는 `,(0,X.jsx)(t.code,{children:`tag_*`}),`·`,(0,X.jsx)(t.code,{children:`color_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,X.jsxs)(t.li,{children:[(0,X.jsx)(t.code,{children:`checkable`}),`·`,(0,X.jsx)(t.code,{children:`add`}),`는 button, `,(0,X.jsx)(t.code,{children:`href`}),`는 anchor, 나머지는 정적 span 의미를 사용합니다.`]}),`
`,(0,X.jsxs)(t.li,{children:[(0,X.jsx)(t.code,{children:`selected`}),`는 `,(0,X.jsx)(t.code,{children:`is-selected`}),`와 `,(0,X.jsx)(t.code,{children:`aria-pressed`}),`, `,(0,X.jsx)(t.code,{children:`disabled`}),`는 네이티브 `,(0,X.jsx)(t.code,{children:`disabled`}),` 또는 `,(0,X.jsx)(t.code,{children:`aria-disabled`}),`를 적용합니다.`]}),`
`,(0,X.jsxs)(t.li,{children:[(0,X.jsx)(t.code,{children:`closable`}),`은 독립된 `,(0,X.jsx)(t.code,{children:`tag_close`}),` 버튼을 만들며, 링크·선택·추가 Tag와 조합하면 인터랙티브 요소가 중첩되지 않도록 `,(0,X.jsx)(t.code,{children:`tag_control`}),`을 분리합니다.`]}),`
`,(0,X.jsxs)(t.li,{children:[(0,X.jsx)(t.code,{children:`TagGroup`}),`은 관련 Tag를 `,(0,X.jsx)(t.code,{children:`role="group"`}),`으로 묶고 `,(0,X.jsx)(t.code,{children:`tight`}),`으로 간격을 줄입니다.`]}),`
`]}),`
`,(0,X.jsx)(C,{examples:H,showFullCode:!0}),`
`,(0,X.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,X.jsxs)(t.p,{children:[`정적 레이블은 `,(0,X.jsx)(t.code,{children:`w2:textbox`}),`, 선택·추가 동작은 `,(0,X.jsx)(t.code,{children:`xf:trigger`}),`, URL 이동은 `,(0,X.jsx)(t.code,{children:`w2:anchor`}),`로 의미를 구분합니다. 선택 가능한 Tag는 `,(0,X.jsx)(t.code,{children:`aria-pressed`}),`를 화면 상태와 함께 갱신하고, `,(0,X.jsx)(t.code,{children:`ev:onclick`}),`에서 선택 데이터와 `,(0,X.jsx)(t.code,{children:`is-selected`}),` 클래스를 동기화합니다. 닫기 버튼은 별도의 `,(0,X.jsx)(t.code,{children:`xf:trigger.tag_close`}),`로 만들고 태그 제거 로직에 연결합니다.`]}),`
`,(0,X.jsxs)(t.p,{children:[`아이콘은 프로젝트의 정적 이미지나 CSS 배경 리소스에 연결합니다. 반복되는 Tag 목록은 DataList와 `,(0,X.jsx)(t.code,{children:`w2:generator`}),`를 사용할 수 있으며, 비활성 Trigger에는 이벤트를 연결하지 않습니다.`]}),`
`,(0,X.jsx)(t.h2,{id:`기본-filled`,children:`기본 (Filled)`}),`
`,(0,X.jsx)(t.p,{children:`연한 배경의 기본 태그입니다.`}),`
`,(0,X.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.basic}),`
`,(0,X.jsx)(t.h2,{id:`솔리드`,children:`솔리드`}),`
`,(0,X.jsx)(t.p,{children:`강조가 필요한 레이블에 대비가 높은 채움 스킨을 사용합니다.`}),`
`,(0,X.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.solid}),`
`,(0,X.jsx)(t.h2,{id:`아웃라인`,children:`아웃라인`}),`
`,(0,X.jsx)(t.p,{children:`배경 없이 테두리로 구분합니다.`}),`
`,(0,X.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.outline}),`
`,(0,X.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,X.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 모든 스킨에 적용할 수 있습니다.`}),`
`,(0,X.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.sizes}),`
`,(0,X.jsx)(t.h2,{id:`둥근`,children:`둥근`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`round`}),` 또는 `,(0,X.jsx)(t.code,{children:`tag_round`}),`로 pill 형태를 적용합니다.`]}),`
`,(0,X.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.round}),`
`,(0,X.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`icon`}),` prop 또는 슬롯과 `,(0,X.jsx)(t.code,{children:`tag_icon`}),`으로 앞 아이콘을 배치합니다.`]}),`
`,(0,X.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.icon}),`
`,(0,X.jsx)(t.h2,{id:`닫기-가능`,children:`닫기 가능`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`closable`}),`은 독립적인 닫기 버튼을 제공합니다. 선택·추가·링크와 조합할 때 인터랙티브 요소가 중첩되지 않도록 본문 컨트롤을 분리합니다.`]}),`
`,(0,X.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.closable}),`
`,(0,X.jsx)(t.h2,{id:`선택-가능`,children:`선택 가능`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`checkable`}),` 태그는 button과 `,(0,X.jsx)(t.code,{children:`aria-pressed`}),`로 현재 선택 상태를 전달합니다.`]}),`
`,(0,X.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.checkable}),`
`,(0,X.jsx)(t.h2,{id:`추가`,children:`추가`}),`
`,(0,X.jsx)(t.p,{children:`새 항목을 만드는 태그형 버튼입니다.`}),`
`,(0,X.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.add}),`
`,(0,X.jsx)(t.h2,{id:`링크`,children:`링크`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`href`}),`가 있으면 링크 의미와 키보드 동작을 유지합니다.`]}),`
`,(0,X.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.link}),`
`,(0,X.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,X.jsxs)(t.p,{children:[`button에는 네이티브 `,(0,X.jsx)(t.code,{children:`disabled`}),`, 링크·정적 요소에는 `,(0,X.jsx)(t.code,{children:`aria-disabled`}),`와 상태 클래스를 적용합니다.`]}),`
`,(0,X.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.disabled}),`
`,(0,X.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.code,{children:`TagGroup`}),`으로 관련 태그를 묶고 `,(0,X.jsx)(t.code,{children:`tight`}),`으로 간격을 줄입니다.`]}),`
`,(0,X.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,X.jsx)(C,{examples:K.group}),`
`,(0,X.jsx)(w,{sections:T})]})}function Y(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,X.jsx)(t,{...e,children:(0,X.jsx)(J,{...e})}):J(e)}var X;function Z(){return(Z=e((()=>{X=t(),_(),b(),x(),S(),q(),E(),c()})))()}Z();export{Y as default};