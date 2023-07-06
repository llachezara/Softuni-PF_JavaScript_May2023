function demo(input) {
    let arrayOfWords = input.split(' ');
    let result = '';

    arrayOfWords = arrayOfWords.map(element => element.toLowerCase());

    let words = {};
    for (const word of arrayOfWords) {

        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }
         words[word] += 1;
    }

    for (const word in words) {
        if (words[word] % 2 !== 0) {
            result += `${word} `;
        }
    }
    console.log(result);
}
demo('Cake IS SWEET is Soft CAKE sweet Food')