import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema({
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
const Services = mongoose.model('Services', servicesSchema);
export default Services;