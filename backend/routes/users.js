const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.post('/newUser', async(req,res)=>{
    try {
        console.log(req.body)
        const user = await User.findOne({$or:[{username:req.body.username},{email:req.body.email}]})
        if(user !== null){
            console.log(user)
            return res.status(400).send('Username already exists')
        }else{
            const newUser = {
                username:req.body.username,
                email:req.body.body.email,
                password:req.body.password,
                dob:req.body.dob,
                firstname:req.body.firstname,
                lastname:req.body.lastname
            }
            newUser.save()
            return res.send(newUser)
        }
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router