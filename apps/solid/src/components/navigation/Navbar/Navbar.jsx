import { createSignal, createUniqueId } from 'solid-js';
/**
 * Navbar 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 Navbar 크기입니다.

export function Navbar({
  brand, // 브랜드 영역에 표시할 기본 텍스트입니다.
  brandSrc, // 브랜드 로고 이미지 URL입니다.
  brandAlt, // brandSrc 이미지의 대체 텍스트입니다.
  brandBackground, // CSS background-image로 표시할 브랜드 이미지 URL입니다.
  ariaLabel, // 헤더의 접근 가능한 이름을 지정합니다.
  size = 'md', // Navbar의 세로 크기를 지정합니다.
  borderless = false, // 하단 테두리를 제거할지 여부입니다.
  dark = false, // 어두운 배경 테마를 적용할지 여부입니다.
  sticky = false, // 스크롤 시 상단에 고정할지 여부입니다.
  responsive = false, // 좁은 화면에서 접힘 토글을 사용할지 여부입니다.
  collapseId, // 접힘 영역의 DOM id를 직접 지정합니다.
  brandContent, // 브랜드 영역을 완전히 대체할 사용자 정의 콘텐츠입니다.
  brandIcon, // 브랜드 텍스트 앞에 표시할 아이콘입니다.
  items, // 네비게이션 목록으로 렌더할 미리 구성한 항목입니다.
  search, // 접힘 영역 안에 배치할 검색 UI입니다.
  actions, // 접힘 영역 안에 배치할 액션 버튼 영역입니다.
  children, // NavbarList/NavbarItem 등 자식 네비게이션 항목입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, role 등 나머지 속성을 헤더 요소에 전달합니다.
}) {
  // React id의 콜론을 제거해 CSS/aria 연결용 안전한 식별자를 만듭니다.
  const reactId = createUniqueId().replaceAll(':', '');
  const targetId = collapseId || `navbar-collapse-${reactId}`; // 접힘 영역의 최종 id입니다.
  const [open, setOpen] = createSignal(false); // 반응형 메뉴의 열림 상태입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기 값입니다.

  // 크기, 테마, 고정, 열림 상태 클래스를 조합합니다.
  const classes = [
    'navbar', // Navbar 레이아웃을 활성화하는 필수 클래스입니다.
    resolvedSize !== 'md' && `navbar_${resolvedSize}`, // 기본 md가 아닐 때 크기 변형입니다.
    borderless && 'navbar_borderless', // 테두리 없는 변형입니다.
    dark && 'navbar_dark', // 어두운 테마 변형입니다.
    sticky && 'navbar_sticky', // 상단 고정 변형입니다.
    open() && 'is-open()', // 반응형 메뉴가 열린 상태입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // items가 있으면 우선하고, 없으면 children을 목록으로 감쌉니다.
  const navItems = items ?? (children ? <ul class="navbar_list">{children}</ul> : null);
  const brandLabel = typeof brand === 'string' ? brand : '';
  // ariaLabel, brandAlt, brand 문자열, 기본값을 순서로 접근 가능한 이름을 결정합니다.
  const accessibleName = ariaLabel || brandAlt || brandLabel || '사이트';
  const brandLinkClass = ['navbar_brand', brandBackground && 'navbar_brand-bg'].filter(Boolean).join(' ');
  const brandLinkStyle = brandBackground
    ? { '--navbar-brand-bg-image': `url("${brandBackground}")` }
    : undefined;
  const brandLinkAriaLabel = brandBackground && !brandLabel ? accessibleName : undefined;

  const defaultBrand = brandBackground ? (
    brandLabel ? <span class="navbar_brand-sr">{brandLabel}</span> : null
  ) : (
    <>
      {brandSrc ? (
        <img class="navbar_brand-image" src={brandSrc} alt={brandAlt ?? brandLabel} />
      ) : (
        brandIcon
      )}
      {brandSrc ? (brandLabel ? <span class="navbar_brand-text">{brandLabel}</span> : null) : brand}
    </>
  );

  return (
    <header
      {...props}
      class={classes}
      aria-label={props.role === 'presentation' ? undefined : accessibleName}
      data-component="Navbar"
      data-navbar={responsive || undefined}
    >
      <div class="navbar_container">
        <a
          href="#"
          class={brandLinkClass}
          style={brandLinkStyle}
          aria-label={brandLinkAriaLabel}
          onClick={(event) => event.preventDefault()}
        >
          {brandContent ?? defaultBrand}
        </a>
        {responsive && (
          <Button
            variant="ghost"
            iconOnly
            class="navbar_toggle"
            ariaLabel={open() ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open()}
            aria-controls={targetId}
            onClick={() => setOpen((value) => !value)}
            iconBefore={
              <>
                <Icon name="menu" size="sm" class="navbar_toggle-icon-open()" />
                <Icon name="close" size="sm" class="navbar_toggle-icon-close" />
              </>
            }
          />
        )}
        <div class="navbar_collapse" id={targetId}>
          <nav class="navbar_nav" aria-label={`${accessibleName} 주요 메뉴`}>
            {navItems}
          </nav>
          {search && <div class="navbar_search">{search}</div>}
          {actions && <div class="navbar_actions">{actions}</div>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
