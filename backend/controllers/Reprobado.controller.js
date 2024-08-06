import {modelo} from '../models/Reprobados.model.js'

export const test2 = () => {
    console.log("Servidor 3 en funcionamiento")
}

modelo.create({
    name:"Karim Albieri",
    Surname_P:"Reyes",
    Surname_M:"Cortez",
    Rating:"7"
})
