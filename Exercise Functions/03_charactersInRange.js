function printAsciiCharacters(char1, char2) {
    let beginCode = Math.min(convert(char1), convert(char2));
    let endCode = Math.max(convert(char1), convert(char2));
    let arrayOfCharsInRange = [];

    for (let i = beginCode+1; i < endCode; i++) {
        let currentChar = String.fromCharCode(i);
        arrayOfCharsInRange.push(currentChar);
    }

    function convert(char) {
        return char.charCodeAt();
    };

    return arrayOfCharsInRange.join(' ');
}
console.log(printAsciiCharacters('C', '#')); 