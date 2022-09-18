const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, maxlength:50, minlength:5},
    password:{type:String, required:true,maxlength:25,minlength:8},
    email:{type:String},
    dob:{type:Date},
    firstname:{type:String, required:true},
    lastname:{type:String,required:true},
    posts:{type:Array, default:[]},
    friends:{type:Array, default:[]},
    friendRequests:{type:Array, default:[]}
})

module.exports = mongoose.model("User", userSchema)