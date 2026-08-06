import type { Preview } from '@storybook/react-vite';

import '../src/styles.css';

const preview: Preview = {
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
          'Introduction',
          ['Overview', 'Getting Started', 'Design Tokens', '*'],
          'Components',
          [
            'Layout',
            ['Container', 'Grid', 'Flex', 'Divider', 'Space', '*'],
            'Basic',
            ['Button', 'Typography', 'Icon', 'Link', '*'],
            'Data Display',
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
            'Form',
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
            'Feedback',
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
            'Navigation',
            ['Navbar', 'Menu', 'Tabs', 'Breadcrumb', 'Pagination', 'Steps', 'Dropdown', '*'],
            'Miscellaneous',
            ['Accordion', 'Collapse', 'Carousel', 'Affix', 'Back Top', '*'],
            '*'
          ],
          '*'
        ]
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
