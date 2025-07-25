# Carreira com IA - Landing Page

Uma landing page moderna e responsiva para promover o método de desenvolvimento de carreira com Inteligência Artificial da Fabi Moratelli.

## 🚀 Funcionalidades

- **Design Moderno**: Interface limpa e profissional com gradientes suaves
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Componentes Reutilizáveis**: Construído com shadcn/ui para máxima flexibilidade
- **Performance Otimizada**: Utilizando Next.js 15 com Turbopack
- **TypeScript**: Código tipado para maior confiabilidade

## 📋 Seções da Landing Page

### 🎯 Hero Section
- Título principal impactante
- Descrição da proposta de valor
- Call-to-action principal

### 🛤️ Jornada com IA
Cards apresentando as 5 etapas do método:
- **Despertar**: Entenda o que é IA e como ela muda o jogo
- **Exploração**: Identifique onde aplicar IA no seu contexto
- **Experimentação**: Comece a usar ferramentas e criar valor
- **Autoridade**: Desenvolva projetos próprios e se posicione
- **Futurabilidade**: Evolua continuamente com visão estratégica

### 👩‍💼 Sobre Fabi Moratelli
Apresentação da especialista e criadora do método

### 🎯 Call-to-Action Final
Convite para fazer o teste de perfil

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes
- **Lucide React** - Ícones
- **Class Variance Authority** - Utilitário para variantes de componentes

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd carreira-com-ia
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout raiz da aplicação
│   └── page.tsx             # Página principal (HomePage)
├── components/
│   └── ui/
│       ├── button.tsx       # Componente Button
│       └── card.tsx         # Componentes Card e CardContent
└── lib/
    └── utils.ts             # Utilitários (função cn para className)
```

## 🎨 Design System

O projeto utiliza um design system baseado em:

- **Cores**: Paleta neutra com tons de cinza e gradientes suaves
- **Tipografia**: Fonte system com hierarquia clara
- **Espaçamento**: Sistema consistente baseado em Tailwind
- **Componentes**: shadcn/ui com customizações para a marca

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Linting do código
```

## 🚀 Deploy

O projeto está configurado para deploy fácil em plataformas como:
- **Vercel** (recomendado)
- **Netlify** 
- **AWS Amplify**

Para deploy na Vercel:
```bash
npm i -g vercel
vercel
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request para sugestões e melhorias.

---

Desenvolvido com ❤️ para promover a democratização da Inteligência Artificial na carreira e negócios.
