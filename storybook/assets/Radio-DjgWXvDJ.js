import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Radio.stories-5Mtcl4iM.js";import{i as g,r as _}from"./react-DSvVgjCn.js";import{c as v,r as y,u as b}from"./blocks-CkHyEh4O.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-D9Q6nkXJ.js";function T(e,t){return[{id:`html`,label:`HTML`,fileName:"apps/html/src/components/form/Radio/Radio.html · ${key}",code:t.html},{id:`gulp`,label:`Gulp`,fileName:"apps/gulp/src/components/form/Radio/radio.njk · ${key}",code:"{# apps/gulp/src/components/form/Radio/radio.njk #}\\n${source.html}"},{id:`vue`,label:`Vue`,fileName:"@uxkm/vue/radio · ${key}",code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:"@uxkm/vue/radio · ${key}",code:t.vue},{id:`react`,label:`React`,fileName:"@uxkm/react/radio · ${key}",code:t.react},{id:`next`,label:`Next`,fileName:"@uxkm/react/radio · ${key}",code:t.react}]}var E,D;function O(){return(O=e((()=>{E={type:{html:`<div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-0" type="radio" class="radio_input" name="radio-type-basic" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-0">기본 — radio</label>
    </div>

    <div class="radio radio_label-end" data-ripple="true">
      <label class="radio_label" for="radio-auto-1">레이블 뒤 — radio_label-end</label>
      <span class="radio_control">
        <input id="radio-auto-1" type="radio" class="radio_input" name="radio-type-label-end">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-type-btn" value="a" checked>
        <span class="radio_label">버튼형</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-type-btn" value="b">
        <span class="radio_label">UI</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-type-btn" value="c">
        <span class="radio_label">UX</span>
      </label>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function TypeExample() {
  return (
    <>
      <Radio name="radio-type-basic" checked label="기본 — radio" />
      <Radio name="radio-type-label-end" labelEnd label="레이블 뒤 — radio_label-end" />
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
        <Radio button name="radio-type-btn" value="b" label="UI" />
        <Radio button name="radio-type-btn" value="c" label="UX" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-type-basic" checked label="기본 — radio" />
  <Radio name="radio-type-label-end" label-end label="레이블 뒤 — radio_label-end" />
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
    <Radio button name="radio-type-btn" value="b" label="UI" />
    <Radio button name="radio-type-btn" value="c" label="UX" />
  </fieldset>
</template>`},labelEnd:{html:`<div class="radio radio_label-end" data-ripple="true">
      <label class="radio_label" for="radio-label-end-basic">신용카드</label>
      <span class="radio_control">
        <input type="radio" class="radio_input" id="radio-label-end-basic" name="radio-label-end-pay" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <div class="radio radio_label-end" data-ripple="true">
      <label class="radio_label" for="radio-label-end-dawn">
        <span class="radio_content">
          <span class="radio_label">계좌이체</span>
          <span class="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </label>
      <span class="radio_control">
        <input type="radio" class="radio_input" id="radio-label-end-dawn" name="radio-label-end-pay2">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>

    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
      <div class="radio radio_label-end" data-ripple="true">
        <label class="radio_label" for="radio-auto-2">일반 배송</label>
        <span class="radio_control">
          <input id="radio-auto-2" type="radio" class="radio_input" name="radio-label-end-ship" value="standard" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
      </div>
      <div class="radio radio_label-end" data-ripple="true">
        <label class="radio_label" for="radio-auto-3">빠른 배송</label>
        <span class="radio_control">
          <input id="radio-auto-3" type="radio" class="radio_input" name="radio-label-end-ship" value="express">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
      </div>
    </fieldset>

    <div class="radio radio_label-end radio_sm" data-ripple="true">
      <label class="radio_label" for="radio-auto-5">Small — radio_sm</label>
      <span class="radio_control">
        <input id="radio-auto-5" type="radio" class="radio_input" name="radio-label-end-size" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>
    <div class="radio radio_label-end radio_lg" data-ripple="true">
      <label class="radio_label" for="radio-auto-6">Large — radio_lg</label>
      <span class="radio_control">
        <input id="radio-auto-6" type="radio" class="radio_input" name="radio-label-end-size2" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function LabelEndExample() {
  return (
    <>
      <Radio name="radio-label-end-pay" labelEnd checked label="신용카드" />
      <Radio name="radio-label-end-pay2" labelEnd>
        <span className="radio_content">
          <span className="radio_label">계좌이체</span>
          <span className="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-label-end-pay" label-end checked label="신용카드" />
  <Radio name="radio-label-end-pay2" label-end>
    <span class="radio_content">
      <span class="radio_label">계좌이체</span>
      <span class="radio_hint">등록된 계좌로 결제합니다.</span>
    </span>
  </Radio>
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">배송 방법 — radio_group_block</legend>
    <Radio name="radio-label-end-ship" label-end checked value="standard" label="일반 배송" />
    <Radio name="radio-label-end-ship" label-end value="express" label="빠른 배송" />
  </fieldset>
  <Radio class="radio_sm" name="radio-label-end-size" label-end checked label="Small — radio_sm" />
  <Radio class="radio_lg" name="radio-label-end-size2" label-end checked label="Large — radio_lg" />
</template>`},basic:{html:`<div class="form_field">
      <span class="form_field-label" id="radio-pay-label">결제 수단</span>
      <fieldset class="radio_group" aria-labelledby="radio-pay-label">
        <div class="radio" data-ripple="true">
          <span class="radio_control">
            <input type="radio" class="radio_input" id="radio-pay-card" name="radio-pay" value="card" checked>
            <span class="radio_box" aria-hidden="true"></span>
          </span>
          <label class="radio_label" for="radio-pay-card">
            <span class="radio_content">
              <span class="radio_label">신용카드</span>
              <span class="radio_hint">Visa · Mastercard · 국내 카드</span>
            </span>
          </label>
        </div>
        <div class="radio" data-ripple="true">
          <span class="radio_control">
            <input type="radio" class="radio_input" id="radio-pay-bank" name="radio-pay" value="bank">
            <span class="radio_box" aria-hidden="true"></span>
          </span>
          <label class="radio_label" for="radio-pay-bank">
            <span class="radio_content">
              <span class="radio_label">계좌이체</span>
              <span class="radio_hint">등록된 계좌로 결제합니다.</span>
            </span>
          </label>
        </div>
      </fieldset>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="radio-pay-label">
        결제 수단
      </span>
      <fieldset className="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
          <span className="radio_content">
            <span className="radio_label">신용카드</span>
            <span className="radio_hint">Visa · Mastercard · 국내 카드</span>
          </span>
        </Radio>
        <Radio name="radio-pay" value="bank">
          <span className="radio_content">
            <span className="radio_label">계좌이체</span>
            <span className="radio_hint">등록된 계좌로 결제합니다.</span>
          </span>
        </Radio>
      </fieldset>
    </div>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <div class="form_field">
    <span class="form_field-label" id="radio-pay-label">결제 수단</span>
    <fieldset class="radio_group" aria-labelledby="radio-pay-label">
      <Radio name="radio-pay" checked value="card">
        <span class="radio_content">
          <span class="radio_label">신용카드</span>
          <span class="radio_hint">Visa · Mastercard · 국내 카드</span>
        </span>
      </Radio>
      <Radio name="radio-pay" value="bank">
        <span class="radio_content">
          <span class="radio_label">계좌이체</span>
          <span class="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </fieldset>
  </div>
</template>`},standalone:{html:`<div class="radio_group radio_group_horizontal">
      <label class="radio_control" data-ripple="true"><input aria-label="항목 선택" type="radio" class="radio_input" name="radio-standalone">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
      <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" name="radio-standalone" checked aria-label="선택됨">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
      <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" name="radio-standalone-disabled" disabled aria-label="비활성">
        <span class="radio_box" aria-hidden="true"></span>
      </label>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function StandaloneExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" ariaLabel="항목 선택" />
      <Radio name="radio-standalone" checked ariaLabel="선택됨" />
      <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
    </div>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio name="radio-standalone" aria-label="항목 선택" />
    <Radio name="radio-standalone" checked aria-label="선택됨" />
    <Radio name="radio-standalone-disabled" disabled aria-label="비활성" />
  </div>
</template>`},size:{html:`<div class="radio_group radio_group_horizontal">
      <div class="radio radio_sm" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-7" type="radio" class="radio_input" name="radio-size" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-7">Small — radio_sm</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-8" type="radio" class="radio_input" name="radio-size">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-8">Medium — 기본</label>
      </div>
      <div class="radio radio_lg" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-9" type="radio" class="radio_input" name="radio-size">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-9">Large — radio_lg</label>
      </div>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function SizeExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <div class="radio_group radio_group_horizontal">
    <Radio class="radio_sm" name="radio-size" checked label="Small — radio_sm" />
    <Radio name="radio-size" label="Medium — 기본" />
    <Radio class="radio_lg" name="radio-size" label="Large — radio_lg" />
  </div>
</template>`},width:{html:`<div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-10" type="radio" class="radio_input" name="radio-width-inline" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-10">기본 — 인라인 너비</label>
    </div>

    <div class="radio radio_block" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-11" type="radio" class="radio_input" name="radio-width-block" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-11">radio_block — 전체 너비</label>
    </div>

    <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
      <legend class="radio_group-legend">radio_group_block</legend>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-12" type="radio" class="radio_input" name="radio-width-g1" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-12">항목 1</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-13" type="radio" class="radio_input" name="radio-width-g1">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-13">항목 2</label>
      </div>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function WidthExample() {
  return (
    <>
      <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
      <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
  <Radio name="radio-width-block" class="radio_block" checked label="radio_block — 전체 너비" />
  <fieldset class="radio_group radio_group_block" style="max-width: 360px; width: 100%;">
    <legend class="radio_group-legend">radio_group_block</legend>
    <Radio name="radio-width-g1" checked label="항목 1" />
    <Radio name="radio-width-g1" label="항목 2" />
  </fieldset>
</template>`},color:{html:`<div class="radio color_primary" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-14" type="radio" class="radio_input" name="radio-color-primary" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-14">Primary</label>
    </div>
    <div class="radio color_success" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-15" type="radio" class="radio_input" name="radio-color-success" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-15">Success</label>
    </div>
    <div class="radio color_danger" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-16" type="radio" class="radio_input" name="radio-color-danger" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-16">Danger</label>
    </div>
    <div class="radio color_warning" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-17" type="radio" class="radio_input" name="radio-color-warning" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-17">Warning</label>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function ColorExample() {
  return (
    <>
      <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
      <Radio className="color_success" name="radio-color-success" checked label="Success" />
      <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
      <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio class="color_primary" name="radio-color-primary" checked label="Primary" />
  <Radio class="color_success" name="radio-color-success" checked label="Success" />
  <Radio class="color_danger" name="radio-color-danger" checked label="Danger" />
  <Radio class="color_warning" name="radio-color-warning" checked label="Warning" />
</template>`},state:{html:`<div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-18" type="radio" class="radio_input" name="radio-state">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-18">미선택</label>
    </div>
    <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-19" type="radio" class="radio_input" name="radio-state" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-19">선택됨</label>
    </div>
    <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-20" type="radio" class="radio_input" name="radio-state-disabled" disabled>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-20">비활성</label>
    </div>
    <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-21" type="radio" class="radio_input" name="radio-state-disabled" checked disabled>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-21">선택됨 (비활성)</label>
    </div>`,react:`import Radio from '@uxkm/react/radio';

export function StateExample() {
  return (
    <>
      <Radio name="radio-state" label="미선택" />
      <Radio name="radio-state" checked label="선택됨" />
      <Radio name="radio-state-disabled" disabled label="비활성" />
      <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <Radio name="radio-state" label="미선택" />
  <Radio name="radio-state" checked label="선택됨" />
  <Radio name="radio-state-disabled" disabled label="비활성" />
  <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
</template>`},group:{html:`<fieldset class="radio_group">
      <legend class="radio_group-legend">배송 방법 (세로)</legend>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-23" type="radio" class="radio_input" name="radio-group-ship" value="standard" checked>
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-23">일반 배송</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-24" type="radio" class="radio_input" name="radio-group-ship" value="express">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-24">빠른 배송</label>
      </div>
      <div class="radio" data-ripple="true">
        <span class="radio_control">
          <input id="radio-auto-25" type="radio" class="radio_input" name="radio-group-ship" value="pickup">
          <span class="radio_box" aria-hidden="true"></span>
        </span>
        <label class="radio_label" for="radio-auto-25">매장 픽업</label>
      </div>
    </fieldset>

    <fieldset class="radio_group radio_group_horizontal">
      <legend class="radio_group-legend">크기 (가로)</legend>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-group-size" value="s" checked>
        <span class="radio_label">S</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-group-size" value="m">
        <span class="radio_label">M</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-group-size" value="l">
        <span class="radio_label">L</span>
      </label>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function GroupExample() {
  return (
    <>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">배송 방법 (세로)</legend>
        <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
        <Radio name="radio-group-ship" value="express" label="빠른 배송" />
        <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
      </fieldset>
      <fieldset className="radio_group radio_group_horizontal">
        <legend className="radio_group-legend">크기 (가로)</legend>
        <Radio button name="radio-group-size" checked value="s" label="S" />
        <Radio button name="radio-group-size" value="m" label="M" />
        <Radio button name="radio-group-size" value="l" label="L" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">배송 방법 (세로)</legend>
    <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
    <Radio name="radio-group-ship" value="express" label="빠른 배송" />
    <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <legend class="radio_group-legend">크기 (가로)</legend>
    <Radio button name="radio-group-size" checked value="s" label="S" />
    <Radio button name="radio-group-size" value="m" label="M" />
    <Radio button name="radio-group-size" value="l" label="L" />
  </fieldset>
</template>`},buttonType:{html:`<fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="all" checked>
        <span class="radio_label">전체</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="active">
        <span class="radio_label">진행 중</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="done">
        <span class="radio_label">완료</span>
      </label>
      <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-filter" value="hold" disabled>
        <span class="radio_label">보류 (비활성)</span>
      </label>
    </fieldset>

    <fieldset class="radio_group radio_group_horizontal">
      <label class="radio radio_button radio_sm color_success" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-size" value="sm" checked>
        <span class="radio_label">Small</span>
      </label>
      <label class="radio radio_button color_success" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-size" value="md" checked>
        <span class="radio_label">Medium</span>
      </label>
      <label class="radio radio_button radio_lg color_success" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-btn-size" value="lg" checked>
        <span class="radio_label">Large</span>
      </label>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

export function ButtonTypeExample() {
  return (
    <fieldset className="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button name="radio-btn-filter" checked value="all" label="전체" />
    <Radio button name="radio-btn-filter" value="active" label="진행 중" />
    <Radio button name="radio-btn-filter" value="done" label="완료" />
    <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
  </fieldset>
  <fieldset class="radio_group radio_group_horizontal">
    <Radio button class="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
    <Radio button class="color_success" name="radio-btn-size" checked value="md" label="Medium" />
    <Radio button class="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
  </fieldset>
</template>`},cardType:{html:`<fieldset class="radio_group">
      <legend class="radio_group-legend">요금제 선택</legend>
      <div class="card_deck card_deck-2">
        <div class="radio_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
          </article>
        </div>
        <div class="radio_card color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-plan-pro" name="radio-plan" value="pro" aria-labelledby="radio-plan-pro-title radio-plan-pro-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
          </article>
        </div>
        <div class="radio_card">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled aria-labelledby="radio-plan-enterprise-title radio-plan-enterprise-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="radio_group">
      <legend class="radio_group-legend">기본 권한 (가로)</legend>
      <div class="card_deck card_deck-3">
        <div class="radio_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-role-read-title">읽기</h3>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-role-read-desc">조회 권한</div>
          </article>
        </div>
        <div class="radio_card color_success">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-role-write-title">쓰기</h3>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-role-write-desc">수정 권한</div>
          </article>
        </div>
        <div class="radio_card">
          <article class="card card_compact">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-role-admin-title">관리</h3>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true"><input type="radio" class="radio_input" id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc">
                <span class="radio_box" aria-hidden="true"></span>
              </label>
              </div>
            </div>
            <div class="card_body" id="radio-role-admin-desc">전체 관리 권한</div>
          </article>
        </div>
      </div>
    </fieldset>

    <fieldset class="radio_group">
      <legend class="radio_group-legend">요금제 선택 — 카드 전체 클릭 (radio_card-clickable)</legend>
      <div class="card_deck card_deck-2">
        <div class="radio_card radio_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-full-basic-title">Basic</h3>
                <p class="card_subtitle">월 9,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true">
                  <input type="radio" class="radio_input" id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
          </article>
        </div>
        <div class="radio_card radio_card-clickable color_primary">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-full-pro-title">Pro</h3>
                <p class="card_subtitle">월 29,000원</p>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true">
                  <input type="radio" class="radio_input" id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
          </article>
        </div>
        <div class="radio_card radio_card-clickable">
          <article class="card card_compact card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title" id="radio-plan-full-enterprise-title">Enterprise</h3>
                <p class="card_subtitle">별도 문의</p>
              </div>
              <div class="card_extra">
                <label class="radio_control" data-ripple="true">
                  <input type="radio" class="radio_input" id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc">
                  <span class="radio_box" aria-hidden="true"></span>
                </label>
              </div>
            </div>
            <div class="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
          </article>
        </div>
      </div>
    </fieldset>`,react:`import Radio from '@uxkm/react/radio';

function PlanCard({
  id,
  titleId,
  descId,
  title,
  subtitle,
  desc,
  value,
  checked,
  disabled,
  colorClass,
  name = 'radio-plan',
}) {
  return (
    <div className={cnCard(colorClass)}>
      <article className="card card_compact card_shadow">
        <div className="card_header">
          <div className="card_header-main">
            <h3 className="card_title" id={titleId}>
              {title}
            </h3>
            <p className="card_subtitle">{subtitle}</p>
          </div>
          <div className="card_extra">
            <Radio
              id={id}
              name={name}
              value={value}
              checked={checked}
              disabled={disabled}
              aria-labelledby={\`\${titleId} \${descId}\`}
            />
          </div>
        </div>
        <div className="card_body" id={descId}>
          {desc}
        </div>
      </article>
    </div>
  );
}

function cnCard(colorClass, clickable) {
  return ['radio_card', colorClass, clickable && 'radio_card-clickable'].filter(Boolean).join(' ');
}

export function CardTypeExample() {
  return (
    <>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">요금제 선택</legend>
            <div className="card_deck card_deck-2">
              <PlanCard
                id="radio-plan-basic"
                titleId="radio-plan-basic-title"
                descId="radio-plan-basic-desc"
                title="Basic"
                subtitle="월 9,000원"
                desc="개인 프로젝트에 적합합니다."
                value="basic"
                checked
              />
              <PlanCard
                id="radio-plan-pro"
                titleId="radio-plan-pro-title"
                descId="radio-plan-pro-desc"
                title="Pro"
                subtitle="월 29,000원"
                desc="팀 협업과 고급 기능을 제공합니다."
                value="pro"
                colorClass="color_primary"
              />
              <PlanCard
                id="radio-plan-enterprise"
                titleId="radio-plan-enterprise-title"
                descId="radio-plan-enterprise-desc"
                title="Enterprise"
                subtitle="별도 문의"
                desc="대규모 조직용 맞춤 플랜입니다. (비활성)"
                value="enterprise"
                disabled
              />
            </div>
          </fieldset>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">기본 권한 (가로)</legend>
            <div className="card_deck card_deck-3">
              <div className="radio_card color_success">
                <article className="card card_compact">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-role-read-title">
                        읽기
                      </h3>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-role-read"
                        name="radio-role"
                        value="read"
                        checked
                        aria-labelledby="radio-role-read-title radio-role-read-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-role-read-desc">
                    조회 권한
                  </div>
                </article>
              </div>
              <div className="radio_card color_success">
                <article className="card card_compact">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-role-write-title">
                        쓰기
                      </h3>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-role-write"
                        name="radio-role"
                        value="write"
                        aria-labelledby="radio-role-write-title radio-role-write-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-role-write-desc">
                    수정 권한
                  </div>
                </article>
              </div>
              <div className="radio_card">
                <article className="card card_compact">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-role-admin-title">
                        관리
                      </h3>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-role-admin"
                        name="radio-role"
                        value="admin"
                        aria-labelledby="radio-role-admin-title radio-role-admin-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-role-admin-desc">
                    전체 관리 권한
                  </div>
                </article>
              </div>
            </div>
          </fieldset>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">
              요금제 선택 — 카드 전체 클릭 (radio_card-clickable)
            </legend>
            <div className="card_deck card_deck-2">
              <div className="radio_card radio_card-clickable" data-ripple="">
                <article className="card card_compact card_shadow">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-plan-full-basic-title">
                        Basic
                      </h3>
                      <p className="card_subtitle">월 9,000원</p>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-plan-full-basic"
                        name="radio-plan-clickable"
                        value="basic"
                        checked
                        aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-basic-desc">
                    카드 어디를 눌러도 선택됩니다.
                  </div>
                </article>
              </div>
              <div className="radio_card radio_card-clickable color_primary" data-ripple="">
                <article className="card card_compact card_shadow">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-plan-full-pro-title">
                        Pro
                      </h3>
                      <p className="card_subtitle">월 29,000원</p>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-plan-full-pro"
                        name="radio-plan-clickable"
                        value="pro"
                        aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-pro-desc">
                    제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.
                  </div>
                </article>
              </div>
              <div className="radio_card radio_card-clickable" data-ripple="">
                <article className="card card_compact card_shadow">
                  <div className="card_header">
                    <div className="card_header-main">
                      <h3 className="card_title" id="radio-plan-full-enterprise-title">
                        Enterprise
                      </h3>
                      <p className="card_subtitle">별도 문의</p>
                    </div>
                    <div className="card_extra">
                      <Radio
                        id="radio-plan-full-enterprise"
                        name="radio-plan-clickable"
                        value="enterprise"
                        disabled
                        aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-enterprise-desc">
                    대규모 조직용 맞춤 플랜입니다. (비활성)
                  </div>
                </article>
              </div>
            </div>
          </fieldset>
        </>,
  );
}`,vue:`<script setup>
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">요금제 선택</legend>
    <div class="card_deck card_deck-2">
      <div class="radio_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-basic" name="radio-plan" value="basic" checked aria-labelledby="radio-plan-basic-title radio-plan-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-basic-desc">개인 프로젝트에 적합합니다.</div>
        </article>
      </div>
      <div class="radio_card color_primary">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-pro" name="radio-plan" value="pro" aria-labelledby="radio-plan-pro-title radio-plan-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-pro-desc">팀 협업과 고급 기능을 제공합니다.</div>
        </article>
      </div>
      <div class="radio_card">
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-enterprise" name="radio-plan" value="enterprise" disabled aria-labelledby="radio-plan-enterprise-title radio-plan-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">기본 권한 (가로)</legend>
    <div class="card_deck card_deck-3">
      <div class="radio_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-role-read-title">읽기</h3>
            </div>
            <div class="card_extra">
              <Radio id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-role-read-desc">조회 권한</div>
        </article>
      </div>
      <div class="radio_card color_success">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-role-write-title">쓰기</h3>
            </div>
            <div class="card_extra">
              <Radio id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-role-write-desc">수정 권한</div>
        </article>
      </div>
      <div class="radio_card">
        <article class="card card_compact">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-role-admin-title">관리</h3>
            </div>
            <div class="card_extra">
              <Radio id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-role-admin-desc">전체 관리 권한</div>
        </article>
      </div>
    </div>
  </fieldset>
  <fieldset class="radio_group">
    <legend class="radio_group-legend">요금제 선택 — 카드 전체 클릭 (radio_card-clickable)</legend>
    <div class="card_deck card_deck-2">
      <div class="radio_card radio_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-basic-title">Basic</h3>
              <p class="card_subtitle">월 9,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-basic-desc">카드 어디를 눌러도 선택됩니다.</div>
        </article>
      </div>
      <div class="radio_card radio_card-clickable color_primary" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-pro-title">Pro</h3>
              <p class="card_subtitle">월 29,000원</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-pro-desc">제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.</div>
        </article>
      </div>
      <div class="radio_card radio_card-clickable" data-ripple>
        <article class="card card_compact card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title" id="radio-plan-full-enterprise-title">Enterprise</h3>
              <p class="card_subtitle">별도 문의</p>
            </div>
            <div class="card_extra">
              <Radio id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"  />
            </div>
          </div>
          <div class="card_body" id="radio-plan-full-enterprise-desc">대규모 조직용 맞춤 플랜입니다. (비활성)</div>
        </article>
      </div>
    </div>
  </fieldset>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
        <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
          <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-26" type="radio" class="radio_input" name="radio-form-channel" value="email" checked>
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-26">이메일</label>
    </div>
          <div class="radio" data-ripple="true">
      <span class="radio_control">
        <input id="radio-auto-27" type="radio" class="radio_input" name="radio-form-channel" value="sms">
        <span class="radio_box" aria-hidden="true"></span>
      </span>
      <label class="radio_label" for="radio-auto-27">SMS</label>
    </div>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
        <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
          <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-form-role" value="viewer" checked>
        <span class="radio_label">뷰어</span>
          </label>
          <label class="radio radio_button" data-ripple="true">
        <input type="radio" class="radio_input" name="radio-form-role" value="editor">
        <span class="radio_label">편집자</span>
          </label>
        </fieldset>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Radio from '@uxkm/react/radio';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-vertical-label">
            수신 채널
          </span>
          <fieldset className="radio_group" aria-labelledby="radio-form-vertical-label">
            <Radio name="radio-form-channel" checked value="email" label="이메일" />
            <Radio name="radio-form-channel" value="sms" label="SMS" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-horizontal-label">
            역할
          </span>
          <fieldset
            className="radio_group radio_group_horizontal"
            aria-labelledby="radio-form-horizontal-label"
          >
            <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
            <Radio button name="radio-form-role" value="editor" label="편집자" />
          </fieldset>
        </div>
      </FormLayout>
    </>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Radio from '@uxkm/vue/radio';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-vertical-label">수신 채널</span>
      <fieldset class="radio_group" aria-labelledby="radio-form-vertical-label">
        <Radio name="radio-form-channel" checked value="email" label="이메일" />
        <Radio name="radio-form-channel" value="sms" label="SMS" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="radio-form-horizontal-label">역할</span>
      <fieldset class="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
        <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
        <Radio button name="radio-form-role" value="editor" label="편집자" />
      </fieldset>
    </div>
  </FormLayout>
</template>`}},D=Object.fromEntries(Object.entries(E).map(([e,t])=>[e,T(e,t)]))})))()}var k,A,j,M;function N(){return(N=e((()=>{k=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],A=(e,t,n)=>({title:e,description:n,tables:[{columns:k,rows:t}]}),j=[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.`},{name:`name · value`,type:`string`,default:`—`,description:`라디오 그룹 이름과 제출 값입니다.`},{name:`checked · defaultChecked`,type:`boolean`,default:`false`,description:`제어 및 비제어 선택 상태입니다.`},{name:`disabled · labelEnd · button`,type:`boolean`,default:`false`,description:`비활성, 레이블 배치, 버튼형 변형입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`전체 Radio 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`보이는 레이블이 없는 단독 라디오의 접근 가능한 이름입니다.`},{name:`className · ...props`,type:`string · input attributes`,default:`—`,description:`루트 클래스와 네이티브 radio 속성입니다.`}],M=[A(`React · Next.js API · Props`,j,`Next.js는 @uxkm/react/radio를 재사용합니다.`),A(`React · Next.js API · Events`,[{name:`onChange`,type:`(event) => void`,default:`—`,description:`선택 상태 변경 콜백입니다.`}]),A(`Vue · Nuxt API`,[{name:`label · #default`,type:`string · slot`,default:`—`,description:`레이블 콘텐츠입니다.`},...j.slice(1,5)],`Nuxt는 @uxkm/vue/radio를 재사용합니다.`),A(`HTML · Gulp · 클래스`,[{name:`radio · radio_control · radio_input · radio_box`,type:`class`,default:`—`,description:`라디오 루트와 입력·커스텀 원입니다.`},{name:`radio_label · radio_content · radio_hint`,type:`class`,default:`—`,description:`레이블과 보조 설명입니다.`},{name:`radio_label-end · radio_button · radio_block`,type:`class`,default:`—`,description:`레이아웃·버튼·너비 변형입니다.`},{name:`radio_group · radio_card · radio_card-clickable`,type:`class`,default:`—`,description:`그룹과 카드형 조합입니다.`}]),A(`디자인 토큰`,[{name:`--radio-size · --radio-size-sm · --radio-size-lg`,type:`length`,default:`var(--checkbox-size) · … · …`,description:`라디오 원 크기입니다.`},{name:`--radio-gap · --radio-radius`,type:`length`,default:`var(--checkbox-gap) · 50%`,description:`레이블 간격과 원형 모서리입니다.`},{name:`--radio-button-padding-y · --radio-button-padding-x`,type:`length`,default:`var(--checkbox-button-padding-y) · var(--checkbox-button-padding-x)`,description:`버튼형 패딩입니다.`}])]})))()}function P(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...g(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{of:r}),`
`,(0,I.jsx)(t.h1,{id:`radio`,children:`Radio`}),`
`,(0,I.jsxs)(t.p,{children:[`같은 그룹에서 하나의 항목만 선택하는 라디오 컴포넌트입니다. 관련 항목은 같은 `,(0,I.jsx)(t.code,{children:`name`}),`을 사용하고 `,(0,I.jsx)(t.code,{children:`fieldset`}),`과 `,(0,I.jsx)(t.code,{children:`legend`}),`로 그룹의 목적을 제공합니다.`]}),`
`,(0,I.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,I.jsx)(y,{of:a,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.type}),`
`,(0,I.jsx)(t.h2,{id:`레이블-뒤`,children:`레이블 뒤`}),`
`,(0,I.jsx)(y,{of:p,sourceState:`none`}),`
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
`,(0,I.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.color}),`
`,(0,I.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,I.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.state}),`
`,(0,I.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,I.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.group}),`
`,(0,I.jsx)(t.h2,{id:`버튼형`,children:`버튼형`}),`
`,(0,I.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.buttonType}),`
`,(0,I.jsx)(t.h2,{id:`카드형`,children:`카드형`}),`
`,(0,I.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.cardType}),`
`,(0,I.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,I.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,I.jsx)(C,{examples:D.form}),`
`,(0,I.jsx)(w,{sections:M})]})}function F(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),_(),b(),x(),S(),O(),N(),c()})))()}L();export{F as default};