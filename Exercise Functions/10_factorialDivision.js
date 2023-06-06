function factorialDivision(firstNum, secondNum) {
    let result = calcFactorial(firstNum) / calcFactorial(secondNum);

    function calcFactorial(num) {
        let sum = 1;

        for (let i = 1; i <= num; i++) {
            sum *= i;
        }

        return sum;
    }

    return result.toFixed(2);
}

function factorialDiv(num1, num2) {
    let result = factorialCalc(num1) / factorialCalc(num2);

    function factorialCalc(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorialCalc(num - 1);
        }
    }
    return result.toFixed(2);
}
console.log(factorialDivision(6,2), factorialDiv(6, 2));
