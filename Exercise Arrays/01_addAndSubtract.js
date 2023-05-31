function demo(array) {
    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (currentElement % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        sumOfOriginalArray += currentElement;
        sumOfModifiedArray += array[i];
    }
    console.log(array);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray);
}
demo([5, 15, 23, 56, 35]
    )