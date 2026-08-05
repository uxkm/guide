import{L as e,Y as t,b as n,d as r,i,m as a,nt as o,st as s,y as c}from"./CCnt5OSV.js";import{a as l}from"./jFoqhwDN.js";import{l as u,t as d}from"./DkmWXf_S.js";import{t as f}from"./gHQDdAlU.js";import{t as p}from"./DD3RWXAt.js";import{o as m,t as h}from"./D6IbhUhQ.js";import{t as g}from"./Cuo-DXMr2.js";import{t as _}from"./L2u3Yheu.js";var v=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],y=[{name:`model-value`,type:`string | number | Array<string | number>`,default:`—`,description:`v-model 바인딩 값. multiple이면 배열`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`input_sm · btn_sm 등 크기`},{name:`list-size`,type:`number`,default:`—`,description:`네이티브 size — multiple 표시 행 수`},{name:`multiple`,type:`boolean`,default:`false`,description:`네이티브 다중 선택`},{name:`placeholder`,type:`string`,default:`—`,description:`미선택 placeholder`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`error`,type:`boolean`,default:`false`,description:`오류 상태 (is-error)`},{name:`open`,type:`boolean`,default:`false`,description:`custom 트리거 열림 (is-open)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100%`},{name:`custom`,type:`boolean`,default:`false`,description:`button 트리거 + listbox 패턴`},{name:`select-text`,type:`boolean`,default:`false`,description:`텍스트형 트리거 (btn_select-text)`},m],b=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],x=[{name:`default`,description:`option 요소 또는 custom 트리거 라벨`}],S=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],C=[{name:`input (native)`,description:`네이티브 select 스타일`},{name:`btn_select · btn_select-text · btn_select-caret`,description:`custom 트리거`},{name:`btn_select-placeholder · is-open`,description:`트리거 상태`},{name:`select_dropdown · select_option`,description:`드롭다운 패널 (HTML 마크업)`},{name:`is-error · is-disabled`,description:`상태`},...h],w=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],T=[{name:`update:modelValue`,description:`선택 값 변경 시 (v-model)`},{name:`click`,description:`custom 버튼 트리거 클릭 시`}],E=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],D=[{name:`--select-padding-right · --select-padding-right-sm · --select-padding-right-lg`,default:`2.25rem · 2rem · 2.5rem`,description:`캐럿 공간(우측 패딩)`},{name:`--select-caret-offset · --select-caret-offset-sm · --select-caret-offset-lg`,default:`0.65rem · 0.5rem · 0.85rem`,description:`캐럿 위치`},{name:`--select-caret-size · --select-caret-size-sm · --select-caret-size-lg`,default:`1em · 0.875em · 1.125em`,description:`캐럿 아이콘 크기`}],O={class:`form_field`},k={class:`btn_row btn_row-wrap`},A={class:`form_field`},j={class:`form_field`},M={class:`form_field`},N={class:`form_field`},P={class:`btn_row btn_row-wrap`},F={class:`form_field`},I={class:`form_field form_field_fit`},L={class:`form_field`},R={class:`btn_row btn_row-wrap`},z={class:`form_field`},B={class:`form_field`},V={class:`form_field`},H={class:`form_field`},U={class:`form_field`},W={class:`btn_row btn_row-wrap`},G={class:`btn_row btn_row-wrap`},K={class:`form_field`},q={class:`form_field`},J={class:`form_field`},Y={class:`form_actions`},X={title:`Select | HTML Components`,activeNav:`select`,pageTitle:`Select`},Z={__name:`select`,setup(m){let h=o([`UX 디자인`,`접근성`]);return(o,m)=>(e(),a(i,null,[m[64]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Select`),r(`p`,{class:`lead`},[c(`옵션 목록에서 값을 선택하는 Select 컴포넌트입니다. 네이티브 `),r(`code`,null,`<select class="input">`),c(`와 커스텀 드롭다운 트리거 `),r(`code`,null,`btn_select`),c(` · `),r(`code`,null,`btn_select-text`),c(` 두 가지 유형을 제공합니다.`)])],-1),n(p,{"heading-id":`type-heading`,title:`유형`,description:`네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,O,[m[3]||=r(`label`,{class:`form_field-label`,for:`select-type-native`},`네이티브 — select.input`,-1),n(_,{id:`select-type-native`,placeholder:`선택하세요`},{default:t(()=>[...m[2]||=[r(`option`,null,`옵션 1`,-1),r(`option`,{selected:``},`옵션 2`,-1),r(`option`,null,`옵션 3`,-1)]]),_:1}),m[4]||=r(`p`,{class:`form_field-hint`},`폼 필드·간단한 선택에 권장합니다.`,-1)]),r(`div`,k,[n(_,{custom:``},{default:t(()=>[...m[5]||=[c(`커스텀 — btn_select`,-1)]]),_:1}),n(_,{custom:``,"select-text":``},{default:t(()=>[...m[6]||=[c(`커스텀 — btn_select-text`,-1)]]),_:1})]),m[7]||=r(`p`,{class:`form_field-hint`},`btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.`,-1)]),_:1}),n(p,{"heading-id":`basic-heading`,title:`기본`,description:`레이블과 힌트 텍스트가 포함된 폼 필드입니다.`,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,A,[m[9]||=r(`label`,{class:`form_field-label`,for:`select-role`},`역할`,-1),n(_,{id:`select-role`,placeholder:`선택하세요`},{default:t(()=>[...m[8]||=[r(`option`,null,`관리자`,-1),r(`option`,null,`편집자`,-1),r(`option`,null,`뷰어`,-1)]]),_:1}),m[10]||=r(`p`,{class:`form_field-hint`},`계정에 부여할 권한을 선택해 주세요.`,-1)])]),_:1}),n(p,{"heading-id":`standalone-heading`,title:`단독 사용`,description:`form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[n(_,{"aria-label":`상태 필터`},{default:t(()=>[...m[11]||=[r(`option`,null,`전체`,-1),r(`option`,null,`활성`,-1),r(`option`,null,`비활성`,-1)]]),_:1}),n(_,{"aria-label":`정렬 기준`,"model-value":`이름순`},{default:t(()=>[...m[12]||=[r(`option`,null,`최신순`,-1),r(`option`,null,`이름순`,-1),r(`option`,null,`오래된순`,-1)]]),_:1}),n(_,{"aria-label":`비활성 셀렉트`,disabled:``},{default:t(()=>[...m[13]||=[r(`option`,null,`수정할 수 없음`,-1)]]),_:1})]),_:1}),n(p,{"heading-id":`size-heading`,title:`크기`,description:`input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,j,[m[15]||=r(`label`,{class:`form_field-label`,for:`select-size-sm`},`Small — 네이티브`,-1),n(_,{id:`select-size-sm`,size:`sm`},{default:t(()=>[...m[14]||=[r(`option`,null,`input_sm`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1})]),r(`div`,M,[m[17]||=r(`label`,{class:`form_field-label`,for:`select-size-md`},`Medium — 네이티브`,-1),n(_,{id:`select-size-md`},{default:t(()=>[...m[16]||=[r(`option`,null,`기본 크기`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1})]),r(`div`,N,[m[19]||=r(`label`,{class:`form_field-label`,for:`select-size-lg`},`Large — 네이티브`,-1),n(_,{id:`select-size-lg`,size:`lg`},{default:t(()=>[...m[18]||=[r(`option`,null,`input_lg`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1})]),r(`div`,P,[n(_,{custom:``,size:`sm`},{default:t(()=>[...m[20]||=[c(`btn_sm`,-1)]]),_:1}),n(_,{custom:``},{default:t(()=>[...m[21]||=[c(`기본`,-1)]]),_:1}),n(_,{custom:``,size:`lg`},{default:t(()=>[...m[22]||=[c(`btn_lg`,-1)]]),_:1})])]),_:1}),n(p,{"heading-id":`width-heading`,title:`너비`,description:`기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,F,[m[24]||=r(`label`,{class:`form_field-label`,for:`select-width-full`},`전체 너비`,-1),n(_,{id:`select-width-full`},{default:t(()=>[...m[23]||=[r(`option`,null,`width: 100%`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1})]),r(`div`,I,[m[26]||=r(`label`,{class:`form_field-label`,for:`select-width-fit`},`제한 너비`,-1),n(_,{id:`select-width-fit`},{default:t(()=>[...m[25]||=[r(`option`,null,`form_field_fit — 최대 320px`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1})]),n(_,{class:`input_fit`,"aria-label":`제한 너비 단독`},{default:t(()=>[...m[27]||=[r(`option`,null,`input_fit 단독 — 최대 320px`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1}),n(_,{custom:``,block:``},{default:t(()=>[...m[28]||=[c(`btn_block — 전체 너비 트리거`,-1)]]),_:1})]),_:1}),n(p,{"heading-id":`placeholder-heading`,title:`플레이스홀더`,description:`빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,L,[m[30]||=r(`label`,{class:`form_field-label`,for:`select-placeholder-native`},`네이티브`,-1),n(_,{id:`select-placeholder-native`,required:``,placeholder:`옵션을 선택하세요`},{default:t(()=>[...m[29]||=[r(`option`,{value:`a`},`옵션 A`,-1),r(`option`,{value:`b`},`옵션 B`,-1),r(`option`,{value:`c`},`옵션 C`,-1)]]),_:1}),m[31]||=r(`p`,{class:`form_field-hint`},`required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.`,-1)]),r(`div`,R,[n(_,{custom:``,placeholder:``},{default:t(()=>[...m[32]||=[c(`옵션을 선택하세요`,-1)]]),_:1}),n(_,{custom:``,"select-text":``,placeholder:``},{default:t(()=>[...m[33]||=[c(`정렬 기준`,-1)]]),_:1})])]),_:1}),n(p,{"heading-id":`optgroup-heading`,title:`옵션 그룹`,description:`optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다.`,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,z,[m[35]||=r(`label`,{class:`form_field-label`,for:`select-optgroup`},`지역`,-1),n(_,{id:`select-optgroup`,placeholder:`선택하세요`},{default:t(()=>[...m[34]||=[r(`optgroup`,{label:`수도권`},[r(`option`,null,`서울특별시`),r(`option`,null,`경기도`),r(`option`,null,`인천광역시`)],-1),r(`optgroup`,{label:`영남권`},[r(`option`,null,`부산광역시`),r(`option`,null,`대구광역시`),r(`option`,null,`울산광역시`)],-1),r(`optgroup`,{label:`호남권`},[r(`option`,null,`광주광역시`),r(`option`,null,`전라남도`),r(`option`,null,`전라북도`)],-1)]]),_:1})])]),_:1}),n(p,{"heading-id":`multiple-heading`,title:`다중 선택`,description:`multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다.`,code:`<script setup>
import { ref } from 'vue';
import Select from '@/components/Select.vue';

const selectedInterests = ref(['UX 디자인', '접근성']);
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="select-multiple">관심 분야</label>
    <Select v-model="selectedInterests" id="select-multiple" multiple :list-size="5" aria-describedby="select-multiple-hint">
      <option>UX 디자인</option>
      <option>UI 개발</option>
      <option>접근성</option>
      <option>디자인 시스템</option>
      <option>리서치</option>
      <option>프로토타이핑</option>
    </Select>
    <p class="form_field-hint" id="select-multiple-hint">복수 선택 시 list-size로 표시 행 수를 지정합니다. (네이티브 size 속성)</p>
  </div>
</template>`},{default:t(()=>[r(`div`,B,[m[37]||=r(`label`,{class:`form_field-label`,for:`select-multiple`},`관심 분야`,-1),n(_,{modelValue:h.value,"onUpdate:modelValue":m[0]||=e=>h.value=e,id:`select-multiple`,multiple:``,"list-size":5,"aria-describedby":`select-multiple-hint`},{default:t(()=>[...m[36]||=[r(`option`,null,`UX 디자인`,-1),r(`option`,null,`UI 개발`,-1),r(`option`,null,`접근성`,-1),r(`option`,null,`디자인 시스템`,-1),r(`option`,null,`리서치`,-1),r(`option`,null,`프로토타이핑`,-1)]]),_:1},8,[`modelValue`]),m[38]||=r(`p`,{class:`form_field-hint`,id:`select-multiple-hint`},`복수 선택 시 list-size로 표시 행 수를 지정합니다. (네이티브 size 속성)`,-1)])]),_:1}),n(p,{"heading-id":`state-heading`,title:`상태`,description:`disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[r(`div`,V,[m[40]||=r(`label`,{class:`form_field-label`,for:`select-state-default`},`기본`,-1),n(_,{id:`select-state-default`},{default:t(()=>[...m[39]||=[r(`option`,null,`선택 가능`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1})]),r(`div`,H,[m[42]||=r(`label`,{class:`form_field-label`,for:`select-state-disabled`},`비활성`,-1),n(_,{id:`select-state-disabled`,disabled:``},{default:t(()=>[...m[41]||=[r(`option`,{selected:``},`수정할 수 없음`,-1),r(`option`,null,`옵션 2`,-1)]]),_:1}),m[43]||=r(`p`,{class:`form_field-hint`},`disabled 속성으로 선택을 막습니다.`,-1)]),r(`div`,U,[m[45]||=r(`label`,{class:`form_field-label`,for:`select-state-error`},`에러`,-1),n(_,{id:`select-state-error`,error:``,placeholder:`선택하세요`},{default:t(()=>[...m[44]||=[r(`option`,{value:`a`},`옵션 A`,-1)]]),_:1}),m[46]||=r(`p`,{class:`form_field-error`,id:`select-state-error-msg`,role:`alert`},`필수 항목입니다. 옵션을 선택해 주세요.`,-1)]),r(`div`,W,[n(_,{custom:``,open:``},{default:t(()=>[...m[47]||=[c(`열림`,-1)]]),_:1}),n(_,{custom:``,disabled:``},{default:t(()=>[...m[48]||=[c(`비활성`,-1)]]),_:1}),n(_,{custom:``,error:``},{default:t(()=>[...m[49]||=[c(`에러`,-1)]]),_:1}),n(_,{custom:``,open:``,"select-text":``},{default:t(()=>[...m[50]||=[c(`텍스트형 열림`,-1)]]),_:1})])]),_:1}),n(p,{"heading-id":`custom-heading`,title:`커스텀 트리거`,description:`btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup="listbox" · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다.`,stack:``,code:`<script setup>
import Select from '@/components/Select.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Select custom>서울특별시</Select>
    <Select custom select-text>최신순</Select>
    <Select custom select-text size="sm">필터</Select>
  </div>
  <p class="form_field-hint">상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
</template>`},{default:t(()=>[r(`div`,G,[n(_,{custom:``},{default:t(()=>[...m[51]||=[c(`서울특별시`,-1)]]),_:1}),n(_,{custom:``,"select-text":``},{default:t(()=>[...m[52]||=[c(`최신순`,-1)]]),_:1}),n(_,{custom:``,"select-text":``,size:`sm`},{default:t(()=>[...m[53]||=[c(`필터`,-1)]]),_:1})]),m[54]||=r(`p`,{class:`form_field-hint`},[c(`상세 변형은 `),r(`a`,{href:`button.html#type-select-heading`},`Button — 셀렉트 박스형`),c(` 섹션을 참고하세요.`)],-1)]),_:1}),n(p,{"heading-id":`example-heading`,title:`조합 예시`,description:`유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import FormLayout from '@/components/FormLayout.vue';
import Select from '@/components/Select.vue';
<\/script>

<template>
  <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading" @submit.prevent>
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
</template>`},{default:t(()=>[n(g,{layout:`vertical`,compact:``,novalidate:``,"aria-labelledby":`example-heading`,onSubmit:m[1]||=l(()=>{},[`prevent`])},{default:t(()=>[r(`div`,K,[m[56]||=r(`label`,{class:`form_field-label`,for:`select-ex-country`},[c(` 국가`),r(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),n(_,{id:`select-ex-country`,size:`sm`,class:`is-success`,"model-value":`kr`,required:``,"aria-required":`true`,"aria-invalid":`false`,"aria-describedby":`select-ex-country-success`},{default:t(()=>[...m[55]||=[r(`option`,{value:`kr`},`대한민국`,-1),r(`option`,{value:`us`},`미국`,-1),r(`option`,{value:`jp`},`일본`,-1)]]),_:1}),m[57]||=r(`p`,{class:`form_field-success`,id:`select-ex-country-success`,role:`status`},`지원되는 국가입니다.`,-1)]),r(`div`,q,[m[59]||=r(`label`,{class:`form_field-label`,for:`select-ex-plan`},[c(` 요금제`),r(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),n(_,{id:`select-ex-plan`,size:`sm`,error:``,required:``,placeholder:`요금제를 선택하세요`,"aria-required":`true`,"aria-invalid":`true`,"aria-describedby":`select-ex-plan-error`},{default:t(()=>[...m[58]||=[r(`option`,{value:`free`},`Free`,-1),r(`option`,{value:`pro`},`Pro`,-1),r(`option`,{value:`enterprise`},`Enterprise`,-1)]]),_:1}),m[60]||=r(`p`,{class:`form_field-error`,id:`select-ex-plan-error`,role:`alert`},`요금제 선택은 필수입니다.`,-1)]),r(`div`,J,[m[62]||=r(`label`,{class:`form_field-label`,for:`select-ex-lang`},`언어`,-1),n(_,{id:`select-ex-lang`,size:`sm`,"model-value":`ko`},{default:t(()=>[...m[61]||=[r(`option`,{value:`ko`},`한국어`,-1),r(`option`,{value:`en`},`English`,-1),r(`option`,{value:`ja`},`日本語`,-1)]]),_:1}),m[63]||=r(`p`,{class:`form_field-hint`},`서비스 표시 언어를 선택합니다.`,-1)]),r(`div`,Y,[n(f,{variant:`filled`,color:`primary`,size:`sm`,type:`submit`,label:`가입하기`}),n(f,{variant:`ghost`,size:`sm`,type:`button`,label:`취소`})])]),_:1})]),_:1}),n(u,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(d,{columns:s(v),rows:s(y),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(d,{columns:s(b),rows:s(x),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-events-heading`,title:`API · Events`},{default:t(()=>[n(d,{columns:s(w),rows:s(T),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(d,{columns:s(S),rows:s(C),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(d,{columns:s(E),rows:s(D),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Z as default,X as docMeta};