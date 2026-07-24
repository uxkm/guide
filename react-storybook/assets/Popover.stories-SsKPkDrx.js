import{r as b,G as Xe,n as Ye,j as e,B as o,I as $,a as ee}from"./iframe-ifEc15ad.js";import{L as Me}from"./Link-D9Mr3lkf.js";import{u as eo,o as oo,p as ro}from"./overlay-panel-align-BR2p5lTq.js";import{T as ao}from"./Textarea-B9fu9QmZ.js";import{w as I}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const to=new Set(["top","top-center","bottom-center","left","right","end"]),po=new Set(["sm","md","lg"]),no=new Set(["content","target","mixed"]),so=new Set(["click","hover"]);function r({placement:t,size:l="md",offset:E="md",offsetTop:O,offsetRight:D,offsetBottom:R,offsetLeft:F,open:i,noArrow:v,arrowAnchor:G="content",panelAlign:s="start",arrowTargetAlign:c="center",disabled:V,trigger:U="click",title:m,panelLabel:d,interactive:u=!0,closable:W,closeLabel:H="닫기",triggerContent:$e,footer:J,children:Ge,className:Z,...K}){const q=b.useRef(null),x=`popover-${b.useId().replace(/:/g,"")}`,h=po.has(l)?l:"md",n=no.has(G)?G:"content",f=so.has(U)?U:"click";Xe({placement:t,size:h,offset:E,offsetTop:O,offsetRight:D,offsetBottom:R,offsetLeft:F,open:i,noArrow:v,arrowAnchor:n,panelAlign:s,arrowTargetAlign:c,disabled:V,trigger:f,title:typeof m=="string"?m:void 0,panelLabel:d,interactive:u,closable:W,closeLabel:H},q,{className:Z,...K}),eo(q,{noArrow:v,arrowAnchor:n,panelAlign:s,arrowTargetAlign:c,open:i,placement:t},"popover");const Ue=b.useMemo(()=>{const a=["popover"];return h==="sm"&&a.push("popover_sm"),h==="lg"&&a.push("popover_lg"),a.push(...oo("popover",{offset:E,offsetTop:O,offsetRight:D,offsetBottom:R,offsetLeft:F})),a.push(...ro("popover",s,"start")),v&&a.push("popover_no-arrow"),n==="target"&&a.push("popover_arrow-anchor-target"),n==="mixed"&&a.push("popover_arrow-anchor-mixed"),t&&to.has(t)&&a.push(`popover_placement-${t}`),i&&a.push("is-open"),V&&a.push("is-disabled"),a},[h,E,O,D,R,F,s,v,n,t,i,V]),We=b.useMemo(()=>{const a={};return u&&(a["data-popover"]=""),f==="hover"&&(a["data-popover-trigger"]="hover"),(n==="mixed"||s!=="start")&&(a["data-panel-align"]=s),(n==="target"||n==="mixed")&&c!=="center"&&(a["data-arrow-target-align"]=c),a},[u,f,n,s,c]),Je=u?void 0:!i||void 0,Q=W??f==="click",g=!!m,M=Q&&(g||!!d),X=Q&&!g&&!d,Y=g||M?`${x}-title`:void 0,Ze=Y?void 0:d||void 0,{class:Po,...Ke}=K,Qe=Ye(Ke);return e.jsxs("div",{ref:q,className:ee(Ue,Z),...We,...Qe,children:[$e,e.jsxs("div",{id:x,className:ee("popover_panel",X&&"popover_panel-closable"),role:"dialog","aria-label":Ze,"aria-labelledby":Y,hidden:Je,children:[e.jsx("span",{className:"popover_arrow","aria-hidden":"true"}),M?e.jsxs("div",{className:"popover_header",children:[e.jsx("div",{id:`${x}-title`,className:"popover_title",children:g?m:d}),e.jsx(o,{variant:"ghost",iconOnly:!0,className:"popover_close","data-popover-close":"",ariaLabel:H,iconBefore:e.jsx($,{name:"close",size:"sm",className:"popover_close-icon"})})]}):null,!M&&g?e.jsx("div",{id:`${x}-title`,className:"popover_title",children:m}):null,X?e.jsx(o,{variant:"ghost",iconOnly:!0,className:"popover_close popover_close-floating","data-popover-close":"",ariaLabel:H,iconBefore:e.jsx($,{name:"close",size:"sm",className:"popover_close-icon"})}):null,e.jsx("div",{className:"popover_body",children:Ge}),J?e.jsx("div",{className:"popover_footer",children:J}):null]})]})}r.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},offset:{defaultValue:{value:"'md'",computed:!1},required:!1},arrowAnchor:{defaultValue:{value:"'content'",computed:!1},required:!1},panelAlign:{defaultValue:{value:"'start'",computed:!1},required:!1},arrowTargetAlign:{defaultValue:{value:"'center'",computed:!1},required:!1},trigger:{defaultValue:{value:"'click'",computed:!1},required:!1},interactive:{defaultValue:{value:"true",computed:!1},required:!1},closeLabel:{defaultValue:{value:"'닫기'",computed:!1},required:!1}}};const lo=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],io=[{name:"placement",type:"'top' | 'top-center' | 'bottom-center' | 'left' | 'right' | 'end'",default:"—",description:"popover_placement-*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"popover_sm · popover_lg"},{name:"offset",type:"'none' | 'sm' | 'md' | 'lg'",default:"md",description:"전 방향 동일 간격. popover_offset-* · --popover-offset"},{name:"offset-top · offset-right · offset-bottom · offset-left",type:"'none' | 'sm' | 'md' | 'lg'",default:"—",description:"방향별 간격. popover_offset-top-* 등 · --popover-offset-*"},{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"no-arrow",type:"boolean",default:"false",description:"화살표 숨김"},{name:"arrow-anchor",type:"'content' | 'target' | 'mixed'",default:"content",description:"화살표 기준. target=화살표만, mixed=패널·화살표 독립"},{name:"panel-align",type:"'start' | 'center' | 'end'",default:"start",description:"패널 교차축 정렬. popover_panel-align-* · data-panel-align"},{name:"arrow-target-align",type:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'",default:"center",description:"target·mixed 시 트리거 내 화살표 위치"},{name:"disabled",type:"boolean",default:"false",description:"트리거 비활성 (is-disabled)"},{name:"trigger",type:"'click' | 'hover'",default:"click",description:'hover 시 data-popover-trigger="hover"'},{name:"closable",type:"boolean",default:"click 시 true",description:"패널 닫기 버튼. hover 트리거는 기본 false"},{name:"close-label",type:"string",default:"닫기",description:"닫기 버튼 aria-label"},{name:"title",type:"string",default:"—",description:"패널 제목"},{name:"panel-label",type:"string",default:"—",description:"패널 aria-label. 클릭 트리거 시 헤더에 제목으로 표시"},{name:"interactive",type:"boolean",default:"true",description:"false면 data-popover 미부여 (정적 데모)"}],co=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],mo=[{name:"popover · popover_panel · popover_arrow",description:"루트·패널·화살표"},{name:"popover_header · popover_title · popover_close · popover_body · popover_footer",description:"패널 파트"},{name:"popover_sm · popover_lg · popover_no-arrow",description:"크기·화살표"},{name:"popover_panel-align-center · popover_panel-align-end",description:"패널 교차축 정렬"},{name:"popover_arrow-anchor-target · popover_arrow-anchor-mixed",description:"화살표·혼합 기준"},{name:"popover_offset-none · popover_offset-sm · popover_offset-lg",description:"전 방향 간격"},{name:"popover_offset-top-* · popover_offset-right-* · popover_offset-bottom-* · popover_offset-left-*",description:"방향별 간격"},{name:"popover_placement-*",description:"배치 변형"},{name:"data-popover · data-popover-trigger · data-popover-close · data-panel-align · data-arrow-target-align",description:"JS 연동"},{name:"is-open · is-disabled · hidden",description:"상태"}],go=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],vo=[{name:"--popover-min-width · --popover-max-width",default:"10rem · 20rem",description:"패널 너비"},{name:"--popover-padding-x · --popover-padding-y",default:"var(--space-md)",description:"패널 패딩"},{name:"--popover-offset · --popover-offset-sm · --popover-offset-md · --popover-offset-lg",default:"var(--space-sm) · …",description:"전 방향 간격 토큰"},{name:"--popover-offset-top · --popover-offset-right · --popover-offset-bottom · --popover-offset-left",default:"offset 상속",description:"방향별 간격 (배치에 따라 적용)"},{name:"--popover-arrow-size",default:"8px",description:"화살표 크기"},{name:"--popover-panel-radius · --popover-arrow-edge-inset",default:"12px · calc",description:"패널 라운드·화살표 가장자리 여백"},{name:"--popover-arrow-position",default:"—",description:"target 기준 시 트리거 중앙 위치(px)"}],uo=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],xo=[{name:"triggerContent",description:"트리거 (Vue #trigger 슬롯)"},{name:"title",description:"제목 (문자열·노드, Vue title 슬롯)"},{name:"children",description:"본문 (popover_body, Vue default 슬롯)"},{name:"footer",description:"하단 액션 (popover_footer)"}],ho=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 no-arrow · panel-label · arrow-anchor · panel-align · arrow-target-align · offset-* · close-label은 noArrow · panelLabel · arrowAnchor · panelAlign · arrowTargetAlign · offsetTop 등으로 다룹니다. Vue `#trigger` 슬롯은 triggerContent prop입니다.",tables:[{columns:lo,rows:io,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:uo,rows:xo,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:co,rows:mo,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:go,rows:vo,codeColumn:"name"}]}];function fo(t){return e.jsx("div",{className:"popover_demo-stage",children:t})}function p(t){const l=()=>fo(t);return I(l,l)}const bo={size:"md",offset:"md",open:!0,noArrow:!1,arrowAnchor:"content",panelAlign:"start",arrowTargetAlign:"center",disabled:!1,trigger:"click",title:"",panelLabel:"제목",interactive:!0,closable:void 0,closeLabel:"닫기"},zo={title:"Components/피드백/Popover",id:"components-popover",component:r,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","top-center","bottom-center","left","right","end"],type:{name:"enum",summary:"'top' | 'top-center' | 'bottom-center' | 'left' | 'right' | 'end'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},offset:{control:"select",options:["none","sm","md","lg"],type:{name:"enum",summary:"'none' | 'sm' | 'md' | 'lg'"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noArrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},arrowAnchor:{control:"select",options:["content","target","mixed"],type:{name:"enum",summary:"'content' | 'target' | 'mixed'"}},panelAlign:{control:"select",options:["start","center","end"],type:{name:"enum",summary:"'start' | 'center' | 'end'"}},arrowTargetAlign:{control:"select",options:["center","left","right","top","bottom"],type:{name:"enum",summary:"'center' | 'left' | 'right' | 'top' | 'bottom'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},trigger:{control:"select",options:["click","hover"],type:{name:"enum",summary:"'click' | 'hover'"}},title:{control:"text",type:{name:"string",summary:"string"}},panelLabel:{control:"text",type:{name:"string",summary:"string"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ho,docs:{description:{component:"트리거 옆에 표시되는 대화형 Popover 패널입니다."}}}},_={parameters:{controls:{disable:!1}},args:{...bo},render:t=>e.jsx("div",{className:"popover_demo-stage",children:e.jsx(r,{...t,triggerContent:e.jsx(o,{className:"popover_trigger",label:"팝오버",variant:"outline","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"팝오버 내용입니다. Controls로 open · size · placement를 조절하세요."})})})},j={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Popover와 triggerContent로 트리거와 패널을 구성합니다. panelLabel을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function BasicExample() {
  return (
    <Popover
      panelLabel="안내"
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
      }
    >
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{panelLabel:"안내",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",label:"Popover 열기","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거를 클릭하면 이 패널이 표시됩니다."})}))},P={name:"라벨 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"panelLabel을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function NoLabelExample() {
  return (
    <Popover
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
      }
    >
      <p>짧은 안내 문구만 필요할 때 사용합니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",label:"라벨 없음","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다."})}))},N={name:"열린 상태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded="true"를 함께 지정합니다.'},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function OpenExample() {
  return (
    <Popover
      open
      panelLabel="열린 Popover"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="filled"
          color="primary"
          label="열림"
          aria-haspopup="dialog"
          aria-expanded="true"
        />
      }
    >
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{open:!0,panelLabel:"열린 Popover",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"filled",color:"primary",label:"열림","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"정적 데모용 열린 상태입니다."})}))},C={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function SizeExample() {
  return (
    <Popover
      size="sm"
      open
      panelLabel="작은 Popover"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />
      }
    >
      <p>작은 패널입니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{size:"sm",open:!0,panelLabel:"작은 Popover",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"Small","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"작은 패널입니다. 짧은 안내에 적합합니다."})}),e.jsx(r,{open:!0,panelLabel:"기본 Popover",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",label:"Medium","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"기본 크기 패널입니다."})}),e.jsx(r,{size:"lg",open:!0,panelLabel:"큰 Popover",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"lg",label:"Large","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다."})})]}))},B={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"offset prop(none · sm · md · lg)으로 전 방향 간격을, offsetTop · offsetRight · offsetBottom · offsetLeft로 방향별 간격을 조절합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function OffsetExample() {
  return (
    <Popover
      offset="lg"
      open
      panelLabel="lg"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />
      }
    >
      <p>넓은 간격</p>
    </Popover>
  );
}`,language:"tsx"}}},render:I(()=>e.jsxs("div",{className:"popover_demo-stage",children:[e.jsx("p",{className:"form_field-hint",style:{marginBottom:"var(--space-md)"},children:"전 방향 동일"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{offset:"none",open:!0,panelLabel:"none",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"none","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"간격 없음"})}),e.jsx(r,{offset:"sm",open:!0,panelLabel:"sm",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"sm","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"좁은 간격"})}),e.jsx(r,{open:!0,panelLabel:"md",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"md","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"기본 간격"})}),e.jsx(r,{offset:"lg",open:!0,panelLabel:"lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"lg","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"넓은 간격"})})]}),e.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"방향별 (offset-* · placement)"}),e.jsxs("div",{className:"popover_demo-placement",style:{minHeight:"12rem",padding:0,border:"none",background:"transparent"},children:[e.jsx("div",{className:"popover_demo-placement-cell-top",children:e.jsx(r,{placement:"top-center",offsetTop:"lg",open:!0,panelLabel:"offset-top lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"위","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"위쪽 간격"})})}),e.jsx("div",{className:"popover_demo-placement-cell-left",children:e.jsx(r,{placement:"left",offsetLeft:"lg",open:!0,panelLabel:"offset-left lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"왼쪽","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"왼쪽 간격"})})}),e.jsx("div",{className:"popover_demo-placement-cell-center",children:e.jsx(r,{offsetBottom:"lg",open:!0,panelLabel:"offset-bottom lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"아래","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"아래쪽 간격"})})}),e.jsx("div",{className:"popover_demo-placement-cell-right",children:e.jsx(r,{placement:"right",offsetRight:"lg",open:!0,panelLabel:"offset-right lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"오른쪽","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"오른쪽 간격"})})})]})]}),()=>e.jsxs("div",{className:"popover_demo-stage",children:[e.jsx("p",{className:"form_field-hint",style:{marginBottom:"var(--space-md)"},children:"전 방향 동일"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{offset:"none",open:!0,panelLabel:"none",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"none","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"간격 없음"})}),e.jsx(r,{offset:"sm",open:!0,panelLabel:"sm",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"sm","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"좁은 간격"})}),e.jsx(r,{open:!0,panelLabel:"md",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"md","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"기본 간격"})}),e.jsx(r,{offset:"lg",open:!0,panelLabel:"lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"lg","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"넓은 간격"})})]}),e.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"방향별 (offset-* · placement)"}),e.jsxs("div",{className:"popover_demo-placement",style:{minHeight:"12rem",padding:0,border:"none",background:"transparent"},children:[e.jsx("div",{className:"popover_demo-placement-cell-top",children:e.jsx(r,{placement:"top-center",offsetTop:"lg",open:!0,panelLabel:"offset-top lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"위","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"위쪽 간격"})})}),e.jsx("div",{className:"popover_demo-placement-cell-left",children:e.jsx(r,{placement:"left",offsetLeft:"lg",open:!0,panelLabel:"offset-left lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"왼쪽","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"왼쪽 간격"})})}),e.jsx("div",{className:"popover_demo-placement-cell-center",children:e.jsx(r,{offsetBottom:"lg",open:!0,panelLabel:"offset-bottom lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"아래","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"아래쪽 간격"})})}),e.jsx("div",{className:"popover_demo-placement-cell-right",children:e.jsx(r,{placement:"right",offsetRight:"lg",open:!0,panelLabel:"offset-right lg",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"오른쪽","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"오른쪽 간격"})})})]})]}))},w={name:"제목",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function TitleExample() {
  return (
    <Popover
      title="배송 안내"
      triggerContent={
        <Button className="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
      }
    >
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{title:"배송 안내",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"도움말","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."})}))},y={name:"푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"footer prop·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function FooterExample() {
  return (
    <Popover
      title="항목 삭제"
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
      }
      footer={
        <>
          <Button variant="ghost" size="sm" label="취소" data-popover-close="" />
          <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close="" />
        </>
      }
    >
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{title:"항목 삭제",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",label:"삭제 확인","aria-haspopup":"dialog"}),footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"sm",label:"취소","data-popover-close":""}),e.jsx(o,{variant:"filled",color:"danger",size:"sm",label:"삭제","data-popover-close":""})]}),children:e.jsx("p",{children:"이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?"})}))},L={name:"호버 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'trigger="hover"로 마우스 오버·포커스 시 패널을 표시합니다. 짧은 설명·용어 정의에 적합합니다.'},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function HoverExample() {
  return (
    <p>
      결제 시{' '}
      <Popover
        trigger="hover"
        panelLabel="에스크로 설명"
        triggerContent={<Link className="popover_trigger" label="에스크로" aria-haspopup="dialog" />}
      >
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Popover>{' '}
      서비스를 이용할 수 있습니다.
    </p>
  );
}`,language:"tsx"}}},render:p(e.jsxs("p",{children:["결제 시"," ",e.jsx(r,{trigger:"hover",panelLabel:"에스크로 설명",triggerContent:e.jsx(Me,{className:"popover_trigger",label:"에스크로","aria-haspopup":"dialog"}),children:"구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다."})," ","서비스를 이용할 수 있습니다."]}))},z={name:"트리거 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function TriggerExample() {
  return (
    <Popover
      panelLabel="Button 트리거"
      triggerContent={
        <Button className="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
      }
    >
      <p>버튼 트리거 예시입니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsxs("div",{className:"popover_row",children:[e.jsx(r,{panelLabel:"Button 트리거",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"filled",color:"primary",label:"Button","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"버튼 트리거 예시입니다."})}),e.jsx(r,{panelLabel:"Link 트리거",triggerContent:e.jsx(Me,{className:"popover_trigger",label:"Link 트리거","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"링크 스타일 트리거입니다."})}),e.jsx(r,{panelLabel:"추가 정보",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",iconOnly:!0,ariaLabel:"정보","aria-haspopup":"dialog",iconBefore:e.jsx($,{name:"info"})}),children:e.jsx("p",{children:"아이콘 전용 트리거입니다."})})]}))},k={name:"배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. 기본은 트리거 아래·왼쪽 정렬입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function PlacementExample() {
  return (
    <Popover
      placement="top-center"
      panelLabel="위쪽 가운데 배치"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
      }
    >
      <p>트리거 위 · 가운데</p>
    </Popover>
  );
}`,language:"tsx"}}},render:I(()=>e.jsxs("div",{className:"popover_demo-stage",children:[e.jsxs("div",{className:"popover_demo-placement",children:[e.jsx("div",{className:"popover_demo-placement-cell-top",children:e.jsx(r,{placement:"top-center",panelLabel:"위쪽 가운데 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"위","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 위 · 가운데"})})}),e.jsx("div",{className:"popover_demo-placement-cell-left",children:e.jsx(r,{placement:"left",panelLabel:"왼쪽 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"왼쪽","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 왼쪽"})})}),e.jsx("div",{className:"popover_demo-placement-cell-center",children:e.jsx(r,{placement:"bottom-center",panelLabel:"아래쪽 가운데 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"아래","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 아래 · 가운데"})})}),e.jsx("div",{className:"popover_demo-placement-cell-right",children:e.jsx(r,{placement:"right",panelLabel:"오른쪽 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"오른쪽","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 오른쪽"})})})]}),e.jsxs("div",{className:"popover_row",style:{width:"100%",justifyContent:"space-between",marginTop:"var(--space-xl)"},children:[e.jsx(r,{placement:"top",panelLabel:"위쪽 왼쪽 정렬",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"위 · 왼쪽 정렬","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"패널 왼쪽 정렬"})}),e.jsx(r,{panelLabel:"아래쪽 왼쪽 정렬",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"아래 · 왼쪽 정렬","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"기본 배치"})}),e.jsx(r,{placement:"end",panelLabel:"오른쪽 정렬",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"아래 · 오른쪽 정렬","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"패널 오른쪽 정렬"})})]})]}),()=>e.jsxs("div",{className:"popover_demo-stage",children:[e.jsxs("div",{className:"popover_demo-placement",children:[e.jsx("div",{className:"popover_demo-placement-cell-top",children:e.jsx(r,{placement:"top-center",panelLabel:"위쪽 가운데 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"위","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 위 · 가운데"})})}),e.jsx("div",{className:"popover_demo-placement-cell-left",children:e.jsx(r,{placement:"left",panelLabel:"왼쪽 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"왼쪽","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 왼쪽"})})}),e.jsx("div",{className:"popover_demo-placement-cell-center",children:e.jsx(r,{placement:"bottom-center",panelLabel:"아래쪽 가운데 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"아래","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 아래 · 가운데"})})}),e.jsx("div",{className:"popover_demo-placement-cell-right",children:e.jsx(r,{placement:"right",panelLabel:"오른쪽 배치",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"오른쪽","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"트리거 오른쪽"})})})]}),e.jsxs("div",{className:"popover_row",style:{width:"100%",justifyContent:"space-between",marginTop:"var(--space-xl)"},children:[e.jsx(r,{placement:"top",panelLabel:"위쪽 왼쪽 정렬",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"위 · 왼쪽 정렬","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"패널 왼쪽 정렬"})}),e.jsx(r,{panelLabel:"아래쪽 왼쪽 정렬",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"아래 · 왼쪽 정렬","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"기본 배치"})}),e.jsx(r,{placement:"end",panelLabel:"오른쪽 정렬",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"아래 · 오른쪽 정렬","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"패널 오른쪽 정렬"})})]})]}))},A={name:"폼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function FormExample() {
  return (
    <Popover
      title="빠른 메모"
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
      }
      footer={
        <>
          <Button variant="ghost" size="sm" label="취소" data-popover-close="" />
          <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close="" />
        </>
      }
    >
      <div className="form_field">
        <label className="form_label" htmlFor="popover-memo-input">내용</label>
        <Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" />
      </div>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{title:"빠른 메모",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",label:"메모 추가","aria-haspopup":"dialog"}),footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"sm",label:"취소","data-popover-close":""}),e.jsx(o,{variant:"filled",color:"primary",size:"sm",label:"저장","data-popover-close":""})]}),children:e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_label",htmlFor:"popover-memo-input",children:"내용"}),e.jsx(ao,{id:"popover-memo-input",rows:3,placeholder:"메모를 입력하세요"})]})}))},S={name:"화살표 기준",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"arrowAnchor(content · target · mixed)와 panelAlign, arrowTargetAlign으로 패널·화살표를 독립 조합합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function ArrowAnchorExample() {
  return (
    <Popover
      open
      arrowAnchor="target"
      panelLabel="target"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      }
    >
      <p>화살표가 트리거 중앙을 가리킵니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:I(()=>e.jsxs("div",{className:"popover_demo-stage",children:[e.jsx("p",{className:"form_field-hint",style:{marginBottom:"var(--space-md)"},children:"기준 비교"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{open:!0,panelLabel:"content",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다."})}),e.jsx(r,{open:!0,arrowAnchor:"target",panelLabel:"target",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다."})})]}),e.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"target — 좌 · 가운데 · 우"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{open:!0,arrowAnchor:"target",arrowTargetAlign:"left",panelLabel:"left",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"트리거 왼쪽을 가리킵니다."})}),e.jsx(r,{open:!0,arrowAnchor:"target",panelLabel:"center",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"트리거 가운데를 가리킵니다."})}),e.jsx(r,{open:!0,arrowAnchor:"target",arrowTargetAlign:"right",panelLabel:"right",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"트리거 오른쪽을 가리킵니다."})})]}),e.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"mixed — 패널 가운데 · 화살표 조합"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{open:!0,arrowAnchor:"mixed",panelAlign:"center",arrowTargetAlign:"left",panelLabel:"가운데 · ←",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널 가운데, 화살표 트리거 왼쪽."})}),e.jsx(r,{open:!0,arrowAnchor:"mixed",panelAlign:"center",panelLabel:"가운데 · ●",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널·화살표 모두 트리거 가운데."})}),e.jsx(r,{open:!0,arrowAnchor:"mixed",panelAlign:"center",arrowTargetAlign:"right",panelLabel:"가운데 · →",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널 가운데, 화살표 트리거 오른쪽."})})]})]}),()=>e.jsxs("div",{className:"popover_demo-stage",children:[e.jsx("p",{className:"form_field-hint",style:{marginBottom:"var(--space-md)"},children:"기준 비교"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{open:!0,panelLabel:"content",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다."})}),e.jsx(r,{open:!0,arrowAnchor:"target",panelLabel:"target",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다."})})]}),e.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"target — 좌 · 가운데 · 우"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{open:!0,arrowAnchor:"target",arrowTargetAlign:"left",panelLabel:"left",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"트리거 왼쪽을 가리킵니다."})}),e.jsx(r,{open:!0,arrowAnchor:"target",panelLabel:"center",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"트리거 가운데를 가리킵니다."})}),e.jsx(r,{open:!0,arrowAnchor:"target",arrowTargetAlign:"right",panelLabel:"right",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"트리거 오른쪽을 가리킵니다."})})]}),e.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"mixed — 패널 가운데 · 화살표 조합"}),e.jsxs("div",{className:"popover_row",style:{alignItems:"flex-start"},children:[e.jsx(r,{open:!0,arrowAnchor:"mixed",panelAlign:"center",arrowTargetAlign:"left",panelLabel:"가운데 · ←",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널 가운데, 화살표 트리거 왼쪽."})}),e.jsx(r,{open:!0,arrowAnchor:"mixed",panelAlign:"center",panelLabel:"가운데 · ●",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널·화살표 모두 트리거 가운데."})}),e.jsx(r,{open:!0,arrowAnchor:"mixed",panelAlign:"center",arrowTargetAlign:"right",panelLabel:"가운데 · →",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"outline",size:"sm",label:"S","aria-haspopup":"dialog","aria-expanded":"true"}),children:e.jsx("p",{children:"패널 가운데, 화살표 트리거 오른쪽."})})]})]}))},T={name:"화살표 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"noArrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function NoArrowExample() {
  return (
    <Popover
      noArrow
      panelLabel="화살표 없는 Popover"
      triggerContent={
        <Button className="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
      }
    >
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>
  );
}`,language:"tsx"}}},render:p(e.jsx(r,{noArrow:!0,panelLabel:"화살표 없는 Popover",triggerContent:e.jsx(o,{className:"popover_trigger",variant:"ghost",label:"화살표 없음","aria-haspopup":"dialog"}),children:e.jsx("p",{children:"화살표가 표시되지 않는 패널입니다."})}))};var oe,re,ae;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="popover_demo-stage">
      <Popover {...args} triggerContent={<Button className="popover_trigger" label="팝오버" variant="outline" aria-haspopup="dialog" />}>
        <p>팝오버 내용입니다. Controls로 open · size · placement를 조절하세요.</p>
      </Popover>
    </div>
}`,...(ae=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,pe,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
        story: 'Popover와 triggerContent로 트리거와 패널을 구성합니다. panelLabel을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function BasicExample() {
  return (
    <Popover
      panelLabel="안내"
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />
      }
    >
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover panelLabel="안내" triggerContent={<Button className="popover_trigger" variant="outline" label="Popover 열기" aria-haspopup="dialog" />}>
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>)
}`,...(ne=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ne.source}}};var se,le,ie;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '라벨 없음',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'panelLabel을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function NoLabelExample() {
  return (
    <Popover
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />
      }
    >
      <p>짧은 안내 문구만 필요할 때 사용합니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover triggerContent={<Button className="popover_trigger" variant="outline" label="라벨 없음" aria-haspopup="dialog" />}>
      <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
    </Popover>)
}`,...(ie=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,me,de;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: '열린 상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded="true"를 함께 지정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function OpenExample() {
  return (
    <Popover
      open
      panelLabel="열린 Popover"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="filled"
          color="primary"
          label="열림"
          aria-haspopup="dialog"
          aria-expanded="true"
        />
      }
    >
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover open panelLabel="열린 Popover" triggerContent={<Button className="popover_trigger" variant="filled" color="primary" label="열림" aria-haspopup="dialog" aria-expanded="true" />}>
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>)
}`,...(de=(me=N.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,ve,ue;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
        story: 'size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function SizeExample() {
  return (
    <Popover
      size="sm"
      open
      panelLabel="작은 Popover"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />
      }
    >
      <p>작은 패널입니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<div className="popover_row" style={{
    alignItems: 'flex-start'
  }}>
      <Popover size="sm" open panelLabel="작은 Popover" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="Small" aria-haspopup="dialog" aria-expanded="true" />}>
        <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
      </Popover>
      <Popover open panelLabel="기본 Popover" triggerContent={<Button className="popover_trigger" variant="outline" label="Medium" aria-haspopup="dialog" aria-expanded="true" />}>
        <p>기본 크기 패널입니다.</p>
      </Popover>
      <Popover size="lg" open panelLabel="큰 Popover" triggerContent={<Button className="popover_trigger" variant="outline" size="lg" label="Large" aria-haspopup="dialog" aria-expanded="true" />}>
        <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
      </Popover>
    </div>)
}`,...(ue=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var xe,he,fe;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: '간격',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'offset prop(none · sm · md · lg)으로 전 방향 간격을, offsetTop · offsetRight · offsetBottom · offsetLeft로 방향별 간격을 조절합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function OffsetExample() {
  return (
    <Popover
      offset="lg"
      open
      panelLabel="lg"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />
      }
    >
      <p>넓은 간격</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <div className="popover_demo-stage">
        <p className="form_field-hint" style={{
      marginBottom: 'var(--space-md)'
    }}>
          전 방향 동일
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover offset="none" open panelLabel="none" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="none" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>간격 없음</p>
          </Popover>
          <Popover offset="sm" open panelLabel="sm" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="sm" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>좁은 간격</p>
          </Popover>
          <Popover open panelLabel="md" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="md" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>기본 간격</p>
          </Popover>
          <Popover offset="lg" open panelLabel="lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>넓은 간격</p>
          </Popover>
        </div>
        <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
          방향별 (offset-* · placement)
        </p>
        <div className="popover_demo-placement" style={{
      minHeight: '12rem',
      padding: 0,
      border: 'none',
      background: 'transparent'
    }}>
          <div className="popover_demo-placement-cell-top">
            <Popover placement="top-center" offsetTop="lg" open panelLabel="offset-top lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>위쪽 간격</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-left">
            <Popover placement="left" offsetLeft="lg" open panelLabel="offset-left lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>왼쪽 간격</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-center">
            <Popover offsetBottom="lg" open panelLabel="offset-bottom lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>아래쪽 간격</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-right">
            <Popover placement="right" offsetRight="lg" open panelLabel="offset-right lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>오른쪽 간격</p>
            </Popover>
          </div>
        </div>
      </div>, () => <div className="popover_demo-stage">
        <p className="form_field-hint" style={{
      marginBottom: 'var(--space-md)'
    }}>
          전 방향 동일
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover offset="none" open panelLabel="none" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="none" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>간격 없음</p>
          </Popover>
          <Popover offset="sm" open panelLabel="sm" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="sm" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>좁은 간격</p>
          </Popover>
          <Popover open panelLabel="md" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="md" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>기본 간격</p>
          </Popover>
          <Popover offset="lg" open panelLabel="lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="lg" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>넓은 간격</p>
          </Popover>
        </div>
        <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
          방향별 (offset-* · placement)
        </p>
        <div className="popover_demo-placement" style={{
      minHeight: '12rem',
      padding: 0,
      border: 'none',
      background: 'transparent'
    }}>
          <div className="popover_demo-placement-cell-top">
            <Popover placement="top-center" offsetTop="lg" open panelLabel="offset-top lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>위쪽 간격</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-left">
            <Popover placement="left" offsetLeft="lg" open panelLabel="offset-left lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>왼쪽 간격</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-center">
            <Popover offsetBottom="lg" open panelLabel="offset-bottom lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>아래쪽 간격</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-right">
            <Popover placement="right" offsetRight="lg" open panelLabel="offset-right lg" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" aria-expanded="true" />}>
              <p>오른쪽 간격</p>
            </Popover>
          </div>
        </div>
      </div>)
}`,...(fe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,_e,je;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '제목',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function TitleExample() {
  return (
    <Popover
      title="배송 안내"
      triggerContent={
        <Button className="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />
      }
    >
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover title="배송 안내" triggerContent={<Button className="popover_trigger" variant="ghost" label="도움말" aria-haspopup="dialog" />}>
      <p>
        평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수
        있습니다.
      </p>
    </Popover>)
}`,...(je=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Pe,Ne,Ce;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: '푸터',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'footer prop·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function FooterExample() {
  return (
    <Popover
      title="항목 삭제"
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />
      }
      footer={
        <>
          <Button variant="ghost" size="sm" label="취소" data-popover-close="" />
          <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close="" />
        </>
      }
    >
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover title="항목 삭제" triggerContent={<Button className="popover_trigger" variant="outline" label="삭제 확인" aria-haspopup="dialog" />} footer={<>
          <Button variant="ghost" size="sm" label="취소" data-popover-close="" />
          <Button variant="filled" color="danger" size="sm" label="삭제" data-popover-close="" />
        </>}>
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    </Popover>)
}`,...(Ce=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};var Be,we,ye;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: '호버 트리거',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'trigger="hover"로 마우스 오버·포커스 시 패널을 표시합니다. 짧은 설명·용어 정의에 적합합니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function HoverExample() {
  return (
    <p>
      결제 시{' '}
      <Popover
        trigger="hover"
        panelLabel="에스크로 설명"
        triggerContent={<Link className="popover_trigger" label="에스크로" aria-haspopup="dialog" />}
      >
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Popover>{' '}
      서비스를 이용할 수 있습니다.
    </p>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<p>
      결제 시{' '}
      <Popover trigger="hover" panelLabel="에스크로 설명" triggerContent={<Link className="popover_trigger" label="에스크로" aria-haspopup="dialog" />}>
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Popover>{' '}
      서비스를 이용할 수 있습니다.
    </p>)
}`,...(ye=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Le,ze,ke;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: '트리거 유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function TriggerExample() {
  return (
    <Popover
      panelLabel="Button 트리거"
      triggerContent={
        <Button className="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />
      }
    >
      <p>버튼 트리거 예시입니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<div className="popover_row">
      <Popover panelLabel="Button 트리거" triggerContent={<Button className="popover_trigger" variant="filled" color="primary" label="Button" aria-haspopup="dialog" />}>
        <p>버튼 트리거 예시입니다.</p>
      </Popover>
      <Popover panelLabel="Link 트리거" triggerContent={<Link className="popover_trigger" label="Link 트리거" aria-haspopup="dialog" />}>
        <p>링크 스타일 트리거입니다.</p>
      </Popover>
      <Popover panelLabel="추가 정보" triggerContent={<Button className="popover_trigger" variant="ghost" iconOnly ariaLabel="정보" aria-haspopup="dialog" iconBefore={<Icon name="info" />} />}>
        <p>아이콘 전용 트리거입니다.</p>
      </Popover>
    </div>)
}`,...(ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var Ae,Se,Te;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: '배치',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. 기본은 트리거 아래·왼쪽 정렬입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function PlacementExample() {
  return (
    <Popover
      placement="top-center"
      panelLabel="위쪽 가운데 배치"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />
      }
    >
      <p>트리거 위 · 가운데</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <div className="popover_demo-stage">
        <div className="popover_demo-placement">
          <div className="popover_demo-placement-cell-top">
            <Popover placement="top-center" panelLabel="위쪽 가운데 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />}>
              <p>트리거 위 · 가운데</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-left">
            <Popover placement="left" panelLabel="왼쪽 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" />}>
              <p>트리거 왼쪽</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-center">
            <Popover placement="bottom-center" panelLabel="아래쪽 가운데 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" />}>
              <p>트리거 아래 · 가운데</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-right">
            <Popover placement="right" panelLabel="오른쪽 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" />}>
              <p>트리거 오른쪽</p>
            </Popover>
          </div>
        </div>
        <div className="popover_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}>
          <Popover placement="top" panelLabel="위쪽 왼쪽 정렬" triggerContent={<Button className="popover_trigger" variant="ghost" label="위 · 왼쪽 정렬" aria-haspopup="dialog" />}>
            <p>패널 왼쪽 정렬</p>
          </Popover>
          <Popover panelLabel="아래쪽 왼쪽 정렬" triggerContent={<Button className="popover_trigger" variant="ghost" label="아래 · 왼쪽 정렬" aria-haspopup="dialog" />}>
            <p>기본 배치</p>
          </Popover>
          <Popover placement="end" panelLabel="오른쪽 정렬" triggerContent={<Button className="popover_trigger" variant="ghost" label="아래 · 오른쪽 정렬" aria-haspopup="dialog" />}>
            <p>패널 오른쪽 정렬</p>
          </Popover>
        </div>
      </div>, () => <div className="popover_demo-stage">
        <div className="popover_demo-placement">
          <div className="popover_demo-placement-cell-top">
            <Popover placement="top-center" panelLabel="위쪽 가운데 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="위" aria-haspopup="dialog" />}>
              <p>트리거 위 · 가운데</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-left">
            <Popover placement="left" panelLabel="왼쪽 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="왼쪽" aria-haspopup="dialog" />}>
              <p>트리거 왼쪽</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-center">
            <Popover placement="bottom-center" panelLabel="아래쪽 가운데 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="아래" aria-haspopup="dialog" />}>
              <p>트리거 아래 · 가운데</p>
            </Popover>
          </div>
          <div className="popover_demo-placement-cell-right">
            <Popover placement="right" panelLabel="오른쪽 배치" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="오른쪽" aria-haspopup="dialog" />}>
              <p>트리거 오른쪽</p>
            </Popover>
          </div>
        </div>
        <div className="popover_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}>
          <Popover placement="top" panelLabel="위쪽 왼쪽 정렬" triggerContent={<Button className="popover_trigger" variant="ghost" label="위 · 왼쪽 정렬" aria-haspopup="dialog" />}>
            <p>패널 왼쪽 정렬</p>
          </Popover>
          <Popover panelLabel="아래쪽 왼쪽 정렬" triggerContent={<Button className="popover_trigger" variant="ghost" label="아래 · 왼쪽 정렬" aria-haspopup="dialog" />}>
            <p>기본 배치</p>
          </Popover>
          <Popover placement="end" panelLabel="오른쪽 정렬" triggerContent={<Button className="popover_trigger" variant="ghost" label="아래 · 오른쪽 정렬" aria-haspopup="dialog" />}>
            <p>패널 오른쪽 정렬</p>
          </Popover>
        </div>
      </div>)
}`,...(Te=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Ie,Ee,Oe;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '폼',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function FormExample() {
  return (
    <Popover
      title="빠른 메모"
      triggerContent={
        <Button className="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />
      }
      footer={
        <>
          <Button variant="ghost" size="sm" label="취소" data-popover-close="" />
          <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close="" />
        </>
      }
    >
      <div className="form_field">
        <label className="form_label" htmlFor="popover-memo-input">내용</label>
        <Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" />
      </div>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover title="빠른 메모" triggerContent={<Button className="popover_trigger" variant="outline" label="메모 추가" aria-haspopup="dialog" />} footer={<>
          <Button variant="ghost" size="sm" label="취소" data-popover-close="" />
          <Button variant="filled" color="primary" size="sm" label="저장" data-popover-close="" />
        </>}>
      <div className="form_field">
        <label className="form_label" htmlFor="popover-memo-input">
          내용
        </label>
        <Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" />
      </div>
    </Popover>)
}`,...(Oe=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var De,Re,Fe;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: '화살표 기준',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'arrowAnchor(content · target · mixed)와 panelAlign, arrowTargetAlign으로 패널·화살표를 독립 조합합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function ArrowAnchorExample() {
  return (
    <Popover
      open
      arrowAnchor="target"
      panelLabel="target"
      triggerContent={
        <Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />
      }
    >
      <p>화살표가 트리거 중앙을 가리킵니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(() => <div className="popover_demo-stage">
        <p className="form_field-hint" style={{
      marginBottom: 'var(--space-md)'
    }}>
          기준 비교
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover open panelLabel="content" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
          </Popover>
          <Popover open arrowAnchor="target" panelLabel="target" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
          </Popover>
        </div>
        <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
          target — 좌 · 가운데 · 우
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover open arrowAnchor="target" arrowTargetAlign="left" panelLabel="left" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>트리거 왼쪽을 가리킵니다.</p>
          </Popover>
          <Popover open arrowAnchor="target" panelLabel="center" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>트리거 가운데를 가리킵니다.</p>
          </Popover>
          <Popover open arrowAnchor="target" arrowTargetAlign="right" panelLabel="right" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>트리거 오른쪽을 가리킵니다.</p>
          </Popover>
        </div>
        <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
          mixed — 패널 가운데 · 화살표 조합
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover open arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="left" panelLabel="가운데 · ←" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널 가운데, 화살표 트리거 왼쪽.</p>
          </Popover>
          <Popover open arrowAnchor="mixed" panelAlign="center" panelLabel="가운데 · ●" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널·화살표 모두 트리거 가운데.</p>
          </Popover>
          <Popover open arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="right" panelLabel="가운데 · →" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널 가운데, 화살표 트리거 오른쪽.</p>
          </Popover>
        </div>
      </div>, () => <div className="popover_demo-stage">
        <p className="form_field-hint" style={{
      marginBottom: 'var(--space-md)'
    }}>
          기준 비교
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover open panelLabel="content" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
          </Popover>
          <Popover open arrowAnchor="target" panelLabel="target" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
          </Popover>
        </div>
        <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
          target — 좌 · 가운데 · 우
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover open arrowAnchor="target" arrowTargetAlign="left" panelLabel="left" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>트리거 왼쪽을 가리킵니다.</p>
          </Popover>
          <Popover open arrowAnchor="target" panelLabel="center" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>트리거 가운데를 가리킵니다.</p>
          </Popover>
          <Popover open arrowAnchor="target" arrowTargetAlign="right" panelLabel="right" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>트리거 오른쪽을 가리킵니다.</p>
          </Popover>
        </div>
        <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
          mixed — 패널 가운데 · 화살표 조합
        </p>
        <div className="popover_row" style={{
      alignItems: 'flex-start'
    }}>
          <Popover open arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="left" panelLabel="가운데 · ←" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널 가운데, 화살표 트리거 왼쪽.</p>
          </Popover>
          <Popover open arrowAnchor="mixed" panelAlign="center" panelLabel="가운데 · ●" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널·화살표 모두 트리거 가운데.</p>
          </Popover>
          <Popover open arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="right" panelLabel="가운데 · →" triggerContent={<Button className="popover_trigger" variant="outline" size="sm" label="S" aria-haspopup="dialog" aria-expanded="true" />}>
            <p>패널 가운데, 화살표 트리거 오른쪽.</p>
          </Popover>
        </div>
      </div>)
}`,...(Fe=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};var Ve,He,qe;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: '화살표 없음',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'noArrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function NoArrowExample() {
  return (
    <Popover
      noArrow
      panelLabel="화살표 없는 Popover"
      triggerContent={
        <Button className="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />
      }
    >
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: popoverDemo(<Popover noArrow panelLabel="화살표 없는 Popover" triggerContent={<Button className="popover_trigger" variant="ghost" label="화살표 없음" aria-haspopup="dialog" />}>
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>)
}`,...(qe=(He=T.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};const ko=["Playground","Basic","NoLabel","Open","Size","Offset","Title","Footer","Hover","Trigger","Placement","Form","ArrowAnchor","NoArrow"];export{S as ArrowAnchor,j as Basic,y as Footer,A as Form,L as Hover,T as NoArrow,P as NoLabel,B as Offset,N as Open,k as Placement,_ as Playground,C as Size,w as Title,z as Trigger,ko as __namedExportsOrder,zo as default};
