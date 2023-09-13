function reset(arrayOfPasswordAndCommands) {
    let password = arrayOfPasswordAndCommands.shift();

    for (const command of arrayOfPasswordAndCommands) {

        if (command === 'Done') {
            break;
        }

        if (command.includes("TakeOdd")) {

            let passwordCharsArray = password.split('');

            password = passwordCharsArray.filter((item, index) => index % 2 !== 0).join('');
            console.log(password);
        } else if (command.includes('Cut')) {
            let tokens = command.replace('Cut ', '');
            let [index, length] = tokens.split(' ');
            index = Number(index);
            length = Number(length);

            let stringToCut = password.substring(index, index + length);
            password = password.replace(stringToCut, '');
            console.log(password);

        } else if (command.includes('Substitute')) {

            let tokens = command.replace('Substitute ', '');
            let [substring, substitute] = tokens.split(' ');

            if (password.includes
                (substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            } else {

                console.log("Nothing to replace!");
            }
            
        }
    }
    console.log((`Your password is: ${password}`));
}
reset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

