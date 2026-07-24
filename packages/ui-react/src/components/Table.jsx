import { useMemo, useRef } from 'react';
import { useTableDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { columnColStyle, columnRootVars } from '@/utils/table-column-sizing';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function Table({
  bordered,
  striped,
  compact,
  hover,
  wrap = true,
  columns = [],
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const hasColumns = Array.isArray(columns) && columns.length > 0;

  useTableDemoCode(
    { bordered, striped, compact, hover, wrap, columns },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const tableClass = useMemo(() => {
    const classes = ['table'];
    if (bordered) classes.push('table_bordered');
    if (striped) classes.push('table_striped');
    if (compact) classes.push('table_compact');
    if (hover) classes.push('table_hover');
    if (hasColumns) classes.push('table_columns');
    return classes;
  }, [bordered, striped, compact, hover, hasColumns]);

  const tableStyle = useMemo(() => columnRootVars(columns), [columns]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const colgroup = hasColumns ? (
    <colgroup>
      {columns.map((column, index) => (
        <col key={index} style={columnColStyle(column)} />
      ))}
    </colgroup>
  ) : null;

  if (wrap) {
    return (
      <div ref={rootRef} className={cn('table_wrap', className)} {...domRest}>
        <table className={cn(tableClass)} style={tableStyle}>
          {colgroup}
          {children}
        </table>
      </div>
    );
  }

  return (
    <table
      ref={rootRef}
      className={cn(tableClass, className)}
      style={tableStyle}
      {...domRest}
    >
      {colgroup}
      {children}
    </table>
  );
}
