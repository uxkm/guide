import{r as N,d as ra,E as ta,n as da,j as a,B as o,I as sa,a as ia}from"./iframe-ifEc15ad.js";import{w as ma}from"./story-renders-Hdz_JUlO.js";import{h as na,a as ca}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const pa=new Set(["sm","md","lg","fullscreen"]);function l({ripple:e,id:t,size:v="md",scrollable:x,backdrop:j=!0,title:h,open:i,header:y,footer:B,children:X,className:_,...M}){const k=N.useRef(null),{rippleAttrs:Y}=ra({ripple:e}),s=pa.has(v)?v:"md",z=`${t}-title`;ta({ripple:e,id:t,size:s,scrollable:x,backdrop:j,title:h,open:i},k,{className:_,...M});const aa=N.useMemo(()=>{const d=["modal"];return s==="sm"&&d.push("modal_sm"),s==="lg"&&d.push("modal_lg"),s==="fullscreen"&&d.push("modal_fullscreen"),x&&d.push("modal_scrollable"),i&&d.push("is-open"),d},[s,x,i]),{class:Ma,...oa}=M,la=da(oa),ea=!!(y||h);return a.jsxs("div",{ref:k,id:t,className:ia(aa,_),"data-modal":"","data-modal-backdrop":j?void 0:"false",role:"dialog","aria-modal":"true","aria-labelledby":z,tabIndex:-1,hidden:!i||void 0,...la,children:[a.jsx("div",{className:"modal_backdrop","data-modal-close":"","aria-hidden":"true"}),a.jsxs("div",{className:"modal_dialog",children:[ea?a.jsxs("div",{className:"modal_header","data-demo-slot":"header",children:[y??a.jsx("h2",{className:"modal_title",id:z,children:h}),a.jsx(o,{variant:"ghost",iconOnly:!0,className:"modal_close","data-modal-close":"",ariaLabel:"닫기",iconBefore:a.jsx(sa,{name:"close",size:"sm",className:"modal_close-icon"}),...Y})]}):null,a.jsx("div",{className:"modal_body","data-demo-slot":"default",children:X}),B?a.jsx("div",{className:"modal_footer","data-demo-slot":"footer",children:B}):null]})]})}l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},backdrop:{defaultValue:{value:"true",computed:!1},required:!1}}};const ua=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fa=[{name:"id",type:"string",default:"—",description:"루트 id (필수, data-modal-trigger 연결)"},{name:"title",type:"string",default:"—",description:"기본 헤더 제목 (modal_title)"},{name:"size",type:"'sm' | 'md' | 'lg' | 'fullscreen'",default:"md",description:"modal_sm · modal_lg · modal_fullscreen"},{name:"scrollable",type:"boolean",default:"false",description:"본문 스크롤 (modal_scrollable)"},{name:"backdrop",type:"boolean",default:"true",description:'백드롭 표시 (false → data-modal-backdrop="false")'},{name:"open",type:"boolean",default:"false",description:"열림 상태 (is-open, hidden 해제)"},na],ga=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ba=[{name:"modal · modal_backdrop · modal_dialog",description:"루트·백드롭·대화상자"},{name:"modal_header · modal_title · modal_close · modal_body · modal_footer",description:"구조 파트"},{name:"modal_sm · modal_lg · modal_fullscreen · modal_scrollable",description:"크기·스크롤"},{name:"data-modal · data-modal-trigger · data-modal-close",description:"JS 연동 속성"},{name:"is-open · hidden",description:"열림·닫힘 상태"},{name:'role="dialog" · aria-modal="true"',description:"접근성 시맨틱"},...ca],xa=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ha=[{name:"--modal-z-index",default:"300",description:"레이어 순서"},{name:"--modal-width · --modal-width-sm · --modal-width-lg",default:"32rem · 24rem · 48rem",description:"대화상자 너비"},{name:"--modal-bg · --modal-radius · --modal-shadow",default:"—",description:"배경·모서리·그림자"}],va=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ja=[{name:"header",description:"헤더 (title 대체)"},{name:"children",description:"본문 (modal_body, Vue default 슬롯)"},{name:"footer",description:"하단 액션 (modal_footer)"}],ya=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:ua,rows:fa,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:va,rows:ja,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ga,rows:ba,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:xa,rows:ha,codeColumn:"name"}]}];function Ba(e){return a.jsx("div",{className:"modal_demo-frame",children:a.jsx("div",{className:"modal_demo-content",children:e})})}function r(e){const t=()=>Ba(e);return ma(t,t)}const _a={id:"story-modal",size:"md",scrollable:!1,backdrop:!0,title:"제목",open:!0},wa={title:"Components/피드백/Modal",id:"components-modal",component:l,tags:["autodocs"],argTypes:{id:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg","fullscreen"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'fullscreen'"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},backdrop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},open:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ya,docs:{description:{component:"중앙 대화상자 Modal 컴포넌트입니다."}}}},m={parameters:{controls:{disable:!1}},args:{..._a},render:e=>a.jsxs("div",{className:"modal_demo-frame",children:[a.jsx("div",{className:"modal_demo-content",children:a.jsx("p",{children:"Controls로 open · size · scrollable · backdrop을 조절하세요."})}),a.jsx(l,{...e,className:e.open?"modal_demo-static":void 0,footer:a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"취소","data-modal-close":""}),a.jsx(o,{variant:"filled",color:"primary",label:"확인","data-modal-close":""})]}),children:a.jsx("p",{children:"모달 본문입니다."})})]})},n={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function BasicExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="모달 열기"
        data-modal-trigger="#modal-basic"
        aria-controls="modal-basic"
      />
      <Modal
        id="modal-basic"
        title="알림"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="확인" data-modal-close="" />
          </>
        }
      >
        <p>Modal 대화상자 본문입니다.</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"filled",color:"primary",label:"모달 열기","data-modal-trigger":"#modal-basic","aria-controls":"modal-basic"}),a.jsx(l,{id:"modal-basic",title:"알림",footer:a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"취소","data-modal-close":""}),a.jsx(o,{variant:"filled",color:"primary",label:"확인","data-modal-close":""})]}),children:a.jsxs("p",{children:["Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, ",a.jsx("kbd",{children:"Esc"})," 키로 닫을 수 있습니다."]})})]}))},c={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function SizeExample() {
  return (
    <>
      <div className="modal_demo-row">
        <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
        <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
        <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
        <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p>좁은 너비</p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p>넓은 너비</p>
      </Modal>
      <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
        <p>뷰포트 전체</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal_demo-row",children:[a.jsx(o,{variant:"outline",size:"sm",label:"Small","data-modal-trigger":"#modal-size-sm","aria-controls":"modal-size-sm"}),a.jsx(o,{variant:"outline",label:"Default","data-modal-trigger":"#modal-size-default","aria-controls":"modal-size-default"}),a.jsx(o,{variant:"outline",size:"lg",label:"Large","data-modal-trigger":"#modal-size-lg","aria-controls":"modal-size-lg"}),a.jsx(o,{variant:"outline",label:"Fullscreen","data-modal-trigger":"#modal-size-fullscreen","aria-controls":"modal-size-fullscreen"})]}),a.jsx(l,{id:"modal-size-sm",size:"sm",title:"Small",children:a.jsxs("p",{children:[a.jsx("code",{className:"typo_code",children:"modal_sm"})," — 확인·간단한 알림에 적합한 좁은 너비입니다."]})}),a.jsx(l,{id:"modal-size-default",title:"Default",children:a.jsx("p",{children:"기본 너비 32rem"})}),a.jsx(l,{id:"modal-size-lg",size:"lg",title:"Large",children:a.jsxs("p",{children:[a.jsx("code",{className:"typo_code",children:"modal_lg"})," — 상세 보기·넓은 폼·테이블 미리보기 등에 사용합니다."]})}),a.jsx(l,{id:"modal-size-fullscreen",size:"fullscreen",title:"Fullscreen",footer:a.jsx(o,{variant:"ghost",label:"닫기","data-modal-close":""}),children:a.jsxs("p",{children:[a.jsx("code",{className:"typo_code",children:"modal_fullscreen"})," — 뷰포트 전체를 사용하는 대화상자입니다."]})})]}))},p={name:"헤더·푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function FooterExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="새 항목 추가"
        data-modal-trigger="#modal-footer"
        aria-controls="modal-footer"
      />
      <Modal
        id="modal-footer"
        title="새 항목 추가"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <p>폼 본문</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"filled",color:"primary",label:"새 항목 추가","data-modal-trigger":"#modal-footer","aria-controls":"modal-footer"}),a.jsxs(l,{id:"modal-footer",title:"새 항목 추가",footer:a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"취소","data-modal-close":""}),a.jsx(o,{variant:"filled",color:"primary",label:"저장","data-modal-close":""})]}),children:[a.jsxs("div",{className:"form_field",children:[a.jsx("label",{className:"form_field-label",htmlFor:"modal-item-name",children:"이름"}),a.jsx("input",{className:"input",type:"text",id:"modal-item-name",placeholder:"항목 이름"})]}),a.jsxs("div",{className:"form_field",children:[a.jsx("label",{className:"form_field-label",htmlFor:"modal-item-desc",children:"설명"}),a.jsx("textarea",{className:"textarea",id:"modal-item-desc",rows:3,placeholder:"간단한 설명"})]})]})]}))},u={name:"확인 대화상자",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function ConfirmExample() {
  return (
    <>
      <Button
        variant="filled"
        color="danger"
        label="삭제"
        data-modal-trigger="#modal-confirm"
        aria-controls="modal-confirm"
      />
      <Modal
        id="modal-confirm"
        size="sm"
        title="항목 삭제"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="danger" label="삭제" data-modal-close="" />
          </>
        }
      >
        <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"filled",color:"danger",label:"삭제","data-modal-trigger":"#modal-confirm","aria-controls":"modal-confirm"}),a.jsx(l,{id:"modal-confirm",size:"sm",title:"항목 삭제","aria-describedby":"modal-confirm-desc",footer:a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"취소","data-modal-close":""}),a.jsx(o,{variant:"filled",color:"danger",label:"삭제","data-modal-close":""})]}),children:a.jsx("p",{id:"modal-confirm-desc",children:"이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?"})})]}))},f={name:"폼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function FormExample() {
  return (
    <>
      <Button
        variant="outline"
        label="프로필 편집"
        data-modal-trigger="#modal-form"
        aria-controls="modal-form"
      />
      <Modal
        id="modal-form"
        title="프로필 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <p>폼 본문</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"outline",label:"프로필 편집","data-modal-trigger":"#modal-form","aria-controls":"modal-form"}),a.jsx(l,{id:"modal-form",title:"프로필 편집",footer:a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"취소","data-modal-close":""}),a.jsx(o,{variant:"filled",color:"primary",label:"저장","data-modal-close":""})]}),children:a.jsxs("div",{className:"form_layout form_layout-vertical",children:[a.jsxs("div",{className:"form_field",children:[a.jsx("label",{className:"form_field-label",htmlFor:"modal-profile-name",children:"이름"}),a.jsx("input",{className:"input",type:"text",id:"modal-profile-name",defaultValue:"홍길동"})]}),a.jsxs("div",{className:"form_field",children:[a.jsx("label",{className:"form_field-label",htmlFor:"modal-profile-email",children:"이메일"}),a.jsx("input",{className:"input",type:"email",id:"modal-profile-email",defaultValue:"hong@example.com"})]}),a.jsxs("div",{className:"form_field",children:[a.jsx("label",{className:"form_field-label",htmlFor:"modal-profile-bio",children:"소개"}),a.jsx("textarea",{className:"textarea",id:"modal-profile-bio",rows:3,placeholder:"자기소개를 입력하세요"})]})]})})]}))},g={name:"스크롤 본문",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function ScrollExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="이용 약관 보기"
        data-modal-trigger="#modal-scroll"
        aria-controls="modal-scroll"
      />
      <Modal
        id="modal-scroll"
        scrollable
        title="이용 약관"
        footer={
          <>
            <Button variant="ghost" label="거부" data-modal-close="" />
            <Button variant="filled" color="primary" label="동의" data-modal-close="" />
          </>
        }
      >
        <p>긴 본문…</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"이용 약관 보기","data-modal-trigger":"#modal-scroll","aria-controls":"modal-scroll"}),a.jsxs(l,{id:"modal-scroll",scrollable:!0,title:"이용 약관",footer:a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"거부","data-modal-close":""}),a.jsx(o,{variant:"filled",color:"primary",label:"동의","data-modal-close":""})]}),children:[a.jsx("p",{children:"제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다."}),a.jsx("p",{children:'제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① "서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다. ② "이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.'}),a.jsx("p",{children:"제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다."}),a.jsx("p",{children:"제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타 회사가 정하는 서비스."}),a.jsx("p",{children:"제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다."}),a.jsx("p",{children:"제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다."}),a.jsx("p",{children:"제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다."}),a.jsx("p",{children:"제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다."}),a.jsx("p",{children:"제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다."}),a.jsx("p",{children:"제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다."})]})]}))},b={name:"백드롭 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"backdrop={false}로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function NoBackdropExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-modal-trigger="#modal-no-backdrop"
        aria-controls="modal-no-backdrop"
      />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" backdrop={false}>
        <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
      </Modal>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"ghost",label:"백드롭 없이 열기","data-modal-trigger":"#modal-no-backdrop","aria-controls":"modal-no-backdrop"}),a.jsx(l,{id:"modal-no-backdrop",size:"sm",title:"백드롭 없음",backdrop:!1,children:a.jsxs("p",{children:["본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 ",a.jsx("kbd",{children:"Esc"}),"로 닫으세요."]})})]}))};var F,w,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="modal_demo-frame">
      <div className="modal_demo-content">
        <p>Controls로 open · size · scrollable · backdrop을 조절하세요.</p>
      </div>
      <Modal {...args} className={args.open ? 'modal_demo-static' : undefined} footer={<>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="확인" data-modal-close="" />
          </>}>
        <p>모달 본문입니다.</p>
      </Modal>
    </div>
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,E,P;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        story: 'data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function BasicExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="모달 열기"
        data-modal-trigger="#modal-basic"
        aria-controls="modal-basic"
      />
      <Modal
        id="modal-basic"
        title="알림"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="확인" data-modal-close="" />
          </>
        }
      >
        <p>Modal 대화상자 본문입니다.</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
      <Modal id="modal-basic" title="알림" footer={<>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="확인" data-modal-close="" />
          </>}>
        <p>
          Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 닫을 수
          있습니다.
        </p>
      </Modal>
    </>)
}`,...(P=(E=n.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var D,L,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        story: 'modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function SizeExample() {
  return (
    <>
      <div className="modal_demo-row">
        <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
        <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
        <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
        <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p>좁은 너비</p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p>넓은 너비</p>
      </Modal>
      <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
        <p>뷰포트 전체</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <div className="modal_demo-row">
        <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
        <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
        <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
        <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p>
          <code className="typo_code">modal_sm</code> — 확인·간단한 알림에 적합한 좁은 너비입니다.
        </p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p>
          <code className="typo_code">modal_lg</code> — 상세 보기·넓은 폼·테이블 미리보기 등에
          사용합니다.
        </p>
      </Modal>
      <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen" footer={<Button variant="ghost" label="닫기" data-modal-close="" />}>
        <p>
          <code className="typo_code">modal_fullscreen</code> — 뷰포트 전체를 사용하는
          대화상자입니다.
        </p>
      </Modal>
    </>)
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var R,V,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        story: 'modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function FooterExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="새 항목 추가"
        data-modal-trigger="#modal-footer"
        aria-controls="modal-footer"
      />
      <Modal
        id="modal-footer"
        title="새 항목 추가"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <p>폼 본문</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
      <Modal id="modal-footer" title="새 항목 추가" footer={<>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="modal-item-name">
            이름
          </label>
          <input className="input" type="text" id="modal-item-name" placeholder="항목 이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="modal-item-desc">
            설명
          </label>
          <textarea className="textarea" id="modal-item-desc" rows={3} placeholder="간단한 설명" />
        </div>
      </Modal>
    </>)
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var A,T,O;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '확인 대화상자',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function ConfirmExample() {
  return (
    <>
      <Button
        variant="filled"
        color="danger"
        label="삭제"
        data-modal-trigger="#modal-confirm"
        aria-controls="modal-confirm"
      />
      <Modal
        id="modal-confirm"
        size="sm"
        title="항목 삭제"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="danger" label="삭제" data-modal-close="" />
          </>
        }
      >
        <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
      <Modal id="modal-confirm" size="sm" title="항목 삭제" aria-describedby="modal-confirm-desc" footer={<>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="danger" label="삭제" data-modal-close="" />
          </>}>
        <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
      </Modal>
    </>)
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var H,J,Z;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        story: '입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function FormExample() {
  return (
    <>
      <Button
        variant="outline"
        label="프로필 편집"
        data-modal-trigger="#modal-form"
        aria-controls="modal-form"
      />
      <Modal
        id="modal-form"
        title="프로필 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <p>폼 본문</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
      <Modal id="modal-form" title="프로필 편집" footer={<>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>}>
        <div className="form_layout form_layout-vertical">
          <div className="form_field">
            <label className="form_field-label" htmlFor="modal-profile-name">
              이름
            </label>
            <input className="input" type="text" id="modal-profile-name" defaultValue="홍길동" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="modal-profile-email">
              이메일
            </label>
            <input className="input" type="email" id="modal-profile-email" defaultValue="hong@example.com" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="modal-profile-bio">
              소개
            </label>
            <textarea className="textarea" id="modal-profile-bio" rows={3} placeholder="자기소개를 입력하세요" />
          </div>
        </div>
      </Modal>
    </>)
}`,...(Z=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var $,G,K;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '스크롤 본문',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function ScrollExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="이용 약관 보기"
        data-modal-trigger="#modal-scroll"
        aria-controls="modal-scroll"
      />
      <Modal
        id="modal-scroll"
        scrollable
        title="이용 약관"
        footer={
          <>
            <Button variant="ghost" label="거부" data-modal-close="" />
            <Button variant="filled" color="primary" label="동의" data-modal-close="" />
          </>
        }
      >
        <p>긴 본문…</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
      <Modal id="modal-scroll" scrollable title="이용 약관" footer={<>
            <Button variant="ghost" label="거부" data-modal-close="" />
            <Button variant="filled" color="primary" label="동의" data-modal-close="" />
          </>}>
        <p>
          제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을
          규정함을 목적으로 합니다.
        </p>
        <p>
          제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① &quot;서비스&quot;란
          회사가 제공하는 모든 온라인 서비스를 의미합니다. ② &quot;이용자&quot;란 본 약관에 따라
          서비스를 이용하는 회원 및 비회원을 말합니다.
        </p>
        <p>
          제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
          공지함으로써 효력이 발생합니다.
        </p>
        <p>
          제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타
          회사가 정하는 서비스.
        </p>
        <p>
          제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절
          등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
        </p>
        <p>
          제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에
          동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
        </p>
        <p>
          제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는
          즉시 회원탈퇴를 처리합니다.
        </p>
        <p>
          제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기
          위해 노력합니다.
        </p>
        <p>
          제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지
          않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.
        </p>
        <p>
          제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여
          공지한 주의사항을 준수하여야 합니다.
        </p>
      </Modal>
    </>)
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        story: 'backdrop={false}로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function NoBackdropExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-modal-trigger="#modal-no-backdrop"
        aria-controls="modal-no-backdrop"
      />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" backdrop={false}>
        <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
      </Modal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: modalDemo(<>
      <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" backdrop={false}>
        <p>
          본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.
        </p>
      </Modal>
    </>)
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Sa=["Playground","Basic","Size","Footer","Confirm","Form","Scroll","NoBackdrop"];export{n as Basic,u as Confirm,p as Footer,f as Form,b as NoBackdrop,m as Playground,g as Scroll,c as Size,Sa as __namedExportsOrder,wa as default};
