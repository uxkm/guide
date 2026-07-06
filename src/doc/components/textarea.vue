<script>
export const docMeta = {
  title: 'Textarea | HTML Components',
  activeNav: 'textarea',
  pageTitle: 'Textarea',
};
</script>

<script setup>
import Button from '@/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
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
</script>

<template>
  <div class="page_intro">
  <h1>Textarea</h1>
  <p class="lead">여러 줄 텍스트 입력을 위한 Textarea 컴포넌트입니다. class="textarea"를 사용하며, form_field와 조합해 레이블·힌트·유효성 메시지를 구성합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="레이블과 힌트 텍스트가 포함된 폼 필드입니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-bio">자기소개</label>
      <Textarea id="textarea-bio" :rows="4" placeholder="간단한 자기소개를 입력하세요" />
      <p class="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="standalone-heading"
    title="단독 사용"
    description="form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다."
    stack
  >
    <Textarea :rows="3" placeholder="플레이스홀더" />
    <Textarea :rows="3" model-value="입력된 내용이 여기에 표시됩니다." />
    <Textarea :rows="3" placeholder="비활성" disabled />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-size-sm">Small</label>
      <Textarea id="textarea-size-sm" size="sm" :rows="3" placeholder="textarea_sm" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-size-md">Medium</label>
      <Textarea id="textarea-size-md" :rows="3" placeholder="기본 크기" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-size-lg">Large</label>
      <Textarea id="textarea-size-lg" size="lg" :rows="3" placeholder="textarea_lg" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="width-heading"
    title="너비"
    description="크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-width-full">전체 너비</label>
      <Textarea id="textarea-width-full" :rows="3" placeholder="width: 100%" />
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="textarea-width-fit">제한 너비</label>
      <Textarea id="textarea-width-fit" :rows="3" placeholder="form_field_fit — 최대 320px" />
    </div>

    <Textarea class="textarea_fit" :rows="3" placeholder="textarea_fit 단독 — 최대 320px" />
  </DemoSection>

  <DemoSection
    heading-id="rows-heading"
    title="행 수"
    description="HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-2">2행</label>
      <Textarea id="textarea-rows-2" :rows="2" placeholder='rows="2"' />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-3">3행</label>
      <Textarea id="textarea-rows-3" :rows="3" placeholder='rows="3" — 기본 권장' />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-5">5행</label>
      <Textarea id="textarea-rows-5" :rows="5" placeholder='rows="5"' />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-8">8행</label>
      <Textarea id="textarea-rows-8" :rows="8" placeholder='rows="8" — 긴 본문용' />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="resize-heading"
    title="리사이즈"
    description="textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-none">기본 (리사이즈 없음)</label>
      <Textarea id="textarea-resize-none" :rows="3" placeholder="class 없음 — 기본" />
      <p class="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-vertical">세로</label>
      <Textarea id="textarea-resize-vertical" class="textarea_resize_vertical" :rows="3" placeholder="textarea_resize_vertical" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-horizontal">가로</label>
      <Textarea id="textarea-resize-horizontal" class="textarea_resize_horizontal" :rows="3" placeholder="textarea_resize_horizontal" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-both">양방향</label>
      <Textarea id="textarea-resize-both" class="textarea_resize_both" :rows="3" placeholder="textarea_resize_both" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="required-heading"
    title="필수 필드"
    description="required 속성과 form_field-required로 필수 입력을 표시합니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-required-content">
        문의 내용<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <Textarea id="textarea-required-content" :rows="4" placeholder="문의 내용을 입력해 주세요" required aria-required="true" />
      <p class="form_field-hint">최소 10자 이상 입력해 주세요.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-required-memo">
        메모<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <Textarea id="textarea-required-memo" size="sm" :rows="2" placeholder="필수 메모" required aria-required="true" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="count-heading"
    title="글자 수 카운터"
    description="<code>textarea_wrap textarea_show-count</code>로 textarea 우측 하단에 현재 글자 수를 표시합니다. <code>maxlength</code>와 함께 사용하면 <code>0/200</code> 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 <code>form_field-hint</code>로 글자 수 안내 문구(예: 200자 이내로 작성해 주세요.)를 함께 제공합니다. 입력 시 스크린 리더에는 <code>textarea_count_announcer</code>가 <code>role=&quot;status&quot;</code> · <code>aria-live=&quot;polite&quot;</code>로 현재·최대 글자 수를 음성 안내합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-count-basic">메모</label>
      <div class="textarea_wrap textarea_show-count">
        <Textarea
          id="textarea-count-basic"
          :rows="4"
          maxlength="200"
          placeholder="내용을 입력하세요"
          aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
        />
        <span class="textarea_count" id="textarea-count-basic-count" role="status" aria-live="polite" aria-atomic="true">
          <span class="textarea_count_visual" aria-hidden="true">0/200</span>
          <span class="textarea_count_announcer">0자 입력, 최대 200자</span>
        </span>
      </div>
      <p class="form_field-hint" id="textarea-count-basic-hint">200자 이내로 작성해 주세요.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="textarea-count-sm">Small + 카운터</label>
      <div class="textarea_wrap textarea_show-count">
        <Textarea
          id="textarea-count-sm"
          size="sm"
          :rows="3"
          maxlength="100"
          placeholder="textarea_sm"
          aria-describedby="textarea-count-sm-hint textarea-count-sm-count"
        />
        <span class="textarea_count" id="textarea-count-sm-count" role="status" aria-live="polite" aria-atomic="true">
          <span class="textarea_count_visual" aria-hidden="true">0/100</span>
          <span class="textarea_count_announcer">0자 입력, 최대 100자</span>
        </span>
      </div>
      <p class="form_field-hint" id="textarea-count-sm-hint">100자 이내로 작성해 주세요.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="textarea-count-fit">제한 너비 + 카운터</label>
      <div class="textarea_wrap textarea_show-count textarea_wrap_fit">
        <Textarea
          id="textarea-count-fit"
          :rows="3"
          maxlength="200"
          placeholder="textarea_wrap_fit"
          model-value="입력된 내용이 있습니다."
          aria-describedby="textarea-count-fit-hint textarea-count-fit-count"
        />
        <span class="textarea_count" id="textarea-count-fit-count" role="status" aria-live="polite" aria-atomic="true">
          <span class="textarea_count_visual" aria-hidden="true">12/200</span>
          <span class="textarea_count_announcer">12자 입력, 최대 200자</span>
        </span>
      </div>
      <p class="form_field-hint" id="textarea-count-fit-hint">200자 이내로 작성해 주세요.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="textarea-state-default">기본</label>
      <Textarea id="textarea-state-default" :rows="3" placeholder="입력 가능" />
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-state-disabled">비활성</label>
      <Textarea id="textarea-state-disabled" :rows="3" model-value="수정할 수 없는 내용입니다." disabled />
      <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-state-error">에러</label>
      <Textarea id="textarea-state-error" :rows="3" error model-value="짧음" aria-describedby="textarea-state-error-msg" />
      <p class="form_field-error" id="textarea-state-error-msg" role="alert">10자 이상 입력해 주세요.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="example-heading"
    title="조합 예시"
    description="문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxlength로 접근성을 보완합니다."
    stack
  >
    <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
      <div class="form_field">
        <label class="form_field-label" for="textarea-ex-subject">
          제목<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Input id="textarea-ex-subject" size="sm" model-value="서비스 이용 문의" required aria-required="true" />
      </div>

      <div class="form_field">
        <label class="form_field-label" for="textarea-ex-body">
          문의 내용<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <div class="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-body"
            size="sm"
            :rows="5"
            maxlength="500"
            required
            error
            model-value="너무 짧아요"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
          />
          <span class="textarea_count is-limit" id="textarea-ex-body-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">6/500</span>
            <span class="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-ex-body-limit">500자 이내로 작성해 주세요.</p>
        <p class="form_field-hint" id="textarea-ex-body-hint">구체적인 상황을 알려주시면 빠르게 답변드립니다.</p>
        <p class="form_field-error" id="textarea-ex-body-error" role="alert">10자 이상 입력해 주세요.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="textarea-ex-memo">추가 메모</label>
        <div class="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-memo"
            size="sm"
            class="textarea_resize_vertical is-success"
            :rows="3"
            maxlength="200"
            model-value="참고할 내용이 있습니다."
            aria-invalid="false"
            aria-describedby="textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count"
          />
          <span class="textarea_count" id="textarea-ex-memo-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">14/200</span>
            <span class="textarea_count_announcer">14자 입력, 최대 200자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-ex-memo-hint">200자 이내로 작성해 주세요.</p>
        <p class="form_field-success" id="textarea-ex-memo-success" role="status">선택 항목이 정상적으로 저장되었습니다.</p>
      </div>

      <div class="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="textareaPropColumns" :rows="textareaProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="textareaSlotColumns" :rows="textareaSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="textareaEventColumns" :rows="textareaEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="textareaClassColumns" :rows="textareaClasses" code-column="name" />
  </ApiSection>
</template>
