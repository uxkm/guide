import List from './List.vue';
import { bindComponent, withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Avatar from './Avatar.vue';
import ListItem from './ListItem.vue';
import {
  listClassColumns,
  listClasses,
  listItemPropColumns,
  listItemProps,
  listItemSlots,
  listPropColumns,
  listProps,
  listSlotColumns,
  listSlots,
  listTokenColumns,
  listTokens,
} from '@doc-data/list-api';
const apiSections = [
  {
    title: "API · List Props",
    tables: [
      { columns: listPropColumns, rows: listProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · ListItem Props",
    tables: [
      { columns: listItemPropColumns, rows: listItemProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · List Slots",
    tables: [
      { columns: listSlotColumns, rows: listSlots, codeColumn: "name" },
    ],
  },
  {
    title: "API · ListItem Slots",
    tables: [
      { columns: listSlotColumns, rows: listItemSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "List · ListItem이 렌더하는 OOCSS 클래스입니다. class prop으로 스킨 클래스를 조합합니다.",
    tables: [
      { columns: listClassColumns, rows: listClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: listTokenColumns, rows: listTokens, codeColumn: "name" },
    ],
  },
];

export default {
  title: 'Components/데이터 표시/List',
  id: 'components-list',
  component: List,
  subcomponents: { ListItem },
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    split: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    block: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    size: { control: 'select', options: ["md","compact"], type: { name: 'enum', summary: "'md' | 'compact'" }},
    variant: { control: 'select', options: ["default","bullet","ordered","definition"], type: { name: 'enum', summary: "'default' | 'bullet' | 'ordered' | 'definition'" }},
    tag: { control: 'select', options: ["ul","ol","dl","div"], type: { name: 'enum', summary: "'ul' | 'ol' | 'dl' | 'div'" }},
    layout: { control: 'select', options: ["block","inline"], type: { name: 'enum', summary: "'block' | 'inline'" }},
    inlineLabelWidth: { control: 'select', options: ["sm","md","lg","8rem","10rem","12rem"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | '8rem' | '10rem' | '12rem'" } },
    inlineGap: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" } },
    descAlign: { control: 'select', options: ["left","right"], type: { name: 'enum', summary: "'left' | 'right'" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left",
  },
  render: (_args, context) => ({
    components: { List, ListItem },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `<List v-bind="args">
      <ListItem title="항목 1" description="설명" />
      <ListItem title="항목 2" description="설명" />
    </List>`,
  }),
};


export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "list_title · list_meta · list_desc로 항목 내용을 구성합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List>\n    <ListItem title=\"홍길동\" meta=\"프론트엔드 개발자\">\n      <template #prefix>\n        <Avatar color=\"primary\" initials=\"홍\" aria-hidden />\n      </template>\n    </ListItem>\n    <ListItem title=\"김철수\" meta=\"백엔드 개발자\">\n      <template #prefix>\n        <Avatar color=\"success\" initials=\"김\" aria-hidden />\n      </template>\n    </ListItem>\n    <ListItem title=\"이영희\" meta=\"UI/UX 디자이너\">\n      <template #prefix>\n        <Avatar color=\"warning\" initials=\"이\" aria-hidden />\n      </template>\n    </ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, List, ListItem },
    template: `        <List>
        <ListItem title="홍길동" meta="프론트엔드 개발자">
        <template #prefix>
        <Avatar color="primary" initials="홍" aria-hidden />
        </template>
        </ListItem>
        <ListItem title="김철수" meta="백엔드 개발자">
        <template #prefix>
        <Avatar color="success" initials="김" aria-hidden />
        </template>
        </ListItem>
        <ListItem title="이영희" meta="UI/UX 디자이너">
        <template #prefix>
        <Avatar color="warning" initials="이" aria-hidden />
        </template>
        </ListItem>
        </List>`,
  })),
};


export const Bullet = {
  name: "불릿",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "class에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List class=\"list_bullet\">\n    <ListItem>디자인 토큰 정의</ListItem>\n    <ListItem>컴포넌트 문서화</ListItem>\n    <ListItem>접근성 검토</ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List class="list_bullet">
        <ListItem>디자인 토큰 정의</ListItem>
        <ListItem>컴포넌트 문서화</ListItem>
        <ListItem>접근성 검토</ListItem>
      </List>`,
  })),
};


export const BulletRich = {
  name: "불릿 · 본문",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "title · description prop으로 제목·설명을 함께 표시합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List class=\"list_bullet\">\n    <ListItem title=\"HTML 마크업\" description=\"시맨틱 태그와 ARIA 속성을 사용합니다.\" />\n    <ListItem title=\"SCSS 스타일\" description=\"OOCSS 패턴으로 구조와 스킨을 분리합니다.\" />\n    <ListItem title=\"접근성\" description=\"WCAG 2.2 AA 기준을 준수합니다.\" />\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List class="list_bullet">
        <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
        <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
        <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
      </List>`,
  })),
};


export const BulletVariant = {
  name: "불릿 변형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "circle · square 마커와 중첩 목록을 지원합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List class=\"list_bullet list_bullet-circle\">\n    <ListItem>원형 마커 항목 A</ListItem>\n    <ListItem>원형 마커 항목 B</ListItem>\n  </List>\n  <List class=\"list_bullet list_bullet-square\">\n    <ListItem>사각 마커 항목 A</ListItem>\n    <ListItem>사각 마커 항목 B</ListItem>\n  </List>\n  <List class=\"list_bullet\">\n    <ListItem>\n      레이아웃\n      <List class=\"list_bullet\">\n        <ListItem>Container</ListItem>\n        <ListItem>Grid</ListItem>\n      </List>\n    </ListItem>\n    <ListItem>\n      기본 요소\n      <List class=\"list_bullet\">\n        <ListItem>Button</ListItem>\n        <ListItem>Typography</ListItem>\n      </List>\n    </ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List class="list_bullet list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List class="list_bullet list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
      <List class="list_bullet">
        <ListItem>
          레이아웃
          <List class="list_bullet">
            <ListItem>Container</ListItem>
            <ListItem>Grid</ListItem>
          </List>
        </ListItem>
        <ListItem>
          기본 요소
          <List class="list_bullet">
            <ListItem>Button</ListItem>
            <ListItem>Typography</ListItem>
          </List>
        </ListItem>
      </List>`,
  })),
};


export const Ordered = {
  name: "번호",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "tag=&quot;ol&quot;과 list_ordered 클래스로 순서 목록을 만듭니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List tag=\"ol\" class=\"list_ordered\">\n    <ListItem>요구사항 분석</ListItem>\n    <ListItem>와이어프레임 작성</ListItem>\n    <ListItem>프로토타입 검증</ListItem>\n    <ListItem>개발 및 배포</ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List tag="ol" class="list_ordered">
        <ListItem>요구사항 분석</ListItem>
        <ListItem>와이어프레임 작성</ListItem>
        <ListItem>프로토타입 검증</ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>`,
  })),
};


export const OrderedVariant = {
  name: "번호 변형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-alpha\">\n    <ListItem>첫 번째 옵션</ListItem>\n    <ListItem>두 번째 옵션</ListItem>\n    <ListItem>세 번째 옵션</ListItem>\n  </List>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-roman\">\n    <ListItem>서론</ListItem>\n    <ListItem>본론</ListItem>\n    <ListItem>결론</ListItem>\n  </List>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-upper-alpha\">\n    <ListItem>항목 A</ListItem>\n    <ListItem>항목 B</ListItem>\n  </List>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-upper-roman\">\n    <ListItem>Chapter I</ListItem>\n    <ListItem>Chapter II</ListItem>\n  </List>\n  <List tag=\"ol\" class=\"list_ordered\">\n    <ListItem title=\"프로젝트 설정\" description=\"저장소 클론 및 의존성 설치\" />\n    <ListItem title=\"개발 서버 실행\" description=\"pnpm dev로 로컬 미리보기\">\n      <List tag=\"ol\" class=\"list_ordered list_ordered-alpha\">\n        <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>\n        <ListItem>pnpm install 실행</ListItem>\n        <ListItem>pnpm dev 실행</ListItem>\n      </List>\n    </ListItem>\n    <ListItem title=\"빌드\" description=\"pnpm build로 html/ 출력\" />\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List tag="ol" class="list_ordered list_ordered-alpha">
        <ListItem>첫 번째 옵션</ListItem>
        <ListItem>두 번째 옵션</ListItem>
        <ListItem>세 번째 옵션</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-roman">
        <ListItem>서론</ListItem>
        <ListItem>본론</ListItem>
        <ListItem>결론</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-upper-alpha">
        <ListItem>항목 A</ListItem>
        <ListItem>항목 B</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-upper-roman">
        <ListItem>Chapter I</ListItem>
        <ListItem>Chapter II</ListItem>
      </List>
      <List tag="ol" class="list_ordered">
        <ListItem title="프로젝트 설정" description="저장소 클론 및 의존성 설치" />
        <ListItem title="개발 서버 실행" description="pnpm dev로 로컬 미리보기">
          <List tag="ol" class="list_ordered list_ordered-alpha">
            <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>
            <ListItem>pnpm install 실행</ListItem>
            <ListItem>pnpm dev 실행</ListItem>
          </List>
        </ListItem>
        <ListItem title="빌드" description="pnpm build로 html/ 출력" />
      </List>`,
  })),
};


export const OrderedHierarchical = {
  name: "번호 · 계층",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-outline\">\n    <ListItem>1단계 — 요구사항 정의</ListItem>\n    <ListItem>\n      설계\n      <List tag=\"ol\" class=\"list_ordered list_ordered-outline\">\n        <ListItem>정보 구조</ListItem>\n        <ListItem>\n          UI 설계\n          <List tag=\"ol\" class=\"list_ordered list_ordered-outline\">\n            <ListItem>와이어프레임</ListItem>\n            <ListItem>프로토타입</ListItem>\n          </List>\n        </ListItem>\n      </List>\n    </ListItem>\n    <ListItem>개발 및 배포</ListItem>\n  </List>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-dash\">\n    <ListItem>1단계 — 환경 구성</ListItem>\n    <ListItem>\n      개발\n      <List tag=\"ol\" class=\"list_ordered list_ordered-dash\">\n        <ListItem>컴포넌트 구현</ListItem>\n        <ListItem>\n          문서화\n          <List tag=\"ol\" class=\"list_ordered list_ordered-dash\">\n            <ListItem>API 표</ListItem>\n            <ListItem>데모 예제</ListItem>\n          </List>\n        </ListItem>\n      </List>\n    </ListItem>\n    <ListItem>QA 및 릴리스</ListItem>\n  </List>\n  <List tag=\"ol\" class=\"list_ordered list_ordered-depth\">\n    <ListItem>레이아웃</ListItem>\n    <ListItem>\n      기본 요소\n      <List tag=\"ol\" class=\"list_ordered list_ordered-depth\">\n        <ListItem>Button</ListItem>\n        <ListItem>\n          Form\n          <List tag=\"ol\" class=\"list_ordered list_ordered-depth\">\n            <ListItem>Input</ListItem>\n            <ListItem>Select</ListItem>\n          </List>\n        </ListItem>\n      </List>\n    </ListItem>\n    <ListItem>피드백</ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List tag="ol" class="list_ordered list_ordered-outline">
        <ListItem>1단계 — 요구사항 정의</ListItem>
        <ListItem>
          설계
          <List tag="ol" class="list_ordered list_ordered-outline">
            <ListItem>정보 구조</ListItem>
            <ListItem>
              UI 설계
              <List tag="ol" class="list_ordered list_ordered-outline">
                <ListItem>와이어프레임</ListItem>
                <ListItem>프로토타입</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-dash">
        <ListItem>1단계 — 환경 구성</ListItem>
        <ListItem>
          개발
          <List tag="ol" class="list_ordered list_ordered-dash">
            <ListItem>컴포넌트 구현</ListItem>
            <ListItem>
              문서화
              <List tag="ol" class="list_ordered list_ordered-dash">
                <ListItem>API 표</ListItem>
                <ListItem>데모 예제</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>QA 및 릴리스</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-depth">
        <ListItem>레이아웃</ListItem>
        <ListItem>
          기본 요소
          <List tag="ol" class="list_ordered list_ordered-depth">
            <ListItem>Button</ListItem>
            <ListItem>
              Form
              <List tag="ol" class="list_ordered list_ordered-depth">
                <ListItem>Input</ListItem>
                <ListItem>Select</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>피드백</ListItem>
      </List>`,
  })),
};


export const BulletLink = {
  name: "불릿 · 링크",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "불릿 목록에서도 li 안에 a.list_link를 사용합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List class=\"list_bullet\">\n    <ListItem>\n      <a href=\"components/button.html\" class=\"list_link\" data-ripple>\n        <span class=\"list_title\">Button</span>\n      </a>\n    </ListItem>\n    <ListItem>\n      <a href=\"components/typography.html\" class=\"list_link\" data-ripple>\n        <span class=\"list_title\">Typography</span>\n      </a>\n    </ListItem>\n    <ListItem>\n      <a href=\"components/icon.html\" class=\"list_link\" data-ripple>\n        <span class=\"list_title\">Icon</span>\n      </a>\n    </ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List class="list_bullet">
        <ListItem>
          <a href="components/button.html" class="list_link" data-ripple>
            <span class="list_title">Button</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/typography.html" class="list_link" data-ripple>
            <span class="list_title">Typography</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/icon.html" class="list_link" data-ripple>
            <span class="list_title">Icon</span>
          </a>
        </ListItem>
      </List>`,
  })),
};


export const Bordered = {
  name: "테두리",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "bordered prop으로 각 항목에 테두리를 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List bordered>\n    <ListItem title=\"알림 설정\" description=\"이메일 및 푸시 알림을 관리합니다.\" />\n    <ListItem title=\"프로필 편집\" description=\"이름, 사진, 소개를 변경합니다.\" />\n    <ListItem title=\"보안\" description=\"비밀번호 및 2단계 인증을 설정합니다.\" />\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List bordered>
        <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
        <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
        <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
      </List>`,
  })),
};


export const Link = {
  name: "링크",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List split>\n    <ListItem>\n      <a href=\"components/button.html\" class=\"list_link\" data-ripple>\n        <div class=\"list_content\">\n          <span class=\"list_title\">대시보드</span>\n        </div>\n        <span class=\"list_action color_muted\" aria-hidden=\"true\">›</span>\n      </a>\n    </ListItem>\n    <ListItem>\n      <a href=\"components/card.html\" class=\"list_link\" data-ripple>\n        <div class=\"list_content\">\n          <span class=\"list_title\">프로젝트</span>\n        </div>\n        <span class=\"list_action color_muted\" aria-hidden=\"true\">›</span>\n      </a>\n    </ListItem>\n    <ListItem>\n      <a href=\"getting-started.html\" class=\"list_link\" data-ripple>\n        <div class=\"list_content\">\n          <span class=\"list_title\">설정</span>\n        </div>\n        <span class=\"list_action color_muted\" aria-hidden=\"true\">›</span>\n      </a>\n    </ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List split>
        <ListItem>
          <a href="components/button.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">대시보드</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/card.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">프로젝트</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="getting-started.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">설정</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
      </List>`,
  })),
};


export const Button = {
  name: "버튼",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List bordered>\n    <ListItem>\n      <button type=\"button\" class=\"list_link\" data-ripple>\n        <Avatar color=\"primary\" initials=\"홍\" aria-hidden />\n        <span class=\"list_content\">\n          <span class=\"list_title\">홍길동</span>\n          <span class=\"list_meta\">메시지 보내기</span>\n        </span>\n        <span class=\"list_action color_muted\" aria-hidden=\"true\">›</span>\n      </button>\n    </ListItem>\n    <ListItem>\n      <button type=\"button\" class=\"list_link\" data-ripple>\n        <Avatar color=\"success\" initials=\"김\" aria-hidden />\n        <span class=\"list_content\">\n          <span class=\"list_title\">김철수</span>\n          <span class=\"list_meta\">메시지 보내기</span>\n        </span>\n        <span class=\"list_action color_muted\" aria-hidden=\"true\">›</span>\n      </button>\n    </ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, List, ListItem },
    template: `<List bordered>
        <ListItem>
          <button type="button" class="list_link" data-ripple>
            <Avatar color="primary" initials="홍" aria-hidden />
            <span class="list_content">
              <span class="list_title">홍길동</span>
              <span class="list_meta">메시지 보내기</span>
            </span>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </button>
        </ListItem>
        <ListItem>
          <button type="button" class="list_link" data-ripple>
            <Avatar color="success" initials="김" aria-hidden />
            <span class="list_content">
              <span class="list_title">김철수</span>
              <span class="list_meta">메시지 보내기</span>
            </span>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </button>
        </ListItem>
      </List>`,
  })),
};


export const Card = {
  name: "카드 혼합",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "list_cards 클래스로 li 안에 card를 배치합니다.",
      },
      source: {
        code: "<script setup>\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List class=\"list_cards\">\n    <ListItem>\n      <a href=\"components/card.html\" class=\"card card_shadow card_clickable card_horizontal\">\n        <div class=\"card_media card_media-placeholder\" role=\"img\" aria-label=\"프로젝트 썸네일\">\n          <svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\">\n            <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" />\n            <circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\" />\n            <path d=\"M21 15l-5-5L5 21\" />\n          </svg>\n        </div>\n        <div class=\"card_inner\">\n          <div class=\"card_header\">\n            <div class=\"card_header-main\">\n              <h3 class=\"card_title\">프로젝트 Alpha</h3>\n              <p class=\"card_subtitle\">진행 중 · 2일 전</p>\n            </div>\n          </div>\n          <div class=\"card_body\">\n            디자인 시스템 구축 및 컴포넌트 라이브러리 개발\n          </div>\n        </div>\n      </a>\n    </ListItem>\n    <ListItem>\n      <article class=\"card card_shadow\">\n        <div class=\"card_header\">\n          <div class=\"card_header-main\">\n            <div class=\"card_header-row\">\n              <Avatar color=\"warning\" initials=\"이\" aria-hidden />\n              <div>\n                <h3 class=\"card_title\">이영희</h3>\n                <p class=\"card_subtitle\">UI/UX 디자이너</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card_body\">\n          <p class=\"list_desc\">새 디자인 시안을 공유했습니다.</p>\n        </div>\n        <div class=\"card_footer card_footer-between\">\n          <span class=\"color_muted size_sm\">10분 전</span>\n          <a href=\"#\" class=\"link color_primary size_sm\" @click.prevent>보기</a>\n        </div>\n      </article>\n    </ListItem>\n    <ListItem>\n      <a href=\"components/list.html\" class=\"card card_accent color_primary card_clickable\">\n        <div class=\"card_body\">\n          <p class=\"card_title\" style=\"margin-bottom: 0.25rem;\">알림</p>\n          <p class=\"list_desc\">리스트와 카드를 함께 사용하는 패턴입니다.</p>\n        </div>\n      </a>\n    </ListItem>\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { Avatar, List, ListItem },
    template: `<List class="list_cards">
        <ListItem>
          <a href="components/card.html" class="card card_shadow card_clickable card_horizontal">
            <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div class="card_inner">
              <div class="card_header">
                <div class="card_header-main">
                  <h3 class="card_title">프로젝트 Alpha</h3>
                  <p class="card_subtitle">진행 중 · 2일 전</p>
                </div>
              </div>
              <div class="card_body">
                디자인 시스템 구축 및 컴포넌트 라이브러리 개발
              </div>
            </div>
          </a>
        </ListItem>
        <ListItem>
          <article class="card card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <Avatar color="warning" initials="이" aria-hidden />
                  <div>
                    <h3 class="card_title">이영희</h3>
                    <p class="card_subtitle">UI/UX 디자이너</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_body">
              <p class="list_desc">새 디자인 시안을 공유했습니다.</p>
            </div>
            <div class="card_footer card_footer-between">
              <span class="color_muted size_sm">10분 전</span>
              <a href="#" class="link color_primary size_sm" @click.prevent>보기</a>
            </div>
          </article>
        </ListItem>
        <ListItem>
          <a href="components/list.html" class="card card_accent color_primary card_clickable">
            <div class="card_body">
              <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
              <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
            </div>
          </a>
        </ListItem>
      </List>`,
  })),
};


export const Definition = {
  name: "정의 목록",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "variant=&quot;definition&quot;으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List variant=\"definition\" style=\"max-width: 28rem; width: 100%;\">\n    <ListItem title=\"OOCSS\" description=\"구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.\" />\n    <ListItem title=\"Design Token\" description=\"색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.\" />\n    <ListItem title=\"WCAG\" description=\"웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.\" />\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List variant="definition" style="max-width: 28rem; width: 100%;">
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
      </List>`,
  })),
};


export const DefinitionInline = {
  name: "정의 목록 · 인라인",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "layout=&quot;inline&quot;으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List variant=\"definition\" layout=\"inline\" inline-label-width=\"auto\" inline-gap=\"var(--space-md)\">\n    <ListItem title=\"OOCSS\" description=\"구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.\" />\n    <ListItem title=\"Design Token\" description=\"색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.\" />\n    <ListItem title=\"WCAG\" description=\"웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.\" />\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List variant="definition" layout="inline" inline-label-width="auto" inline-gap="var(--space-md)">
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
      </List>`,
  })),
};


export const DefinitionDescAlign = {
  name: "정의 목록 · 값 우측 정렬",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "descAlign=&quot;right&quot;로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다.",
      },
      source: {
        code: "<script setup>\nimport List from '@uxkm/ui/components/List.vue';\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\n</script>\n\n<template>\n  <List\n  variant=\"definition\"\n  layout=\"inline\"\n  block\n  size=\"compact\"\n  desc-align=\"right\"\n  inline-label-width=\"auto\"\n  inline-gap=\"1rem\"\n  >\n  <ListItem title=\"주문번호\" description=\"ORD-2024-0815\" />\n  <ListItem title=\"결제금액\" description=\"₩42,000\" />\n  <ListItem title=\"배송지\" description=\"서울특별시 강남구 테헤란로 123\" />\n  </List>\n</template>",
        language: 'vue',
      },
    },
  },
  args: {
  bordered: false,
  split: false,
  block: false,
  size: "md",
  variant: "default",
  tag: "ul",
  layout: "block",
  inlineLabelWidth: "값",
  inlineGap: "값",
  descAlign: "left"
},
  render: withDocsCanvasRender(() => ({
    components: { List, ListItem },
    template: `<List
      variant="definition"
      layout="inline"
      block
      size="compact"
      desc-align="right"
      inline-label-width="auto"
      inline-gap="1rem"
      >
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
      </List>`,
  })),
};

