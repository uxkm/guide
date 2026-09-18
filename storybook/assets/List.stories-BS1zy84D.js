import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{I as n,_ as r,g as i,o as a,v as o}from"./iframe-DA3cKKGZ.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-Bdofg9ij.js";import{r as u,t as d}from"./Icon-CS3T14bP.js";import{r as f,t as p}from"./Avatar-lxVLg1X4.js";function m({children:e,bordered:t=!1,split:n=!1,block:r=!1,size:i=`md`,variant:a=`default`,tag:o,layout:s=`block`,inlineLabelWidth:c,inlineGap:l,descAlign:u=`left`,className:d=``,style:f,role:p,...m}){let h=b.includes(a)?a:`default`,g=x.includes(o)?o:v[h],C=[`list`,y[h],t&&`list_bordered`,n&&`list_divider`,r&&`list_block`,i===`compact`&&`list_compact`,s===`inline`&&`list_inline`,h===`definition`&&u===`right`&&`list_desc-right`,d].filter(Boolean).join(` `),w={...f};return s===`inline`&&c&&(w[`--list-inline-label-width`]=c),s===`inline`&&l&&(w[`--list-inline-gap`]=l),(0,_.jsx)(S.Provider,{value:{tag:g,variant:h},children:(0,_.jsx)(g,{...m,className:C,"data-component":`List`,role:p??(g===`div`?`list`:void 0),style:w,children:e})})}function h({title:e,description:t,meta:n,tag:r=`auto`,prefix:i,extra:a,actions:o,children:s,className:c=``,role:l,...u}){let d=(0,g.useContext)(S);if(r===`auto`&&d.tag===`dl`&&e&&t)return(0,_.jsxs)(g.Fragment,{children:[(0,_.jsx)(`dt`,{...u,className:[`list_title`,c].filter(Boolean).join(` `),children:e}),(0,_.jsx)(`dd`,{className:`list_desc`,children:t})]});let f=r!==`auto`&&[`li`,`dt`,`dd`].includes(r)?r:`li`;r===`auto`&&d.tag===`dl`&&(f=e?`dt`:`dd`),r===`auto`&&d.tag===`div`&&(f=`div`);let p=!!(e||t||n||s);return(0,_.jsxs)(f,{...u,className:[`list_item`,c].filter(Boolean).join(` `),"data-component":`ListItem`,role:l??(d.tag===`div`?`listitem`:void 0),children:[i,p?(0,_.jsx)(`div`,{className:`list_content`,children:s??(0,_.jsxs)(_.Fragment,{children:[e?(0,_.jsx)(`span`,{className:`list_title`,children:e}):null,n?(0,_.jsx)(`span`,{className:`list_meta`,children:n}):null,t?(0,_.jsx)(`span`,{className:`list_desc`,children:t}):null]})}):null,a?(0,_.jsx)(`span`,{className:`list_extra`,children:a}):null,o?(0,_.jsx)(`span`,{className:`list_action`,children:o}):null]})}var g,_,v,y,b,x,S;function C(){return(C=e((()=>{g=n(),_=s(),v={default:`ul`,bullet:`ul`,ordered:`ol`,definition:`dl`},y={bullet:`list_bullet`,ordered:`list_ordered`,definition:`list_definition`},b=Object.keys(v),x=[`ul`,`ol`,`dl`,`div`],S=(0,g.createContext)({tag:`ul`,variant:`default`}),m.__docgenInfo={description:``,methods:[],displayName:`List`,props:{bordered:{defaultValue:{value:`false`,computed:!1},required:!1},split:{defaultValue:{value:`false`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},layout:{defaultValue:{value:`'block'`,computed:!1},required:!1},descAlign:{defaultValue:{value:`'left'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}},h.__docgenInfo={description:``,methods:[],displayName:`ListItem`,props:{tag:{defaultValue:{value:`'auto'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var w=t({Actions:()=>q,Basic:()=>L,Bordered:()=>W,Bullet:()=>R,BulletRich:()=>z,BulletVariants:()=>B,Buttons:()=>K,Definition:()=>J,DefinitionInline:()=>Y,DefinitionRight:()=>X,Hierarchical:()=>U,Links:()=>G,Ordered:()=>V,OrderedVariants:()=>H,Playground:()=>I,__namedExportsOrder:()=>Z,default:()=>P});function T(e){return typeof e==`number`&&e>0?`${e}rem`:void 0}function E(e){let t=typeof e.tag==`string`&&e.tag?e.tag:void 0,n=T(e.inlineLabelWidth),r=T(e.inlineGap);return{variant:e.variant,bordered:e.bordered===!0,split:e.split===!0,block:e.block===!0,size:e.size===`compact`?`compact`:`md`,layout:e.layout===`inline`?`inline`:`block`,...n?{inlineLabelWidth:n}:{},...r?{inlineGap:r}:{},descAlign:e.descAlign===`right`?`right`:`left`,...t?{tag:t}:{}}}function D({args:e}){let t=E(e),n=t.variant;return n===`definition`?(0,O.jsx)(F,{children:(0,O.jsxs)(k,{...t,style:{maxWidth:`34rem`},children:[(0,O.jsx)(A,{title:`OOCSS`,description:`구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.`}),(0,O.jsx)(A,{title:`Design Token`,description:`색상·간격·타이포 값을 변수로 정의한 것입니다.`}),(0,O.jsx)(A,{title:`WCAG`,description:`웹 콘텐츠 접근성 지침입니다.`})]})}):n===`bullet`||n===`ordered`?(0,O.jsx)(F,{children:(0,O.jsxs)(k,{...t,children:[(0,O.jsx)(A,{children:`디자인 토큰 정의`}),(0,O.jsx)(A,{children:`컴포넌트 문서화`}),(0,O.jsx)(A,{children:`접근성 검토`})]})}):(0,O.jsx)(F,{children:(0,O.jsxs)(k,{...t,children:[(0,O.jsx)(A,{title:`홍길동`,meta:`프론트엔드 개발자`,prefix:(0,O.jsx)(j,{color:`primary`,initials:`홍`,ariaHidden:!0})}),(0,O.jsx)(A,{title:`김철수`,meta:`백엔드 개발자`,prefix:(0,O.jsx)(j,{color:`success`,initials:`김`,ariaHidden:!0})}),(0,O.jsx)(A,{title:`이영희`,meta:`UI/UX 디자이너`,prefix:(0,O.jsx)(j,{color:`warning`,initials:`이`,ariaHidden:!0})})]})})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{f(),C(),c(),u(),o(),O=s(),k=m,A=h,j=p,M=l,N=d,P={title:`데이터 표시/List`,component:k,parameters:{layout:`fullscreen`,controls:{include:[`variant`,`bordered`,`split`,`block`,`size`,`layout`,`inlineLabelWidth`,`inlineGap`,`descAlign`,`tag`]},docs:{extractArgTypes:()=>({})}},args:{variant:`default`,bordered:!0,split:!1,block:!1,size:`md`,layout:`block`,inlineLabelWidth:0,inlineGap:0,descAlign:`left`,tag:``},argTypes:{...r(`role`),...i,variant:{control:`select`,options:[`default`,`bullet`,`ordered`,`definition`],type:`string`,description:`목록 종류`},bordered:{...a,description:`테두리 목록`},split:{...a,description:`항목 사이 구분선`},block:{...a,description:`블록형 목록`},size:{control:`select`,options:[`md`,`compact`],type:`string`,description:`목록 크기`},layout:{control:`select`,options:[`block`,`inline`],type:`string`,description:`정의 목록 레이아웃`},inlineLabelWidth:{control:{type:`number`,min:0,max:24,step:.5},type:`number`,description:`inline 라벨 너비 (rem). 0이면 기본값(8rem)`},inlineGap:{control:{type:`number`,min:0,max:8,step:.25},type:`number`,description:`inline 간격 (rem). 0이면 기본값(--space-md)`},descAlign:{control:`select`,options:[`left`,`right`],type:`string`,description:`정의 목록 설명 정렬`},tag:{control:`select`,options:[``,`ul`,`ol`,`dl`,`div`],labels:{"":`자동`},type:`string`,description:`명시적 루트 태그`}}},F=({children:e})=>(0,O.jsx)(`div`,{className:`btn-demo`,children:e}),I={name:`Playground`,render:e=>(0,O.jsx)(D,{args:e})},L={name:`기본`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{children:[(0,O.jsx)(A,{title:`홍길동`,meta:`프론트엔드 개발자`,prefix:(0,O.jsx)(j,{color:`primary`,initials:`홍`,ariaHidden:!0})}),(0,O.jsx)(A,{title:`김철수`,meta:`백엔드 개발자`,prefix:(0,O.jsx)(j,{color:`success`,initials:`김`,ariaHidden:!0})}),(0,O.jsx)(A,{title:`이영희`,meta:`UI/UX 디자이너`,prefix:(0,O.jsx)(j,{color:`warning`,initials:`이`,ariaHidden:!0})})]})})},R={name:`불릿`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`bullet`,children:[(0,O.jsx)(A,{children:`디자인 토큰 정의`}),(0,O.jsx)(A,{children:`컴포넌트 문서화`}),(0,O.jsx)(A,{children:`접근성 검토`})]})})},z={name:`불릿 · 설명`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`bullet`,children:[(0,O.jsx)(A,{title:`HTML 마크업`,description:`시맨틱 태그와 ARIA 속성을 사용합니다.`}),(0,O.jsx)(A,{title:`SCSS 스타일`,description:`OOCSS 패턴으로 구조와 스킨을 분리합니다.`}),(0,O.jsx)(A,{title:`접근성`,description:`WCAG 2.2 AA 기준을 준수합니다.`})]})})},B={name:`불릿 변형`,render:()=>(0,O.jsxs)(F,{children:[(0,O.jsxs)(k,{variant:`bullet`,className:`list_bullet-circle`,children:[(0,O.jsx)(A,{children:`원형 마커 항목 A`}),(0,O.jsx)(A,{children:`원형 마커 항목 B`})]}),(0,O.jsxs)(k,{variant:`bullet`,className:`list_bullet-square`,children:[(0,O.jsx)(A,{children:`사각 마커 항목 A`}),(0,O.jsx)(A,{children:`사각 마커 항목 B`})]})]})},V={name:`번호`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`ordered`,children:[(0,O.jsx)(A,{children:`요구사항 분석`}),(0,O.jsx)(A,{children:`와이어프레임 작성`}),(0,O.jsx)(A,{children:`프로토타입 검증`}),(0,O.jsx)(A,{children:`개발 및 배포`})]})})},H={name:`번호 변형`,render:()=>(0,O.jsxs)(F,{children:[(0,O.jsxs)(k,{variant:`ordered`,className:`list_ordered-alpha`,children:[(0,O.jsx)(A,{children:`첫 번째 옵션`}),(0,O.jsx)(A,{children:`두 번째 옵션`})]}),(0,O.jsxs)(k,{variant:`ordered`,className:`list_ordered-roman`,children:[(0,O.jsx)(A,{children:`서론`}),(0,O.jsx)(A,{children:`본론`}),(0,O.jsx)(A,{children:`결론`})]})]})},U={name:`계층 번호`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`ordered`,className:`list_ordered-outline`,children:[(0,O.jsx)(A,{children:`요구사항 정의`}),(0,O.jsxs)(A,{children:[`설계`,(0,O.jsxs)(k,{variant:`ordered`,className:`list_ordered-outline`,children:[(0,O.jsx)(A,{children:`정보 구조`}),(0,O.jsx)(A,{children:`UI 설계`})]})]}),(0,O.jsx)(A,{children:`개발 및 배포`})]})})},W={name:`테두리`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{bordered:!0,children:[(0,O.jsx)(A,{title:`알림 설정`,description:`이메일 및 푸시 알림을 관리합니다.`}),(0,O.jsx)(A,{title:`프로필 편집`,description:`이름, 사진, 소개를 변경합니다.`}),(0,O.jsx)(A,{title:`보안`,description:`비밀번호 및 2단계 인증을 설정합니다.`})]})})},G={name:`링크`,render:()=>(0,O.jsx)(F,{children:(0,O.jsx)(k,{split:!0,children:[`홈`,`프로젝트`,`설정`].map(e=>(0,O.jsx)(A,{children:(0,O.jsxs)(`a`,{className:`list_link`,href:`#`,"data-ripple":`true`,children:[(0,O.jsx)(`span`,{className:`list_title`,children:e}),(0,O.jsx)(N,{className:`list_action`,name:`chevron`})]})},e))})})},K={name:`버튼 항목`,render:()=>(0,O.jsx)(F,{children:(0,O.jsx)(k,{bordered:!0,children:[`홍길동`,`김철수`].map((e,t)=>(0,O.jsx)(A,{children:(0,O.jsxs)(`button`,{className:`list_link`,type:`button`,"data-ripple":`true`,children:[(0,O.jsx)(j,{color:t?`success`:`primary`,initials:e[0],ariaHidden:!0}),(0,O.jsxs)(`span`,{className:`list_content`,children:[(0,O.jsx)(`span`,{className:`list_title`,children:e}),(0,O.jsx)(`span`,{className:`list_meta`,children:`멤버 선택`})]})]})},e))})})},q={name:`액션`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{bordered:!0,children:[(0,O.jsx)(A,{title:`디자인 시스템`,description:`마지막 수정 2시간 전`,actions:(0,O.jsx)(M,{variant:`text`,size:`sm`,label:`열기`})}),(0,O.jsx)(A,{title:`컴포넌트 가이드`,description:`마지막 수정 어제`,actions:(0,O.jsx)(M,{variant:`text`,size:`sm`,label:`열기`})})]})})},J={name:`정의 목록`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`definition`,style:{maxWidth:`34rem`},children:[(0,O.jsx)(A,{title:`OOCSS`,description:`구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.`}),(0,O.jsx)(A,{title:`Design Token`,description:`색상·간격·타이포 값을 변수로 정의한 것입니다.`}),(0,O.jsx)(A,{title:`WCAG`,description:`웹 콘텐츠 접근성 지침입니다.`})]})})},Y={name:`정의 목록 · 인라인`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`definition`,layout:`inline`,inlineLabelWidth:`8rem`,children:[(0,O.jsx)(A,{title:`OOCSS`,description:`구조와 스킨 분리`}),(0,O.jsx)(A,{title:`Design Token`,description:`디자인 값 변수화`}),(0,O.jsx)(A,{title:`WCAG`,description:`웹 접근성 지침`})]})})},X={name:`정의 목록 · 우측 정렬`,render:()=>(0,O.jsx)(F,{children:(0,O.jsxs)(k,{variant:`definition`,layout:`inline`,descAlign:`right`,block:!0,children:[(0,O.jsx)(A,{title:`주문번호`,description:`ORD-2024-0815`}),(0,O.jsx)(A,{title:`결제금액`,description:`₩42,000`}),(0,O.jsx)(A,{title:`배송지`,description:`서울특별시 강남구`})]})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <ListPlayground args={args} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>
      <List>
        <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
        <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
        <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
      </List>
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '불릿',
  render: () => <Demo>
      <List variant="bullet">
        <ListItem>디자인 토큰 정의</ListItem>
        <ListItem>컴포넌트 문서화</ListItem>
        <ListItem>접근성 검토</ListItem>
      </List>
    </Demo>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '불릿 · 설명',
  render: () => <Demo>
      <List variant="bullet">
        <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
        <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
        <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
      </List>
    </Demo>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '번호',
  render: () => <Demo>
      <List variant="ordered">
        <ListItem>요구사항 분석</ListItem>
        <ListItem>와이어프레임 작성</ListItem>
        <ListItem>프로토타입 검증</ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
    </Demo>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '테두리',
  render: () => <Demo>
      <List bordered>
        <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
        <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
        <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
      </List>
    </Demo>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '액션',
  render: () => <Demo>
      <List bordered>
        <ListItem title="디자인 시스템" description="마지막 수정 2시간 전" actions={<Button variant="text" size="sm" label="열기" />} />
        <ListItem title="컴포넌트 가이드" description="마지막 수정 어제" actions={<Button variant="text" size="sm" label="열기" />} />
      </List>
    </Demo>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '정의 목록 · 인라인',
  render: () => <Demo>
      <List variant="definition" layout="inline" inlineLabelWidth="8rem">
        <ListItem title="OOCSS" description="구조와 스킨 분리" />
        <ListItem title="Design Token" description="디자인 값 변수화" />
        <ListItem title="WCAG" description="웹 접근성 지침" />
      </List>
    </Demo>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '정의 목록 · 우측 정렬',
  render: () => <Demo>
      <List variant="definition" layout="inline" descAlign="right" block>
        <ListItem title="주문번호" description="ORD-2024-0815" />
        <ListItem title="결제금액" description="₩42,000" />
        <ListItem title="배송지" description="서울특별시 강남구" />
      </List>
    </Demo>
}`,...X.parameters?.docs?.source}}},Z=[`Playground`,`Basic`,`Bullet`,`BulletRich`,`BulletVariants`,`Ordered`,`OrderedVariants`,`Hierarchical`,`Bordered`,`Links`,`Buttons`,`Actions`,`Definition`,`DefinitionInline`,`DefinitionRight`]})))()}export{z as a,J as c,U as d,G as f,Q as g,H as h,R as i,Y as l,V as m,L as n,B as o,w as p,W as r,K as s,q as t,X as u};