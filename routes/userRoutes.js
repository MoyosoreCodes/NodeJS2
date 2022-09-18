const express = require('express');
const router = express.Router();


router.get('/home', function(req, res) {
    res.send('user home page')
});

router.get('/', function(req, res) {
    res.send('all users page')
});

router.get('/:id', function(req, res) {
    res.send('single users page')
});

module.exports = router