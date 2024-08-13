import Express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const app = Express();

const prisma = new PrismaClient();

app.use(bodyParser.json())

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello, World!" });
});

app.get("/saldo/:cpf", async (req: Request, res: Response) => {
  const { cpf } = req.params;

  try {
    const simulation = await prisma.fgtsSimulation.findFirst({
      where: { document: cpf },
    });

    if (!simulation) {
      return res.status(404).json({ message: "CPF não encontrado." });
    }

    const isSaldoDisponivel = simulation.avaibleBalance > 0;

    return res.status(200).json({
      cpf,
      saldoDisponivel: isSaldoDisponivel,
      saldo: simulation.avaibleBalance,
      mensagem: isSaldoDisponivel
        ? "Saldo disponível para saque."
        : "Saldo insuficiente.",
    });
  } catch (error) {
    console.error("Erro ao consultar saldo:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
});

export default app;
