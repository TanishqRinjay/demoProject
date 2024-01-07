const e = require("express");
const mongoose=require("mongoose");

const signupschema=new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"]
    }
})
module.exports=mongoose.model('signup',signupschema)