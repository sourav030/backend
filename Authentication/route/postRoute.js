const express=require("express");
const auth=require("../middlers/auth")
const {post,GetAllPost}=require("../Controllers/postController")
const postRouter=express.Router();

postRouter.post("/post",auth,post);
postRouter.post("/getpost",auth,GetAllPost)
module.exports=postRouter