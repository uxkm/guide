import html from '../../src/components/icon.html?raw';
import {
  extractDemoSections,
  extractApiSections,
  renderDemo,
  gulpSource,
} from '../lib/gulp-demos.js';

const demos = extractDemoSections(html);
const apis = extractApiSections(html);

const galleryMatch = html.match(
  /<section[^>]*gallery-heading[\s\S]*?(<div class="icon_grid">[\s\S]*?<\/div>)\s*<\/section>/i,
);
const galleryHtml = galleryMatch ? galleryMatch[1].trim() : '';
const galleryDescMatch = html.match(
  /id="gallery-heading">[\s\S]*?<p>([\s\S]*?)<\/p>/i,
);
const galleryDescription = galleryDescMatch
  ? galleryDescMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  : '';


/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: 'Components/기본 요소/Icon',
  id: 'components-icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'SVG 인라인 아이콘의 크기, 색상, 정렬을 일관되게 적용하는 기본 요소입니다.',
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
  name: '크기',
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
  name: '색상',
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
  name: '텍스트와 함께',
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
  name: '원형 · 사각 배경',
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
  name: '아이콘 버튼',
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
  name: '펄스',
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
  name: '그룹',
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
  name: '로딩',
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

export const Gallery = {
  name: '자주 쓰는 아이콘',
  tags: ['!dev'],
  render: () =>
    renderDemo({
      previewHtml: `<section class="section">${galleryHtml}</section>`,
      stack: true,
    }),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: galleryDescription,
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
        story: 'Icon 크기·애니메이션에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
