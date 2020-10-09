// Import Express on our main server file.
const express = require('express');
const app = express();

// store port number in variable that we use in the last
const port = 6001;

// In this way we use our CSS and JS files
app.use(express.static('public'))
// Tell our server when you are on home what you have to show.
app.get('/', (req,res)=>{
    res.send("Home")
});
// Tell the sever how you show html file in this url
app.get('/accesshtml', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

// The Section where we run server and tell use the port number
app.listen(port, ()=> {
    console.log(`Your Server in Running on ${port}`);
});