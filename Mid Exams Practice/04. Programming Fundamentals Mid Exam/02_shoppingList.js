function shoppingList(input) {
    let shoppingListArray = input.shift().split('!');

    let lengthOfInput = input.length;
    for (let i = 0; i < lengthOfInput; i++) {

        let commandArray = input.shift().split(' ');
        let command = commandArray[0];

        if (commandArray.includes('Go')) {
            break;
        }

        let item = commandArray[1];
        let indexOfItem = shoppingListArray.indexOf(item);

        switch (command) {
            case 'Urgent':

                if (!shoppingListArray.includes(item)) {
                    shoppingListArray.unshift(item);
                }
                break;

            case 'Unnecessary':

                if (shoppingListArray.includes(item)) {

                    shoppingListArray.splice(indexOfItem, 1);
                }

                break;

            case 'Correct':

                let newItem = commandArray[2];

                if (shoppingListArray.includes(item)) {

                    shoppingListArray.splice(indexOfItem, 1, newItem);
                }

                break;

            case 'Rearrange':
                
            if (shoppingListArray.includes(item)) {

                shoppingListArray.splice(indexOfItem, 1);
                shoppingListArray.push(item);
            }

                break;
        }

    }

    console.log(shoppingListArray.join(', '));
}
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
);