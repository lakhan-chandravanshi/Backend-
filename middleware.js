const jwt=require("jsonwebtoken")

const auth = (req,res,next)=>{
const token= req.headers.authorization
if(token){
    jwt.verify(token, 'shhhhh',(err, decoded)=>{
      
        if(decoded){
            req.body.userID=decoded.userID
            next()
        }
        else{
            res.status(200).send({"msg":"plaese Login first"})
        }  
      });
} else{
    res.status(200).send({"msg":"plaese Login first"})
    
}   
}
module.exports={
    auth
}

