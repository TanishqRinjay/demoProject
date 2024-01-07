const mongoose=require("mongoose");

require('dotenv').config(); 
const connectdb=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("connected to database")})
    .catch((err)=>{console.log("internal server error",err)})

}
module.exports=connectdb;