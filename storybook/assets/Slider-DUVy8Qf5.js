import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Slider.stories-Dny2TAHT.js";import{i as g,r as _}from"./react-DSvVgjCn.js";import{c as v,r as y,u as b}from"./blocks-CkHyEh4O.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-D9Q6nkXJ.js";function T(e,t){let n=`{# apps/gulp/src/components/form/Slider/slider.njk #}\n${t.html}`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/form/Slider/Slider.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/form/Slider/slider.njk · ${e}`,code:n},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/slider · ${e}`,code:t.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/slider · ${e}`,code:t.vue},{id:`react`,label:`React`,fileName:`@uxkm/react/slider · ${e}`,code:t.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/slider · ${e}`,code:t.react}]}var E,D;function O(){return(O=e((()=>{E={type:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-type-label">label + for — 기본</label>
        <output class="slider_value" for="slider-type-label">40</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-label" min="0" max="100" value="40">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <input type="range" class="slider_input" min="0" max="100" value="55" aria-label="단독 슬라이더 — aria-label">
      <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
    </div>

    <div class="slider slider_fit" role="group" aria-labelledby="slider-type-labelledby-label">
      <div class="slider_header">
        <span class="slider_label" id="slider-type-labelledby-label">aria-labelledby — 외부 레이블</span>
        <output class="slider_value" for="slider-type-labelledby">16</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-labelledby" min="12" max="24" step="1" value="16" aria-labelledby="slider-type-labelledby-label" aria-describedby="slider-type-labelledby-hint" data-slider-valuetext-suffix="픽셀">
      <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-type-describedby">aria-describedby — 보조 설명</label>
        <output class="slider_value" for="slider-type-describedby">70%</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-describedby" min="0" max="100" value="70" aria-describedby="slider-type-describedby-hint" data-slider-suffix="%" data-slider-valuetext-suffix="퍼센트">
      <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-type-valuetext">aria-valuetext — 읽기 쉬운 값</label>
        <output class="slider_value" for="slider-type-valuetext" aria-hidden="true">3단계</output>
      </div>
      <input type="range" class="slider_input" id="slider-type-valuetext" min="1" max="5" step="1" value="3" data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음">
      <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function TypeExample() {
  return (
    <>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        value={40}
        showValue
      />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        value={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        value={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        value={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다.
      </p>
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider
  id="slider-type-label"
  class="slider_fit"
  label="label + for — 기본"
  :value="40"
  show-value
  />
  <Slider
  class="slider_fit"
  :value="55"
  aria-label="단독 슬라이더 — aria-label"
  />
  <p class="slider_hint">레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
  <Slider
  id="slider-type-labelledby"
  class="slider_fit"
  label="aria-labelledby — 외부 레이블"
  :value="16"
  :min="12"
  :max="24"
  :step="1"
  aria-describedby="slider-type-labelledby-hint"
  data-slider-valuetext-suffix="픽셀"
  show-value
  />
  <p class="slider_hint" id="slider-type-labelledby-hint">12~24px 사이 글자 크기</p>
  <Slider
  id="slider-type-describedby"
  class="slider_fit"
  label="aria-describedby — 보조 설명"
  :value="70"
  aria-describedby="slider-type-describedby-hint"
  data-slider-suffix="%"
  data-slider-valuetext-suffix="퍼센트"
  show-value
  />
  <p class="slider_hint" id="slider-type-describedby-hint">0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.</p>
  <Slider
  id="slider-type-valuetext"
  class="slider_fit"
  label="aria-valuetext — 읽기 쉬운 값"
  :value="3"
  :min="1"
  :max="5"
  :step="1"
  data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
  show-value
  />
  <p class="slider_hint">숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 <code>aria-hidden="true"</code>로 중복 낭독을 줄일 수 있습니다.</p>
</template>`},basic:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <input type="range" class="slider_input" min="0" max="100" value="30" aria-label="기본 슬라이더">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider class="slider_fit" :value="30" aria-label="기본 슬라이더" />
</template>`},label:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-volume">볼륨</label>
        <output class="slider_value" for="slider-volume">60</output>
      </div>
      <input type="range" class="slider_input" id="slider-volume" min="0" max="100" value="60">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-brightness">밝기</label>
        <output class="slider_value" for="slider-brightness">40%</output>
      </div>
      <input type="range" class="slider_input" id="slider-brightness" min="0" max="100" value="40" data-slider-suffix="%">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function LabelExample() {
  return (
    <>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        value={40}
        data-slider-suffix="%"
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-volume" class="slider_fit" label="볼륨" :value="60" show-value />
  <Slider
  id="slider-brightness"
  class="slider_fit"
  label="밝기"
  :value="40"
  data-slider-suffix="%"
  show-value
  />
</template>`},size:{html:`<div class="slider slider_sm slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-size-sm">Small — slider_sm</label>
        <output class="slider_value" for="slider-size-sm">30</output>
      </div>
      <input type="range" class="slider_input" id="slider-size-sm" min="0" max="100" value="30">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-size-md">Medium — 기본</label>
        <output class="slider_value" for="slider-size-md">50</output>
      </div>
      <input type="range" class="slider_input" id="slider-size-md" min="0" max="100" value="50">
    </div>

    <div class="slider slider_lg slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-size-lg">Large — slider_lg</label>
        <output class="slider_value" for="slider-size-lg">70</output>
      </div>
      <input type="range" class="slider_input" id="slider-size-lg" min="0" max="100" value="70">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function SizeExample() {
  return (
    <>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        value={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        value={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        value={70}
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-size-sm" class="slider_sm slider_fit" label="Small — slider_sm" :value="30" show-value />
  <Slider id="slider-size-md" class="slider_fit" label="Medium — 기본" :value="50" show-value />
  <Slider id="slider-size-lg" class="slider_lg slider_fit" label="Large — slider_lg" :value="70" show-value />
</template>`},width:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-width-fit">slider_fit — 최대 320px</label>
        <output class="slider_value" for="slider-width-fit">45</output>
      </div>
      <input type="range" class="slider_input" id="slider-width-fit" min="0" max="100" value="45">
    </div>

    <div class="slider slider_block" style="max-width: 480px;">
      <div class="slider_header">
        <label class="slider_label" for="slider-width-block">slider_block — 전체 너비</label>
        <output class="slider_value" for="slider-width-block">65</output>
      </div>
      <input type="range" class="slider_input" id="slider-width-block" min="0" max="100" value="65">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function WidthExample() {
  return (
    <>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        value={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        value={65}
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-width-fit" class="slider_fit" label="slider_fit — 최대 320px" :value="45" show-value />
  <Slider
  id="slider-width-block"
  class="slider_block"
  style="max-width: 480px;"
  label="slider_block — 전체 너비"
  :value="65"
  show-value
  />
</template>`},step:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-step-10">step=10</label>
        <output class="slider_value" for="slider-step-10">50</output>
      </div>
      <input type="range" class="slider_input" id="slider-step-10" min="0" max="100" step="10" value="50">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider class="slider_fit" label="step=10" :value="50" :step="10" show-value />
</template>`},stepper:{html:`<div class="slider slider_stepper slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-stepper-volume">볼륨 — slider_stepper</label>
        <output class="slider_value" for="slider-stepper-volume">60</output>
      </div>
      <div class="slider_control">
        <button type="button" class="slider_step slider_step-decrease" data-ripple="true" aria-label="볼륨 줄이기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <input type="range" class="slider_input" id="slider-stepper-volume" min="0" max="100" value="60">
        <button type="button" class="slider_step slider_step-increase" data-ripple="true" aria-label="볼륨 늘리기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
      <p class="slider_hint">모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요.</p>
    </div>

    <div class="slider slider_stepper slider_stepper_always slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-stepper-always">밝기 — slider_stepper_always</label>
        <output class="slider_value" for="slider-stepper-always">40%</output>
      </div>
      <div class="slider_control">
        <button type="button" class="slider_step slider_step-decrease" data-ripple="true" aria-label="밝기 줄이기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <input type="range" class="slider_input" id="slider-stepper-always" min="0" max="100" step="5" value="40" data-slider-suffix="%" data-slider-valuetext-suffix="퍼센트">
        <button type="button" class="slider_step slider_step-increase" data-ripple="true" aria-label="밝기 늘리기">
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
      <p class="slider_hint">모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다.</p>
    </div>

    <div class="slider slider_stepper slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-stepper-disabled">비활성</label>
        <output class="slider_value" for="slider-stepper-disabled">30</output>
      </div>
      <div class="slider_control">
        <button type="button" class="slider_step slider_step-decrease" data-ripple="true" aria-label="값 줄이기" disabled>
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <input type="range" class="slider_input" id="slider-stepper-disabled" min="0" max="100" value="30" disabled>
        <button type="button" class="slider_step slider_step-increase" data-ripple="true" aria-label="값 늘리기" disabled>
          <svg class="slider_step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function StepperExample() {
  return (
    <>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        value={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        value={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        value={30}
        showValue
        disabled
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider
  class="slider_fit"
  stepper
  label="볼륨 — slider_stepper"
  :value="60"
  show-value
  decrease-label="볼륨 줄이기"
  increase-label="볼륨 늘리기"
  hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
  />
  <Slider
  class="slider_fit"
  stepper
  stepper-always
  label="밝기 — slider_stepper_always"
  :value="40"
  :step="5"
  value-suffix="%"
  show-value
  decrease-label="밝기 줄이기"
  increase-label="밝기 늘리기"
  hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
  />
  <Slider
  class="slider_fit"
  stepper
  label="비활성"
  :value="30"
  show-value
  disabled
  />
</template>`},color:{html:`<div class="slider color_primary slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-primary">Primary</label>
        <output class="slider_value" for="slider-color-primary">60</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-primary" min="0" max="100" value="60">
    </div>

    <div class="slider color_success slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-success">Success</label>
        <output class="slider_value" for="slider-color-success">70</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-success" min="0" max="100" value="70">
    </div>

    <div class="slider color_danger slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-danger">Danger</label>
        <output class="slider_value" for="slider-color-danger">40</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-danger" min="0" max="100" value="40">
    </div>

    <div class="slider color_warning slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-color-warning">Warning</label>
        <output class="slider_value" for="slider-color-warning">80</output>
      </div>
      <input type="range" class="slider_input" id="slider-color-warning" min="0" max="100" value="80">
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function ColorExample() {
  return (
    <>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        value={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        value={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        value={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        value={80}
        showValue
      />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider id="slider-color-primary" class="color_primary slider_fit" label="Primary" :value="60" show-value />
  <Slider id="slider-color-success" class="color_success slider_fit" label="Success" :value="70" show-value />
  <Slider id="slider-color-danger" class="color_danger slider_fit" label="Danger" :value="40" show-value />
  <Slider id="slider-color-warning" class="color_warning slider_fit" label="Warning" :value="80" show-value />
</template>`},state:{html:`<div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-state-default">기본</label>
        <output class="slider_value" for="slider-state-default">50</output>
      </div>
      <input type="range" class="slider_input" id="slider-state-default" min="0" max="100" value="50">
    </div>

    <div class="slider slider_fit" data-component="Slider" data-ripple="true">
      <div class="slider_header">
        <label class="slider_label" for="slider-state-disabled">비활성</label>
        <output class="slider_value" for="slider-state-disabled">30</output>
      </div>
      <input type="range" class="slider_input" id="slider-state-disabled" min="0" max="100" value="30" disabled>
    </div>`,react:`import Slider from '@uxkm/react/slider';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>
  );
}`,vue:`<script setup>
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <Slider class="slider_fit" label="기본" :value="50" show-value />
  <Slider class="slider_fit" label="비활성" :value="30" disabled show-value />
</template>`},form:{html:`<form class="form form_vertical form_fit">
      <div class="form_field">
        <label class="form_field-label" for="slider-form-opacity">불투명도</label>
        <div class="slider" data-component="Slider" data-ripple="true">
          <input type="range" class="slider_input" id="slider-form-opacity" min="0" max="100" value="85" data-slider-suffix="%">
        </div>
        <p class="form_field-hint">0~100% 사이 값</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
        <div class="slider" data-component="Slider" data-ripple="true">
          <div class="slider_header">
            <span class="slider_label">현재 값</span>
            <output class="slider_value" for="slider-form-zoom">125%</output>
          </div>
          <input type="range" class="slider_input" id="slider-form-zoom" min="50" max="200" step="25" value="125" data-slider-suffix="%">
        </div>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
        <div class="slider" data-component="Slider" data-ripple="true">
          <input type="range" class="slider_input" id="slider-form-horizontal" min="1" max="10" value="3">
        </div>
        <p class="form_field-hint">1~10px</p>
      </div>
    </form>`,react:`import FormLayout from '@uxkm/react/form-layout';
import Slider from '@uxkm/react/slider';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            value={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>
  );
}`,vue:`<script setup>
import FormLayout from '@uxkm/vue/form-layout';
import Slider from '@uxkm/vue/slider';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-opacity">불투명도</label>
      <Slider id="slider-form-opacity" :value="85" data-slider-suffix="%" />
      <p class="form_field-hint">0~100% 사이 값</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-zoom">확대 비율</label>
      <Slider
      id="slider-form-zoom"
      label="현재 값"
      :value="125"
      :min="50"
      :max="200"
      :step="25"
      data-slider-suffix="%"
      show-value
      />
    </div>
  </FormLayout>
  <FormLayout layout="horizontal" fit>
    <div class="form_field">
      <label class="form_field-label" for="slider-form-horizontal">선 굵기</label>
      <Slider id="slider-form-horizontal" :value="3" :min="1" :max="10" />
      <p class="form_field-hint">1~10px</p>
    </div>
  </FormLayout>
</template>`}},D=Object.fromEntries(Object.entries(E).map(([e,t])=>[e,T(e,t)]))})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...g(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{of:u}),`
`,(0,j.jsx)(t.h1,{id:`slider`,children:`Slider`}),`
`,(0,j.jsxs)(t.p,{children:[`범위 값을 선택하는 Slider 컴포넌트입니다. 네이티브 `,(0,j.jsx)(t.code,{children:`input type="range"`}),`를 기반으로 하며 레이블, 현재 값, 눈금과 증감 버튼을 조합할 수 있습니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,j.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.type}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.basic}),`
`,(0,j.jsx)(t.h2,{id:`레이블--값-표시`,children:`레이블 · 값 표시`}),`
`,(0,j.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.label}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.size}),`
`,(0,j.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,j.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.width}),`
`,(0,j.jsx)(t.h2,{id:`간격--눈금`,children:`간격 · 눈금`}),`
`,(0,j.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.step}),`
`,(0,j.jsx)(t.h2,{id:`스텝-버튼`,children:`스텝 버튼`}),`
`,(0,j.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.stepper}),`
`,(0,j.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,j.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.color}),`
`,(0,j.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,j.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.state}),`
`,(0,j.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,j.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:D.form}),`
`,(0,j.jsx)(w,{sections:c})]})}function A(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),_(),b(),x(),S(),O(),d(),a()})))()}M();export{A as default};