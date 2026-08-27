/**
 * Tabs 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

// 모드·변형·크기·레이아웃·인디케이터가 지원하는 값만 CSS 클래스로 전달합니다.
const valid = {
  mode: new Set(['panels', 'dynamic']), // 패널 고정·동적 콘텐츠 모드입니다.
  variant: new Set(['line', 'card', 'pill']), // 탭 시각 스타일입니다.
  size: new Set(['sm', 'md', 'lg']), // 탭 크기입니다.
  layout: new Set(['auto', 'equal', 'scroll']), // 탭 목록 배치 방식입니다.
  indicator: new Set(['static', 'slide']), // 활성 표시줄 동작입니다.
};
const EMPTY_ITEMS = []; // items 기본값으로 공유하는 빈 배열입니다.

export function Tabs({
  mode = 'panels', // 패널 고정 또는 동적 콘텐츠 모드를 선택합니다.
  value, // 제어형으로 현재 선택된 탭 키입니다.
  defaultValue, // 비제어형 초기 선택 탭 키입니다.
  onChange, // 선택 탭이 바뀔 때 호출할 콜백입니다.
  variant = 'line', // 탭의 시각 스타일을 지정합니다.
  size = 'md', // 탭의 크기를 지정합니다.
  layout = 'auto', // 탭 목록의 너비·스크롤 배치를 지정합니다.
  vertical = false, // 세로 방향 탭 목록인지 여부입니다.
  scrollable = false, // auto 레이아웃에서 가로 스크롤을 허용할지 여부입니다.
  ariaLabel, // 탭 목록의 접근 가능한 이름을 지정합니다.
  indicator = 'static', // 활성 표시줄의 정적·슬라이드 동작을 선택합니다.
  items = EMPTY_ITEMS, // 선언형으로 전달할 탭 항목 배열입니다.
  panel, // dynamic 모드에서 활성 탭 콘텐츠를 계산하는 렌더 함수입니다.
  extra, // 탭 바 오른쪽에 배치할 보조 콘텐츠입니다.
  children, // TabsTab/TabPanel 등 자식으로 구성한 탭입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트에 전달합니다.
}) {
  const uid = useId().replaceAll(':', ''); // aria id 연결에 쓰는 안전한 접두사입니다.
  const listRef = useRef(null); // 탭 목록 DOM을 가리키는 참조입니다.

  // children에서 탭 메타데이터와 패널 콘텐츠를 추출합니다.
  const childItems = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .map((child, index) => ({
          key: child.props.value ?? `tab-${index}`,
          label: child.props.label,
          active: child.props.active,
          disabled: child.props.disabled,
          icon: child.props.icon,
          badge: child.props.badge,
          content: child.props.children,
          menuOnly: child.type?.tabsType === 'menu',
        })),
    [children],
  );

  // items 배열이 있으면 우선하고, 없으면 children 기반 목록을 사용합니다.
  const source = useMemo(
    () =>
      items.length
        ? items.map((item, index) => ({
            ...item,
            key: item.key ?? item.value ?? `tab-${index}`,
            content: item.content,
          }))
        : childItems,
    [childItems, items],
  );

  // 활성 표시된 항목을 우선하고, 없으면 첫 활성 가능 항목을 고릅니다.
  const firstKey =
    source.find((item) => item.active && !item.disabled)?.key ??
    source.find((item) => !item.disabled)?.key;
  const [internal, setInternal] = useState(defaultValue ?? firstKey); // 비제어형 선택 상태입니다.
  const selected = value ?? internal; // 제어·비제어를 합친 최종 선택 키입니다.

  // 비제어형에서 현재 선택이 목록에서 사라지면 기본 키로 되돌립니다.
  useEffect(() => {
    if (value == null && !source.some((item) => item.key === internal && !item.disabled))
      setInternal(firstKey);
  }, [firstKey, internal, source, value]);

  const resolvedMode = valid.mode.has(mode) ? mode : 'panels'; // 검증된 모드입니다.
  const resolvedVariant = valid.variant.has(variant) ? variant : 'line'; // 검증된 시각 스타일입니다.
  const resolvedSize = valid.size.has(size) ? size : 'md'; // 검증된 크기입니다.
  const resolvedLayout = valid.layout.has(layout) ? layout : 'auto'; // 검증된 레이아웃입니다.
  const resolvedIndicator = valid.indicator.has(indicator) ? indicator : 'static'; // 검증된 인디케이터입니다.
  const scrollNav = resolvedLayout === 'scroll' && !vertical; // 가로 스크롤 내비게이션 사용 여부입니다.

  // 변형·크기·방향·스크롤·모드·인디케이터 클래스를 조합합니다.
  const classes = [
    'tabs', // Tabs 레이아웃을 활성화하는 필수 클래스입니다.
    `tabs_${resolvedVariant}`, // line·card·pill 시각 변형입니다.
    resolvedSize !== 'md' && `tabs_${resolvedSize}`, // 기본 md가 아닐 때 크기 변형입니다.
    vertical && 'tabs_vertical', // 세로 방향 변형입니다.
    resolvedLayout === 'equal' && 'tabs_equal', // 동일 너비 탭 변형입니다.
    scrollNav && 'tabs_scroll-nav', // 스크롤 내비게이션 변형입니다.
    scrollable && resolvedLayout === 'auto' && 'tabs_scrollable', // auto에서 가로 스크롤 허용입니다.
    resolvedMode === 'dynamic' && 'tabs_dynamic', // 동적 패널 모드 변형입니다.
    resolvedIndicator === 'slide' && 'tabs_indicator-slide', // 슬라이드 인디케이터 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  const [indicatorStyle, setIndicatorStyle] = useState(null); // 슬라이드 인디케이터의 위치·크기입니다.
  const [scrollState, setScrollState] = useState({ overflow: false, prev: false, next: false }); // 스크롤 버튼 상태입니다.

  // 활성 탭 위치와 스크롤 가능 여부를 측정해 시각 상태를 갱신합니다.
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
          setIndicatorStyle(
            vertical
              ? {
                  width: `${thickness}px`,
                  height: `${tabRect.height}px`,
                  transform: `translate3d(${left + tabRect.width - thickness}px, ${top}px, 0)`,
                }
              : resolvedVariant === 'pill'
                ? {
                    width: `${tabRect.width}px`,
                    height: `${tabRect.height}px`,
                    transform: `translate3d(${left}px, ${top}px, 0)`,
                  }
                : {
                    width: `${tabRect.width}px`,
                    height: `${thickness}px`,
                    transform: `translate3d(${left}px, ${top + tabRect.height - thickness}px, 0)`,
                  },
          );
        }
      } else setIndicatorStyle(null);
      const max = list.scrollWidth - list.clientWidth;
      setScrollState({
        overflow: scrollNav && max > 1,
        prev: scrollNav && list.scrollLeft > 1,
        next: scrollNav && list.scrollLeft < max - 1,
      });
    }
  }, [resolvedIndicator, resolvedVariant, scrollNav, vertical]);

  // 선택·크기 변화 시 인디케이터와 스크롤 상태를 다시 계산합니다.
  useEffect(() => {
    const list = listRef.current;
    if (list) {
      const schedule = () => requestAnimationFrame(updateVisualState);
      schedule();
      list.addEventListener('scroll', updateVisualState, { passive: true });
      const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
      observer?.observe(list);
      list.querySelectorAll('.tabs_tab').forEach((tab) => observer?.observe(tab));
      return () => {
        list.removeEventListener('scroll', updateVisualState);
        observer?.disconnect();
      };
    }
  }, [source, selected, updateVisualState]);

  // 선택된 탭이 스크롤 뷰포트 중앙 근처에 오도록 이동합니다.
  const scrollTabIntoView = (key) => {
    const list = listRef.current;
    const index = source.findIndex((item) => item.key === key);
    const tab = index < 0 ? null : document.getElementById(`${uid}-tab-${index}`);
    if (!scrollNav || !list || !tab) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
    const max = list.scrollWidth - list.clientWidth;
    list.scrollTo({
      left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)),
      behavior: 'smooth',
    });
  };

  // 비활성 탭이 아니면 선택 상태를 갱신하고 시각·스크롤을 맞춥니다.
  const select = (key) => {
    const target = source.find((item) => item.key === key);
    if (target && !target.disabled) {
      if (value == null) setInternal(key);
      onChange?.(key);
      requestAnimationFrame(() => {
        updateVisualState();
        scrollTabIntoView(key);
      });
    }
  };

  // 방향키·Home·End로 활성 가능 탭 사이를 이동합니다.
  const keyDown = (event, index) => {
    const enabled = source
      .map((item, itemIndex) => ({ ...item, itemIndex }))
      .filter((item) => !item.disabled);
    const current = enabled.findIndex((item) => item.itemIndex === index);
    let next = current;
    if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight'))
      next = (current + 1) % enabled.length;
    else if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft'))
      next = (current - 1 + enabled.length) % enabled.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = enabled.length - 1;
    else return;
    event.preventDefault();
    select(enabled[next].key);
    requestAnimationFrame(() =>
      document.getElementById(`${uid}-tab-${enabled[next].itemIndex}`)?.focus(),
    );
  };

  const activeIndex = Math.max(
    0,
    source.findIndex((item) => item.key === selected),
  ); // 현재 선택 탭의 인덱스입니다.
  const activeItem = source[activeIndex]; // 현재 선택 탭 데이터입니다.
  // dynamic 모드면 panel 함수 결과를, 아니면 항목 content를 사용합니다.
  const panelContent =
    resolvedMode === 'dynamic' && typeof panel === 'function'
      ? panel({ item: activeItem, value: selected })
      : activeItem?.content;

  const tabsList = (
    <div
      ref={listRef}
      className="tabs_list"
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
    >
      {resolvedIndicator === 'slide' && indicatorStyle && (
        <span className="tabs_indicator" aria-hidden="true" style={indicatorStyle} />
      )}
      {source.map((item, index) => {
        const active = item.key === selected;
        return (
          <Button
            key={item.key}
            id={`${uid}-tab-${index}`}
            variant="text"
            color="default"
            fit
            ripple={false}
            className={['tabs_tab', active && 'is-active', item.disabled && 'is-disabled']
              .filter(Boolean)
              .join(' ')}
            role="tab"
            aria-selected={active}
            aria-controls={`${uid}-panel-${resolvedMode === 'dynamic' ? 'dynamic' : index}`}
            ariaDisabled={item.disabled || false}
            disabled={item.disabled || false}
            tabIndex={active ? 0 : -1}
            label={item.label ?? ''}
            iconBefore={item.icon ? <span className="tabs_icon">{item.icon}</span> : undefined}
            iconAfter={item.badge ? <span className="tabs_badge">{item.badge}</span> : undefined}
            onClick={() => select(item.key)}
            onKeyDown={(event) => keyDown(event, index)}
          />
        );
      })}
    </div>
  );

  // 스크롤 내비게이션 버튼을 눌러 목록을 좌우로 이동시킵니다.
  const scrollBy = (direction) =>
    listRef.current?.scrollBy({
      left: direction * Math.max((listRef.current?.clientWidth ?? 160) * 0.75, 120),
      behavior: 'smooth',
    });

  return (
    <div {...props} className={classes} data-component="Tabs" data-tabs>
      <div className="tabs_bar">
        {scrollState.overflow && (
          <Button
            variant="outline"
            color="default"
            size="sm"
            iconOnly
            className="tabs_nav tabs_nav_prev"
            ariaLabel="이전 탭"
            disabled={!scrollState.prev}
            iconBefore={<Icon name="arrow-left" />}
            onClick={() => scrollBy(-1)}
          />
        )}
        <div
          className={['tabs_list-wrap', scrollNav && 'tabs_scroll-viewport']
            .filter(Boolean)
            .join(' ')}
        >
          {tabsList}
        </div>
        {scrollState.overflow && (
          <Button
            variant="outline"
            color="default"
            size="sm"
            iconOnly
            className="tabs_nav tabs_nav_next"
            ariaLabel="다음 탭"
            disabled={!scrollState.next}
            iconBefore={<Icon name="chevron" />}
            onClick={() => scrollBy(1)}
          />
        )}
        {extra && <div className="tabs_extra">{extra}</div>}
      </div>
      <div className="tabs_panels">
        {resolvedMode === 'dynamic' ? (
          <div
            id={`${uid}-panel-dynamic`}
            className="tabs_panel is-active"
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${activeIndex}`}
          >
            {panelContent}
          </div>
        ) : (
          source.map((item, index) => (
            <div
              key={item.key}
              id={`${uid}-panel-${index}`}
              className={['tabs_panel', item.key === selected && 'is-active']
                .filter(Boolean)
                .join(' ')}
              role="tabpanel"
              aria-labelledby={`${uid}-tab-${index}`}
              hidden={item.key !== selected}
            >
              {item.content}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tabs;
