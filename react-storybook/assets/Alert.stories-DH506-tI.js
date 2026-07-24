import{r as v,d as be,z as ve,n as ye,j as e,I as B,B as A,a as he}from"./iframe-ifEc15ad.js";import{L as ae}from"./Link-D9Mr3lkf.js";import{w as o}from"./story-renders-Hdz_JUlO.js";import{h as _e,a as we}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const ke=new Set(["info","success","warning","danger"]),je=new Set(["sm","md","lg"]),ze={info:"info",success:"check-circle",warning:"alert-triangle",danger:"x-circle"};function r({ripple:s,color:y="info",title:b,description:h,closable:_,showIcon:w=!0,size:k="md",role:j="alert",icon:le,actions:ie,children:ne,className:z,onClose:a,...C}){const N=v.useRef(null),{rippleAttrs:ce}=be({ripple:s}),[me,de]=v.useState(!0),l=ke.has(y)?y:"info",i=je.has(k)?k:"md";ve({ripple:s,color:l,title:b,description:h,closable:_,showIcon:w,size:i,role:j},N,{className:z,onClose:a,...C});const S=l==="danger"?"color_error":`color_${l}`,pe=v.useMemo(()=>{const t=["alert",S];return i==="sm"&&t.push("alert_sm"),i==="lg"&&t.push("alert_lg"),t},[S,i]),ue=!!b,P=ne??h,fe=!!P,{class:Oe,role:Te,...xe}=C,ge=ye(xe);function Ae(t){de(!1),a==null||a(t)}return me?e.jsxs("div",{ref:N,className:he(pe,z),role:j,...ge,children:[w?e.jsx("div",{"data-demo-slot":"icon",children:le??e.jsx(B,{name:ze[l]??"info",className:"alert_icon"})}):null,e.jsxs("div",{className:"alert_body",children:[ue?e.jsx("div",{className:"alert_title",children:b}):null,fe?e.jsx("p",{className:"alert_desc",children:P}):null,ie]}),_?e.jsx(A,{variant:"ghost",iconOnly:!0,className:"alert_close",ariaLabel:"알림 닫기",iconBefore:e.jsx(B,{name:"close",size:"sm"}),onClick:Ae,...ce}):null]}):null}r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{color:{defaultValue:{value:"'info'",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},role:{defaultValue:{value:"'alert'",computed:!1},required:!1}}};const Ce=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ne=[{name:"color",type:"'info' | 'success' | 'warning' | 'danger'",default:"info",description:"의미 색상. danger는 color_error"},{name:"title",type:"string",default:"—",description:"알림 제목 (alert_title)"},{name:"description",type:"string",default:"—",description:"본문. default 슬롯으로 대체"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼 (alert_close)"},{name:"show-icon",type:"boolean",default:"true",description:"기본 아이콘 표시"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"alert_sm · alert_lg"},{name:"role",type:"string",default:"alert",description:"루트 role (alert · status 등)"},_e],Se=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Pe=[{name:"alert",description:"알림 루트"},{name:"alert_sm · alert_lg",description:"크기"},{name:"alert_icon · alert_body · alert_title · alert_desc",description:"구조 파트"},{name:"alert_close",description:"닫기 버튼"},{name:"color_info · color_success · color_warning · color_error",description:"의미 색상"},...we],Be=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Le=[{name:"close",description:"닫기 버튼 클릭 시"}],Ie=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ee=[{name:"--alert-padding-y · --alert-padding-x · --alert-gap",default:"var(--space-md) · var(--space-lg) · var(--space-md)",description:"기본(md) 패딩·간격"},{name:"--alert-font-size · --alert-line-height",default:"var(--text-size-base) · 1.5",description:"본문 타이포"},{name:"--alert-title-weight · --alert-title-gap",default:"600 · var(--space-xs)",description:"제목 두께·간격"},{name:"--alert-desc-opacity",default:"0.85",description:"설명 텍스트 불투명도"},{name:"--alert-icon-size · --alert-icon-offset",default:"1.25rem · 0.1rem",description:"아이콘 크기·정렬"},{name:"--alert-close-size",default:"1.25rem",description:"닫기 버튼 크기"},{name:"--alert-actions-gap · --alert-actions-margin-top",default:"var(--space-sm) · var(--space-sm)",description:"액션 영역"},{name:"--alert-padding-y-sm · --alert-padding-x-sm · --alert-font-size-sm",default:"var(--space-sm) · var(--space-md) · var(--text-size-sm)",description:"sm 크기"},{name:"--alert-icon-size-sm · --alert-close-size-sm",default:"1rem · 1rem",description:"sm 아이콘·닫기"},{name:"--alert-padding-y-lg · --alert-padding-x-lg",default:"var(--space-lg) · var(--space-xl)",description:"lg 패딩"},{name:"--alert-icon-size-lg · --alert-close-size-lg",default:"1.5rem · 1.5rem",description:"lg 아이콘·닫기"}],Re=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],De=[{name:"children",description:"본문 (description prop 대체, Vue default 슬롯)"},{name:"icon",description:"커스텀 아이콘 (alert_icon)"},{name:"actions",description:"본문 아래 액션 버튼·링크"}],Ve=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 show-icon은 showIcon, close 이벤트는 onClose로 다룹니다.",tables:[{columns:Ce,rows:Ne,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:Re,rows:De,codeColumn:"name"}]},{title:"API · Events",description:"Vue close는 React onClose에 대응합니다.",tables:[{columns:Be,rows:Le,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Se,rows:Pe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ie,rows:Ee,codeColumn:"name"}]}],Fe={color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},Ge={title:"Components/피드백/Alert",id:"components-alert",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["info","success","warning","danger"],type:{name:"enum",summary:"'info' | 'success' | 'warning' | 'danger'"}},title:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},showIcon:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ve,docs:{description:{component:"정보·성공·경고·오류 메시지를 표시하는 Alert 컴포넌트입니다."}}}},n={parameters:{controls:{disable:!1}},args:{...Fe},render:s=>e.jsx(r,{...s})},c={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function BasicExample() {
  return (
    <>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"info",title:"정보",description:"변경 사항이 저장되었습니다."}),e.jsx(r,{color:"success",title:"성공",description:"요청이 성공적으로 처리되었습니다."}),e.jsx(r,{color:"warning",title:"주의",description:"세션이 곧 만료됩니다. 저장해 주세요."}),e.jsx(r,{color:"danger",title:"오류",description:"네트워크 연결을 확인해 주세요."})]}))},m={name:"설명만",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"제목 없이 alert_desc만으로 짧은 메시지를 표시합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function DescOnlyExample() {
  return (
    <>
      <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"info",description:"새 기능이 추가되었습니다. 설정에서 확인해 보세요."}),e.jsx(r,{color:"success",role:"status",description:"프로필이 업데이트되었습니다."})]}))},d={name:"아이콘 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function NoIconExample() {
  return (
    <>
      <Alert
        showIcon={false}
        color="warning"
        title="점검 안내"
        description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다."
      />
      <Alert
        showIcon={false}
        color="info"
        description="이 페이지는 데모 목적으로만 사용됩니다."
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{showIcon:!1,color:"warning",title:"점검 안내",description:"오늘 02:00~04:00 서비스 점검이 예정되어 있습니다."}),e.jsx(r,{showIcon:!1,color:"info",description:"이 페이지는 데모 목적으로만 사용됩니다."})]}))},p={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_sm · alert_lg로 스케일을 조절합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function SizeExample() {
  return (
    <>
      <Alert
        size="sm"
        color="info"
        title="Small"
        description="폼 필드 아래 등 좁은 영역에 사용합니다."
      />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert
        size="lg"
        color="info"
        title="Large"
        description="페이지 상단 등 눈에 띄는 안내에 사용합니다."
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",color:"info",title:"Small",description:"폼 필드 아래 등 좁은 영역에 사용합니다."}),e.jsx(r,{color:"info",title:"Medium",description:"기본 크기입니다."}),e.jsx(r,{size:"lg",color:"info",title:"Large",description:"페이지 상단 등 눈에 띄는 안내에 사용합니다."})]}))},u={name:"닫기 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function CloseExample() {
  return (
    <>
      <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert
        closable
        color="warning"
        description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요."
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{closable:!0,color:"info",title:"새 소식",description:"대시보드가 새롭게 개편되었습니다."}),e.jsx(r,{closable:!0,color:"warning",description:"브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요."})]}))},f={name:"액션",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ActionsExample() {
  return (
    <>
      <Alert
        color="danger"
        title="저장 실패"
        description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요."
        actions={
          <div className="alert_actions">
            <Button variant="filled" color="danger" size="sm" label="다시 시도" />
            <Button variant="ghost" size="sm" label="취소" />
          </div>
        }
      />
      <Alert
        color="info"
        title="이용 약관 변경"
        description="2026년 3월 1일부터 새 약관이 적용됩니다."
        actions={
          <div className="alert_actions">
            <Link href="#" size="sm" label="약관 보기" />
            <Button variant="text" color="primary" size="sm" label="동의하기" />
          </div>
        }
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"danger",title:"저장 실패",description:"변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.",actions:e.jsxs("div",{className:"alert_actions",children:[e.jsx(A,{variant:"filled",color:"danger",size:"sm",label:"다시 시도"}),e.jsx(A,{variant:"ghost",size:"sm",label:"취소"})]})}),e.jsx(r,{color:"info",title:"이용 약관 변경",description:"2026년 3월 1일부터 새 약관이 적용됩니다.",actions:e.jsxs("div",{className:"alert_actions",children:[e.jsx(ae,{href:"#",size:"sm",label:"약관 보기"}),e.jsx(A,{variant:"text",color:"primary",size:"sm",label:"동의하기"})]})})]}))},x={name:"배너",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function BannerExample() {
  return (
    <Alert
      className="alert_banner"
      color="warning"
      closable
      description="시스템 점검으로 일부 기능이 제한될 수 있습니다."
    />
  );
}`,language:"tsx"}}},render:o(e.jsx(r,{className:"alert_banner",color:"warning",closable:!0,description:"시스템 점검으로 일부 기능이 제한될 수 있습니다."}))},g={name:"문맥 속 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다."},source:{code:`import Alert from '@uxkm/ui-react/components/Alert.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ContextExample() {
  return (
    <>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form_layout" noValidate>
        <Alert
          color="danger"
          title="입력 내용을 확인해 주세요"
          description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
        />
        <div className="form_field">
          <label className="form_label" htmlFor="alert-ex-email">
            이메일
          </label>
          <input
            type="email"
            className="input is-error"
            id="alert-ex-email"
            defaultValue="invalid-email"
            aria-invalid="true"
          />
        </div>
      </form>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs(r,{color:"info",title:"업데이트 안내",children:["새 버전이 출시되었습니다. ",e.jsx(ae,{href:"#",size:"sm",label:"릴리스 노트 보기"})]}),e.jsxs("form",{className:"form_layout",noValidate:!0,children:[e.jsx(r,{color:"danger",title:"입력 내용을 확인해 주세요",description:"이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_label",htmlFor:"alert-ex-email",children:"이메일"}),e.jsx("input",{type:"email",className:"input is-error",id:"alert-ex-email",defaultValue:"invalid-email","aria-invalid":"true"})]})]})]}))};var L,I,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Alert {...args} />
}`,...(E=(I=n.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var R,D,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function BasicExample() {
  return (
    <>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </>)
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var F,O,T;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '설명만',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '제목 없이 alert_desc만으로 짧은 메시지를 표시합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function DescOnlyExample() {
  return (
    <>
      <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </>)
}`,...(T=(O=m.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var M,q,H;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '아이콘 없음',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function NoIconExample() {
  return (
    <>
      <Alert
        showIcon={false}
        color="warning"
        title="점검 안내"
        description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다."
      />
      <Alert
        showIcon={false}
        color="info"
        description="이 페이지는 데모 목적으로만 사용됩니다."
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert showIcon={false} color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
      <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
    </>)
}`,...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Z,$,G;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'alert_sm · alert_lg로 스케일을 조절합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function SizeExample() {
  return (
    <>
      <Alert
        size="sm"
        color="info"
        title="Small"
        description="폼 필드 아래 등 좁은 영역에 사용합니다."
      />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert
        size="lg"
        color="info"
        title="Large"
        description="페이지 상단 등 눈에 띄는 안내에 사용합니다."
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
    </>)
}`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '닫기 가능',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function CloseExample() {
  return (
    <>
      <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert
        closable
        color="warning"
        description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요."
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
    </>)
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '액션',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ActionsExample() {
  return (
    <>
      <Alert
        color="danger"
        title="저장 실패"
        description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요."
        actions={
          <div className="alert_actions">
            <Button variant="filled" color="danger" size="sm" label="다시 시도" />
            <Button variant="ghost" size="sm" label="취소" />
          </div>
        }
      />
      <Alert
        color="info"
        title="이용 약관 변경"
        description="2026년 3월 1일부터 새 약관이 적용됩니다."
        actions={
          <div className="alert_actions">
            <Link href="#" size="sm" label="약관 보기" />
            <Button variant="text" color="primary" size="sm" label="동의하기" />
          </div>
        }
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요." actions={<div className="alert_actions">
            <Button variant="filled" color="danger" size="sm" label="다시 시도" />
            <Button variant="ghost" size="sm" label="취소" />
          </div>} />
      <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다." actions={<div className="alert_actions">
            <Link href="#" size="sm" label="약관 보기" />
            <Button variant="text" color="primary" size="sm" label="동의하기" />
          </div>} />
    </>)
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,re;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '배너',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function BannerExample() {
  return (
    <Alert
      className="alert_banner"
      color="warning"
      closable
      description="시스템 점검으로 일부 기능이 제한될 수 있습니다."
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Alert className="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />)
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,se;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '문맥 속 사용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다.'
      },
      source: {
        code: \`import Alert from '@uxkm/ui-react/components/Alert.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ContextExample() {
  return (
    <>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form_layout" noValidate>
        <Alert
          color="danger"
          title="입력 내용을 확인해 주세요"
          description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
        />
        <div className="form_field">
          <label className="form_label" htmlFor="alert-ex-email">
            이메일
          </label>
          <input
            type="email"
            className="input is-error"
            id="alert-ex-email"
            defaultValue="invalid-email"
            aria-invalid="true"
          />
        </div>
      </form>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form_layout" noValidate>
        <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />
        <div className="form_field">
          <label className="form_label" htmlFor="alert-ex-email">
            이메일
          </label>
          <input type="email" className="input is-error" id="alert-ex-email" defaultValue="invalid-email" aria-invalid="true" />
        </div>
      </form>
    </>)
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Je=["Playground","Basic","DescOnly","NoIcon","Size","Close","Actions","Banner","Context"];export{f as Actions,x as Banner,c as Basic,u as Close,g as Context,m as DescOnly,d as NoIcon,n as Playground,p as Size,Je as __namedExportsOrder,Ge as default};
