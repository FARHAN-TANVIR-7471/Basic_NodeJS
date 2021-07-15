const express = require('express');
const app = express();
const router = require("./route/user.route");

app.use("/api/user",router);

app.get("/", (req, res) =>{
    res.send('Home page get route');
    res.end();
});

app.use((req, res) =>{
    res.send('404! Not found');
    res.end();
});

module.exports = app;