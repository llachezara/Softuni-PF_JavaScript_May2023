function removeAlreadyExistingElements(array) {
    let newArray = [];
    for (const el of array) {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    }

    console.log(newArray.join(' '));
}
removeAlreadyExistingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);