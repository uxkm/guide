import{r as f,d as Ce,C as Re,n as Le,j as e,B as r,I as Ne,a as P}from"./iframe-Ec8Bs185.js";import{w as Oe}from"./story-renders-Bo_F9MSp.js";import{h as qe,a as Ie}from"./ripple-api-CjGOCEZT.js";import"./preload-helper-DUxc-Dqw.js";const Me=new Set(["sm","md","lg"]),Ve=new Set(["left","right","top","bottom"]),Te={left:"drawer_placement-left",right:"drawer_placement-right",top:"drawer_placement-top",bottom:"drawer_placement-bottom"};function a({ripple:t,id:l,size:E="md",placement:F="right",noBackdrop:S,openOnLoad:C,draggable:R,title:z,open:c,footerAlign:n="end",footerRatio:i="1-1",footerNoPadBottom:A,header:L,extra:O,footer:q,children:ye,className:m,...I}){const M=f.useRef(null),{rippleAttrs:Be}=Ce({ripple:t}),p=Me.has(E)?E:"md",w=Ve.has(F)?F:"right",u=!!(R&&w==="bottom"),V=`${l}-title`;Re({ripple:t,id:l,size:p,placement:w,noBackdrop:S,openOnLoad:C,draggable:R,title:z,open:c,footerAlign:n,footerRatio:i,footerNoPadBottom:A},M,{className:m,...I});const ke=f.useMemo(()=>{const o=["drawer_footer"];return n&&n!=="end"&&o.push(`drawer_footer-${n}`),n==="even"&&i&&i!=="1-1"&&o.push(`drawer_footer-even-${i}`),A&&o.push("drawer_footer-no-pad-b"),o},[n,i,A]),ze=f.useMemo(()=>{const o=["drawer_panel",Te[w]];return p==="sm"&&o.push("drawer_sm"),p==="lg"&&o.push("drawer_lg"),u&&o.push("drawer_draggable"),o},[w,p,u]),Ae=f.useMemo(()=>{const o=["drawer"];return c&&o.push("is-open"),o},[c]),{class:ar,...Pe}=I,Ee=Le(Pe),Fe=!!(L||z),Se=typeof m=="string"&&m.includes("drawer_demo-static");return e.jsxs("div",{ref:M,id:l,className:P(Ae,m),"data-drawer":"","data-drawer-backdrop":S?"false":void 0,"data-drawer-open-on-load":C?"true":void 0,"data-drawer-draggable":u?"true":void 0,role:"dialog","aria-modal":"true","aria-labelledby":V,tabIndex:-1,hidden:Se||c?void 0:!0,...Ee,children:[e.jsx("div",{className:"drawer_backdrop","data-drawer-close":"","aria-hidden":"true"}),e.jsxs("div",{className:P(ze),children:[u?e.jsx("div",{className:"drawer_handle","data-drawer-drag-handle":"",role:"presentation","aria-hidden":"true",children:e.jsx("span",{className:"drawer_handle-bar"})}):null,Fe?e.jsxs("div",{className:"drawer_header","data-demo-slot":"header",children:[L??e.jsx("div",{className:"drawer_title",id:V,role:"heading","aria-level":2,children:z}),O?e.jsx("div",{className:"drawer_extra","data-demo-slot":"extra",children:O}):null,e.jsx(r,{variant:"ghost",iconOnly:!0,className:"drawer_close","data-drawer-close":"",ariaLabel:"닫기",iconBefore:e.jsx(Ne,{name:"close",size:"sm",className:"drawer_close-icon"}),...Be})]}):null,e.jsx("div",{className:"drawer_body","data-demo-slot":"default",children:ye}),q?e.jsx("div",{className:P(ke),"data-demo-slot":"footer",children:q}):null]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},placement:{defaultValue:{value:"'right'",computed:!1},required:!1},footerAlign:{defaultValue:{value:"'end'",computed:!1},required:!1},footerRatio:{defaultValue:{value:"'1-1'",computed:!1},required:!1}}};const He=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],$e=[{name:"id",type:"string",default:"—",description:"루트 id (필수)"},{name:"title",type:"string",default:"—",description:"패널 제목 (drawer_title)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"drawer_sm · drawer_lg"},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",default:"right",description:"drawer_placement-*"},{name:"noBackdrop",type:"boolean",default:"false",description:'data-drawer-backdrop="false"'},{name:"openOnLoad",type:"boolean",default:"false",description:'data-drawer-open-on-load="true"'},{name:"draggable",type:"boolean",default:"false",description:'하단 패널 핸들·헤더 드래그 펼침/접힘 (placement="bottom", data-drawer-draggable)'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open)"},{name:"footerAlign",type:"'start' | 'center' | 'end' | 'between' | 'even'",default:"end",description:"푸터 정렬 (drawer_footer-start · center · between · even). between은 drawer_footer-group으로 좌·우 묶음"},{name:"footerRatio",type:"'1-1' | '1-2' | '2-1'",default:"1-1",description:"균등 정렬(even) 좌·우 비율 (drawer_footer-even-1-2 · even-2-1)"},{name:"footerNoPadBottom",type:"boolean",default:"false",description:"푸터 하단 패딩 제거 (drawer_footer-no-pad-b). even과 함께 쓰면 좌우 패딩·간격도 제거"},{name:"header",type:"ReactNode",default:"—",description:"커스텀 헤더 (title 대체)"},{name:"extra",type:"ReactNode",default:"—",description:"헤더 보조 영역 (drawer_extra)"},{name:"footer",type:"ReactNode",default:"—",description:"하단 액션 영역 (drawer_footer)"},{name:"className",type:"string",default:"—",description:"drawer 루트에 추가 클래스"},qe],Je=[{key:"name",label:"Children"},{key:"description",label:"설명"}],Ze=[{name:"header",description:"헤더 (title 대체)"},{name:"extra",description:"헤더 보조 영역 (drawer_extra)"},{name:"children",description:"본문 (drawer_body, Vue default 슬롯 대응)"},{name:"footer",description:"하단 액션 (drawer_footer)"}],Ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ke=[{name:"drawer · drawer_backdrop · drawer_panel",description:"루트·백드롭·패널"},{name:"drawer_header · drawer_title · drawer_extra · drawer_close",description:"헤더 파트"},{name:"drawer_body · drawer_footer",description:"본문·푸터"},{name:"drawer_footer-start · drawer_footer-center · drawer_footer-end · drawer_footer-between · drawer_footer-even",description:"푸터 정렬 (기본 end)"},{name:"drawer_footer-even-1-2 · drawer_footer-even-2-1",description:"균등 정렬 좌·우 비율 (기본 1:1)"},{name:"drawer_footer-no-pad-b",description:"푸터 하단 패딩 없음 (even 조합 시 좌우 패딩·간격 제거)"},{name:"drawer_footer-group",description:"병합 정렬용 좌·우 버튼 묶음"},{name:"drawer_placement-left · drawer_placement-right · drawer_placement-top · drawer_placement-bottom",description:"슬라이드 방향"},{name:"drawer_sm · drawer_lg",description:"패널 크기"},{name:"drawer_handle · drawer_handle-bar · drawer_draggable",description:"하단 드래그 핸들"},{name:"data-drawer · data-drawer-trigger · data-drawer-close",description:"JS 연동 속성"},{name:"data-drawer-open-on-load",description:"페이지 로드 후 자동 열기"},{name:"data-drawer-draggable · data-drawer-drag-handle",description:"하단 드래그 펼침/접힘"},{name:"is-open · is-opening · is-closing · is-stack-covered · is-expanded · is-dragging · hidden",description:"열림·닫힘·중첩 하위(백드롭 숨김)·드래그·애니메이션 상태"},...Ie],Qe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ue=[{name:"--drawer-z-index",default:"250",description:"레이어 순서"},{name:"--drawer-width · --drawer-width-sm · --drawer-width-lg",default:"24rem · 18rem · 36rem",description:"좌·우 패널 너비"},{name:"--drawer-height · --drawer-height-sm · --drawer-height-lg",default:"18rem · 14rem · 26rem",description:"상·하 패널 높이"},{name:"--drawer-height-expanded",default:"90%",description:"하단 드래그 펼침 높이"},{name:"--drawer-panel-duration-x · --drawer-panel-duration-y",default:"0.32s · 0.36s",description:"좌·우 / 상·하 슬라이드 시간"},{name:"--drawer-panel-easing-x · --drawer-panel-easing-y",default:"cubic-bezier(0.32, 0.72, 0, 1) · cubic-bezier(0.33, 1, 0.68, 1)",description:"방향별 이징"}],We=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 no-backdrop · open-on-load는 noBackdrop · openOnLoad로 다룹니다.",tables:[{columns:He,rows:$e,codeColumn:"name"}]},{title:"API · Children",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:Je,rows:Ze,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ge,rows:Ke,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Qe,rows:Ue,codeColumn:"name"}]}];function Xe(t){return e.jsx("div",{className:"drawer_demo-frame",children:e.jsx("div",{className:"drawer_demo-content",children:t})})}function d(t){const l=()=>Xe(t);return Oe(l,l)}const Ye={id:"story-drawer",size:"md",placement:"right",noBackdrop:!1,openOnLoad:!1,draggable:!1,title:"제목",open:!1,footerAlign:"end",footerRatio:"1-1",footerNoPadBottom:!1},s=e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",label:"취소","data-drawer-close":""}),e.jsx(r,{variant:"filled",color:"primary",label:"확인","data-drawer-close":""})]});function er(t){return t==="between"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"drawer_footer-group",children:e.jsx(r,{variant:"ghost",color:"danger",label:"삭제","data-drawer-close":""})}),e.jsxs("div",{className:"drawer_footer-group",children:[e.jsx(r,{variant:"ghost",label:"취소","data-drawer-close":""}),e.jsx(r,{variant:"filled",color:"primary",label:"확인","data-drawer-close":""})]})]}):s}const lr={title:"Components/피드백/Drawer",id:"components-drawer",component:a,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},placement:{control:"select",options:["left","right","top","bottom"],type:{name:"enum",summary:"'left' | 'right' | 'top' | 'bottom'"}},noBackdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},openOnLoad:{control:"boolean",type:{name:"boolean",summary:"boolean"}},draggable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},footerAlign:{control:"select",options:["start","center","end","between","even"],type:{name:"enum",summary:"'start' | 'center' | 'end' | 'between' | 'even'"}},footerRatio:{control:"select",options:["1-1","1-2","2-1"],type:{name:"enum",summary:"'1-1' | '1-2' | '2-1'"}},footerNoPadBottom:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:We,docs:{description:{component:"측면·상하에서 슬라이드되는 Drawer 패널 컴포넌트입니다."}}}},g={parameters:{controls:{disable:!1}},args:{...Ye},render:t=>e.jsxs("div",{className:"drawer_demo-frame",children:[e.jsx("div",{className:"drawer_demo-content",children:e.jsx("p",{children:"Controls로 open · placement · size · footerAlign · footerRatio · footerNoPadBottom을 조절하세요."})}),e.jsx(a,{...t,className:rr(t.open),footer:er(t.footerAlign),children:e.jsx("p",{children:"드로어 내용입니다."})})]})};function rr(t){return t?"drawer_demo-static":void 0}const x={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function BasicExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="Drawer 열기"
        data-drawer-trigger="#drawer-basic"
        aria-controls="drawer-basic"
      />
      <Drawer
        id="drawer-basic"
        title="기본 Drawer"
        footer={
          <>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="확인"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>Drawer 패널 본문입니다.</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"filled",color:"primary",label:"Drawer 열기","data-drawer-trigger":"#drawer-basic","aria-controls":"drawer-basic"}),e.jsxs(a,{id:"drawer-basic",title:"기본 Drawer",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",label:"취소","data-drawer-close":""}),e.jsx(r,{variant:"filled",color:"primary",label:"확인","data-drawer-close":""})]}),children:[e.jsx("p",{children:"Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다."}),e.jsxs("p",{children:["백드롭을 클릭하거나 닫기 버튼, ",e.jsx("kbd",{children:"Esc"})," 키로 패널을 닫을 수 있습니다."]})]})]}))},b={name:"위치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function PlacementExample() {
  return (
    <>
      <div className="drawer_demo-row">
        <Button
          variant="outline"
          label="왼쪽"
          data-drawer-trigger="#drawer-place-left"
          aria-controls="drawer-place-left"
        />
        <Button
          variant="outline"
          label="오른쪽"
          data-drawer-trigger="#drawer-place-right"
          aria-controls="drawer-place-right"
        />
      </div>
      <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
        <p>화면 왼쪽에서 슬라이드됩니다.</p>
      </Drawer>
      <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
        <p>기본 위치입니다.</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"drawer_demo-row",children:[e.jsx(r,{variant:"outline",label:"왼쪽","data-drawer-trigger":"#drawer-place-left","aria-controls":"drawer-place-left"}),e.jsx(r,{variant:"outline",label:"오른쪽","data-drawer-trigger":"#drawer-place-right","aria-controls":"drawer-place-right"}),e.jsx(r,{variant:"outline",label:"위","data-drawer-trigger":"#drawer-place-top","aria-controls":"drawer-place-top"}),e.jsx(r,{variant:"outline",label:"아래","data-drawer-trigger":"#drawer-place-bottom","aria-controls":"drawer-place-bottom"})]}),e.jsx(a,{id:"drawer-place-left",placement:"left",title:"왼쪽 패널",children:e.jsx("p",{children:"화면 왼쪽에서 슬라이드됩니다."})}),e.jsx(a,{id:"drawer-place-right",placement:"right",title:"오른쪽 패널",children:e.jsx("p",{children:"기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다."})}),e.jsx(a,{id:"drawer-place-top",placement:"top",title:"상단 패널",children:e.jsx("p",{children:"검색·필터 바 등 상단에서 내려오는 패널입니다."})}),e.jsx(a,{id:"drawer-place-bottom",placement:"bottom",title:"하단 패널",children:e.jsx("p",{children:"모바일 액션 시트·공유 패널 등에 적합합니다."})})]}))},v={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function SizeExample() {
  return (
    <div className="drawer_demo-row">
      <Button
        variant="outline"
        size="sm"
        label="Small"
        data-drawer-trigger="#drawer-size-sm"
        aria-controls="drawer-size-sm"
      />
      <Button
        variant="outline"
        label="Default"
        data-drawer-trigger="#drawer-size-default"
        aria-controls="drawer-size-default"
      />
      <Button
        variant="outline"
        size="lg"
        label="Large"
        data-drawer-trigger="#drawer-size-lg"
        aria-controls="drawer-size-lg"
      />
    </div>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"drawer_demo-row",children:[e.jsx(r,{variant:"outline",size:"sm",label:"Small","data-drawer-trigger":"#drawer-size-sm","aria-controls":"drawer-size-sm"}),e.jsx(r,{variant:"outline",label:"Default","data-drawer-trigger":"#drawer-size-default","aria-controls":"drawer-size-default"}),e.jsx(r,{variant:"outline",size:"lg",label:"Large","data-drawer-trigger":"#drawer-size-lg","aria-controls":"drawer-size-lg"})]}),e.jsx(a,{id:"drawer-size-sm",size:"sm",title:"Small",children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"drawer_sm"})," — 좁은 보조 패널"]})}),e.jsx(a,{id:"drawer-size-default",title:"Default",children:e.jsx("p",{children:"기본 너비 24rem"})}),e.jsx(a,{id:"drawer-size-lg",size:"lg",title:"Large",children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"drawer_lg"})," — 넓은 상세·폼 패널"]})})]}))},h={name:"헤더·푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function FooterExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="항목 편집"
        data-drawer-trigger="#drawer-footer"
        aria-controls="drawer-footer"
      />
      <Drawer
        id="drawer-footer"
        title="항목 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="저장"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>폼 본문</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"filled",color:"primary",label:"항목 편집","data-drawer-trigger":"#drawer-footer","aria-controls":"drawer-footer"}),e.jsx(a,{id:"drawer-footer",title:"항목 편집",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",label:"취소","data-drawer-close":""}),e.jsx(r,{variant:"filled",color:"primary",label:"저장","data-drawer-close":""})]}),children:e.jsxs("div",{className:"form_layout form_layout-vertical",children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"drawer-item-name",children:"이름"}),e.jsx("input",{className:"input",type:"text",id:"drawer-item-name",placeholder:"항목 이름"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"drawer-item-desc",children:"설명"}),e.jsx("textarea",{className:"textarea",id:"drawer-item-desc",rows:4,placeholder:"간단한 설명"})]})]})})]}))},_={name:"푸터 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"footerAlign으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footerRatio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footerNoPadBottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function FooterAlignExample() {
  return (
    <>
      <Drawer
        id="drawer-footer-start"
        title="좌측 정렬"
        placement="bottom"
        footerAlign="start"
        footer={/* … */}
      >
        <p>footerAlign="start"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-center"
        title="가운데 정렬"
        placement="bottom"
        footerAlign="center"
        footer={/* … */}
      >
        <p>footerAlign="center"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-end"
        title="우측 정렬"
        placement="bottom"
        footer={/* … */}
      >
        <p>footerAlign="end" (기본)</p>
      </Drawer>
      <Drawer
        id="drawer-footer-between"
        title="병합 정렬"
        placement="bottom"
        footerAlign="between"
        footer={/* … */}
      >
        <p>footerAlign="between" + drawer_footer-group</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even"
        title="균등 1:1"
        placement="bottom"
        footerAlign="even"
        footer={/* … */}
      >
        <p>footerAlign="even" · footerRatio="1-1"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even-1-2"
        title="균등 1:2"
        placement="bottom"
        footerAlign="even"
        footerRatio="1-2"
        footer={/* … */}
      >
        <p>footerRatio="1-2" — 좌 1 / 우 2</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even-2-1"
        title="균등 2:1"
        placement="bottom"
        footerAlign="even"
        footerRatio="2-1"
        footer={/* … */}
      >
        <p>footerRatio="2-1" — 좌 2 / 우 1</p>
      </Drawer>
      <Drawer
        id="drawer-footer-no-pad"
        title="하단 패딩 없음"
        placement="bottom"
        footerAlign="even"
        footerNoPadBottom
        footer={/* … */}
      >
        <p>footerNoPadBottom + even</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:()=>e.jsxs("div",{className:"drawer_demo-stack",children:[e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-start",title:"좌측 정렬",placement:"bottom",footerAlign:"start",className:"drawer_demo-static",footer:s,children:e.jsx("p",{children:e.jsx("code",{className:"typo_code",children:'footerAlign="start"'})})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-center",title:"가운데 정렬",placement:"bottom",footerAlign:"center",className:"drawer_demo-static",footer:s,children:e.jsx("p",{children:e.jsx("code",{className:"typo_code",children:'footerAlign="center"'})})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-end",title:"우측 정렬",placement:"bottom",className:"drawer_demo-static",footer:s,children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:'footerAlign="end"'})," ","(기본)"]})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-between",title:"병합 정렬",placement:"bottom",footerAlign:"between",className:"drawer_demo-static",footer:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"drawer_footer-group",children:e.jsx(r,{variant:"ghost",color:"danger",label:"삭제","data-drawer-close":""})}),e.jsxs("div",{className:"drawer_footer-group",children:[e.jsx(r,{variant:"ghost",label:"취소","data-drawer-close":""}),e.jsx(r,{variant:"filled",color:"primary",label:"확인","data-drawer-close":""})]})]}),children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"between"})," — 좌 1 / 우 2"]})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-between-2",title:"병합 정렬",placement:"bottom",footerAlign:"between",className:"drawer_demo-static",footer:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"drawer_footer-group",children:[e.jsx(r,{variant:"ghost",label:"도움말","data-drawer-close":""}),e.jsx(r,{variant:"ghost",color:"danger",label:"삭제","data-drawer-close":""})]}),e.jsx("div",{className:"drawer_footer-group",children:e.jsx(r,{variant:"filled",color:"primary",label:"확인","data-drawer-close":""})})]}),children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"between"})," — 좌 2 / 우 1"]})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-even",title:"균등 1:1",placement:"bottom",footerAlign:"even",className:"drawer_demo-static",footer:s,children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"even"})," ·"," ",e.jsx("code",{className:"typo_code",children:'footerRatio="1-1"'})]})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-even-1-2",title:"균등 1:2",placement:"bottom",footerAlign:"even",footerRatio:"1-2",className:"drawer_demo-static",footer:s,children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:'footerRatio="1-2"'})," — 좌 1 / 우 2"]})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-even-2-1",title:"균등 2:1",placement:"bottom",footerAlign:"even",footerRatio:"2-1",className:"drawer_demo-static",footer:s,children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:'footerRatio="2-1"'})," — 좌 2 / 우 1"]})})}),e.jsx("div",{className:"drawer_demo-frame drawer_demo-frame-compact",children:e.jsx(a,{id:"drawer-footer-no-pad",title:"하단 패딩 없음",placement:"bottom",footerAlign:"even",footerNoPadBottom:!0,className:"drawer_demo-static",footer:s,children:e.jsxs("p",{children:[e.jsx("code",{className:"typo_code",children:"footerNoPadBottom"})," + even"]})})})]})},D={name:"헤더 추가 영역",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function ExtraExample() {
  return (
    <>
      <Button
        variant="outline"
        label="상세 보기"
        data-drawer-trigger="#drawer-extra"
        aria-controls="drawer-extra"
      />
      <Drawer
        id="drawer-extra"
        title="주문 #1042"
        extra={<span className="tag tag_solid color_success">완료</span>}
      >
        <p>상세 정보</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",label:"상세 보기","data-drawer-trigger":"#drawer-extra","aria-controls":"drawer-extra"}),e.jsx(a,{id:"drawer-extra",title:"주문 #1042",extra:e.jsx("span",{className:"tag tag_solid color_success",children:"완료"}),children:e.jsxs("p",{children:["상세 정보·상태 뱃지 등을 헤더"," ",e.jsx("code",{className:"typo_code",children:"drawer_extra"}),"에 배치할 수 있습니다."]})})]}))},j={name:"메뉴",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function MenuExample() {
  return (
    <>
      <Button
        variant="outline"
        iconOnly
        ariaLabel="메뉴 열기"
        data-drawer-trigger="#drawer-menu"
        aria-controls="drawer-menu"
        iconBefore={<Icon name="menu" />}
      />
      <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
        <p>메뉴 본문</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",iconOnly:!0,ariaLabel:"메뉴 열기","data-drawer-trigger":"#drawer-menu","aria-controls":"drawer-menu",iconBefore:e.jsx(Ne,{name:"menu"})}),e.jsx(a,{id:"drawer-menu",placement:"left",title:"앱 메뉴",children:e.jsx("nav",{className:"menu menu_vertical menu_compact","aria-label":"앱 메뉴",children:e.jsxs("ul",{className:"menu_list",children:[e.jsx("li",{className:"menu_item",children:e.jsx("a",{href:"#dashboard",className:"menu_link is-active","aria-current":"page",children:e.jsx("span",{className:"menu_label",children:"대시보드"})})}),e.jsx("li",{className:"menu_item",children:e.jsx("a",{href:"#analytics",className:"menu_link",children:e.jsx("span",{className:"menu_label",children:"분석"})})}),e.jsx("li",{className:"menu_item",children:e.jsx("a",{href:"#settings",className:"menu_link",children:e.jsx("span",{className:"menu_label",children:"설정"})})})]})})})]}))},N={name:"로드 시 자동 열기 (옵션)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'data-drawer-open-on-load="true"를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다. (Docs에서는 미리보기를 가리지 않도록 수동 트리거로 확인합니다.)'},source:{code:`import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function OpenOnLoadExample() {
  return (
    <Drawer
      id="drawer-open-on-load"
      size="sm"
      title="자동 열기 옵션"
      openOnLoad
    >
      <p>페이지 로드 후 자동으로 열립니다.</p>
    </Drawer>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"form_field-hint",children:[e.jsx("code",{className:"typo_code",children:"openOnLoad"})," /"," ",e.jsx("code",{className:"typo_code",children:'data-drawer-open-on-load="true"'})," ","— 가이드 페이지에서 자동 열기를 확인할 수 있습니다."]}),e.jsx(r,{variant:"outline",size:"sm",label:"옵션 패널 미리보기","data-drawer-trigger":"#drawer-open-on-load","aria-controls":"drawer-open-on-load"}),e.jsx(a,{id:"drawer-open-on-load",size:"sm",title:"자동 열기 옵션",children:e.jsxs("p",{children:["실서비스에서는 온보딩·공지 등에"," ",e.jsx("code",{className:"typo_code",children:"openOnLoad"}),"를 사용합니다."]})})]}))},y={name:"중첩 Drawer",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function NestedExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="중첩 예시 열기"
        data-drawer-trigger="#drawer-nested-1"
        aria-controls="drawer-nested-1"
      />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <Button
          variant="outline"
          label="2단계 열기"
          data-drawer-trigger="#drawer-nested-2"
          aria-controls="drawer-nested-2"
        />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다.</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",label:"중첩 예시 열기","data-drawer-trigger":"#drawer-nested-1","aria-controls":"drawer-nested-1"}),e.jsxs(a,{id:"drawer-nested-1",title:"1단계 Drawer",children:[e.jsx("p",{children:"다음 단계 Drawer를 열어 중첩 동작을 확인하세요."}),e.jsx(r,{variant:"outline",label:"2단계 열기","data-drawer-trigger":"#drawer-nested-2","aria-controls":"drawer-nested-2"})]}),e.jsx(a,{id:"drawer-nested-2",size:"sm",title:"2단계 Drawer",footer:e.jsx(r,{variant:"filled",color:"primary",label:"완료","data-drawer-close":""}),children:e.jsxs("p",{children:["중첩된 Drawer입니다. ",e.jsx("kbd",{children:"Esc"}),"를 누르면 이 패널부터 닫힙니다."]})})]}))},B={name:"하단 드래그 시트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'placement="bottom" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.'},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function DragSheetExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="드래그 시트 열기"
        data-drawer-trigger="#drawer-drag"
        aria-controls="drawer-drag"
      />
      <Drawer
        id="drawer-drag"
        placement="bottom"
        draggable
        title="공유 · 액션"
        footer={
          <>
            <Button variant="ghost" label="닫기" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="공유"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>
          상단 핸들이나 헤더를 위로 드래그하면 펼쳐지고, 아래로 드래그하면
          접히거나 닫힙니다.
        </p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"form_field-hint",children:"핸들 또는 제목 영역을 위·아래로 드래그(터치 슬라이드)해 보세요."}),e.jsx(r,{variant:"filled",color:"primary",label:"드래그 시트 열기","data-drawer-trigger":"#drawer-drag","aria-controls":"drawer-drag"}),e.jsxs(a,{id:"drawer-drag",placement:"bottom",draggable:!0,title:"공유 · 액션",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",label:"닫기","data-drawer-close":""}),e.jsx(r,{variant:"filled",color:"primary",label:"공유","data-drawer-close":""})]}),children:[e.jsxs("p",{children:["상단 핸들이나 헤더를 ",e.jsx("strong",{children:"위로"})," 드래그하면 시트가 펼쳐집니다."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"아래로"})," 드래그하면 기본 높이로 접히고, 더 내리면 닫힙니다."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"링크 복사"}),e.jsx("li",{children:"메시지 보내기"}),e.jsx("li",{children:"다른 앱으로 공유"})]})]})]}))},k={name:"백드롭 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'data-drawer-backdrop="false"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.'},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function NoBackdropExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-drawer-trigger="#drawer-no-backdrop"
        aria-controls="drawer-no-backdrop"
      />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" noBackdrop>
        <p>본문을 가리지 않고 패널만 표시합니다.</p>
      </Drawer>
    </>
  );
}`,language:"tsx"}}},render:d(e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",label:"백드롭 없이 열기","data-drawer-trigger":"#drawer-no-backdrop","aria-controls":"drawer-no-backdrop"}),e.jsx(a,{id:"drawer-no-backdrop",size:"sm",title:"백드롭 없음",noBackdrop:!0,children:e.jsxs("p",{children:["본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 ",e.jsx("kbd",{children:"Esc"}),"로 닫으세요."]})})]}))};var T,H,$;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="drawer_demo-frame">
      <div className="drawer_demo-content">
        <p>
          Controls로 open · placement · size · footerAlign · footerRatio ·
          footerNoPadBottom을 조절하세요.
        </p>
      </div>
      <Drawer {...args} className={cnOpen(args.open)} footer={playgroundFooter(args.footerAlign)}>
        <p>드로어 내용입니다.</p>
      </Drawer>
    </div>
}`,...($=(H=g.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var J,Z,G;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        story: 'data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function BasicExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="Drawer 열기"
        data-drawer-trigger="#drawer-basic"
        aria-controls="drawer-basic"
      />
      <Drawer
        id="drawer-basic"
        title="기본 Drawer"
        footer={
          <>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="확인"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>Drawer 패널 본문입니다.</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <Button variant="filled" color="primary" label="Drawer 열기" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" />
      <Drawer id="drawer-basic" title="기본 Drawer" footer={<>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button variant="filled" color="primary" label="확인" data-drawer-close="" />
          </>}>
        <p>
          Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.
        </p>
        <p>
          백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수
          있습니다.
        </p>
      </Drawer>
    </>)
}`,...(G=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '위치',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function PlacementExample() {
  return (
    <>
      <div className="drawer_demo-row">
        <Button
          variant="outline"
          label="왼쪽"
          data-drawer-trigger="#drawer-place-left"
          aria-controls="drawer-place-left"
        />
        <Button
          variant="outline"
          label="오른쪽"
          data-drawer-trigger="#drawer-place-right"
          aria-controls="drawer-place-right"
        />
      </div>
      <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
        <p>화면 왼쪽에서 슬라이드됩니다.</p>
      </Drawer>
      <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
        <p>기본 위치입니다.</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <div className="drawer_demo-row">
        <Button variant="outline" label="왼쪽" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" />
        <Button variant="outline" label="오른쪽" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" />
        <Button variant="outline" label="위" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" />
        <Button variant="outline" label="아래" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" />
      </div>
      <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
        <p>화면 왼쪽에서 슬라이드됩니다.</p>
      </Drawer>
      <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
        <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
      </Drawer>
      <Drawer id="drawer-place-top" placement="top" title="상단 패널">
        <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
      </Drawer>
      <Drawer id="drawer-place-bottom" placement="bottom" title="하단 패널">
        <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
      </Drawer>
    </>)
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        story: 'drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function SizeExample() {
  return (
    <div className="drawer_demo-row">
      <Button
        variant="outline"
        size="sm"
        label="Small"
        data-drawer-trigger="#drawer-size-sm"
        aria-controls="drawer-size-sm"
      />
      <Button
        variant="outline"
        label="Default"
        data-drawer-trigger="#drawer-size-default"
        aria-controls="drawer-size-default"
      />
      <Button
        variant="outline"
        size="lg"
        label="Large"
        data-drawer-trigger="#drawer-size-lg"
        aria-controls="drawer-size-lg"
      />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <div className="drawer_demo-row">
        <Button variant="outline" size="sm" label="Small" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" />
        <Button variant="outline" label="Default" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" />
        <Button variant="outline" size="lg" label="Large" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" />
      </div>
      <Drawer id="drawer-size-sm" size="sm" title="Small">
        <p>
          <code className="typo_code">drawer_sm</code> — 좁은 보조 패널
        </p>
      </Drawer>
      <Drawer id="drawer-size-default" title="Default">
        <p>기본 너비 24rem</p>
      </Drawer>
      <Drawer id="drawer-size-lg" size="lg" title="Large">
        <p>
          <code className="typo_code">drawer_lg</code> — 넓은 상세·폼 패널
        </p>
      </Drawer>
    </>)
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '헤더·푸터',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function FooterExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="항목 편집"
        data-drawer-trigger="#drawer-footer"
        aria-controls="drawer-footer"
      />
      <Drawer
        id="drawer-footer"
        title="항목 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="저장"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>폼 본문</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <Button variant="filled" color="primary" label="항목 편집" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" />
      <Drawer id="drawer-footer" title="항목 편집" footer={<>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button variant="filled" color="primary" label="저장" data-drawer-close="" />
          </>}>
        <div className="form_layout form_layout-vertical">
          <div className="form_field">
            <label className="form_field-label" htmlFor="drawer-item-name">
              이름
            </label>
            <input className="input" type="text" id="drawer-item-name" placeholder="항목 이름" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="drawer-item-desc">
              설명
            </label>
            <textarea className="textarea" id="drawer-item-desc" rows={4} placeholder="간단한 설명" />
          </div>
        </div>
      </Drawer>
    </>)
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,de;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '푸터 정렬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'footerAlign으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footerRatio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footerNoPadBottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function FooterAlignExample() {
  return (
    <>
      <Drawer
        id="drawer-footer-start"
        title="좌측 정렬"
        placement="bottom"
        footerAlign="start"
        footer={/* … */}
      >
        <p>footerAlign="start"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-center"
        title="가운데 정렬"
        placement="bottom"
        footerAlign="center"
        footer={/* … */}
      >
        <p>footerAlign="center"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-end"
        title="우측 정렬"
        placement="bottom"
        footer={/* … */}
      >
        <p>footerAlign="end" (기본)</p>
      </Drawer>
      <Drawer
        id="drawer-footer-between"
        title="병합 정렬"
        placement="bottom"
        footerAlign="between"
        footer={/* … */}
      >
        <p>footerAlign="between" + drawer_footer-group</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even"
        title="균등 1:1"
        placement="bottom"
        footerAlign="even"
        footer={/* … */}
      >
        <p>footerAlign="even" · footerRatio="1-1"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even-1-2"
        title="균등 1:2"
        placement="bottom"
        footerAlign="even"
        footerRatio="1-2"
        footer={/* … */}
      >
        <p>footerRatio="1-2" — 좌 1 / 우 2</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even-2-1"
        title="균등 2:1"
        placement="bottom"
        footerAlign="even"
        footerRatio="2-1"
        footer={/* … */}
      >
        <p>footerRatio="2-1" — 좌 2 / 우 1</p>
      </Drawer>
      <Drawer
        id="drawer-footer-no-pad"
        title="하단 패딩 없음"
        placement="bottom"
        footerAlign="even"
        footerNoPadBottom
        footer={/* … */}
      >
        <p>footerNoPadBottom + even</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: () => <div className="drawer_demo-stack">
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-start" title="좌측 정렬" placement="bottom" footerAlign="start" className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">footerAlign=&quot;start&quot;</code>
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-center" title="가운데 정렬" placement="bottom" footerAlign="center" className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">footerAlign=&quot;center&quot;</code>
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-end" title="우측 정렬" placement="bottom" className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">footerAlign=&quot;end&quot;</code>{' '}
            (기본)
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-between" title="병합 정렬" placement="bottom" footerAlign="between" className="drawer_demo-static" footer={<>
              <div className="drawer_footer-group">
                <Button variant="ghost" color="danger" label="삭제" data-drawer-close="" />
              </div>
              <div className="drawer_footer-group">
                <Button variant="ghost" label="취소" data-drawer-close="" />
                <Button variant="filled" color="primary" label="확인" data-drawer-close="" />
              </div>
            </>}>
          <p>
            <code className="typo_code">between</code> — 좌 1 / 우 2
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-between-2" title="병합 정렬" placement="bottom" footerAlign="between" className="drawer_demo-static" footer={<>
              <div className="drawer_footer-group">
                <Button variant="ghost" label="도움말" data-drawer-close="" />
                <Button variant="ghost" color="danger" label="삭제" data-drawer-close="" />
              </div>
              <div className="drawer_footer-group">
                <Button variant="filled" color="primary" label="확인" data-drawer-close="" />
              </div>
            </>}>
          <p>
            <code className="typo_code">between</code> — 좌 2 / 우 1
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-even" title="균등 1:1" placement="bottom" footerAlign="even" className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">even</code> ·{' '}
            <code className="typo_code">footerRatio=&quot;1-1&quot;</code>
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-even-1-2" title="균등 1:2" placement="bottom" footerAlign="even" footerRatio="1-2" className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">footerRatio=&quot;1-2&quot;</code> — 좌
            1 / 우 2
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-even-2-1" title="균등 2:1" placement="bottom" footerAlign="even" footerRatio="2-1" className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">footerRatio=&quot;2-1&quot;</code> — 좌
            2 / 우 1
          </p>
        </Drawer>
      </div>
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer id="drawer-footer-no-pad" title="하단 패딩 없음" placement="bottom" footerAlign="even" footerNoPadBottom className="drawer_demo-static" footer={cancelConfirmFooter}>
          <p>
            <code className="typo_code">footerNoPadBottom</code> + even
          </p>
        </Drawer>
      </div>
    </div>
}`,...(de=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,le,ne;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '헤더 추가 영역',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function ExtraExample() {
  return (
    <>
      <Button
        variant="outline"
        label="상세 보기"
        data-drawer-trigger="#drawer-extra"
        aria-controls="drawer-extra"
      />
      <Drawer
        id="drawer-extra"
        title="주문 #1042"
        extra={<span className="tag tag_solid color_success">완료</span>}
      >
        <p>상세 정보</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <Button variant="outline" label="상세 보기" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" />
      <Drawer id="drawer-extra" title="주문 #1042" extra={<span className="tag tag_solid color_success">완료</span>}>
        <p>
          상세 정보·상태 뱃지 등을 헤더{' '}
          <code className="typo_code">drawer_extra</code>에 배치할 수 있습니다.
        </p>
      </Drawer>
    </>)
}`,...(ne=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,ce,me;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: '메뉴',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function MenuExample() {
  return (
    <>
      <Button
        variant="outline"
        iconOnly
        ariaLabel="메뉴 열기"
        data-drawer-trigger="#drawer-menu"
        aria-controls="drawer-menu"
        iconBefore={<Icon name="menu" />}
      />
      <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
        <p>메뉴 본문</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <Button variant="outline" iconOnly ariaLabel="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu" iconBefore={<Icon name="menu" />} />
      <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
        <nav className="menu menu_vertical menu_compact" aria-label="앱 메뉴">
          <ul className="menu_list">
            <li className="menu_item">
              <a href="#dashboard" className="menu_link is-active" aria-current="page">
                <span className="menu_label">대시보드</span>
              </a>
            </li>
            <li className="menu_item">
              <a href="#analytics" className="menu_link">
                <span className="menu_label">분석</span>
              </a>
            </li>
            <li className="menu_item">
              <a href="#settings" className="menu_link">
                <span className="menu_label">설정</span>
              </a>
            </li>
          </ul>
        </nav>
      </Drawer>
    </>)
}`,...(me=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,we,ue;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '로드 시 자동 열기 (옵션)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'data-drawer-open-on-load="true"를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다. (Docs에서는 미리보기를 가리지 않도록 수동 트리거로 확인합니다.)'
      },
      source: {
        code: \`import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function OpenOnLoadExample() {
  return (
    <Drawer
      id="drawer-open-on-load"
      size="sm"
      title="자동 열기 옵션"
      openOnLoad
    >
      <p>페이지 로드 후 자동으로 열립니다.</p>
    </Drawer>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <p className="form_field-hint">
        <code className="typo_code">openOnLoad</code> /{' '}
        <code className="typo_code">
          data-drawer-open-on-load=&quot;true&quot;
        </code>{' '}
        — 가이드 페이지에서 자동 열기를 확인할 수 있습니다.
      </p>
      <Button variant="outline" size="sm" label="옵션 패널 미리보기" data-drawer-trigger="#drawer-open-on-load" aria-controls="drawer-open-on-load" />
      <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션">
        <p>
          실서비스에서는 온보딩·공지 등에{' '}
          <code className="typo_code">openOnLoad</code>를 사용합니다.
        </p>
      </Drawer>
    </>)
}`,...(ue=(we=N.parameters)==null?void 0:we.docs)==null?void 0:ue.source}}};var fe,ge,xe;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: '중첩 Drawer',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function NestedExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="중첩 예시 열기"
        data-drawer-trigger="#drawer-nested-1"
        aria-controls="drawer-nested-1"
      />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <Button
          variant="outline"
          label="2단계 열기"
          data-drawer-trigger="#drawer-nested-2"
          aria-controls="drawer-nested-2"
        />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다.</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <Button variant="ghost" label="중첩 예시 열기" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
        <Button variant="outline" label="2단계 열기" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer" footer={<Button variant="filled" color="primary" label="완료" data-drawer-close="" />}>
        <p>
          중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.
        </p>
      </Drawer>
    </>)
}`,...(xe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,ve,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '하단 드래그 시트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'placement="bottom" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function DragSheetExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="드래그 시트 열기"
        data-drawer-trigger="#drawer-drag"
        aria-controls="drawer-drag"
      />
      <Drawer
        id="drawer-drag"
        placement="bottom"
        draggable
        title="공유 · 액션"
        footer={
          <>
            <Button variant="ghost" label="닫기" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="공유"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>
          상단 핸들이나 헤더를 위로 드래그하면 펼쳐지고, 아래로 드래그하면
          접히거나 닫힙니다.
        </p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <p className="form_field-hint">
        핸들 또는 제목 영역을 위·아래로 드래그(터치 슬라이드)해 보세요.
      </p>
      <Button variant="filled" color="primary" label="드래그 시트 열기" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" />
      <Drawer id="drawer-drag" placement="bottom" draggable title="공유 · 액션" footer={<>
            <Button variant="ghost" label="닫기" data-drawer-close="" />
            <Button variant="filled" color="primary" label="공유" data-drawer-close="" />
          </>}>
        <p>
          상단 핸들이나 헤더를 <strong>위로</strong> 드래그하면 시트가
          펼쳐집니다.
        </p>
        <p>
          <strong>아래로</strong> 드래그하면 기본 높이로 접히고, 더 내리면
          닫힙니다.
        </p>
        <ul>
          <li>링크 복사</li>
          <li>메시지 보내기</li>
          <li>다른 앱으로 공유</li>
        </ul>
      </Drawer>
    </>)
}`,...(he=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var _e,De,je;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: '백드롭 없음',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'data-drawer-backdrop="false"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Drawer from '@uxkm/ui-react/components/Drawer.jsx';

export function NoBackdropExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-drawer-trigger="#drawer-no-backdrop"
        aria-controls="drawer-no-backdrop"
      />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" noBackdrop>
        <p>본문을 가리지 않고 패널만 표시합니다.</p>
      </Drawer>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: drawerDemo(<>
      <Button variant="ghost" label="백드롭 없이 열기" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" noBackdrop>
        <p>
          본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로
          닫으세요.
        </p>
      </Drawer>
    </>)
}`,...(je=(De=k.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};const nr=["Playground","Basic","Placement","Size","Footer","FooterAlign","Extra","Menu","OpenOnLoad","Nested","DragSheet","NoBackdrop"];export{x as Basic,B as DragSheet,D as Extra,h as Footer,_ as FooterAlign,j as Menu,y as Nested,k as NoBackdrop,N as OpenOnLoad,b as Placement,g as Playground,v as Size,nr as __namedExportsOrder,lr as default};
