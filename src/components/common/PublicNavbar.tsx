import Image from 'next/image';
import logo from '@/assets/images/logo-between-devs.png';
import tradeMark from '@/assets/images/_.svg';
import { Button } from '../ui/button';
import { ArrowBigRight } from 'lucide-react';

export function PublicNavbar() {
  return (
    <header className="flex w-full items-center justify-between px-17 py-4">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="" className="w-27" />
        <Image src={tradeMark} alt="" />
      </div>
      <nav>
        <ul className="flex gap-25 text-lg font-normal">
          <li>O projeto</li>
          <li>Sobre nós</li>
          <li>Entre em contato</li>
        </ul>
      </nav>
      <Button>
        <ArrowBigRight />
        Abra o App
      </Button>
    </header>
  );
}
