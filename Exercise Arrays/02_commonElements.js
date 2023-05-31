function demo(array1, array2) {
    let output = '';
    for (let i = 0; i < array1.length; i++) {
        let currentElement = array1[i];
        if (array2.includes(currentElement)) {
            output += currentElement + '\n';
        }
    }
    console.log(output);
}
demo(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)