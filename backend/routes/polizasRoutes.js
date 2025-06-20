import express from 'express'; 
import { createPoliza, getPolizas, getPolizaById, updatePoliza, deletePoliza } from '../controllers/polizasController.js';

const router = express.Router();

router.route('/')
    .post(createPoliza) 
    .get(getPolizas)

router.route('/:id')
    .get(getPolizaById) 
    .put(updatePoliza)
    .delete(deletePoliza)

export default router; 