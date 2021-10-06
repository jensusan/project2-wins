const mongoose = require('mongoose');
const winSchema = new mongoose.Schema({
    author: String,
    text: String
}, {timstamps: true} )

const Win = mongoose.model('Win', winSchema)
module.exports = Win