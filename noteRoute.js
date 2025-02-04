const express=require("express")
const { NoteModel } = require("../noteschemamodel/noteModel")

const noteRoute=express.Router()

//Read
noteRoute.get("/read",async(req,res)=>{
const query = req.query
try{
    const note=await NoteModel.find(query)
    res.status(200).send({"msg":note})
}catch(err){
    res.status(400).send({"msg":err.message})
}
})

//create
noteRoute.post("/createnote",async(req,res)=>{
    const payload=req.body
    try{
     const note = new NoteModel(payload)
     await note.save()
    res.status(200).send({"msg":"note has been created"})
    }catch(err){
    res.status(400).send({"msg":err.message})
    }
})

//delete
noteRoute.delete("/deletenote/:noteID",async(req,res)=>{
    const {noteID}=req.params
    try{
        await NoteModel.findByIdAndDelete({_id:noteID})
    res.status(200).send({"msg":"note has been deleted"})
    }catch(err){
    res.status(400).send({"msg":err.message})
    }
})

//update
noteRoute.patch("/updatenote/:noteID",async(req,res)=>{
    const {noteID}=req.params
    const payload=req.body
    try{
        await NoteModel.findByIdAndUpdate({_id:noteID},payload)
    res.status(200).send({"msg":"note has been deleted"})
    }catch(err){
    res.status(400).send({"msg":err.message})
    }
})
module.exports={
    noteRoute
}