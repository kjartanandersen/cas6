const planetService = require('./data_service/PlanetService');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');


app.get('/api/planets', function(req, res) {
    planetService.getAllPlanets( function (planets) {
        return res.status(200).json(planets);
    }, function(err) {
        return res.status(404).json(err);
    });
});

app.get('/api/planets/:planetId/coordinates', function(req, res) {
    const planet_Id = req.params.planetId;
    planetService.getCoordByPlanet(planet_Id, function (planets) {
        return res.status(200).json(planets);
    }, function(err) {
        return res.status(404).json(err);
    });
});


// http://localhost:3000

app.listen(3000, function() {
    console.log('server is listening on http://localhost:3000');
});

module.exports = app;