const Schema = require('mongoose').Schema;

module.exports = new Schema({
    _id: { type: Schema.Types.ObjectId },
    name: {type: String, required: true},
    diameter: {type: Number, required: true},
    color: {type: String}
  });