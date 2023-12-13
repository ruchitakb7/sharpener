const express= require('express')
const app=express()
 
 const parser=require('body-parser')
app.use(parser.urlencoded({extended:false}));

const admin=require('./admin1')
const shop=require('./shop1')

 
 
 app.use('/admin1',admin);
 app.use(shop)
 

 app.use((req,res)=>{
    res.status(404).send('<h1>page not found</h1>')
 })

 app.listen(8124);
