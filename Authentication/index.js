const exp = require("constants");
const express=require("express")
const cors=require('cors')
require("dotenv").config()
const dbConnetion=require("./config/dbconnection")
const userRoute=require("./route/userRoute")
const postRoute=require("./route/postRoute")

const app=express();
app.use(express.json())
app.use(cors());
app.use("/api/v1",userRoute)
app.use("/api/v1",postRoute)

const PORT= process.env.PORT
dbConnetion()
app.listen(PORT,()=>{
    console.log(`app is runing on port no ${PORT}`)
})