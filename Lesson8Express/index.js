const app = require('./app')
const PORT = 3000;
const hostname = '127.0.0.1';

app.listen(PORT, () =>{
    console.log(`server is running successfully at http://${hostname}:${PORT}`);
});