var controller = require('../controller/process')
var app = require('express').Router();
var dateFormat = require('dateformat')

app.post('/cal', function (req, res, next) {
    
    var operator;
    if (req.body.operator == "div" || req.body.operator == "mod"){
        operator = (req.body.operator).toUpperCase();
    }
    else operator = req.body.operator;
    var time = dateFormat(new Date(), "HH:MM:ss.l");
    if (req.body.operand2 == 0 && (operator == "DIV" || operator == "MOD" || operator == "/")){
        res.status(400);
        res.json({
            error_code: "4",
            error_message: "Divide by 0!"
        });
    }
    var result = controller.call(operator, req.body.operand1, req.body.operand2);
    if (req.body.operand1 == "" || req.body.operand2 == "" || req.body.operand1 == null || req.body.operand2 == null){
        res.status(400);
        res.json({
            error_code: "2",
            error_message: "No Operand Value!"
        });
    }
    if (isNaN(req.body.operand1) || isNaN(req.body.operand2)){
        res.status(400);
        res.json({
            error_code: "3",
            error_message: "Operand Value Incorrect!"
        });
    }
    if (req.body.tx_id == ""){
        res.status(400);
        res.json({
            error_code: "5",
            error_message: "TX_ID can not null!"
        });
    }
    if (isNaN(req.body.tx_id)){
        res.status(400);
        res.json({
            error_code: "6",
            error_message: "TX_ID Incorrect!"
        });
    }
    if (result.code == 400){
        res.status(400);
        res.json({
            error_code: "1",
            error_message: "Operator incorrect!"
        });
    }
    if (res.status != 400) {
        var proposition = req.body.operand1 + " " + req.body.operator + " " + req.body.operand2;
        controller.log(req.body.tx_id, time, proposition, result);
    }
    res.status(201);
    
    //appendHeader(res)
    res.json({
        resultfloat : result.resultFloat,
        resultseientific : result.resultSeientific,
        tx_id : req.body.tx_id
    });
    
});

module.exports = app;