const express = require("express")
const bodyparser = require("body-parser")
const uniqid = require("uniqid")
const connectDB = require("./config/db")
const apiRouter = require("./routes")


require("dotenv").config();


const app = express()
const port = process.env.PORT  || 4000
app.use(bodyparser.json())

connectDB()
app.use(express.json())
app.use("/api",apiRouter)



app.get("/",(req,res)=>{
   res.send("its working")
})

app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`);
})