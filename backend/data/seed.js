import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
import Polizas from '../models/Polizas.js'
import { polizas } from './SeguroPolizas.js' 

dotenv.config()
await db()

async function seedDB() {
    try{
        await Polizas.insertMany(polizas)
        console.log(colors.green.bold('Los datos se agregaron correctamente!!!'))
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

async function clearDB() {
    try{
        await Polizas.deleteMany()
        console.log(colors.red.bold('Los datos se eliminaron correctamente!!!'))
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

if(process.argv[2] === '--import'){
    seedDB()
} else {
    clearDB()
}
