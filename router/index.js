var controller = require('../controller/process')
var app = require('express').Router();

app.post('/cal', function (req, res, next) {
    var time = req.body.time;
    var result = controller.call(req.body.operator, req.body.operand1, req.body.operand2);
    res.status(201);
    
    //appendHeader(res)
    res.json({
        result1Float : result.resultFloat,
        result2Seientific : result.resultSeientific,
        TX_ID : req.body.tx_id
    });
});

module.exports = app;

