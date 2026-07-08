export const docMeta = {
  title: 'Radio | HTML Components',
  activeNav: 'radio',
  pageTitle: 'Radio',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import FormLayout from '@/components/FormLayout.jsx';
import Radio from '@/components/Radio.jsx';
import {
  radioClassColumns,
  radioClasses,
  radioPropColumns,
  radioProps,
  radioSlotColumns,
  radioSlots,
} from '@/doc/data/radio-api';

export default function RadioDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Radio</h1>
        <p className="lead">단일 선택을 위한 Radio 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, <strong>radio_block</strong> · <strong>radio_group_block</strong>으로 전체 너비를 사용합니다.</p>
      </div>

        <DemoSection
          headingId="type-heading"
          title="유형"
          description="기본은 <code>span.radio_control</code> + <code>label.radio_label for</code>(명시 연결) 순서입니다. 보이는 레이블이 없으면 <code>label.radio_control</code>로 input을 암묵 연결합니다. <code>radio_label-end</code>는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다."
          stack
        >
          <Radio name="radio-type-basic" checked label="기본 — radio" />
          <Radio name="radio-type-label-end" labelEnd label="레이블 뒤 — radio_label-end" />
          <fieldset className="radio_group radio_group_horizontal">
            <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
            <Radio button name="radio-type-btn" value="b" label="UI" />
            <Radio button name="radio-type-btn" value="c" label="UX" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="label-end-heading"
          title="레이블 뒤"
          description="<code>radio_label-end</code>는 <code>radio_label</code> → <code>radio_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>radio_block</code> 또는 <code>radio_group_block</code>을 추가합니다."
        >
          <Radio name="radio-label-end-pay" labelEnd checked label="신용카드" />
          <Radio name="radio-label-end-pay2" labelEnd>
            <span className="radio_content">
              <span className="radio_label">계좌이체</span>
              <span className="radio_hint">등록된 계좌로 결제합니다.</span>
            </span>
          </Radio>
          <fieldset className="radio_group radio_group_block" style={{ maxWidth: '360px', width: '100%' }}>
            <legend className="radio_group-legend">배송 방법 — radio_group_block</legend>
            <Radio name="radio-label-end-ship" labelEnd checked value="standard" label="일반 배송" />
            <Radio name="radio-label-end-ship" labelEnd value="express" label="빠른 배송" />
          </fieldset>
          <Radio className="radio_sm" name="radio-label-end-size" labelEnd checked label="Small — radio_sm" />
          <Radio className="radio_lg" name="radio-label-end-size2" labelEnd checked label="Large — radio_lg" />
        </DemoSection>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다."
        >
          <div className="form_field">
            <span className="form_field-label" id="radio-pay-label">결제 수단</span>
            <fieldset className="radio_group" aria-labelledby="radio-pay-label">
              <Radio name="radio-pay" checked value="card">
                <span className="radio_content">
                  <span className="radio_label">신용카드</span>
                  <span className="radio_hint">Visa · Mastercard · 국내 카드</span>
                </span>
              </Radio>
              <Radio name="radio-pay" value="bank">
                <span className="radio_content">
                  <span className="radio_label">계좌이체</span>
                  <span className="radio_hint">등록된 계좌로 결제합니다.</span>
                </span>
              </Radio>
            </fieldset>
          </div>
        </DemoSection>

        <DemoSection
          headingId="standalone-heading"
          title="단독 사용"
          description="레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."
          stack
        >
          <Radio name="radio-standalone" ariaLabel="항목 선택" />
          <Radio name="radio-standalone" checked ariaLabel="선택됨" />
          <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다."
          stack
        >
          <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
          <Radio name="radio-size" label="Medium — 기본" />
          <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
        </DemoSection>

        <DemoSection
          headingId="width-heading"
          title="너비"
          description="기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다."
        >
          <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
          <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
          <fieldset className="radio_group radio_group_block" style={{ maxWidth: '360px', width: '100%' }}>
            <legend className="radio_group-legend">radio_group_block</legend>
            <Radio name="radio-width-g1" checked label="항목 1" />
            <Radio name="radio-width-g1" label="항목 2" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."
          stack
        >
          <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
          <Radio className="color_success" name="radio-color-success" checked label="Success" />
          <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
          <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="선택·미선택·비활성·오류(is-error) 상태를 지원합니다."
          stack
        >
          <Radio name="radio-state" label="미선택" />
          <Radio name="radio-state" checked label="선택됨" />
          <Radio name="radio-state-disabled" disabled label="비활성" />
          <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다."
          stack
        >
          <fieldset className="radio_group">
            <legend className="radio_group-legend">배송 방법 (세로)</legend>
            <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
            <Radio name="radio-group-ship" value="express" label="빠른 배송" />
            <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
          </fieldset>
          <fieldset className="radio_group radio_group_horizontal">
            <legend className="radio_group-legend">크기 (가로)</legend>
            <Radio button name="radio-group-size" checked value="s" label="S" />
            <Radio button name="radio-group-size" value="m" label="M" />
            <Radio button name="radio-group-size" value="l" label="L" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="button-type-heading"
          title="버튼형"
          description="radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."
          stack
        >
          <fieldset className="radio_group radio_group_horizontal">
            <Radio button name="radio-btn-filter" checked value="all" label="전체" />
            <Radio button name="radio-btn-filter" value="active" label="진행 중" />
            <Radio button name="radio-btn-filter" value="done" label="완료" />
            <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
          </fieldset>
          <fieldset className="radio_group radio_group_horizontal">
            <Radio button className="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
            <Radio button className="color_success" name="radio-btn-size" checked value="md" label="Medium" />
            <Radio button className="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
          </fieldset>
        </DemoSection>

        <DemoSection
          headingId="card-type-heading"
          title="카드형"
          description="<code>div.radio_card</code> + <code>article.card</code> 조합입니다. <code>card_extra</code>에는 <code>label.radio_control</code>로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 <code>div.radio_card.radio_card-clickable</code>을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 <code>aria-labelledby</code>로 card_title · card_body에 연결합니다."
          stack
          >
          <fieldset className="radio_group">
                <legend className="radio_group-legend">요금제 선택</legend>
                <div className="card_deck card_deck-2">
                  <div className="radio_card">
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-plan-basic-title">Basic</h3>
                          <p className="card_subtitle">월 9,000원</p>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-plan-basic" name="radio-plan" value="basic" checked ariaLabelledby="radio-plan-basic-title radio-plan-basic-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
                    </article>
                  </div>
                  <div className="radio_card color_primary">
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-plan-pro-title">Pro</h3>
                          <p className="card_subtitle">월 29,000원</p>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-plan-pro" name="radio-plan" value="pro" ariaLabelledby="radio-plan-pro-title radio-plan-pro-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
                    </article>
                  </div>
                  <div className="radio_card">
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-plan-enterprise-title">Enterprise</h3>
                          <p className="card_subtitle">별도 문의</p>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled ariaLabelledby="radio-plan-enterprise-title radio-plan-enterprise-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
                    </article>
                  </div>
                </div>
              </fieldset>

              <fieldset className="radio_group">
                <legend className="radio_group-legend">기본 권한 (가로)</legend>
                <div className="card_deck card_deck-3">
                  <div className="radio_card color_success">
                    <article className="card card_compact">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-role-read-title">읽기</h3>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-role-read" name="radio-role" value="read" checked ariaLabelledby="radio-role-read-title radio-role-read-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-role-read-desc">조회 권한</div>
                    </article>
                  </div>
                  <div className="radio_card color_success">
                    <article className="card card_compact">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-role-write-title">쓰기</h3>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-role-write" name="radio-role" value="write" ariaLabelledby="radio-role-write-title radio-role-write-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-role-write-desc">수정 권한</div>
                    </article>
                  </div>
                  <div className="radio_card">
                    <article className="card card_compact">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-role-admin-title">관리</h3>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-role-admin" name="radio-role" value="admin" ariaLabelledby="radio-role-admin-title radio-role-admin-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-role-admin-desc">전체 관리 권한</div>
                    </article>
                  </div>
                </div>
              </fieldset>

              <fieldset className="radio_group">
                <legend className="radio_group-legend">요금제 선택 — 카드 전체 클릭 (radio_card-clickable)</legend>
                <div className="card_deck card_deck-2">
                  <div className="radio_card radio_card-clickable" data-ripple>
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-plan-full-basic-title">Basic</h3>
                          <p className="card_subtitle">월 9,000원</p>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked ariaLabelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
                    </article>
                  </div>
                  <div className="radio_card radio_card-clickable color_primary" data-ripple>
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-plan-full-pro-title">Pro</h3>
                          <p className="card_subtitle">월 29,000원</p>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" ariaLabelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
                    </article>
                  </div>
                  <div className="radio_card radio_card-clickable" data-ripple>
                    <article className="card card_compact card_shadow">
                      <div className="card_header">
                        <div className="card_header-main">
                          <h3 className="card_title" id="radio-plan-full-enterprise-title">Enterprise</h3>
                          <p className="card_subtitle">별도 문의</p>
                        </div>
                        <div className="card_extra">
                          <Radio id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled ariaLabelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"  />
                        </div>
                      </div>
                      <div className="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
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
              <span className="form_field-label" id="radio-form-vertical-label">수신 채널</span>
              <fieldset className="radio_group" aria-labelledby="radio-form-vertical-label">
                <Radio name="radio-form-channel" checked value="email" label="이메일" />
                <Radio name="radio-form-channel" value="sms" label="SMS" />
              </fieldset>
            </div>
          </FormLayout>
          <FormLayout layout="horizontal" fit>
            <div className="form_field">
              <span className="form_field-label" id="radio-form-horizontal-label">역할</span>
              <fieldset className="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
                <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
                <Radio button name="radio-form-role" value="editor" label="편집자" />
              </fieldset>
            </div>
          </FormLayout>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={radioPropColumns} rows={radioProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={radioSlotColumns} rows={radioSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={radioClassColumns} rows={radioClasses} codeColumn="name" />
        </ApiSection>
    </>
  );
}
