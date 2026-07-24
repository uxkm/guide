import{r as b,u as ye,c as _e,n as Ce,j as e,a as B,b as we,d as Re}from"./iframe-ifEc15ad.js";import{T as De}from"./Tag-BEM9gEAf.js";import{w as d}from"./story-renders-Hdz_JUlO.js";import{f as Me,a as Fe}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Ke=we("Tree",{booleanProps:new Set(["bordered","lines","compact","multiselectable"]),selfClosing:!1});function l({bordered:a,lines:n,compact:s,ariaLabel:p,multiselectable:c,children:T,className:m,...g}){const x=b.useRef(null);ye(Ke,{bordered:a,lines:n,compact:s,ariaLabel:p,multiselectable:c},_e({default:T}),x,{className:m,...g});const f=b.useMemo(()=>{const i=["tree"];return a&&i.push("tree_bordered"),n&&i.push("tree_lines"),s&&i.push("tree_compact"),i},[a,n,s]),{class:E,...N}=g,j=Ce(N);return e.jsx("ul",{ref:x,className:B(f,m),role:"tree","aria-label":p,"aria-multiselectable":c?"true":void 0,...j,children:T})}l.__docgenInfo={description:"",methods:[],displayName:"Tree"};const ze=we("TreeNode",{booleanProps:new Set(["expanded","selected","disabled","expandable","plusToggle","link"]),selfClosing:!1});function r({ripple:a,label:n,expanded:s,selected:p,disabled:c,expandable:T,plusToggle:m,toggleLabel:g,link:x,meta:f,prefix:E,icon:N,labelSlot:j,metaSlot:i,children:R,className:M,onExpandedChange:k,...F}){const K=b.useRef(null),{rippleAttrs:Pe,childRippleAttrs:z}=Re({ripple:a},{mode:"container"}),V=!!R,H=!!(T||V),[h,O]=b.useState(s!==!1);b.useEffect(()=>{s!==void 0&&O(s!==!1)},[s]),ye(ze,{ripple:a,label:n,expanded:s,selected:p,disabled:c,expandable:T,plusToggle:m,toggleLabel:g,link:x,meta:f},_e({default:R,prefix:E,icon:N,label:j,meta:i}),K,{className:M,onExpandedChange:k,...F});function Ie(){if(c)return;const t=!h;O(t),k==null||k(t)}const Se=b.useMemo(()=>{const t=["tree_row"];return p&&t.push("is-selected"),c&&t.push("is-disabled"),t},[p,c]),Ae=b.useMemo(()=>{const t=["tree_toggle"];return m&&t.push("tree_toggle-plus"),t},[m]),{class:Ye,...Be}=F,Ee=Ce(Be),W=j??e.jsx("span",{className:"tree_label",children:n}),D=i??f;return e.jsxs("li",{ref:K,className:B("tree_item",M),role:"treeitem","aria-expanded":H?h?"true":"false":void 0,...Pe,...Ee,children:[e.jsxs("div",{className:B(Se),children:[H?e.jsx("button",{type:"button",className:B(Ae),"aria-expanded":h?"true":"false","aria-label":g,disabled:c||void 0,onClick:Ie,...z}):e.jsx("span",{className:"tree_toggle tree_toggle_placeholder","aria-hidden":"true"}),E,N?e.jsx("span",{className:"tree_icon","aria-hidden":"true",children:N}):null,x?e.jsx("button",{type:"button",className:"tree_link",...z,children:W}):W,D!=null&&D!==""?e.jsx("span",{className:"tree_meta",children:D}):null]}),V&&h?e.jsx("ul",{className:"tree",role:"group",children:R}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"TreeNode"};const ve=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ve=[{name:"bordered",type:"boolean",default:"false",description:"테두리 (tree_bordered)"},{name:"lines",type:"boolean",default:"false",description:"연결선 (tree_lines)"},{name:"compact",type:"boolean",default:"false",description:"좁은 행 높이 (tree_compact)"},{name:"aria-label",type:"string",default:"—",description:"트리 접근성 라벨 (권장)"},{name:"multiselectable",type:"boolean",default:"false",description:"다중 선택 aria-multiselectable"}],He=ve,Oe=[{name:"label",type:"string",default:"—",description:"노드 라벨 (tree_label)"},{name:"expanded",type:"boolean",default:"—",description:"펼침 상태 (aria-expanded)"},{name:"selected",type:"boolean",default:"false",description:"선택 상태 (is-selected)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"expandable",type:"boolean",default:"false",description:"토글 버튼 강제 표시"},{name:"plus-toggle",type:"boolean",default:"false",description:"+ / − 토글 (tree_toggle-plus)"},{name:"toggle-label",type:"string",default:"—",description:"토글 버튼 aria-label"},{name:"link",type:"boolean",default:"false",description:"클릭 가능 행 (tree_link)"},{name:"meta",type:"string",default:"—",description:"우측 메타 (tree_meta)"},Me],$=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],We=[{name:"default",description:"TreeNode 자식"}],$e=[{name:"prefix",description:"토글 앞 체크박스 등"},{name:"icon",description:"라벨 앞 아이콘 (tree_icon)"},{name:"label",description:"라벨 텍스트 (label prop 대체)"},{name:"meta",description:"우측 메타"},{name:"default",description:"하위 TreeNode (중첩 tree)"}],qe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ge=[{name:"tree",description:"트리 루트·중첩 ul"},{name:"tree_bordered · tree_lines · tree_compact",description:"스타일 변형"},{name:"tree_item · tree_row",description:"노드 구조"},{name:"tree_toggle · tree_toggle-plus · tree_toggle_placeholder",description:"펼침 토글"},{name:"tree_label · tree_link · tree_meta · tree_icon",description:"행 파트"},{name:"is-selected · is-disabled",description:"상태"},...Fe],Je=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"--tree-indent",default:"1.25rem",description:"들여쓰기"},{name:"--tree-row-height · --tree-font-size",default:"2rem · var(--text-size-sm)",description:"행 높이·글자"},{name:"--tree-toggle-size · --tree-gap",default:"1.25rem · 2px",description:"토글·간격"},{name:"--tree-line-color",default:"var(--color-border)",description:"연결선 색"}],Ue=e.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),q=e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("path",{d:"m21 15-5-5L5 21"})]}),G=e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("path",{d:"M14 2v6h6"})]});function u({label:a,defaultChecked:n}){return e.jsx("label",{className:"tree_check",children:e.jsx("input",{type:"checkbox",defaultChecked:n,"aria-label":a})})}const Xe=[{title:"API · Tree Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.",tables:[{columns:ve,rows:Ve,codeColumn:"name"}]},{title:"API · TreeNode Props",description:"Vue의 plus-toggle · toggle-label · update:expanded는 plusToggle · toggleLabel · onExpandedChange에 대응합니다.",tables:[{columns:He,rows:Oe,codeColumn:"name"}]},{title:"API · Tree Children / Slots",description:"Vue default 슬롯은 React children에 대응합니다.",tables:[{columns:$,rows:We,codeColumn:"name"}]},{title:"API · TreeNode Children / Slots",description:"Vue prefix · icon · label · meta 슬롯은 React prefix · icon · labelSlot · metaSlot prop에 대응합니다.",tables:[{columns:$,rows:$e,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:qe,rows:Ge,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Je,rows:Qe,codeColumn:"name"}]}],o={bordered:!1,lines:!1,compact:!1,ariaLabel:"접근성 라벨",multiselectable:!1},or={title:"Components/데이터 표시/Tree",id:"components-tree",component:l,subcomponents:{TreeNode:r},tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},lines:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},multiselectable:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Xe,docs:{description:{component:"계층 구조를 펼치고 접는 트리 컴포넌트입니다."}}}},L={parameters:{controls:{disable:!1}},args:{...o},render:a=>e.jsx(l,{...a,children:e.jsxs(r,{label:"루트",expanded:!0,children:[e.jsx(r,{label:"자식 1"}),e.jsx(r,{label:"자식 2"})]})})},y={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function BasicExample() {
  return (
    <Tree bordered ariaLabel="파일 탐색기">
      <TreeNode label="src" expanded toggleLabel="src 폴더 접기">
        <TreeNode label="components" expanded toggleLabel="components 폴더 접기">
          <TreeNode label="button.html" selected />
          <TreeNode label="card.html" />
        </TreeNode>
        <TreeNode label="index.html" />
      </TreeNode>
      <TreeNode label="public" expanded={false} toggleLabel="public 폴더 펼치기">
        <TreeNode label="favicon.ico" />
      </TreeNode>
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{bordered:!0,ariaLabel:"파일 탐색기",children:[e.jsxs(r,{label:"src",expanded:!0,toggleLabel:"src 폴더 접기",children:[e.jsxs(r,{label:"components",expanded:!0,toggleLabel:"components 폴더 접기",children:[e.jsx(r,{label:"button.html",selected:!0}),e.jsx(r,{label:"card.html"})]}),e.jsx(r,{label:"index.html"})]}),e.jsx(r,{label:"public",expanded:!1,toggleLabel:"public 폴더 펼치기",children:e.jsx(r,{label:"favicon.ico"})})]}))},_={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"아이콘 없이 텍스트만 표시하는 트리입니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function SimpleExample() {
  return (
    <Tree ariaLabel="카테고리">
      <TreeNode label="전자기기" expanded toggleLabel="전자기기 접기">
        <TreeNode label="노트북" />
        <TreeNode label="스마트폰" />
      </TreeNode>
      <TreeNode label="의류" />
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{ariaLabel:"카테고리",children:[e.jsxs(r,{label:"전자기기",expanded:!0,toggleLabel:"전자기기 접기",children:[e.jsx(r,{label:"노트북"}),e.jsx(r,{label:"스마트폰"})]}),e.jsx(r,{label:"의류"})]}))},C={name:"연결선",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function LinesExample() {
  return (
    <Tree lines bordered ariaLabel="조직도">
      <TreeNode label="개발본부" expanded toggleLabel="개발본부 접기">
        <TreeNode label="프론트엔드팀" expanded toggleLabel="프론트엔드팀 접기">
          <TreeNode label="홍길동" />
          <TreeNode label="김철수" />
        </TreeNode>
        <TreeNode label="백엔드팀" expanded={false} toggleLabel="백엔드팀 펼치기">
          <TreeNode label="이영희" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="디자인본부" />
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{lines:!0,bordered:!0,ariaLabel:"조직도",children:[e.jsxs(r,{label:"개발본부",expanded:!0,toggleLabel:"개발본부 접기",children:[e.jsxs(r,{label:"프론트엔드팀",expanded:!0,toggleLabel:"프론트엔드팀 접기",children:[e.jsx(r,{label:"홍길동"}),e.jsx(r,{label:"김철수"})]}),e.jsx(r,{label:"백엔드팀",expanded:!1,toggleLabel:"백엔드팀 펼치기",children:e.jsx(r,{label:"이영희"})})]}),e.jsx(r,{label:"디자인본부"})]}))},w={name:"컴팩트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function CompactExample() {
  return (
    <Tree compact bordered ariaLabel="권한 목록">
      <TreeNode label="관리자" expanded toggleLabel="관리자 접기">
        <TreeNode label="사용자 관리" />
        <TreeNode label="설정 변경" />
        <TreeNode label="로그 조회" />
      </TreeNode>
      <TreeNode label="편집자" expanded={false} toggleLabel="편집자 펼치기">
        <TreeNode label="콘텐츠 작성" />
      </TreeNode>
      <TreeNode label="뷰어" />
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{compact:!0,bordered:!0,ariaLabel:"권한 목록",children:[e.jsxs(r,{label:"관리자",expanded:!0,toggleLabel:"관리자 접기",children:[e.jsx(r,{label:"사용자 관리"}),e.jsx(r,{label:"설정 변경"}),e.jsx(r,{label:"로그 조회"})]}),e.jsx(r,{label:"편집자",expanded:!1,toggleLabel:"편집자 펼치기",children:e.jsx(r,{label:"콘텐츠 작성"})}),e.jsx(r,{label:"뷰어"})]}))},v={name:"+/− 토글",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function PlusToggleExample() {
  return (
    <Tree bordered ariaLabel="메뉴 구조">
      <TreeNode label="가이드" expanded plusToggle toggleLabel="가이드 접기">
        <TreeNode label="시작하기" expanded plusToggle toggleLabel="시작하기 접기">
          <TreeNode label="설치" />
          <TreeNode label="빠른 시작" />
        </TreeNode>
        <TreeNode label="컴포넌트" expanded={false} plusToggle toggleLabel="컴포넌트 펼치기">
          <TreeNode label="Button" />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsx(l,{bordered:!0,ariaLabel:"메뉴 구조",children:e.jsxs(r,{label:"가이드",expanded:!0,plusToggle:!0,toggleLabel:"가이드 접기",children:[e.jsxs(r,{label:"시작하기",expanded:!0,plusToggle:!0,toggleLabel:"시작하기 접기",children:[e.jsx(r,{label:"설치"}),e.jsx(r,{label:"빠른 시작"})]}),e.jsx(r,{label:"컴포넌트",expanded:!1,plusToggle:!0,toggleLabel:"컴포넌트 펼치기",children:e.jsx(r,{label:"Button"})})]})}))},P={name:"체크박스",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function CheckboxExample() {
  return (
    <Tree bordered multiselectable ariaLabel="권한 선택">
      <TreeNode
        label="대시보드"
        expanded
        toggleLabel="대시보드 접기"
        prefix={
          <label className="tree_check">
            <input type="checkbox" defaultChecked aria-label="대시보드" />
          </label>
        }
      >
        <TreeNode
          label="조회"
          prefix={
            <label className="tree_check">
              <input type="checkbox" defaultChecked aria-label="조회" />
            </label>
          }
        />
        <TreeNode
          label="보내기"
          prefix={
            <label className="tree_check">
              <input type="checkbox" aria-label="보내기" />
            </label>
          }
        />
      </TreeNode>
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{bordered:!0,multiselectable:!0,ariaLabel:"권한 선택",children:[e.jsxs(r,{label:"대시보드",expanded:!0,toggleLabel:"대시보드 접기",prefix:e.jsx(u,{label:"대시보드",defaultChecked:!0}),children:[e.jsx(r,{label:"조회",prefix:e.jsx(u,{label:"조회",defaultChecked:!0})}),e.jsx(r,{label:"보내기",prefix:e.jsx(u,{label:"보내기"})})]}),e.jsxs(r,{label:"설정",expanded:!1,toggleLabel:"설정 펼치기",prefix:e.jsx(u,{label:"설정"}),children:[e.jsx(r,{label:"사용자 관리",prefix:e.jsx(u,{label:"사용자 관리"})}),e.jsx(r,{label:"알림 설정",prefix:e.jsx(u,{label:"알림 설정"})})]})]}))},I={name:"메타 · 배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function MetaExample() {
  return (
    <Tree bordered ariaLabel="프로젝트 파일">
      <TreeNode label="assets" meta="3개" expanded toggleLabel="assets 접기" icon={FolderIcon}>
        <TreeNode label="logo.png" meta="24 KB" icon={ImageIcon} />
        <TreeNode label="hero.jpg" meta="1.2 MB" icon={ImageIcon} />
        <TreeNode label="styles.css" meta="8 KB" icon={FileIcon} />
      </TreeNode>
      <TreeNode
        label="package.json"
        icon={FileIcon}
        metaSlot={<Tag color="default" label="수정됨" />}
      />
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{bordered:!0,ariaLabel:"프로젝트 파일",children:[e.jsxs(r,{label:"assets",meta:"3개",expanded:!0,toggleLabel:"assets 접기",icon:Ue,children:[e.jsx(r,{label:"logo.png",meta:"24 KB",icon:q}),e.jsx(r,{label:"hero.jpg",meta:"1.2 MB",icon:q}),e.jsx(r,{label:"styles.css",meta:"8 KB",icon:G})]}),e.jsx(r,{label:"package.json",icon:G,metaSlot:e.jsx(De,{color:"default",label:"수정됨"})})]}))},S={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function DisabledExample() {
  return (
    <Tree bordered ariaLabel="기능 목록">
      <TreeNode label="기본 기능" expanded toggleLabel="기본 기능 접기">
        <TreeNode label="대시보드" />
        <TreeNode label="고급 분석 (Pro)" disabled />
        <TreeNode label="API 연동 (Enterprise)" disabled />
      </TreeNode>
      <TreeNode label="베타 기능" disabled expanded={false} toggleLabel="베타 기능 펼치기">
        <TreeNode label="AI 어시스턴트" disabled />
      </TreeNode>
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{bordered:!0,ariaLabel:"기능 목록",children:[e.jsxs(r,{label:"기본 기능",expanded:!0,toggleLabel:"기본 기능 접기",children:[e.jsx(r,{label:"대시보드"}),e.jsx(r,{label:"고급 분석 (Pro)",disabled:!0}),e.jsx(r,{label:"API 연동 (Enterprise)",disabled:!0})]}),e.jsx(r,{label:"베타 기능",disabled:!0,expanded:!1,toggleLabel:"베타 기능 펼치기",children:e.jsx(r,{label:"AI 어시스턴트",disabled:!0})})]}))},A={name:"선택 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다."},source:{code:`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function SelectableExample() {
  return (
    <Tree bordered ariaLabel="네비게이션">
      <TreeNode label="문서" expanded link toggleLabel="문서 접기">
        <TreeNode label="시작하기" selected link />
        <TreeNode label="컴포넌트" link />
        <TreeNode label="디자인 토큰" link />
      </TreeNode>
      <TreeNode label="변경 이력" link />
    </Tree>
  );
}`,language:"tsx"}}},args:{...o},render:d(e.jsxs(l,{bordered:!0,ariaLabel:"네비게이션",children:[e.jsxs(r,{label:"문서",expanded:!0,link:!0,toggleLabel:"문서 접기",children:[e.jsx(r,{label:"시작하기",selected:!0,link:!0}),e.jsx(r,{label:"컴포넌트",link:!0}),e.jsx(r,{label:"디자인 토큰",link:!0})]}),e.jsx(r,{label:"변경 이력",link:!0})]}))};var J,Q,U;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Tree {...args}>
      <TreeNode label="루트" expanded>
        <TreeNode label="자식 1" />
        <TreeNode label="자식 2" />
      </TreeNode>
    </Tree>
}`,...(U=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        story: 'tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function BasicExample() {
  return (
    <Tree bordered ariaLabel="파일 탐색기">
      <TreeNode label="src" expanded toggleLabel="src 폴더 접기">
        <TreeNode label="components" expanded toggleLabel="components 폴더 접기">
          <TreeNode label="button.html" selected />
          <TreeNode label="card.html" />
        </TreeNode>
        <TreeNode label="index.html" />
      </TreeNode>
      <TreeNode label="public" expanded={false} toggleLabel="public 폴더 펼치기">
        <TreeNode label="favicon.ico" />
      </TreeNode>
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree bordered ariaLabel="파일 탐색기">
      <TreeNode label="src" expanded toggleLabel="src 폴더 접기">
        <TreeNode label="components" expanded toggleLabel="components 폴더 접기">
          <TreeNode label="button.html" selected />
          <TreeNode label="card.html" />
        </TreeNode>
        <TreeNode label="index.html" />
      </TreeNode>
      <TreeNode label="public" expanded={false} toggleLabel="public 폴더 펼치기">
        <TreeNode label="favicon.ico" />
      </TreeNode>
    </Tree>)
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,le;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '간단',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '아이콘 없이 텍스트만 표시하는 트리입니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function SimpleExample() {
  return (
    <Tree ariaLabel="카테고리">
      <TreeNode label="전자기기" expanded toggleLabel="전자기기 접기">
        <TreeNode label="노트북" />
        <TreeNode label="스마트폰" />
      </TreeNode>
      <TreeNode label="의류" />
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree ariaLabel="카테고리">
      <TreeNode label="전자기기" expanded toggleLabel="전자기기 접기">
        <TreeNode label="노트북" />
        <TreeNode label="스마트폰" />
      </TreeNode>
      <TreeNode label="의류" />
    </Tree>)
}`,...(le=(re=_.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,oe,se;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: '연결선',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function LinesExample() {
  return (
    <Tree lines bordered ariaLabel="조직도">
      <TreeNode label="개발본부" expanded toggleLabel="개발본부 접기">
        <TreeNode label="프론트엔드팀" expanded toggleLabel="프론트엔드팀 접기">
          <TreeNode label="홍길동" />
          <TreeNode label="김철수" />
        </TreeNode>
        <TreeNode label="백엔드팀" expanded={false} toggleLabel="백엔드팀 펼치기">
          <TreeNode label="이영희" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="디자인본부" />
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree lines bordered ariaLabel="조직도">
      <TreeNode label="개발본부" expanded toggleLabel="개발본부 접기">
        <TreeNode label="프론트엔드팀" expanded toggleLabel="프론트엔드팀 접기">
          <TreeNode label="홍길동" />
          <TreeNode label="김철수" />
        </TreeNode>
        <TreeNode label="백엔드팀" expanded={false} toggleLabel="백엔드팀 펼치기">
          <TreeNode label="이영희" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="디자인본부" />
    </Tree>)
}`,...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var te,de,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '컴팩트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function CompactExample() {
  return (
    <Tree compact bordered ariaLabel="권한 목록">
      <TreeNode label="관리자" expanded toggleLabel="관리자 접기">
        <TreeNode label="사용자 관리" />
        <TreeNode label="설정 변경" />
        <TreeNode label="로그 조회" />
      </TreeNode>
      <TreeNode label="편집자" expanded={false} toggleLabel="편집자 펼치기">
        <TreeNode label="콘텐츠 작성" />
      </TreeNode>
      <TreeNode label="뷰어" />
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree compact bordered ariaLabel="권한 목록">
      <TreeNode label="관리자" expanded toggleLabel="관리자 접기">
        <TreeNode label="사용자 관리" />
        <TreeNode label="설정 변경" />
        <TreeNode label="로그 조회" />
      </TreeNode>
      <TreeNode label="편집자" expanded={false} toggleLabel="편집자 펼치기">
        <TreeNode label="콘텐츠 작성" />
      </TreeNode>
      <TreeNode label="뷰어" />
    </Tree>)
}`,...(ne=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var ce,ie,be;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: '+/− 토글',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function PlusToggleExample() {
  return (
    <Tree bordered ariaLabel="메뉴 구조">
      <TreeNode label="가이드" expanded plusToggle toggleLabel="가이드 접기">
        <TreeNode label="시작하기" expanded plusToggle toggleLabel="시작하기 접기">
          <TreeNode label="설치" />
          <TreeNode label="빠른 시작" />
        </TreeNode>
        <TreeNode label="컴포넌트" expanded={false} plusToggle toggleLabel="컴포넌트 펼치기">
          <TreeNode label="Button" />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree bordered ariaLabel="메뉴 구조">
      <TreeNode label="가이드" expanded plusToggle toggleLabel="가이드 접기">
        <TreeNode label="시작하기" expanded plusToggle toggleLabel="시작하기 접기">
          <TreeNode label="설치" />
          <TreeNode label="빠른 시작" />
        </TreeNode>
        <TreeNode label="컴포넌트" expanded={false} plusToggle toggleLabel="컴포넌트 펼치기">
          <TreeNode label="Button" />
        </TreeNode>
      </TreeNode>
    </Tree>)
}`,...(be=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:be.source}}};var pe,me,ue;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '체크박스',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function CheckboxExample() {
  return (
    <Tree bordered multiselectable ariaLabel="권한 선택">
      <TreeNode
        label="대시보드"
        expanded
        toggleLabel="대시보드 접기"
        prefix={
          <label className="tree_check">
            <input type="checkbox" defaultChecked aria-label="대시보드" />
          </label>
        }
      >
        <TreeNode
          label="조회"
          prefix={
            <label className="tree_check">
              <input type="checkbox" defaultChecked aria-label="조회" />
            </label>
          }
        />
        <TreeNode
          label="보내기"
          prefix={
            <label className="tree_check">
              <input type="checkbox" aria-label="보내기" />
            </label>
          }
        />
      </TreeNode>
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree bordered multiselectable ariaLabel="권한 선택">
      <TreeNode label="대시보드" expanded toggleLabel="대시보드 접기" prefix={<TreeCheck label="대시보드" defaultChecked />}>
        <TreeNode label="조회" prefix={<TreeCheck label="조회" defaultChecked />} />
        <TreeNode label="보내기" prefix={<TreeCheck label="보내기" />} />
      </TreeNode>
      <TreeNode label="설정" expanded={false} toggleLabel="설정 펼치기" prefix={<TreeCheck label="설정" />}>
        <TreeNode label="사용자 관리" prefix={<TreeCheck label="사용자 관리" />} />
        <TreeNode label="알림 설정" prefix={<TreeCheck label="알림 설정" />} />
      </TreeNode>
    </Tree>)
}`,...(ue=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var Te,ge,xe;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '메타 · 배지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function MetaExample() {
  return (
    <Tree bordered ariaLabel="프로젝트 파일">
      <TreeNode label="assets" meta="3개" expanded toggleLabel="assets 접기" icon={FolderIcon}>
        <TreeNode label="logo.png" meta="24 KB" icon={ImageIcon} />
        <TreeNode label="hero.jpg" meta="1.2 MB" icon={ImageIcon} />
        <TreeNode label="styles.css" meta="8 KB" icon={FileIcon} />
      </TreeNode>
      <TreeNode
        label="package.json"
        icon={FileIcon}
        metaSlot={<Tag color="default" label="수정됨" />}
      />
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree bordered ariaLabel="프로젝트 파일">
      <TreeNode label="assets" meta="3개" expanded toggleLabel="assets 접기" icon={FolderIcon}>
        <TreeNode label="logo.png" meta="24 KB" icon={ImageIcon} />
        <TreeNode label="hero.jpg" meta="1.2 MB" icon={ImageIcon} />
        <TreeNode label="styles.css" meta="8 KB" icon={FileIcon} />
      </TreeNode>
      <TreeNode label="package.json" icon={FileIcon} metaSlot={<Tag color="default" label="수정됨" />} />
    </Tree>)
}`,...(xe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Ne,fe,je;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function DisabledExample() {
  return (
    <Tree bordered ariaLabel="기능 목록">
      <TreeNode label="기본 기능" expanded toggleLabel="기본 기능 접기">
        <TreeNode label="대시보드" />
        <TreeNode label="고급 분석 (Pro)" disabled />
        <TreeNode label="API 연동 (Enterprise)" disabled />
      </TreeNode>
      <TreeNode label="베타 기능" disabled expanded={false} toggleLabel="베타 기능 펼치기">
        <TreeNode label="AI 어시스턴트" disabled />
      </TreeNode>
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree bordered ariaLabel="기능 목록">
      <TreeNode label="기본 기능" expanded toggleLabel="기본 기능 접기">
        <TreeNode label="대시보드" />
        <TreeNode label="고급 분석 (Pro)" disabled />
        <TreeNode label="API 연동 (Enterprise)" disabled />
      </TreeNode>
      <TreeNode label="베타 기능" disabled expanded={false} toggleLabel="베타 기능 펼치기">
        <TreeNode label="AI 어시스턴트" disabled />
      </TreeNode>
    </Tree>)
}`,...(je=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var ke,he,Le;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: '선택 가능',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다.'
      },
      source: {
        code: \`import Tree from '@uxkm/ui-react/components/Tree.jsx';
import TreeNode from '@uxkm/ui-react/components/TreeNode.jsx';

export function SelectableExample() {
  return (
    <Tree bordered ariaLabel="네비게이션">
      <TreeNode label="문서" expanded link toggleLabel="문서 접기">
        <TreeNode label="시작하기" selected link />
        <TreeNode label="컴포넌트" link />
        <TreeNode label="디자인 토큰" link />
      </TreeNode>
      <TreeNode label="변경 이력" link />
    </Tree>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Tree bordered ariaLabel="네비게이션">
      <TreeNode label="문서" expanded link toggleLabel="문서 접기">
        <TreeNode label="시작하기" selected link />
        <TreeNode label="컴포넌트" link />
        <TreeNode label="디자인 토큰" link />
      </TreeNode>
      <TreeNode label="변경 이력" link />
    </Tree>)
}`,...(Le=(he=A.parameters)==null?void 0:he.docs)==null?void 0:Le.source}}};const sr=["Playground","Basic","Simple","Lines","Compact","PlusToggle","Checkbox","Meta","Disabled","Selectable"];export{y as Basic,P as Checkbox,w as Compact,S as Disabled,C as Lines,I as Meta,L as Playground,v as PlusToggle,A as Selectable,_ as Simple,sr as __namedExportsOrder,or as default};
