const express=require("express")
// const { connect } = require("http2")
const mongoose =require("mongoose")
const app=express()

const connect=require("./configs/dbs")
const User=require("./models/user")
// const BranchDetail=require("./models/BranchDetail")
// const MasterAccounts=require("./models/MasterAccount")
// const savingsAccount=require("./models/SavingsAccount")


app.use(express.json())
app.listen(3000,async ()=>{
    try{
        await connect()
    }
    catch(err){
        console.log("err");
    }
    console.log("listining in port 3000");
})