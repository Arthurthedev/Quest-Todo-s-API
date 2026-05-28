# 🔧 API To-Do List (Node.js + Prisma)

## 📌 Sobre

API REST responsável por gerenciar tarefas (To-Dos), permitindo criar, listar, atualizar e deletar dados persistidos em banco PostgreSQL.

- Esta API foi desenvolvida para funcionar diretamente com o frontend disponível no repositório **To-Do List React**, formando uma aplicação fullstack completa.

---

## Tecnologias

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* TypeScript

---

## ⚙️ Funcionalidades

* ➕ Criar tarefas
* 📄 Listar tarefas
* ❌ Deletar tarefas
* 🔄 Atualizar status (done)
* ✅ Validação de dados

---

## 🔗 Integração com Frontend

Esta API é consumida pelo projeto React disponível em:

👉 https://github.com/Arthurthedev/Projeto-TodoList

⚠️ O frontend depende desta API para funcionar corretamente.

---

## 🔗 Rotas

### Criar tarefa

```http
POST /todos
```

```json
{
  "title": "Estudar Node",
  "done": false
}
```

---

### Listar tarefas

```http
GET /todos
```

---

### Deletar tarefa

```http
DELETE /todos/:id
```

---

### Atualizar tarefa

```http
PATCH /todos/:id
```

```json
{
  "done": true
}
```

---

## 🔧 Como rodar

```bash
git clone https://github.com/Arthurthedev/Quest-Todo-s-API
cd Quest-todo-s-api
npm install
```

### Configure o `.env`

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
```

### Rode o projeto

```bash
npx prisma migrate dev
npx prisma generate
npm run dev
```

---

## 🌐 Servidor

```
http://localhost:3000
```

---

## 💥 Status

✅ CRUD completo
✅ Integração com banco
✅ Integrado ao frontend React

---

