const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Post = require('../models/post')

router.put('/likePost/:userId/:postId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const post = await Post.findById(req.params.postId)
        const secondUser = await User.findOne({username:post.poster})
        post.likes.push(user)
        post.save()
        for (let i = 0; i < secondUser.posts.length; i++) {
            if(String(secondUser.posts[i]._id) === String(post._id)){
                secondUser.posts[i] = post
                secondUser.save()
                return res.send(user)
            }
            
        }
        post.save()
        return res.send(user)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router