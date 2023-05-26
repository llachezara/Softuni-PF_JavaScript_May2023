function factorOfNumber(number) {
    let remainder;
    let factor = 10;
    while (factor >= 2) {
        remainder = number % factor;
        if (remainder === 0 && factor !== 4 && factor !== 5 && factor !== 8 && factor !== 9) {
            break;
        }

        factor--;
    }
    const output = remainder === 0 ? `The number is divisible by ${factor}` : "Not divisible";
    console.log(output);
}
/*
function factorOfNumber(number) {
    let factor = 0;
    let output = "";

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
*/
factorOfNumber(1643);