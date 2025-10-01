import Image from 'next/image';
import tradeMark from '@/assets/images/_.svg';
import { Button } from '../ui/button';

export function PublicFooter() {
  return (
    <footer>
      <div className="container mx-auto px-8 py-12">
        <div className="border-dark-purple flex items-center justify-between border-b-2 pb-8">
          <Image src={tradeMark} alt="Between Rolls" />
          <p className="text-gray-400">Powered by Between Devs.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-6">
          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Plataforma</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Atualizações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mesas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Grupos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Campanhas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Histórias
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Equipe</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Entre em contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cultura
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Suporte</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Começando bem
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Centro de ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status do servidor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Reportar um bug
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Suporte em chat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Downloads</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    iOS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mac
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Windows
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chrome
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold">
              Inscreva-se para receber atualizações!
            </h3>
            <p className="mb-4 text-gray-300">
              Fique por dentro das novidades e das novas campanhas.
            </p>
            <div className="flex items-center">
              <div className="border-dark-purple flex flex-grow items-center rounded-lg border-2 bg-transparent p-1">
                <input
                  type="email"
                  placeholder="Seu discord"
                  className="w-full bg-transparent px-3 py-2 text-white focus:outline-none"
                />
                <Button className="bg-dark-purple hover:bg-dark-purple/80 rounded-md px-6 py-2 font-bold text-white transition-colors duration-300">
                  Enviar
                </Button>
              </div>
              <div className="ml-4 rounded-lg bg-white p-1">
                <div className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-dark-purple border-t-2 pt-8 text-gray-400">
          <p>Copyright @ 2024 Between Devs | Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
