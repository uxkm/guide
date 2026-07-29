import html from '../../src/components/alert.html?raw';
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
  title: 'Components/피드백/Alert',
  id: 'components-alert',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '중요한 정보나 피드백을 사용자에게 전달하는 알림 컴포넌트입니다.',
      },
    },
  },
};

export const Demo0 = {
  name: '기본',
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
  name: '설명만',
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
  name: '아이콘 없음',
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
  name: '크기',
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
  name: '닫기 가능',
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
  name: '액션',
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
  name: '배너',
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
  name: '문맥 속 사용',
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
        story:
          'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다.',
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
        story: 'Alert 패딩·타이포·아이콘·액션에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
