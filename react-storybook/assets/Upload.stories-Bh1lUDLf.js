import{r as h,d as _a,y as ga,a as O,n as fa,j as a,I as e,v as n}from"./iframe-DbjMrqYU.js";import{a as j}from"./avatar-sample-Dq40Sw96.js";import{A as xa}from"./Avatar-DlUX8A5D.js";import{w as l}from"./story-renders-CrEYzOkG.js";import{d as ba,a as va}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const Na=new Set(["button","drag","list","picture-card","avatar"]),ha=new Set(["sm","md","lg"]);function s({ripple:i,variant:y="button",disabled:d,fit:v,size:z="md",multiple:I,accept:U,inputId:B,hint:o,dragover:N,error:p,trigger:ea,cards:sa,children:k,className:w,onChange:P,...C}){const S=h.useRef(null),{rippleAttrs:ra,childRippleAttrs:oa}=_a({ripple:i},{mode:"container"}),r=Na.has(y)?y:"button",c=ha.has(z)?z:"md";ga({ripple:i,variant:r,disabled:d,fit:v,size:c,multiple:I,accept:U,inputId:B,hint:typeof o=="string"?o:void 0,dragover:N,error:p},S,{className:w,onChange:P,...C});const na=h.useMemo(()=>{const t=["upload"];return v&&t.push("upload_fit"),c==="sm"&&t.push("upload_sm"),c==="lg"&&t.push("upload_lg"),d&&t.push("is-disabled"),t},[v,c,d]),la=h.useMemo(()=>r==="drag"?O("upload_dropzone",N&&"is-dragover",p&&"is-error"):r==="picture-card"?"upload_card upload_card-trigger":r==="avatar"?"upload_avatar":"upload_trigger",[r,N,p]),{class:Sa,onChange:Oa,...ta}=C,ia=fa(ta),da=r!=="list",pa=r==="button"||r==="drag",ca=r==="list"||k!=null,ma=r==="picture-card",ua=typeof o=="string"||o==null?o?a.jsx("p",{className:"upload_hint",children:o}):null:o;return a.jsxs("div",{ref:S,className:O(na,w),...ra,children:[da?a.jsxs("label",{className:la,"data-demo-slot":"trigger",...oa,children:[a.jsx("input",{id:B||void 0,type:"file",className:"upload_input",tabIndex:-1,disabled:d,multiple:I||void 0,accept:U||void 0,"aria-invalid":p?"true":void 0,onChange:P,...ia}),ea]}):null,pa?a.jsx("div",{"data-demo-slot":"hint",children:ua}):null,ca?a.jsx("div",{"data-demo-slot":"default",children:k}):null,ma?a.jsx("div",{className:"upload_cards","data-demo-slot":"cards",children:sa}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{variant:{defaultValue:{value:"'button'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const ja=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ya=[{name:"variant",type:"'button' | 'drag' | 'list' | 'picture-card' | 'avatar'",default:"button",description:"업로드 UI 유형"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"upload_sm · upload_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 (upload_fit)"},{name:"multiple",type:"boolean",default:"false",description:"다중 파일 선택"},{name:"accept",type:"string",default:"—",description:"input accept 속성"},{name:"input-id",type:"string",default:"—",description:"file input id"},{name:"hint",type:"string",default:"—",description:"button·drag variant 힌트 텍스트"},{name:"dragover",type:"boolean",default:"false",description:"드래그 오버 상태 (is-dragover)"},{name:"error",type:"boolean",default:"false",description:"오류 (is-error)"},ba],za=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ia=[{name:"upload",description:"루트"},{name:"upload_sm · upload_lg · upload_fit",description:"크기·너비"},{name:"upload_trigger · upload_dropzone · upload_input",description:"button·drag 트리거"},{name:"upload_card · upload_cards · upload_avatar",description:"picture-card·avatar"},{name:"upload_list · upload_item · upload_item-info",description:"목록 variant"},{name:"upload_hint · upload_progress",description:"힌트·진행률"},{name:"is-dragover · is-error · is-disabled",description:"상태"},...va],Ua=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ba=[{name:"--upload-max-width",default:"var(--input-max-width)",description:"최대 너비"},{name:"--upload-dropzone-padding · --upload-dropzone-icon-size",default:"—",description:"드롭존"},{name:"--upload-card-size · --upload-list-gap",default:"6.5rem · var(--space-xs)",description:"카드·목록"}],ka=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],wa=[{name:"trigger",description:"업로드 트리거 UI (button·drag·picture-card·avatar)"},{name:"hint",description:"힌트 텍스트 또는 커스텀 노드 (button·drag)"},{name:"children",description:"파일 목록 등 (Vue default 슬롯 대응)"},{name:"cards",description:"이미지 카드 그리드 (picture-card)"}],Pa=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 input-id · picture-card는 inputId · picture-card로 다룹니다.",tables:[{columns:ja,rows:ya,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React prop·children입니다.",tables:[{columns:ka,rows:wa,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:za,rows:Ia,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ua,rows:Ba,codeColumn:"name"}]}],Ca={variant:"button",disabled:!1,fit:!1,size:"md",multiple:!1,accept:"",inputId:"",hint:"",dragover:!1,error:!1},Ea={title:"Components/폼/Upload",id:"components-upload",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["button","drag","list","picture-card","avatar"],type:{name:"enum",summary:"'button' | 'drag' | 'list' | 'picture-card' | 'avatar'"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},fit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},accept:{control:"text",type:{name:"string",summary:"string"}},inputId:{control:"text",type:{name:"string",summary:"string"}},hint:{control:"text",type:{name:"string",summary:"string"}},dragover:{control:"boolean",type:{name:"boolean",summary:"boolean"}},error:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Pa,docs:{description:{component:"파일 업로드 UI를 구성하는 Upload 컴포넌트입니다."}}}},m={parameters:{controls:{disable:!1}},args:{...Ca},render:i=>a.jsx(s,{...i,trigger:a.jsx("span",{className:"btn btn_outline color_primary",children:a.jsx("span",{className:"btn_label",children:"파일 선택"})})})},u={name:"버튼 업로드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`label.upload_trigger` 안에 `span.btn`으로 버튼 스킨을 적용합니다. `button` 요소는 label 안에 넣지 않습니다."},source:{code:`import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function ButtonExample() {
  return (
    <>
      <Upload
        variant="button"
        trigger={
          <span className="btn btn_filled color_primary">
            <span className="btn_label">파일 선택</span>
          </span>
        }
      />
      <Upload
        variant="button"
        hint="PNG, JPG · 최대 5MB"
        trigger={
          <span className="btn btn_outline color_primary">
            <span className="btn_label">업로드</span>
          </span>
        }
      />
    </>
  );
}`,language:"tsx"}}},render:l(a.jsxs(a.Fragment,{children:[a.jsx(s,{variant:"button",trigger:a.jsx("span",{className:"btn btn_filled color_primary",children:a.jsx("span",{className:"btn_label",children:"파일 선택"})})}),a.jsx(s,{variant:"button",hint:"PNG, JPG · 최대 5MB",trigger:a.jsx("span",{className:"btn btn_outline color_primary",children:a.jsx("span",{className:"btn_label",children:"업로드"})})}),a.jsx(s,{variant:"button",trigger:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"btn btn_filled color_primary btn_sm",children:a.jsx("span",{className:"btn_label",children:"Small"})}),a.jsx("span",{className:"btn btn_filled color_primary btn_lg",children:a.jsx("span",{className:"btn_label",children:"Large"})})]})}),a.jsx(s,{variant:"button",disabled:!0,trigger:a.jsx("span",{className:"btn btn_filled color_primary is-disabled",children:a.jsx("span",{className:"btn_label",children:"비활성"})})})]}))},_={name:"드래그 앤 드롭",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`upload_dropzone`으로 클릭·드래그 영역을 만듭니다. `multiple` · `accept` 속성으로 파일 제한을 지정합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function DropzoneExample() {
  return (
    <Upload
      variant="drag"
      fit
      multiple
      trigger={
        <>
          <span className="upload_dropzone-icon" aria-hidden="true">
            <Icon name="upload" size="xl" />
          </span>
          <span className="upload_dropzone-title">
            파일을 여기에 끌어다 놓거나 클릭하세요
          </span>
          <span className="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
        </>
      }
    />
  );
}`,language:"tsx"}}},render:l(a.jsxs(a.Fragment,{children:[a.jsx(s,{variant:"drag",fit:!0,multiple:!0,trigger:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"upload_dropzone-icon","aria-hidden":"true",children:a.jsx(e,{name:"upload",size:"xl"})}),a.jsx("span",{className:"upload_dropzone-title",children:"파일을 여기에 끌어다 놓거나 클릭하세요"}),a.jsx("span",{className:"upload_dropzone-desc",children:"단일 또는 다중 파일 · 최대 10MB"})]})}),a.jsx(s,{variant:"drag",fit:!0,dragover:!0,trigger:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"upload_dropzone-icon","aria-hidden":"true",children:a.jsx(e,{name:"upload",size:"xl"})}),a.jsx("span",{className:"upload_dropzone-title",children:"파일을 놓으세요"}),a.jsx("span",{className:"upload_dropzone-desc",children:"is-dragover 상태"})]})})]}))},g={name:"파일 목록",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`upload_list` · `upload_item`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 `upload_progress-bar`의 `style={{ width: … }}`로 제어합니다. (List 컴포넌트 포팅 전까지 OOCSS 마크업을 사용합니다.)"},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function ListExample() {
  return (
    <Upload
      variant="button"
      fit
      multiple
      trigger={
        <span className="btn btn_filled color_primary">
          <span className="btn_label">파일 추가</span>
        </span>
      }
    >
      <ul className="list upload_list">
        <li className="list_item upload_item is-uploading">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
            <div
              className="upload_progress"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="업로드 진행률"
            >
              <span className="upload_progress-bar" style={{ width: '60%' }} />
            </div>
            <span className="upload_item-meta">2.4 MB · 60%</span>
          </div>
          <Button
            variant="text"
            color="danger"
            iconOnly
            className="upload_item-action"
            ariaLabel="업로드 취소"
            iconBefore={<Icon name="close" />}
          />
        </li>
      </ul>
    </Upload>
  );
}`,language:"tsx"}}},render:l(a.jsx(s,{variant:"button",fit:!0,multiple:!0,trigger:a.jsx("span",{className:"btn btn_filled color_primary",children:a.jsx("span",{className:"btn_label",children:"파일 추가"})}),children:a.jsxs("ul",{className:"list upload_list",children:[a.jsxs("li",{className:"list_item upload_item is-uploading",children:[a.jsx("span",{className:"upload_item-icon","aria-hidden":"true",children:a.jsx(e,{name:"file"})}),a.jsxs("div",{className:"upload_item-body",children:[a.jsx("span",{className:"upload_item-name text_ellipsis",children:"프로젝트_제안서_v2.pdf"}),a.jsx("div",{className:"upload_progress",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"업로드 진행률",children:a.jsx("span",{className:"upload_progress-bar",style:{width:"60%"}})}),a.jsx("span",{className:"upload_item-meta",children:"2.4 MB · 60%"})]}),a.jsx(n,{variant:"text",color:"danger",iconOnly:!0,className:"upload_item-action",ariaLabel:"업로드 취소",iconBefore:a.jsx(e,{name:"close"})})]}),a.jsxs("li",{className:"list_item upload_item is-done",children:[a.jsx("span",{className:"upload_item-icon","aria-hidden":"true",children:a.jsx(e,{name:"file"})}),a.jsxs("div",{className:"upload_item-body",children:[a.jsx("span",{className:"upload_item-name text_ellipsis",children:"디자인_가이드.zip"}),a.jsx("span",{className:"upload_item-meta",children:"업로드 완료 · 8.1 MB"})]}),a.jsx(n,{variant:"text",color:"danger",iconOnly:!0,className:"upload_item-action",ariaLabel:"파일 삭제",iconBefore:a.jsx(e,{name:"trash"})})]}),a.jsxs("li",{className:"list_item upload_item is-error",children:[a.jsx("span",{className:"upload_item-icon","aria-hidden":"true",children:a.jsx(e,{name:"file",color:"danger"})}),a.jsxs("div",{className:"upload_item-body",children:[a.jsx("span",{className:"upload_item-name text_ellipsis",children:"대용량_영상.mp4"}),a.jsx("div",{className:"upload_progress",role:"progressbar","aria-valuenow":42,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"업로드 진행률",children:a.jsx("span",{className:"upload_progress-bar",style:{width:"42%"}})}),a.jsx("span",{className:"upload_item-meta",children:"파일 크기가 10MB를 초과합니다."})]}),a.jsx(n,{variant:"text",color:"danger",iconOnly:!0,className:"upload_item-action",ariaLabel:"파일 삭제",iconBefore:a.jsx(e,{name:"trash"})})]})]})}))},f={name:"사진 카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`upload_cards` 그리드에 미리보기 카드와 `upload_card-trigger`를 배치합니다. 호버 시 `upload_card-actions` 오버레이가 표시됩니다."},source:{code:`import { avatarSample } from '@images';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function CardExample() {
  return (
    <Upload
      variant="picture-card"
      accept="image/*"
      hint="최대 5장 · JPG, PNG"
      trigger={
        <>
          <Icon name="plus" size="lg" />
          <span>업로드</span>
        </>
      }
      cards={
        <>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 1" />
            <div className="upload_card-actions">
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="미리보기"
                iconBefore={<Icon name="eye" />}
              />
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="삭제"
                iconBefore={<Icon name="trash" />}
              />
            </div>
          </div>
        </>
      }
    />
  );
}`,language:"tsx"}}},render:l(a.jsx(s,{variant:"picture-card",accept:"image/*",hint:"최대 5장 · JPG, PNG",trigger:a.jsxs(a.Fragment,{children:[a.jsx(e,{name:"plus",size:"lg"}),a.jsx("span",{children:"업로드"})]}),cards:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"upload_card",children:[a.jsx("img",{className:"upload_card-image",src:j,alt:"미리보기 1"}),a.jsxs("div",{className:"upload_card-actions",children:[a.jsx(n,{variant:"ghost",iconOnly:!0,size:"sm",ariaLabel:"미리보기",iconBefore:a.jsx(e,{name:"eye"})}),a.jsx(n,{variant:"ghost",iconOnly:!0,size:"sm",ariaLabel:"삭제",iconBefore:a.jsx(e,{name:"trash"})})]})]}),a.jsxs("div",{className:"upload_card",children:[a.jsx("img",{className:"upload_card-image",src:j,alt:"미리보기 2"}),a.jsxs("div",{className:"upload_card-actions",children:[a.jsx(n,{variant:"ghost",iconOnly:!0,size:"sm",ariaLabel:"미리보기",iconBefore:a.jsx(e,{name:"eye"})}),a.jsx(n,{variant:"ghost",iconOnly:!0,size:"sm",ariaLabel:"삭제",iconBefore:a.jsx(e,{name:"trash"})})]})]})]})}))},x={name:"아바타 업로드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`upload_avatar`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다."},source:{code:`import { avatarSample } from '@images';
import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function AvatarExample() {
  return (
    <Upload
      variant="avatar"
      accept="image/*"
      inputId="upload-avatar"
      trigger={
        <>
          <Avatar size="xl" src={avatarSample} alt="프로필 사진" />
          <span className="upload_avatar-overlay" aria-hidden="true">
            <Icon name="upload" size="lg" />
          </span>
        </>
      }
    />
  );
}`,language:"tsx"}}},render:l(a.jsx(s,{variant:"avatar",accept:"image/*",inputId:"upload-avatar",trigger:a.jsxs(a.Fragment,{children:[a.jsx(xa,{size:"xl",src:j,alt:"프로필 사진"}),a.jsx("span",{className:"upload_avatar-overlay","aria-hidden":"true",children:a.jsx(e,{name:"upload",size:"lg"})})]})}))},b={name:"폼 필드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`form_field`와 조합해 레이블·힌트·오류 메시지를 표시합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function FormExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="upload-form-attach">
        첨부파일
      </label>
      <Upload
        variant="drag"
        fit
        multiple
        inputId="upload-form-attach"
        trigger={
          <>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">파일을 선택하세요</span>
            <span className="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
          </>
        }
      />
      <p className="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
    </div>
  );
}`,language:"tsx"}}},render:l(a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form_field form_field_fit",children:[a.jsx("label",{className:"form_field-label",htmlFor:"upload-form-attach",children:"첨부파일"}),a.jsx(s,{variant:"drag",fit:!0,multiple:!0,inputId:"upload-form-attach",trigger:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"upload_dropzone-icon","aria-hidden":"true",children:a.jsx(e,{name:"upload",size:"xl"})}),a.jsx("span",{className:"upload_dropzone-title",children:"파일을 선택하세요"}),a.jsx("span",{className:"upload_dropzone-desc",children:"PDF, DOCX · 최대 3개"})]})}),a.jsx("p",{className:"form_field-hint",children:"제출 전 파일명을 확인해 주세요."})]}),a.jsxs("div",{className:"form_field form_field_fit",children:[a.jsx("label",{className:"form_field-label",htmlFor:"upload-form-error",children:"증빙 서류"}),a.jsx(s,{variant:"drag",fit:!0,error:!0,inputId:"upload-form-error",trigger:a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"upload_dropzone-icon","aria-hidden":"true",children:a.jsx(e,{name:"upload",size:"xl"})}),a.jsx("span",{className:"upload_dropzone-title",children:"필수 서류를 업로드하세요"}),a.jsx("span",{className:"upload_dropzone-desc",children:"is-error 상태"})]})}),a.jsx("p",{className:"form_field-error",id:"upload-form-error-msg",children:"첨부파일은 필수입니다."})]})]}))};var D,L,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Upload {...args} trigger={<span className="btn btn_outline color_primary">
          <span className="btn_label">파일 선택</span>
        </span>} />
}`,...(F=(L=m.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var A,M,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '버튼 업로드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`label.upload_trigger\` 안에 \`span.btn\`으로 버튼 스킨을 적용합니다. \`button\` 요소는 label 안에 넣지 않습니다.'
      },
      source: {
        code: \`import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function ButtonExample() {
  return (
    <>
      <Upload
        variant="button"
        trigger={
          <span className="btn btn_filled color_primary">
            <span className="btn_label">파일 선택</span>
          </span>
        }
      />
      <Upload
        variant="button"
        hint="PNG, JPG · 최대 5MB"
        trigger={
          <span className="btn btn_outline color_primary">
            <span className="btn_label">업로드</span>
          </span>
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
      <Upload variant="button" trigger={<span className="btn btn_filled color_primary">
            <span className="btn_label">파일 선택</span>
          </span>} />
      <Upload variant="button" hint="PNG, JPG · 최대 5MB" trigger={<span className="btn btn_outline color_primary">
            <span className="btn_label">업로드</span>
          </span>} />
      <Upload variant="button" trigger={<>
            <span className="btn btn_filled color_primary btn_sm">
              <span className="btn_label">Small</span>
            </span>
            <span className="btn btn_filled color_primary btn_lg">
              <span className="btn_label">Large</span>
            </span>
          </>} />
      <Upload variant="button" disabled trigger={<span className="btn btn_filled color_primary is-disabled">
            <span className="btn_label">비활성</span>
          </span>} />
    </>)
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var E,G,V;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '드래그 앤 드롭',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`upload_dropzone\`으로 클릭·드래그 영역을 만듭니다. \`multiple\` · \`accept\` 속성으로 파일 제한을 지정합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function DropzoneExample() {
  return (
    <Upload
      variant="drag"
      fit
      multiple
      trigger={
        <>
          <span className="upload_dropzone-icon" aria-hidden="true">
            <Icon name="upload" size="xl" />
          </span>
          <span className="upload_dropzone-title">
            파일을 여기에 끌어다 놓거나 클릭하세요
          </span>
          <span className="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
        </>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Upload variant="drag" fit multiple trigger={<>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">
              파일을 여기에 끌어다 놓거나 클릭하세요
            </span>
            <span className="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
          </>} />
      <Upload variant="drag" fit dragover trigger={<>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">파일을 놓으세요</span>
            <span className="upload_dropzone-desc">is-dragover 상태</span>
          </>} />
    </>)
}`,...(V=(G=_.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var J,T,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '파일 목록',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`upload_list\` · \`upload_item\`으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 \`upload_progress-bar\`의 \`style={{ width: … }}\`로 제어합니다. (List 컴포넌트 포팅 전까지 OOCSS 마크업을 사용합니다.)'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function ListExample() {
  return (
    <Upload
      variant="button"
      fit
      multiple
      trigger={
        <span className="btn btn_filled color_primary">
          <span className="btn_label">파일 추가</span>
        </span>
      }
    >
      <ul className="list upload_list">
        <li className="list_item upload_item is-uploading">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
            <div
              className="upload_progress"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="업로드 진행률"
            >
              <span className="upload_progress-bar" style={{ width: '60%' }} />
            </div>
            <span className="upload_item-meta">2.4 MB · 60%</span>
          </div>
          <Button
            variant="text"
            color="danger"
            iconOnly
            className="upload_item-action"
            ariaLabel="업로드 취소"
            iconBefore={<Icon name="close" />}
          />
        </li>
      </ul>
    </Upload>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Upload variant="button" fit multiple trigger={<span className="btn btn_filled color_primary">
          <span className="btn_label">파일 추가</span>
        </span>}>
      <ul className="list upload_list">
        <li className="list_item upload_item is-uploading">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
            <div className="upload_progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-label="업로드 진행률">
              <span className="upload_progress-bar" style={{
              width: '60%'
            }} />
            </div>
            <span className="upload_item-meta">2.4 MB · 60%</span>
          </div>
          <Button variant="text" color="danger" iconOnly className="upload_item-action" ariaLabel="업로드 취소" iconBefore={<Icon name="close" />} />
        </li>
        <li className="list_item upload_item is-done">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">디자인_가이드.zip</span>
            <span className="upload_item-meta">업로드 완료 · 8.1 MB</span>
          </div>
          <Button variant="text" color="danger" iconOnly className="upload_item-action" ariaLabel="파일 삭제" iconBefore={<Icon name="trash" />} />
        </li>
        <li className="list_item upload_item is-error">
          <span className="upload_item-icon" aria-hidden="true">
            <Icon name="file" color="danger" />
          </span>
          <div className="upload_item-body">
            <span className="upload_item-name text_ellipsis">대용량_영상.mp4</span>
            <div className="upload_progress" role="progressbar" aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} aria-label="업로드 진행률">
              <span className="upload_progress-bar" style={{
              width: '42%'
            }} />
            </div>
            <span className="upload_item-meta">파일 크기가 10MB를 초과합니다.</span>
          </div>
          <Button variant="text" color="danger" iconOnly className="upload_item-action" ariaLabel="파일 삭제" iconBefore={<Icon name="trash" />} />
        </li>
      </ul>
    </Upload>)
}`,...(X=(T=g.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};var q,H,Z;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '사진 카드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`upload_cards\` 그리드에 미리보기 카드와 \`upload_card-trigger\`를 배치합니다. 호버 시 \`upload_card-actions\` 오버레이가 표시됩니다.'
      },
      source: {
        code: \`import { avatarSample } from '@images';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function CardExample() {
  return (
    <Upload
      variant="picture-card"
      accept="image/*"
      hint="최대 5장 · JPG, PNG"
      trigger={
        <>
          <Icon name="plus" size="lg" />
          <span>업로드</span>
        </>
      }
      cards={
        <>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 1" />
            <div className="upload_card-actions">
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="미리보기"
                iconBefore={<Icon name="eye" />}
              />
              <Button
                variant="ghost"
                iconOnly
                size="sm"
                ariaLabel="삭제"
                iconBefore={<Icon name="trash" />}
              />
            </div>
          </div>
        </>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Upload variant="picture-card" accept="image/*" hint="최대 5장 · JPG, PNG" trigger={<>
          <Icon name="plus" size="lg" />
          <span>업로드</span>
        </>} cards={<>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 1" />
            <div className="upload_card-actions">
              <Button variant="ghost" iconOnly size="sm" ariaLabel="미리보기" iconBefore={<Icon name="eye" />} />
              <Button variant="ghost" iconOnly size="sm" ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
            </div>
          </div>
          <div className="upload_card">
            <img className="upload_card-image" src={avatarSample} alt="미리보기 2" />
            <div className="upload_card-actions">
              <Button variant="ghost" iconOnly size="sm" ariaLabel="미리보기" iconBefore={<Icon name="eye" />} />
              <Button variant="ghost" iconOnly size="sm" ariaLabel="삭제" iconBefore={<Icon name="trash" />} />
            </div>
          </div>
        </>} />)
}`,...(Z=(H=f.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var K,Q,W;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '아바타 업로드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`upload_avatar\`로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다.'
      },
      source: {
        code: \`import { avatarSample } from '@images';
import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function AvatarExample() {
  return (
    <Upload
      variant="avatar"
      accept="image/*"
      inputId="upload-avatar"
      trigger={
        <>
          <Avatar size="xl" src={avatarSample} alt="프로필 사진" />
          <span className="upload_avatar-overlay" aria-hidden="true">
            <Icon name="upload" size="lg" />
          </span>
        </>
      }
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Upload variant="avatar" accept="image/*" inputId="upload-avatar" trigger={<>
          <Avatar size="xl" src={avatarSample} alt="프로필 사진" />
          <span className="upload_avatar-overlay" aria-hidden="true">
            <Icon name="upload" size="lg" />
          </span>
        </>} />)
}`,...(W=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,$,aa;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '폼 필드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`form_field\`와 조합해 레이블·힌트·오류 메시지를 표시합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Upload from '@uxkm/ui-react/components/Upload.jsx';

export function FormExample() {
  return (
    <div className="form_field form_field_fit">
      <label className="form_field-label" htmlFor="upload-form-attach">
        첨부파일
      </label>
      <Upload
        variant="drag"
        fit
        multiple
        inputId="upload-form-attach"
        trigger={
          <>
            <span className="upload_dropzone-icon" aria-hidden="true">
              <Icon name="upload" size="xl" />
            </span>
            <span className="upload_dropzone-title">파일을 선택하세요</span>
            <span className="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
          </>
        }
      />
      <p className="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="upload-form-attach">
          첨부파일
        </label>
        <Upload variant="drag" fit multiple inputId="upload-form-attach" trigger={<>
              <span className="upload_dropzone-icon" aria-hidden="true">
                <Icon name="upload" size="xl" />
              </span>
              <span className="upload_dropzone-title">파일을 선택하세요</span>
              <span className="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
            </>} />
        <p className="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
      </div>
      <div className="form_field form_field_fit">
        <label className="form_field-label" htmlFor="upload-form-error">
          증빙 서류
        </label>
        <Upload variant="drag" fit error inputId="upload-form-error" trigger={<>
              <span className="upload_dropzone-icon" aria-hidden="true">
                <Icon name="upload" size="xl" />
              </span>
              <span className="upload_dropzone-title">필수 서류를 업로드하세요</span>
              <span className="upload_dropzone-desc">is-error 상태</span>
            </>} />
        <p className="form_field-error" id="upload-form-error-msg">
          첨부파일은 필수입니다.
        </p>
      </div>
    </>)
}`,...(aa=($=b.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};const Ga=["Playground","ButtonDemo","Dropzone","ListDemo","Card","AvatarDemo","Form"];export{x as AvatarDemo,u as ButtonDemo,f as Card,_ as Dropzone,b as Form,g as ListDemo,m as Playground,Ga as __namedExportsOrder,Ea as default};
