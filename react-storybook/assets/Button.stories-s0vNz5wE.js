import{B as e,j as a,I as l}from"./iframe-ifEc15ad.js";import{w as t,b as Ba}from"./story-renders-Hdz_JUlO.js";import{r as ga,a as ya}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const wa=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],_a=[{name:"variant",type:"'filled' | 'outline' | 'ghost' | 'text' | 'select'",default:"filled",description:"버튼 스킨. select는 셀렉트 박스형 트리거"},{name:"color",type:"'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'",default:"primary",description:"색상 변형. text 스킨에서는 톤(muted·danger 등)으로 사용"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"버튼 크기"},{name:"label",type:"string",default:"—",description:"버튼 텍스트. default 슬롯으로 대체 가능"},{name:"round",type:"boolean",default:"false",description:"pill(캡슐) 형태 모서리"},{name:"vertical",type:"boolean",default:"false",description:"아이콘 위 · 텍스트 아래 세로 배치"},{name:"icon-only",type:"boolean",default:"false",description:"아이콘만 표시. aria-label 필수"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"grow",type:"boolean | '2'",default:"false",description:"flex 비율 분배. 2는 2배 너비"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 유지"},{name:"disabled",type:"boolean",default:"false",description:"HTML disabled 속성"},{name:"aria-disabled",type:"boolean",default:"false",description:"is-disabled 클래스와 함께 비활성 표현"},{name:"loading",type:"boolean",default:"false",description:"로딩 스피너 표시"},{name:"open",type:"boolean",default:"false",description:"셀렉트 트리거 열림 상태"},{name:"error",type:"boolean",default:"false",description:"셀렉트 트리거 오류 상태"},{name:"placeholder",type:"boolean",default:"false",description:"셀렉트 미선택 placeholder 스타일"},{name:"select-text",type:"boolean",default:"false",description:"배경·테두리 없는 셀렉트 텍스트 형태"},{name:"type",type:"'button' | 'submit' | 'reset'",default:"button",description:'button 요소 type 속성 (tag="button"일 때만)'},{name:"tag",type:"'button' | 'a' | 'div'",default:"button",description:"루트 HTML 태그. div·href 없는 a는 role + tabindex=0 자동 적용"},{name:"href",type:"string",default:"—",description:'tag="a"일 때 href. 있으면 네이티브 링크(Tab 초점 자동), 없으면 role+tabindex 필요'},{name:"role",type:"'button' | 'link'",default:"—",description:'tag="a"이고 href 없을 때 의미 지정. role만으로 Tab 초점 불가 — tabindex 자동 부여'},{name:"tabindex",type:"number",default:"—",description:"Tab 순서 수동 지정. div·href 없는 a는 기본 0, 비활성 -1"},{name:"aria-label",type:"string",default:"—",description:"접근성 라벨 (icon-only 시 필수)"},{name:"haspopup",type:"string",default:"—",description:"aria-haspopup (셀렉트·드롭다운 트리거)"},{name:"expanded",type:"boolean",default:"—",description:"aria-expanded (셀렉트·팝오버 트리거)"},{name:"invalid",type:"boolean",default:"false",description:"aria-invalid (폼 오류)"},ga],ha=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ja=[{name:"btn",description:"루트 구조 클래스"},{name:"btn_filled",description:"배경 채움 스킨"},{name:"btn_outline",description:"테두리 스킨"},{name:"btn_ghost",description:"투명 배경 스킨"},{name:"btn_text",description:"텍스트만 스킨"},{name:"btn_select",description:"셀렉트 박스형 트리거"},{name:"btn_select-text",description:"텍스트형 셀렉트 트리거"},{name:"btn_sm · btn_lg",description:"크기 변형"},{name:"btn_round",description:"pill(캡슐) 모서리"},{name:"btn_vertical",description:"아이콘 위 · 텍스트 아래"},{name:"btn_icon-only",description:"아이콘만"},{name:"btn_block · btn_grow · btn_fit",description:"너비 레이아웃"},{name:"icon · btn_label · btn_spinner",description:"내부 파트"},{name:"btn_row · btn_group · btn_stack",description:"버튼 묶음 컨테이너"},{name:"is-disabled · is-loading · is-open · is-error",description:"상태 클래스"},{name:"color_primary · color_danger …",description:"색상 유틸 (스킨과 조합)"},...ya],Ia=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ka=[{name:"--btn-padding-y · --btn-padding-x · --btn-font-size",default:"0.5rem · 1rem · var(--text-size-base)",description:"기본(md) 패딩·타이포"},{name:"--btn-padding-y-sm · --btn-padding-x-sm · --btn-font-size-sm",default:"0.3rem · 0.75rem · var(--text-size-sm)",description:"sm 크기"},{name:"--btn-padding-y-lg · --btn-padding-x-lg · --btn-font-size-lg",default:"0.65rem · 1.25rem · var(--text-size-lg)",description:"lg 크기"},{name:"--btn-font-weight · --btn-font-weight-normal · --btn-line-height",default:"600 · 400 · 1.4",description:"타이포 두께·줄높이"},{name:"--btn-border-width · --btn-gap",default:"1px · var(--space-sm)",description:"테두리·내부 간격"},{name:"--btn-icon-size · --btn-icon-size-md · --btn-icon-size-lg · --btn-icon-size-xl",default:"1em · 1.125em · 1.25em · 1.375em",description:"아이콘 크기"},{name:"--btn-icon-only-padding · -sm · -lg",default:"0.5rem · 0.35rem · 0.65rem",description:"아이콘만 버튼 패딩"},{name:"--btn-vertical-min-width · -sm · -lg",default:"4.5rem · 3.75rem · 5.25rem",description:"세로 배치 최소 너비"},{name:"--btn-vertical-padding-y · --btn-vertical-padding-x",default:"0.65rem · 0.75rem",description:"세로 배치 패딩(md)"},{name:"--btn-vertical-label-size · --btn-vertical-label-weight",default:"var(--text-size-sm) · 500",description:"세로 배치 라벨"},{name:"--btn-select-min-width · --btn-select-max-width",default:"10rem · 320px",description:"셀렉트 트리거 너비"},{name:"--btn-select-padding-right · -sm · -lg",default:"0.65rem · 0.5rem · 0.85rem",description:"셀렉트 캐럿 여백"},{name:"--btn-select-text-padding-x · --btn-select-text-padding-right",default:"0.5rem · 0.35rem",description:"텍스트형 셀렉트 패딩"},{name:"--btn-spinner-size · --btn-spinner-border · --btn-spinner-duration",default:"1em · 2px · 0.6s",description:"로딩 스피너"},{name:"--btn-stack-text-size · --btn-stack-text-line-height",default:"var(--text-size-sm) · 1.5",description:"스택 하단 안내 텍스트"},{name:"--btn-group-overlap",default:"-1px",description:"그룹 버튼 테두리 겹침"}],Na=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],za=[{name:"label",description:"버튼 텍스트. children으로 대체 가능"},{name:"children",description:"버튼 텍스트 (label prop 대체). iconOnly일 때 iconBefore가 없으면 아이콘 콘텐츠로 사용"},{name:"iconBefore",description:"텍스트 앞 아이콘 (Vue #icon-before 슬롯 대응)"},{name:"iconAfter",description:"텍스트 뒤 아이콘 (Vue #icon-after 슬롯 대응)"}],La=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: icon-only, aria-disabled)와 동일한 의미입니다.",tables:[{columns:wa,rows:_a,codeColumn:"name"}]},{title:"API · Children",description:"Vue 슬롯(default · icon-before · icon-after)에 대응하는 React prop·children입니다.",tables:[{columns:Na,rows:za,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ha,rows:ja,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ia,rows:ka,codeColumn:"name"}]}],Oa={variant:"filled",color:"primary",size:"md",round:!1,vertical:!1,iconOnly:!1,block:!1,grow:!1,fit:!1,disabled:!1,ariaDisabled:!1,loading:!1,open:!1,error:!1,placeholder:!1,selectText:!1,label:"라벨",ariaLabel:"접근성 라벨",type:"button",haspopup:"",expanded:!1,invalid:!1,tag:"button",href:"",role:""},Pa={title:"Components/기본 요소/Button",id:"components-button",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outline","ghost","text","select"],type:{name:"enum",summary:"'filled' | 'outline' | 'ghost' | 'text' | 'select'"}},color:{control:"select",options:["primary","default","success","warning","danger","muted"],type:{name:"enum",summary:"'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},grow:{control:"select",options:[!1,!0,"2"],labels:{false:"false",true:"true",2:"2"},type:{name:"enum",summary:"boolean | '2'"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaDisabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},loading:{control:"boolean",type:{name:"boolean",summary:"boolean"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"boolean",type:{name:"boolean",summary:"boolean"}},selectText:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},type:{control:"select",options:["button","submit","reset"],type:{name:"enum",summary:"'button' | 'submit' | 'reset'"}},haspopup:{control:"text",type:{name:"string",summary:"string"}},expanded:{control:"boolean",type:{name:"boolean",summary:"boolean"}},invalid:{control:"boolean",type:{name:"boolean",summary:"boolean"}},tag:{control:"select",options:["button","a","div"],type:{name:"enum",summary:"'button' | 'a' | 'div'"}},href:{control:"text",type:{name:"string",summary:"string"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:La,controls:{disable:!1},docs:{description:{component:"사용자 액션을 트리거하는 버튼 컴포넌트입니다."}}}},r={parameters:{controls:{disable:!1}},args:{...Oa},render:Ba(e)},o={name:"기본 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';

export function BasicExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" label="Filled Primary" />
        <Button variant="filled" color="default" label="Filled Default" />
        <Button variant="outline" color="primary" label="Outline" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="text" color="primary" label="Text" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="success" label="Success" />
        <Button variant="filled" color="warning" label="Warning" />
        <Button variant="filled" color="danger" label="Danger" />
        <Button variant="outline" color="danger" label="Outline Danger" />
        <Button variant="text" color="danger" label="Text Danger" />
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",label:"Filled Primary"}),a.jsx(e,{variant:"filled",color:"default",label:"Filled Default"}),a.jsx(e,{variant:"outline",color:"primary",label:"Outline"}),a.jsx(e,{variant:"ghost",label:"Ghost"}),a.jsx(e,{variant:"text",color:"primary",label:"Text"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"success",label:"Success"}),a.jsx(e,{variant:"filled",color:"warning",label:"Warning"}),a.jsx(e,{variant:"filled",color:"danger",label:"Danger"}),a.jsx(e,{variant:"outline",color:"danger",label:"Outline Danger"}),a.jsx(e,{variant:"text",color:"danger",label:"Text Danger"})]})]}))},n={name:"셀렉트 박스형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 haspopup·expanded prop으로 aria-haspopup·aria-expanded를 지정합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';

export function TypeSelectExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="select" label="서울특별시" haspopup="listbox" />
        <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
        <Button variant="select" open label="카테고리" haspopup="listbox" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="select" size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" label="Medium" haspopup="listbox" />
        <Button variant="select" size="lg" label="Large" haspopup="listbox" />
        <Button variant="select" disabled label="비활성" haspopup="listbox" />
        <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
      </div>
      <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
      <div className="btn_row btn_row-wrap">
        <Button variant="select" selectText label="최신순" haspopup="listbox" />
        <Button variant="select" selectText placeholder label="정렬 기준" haspopup="listbox" />
        <Button variant="select" selectText open label="필터" haspopup="listbox" />
        <Button variant="select" selectText size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" selectText disabled label="비활성" haspopup="listbox" />
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"select",label:"서울특별시",haspopup:"listbox"}),a.jsx(e,{variant:"select",placeholder:!0,label:"옵션을 선택하세요",haspopup:"listbox"}),a.jsx(e,{variant:"select",open:!0,label:"카테고리",haspopup:"listbox"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"select",size:"sm",label:"Small",haspopup:"listbox"}),a.jsx(e,{variant:"select",label:"Medium",haspopup:"listbox"}),a.jsx(e,{variant:"select",size:"lg",label:"Large",haspopup:"listbox"}),a.jsx(e,{variant:"select",disabled:!0,label:"비활성",haspopup:"listbox"}),a.jsx(e,{variant:"select",error:!0,invalid:!0,label:"필수 선택",haspopup:"listbox"})]}),a.jsx(e,{variant:"select",block:!0,label:"전체 너비 셀렉트 트리거",haspopup:"listbox"}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"select",selectText:!0,label:"최신순",haspopup:"listbox"}),a.jsx(e,{variant:"select",selectText:!0,placeholder:!0,label:"정렬 기준",haspopup:"listbox"}),a.jsx(e,{variant:"select",selectText:!0,open:!0,label:"필터",haspopup:"listbox"}),a.jsx(e,{variant:"select",selectText:!0,size:"sm",label:"Small",haspopup:"listbox"}),a.jsx(e,{variant:"select",selectText:!0,disabled:!0,label:"비활성",haspopup:"listbox"})]})]}))},i={name:"텍스트 버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeTextExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="Primary" />
        <Button variant="text" color="muted" label="Muted" />
        <Button variant="text" color="danger" label="Danger" />
        <Button variant="text" color="success" label="Success" />
        <Button variant="text" color="warning" label="Warning" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="danger" label="삭제" iconBefore={<Icon name="trash" />} />
        <Button variant="text" color="success" label="완료" iconBefore={<Icon name="check-circle" />} />
        <Button variant="text" color="warning" label="주의" iconAfter={<Icon name="alert-triangle" />} />
        <Button variant="text" color="muted" label="자세히" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="더 보기" />
        <Button variant="text" color="primary" label="링크 복사" />
        <Button variant="text" color="primary" label="취소" />
        <Button variant="text" color="primary" label="건너뛰기" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="text" color="primary" label="다운로드" iconBefore={<Icon name="download" />} />
        <Button variant="text" color="primary" label="링크 열기" iconBefore={<Icon name="external-link" />} />
        <Button variant="text" color="primary" label="설정" iconBefore={<Icon name="settings" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="다음" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" label="전체 보기" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" label="삭제" iconAfter={<Icon name="trash" />} />
        <Button variant="text" color="primary" label="새로고침" iconAfter={<Icon name="refresh" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" size="sm" label="Small" />
        <Button variant="text" color="primary" label="Medium" />
        <Button variant="text" color="primary" size="lg" label="Large" />
        <Button variant="text" color="primary" size="sm" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="text" color="primary" size="lg" label="다음" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" iconOnly ariaLabel="검색" iconBefore={<Icon name="search" />} />
        <Button variant="text" color="primary" iconOnly ariaLabel="편집" iconBefore={<Icon name="edit" />} />
        <Button variant="text" color="primary" iconOnly size="sm" ariaLabel="닫기" iconBefore={<Icon name="close" />} />
        <Button variant="text" color="primary" disabled label="비활성" />
        <Button variant="text" color="primary" disabled label="비활성" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" ariaDisabled label="is-disabled" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"primary",label:"Primary"}),a.jsx(e,{variant:"text",color:"muted",label:"Muted"}),a.jsx(e,{variant:"text",color:"danger",label:"Danger"}),a.jsx(e,{variant:"text",color:"success",label:"Success"}),a.jsx(e,{variant:"text",color:"warning",label:"Warning"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"danger",label:"삭제",iconBefore:a.jsx(l,{name:"trash"})}),a.jsx(e,{variant:"text",color:"success",label:"완료",iconBefore:a.jsx(l,{name:"check-circle"})}),a.jsx(e,{variant:"text",color:"warning",label:"주의",iconAfter:a.jsx(l,{name:"alert-triangle"})}),a.jsx(e,{variant:"text",color:"muted",label:"자세히",iconAfter:a.jsx(l,{name:"chevron-right"})})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"primary",label:"더 보기"}),a.jsx(e,{variant:"text",color:"primary",label:"링크 복사"}),a.jsx(e,{variant:"text",color:"primary",label:"취소"}),a.jsx(e,{variant:"text",color:"primary",label:"건너뛰기"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"primary",label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"text",color:"primary",label:"다운로드",iconBefore:a.jsx(l,{name:"download"})}),a.jsx(e,{variant:"text",color:"primary",label:"링크 열기",iconBefore:a.jsx(l,{name:"external-link"})}),a.jsx(e,{variant:"text",color:"primary",label:"설정",iconBefore:a.jsx(l,{name:"settings"})})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"primary",label:"다음",iconAfter:a.jsx(l,{name:"chevron-right"})}),a.jsx(e,{variant:"text",color:"primary",label:"전체 보기",iconAfter:a.jsx(l,{name:"chevron-right"})}),a.jsx(e,{variant:"text",color:"primary",label:"삭제",iconAfter:a.jsx(l,{name:"trash"})}),a.jsx(e,{variant:"text",color:"primary",label:"새로고침",iconAfter:a.jsx(l,{name:"refresh"})})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"primary",size:"sm",label:"Small"}),a.jsx(e,{variant:"text",color:"primary",label:"Medium"}),a.jsx(e,{variant:"text",color:"primary",size:"lg",label:"Large"}),a.jsx(e,{variant:"text",color:"primary",size:"sm",label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"text",color:"primary",size:"lg",label:"다음",iconAfter:a.jsx(l,{name:"chevron-right"})})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"text",color:"primary",iconOnly:!0,ariaLabel:"검색",iconBefore:a.jsx(l,{name:"search"})}),a.jsx(e,{variant:"text",color:"primary",iconOnly:!0,ariaLabel:"편집",iconBefore:a.jsx(l,{name:"edit"})}),a.jsx(e,{variant:"text",color:"primary",iconOnly:!0,size:"sm",ariaLabel:"닫기",iconBefore:a.jsx(l,{name:"close"})}),a.jsx(e,{variant:"text",color:"primary",disabled:!0,label:"비활성"}),a.jsx(e,{variant:"text",color:"primary",disabled:!0,label:"비활성",iconAfter:a.jsx(l,{name:"chevron-right"})}),a.jsx(e,{variant:"text",color:"primary",ariaDisabled:!0,label:"is-disabled",iconAfter:a.jsx(l,{name:"chevron-right"})})]}),a.jsx(e,{variant:"text",color:"primary",block:!0,label:"전체 너비 텍스트 버튼"})]}))},c={name:"아이콘 + 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconTextExample() {
  return (
    <>
      <Button variant="filled" color="primary" label="추가" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" label="다운로드" iconBefore={<Icon name="download" />} />
      <Button variant="outline" color="primary" label="새 항목" iconBefore={<Icon name="plus" />} />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"primary",label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"default",label:"다운로드",iconBefore:a.jsx(l,{name:"download"})}),a.jsx(e,{variant:"outline",color:"primary",label:"새 항목",iconBefore:a.jsx(l,{name:"plus"})})]}))},s={name:"아이콘 + 텍스트 (세로)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconTextVerticalExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical label="홈" iconBefore={<Icon name="home" />} />
        <Button variant="filled" color="default" vertical label="검색" iconBefore={<Icon name="search" />} />
        <Button variant="ghost" vertical label="마이" iconBefore={<Icon name="user" />} />
        <Button variant="text" color="primary" vertical label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="outline" color="primary" vertical label="다운로드" iconBefore={<Icon name="download" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical size="sm" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="primary" vertical label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="primary" vertical size="lg" label="추가" iconBefore={<Icon name="plus" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="default" vertical round label="가이드" iconBefore={<Icon name="book" />} />
        <Button variant="filled" color="primary" vertical round label="즐겨찾기" iconBefore={<Icon name="star" />} />
        <Button variant="ghost" vertical disabled label="삭제" iconBefore={<Icon name="trash" />} />
        <Button variant="filled" color="primary" vertical loading label="저장 중" />
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",vertical:!0,label:"홈",iconBefore:a.jsx(l,{name:"home"})}),a.jsx(e,{variant:"filled",color:"default",vertical:!0,label:"검색",iconBefore:a.jsx(l,{name:"search"})}),a.jsx(e,{variant:"ghost",vertical:!0,label:"마이",iconBefore:a.jsx(l,{name:"user"})}),a.jsx(e,{variant:"text",color:"primary",vertical:!0,label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"outline",color:"primary",vertical:!0,label:"다운로드",iconBefore:a.jsx(l,{name:"download"})})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",vertical:!0,size:"sm",label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"primary",vertical:!0,label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"primary",vertical:!0,size:"lg",label:"추가",iconBefore:a.jsx(l,{name:"plus"})})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"default",vertical:!0,round:!0,label:"가이드",iconBefore:a.jsx(l,{name:"book"})}),a.jsx(e,{variant:"filled",color:"primary",vertical:!0,round:!0,label:"즐겨찾기",iconBefore:a.jsx(l,{name:"star"})}),a.jsx(e,{variant:"ghost",vertical:!0,disabled:!0,label:"삭제",iconBefore:a.jsx(l,{name:"trash"})}),a.jsx(e,{variant:"filled",color:"primary",vertical:!0,loading:!0,label:"저장 중"})]})]}))},d={name:"아이콘 + 텍스트 (세로) · 균등 배분",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconTextVerticalEqualExample() {
  return (
    <div className="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <Button variant="text" color="primary" vertical label="홈" iconBefore={<Icon name="home" />} />
      <Button variant="text" color="primary" vertical label="카테고리" iconBefore={<Icon name="grid" />} />
      <Button variant="filled" color="primary" vertical label="장바구니" iconBefore={<Icon name="cart" />} />
      <Button variant="text" color="primary" vertical label="마이" iconBefore={<Icon name="user" />} />
    </div>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs("div",{className:"btn_row-equal",role:"toolbar","aria-label":"하단 탭 바",children:[a.jsx(e,{variant:"text",color:"primary",vertical:!0,label:"홈",iconBefore:a.jsx(l,{name:"home"})}),a.jsx(e,{variant:"text",color:"primary",vertical:!0,label:"카테고리",iconBefore:a.jsx(l,{name:"grid"})}),a.jsx(e,{variant:"filled",color:"primary",vertical:!0,label:"장바구니",iconBefore:a.jsx(l,{name:"cart"})}),a.jsx(e,{variant:"text",color:"primary",vertical:!0,label:"마이",iconBefore:a.jsx(l,{name:"user"})})]}))},u={name:"텍스트 + 아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeTextIconExample() {
  return (
    <>
      <Button variant="filled" color="primary" label="다음" iconAfter={<Icon name="chevron-right" />} />
      <Button variant="filled" color="default" label="자세히 보기" iconAfter={<Icon name="external-link" />} />
      <Button variant="text" color="primary" label="링크 이동" iconAfter={<Icon name="chevron-right" />} />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"primary",label:"다음",iconAfter:a.jsx(l,{name:"chevron-right"})}),a.jsx(e,{variant:"filled",color:"default",label:"자세히 보기",iconAfter:a.jsx(l,{name:"external-link"})}),a.jsx(e,{variant:"text",color:"primary",label:"링크 이동",iconAfter:a.jsx(l,{name:"chevron-right"})})]}))},b={name:"아이콘 버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"텍스트 없이 아이콘만 표시합니다. iconOnly와 함께 사용하며, 접근성을 위해 ariaLabel을 반드시 지정합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconOnlyExample() {
  return (
    <>
      <Button variant="filled" color="primary" iconOnly ariaLabel="추가" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" iconOnly ariaLabel="설정" iconBefore={<Icon name="settings" />} />
      <Button variant="ghost" iconOnly ariaLabel="검색" iconBefore={<Icon name="search" />} />
      <Button variant="outline" color="primary" iconOnly ariaLabel="편집" iconBefore={<Icon name="edit" />} />
      <Button variant="filled" color="danger" iconOnly ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
      <Button variant="filled" color="primary" iconOnly disabled ariaLabel="추가" iconBefore={<Icon name="plus" />} />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"primary",iconOnly:!0,ariaLabel:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"default",iconOnly:!0,ariaLabel:"설정",iconBefore:a.jsx(l,{name:"settings"})}),a.jsx(e,{variant:"ghost",iconOnly:!0,ariaLabel:"검색",iconBefore:a.jsx(l,{name:"search"})}),a.jsx(e,{variant:"outline",color:"primary",iconOnly:!0,ariaLabel:"편집",iconBefore:a.jsx(l,{name:"edit"})}),a.jsx(e,{variant:"filled",color:"danger",iconOnly:!0,ariaLabel:"삭제",iconBefore:a.jsx(l,{name:"trash"})}),a.jsx(e,{variant:"filled",color:"primary",iconOnly:!0,disabled:!0,ariaLabel:"추가",iconBefore:a.jsx(l,{name:"plus"})})]}))},m={name:"아이콘 버튼 크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"btn_sm · md(기본) · btn_lg 세 가지 크기를 지원합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconOnlySizeExample() {
  return (
    <>
      <Button variant="filled" color="primary" iconOnly size="sm" ariaLabel="추가 (small)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="primary" iconOnly ariaLabel="추가 (medium)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="primary" iconOnly size="lg" ariaLabel="추가 (large)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" iconOnly size="sm" ariaLabel="다운로드 (small)" iconBefore={<Icon name="download" />} />
      <Button variant="filled" color="default" iconOnly ariaLabel="다운로드 (medium)" iconBefore={<Icon name="download" />} />
      <Button variant="filled" color="default" iconOnly size="lg" ariaLabel="다운로드 (large)" iconBefore={<Icon name="download" />} />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"primary",iconOnly:!0,size:"sm",ariaLabel:"추가 (small)",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"primary",iconOnly:!0,ariaLabel:"추가 (medium)",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"primary",iconOnly:!0,size:"lg",ariaLabel:"추가 (large)",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"default",iconOnly:!0,size:"sm",ariaLabel:"다운로드 (small)",iconBefore:a.jsx(l,{name:"download"})}),a.jsx(e,{variant:"filled",color:"default",iconOnly:!0,ariaLabel:"다운로드 (medium)",iconBefore:a.jsx(l,{name:"download"})}),a.jsx(e,{variant:"filled",color:"default",iconOnly:!0,size:"lg",ariaLabel:"다운로드 (large)",iconBefore:a.jsx(l,{name:"download"})})]}))},p={name:"색상 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"상황에 맞는 색상 변형을 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';

export function VariantExample() {
  return (
    <>
      <Button variant="filled" color="success" label="Success" />
      <Button variant="filled" color="danger" label="Danger" />
      <Button variant="filled" color="warning" label="Warning" />
      <Button variant="outline" color="primary" label="Outline" />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"success",label:"Success"}),a.jsx(e,{variant:"filled",color:"danger",label:"Danger"}),a.jsx(e,{variant:"filled",color:"warning",label:"Warning"}),a.jsx(e,{variant:"outline",color:"primary",label:"Outline"})]}))},v={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"sm · md(기본) · lg 세 가지 크기를 지원합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';

export function SizeExample() {
  return (
    <>
      <Button variant="filled" color="primary" size="sm" label="Small" />
      <Button variant="filled" color="primary" label="Medium" />
      <Button variant="filled" color="primary" size="lg" label="Large" />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"primary",size:"sm",label:"Small"}),a.jsx(e,{variant:"filled",color:"primary",label:"Medium"}),a.jsx(e,{variant:"filled",color:"primary",size:"lg",label:"Large"})]}))},f={name:"라운드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ShapeRoundExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="Primary" />
        <Button variant="filled" color="default" round label="Default" />
        <Button variant="ghost" round label="Ghost" />
        <Button variant="outline" color="primary" round label="Outline" />
        <Button variant="filled" color="success" round label="Success" />
        <Button variant="filled" color="danger" round label="Danger" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round size="sm" label="Small" />
        <Button variant="filled" color="primary" round label="Medium" />
        <Button variant="filled" color="primary" round size="lg" label="Large" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="default" round label="다음" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" round label="더 보기" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round iconOnly ariaLabel="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="default" round iconOnly ariaLabel="설정" iconBefore={<Icon name="settings" />} />
        <Button variant="outline" color="primary" round iconOnly size="sm" ariaLabel="검색" iconBefore={<Icon name="search" />} />
        <Button variant="filled" color="danger" round iconOnly size="lg" ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
      </div>
      <div className="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
        <Button variant="filled" color="default" label="일" />
        <Button variant="filled" color="default" label="주" />
        <Button variant="filled" color="primary" label="월" />
        <Button variant="filled" color="default" label="년" />
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",round:!0,label:"Primary"}),a.jsx(e,{variant:"filled",color:"default",round:!0,label:"Default"}),a.jsx(e,{variant:"ghost",round:!0,label:"Ghost"}),a.jsx(e,{variant:"outline",color:"primary",round:!0,label:"Outline"}),a.jsx(e,{variant:"filled",color:"success",round:!0,label:"Success"}),a.jsx(e,{variant:"filled",color:"danger",round:!0,label:"Danger"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",round:!0,size:"sm",label:"Small"}),a.jsx(e,{variant:"filled",color:"primary",round:!0,label:"Medium"}),a.jsx(e,{variant:"filled",color:"primary",round:!0,size:"lg",label:"Large"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",round:!0,label:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"default",round:!0,label:"다음",iconAfter:a.jsx(l,{name:"chevron-right"})}),a.jsx(e,{variant:"text",color:"primary",round:!0,label:"더 보기"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",round:!0,iconOnly:!0,ariaLabel:"추가",iconBefore:a.jsx(l,{name:"plus"})}),a.jsx(e,{variant:"filled",color:"default",round:!0,iconOnly:!0,ariaLabel:"설정",iconBefore:a.jsx(l,{name:"settings"})}),a.jsx(e,{variant:"outline",color:"primary",round:!0,iconOnly:!0,size:"sm",ariaLabel:"검색",iconBefore:a.jsx(l,{name:"search"})}),a.jsx(e,{variant:"filled",color:"danger",round:!0,iconOnly:!0,size:"lg",ariaLabel:"삭제",iconBefore:a.jsx(l,{name:"trash"})})]}),a.jsxs("div",{className:"btn_group btn_group-round btn_group-fit",role:"group","aria-label":"라운드 버튼 그룹",children:[a.jsx(e,{variant:"filled",color:"default",label:"일"}),a.jsx(e,{variant:"filled",color:"default",label:"주"}),a.jsx(e,{variant:"filled",color:"primary",label:"월"}),a.jsx(e,{variant:"filled",color:"default",label:"년"})]})]}))},x={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function WidthExample() {
  return (
    <>
      <Button variant="filled" color="primary" block label="전체 너비 버튼" />
      <div className="btn_row-equal">
        <Button variant="filled" color="default" label="취소" />
        <Button variant="filled" color="primary" label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="취소" />
        <Button variant="filled" color="primary" grow label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="옵션 A" />
        <Button variant="filled" color="default" grow label="옵션 B" />
        <Button variant="filled" color="primary" grow label="옵션 C" />
      </div>
      <div className="btn_row btn_row-start">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
      </div>
      <div className="btn_row btn_row-end">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
      </div>
      <div className="btn_row">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" grow label="임시 저장" />
        <Button variant="filled" color="primary" grow label="제출" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="본문 영역" />
        <Button variant="filled" color="primary" fit label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow="2" label="2배 너비" />
        <Button variant="filled" color="primary" grow label="1배 너비" />
      </div>
      <Button variant="filled" color="primary" block label="전체 너비 다운로드" iconBefore={<Icon name="download" />} />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"filled",color:"primary",block:!0,label:"전체 너비 버튼"}),a.jsxs("div",{className:"btn_row-equal",children:[a.jsx(e,{variant:"filled",color:"default",label:"취소"}),a.jsx(e,{variant:"filled",color:"primary",label:"확인"})]}),a.jsxs("div",{className:"btn_row",children:[a.jsx(e,{variant:"filled",color:"default",grow:!0,label:"취소"}),a.jsx(e,{variant:"filled",color:"primary",grow:!0,label:"확인"})]}),a.jsxs("div",{className:"btn_row",children:[a.jsx(e,{variant:"filled",color:"default",grow:!0,label:"옵션 A"}),a.jsx(e,{variant:"filled",color:"default",grow:!0,label:"옵션 B"}),a.jsx(e,{variant:"filled",color:"primary",grow:!0,label:"옵션 C"})]}),a.jsxs("div",{className:"btn_row btn_row-start",children:[a.jsx(e,{variant:"ghost",fit:!0,label:"뒤로"}),a.jsx(e,{variant:"filled",color:"default",fit:!0,label:"취소"}),a.jsx(e,{variant:"filled",color:"primary",fit:!0,label:"저장"})]}),a.jsxs("div",{className:"btn_row btn_row-end",children:[a.jsx(e,{variant:"ghost",fit:!0,label:"뒤로"}),a.jsx(e,{variant:"filled",color:"default",fit:!0,label:"취소"}),a.jsx(e,{variant:"filled",color:"primary",fit:!0,label:"저장"})]}),a.jsxs("div",{className:"btn_row",children:[a.jsx(e,{variant:"ghost",fit:!0,label:"뒤로"}),a.jsx(e,{variant:"filled",color:"default",grow:!0,label:"임시 저장"}),a.jsx(e,{variant:"filled",color:"primary",grow:!0,label:"제출"})]}),a.jsxs("div",{className:"btn_row",children:[a.jsx(e,{variant:"filled",color:"default",grow:!0,label:"본문 영역"}),a.jsx(e,{variant:"filled",color:"primary",fit:!0,label:"확인"})]}),a.jsxs("div",{className:"btn_row",children:[a.jsx(e,{variant:"filled",color:"default",grow:"2",label:"2배 너비"}),a.jsx(e,{variant:"filled",color:"primary",grow:!0,label:"1배 너비"})]}),a.jsx(e,{variant:"filled",color:"primary",block:!0,label:"전체 너비 다운로드",iconBefore:a.jsx(l,{name:"download"})})]}))},B={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';

export function StateExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" disabled label="Primary" />
        <Button variant="filled" color="default" disabled label="Default" />
        <Button variant="outline" color="primary" disabled label="Outline" />
        <Button variant="ghost" disabled label="Ghost" />
        <Button variant="text" color="primary" disabled label="Text" />
        <Button variant="filled" color="danger" disabled label="Danger" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" ariaDisabled label="is-disabled" />
        <Button variant="filled" color="default" ariaDisabled label="is-disabled" />
        <Button variant="outline" color="primary" ariaDisabled label="is-disabled" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" loading label="저장 중" />
        <Button variant="filled" color="default" loading label="처리 중" />
        <Button variant="outline" color="primary" loading label="업로드 중" />
        <Button variant="filled" color="primary" iconOnly loading ariaLabel="저장 중" />
      </div>
      <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",disabled:!0,label:"Primary"}),a.jsx(e,{variant:"filled",color:"default",disabled:!0,label:"Default"}),a.jsx(e,{variant:"outline",color:"primary",disabled:!0,label:"Outline"}),a.jsx(e,{variant:"ghost",disabled:!0,label:"Ghost"}),a.jsx(e,{variant:"text",color:"primary",disabled:!0,label:"Text"}),a.jsx(e,{variant:"filled",color:"danger",disabled:!0,label:"Danger"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",ariaDisabled:!0,label:"is-disabled"}),a.jsx(e,{variant:"filled",color:"default",ariaDisabled:!0,label:"is-disabled"}),a.jsx(e,{variant:"outline",color:"primary",ariaDisabled:!0,label:"is-disabled"})]}),a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",loading:!0,label:"저장 중"}),a.jsx(e,{variant:"filled",color:"default",loading:!0,label:"처리 중"}),a.jsx(e,{variant:"outline",color:"primary",loading:!0,label:"업로드 중"}),a.jsx(e,{variant:"filled",color:"primary",iconOnly:!0,loading:!0,ariaLabel:"저장 중"})]}),a.jsx(e,{variant:"filled",color:"primary",block:!0,loading:!0,label:"전체 너비 로딩"})]}))},g={name:"버튼 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function GroupExample() {
  return (
    <>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
        <Button variant="filled" color="default" size="sm" label="Left" />
        <Button variant="filled" color="default" size="sm" label="Middle" />
        <Button variant="filled" color="default" size="sm" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
        <Button variant="filled" color="default" size="lg" label="Left" />
        <Button variant="filled" color="default" size="lg" label="Middle" />
        <Button variant="filled" color="default" size="lg" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="로그인" />
        <Button variant="filled" color="default" block label="회원가입" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="결제하기" />
        <Button variant="text" color="primary" label="쿠폰 적용" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="다운로드" iconBefore={<Icon name="download" />} />
        <p className="btn_stack-text">
          최신 버전 v2.0 · <a href="#">릴리스 노트</a>
        </p>
      </div>
    </>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"btn_group btn_group-fit btn_group-align-start",role:"group","aria-label":"가로 버튼 그룹 small 좌측",children:[a.jsx(e,{variant:"filled",color:"default",size:"sm",label:"Left"}),a.jsx(e,{variant:"filled",color:"default",size:"sm",label:"Middle"}),a.jsx(e,{variant:"filled",color:"default",size:"sm",label:"Right"})]}),a.jsxs("div",{className:"btn_group btn_group-fit btn_group-align-start",role:"group","aria-label":"가로 버튼 그룹 medium 좌측",children:[a.jsx(e,{variant:"filled",color:"default",label:"Left"}),a.jsx(e,{variant:"filled",color:"default",label:"Middle"}),a.jsx(e,{variant:"filled",color:"default",label:"Right"})]}),a.jsxs("div",{className:"btn_group btn_group-fit btn_group-align-start",role:"group","aria-label":"가로 버튼 그룹 large 좌측",children:[a.jsx(e,{variant:"filled",color:"default",size:"lg",label:"Left"}),a.jsx(e,{variant:"filled",color:"default",size:"lg",label:"Middle"}),a.jsx(e,{variant:"filled",color:"default",size:"lg",label:"Right"})]}),a.jsxs("div",{className:"btn_group btn_group-fit btn_group-align-center",role:"group","aria-label":"가로 버튼 그룹 medium 가운데",children:[a.jsx(e,{variant:"filled",color:"default",label:"Left"}),a.jsx(e,{variant:"filled",color:"default",label:"Middle"}),a.jsx(e,{variant:"filled",color:"default",label:"Right"})]}),a.jsxs("div",{className:"btn_group btn_group-fit btn_group-align-end",role:"group","aria-label":"가로 버튼 그룹 medium 우측",children:[a.jsx(e,{variant:"filled",color:"default",label:"Left"}),a.jsx(e,{variant:"filled",color:"default",label:"Middle"}),a.jsx(e,{variant:"filled",color:"default",label:"Right"})]}),a.jsxs("div",{className:"btn_group btn_group-block",role:"group","aria-label":"가로 버튼 그룹 전체 너비",children:[a.jsx(e,{variant:"filled",color:"default",label:"Left"}),a.jsx(e,{variant:"filled",color:"default",label:"Middle"}),a.jsx(e,{variant:"filled",color:"default",label:"Right"})]}),a.jsxs("div",{className:"btn_group btn_group-vertical btn_group-fit btn_group-align-start",role:"group","aria-label":"세로 버튼 그룹 고정 너비 좌측",children:[a.jsx(e,{variant:"filled",color:"default",label:"상단"}),a.jsx(e,{variant:"filled",color:"default",label:"중간"}),a.jsx(e,{variant:"filled",color:"default",label:"하단"})]}),a.jsxs("div",{className:"btn_group btn_group-vertical btn_group-fit btn_group-align-center",role:"group","aria-label":"세로 버튼 그룹 고정 너비 가운데",children:[a.jsx(e,{variant:"filled",color:"default",label:"상단"}),a.jsx(e,{variant:"filled",color:"default",label:"중간"}),a.jsx(e,{variant:"filled",color:"default",label:"하단"})]}),a.jsxs("div",{className:"btn_group btn_group-vertical btn_group-fit btn_group-align-end",role:"group","aria-label":"세로 버튼 그룹 고정 너비 우측",children:[a.jsx(e,{variant:"filled",color:"default",label:"상단"}),a.jsx(e,{variant:"filled",color:"default",label:"중간"}),a.jsx(e,{variant:"filled",color:"default",label:"하단"})]}),a.jsxs("div",{className:"btn_group btn_group-vertical btn_group-block",role:"group","aria-label":"세로 버튼 그룹 전체 너비",children:[a.jsx(e,{variant:"filled",color:"default",label:"상단"}),a.jsx(e,{variant:"filled",color:"default",label:"중간"}),a.jsx(e,{variant:"filled",color:"default",label:"하단"})]}),a.jsxs("div",{className:"btn_stack",children:[a.jsx(e,{variant:"filled",color:"primary",block:!0,label:"로그인"}),a.jsx(e,{variant:"filled",color:"default",block:!0,label:"회원가입"})]}),a.jsxs("div",{className:"btn_stack",children:[a.jsx(e,{variant:"filled",color:"primary",block:!0,label:"결제하기"}),a.jsx(e,{variant:"text",color:"primary",label:"쿠폰 적용"})]}),a.jsxs("div",{className:"btn_stack",children:[a.jsx(e,{variant:"filled",color:"primary",block:!0,label:"다운로드",iconBefore:a.jsx(l,{name:"download"})}),a.jsxs("p",{className:"btn_stack-text",children:["최신 버전 v2.0 · ",a.jsx("a",{href:"#",children:"릴리스 노트"})]})]})]}))},y={name:"루트 태그",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tag prop으로 button · a · div를 선택합니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex=0을 자동 부여합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';

export function TagExample() {
  return (
    <div className="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="button" />
      <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
      <Button tag="div" variant="ghost" label="div → role=button" />
      <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
    </div>
  );
}`,language:"tsx"}}},render:t(()=>a.jsxs("div",{className:"btn_row btn_row-wrap",children:[a.jsx(e,{variant:"filled",color:"primary",label:"button"}),a.jsx(e,{tag:"a",href:"/getting-started",variant:"outline",color:"primary",label:"a + href"}),a.jsx(e,{tag:"div",variant:"ghost",label:"div → role=button"}),a.jsx(e,{tag:"a",role:"link",variant:"text",color:"primary",label:"a, role=link"})]}))};var w,_,h;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(Button)
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var j,I,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본 유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';

export function BasicExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" label="Filled Primary" />
        <Button variant="filled" color="default" label="Filled Default" />
        <Button variant="outline" color="primary" label="Outline" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="text" color="primary" label="Text" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="success" label="Success" />
        <Button variant="filled" color="warning" label="Warning" />
        <Button variant="filled" color="danger" label="Danger" />
        <Button variant="outline" color="danger" label="Outline Danger" />
        <Button variant="text" color="danger" label="Text Danger" />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" label="Filled Primary" />
        <Button variant="filled" color="default" label="Filled Default" />
        <Button variant="outline" color="primary" label="Outline" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="text" color="primary" label="Text" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="success" label="Success" />
        <Button variant="filled" color="warning" label="Warning" />
        <Button variant="filled" color="danger" label="Danger" />
        <Button variant="outline" color="danger" label="Outline Danger" />
        <Button variant="text" color="danger" label="Text Danger" />
      </div>
    </>)
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var N,z,L;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '셀렉트 박스형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 haspopup·expanded prop으로 aria-haspopup·aria-expanded를 지정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';

export function TypeSelectExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="select" label="서울특별시" haspopup="listbox" />
        <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
        <Button variant="select" open label="카테고리" haspopup="listbox" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="select" size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" label="Medium" haspopup="listbox" />
        <Button variant="select" size="lg" label="Large" haspopup="listbox" />
        <Button variant="select" disabled label="비활성" haspopup="listbox" />
        <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
      </div>
      <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
      <div className="btn_row btn_row-wrap">
        <Button variant="select" selectText label="최신순" haspopup="listbox" />
        <Button variant="select" selectText placeholder label="정렬 기준" haspopup="listbox" />
        <Button variant="select" selectText open label="필터" haspopup="listbox" />
        <Button variant="select" selectText size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" selectText disabled label="비활성" haspopup="listbox" />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_row btn_row-wrap">
        <Button variant="select" label="서울특별시" haspopup="listbox" />
        <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
        <Button variant="select" open label="카테고리" haspopup="listbox" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="select" size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" label="Medium" haspopup="listbox" />
        <Button variant="select" size="lg" label="Large" haspopup="listbox" />
        <Button variant="select" disabled label="비활성" haspopup="listbox" />
        <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
      </div>
      <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
      <div className="btn_row btn_row-wrap">
        <Button variant="select" selectText label="최신순" haspopup="listbox" />
        <Button variant="select" selectText placeholder label="정렬 기준" haspopup="listbox" />
        <Button variant="select" selectText open label="필터" haspopup="listbox" />
        <Button variant="select" selectText size="sm" label="Small" haspopup="listbox" />
        <Button variant="select" selectText disabled label="비활성" haspopup="listbox" />
      </div>
    </>)
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,T,S;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '텍스트 버튼',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeTextExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="Primary" />
        <Button variant="text" color="muted" label="Muted" />
        <Button variant="text" color="danger" label="Danger" />
        <Button variant="text" color="success" label="Success" />
        <Button variant="text" color="warning" label="Warning" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="danger" label="삭제" iconBefore={<Icon name="trash" />} />
        <Button variant="text" color="success" label="완료" iconBefore={<Icon name="check-circle" />} />
        <Button variant="text" color="warning" label="주의" iconAfter={<Icon name="alert-triangle" />} />
        <Button variant="text" color="muted" label="자세히" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="더 보기" />
        <Button variant="text" color="primary" label="링크 복사" />
        <Button variant="text" color="primary" label="취소" />
        <Button variant="text" color="primary" label="건너뛰기" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="text" color="primary" label="다운로드" iconBefore={<Icon name="download" />} />
        <Button variant="text" color="primary" label="링크 열기" iconBefore={<Icon name="external-link" />} />
        <Button variant="text" color="primary" label="설정" iconBefore={<Icon name="settings" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="다음" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" label="전체 보기" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" label="삭제" iconAfter={<Icon name="trash" />} />
        <Button variant="text" color="primary" label="새로고침" iconAfter={<Icon name="refresh" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" size="sm" label="Small" />
        <Button variant="text" color="primary" label="Medium" />
        <Button variant="text" color="primary" size="lg" label="Large" />
        <Button variant="text" color="primary" size="sm" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="text" color="primary" size="lg" label="다음" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" iconOnly ariaLabel="검색" iconBefore={<Icon name="search" />} />
        <Button variant="text" color="primary" iconOnly ariaLabel="편집" iconBefore={<Icon name="edit" />} />
        <Button variant="text" color="primary" iconOnly size="sm" ariaLabel="닫기" iconBefore={<Icon name="close" />} />
        <Button variant="text" color="primary" disabled label="비활성" />
        <Button variant="text" color="primary" disabled label="비활성" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" ariaDisabled label="is-disabled" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="Primary" />
        <Button variant="text" color="muted" label="Muted" />
        <Button variant="text" color="danger" label="Danger" />
        <Button variant="text" color="success" label="Success" />
        <Button variant="text" color="warning" label="Warning" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="danger" label="삭제" iconBefore={<Icon name="trash" />} />
        <Button variant="text" color="success" label="완료" iconBefore={<Icon name="check-circle" />} />
        <Button variant="text" color="warning" label="주의" iconAfter={<Icon name="alert-triangle" />} />
        <Button variant="text" color="muted" label="자세히" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="더 보기" />
        <Button variant="text" color="primary" label="링크 복사" />
        <Button variant="text" color="primary" label="취소" />
        <Button variant="text" color="primary" label="건너뛰기" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="text" color="primary" label="다운로드" iconBefore={<Icon name="download" />} />
        <Button variant="text" color="primary" label="링크 열기" iconBefore={<Icon name="external-link" />} />
        <Button variant="text" color="primary" label="설정" iconBefore={<Icon name="settings" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" label="다음" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" label="전체 보기" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" label="삭제" iconAfter={<Icon name="trash" />} />
        <Button variant="text" color="primary" label="새로고침" iconAfter={<Icon name="refresh" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" size="sm" label="Small" />
        <Button variant="text" color="primary" label="Medium" />
        <Button variant="text" color="primary" size="lg" label="Large" />
        <Button variant="text" color="primary" size="sm" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="text" color="primary" size="lg" label="다음" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="text" color="primary" iconOnly ariaLabel="검색" iconBefore={<Icon name="search" />} />
        <Button variant="text" color="primary" iconOnly ariaLabel="편집" iconBefore={<Icon name="edit" />} />
        <Button variant="text" color="primary" iconOnly size="sm" ariaLabel="닫기" iconBefore={<Icon name="close" />} />
        <Button variant="text" color="primary" disabled label="비활성" />
        <Button variant="text" color="primary" disabled label="비활성" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" ariaDisabled label="is-disabled" iconAfter={<Icon name="chevron-right" />} />
      </div>
      <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />
    </>)
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var D,A,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconTextExample() {
  return (
    <>
      <Button variant="filled" color="primary" label="추가" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" label="다운로드" iconBefore={<Icon name="download" />} />
      <Button variant="outline" color="primary" label="새 항목" iconBefore={<Icon name="plus" />} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="primary" label="추가" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" label="다운로드" iconBefore={<Icon name="download" />} />
      <Button variant="outline" color="primary" label="새 항목" iconBefore={<Icon name="plus" />} />
    </>)
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,M,C;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트 (세로)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconTextVerticalExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical label="홈" iconBefore={<Icon name="home" />} />
        <Button variant="filled" color="default" vertical label="검색" iconBefore={<Icon name="search" />} />
        <Button variant="ghost" vertical label="마이" iconBefore={<Icon name="user" />} />
        <Button variant="text" color="primary" vertical label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="outline" color="primary" vertical label="다운로드" iconBefore={<Icon name="download" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical size="sm" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="primary" vertical label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="primary" vertical size="lg" label="추가" iconBefore={<Icon name="plus" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="default" vertical round label="가이드" iconBefore={<Icon name="book" />} />
        <Button variant="filled" color="primary" vertical round label="즐겨찾기" iconBefore={<Icon name="star" />} />
        <Button variant="ghost" vertical disabled label="삭제" iconBefore={<Icon name="trash" />} />
        <Button variant="filled" color="primary" vertical loading label="저장 중" />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical label="홈" iconBefore={<Icon name="home" />} />
        <Button variant="filled" color="default" vertical label="검색" iconBefore={<Icon name="search" />} />
        <Button variant="ghost" vertical label="마이" iconBefore={<Icon name="user" />} />
        <Button variant="text" color="primary" vertical label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="outline" color="primary" vertical label="다운로드" iconBefore={<Icon name="download" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" vertical size="sm" label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="primary" vertical label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="primary" vertical size="lg" label="추가" iconBefore={<Icon name="plus" />} />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="default" vertical round label="가이드" iconBefore={<Icon name="book" />} />
        <Button variant="filled" color="primary" vertical round label="즐겨찾기" iconBefore={<Icon name="star" />} />
        <Button variant="ghost" vertical disabled label="삭제" iconBefore={<Icon name="trash" />} />
        <Button variant="filled" color="primary" vertical loading label="저장 중" />
      </div>
    </>)
}`,...(C=(M=s.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var E,F,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트 (세로) · 균등 배분',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconTextVerticalEqualExample() {
  return (
    <div className="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <Button variant="text" color="primary" vertical label="홈" iconBefore={<Icon name="home" />} />
      <Button variant="text" color="primary" vertical label="카테고리" iconBefore={<Icon name="grid" />} />
      <Button variant="filled" color="primary" vertical label="장바구니" iconBefore={<Icon name="cart" />} />
      <Button variant="text" color="primary" vertical label="마이" iconBefore={<Icon name="user" />} />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <div className="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <Button variant="text" color="primary" vertical label="홈" iconBefore={<Icon name="home" />} />
      <Button variant="text" color="primary" vertical label="카테고리" iconBefore={<Icon name="grid" />} />
      <Button variant="filled" color="primary" vertical label="장바구니" iconBefore={<Icon name="cart" />} />
      <Button variant="text" color="primary" vertical label="마이" iconBefore={<Icon name="user" />} />
    </div>)
}`,...(q=(F=d.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var G,V,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '텍스트 + 아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeTextIconExample() {
  return (
    <>
      <Button variant="filled" color="primary" label="다음" iconAfter={<Icon name="chevron-right" />} />
      <Button variant="filled" color="default" label="자세히 보기" iconAfter={<Icon name="external-link" />} />
      <Button variant="text" color="primary" label="링크 이동" iconAfter={<Icon name="chevron-right" />} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="primary" label="다음" iconAfter={<Icon name="chevron-right" />} />
      <Button variant="filled" color="default" label="자세히 보기" iconAfter={<Icon name="external-link" />} />
      <Button variant="text" color="primary" label="링크 이동" iconAfter={<Icon name="chevron-right" />} />
    </>)
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '텍스트 없이 아이콘만 표시합니다. iconOnly와 함께 사용하며, 접근성을 위해 ariaLabel을 반드시 지정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconOnlyExample() {
  return (
    <>
      <Button variant="filled" color="primary" iconOnly ariaLabel="추가" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" iconOnly ariaLabel="설정" iconBefore={<Icon name="settings" />} />
      <Button variant="ghost" iconOnly ariaLabel="검색" iconBefore={<Icon name="search" />} />
      <Button variant="outline" color="primary" iconOnly ariaLabel="편집" iconBefore={<Icon name="edit" />} />
      <Button variant="filled" color="danger" iconOnly ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
      <Button variant="filled" color="primary" iconOnly disabled ariaLabel="추가" iconBefore={<Icon name="plus" />} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="primary" iconOnly ariaLabel="추가" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" iconOnly ariaLabel="설정" iconBefore={<Icon name="settings" />} />
      <Button variant="ghost" iconOnly ariaLabel="검색" iconBefore={<Icon name="search" />} />
      <Button variant="outline" color="primary" iconOnly ariaLabel="편집" iconBefore={<Icon name="edit" />} />
      <Button variant="filled" color="danger" iconOnly ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
      <Button variant="filled" color="primary" iconOnly disabled ariaLabel="추가" iconBefore={<Icon name="plus" />} />
    </>)
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '아이콘 버튼 크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'btn_sm · md(기본) · btn_lg 세 가지 크기를 지원합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function TypeIconOnlySizeExample() {
  return (
    <>
      <Button variant="filled" color="primary" iconOnly size="sm" ariaLabel="추가 (small)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="primary" iconOnly ariaLabel="추가 (medium)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="primary" iconOnly size="lg" ariaLabel="추가 (large)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" iconOnly size="sm" ariaLabel="다운로드 (small)" iconBefore={<Icon name="download" />} />
      <Button variant="filled" color="default" iconOnly ariaLabel="다운로드 (medium)" iconBefore={<Icon name="download" />} />
      <Button variant="filled" color="default" iconOnly size="lg" ariaLabel="다운로드 (large)" iconBefore={<Icon name="download" />} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="primary" iconOnly size="sm" ariaLabel="추가 (small)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="primary" iconOnly ariaLabel="추가 (medium)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="primary" iconOnly size="lg" ariaLabel="추가 (large)" iconBefore={<Icon name="plus" />} />
      <Button variant="filled" color="default" iconOnly size="sm" ariaLabel="다운로드 (small)" iconBefore={<Icon name="download" />} />
      <Button variant="filled" color="default" iconOnly ariaLabel="다운로드 (medium)" iconBefore={<Icon name="download" />} />
      <Button variant="filled" color="default" iconOnly size="lg" ariaLabel="다운로드 (large)" iconBefore={<Icon name="download" />} />
    </>)
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '상황에 맞는 색상 변형을 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';

export function VariantExample() {
  return (
    <>
      <Button variant="filled" color="success" label="Success" />
      <Button variant="filled" color="danger" label="Danger" />
      <Button variant="filled" color="warning" label="Warning" />
      <Button variant="outline" color="primary" label="Outline" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="success" label="Success" />
      <Button variant="filled" color="danger" label="Danger" />
      <Button variant="filled" color="warning" label="Warning" />
      <Button variant="outline" color="primary" label="Outline" />
    </>)
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var aa,ea,la;v.parameters={...v.parameters,docs:{...(aa=v.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'sm · md(기본) · lg 세 가지 크기를 지원합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';

export function SizeExample() {
  return (
    <>
      <Button variant="filled" color="primary" size="sm" label="Small" />
      <Button variant="filled" color="primary" label="Medium" />
      <Button variant="filled" color="primary" size="lg" label="Large" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="primary" size="sm" label="Small" />
      <Button variant="filled" color="primary" label="Medium" />
      <Button variant="filled" color="primary" size="lg" label="Large" />
    </>)
}`,...(la=(ea=v.parameters)==null?void 0:ea.docs)==null?void 0:la.source}}};var ta,ra,oa;f.parameters={...f.parameters,docs:{...(ta=f.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: '라운드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ShapeRoundExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="Primary" />
        <Button variant="filled" color="default" round label="Default" />
        <Button variant="ghost" round label="Ghost" />
        <Button variant="outline" color="primary" round label="Outline" />
        <Button variant="filled" color="success" round label="Success" />
        <Button variant="filled" color="danger" round label="Danger" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round size="sm" label="Small" />
        <Button variant="filled" color="primary" round label="Medium" />
        <Button variant="filled" color="primary" round size="lg" label="Large" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="default" round label="다음" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" round label="더 보기" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round iconOnly ariaLabel="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="default" round iconOnly ariaLabel="설정" iconBefore={<Icon name="settings" />} />
        <Button variant="outline" color="primary" round iconOnly size="sm" ariaLabel="검색" iconBefore={<Icon name="search" />} />
        <Button variant="filled" color="danger" round iconOnly size="lg" ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
      </div>
      <div className="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
        <Button variant="filled" color="default" label="일" />
        <Button variant="filled" color="default" label="주" />
        <Button variant="filled" color="primary" label="월" />
        <Button variant="filled" color="default" label="년" />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="Primary" />
        <Button variant="filled" color="default" round label="Default" />
        <Button variant="ghost" round label="Ghost" />
        <Button variant="outline" color="primary" round label="Outline" />
        <Button variant="filled" color="success" round label="Success" />
        <Button variant="filled" color="danger" round label="Danger" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round size="sm" label="Small" />
        <Button variant="filled" color="primary" round label="Medium" />
        <Button variant="filled" color="primary" round size="lg" label="Large" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round label="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="default" round label="다음" iconAfter={<Icon name="chevron-right" />} />
        <Button variant="text" color="primary" round label="더 보기" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" round iconOnly ariaLabel="추가" iconBefore={<Icon name="plus" />} />
        <Button variant="filled" color="default" round iconOnly ariaLabel="설정" iconBefore={<Icon name="settings" />} />
        <Button variant="outline" color="primary" round iconOnly size="sm" ariaLabel="검색" iconBefore={<Icon name="search" />} />
        <Button variant="filled" color="danger" round iconOnly size="lg" ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
      </div>
      <div className="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
        <Button variant="filled" color="default" label="일" />
        <Button variant="filled" color="default" label="주" />
        <Button variant="filled" color="primary" label="월" />
        <Button variant="filled" color="default" label="년" />
      </div>
    </>)
}`,...(oa=(ra=f.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var na,ia,ca;x.parameters={...x.parameters,docs:{...(na=x.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
        story: '부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function WidthExample() {
  return (
    <>
      <Button variant="filled" color="primary" block label="전체 너비 버튼" />
      <div className="btn_row-equal">
        <Button variant="filled" color="default" label="취소" />
        <Button variant="filled" color="primary" label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="취소" />
        <Button variant="filled" color="primary" grow label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="옵션 A" />
        <Button variant="filled" color="default" grow label="옵션 B" />
        <Button variant="filled" color="primary" grow label="옵션 C" />
      </div>
      <div className="btn_row btn_row-start">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
      </div>
      <div className="btn_row btn_row-end">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
      </div>
      <div className="btn_row">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" grow label="임시 저장" />
        <Button variant="filled" color="primary" grow label="제출" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="본문 영역" />
        <Button variant="filled" color="primary" fit label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow="2" label="2배 너비" />
        <Button variant="filled" color="primary" grow label="1배 너비" />
      </div>
      <Button variant="filled" color="primary" block label="전체 너비 다운로드" iconBefore={<Icon name="download" />} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <Button variant="filled" color="primary" block label="전체 너비 버튼" />
      <div className="btn_row-equal">
        <Button variant="filled" color="default" label="취소" />
        <Button variant="filled" color="primary" label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="취소" />
        <Button variant="filled" color="primary" grow label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="옵션 A" />
        <Button variant="filled" color="default" grow label="옵션 B" />
        <Button variant="filled" color="primary" grow label="옵션 C" />
      </div>
      <div className="btn_row btn_row-start">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
      </div>
      <div className="btn_row btn_row-end">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" fit label="취소" />
        <Button variant="filled" color="primary" fit label="저장" />
      </div>
      <div className="btn_row">
        <Button variant="ghost" fit label="뒤로" />
        <Button variant="filled" color="default" grow label="임시 저장" />
        <Button variant="filled" color="primary" grow label="제출" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow label="본문 영역" />
        <Button variant="filled" color="primary" fit label="확인" />
      </div>
      <div className="btn_row">
        <Button variant="filled" color="default" grow="2" label="2배 너비" />
        <Button variant="filled" color="primary" grow label="1배 너비" />
      </div>
      <Button variant="filled" color="primary" block label="전체 너비 다운로드" iconBefore={<Icon name="download" />} />
    </>)
}`,...(ca=(ia=x.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var sa,da,ua;B.parameters={...B.parameters,docs:{...(sa=B.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
        story: 'disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';

export function StateExample() {
  return (
    <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" disabled label="Primary" />
        <Button variant="filled" color="default" disabled label="Default" />
        <Button variant="outline" color="primary" disabled label="Outline" />
        <Button variant="ghost" disabled label="Ghost" />
        <Button variant="text" color="primary" disabled label="Text" />
        <Button variant="filled" color="danger" disabled label="Danger" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" ariaDisabled label="is-disabled" />
        <Button variant="filled" color="default" ariaDisabled label="is-disabled" />
        <Button variant="outline" color="primary" ariaDisabled label="is-disabled" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" loading label="저장 중" />
        <Button variant="filled" color="default" loading label="처리 중" />
        <Button variant="outline" color="primary" loading label="업로드 중" />
        <Button variant="filled" color="primary" iconOnly loading ariaLabel="저장 중" />
      </div>
      <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" disabled label="Primary" />
        <Button variant="filled" color="default" disabled label="Default" />
        <Button variant="outline" color="primary" disabled label="Outline" />
        <Button variant="ghost" disabled label="Ghost" />
        <Button variant="text" color="primary" disabled label="Text" />
        <Button variant="filled" color="danger" disabled label="Danger" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" ariaDisabled label="is-disabled" />
        <Button variant="filled" color="default" ariaDisabled label="is-disabled" />
        <Button variant="outline" color="primary" ariaDisabled label="is-disabled" />
      </div>
      <div className="btn_row btn_row-wrap">
        <Button variant="filled" color="primary" loading label="저장 중" />
        <Button variant="filled" color="default" loading label="처리 중" />
        <Button variant="outline" color="primary" loading label="업로드 중" />
        <Button variant="filled" color="primary" iconOnly loading ariaLabel="저장 중" />
      </div>
      <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />
    </>)
}`,...(ua=(da=B.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ba,ma,pa;g.parameters={...g.parameters,docs:{...(ba=g.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: '버튼 그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function GroupExample() {
  return (
    <>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
        <Button variant="filled" color="default" size="sm" label="Left" />
        <Button variant="filled" color="default" size="sm" label="Middle" />
        <Button variant="filled" color="default" size="sm" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
        <Button variant="filled" color="default" size="lg" label="Left" />
        <Button variant="filled" color="default" size="lg" label="Middle" />
        <Button variant="filled" color="default" size="lg" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="로그인" />
        <Button variant="filled" color="default" block label="회원가입" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="결제하기" />
        <Button variant="text" color="primary" label="쿠폰 적용" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="다운로드" iconBefore={<Icon name="download" />} />
        <p className="btn_stack-text">
          최신 버전 v2.0 · <a href="#">릴리스 노트</a>
        </p>
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
        <Button variant="filled" color="default" size="sm" label="Left" />
        <Button variant="filled" color="default" size="sm" label="Middle" />
        <Button variant="filled" color="default" size="sm" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
        <Button variant="filled" color="default" size="lg" label="Left" />
        <Button variant="filled" color="default" size="lg" label="Middle" />
        <Button variant="filled" color="default" size="lg" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="Left" />
        <Button variant="filled" color="default" label="Middle" />
        <Button variant="filled" color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
        <Button variant="filled" color="default" label="상단" />
        <Button variant="filled" color="default" label="중간" />
        <Button variant="filled" color="default" label="하단" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="로그인" />
        <Button variant="filled" color="default" block label="회원가입" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="결제하기" />
        <Button variant="text" color="primary" label="쿠폰 적용" />
      </div>
      <div className="btn_stack">
        <Button variant="filled" color="primary" block label="다운로드" iconBefore={<Icon name="download" />} />
        <p className="btn_stack-text">
          최신 버전 v2.0 · <a href="#">릴리스 노트</a>
        </p>
      </div>
    </>)
}`,...(pa=(ma=g.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var va,fa,xa;y.parameters={...y.parameters,docs:{...(va=y.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: '루트 태그',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'tag prop으로 button · a · div를 선택합니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex=0을 자동 부여합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';

export function TagExample() {
  return (
    <div className="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="button" />
      <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
      <Button tag="div" variant="ghost" label="div → role=button" />
      <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <div className="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="button" />
      <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
      <Button tag="div" variant="ghost" label="div → role=button" />
      <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
    </div>)
}`,...(xa=(fa=y.parameters)==null?void 0:fa.docs)==null?void 0:xa.source}}};const Ra=["Playground","Basic","TypeSelect","TypeText","TypeIconText","TypeIconTextVertical","TypeIconTextVerticalEqual","TypeTextIcon","TypeIconOnly","TypeIconOnlySize","Variant","Size","ShapeRound","Width","State","Group","Tag"];export{o as Basic,g as Group,r as Playground,f as ShapeRound,v as Size,B as State,y as Tag,b as TypeIconOnly,m as TypeIconOnlySize,c as TypeIconText,s as TypeIconTextVertical,d as TypeIconTextVerticalEqual,n as TypeSelect,i as TypeText,u as TypeTextIcon,p as Variant,x as Width,Ra as __namedExportsOrder,Pa as default};
