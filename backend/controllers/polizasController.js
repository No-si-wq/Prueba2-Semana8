import Polizas from '../models/Polizas.js';
import { validateObjectId, handleNotFoundError } from '../utils/index.js';

const createPoliza = async (req, res) => {
    if(Object.values(req.body).includes('')){
        const error = new Error('Todos los campos son Obligatorios!!!');
        return res.status(400).json({ msg: error.message });
    }
    try {
        const Poliza = new Polizas(req.body);
        await Poliza.save();
        res.json({msg: 'Servicio Almacenado Correctamente!!!'});
    } catch (error) {
        console.log(error);
    }
}

const getPolizas = async (req, res) => {
    try{
        const polizas = await Polizas.find();
        res.json(polizas);
    } catch (error) {
        console.log(error)
    }
}

const getPolizaById = async (req, res) => {
    const { id } = req.params

    //Validar Object Id (Llamada funcional desde utils)
    if(validateObjectId(id, res)) return

    //Validar que exista desde utils
    const poliza = await Polizas.findById(id);
    if(!poliza) return handleNotFoundError('La poliza no existe!!!', res)

    //Mostrar la poliza
    res.json(poliza);
}

const updatePoliza = async (req, res) => {
    const { id } = req.params;

    //Validar Object Id
    if(validateObjectId(id, res)) return 

    //Validar que exista (desde index utils)
    const poliza = await Polizas.findById(id);
    if(!poliza) return handleNotFoundError('La poliza no existe!!!', res);

    //Escribir valores nuevos
    poliza.numeroPoliza = req.body.numeroPoliza || poliza.numeroPoliza;
    poliza.tipoSeguro = req.body.tipoSeguro || poliza.tipoSeguro;
    poliza.titular = req.body.titular || poliza.titular;
    poliza.monto = req.body.monto || poliza.monto;

    try {
        await poliza.save();
        res.json({msg: 'Poliza Actualizado Correctamente!!!'})
    } catch (error) {

    }
}

//Eliminar servicio
const deletePoliza = async (req, res) => {
    const { id } = req.params;

    //Validar un Object Id
    if(validateObjectId(id, res)) return;

    //Validar que exista (desde index utils)
    const poliza = await Polizas.findById(id);
    if(!poliza) return handleNotFoundError('La poliza no existe!!!', res);

    //Eliminar poliza
    try{
        await poliza.deleteOne();
        res.json({msg: 'Poliza Eliminado Correctamente!!!'})
    } catch (error) {
        console.log(error);
    }
}

export { createPoliza, getPolizas, getPolizaById, updatePoliza, deletePoliza }