import {Schema,model} from 'mongoose'

export const A = new Schema({
    name:{
        type:String
    },
    Surname_P:{
        type:String
    },
    Surname_M:{
        type:String
    },
    Rating:{
        type:Number
    }
})

export const modelo = new model('Reprobados',A)