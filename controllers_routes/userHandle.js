const express=require("express");
const Validation=require("./Validation");
const User=require("../models/userModel");

const router=express.Router();

router.post("/user_entry",async(req,res)=>{
    console.log(req.body);
    const {error}=Validation.userEntryValidation(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});
    console.log("pass 1");
    const emailExist=await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send({message:"User with this email already exist!"});
    console.log("pass 2");
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        dob:req.body.dob,
        address:req.body.address
    });

    try {
        const saveUser=await user.save();
        console.log("pass 3");
        res.status(201).send({message:"New User Entry Successfull"});
    } catch (error) {
        res.status(400).send({message:error});
    }
});

router.put("/user_update/:id",async(req,res)=>{
    try {
        const options={new:true};
        const result=await User.findOneAndUpdate({_id:req.params.id},req.body);

        if(!result) return res.send({message:"User Not Found"});

        res.status(201).send({message:"User Data Updated Successfully"});

    } catch (error) {
        res.status(400).send({message:error.message});
    }
});

router.delete("/user_delete/:id",async(req,res)=>{
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        if(!result) return res.status(400).send({message:"User Not Found"});
        res.status(201).send({message:"User Removed Successfully"});
    } catch (error) {
        res.status(400).send({message:error.message});
    }
});

router.get("/get_users_records",async(req,res)=>{
    try {
        const result = await User.find();
        if(!result) return res.status(400).send({message:"No User Found"});
        res.status(201).send({message:result});
    } catch (error) {
        res.status(404).send({message:error.message});
    }
});

module.exports=router;