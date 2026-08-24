import{G as e,L as t,U as n,W as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,p as d,st as f,u as p,wt as m,xt as h,y as g,z as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{n as S,t as C}from"./D01l-9yr.js";import{t as w}from"./DD3RWXAt.js";import{r as T,t as E}from"./D6IbhUhQ.js";import{t as D}from"./Cuo-DXMr2.js";var ee=[`aria-label`],te={class:`rate_stars`},ne={class:`rate_star-graphic`,"aria-hidden":`true`},re={key:0,class:`rate_star-icon-half`},O={key:0,class:`rate_value`},k=[`disabled`],A={key:0,class:`rate_legend`},j={class:`rate_control`},M={class:`rate_stars`},N=[`name`,`value`,`checked`,`disabled`,`onChange`],P=[`name`,`value`,`checked`,`disabled`,`onChange`],F={class:`rate_star-graphic`,"aria-hidden":`true`},I={key:0,class:`rate_star-icon-half`},L={class:`rate_star-label`},R={key:1,class:`rate_value`},z=`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`,B=Object.assign({inheritAttrs:!1},{__name:`Rate`,props:{ripple:C,defaultValue:Number,count:{type:Number,default:5},allowHalf:Boolean,clearable:Boolean,readonly:Boolean,disabled:Boolean,size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},legend:String,name:String,modelValue:{type:Number,default:void 0}},emits:[`update:modelValue`],setup(i,{emit:a}){let g=new Set([`sm`,`md`,`lg`]),y=i,{rippleAttrs:b,childRippleAttrs:C}=S(y,{mode:`container`}),w=a,T=e(),E=n(),D=u(null),B=r(),V=p(()=>y.name||B),H=p(()=>g.has(y.size)?y.size:`md`),U=p(()=>Number(y.count)>0?Number(y.count):5),W=u(y.defaultValue),G=v(`Rate`,{defaults:{count:5,size:`md`},booleanProps:new Set([`allowHalf`,`clearable`,`readonly`,`disabled`]),skipProps:[`modelValue`,`name`],selfClosing:!0});x(G,()=>({...y,count:U.value,size:H.value}),T,D,E);let K=p(()=>y.modelValue!==void 0),q=p(()=>K.value?y.modelValue:W.value),J=p(()=>{let e=[`rate`];return H.value===`sm`&&e.push(`rate_sm`),H.value===`lg`&&e.push(`rate_lg`),y.allowHalf&&e.push(`rate_allow-half`),y.clearable&&e.push(`rate_clearable`),y.readonly&&e.push(`is-readonly`),E.class&&e.push(E.class),e}),Y=p(()=>Array.from({length:U.value},(e,t)=>t+1)),X=p(()=>{let{class:e,...t}=E;return t}),Z=p(()=>({...b.value,...X.value}));function Q(e){K.value||(W.value=e),w(`update:modelValue`,e)}function ie(){K.value||(W.value=void 0),w(`update:modelValue`,void 0)}let ae=p(()=>{let e=q.value??0;return`${U.value}점 만점 중 ${e}점`});function $(e){let t=q.value??0;return t>=e?`is-filled`:y.allowHalf&&t>=e-.5?`is-half`:``}return(e,n)=>i.readonly?(t(),l(`div`,c({key:0,ref_key:`rootRef`,ref:D,class:J.value,role:`img`,"aria-label":ae.value},X.value),[o(`div`,te,[(t(!0),l(s,null,_(Y.value,e=>(t(),l(`span`,{key:e,class:h([`rate_star-readonly`,$(e)])},[o(`span`,ne,[o(`svg`,{class:`rate_star-icon`,viewBox:`0 0 24 24`,fill:`currentColor`},[o(`path`,{d:z})]),o(`svg`,{class:`rate_star-icon rate_star-icon-filled`,viewBox:`0 0 24 24`,fill:`currentColor`},[o(`path`,{d:z})]),$(e)===`is-half`?(t(),l(`span`,re,[o(`svg`,{class:`rate_star-icon`,viewBox:`0 0 24 24`,fill:`currentColor`},[o(`path`,{d:z})])])):d(``,!0)])],2))),128))]),q.value?(t(),l(`span`,O,m(q.value),1)):d(``,!0)],16,ee)):(t(),l(`fieldset`,c({key:1,ref_key:`rootRef`,ref:D},Z.value,{class:J.value,disabled:i.disabled}),[i.legend?(t(),l(`legend`,A,m(i.legend),1)):d(``,!0),o(`div`,j,[o(`div`,M,[(t(!0),l(s,null,_(Y.value,e=>(t(),l(`label`,c({key:e},{ref_for:!0},f(C),{class:`rate_star`}),[i.allowHalf?(t(),l(`input`,{key:0,type:`radio`,class:`rate_input rate_input-half`,name:V.value,value:e-.5,checked:q.value===e-.5,disabled:i.disabled,onChange:t=>Q(e-.5)},null,40,N)):d(``,!0),o(`input`,{type:`radio`,class:`rate_input`,name:V.value,value:e,checked:q.value===e,disabled:i.disabled,onChange:t=>Q(e)},null,40,P),o(`span`,F,[o(`svg`,{class:`rate_star-icon`,viewBox:`0 0 24 24`,fill:`currentColor`},[o(`path`,{d:z})]),o(`svg`,{class:`rate_star-icon rate_star-icon-filled`,viewBox:`0 0 24 24`,fill:`currentColor`},[o(`path`,{d:z})]),i.allowHalf?(t(),l(`span`,I,[o(`svg`,{class:`rate_star-icon`,viewBox:`0 0 24 24`,fill:`currentColor`},[o(`path`,{d:z})])])):d(``,!0)]),o(`span`,L,m(e)+`점`,1)],16))),128))]),i.clearable?(t(),l(`button`,c({key:0},f(C),{type:`button`,class:`rate_clear`,"aria-label":`별점 초기화`,title:`초기화`,onClick:ie}),[...n[0]||=[o(`svg`,{class:`rate_clear-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M18 6L6 18M6 6l12 12`})],-1)]],16)):d(``,!0),q.value?(t(),l(`output`,R,m(q.value)+`점`,1)):d(``,!0)])],16,k))}}),V=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],H=[{name:`model-value`,type:`number`,default:`—`,description:`v-model 별점 값`},{name:`default-value`,type:`number`,default:`—`,description:`비제어 초기 별점 값`},{name:`count`,type:`number`,default:`5`,description:`별 개수`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`rate_sm · rate_lg`},{name:`allow-half`,type:`boolean`,default:`false`,description:`0.5점 단위 (rate_allow-half)`},{name:`clearable`,type:`boolean`,default:`false`,description:`초기화 버튼 (rate_clearable)`},{name:`readonly`,type:`boolean`,default:`false`,description:`읽기 전용 표시 (is-readonly)`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성`},{name:`legend`,type:`string`,default:`—`,description:`fieldset legend`},{name:`name`,type:`string`,default:`—`,description:`radio name (그룹)`},T],U=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],W=[{name:`rate`,description:`별점 루트`},{name:`rate_sm · rate_lg · rate_allow-half · rate_clearable`,description:`크기·기능`},{name:`rate_stars · rate_star · rate_star-graphic`,description:`별 아이콘`},{name:`rate_input · rate_star-label · rate_value · rate_clear`,description:`입력·값·초기화`},{name:`rate_legend · rate_control`,description:`fieldset 구조`},{name:`is-readonly · is-filled · is-half`,description:`상태`},...E],G=[{key:`name`,label:`이벤트`},{key:`description`,label:`설명`}],K=[{name:`update:modelValue`,description:`별점 변경·초기화 시 (v-model)`}],q=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],J=[{name:`--rate-star-size · --rate-star-size-sm · --rate-star-size-lg`,default:`1.25rem · 1rem · 1.5rem`,description:`별 크기`},{name:`--rate-star-gap · --rate-clear-size`,default:`0.125rem · 1.5rem`,description:`별 간격·초기화 버튼`}],Y={class:`form_field`},X={title:`Rate | HTML Components`,activeNav:`rate`,pageTitle:`Rate`},Z={__name:`rate`,setup(e){return(e,n)=>(t(),l(s,null,[n[4]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Rate`),o(`p`,{class:`lead`},[g(`별점·만족도를 선택하는 Rate 컴포넌트입니다. `),o(`code`,null,`fieldset`),g(`과 `),o(`code`,null,`input type="radio"`),g(`로 폼 값을 전달하며, `),o(`strong`,null,`rate_allow-half`),g(`로 반별, `),o(`strong`,null,`rate_clearable`),g(`로 선택 해제를 지원합니다.`)])],-1),a(w,{"heading-id":`type-heading`,title:`유형`,description:`접근 가능한 이름 지정 방식별 예시입니다. <code>legend</code> · <code>aria-labelledby</code> · <code>aria-label</code>을 상황에 맞게 사용합니다.`,stack:``,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate legend="legend — 상품 만족도" :default-value="3" name="rate-type-legend" />
  <Rate :default-value="4" name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
  <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
</template>`},{default:i(()=>[a(B,{legend:`legend — 상품 만족도`,"default-value":3,name:`rate-type-legend`}),a(B,{"default-value":4,name:`rate-type-labelledby`,legend:`aria-labelledby — 서비스 평가`}),a(B,{legend:`aria-label — 단독`,name:`rate-type-aria`,"aria-label":`별점 5점 만점`})]),_:1}),a(w,{"heading-id":`basic-heading`,title:`기본`,description:`rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.`,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate legend="배송 속도" :default-value="3" name="rate-basic" />
</template>`},{default:i(()=>[a(B,{legend:`배송 속도`,"default-value":3,name:`rate-basic`})]),_:1}),a(w,{"heading-id":`size-heading`,title:`크기`,description:`rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.`,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate size="sm" legend="Small — rate_sm" :default-value="3" name="rate-size-sm" />
  <Rate legend="Medium — 기본" :default-value="3" name="rate-size-md" />
  <Rate size="lg" legend="Large — rate_lg" :default-value="3" name="rate-size-lg" />
</template>`},{default:i(()=>[a(B,{size:`sm`,legend:`Small — rate_sm`,"default-value":3,name:`rate-size-sm`}),a(B,{legend:`Medium — 기본`,"default-value":3,name:`rate-size-md`}),a(B,{size:`lg`,legend:`Large — rate_lg`,"default-value":3,name:`rate-size-lg`})]),_:1}),a(w,{"heading-id":`color-heading`,title:`색상`,description:`기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.`,stack:``,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate class="color_primary" legend="Primary" :default-value="4" name="rate-color-primary" />
  <Rate class="color_success" legend="Success" :default-value="5" name="rate-color-success" />
  <Rate class="color_danger" legend="Danger" :default-value="2" name="rate-color-danger" />
</template>`},{default:i(()=>[a(B,{class:`color_primary`,legend:`Primary`,"default-value":4,name:`rate-color-primary`}),a(B,{class:`color_success`,legend:`Success`,"default-value":5,name:`rate-color-success`}),a(B,{class:`color_danger`,legend:`Danger`,"default-value":2,name:`rate-color-danger`})]),_:1}),a(w,{"heading-id":`half-heading`,title:`반별`,description:`<code>rate_allow-half</code>를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 <code>rate_input-half</code>를 배치합니다.`,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate allow-half legend="정밀 평가 — rate_allow-half" :default-value="3.5" name="rate-half" />
  <p class="rate_hint">별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.</p>
</template>`},{default:i(()=>[a(B,{"allow-half":``,legend:`정밀 평가 — rate_allow-half`,"default-value":3.5,name:`rate-half`}),n[0]||=o(`p`,{class:`rate_hint`},`별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.`,-1)]),_:1}),a(w,{"heading-id":`clear-heading`,title:`선택 해제`,description:`<code>rate_clearable</code>을 추가하면 초기화 버튼으로 값을 지울 수 있습니다.`,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate clearable legend="만족도 — rate_clearable" :default-value="4" name="rate-clear" />
</template>`},{default:i(()=>[a(B,{clearable:``,legend:`만족도 — rate_clearable`,"default-value":4,name:`rate-clear`})]),_:1}),a(w,{"heading-id":`readonly-heading`,title:`읽기 전용`,description:`<code>is-readonly</code>로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다.`,stack:``,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate readonly allow-half :model-value="4.5" />
  <Rate readonly size="sm" :model-value="2" />
</template>`},{default:i(()=>[a(B,{readonly:``,"allow-half":``,"model-value":4.5}),a(B,{readonly:``,size:`sm`,"model-value":2})]),_:1}),a(w,{"heading-id":`state-heading`,title:`상태`,description:`비활성·오류(is-error) 상태를 지원합니다.`,stack:``,code:`<script setup>
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <Rate disabled legend="비활성" :default-value="3" name="rate-state-disabled" />
  <Rate class="is-error" legend="오류 — is-error" name="rate-state-error" />
  <p class="form_field-error">별점을 선택해 주세요.</p>
</template>`},{default:i(()=>[a(B,{disabled:``,legend:`비활성`,"default-value":3,name:`rate-state-disabled`}),a(B,{class:`is-error`,legend:`오류 — is-error`,name:`rate-state-error`}),n[1]||=o(`p`,{class:`form_field-error`},`별점을 선택해 주세요.`,-1)]),_:1}),a(w,{"heading-id":`form-heading`,title:`폼 레이아웃`,description:`form_field · form_vertical과 함께 사용합니다.`,stack:``,code:`<script setup>
import FormLayout from '@/components/FormLayout.vue';
import Rate from '@/components/Rate.vue';
<\/script>

<template>
  <FormLayout layout="vertical" fit>
    <div class="form_field">
      <span class="form_field-label" id="rate-form-label">상품 만족도</span>
      <Rate name="rate-form" aria-labelledby="rate-form-label" />
      <p class="form_field-hint">1~5점 사이로 평가해 주세요.</p>
    </div>
  </FormLayout>
</template>`},{default:i(()=>[a(D,{layout:`vertical`,fit:``},{default:i(()=>[o(`div`,Y,[n[2]||=o(`span`,{class:`form_field-label`,id:`rate-form-label`},`상품 만족도`,-1),a(B,{name:`rate-form`,"aria-labelledby":`rate-form-label`}),n[3]||=o(`p`,{class:`form_field-hint`},`1~5점 사이로 평가해 주세요.`,-1)])]),_:1})]),_:1}),a(y,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(b,{columns:f(V),rows:f(H),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-events-heading`,title:`API · Events`},{default:i(()=>[a(b,{columns:f(G),rows:f(K),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(b,{columns:f(U),rows:f(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(b,{columns:f(q),rows:f(J),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Z as default,X as docMeta};