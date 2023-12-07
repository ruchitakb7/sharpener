require('http').createServer(function(req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('' +
`<html>
  <head></head>
  <body>
    <h1> welcome to node js page </h1>
  </body>
</html>`);
    
}).listen(4009);
