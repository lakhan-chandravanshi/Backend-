const mongoose= require("mongoose")
const { noteSchema } = require("./noteSchema")

const NoteModel=mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}