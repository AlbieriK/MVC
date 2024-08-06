import { Schema,model } from "mongoose";

const Remediales2 = new Schema({
    Alumno:{
        type:String
    },
    Estado:{
        type:String
    }
})

export const modelo3 = new model('Remediales',Remediales2)