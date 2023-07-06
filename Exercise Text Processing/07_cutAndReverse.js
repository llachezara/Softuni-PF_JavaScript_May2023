function demo(input) {

    let firstHalf = input.substring(0, input.length / 2);
    let secondHalf = input.substring(input.length / 2, input.length + 1);

    let arr = [];
    for (const letter of firstHalf) {
        arr.unshift(letter);
    }
    console.log(arr.join(''));

    arr = [];
    for (const letter of secondHalf) {
        arr.unshift(letter);
    }
    console.log(arr.join(''));
}
demo('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')