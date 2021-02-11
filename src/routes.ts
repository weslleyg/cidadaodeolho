import { Router } from "express";
import { deputadosController } from "./controllers/deputadoController";
import { redesSociaisController } from "./controllers/redesSociaisController";

const router = Router();

router.get('/deputados', deputadosController.listDeputados);

export { router }

