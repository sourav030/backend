
const express=require("express")
const {register,login}= require("../Controllers/userController")
const Router=express.Router();
Router.post("/register",register);
Router.post("/login",login);
module.exports=Router;