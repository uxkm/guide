import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bdofg9ij.js";import{n as a,t as o}from"./Alert-CwXSUYdC.js";import{n as s,t as c}from"./Link-CdmlgHEu.js";var l=t({Actions:()=>x,Banner:()=>S,Basic:()=>g,Closable:()=>b,Context:()=>C,DescriptionOnly:()=>_,NoIcon:()=>v,Size:()=>y,__namedExportsOrder:()=>w,default:()=>h});function u({children:e}){return(0,d.jsx)(`div`,{className:`demo-stack alert-demo`,children:e})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),r(),s(),d=n(),f=o,p=i,m=c,h={title:`피드백/Alert`,component:f,parameters:{layout:`padded`},args:{color:`info`,size:`md`,closable:!1,showIcon:!0},argTypes:{color:{control:`select`,options:[`info`,`success`,`warning`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},g={name:`기본`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{color:`info`,title:`정보`,description:`변경 사항이 저장되었습니다.`}),(0,d.jsx)(f,{color:`success`,title:`성공`,description:`요청이 성공적으로 처리되었습니다.`}),(0,d.jsx)(f,{color:`warning`,title:`주의`,description:`세션이 곧 만료됩니다. 저장해 주세요.`}),(0,d.jsx)(f,{color:`danger`,title:`오류`,description:`네트워크 연결을 확인해 주세요.`})]})},_={name:`설명만`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{description:`새 기능이 추가되었습니다. 설정에서 확인해 보세요.`}),(0,d.jsx)(f,{color:`success`,role:`status`,description:`프로필이 업데이트되었습니다.`})]})},v={name:`아이콘 없음`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{showIcon:!1,color:`warning`,title:`점검 안내`,description:`오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.`}),(0,d.jsx)(f,{showIcon:!1,color:`info`,description:`이 페이지는 데모 목적으로만 사용됩니다.`})]})},y={name:`크기`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{size:`sm`,color:`info`,title:`Small`,description:`폼 필드 아래 등 좁은 영역에 사용합니다.`}),(0,d.jsx)(f,{color:`info`,title:`Medium`,description:`기본 크기입니다.`}),(0,d.jsx)(f,{size:`lg`,color:`info`,title:`Large`,description:`페이지 상단 등 눈에 띄는 안내에 사용합니다.`})]})},b={name:`닫기 가능`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{closable:!0,title:`새 소식`,description:`대시보드가 새롭게 개편되었습니다.`}),(0,d.jsx)(f,{closable:!0,color:`warning`,description:`브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.`})]})},x={name:`액션`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(f,{color:`danger`,title:`저장 실패`,description:`변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.`,actions:(0,d.jsxs)(`div`,{className:`alert_actions`,children:[(0,d.jsx)(p,{variant:`filled`,color:`danger`,size:`sm`,label:`다시 시도`}),(0,d.jsx)(p,{variant:`ghost`,size:`sm`,label:`취소`})]})}),(0,d.jsx)(f,{color:`info`,title:`이용 약관 변경`,description:`2026년 3월 1일부터 새 약관이 적용됩니다.`,actions:(0,d.jsxs)(`div`,{className:`alert_actions`,children:[(0,d.jsx)(m,{href:`#`,size:`sm`,label:`약관 보기`}),(0,d.jsx)(p,{variant:`text`,color:`primary`,size:`sm`,label:`동의하기`})]})})]})},S={name:`배너`,render:()=>(0,d.jsx)(f,{banner:!0,closable:!0,color:`warning`,description:`시스템 점검으로 일부 기능이 제한될 수 있습니다.`})},C={name:`문맥 속 사용`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsxs)(f,{color:`info`,title:`업데이트 안내`,children:[`새 버전이 출시되었습니다. `,(0,d.jsx)(m,{href:`#`,size:`sm`,label:`릴리스 노트 보기`})]}),(0,d.jsxs)(`form`,{className:`form form_vertical form_fit`,noValidate:!0,children:[(0,d.jsx)(f,{color:`danger`,title:`입력 내용을 확인해 주세요`,description:`이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.`}),(0,d.jsxs)(`div`,{className:`form_field`,children:[(0,d.jsx)(`label`,{className:`form_field-label`,htmlFor:`alert-email`,children:`이메일`}),(0,d.jsx)(`input`,{id:`alert-email`,type:`email`,className:`input is-error`,defaultValue:`invalid-email`,"aria-invalid":`true`})]})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </Demo>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '설명만',
  render: () => <Demo>
      <Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </Demo>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '아이콘 없음',
  render: () => <Demo>
      <Alert showIcon={false} color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
      <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
    </Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>
      <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
    </Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '닫기 가능',
  render: () => <Demo>
      <Alert closable title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
    </Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '배너',
  render: () => <Alert banner closable color="warning" description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`DescriptionOnly`,`NoIcon`,`Size`,`Closable`,`Actions`,`Banner`,`Context`]})))()}export{b as a,v as c,g as i,y as l,l as n,C as o,S as r,_ as s,x as t,T as u};