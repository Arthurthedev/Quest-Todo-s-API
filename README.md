# API To-Do List (Node.js + Prisma)

## 🔗 Integração com o Frontend
[![Repositório Frontend](https://img.shields.io/badge/Acessar_Frontend-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/Arthurthedev/Projeto-TodoList)

## Sobre o Projeto

Esta é uma **API REST** responsável por gerenciar tarefas (To-Dos), permitindo a criação, listagem, atualização e exclusão (CRUD) de dados persistidos em um banco relacional PostgreSQL.

Ela foi desenvolvida como o backend dedicado para funcionar diretamente com o frontend em React (disponível no link acima), formando uma aplicação **Fullstack completa**.

---

## Funcionalidades

* **Criar tarefas:** Adição de novas atividades com validação de dados.
* **Listar tarefas:** Retorno de todas as tarefas cadastradas no banco de dados.
* **Atualizar status:** Modificação do status da tarefa (concluída/pendente) via requisição `PATCH`.
* **Deletar tarefas:** Exclusão segura de registros.
* **Validação de dados:** Garantia de integridade das informações recebidas nas requisições.

---

## Aprendizados
O desenvolvimento desta API consolidou conceitos importantes sobre a construção de serviços RESTful, tipagem estática no backend com TypeScript, estruturação de rotas no Express e modelagem/migração de banco de dados relacional utilizando o Prisma ORM.

## Tecnologias Utilizadas

### Backend
![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Banco de dados & ORM
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

---

## Documentação das Rotas (Endpoints)

###  Criar tarefa
```http
POST /todos
```
**Corpo da requisição (JSON):**
```json
{
  "title": "Estudar Node.js",
  "done": false
}
```
### Listar tarefas
```http
GET /todos
```
### Atualizar tarefa
```http
PATCH /todos/:id
```
**Corpo da requisição (JSON):**
```json
{
  "done": true
}
```
### Deletar tarefa
```http
DELETE /todos/:id
```
## Pré-requisitos
- Node.js 18+
- PostgreSQL rodando localmente ou em nuvem
- npm (ou yarn)
---
## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Arthurthedev/Quest-Todo-s-API
cd Quest-Todo-s-API
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto e configure sua string de conexão com o banco de dados:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
```

---

### 4. Rodar as migrations e gerar o cliente Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

---

### 5. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

---

## Como testar a API e visualizar o Banco
Como este projeto é puramente backend, você precisará de algumas ferramentas para interagir com os dados caso não esteja utilizando o frontend integrado.

### Testando as Requisições HTTP
Recomendamos o uso de clientes de API para simular as requisições (GET, POST, PATCH, DELETE). Boas opções incluem:

- Thunder Client (Extensão leve direto no VS Code)

- Postman ou Insomnia

### Visualizando o Banco de Dados
Para visualizar e manipular as tabelas do banco de dados de forma visual, você tem duas opções:

- **Prisma Studio**: Uma interface web nativa do Prisma. Basta rodar o comando abaixo no terminal e acessar http://localhost:5555:
```bash
npx prisma studio
```

- Gerenciadores de Banco de Dados: Softwares como DBeaver ou pgAdmin, conectando através da mesma DATABASE_URL configurada no seu .env.
---
## Licença

Este projeto está sob a licença MIT.

## Autor

**Arthur**
* LinkedIn: [LinkedIn](https://www.linkedin.com/in/arthur-moraes-b44803261/)
* GitHub: [@Arthurthedev](https://github.com/Arthurthedev)
