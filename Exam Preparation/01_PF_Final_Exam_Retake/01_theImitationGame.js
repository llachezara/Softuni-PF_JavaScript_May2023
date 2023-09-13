function demo(input) {
    let message = input.shift();

    i = 0;
    let command = input[0];
    while (command !== 'Decode') {
        let tokens = command.split('|');
        let action = tokens[0];

        switch (action) {
            case 'Move':

                let numberOfletters = tokens[1];
                let lettersToMove = message.substring(0, numberOfletters);
                let otherLetters = message.substring(numberOfletters);
                message = otherLetters + lettersToMove;

                break;

            case 'Insert':

                let indexToInsertAt = tokens[1];
                let valueToInsert = tokens[2];
                message = message.substring(0, indexToInsertAt) + valueToInsert + message.substring(indexToInsertAt);

                break;

            case 'ChangeAll':

                let substringToChange = tokens[1];
                let replacement = tokens[2];
                while (message.includes(substringToChange)) {
                    message = message.replace(substringToChange, replacement);
                }

                break;

        }

        i++;
        command = input[i];
    }

    console.log(`The decrypted message is: ${message}`);
}
demo([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
   ])