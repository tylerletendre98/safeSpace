
const express = require('express');
const Post = require('../models/post')
const router = express.Router();
const User = require('../models/user')

router.post('/newUser', async(req,res)=>{
    try {
        console.log(req.body)
        const user = await User.findOne({$or:[{username:req.body.username},{email:req.body.email}]})
        if(user === null){
            console.log(user)
            const newUser = new User({
                username:req.body.username,
                password:req.body.password,
                email:req.body.email,
                dob:req.body.dob,
                firstname:req.body.firstname,
                lastname:req.body.lastname
            })
            newUser.save()
            return res.send(newUser)
        }else{
            console.log(user)
            return res.status(400).send("Username or Email already in use")
        }
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})


router.post('/login', async(req,res)=>{
    try {
        //searches for user by username and login
        const user = await User.findOne({$or:[{username:req.body.username},{email:req.body.email}]})
        if (user !== null) {
            if(user.password === req.body.password){
                return res.send(user)
            }else{
                return res.status(400).send(`Incorrect password`)
            }
        }else{
            return res.status(400).send(`Username or email does not exist`)
        }
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put('/sendFriendRequest/:userId/:friendId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const friend = await User.findById(req.params.friendId)
        friend.friendRequests.push(user)
        friend.save()
        return res.send(user)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)  
    }
})

router.put('/acceptFriendRequest/:userId/:requestersId', async(req,res)=>{
    try {
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/makePost/:userId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const newPost= new Post({
            poster:user.username,
            text:req.body.text,
        })
        newPost.save()
        user.posts.push(newPost)
        user.save()
        return res.send(user)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router