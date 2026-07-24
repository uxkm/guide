import{j as l,v as o}from"./iframe-DbjMrqYU.js";import{F as a}from"./FormLayout-Azd1c7tN.js";import{G as M}from"./Grid-Cy6kHtXc.js";import{I as e}from"./Input-DZQw_Q7P.js";import{w as r}from"./story-renders-CrEYzOkG.js";import"./preload-helper-DUxc-Dqw.js";const T=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],K=[{name:"layout",type:"'vertical' | 'horizontal' | 'inline'",default:"vertical",description:"form_vertical · form_horizontal · form_inline"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비에 맞춤 (form_fit)"},{name:"compact",type:"boolean",default:"false",description:"좁은 필드 간격 (form_compact)"},{name:"label-align-start",type:"boolean",default:"false",description:"라벨 상단 정렬 (form_label-align-start)"},{name:"label-width",type:"'sm' | 'lg'",default:"—",description:"가로 레이아웃 라벨 너비"},{name:"tag",type:"string",default:"form",description:"루트 HTML 태그"}],U=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],X=[{name:"form",description:"폼 루트"},{name:"form_vertical · form_horizontal · form_inline",description:"레이아웃 방향"},{name:"form_fit · form_compact · form_label-align-start",description:"간격·정렬"},{name:"form_label-width-sm · form_label-width-lg",description:"라벨 너비"},{name:"form_field · form_field-label · form_field-hint · form_field-error",description:"필드 블록"},{name:"form_actions",description:"제출·취소 버튼 묶음"},{name:"form_required",description:"필수 표시 마크"}],O=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],q=[{name:"--form-label-width · --form-label-width-sm · --form-label-width-lg",default:"7.5rem · 5rem · 10rem",description:"가로 레이아웃 라벨 너비"},{name:"--form-field-gap",default:"var(--space-lg)",description:"필드 간격"},{name:"--form-inline-field-min-width",default:"8rem",description:"인라인 필드 최소 너비"},{name:"--form-actions-gap",default:"var(--space-sm)",description:"액션 버튼 간격"}],J=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Q=[{name:"children",description:"form_field · form_actions 등 폼 콘텐츠 (Vue default 슬롯 대응)"}],Y=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: label-align-start, label-width)와 동일한 의미입니다.",tables:[{columns:T,rows:K,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:J,rows:Q,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:U,rows:X,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:O,rows:q,codeColumn:"name"}]}],Z={layout:"vertical",fit:!1,compact:!1,labelAlignStart:!1,labelWidth:"",tag:"form"};function $({args:u}){return l.jsxs(a,{...u,noValidate:!0,children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"pg-input",children:"이름"}),l.jsx(e,{id:"pg-input",placeholder:"입력"})]}),l.jsx("div",{className:"form_actions",children:l.jsx(o,{type:"submit",variant:"filled",color:"primary",label:"제출"})})]})}const il={title:"Components/폼/FormLayout",id:"components-form-layout",component:a,tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","inline"],type:{name:"enum",summary:"'vertical' | 'horizontal' | 'inline'"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelAlignStart:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelWidth:{control:"select",options:["","sm","lg"],labels:{"":"기본",sm:"sm",lg:"lg"},type:{name:"enum",summary:"'sm' | 'lg'"}},tag:{control:"select",options:["form","div"],type:{name:"enum",summary:"'form' | 'div'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Y,docs:{description:{component:"form_field · form_actions를 세로·가로·인라인으로 배치하는 폼 레이아웃 래퍼입니다."}}}},t={parameters:{controls:{disable:!1}},args:{...Z},render:u=>l.jsx($,{args:u})},i={name:"세로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function VerticalExample() {
  return (
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-name">
          이름
        </label>
        <Input id="fl-name" placeholder="이름을 입력하세요" />
        <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-email">
          이메일
        </label>
        <Input id="fl-email" type="email" placeholder="name@example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-role">
          역할
        </label>
        <select id="fl-role" className="input" defaultValue="">
          <option value="">선택하세요</option>
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </select>
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(l.jsxs(a,{layout:"vertical",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-name",children:"이름"}),l.jsx(e,{id:"fl-name",placeholder:"이름을 입력하세요"}),l.jsx("p",{className:"form_field-hint",children:"2~20자 이내로 입력해 주세요."})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-email",children:"이메일"}),l.jsx(e,{id:"fl-email",type:"email",placeholder:"name@example.com"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-role",children:"역할"}),l.jsxs("select",{id:"fl-role",className:"input",defaultValue:"",children:[l.jsx("option",{value:"",children:"선택하세요"}),l.jsx("option",{children:"관리자"}),l.jsx("option",{children:"편집자"}),l.jsx("option",{children:"뷰어"})]})]})]}))},s={name:"가로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function HorizontalExample() {
  return (
    <FormLayout layout="horizontal">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-name">
          이름
        </label>
        <Input id="fl-h-name" placeholder="이름" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-email">
          이메일
        </label>
        <Input id="fl-h-email" type="email" placeholder="name@example.com" />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-bio">
          소개
        </label>
        <textarea id="fl-h-bio" className="textarea" placeholder="간단한 자기소개" />
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(l.jsxs(a,{layout:"horizontal",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-h-name",children:"이름"}),l.jsx(e,{id:"fl-h-name",placeholder:"이름"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-h-email",children:"이메일"}),l.jsx(e,{id:"fl-h-email",type:"email",placeholder:"name@example.com"}),l.jsx("p",{className:"form_field-hint",children:"업무용 이메일을 입력해 주세요."})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-h-bio",children:"소개"}),l.jsx("textarea",{id:"fl-h-bio",className:"textarea",placeholder:"간단한 자기소개"})]})]}))},m={name:"가로 — 레이블 정렬·너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function HorizontalAlignExample() {
  return (
    <>
      <FormLayout layout="horizontal" labelAlignStart labelWidth="sm">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-city">
            도시
          </label>
          <Input id="fl-hs-city" placeholder="서울" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" labelWidth="lg">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-company">
            회사명
          </label>
          <Input id="fl-hl-company" placeholder="UXKM" />
        </div>
      </FormLayout>
    </>
  );
}`,language:"tsx"}}},render:r(l.jsxs(l.Fragment,{children:[l.jsxs(a,{layout:"horizontal",labelAlignStart:!0,labelWidth:"sm",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-hs-city",children:"도시"}),l.jsx(e,{id:"fl-hs-city",placeholder:"서울"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-hs-zip",children:"우편번호"}),l.jsx(e,{id:"fl-hs-zip",placeholder:"00000"})]})]}),l.jsxs(a,{layout:"horizontal",labelWidth:"lg",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-hl-company",children:"회사명"}),l.jsx(e,{id:"fl-hl-company",placeholder:"UXKM"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-hl-dept",children:"부서"}),l.jsx(e,{id:"fl-hl-dept",placeholder:"디자인팀"})]})]})]}))},d={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function InlineExample() {
  return (
    <FormLayout layout="inline">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-keyword">
          키워드
        </label>
        <Input id="fl-i-keyword" type="search" placeholder="검색어" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="검색" />
        <Button variant="ghost" type="reset" label="초기화" />
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(l.jsxs(a,{layout:"inline",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-i-keyword",children:"키워드"}),l.jsx(e,{id:"fl-i-keyword",type:"search",placeholder:"검색어"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-i-status",children:"상태"}),l.jsxs("select",{id:"fl-i-status",className:"input",children:[l.jsx("option",{children:"전체"}),l.jsx("option",{children:"활성"}),l.jsx("option",{children:"비활성"})]})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-i-date",children:"기간"}),l.jsx(e,{id:"fl-i-date",type:"date"})]}),l.jsxs("div",{className:"form_actions",children:[l.jsx(o,{variant:"filled",color:"primary",type:"submit",label:"검색"}),l.jsx(o,{variant:"ghost",type:"reset",label:"초기화"})]})]}))},c={name:"그리드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Grid from '@uxkm/ui-react/components/Grid.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function GridExample() {
  return (
    <FormLayout layout="vertical">
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-first">
            이름
          </label>
          <Input id="fl-g-first" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-last">
            성
          </label>
          <Input id="fl-g-last" placeholder="성" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-g-address">
            주소
          </label>
          <Input id="fl-g-address" placeholder="도로명 주소" />
        </div>
      </Grid>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(l.jsx(a,{layout:"vertical",children:l.jsxs(M,{itemSpan:6,children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-g-first",children:"이름"}),l.jsx(e,{id:"fl-g-first",placeholder:"이름"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-g-last",children:"성"}),l.jsx(e,{id:"fl-g-last",placeholder:"성"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-g-phone",children:"전화번호"}),l.jsx(e,{id:"fl-g-phone",type:"tel",placeholder:"010-0000-0000"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-g-mobile",children:"휴대폰"}),l.jsx(e,{id:"fl-g-mobile",type:"tel",placeholder:"010-0000-0000"})]}),l.jsxs("div",{className:"form_field grid_col-span-12",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-g-address",children:"주소"}),l.jsx(e,{id:"fl-g-address",placeholder:"도로명 주소"})]})]})}))},n={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function WidthExample() {
  return (
    <>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-default">
            기본 너비
          </label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-fit">
            제한 너비
          </label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
    </>
  );
}`,language:"tsx"}}},render:r(l.jsxs(l.Fragment,{children:[l.jsx(a,{layout:"vertical",children:l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-w-default",children:"기본 너비"}),l.jsx(e,{id:"fl-w-default",placeholder:"부모 100%"})]})}),l.jsx(a,{layout:"vertical",fit:!0,children:l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-w-fit",children:"제한 너비"}),l.jsx(e,{id:"fl-w-fit",placeholder:"form_fit — 최대 320px"})]})}),l.jsx(a,{layout:"horizontal",children:l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-w-h-full",children:"가로 레이아웃"}),l.jsx(e,{id:"fl-w-h-full",placeholder:"입력 열이 남은 공간을 채움"})]})})]}))},f={name:"액션 영역",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ActionsExample() {
  return (
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-a-title">
          제목
        </label>
        <Input id="fl-a-title" placeholder="제목" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="저장" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(l.jsxs(l.Fragment,{children:[l.jsxs(a,{layout:"vertical",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-a-title",children:"제목"}),l.jsx(e,{id:"fl-a-title",placeholder:"제목"})]}),l.jsxs("div",{className:"form_actions",children:[l.jsx(o,{variant:"filled",color:"primary",type:"submit",label:"저장"}),l.jsx(o,{variant:"ghost",type:"button",label:"취소"})]})]}),l.jsxs(a,{layout:"horizontal",children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-a2-title",children:"제목"}),l.jsx(e,{id:"fl-a2-title",placeholder:"제목"})]}),l.jsxs("div",{className:"form_actions",children:[l.jsx(o,{variant:"filled",color:"primary",type:"submit",label:"저장"}),l.jsx(o,{variant:"ghost",type:"button",label:"취소"})]})]})]}))},p={name:"전체 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Grid from '@uxkm/ui-react/components/Grid.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact>
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-id">
            아이디
          </label>
          <Input id="fl-ex-id" placeholder="아이디" />
        </div>
        {/* … */}
      </Grid>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="가입하기" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:r(l.jsxs(a,{layout:"vertical",compact:!0,children:[l.jsxs(M,{itemSpan:6,children:[l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-ex-id",children:"아이디"}),l.jsx(e,{id:"fl-ex-id",placeholder:"아이디"}),l.jsx("p",{className:"form_field-hint",children:"영문·숫자 4~16자"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-ex-pw",children:"비밀번호"}),l.jsx(e,{id:"fl-ex-pw",type:"password",placeholder:"비밀번호"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-ex-name",children:"이름"}),l.jsx(e,{id:"fl-ex-name",placeholder:"이름"})]}),l.jsxs("div",{className:"form_field",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-ex-email",children:"이메일"}),l.jsx(e,{id:"fl-ex-email",type:"email",placeholder:"name@example.com"})]}),l.jsxs("div",{className:"form_field grid_col-span-12",children:[l.jsx("label",{className:"form_field-label",htmlFor:"fl-ex-memo",children:"메모"}),l.jsx("textarea",{id:"fl-ex-memo",className:"textarea",rows:3,placeholder:"추가 정보"})]})]}),l.jsxs("div",{className:"form_actions",children:[l.jsx(o,{variant:"filled",color:"primary",type:"submit",label:"가입하기"}),l.jsx(o,{variant:"ghost",type:"button",label:"취소"})]})]}))};var h,b,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <PlaygroundFields args={args} />
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,v,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '세로',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function VerticalExample() {
  return (
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-name">
          이름
        </label>
        <Input id="fl-name" placeholder="이름을 입력하세요" />
        <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-email">
          이메일
        </label>
        <Input id="fl-email" type="email" placeholder="name@example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-role">
          역할
        </label>
        <select id="fl-role" className="input" defaultValue="">
          <option value="">선택하세요</option>
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </select>
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-name">
          이름
        </label>
        <Input id="fl-name" placeholder="이름을 입력하세요" />
        <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-email">
          이메일
        </label>
        <Input id="fl-email" type="email" placeholder="name@example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-role">
          역할
        </label>
        <select id="fl-role" className="input" defaultValue="">
          <option value="">선택하세요</option>
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </select>
      </div>
    </FormLayout>)
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var N,F,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '가로',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function HorizontalExample() {
  return (
    <FormLayout layout="horizontal">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-name">
          이름
        </label>
        <Input id="fl-h-name" placeholder="이름" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-email">
          이메일
        </label>
        <Input id="fl-h-email" type="email" placeholder="name@example.com" />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-bio">
          소개
        </label>
        <textarea id="fl-h-bio" className="textarea" placeholder="간단한 자기소개" />
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="horizontal">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-name">
          이름
        </label>
        <Input id="fl-h-name" placeholder="이름" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-email">
          이메일
        </label>
        <Input id="fl-h-email" type="email" placeholder="name@example.com" />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-bio">
          소개
        </label>
        <textarea id="fl-h-bio" className="textarea" placeholder="간단한 자기소개" />
      </div>
    </FormLayout>)
}`,...(j=(F=s.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var g,L,I;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '가로 — 레이블 정렬·너비',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function HorizontalAlignExample() {
  return (
    <>
      <FormLayout layout="horizontal" labelAlignStart labelWidth="sm">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-city">
            도시
          </label>
          <Input id="fl-hs-city" placeholder="서울" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" labelWidth="lg">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-company">
            회사명
          </label>
          <Input id="fl-hl-company" placeholder="UXKM" />
        </div>
      </FormLayout>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <FormLayout layout="horizontal" labelAlignStart labelWidth="sm">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-city">
            도시
          </label>
          <Input id="fl-hs-city" placeholder="서울" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-zip">
            우편번호
          </label>
          <Input id="fl-hs-zip" placeholder="00000" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" labelWidth="lg">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-company">
            회사명
          </label>
          <Input id="fl-hl-company" placeholder="UXKM" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-dept">
            부서
          </label>
          <Input id="fl-hl-dept" placeholder="디자인팀" />
        </div>
      </FormLayout>
    </>)
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var k,w,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '인라인',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function InlineExample() {
  return (
    <FormLayout layout="inline">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-keyword">
          키워드
        </label>
        <Input id="fl-i-keyword" type="search" placeholder="검색어" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="검색" />
        <Button variant="ghost" type="reset" label="초기화" />
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="inline">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-keyword">
          키워드
        </label>
        <Input id="fl-i-keyword" type="search" placeholder="검색어" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-status">
          상태
        </label>
        <select id="fl-i-status" className="input">
          <option>전체</option>
          <option>활성</option>
          <option>비활성</option>
        </select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-date">
          기간
        </label>
        <Input id="fl-i-date" type="date" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="검색" />
        <Button variant="ghost" type="reset" label="초기화" />
      </div>
    </FormLayout>)
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,G,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '그리드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Grid from '@uxkm/ui-react/components/Grid.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function GridExample() {
  return (
    <FormLayout layout="vertical">
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-first">
            이름
          </label>
          <Input id="fl-g-first" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-last">
            성
          </label>
          <Input id="fl-g-last" placeholder="성" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-g-address">
            주소
          </label>
          <Input id="fl-g-address" placeholder="도로명 주소" />
        </div>
      </Grid>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="vertical">
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-first">
            이름
          </label>
          <Input id="fl-g-first" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-last">
            성
          </label>
          <Input id="fl-g-last" placeholder="성" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-phone">
            전화번호
          </label>
          <Input id="fl-g-phone" type="tel" placeholder="010-0000-0000" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-mobile">
            휴대폰
          </label>
          <Input id="fl-g-mobile" type="tel" placeholder="010-0000-0000" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-g-address">
            주소
          </label>
          <Input id="fl-g-address" placeholder="도로명 주소" />
        </div>
      </Grid>
    </FormLayout>)
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var C,S,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        story: '폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function WidthExample() {
  return (
    <>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-default">
            기본 너비
          </label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-fit">
            제한 너비
          </label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-default">
            기본 너비
          </label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-fit">
            제한 너비
          </label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-h-full">
            가로 레이아웃
          </label>
          <Input id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움" />
        </div>
      </FormLayout>
    </>)
}`,...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,W,R;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '액션 영역',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ActionsExample() {
  return (
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-a-title">
          제목
        </label>
        <Input id="fl-a-title" placeholder="제목" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="저장" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-a-title">
            제목
          </label>
          <Input id="fl-a-title" placeholder="제목" />
        </div>
        <div className="form_actions">
          <Button variant="filled" color="primary" type="submit" label="저장" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-a2-title">
            제목
          </label>
          <Input id="fl-a2-title" placeholder="제목" />
        </div>
        <div className="form_actions">
          <Button variant="filled" color="primary" type="submit" label="저장" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>
    </>)
}`,...(R=(W=f.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var V,D,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '전체 예시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Grid from '@uxkm/ui-react/components/Grid.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact>
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-id">
            아이디
          </label>
          <Input id="fl-ex-id" placeholder="아이디" />
        </div>
        {/* … */}
      </Grid>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="가입하기" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="vertical" compact>
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-id">
            아이디
          </label>
          <Input id="fl-ex-id" placeholder="아이디" />
          <p className="form_field-hint">영문·숫자 4~16자</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-pw">
            비밀번호
          </label>
          <Input id="fl-ex-pw" type="password" placeholder="비밀번호" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-name">
            이름
          </label>
          <Input id="fl-ex-name" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-email">
            이메일
          </label>
          <Input id="fl-ex-email" type="email" placeholder="name@example.com" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-ex-memo">
            메모
          </label>
          <textarea id="fl-ex-memo" className="textarea" rows={3} placeholder="추가 정보" />
        </div>
      </Grid>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="가입하기" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>)
}`,...(H=(D=p.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const sl=["Playground","Vertical","Horizontal","HorizontalAlign","Inline","GridDemo","Width","Actions","Example"];export{f as Actions,p as Example,c as GridDemo,s as Horizontal,m as HorizontalAlign,d as Inline,t as Playground,i as Vertical,n as Width,sl as __namedExportsOrder,il as default};
