const express= require('express')
const app=express()
 const http = require('http')
 const parser=require('body-parser')
app.use(parser.urlencoded({extended:false}));

 app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="name" placeholder="product name"><input type="number" name="Quantity"><button>Add</button></form>')
    next();
 })
 app.use((req,res,next)=>{
    
    console.log(req.body);
   
 })
 const server= http.createServer(app);
 server.listen(3000);
 
