import html from '../../src/components/empty.html?raw';
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
  title: 'Components/피드백/Empty',
  id: 'components-empty',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '데이터가 없거나 검색 결과가 없을 때 빈 상태를 안내하는 Empty 컴포넌트입니다. 기본 아이콘·설명·액션 버튼 조합을 지원하며 role="status"로 접근성을 보장합니다.',
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
  name: '액션',
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
  name: '커스텀 이미지',
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
  name: '설명만',
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
  name: '블록 · 컨테이너',
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

export const ApiMarkup = {
  name: '마크업',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: apis[0].description,
      },
    },
  },
};
export const ApiClasses = {
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
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
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: 'Empty 간격·아이콘·설명에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
