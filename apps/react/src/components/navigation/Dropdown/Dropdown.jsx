/**
 * Dropdown 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 *
 * @param {boolean} [open] 제어형으로 메뉴 열림 상태입니다.
 * @param {boolean} [defaultOpen=false] 비제어형 초기 열림 상태입니다.
 * @param {boolean} [disabled=false] 트리거와 메뉴 상호작용을 막을지 여부입니다.
 * @param {'start'|'end'|'top'} [placement='start'] 메뉴가 트리거 기준으로 열리는 위치입니다.
 * @param {boolean} [fit=false] 메뉴 너비를 트리거에 맞출지 여부입니다.
 * @param {number} [maxVisibleItems] 스크롤 전에 보일 최대 항목 수입니다.
 * @param {number} [menuWidth] 메뉴의 고정 너비입니다. 숫자는 rem입니다.
 * @param {number} [menuMinWidth] 메뉴의 최소 너비입니다. 숫자는 rem입니다.
 * @param {import('react').ReactNode} [triggerContent] 기본 버튼 대신 사용할 사용자 정의 트리거입니다.
 * @param {string} [triggerLabel='메뉴'] 기본 트리거 버튼에 표시할 텍스트입니다.
 * @param {import('react').ReactNode} [children] 메뉴 안에 배치할 Menu 등 콘텐츠입니다.
 * @param {boolean} [closeOnSelect=true] 항목 선택 후 메뉴를 닫을지 여부입니다.
 * @param {(open: boolean) => void} [onOpenChange] 열림 상태가 바뀔 때 호출할 콜백입니다.
 * @param {(value: string, event: Event) => void} [onSelect] 메뉴 항목이 선택될 때 호출할 콜백입니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useRef, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = ['start', 'end', 'top']; // 지원하는 메뉴 배치입니다.
const cssSize = (value) => (typeof value === 'number' ? `${value}rem` : value); // 숫자면 rem 단위로 변환합니다.

export function Dropdown({
  open, // 제어형으로 메뉴 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  disabled = false, // 트리거와 메뉴 상호작용을 막을지 여부입니다.
  placement = 'start', // 메뉴가 트리거 기준으로 열리는 위치를 지정합니다.
  fit = false, // 메뉴 너비를 트리거에 맞출지 여부입니다.
  maxVisibleItems, // 스크롤 전에 보일 최대 항목 수입니다.
  menuWidth, // 메뉴의 고정 너비입니다.
  menuMinWidth, // 메뉴의 최소 너비입니다.
  triggerContent, // 기본 버튼 대신 사용할 사용자 정의 트리거입니다.
  triggerLabel = '메뉴', // 기본 트리거 버튼에 표시할 텍스트입니다.
  children, // 메뉴 안에 배치할 Menu 등 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeOnSelect = true, // 항목 선택 후 메뉴를 닫을지 여부입니다.
  onOpenChange, // 열림 상태가 바뀔 때 호출할 콜백입니다.
  onSelect, // 메뉴 항목이 선택될 때 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useRef(null); // 바깥 클릭 판별용 루트 참조입니다.
  const id = `dropdown-menu-${useId().replaceAll(':', '')}`; // 메뉴와 트리거를 연결하는 id입니다.
  const [internal, setInternal] = useState(defaultOpen); // 비제어형 열림 상태입니다.
  const controlled = open !== undefined; // 제어형 사용 여부입니다.
  const visible = controlled ? open : internal; // 최종 표시 상태입니다.
  const resolvedPlacement = placements.includes(placement) ? placement : 'start'; // 검증된 배치입니다.

  // 비활성 상태면 무시하고, 비제어형이면 내부 상태를 갱신한 뒤 콜백을 호출합니다.
  const setOpen = (next) => {
    if (disabled) return;
    if (!controlled) setInternal(next);
    onOpenChange?.(next);
  };

  // 활성 메뉴 항목 중 지정 위치로 포커스를 이동합니다.
  const focusItem = (position = 0) =>
    requestAnimationFrame(() => {
      const items = [
        ...(rootRef.current?.querySelectorAll(
          '.dropdown_menu .menu_link:not(.is-disabled):not([aria-disabled="true"])',
        ) ?? []),
      ];
      items.at(position)?.focus();
    });

  // 메뉴가 열린 동안 바깥 클릭과 Escape로 닫습니다.
  useEffect(() => {
    if (!visible) return undefined;
    const outside = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        rootRef.current?.querySelector('.dropdown_trigger')?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [visible]);

  // 사용자 트리거와 기본 버튼이 공유하는 열림·키보드 props입니다.
  const triggerProps = {
    className: ['dropdown_trigger', triggerContent?.props?.className].filter(Boolean).join(' '),
    haspopup: triggerContent?.props?.haspopup ?? 'menu',
    expanded: visible,
    'aria-controls': id,
    disabled: disabled || triggerContent?.props?.disabled,
    onClick: (event) => {
      triggerContent?.props?.onClick?.(event);
      setOpen(!visible);
    },
    onKeyDown: (event) => {
      triggerContent?.props?.onKeyDown?.(event);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (!visible) setOpen(true);
        focusItem(0);
      }
    },
  };

  // 유효한 트리거 요소면 복제하고, 없으면 기본 outline 버튼을 사용합니다.
  const trigger = isValidElement(triggerContent) ? (
    cloneElement(triggerContent, triggerProps)
  ) : (
    <Button
      {...triggerProps}
      variant="outline"
      label={triggerLabel}
      iconAfter={<Icon name="chevron-down" />}
    />
  );

  // 보이는 항목 수와 너비 관련 CSS 변수를 메뉴에 전달합니다.
  const menuStyle = {
    ...(maxVisibleItems != null ? { '--dropdown-max-visible-items': maxVisibleItems } : {}),
    ...(menuWidth != null ? { width: cssSize(menuWidth) } : {}),
    ...(menuMinWidth != null ? { minWidth: cssSize(menuMinWidth) } : {}),
  };

  // 화살표·Home·End·Tab으로 메뉴 항목 포커스를 이동하거나 닫습니다.
  const menuKeyDown = (event) => {
    const items = [
      ...event.currentTarget.querySelectorAll(
        '.menu_link:not(.is-disabled):not([aria-disabled="true"])',
      ),
    ];
    const current = items.indexOf(document.activeElement);
    let next = current;
    if (event.key === 'ArrowDown') next = (current + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (current - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else if (event.key === 'Tab') {
      setOpen(false);
      return;
    } else return;
    event.preventDefault();
    items[next]?.focus();
  };

  // 활성 메뉴 링크 클릭 시 선택 콜백을 호출하고 필요하면 닫습니다.
  const menuClick = (event) => {
    const item = event.target.closest('.menu_link');
    if (
      !item ||
      item.classList.contains('is-disabled') ||
      item.getAttribute('aria-disabled') === 'true'
    )
      return;
    onSelect?.(item.dataset.value ?? item.textContent?.trim(), event);
    if (closeOnSelect) {
      setOpen(false);
      requestAnimationFrame(() => rootRef.current?.querySelector('.dropdown_trigger')?.focus());
    }
  };

  return (
    <div
      {...props}
      ref={rootRef}
      className={[
        'dropdown', // Dropdown 루트를 활성화하는 필수 클래스입니다.
        visible && 'is-open', // 메뉴가 열린 상태입니다.
        disabled && 'is-disabled', // 비활성 상태입니다.
        resolvedPlacement === 'end' && 'dropdown_placement-end', // 끝쪽 배치 변형입니다.
        resolvedPlacement === 'top' && 'dropdown_placement-top', // 위쪽 배치 변형입니다.
        fit && 'dropdown_fit', // 트리거 너비에 맞추는 변형입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' ')}
      data-component="Dropdown"
      data-dropdown
    >
      {trigger}
      <div
        id={id}
        className={['dropdown_menu', maxVisibleItems != null && 'dropdown_menu-scrollable']
          .filter(Boolean)
          .join(' ')}
        style={menuStyle}
        aria-hidden={!visible}
        onClick={menuClick}
        onKeyDown={menuKeyDown}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
