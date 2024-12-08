const mongoose=require("mongoose")

async function dbConnetion() {
    mongoose.connect("mongodb://localhost:27017/AuthenticationPractice")
    .then(()=>{
        console.log("connection succesfull")
    })
    .catch(err=>console.log(err))
}
module.exports=dbConnetion