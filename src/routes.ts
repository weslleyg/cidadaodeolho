import { Router } from "express";
import { insertDeputados } from "./controllers/deputadoController";

const router = Router();

router.get('/deputados', insertDeputados);

export { router }

