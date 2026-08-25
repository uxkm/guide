import { Children, isValidElement, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const valid = { mode: new Set(['panels', 'dynamic']), variant: new Set(['line', 'card', 'pill']), size: new Set(['sm', 'md', 'lg']), layout: new Set(['auto', 'equal', 'scroll']), indicator: new Set(['static', 'slide']) };
const EMPTY_ITEMS = [];

export function Tabs({ mode = 'panels', value, defaultValue, onChange, variant = 'line', size = 'md', layout = 'auto', vertical = false, scrollable = false, ariaLabel, indicator = 'static', items = EMPTY_ITEMS, panel, extra, children, className = '', ...props }) {
  const uid = useId().replaceAll(':', '');
  const listRef = useRef(null);
  const childItems = useMemo(() => Children.toArray(children).filter(isValidElement).map((child, index) => ({ key: child.props.value ?? `tab-${index}`, label: child.props.label, active: child.props.active, disabled: child.props.disabled, icon: child.props.icon, badge: child.props.badge, content: child.props.children, menuOnly: child.type?.tabsType === 'menu' })), [children]);
  const source = useMemo(() => items.length ? items.map((item, index) => ({ ...item, key: item.key ?? item.value ?? `tab-${index}`, content: item.content })) : childItems, [childItems, items]);
  const firstKey = source.find((item) => item.active && !item.disabled)?.key ?? source.find((item) => !item.disabled)?.key;
  const [internal, setInternal] = useState(defaultValue ?? firstKey);
  const selected = value ?? internal;
  useEffect(() => { if (value == null && !source.some((item) => item.key === internal && !item.disabled)) setInternal(firstKey); }, [firstKey, internal, source, value]);
  const resolvedMode = valid.mode.has(mode) ? mode : 'panels';
  const resolvedVariant = valid.variant.has(variant) ? variant : 'line';
  const resolvedSize = valid.size.has(size) ? size : 'md';
  const resolvedLayout = valid.layout.has(layout) ? layout : 'auto';
  const resolvedIndicator = valid.indicator.has(indicator) ? indicator : 'static';
  const scrollNav = resolvedLayout === 'scroll' && !vertical;
  const classes = ['tabs', `tabs_${resolvedVariant}`, resolvedSize !== 'md' && `tabs_${resolvedSize}`, vertical && 'tabs_vertical', resolvedLayout === 'equal' && 'tabs_equal', scrollNav && 'tabs_scroll-nav', scrollable && resolvedLayout === 'auto' && 'tabs_scrollable', resolvedMode === 'dynamic' && 'tabs_dynamic', resolvedIndicator === 'slide' && 'tabs_indicator-slide', className].filter(Boolean).join(' ');
  const [indicatorStyle, setIndicatorStyle] = useState(null);
  const [scrollState, setScrollState] = useState({ overflow: false, prev: false, next: false });
  const updateVisualState = useCallback(() => {
    const list = listRef.current;
    if (list) {
    if (resolvedIndicator === 'slide') {
      const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
      if (activeTab) {
        const listRect = list.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        const left = tabRect.left - listRect.left + list.scrollLeft;
        const top = tabRect.top - listRect.top + list.scrollTop;
        const thickness = 2;
        setIndicatorStyle(vertical
          ? { width: `${thickness}px`, height: `${tabRect.height}px`, transform: `translate3d(${left + tabRect.width - thickness}px, ${top}px, 0)` }
          : resolvedVariant === 'pill'
            ? { width: `${tabRect.width}px`, height: `${tabRect.height}px`, transform: `translate3d(${left}px, ${top}px, 0)` }
            : { width: `${tabRect.width}px`, height: `${thickness}px`, transform: `translate3d(${left}px, ${top + tabRect.height - thickness}px, 0)` });
      }
    } else setIndicatorStyle(null);
    const max = list.scrollWidth - list.clientWidth;
    setScrollState({ overflow: scrollNav && max > 1, prev: scrollNav && list.scrollLeft > 1, next: scrollNav && list.scrollLeft < max - 1 });
    }
  }, [resolvedIndicator, resolvedVariant, scrollNav, vertical]);
  useEffect(() => {
    const list = listRef.current;
    if (list) {
    const schedule = () => requestAnimationFrame(updateVisualState);
    schedule();
    list.addEventListener('scroll', updateVisualState, { passive: true });
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
    observer?.observe(list);
    list.querySelectorAll('.tabs_tab').forEach((tab) => observer?.observe(tab));
    return () => { list.removeEventListener('scroll', updateVisualState); observer?.disconnect(); };
    }
  }, [source, selected, updateVisualState]);
  const scrollTabIntoView = (key) => {
    const list = listRef.current;
    const index = source.findIndex((item) => item.key === key);
    const tab = index < 0 ? null : document.getElementById(`${uid}-tab-${index}`);
    if (!scrollNav || !list || !tab) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
    const max = list.scrollWidth - list.clientWidth;
    list.scrollTo({ left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)), behavior: 'smooth' });
  };
  const select = (key) => { const target = source.find((item) => item.key === key); if (target && !target.disabled) { if (value == null) setInternal(key); onChange?.(key); requestAnimationFrame(() => { updateVisualState(); scrollTabIntoView(key); }); } };
  const keyDown = (event, index) => { const enabled = source.map((item, itemIndex) => ({ ...item, itemIndex })).filter((item) => !item.disabled); const current = enabled.findIndex((item) => item.itemIndex === index); let next = current; if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) next = (current + 1) % enabled.length; else if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) next = (current - 1 + enabled.length) % enabled.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = enabled.length - 1; else return; event.preventDefault(); select(enabled[next].key); requestAnimationFrame(() => document.getElementById(`${uid}-tab-${enabled[next].itemIndex}`)?.focus()); };
  const activeIndex = Math.max(0, source.findIndex((item) => item.key === selected));
  const activeItem = source[activeIndex];
  const panelContent = resolvedMode === 'dynamic' && typeof panel === 'function' ? panel({ item: activeItem, value: selected }) : activeItem?.content;
  const tabsList = <div ref={listRef} className="tabs_list" role="tablist" aria-label={ariaLabel} aria-orientation={vertical ? 'vertical' : 'horizontal'}>{resolvedIndicator === 'slide' && indicatorStyle && <span className="tabs_indicator" aria-hidden="true" style={indicatorStyle} />}{source.map((item, index) => { const active = item.key === selected; return <Button key={item.key} id={`${uid}-tab-${index}`} variant="text" color="default" fit ripple={false} className={['tabs_tab', active && 'is-active', item.disabled && 'is-disabled'].filter(Boolean).join(' ')} role="tab" aria-selected={active} aria-controls={`${uid}-panel-${resolvedMode === 'dynamic' ? 'dynamic' : index}`} ariaDisabled={item.disabled || false} disabled={item.disabled || false} tabIndex={active ? 0 : -1} label={item.label ?? ''} iconBefore={item.icon ? <span className="tabs_icon">{item.icon}</span> : undefined} iconAfter={item.badge ? <span className="tabs_badge">{item.badge}</span> : undefined} onClick={() => select(item.key)} onKeyDown={(event) => keyDown(event, index)} />; })}</div>;
  const scrollBy = (direction) => listRef.current?.scrollBy({ left: direction * Math.max((listRef.current?.clientWidth ?? 160) * 0.75, 120), behavior: 'smooth' });
  return <div {...props} className={classes} data-component="Tabs" data-tabs><div className="tabs_bar">{scrollState.overflow && <Button variant="outline" color="default" size="sm" iconOnly className="tabs_nav tabs_nav_prev" ariaLabel="이전 탭" disabled={!scrollState.prev} iconBefore={<Icon name="arrow-left" />} onClick={() => scrollBy(-1)} />}<div className={['tabs_list-wrap', scrollNav && 'tabs_scroll-viewport'].filter(Boolean).join(' ')}>{tabsList}</div>{scrollState.overflow && <Button variant="outline" color="default" size="sm" iconOnly className="tabs_nav tabs_nav_next" ariaLabel="다음 탭" disabled={!scrollState.next} iconBefore={<Icon name="chevron" />} onClick={() => scrollBy(1)} />}{extra && <div className="tabs_extra">{extra}</div>}</div><div className="tabs_panels">{resolvedMode === 'dynamic' ? <div id={`${uid}-panel-dynamic`} className="tabs_panel is-active" role="tabpanel" aria-labelledby={`${uid}-tab-${activeIndex}`}>{panelContent}</div> : source.map((item, index) => <div key={item.key} id={`${uid}-panel-${index}`} className={['tabs_panel', item.key === selected && 'is-active'].filter(Boolean).join(' ')} role="tabpanel" aria-labelledby={`${uid}-tab-${index}`} hidden={item.key !== selected}>{item.content}</div>)}</div></div>;
}

export default Tabs;
