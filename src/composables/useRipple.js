import { computed } from 'vue';

/**
 * 클릭 파장(ripple) — data-ripple 속성
 *
 * · undefined — surface는 기본 활성, container는 자식에만 적용
 * · true      — data-ripple="true"
 * · false     — data-ripple="false"(표면) 또는 data-no-ripple(컨테이너)
 */

/** 절대 위치 보조 버튼 — overflow 클리핑만 (position:relative 미적용) */
export const rippleSurfaceAttrs = { 'data-ripple': 'surface' };
export const rippleProp = {
  type: Boolean,
  default: undefined,
};

/**
 * @param {{ ripple?: boolean }} props
 * @param {{ mode?: 'surface' | 'container', defaultEnabled?: boolean }} [options]
 */
export function useRipple(props, options = {}) {
  const { mode = 'surface', defaultEnabled = mode === 'surface' } = options;

  const enabled = computed(() => {
    if (props.ripple === false) return false;
    if (props.ripple === true) return true;
    return defaultEnabled;
  });

  const rippleAttrs = computed(() => {
    if (!enabled.value) {
      return mode === 'container' ? { 'data-no-ripple': '' } : { 'data-ripple': 'false' };
    }
    if (mode === 'surface') {
      return { 'data-ripple': 'true' };
    }
    return {};
  });

  /** container 모드 자식 인터랙티브 표면용 */
  const childRippleAttrs = computed(() => {
    if (!enabled.value) return { 'data-ripple': 'false' };
    return { 'data-ripple': 'true' };
  });

  return { rippleAttrs, childRippleAttrs, enabled };
}
