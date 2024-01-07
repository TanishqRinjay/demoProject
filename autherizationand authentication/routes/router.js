const express=require('express');
const router=express.Router();

const {signupcontroller}=require('../controller/signupcontroller');
const {logincontroller}=require('../controller/logincontroller');

router.post('/signup',signupcontroller);
router.post('/login',logincontroller);
module.exports=router;