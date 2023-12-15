
const express= require('express')
const router= express.Router();
const parser=require('body-parser')
router.use(parser.urlencoded({extended:false}));
const fs=require('fs');
const s=express();
router.get('/login',(req,res)=>{

   res.send(
    `<form action="/send" method="GET">
    <input type="text" name="username" id="name">
    <button id="click">login</button>

    </form>
    <script>
        document.getElementById("click").addEventListener('click',()=>{
            let username=document.getElementById('name').value;
            let p={
                username
            }
            localStorage.setItem('username',JSON.stringify(p.username))
        })
    </script>`
   )

})


router.get('/send',(req,res)=>{

    fs.readFile("c.txt",{encoding: "utf8"},(e,data)=>{
        if (e)
        {
            console.log("e")
            data="No chat exist";
        }
  
   res.send(    
        `  <body> ${data} </body>
        <form action="/" method="POST">
        <input type="text" name="msg" id="msg" required>
        <input type="text" name="user" id="name" readonly>
        <button onclick="add()">send</button>
    
        </form>
        <script>
        function add(){
        document.getElementById("name").value= JSON.parse(localStorage.getItem(localStorage.key(0)));
        }
        </script>  `
   );
   
  
   })
   
})

   router.post('/',(req,res)=>{
    const name=req.body.user;
    const msg=req.body.msg;
console.log(name + ":");
console.log(msg);
fs.appendFile("c.txt", ` ${req.body.user} : ${req.body.msg} ,`,(err)=>{
    if (err) throw err
})
  res.redirect("/send")
   })
module.exports=router;