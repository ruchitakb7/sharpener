
const express= require('express')
const router= express.Router();
const parser=require('body-parser')
router.use(parser.urlencoded({extended:false}));
const fs=require('fs');
const path=require('path')

router.get('/Homepage',(req,res)=>{

   res.sendFile(path.join(__dirname, '../', 'views' , 'main.html'))
})

router.get('/login',(req,res)=>{
    
    res.sendFile(path.join(__dirname, '../', 'views' , 'login.html'))
})



router.get('/contact',(req,res)=>{

    res.sendFile(path.join(__dirname, '../', 'views' , 'contact.html'))
})
router.post('/success',(req,res)=>{
    res.send("Process Has Been Completed Successfully")
})

router.post('/update',(req,res)=>{
    const name=req.body.user;
    const msg=req.body.msg;
    console.log(name + ":");
     console.log(msg);
     fs.appendFile("y.txt", ` ${req.body.user} : ${req.body.msg} ,`,(err)=>{
    if (err) throw err
})
  res.redirect("/send")
 }) 
 router.get('/send',(req,res)=>{

    fs.readFile("y.txt",{encoding: "utf8"},(e,data)=>{
        if (e)
        {
            console.log("e")
            data="No chat exist";
        }
        res.send(
           
                    `<!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8" />
                            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>Home</title>
                            <style>
                                 div{
                                    border: 2px solid white;
                                    width: 200px;
                                    height: auto;
                                    margin-top:100px;
                                    margin-left: 480px;
                                    padding: 20px;
                                    align-content: center;
                                    background-color: skyblue;
                                }
                            </style>
                        </head>
                    
                             <body> ${data}</body>
                             
                             <div>
                             <form action="/update" method="POST">
                                data
                                Enter Message:
                             <input type="text" name="msg" id="msg" required> <br><br>
                             <input type="hidden" name="user" id="name" readonly> 
                             <button onclick="add()">send</button>
                         
                             </form>
                             </div>
                             <script>
                        
                             function add(){
                             document.getElementById("name").value= JSON.parse(localStorage.getItem(localStorage.key(0)));
                             }
                             </script>  
                             
                     </html>`
                     
        )
        
      //  res.sendFile(path.join(__dirname, '../', 'views' , 'message.html'))
   
   })
   
})

module.exports=router;