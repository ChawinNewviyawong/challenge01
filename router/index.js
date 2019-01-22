var controller = require('../controller/process')
var app = require('express').Router();

app.post('/cal', function (req, res, next) {
    var time = req.body.time;
    var result = controller.call(req.body.operator, req.body.operand1, req.body.operand2);
    res.send(result);
});

module.exports = app;