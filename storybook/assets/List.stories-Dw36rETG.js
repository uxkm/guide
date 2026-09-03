import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,g as i,o as a}from"./iframe-BkSPibU3.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-Bdofg9ij.js";import{r as l,t as u}from"./Icon-CS3T14bP.js";import{r as d,t as f}from"./Avatar-oJFAt54Z.js";function p({children:e,bordered:t=!1,split:n=!1,block:r=!1,size:i=`md`,variant:a=`default`,tag:o,layout:s=`block`,inlineLabelWidth:c,inlineGap:l,descAlign:u=`left`,className:d=``,style:f,role:p,...m}){let h=y.includes(a)?a:`default`,S=b.includes(o)?o:_[h],C=[`list`,v[h],t&&`list_bordered`,n&&`list_divider`,r&&`list_block`,i===`compact`&&`list_compact`,s===`inline`&&`list_inline`,h===`definition`&&u===`right`&&`list_desc-right`,d].filter(Boolean).join(` `),w={...f};return s===`inline`&&c&&(w[`--list-inline-label-width`]=c),s===`inline`&&l&&(w[`--list-inline-gap`]=l),(0,g.jsx)(x.Provider,{value:{tag:S,variant:h},children:(0,g.jsx)(S,{...m,className:C,"data-component":`List`,role:p??(S===`div`?`list`:void 0),style:w,children:e})})}function m({title:e,description:t,meta:n,tag:r=`auto`,prefix:i,extra:a,actions:o,children:s,className:c=``,role:l,...u}){let d=(0,h.useContext)(x);if(r===`auto`&&d.tag===`dl`&&e&&t)return(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(`dt`,{...u,className:[`list_title`,c].filter(Boolean).join(` `),children:e}),(0,g.jsx)(`dd`,{className:`list_desc`,children:t})]});let f=r!==`auto`&&[`li`,`dt`,`dd`].includes(r)?r:`li`;r===`auto`&&d.tag===`dl`&&(f=e?`dt`:`dd`),r===`auto`&&d.tag===`div`&&(f=`div`);let p=!!(e||t||n||s);return(0,g.jsxs)(f,{...u,className:[`list_item`,c].filter(Boolean).join(` `),"data-component":`ListItem`,role:l??(d.tag===`div`?`listitem`:void 0),children:[i,p?(0,g.jsx)(`div`,{className:`list_content`,children:s??(0,g.jsxs)(g.Fragment,{children:[e?(0,g.jsx)(`span`,{className:`list_title`,children:e}):null,n?(0,g.jsx)(`span`,{className:`list_meta`,children:n}):null,t?(0,g.jsx)(`span`,{className:`list_desc`,children:t}):null]})}):null,a?(0,g.jsx)(`span`,{className:`list_extra`,children:a}):null,o?(0,g.jsx)(`span`,{className:`list_action`,children:o}):null]})}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=n(),g=o(),_={default:`ul`,bullet:`ul`,ordered:`ol`,definition:`dl`},v={bullet:`list_bullet`,ordered:`list_ordered`,definition:`list_definition`},y=Object.keys(_),b=[`ul`,`ol`,`dl`,`div`],x=(0,h.createContext)({tag:`ul`,variant:`default`}),p.__docgenInfo={description:``,methods:[],displayName:`List`,props:{bordered:{defaultValue:{value:`false`,computed:!1},required:!1},split:{defaultValue:{value:`false`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},layout:{defaultValue:{value:`'block'`,computed:!1},required:!1},descAlign:{defaultValue:{value:`'left'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}},m.__docgenInfo={description:``,methods:[],displayName:`ListItem`,props:{tag:{defaultValue:{value:`'auto'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var C=t({Actions:()=>K,Basic:()=>I,Bordered:()=>U,Bullet:()=>L,BulletRich:()=>R,BulletVariants:()=>z,Buttons:()=>G,Definition:()=>q,DefinitionInline:()=>J,DefinitionRight:()=>Y,Hierarchical:()=>H,Links:()=>W,Ordered:()=>B,OrderedVariants:()=>V,Playground:()=>F,__namedExportsOrder:()=>X,default:()=>N});function w(e){return typeof e==`number`&&e>0?`${e}rem`:void 0}function T(e){let t=typeof e.tag==`string`&&e.tag?e.tag:void 0,n=w(e.inlineLabelWidth),r=w(e.inlineGap);return{variant:e.variant,bordered:e.bordered===!0,split:e.split===!0,block:e.block===!0,size:e.size===`compact`?`compact`:`md`,layout:e.layout===`inline`?`inline`:`block`,...n?{inlineLabelWidth:n}:{},...r?{inlineGap:r}:{},descAlign:e.descAlign===`right`?`right`:`left`,...t?{tag:t}:{}}}function E({args:e}){let t=T(e),n=t.variant;return n===`definition`?(0,D.jsx)(P,{children:(0,D.jsxs)(O,{...t,style:{maxWidth:`34rem`},children:[(0,D.jsx)(k,{title:`OOCSS`,description:`구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.`}),(0,D.jsx)(k,{title:`Design Token`,description:`색상·간격·타이포 값을 변수로 정의한 것입니다.`}),(0,D.jsx)(k,{title:`WCAG`,description:`웹 콘텐츠 접근성 지침입니다.`})]})}):n===`bullet`||n===`ordered`?(0,D.jsx)(P,{children:(0,D.jsxs)(O,{...t,children:[(0,D.jsx)(k,{children:`디자인 토큰 정의`}),(0,D.jsx)(k,{children:`컴포넌트 문서화`}),(0,D.jsx)(k,{children:`접근성 검토`})]})}):(0,D.jsx)(P,{children:(0,D.jsxs)(O,{...t,children:[(0,D.jsx)(k,{title:`홍길동`,meta:`프론트엔드 개발자`,prefix:(0,D.jsx)(A,{color:`primary`,initials:`홍`,ariaHidden:!0})}),(0,D.jsx)(k,{title:`김철수`,meta:`백엔드 개발자`,prefix:(0,D.jsx)(A,{color:`success`,initials:`김`,ariaHidden:!0})}),(0,D.jsx)(k,{title:`이영희`,meta:`UI/UX 디자이너`,prefix:(0,D.jsx)(A,{color:`warning`,initials:`이`,ariaHidden:!0})})]})})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{d(),S(),s(),l(),r(),D=o(),O=p,k=m,A=f,j=c,M=u,N={title:`데이터 표시/List`,component:O,parameters:{layout:`fullscreen`,controls:{include:[`variant`,`bordered`,`split`,`block`,`size`,`layout`,`inlineLabelWidth`,`inlineGap`,`descAlign`,`tag`]},docs:{extractArgTypes:()=>({})}},args:{variant:`default`,bordered:!0,split:!1,block:!1,size:`md`,layout:`block`,inlineLabelWidth:0,inlineGap:0,descAlign:`left`,tag:``},argTypes:{...i,variant:{control:`select`,options:[`default`,`bullet`,`ordered`,`definition`],type:`string`,description:`목록 종류`},bordered:{...a,description:`테두리 목록`},split:{...a,description:`항목 사이 구분선`},block:{...a,description:`블록형 목록`},size:{control:`select`,options:[`md`,`compact`],type:`string`,description:`목록 크기`},layout:{control:`select`,options:[`block`,`inline`],type:`string`,description:`정의 목록 레이아웃`},inlineLabelWidth:{control:{type:`number`,min:0,max:24,step:.5},type:`number`,description:`inline 라벨 너비 (rem). 0이면 기본값(8rem)`},inlineGap:{control:{type:`number`,min:0,max:8,step:.25},type:`number`,description:`inline 간격 (rem). 0이면 기본값(--space-md)`},descAlign:{control:`select`,options:[`left`,`right`],type:`string`,description:`정의 목록 설명 정렬`},tag:{control:`select`,options:[``,`ul`,`ol`,`dl`,`div`],labels:{"":`자동`},type:`string`,description:`명시적 루트 태그`},role:{table:{disable:!0}}}},P=({children:e})=>(0,D.jsx)(`div`,{className:`btn-demo`,children:e}),F={name:`Playground`,render:e=>(0,D.jsx)(E,{args:e})},I={name:`기본`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{children:[(0,D.jsx)(k,{title:`홍길동`,meta:`프론트엔드 개발자`,prefix:(0,D.jsx)(A,{color:`primary`,initials:`홍`,ariaHidden:!0})}),(0,D.jsx)(k,{title:`김철수`,meta:`백엔드 개발자`,prefix:(0,D.jsx)(A,{color:`success`,initials:`김`,ariaHidden:!0})}),(0,D.jsx)(k,{title:`이영희`,meta:`UI/UX 디자이너`,prefix:(0,D.jsx)(A,{color:`warning`,initials:`이`,ariaHidden:!0})})]})})},L={name:`불릿`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`bullet`,children:[(0,D.jsx)(k,{children:`디자인 토큰 정의`}),(0,D.jsx)(k,{children:`컴포넌트 문서화`}),(0,D.jsx)(k,{children:`접근성 검토`})]})})},R={name:`불릿 · 설명`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`bullet`,children:[(0,D.jsx)(k,{title:`HTML 마크업`,description:`시맨틱 태그와 ARIA 속성을 사용합니다.`}),(0,D.jsx)(k,{title:`SCSS 스타일`,description:`OOCSS 패턴으로 구조와 스킨을 분리합니다.`}),(0,D.jsx)(k,{title:`접근성`,description:`WCAG 2.2 AA 기준을 준수합니다.`})]})})},z={name:`불릿 변형`,render:()=>(0,D.jsxs)(P,{children:[(0,D.jsxs)(O,{variant:`bullet`,className:`list_bullet-circle`,children:[(0,D.jsx)(k,{children:`원형 마커 항목 A`}),(0,D.jsx)(k,{children:`원형 마커 항목 B`})]}),(0,D.jsxs)(O,{variant:`bullet`,className:`list_bullet-square`,children:[(0,D.jsx)(k,{children:`사각 마커 항목 A`}),(0,D.jsx)(k,{children:`사각 마커 항목 B`})]})]})},B={name:`번호`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`ordered`,children:[(0,D.jsx)(k,{children:`요구사항 분석`}),(0,D.jsx)(k,{children:`와이어프레임 작성`}),(0,D.jsx)(k,{children:`프로토타입 검증`}),(0,D.jsx)(k,{children:`개발 및 배포`})]})})},V={name:`번호 변형`,render:()=>(0,D.jsxs)(P,{children:[(0,D.jsxs)(O,{variant:`ordered`,className:`list_ordered-alpha`,children:[(0,D.jsx)(k,{children:`첫 번째 옵션`}),(0,D.jsx)(k,{children:`두 번째 옵션`})]}),(0,D.jsxs)(O,{variant:`ordered`,className:`list_ordered-roman`,children:[(0,D.jsx)(k,{children:`서론`}),(0,D.jsx)(k,{children:`본론`}),(0,D.jsx)(k,{children:`결론`})]})]})},H={name:`계층 번호`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`ordered`,className:`list_ordered-outline`,children:[(0,D.jsx)(k,{children:`요구사항 정의`}),(0,D.jsxs)(k,{children:[`설계`,(0,D.jsxs)(O,{variant:`ordered`,className:`list_ordered-outline`,children:[(0,D.jsx)(k,{children:`정보 구조`}),(0,D.jsx)(k,{children:`UI 설계`})]})]}),(0,D.jsx)(k,{children:`개발 및 배포`})]})})},U={name:`테두리`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{bordered:!0,children:[(0,D.jsx)(k,{title:`알림 설정`,description:`이메일 및 푸시 알림을 관리합니다.`}),(0,D.jsx)(k,{title:`프로필 편집`,description:`이름, 사진, 소개를 변경합니다.`}),(0,D.jsx)(k,{title:`보안`,description:`비밀번호 및 2단계 인증을 설정합니다.`})]})})},W={name:`링크`,render:()=>(0,D.jsx)(P,{children:(0,D.jsx)(O,{split:!0,children:[`홈`,`프로젝트`,`설정`].map(e=>(0,D.jsx)(k,{children:(0,D.jsxs)(`a`,{className:`list_link`,href:`#`,"data-ripple":`true`,children:[(0,D.jsx)(`span`,{className:`list_title`,children:e}),(0,D.jsx)(M,{className:`list_action`,name:`chevron`})]})},e))})})},G={name:`버튼 항목`,render:()=>(0,D.jsx)(P,{children:(0,D.jsx)(O,{bordered:!0,children:[`홍길동`,`김철수`].map((e,t)=>(0,D.jsx)(k,{children:(0,D.jsxs)(`button`,{className:`list_link`,type:`button`,"data-ripple":`true`,children:[(0,D.jsx)(A,{color:t?`success`:`primary`,initials:e[0],ariaHidden:!0}),(0,D.jsxs)(`span`,{className:`list_content`,children:[(0,D.jsx)(`span`,{className:`list_title`,children:e}),(0,D.jsx)(`span`,{className:`list_meta`,children:`멤버 선택`})]})]})},e))})})},K={name:`액션`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{bordered:!0,children:[(0,D.jsx)(k,{title:`디자인 시스템`,description:`마지막 수정 2시간 전`,actions:(0,D.jsx)(j,{variant:`text`,size:`sm`,label:`열기`})}),(0,D.jsx)(k,{title:`컴포넌트 가이드`,description:`마지막 수정 어제`,actions:(0,D.jsx)(j,{variant:`text`,size:`sm`,label:`열기`})})]})})},q={name:`정의 목록`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`definition`,style:{maxWidth:`34rem`},children:[(0,D.jsx)(k,{title:`OOCSS`,description:`구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.`}),(0,D.jsx)(k,{title:`Design Token`,description:`색상·간격·타이포 값을 변수로 정의한 것입니다.`}),(0,D.jsx)(k,{title:`WCAG`,description:`웹 콘텐츠 접근성 지침입니다.`})]})})},J={name:`정의 목록 · 인라인`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`definition`,layout:`inline`,inlineLabelWidth:`8rem`,children:[(0,D.jsx)(k,{title:`OOCSS`,description:`구조와 스킨 분리`}),(0,D.jsx)(k,{title:`Design Token`,description:`디자인 값 변수화`}),(0,D.jsx)(k,{title:`WCAG`,description:`웹 접근성 지침`})]})})},Y={name:`정의 목록 · 우측 정렬`,render:()=>(0,D.jsx)(P,{children:(0,D.jsxs)(O,{variant:`definition`,layout:`inline`,descAlign:`right`,block:!0,children:[(0,D.jsx)(k,{title:`주문번호`,description:`ORD-2024-0815`}),(0,D.jsx)(k,{title:`결제금액`,description:`₩42,000`}),(0,D.jsx)(k,{title:`배송지`,description:`서울특별시 강남구`})]})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <ListPlayground args={args} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>
      <List>
        <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
        <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
        <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
      </List>
    </Demo>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '불릿',
  render: () => <Demo>
      <List variant="bullet">
        <ListItem>디자인 토큰 정의</ListItem>
        <ListItem>컴포넌트 문서화</ListItem>
        <ListItem>접근성 검토</ListItem>
      </List>
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '불릿 · 설명',
  render: () => <Demo>
      <List variant="bullet">
        <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
        <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
        <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
      </List>
    </Demo>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '불릿 변형',
  render: () => <Demo>
      <List variant="bullet" className="list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List variant="bullet" className="list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
    </Demo>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '번호',
  render: () => <Demo>
      <List variant="ordered">
        <ListItem>요구사항 분석</ListItem>
        <ListItem>와이어프레임 작성</ListItem>
        <ListItem>프로토타입 검증</ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
    </Demo>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '번호 변형',
  render: () => <Demo>
      <List variant="ordered" className="list_ordered-alpha">
        <ListItem>첫 번째 옵션</ListItem>
        <ListItem>두 번째 옵션</ListItem>
      </List>
      <List variant="ordered" className="list_ordered-roman">
        <ListItem>서론</ListItem>
        <ListItem>본론</ListItem>
        <ListItem>결론</ListItem>
      </List>
    </Demo>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '계층 번호',
  render: () => <Demo>
      <List variant="ordered" className="list_ordered-outline">
        <ListItem>요구사항 정의</ListItem>
        <ListItem>
          설계
          <List variant="ordered" className="list_ordered-outline">
            <ListItem>정보 구조</ListItem>
            <ListItem>UI 설계</ListItem>
          </List>
        </ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
    </Demo>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '테두리',
  render: () => <Demo>
      <List bordered>
        <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
        <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
        <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
      </List>
    </Demo>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '링크',
  render: () => <Demo>
      <List split>
        {['홈', '프로젝트', '설정'].map(label => <ListItem key={label}>
            <a className="list_link" href="#" data-ripple="true">
              <span className="list_title">{label}</span>
              <Icon className="list_action" name="chevron" />
            </a>
          </ListItem>)}
      </List>
    </Demo>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '버튼 항목',
  render: () => <Demo>
      <List bordered>
        {['홍길동', '김철수'].map((name, index) => <ListItem key={name}>
            <button className="list_link" type="button" data-ripple="true">
              <Avatar color={index ? 'success' : 'primary'} initials={name[0]} ariaHidden />
              <span className="list_content">
                <span className="list_title">{name}</span>
                <span className="list_meta">멤버 선택</span>
              </span>
            </button>
          </ListItem>)}
      </List>
    </Demo>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '액션',
  render: () => <Demo>
      <List bordered>
        <ListItem title="디자인 시스템" description="마지막 수정 2시간 전" actions={<Button variant="text" size="sm" label="열기" />} />
        <ListItem title="컴포넌트 가이드" description="마지막 수정 어제" actions={<Button variant="text" size="sm" label="열기" />} />
      </List>
    </Demo>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '정의 목록',
  render: () => <Demo>
      <List variant="definition" style={{
      maxWidth: '34rem'
    }}>
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
      </List>
    </Demo>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '정의 목록 · 인라인',
  render: () => <Demo>
      <List variant="definition" layout="inline" inlineLabelWidth="8rem">
        <ListItem title="OOCSS" description="구조와 스킨 분리" />
        <ListItem title="Design Token" description="디자인 값 변수화" />
        <ListItem title="WCAG" description="웹 접근성 지침" />
      </List>
    </Demo>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '정의 목록 · 우측 정렬',
  render: () => <Demo>
      <List variant="definition" layout="inline" descAlign="right" block>
        <ListItem title="주문번호" description="ORD-2024-0815" />
        <ListItem title="결제금액" description="₩42,000" />
        <ListItem title="배송지" description="서울특별시 강남구" />
      </List>
    </Demo>
}`,...Y.parameters?.docs?.source}}},X=[`Playground`,`Basic`,`Bullet`,`BulletRich`,`BulletVariants`,`Ordered`,`OrderedVariants`,`Hierarchical`,`Bordered`,`Links`,`Buttons`,`Actions`,`Definition`,`DefinitionInline`,`DefinitionRight`]})))()}export{R as a,q as c,H as d,W as f,Z as g,V as h,L as i,J as l,B as m,I as n,z as o,C as p,U as r,G as s,K as t,Y as u};