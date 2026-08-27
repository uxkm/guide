import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BnaKUpFX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./url-BJUrBafP.js";import{n as o,t as s}from"./Upload-DRYeQO6-.js";var c=t({Avatar:()=>S,Basic:()=>v,Cards:()=>x,Dropzone:()=>y,Example:()=>E,List:()=>b,Size:()=>C,State:()=>T,Width:()=>w,__namedExportsOrder:()=>D,default:()=>_});function l(){let[e,t]=(0,u.useState)([]);return(0,d.jsxs)(`form`,{className:`form form_vertical form_fit form_compact`,onSubmit:e=>e.preventDefault(),children:[(0,d.jsxs)(`div`,{className:`form_field`,children:[(0,d.jsxs)(`p`,{className:`form_field-label`,id:`attachments-label`,children:[`첨부 파일`,(0,d.jsxs)(`span`,{className:`form_field-required`,children:[(0,d.jsx)(`span`,{"aria-hidden":`true`,children:`*`}),(0,d.jsx)(`span`,{className:`form_field-required-text`,children:`필수 항목`})]})]}),(0,d.jsx)(`div`,{"aria-labelledby":`attachments-label`,children:(0,d.jsx)(f,{files:e,onChange:t,multiple:!0,accept:`.pdf,.doc,.docx`,maxSize:10485760,maxFiles:3,hint:`PDF, DOC, DOCX · 파일당 최대 10MB`})}),!e.length&&(0,d.jsx)(`p`,{className:`form_field-error`,role:`alert`,children:`파일을 한 개 이상 첨부해 주세요.`})]}),(0,d.jsx)(`div`,{className:`form_actions`,children:(0,d.jsx)(`button`,{type:`submit`,className:`btn btn_filled color_primary`,children:(0,d.jsx)(`span`,{className:`btn_label`,children:`제출`})})})]})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{i(),u=n(),o(),d=r(),f=s,p=({children:e})=>(0,d.jsx)(`div`,{className:`demo-stack`,children:e}),m={name:`제품소개서.pdf`,size:1843200,type:`application/pdf`,status:`done`},h=a(`images/samples/avatar/avatar-sample.svg`),g=e=>({name:e,size:245760,type:`image/svg+xml`,status:`done`,url:h}),_={title:`폼/Upload`,component:f,parameters:{layout:`padded`},args:{variant:`button`,size:`md`,disabled:!1,multiple:!1,fit:!1},argTypes:{variant:{control:`select`,options:[`button`,`drag`,`list`,`picture-card`,`avatar`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},v={name:`버튼 업로드`,render:()=>(0,d.jsxs)(p,{children:[(0,d.jsx)(f,{buttonLabel:`파일 선택`}),(0,d.jsx)(f,{hint:`PNG, JPG · 최대 5MB`,trigger:(0,d.jsx)(`span`,{className:`btn btn_outline color_primary`,children:(0,d.jsx)(`span`,{className:`btn_label`,children:`업로드`})})}),(0,d.jsx)(f,{trigger:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`span`,{className:`btn btn_filled color_primary btn_sm`,children:(0,d.jsx)(`span`,{className:`btn_label`,children:`Small`})}),(0,d.jsx)(`span`,{className:`btn btn_filled color_primary btn_lg`,children:(0,d.jsx)(`span`,{className:`btn_label`,children:`Large`})})]})}),(0,d.jsx)(f,{disabled:!0,buttonLabel:`비활성`})]})},y={name:`드래그 앤 드롭`,render:()=>(0,d.jsxs)(p,{children:[(0,d.jsx)(f,{variant:`drag`,fit:!0,multiple:!0,accept:`image/png,image/jpeg,.pdf`,maxSize:5242880,maxFiles:3,description:`PNG, JPG, PDF · 파일당 최대 5MB`,hint:`최대 3개까지 첨부할 수 있습니다.`}),(0,d.jsx)(f,{variant:`drag`,fit:!0,dragover:!0,title:`파일을 놓으세요`,description:`is-dragover 상태`})]})},b={name:`파일 목록`,render:()=>(0,d.jsx)(f,{variant:`list`,fit:!0,multiple:!0,defaultFiles:[{name:`프로젝트_제안서_v2.pdf`,size:2516582,status:`uploading`,progress:60},m,{name:`대용량_영상.mp4`,size:12582912,status:`error`,error:`파일 크기가 10MB를 초과합니다.`}]})},x={name:`사진 카드`,render:()=>(0,d.jsx)(f,{variant:`picture-card`,multiple:!0,accept:`image/*`,maxFiles:5,buttonLabel:`업로드`,hint:`최대 5장 · JPG, PNG`,defaultFiles:[g(`프로필-1.svg`),g(`프로필-2.svg`)]})},S={name:`아바타 업로드`,render:()=>(0,d.jsx)(f,{variant:`avatar`,accept:`image/*`,avatarSrc:h,avatarAlt:`프로필 사진`})},C={name:`크기`,render:()=>(0,d.jsx)(p,{children:[`sm`,`md`,`lg`].map(e=>(0,d.jsx)(f,{variant:`drag`,size:e,title:`${e.toUpperCase()} 업로드`,description:`파일을 선택하세요.`},e))})},w={name:`너비`,render:()=>(0,d.jsxs)(p,{children:[(0,d.jsx)(f,{variant:`drag`,title:`전체 너비`}),(0,d.jsx)(f,{variant:`drag`,fit:!0,title:`제한 너비`})]})},T={name:`상태`,render:()=>(0,d.jsxs)(p,{children:[(0,d.jsx)(f,{disabled:!0,hint:`파일을 변경할 수 없습니다.`,defaultFiles:[m]}),(0,d.jsx)(f,{variant:`drag`,error:!0,title:`업로드 오류`,description:`허용되는 파일을 다시 선택해 주세요.`})]})},E={name:`조합 예시`,render:()=>(0,d.jsx)(l,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '버튼 업로드',
  render: () => <Demo><Upload buttonLabel="파일 선택" /><Upload hint="PNG, JPG · 최대 5MB" trigger={<span className="btn btn_outline color_primary"><span className="btn_label">업로드</span></span>} /><Upload trigger={<><span className="btn btn_filled color_primary btn_sm"><span className="btn_label">Small</span></span><span className="btn btn_filled color_primary btn_lg"><span className="btn_label">Large</span></span></>} /><Upload disabled buttonLabel="비활성" /></Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '드래그 앤 드롭',
  render: () => <Demo><Upload variant="drag" fit multiple accept="image/png,image/jpeg,.pdf" maxSize={5 * 1024 * 1024} maxFiles={3} description="PNG, JPG, PDF · 파일당 최대 5MB" hint="최대 3개까지 첨부할 수 있습니다." /><Upload variant="drag" fit dragover title="파일을 놓으세요" description="is-dragover 상태" /></Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '파일 목록',
  render: () => <Upload variant="list" fit multiple defaultFiles={[{
    name: '프로젝트_제안서_v2.pdf',
    size: 2516582,
    status: 'uploading',
    progress: 60
  }, sampleFile, {
    name: '대용량_영상.mp4',
    size: 12582912,
    status: 'error',
    error: '파일 크기가 10MB를 초과합니다.'
  }]} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '사진 카드',
  render: () => <Upload variant="picture-card" multiple accept="image/*" maxFiles={5} buttonLabel="업로드" hint="최대 5장 · JPG, PNG" defaultFiles={[sampleImage('프로필-1.svg'), sampleImage('프로필-2.svg')]} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '아바타 업로드',
  render: () => <Upload variant="avatar" accept="image/*" avatarSrc={avatarSample} avatarAlt="프로필 사진" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>{(['sm', 'md', 'lg'] as const).map(size => <Upload key={size} variant="drag" size={size} title={\`\${size.toUpperCase()} 업로드\`} description="파일을 선택하세요." />)}</Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '너비',
  render: () => <Demo><Upload variant="drag" title="전체 너비" /><Upload variant="drag" fit title="제한 너비" /></Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '상태',
  render: () => <Demo><Upload disabled hint="파일을 변경할 수 없습니다." defaultFiles={[sampleFile]} /><Upload variant="drag" error title="업로드 오류" description="허용되는 파일을 다시 선택해 주세요." /></Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => <AttachmentForm />
}`,...E.parameters?.docs?.source}}},D=[`Basic`,`Dropzone`,`List`,`Cards`,`Avatar`,`Size`,`Width`,`State`,`Example`]})))()}export{E as a,T as c,O as d,y as i,c as l,v as n,b as o,x as r,C as s,S as t,w as u};