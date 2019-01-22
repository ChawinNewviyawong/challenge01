function call(operator, operand1, operand2) {
    
    var result;
    var resultFloat;
    var resultSeientific;
    var code;
    // var numOperand1 = Number(operand1);
    // var numOperand2 = Number(operand2);
    
    switch (operator) {
        case "+":
        operand1 = Number(operand1);
        operand2 = Number(operand2);
            result = operand1 + operand2;
            resultFloat = Number(result.toFixed(4));
            resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
            break;
        case "-":
            result = operand1 - operand2;
            resultFloat = Number(result.toFixed(4));
            resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
            break;
        case "*":
            result = operand1 * operand2;
            resultFloat = Number(result.toFixed(4));
            resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
            break;
        case "/":
            if (operand2 != 0) {
                result = operand1 / operand2;
                resultFloat = Number(result.toFixed(4));
                resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
            }
            else {
                result = null;
            }
            break;
        case "DIV":
            if (operand2 != 0) {
                result = operand1 / operand2;
                result = Math.round(result);
                resultFloat = Number(result.toFixed(4));
                resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
            }
            else {
                result = null;
            }
            break;
        case "MOD":
            if (operand2 != 0) {
                result = operand1 % operand2;
                resultFloat = Number(result.toFixed(4));
                resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
            }
            else {
                result = null;
            }
            break;
        default:
            code=400;
            break;
    }
    
    return {resultFloat,resultSeientific,code};
 
}

function log(time) {
    
}



module.exports = {
    call,
    log
}