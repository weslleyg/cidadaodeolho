import { Request, Response } from "express";
import Gastos from '../schemas/gastos';
import GetData from "src/services/getData";

const get = new GetData();

const config = {
    headers: {'User-Agent': 'API'}
};

class gastosController {
    public async index(req: Request, res: Response): Promise<any> {
        
        const id = req.params.id
        let soma = null
        console.log(id)

        for(let i = 0; i < 12; i++) {
            const url = `http://dadosabertos.almg.gov.br/ws/prestacao_contas/verbas_indenizatorias/deputados/${id}/2019/${i}?formato=json`
            const dados = await get.getGastos(url, config);

            for(let x = 0; x < dados.gastos.length; x++) {
                    soma = soma + dados.gastos[x].valor
            }
        }

        const gastos = {
            idDeputado: id,
            valor: parseInt(soma)
        }
        
        try {
            await Gastos.create(gastos)
        } catch(err) {

        }

        const result = await Gastos.find()

        return res.json(result)

    }; 
};

export default new gastosController()