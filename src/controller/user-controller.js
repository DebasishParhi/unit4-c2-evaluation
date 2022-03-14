const express=require("express")

const app=express()

const User=require("../models/user")
app.get ("",async(req,res)=>{
    try{
        const users=await User.find().lean().exec()
        return res.status(201).send({users})
    }
    catch(err){
        return res.status(500).send({messeage:"something went wrong"})
    }
})

module.exports=app