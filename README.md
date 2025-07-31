# Sistema de Gestão Escolar

Um sistema completo de gestão escolar desenvolvido com HTML, CSS, JavaScript e Node.js, utilizando SQLite como banco de dados local.

## 🎯 Funcionalidades

### 👨‍🏫 Gestão de Professores
- **Cadastro completo** com informações pessoais e profissionais
- **Campos obrigatórios:**
  - Nome completo
  - Data de nascimento
  - Gênero
  - CPF e RG
  - Endereço completo (Rua, Número, Bairro, Cidade, Estado, CEP)
  - Email institucional
  - Telefone
  - Disciplinas que leciona
  - Formação acadêmica
  - Data de admissão
  - Status (Ativo, Licença, Desligado)
- **Funcionalidades:**
  - Listagem com busca por nome
  - Edição de dados
  - Exclusão de registros
  - Validação de CPF e email únicos

### 👨‍🎓 Gestão de Alunos
- **Cadastro completo** com informações pessoais e do responsável
- **Campos obrigatórios:**
  - Nome completo
  - Data de nascimento
  - Gênero
  - CPF (RG opcional)
  - Endereço completo (Rua, Número, Bairro, Cidade, Estado, CEP)
  - Nome do responsável
  - Telefone do responsável
  - Email do responsável
  - Ano de ingresso
  - Status (Ativo, Inativo, Transferido, Concluído)
- **Organização por turmas:**
  - Seleção de turma existente ou criação de nova turma
  - Visualização inicial por turmas cadastradas
  - Filtragem de alunos por turma específica
  - Opção de visualizar todos os alunos
- **Funcionalidades:**
  - Busca por nome
  - Edição de dados
  - Exclusão de registros
  - Validação de CPF único

### 🏫 Gestão de Turmas
- **Cadastro de turmas** com nome, série e ano
- **Funcionalidades:**
  - Criação de turmas durante cadastro de alunos
  - Edição e exclusão de turmas
  - Contagem automática de alunos por turma
  - Proteção contra exclusão de turmas com alunos

### 🔍 Funcionalidades Gerais
- **Interface moderna e responsiva**
- **Busca em tempo real** com ícone de lupa
- **Máscaras automáticas** para CPF, CEP e telefone
- **Validação de formulários** em tempo real
- **Notificações** de sucesso e erro
- **Navegação por abas** entre Professores e Alunos
- **Modais** para cadastro e edição
- **Confirmação** antes de exclusões

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Banco de Dados:** SQLite
- **Estilo:** CSS Grid, Flexbox, Gradientes
- **Ícones:** Font Awesome

## 📁 Estrutura do Projeto

```
sistema-gestao-escolar/
├── backend/
│   ├── server.js          # Servidor Express com rotas da API
│   ├── package.json       # Dependências do Node.js
│   └── escola.db          # Banco de dados SQLite (criado automaticamente)
├── frontend/
│   ├── index.html         # Interface principal
│   ├── styles.css         # Estilos CSS
│   └── script.js          # Lógica JavaScript
└── README.md              # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação e Execução

1. **Extrair o projeto:**
   ```bash
   unzip sistema-gestao-escolar.zip
   cd sistema-gestao-escolar
   ```

2. **Instalar dependências:**
   ```bash
   cd backend
   npm install
   ```

3. **Iniciar o servidor:**
   ```bash
   npm start
   ```

4. **Acessar o sistema:**
   - Abra seu navegador
   - Acesse: `http://localhost:3000`

### Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor em modo desenvolvimento
npm start

# Parar o servidor
Ctrl + C (no terminal)
```

## 📊 Banco de Dados

O sistema utiliza SQLite com as seguintes tabelas:

### Tabela `professores`
- `id` (INTEGER PRIMARY KEY)
- `nome_completo` (TEXT NOT NULL)
- `data_nascimento` (DATE NOT NULL)
- `genero` (TEXT NOT NULL)
- `cpf` (TEXT UNIQUE NOT NULL)
- `rg` (TEXT NOT NULL)
- `endereco_*` (campos de endereço)
- `email_institucional` (TEXT UNIQUE NOT NULL)
- `telefone` (TEXT NOT NULL)
- `disciplinas` (TEXT NOT NULL)
- `formacao_academica` (TEXT NOT NULL)
- `data_admissao` (DATE NOT NULL)
- `status` (TEXT DEFAULT 'Ativo')
- `data_cadastro` (DATETIME DEFAULT CURRENT_TIMESTAMP)

### Tabela `alunos`
- `id` (INTEGER PRIMARY KEY)
- `nome_completo` (TEXT NOT NULL)
- `data_nascimento` (DATE NOT NULL)
- `genero` (TEXT NOT NULL)
- `cpf` (TEXT UNIQUE NOT NULL)
- `rg` (TEXT)
- `endereco_*` (campos de endereço)
- `nome_responsavel` (TEXT NOT NULL)
- `telefone_responsavel` (TEXT NOT NULL)
- `email_responsavel` (TEXT NOT NULL)
- `turma_id` (INTEGER FOREIGN KEY)
- `ano_ingresso` (INTEGER NOT NULL)
- `status` (TEXT DEFAULT 'Ativo')
- `data_cadastro` (DATETIME DEFAULT CURRENT_TIMESTAMP)

### Tabela `turmas`
- `id` (INTEGER PRIMARY KEY)
- `nome` (TEXT UNIQUE NOT NULL)
- `serie` (TEXT NOT NULL)
- `ano` (INTEGER NOT NULL)
- `data_cadastro` (DATETIME DEFAULT CURRENT_TIMESTAMP)

## 🔗 API Endpoints

### Professores
- `GET /api/professores` - Listar todos os professores
- `GET /api/professores/:id` - Obter professor específico
- `GET /api/professores/buscar/:termo` - Buscar professores por nome
- `POST /api/professores` - Cadastrar novo professor
- `PUT /api/professores/:id` - Atualizar professor
- `DELETE /api/professores/:id` - Excluir professor

### Alunos
- `GET /api/alunos` - Listar todos os alunos
- `GET /api/alunos/:id` - Obter aluno específico
- `GET /api/alunos/turma/:turmaId` - Listar alunos por turma
- `GET /api/alunos/buscar/:termo` - Buscar alunos por nome
- `POST /api/alunos` - Cadastrar novo aluno
- `PUT /api/alunos/:id` - Atualizar aluno
- `DELETE /api/alunos/:id` - Excluir aluno

### Turmas
- `GET /api/turmas` - Listar todas as turmas
- `GET /api/turmas/:id` - Obter turma específica
- `POST /api/turmas` - Cadastrar nova turma
- `PUT /api/turmas/:id` - Atualizar turma
- `DELETE /api/turmas/:id` - Excluir turma

## 🎨 Interface

### Design Moderno
- **Gradientes coloridos** para visual atrativo
- **Cards responsivos** para turmas
- **Formulários organizados** em seções
- **Máscaras automáticas** para melhor UX
- **Animações suaves** em hover e transições

### Navegação Intuitiva
- **Abas principais:** Professores e Alunos
- **Busca em tempo real** com ícone de lupa
- **Modais** para cadastro/edição
- **Confirmações** para ações destrutivas
- **Notificações** de feedback

### Responsividade
- **Desktop:** Layout completo com grid
- **Tablet:** Adaptação de colunas
- **Mobile:** Layout vertical otimizado

## 🔧 Solução de Problemas

### Erro: "Porta 3000 já está em uso"
```bash
# Verificar processos na porta 3000
lsof -i :3000

# Matar processo específico
kill -9 <PID>

# Ou usar porta alternativa
PORT=3001 npm start
```

### Erro: "Cannot find module"
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Banco de dados corrompido
```bash
# Remover banco existente (perderá dados)
rm backend/escola.db

# Reiniciar servidor (criará novo banco)
npm start
```

### Problemas de CORS
- O servidor já está configurado para aceitar requisições de qualquer origem
- Certifique-se de acessar via `http://localhost:3000`

## 📝 Notas de Desenvolvimento

### Validações Implementadas
- **CPF único** para professores e alunos
- **Email institucional único** para professores
- **Campos obrigatórios** com validação visual
- **Máscaras automáticas** para formatação
- **Proteção contra exclusão** de turmas com alunos

### Melhorias Futuras
- [ ] Relatórios em PDF
- [ ] Backup automático do banco
- [ ] Sistema de autenticação
- [ ] Dashboard com estatísticas
- [ ] Importação/exportação de dados
- [ ] Histórico de alterações
- [ ] Sistema de notas e frequência

## 👥 Suporte

Para dúvidas ou problemas:
1. Verifique a seção "Solução de Problemas"
2. Confirme se todas as dependências estão instaladas
3. Verifique se a porta 3000 está disponível
4. Consulte os logs do servidor no terminal

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração.

---

**Sistema de Gestão Escolar** - Desenvolvido com ❤️ usando tecnologias web modernas.

