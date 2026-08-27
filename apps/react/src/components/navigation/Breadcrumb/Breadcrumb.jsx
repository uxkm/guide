/**
 * Breadcrumb 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Children, isValidElement } from 'react';
import BreadcrumbItem from './BreadcrumbItem.jsx';

const separators = new Set(['chevron', 'slash', 'dot']);
const sizes = new Set(['sm', 'md', 'lg']);

export function Breadcrumb({
  items = [],
  ariaLabel = '경로',
  separator = 'chevron',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const resolvedSeparator = separators.has(separator) ? separator : 'chevron';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const classes = [
    'breadcrumb',
    resolvedSeparator !== 'chevron' && `breadcrumb_sep-${resolvedSeparator}`,
    resolvedSize !== 'md' && `breadcrumb_${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const content = items.length
    ? items.map((item, index) => (
        <BreadcrumbItem
          key={item.key ?? `${item.label}-${index}`}
          {...item}
          current={item.current ?? index === items.length - 1}
        />
      ))
    : Children.toArray(children).filter(isValidElement);
  return (
    <nav {...props} className={classes} aria-label={ariaLabel} data-component="Breadcrumb">
      <ol className="breadcrumb_list">{content}</ol>
    </nav>
  );
}

export default Breadcrumb;
