const express = require('express')
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

module.exports = router