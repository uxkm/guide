export const docMeta = {
  title: 'Textarea | HTML Components',
  activeNav: 'textarea',
  pageTitle: 'Textarea',
};

import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import FormLayout from '@/components/FormLayout.jsx';
import Input from '@/components/Input.jsx';
import Textarea from '@/components/Textarea.jsx';
import TextareaShowCount from '@/components/TextareaShowCount.jsx';
import {
  textareaClassColumns,
  textareaClasses,
  textareaEventColumns,
  textareaEvents,
  textareaPropColumns,
  textareaProps,
  textareaSlotColumns,
  textareaSlots,
} from '@/doc/data/textarea-api';

export default function TextareaDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Textarea</h1>
        <p className="lead">여러 줄 텍스트 입력을 위한 Textarea 컴포넌트입니다. class="textarea"를 사용하며, form_field와 조합해 레이블·힌트·유효성 메시지를 구성합니다.</p>
      </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="레이블과 힌트 텍스트가 포함된 폼 필드입니다."
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-bio">자기소개</label>
            <Textarea id="textarea-bio" rows={4} placeholder="간단한 자기소개를 입력하세요" />
            <p className="form_field-hint">500자 이내로 작성해 주세요.</p>
          </div>
        </DemoSection>

        <DemoSection
          headingId="standalone-heading"
          title="단독 사용"
          description="form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다."
          stack
        >
          <Textarea rows={3} placeholder="플레이스홀더" />
          <Textarea rows={3} modelValue="입력된 내용이 여기에 표시됩니다." />
          <Textarea rows={3} placeholder="비활성" disabled />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다."
          stack
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-size-sm">Small</label>
            <Textarea id="textarea-size-sm" size="sm" rows={3} placeholder="textarea_sm" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-size-md">Medium</label>
            <Textarea id="textarea-size-md" rows={3} placeholder="기본 크기" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-size-lg">Large</label>
            <Textarea id="textarea-size-lg" size="lg" rows={3} placeholder="textarea_lg" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="width-heading"
          title="너비"
          description="크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다."
          stack
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-width-full">전체 너비</label>
            <Textarea id="textarea-width-full" rows={3} placeholder="width: 100%" />
          </div>

          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="textarea-width-fit">제한 너비</label>
            <Textarea id="textarea-width-fit" rows={3} placeholder="form_field_fit — 최대 320px" />
          </div>

          <Textarea className="textarea_fit" rows={3} placeholder="textarea_fit 단독 — 최대 320px" />
        </DemoSection>

        <DemoSection
          headingId="rows-heading"
          title="행 수"
          description="HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다."
          stack
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-rows-2">2행</label>
            <Textarea id="textarea-rows-2" rows={2} placeholder='rows="2"' />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-rows-3">3행</label>
            <Textarea id="textarea-rows-3" rows={3} placeholder='rows="3" — 기본 권장' />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-rows-5">5행</label>
            <Textarea id="textarea-rows-5" rows={5} placeholder='rows="5"' />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-rows-8">8행</label>
            <Textarea id="textarea-rows-8" rows={8} placeholder='rows="8" — 긴 본문용' />
          </div>
        </DemoSection>

        <DemoSection
          headingId="resize-heading"
          title="리사이즈"
          description="textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다."
          stack
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-resize-none">기본 (리사이즈 없음)</label>
            <Textarea id="textarea-resize-none" rows={3} placeholder="class 없음 — 기본" />
            <p className="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-resize-vertical">세로</label>
            <Textarea id="textarea-resize-vertical" className="textarea_resize_vertical" rows={3} placeholder="textarea_resize_vertical" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-resize-horizontal">가로</label>
            <Textarea id="textarea-resize-horizontal" className="textarea_resize_horizontal" rows={3} placeholder="textarea_resize_horizontal" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-resize-both">양방향</label>
            <Textarea id="textarea-resize-both" className="textarea_resize_both" rows={3} placeholder="textarea_resize_both" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="required-heading"
          title="필수 필드"
          description="required 속성과 form_field-required로 필수 입력을 표시합니다."
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-required-content">
              문의 내용<span className="form_field-required" aria-hidden={true}>*</span>
            </label>
            <Textarea id="textarea-required-content" rows={4} placeholder="문의 내용을 입력해 주세요" required ariaRequired="true" />
            <p className="form_field-hint">최소 10자 이상 입력해 주세요.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-required-memo">
              메모<span className="form_field-required" aria-hidden={true}>*</span>
            </label>
            <Textarea id="textarea-required-memo" size="sm" rows={2} placeholder="필수 메모" required ariaRequired="true" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="count-heading"
          title="글자 수 카운터"
          description="<code>textarea_wrap textarea_show-count</code>로 textarea 우측 하단에 현재 글자 수를 표시합니다. <code>maxlength</code>와 함께 사용하면 <code>0/200</code> 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 <code>form_field-hint</code>로 글자 수 안내 문구(예: 200자 이내로 작성해 주세요.)를 함께 제공합니다. 입력 시 스크린 리더에는 <code>textarea_count_announcer</code>가 <code>role=&quot;status&quot;</code> · <code>aria-live=&quot;polite&quot;</code>로 현재·최대 글자 수를 음성 안내합니다."
          stack
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-count-basic">메모</label>
            <TextareaShowCount countId="textarea-count-basic-count">
              <Textarea
                id="textarea-count-basic"
                rows={4}
                maxlength="200"
                placeholder="내용을 입력하세요"
                ariaDescribedby="textarea-count-basic-hint textarea-count-basic-count"
              />
            </TextareaShowCount>
            <p className="form_field-hint" id="textarea-count-basic-hint">200자 이내로 작성해 주세요.</p>
          </div>

          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-count-sm">Small + 카운터</label>
            <TextareaShowCount countId="textarea-count-sm-count">
              <Textarea
                id="textarea-count-sm"
                size="sm"
                rows={3}
                maxlength="100"
                placeholder="textarea_sm"
                ariaDescribedby="textarea-count-sm-hint textarea-count-sm-count"
              />
            </TextareaShowCount>
            <p className="form_field-hint" id="textarea-count-sm-hint">100자 이내로 작성해 주세요.</p>
          </div>

          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="textarea-count-fit">제한 너비 + 카운터</label>
            <TextareaShowCount className="textarea_wrap_fit" countId="textarea-count-fit-count">
              <Textarea
                id="textarea-count-fit"
                rows={3}
                maxlength="200"
                placeholder="textarea_wrap_fit"
                modelValue="입력된 내용이 있습니다."
                ariaDescribedby="textarea-count-fit-hint textarea-count-fit-count"
              />
            </TextareaShowCount>
            <p className="form_field-hint" id="textarea-count-fit-hint">200자 이내로 작성해 주세요.</p>
          </div>
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다."
          stack
        >
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-state-default">기본</label>
            <Textarea id="textarea-state-default" rows={3} placeholder="입력 가능" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-state-disabled">비활성</label>
            <Textarea id="textarea-state-disabled" rows={3} modelValue="수정할 수 없는 내용입니다." disabled />
            <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="textarea-state-error">에러</label>
            <Textarea id="textarea-state-error" rows={3} error modelValue="짧음" ariaDescribedby="textarea-state-error-msg" />
            <p className="form_field-error" id="textarea-state-error-msg" role="alert">10자 이상 입력해 주세요.</p>
          </div>
        </DemoSection>

        <DemoSection
          headingId="example-heading"
          title="조합 예시"
          description="문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxlength로 접근성을 보완합니다."
          stack
        >
          <FormLayout layout="vertical" compact noValidate ariaLabelledby="example-heading">
            <div className="form_field">
              <label className="form_field-label" htmlFor="textarea-ex-subject">
                제목<span className="form_field-required" aria-hidden={true}>*</span>
              </label>
              <Input id="textarea-ex-subject" size="sm" modelValue="서비스 이용 문의" required ariaRequired="true" />
            </div>

            <div className="form_field">
              <label className="form_field-label" htmlFor="textarea-ex-body">
                문의 내용<span className="form_field-required" aria-hidden={true}>*</span>
              </label>
              <TextareaShowCount countId="textarea-ex-body-count">
                <Textarea
                  id="textarea-ex-body"
                  size="sm"
                  rows={5}
                  maxlength="500"
                  required
                  error
                  modelValue="너무 짧아요"
                  ariaRequired="true"
                  ariaInvalid="true"
                  ariaDescribedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
                />
              </TextareaShowCount>
              <p className="form_field-hint" id="textarea-ex-body-limit">500자 이내로 작성해 주세요.</p>
              <p className="form_field-hint" id="textarea-ex-body-hint">구체적인 상황을 알려주시면 빠르게 답변드립니다.</p>
              <p className="form_field-error" id="textarea-ex-body-error" role="alert">10자 이상 입력해 주세요.</p>
            </div>

            <div className="form_field">
              <label className="form_field-label" htmlFor="textarea-ex-memo">추가 메모</label>
              <TextareaShowCount countId="textarea-ex-memo-count">
                <Textarea
                  id="textarea-ex-memo"
                  size="sm"
                  className="textarea_resize_vertical is-success"
                  rows={3}
                  maxlength="200"
                  modelValue="참고할 내용이 있습니다."
                  ariaInvalid="false"
                  ariaDescribedby="textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count"
                />
              </TextareaShowCount>
              <p className="form_field-hint" id="textarea-ex-memo-hint">200자 이내로 작성해 주세요.</p>
              <p className="form_field-success" id="textarea-ex-memo-success" role="status">선택 항목이 정상적으로 저장되었습니다.</p>
            </div>

            <div className="form_actions">
              <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
              <Button variant="ghost" size="sm" type="button" label="취소" />
            </div>
          </FormLayout>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={textareaPropColumns} rows={textareaProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={textareaSlotColumns} rows={textareaSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-events-heading" title="API · Events">
          <ApiTable columns={textareaEventColumns} rows={textareaEvents} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={textareaClassColumns} rows={textareaClasses} codeColumn="name" />
        </ApiSection>
    </>
  );
}
