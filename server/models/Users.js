const mongoose = require("mongoose");

UserSchema = new mongoose.Schema({
    name:{type:String,},
    age:{type:Number,},
    email:{type:String,},
})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel 