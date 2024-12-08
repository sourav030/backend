const mongoose=require('mongoose')
const userModel=require("../models/userModel")
const bcrypt = require('bcrypt');
const validator = require("email-validator");
var jwt = require('jsonwebtoken');
 exports.register=async (req,res)=>{

    try{
    const {name,username,email,password}=req.body;
    if(!password || !name || !username){
        return res.json({
            success:false,
            message:"Something missing"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const ans=validator.validate(email)

    if(!ans){
        return res.json({
            success:false,
            message:"email is not valid"
        })
    }

    const resposne=await userModel.create({name,email, username,password:hashedPassword})
    
    res.json({
        success:"true",
        message:"register Succesfully"
    })

    }catch(err){
        console.log(err)
        res.json({
            success:false,
            message:err.message
        })
    }

}

exports.login= async (req,res)=>{
    try{

        const {email,password}=req.body;
        const user= await userModel.findOne({email})
        if(!user){
            return res.json({
                success:false,
                message:"user does not exits"
            })
        }
       const checkPassword= await bcrypt.compare(password,user.password);
       if(!checkPassword){
        return res.json({
            success:false,
            message:"Password is not Valid"
        })
       }
       const id=user._id
       const token= jwt.sign({id},process.env.SECRET)
       res.json({
        success:true,
        token
       })      
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:err.message
        })
    }
}