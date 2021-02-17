import { Router } from "express";
import deputadoController from './controllers/deputadoController';

const router = Router();

router.get('/', deputadoController.index);

export { router }

