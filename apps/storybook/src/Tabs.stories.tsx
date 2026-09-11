import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useMemo, useState } from 'react';
import { hiddenArgTypes, ariaLabelArg, stringControlArg } from './shared/storyArgTypes';
import ActualTabs from '../../react/src/components/navigation/Tabs/Tabs.jsx';
import ActualTabPanel from '../../react/src/components/navigation/Tabs/TabPanel.jsx';
import ActualTabMenu from '../../react/src/components/navigation/Tabs/TabMenu.jsx';
import ActualTabsTab from '../../react/src/components/navigation/Tabs/TabsTab.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import ActualBadge from '../../react/src/components/data-display/Badge/Badge.jsx';
import ActualMenu from '../../react/src/components/navigation/Menu/Menu.jsx';
import ActualMenuItem from '../../react/src/components/navigation/Menu/MenuItem.jsx';
import ActualMenuGroup from '../../react/src/components/navigation/Menu/MenuGroup.jsx';
import ActualDropdown from '../../react/src/components/navigation/Dropdown/Dropdown.jsx';
import ActualModal from '../../react/src/components/feedback/Modal/Modal.jsx';
const Tabs = ActualTabs as React.ComponentType<any>;
const TabPanel = ActualTabPanel as React.ComponentType<any>;
const TabMenu = ActualTabMenu as React.ComponentType<any>;
const TabsTab = ActualTabsTab as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const Badge = ActualBadge as React.ComponentType<any>;
const Menu = ActualMenu as React.ComponentType<any>;
const MenuItem = ActualMenuItem as React.ComponentType<any>;
const MenuGroup = ActualMenuGroup as React.ComponentType<any>;
const Dropdown = ActualDropdown as React.ComponentType<any>;
const Modal = ActualModal as React.ComponentType<any>;
const Panel = ({ label, children, ...props }: any) => <TabPanel label={label} {...props}>{children}</TabPanel>;
const Stack = ({ children }: any) => <div className="tabs-stack-demo">{children}</div>;
const dynamicItems = [{ key: 'overview', label: '개요', active: true }, { key: 'team', label: '팀' }, { key: 'activity', label: '활동' }];
const dynamicPanel = ({ value }: any) => <p>{value === 'overview' ? '프로젝트 개요와 목표를 설명하는 영역입니다.' : value === 'team' ? '팀 구성원과 역할을 표시합니다.' : '최근 활동 로그와 타임라인을 보여줍니다.'}</p>;

const editableCatalog = [
  { key: 'style', label: 'UI/UX 스타일 가이드', body: '스타일 가이드 예시 화면입니다.' },
  { key: 'progress', label: 'UI 진행 현황', body: 'UI 진행 현황 예시 화면입니다.' },
  { key: 'layout', label: '레이아웃 유형', body: '레이아웃 유형 예시 화면입니다.' },
  { key: 'form', label: '폼 유형', body: '폼 유형 예시 화면입니다.' },
  { key: 'chart', label: '차트 유형', body: '차트 유형 예시 화면입니다.' },
];

function EditableTabsExample({ maxTabs: maxTabsProp = 4 }: { maxTabs?: number }) {
  const catalogLimit = editableCatalog.length;
  const [maxTabs, setMaxTabs] = useState(() => Math.min(Math.max(1, maxTabsProp), catalogLimit));
  const [openKeys, setOpenKeys] = useState(['style', 'progress', 'layout']);
  const [active, setActive] = useState('layout');
  const [moreOpen, setMoreOpen] = useState(false);
  const [limitOpen, setLimitOpen] = useState(false);

  useEffect(() => {
    setMaxTabs(Math.min(Math.max(1, maxTabsProp), catalogLimit));
  }, [maxTabsProp, catalogLimit]);

  const pages = useMemo(
    () =>
      openKeys
        .map((key) => editableCatalog.find((page) => page.key === key))
        .filter(Boolean) as typeof editableCatalog,
    [openKeys],
  );

  const items = pages.map((page) => ({
    key: page.key,
    label: page.label,
    closable: true,
    content: (
      <div>
        <h3 className="tabs_demo-editable-title">타이틀</h3>
        <p>{page.body}</p>
      </div>
    ),
  }));

  const addTab = (key: string) => {
    if (openKeys.includes(key)) {
      setActive(key);
      return;
    }
    if (openKeys.length >= maxTabs) {
      setLimitOpen(true);
      return;
    }
    setOpenKeys((keys) => [...keys, key]);
    setActive(key);
  };

  const closeTab = (key: string) => {
    setOpenKeys((keys) => {
      if (keys.length <= 1) return keys;
      const index = keys.indexOf(key);
      const nextKeys = keys.filter((item) => item !== key);
      if (key === active) {
        setActive(keys[index - 1] ?? nextKeys[nextKeys.length - 1] ?? '');
      }
      return nextKeys;
    });
  };

  const switchTab = (direction: -1 | 1) => {
    const index = openKeys.indexOf(active);
    const next = openKeys[index + direction];
    if (next) setActive(next);
  };

  const activeIndex = openKeys.indexOf(active);
  const closeLimitModal = () => setLimitOpen(false);

  return (
    <div className="tabs_demo-editable">
      <div className="tabs_demo-editable-side">
        <label className="tabs_demo-editable-limit">
          <span className="tabs_demo-editable-limit-label">최대 탭 개수</span>
          <input
            className="input input_sm"
            type="number"
            min={1}
            max={catalogLimit}
            value={maxTabs}
            aria-describedby="tabs-demo-limit-hint"
            onChange={(event) => {
              const next = Number(event.target.value);
              if (!Number.isFinite(next)) return;
              setMaxTabs(Math.min(Math.max(1, next), catalogLimit));
            }}
          />
          <span id="tabs-demo-limit-hint" className="tabs_demo-editable-limit-hint">
            현재 {openKeys.length}/{maxTabs}
          </span>
        </label>
        <Menu
          bordered
          compact
          selectable={false}
          ariaLabel="예시 추가 메뉴"
          className="tabs_demo-editable-menu"
        >
          <MenuGroup title="예시 추가" />
          {editableCatalog.map((page) => (
            <MenuItem
              key={page.key}
              label={page.label}
              active={openKeys.includes(page.key) && active === page.key}
              onClick={() => addTab(page.key)}
            />
          ))}
        </Menu>
      </div>
      <div className="tabs_demo-editable-main">
        <Tabs
          variant="card"
          mode="dynamic"
          layout="scroll"
          className="tabs_demo-editable-tabs"
          ariaLabel="열린 예시 탭"
          value={active}
          onChange={setActive}
          onClose={closeTab}
          items={items}
          panel={({ item }: any) => item?.content}
          extra={
            <div className="tabs_demo-editable-controls">
              <Button
                variant="outline"
                color="default"
                size="sm"
                iconOnly
                className="tabs_nav"
                ariaLabel="이전 탭"
                disabled={activeIndex <= 0}
                iconBefore={<Icon name="chevron-left" />}
                onClick={() => switchTab(-1)}
              />
              <Dropdown
                open={moreOpen}
                onOpenChange={setMoreOpen}
                placement="end"
                triggerContent={
                  <Button
                    variant="outline"
                    color="default"
                    size="sm"
                    iconOnly
                    className="tabs_nav"
                    ariaLabel="열린 탭 목록"
                    iconBefore={<Icon name="menu" />}
                  />
                }
              >
                <Menu compact selectable={false} ariaLabel="열린 탭 목차">
                  {pages.map((page) => (
                    <MenuItem
                      key={page.key}
                      label={`- ${page.label}`}
                      active={page.key === active}
                      onClick={() => {
                        setActive(page.key);
                        setMoreOpen(false);
                      }}
                    />
                  ))}
                </Menu>
              </Dropdown>
              <Button
                variant="outline"
                color="default"
                size="sm"
                iconOnly
                className="tabs_nav"
                ariaLabel="다음 탭"
                disabled={activeIndex < 0 || activeIndex >= openKeys.length - 1}
                iconBefore={<Icon name="chevron-right" />}
                onClick={() => switchTab(1)}
              />
            </div>
          }
        />
      </div>
      <Modal
        id="tabs-limit-alert"
        open={limitOpen}
        size="sm"
        title="알림"
        aria-describedby="tabs-limit-alert-desc"
        onClose={closeLimitModal}
        footer={<Button color="primary" label="확인" onClick={closeLimitModal} />}
      >
        <p id="tabs-limit-alert-desc">
          탭은 최대 {maxTabs}개까지 열 수 있습니다. 새 탭을 열려면 기존 탭을 닫아 주세요.
        </p>
      </Modal>
    </div>
  );
}

function mapTabsArgs(args: Record<string, unknown>) {
  const { value, defaultValue, ...rest } = args;
  return {
    ...rest,
    ...(typeof value === 'string' && value ? { value } : {}),
    ...(typeof defaultValue === 'string' && defaultValue ? { defaultValue } : {}),
  };
}

const meta = {
  title: '네비게이션/Tabs',
  component: Tabs,
  subcomponents: { TabPanel, TabMenu, TabsTab },
  decorators: [(Story) => <div className="tabs-story-demo"><Story /></div>],
  parameters: { layout: 'padded' },
  args: {
    mode: 'panels',
    variant: 'line',
    size: 'md',
    layout: 'auto',
    indicator: 'static',
    ariaLabel: '프로젝트 정보',
    vertical: false,
    scrollable: false,
    value: '',
    defaultValue: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    mode: { control: 'select', options: ['panels', 'dynamic'] },
    variant: { control: 'select', options: ['line', 'card', 'pill'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    layout: { control: 'select', options: ['auto', 'equal', 'scroll'] },
    indicator: { control: 'select', options: ['static', 'slide'] },
    ariaLabel: { ...ariaLabelArg, description: '탭 목록의 접근 가능한 이름' },
    vertical: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    value: { ...stringControlArg, description: '제어형 선택 탭 키' },
    defaultValue: {
      ...stringControlArg,
      description: '비제어형 초기 탭 키 (value 미설정 시)',
      if: { arg: 'value', eq: '' },
    },
    items: { table: { disable: true } },
    panel: { table: { disable: true } },
    extra: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Tabs {...mapTabsArgs(args)}>
      <Panel label="개요" active>
        <p>Controls로 속성을 조절해 보세요.</p>
      </Panel>
      <Panel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </Panel>
    </Tabs>
  ),
};

export const Basic: Story = {
  name: '기본 (라인)',
  render: (args) => (
    <Tabs {...mapTabsArgs(args)}>
      <Panel label="개요" active>
        <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
      </Panel>
      <Panel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </Panel>
      <Panel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </Panel>
    </Tabs>
  ),
};
export const PrimitiveTab: Story = { name: '탭 단위 요소', render: (args) => <div className="tabs_list" role="tablist" aria-label="탭 단위 요소"><TabsTab active>개요</TabsTab><TabsTab>팀</TabsTab><TabsTab disabled>관리자</TabsTab></div> };
export const Dynamic: Story = { name: '동적 패널', render: (args) => <Stack><Tabs mode="dynamic" items={dynamicItems} ariaLabel="동적 탭 (items)" panel={dynamicPanel} /><Tabs mode="dynamic" ariaLabel="동적 탭 (TabMenu)" panel={dynamicPanel}><TabMenu label="개요" value="overview" active /><TabMenu label="팀" value="team" /><TabMenu label="활동" value="activity" /></Tabs></Stack> };
export const IndicatorSlide: Story = { name: '슬라이드 인디케이터', render: (args) => <Stack><Tabs indicator="slide" layout="equal" ariaLabel="슬라이드 라인 탭"><Panel label="개요" active><p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p></Panel><Panel label="팀"><p>팀 구성원과 역할을 표시합니다.</p></Panel><Panel label="활동"><p>최근 활동 로그와 타임라인을 보여줍니다.</p></Panel></Tabs><Tabs variant="pill" indicator="slide" layout="equal" ariaLabel="슬라이드 필 탭"><Panel label="목록" active><p className="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p></Panel><Panel label="그리드"><p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p></Panel><Panel label="보드"><p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p></Panel></Tabs></Stack> };
export const LayoutEqual: Story = { name: '균등 분할', render: (args) => <Stack><Tabs layout="equal" ariaLabel="균등 분할 탭"><Panel label="개요" active>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</Panel><Panel label="팀 구성">팀 구성원과 역할을 표시합니다.</Panel><Panel label="활동 로그">최근 활동 로그와 타임라인을 보여줍니다.</Panel><Panel label="설정">프로젝트 설정을 관리합니다.</Panel></Tabs><Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭"><Panel label="일간" active>일간 통계</Panel><Panel label="주간">주간 통계</Panel><Panel label="월간">월간 통계</Panel><Panel label="연간">연간 통계</Panel></Tabs></Stack> };
export const LayoutScroll: Story = { name: '네비 스크롤', render: (args) => <Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭"><Panel label="홈" active>홈 패널</Panel><Panel label="제품 소개">제품 패널</Panel><Panel label="솔루션">솔루션 패널</Panel><Panel label="가격 정책">가격 패널</Panel><Panel label="고객 사례">고객 사례 패널</Panel><Panel label="리소스 센터">리소스 패널</Panel><Panel label="기술 지원">지원 패널</Panel></Tabs> };
export const Card: Story = { name: '카드', render: (args) => <Tabs variant="card" ariaLabel="계정 설정"><Panel label="프로필" active><p>이름, 아바타, 소개 문구를 수정합니다.</p></Panel><Panel label="보안"><p>비밀번호 변경과 2단계 인증을 설정합니다.</p></Panel><Panel label="알림"><p>이메일·푸시 알림 수신 여부를 관리합니다.</p></Panel></Tabs> };
export const Pill: Story = { name: '필', render: (args) => <Tabs variant="pill" ariaLabel="보기 모드"><Panel label="목록" active><p className="tabs_panel-placeholder">목록 뷰 콘텐츠</p></Panel><Panel label="그리드"><p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p></Panel><Panel label="보드"><p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p></Panel></Tabs> };
export const Size: Story = { name: '크기', render: (args) => <Stack><Tabs size="sm" ariaLabel="Small 탭"><Panel label="Small A" active>Small 탭 패널</Panel><Panel label="Small B">Small 탭 패널 B</Panel></Tabs><Tabs size="lg" ariaLabel="Large 탭"><Panel label="Large A" active>Large 탭 패널</Panel><Panel label="Large B">Large 탭 패널 B</Panel></Tabs></Stack> };
export const IconDemo: Story = { name: '아이콘', render: (args) => <Tabs ariaLabel="대시보드 섹션"><Panel label="대시보드" active icon={<Icon name="grid" className="tabs_icon" />}>대시보드 콘텐츠</Panel><Panel label="사용자" icon={<Icon name="user" className="tabs_icon" />}>사용자 콘텐츠</Panel><Panel label="문서" icon={<Icon name="book" className="tabs_icon" />}>문서 콘텐츠</Panel></Tabs> };
export const BadgeDemo: Story = { name: '배지', render: (args) => <Tabs ariaLabel="알림 센터"><Panel label="전체" active>전체 알림 목록</Panel><Panel label="읽지 않음" badge={<Badge count color="primary" label="12" />}>읽지 않은 알림</Panel><Panel label="중요" badge={<Badge dotOnly color="danger" ariaLabel="새 중요 알림" />}>중요 알림</Panel></Tabs> };
export const Extra: Story = { name: '추가 액션', render: (args) => <Tabs ariaLabel="파일 보기" extra={<Button variant="filled" color="primary" size="sm" label="새 파일" />}><Panel label="내 파일" active>내 파일 목록</Panel><Panel label="공유됨">공유된 파일 목록</Panel><Panel label="최근">최근 파일 목록</Panel></Tabs> };
export const Scroll: Story = { name: '스크롤바', render: (args) => <Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록"><Panel label="홈" active>홈 패널</Panel><Panel label="제품">제품 패널</Panel><Panel label="솔루션">솔루션 패널</Panel><Panel label="가격">가격 패널</Panel><Panel label="고객 사례">고객 사례 패널</Panel><Panel label="리소스">리소스 패널</Panel><Panel label="지원">지원 패널</Panel></Tabs> };
export const Disabled: Story = { name: '비활성', render: (args) => <Tabs ariaLabel="권한별 탭"><Panel label="공개" active>공개 콘텐츠</Panel><Panel label="팀">팀 전용 콘텐츠</Panel><Panel label="관리자" disabled>관리자 전용 콘텐츠</Panel></Tabs> };
export const Vertical: Story = { name: '수직', render: (args) => <Stack><Tabs vertical ariaLabel="수직 라인 탭"><Panel label="일반" active>일반 설정 패널</Panel><Panel label="보안">보안 설정 패널</Panel><Panel label="결제">결제 설정 패널</Panel></Tabs><Tabs vertical variant="card" ariaLabel="수직 카드 탭"><Panel label="문서" active>문서 관리 패널</Panel><Panel label="미디어">미디어 관리 패널</Panel><Panel label="아카이브">아카이브 패널</Panel></Tabs></Stack> };
export const Example: Story = {
  name: '조합 예시',
  args: { maxTabs: 4 } as any,
  parameters: { controls: { include: ['maxTabs'] } },
  argTypes: {
    maxTabs: {
      name: 'maxTabs',
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: '열 수 있는 최대 탭 개수입니다. 초과 시 알림 Modal을 표시합니다.',
      table: { category: '조합 예시' },
    } as any,
  },
  render: (args) => <EditableTabsExample maxTabs={Number((args as any).maxTabs) || 4} />,
};
