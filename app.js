import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/Aprobado.controller.js';
import {test2} from './backend/controllers/Reprobado.controller.js';
import { test3 } from "./backend/controllers/Remediales.controllers.js";
dotenv.config();

mongoose.connect(process.env.url)
/*Promesa*/
.then(()=>{
    console.log("Se ha conectado con exito la base de datos, Yay ")
})
.catch(()=>{
    console.log("Oh no, algo a salido mal.")
})

const app = express();
app.use(cors())

app.listen(4000,() =>{
    console.log("Servidor furulando corretamente")
})

test()
test2()
test3()