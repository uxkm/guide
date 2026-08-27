import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./Avatar.stories-BZeCqjiD.js";import{i as u,r as d}from"./react-BBfuIdny.js";import{c as f,r as p,u as m}from"./blocks-DbhChoan.js";import{i as h,n as g,r as _,t as v}from"./ComponentApiDocs-arf-yre-.js";import{r as y,t as b}from"./dataDisplayApiSections-C0EnwqfF.js";var x;function S(){return(S=e((()=>{x=`<!-- Avatar 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Avatar 루트에 공통 클래스를 적용합니다. -->
<div class="avatar_group" data-component="AvatarGroup" aria-label="팀 멤버 3명">
  <!-- 내부에 데이터 표시 콘텐츠를 배치합니다. -->
  <span class="avatar color_primary" data-component="Avatar" aria-hidden="true">김</span>
  <span class="avatar color_success" data-component="Avatar" aria-hidden="true">이</span>
  <span class="avatar color_warning" data-component="Avatar" aria-hidden="true">
    박<span class="avatar_badge color_success" aria-label="온라인"></span>
  </span>
</div>
`})))()}var C;function w(){return(w=e((()=>{C=`{# Avatar 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<div class="avatar_group" {# Avatar 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="AvatarGroup" aria-label="팀 멤버 3명">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}
  <span class="avatar color_primary" data-component="Avatar" aria-hidden="true">김</span>
  <span class="avatar color_success" data-component="Avatar" aria-hidden="true">이</span>
  <span class="avatar color_warning" data-component="Avatar" aria-hidden="true">
    박<span class="avatar_badge color_success" aria-label="온라인"></span>
  </span>
</div>
`})))()}var T;function E(){return(E=e((()=>{T=`/**
 * Avatar 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useState } from 'react';

// 지원하지 않는 크기 값은 기본 md로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

// 이미지와 fallback 콘텐츠, 크기·색상·상태 점을 하나의 Avatar API로 조합합니다.
export function Avatar({
  src, // 아바타 이미지 주소입니다.
  alt = '', // 이미지 대체 텍스트입니다.
  initials, // 이미지 없을 때 이니셜 텍스트입니다.
  icon, // 이미지 없을 때 표시할 아이콘입니다.
  children, // fallback 콘텐츠입니다. icon·initials보다 우선할 수 있습니다.
  color, // color_* 배경 색상 클래스입니다.
  size = 'md', // sm · md · lg · xl 크기입니다.
  square = false, // 사각형 변형 여부입니다.
  badgeColor, // 상태 점 색상입니다.
  badgeLabel, // 상태 점의 접근성 이름입니다.
  ariaHidden = false, // 장식용으로 숨길 때 true입니다.
  className = '', // 추가 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 이미지 로드 실패 시 아이콘, children, initials 순서의 fallback으로 전환합니다.
  const [imageError, setImageError] = useState(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showImage = Boolean(src) && !imageError;
  const fallback = icon ?? children ?? initials;
  // prop을 avatar_*와 color_* 공통 클래스로 변환합니다.
  const classes = [
    'avatar',
    color && \`color_\${color}\`,
    resolvedSize !== 'md' && \`avatar_\${resolvedSize}\`,
    square && 'avatar_square',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 새 이미지 주소는 이전 주소의 로드 오류 상태를 이어받지 않습니다.
  useEffect(() => setImageError(false), [src]);

  return (
    <span
      {...props}
      aria-hidden={ariaHidden || undefined}
      className={classes}
      data-component="Avatar"
    >
      {showImage ? (
        <img className="avatar_image" src={src} alt={alt} onError={() => setImageError(true)} />
      ) : (
        fallback
      )}
      {badgeColor ? (
        <span className={\`avatar_badge color_\${badgeColor}\`} role="img" aria-label={badgeLabel} />
      ) : null}
    </span>
  );
}

export function AvatarGroup({
  children, // 겹쳐 배치할 Avatar 자식들입니다.
  ariaLabel, // 그룹의 접근성 이름입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 그룹 루트에 전달합니다.
}) {
  // 관련 Avatar를 겹침 레이아웃과 접근 가능한 group으로 묶습니다.
  const classes = ['avatar_group', className].filter(Boolean).join(' ');
  return (
    <div
      {...props}
      role="group"
      aria-label={ariaLabel}
      className={classes}
      data-component="AvatarGroup"
    >
      {children}
    </div>
  );
}

export default Avatar;
`})))()}var D;function O(){return(O=e((()=>{D=`<!--
  Avatar 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

// class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.
defineOptions({ name: 'UxkmAvatar', inheritAttrs: false });

// 이미지, fallback 이니셜, 크기·색상·상태 점을 공통 prop으로 받습니다.
const props = defineProps({
  src: String, // 아바타 이미지 주소입니다.
  alt: { type: String, default: '' }, // 이미지 대체 텍스트입니다.
  initials: String, // 이미지 없을 때 이니셜 텍스트입니다.
  color: String, // color_* 배경 색상 클래스입니다.
  size: { // sm · md · lg · xl 크기입니다.
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  square: Boolean, // 사각형 아바타로 표시합니다.
  badgeColor: String, // 상태 점 색상입니다.
  badgeLabel: String, // 상태 점의 접근성 이름입니다.
  ariaHidden: Boolean, // 장식용으로 숨길 때 true입니다.
});

const attrs = useAttrs();
// 이미지 로드 실패 시 icon/default slot 또는 initials로 전환합니다.
const imageError = ref(false);
const showImage = computed(() => Boolean(props.src) && !imageError.value);
// prop과 사용자 class를 avatar_* · color_* 클래스에 연결합니다.
const classes = computed(() =>
  [
    'avatar',
    props.color && \`color_\${props.color}\`,
    props.size !== 'md' && \`avatar_\${props.size}\`,
    props.square && 'avatar_square',
    attrs.class,
  ].filter(Boolean),
);

// 새 이미지 주소는 이전 주소의 로드 오류 상태를 이어받지 않습니다.
watch(
  () => props.src,
  () => {
    imageError.value = false;
  },
);
<\/script>

<template>
  <!-- 이미지가 없거나 실패하면 slot과 initials를 사용하고 상태 점은 별도 접근성 이름을 가집니다. -->
  <span
    v-bind="attrs"
    :class="classes"
    :aria-hidden="ariaHidden || undefined"
    data-component="Avatar"
  >
    <img v-if="showImage" class="avatar_image" :src="src" :alt="alt" @error="imageError = true" />
    <slot v-else name="icon"
      ><slot>{{ initials }}</slot></slot
    >
    <span
      v-if="badgeColor"
      class="avatar_badge"
      :class="\`color_\${badgeColor}\`"
      :aria-label="badgeLabel"
    />
  </span>
</template>
`})))()}function k(e,t){let n=`import { Avatar, AvatarGroup } from '@uxkm/react/avatar';\n\nexport function Example() {\n  return (\n${t.react}\n  );\n}`,r=`<script setup>\nimport { Avatar, AvatarGroup } from '@uxkm/vue/avatar';\n<\/script>\n\n<template>\n${t.vue}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Avatar/Avatar.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Avatar/avatar.njk · ${e}`,code:`{# Avatar · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/avatar → apps/vue/src/components/data-display/Avatar/Avatar.vue · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/avatar → apps/vue/src/components/data-display/Avatar/Avatar.vue · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/avatar → apps/react/src/components/data-display/Avatar/Avatar.jsx · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/avatar → apps/react/src/components/data-display/Avatar/Avatar.jsx · ${e}`,code:n},{id:`websquare`,label:`WebSquare`,fileName:`Avatar.xml · ${e}`,code:t.websquare}]}var A,j;function M(){return(M=e((()=>{S(),w(),E(),O(),A=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Avatar/Avatar.html`,code:x},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Avatar/avatar.njk`,code:C},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Avatar/Avatar.vue`,code:D},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/avatar → Avatar.vue`,code:D},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Avatar/Avatar.jsx`,code:T},{id:`next`,label:`Next`,fileName:`@uxkm/react/avatar → Avatar.jsx`,code:T}],j={basic:k(`basic`,{html:`<span class="avatar"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></span>
<span class="avatar color_primary" aria-hidden="true">홍</span>
<span class="avatar color_default" aria-hidden="true"><svg class="avatar_icon" aria-hidden="true"><!-- user --></svg></span>`,react:`    <>
      <Avatar src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />
      <Avatar color="primary" initials="홍" ariaHidden />
      <Avatar color="default" ariaHidden>👤</Avatar>
    </>`,vue:`  <Avatar src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />
  <Avatar color="primary" initials="홍" aria-hidden />
  <Avatar color="default" aria-hidden>👤</Avatar>`,websquare:`<!-- 이미지 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="avatarBasicExample" class="icon_group">
  <w2:group id="avatarBasicImage" class="avatar">
    <w2:image id="avatarBasicImageResource" class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></w2:image>
  </w2:group>
  <w2:textbox id="avatarBasicInitials" tagname="span" class="avatar color_primary" label="홍" aria-hidden="true"></w2:textbox>
  <w2:group id="avatarBasicIcon" class="avatar color_default" aria-hidden="true">
    <w2:image id="avatarBasicIconResource" class="avatar_icon" src="/images/icons/user.svg" alt=""></w2:image>
  </w2:group>
</w2:group>`}),sizes:k(`sizes`,{html:`<span class="avatar avatar_sm color_primary">A</span>
<span class="avatar color_primary">B</span>
<span class="avatar avatar_lg color_primary">C</span>
<span class="avatar avatar_xl color_primary">D</span>`,react:`    <>
      <Avatar size="sm" color="primary" initials="A" ariaHidden />
      <Avatar color="primary" initials="B" ariaHidden />
      <Avatar size="lg" color="primary" initials="C" ariaHidden />
      <Avatar size="xl" color="primary" initials="D" ariaHidden />
    </>`,vue:`  <Avatar size="sm" color="primary" initials="A" aria-hidden />
  <Avatar color="primary" initials="B" aria-hidden />
  <Avatar size="lg" color="primary" initials="C" aria-hidden />
  <Avatar size="xl" color="primary" initials="D" aria-hidden />`,websquare:`<w2:group id="avatarSizesExample" class="icon_group">
  <w2:textbox id="avatarSmall" tagname="span" class="avatar avatar_sm color_primary" label="A" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMedium" tagname="span" class="avatar color_primary" label="B" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarLarge" tagname="span" class="avatar avatar_lg color_primary" label="C" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarExtraLarge" tagname="span" class="avatar avatar_xl color_primary" label="D" aria-hidden="true"></w2:textbox>
</w2:group>`}),shapes:k(`shapes`,{html:`<span class="avatar color_primary">원</span>
<span class="avatar avatar_square color_primary">각</span>
<span class="avatar avatar_square"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></span>`,react:`    <>
      <Avatar color="primary" initials="원" ariaHidden />
      <Avatar square color="primary" initials="각" ariaHidden />
      <Avatar square src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />
    </>`,vue:`  <Avatar color="primary" initials="원" aria-hidden />
  <Avatar square color="primary" initials="각" aria-hidden />
  <Avatar square src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />`,websquare:`<w2:group id="avatarShapesExample" class="icon_group">
  <w2:textbox id="avatarCircle" tagname="span" class="avatar color_primary" label="원" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarSquare" tagname="span" class="avatar avatar_square color_primary" label="각" aria-hidden="true"></w2:textbox>
  <w2:group id="avatarSquareImage" class="avatar avatar_square">
    <w2:image id="avatarSquareImageResource" class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></w2:image>
  </w2:group>
</w2:group>`}),colors:k(`colors`,{html:`<span class="avatar color_default">D</span>
<span class="avatar color_primary">P</span>
<span class="avatar color_success">S</span>
<span class="avatar color_warning">W</span>
<span class="avatar color_danger">E</span>`,react:`    <>
      {['default', 'primary', 'success', 'warning', 'danger'].map((color) => (
        <Avatar key={color} color={color} initials={color[0]} ariaHidden />
      ))}
    </>`,vue:`  <Avatar v-for="color in ['default', 'primary', 'success', 'warning', 'danger']" :key="color" :color="color" :initials="color[0]" aria-hidden />`,websquare:`<!-- 반복 데이터라면 DataList와 w2:generator로 같은 구조를 생성할 수 있습니다. -->
<w2:group id="avatarColorsExample" class="icon_group">
  <w2:textbox id="avatarDefault" tagname="span" class="avatar color_default" label="D" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarPrimary" tagname="span" class="avatar color_primary" label="P" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarSuccess" tagname="span" class="avatar color_success" label="S" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarWarning" tagname="span" class="avatar color_warning" label="W" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarDanger" tagname="span" class="avatar color_danger" label="E" aria-hidden="true"></w2:textbox>
</w2:group>`}),badge:k(`badge`,{html:`<span class="avatar color_primary">온<span class="avatar_badge color_success" role="img" aria-label="온라인"></span></span>
<span class="avatar color_default">대<span class="avatar_badge color_warning" role="img" aria-label="자리 비움"></span></span>`,react:`    <>
      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" />
      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" />
    </>`,vue:`  <Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" />
  <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" />`,websquare:`<w2:group id="avatarBadgeExample" class="icon_group">
  <w2:group id="avatarOnline" class="avatar color_primary">
    <w2:textbox id="avatarOnlineInitials" tagname="span" label="온"></w2:textbox>
    <w2:group id="avatarOnlineBadge" class="avatar_badge color_success" role="img" aria-label="온라인"></w2:group>
  </w2:group>
  <w2:group id="avatarAway" class="avatar color_default">
    <w2:textbox id="avatarAwayInitials" tagname="span" label="대"></w2:textbox>
    <w2:group id="avatarAwayBadge" class="avatar_badge color_warning" role="img" aria-label="자리 비움"></w2:group>
  </w2:group>
</w2:group>`}),group:k(`group`,{html:`<div class="avatar_group" role="group" aria-label="팀 멤버 4명">
  <span class="avatar color_primary" aria-hidden="true">김</span>
  <span class="avatar color_success" aria-hidden="true">이</span>
  <span class="avatar color_warning" aria-hidden="true">박</span>
  <span class="avatar color_danger" aria-hidden="true">최</span>
</div>`,react:`    <AvatarGroup ariaLabel="팀 멤버 4명">
      <Avatar color="primary" initials="김" ariaHidden />
      <Avatar color="success" initials="이" ariaHidden />
      <Avatar color="warning" initials="박" ariaHidden />
      <Avatar color="danger" initials="최" ariaHidden />
    </AvatarGroup>`,vue:`  <AvatarGroup aria-label="팀 멤버 4명">
    <Avatar color="primary" initials="김" aria-hidden />
    <Avatar color="success" initials="이" aria-hidden />
    <Avatar color="warning" initials="박" aria-hidden />
    <Avatar color="danger" initials="최" aria-hidden />
  </AvatarGroup>`,websquare:`<w2:group id="avatarGroupExample" class="avatar_group" role="group" aria-label="팀 멤버 4명">
  <w2:textbox id="avatarMember1" tagname="span" class="avatar color_primary" label="김" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember2" tagname="span" class="avatar color_success" label="이" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember3" tagname="span" class="avatar color_warning" label="박" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember4" tagname="span" class="avatar color_danger" label="최" aria-hidden="true"></w2:textbox>
</w2:group>`})}})))()}function N(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...u(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{of:l}),`
`,(0,F.jsx)(t.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,F.jsx)(t.p,{children:`사용자·조직을 이미지, 이니셜 또는 아이콘으로 표현합니다. 크기·형태·색상·상태 점과 겹침 그룹을 공통 API로 제공합니다.`}),`
`,(0,F.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,F.jsx)(t.code,{children:`@uxkm/vue/avatar`}),`, `,(0,F.jsx)(t.code,{children:`@uxkm/react/avatar`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare는 `,(0,F.jsx)(t.code,{children:`w2:group`}),`과 `,(0,F.jsx)(t.code,{children:`w2:textbox`}),`에 공통 Avatar 클래스를 적용하고, 프로필 이미지는 `,(0,F.jsx)(t.code,{children:`w2:image`}),`로 배치합니다. 각 WebSquare 탭의 코드는 화면 XML 루트에서 `,(0,F.jsx)(t.code,{children:`w2`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,F.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,F.jsx)(t.code,{children:`Avatar`}),`와 `,(0,F.jsx)(t.code,{children:`AvatarGroup`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 공통 CSS 클래스와 접근성 속성으로 변환하고, HTML과 Gulp는 같은 클래스와 내부 구조를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`src`}),` 이미지가 있으면 `,(0,F.jsx)(t.code,{children:`avatar_image`}),`를 렌더링하고, 로드에 실패하면 아이콘·자식 콘텐츠·이니셜 순서로 대체합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`size`}),`·`,(0,F.jsx)(t.code,{children:`square`}),`·`,(0,F.jsx)(t.code,{children:`color`}),`는 `,(0,F.jsx)(t.code,{children:`avatar_*`}),`·`,(0,F.jsx)(t.code,{children:`color_*`}),` 클래스로 변환됩니다. `,(0,F.jsx)(t.code,{children:`md`}),` 크기는 기본값이라 별도 클래스를 붙이지 않습니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`badgeColor`}),`는 `,(0,F.jsx)(t.code,{children:`avatar_badge color_*`}),` 상태 점을 만들며, `,(0,F.jsx)(t.code,{children:`badgeLabel`}),`로 상태 의미를 제공합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[`장식용 아바타는 `,(0,F.jsx)(t.code,{children:`ariaHidden`}),` 또는 `,(0,F.jsx)(t.code,{children:`aria-hidden`}),`으로 숨기고, 의미 있는 이미지에는 내용을 식별하는 `,(0,F.jsx)(t.code,{children:`alt`}),`를 지정합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`AvatarGroup`}),`은 겹침 레이아웃과 `,(0,F.jsx)(t.code,{children:`role="group"`}),`을 적용하고 `,(0,F.jsx)(t.code,{children:`ariaLabel`}),`로 그룹 목적이나 인원을 설명합니다.`]}),`
`]}),`
`,(0,F.jsx)(_,{examples:A,showFullCode:!0}),`
`,(0,F.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare에는 별도 Avatar 컴포넌트 파일을 두지 않고 화면 XML의 `,(0,F.jsx)(t.code,{children:`w2:group`}),`·`,(0,F.jsx)(t.code,{children:`w2:textbox`}),`에 `,(0,F.jsx)(t.code,{children:`avatar`}),`, `,(0,F.jsx)(t.code,{children:`avatar_*`}),`, `,(0,F.jsx)(t.code,{children:`color_*`}),` 클래스를 조합합니다. 이미지 아바타는 `,(0,F.jsx)(t.code,{children:`w2:group.avatar`}),` 안에 `,(0,F.jsx)(t.code,{children:`w2:image.avatar_image`}),`를 배치합니다. 상태 점은 아바타 내부의 `,(0,F.jsx)(t.code,{children:`w2:group.avatar_badge`}),`로 만들고 상태를 설명하는 접근성 이름을 지정합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`이미지와 아이콘 경로는 프로젝트의 정적 리소스 위치에 맞게 변경합니다. 반복되는 사용자 목록은 DataList와 `,(0,F.jsx)(t.code,{children:`w2:generator`}),`로 만들 수 있으며, 화면 데이터가 바뀔 때 이니셜·색상·이미지 경로를 함께 갱신합니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,F.jsxs)(t.p,{children:[`이미지가 있으면 `,(0,F.jsx)(t.code,{children:`avatar_image`}),`로 표시하고, 로드에 실패하거나 이미지가 없으면 아이콘·자식·이니셜 순서로 대체합니다.`]}),`
`,(0,F.jsx)(p,{of:a,sourceState:`none`}),`
`,(0,F.jsx)(_,{examples:j.basic}),`
`,(0,F.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,F.jsx)(t.p,{children:`small, medium, large, extra large 네 가지 크기를 제공합니다.`}),`
`,(0,F.jsx)(p,{of:o,sourceState:`none`}),`
`,(0,F.jsx)(_,{examples:j.sizes}),`
`,(0,F.jsx)(t.h2,{id:`형태`,children:`형태`}),`
`,(0,F.jsxs)(t.p,{children:[`기본은 원형이며 `,(0,F.jsx)(t.code,{children:`square`}),` 또는 `,(0,F.jsx)(t.code,{children:`avatar_square`}),`로 사각형을 적용합니다.`]}),`
`,(0,F.jsx)(p,{of:n,sourceState:`none`}),`
`,(0,F.jsx)(_,{examples:j.shapes}),`
`,(0,F.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,F.jsxs)(t.p,{children:[`이니셜·아이콘형 아바타에 공통 `,(0,F.jsx)(t.code,{children:`color_*`}),` 색상을 적용합니다.`]}),`
`,(0,F.jsx)(p,{of:s,sourceState:`none`}),`
`,(0,F.jsx)(_,{examples:j.colors}),`
`,(0,F.jsx)(t.h2,{id:`상태-배지`,children:`상태 배지`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`badgeColor`}),`와 `,(0,F.jsx)(t.code,{children:`badgeLabel`}),`로 온라인·자리 비움·오프라인 등의 상태를 표시합니다.`]}),`
`,(0,F.jsx)(p,{of:c,sourceState:`none`}),`
`,(0,F.jsx)(_,{examples:j.badge}),`
`,(0,F.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`AvatarGroup`}),`은 여러 아바타를 겹쳐 표시합니다. 그룹에는 인원이나 목적을 설명하는 접근성 이름을 지정합니다.`]}),`
`,(0,F.jsx)(p,{of:i,sourceState:`none`}),`
`,(0,F.jsx)(_,{examples:j.group}),`
`,(0,F.jsx)(v,{sections:b})]})}function P(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),d(),m(),h(),g(),M(),y(),r()})))()}I();export{P as default};