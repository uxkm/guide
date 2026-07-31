'use client';

import { useMemo, useRef } from 'react';
import { useTableDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { columnColStyle, columnRootVars } from '@/utils/table-column-sizing';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_STICKY_COLS = new Set([1, 2, 3, 4]);

export default function Table({
  bordered,
  striped,
  compact,
  hover,
  wrap = true,
  scroll,
  scrollMaxHeight,
  stickyTop,
  stickyLeft,
  stickyCols = 1,
  stickyLeftOffsets = {},
  columns = [],
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const hasColumns = Array.isArray(columns) && columns.length > 0;
  const resolvedStickyCols = VALID_STICKY_COLS.has(stickyCols) ? stickyCols : 1;

  useTableDemoCode(
    {
      bordered,
      striped,
      compact,
      hover,
      wrap,
      scroll,
      scrollMaxHeight,
      stickyTop,
      stickyLeft,
      stickyCols: resolvedStickyCols,
      stickyLeftOffsets,
      columns,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, ...rest },
  );

  const tableClass = useMemo(() => {
    const classes = ['table'];
    if (bordered) classes.push('table_bordered');
    if (striped) classes.push('table_striped');
    if (compact) classes.push('table_compact');
    if (hover) classes.push('table_hover');
    if (hasColumns) classes.push('table_columns');
    if (stickyTop) classes.push('table_sticky-top');
    if (stickyLeft) {
      classes.push('table_sticky-left');
      classes.push(`table_sticky-cols-${resolvedStickyCols}`);
    }
    return classes;
  }, [bordered, striped, compact, hover, hasColumns, stickyTop, stickyLeft, resolvedStickyCols]);

  const stickyOffsetStyle = useMemo(() => {
    const next = {};
    Object.entries(stickyLeftOffsets || {}).forEach(([key, value]) => {
      if (value == null || value === '') return;
      next[`--table-sticky-left-${key}`] = value;
    });
    return next;
  }, [stickyLeftOffsets]);

  const tableStyle = useMemo(
    () => ({
      ...columnRootVars(columns),
      ...stickyOffsetStyle,
    }),
    [columns, stickyOffsetStyle],
  );

  const wrapStyle = useMemo(() => {
    const next = {};
    if (scrollMaxHeight != null && scrollMaxHeight !== '') {
      next['--table-scroll-max-height'] = scrollMaxHeight;
    }
    if (style && typeof style === 'object' && !Array.isArray(style)) {
      Object.assign(next, style);
    }
    return Object.keys(next).length ? next : undefined;
  }, [scrollMaxHeight, style]);

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
      <div
        ref={rootRef}
        className={cn('table_wrap', scroll && 'table_wrap-scroll', className)}
        style={wrapStyle}
        {...domRest}
      >
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
      style={{ ...tableStyle, ...wrapStyle }}
      {...domRest}
    >
      {colgroup}
      {children}
    </table>
  );
}
