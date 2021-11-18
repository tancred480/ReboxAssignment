const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true,
    },
    address:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports=mongoose.model("Userlist",userSchema);

