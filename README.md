# Find People - Sistema de Gerenciamento de Usuários

[![CI/CD](https://github.com/fergmauricio/people-list-challenge/actions/workflows/ci.yml/badge.svg)](https://github.com/fergmauricio/people-list-challenge/actions)
[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-%233178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-%23646CFF)](https://vitejs.dev/)
[![Testes](https://img.shields.io/badge/testes-unitários%20%2B%20e2e-%2344CC11)](https://testing-library.com/)

## Sobre o Projeto

Este projeto é um **React Challenge** proposto em alguns processos seletivos para contratação de **React Frontend Developers**.

Achei a proposta do desafio interessante e resolvi praticar criando a minha versão, implementando não apenas os requisitos básicos, mas também algumas features extras.

**Resultado:** Uma aplicação completa, bem testada e pronta para produção!

![Preview da Aplicação](https://via.placeholder.com/800x400/811AC0/FFFFFF?text=Find+People+-+Gerenciamento+de+Usuários)

## Funcionalidades Implementadas

### ✅ **Requisitos do Desafio**

- [x] Listagem de usuários buscando da API randomuser.me
- [x] Comportamento responsivo para Mobile e Desktop
- [x] Testes unitários dos principais componentes que contém lógica de negócio
- [x] Busca em tempo real por nome, sobrenome e idade
- [x] Visualização de perfil detalhado
- [x] Paginação completa, mostrando 10 usuários por página

### 🚀 **Features Extras**

- **Tema escuro/claro** com persistência \*\*
- **Design totalmente responsivo** (mobile → desktop)
- **Performance otimizada** com debounce e code splitting
- **Testes completos** (unitários + E2E)
- **CI/CD** com GitHub Actions
- **Smooth Animations** com Framer Motion

## 🛠 Stack Tecnológica

**Frontend**

- React 19 + TypeScript
- Vite
- React Router

**Gerenciamento de Estado**

- React Query
- Hooks Customizados

**Estilização & UI**

- Sass + CSS Modules
- Framer Motion
- Lucide React

**Qualidade & Testes**

- Jest + React Testing Library (Testes unitários)
- Playwright (Testes E2E)
- ESLint + TypeScript

**Ferramentas de Desenvolvimento**

- Storybook
- GitHub Actions (CI/CD)

## Destaques Técnicos

### **Arquitetura Escalável**

```typescript
// Hooks customizados para lógica reutilizável
const { users, searchTerm, isLoading } = useUsers();
```

### **Performance Otimizada**

- Debounce de busca (400ms)
- Code splitting com React.lazy
- Memoização de componentes
- Bundle otimizado com tree shaking

### **Experiência do Usuário**

- Loading skeletons durante carregamento
- Estados de erro customizados
- Transições suaves entre temas
- Feedback visual imediato

## Como Executar

### **Instalação**

```
# Clonar o repositório
git clone https://github.com/fergmauricio/people-list-challenge
cd people-list-challenge

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Executar testes
npm test
npm run test:e2e
```

### **Scripts Disponíveis**

```
npm run dev         # Servidor de desenvolvimento
npm run build       # Build de produção
npm run preview     # Preview do build
npm test            # Testes unitários
npm run test:e2e    # Testes end-to-end
npm run lint        # Análise de código
npm run storybook   # Storybook
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/              # Componentes de base
│   │   ├── Button/      # Botões
│   │   ├── Input/       # Campos de entrada
│   │   ├── Pagination/  # Paginação
│   │   └── Loading/     # Estados de carregamento
│   └── user/            # Componentes específicos
│       ├── UserCard/    # Visualização mobile
│       ├── UserTable/   # Visualização desktop
│       └── SearchHeader/# Interface de busca
├── hooks/               # Hooks customizados
│   ├── useUsers.ts      # Gerenciamento de usuários
│   ├── useDebounce.ts   # Otimização de busca
│   └── useTheme.ts      # Gerenciamento de tema
├── pages/               # Páginas/rotas
│   ├── Home/            # Listagem de usuários
│   └── UserDetails/     # Detalhes do usuário
├── services/            # Serviços de API
├── types/               # Definições TypeScript
└── test/                # Utilitários de teste
```

## Pipeline CI/CD

```
- Testes Unitários → Testes E2E → Build → Deploy
- Automatizado em cada push/PR
- Matriz de testes multi-navegador
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

## 🙏 Agradecimentos

- RandomUser.me pela API de dados de usuários
- Comunidades React e TypeScript
- Leandro Lopes [github/d3vlopes] - Autor do Desafio.
