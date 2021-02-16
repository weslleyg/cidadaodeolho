import { Router } from "express";
import deputadoController from './controllers/deputadoController';

const router = Router();

router.get('/teste', deputadoController.create);

export { router }

