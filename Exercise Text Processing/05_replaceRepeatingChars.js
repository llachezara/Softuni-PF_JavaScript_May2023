function demo(input) {

    let newString = '';
    for (let i = 0; i < input.length - 1; i++) {
        
        let currSymbol = input[i];
        let nextSymbol = input[i + 1];

        if (!newString.includes(currSymbol)) {
            newString += currSymbol;
        }

        if (currSymbol !== nextSymbol) {
            newString += nextSymbol;
        }

    }

    console.log(newString);
}
demo('aaabbbjffflkj');