const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { UserModel } = require("../userschemamodel/UserModel")

const userRoute=express.Router()

//Sign up

userRoute.post("/registar",async(req,res)=>{
const {name,email,pass}=req.body
try{
    bcrypt.hash(pass, 5,async(err, hash)=>{
const user=new UserModel({name,email,pass:hash})
 await user.save()
res.status(200).send({"msg":"user has been registar"})
    });
}catch(err){
    res.status(400).send({"msg":err.message})
}
})

//Login route
userRoute.post("/login",async(req,res)=>{
const {email,pass}=req.body
try{
    const user=await UserModel.find({email})
    if(user){
        bcrypt.compare(pass, user[0].pass,(err, result)=>{
            if(result){
             res.status(200).send({"msg":"Login Done!","token":jwt.sign({"userID":user[0]._id}, 'shhhhh')})
            }
            else{
             res.status(200).send({"msg":"Wrong Cridentials!"})
            }
     });
    }
}catch(err){
    res.status(200).send({"msg":err.message})
}
})


module.exports={
    userRoute
}