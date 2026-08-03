import{j as e,I as _,B as i}from"./iframe-Ec8Bs185.js";import{I as l}from"./Input-CqcMTsf6.js";import{w as a}from"./story-renders-Bo_F9MSp.js";import{a as ie}from"./ripple-api-CjGOCEZT.js";import"./preload-helper-DUxc-Dqw.js";const te=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],re=[{name:"value",type:"string",default:"—",description:"제어 컴포넌트 값 (Vue model-value 대응)"},{name:"defaultValue",type:"string",default:"''",description:"비제어 초기 값"},{name:"type",type:"string",default:"text",description:"input type 속성"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"input_sm · input_lg"},{name:"placeholder",type:"string",default:"—",description:"placeholder 속성"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"error",type:"boolean",default:"false",description:"오류 상태 (is-error, aria-invalid)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% (input_block)"},{name:"className",type:"string",default:"—",description:"input 또는 input_group 루트에 추가 클래스"},{name:"onChange",type:"(event) => void",default:"—",description:"값 변경 콜백 (Vue update:modelValue 대응)"}],se=[{key:"name",label:"Children"},{key:"description",label:"설명"}],ne=[{name:"prefix",description:"앞쪽 애드온 (Vue #prefix → input_group-addon)"},{name:"suffix",description:"뒤쪽 애드온 (Vue #suffix → input_group-addon)"}],de=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],oe=[{name:"input",description:"텍스트 입력 루트"},{name:"input_sm · input_lg · input_block",description:"크기·너비"},{name:"input_masked",description:'마스킹 입력값 표시 시 자동 적용 (type="password" + 값 있음)'},{name:"input_group · input_group-addon",description:"애드온 묶음"},{name:"input_clearable · input_clear",description:'지우기 버튼 — input_clear에 data-ripple="surface"'},{name:"is-error · is-disabled",description:"상태"},...ie],pe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],me=[{name:"--input-max-width",default:"320px",description:"데모·폼 최대 너비"},{name:"--input-clear-size · --input-clear-offset",default:"—",description:"클리어 버튼"},{name:"--input-font-masked · --input-masked-letter-spacing",default:"—",description:"마스킹 입력"}],ue=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],ce=[{name:"onChange",description:"입력 값 변경 시 (Vue update:modelValue 대응). React change 이벤트를 전달합니다."}],fe=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 model-value는 value · defaultValue · onChange로 다룹니다.",tables:[{columns:te,rows:re,codeColumn:"name"}]},{title:"API · Children",description:"Vue 슬롯(prefix · suffix)에 대응하는 React prop입니다.",tables:[{columns:se,rows:ne,codeColumn:"name"}]},{title:"API · Events",description:"Vue update:modelValue는 React onChange에 대응합니다.",tables:[{columns:ue,rows:ce,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:de,rows:oe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:pe,rows:me,codeColumn:"name"}]}],be={size:"md",disabled:!1,error:!1,placeholder:"입력하세요",type:"text",block:!1,value:""};function t({hidden:x=!0}){return e.jsx(i,{className:"input_clear",variant:"text",color:"muted",ripple:!1,ariaLabel:"입력 지우기",iconOnly:!0,hidden:x,iconBefore:e.jsx(_,{name:"close"})})}const ge={title:"Components/폼/Input",id:"components-input",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},type:{control:"select",options:["text","email","password","number","tel","url","search"],type:{name:"enum",summary:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},value:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:fe,docs:{description:{component:"텍스트·숫자·검색 등 한 줄 입력을 위한 필드 컴포넌트입니다."}}}},r={parameters:{controls:{disable:!1}},args:{...be},render:(x,{updateArgs:le})=>e.jsx(l,{...x,onChange:ae=>le({value:ae.target.value})})},s={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블과 힌트 텍스트가 포함된 폼 필드입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
          <label className="form_field-label" htmlFor="input-name">
            이름
          </label>
          <div className="input_clearable">
            <Input id="input-name" placeholder="이름을 입력하세요" />
            <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
          </div>
          <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
        </div>,
  );
}`,language:"tsx"}}},render:a(e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-name",children:"이름"}),e.jsxs("div",{className:"input_clearable",children:[e.jsx(l,{id:"input-name",placeholder:"이름을 입력하세요"}),e.jsx(t,{})]}),e.jsx("p",{className:"form_field-hint",children:"2~20자 이내로 입력해 주세요."})]}))},n={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field 래퍼 없이 `input_field`로 레이블과 input을 묶을 수 있습니다. 접근 가능한 이름은 반드시 지정합니다. 보이는 레이블이 있으면 `label.form_field-label` + `htmlFor`를, 아이콘만 있는 검색창·툴바 등에는 `label.input_group`으로 input을 감싸고 `input_group-label_hidden`으로 이름을 제공합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function StandaloneExample() {
  return (
    <>
          <div className="input_field">
            <label className="form_field-label" htmlFor="input-standalone-placeholder">
              검색어
            </label>
            <div className="input_clearable">
              <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
          <div className="input_field">
            <label className="form_field-label" htmlFor="input-standalone-value">
              닉네임
            </label>
            <div className="input_clearable">
              <Input id="input-standalone-value" defaultValue="입력된 값" />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
          <div className="input_field">
            <label className="form_field-label" htmlFor="input-standalone-disabled">
              코드
            </label>
            <Input id="input-standalone-disabled" placeholder="비활성" disabled />
          </div>
          <Input
            type="search"
            placeholder="검색어를 입력하세요"
            aria-label="검색"
            prefix={<Icon name="search" size="sm" />}
          />
          <p className="form_field-hint">
            아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에
            보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.
          </p>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"input_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-standalone-placeholder",children:"검색어"}),e.jsxs("div",{className:"input_clearable",children:[e.jsx(l,{id:"input-standalone-placeholder",placeholder:"플레이스홀더"}),e.jsx(t,{})]})]}),e.jsxs("div",{className:"input_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-standalone-value",children:"닉네임"}),e.jsxs("div",{className:"input_clearable",children:[e.jsx(l,{id:"input-standalone-value",defaultValue:"입력된 값"}),e.jsx(t,{hidden:!1})]})]}),e.jsxs("div",{className:"input_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-standalone-disabled",children:"코드"}),e.jsx(l,{id:"input-standalone-disabled",placeholder:"비활성",disabled:!0})]}),e.jsx(l,{type:"search",placeholder:"검색어를 입력하세요","aria-label":"검색",prefix:e.jsx(_,{name:"search",size:"sm"})}),e.jsxs("p",{className:"form_field-hint",children:["아이콘만 있는 툴바 검색은 ",e.jsx("code",{children:"label.input_group"}),"으로 input을 감싸고, 화면에 보이지 않는 ",e.jsx("code",{children:"input_group-label_hidden"}),"으로 접근 가능한 이름을 지정합니다."]})]}))},d={name:"입력 타입",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class="input"은 모든 타입에 공통으로 사용합니다.'},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';

export function TypeExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-text">
              텍스트
            </label>
            <Input id="input-type-text" placeholder="일반 텍스트" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-password">
              비밀번호
            </label>
            <Input
              id="input-type-password"
              type="password"
              placeholder="8자 이상"
              autoComplete="new-password"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-email">
              이메일
            </label>
            <Input
              id="input-type-email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-tel">
              전화번호
            </label>
            <Input
              id="input-type-tel"
              type="tel"
              placeholder="010-0000-0000"
              autoComplete="tel"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-url">
              URL
            </label>
            <Input id="input-type-url" type="url" placeholder="https://example.com" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-search">
              검색
            </label>
            <Input id="input-type-search" type="search" placeholder="키워드 검색" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-number">
              숫자
            </label>
            <Input id="input-type-number" type="number" placeholder="0" min={0} max={100} step={1} />
            <p className="form_field-hint">0~100 사이 정수</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-date">
              날짜
            </label>
            <Input id="input-type-date" type="date" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-time">
              시간
            </label>
            <Input id="input-type-time" type="time" />
          </div>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-text",children:"텍스트"}),e.jsx(l,{id:"input-type-text",placeholder:"일반 텍스트"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-password",children:"비밀번호"}),e.jsx(l,{id:"input-type-password",type:"password",placeholder:"8자 이상",autoComplete:"new-password"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-email",children:"이메일"}),e.jsx(l,{id:"input-type-email",type:"email",placeholder:"name@example.com",autoComplete:"email"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-tel",children:"전화번호"}),e.jsx(l,{id:"input-type-tel",type:"tel",placeholder:"010-0000-0000",autoComplete:"tel"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-url",children:"URL"}),e.jsx(l,{id:"input-type-url",type:"url",placeholder:"https://example.com"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-search",children:"검색"}),e.jsx(l,{id:"input-type-search",type:"search",placeholder:"키워드 검색"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-number",children:"숫자"}),e.jsx(l,{id:"input-type-number",type:"number",placeholder:"0",min:0,max:100,step:1}),e.jsx("p",{className:"form_field-hint",children:"0~100 사이 정수"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-date",children:"날짜"}),e.jsx(l,{id:"input-type-date",type:"date"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-type-time",children:"시간"}),e.jsx(l,{id:"input-type-time",type:"time"})]})]}))},o={name:"입력 종류",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function KindExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-card-1">
              카드번호
            </label>
            <div
              className="input_split"
              role="group"
              aria-labelledby="input-kind-card-1"
              data-input-split=""
              data-input-numeric=""
            >
              <Input
                id="input-kind-card-1"
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 1~4자리"
                placeholder="0000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 5~8자리"
                placeholder="0000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                type="password"
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 9~12자리"
                placeholder="0000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                type="password"
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 13~16자리"
                placeholder="0000"
              />
            </div>
            <p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
          </div>
          <div className="input_row">
            <div className="form_field">
              <label className="form_field-label" htmlFor="input-kind-exp-mm">
                유효기간
              </label>
              <div
                className="input_split"
                role="group"
                aria-label="카드 유효기간"
                data-input-split=""
                data-input-numeric=""
              >
                <Input
                  id="input-kind-exp-mm"
                  inputMode="numeric"
                  maxLength={2}
                  autoComplete="cc-exp-month"
                  aria-label="월(MM)"
                  placeholder="MM"
                />
                <span className="input_split_sep" aria-hidden="true">
                  /
                </span>
                <Input
                  inputMode="numeric"
                  maxLength={2}
                  autoComplete="cc-exp-year"
                  aria-label="년(YY)"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="form_field">
              <label className="form_field-label" htmlFor="input-kind-cvc">
                CVC
              </label>
              <Input
                id="input-kind-cvc"
                type="password"
                inputMode="numeric"
                maxLength={3}
                autoComplete="cc-csc"
                placeholder="000"
                aria-describedby="input-kind-cvc-hint"
              />
              <p className="form_field-hint" id="input-kind-cvc-hint">
                카드 뒷면 3자리
              </p>
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" id="input-kind-otp-label">
              인증번호 (OTP)
            </label>
            <div
              className="input_otp"
              role="group"
              aria-labelledby="input-kind-otp-label"
              data-input-otp=""
            >
              <Input inputMode="numeric" maxLength={1} autoComplete="one-time-code" aria-label="인증번호 1자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 2자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 3자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 4자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 5자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 6자리" />
            </div>
            <p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-phone">
              휴대폰 번호
            </label>
            <div className="input_group">
              <span className="input_group-addon">+82</span>
              <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autoComplete="tel" />
              <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-sms-code">
              휴대폰 인증번호
            </label>
            <div className="input_group">
              <Input
                id="input-kind-sms-code"
                inputMode="numeric"
                maxLength={6}
                autoComplete="one-time-code"
                placeholder="6자리 인증번호"
                aria-describedby="input-kind-sms-hint"
              />
              <span className="input_group-addon" aria-hidden="true">
                03:00
              </span>
              <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
            </div>
            <p className="form_field-hint" id="input-kind-sms-hint">
              인증번호가 오지 않으면 재요청해 주세요.
            </p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-rrn-1">
              주민등록번호
            </label>
            <div
              className="input_split"
              role="group"
              aria-labelledby="input-kind-rrn-1"
              data-input-split=""
              data-input-numeric=""
            >
              <Input
                id="input-kind-rrn-1"
                inputMode="numeric"
                maxLength={6}
                aria-label="주민등록번호 앞 6자리"
                placeholder="000000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                type="password"
                inputMode="numeric"
                maxLength={7}
                aria-label="주민등록번호 뒤 7자리"
                placeholder="0000000"
              />
            </div>
            <p className="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-biz-1">
              사업자등록번호
            </label>
            <div
              className="input_split"
              role="group"
              aria-labelledby="input-kind-biz-1"
              data-input-split=""
              data-input-numeric=""
            >
              <Input
                id="input-kind-biz-1"
                inputMode="numeric"
                maxLength={3}
                aria-label="사업자등록번호 앞 3자리"
                placeholder="000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                inputMode="numeric"
                maxLength={2}
                aria-label="사업자등록번호 중간 2자리"
                placeholder="00"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                inputMode="numeric"
                maxLength={5}
                aria-label="사업자등록번호 뒤 5자리"
                placeholder="00000"
              />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-account-bank">
              계좌번호
            </label>
            <div className="input_group">
              <select id="input-kind-account-bank" className="input" aria-label="은행 선택">
                <option>은행 선택</option>
                <option>국민은행</option>
                <option>신한은행</option>
                <option>우리은행</option>
              </select>
              <Input inputMode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-zip">
              우편번호
            </label>
            <div className="input_group">
              <Input
                id="input-kind-zip"
                inputMode="numeric"
                maxLength={5}
                placeholder="00000"
                autoComplete="postal-code"
                aria-label="우편번호"
              />
              <Button variant="outline" size="sm" type="button" label="주소 검색" />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-amount">
              결제 금액
            </label>
            <Input
              id="input-kind-amount"
              inputMode="numeric"
              placeholder="0"
              aria-label="결제 금액"
              prefix="₩"
              suffix="원"
            />
            <p className="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
          </div>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-card-1",children:"카드번호"}),e.jsxs("div",{className:"input_split",role:"group","aria-labelledby":"input-kind-card-1","data-input-split":"","data-input-numeric":"",children:[e.jsx(l,{id:"input-kind-card-1",inputMode:"numeric",maxLength:4,autoComplete:"cc-number","aria-label":"카드번호 1~4자리",placeholder:"0000"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"-"}),e.jsx(l,{inputMode:"numeric",maxLength:4,autoComplete:"cc-number","aria-label":"카드번호 5~8자리",placeholder:"0000"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"-"}),e.jsx(l,{type:"password",inputMode:"numeric",maxLength:4,autoComplete:"cc-number","aria-label":"카드번호 9~12자리",placeholder:"0000"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"-"}),e.jsx(l,{type:"password",inputMode:"numeric",maxLength:4,autoComplete:"cc-number","aria-label":"카드번호 13~16자리",placeholder:"0000"})]}),e.jsx("p",{className:"form_field-hint",children:"뒤 8자리는 마스킹 처리할 수 있습니다."})]}),e.jsxs("div",{className:"input_row",children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-exp-mm",children:"유효기간"}),e.jsxs("div",{className:"input_split",role:"group","aria-label":"카드 유효기간","data-input-split":"","data-input-numeric":"",children:[e.jsx(l,{id:"input-kind-exp-mm",inputMode:"numeric",maxLength:2,autoComplete:"cc-exp-month","aria-label":"월(MM)",placeholder:"MM"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"/"}),e.jsx(l,{inputMode:"numeric",maxLength:2,autoComplete:"cc-exp-year","aria-label":"년(YY)",placeholder:"YY"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-cvc",children:"CVC"}),e.jsx(l,{id:"input-kind-cvc",type:"password",inputMode:"numeric",maxLength:3,autoComplete:"cc-csc",placeholder:"000","aria-describedby":"input-kind-cvc-hint"}),e.jsx("p",{className:"form_field-hint",id:"input-kind-cvc-hint",children:"카드 뒷면 3자리"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",id:"input-kind-otp-label",children:"인증번호 (OTP)"}),e.jsxs("div",{className:"input_otp",role:"group","aria-labelledby":"input-kind-otp-label","data-input-otp":"",children:[e.jsx(l,{inputMode:"numeric",maxLength:1,autoComplete:"one-time-code","aria-label":"인증번호 1자리"}),e.jsx(l,{inputMode:"numeric",maxLength:1,"aria-label":"인증번호 2자리"}),e.jsx(l,{inputMode:"numeric",maxLength:1,"aria-label":"인증번호 3자리"}),e.jsx(l,{inputMode:"numeric",maxLength:1,"aria-label":"인증번호 4자리"}),e.jsx(l,{inputMode:"numeric",maxLength:1,"aria-label":"인증번호 5자리"}),e.jsx(l,{inputMode:"numeric",maxLength:1,"aria-label":"인증번호 6자리"})]}),e.jsx("p",{className:"form_field-hint",children:"문자 메시지로 받은 6자리 번호를 입력하세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-phone",children:"휴대폰 번호"}),e.jsxs("div",{className:"input_group",children:[e.jsx("span",{className:"input_group-addon",children:"+82"}),e.jsx(l,{id:"input-kind-phone",type:"tel",placeholder:"10-0000-0000",autoComplete:"tel"}),e.jsx(i,{variant:"outline",color:"primary",size:"sm",type:"button",label:"인증요청"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-sms-code",children:"휴대폰 인증번호"}),e.jsxs("div",{className:"input_group",children:[e.jsx(l,{id:"input-kind-sms-code",inputMode:"numeric",maxLength:6,autoComplete:"one-time-code",placeholder:"6자리 인증번호","aria-describedby":"input-kind-sms-hint"}),e.jsx("span",{className:"input_group-addon","aria-hidden":"true",children:"03:00"}),e.jsx(i,{variant:"outline",color:"primary",size:"sm",type:"button",label:"확인"})]}),e.jsx("p",{className:"form_field-hint",id:"input-kind-sms-hint",children:"인증번호가 오지 않으면 재요청해 주세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-rrn-1",children:"주민등록번호"}),e.jsxs("div",{className:"input_split",role:"group","aria-labelledby":"input-kind-rrn-1","data-input-split":"","data-input-numeric":"",children:[e.jsx(l,{id:"input-kind-rrn-1",inputMode:"numeric",maxLength:6,"aria-label":"주민등록번호 앞 6자리",placeholder:"000000"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"-"}),e.jsx(l,{type:"password",inputMode:"numeric",maxLength:7,"aria-label":"주민등록번호 뒤 7자리",placeholder:"0000000"})]}),e.jsx("p",{className:"form_field-hint",children:"뒷자리는 보안을 위해 마스킹합니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-biz-1",children:"사업자등록번호"}),e.jsxs("div",{className:"input_split",role:"group","aria-labelledby":"input-kind-biz-1","data-input-split":"","data-input-numeric":"",children:[e.jsx(l,{id:"input-kind-biz-1",inputMode:"numeric",maxLength:3,"aria-label":"사업자등록번호 앞 3자리",placeholder:"000"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"-"}),e.jsx(l,{inputMode:"numeric",maxLength:2,"aria-label":"사업자등록번호 중간 2자리",placeholder:"00"}),e.jsx("span",{className:"input_split_sep","aria-hidden":"true",children:"-"}),e.jsx(l,{inputMode:"numeric",maxLength:5,"aria-label":"사업자등록번호 뒤 5자리",placeholder:"00000"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-account-bank",children:"계좌번호"}),e.jsxs("div",{className:"input_group",children:[e.jsxs("select",{id:"input-kind-account-bank",className:"input","aria-label":"은행 선택",children:[e.jsx("option",{children:"은행 선택"}),e.jsx("option",{children:"국민은행"}),e.jsx("option",{children:"신한은행"}),e.jsx("option",{children:"우리은행"})]}),e.jsx(l,{inputMode:"numeric",placeholder:"계좌번호 (- 없이)","aria-label":"계좌번호"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-zip",children:"우편번호"}),e.jsxs("div",{className:"input_group",children:[e.jsx(l,{id:"input-kind-zip",inputMode:"numeric",maxLength:5,placeholder:"00000",autoComplete:"postal-code","aria-label":"우편번호"}),e.jsx(i,{variant:"outline",size:"sm",type:"button",label:"주소 검색"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-kind-amount",children:"결제 금액"}),e.jsx(l,{id:"input-kind-amount",inputMode:"numeric",placeholder:"0","aria-label":"결제 금액",prefix:"₩",suffix:"원"}),e.jsx("p",{className:"form_field-hint",children:"천 단위 구분은 표시용으로 별도 포맷팅합니다."})]})]}))},p={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다."},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';

export function SizeExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-size-sm">
              Small
            </label>
            <Input id="input-size-sm" size="sm" placeholder="input_sm" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-size-md">
              Medium
            </label>
            <Input id="input-size-md" placeholder="기본 크기" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-size-lg">
              Large
            </label>
            <Input id="input-size-lg" size="lg" placeholder="input_lg" />
          </div>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-size-sm",children:"Small"}),e.jsx(l,{id:"input-size-sm",size:"sm",placeholder:"input_sm"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-size-md",children:"Medium"}),e.jsx(l,{id:"input-size-md",placeholder:"기본 크기"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-size-lg",children:"Large"}),e.jsx(l,{id:"input-size-lg",size:"lg",placeholder:"input_lg"})]})]}))},m={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다."},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';

export function WidthExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-width-full-sm">
              전체 너비 — Small
            </label>
            <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-width-full-md">
              전체 너비 — Medium
            </label>
            <Input id="input-width-full-md" placeholder="width: 100%" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-width-full-lg">
              전체 너비 — Large
            </label>
            <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-sm">
              제한 너비 — Small
            </label>
            <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-md">
              제한 너비 — Medium
            </label>
            <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-lg">
              제한 너비 — Large
            </label>
            <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
          </div>
          <div className="input_field input_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-standalone-sm">
              input_field_fit — Small
            </label>
            <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
          </div>
          <div className="input_field input_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-standalone-md">
              input_field_fit — Medium
            </label>
            <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
          </div>
          <div className="input_field input_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-standalone-lg">
              input_field_fit — Large
            </label>
            <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
          </div>
          <form className="form form_vertical form_fit">
            <div className="form_field">
              <label className="form_field-label" htmlFor="input-width-form-fit">
                form_fit
              </label>
              <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
            </div>
          </form>
          <Input
            className="input_fit"
            size="sm"
            placeholder="input_group input_fit — Small"
            aria-label="아이디"
            prefix="@"
          />
          <Input
            className="input_fit"
            placeholder="input_group input_fit — Medium"
            aria-label="아이디"
            prefix="@"
          />
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-full-sm",children:"전체 너비 — Small"}),e.jsx(l,{id:"input-width-full-sm",size:"sm",placeholder:"width: 100%"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-full-md",children:"전체 너비 — Medium"}),e.jsx(l,{id:"input-width-full-md",placeholder:"width: 100%"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-full-lg",children:"전체 너비 — Large"}),e.jsx(l,{id:"input-width-full-lg",size:"lg",placeholder:"width: 100%"})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-fit-sm",children:"제한 너비 — Small"}),e.jsx(l,{id:"input-width-fit-sm",size:"sm",placeholder:"form_field_fit — 최대 320px"})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-fit-md",children:"제한 너비 — Medium"}),e.jsx(l,{id:"input-width-fit-md",placeholder:"form_field_fit — 최대 320px"})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-fit-lg",children:"제한 너비 — Large"}),e.jsx(l,{id:"input-width-fit-lg",size:"lg",placeholder:"form_field_fit — 최대 320px"})]}),e.jsxs("div",{className:"input_field input_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-fit-standalone-sm",children:"input_field_fit — Small"}),e.jsx(l,{id:"input-width-fit-standalone-sm",size:"sm",placeholder:"최대 320px"})]}),e.jsxs("div",{className:"input_field input_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-fit-standalone-md",children:"input_field_fit — Medium"}),e.jsx(l,{id:"input-width-fit-standalone-md",placeholder:"최대 320px"})]}),e.jsxs("div",{className:"input_field input_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-fit-standalone-lg",children:"input_field_fit — Large"}),e.jsx(l,{id:"input-width-fit-standalone-lg",size:"lg",placeholder:"최대 320px"})]}),e.jsx("form",{className:"form form_vertical form_fit",children:e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-width-form-fit",children:"form_fit"}),e.jsx(l,{id:"input-width-form-fit",placeholder:"폼 내 필드·그룹 최대 320px"})]})}),e.jsx(l,{className:"input_fit",size:"sm",placeholder:"input_group input_fit — Small","aria-label":"아이디",prefix:"@"}),e.jsx(l,{className:"input_fit",placeholder:"input_group input_fit — Medium","aria-label":"아이디",prefix:"@"})]}))},u={name:"Input Group",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다."},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';

export function GroupExample() {
  return (
    <>
          <Input placeholder="example.com" aria-label="도메인" prefix="https://" />
          <Input placeholder="username" aria-label="사용자명" prefix="@" />
          <Input type="number" placeholder="금액" aria-label="금액" suffix="원" />
          <Input type="number" placeholder="0" aria-label="결제 금액" prefix="₩" suffix="KRW" />
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"example.com","aria-label":"도메인",prefix:"https://"}),e.jsx(l,{placeholder:"username","aria-label":"사용자명",prefix:"@"}),e.jsx(l,{type:"number",placeholder:"금액","aria-label":"금액",suffix:"원"}),e.jsx(l,{type:"number",placeholder:"0","aria-label":"결제 금액",prefix:"₩",suffix:"KRW"})]}))},c={name:"필수 필드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"required 속성과 form_field-required로 필수 입력을 표시합니다."},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';

export function RequiredExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-required-email">
              이메일
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input
              id="input-required-email"
              type="email"
              placeholder="name@example.com"
              required
              aria-required="true"
            />
            <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-required-name">
              이름
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
          </div>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"input-required-email",children:["이메일",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(l,{id:"input-required-email",type:"email",placeholder:"name@example.com",required:!0,"aria-required":"true"}),e.jsx("p",{className:"form_field-hint",children:"업무용 이메일을 입력해 주세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"input-required-name",children:["이름",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(l,{id:"input-required-name",placeholder:"홍길동",required:!0,"aria-required":"true"})]})]}))},f={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다."},source:{code:`import Input from '@uxkm/ui-react/components/Input.jsx';

export function StateExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-state-default">
              기본
            </label>
            <Input id="input-state-default" placeholder="입력 가능" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-state-disabled">
              비활성
            </label>
            <Input id="input-state-disabled" defaultValue="수정할 수 없음" disabled />
            <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-state-error">
              에러
            </label>
            <Input
              id="input-state-error"
              type="email"
              error
              defaultValue="invalid-email"
              aria-describedby="input-state-error-msg"
            />
            <p className="form_field-error" id="input-state-error-msg" role="alert">
              올바른 이메일 형식이 아닙니다.
            </p>
          </div>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-state-default",children:"기본"}),e.jsx(l,{id:"input-state-default",placeholder:"입력 가능"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-state-disabled",children:"비활성"}),e.jsx(l,{id:"input-state-disabled",defaultValue:"수정할 수 없음",disabled:!0}),e.jsx("p",{className:"form_field-hint",children:"disabled 속성으로 편집을 막습니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-state-error",children:"에러"}),e.jsx(l,{id:"input-state-error",type:"email",error:!0,defaultValue:"invalid-email","aria-describedby":"input-state-error-msg"}),e.jsx("p",{className:"form_field-error",id:"input-state-error-msg",role:"alert",children:"올바른 이메일 형식이 아닙니다."})]})]}))},b={name:"입력 삭제",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`input_clearable` 래퍼로 값이 있을 때 우측에 지우기 버튼을 표시합니다. `readonly` · `disabled` 상태에서는 버튼이 나타나지 않습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ClearableExample() {
  return (
    <>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-clear-text">
              텍스트
            </label>
            <div className="input_clearable">
              <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-clear-search">
              검색
            </label>
            <div className="input_group">
              <span className="input_group-addon" aria-hidden="true">
                <Icon name="search" size="sm" />
              </span>
              <span className="input_clearable">
                <Input id="input-clear-search" type="search" placeholder="검색어 입력" />
                <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
              </span>
            </div>
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-clear-readonly">
              읽기 전용 (삭제 버튼 없음)
            </label>
            <div className="input_clearable">
              <Input id="input-clear-readonly" defaultValue="수정 불가" readOnly />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
        </>,
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-clear-text",children:"텍스트"}),e.jsxs("div",{className:"input_clearable",children:[e.jsx(l,{id:"input-clear-text",placeholder:"입력 후 우측 X 버튼 확인"}),e.jsx(t,{})]})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-clear-search",children:"검색"}),e.jsxs("div",{className:"input_group",children:[e.jsx("span",{className:"input_group-addon","aria-hidden":"true",children:e.jsx(_,{name:"search",size:"sm"})}),e.jsxs("span",{className:"input_clearable",children:[e.jsx(l,{id:"input-clear-search",type:"search",placeholder:"검색어 입력"}),e.jsx(t,{})]})]})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-clear-readonly",children:"읽기 전용 (삭제 버튼 없음)"}),e.jsxs("div",{className:"input_clearable",children:[e.jsx(l,{id:"input-clear-readonly",defaultValue:"수정 불가",readOnly:!0}),e.jsx(t,{})]})]})]}))},h={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role="alert" · role="status"로 스크린 리더에 피드백을 전달합니다.'},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <form className="form form_vertical form_compact" noValidate aria-labelledby="example-heading">
          <div className="alert color_error" role="alert" id="input-ex-form-error">
            <div>
              <Icon name="x-circle" className="alert_icon" />
            </div>
            <div className="alert_body">
              <div className="alert_title">입력 내용을 확인해 주세요</div>
              <p className="alert_desc">비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.</p>
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-ex-id">
              아이디
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input
              id="input-ex-id"
              size="sm"
              className="is-success"
              defaultValue="uxkm_user"
              required
              aria-required="true"
              autoComplete="username"
              aria-invalid="false"
              aria-describedby="input-ex-id-hint input-ex-id-success"
              prefix="@"
            />
            <p className="form_field-hint" id="input-ex-id-hint">
              영문·숫자 4~16자
            </p>
            <p className="form_field-success" id="input-ex-id-success" role="status">
              사용 가능한 아이디입니다.
            </p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-ex-pw">
              비밀번호
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input
              id="input-ex-pw"
              type="password"
              size="sm"
              error
              defaultValue="1234"
              required
              aria-required="true"
              autoComplete="current-password"
              aria-invalid="true"
              aria-describedby="input-ex-pw-error"
            />
            <p className="form_field-error" id="input-ex-pw-error" role="alert">
              8자 이상, 영문·숫자·특수문자를 포함해 주세요.
            </p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-ex-email">
              이메일
            </label>
            <Input
              id="input-ex-email"
              type="email"
              size="sm"
              error
              defaultValue="user@"
              aria-invalid="true"
              aria-describedby="input-ex-email-error"
              autoComplete="email"
            />
            <p className="form_field-error" id="input-ex-email-error" role="alert">
              올바른 이메일 주소를 입력해 주세요. (예: name@example.com)
            </p>
          </div>
          <div className="form_actions">
            <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
            <Button variant="ghost" size="sm" type="button" label="취소" />
          </div>
        </form>,
  );
}`,language:"tsx"}}},render:a(e.jsxs("form",{className:"form form_vertical form_compact",noValidate:!0,"aria-labelledby":"example-heading",children:[e.jsxs("div",{className:"alert color_error",role:"alert",id:"input-ex-form-error",children:[e.jsx("div",{children:e.jsx(_,{name:"x-circle",className:"alert_icon"})}),e.jsxs("div",{className:"alert_body",children:[e.jsx("div",{className:"alert_title",children:"입력 내용을 확인해 주세요"}),e.jsx("p",{className:"alert_desc",children:"비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요."})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"input-ex-id",children:["아이디",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(l,{id:"input-ex-id",size:"sm",className:"is-success",defaultValue:"uxkm_user",required:!0,"aria-required":"true",autoComplete:"username","aria-invalid":"false","aria-describedby":"input-ex-id-hint input-ex-id-success",prefix:"@"}),e.jsx("p",{className:"form_field-hint",id:"input-ex-id-hint",children:"영문·숫자 4~16자"}),e.jsx("p",{className:"form_field-success",id:"input-ex-id-success",role:"status",children:"사용 가능한 아이디입니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"input-ex-pw",children:["비밀번호",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsx(l,{id:"input-ex-pw",type:"password",size:"sm",error:!0,defaultValue:"1234",required:!0,"aria-required":"true",autoComplete:"current-password","aria-invalid":"true","aria-describedby":"input-ex-pw-error"}),e.jsx("p",{className:"form_field-error",id:"input-ex-pw-error",role:"alert",children:"8자 이상, 영문·숫자·특수문자를 포함해 주세요."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"input-ex-email",children:"이메일"}),e.jsx(l,{id:"input-ex-email",type:"email",size:"sm",error:!0,defaultValue:"user@","aria-invalid":"true","aria-describedby":"input-ex-email-error",autoComplete:"email"}),e.jsx("p",{className:"form_field-error",id:"input-ex-email-error",role:"alert",children:"올바른 이메일 주소를 입력해 주세요. (예: name@example.com)"})]}),e.jsxs("div",{className:"form_actions",children:[e.jsx(i,{variant:"filled",color:"primary",size:"sm",type:"submit",label:"로그인"}),e.jsx(i,{variant:"ghost",size:"sm",type:"button",label:"취소"})]})]}))};var N,v,g;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  }) => <Input {...args} onChange={event => updateArgs({
    value: event.target.value
  })} />
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,I,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '레이블과 힌트 텍스트가 포함된 폼 필드입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
          <label className="form_field-label" htmlFor="input-name">
            이름
          </label>
          <div className="input_clearable">
            <Input id="input-name" placeholder="이름을 입력하세요" />
            <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
          </div>
          <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
        </div>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <label className="form_field-label" htmlFor="input-name">
        이름
      </label>
      <div className="input_clearable">
        <Input id="input-name" placeholder="이름을 입력하세요" />
        <ClearButton />
      </div>
      <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
    </div>)
}`,...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var k,w,F;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        story: 'form_field 래퍼 없이 \`input_field\`로 레이블과 input을 묶을 수 있습니다. 접근 가능한 이름은 반드시 지정합니다. 보이는 레이블이 있으면 \`label.form_field-label\` + \`htmlFor\`를, 아이콘만 있는 검색창·툴바 등에는 \`label.input_group\`으로 input을 감싸고 \`input_group-label_hidden\`으로 이름을 제공합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function StandaloneExample() {
  return (
    <>
          <div className="input_field">
            <label className="form_field-label" htmlFor="input-standalone-placeholder">
              검색어
            </label>
            <div className="input_clearable">
              <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
          <div className="input_field">
            <label className="form_field-label" htmlFor="input-standalone-value">
              닉네임
            </label>
            <div className="input_clearable">
              <Input id="input-standalone-value" defaultValue="입력된 값" />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
          <div className="input_field">
            <label className="form_field-label" htmlFor="input-standalone-disabled">
              코드
            </label>
            <Input id="input-standalone-disabled" placeholder="비활성" disabled />
          </div>
          <Input
            type="search"
            placeholder="검색어를 입력하세요"
            aria-label="검색"
            prefix={<Icon name="search" size="sm" />}
          />
          <p className="form_field-hint">
            아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에
            보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.
          </p>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-placeholder">
          검색어
        </label>
        <div className="input_clearable">
          <Input id="input-standalone-placeholder" placeholder="플레이스홀더" />
          <ClearButton />
        </div>
      </div>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-value">
          닉네임
        </label>
        <div className="input_clearable">
          <Input id="input-standalone-value" defaultValue="입력된 값" />
          <ClearButton hidden={false} />
        </div>
      </div>
      <div className="input_field">
        <label className="form_field-label" htmlFor="input-standalone-disabled">
          코드
        </label>
        <Input id="input-standalone-disabled" placeholder="비활성" disabled />
      </div>
      <Input type="search" placeholder="검색어를 입력하세요" aria-label="검색" prefix={<Icon name="search" size="sm" />} />
      <p className="form_field-hint">
        아이콘만 있는 툴바 검색은 <code>label.input_group</code>으로 input을 감싸고, 화면에
        보이지 않는 <code>input_group-label_hidden</code>으로 접근 가능한 이름을 지정합니다.
      </p>
    </>)
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var z,M,C;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '입력 타입',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'HTML input type에 따라 브라우저 기본 UI가 적용됩니다. class="input"은 모든 타입에 공통으로 사용합니다.'
      },
      source: {
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';

export function TypeExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-text">
              텍스트
            </label>
            <Input id="input-type-text" placeholder="일반 텍스트" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-password">
              비밀번호
            </label>
            <Input
              id="input-type-password"
              type="password"
              placeholder="8자 이상"
              autoComplete="new-password"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-email">
              이메일
            </label>
            <Input
              id="input-type-email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-tel">
              전화번호
            </label>
            <Input
              id="input-type-tel"
              type="tel"
              placeholder="010-0000-0000"
              autoComplete="tel"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-url">
              URL
            </label>
            <Input id="input-type-url" type="url" placeholder="https://example.com" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-search">
              검색
            </label>
            <Input id="input-type-search" type="search" placeholder="키워드 검색" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-number">
              숫자
            </label>
            <Input id="input-type-number" type="number" placeholder="0" min={0} max={100} step={1} />
            <p className="form_field-hint">0~100 사이 정수</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-date">
              날짜
            </label>
            <Input id="input-type-date" type="date" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-type-time">
              시간
            </label>
            <Input id="input-type-time" type="time" />
          </div>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-text">
          텍스트
        </label>
        <Input id="input-type-text" placeholder="일반 텍스트" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-password">
          비밀번호
        </label>
        <Input id="input-type-password" type="password" placeholder="8자 이상" autoComplete="new-password" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-email">
          이메일
        </label>
        <Input id="input-type-email" type="email" placeholder="name@example.com" autoComplete="email" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-tel">
          전화번호
        </label>
        <Input id="input-type-tel" type="tel" placeholder="010-0000-0000" autoComplete="tel" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-url">
          URL
        </label>
        <Input id="input-type-url" type="url" placeholder="https://example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-search">
          검색
        </label>
        <Input id="input-type-search" type="search" placeholder="키워드 검색" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-number">
          숫자
        </label>
        <Input id="input-type-number" type="number" placeholder="0" min={0} max={100} step={1} />
        <p className="form_field-hint">0~100 사이 정수</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-date">
          날짜
        </label>
        <Input id="input-type-date" type="date" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-type-time">
          시간
        </label>
        <Input id="input-type-time" type="time" />
      </div>
    </>)
}`,...(C=(M=d.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var L,B,q;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '입력 종류',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '결제·본인인증·사업자 정보 등 도메인별 입력 패턴입니다. 예시는 부모 너비 100%를 기본으로 하며, 필요 시 form_field_fit · input_fit으로 최대 너비를 제한할 수 있습니다. input_split · input_otp · input_group · input_row를 조합해 구성합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function KindExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-card-1">
              카드번호
            </label>
            <div
              className="input_split"
              role="group"
              aria-labelledby="input-kind-card-1"
              data-input-split=""
              data-input-numeric=""
            >
              <Input
                id="input-kind-card-1"
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 1~4자리"
                placeholder="0000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 5~8자리"
                placeholder="0000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                type="password"
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 9~12자리"
                placeholder="0000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                type="password"
                inputMode="numeric"
                maxLength={4}
                autoComplete="cc-number"
                aria-label="카드번호 13~16자리"
                placeholder="0000"
              />
            </div>
            <p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
          </div>
          <div className="input_row">
            <div className="form_field">
              <label className="form_field-label" htmlFor="input-kind-exp-mm">
                유효기간
              </label>
              <div
                className="input_split"
                role="group"
                aria-label="카드 유효기간"
                data-input-split=""
                data-input-numeric=""
              >
                <Input
                  id="input-kind-exp-mm"
                  inputMode="numeric"
                  maxLength={2}
                  autoComplete="cc-exp-month"
                  aria-label="월(MM)"
                  placeholder="MM"
                />
                <span className="input_split_sep" aria-hidden="true">
                  /
                </span>
                <Input
                  inputMode="numeric"
                  maxLength={2}
                  autoComplete="cc-exp-year"
                  aria-label="년(YY)"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="form_field">
              <label className="form_field-label" htmlFor="input-kind-cvc">
                CVC
              </label>
              <Input
                id="input-kind-cvc"
                type="password"
                inputMode="numeric"
                maxLength={3}
                autoComplete="cc-csc"
                placeholder="000"
                aria-describedby="input-kind-cvc-hint"
              />
              <p className="form_field-hint" id="input-kind-cvc-hint">
                카드 뒷면 3자리
              </p>
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" id="input-kind-otp-label">
              인증번호 (OTP)
            </label>
            <div
              className="input_otp"
              role="group"
              aria-labelledby="input-kind-otp-label"
              data-input-otp=""
            >
              <Input inputMode="numeric" maxLength={1} autoComplete="one-time-code" aria-label="인증번호 1자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 2자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 3자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 4자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 5자리" />
              <Input inputMode="numeric" maxLength={1} aria-label="인증번호 6자리" />
            </div>
            <p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-phone">
              휴대폰 번호
            </label>
            <div className="input_group">
              <span className="input_group-addon">+82</span>
              <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autoComplete="tel" />
              <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-sms-code">
              휴대폰 인증번호
            </label>
            <div className="input_group">
              <Input
                id="input-kind-sms-code"
                inputMode="numeric"
                maxLength={6}
                autoComplete="one-time-code"
                placeholder="6자리 인증번호"
                aria-describedby="input-kind-sms-hint"
              />
              <span className="input_group-addon" aria-hidden="true">
                03:00
              </span>
              <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
            </div>
            <p className="form_field-hint" id="input-kind-sms-hint">
              인증번호가 오지 않으면 재요청해 주세요.
            </p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-rrn-1">
              주민등록번호
            </label>
            <div
              className="input_split"
              role="group"
              aria-labelledby="input-kind-rrn-1"
              data-input-split=""
              data-input-numeric=""
            >
              <Input
                id="input-kind-rrn-1"
                inputMode="numeric"
                maxLength={6}
                aria-label="주민등록번호 앞 6자리"
                placeholder="000000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                type="password"
                inputMode="numeric"
                maxLength={7}
                aria-label="주민등록번호 뒤 7자리"
                placeholder="0000000"
              />
            </div>
            <p className="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-biz-1">
              사업자등록번호
            </label>
            <div
              className="input_split"
              role="group"
              aria-labelledby="input-kind-biz-1"
              data-input-split=""
              data-input-numeric=""
            >
              <Input
                id="input-kind-biz-1"
                inputMode="numeric"
                maxLength={3}
                aria-label="사업자등록번호 앞 3자리"
                placeholder="000"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                inputMode="numeric"
                maxLength={2}
                aria-label="사업자등록번호 중간 2자리"
                placeholder="00"
              />
              <span className="input_split_sep" aria-hidden="true">
                -
              </span>
              <Input
                inputMode="numeric"
                maxLength={5}
                aria-label="사업자등록번호 뒤 5자리"
                placeholder="00000"
              />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-account-bank">
              계좌번호
            </label>
            <div className="input_group">
              <select id="input-kind-account-bank" className="input" aria-label="은행 선택">
                <option>은행 선택</option>
                <option>국민은행</option>
                <option>신한은행</option>
                <option>우리은행</option>
              </select>
              <Input inputMode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-zip">
              우편번호
            </label>
            <div className="input_group">
              <Input
                id="input-kind-zip"
                inputMode="numeric"
                maxLength={5}
                placeholder="00000"
                autoComplete="postal-code"
                aria-label="우편번호"
              />
              <Button variant="outline" size="sm" type="button" label="주소 검색" />
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-kind-amount">
              결제 금액
            </label>
            <Input
              id="input-kind-amount"
              inputMode="numeric"
              placeholder="0"
              aria-label="결제 금액"
              prefix="₩"
              suffix="원"
            />
            <p className="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
          </div>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-card-1">
          카드번호
        </label>
        <div className="input_split" role="group" aria-labelledby="input-kind-card-1" data-input-split="" data-input-numeric="">
          <Input id="input-kind-card-1" inputMode="numeric" maxLength={4} autoComplete="cc-number" aria-label="카드번호 1~4자리" placeholder="0000" />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input inputMode="numeric" maxLength={4} autoComplete="cc-number" aria-label="카드번호 5~8자리" placeholder="0000" />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input type="password" inputMode="numeric" maxLength={4} autoComplete="cc-number" aria-label="카드번호 9~12자리" placeholder="0000" />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input type="password" inputMode="numeric" maxLength={4} autoComplete="cc-number" aria-label="카드번호 13~16자리" placeholder="0000" />
        </div>
        <p className="form_field-hint">뒤 8자리는 마스킹 처리할 수 있습니다.</p>
      </div>
      <div className="input_row">
        <div className="form_field">
          <label className="form_field-label" htmlFor="input-kind-exp-mm">
            유효기간
          </label>
          <div className="input_split" role="group" aria-label="카드 유효기간" data-input-split="" data-input-numeric="">
            <Input id="input-kind-exp-mm" inputMode="numeric" maxLength={2} autoComplete="cc-exp-month" aria-label="월(MM)" placeholder="MM" />
            <span className="input_split_sep" aria-hidden="true">
              /
            </span>
            <Input inputMode="numeric" maxLength={2} autoComplete="cc-exp-year" aria-label="년(YY)" placeholder="YY" />
          </div>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="input-kind-cvc">
            CVC
          </label>
          <Input id="input-kind-cvc" type="password" inputMode="numeric" maxLength={3} autoComplete="cc-csc" placeholder="000" aria-describedby="input-kind-cvc-hint" />
          <p className="form_field-hint" id="input-kind-cvc-hint">
            카드 뒷면 3자리
          </p>
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" id="input-kind-otp-label">
          인증번호 (OTP)
        </label>
        <div className="input_otp" role="group" aria-labelledby="input-kind-otp-label" data-input-otp="">
          <Input inputMode="numeric" maxLength={1} autoComplete="one-time-code" aria-label="인증번호 1자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 2자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 3자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 4자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 5자리" />
          <Input inputMode="numeric" maxLength={1} aria-label="인증번호 6자리" />
        </div>
        <p className="form_field-hint">문자 메시지로 받은 6자리 번호를 입력하세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-phone">
          휴대폰 번호
        </label>
        <div className="input_group">
          <span className="input_group-addon">+82</span>
          <Input id="input-kind-phone" type="tel" placeholder="10-0000-0000" autoComplete="tel" />
          <Button variant="outline" color="primary" size="sm" type="button" label="인증요청" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-sms-code">
          휴대폰 인증번호
        </label>
        <div className="input_group">
          <Input id="input-kind-sms-code" inputMode="numeric" maxLength={6} autoComplete="one-time-code" placeholder="6자리 인증번호" aria-describedby="input-kind-sms-hint" />
          <span className="input_group-addon" aria-hidden="true">
            03:00
          </span>
          <Button variant="outline" color="primary" size="sm" type="button" label="확인" />
        </div>
        <p className="form_field-hint" id="input-kind-sms-hint">
          인증번호가 오지 않으면 재요청해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-rrn-1">
          주민등록번호
        </label>
        <div className="input_split" role="group" aria-labelledby="input-kind-rrn-1" data-input-split="" data-input-numeric="">
          <Input id="input-kind-rrn-1" inputMode="numeric" maxLength={6} aria-label="주민등록번호 앞 6자리" placeholder="000000" />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input type="password" inputMode="numeric" maxLength={7} aria-label="주민등록번호 뒤 7자리" placeholder="0000000" />
        </div>
        <p className="form_field-hint">뒷자리는 보안을 위해 마스킹합니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-biz-1">
          사업자등록번호
        </label>
        <div className="input_split" role="group" aria-labelledby="input-kind-biz-1" data-input-split="" data-input-numeric="">
          <Input id="input-kind-biz-1" inputMode="numeric" maxLength={3} aria-label="사업자등록번호 앞 3자리" placeholder="000" />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input inputMode="numeric" maxLength={2} aria-label="사업자등록번호 중간 2자리" placeholder="00" />
          <span className="input_split_sep" aria-hidden="true">
            -
          </span>
          <Input inputMode="numeric" maxLength={5} aria-label="사업자등록번호 뒤 5자리" placeholder="00000" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-account-bank">
          계좌번호
        </label>
        <div className="input_group">
          <select id="input-kind-account-bank" className="input" aria-label="은행 선택">
            <option>은행 선택</option>
            <option>국민은행</option>
            <option>신한은행</option>
            <option>우리은행</option>
          </select>
          <Input inputMode="numeric" placeholder="계좌번호 (- 없이)" aria-label="계좌번호" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-zip">
          우편번호
        </label>
        <div className="input_group">
          <Input id="input-kind-zip" inputMode="numeric" maxLength={5} placeholder="00000" autoComplete="postal-code" aria-label="우편번호" />
          <Button variant="outline" size="sm" type="button" label="주소 검색" />
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-kind-amount">
          결제 금액
        </label>
        <Input id="input-kind-amount" inputMode="numeric" placeholder="0" aria-label="결제 금액" prefix="₩" suffix="원" />
        <p className="form_field-hint">천 단위 구분은 표시용으로 별도 포맷팅합니다.</p>
      </div>
    </>)
}`,...(q=(B=o.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var V,S,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        story: 'input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 input_fit 등과 자유롭게 조합할 수 있습니다.'
      },
      source: {
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';

export function SizeExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-size-sm">
              Small
            </label>
            <Input id="input-size-sm" size="sm" placeholder="input_sm" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-size-md">
              Medium
            </label>
            <Input id="input-size-md" placeholder="기본 크기" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-size-lg">
              Large
            </label>
            <Input id="input-size-lg" size="lg" placeholder="input_lg" />
          </div>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-sm">
          Small
        </label>
        <Input id="input-size-sm" size="sm" placeholder="input_sm" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-md">
          Medium
        </label>
        <Input id="input-size-md" placeholder="기본 크기" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-size-lg">
          Large
        </label>
        <Input id="input-size-lg" size="lg" placeholder="input_lg" />
      </div>
    </>)
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var R,E,O;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        story: '크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, input_fit · input_field_fit · form_field_fit · form_fit으로 --input-max-width(320px)까지 제한합니다.'
      },
      source: {
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';

export function WidthExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-width-full-sm">
              전체 너비 — Small
            </label>
            <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-width-full-md">
              전체 너비 — Medium
            </label>
            <Input id="input-width-full-md" placeholder="width: 100%" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-width-full-lg">
              전체 너비 — Large
            </label>
            <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-sm">
              제한 너비 — Small
            </label>
            <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-md">
              제한 너비 — Medium
            </label>
            <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-lg">
              제한 너비 — Large
            </label>
            <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
          </div>
          <div className="input_field input_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-standalone-sm">
              input_field_fit — Small
            </label>
            <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
          </div>
          <div className="input_field input_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-standalone-md">
              input_field_fit — Medium
            </label>
            <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
          </div>
          <div className="input_field input_field_fit">
            <label className="form_field-label" htmlFor="input-width-fit-standalone-lg">
              input_field_fit — Large
            </label>
            <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
          </div>
          <form className="form form_vertical form_fit">
            <div className="form_field">
              <label className="form_field-label" htmlFor="input-width-form-fit">
                form_fit
              </label>
              <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
            </div>
          </form>
          <Input
            className="input_fit"
            size="sm"
            placeholder="input_group input_fit — Small"
            aria-label="아이디"
            prefix="@"
          />
          <Input
            className="input_fit"
            placeholder="input_group input_fit — Medium"
            aria-label="아이디"
            prefix="@"
          />
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-width-full-sm">
          전체 너비 — Small
        </label>
        <Input id="input-width-full-sm" size="sm" placeholder="width: 100%" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-width-full-md">
          전체 너비 — Medium
        </label>
        <Input id="input-width-full-md" placeholder="width: 100%" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-width-full-lg">
          전체 너비 — Large
        </label>
        <Input id="input-width-full-lg" size="lg" placeholder="width: 100%" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-sm">
          제한 너비 — Small
        </label>
        <Input id="input-width-fit-sm" size="sm" placeholder="form_field_fit — 최대 320px" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-md">
          제한 너비 — Medium
        </label>
        <Input id="input-width-fit-md" placeholder="form_field_fit — 최대 320px" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-lg">
          제한 너비 — Large
        </label>
        <Input id="input-width-fit-lg" size="lg" placeholder="form_field_fit — 최대 320px" />
      </div>
      <div className="input_field input_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-standalone-sm">
          input_field_fit — Small
        </label>
        <Input id="input-width-fit-standalone-sm" size="sm" placeholder="최대 320px" />
      </div>
      <div className="input_field input_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-standalone-md">
          input_field_fit — Medium
        </label>
        <Input id="input-width-fit-standalone-md" placeholder="최대 320px" />
      </div>
      <div className="input_field input_field_fit">
        <label className="form_field-label" htmlFor="input-width-fit-standalone-lg">
          input_field_fit — Large
        </label>
        <Input id="input-width-fit-standalone-lg" size="lg" placeholder="최대 320px" />
      </div>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <label className="form_field-label" htmlFor="input-width-form-fit">
            form_fit
          </label>
          <Input id="input-width-form-fit" placeholder="폼 내 필드·그룹 최대 320px" />
        </div>
      </form>
      <Input className="input_fit" size="sm" placeholder="input_group input_fit — Small" aria-label="아이디" prefix="@" />
      <Input className="input_fit" placeholder="input_group input_fit — Medium" aria-label="아이디" prefix="@" />
    </>)
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var Y,T,D;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Input Group',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'input_group으로 앞뒤에 텍스트·아이콘 애드온을 붙일 수 있습니다.'
      },
      source: {
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';

export function GroupExample() {
  return (
    <>
          <Input placeholder="example.com" aria-label="도메인" prefix="https://" />
          <Input placeholder="username" aria-label="사용자명" prefix="@" />
          <Input type="number" placeholder="금액" aria-label="금액" suffix="원" />
          <Input type="number" placeholder="0" aria-label="결제 금액" prefix="₩" suffix="KRW" />
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Input placeholder="example.com" aria-label="도메인" prefix="https://" />
      <Input placeholder="username" aria-label="사용자명" prefix="@" />
      <Input type="number" placeholder="금액" aria-label="금액" suffix="원" />
      <Input type="number" placeholder="0" aria-label="결제 금액" prefix="₩" suffix="KRW" />
    </>)
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var K,W,A;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';

export function RequiredExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-required-email">
              이메일
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input
              id="input-required-email"
              type="email"
              placeholder="name@example.com"
              required
              aria-required="true"
            />
            <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-required-name">
              이름
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
          </div>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-required-email">
          이메일
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input id="input-required-email" type="email" placeholder="name@example.com" required aria-required="true" />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-required-name">
          이름
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input id="input-required-name" placeholder="홍길동" required aria-required="true" />
      </div>
    </>)
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var G,U,X;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        code: \`import Input from '@uxkm/ui-react/components/Input.jsx';

export function StateExample() {
  return (
    <>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-state-default">
              기본
            </label>
            <Input id="input-state-default" placeholder="입력 가능" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-state-disabled">
              비활성
            </label>
            <Input id="input-state-disabled" defaultValue="수정할 수 없음" disabled />
            <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-state-error">
              에러
            </label>
            <Input
              id="input-state-error"
              type="email"
              error
              defaultValue="invalid-email"
              aria-describedby="input-state-error-msg"
            />
            <p className="form_field-error" id="input-state-error-msg" role="alert">
              올바른 이메일 형식이 아닙니다.
            </p>
          </div>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-default">
          기본
        </label>
        <Input id="input-state-default" placeholder="입력 가능" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-disabled">
          비활성
        </label>
        <Input id="input-state-disabled" defaultValue="수정할 수 없음" disabled />
        <p className="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-state-error">
          에러
        </label>
        <Input id="input-state-error" type="email" error defaultValue="invalid-email" aria-describedby="input-state-error-msg" />
        <p className="form_field-error" id="input-state-error-msg" role="alert">
          올바른 이메일 형식이 아닙니다.
        </p>
      </div>
    </>)
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var H,J,Q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '입력 삭제',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`input_clearable\` 래퍼로 값이 있을 때 우측에 지우기 버튼을 표시합니다. \`readonly\` · \`disabled\` 상태에서는 버튼이 나타나지 않습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ClearableExample() {
  return (
    <>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-clear-text">
              텍스트
            </label>
            <div className="input_clearable">
              <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-clear-search">
              검색
            </label>
            <div className="input_group">
              <span className="input_group-addon" aria-hidden="true">
                <Icon name="search" size="sm" />
              </span>
              <span className="input_clearable">
                <Input id="input-clear-search" type="search" placeholder="검색어 입력" />
                <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
              </span>
            </div>
          </div>
          <div className="form_field form_field_fit">
            <label className="form_field-label" htmlFor="input-clear-readonly">
              읽기 전용 (삭제 버튼 없음)
            </label>
            <div className="input_clearable">
              <Input id="input-clear-readonly" defaultValue="수정 불가" readOnly />
              <Button
              className="input_clear"
              variant="text"
              color="muted"
              ripple={false}
              ariaLabel="입력 지우기"
              iconOnly
              hidden
              iconBefore={<Icon name="close" />}
            />
            </div>
          </div>
        </>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-clear-text">
          텍스트
        </label>
        <div className="input_clearable">
          <Input id="input-clear-text" placeholder="입력 후 우측 X 버튼 확인" />
          <ClearButton />
        </div>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-clear-search">
          검색
        </label>
        <div className="input_group">
          <span className="input_group-addon" aria-hidden="true">
            <Icon name="search" size="sm" />
          </span>
          <span className="input_clearable">
            <Input id="input-clear-search" type="search" placeholder="검색어 입력" />
            <ClearButton />
          </span>
        </div>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="input-clear-readonly">
          읽기 전용 (삭제 버튼 없음)
        </label>
        <div className="input_clearable">
          <Input id="input-clear-readonly" defaultValue="수정 불가" readOnly />
          <ClearButton />
        </div>
      </div>
    </>)
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
        story: '유효성 검사 후 성공·실패 상태를 조합한 로그인 폼입니다. aria-invalid · aria-describedby · role="alert" · role="status"로 스크린 리더에 피드백을 전달합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <form className="form form_vertical form_compact" noValidate aria-labelledby="example-heading">
          <div className="alert color_error" role="alert" id="input-ex-form-error">
            <div>
              <Icon name="x-circle" className="alert_icon" />
            </div>
            <div className="alert_body">
              <div className="alert_title">입력 내용을 확인해 주세요</div>
              <p className="alert_desc">비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.</p>
            </div>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-ex-id">
              아이디
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input
              id="input-ex-id"
              size="sm"
              className="is-success"
              defaultValue="uxkm_user"
              required
              aria-required="true"
              autoComplete="username"
              aria-invalid="false"
              aria-describedby="input-ex-id-hint input-ex-id-success"
              prefix="@"
            />
            <p className="form_field-hint" id="input-ex-id-hint">
              영문·숫자 4~16자
            </p>
            <p className="form_field-success" id="input-ex-id-success" role="status">
              사용 가능한 아이디입니다.
            </p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-ex-pw">
              비밀번호
              <span className="form_field-required" aria-hidden="true">
                *
              </span>
            </label>
            <Input
              id="input-ex-pw"
              type="password"
              size="sm"
              error
              defaultValue="1234"
              required
              aria-required="true"
              autoComplete="current-password"
              aria-invalid="true"
              aria-describedby="input-ex-pw-error"
            />
            <p className="form_field-error" id="input-ex-pw-error" role="alert">
              8자 이상, 영문·숫자·특수문자를 포함해 주세요.
            </p>
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="input-ex-email">
              이메일
            </label>
            <Input
              id="input-ex-email"
              type="email"
              size="sm"
              error
              defaultValue="user@"
              aria-invalid="true"
              aria-describedby="input-ex-email-error"
              autoComplete="email"
            />
            <p className="form_field-error" id="input-ex-email-error" role="alert">
              올바른 이메일 주소를 입력해 주세요. (예: name@example.com)
            </p>
          </div>
          <div className="form_actions">
            <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
            <Button variant="ghost" size="sm" type="button" label="취소" />
          </div>
        </form>,
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<form className="form form_vertical form_compact" noValidate aria-labelledby="example-heading">
      <div className="alert color_error" role="alert" id="input-ex-form-error">
        <div>
          <Icon name="x-circle" className="alert_icon" />
        </div>
        <div className="alert_body">
          <div className="alert_title">입력 내용을 확인해 주세요</div>
          <p className="alert_desc">비밀번호와 이메일 형식을 수정한 뒤 다시 시도해 주세요.</p>
        </div>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-ex-id">
          아이디
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input id="input-ex-id" size="sm" className="is-success" defaultValue="uxkm_user" required aria-required="true" autoComplete="username" aria-invalid="false" aria-describedby="input-ex-id-hint input-ex-id-success" prefix="@" />
        <p className="form_field-hint" id="input-ex-id-hint">
          영문·숫자 4~16자
        </p>
        <p className="form_field-success" id="input-ex-id-success" role="status">
          사용 가능한 아이디입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-ex-pw">
          비밀번호
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Input id="input-ex-pw" type="password" size="sm" error defaultValue="1234" required aria-required="true" autoComplete="current-password" aria-invalid="true" aria-describedby="input-ex-pw-error" />
        <p className="form_field-error" id="input-ex-pw-error" role="alert">
          8자 이상, 영문·숫자·특수문자를 포함해 주세요.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="input-ex-email">
          이메일
        </label>
        <Input id="input-ex-email" type="email" size="sm" error defaultValue="user@" aria-invalid="true" aria-describedby="input-ex-email-error" autoComplete="email" />
        <p className="form_field-error" id="input-ex-email-error" role="alert">
          올바른 이메일 주소를 입력해 주세요. (예: name@example.com)
        </p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="로그인" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </form>)
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ye=["Playground","Basic","Standalone","Type","Kind","Size","Width","Group","Required","State","Clearable","Example"];export{s as Basic,b as Clearable,h as Example,u as Group,o as Kind,r as Playground,c as Required,p as Size,n as Standalone,f as State,d as Type,m as Width,ye as __namedExportsOrder,ge as default};
