import{_ as e}from"./Select-NdOpAFKw.js";import{w as t,s as Q}from"./story-renders-DjeoaiCa.js";import{q as Y}from"./iframe-CAswI7Qe.js";import{_ as Z}from"./FormLayout-B-M4dP74.js";import{d as ee,a as te}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const le=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ne=[{name:"model-value",type:"string | number",default:"—",description:"v-model 바인딩 값"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"input_sm · btn_sm 등 크기"},{name:"list-size",type:"number",default:"—",description:"네이티브 size — multiple 표시 행 수"},{name:"placeholder",type:"string",default:"—",description:"미선택 placeholder"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"error",type:"boolean",default:"false",description:"오류 상태 (is-error)"},{name:"open",type:"boolean",default:"false",description:"custom 트리거 열림 (is-open)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"custom",type:"boolean",default:"false",description:"button 트리거 + listbox 패턴"},{name:"select-text",type:"boolean",default:"false",description:"텍스트형 트리거 (btn_select-text)"},ee],oe=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ue=[{name:"default",description:"option 요소 또는 custom 트리거 라벨"}],se=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ie=[{name:"input (native)",description:"네이티브 select 스타일"},{name:"btn_select · btn_select-text · btn_select-caret",description:"custom 트리거"},{name:"btn_select-placeholder · is-open",description:"트리거 상태"},{name:"select_dropdown · select_option",description:"드롭다운 패널 (HTML 마크업)"},{name:"is-error · is-disabled",description:"상태"},...te],ae=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],re=[{name:"update:modelValue",description:"선택 값 변경 시 (v-model)"}],ce=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],pe=[{name:"--select-padding-right · --select-padding-right-sm · --select-padding-right-lg",default:"2.25rem · 2rem · 2.5rem",description:"캐럿 공간(우측 패딩)"},{name:"--select-caret-offset · --select-caret-offset-sm · --select-caret-offset-lg",default:"0.65rem · 0.5rem · 0.85rem",description:"캐럿 위치"},{name:"--select-caret-size · --select-caret-size-sm · --select-caret-size-lg",default:"1em · 0.875em · 1.125em",description:"캐럿 아이콘 크기"}],Ce=[{title:"API · Props",tables:[{columns:le,rows:ne,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:oe,rows:ue,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:ae,rows:re,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:se,rows:ie,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ce,rows:pe,codeColumn:"name"}]}],ve={title:"Components/폼/Select",id:"components-select",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},custom:{control:"boolean",type:{name:"boolean",summary:"boolean"}},selectText:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ce}},l={parameters:{controls:{disable:!1}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:(de,N)=>({components:{Select:e},setup(){return{args:Q(N)}},template:`<Select v-bind="args" placeholder="선택하세요" open>
      <option value="1">옵션 1</option>
      <option value="2">옵션 2</option>
    </Select>`})},n={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",placeholder:"입력하세요"},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      <p class="form_field-hint">btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.</p>`}))},o={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 힌트 텍스트가 포함된 폼 필드입니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="select-role">역할</label>
    <Select id="select-role" placeholder="선택하세요">
      <option>관리자</option>
      <option>편집자</option>
      <option>뷰어</option>
    </Select>
    <p class="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
  </div>
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
        <label class="form_field-label" for="select-role">역할</label>
        <Select id="select-role" placeholder="선택하세요">
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </Select>
        <p class="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
      </div>`}))},u={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<Select aria-label="상태 필터">
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
      </Select>`}))},s={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      </div>`}))},i={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      <Select custom block>btn_block — 전체 너비 트리거</Select>`}))},a={name:"플레이스홀더",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      </div>`}))},r={name:"옵션 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      </div>`}))},c={name:"다중 선택",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      </div>`}))},p={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="form_field">
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
      </div>`}))},C={name:"커스텀 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup=&quot;listbox&quot; · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다."},source:{code:`<script setup>
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Select custom>서울특별시</Select>
    <Select custom select-text>최신순</Select>
    <Select custom select-text size="sm">필터</Select>
  </div>
  <p class="form_field-hint">상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Select:e},template:`<div class="btn_row btn_row-wrap">
        <Select custom>서울특별시</Select>
        <Select custom select-text>최신순</Select>
        <Select custom select-text size="sm">필터</Select>
      </div>
      <p class="form_field-hint">상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>`}))},d={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import FormLayout from '@uxkm/ui/components/FormLayout.vue';
import Select from '@uxkm/ui/components/Select.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},args:{size:"md",disabled:!1,error:!1,placeholder:"입력하세요",open:!0,block:!1,custom:!1,selectText:!1},render:t(()=>({components:{Button:Y,FormLayout:Z,Select:e},template:`<FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
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
      </FormLayout>`}))};var m,f,D;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: (_args, context) => ({
    components: {
      Select
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Select v-bind="args" placeholder="선택하세요" open>
      <option value="1">옵션 1</option>
      <option value="2">옵션 2</option>
    </Select>\`
  })
}`,...(D=(f=l.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var b,B,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "유형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-type-native\\">네이티브 — select.input</label>\\n    <Select id=\\"select-type-native\\" placeholder=\\"선택하세요\\">\\n      <option>옵션 1</option>\\n      <option selected>옵션 2</option>\\n      <option>옵션 3</option>\\n    </Select>\\n    <p class=\\"form_field-hint\\">폼 필드·간단한 선택에 권장합니다.</p>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Select custom>커스텀 — btn_select</Select>\\n    <Select custom select-text>커스텀 — btn_select-text</Select>\\n  </div>\\n  <p class=\\"form_field-hint\\">btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    placeholder: "입력하세요"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      <p class="form_field-hint">btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.</p>\`
  }))
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,_,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "레이블과 힌트 텍스트가 포함된 폼 필드입니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-role\\">역할</label>\\n    <Select id=\\"select-role\\" placeholder=\\"선택하세요\\">\\n      <option>관리자</option>\\n      <option>편집자</option>\\n      <option>뷰어</option>\\n    </Select>\\n    <p class=\\"form_field-hint\\">계정에 부여할 권한을 선택해 주세요.</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
        <label class="form_field-label" for="select-role">역할</label>
        <Select id="select-role" placeholder="선택하세요">
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </Select>
        <p class="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
      </div>\`
  }))
}`,...(A=(_=o.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var g,h,E;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "단독 사용",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <Select aria-label=\\"상태 필터\\">\\n    <option>전체</option>\\n    <option>활성</option>\\n    <option>비활성</option>\\n  </Select>\\n  <Select aria-label=\\"정렬 기준\\" model-value=\\"이름순\\">\\n    <option>최신순</option>\\n    <option>이름순</option>\\n    <option>오래된순</option>\\n  </Select>\\n  <Select aria-label=\\"비활성 셀렉트\\" disabled>\\n    <option>수정할 수 없음</option>\\n  </Select>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<Select aria-label="상태 필터">
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
      </Select>\`
  }))
}`,...(E=(h=u.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var x,y,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-size-sm\\">Small — 네이티브</label>\\n    <Select id=\\"select-size-sm\\" size=\\"sm\\">\\n      <option>input_sm</option>\\n      <option>옵션 2</option>\\n    </Select>\\n  </div>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-size-md\\">Medium — 네이티브</label>\\n    <Select id=\\"select-size-md\\">\\n      <option>기본 크기</option>\\n      <option>옵션 2</option>\\n    </Select>\\n  </div>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-size-lg\\">Large — 네이티브</label>\\n    <Select id=\\"select-size-lg\\" size=\\"lg\\">\\n      <option>input_lg</option>\\n      <option>옵션 2</option>\\n    </Select>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Select custom size=\\"sm\\">btn_sm</Select>\\n    <Select custom>기본</Select>\\n    <Select custom size=\\"lg\\">btn_lg</Select>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      </div>\`
  }))
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,z,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-width-full\\">전체 너비</label>\\n    <Select id=\\"select-width-full\\">\\n      <option>width: 100%</option>\\n      <option>옵션 2</option>\\n    </Select>\\n  </div>\\n  <div class=\\"form_field form_field_fit\\">\\n    <label class=\\"form_field-label\\" for=\\"select-width-fit\\">제한 너비</label>\\n    <Select id=\\"select-width-fit\\">\\n      <option>form_field_fit — 최대 320px</option>\\n      <option>옵션 2</option>\\n    </Select>\\n  </div>\\n  <Select class=\\"input_fit\\" aria-label=\\"제한 너비 단독\\">\\n    <option>input_fit 단독 — 최대 320px</option>\\n    <option>옵션 2</option>\\n  </Select>\\n  <Select custom block>btn_block — 전체 너비 트리거</Select>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      <Select custom block>btn_block — 전체 너비 트리거</Select>\`
  }))
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,q,T;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "플레이스홀더",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-placeholder-native\\">네이티브</label>\\n    <Select id=\\"select-placeholder-native\\" required placeholder=\\"옵션을 선택하세요\\">\\n      <option value=\\"a\\">옵션 A</option>\\n      <option value=\\"b\\">옵션 B</option>\\n      <option value=\\"c\\">옵션 C</option>\\n    </Select>\\n    <p class=\\"form_field-hint\\">required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.</p>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Select custom placeholder>옵션을 선택하세요</Select>\\n    <Select custom select-text placeholder>정렬 기준</Select>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      </div>\`
  }))
}`,...(T=(q=a.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var L,R,M;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "옵션 그룹",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-optgroup\\">지역</label>\\n    <Select id=\\"select-optgroup\\" placeholder=\\"선택하세요\\">\\n      <optgroup label=\\"수도권\\">\\n        <option>서울특별시</option>\\n        <option>경기도</option>\\n        <option>인천광역시</option>\\n      </optgroup>\\n      <optgroup label=\\"영남권\\">\\n        <option>부산광역시</option>\\n        <option>대구광역시</option>\\n        <option>울산광역시</option>\\n      </optgroup>\\n      <optgroup label=\\"호남권\\">\\n        <option>광주광역시</option>\\n        <option>전라남도</option>\\n        <option>전라북도</option>\\n      </optgroup>\\n    </Select>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      </div>\`
  }))
}`,...(M=(R=r.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var U,I,j;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "다중 선택",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-multiple\\">관심 분야</label>\\n    <Select id=\\"select-multiple\\" multiple :list-size=\\"5\\" aria-describedby=\\"select-multiple-hint\\">\\n      <option selected>UX 디자인</option>\\n      <option>UI 개발</option>\\n      <option selected>접근성</option>\\n      <option>디자인 시스템</option>\\n      <option>리서치</option>\\n      <option>프로토타이핑</option>\\n    </Select>\\n    <p class=\\"form_field-hint\\" id=\\"select-multiple-hint\\">복수 선택 시 list-size로 표시 행 수를 지정합니다. (네이티브 size 속성)</p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      </div>\`
  }))
}`,...(j=(I=c.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var O,W,X;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-state-default\\">기본</label>\\n    <Select id=\\"select-state-default\\">\\n      <option>선택 가능</option>\\n      <option>옵션 2</option>\\n    </Select>\\n  </div>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-state-disabled\\">비활성</label>\\n    <Select id=\\"select-state-disabled\\" disabled>\\n      <option selected>수정할 수 없음</option>\\n      <option>옵션 2</option>\\n    </Select>\\n    <p class=\\"form_field-hint\\">disabled 속성으로 선택을 막습니다.</p>\\n  </div>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-state-error\\">에러</label>\\n    <Select id=\\"select-state-error\\" error placeholder=\\"선택하세요\\">\\n      <option value=\\"a\\">옵션 A</option>\\n    </Select>\\n    <p class=\\"form_field-error\\" id=\\"select-state-error-msg\\" role=\\"alert\\">필수 항목입니다. 옵션을 선택해 주세요.</p>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Select custom open>열림</Select>\\n    <Select custom disabled>비활성</Select>\\n    <Select custom error>에러</Select>\\n    <Select custom open select-text>텍스트형 열림</Select>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="form_field">
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
      </div>\`
  }))
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var H,V,$;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "커스텀 트리거",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup=&quot;listbox&quot; · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Select custom>서울특별시</Select>\\n    <Select custom select-text>최신순</Select>\\n    <Select custom select-text size=\\"sm\\">필터</Select>\\n  </div>\\n  <p class=\\"form_field-hint\\">상세 변형은 <a href=\\"button.html#type-select-heading\\">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Select
    },
    template: \`<div class="btn_row btn_row-wrap">
        <Select custom>서울특별시</Select>
        <Select custom select-text>최신순</Select>
        <Select custom select-text size="sm">필터</Select>
      </div>
      <p class="form_field-hint">상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>\`
  }))
}`,...($=(V=C.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "조합 예시",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport FormLayout from '@uxkm/ui/components/FormLayout.vue';\\nimport Select from '@uxkm/ui/components/Select.vue';\\n<\/script>\\n\\n<template>\\n  <FormLayout layout=\\"vertical\\" compact novalidate aria-labelledby=\\"example-heading\\">\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_field-label\\" for=\\"select-ex-country\\">\\n        국가<span class=\\"form_field-required\\" aria-hidden=\\"true\\">*</span>\\n      </label>\\n      <Select\\n      id=\\"select-ex-country\\"\\n      size=\\"sm\\"\\n      class=\\"is-success\\"\\n      model-value=\\"kr\\"\\n      required\\n      aria-required=\\"true\\"\\n      aria-invalid=\\"false\\"\\n      aria-describedby=\\"select-ex-country-success\\"\\n      >\\n      <option value=\\"kr\\">대한민국</option>\\n      <option value=\\"us\\">미국</option>\\n      <option value=\\"jp\\">일본</option>\\n    </Select>\\n    <p class=\\"form_field-success\\" id=\\"select-ex-country-success\\" role=\\"status\\">지원되는 국가입니다.</p>\\n  </div>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-ex-plan\\">\\n      요금제<span class=\\"form_field-required\\" aria-hidden=\\"true\\">*</span>\\n    </label>\\n    <Select\\n    id=\\"select-ex-plan\\"\\n    size=\\"sm\\"\\n    error\\n    required\\n    placeholder=\\"요금제를 선택하세요\\"\\n    aria-required=\\"true\\"\\n    aria-invalid=\\"true\\"\\n    aria-describedby=\\"select-ex-plan-error\\"\\n    >\\n    <option value=\\"free\\">Free</option>\\n    <option value=\\"pro\\">Pro</option>\\n    <option value=\\"enterprise\\">Enterprise</option>\\n  </Select>\\n  <p class=\\"form_field-error\\" id=\\"select-ex-plan-error\\" role=\\"alert\\">요금제 선택은 필수입니다.</p>\\n  </div>\\n  <div class=\\"form_field\\">\\n    <label class=\\"form_field-label\\" for=\\"select-ex-lang\\">언어</label>\\n    <Select id=\\"select-ex-lang\\" size=\\"sm\\" model-value=\\"ko\\">\\n      <option value=\\"ko\\">한국어</option>\\n      <option value=\\"en\\">English</option>\\n      <option value=\\"ja\\">日本語</option>\\n    </Select>\\n    <p class=\\"form_field-hint\\">서비스 표시 언어를 선택합니다.</p>\\n  </div>\\n  <div class=\\"form_actions\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" type=\\"submit\\" label=\\"가입하기\\" />\\n    <Button variant=\\"ghost\\" size=\\"sm\\" type=\\"button\\" label=\\"취소\\" />\\n  </div>\\n  </FormLayout>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    disabled: false,
    error: false,
    placeholder: "입력하세요",
    open: true,
    block: false,
    custom: false,
    selectText: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      FormLayout,
      Select
    },
    template: \`<FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
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
      </FormLayout>\`
  }))
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const _e=["Playground","Type","Basic","Standalone","Size","Width","Placeholder","Optgroup","Multiple","State","Custom","Example"];export{o as Basic,C as Custom,d as Example,c as Multiple,r as Optgroup,a as Placeholder,l as Playground,s as Size,u as Standalone,p as State,n as Type,i as Width,_e as __namedExportsOrder,ve as default};
