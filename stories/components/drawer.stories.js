import html from '../../src/components/drawer.html?raw';
import {
  extractDemoSections,
  extractApiSections,
  extractAttrElements,
  renderDemo,
  gulpSource,
} from '../lib/gulp-demos.js';

const demos = extractDemoSections(html);
const apis = extractApiSections(html);
const drawerOverlays = extractAttrElements(html, 'data-drawer').join('\n');

const DRAWER_HOST_ID = 'sb-drawer-overlays';

function mountDrawerOverlays() {
  let host = document.getElementById(DRAWER_HOST_ID);

  if (!host) {
    host = document.createElement('div');
    host.id = DRAWER_HOST_ID;
    document.body.appendChild(host);
  }

  // Docs·Canvas에서 트리거만 렌더되므로 패널은 본문에 한 번 마운트
  // Storybook에서는 open-on-load 자동 오픈을 막아 Docs 진입 시 패널이 덮이지 않게 한다.
  if (host.dataset.sbMounted !== 'true') {
    host.innerHTML = drawerOverlays.replace(
      /\sdata-drawer-open-on-load="true"/g,
      '',
    );
    host.dataset.sbMounted = 'true';
  }
}

/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: 'Components/피드백/Drawer',
  id: 'components-drawer',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세 보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는 오른쪽(drawer_placement-right)입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과 role="dialog" · aria-modal 접근성을 제공합니다.',
      },
    },
  },
  decorators: [
    (story) => {
      mountDrawerOverlays();
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
  name: '위치',
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
  name: '크기',
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
  name: '헤더·푸터',
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
  name: '헤더 추가 영역',
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
  name: '메뉴',
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
  name: '로드 시 자동 열기 (옵션)',
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
  name: '중첩 Drawer',
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
  name: '하단 드래그 시트',
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
  name: '백드롭 없음',
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
        story:
          'Drawer 크기·레이어·애니메이션·패널 표면에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
