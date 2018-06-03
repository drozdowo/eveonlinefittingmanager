var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shipInfo = mongoose.model('shipInfo',new Schema({
    typeId: String,
    typeName: String,
    description: String,
    raceName: String
}),
'shipInfo');

var shipAttributes = mongoose.model('shipAttributes', 
    new Schema({
        typeName: String,
        raceName: String,
        typeID: Number,
        attributeID: Number,
        attributeName: String,
        displayName: String,
        description: String,
        valueInt: Number,
        valueFloat: Number
    }),
'shipAttributes');

router.route('/getShips')
.all(function(req, res, next){
    //Intro
    next();
})
.get(function(req, res, next){
    shipInfo.find({}, function(err, collection){
        res.send(collection);
    }).sort({shipName: 1});
})

router.route('/getShipTypeId/:shipName')
.all((req, res, next)=>{
    next();
})
.get((req,res,next)=>{
    shipInfo.find({shipName: req.params.shipName},
    {typeID: 1, _id: 0},
    function(err, collection){
        if (collection.length > 0){
            res.send(collection);
        } else {
            res.send("{\"error\": \"Invalid Ship Name!\"}");
        }
    });
})


router.route('/getShipAttributes/:typeID')
.all((req, res, next)=>{
    next();
})
.get((req, res, next) => {
    shipAttributes.find({typeID: req.params.typeID}, 
    function(err, collection){
        if (collection.length > 0){
            res.send(collection);
        } else {
            res.send("{\"error\":\"No data found.\"}");
        }
    });
})

module.exports = router;