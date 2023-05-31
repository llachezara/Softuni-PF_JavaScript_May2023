function demo(array, rotations) {
    let newArray = [];
    for (let i = 0; i < rotations; i++) {
        const element = array[i];
        let firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array.join(' '));
}
demo([2, 4, 15, 31], 5);