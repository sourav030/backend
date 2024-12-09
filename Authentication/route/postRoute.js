const express=require("express");
const auth=require("../middlers/auth")
const {post,GetAllPost,UserPost, DeletePost}=require("../Controllers/postController")
const postRouter=express.Router();

postRouter.post("/post",auth,post);
postRouter.post("/getpost",auth,GetAllPost)
postRouter.post("/Userpost",auth,UserPost);
postRouter.post("/DeletePost",DeletePost)
module.exports=postRouter