import{r as f,u as ze,c as ke,n as Fe,j as e,v as q,a as Ce,b as Pe}from"./iframe-DbjMrqYU.js";import{F as Ee}from"./FormLayout-Azd1c7tN.js";import{w as t}from"./story-renders-CrEYzOkG.js";import{e as qe,a as Te}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const Ve=new Set(["sm","md","lg"]),Be=Pe("Select",{defaults:{size:"md"},booleanProps:new Set(["disabled","error","open","block","custom","selectText"]),skipProps:["modelValue"],selfClosing:!1});function l({ripple:i,size:p="md",disabled:c,error:a,placeholder:r,open:k,block:m,custom:T,selectText:V,listSize:B,value:s,defaultValue:F,children:C,className:P,onChange:n,...D}){const E=f.useRef(null),d=Ve.has(p)?p:"md",[Ne,R]=f.useState(()=>s??F);f.useEffect(()=>{s!==void 0&&R(s)},[s]);const u=s!==void 0?s:Ne;ze(Be,{ripple:i,size:d,disabled:c,error:a,placeholder:r,open:k,block:m,custom:T,selectText:V,listSize:B,value:u},ke({default:C}),E,{className:P,onChange:n,...D});const ge=f.useMemo(()=>{const o=["input"];return d==="sm"&&o.push("input_sm"),d==="lg"&&o.push("input_lg"),m&&o.push("input_block"),a&&o.push("is-error"),o},[d,m,a]),{class:Ge,value:Je,defaultValue:Ke,onChange:Qe,size:Ye,...je}=D,L=Fe(je);function ye(o){R(o.target.value),n==null||n(o)}if(T){const o=C??u??r;return e.jsx(q,{ref:E,variant:"select",className:P,size:d,block:m,selectText:V,open:k,error:a,placeholder:!u&&!!r,disabled:c,haspopup:"listbox",expanded:k,invalid:a,ripple:i!==!1,...L,children:o})}const we=s!==void 0||n!=null?{value:u??""}:F!==void 0?{defaultValue:F}:r?{defaultValue:""}:{};return e.jsxs("select",{ref:E,className:Ce(ge,P),disabled:c,size:B,"aria-invalid":a?"true":void 0,...we,...L,onChange:ye,children:[r?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:r}):null,C]})}l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const De=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Re=[{name:"model-value",type:"string | number",default:"—",description:"v-model 바인딩 값"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"input_sm · btn_sm 등 크기"},{name:"list-size",type:"number",default:"—",description:"네이티브 size — multiple 표시 행 수"},{name:"placeholder",type:"string",default:"—",description:"미선택 placeholder"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"error",type:"boolean",default:"false",description:"오류 상태 (is-error)"},{name:"open",type:"boolean",default:"false",description:"custom 트리거 열림 (is-open)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"custom",type:"boolean",default:"false",description:"button 트리거 + listbox 패턴"},{name:"select-text",type:"boolean",default:"false",description:"텍스트형 트리거 (btn_select-text)"},qe],Le=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ae=[{name:"input (native)",description:"네이티브 select 스타일"},{name:"btn_select · btn_select-text · btn_select-caret",description:"custom 트리거"},{name:"btn_select-placeholder · is-open",description:"트리거 상태"},{name:"select_dropdown · select_option",description:"드롭다운 패널 (HTML 마크업)"},{name:"is-error · is-disabled",description:"상태"},...Te],Ue=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Ie=[{name:"update:modelValue",description:"선택 값 변경 시 (v-model)"}],Me=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Oe=[{name:"--select-padding-right · --select-padding-right-sm · --select-padding-right-lg",default:"2.25rem · 2rem · 2.5rem",description:"캐럿 공간(우측 패딩)"},{name:"--select-caret-offset · --select-caret-offset-sm · --select-caret-offset-lg",default:"0.65rem · 0.5rem · 0.85rem",description:"캐럿 위치"},{name:"--select-caret-size · --select-caret-size-sm · --select-caret-size-lg",default:"1em · 0.875em · 1.125em",description:"캐럿 아이콘 크기"}],Xe=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],We=[{name:"children",description:"option 요소 또는 custom 트리거 라벨 (Vue default 슬롯 대응)"}],He=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 model-value · select-text · list-size는 value · selectText · listSize로 다룹니다.",tables:[{columns:De,rows:Re,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:Xe,rows:We,codeColumn:"name"}]},{title:"API · Events",description:"Vue update:modelValue는 React onChange(event)에 대응합니다.",tables:[{columns:Ue,rows:Ie,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Le,rows:Ae,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Me,rows:Oe,codeColumn:"name"}]}],Ze={size:"md",disabled:!1,error:!1,placeholder:"선택하세요",open:!0,block:!1,custom:!1,selectText:!1},il={title:"Components/폼/Select",id:"components-select",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},custom:{control:"boolean",type:{name:"boolean",summary:"boolean"}},selectText:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:He,docs:{description:{component:"네이티브 select와 커스텀 트리거를 제공하는 Select 컴포넌트입니다."}}}},b={parameters:{controls:{disable:!1}},args:{...Ze},render:(i,{updateArgs:p})=>i.custom?e.jsx(l,{...i}):e.jsxs(l,{...i,onChange:c=>p({value:c.target.value}),children:[e.jsx("option",{value:"1",children:"옵션 1"}),e.jsx("option",{value:"2",children:"옵션 2"})]})},h={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function TypeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-type-native">
          네이티브 — select.input
        </label>
        <Select id="select-type-native" placeholder="선택하세요" defaultValue="옵션 2">
          <option>옵션 1</option>
          <option>옵션 2</option>
          <option>옵션 3</option>
        </Select>
        <p className="form_field-hint">폼 필드·간단한 선택에 권장합니다.</p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom>커스텀 — btn_select</Select>
        <Select custom selectText>
          커스텀 — btn_select-text
        </Select>
      </div>
      <p className="form_field-hint">
        btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.
      </p>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-type-native",children:"네이티브 — select.input"}),e.jsxs(l,{id:"select-type-native",placeholder:"선택하세요",defaultValue:"옵션 2",children:[e.jsx("option",{children:"옵션 1"}),e.jsx("option",{children:"옵션 2"}),e.jsx("option",{children:"옵션 3"})]}),e.jsx("p",{className:"form_field-hint",children:"폼 필드·간단한 선택에 권장합니다."})]}),e.jsxs("div",{className:"btn_row btn_row-wrap",children:[e.jsx(l,{custom:!0,children:"커스텀 — btn_select"}),e.jsx(l,{custom:!0,selectText:!0,children:"커스텀 — btn_select-text"})]}),e.jsx("p",{className:"form_field-hint",children:"btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다."})]}))},x={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 힌트 텍스트가 포함된 폼 필드입니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="select-role">
        역할
      </label>
      <Select id="select-role" placeholder="선택하세요">
        <option>관리자</option>
        <option>편집자</option>
        <option>뷰어</option>
      </Select>
      <p className="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
    </div>
  );
}`,language:"tsx"}}},render:t(e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-role",children:"역할"}),e.jsxs(l,{id:"select-role",placeholder:"선택하세요",children:[e.jsx("option",{children:"관리자"}),e.jsx("option",{children:"편집자"}),e.jsx("option",{children:"뷰어"})]}),e.jsx("p",{className:"form_field-hint",children:"계정에 부여할 권한을 선택해 주세요."})]}))},_={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function StandaloneExample() {
  return (
    <>
      <Select aria-label="상태 필터">
        <option>전체</option>
        <option>활성</option>
        <option>비활성</option>
      </Select>
      <Select aria-label="정렬 기준" value="이름순">
        <option>최신순</option>
        <option>이름순</option>
        <option>오래된순</option>
      </Select>
      <Select aria-label="비활성 셀렉트" disabled>
        <option>수정할 수 없음</option>
      </Select>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs(l,{"aria-label":"상태 필터",children:[e.jsx("option",{children:"전체"}),e.jsx("option",{children:"활성"}),e.jsx("option",{children:"비활성"})]}),e.jsxs(l,{"aria-label":"정렬 기준",value:"이름순",children:[e.jsx("option",{children:"최신순"}),e.jsx("option",{children:"이름순"}),e.jsx("option",{children:"오래된순"})]}),e.jsx(l,{"aria-label":"비활성 셀렉트",disabled:!0,children:e.jsx("option",{children:"수정할 수 없음"})})]}))},v={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-sm">
          Small — 네이티브
        </label>
        <Select id="select-size-sm" size="sm">
          <option>input_sm</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-md">
          Medium — 네이티브
        </label>
        <Select id="select-size-md">
          <option>기본 크기</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-lg">
          Large — 네이티브
        </label>
        <Select id="select-size-lg" size="lg">
          <option>input_lg</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom size="sm">
          btn_sm
        </Select>
        <Select custom>기본</Select>
        <Select custom size="lg">
          btn_lg
        </Select>
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-size-sm",children:"Small — 네이티브"}),e.jsxs(l,{id:"select-size-sm",size:"sm",children:[e.jsx("option",{children:"input_sm"}),e.jsx("option",{children:"옵션 2"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-size-md",children:"Medium — 네이티브"}),e.jsxs(l,{id:"select-size-md",children:[e.jsx("option",{children:"기본 크기"}),e.jsx("option",{children:"옵션 2"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-size-lg",children:"Large — 네이티브"}),e.jsxs(l,{id:"select-size-lg",size:"lg",children:[e.jsx("option",{children:"input_lg"}),e.jsx("option",{children:"옵션 2"})]})]}),e.jsxs("div",{className:"btn_row btn_row-wrap",children:[e.jsx(l,{custom:!0,size:"sm",children:"btn_sm"}),e.jsx(l,{custom:!0,children:"기본"}),e.jsx(l,{custom:!0,size:"lg",children:"btn_lg"})]})]}))},S={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function WidthExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-width-full">
          전체 너비
        </label>
        <Select id="select-width-full">
          <option>width: 100%</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="select-width-fit">
          제한 너비
        </label>
        <Select id="select-width-fit">
          <option>form_field_fit — 최대 320px</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <Select className="input_fit" aria-label="제한 너비 단독">
        <option>input_fit 단독 — 최대 320px</option>
        <option>옵션 2</option>
      </Select>
      <Select custom block>
        btn_block — 전체 너비 트리거
      </Select>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-width-full",children:"전체 너비"}),e.jsxs(l,{id:"select-width-full",children:[e.jsx("option",{children:"width: 100%"}),e.jsx("option",{children:"옵션 2"})]})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-width-fit",children:"제한 너비"}),e.jsxs(l,{id:"select-width-fit",children:[e.jsx("option",{children:"form_field_fit — 최대 320px"}),e.jsx("option",{children:"옵션 2"})]})]}),e.jsxs(l,{className:"input_fit","aria-label":"제한 너비 단독",children:[e.jsx("option",{children:"input_fit 단독 — 최대 320px"}),e.jsx("option",{children:"옵션 2"})]}),e.jsx(l,{custom:!0,block:!0,children:"btn_block — 전체 너비 트리거"})]}))},N={name:"플레이스홀더",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function PlaceholderExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-placeholder-native">
          네이티브
        </label>
        <Select id="select-placeholder-native" required placeholder="옵션을 선택하세요">
          <option value="a">옵션 A</option>
          <option value="b">옵션 B</option>
          <option value="c">옵션 C</option>
        </Select>
        <p className="form_field-hint">
          required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.
        </p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom placeholder="옵션을 선택하세요">
          옵션을 선택하세요
        </Select>
        <Select custom selectText placeholder="정렬 기준">
          정렬 기준
        </Select>
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-placeholder-native",children:"네이티브"}),e.jsxs(l,{id:"select-placeholder-native",required:!0,placeholder:"옵션을 선택하세요",children:[e.jsx("option",{value:"a",children:"옵션 A"}),e.jsx("option",{value:"b",children:"옵션 B"}),e.jsx("option",{value:"c",children:"옵션 C"})]}),e.jsx("p",{className:"form_field-hint",children:"required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다."})]}),e.jsxs("div",{className:"btn_row btn_row-wrap",children:[e.jsx(l,{custom:!0,placeholder:"옵션을 선택하세요",children:"옵션을 선택하세요"}),e.jsx(l,{custom:!0,selectText:!0,placeholder:"정렬 기준",children:"정렬 기준"})]})]}))},g={name:"옵션 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function OptgroupExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="select-optgroup">
        지역
      </label>
      <Select id="select-optgroup" placeholder="선택하세요">
        <optgroup label="수도권">
          <option>서울특별시</option>
          <option>경기도</option>
          <option>인천광역시</option>
        </optgroup>
        <optgroup label="영남권">
          <option>부산광역시</option>
          <option>대구광역시</option>
          <option>울산광역시</option>
        </optgroup>
        <optgroup label="호남권">
          <option>광주광역시</option>
          <option>전라남도</option>
          <option>전라북도</option>
        </optgroup>
      </Select>
    </div>
  );
}`,language:"tsx"}}},render:t(e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-optgroup",children:"지역"}),e.jsxs(l,{id:"select-optgroup",placeholder:"선택하세요",children:[e.jsxs("optgroup",{label:"수도권",children:[e.jsx("option",{children:"서울특별시"}),e.jsx("option",{children:"경기도"}),e.jsx("option",{children:"인천광역시"})]}),e.jsxs("optgroup",{label:"영남권",children:[e.jsx("option",{children:"부산광역시"}),e.jsx("option",{children:"대구광역시"}),e.jsx("option",{children:"울산광역시"})]}),e.jsxs("optgroup",{label:"호남권",children:[e.jsx("option",{children:"광주광역시"}),e.jsx("option",{children:"전라남도"}),e.jsx("option",{children:"전라북도"})]})]})]}))},j={name:"다중 선택",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function MultipleExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="select-multiple">
        관심 분야
      </label>
      <Select
        id="select-multiple"
        multiple
        listSize={5}
        aria-describedby="select-multiple-hint"
        defaultValue={['UX 디자인', '접근성']}
      >
        <option>UX 디자인</option>
        <option>UI 개발</option>
        <option>접근성</option>
        <option>디자인 시스템</option>
        <option>리서치</option>
        <option>프로토타이핑</option>
      </Select>
      <p className="form_field-hint" id="select-multiple-hint">
        복수 선택 시 listSize로 표시 행 수를 지정합니다. (네이티브 size 속성)
      </p>
    </div>
  );
}`,language:"tsx"}}},render:t(e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-multiple",children:"관심 분야"}),e.jsxs(l,{id:"select-multiple",multiple:!0,listSize:5,"aria-describedby":"select-multiple-hint",defaultValue:["UX 디자인","접근성"],children:[e.jsx("option",{children:"UX 디자인"}),e.jsx("option",{children:"UI 개발"}),e.jsx("option",{children:"접근성"}),e.jsx("option",{children:"디자인 시스템"}),e.jsx("option",{children:"리서치"}),e.jsx("option",{children:"프로토타이핑"})]}),e.jsx("p",{className:"form_field-hint",id:"select-multiple-hint",children:"복수 선택 시 listSize로 표시 행 수를 지정합니다. (네이티브 size 속성)"})]}))},y={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다."},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-default">
          기본
        </label>
        <Select id="select-state-default">
          <option>선택 가능</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-disabled">
          비활성
        </label>
        <Select id="select-state-disabled" disabled defaultValue="수정할 수 없음">
          <option>수정할 수 없음</option>
          <option>옵션 2</option>
        </Select>
        <p className="form_field-hint">disabled 속성으로 선택을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-error">
          에러
        </label>
        <Select id="select-state-error" error placeholder="선택하세요">
          <option value="a">옵션 A</option>
        </Select>
        <p className="form_field-error" id="select-state-error-msg" role="alert">
          필수 항목입니다. 옵션을 선택해 주세요.
        </p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom open>
          열림
        </Select>
        <Select custom disabled>
          비활성
        </Select>
        <Select custom error>
          에러
        </Select>
        <Select custom open selectText>
          텍스트형 열림
        </Select>
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-state-default",children:"기본"}),e.jsxs(l,{id:"select-state-default",children:[e.jsx("option",{children:"선택 가능"}),e.jsx("option",{children:"옵션 2"})]})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-state-disabled",children:"비활성"}),e.jsxs(l,{id:"select-state-disabled",disabled:!0,defaultValue:"수정할 수 없음",children:[e.jsx("option",{children:"수정할 수 없음"}),e.jsx("option",{children:"옵션 2"})]}),e.jsx("p",{className:"form_field-hint",children:"disabled 속성으로 선택을 막습니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-state-error",children:"에러"}),e.jsx(l,{id:"select-state-error",error:!0,placeholder:"선택하세요",children:e.jsx("option",{value:"a",children:"옵션 A"})}),e.jsx("p",{className:"form_field-error",id:"select-state-error-msg",role:"alert",children:"필수 항목입니다. 옵션을 선택해 주세요."})]}),e.jsxs("div",{className:"btn_row btn_row-wrap",children:[e.jsx(l,{custom:!0,open:!0,children:"열림"}),e.jsx(l,{custom:!0,disabled:!0,children:"비활성"}),e.jsx(l,{custom:!0,error:!0,children:"에러"}),e.jsx(l,{custom:!0,open:!0,selectText:!0,children:"텍스트형 열림"})]})]}))},w={name:"커스텀 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup="listbox" · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다.'},source:{code:`import Select from '@uxkm/ui-react/components/Select.jsx';

export function CustomExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Select custom>서울특별시</Select>
        <Select custom selectText>
          최신순
        </Select>
        <Select custom selectText size="sm">
          필터
        </Select>
      </div>
      <p className="form_field-hint">
        상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요.
      </p>
    </>
  );
}`,language:"tsx"}}},render:t(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"btn_row btn_row-wrap",children:[e.jsx(l,{custom:!0,children:"서울특별시"}),e.jsx(l,{custom:!0,selectText:!0,children:"최신순"}),e.jsx(l,{custom:!0,selectText:!0,size:"sm",children:"필터"})]}),e.jsx("p",{className:"form_field-hint",children:"상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요."})]}))},z={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Select from '@uxkm/ui-react/components/Select.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-country">
          국가<span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Select
          id="select-ex-country"
          size="sm"
          className="is-success"
          value="kr"
          required
          aria-required="true"
          aria-invalid="false"
          aria-describedby="select-ex-country-success"
        >
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </Select>
        <p className="form_field-success" id="select-ex-country-success" role="status">
          지원되는 국가입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-plan">
          요금제<span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Select
          id="select-ex-plan"
          size="sm"
          error
          required
          placeholder="요금제를 선택하세요"
          aria-required="true"
          aria-invalid="true"
          aria-describedby="select-ex-plan-error"
        >
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </Select>
        <p className="form_field-error" id="select-ex-plan-error" role="alert">
          요금제 선택은 필수입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-lang">
          언어
        </label>
        <Select id="select-ex-lang" size="sm" value="ko">
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </Select>
        <p className="form_field-hint">서비스 표시 언어를 선택합니다.</p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="가입하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:t(e.jsxs(Ee,{layout:"vertical",compact:!0,noValidate:!0,"aria-labelledby":"example-heading",children:[e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"select-ex-country",children:["국가",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsxs(l,{id:"select-ex-country",size:"sm",className:"is-success",value:"kr",required:!0,"aria-required":"true","aria-invalid":"false","aria-describedby":"select-ex-country-success",children:[e.jsx("option",{value:"kr",children:"대한민국"}),e.jsx("option",{value:"us",children:"미국"}),e.jsx("option",{value:"jp",children:"일본"})]}),e.jsx("p",{className:"form_field-success",id:"select-ex-country-success",role:"status",children:"지원되는 국가입니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsxs("label",{className:"form_field-label",htmlFor:"select-ex-plan",children:["요금제",e.jsx("span",{className:"form_field-required","aria-hidden":"true",children:"*"})]}),e.jsxs(l,{id:"select-ex-plan",size:"sm",error:!0,required:!0,placeholder:"요금제를 선택하세요","aria-required":"true","aria-invalid":"true","aria-describedby":"select-ex-plan-error",children:[e.jsx("option",{value:"free",children:"Free"}),e.jsx("option",{value:"pro",children:"Pro"}),e.jsx("option",{value:"enterprise",children:"Enterprise"})]}),e.jsx("p",{className:"form_field-error",id:"select-ex-plan-error",role:"alert",children:"요금제 선택은 필수입니다."})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"select-ex-lang",children:"언어"}),e.jsxs(l,{id:"select-ex-lang",size:"sm",value:"ko",children:[e.jsx("option",{value:"ko",children:"한국어"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"ja",children:"日本語"})]}),e.jsx("p",{className:"form_field-hint",children:"서비스 표시 언어를 선택합니다."})]}),e.jsxs("div",{className:"form_actions",children:[e.jsx(q,{variant:"filled",color:"primary",size:"sm",type:"submit",label:"가입하기"}),e.jsx(q,{variant:"ghost",size:"sm",type:"button",label:"취소"})]})]}))};var A,U,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }) => args.custom ? <Select {...args} /> : <Select {...args} onChange={event => updateArgs({
    value: event.target.value
  })}>
        <option value="1">옵션 1</option>
        <option value="2">옵션 2</option>
      </Select>
}`,...(I=(U=b.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var M,O,X;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function TypeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-type-native">
          네이티브 — select.input
        </label>
        <Select id="select-type-native" placeholder="선택하세요" defaultValue="옵션 2">
          <option>옵션 1</option>
          <option>옵션 2</option>
          <option>옵션 3</option>
        </Select>
        <p className="form_field-hint">폼 필드·간단한 선택에 권장합니다.</p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom>커스텀 — btn_select</Select>
        <Select custom selectText>
          커스텀 — btn_select-text
        </Select>
      </div>
      <p className="form_field-hint">
        btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-type-native">
          네이티브 — select.input
        </label>
        <Select id="select-type-native" placeholder="선택하세요" defaultValue="옵션 2">
          <option>옵션 1</option>
          <option>옵션 2</option>
          <option>옵션 3</option>
        </Select>
        <p className="form_field-hint">폼 필드·간단한 선택에 권장합니다.</p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom>커스텀 — btn_select</Select>
        <Select custom selectText>
          커스텀 — btn_select-text
        </Select>
      </div>
      <p className="form_field-hint">
        btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.
      </p>
    </>)
}`,...(X=(O=h.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var W,H,Z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="select-role">
        역할
      </label>
      <Select id="select-role" placeholder="선택하세요">
        <option>관리자</option>
        <option>편집자</option>
        <option>뷰어</option>
      </Select>
      <p className="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <label className="form_field-label" htmlFor="select-role">
        역할
      </label>
      <Select id="select-role" placeholder="선택하세요">
        <option>관리자</option>
        <option>편집자</option>
        <option>뷰어</option>
      </Select>
      <p className="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
    </div>)
}`,...(Z=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var G,J,K;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        story: 'form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function StandaloneExample() {
  return (
    <>
      <Select aria-label="상태 필터">
        <option>전체</option>
        <option>활성</option>
        <option>비활성</option>
      </Select>
      <Select aria-label="정렬 기준" value="이름순">
        <option>최신순</option>
        <option>이름순</option>
        <option>오래된순</option>
      </Select>
      <Select aria-label="비활성 셀렉트" disabled>
        <option>수정할 수 없음</option>
      </Select>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Select aria-label="상태 필터">
        <option>전체</option>
        <option>활성</option>
        <option>비활성</option>
      </Select>
      <Select aria-label="정렬 기준" value="이름순">
        <option>최신순</option>
        <option>이름순</option>
        <option>오래된순</option>
      </Select>
      <Select aria-label="비활성 셀렉트" disabled>
        <option>수정할 수 없음</option>
      </Select>
    </>)
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,$;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        story: 'input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-sm">
          Small — 네이티브
        </label>
        <Select id="select-size-sm" size="sm">
          <option>input_sm</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-md">
          Medium — 네이티브
        </label>
        <Select id="select-size-md">
          <option>기본 크기</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-lg">
          Large — 네이티브
        </label>
        <Select id="select-size-lg" size="lg">
          <option>input_lg</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom size="sm">
          btn_sm
        </Select>
        <Select custom>기본</Select>
        <Select custom size="lg">
          btn_lg
        </Select>
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
        <label className="form_field-label" htmlFor="select-size-sm">
          Small — 네이티브
        </label>
        <Select id="select-size-sm" size="sm">
          <option>input_sm</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-md">
          Medium — 네이티브
        </label>
        <Select id="select-size-md">
          <option>기본 크기</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-size-lg">
          Large — 네이티브
        </label>
        <Select id="select-size-lg" size="lg">
          <option>input_lg</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom size="sm">
          btn_sm
        </Select>
        <Select custom>기본</Select>
        <Select custom size="lg">
          btn_lg
        </Select>
      </div>
    </>)
}`,...($=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,le,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
        story: '기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function WidthExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-width-full">
          전체 너비
        </label>
        <Select id="select-width-full">
          <option>width: 100%</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="select-width-fit">
          제한 너비
        </label>
        <Select id="select-width-fit">
          <option>form_field_fit — 최대 320px</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <Select className="input_fit" aria-label="제한 너비 단독">
        <option>input_fit 단독 — 최대 320px</option>
        <option>옵션 2</option>
      </Select>
      <Select custom block>
        btn_block — 전체 너비 트리거
      </Select>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-width-full">
          전체 너비
        </label>
        <Select id="select-width-full">
          <option>width: 100%</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="select-width-fit">
          제한 너비
        </label>
        <Select id="select-width-fit">
          <option>form_field_fit — 최대 320px</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <Select className="input_fit" aria-label="제한 너비 단독">
        <option>input_fit 단독 — 최대 320px</option>
        <option>옵션 2</option>
      </Select>
      <Select custom block>
        btn_block — 전체 너비 트리거
      </Select>
    </>)
}`,...(te=(le=S.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var oe,se,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '플레이스홀더',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function PlaceholderExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-placeholder-native">
          네이티브
        </label>
        <Select id="select-placeholder-native" required placeholder="옵션을 선택하세요">
          <option value="a">옵션 A</option>
          <option value="b">옵션 B</option>
          <option value="c">옵션 C</option>
        </Select>
        <p className="form_field-hint">
          required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.
        </p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom placeholder="옵션을 선택하세요">
          옵션을 선택하세요
        </Select>
        <Select custom selectText placeholder="정렬 기준">
          정렬 기준
        </Select>
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
        <label className="form_field-label" htmlFor="select-placeholder-native">
          네이티브
        </label>
        <Select id="select-placeholder-native" required placeholder="옵션을 선택하세요">
          <option value="a">옵션 A</option>
          <option value="b">옵션 B</option>
          <option value="c">옵션 C</option>
        </Select>
        <p className="form_field-hint">
          required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.
        </p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom placeholder="옵션을 선택하세요">
          옵션을 선택하세요
        </Select>
        <Select custom selectText placeholder="정렬 기준">
          정렬 기준
        </Select>
      </div>
    </>)
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,re,ce;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: '옵션 그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function OptgroupExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="select-optgroup">
        지역
      </label>
      <Select id="select-optgroup" placeholder="선택하세요">
        <optgroup label="수도권">
          <option>서울특별시</option>
          <option>경기도</option>
          <option>인천광역시</option>
        </optgroup>
        <optgroup label="영남권">
          <option>부산광역시</option>
          <option>대구광역시</option>
          <option>울산광역시</option>
        </optgroup>
        <optgroup label="호남권">
          <option>광주광역시</option>
          <option>전라남도</option>
          <option>전라북도</option>
        </optgroup>
      </Select>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <label className="form_field-label" htmlFor="select-optgroup">
        지역
      </label>
      <Select id="select-optgroup" placeholder="선택하세요">
        <optgroup label="수도권">
          <option>서울특별시</option>
          <option>경기도</option>
          <option>인천광역시</option>
        </optgroup>
        <optgroup label="영남권">
          <option>부산광역시</option>
          <option>대구광역시</option>
          <option>울산광역시</option>
        </optgroup>
        <optgroup label="호남권">
          <option>광주광역시</option>
          <option>전라남도</option>
          <option>전라북도</option>
        </optgroup>
      </Select>
    </div>)
}`,...(ce=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ne,de,pe;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '다중 선택',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function MultipleExample() {
  return (
    <div className="form_field">
      <label className="form_field-label" htmlFor="select-multiple">
        관심 분야
      </label>
      <Select
        id="select-multiple"
        multiple
        listSize={5}
        aria-describedby="select-multiple-hint"
        defaultValue={['UX 디자인', '접근성']}
      >
        <option>UX 디자인</option>
        <option>UI 개발</option>
        <option>접근성</option>
        <option>디자인 시스템</option>
        <option>리서치</option>
        <option>프로토타이핑</option>
      </Select>
      <p className="form_field-hint" id="select-multiple-hint">
        복수 선택 시 listSize로 표시 행 수를 지정합니다. (네이티브 size 속성)
      </p>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <label className="form_field-label" htmlFor="select-multiple">
        관심 분야
      </label>
      <Select id="select-multiple" multiple listSize={5} aria-describedby="select-multiple-hint" defaultValue={['UX 디자인', '접근성']}>
        <option>UX 디자인</option>
        <option>UI 개발</option>
        <option>접근성</option>
        <option>디자인 시스템</option>
        <option>리서치</option>
        <option>프로토타이핑</option>
      </Select>
      <p className="form_field-hint" id="select-multiple-hint">
        복수 선택 시 listSize로 표시 행 수를 지정합니다. (네이티브 size 속성)
      </p>
    </div>)
}`,...(pe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,fe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
        story: 'disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-default">
          기본
        </label>
        <Select id="select-state-default">
          <option>선택 가능</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-disabled">
          비활성
        </label>
        <Select id="select-state-disabled" disabled defaultValue="수정할 수 없음">
          <option>수정할 수 없음</option>
          <option>옵션 2</option>
        </Select>
        <p className="form_field-hint">disabled 속성으로 선택을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-error">
          에러
        </label>
        <Select id="select-state-error" error placeholder="선택하세요">
          <option value="a">옵션 A</option>
        </Select>
        <p className="form_field-error" id="select-state-error-msg" role="alert">
          필수 항목입니다. 옵션을 선택해 주세요.
        </p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom open>
          열림
        </Select>
        <Select custom disabled>
          비활성
        </Select>
        <Select custom error>
          에러
        </Select>
        <Select custom open selectText>
          텍스트형 열림
        </Select>
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
        <label className="form_field-label" htmlFor="select-state-default">
          기본
        </label>
        <Select id="select-state-default">
          <option>선택 가능</option>
          <option>옵션 2</option>
        </Select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-disabled">
          비활성
        </label>
        <Select id="select-state-disabled" disabled defaultValue="수정할 수 없음">
          <option>수정할 수 없음</option>
          <option>옵션 2</option>
        </Select>
        <p className="form_field-hint">disabled 속성으로 선택을 막습니다.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-state-error">
          에러
        </label>
        <Select id="select-state-error" error placeholder="선택하세요">
          <option value="a">옵션 A</option>
        </Select>
        <p className="form_field-error" id="select-state-error-msg" role="alert">
          필수 항목입니다. 옵션을 선택해 주세요.
        </p>
      </div>
      <div className="btn_row btn_row-wrap">
        <Select custom open>
          열림
        </Select>
        <Select custom disabled>
          비활성
        </Select>
        <Select custom error>
          에러
        </Select>
        <Select custom open selectText>
          텍스트형 열림
        </Select>
      </div>
    </>)
}`,...(fe=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var be,he,xe;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '커스텀 트리거',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup="listbox" · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다.'
      },
      source: {
        code: \`import Select from '@uxkm/ui-react/components/Select.jsx';

export function CustomExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Select custom>서울특별시</Select>
        <Select custom selectText>
          최신순
        </Select>
        <Select custom selectText size="sm">
          필터
        </Select>
      </div>
      <p className="form_field-hint">
        상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요.
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="btn_row btn_row-wrap">
        <Select custom>서울특별시</Select>
        <Select custom selectText>
          최신순
        </Select>
        <Select custom selectText size="sm">
          필터
        </Select>
      </div>
      <p className="form_field-hint">상세 변형은 Button — 셀렉트 박스형 섹션을 참고하세요.</p>
    </>)
}`,...(xe=(he=w.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var _e,ve,Se;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
        story: '유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Select from '@uxkm/ui-react/components/Select.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact noValidate aria-labelledby="example-heading">
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-country">
          국가<span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Select
          id="select-ex-country"
          size="sm"
          className="is-success"
          value="kr"
          required
          aria-required="true"
          aria-invalid="false"
          aria-describedby="select-ex-country-success"
        >
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </Select>
        <p className="form_field-success" id="select-ex-country-success" role="status">
          지원되는 국가입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-plan">
          요금제<span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Select
          id="select-ex-plan"
          size="sm"
          error
          required
          placeholder="요금제를 선택하세요"
          aria-required="true"
          aria-invalid="true"
          aria-describedby="select-ex-plan-error"
        >
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </Select>
        <p className="form_field-error" id="select-ex-plan-error" role="alert">
          요금제 선택은 필수입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-lang">
          언어
        </label>
        <Select id="select-ex-lang" size="sm" value="ko">
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </Select>
        <p className="form_field-hint">서비스 표시 언어를 선택합니다.</p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="가입하기" />
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
        <label className="form_field-label" htmlFor="select-ex-country">
          국가
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Select id="select-ex-country" size="sm" className="is-success" value="kr" required aria-required="true" aria-invalid="false" aria-describedby="select-ex-country-success">
          <option value="kr">대한민국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </Select>
        <p className="form_field-success" id="select-ex-country-success" role="status">
          지원되는 국가입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-plan">
          요금제
          <span className="form_field-required" aria-hidden="true">
            *
          </span>
        </label>
        <Select id="select-ex-plan" size="sm" error required placeholder="요금제를 선택하세요" aria-required="true" aria-invalid="true" aria-describedby="select-ex-plan-error">
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </Select>
        <p className="form_field-error" id="select-ex-plan-error" role="alert">
          요금제 선택은 필수입니다.
        </p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="select-ex-lang">
          언어
        </label>
        <Select id="select-ex-lang" size="sm" value="ko">
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </Select>
        <p className="form_field-hint">서비스 표시 언어를 선택합니다.</p>
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" size="sm" type="submit" label="가입하기" />
        <Button variant="ghost" size="sm" type="button" label="취소" />
      </div>
    </FormLayout>)
}`,...(Se=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const al=["Playground","Type","Basic","Standalone","Size","Width","Placeholder","Optgroup","Multiple","State","Custom","Example"];export{x as Basic,w as Custom,z as Example,j as Multiple,g as Optgroup,N as Placeholder,b as Playground,v as Size,_ as Standalone,y as State,h as Type,S as Width,al as __namedExportsOrder,il as default};
