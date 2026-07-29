export const docMeta = {
  title: 'Avatar | UXKM Guide',
  activeNav: 'avatar',
  pageTitle: 'Avatar',
};

import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import AvatarGroup from '@uxkm/ui-react/components/AvatarGroup.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  avatarClassColumns,
  avatarClasses,
  avatarGroupPropColumns,
  avatarGroupProps,
  avatarGroupSlotColumns,
  avatarGroupSlots,
  avatarPropColumns,
  avatarProps,
  avatarSlotColumns,
  avatarSlots,
  avatarTokenColumns,
  avatarTokens,
} from '@/doc/data/avatar-api';

const basicCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\nimport Icon from '@uxkm/ui-react/components/Icon.jsx';\nimport { avatarSample } from '@images';\n\nexport function BasicExample() {\n  return (\n    <>\n      <Avatar src={avatarSample} alt=\"홍길동\" />\n      <Avatar color=\"primary\" initials=\"홍\" ariaHidden />\n      <Avatar\n        color=\"default\"\n        ariaHidden\n        icon={<Icon name=\"user\" className=\"avatar_icon\" />}\n      />\n    </>\n  );\n}";

const sizeCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\n\nexport function SizeExample() {\n  return (\n    <>\n      <Avatar size=\"sm\" color=\"primary\" initials=\"A\" ariaHidden />\n      <Avatar color=\"primary\" initials=\"B\" ariaHidden />\n      <Avatar size=\"lg\" color=\"primary\" initials=\"C\" ariaHidden />\n      <Avatar size=\"xl\" color=\"primary\" initials=\"D\" ariaHidden />\n    </>\n  );\n}";

const shapeCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\nimport { avatarSample } from '@images';\n\nexport function ShapeExample() {\n  return (\n    <>\n      <Avatar color=\"primary\" initials=\"원\" ariaHidden />\n      <Avatar square color=\"primary\" initials=\"각\" ariaHidden />\n      <Avatar square src={avatarSample} alt=\"홍길동\" />\n    </>\n  );\n}";

const colorCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\n\nexport function ColorExample() {\n  return (\n    <>\n      <Avatar color=\"default\" initials=\"D\" ariaHidden />\n      <Avatar color=\"primary\" initials=\"P\" ariaHidden />\n      <Avatar color=\"success\" initials=\"S\" ariaHidden />\n      <Avatar color=\"warning\" initials=\"W\" ariaHidden />\n      <Avatar color=\"danger\" initials=\"E\" ariaHidden />\n    </>\n  );\n}";

const badgeCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\n\nexport function BadgeExample() {\n  return (\n    <>\n      <Avatar color=\"primary\" initials=\"온\" badgeColor=\"success\" badgeLabel=\"온라인\" ariaHidden />\n      <Avatar color=\"default\" initials=\"대\" badgeColor=\"warning\" badgeLabel=\"자리 비움\" ariaHidden />\n      <Avatar color=\"default\" initials=\"오\" badgeColor=\"danger\" badgeLabel=\"오프라인\" ariaHidden />\n    </>\n  );\n}";

const groupCode = "import Avatar from '@uxkm/ui-react/components/Avatar.jsx';\nimport AvatarGroup from '@uxkm/ui-react/components/AvatarGroup.jsx';\nimport Icon from '@uxkm/ui-react/components/Icon.jsx';\nimport { avatarSample } from '@images';\n\nexport function GroupExample() {\n  return (\n    <>\n      <AvatarGroup ariaLabel=\"팀 멤버 4명\">\n        <Avatar color=\"primary\" initials=\"김\" ariaHidden />\n        <Avatar color=\"success\" initials=\"이\" ariaHidden />\n        <Avatar color=\"warning\" initials=\"박\" ariaHidden />\n        <Avatar color=\"danger\" initials=\"최\" ariaHidden />\n      </AvatarGroup>\n      <AvatarGroup ariaLabel=\"팀 멤버 3명\">\n        <Avatar src={avatarSample} alt=\"홍길동\" />\n        <Avatar color=\"primary\" initials=\"홍\" ariaHidden />\n        <Avatar\n          color=\"default\"\n          ariaHidden\n          icon={<Icon name=\"plus\" className=\"avatar_icon\" />}\n        />\n      </AvatarGroup>\n    </>\n  );\n}";

export default function AvatarDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Avatar</h1>
          <p className="lead">사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."
          code={basicCode}
        >
          <Avatar src={avatarSample} alt="홍길동" />
          <Avatar color="primary" initials="홍" ariaHidden />
          <Avatar
            color="default"
            ariaHidden
            icon={<Icon name="user" className="avatar_icon" />}
          />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."
          code={sizeCode}
        >
          <Avatar size="sm" color="primary" initials="A" ariaHidden />
          <Avatar color="primary" initials="B" ariaHidden />
          <Avatar size="lg" color="primary" initials="C" ariaHidden />
          <Avatar size="xl" color="primary" initials="D" ariaHidden />
        </DemoSection>

        <DemoSection
          headingId="shape-heading"
          title="형태"
          description="기본은 원형이며, square prop으로 avatar_square(둥근 모서리)를 적용합니다."
          code={shapeCode}
        >
          <Avatar color="primary" initials="원" ariaHidden />
          <Avatar square color="primary" initials="각" ariaHidden />
          <Avatar square src={avatarSample} alt="홍길동" />
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."
          code={colorCode}
        >
          <Avatar color="default" initials="D" ariaHidden />
          <Avatar color="primary" initials="P" ariaHidden />
          <Avatar color="success" initials="S" ariaHidden />
          <Avatar color="warning" initials="W" ariaHidden />
          <Avatar color="danger" initials="E" ariaHidden />
        </DemoSection>

        <DemoSection
          headingId="badge-heading"
          title="상태 배지"
          description="badgeColor · badgeLabel prop으로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."
          code={badgeCode}
        >
          <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
          <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
          <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="AvatarGroup으로 여러 아바타를 겹쳐 표시합니다."
          stack
          code={groupCode}
        >
          <AvatarGroup ariaLabel="팀 멤버 4명">
            <Avatar color="primary" initials="김" ariaHidden />
            <Avatar color="success" initials="이" ariaHidden />
            <Avatar color="warning" initials="박" ariaHidden />
            <Avatar color="danger" initials="최" ariaHidden />
          </AvatarGroup>

          <AvatarGroup ariaLabel="팀 멤버 3명">
            <Avatar src={avatarSample} alt="홍길동" />
            <Avatar color="primary" initials="홍" ariaHidden />
            <Avatar
              color="default"
              ariaHidden
              icon={<Icon name="plus" className="avatar_icon" />}
            />
          </AvatarGroup>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Avatar Props">
          <ApiTable columns={avatarPropColumns} rows={avatarProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-group-props-heading" title="API · AvatarGroup Props">
          <ApiTable columns={avatarGroupPropColumns} rows={avatarGroupProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-children-heading" title="API · Avatar Children">
          <ApiTable columns={avatarSlotColumns} rows={avatarSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-group-children-heading" title="API · AvatarGroup Children">
          <ApiTable columns={avatarGroupSlotColumns} rows={avatarGroupSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={avatarClassColumns} rows={avatarClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={avatarTokenColumns} rows={avatarTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
