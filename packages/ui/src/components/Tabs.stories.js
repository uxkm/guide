import Tabs from './Tabs.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Badge from './Badge.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import TabMenu from './TabMenu.vue';
import TabPanel from './TabPanel.vue';
import TabsTab from './TabsTab.vue';
import {
  tabMenuPropColumns,
  tabMenuProps,
  tabMenuSlotColumns,
  tabMenuSlots,
  tabPanelPropColumns,
  tabPanelProps,
  tabPanelSlotColumns,
  tabPanelSlots,
  tabsClassColumns,
  tabsClasses,
  tabsPropColumns,
  tabsProps,
  tabsSlotColumns,
  tabsSlots,
  tabsTokenColumns,
  tabsTokens,
} from '@doc-data/tabs-api';
const apiSections = [
  {
    title: "API · Tabs Props",
    tables: [
      { columns: tabsPropColumns, rows: tabsProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · TabPanel Props",
    tables: [
      { columns: tabPanelPropColumns, rows: tabPanelProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · TabMenu Props",
    tables: [
      { columns: tabMenuPropColumns, rows: tabMenuProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Tabs Slots",
    tables: [
      { columns: tabsSlotColumns, rows: tabsSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · TabPanel Slots",
    tables: [
      { columns: tabPanelSlotColumns, rows: tabPanelSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · TabMenu Slots",
    tables: [
      { columns: tabMenuSlotColumns, rows: tabMenuSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: tabsClassColumns, rows: tabsClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: tabsTokenColumns, rows: tabsTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/네비게이션/Tabs',
  id: 'components-tabs',
  component: Tabs,
  subcomponents: { TabsTab, TabPanel, TabMenu },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ["panels","dynamic"], type: { name: 'enum', summary: "'panels' | 'dynamic'" }},
    variant: { control: 'select', options: ["line","card","pill"], type: { name: 'enum', summary: "'line' | 'card' | 'pill'" }},
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    layout: { control: 'select', options: ["auto","equal","scroll"], type: { name: 'enum', summary: "'auto' | 'equal' | 'scroll'" }},
    vertical: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    scrollable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    ariaLabel: { control: 'text', type: { name: 'string', summary: "string" }},
    indicator: { control: 'select', options: ["static","slide"], type: { name: 'enum', summary: "'static' | 'slide'" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'fullscreen',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
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
    indicator: "static",
  },
  render: (_args, context) => ({
    components: { Tabs, TabPanel },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>`,
  }),
};


export const Basic = {
  name: "기본 (라인)",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tabs_line이 기본 스킨입니다. role=&quot;tablist&quot; · role=&quot;tab&quot; · role=&quot;tabpanel&quot;과 aria-selected, aria-controls로 접근성을 보장합니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs aria-label=\"프로젝트 정보\">\n    <TabPanel label=\"개요\" active>\n      <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>\n    </TabPanel>\n    <TabPanel label=\"팀\">\n      <p>팀 구성원과 역할을 표시합니다.</p>\n    </TabPanel>\n    <TabPanel label=\"활동\">\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\n    </TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  mode: "panels",
  modelValue: "",
  variant: "line",
  size: "md",
  layout: "auto",
  ariaLabel: "접근성 라벨",
  items: [],
  indicator: "static"
},
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs aria-label="프로젝트 정보">
        <TabPanel label="개요" active>
          <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>`,
  })),
};


export const Dynamic = {
  name: "동적 패널",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "mode=&quot;dynamic&quot;은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다.",
      },
      source: {
        code: "<script setup>\nimport TabMenu from '@uxkm/ui/components/TabMenu.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\nconst dynamicItems = [\n  { key: 'overview', label: '개요', active: true },\n  { key: 'team', label: '팀' },\n  { key: 'activity', label: '활동' },\n];\n</script>\n\n<template>\n  <Tabs\n  mode=\"dynamic\"\n  :items=\"dynamicItems\"\n  aria-label=\"동적 탭 (items)\"\n  >\n  <template #panel=\"{ item }\">\n    <p v-if=\"item?.key === 'overview'\">프로젝트 개요와 목표를 설명하는 영역입니다.</p>\n    <p v-else-if=\"item?.key === 'team'\">팀 구성원과 역할을 표시합니다.</p>\n    <p v-else-if=\"item?.key === 'activity'\">최근 활동 로그와 타임라인을 보여줍니다.</p>\n  </template>\n  </Tabs>\n  <Tabs mode=\"dynamic\" aria-label=\"동적 탭 (TabMenu)\">\n    <TabMenu label=\"개요\" value=\"overview\" active />\n    <TabMenu label=\"팀\" value=\"team\" />\n    <TabMenu label=\"활동\" value=\"activity\" />\n    <template #panel=\"{ value }\">\n      <p v-if=\"value === 'overview'\">TabMenu로 선언한 동적 패널 — 개요</p>\n      <p v-else-if=\"value === 'team'\">TabMenu로 선언한 동적 패널 — 팀</p>\n      <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>\n    </template>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabMenu, Tabs },
    setup() {
      const dynamicItems = [
        { key: 'overview', label: '개요', active: true },
        { key: 'team', label: '팀' },
        { key: 'activity', label: '활동' },
      ];
      return { dynamicItems };
    },
    template: `        <Tabs
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
        </Tabs>`,
  })),
};


export const IndicatorSlide = {
  name: "슬라이드 인디케이터",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "indicator=&quot;slide&quot;로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs indicator=\"slide\" aria-label=\"슬라이드 라인 탭\">\n    <TabPanel label=\"개요\" active>\n      <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>\n    </TabPanel>\n    <TabPanel label=\"팀\">\n      <p>팀 구성원과 역할을 표시합니다.</p>\n    </TabPanel>\n    <TabPanel label=\"활동\">\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\n    </TabPanel>\n  </Tabs>\n  <Tabs variant=\"pill\" indicator=\"slide\" aria-label=\"슬라이드 필 탭\">\n    <TabPanel label=\"목록\" active>\n      <p class=\"tabs_panel-placeholder\">필 스킨에서 배경 인디케이터가 이동합니다.</p>\n    </TabPanel>\n    <TabPanel label=\"그리드\">\n      <p class=\"tabs_panel-placeholder\">그리드 뷰 콘텐츠</p>\n    </TabPanel>\n    <TabPanel label=\"보드\">\n      <p class=\"tabs_panel-placeholder\">보드 뷰 콘텐츠</p>\n    </TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs indicator="slide" aria-label="슬라이드 라인 탭">
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
      </Tabs>`,
  })),
};


export const LayoutEqual = {
  name: "균등 분할",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "layout=&quot;equal&quot;로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs layout=\"equal\" aria-label=\"균등 분할 탭\">\n    <TabPanel label=\"개요\" active>\n      <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>\n    </TabPanel>\n    <TabPanel label=\"팀 구성\">\n      <p>팀 구성원과 역할을 표시합니다.</p>\n    </TabPanel>\n    <TabPanel label=\"활동 로그\">\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\n    </TabPanel>\n    <TabPanel label=\"설정\">\n      <p>프로젝트 설정을 관리합니다.</p>\n    </TabPanel>\n  </Tabs>\n  <Tabs layout=\"equal\" variant=\"pill\" indicator=\"slide\" aria-label=\"균등 분할 필 탭\">\n    <TabPanel label=\"일간\" active>일간 통계</TabPanel>\n    <TabPanel label=\"주간\">주간 통계</TabPanel>\n    <TabPanel label=\"월간\">월간 통계</TabPanel>\n    <TabPanel label=\"연간\">연간 통계</TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs layout="equal" aria-label="균등 분할 탭">
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
      </Tabs>`,
  })),
};


export const LayoutScroll = {
  name: "네비 스크롤",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "layout=&quot;scroll&quot;은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs layout=\"scroll\" class=\"tabs_demo-narrow\" aria-label=\"네비 스크롤 탭\">\n    <TabPanel label=\"홈\" active>홈 패널</TabPanel>\n    <TabPanel label=\"제품 소개\">제품 패널</TabPanel>\n    <TabPanel label=\"솔루션\">솔루션 패널</TabPanel>\n    <TabPanel label=\"가격 정책\">가격 패널</TabPanel>\n    <TabPanel label=\"고객 사례\">고객 사례 패널</TabPanel>\n    <TabPanel label=\"리소스 센터\">리소스 패널</TabPanel>\n    <TabPanel label=\"기술 지원\">지원 패널</TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품 소개">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격 정책">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스 센터">리소스 패널</TabPanel>
        <TabPanel label="기술 지원">지원 패널</TabPanel>
      </Tabs>`,
  })),
};


export const Card = {
  name: "카드",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs variant=\"card\" aria-label=\"계정 설정\">\n    <TabPanel label=\"프로필\" active>\n      <p>이름, 아바타, 소개 문구를 수정합니다.</p>\n    </TabPanel>\n    <TabPanel label=\"보안\">\n      <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>\n    </TabPanel>\n    <TabPanel label=\"알림\">\n      <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>\n    </TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs variant="card" aria-label="계정 설정">
        <TabPanel label="프로필" active>
          <p>이름, 아바타, 소개 문구를 수정합니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
        </TabPanel>
        <TabPanel label="알림">
          <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
        </TabPanel>
      </Tabs>`,
  })),
};


export const Pill = {
  name: "필",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs variant=\"pill\" aria-label=\"보기 모드\">\n    <TabPanel label=\"목록\" active>\n      <p class=\"tabs_panel-placeholder\">목록 뷰 콘텐츠</p>\n    </TabPanel>\n    <TabPanel label=\"그리드\">\n      <p class=\"tabs_panel-placeholder\">그리드 뷰 콘텐츠</p>\n    </TabPanel>\n    <TabPanel label=\"보드\">\n      <p class=\"tabs_panel-placeholder\">보드 뷰 콘텐츠</p>\n    </TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs variant="pill" aria-label="보기 모드">
        <TabPanel label="목록" active>
          <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>`,
  })),
};


export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs size=\"sm\" aria-label=\"Small 탭\">\n    <TabPanel label=\"Small A\" active>Small 탭 패널</TabPanel>\n    <TabPanel label=\"Small B\">Small 탭 패널 B</TabPanel>\n  </Tabs>\n  <Tabs size=\"lg\" aria-label=\"Large 탭\">\n    <TabPanel label=\"Large A\" active>Large 탭 패널</TabPanel>\n    <TabPanel label=\"Large B\">Large 탭 패널 B</TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs size="sm" aria-label="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" aria-label="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>`,
  })),
};


export const IconDemo = {
  name: "아이콘",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tabs_icon으로 탭 앞에 아이콘을 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Icon from '@uxkm/ui/components/Icon.vue';\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs aria-label=\"대시보드 섹션\">\n    <TabPanel label=\"대시보드\" active>\n      <template #icon>\n        <Icon name=\"grid\" />\n      </template>\n      대시보드 요약 패널\n    </TabPanel>\n    <TabPanel label=\"사용자\">\n      <template #icon>\n        <Icon name=\"user\" />\n      </template>\n      사용자 목록 패널\n    </TabPanel>\n    <TabPanel label=\"문서\">\n      <template #icon>\n        <Icon name=\"book\" />\n      </template>\n      문서 목록 패널\n    </TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { Icon, TabPanel, Tabs },
    template: `        <Tabs aria-label="대시보드 섹션">
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
        </Tabs>`,
  })),
};


export const BadgeDemo = {
  name: "배지",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport Badge from '@uxkm/ui/components/Badge.vue';\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs aria-label=\"알림 센터\">\n    <TabPanel label=\"전체\" active>전체 알림 목록</TabPanel>\n    <TabPanel label=\"읽지 않음\">\n      <template #badge>\n        <Badge class=\"tabs_badge\" count size=\"sm\" color=\"danger\" aria-label=\"읽지 않은 알림 12건\">12</Badge>\n      </template>\n      읽지 않은 알림 12건\n    </TabPanel>\n    <TabPanel label=\"멘션\">\n      <template #badge>\n        <Badge class=\"tabs_badge\" count size=\"sm\" color=\"primary\">3</Badge>\n      </template>\n      멘션 알림 3건\n    </TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { Badge, TabPanel, Tabs },
    template: `        <Tabs aria-label="알림 센터">
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
        </Tabs>`,
  })),
};


export const Extra = {
  name: "추가 액션",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Button from '@uxkm/ui/components/Button.vue';\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs aria-label=\"파일 관리\">\n    <TabPanel label=\"내 파일\" active>내 파일 목록</TabPanel>\n    <TabPanel label=\"공유됨\">공유된 파일 목록</TabPanel>\n    <TabPanel label=\"최근\">최근 파일 목록</TabPanel>\n    <template #extra>\n      <Button variant=\"filled\" color=\"primary\" size=\"sm\" label=\"업로드\" />\n    </template>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { Button, TabPanel, Tabs },
    template: `        <Tabs aria-label="파일 관리">
        <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
        <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
        <TabPanel label="최근">최근 파일 목록</TabPanel>
        <template #extra>
        <Button variant="filled" color="primary" size="sm" label="업로드" />
        </template>
        </Tabs>`,
  })),
};


export const Scroll = {
  name: "스크롤바",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "scrollable과 layout=&quot;auto&quot;를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout=&quot;scroll&quot;을 사용하세요.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs scrollable class=\"tabs_demo-narrow\" aria-label=\"긴 탭 목록\">\n    <TabPanel label=\"홈\" active>홈 패널</TabPanel>\n    <TabPanel label=\"제품\">제품 패널</TabPanel>\n    <TabPanel label=\"솔루션\">솔루션 패널</TabPanel>\n    <TabPanel label=\"가격\">가격 패널</TabPanel>\n    <TabPanel label=\"고객 사례\">고객 사례 패널</TabPanel>\n    <TabPanel label=\"리소스\">리소스 패널</TabPanel>\n    <TabPanel label=\"지원\">지원 패널</TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스">리소스 패널</TabPanel>
        <TabPanel label="지원">지원 패널</TabPanel>
      </Tabs>`,
  })),
};


export const Disabled = {
  name: "비활성",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs aria-label=\"권한별 탭\">\n    <TabPanel label=\"공개\" active>공개 콘텐츠</TabPanel>\n    <TabPanel label=\"팀\">팀 전용 콘텐츠</TabPanel>\n    <TabPanel label=\"관리자\" disabled>관리자 전용 콘텐츠</TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs aria-label="권한별 탭">
        <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
        <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
        <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
      </Tabs>`,
  })),
};


export const Vertical = {
  name: "수직",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\n</script>\n\n<template>\n  <Tabs vertical aria-label=\"수직 라인 탭\">\n    <TabPanel label=\"일반\" active>\n      <p>일반 설정 패널입니다.</p>\n    </TabPanel>\n    <TabPanel label=\"보안\">\n      <p>보안 설정 패널입니다.</p>\n    </TabPanel>\n    <TabPanel label=\"결제\">\n      <p>결제 설정 패널입니다.</p>\n    </TabPanel>\n  </Tabs>\n  <Tabs vertical variant=\"card\" aria-label=\"수직 카드 탭\">\n    <TabPanel label=\"문서\" active>문서 관리 패널</TabPanel>\n    <TabPanel label=\"미디어\">미디어 관리 패널</TabPanel>\n    <TabPanel label=\"아카이브\">아카이브 패널</TabPanel>\n  </Tabs>\n</template>",
        language: 'vue',
      },
    },
  },
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
  render: withDocsCanvasRender(() => ({
    components: { TabPanel, Tabs },
    template: `<Tabs vertical aria-label="수직 라인 탭">
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
      </Tabs>`,
  })),
};

