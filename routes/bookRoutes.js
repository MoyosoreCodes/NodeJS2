const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookcontroller');

router.get('/home', function(req, res) {
    res.send('book home page')
});

router.get('/', bookController.getAllBooks);
router.get('/id/:id', bookController.getBookById);
router.get('/title/:title', bookController.getBookByTitle);

module.exports = router