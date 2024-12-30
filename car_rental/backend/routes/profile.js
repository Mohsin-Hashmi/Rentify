
const express= require('express');
const profileRouter= express.Router();

// Forget Password API
profileRouter.post('/profile/forget-password', async(req,res)=>{
    try{
        
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
})