var mongoose = require('mongoose');

module.exports = mongoose.model('Users', { //esquema, Users es la coleccion, se genera modelo y se exporta
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});