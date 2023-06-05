function oddAndEvenSum(number) {
    let numAsString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = Number(numAsString[i]);

        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}
console.log(oddAndEvenSum(3495892137259234)); 