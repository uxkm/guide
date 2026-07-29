export const docMeta = {
  title: 'Menu | UXKM Guide',
  activeNav: 'menu',
  pageTitle: 'Menu',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuDivider from '@uxkm/ui-react/components/MenuDivider.jsx';
import MenuGroup from '@uxkm/ui-react/components/MenuGroup.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';
import {
  menuChildColumns,
  menuChildren,
  menuClassColumns,
  menuClasses,
  menuGroupPropColumns,
  menuGroupProps,
  menuItemChildColumns,
  menuItemChildren,
  menuItemPropColumns,
  menuItemProps,
  menuPropColumns,
  menuProps,
  menuSubmenuChildColumns,
  menuSubmenuChildren,
  menuSubmenuPropColumns,
  menuSubmenuProps,
  menuTokenColumns,
  menuTokens,
} from '@/doc/data/menu-api';

const basicCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BasicExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="주요 메뉴">
      <MenuItem label="대시보드" active />
      <MenuItem label="분석" />
      <MenuItem label="사용자" />
      <MenuItem label="설정" />
    </Menu>
  );
}`;

const horizontalCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function HorizontalExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
      <MenuItem label="개요" active />
      <MenuItem label="컴포넌트" />
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}`;

const iconCode = `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function IconExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
      <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
      <MenuItem label="사용자" icon={<Icon name="user" />} />
      <MenuItem label="문서" icon={<Icon name="book" />} />
      <MenuItem label="설정" icon={<Icon name="settings" />} />
    </Menu>
  );
}`;

const submenuCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function SubmenuExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Card" />
      </MenuSubmenu>
    </Menu>
  );
}`;

const groupCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuDivider from '@uxkm/ui-react/components/MenuDivider.jsx';
import MenuGroup from '@uxkm/ui-react/components/MenuGroup.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function GroupExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="설정 메뉴">
      <MenuGroup title="계정" />
      <MenuItem label="프로필" active />
      <MenuItem label="보안" />
      <MenuDivider />
      <MenuGroup title="앱" />
      <MenuItem label="알림" />
      <MenuItem label="언어" />
      <MenuDivider />
      <MenuItem label="로그아웃" />
    </Menu>
  );
}`;

const disabledCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function DisabledExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="권한 메뉴">
      <MenuItem label="조회" active />
      <MenuItem label="편집" />
      <MenuItem label="삭제" disabled />
      <MenuItem label="관리자 설정" disabled />
    </Menu>
  );
}`;

const badgeCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function BadgeExample() {
  return (
    <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
      <MenuItem
        label="받은편지함"
        active
        extra={<span className="badge badge_count color_primary menu_extra">12</span>}
      />
    </Menu>
  );
}`;

const horizontalSubmenuCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function HorizontalSubmenuExample() {
  return (
    <Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
      <MenuItem label="홈" active />
      <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
        <MenuItem label="Button" />
        <MenuItem label="Input" />
        <MenuItem label="Select" />
      </MenuSubmenu>
      <MenuItem label="토큰" />
      <MenuItem label="접근성" />
    </Menu>
  );
}`;

const layoutCode = `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';
import MenuSubmenu from '@uxkm/ui-react/components/MenuSubmenu.jsx';

export function LayoutExample() {
  return (
    <div className="menu_demo-row">
      <div className="menu_demo-sidebar">
        <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
          <MenuItem label="개요" active icon={<Icon name="grid" />} />
          <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar">
            <MenuItem label="시작하기" />
            <MenuItem label="컴포넌트" />
          </MenuSubmenu>
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </div>
      <div className="menu_demo-content">
        <p style={{ margin: 0 }}>콘텐츠 영역</p>
      </div>
    </div>
  );
}`;

const variantCode = `import Menu from '@uxkm/ui-react/components/Menu.jsx';
import MenuItem from '@uxkm/ui-react/components/MenuItem.jsx';

export function VariantExample() {
  return (
    <>
      <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
      <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
        <MenuItem label="항목 A" active />
        <MenuItem label="항목 B" />
        <MenuItem label="항목 C" />
      </Menu>
    </>
  );
}`;

export default function MenuDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Menu</h1>
        <p className="lead">앱 내비게이션·사이드바에 사용하는 메뉴 컴포넌트입니다. 수직·수평 배치, 아이콘, 서브메뉴, 구분선·그룹을 지원합니다.</p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description={'menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current="page"로 선택 항목을 표시합니다.'}
        code={basicCode}
      >
        <Menu mode="vertical" bordered ariaLabel="주요 메뉴">
          <MenuItem label="대시보드" active />
          <MenuItem label="분석" />
          <MenuItem label="사용자" />
          <MenuItem label="설정" />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="horizontal-heading"
        title="수평"
        description="menu_horizontal로 상단 탭·툴바 형태의 메뉴를 만듭니다."
        code={horizontalCode}
      >
        <Menu mode="horizontal" bordered ariaLabel="섹션 메뉴">
          <MenuItem label="개요" active />
          <MenuItem label="컴포넌트" />
          <MenuItem label="토큰" />
          <MenuItem label="접근성" />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="icon-heading"
        title="아이콘"
        description="menu_icon으로 항목 앞에 아이콘을 배치합니다."
        code={iconCode}
      >
        <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
          <MenuItem label="대시보드" active icon={<Icon name="grid" />} />
          <MenuItem label="사용자" icon={<Icon name="user" />} />
          <MenuItem label="문서" icon={<Icon name="book" />} />
          <MenuItem label="설정" icon={<Icon name="settings" />} />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="submenu-heading"
        title="서브메뉴"
        description="menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다."
        code={submenuCode}
      >
        <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
          <MenuItem label="홈" active />
          <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components">
            <MenuItem label="Button" />
            <MenuItem label="Input" />
            <MenuItem label="Card" />
          </MenuSubmenu>
          <MenuSubmenu label="패턴" expanded={false} submenuId="menu-sub-patterns">
            <MenuItem label="폼 레이아웃" />
            <MenuItem label="데이터 테이블" />
          </MenuSubmenu>
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="group-heading"
        title="구분선 · 그룹"
        description="menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다."
        code={groupCode}
      >
        <Menu mode="vertical" bordered ariaLabel="설정 메뉴">
          <MenuGroup title="계정" />
          <MenuItem label="프로필" active />
          <MenuItem label="보안" />
          <MenuDivider />
          <MenuGroup title="앱" />
          <MenuItem label="알림" />
          <MenuItem label="언어" />
          <MenuDivider />
          <MenuItem label="로그아웃" />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="disabled-heading"
        title="비활성"
        description="menu_item.is-disabled 또는 menu_link.is-disabled로 선택·클릭을 막습니다."
        code={disabledCode}
      >
        <Menu mode="vertical" bordered ariaLabel="권한 메뉴">
          <MenuItem label="조회" active />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="badge-heading"
        title="배지"
        description="menu_extra에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다."
        code={badgeCode}
      >
        <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
          <MenuItem
            label="받은편지함"
            active
            extra={<span className="badge badge_count color_primary menu_extra">12</span>}
          />
          <MenuItem
            label="알림"
            extra={<span className="badge_dot-only color_danger menu_extra" role="status" aria-label="새 알림" />}
          />
          <MenuItem
            label="메시지"
            extra={<span className="badge color_default menu_extra">Beta</span>}
          />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="horizontal-submenu-heading"
        title="수평 · 서브메뉴"
        description="menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다."
        code={horizontalSubmenuCode}
      >
        <Menu mode="horizontal" bordered ariaLabel="상단 메뉴">
          <MenuItem label="홈" active />
          <MenuSubmenu label="컴포넌트" expanded={false} submenuId="menu-sub-h-components">
            <MenuItem label="Button" />
            <MenuItem label="Input" />
            <MenuItem label="Select" />
          </MenuSubmenu>
          <MenuItem label="토큰" />
          <MenuItem label="접근성" />
        </Menu>
      </DemoSection>

      <DemoSection
        headingId="layout-heading"
        title="사이드바 레이아웃"
        description="수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다."
        code={layoutCode}
      >
        <div className="menu_demo-row">
          <div className="menu_demo-sidebar">
            <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
              <MenuItem label="개요" active icon={<Icon name="grid" />} />
              <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar">
                <MenuItem label="시작하기" />
                <MenuItem label="컴포넌트" />
              </MenuSubmenu>
              <MenuItem label="설정" icon={<Icon name="settings" />} />
            </Menu>
          </div>
          <div className="menu_demo-content">
            <p style={{ margin: 0 }}>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        headingId="variant-heading"
        title="변형"
        description="menu_compact · menu_dark로 밀도와 배경을 조절합니다."
        code={variantCode}
        stack
      >
        <Menu mode="vertical" bordered compact ariaLabel="컴팩트 메뉴">
          <MenuItem label="항목 A" active />
          <MenuItem label="항목 B" />
          <MenuItem label="항목 C" />
        </Menu>
        <Menu mode="vertical" bordered dark ariaLabel="다크 서피스 메뉴">
          <MenuItem label="항목 A" active />
          <MenuItem label="항목 B" />
          <MenuItem label="항목 C" />
        </Menu>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Menu Props">
        <ApiTable columns={menuPropColumns} rows={menuProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-props-heading" title="API · MenuItem Props">
        <ApiTable columns={menuItemPropColumns} rows={menuItemProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-submenu-props-heading" title="API · MenuSubmenu Props">
        <ApiTable columns={menuSubmenuPropColumns} rows={menuSubmenuProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-group-props-heading" title="API · MenuGroup Props">
        <ApiTable columns={menuGroupPropColumns} rows={menuGroupProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Menu Children">
        <ApiTable columns={menuChildColumns} rows={menuChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-children-heading" title="API · MenuItem Children">
        <ApiTable columns={menuItemChildColumns} rows={menuItemChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-submenu-children-heading" title="API · MenuSubmenu Children">
        <ApiTable columns={menuSubmenuChildColumns} rows={menuSubmenuChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={menuClassColumns} rows={menuClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={menuTokenColumns} rows={menuTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
