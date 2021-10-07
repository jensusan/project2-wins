const express = require('express');
const router = express.Router();
const Win = require('../models/win');
const winSeed = require('../models/winSeed')

//seed
router.get('/seed', (req, res) => {
	Win.deleteMany({}, (error, allWins) => {});

	Win.create(winSeed, (error, data) => {
		res.redirect('/');
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
        res.redirect('/');
    });
});

//update
router.put('/:id/likes-index', (req, res) => {
    req.body.likes++
    Win.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedWin) => {
        res.redirect(`/`)
    })
})

router.put('/:id/likes', (req, res) => {
    req.body.likes++
    Win.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedWin) => {
        res.redirect(`/${req.params.id}`)
    })
})

router.put('/:id', (req, res) => {
    console.log(req.body)
    Win.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedWin) => {
        res.redirect(`/`)
    })
})

//create
router.post('/', (req, res) => {
    Win.create(req.body, (err, createdWin) => {
        res.redirect('/')
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
            win: foundWin
        })
    })
})

module.exports = router