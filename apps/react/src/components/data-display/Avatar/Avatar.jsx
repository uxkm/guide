/**
 * Avatar 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useState } from 'react';

// 지원하지 않는 크기 값은 기본 md로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

// 이미지와 fallback 콘텐츠, 크기·색상·상태 점을 하나의 Avatar API로 조합합니다.
export function Avatar({
  src,
  alt = '',
  initials,
  icon,
  children,
  color,
  size = 'md',
  square = false,
  badgeColor,
  badgeLabel,
  ariaHidden = false,
  className = '',
  ...props
}) {
  // 이미지 로드 실패 시 아이콘, children, initials 순서의 fallback으로 전환합니다.
  const [imageError, setImageError] = useState(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showImage = Boolean(src) && !imageError;
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
        <span className={`avatar_badge color_${badgeColor}`} role="img" aria-label={badgeLabel} />
      ) : null}
    </span>
  );
}

export function AvatarGroup({ children, ariaLabel, className = '', ...props }) {
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
