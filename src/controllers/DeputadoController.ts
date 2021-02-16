import { Request, Response } from 'express';
import { badRequest, internalServerError } from 'src/services/utils';
import GetData from '../services/getData';
import Deputado from '../schemas/deputados';

const get = new GetData();

const url = 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json'


const config = {
    headers: {'User-Agent': 'API'}
};

class deputadoController {
    public async index(req: Request, res: Response): Promise<Response> {
        const deputados = await Deputado.find();

        return res.json(deputados);
    }

    public async create(req: Request, res: Response): Promise<any> {
        const dados = await get.getDeputados(url, config);

        if(!dados) {
            return badRequest(res, "Erro em coletar os dados!");
        }

        for(let i =0; i < dados.dep.length; i++) {
            for(let b = 0; b < dados.dep[i].redesSociais.length; b++) {
                
                const deputados = {
                    nome: dados.dep[i].nome,
                    partido: dados.dep[i].partido,
                    idDeputado: dados.dep[i].id,
                    redesSociais: dados.dep[i].redesSociais[b]
                }

                console.log(deputados)
            }
        }
    }
}

export default new deputadoController()