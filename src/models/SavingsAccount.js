const mongoose=require("mongoose")

const SavingsAccountSchmea=new mongoose.Schema({
    account_number :{type:Number,required:true},
    balance :{required:true},
    interestRate :{required:true},

},{
    versionKey:false,
    timestamps:true
})

const savingsAccount=mongoose.model("savingaccount",SavingsAccountSchmea)
module.exports=savingsAccount