import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{E as n,I as r,_ as i,g as a,o,v as s}from"./iframe-DA3cKKGZ.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Button-Bdofg9ij.js";import{n as d,t as f}from"./Link-BNuNoDLM.js";function p({color:e=`info`,title:t,description:n,closable:r=!1,showIcon:i=!0,size:a=`md`,banner:o=!1,role:s=`alert`,icon:c,actions:l,children:u,className:d=``,closeLabel:f=`알림 닫기`,onClose:p,..._}){let[v,y]=(0,m.useState)(!0);if(!v)return null;let b=[`info`,`success`,`warning`,`danger`].includes(e)?e:`info`,x=[`alert`,b===`danger`?`color_error`:`color_${b}`,a!==`md`&&`alert_${a}`,o&&`alert_banner`,d].filter(Boolean).join(` `),S=u??n,C=e=>{y(!1),p?.(e)};return(0,h.jsxs)(`div`,{className:x,"data-component":`Alert`,role:s,..._,children:[i&&(c??(0,h.jsx)(`svg`,{className:`alert_icon`,"aria-hidden":`true`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:g[b]})),(0,h.jsxs)(`div`,{className:`alert_body`,children:[t&&(0,h.jsx)(`div`,{className:`alert_title`,children:t}),S&&(0,h.jsx)(`p`,{className:`alert_desc`,children:S}),l]}),r&&(0,h.jsx)(`button`,{type:`button`,className:`alert_close`,"aria-label":f,onClick:C,children:(0,h.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,h.jsx)(`path`,{d:`M18 6L6 18M6 6l12 12`})})})]})}var m,h,g;function _(){return(_=e((()=>{m=r(),h=c(),g={info:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,h.jsx)(`path`,{d:`M12 16v-4M12 8h.01`})]}),success:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`path`,{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`}),(0,h.jsx)(`path`,{d:`M22 4 12 14.01l-3-3`})]}),warning:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`path`,{d:`M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`}),(0,h.jsx)(`path`,{d:`M12 9v4M12 17h.01`})]}),danger:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,h.jsx)(`path`,{d:`m15 9-6 6M9 9l6 6`})]})},p.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{color:{defaultValue:{value:`'info'`,computed:!1},required:!1},closable:{defaultValue:{value:`false`,computed:!1},required:!1},showIcon:{defaultValue:{value:`true`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},banner:{defaultValue:{value:`false`,computed:!1},required:!1},role:{defaultValue:{value:`'alert'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1},closeLabel:{defaultValue:{value:`'알림 닫기'`,computed:!1},required:!1}}}})))()}var v=t({Actions:()=>M,Banner:()=>N,Basic:()=>D,Closable:()=>j,Context:()=>P,DescriptionOnly:()=>O,NoIcon:()=>k,Playground:()=>E,Size:()=>A,__namedExportsOrder:()=>F,default:()=>T});function y({children:e}){return(0,x.jsx)(`div`,{className:`demo-stack alert-demo`,children:e})}function b(e){return{color:e.color,size:e.size,closable:e.closable===!0,showIcon:e.showIcon!==!1,banner:e.banner===!0,title:typeof e.title==`string`&&e.title?e.title:void 0,description:typeof e.description==`string`?e.description:void 0,role:e.role===`status`?`status`:`alert`}}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{_(),l(),d(),s(),x=c(),S=p,C=u,w=f,T={title:`피드백/Alert`,component:S,parameters:{layout:`padded`,controls:{include:[`color`,`size`,`title`,`description`,`role`,`closable`,`showIcon`,`banner`]},docs:{extractArgTypes:()=>({})}},args:{color:`info`,size:`md`,closable:!1,showIcon:!0,banner:!1,title:`알림`,description:`Controls로 속성을 조절해 보세요.`,role:`alert`},argTypes:{...i(`closeLabel`,`icon`,`actions`,`onClose`),...a,color:{control:`select`,options:[`info`,`success`,`warning`,`danger`],type:`string`},size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`},role:{control:`select`,options:[`alert`,`status`],type:`string`},closable:o,showIcon:o,banner:o,title:n,description:n}},E={name:`Playground`,render:e=>(0,x.jsx)(S,{...b(e)})},D={name:`기본`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsx)(S,{color:`info`,title:`정보`,description:`변경 사항이 저장되었습니다.`}),(0,x.jsx)(S,{color:`success`,title:`성공`,description:`요청이 성공적으로 처리되었습니다.`}),(0,x.jsx)(S,{color:`warning`,title:`주의`,description:`세션이 곧 만료됩니다. 저장해 주세요.`}),(0,x.jsx)(S,{color:`danger`,title:`오류`,description:`네트워크 연결을 확인해 주세요.`})]})},O={name:`설명만`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsx)(S,{description:`새 기능이 추가되었습니다. 설정에서 확인해 보세요.`}),(0,x.jsx)(S,{color:`success`,role:`status`,description:`프로필이 업데이트되었습니다.`})]})},k={name:`아이콘 없음`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsx)(S,{showIcon:!1,color:`warning`,title:`점검 안내`,description:`오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.`}),(0,x.jsx)(S,{showIcon:!1,color:`info`,description:`이 페이지는 데모 목적으로만 사용됩니다.`})]})},A={name:`크기`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsx)(S,{size:`sm`,color:`info`,title:`Small`,description:`폼 필드 아래 등 좁은 영역에 사용합니다.`}),(0,x.jsx)(S,{color:`info`,title:`Medium`,description:`기본 크기입니다.`}),(0,x.jsx)(S,{size:`lg`,color:`info`,title:`Large`,description:`페이지 상단 등 눈에 띄는 안내에 사용합니다.`})]})},j={name:`닫기 가능`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsx)(S,{closable:!0,title:`새 소식`,description:`대시보드가 새롭게 개편되었습니다.`}),(0,x.jsx)(S,{closable:!0,color:`warning`,description:`브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.`})]})},M={name:`액션`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsx)(S,{color:`danger`,title:`저장 실패`,description:`변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.`,actions:(0,x.jsxs)(`div`,{className:`alert_actions`,children:[(0,x.jsx)(C,{variant:`filled`,color:`danger`,size:`sm`,label:`다시 시도`}),(0,x.jsx)(C,{variant:`ghost`,size:`sm`,label:`취소`})]})}),(0,x.jsx)(S,{color:`info`,title:`이용 약관 변경`,description:`2026년 3월 1일부터 새 약관이 적용됩니다.`,actions:(0,x.jsxs)(`div`,{className:`alert_actions`,children:[(0,x.jsx)(w,{href:`#`,size:`sm`,label:`약관 보기`}),(0,x.jsx)(C,{variant:`text`,color:`primary`,size:`sm`,label:`동의하기`})]})})]})},N={name:`배너`,render:()=>(0,x.jsx)(S,{banner:!0,closable:!0,color:`warning`,description:`시스템 점검으로 일부 기능이 제한될 수 있습니다.`})},P={name:`문맥 속 사용`,render:()=>(0,x.jsxs)(y,{children:[(0,x.jsxs)(S,{color:`info`,title:`업데이트 안내`,children:[`새 버전이 출시되었습니다. `,(0,x.jsx)(w,{href:`#`,size:`sm`,label:`릴리스 노트 보기`})]}),(0,x.jsxs)(`form`,{className:`form form_vertical form_fit`,noValidate:!0,children:[(0,x.jsx)(S,{color:`danger`,title:`입력 내용을 확인해 주세요`,description:`이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.`}),(0,x.jsxs)(`div`,{className:`form_field`,children:[(0,x.jsx)(`label`,{className:`form_field-label`,htmlFor:`alert-email`,children:`이메일`}),(0,x.jsx)(`input`,{id:`alert-email`,type:`email`,className:`input is-error`,defaultValue:`invalid-email`,"aria-invalid":`true`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Alert {...alertPropsFromArgs(args)} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '설명만',
  render: () => <Demo>
      <Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '아이콘 없음',
  render: () => <Demo>
      <Alert showIcon={false} color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
      <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>
      <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '닫기 가능',
  render: () => <Demo>
      <Alert closable title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '액션',
  render: () => <Demo>
      <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요." actions={<div className="alert_actions">
            <Button variant="filled" color="danger" size="sm" label="다시 시도" />
            <Button variant="ghost" size="sm" label="취소" />
          </div>} />
      <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다." actions={<div className="alert_actions">
            <Link href="#" size="sm" label="약관 보기" />
            <Button variant="text" color="primary" size="sm" label="동의하기" />
          </div>} />
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '배너',
  render: () => <Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '문맥 속 사용',
  render: () => <Demo>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form form_vertical form_fit" noValidate>
        <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />
        <div className="form_field">
          <label className="form_field-label" htmlFor="alert-email">
            이메일
          </label>
          <input id="alert-email" type="email" className="input is-error" defaultValue="invalid-email" aria-invalid="true" />
        </div>
      </form>
    </Demo>
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`Basic`,`DescriptionOnly`,`NoIcon`,`Size`,`Closable`,`Actions`,`Banner`,`Context`]})))()}export{j as a,k as c,D as i,A as l,v as n,P as o,N as r,O as s,M as t,I as u};