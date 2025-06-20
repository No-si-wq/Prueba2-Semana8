import mongoose from 'mongoose';

const polizasSchema = new mongoose.Schema({
    numeroPoliza: {
        type: String,
        required: true,
        unique: true
    },
    tipoSeguro: {
        type: String,
        required: true,
        enum: ['Salud', 'Auto', 'Vida', 'Hogar', 'Viaje'] 
    },
    titular: {
        type: String,
        required: true,
        trim: true
    },
    monto: {
        type: Number,
        required: true,
        trim: true
    }
})
const Polizas = mongoose.model('Polizas', polizasSchema);
export default Polizas;