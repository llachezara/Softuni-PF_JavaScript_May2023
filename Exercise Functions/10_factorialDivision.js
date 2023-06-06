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
console.log(factorialDivision(6, 2))