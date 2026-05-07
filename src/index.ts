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
    return res
      .status(400)
      .send({ message: "O titulo da tarefa é obrigatório" });
  }
  try {
    const todo = await prisma.todo.create({
      data: {
        title,
      },
    });
    return res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Não foi possivel cadastrar um novo item na lista de tarefas",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta http://localhost:${port}`);
});
