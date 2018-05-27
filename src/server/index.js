/*  Eve Online Fitting Manager   */
/*      ------------------       */
/*  Will handle all backend shit */ 

const express = require("express");
const os = require("os");
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://eve:t3st@192.168.0.162:27017/test');

var Schema = mongoose.Schema;

var shipNames = mongoose.model('shipName', new Schema(
    {shipName: String}
), 'shipNames');


const app = express();

app.use(express.static("dist"));

app.listen(8080, () =>{
    console.log("Listening on port 8080...");
});

app.route('/api/getShips/')
.all(function(req, res, next){
    //Intro
    next();
})
.get(function(req, res, next){
    shipNames.find({}, {shipName: 1, _id: 0}, function(err, collection){
        res.send(collection);
    });
})