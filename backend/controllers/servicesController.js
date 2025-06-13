import Services from '../models/Services.js';
import { validateObjectId, handleNotFoundError } from '../utils/index.js';

const createService = async (req, res) => {
    if(Object.values(req.body).includes('')){
        const error = new Error('Todos los campos son Obligatorios!!!');
        return res.status(400).json({ msg: error.message });
    }
    try {
        const Service = new Services(req.body);
        await Service.save();
        res.json({msg: 'Servicio Almacenado Correctamente!!!'});
    } catch (error) {
        console.log(error);
    }
}

const getServices = async (req, res) => {
    try{
        const services = await Services.find();
        res.json(services);
    } catch (error) {
        console.log(error)
    }
}

const getServiceById = async (req, res) => {
    const { id } = req.params

    //Validar Object Id (Llamada funcional desde utils)
    if(validateObjectId(id, res)) return

    //Validar que exista desde utils
    const service = await Services.findById(id);
    if(!service) return handleNotFoundError('El Servicio no existe!!!', res)

    //Mostrar el servicio
    res.json(service);
}

const updateService = async (req, res) => {
    const { id } = req.params;

    //Validar Object Id
    if(validateObjectId(id, res)) return 

    //Validar que exista (desde index utils)
    const service = await Services.findById(id);
    if(!service) return handleNotFoundError('El Servicio no existe!!!', res);

    //Escribir valores nuevos
    service.name = req.body.name || service.name;
    service.price = req.body.price || service.price;

    try {
        await service.save();
        res.json({msg: 'Servicio Actualizado Correctamente!!!'})
    } catch (error) {

    }
}

//Eliminar servicio
const deleteService = async (req, res) => {
    const { id } = req.params;

    //Validar un Object Id
    if(validateObjectId(id, res)) return;

    //Validar que exista (desde index utils)
    const service = await Services.findById(id);
    if(!service) return handleNotFoundError('El Servicio no existe!!!', res);

    //Eliminar servicio
    try{
        await service.deleteOne();
        res.json({msg: 'Servicio Eliminado Correctamente!!!'})
    } catch (error) {
        console.log(error);
    }
}

export { createService, getServices, getServiceById, updateService, deleteService }