const express = require('express');
const router = express.Router();
const Win = require('../models/win');
const winSeed = require('../models/winSeed')



//seed
router.get('/seed', (req, res) => {
	Win.deleteMany({}, (error, allWins) => {});

	Win.create(winSeed, (error, data) => {
		res.redirect('/wins');
	});
});

//index
router.get('/', (req, res) => {
    Win.find({}, (error, allWins) => {
    res.render('index.ejs', {
        wins: allWins
    })
})
})

module.exports = router