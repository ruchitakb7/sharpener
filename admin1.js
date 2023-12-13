const express=require('express')
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin1/add-product" method="POST"><input type="text" name="name" placeholder="product name"><input type="number" name="Quantity"><button>Add</button></form>')
   //next();
  // res.redirect('/add-product')
 })
 router.post('/add-product',(req,res,next)=>{
    
    console.log(req.body.name);
   // res.send('<h1> your order has been considered</h1>')
     res.redirect('/')
   
 })
 module.exports=router;