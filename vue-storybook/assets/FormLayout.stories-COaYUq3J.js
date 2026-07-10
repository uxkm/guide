import{_ as l}from"./FormLayout-CRfgE2Bq.js";import{_ as e}from"./Button-C3SXv-sJ.js";import{_ as a}from"./Grid-Ui6GP4sy.js";import{_ as o}from"./Input-CACUek-A.js";import{_ as n}from"./Select-C-jOCy5R.js";import{_ as t}from"./Textarea-BQDkYif5.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";const X=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],O=[{name:"layout",type:"'vertical' | 'horizontal' | 'inline'",default:"vertical",description:"form_vertical · form_horizontal · form_inline"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비에 맞춤 (form_fit)"},{name:"compact",type:"boolean",default:"false",description:"좁은 필드 간격 (form_compact)"},{name:"label-align-start",type:"boolean",default:"false",description:"라벨 상단 정렬 (form_label-align-start)"},{name:"label-width",type:"'sm' | 'lg'",default:"—",description:"가로 레이아웃 라벨 너비"},{name:"tag",type:"string",default:"form",description:"루트 HTML 태그"}],V=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],q=[{name:"default",description:"form_field · form_actions 등 폼 콘텐츠"}],j=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],J=[{name:"form",description:"폼 루트"},{name:"form_vertical · form_horizontal · form_inline",description:"레이아웃 방향"},{name:"form_fit · form_compact · form_label-align-start",description:"간격·정렬"},{name:"form_label-width-sm · form_label-width-lg",description:"라벨 너비"},{name:"form_field · form_field-label · form_field-hint · form_field-error",description:"필드 블록"},{name:"form_actions",description:"제출·취소 버튼 묶음"},{name:"form_required",description:"필수 표시 마크"}],N=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Q=[{name:"--form-label-width · --form-label-width-sm · --form-label-width-lg",default:"7.5rem · 5rem · 10rem",description:"가로 레이아웃 라벨 너비"},{name:"--form-field-gap",default:"var(--space-lg)",description:"필드 간격"},{name:"--form-inline-field-min-width",default:"8rem",description:"인라인 필드 최소 너비"},{name:"--form-actions-gap",default:"var(--space-sm)",description:"액션 버튼 간격"}],R=[{title:"API · Props",tables:[{columns:X,rows:O,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:V,rows:q,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:j,rows:J,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:N,rows:Q,codeColumn:"name"}]}],rl={title:"Components/폼/FormLayout",id:"components-form-layout",component:l,tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","inline"],type:{name:"enum",summary:"'vertical' | 'horizontal' | 'inline'"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelAlignStart:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelWidth:{control:"select",options:["sm","lg"],type:{name:"enum",summary:"'sm' | 'lg'"}},tag:{control:"select",options:["form","div"],type:{name:"enum",summary:"'form' | 'div'"}}},parameters:{layout:"padded",apiSections:R}},u={args:{layout:"vertical",fit:!1,compact:!1,labelAlignStart:!1,labelWidth:"sm",tag:"form"},render:U=>({components:{FormLayout:l,Input:o,Button:e},setup(){return{args:U}},template:`<FormLayout v-bind="args" novalidate>
      <div class="form_field">
        <label class="form_field-label" for="pg-input">이름</label>
        <Input id="pg-input" placeholder="입력" />
      </div>
      <div class="form_actions">
        <Button type="submit" variant="filled" color="primary" label="제출" />
      </div>
    </FormLayout>`})},i={name:"세로",parameters:{demoPreview:{stack:!1},docs:{description:{story:"레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Input from '@uxkm/ui/components/Input.vue';
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<FormLayout layout="vertical">
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
        </FormLayout>`})},r={name:"가로",parameters:{demoPreview:{stack:!1},docs:{description:{story:"레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Input from '@uxkm/ui/components/Input.vue';
import Textarea from '@uxkm/ui/components/Textarea.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<FormLayout layout="horizontal">
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
        </FormLayout>`})},s={name:"가로 — 레이블 정렬·너비",parameters:{demoPreview:{stack:!0},docs:{description:{story:"form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Input from '@uxkm/ui/components/Input.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<div class="demo_preview-block">
      <h3 class="typo_overline">레이블 왼쪽 정렬 · sm</h3>
      <p class="typo_caption">form_label-align-start · form_label-width-sm</p>
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
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">레이블 너비 lg</h3>
      <p class="typo_caption">form_label-width-lg — 라벨 열이 넓어져 입력 시작 위치가 달라집니다.</p>
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
    </div>`})},m={name:"인라인",parameters:{demoPreview:{stack:!1},docs:{description:{story:"검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Input from '@uxkm/ui/components/Input.vue';
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<FormLayout layout="inline">
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
        </FormLayout>`})},d={name:"그리드",parameters:{demoPreview:{stack:!1},docs:{description:{story:"Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Grid from '@uxkm/ui/components/Grid.vue';
import Input from '@uxkm/ui/components/Input.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<FormLayout layout="vertical">
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
        </FormLayout>`})},f={name:"너비",parameters:{demoPreview:{stack:!0},docs:{description:{story:"폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다."},source:{code:`<script setup>
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Input from '@uxkm/ui/components/Input.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<div class="demo_preview-block">
      <h3 class="typo_overline">기본 너비</h3>
      <p class="typo_caption">부모 컨테이너 100%</p>
      <FormLayout layout="vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-default">기본 너비</label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">form_fit</h3>
      <p class="typo_caption">최대 320px로 제한</p>
      <FormLayout layout="vertical" fit>
        <div class="form_field">
          <label class="form_field-label" for="fl-w-fit">제한 너비</label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">가로 레이아웃</h3>
      <p class="typo_caption">입력 열이 남은 공간을 채움</p>
      <FormLayout layout="horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-h-full">가로 레이아웃</label>
          <Input id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움" />
        </div>
      </FormLayout>
    </div>`})},p={name:"액션 영역",parameters:{demoPreview:{stack:!0},docs:{description:{story:"form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Input from '@uxkm/ui/components/Input.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<div class="demo_preview-block">
      <h3 class="typo_overline">세로</h3>
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
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">가로</h3>
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
    </div>`})},c={name:"전체 예시",parameters:{demoPreview:{stack:!1},docs:{description:{story:"세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Grid from '@uxkm/ui/components/Grid.vue';
import Input from '@uxkm/ui/components/Input.vue';
import Textarea from '@uxkm/ui/components/Textarea.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{FormLayout:l,Button:e,Grid:a,Input:o,Select:n,Textarea:t},template:`<FormLayout layout="vertical" compact>
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
    </FormLayout>`})};var C,b,v;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    fit: false,
    compact: false,
    labelAlignStart: false,
    labelWidth: "sm",
    tag: "form"
  },
  render: args => ({
    components: {
      FormLayout,
      Input,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<FormLayout v-bind="args" novalidate>
      <div class="form_field">
        <label class="form_field-label" for="pg-input">이름</label>
        <Input id="pg-input" placeholder="입력" />
      </div>
      <div class="form_actions">
        <Button type="submit" variant="filled" color="primary" label="제출" />
      </div>
    </FormLayout>\`
  })
}`,...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,B,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "세로",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-name\\">이름</label>\\n      <Input id=\\"fl-name\\" placeholder=\\"이름을 입력하세요\\" />\\n      <p class=\\"form_field-hint\\">2~20자 이내로 입력해 주세요.</p>\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-email\\">이메일</label>\\n      <Input id=\\"fl-email\\" type=\\"email\\" placeholder=\\"name@example.com\\" />\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-role\\">역할</label>\\n      <Select id=\\"fl-role\\" placeholder=\\"선택하세요\\">\\n        <option value=\\"\\">선택하세요</option>\\n        <option>관리자</option>\\n        <option>편집자</option>\\n        <option>뷰어</option>\\n      </Select>\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<FormLayout layout="vertical">
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
        </FormLayout>\`
  })
}`,...(_=(B=i.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var h,F,D;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "가로",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"horizontal\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-h-name\\">이름</label>\\n      <Input id=\\"fl-h-name\\" placeholder=\\"이름\\" />\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-h-email\\">이메일</label>\\n      <Input id=\\"fl-h-email\\" type=\\"email\\" placeholder=\\"name@example.com\\" />\\n      <p class=\\"form_field-hint\\">업무용 이메일을 입력해 주세요.</p>\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-h-bio\\">소개</label>\\n      <Textarea id=\\"fl-h-bio\\" placeholder=\\"간단한 자기소개\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<FormLayout layout="horizontal">
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
        </FormLayout>\`
  })
}`,...(D=(F=r.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var L,g,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "가로 — 레이블 정렬·너비",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"horizontal\\" label-align-start label-width=\\"sm\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-hs-city\\">도시</label>\\n      <Input id=\\"fl-hs-city\\" placeholder=\\"서울\\" />\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-hs-zip\\">우편번호</label>\\n      <Input id=\\"fl-hs-zip\\" placeholder=\\"00000\\" />\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\" label-width=\\"lg\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-hl-company\\">회사명</label>\\n      <Input id=\\"fl-hl-company\\" placeholder=\\"UXKM\\" />\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-hl-dept\\">부서</label>\\n      <Input id=\\"fl-hl-dept\\" placeholder=\\"디자인팀\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<div class="demo_preview-block">
      <h3 class="typo_overline">레이블 왼쪽 정렬 · sm</h3>
      <p class="typo_caption">form_label-align-start · form_label-width-sm</p>
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
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">레이블 너비 lg</h3>
      <p class="typo_caption">form_label-width-lg — 라벨 열이 넓어져 입력 시작 위치가 달라집니다.</p>
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
    </div>\`
  })
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var I,A,w;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "인라인",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"inline\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-i-keyword\\">키워드</label>\\n      <Input id=\\"fl-i-keyword\\" type=\\"search\\" placeholder=\\"검색어\\" />\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-i-status\\">상태</label>\\n      <Select id=\\"fl-i-status\\">\\n        <option>전체</option>\\n        <option>활성</option>\\n        <option>비활성</option>\\n      </Select>\\n    </div>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-i-date\\">기간</label>\\n      <Input id=\\"fl-i-date\\" type=\\"date\\" />\\n    </div>\\n    <div class=\\"form_actions\\">\\n      <Button variant=\\"filled\\" color=\\"primary\\" type=\\"submit\\" label=\\"검색\\" />\\n      <Button variant=\\"ghost\\" type=\\"reset\\" label=\\"초기화\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<FormLayout layout="inline">
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
        </FormLayout>\`
  })
}`,...(w=(A=m.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var k,E,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "그리드",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\">\\n    <Grid :item-span=\\"6\\">\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-g-first\\">이름</label>\\n        <Input id=\\"fl-g-first\\" placeholder=\\"이름\\" />\\n      </div>\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-g-last\\">성</label>\\n        <Input id=\\"fl-g-last\\" placeholder=\\"성\\" />\\n      </div>\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-g-phone\\">전화번호</label>\\n        <Input id=\\"fl-g-phone\\" type=\\"tel\\" placeholder=\\"010-0000-0000\\" />\\n      </div>\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-g-mobile\\">휴대폰</label>\\n        <Input id=\\"fl-g-mobile\\" type=\\"tel\\" placeholder=\\"010-0000-0000\\" />\\n      </div>\\n      <div class=\\"form_field grid_col-span-12\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-g-address\\">주소</label>\\n        <Input id=\\"fl-g-address\\" placeholder=\\"도로명 주소\\" />\\n      </div>\\n    </Grid>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<FormLayout layout="vertical">
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
        </FormLayout>\`
  })
}`,...(S=(E=d.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var G,z,T;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-w-default\\">기본 너비</label>\\n      <Input id=\\"fl-w-default\\" placeholder=\\"부모 100%\\" />\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"vertical\\" fit>\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-w-fit\\">제한 너비</label>\\n      <Input id=\\"fl-w-fit\\" placeholder=\\"form_fit — 최대 320px\\" />\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-w-h-full\\">가로 레이아웃</label>\\n      <Input id=\\"fl-w-h-full\\" placeholder=\\"입력 열이 남은 공간을 채움\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<div class="demo_preview-block">
      <h3 class="typo_overline">기본 너비</h3>
      <p class="typo_caption">부모 컨테이너 100%</p>
      <FormLayout layout="vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-default">기본 너비</label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">form_fit</h3>
      <p class="typo_caption">최대 320px로 제한</p>
      <FormLayout layout="vertical" fit>
        <div class="form_field">
          <label class="form_field-label" for="fl-w-fit">제한 너비</label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">가로 레이아웃</h3>
      <p class="typo_caption">입력 열이 남은 공간을 채움</p>
      <FormLayout layout="horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-h-full">가로 레이아웃</label>
          <Input id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움" />
        </div>
      </FormLayout>
    </div>\`
  })
}`,...(T=(z=f.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var P,H,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "액션 영역",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-a-title\\">제목</label>\\n      <Input id=\\"fl-a-title\\" placeholder=\\"제목\\" />\\n    </div>\\n    <div class=\\"form_actions\\">\\n      <Button variant=\\"filled\\" color=\\"primary\\" type=\\"submit\\" label=\\"저장\\" />\\n      <Button variant=\\"ghost\\" type=\\"button\\" label=\\"취소\\" />\\n    </div>\\n  </FormLayout>\\n  <FormLayout layout=\\"horizontal\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"fl-a2-title\\">제목</label>\\n      <Input id=\\"fl-a2-title\\" placeholder=\\"제목\\" />\\n    </div>\\n    <div class=\\"form_actions\\">\\n      <Button variant=\\"filled\\" color=\\"primary\\" type=\\"submit\\" label=\\"저장\\" />\\n      <Button variant=\\"ghost\\" type=\\"button\\" label=\\"취소\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<div class="demo_preview-block">
      <h3 class="typo_overline">세로</h3>
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
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">가로</h3>
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
    </div>\`
  })
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var W,$,K;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "전체 예시",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Grid from '@uxkm/ui/components/Grid.vue';\\nimport Input from '@uxkm/ui/components/Input.vue';\\nimport Textarea from '@uxkm/ui/components/Textarea.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" compact>\\n    <Grid :item-span=\\"6\\">\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-ex-id\\">아이디</label>\\n        <Input id=\\"fl-ex-id\\" placeholder=\\"아이디\\" />\\n        <p class=\\"form_field-hint\\">영문·숫자 4~16자</p>\\n      </div>\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-ex-pw\\">비밀번호</label>\\n        <Input id=\\"fl-ex-pw\\" type=\\"password\\" placeholder=\\"비밀번호\\" />\\n      </div>\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-ex-name\\">이름</label>\\n        <Input id=\\"fl-ex-name\\" placeholder=\\"이름\\" />\\n      </div>\\n      <div class=\\"form_field\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-ex-email\\">이메일</label>\\n        <Input id=\\"fl-ex-email\\" type=\\"email\\" placeholder=\\"name@example.com\\" />\\n      </div>\\n      <div class=\\"form_field grid_col-span-12\\">\\n        <label class=\\"form_field-label\\" for=\\"fl-ex-memo\\">메모</label>\\n        <Textarea id=\\"fl-ex-memo\\" :rows=\\"3\\" placeholder=\\"추가 정보\\" />\\n      </div>\\n    </Grid>\\n    <div class=\\"form_actions\\">\\n      <Button variant=\\"filled\\" color=\\"primary\\" type=\\"submit\\" label=\\"가입하기\\" />\\n      <Button variant=\\"ghost\\" type=\\"button\\" label=\\"취소\\" />\\n    </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      FormLayout,
      Button,
      Grid,
      Input,
      Select,
      Textarea
    },
    template: \`<FormLayout layout="vertical" compact>
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
    </FormLayout>\`
  })
}`,...(K=($=c.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const sl=["Playground","Vertical","Horizontal","HorizontalAlign","Inline","GridDemo","Width","Actions","Example"];export{p as Actions,c as Example,d as GridDemo,r as Horizontal,s as HorizontalAlign,m as Inline,u as Playground,i as Vertical,f as Width,sl as __namedExportsOrder,rl as default};
