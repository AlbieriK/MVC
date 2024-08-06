import {modelo} from '../models/Aprobado.model.js'

export const test = () => {
    console.log("Servidor 1 en funcionamiento")
}

modelo.create({
    name:"Karim Albieri",
    Surname_P:"Reyes",
    Surname_M:"Cortez",
    Rating:"9"
})
