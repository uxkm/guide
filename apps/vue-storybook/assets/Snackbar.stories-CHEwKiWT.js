import{u as Me,a as Oe,au as je,a4 as Ee,av as Ue,aw as qe,o as p,m as De,w as Ke,c as g,p as Ge,s as U,r as $,e as q,_ as K,g as f,f as He,t as G,d as we,ax as Je,h as P,j as m,n as Qe,am as We,ay as Xe,q as V}from"./iframe-BHuoLYUS.js";import{w as l,s as Ye}from"./story-renders-C_n8_MI3.js";import"./preload-helper-PMqzWbAN.js";const Ze=["role","aria-live"],ea={key:0,class:"snackbar_icon-wrap","aria-hidden":"true"},aa={key:1,class:"snackbar_message"},na={key:2,class:"snackbar_action"},ta=["data-ripple"],oa=["data-ripple","aria-label"],t=Object.assign({inheritAttrs:!1},{__name:"Snackbar",props:{message:String,color:{type:String,default:"info",validator:e=>["info","success","warning","danger"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},round:Boolean,showIcon:{type:Boolean,default:!0},closable:Boolean,closeLabel:{type:String,default:"알림 닫기"},actionLabel:String,closeOnAction:{type:Boolean,default:!0},motion:{type:String,default:"fade",validator:e=>["fade","slide","none"].includes(e)},placement:{type:String,default:void 0,validator:e=>["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end","top-left","top-right","middle-left","middle-right","bottom-left","bottom-right"].includes(e)},duration:{type:Number,default:0},role:{type:String,default:"status"},ripple:{type:Boolean,default:!0}},emits:["action","close"],setup(e,{emit:u}){const a=e,b=u,d=Me(),B=Oe(),C=je("uxkm-snackbar-placement",null),i=P(null),o=P(!0),r=P("entering");let s,L=0,c=0,T="close",I;const _e=m(()=>a.placement||(C==null?void 0:C.value)||C||"bottom-center"),he=m(()=>a.color==="danger"?"color_error":`color_${a.color}`),xe=m(()=>["snackbar",he.value,`snackbar_motion-${a.motion}`,`snackbar_placement-${_e.value}`,`is-${r.value}`,{snackbar_sm:a.size==="sm",snackbar_lg:a.size==="lg",snackbar_round:a.round},B.class]),N=m(()=>a.role||"status"),ze=m(()=>N.value==="alert"?"assertive":"polite"),Re=m(()=>({info:"info",success:"check-circle",warning:"alert-triangle",danger:"x-circle"})[a.color]||"info"),$e=m(()=>!!(a.message||d.default));function v(){s&&(window.clearTimeout(s),s=void 0)}function M(n=c||a.duration){v(),!(n<=0||!o.value)&&(c=n,L=Date.now(),s=window.setTimeout(()=>k("timeout"),n))}function O(){s&&(c=Math.max(0,c-(Date.now()-L)),v())}function j(){!s&&c>0&&M(c)}function k(n="close",S){o.value&&(v(),T=n,I=S,o.value=!1)}function Pe(n){b("action",n),a.closeOnAction&&k("action",n)}function Fe(n){a.closable&&n.key==="Escape"&&(n.preventDefault(),k("close",n))}function Le(){r.value="entering"}function Ve(){r.value="open"}function Te(){r.value="leaving"}function Ie(){b("close",T,I)}return Ee(async()=>{c=a.duration,a.duration>0&&M(),await Ue(),a.motion==="none"&&(r.value="open")}),qe(v),(n,S)=>(p(),De(Je,{name:`snackbar-${e.motion}`,appear:"",onBeforeEnter:Le,onAfterEnter:Ve,onBeforeLeave:Te,onAfterLeave:Ie},{default:Ke(()=>[o.value?(p(),g("div",Ge({key:0,ref_key:"rootRef",ref:i},U(B),{class:xe.value,role:N.value,"aria-live":ze.value,"aria-atomic":"true","aria-relevant":"additions text",onMouseenter:O,onMouseleave:j,onFocusin:O,onFocusout:j,onKeydown:Fe}),[e.showIcon?(p(),g("span",ea,[$(n.$slots,"icon",{},()=>[q(K,{name:Re.value,class:"snackbar_icon"},null,8,["name"])])])):f("",!0),$e.value?(p(),g("div",aa,[$(n.$slots,"default",{},()=>[He(G(e.message),1)])])):f("",!0),e.actionLabel||U(d).action?(p(),g("div",na,[$(n.$slots,"action",{close:k},()=>[we("button",{type:"button",class:"snackbar_action-btn","data-ripple":e.ripple?!0:"false",onClick:Pe},G(e.actionLabel),9,ta)])])):f("",!0),e.closable?(p(),g("button",{key:3,type:"button",class:"snackbar_close","data-ripple":e.ripple?"surface":"false","aria-label":e.closeLabel,onClick:S[0]||(S[0]=Ne=>k("close",Ne))},[q(K,{name:"close",size:"sm"})],8,oa)):f("",!0)],16,Ze)):f("",!0)]),_:3},8,["name"]))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Snackbar",description:"",tags:{},props:[{name:"message",type:{name:"string"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'info'"},values:["info","success","warning","danger"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"round",type:{name:"boolean"}},{name:"showIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closable",type:{name:"boolean"}},{name:"closeLabel",type:{name:"string"},defaultValue:{func:!1,value:"'알림 닫기'"}},{name:"actionLabel",type:{name:"string"}},{name:"closeOnAction",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"motion",type:{name:"string"},defaultValue:{func:!1,value:"'fade'"},values:["fade","slide","none"]},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"undefined"},values:["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end","top-left","top-right","middle-left","middle-right","bottom-left","bottom-right"]},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"role",type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ripple",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"action"},{name:"close"}],slots:[{name:"icon"},{name:"default"},{name:"action",scoped:!0,bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Snackbar.vue"]});const sa=["role","aria-label"],F={__name:"SnackbarRegion",props:{placement:{type:String,default:"bottom-center",validator:e=>["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"].includes(e)},label:String},setup(e){const u=e,a=m(()=>u.placement);return Xe("uxkm-snackbar-placement",a),(b,d)=>(p(),De(We,{to:"body"},[we("div",{class:Qe(["snackbar_region",`snackbar_region-${a.value}`]),role:e.label?"region":void 0,"aria-label":e.label},[$(b.$slots,"default")],10,sa)]))}};F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:"default",displayName:"SnackbarRegion",description:"",tags:{},props:[{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"'bottom-center'"},values:["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"]},{name:"label",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/SnackbarRegion.vue"]});const H=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ra=[{name:"color",type:"'info' | 'success' | 'warning' | 'danger'",default:"info",description:"의미 색상. danger는 color_error"},{name:"message",type:"string",default:"—",description:"메시지. default 슬롯이 있으면 대체됨"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼과 내부 포커스 상태의 Escape 닫기 지원"},{name:"close-label",type:"string",default:"알림 닫기",description:"닫기 버튼의 접근성 라벨"},{name:"show-icon",type:"boolean",default:"true",description:"의미 색상에 대응하는 기본 아이콘 표시"},{name:"round",type:"boolean",default:"false",description:"높이 비율에 맞춘 캡슐형 모서리와 가로 패딩 적용"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"snackbar_sm · snackbar_lg"},{name:"duration",type:"number",default:"0",description:"자동 닫기 시간(ms). 0이면 유지하며, 호버·내부 포커스 중에는 타이머 일시정지"},{name:"motion",type:"'fade' | 'slide' | 'none'",default:"fade",description:"호출·닫기 효과. slide는 placement 방향을 따름"},{name:"placement",type:"SnackbarPlacement",default:"상위 Region 값",description:"Region 없이 사용하거나 Slide 방향을 직접 재정의할 때 지정"},{name:"role",type:"string",default:"status",description:"status는 polite, alert는 assertive 라이브 영역으로 설정"},{name:"action-label",type:"string",default:"—",description:"기본 액션 버튼 레이블"},{name:"close-on-action",type:"boolean",default:"true",description:"기본 액션 실행 후 닫기"},{name:"ripple",type:"boolean",default:"true",description:"닫기·기본 액션 버튼의 클릭 파장"}],ca=[{name:"placement",type:"'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'",default:"bottom-center",description:"고정 위치. start와 end는 RTL에서도 논리 방향을 따름"},{name:"label",type:"string",default:"—",description:"Snackbar 영역의 접근성 라벨"},{name:"default slot",type:"VNode",default:"—",description:"같은 위치에 세로로 쌓을 Snackbar 목록"},{name:"class",type:"string",default:"—",description:"snackbar_region에 추가 클래스"}],la=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ua=[{name:"default",description:"메시지 콘텐츠 (message prop 대체)"},{name:"icon",description:"커스텀 아이콘"},{name:"action",description:"버튼·링크 등 후속 동작. close 함수를 slot prop으로 제공"}],ia=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],ma=[{name:"action(event)",description:"기본 액션 버튼 클릭 시"},{name:"close(reason, event)",description:"퇴장 후 호출. reason은 'close' · 'action' · 'timeout'"}],da=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],pa=[{name:"snackbar",description:"Snackbar 루트"},{name:"snackbar_sm · snackbar_lg",description:"크기 변형"},{name:"snackbar_round",description:"높이 비율에 맞춘 캡슐형 모서리"},{name:"snackbar_motion-fade · snackbar_motion-slide",description:"호출·닫기 모션 유형"},{name:"snackbar_placement-{placement}",description:"Slide 진입·퇴장 방향"},{name:"is-entering · is-open · is-leaving",description:"Snackbar 모션 생명주기 상태"},{name:"snackbar_icon-wrap · snackbar_icon",description:"아이콘 영역"},{name:"snackbar_message",description:"메시지 영역"},{name:"snackbar_action · snackbar_close",description:"액션·닫기 영역"},{name:"snackbar_region",description:"고정 위치와 다중 Snackbar 스택 컨테이너"},{name:"snackbar_region-{placement}",description:"상단·중간·하단의 8개 위치 변형"},{name:"color_info · color_success · color_warning · color_error",description:"의미 색상"},{name:"aria-live · aria-atomic · aria-relevant",description:"메시지 전체를 스크린 리더에 알리는 라이브 영역 속성"},{name:'data-ripple · data-ripple="false"',description:"클릭 파장 활성·비활성"}],ba=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ca=[{name:"--color-snackbar-info-bg · --color-snackbar-success-bg",default:"테마별 불투명 색상",description:"정보·성공 Snackbar 불투명 배경"},{name:"--color-snackbar-warning-bg · --color-snackbar-error-bg",default:"테마별 불투명 색상",description:"경고·오류 Snackbar 불투명 배경"},{name:"--color-snackbar-*-border",default:"테마별 불투명 색상",description:"의미 색상별 불투명 테두리"},{name:"--snackbar-min-width · --snackbar-max-width",default:"18rem · 36rem",description:"기본 최소·최대 너비"},{name:"--snackbar-padding-y · --snackbar-padding-x",default:"var(--space-sm) · var(--space-md)",description:"기본 패딩"},{name:"--snackbar-gap · --snackbar-action-gap",default:"var(--space-sm)",description:"콘텐츠·액션 간격"},{name:"--snackbar-font-size · --snackbar-line-height",default:"var(--text-size-base) · 1.5",description:"기본 타이포"},{name:"--snackbar-icon-size · --snackbar-close-size",default:"1.25rem · 2rem",description:"아이콘·닫기 버튼 크기"},{name:"--snackbar-round-padding-x",default:"var(--space-lg)",description:"기본 round 유형 가로 패딩"},{name:"--snackbar-round-padding-x-sm · --snackbar-round-padding-x-lg",default:"var(--space-md) · var(--space-xl)",description:"sm·lg round 유형 가로 패딩"},{name:"--snackbar-motion-duration · --snackbar-motion-distance",default:"200ms · 1rem",description:"Fade·Slide 시간과 이동 거리"},{name:"--snackbar-motion-easing",default:"cubic-bezier(0.2, 0, 0, 1)",description:"호출·닫기 가속 곡선"},{name:"--snackbar-region-offset · --snackbar-region-gap",default:"var(--space-md) · var(--space-sm)",description:"화면 가장자리 간격·Snackbar 사이 간격"},{name:"--snackbar-region-inset-block-start · --snackbar-region-inset-block-end",default:"var(--snackbar-region-offset)",description:"상단·하단 안전 영역"},{name:"--snackbar-region-inset-inline-start · --snackbar-region-inset-inline-end",default:"var(--snackbar-region-offset)",description:"좌측·우측 안전 영역"},{name:"--snackbar-region-z-index",default:"1200",description:"고정 Snackbar 스택 레이어"},{name:"--snackbar-padding-y-sm · --snackbar-padding-x-sm · --snackbar-font-size-sm",default:"var(--space-xs) · var(--space-sm) · var(--text-size-sm)",description:"sm 크기"},{name:"--snackbar-padding-y-lg · --snackbar-padding-x-lg · --snackbar-font-size-lg",default:"var(--space-md) · var(--space-lg) · var(--text-size-lg)",description:"lg 크기"}],ka=[{title:"API · Props",tables:[{columns:H,rows:ra,codeColumn:"name"}]},{title:"API · SnackbarRegion",tables:[{columns:H,rows:ca,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:la,rows:ua,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:ia,rows:ma,codeColumn:"name"}]},{title:"클래스 · 속성",tables:[{columns:da,rows:pa,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ba,rows:Ca,codeColumn:"name"}]}],va={title:"Components/피드백/Snackbar",id:"components-snackbar",component:t,tags:["autodocs"],argTypes:{color:{control:"select",options:["info","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},motion:{control:"select",options:["fade","slide","none"]},placement:{control:"select",options:["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"]},duration:{control:"number"}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ka}},y={args:{message:"새로운 업데이트가 있습니다.",color:"info",size:"md",round:!1,showIcon:!0,closable:!0,closeLabel:"알림 닫기",actionLabel:"",closeOnAction:!0,motion:"fade",placement:"bottom-center",duration:0,role:"status",ripple:!0},render:(e,u)=>({components:{Snackbar:t},setup(){return{args:Ye(u)}},template:'<Snackbar v-bind="args" />'})},A={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"info · success · warning · danger 의미 색상으로 짧은 피드백을 전달합니다."}}},render:l(()=>({components:{Snackbar:t},template:`<Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />`}))},E={name:"위치 · 여러 개 동작 테스트",parameters:{docs:{description:{story:"8개 위치는 브라우저 뷰포트를 기준으로 계산되며, 같은 위치의 Snackbar는 독립적으로 쌓입니다."}}},render:l(()=>({components:{Button:V,Snackbar:t,SnackbarRegion:F},setup(){const e=["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"],u={"top-start":"상단 좌측","top-center":"상단 가운데","top-end":"상단 우측","middle-start":"중간 좌측","middle-end":"중간 우측","bottom-start":"하단 좌측","bottom-center":"하단 가운데","bottom-end":"하단 우측"},a=P([]);let b=0;const d=(i,o=1,r=!1,s="fade")=>{a.value.push(...Array.from({length:o},(L,c)=>({id:++b,placement:i,round:r,motion:s,message:`${u[i]} Snackbar${o>1?` ${c+1}`:""}`})))},B=(i=1,o=!1,r="fade")=>e.forEach(s=>d(s,i,o,r)),C=i=>{a.value=a.value.filter(o=>o.id!==i)};return Ee(()=>d("bottom-center",1,!1,"slide")),{placements:e,labels:u,items:a,add:d,addAll:B,remove:C}},template:`<div class="snackbar_playground">
      <div class="snackbar_playground-controls" aria-label="Snackbar 위치 테스트">
        <Button v-for="placement in placements" :key="placement" variant="outline" size="sm" :label="labels[placement]" @click="add(placement)" />
      </div>
      <div class="snackbar_playground-actions">
        <Button label="모든 위치에 1개" @click="addAll()" />
        <Button color="success" label="각 위치에 3개씩" @click="addAll(3)" />
        <Button variant="outline" label="모든 위치에 라운드" @click="addAll(1, true)" />
        <Button variant="outline" label="모든 위치 Slide" @click="addAll(1, false, 'slide')" />
        <Button variant="ghost" label="전체 닫기" :disabled="!items.length" @click="items = []" />
      </div>
    </div>
    <SnackbarRegion v-for="placement in placements" :key="placement" :placement="placement">
      <Snackbar v-for="item in items.filter((entry) => entry.placement === placement)" :key="item.id" v-bind="item" :duration="8000" closable @close="remove(item.id)" />
    </SnackbarRegion>`}))},D={name:"간단한 메시지",render:l(()=>({components:{Snackbar:t},template:'<Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>'}))},w={name:"형태",parameters:{demoPreview:{stack:!0}},render:l(()=>({components:{Button:V,Snackbar:t},template:`<Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar round color="warning" message="액션과 닫기가 포함된 라운드" closable>
        <template #action="{ close }"><Button variant="ghost" size="sm" label="확인" @click="close('action', $event)" /></template>
      </Snackbar>`}))},_={name:"호출 · 닫기 효과",parameters:{demoPreview:{stack:!0}},render:l(()=>({components:{Snackbar:t},template:'<Snackbar motion="fade" message="Fade 효과" /><Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" /><Snackbar motion="none" message="전환 효과 없음" />'}))},h={name:"크기",parameters:{demoPreview:{stack:!0}},render:l(()=>({components:{Snackbar:t},template:'<Snackbar size="sm" message="Small Snackbar" /><Snackbar message="Medium Snackbar" /><Snackbar size="lg" message="Large Snackbar" />'}))},x={name:"액션",render:l(()=>({components:{Button:V,Snackbar:t},template:`<Snackbar color="success" message="항목을 삭제했습니다."><template #action="{ close }"><Button variant="ghost" size="sm" label="실행 취소" @click="close('action', $event)" /></template></Snackbar>`}))},z={name:"닫기 가능",render:l(()=>({components:{Snackbar:t},template:'<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." />'}))},R={name:"자동 닫기",render:l(()=>({components:{Snackbar:t},template:'<Snackbar :duration="4000" color="success" message="실제 서비스에서는 duration=4000처럼 자동 닫기를 설정할 수 있습니다." />'}))};var J,Q,W;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    message: '새로운 업데이트가 있습니다.',
    color: 'info',
    size: 'md',
    round: false,
    showIcon: true,
    closable: true,
    closeLabel: '알림 닫기',
    actionLabel: '',
    closeOnAction: true,
    motion: 'fade',
    placement: 'bottom-center',
    duration: 0,
    role: 'status',
    ripple: true
  },
  render: (_args, context) => ({
    components: {
      Snackbar
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Snackbar v-bind="args" />'
  })
}`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'info · success · warning · danger 의미 색상으로 짧은 피드백을 전달합니다.'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Snackbar
    },
    template: \`<Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />\`
  }))
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '위치 · 여러 개 동작 테스트',
  parameters: {
    docs: {
      description: {
        story: '8개 위치는 브라우저 뷰포트를 기준으로 계산되며, 같은 위치의 Snackbar는 독립적으로 쌓입니다.'
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Snackbar,
      SnackbarRegion
    },
    setup() {
      const placements = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'];
      const labels = {
        'top-start': '상단 좌측',
        'top-center': '상단 가운데',
        'top-end': '상단 우측',
        'middle-start': '중간 좌측',
        'middle-end': '중간 우측',
        'bottom-start': '하단 좌측',
        'bottom-center': '하단 가운데',
        'bottom-end': '하단 우측'
      };
      const items = ref([]);
      let id = 0;
      const add = (placement, count = 1, round = false, motion = 'fade') => {
        items.value.push(...Array.from({
          length: count
        }, (_, index) => ({
          id: ++id,
          placement,
          round,
          motion,
          message: \`\${labels[placement]} Snackbar\${count > 1 ? \` \${index + 1}\` : ''}\`
        })));
      };
      const addAll = (count = 1, round = false, motion = 'fade') => placements.forEach(placement => add(placement, count, round, motion));
      const remove = itemId => {
        items.value = items.value.filter(item => item.id !== itemId);
      };
      onMounted(() => add('bottom-center', 1, false, 'slide'));
      return {
        placements,
        labels,
        items,
        add,
        addAll,
        remove
      };
    },
    template: \`<div class="snackbar_playground">
      <div class="snackbar_playground-controls" aria-label="Snackbar 위치 테스트">
        <Button v-for="placement in placements" :key="placement" variant="outline" size="sm" :label="labels[placement]" @click="add(placement)" />
      </div>
      <div class="snackbar_playground-actions">
        <Button label="모든 위치에 1개" @click="addAll()" />
        <Button color="success" label="각 위치에 3개씩" @click="addAll(3)" />
        <Button variant="outline" label="모든 위치에 라운드" @click="addAll(1, true)" />
        <Button variant="outline" label="모든 위치 Slide" @click="addAll(1, false, 'slide')" />
        <Button variant="ghost" label="전체 닫기" :disabled="!items.length" @click="items = []" />
      </div>
    </div>
    <SnackbarRegion v-for="placement in placements" :key="placement" :placement="placement">
      <Snackbar v-for="item in items.filter((entry) => entry.placement === placement)" :key="item.id" v-bind="item" :duration="8000" closable @close="remove(item.id)" />
    </SnackbarRegion>\`
  }))
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,oe,se;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '간단한 메시지',
  render: withDocsCanvasRender(() => ({
    components: {
      Snackbar
    },
    template: '<Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>'
  }))
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ce,le;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '형태',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Snackbar
    },
    template: \`<Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar round color="warning" message="액션과 닫기가 포함된 라운드" closable>
        <template #action="{ close }"><Button variant="ghost" size="sm" label="확인" @click="close('action', $event)" /></template>
      </Snackbar>\`
  }))
}`,...(le=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,ie,me;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: '호출 · 닫기 효과',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Snackbar
    },
    template: '<Snackbar motion="fade" message="Fade 효과" /><Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" /><Snackbar motion="none" message="전환 효과 없음" />'
  }))
}`,...(me=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,pe,be;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Snackbar
    },
    template: '<Snackbar size="sm" message="Small Snackbar" /><Snackbar message="Medium Snackbar" /><Snackbar size="lg" message="Large Snackbar" />'
  }))
}`,...(be=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var Ce,ke,ge;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: '액션',
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      Snackbar
    },
    template: '<Snackbar color="success" message="항목을 삭제했습니다."><template #action="{ close }"><Button variant="ghost" size="sm" label="실행 취소" @click="close(\\'action\\', $event)" /></template></Snackbar>'
  }))
}`,...(ge=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:ge.source}}};var fe,Be,ve;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: '닫기 가능',
  render: withDocsCanvasRender(() => ({
    components: {
      Snackbar
    },
    template: '<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." />'
  }))
}`,...(ve=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:ve.source}}};var Se,ye,Ae;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: '자동 닫기',
  render: withDocsCanvasRender(() => ({
    components: {
      Snackbar
    },
    template: '<Snackbar :duration="4000" color="success" message="실제 서비스에서는 duration=4000처럼 자동 닫기를 설정할 수 있습니다." />'
  }))
}`,...(Ae=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};const Sa=["Playground","Basic","Placement","Simple","Shape","Motion","Size","Action","Closable","Duration"];export{x as Action,A as Basic,z as Closable,R as Duration,_ as Motion,E as Placement,y as Playground,w as Shape,D as Simple,h as Size,Sa as __namedExportsOrder,va as default};
