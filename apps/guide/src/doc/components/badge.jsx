export const docMeta = {
  title: 'Badge | UXKM Guide',
  activeNav: 'badge',
  pageTitle: 'Badge',
};

import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Badge from '@uxkm/ui-react/components/Badge.jsx';
import BadgeWrap from '@uxkm/ui-react/components/BadgeWrap.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
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

const basicCode = "import Badge from '@uxkm/ui-react/components/Badge.jsx';\n\nexport function BasicExample() {\n  return (\n    <>\n      <Badge color=\"default\" label=\"Default\" />\n      <Badge color=\"primary\" label=\"Primary\" />\n      <Badge color=\"success\" label=\"Success\" />\n      <Badge color=\"warning\" label=\"Warning\" />\n      <Badge color=\"danger\" label=\"Danger\" />\n      <Badge color=\"info\" label=\"Info\" />\n    </>\n  );\n}";

const sizeCode = "import Badge from '@uxkm/ui-react/components/Badge.jsx';\n\nexport function SizeExample() {\n  return (\n    <>\n      <Badge size=\"sm\" color=\"primary\" label=\"Small\" />\n      <Badge color=\"primary\" label=\"Medium\" />\n      <Badge size=\"lg\" color=\"primary\" label=\"Large\" />\n    </>\n  );\n}";

const dotCode = "import Badge from '@uxkm/ui-react/components/Badge.jsx';\n\nexport function DotExample() {\n  return (\n    <>\n      <Badge dot color=\"primary\" label=\"Online\" />\n      <Badge dot color=\"success\" label=\"Active\" />\n      <Badge dot color=\"warning\" label=\"Away\" />\n      <Badge dot color=\"danger\" label=\"Offline\" />\n    </>\n  );\n}";

const countCode = "import Badge from '@uxkm/ui-react/components/Badge.jsx';\n\nexport function CountExample() {\n  return (\n    <>\n      <Badge count color=\"danger\" label=\"3\" />\n      <Badge count color=\"primary\" label=\"12\" />\n      <Badge count color=\"success\" label=\"99+\" />\n      <Badge count size=\"sm\" color=\"danger\" label=\"5\" />\n      <Badge count size=\"lg\" color=\"primary\" label=\"New\" />\n    </>\n  );\n}";

const wrapCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\nimport Badge from '@uxkm/ui-react/components/Badge.jsx';\nimport BadgeWrap from '@uxkm/ui-react/components/BadgeWrap.jsx';\nimport Button from '@uxkm/ui-react/components/Button.jsx';\nimport Icon from '@uxkm/ui-react/components/Icon.jsx';\n\nexport function WrapExample() {\n  return (\n    <>\n      <BadgeWrap>\n        <Button variant=\"filled\" color=\"primary\" label=\"알림\" />\n        <Badge count color=\"danger\" ariaLabel=\"읽지 않은 알림 5건\" label=\"5\" />\n      </BadgeWrap>\n      <BadgeWrap>\n        <Button\n          variant=\"ghost\"\n          iconOnly\n          ariaLabel=\"메시지\"\n          iconBefore={<Icon name=\"message\" />}\n        />\n        <Badge count color=\"danger\" ariaLabel=\"새 메시지 12건\" label=\"12\" />\n      </BadgeWrap>\n      <BadgeWrap>\n        <Avatar color=\"primary\" initials=\"홍\" ariaHidden />\n        <Badge dotOnly color=\"success\" ariaLabel=\"온라인\" />\n      </BadgeWrap>\n    </>\n  );\n}";

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
          code={basicCode}
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
          description="size prop으로 badge_sm · badge_lg 스케일을 조절합니다."
          code={sizeCode}
        >
          <Badge size="sm" color="primary" label="Small" />
          <Badge color="primary" label="Medium" />
          <Badge size="lg" color="primary" label="Large" />
        </DemoSection>

        <DemoSection
          headingId="dot-heading"
          title="Dot 배지"
          description="dot prop으로 상태 표시용 점이 포함된 배지를 만듭니다."
          code={dotCode}
        >
          <Badge dot color="primary" label="Online" />
          <Badge dot color="success" label="Active" />
          <Badge dot color="warning" label="Away" />
          <Badge dot color="danger" label="Offline" />
        </DemoSection>

        <DemoSection
          headingId="count-heading"
          title="카운트"
          description="count prop으로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."
          code={countCode}
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
          description="BadgeWrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."
          code={wrapCode}
        >
          <BadgeWrap>
            <Button variant="filled" color="primary" label="알림" />
            <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
          </BadgeWrap>

          <BadgeWrap>
            <Button
              variant="ghost"
              iconOnly
              ariaLabel="메시지"
              iconBefore={<Icon name="message" />}
            />
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

        <ApiSection headingId="api-children-heading" title="API · Badge Children">
          <ApiTable columns={badgeSlotColumns} rows={badgeSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-wrap-children-heading" title="API · BadgeWrap Children">
          <ApiTable columns={badgeWrapSlotColumns} rows={badgeWrapSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={badgeClassColumns} rows={badgeClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={badgeTokenColumns} rows={badgeTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
