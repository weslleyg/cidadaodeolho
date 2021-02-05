import express from 'express';
import request from 'request';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

const url = 'http://dadosabertos.almg.gov.br/ws/deputados/em_exercicio?formato=json';

request(url, (error, res, body) => {

    const data = JSON.parse(body)
    
    for(let i = 0; i < data.list.length; i++) {
        console.log({
            nome: data.list[i].nome,
            partido: data.list[i].partido,
        });
    }
});

export { app };