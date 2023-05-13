function factorOfNumber(number) {
    let factor = 0;
    let output = " ";

    if (number % 10 === 0) {
        factor = 10;
    } else if (number % 7 === 0) {
        factor = 7;
    } else if (number % 6 === 0) {
        factor = 6;
    } else if (number % 3 === 0) {
        factor = 3;
    } else if (number % 2 === 0) {
        factor = 2;
    } else {
    }

    if (factor === 0) {
        output = "Not divisible";
    } else {
        output = `The number is divisible by ${factor}`;
    }
    console.log(output);
}
factorOfNumber(30);