import { dbQuery } from './../services/db';

export type RedesSociais = {
    id: number;
    nome: string;
    url: string;
    idDeputado: number;
}

const insertRedesSociais = async (redesSociais: RedesSociais) => {
    await dbQuery(`INSERT INTO redesSociais (
        nome,
        url,
        idDeputado,
    ) VALUES(?, ?, ?)`, [
        redesSociais.nome,
        redesSociais.url,
        redesSociais.idDeputado
    ]);
};

export const redesSociaisModel = {
    insertRedesSociais
};