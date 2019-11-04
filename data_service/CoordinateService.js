const CoordianteDb = require('./db').Coordiante;

const getAllCoordinates = async (cb, errorCb) => {
    await CoordianteDb.find({}, function(err, coordinates) {
        if (err) {errorCb(err); }
        else {
            calculated = [];
            for(i = 0; i < coordinates.length; i++) {
                coord = {
                    // need to add id 
                    latitude: coordinates[i].latitude,
                    longitude: coordinates[i].longitude,
                    planetId: coordinates[i].planetId,
                    }
                calculated.push(coord);
            
            }
            cb(calculated);
        }
    });      
};

module.exports = {
    getAllCoordinates
}