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

//show
router.get('/:id', (req, res) => {
    Win.findById(req.params.id, (err, foundWin) => {
        res.render('show.ejs', {
            win: foundWin,
            index: req.params.id
        })
    })
})

module.exports = router