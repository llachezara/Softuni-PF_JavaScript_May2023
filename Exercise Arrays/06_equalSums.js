function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let foundEqualSums = false;
    let indexOfElWithEqualSums = '';
    for (let currElIndex = 0; currElIndex < array.length; currElIndex++) {

        for (let k = currElIndex - 1; k >= 0; k--) {
            let nextElementOnTheLeft = array[k];
            leftSum += nextElementOnTheLeft;
        }

        for (let j = currElIndex + 1; j < array.length; j++) {
            let nextElementOnTheRight = array[j];
            rightSum += nextElementOnTheRight;
        }

        if (rightSum === leftSum) {
            indexOfElWithEqualSums += currElIndex + ' ';
            foundEqualSums = true;
        }

        rightSum = 0;
        leftSum = 0;
    }
    if (foundEqualSums) {
        console.log(indexOfElWithEqualSums);
    } else {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]);