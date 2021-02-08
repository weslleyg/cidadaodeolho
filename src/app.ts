import express from 'express';
import { router } from './routes';

import GetData from './middlewares/getData';

const app = express();

app.use(express.json());
app.use(router);

const url = {
    dep: 'http://dadosabertos.almg.gov.br/ws/deputados/em_exercicio?formato=json',
    gastos: 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json'
};

const config = {
    headers: {'User-Agent': 'API'}
  };

const get = new GetData();

const data = async (url, config) => {
    const dados = await get.getDeputados(url, config);

    console.log(dados);
}

data(url, config);

export { app };