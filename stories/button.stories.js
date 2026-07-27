import buttonHtml from '../src/components/button.html?raw';
import { getDemo, renderHtml, gulpSource } from './lib/gulp-demos.js';

const basic = getDemo(buttonHtml, 0);
const select = getDemo(buttonHtml, 1);

/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: 'Components/기본 요소/Button',
  id: 'components-button',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '사용자 액션을 트리거하는 버튼 컴포넌트입니다. 마크업·클래스는 gulp 가이드(`src/components/button.html`)와 동일합니다.',
      },
    },
  },
};

/** 기본 유형 — gulp src/components/button.html 첫 번째 데모 */
export const Basic = {
  name: basic.heading || '기본 유형',
  render: () => renderHtml(basic.previewHtml),
  parameters: {
    docs: {
      ...gulpSource(basic.previewHtml).docs,
      description: {
        story: basic.description,
      },
    },
  },
};

/** 셀렉트 박스형 */
export const Select = {
  name: select.heading || '셀렉트 박스형',
  render: () => renderHtml(select.previewHtml),
  parameters: {
    docs: {
      ...gulpSource(select.previewHtml).docs,
      description: {
        story: select.description,
      },
    },
  },
};
