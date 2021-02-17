import { Schema, model } from 'mongoose';

const DeputadoSchema = new Schema({
    nome: String,
    partido: String,
    idDeputado: Number,
    redesSociais: [{
        redeSocial: {
            id: Number,
            nome: String,
            url: String
        },
        url: String
    }]
}, {
    timestamps: true,
});

export default model('Deputado', DeputadoSchema);