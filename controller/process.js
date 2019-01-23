var dateFormat = require('dateformat')
var fs = require('file-system');
var csvWriter = require('csv-write-stream')
var writer = csvWriter({sendHeaders: false});
function call(operator, operand1, operand2) {
    
    var result;
    var resultFloat;
    var resultSeientific;
    var code;
    
    switch (operator) {
        case "+":
        operand1 = Number(operand1);
        operand2 = Number(operand2);
            result = operand1 + operand2;
            resultFloat = Number(result.toFixed(4));
            resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
            break;
        case "-":
            result = operand1 - operand2;
            resultFloat = Number(result.toFixed(4));
            resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
            break;
        case "*":
            result = operand1 * operand2;
            resultFloat = Number(result.toFixed(4));
            resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
            break;
        case "/":
            if (operand2 != 0) {
                result = operand1 / operand2;
                resultFloat = Number(result.toFixed(4));
                resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
            }
            else {
                result = null;
            }
            break;
        case "DIV":
            if (operand2 != 0) {
                result = operand1 / operand2;
                result = Math.floor(result);
                resultFloat = Number(result.toFixed(4));
                resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
            }
            else {
                result = null;
            }
            break;
        case "MOD":
            if (operand2 != 0) {
                result = operand1 % operand2;
                resultFloat = Number(result.toFixed(4));
                resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
            }
            else {
                result = null;
            }
            break;
        default:
            code=400;
            break;
    }
    proposition = operand1 + " " + operator + " " + operand2;
    resultFloat = Number(result.toFixed(4));
    resultSeientific = resultFloat.toExponential(4).replace(/e\+?/, ' x 10^')
    return {resultFloat, resultSeientific, code};

}

function log(tx_id, time, proposition, result) {
    var out_time = dateFormat(new Date(), "HH:MM:ss.l");
    console.log(tx_id, time, proposition, result.resultFloat, result.resultSeientific, out_time);

    if (!fs.existsSync('log.csv'))
        writer = csvWriter({ headers: ["TX_ID", "TIME", "PROPOSITION", "RESULT_FLOAT", "RESULT_SEIENTIFIC", "OUT_TIME"]})
    else 
        writer = csvWriter({sendHeaders: false});
    writer.pipe(fs.createWriteStream('log.csv',  {flags: 'a'}))
    writer.write({
        TX_ID: tx_id,
        TIME: time,
        PROPOSITION: proposition,
        RESULT_FLOAT: result.resultFloat,
        RESULT_SEIENTIFIC: result.resultSeientific,
        OUT_TIME: out_time})
    writer.end()
}

module.exports = {
    call,
    log
}