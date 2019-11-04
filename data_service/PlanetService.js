const planetDb = require('./db').Planet;
const coordDb = require('./db').Coordiante;
const mongoose = require('mongoose');

const getAllPlanets = async (cb, errorCb) => {
    await planetDb.find({}, function(err, planets) {
        if (err) {errorCb(err); }
        else {
            calculated = [];
            for(i = 0; i < planets.length; i++) {
                planet = {
                    // need to add id 
                    
                    _id: planets[i]._id,
                    name: planets[i].name,
                    diameter: planets[i].diameter,
                    color: planets[i].color,
                    }
                calculated.push(planet);
            
            }
            cb(calculated);
        }
    });      
};

const getCoordByPlanet = async (planetId, cb, errorCb) => {
    coordDb.find({"planetId" : planetId}, async function(err, coords) {
        if (err) { errorCb(err); }
        else {
            calculated = [];
            for(i = 0; i < coords.length; i++) {
                coord = {
                    // need to add id 
                    _id: coords[i]._id,
                    latitude: coords[i].latitude,
                    longitude: coords[i].longitude,
                    planetId: coords[i].planetId,
                    
                }
                calculated.push(coord);
            }
            cb(calculated);
        }
    });
};

module.exports = {
    getAllPlanets,
    getCoordByPlanet
}