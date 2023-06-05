function addAndSubtract(firstNum, secondNum, thirdNum) {
    let numberToSubtractFrom = (x, y) => x + y;
    let result = (a, b) => a - b;

    return result(numberToSubtractFrom(firstNum, secondNum), thirdNum);
}

function myMath(firstNum, secondNum, thirdNum) {
    let sum2Numbers = function sum(a, b) {
        return a + b;
    };
    let subtract2Numbers = function subtract(a, b) {
        return a - b;
    };

    return subtract2Numbers(sum2Numbers(firstNum, secondNum), thirdNum);
}

console.log(addAndSubtract(3, 8, 9), myMath(3, 8, 9));
