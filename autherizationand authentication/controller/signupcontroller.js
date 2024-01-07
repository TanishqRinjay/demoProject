const signup=require("../model/user")
const bcrypt=require("bcrypt")
exports.signupcontroller= async(req,res)=>{
    try{
        //fetch the data from the req body;
        const{fname,lname,email,password,confirmpassword}=req.body;
        //check user is already exist or not
        const response=await signup.findOne({email:email});
        if(!response){
            //validate the password and cnf password
            if(password!=confirmpassword)
            {
                  res.status(400).json({message:"password and confirm password is not same"})
            }
            let hashpassword;
            try{
                hashpassword=await bcrypt.hash(password,10)
            }
            catch(error)
            {
                res.status(500).json({message:"problem in hashing the password",error:error})
            }
            //create the entry in the databse
            const data= new signup({
                fname:fname,
                lname:lname,
                email:email,
                password:hashpassword,
                confirmpassword:hashpassword,
                
            })
            const result=await data.save();
            res.status(200).json({message:"user is created",respnose:result})
        }
        else{
            res.status(400).json({message:"user is already exist"})
        }
    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error})
    }
}