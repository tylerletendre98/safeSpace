const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    poster:{type:String, required:true},
    text:{type:String, required:true},
    likes:{type:Array, default:[]},
    comments:{type:Array, default:[]},
    datePosted:{type:Date, default:Date.now()},
})


module.exports = mongoose.model("Post", postSchema)