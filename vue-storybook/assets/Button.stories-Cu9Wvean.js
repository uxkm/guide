import{_ as t}from"./Button-C3SXv-sJ.js";import{_ as n}from"./Icon-D97OEunV.js";import{b as Ct,a as ft}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";const gt=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],yt=[{name:"variant",type:"'filled' | 'outline' | 'ghost' | 'text' | 'select'",default:"filled",description:"버튼 스킨. select는 셀렉트 박스형 트리거"},{name:"color",type:"'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'",default:"primary",description:"색상 변형. text 스킨에서는 톤(muted·danger 등)으로 사용"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"버튼 크기"},{name:"label",type:"string",default:"—",description:"버튼 텍스트. default 슬롯으로 대체 가능"},{name:"round",type:"boolean",default:"false",description:"pill(캡슐) 형태 모서리"},{name:"vertical",type:"boolean",default:"false",description:"아이콘 위 · 텍스트 아래 세로 배치"},{name:"icon-only",type:"boolean",default:"false",description:"아이콘만 표시. aria-label 필수"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100%"},{name:"grow",type:"boolean | '2'",default:"false",description:"flex 비율 분배. 2는 2배 너비"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 유지"},{name:"disabled",type:"boolean",default:"false",description:"HTML disabled 속성"},{name:"aria-disabled",type:"boolean",default:"false",description:"is-disabled 클래스와 함께 비활성 표현"},{name:"loading",type:"boolean",default:"false",description:"로딩 스피너 표시"},{name:"open",type:"boolean",default:"false",description:"셀렉트 트리거 열림 상태"},{name:"error",type:"boolean",default:"false",description:"셀렉트 트리거 오류 상태"},{name:"placeholder",type:"boolean",default:"false",description:"셀렉트 미선택 placeholder 스타일"},{name:"select-text",type:"boolean",default:"false",description:"배경·테두리 없는 셀렉트 텍스트 형태"},{name:"type",type:"'button' | 'submit' | 'reset'",default:"button",description:'button 요소 type 속성 (tag="button"일 때만)'},{name:"tag",type:"'button' | 'a' | 'div'",default:"button",description:"루트 HTML 태그. div·href 없는 a는 role + tabindex=0 자동 적용"},{name:"href",type:"string",default:"—",description:'tag="a"일 때 href. 있으면 네이티브 링크(Tab 초점 자동), 없으면 role+tabindex 필요'},{name:"role",type:"'button' | 'link'",default:"—",description:'tag="a"이고 href 없을 때 의미 지정. role만으로 Tab 초점 불가 — tabindex 자동 부여'},{name:"tabindex",type:"number",default:"—",description:"Tab 순서 수동 지정. div·href 없는 a는 기본 0, 비활성 -1"},{name:"aria-label",type:"string",default:"—",description:"접근성 라벨 (icon-only 시 필수)"},{name:"haspopup",type:"string",default:"—",description:"aria-haspopup (셀렉트·드롭다운 트리거)"},{name:"expanded",type:"boolean",default:"—",description:"aria-expanded (셀렉트·팝오버 트리거)"},{name:"invalid",type:"boolean",default:"false",description:"aria-invalid (폼 오류)"},Ct],Dt=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],_t=[{name:"default",description:"버튼 텍스트 (label prop 대체)"},{name:"icon-before",description:"텍스트 앞 아이콘"},{name:"icon-after",description:"텍스트 뒤 아이콘"}],wt=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],xt=[{name:"btn",description:"루트 구조 클래스"},{name:"btn_filled",description:"배경 채움 스킨"},{name:"btn_outline",description:"테두리 스킨"},{name:"btn_ghost",description:"투명 배경 스킨"},{name:"btn_text",description:"텍스트만 스킨"},{name:"btn_select",description:"셀렉트 박스형 트리거"},{name:"btn_select-text",description:"텍스트형 셀렉트 트리거"},{name:"btn_sm · btn_lg",description:"크기 변형"},{name:"btn_round",description:"pill(캡슐) 모서리"},{name:"btn_vertical",description:"아이콘 위 · 텍스트 아래"},{name:"btn_icon-only",description:"아이콘만"},{name:"btn_block · btn_grow · btn_fit",description:"너비 레이아웃"},{name:"icon · btn_label · btn_spinner",description:"내부 파트"},{name:"btn_row · btn_group · btn_stack",description:"버튼 묶음 컨테이너"},{name:"is-disabled · is-loading · is-open · is-error",description:"상태 클래스"},{name:"color_primary · color_danger …",description:"색상 유틸 (스킨과 조합)"},...ft],It=[{title:"API · Props",tables:[{columns:gt,rows:yt,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Dt,rows:_t,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:wt,rows:xt,codeColumn:"name"}]}],St={title:"Components/기본 요소/Button",id:"components-button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outline","ghost","text","select"],type:{name:"enum",summary:"'filled' | 'outline' | 'ghost' | 'text' | 'select'"}},color:{control:"select",options:["primary","default","success","warning","danger","muted"],type:{name:"enum",summary:"'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaDisabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},loading:{control:"boolean",type:{name:"boolean",summary:"boolean"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}},placeholder:{control:"boolean",type:{name:"boolean",summary:"boolean"}},selectText:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},type:{control:"select",options:["button","submit","reset"],type:{name:"enum",summary:"'button' | 'submit' | 'reset'"}},haspopup:{control:"text",type:{name:"string",summary:"string"}},expanded:{control:"boolean",type:{name:"boolean",summary:"boolean"}},invalid:{control:"boolean",type:{name:"boolean",summary:"boolean"}},tag:{control:"select",options:["button","a","div"],type:{name:"enum",summary:"'button' | 'a' | 'div'"}},href:{control:"text",type:{name:"string",summary:"string"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:It}},e={args:{variant:"filled",color:"primary",size:"md",round:!1,vertical:!1,iconOnly:!1,block:!1,grow:!1,fit:!1,disabled:!1,ariaDisabled:!1,loading:!1,open:!0,error:!1,placeholder:!1,selectText:!1,label:"라벨",ariaLabel:"접근성 라벨",type:"button",haspopup:"값",expanded:!1,invalid:!1,tag:"button",href:"#",role:"button"},render:vt=>({components:{Button:t},setup(){return{args:vt}},template:'<Button v-bind="args" />'})},a={name:"기본 유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" label="Filled Primary" />
    <Button variant="filled" color="default" label="Filled Default" />
    <Button variant="outline" color="primary" label="Outline" />
    <Button variant="ghost" label="Ghost" />
    <Button variant="text" color="primary" label="Text" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="success" label="Success" />
    <Button variant="filled" color="warning" label="Warning" />
    <Button variant="filled" color="danger" label="Danger" />
    <Button variant="outline" color="danger" label="Outline Danger" />
    <Button variant="text" color="danger" label="Text Danger" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="Filled Primary" />
      <Button variant="filled" color="default" label="Filled Default" />
      <Button variant="outline" color="primary" label="Outline" />
      <Button variant="ghost" label="Ghost" />
      <Button variant="text" color="primary" label="Text" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="success" label="Success" />
      <Button variant="filled" color="warning" label="Warning" />
      <Button variant="filled" color="danger" label="Danger" />
      <Button variant="outline" color="danger" label="Outline Danger" />
      <Button variant="text" color="danger" label="Text Danger" />
    </div>`})},l={name:"셀렉트 박스형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 aria-haspopup과 aria-expanded를 지정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="select" label="서울특별시" haspopup="listbox" />
    <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
    <Button variant="select" open label="카테고리" haspopup="listbox" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="select" size="sm" label="Small" haspopup="listbox" />
    <Button variant="select" label="Medium" haspopup="listbox" />
    <Button variant="select" size="lg" label="Large" haspopup="listbox" />
    <Button variant="select" disabled label="비활성" haspopup="listbox" />
    <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
  </div>
  <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
  <div class="btn_row btn_row-wrap">
    <Button variant="select" select-text label="최신순" haspopup="listbox" />
    <Button variant="select" select-text placeholder label="정렬 기준" haspopup="listbox" />
    <Button variant="select" select-text open label="필터" haspopup="listbox" />
    <Button variant="select" select-text size="sm" label="Small" haspopup="listbox" />
    <Button variant="select" select-text disabled label="비활성" haspopup="listbox" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="select" label="서울특별시" haspopup="listbox" />
      <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
      <Button variant="select" open label="카테고리" haspopup="listbox" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="select" size="sm" label="Small" haspopup="listbox" />
      <Button variant="select" label="Medium" haspopup="listbox" />
      <Button variant="select" size="lg" label="Large" haspopup="listbox" />
      <Button variant="select" disabled label="비활성" haspopup="listbox" />
      <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
    </div>
    <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
    <div class="btn_row btn_row-wrap">
      <Button variant="select" select-text label="최신순" haspopup="listbox" />
      <Button variant="select" select-text placeholder label="정렬 기준" haspopup="listbox" />
      <Button variant="select" select-text open label="필터" haspopup="listbox" />
      <Button variant="select" select-text size="sm" label="Small" haspopup="listbox" />
      <Button variant="select" select-text disabled label="비활성" haspopup="listbox" />
    </div>`})},o={name:"텍스트 버튼",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="primary" label="Primary" />
    <Button variant="text" color="muted" label="Muted" />
    <Button variant="text" color="danger" label="Danger" />
    <Button variant="text" color="success" label="Success" />
    <Button variant="text" color="warning" label="Warning" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="danger" label="삭제">
      <template #icon-before>
        <Icon name="trash" />
      </template>
    </Button>
    <Button variant="text" color="success" label="완료">
      <template #icon-before>
        <Icon name="check-circle" />
      </template>
    </Button>
    <Button variant="text" color="warning" label="주의">
      <template #icon-after>
        <Icon name="alert-triangle" />
      </template>
    </Button>
    <Button variant="text" color="muted" label="자세히">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="primary" label="더 보기" />
    <Button variant="text" color="primary" label="링크 복사" />
    <Button variant="text" color="primary" label="취소" />
    <Button variant="text" color="primary" label="건너뛰기" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="primary" label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="text" color="primary" label="다운로드">
      <template #icon-before>
        <Icon name="download" />
      </template>
    </Button>
    <Button variant="text" color="primary" label="링크 열기">
      <template #icon-before>
        <Icon name="external-link" />
      </template>
    </Button>
    <Button variant="text" color="primary" label="설정">
      <template #icon-before>
        <Icon name="settings" />
      </template>
    </Button>
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="primary" label="다음">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
    <Button variant="text" color="primary" label="전체 보기">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
    <Button variant="text" color="primary" label="삭제">
      <template #icon-after>
        <Icon name="trash" />
      </template>
    </Button>
    <Button variant="text" color="primary" label="새로고침">
      <template #icon-after>
        <Icon name="refresh" />
      </template>
    </Button>
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="primary" size="sm" label="Small" />
    <Button variant="text" color="primary" label="Medium" />
    <Button variant="text" color="primary" size="lg" label="Large" />
    <Button variant="text" color="primary" size="sm" label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="text" color="primary" size="lg" label="다음">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="text" color="primary" icon-only aria-label="검색">
      <template #icon-before>
        <Icon name="search" />
      </template>
    </Button>
    <Button variant="text" color="primary" icon-only aria-label="편집">
      <template #icon-before>
        <Icon name="edit" />
      </template>
    </Button>
    <Button variant="text" color="primary" icon-only size="sm" aria-label="닫기">
      <template #icon-before>
        <Icon name="close" />
      </template>
    </Button>
    <Button variant="text" color="primary" disabled label="비활성" />
    <Button variant="text" color="primary" disabled label="비활성">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
    <Button variant="text" color="primary" aria-disabled label="is-disabled">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
  </div>
  <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="Primary" />
      <Button variant="text" color="muted" label="Muted" />
      <Button variant="text" color="danger" label="Danger" />
      <Button variant="text" color="success" label="Success" />
      <Button variant="text" color="warning" label="Warning" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="danger" label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="text" color="success" label="완료">
        <template #icon-before><Icon name="check-circle" /></template>
      </Button>
      <Button variant="text" color="warning" label="주의">
        <template #icon-after><Icon name="alert-triangle" /></template>
      </Button>
      <Button variant="text" color="muted" label="자세히">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="더 보기" />
      <Button variant="text" color="primary" label="링크 복사" />
      <Button variant="text" color="primary" label="취소" />
      <Button variant="text" color="primary" label="건너뛰기" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="text" color="primary" label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <Button variant="text" color="primary" label="링크 열기">
        <template #icon-before><Icon name="external-link" /></template>
      </Button>
      <Button variant="text" color="primary" label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" label="전체 보기">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" label="삭제">
        <template #icon-after><Icon name="trash" /></template>
      </Button>
      <Button variant="text" color="primary" label="새로고침">
        <template #icon-after><Icon name="refresh" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" size="sm" label="Small" />
      <Button variant="text" color="primary" label="Medium" />
      <Button variant="text" color="primary" size="lg" label="Large" />
      <Button variant="text" color="primary" size="sm" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="text" color="primary" size="lg" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" icon-only aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="text" color="primary" icon-only aria-label="편집">
        <template #icon-before><Icon name="edit" /></template>
      </Button>
      <Button variant="text" color="primary" icon-only size="sm" aria-label="닫기">
        <template #icon-before><Icon name="close" /></template>
      </Button>
      <Button variant="text" color="primary" disabled label="비활성" />
      <Button variant="text" color="primary" disabled label="비활성">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" aria-disabled label="is-disabled">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />`})},r={name:"아이콘 + 텍스트",parameters:{demoPreview:{stack:!1},docs:{description:{story:"아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="추가">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
  <Button variant="filled" color="default" label="다운로드">
    <template #icon-before>
      <Icon name="download" />
    </template>
  </Button>
  <Button variant="outline" color="primary" label="새 항목">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="primary" label="추가">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="default" label="다운로드">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="outline" color="primary" label="새 항목">
      <template #icon-before><Icon name="plus" /></template>
    </Button>`})},u={name:"아이콘 + 텍스트 (세로)",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" vertical label="홈">
      <template #icon-before>
        <Icon name="home" />
      </template>
    </Button>
    <Button variant="filled" color="default" vertical label="검색">
      <template #icon-before>
        <Icon name="search" />
      </template>
    </Button>
    <Button variant="ghost" vertical label="마이">
      <template #icon-before>
        <Icon name="user" />
      </template>
    </Button>
    <Button variant="text" color="primary" vertical label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="outline" color="primary" vertical label="다운로드">
      <template #icon-before>
        <Icon name="download" />
      </template>
    </Button>
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" vertical size="sm" label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="filled" color="primary" vertical label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="filled" color="primary" vertical size="lg" label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="default" vertical round label="가이드">
      <template #icon-before>
        <Icon name="book" />
      </template>
    </Button>
    <Button variant="filled" color="primary" vertical round label="즐겨찾기">
      <template #icon-before>
        <Icon name="star" />
      </template>
    </Button>
    <Button variant="ghost" vertical disabled label="삭제">
      <template #icon-before>
        <Icon name="trash" />
      </template>
    </Button>
    <Button variant="filled" color="primary" vertical loading label="저장 중" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" vertical label="홈">
        <template #icon-before><Icon name="home" /></template>
      </Button>
      <Button variant="filled" color="default" vertical label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="ghost" vertical label="마이">
        <template #icon-before><Icon name="user" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="outline" color="primary" vertical label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" vertical size="sm" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical size="lg" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="default" vertical round label="가이드">
        <template #icon-before><Icon name="book" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical round label="즐겨찾기">
        <template #icon-before><Icon name="star" /></template>
      </Button>
      <Button variant="ghost" vertical disabled label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical loading label="저장 중" />
    </div>`})},i={name:"아이콘 + 텍스트 (세로) · 균등 배분",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <div class="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
    <Button variant="text" color="primary" vertical label="홈">
      <template #icon-before>
        <Icon name="home" />
      </template>
    </Button>
    <Button variant="text" color="primary" vertical label="카테고리">
      <template #icon-before>
        <Icon name="grid" />
      </template>
    </Button>
    <Button variant="filled" color="primary" vertical label="장바구니">
      <template #icon-before>
        <Icon name="cart" />
      </template>
    </Button>
    <Button variant="text" color="primary" vertical label="마이">
      <template #icon-before>
        <Icon name="user" />
      </template>
    </Button>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <Button variant="text" color="primary" vertical label="홈">
        <template #icon-before><Icon name="home" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="카테고리">
        <template #icon-before><Icon name="grid" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical label="장바구니">
        <template #icon-before><Icon name="cart" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="마이">
        <template #icon-before><Icon name="user" /></template>
      </Button>
    </div>`})},c={name:"텍스트 + 아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="다음">
    <template #icon-after>
      <Icon name="chevron-right" />
    </template>
  </Button>
  <Button variant="filled" color="default" label="자세히 보기">
    <template #icon-after>
      <Icon name="external-link" />
    </template>
  </Button>
  <Button variant="text" color="primary" label="링크 이동">
    <template #icon-after>
      <Icon name="chevron-right" />
    </template>
  </Button>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="primary" label="다음">
      <template #icon-after><Icon name="chevron-right" /></template>
    </Button>
    <Button variant="filled" color="default" label="자세히 보기">
      <template #icon-after><Icon name="external-link" /></template>
    </Button>
    <Button variant="text" color="primary" label="링크 이동">
      <template #icon-after><Icon name="chevron-right" /></template>
    </Button>`})},p={name:"아이콘 버튼",parameters:{demoPreview:{stack:!1},docs:{description:{story:"텍스트 없이 아이콘만 표시합니다. btn_icon-only와 함께 사용하며, 접근성을 위해 aria-label을 반드시 지정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" icon-only aria-label="추가">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
  <Button variant="filled" color="default" icon-only aria-label="설정">
    <template #icon-before>
      <Icon name="settings" />
    </template>
  </Button>
  <Button variant="ghost" icon-only aria-label="검색">
    <template #icon-before>
      <Icon name="search" />
    </template>
  </Button>
  <Button variant="outline" color="primary" icon-only aria-label="편집">
    <template #icon-before>
      <Icon name="edit" />
    </template>
  </Button>
  <Button variant="filled" color="danger" icon-only aria-label="삭제">
    <template #icon-before>
      <Icon name="trash" />
    </template>
  </Button>
  <Button variant="filled" color="primary" icon-only disabled aria-label="추가">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="primary" icon-only aria-label="추가">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only aria-label="설정">
      <template #icon-before><Icon name="settings" /></template>
    </Button>
    <Button variant="ghost" icon-only aria-label="검색">
      <template #icon-before><Icon name="search" /></template>
    </Button>
    <Button variant="outline" color="primary" icon-only aria-label="편집">
      <template #icon-before><Icon name="edit" /></template>
    </Button>
    <Button variant="filled" color="danger" icon-only aria-label="삭제">
      <template #icon-before><Icon name="trash" /></template>
    </Button>
    <Button variant="filled" color="primary" icon-only disabled aria-label="추가">
      <template #icon-before><Icon name="plus" /></template>
    </Button>`})},d={name:"아이콘 버튼 크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"btn_sm, medium, btn_lg 세 가지 크기를 지원합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
  <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
  <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)">
    <template #icon-before>
      <Icon name="plus" />
    </template>
  </Button>
  <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)">
    <template #icon-before>
      <Icon name="download" />
    </template>
  </Button>
  <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)">
    <template #icon-before>
      <Icon name="download" />
    </template>
  </Button>
  <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)">
    <template #icon-before>
      <Icon name="download" />
    </template>
  </Button>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)">
      <template #icon-before><Icon name="download" /></template>
    </Button>`})},s={name:"색상 변형",parameters:{demoPreview:{stack:!1},docs:{description:{story:"상황에 맞는 색상 변형을 사용합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="outline" color="primary" label="Outline" />
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="success" label="Success" />
    <Button variant="filled" color="danger" label="Danger" />
    <Button variant="filled" color="warning" label="Warning" />
    <Button variant="outline" color="primary" label="Outline" />`})},m={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"small, medium, large 세 가지 크기를 지원합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" size="sm" label="Small" />
  <Button variant="filled" color="primary" label="Medium" />
  <Button variant="filled" color="primary" size="lg" label="Large" />
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="primary" size="sm" label="Small" />
    <Button variant="filled" color="primary" label="Medium" />
    <Button variant="filled" color="primary" size="lg" label="Large" />`})},b={name:"라운드",parameters:{demoPreview:{stack:!0},docs:{description:{story:"btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" round label="Primary" />
    <Button variant="filled" color="default" round label="Default" />
    <Button variant="ghost" round label="Ghost" />
    <Button variant="outline" color="primary" round label="Outline" />
    <Button variant="filled" color="success" round label="Success" />
    <Button variant="filled" color="danger" round label="Danger" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" round size="sm" label="Small" />
    <Button variant="filled" color="primary" round label="Medium" />
    <Button variant="filled" color="primary" round size="lg" label="Large" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" round label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="filled" color="default" round label="다음">
      <template #icon-after>
        <Icon name="chevron-right" />
      </template>
    </Button>
    <Button variant="text" color="primary" round label="더 보기" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" round icon-only aria-label="추가">
      <template #icon-before>
        <Icon name="plus" />
      </template>
    </Button>
    <Button variant="filled" color="default" round icon-only aria-label="설정">
      <template #icon-before>
        <Icon name="settings" />
      </template>
    </Button>
    <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색">
      <template #icon-before>
        <Icon name="search" />
      </template>
    </Button>
    <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제">
      <template #icon-before>
        <Icon name="trash" />
      </template>
    </Button>
  </div>
  <div class="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
    <Button variant="filled" color="default" label="일" />
    <Button variant="filled" color="default" label="주" />
    <Button variant="filled" color="primary" label="월" />
    <Button variant="filled" color="default" label="년" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round label="Primary" />
      <Button variant="filled" color="default" round label="Default" />
      <Button variant="ghost" round label="Ghost" />
      <Button variant="outline" color="primary" round label="Outline" />
      <Button variant="filled" color="success" round label="Success" />
      <Button variant="filled" color="danger" round label="Danger" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round size="sm" label="Small" />
      <Button variant="filled" color="primary" round label="Medium" />
      <Button variant="filled" color="primary" round size="lg" label="Large" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" round label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" round label="더 보기" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round icon-only aria-label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" round icon-only aria-label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
      <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
    </div>
    <div class="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
      <Button variant="filled" color="default" label="일" />
      <Button variant="filled" color="default" label="주" />
      <Button variant="filled" color="primary" label="월" />
      <Button variant="filled" color="default" label="년" />
    </div>`})},B={name:"너비",parameters:{demoPreview:{stack:!0},docs:{description:{story:"부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" block label="전체 너비 버튼" />
  <div class="btn_row-equal">
    <Button variant="filled" color="default" label="취소" />
    <Button variant="filled" color="primary" label="확인" />
  </div>
  <div class="btn_row">
    <Button variant="filled" color="default" grow label="취소" />
    <Button variant="filled" color="primary" grow label="확인" />
  </div>
  <div class="btn_row">
    <Button variant="filled" color="default" grow label="옵션 A" />
    <Button variant="filled" color="default" grow label="옵션 B" />
    <Button variant="filled" color="primary" grow label="옵션 C" />
  </div>
  <div class="btn_row btn_row-start">
    <Button variant="ghost" fit label="뒤로" />
    <Button variant="filled" color="default" fit label="취소" />
    <Button variant="filled" color="primary" fit label="저장" />
  </div>
  <div class="btn_row btn_row-end">
    <Button variant="ghost" fit label="뒤로" />
    <Button variant="filled" color="default" fit label="취소" />
    <Button variant="filled" color="primary" fit label="저장" />
  </div>
  <div class="btn_row">
    <Button variant="ghost" fit label="뒤로" />
    <Button variant="filled" color="default" grow label="임시 저장" />
    <Button variant="filled" color="primary" grow label="제출" />
  </div>
  <div class="btn_row">
    <Button variant="filled" color="default" grow label="본문 영역" />
    <Button variant="filled" color="primary" fit label="확인" />
  </div>
  <div class="btn_row">
    <Button variant="filled" color="default" grow="2" label="2배 너비" />
    <Button variant="filled" color="primary" grow label="1배 너비" />
  </div>
  <Button variant="filled" color="primary" block label="전체 너비 다운로드">
    <template #icon-before>
      <Icon name="download" />
    </template>
  </Button>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<Button variant="filled" color="primary" block label="전체 너비 버튼" />
    <div class="btn_row-equal">
      <Button variant="filled" color="default" label="취소" />
      <Button variant="filled" color="primary" label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="취소" />
      <Button variant="filled" color="primary" grow label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="옵션 A" />
      <Button variant="filled" color="default" grow label="옵션 B" />
      <Button variant="filled" color="primary" grow label="옵션 C" />
    </div>
    <div class="btn_row btn_row-start">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" fit label="취소" />
      <Button variant="filled" color="primary" fit label="저장" />
    </div>
    <div class="btn_row btn_row-end">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" fit label="취소" />
      <Button variant="filled" color="primary" fit label="저장" />
    </div>
    <div class="btn_row">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" grow label="임시 저장" />
      <Button variant="filled" color="primary" grow label="제출" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="본문 영역" />
      <Button variant="filled" color="primary" fit label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow="2" label="2배 너비" />
      <Button variant="filled" color="primary" grow label="1배 너비" />
    </div>
    <Button variant="filled" color="primary" block label="전체 너비 다운로드">
      <template #icon-before><Icon name="download" /></template>
    </Button>`})},v={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" disabled label="Primary" />
    <Button variant="filled" color="default" disabled label="Default" />
    <Button variant="outline" color="primary" disabled label="Outline" />
    <Button variant="ghost" disabled label="Ghost" />
    <Button variant="text" color="primary" disabled label="Text" />
    <Button variant="filled" color="danger" disabled label="Danger" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
    <Button variant="filled" color="default" aria-disabled label="is-disabled" />
    <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
  </div>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" loading label="저장 중" />
    <Button variant="filled" color="default" loading label="처리 중" />
    <Button variant="outline" color="primary" loading label="업로드 중" />
    <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
  </div>
  <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" disabled label="Primary" />
      <Button variant="filled" color="default" disabled label="Default" />
      <Button variant="outline" color="primary" disabled label="Outline" />
      <Button variant="ghost" disabled label="Ghost" />
      <Button variant="text" color="primary" disabled label="Text" />
      <Button variant="filled" color="danger" disabled label="Danger" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
      <Button variant="filled" color="default" aria-disabled label="is-disabled" />
      <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" loading label="저장 중" />
      <Button variant="filled" color="default" loading label="처리 중" />
      <Button variant="outline" color="primary" loading label="업로드 중" />
      <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
    </div>
    <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />`})},C={name:"버튼 그룹",parameters:{demoPreview:{stack:!0},docs:{description:{story:"가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
    <Button variant="filled" color="default" size="sm" label="Left" />
    <Button variant="filled" color="default" size="sm" label="Middle" />
    <Button variant="filled" color="default" size="sm" label="Right" />
  </div>
  <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
    <Button variant="filled" color="default" label="Left" />
    <Button variant="filled" color="default" label="Middle" />
    <Button variant="filled" color="default" label="Right" />
  </div>
  <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
    <Button variant="filled" color="default" size="lg" label="Left" />
    <Button variant="filled" color="default" size="lg" label="Middle" />
    <Button variant="filled" color="default" size="lg" label="Right" />
  </div>
  <div class="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
    <Button variant="filled" color="default" label="Left" />
    <Button variant="filled" color="default" label="Middle" />
    <Button variant="filled" color="default" label="Right" />
  </div>
  <div class="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
    <Button variant="filled" color="default" label="Left" />
    <Button variant="filled" color="default" label="Middle" />
    <Button variant="filled" color="default" label="Right" />
  </div>
  <div class="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
    <Button variant="filled" color="default" label="Left" />
    <Button variant="filled" color="default" label="Middle" />
    <Button variant="filled" color="default" label="Right" />
  </div>
  <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
    <Button variant="filled" color="default" label="상단" />
    <Button variant="filled" color="default" label="중간" />
    <Button variant="filled" color="default" label="하단" />
  </div>
  <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
    <Button variant="filled" color="default" label="상단" />
    <Button variant="filled" color="default" label="중간" />
    <Button variant="filled" color="default" label="하단" />
  </div>
  <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
    <Button variant="filled" color="default" label="상단" />
    <Button variant="filled" color="default" label="중간" />
    <Button variant="filled" color="default" label="하단" />
  </div>
  <div class="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
    <Button variant="filled" color="default" label="상단" />
    <Button variant="filled" color="default" label="중간" />
    <Button variant="filled" color="default" label="하단" />
  </div>
  <div class="btn_stack">
    <Button variant="filled" color="primary" block label="로그인" />
    <Button variant="filled" color="default" block label="회원가입" />
  </div>
  <div class="btn_stack">
    <Button variant="filled" color="primary" block label="결제하기" />
    <Button variant="text" color="primary" label="쿠폰 적용" />
  </div>
  <div class="btn_stack">
    <Button variant="filled" color="primary" block label="다운로드">
      <template #icon-before>
        <Icon name="download" />
      </template>
    </Button>
    <p class="btn_stack-text">최신 버전 v2.0 · <a href="#">릴리스 노트</a>
    </p>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
      <Button variant="filled" color="default" size="sm" label="Left" />
      <Button variant="filled" color="default" size="sm" label="Middle" />
      <Button variant="filled" color="default" size="sm" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
      <Button variant="filled" color="default" size="lg" label="Left" />
      <Button variant="filled" color="default" size="lg" label="Middle" />
      <Button variant="filled" color="default" size="lg" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="로그인" />
      <Button variant="filled" color="default" block label="회원가입" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="결제하기" />
      <Button variant="text" color="primary" label="쿠폰 적용" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <p class="btn_stack-text">최신 버전 v2.0 · <a href="#">릴리스 노트</a></p>
    </div>`})},f={name:"루트 태그",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tag prop으로 button · a · div를 선택합니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex=0을 자동 부여합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" label="button" />
    <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
    <Button tag="div" variant="ghost" label="div → role=button" />
    <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Button:t,Icon:n},template:`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="button" />
      <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
      <Button tag="div" variant="ghost" label="div → role=button" />
      <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
    </div>`})};var g,y,D;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "filled",
    color: "primary",
    size: "md",
    round: false,
    vertical: false,
    iconOnly: false,
    block: false,
    grow: false,
    fit: false,
    disabled: false,
    ariaDisabled: false,
    loading: false,
    open: true,
    error: false,
    placeholder: false,
    selectText: false,
    label: "라벨",
    ariaLabel: "접근성 라벨",
    type: "button",
    haspopup: "값",
    expanded: false,
    invalid: false,
    tag: "button",
    href: "#",
    role: "button"
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(D=(y=e.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var _,w,x;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "기본 유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" label=\\"Filled Primary\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Filled Default\\" />\\n    <Button variant=\\"outline\\" color=\\"primary\\" label=\\"Outline\\" />\\n    <Button variant=\\"ghost\\" label=\\"Ghost\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"Text\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"success\\" label=\\"Success\\" />\\n    <Button variant=\\"filled\\" color=\\"warning\\" label=\\"Warning\\" />\\n    <Button variant=\\"filled\\" color=\\"danger\\" label=\\"Danger\\" />\\n    <Button variant=\\"outline\\" color=\\"danger\\" label=\\"Outline Danger\\" />\\n    <Button variant=\\"text\\" color=\\"danger\\" label=\\"Text Danger\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="Filled Primary" />
      <Button variant="filled" color="default" label="Filled Default" />
      <Button variant="outline" color="primary" label="Outline" />
      <Button variant="ghost" label="Ghost" />
      <Button variant="text" color="primary" label="Text" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="success" label="Success" />
      <Button variant="filled" color="warning" label="Warning" />
      <Button variant="filled" color="danger" label="Danger" />
      <Button variant="outline" color="danger" label="Outline Danger" />
      <Button variant="text" color="danger" label="Text Danger" />
    </div>\`
  })
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var I,h,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "셀렉트 박스형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 aria-haspopup과 aria-expanded를 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"select\\" label=\\"서울특별시\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" placeholder label=\\"옵션을 선택하세요\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" open label=\\"카테고리\\" haspopup=\\"listbox\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"select\\" size=\\"sm\\" label=\\"Small\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" label=\\"Medium\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" size=\\"lg\\" label=\\"Large\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" disabled label=\\"비활성\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" error invalid label=\\"필수 선택\\" haspopup=\\"listbox\\" />\\n  </div>\\n  <Button variant=\\"select\\" block label=\\"전체 너비 셀렉트 트리거\\" haspopup=\\"listbox\\" />\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"select\\" select-text label=\\"최신순\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" select-text placeholder label=\\"정렬 기준\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" select-text open label=\\"필터\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" select-text size=\\"sm\\" label=\\"Small\\" haspopup=\\"listbox\\" />\\n    <Button variant=\\"select\\" select-text disabled label=\\"비활성\\" haspopup=\\"listbox\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="select" label="서울특별시" haspopup="listbox" />
      <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
      <Button variant="select" open label="카테고리" haspopup="listbox" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="select" size="sm" label="Small" haspopup="listbox" />
      <Button variant="select" label="Medium" haspopup="listbox" />
      <Button variant="select" size="lg" label="Large" haspopup="listbox" />
      <Button variant="select" disabled label="비활성" haspopup="listbox" />
      <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
    </div>
    <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
    <div class="btn_row btn_row-wrap">
      <Button variant="select" select-text label="최신순" haspopup="listbox" />
      <Button variant="select" select-text placeholder label="정렬 기준" haspopup="listbox" />
      <Button variant="select" select-text open label="필터" haspopup="listbox" />
      <Button variant="select" select-text size="sm" label="Small" haspopup="listbox" />
      <Button variant="select" select-text disabled label="비활성" haspopup="listbox" />
    </div>\`
  })
}`,...(A=(h=l.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var E,k,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "텍스트 버튼",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"Primary\\" />\\n    <Button variant=\\"text\\" color=\\"muted\\" label=\\"Muted\\" />\\n    <Button variant=\\"text\\" color=\\"danger\\" label=\\"Danger\\" />\\n    <Button variant=\\"text\\" color=\\"success\\" label=\\"Success\\" />\\n    <Button variant=\\"text\\" color=\\"warning\\" label=\\"Warning\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"danger\\" label=\\"삭제\\">\\n      <template #icon-before>\\n        <Icon name=\\"trash\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"success\\" label=\\"완료\\">\\n      <template #icon-before>\\n        <Icon name=\\"check-circle\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"warning\\" label=\\"주의\\">\\n      <template #icon-after>\\n        <Icon name=\\"alert-triangle\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"muted\\" label=\\"자세히\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"더 보기\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"링크 복사\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"취소\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"건너뛰기\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"다운로드\\">\\n      <template #icon-before>\\n        <Icon name=\\"download\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"링크 열기\\">\\n      <template #icon-before>\\n        <Icon name=\\"external-link\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"설정\\">\\n      <template #icon-before>\\n        <Icon name=\\"settings\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"다음\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"전체 보기\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"삭제\\">\\n      <template #icon-after>\\n        <Icon name=\\"trash\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"새로고침\\">\\n      <template #icon-after>\\n        <Icon name=\\"refresh\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" size=\\"sm\\" label=\\"Small\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"Medium\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" size=\\"lg\\" label=\\"Large\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" size=\\"sm\\" label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" size=\\"lg\\" label=\\"다음\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" icon-only aria-label=\\"검색\\">\\n      <template #icon-before>\\n        <Icon name=\\"search\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" icon-only aria-label=\\"편집\\">\\n      <template #icon-before>\\n        <Icon name=\\"edit\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" icon-only size=\\"sm\\" aria-label=\\"닫기\\">\\n      <template #icon-before>\\n        <Icon name=\\"close\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" disabled label=\\"비활성\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" disabled label=\\"비활성\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" aria-disabled label=\\"is-disabled\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <Button variant=\\"text\\" color=\\"primary\\" block label=\\"전체 너비 텍스트 버튼\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="Primary" />
      <Button variant="text" color="muted" label="Muted" />
      <Button variant="text" color="danger" label="Danger" />
      <Button variant="text" color="success" label="Success" />
      <Button variant="text" color="warning" label="Warning" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="danger" label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="text" color="success" label="완료">
        <template #icon-before><Icon name="check-circle" /></template>
      </Button>
      <Button variant="text" color="warning" label="주의">
        <template #icon-after><Icon name="alert-triangle" /></template>
      </Button>
      <Button variant="text" color="muted" label="자세히">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="더 보기" />
      <Button variant="text" color="primary" label="링크 복사" />
      <Button variant="text" color="primary" label="취소" />
      <Button variant="text" color="primary" label="건너뛰기" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="text" color="primary" label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <Button variant="text" color="primary" label="링크 열기">
        <template #icon-before><Icon name="external-link" /></template>
      </Button>
      <Button variant="text" color="primary" label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" label="전체 보기">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" label="삭제">
        <template #icon-after><Icon name="trash" /></template>
      </Button>
      <Button variant="text" color="primary" label="새로고침">
        <template #icon-after><Icon name="refresh" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" size="sm" label="Small" />
      <Button variant="text" color="primary" label="Medium" />
      <Button variant="text" color="primary" size="lg" label="Large" />
      <Button variant="text" color="primary" size="sm" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="text" color="primary" size="lg" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" icon-only aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="text" color="primary" icon-only aria-label="편집">
        <template #icon-before><Icon name="edit" /></template>
      </Button>
      <Button variant="text" color="primary" icon-only size="sm" aria-label="닫기">
        <template #icon-before><Icon name="close" /></template>
      </Button>
      <Button variant="text" color="primary" disabled label="비활성" />
      <Button variant="text" color="primary" disabled label="비활성">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" aria-disabled label="is-disabled">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />\`
  })
}`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var z,S,P;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "아이콘 + 텍스트",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"추가\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"default\\" label=\\"다운로드\\">\\n    <template #icon-before>\\n      <Icon name=\\"download\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"outline\\" color=\\"primary\\" label=\\"새 항목\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" label="추가">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="default" label="다운로드">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="outline" color="primary" label="새 항목">
      <template #icon-before><Icon name="plus" /></template>
    </Button>\`
  })
}`,...(P=(S=r.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,M,L;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "아이콘 + 텍스트 (세로)",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical label=\\"홈\\">\\n      <template #icon-before>\\n        <Icon name=\\"home\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"default\\" vertical label=\\"검색\\">\\n      <template #icon-before>\\n        <Icon name=\\"search\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"ghost\\" vertical label=\\"마이\\">\\n      <template #icon-before>\\n        <Icon name=\\"user\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" vertical label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"outline\\" color=\\"primary\\" vertical label=\\"다운로드\\">\\n      <template #icon-before>\\n        <Icon name=\\"download\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical size=\\"sm\\" label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical size=\\"lg\\" label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" vertical round label=\\"가이드\\">\\n      <template #icon-before>\\n        <Icon name=\\"book\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical round label=\\"즐겨찾기\\">\\n      <template #icon-before>\\n        <Icon name=\\"star\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"ghost\\" vertical disabled label=\\"삭제\\">\\n      <template #icon-before>\\n        <Icon name=\\"trash\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical loading label=\\"저장 중\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" vertical label="홈">
        <template #icon-before><Icon name="home" /></template>
      </Button>
      <Button variant="filled" color="default" vertical label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="ghost" vertical label="마이">
        <template #icon-before><Icon name="user" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="outline" color="primary" vertical label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" vertical size="sm" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical size="lg" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="default" vertical round label="가이드">
        <template #icon-before><Icon name="book" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical round label="즐겨찾기">
        <template #icon-before><Icon name="star" /></template>
      </Button>
      <Button variant="ghost" vertical disabled label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical loading label="저장 중" />
    </div>\`
  })
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var O,R,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "아이콘 + 텍스트 (세로) · 균등 배분",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row-equal\\" role=\\"toolbar\\" aria-label=\\"하단 탭 바\\">\\n    <Button variant=\\"text\\" color=\\"primary\\" vertical label=\\"홈\\">\\n      <template #icon-before>\\n        <Icon name=\\"home\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" vertical label=\\"카테고리\\">\\n      <template #icon-before>\\n        <Icon name=\\"grid\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"primary\\" vertical label=\\"장바구니\\">\\n      <template #icon-before>\\n        <Icon name=\\"cart\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" vertical label=\\"마이\\">\\n      <template #icon-before>\\n        <Icon name=\\"user\\" />\\n      </template>\\n    </Button>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <Button variant="text" color="primary" vertical label="홈">
        <template #icon-before><Icon name="home" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="카테고리">
        <template #icon-before><Icon name="grid" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical label="장바구니">
        <template #icon-before><Icon name="cart" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="마이">
        <template #icon-before><Icon name="user" /></template>
      </Button>
    </div>\`
  })
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var G,W,V;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "텍스트 + 아이콘",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"다음\\">\\n    <template #icon-after>\\n      <Icon name=\\"chevron-right\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"default\\" label=\\"자세히 보기\\">\\n    <template #icon-after>\\n      <Icon name=\\"external-link\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"text\\" color=\\"primary\\" label=\\"링크 이동\\">\\n    <template #icon-after>\\n      <Icon name=\\"chevron-right\\" />\\n    </template>\\n  </Button>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" label="다음">
      <template #icon-after><Icon name="chevron-right" /></template>
    </Button>
    <Button variant="filled" color="default" label="자세히 보기">
      <template #icon-after><Icon name="external-link" /></template>
    </Button>
    <Button variant="text" color="primary" label="링크 이동">
      <template #icon-after><Icon name="chevron-right" /></template>
    </Button>\`
  })
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var H,$,j;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "아이콘 버튼",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "텍스트 없이 아이콘만 표시합니다. btn_icon-only와 함께 사용하며, 접근성을 위해 aria-label을 반드시 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" icon-only aria-label=\\"추가\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"default\\" icon-only aria-label=\\"설정\\">\\n    <template #icon-before>\\n      <Icon name=\\"settings\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"ghost\\" icon-only aria-label=\\"검색\\">\\n    <template #icon-before>\\n      <Icon name=\\"search\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"outline\\" color=\\"primary\\" icon-only aria-label=\\"편집\\">\\n    <template #icon-before>\\n      <Icon name=\\"edit\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"danger\\" icon-only aria-label=\\"삭제\\">\\n    <template #icon-before>\\n      <Icon name=\\"trash\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"primary\\" icon-only disabled aria-label=\\"추가\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" icon-only aria-label="추가">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only aria-label="설정">
      <template #icon-before><Icon name="settings" /></template>
    </Button>
    <Button variant="ghost" icon-only aria-label="검색">
      <template #icon-before><Icon name="search" /></template>
    </Button>
    <Button variant="outline" color="primary" icon-only aria-label="편집">
      <template #icon-before><Icon name="edit" /></template>
    </Button>
    <Button variant="filled" color="danger" icon-only aria-label="삭제">
      <template #icon-before><Icon name="trash" /></template>
    </Button>
    <Button variant="filled" color="primary" icon-only disabled aria-label="추가">
      <template #icon-before><Icon name="plus" /></template>
    </Button>\`
  })
}`,...(j=($=p.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var J,K,N;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "아이콘 버튼 크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "btn_sm, medium, btn_lg 세 가지 크기를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" icon-only size=\\"sm\\" aria-label=\\"추가 (small)\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"primary\\" icon-only aria-label=\\"추가 (medium)\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"primary\\" icon-only size=\\"lg\\" aria-label=\\"추가 (large)\\">\\n    <template #icon-before>\\n      <Icon name=\\"plus\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"default\\" icon-only size=\\"sm\\" aria-label=\\"다운로드 (small)\\">\\n    <template #icon-before>\\n      <Icon name=\\"download\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"default\\" icon-only aria-label=\\"다운로드 (medium)\\">\\n    <template #icon-before>\\n      <Icon name=\\"download\\" />\\n    </template>\\n  </Button>\\n  <Button variant=\\"filled\\" color=\\"default\\" icon-only size=\\"lg\\" aria-label=\\"다운로드 (large)\\">\\n    <template #icon-before>\\n      <Icon name=\\"download\\" />\\n    </template>\\n  </Button>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)">
      <template #icon-before><Icon name="plus" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)">
      <template #icon-before><Icon name="download" /></template>
    </Button>\`
  })
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "색상 변형",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "상황에 맞는 색상 변형을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"success\\" label=\\"Success\\" />\\n  <Button variant=\\"filled\\" color=\\"danger\\" label=\\"Danger\\" />\\n  <Button variant=\\"filled\\" color=\\"warning\\" label=\\"Warning\\" />\\n  <Button variant=\\"outline\\" color=\\"primary\\" label=\\"Outline\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="success" label="Success" />
    <Button variant="filled" color="danger" label="Danger" />
    <Button variant="filled" color="warning" label="Warning" />
    <Button variant="outline" color="primary" label="Outline" />\`
  })
}`,...(X=(U=s.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,tt;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "small, medium, large 세 가지 크기를 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"Small\\" />\\n  <Button variant=\\"filled\\" color=\\"primary\\" label=\\"Medium\\" />\\n  <Button variant=\\"filled\\" color=\\"primary\\" size=\\"lg\\" label=\\"Large\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" size="sm" label="Small" />
    <Button variant="filled" color="primary" label="Medium" />
    <Button variant="filled" color="primary" size="lg" label="Large" />\`
  })
}`,...(tt=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var nt,et,at;b.parameters={...b.parameters,docs:{...(nt=b.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: "라운드",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" round label=\\"Primary\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" round label=\\"Default\\" />\\n    <Button variant=\\"ghost\\" round label=\\"Ghost\\" />\\n    <Button variant=\\"outline\\" color=\\"primary\\" round label=\\"Outline\\" />\\n    <Button variant=\\"filled\\" color=\\"success\\" round label=\\"Success\\" />\\n    <Button variant=\\"filled\\" color=\\"danger\\" round label=\\"Danger\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" round size=\\"sm\\" label=\\"Small\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" round label=\\"Medium\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" round size=\\"lg\\" label=\\"Large\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" round label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"default\\" round label=\\"다음\\">\\n      <template #icon-after>\\n        <Icon name=\\"chevron-right\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"text\\" color=\\"primary\\" round label=\\"더 보기\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" round icon-only aria-label=\\"추가\\">\\n      <template #icon-before>\\n        <Icon name=\\"plus\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"default\\" round icon-only aria-label=\\"설정\\">\\n      <template #icon-before>\\n        <Icon name=\\"settings\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"outline\\" color=\\"primary\\" round icon-only size=\\"sm\\" aria-label=\\"검색\\">\\n      <template #icon-before>\\n        <Icon name=\\"search\\" />\\n      </template>\\n    </Button>\\n    <Button variant=\\"filled\\" color=\\"danger\\" round icon-only size=\\"lg\\" aria-label=\\"삭제\\">\\n      <template #icon-before>\\n        <Icon name=\\"trash\\" />\\n      </template>\\n    </Button>\\n  </div>\\n  <div class=\\"btn_group btn_group-round btn_group-fit\\" role=\\"group\\" aria-label=\\"라운드 버튼 그룹\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"일\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"주\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" label=\\"월\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"년\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round label="Primary" />
      <Button variant="filled" color="default" round label="Default" />
      <Button variant="ghost" round label="Ghost" />
      <Button variant="outline" color="primary" round label="Outline" />
      <Button variant="filled" color="success" round label="Success" />
      <Button variant="filled" color="danger" round label="Danger" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round size="sm" label="Small" />
      <Button variant="filled" color="primary" round label="Medium" />
      <Button variant="filled" color="primary" round size="lg" label="Large" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" round label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" round label="더 보기" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round icon-only aria-label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" round icon-only aria-label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
      <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
    </div>
    <div class="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
      <Button variant="filled" color="default" label="일" />
      <Button variant="filled" color="default" label="주" />
      <Button variant="filled" color="primary" label="월" />
      <Button variant="filled" color="default" label="년" />
    </div>\`
  })
}`,...(at=(et=b.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var lt,ot,rt;B.parameters={...B.parameters,docs:{...(lt=B.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: "너비",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Button variant=\\"filled\\" color=\\"primary\\" block label=\\"전체 너비 버튼\\" />\\n  <div class=\\"btn_row-equal\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"취소\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" label=\\"확인\\" />\\n  </div>\\n  <div class=\\"btn_row\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" grow label=\\"취소\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" grow label=\\"확인\\" />\\n  </div>\\n  <div class=\\"btn_row\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" grow label=\\"옵션 A\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" grow label=\\"옵션 B\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" grow label=\\"옵션 C\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-start\\">\\n    <Button variant=\\"ghost\\" fit label=\\"뒤로\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" fit label=\\"취소\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" fit label=\\"저장\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-end\\">\\n    <Button variant=\\"ghost\\" fit label=\\"뒤로\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" fit label=\\"취소\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" fit label=\\"저장\\" />\\n  </div>\\n  <div class=\\"btn_row\\">\\n    <Button variant=\\"ghost\\" fit label=\\"뒤로\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" grow label=\\"임시 저장\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" grow label=\\"제출\\" />\\n  </div>\\n  <div class=\\"btn_row\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" grow label=\\"본문 영역\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" fit label=\\"확인\\" />\\n  </div>\\n  <div class=\\"btn_row\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" grow=\\"2\\" label=\\"2배 너비\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" grow label=\\"1배 너비\\" />\\n  </div>\\n  <Button variant=\\"filled\\" color=\\"primary\\" block label=\\"전체 너비 다운로드\\">\\n    <template #icon-before>\\n      <Icon name=\\"download\\" />\\n    </template>\\n  </Button>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<Button variant="filled" color="primary" block label="전체 너비 버튼" />
    <div class="btn_row-equal">
      <Button variant="filled" color="default" label="취소" />
      <Button variant="filled" color="primary" label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="취소" />
      <Button variant="filled" color="primary" grow label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="옵션 A" />
      <Button variant="filled" color="default" grow label="옵션 B" />
      <Button variant="filled" color="primary" grow label="옵션 C" />
    </div>
    <div class="btn_row btn_row-start">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" fit label="취소" />
      <Button variant="filled" color="primary" fit label="저장" />
    </div>
    <div class="btn_row btn_row-end">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" fit label="취소" />
      <Button variant="filled" color="primary" fit label="저장" />
    </div>
    <div class="btn_row">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" grow label="임시 저장" />
      <Button variant="filled" color="primary" grow label="제출" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="본문 영역" />
      <Button variant="filled" color="primary" fit label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow="2" label="2배 너비" />
      <Button variant="filled" color="primary" grow label="1배 너비" />
    </div>
    <Button variant="filled" color="primary" block label="전체 너비 다운로드">
      <template #icon-before><Icon name="download" /></template>
    </Button>\`
  })
}`,...(rt=(ot=B.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var ut,it,ct;v.parameters={...v.parameters,docs:{...(ut=v.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" disabled label=\\"Primary\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" disabled label=\\"Default\\" />\\n    <Button variant=\\"outline\\" color=\\"primary\\" disabled label=\\"Outline\\" />\\n    <Button variant=\\"ghost\\" disabled label=\\"Ghost\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" disabled label=\\"Text\\" />\\n    <Button variant=\\"filled\\" color=\\"danger\\" disabled label=\\"Danger\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" aria-disabled label=\\"is-disabled\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" aria-disabled label=\\"is-disabled\\" />\\n    <Button variant=\\"outline\\" color=\\"primary\\" aria-disabled label=\\"is-disabled\\" />\\n  </div>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" loading label=\\"저장 중\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" loading label=\\"처리 중\\" />\\n    <Button variant=\\"outline\\" color=\\"primary\\" loading label=\\"업로드 중\\" />\\n    <Button variant=\\"filled\\" color=\\"primary\\" icon-only loading aria-label=\\"저장 중\\" />\\n  </div>\\n  <Button variant=\\"filled\\" color=\\"primary\\" block loading label=\\"전체 너비 로딩\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" disabled label="Primary" />
      <Button variant="filled" color="default" disabled label="Default" />
      <Button variant="outline" color="primary" disabled label="Outline" />
      <Button variant="ghost" disabled label="Ghost" />
      <Button variant="text" color="primary" disabled label="Text" />
      <Button variant="filled" color="danger" disabled label="Danger" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
      <Button variant="filled" color="default" aria-disabled label="is-disabled" />
      <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" loading label="저장 중" />
      <Button variant="filled" color="default" loading label="처리 중" />
      <Button variant="outline" color="primary" loading label="업로드 중" />
      <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
    </div>
    <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />\`
  })
}`,...(ct=(it=v.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var pt,dt,st;C.parameters={...C.parameters,docs:{...(pt=C.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  name: "버튼 그룹",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_group btn_group-fit btn_group-align-start\\" role=\\"group\\" aria-label=\\"가로 버튼 그룹 small 좌측\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" size=\\"sm\\" label=\\"Left\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" size=\\"sm\\" label=\\"Middle\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" size=\\"sm\\" label=\\"Right\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-fit btn_group-align-start\\" role=\\"group\\" aria-label=\\"가로 버튼 그룹 medium 좌측\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Left\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Middle\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Right\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-fit btn_group-align-start\\" role=\\"group\\" aria-label=\\"가로 버튼 그룹 large 좌측\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" size=\\"lg\\" label=\\"Left\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" size=\\"lg\\" label=\\"Middle\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" size=\\"lg\\" label=\\"Right\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-fit btn_group-align-center\\" role=\\"group\\" aria-label=\\"가로 버튼 그룹 medium 가운데\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Left\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Middle\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Right\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-fit btn_group-align-end\\" role=\\"group\\" aria-label=\\"가로 버튼 그룹 medium 우측\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Left\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Middle\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Right\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-block\\" role=\\"group\\" aria-label=\\"가로 버튼 그룹 전체 너비\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Left\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Middle\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"Right\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-vertical btn_group-fit btn_group-align-start\\" role=\\"group\\" aria-label=\\"세로 버튼 그룹 고정 너비 좌측\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"상단\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"중간\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"하단\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-vertical btn_group-fit btn_group-align-center\\" role=\\"group\\" aria-label=\\"세로 버튼 그룹 고정 너비 가운데\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"상단\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"중간\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"하단\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-vertical btn_group-fit btn_group-align-end\\" role=\\"group\\" aria-label=\\"세로 버튼 그룹 고정 너비 우측\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"상단\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"중간\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"하단\\" />\\n  </div>\\n  <div class=\\"btn_group btn_group-vertical btn_group-block\\" role=\\"group\\" aria-label=\\"세로 버튼 그룹 전체 너비\\">\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"상단\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"중간\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" label=\\"하단\\" />\\n  </div>\\n  <div class=\\"btn_stack\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" block label=\\"로그인\\" />\\n    <Button variant=\\"filled\\" color=\\"default\\" block label=\\"회원가입\\" />\\n  </div>\\n  <div class=\\"btn_stack\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" block label=\\"결제하기\\" />\\n    <Button variant=\\"text\\" color=\\"primary\\" label=\\"쿠폰 적용\\" />\\n  </div>\\n  <div class=\\"btn_stack\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" block label=\\"다운로드\\">\\n      <template #icon-before>\\n        <Icon name=\\"download\\" />\\n      </template>\\n    </Button>\\n    <p class=\\"btn_stack-text\\">최신 버전 v2.0 · <a href=\\"#\\">릴리스 노트</a>\\n    </p>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
      <Button variant="filled" color="default" size="sm" label="Left" />
      <Button variant="filled" color="default" size="sm" label="Middle" />
      <Button variant="filled" color="default" size="sm" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
      <Button variant="filled" color="default" size="lg" label="Left" />
      <Button variant="filled" color="default" size="lg" label="Middle" />
      <Button variant="filled" color="default" size="lg" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="로그인" />
      <Button variant="filled" color="default" block label="회원가입" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="결제하기" />
      <Button variant="text" color="primary" label="쿠폰 적용" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <p class="btn_stack-text">최신 버전 v2.0 · <a href="#">릴리스 노트</a></p>
    </div>\`
  })
}`,...(st=(dt=C.parameters)==null?void 0:dt.docs)==null?void 0:st.source}}};var mt,bt,Bt;f.parameters={...f.parameters,docs:{...(mt=f.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: "루트 태그",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tag prop으로 button · a · div를 선택합니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex=0을 자동 부여합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"btn_row btn_row-wrap\\">\\n    <Button variant=\\"filled\\" color=\\"primary\\" label=\\"button\\" />\\n    <Button tag=\\"a\\" href=\\"/getting-started\\" variant=\\"outline\\" color=\\"primary\\" label=\\"a + href\\" />\\n    <Button tag=\\"div\\" variant=\\"ghost\\" label=\\"div → role=button\\" />\\n    <Button tag=\\"a\\" role=\\"link\\" variant=\\"text\\" color=\\"primary\\" label=\\"a, role=link\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Button,
      Icon
    },
    template: \`<div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="button" />
      <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
      <Button tag="div" variant="ghost" label="div → role=button" />
      <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
    </div>\`
  })
}`,...(Bt=(bt=f.parameters)==null?void 0:bt.docs)==null?void 0:Bt.source}}};const Pt=["Playground","Basic","TypeSelect","TypeText","TypeIconText","TypeIconTextVertical","TypeIconTextVerticalEqual","TypeTextIcon","TypeIconOnly","TypeIconOnlySize","Variant","Size","ShapeRound","Width","State","Group","Tag"];export{a as Basic,C as Group,e as Playground,b as ShapeRound,m as Size,v as State,f as Tag,p as TypeIconOnly,d as TypeIconOnlySize,r as TypeIconText,u as TypeIconTextVertical,i as TypeIconTextVerticalEqual,l as TypeSelect,o as TypeText,c as TypeTextIcon,s as Variant,B as Width,Pt as __namedExportsOrder,St as default};
