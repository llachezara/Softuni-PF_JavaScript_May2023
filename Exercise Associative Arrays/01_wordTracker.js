function demo(data) {
    let wordsToFind = data.shift().split(' ');

    let counter = 0;
    let obj = {};
    let arrayOfOccurences = [];

    for (const word of wordsToFind) {
        obj[word] = 0;

        for (const wordToCheck of data) {
            if (word === wordToCheck) {
                counter++;
            }
        }

        obj[word] = counter;
        arrayOfOccurences.push(obj[word]);

        counter = 0;
    }

    arrayOfOccurences = arrayOfOccurences.sort((a, b) => b - a);
    console.log(arrayOfOccurences);
    
    for (const word in obj) {
       for (const occurrences of arrayOfOccurences) {
         if (occurrences === obj[word]) {
            console.log(`${word} - ${obj[word]}`);
         }
       }
    }
} demo([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'] )