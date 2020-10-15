const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 6008;

let studentSchema = require('./models/students.model');
let studee = studentSchema.find({});

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

app.get('/',(req,res1)=>{
    studee.exec((error,data)=>{
        if(error){
            throw error;
        }
        else{
            res1.render('home', {records:data});
        }
    })    
});

app.post('/', (req,res2)=>{
    const student = studentSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        email: req.body.email,
    })
    student.save((save_error,save_successsfully)=>{
        if(save_error){
            throw save_error
        }else{
            studee.exec((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    res2.render('home', {records:data});
                }
            })   
        }
    });
    
})
app.get('/delete/:id', (req,res3)=>{
    delete_student_id = req.params.id;
    studentSchema.deleteOne({_id: delete_student_id}, (delete_failed,deleted)=>{
        if(delete_failed){
            throw delete_failed
        }
        else{
            console.log('delete !!');
            studee.exec((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    res3.redirect('/');
                }
            });
        }
    });
})
app.listen(port,()=>{
    console.log('Server is running on '+ port);
})