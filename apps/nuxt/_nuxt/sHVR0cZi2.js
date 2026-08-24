import{L as ee,Y as e,b as t,d as n,i as r,m as i,st as a,y as o}from"./CCnt5OSV.js";import{l as s,t as c}from"./DkmWXf_S.js";import{t as l}from"./D5AUKneU.js";import{t as u}from"./gHQDdAlU.js";import{t as d}from"./DD3RWXAt.js";import{s as f,t as p}from"./D6IbhUhQ.js";var m=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],h=[{name:`variant`,type:`'filled' | 'outline' | 'ghost' | 'text' | 'select'`,default:`filled`,description:`버튼 스킨. select는 셀렉트 박스형 트리거`},{name:`color`,type:`'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'`,default:`primary`,description:`색상 변형. filled는 default·primary·success·warning·danger, text는 primary·muted·success·warning·danger 지원`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`버튼 크기`},{name:`label`,type:`string`,default:`—`,description:`버튼 텍스트. default 슬롯으로 대체 가능`},{name:`round`,type:`boolean`,default:`false`,description:`pill(캡슐) 형태 모서리`},{name:`vertical`,type:`boolean`,default:`false`,description:`아이콘 위 · 텍스트 아래 세로 배치`},{name:`icon-only`,type:`boolean`,default:`false`,description:`아이콘만 표시. aria-label 필수`},{name:`block`,type:`boolean`,default:`false`,description:`루트 버튼을 부모 너비 100%로 확장`},{name:`grow`,type:`boolean | '2'`,default:`false`,description:`flex 비율 분배. 2는 2배 너비`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비 유지`},{name:`disabled`,type:`boolean`,default:`false`,description:`button은 HTML disabled, a·div는 aria-disabled와 상호작용 차단 적용`},{name:`aria-disabled`,type:`boolean`,default:`false`,description:`Tab 순서에서 제외하고 is-disabled·aria-disabled·상호작용 차단 적용`},{name:`loading`,type:`boolean`,default:`false`,description:`스피너와 aria-busy를 표시하고 중복 상호작용 차단`},{name:`open`,type:`boolean`,default:`false`,description:`셀렉트 트리거 열림 상태`},{name:`error`,type:`boolean`,default:`false`,description:`셀렉트 트리거 오류 상태`},{name:`placeholder`,type:`boolean`,default:`false`,description:`셀렉트 미선택 placeholder 스타일`},{name:`select-text`,type:`boolean`,default:`false`,description:`배경·테두리 없는 셀렉트 텍스트 형태`},{name:`select-caret`,type:`boolean`,default:`false`,description:`select 이외의 스킨에도 드롭다운 캐럿 표시`},{name:`type`,type:`'button' | 'submit' | 'reset'`,default:`button`,description:`button 요소 type 속성 (tag="button"일 때만)`},{name:`tag`,type:`'button' | 'a' | 'div'`,default:`button`,description:`루트 HTML 태그. div·href 없는 a는 role과 tabindex="0" 자동 적용`},{name:`href`,type:`string`,default:`—`,description:`tag="a"일 때 href. 있으면 네이티브 링크, 없으면 role과 tabindex 자동 적용`},{name:`role`,type:`'button' | 'link'`,default:`—`,description:`tag="a"이고 href가 없을 때 의미 지정. 필요한 tabindex는 자동 적용`},{name:`tabindex`,type:`number`,default:`—`,description:`Tab 순서 수동 지정. div·href 없는 a는 기본 0, 비활성 -1`},{name:`aria-label`,type:`string`,default:`—`,description:`접근성 라벨 (icon-only 시 필수)`},{name:`haspopup`,type:`boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`,default:`—`,description:`aria-haspopup (셀렉트·드롭다운 트리거)`},{name:`expanded`,type:`boolean`,default:`—`,description:`aria-expanded (셀렉트·팝오버 트리거)`},{name:`invalid`,type:`boolean`,default:`false`,description:`aria-invalid (폼 오류)`},f],g=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],_=[{name:`default`,description:`버튼 텍스트 (label prop 대체)`},{name:`icon-before`,description:`텍스트 앞 아이콘`},{name:`icon-after`,description:`텍스트 뒤 아이콘`}],v=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],y=[{name:`btn`,description:`루트 구조 클래스`},{name:`btn_filled`,description:`배경 채움 스킨`},{name:`btn_outline`,description:`테두리 스킨`},{name:`btn_ghost`,description:`투명 배경 스킨`},{name:`btn_text`,description:`텍스트만 스킨`},{name:`btn_select`,description:`셀렉트 박스형 트리거`},{name:`btn_select-text`,description:`텍스트형 셀렉트 트리거`},{name:`btn_sm · btn_lg`,description:`크기 변형`},{name:`btn_round`,description:`pill(캡슐) 모서리`},{name:`btn_vertical`,description:`아이콘 위 · 텍스트 아래`},{name:`btn_icon-only`,description:`아이콘만`},{name:`btn_block · btn_grow · btn_fit`,description:`너비 레이아웃`},{name:`icon · btn_label · btn_spinner`,description:`내부 파트`},{name:`btn_row · btn_group · btn_stack`,description:`버튼 묶음 컨테이너`},{name:`is-disabled · is-loading · is-open · is-error`,description:`상태 클래스`},{name:`color_primary · color_danger …`,description:`색상 유틸 (스킨과 조합)`},...p],b=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],x=[{name:`--btn-padding-y · --btn-padding-x · --btn-font-size`,default:`0.5rem · 1rem · var(--text-size-base)`,description:`기본(md) 패딩·타이포`},{name:`--btn-padding-y-sm · --btn-padding-x-sm · --btn-font-size-sm`,default:`0.3rem · 0.75rem · var(--text-size-sm)`,description:`sm 크기`},{name:`--btn-padding-y-lg · --btn-padding-x-lg · --btn-font-size-lg`,default:`0.65rem · 1.25rem · var(--text-size-lg)`,description:`lg 크기`},{name:`--btn-font-weight · --btn-font-weight-normal · --btn-line-height`,default:`600 · 400 · 1.4`,description:`타이포 두께·줄높이`},{name:`--btn-border-width · --btn-gap`,default:`1px · var(--space-sm)`,description:`테두리·내부 간격`},{name:`--btn-icon-size · --btn-icon-size-md · --btn-icon-size-lg · --btn-icon-size-xl`,default:`1em · 1.125em · 1.25em · 1.375em`,description:`아이콘 크기`},{name:`--btn-icon-only-padding · --btn-icon-only-padding-sm · --btn-icon-only-padding-lg`,default:`0.5rem · 0.35rem · 0.65rem`,description:`아이콘만 버튼 패딩`},{name:`--btn-vertical-min-width · --btn-vertical-min-width-sm · --btn-vertical-min-width-lg`,default:`4.5rem · 3.75rem · 5.25rem`,description:`세로 배치 최소 너비`},{name:`--btn-vertical-padding-y · --btn-vertical-padding-x`,default:`0.65rem · 0.75rem`,description:`세로 배치 패딩(md)`},{name:`--btn-vertical-padding-y-sm · --btn-vertical-padding-x-sm`,default:`0.5rem · 0.6rem`,description:`세로 배치 패딩(sm)`},{name:`--btn-vertical-padding-y-lg · --btn-vertical-padding-x-lg`,default:`0.85rem · 0.9rem`,description:`세로 배치 패딩(lg)`},{name:`--btn-vertical-label-size · --btn-vertical-label-size-sm · --btn-vertical-label-size-lg`,default:`var(--text-size-sm) · var(--text-size-xs) · var(--text-size-base)`,description:`세로 배치 라벨 크기`},{name:`--btn-vertical-label-weight · --btn-vertical-label-line-height`,default:`500 · 1.25`,description:`세로 배치 라벨 두께·줄높이`},{name:`--btn-select-min-width · --btn-select-max-width`,default:`10rem · 320px`,description:`셀렉트 트리거 너비`},{name:`--btn-select-padding-right · --btn-select-padding-right-sm · --btn-select-padding-right-lg`,default:`0.65rem · 0.5rem · 0.85rem`,description:`셀렉트 캐럿 여백`},{name:`--btn-select-text-padding-x · --btn-select-text-padding-right`,default:`0.5rem · 0.35rem`,description:`텍스트형 셀렉트 패딩`},{name:`--btn-select-text-padding-x-sm · --btn-select-text-padding-right-sm`,default:`0.35rem · 0.25rem`,description:`텍스트형 셀렉트 패딩(sm)`},{name:`--btn-select-text-padding-x-lg · --btn-select-text-padding-right-lg`,default:`0.65rem · 0.45rem`,description:`텍스트형 셀렉트 패딩(lg)`},{name:`--btn-spinner-size · --btn-spinner-border · --btn-spinner-duration`,default:`1em · 2px · 0.6s`,description:`로딩 스피너`},{name:`--btn-stack-text-size · --btn-stack-text-line-height`,default:`var(--text-size-sm) · 1.5`,description:`스택 하단 안내 텍스트`},{name:`--btn-group-overlap`,default:`-1px`,description:`그룹 버튼 테두리 겹침`}],S={class:`btn_row btn_row-wrap`},C={class:`btn_row btn_row-wrap`},w={class:`btn_row btn_row-wrap`},T={class:`btn_row btn_row-wrap`},E={class:`btn_row btn_row-wrap`},D={class:`btn_row btn_row-wrap`},O={class:`btn_row btn_row-wrap`},k={class:`btn_row btn_row-wrap`},A={class:`btn_row btn_row-wrap`},j={class:`btn_row btn_row-wrap`},M={class:`btn_row btn_row-wrap`},N={class:`btn_row btn_row-wrap`},P={class:`btn_row btn_row-wrap`},F={class:`btn_row btn_row-wrap`},I={class:`btn_row btn_row-wrap`},L={class:`btn_row btn_row-wrap`},R={class:`btn_row-equal`,role:`toolbar`,"aria-label":`하단 탭 바`},z={class:`btn_row btn_row-wrap`},B={class:`btn_row btn_row-wrap`},V={class:`btn_row btn_row-wrap`},H={class:`btn_row btn_row-wrap`},U={class:`btn_row btn_row-wrap`},W={class:`btn_row btn_row-wrap`},G={class:`btn_row btn_row-wrap`},K={class:`btn_group btn_group-round btn_group-fit`,role:`group`,"aria-label":`라운드 버튼 그룹`},q={class:`btn_row-equal`},J={class:`btn_row`},Y={class:`btn_row`},X={class:`btn_row btn_row-start`},Z={class:`btn_row btn_row-end`},Q={class:`btn_row`},$={class:`btn_row`},te={class:`btn_row`},ne={class:`btn_row btn_row-wrap`},re={class:`btn_row btn_row-wrap`},ie={class:`btn_row btn_row-wrap`},ae={class:`btn_group btn_group-fit btn_group-align-start`,role:`group`,"aria-label":`가로 버튼 그룹 small 좌측`},oe={class:`btn_group btn_group-fit btn_group-align-start`,role:`group`,"aria-label":`가로 버튼 그룹 medium 좌측`},se={class:`btn_group btn_group-fit btn_group-align-start`,role:`group`,"aria-label":`가로 버튼 그룹 large 좌측`},ce={class:`btn_group btn_group-fit btn_group-align-center`,role:`group`,"aria-label":`가로 버튼 그룹 medium 가운데`},le={class:`btn_group btn_group-fit btn_group-align-end`,role:`group`,"aria-label":`가로 버튼 그룹 medium 우측`},ue={class:`btn_group btn_group-block`,role:`group`,"aria-label":`가로 버튼 그룹 전체 너비`},de={class:`btn_group btn_group-vertical btn_group-fit btn_group-align-start`,role:`group`,"aria-label":`세로 버튼 그룹 고정 너비 좌측`},fe={class:`btn_group btn_group-vertical btn_group-fit btn_group-align-center`,role:`group`,"aria-label":`세로 버튼 그룹 고정 너비 가운데`},pe={class:`btn_group btn_group-vertical btn_group-fit btn_group-align-end`,role:`group`,"aria-label":`세로 버튼 그룹 고정 너비 우측`},me={class:`btn_group btn_group-vertical btn_group-block`,role:`group`,"aria-label":`세로 버튼 그룹 전체 너비`},he={class:`btn_stack`},ge={class:`btn_stack`},_e={class:`btn_stack`},ve={class:`btn_row btn_row-wrap`},ye={title:`Button | HTML Components`,activeNav:`button`,pageTitle:`Button`},be={__name:`button`,setup(f){return(f,p)=>(ee(),i(r,null,[p[2]||=n(`div`,{class:`page_intro`},[n(`h1`,null,`Button`),n(`p`,{class:`lead`},` 클릭·키보드 입력으로 사용자 액션이나 링크 이동을 실행하는 Vue 컴포넌트입니다. 스킨·색상·크기·아이콘·상태를 props와 유틸리티 클래스로 조합합니다. `)],-1),t(d,{"heading-id":`basic-heading`,title:`기본 유형`,description:`btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다.`,stack:``,code:`<template>
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
    <Button variant="text" color="muted" label="Text Muted" />
    <Button variant="text" color="danger" label="Text Danger" />
  </div>
</template>`},{default:e(()=>[n(`div`,S,[t(u,{variant:`filled`,color:`primary`,label:`Filled Primary`}),t(u,{variant:`filled`,color:`default`,label:`Filled Default`}),t(u,{variant:`outline`,color:`primary`,label:`Outline`}),t(u,{variant:`ghost`,label:`Ghost`}),t(u,{variant:`text`,color:`primary`,label:`Text`})]),n(`div`,C,[t(u,{variant:`filled`,color:`success`,label:`Success`}),t(u,{variant:`filled`,color:`warning`,label:`Warning`}),t(u,{variant:`filled`,color:`danger`,label:`Danger`}),t(u,{variant:`text`,color:`muted`,label:`Text Muted`}),t(u,{variant:`text`,color:`danger`,label:`Text Danger`})])]),_:1}),t(d,{"heading-id":`type-select-heading`,title:`셀렉트 박스형`,description:`btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 aria-haspopup과 aria-expanded를 지정합니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,w,[t(u,{variant:`select`,label:`서울특별시`,haspopup:`listbox`}),t(u,{variant:`select`,placeholder:``,label:`옵션을 선택하세요`,haspopup:`listbox`}),t(u,{variant:`select`,open:``,label:`카테고리`,haspopup:`listbox`})]),n(`div`,T,[t(u,{variant:`select`,size:`sm`,label:`Small`,haspopup:`listbox`}),t(u,{variant:`select`,label:`Medium`,haspopup:`listbox`}),t(u,{variant:`select`,size:`lg`,label:`Large`,haspopup:`listbox`}),t(u,{variant:`select`,disabled:``,label:`비활성`,haspopup:`listbox`}),t(u,{variant:`select`,error:``,invalid:``,label:`필수 선택`,haspopup:`listbox`})]),t(u,{variant:`select`,block:``,label:`전체 너비 셀렉트 트리거`,haspopup:`listbox`}),n(`div`,E,[t(u,{variant:`select`,"select-text":``,label:`최신순`,haspopup:`listbox`}),t(u,{variant:`select`,"select-text":``,placeholder:``,label:`정렬 기준`,haspopup:`listbox`}),t(u,{variant:`select`,"select-text":``,open:``,label:`필터`,haspopup:`listbox`}),t(u,{variant:`select`,"select-text":``,size:`sm`,label:`Small`,haspopup:`listbox`}),t(u,{variant:`select`,"select-text":``,disabled:``,label:`비활성`,haspopup:`listbox`})])]),_:1}),t(d,{"heading-id":`type-text-heading`,title:`텍스트 버튼`,description:`btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,D,[t(u,{variant:`text`,color:`primary`,label:`Primary`}),t(u,{variant:`text`,color:`muted`,label:`Muted`}),t(u,{variant:`text`,color:`danger`,label:`Danger`}),t(u,{variant:`text`,color:`success`,label:`Success`}),t(u,{variant:`text`,color:`warning`,label:`Warning`})]),n(`div`,O,[t(u,{variant:`text`,color:`danger`,label:`삭제`},{"icon-before":e(()=>[t(l,{name:`trash`})]),_:1}),t(u,{variant:`text`,color:`success`,label:`완료`},{"icon-before":e(()=>[t(l,{name:`check-circle`})]),_:1}),t(u,{variant:`text`,color:`warning`,label:`주의`},{"icon-after":e(()=>[t(l,{name:`alert-triangle`})]),_:1}),t(u,{variant:`text`,color:`muted`,label:`자세히`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1})]),n(`div`,k,[t(u,{variant:`text`,color:`primary`,label:`더 보기`}),t(u,{variant:`text`,color:`primary`,label:`링크 복사`}),t(u,{variant:`text`,color:`primary`,label:`취소`}),t(u,{variant:`text`,color:`primary`,label:`건너뛰기`})]),n(`div`,A,[t(u,{variant:`text`,color:`primary`,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`다운로드`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`링크 열기`},{"icon-before":e(()=>[t(l,{name:`external-link`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`설정`},{"icon-before":e(()=>[t(l,{name:`settings`})]),_:1})]),n(`div`,j,[t(u,{variant:`text`,color:`primary`,label:`다음`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`전체 보기`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`삭제`},{"icon-after":e(()=>[t(l,{name:`trash`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`새로고침`},{"icon-after":e(()=>[t(l,{name:`refresh`})]),_:1})]),n(`div`,M,[t(u,{variant:`text`,color:`primary`,size:`sm`,label:`Small`}),t(u,{variant:`text`,color:`primary`,label:`Medium`}),t(u,{variant:`text`,color:`primary`,size:`lg`,label:`Large`}),t(u,{variant:`text`,color:`primary`,size:`sm`,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`text`,color:`primary`,size:`lg`,label:`다음`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1})]),n(`div`,N,[t(u,{variant:`text`,color:`primary`,"icon-only":``,"aria-label":`검색`},{"icon-before":e(()=>[t(l,{name:`search`})]),_:1}),t(u,{variant:`text`,color:`primary`,"icon-only":``,"aria-label":`편집`},{"icon-before":e(()=>[t(l,{name:`edit`})]),_:1}),t(u,{variant:`text`,color:`primary`,"icon-only":``,size:`sm`,"aria-label":`닫기`},{"icon-before":e(()=>[t(l,{name:`close`})]),_:1}),t(u,{variant:`text`,color:`primary`,disabled:``,label:`비활성`}),t(u,{variant:`text`,color:`primary`,disabled:``,label:`비활성`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1}),t(u,{variant:`text`,color:`primary`,"aria-disabled":``,label:`is-disabled`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1})]),t(u,{variant:`text`,color:`primary`,block:``,label:`전체 너비 텍스트 버튼`})]),_:1}),t(d,{"heading-id":`type-icon-text-heading`,title:`아이콘 + 텍스트`,description:`아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다.`,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,P,[t(u,{variant:`filled`,color:`primary`,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`default`,label:`다운로드`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1}),t(u,{variant:`outline`,color:`primary`,label:`새 항목`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1})])]),_:1}),t(d,{"heading-id":`type-icon-text-vertical-heading`,title:`아이콘 + 텍스트 (세로)`,description:`btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,F,[t(u,{variant:`filled`,color:`primary`,vertical:``,label:`홈`},{"icon-before":e(()=>[t(l,{name:`home`})]),_:1}),t(u,{variant:`filled`,color:`default`,vertical:``,label:`검색`},{"icon-before":e(()=>[t(l,{name:`search`})]),_:1}),t(u,{variant:`ghost`,vertical:``,label:`마이`},{"icon-before":e(()=>[t(l,{name:`user`})]),_:1}),t(u,{variant:`text`,color:`primary`,vertical:``,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`outline`,color:`primary`,vertical:``,label:`다운로드`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1})]),n(`div`,I,[t(u,{variant:`filled`,color:`primary`,vertical:``,size:`sm`,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`primary`,vertical:``,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`primary`,vertical:``,size:`lg`,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1})]),n(`div`,L,[t(u,{variant:`filled`,color:`default`,vertical:``,round:``,label:`가이드`},{"icon-before":e(()=>[t(l,{name:`book`})]),_:1}),t(u,{variant:`filled`,color:`primary`,vertical:``,round:``,label:`즐겨찾기`},{"icon-before":e(()=>[t(l,{name:`star`})]),_:1}),t(u,{variant:`ghost`,vertical:``,disabled:``,label:`삭제`},{"icon-before":e(()=>[t(l,{name:`trash`})]),_:1}),t(u,{variant:`filled`,color:`primary`,vertical:``,loading:``,label:`저장 중`})])]),_:1}),t(d,{"heading-id":`type-icon-text-vertical-equal-heading`,title:`아이콘 + 텍스트 (세로) · 균등 배분`,description:`btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,R,[t(u,{variant:`text`,color:`primary`,vertical:``,label:`홈`},{"icon-before":e(()=>[t(l,{name:`home`})]),_:1}),t(u,{variant:`text`,color:`primary`,vertical:``,label:`카테고리`},{"icon-before":e(()=>[t(l,{name:`grid`})]),_:1}),t(u,{variant:`filled`,color:`primary`,vertical:``,label:`장바구니`},{"icon-before":e(()=>[t(l,{name:`cart`})]),_:1}),t(u,{variant:`text`,color:`primary`,vertical:``,label:`마이`},{"icon-before":e(()=>[t(l,{name:`user`})]),_:1})])]),_:1}),t(d,{"heading-id":`type-text-icon-heading`,title:`텍스트 + 아이콘`,description:`텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다.`,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,z,[t(u,{variant:`filled`,color:`primary`,label:`다음`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1}),t(u,{variant:`filled`,color:`default`,label:`자세히 보기`},{"icon-after":e(()=>[t(l,{name:`external-link`})]),_:1}),t(u,{variant:`text`,color:`primary`,label:`링크 이동`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1})])]),_:1}),t(d,{"heading-id":`type-icon-only-heading`,title:`아이콘 버튼`,description:`텍스트 없이 아이콘만 표시합니다. btn_icon-only와 함께 사용하며, 접근성을 위해 aria-label을 반드시 지정합니다.`,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,B,[t(u,{variant:`filled`,color:`primary`,"icon-only":``,"aria-label":`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`default`,"icon-only":``,"aria-label":`설정`},{"icon-before":e(()=>[t(l,{name:`settings`})]),_:1}),t(u,{variant:`ghost`,"icon-only":``,"aria-label":`검색`},{"icon-before":e(()=>[t(l,{name:`search`})]),_:1}),t(u,{variant:`outline`,color:`primary`,"icon-only":``,"aria-label":`편집`},{"icon-before":e(()=>[t(l,{name:`edit`})]),_:1}),t(u,{variant:`filled`,color:`danger`,"icon-only":``,"aria-label":`삭제`},{"icon-before":e(()=>[t(l,{name:`trash`})]),_:1}),t(u,{variant:`filled`,color:`primary`,"icon-only":``,disabled:``,"aria-label":`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1})])]),_:1}),t(d,{"heading-id":`type-icon-only-size-heading`,title:`아이콘 버튼 크기`,description:`btn_sm, medium, btn_lg 세 가지 크기를 지원합니다.`,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,V,[t(u,{variant:`filled`,color:`primary`,"icon-only":``,size:`sm`,"aria-label":`추가 (small)`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`primary`,"icon-only":``,"aria-label":`추가 (medium)`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`primary`,"icon-only":``,size:`lg`,"aria-label":`추가 (large)`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`default`,"icon-only":``,size:`sm`,"aria-label":`다운로드 (small)`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1}),t(u,{variant:`filled`,color:`default`,"icon-only":``,"aria-label":`다운로드 (medium)`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1}),t(u,{variant:`filled`,color:`default`,"icon-only":``,size:`lg`,"aria-label":`다운로드 (large)`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1})])]),_:1}),t(d,{"heading-id":`variant-heading`,title:`색상 변형`,description:`상황에 맞는 색상 변형을 사용합니다.`,code:`<template>
  <Button variant="filled" color="success" label="Success" />
  <Button variant="filled" color="danger" label="Danger" />
  <Button variant="filled" color="warning" label="Warning" />
  <Button variant="outline" color="primary" label="Outline" />
</template>`},{default:e(()=>[t(u,{variant:`filled`,color:`success`,label:`Success`}),t(u,{variant:`filled`,color:`danger`,label:`Danger`}),t(u,{variant:`filled`,color:`warning`,label:`Warning`}),t(u,{variant:`outline`,color:`primary`,label:`Outline`})]),_:1}),t(d,{"heading-id":`size-heading`,title:`크기`,description:`small, medium, large 세 가지 크기를 지원합니다.`,code:`<template>
  <Button variant="filled" color="primary" size="sm" label="Small" />
  <Button variant="filled" color="primary" label="Medium" />
  <Button variant="filled" color="primary" size="lg" label="Large" />
</template>`},{default:e(()=>[t(u,{variant:`filled`,color:`primary`,size:`sm`,label:`Small`}),t(u,{variant:`filled`,color:`primary`,label:`Medium`}),t(u,{variant:`filled`,color:`primary`,size:`lg`,label:`Large`})]),_:1}),t(d,{"heading-id":`shape-round-heading`,title:`라운드`,description:`btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,H,[t(u,{variant:`filled`,color:`primary`,round:``,label:`Primary`}),t(u,{variant:`filled`,color:`default`,round:``,label:`Default`}),t(u,{variant:`ghost`,round:``,label:`Ghost`}),t(u,{variant:`outline`,color:`primary`,round:``,label:`Outline`}),t(u,{variant:`filled`,color:`success`,round:``,label:`Success`}),t(u,{variant:`filled`,color:`danger`,round:``,label:`Danger`})]),n(`div`,U,[t(u,{variant:`filled`,color:`primary`,round:``,size:`sm`,label:`Small`}),t(u,{variant:`filled`,color:`primary`,round:``,label:`Medium`}),t(u,{variant:`filled`,color:`primary`,round:``,size:`lg`,label:`Large`})]),n(`div`,W,[t(u,{variant:`filled`,color:`primary`,round:``,label:`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`default`,round:``,label:`다음`},{"icon-after":e(()=>[t(l,{name:`chevron-right`})]),_:1}),t(u,{variant:`text`,color:`primary`,round:``,label:`더 보기`})]),n(`div`,G,[t(u,{variant:`filled`,color:`primary`,round:``,"icon-only":``,"aria-label":`추가`},{"icon-before":e(()=>[t(l,{name:`plus`})]),_:1}),t(u,{variant:`filled`,color:`default`,round:``,"icon-only":``,"aria-label":`설정`},{"icon-before":e(()=>[t(l,{name:`settings`})]),_:1}),t(u,{variant:`outline`,color:`primary`,round:``,"icon-only":``,size:`sm`,"aria-label":`검색`},{"icon-before":e(()=>[t(l,{name:`search`})]),_:1}),t(u,{variant:`filled`,color:`danger`,round:``,"icon-only":``,size:`lg`,"aria-label":`삭제`},{"icon-before":e(()=>[t(l,{name:`trash`})]),_:1})]),n(`div`,K,[t(u,{variant:`filled`,color:`default`,label:`일`}),t(u,{variant:`filled`,color:`default`,label:`주`}),t(u,{variant:`filled`,color:`primary`,label:`월`}),t(u,{variant:`filled`,color:`default`,label:`년`})])]),_:1}),t(d,{"heading-id":`width-heading`,title:`너비`,description:`부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[t(u,{variant:`filled`,color:`primary`,block:``,label:`전체 너비 버튼`}),n(`div`,q,[t(u,{variant:`filled`,color:`default`,label:`취소`}),t(u,{variant:`filled`,color:`primary`,label:`확인`})]),n(`div`,J,[t(u,{variant:`filled`,color:`default`,grow:``,label:`취소`}),t(u,{variant:`filled`,color:`primary`,grow:``,label:`확인`})]),n(`div`,Y,[t(u,{variant:`filled`,color:`default`,grow:``,label:`옵션 A`}),t(u,{variant:`filled`,color:`default`,grow:``,label:`옵션 B`}),t(u,{variant:`filled`,color:`primary`,grow:``,label:`옵션 C`})]),n(`div`,X,[t(u,{variant:`ghost`,fit:``,label:`뒤로`}),t(u,{variant:`filled`,color:`default`,fit:``,label:`취소`}),t(u,{variant:`filled`,color:`primary`,fit:``,label:`저장`})]),n(`div`,Z,[t(u,{variant:`ghost`,fit:``,label:`뒤로`}),t(u,{variant:`filled`,color:`default`,fit:``,label:`취소`}),t(u,{variant:`filled`,color:`primary`,fit:``,label:`저장`})]),n(`div`,Q,[t(u,{variant:`ghost`,fit:``,label:`뒤로`}),t(u,{variant:`filled`,color:`default`,grow:``,label:`임시 저장`}),t(u,{variant:`filled`,color:`primary`,grow:``,label:`제출`})]),n(`div`,$,[t(u,{variant:`filled`,color:`default`,grow:``,label:`본문 영역`}),t(u,{variant:`filled`,color:`primary`,fit:``,label:`확인`})]),n(`div`,te,[t(u,{variant:`filled`,color:`default`,grow:`2`,label:`2배 너비`}),t(u,{variant:`filled`,color:`primary`,grow:``,label:`1배 너비`})]),t(u,{variant:`filled`,color:`primary`,block:``,label:`전체 너비 다운로드`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1})]),_:1}),t(d,{"heading-id":`state-heading`,title:`상태`,description:`disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,ne,[t(u,{variant:`filled`,color:`primary`,disabled:``,label:`Primary`}),t(u,{variant:`filled`,color:`default`,disabled:``,label:`Default`}),t(u,{variant:`outline`,color:`primary`,disabled:``,label:`Outline`}),t(u,{variant:`ghost`,disabled:``,label:`Ghost`}),t(u,{variant:`text`,color:`primary`,disabled:``,label:`Text`}),t(u,{variant:`filled`,color:`danger`,disabled:``,label:`Danger`})]),n(`div`,re,[t(u,{variant:`filled`,color:`primary`,"aria-disabled":``,label:`is-disabled`}),t(u,{variant:`filled`,color:`default`,"aria-disabled":``,label:`is-disabled`}),t(u,{variant:`outline`,color:`primary`,"aria-disabled":``,label:`is-disabled`})]),n(`div`,ie,[t(u,{variant:`filled`,color:`primary`,loading:``,label:`저장 중`}),t(u,{variant:`filled`,color:`default`,loading:``,label:`처리 중`}),t(u,{variant:`outline`,color:`primary`,loading:``,label:`업로드 중`}),t(u,{variant:`filled`,color:`primary`,"icon-only":``,loading:``,"aria-label":`저장 중`})]),t(u,{variant:`filled`,color:`primary`,block:``,loading:``,label:`전체 너비 로딩`})]),_:1}),t(d,{"heading-id":`group-heading`,title:`버튼 그룹`,description:`가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다.`,stack:``,code:`<template>
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
</template>`},{default:e(()=>[n(`div`,ae,[t(u,{variant:`filled`,color:`default`,size:`sm`,label:`Left`}),t(u,{variant:`filled`,color:`default`,size:`sm`,label:`Middle`}),t(u,{variant:`filled`,color:`default`,size:`sm`,label:`Right`})]),n(`div`,oe,[t(u,{variant:`filled`,color:`default`,label:`Left`}),t(u,{variant:`filled`,color:`default`,label:`Middle`}),t(u,{variant:`filled`,color:`default`,label:`Right`})]),n(`div`,se,[t(u,{variant:`filled`,color:`default`,size:`lg`,label:`Left`}),t(u,{variant:`filled`,color:`default`,size:`lg`,label:`Middle`}),t(u,{variant:`filled`,color:`default`,size:`lg`,label:`Right`})]),n(`div`,ce,[t(u,{variant:`filled`,color:`default`,label:`Left`}),t(u,{variant:`filled`,color:`default`,label:`Middle`}),t(u,{variant:`filled`,color:`default`,label:`Right`})]),n(`div`,le,[t(u,{variant:`filled`,color:`default`,label:`Left`}),t(u,{variant:`filled`,color:`default`,label:`Middle`}),t(u,{variant:`filled`,color:`default`,label:`Right`})]),n(`div`,ue,[t(u,{variant:`filled`,color:`default`,label:`Left`}),t(u,{variant:`filled`,color:`default`,label:`Middle`}),t(u,{variant:`filled`,color:`default`,label:`Right`})]),n(`div`,de,[t(u,{variant:`filled`,color:`default`,label:`상단`}),t(u,{variant:`filled`,color:`default`,label:`중간`}),t(u,{variant:`filled`,color:`default`,label:`하단`})]),n(`div`,fe,[t(u,{variant:`filled`,color:`default`,label:`상단`}),t(u,{variant:`filled`,color:`default`,label:`중간`}),t(u,{variant:`filled`,color:`default`,label:`하단`})]),n(`div`,pe,[t(u,{variant:`filled`,color:`default`,label:`상단`}),t(u,{variant:`filled`,color:`default`,label:`중간`}),t(u,{variant:`filled`,color:`default`,label:`하단`})]),n(`div`,me,[t(u,{variant:`filled`,color:`default`,label:`상단`}),t(u,{variant:`filled`,color:`default`,label:`중간`}),t(u,{variant:`filled`,color:`default`,label:`하단`})]),n(`div`,he,[t(u,{variant:`filled`,color:`primary`,block:``,label:`로그인`}),t(u,{variant:`filled`,color:`default`,block:``,label:`회원가입`})]),n(`div`,ge,[t(u,{variant:`filled`,color:`primary`,block:``,label:`결제하기`}),t(u,{variant:`text`,color:`primary`,label:`쿠폰 적용`})]),n(`div`,_e,[t(u,{variant:`filled`,color:`primary`,block:``,label:`다운로드`},{"icon-before":e(()=>[t(l,{name:`download`})]),_:1}),p[0]||=n(`p`,{class:`btn_stack-text`},[o(`최신 버전 v2.0 · `),n(`a`,{href:`#`},`릴리스 노트`)],-1)])]),_:1}),t(d,{"heading-id":`tag-heading`,title:`루트 태그`,description:`tag prop으로 button · a · div를 선택합니다. div와 href 없는 a에는 키보드 접근을 위해 role과 tabindex=0을 자동 적용합니다.`,stack:``,code:`<template>
  <div class="btn_row btn_row-wrap">
    <Button variant="filled" color="primary" label="button" />
    <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
    <Button tag="div" variant="ghost" label="div → role=button" />
    <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
  </div>
</template>`},{default:e(()=>[n(`div`,ve,[t(u,{variant:`filled`,color:`primary`,label:`button`}),t(u,{tag:`a`,href:`/getting-started`,variant:`outline`,color:`primary`,label:`a + href`}),t(u,{tag:`div`,variant:`ghost`,label:`div → role=button`}),t(u,{tag:`a`,role:`link`,variant:`text`,color:`primary`,label:`a, role=link`})])]),_:1}),t(s,{"heading-id":`api-props-heading`,title:`API · Props`},{default:e(()=>[t(c,{columns:a(m),rows:a(h),"code-column":`name`},null,8,[`columns`,`rows`]),p[1]||=n(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[o(` 선언되지 않은 HTML 속성·이벤트(`),n(`code`,{class:`typo_code`},`id`),o(`, `),n(`code`,{class:`typo_code`},`data-*`),o(`, `),n(`code`,{class:`typo_code`},`@click`),o(` 등)는 `),n(`code`,{class:`typo_code`},`tag`),o(`로 지정한 루트 요소에 그대로 전달됩니다. `)],-1)]),_:1}),t(s,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:e(()=>[t(c,{columns:a(g),rows:a(_),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),t(s,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:e(()=>[t(c,{columns:a(v),rows:a(y),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),t(s,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:e(()=>[t(c,{columns:a(b),rows:a(x),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{be as default,ye as docMeta};