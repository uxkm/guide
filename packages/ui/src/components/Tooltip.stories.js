import Tooltip from './Tooltip.vue';
import { withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Link from './Link.vue';
import {
  tooltipClassColumns,
  tooltipClasses,
  tooltipPropColumns,
  tooltipProps,
  tooltipSlotColumns,
  tooltipSlots,
  tooltipTokenColumns,
  tooltipTokens,
} from '@doc-data/tooltip-api';

const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: tooltipPropColumns, rows: tooltipProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: tooltipSlotColumns, rows: tooltipSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: tooltipClassColumns, rows: tooltipClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: tooltipTokenColumns, rows: tooltipTokens, codeColumn: "name" },
    ],
  },
];

/** Docs·Canvas 동일 — Controls 오버레이 Tooltip 추가 방지 */
function tooltipDemo(docsRender) {
  return withDocsCanvasRender(docsRender, docsRender);
}

/** 말풍선이 잘리지 않도록 여유 패딩이 있는 스테이지 */
function stageDemo(inner) {
  return `
    <div class="tooltip_demo-stage">
      ${inner}
    </div>
  `;
}

export default {
  title: 'Components/피드백/Tooltip',
  id: 'components-tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', type: { name: 'string', summary: "string" }},
    placement: { control: 'select', options: ["top","top-start","top-end","left","right","start","end"], type: { name: 'enum', summary: "'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'" } },
    size: { control: 'select', options: ["sm","md","lg"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" }},
    offset: { control: 'select', options: ["none","sm","md","lg"], type: { name: 'enum', summary: "'none' | 'sm' | 'md' | 'lg'" } },
    open: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    inverse: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    noArrow: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    arrowAnchor: { control: 'select', options: ["content","target","mixed"], type: { name: 'enum', summary: "'content' | 'target' | 'mixed'" }},
    panelAlign: { control: 'select', options: ["start","center","end"], type: { name: 'enum', summary: "'start' | 'center' | 'end'" } },
    arrowTargetAlign: { control: 'select', options: ["center","left","right","top","bottom"], type: { name: 'enum', summary: "'center' | 'left' | 'right' | 'top' | 'bottom'" } },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    trigger: { control: 'select', options: ["hover","click"], type: { name: 'enum', summary: "'hover' | 'click'" }},
    interactive: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    closable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    closeLabel: { control: 'text', type: { name: 'string', summary: "string" }},
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
    content: "툴팁 텍스트",
    size: "md",
    offset: "md",
    open: true,
    inverse: false,
    noArrow: false,
    arrowAnchor: "content",
    panelAlign: "center",
    arrowTargetAlign: "center",
    disabled: false,
    trigger: "hover",
    interactive: true,
    closable: false,
    closeLabel: "닫기",
  },
  render: (_args, context) => ({
    components: { Tooltip, Button },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `
      <div class="tooltip_demo-stage">
        <Tooltip v-bind="args">
          <template #trigger>
            <Button label="툴팁" variant="outline" />
          </template>
        </Tooltip>
      </div>
    `,
  }),
};

export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "Tooltip과 `#trigger` 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip content="짧은 도움말 텍스트입니다.">
    <template #trigger>
      <Button variant="outline" label="마우스 오버" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    content: "짧은 도움말 텍스트입니다.",
    trigger: "hover",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip content="짧은 도움말 텍스트입니다.">
        <template #trigger>
          <Button variant="outline" label="마우스 오버" />
        </template>
      </Tooltip>
    `),
  })),
};

export const Slot = {
  name: "슬롯",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip>
    <template #trigger>
      <Button variant="outline" label="슬롯 예시" />
    </template>
    짧은 도움말 텍스트입니다.
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    trigger: "hover",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip>
        <template #trigger>
          <Button variant="outline" label="슬롯 예시" />
        </template>
        짧은 도움말 텍스트입니다.
      </Tooltip>
    `),
  })),
};

export const Open = {
  name: "열린 상태",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip open content="정적 데모용 열린 상태입니다.">
    <template #trigger>
      <Button variant="filled" color="primary" label="열림" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    open: true,
    content: "정적 데모용 열린 상태입니다.",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip open content="정적 데모용 열린 상태입니다.">
        <template #trigger>
          <Button variant="filled" color="primary" label="열림" />
        </template>
      </Tooltip>
    `),
  })),
};

export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip size="sm" open content="작은 말풍선">
    <template #trigger>
      <Button variant="ghost" size="sm" label="Small" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    open: true,
    size: "md",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <div class="tooltip_row" style="align-items: flex-start;">
        <Tooltip size="sm" open content="작은 말풍선">
          <template #trigger>
            <Button variant="ghost" size="sm" label="Small" />
          </template>
        </Tooltip>
        <Tooltip open content="기본 크기 말풍선">
          <template #trigger>
            <Button variant="ghost" label="Medium" />
          </template>
        </Tooltip>
        <Tooltip size="lg" open content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.">
          <template #trigger>
            <Button variant="ghost" size="lg" label="Large" />
          </template>
        </Tooltip>
      </div>
    `),
  })),
};

export const Offset = {
  name: "간격",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-*로 방향별 간격을 조절합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip offset="lg" open content="넓은 간격">
    <template #trigger>
      <Button variant="ghost" size="sm" label="lg" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    open: true,
    offset: "md",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: `
      <div class="tooltip_demo-stage">
        <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip offset="none" open content="간격 없음">
            <template #trigger>
              <Button variant="ghost" size="sm" label="none" />
            </template>
          </Tooltip>
          <Tooltip offset="sm" open content="좁은 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="sm" />
            </template>
          </Tooltip>
          <Tooltip open content="기본 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="md" />
            </template>
          </Tooltip>
          <Tooltip offset="lg" open content="넓은 간격">
            <template #trigger>
              <Button variant="ghost" size="sm" label="lg" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
        <div class="tooltip_demo-placement" style="min-height: 12rem; padding: 0; border: none; background: transparent;">
          <div class="tooltip_demo-placement-cell-top">
            <Tooltip placement="top" offset-top="lg" open content="위쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="위" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-left">
            <Tooltip placement="left" offset-left="lg" open content="왼쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="왼쪽" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-center">
            <Tooltip offset-bottom="lg" open content="아래쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="아래" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-right">
            <Tooltip placement="right" offset-right="lg" open content="오른쪽 간격">
              <template #trigger>
                <Button variant="ghost" size="sm" label="오른쪽" />
              </template>
            </Tooltip>
          </div>
        </div>
      </div>
    `,
  })),
};

export const Inline = {
  name: "인라인",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다.",
      },
      source: {
        code: `<script setup>
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <p>
    결제 시
    <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
      <template #trigger>
        <Link label="에스크로" />
      </template>
    </Tooltip>
    서비스를 이용할 수 있습니다.
  </p>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    trigger: "hover",
  },
  render: tooltipDemo(() => ({
    components: { Link, Tooltip },
    template: stageDemo(`
      <p>
        결제 시
        <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.">
          <template #trigger>
            <Link label="에스크로" />
          </template>
        </Tooltip>
        서비스를 이용할 수 있습니다.
      </p>
    `),
  })),
};

export const Trigger = {
  name: "트리거 유형",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <div class="tooltip_row">
    <Tooltip content="버튼 트리거 예시입니다.">
      <template #trigger>
        <Button variant="filled" color="primary" label="Button" />
      </template>
    </Tooltip>
  </div>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    trigger: "hover",
  },
  render: tooltipDemo(() => ({
    components: { Button, Icon, Link, Tooltip },
    template: stageDemo(`
      <div class="tooltip_row">
        <Tooltip content="버튼 트리거 예시입니다.">
          <template #trigger>
            <Button variant="filled" color="primary" label="Button" />
          </template>
        </Tooltip>
        <Tooltip content="링크 스타일 트리거입니다.">
          <template #trigger>
            <Link label="Link 트리거" />
          </template>
        </Tooltip>
        <Tooltip content="아이콘 전용 트리거입니다.">
          <template #trigger>
            <Button variant="ghost" icon-only aria-label="정보">
              <template #icon-before>
                <Icon name="info" />
              </template>
            </Button>
          </template>
        </Tooltip>
      </div>
    `),
  })),
};

export const Click = {
  name: "클릭 트리거",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "trigger=\"click\"으로 클릭 시 말풍선을 토글합니다. 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
    <template #trigger>
      <Button variant="outline" label="클릭하여 보기" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    trigger: "click",
    content: "클릭으로 열고 닫는 Tooltip입니다.",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
        <template #trigger>
          <Button variant="outline" label="클릭하여 보기" />
        </template>
      </Tooltip>
    `),
  })),
};

export const Placement = {
  name: "배치",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "placement prop으로 말풍선 위치를 조정합니다. 기본은 트리거 아래·가운데 정렬입니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip placement="top" content="트리거 위">
    <template #trigger>
      <Button variant="outline" size="sm" label="위" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    trigger: "hover",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: `
      <div class="tooltip_demo-stage">
        <div class="tooltip_demo-placement">
          <div class="tooltip_demo-placement-cell-top">
            <Tooltip placement="top" content="트리거 위">
              <template #trigger>
                <Button variant="outline" size="sm" label="위" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-left">
            <Tooltip placement="left" content="트리거 왼쪽">
              <template #trigger>
                <Button variant="outline" size="sm" label="왼쪽" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-center">
            <Tooltip content="트리거 아래 · 가운데">
              <template #trigger>
                <Button variant="outline" size="sm" label="아래" />
              </template>
            </Tooltip>
          </div>
          <div class="tooltip_demo-placement-cell-right">
            <Tooltip placement="right" content="트리거 오른쪽">
              <template #trigger>
                <Button variant="outline" size="sm" label="오른쪽" />
              </template>
            </Tooltip>
          </div>
        </div>
        <div class="tooltip_row" style="width: 100%; justify-content: space-between; margin-top: var(--space-xl);">
          <Tooltip placement="top-start" content="위쪽 왼쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="위 · 왼쪽" />
            </template>
          </Tooltip>
          <Tooltip placement="start" content="아래쪽 왼쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="아래 · 왼쪽" />
            </template>
          </Tooltip>
          <Tooltip placement="end" content="아래쪽 오른쪽 정렬">
            <template #trigger>
              <Button variant="ghost" label="아래 · 오른쪽" />
            </template>
          </Tooltip>
        </div>
      </div>
    `,
  })),
};

export const Inverse = {
  name: "역색",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "inverse prop으로 어두운 배경의 말풍선을 표시합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip inverse content="어두운 배경의 말풍선입니다.">
    <template #trigger>
      <Button variant="ghost" label="역색 Tooltip" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    inverse: true,
    content: "어두운 배경의 말풍선입니다.",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip inverse content="어두운 배경의 말풍선입니다.">
        <template #trigger>
          <Button variant="ghost" label="역색 Tooltip" />
        </template>
      </Tooltip>
    `),
  })),
};

export const Disabled = {
  name: "비활성 트리거",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "비활성 버튼은 래퍼에 tabindex를 주어 pointer-events가 막힌 요소에도 설명을 제공합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
    <template #trigger>
      <span tabindex="0">
        <Button variant="filled" color="primary" label="제출 불가" disabled />
      </span>
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    content: "필수 항목을 모두 입력해야 제출할 수 있습니다.",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다.">
        <template #trigger>
          <span tabindex="0">
            <Button variant="filled" color="primary" label="제출 불가" disabled />
          </span>
        </template>
      </Tooltip>
    `),
  })),
};

export const ArrowAnchor = {
  name: "화살표 기준",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: "arrow-anchor(content · target · mixed)와 panel-align, arrow-target-align으로 말풍선·화살표를 독립 조합합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip open arrow-anchor="target" content="화살표가 트리거 중앙을 가리킵니다.">
    <template #trigger>
      <Button variant="ghost" size="sm" label="S" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    open: true,
    arrowAnchor: "target",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: `
      <div class="tooltip_demo-stage">
        <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip open content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip open arrow-anchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip open arrow-anchor="target" arrow-target-align="left" content="트리거 왼쪽을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip open arrow-anchor="target" content="트리거 가운데를 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip open arrow-anchor="target" arrow-target-align="right" content="트리거 오른쪽을 가리킵니다.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
        <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 조합</p>
        <div class="tooltip_row" style="align-items: flex-start;">
          <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="left" content="말풍선 가운데, 화살표 왼쪽.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip open arrow-anchor="mixed" panel-align="center" content="말풍선·화살표 모두 가운데.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
          <Tooltip open arrow-anchor="mixed" panel-align="center" arrow-target-align="right" content="말풍선 가운데, 화살표 오른쪽.">
            <template #trigger>
              <Button variant="ghost" size="sm" label="S" />
            </template>
          </Tooltip>
        </div>
      </div>
    `,
  })),
};

export const NoArrow = {
  name: "화살표 없음",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "no-arrow prop으로 tooltip_arrow를 숨깁니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Tooltip from '@uxkm/ui/components/Tooltip.vue';
</script>

<template>
  <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
    <template #trigger>
      <Button variant="ghost" label="화살표 없음" />
    </template>
  </Tooltip>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    noArrow: true,
    content: "화살표가 표시되지 않는 말풍선입니다.",
  },
  render: tooltipDemo(() => ({
    components: { Button, Tooltip },
    template: stageDemo(`
      <Tooltip no-arrow content="화살표가 표시되지 않는 말풍선입니다.">
        <template #trigger>
          <Button variant="ghost" label="화살표 없음" />
        </template>
      </Tooltip>
    `),
  })),
};
