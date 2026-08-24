import{L as e,Y as t,b as n,d as r,i,m as a,st as o,y as s}from"./CCnt5OSV.js";import{l as c,t as l}from"./DkmWXf_S.js";import{t as u}from"./D5AUKneU.js";import{t as d}from"./gHQDdAlU.js";import{t as f}from"./DD3RWXAt.js";import{t as ee}from"./D6IbhUhQ.js";import{t as p}from"./UFk9LiVn.js";import{t as m}from"./Cuo-DXMr2.js";import{t as h}from"./Bt5d3dz_2.js";import{t as g}from"./L2u3Yheu.js";var _=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],v=[{name:`model-value`,type:`string`,default:`—`,description:`v-model 바인딩 값`},{name:`type`,type:`string`,default:`text`,description:`input type 속성`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`input_sm · input_lg`},{name:`placeholder`,type:`string`,default:`—`,description:`placeholder 속성`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`error`,type:`boolean`,default:`false`,description:`오류 상태 (is-error, aria-invalid)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100% (input_block)`},{name:`clearable`,type:`boolean`,default:`false`,description:`값이 있을 때 우측 지우기 버튼 (input_clearable). readonly · disabled면 미표시`}],y=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],b=[{name:`prefix`,description:`앞쪽 애드온 (input_group-addon)`},{name:`suffix`,description:`뒤쪽 애드온`}],x=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],S=[{name:`input`,description:`텍스트 입력 루트`},{name:`input_sm · input_lg · input_block`,description:`크기·너비`},{name:`input_masked`,description:`마스킹 입력값 표시 시 자동 적용 (type="password" + 값 있음)`},{name:`input_group · input_group-addon`,description:`애드온 묶음`},{name:`input_clearable · input_clear`,description:`지우기 버튼 래퍼·버튼 (clearable prop)`},{name:`is-error · is-disabled`,description:`상태`},...ee],C=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],w=[{name:`--input-max-width`,default:`320px`,description:`데모·폼 최대 너비`},{name:`--input-clear-size · --input-clear-offset`,default:`—`,description:`클리어 버튼`},{name:`--input-font-masked · --input-masked-letter-spacing`,default:`—`,description:`마스킹 입력`}],T=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],E=[{name:`update:modelValue`,description:`입력 값 변경 시 (v-model)`},{name:`paste`,description:`붙여넣기 이벤트. data-input-split · data-input-otp 내부에서는 값을 각 칸에 분배합니다.`},{name:`keydown`,description:`키 입력 이벤트. 분할 입력의 Backspace 이동과 OTP 좌우 방향키 이동을 지원합니다.`}],D={class:`form_field`},O={class:`input_field`},k={class:`input_field`},A={class:`input_field`},j={class:`form_field`},M={class:`form_field`},N={class:`form_field`},P={class:`form_field`},F={class:`form_field`},I={class:`form_field`},L={class:`form_field`},R={class:`form_field`},z={class:`form_field`},B={class:`form_field`},V={class:`input_split`,role:`group`,"aria-labelledby":`input-kind-card-1`,"data-input-split":``,"data-input-numeric":``},H={class:`input_row`},U={class:`form_field`},W={class:`input_split`,role:`group`,"aria-label":`카드 유효기간`,"data-input-split":``,"data-input-numeric":``},G={class:`form_field`},K={class:`form_field`},q={class:`input_otp`,role:`group`,"aria-labelledby":`input-kind-otp-label`,"data-input-otp":``},J={class:`form_field`},Y={class:`input_group`},X={class:`form_field`},Z={class:`input_group`},Q={class:`form_field`},te={class:`input_split`,role:`group`,"aria-labelledby":`input-kind-rrn-1`,"data-input-split":``,"data-input-numeric":``},ne={class:`form_field`},re={class:`input_split`,role:`group`,"aria-labelledby":`input-kind-biz-1`,"data-input-split":``,"data-input-numeric":``},ie={class:`form_field`},ae={class:`input_group`},oe={class:`form_field`},se={class:`input_group`},ce={class:`form_field`},le={class:`form_field`},ue={class:`form_field`},de={class:`form_field`},fe={class:`form_field`},pe={class:`form_field`},me={class:`form_field`},he={class:`form_field form_field_fit`},ge={class:`form_field form_field_fit`},_e={class:`form_field form_field_fit`},ve={class:`input_field input_field_fit`},ye={class:`input_field input_field_fit`},be={class:`input_field input_field_fit`},xe={class:`form_field`},Se={class:`form_field`},Ce={class:`form_field`},we={class:`form_field`},Te={class:`form_field`},Ee={class:`form_field`},De={class:`form_field form_field_fit`},Oe={class:`form_field form_field_fit`},ke={class:`form_field form_field_fit`},Ae={class:`form_field`},je={class:`form_field`},Me={class:`form_field`},Ne={class:`form_actions`},$={title:`Input | HTML Components`,activeNav:`input`,pageTitle:`Input`},Pe={__name:`input`,setup(ee){return(ee,$)=>(e(),a(i,null,[$[85]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Input`),r(`p`,{class:`lead`},`텍스트·숫자·날짜 등 단일 행 입력을 위한 Input 컴포넌트입니다. form_field · input_field · input_group · input_split · input_otp를 조합해 레이블, 힌트, 애드온, 분할·인증 입력을 구성합니다.`)],-1),n(f,{"heading-id":`basic-heading`,title:`기본`,description:`레이블과 힌트 텍스트가 포함된 폼 필드입니다.`,code:`<script setup>
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-name">이름</label>
    <Input id="input-name" placeholder="이름을 입력하세요" clearable />
    <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
  </div>
</template>`},{default:t(()=>[r(`div`,D,[$[0]||=r(`label`,{class:`form_field-label`,for:`input-name`},`이름`,-1),n(h,{id:`input-name`,placeholder:`이름을 입력하세요`,clearable:``}),$[1]||=r(`p`,{class:`form_field-hint`},`2~20자 이내로 입력해 주세요.`,-1)])]),_:1}),n(f,{"heading-id":`standalone-heading`,title:`단독 사용`,description:`form_field 래퍼 없이 input_field로 레이블과 input을 묶을 수 있습니다. 접근 가능한 이름은 반드시 지정합니다. 보이는 레이블이 있으면 label.form_field-label + for를, 아이콘만 있는 검색창·툴바 등에는 label.input_group으로 input을 감싸고 input_group-label_hidden으로 이름을 제공합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="input_field">
    <label class="form_field-label" for="input-standalone-placeholder">검색어</label>
    <Input id="input-standalone-placeholder" placeholder="플레이스홀더" clearable />
  </div>
  <div class="input_field">
    <label class="form_field-label" for="input-standalone-value">닉네임</label>
    <Input id="input-standalone-value" model-value="입력된 값" clearable />
  </div>
  <div class="input_field">
    <label class="form_field-label" for="input-standalone-disabled">코드</label>
    <Input id="input-standalone-disabled" placeholder="비활성" disabled />
  </div>
  <Input type="search" placeholder="검색어를 입력하세요" aria-label="검색" clearable>
    <template #prefix>
      <Icon name="search" size="sm" />
    </template>
  </Input>
  <p class="form_field-hint">아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에 보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.</p>
</template>`},{default:t(()=>[r(`div`,O,[$[2]||=r(`label`,{class:`form_field-label`,for:`input-standalone-placeholder`},`검색어`,-1),n(h,{id:`input-standalone-placeholder`,placeholder:`플레이스홀더`,clearable:``})]),r(`div`,k,[$[3]||=r(`label`,{class:`form_field-label`,for:`input-standalone-value`},`닉네임`,-1),n(h,{id:`input-standalone-value`,"model-value":`입력된 값`,clearable:``})]),r(`div`,A,[$[4]||=r(`label`,{class:`form_field-label`,for:`input-standalone-disabled`},`코드`,-1),n(h,{id:`input-standalone-disabled`,placeholder:`비활성`,disabled:``})]),n(h,{type:`search`,placeholder:`검색어를 입력하세요`,"aria-label":`검색`,clearable:``},{prefix:t(()=>[n(u,{name:`search`,size:`sm`})]),_:1}),$[5]||=r(`p`,{class:`form_field-hint`},[s(`아이콘만 있는 툴바 검색은 `),r(`code`,null,`label.input_group`),s(`으로 input을 감싸고, 화면에 보이지 않는 `),r(`code`,null,`input_group-label_hidden`),s(`으로 접근 가능한 이름을 지정합니다.`)],-1)]),_:1}),n(f,{"heading-id":`type-heading`,title:`입력 타입`,description:`HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class="input"은 모든 타입에 공통으로 사용합니다.`,stack:``,code:`<script setup>
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-type-text">텍스트</label>
    <Input id="input-type-text" placeholder="일반 텍스트" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-password">비밀번호</label>
    <Input id="input-type-password" type="password" placeholder="8자 이상" autocomplete="new-password" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-email">이메일</label>
    <Input id="input-type-email" type="email" placeholder="name@example.com" autocomplete="email" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-tel">전화번호</label>
    <Input id="input-type-tel" type="tel" placeholder="010-0000-0000" autocomplete="tel" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-url">URL</label>
    <Input id="input-type-url" type="url" placeholder="https://example.com" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-search">검색</label>
    <Input id="input-type-search" type="search" placeholder="키워드 검색" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-number">숫자</label>
    <Input id="input-type-number" type="number" placeholder="0" min="0" max="100" step="1" />
    <p class="form_field-hint">0~100 사이 정수</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-date">날짜</label>
    <Input id="input-type-date" type="date" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-type-time">시간</label>
    <Input id="input-type-time" type="time" />
  </div>
</template>`},{default:t(()=>[r(`div`,j,[$[6]||=r(`label`,{class:`form_field-label`,for:`input-type-text`},`텍스트`,-1),n(h,{id:`input-type-text`,placeholder:`일반 텍스트`})]),r(`div`,M,[$[7]||=r(`label`,{class:`form_field-label`,for:`input-type-password`},`비밀번호`,-1),n(h,{id:`input-type-password`,type:`password`,placeholder:`8자 이상`,autocomplete:`new-password`})]),r(`div`,N,[$[8]||=r(`label`,{class:`form_field-label`,for:`input-type-email`},`이메일`,-1),n(h,{id:`input-type-email`,type:`email`,placeholder:`name@example.com`,autocomplete:`email`})]),r(`div`,P,[$[9]||=r(`label`,{class:`form_field-label`,for:`input-type-tel`},`전화번호`,-1),n(h,{id:`input-type-tel`,type:`tel`,placeholder:`010-0000-0000`,autocomplete:`tel`})]),r(`div`,F,[$[10]||=r(`label`,{class:`form_field-label`,for:`input-type-url`},`URL`,-1),n(h,{id:`input-type-url`,type:`url`,placeholder:`https://example.com`})]),r(`div`,I,[$[11]||=r(`label`,{class:`form_field-label`,for:`input-type-search`},`검색`,-1),n(h,{id:`input-type-search`,type:`search`,placeholder:`키워드 검색`})]),r(`div`,L,[$[12]||=r(`label`,{class:`form_field-label`,for:`input-type-number`},`숫자`,-1),n(h,{id:`input-type-number`,type:`number`,placeholder:`0`,min:`0`,max:`100`,step:`1`}),$[13]||=r(`p`,{class:`form_field-hint`},`0~100 사이 정수`,-1)]),r(`div`,R,[$[14]||=r(`label`,{class:`form_field-label`,for:`input-type-date`},`날짜`,-1),n(h,{id:`input-type-date`,type:`date`})]),r(`div`,z,[$[15]||=r(`label`,{class:`form_field-label`,for:`input-type-time`},`시간`,-1),n(h,{id:`input-type-time`,type:`time`})])]),_:1}),n(f,{"heading-id":`kind-heading`,title:`입력 종류`,description:`결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Select from '@/components/Select.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-card-1">카드번호</label>
    <div class="input_split" role="group" aria-labelledby="input-kind-card-1" data-input-split data-input-numeric>
      <Input id="input-kind-card-1" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 1~4자리" placeholder="0000" />
      <span class="input_split_sep" aria-hidden="true">-</span>
      <Input inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 5~8자리" placeholder="0000" />
      <span class="input_split_sep" aria-hidden="true">-</span>
      <Input type="password" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 9~12자리" placeholder="0000" />
      <span class="input_split_sep" aria-hidden="true">-</span>
      <Input type="password" inputmode="numeric" maxlength="4" autocomplete="cc-number" aria-label="카드번호 13~16자리" placeholder="0000" />
    </div>
    <p class="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
  </div>
  <div class="input_row">
    <div class="form_field">
      <label class="form_field-label" for="input-kind-exp-mm">유효기간</label>
      <div class="input_split" role="group" aria-label="카드 유효기간" data-input-split data-input-numeric>
        <Input id="input-kind-exp-mm" inputmode="numeric" maxlength="2" autocomplete="cc-exp-month" aria-label="월(MM)" placeholder="MM" />
        <span class="input_split_sep" aria-hidden="true">/</span>
        <Input inputmode="numeric" maxlength="2" autocomplete="cc-exp-year" aria-label="년(YY)" placeholder="YY" />
      </div>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="input-kind-cvc">CVC</label>
      <Input id="input-kind-cvc" type="password" inputmode="numeric" maxlength="3" autocomplete="cc-csc" placeholder="000" aria-describedby="input-kind-cvc-hint" />
      <p class="form_field-hint" id="input-kind-cvc-hint">카드 뒷면 3자리</p>
    </div>
  </div>
  <div class="form_field">
    <label class="form_field-label" id="input-kind-otp-label">인증번호 (OTP)</label>
    <div class="input_otp" role="group" aria-labelledby="input-kind-otp-label" data-input-otp>
      <Input inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="인증번호 1자리" />
      <Input inputmode="numeric" maxlength="1" aria-label="인증번호 2자리" />
      <Input inputmode="numeric" maxlength="1" aria-label="인증번호 3자리" />
      <Input inputmode="numeric" maxlength="1" aria-label="인증번호 4자리" />
      <Input inputmode="numeric" maxlength="1" aria-label="인증번호 5자리" />
      <Input inputmode="numeric" maxlength="1" aria-label="인증번호 6자리" />
    </div>
    <p class="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-phone">휴대폰 번호</label>
    <div class="input_group">
      <span class="input_group-addon">+82</span>
      <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autocomplete="tel" />
      <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
    </div>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-sms-code">휴대폰 인증번호</label>
    <div class="input_group">
      <Input id="input-kind-sms-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="6자리 인증번호" aria-describedby="input-kind-sms-hint" />
      <span class="input_group-addon" aria-hidden="true">03:00</span>
      <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
    </div>
    <p class="form_field-hint" id="input-kind-sms-hint">인증번호가 오지 않으면 재요청해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-rrn-1">주민등록번호</label>
    <div class="input_split" role="group" aria-labelledby="input-kind-rrn-1" data-input-split data-input-numeric>
      <Input id="input-kind-rrn-1" inputmode="numeric" maxlength="6" aria-label="주민등록번호 앞 6자리" placeholder="000000" />
      <span class="input_split_sep" aria-hidden="true">-</span>
      <Input type="password" inputmode="numeric" maxlength="7" aria-label="주민등록번호 뒤 7자리" placeholder="0000000" />
    </div>
    <p class="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-biz-1">사업자등록번호</label>
    <div class="input_split" role="group" aria-labelledby="input-kind-biz-1" data-input-split data-input-numeric>
      <Input id="input-kind-biz-1" inputmode="numeric" maxlength="3" aria-label="사업자등록번호 앞 3자리" placeholder="000" />
      <span class="input_split_sep" aria-hidden="true">-</span>
      <Input inputmode="numeric" maxlength="2" aria-label="사업자등록번호 중간 2자리" placeholder="00" />
      <span class="input_split_sep" aria-hidden="true">-</span>
      <Input inputmode="numeric" maxlength="5" aria-label="사업자등록번호 뒤 5자리" placeholder="00000" />
    </div>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-account-bank">계좌번호</label>
    <div class="input_group">
      <Select id="input-kind-account-bank" aria-label="은행 선택">
        <option>은행 선택</option>
        <option>국민은행</option>
        <option>신한은행</option>
        <option>우리은행</option>
      </Select>
      <Input inputmode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
    </div>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-zip">우편번호</label>
    <div class="input_group">
      <Input id="input-kind-zip" inputmode="numeric" maxlength="5" placeholder="00000" autocomplete="postal-code" aria-label="우편번호" />
      <Button variant="outline" size="sm" type="button" label="주소 검색" />
    </div>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-kind-amount">결제 금액</label>
    <Input id="input-kind-amount" inputmode="numeric" placeholder="0" aria-label="결제 금액">
    <template #prefix>₩</template>
    <template #suffix>원</template>
  </Input>
  <p class="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
  </div>
</template>`},{default:t(()=>[r(`div`,B,[$[19]||=r(`label`,{class:`form_field-label`,for:`input-kind-card-1`},`카드번호`,-1),r(`div`,V,[n(h,{id:`input-kind-card-1`,inputmode:`numeric`,maxlength:`4`,autocomplete:`cc-number`,"aria-label":`카드번호 1~4자리`,placeholder:`0000`}),$[16]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`-`,-1),n(h,{inputmode:`numeric`,maxlength:`4`,autocomplete:`cc-number`,"aria-label":`카드번호 5~8자리`,placeholder:`0000`}),$[17]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`-`,-1),n(h,{type:`password`,inputmode:`numeric`,maxlength:`4`,autocomplete:`cc-number`,"aria-label":`카드번호 9~12자리`,placeholder:`0000`}),$[18]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`-`,-1),n(h,{type:`password`,inputmode:`numeric`,maxlength:`4`,autocomplete:`cc-number`,"aria-label":`카드번호 13~16자리`,placeholder:`0000`})]),$[20]||=r(`p`,{class:`form_field-hint`},`뒤 8자리는 마스킹 처리할 수 있습니다.`,-1)]),r(`div`,H,[r(`div`,U,[$[22]||=r(`label`,{class:`form_field-label`,for:`input-kind-exp-mm`},`유효기간`,-1),r(`div`,W,[n(h,{id:`input-kind-exp-mm`,inputmode:`numeric`,maxlength:`2`,autocomplete:`cc-exp-month`,"aria-label":`월(MM)`,placeholder:`MM`}),$[21]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`/`,-1),n(h,{inputmode:`numeric`,maxlength:`2`,autocomplete:`cc-exp-year`,"aria-label":`년(YY)`,placeholder:`YY`})])]),r(`div`,G,[$[23]||=r(`label`,{class:`form_field-label`,for:`input-kind-cvc`},`CVC`,-1),n(h,{id:`input-kind-cvc`,type:`password`,inputmode:`numeric`,maxlength:`3`,autocomplete:`cc-csc`,placeholder:`000`,"aria-describedby":`input-kind-cvc-hint`}),$[24]||=r(`p`,{class:`form_field-hint`,id:`input-kind-cvc-hint`},`카드 뒷면 3자리`,-1)])]),r(`div`,K,[$[25]||=r(`label`,{class:`form_field-label`,id:`input-kind-otp-label`},`인증번호 (OTP)`,-1),r(`div`,q,[n(h,{inputmode:`numeric`,maxlength:`1`,autocomplete:`one-time-code`,"aria-label":`인증번호 1자리`}),n(h,{inputmode:`numeric`,maxlength:`1`,"aria-label":`인증번호 2자리`}),n(h,{inputmode:`numeric`,maxlength:`1`,"aria-label":`인증번호 3자리`}),n(h,{inputmode:`numeric`,maxlength:`1`,"aria-label":`인증번호 4자리`}),n(h,{inputmode:`numeric`,maxlength:`1`,"aria-label":`인증번호 5자리`}),n(h,{inputmode:`numeric`,maxlength:`1`,"aria-label":`인증번호 6자리`})]),$[26]||=r(`p`,{class:`form_field-hint`},`문자 메시지로 받은 6자리 번호를 입력하세요.`,-1)]),r(`div`,J,[$[28]||=r(`label`,{class:`form_field-label`,for:`input-kind-phone`},`휴대폰 번호`,-1),r(`div`,Y,[$[27]||=r(`span`,{class:`input_group-addon`},`+82`,-1),n(h,{id:`input-kind-phone`,type:`tel`,placeholder:`10-0000-0000`,autocomplete:`tel`}),n(d,{variant:`outline`,color:`primary`,size:`sm`,type:`button`,label:`인증요청`})])]),r(`div`,X,[$[30]||=r(`label`,{class:`form_field-label`,for:`input-kind-sms-code`},`휴대폰 인증번호`,-1),r(`div`,Z,[n(h,{id:`input-kind-sms-code`,inputmode:`numeric`,maxlength:`6`,autocomplete:`one-time-code`,placeholder:`6자리 인증번호`,"aria-describedby":`input-kind-sms-hint`}),$[29]||=r(`span`,{class:`input_group-addon`,"aria-hidden":`true`},`03:00`,-1),n(d,{variant:`outline`,color:`primary`,size:`sm`,type:`button`,label:`확인`})]),$[31]||=r(`p`,{class:`form_field-hint`,id:`input-kind-sms-hint`},`인증번호가 오지 않으면 재요청해 주세요.`,-1)]),r(`div`,Q,[$[33]||=r(`label`,{class:`form_field-label`,for:`input-kind-rrn-1`},`주민등록번호`,-1),r(`div`,te,[n(h,{id:`input-kind-rrn-1`,inputmode:`numeric`,maxlength:`6`,"aria-label":`주민등록번호 앞 6자리`,placeholder:`000000`}),$[32]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`-`,-1),n(h,{type:`password`,inputmode:`numeric`,maxlength:`7`,"aria-label":`주민등록번호 뒤 7자리`,placeholder:`0000000`})]),$[34]||=r(`p`,{class:`form_field-hint`},`뒷자리는 보안을 위해 마스킹합니다.`,-1)]),r(`div`,ne,[$[37]||=r(`label`,{class:`form_field-label`,for:`input-kind-biz-1`},`사업자등록번호`,-1),r(`div`,re,[n(h,{id:`input-kind-biz-1`,inputmode:`numeric`,maxlength:`3`,"aria-label":`사업자등록번호 앞 3자리`,placeholder:`000`}),$[35]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`-`,-1),n(h,{inputmode:`numeric`,maxlength:`2`,"aria-label":`사업자등록번호 중간 2자리`,placeholder:`00`}),$[36]||=r(`span`,{class:`input_split_sep`,"aria-hidden":`true`},`-`,-1),n(h,{inputmode:`numeric`,maxlength:`5`,"aria-label":`사업자등록번호 뒤 5자리`,placeholder:`00000`})])]),r(`div`,ie,[$[39]||=r(`label`,{class:`form_field-label`,for:`input-kind-account-bank`},`계좌번호`,-1),r(`div`,ae,[n(g,{id:`input-kind-account-bank`,"aria-label":`은행 선택`},{default:t(()=>[...$[38]||=[r(`option`,null,`은행 선택`,-1),r(`option`,null,`국민은행`,-1),r(`option`,null,`신한은행`,-1),r(`option`,null,`우리은행`,-1)]]),_:1}),n(h,{inputmode:`numeric`,placeholder:`계좌번호 (- 없이)`,"aria-label":`계좌번호`})])]),r(`div`,oe,[$[40]||=r(`label`,{class:`form_field-label`,for:`input-kind-zip`},`우편번호`,-1),r(`div`,se,[n(h,{id:`input-kind-zip`,inputmode:`numeric`,maxlength:`5`,placeholder:`00000`,autocomplete:`postal-code`,"aria-label":`우편번호`}),n(d,{variant:`outline`,size:`sm`,type:`button`,label:`주소 검색`})])]),r(`div`,ce,[$[43]||=r(`label`,{class:`form_field-label`,for:`input-kind-amount`},`결제 금액`,-1),n(h,{id:`input-kind-amount`,inputmode:`numeric`,placeholder:`0`,"aria-label":`결제 금액`},{prefix:t(()=>[...$[41]||=[s(`₩`,-1)]]),suffix:t(()=>[...$[42]||=[s(`원`,-1)]]),_:1}),$[44]||=r(`p`,{class:`form_field-hint`},`천 단위 구분은 표시용으로 별도 포맷팅합니다.`,-1)])]),_:1}),n(f,{"heading-id":`size-heading`,title:`크기`,description:`input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다.`,stack:``,code:`<script setup>
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-size-sm">Small</label>
    <Input id="input-size-sm" size="sm" placeholder="input_sm" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-size-md">Medium</label>
    <Input id="input-size-md" placeholder="기본 크기" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-size-lg">Large</label>
    <Input id="input-size-lg" size="lg" placeholder="input_lg" />
  </div>
</template>`},{default:t(()=>[r(`div`,le,[$[45]||=r(`label`,{class:`form_field-label`,for:`input-size-sm`},`Small`,-1),n(h,{id:`input-size-sm`,size:`sm`,placeholder:`input_sm`})]),r(`div`,ue,[$[46]||=r(`label`,{class:`form_field-label`,for:`input-size-md`},`Medium`,-1),n(h,{id:`input-size-md`,placeholder:`기본 크기`})]),r(`div`,de,[$[47]||=r(`label`,{class:`form_field-label`,for:`input-size-lg`},`Large`,-1),n(h,{id:`input-size-lg`,size:`lg`,placeholder:`input_lg`})])]),_:1}),n(f,{"heading-id":`width-heading`,title:`너비`,description:`크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-width-full-sm">전체 너비 — Small</label>
    <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-width-full-md">전체 너비 — Medium</label>
    <Input id="input-width-full-md" placeholder="width: 100%" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-width-full-lg">전체 너비 — Large</label>
    <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="input-width-fit-sm">제한 너비 — Small</label>
    <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="input-width-fit-md">제한 너비 — Medium</label>
    <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="input-width-fit-lg">제한 너비 — Large</label>
    <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
  </div>
  <div class="input_field input_field_fit">
    <label class="form_field-label" for="input-width-fit-standalone-sm">input_field_fit — Small</label>
    <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
  </div>
  <div class="input_field input_field_fit">
    <label class="form_field-label" for="input-width-fit-standalone-md">input_field_fit — Medium</label>
    <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
  </div>
  <div class="input_field input_field_fit">
    <label class="form_field-label" for="input-width-fit-standalone-lg">input_field_fit — Large</label>
    <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
  </div>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <label class="form_field-label" for="input-width-form-fit">form_fit</label>
      <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
    </div>
  </FormLayout>
  <Input class="input_fit" size="sm" placeholder="input_group input_fit — Small" aria-label="아이디">
  <template #prefix>@</template>
  </Input>
  <Input class="input_fit" placeholder="input_group input_fit — Medium" aria-label="아이디">
  <template #prefix>@</template>
  </Input>
</template>`},{default:t(()=>[r(`div`,fe,[$[48]||=r(`label`,{class:`form_field-label`,for:`input-width-full-sm`},`전체 너비 — Small`,-1),n(h,{id:`input-width-full-sm`,size:`sm`,placeholder:`width: 100%`})]),r(`div`,pe,[$[49]||=r(`label`,{class:`form_field-label`,for:`input-width-full-md`},`전체 너비 — Medium`,-1),n(h,{id:`input-width-full-md`,placeholder:`width: 100%`})]),r(`div`,me,[$[50]||=r(`label`,{class:`form_field-label`,for:`input-width-full-lg`},`전체 너비 — Large`,-1),n(h,{id:`input-width-full-lg`,size:`lg`,placeholder:`width: 100%`})]),r(`div`,he,[$[51]||=r(`label`,{class:`form_field-label`,for:`input-width-fit-sm`},`제한 너비 — Small`,-1),n(h,{id:`input-width-fit-sm`,size:`sm`,placeholder:`form_field_fit — 최대 320px`})]),r(`div`,ge,[$[52]||=r(`label`,{class:`form_field-label`,for:`input-width-fit-md`},`제한 너비 — Medium`,-1),n(h,{id:`input-width-fit-md`,placeholder:`form_field_fit — 최대 320px`})]),r(`div`,_e,[$[53]||=r(`label`,{class:`form_field-label`,for:`input-width-fit-lg`},`제한 너비 — Large`,-1),n(h,{id:`input-width-fit-lg`,size:`lg`,placeholder:`form_field_fit — 최대 320px`})]),r(`div`,ve,[$[54]||=r(`label`,{class:`form_field-label`,for:`input-width-fit-standalone-sm`},`input_field_fit — Small`,-1),n(h,{id:`input-width-fit-standalone-sm`,size:`sm`,placeholder:`최대 320px`})]),r(`div`,ye,[$[55]||=r(`label`,{class:`form_field-label`,for:`input-width-fit-standalone-md`},`input_field_fit — Medium`,-1),n(h,{id:`input-width-fit-standalone-md`,placeholder:`최대 320px`})]),r(`div`,be,[$[56]||=r(`label`,{class:`form_field-label`,for:`input-width-fit-standalone-lg`},`input_field_fit — Large`,-1),n(h,{id:`input-width-fit-standalone-lg`,size:`lg`,placeholder:`최대 320px`})]),n(m,{layout:`vertical`,fit:``},{default:t(()=>[r(`div`,xe,[$[57]||=r(`label`,{class:`form_field-label`,for:`input-width-form-fit`},`form_fit`,-1),n(h,{id:`input-width-form-fit`,placeholder:`폼 내 필드·그룹 최대 320px`})])]),_:1}),n(h,{class:`input_fit`,size:`sm`,placeholder:`input_group input_fit — Small`,"aria-label":`아이디`},{prefix:t(()=>[...$[58]||=[s(`@`,-1)]]),_:1}),n(h,{class:`input_fit`,placeholder:`input_group input_fit — Medium`,"aria-label":`아이디`},{prefix:t(()=>[...$[59]||=[s(`@`,-1)]]),_:1})]),_:1}),n(f,{"heading-id":`group-heading`,title:`Input Group`,description:`input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다.`,stack:``,code:`<script setup>
import Input from '@/components/Input.vue';
<\/script>

<template>
  <Input placeholder="example.com" aria-label="도메인">
  <template #prefix>https://</template>
  </Input>
  <Input placeholder="username" aria-label="사용자명">
  <template #prefix>@</template>
  </Input>
  <Input type="number" placeholder="금액" aria-label="금액">
  <template #suffix>원</template>
  </Input>
  <Input type="number" placeholder="0" aria-label="결제 금액">
  <template #prefix>₩</template>
  <template #suffix>KRW</template>
  </Input>
</template>`},{default:t(()=>[n(h,{placeholder:`example.com`,"aria-label":`도메인`},{prefix:t(()=>[...$[60]||=[s(`https://`,-1)]]),_:1}),n(h,{placeholder:`username`,"aria-label":`사용자명`},{prefix:t(()=>[...$[61]||=[s(`@`,-1)]]),_:1}),n(h,{type:`number`,placeholder:`금액`,"aria-label":`금액`},{suffix:t(()=>[...$[62]||=[s(`원`,-1)]]),_:1}),n(h,{type:`number`,placeholder:`0`,"aria-label":`결제 금액`},{prefix:t(()=>[...$[63]||=[s(`₩`,-1)]]),suffix:t(()=>[...$[64]||=[s(`KRW`,-1)]]),_:1})]),_:1}),n(f,{"heading-id":`required-heading`,title:`필수 필드`,description:`required 속성과 form_field-required로 필수 입력을 표시합니다.`,code:`<script setup>
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-required-email">
      이메일<span class="form_field-required" aria-hidden="true">*</span>
    </label>
    <Input id="input-required-email" type="email" placeholder="name@example.com" required aria-required="true" />
    <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-required-name">
      이름<span class="form_field-required" aria-hidden="true">*</span>
    </label>
    <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
  </div>
</template>`},{default:t(()=>[r(`div`,Se,[$[65]||=r(`label`,{class:`form_field-label`,for:`input-required-email`},[s(` 이메일`),r(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),n(h,{id:`input-required-email`,type:`email`,placeholder:`name@example.com`,required:``,"aria-required":`true`}),$[66]||=r(`p`,{class:`form_field-hint`},`업무용 이메일을 입력해 주세요.`,-1)]),r(`div`,Ce,[$[67]||=r(`label`,{class:`form_field-label`,for:`input-required-name`},[s(` 이름`),r(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),n(h,{id:`input-required-name`,placeholder:`홍길동`,required:``,"aria-required":`true`})])]),_:1}),n(f,{"heading-id":`state-heading`,title:`상태`,description:`disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.`,stack:``,code:`<script setup>
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field">
    <label class="form_field-label" for="input-state-default">기본</label>
    <Input id="input-state-default" placeholder="입력 가능" />
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-state-disabled">비활성</label>
    <Input id="input-state-disabled" model-value="수정할 수 없음" disabled />
    <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-state-error">에러</label>
    <Input id="input-state-error" type="email" error model-value="invalid-email" aria-describedby="input-state-error-msg" />
    <p class="form_field-error" id="input-state-error-msg" role="alert">올바른 이메일 형식이 아닙니다.</p>
  </div>
</template>`},{default:t(()=>[r(`div`,we,[$[68]||=r(`label`,{class:`form_field-label`,for:`input-state-default`},`기본`,-1),n(h,{id:`input-state-default`,placeholder:`입력 가능`})]),r(`div`,Te,[$[69]||=r(`label`,{class:`form_field-label`,for:`input-state-disabled`},`비활성`,-1),n(h,{id:`input-state-disabled`,"model-value":`수정할 수 없음`,disabled:``}),$[70]||=r(`p`,{class:`form_field-hint`},`disabled 속성으로 편집을 막습니다.`,-1)]),r(`div`,Ee,[$[71]||=r(`label`,{class:`form_field-label`,for:`input-state-error`},`에러`,-1),n(h,{id:`input-state-error`,type:`email`,error:``,"model-value":`invalid-email`,"aria-describedby":`input-state-error-msg`}),$[72]||=r(`p`,{class:`form_field-error`,id:`input-state-error-msg`,role:`alert`},`올바른 이메일 형식이 아닙니다.`,-1)])]),_:1}),n(f,{"heading-id":`clearable-heading`,title:`입력 삭제`,description:`clearable prop으로 값이 있을 때 우측에 지우기 버튼을 표시합니다. readonly · disabled 상태에서는 버튼이 나타나지 않습니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="input-clear-text">텍스트</label>
    <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" clearable />
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="input-clear-search">검색</label>
    <Input id="input-clear-search" type="search" placeholder="검색어 입력" clearable>
      <template #prefix>
        <Icon name="search" size="sm" />
      </template>
    </Input>
  </div>
  <div class="form_field form_field_fit">
    <label class="form_field-label" for="input-clear-readonly">읽기 전용 (삭제 버튼 없음)</label>
    <Input id="input-clear-readonly" model-value="수정 불가" readonly clearable />
  </div>
</template>`},{default:t(()=>[r(`div`,De,[$[73]||=r(`label`,{class:`form_field-label`,for:`input-clear-text`},`텍스트`,-1),n(h,{id:`input-clear-text`,placeholder:`입력 후 우측 X 버튼 확인`,clearable:``})]),r(`div`,Oe,[$[74]||=r(`label`,{class:`form_field-label`,for:`input-clear-search`},`검색`,-1),n(h,{id:`input-clear-search`,type:`search`,placeholder:`검색어 입력`,clearable:``},{prefix:t(()=>[n(u,{name:`search`,size:`sm`})]),_:1})]),r(`div`,ke,[$[75]||=r(`label`,{class:`form_field-label`,for:`input-clear-readonly`},`읽기 전용 (삭제 버튼 없음)`,-1),n(h,{id:`input-clear-readonly`,"model-value":`수정 불가`,readonly:``,clearable:``})])]),_:1}),n(f,{"heading-id":`example-heading`,title:`조합 예시`,description:`유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role="alert" · role="status"로 스크린 리더에 피드백을 전달합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <FormLayout layout="vertical" compact novalidate aria-labelledby="example-heading">
    <Alert
    id="input-ex-form-error"
    color="danger"
    title="입력 내용을 확인해 주세요"
    description="비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요."
    />
    <div class="form_field">
      <label class="form_field-label" for="input-ex-id">
        아이디<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <Input
      id="input-ex-id"
      size="sm"
      class="is-success"
      model-value="uxkm_user"
      required
      aria-required="true"
      autocomplete="username"
      aria-invalid="false"
      aria-describedby="input-ex-id-hint input-ex-id-success"
      >
      <template #prefix>@</template>
    </Input>
    <p class="form_field-hint" id="input-ex-id-hint">영문·숫자 4~16자</p>
    <p class="form_field-success" id="input-ex-id-success" role="status">사용 가능한 아이디입니다.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-ex-pw">
      비밀번호<span class="form_field-required" aria-hidden="true">*</span>
    </label>
    <Input
    id="input-ex-pw"
    type="password"
    size="sm"
    error
    model-value="1234"
    required
    aria-required="true"
    autocomplete="current-password"
    aria-invalid="true"
    aria-describedby="input-ex-pw-error"
    />
    <p class="form_field-error" id="input-ex-pw-error" role="alert">8자 이상, 영문·숫자·특수문자를 포함해 주세요.</p>
  </div>
  <div class="form_field">
    <label class="form_field-label" for="input-ex-email">이메일</label>
    <Input
    id="input-ex-email"
    type="email"
    size="sm"
    error
    model-value="user@"
    aria-invalid="true"
    aria-describedby="input-ex-email-error"
    autocomplete="email"
    />
    <p class="form_field-error" id="input-ex-email-error" role="alert">올바른 이메일 주소를 입력해 주세요. (예: name@example.com)</p>
  </div>
  <div class="form_actions">
    <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
    <Button variant="ghost" size="sm" type="button" label="취소" />
  </div>
  </FormLayout>
</template>`},{default:t(()=>[n(m,{layout:`vertical`,compact:``,novalidate:``,"aria-labelledby":`example-heading`},{default:t(()=>[n(p,{id:`input-ex-form-error`,color:`danger`,title:`입력 내용을 확인해 주세요`,description:`비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.`}),r(`div`,Ae,[$[77]||=r(`label`,{class:`form_field-label`,for:`input-ex-id`},[s(` 아이디`),r(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),n(h,{id:`input-ex-id`,size:`sm`,class:`is-success`,"model-value":`uxkm_user`,required:``,"aria-required":`true`,autocomplete:`username`,"aria-invalid":`false`,"aria-describedby":`input-ex-id-hint input-ex-id-success`},{prefix:t(()=>[...$[76]||=[s(`@`,-1)]]),_:1}),$[78]||=r(`p`,{class:`form_field-hint`,id:`input-ex-id-hint`},`영문·숫자 4~16자`,-1),$[79]||=r(`p`,{class:`form_field-success`,id:`input-ex-id-success`,role:`status`},`사용 가능한 아이디입니다.`,-1)]),r(`div`,je,[$[80]||=r(`label`,{class:`form_field-label`,for:`input-ex-pw`},[s(` 비밀번호`),r(`span`,{class:`form_field-required`,"aria-hidden":`true`},`*`)],-1),n(h,{id:`input-ex-pw`,type:`password`,size:`sm`,error:``,"model-value":`1234`,required:``,"aria-required":`true`,autocomplete:`current-password`,"aria-invalid":`true`,"aria-describedby":`input-ex-pw-error`}),$[81]||=r(`p`,{class:`form_field-error`,id:`input-ex-pw-error`,role:`alert`},`8자 이상, 영문·숫자·특수문자를 포함해 주세요.`,-1)]),r(`div`,Me,[$[82]||=r(`label`,{class:`form_field-label`,for:`input-ex-email`},`이메일`,-1),n(h,{id:`input-ex-email`,type:`email`,size:`sm`,error:``,"model-value":`user@`,"aria-invalid":`true`,"aria-describedby":`input-ex-email-error`,autocomplete:`email`}),$[83]||=r(`p`,{class:`form_field-error`,id:`input-ex-email-error`,role:`alert`},`올바른 이메일 주소를 입력해 주세요. (예: name@example.com)`,-1)]),r(`div`,Ne,[n(d,{variant:`filled`,color:`primary`,size:`sm`,type:`submit`,label:`로그인`}),n(d,{variant:`ghost`,size:`sm`,type:`button`,label:`취소`})])]),_:1})]),_:1}),n(c,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(l,{columns:o(_),rows:o(v),"code-column":`name`},null,8,[`columns`,`rows`]),$[84]||=r(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[s(` 선언되지 않은 HTML 속성·이벤트(`),r(`code`,{class:`typo_code`},`id`),s(`, `),r(`code`,{class:`typo_code`},`autocomplete`),s(`, `),r(`code`,{class:`typo_code`},`@blur`),s(` 등)는 루트 `),r(`code`,{class:`typo_code`},`input`),s(` 요소에 그대로 전달됩니다. `)],-1)]),_:1}),n(c,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(l,{columns:o(y),rows:o(b),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-events-heading`,title:`API · Events`},{default:t(()=>[n(l,{columns:o(T),rows:o(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(l,{columns:o(x),rows:o(S),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(l,{columns:o(C),rows:o(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Pe as default,$ as docMeta};