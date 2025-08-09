const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.post("/usuarios", async (request, response) => {
  const { name, pass, email, dados } = request.body;

  const user = await prisma.Users.create({
    data: {
      name: name,
      password: pass,
      email: email,
      dados: dados,
    },
  });
  response.status(201).send("Criação bem concluida");
});

app.post("/login", async (request, response) => {
  const { name, pass } = request.body;

  const user = await prisma.Users.findUnique({
    where: { name: name },
  });

  if (!user) {
    return response.status(401).json({ message: "Usuario não encontrado" });
  }
  if (user.password !== pass) {
    return response.status(401).json({ message: "Senha incorreta" });
  }

  return response.json({ message: "Logado", user: user });
});

app.listen(3000, () => {
  console.log("Rodando");
});
