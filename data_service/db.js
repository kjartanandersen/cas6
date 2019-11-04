const coordinateSchema = require('../Models/Coordinate');
const planetSchema = require('../Models/Planet');
const mongoose = require('mongoose');

const connection = mongoose.createConnection({host: process.env.DB}, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Coordiante = connection.model('Coordiante', coordinateSchema);
const Planet = connection.model('Planet', planetSchema );

module.exports = {
    connection,
    Coordiante,
    Planet
  };