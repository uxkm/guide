import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualAvatar from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualCard, { CardBody as ActualCardBody, CardFooter as ActualCardFooter, CardHeader as ActualCardHeader } from '../../react/src/components/data-display/Card/Card.jsx';
import ActualStat from '../../react/src/components/data-display/Stat/Stat.jsx';
import ActualTag, { TagGroup as ActualTagGroup } from '../../react/src/components/data-display/Tag/Tag.jsx';

const Avatar = ActualAvatar as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Card = ActualCard as React.ComponentType<any>;
const CardBody = ActualCardBody as React.ComponentType<any>;
const CardFooter = ActualCardFooter as React.ComponentType<any>;
const CardHeader = ActualCardHeader as React.ComponentType<any>;
const Stat = ActualStat as React.ComponentType<any>;
const Tag = ActualTag as React.ComponentType<any>;
const TagGroup = ActualTagGroup as React.ComponentType<any>;

const MediaIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>;
const DocIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>;
const BoltIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
const ShieldIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const MoreIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>;

const meta = {
  title: '데이터 표시/Card', component: Card, parameters: { layout: 'fullscreen' },
  args: { variant: 'bordered', size: 'md', hoverable: false, title: '제목', subtitle: '부제목', tag: 'article' },
  argTypes: {
    variant: { control: 'select', options: ['bordered', 'shadow', 'flat'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'compact'] },
    tag: { control: 'select', options: ['article', 'section', 'div'] }
  }
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="card-demo">{children}</div>;

export const Playground: Story = { render: (args) => <Demo><Card {...args}><CardHeader title="카드 제목" /><CardBody><p>카드 본문입니다.</p></CardBody></Card></Demo> };
export const Basic: Story = { name: '기본', render: () => <Demo><Card style={{ maxWidth: 360, width: '100%' }}><CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" /><CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody><CardFooter><Button variant="filled" color="primary" size="sm" label="확인" /><Button variant="ghost" size="sm" label="취소" /></CardFooter></Card></Demo> };
export const Simple: Story = { name: '간단', render: () => <Demo><Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}><CardBody><p className="card_title">알림</p>새로운 메시지가 도착했습니다. 확인해 주세요.</CardBody></Card><Card size="compact" style={{ maxWidth: 280, width: '100%' }}><CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody></Card></Demo> };
export const Skin: Story = { name: '스킨', render: () => <Demo><div className="card_deck card_deck-2"><Card><CardBody>기본 — 테두리 · 그림자</CardBody></Card><Card variant="shadow"><CardBody>Shadow — 그림자</CardBody></Card><Card className="card_elevated"><CardBody>Elevated — 강한 그림자</CardBody></Card><Card variant="flat"><CardBody>Ghost — 투명 배경</CardBody></Card></div></Demo> };
export const Size: Story = { name: '크기', render: () => <Demo><div className="card_deck card_deck-2"><Card size="sm"><CardHeader title="Small" /><CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody></Card><Card><CardHeader title="Medium" /><CardBody>기본 크기 카드입니다.</CardBody></Card><Card size="lg"><CardHeader title="Large" /><CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody></Card></div></Demo> };
export const Accent: Story = { name: '강조 테두리', render: () => <Demo><div className="card_deck card_deck-2"><Card className="card_accent color_primary"><CardBody><p className="card_title">정보</p>시스템 업데이트가 예정되어 있습니다.</CardBody></Card><Card className="card_accent color_success"><CardBody><p className="card_title">성공</p>작업이 정상적으로 완료되었습니다.</CardBody></Card><Card className="card_accent color_warning"><CardBody><p className="card_title">주의</p>저장 공간이 부족합니다.</CardBody></Card><Card className="card_accent color_danger"><CardBody><p className="card_title">오류</p>연결에 실패했습니다. 다시 시도해 주세요.</CardBody></Card></div></Demo> };
export const Media: Story = { name: '미디어', render: () => <Demo><Card hoverable variant="shadow" style={{ maxWidth: 320, width: '100%' }} media={<div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">{MediaIcon}</div>}><CardHeader><div className="card_header-row"><h3 className="card_title">프로젝트 Alpha</h3><Tag size="sm" color="primary" label="진행 중" /></div><p className="card_subtitle">업데이트 · 2일 전</p></CardHeader><CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody><CardFooter between><span className="color_muted size_sm">3명 참여</span><Button variant="text" color="primary" size="sm" label="자세히" /></CardFooter></Card></Demo> };
export const Horizontal: Story = { name: '가로', render: () => <Demo><Card className="card_horizontal" variant="shadow" style={{ maxWidth: 480, width: '100%' }} media={<div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">{DocIcon}</div>}><div className="card_inner"><CardHeader title="가이드 문서" /><CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody><CardFooter><a href="#" className="link color_primary size_sm" onClick={(event) => event.preventDefault()}>문서 보기</a></CardFooter></div></Card></Demo> };
export const IconStat: Story = { name: '아이콘 · 통계', render: () => <Demo><div className="card_deck"><Card variant="shadow" hoverable><CardBody><span className="card_icon color_primary" aria-hidden="true">{BoltIcon}</span><h3 className="card_title">빠른 성능</h3><p className="card_subtitle">가벼운 번들, 빠른 로딩</p></CardBody></Card><Card variant="shadow" hoverable><CardBody><span className="card_icon color_success" aria-hidden="true">{ShieldIcon}</span><h3 className="card_title">접근성</h3><p className="card_subtitle">WCAG 2.2 AA 기준</p></CardBody></Card><Card variant="shadow"><CardBody><Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trendColor="success" /></CardBody></Card></div></Demo> };
export const Profile: Story = { name: '프로필', render: () => <Demo><Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}><CardHeader extra={<Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={MoreIcon} />}><div className="card_header-row"><Avatar color="primary" initials="홍" ariaHidden /><div><h3 className="card_title">홍길동</h3><p className="card_subtitle">프론트엔드 개발자</p></div></div></CardHeader><CardBody><TagGroup tight><Tag size="sm" color="primary" label="React" /><Tag size="sm" color="primary" label="TypeScript" /><Tag size="sm" color="default" label="SCSS" /></TagGroup></CardBody><CardFooter between><span className="color_muted size_sm">서울 · 온라인</span><Button variant="outline" color="primary" size="sm" label="팔로우" /></CardFooter></Card></Demo> };
export const Clickable: Story = { name: '클릭 가능', render: () => <Demo><div className="card_deck card_deck-2"><Card tag="a" href="#" hoverable className="card_clickable" onClick={(event: React.MouseEvent) => event.preventDefault()}><CardBody><h3 className="card_title">링크 카드</h3><p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p></CardBody></Card><Card hoverable variant="shadow" className="card_clickable" tabIndex={0} role="link"><CardBody><h3 className="card_title">인터랙티브 카드</h3><p className="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p></CardBody></Card></div></Demo> };
export const Disabled: Story = { name: '비활성', render: () => <Demo><Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}><CardBody><h3 className="card_title">비활성 카드</h3><p className="card_subtitle">현재 이용할 수 없습니다.</p></CardBody></Card></Demo> };
export const Grid: Story = { name: '카드 그리드', render: () => <Demo><div className="card_deck"><Card hoverable><CardHeader title="Feature A" /><CardBody>빠른 성능과 가벼운 번들 크기.</CardBody></Card><Card hoverable><CardHeader title="Feature B" /><CardBody>접근성을 고려한 마크업 구조.</CardBody></Card><Card hoverable><CardHeader title="Feature C" /><CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody></Card></div></Demo> };
