function topInteger(array) {
    // A top integer is an integer, which is bigger than all the
    // elements to its right.
    let result = '';
    let isTopInteger = true;
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextElement = array[j];
            let biggerElement = Math.max(currentElement, nextElement);
            if (currentElement !== biggerElement || currentElement === nextElement) {
                isTopInteger = false;
                break;
            } else {
                isTopInteger = true;
            }
        }
        if (isTopInteger || i === array.length - 1) {
            result += currentElement + ' ';
        }
    }
    console.log(result);
}
topInteger([41, 41, 34, 20, 29, 56, 82, 34]);