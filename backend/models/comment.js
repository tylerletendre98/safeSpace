const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    poster:{type:String, required:true},
    text:{type:String, required:true},
    likes:{type:Array, default:[]},
    replies:{type:Array, defualt:[]},
    datePosted:{type:Date, default:Date.now()},
})

module.exports = mongoose.model("Comment", commentSchema)