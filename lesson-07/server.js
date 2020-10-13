const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 6080;

let studentSchema = require('./models/students.model');

app.use(express.static('assets'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Allied_School', {useNewUrlParser: true, useUnifiedTopology: true});
var con = mongoose.connection;
con.on("Connected" , ()=>{
    console.log("Database Connected")
})

app.get('/',(req,res)=>{
    let getdata = studentSchema.find({});
    console.log(getdata);
    res.render('home', {records: getdata});
});

app.post('/', (req,res)=>{
    const student = studentSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        email: req.body.email,
    })
    student.save();
    res.render('home');
    console.log('Data Saved !!')
})
app.listen(port,()=>{
    console.log('Server is running on '+ port);
})