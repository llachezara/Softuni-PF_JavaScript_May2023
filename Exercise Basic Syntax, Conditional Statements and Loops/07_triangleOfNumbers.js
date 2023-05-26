function demo(input) {
    let num = input;
    let result = "";
    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            result += rows + " ";
        }

        console.log(result);
        result = "";
    }
}
demo(3);