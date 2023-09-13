function demo(input) {
    let regex = /([|#])(?<item>[a-zA-Z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let string = input[0];
    let matches = regex.exec(string);

    let totalCalories = 0;
    const caloriesPerDay = 2000;

    let result = '';
    while (matches) {
        let item = matches.groups['item'];
        let expirationDate = matches.groups['expirationDate'];
        let calories = matches.groups['calories'];


        totalCalories += Number(calories);
        result += `Item: ${item}, Best before: ${expirationDate}, Nutrition: ${calories}\n`;
        matches = regex.exec(string);
    }

    let daysForWhichFoodWillLast = Math.floor(totalCalories / caloriesPerDay);
    console.log(`You have food to last you for: ${daysForWhichFoodWillLast} days!`);
    console.log(result);

}
demo(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
demo(['Hello|#Invalid food#19/03/20#450|$5*(@'])
demo([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)