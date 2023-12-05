require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('' +
`<html>
  <head></head>
  <body>
    <h1> my name is ruchita</h1>
  </body>
</html>`);
    console.log('my name is ruchita');   
}).listen(4000);
