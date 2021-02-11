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

    async getSocials(url, config) {
        try {
            const social = await axios.get(url, config)

            return {social: social.data.list}
        } catch(err) {
            console.log(err);
        };
    };
};

export default GetData;