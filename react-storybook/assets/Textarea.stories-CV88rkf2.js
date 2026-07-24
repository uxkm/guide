import{j as e,v as u}from"./iframe-DbjMrqYU.js";import{F as Y}from"./FormLayout-Azd1c7tN.js";import{I as Z}from"./Input-DZQw_Q7P.js";import{T as a}from"./Textarea-B_2KfRat.js";import{w as r}from"./story-renders-CrEYzOkG.js";import"./preload-helper-DUxc-Dqw.js";const $=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ee=[{name:"model-value",type:"string",default:"—",description:"v-model 바인딩 값"},{name:"rows",type:"number | string",default:"3",description:"textarea rows 속성"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"textarea_sm · textarea_lg"},{name:"placeholder",type:"string",default:"—",description:"placeholder 속성"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"error",type:"boolean",default:"false",description:"오류 상태 (is-error)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% (textarea_block)"}],ae=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],re=[{name:"textarea",description:"텍스트영역 루트"},{name:"textarea_sm · textarea_lg · textarea_block",description:"크기·너비"},{name:"is-error · is-disabled",description:"상태"}],te=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],se=[{name:"update:modelValue",description:"입력 값 변경 시 (v-model)"}],le=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ie=[{name:"--textarea-min-height",default:"5rem",description:"최소 높이"},{name:"--textarea-count-inset-x · --textarea-count-inset-y",default:"0.75rem · 0.5rem",description:"글자 수 카운터 위치"}],oe=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 model-value는 value · onChange로 다룹니다.",tables:[{columns:$,rows:ee,codeColumn:"name"}]},{title:"API · Events",description:"Vue update:modelValue는 React onChange(event)에 대응합니다.",tables:[{columns:te,rows:se,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ae,rows:re,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:le,rows:ie,codeColumn:"name"}]}],de={size:"md",disabled:!1,error:!1,placeholder:"입력하세요",block:!1,rows:3,value:""},pe={title:"Components/폼/Textarea",id:"components-textarea",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},rows:{control:"number",type:{name:"number",summary:"number"}},value:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:oe,docs:{description:{component:"다행 텍스트 입력을 위한하는 Textarea 컴포넌트입니다."}}}},t={parameters:{controls:{disable:!1}},args:{...de},render:(Q,{updateArgs:U})=>e.jsx(a,{...Q,onChange:X=>U({value:X.target.value})})},s={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 힌트 텍스트가 포함된 폼 필드입니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-bio">
        자기소개
      </label>
      <Textarea id="textarea-bio" rows={4} placeholder="간단한 자기소개를 입력하세요" />
      <p className="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>
  );
}`,language:"tsx"}}},render:r(e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-bio",children:"자기소개"}),e.jsx(a,{id:"textarea-bio",rows:4,placeholder:"간단한 자기소개를 입력하세요"}),e.jsx("p",{className:"form_field-hint",children:"500자 이내로 작성해 주세요."})]}))},l={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function StandaloneExample() {
  return (
    <>
      <Textarea rows={3} placeholder="플레이스홀더" />
      <Textarea rows={3} value="입력된 내용이 여기에 표시됩니다." />
      <Textarea rows={3} placeholder="비활성" disabled />
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsx(a,{rows:3,placeholder:"플레이스홀더"}),e.jsx(a,{rows:3,value:"입력된 내용이 여기에 표시됩니다."}),e.jsx(a,{rows:3,placeholder:"비활성",disabled:!0})]}))},i={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-sm">
          Small
        </label>
        <Textarea id="textarea-size-sm" size="sm" rows={3} placeholder="textarea_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-md">
          Medium
        </label>
        <Textarea id="textarea-size-md" rows={3} placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-lg">
          Large
        </label>
        <Textarea id="textarea-size-lg" size="lg" rows={3} placeholder="textarea_lg" />
      </div>
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-size-sm",children:"Small"}),e.jsx(a,{id:"textarea-size-sm",size:"sm",rows:3,placeholder:"textarea_sm"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-size-md",children:"Medium"}),e.jsx(a,{id:"textarea-size-md",rows:3,placeholder:"기본 크기"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-size-lg",children:"Large"}),e.jsx(a,{id:"textarea-size-lg",size:"lg",rows:3,placeholder:"textarea_lg"})]})]}))},o={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function WidthExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-width-full">
          전체 너비
        </label>
        <Textarea id="textarea-width-full" rows={3} placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-width-fit">
          제한 너비
        </label>
        <Textarea id="textarea-width-fit" rows={3} placeholder="form_field_fit — 최대 320px" />
      </div>
      <Textarea className="textarea_fit" rows={3} placeholder="textarea_fit 단독 — 최대 320px" />
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-width-full",children:"전체 너비"}),e.jsx(a,{id:"textarea-width-full",rows:3,placeholder:"width: 100%"})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-width-fit",children:"제한 너비"}),e.jsx(a,{id:"textarea-width-fit",rows:3,placeholder:"form_field_fit — 최대 320px"})]}),e.jsx(a,{className:"textarea_fit",rows:3,placeholder:"textarea_fit 단독 — 최대 320px"})]}))},d={name:"행 수",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function RowsExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-2">
          2행
        </label>
        <Textarea id="textarea-rows-2" rows={2} placeholder='rows="2"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-3">
          3행
        </label>
        <Textarea id="textarea-rows-3" rows={3} placeholder='rows="3" — 기본 권장' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-5">
          5행
        </label>
        <Textarea id="textarea-rows-5" rows={5} placeholder='rows="5"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-8">
          8행
        </label>
        <Textarea id="textarea-rows-8" rows={8} placeholder='rows="8" — 긴 본문용' />
      </div>
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-rows-2",children:"2행"}),e.jsx(a,{id:"textarea-rows-2",rows:2,placeholder:'rows="2"'})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-rows-3",children:"3행"}),e.jsx(a,{id:"textarea-rows-3",rows:3,placeholder:'rows="3" — 기본 권장'})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-rows-5",children:"5행"}),e.jsx(a,{id:"textarea-rows-5",rows:5,placeholder:'rows="5"'})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-rows-8",children:"8행"}),e.jsx(a,{id:"textarea-rows-8",rows:8,placeholder:'rows="8" — 긴 본문용'})]})]}))},m={name:"리사이즈",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function ResizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-none">
          기본 (리사이즈 없음)
        </label>
        <Textarea id="textarea-resize-none" rows={3} placeholder="class 없음 — 기본" />
        <p className="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-vertical">
          세로
        </label>
        <Textarea
          id="textarea-resize-vertical"
          className="textarea_resize_vertical"
          rows={3}
          placeholder="textarea_resize_vertical"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-horizontal">
          가로
        </label>
        <Textarea
          id="textarea-resize-horizontal"
          className="textarea_resize_horizontal"
          rows={3}
          placeholder="textarea_resize_horizontal"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-both">
          양방향
        </label>
        <Textarea
          id="textarea-resize-both"
          className="textarea_resize_both"
          rows={3}
          placeholder="textarea_resize_both"
        />
      </div>
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-resize-none",children:"기본 (리사이즈 없음)"}),e.jsx(a,{id:"textarea-resize-none",rows:3,placeholder:"class 없음 — 기본"}),e.jsx("p",{className:"form_field-hint",children:"고정 높이가 필요한 폼에 사용합니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-resize-vertical",children:"세로"}),e.jsx(a,{id:"textarea-resize-vertical",className:"textarea_resize_vertical",rows:3,placeholder:"textarea_resize_vertical"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-resize-horizontal",children:"가로"}),e.jsx(a,{id:"textarea-resize-horizontal",className:"textarea_resize_horizontal",rows:3,placeholder:"textarea_resize_horizontal"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-resize-both",children:"양방향"}),e.jsx(a,{id:"textarea-resize-both",className:"textarea_resize_both",rows:3,placeholder:"textarea_resize_both"})]})]}))},c={name:"필수 필드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"required 속성과 form_field-required로 필수 입력을 표시합니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function RequiredExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-content">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-content"
          rows={4}
          placeholder="문의 내용을 입력해 주세요"
          required
          aria-required="true"
        />
        <p className="form_field-hint">최소 10자 이상 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-memo">
          메모
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-memo"
          size="sm"
          rows={2}
          placeholder="필수 메모"
          required
          aria-required="true"
        />
      </div>
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"textarea-required-content",children:["문의 내용",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(a,{id:"textarea-required-content",rows:4,placeholder:"문의 내용을 입력해 주세요",required:!0,"aria-required":"true"}),e.jsx("p",{className:"form_field-hint",children:"최소 10자 이상 입력해 주세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"textarea-required-memo",children:["메모",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(a,{id:"textarea-required-memo",size:"sm",rows:2,placeholder:"필수 메모",required:!0,"aria-required":"true"})]})]}))},n={name:"글자 수 카운터",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`textarea_wrap textarea_show-count`로 textarea 우측 하단에 현재 글자 수를 표시합니다. `maxLength`와 함께 사용하면 `0/200` 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 `form_field-hint`로 글자 수 안내 문구를 함께 제공합니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function CountExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-count-basic">
        메모
      </label>
      <div className="textarea_wrap textarea_show-count">
        <Textarea
          id="textarea-count-basic"
          rows={4}
          maxLength={200}
          placeholder="내용을 입력하세요"
          aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
        />
        <span
          className="textarea_count"
          id="textarea-count-basic-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="textarea_count_visual" aria-hidden="true">
            0/200
          </span>
          <span className="textarea_count_announcer">0자 입력, 최대 200자</span>
        </span>
      </div>
      <p className="form_field-hint" id="textarea-count-basic-hint">
        200자 이내로 작성해 주세요.
      </p>
    </div>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-count-basic",children:"메모"}),e.jsxs("div",{className:"textarea_wrap textarea_show-count",children:[e.jsx(a,{id:"textarea-count-basic",rows:4,maxLength:200,placeholder:"내용을 입력하세요","aria-describedby":"textarea-count-basic-hint textarea-count-basic-count"}),e.jsxs("span",{className:"textarea_count",id:"textarea-count-basic-count",role:"status","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"textarea_count_visual","aria-hidden":"true",children:"0/200"}),e.jsx("span",{className:"textarea_count_announcer",children:"0자 입력, 최대 200자"})]})]}),e.jsx("p",{className:"form_field-hint",id:"textarea-count-basic-hint",children:"200자 이내로 작성해 주세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-count-sm",children:"Small + 카운터"}),e.jsxs("div",{className:"textarea_wrap textarea_show-count",children:[e.jsx(a,{id:"textarea-count-sm",size:"sm",rows:3,maxLength:100,placeholder:"textarea_sm","aria-describedby":"textarea-count-sm-hint textarea-count-sm-count"}),e.jsxs("span",{className:"textarea_count",id:"textarea-count-sm-count",role:"status","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"textarea_count_visual","aria-hidden":"true",children:"0/100"}),e.jsx("span",{className:"textarea_count_announcer",children:"0자 입력, 최대 100자"})]})]}),e.jsx("p",{className:"form_field-hint",id:"textarea-count-sm-hint",children:"100자 이내로 작성해 주세요."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-count-fit",children:"제한 너비 + 카운터"}),e.jsxs("div",{className:"textarea_wrap textarea_show-count textarea_wrap_fit",children:[e.jsx(a,{id:"textarea-count-fit",rows:3,maxLength:200,placeholder:"textarea_wrap_fit",value:"입력된 내용이 있습니다.","aria-describedby":"textarea-count-fit-hint textarea-count-fit-count"}),e.jsxs("span",{className:"textarea_count",id:"textarea-count-fit-count",role:"status","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"textarea_count_visual","aria-hidden":"true",children:"12/200"}),e.jsx("span",{className:"textarea_count_announcer",children:"12자 입력, 최대 200자"})]})]}),e.jsx("p",{className:"form_field-hint",id:"textarea-count-fit-hint",children:"200자 이내로 작성해 주세요."})]})]}))},x={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다."},source:{code:`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-default">
          기본
        </label>
        <Textarea id="textarea-state-default" rows={3} placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-disabled">
          비활성
        </label>
        <Textarea
          id="textarea-state-disabled"
          rows={3}
          value="수정할 수 없는 내용입니다."
          disabled
        />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-error">
          에러
        </label>
        <Textarea
          id="textarea-state-error"
          rows={3}
          error
          value="짧음"
          aria-describedby="textarea-state-error-msg"
        />
        <p className="form_field-error" id="textarea-state-error-msg" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
    </>
  );
}`,language:"tsx"}}},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-state-default",children:"기본"}),e.jsx(a,{id:"textarea-state-default",rows:3,placeholder:"입력 가능"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-state-disabled",children:"비활성"}),e.jsx(a,{id:"textarea-state-disabled",rows:3,value:"수정할 수 없는 내용입니다.",disabled:!0}),e.jsx("p",{className:"form_field-hint",children:"disabled 속성으로 편집을 막습니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-state-error",children:"에러"}),e.jsx(a,{id:"textarea-state-error",rows:3,error:!0,value:"짧음","aria-describedby":"textarea-state-error-msg"}),e.jsx("p",{className:"form_field-error",id:"textarea-state-error-msg",role:"alert",children:"10자 이상 입력해 주세요."})]})]}))},f={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxLength로 접근성을 보완합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-subject">
          제목
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="textarea-ex-subject"
          size="sm"
          value="서비스 이용 문의"
          required
          aria-required="true"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-body">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-body"
            size="sm"
            rows={5}
            maxLength={500}
            required
            error
            value="너무 짧아요"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
          />
          <span
            className="textarea_count is-limit"
            id="textarea-ex-body-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              6/500
            </span>
            <span className="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-body-limit">
          500자 이내로 작성해 주세요.
        </p>
        <p className="form_field-hint" id="textarea-ex-body-hint">
          구체적인 상황을 알려주시면 빠르게 답변드립니다.
        </p>
        <p className="form_field-error" id="textarea-ex-body-error" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(e.jsxs(Y,{layout:"vertical",compact:!0,noValidate:!0,"aria-labelledby":"example-heading",children:[e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"textarea-ex-subject",children:["제목",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(Z,{id:"textarea-ex-subject",size:"sm",value:"서비스 이용 문의",required:!0,"aria-required":"true"})]}),e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"textarea-ex-body",children:["문의 내용",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsxs("div",{className:"textarea_wrap textarea_show-count",children:[e.jsx(a,{id:"textarea-ex-body",size:"sm",rows:5,maxLength:500,required:!0,error:!0,value:"너무 짧아요","aria-required":"true","aria-invalid":"true","aria-describedby":"textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"}),e.jsxs("span",{className:"textarea_count is-limit",id:"textarea-ex-body-count",role:"status","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"textarea_count_visual","aria-hidden":"true",children:"6/500"}),e.jsx("span",{className:"textarea_count_announcer",children:"6자 입력, 최대 500자"})]})]}),e.jsx("p",{className:"form_field-hint",id:"textarea-ex-body-limit",children:"500자 이내로 작성해 주세요."}),e.jsx("p",{className:"form_field-hint",id:"textarea-ex-body-hint",children:"구체적인 상황을 알려주시면 빠르게 답변드립니다."}),e.jsx("p",{className:"form_field-error",id:"textarea-ex-body-error",role:"alert",children:"10자 이상 입력해 주세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"textarea-ex-memo",children:"추가 메모"}),e.jsxs("div",{className:"textarea_wrap textarea_show-count",children:[e.jsx(a,{id:"textarea-ex-memo",size:"sm",className:"textarea_resize_vertical is-success",rows:3,maxLength:200,value:"참고할 내용이 있습니다.","aria-invalid":"false","aria-describedby":"textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count"}),e.jsxs("span",{className:"textarea_count",id:"textarea-ex-memo-count",role:"status","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"textarea_count_visual","aria-hidden":"true",children:"14/200"}),e.jsx("span",{className:"textarea_count_announcer",children:"14자 입력, 최대 200자"})]})]}),e.jsx("p",{className:"form_field-hint",id:"textarea-ex-memo-hint",children:"200자 이내로 작성해 주세요."}),e.jsx("p",{className:"form_field-success",id:"textarea-ex-memo-success",role:"status",children:"선택 항목이 정상적으로 저장되었습니다."})]}),e.jsxs("div",{className:"form_actions",children:[e.jsx(u,{variant:"filled",color:"primary",size:"sm",type:"submit",label:"문의하기"}),e.jsx(u,{variant:"ghost",size:"sm",type:"button",label:"취소"})]})]}))};var p,b,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: (args, {
    updateArgs
  }) => <Textarea {...args} onChange={event => updateArgs({
    value: event.target.value
  })} />
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var _,v,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '레이블과 힌트 텍스트가 포함된 폼 필드입니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-bio">
        자기소개
      </label>
      <Textarea id="textarea-bio" rows={4} placeholder="간단한 자기소개를 입력하세요" />
      <p className="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <label className="form_field-label" htmlFor="textarea-bio">
        자기소개
      </label>
      <Textarea id="textarea-bio" rows={4} placeholder="간단한 자기소개를 입력하세요" />
      <p className="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>)
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var w,j,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '단독 사용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function StandaloneExample() {
  return (
    <>
      <Textarea rows={3} placeholder="플레이스홀더" />
      <Textarea rows={3} value="입력된 내용이 여기에 표시됩니다." />
      <Textarea rows={3} placeholder="비활성" disabled />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Textarea rows={3} placeholder="플레이스홀더" />
      <Textarea rows={3} value="입력된 내용이 여기에 표시됩니다." />
      <Textarea rows={3} placeholder="비활성" disabled />
    </>)
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var g,z,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-sm">
          Small
        </label>
        <Textarea id="textarea-size-sm" size="sm" rows={3} placeholder="textarea_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-md">
          Medium
        </label>
        <Textarea id="textarea-size-md" rows={3} placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-lg">
          Large
        </label>
        <Textarea id="textarea-size-lg" size="lg" rows={3} placeholder="textarea_lg" />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-sm">
          Small
        </label>
        <Textarea id="textarea-size-sm" size="sm" rows={3} placeholder="textarea_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-md">
          Medium
        </label>
        <Textarea id="textarea-size-md" rows={3} placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-size-lg">
          Large
        </label>
        <Textarea id="textarea-size-lg" size="lg" rows={3} placeholder="textarea_lg" />
      </div>
    </>)
}`,...(T=(z=i.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var F,q,k;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '너비',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function WidthExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-width-full">
          전체 너비
        </label>
        <Textarea id="textarea-width-full" rows={3} placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-width-fit">
          제한 너비
        </label>
        <Textarea id="textarea-width-fit" rows={3} placeholder="form_field_fit — 최대 320px" />
      </div>
      <Textarea className="textarea_fit" rows={3} placeholder="textarea_fit 단독 — 최대 320px" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-width-full">
          전체 너비
        </label>
        <Textarea id="textarea-width-full" rows={3} placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-width-fit">
          제한 너비
        </label>
        <Textarea id="textarea-width-fit" rows={3} placeholder="form_field_fit — 최대 320px" />
      </div>
      <Textarea className="textarea_fit" rows={3} placeholder="textarea_fit 단독 — 최대 320px" />
    </>)
}`,...(k=(q=o.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var L,C,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '행 수',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function RowsExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-2">
          2행
        </label>
        <Textarea id="textarea-rows-2" rows={2} placeholder='rows="2"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-3">
          3행
        </label>
        <Textarea id="textarea-rows-3" rows={3} placeholder='rows="3" — 기본 권장' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-5">
          5행
        </label>
        <Textarea id="textarea-rows-5" rows={5} placeholder='rows="5"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-8">
          8행
        </label>
        <Textarea id="textarea-rows-8" rows={8} placeholder='rows="8" — 긴 본문용' />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-2">
          2행
        </label>
        <Textarea id="textarea-rows-2" rows={2} placeholder='rows="2"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-3">
          3행
        </label>
        <Textarea id="textarea-rows-3" rows={3} placeholder='rows="3" — 기본 권장' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-5">
          5행
        </label>
        <Textarea id="textarea-rows-5" rows={5} placeholder='rows="5"' />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-rows-8">
          8행
        </label>
        <Textarea id="textarea-rows-8" rows={8} placeholder='rows="8" — 긴 본문용' />
      </div>
    </>)
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var P,E,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '리사이즈',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function ResizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-none">
          기본 (리사이즈 없음)
        </label>
        <Textarea id="textarea-resize-none" rows={3} placeholder="class 없음 — 기본" />
        <p className="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-vertical">
          세로
        </label>
        <Textarea
          id="textarea-resize-vertical"
          className="textarea_resize_vertical"
          rows={3}
          placeholder="textarea_resize_vertical"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-horizontal">
          가로
        </label>
        <Textarea
          id="textarea-resize-horizontal"
          className="textarea_resize_horizontal"
          rows={3}
          placeholder="textarea_resize_horizontal"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-both">
          양방향
        </label>
        <Textarea
          id="textarea-resize-both"
          className="textarea_resize_both"
          rows={3}
          placeholder="textarea_resize_both"
        />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-none">
          기본 (리사이즈 없음)
        </label>
        <Textarea id="textarea-resize-none" rows={3} placeholder="class 없음 — 기본" />
        <p className="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-vertical">
          세로
        </label>
        <Textarea id="textarea-resize-vertical" className="textarea_resize_vertical" rows={3} placeholder="textarea_resize_vertical" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-horizontal">
          가로
        </label>
        <Textarea id="textarea-resize-horizontal" className="textarea_resize_horizontal" rows={3} placeholder="textarea_resize_horizontal" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-resize-both">
          양방향
        </label>
        <Textarea id="textarea-resize-both" className="textarea_resize_both" rows={3} placeholder="textarea_resize_both" />
      </div>
    </>)
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,D,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '필수 필드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'required 속성과 form_field-required로 필수 입력을 표시합니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function RequiredExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-content">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-content"
          rows={4}
          placeholder="문의 내용을 입력해 주세요"
          required
          aria-required="true"
        />
        <p className="form_field-hint">최소 10자 이상 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-memo">
          메모
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="textarea-required-memo"
          size="sm"
          rows={2}
          placeholder="필수 메모"
          required
          aria-required="true"
        />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-content">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea id="textarea-required-content" rows={4} placeholder="문의 내용을 입력해 주세요" required aria-required="true" />
        <p className="form_field-hint">최소 10자 이상 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-required-memo">
          메모
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea id="textarea-required-memo" size="sm" rows={2} placeholder="필수 메모" required aria-required="true" />
      </div>
    </>)
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,M,A;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '글자 수 카운터',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`textarea_wrap textarea_show-count\`로 textarea 우측 하단에 현재 글자 수를 표시합니다. \`maxLength\`와 함께 사용하면 \`0/200\` 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 \`form_field-hint\`로 글자 수 안내 문구를 함께 제공합니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function CountExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="textarea-count-basic">
        메모
      </label>
      <div className="textarea_wrap textarea_show-count">
        <Textarea
          id="textarea-count-basic"
          rows={4}
          maxLength={200}
          placeholder="내용을 입력하세요"
          aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
        />
        <span
          className="textarea_count"
          id="textarea-count-basic-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="textarea_count_visual" aria-hidden="true">
            0/200
          </span>
          <span className="textarea_count_announcer">0자 입력, 최대 200자</span>
        </span>
      </div>
      <p className="form_field-hint" id="textarea-count-basic-hint">
        200자 이내로 작성해 주세요.
      </p>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-count-basic">
          메모
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea id="textarea-count-basic" rows={4} maxLength={200} placeholder="내용을 입력하세요" aria-describedby="textarea-count-basic-hint textarea-count-basic-count" />
          <span className="textarea_count" id="textarea-count-basic-count" role="status" aria-live="polite" aria-atomic="true">
            <span className="textarea_count_visual" aria-hidden="true">
              0/200
            </span>
            <span className="textarea_count_announcer">0자 입력, 최대 200자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-count-basic-hint">
          200자 이내로 작성해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-count-sm">
          Small + 카운터
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea id="textarea-count-sm" size="sm" rows={3} maxLength={100} placeholder="textarea_sm" aria-describedby="textarea-count-sm-hint textarea-count-sm-count" />
          <span className="textarea_count" id="textarea-count-sm-count" role="status" aria-live="polite" aria-atomic="true">
            <span className="textarea_count_visual" aria-hidden="true">
              0/100
            </span>
            <span className="textarea_count_announcer">0자 입력, 최대 100자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-count-sm-hint">
          100자 이내로 작성해 주세요.
        </p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="textarea-count-fit">
          제한 너비 + 카운터
        </label>
        <div className="textarea_wrap textarea_show-count textarea_wrap_fit">
          <Textarea id="textarea-count-fit" rows={3} maxLength={200} placeholder="textarea_wrap_fit" value="입력된 내용이 있습니다." aria-describedby="textarea-count-fit-hint textarea-count-fit-count" />
          <span className="textarea_count" id="textarea-count-fit-count" role="status" aria-live="polite" aria-atomic="true">
            <span className="textarea_count_visual" aria-hidden="true">
              12/200
            </span>
            <span className="textarea_count_announcer">12자 입력, 최대 200자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-count-fit-hint">
          200자 이내로 작성해 주세요.
        </p>
      </div>
    </>)
}`,...(A=(M=n.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var W,H,O;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.'
      },
      source: {
        code: \`import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-default">
          기본
        </label>
        <Textarea id="textarea-state-default" rows={3} placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-disabled">
          비활성
        </label>
        <Textarea
          id="textarea-state-disabled"
          rows={3}
          value="수정할 수 없는 내용입니다."
          disabled
        />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-error">
          에러
        </label>
        <Textarea
          id="textarea-state-error"
          rows={3}
          error
          value="짧음"
          aria-describedby="textarea-state-error-msg"
        />
        <p className="form_field-error" id="textarea-state-error-msg" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-default">
          기본
        </label>
        <Textarea id="textarea-state-default" rows={3} placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-disabled">
          비활성
        </label>
        <Textarea id="textarea-state-disabled" rows={3} value="수정할 수 없는 내용입니다." disabled />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-state-error">
          에러
        </label>
        <Textarea id="textarea-state-error" rows={3} error value="짧음" aria-describedby="textarea-state-error-msg" />
        <p className="form_field-error" id="textarea-state-error-msg" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
    </>)
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '조합 예시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxLength로 접근성을 보완합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-subject">
          제목
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="textarea-ex-subject"
          size="sm"
          value="서비스 이용 문의"
          required
          aria-required="true"
        />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-body">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea
            id="textarea-ex-body"
            size="sm"
            rows={5}
            maxLength={500}
            required
            error
            value="너무 짧아요"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
          />
          <span
            className="textarea_count is-limit"
            id="textarea-ex-body-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="textarea_count_visual" aria-hidden="true">
              6/500
            </span>
            <span className="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-body-limit">
          500자 이내로 작성해 주세요.
        </p>
        <p className="form_field-hint" id="textarea-ex-body-hint">
          구체적인 상황을 알려주시면 빠르게 답변드립니다.
        </p>
        <p className="form_field-error" id="textarea-ex-body-error" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-subject">
          제목
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input id="textarea-ex-subject" size="sm" value="서비스 이용 문의" required aria-required="true" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-body">
          문의 내용
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea id="textarea-ex-body" size="sm" rows={5} maxLength={500} required error value="너무 짧아요" aria-required="true" aria-invalid="true" aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count" />
          <span className="textarea_count is-limit" id="textarea-ex-body-count" role="status" aria-live="polite" aria-atomic="true">
            <span className="textarea_count_visual" aria-hidden="true">
              6/500
            </span>
            <span className="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-body-limit">
          500자 이내로 작성해 주세요.
        </p>
        <p className="form_field-hint" id="textarea-ex-body-hint">
          구체적인 상황을 알려주시면 빠르게 답변드립니다.
        </p>
        <p className="form_field-error" id="textarea-ex-body-error" role="alert">
          10자 이상 입력해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="textarea-ex-memo">
          추가 메모
        </label>
        <div className="textarea_wrap textarea_show-count">
          <Textarea id="textarea-ex-memo" size="sm" className="textarea_resize_vertical is-success" rows={3} maxLength={200} value="참고할 내용이 있습니다." aria-invalid="false" aria-describedby="textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count" />
          <span className="textarea_count" id="textarea-ex-memo-count" role="status" aria-live="polite" aria-atomic="true">
            <span className="textarea_count_visual" aria-hidden="true">
              14/200
            </span>
            <span className="textarea_count_announcer">14자 입력, 최대 200자</span>
          </span>
        </div>
        <p className="form_field-hint" id="textarea-ex-memo-hint">
          200자 이내로 작성해 주세요.
        </p>
        <p className="form_field-success" id="textarea-ex-memo-success" role="status">
          선택 항목이 정상적으로 저장되었습니다.
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="문의하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>)
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const be=["Playground","Basic","Standalone","Size","Width","Rows","Resize","Required","Count","State","Example"];export{s as Basic,n as Count,f as Example,t as Playground,c as Required,m as Resize,d as Rows,i as Size,l as Standalone,x as State,o as Width,be as __namedExportsOrder,pe as default};
