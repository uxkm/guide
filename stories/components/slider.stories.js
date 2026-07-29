import html from '../../src/components/slider.html?raw';
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
  title: 'Components/폼/Slider',
  id: 'components-slider',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '범위 값을 선택하는 Slider 컴포넌트입니다. 네이티브 &lt;input type="range"&gt;를 기반으로 하며, 모바일에서는 slider_stepper로 증감 버튼을 제공해 드래그와 동일하게 step 단위로 값을 조절할 수 있습니다.',
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
  name: '레이블 · 값 표시',
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
  name: '간격 · 눈금',
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
};
export const Demo6 = {
  name: '스텝 버튼',
  render: () => renderDemo(demos[6]),
  parameters: { docs: { ...gulpSource(demos[6].previewHtml).docs, description: { story: demos[6].description } } },
};
export const Demo7 = {
  name: '색상',
  render: () => renderDemo(demos[7]),
  parameters: { docs: { ...gulpSource(demos[7].previewHtml).docs, description: { story: demos[7].description } } },
};
export const Demo8 = {
  name: '상태',
  render: () => renderDemo(demos[8]),
  parameters: { docs: { ...gulpSource(demos[8].previewHtml).docs, description: { story: demos[8].description } } },
};
export const Demo9 = {
  name: '폼 레이아웃',
  render: () => renderDemo(demos[9]),
  parameters: { docs: { ...gulpSource(demos[9].previewHtml).docs, description: { story: demos[9].description } } },
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
        story: 'Slider 트랙·썸·스텝 버튼에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
