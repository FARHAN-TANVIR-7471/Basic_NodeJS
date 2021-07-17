const express = require("express");
const router = require("./router/user.router");
const app = express();

app.get('/', (req, res)=>{
    res.send("I am home route")
});

app.use("/api/user", router);

module.exports = app;