import { prisma } from "../lib/prisma.js";
import cors from "cors";
import express from "express";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  const { title } = req.body;

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

  try {
    const todo = await prisma.todo.create({
      data: {
        title: title.trim(),
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

app.listen(port, () => {
  console.log(`Servidor em execução na porta http://localhost:${port}`);
});
