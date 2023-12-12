const express= require('express')
const app=express()
 const http = require('http')

 app.use((req,res,next)=>{

    console.log("one middleware")
    next();
 })
 app.use((req,res,next)=>{
    
    console.log("other middlware")
 })
 const server= http.createServer(app);
 server.listen(8086);
