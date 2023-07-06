function demo(input) {

    let wordsArr = [];
    for (let index = 0; index < input.length - 1; index++) {

        let currSymbol = input[index];
        let nextSymbol = input[index + 1];

        nextSymbolCode = nextSymbol.charCodeAt();

        if (nextSymbolCode >= 65 && nextSymbolCode <= 90) {

            let word = input.substring(0, index + 1);
            wordsArr.push(word);
            input = input.replace(word, '');

            index = -1;
        }

    }

    if (input.length > 0) {
        wordsArr.push(input);
    }

    console.log(wordsArr.join(', '));
} demo('ThisIsSoAnnoyingToDoGoNoMePascal' )