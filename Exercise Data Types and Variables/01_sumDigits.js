function digitSum(number) {
    let num = String(number);
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        let currentDigit=Number(num[index]);
        sum += currentDigit;
    }

    console.log(sum);
}
digitSum(2345);