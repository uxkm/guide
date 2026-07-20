import{u as be,a as me,b as Te,c as s,r as i,p as w,g as p,o as d,i as S,j as Be,k as xe,l as he,x as ke,d as _,s as F,f as P,n as ve,t as L,e as Ee}from"./iframe-CAswI7Qe.js";import{w as t,s as ye}from"./story-renders-DjeoaiCa.js";import{_ as we}from"./Tag-CUdCnuDd.js";import{h as _e,a as Fe}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Pe=["aria-label","aria-multiselectable"],n=Object.assign({inheritAttrs:!1},{__name:"Tree",props:{bordered:Boolean,lines:Boolean,compact:Boolean,ariaLabel:String,multiselectable:Boolean},setup(l){const u=l,a=be(),C=me(),b=S(null),m=Be("Tree",{booleanProps:new Set(["bordered","lines","compact","multiselectable"]),selfClosing:!1});Te(m,u,a,b,C);const T=p(()=>{const o=["tree"];return u.bordered&&o.push("tree_bordered"),u.lines&&o.push("tree_lines"),u.compact&&o.push("tree_compact"),C.class&&o.push(C.class),o}),B=p(()=>{const{class:o,...N}=C;return N});return(o,N)=>(d(),s("ul",w({ref_key:"rootRef",ref:b,class:T.value,role:"tree","aria-label":l.ariaLabel,"aria-multiselectable":l.multiselectable?"true":void 0},B.value),[i(o.$slots,"default")],16,Pe))}}),Le=["aria-expanded"],Se=["aria-expanded","aria-label","disabled"],Me={key:1,class:"tree_toggle tree_toggle_placeholder","aria-hidden":"true"},Re={key:2,class:"tree_icon","aria-hidden":"true"},ze={class:"tree_label"},Ve={class:"tree_label"},He={key:5,class:"tree_meta"},Ie={key:0,class:"tree",role:"group"},r=Object.assign({inheritAttrs:!1},{__name:"TreeNode",props:{ripple:xe,label:String,expanded:Boolean,selected:Boolean,disabled:Boolean,expandable:Boolean,plusToggle:Boolean,toggleLabel:String,link:Boolean,meta:String},emits:["update:expanded"],setup(l,{emit:u}){const a=l,{rippleAttrs:C,childRippleAttrs:b}=he(a,{mode:"container"}),m=be(),T=me(),B=S(null),o=Be("TreeNode",{booleanProps:new Set(["expanded","selected","disabled","expandable","plusToggle","link"]),selfClosing:!1});Te(o,a,m,B,T);const N=u,M=p(()=>!!m.default),R=p(()=>a.expandable||M.value),c=S(a.expanded!==!1);ke(()=>a.expanded,e=>{e!==void 0&&(c.value=e!==!1)});function ge(){a.disabled||(c.value=!c.value,N("update:expanded",c.value))}const De=p(()=>T.class),fe=p(()=>{const e=["tree_row"];return a.selected&&e.push("is-selected"),a.disabled&&e.push("is-disabled"),e}),Ae=p(()=>{const e=["tree_toggle"];return a.plusToggle&&e.push("tree_toggle-plus"),e});return(e,Xe)=>(d(),s("li",w({ref_key:"rootRef",ref:B},F(C),{class:["tree_item",De.value],role:"treeitem","aria-expanded":R.value?c.value?"true":"false":void 0}),[_("div",{class:ve(fe.value)},[R.value?(d(),s("button",w({key:0},F(b),{type:"button",class:Ae.value,"aria-expanded":c.value?"true":"false","aria-label":l.toggleLabel,disabled:l.disabled||void 0,onClick:ge}),null,16,Se)):(d(),s("span",Me)),i(e.$slots,"prefix"),e.$slots.icon?(d(),s("span",Re,[i(e.$slots,"icon")])):P("",!0),l.link?(d(),s("button",w({key:3},F(b),{type:"button",class:"tree_link"}),[i(e.$slots,"label",{},()=>[_("span",ze,L(l.label),1)])],16)):i(e.$slots,"label",{key:4},()=>[_("span",Ve,L(l.label),1)]),l.meta||e.$slots.meta?(d(),s("span",He,[i(e.$slots,"meta",{},()=>[Ee(L(l.meta),1)])])):P("",!0)],2),M.value&&c.value?(d(),s("ul",Ie,[i(e.$slots,"default")])):P("",!0)],16,Le))}}),Ne=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],$e=[{name:"bordered",type:"boolean",default:"false",description:"테두리 (tree_bordered)"},{name:"lines",type:"boolean",default:"false",description:"연결선 (tree_lines)"},{name:"compact",type:"boolean",default:"false",description:"좁은 행 높이 (tree_compact)"},{name:"aria-label",type:"string",default:"—",description:"트리 접근성 라벨 (권장)"},{name:"multiselectable",type:"boolean",default:"false",description:"다중 선택 aria-multiselectable"}],je=Ne,Ke=[{name:"label",type:"string",default:"—",description:"노드 라벨 (tree_label)"},{name:"expanded",type:"boolean",default:"—",description:"펼침 상태 (aria-expanded)"},{name:"selected",type:"boolean",default:"false",description:"선택 상태 (is-selected)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"expandable",type:"boolean",default:"false",description:"토글 버튼 강제 표시"},{name:"plus-toggle",type:"boolean",default:"false",description:"+ / − 토글 (tree_toggle-plus)"},{name:"toggle-label",type:"string",default:"—",description:"토글 버튼 aria-label"},{name:"link",type:"boolean",default:"false",description:"클릭 가능 행 (tree_link)"},{name:"meta",type:"string",default:"—",description:"우측 메타 (tree_meta)"},_e],z=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Oe=[{name:"default",description:"TreeNode 자식"}],qe=[{name:"prefix",description:"토글 앞 체크박스 등"},{name:"icon",description:"라벨 앞 아이콘 (tree_icon)"},{name:"label",description:"라벨 텍스트 (label prop 대체)"},{name:"meta",description:"우측 메타"},{name:"default",description:"하위 TreeNode (중첩 tree)"}],Ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Je=[{name:"tree",description:"트리 루트·중첩 ul"},{name:"tree_bordered · tree_lines · tree_compact",description:"스타일 변형"},{name:"tree_item · tree_row",description:"노드 구조"},{name:"tree_toggle · tree_toggle-plus · tree_toggle_placeholder",description:"펼침 토글"},{name:"tree_label · tree_link · tree_meta · tree_icon",description:"행 파트"},{name:"is-selected · is-disabled",description:"상태"},...Fe],Qe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ue=[{name:"--tree-indent",default:"1.25rem",description:"들여쓰기"},{name:"--tree-row-height · --tree-font-size",default:"2rem · var(--text-size-sm)",description:"행 높이·글자"},{name:"--tree-toggle-size · --tree-gap",default:"1.25rem · 2px",description:"토글·간격"},{name:"--tree-line-color",default:"var(--color-border)",description:"연결선 색"}],We=[{title:"API · Tree Props",tables:[{columns:Ne,rows:$e,codeColumn:"name"}]},{title:"API · TreeNode Props",tables:[{columns:je,rows:Ke,codeColumn:"name"}]},{title:"API · Tree Slots",tables:[{columns:z,rows:Oe,codeColumn:"name"}]},{title:"API · TreeNode Slots",tables:[{columns:z,rows:qe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ge,rows:Je,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Qe,rows:Ue,codeColumn:"name"}]}],nl={title:"Components/데이터 표시/Tree",id:"components-tree",component:n,subcomponents:{TreeNode:r},tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},lines:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},multiselectable:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:We}},g={parameters:{controls:{disable:!1}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:(l,u)=>({components:{Tree:n,TreeNode:r},setup(){return{args:ye(u)}},template:`<Tree v-bind="args">
      <TreeNode label="루트" expanded>
        <TreeNode label="자식 1" />
        <TreeNode label="자식 2" />
      </TreeNode>
    </Tree>`})},D={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{ariaLabel:"접근성 라벨"},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree bordered aria-label="파일 탐색기">
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
      </Tree>`}))},f={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"아이콘 없이 텍스트만 표시하는 트리입니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
<\/script>

<template>
  <Tree aria-label="카테고리">
    <TreeNode label="전자기기" expanded toggle-label="전자기기 접기">
      <TreeNode label="노트북" />
      <TreeNode label="스마트폰" />
    </TreeNode>
    <TreeNode label="의류" />
  </Tree>
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree aria-label="카테고리">
        <TreeNode label="전자기기" expanded toggle-label="전자기기 접기">
          <TreeNode label="노트북" />
          <TreeNode label="스마트폰" />
        </TreeNode>
        <TreeNode label="의류" />
      </Tree>`}))},A={name:"연결선",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree lines bordered aria-label="조직도">
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
      </Tree>`}))},x={name:"컴팩트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree compact bordered aria-label="권한 목록">
        <TreeNode label="관리자" expanded toggle-label="관리자 접기">
          <TreeNode label="사용자 관리" />
          <TreeNode label="설정 변경" />
          <TreeNode label="로그 조회" />
        </TreeNode>
        <TreeNode label="편집자" :expanded="false" toggle-label="편집자 펼치기">
          <TreeNode label="콘텐츠 작성" />
        </TreeNode>
        <TreeNode label="뷰어" />
      </Tree>`}))},h={name:"+/− 토글",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree bordered aria-label="메뉴 구조">
        <TreeNode label="가이드" expanded plus-toggle toggle-label="가이드 접기">
          <TreeNode label="시작하기" expanded plus-toggle toggle-label="시작하기 접기">
            <TreeNode label="설치" />
            <TreeNode label="빠른 시작" />
          </TreeNode>
          <TreeNode label="컴포넌트" :expanded="false" plus-toggle toggle-label="컴포넌트 펼치기">
            <TreeNode label="Button" />
          </TreeNode>
        </TreeNode>
      </Tree>`}))},k={name:"체크박스",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`        <Tree bordered multiselectable aria-label="권한 선택">
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
        </Tree>`}))},v={name:"메타 · 배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tag:we,Tree:n,TreeNode:r},template:`        <Tree bordered aria-label="프로젝트 파일">
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
        </Tree>`}))},E={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree bordered aria-label="기능 목록">
        <TreeNode label="기본 기능" expanded toggle-label="기본 기능 접기">
          <TreeNode label="대시보드" />
          <TreeNode label="고급 분석 (Pro)" disabled />
          <TreeNode label="API 연동 (Enterprise)" disabled />
        </TreeNode>
        <TreeNode label="베타 기능" disabled :expanded="false" toggle-label="베타 기능 펼치기">
          <TreeNode label="AI 어시스턴트" disabled />
        </TreeNode>
      </Tree>`}))},y={name:"선택 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다."},source:{code:`<script setup>
import Tree from '@uxkm/ui/components/Tree.vue';
import TreeNode from '@uxkm/ui/components/TreeNode.vue';
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
</template>`,language:"vue"}}},args:{bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},render:t(()=>({components:{Tree:n,TreeNode:r},template:`<Tree bordered aria-label="네비게이션">
        <TreeNode label="문서" expanded link toggle-label="문서 접기">
          <TreeNode label="시작하기" selected link />
          <TreeNode label="컴포넌트" link />
          <TreeNode label="디자인 토큰" link />
        </TreeNode>
        <TreeNode label="변경 이력" link />
      </Tree>`}))};var V,H,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: (_args, context) => ({
    components: {
      Tree,
      TreeNode
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Tree v-bind="args">
      <TreeNode label="루트" expanded>
        <TreeNode label="자식 1" />
        <TreeNode label="자식 2" />
      </TreeNode>
    </Tree>\`
  })
}`,...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var $,j,K;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree bordered aria-label=\\"파일 탐색기\\">\\n    <TreeNode label=\\"src\\" expanded toggle-label=\\"src 폴더 접기\\">\\n      <TreeNode label=\\"components\\" expanded toggle-label=\\"components 폴더 접기\\">\\n        <TreeNode label=\\"button.html\\" selected />\\n        <TreeNode label=\\"card.html\\" />\\n      </TreeNode>\\n      <TreeNode label=\\"index.html\\" />\\n    </TreeNode>\\n    <TreeNode label=\\"public\\" :expanded=\\"false\\" toggle-label=\\"public 폴더 펼치기\\">\\n      <TreeNode label=\\"favicon.ico\\" />\\n    </TreeNode>\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    ariaLabel: "접근성 라벨"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree bordered aria-label="파일 탐색기">
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
      </Tree>\`
  }))
}`,...(K=(j=D.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var O,q,G;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "간단",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "아이콘 없이 텍스트만 표시하는 트리입니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree aria-label=\\"카테고리\\">\\n    <TreeNode label=\\"전자기기\\" expanded toggle-label=\\"전자기기 접기\\">\\n      <TreeNode label=\\"노트북\\" />\\n      <TreeNode label=\\"스마트폰\\" />\\n    </TreeNode>\\n    <TreeNode label=\\"의류\\" />\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree aria-label="카테고리">
        <TreeNode label="전자기기" expanded toggle-label="전자기기 접기">
          <TreeNode label="노트북" />
          <TreeNode label="스마트폰" />
        </TreeNode>
        <TreeNode label="의류" />
      </Tree>\`
  }))
}`,...(G=(q=f.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,U;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "연결선",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree lines bordered aria-label=\\"조직도\\">\\n    <TreeNode label=\\"개발본부\\" expanded toggle-label=\\"개발본부 접기\\">\\n      <TreeNode label=\\"프론트엔드팀\\" expanded toggle-label=\\"프론트엔드팀 접기\\">\\n        <TreeNode label=\\"홍길동\\" />\\n        <TreeNode label=\\"김철수\\" />\\n      </TreeNode>\\n      <TreeNode label=\\"백엔드팀\\" :expanded=\\"false\\" toggle-label=\\"백엔드팀 펼치기\\">\\n        <TreeNode label=\\"이영희\\" />\\n      </TreeNode>\\n    </TreeNode>\\n    <TreeNode label=\\"디자인본부\\" />\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree lines bordered aria-label="조직도">
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
      </Tree>\`
  }))
}`,...(U=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "컴팩트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree compact bordered aria-label=\\"권한 목록\\">\\n    <TreeNode label=\\"관리자\\" expanded toggle-label=\\"관리자 접기\\">\\n      <TreeNode label=\\"사용자 관리\\" />\\n      <TreeNode label=\\"설정 변경\\" />\\n      <TreeNode label=\\"로그 조회\\" />\\n    </TreeNode>\\n    <TreeNode label=\\"편집자\\" :expanded=\\"false\\" toggle-label=\\"편집자 펼치기\\">\\n      <TreeNode label=\\"콘텐츠 작성\\" />\\n    </TreeNode>\\n    <TreeNode label=\\"뷰어\\" />\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree compact bordered aria-label="권한 목록">
        <TreeNode label="관리자" expanded toggle-label="관리자 접기">
          <TreeNode label="사용자 관리" />
          <TreeNode label="설정 변경" />
          <TreeNode label="로그 조회" />
        </TreeNode>
        <TreeNode label="편집자" :expanded="false" toggle-label="편집자 펼치기">
          <TreeNode label="콘텐츠 작성" />
        </TreeNode>
        <TreeNode label="뷰어" />
      </Tree>\`
  }))
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,le;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "+/− 토글",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree bordered aria-label=\\"메뉴 구조\\">\\n    <TreeNode label=\\"가이드\\" expanded plus-toggle toggle-label=\\"가이드 접기\\">\\n      <TreeNode label=\\"시작하기\\" expanded plus-toggle toggle-label=\\"시작하기 접기\\">\\n        <TreeNode label=\\"설치\\" />\\n        <TreeNode label=\\"빠른 시작\\" />\\n      </TreeNode>\\n      <TreeNode label=\\"컴포넌트\\" :expanded=\\"false\\" plus-toggle toggle-label=\\"컴포넌트 펼치기\\">\\n        <TreeNode label=\\"Button\\" />\\n      </TreeNode>\\n    </TreeNode>\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree bordered aria-label="메뉴 구조">
        <TreeNode label="가이드" expanded plus-toggle toggle-label="가이드 접기">
          <TreeNode label="시작하기" expanded plus-toggle toggle-label="시작하기 접기">
            <TreeNode label="설치" />
            <TreeNode label="빠른 시작" />
          </TreeNode>
          <TreeNode label="컴포넌트" :expanded="false" plus-toggle toggle-label="컴포넌트 펼치기">
            <TreeNode label="Button" />
          </TreeNode>
        </TreeNode>
      </Tree>\`
  }))
}`,...(le=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,ne,re;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "체크박스",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree bordered multiselectable aria-label=\\"권한 선택\\">\\n    <TreeNode label=\\"대시보드\\" expanded toggle-label=\\"대시보드 접기\\">\\n      <template #prefix>\\n        <label class=\\"tree_check\\">\\n          <input type=\\"checkbox\\" checked aria-label=\\"대시보드\\" />\\n        </label>\\n      </template>\\n      <TreeNode label=\\"조회\\">\\n        <template #prefix>\\n          <label class=\\"tree_check\\">\\n            <input type=\\"checkbox\\" checked aria-label=\\"조회\\" />\\n          </label>\\n        </template>\\n      </TreeNode>\\n      <TreeNode label=\\"보내기\\">\\n        <template #prefix>\\n          <label class=\\"tree_check\\">\\n            <input type=\\"checkbox\\" aria-label=\\"보내기\\" />\\n          </label>\\n        </template>\\n      </TreeNode>\\n    </TreeNode>\\n    <TreeNode label=\\"설정\\" :expanded=\\"false\\" toggle-label=\\"설정 펼치기\\">\\n      <template #prefix>\\n        <label class=\\"tree_check\\">\\n          <input type=\\"checkbox\\" aria-label=\\"설정\\" />\\n        </label>\\n      </template>\\n      <TreeNode label=\\"사용자 관리\\">\\n        <template #prefix>\\n          <label class=\\"tree_check\\">\\n            <input type=\\"checkbox\\" aria-label=\\"사용자 관리\\" />\\n          </label>\\n        </template>\\n      </TreeNode>\\n      <TreeNode label=\\"알림 설정\\">\\n        <template #prefix>\\n          <label class=\\"tree_check\\">\\n            <input type=\\"checkbox\\" aria-label=\\"알림 설정\\" />\\n          </label>\\n        </template>\\n      </TreeNode>\\n    </TreeNode>\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`        <Tree bordered multiselectable aria-label="권한 선택">
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
        </Tree>\`
  }))
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,te,ue;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "메타 · 배지",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree bordered aria-label=\\"프로젝트 파일\\">\\n    <TreeNode label=\\"assets\\" meta=\\"3개\\" expanded toggle-label=\\"assets 접기\\">\\n      <template #icon>\\n        <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/>\\n        </svg>\\n      </template>\\n      <TreeNode label=\\"logo.png\\" meta=\\"24 KB\\">\\n        <template #icon>\\n          <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n            <rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"/>\\n            <circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\"/>\\n            <path d=\\"m21 15-5-5L5 21\\"/>\\n          </svg>\\n        </template>\\n      </TreeNode>\\n      <TreeNode label=\\"hero.jpg\\" meta=\\"1.2 MB\\">\\n        <template #icon>\\n          <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n            <rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"/>\\n            <circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\"/>\\n            <path d=\\"m21 15-5-5L5 21\\"/>\\n          </svg>\\n        </template>\\n      </TreeNode>\\n      <TreeNode label=\\"styles.css\\" meta=\\"8 KB\\">\\n        <template #icon>\\n          <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n            <path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/>\\n            <path d=\\"M14 2v6h6\\"/>\\n          </svg>\\n        </template>\\n      </TreeNode>\\n    </TreeNode>\\n    <TreeNode label=\\"package.json\\">\\n      <template #icon>\\n        <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/>\\n          <path d=\\"M14 2v6h6\\"/>\\n        </svg>\\n      </template>\\n      <template #meta>\\n        <Tag color=\\"default\\" label=\\"수정됨\\" />\\n      </template>\\n    </TreeNode>\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tag,
      Tree,
      TreeNode
    },
    template: \`        <Tree bordered aria-label="프로젝트 파일">
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
        </Tree>\`
  }))
}`,...(ue=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};var se,de,ce;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree bordered aria-label=\\"기능 목록\\">\\n    <TreeNode label=\\"기본 기능\\" expanded toggle-label=\\"기본 기능 접기\\">\\n      <TreeNode label=\\"대시보드\\" />\\n      <TreeNode label=\\"고급 분석 (Pro)\\" disabled />\\n      <TreeNode label=\\"API 연동 (Enterprise)\\" disabled />\\n    </TreeNode>\\n    <TreeNode label=\\"베타 기능\\" disabled :expanded=\\"false\\" toggle-label=\\"베타 기능 펼치기\\">\\n      <TreeNode label=\\"AI 어시스턴트\\" disabled />\\n    </TreeNode>\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree bordered aria-label="기능 목록">
        <TreeNode label="기본 기능" expanded toggle-label="기본 기능 접기">
          <TreeNode label="대시보드" />
          <TreeNode label="고급 분석 (Pro)" disabled />
          <TreeNode label="API 연동 (Enterprise)" disabled />
        </TreeNode>
        <TreeNode label="베타 기능" disabled :expanded="false" toggle-label="베타 기능 펼치기">
          <TreeNode label="AI 어시스턴트" disabled />
        </TreeNode>
      </Tree>\`
  }))
}`,...(ce=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ie,pe,Ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "선택 가능",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Tree from '@uxkm/ui/components/Tree.vue';\\nimport TreeNode from '@uxkm/ui/components/TreeNode.vue';\\n<\/script>\\n\\n<template>\\n  <Tree bordered aria-label=\\"네비게이션\\">\\n    <TreeNode label=\\"문서\\" expanded link toggle-label=\\"문서 접기\\">\\n      <TreeNode label=\\"시작하기\\" selected link />\\n      <TreeNode label=\\"컴포넌트\\" link />\\n      <TreeNode label=\\"디자인 토큰\\" link />\\n    </TreeNode>\\n    <TreeNode label=\\"변경 이력\\" link />\\n  </Tree>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    ariaLabel: "접근성 라벨",
    multiselectable: false
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tree,
      TreeNode
    },
    template: \`<Tree bordered aria-label="네비게이션">
        <TreeNode label="문서" expanded link toggle-label="문서 접기">
          <TreeNode label="시작하기" selected link />
          <TreeNode label="컴포넌트" link />
          <TreeNode label="디자인 토큰" link />
        </TreeNode>
        <TreeNode label="변경 이력" link />
      </Tree>\`
  }))
}`,...(Ce=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:Ce.source}}};const rl=["Playground","Basic","Simple","Lines","Compact","PlusToggle","Checkbox","Meta","Disabled","Selectable"];export{D as Basic,k as Checkbox,x as Compact,E as Disabled,A as Lines,v as Meta,g as Playground,h as PlusToggle,y as Selectable,f as Simple,rl as __namedExportsOrder,nl as default};
