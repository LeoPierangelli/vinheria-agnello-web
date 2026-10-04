# 🍷 Vinheria Agnello

**Vinheria Agnello** é uma interface web premium (mockup funcional) para uma adega e confraria exclusiva sob a curadoria da sommelier Bianca Agnello. O projeto foi construído focando em uma estética elegante, tipografia clássica e em otimizações de SEO nativas, sem o uso de frameworks CSS utilitários como o Tailwind.

## 🚀 Tecnologias Utilizadas

- **Next.js (App Router)**: Framework React para renderização Server-Side (SSR) e otimização massiva de SEO.
- **React**: Biblioteca JavaScript para construção da interface e gerenciamento do estado.
- **CSS Modules & Variáveis Globais (Vanilla CSS)**: Estilização pura e altamente modularizada, garantindo máxima performance sem dependências externas.
- **Google Fonts**: *Libre Caslon Text* (serif) e *Hanken Grotesk* (sans-serif) importadas de maneira estrita para garantir estabilidade cross-browser.
- **Material Symbols**: Fontes de ícones minimalistas e modernos do Google.

## 📂 Arquitetura do Projeto

O projeto está estruturado sob a rigorosa **Arquitetura de Componentes** para garantir a manutenibilidade:

```text
meu-projeto-next/
├── app/
│   ├── globals.css          # Design System Global (Variáveis de cor, botões, formulários)
│   ├── layout.tsx           # Layout raiz (Server Component) que injeta o Header e Footer globalmente
│   ├── page.tsx             # Página Home (Server Component) com metadados de SEO otimizados
│   ├── home.module.css      # Estilos isolados para a grade da Home
│   ├── auth.module.css      # Estilos compartilhados entre Login e Signup
│   ├── login/
│   │   ├── layout.tsx       # Metadados de SEO exclusivos do Login
│   │   └── page.tsx         # Página de Login (Client Component)
│   └── signup/
│       ├── layout.tsx       # Metadados de SEO exclusivos de Registro
│       └── page.tsx         # Formulário complexo de Criação de Conta
├── components/
│   ├── Header/
│   │   ├── Header.tsx       # Barra de navegação com lógica de Autenticação
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.tsx       # Rodapé global semântico
│   │   └── Footer.module.css
│   └── Hero/
│       ├── Hero.tsx         # Seção Hero (Client Component com renderização condicional)
│       └── Hero.module.css
```

## 🛠️ Funcionalidades (Mockup state)

O fluxo de dados no momento opera inteiramente em client-side utilizando `localStorage` (com a namespace fechada `vinheria_isLogged`) para simular a experiência real antes da integração com o banco de dados.

- **Fluxo Visitante**: 
  - A *Hero Section* apresenta a mensagem base convidando a participar da confraria.
  - O header disponibiliza os botões padrões e o atalho para a conta.
- **Fluxo Confrade (Autenticado)**:
  - Ao preencher o formulário de Login ou Registro, o sistema marca a sessão local e redireciona automaticamente para a Home.
  - O `<Header />` atualiza de forma reativa, mostrando o botão "SAIR".
  - A *Hero Section* adapta sua UI recomendando o engajamento com o catálogo exclusivo.
- **Validações Ativas de Formulário**:
  - O formulário de Signup bloqueia a submissão caso "Nova Senha" e "Confirmar" divirjam, renderizando erros estilizados em vermelho.
  - O campo de telefone bloqueia proativamente inputs alfabéticos em tempo real.

## 🌍 SEO e Performance (Pente Fino)

- A `page.tsx` principal e os layouts operam estritamente como **Server Components**, entregando o HTML nativo instantaneamente para o Google bot (crawlers).
- Utilização de HTML semântico avançado (`<main>`, `<article>`, `<section>`, `<nav>`).
- Imagens contam com atributos estratégicos como `loading="lazy"` para não afetar o Tempo Total de Bloqueio (TBT).
- Acessibilidade visual melhorada e tags descritivas inseridas via `aria-label` nos links e botões.

## 📦 Como Rodar o Projeto Localmente

1. Certifique-se de ter o **Node.js** (e preferencialmente o npm ou yarn) instalado na sua máquina.
2. Navegue até o diretório raiz do projeto no seu terminal.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra seu navegador em: `http://localhost:3000`

---
*Desenvolvido com excelência, inspirado na rica tradição da cultura do vinho.* 🍷
