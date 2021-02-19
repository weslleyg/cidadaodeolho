import { Router } from "express";
import deputadoController from './controllers/deputadoController';
import gastosController from './controllers/gastosController'

const router = Router();

router.get('/', deputadoController.index);
router.get('/:id', gastosController.index);

export { router }

