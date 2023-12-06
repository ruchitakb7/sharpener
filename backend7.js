const http= require('http')

const server = http.createServer((req,res)=>
{
   //console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html')
    if(req.url === '/home')
    res.write("welcomw Home")
    else if(req.url==='/about')
    res.write(" Welcome to About Us page")
    else if(req.url==='/node')
    res.write("Welcome to my Node Js project")
    res.end()
    process.exit();
    
})
server.listen(4000)
