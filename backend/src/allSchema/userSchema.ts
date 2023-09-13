import {Schema} from 'mongoose'

export const userSchema = new Schema({
    username :{
        type : String,
        required : true,
        unique : true,
    },
    email :{
        type : String,
        required : true,
    },
    password : {
        type: String,
        required : true,
    },
})
