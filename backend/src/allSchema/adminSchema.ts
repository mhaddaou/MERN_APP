import {Schema} from 'mongoose';


const adminSchema = new Schema({
    username: {
        type : String,
        required : true,
        unique : true,
    },
    
    password:{
        type : String,
        required : true,
    }
})
export default adminSchema;