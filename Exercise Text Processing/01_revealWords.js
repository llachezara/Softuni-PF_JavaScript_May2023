function demo(wordsToPut, sentence) {
    
    wordsToPut = wordsToPut.split(', ');
    let wordsFromSentence = sentence.split(' ');

    for (const wordToPut of wordsToPut) {

        for (const word of wordsFromSentence) {

            let indexOfWordToReplace = wordsFromSentence.indexOf(word);

            if (word.includes('*') && word.length === wordToPut.length) {

                wordsFromSentence.splice(indexOfWordToReplace, 1, wordToPut);
            }
        }
    }

    sentence = wordsFromSentence.join(' ');
    console.log(sentence);
}
demo('great',
'softuni is ***** place for learning new programming languages'
)