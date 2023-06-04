function findPairsWithMagicSum(array, magicSum) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextElement = array[j];
            let sum = currentElement + nextElement;

            if (sum === magicSum) {
                result += `${currentElement} ${nextElement}\n`;
            }
        }
    }

    console.log(result);
}
findPairsWithMagicSum([14, 20, 60, 13, 7, 19, 8], 27)