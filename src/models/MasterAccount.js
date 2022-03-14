const mongoose=require("mongoose")

const masterAccountSchema=new mongoose.Schema({
    balance  :{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})

const MasterAccounts=mongoose.model("masterAccount",masterAccountsSchema)
 module.exports=MasterAccounts

module.exports=BranchDetails