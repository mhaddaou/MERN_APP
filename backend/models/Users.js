const mongoos = require('mongoose');

const UserSchema = new mongoos.Schema({
    name :{
        type : String,
    },
    age:{
        type : Number,
    },
    email : {
        type : String,
    }

})

const UserModel = mongoos.model("users",UserSchema)
module.exports = UserModel;