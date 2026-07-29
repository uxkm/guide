import html from '../../src/components/form-layout.html?raw';
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
  title: 'Components/폼/FormLayout',
  id: 'components-form-layout',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: "폼 필드를 배치하는 레이아웃 유형입니다. form_vertical · form_horizontal · form_inline과 Grid를 조합해 다양한 폼 구조를 구성할 수 있습니다.",
      },
    },
  },
};

export const Demo0 = {
  name: "세로",
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description,
      },
    },
  },
};
export const Demo1 = {
  name: "가로",
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description,
      },
    },
  },
};
export const Demo2 = {
  name: "가로 — 레이블 정렬·너비",
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description,
      },
    },
  },
};
export const Demo3 = {
  name: "인라인",
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description,
      },
    },
  },
};
export const Demo4 = {
  name: "그리드",
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description,
      },
    },
  },
};
export const Demo5 = {
  name: "너비",
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description,
      },
    },
  },
};
export const Demo6 = {
  name: "액션 영역",
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description,
      },
    },
  },
};
export const Demo7 = {
  name: "전체 예시",
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description,
      },
    },
  },
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
        story: 'Form 레이블·필드·액션 레이아웃에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
