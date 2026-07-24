import { createElement } from 'react';

/** commonIconPaths 요소를 React SVG 자식으로 렌더 */
export function renderIconElements(elements) {
  if (!elements?.length) return null;
  return elements.map((el, i) => createElement(el.tag, { key: i, ...el.attrs }));
}
