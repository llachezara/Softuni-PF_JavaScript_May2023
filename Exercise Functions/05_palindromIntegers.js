function palindromIntegers(array) {
    let isPalindromBool = false;
    let result = '';

    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        result += isPalindrom(currElement) + '\n';
    }

    return result;

    function isPalindrom(num) {
        let numAsString = String(num);

        let numLength = numAsString.length;
        for (let i = 0; i < numLength / 2; i++) {
            let currDigit = numAsString[i];
            let digitSimetricToCurrDigit = numAsString[numLength - 1 - i];

            if (currDigit === digitSimetricToCurrDigit) {
                isPalindromBool = true;
            } else {
                isPalindromBool = false;
                break;
            }
        }

        return isPalindromBool;
    }
}
console.log(palindromIntegers([32, 2, 232, 1010])); 
