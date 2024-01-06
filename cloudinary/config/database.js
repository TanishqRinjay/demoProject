const mongoose=require('mongoose');
require("dotenv").config();
exports.conectDB=()=>{
    
        mongoose.connect(process.env.mongodb_url)
        .then(()=>{
            console.log("Connected to database");
        })
        .catch((err)=>{
            console.log(err);
        })
    
}