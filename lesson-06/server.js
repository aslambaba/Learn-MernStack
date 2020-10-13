const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 6006;

mongoose.connect('mongodb://localhost:27017/Aslam_Students', {useNewUrlParser: true, useUnifiedTopology: true});
var con = mongoose.connection;
con.on("Connected" , ()=>{
    console.log("Database Connected")
})

const matricStudent = require('./models/student.model');

app.set('view engine', 'ejs');
app.set("views", "./views")
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.render('home')
});
app.post('/', (req,res)=>{
    const student = matricStudent({
        name: req.body.studentName,
        email: req.body.email,
        city: req.body.city
    });
    student.save();
    console.log('Data Saved Successfully !!')
    res.render('home');
})
app.listen(port, ()=>{
    console.log("Server is running on "+port);
})