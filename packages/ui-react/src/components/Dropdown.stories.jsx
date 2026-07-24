import React from 'react';
import Avatar from './Avatar.jsx';
import Button from './Button.jsx';
import Dropdown from './Dropdown.jsx';
import Icon from './Icon.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  dropdownClassColumns,
  dropdownClasses,
  dropdownPropColumns,
  dropdownProps,
  dropdownTokenColumns,
  dropdownTokens,
} from '@doc-data/dropdown-api';

const dropdownChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const dropdownChildren = [
  { name: 'triggerContent', description: '트리거 버튼·링크 (Vue #trigger 슬롯)' },
  { name: 'children', description: '메뉴 패널 (dropdown_menu, 보통 Menu OOCSS)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 max-visible-items · menu-width · menu-min-width는 maxVisibleItems · menuWidth · menuMinWidth로 다룹니다. Vue `#trigger` 슬롯은 triggerContent prop입니다.',
    tables: [{ columns: dropdownPropColumns, rows: dropdownProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description:
      'Vue 슬롯에 대응하는 React prop·children입니다. Menu·MenuItem은 아직 React 미포팅이므로 스토리에서는 OOCSS 마크업을 사용합니다.',
    tables: [{ columns: dropdownChildColumns, rows: dropdownChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: dropdownClassColumns, rows: dropdownClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: dropdownTokenColumns, rows: dropdownTokens, codeColumn: 'name' }],
  },
];

function stageDemo(children) {
  return <div className="dropdown_demo-stage">{children}</div>;
}

function dropdownDemo(children) {
  const render = () => stageDemo(children);
  return withDocsCanvasRender(render, render);
}

function MenuShell({ ariaLabel, children }) {
  return (
    <nav className="menu menu_vertical menu_compact" aria-label={ariaLabel} data-menu-selectable="">
      <ul className="menu_list" role="none">
        {children}
      </ul>
    </nav>
  );
}

function MenuItem({ label, active, disabled, color, icon, extra }) {
  const linkClass = [
    'menu_link',
    active && 'is-active',
    disabled && 'is-disabled',
    color && `color_${color}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={['menu_item', disabled && 'is-disabled'].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={linkClass}
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        disabled={disabled || undefined}
      >
        {icon}
        {label != null ? <span className="menu_label">{label}</span> : null}
        {extra}
      </button>
    </li>
  );
}

const Caret = <Icon name="chevron-down" className="btn_select-caret" aria-hidden="true" />;

const MoreIcon = (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const playgroundArgs = {
  open: true,
  disabled: false,
  placement: undefined,
  fit: false,
  maxVisibleItems: undefined,
};

export default {
  title: 'Components/네비게이션/Dropdown',
  id: 'components-dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    placement: {
      control: 'select',
      options: ['end', 'top'],
      type: { name: 'enum', summary: "'end' | 'top'" },
    },
    fit: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    maxVisibleItems: { control: 'number', type: { name: 'number', summary: 'number' } },
    menuWidth: { control: 'text', type: { name: 'union', summary: 'string | number' } },
    menuMinWidth: { control: 'text', type: { name: 'union', summary: 'string | number' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '트리거와 메뉴 패널로 구성되는 Dropdown 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <div className="dropdown_demo-stage">
      <Dropdown
        {...args}
        triggerContent={
          <Button
            className="dropdown_trigger"
            label="드롭다운"
            variant="outline"
            haspopup="menu"
          />
        }
      >
        <MenuShell ariaLabel="드롭다운 메뉴">
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
          <MenuItem label="항목 3" />
        </MenuShell>
      </Dropdown>
    </div>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function BasicExample() {
  return (
    <Dropdown
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />
      }
    >
      <nav className="menu menu_vertical menu_compact" aria-label="작업 메뉴">
        <ul className="menu_list">
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">복사</span></button></li>
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">이동</span></button></li>
          <li className="menu_item"><button type="button" className="menu_link"><span className="menu_label">공유</span></button></li>
        </ul>
      </nav>
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <Dropdown
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="작업" haspopup="menu" />
      }
    >
      <MenuShell ariaLabel="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </MenuShell>
    </Dropdown>,
  ),
};

export const Open = {
  name: '열린 상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'is-open 클래스와 aria-expanded="true"로 패널이 열린 상태를 표현합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

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
      {/* menu OOCSS */}
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
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
      <MenuShell ariaLabel="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </MenuShell>
    </Dropdown>,
  ),
};

export const Trigger = {
  name: '트리거 유형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function TriggerExample() {
  return (
    <Dropdown
      triggerContent={
        <Button className="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <div className="dropdown_row">
      <Dropdown
        triggerContent={
          <Button
            className="dropdown_trigger"
            variant="filled"
            color="primary"
            label="Filled"
            haspopup="menu"
          />
        }
      >
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
        }
      >
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button className="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
        }
      >
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown
        triggerContent={
          <Button
            className="dropdown_trigger"
            variant="text"
            color="primary"
            label="Text"
            haspopup="menu"
            iconAfter={Caret}
          />
        }
      >
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
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
        <MenuShell ariaLabel="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </MenuShell>
      </Dropdown>
    </div>,
  ),
};

export const SelectTrigger = {
  name: '셀렉트 트리거',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function SelectTriggerExample() {
  return (
    <Dropdown
      fit
      triggerContent={
        <Button className="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <>
      <div className="dropdown_row">
        <Dropdown
          fit
          triggerContent={
            <Button
              className="dropdown_trigger"
              variant="select"
              label="서울특별시"
              haspopup="listbox"
            />
          }
        >
          <MenuShell ariaLabel="지역 선택">
            <MenuItem label="서울특별시" active />
            <MenuItem label="부산광역시" />
            <MenuItem label="대구광역시" />
            <MenuItem label="인천광역시" />
          </MenuShell>
        </Dropdown>
        <Dropdown
          triggerContent={
            <Button
              className="dropdown_trigger"
              variant="select"
              selectText
              label="최신순"
              haspopup="listbox"
            />
          }
        >
          <MenuShell ariaLabel="정렬">
            <MenuItem label="최신순" active />
            <MenuItem label="인기순" />
            <MenuItem label="가격 낮은순" />
            <MenuItem label="가격 높은순" />
          </MenuShell>
        </Dropdown>
      </div>
      <p className="form_field-hint">
        btn_select 상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요.
      </p>
    </>,
  ),
};

export const Placement = {
  name: '정렬',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function PlacementExample() {
  return (
    <Dropdown
      placement="end"
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <>
      <div className="dropdown_row" style={{ width: '100%', justifyContent: 'space-between' }}>
        <Dropdown
          triggerContent={
            <Button
              className="dropdown_trigger"
              variant="outline"
              label="왼쪽 정렬"
              haspopup="menu"
              iconAfter={Caret}
            />
          }
        >
          <MenuShell>
            <MenuItem label="항목 A" />
            <MenuItem label="항목 B" />
          </MenuShell>
        </Dropdown>
        <Dropdown
          placement="end"
          triggerContent={
            <Button
              className="dropdown_trigger"
              variant="outline"
              label="오른쪽 정렬"
              haspopup="menu"
              iconAfter={Caret}
            />
          }
        >
          <MenuShell>
            <MenuItem label="항목 A" />
            <MenuItem label="항목 B" />
          </MenuShell>
        </Dropdown>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6rem' }}>
        <Dropdown
          placement="top"
          triggerContent={
            <Button
              className="dropdown_trigger"
              variant="ghost"
              label="위로 열기"
              haspopup="menu"
              iconAfter={Caret}
            />
          }
        >
          <MenuShell>
            <MenuItem label="위쪽 패널" />
            <MenuItem label="항목 2" />
          </MenuShell>
        </Dropdown>
      </div>
    </>,
  ),
};

export const MenuDemo = {
  name: '메뉴 구성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function MenuDemoExample() {
  return (
    <Dropdown
      open
      triggerContent={
        <Button className="dropdown_trigger" variant="outline" label="계정" haspopup="menu" expanded />
      }
    >
      <nav className="menu menu_vertical menu_compact" aria-label="계정 메뉴">
        <ul className="menu_list" role="none">
          <li className="menu_group" role="presentation">
            <span className="menu_group-title">계정</span>
          </li>
          {/* MenuItem OOCSS … */}
        </ul>
      </nav>
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <Dropdown
      open
      triggerContent={
        <Button
          className="dropdown_trigger"
          variant="outline"
          label="계정"
          haspopup="menu"
          expanded
          iconAfter={Caret}
        />
      }
    >
      <MenuShell ariaLabel="계정 메뉴">
        <li className="menu_group" role="presentation">
          <span className="menu_group-title">계정</span>
        </li>
        <MenuItem label="프로필" icon={<Icon name="user" />} />
        <MenuItem
          label="보안"
          icon={
            <svg
              className="menu_icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
        />
        <li className="menu_divider" role="separator" />
        <li className="menu_group" role="presentation">
          <span className="menu_group-title">앱</span>
        </li>
        <MenuItem
          label="알림"
          icon={
            <svg
              className="menu_icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
            </svg>
          }
          extra={
            <span className="badge badge_count color_primary menu_extra" aria-hidden="true">
              3
            </span>
          }
        />
        <MenuItem label="설정" icon={<Icon name="settings" />} />
        <li className="menu_divider" role="separator" />
        <MenuItem label="로그아웃" color="danger" />
      </MenuShell>
    </Dropdown>,
  ),
};

export const Scroll = {
  name: '스크롤 · 너비',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function ScrollExample() {
  return (
    <Dropdown
      open
      maxVisibleItems={4}
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" label="도시 선택" haspopup="listbox" expanded />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <>
      <div className="dropdown_row">
        <Dropdown
          open
          maxVisibleItems={4}
          triggerContent={
            <Button
              variant="outline"
              className="dropdown_trigger"
              label="도시 선택"
              haspopup="listbox"
              expanded
              iconAfter={Caret}
            />
          }
        >
          <MenuShell ariaLabel="도시 목록">
            <MenuItem label="서울특별시" active />
            <MenuItem label="부산광역시" />
            <MenuItem label="대구광역시" />
            <MenuItem label="인천광역시" />
            <MenuItem label="광주광역시" />
            <MenuItem label="대전광역시" />
            <MenuItem label="울산광역시" />
            <MenuItem label="세종특별자치시" />
          </MenuShell>
        </Dropdown>
        <Dropdown
          open
          maxVisibleItems={4}
          menuWidth={18}
          triggerContent={
            <Button
              variant="outline"
              className="dropdown_trigger"
              label="넓은 패널"
              haspopup="menu"
              expanded
              iconAfter={Caret}
            />
          }
        >
          <MenuShell ariaLabel="긴 라벨 메뉴">
            <MenuItem label="프로젝트 대시보드" />
            <MenuItem label="팀 협업 워크스페이스" />
            <MenuItem label="문서 보관함 및 템플릿" />
            <MenuItem label="알림 및 활동 기록" />
            <MenuItem label="계정 및 보안 설정" />
            <MenuItem label="결제 및 구독 관리" />
          </MenuShell>
        </Dropdown>
      </div>
      <p className="form_field-hint">
        HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와{' '}
        <code>style=&quot;--dropdown-max-visible-items: 4&quot;</code>로 동일하게 적용합니다.
      </p>
    </>,
  ),
};

export const Disabled = {
  name: '비활성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';

export function DisabledExample() {
  return (
    <Dropdown
      disabled
      triggerContent={
        <Button variant="outline" className="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
      }
    >
      {/* menu */}
    </Dropdown>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <div className="dropdown_row">
      <Dropdown
        disabled
        triggerContent={
          <Button
            variant="outline"
            className="dropdown_trigger"
            disabled
            label="비활성 드롭다운"
            haspopup="menu"
          />
        }
      >
        <MenuShell>
          <MenuItem label="항목" />
        </MenuShell>
      </Dropdown>
      <Dropdown
        open
        triggerContent={
          <Button
            variant="outline"
            className="dropdown_trigger"
            label="일부 비활성"
            haspopup="menu"
            expanded
          />
        }
      >
        <MenuShell>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </MenuShell>
      </Dropdown>
    </div>,
  ),
};

export const Example = {
  name: '조합 예시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. data-dropdown으로 클릭·Esc·외부 클릭 시 닫힙니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Dropdown from '@uxkm/ui-react/components/Dropdown.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ExampleDemo() {
  return (
    <div className="dropdown_demo-toolbar">
      <Dropdown
        placement="end"
        data-dropdown-close-on-select=""
        triggerContent={
          <Button variant="ghost" size="sm" className="dropdown_trigger" haspopup="menu">
            <Avatar size="sm" color="primary" initials="김" ariaHidden />
            김가이드
          </Button>
        }
      >
        {/* menu */}
      </Dropdown>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: dropdownDemo(
    <div className="dropdown_demo-toolbar">
      <Button
        variant="ghost"
        size="sm"
        iconBefore={
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" />
          </svg>
        }
      >
        알림
        <span className="badge badge_count badge_sm color_danger" aria-label="읽지 않은 알림 2건">
          2
        </span>
      </Button>
      <Dropdown
        placement="end"
        data-dropdown-close-on-select=""
        triggerContent={
          <Button
            variant="ghost"
            size="sm"
            className="dropdown_trigger"
            haspopup="menu"
            iconAfter={Caret}
          >
            <Avatar size="sm" color="primary" initials="김" ariaHidden />
            김가이드
          </Button>
        }
      >
        <MenuShell ariaLabel="사용자 메뉴">
          <MenuItem label="내 프로필" icon={<Icon name="user" />} />
          <MenuItem
            label="내 문서"
            icon={
              <svg
                className="menu_icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            }
          />
          <li className="menu_divider" role="separator" />
          <MenuItem label="로그아웃" color="danger" />
        </MenuShell>
      </Dropdown>
    </div>,
  ),
};
