const mongoose = require("mongoose")
const { userSchema } = require("./userschema")

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}