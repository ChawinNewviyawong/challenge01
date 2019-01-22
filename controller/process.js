function call(operator, operand1, operand2) {
    var result;
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
        default:
            break;
    }
    result = result.toFixed(4);
    return result;
}

function log(time) {
    
}

module.exports = {
    call,
    log
}