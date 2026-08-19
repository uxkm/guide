import type { Preview } from '@storybook/react-vite';
import { initInteractions } from '@uxkm/interactions';

import '../src/styles.css';
import '../public/styles/uxkm.css';

initInteractions();

const preview: Preview = {
  globalTypes: {
    theme: {
      description: '컴포넌트 예시 테마',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'light'
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme ?? 'light') as 'light' | 'dark' | 'system';

      if (theme === 'system') {
        delete document.documentElement.dataset.theme;
      } else {
        document.documentElement.dataset.theme = theme;
      }

      return Story();
    }
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered',
    options: {
      storySort: {
        includeNames: true,
        order: [
          '소개',
          '설치 및 사용',
          '디자인 토큰',
          '아키텍처',
          '레이아웃',
          ['Container', 'Grid', 'Flex', 'Divider', 'Space', '*'],
          '기본 요소',
          ['Button', 'Typography', 'Icon', 'Link', '*'],
          '데이터 표시',
          [
            'Avatar',
            'Badge',
            'Tag',
            'Card',
            'Table',
            'List',
            'Stat',
            'Calendar',
            'Timeline',
            'Tree',
            '*'
          ],
          '폼',
          [
            'Form Layout',
            'Input',
            'Textarea',
            'Select',
            'Checkbox',
            'Radio',
            'Switch',
            'Slider',
            'Rate',
            'Date Picker',
            'Upload',
            '*'
          ],
          '피드백',
          [
            'Alert',
            'Snackbar',
            'Modal',
            'Drawer',
            'Popover',
            'Tooltip',
            'Progress',
            'Spin',
            'Skeleton',
            'Empty',
            '*'
          ],
          '네비게이션',
          ['Navbar', 'Menu', 'Tabs', 'Breadcrumb', 'Pagination', 'Steps', 'Dropdown', '*'],
          '기타',
          ['Accordion', 'Collapse', 'Carousel', 'Affix', 'Back Top', '*'],
          '파운데이션',
          '패턴',
          '가이드',
          '현황',
          '*'
        ]
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
