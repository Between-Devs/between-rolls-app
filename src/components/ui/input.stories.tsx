import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'aria-invalid': {
      control: 'boolean',
      name: 'aria-invalid (Error State)',
    },
  },
  args: {
    disabled: false,
    'aria-invalid': false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Escreva algo...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Sua senha',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Este input está desabilitado',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'email@invalido.com',
    'aria-invalid': true,
  },
};
