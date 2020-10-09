// We use BodyParser to pass data with POST method
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 6004;

app.set("view engine", "ejs");
app.set("views", "./views")

// Some Configuration of body parser and conver into json format
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.render('StudentDetails');
});

// Here we tell the server when we recive post request from '/' route what you do !!
app.post('/', (req,res)=>{
    res.render('ViewDetails', {name:req.body.studentname,age: req.body.studentage,university: req.body.studentuni})
})


app.listen(port, ()=>{
    console.log("Server is Running on : " + port);
})