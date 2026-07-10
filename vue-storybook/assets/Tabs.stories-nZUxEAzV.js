import{_ as a}from"./Tabs-4vz7FIcf.js";import{_ as u}from"./Badge-CcXPSX6F.js";import{_ as l}from"./Button-C3SXv-sJ.js";import{_ as t}from"./Icon-D97OEunV.js";import{_ as C}from"./TabMenu-g4YJegxm.js";import{_ as n}from"./TabPanel-Cd93Mhhn.js";import{c as Ba,a as Ta}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";const y=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Da=[{name:"mode",type:"'panels' | 'dynamic'",default:"panels",description:"panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환"},{name:"v-model / model-value",type:"string | number",default:"—",description:"mode=dynamic 선택 탭 key"},{name:"variant",type:"'line' | 'card' | 'pill'",default:"line",description:"tabs_line · tabs_card · tabs_pill"},{name:"indicator",type:"'static' | 'slide'",default:"static",description:"line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션"},{name:"layout",type:"'auto' | 'equal' | 'scroll'",default:"auto",description:"auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tabs_sm · tabs_lg"},{name:"vertical",type:"boolean",default:"false",description:"tabs_vertical"},{name:"scrollable",type:"boolean",default:"false",description:"layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)"},{name:"aria-label",type:"string",default:"—",description:"tablist aria-label"},{name:"items",type:"Array<{ key?, label, content?, active?, disabled? }>",default:"—",description:"선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용"},Ba],Pa=y,da=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],va=y,Aa=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"value",type:"string",default:"—",description:"mode=dynamic v-model key"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],E=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ya=[{name:"tabs",description:"탭 바 추가 콘텐츠"},{name:"extra",description:"탭 바 우측 영역 (tabs_extra)"},{name:"panel",description:"mode=dynamic 단일 패널 본문 ({ item, value, active })"},{name:"default",description:"TabPanel·TabMenu 나열 (items prop 대체)"}],Ea=E,ka=[{name:"default",description:"패널 본문 (tabs_panel)"},{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],ga=E,Fa=[{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],fa=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ia=[{name:"tabs · tabs_bar · tabs_list · tabs_tab",description:"루트·탭 바·목록·탭 버튼"},{name:"tabs_label · tabs_extra · tabs_panels · tabs_panel",description:"라벨·추가·패널 영역"},{name:"tabs_line · tabs_card · tabs_pill",description:"스타일 변형"},{name:"tabs_indicator-slide",description:'슬라이드 인디케이터 (indicator="slide")'},{name:"tabs_indicator",description:"이동하는 인디케이터 요소"},{name:"tabs_equal · tabs_scroll-nav · tabs_dynamic",description:"균등 분할·네비 스크롤·동적 패널"},{name:"tabs_list-wrap · tabs_scroll-viewport · tabs_nav",description:"목록 래퍼·스크롤 뷰포트·좌우 네비 버튼"},{name:"tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable",description:"크기·레이아웃"},{name:"is-active · is-disabled",description:"탭·패널 상태"},{name:"data-tabs",description:"키보드·포커스 JS"},{name:'role="tablist" · role="tab" · role="tabpanel"',description:"접근성"},...Ta],_a=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],wa=[{name:"--tabs-gap · --tabs-padding",default:"—",description:"탭 간격·패딩"},{name:"--tabs-nav-size",default:"—",description:"네비 스크롤 버튼 크기"},{name:"--tabs-indicator-height · --tabs-indicator-transition",default:"—",description:"line 변형 인디케이터·슬라이드 전환"},{name:"--tabs-panel-padding",default:"—",description:"패널 패딩"}],xa=[{title:"API · Tabs Props",tables:[{columns:y,rows:Da,codeColumn:"name"}]},{title:"API · TabPanel Props",tables:[{columns:Pa,rows:da,codeColumn:"name"}]},{title:"API · TabMenu Props",tables:[{columns:va,rows:Aa,codeColumn:"name"}]},{title:"API · Tabs Slots",tables:[{columns:E,rows:ya,codeColumn:"name"}]},{title:"API · TabPanel Slots",tables:[{columns:Ea,rows:ka,codeColumn:"name"}]},{title:"API · TabMenu Slots",tables:[{columns:ga,rows:Fa,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:fa,rows:Ia,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:_a,rows:wa,codeColumn:"name"}]}],Ja={title:"Components/네비게이션/Tabs",id:"components-tabs",component:a,tags:["autodocs"],argTypes:{mode:{control:"select",options:["panels","dynamic"],type:{name:"enum",summary:"'panels' | 'dynamic'"}},variant:{control:"select",options:["line","card","pill"],type:{name:"enum",summary:"'line' | 'card' | 'pill'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},layout:{control:"select",options:["auto","equal","scroll"],type:{name:"enum",summary:"'auto' | 'equal' | 'scroll'"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},indicator:{control:"select",options:["static","slide"],type:{name:"enum",summary:"'static' | 'slide'"}}},parameters:{layout:"fullscreen",apiSections:xa}},b={args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:e=>({components:{Tabs:a,TabPanel:n},setup(){return{args:e}},template:`<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>`})},s={name:"기본 (라인)",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tabs_line이 기본 스킨입니다. role=&quot;tablist&quot; · role=&quot;tab&quot; · role=&quot;tabpanel&quot;과 aria-selected, aria-controls로 접근성을 보장합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="프로젝트 정보">
    <TabPanel label="개요" active>
      <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
    </TabPanel>
    <TabPanel label="팀">
      <p>팀 구성원과 역할을 표시합니다.</p>
    </TabPanel>
    <TabPanel label="활동">
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs aria-label="프로젝트 정보">
      <TabPanel label="개요" active>
        <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
      </TabPanel>
      <TabPanel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
    </Tabs>`})},o={name:"동적 패널",parameters:{demoPreview:{stack:!0},docs:{description:{story:"mode=&quot;dynamic&quot;은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다."},source:{code:`<script setup>
import TabMenu from '@uxkm/ui/components/TabMenu.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
const dynamicItems = [
  { key: 'overview', label: '개요', active: true },
  { key: 'team', label: '팀' },
  { key: 'activity', label: '활동' },
];
<\/script>

<template>
  <Tabs
  mode="dynamic"
  :items="dynamicItems"
  aria-label="동적 탭 (items)"
  >
  <template #panel="{ item }">
    <p v-if="item?.key === 'overview'">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
    <p v-else-if="item?.key === 'team'">팀 구성원과 역할을 표시합니다.</p>
    <p v-else-if="item?.key === 'activity'">최근 활동 로그와 타임라인을 보여줍니다.</p>
  </template>
  </Tabs>
  <Tabs mode="dynamic" aria-label="동적 탭 (TabMenu)">
    <TabMenu label="개요" value="overview" active />
    <TabMenu label="팀" value="team" />
    <TabMenu label="활동" value="activity" />
    <template #panel="{ value }">
      <p v-if="value === 'overview'">TabMenu로 선언한 동적 패널 — 개요</p>
      <p v-else-if="value === 'team'">TabMenu로 선언한 동적 패널 — 팀</p>
      <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>
    </template>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs
      mode="dynamic"
      :items="dynamicItems"
      aria-label="동적 탭 (items)"
    >
      <template #panel="{ item }">
        <p v-if="item?.key === 'overview'">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
        <p v-else-if="item?.key === 'team'">팀 구성원과 역할을 표시합니다.</p>
        <p v-else-if="item?.key === 'activity'">최근 활동 로그와 타임라인을 보여줍니다.</p>
      </template>
    </Tabs>

    <Tabs mode="dynamic" aria-label="동적 탭 (TabMenu)">
      <TabMenu label="개요" value="overview" active />
      <TabMenu label="팀" value="team" />
      <TabMenu label="활동" value="activity" />
      <template #panel="{ value }">
        <p v-if="value === 'overview'">TabMenu로 선언한 동적 패널 — 개요</p>
        <p v-else-if="value === 'team'">TabMenu로 선언한 동적 패널 — 팀</p>
        <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>
      </template>
    </Tabs>`})},r={name:"슬라이드 인디케이터",parameters:{demoPreview:{stack:!0},docs:{description:{story:"indicator=&quot;slide&quot;로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs indicator="slide" aria-label="슬라이드 라인 탭">
    <TabPanel label="개요" active>
      <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
    </TabPanel>
    <TabPanel label="팀">
      <p>팀 구성원과 역할을 표시합니다.</p>
    </TabPanel>
    <TabPanel label="활동">
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </TabPanel>
  </Tabs>
  <Tabs variant="pill" indicator="slide" aria-label="슬라이드 필 탭">
    <TabPanel label="목록" active>
      <p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
    </TabPanel>
    <TabPanel label="그리드">
      <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
    </TabPanel>
    <TabPanel label="보드">
      <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs indicator="slide" aria-label="슬라이드 라인 탭">
      <TabPanel label="개요" active>
        <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
      </TabPanel>
      <TabPanel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
    </Tabs>

    <Tabs variant="pill" indicator="slide" aria-label="슬라이드 필 탭">
      <TabPanel label="목록" active>
        <p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>`})},i={name:"균등 분할",parameters:{demoPreview:{stack:!0},docs:{description:{story:"layout=&quot;equal&quot;로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs layout="equal" aria-label="균등 분할 탭">
    <TabPanel label="개요" active>
      <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
    </TabPanel>
    <TabPanel label="팀 구성">
      <p>팀 구성원과 역할을 표시합니다.</p>
    </TabPanel>
    <TabPanel label="활동 로그">
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </TabPanel>
    <TabPanel label="설정">
      <p>프로젝트 설정을 관리합니다.</p>
    </TabPanel>
  </Tabs>
  <Tabs layout="equal" variant="pill" indicator="slide" aria-label="균등 분할 필 탭">
    <TabPanel label="일간" active>일간 통계</TabPanel>
    <TabPanel label="주간">주간 통계</TabPanel>
    <TabPanel label="월간">월간 통계</TabPanel>
    <TabPanel label="연간">연간 통계</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs layout="equal" aria-label="균등 분할 탭">
      <TabPanel label="개요" active>
        <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
      </TabPanel>
      <TabPanel label="팀 구성">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동 로그">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
      <TabPanel label="설정">
        <p>프로젝트 설정을 관리합니다.</p>
      </TabPanel>
    </Tabs>

    <Tabs layout="equal" variant="pill" indicator="slide" aria-label="균등 분할 필 탭">
      <TabPanel label="일간" active>일간 통계</TabPanel>
      <TabPanel label="주간">주간 통계</TabPanel>
      <TabPanel label="월간">월간 통계</TabPanel>
      <TabPanel label="연간">연간 통계</TabPanel>
    </Tabs>`})},m={name:"네비 스크롤",parameters:{demoPreview:{stack:!1},docs:{description:{story:"layout=&quot;scroll&quot;은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
    <TabPanel label="홈" active>홈 패널</TabPanel>
    <TabPanel label="제품 소개">제품 패널</TabPanel>
    <TabPanel label="솔루션">솔루션 패널</TabPanel>
    <TabPanel label="가격 정책">가격 패널</TabPanel>
    <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
    <TabPanel label="리소스 센터">리소스 패널</TabPanel>
    <TabPanel label="기술 지원">지원 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품 소개">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격 정책">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스 센터">리소스 패널</TabPanel>
      <TabPanel label="기술 지원">지원 패널</TabPanel>
    </Tabs>`})},c={name:"카드",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs variant="card" aria-label="계정 설정">
    <TabPanel label="프로필" active>
      <p>이름, 아바타, 소개 문구를 수정합니다.</p>
    </TabPanel>
    <TabPanel label="보안">
      <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
    </TabPanel>
    <TabPanel label="알림">
      <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs variant="card" aria-label="계정 설정">
      <TabPanel label="프로필" active>
        <p>이름, 아바타, 소개 문구를 수정합니다.</p>
      </TabPanel>
      <TabPanel label="보안">
        <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
      </TabPanel>
      <TabPanel label="알림">
        <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
      </TabPanel>
    </Tabs>`})},p={name:"필",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs variant="pill" aria-label="보기 모드">
    <TabPanel label="목록" active>
      <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
    </TabPanel>
    <TabPanel label="그리드">
      <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
    </TabPanel>
    <TabPanel label="보드">
      <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs variant="pill" aria-label="보기 모드">
      <TabPanel label="목록" active>
        <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>`})},B={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs size="sm" aria-label="Small 탭">
    <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
    <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
  </Tabs>
  <Tabs size="lg" aria-label="Large 탭">
    <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
    <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs size="sm" aria-label="Small 탭">
      <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
      <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
    </Tabs>

    <Tabs size="lg" aria-label="Large 탭">
      <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
      <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
    </Tabs>`})},T={name:"아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tabs_icon으로 탭 앞에 아이콘을 배치합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="대시보드 섹션">
    <TabPanel label="대시보드" active>
      <template #icon>
        <Icon name="grid" />
      </template>
      대시보드 요약 패널
    </TabPanel>
    <TabPanel label="사용자">
      <template #icon>
        <Icon name="user" />
      </template>
      사용자 목록 패널
    </TabPanel>
    <TabPanel label="문서">
      <template #icon>
        <Icon name="book" />
      </template>
      문서 목록 패널
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs aria-label="대시보드 섹션">
      <TabPanel label="대시보드" active>
        <template #icon><Icon name="grid" /></template>
        대시보드 요약 패널
      </TabPanel>
      <TabPanel label="사용자">
        <template #icon><Icon name="user" /></template>
        사용자 목록 패널
      </TabPanel>
      <TabPanel label="문서">
        <template #icon><Icon name="book" /></template>
        문서 목록 패널
      </TabPanel>
    </Tabs>`})},D={name:"배지",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="알림 센터">
    <TabPanel label="전체" active>전체 알림 목록</TabPanel>
    <TabPanel label="읽지 않음">
      <template #badge>
        <Badge class="tabs_badge" count size="sm" color="danger" aria-label="읽지 않은 알림 12건">12</Badge>
      </template>
      읽지 않은 알림 12건
    </TabPanel>
    <TabPanel label="멘션">
      <template #badge>
        <Badge class="tabs_badge" count size="sm" color="primary">3</Badge>
      </template>
      멘션 알림 3건
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs aria-label="알림 센터">
      <TabPanel label="전체" active>전체 알림 목록</TabPanel>
      <TabPanel label="읽지 않음">
        <template #badge>
          <Badge class="tabs_badge" count size="sm" color="danger" aria-label="읽지 않은 알림 12건">12</Badge>
        </template>
        읽지 않은 알림 12건
      </TabPanel>
      <TabPanel label="멘션">
        <template #badge>
          <Badge class="tabs_badge" count size="sm" color="primary">3</Badge>
        </template>
        멘션 알림 3건
      </TabPanel>
    </Tabs>`})},P={name:"추가 액션",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="파일 관리">
    <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
    <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
    <TabPanel label="최근">최근 파일 목록</TabPanel>
    <template #extra>
      <Button variant="filled" color="primary" size="sm" label="업로드" />
    </template>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs aria-label="파일 관리">
      <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
      <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
      <TabPanel label="최근">최근 파일 목록</TabPanel>
      <template #extra>
        <Button variant="filled" color="primary" size="sm" label="업로드" />
      </template>
    </Tabs>`})},d={name:"스크롤바",parameters:{demoPreview:{stack:!1},docs:{description:{story:"scrollable과 layout=&quot;auto&quot;를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout=&quot;scroll&quot;을 사용하세요."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
    <TabPanel label="홈" active>홈 패널</TabPanel>
    <TabPanel label="제품">제품 패널</TabPanel>
    <TabPanel label="솔루션">솔루션 패널</TabPanel>
    <TabPanel label="가격">가격 패널</TabPanel>
    <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
    <TabPanel label="리소스">리소스 패널</TabPanel>
    <TabPanel label="지원">지원 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스">리소스 패널</TabPanel>
      <TabPanel label="지원">지원 패널</TabPanel>
    </Tabs>`})},v={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="권한별 탭">
    <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
    <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
    <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs aria-label="권한별 탭">
      <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
    </Tabs>`})},A={name:"수직",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs vertical aria-label="수직 라인 탭">
    <TabPanel label="일반" active>
      <p>일반 설정 패널입니다.</p>
    </TabPanel>
    <TabPanel label="보안">
      <p>보안 설정 패널입니다.</p>
    </TabPanel>
    <TabPanel label="결제">
      <p>결제 설정 패널입니다.</p>
    </TabPanel>
  </Tabs>
  <Tabs vertical variant="card" aria-label="수직 카드 탭">
    <TabPanel label="문서" active>문서 관리 패널</TabPanel>
    <TabPanel label="미디어">미디어 관리 패널</TabPanel>
    <TabPanel label="아카이브">아카이브 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{Tabs:a,Badge:u,Button:l,Icon:t,TabMenu:C,TabPanel:n},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`<Tabs vertical aria-label="수직 라인 탭">
      <TabPanel label="일반" active>
        <p>일반 설정 패널입니다.</p>
      </TabPanel>
      <TabPanel label="보안">
        <p>보안 설정 패널입니다.</p>
      </TabPanel>
      <TabPanel label="결제">
        <p>결제 설정 패널입니다.</p>
      </TabPanel>
    </Tabs>

    <Tabs vertical variant="card" aria-label="수직 카드 탭">
      <TabPanel label="문서" active>문서 관리 패널</TabPanel>
      <TabPanel label="미디어">미디어 관리 패널</TabPanel>
      <TabPanel label="아카이브">아카이브 패널</TabPanel>
    </Tabs>`})};var k,g,F;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: args => ({
    components: {
      Tabs,
      TabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>\`
  })
}`,...(F=(g=b.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var f,I,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "기본 (라인)",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_line이 기본 스킨입니다. role=&quot;tablist&quot; · role=&quot;tab&quot; · role=&quot;tabpanel&quot;과 aria-selected, aria-controls로 접근성을 보장합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"프로젝트 정보\\">\\n    <TabPanel label=\\"개요\\" active>\\n      <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"팀\\">\\n      <p>팀 구성원과 역할을 표시합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"활동\\">\\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs aria-label="프로젝트 정보">
      <TabPanel label="개요" active>
        <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
      </TabPanel>
      <TabPanel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
    </Tabs>\`
  })
}`,...(_=(I=s.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var w,x,M;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "동적 패널",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "mode=&quot;dynamic&quot;은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다."
      },
      source: {
        code: "<script setup>\\nimport TabMenu from '@uxkm/ui/components/TabMenu.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\nconst dynamicItems = [\\n  { key: 'overview', label: '개요', active: true },\\n  { key: 'team', label: '팀' },\\n  { key: 'activity', label: '활동' },\\n];\\n<\/script>\\n\\n<template>\\n  <Tabs\\n  mode=\\"dynamic\\"\\n  :items=\\"dynamicItems\\"\\n  aria-label=\\"동적 탭 (items)\\"\\n  >\\n  <template #panel=\\"{ item }\\">\\n    <p v-if=\\"item?.key === 'overview'\\">프로젝트 개요와 목표를 설명하는 영역입니다.</p>\\n    <p v-else-if=\\"item?.key === 'team'\\">팀 구성원과 역할을 표시합니다.</p>\\n    <p v-else-if=\\"item?.key === 'activity'\\">최근 활동 로그와 타임라인을 보여줍니다.</p>\\n  </template>\\n  </Tabs>\\n  <Tabs mode=\\"dynamic\\" aria-label=\\"동적 탭 (TabMenu)\\">\\n    <TabMenu label=\\"개요\\" value=\\"overview\\" active />\\n    <TabMenu label=\\"팀\\" value=\\"team\\" />\\n    <TabMenu label=\\"활동\\" value=\\"activity\\" />\\n    <template #panel=\\"{ value }\\">\\n      <p v-if=\\"value === 'overview'\\">TabMenu로 선언한 동적 패널 — 개요</p>\\n      <p v-else-if=\\"value === 'team'\\">TabMenu로 선언한 동적 패널 — 팀</p>\\n      <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>\\n    </template>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs
      mode="dynamic"
      :items="dynamicItems"
      aria-label="동적 탭 (items)"
    >
      <template #panel="{ item }">
        <p v-if="item?.key === 'overview'">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
        <p v-else-if="item?.key === 'team'">팀 구성원과 역할을 표시합니다.</p>
        <p v-else-if="item?.key === 'activity'">최근 활동 로그와 타임라인을 보여줍니다.</p>
      </template>
    </Tabs>

    <Tabs mode="dynamic" aria-label="동적 탭 (TabMenu)">
      <TabMenu label="개요" value="overview" active />
      <TabMenu label="팀" value="team" />
      <TabMenu label="활동" value="activity" />
      <template #panel="{ value }">
        <p v-if="value === 'overview'">TabMenu로 선언한 동적 패널 — 개요</p>
        <p v-else-if="value === 'team'">TabMenu로 선언한 동적 패널 — 팀</p>
        <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>
      </template>
    </Tabs>\`
  })
}`,...(M=(x=o.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var S,q,L;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "슬라이드 인디케이터",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "indicator=&quot;slide&quot;로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs indicator=\\"slide\\" aria-label=\\"슬라이드 라인 탭\\">\\n    <TabPanel label=\\"개요\\" active>\\n      <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"팀\\">\\n      <p>팀 구성원과 역할을 표시합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"활동\\">\\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n  <Tabs variant=\\"pill\\" indicator=\\"slide\\" aria-label=\\"슬라이드 필 탭\\">\\n    <TabPanel label=\\"목록\\" active>\\n      <p class=\\"tabs_panel-placeholder\\">필 스킨에서 배경 인디케이터가 이동합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"그리드\\">\\n      <p class=\\"tabs_panel-placeholder\\">그리드 뷰 콘텐츠</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보드\\">\\n      <p class=\\"tabs_panel-placeholder\\">보드 뷰 콘텐츠</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs indicator="slide" aria-label="슬라이드 라인 탭">
      <TabPanel label="개요" active>
        <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
      </TabPanel>
      <TabPanel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
    </Tabs>

    <Tabs variant="pill" indicator="slide" aria-label="슬라이드 필 탭">
      <TabPanel label="목록" active>
        <p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>\`
  })
}`,...(L=(q=r.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,h,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "균등 분할",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "layout=&quot;equal&quot;로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs layout=\\"equal\\" aria-label=\\"균등 분할 탭\\">\\n    <TabPanel label=\\"개요\\" active>\\n      <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"팀 구성\\">\\n      <p>팀 구성원과 역할을 표시합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"활동 로그\\">\\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"설정\\">\\n      <p>프로젝트 설정을 관리합니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n  <Tabs layout=\\"equal\\" variant=\\"pill\\" indicator=\\"slide\\" aria-label=\\"균등 분할 필 탭\\">\\n    <TabPanel label=\\"일간\\" active>일간 통계</TabPanel>\\n    <TabPanel label=\\"주간\\">주간 통계</TabPanel>\\n    <TabPanel label=\\"월간\\">월간 통계</TabPanel>\\n    <TabPanel label=\\"연간\\">연간 통계</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs layout="equal" aria-label="균등 분할 탭">
      <TabPanel label="개요" active>
        <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
      </TabPanel>
      <TabPanel label="팀 구성">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동 로그">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
      <TabPanel label="설정">
        <p>프로젝트 설정을 관리합니다.</p>
      </TabPanel>
    </Tabs>

    <Tabs layout="equal" variant="pill" indicator="slide" aria-label="균등 분할 필 탭">
      <TabPanel label="일간" active>일간 통계</TabPanel>
      <TabPanel label="주간">주간 통계</TabPanel>
      <TabPanel label="월간">월간 통계</TabPanel>
      <TabPanel label="연간">연간 통계</TabPanel>
    </Tabs>\`
  })
}`,...(V=(h=i.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var $,O,H;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "네비 스크롤",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "layout=&quot;scroll&quot;은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs layout=\\"scroll\\" class=\\"tabs_demo-narrow\\" aria-label=\\"네비 스크롤 탭\\">\\n    <TabPanel label=\\"홈\\" active>홈 패널</TabPanel>\\n    <TabPanel label=\\"제품 소개\\">제품 패널</TabPanel>\\n    <TabPanel label=\\"솔루션\\">솔루션 패널</TabPanel>\\n    <TabPanel label=\\"가격 정책\\">가격 패널</TabPanel>\\n    <TabPanel label=\\"고객 사례\\">고객 사례 패널</TabPanel>\\n    <TabPanel label=\\"리소스 센터\\">리소스 패널</TabPanel>\\n    <TabPanel label=\\"기술 지원\\">지원 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품 소개">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격 정책">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스 센터">리소스 패널</TabPanel>
      <TabPanel label="기술 지원">지원 패널</TabPanel>
    </Tabs>\`
  })
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var J,R,j;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "카드",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs variant=\\"card\\" aria-label=\\"계정 설정\\">\\n    <TabPanel label=\\"프로필\\" active>\\n      <p>이름, 아바타, 소개 문구를 수정합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보안\\">\\n      <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"알림\\">\\n      <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs variant="card" aria-label="계정 설정">
      <TabPanel label="프로필" active>
        <p>이름, 아바타, 소개 문구를 수정합니다.</p>
      </TabPanel>
      <TabPanel label="보안">
        <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
      </TabPanel>
      <TabPanel label="알림">
        <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
      </TabPanel>
    </Tabs>\`
  })
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var G,K,N;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "필",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs variant=\\"pill\\" aria-label=\\"보기 모드\\">\\n    <TabPanel label=\\"목록\\" active>\\n      <p class=\\"tabs_panel-placeholder\\">목록 뷰 콘텐츠</p>\\n    </TabPanel>\\n    <TabPanel label=\\"그리드\\">\\n      <p class=\\"tabs_panel-placeholder\\">그리드 뷰 콘텐츠</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보드\\">\\n      <p class=\\"tabs_panel-placeholder\\">보드 뷰 콘텐츠</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs variant="pill" aria-label="보기 모드">
      <TabPanel label="목록" active>
        <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>\`
  })
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,W;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs size=\\"sm\\" aria-label=\\"Small 탭\\">\\n    <TabPanel label=\\"Small A\\" active>Small 탭 패널</TabPanel>\\n    <TabPanel label=\\"Small B\\">Small 탭 패널 B</TabPanel>\\n  </Tabs>\\n  <Tabs size=\\"lg\\" aria-label=\\"Large 탭\\">\\n    <TabPanel label=\\"Large A\\" active>Large 탭 패널</TabPanel>\\n    <TabPanel label=\\"Large B\\">Large 탭 패널 B</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs size="sm" aria-label="Small 탭">
      <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
      <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
    </Tabs>

    <Tabs size="lg" aria-label="Large 탭">
      <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
      <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
    </Tabs>\`
  })
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_icon으로 탭 앞에 아이콘을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"대시보드 섹션\\">\\n    <TabPanel label=\\"대시보드\\" active>\\n      <template #icon>\\n        <Icon name=\\"grid\\" />\\n      </template>\\n      대시보드 요약 패널\\n    </TabPanel>\\n    <TabPanel label=\\"사용자\\">\\n      <template #icon>\\n        <Icon name=\\"user\\" />\\n      </template>\\n      사용자 목록 패널\\n    </TabPanel>\\n    <TabPanel label=\\"문서\\">\\n      <template #icon>\\n        <Icon name=\\"book\\" />\\n      </template>\\n      문서 목록 패널\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs aria-label="대시보드 섹션">
      <TabPanel label="대시보드" active>
        <template #icon><Icon name="grid" /></template>
        대시보드 요약 패널
      </TabPanel>
      <TabPanel label="사용자">
        <template #icon><Icon name="user" /></template>
        사용자 목록 패널
      </TabPanel>
      <TabPanel label="문서">
        <template #icon><Icon name="book" /></template>
        문서 목록 패널
      </TabPanel>
    </Tabs>\`
  })
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ea,na;D.parameters={...D.parameters,docs:{...(aa=D.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "배지",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"알림 센터\\">\\n    <TabPanel label=\\"전체\\" active>전체 알림 목록</TabPanel>\\n    <TabPanel label=\\"읽지 않음\\">\\n      <template #badge>\\n        <Badge class=\\"tabs_badge\\" count size=\\"sm\\" color=\\"danger\\" aria-label=\\"읽지 않은 알림 12건\\">12</Badge>\\n      </template>\\n      읽지 않은 알림 12건\\n    </TabPanel>\\n    <TabPanel label=\\"멘션\\">\\n      <template #badge>\\n        <Badge class=\\"tabs_badge\\" count size=\\"sm\\" color=\\"primary\\">3</Badge>\\n      </template>\\n      멘션 알림 3건\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs aria-label="알림 센터">
      <TabPanel label="전체" active>전체 알림 목록</TabPanel>
      <TabPanel label="읽지 않음">
        <template #badge>
          <Badge class="tabs_badge" count size="sm" color="danger" aria-label="읽지 않은 알림 12건">12</Badge>
        </template>
        읽지 않은 알림 12건
      </TabPanel>
      <TabPanel label="멘션">
        <template #badge>
          <Badge class="tabs_badge" count size="sm" color="primary">3</Badge>
        </template>
        멘션 알림 3건
      </TabPanel>
    </Tabs>\`
  })
}`,...(na=(ea=D.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var ua,la,ta;P.parameters={...P.parameters,docs:{...(ua=P.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  name: "추가 액션",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"파일 관리\\">\\n    <TabPanel label=\\"내 파일\\" active>내 파일 목록</TabPanel>\\n    <TabPanel label=\\"공유됨\\">공유된 파일 목록</TabPanel>\\n    <TabPanel label=\\"최근\\">최근 파일 목록</TabPanel>\\n    <template #extra>\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"업로드\\" />\\n    </template>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs aria-label="파일 관리">
      <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
      <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
      <TabPanel label="최근">최근 파일 목록</TabPanel>
      <template #extra>
        <Button variant="filled" color="primary" size="sm" label="업로드" />
      </template>
    </Tabs>\`
  })
}`,...(ta=(la=P.parameters)==null?void 0:la.docs)==null?void 0:ta.source}}};var Ca,ba,sa;d.parameters={...d.parameters,docs:{...(Ca=d.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  name: "스크롤바",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "scrollable과 layout=&quot;auto&quot;를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout=&quot;scroll&quot;을 사용하세요."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs scrollable class=\\"tabs_demo-narrow\\" aria-label=\\"긴 탭 목록\\">\\n    <TabPanel label=\\"홈\\" active>홈 패널</TabPanel>\\n    <TabPanel label=\\"제품\\">제품 패널</TabPanel>\\n    <TabPanel label=\\"솔루션\\">솔루션 패널</TabPanel>\\n    <TabPanel label=\\"가격\\">가격 패널</TabPanel>\\n    <TabPanel label=\\"고객 사례\\">고객 사례 패널</TabPanel>\\n    <TabPanel label=\\"리소스\\">리소스 패널</TabPanel>\\n    <TabPanel label=\\"지원\\">지원 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스">리소스 패널</TabPanel>
      <TabPanel label="지원">지원 패널</TabPanel>
    </Tabs>\`
  })
}`,...(sa=(ba=d.parameters)==null?void 0:ba.docs)==null?void 0:sa.source}}};var oa,ra,ia;v.parameters={...v.parameters,docs:{...(oa=v.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"권한별 탭\\">\\n    <TabPanel label=\\"공개\\" active>공개 콘텐츠</TabPanel>\\n    <TabPanel label=\\"팀\\">팀 전용 콘텐츠</TabPanel>\\n    <TabPanel label=\\"관리자\\" disabled>관리자 전용 콘텐츠</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs aria-label="권한별 탭">
      <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
    </Tabs>\`
  })
}`,...(ia=(ra=v.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ma,ca,pa;A.parameters={...A.parameters,docs:{...(ma=A.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: "수직",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs vertical aria-label=\\"수직 라인 탭\\">\\n    <TabPanel label=\\"일반\\" active>\\n      <p>일반 설정 패널입니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보안\\">\\n      <p>보안 설정 패널입니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"결제\\">\\n      <p>결제 설정 패널입니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n  <Tabs vertical variant=\\"card\\" aria-label=\\"수직 카드 탭\\">\\n    <TabPanel label=\\"문서\\" active>문서 관리 패널</TabPanel>\\n    <TabPanel label=\\"미디어\\">미디어 관리 패널</TabPanel>\\n    <TabPanel label=\\"아카이브\\">아카이브 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tabs,
      Badge,
      Button,
      Icon,
      TabMenu,
      TabPanel
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`<Tabs vertical aria-label="수직 라인 탭">
      <TabPanel label="일반" active>
        <p>일반 설정 패널입니다.</p>
      </TabPanel>
      <TabPanel label="보안">
        <p>보안 설정 패널입니다.</p>
      </TabPanel>
      <TabPanel label="결제">
        <p>결제 설정 패널입니다.</p>
      </TabPanel>
    </Tabs>

    <Tabs vertical variant="card" aria-label="수직 카드 탭">
      <TabPanel label="문서" active>문서 관리 패널</TabPanel>
      <TabPanel label="미디어">미디어 관리 패널</TabPanel>
      <TabPanel label="아카이브">아카이브 패널</TabPanel>
    </Tabs>\`
  })
}`,...(pa=(ca=A.parameters)==null?void 0:ca.docs)==null?void 0:pa.source}}};const Ra=["Playground","Basic","Dynamic","IndicatorSlide","LayoutEqual","LayoutScroll","Card","Pill","Size","IconDemo","BadgeDemo","Extra","Scroll","Disabled","Vertical"];export{D as BadgeDemo,s as Basic,c as Card,v as Disabled,o as Dynamic,P as Extra,T as IconDemo,r as IndicatorSlide,i as LayoutEqual,m as LayoutScroll,p as Pill,b as Playground,d as Scroll,B as Size,A as Vertical,Ra as __namedExportsOrder,Ja as default};
