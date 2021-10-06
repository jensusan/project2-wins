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

//new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//delete
router.delete('/:id', (req, res) => {
    Win.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/wins');
    });
});

//update
router.put('/:id', (req, res) => {
    Win.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedWin) => {
        res.redirect(`/wins/${req.params.id}`)
    })
})

//create
router.post('/', (req, res) => {
    Win.create(req.body, (err, createdWin) => {
        res.redirect('/wins')
    })
})

//edit
router.get('/:id/edit', (req, res) => {
    Win.findById(req.params.id, (err, foundWin) => {
        res.render('edit.ejs', {
            win: foundWin
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