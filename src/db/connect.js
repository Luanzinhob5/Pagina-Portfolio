const mongoose = require('mongoose');

const connectDB = (uri) => {
    return mongoose.connect(uri)
    .then(() => console.log("Conectado a DB"))
    .catch((err) => console.log(`ERROR: ${err}`))
};

module.exports = connectDB;


