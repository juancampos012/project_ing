const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    user_name:{
        type: String,
        require: true,
    },
    lastname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
    active_status:{
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        default: "user",
    },
    avatar:{
        type: String,
    }
})

const User = mongoose.model("UserColection", userModel);

module.exports = User;