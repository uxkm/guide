import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{E as n,_ as r,g as i,v as a}from"./iframe-DA3cKKGZ.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";function s({level:e=1,color:t,label:n,children:r,className:i=``,...a}){let o=Number(e),s=u.includes(o)?o:1,c=`h${s}`,d=[`typo_title-${s}`,t&&`color_${t}`,i].filter(Boolean).join(` `);return(0,l.jsx)(c,{className:d,"data-component":`TypoTitle`,...a,children:r??n})}function c({variant:e=`text`,tag:t,color:n,size:r=``,ellipsis:i,href:a,htmlFor:o,cite:s,label:c,children:u,className:f=``,onClick:p,...m}){let h=d[e]??d.text,g=t||h.tag,_=Number(i),v=_===1?`text_ellipsis`:_===2||_===3?`text_ellipsis-${_}`:``,y=[`xs`,`sm`,`lg`,`xl`].includes(r)?`size_${r}`:``,b=[h.className,n&&`color_${n}`,y,v,f].filter(Boolean).join(` `);function x(t){e===`link`&&!a&&t.preventDefault(),p?.(t)}return(0,l.jsx)(g,{className:b||void 0,cite:e===`blockquote`?s:void 0,"data-component":`TypoText`,href:e===`link`?a||`#`:void 0,htmlFor:e===`label`?o:void 0,onClick:e===`link`?x:p,...m,children:u??c})}var l,u,d;function f(){return(f=e((()=>{l=o(),u=[1,2,3,4,5],d={text:{tag:`p`,className:``},paragraph:{tag:`p`,className:`typo_paragraph`},lead:{tag:`p`,className:`typo_lead`},caption:{tag:`p`,className:`typo_caption`},label:{tag:`label`,className:`typo_label`},overline:{tag:`p`,className:`typo_overline`},code:{tag:`code`,className:`typo_code`},kbd:{tag:`kbd`,className:`typo_kbd`},pre:{tag:`pre`,className:`typo_pre`},strong:{tag:`strong`,className:`typo_strong`},italic:{tag:`em`,className:`typo_italic`},underline:{tag:`span`,className:`typo_underline`},delete:{tag:`del`,className:`typo_delete`},mark:{tag:`mark`,className:`typo_mark`},sub:{tag:`sub`,className:`typo_sub`},sup:{tag:`sup`,className:`typo_sup`},small:{tag:`small`,className:`typo_small`},link:{tag:`a`,className:`typo_link`},blockquote:{tag:`blockquote`,className:`typo_blockquote`}},s.__docgenInfo={description:``,methods:[],displayName:`TypoTitle`,props:{level:{defaultValue:{value:`1`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}},c.__docgenInfo={description:``,methods:[],displayName:`TypoText`,props:{variant:{defaultValue:{value:`'text'`,computed:!1},required:!1},size:{defaultValue:{value:`''`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var p=t({Body:()=>w,Colors:()=>T,Ellipsis:()=>k,InlineStyles:()=>D,KeyboardCode:()=>I,Links:()=>M,Lists:()=>j,NestedLists:()=>L,Playground:()=>S,Quote:()=>A,Sizes:()=>E,Stack:()=>R,SubSupSmall:()=>O,SupportingText:()=>N,TitleColors:()=>P,Titles:()=>C,__namedExportsOrder:()=>z,default:()=>b});function m(e){return{level:typeof e.level==`number`?e.level:1,color:typeof e.color==`string`&&e.color?e.color:void 0,label:typeof e.label==`string`?e.label:void 0}}function h(e){let t=typeof e.href==`string`&&e.href?e.href:void 0,n=typeof e.cite==`string`&&e.cite?e.cite:void 0,r=typeof e.htmlFor==`string`&&e.htmlFor?e.htmlFor:void 0,i=typeof e.ellipsis==`number`&&e.ellipsis>0?e.ellipsis:void 0;return{variant:e.variant,color:typeof e.color==`string`&&e.color?e.color:void 0,size:e.size===`xs`||e.size===`sm`||e.size===`lg`||e.size===`xl`?e.size:``,label:typeof e.label==`string`?e.label:void 0,...i?{ellipsis:i}:{},...t?{href:t}:{},...n?{cite:n}:{},...r?{htmlFor:r}:{}}}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{f(),a(),g=o(),_=s,v=c,y=[`text`,`paragraph`,`lead`,`caption`,`label`,`overline`,`code`,`kbd`,`pre`,`strong`,`italic`,`underline`,`delete`,`mark`,`sub`,`sup`,`small`,`link`,`blockquote`],b={title:`기본 요소/Typography`,component:_,parameters:{layout:`fullscreen`,controls:{include:[`kind`,`level`,`label`,`color`,`variant`,`size`,`ellipsis`,`href`,`cite`,`htmlFor`]},docs:{extractArgTypes:()=>({})}},args:{kind:`title`,level:1,label:`Controls로 속성을 조절해 보세요.`,color:``,variant:`text`,size:``,ellipsis:0,href:`#`,cite:``,htmlFor:``},argTypes:{...r(`onClick`),...i,kind:{control:`select`,options:[`title`,`text`],labels:{title:`TypoTitle`,text:`TypoText`},type:`string`,description:`Playground 대상 컴포넌트`},level:{control:`select`,options:[1,2,3,4,5],type:`number`,description:`TypoTitle 제목 단계`,if:{arg:`kind`,eq:`title`}},label:{...n,description:`children 없을 때 표시 텍스트`},color:{control:`select`,options:[``,`default`,`muted`,`success`,`warning`,`danger`,`primary`],labels:{"":`없음`},type:`string`,description:`색상`},variant:{control:`select`,options:[...y],type:`string`,description:`TypoText 변형`,if:{arg:`kind`,eq:`text`}},size:{control:`select`,options:[``,`xs`,`sm`,`lg`,`xl`],labels:{"":`기본`},type:`string`,description:`TypoText 크기`,if:{arg:`kind`,eq:`text`}},ellipsis:{control:`select`,options:[0,1,2,3],type:`number`,description:`말줄임 줄 수 (0 = 없음)`,if:{arg:`kind`,eq:`text`}},href:{...n,description:`link 변형 주소`,if:{arg:`kind`,eq:`text`}},cite:{...n,description:`blockquote 인용 출처`,if:{arg:`kind`,eq:`text`}},htmlFor:{...n,description:`label 변형 for 연결`,if:{arg:`kind`,eq:`text`}}}},x=({children:e})=>(0,g.jsx)(`div`,{className:`btn-demo`,children:e}),S={name:`Playground`,render:e=>(0,g.jsx)(x,{children:e.kind===`text`?(0,g.jsx)(v,{...h(e)}):(0,g.jsx)(_,{...m(e)})})},C={name:`제목`,render:()=>(0,g.jsx)(x,{children:(0,g.jsx)(`div`,{className:`typo_stack-lg`,children:[1,2,3,4,5].map(e=>(0,g.jsxs)(_,{level:e,children:[`h`,e,`. 제목 레벨 `,e]},e))})})},w={name:`본문`,render:()=>(0,g.jsxs)(x,{children:[(0,g.jsxs)(`p`,{children:[`기본 본문 텍스트입니다. 인라인으로`,` `,(0,g.jsx)(v,{tag:`span`,color:`muted`,children:`보조 설명`}),`을 함께 쓸 수 있습니다.`]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(v,{variant:`paragraph`,children:`typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.`}),(0,g.jsx)(v,{variant:`paragraph`,children:`두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.`})]})]})},T={name:`색상 타입`,render:()=>(0,g.jsx)(x,{children:[[`default`,`기본 텍스트 (Default)`],[`muted`,`보조 텍스트 (Muted)`],[`success`,`성공 메시지 (Success)`],[`warning`,`주의 메시지 (Warning)`],[`danger`,`오류 메시지 (Danger)`],[`primary`,`강조 텍스트 (Primary)`]].map(([e,t])=>(0,g.jsx)(v,{color:e,children:t},e))})},E={name:`크기`,render:()=>(0,g.jsx)(x,{children:[[`xs`,`Extra Small — 0.75rem`],[`sm`,`Small — 0.8125rem`],[``,`Base — 0.875rem (기본)`],[`lg`,`Large — 1rem`],[`xl`,`Extra Large — 1.125rem`]].map(([e,t])=>(0,g.jsx)(v,{size:e,children:t},e||`base`))})},D={name:`텍스트 스타일`,render:()=>(0,g.jsxs)(x,{children:[(0,g.jsxs)(`p`,{children:[(0,g.jsx)(v,{variant:`strong`,children:`굵은 텍스트`}),`와 `,(0,g.jsx)(v,{variant:`italic`,children:`기울임 텍스트`}),`,`,` `,(0,g.jsx)(v,{variant:`underline`,children:`밑줄 텍스트`}),`, `,(0,g.jsx)(v,{variant:`delete`,children:`취소선 텍스트`}),`를 함께 사용할 수 있습니다.`]}),(0,g.jsxs)(`p`,{children:[(0,g.jsx)(v,{variant:`mark`,children:`형광펜 강조`}),`와 `,(0,g.jsx)(v,{variant:`code`,children:`inline code`}),` 표현도 지원합니다.`]}),(0,g.jsxs)(`p`,{className:`color_muted`,children:[`조합 예시: `,(0,g.jsx)(v,{variant:`strong`,color:`danger`,children:`중요 경고`}),`,`,` `,(0,g.jsx)(v,{variant:`italic`,color:`primary`,children:`강조 설명`})]})]})},O={name:`아래첨자 · 위첨자 · 소문자`,render:()=>(0,g.jsxs)(x,{children:[(0,g.jsxs)(`p`,{children:[`화학식 H`,(0,g.jsx)(v,{variant:`sub`,children:`2`}),`O, 수식 x`,(0,g.jsx)(v,{variant:`sup`,children:`2`}),` + y`,(0,g.jsx)(v,{variant:`sup`,children:`2`}),` = z`,(0,g.jsx)(v,{variant:`sup`,children:`2`}),`처럼 표현합니다.`]}),(0,g.jsxs)(`p`,{children:[`각주`,(0,g.jsx)(v,{variant:`sup`,children:`1`}),`나 제곱미터 m`,(0,g.jsx)(v,{variant:`sup`,children:`2`}),` 단위에도 활용합니다.`]}),(0,g.jsx)(`p`,{children:(0,g.jsx)(v,{variant:`small`,children:`※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.`})})]})},k={name:`말줄임`,render:()=>(0,g.jsx)(x,{children:(0,g.jsxs)(`div`,{style:{maxWidth:320,width:`100%`},children:[(0,g.jsx)(v,{ellipsis:1,children:`1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.`}),(0,g.jsx)(v,{ellipsis:2,children:`2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다.`}),(0,g.jsx)(v,{ellipsis:3,children:`3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다.`})]})})},A={name:`인용`,render:()=>(0,g.jsx)(x,{children:(0,g.jsx)(v,{variant:`blockquote`,color:`muted`,cite:`https://example.com`,children:`좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.`})})},j={name:`목록`,render:()=>(0,g.jsxs)(x,{children:[(0,g.jsxs)(`ul`,{className:`typo_list`,children:[(0,g.jsx)(`li`,{children:`디자인 토큰 정의`}),(0,g.jsx)(`li`,{children:`컴포넌트 문서화`}),(0,g.jsx)(`li`,{children:`접근성 검토`})]}),(0,g.jsxs)(`ol`,{className:`typo_list-ordered`,children:[(0,g.jsx)(`li`,{children:`요구사항 분석`}),(0,g.jsx)(`li`,{children:`와이어프레임 작성`}),(0,g.jsx)(`li`,{children:`프로토타입 검증`})]})]})},M={name:`링크`,render:()=>(0,g.jsx)(x,{children:(0,g.jsxs)(v,{variant:`paragraph`,children:[`자세한 내용은`,` `,(0,g.jsx)(v,{variant:`link`,href:`#`,children:`가이드 문서`}),`를 참고하세요. `,(0,g.jsx)(v,{tag:`span`,color:`muted`,children:`또는`}),` `,(0,g.jsx)(v,{variant:`link`,href:`#`,size:`sm`,children:`작은 링크`}),`로 이동할 수 있습니다.`]})})},N={name:`리드 · 캡션 · 레이블`,render:()=>(0,g.jsx)(x,{children:(0,g.jsxs)(`div`,{style:{maxWidth:`32rem`,width:`100%`},children:[(0,g.jsxs)(`div`,{className:`typo_stack-lg`,children:[(0,g.jsx)(v,{variant:`overline`,children:`가이드 소개`}),(0,g.jsx)(_,{level:3,children:`UXKM Components`}),(0,g.jsx)(v,{variant:`lead`,children:`UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.`}),(0,g.jsx)(v,{variant:`caption`,children:`마지막 업데이트: 2026-08-11`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(v,{variant:`label`,htmlFor:`typography-email`,children:`이메일`}),(0,g.jsx)(`input`,{className:`input`,id:`typography-email`,placeholder:`name@example.com`,type:`email`}),(0,g.jsx)(v,{variant:`caption`,style:{marginTop:`0.25rem`},children:`가입 시 사용한 이메일 주소를 입력하세요.`})]})]})})},P={name:`제목 색상`,render:()=>(0,g.jsx)(x,{children:[`primary`,`success`,`danger`,`muted`].map(e=>(0,g.jsxs)(_,{level:3,color:e,children:[e[0].toUpperCase()+e.slice(1),` 제목`]},e))})},F=`<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>`,I={name:`키보드 · 코드 블록`,render:()=>(0,g.jsxs)(x,{children:[(0,g.jsxs)(`p`,{children:[`저장하려면 `,(0,g.jsx)(v,{variant:`kbd`,children:`⌘`}),` + `,(0,g.jsx)(v,{variant:`kbd`,children:`S`}),`를 누르세요. 검색은`,` `,(0,g.jsx)(v,{variant:`kbd`,children:`Ctrl`}),` + `,(0,g.jsx)(v,{variant:`kbd`,children:`K`}),`입니다.`]}),(0,g.jsx)(v,{variant:`pre`,children:(0,g.jsx)(`code`,{children:F})})]})},L={name:`중첩 목록`,render:()=>(0,g.jsx)(x,{children:(0,g.jsxs)(`ul`,{className:`typo_list`,children:[(0,g.jsxs)(`li`,{children:[`레이아웃`,(0,g.jsxs)(`ul`,{className:`typo_list`,children:[(0,g.jsx)(`li`,{children:`Container`}),(0,g.jsx)(`li`,{children:`Grid`})]})]}),(0,g.jsxs)(`li`,{children:[`기본 요소`,(0,g.jsxs)(`ul`,{className:`typo_list`,children:[(0,g.jsx)(`li`,{children:`Button`}),(0,g.jsx)(`li`,{children:`Typography`})]})]})]})})},R={name:`제목 + 본문 조합`,render:()=>(0,g.jsxs)(x,{children:[(0,g.jsxs)(`div`,{className:`typo_stack-lg`,style:{maxWidth:`28rem`},children:[(0,g.jsx)(_,{level:3,children:`섹션 제목`}),(0,g.jsx)(v,{variant:`paragraph`,children:`typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다.`}),(0,g.jsx)(v,{color:`muted`,size:`sm`,children:`마지막 업데이트: 2026-08-11`})]}),(0,g.jsxs)(`div`,{className:`typo_stack`,style:{maxWidth:`28rem`},children:[(0,g.jsx)(_,{level:4,children:`작은 스택`}),(0,g.jsx)(v,{color:`muted`,children:`typo_stack은 좁은 간격으로 제목·설명을 묶습니다.`})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      {args.kind === 'text' ? <Text {...textPropsFromArgs(args)} /> : <Title {...titlePropsFromArgs(args)} />}
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '제목',
  render: () => <Demo>
      <div className="typo_stack-lg">
        {([1, 2, 3, 4, 5] as const).map(level => <Title key={level} level={level}>
            h{level}. 제목 레벨 {level}
          </Title>)}
      </div>
    </Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '본문',
  render: () => <Demo>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <Text tag="span" color="muted">
          보조 설명
        </Text>
        을 함께 쓸 수 있습니다.
      </p>
      <div>
        <Text variant="paragraph">
          typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.
        </Text>
        <Text variant="paragraph">두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.</Text>
      </div>
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '색상 타입',
  render: () => <Demo>
      {([['default', '기본 텍스트 (Default)'], ['muted', '보조 텍스트 (Muted)'], ['success', '성공 메시지 (Success)'], ['warning', '주의 메시지 (Warning)'], ['danger', '오류 메시지 (Danger)'], ['primary', '강조 텍스트 (Primary)']] as const).map(([color, label]) => <Text key={color} color={color}>
          {label}
        </Text>)}
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>
      {([['xs', 'Extra Small — 0.75rem'], ['sm', 'Small — 0.8125rem'], ['', 'Base — 0.875rem (기본)'], ['lg', 'Large — 1rem'], ['xl', 'Extra Large — 1.125rem']] as const).map(([size, label]) => <Text key={size || 'base'} size={size}>
          {label}
        </Text>)}
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '텍스트 스타일',
  render: () => <Demo>
      <p>
        <Text variant="strong">굵은 텍스트</Text>와 <Text variant="italic">기울임 텍스트</Text>,{' '}
        <Text variant="underline">밑줄 텍스트</Text>, <Text variant="delete">취소선 텍스트</Text>를 함께
        사용할 수 있습니다.
      </p>
      <p>
        <Text variant="mark">형광펜 강조</Text>와 <Text variant="code">inline code</Text> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <Text variant="strong" color="danger">중요 경고</Text>,{' '}
        <Text variant="italic" color="primary">강조 설명</Text>
      </p>
    </Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '아래첨자 · 위첨자 · 소문자',
  render: () => <Demo>
      <p>
        화학식 H
        <Text variant="sub">2</Text>O, 수식 x
        <Text variant="sup">2</Text> + y
        <Text variant="sup">2</Text> = z
        <Text variant="sup">2</Text>
        처럼 표현합니다.
      </p>
      <p>
        각주
        <Text variant="sup">1</Text>나 제곱미터 m
        <Text variant="sup">2</Text> 단위에도 활용합니다.
      </p>
      <p>
        <Text variant="small">※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.</Text>
      </p>
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '말줄임',
  render: () => <Demo>
      <div style={{
      maxWidth: 320,
      width: '100%'
    }}>
        <Text ellipsis={1}>
          1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.
        </Text>
        <Text ellipsis={2}>
          2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와
          데모를 제공합니다.
        </Text>
        <Text ellipsis={3}>
          3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데
          중요한 역할을 합니다.
        </Text>
      </div>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '인용',
  render: () => <Demo>
      <Text variant="blockquote" color="muted" cite="https://example.com">
        좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.
      </Text>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '목록',
  render: () => <Demo>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '링크',
  render: () => <Demo>
      <Text variant="paragraph">
        자세한 내용은{' '}
        <Text variant="link" href="#">
          가이드 문서
        </Text>
        를 참고하세요. <Text tag="span" color="muted">또는</Text>{' '}
        <Text variant="link" href="#" size="sm">
          작은 링크
        </Text>
        로 이동할 수 있습니다.
      </Text>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '리드 · 캡션 · 레이블',
  render: () => <Demo>
      <div style={{
      maxWidth: '32rem',
      width: '100%'
    }}>
        <div className="typo_stack-lg">
          <Text variant="overline">가이드 소개</Text>
          <Title level={3}>UXKM Components</Title>
          <Text variant="lead">UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.</Text>
          <Text variant="caption">마지막 업데이트: 2026-08-11</Text>
        </div>
        <div>
          <Text variant="label" htmlFor="typography-email">
            이메일
          </Text>
          <input className="input" id="typography-email" placeholder="name@example.com" type="email" />
          <Text variant="caption" style={{
          marginTop: '0.25rem'
        }}>
            가입 시 사용한 이메일 주소를 입력하세요.
          </Text>
        </div>
      </div>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '제목 색상',
  render: () => <Demo>
      {(['primary', 'success', 'danger', 'muted'] as const).map(color => <Title key={color} level={3} color={color}>
          {color[0].toUpperCase() + color.slice(1)} 제목
        </Title>)}
    </Demo>
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '키보드 · 코드 블록',
  render: () => <Demo>
      <p>
        저장하려면 <Text variant="kbd">⌘</Text> + <Text variant="kbd">S</Text>를 누르세요. 검색은{' '}
        <Text variant="kbd">Ctrl</Text> + <Text variant="kbd">K</Text>입니다.
      </p>
      <Text variant="pre">
        <code>{markup}</code>
      </Text>
    </Demo>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '중첩 목록',
  render: () => <Demo>
      <ul className="typo_list">
        <li>
          레이아웃
          <ul className="typo_list">
            <li>Container</li>
            <li>Grid</li>
          </ul>
        </li>
        <li>
          기본 요소
          <ul className="typo_list">
            <li>Button</li>
            <li>Typography</li>
          </ul>
        </li>
      </ul>
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '제목 + 본문 조합',
  render: () => <Demo>
      <div className="typo_stack-lg" style={{
      maxWidth: '28rem'
    }}>
        <Title level={3}>섹션 제목</Title>
        <Text variant="paragraph">
          typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다.
        </Text>
        <Text color="muted" size="sm">
          마지막 업데이트: 2026-08-11
        </Text>
      </div>
      <div className="typo_stack" style={{
      maxWidth: '28rem'
    }}>
        <Title level={4}>작은 스택</Title>
        <Text color="muted">typo_stack은 좁은 간격으로 제목·설명을 묶습니다.</Text>
      </div>
    </Demo>
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`Titles`,`Body`,`Colors`,`Sizes`,`InlineStyles`,`SubSupSmall`,`Ellipsis`,`Quote`,`Lists`,`Links`,`SupportingText`,`TitleColors`,`KeyboardCode`,`NestedLists`,`Stack`]})))()}export{B as _,I as a,L as c,R as d,O as f,p as g,C as h,D as i,A as l,P as m,T as n,M as o,N as p,k as r,j as s,w as t,E as u};