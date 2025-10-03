import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';
import { Input } from './input';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      name: 'Label Text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Nome de usuário',
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label {...args} htmlFor="email">
        Email
      </Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};
