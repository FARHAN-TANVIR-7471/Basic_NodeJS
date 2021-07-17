const app = require('./app');
const PORT = 3001;
const hostname = '127.0.0.1';

app.listen(PORT, ()=>{
    console.log(`surver is running successfully at http://${hostname}:${PORT}`);
});