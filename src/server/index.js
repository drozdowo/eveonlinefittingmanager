/*  Eve Online Fitting Manager   */
/*      ------------------       */
/*  Will handle all backend shit */ 

const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));

app.listen(8080, () =>{
    console.log("Listening on port 8080...");
});

app.get('/', function(req, res){
    console.log('Hit /');
    res.send('hello world');
});

app.get('/api', function(req, res){
    res.send({
        user: 'Todd Reece',
        age: '27'
    });
});