import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Switch.stories-DJAsUwuk.js";import{i as m,r as h}from"./react-DSvVgjCn.js";import{c as g,r as _,u as v}from"./blocks-CkHyEh4O.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-D9Q6nkXJ.js";function C(e,t){return[{id:`html`,label:`HTML`,fileName:"apps/html/src/components/form/Switch/Switch.html · ${key}",code:t.html},{id:`gulp`,label:`Gulp`,fileName:"apps/gulp/src/components/form/Switch/switch.njk · ${key}",code:"{# apps/gulp/src/components/form/Switch/switch.njk #}\\n${source.html}"},{id:`vue`,label:`Vue`,fileName:"@uxkm/vue/switch · ${key}",code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:"@uxkm/vue/switch · ${key}",code:t.vue},{id:`react`,label:`React`,fileName:"@uxkm/react/switch · ${key}",code:t.react},{id:`next`,label:`Next`,fileName:"@uxkm/react/switch · ${key}",code:t.react}]}var w,T;function E(){return(E=e((()=>{w={type:{html:`<label class="switch" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">기본 — switch</span>
    </label>

    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">레이블 뒤 — switch_label-end</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function TypeExample() {
  return (
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch checked label="기본 — switch" />
  <Switch label-end checked label="레이블 뒤 — switch_label-end" />
</template>`},labelEnd:{html:`<label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">푸시 알림 받기</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-label-end-push" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_content">
        <span class="switch_label">마케팅 정보 수신</span>
        <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
      </span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-label-end-marketing">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
      <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">이메일 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">푸시 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">SMS 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>

    <label class="switch switch_label-end switch_sm" data-ripple="true">
      <span class="switch_label">Small — switch_sm</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end switch_lg" data-ripple="true">
      <span class="switch_label">Large — switch_lg</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function LabelEndExample() {
  return (
    <>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end checked label="푸시 알림 받기" />
  <Switch label-end>
    <span class="switch_content">
      <span class="switch_label">마케팅 정보 수신</span>
      <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
    </span>
  </Switch>
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
    <Switch label-end checked label="이메일 알림" />
    <Switch label-end checked label="푸시 알림" />
    <Switch label-end label="SMS 알림" />
  </fieldset>
  <Switch label-end size="sm" checked label="Small — switch_sm" />
  <Switch label-end size="lg" checked label="Large — switch_lg" />
</template>`},basic:{html:`<label class="switch" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-basic-dark" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">다크 모드</span>
    </label>

    <label class="switch" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-basic-auto">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">자동 저장</span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function BasicExample() {
  return (
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch checked label="다크 모드" />
  <Switch label="자동 저장" />
</template>`},standalone:{html:`<label class="switch" aria-label="기능 켜기" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch" aria-label="기능 끄기" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch" aria-label="비활성" data-ripple="true">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function StandaloneExample() {
  return (
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch aria-label="기능 켜기" />
  <Switch checked aria-label="기능 끄기" />
  <Switch disabled aria-label="비활성" />
</template>`},size:{html:`<label class="switch switch_sm switch_label-end" data-ripple="true">
      <span class="switch_label">Small — switch_sm</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">Medium — 기본</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_lg switch_label-end" data-ripple="true">
      <span class="switch_label">Large — switch_lg</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function SizeExample() {
  return (
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end size="sm" checked label="Small — switch_sm" />
  <Switch label-end checked label="Medium — 기본" />
  <Switch label-end size="lg" checked label="Large — switch_lg" />
</template>`},width:{html:`<label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">기본 — 인라인 너비</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <label class="switch switch_label-end switch_block" data-ripple="true">
      <span class="switch_label">switch_block — 전체 너비</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
      <legend class="switch_group-legend">switch_group_block</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">Wi-Fi</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">블루투스</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>`,react:`import Switch from '@uxkm/react/switch';

export function WidthExample() {
  return (
    <>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end checked label="기본 — 인라인 너비" />
  <Switch label-end class="switch_block" checked label="switch_block — 전체 너비" />
  <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
    <legend class="switch_group-legend">switch_group_block</legend>
    <Switch label-end checked label="Wi-Fi" />
    <Switch label-end label="블루투스" />
  </fieldset>
</template>`},color:{html:`<label class="switch color_primary switch_label-end" data-ripple="true">
      <span class="switch_label">Primary</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_success switch_label-end" data-ripple="true">
      <span class="switch_label">Success</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_danger switch_label-end" data-ripple="true">
      <span class="switch_label">Danger</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_warning switch_label-end" data-ripple="true">
      <span class="switch_label">Warning</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function ColorExample() {
  return (
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch class="color_primary" label-end checked label="Primary" />
  <Switch class="color_success" label-end checked label="Success" />
  <Switch class="color_danger" label-end checked label="Danger" />
  <Switch class="color_warning" label-end checked label="Warning" />
</template>`},state:{html:`<label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">꺼짐</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">켜짐</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">비활성</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end" data-ripple="true">
      <span class="switch_label">켜짐 (비활성)</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>`,react:`import Switch from '@uxkm/react/switch';

export function StateExample() {
  return (
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <Switch label-end label="꺼짐" />
  <Switch label-end checked label="켜짐" />
  <Switch label-end disabled label="비활성" />
  <Switch label-end checked disabled label="켜짐 (비활성)" />
</template>`},group:{html:`<fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
      <legend class="switch_group-legend">개인정보 설정</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_content">
          <span class="switch_label">프로필 공개</span>
          <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
        </span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_content">
          <span class="switch_label">활동 기록 표시</span>
          <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
        </span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">검색 허용</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>

    <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
      <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">고대비 모드</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end" data-ripple="true">
        <span class="switch_label">애니메이션 줄이기</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>`,react:`import Switch from '@uxkm/react/switch';

export function GroupExample() {
  return (
    <>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset
        className="switch_group switch_group_block switch_group_compact"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>
  );
}`,vue:`<script setup>
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">개인정보 설정</legend>
    <Switch label-end checked>
      <span class="switch_content">
        <span class="switch_label">프로필 공개</span>
        <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
      </span>
    </Switch>
    <Switch label-end>
      <span class="switch_content">
        <span class="switch_label">활동 기록 표시</span>
        <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
      </span>
    </Switch>
    <Switch label-end checked label="검색 허용" />
  </fieldset>
  <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
    <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
    <Switch label-end label="고대비 모드" />
    <Switch label-end label="애니메이션 줄이기" />
  </fieldset>
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="switch-form-vertical-label">알림</span>
        <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
          <label class="switch switch_label-end" data-ripple="true">
            <span class="switch_label">이메일 알림</span>
            <span class="switch_control">
              <input type="checkbox" class="switch_input" role="switch" checked>
              <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
            </span>
          </label>
          <label class="switch switch_label-end" data-ripple="true">
            <span class="switch_label">푸시 알림</span>
            <span class="switch_control">
              <input type="checkbox" class="switch_input" role="switch">
              <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
            </span>
          </label>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
        <label class="switch switch_label-end" aria-labelledby="switch-form-horizontal-label" data-ripple="true">
          <span class="switch_label">편집 내용 자동 저장</span>
          <span class="switch_control">
            <input type="checkbox" class="switch_input" role="switch" checked>
            <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
          </span>
        </label>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Switch from '@uxkm/react/switch';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset
            className="switch_group switch_group_block"
            aria-labelledby="switch-form-vertical-label"
          >
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch
            labelEnd
            checked
            label="편집 내용 자동 저장"
            aria-labelledby="switch-form-horizontal-label"
          />
        </div>
      </FormLayout>
    </>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Switch from '@uxkm/vue/switch';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-vertical-label">알림</span>
      <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
        <Switch label-end checked label="이메일 알림" />
        <Switch label-end label="푸시 알림" />
      </fieldset>
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
      <Switch label-end checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
    </div>
  </FormLayout>
</template>`}},T=Object.fromEntries(Object.entries(w).map(([e,t])=>[e,C(e,t)]))})))()}var D,O,k,A;function j(){return(j=e((()=>{D=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],O=(e,t,n)=>({title:e,description:n,tables:[{columns:D,rows:t}]}),k=[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.`},{name:`checked · defaultChecked`,type:`boolean`,default:`false`,description:`제어 및 비제어 켜짐 상태입니다.`},{name:`disabled · labelEnd`,type:`boolean`,default:`false`,description:`비활성 상태와 레이블 우선 배치입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트랙과 레이블 크기입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`전체 Switch 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`보이는 레이블이 없는 스위치의 접근 가능한 이름입니다.`},{name:`name · value · className · ...props`,type:`input attributes`,default:`—`,description:`폼 값, 루트 클래스, 네이티브 checkbox 속성입니다.`}],A=[O(`React · Next.js API · Props`,k,`Next.js는 @uxkm/react/switch를 재사용합니다.`),O(`React · Next.js API · Events`,[{name:`onChange`,type:`(event) => void`,default:`—`,description:`켜짐 상태 변경 콜백입니다.`}]),O(`Vue · Nuxt API`,[{name:`label · #default`,type:`string · slot`,default:`—`,description:`레이블 콘텐츠입니다.`},...k.slice(1,5)],`Nuxt는 @uxkm/vue/switch를 재사용합니다.`),O(`HTML · Gulp · 클래스`,[{name:`switch · switch_control · switch_input`,type:`class`,default:`—`,description:`스위치 루트와 checkbox 입력입니다.`},{name:`switch_track · switch_thumb`,type:`class`,default:`—`,description:`트랙과 이동 손잡이입니다.`},{name:`switch_sm · switch_lg · switch_label-end · switch_block`,type:`class`,default:`—`,description:`크기·레이아웃·너비 변형입니다.`},{name:`switch_group · switch_group_compact · switch_group_block`,type:`class`,default:`—`,description:`그룹 간격과 너비입니다.`}]),O(`디자인 토큰`,[{name:`--switch-width · --switch-height`,type:`length`,default:`2.75rem · 1.5rem`,description:`기본 트랙 크기입니다.`},{name:`--switch-width-sm · --switch-width-lg`,type:`length`,default:`2.25rem · 3.25rem`,description:`크기 변형의 트랙 너비입니다.`},{name:`--switch-gap · --switch-radius`,type:`length`,default:`—`,description:`레이블 간격과 트랙 모서리입니다.`}])]})))()}function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...m(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{of:s}),`
`,(0,P.jsx)(t.h1,{id:`switch`,children:`Switch`}),`
`,(0,P.jsxs)(t.p,{children:[`설정을 즉시 켜거나 끄는 Switch 컴포넌트입니다. `,(0,P.jsx)(t.code,{children:`type="checkbox"`}),`와 `,(0,P.jsx)(t.code,{children:`role="switch"`}),`를 함께 사용하며 현재 상태를 `,(0,P.jsx)(t.code,{children:`checked`}),`로 전달합니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,P.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.type}),`
`,(0,P.jsx)(t.h2,{id:`레이블-뒤`,children:`레이블 뒤`}),`
`,(0,P.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.labelEnd}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.basic}),`
`,(0,P.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,P.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.standalone}),`
`,(0,P.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,P.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.size}),`
`,(0,P.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,P.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.width}),`
`,(0,P.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,P.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.color}),`
`,(0,P.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,P.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.state}),`
`,(0,P.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,P.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.group}),`
`,(0,P.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,P.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(x,{examples:T.form}),`
`,(0,P.jsx)(S,{sections:A})]})}function N(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),h(),v(),y(),b(),E(),j(),a()})))()}F();export{N as default};