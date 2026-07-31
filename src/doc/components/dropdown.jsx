'use client';

import { useState } from 'react';

export const docMeta = {
  title: 'Dropdown | UXKM Guide',
  activeNav: 'dropdown',
  pageTitle: 'Dropdown',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import Avatar from '@/components/Avatar.jsx';
import Button from '@/components/Button.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Icon from '@/components/Icon.jsx';
import Menu from '@/components/Menu.jsx';
import MenuDivider from '@/components/MenuDivider.jsx';
import MenuItem from '@/components/MenuItem.jsx';
import {
  dropdownChildColumns,
  dropdownChildren,
  dropdownClassColumns,
  dropdownClasses,
  dropdownPropColumns,
  dropdownProps,
  dropdownTokenColumns,
  dropdownTokens,
} from '@/doc/data/dropdown-api';

const MoreIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const basicCode = `'use client';

import { useState } from 'react';
import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function BasicExample() {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />
      }
    >
      <Menu mode="vertical" compact ariaLabel="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </Menu>
    </Dropdown>
  );
}`;

const openCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function OpenExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button
          variant="filled"
          color="primary"
          className="dropdown_trigger"
          label="카테고리"
          haspopup="menu"
          expanded
        />
      }
    >
      <Menu mode="vertical" compact ariaLabel="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </Menu>
    </Dropdown>
  );
}`;

const triggerCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function TriggerExample() {
  return (
    <div className="dropdown_row">
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" selectCaret />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="ghost" iconOnly ariaLabel="더보기" haspopup="menu" iconBefore={/* … */} />
        }
      >
        <Menu mode="vertical" compact ariaLabel="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </Menu>
      </Dropdown>
    </div>
  );
}`;

const selectTriggerCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function SelectTriggerExample() {
  return (
    <>
      <Dropdown
        fit
        triggerContent={
          <Button className="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
        }
      >
        <Menu mode="vertical" compact ariaLabel="지역 선택">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
        </Menu>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="select" selectText label="최신순" haspopup="listbox" />
        }
      >
        <Menu mode="vertical" compact ariaLabel="정렬">
          <MenuItem label="최신순" active />
          <MenuItem label="인기순" />
          <MenuItem label="가격 낮은순" />
          <MenuItem label="가격 높은순" />
        </Menu>
      </Dropdown>
    </>
  );
}`;

const placementCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function PlacementExample() {
  return (
    <>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" selectCaret />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>
      <Dropdown
        placement="end"
        triggerContent={
          <Button className="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" selectCaret />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>
      <Dropdown
        placement="top"
        triggerContent={
          <Button className="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" selectCaret />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="위쪽 패널" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
    </>
  );
}`;

const menuCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Icon from '@/components/Icon.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function MenuDemoExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="계정" haspopup="menu" expanded selectCaret />
      }
    >
      <Menu mode="vertical" compact ariaLabel="계정 메뉴">
        <MenuItem label="프로필" icon={<Icon name="user" />} />
        <MenuItem label="설정" icon={<Icon name="settings" />} />
        <MenuItem label="로그아웃" color="danger" />
      </Menu>
    </Dropdown>
  );
}`;

const scrollCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function ScrollExample() {
  return (
    <>
      <Dropdown
        open
        maxVisibleItems={4}
        triggerContent={
          <Button variant="outline" className="dropdown_trigger" label="도시 선택" haspopup="listbox" expanded selectCaret />
        }
      >
        <Menu mode="vertical" compact ariaLabel="도시 목록">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
          <MenuItem label="광주광역시" />
        </Menu>
      </Dropdown>
      <Dropdown
        open
        maxVisibleItems={4}
        menuWidth={18}
        triggerContent={
          <Button variant="outline" className="dropdown_trigger" label="넓은 패널" haspopup="menu" expanded selectCaret />
        }
      >
        <Menu mode="vertical" compact ariaLabel="긴 라벨 메뉴">
          <MenuItem label="프로젝트 대시보드" />
          <MenuItem label="팀 협업 워크스페이스" />
          <MenuItem label="문서 보관함 및 템플릿" />
        </Menu>
      </Dropdown>
    </>
  );
}`;

const disabledCode = `import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Menu from '@/components/Menu.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function DisabledExample() {
  return (
    <>
      <Dropdown
        disabled
        triggerContent={
          <Button variant="outline" className="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="항목" />
        </Menu>
      </Dropdown>
      <Dropdown
        open
        triggerContent={
          <Button variant="outline" className="dropdown_trigger" label="일부 비활성" haspopup="menu" expanded />
        }
      >
        <Menu mode="vertical" compact>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </Menu>
      </Dropdown>
    </>
  );
}`;

const exampleCode = `import Avatar from '@/components/Avatar.jsx';
import Button from '@/components/Button.jsx';
import Dropdown from '@/components/Dropdown.jsx';
import Icon from '@/components/Icon.jsx';
import Menu from '@/components/Menu.jsx';
import MenuDivider from '@/components/MenuDivider.jsx';
import MenuItem from '@/components/MenuItem.jsx';

export function ExampleDemo() {
  return (
    <div className="dropdown_demo-toolbar">
      <Dropdown
        placement="end"
        closeOnSelect
        triggerContent={
          <Button variant="ghost" size="sm" className="dropdown_trigger" haspopup="menu" selectCaret>
            <Avatar size="sm" color="primary" initials="김" ariaHidden />
            김가이드
          </Button>
        }
      >
        <Menu mode="vertical" compact ariaLabel="사용자 메뉴">
          <MenuItem label="내 프로필" icon={<Icon name="user" />} />
          <MenuDivider />
          <MenuItem label="로그아웃" color="danger" />
        </Menu>
      </Dropdown>
    </div>
  );
}`;

export function BasicExample() {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />
      }
    >
      <Menu mode="vertical" compact ariaLabel="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </Menu>
    </Dropdown>
  );
}

export default function DropdownDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Dropdown</h1>
        <p className="lead">버튼·링크 등 트리거를 클릭하면 메뉴 패널이 표시되는 Next.js Client Component입니다. Menu 컴포넌트와 조합해 액션 목록·사용자 메뉴·필터 등에 사용합니다.</p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다."
        code={basicCode}
      >
        <BasicExample />
      </DemoSection>

      <DemoSection
        headingId="open-heading"
        title="열린 상태"
        description={'is-open 클래스와 aria-expanded="true"로 패널이 열린 상태를 표현합니다.'}
        code={openCode}
      >
        <Dropdown
          open
          triggerContent={
            <Button
              variant="filled"
              color="primary"
              className="dropdown_trigger"
              label="카테고리"
              haspopup="menu"
              expanded
            />
          }
        >
          <Menu mode="vertical" compact ariaLabel="카테고리">
            <MenuItem label="전체" active />
            <MenuItem label="디자인" />
            <MenuItem label="개발" />
            <MenuItem label="마케팅" />
          </Menu>
        </Dropdown>
      </DemoSection>

      <DemoSection
        headingId="trigger-heading"
        title="트리거 유형"
        description="Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · iconOnly 조합이 가능합니다."
        code={triggerCode}
        stack
      >
        <div className="dropdown_row">
          <Dropdown
            triggerContent={
              <Button className="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목 1" />
              <MenuItem label="항목 2" />
            </Menu>
          </Dropdown>
          <Dropdown
            triggerContent={
              <Button className="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목 1" />
              <MenuItem label="항목 2" />
            </Menu>
          </Dropdown>
          <Dropdown
            triggerContent={
              <Button className="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목 1" />
              <MenuItem label="항목 2" />
            </Menu>
          </Dropdown>
          <Dropdown
            triggerContent={
              <Button className="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" selectCaret />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목 1" />
              <MenuItem label="항목 2" />
            </Menu>
          </Dropdown>
          <Dropdown
            triggerContent={
              <Button
                className="dropdown_trigger"
                variant="ghost"
                iconOnly
                ariaLabel="더보기"
                haspopup="menu"
                iconBefore={MoreIcon}
              />
            }
          >
            <Menu mode="vertical" compact ariaLabel="더보기">
              <MenuItem label="편집" />
              <MenuItem label="복제" />
              <MenuItem label="삭제" color="danger" />
            </Menu>
          </Dropdown>
        </div>
      </DemoSection>

      <DemoSection
        headingId="select-trigger-heading"
        title="셀렉트 트리거"
        description="btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다."
        code={selectTriggerCode}
        stack
      >
        <div className="dropdown_row">
          <Dropdown
            fit
            triggerContent={
              <Button className="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
            }
          >
            <Menu mode="vertical" compact ariaLabel="지역 선택">
              <MenuItem label="서울특별시" active />
              <MenuItem label="부산광역시" />
              <MenuItem label="대구광역시" />
              <MenuItem label="인천광역시" />
            </Menu>
          </Dropdown>
          <Dropdown
            triggerContent={
              <Button className="dropdown_trigger" variant="select" selectText label="최신순" haspopup="listbox" />
            }
          >
            <Menu mode="vertical" compact ariaLabel="정렬">
              <MenuItem label="최신순" active />
              <MenuItem label="인기순" />
              <MenuItem label="가격 낮은순" />
              <MenuItem label="가격 높은순" />
            </Menu>
          </Dropdown>
        </div>
        <p className="form_field-hint">btn_select 상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요.</p>
      </DemoSection>

      <DemoSection
        headingId="placement-heading"
        title="정렬"
        description="dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다."
        code={placementCode}
        stack
      >
        <div className="dropdown_row" style={{ width: '100%', justifyContent: 'space-between' }}>
          <Dropdown
            triggerContent={
              <Button className="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" selectCaret />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목 A" />
              <MenuItem label="항목 B" />
            </Menu>
          </Dropdown>
          <Dropdown
            placement="end"
            triggerContent={
              <Button className="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" selectCaret />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목 A" />
              <MenuItem label="항목 B" />
            </Menu>
          </Dropdown>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6rem' }}>
          <Dropdown
            placement="top"
            triggerContent={
              <Button className="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" selectCaret />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="위쪽 패널" />
              <MenuItem label="항목 2" />
            </Menu>
          </Dropdown>
        </div>
      </DemoSection>

      <DemoSection
        headingId="menu-heading"
        title="메뉴 구성"
        description="Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다."
        code={menuCode}
      >
        <Dropdown
          open
          triggerContent={
            <Button className="dropdown_trigger" variant="outline" label="계정" haspopup="menu" expanded selectCaret />
          }
        >
          <Menu mode="vertical" compact ariaLabel="계정 메뉴">
            <MenuItem label="프로필" icon={<Icon name="user" />} />
            <MenuItem
              label="보안"
              icon={
                <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />
            <MenuDivider />
            <MenuItem
              label="알림"
              icon={
                <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
                </svg>
              }
              extra={<span className="badge badge_count color_primary menu_extra">3</span>}
            />
            <MenuItem label="설정" icon={<Icon name="settings" />} />
            <MenuDivider />
            <MenuItem label="로그아웃" color="danger" />
          </Menu>
        </Dropdown>
      </DemoSection>

      <DemoSection
        headingId="scroll-heading"
        title="스크롤 · 너비"
        description="maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다."
        code={scrollCode}
        stack
      >
        <div className="dropdown_row">
          <Dropdown
            open
            maxVisibleItems={4}
            triggerContent={
              <Button variant="outline" className="dropdown_trigger" label="도시 선택" haspopup="listbox" expanded selectCaret />
            }
          >
            <Menu mode="vertical" compact ariaLabel="도시 목록">
              <MenuItem label="서울특별시" active />
              <MenuItem label="부산광역시" />
              <MenuItem label="대구광역시" />
              <MenuItem label="인천광역시" />
              <MenuItem label="광주광역시" />
              <MenuItem label="대전광역시" />
              <MenuItem label="울산광역시" />
              <MenuItem label="세종특별자치시" />
            </Menu>
          </Dropdown>
          <Dropdown
            open
            maxVisibleItems={4}
            menuWidth={18}
            triggerContent={
              <Button variant="outline" className="dropdown_trigger" label="넓은 패널" haspopup="menu" expanded selectCaret />
            }
          >
            <Menu mode="vertical" compact ariaLabel="긴 라벨 메뉴">
              <MenuItem label="프로젝트 대시보드" />
              <MenuItem label="팀 협업 워크스페이스" />
              <MenuItem label="문서 보관함 및 템플릿" />
              <MenuItem label="알림 및 활동 기록" />
              <MenuItem label="계정 및 보안 설정" />
              <MenuItem label="결제 및 구독 관리" />
            </Menu>
          </Dropdown>
        </div>
        <p className="form_field-hint">
          HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와{' '}
          <code>{'style="--dropdown-max-visible-items: 4"'}</code>로 동일하게 적용합니다.
        </p>
      </DemoSection>

      <DemoSection
        headingId="disabled-heading"
        title="비활성"
        description="dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다."
        code={disabledCode}
        stack
      >
        <div className="dropdown_row">
          <Dropdown
            disabled
            triggerContent={
              <Button variant="outline" className="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="항목" />
            </Menu>
          </Dropdown>
          <Dropdown
            open
            triggerContent={
              <Button variant="outline" className="dropdown_trigger" label="일부 비활성" haspopup="menu" expanded />
            }
          >
            <Menu mode="vertical" compact>
              <MenuItem label="조회" />
              <MenuItem label="편집" />
              <MenuItem label="삭제" disabled />
              <MenuItem label="관리자 설정" disabled />
            </Menu>
          </Dropdown>
        </div>
      </DemoSection>

      <DemoSection
        headingId="example-heading"
        title="조합 예시"
        description="툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. closeOnSelect로 항목 선택 시 닫히며 Esc·외부 클릭도 지원합니다."
        code={exampleCode}
      >
        <div className="dropdown_demo-toolbar">
          <Button variant="ghost" size="sm" label="알림" />
          <Dropdown
            placement="end"
            closeOnSelect
            triggerContent={
              <Button variant="ghost" size="sm" className="dropdown_trigger" haspopup="menu" selectCaret>
                <Avatar size="sm" color="primary" initials="김" ariaHidden />
                김가이드
              </Button>
            }
          >
            <Menu mode="vertical" compact ariaLabel="사용자 메뉴">
              <MenuItem label="내 프로필" href="#" icon={<Icon name="user" />} />
              <MenuItem
                label="내 문서"
                href="#"
                icon={
                  <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                }
              />
              <MenuDivider />
              <MenuItem label="로그아웃" color="danger" />
            </Menu>
          </Dropdown>
        </div>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={dropdownPropColumns} rows={dropdownProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={dropdownChildColumns} rows={dropdownChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={dropdownClassColumns} rows={dropdownClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={dropdownTokenColumns} rows={dropdownTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
