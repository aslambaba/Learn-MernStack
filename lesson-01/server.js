const express = require('express');
const app = express();

const port = 6001;

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.send("Home")
});
app.get('/accesshtml', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.listen(port, ()=> {
    console.log(`Your Server in Running on ${port}`);
});