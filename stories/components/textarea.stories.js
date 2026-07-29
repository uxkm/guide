import html from '../../src/components/textarea.html?raw';
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
  title: 'Components/폼/Textarea',
  id: 'components-textarea',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '여러 줄 텍스트 입력을 위한 Textarea 컴포넌트입니다. class="textarea"를 사용하며, form_field와 조합해 레이블·힌트·유효성 메시지를 구성합니다.',
      },
    },
  },
};

export const Demo0 = {
  name: '기본',
  render: () => renderDemo(demos[0]),
  parameters: { docs: { ...gulpSource(demos[0].previewHtml).docs, description: { story: demos[0].description } } },
};
export const Demo1 = {
  name: '단독 사용',
  render: () => renderDemo(demos[1]),
  parameters: { docs: { ...gulpSource(demos[1].previewHtml).docs, description: { story: demos[1].description } } },
};
export const Demo2 = {
  name: '크기',
  render: () => renderDemo(demos[2]),
  parameters: { docs: { ...gulpSource(demos[2].previewHtml).docs, description: { story: demos[2].description } } },
};
export const Demo3 = {
  name: '너비',
  render: () => renderDemo(demos[3]),
  parameters: { docs: { ...gulpSource(demos[3].previewHtml).docs, description: { story: demos[3].description } } },
};
export const Demo4 = {
  name: '행 수',
  render: () => renderDemo(demos[4]),
  parameters: { docs: { ...gulpSource(demos[4].previewHtml).docs, description: { story: demos[4].description } } },
};
export const Demo5 = {
  name: '리사이즈',
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
};
export const Demo6 = {
  name: '필수 필드',
  render: () => renderDemo(demos[6]),
  parameters: { docs: { ...gulpSource(demos[6].previewHtml).docs, description: { story: demos[6].description } } },
};
export const Demo7 = {
  name: '글자 수 카운터',
  render: () => renderDemo(demos[7]),
  parameters: { docs: { ...gulpSource(demos[7].previewHtml).docs, description: { story: demos[7].description } } },
};
export const Demo8 = {
  name: '상태',
  render: () => renderDemo(demos[8]),
  parameters: { docs: { ...gulpSource(demos[8].previewHtml).docs, description: { story: demos[8].description } } },
};
export const Demo9 = {
  name: '조합 예시',
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
        story: 'Textarea 최소 높이·글자 수 카운터 위치에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
