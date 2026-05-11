import { prisma } from "../lib/prisma.js";
import cors from "cors";
import express from "express";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  const { title, done } = req.body;

  if (done !== undefined && typeof done !== "boolean") {
    return res.status(400).json({
      message: "O campo done precisa ser true ou false",
    });
  }

  if (!title) {
    return res.status(400).json({
      message: "O título é obrigatório",
    });
  }

  if (typeof title !== "string") {
    return res.status(400).json({
      message: "O título precisa ser uma string",
    });
  }

  if (title.trim() === "") {
    return res.status(400).json({
      message: "O título não pode estar vazio",
    });
  }

  if (!isNaN(Number(title))) {
    return res.status(400).json({
      message: "O título não pode conter apenas números",
    });
  }

  const todoExist = await prisma.todo.findFirst({
    where: {
      title: title.trim(),
      done
    },
  });

  if (todoExist) {
    return res.status(400).json({
      message: "Esta tarefa já existe",
    });
  }

  try {
    const todo = await prisma.todo.create({
      data: {
        title: title.trim(),
        done
      },
    });

    return res.status(201).json(todo);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Erro ao criar tarefa",
    });
  }
});

app.get("/todos", async (_, res) => {
  try {
    const allTodos = await prisma.todo.findMany({
      orderBy: {
        title: "asc",
      },
    });

    return res.status(200).json(allTodos);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Erro ao buscar tarefas",
    });
  }
});

app.delete("/todos/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "ID inválido",
    });
  }

  const todoExists = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todoExists) {
    return res.status(404).json({
      message: "Tarefa não encontrada",
    });
  }
  try {
    const deleteTodo = await prisma.todo.delete({
      where: {
        id,
      },
    });

    return res.status(200).json(deleteTodo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Não foi possivel deletar esta tarefa",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta http://localhost:${port}`);
});
