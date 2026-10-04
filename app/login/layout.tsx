import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acessar Adega | Vinheria Agnello",
  description: "Faça login para revisitar seus rótulos guardados e acessar a curadoria direta de Bianca Agnello.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
