<p align="center">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/header/graph.svg?title=Test+Smells+Lab&subtitle=Test+Smells+detection+and+refactoring+with+Jest+and+ESLint&align=left&font=geist-mono&mode=dark" /><img alt="Test Smells Lab" src="https://shieldcn.dev/header/graph.svg?title=Test+Smells+Lab&subtitle=Test+Smells+detection+and+refactoring+with+Jest+and+ESLint&align=left&font=geist-mono&mode=light" /></picture>
</p>

<p align="center"><b>English</b> · <a href="README.md">Português (BR)</a></p>

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

# 📖 About

**Test Smells Lab** is a project for static analysis and refactoring of automated tests focused on identifying and eliminating *Test Smells* (test code anti-patterns).

The repository simulates a user management service (`UserService`) and provides two test suites:
- `test/userService.smelly.test.js`: the initial suite containing deliberate anti-patterns (conditional logic with loops/ifs, silent exception handling via `try/catch`, eager tests with multiple actions, and fragile assertions).
- `__tests__/userService.clean.test.js`: the refactored suite strictly applying the **Arrange, Act, Assert (AAA)** pattern, ensuring linear, atomic tests and full compliance with ESLint static analysis rules (`eslint-plugin-jest`).

The project also includes a comprehensive technical report documenting the analysis and refactoring process in [`Relatorio_Refatoracao_Test_Smells.pdf`](Relatorio_Refatoracao_Test_Smells.pdf).

# 📋 Motivation

Practical assignment for the Software Testing course (PUC Minas) focused on identifying and refactoring Test Smells with Jest and ESLint.

# 💻 Getting Started

### Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/BGLuis/test-smelly.git
   ```

2. Enter the project directory:

   ```sh
   cd test-smelly
   ```

3. Install the dependencies and run tests and linter:

   ```sh
   npm install
   npm test
   npm run lint
   ```

# 🤝 Contributors

<a href="https://github.com/BGLuis/test-smelly/graphs/contributors">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/contributors/BGLuis/test-smelly.svg?title=false&preset=transparent&border=false&mode=dark" /><img alt="Contributors" src="https://shieldcn.dev/contributors/BGLuis/test-smelly.svg?title=false&preset=transparent&border=false&mode=light" /></picture>
</a>

# 📄 License

Distributed under the [MIT](LICENSE) license.
