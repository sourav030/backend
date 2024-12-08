const mongoose=require("mongoose")
const { type } = require("os")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const userModel=mongoose.model("userModel", userSchema)
module.exports=userModel