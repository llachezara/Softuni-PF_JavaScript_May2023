function demo(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if (i % 2 === 0) {
            newArray.push(Number(array1[i]) + Number(array2[i]));
        } else {
            newArray.push(array1[i] + array2[i]);
        }
    }
    console.log(newArray.join(' - '));
}
demo(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)