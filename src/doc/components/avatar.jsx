export const docMeta = {
  title: 'Avatar | HTML Components',
  activeNav: 'avatar',
  pageTitle: 'Avatar',
};

import Avatar from '@/components/Avatar.jsx';
import AvatarGroup from '@/components/AvatarGroup.jsx';
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
        >
          <Avatar src={avatarSample} alt="홍길동" />
          <Avatar color="primary" initials="홍" ariaHidden />
          <Avatar color="default" ariaHidden icon={(
              <>
              <svg className="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."
        >
          <Avatar size="sm" color="primary" initials="A" ariaHidden />
          <Avatar color="primary" initials="B" ariaHidden />
          <Avatar size="lg" color="primary" initials="C" ariaHidden />
          <Avatar size="xl" color="primary" initials="D" ariaHidden />
        </DemoSection>

        <DemoSection
          headingId="shape-heading"
          title="형태"
          description="기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다."
        >
          <Avatar color="primary" initials="원" ariaHidden />
          <Avatar square color="primary" initials="각" ariaHidden />
          <Avatar square src={avatarSample} alt="홍길동" />
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."
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
          description="avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."
        >
          <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
          <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
          <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="avatar_group으로 여러 아바타를 겹쳐 표시합니다."
          stack
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
            <Avatar color="default" ariaHidden icon={(
              <>
              <svg className="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                          <path d="M12 5v14M5 12h14" />
                        </svg>
              </>
            )} />
          </AvatarGroup>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Avatar Props">
          <ApiTable columns={avatarPropColumns} rows={avatarProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-group-props-heading" title="API · AvatarGroup Props">
          <ApiTable columns={avatarGroupPropColumns} rows={avatarGroupProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Avatar Slots">
          <ApiTable columns={avatarSlotColumns} rows={avatarSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-group-slots-heading" title="API · AvatarGroup Slots">
          <ApiTable columns={avatarGroupSlotColumns} rows={avatarGroupSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={avatarClassColumns} rows={avatarClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={avatarTokenColumns} rows={avatarTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
