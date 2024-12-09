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

exports.UserPost=async(req,res)=>{
    try{

        const author=req.id;
        const post= await postModel.find({author}).populate({path:'author',select:"-password"})
        console.log(post)
        res.status(200).json({
            succes:true,
            post
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

exports.DeletePost=async (req,res)=>{
    try{
        const {id}=req.body;
        const post= await postModel.findByIdAndDelete(id)
        console.log(post);
        res.json({
            success:true,
            message:"Delete Successfully",
            post
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}