import{L as e,Y as t,b as n,d as r,i,m as a,st as o,y as s}from"./CCnt5OSV.js";import{l as c,t as l}from"./DkmWXf_S.js";import{t as u}from"./gHQDdAlU.js";import{t as d}from"./DD3RWXAt.js";import{l as f,t as p}from"./D6IbhUhQ.js";import{t as m}from"./UFk9LiVn.js";import{t as h}from"./COzQg8iZ.js";var g=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],_=[{name:`color`,type:`'info' | 'success' | 'warning' | 'danger'`,default:`info`,description:`의미 색상. danger는 color_error`},{name:`title`,type:`string`,default:`—`,description:`알림 제목 (alert_title)`},{name:`description`,type:`string`,default:`—`,description:`본문. default 슬롯으로 대체`},{name:`closable`,type:`boolean`,default:`false`,description:`닫기 버튼 (alert_close)`},{name:`show-icon`,type:`boolean`,default:`true`,description:`기본 아이콘 표시`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`alert_sm · alert_lg`},{name:`role`,type:`string`,default:`alert`,description:`루트 role (alert · status 등)`},f],v=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],y=[{name:`default`,description:`본문 (description prop 대체)`},{name:`icon`,description:`커스텀 아이콘 (alert_icon)`},{name:`actions`,description:`본문 아래 alert_actions 영역에 렌더링`}],b=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],x=[{name:`alert`,description:`알림 루트`},{name:`alert_sm · alert_lg`,description:`크기`},{name:`alert_icon · alert_body · alert_title · alert_desc · alert_actions`,description:`구조 파트`},{name:`alert_close`,description:`닫기 버튼`},{name:`color_info · color_success · color_warning · color_error`,description:`의미 색상`},...p],S=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],C=[{name:`close`,description:`닫기 버튼 클릭 시`}],w=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],T=[{name:`--alert-padding-y · --alert-padding-x · --alert-gap`,default:`var(--space-md) · var(--space-lg) · var(--space-md)`,description:`기본(md) 패딩·간격`},{name:`--alert-font-size · --alert-line-height`,default:`var(--text-size-base) · 1.5`,description:`본문 타이포`},{name:`--alert-title-weight · --alert-title-gap`,default:`600 · var(--space-xs)`,description:`제목 두께·간격`},{name:`--alert-desc-opacity`,default:`0.85`,description:`설명 텍스트 불투명도`},{name:`--alert-icon-size · --alert-icon-offset`,default:`1.25rem · 0.1rem`,description:`아이콘 크기·정렬`},{name:`--alert-close-size`,default:`1.25rem`,description:`닫기 버튼 크기`},{name:`--alert-actions-gap · --alert-actions-margin-top`,default:`var(--space-sm) · var(--space-sm)`,description:`액션 영역`},{name:`--alert-padding-y-sm · --alert-padding-x-sm · --alert-font-size-sm`,default:`var(--space-sm) · var(--space-md) · var(--text-size-sm)`,description:`sm 크기`},{name:`--alert-icon-size-sm · --alert-close-size-sm`,default:`1rem · 1rem`,description:`sm 아이콘·닫기`},{name:`--alert-padding-y-lg · --alert-padding-x-lg`,default:`var(--space-lg) · var(--space-xl)`,description:`lg 패딩`},{name:`--alert-icon-size-lg · --alert-close-size-lg`,default:`1.5rem · 1.5rem`,description:`lg 아이콘·닫기`}],E={class:`form_layout`,novalidate:``},D={title:`Alert | HTML Components`,activeNav:`alert`,pageTitle:`Alert`},O={__name:`alert`,setup(f){return(f,p)=>(e(),a(i,null,[p[2]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Alert`),r(`p`,{class:`lead`},`중요한 정보나 피드백을 사용자에게 전달하는 알림 컴포넌트입니다.`)],-1),n(d,{"heading-id":`basic-heading`,title:`기본`,description:`공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
<\/script>

<template>
  <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
  <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
  <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
  <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
</template>`},{default:t(()=>[n(m,{color:`info`,title:`정보`,description:`변경 사항이 저장되었습니다.`}),n(m,{color:`success`,title:`성공`,description:`요청이 성공적으로 처리되었습니다.`}),n(m,{color:`warning`,title:`주의`,description:`세션이 곧 만료됩니다. 저장해 주세요.`}),n(m,{color:`danger`,title:`오류`,description:`네트워크 연결을 확인해 주세요.`})]),_:1}),n(d,{"heading-id":`desc-only-heading`,title:`설명만`,description:`제목 없이 alert_desc만으로 짧은 메시지를 표시합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
<\/script>

<template>
  <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
  <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
</template>`},{default:t(()=>[n(m,{color:`info`,description:`새 기능이 추가되었습니다. 설정에서 확인해 보세요.`}),n(m,{color:`success`,role:`status`,description:`프로필이 업데이트되었습니다.`})]),_:1}),n(d,{"heading-id":`no-icon-heading`,title:`아이콘 없음`,description:`alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
<\/script>

<template>
  <Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
  <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
</template>`},{default:t(()=>[n(m,{"show-icon":!1,color:`warning`,title:`점검 안내`,description:`오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.`}),n(m,{"show-icon":!1,color:`info`,description:`이 페이지는 데모 목적으로만 사용됩니다.`})]),_:1}),n(d,{"heading-id":`size-heading`,title:`크기`,description:`alert_sm · alert_lg로 스케일을 조절합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
<\/script>

<template>
  <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
  <Alert color="info" title="Medium" description="기본 크기입니다." />
  <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
</template>`},{default:t(()=>[n(m,{size:`sm`,color:`info`,title:`Small`,description:`폼 필드 아래 등 좁은 영역에 사용합니다.`}),n(m,{color:`info`,title:`Medium`,description:`기본 크기입니다.`}),n(m,{size:`lg`,color:`info`,title:`Large`,description:`페이지 상단 등 눈에 띄는 안내에 사용합니다.`})]),_:1}),n(d,{"heading-id":`close-heading`,title:`닫기 가능`,description:`alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
<\/script>

<template>
  <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
  <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
</template>`},{default:t(()=>[n(m,{closable:``,color:`info`,title:`새 소식`,description:`대시보드가 새롭게 개편되었습니다.`}),n(m,{closable:``,color:`warning`,description:`브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.`})]),_:1}),n(d,{"heading-id":`actions-heading`,title:`액션`,description:`actions 슬롯에 확인·취소 등 후속 동작을 전달하면 alert_actions 영역에 배치됩니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
    <template #actions>
      <Button variant="filled" color="danger" size="sm" label="다시 시도" />
      <Button variant="ghost" size="sm" label="취소" />
    </template>
  </Alert>
  <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
    <template #actions>
      <Link href="#" size="sm" label="약관 보기" />
      <Button variant="text" color="primary" size="sm" label="동의하기" />
    </template>
  </Alert>
</template>`},{default:t(()=>[n(m,{color:`danger`,title:`저장 실패`,description:`변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.`},{actions:t(()=>[n(u,{variant:`filled`,color:`danger`,size:`sm`,label:`다시 시도`}),n(u,{variant:`ghost`,size:`sm`,label:`취소`})]),_:1}),n(m,{color:`info`,title:`이용 약관 변경`,description:`2026년 3월 1일부터 새 약관이 적용됩니다.`},{actions:t(()=>[n(h,{href:`#`,size:`sm`,label:`약관 보기`}),n(u,{variant:`text`,color:`primary`,size:`sm`,label:`동의하기`})]),_:1})]),_:1}),n(d,{"heading-id":`banner-heading`,title:`배너`,description:`alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
<\/script>

<template>
  <Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />
</template>`},{default:t(()=>[n(m,{class:`alert_banner`,color:`warning`,closable:``,description:`시스템 점검으로 일부 기능이 제한될 수 있습니다.`})]),_:1}),n(d,{"heading-id":`context-heading`,title:`문맥 속 사용`,description:`폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Alert color="info" title="업데이트 안내">
    새 버전이 출시되었습니다.
    <Link href="#" size="sm" label="릴리스 노트 보기" />
  </Alert>
  <form class="form_layout" novalidate>
    <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />
    <div class="form_field">
      <label class="form_label" for="alert-ex-email">이메일</label>
      <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true" />
    </div>
  </form>
</template>`},{default:t(()=>[n(m,{color:`info`,title:`업데이트 안내`},{default:t(()=>[p[0]||=s(` 새 버전이 출시되었습니다. `,-1),n(h,{href:`#`,size:`sm`,label:`릴리스 노트 보기`})]),_:1}),r(`form`,E,[n(m,{color:`danger`,title:`입력 내용을 확인해 주세요`,description:`이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.`}),p[1]||=r(`div`,{class:`form_field`},[r(`label`,{class:`form_label`,for:`alert-ex-email`},`이메일`),r(`input`,{type:`email`,class:`input is-error`,id:`alert-ex-email`,value:`invalid-email`,"aria-invalid":`true`})],-1)])]),_:1}),n(c,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(l,{columns:o(g),rows:o(_),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(l,{columns:o(v),rows:o(y),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-events-heading`,title:`API · Events`},{default:t(()=>[n(l,{columns:o(S),rows:o(C),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(l,{columns:o(b),rows:o(x),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(l,{columns:o(w),rows:o(T),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{O as default,D as docMeta};