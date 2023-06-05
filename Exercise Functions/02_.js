function addAndSubtract(firstNum, secondNum, thirdNum) {
    let numberToSubtractFrom = (x, y) => x + y;
    let result = (a, b) => a - b;

    return result(numberToSubtractFrom(firstNum, secondNum), thirdNum);
}
console.log(addAndSubtract(3, 8, 9)); 