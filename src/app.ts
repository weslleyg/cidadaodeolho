import express from 'express';
import request from 'request';
import { router } from './routes';

import GetData from './middlewares/getData';

const app = express();

app.use(express.json());
app.use(router);

const url = 'http://dadosabertos.almg.gov.br/ws/deputados/em_exercicio?formato=json';

// function getData(url) {
//     request(url, (error, res, body) => {

//     const data = JSON.parse(body)
    
//     for(let i = 0; i < data.list.length; i++) {
//         return {
//             nome: data.list[i].nome,
//             partido: data.list[i].partido,
//         }
//     }

//     return res.send({dados: data.list})
// });
// }

const get = new GetData();

get.getDeputados(url)

console.log(get);

export { app };