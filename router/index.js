var controller = require('../controller/process')
var app = require('express').Router();

app.post('/cal', function (req, res, next) {
    var result = controller.call(req.body.tx_id, req.body.operator, req.body.operand1, req.body.operand2);
    controller.log(req.body.time, result)
    res.json(result);
});

module.exports = app;