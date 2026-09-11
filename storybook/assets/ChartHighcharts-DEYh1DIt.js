import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i,n as a}from"./blocks-DKrjMPN_.js";import{n as o,t as s}from"./FrameworkTabs-duseEU1T.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./ChartHighcharts.stories-Dvj5KNG-.js";import{i as _,r as v}from"./react-CQ14Jk9E.js";import{a as y,i as b,o as x,s as S}from"./chartHighchartsD3FrameworkExamples-4kfxe7sK.js";function C(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,..._(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{of:m}),`
`,(0,T.jsx)(t.h1,{id:`charthighcharts`,children:`ChartHighcharts`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.strong,{children:`라이선스: 유료 (상용 시)`}),` — `,(0,T.jsx)(t.a,{href:`https://www.highcharts.com/`,rel:`nofollow`,children:`Highcharts`}),`는 비상업·개인·교육 등 일부 조건에서는 무료일 수 있으나, `,(0,T.jsx)(t.strong,{children:`상용 제품·서비스에는 Highcharts 상용 라이선스 구매가 필요`}),`합니다. 도입 전 `,(0,T.jsx)(t.a,{href:`https://shop.highcharts.com/`,rel:`nofollow`,children:`라이선스·가격`}),`을 확인하세요.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Highcharts를 사용하는 차트 컴포넌트입니다. `,(0,T.jsx)(t.code,{children:`Chart`}),` · `,(0,T.jsx)(t.code,{children:`ChartJs`}),` · `,(0,T.jsx)(t.code,{children:`ChartEcharts`}),`와 같은 데이터 형태를 지원합니다.`]}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[`React: `,(0,T.jsx)(t.code,{children:`@uxkm/react/chart-highcharts`})]}),`
`,(0,T.jsxs)(t.li,{children:[`Vue: `,(0,T.jsx)(t.code,{children:`@uxkm/vue/chart-highcharts`})]}),`
`,(0,T.jsxs)(t.li,{children:[`HTML: `,(0,T.jsx)(t.code,{children:`data-chart-highcharts-options`}),` + `,(0,T.jsx)(t.code,{children:`initChartHighcharts()`})]}),`
`,(0,T.jsxs)(t.li,{children:[`Gulp: `,(0,T.jsx)(t.code,{children:`chartHighcharts`}),` 매크로`]}),`
`]}),`
`,(0,T.jsxs)(t.p,{children:[`유형: `,(0,T.jsx)(t.code,{children:`bar`}),` · `,(0,T.jsx)(t.code,{children:`line`}),` · `,(0,T.jsx)(t.code,{children:`area`}),` · `,(0,T.jsx)(t.code,{children:`donut`}),` · `,(0,T.jsx)(t.code,{children:`pie`}),`. `,(0,T.jsx)(t.code,{children:`chartOptions`}),`로 Highcharts 옵션을 병합합니다.`]}),`
`,(0,T.jsxs)(t.p,{children:[`무료 대안이 필요하면 `,(0,T.jsx)(t.code,{children:`Chart`}),`(자체 SVG), `,(0,T.jsx)(t.code,{children:`ChartJs`}),`, `,(0,T.jsx)(t.code,{children:`ChartEcharts`}),`, `,(0,T.jsx)(t.code,{children:`ChartD3`}),`를 사용하세요. 전체 비교와 선택 가이드는 `,(0,T.jsx)(t.a,{href:`?path=/docs/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%91%9C%EC%8B%9C-chart--docs#%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4--%EB%AC%B4%EB%A3%8C--%EC%9C%A0%EB%A3%8C`,children:`Chart`}),` 문서를 참고하세요.
WebSquare 탭은 차트 계열에서 제공하지 않습니다. HTML·Gulp·Vue·React(및 Next/Nuxt 재사용)로 사용하세요.`]}),`
`,(0,T.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,T.jsx)(s,{examples:b,showFullCode:!0}),`
`,(0,T.jsx)(s,{examples:x,showFullCode:!0}),`
`,(0,T.jsx)(t.h2,{id:`막대--선--영역`,children:`막대 · 선 · 영역`}),`
`,(0,T.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.Bar}),`
`,(0,T.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.Line}),`
`,(0,T.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.Area}),`
`,(0,T.jsx)(t.h2,{id:`도넛--파이`,children:`도넛 · 파이`}),`
`,(0,T.jsxs)(t.p,{children:[`도넛·파이는 0 이상의 값만 지원하며 합계가 0이면 빈 상태를 표시합니다. 항목별 `,(0,T.jsx)(t.code,{children:`color`}),`를 지정할 수 있습니다.`]}),`
`,(0,T.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.Donut}),`
`,(0,T.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.Pie}),`
`,(0,T.jsx)(t.h2,{id:`색상-커스텀`,children:`색상 커스텀`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`Chart`}),` · `,(0,T.jsx)(t.code,{children:`ChartJs`}),` · `,(0,T.jsx)(t.code,{children:`ChartEcharts`}),`와 동일한 CSS 변수(`,(0,T.jsx)(t.code,{children:`--chart-color`}),`, `,(0,T.jsx)(t.code,{children:`--chart-series-*`}),`)를 사용합니다. 렌더 시점에 CSS 변수를 계산된 색상으로 해석합니다.`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-css`,children:`:root {
  --chart-color: #2563eb;
  --chart-series-1: #2563eb;
  --chart-series-2: #0d9488;
  --chart-series-3: #9333ea;
  --chart-series-4: #c2410c;
}
`})}),`
`,(0,T.jsx)(t.h2,{id:`highcharts-옵션-확장`,children:`Highcharts 옵션 확장`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`chartOptions`}),`로 Highcharts 차트 옵션을 깊게 병합할 수 있습니다.`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`<ChartHighcharts
  type="bar"
  data={data}
  chartOptions={{
    legend: { enabled: true, align: "right" },
    credits: { enabled: false },
  }}
/>
`})}),`
`,(0,T.jsx)(t.h2,{id:`빈-데이터`,children:`빈 데이터`}),`
`,(0,T.jsx)(r,{of:p,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.Empty}),`
`,(0,T.jsx)(r,{of:u,sourceState:`none`}),`
`,(0,T.jsx)(s,{examples:y.CustomEmpty}),`
`,(0,T.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,T.jsxs)(t.p,{children:[`차트 영역에 제목을 `,(0,T.jsx)(t.code,{children:`aria-label`}),`로 제공합니다. `,(0,T.jsx)(t.code,{children:`데이터 표 보기`}),`로 원본 수치를 표로 확인할 수 있으며, 해당 컨트롤에도 제목을 포함한 `,(0,T.jsx)(t.code,{children:`aria-label`}),`을 둡니다. 상용 도입 시 Highcharts 접근성 모듈·라이선스 조건을 함께 확인하세요.`]}),`
`,(0,T.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,T.jsx)(a,{of:m})]})}function w(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=t(),v(),n(),d(),o(),S()})))()}E();export{w as default};