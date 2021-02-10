import { Router } from "express";
import { deputadosController } from "./controllers/deputadoController";

const router = Router();

router.get('/deputados', deputadosController.listDeputados);

export { router }

