import { Schema, model } from 'mongoose';

const DeputadoSchema = new Schema({
    nome: String,
    partido: String,
    idDeputado: Number,
    redesSociais: [{
        nome: String,
        url: String
    }]
}, {
    timestamps: true,
});

export default model('Deputado', DeputadoSchema);