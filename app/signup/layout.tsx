import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Criar Conta de Membro | Vinheria Agnello",
  description: "Junte-se à nossa confraria exclusiva. Tenha acesso a rótulos raros e recomendações moldadas ao seu paladar.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
