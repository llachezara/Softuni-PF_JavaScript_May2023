function bombNumbers(arrayOfNumbers, arrayWithNumAndPower) {
    let bombNum = arrayWithNumAndPower.shift();
    let powerInRange = arrayWithNumAndPower.shift();

    let sumOfRemainingNums = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {

        let currElement = arrayOfNumbers[i];
        let indexOfCurrElement = arrayOfNumbers.indexOf(currElement);

        if (currElement === bombNum) {
            let startIndex = indexOfCurrElement - powerInRange;
            let numsToDelete = 1 + 2 * powerInRange;

            if (startIndex < 0) {
                numsToDelete += startIndex;
                startIndex = 0;
            }

            if (arrayOfNumbers.length < startIndex + numsToDelete) {
                numsToDelete = arrayOfNumbers.length - startIndex;
            }

            arrayOfNumbers.splice(startIndex, numsToDelete);
        }
    }

    arrayOfNumbers.map(el => sumOfRemainingNums += el);
    console.log(sumOfRemainingNums);
}
bombNumbers([1, 1, 3, 3, 3, 1,
    2, 4, 7, 9, 4, 5, 6, 7, 3, 1, 1],
    [3, 5]
);
bombNumbers([1, 2, 3, 3, 5, 7, 6, 5, 4, 8, 9, 3, 5, 4], [3, 4]);
