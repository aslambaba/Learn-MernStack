const express = require('express');
const app = express();
const port = 6002;


app.get('/', (req,res)=>{
    res.send("Home - add {/students/12} - to get dynamic data");
});
// WE simple pass params in this way
app.get('/students/:rollno?', (req,res)=>{
    res.send('The Roll No of Aslam Sarfraz is: ' + req.params.rollno);
})
// We Use Advance Multiple Data Routing In this case
app.get('/school/:physics?-:computer?', (req,res)=>{
    res.send('My Lecture are ' + req.params.physics + ' - to - ' + req.params.computer);
})
// Pass Secretly Data - what we put between the abcd <> wxyz is catched by params
app.get('/teacher/abcd*wxyz', (req,res)=>{
    res.send('My Secret Data is ' + req.params[0]);
})


app.listen(port, ()=>{
    console.log("Your Server is running on " + port);
})