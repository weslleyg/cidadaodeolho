import { dbQuery } from './../services/db';


export type Deputados = {
    id: number;
    nome: string;
    partido: string;
    idDeputado: number;
    redesSociais: [];
}

const insertDeputados = async (deputados: Deputados) => {
    await dbQuery(`INSERT INTO deputados (
        nome,
        partido,
        idDeputado,
        redesSociais
    ) VALUES(?, ?, ?, ?)`, [
        deputados.nome,
        deputados.partido,
        deputados.idDeputado,
        deputados.redesSociais
    ]);

    let response = await dbQuery(`SELECT seq FROM sqlite_sequence WHERE name = "deputados"`);

    return response[0];
};

const listDeputados = async() => {
    const response = await dbQuery(`SELECT * FROM deputados`);
    
    return response as Deputados[];
}

export const deputadosModel = {
    insertDeputados,
    listDeputados
}