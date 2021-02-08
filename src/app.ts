import express from 'express';
import { router } from './routes';

import GetData from './middlewares/getData';

const app = express();

app.use(express.json());
app.use(router);

const url = 'http://dadosabertos.almg.gov.br/ws/deputados/em_exercicio?formato=json';

const get = new GetData();

const data = async (url) => {
    const dados = await get.getDeputados(url);

    console.log(dados);
}

data(url);

export { app };