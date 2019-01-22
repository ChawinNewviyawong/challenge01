var controller = require('../controller/process')
var app = require('express').Router();

app.post('/cal', function (req, res, next) {
    res.send('<h1>Hello Node.js</h1>');
});

module.exports = app;