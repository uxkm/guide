import{r as f,K as Ut,n as Wt,j as t,B as o,I as Rt,a as U}from"./iframe-Ec8Bs185.js";import{L as Ot}from"./Link-BAvBRCrJ.js";import{u as Zt,o as Qt,p as Xt}from"./overlay-panel-align-mNDgPtoc.js";import{w as Vt}from"./story-renders-Bo_F9MSp.js";import"./preload-helper-DUxc-Dqw.js";const Yt=new Set(["top","top-start","top-end","left","right","start","end"]),te=new Set(["sm","md","lg"]),ee=new Set(["content","target","mixed"]),oe=new Set(["hover","click"]);function e({content:a,placement:n,size:V="md",offset:N="md",offsetTop:S,offsetRight:P,offsetBottom:I,offsetLeft:E,open:c,inverse:L,noArrow:m,arrowAnchor:q="content",panelAlign:l="center",arrowTargetAlign:p="center",disabled:D,trigger:M="hover",interactive:d=!0,closable:H,closeLabel:G="닫기",triggerContent:qt,children:Mt,className:$,...F}){const R=f.useRef(null),J=`tooltip-${f.useId().replace(/:/g,"")}`,g=te.has(V)?V:"md",i=ee.has(q)?q:"content",u=oe.has(M)?M:"hover",Ht=Mt??a;Ut({content:typeof a=="string"?a:void 0,placement:n,size:g,offset:N,offsetTop:S,offsetRight:P,offsetBottom:I,offsetLeft:E,open:c,inverse:L,noArrow:m,arrowAnchor:i,panelAlign:l,arrowTargetAlign:p,disabled:D,trigger:u,interactive:d,closable:H,closeLabel:G},R,{className:$,...F}),Zt(R,{noArrow:m,arrowAnchor:i,panelAlign:l,arrowTargetAlign:p,open:c,placement:n},"tooltip");const Gt=f.useMemo(()=>{const r=["tooltip"];return g==="sm"&&r.push("tooltip_sm"),g==="lg"&&r.push("tooltip_lg"),r.push(...Qt("tooltip",{offset:N,offsetTop:S,offsetRight:P,offsetBottom:I,offsetLeft:E})),r.push(...Xt("tooltip",l,"center")),L&&r.push("tooltip_inverse"),m&&r.push("tooltip_no-arrow"),i==="target"&&r.push("tooltip_arrow-anchor-target"),i==="mixed"&&r.push("tooltip_arrow-anchor-mixed"),n&&Yt.has(n)&&r.push(`tooltip_placement-${n}`),c&&r.push("is-open"),D&&r.push("is-disabled"),r},[g,N,S,P,I,E,l,L,m,i,n,c,D]),$t=f.useMemo(()=>{const r={};return d&&(r["data-tooltip"]=""),u==="click"&&(r["data-tooltip-trigger"]="click"),(i==="mixed"||l!=="center")&&(r["data-panel-align"]=l),(i==="target"||i==="mixed")&&p!=="center"&&(r["data-arrow-target-align"]=p),r},[d,u,i,l,p]),Ft=d?void 0:!c||void 0,K=H??u==="click",{class:xe,...Jt}=F,Kt=Wt(Jt);return t.jsxs("span",{ref:R,className:U(Gt,$),...$t,...Kt,children:[t.jsx("span",{className:"tooltip_trigger","aria-describedby":J,children:qt}),t.jsxs("span",{id:J,className:U("tooltip_bubble",K&&"tooltip_bubble-closable"),role:"tooltip",hidden:Ft,children:[t.jsx("span",{className:"tooltip_arrow","aria-hidden":"true"}),K?t.jsx(o,{variant:"ghost",iconOnly:!0,className:"tooltip_close tooltip_close-floating","data-tooltip-close":"",ariaLabel:G,iconBefore:t.jsx(Rt,{name:"close",size:"sm",className:"tooltip_close-icon"})}):null,Ht]})]})}e.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},offset:{defaultValue:{value:"'md'",computed:!1},required:!1},arrowAnchor:{defaultValue:{value:"'content'",computed:!1},required:!1},panelAlign:{defaultValue:{value:"'center'",computed:!1},required:!1},arrowTargetAlign:{defaultValue:{value:"'center'",computed:!1},required:!1},trigger:{defaultValue:{value:"'hover'",computed:!1},required:!1},interactive:{defaultValue:{value:"true",computed:!1},required:!1},closeLabel:{defaultValue:{value:"'닫기'",computed:!1},required:!1}}};const re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ne=[{name:"content",type:"string",default:"—",description:"말풍선 텍스트. children으로 대체"},{name:"placement",type:"'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'",default:"—",description:"tooltip_placement-*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tooltip_sm · tooltip_lg"},{name:"offset",type:"'none' | 'sm' | 'md' | 'lg'",default:"md",description:"전 방향 동일 간격. tooltip_offset-* · --tooltip-offset"},{name:"offsetTop · offsetRight · offsetBottom · offsetLeft",type:"'none' | 'sm' | 'md' | 'lg'",default:"—",description:"방향별 간격. tooltip_offset-top-* 등 · --tooltip-offset-*"},{name:"open",type:"boolean",default:"false",description:"열림 (is-open)"},{name:"inverse",type:"boolean",default:"false",description:"어두운 배경 (tooltip_inverse)"},{name:"noArrow",type:"boolean",default:"false",description:"화살표 숨김"},{name:"arrowAnchor",type:"'content' | 'target' | 'mixed'",default:"content",description:"화살표 기준. target=화살표만, mixed=말풍선·화살표 독립"},{name:"panelAlign",type:"'start' | 'center' | 'end'",default:"center",description:"말풍선 교차축 정렬. tooltip_panel-align-* · data-panel-align"},{name:"arrowTargetAlign",type:"'center' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'",default:"center",description:"target·mixed 시 트리거 내 화살표 위치"},{name:"disabled",type:"boolean",default:"false",description:"트리거 비활성"},{name:"trigger",type:"'hover' | 'click'",default:"hover",description:'click 시 data-tooltip-trigger="click"'},{name:"interactive",type:"boolean",default:"true",description:"false면 data-tooltip 미부여"},{name:"closable",type:"boolean",default:"click 시 true",description:"말풍선 닫기 버튼. hover 트리거는 기본 false"},{name:"closeLabel",type:"string",default:"닫기",description:"닫기 버튼 aria-label"},{name:"triggerContent",type:"ReactNode",default:"—",description:"트리거 UI (Vue #trigger 슬롯 대응)"},{name:"className",type:"string",default:"—",description:"tooltip 루트에 추가 클래스"}],ae=[{key:"name",label:"Children"},{key:"description",label:"설명"}],se=[{name:"triggerContent",description:"트리거 요소 (Vue #trigger 슬롯 대응)"},{name:"children",description:"말풍선 텍스트 (content 대체, Vue default 슬롯 대응)"}],ie=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],le=[{name:"tooltip · tooltip_trigger · tooltip_bubble · tooltip_arrow · tooltip_close",description:"루트·트리거·말풍선"},{name:"tooltip_sm · tooltip_lg · tooltip_inverse · tooltip_no-arrow",description:"크기·스킨"},{name:"tooltip_panel-align-start · tooltip_panel-align-end",description:"말풍선 교차축 정렬"},{name:"tooltip_arrow-anchor-target · tooltip_arrow-anchor-mixed",description:"화살표·혼합 기준"},{name:"tooltip_offset-none · tooltip_offset-sm · tooltip_offset-lg",description:"전 방향 간격"},{name:"tooltip_offset-top-* · tooltip_offset-right-* · tooltip_offset-bottom-* · tooltip_offset-left-*",description:"방향별 간격"},{name:"tooltip_placement-*",description:"배치 변형"},{name:"data-tooltip · data-tooltip-trigger · data-tooltip-close · data-panel-align · data-arrow-target-align",description:"JS 연동"},{name:"is-open · is-disabled · hidden",description:"상태"},{name:'role="tooltip" · aria-describedby · aria-expanded',description:"접근성"}],ce=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],pe=[{name:"--tooltip-max-width · --tooltip-max-width-sm · --tooltip-max-width-lg",default:"16rem · 12rem · 20rem",description:"말풍선 최대 너비"},{name:"--tooltip-padding-x · --tooltip-padding-y · --tooltip-font-size",default:"—",description:"패딩·글자"},{name:"--tooltip-offset · --tooltip-offset-sm · --tooltip-offset-md · --tooltip-offset-lg",default:"var(--space-xs) · …",description:"전 방향 간격 토큰"},{name:"--tooltip-offset-top · --tooltip-offset-right · --tooltip-offset-bottom · --tooltip-offset-left",default:"offset 상속",description:"방향별 간격 (배치에 따라 적용)"},{name:"--tooltip-arrow-size",default:"6px",description:"화살표 크기"},{name:"--tooltip-panel-radius · --tooltip-arrow-edge-inset",default:"6px · calc",description:"말풍선 라운드·화살표 가장자리 여백"},{name:"--tooltip-arrow-position",default:"—",description:"target 기준 시 트리거 중앙 위치(px)"},{name:"--tooltip-inverse-bg · --tooltip-inverse-text",default:"—",description:"inverse 스킨"}],me=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 no-arrow · arrow-anchor · panel-align · arrow-target-align · offset-* · close-label은 noArrow · arrowAnchor · panelAlign · arrowTargetAlign · offsetTop 등으로 다룹니다. Vue `#trigger` 슬롯은 triggerContent prop입니다.",tables:[{columns:re,rows:ne,codeColumn:"name"}]},{title:"API · Children",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:ae,rows:se,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ie,rows:le,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ce,rows:pe,codeColumn:"name"}]}];function de(a){return t.jsx("div",{className:"tooltip_demo-stage",children:a})}function s(a){const n=()=>de(a);return Vt(n,n)}function O(a){const n=()=>a;return Vt(n,n)}const ge={content:"툴팁 텍스트",size:"md",offset:"md",open:!1,inverse:!1,noArrow:!1,arrowAnchor:"content",panelAlign:"center",arrowTargetAlign:"center",disabled:!1,trigger:"hover",interactive:!0,closable:!1,closeLabel:"닫기"},ye={title:"Components/피드백/Tooltip",id:"components-tooltip",component:e,tags:["autodocs"],argTypes:{content:{control:"text",type:{name:"string",summary:"string"}},placement:{control:"select",options:["top","top-start","top-end","left","right","start","end"],type:{name:"enum",summary:"'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},offset:{control:"select",options:["none","sm","md","lg"],type:{name:"enum",summary:"'none' | 'sm' | 'md' | 'lg'"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inverse:{control:"boolean",type:{name:"boolean",summary:"boolean"}},noArrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},arrowAnchor:{control:"select",options:["content","target","mixed"],type:{name:"enum",summary:"'content' | 'target' | 'mixed'"}},panelAlign:{control:"select",options:["start","center","end"],type:{name:"enum",summary:"'start' | 'center' | 'end'"}},arrowTargetAlign:{control:"select",options:["center","left","right","top","bottom"],type:{name:"enum",summary:"'center' | 'left' | 'right' | 'top' | 'bottom'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},trigger:{control:"select",options:["hover","click"],type:{name:"enum",summary:"'hover' | 'click'"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:me,docs:{description:{component:"호버·클릭으로 표시되는 Tooltip 말풍선 컴포넌트입니다."}}}},x={parameters:{controls:{disable:!1}},args:{...ge},render:a=>t.jsx("div",{className:"tooltip_demo-stage",children:t.jsx(e,{...a,triggerContent:t.jsx(o,{label:"툴팁",variant:"outline"})})})},v={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Tooltip과 triggerContent로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function BasicExample() {
  return (
    <Tooltip
      content="짧은 도움말 텍스트입니다."
      triggerContent={<Button variant="outline" label="마우스 오버" />}
    />
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{content:"짧은 도움말 텍스트입니다.",triggerContent:t.jsx(o,{variant:"outline",label:"마우스 오버"})}))},b={name:"슬롯",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"content prop 대신 children으로 말풍선 텍스트를 넣을 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function SlotExample() {
  return (
    <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>
      짧은 도움말 텍스트입니다.
    </Tooltip>
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{triggerContent:t.jsx(o,{variant:"outline",label:"슬롯 예시"}),children:"짧은 도움말 텍스트입니다."}))},h={name:"열린 상태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function OpenExample() {
  return (
    <Tooltip
      open
      content="정적 데모용 열린 상태입니다."
      triggerContent={<Button variant="filled" color="primary" label="열림" />}
    />
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{open:!0,content:"정적 데모용 열린 상태입니다.",triggerContent:t.jsx(o,{variant:"filled",color:"primary",label:"열림"})}))},j={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function SizeExample() {
  return (
    <Tooltip
      size="sm"
      content="작은 말풍선"
      triggerContent={<Button variant="ghost" size="sm" label="Small" />}
    />
  );
}`,language:"tsx"}}},render:s(t.jsxs("div",{className:"tooltip_row",style:{alignItems:"flex-start"},children:[t.jsx(e,{size:"sm",content:"작은 말풍선",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"Small"})}),t.jsx(e,{content:"기본 크기 말풍선",triggerContent:t.jsx(o,{variant:"ghost",label:"Medium"})}),t.jsx(e,{size:"lg",content:"큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.",triggerContent:t.jsx(o,{variant:"ghost",size:"lg",label:"Large"})})]}))},T={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"offset prop(none · sm · md · lg)으로 전 방향 간격을, offsetTop 등으로 방향별 간격을 조절합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function OffsetExample() {
  return (
    <Tooltip
      offset="lg"
      content="넓은 간격"
      triggerContent={<Button variant="ghost" size="sm" label="lg" />}
    />
  );
}`,language:"tsx"}}},render:O(t.jsxs("div",{className:"tooltip_demo-stage",children:[t.jsx("p",{className:"form_field-hint",style:{marginBottom:"var(--space-md)"},children:"전 방향 동일"}),t.jsxs("div",{className:"tooltip_row",style:{alignItems:"flex-start"},children:[t.jsx(e,{offset:"none",content:"간격 없음",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"none"})}),t.jsx(e,{offset:"sm",content:"좁은 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"sm"})}),t.jsx(e,{content:"기본 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"md"})}),t.jsx(e,{offset:"lg",content:"넓은 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"lg"})})]}),t.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"방향별 (offset-* · placement)"}),t.jsxs("div",{className:"tooltip_demo-placement",style:{minHeight:"12rem",padding:0,border:"none",background:"transparent"},children:[t.jsx("div",{className:"tooltip_demo-placement-cell-top",children:t.jsx(e,{placement:"top",offsetTop:"lg",content:"위쪽 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"위"})})}),t.jsx("div",{className:"tooltip_demo-placement-cell-left",children:t.jsx(e,{placement:"left",offsetLeft:"lg",content:"왼쪽 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"왼쪽"})})}),t.jsx("div",{className:"tooltip_demo-placement-cell-center",children:t.jsx(e,{offsetBottom:"lg",content:"아래쪽 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"아래"})})}),t.jsx("div",{className:"tooltip_demo-placement-cell-right",children:t.jsx(e,{placement:"right",offsetRight:"lg",content:"오른쪽 간격",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"오른쪽"})})})]})]}))},y={name:"인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."},source:{code:`import Link from '@uxkm/ui-react/components/Link.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function InlineExample() {
  return (
    <p>
      결제 시{' '}
      <Tooltip
        content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다."
        triggerContent={<Link label="에스크로" />}
      />{' '}
      서비스를 이용할 수 있습니다.
    </p>
  );
}`,language:"tsx"}}},render:s(t.jsxs("p",{children:["결제 시"," ",t.jsx(e,{content:"구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.",triggerContent:t.jsx(Ot,{label:"에스크로"})})," ","서비스를 이용할 수 있습니다."]}))},C={name:"트리거 유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function TriggerExample() {
  return (
    <Tooltip
      content="버튼 트리거 예시입니다."
      triggerContent={
        <Button variant="filled" color="primary" label="Button" />
      }
    />
  );
}`,language:"tsx"}}},render:s(t.jsxs("div",{className:"tooltip_row",children:[t.jsx(e,{content:"버튼 트리거 예시입니다.",triggerContent:t.jsx(o,{variant:"filled",color:"primary",label:"Button"})}),t.jsx(e,{content:"링크 스타일 트리거입니다.",triggerContent:t.jsx(Ot,{label:"Link 트리거"})}),t.jsx(e,{content:"아이콘 전용 트리거입니다.",triggerContent:t.jsx(o,{variant:"ghost",iconOnly:!0,ariaLabel:"정보",iconBefore:t.jsx(Rt,{name:"info"})})})]}))},B={name:"클릭 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'trigger="click"으로 클릭 시 말풍선을 토글합니다. 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.'},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function ClickExample() {
  return (
    <Tooltip
      trigger="click"
      content="클릭으로 열고 닫는 Tooltip입니다."
      triggerContent={<Button variant="outline" label="클릭하여 보기" />}
    />
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{trigger:"click",content:"클릭으로 열고 닫는 Tooltip입니다.",triggerContent:t.jsx(o,{variant:"outline",label:"클릭하여 보기"})}))},w={name:"배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"placement prop으로 말풍선 위치를 조정합니다. 기본은 트리거 아래·가운데 정렬입니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function PlacementExample() {
  return (
    <Tooltip
      placement="top"
      content="트리거 위"
      triggerContent={<Button variant="outline" size="sm" label="위" />}
    />
  );
}`,language:"tsx"}}},render:O(t.jsxs("div",{className:"tooltip_demo-stage",children:[t.jsxs("div",{className:"tooltip_demo-placement",children:[t.jsx("div",{className:"tooltip_demo-placement-cell-top",children:t.jsx(e,{placement:"top",content:"트리거 위",triggerContent:t.jsx(o,{variant:"outline",size:"sm",label:"위"})})}),t.jsx("div",{className:"tooltip_demo-placement-cell-left",children:t.jsx(e,{placement:"left",content:"트리거 왼쪽",triggerContent:t.jsx(o,{variant:"outline",size:"sm",label:"왼쪽"})})}),t.jsx("div",{className:"tooltip_demo-placement-cell-center",children:t.jsx(e,{content:"트리거 아래 · 가운데",triggerContent:t.jsx(o,{variant:"outline",size:"sm",label:"아래"})})}),t.jsx("div",{className:"tooltip_demo-placement-cell-right",children:t.jsx(e,{placement:"right",content:"트리거 오른쪽",triggerContent:t.jsx(o,{variant:"outline",size:"sm",label:"오른쪽"})})})]}),t.jsxs("div",{className:"tooltip_row",style:{width:"100%",justifyContent:"space-between",marginTop:"var(--space-xl)"},children:[t.jsx(e,{placement:"top-start",content:"위쪽 왼쪽 정렬",triggerContent:t.jsx(o,{variant:"ghost",label:"위 · 왼쪽"})}),t.jsx(e,{placement:"start",content:"아래쪽 왼쪽 정렬",triggerContent:t.jsx(o,{variant:"ghost",label:"아래 · 왼쪽"})}),t.jsx(e,{placement:"end",content:"아래쪽 오른쪽 정렬",triggerContent:t.jsx(o,{variant:"ghost",label:"아래 · 오른쪽"})})]})]}))},k={name:"역색",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"inverse prop으로 어두운 배경의 말풍선을 표시합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function InverseExample() {
  return (
    <Tooltip
      inverse
      content="어두운 배경의 말풍선입니다."
      triggerContent={<Button variant="ghost" label="역색 Tooltip" />}
    />
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{inverse:!0,content:"어두운 배경의 말풍선입니다.",triggerContent:t.jsx(o,{variant:"ghost",label:"역색 Tooltip"})}))},_={name:"비활성 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"비활성 버튼은 래퍼에 tabindex를 주어 pointer-events가 막힌 요소에도 설명을 제공합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function DisabledExample() {
  return (
    <Tooltip
      content="필수 항목을 모두 입력해야 제출할 수 있습니다."
      triggerContent={
        <span tabIndex={0}>
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      }
    />
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{content:"필수 항목을 모두 입력해야 제출할 수 있습니다.",triggerContent:t.jsx("span",{tabIndex:0,children:t.jsx(o,{variant:"filled",color:"primary",label:"제출 불가",disabled:!0})})}))},A={name:"화살표 기준",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"arrowAnchor(content · target · mixed)와 panelAlign, arrowTargetAlign으로 말풍선·화살표를 독립 조합합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function ArrowAnchorExample() {
  return (
    <Tooltip
      arrowAnchor="target"
      content="화살표가 트리거 중앙을 가리킵니다."
      triggerContent={<Button variant="ghost" size="sm" label="S" />}
    />
  );
}`,language:"tsx"}}},render:O(t.jsxs("div",{className:"tooltip_demo-stage",children:[t.jsx("p",{className:"form_field-hint",style:{marginBottom:"var(--space-md)"},children:"기준 비교"}),t.jsxs("div",{className:"tooltip_row",style:{alignItems:"flex-start"},children:[t.jsx(e,{content:"패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})}),t.jsx(e,{arrowAnchor:"target",content:"패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})})]}),t.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"target — 좌 · 가운데 · 우"}),t.jsxs("div",{className:"tooltip_row",style:{alignItems:"flex-start"},children:[t.jsx(e,{arrowAnchor:"target",arrowTargetAlign:"left",content:"트리거 왼쪽을 가리킵니다.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})}),t.jsx(e,{arrowAnchor:"target",content:"트리거 가운데를 가리킵니다.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})}),t.jsx(e,{arrowAnchor:"target",arrowTargetAlign:"right",content:"트리거 오른쪽을 가리킵니다.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})})]}),t.jsx("p",{className:"form_field-hint",style:{margin:"var(--space-lg) 0 var(--space-md)"},children:"mixed — 말풍선 가운데 · 화살표 조합"}),t.jsxs("div",{className:"tooltip_row",style:{alignItems:"flex-start"},children:[t.jsx(e,{arrowAnchor:"mixed",panelAlign:"center",arrowTargetAlign:"left",content:"말풍선 가운데, 화살표 왼쪽.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})}),t.jsx(e,{arrowAnchor:"mixed",panelAlign:"center",content:"말풍선·화살표 모두 가운데.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})}),t.jsx(e,{arrowAnchor:"mixed",panelAlign:"center",arrowTargetAlign:"right",content:"말풍선 가운데, 화살표 오른쪽.",triggerContent:t.jsx(o,{variant:"ghost",size:"sm",label:"S"})})]})]}))},z={name:"화살표 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"noArrow prop으로 tooltip_arrow를 숨깁니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function NoArrowExample() {
  return (
    <Tooltip
      noArrow
      content="화살표가 표시되지 않는 말풍선입니다."
      triggerContent={<Button variant="ghost" label="화살표 없음" />}
    />
  );
}`,language:"tsx"}}},render:s(t.jsx(e,{noArrow:!0,content:"화살표가 표시되지 않는 말풍선입니다.",triggerContent:t.jsx(o,{variant:"ghost",label:"화살표 없음"})}))};var W,Z,Q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="tooltip_demo-stage">
      <Tooltip {...args} triggerContent={<Button label="툴팁" variant="outline" />} />
    </div>
}`,...(Q=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,Y,tt;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        story: 'Tooltip과 triggerContent로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function BasicExample() {
  return (
    <Tooltip
      content="짧은 도움말 텍스트입니다."
      triggerContent={<Button variant="outline" label="마우스 오버" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip content="짧은 도움말 텍스트입니다." triggerContent={<Button variant="outline" label="마우스 오버" />} />)
}`,...(tt=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:tt.source}}};var et,ot,rt;b.parameters={...b.parameters,docs:{...(et=b.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: '슬롯',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'content prop 대신 children으로 말풍선 텍스트를 넣을 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function SlotExample() {
  return (
    <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>
      짧은 도움말 텍스트입니다.
    </Tooltip>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>
      짧은 도움말 텍스트입니다.
    </Tooltip>)
}`,...(rt=(ot=b.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var nt,at,st;h.parameters={...h.parameters,docs:{...(nt=h.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
        story: 'open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function OpenExample() {
  return (
    <Tooltip
      open
      content="정적 데모용 열린 상태입니다."
      triggerContent={<Button variant="filled" color="primary" label="열림" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip open content="정적 데모용 열린 상태입니다." triggerContent={<Button variant="filled" color="primary" label="열림" />} />)
}`,...(st=(at=h.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var it,lt,ct;j.parameters={...j.parameters,docs:{...(it=j.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
        story: 'size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function SizeExample() {
  return (
    <Tooltip
      size="sm"
      content="작은 말풍선"
      triggerContent={<Button variant="ghost" size="sm" label="Small" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<div className="tooltip_row" style={{
    alignItems: 'flex-start'
  }}>
      <Tooltip size="sm" content="작은 말풍선" triggerContent={<Button variant="ghost" size="sm" label="Small" />} />
      <Tooltip content="기본 크기 말풍선" triggerContent={<Button variant="ghost" label="Medium" />} />
      <Tooltip size="lg" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다." triggerContent={<Button variant="ghost" size="lg" label="Large" />} />
    </div>)
}`,...(ct=(lt=j.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var pt,mt,dt;T.parameters={...T.parameters,docs:{...(pt=T.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
        story: 'offset prop(none · sm · md · lg)으로 전 방향 간격을, offsetTop 등으로 방향별 간격을 조절합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function OffsetExample() {
  return (
    <Tooltip
      offset="lg"
      content="넓은 간격"
      triggerContent={<Button variant="ghost" size="sm" label="lg" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: stageRender(<div className="tooltip_demo-stage">
      <p className="form_field-hint" style={{
      marginBottom: 'var(--space-md)'
    }}>
        전 방향 동일
      </p>
      <div className="tooltip_row" style={{
      alignItems: 'flex-start'
    }}>
        <Tooltip offset="none" content="간격 없음" triggerContent={<Button variant="ghost" size="sm" label="none" />} />
        <Tooltip offset="sm" content="좁은 간격" triggerContent={<Button variant="ghost" size="sm" label="sm" />} />
        <Tooltip content="기본 간격" triggerContent={<Button variant="ghost" size="sm" label="md" />} />
        <Tooltip offset="lg" content="넓은 간격" triggerContent={<Button variant="ghost" size="sm" label="lg" />} />
      </div>
      <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
        방향별 (offset-* · placement)
      </p>
      <div className="tooltip_demo-placement" style={{
      minHeight: '12rem',
      padding: 0,
      border: 'none',
      background: 'transparent'
    }}>
        <div className="tooltip_demo-placement-cell-top">
          <Tooltip placement="top" offsetTop="lg" content="위쪽 간격" triggerContent={<Button variant="ghost" size="sm" label="위" />} />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Tooltip placement="left" offsetLeft="lg" content="왼쪽 간격" triggerContent={<Button variant="ghost" size="sm" label="왼쪽" />} />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Tooltip offsetBottom="lg" content="아래쪽 간격" triggerContent={<Button variant="ghost" size="sm" label="아래" />} />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Tooltip placement="right" offsetRight="lg" content="오른쪽 간격" triggerContent={<Button variant="ghost" size="sm" label="오른쪽" />} />
        </div>
      </div>
    </div>)
}`,...(dt=(mt=T.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var gt,ut,ft;y.parameters={...y.parameters,docs:{...(gt=y.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
        story: '문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다.'
      },
      source: {
        code: \`import Link from '@uxkm/ui-react/components/Link.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function InlineExample() {
  return (
    <p>
      결제 시{' '}
      <Tooltip
        content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다."
        triggerContent={<Link label="에스크로" />}
      />{' '}
      서비스를 이용할 수 있습니다.
    </p>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<p>
      결제 시{' '}
      <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다." triggerContent={<Link label="에스크로" />} />{' '}
      서비스를 이용할 수 있습니다.
    </p>)
}`,...(ft=(ut=y.parameters)==null?void 0:ut.docs)==null?void 0:ft.source}}};var xt,vt,bt;C.parameters={...C.parameters,docs:{...(xt=C.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function TriggerExample() {
  return (
    <Tooltip
      content="버튼 트리거 예시입니다."
      triggerContent={
        <Button variant="filled" color="primary" label="Button" />
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<div className="tooltip_row">
      <Tooltip content="버튼 트리거 예시입니다." triggerContent={<Button variant="filled" color="primary" label="Button" />} />
      <Tooltip content="링크 스타일 트리거입니다." triggerContent={<Link label="Link 트리거" />} />
      <Tooltip content="아이콘 전용 트리거입니다." triggerContent={<Button variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />} />
    </div>)
}`,...(bt=(vt=C.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var ht,jt,Tt;B.parameters={...B.parameters,docs:{...(ht=B.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: '클릭 트리거',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'trigger="click"으로 클릭 시 말풍선을 토글합니다. 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function ClickExample() {
  return (
    <Tooltip
      trigger="click"
      content="클릭으로 열고 닫는 Tooltip입니다."
      triggerContent={<Button variant="outline" label="클릭하여 보기" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다." triggerContent={<Button variant="outline" label="클릭하여 보기" />} />)
}`,...(Tt=(jt=B.parameters)==null?void 0:jt.docs)==null?void 0:Tt.source}}};var yt,Ct,Bt;w.parameters={...w.parameters,docs:{...(yt=w.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
        story: 'placement prop으로 말풍선 위치를 조정합니다. 기본은 트리거 아래·가운데 정렬입니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function PlacementExample() {
  return (
    <Tooltip
      placement="top"
      content="트리거 위"
      triggerContent={<Button variant="outline" size="sm" label="위" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: stageRender(<div className="tooltip_demo-stage">
      <div className="tooltip_demo-placement">
        <div className="tooltip_demo-placement-cell-top">
          <Tooltip placement="top" content="트리거 위" triggerContent={<Button variant="outline" size="sm" label="위" />} />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Tooltip placement="left" content="트리거 왼쪽" triggerContent={<Button variant="outline" size="sm" label="왼쪽" />} />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Tooltip content="트리거 아래 · 가운데" triggerContent={<Button variant="outline" size="sm" label="아래" />} />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Tooltip placement="right" content="트리거 오른쪽" triggerContent={<Button variant="outline" size="sm" label="오른쪽" />} />
        </div>
      </div>
      <div className="tooltip_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}>
        <Tooltip placement="top-start" content="위쪽 왼쪽 정렬" triggerContent={<Button variant="ghost" label="위 · 왼쪽" />} />
        <Tooltip placement="start" content="아래쪽 왼쪽 정렬" triggerContent={<Button variant="ghost" label="아래 · 왼쪽" />} />
        <Tooltip placement="end" content="아래쪽 오른쪽 정렬" triggerContent={<Button variant="ghost" label="아래 · 오른쪽" />} />
      </div>
    </div>)
}`,...(Bt=(Ct=w.parameters)==null?void 0:Ct.docs)==null?void 0:Bt.source}}};var wt,kt,_t;k.parameters={...k.parameters,docs:{...(wt=k.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  name: '역색',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'inverse prop으로 어두운 배경의 말풍선을 표시합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function InverseExample() {
  return (
    <Tooltip
      inverse
      content="어두운 배경의 말풍선입니다."
      triggerContent={<Button variant="ghost" label="역색 Tooltip" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip inverse content="어두운 배경의 말풍선입니다." triggerContent={<Button variant="ghost" label="역색 Tooltip" />} />)
}`,...(_t=(kt=k.parameters)==null?void 0:kt.docs)==null?void 0:_t.source}}};var At,zt,Nt;_.parameters={..._.parameters,docs:{...(At=_.parameters)==null?void 0:At.docs,source:{originalSource:`{
  name: '비활성 트리거',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '비활성 버튼은 래퍼에 tabindex를 주어 pointer-events가 막힌 요소에도 설명을 제공합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function DisabledExample() {
  return (
    <Tooltip
      content="필수 항목을 모두 입력해야 제출할 수 있습니다."
      triggerContent={
        <span tabIndex={0}>
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다." triggerContent={<span tabIndex={0}>
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>} />)
}`,...(Nt=(zt=_.parameters)==null?void 0:zt.docs)==null?void 0:Nt.source}}};var St,Pt,It;A.parameters={...A.parameters,docs:{...(St=A.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
        story: 'arrowAnchor(content · target · mixed)와 panelAlign, arrowTargetAlign으로 말풍선·화살표를 독립 조합합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function ArrowAnchorExample() {
  return (
    <Tooltip
      arrowAnchor="target"
      content="화살표가 트리거 중앙을 가리킵니다."
      triggerContent={<Button variant="ghost" size="sm" label="S" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: stageRender(<div className="tooltip_demo-stage">
      <p className="form_field-hint" style={{
      marginBottom: 'var(--space-md)'
    }}>
        기준 비교
      </p>
      <div className="tooltip_row" style={{
      alignItems: 'flex-start'
    }}>
        <Tooltip content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
        <Tooltip arrowAnchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
      </div>
      <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
        target — 좌 · 가운데 · 우
      </p>
      <div className="tooltip_row" style={{
      alignItems: 'flex-start'
    }}>
        <Tooltip arrowAnchor="target" arrowTargetAlign="left" content="트리거 왼쪽을 가리킵니다." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
        <Tooltip arrowAnchor="target" content="트리거 가운데를 가리킵니다." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
        <Tooltip arrowAnchor="target" arrowTargetAlign="right" content="트리거 오른쪽을 가리킵니다." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
      </div>
      <p className="form_field-hint" style={{
      margin: 'var(--space-lg) 0 var(--space-md)'
    }}>
        mixed — 말풍선 가운데 · 화살표 조합
      </p>
      <div className="tooltip_row" style={{
      alignItems: 'flex-start'
    }}>
        <Tooltip arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="left" content="말풍선 가운데, 화살표 왼쪽." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
        <Tooltip arrowAnchor="mixed" panelAlign="center" content="말풍선·화살표 모두 가운데." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
        <Tooltip arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="right" content="말풍선 가운데, 화살표 오른쪽." triggerContent={<Button variant="ghost" size="sm" label="S" />} />
      </div>
    </div>)
}`,...(It=(Pt=A.parameters)==null?void 0:Pt.docs)==null?void 0:It.source}}};var Et,Lt,Dt;z.parameters={...z.parameters,docs:{...(Et=z.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
        story: 'noArrow prop으로 tooltip_arrow를 숨깁니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function NoArrowExample() {
  return (
    <Tooltip
      noArrow
      content="화살표가 표시되지 않는 말풍선입니다."
      triggerContent={<Button variant="ghost" label="화살표 없음" />}
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: tooltipDemo(<Tooltip noArrow content="화살표가 표시되지 않는 말풍선입니다." triggerContent={<Button variant="ghost" label="화살표 없음" />} />)
}`,...(Dt=(Lt=z.parameters)==null?void 0:Lt.docs)==null?void 0:Dt.source}}};const Ce=["Playground","Basic","Slot","Open","Size","Offset","Inline","Trigger","Click","Placement","Inverse","Disabled","ArrowAnchor","NoArrow"];export{A as ArrowAnchor,v as Basic,B as Click,_ as Disabled,y as Inline,k as Inverse,z as NoArrow,T as Offset,h as Open,w as Placement,x as Playground,j as Size,b as Slot,C as Trigger,Ce as __namedExportsOrder,ye as default};
