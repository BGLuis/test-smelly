<p align="center">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/header/graph.svg?title=Test+Smells+Lab&subtitle=Detecção+e+refatoração+de+Test+Smells+com+Jest+e+ESLint&align=left&font=geist-mono&mode=dark" /><img alt="Test Smells Lab" src="https://shieldcn.dev/header/graph.svg?title=Test+Smells+Lab&subtitle=Detecção+e+refatoração+de+Test+Smells+com+Jest+e+ESLint&align=left&font=geist-mono&mode=light" /></picture>
</p>

<p align="center"><b>Português (BR)</b> · <a href="README.en.md">English</a></p>

<p align="center">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/stars/BGLuis/test-smelly.svg?variant=secondary&size=sm&mode=dark" /><img alt="GitHub Stars" src="https://shieldcn.dev/github/stars/BGLuis/test-smelly.svg?variant=secondary&size=sm&mode=light" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/forks/BGLuis/test-smelly.svg?variant=secondary&size=sm&mode=dark" /><img alt="GitHub Forks" src="https://shieldcn.dev/github/forks/BGLuis/test-smelly.svg?variant=secondary&size=sm&mode=light" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/watchers/BGLuis/test-smelly.svg?variant=secondary&size=sm&mode=dark" /><img alt="Watchers" src="https://shieldcn.dev/github/watchers/BGLuis/test-smelly.svg?variant=secondary&size=sm&mode=light" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/contributors/BGLuis/test-smelly.svg?theme=emerald&size=sm&mode=dark" /><img alt="Contributors" src="https://shieldcn.dev/github/contributors/BGLuis/test-smelly.svg?theme=emerald&size=sm&mode=light" /></picture>
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/license/BGLuis/test-smelly.svg?variant=ghost&size=sm&mode=dark" /><img alt="License" src="https://shieldcn.dev/github/license/BGLuis/test-smelly.svg?variant=ghost&size=sm&mode=light" /></picture>
</p>

<p align="center">
  <img alt="JavaScript" src="https://shieldcn.dev/badge/Language-JavaScript-F7DF1E.svg?logo=javascript&variant=branded&size=sm" />
  <img alt="Node.js" src="https://shieldcn.dev/badge/Runtime-Node.js-5FA04E.svg?logo=nodedotjs&variant=branded&size=sm" />
  <img alt="Jest" src="https://shieldcn.dev/badge/Framework-Jest-C21325.svg?logo=jest&variant=branded&size=sm" />
  <img alt="ESLint" src="https://shieldcn.dev/badge/Tool-ESLint-4B32C3.svg?logo=eslint&variant=branded&size=sm" />
  <img alt="Babel" src="https://shieldcn.dev/badge/Tool-Babel-F9DC3E.svg?logo=babel&variant=branded&size=sm" />
</p>

# 📖 Sobre

O **Test Smells Lab** é um projeto para análise estática e refatoração de testes automatizados com foco na identificação e eliminação de *Test Smells* (anti-padrões em código de teste).

O repositório simula um serviço de gerenciamento de usuários (`UserService`) e disponibiliza duas suítes de testes:
- `test/userService.smelly.test.js`: a suíte inicial com anti-padrões deliberados (lógica condicional com loops/ifs, captura silenciosa de exceções via `try/catch`, testes ansiosos com múltiplas ações e asserções frágeis).
- `__tests__/userService.clean.test.js`: a suíte refatorada que aplica rigorosamente o padrão **Arrange, Act, Assert (AAA)**, garantindo linearidade, testes atômicos e conformidade plena com regras estáticas do ESLint (`eslint-plugin-jest`).

O projeto conta ainda com um relatório técnico detalhado documentando a análise e o processo de refatoração em [`Relatorio_Refatoracao_Test_Smells.pdf`](Relatorio_Refatoracao_Test_Smells.pdf).

# 📋 Motivo

Trabalho prático da disciplina de Teste de Software (PUC Minas) focado na identificação e refatoração de Test Smells com Jest e ESLint

# 💻 Como iniciar

### Requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/BGLuis/test-smelly.git
   ```

2. Entre no diretório do projeto:

   ```sh
   cd test-smelly
   ```

3. Instale as dependências e execute os testes e o linter:

   ```sh
   npm install
   npm test
   npm run lint
   ```

# 🤝 Contribuidores

<a href="https://github.com/BGLuis/test-smelly/graphs/contributors">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/contributors/BGLuis/test-smelly.svg?title=false&preset=transparent&border=false&mode=dark" /><img alt="Contribuidores" src="https://shieldcn.dev/contributors/BGLuis/test-smelly.svg?title=false&preset=transparent&border=false&mode=light" /></picture>
</a>

# 📄 Licença

Distribuído sob a licença [MIT](LICENSE).
