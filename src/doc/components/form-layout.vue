<script>
export const docMeta = {
  title: 'Form Layout | HTML Components',
  activeNav: 'form-layout',
  pageTitle: 'Form Layout',
};
</script>

<script setup>
import Button from '@/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import FormLayout from '@/components/FormLayout.vue';
import Grid from '@/components/Grid.vue';
import Input from '@/components/Input.vue';
import Select from '@/components/Select.vue';
import Textarea from '@/components/Textarea.vue';
import {
  formLayoutClassColumns,
  formLayoutClasses,
  formLayoutPropColumns,
  formLayoutProps,
  formLayoutSlotColumns,
  formLayoutSlots,
  formLayoutTokenColumns,
  formLayoutTokens,
} from '@/doc/data/form-layout-api';
</script>

<template>
  <div class="page_intro">
  <h1>Form Layout</h1>
  <p class="lead">폼 필드를 배치하는 레이아웃 유형입니다. <strong>form_vertical</strong> · <strong>form_horizontal</strong> · <strong>form_inline</strong>과 Grid를 조합해 다양한 폼 구조를 구성할 수 있습니다.</p>
</div>

  <DemoSection
    heading-id="vertical-heading"
    title="세로"
    description="레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다."
  >
    <FormLayout layout="vertical">
          <div class="form_field">
            <label class="form_field-label" for="fl-name">이름</label>
            <Input id="fl-name" placeholder="이름을 입력하세요" />
            <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-email">이메일</label>
            <Input id="fl-email" type="email" placeholder="name@example.com" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-role">역할</label>
            <Select id="fl-role" placeholder="선택하세요">
              <option value="">선택하세요</option>
              <option>관리자</option>
              <option>편집자</option>
              <option>뷰어</option>
            </Select>
          </div>
        </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="horizontal-heading"
    title="가로"
    description="레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다."
  >
    <FormLayout layout="horizontal">
          <div class="form_field">
            <label class="form_field-label" for="fl-h-name">이름</label>
            <Input id="fl-h-name" placeholder="이름" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-h-email">이메일</label>
            <Input id="fl-h-email" type="email" placeholder="name@example.com" />
            <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-h-bio">소개</label>
            <Textarea id="fl-h-bio" placeholder="간단한 자기소개" />
          </div>
        </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="horizontal-align-heading"
    title="가로 — 레이블 정렬·너비"
    description="form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다."
    stack
  >
    <FormLayout layout="horizontal" label-align-start label-width="sm">
      <div class="form_field">
        <label class="form_field-label" for="fl-hs-city">도시</label>
        <Input id="fl-hs-city" placeholder="서울" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-hs-zip">우편번호</label>
        <Input id="fl-hs-zip" placeholder="00000" />
      </div>
    </FormLayout>

    <FormLayout layout="horizontal" label-width="lg">
      <div class="form_field">
        <label class="form_field-label" for="fl-hl-company">회사명</label>
        <Input id="fl-hl-company" placeholder="UXKM" />
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-hl-dept">부서</label>
        <Input id="fl-hl-dept" placeholder="디자인팀" />
      </div>
    </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="inline-heading"
    title="인라인"
    description="검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다."
  >
    <FormLayout layout="inline">
          <div class="form_field">
            <label class="form_field-label" for="fl-i-keyword">키워드</label>
            <Input id="fl-i-keyword" type="search" placeholder="검색어" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-i-status">상태</label>
            <Select id="fl-i-status">
              <option>전체</option>
              <option>활성</option>
              <option>비활성</option>
            </Select>
          </div>
          <div class="form_field">
            <label class="form_field-label" for="fl-i-date">기간</label>
            <Input id="fl-i-date" type="date" />
          </div>
          <div class="form_actions">
            <Button variant="filled" color="primary" type="submit" label="검색" />
            <Button variant="ghost" type="reset" label="초기화" />
          </div>
        </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="grid-heading"
    title="그리드"
    description="Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다."
  >
    <FormLayout layout="vertical">
          <Grid :item-span="6">
            <div class="form_field">
              <label class="form_field-label" for="fl-g-first">이름</label>
              <Input id="fl-g-first" placeholder="이름" />
            </div>
            <div class="form_field">
              <label class="form_field-label" for="fl-g-last">성</label>
              <Input id="fl-g-last" placeholder="성" />
            </div>
            <div class="form_field">
              <label class="form_field-label" for="fl-g-phone">전화번호</label>
              <Input id="fl-g-phone" type="tel" placeholder="010-0000-0000" />
            </div>
            <div class="form_field">
              <label class="form_field-label" for="fl-g-mobile">휴대폰</label>
              <Input id="fl-g-mobile" type="tel" placeholder="010-0000-0000" />
            </div>
            <div class="form_field grid_col-span-12">
              <label class="form_field-label" for="fl-g-address">주소</label>
              <Input id="fl-g-address" placeholder="도로명 주소" />
            </div>
          </Grid>
        </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="width-heading"
    title="너비"
    description="폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다."
    stack
  >
    <FormLayout layout="vertical">
      <div class="form_field">
        <label class="form_field-label" for="fl-w-default">기본 너비</label>
        <Input id="fl-w-default" placeholder="부모 100%" />
      </div>
    </FormLayout>

    <FormLayout layout="vertical" fit>
      <div class="form_field">
        <label class="form_field-label" for="fl-w-fit">제한 너비</label>
        <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
      </div>
    </FormLayout>

    <FormLayout layout="horizontal">
      <div class="form_field">
        <label class="form_field-label" for="fl-w-h-full">가로 레이아웃</label>
        <Input id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움" />
      </div>
    </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="actions-heading"
    title="액션 영역"
    description="form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다."
    stack
  >
    <FormLayout layout="vertical">
      <div class="form_field">
        <label class="form_field-label" for="fl-a-title">제목</label>
        <Input id="fl-a-title" placeholder="제목" />
      </div>
      <div class="form_actions">
        <Button variant="filled" color="primary" type="submit" label="저장" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>

    <FormLayout layout="horizontal">
      <div class="form_field">
        <label class="form_field-label" for="fl-a2-title">제목</label>
        <Input id="fl-a2-title" placeholder="제목" />
      </div>
      <div class="form_actions">
        <Button variant="filled" color="primary" type="submit" label="저장" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  </DemoSection>

  <DemoSection
    heading-id="example-heading"
    title="전체 예시"
    description="세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다."
  >
    <FormLayout layout="vertical" compact>
      <Grid :item-span="6">
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-id">아이디</label>
          <Input id="fl-ex-id" placeholder="아이디" />
          <p class="form_field-hint">영문·숫자 4~16자</p>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-pw">비밀번호</label>
          <Input id="fl-ex-pw" type="password" placeholder="비밀번호" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-name">이름</label>
          <Input id="fl-ex-name" placeholder="이름" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-email">이메일</label>
          <Input id="fl-ex-email" type="email" placeholder="name@example.com" />
        </div>
        <div class="form_field grid_col-span-12">
          <label class="form_field-label" for="fl-ex-memo">메모</label>
          <Textarea id="fl-ex-memo" :rows="3" placeholder="추가 정보" />
        </div>
      </Grid>
      <div class="form_actions">
        <Button variant="filled" color="primary" type="submit" label="가입하기" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="formLayoutPropColumns" :rows="formLayoutProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="formLayoutSlotColumns" :rows="formLayoutSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="formLayoutClassColumns" :rows="formLayoutClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="formLayoutTokenColumns" :rows="formLayoutTokens" code-column="name" />
  </ApiSection>
</template>
