import html from '../../src/components/upload.html?raw';
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
  title: 'Components/폼/Upload',
  id: 'components-upload',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '파일 선택·드래그 앤 드롭·업로드 목록·이미지 카드·아바타 업로드 UI를 제공합니다. upload_input은 시각적으로 숨기고 label.upload_trigger · label.upload_dropzone으로 트리거합니다. 버튼형 트리거는 button 대신 span.btn으로 스킨을 적용합니다.',
      },
    },
  },
};

export const Demo0 = {
  name: '버튼 업로드',
  render: () => renderDemo(demos[0]),
  parameters: { docs: { ...gulpSource(demos[0].previewHtml).docs, description: { story: demos[0].description } } },
};
export const Demo1 = {
  name: '드래그 앤 드롭',
  render: () => renderDemo(demos[1]),
  parameters: { docs: { ...gulpSource(demos[1].previewHtml).docs, description: { story: demos[1].description } } },
};
export const Demo2 = {
  name: '파일 목록',
  render: () => renderDemo(demos[2]),
  parameters: { docs: { ...gulpSource(demos[2].previewHtml).docs, description: { story: demos[2].description } } },
};
export const Demo3 = {
  name: '사진 카드',
  render: () => renderDemo(demos[3]),
  parameters: { docs: { ...gulpSource(demos[3].previewHtml).docs, description: { story: demos[3].description } } },
};
export const Demo4 = {
  name: '아바타 업로드',
  render: () => renderDemo(demos[4]),
  parameters: { docs: { ...gulpSource(demos[4].previewHtml).docs, description: { story: demos[4].description } } },
};
export const Demo5 = {
  name: '폼 필드',
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
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
        story: 'Upload 최대 너비·드롭존·카드·목록에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
