import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Checkbox.stories-CLbZYUOM.js";import{i as g,r as _}from"./react-DSvVgjCn.js";import{c as v,r as y,u as b}from"./blocks-CkHyEh4O.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-D9Q6nkXJ.js";function T(e,t){return[{id:`html`,label:`HTML`,fileName:"apps/html/src/components/form/Checkbox/Checkbox.html · ${key}",code:t.html},{id:`gulp`,label:`Gulp`,fileName:"apps/gulp/src/components/form/Checkbox/checkbox.njk · ${key}",code:"{# apps/gulp/src/components/form/Checkbox/checkbox.njk #}\\n${source.html}"},{id:`vue`,label:`Vue`,fileName:"@uxkm/vue/checkbox · ${key}",code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:"@uxkm/vue/checkbox · ${key}",code:t.vue},{id:`react`,label:`React`,fileName:"@uxkm/react/checkbox · ${key}",code:t.react},{id:`next`,label:`Next`,fileName:"@uxkm/react/checkbox · ${key}",code:t.react}]}var E,D;function O(){return(O=e((()=>{E={type:{html:`<div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-0" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-0">기본 — checkbox</label>
    </div>

    <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-1">레이블 뒤 — checkbox_label-end</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-1" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">버튼형</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">UI</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">UX</span>
      </label>
    </fieldset>

    <div class="checkbox_card" style="max-width: 360px;">
      <article class="card card_compact">
        <div class="card_header">
          <div class="card_header-main">
            <h3 class="card_title" id="checkbox-type-card-title">카드형 — checkbox_card</h3>
          </div>
          <div class="card_extra">
            <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
          </div>
        </div>
        <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
      </article>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function TypeExample() {
  return (
    <>
      <Checkbox checked label="기본 — checkbox" />
      <Checkbox labelEnd label="레이블 뒤 — checkbox_label-end" />
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
        <Checkbox button label="UI" />
        <Checkbox button label="UX" />
      </fieldset>
      <div className="checkbox_card" style={{ maxWidth: 360 }}>
        <article className="card card_compact">
          <div className="card_header">
            <div className="card_header-main">
              <h3 className="card_title" id="checkbox-type-card-title">
                카드형 — checkbox_card
              </h3>
            </div>
            <div className="card_extra">
              <Checkbox
                id="checkbox-type-card"
                checked
                aria-labelledby="checkbox-type-card-title checkbox-type-card-desc"
              />
            </div>
          </div>
          <div className="card_body" id="checkbox-type-card-desc">
            card 컴포넌트와 조합해 제목·설명을 표시합니다.
          </div>
        </article>
      </div>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox checked label="기본 — checkbox" />
  <Checkbox label-end label="레이블 뒤 — checkbox_label-end" />
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button checked label="버튼형" />
    <Checkbox button label="UI" />
    <Checkbox button label="UX" />
  </fieldset>
  <div class="checkbox_card" style="max-width: 360px;">
    <article class="card card_compact">
      <div class="card_header">
        <div class="card_header-main">
          <h3 class="card_title" id="checkbox-type-card-title">카드형 — checkbox_card</h3>
        </div>
        <div class="card_extra">
          <Checkbox id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
        </div>
      </div>
      <div class="card_body" id="checkbox-type-card-desc">card 컴포넌트와 조합해 제목·설명을 표시합니다.</div>
    </article>
  </div>
</template>`},labelEnd:{html:`<div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-label-end-push">푸시 알림 받기</label>
      <span class="checkbox_control">
        <input type="checkbox" class="checkbox_input" id="checkbox-label-end-push" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-label-end-marketing">
        <span class="checkbox_content">
          <span class="checkbox_label">마케팅 정보 수신</span>
          <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </label>
      <span class="checkbox_control">
        <input type="checkbox" class="checkbox_input" id="checkbox-label-end-marketing">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
      <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
      <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-2">이메일 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-2" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
      <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-3">푸시 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-3" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
      <div class="checkbox checkbox_label-end" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-4">SMS 알림</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-4" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
    </fieldset>

    <div class="checkbox checkbox_label-end checkbox_sm" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-5">Small — checkbox_sm</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-5" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>
    <div class="checkbox checkbox_label-end checkbox_lg" data-ripple="true">
      <label class="checkbox_label" for="checkbox-auto-6">Large — checkbox_lg</label>
      <span class="checkbox_control">
        <input id="checkbox-auto-6" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function LabelEndExample() {
  return (
    <>
      <Checkbox labelEnd checked label="푸시 알림 받기" />
      <Checkbox labelEnd>
        <span className="checkbox_content">
          <span className="checkbox_label">마케팅 정보 수신</span>
          <span className="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox labelEnd checked label="이메일 알림" />
        <Checkbox labelEnd checked label="푸시 알림" />
        <Checkbox labelEnd label="SMS 알림" />
      </fieldset>
      <Checkbox className="checkbox_sm" labelEnd checked label="Small — checkbox_sm" />
      <Checkbox className="checkbox_lg" labelEnd checked label="Large — checkbox_lg" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox label-end checked label="푸시 알림 받기" />
  <Checkbox label-end>
    <span class="checkbox_content">
      <span class="checkbox_label">마케팅 정보 수신</span>
      <span class="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Checkbox>
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
    <Checkbox label-end checked label="이메일 알림" />
    <Checkbox label-end checked label="푸시 알림" />
    <Checkbox label-end label="SMS 알림" />
  </fieldset>
  <Checkbox class="checkbox_sm" label-end checked label="Small — checkbox_sm" />
  <Checkbox class="checkbox_lg" label-end checked label="Large — checkbox_lg" />
</template>`},basic:{html:`<div class="form_field">
      <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
        <div class="checkbox" data-ripple="true">
          <span class="checkbox_control">
            <input type="checkbox" class="checkbox_input" id="checkbox-notify-email" checked>
            <span class="checkbox_box" aria-hidden="true"></span>
          </span>
          <label class="checkbox_label" for="checkbox-notify-email">
            <span class="checkbox_content">
              <span class="checkbox_label">이메일 알림</span>
              <span class="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
            </span>
          </label>
        </div>
        <div class="checkbox" data-ripple="true">
          <span class="checkbox_control">
            <input type="checkbox" class="checkbox_input" id="checkbox-notify-push">
            <span class="checkbox_box" aria-hidden="true"></span>
          </span>
          <label class="checkbox_label" for="checkbox-notify-push">
            <span class="checkbox_content">
              <span class="checkbox_label">푸시 알림</span>
              <span class="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
            </span>
          </label>
        </div>
      </fieldset>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="checkbox-notify-label">
        알림 설정
      </span>
      <fieldset className="checkbox_group" aria-labelledby="checkbox-notify-label">
        <Checkbox checked>
          <span className="checkbox_content">
            <span className="checkbox_label">이메일 알림</span>
            <span className="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
          </span>
        </Checkbox>
        <Checkbox>
          <span className="checkbox_content">
            <span className="checkbox_label">푸시 알림</span>
            <span className="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
          </span>
        </Checkbox>
      </fieldset>
    </div>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="checkbox-notify-label">알림 설정</span>
    <fieldset class="checkbox_group" aria-labelledby="checkbox-notify-label">
      <Checkbox checked>
        <span class="checkbox_content">
          <span class="checkbox_label">이메일 알림</span>
          <span class="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
        </span>
      </Checkbox>
      <Checkbox>
        <span class="checkbox_content">
          <span class="checkbox_label">푸시 알림</span>
          <span class="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
        </span>
      </Checkbox>
    </fieldset>
  </div>
</template>`},standalone:{html:`<label class="checkbox_control" data-ripple="true"><input aria-label="항목 선택" type="checkbox" class="checkbox_input">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
    <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" checked aria-label="선택됨">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
    <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" disabled aria-label="비활성">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function StandaloneExample() {
  return (
    <>
      <Checkbox ariaLabel="항목 선택" />
      <Checkbox checked ariaLabel="선택됨" />
      <Checkbox disabled ariaLabel="비활성" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox aria-label="항목 선택" />
  <Checkbox checked aria-label="선택됨" />
  <Checkbox disabled aria-label="비활성" />
</template>`},size:{html:`<div class="checkbox checkbox_sm" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-7" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-7">Small — checkbox_sm</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-8" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-8">Medium — 기본</label>
    </div>
    <div class="checkbox checkbox_lg" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-9" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-9">Large — checkbox_lg</label>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function SizeExample() {
  return (
    <>
      <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox class="checkbox_sm" checked label="Small — checkbox_sm" />
  <Checkbox checked label="Medium — 기본" />
  <Checkbox class="checkbox_lg" checked label="Large — checkbox_lg" />
</template>`},width:{html:`<div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-10" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-10">기본 — 인라인 너비</label>
    </div>

    <div class="checkbox checkbox_block" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-11" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-11">checkbox_block — 전체 너비</label>
    </div>

    <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
      <legend class="checkbox_group-legend">checkbox_group_block</legend>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-12" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-12">항목 1</label>
    </div>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-13" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-13">항목 2</label>
    </div>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function WidthExample() {
  return (
    <>
      <Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox className="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox checked label="기본 — 인라인 너비" />
  <Checkbox class="checkbox_block" checked label="checkbox_block — 전체 너비" />
  <fieldset class="checkbox_group checkbox_group_block" style="max-width: 360px; width: 100%;">
    <legend class="checkbox_group-legend">checkbox_group_block</legend>
    <Checkbox checked label="항목 1" />
    <Checkbox label="항목 2" />
  </fieldset>
</template>`},color:{html:`<div class="checkbox color_primary" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-14" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-14">Primary</label>
    </div>
    <div class="checkbox color_success" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-15" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-15">Success</label>
    </div>
    <div class="checkbox color_danger" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-16" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-16">Danger</label>
    </div>
    <div class="checkbox color_warning" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-17" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-17">Warning</label>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function ColorExample() {
  return (
    <>
      <Checkbox className="color_primary" checked label="Primary" />
      <Checkbox className="color_success" checked label="Success" />
      <Checkbox className="color_danger" checked label="Danger" />
      <Checkbox className="color_warning" checked label="Warning" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox class="color_primary" checked label="Primary" />
  <Checkbox class="color_success" checked label="Success" />
  <Checkbox class="color_danger" checked label="Danger" />
  <Checkbox class="color_warning" checked label="Warning" />
</template>`},state:{html:`<div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-18" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-18">미선택</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-19" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-19">선택됨</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-20" type="checkbox" class="checkbox_input" checked data-demo-indeterminate>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-20">불확정</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-21" type="checkbox" class="checkbox_input" disabled>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-21">비활성</label>
    </div>
    <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-22" type="checkbox" class="checkbox_input" checked disabled>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-22">선택됨 (비활성)</label>
    </div>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function StateExample() {
  return (
    <>
      <Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <Checkbox label="미선택" />
  <Checkbox checked label="선택됨" />
  <Checkbox checked indeterminate label="불확정" />
  <Checkbox disabled label="비활성" />
  <Checkbox checked disabled label="선택됨 (비활성)" />
</template>`},group:{html:`<fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-24" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-24">디자인</label>
    </div>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-25" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-25">개발</label>
    </div>
      <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-26" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-26">기획</label>
    </div>
    </fieldset>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <legend class="checkbox_group-legend">언어 (가로)</legend>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">한국어</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">English</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">日本語</span>
      </label>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function GroupExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <legend className="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">관심 분야 (세로)</legend>
    <Checkbox checked label="디자인" />
    <Checkbox label="개발" />
    <Checkbox label="기획" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <legend class="checkbox_group-legend">언어 (가로)</legend>
    <Checkbox button checked label="한국어" />
    <Checkbox button checked label="English" />
    <Checkbox button label="日本語" />
  </fieldset>
</template>`},buttonType:{html:`<fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">전체</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">진행 중</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">완료</span>
      </label>
      <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" disabled>
        <span class="checkbox_label">보류 (비활성)</span>
      </label>
    </fieldset>

    <fieldset class="checkbox_group checkbox_group_horizontal">
      <label class="checkbox checkbox_button checkbox_sm color_success" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Small</span>
      </label>
      <label class="checkbox checkbox_button color_success" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Medium</span>
      </label>
      <label class="checkbox checkbox_button checkbox_lg color_success" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">Large</span>
      </label>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function ButtonTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button className="checkbox_sm color_success" checked label="Small" />
        <Checkbox button className="color_success" checked label="Medium" />
        <Checkbox button className="checkbox_lg color_success" checked label="Large" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button checked label="전체" />
    <Checkbox button label="진행 중" />
    <Checkbox button label="완료" />
    <Checkbox button disabled label="보류 (비활성)" />
  </fieldset>
  <fieldset class="checkbox_group checkbox_group_horizontal">
    <Checkbox button class="checkbox_sm color_success" checked label="Small" />
    <Checkbox button class="color_success" checked label="Medium" />
    <Checkbox button class="checkbox_lg color_success" checked label="Large" />
  </fieldset>
</template>`},cardType:{html:`<fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">요금제 선택 (다중)</legend>
      <div class="card_deck card_deck-2">
        <div class="checkbox_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
          </article>
        </div>
        <div class="checkbox_card color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
          </article>
        </div>
        <div class="checkbox_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">권한 (가로)</legend>
      <div class="card_deck card_deck-3">
        <div class="checkbox_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-perm-read-title">읽기</h3>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-perm-read-desc">조회 권한</div>
          </article>
        </div>
        <div class="checkbox_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-perm-write-title">쓰기</h3>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-perm-write-desc">수정 권한</div>
          </article>
        </div>
        <div class="checkbox_card">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-perm-delete-title">삭제</h3>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true"><input type="checkbox" class="checkbox_input" id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc">
                <span class="checkbox_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-perm-delete-desc">삭제 권한</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="checkbox_group">
      <legend class="checkbox_group-legend">요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)</legend>
      <div class="card_deck card_deck-2">
        <div class="checkbox_card checkbox_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-full-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
          </article>
        </div>
        <div class="checkbox_card checkbox_card-clickable color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-full-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-pro" name="plan-clickable" value="pro" aria-labelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
          </article>
        </div>
        <div class="checkbox_card checkbox_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="checkbox-plan-full-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="checkbox_control" data-ripple="true">
                  <input type="checkbox" class="checkbox_input" id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc">
                  <span class="checkbox_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function CardTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">요금제 선택 (다중)</legend>
        <div className="card_deck card_deck-2">
          <div className="checkbox_card">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox
                    id="checkbox-plan-basic"
                    name="plan"
                    value="basic"
                    checked
                    aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc"
                  />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-basic-desc">
                개인 프로젝트에 적합합니다.
              </div>
            </article>
          </div>
          {/* … Pro · Enterprise · 권한 · clickable 카드 … */}
        </div>
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
<\/script>

<template>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">요금제 선택 (다중)</legend>
    <div class="card_deck card_deck-2">
      <div class="checkbox_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
        </article>
      </div>
      <div class="checkbox_card color_primary">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
        </article>
      </div>
      <div class="checkbox_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">권한 (가로)</legend>
    <div class="card_deck card_deck-3">
      <div class="checkbox_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-perm-read-title">읽기</h3>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-perm-read-desc">조회 권한</div>
        </article>
      </div>
      <div class="checkbox_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-perm-write-title">쓰기</h3>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-perm-write-desc">수정 권한</div>
        </article>
      </div>
      <div class="checkbox_card">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-perm-delete-title">삭제</h3>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc" />
            </div>
          </div>
          <div class="card_body" id="checkbox-perm-delete-desc">삭제 권한</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="checkbox_group">
    <legend class="checkbox_group-legend">요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)</legend>
    <div class="card_deck card_deck-2">
      <div class="checkbox_card checkbox_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
        </article>
      </div>
      <div class="checkbox_card checkbox_card-clickable color_primary" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-pro" name="plan-clickable" value="pro" aria-labelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
        </article>
      </div>
      <div class="checkbox_card checkbox_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="checkbox-plan-full-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Checkbox id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="checkbox-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
        <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
          <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-27" type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-27">마케팅 정보 수신</label>
    </div>
          <div class="checkbox" data-ripple="true">
      <span class="checkbox_control">
        <input id="checkbox-auto-28" type="checkbox" class="checkbox_input">
        <span class="checkbox_box" aria-hidden="true"></span>
      </span>
      <label class="checkbox_label" for="checkbox-auto-28">뉴스레터 구독</label>
    </div>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
        <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
          <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input" checked>
        <span class="checkbox_label">조회</span>
          </label>
          <label class="checkbox checkbox_button" data-ripple="true">
        <input type="checkbox" class="checkbox_input">
        <span class="checkbox_label">편집</span>
          </label>
        </fieldset>
      </div>
    </form>`,react:`import Checkbox from '@uxkm/react/checkbox';

export function FormExample() {
  return (
    <>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-vertical-label">
            수신 동의
          </span>
          <fieldset className="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </form>
      <form className="form form_horizontal form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-horizontal-label">
            권한
          </span>
          <fieldset
            className="checkbox_group checkbox_group_horizontal"
            aria-labelledby="checkbox-form-horizontal-label"
          >
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </form>
    </>
  );
}`,vue:`<script setup>
import Checkbox from '@uxkm/vue/checkbox';
import FormLayout from '@uxkm/vue/form-layout';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-vertical-label">수신 동의</span>
      <fieldset class="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
        <Checkbox checked label="마케팅 정보 수신" />
        <Checkbox label="뉴스레터 구독" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="checkbox-form-horizontal-label">권한</span>
      <fieldset class="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
        <Checkbox button checked label="조회" />
        <Checkbox button label="편집" />
      </fieldset>
    </div>
  </FormLayout>
</template>`}},D=Object.fromEntries(Object.entries(E).map(([e,t])=>[e,T(e,t)]))})))()}var k,A,j,M;function N(){return(N=e((()=>{k=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],A=(e,t,n)=>({title:e,description:n,tables:[{columns:k,rows:t}]}),j=[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.`},{name:`checked · defaultChecked`,type:`boolean`,default:`false`,description:`제어 및 비제어 체크 상태입니다.`},{name:`disabled · indeterminate`,type:`boolean`,default:`false`,description:`비활성 및 부분 선택 상태입니다.`},{name:`labelEnd · button`,type:`boolean`,default:`false`,description:`레이블 우선 배치 및 버튼형 변형입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`전체 Checkbox 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`보이는 레이블이 없는 단독 체크박스의 접근 가능한 이름입니다.`},{name:`className · ...props`,type:`string · input attributes`,default:`—`,description:`루트 클래스와 네이티브 checkbox 속성입니다.`}],M=[A(`React · Next.js API · Props`,j,`Next.js는 @uxkm/react/checkbox를 재사용합니다.`),A(`React · Next.js API · Events`,[{name:`onChange`,type:`(event) => void`,default:`—`,description:`체크 상태 변경 콜백입니다.`}]),A(`Vue · Nuxt API`,[{name:`label · #default`,type:`string · slot`,default:`—`,description:`레이블 콘텐츠입니다.`},...j.slice(1,5)],`Nuxt는 @uxkm/vue/checkbox를 재사용합니다.`),A(`HTML · Gulp · 클래스`,[{name:`checkbox · checkbox_control · checkbox_input · checkbox_box`,type:`class`,default:`—`,description:`체크박스 루트와 입력·커스텀 박스입니다.`},{name:`checkbox_label · checkbox_content · checkbox_hint`,type:`class`,default:`—`,description:`레이블과 보조 설명입니다.`},{name:`checkbox_label-end · checkbox_button · checkbox_block`,type:`class`,default:`—`,description:`레이아웃·버튼·너비 변형입니다.`},{name:`checkbox_group · checkbox_card · checkbox_card-clickable`,type:`class`,default:`—`,description:`그룹과 카드형 조합입니다.`}]),A(`디자인 토큰`,[{name:`--checkbox-size · --checkbox-size-sm · --checkbox-size-lg`,type:`length`,default:`1rem · 0.875rem · 1.125rem`,description:`체크박스 박스 크기입니다.`},{name:`--checkbox-gap · --checkbox-radius`,type:`length`,default:`var(--space-sm) · 4px`,description:`레이블 간격과 모서리입니다.`},{name:`--checkbox-button-padding-y · --checkbox-button-padding-x`,type:`length`,default:`0.35rem · 0.75rem`,description:`버튼형 패딩입니다.`}])]})))()}function P(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...g(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{of:o}),`
`,(0,I.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,I.jsxs)(t.p,{children:[`여러 항목을 독립적으로 선택하거나 해제하는 체크박스 컴포넌트입니다. 보이는 레이블은 input과 명시적 또는 암묵적으로 연결하고, 단독 사용 시 `,(0,I.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,I.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,I.jsx)(y,{of:a,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.type}),`
`,(0,I.jsx)(t.h2,{id:`레이블-뒤`,children:`레이블 뒤`}),`
`,(0,I.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.labelEnd}),`
`,(0,I.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,I.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.basic}),`
`,(0,I.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,I.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.standalone}),`
`,(0,I.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,I.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.size}),`
`,(0,I.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,I.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.width}),`
`,(0,I.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,I.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.color}),`
`,(0,I.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,I.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.state}),`
`,(0,I.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,I.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.group}),`
`,(0,I.jsx)(t.h2,{id:`버튼형`,children:`버튼형`}),`
`,(0,I.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.buttonType}),`
`,(0,I.jsx)(t.h2,{id:`카드형`,children:`카드형`}),`
`,(0,I.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.cardType}),`
`,(0,I.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,I.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.form}),`
`,(0,I.jsx)(w,{sections:M})]})}function F(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),_(),b(),x(),S(),O(),N(),c()})))()}L();export{F as default};