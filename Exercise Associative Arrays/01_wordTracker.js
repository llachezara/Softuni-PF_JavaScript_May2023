function demo(input) {
    let wordsToFind = input.shift().split(' ');
    let arrayOfWords = input;
    let words = new Map();
 
    for (const word of wordsToFind) {
        words.set(word, 0);
    }
 
    for (const word of arrayOfWords) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        }
    }
 
    let sortedWords = Array.from(words).sort((a,b) => b[1] - a[1]);
 
    sortedWords.forEach(element => 
          console.log(element.join(` - `))
    );
 
}
demo([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'])
