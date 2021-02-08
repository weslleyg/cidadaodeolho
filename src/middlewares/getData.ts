import axios from 'axios';
// Importar deputados, reembolso de verbas por mes e redes sociais

class GetData {
    async getDeputados(url) {
        try {
            const res = await axios.get(`${url}`, {
                headers: {
                    'User-Agent': 'chrome'
                }
            });

            return res.data
        } catch(err) {
            console.error(err)
        }
    }
};

export default GetData;