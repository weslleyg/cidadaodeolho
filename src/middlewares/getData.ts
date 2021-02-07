// Importar deputados, reembolso de verbas por mes e redes sociais
import request from "request";

class GetData {
    async getDeputados(url) {

        request(url,(error, res, body) => {
            const data = JSON.parse(body)
            
            if(error) {
                throw new Error('Deu ruim');
            }

            return data
        });

        return
    }
};

export default GetData;