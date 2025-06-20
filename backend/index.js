import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import polizasRoutes from './routes/polizasRoutes.js'

//Variable de Entorno
dotenv.config();

//Configuracion de la app
const app = express();

//Leer datos via body
app.use(express.json());

//Conectar a la base de datos
db();

//Configuracion del CORS
const whilelist = [process.env.FRONTEND_URL]

if(process.argv[2] === '--postman'){
    whilelist.push(undefined)
}

const corsOption = {
    origin: function(origin, callback){
        if(whilelist.includes(origin)){
            //Permitir Conexion
            callback(null, true)
        }else{
            //No Permitir Conexion 
            callback(new Error('Error de CORS'))
        }
    }
}
app.use(cors(corsOption))

//Definicion de la ruta
app.use('/api/polizas', polizasRoutes);

//Definicion del puerto
const PORT = process.env.PORT || 4000;

//Ejecutar la app
app.listen(PORT, () => {
    console.log(colors.blue('Servidor corriendo en el puerto:', PORT));
});