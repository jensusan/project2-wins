const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
// const Log = require('./models/log')
const PORT = process.env.PORT;
const methodOverride = require('method-override');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//routes
const winsController = require('./controllers/wins')
app.use('/wins', winsController)

//listener
app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})