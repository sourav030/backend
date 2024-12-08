const postModel=require("../models/postModel");
const userModel=require("../models/userModel")

exports.post=async (req,res)=>{
    try{
        const {title,content}=req.body;
        const author=req.id;
        if(!title || !content || !author){
            return res.json({
                succes:false,
                message:"Post is not valid"
            })
        }
        const response= await postModel.create({title,content,author})
        res.json({
            success:true,
            message:"Post Create Successfully"
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            messagee:rr.message
        })
    }
}

exports.GetAllPost=async (req,res)=>{
    try{
        const data=await postModel.find().populate({path:'author' ,select:"-password"});
        console.log(data)
        res.json({
            success:true,
            data
        })

    }catch(err){
        console.log(err);
        res.json({
            success:false,
            messagee:err.message
        })
    }
}