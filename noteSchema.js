const mongoose= require("mongoose")

const noteSchema=mongoose.Schema({
    "title":{type:String,require:true},
    "body":{type:String,require:true},
    "sub":{type:String,require:true},
    "userID":{type:String,require:true}
})

module.exports={
    noteSchema
}