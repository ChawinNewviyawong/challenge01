function call(id, operator, operand1, operand2) {

    if (typeof operand1 != "number") {
        operand1 = parseInt(operand1);
    }
    if (typeof operand2 != "number") {
        operand2 = parseInt(operand2);
    }

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

    var Json = {
        tx_id: id,
        proposition: operand1 + " " + operator + " " + operand2,
        result1: result.toFixed(4),
        result2: result
    }

    var time = new Date();

    return Json;
}

function log(time, result) {
    var out_time = new Date();
    console.log(result.tx_id, time, result.proposition, result.result1, result.result2, out_time);
}

module.exports = {
    call,
    log
}