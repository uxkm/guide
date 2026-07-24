import{r as R,d as Te,a1 as Me,n as He,j as e,a as v,I as E,B as _}from"./iframe-ifEc15ad.js";import{I as Ie}from"./Input-CcEeUFRW.js";import{w as n}from"./story-renders-Hdz_JUlO.js";import{W as Ge,j as Je,a as Ue,b as qe}from"./calendar-demo-BOe-Cb6U.js";import{f as $e,a as Ke}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Ye=new Set(["sm","md","lg"]);function Ze(a){if(a===!0||a==="true")return"true";if(a===!1||a==="false")return"false"}function r({ripple:a,size:l="md",disabled:t,error:d,success:m,open:s,placeholder:o,value:c,fit:f,block:u,inline:p,clearable:x,panelWide:b,inputId:h,ariaLabel:O,ariaInvalid:V,panel:Fe,children:ze,className:A,style:T,onClear:W,onCalendarClick:Le,...M}){const H=R.useRef(null),{rippleAttrs:Se,childRippleAttrs:G}=Te({ripple:a},{mode:"container"}),y=Ye.has(l)?l:"md",J=Fe??ze,Re=!p,Ee=!!c,B=!!s;Me({ripple:a,size:y,disabled:t,error:d,success:m,open:s,placeholder:o,value:c,fit:f,block:u,inline:p,clearable:x,panelWide:b,inputId:h,ariaLabel:O,ariaInvalid:V},H,{className:A,style:T,...M});const We=R.useMemo(()=>{const i=["date_picker"];return y==="sm"&&i.push("date_picker_sm"),y==="lg"&&i.push("date_picker_lg"),f&&i.push("date_picker_fit"),u&&i.push("date_picker_block"),p&&i.push("date_picker_inline"),t&&i.push("is-disabled"),d&&i.push("is-error"),m&&i.push("is-success"),s&&i.push("is-open"),i},[y,f,u,p,t,d,m,s]),Be=R.useMemo(()=>{const i=["date_picker_input"];return!c&&o&&i.push("date_picker_placeholder"),i},[c,o]),{class:ka,style:xa,onClear:va,onCalendarClick:ha,...Oe}=M,Ve=He(Oe);function Ae(i){i.preventDefault(),i.stopPropagation(),W==null||W(i)}return e.jsxs("div",{ref:H,className:v(We,A),style:T,...Se,children:[Re?e.jsxs("div",{className:"date_picker_trigger",children:[e.jsx("input",{id:h,type:"text",className:v(Be),value:c??"",placeholder:o,readOnly:!0,disabled:t,"aria-haspopup":"dialog","aria-expanded":B?"true":"false","aria-label":O,"aria-invalid":Ze(V),...G,...Ve}),x&&Ee?e.jsx("button",{type:"button",className:"date_picker_clear","data-ripple":"surface","aria-label":"날짜 지우기",onClick:Ae,children:e.jsx(E,{name:"close",size:"sm"})}):null,e.jsx(_,{variant:"ghost",iconOnly:!0,className:"date_picker_btn",disabled:t,ariaLabel:B?"캘린더 닫기":"캘린더 열기",expanded:B,iconBefore:e.jsx(E,{name:"calendar",size:"sm"}),onClick:Le,...G})]}):null,J!=null||p?e.jsx("div",{className:v("date_picker_panel",b&&"date_picker_panel-wide"),role:"dialog","aria-label":"날짜 선택","data-demo-slot":"panel",children:J}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function Qe({day:a,otherMonth:l,today:t,selected:d,disabled:m,sunday:s,saturday:o,rangeStart:c,rangeEnd:f,inRange:u,event:p}){const b=m||l&&!(d||u||c||f);return e.jsx("button",{type:"button",className:v("calendar_day",l&&"is-other-month",t&&"is-today",d&&"is-selected",b&&"is-disabled",s&&"is-sunday",o&&"is-saturday",c&&"is-range-start",f&&"is-range-end",u&&"is-in-range",p&&"has-event"),disabled:b||void 0,"aria-current":t?"date":void 0,"aria-selected":d?"true":void 0,children:a})}function Xe(){return e.jsx("div",{className:"calendar_weekdays","aria-hidden":"true",children:Ge.map(a=>e.jsx("span",{className:"calendar_weekday",children:a},a))})}function ea({days:a,selected:l,today:t,weekends:d}){const m=(a??Je({selected:l,today:t})).map((s,o)=>d?{...s,sunday:s.sunday??o%7===0,saturday:s.saturday??o%7===6}:s);return e.jsx("div",{className:"calendar_month",style:{display:"contents"},children:e.jsx("div",{className:"calendar_grid",role:"grid",children:m.map((s,o)=>e.jsx(Qe,{...s},`${s.day}-${o}`))})})}function aa({title:a,showPrev:l=!0,showNext:t=!0}){return e.jsxs("div",{className:"calendar_header",children:[l?e.jsx(_,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"이전 달",iconBefore:e.jsx(E,{name:"chevron-left",size:"sm"})}):null,e.jsx("span",{className:"calendar_title",children:a}),t?e.jsx(_,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"다음 달",iconBefore:e.jsx(E,{name:"chevron-right",size:"sm"})}):null]})}function ra(){return e.jsxs("div",{className:"calendar_footer",children:[e.jsx(_,{variant:"text",color:"primary",size:"sm",label:"오늘"}),e.jsxs("div",{className:"calendar_footer-actions",children:[e.jsx(_,{variant:"ghost",size:"sm",label:"초기화"}),e.jsx(_,{variant:"filled",color:"primary",size:"sm",label:"확인"})]})]})}function k({ariaLabel:a,title:l,noHeader:t,compact:d,borderless:m,weekends:s,selected:o=18,today:c=15,days:f,showHeader:u,showFooter:p,showPrev:x,showNext:b}){const h=u??(!t&&!!l);return e.jsxs("div",{className:v("calendar",t&&"calendar_no-header",d&&"calendar_compact",m&&"calendar_borderless",s&&"calendar_weekends"),role:"application","aria-label":a,children:[h?e.jsx(aa,{title:l,showPrev:x,showNext:b}):null,e.jsx(Xe,{}),e.jsx(ea,{days:f,selected:o,today:c,weekends:s}),p?e.jsx(ra,{}):null]})}function we({children:a}){return e.jsx("div",{className:"calendar_group",children:a})}function la(){return{juneDays:qe(),julyDays:Ue()}}k.__docgenInfo={description:"",methods:[],displayName:"DemoCalendar",props:{selected:{defaultValue:{value:"18",computed:!1},required:!1},today:{defaultValue:{value:"15",computed:!1},required:!1}}};we.__docgenInfo={description:"",methods:[],displayName:"DemoCalendarGroup"};const sa=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ia=[{name:"value",type:"string",default:"—",description:"표시할 날짜 문자열"},{name:"placeholder",type:"string",default:"—",description:"미선택 placeholder"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"date_picker_sm · date_picker_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"error",type:"boolean",default:"false",description:"오류 (is-error)"},{name:"success",type:"boolean",default:"false",description:"성공 (is-success)"},{name:"open",type:"boolean",default:"false",description:"패널 열림 (is-open)"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 (date_picker_fit)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"inline",type:"boolean",default:"false",description:"트리거 없이 패널만 (date_picker_inline)"},{name:"clearable",type:"boolean",default:"false",description:"지우기 버튼"},{name:"panel-wide",type:"boolean",default:"false",description:"넓은 패널 (date_picker_panel-wide)"},{name:"input-id",type:"string",default:"—",description:"입력 필드 id (label for 연결)"},{name:"aria-label",type:"string",default:"—",description:"입력 접근성 라벨"},{name:"aria-invalid",type:"boolean | string",default:"—",description:"입력 aria-invalid"},$e],ta=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],oa=[{name:"date_picker",description:"루트"},{name:"date_picker_sm · date_picker_lg · date_picker_fit · date_picker_block",description:"크기·너비"},{name:"date_picker_inline",description:"인라인 패널"},{name:"date_picker_trigger · date_picker_input · date_picker_btn",description:"트리거 영역"},{name:"date_picker_clear · date_picker_placeholder",description:'지우기(data-ripple="surface")·placeholder'},{name:"date_picker_panel · date_picker_panel-wide",description:"드롭다운 패널"},{name:"is-open · is-error · is-success · is-disabled",description:"상태"},...Ke],da=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],na=[{name:"--date-picker-input-padding-y · --date-picker-input-padding-x",default:"0.5rem · 0.75rem",description:"입력 패딩"},{name:"--date-picker-btn-size · --date-picker-icon-size",default:"2.25rem · 1rem",description:"캘린더 버튼·아이콘"}],ca=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ma=[{name:"panel",description:"캘린더 패널 콘텐츠 (Vue #panel 슬롯 대응)"},{name:"children",description:"panel prop 대체. Calendar 등 패널 콘텐츠"}],pa=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: panel-wide, input-id)와 동일한 의미입니다.",tables:[{columns:sa,rows:ia,codeColumn:"name"}]},{title:"API · Children",description:"Vue #panel 슬롯에 대응하는 React panel·children prop입니다.",tables:[{columns:ca,rows:ma,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ta,rows:oa,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:da,rows:na,codeColumn:"name"}]}],fa={size:"md",disabled:!1,error:!1,success:!1,open:!1,placeholder:"날짜를 선택하세요",value:"2024-06-18",fit:!0,block:!1,inline:!1,clearable:!1,panelWide:!1,inputId:"dp-playground",ariaLabel:"날짜 선택"},{juneDays:ua,julyDays:_a}=la(),Ca={title:"Components/폼/DatePicker",id:"components-date-picker",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},success:{control:"boolean",type:{name:"boolean",summary:"boolean"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},value:{control:"text",type:{name:"string",summary:"string"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},clearable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},panelWide:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inputId:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:pa,docs:{description:{component:"읽기 전용 입력과 캘린더 버튼으로 날짜를 고르는 트리거입니다. 패널에는 Calendar 등을 조합합니다."}}}},g={parameters:{controls:{disable:!1}},args:{...fa},render:(a,{updateArgs:l})=>e.jsx(r,{...a,onClear:()=>l({value:""}),onCalendarClick:()=>l({open:!a.open}),panel:a.open||a.inline?e.jsx(k,{noHeader:!0,compact:!0,borderless:!0,weekends:!0,ariaLabel:"2024년 6월",selected:18,today:15}):null})},N={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'네이티브 input type="date"는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.'},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function TypeExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-native">
          네이티브 — input type="date"
        </label>
        <Input id="dp-type-native" type="date" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-custom">
          커스텀 — date_picker
        </label>
        <DatePicker
          inputId="dp-type-custom"
          placeholder="날짜를 선택하세요"
          fit
          ariaLabel="날짜 선택"
        />
      </div>
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-type-native",children:'네이티브 — input type="date"'}),e.jsx(Ie,{id:"dp-type-native",type:"date"}),e.jsx("p",{className:"form_field-hint",children:"간단한 폼·모바일 환경에 적합합니다."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-type-custom",children:"커스텀 — date_picker"}),e.jsx(r,{inputId:"dp-type-custom",placeholder:"날짜를 선택하세요",fit:!0,ariaLabel:"날짜 선택"}),e.jsx("p",{className:"form_field-hint",children:"커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다."})]})]}))},D={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function BasicExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-basic">
        예약 날짜
      </label>
      <DatePicker inputId="dp-basic" value="2024-06-18" fit />
      <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>
  );
}`,language:"tsx"}}},render:n(e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-basic",children:"예약 날짜"}),e.jsx(r,{inputId:"dp-basic",value:"2024-06-18",fit:!0}),e.jsx("p",{className:"form_field-hint",children:"체크인 날짜를 선택해 주세요."})]}))},P={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-sm">
          Small
        </label>
        <DatePicker inputId="dp-size-sm" size="sm" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-md">
          Medium
        </label>
        <DatePicker inputId="dp-size-md" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-lg">
          Large
        </label>
        <DatePicker inputId="dp-size-lg" size="lg" value="2024-06-18" fit />
      </div>
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-size-sm",children:"Small"}),e.jsx(r,{inputId:"dp-size-sm",size:"sm",value:"2024-06-18",fit:!0})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-size-md",children:"Medium"}),e.jsx(r,{inputId:"dp-size-md",value:"2024-06-18",fit:!0})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-size-lg",children:"Large"}),e.jsx(r,{inputId:"dp-size-lg",size:"lg",value:"2024-06-18",fit:!0})]})]}))},j={name:"패널 열림",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'is-open 클래스와 aria-expanded="true"로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.'},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
// Calendar 계열은 React 마이그레이션 후 panel에 조합합니다.

export function OpenExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-open">
        날짜
      </label>
      <DatePicker inputId="dp-open" value="2024-06-18" fit open>
        {/* Calendar panel */}
      </DatePicker>
    </div>
  );
}`,language:"tsx"}}},render:n(e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-open",children:"날짜"}),e.jsx(r,{inputId:"dp-open",value:"2024-06-18",fit:!0,open:!0,panel:e.jsx(k,{noHeader:!0,compact:!0,borderless:!0,weekends:!0,ariaLabel:"2024년 6월",selected:18,today:15})})]}))},C={name:"푸터 액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function FooterExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-footer">
        일정 날짜
      </label>
      <DatePicker inputId="dp-footer" value="2024-06-18" fit open>
        {/* Calendar + CalendarFooter */}
      </DatePicker>
    </div>
  );
}`,language:"tsx"}}},render:n(e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-footer",children:"일정 날짜"}),e.jsx(r,{inputId:"dp-footer",value:"2024-06-18",fit:!0,open:!0,panel:e.jsx(k,{compact:!0,borderless:!0,weekends:!0,ariaLabel:"2024년 6월",title:"2024년 6월",selected:18,today:15,showFooter:!0})})]}))},I={name:"기간 선택",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function RangeExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="dp-range-label">
        조회 기간
      </span>
      <div className="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" ariaLabel="시작일" />
        <span className="date_picker_sep" aria-hidden="true">
          ~
        </span>
        <DatePicker value="2024-06-18" ariaLabel="종료일" />
      </div>
    </div>
  );
}`,language:"tsx"}}},render:n(e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"dp-range-label",children:"조회 기간"}),e.jsxs("div",{className:"date_picker_range",role:"group","aria-labelledby":"dp-range-label",children:[e.jsx(r,{value:"2024-06-10",ariaLabel:"시작일"}),e.jsx("span",{className:"date_picker_sep","aria-hidden":"true",children:"~"}),e.jsx(r,{value:"2024-06-18",ariaLabel:"종료일"})]}),e.jsx("p",{className:"form_field-hint",children:"최대 90일까지 조회할 수 있습니다."})]}))},w={name:"이중 캘린더 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function RangePanelExample() {
  return (
    <DatePicker
      block
      open
      panelWide
      value="2024-06-10 ~ 2024-07-06"
      ariaLabel="숙박 기간"
      style={{ maxWidth: '20rem' }}
    >
      {/* CalendarGroup + dual Calendar */}
    </DatePicker>
  );
}`,language:"tsx"}}},render:n(e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"dp-range-panel-label",children:"숙박 기간"}),e.jsx(r,{block:!0,open:!0,panelWide:!0,inputId:"dp-range-panel-label",value:"2024-06-10 ~ 2024-07-06",ariaLabel:"숙박 기간",style:{maxWidth:"20rem"},panel:e.jsxs(we,{children:[e.jsx(k,{compact:!0,borderless:!0,ariaLabel:"2024년 6월",title:"2024년 6월",showNext:!1,days:ua}),e.jsx(k,{compact:!0,borderless:!0,ariaLabel:"2024년 7월",title:"2024년 7월",showPrev:!1,days:_a})]})})]}))},F={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function InlineExample() {
  return (
    <DatePicker inline>
      {/* Calendar panel */}
    </DatePicker>
  );
}`,language:"tsx"}}},render:n(e.jsx(r,{inline:!0,panel:e.jsx(k,{compact:!0,weekends:!0,ariaLabel:"2024년 6월",title:"2024년 6월",selected:18,today:15})}))};function ba(){const[a,l]=R.useState("2024-06-18");return e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-clear",children:"필터 날짜"}),e.jsx(r,{inputId:"dp-clear",value:a,fit:!0,clearable:!0,onClear:()=>l("")})]})}const z={name:"값 초기화",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import { useState } from 'react';

export function ClearExample() {
  const [value, setValue] = useState('2024-06-18');
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-clear">
        필터 날짜
      </label>
      <DatePicker
        inputId="dp-clear"
        value={value}
        fit
        clearable
        onClear={() => setValue('')}
      />
    </div>
  );
}`,language:"tsx"}}},render:n(e.jsx(ba,{}))},L={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-placeholder">
          플레이스홀더
        </label>
        <DatePicker inputId="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-error">
          에러
        </label>
        <DatePicker
          inputId="dp-state-error"
          placeholder="날짜를 선택하세요"
          fit
          error
          ariaInvalid
          aria-describedby="dp-state-error-msg"
        />
        <p className="form_field-error" id="dp-state-error-msg" role="alert">
          날짜를 선택해 주세요.
        </p>
      </div>
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-placeholder",children:"플레이스홀더"}),e.jsx(r,{inputId:"dp-state-placeholder",placeholder:"날짜를 선택하세요",fit:!0})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-disabled",children:"비활성"}),e.jsx(r,{inputId:"dp-state-disabled",value:"2024-06-18",fit:!0,disabled:!0}),e.jsx("p",{className:"form_field-hint",children:"is-disabled 클래스와 disabled 속성으로 선택을 막습니다."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-error",children:"에러"}),e.jsx(r,{inputId:"dp-state-error",placeholder:"날짜를 선택하세요",fit:!0,error:!0,ariaInvalid:!0,"aria-describedby":"dp-state-error-msg"}),e.jsx("p",{className:"form_field-error",id:"dp-state-error-msg",role:"alert",children:"날짜를 선택해 주세요."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-success",children:"성공"}),e.jsx(r,{inputId:"dp-state-success",value:"2024-06-18",fit:!0,success:!0,ariaInvalid:!1,"aria-describedby":"dp-state-success-msg"}),e.jsx("p",{className:"form_field-success",id:"dp-state-success-msg",role:"status",children:"예약 가능한 날짜입니다."})]})]}))},S={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <form className="form form_inline" action="#" method="get">
      <div className="form_field">
        <label className="form_field-label" htmlFor="dp-example-keyword">
          키워드
        </label>
        <Input
          id="dp-example-keyword"
          type="search"
          placeholder="검색어"
          style={{ minWidth: '10rem' }}
        />
      </div>
      <div className="form_field">
        <span className="form_field-label" id="dp-example-range-label">
          기간
        </span>
        <div
          className="date_picker_range"
          role="group"
          aria-labelledby="dp-example-range-label"
        >
          <DatePicker
            size="sm"
            placeholder="시작일"
            ariaLabel="시작일"
            style={{ minWidth: '9rem' }}
          />
          <span className="date_picker_sep" aria-hidden="true">
            ~
          </span>
          <DatePicker placeholder="종료일" ariaLabel="종료일" style={{ minWidth: '9rem' }} />
        </div>
      </div>
      <div className="form_actions">
        <Button type="submit" variant="filled" color="primary" label="검색" />
        <Button type="reset" variant="ghost" label="초기화" />
      </div>
    </form>
  );
}`,language:"tsx"}}},render:n(e.jsxs("form",{className:"form form_inline",action:"#",method:"get",children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-example-keyword",children:"키워드"}),e.jsx(Ie,{id:"dp-example-keyword",type:"search",placeholder:"검색어",style:{minWidth:"10rem"}})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"dp-example-range-label",children:"기간"}),e.jsxs("div",{className:"date_picker_range",role:"group","aria-labelledby":"dp-example-range-label",children:[e.jsx(r,{size:"sm",placeholder:"시작일",ariaLabel:"시작일",style:{minWidth:"9rem"}}),e.jsx("span",{className:"date_picker_sep","aria-hidden":"true",children:"~"}),e.jsx(r,{placeholder:"종료일",ariaLabel:"종료일",style:{minWidth:"9rem"}})]})]}),e.jsxs("div",{className:"form_actions",children:[e.jsx(_,{type:"submit",variant:"filled",color:"primary",label:"검색"}),e.jsx(_,{type:"reset",variant:"ghost",label:"초기화"})]})]}))};var U,q,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  }) => <DatePicker {...args} onClear={() => updateArgs({
    value: ''
  })} onCalendarClick={() => updateArgs({
    open: !args.open
  })} panel={args.open || args.inline ? <DemoCalendar noHeader compact borderless weekends ariaLabel="2024년 6월" selected={18} today={15} /> : null} />
}`,...($=(q=g.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var K,Y,Z;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        story: '네이티브 input type="date"는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function TypeExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-native">
          네이티브 — input type="date"
        </label>
        <Input id="dp-type-native" type="date" />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-custom">
          커스텀 — date_picker
        </label>
        <DatePicker
          inputId="dp-type-custom"
          placeholder="날짜를 선택하세요"
          fit
          ariaLabel="날짜 선택"
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
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-native">
          네이티브 — input type="date"
        </label>
        <Input id="dp-type-native" type="date" />
        <p className="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-type-custom">
          커스텀 — date_picker
        </label>
        <DatePicker inputId="dp-type-custom" placeholder="날짜를 선택하세요" fit ariaLabel="날짜 선택" />
        <p className="form_field-hint">
          커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.
        </p>
      </div>
    </>)
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var Q,X,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        story: 'form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function BasicExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-basic">
        예약 날짜
      </label>
      <DatePicker inputId="dp-basic" value="2024-06-18" fit />
      <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-basic">
        예약 날짜
      </label>
      <DatePicker inputId="dp-basic" value="2024-06-18" fit />
      <p className="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>)
}`,...(ee=(X=D.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,re,le;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        story: 'date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function SizeExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-sm">
          Small
        </label>
        <DatePicker inputId="dp-size-sm" size="sm" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-md">
          Medium
        </label>
        <DatePicker inputId="dp-size-md" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-lg">
          Large
        </label>
        <DatePicker inputId="dp-size-lg" size="lg" value="2024-06-18" fit />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-sm">
          Small
        </label>
        <DatePicker inputId="dp-size-sm" size="sm" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-md">
          Medium
        </label>
        <DatePicker inputId="dp-size-md" value="2024-06-18" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-size-lg">
          Large
        </label>
        <DatePicker inputId="dp-size-lg" size="lg" value="2024-06-18" fit />
      </div>
    </>)
}`,...(le=(re=P.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ie,te;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '패널 열림',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'is-open 클래스와 aria-expanded="true"로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
// Calendar 계열은 React 마이그레이션 후 panel에 조합합니다.

export function OpenExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-open">
        날짜
      </label>
      <DatePicker inputId="dp-open" value="2024-06-18" fit open>
        {/* Calendar panel */}
      </DatePicker>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-open">
        날짜
      </label>
      <DatePicker inputId="dp-open" value="2024-06-18" fit open panel={<DemoCalendar noHeader compact borderless weekends ariaLabel="2024년 6월" selected={18} today={15} />} />
    </div>)
}`,...(te=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var oe,de,ne;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '푸터 액션',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function FooterExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-footer">
        일정 날짜
      </label>
      <DatePicker inputId="dp-footer" value="2024-06-18" fit open>
        {/* Calendar + CalendarFooter */}
      </DatePicker>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-footer">
        일정 날짜
      </label>
      <DatePicker inputId="dp-footer" value="2024-06-18" fit open panel={<DemoCalendar compact borderless weekends ariaLabel="2024년 6월" title="2024년 6월" selected={18} today={15} showFooter />} />
    </div>)
}`,...(ne=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var ce,me,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: '기간 선택',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function RangeExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="dp-range-label">
        조회 기간
      </span>
      <div className="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" ariaLabel="시작일" />
        <span className="date_picker_sep" aria-hidden="true">
          ~
        </span>
        <DatePicker value="2024-06-18" ariaLabel="종료일" />
      </div>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <span className="form_field-label" id="dp-range-label">
        조회 기간
      </span>
      <div className="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <DatePicker value="2024-06-10" ariaLabel="시작일" />
        <span className="date_picker_sep" aria-hidden="true">
          ~
        </span>
        <DatePicker value="2024-06-18" ariaLabel="종료일" />
      </div>
      <p className="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
    </div>)
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,ue,_e;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: '이중 캘린더 패널',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function RangePanelExample() {
  return (
    <DatePicker
      block
      open
      panelWide
      value="2024-06-10 ~ 2024-07-06"
      ariaLabel="숙박 기간"
      style={{ maxWidth: '20rem' }}
    >
      {/* CalendarGroup + dual Calendar */}
    </DatePicker>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <span className="form_field-label" id="dp-range-panel-label">
        숙박 기간
      </span>
      <DatePicker block open panelWide inputId="dp-range-panel-label" value="2024-06-10 ~ 2024-07-06" ariaLabel="숙박 기간" style={{
      maxWidth: '20rem'
    }} panel={<DemoCalendarGroup>
            <DemoCalendar compact borderless ariaLabel="2024년 6월" title="2024년 6월" showNext={false} days={rangeJuneDays} />
            <DemoCalendar compact borderless ariaLabel="2024년 7월" title="2024년 7월" showPrev={false} days={rangeJulyDays} />
          </DemoCalendarGroup>} />
    </div>)
}`,...(_e=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}};var be,ke,xe;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
        story: 'date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function InlineExample() {
  return (
    <DatePicker inline>
      {/* Calendar panel */}
    </DatePicker>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<DatePicker inline panel={<DemoCalendar compact weekends ariaLabel="2024년 6월" title="2024년 6월" selected={18} today={15} />} />)
}`,...(xe=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var ve,he,ye;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: '값 초기화',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import { useState } from 'react';

export function ClearExample() {
  const [value, setValue] = useState('2024-06-18');
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="dp-clear">
        필터 날짜
      </label>
      <DatePicker
        inputId="dp-clear"
        value={value}
        fit
        clearable
        onClear={() => setValue('')}
      />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<ClearDemo />)
}`,...(ye=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ge,Ne,De;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
        story: 'is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다.'
      },
      source: {
        code: \`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function StateExample() {
  return (
    <>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-placeholder">
          플레이스홀더
        </label>
        <DatePicker inputId="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-error">
          에러
        </label>
        <DatePicker
          inputId="dp-state-error"
          placeholder="날짜를 선택하세요"
          fit
          error
          ariaInvalid
          aria-describedby="dp-state-error-msg"
        />
        <p className="form_field-error" id="dp-state-error-msg" role="alert">
          날짜를 선택해 주세요.
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
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-placeholder">
          플레이스홀더
        </label>
        <DatePicker inputId="dp-state-placeholder" placeholder="날짜를 선택하세요" fit />
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-disabled">
          비활성
        </label>
        <DatePicker inputId="dp-state-disabled" value="2024-06-18" fit disabled />
        <p className="form_field-hint">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-error">
          에러
        </label>
        <DatePicker inputId="dp-state-error" placeholder="날짜를 선택하세요" fit error ariaInvalid aria-describedby="dp-state-error-msg" />
        <p className="form_field-error" id="dp-state-error-msg" role="alert">
          날짜를 선택해 주세요.
        </p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="dp-state-success">
          성공
        </label>
        <DatePicker inputId="dp-state-success" value="2024-06-18" fit success ariaInvalid={false} aria-describedby="dp-state-success-msg" />
        <p className="form_field-success" id="dp-state-success-msg" role="status">
          예약 가능한 날짜입니다.
        </p>
      </div>
    </>)
}`,...(De=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Pe,je,Ce;S.parameters={...S.parameters,docs:{...(Pe=S.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: '조합 예시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'form_inline과 date_picker_range를 조합한 검색 필터 폼입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <form className="form form_inline" action="#" method="get">
      <div className="form_field">
        <label className="form_field-label" htmlFor="dp-example-keyword">
          키워드
        </label>
        <Input
          id="dp-example-keyword"
          type="search"
          placeholder="검색어"
          style={{ minWidth: '10rem' }}
        />
      </div>
      <div className="form_field">
        <span className="form_field-label" id="dp-example-range-label">
          기간
        </span>
        <div
          className="date_picker_range"
          role="group"
          aria-labelledby="dp-example-range-label"
        >
          <DatePicker
            size="sm"
            placeholder="시작일"
            ariaLabel="시작일"
            style={{ minWidth: '9rem' }}
          />
          <span className="date_picker_sep" aria-hidden="true">
            ~
          </span>
          <DatePicker placeholder="종료일" ariaLabel="종료일" style={{ minWidth: '9rem' }} />
        </div>
      </div>
      <div className="form_actions">
        <Button type="submit" variant="filled" color="primary" label="검색" />
        <Button type="reset" variant="ghost" label="초기화" />
      </div>
    </form>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<form className="form form_inline" action="#" method="get">
      <div className="form_field">
        <label className="form_field-label" htmlFor="dp-example-keyword">
          키워드
        </label>
        <Input id="dp-example-keyword" type="search" placeholder="검색어" style={{
        minWidth: '10rem'
      }} />
      </div>
      <div className="form_field">
        <span className="form_field-label" id="dp-example-range-label">
          기간
        </span>
        <div className="date_picker_range" role="group" aria-labelledby="dp-example-range-label">
          <DatePicker size="sm" placeholder="시작일" ariaLabel="시작일" style={{
          minWidth: '9rem'
        }} />
          <span className="date_picker_sep" aria-hidden="true">
            ~
          </span>
          <DatePicker placeholder="종료일" ariaLabel="종료일" style={{
          minWidth: '9rem'
        }} />
        </div>
      </div>
      <div className="form_actions">
        <Button type="submit" variant="filled" color="primary" label="검색" />
        <Button type="reset" variant="ghost" label="초기화" />
      </div>
    </form>)
}`,...(Ce=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};const Ia=["Playground","Type","Basic","Size","Open","Footer","Range","RangePanel","Inline","Clear","State","Example"];export{D as Basic,z as Clear,S as Example,C as Footer,F as Inline,j as Open,g as Playground,I as Range,w as RangePanel,P as Size,L as State,N as Type,Ia as __namedExportsOrder,Ca as default};
