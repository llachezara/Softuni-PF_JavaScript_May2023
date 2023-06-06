function perfectNumberOrNot(number) {
    //     A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its
    // positive divisors excluding the number itself (also known as its aliquot sum).
    let isPerfectNumber = isPerfect(number);

    if (isPerfectNumber) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

    function isPerfect(num) {
        let isPerfect = false;
        let sumOfDividers = 0;

        for (let divider = 1; divider < num; divider++) {
            if (num % divider === 0) {
                sumOfDividers += divider;
            }
        }

        if (sumOfDividers === num) {
            isPerfect = true;
        }

        return isPerfect;
    }
}
perfectNumberOrNot(28);