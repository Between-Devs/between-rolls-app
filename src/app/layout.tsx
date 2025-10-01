import type { Metadata } from 'next';
import { Mukta, Cinzel_Decorative, Cormorant } from 'next/font/google';
import '@/styles/globals.css';

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mukta',
});

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Between Rolls',
  description: 'Plataforma para criar, gerenciar e jogar RPG de mesa online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark bg-dark-purple">
      <body
        className={`${mukta.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
