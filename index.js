import express from "express";
import 'dotenv/config'
const app=express();
const port=process.env.PORT || 8000 ;


app.get('/',(req,res)=>{
return res.json({message:"hello"})
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})