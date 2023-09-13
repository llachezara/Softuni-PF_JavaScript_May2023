function demo(arrayOfCommands) {
    let activationKey = arrayOfCommands.shift();

    for (const command of arrayOfCommands) {

        if (command === 'Generate') {
            break;
        }

        let startIndex;
        let endIndex;

        if (command.includes('Contains')) {

            let tokens = command.replace('Contains>>>', '').split('>>>');
            let substring = tokens[0];

            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }


        } else if (command.includes('Flip')) {
            let commandCopy = command;
            let tokens = command.replace(/Flip>>>(Upper)?(Lower)?>>>/, '').split('>>>');

            startIndex = Number(tokens[0]);
            endIndex = Number(tokens[1]);

            let substringToChange = activationKey.substring(startIndex, endIndex);

            if (commandCopy.includes('Upper')) {
                let changedSubstring = substringToChange.toUpperCase();
                activationKey = activationKey.replace(substringToChange, changedSubstring);
            }
            if (commandCopy.includes('Lower')) {
                let changedSubstring = substringToChange.toLowerCase();
                activationKey = activationKey.replace(substringToChange, changedSubstring);
            }

            console.log(activationKey);

        } else if (command.includes('Slice')) {

            let tokens = command.replace('Slice>>>', '').split('>>>');
            startIndex = Number(tokens[0]);
            endIndex = Number(tokens[1]);

            let stringToDelete = '';
            for (let index = startIndex; index < endIndex; index++) {
                let symbol = activationKey[index];
                stringToDelete += symbol;
            }

            activationKey = activationKey.replace(stringToDelete, '');
            console.log(activationKey);
        }
    }

    console.log(`Your activation key is: ${activationKey}`);
} demo(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

