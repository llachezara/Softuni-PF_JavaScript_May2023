function demo(wordToFind, sentence) {

    wordToFind = wordToFind.toLowerCase();
    let wordsInSentence = sentence.split(' ');

    let isFound = false;
    for (const word of wordsInSentence) {

        if (wordToFind === word.toLowerCase()) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(wordToFind);
    } else {
        console.log(`${wordToFind} not found!`);
    }
}
demo('javascript',
    'JavaScript is the best programming language');
console.log('----------------------------');
demo('python',
    'JavaScript is the best programming language')