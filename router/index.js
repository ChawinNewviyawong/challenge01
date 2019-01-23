var controller = require('../controller/process')
var app = require('express').Router();

app.post('/cal', function (req, res, next) {
    var result = controller.call(req.body.operator, req.body.operand1, req.body.operand2);
    controller.log(req.body.tx_id, req.body.time, result)
    res.status(201);
    
    //appendHeader(res)
    res.json({
        proposition : result.proposition,
        result1Float : result.resultFloat,
        result2Seientific : result.resultSeientific,
        TX_ID : req.body.tx_id
    });
});

module.exports = app;

