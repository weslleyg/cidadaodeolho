import axios from 'axios';
// Importar deputados, reembolso de verbas por mes e redes sociais

class GetData {
    async getDeputados(url, config) {
        try {
            const [dep, gasto] = await axios.all([
                axios.get(url.dep, config),
                axios.get(url.gastos, config)
            ]);

            return {
                dep: dep.data.list,
                gastos: gasto.data.list
            }
        } catch(err) {
            console.error(err)
        }
    }
};

export default GetData;