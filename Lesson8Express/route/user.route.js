const express = require("express");
const router = express.Router();

router.get("/login", (req, res) =>{
    res.status
    res.send('login page post route');
    res.end();
});

router.get("/register", (req, res) =>{
    res.send('register page put route');
    res.end();
});

module.exports = router;