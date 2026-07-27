import designTokensHtml from '../src/design-tokens.html?raw';
import { renderHtml, gulpSource } from './lib/gulp-demos.js';

/** docs 전용 — 가이드 페이지 본문만 표시 (meta 제외) */
function pageBody(html) {
  return html.replace(/<!--\s*@meta[\s\S]*?-->/, '').trim();
}

const body = pageBody(designTokensHtml);

/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: '디자인 토큰',
  id: 'design-tokens',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          '색상·간격·타이포그래피 등 디자인 시스템의 기준 값을 CSS 변수로 관리합니다. 내용은 gulp 가이드(`src/design-tokens.html`)와 동일합니다.',
      },
      ...gulpSource(body).docs,
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => renderHtml(body),
  parameters: gulpSource(body),
};
