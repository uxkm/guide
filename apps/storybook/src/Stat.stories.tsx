import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualStat from '../../react/src/components/data-display/Stat/Stat.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Stat = ActualStat as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const meta = { title: '데이터 표시/Stat', component: Stat, parameters: { layout: 'fullscreen' }, args: { title: '총 사용자', value: '12,480' } } satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Basic: Story = { name: '기본', render: () => <Demo><Stat title="총 사용자" value="12,480" description="지난 30일 기준" /></Demo> };
export const PrefixSuffix: Story = { name: '접두·접미', render: () => <Demo><div className="stat_group stat_group-3"><Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" /><Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" /><Stat title="평균 응답 시간" value="128" suffix="ms" /></div></Demo> };
export const Trend: Story = { name: '추세', render: () => <Demo><div className="stat_group stat_group-2"><Stat title="신규 가입" value="1,234" trend="+15.3%" trendColor="success" /><Stat title="이탈률" value="2.4%" trend="+0.3%p" trendColor="danger" trendIcon={<Icon name="warning" />} /></div></Demo> };
export const Sizes: Story = { name: '크기', render: () => <Demo><div className="stat_group stat_group-3"><Stat size="sm" card title="Small" value="1,024" /><Stat card title="Medium" value="8,192" /><Stat size="lg" card title="Large" value="64K" /></div></Demo> };
export const Layouts: Story = { name: '레이아웃', render: () => <Demo><Stat className="stat_horizontal" card title="활성 세션" value="342" /><Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" /><Stat className="stat_row" card shadow><span className="stat_icon-wrap color_primary"><Icon name="user" /></span><div className="stat_body"><span className="stat_label">신규 사용자</span><span className="stat_value">1,284</span></div></Stat></Demo> };
export const WithIcon: Story = { name: '아이콘', render: () => <Demo><div className="stat_group stat_group-2"><Stat card><span className="stat_icon"><Icon name="star" /></span><span className="stat_label">즐겨찾기</span><span className="stat_value">128</span></Stat><Stat className="stat_row" card><span className="stat_icon-wrap color_success"><Icon name="check" /></span><div className="stat_body"><span className="stat_label">완료</span><span className="stat_value">84</span></div></Stat></div></Demo> };
export const Skins: Story = { name: '카드 스킨', render: () => <Demo><div className="stat_group stat_group-4"><Stat card title="기본 카드" value="1,200" /><Stat card shadow title="Shadow" value="980" /><Stat card className="stat_borderless" title="Borderless" value="456" /><Stat card className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" /></div></Demo> };
export const Group: Story = { name: '그룹', render: () => <Demo><div className="stat_group stat_group-4"><Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" /><Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" /><Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" /><Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" /></div><div className="stat_group stat_group-4 stat_group-divider"><Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" /></div></Demo> };
