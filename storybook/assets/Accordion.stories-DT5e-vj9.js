import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,n as i,r as a,t as o}from"./AccordionItem-D-9NY3Ib.js";var s=t({Basic:()=>p,Bordered:()=>g,CustomSlot:()=>v,Disabled:()=>y,Extra:()=>_,Flush:()=>h,Multiple:()=>m,Playground:()=>f,Size:()=>b,Slide:()=>x,__namedExportsOrder:()=>S,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),i(),c=n(),l=a,u=o,d={title:`기타/Accordion`,component:l,subcomponents:{AccordionItem:u},parameters:{layout:`padded`},decorators:[e=>(0,c.jsx)(`div`,{className:`accordion-story-demo`,children:(0,c.jsx)(e,{})})],argTypes:{variant:{control:`select`,options:[`bordered`,`flush`,`card`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},effect:{control:`select`,options:[void 0,`slide`]}}},f={args:{variant:`card`,size:`md`,multiple:!1},render:e=>(0,c.jsxs)(l,{...e,children:[(0,c.jsx)(u,{label:`섹션 1`,open:!0,content:`Controls로 속성을 조절해 보세요.`}),(0,c.jsx)(u,{label:`섹션 2`,content:`두 번째 패널입니다.`})]})},p={name:`기본`,render:()=>(0,c.jsxs)(l,{variant:`card`,children:[(0,c.jsx)(u,{label:`배송은 얼마나 걸리나요?`,content:`평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.`}),(0,c.jsx)(u,{label:`교환·반품은 어떻게 하나요?`,open:!0,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.`}),(0,c.jsx)(u,{label:`해외 배송이 가능한가요?`,content:`현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.`})]})},m={name:`다중 열기`,render:()=>(0,c.jsxs)(l,{multiple:!0,children:[(0,c.jsx)(u,{label:`알림`,open:!0,content:`이메일·푸시 알림 수신 여부를 설정합니다.`}),(0,c.jsx)(u,{label:`개인정보`,open:!0,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`}),(0,c.jsx)(u,{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`})]})},h={name:`플러시`,render:()=>(0,c.jsxs)(l,{variant:`flush`,children:[(0,c.jsx)(u,{label:`일반`,open:!0,content:`언어, 시간대, 테마 등 기본 환경 설정입니다.`}),(0,c.jsx)(u,{label:`접근성`,content:`고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.`}),(0,c.jsx)(u,{label:`고급`,content:`개발자 도구와 실험 기능을 켜거나 끕니다.`})]})},g={name:`보더`,render:()=>(0,c.jsxs)(l,{variant:`bordered`,children:[(0,c.jsx)(u,{label:`알림`,open:!0,content:`이메일·푸시 알림 수신 여부를 설정합니다.`}),(0,c.jsx)(u,{label:`개인정보`,content:`프로필 공개 범위와 데이터 다운로드를 관리합니다.`}),(0,c.jsx)(u,{label:`보안`,content:`비밀번호 변경과 2단계 인증을 설정합니다.`})]})},_={name:`보조 정보`,render:()=>(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{label:`미해결 문의`,open:!0,content:`답변이 필요한 고객 문의 3건이 있습니다.`,extra:(0,c.jsx)(`span`,{className:`badge badge_count color_danger badge_sm`,children:`3`})}),(0,c.jsx)(u,{label:`처리 완료`,content:`최근 일주일간 완료된 문의 12건입니다.`,extra:`지난 7일`})]})},v={name:`슬롯 커스텀`,render:()=>(0,c.jsxs)(l,{variant:`card`,children:[(0,c.jsx)(u,{open:!0,title:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`strong`,{children:`프로 요금제`}),` `,(0,c.jsx)(`span`,{className:`tag tag_outline color_primary tag_sm`,children:`추천`})]}),children:(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{children:`제목과 본문에 원하는 컴포넌트와 마크업을 자유롭게 배치할 수 있습니다.`}),(0,c.jsxs)(`ul`,{children:[(0,c.jsx)(`li`,{children:`팀원 10명`}),(0,c.jsx)(`li`,{children:`프로젝트 무제한`}),(0,c.jsx)(`li`,{children:`우선 기술 지원`})]})]})}),(0,c.jsx)(u,{title:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`strong`,{children:`엔터프라이즈`}),` `,(0,c.jsx)(`span`,{className:`tag tag_outline color_default tag_sm`,children:`문의`})]}),children:(0,c.jsx)(`p`,{children:`조직 규모와 보안 요구사항에 맞춰 별도 구성합니다.`})})]})},y={name:`비활성`,render:()=>(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{label:`공개 문서`,open:!0,content:`누구나 열람할 수 있는 가이드 문서입니다.`}),(0,c.jsx)(u,{label:`팀 전용 (권한 없음)`,disabled:!0,content:`팀 멤버만 접근할 수 있는 내부 문서입니다.`})]})},b={name:`크기`,render:()=>(0,c.jsxs)(`div`,{className:`accordion-story-stack`,children:[(0,c.jsx)(l,{size:`sm`,children:(0,c.jsx)(u,{label:`Small`,open:!0,content:`작은 아코디언 — 좁은 패딩.`})}),(0,c.jsx)(l,{size:`lg`,children:(0,c.jsx)(u,{label:`Large`,open:!0,content:`큰 아코디언 — 넓은 패딩과 큰 글자.`})})]})},x={name:`슬라이드`,render:()=>(0,c.jsxs)(l,{variant:`card`,effect:`slide`,children:[(0,c.jsx)(u,{label:`배송 안내`,open:!0,content:`평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.`}),(0,c.jsx)(u,{label:`교환·반품`,content:`수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`}),(0,c.jsx)(u,{label:`고객센터`,content:`1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    size: 'md',
    multiple: false
  },
  render: args => <Accordion {...args}><AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." /><AccordionItem label="섹션 2" content="두 번째 패널입니다." /></Accordion>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Accordion variant="card"><AccordionItem label="배송은 얼마나 걸리나요?" content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다." /><AccordionItem label="교환·반품은 어떻게 하나요?" open content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다." /><AccordionItem label="해외 배송이 가능한가요?" content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다." /></Accordion>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '다중 열기',
  render: () => <Accordion multiple><AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." /><AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." /><AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." /></Accordion>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '플러시',
  render: () => <Accordion variant="flush"><AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." /><AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." /><AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." /></Accordion>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '보더',
  render: () => <Accordion variant="bordered"><AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." /><AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." /><AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." /></Accordion>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '보조 정보',
  render: () => <Accordion><AccordionItem label="미해결 문의" open content="답변이 필요한 고객 문의 3건이 있습니다." extra={<span className="badge badge_count color_danger badge_sm">3</span>} /><AccordionItem label="처리 완료" content="최근 일주일간 완료된 문의 12건입니다." extra="지난 7일" /></Accordion>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '슬롯 커스텀',
  render: () => <Accordion variant="card">
      <AccordionItem open title={<><strong>프로 요금제</strong> <span className="tag tag_outline color_primary tag_sm">추천</span></>}>
        <div>
          <p>제목과 본문에 원하는 컴포넌트와 마크업을 자유롭게 배치할 수 있습니다.</p>
          <ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul>
        </div>
      </AccordionItem>
      <AccordionItem title={<><strong>엔터프라이즈</strong> <span className="tag tag_outline color_default tag_sm">문의</span></>}>
        <p>조직 규모와 보안 요구사항에 맞춰 별도 구성합니다.</p>
      </AccordionItem>
    </Accordion>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <Accordion><AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." /><AccordionItem label="팀 전용 (권한 없음)" disabled content="팀 멤버만 접근할 수 있는 내부 문서입니다." /></Accordion>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="accordion-story-stack"><Accordion size="sm"><AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." /></Accordion><Accordion size="lg"><AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." /></Accordion></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '슬라이드',
  render: () => <Accordion variant="card" effect="slide"><AccordionItem label="배송 안내" open content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다." /><AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." /><AccordionItem label="고객센터" content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다." /></Accordion>
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Basic`,`Multiple`,`Flush`,`Bordered`,`Extra`,`CustomSlot`,`Disabled`,`Size`,`Slide`]})))()}export{y as a,m as c,C as d,v as i,b as l,p as n,_ as o,g as r,h as s,s as t,x as u};