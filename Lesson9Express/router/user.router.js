const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({ extended: false }));
route.use(bodyParser.json());


/**
 * Quary parameter
 */
route.get('/quary-parameter', (req, res)=>{
    const {id,name, age} = req.query;
    res.append("id", "1234");
    res.json({
        "id":id,
        "name":name,
        "age":age,
    });
});

/**
 * Route parameter
 */
route.get('/route-parameter/id/:id/name/:name/age/:age', (req, res)=>{
    const {id,name, age} = req.params;
    res.append("id", "1234");
    res.json({
        "id":id,
        "name":name,
        "age":age,
    });
});

/**
 * Header parameter
 */
route.get('/header-parameter', (req, res)=>{
    const id= req.header("id");
    const name = req.header("name");
    const age = req.header("age");
    
    res.json({
        "id":id,
        "name":name,
        "age":age,
    });
});

/**
 * From/Body parameter api
 */
route.post('/from-parameter', (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    
    res.json({
        "id":id,
        "name":name,
        "age":age,
    });
});

/**
 * From/Body parameter submit by html page.
 */
route.get('/register', (req, res)=>{
    //res.sendFile(path.join(__dirname, '../view', 'register.html'));
    //res.sendFile( __dirname + "/view/" + "register.html" );

    res.sendFile(__dirname +"/view/register.html");
    res.render("register");
});
route.post('/register', (req, res)=>{
    //const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    
    res.send(`Your is: ${name} <br> Age is: ${age}`)
});

module.exports = route;