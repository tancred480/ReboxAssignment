const express=require("express");
const mongoose=require("mongoose");
const userRoute=require("./controllers_routes/userHandle");
const path=require("path");
require("dotenv");
const app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));


app.use("/api/user/",userRoute);

//Database Connection
const mongodbUrl="mongodb+srv://tancred:Tancred%40123@cluster0.iolvh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose.connect(mongodbUrl).then(()=>{console.log("db connected :)");}).catch(e=>{
    console.log("Your new error :-",e);
});



const PORT=4000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Stated on port ${PORT}`);
})