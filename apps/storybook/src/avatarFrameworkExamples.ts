import type { FrameworkExample } from './FrameworkCode';

const avatarHtmlComponent = `<!-- 이미지 아바타 -->
<span class="avatar" data-component="Avatar">
  <img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동">
</span>

<!-- 이미지가 없으면 이니셜 또는 아이콘을 표시합니다. 장식용이면 aria-hidden을 지정합니다. -->
<span class="avatar color_primary" data-component="Avatar" aria-hidden="true">홍</span>
<span class="avatar color_default" data-component="Avatar" aria-hidden="true">
  <svg class="avatar_icon" aria-hidden="true"><!-- user icon --></svg>
</span>

<!-- 상태 점과 겹침 그룹 -->
<div class="avatar_group" data-component="AvatarGroup" role="group" aria-label="팀 멤버 2명">
  <span class="avatar color_primary" data-component="Avatar" aria-hidden="true">
    김<span class="avatar_badge color_success" role="img" aria-label="온라인"></span>
  </span>
  <span class="avatar color_warning" data-component="Avatar" aria-hidden="true">이</span>
</div>`;

const avatarReactComponent = `import { useEffect, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

export function Avatar({
  src, // 프로필 이미지 URL입니다.
  alt = '', // 이미지 대체 텍스트입니다.
  initials, // 이미지·아이콘이 없을 때 표시할 이니셜입니다.
  icon, // fallback 아이콘입니다. children과 initials보다 우선합니다.
  children, // icon이 없을 때 사용할 커스텀 fallback입니다.
  color, // 이니셜·아이콘 배경의 color_* 클래스입니다.
  size = 'md', // sm · md · lg · xl 크기입니다.
  square = false, // 사각형 모서리를 적용합니다.
  badgeColor, // 상태 점의 color_* 클래스입니다.
  badgeLabel, // 상태 점의 접근성 이름입니다.
  ariaHidden = false, // 장식용 아바타를 접근성 트리에서 숨깁니다.
  className = '',
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showImage = Boolean(src) && !imageError;
  const fallback = icon ?? children ?? initials;
  const classes = [
    'avatar',
    color && \`color_\${color}\`,
    resolvedSize !== 'md' && \`avatar_\${resolvedSize}\`,
    square && 'avatar_square',
    className
  ].filter(Boolean).join(' ');

  // 이미지 주소가 바뀌면 이전 로드 오류 상태를 초기화합니다.
  useEffect(() => setImageError(false), [src]);

  return (
    <span {...props} aria-hidden={ariaHidden || undefined} className={classes} data-component="Avatar">
      {showImage ? (
        <img className="avatar_image" src={src} alt={alt} onError={() => setImageError(true)} />
      ) : fallback}
      {badgeColor ? (
        <span className={\`avatar_badge color_\${badgeColor}\`} role="img" aria-label={badgeLabel} />
      ) : null}
    </span>
  );
}

export function AvatarGroup({ children, ariaLabel, className = '', ...props }) {
  const classes = ['avatar_group', className].filter(Boolean).join(' ');
  return (
    <div {...props} role="group" aria-label={ariaLabel} className={classes} data-component="AvatarGroup">
      {children}
    </div>
  );
}

export default Avatar;`;

const avatarVueComponent = `<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

defineOptions({ name: 'UxkmAvatar', inheritAttrs: false });

const props = defineProps({
  src: String, // 프로필 이미지 URL입니다.
  alt: { type: String, default: '' }, // 이미지 대체 텍스트입니다.
  initials: String, // 이미지·슬롯이 없을 때 표시할 이니셜입니다.
  color: String, // 이니셜·아이콘 배경의 color_* 클래스입니다.
  size: { // sm · md · lg · xl 크기입니다.
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  square: Boolean, // 사각형 모서리를 적용합니다.
  badgeColor: String, // 상태 점의 color_* 클래스입니다.
  badgeLabel: String, // 상태 점의 접근성 이름입니다.
  ariaHidden: Boolean // 장식용 아바타를 접근성 트리에서 숨깁니다.
});

const attrs = useAttrs();
const imageError = ref(false);
const showImage = computed(() => Boolean(props.src) && !imageError.value);
const classes = computed(() => [
  'avatar',
  props.color && \`color_\${props.color}\`,
  props.size !== 'md' && \`avatar_\${props.size}\`,
  props.square && 'avatar_square',
  attrs.class
].filter(Boolean));

// 이미지 주소가 바뀌면 이전 로드 오류 상태를 초기화합니다.
watch(() => props.src, () => { imageError.value = false; });
</script>

<template>
  <span v-bind="attrs" :class="classes" :aria-hidden="ariaHidden || undefined" data-component="Avatar">
    <img v-if="showImage" class="avatar_image" :src="src" :alt="alt" @error="imageError = true" />
    <slot v-else name="icon"><slot>{{ initials }}</slot></slot>
    <span
      v-if="badgeColor"
      class="avatar_badge"
      :class="\`color_\${badgeColor}\`"
      :aria-label="badgeLabel"
    />
  </span>
</template>`;

export const avatarComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/data-display/Avatar/Avatar.html', code: avatarHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/data-display/Avatar/avatar.njk', code: `{# Avatar 구현 #}\n${avatarHtmlComponent}` },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/data-display/Avatar/Avatar.vue', code: avatarVueComponent },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/avatar → Avatar.vue', code: avatarVueComponent },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/data-display/Avatar/Avatar.jsx', code: avatarReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/avatar → Avatar.jsx', code: avatarReactComponent }
];

type Codes = { html: string; react: string; vue: string; websquare: string };

function makeExamples(key: string, codes: Codes): FrameworkExample[] {
  const react = `import { Avatar, AvatarGroup } from '@uxkm/react/avatar';\n\nexport function Example() {\n  return (\n${codes.react}\n  );\n}`;
  const vue = `<script setup>\nimport { Avatar, AvatarGroup } from '@uxkm/vue/avatar';\n</script>\n\n<template>\n${codes.vue}\n</template>`;

  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/Avatar/Avatar.html · ${key}`, code: codes.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/Avatar/avatar.njk · ${key}`, code: `{# Avatar · ${key} #}\n${codes.html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/avatar → apps/vue/src/components/data-display/Avatar/Avatar.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/avatar → apps/vue/src/components/data-display/Avatar/Avatar.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/avatar → apps/react/src/components/data-display/Avatar/Avatar.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/avatar → apps/react/src/components/data-display/Avatar/Avatar.jsx · ${key}`, code: react },
    { id: 'websquare', label: 'WebSquare', fileName: `Avatar.xml · ${key}`, code: codes.websquare }
  ];
}

export const avatarFrameworkExamples = {
  basic: makeExamples('basic', {
    html: `<span class="avatar"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></span>\n<span class="avatar color_primary" aria-hidden="true">홍</span>\n<span class="avatar color_default" aria-hidden="true"><svg class="avatar_icon" aria-hidden="true"><!-- user --></svg></span>`,
    react: `    <>\n      <Avatar src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />\n      <Avatar color="primary" initials="홍" ariaHidden />\n      <Avatar color="default" ariaHidden>👤</Avatar>\n    </>`,
    vue: `  <Avatar src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />\n  <Avatar color="primary" initials="홍" aria-hidden />\n  <Avatar color="default" aria-hidden>👤</Avatar>`,
    websquare: `<!-- 이미지 경로는 WebSquare 프로젝트의 정적 리소스 위치에 맞게 변경합니다. -->
<w2:group id="avatarBasicExample" class="icon_group">
  <w2:group id="avatarBasicImage" class="avatar">
    <w2:image id="avatarBasicImageResource" class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></w2:image>
  </w2:group>
  <w2:textbox id="avatarBasicInitials" tagname="span" class="avatar color_primary" label="홍" aria-hidden="true"></w2:textbox>
  <w2:group id="avatarBasicIcon" class="avatar color_default" aria-hidden="true">
    <w2:image id="avatarBasicIconResource" class="avatar_icon" src="/images/icons/user.svg" alt=""></w2:image>
  </w2:group>
</w2:group>`
  }),
  sizes: makeExamples('sizes', {
    html: `<span class="avatar avatar_sm color_primary">A</span>\n<span class="avatar color_primary">B</span>\n<span class="avatar avatar_lg color_primary">C</span>\n<span class="avatar avatar_xl color_primary">D</span>`,
    react: `    <>\n      <Avatar size="sm" color="primary" initials="A" ariaHidden />\n      <Avatar color="primary" initials="B" ariaHidden />\n      <Avatar size="lg" color="primary" initials="C" ariaHidden />\n      <Avatar size="xl" color="primary" initials="D" ariaHidden />\n    </>`,
    vue: `  <Avatar size="sm" color="primary" initials="A" aria-hidden />\n  <Avatar color="primary" initials="B" aria-hidden />\n  <Avatar size="lg" color="primary" initials="C" aria-hidden />\n  <Avatar size="xl" color="primary" initials="D" aria-hidden />`,
    websquare: `<w2:group id="avatarSizesExample" class="icon_group">
  <w2:textbox id="avatarSmall" tagname="span" class="avatar avatar_sm color_primary" label="A" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMedium" tagname="span" class="avatar color_primary" label="B" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarLarge" tagname="span" class="avatar avatar_lg color_primary" label="C" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarExtraLarge" tagname="span" class="avatar avatar_xl color_primary" label="D" aria-hidden="true"></w2:textbox>
</w2:group>`
  }),
  shapes: makeExamples('shapes', {
    html: `<span class="avatar color_primary">원</span>\n<span class="avatar avatar_square color_primary">각</span>\n<span class="avatar avatar_square"><img class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></span>`,
    react: `    <>\n      <Avatar color="primary" initials="원" ariaHidden />\n      <Avatar square color="primary" initials="각" ariaHidden />\n      <Avatar square src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />\n    </>`,
    vue: `  <Avatar color="primary" initials="원" aria-hidden />\n  <Avatar square color="primary" initials="각" aria-hidden />\n  <Avatar square src="/images/samples/avatar/avatar-sample.svg" alt="홍길동" />`,
    websquare: `<w2:group id="avatarShapesExample" class="icon_group">
  <w2:textbox id="avatarCircle" tagname="span" class="avatar color_primary" label="원" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarSquare" tagname="span" class="avatar avatar_square color_primary" label="각" aria-hidden="true"></w2:textbox>
  <w2:group id="avatarSquareImage" class="avatar avatar_square">
    <w2:image id="avatarSquareImageResource" class="avatar_image" src="/images/samples/avatar/avatar-sample.svg" alt="홍길동"></w2:image>
  </w2:group>
</w2:group>`
  }),
  colors: makeExamples('colors', {
    html: `<span class="avatar color_default">D</span>\n<span class="avatar color_primary">P</span>\n<span class="avatar color_success">S</span>\n<span class="avatar color_warning">W</span>\n<span class="avatar color_danger">E</span>`,
    react: `    <>\n      {['default', 'primary', 'success', 'warning', 'danger'].map((color) => (\n        <Avatar key={color} color={color} initials={color[0]} ariaHidden />\n      ))}\n    </>`,
    vue: `  <Avatar v-for="color in ['default', 'primary', 'success', 'warning', 'danger']" :key="color" :color="color" :initials="color[0]" aria-hidden />`,
    websquare: `<!-- 반복 데이터라면 DataList와 w2:generator로 같은 구조를 생성할 수 있습니다. -->
<w2:group id="avatarColorsExample" class="icon_group">
  <w2:textbox id="avatarDefault" tagname="span" class="avatar color_default" label="D" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarPrimary" tagname="span" class="avatar color_primary" label="P" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarSuccess" tagname="span" class="avatar color_success" label="S" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarWarning" tagname="span" class="avatar color_warning" label="W" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarDanger" tagname="span" class="avatar color_danger" label="E" aria-hidden="true"></w2:textbox>
</w2:group>`
  }),
  badge: makeExamples('badge', {
    html: `<span class="avatar color_primary">온<span class="avatar_badge color_success" role="img" aria-label="온라인"></span></span>\n<span class="avatar color_default">대<span class="avatar_badge color_warning" role="img" aria-label="자리 비움"></span></span>`,
    react: `    <>\n      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" />\n      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" />\n    </>`,
    vue: `  <Avatar color="primary" initials="온" badge-color="success" badge-label="온라인" />\n  <Avatar color="default" initials="대" badge-color="warning" badge-label="자리 비움" />`,
    websquare: `<w2:group id="avatarBadgeExample" class="icon_group">
  <w2:group id="avatarOnline" class="avatar color_primary">
    <w2:textbox id="avatarOnlineInitials" tagname="span" label="온"></w2:textbox>
    <w2:group id="avatarOnlineBadge" class="avatar_badge color_success" role="img" aria-label="온라인"></w2:group>
  </w2:group>
  <w2:group id="avatarAway" class="avatar color_default">
    <w2:textbox id="avatarAwayInitials" tagname="span" label="대"></w2:textbox>
    <w2:group id="avatarAwayBadge" class="avatar_badge color_warning" role="img" aria-label="자리 비움"></w2:group>
  </w2:group>
</w2:group>`
  }),
  group: makeExamples('group', {
    html: `<div class="avatar_group" role="group" aria-label="팀 멤버 4명">\n  <span class="avatar color_primary" aria-hidden="true">김</span>\n  <span class="avatar color_success" aria-hidden="true">이</span>\n  <span class="avatar color_warning" aria-hidden="true">박</span>\n  <span class="avatar color_danger" aria-hidden="true">최</span>\n</div>`,
    react: `    <AvatarGroup ariaLabel="팀 멤버 4명">\n      <Avatar color="primary" initials="김" ariaHidden />\n      <Avatar color="success" initials="이" ariaHidden />\n      <Avatar color="warning" initials="박" ariaHidden />\n      <Avatar color="danger" initials="최" ariaHidden />\n    </AvatarGroup>`,
    vue: `  <AvatarGroup aria-label="팀 멤버 4명">\n    <Avatar color="primary" initials="김" aria-hidden />\n    <Avatar color="success" initials="이" aria-hidden />\n    <Avatar color="warning" initials="박" aria-hidden />\n    <Avatar color="danger" initials="최" aria-hidden />\n  </AvatarGroup>`,
    websquare: `<w2:group id="avatarGroupExample" class="avatar_group" role="group" aria-label="팀 멤버 4명">
  <w2:textbox id="avatarMember1" tagname="span" class="avatar color_primary" label="김" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember2" tagname="span" class="avatar color_success" label="이" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember3" tagname="span" class="avatar color_warning" label="박" aria-hidden="true"></w2:textbox>
  <w2:textbox id="avatarMember4" tagname="span" class="avatar color_danger" label="최" aria-hidden="true"></w2:textbox>
</w2:group>`
  })
};
