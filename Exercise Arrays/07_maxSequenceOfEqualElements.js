function maxSequenceOfEqualElements(array) {
    //     Write a function that finds the longest sequence of equal elements in an array of numbers.
    // If several longest sequences exist, print the leftmost one.
    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            let prevElement = array[i - 1];
            let currentElement = array[i];

            if (currentElement === prevElement) {
                sequence++;
                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentElement;
                }
            } else {
                sequence = 1;
            }
        }
    }
    console.log((maxSequenceNum + ' ').repeat(maxSequence));
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])