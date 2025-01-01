
const express= require('express');
const userAuth= require('../middlewares/auth');
const User = require('../models/User');
const profileRouter= express.Router();
const mongoose= require('mongoose');
const multer= require('multer');
const path= require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
// View Profile API
profileRouter.get('/profile/view',  async(req,res)=>{
    try{
        const loggedInUser= req.user;
        if(!loggedInUser){
            throw new Error("Invalid User");
        }
        res.send(loggedInUser);
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
});

// Update Profile API
profileRouter.post('/profile/create', userAuth, upload.single('profileImage'), async(req,res)=>{
    try{
        const loggedInUser= req.user;
        if(!loggedInUser || !mongoose.Types.ObjectId.isValid(loggedInUser._id)){
            throw new Error("Invalid User");
        }
        
        const user= await User.findById(loggedInUser._id);
        if(!user){
            return res.status(400).json({message: "User Not Found"});
        }
        const{firstName, lastName, about}= req.body;
        const profileImage = req.file ? req.file.path : user.profileImage;

        const updatedUser=await User.findByIdAndUpdate(loggedInUser._id,{
            firstName,
            lastName,
            profileImage,
            about
        },{new:true});
    
        res.status(200).json({
            message: "Profile Updated Succcessfully",
            user: updatedUser
        });
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
});

// Forget Password API
profileRouter.post('/profile/forget-password', async(req,res)=>{
    try{
        
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
})

module.exports= profileRouter;