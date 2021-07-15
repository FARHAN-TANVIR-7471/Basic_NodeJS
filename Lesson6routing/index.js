const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res)=>{
    const handelerReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    };

    if (req.url === '/') {
        handelerReadFile(200,"./views/index.html");
    }else if(req.url === '/about') {
        handelerReadFile(200,"./views/about.html");
    }else if(req.url === '/contact') {
        handelerReadFile(200,"./views/contact.html");
    } else {
        handelerReadFile(404,"./views/error.html");
    }
});

myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
}); 