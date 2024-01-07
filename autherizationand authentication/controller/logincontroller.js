const loginschema=require('../model/user')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require("dotenv").config();
exports.logincontroller=async(req,res)=>{
    try{
        //fetch the data from the req body;
        const{email,password}=req.body;
        //check user already exist in the database or not
        const response=await loginschema.findOne({email:email});
        
        if(!response){
           return res.status(400).json({message:"user is not exist"})
        }
        const playload={
            email:response.email,
            role:response.role,
            id:response._id
        }
        if(await bcrypt.compare(password,response.password)){
            
            const token=jwt.sign(playload,process.env.JWT_TOKEN ,{expiresIn:"1h"});
            console.log(token);
            
            
           const olderUser=response.toObject();
           olderUser.token=token;
           olderUser.password=undefined;
           olderUser.confirmpassword=undefined;
           console.log(olderUser);
            const option={
                expiresIn:new Date(Date.now()+3*60*60*1000),
                httpsOnly:true
            }

            res.cookie("token",token,option).status(200).json({message:"login successfully",token:token,user:olderUser})
        }
        else{
           return res.status(404).json({message:"password is not match"});
        }

    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error})
    }
}