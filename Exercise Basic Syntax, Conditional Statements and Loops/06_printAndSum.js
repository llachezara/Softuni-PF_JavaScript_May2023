function demo(startNum, endNum) {
    let output = '';
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        output += i + " ";
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
demo(5,10);