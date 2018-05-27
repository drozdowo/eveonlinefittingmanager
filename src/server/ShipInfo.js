var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shipNames = mongoose.model('shipName', new Schema({
    shipName: String
}), 'shipNames');

router.route('/getShips')
.all(function(req, res, next){
    //Intro
    next();
})
.get(function(req, res, next){
    shipNames.find({}, {shipName: 1, _id: 0}, function(err, collection){
        res.send(collection);
    });
})

module.exports = router;