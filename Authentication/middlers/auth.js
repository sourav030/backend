const userModel=require("../models/userModel")

const jwt=require("jsonwebtoken")

 const auth= async (req,res,next)=>{
    try{

        const {token}=req.headers;
        
        if(!token){

            return res.json({
                success:false,
                message:"token nhi mila auth main",
                token
            })
            
        }
        
        const {id}=jwt.verify(token,process.env.SECRET)
       
        req.id=id
        next();

    }catch(err){

        console.log(err);
        res.json({
            success:false,
            message:err.message
        })
        
    }
}
module.exports=auth