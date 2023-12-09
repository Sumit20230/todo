const express=require('express');
const app=express();
require("dotenv").config();
app.use(express.json());
const PORT=process.env.PORT||4000;
const todoRoutes=require("./Routes/todo")

app.use("/api/v1",todoRoutes);
app.listen(3000,()=>{
    console.log("server is running at 3000");
})
const dbConnect=require("./Config/database");
dbConnect();
app.get("/",(req,res)=>{
    res.send(`<h1> sumit mishra faang</h1>`)
})