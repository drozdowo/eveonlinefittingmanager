/*  Eve Online Fitting Manager   */
/*      ------------------       */
/*  Will handle all backend shit */ 

const express = require("express");
const os = require("os");
var path = require('path');
var CONFIG = require('./serverConfig');
var shipInfo = require('./ShipInfo')
var mongoose = require('mongoose');

mongoose.connect('mongodb://' + CONFIG.dbUser  + ':' + CONFIG.dbPass + '@' + CONFIG.dbLoc  + ':' + CONFIG.dbPort + '/' + CONFIG.dbName);

const app = express();

app.use(express.static("dist"));

app.listen(8080, () =>{
    console.log("Listening on port 8080...");
});

app.use('/api/shipInfo', shipInfo);