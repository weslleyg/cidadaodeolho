import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { router } from './routes';

import { redesSociaisController } from "./controllers/redesSociaisController";


const app = express();

app.use(express.json());
app.use(router);

// redesSociaisController.insertRedesSociais()


export { app };