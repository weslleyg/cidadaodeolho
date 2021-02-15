import { Request, Response } from "express";
import { RedesSociais, redesSociaisModel } from "src/models/redesSociais";
import GetData from "src/services/getData";

const get = new GetData();

const url = 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json'


const config = {
    headers: {'User-Agent': 'API'}
};

const insertRedesSociais = async () => {
    const dados = await get.getSocials(url, config);

    for(let i =0; i < dados.social.length; i++) {
        for(let b = 0; b < dados.social[i].redesSociais.length; b++) {
            
            const redes = {
                nome: dados.social[i].redesSociais[b].redeSocial.nome,
                url: dados.social[i].redesSociais[b].url,
                idDeputado: dados.social[i].id
            } as RedesSociais
            console.log('ta ok');
            await redesSociaisModel.insertRedesSociais(redes);
        }
    }
};

export const redesSociaisController = {
    insertRedesSociais
}