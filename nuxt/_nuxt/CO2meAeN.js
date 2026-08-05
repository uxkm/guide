import{L as e,Y as t,b as n,d as r,i as ee,m as i,st as a,y as o}from"./CCnt5OSV.js";import{a as s}from"./jFoqhwDN.js";import{l as c,t as l}from"./DkmWXf_S.js";import{t as u}from"./gHQDdAlU.js";import{t as d}from"./DD3RWXAt.js";import{t as f}from"./Cuo-DXMr2.js";import{t as p}from"./Bt5d3dz_2.js";import{t as m}from"./BX_n_gsO.js";import{t as h}from"./L2u3Yheu.js";import{t as g}from"./C7HWqCQD.js";var _=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],v=[{name:`layout`,type:`'vertical' | 'horizontal' | 'inline'`,default:`vertical`,description:`form_vertical · form_horizontal · form_inline`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비에 맞춤 (form_fit)`},{name:`compact`,type:`boolean`,default:`false`,description:`좁은 필드 간격 (form_compact)`},{name:`label-align-start`,type:`boolean`,default:`false`,description:`라벨 상단·왼쪽 정렬 (form_label-align-start)`},{name:`label-width`,type:`'sm' | 'lg'`,default:`—`,description:`가로 레이아웃 라벨 너비 (form_label-width-sm · form_label-width-lg)`},{name:`tag`,type:`string`,default:`form`,description:`루트 HTML 태그 (form · div 등)`}],y=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],b=[{name:`default`,description:`form_field · form_actions 등 폼 콘텐츠`}],x=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],S=[{name:`submit`,description:`form 제출 이벤트. @submit.prevent로 기본 제출 동작을 막을 수 있습니다.`},{name:`reset`,description:`form 초기화 이벤트`}],C=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],w=[{name:`form`,description:`폼 루트`},{name:`form_vertical · form_horizontal · form_inline`,description:`레이아웃 방향`},{name:`form_fit · form_compact · form_label-align-start`,description:`간격·정렬`},{name:`form_label-width-sm · form_label-width-lg`,description:`라벨 너비`},{name:`form_field · form_field-label · form_field-hint · form_field-error`,description:`필드 블록`},{name:`form_actions`,description:`제출·취소 버튼 묶음`},{name:`form_required`,description:`필수 표시 마크`}],T=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`--form-label-width · --form-label-width-sm · --form-label-width-lg`,default:`7.5rem · 5rem · 10rem`,description:`가로 레이아웃 라벨 너비`},{name:`--form-field-gap`,default:`var(--space-lg)`,description:`필드 간격`},{name:`--form-inline-field-min-width`,default:`8rem`,description:`인라인 필드 최소 너비`},{name:`--form-actions-gap`,default:`var(--space-sm)`,description:`액션 버튼 간격`}],D={class:`form_field`},O={class:`form_field`},k={class:`form_field`},A={class:`form_field`},j={class:`form_field`},M={class:`form_field`},N={class:`demo_preview-block`},P={class:`form_field`},F={class:`form_field`},I={class:`demo_preview-block`},L={class:`form_field`},R={class:`form_field`},z={class:`form_field`},te={class:`form_field`},B={class:`form_field`},V={class:`form_actions`},H={class:`form_field`},U={class:`form_field`},W={class:`form_field`},G={class:`form_field`},K={class:`form_field grid_col-span-12`},q={class:`demo_preview-block`},J={class:`form_field`},Y={class:`demo_preview-block`},X={class:`form_field`},Z={class:`demo_preview-block`},Q={class:`form_field`},ne={class:`demo_preview-block`},re={class:`form_field`},ie={class:`form_actions`},ae={class:`demo_preview-block`},oe={class:`form_field`},se={class:`form_actions`},ce={class:`form_field`},le={class:`form_field`},ue={class:`form_field`},de={class:`form_field`},fe={class:`form_field grid_col-span-12`},pe={class:`form_actions`},me={title:`Form Layout | HTML Components`,activeNav:`form-layout`,pageTitle:`Form Layout`},$={__name:`form-layout`,setup(me){return(me,$)=>(e(),i(ee,null,[$[50]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Form Layout`),r(`p`,{class:`lead`},[o(`폼 필드를 배치하는 레이아웃 유형입니다. `),r(`strong`,null,`form_vertical`),o(` · `),r(`strong`,null,`form_horizontal`),o(` · `),r(`strong`,null,`form_inline`),o(`과 Grid를 조합해 다양한 폼 구조를 구성할 수 있습니다.`)])],-1),n(d,{"heading-id":`vertical-heading`,title:`세로`,description:`레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다.`,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
import Select from '@/components/Select.vue';
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
</template>`},{default:t(()=>[n(f,{layout:`vertical`},{default:t(()=>[r(`div`,D,[$[4]||=r(`label`,{class:`form_field-label`,for:`fl-name`},`이름`,-1),n(p,{id:`fl-name`,placeholder:`이름을 입력하세요`}),$[5]||=r(`p`,{class:`form_field-hint`},`2~20자 이내로 입력해 주세요.`,-1)]),r(`div`,O,[$[6]||=r(`label`,{class:`form_field-label`,for:`fl-email`},`이메일`,-1),n(p,{id:`fl-email`,type:`email`,placeholder:`name@example.com`})]),r(`div`,k,[$[8]||=r(`label`,{class:`form_field-label`,for:`fl-role`},`역할`,-1),n(h,{id:`fl-role`,placeholder:`선택하세요`},{default:t(()=>[...$[7]||=[r(`option`,{value:``},`선택하세요`,-1),r(`option`,null,`관리자`,-1),r(`option`,null,`편집자`,-1),r(`option`,null,`뷰어`,-1)]]),_:1})])]),_:1})]),_:1}),n(d,{"heading-id":`horizontal-heading`,title:`가로`,description:`레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다.`,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
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
</template>`},{default:t(()=>[n(f,{layout:`horizontal`},{default:t(()=>[r(`div`,A,[$[9]||=r(`label`,{class:`form_field-label`,for:`fl-h-name`},`이름`,-1),n(p,{id:`fl-h-name`,placeholder:`이름`})]),r(`div`,j,[$[10]||=r(`label`,{class:`form_field-label`,for:`fl-h-email`},`이메일`,-1),n(p,{id:`fl-h-email`,type:`email`,placeholder:`name@example.com`}),$[11]||=r(`p`,{class:`form_field-hint`},`업무용 이메일을 입력해 주세요.`,-1)]),r(`div`,M,[$[12]||=r(`label`,{class:`form_field-label`,for:`fl-h-bio`},`소개`,-1),n(g,{id:`fl-h-bio`,placeholder:`간단한 자기소개`})])]),_:1})]),_:1}),n(d,{"heading-id":`horizontal-align-heading`,title:`가로 — 레이블 정렬·너비`,description:`form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
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
</template>`},{default:t(()=>[r(`div`,N,[$[15]||=r(`h3`,{class:`typo_overline`},`레이블 왼쪽 정렬 · sm`,-1),$[16]||=r(`p`,{class:`typo_caption`},`form_label-align-start · form_label-width-sm`,-1),n(f,{layout:`horizontal`,"label-align-start":``,"label-width":`sm`},{default:t(()=>[r(`div`,P,[$[13]||=r(`label`,{class:`form_field-label`,for:`fl-hs-city`},`도시`,-1),n(p,{id:`fl-hs-city`,placeholder:`서울`})]),r(`div`,F,[$[14]||=r(`label`,{class:`form_field-label`,for:`fl-hs-zip`},`우편번호`,-1),n(p,{id:`fl-hs-zip`,placeholder:`00000`})])]),_:1})]),r(`div`,I,[$[19]||=r(`h3`,{class:`typo_overline`},`레이블 너비 lg`,-1),$[20]||=r(`p`,{class:`typo_caption`},`form_label-width-lg — 라벨 열이 넓어져 입력 시작 위치가 달라집니다.`,-1),n(f,{layout:`horizontal`,"label-width":`lg`},{default:t(()=>[r(`div`,L,[$[17]||=r(`label`,{class:`form_field-label`,for:`fl-hl-company`},`회사명`,-1),n(p,{id:`fl-hl-company`,placeholder:`UXKM`})]),r(`div`,R,[$[18]||=r(`label`,{class:`form_field-label`,for:`fl-hl-dept`},`부서`,-1),n(p,{id:`fl-hl-dept`,placeholder:`디자인팀`})])]),_:1})])]),_:1}),n(d,{"heading-id":`inline-heading`,title:`인라인`,description:`검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
import Select from '@/components/Select.vue';
<\/script>

<template>
  <FormLayout layout="inline" @submit.prevent>
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
</template>`},{default:t(()=>[n(f,{layout:`inline`,onSubmit:$[0]||=s(()=>{},[`prevent`])},{default:t(()=>[r(`div`,z,[$[21]||=r(`label`,{class:`form_field-label`,for:`fl-i-keyword`},`키워드`,-1),n(p,{id:`fl-i-keyword`,type:`search`,placeholder:`검색어`})]),r(`div`,te,[$[23]||=r(`label`,{class:`form_field-label`,for:`fl-i-status`},`상태`,-1),n(h,{id:`fl-i-status`},{default:t(()=>[...$[22]||=[r(`option`,null,`전체`,-1),r(`option`,null,`활성`,-1),r(`option`,null,`비활성`,-1)]]),_:1})]),r(`div`,B,[$[24]||=r(`label`,{class:`form_field-label`,for:`fl-i-date`},`기간`,-1),n(p,{id:`fl-i-date`,type:`date`})]),r(`div`,V,[n(u,{variant:`filled`,color:`primary`,type:`submit`,label:`검색`}),n(u,{variant:`ghost`,type:`reset`,label:`초기화`})])]),_:1})]),_:1}),n(d,{"heading-id":`grid-heading`,title:`그리드`,description:`Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다.`,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Grid from '@/components/Grid.vue';
import Input from '@/components/Input.vue';
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
</template>`},{default:t(()=>[n(f,{layout:`vertical`},{default:t(()=>[n(m,{"item-span":6},{default:t(()=>[r(`div`,H,[$[25]||=r(`label`,{class:`form_field-label`,for:`fl-g-first`},`이름`,-1),n(p,{id:`fl-g-first`,placeholder:`이름`})]),r(`div`,U,[$[26]||=r(`label`,{class:`form_field-label`,for:`fl-g-last`},`성`,-1),n(p,{id:`fl-g-last`,placeholder:`성`})]),r(`div`,W,[$[27]||=r(`label`,{class:`form_field-label`,for:`fl-g-phone`},`전화번호`,-1),n(p,{id:`fl-g-phone`,type:`tel`,placeholder:`010-0000-0000`})]),r(`div`,G,[$[28]||=r(`label`,{class:`form_field-label`,for:`fl-g-mobile`},`휴대폰`,-1),n(p,{id:`fl-g-mobile`,type:`tel`,placeholder:`010-0000-0000`})]),r(`div`,K,[$[29]||=r(`label`,{class:`form_field-label`,for:`fl-g-address`},`주소`,-1),n(p,{id:`fl-g-address`,placeholder:`도로명 주소`})])]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`width-heading`,title:`너비`,description:`폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
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
</template>`},{default:t(()=>[r(`div`,q,[$[31]||=r(`h3`,{class:`typo_overline`},`기본 너비`,-1),$[32]||=r(`p`,{class:`typo_caption`},`부모 컨테이너 100%`,-1),n(f,{layout:`vertical`},{default:t(()=>[r(`div`,J,[$[30]||=r(`label`,{class:`form_field-label`,for:`fl-w-default`},`기본 너비`,-1),n(p,{id:`fl-w-default`,placeholder:`부모 100%`})])]),_:1})]),r(`div`,Y,[$[34]||=r(`h3`,{class:`typo_overline`},`form_fit`,-1),$[35]||=r(`p`,{class:`typo_caption`},`최대 320px로 제한`,-1),n(f,{layout:`vertical`,fit:``},{default:t(()=>[r(`div`,X,[$[33]||=r(`label`,{class:`form_field-label`,for:`fl-w-fit`},`제한 너비`,-1),n(p,{id:`fl-w-fit`,placeholder:`form_fit — 최대 320px`})])]),_:1})]),r(`div`,Z,[$[37]||=r(`h3`,{class:`typo_overline`},`가로 레이아웃`,-1),$[38]||=r(`p`,{class:`typo_caption`},`입력 열이 남은 공간을 채움`,-1),n(f,{layout:`horizontal`},{default:t(()=>[r(`div`,Q,[$[36]||=r(`label`,{class:`form_field-label`,for:`fl-w-h-full`},`가로 레이아웃`,-1),n(p,{id:`fl-w-h-full`,placeholder:`입력 열이 남은 공간을 채움`})])]),_:1})])]),_:1}),n(d,{"heading-id":`actions-heading`,title:`액션 영역`,description:`form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다.`,stack:``,code:`<script setup>
import Button from '@/components/Button.vue';
import FormLayout from '@/components/FormLayout.vue';
import Input from '@/components/Input.vue';
<\/script>

<template>
  <FormLayout layout="vertical" @submit.prevent>
    <div class="form_field">
      <label class="form_field-label" for="fl-a-title">제목</label>
      <Input id="fl-a-title" placeholder="제목" />
    </div>
    <div class="form_actions">
      <Button variant="filled" color="primary" type="submit" label="저장" />
      <Button variant="ghost" type="button" label="취소" />
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" @submit.prevent>
    <div class="form_field">
      <label class="form_field-label" for="fl-a2-title">제목</label>
      <Input id="fl-a2-title" placeholder="제목" />
    </div>
    <div class="form_actions">
      <Button variant="filled" color="primary" type="submit" label="저장" />
      <Button variant="ghost" type="button" label="취소" />
    </div>
  </FormLayout>
</template>`},{default:t(()=>[r(`div`,ne,[$[40]||=r(`h3`,{class:`typo_overline`},`세로`,-1),n(f,{layout:`vertical`,onSubmit:$[1]||=s(()=>{},[`prevent`])},{default:t(()=>[r(`div`,re,[$[39]||=r(`label`,{class:`form_field-label`,for:`fl-a-title`},`제목`,-1),n(p,{id:`fl-a-title`,placeholder:`제목`})]),r(`div`,ie,[n(u,{variant:`filled`,color:`primary`,type:`submit`,label:`저장`}),n(u,{variant:`ghost`,type:`button`,label:`취소`})])]),_:1})]),r(`div`,ae,[$[42]||=r(`h3`,{class:`typo_overline`},`가로`,-1),n(f,{layout:`horizontal`,onSubmit:$[2]||=s(()=>{},[`prevent`])},{default:t(()=>[r(`div`,oe,[$[41]||=r(`label`,{class:`form_field-label`,for:`fl-a2-title`},`제목`,-1),n(p,{id:`fl-a2-title`,placeholder:`제목`})]),r(`div`,se,[n(u,{variant:`filled`,color:`primary`,type:`submit`,label:`저장`}),n(u,{variant:`ghost`,type:`button`,label:`취소`})])]),_:1})])]),_:1}),n(d,{"heading-id":`example-heading`,title:`전체 예시`,description:`세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import FormLayout from '@/components/FormLayout.vue';
import Grid from '@/components/Grid.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
<\/script>

<template>
  <FormLayout layout="vertical" compact @submit.prevent>
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
</template>`},{default:t(()=>[n(f,{layout:`vertical`,compact:``,onSubmit:$[3]||=s(()=>{},[`prevent`])},{default:t(()=>[n(m,{"item-span":6},{default:t(()=>[r(`div`,ce,[$[43]||=r(`label`,{class:`form_field-label`,for:`fl-ex-id`},`아이디`,-1),n(p,{id:`fl-ex-id`,placeholder:`아이디`}),$[44]||=r(`p`,{class:`form_field-hint`},`영문·숫자 4~16자`,-1)]),r(`div`,le,[$[45]||=r(`label`,{class:`form_field-label`,for:`fl-ex-pw`},`비밀번호`,-1),n(p,{id:`fl-ex-pw`,type:`password`,placeholder:`비밀번호`})]),r(`div`,ue,[$[46]||=r(`label`,{class:`form_field-label`,for:`fl-ex-name`},`이름`,-1),n(p,{id:`fl-ex-name`,placeholder:`이름`})]),r(`div`,de,[$[47]||=r(`label`,{class:`form_field-label`,for:`fl-ex-email`},`이메일`,-1),n(p,{id:`fl-ex-email`,type:`email`,placeholder:`name@example.com`})]),r(`div`,fe,[$[48]||=r(`label`,{class:`form_field-label`,for:`fl-ex-memo`},`메모`,-1),n(g,{id:`fl-ex-memo`,rows:3,placeholder:`추가 정보`})])]),_:1}),r(`div`,pe,[n(u,{variant:`filled`,color:`primary`,type:`submit`,label:`가입하기`}),n(u,{variant:`ghost`,type:`button`,label:`취소`})])]),_:1})]),_:1}),n(c,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(l,{columns:a(_),rows:a(v),"code-column":`name`},null,8,[`columns`,`rows`]),$[49]||=r(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[o(` 선언되지 않은 HTML 속성·이벤트(`),r(`code`,{class:`typo_code`},`action`),o(`, `),r(`code`,{class:`typo_code`},`method`),o(`, `),r(`code`,{class:`typo_code`},`novalidate`),o(`, `),r(`code`,{class:`typo_code`},`@submit`),o(` 등)는 루트 요소에 그대로 전달됩니다. `)],-1)]),_:1}),n(c,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(l,{columns:a(y),rows:a(b),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-events-heading`,title:`API · Events`},{default:t(()=>[n(l,{columns:a(x),rows:a(S),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(l,{columns:a(C),rows:a(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(l,{columns:a(T),rows:a(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{$ as default,me as docMeta};