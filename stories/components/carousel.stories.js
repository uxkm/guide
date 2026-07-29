import html from '../../src/components/carousel.html?raw';
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
  title: 'Components/기타/Carousel',
  id: 'components-carousel',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Swiper 라이브러리 기반 슬라이드 컴포넌트입니다. 표준 swiper · swiper-wrapper · swiper-slide 마크업을 사용하며, 슬라이드 콘텐츠는 card · tag · btn 등 기존 컴포넌트를 조합합니다.',
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
  name: '페이드',
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
  name: '자동 재생',
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
  name: '무한 루프',
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
  name: '슬라이드 per view',
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
  name: '슬라이드 간격',
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
  name: '페이지네이션',
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
  name: '분수 페이지네이션',
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
  name: '프로그레스 페이지네이션',
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
  name: '커스텀 페이지네이션',
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
  name: '그리드',
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
  name: '커버플로우',
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
  name: '커버플로우 · 축소',
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
  name: '썸네일 갤러리',
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
export const ApiData = {
  name: '데이터 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story:
          'Swiper 동작(루프·자동재생·이펙트·썸네일 등)을 제어하는 data-* 속성입니다.',
      },
    },
  },
};
export const ApiClasses = {
  name: '클래스 · 스킨',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story:
          'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·스킨입니다.',
      },
    },
  },
};
export const ApiTokens = {
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[3]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: 'Carousel 내비게이션·도트·커버플로우에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
