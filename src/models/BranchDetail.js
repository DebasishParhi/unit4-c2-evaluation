const mongoose=require("mongoose")

const branchDetailsSchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC :{type:Number,required:true},
    MICR :{type:Number,required:true},
   
},{
    versionKey:false,
    timestamps:true
})

const BranchDetails=mongoose.model("branchdetails",branchDetailsSchema)

module.exports=BranchDetails