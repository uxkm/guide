import{B as e,G as t,K as n,L as r,U as i,Y as a,b as o,d as s,i as c,k as l,m as u,nt as d,p as f,st as p,u as m,wt as h,xt as g,y as _}from"./CCnt5OSV.js";import{I as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{n as S,t as C}from"./D01l-9yr.js";import{t as w}from"./DD3RWXAt.js";import{r as T,t as E}from"./D6IbhUhQ.js";import{t as D}from"./AUxlN8ez2.js";function O(e={},t={},n={}){return v(`Tree`,e,t,n,{booleanProps:new Set([`bordered`,`lines`,`compact`,`multiselectable`]),slotContent:{default:`...`},selfClosing:!1})}function k(e={},t={},n={}){let r=[`default`,`prefix`,`icon`,`label`,`meta`].some(e=>{if(!t[e])return!1;try{return!!t[e]({})?.length}catch{return!0}});return v(`TreeNode`,e,t,n,{booleanProps:new Set([`ripple`,`expanded`,`selected`,`disabled`,`expandable`,`plusToggle`,`link`]),falseExplicitProps:new Set([`expanded`]),slotContent:{default:`...`,prefix:`...`,icon:`...`,label:`...`,meta:`...`},selfClosing:!r})}var A=[`aria-label`,`aria-multiselectable`],j=Object.assign({inheritAttrs:!1},{__name:`Tree`,props:{bordered:Boolean,lines:Boolean,compact:Boolean,ariaLabel:String,multiselectable:Boolean},setup(n){let a=n,o=t(),s=i(),c=d(null);x(O,a,o,c,s);let f=m(()=>{let e=[`tree`];return a.bordered&&e.push(`tree_bordered`),a.lines&&e.push(`tree_lines`),a.compact&&e.push(`tree_compact`),s.class&&e.push(s.class),e}),p=m(()=>{let{class:e,...t}=s;return t});return(t,i)=>(r(),u(`ul`,l({ref_key:`rootRef`,ref:c,class:f.value,role:`tree`,"aria-label":n.ariaLabel,"aria-multiselectable":n.multiselectable?`true`:void 0},p.value),[e(t.$slots,`default`)],16,A))}}),M=[`aria-expanded`,`aria-selected`,`aria-disabled`],N=[`aria-expanded`,`aria-label`,`disabled`],P={key:1,class:`tree_toggle tree_toggle_placeholder`,"aria-hidden":`true`},F={key:2,class:`tree_icon`,"aria-hidden":`true`},I=[`disabled`],L={class:`tree_label`},R={class:`tree_label`},z={key:5,class:`tree_meta`},B={key:0,class:`tree`,role:`group`},V=Object.assign({inheritAttrs:!1},{__name:`TreeNode`,props:{ripple:C,label:String,expanded:{type:Boolean,default:void 0},selected:Boolean,disabled:Boolean,expandable:Boolean,plusToggle:Boolean,toggleLabel:String,link:Boolean,meta:String},emits:[`update:expanded`],setup(a,{emit:o}){let c=a,{rippleAttrs:v,childRippleAttrs:y}=S(c,{mode:`container`}),b=t(),C=i(),w=d(null);x(k,c,b,w,C);let T=o,E=m(()=>!!b.default),D=m(()=>c.expandable||E.value),O=d(c.expanded!==!1);n(()=>c.expanded,e=>{e!==void 0&&(O.value=e!==!1)});function A(){c.disabled||(O.value=!O.value,T(`update:expanded`,O.value))}let j=m(()=>[`tree_item`,C.class].filter(Boolean)),V=m(()=>{let{class:e,...t}=C;return t}),H=m(()=>({...v.value,...V.value})),U=m(()=>{let e=[`tree_row`];return c.selected&&e.push(`is-selected`),c.disabled&&e.push(`is-disabled`),e}),W=m(()=>{let e=[`tree_toggle`];return c.plusToggle&&e.push(`tree_toggle-plus`),e});return(t,n)=>(r(),u(`li`,l({ref_key:`rootRef`,ref:w},H.value,{class:j.value,role:`treeitem`,"aria-expanded":D.value?O.value?`true`:`false`:void 0,"aria-selected":a.selected?`true`:void 0,"aria-disabled":a.disabled?`true`:void 0}),[s(`div`,{class:g(U.value)},[D.value?(r(),u(`button`,l({key:0},p(y),{type:`button`,class:W.value,"aria-expanded":O.value?`true`:`false`,"aria-label":a.toggleLabel,disabled:a.disabled||void 0,onClick:A}),null,16,N)):(r(),u(`span`,P)),e(t.$slots,`prefix`),t.$slots.icon?(r(),u(`span`,F,[e(t.$slots,`icon`)])):f(``,!0),a.link?(r(),u(`button`,l({key:3},p(y),{type:`button`,class:`tree_link`,disabled:a.disabled||void 0}),[e(t.$slots,`label`,{},()=>[s(`span`,L,h(a.label),1)])],16,I)):e(t.$slots,`label`,{},()=>[s(`span`,R,h(a.label),1)],void 0,4),a.meta||t.$slots.meta?(r(),u(`span`,z,[e(t.$slots,`meta`,{},()=>[_(h(a.meta),1)])])):f(``,!0)],2),E.value&&O.value?(r(),u(`ul`,B,[e(t.$slots,`default`)])):f(``,!0)],16,M))}}),H=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],U=[{name:`bordered`,type:`boolean`,default:`false`,description:`테두리 (tree_bordered)`},{name:`lines`,type:`boolean`,default:`false`,description:`연결선 (tree_lines)`},{name:`compact`,type:`boolean`,default:`false`,description:`좁은 행 높이 (tree_compact)`},{name:`aria-label`,type:`string`,default:`—`,description:`트리 접근성 라벨 (권장)`},{name:`multiselectable`,type:`boolean`,default:`false`,description:`다중 선택 aria-multiselectable`}],W=H,G=[{name:`label`,type:`string`,default:`—`,description:`노드 라벨 (tree_label)`},{name:`expanded`,type:`boolean`,default:`—`,description:`펼침 상태 (aria-expanded)`},{name:`selected`,type:`boolean`,default:`false`,description:`선택 상태 (is-selected · aria-selected)`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 상태 및 상호작용 차단 (is-disabled · aria-disabled)`},{name:`expandable`,type:`boolean`,default:`false`,description:`토글 버튼 강제 표시`},{name:`plus-toggle`,type:`boolean`,default:`false`,description:`+ / − 토글 (tree_toggle-plus)`},{name:`toggle-label`,type:`string`,default:`—`,description:`토글 버튼 aria-label`},{name:`link`,type:`boolean`,default:`false`,description:`클릭 가능 행 (tree_link)`},{name:`meta`,type:`string`,default:`—`,description:`우측 메타 (tree_meta)`},T],K=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],q=[{name:`default`,description:`TreeNode 자식`}],J=[{name:`prefix`,description:`토글 앞 체크박스 등`},{name:`icon`,description:`라벨 앞 아이콘 (tree_icon)`},{name:`label`,description:`라벨 텍스트 (label prop 대체)`},{name:`meta`,description:`우측 메타`},{name:`default`,description:`하위 TreeNode (중첩 tree)`}],Y=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],X=[{name:`tree`,description:`트리 루트·중첩 ul`},{name:`tree_bordered · tree_lines · tree_compact`,description:`스타일 변형`},{name:`tree_item · tree_row`,description:`노드 구조`},{name:`tree_toggle · tree_toggle-plus · tree_toggle_placeholder`,description:`펼침 토글`},{name:`tree_label · tree_link · tree_meta · tree_icon`,description:`행 파트`},{name:`is-selected · is-disabled`,description:`상태`},...E],Z=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],Q=[{name:`--tree-indent`,default:`1.25rem`,description:`들여쓰기`},{name:`--tree-row-height · --tree-font-size`,default:`2rem · var(--text-size-sm)`,description:`행 높이·글자`},{name:`--tree-toggle-size · --tree-gap`,default:`1.25rem · 2px`,description:`토글·간격`},{name:`--tree-line-color`,default:`var(--color-border)`,description:`연결선 색`}],$={title:`Tree | HTML Components`,activeNav:`tree`,pageTitle:`Tree`},ee={__name:`tree`,setup(e){return(e,t)=>(r(),u(c,null,[t[11]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Tree`),s(`p`,{class:`lead`},`계층 구조 데이터를 트리 형태로 표시하는 컴포넌트입니다. 연결선·컴팩트·체크박스 등 다양한 유형을 지원합니다.`)],-1),o(w,{"heading-id":`basic-heading`,title:`기본`,description:`tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree bordered aria-label="파일 탐색기">
    <TreeNode label="src" expanded toggle-label="src 폴더 접기">
      <TreeNode label="components" expanded toggle-label="components 폴더 접기">
        <TreeNode label="button.html" selected />
        <TreeNode label="card.html" />
      </TreeNode>
      <TreeNode label="index.html" />
    </TreeNode>
    <TreeNode label="public" :expanded="false" toggle-label="public 폴더 펼치기">
      <TreeNode label="favicon.ico" />
    </TreeNode>
  </Tree>
</template>`},{default:a(()=>[o(j,{bordered:``,"aria-label":`파일 탐색기`},{default:a(()=>[o(V,{label:`src`,expanded:``,"toggle-label":`src 폴더 접기`},{default:a(()=>[o(V,{label:`components`,expanded:``,"toggle-label":`components 폴더 접기`},{default:a(()=>[o(V,{label:`button.html`,selected:``}),o(V,{label:`card.html`})]),_:1}),o(V,{label:`index.html`})]),_:1}),o(V,{label:`public`,expanded:!1,"toggle-label":`public 폴더 펼치기`},{default:a(()=>[o(V,{label:`favicon.ico`})]),_:1})]),_:1})]),_:1}),o(w,{"heading-id":`simple-heading`,title:`간단`,description:`아이콘 없이 텍스트만 표시하는 트리입니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree aria-label="카테고리">
    <TreeNode label="전자기기" expanded toggle-label="전자기기 접기">
      <TreeNode label="노트북" />
      <TreeNode label="스마트폰" />
    </TreeNode>
    <TreeNode label="의류" />
  </Tree>
</template>`},{default:a(()=>[o(j,{"aria-label":`카테고리`},{default:a(()=>[o(V,{label:`전자기기`,expanded:``,"toggle-label":`전자기기 접기`},{default:a(()=>[o(V,{label:`노트북`}),o(V,{label:`스마트폰`})]),_:1}),o(V,{label:`의류`})]),_:1})]),_:1}),o(w,{"heading-id":`lines-heading`,title:`연결선`,description:`tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree lines bordered aria-label="조직도">
    <TreeNode label="개발본부" expanded toggle-label="개발본부 접기">
      <TreeNode label="프론트엔드팀" expanded toggle-label="프론트엔드팀 접기">
        <TreeNode label="홍길동" />
        <TreeNode label="김철수" />
      </TreeNode>
      <TreeNode label="백엔드팀" :expanded="false" toggle-label="백엔드팀 펼치기">
        <TreeNode label="이영희" />
      </TreeNode>
    </TreeNode>
    <TreeNode label="디자인본부" />
  </Tree>
</template>`},{default:a(()=>[o(j,{lines:``,bordered:``,"aria-label":`조직도`},{default:a(()=>[o(V,{label:`개발본부`,expanded:``,"toggle-label":`개발본부 접기`},{default:a(()=>[o(V,{label:`프론트엔드팀`,expanded:``,"toggle-label":`프론트엔드팀 접기`},{default:a(()=>[o(V,{label:`홍길동`}),o(V,{label:`김철수`})]),_:1}),o(V,{label:`백엔드팀`,expanded:!1,"toggle-label":`백엔드팀 펼치기`},{default:a(()=>[o(V,{label:`이영희`})]),_:1})]),_:1}),o(V,{label:`디자인본부`})]),_:1})]),_:1}),o(w,{"heading-id":`compact-heading`,title:`컴팩트`,description:`tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree compact bordered aria-label="권한 목록">
    <TreeNode label="관리자" expanded toggle-label="관리자 접기">
      <TreeNode label="사용자 관리" />
      <TreeNode label="설정 변경" />
      <TreeNode label="로그 조회" />
    </TreeNode>
    <TreeNode label="편집자" :expanded="false" toggle-label="편집자 펼치기">
      <TreeNode label="콘텐츠 작성" />
    </TreeNode>
    <TreeNode label="뷰어" />
  </Tree>
</template>`},{default:a(()=>[o(j,{compact:``,bordered:``,"aria-label":`권한 목록`},{default:a(()=>[o(V,{label:`관리자`,expanded:``,"toggle-label":`관리자 접기`},{default:a(()=>[o(V,{label:`사용자 관리`}),o(V,{label:`설정 변경`}),o(V,{label:`로그 조회`})]),_:1}),o(V,{label:`편집자`,expanded:!1,"toggle-label":`편집자 펼치기`},{default:a(()=>[o(V,{label:`콘텐츠 작성`})]),_:1}),o(V,{label:`뷰어`})]),_:1})]),_:1}),o(w,{"heading-id":`plus-toggle-heading`,title:`+/− 토글`,description:`tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree bordered aria-label="메뉴 구조">
    <TreeNode label="가이드" expanded plus-toggle toggle-label="가이드 접기">
      <TreeNode label="시작하기" expanded plus-toggle toggle-label="시작하기 접기">
        <TreeNode label="설치" />
        <TreeNode label="빠른 시작" />
      </TreeNode>
      <TreeNode label="컴포넌트" :expanded="false" plus-toggle toggle-label="컴포넌트 펼치기">
        <TreeNode label="Button" />
      </TreeNode>
    </TreeNode>
  </Tree>
</template>`},{default:a(()=>[o(j,{bordered:``,"aria-label":`메뉴 구조`},{default:a(()=>[o(V,{label:`가이드`,expanded:``,"plus-toggle":``,"toggle-label":`가이드 접기`},{default:a(()=>[o(V,{label:`시작하기`,expanded:``,"plus-toggle":``,"toggle-label":`시작하기 접기`},{default:a(()=>[o(V,{label:`설치`}),o(V,{label:`빠른 시작`})]),_:1}),o(V,{label:`컴포넌트`,expanded:!1,"plus-toggle":``,"toggle-label":`컴포넌트 펼치기`},{default:a(()=>[o(V,{label:`Button`})]),_:1})]),_:1})]),_:1})]),_:1}),o(w,{"heading-id":`checkbox-heading`,title:`체크박스`,description:`tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree bordered multiselectable aria-label="권한 선택">
    <TreeNode label="대시보드" expanded toggle-label="대시보드 접기">
      <template #prefix>
        <label class="tree_check">
          <input type="checkbox" checked aria-label="대시보드" />
        </label>
      </template>
      <TreeNode label="조회">
        <template #prefix>
          <label class="tree_check">
            <input type="checkbox" checked aria-label="조회" />
          </label>
        </template>
      </TreeNode>
      <TreeNode label="보내기">
        <template #prefix>
          <label class="tree_check">
            <input type="checkbox" aria-label="보내기" />
          </label>
        </template>
      </TreeNode>
    </TreeNode>
    <TreeNode label="설정" :expanded="false" toggle-label="설정 펼치기">
      <template #prefix>
        <label class="tree_check">
          <input type="checkbox" aria-label="설정" />
        </label>
      </template>
      <TreeNode label="사용자 관리">
        <template #prefix>
          <label class="tree_check">
            <input type="checkbox" aria-label="사용자 관리" />
          </label>
        </template>
      </TreeNode>
      <TreeNode label="알림 설정">
        <template #prefix>
          <label class="tree_check">
            <input type="checkbox" aria-label="알림 설정" />
          </label>
        </template>
      </TreeNode>
    </TreeNode>
  </Tree>
</template>`},{default:a(()=>[o(j,{bordered:``,multiselectable:``,"aria-label":`권한 선택`},{default:a(()=>[o(V,{label:`대시보드`,expanded:``,"toggle-label":`대시보드 접기`},{prefix:a(()=>[...t[0]||=[s(`label`,{class:`tree_check`},[s(`input`,{type:`checkbox`,checked:``,"aria-label":`대시보드`})],-1)]]),default:a(()=>[o(V,{label:`조회`},{prefix:a(()=>[...t[1]||=[s(`label`,{class:`tree_check`},[s(`input`,{type:`checkbox`,checked:``,"aria-label":`조회`})],-1)]]),_:1}),o(V,{label:`보내기`},{prefix:a(()=>[...t[2]||=[s(`label`,{class:`tree_check`},[s(`input`,{type:`checkbox`,"aria-label":`보내기`})],-1)]]),_:1})]),_:1}),o(V,{label:`설정`,expanded:!1,"toggle-label":`설정 펼치기`},{prefix:a(()=>[...t[3]||=[s(`label`,{class:`tree_check`},[s(`input`,{type:`checkbox`,"aria-label":`설정`})],-1)]]),default:a(()=>[o(V,{label:`사용자 관리`},{prefix:a(()=>[...t[4]||=[s(`label`,{class:`tree_check`},[s(`input`,{type:`checkbox`,"aria-label":`사용자 관리`})],-1)]]),_:1}),o(V,{label:`알림 설정`},{prefix:a(()=>[...t[5]||=[s(`label`,{class:`tree_check`},[s(`input`,{type:`checkbox`,"aria-label":`알림 설정`})],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(w,{"heading-id":`meta-heading`,title:`메타 · 배지`,description:`tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree bordered aria-label="프로젝트 파일">
    <TreeNode label="assets" meta="3개" expanded toggle-label="assets 접기">
      <template #icon>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
      </template>
      <TreeNode label="logo.png" meta="24 KB">
        <template #icon>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
        </template>
      </TreeNode>
      <TreeNode label="hero.jpg" meta="1.2 MB">
        <template #icon>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
        </template>
      </TreeNode>
      <TreeNode label="styles.css" meta="8 KB">
        <template #icon>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
          </svg>
        </template>
      </TreeNode>
    </TreeNode>
    <TreeNode label="package.json">
      <template #icon>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
        </svg>
      </template>
      <template #meta>
        <Tag color="default" label="수정됨" />
      </template>
    </TreeNode>
  </Tree>
</template>`},{default:a(()=>[o(j,{bordered:``,"aria-label":`프로젝트 파일`},{default:a(()=>[o(V,{label:`assets`,meta:`3개`,expanded:``,"toggle-label":`assets 접기`},{icon:a(()=>[...t[6]||=[s(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[s(`path`,{d:`M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z`})],-1)]]),default:a(()=>[o(V,{label:`logo.png`,meta:`24 KB`},{icon:a(()=>[...t[7]||=[s(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[s(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),s(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),s(`path`,{d:`m21 15-5-5L5 21`})],-1)]]),_:1}),o(V,{label:`hero.jpg`,meta:`1.2 MB`},{icon:a(()=>[...t[8]||=[s(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[s(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),s(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),s(`path`,{d:`m21 15-5-5L5 21`})],-1)]]),_:1}),o(V,{label:`styles.css`,meta:`8 KB`},{icon:a(()=>[...t[9]||=[s(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[s(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),s(`path`,{d:`M14 2v6h6`})],-1)]]),_:1})]),_:1}),o(V,{label:`package.json`},{icon:a(()=>[...t[10]||=[s(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[s(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),s(`path`,{d:`M14 2v6h6`})],-1)]]),meta:a(()=>[o(D,{color:`default`,label:`수정됨`})]),_:1})]),_:1})]),_:1}),o(w,{"heading-id":`disabled-heading`,title:`비활성`,description:`tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree bordered aria-label="기능 목록">
    <TreeNode label="기본 기능" expanded toggle-label="기본 기능 접기">
      <TreeNode label="대시보드" />
      <TreeNode label="고급 분석 (Pro)" disabled />
      <TreeNode label="API 연동 (Enterprise)" disabled />
    </TreeNode>
    <TreeNode label="베타 기능" disabled :expanded="false" toggle-label="베타 기능 펼치기">
      <TreeNode label="AI 어시스턴트" disabled />
    </TreeNode>
  </Tree>
</template>`},{default:a(()=>[o(j,{bordered:``,"aria-label":`기능 목록`},{default:a(()=>[o(V,{label:`기본 기능`,expanded:``,"toggle-label":`기본 기능 접기`},{default:a(()=>[o(V,{label:`대시보드`}),o(V,{label:`고급 분석 (Pro)`,disabled:``}),o(V,{label:`API 연동 (Enterprise)`,disabled:``})]),_:1}),o(V,{label:`베타 기능`,disabled:``,expanded:!1,"toggle-label":`베타 기능 펼치기`},{default:a(()=>[o(V,{label:`AI 어시스턴트`,disabled:``})]),_:1})]),_:1})]),_:1}),o(w,{"heading-id":`selectable-heading`,title:`선택 가능`,description:`tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다.`,code:`<script setup>
import Tree from '@/components/Tree.vue';
import TreeNode from '@/components/TreeNode.vue';
<\/script>

<template>
  <Tree bordered aria-label="네비게이션">
    <TreeNode label="문서" expanded link toggle-label="문서 접기">
      <TreeNode label="시작하기" selected link />
      <TreeNode label="컴포넌트" link />
      <TreeNode label="디자인 토큰" link />
    </TreeNode>
    <TreeNode label="변경 이력" link />
  </Tree>
</template>`},{default:a(()=>[o(j,{bordered:``,"aria-label":`네비게이션`},{default:a(()=>[o(V,{label:`문서`,expanded:``,link:``,"toggle-label":`문서 접기`},{default:a(()=>[o(V,{label:`시작하기`,selected:``,link:``}),o(V,{label:`컴포넌트`,link:``}),o(V,{label:`디자인 토큰`,link:``})]),_:1}),o(V,{label:`변경 이력`,link:``})]),_:1})]),_:1}),o(y,{"heading-id":`api-props-heading`,title:`API · Tree Props`},{default:a(()=>[o(b,{columns:p(H),rows:p(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-node-props-heading`,title:`API · TreeNode Props`},{default:a(()=>[o(b,{columns:p(W),rows:p(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-slots-heading`,title:`API · Tree Slots`},{default:a(()=>[o(b,{columns:p(K),rows:p(q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-node-slots-heading`,title:`API · TreeNode Slots`},{default:a(()=>[o(b,{columns:p(K),rows:p(J),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(b,{columns:p(Y),rows:p(X),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(b,{columns:p(Z),rows:p(Q),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ee as default,$ as docMeta};