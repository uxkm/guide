import { mergeProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export function toChildArray(childInput) {
  const resolved = typeof childInput === 'function' ? childInput() : childInput;
  if (resolved == null || resolved === false) return [];
  return Array.isArray(resolved) ? resolved.filter(Boolean) : [resolved];
}

export function isSolidChild(node) {
  return node != null && node !== false && typeof node === 'object';
}

export function mergeChildProps(node, extraProps = {}) {
  if (node == null || node === false) return null;
  if (typeof node === 'function') {
    return mergeChildProps(node(), extraProps);
  }
  if (Array.isArray(node)) {
    return node.map((child) => mergeChildProps(child, extraProps));
  }
  if (node.props && typeof node.type === 'function') {
    return <Dynamic component={node.type} {...mergeProps(node.props, extraProps)} />;
  }
  return node;
}
