function compareNumbers(num1, num2, num3) {
    let smallest = 0;
    if (num1 < num2) {
        if (num1 < num3) {
            smallest = num1;
        } else {
            smallest = num3;
        }
    } else {
        if (num2 < num3) {
            smallest = num2;
        } else {
            smallest = num3;
        }
    }
    return smallest;
}
console.log(compareNumbers(4,4,7));
