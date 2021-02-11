import GetData from "src/services/getData";

const get = new GetData();

const url = 'http://dadosabertos.almg.gov.br/ws/deputados/lista_telefonica?formato=json'


const config = {
    headers: {'User-Agent': 'API'}
};

const insertRedesSociais = async () => {
    const dados = await get.getSocials(url, config);

    for(let i =0; i < dados.social.length; i++) {
        console.log(dados.social[i].redesSociais)
    }
};

export const redesSociaisController = {
    insertRedesSociais
}