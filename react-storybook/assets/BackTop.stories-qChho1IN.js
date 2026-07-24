import{r as d,d as U,u as Y,c as $,O as ee,n as oe,j as e,B as ae,I as se,a as te,t as ce,b as re}from"./iframe-ifEc15ad.js";import{w as ie}from"./story-renders-Hdz_JUlO.js";import{h as le,a as pe}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const ne=new Set(["sm","md","lg"]),de=new Set(["","primary","ghost"]),me=re("BackTop",{defaults:{visibilityHeight:400,size:"md",ariaLabel:"맨 위로",interactive:!0},booleanProps:new Set(["interactive","ripple"]),selfClosing:!1});function a({ripple:s,target:t,visibilityHeight:c=400,size:x="md",color:h="",label:g,ariaLabel:y="맨 위로",interactive:r=!0,children:f,className:j,style:N,...T}){const l=d.useRef(null),{rippleAttrs:Q}=U({ripple:s}),p=ne.has(x)?x:"md",n=de.has(h)?h:"",X=!t;Y(me,{ripple:s,target:t,visibilityHeight:c,size:p,color:n||void 0,label:g,ariaLabel:y,interactive:r},$({default:f}),l,{className:j,style:N,...T});const J=d.useMemo(()=>{const o=["back_top"];return p==="sm"&&o.push("back_top_sm"),p==="lg"&&o.push("back_top_lg"),n==="primary"&&o.push("back_top_primary"),n==="ghost"&&o.push("back_top_ghost"),o},[p,n]),Z=d.useMemo(()=>{const o={};return r&&(o["data-back-top"]=""),t&&(o["data-target"]=t),Number(c)!==400&&(o["data-visibility-height"]=String(c)),o},[r,t,c]);d.useEffect(()=>{if(!(!r||!l.current))return ee(l.current)},[r,t,c]);const{class:Te,...G}=T,K=oe(G),w=e.jsx("div",{ref:l,className:te(J,j),style:N,...Z,...K,children:e.jsx(ae,{variant:"ghost",className:"back_top_btn",ariaLabel:y,...Q,children:f??e.jsxs(e.Fragment,{children:[e.jsx(se,{name:"arrow-up",className:"back_top_icon"}),g?e.jsx("span",{className:"back_top_label",children:g}):null]})})});return X&&typeof document<"u"?ce.createPortal(w,document.body):w}a.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{visibilityHeight:{defaultValue:{value:"400",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"''",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'맨 위로'",computed:!1},required:!1},interactive:{defaultValue:{value:"true",computed:!1},required:!1}}};const be=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ke=[{name:"target",type:"string",default:"—",description:"스크롤 컨테이너 선택자 (data-target). 생략 시 window"},{name:"visibility-height",type:"number | string",default:"400",description:"버튼 표시 임계 스크롤(px, data-visibility-height)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"back_top_sm · back_top_lg"},{name:"color",type:"'' | 'primary' | 'ghost'",default:"—",description:"back_top_primary · back_top_ghost"},{name:"label",type:"string",default:"—",description:"버튼 텍스트 (back_top_label)"},{name:"aria-label",type:"string",default:"맨 위로",description:"접근성 라벨"},{name:"interactive",type:"boolean",default:"true",description:"false면 data-back-top 미부여"},le],ue=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ve=[{name:"default",description:"버튼 콘텐츠 (아이콘·텍스트)"}],_e=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ge=[{name:"back_top · back_top_btn · back_top_icon · back_top_label",description:"루트·버튼·아이콘·텍스트"},{name:"back_top_sm · back_top_lg · back_top_primary · back_top_ghost",description:"크기·색상"},{name:"is-visible",description:"스크롤 임계 초과 시 표시"},{name:"data-back-top · data-target · data-visibility-height",description:"JS 연동"},...pe],xe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],he=[{name:"--back-top-size · --back-top-size-sm · --back-top-size-lg",default:"—",description:"버튼 크기"},{name:"--back-top-offset-bottom · --back-top-offset-right",default:"—",description:"플로팅 위치"},{name:"--back-top-z-index",default:"—",description:"레이어 순서"}],ye=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],fe=[{name:"children",description:"버튼 콘텐츠 (아이콘·텍스트, 기본 슬롯 대체)"}],je=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 visibility-height · aria-label은 visibilityHeight · ariaLabel입니다.",tables:[{columns:be,rows:ke,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue default 슬롯은 React children으로 다룹니다.",tables:[{columns:ue,rows:ve,codeColumn:"name"},{columns:ye,rows:fe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:_e,rows:ge,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:xe,rows:he,codeColumn:"name"}]}];function i(s){return ie(s,s)}const Ne={size:"md",color:"primary",label:"",ariaLabel:"맨 위로",interactive:!0},ze={title:"Components/기타/BackTop",id:"components-back-top",component:a,tags:["autodocs"],argTypes:{target:{control:"text",type:{name:"string",summary:"string"}},visibilityHeight:{control:"number",type:{name:"number",summary:"number | string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},color:{control:"select",options:["","primary","ghost"],type:{name:"enum",summary:"'' | 'primary' | 'ghost'"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:je,docs:{description:{component:"스크롤 후 페이지·컨테이너 상단으로 이동하는 BackTop 플로팅 버튼입니다."}}}},m={parameters:{controls:{disable:!1}},args:{...Ne},render:s=>e.jsxs("div",{className:"back_top_demo-wrap",children:[e.jsx("div",{className:"back_top_demo-scroll",id:"back-top-scroll-playground",children:e.jsxs("div",{className:"back_top_demo-content",children:[e.jsx("p",{children:"아래로 스크롤하면 맨 위로 버튼이 표시됩니다. Controls로 size · color · label을 조절하세요."}),e.jsx("p",{children:"상품 설명 · 리뷰 · 배송 안내"}),e.jsx("p",{children:"교환·반품 · 문의처"})]})}),e.jsx(a,{...s,target:"#back-top-scroll-playground",visibilityHeight:80})]})},b={name:"기본",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`data-back-top`과 `data-target`으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다."},source:{code:`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function BasicExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-basic">
        <div className="back_top_demo-content">
          <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-basic" visibilityHeight={80} />
    </div>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"back_top_demo-wrap",children:[e.jsx("div",{className:"back_top_demo-scroll",id:"back-top-scroll-basic",children:e.jsxs("div",{className:"back_top_demo-content",children:[e.jsx("p",{children:"상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다."}),e.jsx("p",{children:"무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수"}),e.jsx("p",{children:"색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착"}),e.jsx("p",{children:"상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다."}),e.jsx("p",{children:"리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상"}),e.jsx("p",{children:"함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블"}),e.jsx("p",{children:"교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다."}),e.jsx("p",{children:"문의: 고객센터 1588-0000 (평일 09:00–18:00)"})]})}),e.jsx(a,{target:"#back-top-scroll-basic",visibilityHeight:80})]}))},k={name:"표시 임계값",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`visibilityHeight`으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다."},source:{code:`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function VisibilityExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div className="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-visibility" visibilityHeight={200} color="primary" />
    </div>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"back_top_demo-wrap",children:[e.jsx("div",{className:"back_top_demo-scroll",id:"back-top-scroll-visibility",children:e.jsxs("div",{className:"back_top_demo-content",children:[e.jsx("p",{children:"공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다."}),e.jsx("p",{children:"[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00"}),e.jsx("p",{children:"[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지"}),e.jsx("p",{children:"[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정"}),e.jsx("p",{children:"[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역"}),e.jsx("p",{children:"[공지] 개인정보 처리방침 개정 — 4/1 시행"}),e.jsx("p",{children:"[이벤트] 봄맞이 세일 — 최대 50% 할인"}),e.jsx("p",{children:"[안내] 고객센터 운영 시간 변경 — 공휴일 휴무"})]})}),e.jsx(a,{target:"#back-top-scroll-visibility",visibilityHeight:200,color:"primary"})]}))},u={name:"크기",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"`back_top_sm` · `back_top_lg` 클래스로 버튼 크기를 조절합니다."},source:{code:`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function SizeExample() {
  return (
    <>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-sm">
          <div className="back_top_demo-content">
            <p>Small 크기 예시입니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-sm" size="sm" visibilityHeight={60} />
      </div>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-lg">
          <div className="back_top_demo-content">
            <p>Large 크기 예시입니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" visibilityHeight={60} />
      </div>
    </>
  );
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"back_top_demo-wrap",children:[e.jsx("div",{className:"back_top_demo-scroll",id:"back-top-scroll-sm",children:e.jsxs("div",{className:"back_top_demo-content",children:[e.jsx("p",{children:"Small 크기 예시입니다. 스크롤해 보세요."}),e.jsx("p",{children:"1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다."}),e.jsx("p",{children:"2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다."}),e.jsx("p",{children:"3. 참고 — 터치 영역은 최소 44px을 권장합니다."}),e.jsx("p",{children:"4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다."})]})}),e.jsx(a,{target:"#back-top-scroll-sm",size:"sm",visibilityHeight:60})]}),e.jsxs("div",{className:"back_top_demo-wrap",children:[e.jsx("div",{className:"back_top_demo-scroll",id:"back-top-scroll-lg",children:e.jsxs("div",{className:"back_top_demo-content",children:[e.jsx("p",{children:"Large 크기 예시입니다. 스크롤해 보세요."}),e.jsx("p",{children:"1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다."}),e.jsx("p",{children:"2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다."}),e.jsx("p",{children:"3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다."}),e.jsx("p",{children:"4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다."})]})}),e.jsx(a,{target:"#back-top-scroll-lg",size:"lg",color:"ghost",visibilityHeight:60})]})]}))},v={name:"커스텀 콘텐츠",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다."},source:{code:`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function CustomExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-custom">
        <div className="back_top_demo-content">
          <p>긴 이용 약관 문서입니다.</p>
        </div>
      </div>
      <BackTop
        target="#back-top-scroll-custom"
        color="primary"
        label="TOP"
        visibilityHeight={100}
        style={{
          ['--back-top-offset-bottom']: 'var(--space-md)',
          ['--back-top-offset-right']: 'var(--space-md)',
        }}
      />
    </div>
  );
}`,language:"tsx"}}},render:i(e.jsxs("div",{className:"back_top_demo-wrap",children:[e.jsx("div",{className:"back_top_demo-scroll",id:"back-top-scroll-custom",children:e.jsxs("div",{className:"back_top_demo-content",children:[e.jsx("p",{children:"긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요."}),e.jsx("p",{children:"제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다."}),e.jsx("p",{children:"제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다."}),e.jsx("p",{children:"제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다."}),e.jsx("p",{children:"제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다."}),e.jsx("p",{children:"제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다."}),e.jsx("p",{children:"제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다."}),e.jsx("p",{children:"제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다."})]})}),e.jsx(a,{target:"#back-top-scroll-custom",color:"primary",label:"TOP",visibilityHeight:100,style:{"--back-top-offset-bottom":"var(--space-md)","--back-top-offset-right":"var(--space-md)"}})]}))},_={name:"페이지 스크롤",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`target`을 생략하면 window 스크롤을 기준으로 동작합니다. 이 Docs 페이지를 아래로 스크롤하면 우측 하단에 버튼이 나타납니다."},source:{language:"tsx",code:`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function WindowExample() {
  return (
    <>
      <p style={{ margin: 0, fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)' }}>
        페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요.
      </p>
      <BackTop color="primary" />
    </>
  );
}`}}},render:i(e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontSize:"var(--text-size-sm)",color:"var(--color-text-muted)"},children:"이 Docs 페이지를 아래로 스크롤하면 우측 하단에 맨 위로 버튼이 나타납니다. 클릭하면 페이지 최상단으로 이동합니다."}),e.jsx(a,{color:"primary",visibilityHeight:200})]}))};var B,S,C;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-playground">
        <div className="back_top_demo-content">
          <p>아래로 스크롤하면 맨 위로 버튼이 표시됩니다. Controls로 size · color · label을 조절하세요.</p>
          <p>상품 설명 · 리뷰 · 배송 안내</p>
          <p>교환·반품 · 문의처</p>
        </div>
      </div>
      <BackTop {...args} target="#back-top-scroll-playground" visibilityHeight={80} />
    </div>
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var z,P,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`data-back-top\`과 \`data-target\`으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다.'
      },
      source: {
        code: \`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function BasicExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-basic">
        <div className="back_top_demo-content">
          <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-basic" visibilityHeight={80} />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: backTopDemo(<div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-basic">
        <div className="back_top_demo-content">
          <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
          <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>
          <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>
          <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>
          <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>
          <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>
          <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-basic" visibilityHeight={80} />
    </div>)
}`,...(H=(P=b.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var D,E,V;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '표시 임계값',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`visibilityHeight\`으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다.'
      },
      source: {
        code: \`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function VisibilityExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div className="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-visibility" visibilityHeight={200} color="primary" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: backTopDemo(<div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div className="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
          <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>
          <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>
          <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>
          <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>
          <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>
          <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>
          <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-visibility" visibilityHeight={200} color="primary" />
    </div>)
}`,...(V=(E=k.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var L,R,A;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`back_top_sm\` · \`back_top_lg\` 클래스로 버튼 크기를 조절합니다.'
      },
      source: {
        code: \`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function SizeExample() {
  return (
    <>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-sm">
          <div className="back_top_demo-content">
            <p>Small 크기 예시입니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-sm" size="sm" visibilityHeight={60} />
      </div>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-lg">
          <div className="back_top_demo-content">
            <p>Large 크기 예시입니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" visibilityHeight={60} />
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: backTopDemo(<>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-sm">
          <div className="back_top_demo-content">
            <p>Small 크기 예시입니다. 스크롤해 보세요.</p>
            <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>
            <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>
            <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>
            <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-sm" size="sm" visibilityHeight={60} />
      </div>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-lg">
          <div className="back_top_demo-content">
            <p>Large 크기 예시입니다. 스크롤해 보세요.</p>
            <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>
            <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>
            <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>
            <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" visibilityHeight={60} />
      </div>
    </>)
}`,...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var I,O,q;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '커스텀 콘텐츠',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다.'
      },
      source: {
        code: \`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function CustomExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-custom">
        <div className="back_top_demo-content">
          <p>긴 이용 약관 문서입니다.</p>
        </div>
      </div>
      <BackTop
        target="#back-top-scroll-custom"
        color="primary"
        label="TOP"
        visibilityHeight={100}
        style={{
          ['--back-top-offset-bottom']: 'var(--space-md)',
          ['--back-top-offset-right']: 'var(--space-md)',
        }}
      />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: backTopDemo(<div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-custom">
        <div className="back_top_demo-content">
          <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>
          <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>
          <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>
          <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>
          <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>
          <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>
          <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>
          <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-custom" color="primary" label="TOP" visibilityHeight={100} style={{
      ['--back-top-offset-bottom']: 'var(--space-md)',
      ['--back-top-offset-right']: 'var(--space-md)'
    }} />
    </div>)
}`,...(q=(O=v.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var F,W,M;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '페이지 스크롤',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`target\`을 생략하면 window 스크롤을 기준으로 동작합니다. 이 Docs 페이지를 아래로 스크롤하면 우측 하단에 버튼이 나타납니다.'
      },
      source: {
        language: 'tsx',
        code: \`import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function WindowExample() {
  return (
    <>
      <p style={{ margin: 0, fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)' }}>
        페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요.
      </p>
      <BackTop color="primary" />
    </>
  );
}\`
      }
    }
  },
  render: backTopDemo(<div>
      <p style={{
      margin: 0,
      fontSize: 'var(--text-size-sm)',
      color: 'var(--color-text-muted)'
    }}>
        이 Docs 페이지를 아래로 스크롤하면 우측 하단에 맨 위로 버튼이 나타납니다. 클릭하면 페이지
        최상단으로 이동합니다.
      </p>
      <BackTop color="primary" visibilityHeight={200} />
    </div>)
}`,...(M=(W=_.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const Pe=["Playground","Basic","Visibility","Size","Custom","Window"];export{b as Basic,v as Custom,m as Playground,u as Size,k as Visibility,_ as Window,Pe as __namedExportsOrder,ze as default};
