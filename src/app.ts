import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { router } from './routes';

import GetData from './services/getData';

const app = express();

app.use(express.json());
app.use(router);

const url = {
    dep: 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json',
    gastos: 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json'
};

const config = {
    headers: {'User-Agent': 'API'}
};

const get = new GetData();

const data = async (url, config) => {
    const dados = await get.getDeputados(url, config);

    for(let i = 0; i < dados.dep.length; i++) {
        return ({
            idDeputado: dados.dep[i].id,
            nome: dados.dep[i].nome,
            partido: dados.dep[i].partido,
            redesSociais: dados.dep[i].redesSociais,
        })
    }
}

data(url, config);

export { app };