const express = require('express');
const app = express();
const port = 6003;

app.use(express.static('public'))

// Set View Engine And in the next line we declare the folder 
// where our ejs file store
app.set("view engine", "ejs");
app.set("views", "./views");

// make variable and store object on it that is pass on ejs file
let mydata = {
    name: "Aslam Baba",
    age: 20,
    college: "Superior",
}

app.get('/',(req,res)=>{
    // In render parameters we pass file name where he go and data. 
    res.render('students', {mydata});
})

// In this Route we get data from url and print on ejs file
app.get('/dynamicdata/:name?', (req,res)=>{
    res.render('dynamicdata',{myname: req.params.name})
})
app.listen(port, ()=>{
    console.log("Server is Running on " + port);
})