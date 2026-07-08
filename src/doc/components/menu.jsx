export const docMeta = {
  title: 'Menu | HTML Components',
  activeNav: 'menu',
  pageTitle: 'Menu',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Badge from '@/components/Badge.jsx';
import Menu from '@/components/Menu.jsx';
import MenuDivider from '@/components/MenuDivider.jsx';
import MenuGroup from '@/components/MenuGroup.jsx';
import MenuItem from '@/components/MenuItem.jsx';
import MenuSubmenu from '@/components/MenuSubmenu.jsx';
import DocIcon from '@/components/icons/DocIcon.jsx';
import {
  menuClassColumns,
  menuClasses,
  menuGroupPropColumns,
  menuGroupProps,
  menuItemPropColumns,
  menuItemProps,
  menuItemSlotColumns,
  menuItemSlots,
  menuPropColumns,
  menuProps,
  menuSlotColumns,
  menuSlots,
  menuSubmenuPropColumns,
  menuSubmenuProps,
  menuSubmenuSlotColumns,
  menuSubmenuSlots,
  menuTokenColumns,
  menuTokens,
} from '@/doc/data/menu-api';

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
          description="menu_vertical · menu_bordered로 세로 메뉴를 구성합니다. is-active와 aria-current=&quot;page&quot;로 선택 항목을 표시합니다."
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
        >
          <Menu mode="vertical" bordered ariaLabel="앱 메뉴">
            <MenuItem label="대시보드" active icon={(
              <>
              <DocIcon name="grid" />
              </>
            )} />
            <MenuItem label="사용자" icon={(
              <>
              <DocIcon name="user" />
              </>
            )} />
            <MenuItem label="문서" icon={(
              <>
              <DocIcon name="book" />
              </>
            )} />
            <MenuItem label="설정" icon={(
              <>
              <DocIcon name="settings" />
              </>
            )} />
          </Menu>
        </DemoSection>

        <DemoSection
          headingId="submenu-heading"
          title="서브메뉴"
          description="menu_item-submenu · menu_submenu로 중첩 메뉴를 구성합니다. 버튼.menu_link의 aria-expanded로 펼침·접힘을 제어합니다."
        >
          <Menu mode="vertical" bordered ariaLabel="컴포넌트 메뉴">
            <MenuItem label="홈" active icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
              </>
            )} />
            <MenuSubmenu label="컴포넌트" expanded submenuId="menu-sub-components" icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                        </svg>
              </>
            )}>
      <MenuItem label="Button" />
              <MenuItem label="Input" />
              <MenuItem label="Card" />
      </MenuSubmenu>
            <MenuSubmenu label="패턴" expanded={false} submenuId="menu-sub-patterns" icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                        </svg>
              </>
            )}>
      <MenuItem label="폼 레이아웃" />
              <MenuItem label="데이터 테이블" />
      </MenuSubmenu>
          </Menu>
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="구분선 · 그룹"
          description="menu_divider로 항목을 구분하고, menu_group-title로 섹션 제목을 표시합니다."
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
        >
          <Menu mode="vertical" bordered ariaLabel="알림 메뉴">
            <MenuItem label="받은편지함" active icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
              </>
            )} extra={(
              <>
              <Badge className="menu_extra" count color="primary">12</Badge>
              </>
            )} />
            <MenuItem label="알림" icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
                        </svg>
              </>
            )} extra={(
              <>
              <Badge className="menu_extra" dotOnly color="danger" ariaLabel="새 알림" />
              </>
            )} />
            <MenuItem label="메시지" icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
              </>
            )} extra={(
              <>
              <Badge className="menu_extra" color="default">Beta</Badge>
              </>
            )} />
          </Menu>
        </DemoSection>

        <DemoSection
          headingId="horizontal-submenu-heading"
          title="수평 · 서브메뉴"
          description="menu_horizontal에서 서브메뉴는 드롭다운 형태로 표시됩니다."
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
        >
          <div className="menu_demo-row">
            <div className="menu_demo-sidebar">
              <Menu mode="vertical" bordered compact ariaLabel="앱 사이드바">
                <MenuItem label="개요" active icon={(
              <>
              <DocIcon name="grid" />
              </>
            )} />
                <MenuSubmenu label="문서" expanded submenuId="menu-sub-sidebar" icon={(
              <>
              <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                            </svg>
              </>
            )}>
      <MenuItem label="시작하기" />
                  <MenuItem label="컴포넌트" />
      </MenuSubmenu>
                <MenuItem label="설정" icon={(
              <>
              <DocIcon name="settings" />
              </>
            )} />
              </Menu>
            </div>
            <div className="menu_demo-content">
              <p style={{ margin: '0' }}>선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="variant-heading"
          title="변형"
          description="menu_compact · menu_dark로 밀도와 배경을 조절합니다."
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

        <ApiSection headingId="api-slots-heading" title="API · Menu Slots">
          <ApiTable columns={menuSlotColumns} rows={menuSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-item-slots-heading" title="API · MenuItem · MenuSubmenu Slots">
          <ApiTable columns={menuItemSlotColumns} rows={menuItemSlots} codeColumn="name" />
          <ApiTable columns={menuSubmenuSlotColumns} rows={menuSubmenuSlots} codeColumn="name" style={{ marginTop: 'var(--space-md)' }} />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={menuClassColumns} rows={menuClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={menuTokenColumns} rows={menuTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
