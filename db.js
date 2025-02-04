const mongoose = require("mongoose")
require("dotenv").config()

const main = async()=>{
    try{
    const connection =  mongoose.connect(process.env.mongoURL)
    console.log("mongo connected");
}catch(err){
    console.log(err.message);
}
    console.log("port is runing on 8080");
}
main()

module.exports={
    main
}