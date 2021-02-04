import express from 'express';
import request from 'request';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

const url = 'http://dadosabertos.almg.gov.br/ws/prestacao_contas/verbas_indenizatorias/deputados/26143/2020/2?formato=json';

request(url, (error, res, body) => {
    console.log(body);
});

export { app };