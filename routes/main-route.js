const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
});

router.get('/works', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'works.html'));
});

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});


module.exports = router;