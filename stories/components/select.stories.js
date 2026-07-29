import html from '../../src/components/select.html?raw';
import {
  extractDemoSections,
  extractApiSections,
  renderDemo,
  gulpSource,
} from '../lib/gulp-demos.js';

const demos = extractDemoSections(html);
const apis = extractApiSections(html);

/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: 'Components/폼/Select',
  id: 'components-select',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '옵션 목록에서 값을 선택하는 Select 컴포넌트입니다. 네이티브 &lt;select class="input"&gt;와 커스텀 드롭다운 트리거 btn_select · btn_select-text 두 가지 유형을 제공합니다.',
      },
    },
  },
};

export const Demo0 = {
  name: '유형',
  render: () => renderDemo(demos[0]),
  parameters: { docs: { ...gulpSource(demos[0].previewHtml).docs, description: { story: demos[0].description } } },
};
export const Demo1 = {
  name: '기본',
  render: () => renderDemo(demos[1]),
  parameters: { docs: { ...gulpSource(demos[1].previewHtml).docs, description: { story: demos[1].description } } },
};
export const Demo2 = {
  name: '단독 사용',
  render: () => renderDemo(demos[2]),
  parameters: { docs: { ...gulpSource(demos[2].previewHtml).docs, description: { story: demos[2].description } } },
};
export const Demo3 = {
  name: '크기',
  render: () => renderDemo(demos[3]),
  parameters: { docs: { ...gulpSource(demos[3].previewHtml).docs, description: { story: demos[3].description } } },
};
export const Demo4 = {
  name: '너비',
  render: () => renderDemo(demos[4]),
  parameters: { docs: { ...gulpSource(demos[4].previewHtml).docs, description: { story: demos[4].description } } },
};
export const Demo5 = {
  name: '플레이스홀더',
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
};
export const Demo6 = {
  name: '옵션 그룹',
  render: () => renderDemo(demos[6]),
  parameters: { docs: { ...gulpSource(demos[6].previewHtml).docs, description: { story: demos[6].description } } },
};
export const Demo7 = {
  name: '다중 선택',
  render: () => renderDemo(demos[7]),
  parameters: { docs: { ...gulpSource(demos[7].previewHtml).docs, description: { story: demos[7].description } } },
};
export const Demo8 = {
  name: '상태',
  render: () => renderDemo(demos[8]),
  parameters: { docs: { ...gulpSource(demos[8].previewHtml).docs, description: { story: demos[8].description } } },
};
export const Demo9 = {
  name: '커스텀 트리거',
  render: () => renderDemo(demos[9]),
  parameters: { docs: { ...gulpSource(demos[9].previewHtml).docs, description: { story: demos[9].description } } },
};
export const Demo10 = {
  name: '조합 예시',
  render: () => renderDemo(demos[10]),
  parameters: { docs: { ...gulpSource(demos[10].previewHtml).docs, description: { story: demos[10].description } } },
};

export const ApiClasses = {
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다.',
      },
    },
  },
};

export const ApiTokens = {
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: '네이티브 select 캐럿·커스텀 btn_select 트리거에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
