function printNMatrix(number) {

    return createMatrix(number);

    function createMatrix(n) {
        let result = '';

        for (let row = 1; row <= n; row++) {
            for (let column = 1; column <= n; column++) {
                result += n + ' ';
            }
            result += '\n';
        }

        return result;
    }
}
console.log(printNMatrix(5))