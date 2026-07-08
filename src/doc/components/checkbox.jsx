export const docMeta = {
  title: 'Checkbox | HTML Components',
  activeNav: 'checkbox',
  pageTitle: 'Checkbox',
};

import Checkbox from '@/components/Checkbox.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import FormLayout from '@/components/FormLayout.jsx';
import {
  checkboxClassColumns,
  checkboxClasses,
  checkboxPropColumns,
  checkboxProps,
  checkboxSlotColumns,
  checkboxSlots,
} from '@/doc/data/checkbox-api';

export default function CheckboxDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Checkbox</h1>
        <p className="lead">다중 선택을 위한 Checkbox 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, <strong>checkbox_block</strong> · <strong>checkbox_group_block</strong>으로 전체 너비를 사용합니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="기본은 <code>span.checkbox_control</code> + <code>label.checkbox_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.checkbox_control</code>로 input을 암묵 연결합니다. <code>checkbox_label-end</code>는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다."
          stack
        >
          <Checkbox checked label="기본 — checkbox" />
          <Checkbox labelEnd label="레이블 뒤 — checkbox_label-end" />
          <fieldset className="checkbox_group checkbox_group_horizontal">
            <Checkbox button checked label="버튼형" />
            <Checkbox button label="UI" />
            <Checkbox button label="UX" />
          </fieldset>
          <div className="checkbox_card" style={{ maxWidth: '360px' }}>
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-type-card-title">카드형 — checkbox_card</h3>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-type-card" checked ariaLabelledby="checkbox-type-card-title checkbox-type-card-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
            </article>
          </div>
        </DemoSection>

        <DemoSection
          headingId="label-end-heading"
          title="레이블 뒤"
          description="<code>checkbox_label-end</code>는 <code>checkbox_label</code> → <code>checkbox_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>checkbox_block</code> 또는 <code>checkbox_group_block</code>을 추가합니다."
        >
          <Checkbox labelEnd checked label="푸시 알림 받기" />
          <Checkbox labelEnd>
            <span className="checkbox_content">
              <span className="checkbox_label">마케팅 정보 수신</span>
              <span className="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
            </span>
          </Checkbox>
          <fieldset className="checkbox_group checkbox_group_block" style={{ maxWidth: '360px', width: '100%' }}>
            <legend className="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
            <Checkbox labelEnd checked label="이메일 알림" />
            <Checkbox labelEnd checked label="푸시 알림" />
            <Checkbox labelEnd label="SMS 알림" />
          </fieldset>
          <Checkbox className="checkbox_sm" labelEnd checked label="Small — checkbox_sm" />
          <Checkbox className="checkbox_lg" labelEnd checked label="Large — checkbox_lg" />
        </DemoSection>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다."
        >
          <div className="form_field">
            <span className="form_field-label" id="checkbox-notify-label">알림 설정</span>
            <fieldset className="checkbox_group" aria-labelledby="checkbox-notify-label">
              <Checkbox checked>
                <span className="checkbox_content">
                  <span className="checkbox_label">이메일 알림</span>
                  <span className="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
                </span>
              </Checkbox>
              <Checkbox>
                <span className="checkbox_content">
                  <span className="checkbox_label">푸시 알림</span>
                  <span className="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
                </span>
              </Checkbox>
            </fieldset>
          </div>
        </DemoSection>

        <DemoSection
          headingId="standalone-heading"
          title="단독 사용"
          description="레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."
          stack
        >
          <Checkbox ariaLabel="항목 선택" />
          <Checkbox checked ariaLabel="선택됨" />
          <Checkbox disabled ariaLabel="비활성" />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다."
          stack
        >
          <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
          <Checkbox checked label="Medium — 기본" />
          <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
        </DemoSection>

        <DemoSection
          headingId="width-heading"
          title="너비"
          description="기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다."
        >
          <Checkbox checked label="기본 — 인라인 너비" />
          <Checkbox className="checkbox_block" checked label="checkbox_block — 전체 너비" />
          <fieldset className="checkbox_group checkbox_group_block" style={{ maxWidth: '360px', width: '100%' }}>
            <legend className="checkbox_group-legend">checkbox_group_block</legend>
            <Checkbox checked label="항목 1" />
            <Checkbox label="항목 2" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."
          stack
        >
          <Checkbox className="color_primary" checked label="Primary" />
          <Checkbox className="color_success" checked label="Success" />
          <Checkbox className="color_danger" checked label="Danger" />
          <Checkbox className="color_warning" checked label="Warning" />
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다."
          stack
        >
          <Checkbox label="미선택" />
          <Checkbox checked label="선택됨" />
          <Checkbox checked indeterminate label="불확정" />
          <Checkbox disabled label="비활성" />
          <Checkbox checked disabled label="선택됨 (비활성)" />
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다."
          stack
        >
          <fieldset className="checkbox_group">
            <legend className="checkbox_group-legend">관심 분야 (세로)</legend>
            <Checkbox checked label="디자인" />
            <Checkbox label="개발" />
            <Checkbox label="기획" />
          </fieldset>
          <fieldset className="checkbox_group checkbox_group_horizontal">
            <legend className="checkbox_group-legend">언어 (가로)</legend>
            <Checkbox button checked label="한국어" />
            <Checkbox button checked label="English" />
            <Checkbox button label="日本語" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="button-type-heading"
          title="버튼형"
          description="checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."
          stack
        >
          <fieldset className="checkbox_group checkbox_group_horizontal">
            <Checkbox button checked label="전체" />
            <Checkbox button label="진행 중" />
            <Checkbox button label="완료" />
            <Checkbox button disabled label="보류 (비활성)" />
          </fieldset>
          <fieldset className="checkbox_group checkbox_group_horizontal">
            <Checkbox button className="checkbox_sm color_success" checked label="Small" />
            <Checkbox button className="color_success" checked label="Medium" />
            <Checkbox button className="checkbox_lg color_success" checked label="Large" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="card-type-heading"
          title="카드형"
          description="<code>div.checkbox_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.checkbox_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.checkbox_card.checkbox_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다."
          stack
          >
          <fieldset className="checkbox_group">
                <legend className="checkbox_group-legend">요금제 선택 (다중)</legend>
                <div className="card_deck card_deck-2">
                  <div className="checkbox_card">
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-plan-basic-title">Basic</h3>
                          <p className="card_subtitle">월 9,000원</p>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked ariaLabelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
                    </article>
                  </div>
                  <div className="checkbox_card color_primary">
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-plan-pro-title">Pro</h3>
                          <p className="card_subtitle">월 29,000원</p>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-plan-pro" name="plan" value="pro" ariaLabelledby="checkbox-plan-pro-title checkbox-plan-pro-desc" />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
                    </article>
                  </div>
                  <div className="checkbox_card">
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-plan-enterprise-title">Enterprise</h3>
                          <p className="card_subtitle">별도 문의</p>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled ariaLabelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc" />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
                    </article>
                  </div>
                </div>
              </fieldset>

              <fieldset className="checkbox_group">
                <legend className="checkbox_group-legend">권한 (가로)</legend>
                <div className="card_deck card_deck-3">
                  <div className="checkbox_card color_success">
                    <article className="card card_compact">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-perm-read-title">읽기</h3>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-perm-read" checked ariaLabelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-perm-read-desc">조회 권한</div>
                    </article>
                  </div>
                  <div className="checkbox_card color_success">
                    <article className="card card_compact">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-perm-write-title">쓰기</h3>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-perm-write" checked ariaLabelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-perm-write-desc">수정 권한</div>
                    </article>
                  </div>
                  <div className="checkbox_card">
                    <article className="card card_compact">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-perm-delete-title">삭제</h3>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-perm-delete" ariaLabelledby="checkbox-perm-delete-title checkbox-perm-delete-desc" />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-perm-delete-desc">삭제 권한</div>
                    </article>
                  </div>
                </div>
              </fieldset>

              <fieldset className="checkbox_group">
                <legend className="checkbox_group-legend">요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)</legend>
                <div className="card_deck card_deck-2">
                  <div className="checkbox_card checkbox_card-clickable" data-ripple>
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-plan-full-basic-title">Basic</h3>
                          <p className="card_subtitle">월 9,000원</p>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked ariaLabelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
                    </article>
                  </div>
                  <div className="checkbox_card checkbox_card-clickable color_primary" data-ripple>
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-plan-full-pro-title">Pro</h3>
                          <p className="card_subtitle">월 29,000원</p>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-plan-full-pro" name="plan-clickable" value="pro" ariaLabelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
                    </article>
                  </div>
                  <div className="checkbox_card checkbox_card-clickable" data-ripple>
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="checkbox-plan-full-enterprise-title">Enterprise</h3>
                          <p className="card_subtitle">별도 문의</p>
                        </div>
                        <div className="card_extra">
                          <Checkbox id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled ariaLabelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
                    </article>
                  </div>
                </div>
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
              <span className="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
              <fieldset className="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
                <Checkbox checked label="마케팅 정보 수신" />
                <Checkbox label="뉴스레터 구독" />
              </fieldset>
            </div>
          </FormLayout>
          <FormLayout layout="horizontal" fit>
            <div className="form_field">
              <span className="form_field-label" id="checkbox-form-horizontal-label">권한</span>
              <fieldset className="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
                <Checkbox button checked label="조회" />
                <Checkbox button label="편집" />
              </fieldset>
            </div>
          </FormLayout>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={checkboxPropColumns} rows={checkboxProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={checkboxSlotColumns} rows={checkboxSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={checkboxClassColumns} rows={checkboxClasses} codeColumn="name" />
        </ApiSection>
    </>
  );
}
