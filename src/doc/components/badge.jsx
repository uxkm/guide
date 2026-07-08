export const docMeta = {
  title: 'Badge | HTML Components',
  activeNav: 'badge',
  pageTitle: 'Badge',
};

import Avatar from '@/components/Avatar.jsx';
import Badge from '@/components/Badge.jsx';
import BadgeWrap from '@/components/BadgeWrap.jsx';
import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@/components/Icon.jsx';
import {
  badgeClassColumns,
  badgeClasses,
  badgePropColumns,
  badgeProps,
  badgeSlotColumns,
  badgeSlots,
  badgeTokenColumns,
  badgeTokens,
  badgeWrapPropColumns,
  badgeWrapProps,
  badgeWrapSlotColumns,
  badgeWrapSlots,
} from '@/doc/data/badge-api';

export default function BadgeDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Badge</h1>
          <p className="lead">상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="공통 color_* 클래스로 의미에 따른 색상을 적용합니다."
        >
          <Badge color="default" label="Default" />
          <Badge color="primary" label="Primary" />
          <Badge color="success" label="Success" />
          <Badge color="warning" label="Warning" />
          <Badge color="danger" label="Danger" />
          <Badge color="info" label="Info" />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="badge_sm · badge_lg로 스케일을 조절합니다."
        >
          <Badge size="sm" color="primary" label="Small" />
          <Badge color="primary" label="Medium" />
          <Badge size="lg" color="primary" label="Large" />
        </DemoSection>

        <DemoSection
          headingId="dot-heading"
          title="Dot 배지"
          description="badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다."
        >
          <Badge dot color="primary" label="Online" />
          <Badge dot color="success" label="Active" />
          <Badge dot color="warning" label="Away" />
          <Badge dot color="danger" label="Offline" />
        </DemoSection>

        <DemoSection
          headingId="count-heading"
          title="카운트"
          description="badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."
        >
          <Badge count color="danger" label="3" />
          <Badge count color="primary" label="12" />
          <Badge count color="success" label="99+" />
          <Badge count size="sm" color="danger" label="5" />
          <Badge count size="lg" color="primary" label="New" />
        </DemoSection>

        <DemoSection
          headingId="wrap-heading"
          title="겹침 표시"
          description="badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."
        >
          <BadgeWrap>
            <Button variant="filled" color="primary" label="알림" />
            <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
          </BadgeWrap>

          <BadgeWrap>
            <Button variant="ghost" iconOnly ariaLabel="메시지" iconBefore={(
              <>
              <Icon>
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </Icon>
              </>
            )} />
            <Badge count color="danger" ariaLabel="새 메시지 12건" label="12" />
          </BadgeWrap>

          <BadgeWrap>
            <Avatar color="primary" initials="홍" ariaHidden />
            <Badge dotOnly color="success" ariaLabel="온라인" />
          </BadgeWrap>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Badge Props">
          <ApiTable columns={badgePropColumns} rows={badgeProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-wrap-props-heading" title="API · BadgeWrap Props">
          <ApiTable columns={badgeWrapPropColumns} rows={badgeWrapProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Badge Slots">
          <ApiTable columns={badgeSlotColumns} rows={badgeSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-wrap-slots-heading" title="API · BadgeWrap Slots">
          <ApiTable columns={badgeWrapSlotColumns} rows={badgeWrapSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={badgeClassColumns} rows={badgeClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={badgeTokenColumns} rows={badgeTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
