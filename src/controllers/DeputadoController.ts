import { Request, Response } from 'express';
import { Deputados, deputadosModel } from 'src/models/deputados';
import { badRequest, internalServerError } from 'src/services/utils';
import GetData from '../services/getData';

const get = new GetData();

const url = {
    dep: 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json',
    gastos: 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json'
};

const config = {
    headers: {'User-Agent': 'API'}
};

const data = async (url, config) => {
    const dados = await get.getDeputados(url, config);

    return dados;
};

const insertDeputados = async (req: Request, res: Response) => {
    const dados = await data(url, config);

    if(!dados) {
        return badRequest(res, "Erro em coletar os dados!");
    }

    for(let i = 0; i < dados.dep.length; i++) {
        const deputados = {
            nome: dados.dep[i].nome,
            partido: dados.dep[i].partido,
            idDeputado: dados.dep[i].id,
            redesSociais: dados.dep[i].redesSociais.redeSocial
        } as Deputados

        deputadosModel.insertDeputados(deputados)
            .then(id => {
                res.json({
                    id
                })
            })
            .catch(err => internalServerError(res, err));
    };

};

const listDeputados = async (req: Request, res: Response) => {
    await deputadosModel.listDeputados()
        .then(deputados => { res.json(deputados)})
        .catch(err => internalServerError(res, err));
};

export const deputadosController =  {
    insertDeputados,
    listDeputados
}