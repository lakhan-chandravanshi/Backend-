const express=require("express")
const { main } = require("./db")
const { userRoute } = require("./Routes/userRoute")
const { noteRoute } = require("./Routes/noteRoute")
const { auth } = require("./middleware/middleware")
const cors = require("cors")
require("dotenv").config()

const app=express()

 app.use(express.json())
app.use(cors())
app.use("/user",userRoute)
app.use(auth)
app.use("/note",noteRoute)

app.listen(process.env.port,main)

