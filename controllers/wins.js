const express = require('express');
const router = express.Router();
const Win = require('../models/win');

module.exports = router

//index
router.get('/', (req, res) => {
    Win.find({}, (error, allWins) => {
    res.render('index.ejs', {
        wins: allWins
    })
})
})