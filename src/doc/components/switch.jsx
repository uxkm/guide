export const docMeta = {
  title: 'Switch | HTML Components',
  activeNav: 'switch',
  pageTitle: 'Switch',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import FormLayout from '@/components/FormLayout.jsx';
import Switch from '@/components/Switch.jsx';
import {
  switchClassColumns,
  switchClasses,
  switchPropColumns,
  switchProps,
  switchSlotColumns,
  switchSlots,
  switchTokenColumns,
  switchTokens,
} from '@/doc/data/switch-api';

export default function SwitchDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Switch</h1>
        <p className="lead">켜기/끄기를 표현하는 Switch 컴포넌트입니다. <code>type="checkbox"</code>와 <code>role="switch"</code>를 사용하며, 기본 너비는 인라인(콘텐츠)이며 <strong>switch_block</strong> · <strong>switch_group_block</strong>으로 전체 너비를 사용합니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="기본은 <code>switch_control</code> → <code>switch_label</code> 순서입니다. <code>switch_label-end</code>는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다."
          stack
        >
          <Switch checked label="기본 — switch" />
          <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
        </DemoSection>

        <DemoSection
          headingId="label-end-heading"
          title="레이블 뒤"
          description="<code>switch_label-end</code>는 <code>switch_label</code> → <code>switch_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>switch_block</code> 또는 <code>switch_group_block</code>을 추가합니다."
        >
          <Switch labelEnd checked label="푸시 알림 받기" />
          <Switch labelEnd>
            <span className="switch_content">
              <span className="switch_label">마케팅 정보 수신</span>
              <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
            </span>
          </Switch>

          <fieldset className="switch_group switch_group_block" style={{ maxWidth: '360px', width: '100%' }}>
            <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd checked label="푸시 알림" />
            <Switch labelEnd label="SMS 알림" />
          </fieldset>

          <Switch labelEnd size="sm" checked label="Small — switch_sm" />
          <Switch labelEnd size="lg" checked label="Large — switch_lg" />
        </DemoSection>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다."
        >
          <Switch checked label="다크 모드" />
          <Switch label="자동 저장" />
        </DemoSection>

        <DemoSection
          headingId="standalone-heading"
          title="단독 사용"
          description="레이블 없이 스위치만 사용할 수 있습니다. <code>aria-label</code>로 접근 가능한 이름을 지정합니다."
          stack
        >
          <Switch ariaLabel="기능 켜기" />
          <Switch checked ariaLabel="기능 끄기" />
          <Switch disabled ariaLabel="비활성" />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다."
          stack
        >
          <Switch labelEnd size="sm" checked label="Small — switch_sm" />
          <Switch labelEnd checked label="Medium — 기본" />
          <Switch labelEnd size="lg" checked label="Large — switch_lg" />
        </DemoSection>

        <DemoSection
          headingId="width-heading"
          title="너비"
          description="기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다."
        >
          <Switch labelEnd checked label="기본 — 인라인 너비" />
          <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />

          <fieldset className="switch_group switch_group_block" style={{ maxWidth: '360px', width: '100%' }}>
            <legend className="switch_group-legend">switch_group_block</legend>
            <Switch labelEnd checked label="Wi-Fi" />
            <Switch labelEnd label="블루투스" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다."
          stack
        >
          <Switch className="color_primary" labelEnd checked label="Primary" />
          <Switch className="color_success" labelEnd checked label="Success" />
          <Switch className="color_danger" labelEnd checked label="Danger" />
          <Switch className="color_warning" labelEnd checked label="Warning" />
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다."
          stack
        >
          <Switch labelEnd label="꺼짐" />
          <Switch labelEnd checked label="켜짐" />
          <Switch labelEnd disabled label="비활성" />
          <Switch labelEnd checked disabled label="켜짐 (비활성)" />
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다."
          stack
        >
          <fieldset className="switch_group switch_group_block" style={{ maxWidth: '400px', width: '100%' }}>
            <legend className="switch_group-legend">개인정보 설정</legend>
            <Switch labelEnd checked>
              <span className="switch_content">
                <span className="switch_label">프로필 공개</span>
                <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
              </span>
            </Switch>
            <Switch labelEnd>
              <span className="switch_content">
                <span className="switch_label">활동 기록 표시</span>
                <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
              </span>
            </Switch>
            <Switch labelEnd checked label="검색 허용" />
          </fieldset>

          <fieldset className="switch_group switch_group_block switch_group_compact" style={{ maxWidth: '400px', width: '100%' }}>
            <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
            <Switch labelEnd label="고대비 모드" />
            <Switch labelEnd label="애니메이션 줄이기" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="form-heading"
          title="폼 레이아웃"
          description="form_vertical · form_horizontal과 함께 사용합니다."
          stack
        >
          <FormLayout layout="vertical" fit>
            <div className="form_field">
              <span className="form_field-label" id="switch-form-vertical-label">알림</span>
              <fieldset className="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
                <Switch labelEnd checked label="이메일 알림" />
                <Switch labelEnd label="푸시 알림" />
              </fieldset>
            </div>
          </FormLayout>

          <FormLayout layout="horizontal" fit>
            <div className="form_field">
              <span className="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
              <Switch labelEnd checked label="편집 내용 자동 저장" ariaLabelledby="switch-form-horizontal-label" />
            </div>
          </FormLayout>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={switchPropColumns} rows={switchProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={switchSlotColumns} rows={switchSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={switchClassColumns} rows={switchClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={switchTokenColumns} rows={switchTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}
