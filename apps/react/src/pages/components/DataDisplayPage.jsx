import { Avatar, AvatarGroup } from '@uxkm/react/avatar';
import Badge from '@uxkm/react/badge';
import {
  Calendar,
  CalendarHeader,
  CalendarMonth,
  CalendarWeekdays,
} from '@uxkm/react/calendar';
import Card from '@uxkm/react/card';
import { List, ListItem } from '@uxkm/react/list';
import Stat from '@uxkm/react/stat';
import Table from '@uxkm/react/table';
import Tag from '@uxkm/react/tag';
import { Timeline, TimelineItem } from '@uxkm/react/timeline';
import { Tree, TreeNode } from '@uxkm/react/tree';
import { DemoSection } from '../../demo/DemoSection.jsx';
import { DemoLink } from '../../router/index.jsx';

export default function DataDisplayPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <DemoLink to="/components" className="link color_accent">
              컴포넌트
            </DemoLink>
            {' · Data Display'}
          </p>
          <h1>Data Display</h1>
          <p className="lead">데이터 표시 컴포넌트를 렌더합니다.</p>
        </header>

        <DemoSection id="avatar" title="Avatar" path="@uxkm/react/avatar">
          <AvatarGroup>
            <Avatar initials="AB" color="primary" />
            <Avatar initials="CD" color="success" />
          </AvatarGroup>
        </DemoSection>

        <DemoSection id="badge" title="Badge" path="@uxkm/react/badge">
          <Badge label="신규" />
        </DemoSection>

        <DemoSection id="tag" title="Tag" path="@uxkm/react/tag">
          <Tag label="태그" />
        </DemoSection>

        <DemoSection id="stat" title="Stat" path="@uxkm/react/stat">
          <Stat title="방문자" value="1,280" suffix="명" trend="+12%" trendColor="success" card />
        </DemoSection>

        <DemoSection id="card" title="Card" path="@uxkm/react/card">
          <Card title="카드 제목" subtitle="부제목">
            카드 본문 데모입니다.
          </Card>
        </DemoSection>

        <DemoSection id="list" title="List" path="@uxkm/react/list">
          <List bordered>
            <ListItem title="첫 번째 항목" description="설명 텍스트" />
            <ListItem title="두 번째 항목" description="설명 텍스트" />
          </List>
        </DemoSection>

        <DemoSection id="table" title="Table" path="@uxkm/react/table">
          <Table bordered>
            <thead>
              <tr>
                <th>이름</th>
                <th>역할</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>김민수</td>
                <td>디자이너</td>
              </tr>
              <tr>
                <td>이서연</td>
                <td>개발자</td>
              </tr>
            </tbody>
          </Table>
        </DemoSection>

        <DemoSection id="timeline" title="Timeline" path="@uxkm/react/timeline">
          <Timeline>
            <TimelineItem title="요청 접수" description="티켓이 생성되었습니다." time="09:00" active />
            <TimelineItem title="검토 중" description="담당자가 확인 중입니다." time="10:30" />
          </Timeline>
        </DemoSection>

        <DemoSection id="calendar" title="Calendar" path="@uxkm/react/calendar">
          <Calendar ariaLabel="데모 캘린더">
            <CalendarHeader title="2026년 9월" />
            <CalendarWeekdays />
            <CalendarMonth partial={14} selected={3} />
          </Calendar>
        </DemoSection>

        <DemoSection id="tree" title="Tree" path="@uxkm/react/tree">
          <Tree ariaLabel="데모 트리">
            <TreeNode label="문서" expanded>
              <TreeNode label="가이드" />
              <TreeNode label="API" />
            </TreeNode>
            <TreeNode label="설정" />
          </Tree>
        </DemoSection>

        <p>
          <DemoLink to="/components" className="link color_primary">
            ← 컴포넌트 목록
          </DemoLink>
        </p>
      </div>
    </main>
  );
}
