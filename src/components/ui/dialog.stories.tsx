import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof DialogContent> = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showCloseButton: {
      control: 'boolean',
      description: 'Mostra ou esconde o botão de fechar (X) no canto.',
      name: 'Show Close Button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar Perfil</Button>
      </DialogTrigger>
      <DialogContent {...args} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando
            terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Usuário
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Salvar alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  args: {
    showCloseButton: true,
  },
};
