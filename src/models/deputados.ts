export type Deputados = {
    id: number;
    nome: string;
    partido: string;
    idDeputado: number;
    redesSociais: [{
        redeSocial: {
            idSocial: number;
            nome: string;
            url: string;
        },
    }];
}