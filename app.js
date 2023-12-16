const express= require('express')
const app=express()
 
 const parser=require('body-parser')
app.use(parser.urlencoded({extended:false}));

const st=require('./routess/start')
//const shop=require('./router/shop')
 
 app.use(st);
 //app.use(shop)
 

 app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
 })

 app.listen(8139);
