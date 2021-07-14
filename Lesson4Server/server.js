const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Hello</h1>')
    res.write('<h2>Farhan Tanvir</h2>')
    res.end();
});

myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});