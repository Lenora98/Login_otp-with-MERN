require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
require('./db/connection')
const PORT=4002;
const router=require("./Routes/router")

//middlewear

app.use(express.json());
app.use(cors());
app.use(router)

app.get("/",(req,res)=>{
    res.status(200).json("server start")

})

app.listen(PORT,()=>{
    console.log(`server start at port ${PORT}`)
})


