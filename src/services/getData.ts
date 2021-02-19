import axios from 'axios';
// Importar deputados, reembolso de verbas por mes e redes sociais

class GetData {
    async getDeputados(url, config) {
        try {
            const dep = await axios.get(url, config)
            
            return {
                dep: dep.data.list,
            };
        } catch(err) {
            console.error(err);
        };
    }

    async getGastos(url, config) {
        try {
            const gastos = await axios.get(url, config)

            return {gastos: gastos.data.list}
        } catch(err) {
            console.log(err);
        };
    };
};

export default GetData;