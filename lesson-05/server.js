const mongooes = require('mongoose');
// MongoDB Connection to Locally Database enter name of any database after "localhost:27017/"
mongooes.connect('mongodb://localhost:27017/Programmers', {useNewUrlParser: true, useUnifiedTopology: true});
var con = mongooes.connection;

// Generate Scema and Define what type of data are store in collection 
const Schema = mongooes.Schema;

var nameSchema = Schema({
    name: String,
});

var namemodel = mongooes.model('Programmer', nameSchema); 

var student = new namemodel({
    name: 'Aslam Baba',
})

con.on("Connected" , ()=>{
    console.log("Database Connected")
})

con.once('open', ()=>{
    student.save();
    console.log("Data Saved !!" + student)
})
