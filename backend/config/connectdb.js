const mongoose = require('mongoose');

// Comment Added
const connectdb = async () => {
    await mongoose.connect("mongodb+srv://zultaifhassan110:12345@cluster0.tdrxjpi.mongodb.net/Ibexstore");
    console.log("DB created");
}

module.exports = connectdb;
