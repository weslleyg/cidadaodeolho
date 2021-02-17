import { Schema, model, Document } from 'mongoose';

interface DeputadoInterface extends Document {
    nome?: string
    partido?: string
    idDeputado?: number
    redesSociais?: [{
        redeSocial?: {
            id?: number
            nome?: string
            url?: string
        },
        url?: string
    }]
}

const DeputadoSchema = new Schema({
    nome: String,
    partido: String,
    idDeputado: {
        type: Number,
        unique: true
    },
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

export default model<DeputadoInterface>('Deputado', DeputadoSchema);