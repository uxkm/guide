import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../react/src/components/basic/Button/Button.jsx';

const meta = {
  title: 'Components/Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Button',
    variant: 'primary'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' }
};

export const Disabled: Story = {
  args: { disabled: true }
};
