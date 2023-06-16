function demo(array1, array2) {
    let numbersToTake = array2.shift();
    let numsToDeleteFromTakenNums = array2.shift();
    let searchedNumber = array2.shift();

    let arrayWithTakenNums = [];
    for (let i = 0; i < numbersToTake; i++) {

        let currElement = array1.shift();
        arrayWithTakenNums.push(currElement);

    }

    arrayWithTakenNums.splice(0, numsToDeleteFromTakenNums);

    // let joinedArrayWithTakenNums = arrayWithTakenNums.join(' ');
    // let joinedArray1 = array1.join(' ');

    //let manipulatedArray = (joinedArrayWithTakenNums + ' ' + joinedArray1).split(' ');

    let spottedSearchedNumCounter = 0;
    for (const el of arrayWithTakenNums) {

        if (Number(el) === searchedNumber) {
            spottedSearchedNumCounter++;
        }

    }

    console.log(`Number ${searchedNumber} occurs ${spottedSearchedNumCounter} times.`);
}
demo([7, 1, 5, 8, 2, 7],
    [3, 1, 5])