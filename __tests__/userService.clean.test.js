const { UserService } = require('../src/userService');

describe('UserService - Suíte de Testes Refatorada (Clean)', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
    userService._clearDB();
  });

  describe('Criação e Consulta de Usuários', () => {
    test('deve criar um novo usuário com sucesso e definir status ativo quando os dados forem válidos', () => {
      // Arrange
      const nome = 'Fulano de Tal';
      const email = 'fulano@teste.com';
      const idade = 25;

      // Act
      const usuarioCriado = userService.createUser(nome, email, idade);

      // Assert
      expect(usuarioCriado.id).toBeDefined();
      expect(usuarioCriado.nome).toBe(nome);
      expect(usuarioCriado.email).toBe(email);
      expect(usuarioCriado.idade).toBe(idade);
      expect(usuarioCriado.isAdmin).toBe(false);
      expect(usuarioCriado.status).toBe('ativo');
    });

    test('deve recuperar um usuário existente pelo seu identificador único', () => {
      // Arrange
      const usuarioCadastrado = userService.createUser('Beltrano de Tal', 'beltrano@teste.com', 30);

      // Act
      const usuarioBuscado = userService.getUserById(usuarioCadastrado.id);

      // Assert
      expect(usuarioBuscado).toBeDefined();
      expect(usuarioBuscado.id).toBe(usuarioCadastrado.id);
      expect(usuarioBuscado.nome).toBe('Beltrano de Tal');
      expect(usuarioBuscado.status).toBe('ativo');
    });

    test('deve retornar null ao buscar um identificador de usuário inexistente', () => {
      // Arrange
      const idInexistente = 'id-inexistente-12345';

      // Act
      const usuarioBuscado = userService.getUserById(idInexistente);

      // Assert
      expect(usuarioBuscado).toBeNull();
    });
  });

  describe('Desativação de Usuários', () => {
    test('deve desativar com sucesso um usuário comum (não administrador)', () => {
      // Arrange
      const usuarioComum = userService.createUser('Comum', 'comum@teste.com', 30, false);

      // Act
      const resultado = userService.deactivateUser(usuarioComum.id);

      // Assert
      expect(resultado).toBe(true);
      const usuarioAtualizado = userService.getUserById(usuarioComum.id);
      expect(usuarioAtualizado.status).toBe('inativo');
    });

    test('não deve desativar um usuário administrador conforme regra de negócio', () => {
      // Arrange
      const usuarioAdmin = userService.createUser('Admin', 'admin@teste.com', 40, true);

      // Act
      const resultado = userService.deactivateUser(usuarioAdmin.id);

      // Assert
      expect(resultado).toBe(false);
      const usuarioAtualizado = userService.getUserById(usuarioAdmin.id);
      expect(usuarioAtualizado.status).toBe('ativo');
    });

    test('deve retornar false ao tentar desativar um usuário inexistente', () => {
      // Arrange
      const idInexistente = 'id-nao-encontrado';

      // Act
      const resultado = userService.deactivateUser(idInexistente);

      // Assert
      expect(resultado).toBe(false);
    });
  });

  describe('Geração de Relatórios', () => {
    test('deve conter as informações dos usuários cadastrados no relatório gerado', () => {
      // Arrange
      const usuario1 = userService.createUser('Alice', 'alice@email.com', 28);
      const usuario2 = userService.createUser('Bob', 'bob@email.com', 32);

      // Act
      const relatorio = userService.generateUserReport();

      // Assert
      expect(relatorio).toContain('--- Relatório de Usuários ---');
      expect(relatorio).toContain(usuario1.id);
      expect(relatorio).toContain(usuario1.nome);
      expect(relatorio).toContain(usuario2.id);
      expect(relatorio).toContain(usuario2.nome);
      expect(relatorio).toContain('Status: ativo');
    });

    test('deve informar que nenhum usuário está cadastrado quando o sistema estiver vazio', () => {
      // Arrange: banco já limpo pelo beforeEach

      // Act
      const relatorio = userService.generateUserReport();

      // Assert
      expect(relatorio).toContain('--- Relatório de Usuários ---');
      expect(relatorio).toContain('Nenhum usuário cadastrado.');
    });
  });

  describe('Validações de Regras de Negócio e Lançamento de Exceções', () => {
    test('deve lançar erro ao tentar cadastrar usuário menor de 18 anos', () => {
      // Arrange
      const nome = 'Menor de Idade';
      const email = 'menor@email.com';
      const idadeMenor = 17;

      // Act & Assert
      expect(() => {
        userService.createUser(nome, email, idadeMenor);
      }).toThrow('O usuário deve ser maior de idade.');
    });

    test('deve lançar erro quando nome, email ou idade obrigatórios não forem fornecidos', () => {
      // Act & Assert
      expect(() => {
        userService.createUser('', 'semnome@email.com', 20);
      }).toThrow('Nome, email e idade são obrigatórios.');

      expect(() => {
        userService.createUser('Sem Email', '', 20);
      }).toThrow('Nome, email e idade são obrigatórios.');

      expect(() => {
        userService.createUser('Sem Idade', 'semidade@email.com', null);
      }).toThrow('Nome, email e idade são obrigatórios.');
    });
  });
});
