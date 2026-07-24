import{r as R,d as Te,T as He,n as Ge,j as e,a as y,I as E,v as k}from"./iframe-DbjMrqYU.js";import{I as Ie}from"./Input-DZQw_Q7P.js";import{w as u}from"./story-renders-CrEYzOkG.js";import{d as Ue,a as Je}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const qe=new Set(["sm","md","lg"]);function $e(a){if(a===!0||a==="true")return"true";if(a===!1||a==="false")return"false"}function l({ripple:a,size:r="md",disabled:t,error:c,success:f,open:s,placeholder:d,value:m,fit:p,block:_,inline:b,clearable:o,panelWide:i,inputId:x,ariaLabel:B,ariaInvalid:O,panel:ze,children:Le,className:V,style:A,onClear:M,onCalendarClick:Se,...T}){const H=R.useRef(null),{rippleAttrs:Re,childRippleAttrs:G}=Te({ripple:a},{mode:"container"}),v=qe.has(r)?r:"md",U=ze??Le,Ee=!b,Me=!!m,W=!!s;He({ripple:a,size:v,disabled:t,error:c,success:f,open:s,placeholder:d,value:m,fit:p,block:_,inline:b,clearable:o,panelWide:i,inputId:x,ariaLabel:B,ariaInvalid:O},H,{className:V,style:A,...T});const We=R.useMemo(()=>{const n=["date_picker"];return v==="sm"&&n.push("date_picker_sm"),v==="lg"&&n.push("date_picker_lg"),p&&n.push("date_picker_fit"),_&&n.push("date_picker_block"),b&&n.push("date_picker_inline"),t&&n.push("is-disabled"),c&&n.push("is-error"),f&&n.push("is-success"),s&&n.push("is-open"),n},[v,p,_,b,t,c,f,s]),Be=R.useMemo(()=>{const n=["date_picker_input"];return!m&&d&&n.push("date_picker_placeholder"),n},[m,d]),{class:ya,style:xa,onClear:va,onCalendarClick:ga,...Oe}=T,Ve=Ge(Oe);function Ae(n){n.preventDefault(),n.stopPropagation(),M==null||M(n)}return e.jsxs("div",{ref:H,className:y(We,V),style:A,...Re,children:[Ee?e.jsxs("div",{className:"date_picker_trigger",children:[e.jsx("input",{id:x,type:"text",className:y(Be),value:m??"",placeholder:d,readOnly:!0,disabled:t,"aria-haspopup":"dialog","aria-expanded":W?"true":"false","aria-label":B,"aria-invalid":$e(O),...G,...Ve}),o&&Me?e.jsx("button",{type:"button",className:"date_picker_clear","data-ripple":"surface","aria-label":"날짜 지우기",onClick:Ae,children:e.jsx(E,{name:"close",size:"sm"})}):null,e.jsx(k,{variant:"ghost",iconOnly:!0,className:"date_picker_btn",disabled:t,ariaLabel:W?"캘린더 닫기":"캘린더 열기",expanded:W,iconBefore:e.jsx(E,{name:"calendar",size:"sm"}),onClick:Se,...G})]}):null,U!=null||b?e.jsx("div",{className:y("date_picker_panel",i&&"date_picker_panel-wide"),role:"dialog","aria-label":"날짜 선택","data-demo-slot":"panel",children:U}):null]})}l.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Ke=["일","월","화","수","목","금","토"],Ye=[{day:26,otherMonth:!0,disabled:!0},{day:27,otherMonth:!0,disabled:!0},{day:28,otherMonth:!0,disabled:!0},{day:29,otherMonth:!0,disabled:!0},{day:30,otherMonth:!0,disabled:!0},{day:31,otherMonth:!0,disabled:!0},{day:1},{day:2},{day:3},{day:4},{day:5},{day:6},{day:7},{day:8},{day:9},{day:10},{day:11},{day:12},{day:13},{day:14},{day:15,today:!0},{day:16},{day:17},{day:18,selected:!0},{day:19},{day:20},{day:21},{day:22},{day:23},{day:24},{day:25,disabled:!0},{day:26},{day:27},{day:28},{day:29},{day:30},{day:1,otherMonth:!0,disabled:!0},{day:2,otherMonth:!0,disabled:!0},{day:3,otherMonth:!0,disabled:!0},{day:4,otherMonth:!0,disabled:!0},{day:5,otherMonth:!0,disabled:!0},{day:6,otherMonth:!0,disabled:!0}];function Ze(a,r={}){const{selected:t,today:c,disabled:f=[],events:s=[],rangeStart:d,rangeEnd:m}=r;return a.map(p=>{const _=p.day,o=!p.otherMonth?_:null,i={...p};return t!==void 0&&o===t&&(i.selected=!0),c!==void 0&&o===c&&(i.today=!0),o&&f.includes(o)&&(i.disabled=!0),o&&s.includes(o)&&(i.event=!0),d!==void 0&&m!==void 0&&o&&(o===d?(i.selected=!0,i.rangeStart=!0):o===m?(i.selected=!0,i.rangeEnd=!0):o>d&&o<m&&(i.inRange=!0)),i})}function we(a){return Ze(Ye,a)}function Qe(){return we({rangeStart:10,rangeEnd:30}).map(a=>{const r={...a,today:!1};return!a.otherMonth&&a.day!==10&&a.day!==30&&(r.selected=!1),a.otherMonth&&a.day<=6&&(r.inRange=!0,r.disabled=!1),r})}function Xe(){const a=[{day:30,otherMonth:!0,inRange:!0}];for(let r=1;r<=6;r+=1)a.push({day:r,inRange:!0,...r===6?{selected:!0,rangeEnd:!0}:{}});for(let r=7;r<=31;r+=1)a.push({day:r});for(let r=1;r<=10;r+=1)a.push({day:r,otherMonth:!0,disabled:!0});return a}function ea({day:a,otherMonth:r,today:t,selected:c,disabled:f,sunday:s,saturday:d,rangeStart:m,rangeEnd:p,inRange:_,event:b}){const i=f||r&&!(c||_||m||p);return e.jsx("button",{type:"button",className:y("calendar_day",r&&"is-other-month",t&&"is-today",c&&"is-selected",i&&"is-disabled",s&&"is-sunday",d&&"is-saturday",m&&"is-range-start",p&&"is-range-end",_&&"is-in-range",b&&"has-event"),disabled:i||void 0,"aria-current":t?"date":void 0,"aria-selected":c?"true":void 0,children:a})}function aa(){return e.jsx("div",{className:"calendar_weekdays","aria-hidden":"true",children:Ke.map(a=>e.jsx("span",{className:"calendar_weekday",children:a},a))})}function ra({days:a,selected:r,today:t,weekends:c}){const f=(a??we({selected:r,today:t})).map((s,d)=>c?{...s,sunday:s.sunday??d%7===0,saturday:s.saturday??d%7===6}:s);return e.jsx("div",{className:"calendar_month",style:{display:"contents"},children:e.jsx("div",{className:"calendar_grid",role:"grid",children:f.map((s,d)=>e.jsx(ea,{...s},`${s.day}-${d}`))})})}function la({title:a,showPrev:r=!0,showNext:t=!0}){return e.jsxs("div",{className:"calendar_header",children:[r?e.jsx(k,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"이전 달",iconBefore:e.jsx(E,{name:"chevron-left",size:"sm"})}):null,e.jsx("span",{className:"calendar_title",children:a}),t?e.jsx(k,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"다음 달",iconBefore:e.jsx(E,{name:"chevron-right",size:"sm"})}):null]})}function sa(){return e.jsxs("div",{className:"calendar_footer",children:[e.jsx(k,{variant:"text",color:"primary",size:"sm",label:"오늘"}),e.jsxs("div",{className:"calendar_footer-actions",children:[e.jsx(k,{variant:"ghost",size:"sm",label:"초기화"}),e.jsx(k,{variant:"filled",color:"primary",size:"sm",label:"확인"})]})]})}function h({ariaLabel:a,title:r,noHeader:t,compact:c,borderless:f,weekends:s,selected:d=18,today:m=15,days:p,showHeader:_,showFooter:b,showPrev:o,showNext:i}){const x=_??(!t&&!!r);return e.jsxs("div",{className:y("calendar",t&&"calendar_no-header",c&&"calendar_compact",f&&"calendar_borderless",s&&"calendar_weekends"),role:"application","aria-label":a,children:[x?e.jsx(la,{title:r,showPrev:o,showNext:i}):null,e.jsx(aa,{}),e.jsx(ra,{days:p,selected:d,today:m,weekends:s}),b?e.jsx(sa,{}):null]})}function Fe({children:a}){return e.jsx("div",{className:"calendar_group",children:a})}function ta(){return{juneDays:Qe(),julyDays:Xe()}}h.__docgenInfo={description:"",methods:[],displayName:"DemoCalendar",props:{selected:{defaultValue:{value:"18",computed:!1},required:!1},today:{defaultValue:{value:"15",computed:!1},required:!1}}};Fe.__docgenInfo={description:"",methods:[],displayName:"DemoCalendarGroup"};const ia=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],da=[{name:"value",type:"string",default:"—",description:"표시할 날짜 문자열"},{name:"placeholder",type:"string",default:"—",description:"미선택 placeholder"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"date_picker_sm · date_picker_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"error",type:"boolean",default:"false",description:"오류 (is-error)"},{name:"success",type:"boolean",default:"false",description:"성공 (is-success)"},{name:"open",type:"boolean",default:"false",description:"패널 열림 (is-open)"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 (date_picker_fit)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"inline",type:"boolean",default:"false",description:"트리거 없이 패널만 (date_picker_inline)"},{name:"clearable",type:"boolean",default:"false",description:"지우기 버튼"},{name:"panel-wide",type:"boolean",default:"false",description:"넓은 패널 (date_picker_panel-wide)"},{name:"input-id",type:"string",default:"—",description:"입력 필드 id (label for 연결)"},{name:"aria-label",type:"string",default:"—",description:"입력 접근성 라벨"},{name:"aria-invalid",type:"boolean | string",default:"—",description:"입력 aria-invalid"},Ue],oa=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],na=[{name:"date_picker",description:"루트"},{name:"date_picker_sm · date_picker_lg · date_picker_fit · date_picker_block",description:"크기·너비"},{name:"date_picker_inline",description:"인라인 패널"},{name:"date_picker_trigger · date_picker_input · date_picker_btn",description:"트리거 영역"},{name:"date_picker_clear · date_picker_placeholder",description:'지우기(data-ripple="surface")·placeholder'},{name:"date_picker_panel · date_picker_panel-wide",description:"드롭다운 패널"},{name:"is-open · is-error · is-success · is-disabled",description:"상태"},...Je],ca=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ma=[{name:"--date-picker-input-padding-y · --date-picker-input-padding-x",default:"0.5rem · 0.75rem",description:"입력 패딩"},{name:"--date-picker-btn-size · --date-picker-icon-size",default:"2.25rem · 1rem",description:"캘린더 버튼·아이콘"}],pa=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],fa=[{name:"panel",description:"캘린더 패널 콘텐츠 (Vue #panel 슬롯 대응)"},{name:"children",description:"panel prop 대체. Calendar 등 패널 콘텐츠"}],ua=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: panel-wide, input-id)와 동일한 의미입니다.",tables:[{columns:ia,rows:da,codeColumn:"name"}]},{title:"API · Children",description:"Vue #panel 슬롯에 대응하는 React panel·children prop입니다.",tables:[{columns:pa,rows:fa,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:oa,rows:na,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ca,rows:ma,codeColumn:"name"}]}],_a={size:"md",disabled:!1,error:!1,success:!1,open:!1,placeholder:"날짜를 선택하세요",value:"2024-06-18",fit:!0,block:!1,inline:!1,clearable:!1,panelWide:!1,inputId:"dp-playground",ariaLabel:"날짜 선택"},{juneDays:ba,julyDays:ka}=ta(),Ia={title:"Components/폼/DatePicker",id:"components-date-picker",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},success:{control:"boolean",type:{name:"boolean",summary:"boolean"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"text",type:{name:"string",summary:"string"}},value:{control:"text",type:{name:"string",summary:"string"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},clearable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},panelWide:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inputId:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:ua,docs:{description:{component:"읽기 전용 입력과 캘린더 버튼으로 날짜를 고르는 트리거입니다. 패널에는 Calendar 등을 조합합니다."}}}},g={parameters:{controls:{disable:!1}},args:{..._a},render:(a,{updateArgs:r})=>e.jsx(l,{...a,onClear:()=>r({value:""}),onCalendarClick:()=>r({open:!a.open}),panel:a.open||a.inline?e.jsx(h,{noHeader:!0,compact:!0,borderless:!0,weekends:!0,ariaLabel:"2024년 6월",selected:18,today:15}):null})},N={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'네이티브 input type="date"는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.'},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
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
}`,language:"tsx"}}},render:u(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-type-native",children:'네이티브 — input type="date"'}),e.jsx(Ie,{id:"dp-type-native",type:"date"}),e.jsx("p",{className:"form_field-hint",children:"간단한 폼·모바일 환경에 적합합니다."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-type-custom",children:"커스텀 — date_picker"}),e.jsx(l,{inputId:"dp-type-custom",placeholder:"날짜를 선택하세요",fit:!0,ariaLabel:"날짜 선택"}),e.jsx("p",{className:"form_field-hint",children:"커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다."})]})]}))},D={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,language:"tsx"}}},render:u(e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-basic",children:"예약 날짜"}),e.jsx(l,{inputId:"dp-basic",value:"2024-06-18",fit:!0}),e.jsx("p",{className:"form_field-hint",children:"체크인 날짜를 선택해 주세요."})]}))},P={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,language:"tsx"}}},render:u(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-size-sm",children:"Small"}),e.jsx(l,{inputId:"dp-size-sm",size:"sm",value:"2024-06-18",fit:!0})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-size-md",children:"Medium"}),e.jsx(l,{inputId:"dp-size-md",value:"2024-06-18",fit:!0})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-size-lg",children:"Large"}),e.jsx(l,{inputId:"dp-size-lg",size:"lg",value:"2024-06-18",fit:!0})]})]}))},j={name:"패널 열림",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'is-open 클래스와 aria-expanded="true"로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.'},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
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
}`,language:"tsx"}}},render:u(e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-open",children:"날짜"}),e.jsx(l,{inputId:"dp-open",value:"2024-06-18",fit:!0,open:!0,panel:e.jsx(h,{noHeader:!0,compact:!0,borderless:!0,weekends:!0,ariaLabel:"2024년 6월",selected:18,today:15})})]}))},C={name:"푸터 액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,language:"tsx"}}},render:u(e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-footer",children:"일정 날짜"}),e.jsx(l,{inputId:"dp-footer",value:"2024-06-18",fit:!0,open:!0,panel:e.jsx(h,{compact:!0,borderless:!0,weekends:!0,ariaLabel:"2024년 6월",title:"2024년 6월",selected:18,today:15,showFooter:!0})})]}))},I={name:"기간 선택",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,language:"tsx"}}},render:u(e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"dp-range-label",children:"조회 기간"}),e.jsxs("div",{className:"date_picker_range",role:"group","aria-labelledby":"dp-range-label",children:[e.jsx(l,{value:"2024-06-10",ariaLabel:"시작일"}),e.jsx("span",{className:"date_picker_sep","aria-hidden":"true",children:"~"}),e.jsx(l,{value:"2024-06-18",ariaLabel:"종료일"})]}),e.jsx("p",{className:"form_field-hint",children:"최대 90일까지 조회할 수 있습니다."})]}))},w={name:"이중 캘린더 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,language:"tsx"}}},render:u(e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"dp-range-panel-label",children:"숙박 기간"}),e.jsx(l,{block:!0,open:!0,panelWide:!0,inputId:"dp-range-panel-label",value:"2024-06-10 ~ 2024-07-06",ariaLabel:"숙박 기간",style:{maxWidth:"20rem"},panel:e.jsxs(Fe,{children:[e.jsx(h,{compact:!0,borderless:!0,ariaLabel:"2024년 6월",title:"2024년 6월",showNext:!1,days:ba}),e.jsx(h,{compact:!0,borderless:!0,ariaLabel:"2024년 7월",title:"2024년 7월",showPrev:!1,days:ka})]})})]}))},F={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

export function InlineExample() {
  return (
    <DatePicker inline>
      {/* Calendar panel */}
    </DatePicker>
  );
}`,language:"tsx"}}},render:u(e.jsx(l,{inline:!0,panel:e.jsx(h,{compact:!0,weekends:!0,ariaLabel:"2024년 6월",title:"2024년 6월",selected:18,today:15})}))};function ha(){const[a,r]=R.useState("2024-06-18");return e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-clear",children:"필터 날짜"}),e.jsx(l,{inputId:"dp-clear",value:a,fit:!0,clearable:!0,onClear:()=>r("")})]})}const z={name:"값 초기화",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';
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
}`,language:"tsx"}}},render:u(e.jsx(ha,{}))},L={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다."},source:{code:`import DatePicker from '@uxkm/ui-react/components/DatePicker.jsx';

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
}`,language:"tsx"}}},render:u(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-placeholder",children:"플레이스홀더"}),e.jsx(l,{inputId:"dp-state-placeholder",placeholder:"날짜를 선택하세요",fit:!0})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-disabled",children:"비활성"}),e.jsx(l,{inputId:"dp-state-disabled",value:"2024-06-18",fit:!0,disabled:!0}),e.jsx("p",{className:"form_field-hint",children:"is-disabled 클래스와 disabled 속성으로 선택을 막습니다."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-error",children:"에러"}),e.jsx(l,{inputId:"dp-state-error",placeholder:"날짜를 선택하세요",fit:!0,error:!0,ariaInvalid:!0,"aria-describedby":"dp-state-error-msg"}),e.jsx("p",{className:"form_field-error",id:"dp-state-error-msg",role:"alert",children:"날짜를 선택해 주세요."})]}),e.jsxs("div",{className:"form_field form_field_fit",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-state-success",children:"성공"}),e.jsx(l,{inputId:"dp-state-success",value:"2024-06-18",fit:!0,success:!0,ariaInvalid:!1,"aria-describedby":"dp-state-success-msg"}),e.jsx("p",{className:"form_field-success",id:"dp-state-success-msg",role:"status",children:"예약 가능한 날짜입니다."})]})]}))},S={name:"조합 예시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"form_inline과 date_picker_range를 조합한 검색 필터 폼입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
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
}`,language:"tsx"}}},render:u(e.jsxs("form",{className:"form form_inline",action:"#",method:"get",children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"dp-example-keyword",children:"키워드"}),e.jsx(Ie,{id:"dp-example-keyword",type:"search",placeholder:"검색어",style:{minWidth:"10rem"}})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"dp-example-range-label",children:"기간"}),e.jsxs("div",{className:"date_picker_range",role:"group","aria-labelledby":"dp-example-range-label",children:[e.jsx(l,{size:"sm",placeholder:"시작일",ariaLabel:"시작일",style:{minWidth:"9rem"}}),e.jsx("span",{className:"date_picker_sep","aria-hidden":"true",children:"~"}),e.jsx(l,{placeholder:"종료일",ariaLabel:"종료일",style:{minWidth:"9rem"}})]})]}),e.jsxs("div",{className:"form_actions",children:[e.jsx(k,{type:"submit",variant:"filled",color:"primary",label:"검색"}),e.jsx(k,{type:"reset",variant:"ghost",label:"초기화"})]})]}))};var J,q,$;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(le=(re=P.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,te,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,oe,ne;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ne=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ce,me,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(_e=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}};var be,ke,he;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var ye,xe,ve;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ge,Ne,De;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ce=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};const wa=["Playground","Type","Basic","Size","Open","Footer","Range","RangePanel","Inline","Clear","State","Example"];export{D as Basic,z as Clear,S as Example,C as Footer,F as Inline,j as Open,g as Playground,I as Range,w as RangePanel,P as Size,L as State,N as Type,wa as __namedExportsOrder,Ia as default};
