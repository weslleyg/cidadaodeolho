import { Schema, model, Document } from 'mongoose';

interface GastosInterface extends Document {
    idDeputado?: Number
    valor?: Number
}

const GastosSchema = new Schema({
    idDeputado: {
        type: Number,
        unique: true
    },
    valor: Number
});

export default model<GastosInterface>('Gastos', GastosSchema);