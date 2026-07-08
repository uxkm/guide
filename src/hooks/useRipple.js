/**
 * 클릭 파장(ripple) — data-ripple 속성
 *
 * · undefined — surface는 기본 활성, container는 자식에만 적용
 * · true      — data-ripple="true"
 * · false     — data-ripple="false"(표면) 또는 data-no-ripple(컨테이너)
 */

/** 절대 위치 보조 버튼 — overflow 클리핑만 (position:relative 미적용) */
export const rippleSurfaceAttrs = { 'data-ripple': 'surface' };

/**
 * @param {{ ripple?: boolean }} props
 * @param {{ mode?: 'surface' | 'container', defaultEnabled?: boolean }} [options]
 */
export function useRipple(props, options = {}) {
  const { mode = 'surface', defaultEnabled = mode === 'surface' } = options;

  const enabled =
    props.ripple === false ? false : props.ripple === true ? true : defaultEnabled;

  const rippleAttrs = !enabled
    ? mode === 'container'
      ? { 'data-no-ripple': '' }
      : { 'data-ripple': 'false' }
    : mode === 'surface'
      ? { 'data-ripple': 'true' }
      : {};

  const childRippleAttrs = !enabled ? { 'data-ripple': 'false' } : { 'data-ripple': 'true' };

  return { rippleAttrs, childRippleAttrs, enabled };
}
