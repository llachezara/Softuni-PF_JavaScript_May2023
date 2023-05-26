function demo(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let newNum = parseFloat(number.toFixed(precision));
    console.log(newNum);
}
demo(3.141590000000000000000000000,2);