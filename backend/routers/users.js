const { json } = require("express");
const express=require("express");

const router = express.Router();

const {User} = require("../models/user");

router.get("/",async(req,res)=>{
    const userList = await User.find();

    if(!userList){
        return res.status(404).json({message:"error"});
    }
    return res.status(200).send(userList);
});

router.post("/",async(req,res)=>{
    const {firstName , lastName , email , mobile ,dob, gender, city } = req.body;

    let user = new User({
        firstName , lastName , email , mobile ,dob, gender, city
    });
    user = await user.save();

    if(!user){
        return res.status(500).json({message:"user not created"});
    }
    return res.status(201).send(user);

})



module.exports = router;

