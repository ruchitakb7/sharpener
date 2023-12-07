const fs= require('fs')
const http=require('http')
const requestHandler = (res,req)=>{
   const info=[];
    if(req.url==='/')
    {
        fs.readFile("file.txt" ,{encoding :"utf-8"},(err,data)=>{
            if(err)
            {
                console.log(err)
            }
            console.log("hello" + data);
            res.write('<html')
            res.write(`<body>${data} </body>`)
            res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button>click</button></form></body>')
            res.write('</html')
            return res.end()
        })
        
    }
     if(req.url==="/message" && req.method==="POST")
    {
        
        req.on('data',(chunk)=>{
    
            info.push(chunk)
           
        })
        return req.on('end',()=>{
            const parseinfo=Buffer.concat(info).toString();
          
            const mess=parseinfo.split("=")[1]
            fs.writeFileSync("file.txt",mess)
            res.statusCode=302;
                res.setHeader('Location','/')
                return res.end();
        })            
    }

  //  res.write('<html><body><h3>hello</h3></body></html>')
     res.end();
}
 module.exports=requestHandler;
