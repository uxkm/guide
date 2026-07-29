import html from '../../src/components/tabs.html?raw';
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
  title: 'Components/네비게이션/Tabs',
  id: 'components-tabs',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '같은 맥락의 콘텐츠를 탭으로 전환하는 컴포넌트입니다. 라인·카드·필 스킨, 균등 분할·네비 스크롤 레이아웃, 아이콘·배지를 지원합니다.',
      },
    },
  },
};

export const Demo0 = {
  name: '기본 (라인)',
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
  name: '동적 패널',
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
  name: '슬라이드 인디케이터',
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
  name: '균등 분할',
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
  name: '네비 스크롤',
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
  name: '카드',
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
  name: '필',
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
  name: '크기',
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
export const Demo8 = {
  name: '아이콘',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description,
      },
    },
  },
};
export const Demo9 = {
  name: '배지',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description,
      },
    },
  },
};
export const Demo10 = {
  name: '추가 액션',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description,
      },
    },
  },
};
export const Demo11 = {
  name: '스크롤바',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description,
      },
    },
  },
};
export const Demo12 = {
  name: '비활성',
  render: () => renderDemo(demos[12]),
  parameters: {
    docs: {
      ...gulpSource(demos[12].previewHtml).docs,
      description: {
        story: demos[12].description,
      },
    },
  },
};
export const Demo13 = {
  name: '수직',
  render: () => renderDemo(demos[13]),
  parameters: {
    docs: {
      ...gulpSource(demos[13].previewHtml).docs,
      description: {
        story: demos[13].description,
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
        story: 'Tabs 크기·간격·인디케이터에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
