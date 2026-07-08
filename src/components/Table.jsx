import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { columnColStyle, columnRootVars } from '@/utils/table-column-sizing';
import { createDemoSlots, useTableDemoCode } from '@/hooks/useDemoCode';

export default function Table({
  bordered = false,
  striped = false,
  compact = false,
  hover = false,
  wrap = true,
  columns = [],
  children,
  className,
  ...rest
}) {
  const props = { bordered, striped, compact, hover, wrap, columns };
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useTableDemoCode(props, demoSlots, rootRef, { class: className, ...rest });

  const hasColumns = columns.length > 0;

  const tableClass = cn(
    'table',
    bordered && 'table_bordered',
    striped && 'table_striped',
    compact && 'table_compact',
    hover && 'table_hover',
    hasColumns && 'table_columns',
  );

  const tableStyle = columnRootVars(columns);
  const wrapClass = cn('table_wrap', className);

  const colgroup = hasColumns && (
    <colgroup>
      {columns.map((column, index) => (
        <col key={index} style={columnColStyle(column)} />
      ))}
    </colgroup>
  );

  const tableEl = (
    <table className={tableClass} style={tableStyle}>
      {colgroup}
      {children}
    </table>
  );

  if (wrap) {
    return (
      <div ref={rootRef} className={wrapClass}>
        {tableEl}
      </div>
    );
  }

  return (
    <table
      ref={rootRef}
      className={cn(tableClass, className)}
      style={tableStyle}
      {...rest}
    >
      {colgroup}
      {children}
    </table>
  );
}
