const { request } = require('express');
const express = require('express');
const { findById } = require('../models/user');
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
        // searchs to see if you already send a friend request to the person
        const filteredFriendRequests = user.friendRequests.filter(friendRequestUsername => friendRequestUsername.username === friend.username)
        console.log(filteredFriendRequests)
        if(filteredFriendRequests.length === 0){
                friend.friendRequests.push(user)
                // user.friendRequests.push(friend)
                user.save()
                friend.save()
                return res.send(user)
        }else{
            return res.status(400).send(`Friend request already sent to ${friend.username}`)
        }
        // for (let i = 0; i < friend.friendRequests.length; i++) {
        //     console.log(friend.friendRequests[i])
        //     if(user.username !== friend.friendRequests[i].username){
        //         friend.friendRequests.push(user)
        //         user.friendRequests.push(friend)
        //         user.save()
        //         friend.save()
        //         return res.send(user)
        //     }else{
        //         return res.status(400).send(`Friend request already sent to ${friend.username}`)
        //     }
        // }
        
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)  
    }
})

router.put('/acceptFriendRequest/:userId/:requestersId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const requester = await User.findById(req.params.requestersId)
        user.friends.push(requester)
        requester.friends.push(user)
        const newFriendRequests = user.friendRequests.filter((friend)=> friend._id !== requester._id)
        user.friendRequests = newFriendRequests
        const newFriendRequestList = requester.friendRequests.filter((friend)=> friend._id !== user._id)
        requester.friendRequests = newFriendRequestList
        user.save()
        requester.save()
        return res.send(user)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router