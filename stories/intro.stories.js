/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: '소개',
  id: 'intro',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'HTML/SCSS 가이드(gulp)의 마크업을 Storybook에서 문서화합니다. 소스 코드는 src/components의 gulp HTML과 동일합니다.',
      },
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => {
    const el = document.createElement('div');
    el.className = 'sb-intro';
    el.innerHTML = `
      <h1>UXKM Guide — HTML Storybook</h1>
      <p>가이드는 gulp로 빌드하고, Storybook은 같은 <code>src/</code> HTML 마크업을 보여줍니다.</p>
      <p>컴포넌트 스토리의 Show code에는 gulp <code>src/components</code> 데모 HTML이 표시됩니다.</p>
    `;
    return el;
  },
};
