// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the
// smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.

function sorting(array) {
    let sorted = array.sort((a, b) => b - a);
    let result = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength / 2; i++) {
        let firstElement = sorted.shift();
        let lastElement = sorted.pop();

        result.push(firstElement);
        result.push(lastElement);
    }
    console.log(result.join(' '));
}

/*function sorting(array) {
    let arrayLength = array.length;

    let sortedBiggestToSmallest = array.sort((a, b) => b - a);

    let indexToCutFrom = arrayLength / 2;
    let smallestNums = sortedBiggestToSmallest.splice(indexToCutFrom);
    smallestNums.sort((a, b) => a - b);

    let biggerLength = Math.max(sortedBiggestToSmallest.length, smallestNums.length);
    array = [];

    for (let i = 0; i < biggerLength; i++) {
        if (sortedBiggestToSmallest[i] !== undefined) {
            array.push(sortedBiggestToSmallest[i]);
        }
        if (smallestNums[i] !== undefined) {
            array.push(smallestNums[i]);
        }
    }

    console.log(array.join(' '));
}*/
sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94, 11]);
