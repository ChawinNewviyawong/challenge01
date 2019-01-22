function call(operator, operand1, operand2) {
    
    var result;
    var resultFloat;
    var resultSeientific;
    // var numOperand1 = Number(operand1);
    // var numOperand2 = Number(operand2);
    
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 != 0) {
                result = operand1 / operand2;
            }
            else {
                result = null;
            }
            break;
        case "DIV":
            if (operand2 != 0) {
                result = operand1 / operand2;
                result = Math.round(result);
            }
            else {
                result = null;
            }
            break;
        case "MOD":
            if (operand2 != 0) {
                result = operand1 % operand2;
                
            }
            else {
                result = null;
            }
            break;
        default:
            break;
    }
    resultFloat = Number(result.toFixed(4));
    resultSeientific = resultFloat.toExponential().replace(/e\+?/, ' x 10^')
    return {resultFloat,resultSeientific};
 
}

function log(time) {
    
}

module.exports = {
    call,
    log
}