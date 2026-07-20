<script>
export const docMeta = {
  title: 'Select | HTML Components',
  activeNav: 'select',
  pageTitle: 'Select',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Select from '@uxkm/ui/components/Select.vue';
import {
  selectClassColumns,
  selectClasses,
  selectEventColumns,
  selectEvents,
  selectPropColumns,
  selectProps,
  selectSlotColumns,
  selectSlots,
  selectTokenColumns,
  selectTokens,
} from '@/doc/data/select-api';
</script>

<template>
  <div class="page_intro">
  <h1>Select</h1>
  <p class="lead">옵션 목록에서 값을 선택하는 Select 컴포넌트입니다. 네이티브 <code>&lt;select class="input"&gt;</code>와 커스텀 드롭다운 트리거 <code>btn_select</code> · <code>btn_select-text</code> 두 가지 유형을 제공합니다.</p>
</div>

  <DemoSection
    heading-id="type-heading"
    title="유형"
    description="네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="select-type-native">네이티브 — select.input</label>
      <Select id="select-type-native" placeholder="선택하세요">
        <option>옵션 1</option>
        <option selected>옵션 2</option>
        <option>옵션 3</option>
      </Select>
      <p class="form_field-hint">폼 필드·간단한 선택에 권장합니다.</p>
    </div>

    <div class="btn_row btn_row-wrap">
      <Select custom>커스텀 — btn_select</Select>
      <Select custom select-text>커스텀 — btn_select-text</Select>
    </div>
    <p class="form_field-hint">btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.</p>
  </DemoSection>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="레이블과 힌트 텍스트가 포함된 폼 필드입니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="select-role">역할</label>
      <Select id="select-role" placeholder="선택하세요">
        <option>관리자</option>
        <option>편집자</option>
        <option>뷰어</option>
      </Select>
      <p class="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="standalone-heading"
    title="단독 사용"
    description="form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다."
    stack
  >
    <Select aria-label="상태 필터">
      <option>전체</option>
      <option>활성</option>
      <option>비활성</option>
    </Select>
    <Select aria-label="정렬 기준" model-value="이름순">
      <option>최신순</option>
      <option>이름순</option>
      <option>오래된순</option>
    </Select>
    <Select aria-label="비활성 셀렉트" disabled>
      <option>수정할 수 없음</option>
    </Select>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="select-size-sm">Small — 네이티브</label>
      <Select id="select-size-sm" size="sm">
        <option>input_sm</option>
        <option>옵션 2</option>
      </Select>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-size-md">Medium — 네이티브</label>
      <Select id="select-size-md">
        <option>기본 크기</option>
        <option>옵션 2</option>
      </Select>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-size-lg">Large — 네이티브</label>
      <Select id="select-size-lg" size="lg">
        <option>input_lg</option>
        <option>옵션 2</option>
      </Select>
    </div>

    <div class="btn_row btn_row-wrap">
      <Select custom size="sm">btn_sm</Select>
      <Select custom>기본</Select>
      <Select custom size="lg">btn_lg</Select>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="width-heading"
    title="너비"
    description="기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="select-width-full">전체 너비</label>
      <Select id="select-width-full">
        <option>width: 100%</option>
        <option>옵션 2</option>
      </Select>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="select-width-fit">제한 너비</label>
      <Select id="select-width-fit">
        <option>form_field_fit — 최대 320px</option>
        <option>옵션 2</option>
      </Select>
    </div>

    <Select class="input_fit" aria-label="제한 너비 단독">
      <option>input_fit 단독 — 최대 320px</option>
      <option>옵션 2</option>
    </Select>

    <Select custom block>btn_block — 전체 너비 트리거</Select>
  </DemoSection>

  <DemoSection
    heading-id="placeholder-heading"
    title="플레이스홀더"
    description="빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="select-placeholder-native">네이티브</label>
      <Select id="select-placeholder-native" required placeholder="옵션을 선택하세요">
        <option value="a">옵션 A</option>
        <option value="b">옵션 B</option>
        <option value="c">옵션 C</option>
      </Select>
      <p class="form_field-hint">required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.</p>
    </div>

    <div class="btn_row btn_row-wrap">
      <Select custom placeholder>옵션을 선택하세요</Select>
      <Select custom select-text placeholder>정렬 기준</Select>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="optgroup-heading"
    title="옵션 그룹"
    description="optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="select-optgroup">지역</label>
      <Select id="select-optgroup" placeholder="선택하세요">
        <optgroup label="수도권">
          <option>서울특별시</option>
          <option>경기도</option>
          <option>인천광역시</option>
        </optgroup>
        <optgroup label="영남권">
          <option>부산광역시</option>
          <option>대구광역시</option>
          <option>울산광역시</option>
        </optgroup>
        <optgroup label="호남권">
          <option>광주광역시</option>
          <option>전라남도</option>
          <option>전라북도</option>
        </optgroup>
      </Select>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="multiple-heading"
    title="다중 선택"
    description="multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다."
  >
    <div class="form_field">
      <label class="form_field-label" for="select-multiple">관심 분야</label>
      <Select id="select-multiple" multiple :list-size="5" aria-describedby="select-multiple-hint">
        <option selected>UX 디자인</option>
        <option>UI 개발</option>
        <option selected>접근성</option>
        <option>디자인 시스템</option>
        <option>리서치</option>
        <option>프로토타이핑</option>
      </Select>
      <p class="form_field-hint" id="select-multiple-hint">복수 선택 시 list-size로 표시 행 수를 지정합니다. (네이티브 size 속성)</p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다."
    stack
  >
    <div class="form_field">
      <label class="form_field-label" for="select-state-default">기본</label>
      <Select id="select-state-default">
        <option>선택 가능</option>
        <option>옵션 2</option>
      </Select>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-state-disabled">비활성</label>
      <Select id="select-state-disabled" disabled>
        <option selected>수정할 수 없음</option>
        <option>옵션 2</option>
      </Select>
      <p class="form_field-hint">disabled 속성으로 선택을 막습니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-state-error">에러</label>
      <Select id="select-state-error" error placeholder="선택하세요">
        <option value="a">옵션 A</option>
      </Select>
      <p class="form_field-error" id="select-state-error-msg" role="alert">필수 항목입니다. 옵션을 선택해 주세요.</p>
    </div>

    <div class="btn_row btn_row-wrap">
      <Select custom open>열림</Select>
      <Select custom disabled>비활성</Select>
      <Select custom error>에러</Select>
      <Select custom open select-text>텍스트형 열림</Select>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="custom-heading"
    title="커스텀 트리거"
    description="btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup=&quot;listbox&quot; · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Select custom>서울특별시</Select>
      <Select custom select-text>최신순</Select>
      <Select custom select-text size="sm">필터</Select>
    </div>
    <p class="form_field-hint">상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
  </DemoSection>

  <DemoSection
    heading-id="example-heading"
    title="조합 예시"
    description="유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다."
    stack
  >
    <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
      <div class="form_field">
        <label class="form_field-label" for="select-ex-country">
          국가<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Select
          id="select-ex-country"
          size="sm"
          class="is-success"
          model-value="kr"
          required
          aria-required="true"
          aria-invalid="false"
          aria-describedby="select-ex-country-success"
        >
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </Select>
        <p class="form_field-success" id="select-ex-country-success" role="status">지원되는 국가입니다.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="select-ex-plan">
          요금제<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <Select
          id="select-ex-plan"
          size="sm"
          error
          required
          placeholder="요금제를 선택하세요"
          aria-required="true"
          aria-invalid="true"
          aria-describedby="select-ex-plan-error"
        >
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </Select>
        <p class="form_field-error" id="select-ex-plan-error" role="alert">요금제 선택은 필수입니다.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="select-ex-lang">언어</label>
        <Select id="select-ex-lang" size="sm" model-value="ko">
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </Select>
        <p class="form_field-hint">서비스 표시 언어를 선택합니다.</p>
      </div>

      <div class="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="가입하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="selectPropColumns" :rows="selectProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="selectSlotColumns" :rows="selectSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="selectEventColumns" :rows="selectEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="selectClassColumns" :rows="selectClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="selectTokenColumns" :rows="selectTokens" code-column="name" />
  </ApiSection>
</template>
