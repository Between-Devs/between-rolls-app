import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Between Rolls",
  description: "Plataforma para criar, gerenciar e jogar RPG de mesa online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
