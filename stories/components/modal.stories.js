import html from '../../src/components/modal.html?raw';
import {
  extractDemoSections,
  extractApiSections,
  extractAttrElements,
  renderDemo,
  gulpSource,
} from '../lib/gulp-demos.js';

const demos = extractDemoSections(html);
const apis = extractApiSections(html);
const modalOverlays = extractAttrElements(html, 'data-modal').join('\n');

const MODAL_HOST_ID = 'sb-modal-overlays';

function mountModalOverlays() {
  let host = document.getElementById(MODAL_HOST_ID);

  if (!host) {
    host = document.createElement('div');
    host.id = MODAL_HOST_ID;
    document.body.appendChild(host);
  }

  if (host.dataset.sbMounted !== 'true') {
    host.innerHTML = modalOverlays;
    host.dataset.sbMounted = 'true';
  }
}

/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: 'Components/피드백/Modal',
  id: 'components-modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '화면 중앙에 표시되는 대화상자 컴포넌트입니다. 확인·폼·상세 보기 등 사용자의 집중이 필요한 작업에 사용하며, role="dialog" · aria-modal로 접근성을 보장합니다.',
      },
    },
  },
  decorators: [
    (story) => {
      mountModalOverlays();
      return story();
    },
  ],
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
  name: '헤더·푸터',
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
  name: '확인 대화상자',
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
  name: '폼',
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
  name: '스크롤 본문',
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
  name: '백드롭 없음',
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
        story: 'Modal 크기·레이어·패딩에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
