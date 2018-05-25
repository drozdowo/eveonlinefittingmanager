/*  Eve Online Fitting Manager   */
/*      ------------------       */
/*  Will handle all backend shit */ 

const express = require("express");
const os = require("os");
var path = require('path');

const app = express();

app.use(express.static("dist"));

app.listen(8080, () =>{
    console.log("Listening on port 8080...");
});

app.route('/api/getShip/:shipId')
.all(function(req, res, next){
    console.log('got getShip: shipID ', req.params);
    next();
})
.get(function(req, res, next){
    console.log('got GET request on getShip: shipID ', req.params);
    if (req.params.shipId === "123"){
        res.send({
            shipName: 'Worm',
            shipType: 'Frigate',
            shipRace: 'Guristas',
            shipSlotLayout: {
                highSlots: 3,
                midSlots: 4,
                lowSlots: 3
            }
        });    
    } else {
        res.send({
            err: 'Unknown Ship ID!'
        })
    }
})