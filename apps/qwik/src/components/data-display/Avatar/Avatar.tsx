import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * Avatar 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 크기 값은 기본 md로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

// 이미지와 fallback 콘텐츠, 크기·색상·상태 점을 하나의 Avatar API로 조합합니다.
export const Avatar = component$(({
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
  class: className = '', // 추가 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 이미지 로드 실패 시 아이콘, children, initials 순서의 fallback으로 전환합니다.
  const imageError = useSignal(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showImage = Boolean(src) && !imageError.value;
  const fallback = icon ?? children ?? initials;
  // prop을 avatar_*와 color_* 공통 클래스로 변환합니다.
  const classes = [
    'avatar',
    color && `color_${color}`,
    resolvedSize !== 'md' && `avatar_${resolvedSize}`,
    square && 'avatar_square',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 새 이미지 주소는 이전 주소의 로드 오류 상태를 이어받지 않습니다.
  useVisibleTask$(({ track }) => imageError.value = false);

  return (
    <span
      {...props}
      aria-hidden={ariaHidden || undefined}
      class={classes}
      data-component="Avatar"
    >
      {showImage ? (
        <img class="avatar_image" src={src} alt={alt} onError={() => imageError.value = true} />
      ) : (
        fallback
      )}
      {badgeColor ? (
        <span class={`avatar_badge color_${badgeColor}`} role="img" aria-label={badgeLabel} />
      ) : null}
    </span>
  );
});

export const AvatarGroup = component$(({
  children, // 겹쳐 배치할 Avatar 자식들입니다.
  ariaLabel, // 그룹의 접근성 이름입니다.
  class: className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 그룹 루트에 전달합니다.
}) {
  // 관련 Avatar를 겹침 레이아웃과 접근 가능한 group으로 묶습니다.
  const classes = ['avatar_group', className].filter(Boolean).join(' ');
  return (
    <div
      {...props}
      role="group"
      aria-label={ariaLabel}
      class={classes}
      data-component="AvatarGroup"
    >
      {children}
    </div>
  );
});

export default Avatar;
