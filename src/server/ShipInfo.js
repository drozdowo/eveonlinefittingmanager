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

router.route('/getShips')
.all(function(req, res, next){
    //Intro
    next();
})
.get(function(req, res, next){
    shipInfo.find({}, function(err, collection){
        res.send(collection);
    });
})

router.route('/getShipTypeId/:shipName')
.all((req, res, next)=>{

})
.post((req,res,next)=>{
    console.log(req);
})

module.exports = router;